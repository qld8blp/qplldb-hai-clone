#!/bin/bash

# HAI Website Clone - Agent Status Script
# This script shows the current status of all background agents

echo "📊 HAI Website Clone - Agent Status Report"
echo "=========================================="

# Check if agents directory exists
if [ ! -d "agents" ]; then
    echo "❌ Agents directory not found. Run scripts/start-agents.sh first."
    exit 1
fi

# Show running processes
echo ""
echo "🔍 Running Agent Processes:"
if pgrep -f "ts-node.*agent.*\.ts" > /dev/null; then
    ps aux | grep -E "ts-node.*agent.*\.ts" | grep -v grep | while read line; do
        echo "  ✅ $line"
    done
else
    echo "  ❌ No agent processes running"
fi

# Show log files and their recent content
echo ""
echo "📋 Recent Agent Logs:"
if [ -d "agents/logs" ]; then
    for logfile in agents/logs/*.log; do
        if [ -f "$logfile" ]; then
            echo ""
            echo "📄 $(basename "$logfile"):"
            echo "   Last modified: $(stat -c %y "$logfile" 2>/dev/null || stat -f %Sm "$logfile" 2>/dev/null || echo "Unknown")"
            echo "   Recent entries:"
            tail -3 "$logfile" | sed 's/^/     /'
        fi
    done
else
    echo "  ❌ No log directory found"
fi

# Show report files
echo ""
echo "📊 Latest Agent Reports:"
if [ -d "agents/reports" ]; then
    for reportfile in agents/reports/*.json; do
        if [ -f "$reportfile" ]; then
            echo ""
            echo "📈 $(basename "$reportfile"):"
            # Extract key metrics from JSON reports
            if command -v jq &> /dev/null; then
                echo "   Timestamp: $(jq -r '.timestamp // "Unknown"' "$reportfile")"
                echo "   Accuracy Score: $(jq -r '.accuracyScore // .functionalityScore // "N/A"' "$reportfile")"
                echo "   Status: $(jq -r '.status // "Unknown"' "$reportfile")"
                echo "   Issues: $(jq -r '(.issues // .brokenFeatures // []) | length' "$reportfile")"
            else
                echo "   Last modified: $(stat -c %y "$reportfile" 2>/dev/null || stat -f %Sm "$reportfile" 2>/dev/null || echo "Unknown")"
                echo "   (Install 'jq' for detailed JSON parsing)"
            fi
        fi
    done
else
    echo "  ❌ No reports directory found"
fi

# Show project status if available
echo ""
echo "🎯 Project Status:"
if [ -f "agents/reports/project-status.json" ]; then
    if command -v jq &> /dev/null; then
        echo "   Overall Progress: $(jq -r '.overallProgress // "Unknown"' agents/reports/project-status.json)%"
        echo "   Active Agents: $(jq -r '.activeAgents // "Unknown"' agents/reports/project-status.json)"
        echo "   Critical Issues: $(jq -r '(.criticalIssues // []) | length' agents/reports/project-status.json)"
        echo "   Next Actions: $(jq -r '.nextActions[0] // "None"' agents/reports/project-status.json)"
    else
        echo "   Project status file exists (install 'jq' for details)"
    fi
else
    echo "   ❌ No project status report found"
fi

echo ""
echo "=========================================="
echo "💡 Commands:"
echo "   Start agents: scripts/start-agents.sh"
echo "   Stop agents:  scripts/stop-agents.sh"
echo "   View this status: scripts/agent-status.sh"