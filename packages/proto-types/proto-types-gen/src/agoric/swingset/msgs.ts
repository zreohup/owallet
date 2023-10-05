/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "agoric.swingset";

/** MsgDeliverInbound defines an SDK message for delivering an eventual send */
export interface MsgDeliverInbound {
  messages: string[];
  nums: string[];
  ack: string;
  submitter: Uint8Array;
}

/** MsgDeliverInboundResponse is an empty reply. */
export interface MsgDeliverInboundResponse {
}

/**
 * MsgWalletAction defines an SDK message for the on-chain wallet to perform an
 * action that *does not* spend any assets (other than gas fees/stamps).  This
 * message type is typically protected by feegrant budgets.
 */
export interface MsgWalletAction {
  owner: Uint8Array;
  /** The action to perform, as JSON-stringified marshalled data. */
  action: string;
}

/** MsgWalletActionResponse is an empty reply. */
export interface MsgWalletActionResponse {
}

/**
 * MsgWalletSpendAction defines an SDK message for the on-chain wallet to
 * perform an action that *does spend the owner's assets.*  This message type is
 * typically protected by explicit confirmation by the user.
 */
export interface MsgWalletSpendAction {
  owner: Uint8Array;
  /** The action to perform, as JSON-stringified marshalled data. */
  spendAction: string;
}

/** MsgWalletSpendActionResponse is an empty reply. */
export interface MsgWalletSpendActionResponse {
}

/** MsgProvision defines an SDK message for provisioning a client to the chain */
export interface MsgProvision {
  nickname: string;
  address: Uint8Array;
  powerFlags: string[];
  submitter: Uint8Array;
}

/** MsgProvisionResponse is an empty reply. */
export interface MsgProvisionResponse {
}

/** MsgInstallBundle carries a signed bundle to SwingSet. */
export interface MsgInstallBundle {
  bundle: string;
  submitter: Uint8Array;
  /**
   * Either bundle or compressed_bundle will be set.
   * Default compression algorithm is gzip.
   */
  compressedBundle: Uint8Array;
  /** Size in bytes of uncompression of compressed_bundle. */
  uncompressedSize: string;
}

/**
 * MsgInstallBundleResponse is an empty acknowledgement that an install bundle
 * message has been queued for the SwingSet kernel's consideration.
 */
export interface MsgInstallBundleResponse {
}

function createBaseMsgDeliverInbound(): MsgDeliverInbound {
  return { messages: [], nums: [], ack: "0", submitter: new Uint8Array(0) };
}

