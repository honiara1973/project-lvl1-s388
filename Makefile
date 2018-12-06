install: 
	npm install

start:
	npx babel-node -- 'src/bin/brain-balance.js'

publish:
	npm publish

lint:
	npx eslint .