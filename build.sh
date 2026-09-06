rm -rf dist/
rm -rf textual-clock/

corepack yarn install --immutable
corepack yarn build

cd modules/

git clone https://github.com/JeroendeJong/textual-clock
cd textual-clock
corepack yarn install
BASE="textual-clock/" corepack yarn build
mv ./dist ../../dist/textual-clock

cd ..
cd ..
rm -rf modules/textual-clock/

git worktree add gh-pages-dist gh-pages --no-checkout

# save .git file from being deleted by the generator
cp -a ./dist/. ./gh-pages-dist/

cd gh-pages-dist

git checkout origin/gh-pages -- CNAME 


git commit -m "PAGES: upload v1.8"
git push

cd .. 
git worktree remove gh-pages-dist
