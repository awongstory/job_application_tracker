#!/bin/bash
#
# Builds the frontend + backend into a single jar and runs it.
# Usage: ./run.sh
#
# Requires Java 17+ installed. Does NOT require Node or Maven installed
# globally — the Maven wrapper (./mvnw) and frontend-maven-plugin handle both.

set -e  # exit immediately if any command fails

cd "$(dirname "$0")/backend"

echo "Building frontend + backend (this installs a local Node if needed)..."
./mvnw clean package

echo ""
echo "Starting application..."
JAR_FILE=$(find target -maxdepth 1 -name "*.jar" ! -name "*.original" | head -n 1)

if [ -z "$JAR_FILE" ]; then
  echo "Error: could not find built jar in backend/target/"
  exit 1
fi

java -jar "$JAR_FILE"