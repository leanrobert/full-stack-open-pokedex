#!/bin/bash
url="http://localhost:5000/health"

response=$(curl --sSl $url)

if [[ "$response" =~ "ok" ]]; then
  echo "Health check endpoint is working correctly"
  exit 0
else
  echo "Error: Health check endopint returned an unexpected response."
  exit 1
fi