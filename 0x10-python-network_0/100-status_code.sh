#!/bin/bash
# curls just response code
curl -s -o /dev/null -w "%{http_code}" "$1"
