"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionOptionsWeb3Tx = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ethermint.types.v1";
function createBaseExtensionOptionsWeb3Tx() {
    return { typedDataChainId: "0", feePayer: "", feePayerSig: new Uint8Array(0) };
}
exports.ExtensionOptionsWeb3Tx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.typedDataChainId = longToString(reader.uint64());
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
    fromJSON(object) {
        return {
            typedDataChainId: isSet(object.typedDataChainId) ? globalThis.String(object.typedDataChainId) : "0",
            feePayer: isSet(object.feePayer) ? globalThis.String(object.feePayer) : "",
            feePayerSig: isSet(object.feePayerSig) ? bytesFromBase64(object.feePayerSig) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.ExtensionOptionsWeb3Tx.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExtensionOptionsWeb3Tx();
        message.typedDataChainId = (_a = object.typedDataChainId) !== null && _a !== void 0 ? _a : "0";
        message.feePayer = (_b = object.feePayer) !== null && _b !== void 0 ? _b : "";
        message.feePayerSig = (_c = object.feePayerSig) !== null && _c !== void 0 ? _c : new Uint8Array(0);
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
//# sourceMappingURL=web3.js.map