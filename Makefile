setup:
	npm install

compile:
	./node_modules/typescript/bin/tsc

clean:
	rm -rf ./node_modules ts-built

test:
	./node_modules/.bin/jest ./lib/* ./tests/*

check-lint:
	npm run lint

lint:
	npm run lint-fix

build:
	npm run build

build-wampproto:
	rm -rf wampproto-cli
	git clone https://github.com/xconnio/wampproto-cli.git
	cd wampproto-cli/ && make build && sudo cp ./wampproto /usr/local/bin/
