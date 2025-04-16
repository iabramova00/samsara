#!/bin/sh
if [ -z "$HUSKY" ]; then
  debug () {
    if [ "$HUSKY_DEBUG" = "1" ]; then
      echo "> $*" >&2
    fi
  }

  debug "executing husky.sh"
  export PATH="$PATH:./node_modules/.bin"
fi
