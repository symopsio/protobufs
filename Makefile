PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

GO_OUT_DIR="./go"
TS_OUT_DIR="./js"

go:
	protoc --proto_path=src --go_out=${GO_OUT_DIR} \
		--go_opt=module=github.com/symopsio/protobufs/go \
		src/models/*.proto

js:
	protoc --proto_path=src --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--js_out="import_style=commonjs,binary:${TS_OUT_DIR}" \
		--ts_out="${TS_OUT_DIR}" src/models/*.proto

.PHONY: go js
