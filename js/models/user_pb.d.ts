// package: sym.models
// file: models/user.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getIdentitiesMap(): jspb.Map<string, User.Identity>;
  clearIdentitiesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    identitiesMap: Array<[string, User.Identity.AsObject]>,
  }

  export class Identity extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Identity.AsObject;
    static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Identity;
    static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
  }

  export namespace Identity {
    export type AsObject = {
      id: string,
    }
  }
}