export const MsgDeliverInbound = {
  encode(message: MsgDeliverInbound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.nums) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.ack !== "0") {
      writer.uint32(24).uint64(message.ack);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(34).bytes(message.submitter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeliverInbound {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeliverInbound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(reader.string());
          continue;
        case 2:
          if (tag === 16) {
            message.nums.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nums.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ack = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.submitter = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeliverInbound {
    return {
      messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => globalThis.String(e)) : [],
      nums: globalThis.Array.isArray(object?.nums) ? object.nums.map((e: any) => globalThis.String(e)) : [],
      ack: isSet(object.ack) ? globalThis.String(object.ack) : "0",
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgDeliverInbound): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages;
    }
    if (message.nums?.length) {
      obj.nums = message.nums;
    }
    if (message.ack !== "0") {
      obj.ack = message.ack;
    }
    if (message.submitter.length !== 0) {
      obj.submitter = base64FromBytes(message.submitter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeliverInbound>, I>>(base?: I): MsgDeliverInbound {
    return MsgDeliverInbound.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeliverInbound>, I>>(object: I): MsgDeliverInbound {
    const message = createBaseMsgDeliverInbound();
    message.messages = object.messages?.map((e) => e) || [];
    message.nums = object.nums?.map((e) => e) || [];
    message.ack = object.ack ?? "0";
    message.submitter = object.submitter ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgDeliverInboundResponse(): MsgDeliverInboundResponse {
  return {};
}

export const MsgDeliverInboundResponse = {
  encode(_: MsgDeliverInboundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeliverInboundResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeliverInboundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDeliverInboundResponse {
    return {};
  },

  toJSON(_: MsgDeliverInboundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeliverInboundResponse>, I>>(base?: I): MsgDeliverInboundResponse {
    return MsgDeliverInboundResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeliverInboundResponse>, I>>(_: I): MsgDeliverInboundResponse {
    const message = createBaseMsgDeliverInboundResponse();
    return message;
  },
};

function createBaseMsgWalletAction(): MsgWalletAction {
  return { owner: new Uint8Array(0), action: "" };
}

export const MsgWalletAction = {
  encode(message: MsgWalletAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWalletAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWalletAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWalletAction {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(0),
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: MsgWalletAction): unknown {
    const obj: any = {};
    if (message.owner.length !== 0) {
      obj.owner = base64FromBytes(message.owner);
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWalletAction>, I>>(base?: I): MsgWalletAction {
    return MsgWalletAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWalletAction>, I>>(object: I): MsgWalletAction {
    const message = createBaseMsgWalletAction();
    message.owner = object.owner ?? new Uint8Array(0);
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseMsgWalletActionResponse(): MsgWalletActionResponse {
  return {};
}

export const MsgWalletActionResponse = {
  encode(_: MsgWalletActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWalletActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWalletActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWalletActionResponse {
    return {};
  },

  toJSON(_: MsgWalletActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWalletActionResponse>, I>>(base?: I): MsgWalletActionResponse {
    return MsgWalletActionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWalletActionResponse>, I>>(_: I): MsgWalletActionResponse {
    const message = createBaseMsgWalletActionResponse();
    return message;
  },
};

function createBaseMsgWalletSpendAction(): MsgWalletSpendAction {
  return { owner: new Uint8Array(0), spendAction: "" };
}

export const MsgWalletSpendAction = {
  encode(message: MsgWalletSpendAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner.length !== 0) {
      writer.uint32(10).bytes(message.owner);
    }
    if (message.spendAction !== "") {
      writer.uint32(18).string(message.spendAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWalletSpendAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWalletSpendAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spendAction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWalletSpendAction {
    return {
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(0),
      spendAction: isSet(object.spendAction) ? globalThis.String(object.spendAction) : "",
    };
  },

  toJSON(message: MsgWalletSpendAction): unknown {
    const obj: any = {};
    if (message.owner.length !== 0) {
      obj.owner = base64FromBytes(message.owner);
    }
    if (message.spendAction !== "") {
      obj.spendAction = message.spendAction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWalletSpendAction>, I>>(base?: I): MsgWalletSpendAction {
    return MsgWalletSpendAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWalletSpendAction>, I>>(object: I): MsgWalletSpendAction {
    const message = createBaseMsgWalletSpendAction();
    message.owner = object.owner ?? new Uint8Array(0);
    message.spendAction = object.spendAction ?? "";
    return message;
  },
};

function createBaseMsgWalletSpendActionResponse(): MsgWalletSpendActionResponse {
  return {};
}

export const MsgWalletSpendActionResponse = {
  encode(_: MsgWalletSpendActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWalletSpendActionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWalletSpendActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWalletSpendActionResponse {
    return {};
  },

  toJSON(_: MsgWalletSpendActionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWalletSpendActionResponse>, I>>(base?: I): MsgWalletSpendActionResponse {
    return MsgWalletSpendActionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWalletSpendActionResponse>, I>>(_: I): MsgWalletSpendActionResponse {
    const message = createBaseMsgWalletSpendActionResponse();
    return message;
  },
};

function createBaseMsgProvision(): MsgProvision {
  return { nickname: "", address: new Uint8Array(0), powerFlags: [], submitter: new Uint8Array(0) };
}

export const MsgProvision = {
  encode(message: MsgProvision, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nickname !== "") {
      writer.uint32(10).string(message.nickname);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    for (const v of message.powerFlags) {
      writer.uint32(26).string(v!);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(34).bytes(message.submitter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvision {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.powerFlags.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.submitter = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProvision {
    return {
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "",
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
      powerFlags: globalThis.Array.isArray(object?.powerFlags)
        ? object.powerFlags.map((e: any) => globalThis.String(e))
        : [],
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgProvision): unknown {
    const obj: any = {};
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.powerFlags?.length) {
      obj.powerFlags = message.powerFlags;
    }
    if (message.submitter.length !== 0) {
      obj.submitter = base64FromBytes(message.submitter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProvision>, I>>(base?: I): MsgProvision {
    return MsgProvision.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProvision>, I>>(object: I): MsgProvision {
    const message = createBaseMsgProvision();
    message.nickname = object.nickname ?? "";
    message.address = object.address ?? new Uint8Array(0);
    message.powerFlags = object.powerFlags?.map((e) => e) || [];
    message.submitter = object.submitter ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgProvisionResponse(): MsgProvisionResponse {
  return {};
}

export const MsgProvisionResponse = {
  encode(_: MsgProvisionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvisionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgProvisionResponse {
    return {};
  },

  toJSON(_: MsgProvisionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProvisionResponse>, I>>(base?: I): MsgProvisionResponse {
    return MsgProvisionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProvisionResponse>, I>>(_: I): MsgProvisionResponse {
    const message = createBaseMsgProvisionResponse();
    return message;
  },
};

function createBaseMsgInstallBundle(): MsgInstallBundle {
  return { bundle: "", submitter: new Uint8Array(0), compressedBundle: new Uint8Array(0), uncompressedSize: "0" };
}

export const MsgInstallBundle = {
  encode(message: MsgInstallBundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundle !== "") {
      writer.uint32(10).string(message.bundle);
    }
    if (message.submitter.length !== 0) {
      writer.uint32(18).bytes(message.submitter);
    }
    if (message.compressedBundle.length !== 0) {
      writer.uint32(26).bytes(message.compressedBundle);
    }
    if (message.uncompressedSize !== "0") {
      writer.uint32(32).int64(message.uncompressedSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstallBundle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstallBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bundle = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.submitter = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.compressedBundle = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.uncompressedSize = longToString(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInstallBundle {
    return {
      bundle: isSet(object.bundle) ? globalThis.String(object.bundle) : "",
      submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
      compressedBundle: isSet(object.compressedBundle) ? bytesFromBase64(object.compressedBundle) : new Uint8Array(0),
      uncompressedSize: isSet(object.uncompressedSize) ? globalThis.String(object.uncompressedSize) : "0",
    };
  },

  toJSON(message: MsgInstallBundle): unknown {
    const obj: any = {};
    if (message.bundle !== "") {
      obj.bundle = message.bundle;
    }
    if (message.submitter.length !== 0) {
      obj.submitter = base64FromBytes(message.submitter);
    }
    if (message.compressedBundle.length !== 0) {
      obj.compressedBundle = base64FromBytes(message.compressedBundle);
    }
    if (message.uncompressedSize !== "0") {
      obj.uncompressedSize = message.uncompressedSize;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInstallBundle>, I>>(base?: I): MsgInstallBundle {
    return MsgInstallBundle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInstallBundle>, I>>(object: I): MsgInstallBundle {
    const message = createBaseMsgInstallBundle();
    message.bundle = object.bundle ?? "";
    message.submitter = object.submitter ?? new Uint8Array(0);
    message.compressedBundle = object.compressedBundle ?? new Uint8Array(0);
    message.uncompressedSize = object.uncompressedSize ?? "0";
    return message;
  },
};

function createBaseMsgInstallBundleResponse(): MsgInstallBundleResponse {
  return {};
}

export const MsgInstallBundleResponse = {
  encode(_: MsgInstallBundleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstallBundleResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstallBundleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgInstallBundleResponse {
    return {};
  },

  toJSON(_: MsgInstallBundleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInstallBundleResponse>, I>>(base?: I): MsgInstallBundleResponse {
    return MsgInstallBundleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgInstallBundleResponse>, I>>(_: I): MsgInstallBundleResponse {
    const message = createBaseMsgInstallBundleResponse();
    return message;
  },
};

/** Transactions. */
export interface Msg {
  /** Install a JavaScript sources bundle on the chain's SwingSet controller. */
  InstallBundle(request: MsgInstallBundle): Promise<MsgInstallBundleResponse>;
  /** Send inbound messages. */
  DeliverInbound(request: MsgDeliverInbound): Promise<MsgDeliverInboundResponse>;
  /** Perform a low-privilege wallet action. */
  WalletAction(request: MsgWalletAction): Promise<MsgWalletActionResponse>;
  /** Perform a wallet action that spends assets. */
  WalletSpendAction(request: MsgWalletSpendAction): Promise<MsgWalletSpendActionResponse>;
  /** Provision a new endpoint. */
  Provision(request: MsgProvision): Promise<MsgProvisionResponse>;
}

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
