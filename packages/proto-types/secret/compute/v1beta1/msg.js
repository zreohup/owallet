"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExecuteContract = exports.MsgInstantiateContract = exports.MsgStoreCode = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "secret.compute.v1beta1";
function createBaseMsgStoreCode() {
    return { sender: new Uint8Array(0), wasmByteCode: new Uint8Array(0), source: "", builder: "" };
}
exports.MsgStoreCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
            wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(0),
            source: isSet(object.source) ? globalThis.String(object.source) : "",
            builder: isSet(object.builder) ? globalThis.String(object.builder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.MsgStoreCode.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgStoreCode();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.wasmByteCode = (_b = object.wasmByteCode) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.builder = (_d = object.builder) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgInstantiateContract() {
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
exports.MsgInstantiateContract = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.callbackSig.length !== 0) {
            writer.uint32(58).bytes(message.callbackSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.codeId = longToString(reader.uint64());
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
                    message.initFunds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
            callbackCodeHash: isSet(object.callbackCodeHash) ? globalThis.String(object.callbackCodeHash) : "",
            codeId: isSet(object.codeId) ? globalThis.String(object.codeId) : "0",
            label: isSet(object.label) ? globalThis.String(object.label) : "",
            initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(0),
            initFunds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.initFunds) ? object.initFunds.map((e) => coin_1.Coin.fromJSON(e)) : [],
            callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
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
        if ((_a = message.initFunds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.initFunds = message.initFunds.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.callbackSig.length !== 0) {
            obj.callbackSig = base64FromBytes(message.callbackSig);
        }
        return obj;
    },
    create(base) {
        return exports.MsgInstantiateContract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgInstantiateContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.callbackCodeHash = (_b = object.callbackCodeHash) !== null && _b !== void 0 ? _b : "";
        message.codeId = (_c = object.codeId) !== null && _c !== void 0 ? _c : "0";
        message.label = (_d = object.label) !== null && _d !== void 0 ? _d : "";
        message.initMsg = (_e = object.initMsg) !== null && _e !== void 0 ? _e : new Uint8Array(0);
        message.initFunds = ((_f = object.initFunds) === null || _f === void 0 ? void 0 : _f.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.callbackSig = (_g = object.callbackSig) !== null && _g !== void 0 ? _g : new Uint8Array(0);
        return message;
    },
};
function createBaseMsgExecuteContract() {
    return {
        sender: new Uint8Array(0),
        contract: new Uint8Array(0),
        msg: new Uint8Array(0),
        callbackCodeHash: "",
        sentFunds: [],
        callbackSig: new Uint8Array(0),
    };
}
exports.MsgExecuteContract = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.callbackSig.length !== 0) {
            writer.uint32(50).bytes(message.callbackSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.sentFunds.push(coin_1.Coin.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
            contract: isSet(object.contract) ? bytesFromBase64(object.contract) : new Uint8Array(0),
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(0),
            callbackCodeHash: isSet(object.callbackCodeHash) ? globalThis.String(object.callbackCodeHash) : "",
            sentFunds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.sentFunds) ? object.sentFunds.map((e) => coin_1.Coin.fromJSON(e)) : [],
            callbackSig: isSet(object.callbackSig) ? bytesFromBase64(object.callbackSig) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
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
        if ((_a = message.sentFunds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.sentFunds = message.sentFunds.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.callbackSig.length !== 0) {
            obj.callbackSig = base64FromBytes(message.callbackSig);
        }
        return obj;
    },
    create(base) {
        return exports.MsgExecuteContract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgExecuteContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : new Uint8Array(0);
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.callbackCodeHash = (_d = object.callbackCodeHash) !== null && _d !== void 0 ? _d : "";
        message.sentFunds = ((_e = object.sentFunds) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.callbackSig = (_f = object.callbackSig) !== null && _f !== void 0 ? _f : new Uint8Array(0);
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
//# sourceMappingURL=msg.js.map