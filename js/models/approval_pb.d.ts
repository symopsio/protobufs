// package: sym.models
// file: models/approval.proto

import * as jspb from "google-protobuf";
import * as models_user_pb from "../models/user_pb";

export class Approval extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasSchema(): boolean;
  clearSchema(): void;
  getSchema(): Approval.Schema | undefined;
  setSchema(value?: Approval.Schema): void;

  hasUsers(): boolean;
  clearUsers(): void;
  getUsers(): Approval.Users | undefined;
  setUsers(value?: Approval.Users): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): Approval.Meta | undefined;
  setMeta(value?: Approval.Meta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Approval.AsObject;
  static toObject(includeInstance: boolean, msg: Approval): Approval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Approval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Approval;
  static deserializeBinaryFromReader(message: Approval, reader: jspb.BinaryReader): Approval;
}

export namespace Approval {
  export type AsObject = {
    id: string,
    schema?: Approval.Schema.AsObject,
    users?: Approval.Users.AsObject,
    meta?: Approval.Meta.AsObject,
  }

  export class Schema extends jspb.Message {
    getVersion(): number;
    setVersion(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Schema.AsObject;
    static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Schema;
    static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
  }

  export namespace Schema {
    export type AsObject = {
      version: number,
    }
  }

  export class Meta extends jspb.Message {
    getReason(): string;
    setReason(value: string): void;

    getResource(): string;
    setResource(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Meta.AsObject;
    static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Meta;
    static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
  }

  export namespace Meta {
    export type AsObject = {
      reason: string,
      resource: string,
    }
  }

  export class Users extends jspb.Message {
    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): models_user_pb.User | undefined;
    setTarget(value?: models_user_pb.User): void;

    hasApprover(): boolean;
    clearApprover(): void;
    getApprover(): models_user_pb.User | undefined;
    setApprover(value?: models_user_pb.User): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Users.AsObject;
    static toObject(includeInstance: boolean, msg: Users): Users.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Users, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Users;
    static deserializeBinaryFromReader(message: Users, reader: jspb.BinaryReader): Users;
  }

  export namespace Users {
    export type AsObject = {
      target?: models_user_pb.User.AsObject,
      approver?: models_user_pb.User.AsObject,
    }
  }
}

