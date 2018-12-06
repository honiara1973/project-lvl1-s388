install: 
	npm install

start:
	npx babel-node -- 'src/bin/brain-menu.js'

publish:
	npm publish

lint:
	npx eslint .