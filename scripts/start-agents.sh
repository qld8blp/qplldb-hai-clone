#!/bin/bash

# HAI Website Clone - Agent Deployment Script
# This script starts all background agents for monitoring and coordination

echo "🚀 Starting HAI Website Clone Background Agents..."

# Ensure we're in the correct directory
cd "$(dirname "$0")/.."

# Create necessary directories
mkdir -p agents/logs agents/reports

# Check if Node.js and npm are available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to run agents."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm to run agents."
    exit 1
fi

# Install required dependencies if not present
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if ts-node is available
if ! npx ts-node --version &> /dev/null; then
    echo "📦 Installing ts-node for TypeScript execution..."
    npm install -D ts-node @types/node
fi

# Start the Agent Manager (which will start all other agents)
echo "🤖 Starting Agent Manager..."
echo "Logs will be available in agents/logs/"
echo "Reports will be generated in agents/reports/"
echo ""
echo "To stop agents, press Ctrl+C or run: scripts/stop-agents.sh"
echo "To view agent status, run: scripts/agent-status.sh"
echo ""

# Run the agent manager
npx ts-node agents/agent-manager.ts