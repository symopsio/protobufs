all: protoc js docs

protoc:
	for pkg in enums models messages; do \
		protoc --proto_path=src \
			--go_out=./go \
			--python_out=./py \
			--go_opt=module=github.com/symopsio/types/go \
			src/sym/$$pkg/*.proto; \
	done

docs:
	protoc --proto_path=src --doc_out=./docs \
		--doc_opt=markdown,index.md \
		src/sym/enums/*.proto \
		src/sym/models/*.proto \
		src/sym/messages/*.proto

js:
	pbjs -t static-module -w commonjs -o js/index.js \
		src/**/*.proto
	pbts -o js/index.d.ts js/index.js

pydistclean:
	rm -rf py/build/*
	rm -rf py/dist/*

pydist: pydistclean
	cd py && python3 setup.py sdist bdist_wheel
	cd py && python3 -m twine upload dist/*

.PHONY: protoc docs js pydist
