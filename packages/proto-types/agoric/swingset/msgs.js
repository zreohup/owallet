"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgInstallBundleResponse = exports.MsgInstallBundle = exports.MsgProvisionResponse = exports.MsgProvision = exports.MsgWalletSpendActionResponse = exports.MsgWalletSpendAction = exports.MsgWalletActionResponse = exports.MsgWalletAction = exports.MsgDeliverInboundResponse = exports.MsgDeliverInbound = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "agoric.swingset";
function createBaseMsgDeliverInbound() {
    return { messages: [], nums: [], ack: "0", submitter: new Uint8Array(0) };
}
exports.MsgDeliverInbound = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.messages) {
            writer.uint32(10).string(v);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                        message.nums.push(longToString(reader.uint64()));
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.nums.push(longToString(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.ack = longToString(reader.uint64());
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
    fromJSON(object) {
        return {
            messages: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => globalThis.String(e)) : [],
            nums: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nums) ? object.nums.map((e) => globalThis.String(e)) : [],
            ack: isSet(object.ack) ? globalThis.String(object.ack) : "0",
            submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.messages) === null || _a === void 0 ? void 0 : _a.length) {
            obj.messages = message.messages;
        }
        if ((_b = message.nums) === null || _b === void 0 ? void 0 : _b.length) {
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
    create(base) {
        return exports.MsgDeliverInbound.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgDeliverInbound();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.nums = ((_b = object.nums) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.ack = (_c = object.ack) !== null && _c !== void 0 ? _c : "0";
        message.submitter = (_d = object.submitter) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgDeliverInboundResponse() {
    return {};
}
exports.MsgDeliverInboundResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgDeliverInboundResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeliverInboundResponse();
        return message;
    },
};
function createBaseMsgWalletAction() {
    return { owner: new Uint8Array(0), action: "" };
}
exports.MsgWalletAction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner.length !== 0) {
            writer.uint32(10).bytes(message.owner);
        }
        if (message.action !== "") {
            writer.uint32(18).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(0),
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner.length !== 0) {
            obj.owner = base64FromBytes(message.owner);
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.MsgWalletAction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWalletAction();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.action = (_b = object.action) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWalletActionResponse() {
    return {};
}
exports.MsgWalletActionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgWalletActionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWalletActionResponse();
        return message;
    },
};
function createBaseMsgWalletSpendAction() {
    return { owner: new Uint8Array(0), spendAction: "" };
}
exports.MsgWalletSpendAction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner.length !== 0) {
            writer.uint32(10).bytes(message.owner);
        }
        if (message.spendAction !== "") {
            writer.uint32(18).string(message.spendAction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(0),
            spendAction: isSet(object.spendAction) ? globalThis.String(object.spendAction) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner.length !== 0) {
            obj.owner = base64FromBytes(message.owner);
        }
        if (message.spendAction !== "") {
            obj.spendAction = message.spendAction;
        }
        return obj;
    },
    create(base) {
        return exports.MsgWalletSpendAction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWalletSpendAction();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.spendAction = (_b = object.spendAction) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWalletSpendActionResponse() {
    return {};
}
exports.MsgWalletSpendActionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgWalletSpendActionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWalletSpendActionResponse();
        return message;
    },
};
function createBaseMsgProvision() {
    return { nickname: "", address: new Uint8Array(0), powerFlags: [], submitter: new Uint8Array(0) };
}
exports.MsgProvision = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nickname !== "") {
            writer.uint32(10).string(message.nickname);
        }
        if (message.address.length !== 0) {
            writer.uint32(18).bytes(message.address);
        }
        for (const v of message.powerFlags) {
            writer.uint32(26).string(v);
        }
        if (message.submitter.length !== 0) {
            writer.uint32(34).bytes(message.submitter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "",
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
            powerFlags: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.powerFlags)
                ? object.powerFlags.map((e) => globalThis.String(e))
                : [],
            submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.nickname !== "") {
            obj.nickname = message.nickname;
        }
        if (message.address.length !== 0) {
            obj.address = base64FromBytes(message.address);
        }
        if ((_a = message.powerFlags) === null || _a === void 0 ? void 0 : _a.length) {
            obj.powerFlags = message.powerFlags;
        }
        if (message.submitter.length !== 0) {
            obj.submitter = base64FromBytes(message.submitter);
        }
        return obj;
    },
    create(base) {
        return exports.MsgProvision.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgProvision();
        message.nickname = (_a = object.nickname) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.powerFlags = ((_c = object.powerFlags) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.submitter = (_d = object.submitter) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgProvisionResponse() {
    return {};
}
exports.MsgProvisionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgProvisionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgProvisionResponse();
        return message;
    },
};
function createBaseMsgInstallBundle() {
    return { bundle: "", submitter: new Uint8Array(0), compressedBundle: new Uint8Array(0), uncompressedSize: "0" };
}
exports.MsgInstallBundle = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uncompressedSize = longToString(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            bundle: isSet(object.bundle) ? globalThis.String(object.bundle) : "",
            submitter: isSet(object.submitter) ? bytesFromBase64(object.submitter) : new Uint8Array(0),
            compressedBundle: isSet(object.compressedBundle) ? bytesFromBase64(object.compressedBundle) : new Uint8Array(0),
            uncompressedSize: isSet(object.uncompressedSize) ? globalThis.String(object.uncompressedSize) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.MsgInstallBundle.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgInstallBundle();
        message.bundle = (_a = object.bundle) !== null && _a !== void 0 ? _a : "";
        message.submitter = (_b = object.submitter) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.compressedBundle = (_c = object.compressedBundle) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.uncompressedSize = (_d = object.uncompressedSize) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseMsgInstallBundleResponse() {
    return {};
}
exports.MsgInstallBundleResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgInstallBundleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgInstallBundleResponse();
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=msgs.js.map