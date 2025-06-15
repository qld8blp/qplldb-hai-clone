#!/bin/bash

# HAI Website Clone - Agent Stop Script
# This script stops all background agents

echo "🛑 Stopping HAI Website Clone Background Agents..."

# Find and kill agent processes
echo "Looking for running agent processes..."

# Kill ts-node processes running our agents
pkill -f "ts-node.*agent.*\.ts" && echo "✅ Agent processes terminated" || echo "ℹ️ No agent processes found"

# Kill any remaining agent-manager processes
pkill -f "agent-manager" && echo "✅ Agent Manager terminated" || echo "ℹ️ No Agent Manager process found"

echo "🏁 All agents stopped"