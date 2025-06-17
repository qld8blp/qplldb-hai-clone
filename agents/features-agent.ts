/**
 * Features Specialist Background Agent
 * 
 * This agent runs continuously to monitor interactive functionality
 * - Tests navigation dropdowns and mobile menu
 * - Verifies CTA buttons and links
 * - Monitors form functionality
 * - Reports broken or missing interactive features
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

interface FeaturesReport {
  timestamp: string;
  functionalityScore: number;
  brokenFeatures: string[];
  missingFeatures: string[];
  fixes: string[];
  status: 'critical' | 'needs_work' | 'functional';
}

class FeaturesAgent {
  private agentId = 'features-specialist';
  private checkInterval = 45000; // 45 seconds
  private reportPath = path.join(process.cwd(), 'agents', 'reports', 'features-report.json');
  private logPath = path.join(process.cwd(), 'agents', 'logs', 'features-agent.log');
  private isRunning = false;

  constructor() {
    this.ensureDirectories();
    this.log('Features Specialist Agent initialized');
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
    const logEntry = `[${timestamp}] [${this.agentId}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logPath, logEntry);
  }

  private async testServerConnectivity(): Promise<boolean> {
    try {
      // More robust server testing with multiple checks
      const testCommands = [
        'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000',
        'curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000',
        'netstat -tlnp 2>/dev/null | grep :3000 || ss -tlnp 2>/dev/null | grep :3000 || lsof -i :3000 2>/dev/null'
      ];
      
      for (const cmd of testCommands) {
        try {
          const { stdout } = await execAsync(cmd);
          if (stdout.trim() === '200' || stdout.includes(':3000')) {
            this.log(`Server detected: ${cmd}`);
            return true;
          }
        } catch (cmdError) {
          // Continue to next test
        }
      }
      
      this.log('Server connectivity: No active server detected on port 3000');
      return false;
    } catch (error) {
      this.log(`Server connectivity test failed: ${error}`);
      return false;
    }
  }

  private async analyzeFunctionality(): Promise<FeaturesReport> {
    this.log('Analyzing interactive functionality...');
    
    const brokenFeatures: string[] = [];
    const missingFeatures: string[] = [];
    const fixes: string[] = [];
    let functionalityScore = 100;

    try {
      // Test server connectivity first
      const serverRunning = await this.testServerConnectivity();
      if (!serverRunning) {
        brokenFeatures.push('Development server not responding on localhost:3000');
        fixes.push('Restart Next.js development server with npm run dev');
        functionalityScore -= 30;
      }

      // Analyze Header component for navigation issues
      const headerPath = path.join(process.cwd(), 'src', 'components', 'Header.tsx');
      const headerContent = fs.readFileSync(headerPath, 'utf8');

      // Check for dropdown functionality
      if (headerContent.includes('onMouseEnter') && headerContent.includes('onMouseLeave')) {
        // Check if dropdown content is properly conditional
        if (!headerContent.includes('isProductsOpen &&')) {
          brokenFeatures.push('Products dropdown state management broken');
          fixes.push('Fix conditional rendering of dropdown menus in Header.tsx');
          functionalityScore -= 15;
        }
        if (!headerContent.includes('isCareersOpen &&')) {
          brokenFeatures.push('Career dropdown state management broken');
          fixes.push('Fix conditional rendering of career dropdown in Header.tsx');
          functionalityScore -= 15;
        }
      } else {
        brokenFeatures.push('Navigation dropdowns missing hover handlers');
        fixes.push('Implement proper dropdown hover state management');
        functionalityScore -= 20;
      }

      // Check for mobile menu functionality
      if (headerContent.includes('isMenuOpen &&')) {
        this.log('Mobile menu conditional rendering found');
      } else {
        brokenFeatures.push('Mobile menu not properly implemented');
        fixes.push('Fix mobile menu state management in Header.tsx');
        functionalityScore -= 15;
      }

      // Check for social media links
      if (headerContent.includes('href="#"')) {
        brokenFeatures.push('Social media links pointing to placeholder "#"');
        fixes.push('Update social media links to actual URLs');
        functionalityScore -= 10;
      }

      // Check homepage for CTA functionality
      const homepagePath = path.join(process.cwd(), 'src', 'app', 'page.tsx');
      const homeContent = fs.readFileSync(homepagePath, 'utf8');

      // Count CTA buttons
      const ctaButtons = homeContent.match(/<button[^>]*>/g) || [];
      if (ctaButtons.length > 0) {
        this.log(`Found ${ctaButtons.length} CTA buttons`);
        
        // Check if any have onClick handlers
        const hasOnClick = homeContent.includes('onClick');
        if (!hasOnClick) {
          brokenFeatures.push(`${ctaButtons.length} CTA buttons have no functionality`);
          fixes.push('Add onClick handlers or form actions to CTA buttons');
          functionalityScore -= 10;
        }
      }

      // Check for missing forms
      if (!homeContent.includes('<form') && !fs.existsSync(path.join(process.cwd(), 'src', 'components', 'ContactForm.tsx'))) {
        missingFeatures.push('Contact form not implemented');
        fixes.push('Create ContactForm component with validation');
        functionalityScore -= 15;
      }

      if (!homeContent.includes('newsletter') && !homeContent.includes('email list')) {
        missingFeatures.push('Newsletter signup form missing');
        fixes.push('Add newsletter signup form to homepage or footer');
        functionalityScore -= 10;
      }

    } catch (error) {
      this.log(`Error during functionality analysis: ${error}`);
      brokenFeatures.push('Failed to analyze source files');
      functionalityScore -= 15;
    }

    const status: FeaturesReport['status'] = 
      functionalityScore >= 90 ? 'functional' : 
      functionalityScore >= 70 ? 'needs_work' : 
      'critical';

    return {
      timestamp: new Date().toISOString(),
      functionalityScore,
      brokenFeatures,
      missingFeatures,
      fixes,
      status
    };
  }

  private saveReport(report: FeaturesReport) {
    try {
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      this.log(`Report saved: ${report.functionalityScore}% functional, ${report.brokenFeatures.length} broken features`);
    } catch (error) {
      this.log(`Failed to save report: ${error}`);
    }
  }

  public async start() {
    if (this.isRunning) {
      this.log('Agent already running');
      return;
    }

    this.isRunning = true;
    this.log('Starting Features Agent monitoring...');

    const runCycle = async () => {
      if (!this.isRunning) return;

      try {
        const report = await this.analyzeFunctionality();
        this.saveReport(report);

        if (report.status === 'critical') {
          this.log(`🚨 CRITICAL ISSUES - Functionality: ${report.functionalityScore}%`);
          report.brokenFeatures.forEach(feature => this.log(`  ❌ ${feature}`));
          report.missingFeatures.forEach(feature => this.log(`  ⚠️ MISSING: ${feature}`));
          report.fixes.forEach(fix => this.log(`  🔧 ${fix}`));
        } else if (report.status === 'functional') {
          this.log(`✅ FUNCTIONAL - Score: ${report.functionalityScore}%`);
        } else {
          this.log(`⚠️ NEEDS WORK - Score: ${report.functionalityScore}%`);
          if (report.brokenFeatures.length > 0) {
            this.log(`  ${report.brokenFeatures.length} broken features need attention`);
          }
        }

      } catch (error) {
        this.log(`Error in monitoring cycle: ${error}`);
      }

      // Schedule next check
      setTimeout(runCycle, this.checkInterval);
    };

    // Start monitoring
    runCycle();
  }

  public stop() {
    this.isRunning = false;
    this.log('Features Agent stopped');
  }

  public getStatus(): { isRunning: boolean; reportPath: string; logPath: string } {
    return {
      isRunning: this.isRunning,
      reportPath: this.reportPath,
      logPath: this.logPath
    };
  }
}

// Agent entry point
if (require.main === module) {
  const agent = new FeaturesAgent();
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down gracefully...');
    agent.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    agent.stop();
    process.exit(0);
  });

  // Start the agent
  agent.start();
  
  console.log('Features Agent is running. Press Ctrl+C to stop.');
}

module.exports = FeaturesAgent;