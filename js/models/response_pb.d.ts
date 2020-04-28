// package: sym.models
// file: models/response.proto

import * as jspb from "google-protobuf";

export class EscalationResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscalationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EscalationResponse): EscalationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EscalationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscalationResponse;
  static deserializeBinaryFromReader(message: EscalationResponse, reader: jspb.BinaryReader): EscalationResponse;
}

export namespace EscalationResponse {
  export type AsObject = {
    ok: boolean,
    error: string,
  }
}

export class ExpirationResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpirationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExpirationResponse): ExpirationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpirationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpirationResponse;
  static deserializeBinaryFromReader(message: ExpirationResponse, reader: jspb.BinaryReader): ExpirationResponse;
}

export namespace ExpirationResponse {
  export type AsObject = {
    ok: boolean,
    error: string,
  }
}

