/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ethermint.types.v1";

export interface ExtensionOptionsWeb3Tx {
  /**
   * typed data chain id used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typedDataChainId: string;
  /**
   * fee payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  feePayer: string;
  /**
   * fee payer sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  feePayerSig: Uint8Array;
}

function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return { typedDataChainId: "0", feePayer: "", feePayerSig: new Uint8Array(0) };
}

export const ExtensionOptionsWeb3Tx = {
  encode(message: ExtensionOptionsWeb3Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typedDataChainId !== "0") {
      writer.uint32(8).uint64(message.typedDataChainId);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsWeb3Tx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.typedDataChainId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feePayer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feePayerSig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExtensionOptionsWeb3Tx {
    return {
      typedDataChainId: isSet(object.typedDataChainId) ? globalThis.String(object.typedDataChainId) : "0",
      feePayer: isSet(object.feePayer) ? globalThis.String(object.feePayer) : "",
      feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array(0),
    };
  },

  toJSON(message: ExtensionOptionsWeb3Tx): unknown {
    const obj: any = {};
    if (message.typedDataChainId !== "0") {
      obj.typedDataChainId = message.typedDataChainId;
    }
    if (message.feePayer !== "") {
      obj.feePayer = message.feePayer;
    }
    if (message.feePayerSig.length !== 0) {
      obj.feePayerSig = base64FromBytes(message.feePayerSig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExtensionOptionsWeb3Tx>, I>>(base?: I): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExtensionOptionsWeb3Tx>, I>>(object: I): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typedDataChainId = object.typedDataChainId ?? "0";
    message.feePayer = object.feePayer ?? "";
    message.feePayerSig = object.feePayerSig ?? new Uint8Array(0);
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
