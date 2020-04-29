PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

GO_OUT_DIR="./go"
TS_OUT_DIR="./js"

all: js go

go:
	protoc --proto_path=src --go_out=${GO_OUT_DIR} \
		--go_opt=module=github.com/symopsio/types/go \
		src/sym/enums/*.proto
	protoc --proto_path=src --go_out=${GO_OUT_DIR} \
		--go_opt=module=github.com/symopsio/types/go \
		src/sym/models/*.proto
	protoc --proto_path=src --go_out=${GO_OUT_DIR} \
		--go_opt=module=github.com/symopsio/types/go \
		src/sym/messages/*.proto

js:
	pbjs -t static-module -w commonjs -o js/index.js \
		src/**/*.proto
	pbts -o js/index.d.ts js/index.js

.PHONY: go js
