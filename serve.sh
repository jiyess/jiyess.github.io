#!/usr/bin/env bash
#
# Local preview server.
#
# GitHub Pages builds the live site with its own pinned github-pages gem set
# (Jekyll 3.x), which can't run on modern Ruby. This script previews the site
# locally with a modern Jekyll (Gemfile.local) — visuals are identical.
#
# Usage:  ./serve.sh           then open http://localhost:4000
#
set -e
cd "$(dirname "$0")"

# Homebrew Ruby (system Ruby 2.6 is too old for current gems)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export BUNDLE_GEMFILE="Gemfile.local"

# Install deps on first run / when Gemfile.local changes
bundle check >/dev/null 2>&1 || bundle install

exec bundle exec jekyll serve \
  --config _config.yml,_config.dev.yml \
  --livereload \
  "$@"
