/**
 * Agent Manager - Orchestrates all background agents
 * 
 * This is the master coordinator that:
 * - Manages lifecycle of all specialized agents
 * - Coordinates findings between agents
 * - Provides unified reporting and status
 * - Optimizes project workflow based on agent feedback
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

interface AgentConfig {
  name: string;
  script: string;
  description: string;
  process?: any;
  status: 'stopped' | 'starting' | 'running' | 'error';
  lastReport?: any;
  restartCount: number;
}

interface ProjectStatus {
  timestamp: string;
  overallProgress: number;
  activeAgents: number;
  criticalIssues: string[];
  recommendations: string[];
  nextActions: string[];
}

class AgentManager {
  private managerId = 'agent-manager';
  private statusInterval = 60000; // 1 minute
  private reportPath = path.join(process.cwd(), 'agents', 'reports', 'project-status.json');
  private logPath = path.join(process.cwd(), 'agents', 'logs', 'agent-manager.log');
  private isRunning = false;

  private agents: AgentConfig[] = [
    {
      name: 'page-layout-specialist',
      script: path.join(process.cwd(), 'agents', 'page-layout-agent.ts'),
      description: 'Monitors visual accuracy and layout compliance',
      status: 'stopped',
      restartCount: 0
    },
    {
      name: 'features-specialist',
      script: path.join(process.cwd(), 'agents', 'features-agent.ts'),
      description: 'Tests interactive functionality and user experience',
      status: 'stopped',
      restartCount: 0
    }
  ];

  constructor() {
    this.ensureDirectories();
    this.log('Agent Manager initialized');
  }

  private ensureDirectories() {
    const reportsDir = path.dirname(this.reportPath);
    const logsDir = path.dirname(this.logPath);
    
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${this.managerId}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logPath, logEntry);
  }

  private async startAgent(agent: AgentConfig): Promise<boolean> {
    try {
      this.log(`Starting agent: ${agent.name}`);
      agent.status = 'starting';

      // Use npx ts-node to run TypeScript directly
      const childProcess = spawn('npx', ['ts-node', agent.script], {
        cwd: process.cwd(),
        stdio: ['ignore', 'pipe', 'pipe'],
        detached: false
      });

      agent.process = childProcess;

      // Handle process output
      childProcess.stdout?.on('data', (data: any) => {
        this.log(`[${agent.name}] ${data.toString().trim()}`);
      });

      childProcess.stderr?.on('data', (data: any) => {
        this.log(`[${agent.name}] ERROR: ${data.toString().trim()}`);
      });

      // Handle process events
      childProcess.on('spawn', () => {
        agent.status = 'running';
        this.log(`✅ Agent ${agent.name} started successfully (PID: ${childProcess.pid})`);
      });

      childProcess.on('error', (error: any) => {
        agent.status = 'error';
        this.log(`❌ Agent ${agent.name} failed to start: ${error.message}`);
      });

      childProcess.on('exit', (code: any, signal: any) => {
        agent.status = 'stopped';
        this.log(`⚠️ Agent ${agent.name} exited (code: ${code}, signal: ${signal})`);
        
        // Auto-restart if not intentionally stopped and restart count is reasonable
        if (this.isRunning && agent.restartCount < 3 && code !== 0) {
          setTimeout(() => {
            agent.restartCount++;
            this.log(`Restarting agent ${agent.name} (attempt ${agent.restartCount})`);
            this.startAgent(agent);
          }, 5000);
        }
      });

      return true;
    } catch (error) {
      this.log(`Failed to start agent ${agent.name}: ${error}`);
      agent.status = 'error';
      return false;
    }
  }

  private stopAgent(agent: AgentConfig) {
    if (agent.process && agent.status === 'running') {
      this.log(`Stopping agent: ${agent.name}`);
      agent.process.kill('SIGTERM');
      agent.status = 'stopped';
    }
  }

  private async loadAgentReports(): Promise<any[]> {
    const reports: any[] = [];
    
    for (const agent of this.agents) {
      try {
        const reportPath = path.join(process.cwd(), 'agents', 'reports', `${agent.name.replace('-specialist', '')}-report.json`);
        if (fs.existsSync(reportPath)) {
          const reportData = fs.readFileSync(reportPath, 'utf8');
          const report = JSON.parse(reportData);
          report.agentName = agent.name;
          reports.push(report);
          agent.lastReport = report;
        }
      } catch (error) {
        this.log(`Failed to load report for ${agent.name}: ${error}`);
      }
    }
    
    return reports;
  }

  private calculateOverallProgress(reports: any[]): number {
    if (reports.length === 0) return 0;
    
    let totalScore = 0;
    let weights = 0;
    
    for (const report of reports) {
      if (report.accuracyScore !== undefined) {
        totalScore += report.accuracyScore * 0.4; // Layout weight: 40%
        weights += 0.4;
      }
      if (report.functionalityScore !== undefined) {
        totalScore += report.functionalityScore * 0.6; // Functionality weight: 60%
        weights += 0.6;
      }
    }
    
    return weights > 0 ? Math.round(totalScore / weights) : 0;
  }

  private async generateProjectStatus(): Promise<ProjectStatus> {
    const reports = await this.loadAgentReports();
    const overallProgress = this.calculateOverallProgress(reports);
    const activeAgents = this.agents.filter(a => a.status === 'running').length;
    
    const criticalIssues: string[] = [];
    const recommendations: string[] = [];
    const nextActions: string[] = [];
    
    // Analyze reports for critical issues and recommendations
    for (const report of reports) {
      if (report.issues) {
        criticalIssues.push(...report.issues);
      }
      if (report.brokenFeatures) {
        criticalIssues.push(...report.brokenFeatures);
      }
      if (report.improvements) {
        recommendations.push(...report.improvements);
      }
      if (report.fixes) {
        recommendations.push(...report.fixes);
      }
    }
    
    // Generate next actions based on current status
    if (overallProgress < 70) {
      nextActions.push('Address critical functionality issues');
      nextActions.push('Fix broken navigation components');
    }
    if (overallProgress < 85) {
      nextActions.push('Complete missing features implementation');
      nextActions.push('Replace placeholder elements');
    }
    if (overallProgress >= 85) {
      nextActions.push('Perform final quality assurance testing');
      nextActions.push('Optimize performance and SEO');
    }
    
    return {
      timestamp: new Date().toISOString(),
      overallProgress,
      activeAgents,
      criticalIssues: [...new Set(criticalIssues)], // Remove duplicates
      recommendations: [...new Set(recommendations)],
      nextActions
    };
  }

  private saveProjectStatus(status: ProjectStatus) {
    try {
      fs.writeFileSync(this.reportPath, JSON.stringify(status, null, 2));
      this.log(`Project status updated: ${status.overallProgress}% progress, ${status.activeAgents} active agents`);
    } catch (error) {
      this.log(`Failed to save project status: ${error}`);
    }
  }

  public async start() {
    if (this.isRunning) {
      this.log('Agent Manager already running');
      return;
    }

    this.isRunning = true;
    this.log('🚀 Starting Agent Manager...');

    // Start all configured agents
    for (const agent of this.agents) {
      await this.startAgent(agent);
      // Small delay between agent starts
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Start status monitoring loop
    const statusLoop = async () => {
      if (!this.isRunning) return;

      try {
        const status = await this.generateProjectStatus();
        this.saveProjectStatus(status);

        this.log(`📊 PROJECT STATUS: ${status.overallProgress}% complete`);
        if (status.criticalIssues.length > 0) {
          this.log(`⚠️ ${status.criticalIssues.length} critical issues need attention`);
        }
        if (status.nextActions.length > 0) {
          this.log(`📋 Next actions: ${status.nextActions[0]}`);
        }

      } catch (error) {
        this.log(`Error in status monitoring: ${error}`);
      }

      setTimeout(statusLoop, this.statusInterval);
    };

    // Start status monitoring
    statusLoop();
    
    this.log('✅ Agent Manager started successfully');
  }

  public async stop() {
    this.isRunning = false;
    this.log('Stopping Agent Manager...');

    // Stop all agents
    for (const agent of this.agents) {
      this.stopAgent(agent);
    }

    this.log('Agent Manager stopped');
  }

  public getStatus() {
    return {
      isRunning: this.isRunning,
      agents: this.agents.map(a => ({
        name: a.name,
        status: a.status,
        restartCount: a.restartCount,
        hasProcess: !!a.process
      })),
      reportPath: this.reportPath,
      logPath: this.logPath
    };
  }
}

// Agent Manager entry point
if (require.main === module) {
  const manager = new AgentManager();
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down Agent Manager...');
    manager.stop().then(() => {
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down Agent Manager...');
    manager.stop().then(() => {
      process.exit(0);
    });
  });

  // Start the agent manager
  manager.start();
  
  console.log('Agent Manager is running. Press Ctrl+C to stop all agents.');
}

module.exports = AgentManager;