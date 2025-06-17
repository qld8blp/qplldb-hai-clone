#!/bin/bash
# AI Helper Scripts for HAI Development

# Generate commit message using git diff
generate_commit() {
    echo "📝 Analyzing changes for commit message..."
    git add -A
    git diff --cached > /tmp/git-diff.txt
    echo "Please review the staged changes and create a commit message"
}

# Quick code review
ai_review() {
    echo "🔍 Running AI code review..."
    # This would integrate with Cursor's AI to review recent changes
    git diff HEAD~1
}

# Find similar code patterns
find_pattern() {
    if [ -z "$1" ]; then
        echo "Usage: find_pattern <pattern>"
        return 1
    fi
    echo "🔎 Searching for pattern: $1"
    rg "$1" --type ts --type tsx -A 2 -B 2
}

# Generate test file for component
generate_test() {
    if [ -z "$1" ]; then
        echo "Usage: generate_test <component-path>"
        return 1
    fi
    echo "🧪 Generating test for: $1"
    # This would create a test file template
}

echo "AI helpers loaded! Available commands:"
echo "  - generate_commit: Create AI commit message"
echo "  - ai_review: Review recent changes"
echo "  - find_pattern <pattern>: Find code patterns"
echo "  - generate_test <file>: Generate test file"