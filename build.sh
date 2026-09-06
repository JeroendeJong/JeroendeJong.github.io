#!/usr/bin/env bash
set -euo pipefail

DEPLOY_DIR="gh-pages-dist"

cleanup_deploy_worktree() {
  if git worktree list --porcelain | grep -q "worktree $(pwd)/${DEPLOY_DIR}$"; then
    git worktree remove --force "${DEPLOY_DIR}"
  elif [ -d "${DEPLOY_DIR}" ]; then
    rm -rf "${DEPLOY_DIR}"
  fi
}

rm -rf dist/
rm -rf textual-clock/
cleanup_deploy_worktree

corepack yarn install --immutable
corepack yarn build

pushd modules/ >/dev/null

# Install and ready up the textual clock project
git clone https://github.com/JeroendeJong/textual-clock
pushd textual-clock >/dev/null
corepack yarn install
BASE="textual-clock/" corepack yarn build
mv ./dist ../../dist/textual-clock
popd >/dev/null

# Install and ready up the liquid clock project
git clone https://github.com/JeroendeJong/liquid-clock
pushd liquid-clock >/dev/null
corepack yarn install
BASE="liquid-clock/" corepack yarn build
mv ./dist ../../dist/liquid-clock
popd >/dev/null

popd >/dev/null
rm -rf modules/textual-clock/
rm -rf modules/liquid-clock/

git fetch origin gh-pages
git branch -f gh-pages origin/gh-pages
git worktree add "${DEPLOY_DIR}" gh-pages
trap cleanup_deploy_worktree EXIT

# save .git file from being deleted by the generator
find "${DEPLOY_DIR}" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a ./dist/. "${DEPLOY_DIR}/"
git -C "${DEPLOY_DIR}" checkout origin/gh-pages -- CNAME || true

git -C "${DEPLOY_DIR}" add -A
git -C "${DEPLOY_DIR}" commit -m "PAGES: upload v1.8"
git -C "${DEPLOY_DIR}" push origin gh-pages

cleanup_deploy_worktree
