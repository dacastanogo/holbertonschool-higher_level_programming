#!/bin/bash
# Curls request and display bytes
curl -Si "$1" | grep "Content-Length" | cut -d ':' -f 2
