/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "secret.compute.v1beta1";

export interface MsgStoreCode {
  sender: Uint8Array;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
  source: string;
  /** Builder is a valid docker image name with tag, optional */
  builder: string;
}

export interface MsgInstantiateContract {
  sender: Uint8Array;
  /**
   * Admin is an optional address that can execute migrations
   *  bytes admin = 2 [(gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"];
   */
  callbackCodeHash: string;
  codeId: string;
  label: string;
  initMsg: Uint8Array;
  initFunds: Coin[];
  callbackSig: Uint8Array;
}

export interface MsgExecuteContract {
  sender: Uint8Array;
  contract: Uint8Array;
  msg: Uint8Array;
  callbackCodeHash: string;
  sentFunds: Coin[];
  callbackSig: Uint8Array;
}

function createBaseMsgStoreCode(): MsgStoreCode {
  return { sender: new Uint8Array(0), wasmByteCode: new Uint8Array(0), source: "", builder: "" };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(34).string(message.builder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wasmByteCode = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.source = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.builder = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(0),
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      builder: isSet(object.builder) ? globalThis.String(object.builder) : "",
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      obj.wasmByteCode = base64FromBytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.builder !== "") {
      obj.builder = message.builder;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStoreCode>, I>>(base?: I): MsgStoreCode {
    return MsgStoreCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(object: I): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? new Uint8Array(0);
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array(0);
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    return message;
  },
};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: new Uint8Array(0),
    callbackCodeHash: "",
    codeId: "0",
    label: "",
    initMsg: new Uint8Array(0),
    initFunds: [],
    callbackSig: new Uint8Array(0),
  };
}

export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.callbackCodeHash !== "") {
      writer.uint32(18).string(message.callbackCodeHash);
    }
    if (message.codeId !== "0") {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    for (const v of message.initFunds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.callbackSig.length !== 0) {
      writer.uint32(58).bytes(message.callbackSig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.callbackCodeHash = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.codeId = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.label = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initMsg = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initFunds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.callbackSig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      callbackCodeHash: isSet(object.callbackCodeHash) ? globalThis.String(object.callbackCodeHash) : "",
      codeId: isSet(object.codeId) ? globalThis.String(object.codeId) : "0",
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(0),
      initFunds: globalThis.Array.isArray(object?.initFunds) ? object.initFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.callbackCodeHash !== "") {
      obj.callbackCodeHash = message.callbackCodeHash;
    }
    if (message.codeId !== "0") {
      obj.codeId = message.codeId;
    }
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.initMsg.length !== 0) {
      obj.initMsg = base64FromBytes(message.initMsg);
    }
    if (message.initFunds?.length) {
      obj.initFunds = message.initFunds.map((e) => Coin.toJSON(e));
    }
    if (message.callbackSig.length !== 0) {
      obj.callbackSig = base64FromBytes(message.callbackSig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(base?: I): MsgInstantiateContract {
    return MsgInstantiateContract.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(object: I): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? new Uint8Array(0);
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.codeId = object.codeId ?? "0";
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array(0);
    message.initFunds = object.initFunds?.map((e) => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: new Uint8Array(0),
    contract: new Uint8Array(0),
    msg: new Uint8Array(0),
    callbackCodeHash: "",
    sentFunds: [],
    callbackSig: new Uint8Array(0),
  };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.contract.length !== 0) {
      writer.uint32(18).bytes(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    if (message.callbackCodeHash !== "") {
      writer.uint32(34).string(message.callbackCodeHash);
    }
    for (const v of message.sentFunds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.callbackSig.length !== 0) {
      writer.uint32(50).bytes(message.callbackSig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.msg = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.callbackCodeHash = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sentFunds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.callbackSig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      contract: isSet(object.contract) ? bytesFromBase64(object.contract) : new Uint8Array(0),
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
      callbackCodeHash: isSet(object.callbackCodeHash) ? globalThis.String(object.callbackCodeHash) : "",
      sentFunds: globalThis.Array.isArray(object?.sentFunds) ? object.sentFunds.map((e: any) => Coin.fromJSON(e)) : [],
      callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.contract.length !== 0) {
      obj.contract = base64FromBytes(message.contract);
    }
    if (message.msg.length !== 0) {
      obj.msg = base64FromBytes(message.msg);
    }
    if (message.callbackCodeHash !== "") {
      obj.callbackCodeHash = message.callbackCodeHash;
    }
    if (message.sentFunds?.length) {
      obj.sentFunds = message.sentFunds.map((e) => Coin.toJSON(e));
    }
    if (message.callbackSig.length !== 0) {
      obj.callbackSig = base64FromBytes(message.callbackSig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(base?: I): MsgExecuteContract {
    return MsgExecuteContract.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? new Uint8Array(0);
    message.contract = object.contract ?? new Uint8Array(0);
    message.msg = object.msg ?? new Uint8Array(0);
    message.callbackCodeHash = object.callbackCodeHash ?? "";
    message.sentFunds = object.sentFunds?.map((e) => Coin.fromPartial(e)) || [];
    message.callbackSig = object.callbackSig ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
