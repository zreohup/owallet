"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDescriptorSet = exports.generatedCodeInfo_Annotation_SemanticToJSON = exports.generatedCodeInfo_Annotation_SemanticFromJSON = exports.GeneratedCodeInfo_Annotation_Semantic = exports.featureSet_JsonFormatToJSON = exports.featureSet_JsonFormatFromJSON = exports.FeatureSet_JsonFormat = exports.featureSet_MessageEncodingToJSON = exports.featureSet_MessageEncodingFromJSON = exports.FeatureSet_MessageEncoding = exports.featureSet_StringFieldValidationToJSON = exports.featureSet_StringFieldValidationFromJSON = exports.FeatureSet_StringFieldValidation = exports.featureSet_RepeatedFieldEncodingToJSON = exports.featureSet_RepeatedFieldEncodingFromJSON = exports.FeatureSet_RepeatedFieldEncoding = exports.featureSet_EnumTypeToJSON = exports.featureSet_EnumTypeFromJSON = exports.FeatureSet_EnumType = exports.featureSet_FieldPresenceToJSON = exports.featureSet_FieldPresenceFromJSON = exports.FeatureSet_FieldPresence = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_OptionTargetTypeToJSON = exports.fieldOptions_OptionTargetTypeFromJSON = exports.FieldOptions_OptionTargetType = exports.fieldOptions_OptionRetentionToJSON = exports.fieldOptions_OptionRetentionFromJSON = exports.FieldOptions_OptionRetention = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = exports.extensionRangeOptions_VerificationStateToJSON = exports.extensionRangeOptions_VerificationStateFromJSON = exports.ExtensionRangeOptions_VerificationState = exports.protobufPackage = void 0;
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.FeatureSet = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions_EditionDefault = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions_Declaration = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
/** The verification state of the extension range. */
var ExtensionRangeOptions_VerificationState;
(function (ExtensionRangeOptions_VerificationState) {
    /** DECLARATION - All the extensions of the range must be declared. */
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["DECLARATION"] = 0] = "DECLARATION";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNVERIFIED"] = 1] = "UNVERIFIED";
    ExtensionRangeOptions_VerificationState[ExtensionRangeOptions_VerificationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExtensionRangeOptions_VerificationState = exports.ExtensionRangeOptions_VerificationState || (exports.ExtensionRangeOptions_VerificationState = {}));
function extensionRangeOptions_VerificationStateFromJSON(object) {
    switch (object) {
        case 0:
        case "DECLARATION":
            return ExtensionRangeOptions_VerificationState.DECLARATION;
        case 1:
        case "UNVERIFIED":
            return ExtensionRangeOptions_VerificationState.UNVERIFIED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExtensionRangeOptions_VerificationState.UNRECOGNIZED;
    }
}
exports.extensionRangeOptions_VerificationStateFromJSON = extensionRangeOptions_VerificationStateFromJSON;
function extensionRangeOptions_VerificationStateToJSON(object) {
    switch (object) {
        case ExtensionRangeOptions_VerificationState.DECLARATION:
            return "DECLARATION";
        case ExtensionRangeOptions_VerificationState.UNVERIFIED:
            return "UNVERIFIED";
        case ExtensionRangeOptions_VerificationState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.extensionRangeOptions_VerificationStateToJSON = extensionRangeOptions_VerificationStateToJSON;
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type = exports.FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label = exports.FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode = exports.FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    /**
     * CORD - The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     */
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType = exports.FieldOptions_CType || (exports.FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType = exports.FieldOptions_JSType || (exports.FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
var FieldOptions_OptionRetention;
(function (FieldOptions_OptionRetention) {
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionRetention = exports.FieldOptions_OptionRetention || (exports.FieldOptions_OptionRetention = {}));
function fieldOptions_OptionRetentionFromJSON(object) {
    switch (object) {
        case 0:
        case "RETENTION_UNKNOWN":
            return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
        case 1:
        case "RETENTION_RUNTIME":
            return FieldOptions_OptionRetention.RETENTION_RUNTIME;
        case 2:
        case "RETENTION_SOURCE":
            return FieldOptions_OptionRetention.RETENTION_SOURCE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_OptionRetention.UNRECOGNIZED;
    }
}
exports.fieldOptions_OptionRetentionFromJSON = fieldOptions_OptionRetentionFromJSON;
function fieldOptions_OptionRetentionToJSON(object) {
    switch (object) {
        case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
            return "RETENTION_UNKNOWN";
        case FieldOptions_OptionRetention.RETENTION_RUNTIME:
            return "RETENTION_RUNTIME";
        case FieldOptions_OptionRetention.RETENTION_SOURCE:
            return "RETENTION_SOURCE";
        case FieldOptions_OptionRetention.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_OptionRetentionToJSON = fieldOptions_OptionRetentionToJSON;
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
var FieldOptions_OptionTargetType;
(function (FieldOptions_OptionTargetType) {
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionTargetType = exports.FieldOptions_OptionTargetType || (exports.FieldOptions_OptionTargetType = {}));
function fieldOptions_OptionTargetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TARGET_TYPE_UNKNOWN":
            return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
        case 1:
        case "TARGET_TYPE_FILE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
        case 2:
        case "TARGET_TYPE_EXTENSION_RANGE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
        case 3:
        case "TARGET_TYPE_MESSAGE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
        case 4:
        case "TARGET_TYPE_FIELD":
            return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
        case 5:
        case "TARGET_TYPE_ONEOF":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
        case 6:
        case "TARGET_TYPE_ENUM":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
        case 7:
        case "TARGET_TYPE_ENUM_ENTRY":
            return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
        case 8:
        case "TARGET_TYPE_SERVICE":
            return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
        case 9:
        case "TARGET_TYPE_METHOD":
            return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_OptionTargetType.UNRECOGNIZED;
    }
}
exports.fieldOptions_OptionTargetTypeFromJSON = fieldOptions_OptionTargetTypeFromJSON;
function fieldOptions_OptionTargetTypeToJSON(object) {
    switch (object) {
        case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
            return "TARGET_TYPE_UNKNOWN";
        case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
            return "TARGET_TYPE_FILE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
            return "TARGET_TYPE_EXTENSION_RANGE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
            return "TARGET_TYPE_MESSAGE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
            return "TARGET_TYPE_FIELD";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
            return "TARGET_TYPE_ONEOF";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
            return "TARGET_TYPE_ENUM";
        case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
            return "TARGET_TYPE_ENUM_ENTRY";
        case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
            return "TARGET_TYPE_SERVICE";
        case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
            return "TARGET_TYPE_METHOD";
        case FieldOptions_OptionTargetType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.fieldOptions_OptionTargetTypeToJSON = fieldOptions_OptionTargetTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel = exports.MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
var FeatureSet_FieldPresence;
(function (FeatureSet_FieldPresence) {
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["FIELD_PRESENCE_UNKNOWN"] = 0] = "FIELD_PRESENCE_UNKNOWN";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["EXPLICIT"] = 1] = "EXPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["IMPLICIT"] = 2] = "IMPLICIT";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["LEGACY_REQUIRED"] = 3] = "LEGACY_REQUIRED";
    FeatureSet_FieldPresence[FeatureSet_FieldPresence["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_FieldPresence = exports.FeatureSet_FieldPresence || (exports.FeatureSet_FieldPresence = {}));
function featureSet_FieldPresenceFromJSON(object) {
    switch (object) {
        case 0:
        case "FIELD_PRESENCE_UNKNOWN":
            return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
        case 1:
        case "EXPLICIT":
            return FeatureSet_FieldPresence.EXPLICIT;
        case 2:
        case "IMPLICIT":
            return FeatureSet_FieldPresence.IMPLICIT;
        case 3:
        case "LEGACY_REQUIRED":
            return FeatureSet_FieldPresence.LEGACY_REQUIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_FieldPresence.UNRECOGNIZED;
    }
}
exports.featureSet_FieldPresenceFromJSON = featureSet_FieldPresenceFromJSON;
function featureSet_FieldPresenceToJSON(object) {
    switch (object) {
        case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
            return "FIELD_PRESENCE_UNKNOWN";
        case FeatureSet_FieldPresence.EXPLICIT:
            return "EXPLICIT";
        case FeatureSet_FieldPresence.IMPLICIT:
            return "IMPLICIT";
        case FeatureSet_FieldPresence.LEGACY_REQUIRED:
            return "LEGACY_REQUIRED";
        case FeatureSet_FieldPresence.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_FieldPresenceToJSON = featureSet_FieldPresenceToJSON;
var FeatureSet_EnumType;
(function (FeatureSet_EnumType) {
    FeatureSet_EnumType[FeatureSet_EnumType["ENUM_TYPE_UNKNOWN"] = 0] = "ENUM_TYPE_UNKNOWN";
    FeatureSet_EnumType[FeatureSet_EnumType["OPEN"] = 1] = "OPEN";
    FeatureSet_EnumType[FeatureSet_EnumType["CLOSED"] = 2] = "CLOSED";
    FeatureSet_EnumType[FeatureSet_EnumType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_EnumType = exports.FeatureSet_EnumType || (exports.FeatureSet_EnumType = {}));
function featureSet_EnumTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ENUM_TYPE_UNKNOWN":
            return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
        case 1:
        case "OPEN":
            return FeatureSet_EnumType.OPEN;
        case 2:
        case "CLOSED":
            return FeatureSet_EnumType.CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_EnumType.UNRECOGNIZED;
    }
}
exports.featureSet_EnumTypeFromJSON = featureSet_EnumTypeFromJSON;
function featureSet_EnumTypeToJSON(object) {
    switch (object) {
        case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
            return "ENUM_TYPE_UNKNOWN";
        case FeatureSet_EnumType.OPEN:
            return "OPEN";
        case FeatureSet_EnumType.CLOSED:
            return "CLOSED";
        case FeatureSet_EnumType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_EnumTypeToJSON = featureSet_EnumTypeToJSON;
var FeatureSet_RepeatedFieldEncoding;
(function (FeatureSet_RepeatedFieldEncoding) {
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["REPEATED_FIELD_ENCODING_UNKNOWN"] = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["PACKED"] = 1] = "PACKED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["EXPANDED"] = 2] = "EXPANDED";
    FeatureSet_RepeatedFieldEncoding[FeatureSet_RepeatedFieldEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_RepeatedFieldEncoding = exports.FeatureSet_RepeatedFieldEncoding || (exports.FeatureSet_RepeatedFieldEncoding = {}));
function featureSet_RepeatedFieldEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "REPEATED_FIELD_ENCODING_UNKNOWN":
            return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
        case 1:
        case "PACKED":
            return FeatureSet_RepeatedFieldEncoding.PACKED;
        case 2:
        case "EXPANDED":
            return FeatureSet_RepeatedFieldEncoding.EXPANDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED;
    }
}
exports.featureSet_RepeatedFieldEncodingFromJSON = featureSet_RepeatedFieldEncodingFromJSON;
function featureSet_RepeatedFieldEncodingToJSON(object) {
    switch (object) {
        case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
            return "REPEATED_FIELD_ENCODING_UNKNOWN";
        case FeatureSet_RepeatedFieldEncoding.PACKED:
            return "PACKED";
        case FeatureSet_RepeatedFieldEncoding.EXPANDED:
            return "EXPANDED";
        case FeatureSet_RepeatedFieldEncoding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_RepeatedFieldEncodingToJSON = featureSet_RepeatedFieldEncodingToJSON;
var FeatureSet_StringFieldValidation;
(function (FeatureSet_StringFieldValidation) {
    FeatureSet_StringFieldValidation[FeatureSet_StringFieldValidation["STRING_FIELD_VALIDATION_UNKNOWN"] = 0] = "STRING_FIELD_VALIDATION_UNKNOWN";
    FeatureSet_StringFieldValidation[FeatureSet_StringFieldValidation["MANDATORY"] = 1] = "MANDATORY";
    FeatureSet_StringFieldValidation[FeatureSet_StringFieldValidation["HINT"] = 2] = "HINT";
    FeatureSet_StringFieldValidation[FeatureSet_StringFieldValidation["NONE"] = 3] = "NONE";
    FeatureSet_StringFieldValidation[FeatureSet_StringFieldValidation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_StringFieldValidation = exports.FeatureSet_StringFieldValidation || (exports.FeatureSet_StringFieldValidation = {}));
function featureSet_StringFieldValidationFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING_FIELD_VALIDATION_UNKNOWN":
            return FeatureSet_StringFieldValidation.STRING_FIELD_VALIDATION_UNKNOWN;
        case 1:
        case "MANDATORY":
            return FeatureSet_StringFieldValidation.MANDATORY;
        case 2:
        case "HINT":
            return FeatureSet_StringFieldValidation.HINT;
        case 3:
        case "NONE":
            return FeatureSet_StringFieldValidation.NONE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_StringFieldValidation.UNRECOGNIZED;
    }
}
exports.featureSet_StringFieldValidationFromJSON = featureSet_StringFieldValidationFromJSON;
function featureSet_StringFieldValidationToJSON(object) {
    switch (object) {
        case FeatureSet_StringFieldValidation.STRING_FIELD_VALIDATION_UNKNOWN:
            return "STRING_FIELD_VALIDATION_UNKNOWN";
        case FeatureSet_StringFieldValidation.MANDATORY:
            return "MANDATORY";
        case FeatureSet_StringFieldValidation.HINT:
            return "HINT";
        case FeatureSet_StringFieldValidation.NONE:
            return "NONE";
        case FeatureSet_StringFieldValidation.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_StringFieldValidationToJSON = featureSet_StringFieldValidationToJSON;
var FeatureSet_MessageEncoding;
(function (FeatureSet_MessageEncoding) {
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["MESSAGE_ENCODING_UNKNOWN"] = 0] = "MESSAGE_ENCODING_UNKNOWN";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["LENGTH_PREFIXED"] = 1] = "LENGTH_PREFIXED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["DELIMITED"] = 2] = "DELIMITED";
    FeatureSet_MessageEncoding[FeatureSet_MessageEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_MessageEncoding = exports.FeatureSet_MessageEncoding || (exports.FeatureSet_MessageEncoding = {}));
function featureSet_MessageEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "MESSAGE_ENCODING_UNKNOWN":
            return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
        case 1:
        case "LENGTH_PREFIXED":
            return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
        case 2:
        case "DELIMITED":
            return FeatureSet_MessageEncoding.DELIMITED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_MessageEncoding.UNRECOGNIZED;
    }
}
exports.featureSet_MessageEncodingFromJSON = featureSet_MessageEncodingFromJSON;
function featureSet_MessageEncodingToJSON(object) {
    switch (object) {
        case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
            return "MESSAGE_ENCODING_UNKNOWN";
        case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
            return "LENGTH_PREFIXED";
        case FeatureSet_MessageEncoding.DELIMITED:
            return "DELIMITED";
        case FeatureSet_MessageEncoding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_MessageEncodingToJSON = featureSet_MessageEncodingToJSON;
var FeatureSet_JsonFormat;
(function (FeatureSet_JsonFormat) {
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["JSON_FORMAT_UNKNOWN"] = 0] = "JSON_FORMAT_UNKNOWN";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["ALLOW"] = 1] = "ALLOW";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["LEGACY_BEST_EFFORT"] = 2] = "LEGACY_BEST_EFFORT";
    FeatureSet_JsonFormat[FeatureSet_JsonFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FeatureSet_JsonFormat = exports.FeatureSet_JsonFormat || (exports.FeatureSet_JsonFormat = {}));
function featureSet_JsonFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "JSON_FORMAT_UNKNOWN":
            return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
        case 1:
        case "ALLOW":
            return FeatureSet_JsonFormat.ALLOW;
        case 2:
        case "LEGACY_BEST_EFFORT":
            return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FeatureSet_JsonFormat.UNRECOGNIZED;
    }
}
exports.featureSet_JsonFormatFromJSON = featureSet_JsonFormatFromJSON;
function featureSet_JsonFormatToJSON(object) {
    switch (object) {
        case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
            return "JSON_FORMAT_UNKNOWN";
        case FeatureSet_JsonFormat.ALLOW:
            return "ALLOW";
        case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
            return "LEGACY_BEST_EFFORT";
        case FeatureSet_JsonFormat.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.featureSet_JsonFormatToJSON = featureSet_JsonFormatToJSON;
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
var GeneratedCodeInfo_Annotation_Semantic;
(function (GeneratedCodeInfo_Annotation_Semantic) {
    /** NONE - There is no effect or the effect is indescribable. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["NONE"] = 0] = "NONE";
    /** SET - The element is set or otherwise mutated. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["SET"] = 1] = "SET";
    /** ALIAS - An alias to the element is returned. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["ALIAS"] = 2] = "ALIAS";
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneratedCodeInfo_Annotation_Semantic = exports.GeneratedCodeInfo_Annotation_Semantic || (exports.GeneratedCodeInfo_Annotation_Semantic = {}));
function generatedCodeInfo_Annotation_SemanticFromJSON(object) {
    switch (object) {
        case 0:
        case "NONE":
            return GeneratedCodeInfo_Annotation_Semantic.NONE;
        case 1:
        case "SET":
            return GeneratedCodeInfo_Annotation_Semantic.SET;
        case 2:
        case "ALIAS":
            return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
    }
}
exports.generatedCodeInfo_Annotation_SemanticFromJSON = generatedCodeInfo_Annotation_SemanticFromJSON;
function generatedCodeInfo_Annotation_SemanticToJSON(object) {
    switch (object) {
        case GeneratedCodeInfo_Annotation_Semantic.NONE:
            return "NONE";
        case GeneratedCodeInfo_Annotation_Semantic.SET:
            return "SET";
        case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
            return "ALIAS";
        case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.generatedCodeInfo_Annotation_SemanticToJSON = generatedCodeInfo_Annotation_SemanticToJSON;
function createBaseFileDescriptorSet() {
    return { file: [] };
}
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
            file: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.file) ? object.file.map((e) => exports.FileDescriptorProto.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.file) === null || _a === void 0 ? void 0 : _a.length) {
            obj.file = message.file.map((e) => exports.FileDescriptorProto.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorSet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFileDescriptorSet();
        message.file = ((_a = object.file) === null || _a === void 0 ? void 0 : _a.map((e) => exports.FileDescriptorProto.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: "",
        edition: "",
    };
}
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        if (message.edition !== "") {
            writer.uint32(106).string(message.edition);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.dependency.push(reader.string());
                    continue;
                case 10:
                    if (tag === 80) {
                        message.publicDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 11:
                    if (tag === 88) {
                        message.weakDependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 90) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.syntax = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.edition = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            package: isSet(object.package) ? globalThis.String(object.package) : "",
            dependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.dependency)
                ? object.dependency.map((e) => globalThis.String(e))
                : [],
            publicDependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.publicDependency)
                ? object.publicDependency.map((e) => globalThis.Number(e))
                : [],
            weakDependency: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.weakDependency)
                ? object.weakDependency.map((e) => globalThis.Number(e))
                : [],
            messageType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.messageType)
                ? object.messageType.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enumType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.enumType)
                ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : [],
            service: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.service)
                ? object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e))
                : [],
            extension: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.FileOptions.fromJSON(object.options) : undefined,
            sourceCodeInfo: isSet(object.sourceCodeInfo) ? exports.SourceCodeInfo.fromJSON(object.sourceCodeInfo) : undefined,
            syntax: isSet(object.syntax) ? globalThis.String(object.syntax) : "",
            edition: isSet(object.edition) ? globalThis.String(object.edition) : "",
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.package !== "") {
            obj.package = message.package;
        }
        if ((_a = message.dependency) === null || _a === void 0 ? void 0 : _a.length) {
            obj.dependency = message.dependency;
        }
        if ((_b = message.publicDependency) === null || _b === void 0 ? void 0 : _b.length) {
            obj.publicDependency = message.publicDependency.map((e) => Math.round(e));
        }
        if ((_c = message.weakDependency) === null || _c === void 0 ? void 0 : _c.length) {
            obj.weakDependency = message.weakDependency.map((e) => Math.round(e));
        }
        if ((_d = message.messageType) === null || _d === void 0 ? void 0 : _d.length) {
            obj.messageType = message.messageType.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if ((_e = message.enumType) === null || _e === void 0 ? void 0 : _e.length) {
            obj.enumType = message.enumType.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if ((_f = message.service) === null || _f === void 0 ? void 0 : _f.length) {
            obj.service = message.service.map((e) => exports.ServiceDescriptorProto.toJSON(e));
        }
        if ((_g = message.extension) === null || _g === void 0 ? void 0 : _g.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.FileOptions.toJSON(message.options);
        }
        if (message.sourceCodeInfo !== undefined) {
            obj.sourceCodeInfo = exports.SourceCodeInfo.toJSON(message.sourceCodeInfo);
        }
        if (message.syntax !== "") {
            obj.syntax = message.syntax;
        }
        if (message.edition !== "") {
            obj.edition = message.edition;
        }
        return obj;
    },
    create(base) {
        return exports.FileDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseFileDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.dependency = ((_c = object.dependency) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.publicDependency = ((_d = object.publicDependency) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.weakDependency = ((_e = object.weakDependency) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.messageType = ((_f = object.messageType) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enumType = ((_g = object.enumType) === null || _g === void 0 ? void 0 : _g.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.service = ((_h = object.service) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ServiceDescriptorProto.fromPartial(e))) || [];
        message.extension = ((_j = object.extension) === null || _j === void 0 ? void 0 : _j.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FileOptions.fromPartial(object.options)
            : undefined;
        message.sourceCodeInfo = (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null)
            ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo)
            : undefined;
        message.syntax = (_k = object.syntax) !== null && _k !== void 0 ? _k : "";
        message.edition = (_l = object.edition) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
    };
}
exports.DescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            field: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.field)
                ? object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            extension: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : [],
            nestedType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.nestedType)
                ? object.nestedType.map((e) => exports.DescriptorProto.fromJSON(e))
                : [],
            enumType: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.enumType)
                ? object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : [],
            extensionRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.extensionRange)
                ? object.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e))
                : [],
            oneofDecl: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.oneofDecl)
                ? object.oneofDecl.map((e) => exports.OneofDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.MessageOptions.fromJSON(object.options) : undefined,
            reservedRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange)
                ? object.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e))
                : [],
            reservedName: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName)
                ? object.reservedName.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.field) === null || _a === void 0 ? void 0 : _a.length) {
            obj.field = message.field.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if ((_b = message.extension) === null || _b === void 0 ? void 0 : _b.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if ((_c = message.nestedType) === null || _c === void 0 ? void 0 : _c.length) {
            obj.nestedType = message.nestedType.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if ((_d = message.enumType) === null || _d === void 0 ? void 0 : _d.length) {
            obj.enumType = message.enumType.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if ((_e = message.extensionRange) === null || _e === void 0 ? void 0 : _e.length) {
            obj.extensionRange = message.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.toJSON(e));
        }
        if ((_f = message.oneofDecl) === null || _f === void 0 ? void 0 : _f.length) {
            obj.oneofDecl = message.oneofDecl.map((e) => exports.OneofDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.MessageOptions.toJSON(message.options);
        }
        if ((_g = message.reservedRange) === null || _g === void 0 ? void 0 : _g.length) {
            obj.reservedRange = message.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.toJSON(e));
        }
        if ((_h = message.reservedName) === null || _h === void 0 ? void 0 : _h.length) {
            obj.reservedName = message.reservedName;
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.field = ((_b = object.field) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.extension = ((_c = object.extension) === null || _c === void 0 ? void 0 : _c.map((e) => exports.FieldDescriptorProto.fromPartial(e))) || [];
        message.nestedType = ((_d = object.nestedType) === null || _d === void 0 ? void 0 : _d.map((e) => exports.DescriptorProto.fromPartial(e))) || [];
        message.enumType = ((_e = object.enumType) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EnumDescriptorProto.fromPartial(e))) || [];
        message.extensionRange = ((_f = object.extensionRange) === null || _f === void 0 ? void 0 : _f.map((e) => exports.DescriptorProto_ExtensionRange.fromPartial(e))) || [];
        message.oneofDecl = ((_g = object.oneofDecl) === null || _g === void 0 ? void 0 : _g.map((e) => exports.OneofDescriptorProto.fromPartial(e))) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MessageOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = ((_h = object.reservedRange) === null || _h === void 0 ? void 0 : _h.map((e) => exports.DescriptorProto_ReservedRange.fromPartial(e))) || [];
        message.reservedName = ((_j = object.reservedName) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        return message;
    },
};
function createBaseDescriptorProto_ExtensionRange() {
    return { start: 0, end: 0, options: undefined };
}
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? globalThis.Number(object.start) : 0,
            end: isSet(object.end) ? globalThis.Number(object.end) : 0,
            options: isSet(object.options) ? exports.ExtensionRangeOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        if (message.options !== undefined) {
            obj.options = exports.ExtensionRangeOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ExtensionRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ExtensionRangeOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseDescriptorProto_ReservedRange() {
    return { start: 0, end: 0 };
}
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
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
            start: isSet(object.start) ? globalThis.Number(object.start) : 0,
            end: isSet(object.end) ? globalThis.Number(object.end) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
    create(base) {
        return exports.DescriptorProto_ReservedRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseExtensionRangeOptions() {
    return { uninterpretedOption: [], declaration: [], features: undefined, verification: 0 };
}
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        for (const v of message.declaration) {
            exports.ExtensionRangeOptions_Declaration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        if (message.verification !== 0) {
            writer.uint32(24).int32(message.verification);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.declaration.push(exports.ExtensionRangeOptions_Declaration.decode(reader, reader.uint32()));
                    continue;
                case 50:
                    if (tag !== 402) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.verification = reader.int32();
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
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
            declaration: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.declaration)
                ? object.declaration.map((e) => exports.ExtensionRangeOptions_Declaration.fromJSON(e))
                : [],
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            verification: isSet(object.verification)
                ? extensionRangeOptions_VerificationStateFromJSON(object.verification)
                : 0,
        };
    },
    toJSON(message) {
        var _a, _b;
        const obj = {};
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        if ((_b = message.declaration) === null || _b === void 0 ? void 0 : _b.length) {
            obj.declaration = message.declaration.map((e) => exports.ExtensionRangeOptions_Declaration.toJSON(e));
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if (message.verification !== 0) {
            obj.verification = extensionRangeOptions_VerificationStateToJSON(message.verification);
        }
        return obj;
    },
    create(base) {
        return exports.ExtensionRangeOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        message.declaration = ((_b = object.declaration) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ExtensionRangeOptions_Declaration.fromPartial(e))) || [];
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.verification = (_c = object.verification) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseExtensionRangeOptions_Declaration() {
    return { number: 0, fullName: "", type: "", reserved: false, repeated: false };
}
exports.ExtensionRangeOptions_Declaration = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.number !== 0) {
            writer.uint32(8).int32(message.number);
        }
        if (message.fullName !== "") {
            writer.uint32(18).string(message.fullName);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        if (message.reserved === true) {
            writer.uint32(40).bool(message.reserved);
        }
        if (message.repeated === true) {
            writer.uint32(48).bool(message.repeated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions_Declaration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.reserved = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.repeated = reader.bool();
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
            number: isSet(object.number) ? globalThis.Number(object.number) : 0,
            fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            reserved: isSet(object.reserved) ? globalThis.Boolean(object.reserved) : false,
            repeated: isSet(object.repeated) ? globalThis.Boolean(object.repeated) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.fullName !== "") {
            obj.fullName = message.fullName;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.reserved === true) {
            obj.reserved = message.reserved;
        }
        if (message.repeated === true) {
            obj.repeated = message.repeated;
        }
        return obj;
    },
    create(base) {
        return exports.ExtensionRangeOptions_Declaration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseExtensionRangeOptions_Declaration();
        message.number = (_a = object.number) !== null && _a !== void 0 ? _a : 0;
        message.fullName = (_b = object.fullName) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.reserved = (_d = object.reserved) !== null && _d !== void 0 ? _d : false;
        message.repeated = (_e = object.repeated) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined,
        proto3Optional: false,
    };
}
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3Optional === true) {
            writer.uint32(136).bool(message.proto3Optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.label = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.typeName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.extendee = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.defaultValue = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.oneofIndex = reader.int32();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.jsonName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.proto3Optional = reader.bool();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            number: isSet(object.number) ? globalThis.Number(object.number) : 0,
            label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : 1,
            type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : 1,
            typeName: isSet(object.typeName) ? globalThis.String(object.typeName) : "",
            extendee: isSet(object.extendee) ? globalThis.String(object.extendee) : "",
            defaultValue: isSet(object.defaultValue) ? globalThis.String(object.defaultValue) : "",
            oneofIndex: isSet(object.oneofIndex) ? globalThis.Number(object.oneofIndex) : 0,
            jsonName: isSet(object.jsonName) ? globalThis.String(object.jsonName) : "",
            options: isSet(object.options) ? exports.FieldOptions.fromJSON(object.options) : undefined,
            proto3Optional: isSet(object.proto3Optional) ? globalThis.Boolean(object.proto3Optional) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.label !== 1) {
            obj.label = fieldDescriptorProto_LabelToJSON(message.label);
        }
        if (message.type !== 1) {
            obj.type = fieldDescriptorProto_TypeToJSON(message.type);
        }
        if (message.typeName !== "") {
            obj.typeName = message.typeName;
        }
        if (message.extendee !== "") {
            obj.extendee = message.extendee;
        }
        if (message.defaultValue !== "") {
            obj.defaultValue = message.defaultValue;
        }
        if (message.oneofIndex !== 0) {
            obj.oneofIndex = Math.round(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            obj.jsonName = message.jsonName;
        }
        if (message.options !== undefined) {
            obj.options = exports.FieldOptions.toJSON(message.options);
        }
        if (message.proto3Optional === true) {
            obj.proto3Optional = message.proto3Optional;
        }
        return obj;
    },
    create(base) {
        return exports.FieldDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseFieldDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : 1;
        message.type = (_d = object.type) !== null && _d !== void 0 ? _d : 1;
        message.typeName = (_e = object.typeName) !== null && _e !== void 0 ? _e : "";
        message.extendee = (_f = object.extendee) !== null && _f !== void 0 ? _f : "";
        message.defaultValue = (_g = object.defaultValue) !== null && _g !== void 0 ? _g : "";
        message.oneofIndex = (_h = object.oneofIndex) !== null && _h !== void 0 ? _h : 0;
        message.jsonName = (_j = object.jsonName) !== null && _j !== void 0 ? _j : "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.FieldOptions.fromPartial(object.options)
            : undefined;
        message.proto3Optional = (_k = object.proto3Optional) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
function createBaseOneofDescriptorProto() {
    return { name: "", options: undefined };
}
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            options: isSet(object.options) ? exports.OneofOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.options !== undefined) {
            obj.options = exports.OneofOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.OneofDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.OneofOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseEnumDescriptorProto() {
    return { name: "", value: [], options: undefined, reservedRange: [], reservedName: [] };
}
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.reservedName.push(reader.string());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            value: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.value)
                ? object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.EnumOptions.fromJSON(object.options) : undefined,
            reservedRange: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedRange)
                ? object.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e))
                : [],
            reservedName: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.reservedName)
                ? object.reservedName.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.value) === null || _a === void 0 ? void 0 : _a.length) {
            obj.value = message.value.map((e) => exports.EnumValueDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumOptions.toJSON(message.options);
        }
        if ((_b = message.reservedRange) === null || _b === void 0 ? void 0 : _b.length) {
            obj.reservedRange = message.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.toJSON(e));
        }
        if ((_c = message.reservedName) === null || _c === void 0 ? void 0 : _c.length) {
            obj.reservedName = message.reservedName;
        }
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEnumDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.value = ((_b = object.value) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EnumValueDescriptorProto.fromPartial(e))) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumOptions.fromPartial(object.options)
            : undefined;
        message.reservedRange = ((_c = object.reservedRange) === null || _c === void 0 ? void 0 : _c.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e))) ||
            [];
        message.reservedName = ((_d = object.reservedName) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return { start: 0, end: 0 };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.start = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.end = reader.int32();
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
            start: isSet(object.start) ? globalThis.Number(object.start) : 0,
            end: isSet(object.end) ? globalThis.Number(object.end) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
    create(base) {
        return exports.EnumDescriptorProto_EnumReservedRange.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = (_a = object.start) !== null && _a !== void 0 ? _a : 0;
        message.end = (_b = object.end) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEnumValueDescriptorProto() {
    return { name: "", number: 0, options: undefined };
}
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            number: isSet(object.number) ? globalThis.Number(object.number) : 0,
            options: isSet(object.options) ? exports.EnumValueOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumValueOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.EnumValueDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEnumValueDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.EnumValueOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseServiceDescriptorProto() {
    return { name: "", method: [], options: undefined };
}
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            method: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.method)
                ? object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e))
                : [],
            options: isSet(object.options) ? exports.ServiceOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.method) === null || _a === void 0 ? void 0 : _a.length) {
            obj.method = message.method.map((e) => exports.MethodDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.ServiceOptions.toJSON(message.options);
        }
        return obj;
    },
    create(base) {
        return exports.ServiceDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = ((_b = object.method) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MethodDescriptorProto.fromPartial(e))) || [];
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.ServiceOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false,
    };
}
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.inputType = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.outputType = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.clientStreaming = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.serverStreaming = reader.bool();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            inputType: isSet(object.inputType) ? globalThis.String(object.inputType) : "",
            outputType: isSet(object.outputType) ? globalThis.String(object.outputType) : "",
            options: isSet(object.options) ? exports.MethodOptions.fromJSON(object.options) : undefined,
            clientStreaming: isSet(object.clientStreaming) ? globalThis.Boolean(object.clientStreaming) : false,
            serverStreaming: isSet(object.serverStreaming) ? globalThis.Boolean(object.serverStreaming) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.inputType !== "") {
            obj.inputType = message.inputType;
        }
        if (message.outputType !== "") {
            obj.outputType = message.outputType;
        }
        if (message.options !== undefined) {
            obj.options = exports.MethodOptions.toJSON(message.options);
        }
        if (message.clientStreaming === true) {
            obj.clientStreaming = message.clientStreaming;
        }
        if (message.serverStreaming === true) {
            obj.serverStreaming = message.serverStreaming;
        }
        return obj;
    },
    create(base) {
        return exports.MethodDescriptorProto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMethodDescriptorProto();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.inputType = (_b = object.inputType) !== null && _b !== void 0 ? _b : "";
        message.outputType = (_c = object.outputType) !== null && _c !== void 0 ? _c : "";
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.MethodOptions.fromPartial(object.options)
            : undefined;
        message.clientStreaming = (_d = object.clientStreaming) !== null && _d !== void 0 ? _d : false;
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.FileOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(402).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.javaPackage = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.javaOuterClassname = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.javaMultipleFiles = reader.bool();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.javaGenerateEqualsAndHash = reader.bool();
                    continue;
                case 27:
                    if (tag !== 216) {
                        break;
                    }
                    message.javaStringCheckUtf8 = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.optimizeFor = reader.int32();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.goPackage = reader.string();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.ccGenericServices = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.javaGenericServices = reader.bool();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.pyGenericServices = reader.bool();
                    continue;
                case 42:
                    if (tag !== 336) {
                        break;
                    }
                    message.phpGenericServices = reader.bool();
                    continue;
                case 23:
                    if (tag !== 184) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 31:
                    if (tag !== 248) {
                        break;
                    }
                    message.ccEnableArenas = reader.bool();
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }
                    message.objcClassPrefix = reader.string();
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.csharpNamespace = reader.string();
                    continue;
                case 39:
                    if (tag !== 314) {
                        break;
                    }
                    message.swiftPrefix = reader.string();
                    continue;
                case 40:
                    if (tag !== 322) {
                        break;
                    }
                    message.phpClassPrefix = reader.string();
                    continue;
                case 41:
                    if (tag !== 330) {
                        break;
                    }
                    message.phpNamespace = reader.string();
                    continue;
                case 44:
                    if (tag !== 354) {
                        break;
                    }
                    message.phpMetadataNamespace = reader.string();
                    continue;
                case 45:
                    if (tag !== 362) {
                        break;
                    }
                    message.rubyPackage = reader.string();
                    continue;
                case 50:
                    if (tag !== 402) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            javaPackage: isSet(object.javaPackage) ? globalThis.String(object.javaPackage) : "",
            javaOuterClassname: isSet(object.javaOuterClassname) ? globalThis.String(object.javaOuterClassname) : "",
            javaMultipleFiles: isSet(object.javaMultipleFiles) ? globalThis.Boolean(object.javaMultipleFiles) : false,
            javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash)
                ? globalThis.Boolean(object.javaGenerateEqualsAndHash)
                : false,
            javaStringCheckUtf8: isSet(object.javaStringCheckUtf8) ? globalThis.Boolean(object.javaStringCheckUtf8) : false,
            optimizeFor: isSet(object.optimizeFor) ? fileOptions_OptimizeModeFromJSON(object.optimizeFor) : 1,
            goPackage: isSet(object.goPackage) ? globalThis.String(object.goPackage) : "",
            ccGenericServices: isSet(object.ccGenericServices) ? globalThis.Boolean(object.ccGenericServices) : false,
            javaGenericServices: isSet(object.javaGenericServices) ? globalThis.Boolean(object.javaGenericServices) : false,
            pyGenericServices: isSet(object.pyGenericServices) ? globalThis.Boolean(object.pyGenericServices) : false,
            phpGenericServices: isSet(object.phpGenericServices) ? globalThis.Boolean(object.phpGenericServices) : false,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            ccEnableArenas: isSet(object.ccEnableArenas) ? globalThis.Boolean(object.ccEnableArenas) : false,
            objcClassPrefix: isSet(object.objcClassPrefix) ? globalThis.String(object.objcClassPrefix) : "",
            csharpNamespace: isSet(object.csharpNamespace) ? globalThis.String(object.csharpNamespace) : "",
            swiftPrefix: isSet(object.swiftPrefix) ? globalThis.String(object.swiftPrefix) : "",
            phpClassPrefix: isSet(object.phpClassPrefix) ? globalThis.String(object.phpClassPrefix) : "",
            phpNamespace: isSet(object.phpNamespace) ? globalThis.String(object.phpNamespace) : "",
            phpMetadataNamespace: isSet(object.phpMetadataNamespace) ? globalThis.String(object.phpMetadataNamespace) : "",
            rubyPackage: isSet(object.rubyPackage) ? globalThis.String(object.rubyPackage) : "",
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.javaPackage !== "") {
            obj.javaPackage = message.javaPackage;
        }
        if (message.javaOuterClassname !== "") {
            obj.javaOuterClassname = message.javaOuterClassname;
        }
        if (message.javaMultipleFiles === true) {
            obj.javaMultipleFiles = message.javaMultipleFiles;
        }
        if (message.javaGenerateEqualsAndHash === true) {
            obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
        }
        if (message.javaStringCheckUtf8 === true) {
            obj.javaStringCheckUtf8 = message.javaStringCheckUtf8;
        }
        if (message.optimizeFor !== 1) {
            obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            obj.goPackage = message.goPackage;
        }
        if (message.ccGenericServices === true) {
            obj.ccGenericServices = message.ccGenericServices;
        }
        if (message.javaGenericServices === true) {
            obj.javaGenericServices = message.javaGenericServices;
        }
        if (message.pyGenericServices === true) {
            obj.pyGenericServices = message.pyGenericServices;
        }
        if (message.phpGenericServices === true) {
            obj.phpGenericServices = message.phpGenericServices;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.ccEnableArenas === true) {
            obj.ccEnableArenas = message.ccEnableArenas;
        }
        if (message.objcClassPrefix !== "") {
            obj.objcClassPrefix = message.objcClassPrefix;
        }
        if (message.csharpNamespace !== "") {
            obj.csharpNamespace = message.csharpNamespace;
        }
        if (message.swiftPrefix !== "") {
            obj.swiftPrefix = message.swiftPrefix;
        }
        if (message.phpClassPrefix !== "") {
            obj.phpClassPrefix = message.phpClassPrefix;
        }
        if (message.phpNamespace !== "") {
            obj.phpNamespace = message.phpNamespace;
        }
        if (message.phpMetadataNamespace !== "") {
            obj.phpMetadataNamespace = message.phpMetadataNamespace;
        }
        if (message.rubyPackage !== "") {
            obj.rubyPackage = message.rubyPackage;
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FileOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseFileOptions();
        message.javaPackage = (_a = object.javaPackage) !== null && _a !== void 0 ? _a : "";
        message.javaOuterClassname = (_b = object.javaOuterClassname) !== null && _b !== void 0 ? _b : "";
        message.javaMultipleFiles = (_c = object.javaMultipleFiles) !== null && _c !== void 0 ? _c : false;
        message.javaGenerateEqualsAndHash = (_d = object.javaGenerateEqualsAndHash) !== null && _d !== void 0 ? _d : false;
        message.javaStringCheckUtf8 = (_e = object.javaStringCheckUtf8) !== null && _e !== void 0 ? _e : false;
        message.optimizeFor = (_f = object.optimizeFor) !== null && _f !== void 0 ? _f : 1;
        message.goPackage = (_g = object.goPackage) !== null && _g !== void 0 ? _g : "";
        message.ccGenericServices = (_h = object.ccGenericServices) !== null && _h !== void 0 ? _h : false;
        message.javaGenericServices = (_j = object.javaGenericServices) !== null && _j !== void 0 ? _j : false;
        message.pyGenericServices = (_k = object.pyGenericServices) !== null && _k !== void 0 ? _k : false;
        message.phpGenericServices = (_l = object.phpGenericServices) !== null && _l !== void 0 ? _l : false;
        message.deprecated = (_m = object.deprecated) !== null && _m !== void 0 ? _m : false;
        message.ccEnableArenas = (_o = object.ccEnableArenas) !== null && _o !== void 0 ? _o : false;
        message.objcClassPrefix = (_p = object.objcClassPrefix) !== null && _p !== void 0 ? _p : "";
        message.csharpNamespace = (_q = object.csharpNamespace) !== null && _q !== void 0 ? _q : "";
        message.swiftPrefix = (_r = object.swiftPrefix) !== null && _r !== void 0 ? _r : "";
        message.phpClassPrefix = (_s = object.phpClassPrefix) !== null && _s !== void 0 ? _s : "";
        message.phpNamespace = (_t = object.phpNamespace) !== null && _t !== void 0 ? _t : "";
        message.phpMetadataNamespace = (_u = object.phpMetadataNamespace) !== null && _u !== void 0 ? _u : "";
        message.rubyPackage = (_v = object.rubyPackage) !== null && _v !== void 0 ? _v : "";
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_w = object.uninterpretedOption) === null || _w === void 0 ? void 0 : _w.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.MessageOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(88).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.messageSetWireFormat = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.noStandardDescriptorAccessor = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.mapEntry = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            messageSetWireFormat: isSet(object.messageSetWireFormat)
                ? globalThis.Boolean(object.messageSetWireFormat)
                : false,
            noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor)
                ? globalThis.Boolean(object.noStandardDescriptorAccessor)
                : false,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            mapEntry: isSet(object.mapEntry) ? globalThis.Boolean(object.mapEntry) : false,
            deprecatedLegacyJsonFieldConflicts: isSet(object.deprecatedLegacyJsonFieldConflicts)
                ? globalThis.Boolean(object.deprecatedLegacyJsonFieldConflicts)
                : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.messageSetWireFormat === true) {
            obj.messageSetWireFormat = message.messageSetWireFormat;
        }
        if (message.noStandardDescriptorAccessor === true) {
            obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.mapEntry === true) {
            obj.mapEntry = message.mapEntry;
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts;
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MessageOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMessageOptions();
        message.messageSetWireFormat = (_a = object.messageSetWireFormat) !== null && _a !== void 0 ? _a : false;
        message.noStandardDescriptorAccessor = (_b = object.noStandardDescriptorAccessor) !== null && _b !== void 0 ? _b : false;
        message.deprecated = (_c = object.deprecated) !== null && _c !== void 0 ? _c : false;
        message.mapEntry = (_d = object.mapEntry) !== null && _d !== void 0 ? _d : false;
        message.deprecatedLegacyJsonFieldConflicts = (_e = object.deprecatedLegacyJsonFieldConflicts) !== null && _e !== void 0 ? _e : false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_f = object.uninterpretedOption) === null || _f === void 0 ? void 0 : _f.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFieldOptions() {
    return {
        ctype: 0,
        packed: false,
        jstype: 0,
        lazy: false,
        unverifiedLazy: false,
        deprecated: false,
        weak: false,
        debugRedact: false,
        retention: 0,
        targets: [],
        editionDefaults: [],
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.FieldOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ctype !== 0) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 0) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.unverifiedLazy === true) {
            writer.uint32(120).bool(message.unverifiedLazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        if (message.debugRedact === true) {
            writer.uint32(128).bool(message.debugRedact);
        }
        if (message.retention !== 0) {
            writer.uint32(136).int32(message.retention);
        }
        writer.uint32(154).fork();
        for (const v of message.targets) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.editionDefaults) {
            exports.FieldOptions_EditionDefault.encode(v, writer.uint32(162).fork()).ldelim();
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(170).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ctype = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.packed = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.jstype = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.lazy = reader.bool();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.unverifiedLazy = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.weak = reader.bool();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.debugRedact = reader.bool();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.retention = reader.int32();
                    continue;
                case 19:
                    if (tag === 152) {
                        message.targets.push(reader.int32());
                        continue;
                    }
                    if (tag === 154) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.targets.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.editionDefaults.push(exports.FieldOptions_EditionDefault.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
            packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : false,
            jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : 0,
            lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : false,
            unverifiedLazy: isSet(object.unverifiedLazy) ? globalThis.Boolean(object.unverifiedLazy) : false,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : false,
            debugRedact: isSet(object.debugRedact) ? globalThis.Boolean(object.debugRedact) : false,
            retention: isSet(object.retention) ? fieldOptions_OptionRetentionFromJSON(object.retention) : 0,
            targets: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.targets)
                ? object.targets.map((e) => fieldOptions_OptionTargetTypeFromJSON(e))
                : [],
            editionDefaults: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.editionDefaults)
                ? object.editionDefaults.map((e) => exports.FieldOptions_EditionDefault.fromJSON(e))
                : [],
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if (message.ctype !== 0) {
            obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
        }
        if (message.packed === true) {
            obj.packed = message.packed;
        }
        if (message.jstype !== 0) {
            obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
        }
        if (message.lazy === true) {
            obj.lazy = message.lazy;
        }
        if (message.unverifiedLazy === true) {
            obj.unverifiedLazy = message.unverifiedLazy;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.weak === true) {
            obj.weak = message.weak;
        }
        if (message.debugRedact === true) {
            obj.debugRedact = message.debugRedact;
        }
        if (message.retention !== 0) {
            obj.retention = fieldOptions_OptionRetentionToJSON(message.retention);
        }
        if ((_a = message.targets) === null || _a === void 0 ? void 0 : _a.length) {
            obj.targets = message.targets.map((e) => fieldOptions_OptionTargetTypeToJSON(e));
        }
        if ((_b = message.editionDefaults) === null || _b === void 0 ? void 0 : _b.length) {
            obj.editionDefaults = message.editionDefaults.map((e) => exports.FieldOptions_EditionDefault.toJSON(e));
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_c = message.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FieldOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseFieldOptions();
        message.ctype = (_a = object.ctype) !== null && _a !== void 0 ? _a : 0;
        message.packed = (_b = object.packed) !== null && _b !== void 0 ? _b : false;
        message.jstype = (_c = object.jstype) !== null && _c !== void 0 ? _c : 0;
        message.lazy = (_d = object.lazy) !== null && _d !== void 0 ? _d : false;
        message.unverifiedLazy = (_e = object.unverifiedLazy) !== null && _e !== void 0 ? _e : false;
        message.deprecated = (_f = object.deprecated) !== null && _f !== void 0 ? _f : false;
        message.weak = (_g = object.weak) !== null && _g !== void 0 ? _g : false;
        message.debugRedact = (_h = object.debugRedact) !== null && _h !== void 0 ? _h : false;
        message.retention = (_j = object.retention) !== null && _j !== void 0 ? _j : 0;
        message.targets = ((_k = object.targets) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.editionDefaults = ((_l = object.editionDefaults) === null || _l === void 0 ? void 0 : _l.map((e) => exports.FieldOptions_EditionDefault.fromPartial(e))) || [];
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_m = object.uninterpretedOption) === null || _m === void 0 ? void 0 : _m.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFieldOptions_EditionDefault() {
    return { edition: "", value: "" };
}
exports.FieldOptions_EditionDefault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.edition !== "") {
            writer.uint32(10).string(message.edition);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions_EditionDefault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.edition = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
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
            edition: isSet(object.edition) ? globalThis.String(object.edition) : "",
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.edition !== "") {
            obj.edition = message.edition;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.FieldOptions_EditionDefault.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFieldOptions_EditionDefault();
        message.edition = (_a = object.edition) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseOneofOptions() {
    return { features: undefined, uninterpretedOption: [] };
}
exports.OneofOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OneofOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOneofOptions();
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_a = object.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        deprecatedLegacyJsonFieldConflicts: false,
        features: undefined,
        uninterpretedOption: [],
    };
}
exports.EnumOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            writer.uint32(48).bool(message.deprecatedLegacyJsonFieldConflicts);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.allowAlias = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.deprecatedLegacyJsonFieldConflicts = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            allowAlias: isSet(object.allowAlias) ? globalThis.Boolean(object.allowAlias) : false,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            deprecatedLegacyJsonFieldConflicts: isSet(object.deprecatedLegacyJsonFieldConflicts)
                ? globalThis.Boolean(object.deprecatedLegacyJsonFieldConflicts)
                : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.allowAlias === true) {
            obj.allowAlias = message.allowAlias;
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.deprecatedLegacyJsonFieldConflicts === true) {
            obj.deprecatedLegacyJsonFieldConflicts = message.deprecatedLegacyJsonFieldConflicts;
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.EnumOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseEnumOptions();
        message.allowAlias = (_a = object.allowAlias) !== null && _a !== void 0 ? _a : false;
        message.deprecated = (_b = object.deprecated) !== null && _b !== void 0 ? _b : false;
        message.deprecatedLegacyJsonFieldConflicts = (_c = object.deprecatedLegacyJsonFieldConflicts) !== null && _c !== void 0 ? _c : false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_d = object.uninterpretedOption) === null || _d === void 0 ? void 0 : _d.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEnumValueOptions() {
    return { deprecated: false, features: undefined, debugRedact: false, uninterpretedOption: [] };
}
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(18).fork()).ldelim();
        }
        if (message.debugRedact === true) {
            writer.uint32(24).bool(message.debugRedact);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.debugRedact = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            debugRedact: isSet(object.debugRedact) ? globalThis.Boolean(object.debugRedact) : false,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if (message.debugRedact === true) {
            obj.debugRedact = message.debugRedact;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.EnumValueOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEnumValueOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.debugRedact = (_b = object.debugRedact) !== null && _b !== void 0 ? _b : false;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseServiceOptions() {
    return { features: undefined, deprecated: false, uninterpretedOption: [] };
}
exports.ServiceOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(274).fork()).ldelim();
        }
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ServiceOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseServiceOptions();
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.uninterpretedOption = ((_b = object.uninterpretedOption) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMethodOptions() {
    return { deprecated: false, idempotencyLevel: 0, features: undefined, uninterpretedOption: [] };
}
exports.MethodOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 0) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        if (message.features !== undefined) {
            exports.FeatureSet.encode(message.features, writer.uint32(282).fork()).ldelim();
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    if (tag !== 264) {
                        break;
                    }
                    message.deprecated = reader.bool();
                    continue;
                case 34:
                    if (tag !== 272) {
                        break;
                    }
                    message.idempotencyLevel = reader.int32();
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.features = exports.FeatureSet.decode(reader, reader.uint32());
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
            idempotencyLevel: isSet(object.idempotencyLevel)
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
                : 0,
            features: isSet(object.features) ? exports.FeatureSet.fromJSON(object.features) : undefined,
            uninterpretedOption: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.uninterpretedOption)
                ? object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.idempotencyLevel !== 0) {
            obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel);
        }
        if (message.features !== undefined) {
            obj.features = exports.FeatureSet.toJSON(message.features);
        }
        if ((_a = message.uninterpretedOption) === null || _a === void 0 ? void 0 : _a.length) {
            obj.uninterpretedOption = message.uninterpretedOption.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MethodOptions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMethodOptions();
        message.deprecated = (_a = object.deprecated) !== null && _a !== void 0 ? _a : false;
        message.idempotencyLevel = (_b = object.idempotencyLevel) !== null && _b !== void 0 ? _b : 0;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.FeatureSet.fromPartial(object.features)
            : undefined;
        message.uninterpretedOption = ((_c = object.uninterpretedOption) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UninterpretedOption.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: "0",
        negativeIntValue: "0",
        doubleValue: 0,
        stringValue: new Uint8Array(0),
        aggregateValue: "",
    };
}
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== "0") {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== "0") {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.identifierValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.positiveIntValue = longToString(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.negativeIntValue = longToString(reader.int64());
                    continue;
                case 6:
                    if (tag !== 49) {
                        break;
                    }
                    message.doubleValue = reader.double();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stringValue = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.aggregateValue = reader.string();
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
            name: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.name)
                ? object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e))
                : [],
            identifierValue: isSet(object.identifierValue) ? globalThis.String(object.identifierValue) : "",
            positiveIntValue: isSet(object.positiveIntValue) ? globalThis.String(object.positiveIntValue) : "0",
            negativeIntValue: isSet(object.negativeIntValue) ? globalThis.String(object.negativeIntValue) : "0",
            doubleValue: isSet(object.doubleValue) ? globalThis.Number(object.doubleValue) : 0,
            stringValue: isSet(object.stringValue) ? bytesFromBase64(object.stringValue) : new Uint8Array(0),
            aggregateValue: isSet(object.aggregateValue) ? globalThis.String(object.aggregateValue) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.name) === null || _a === void 0 ? void 0 : _a.length) {
            obj.name = message.name.map((e) => exports.UninterpretedOption_NamePart.toJSON(e));
        }
        if (message.identifierValue !== "") {
            obj.identifierValue = message.identifierValue;
        }
        if (message.positiveIntValue !== "0") {
            obj.positiveIntValue = message.positiveIntValue;
        }
        if (message.negativeIntValue !== "0") {
            obj.negativeIntValue = message.negativeIntValue;
        }
        if (message.doubleValue !== 0) {
            obj.doubleValue = message.doubleValue;
        }
        if (message.stringValue.length !== 0) {
            obj.stringValue = base64FromBytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            obj.aggregateValue = message.aggregateValue;
        }
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseUninterpretedOption();
        message.name = ((_a = object.name) === null || _a === void 0 ? void 0 : _a.map((e) => exports.UninterpretedOption_NamePart.fromPartial(e))) || [];
        message.identifierValue = (_b = object.identifierValue) !== null && _b !== void 0 ? _b : "";
        message.positiveIntValue = (_c = object.positiveIntValue) !== null && _c !== void 0 ? _c : "0";
        message.negativeIntValue = (_d = object.negativeIntValue) !== null && _d !== void 0 ? _d : "0";
        message.doubleValue = (_e = object.doubleValue) !== null && _e !== void 0 ? _e : 0;
        message.stringValue = (_f = object.stringValue) !== null && _f !== void 0 ? _f : new Uint8Array(0);
        message.aggregateValue = (_g = object.aggregateValue) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseUninterpretedOption_NamePart() {
    return { namePart: "", isExtension: false };
}
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.namePart = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isExtension = reader.bool();
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
            namePart: isSet(object.namePart) ? globalThis.String(object.namePart) : "",
            isExtension: isSet(object.isExtension) ? globalThis.Boolean(object.isExtension) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.namePart !== "") {
            obj.namePart = message.namePart;
        }
        if (message.isExtension === true) {
            obj.isExtension = message.isExtension;
        }
        return obj;
    },
    create(base) {
        return exports.UninterpretedOption_NamePart.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUninterpretedOption_NamePart();
        message.namePart = (_a = object.namePart) !== null && _a !== void 0 ? _a : "";
        message.isExtension = (_b = object.isExtension) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseFeatureSet() {
    return {
        fieldPresence: 0,
        enumType: 0,
        repeatedFieldEncoding: 0,
        stringFieldValidation: 0,
        messageEncoding: 0,
        jsonFormat: 0,
        rawFeatures: undefined,
    };
}
exports.FeatureSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fieldPresence !== 0) {
            writer.uint32(8).int32(message.fieldPresence);
        }
        if (message.enumType !== 0) {
            writer.uint32(16).int32(message.enumType);
        }
        if (message.repeatedFieldEncoding !== 0) {
            writer.uint32(24).int32(message.repeatedFieldEncoding);
        }
        if (message.stringFieldValidation !== 0) {
            writer.uint32(32).int32(message.stringFieldValidation);
        }
        if (message.messageEncoding !== 0) {
            writer.uint32(40).int32(message.messageEncoding);
        }
        if (message.jsonFormat !== 0) {
            writer.uint32(48).int32(message.jsonFormat);
        }
        if (message.rawFeatures !== undefined) {
            exports.FeatureSet.encode(message.rawFeatures, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeatureSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.fieldPresence = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.enumType = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.repeatedFieldEncoding = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.stringFieldValidation = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.messageEncoding = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.jsonFormat = reader.int32();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    message.rawFeatures = exports.FeatureSet.decode(reader, reader.uint32());
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
            fieldPresence: isSet(object.fieldPresence) ? featureSet_FieldPresenceFromJSON(object.fieldPresence) : 0,
            enumType: isSet(object.enumType) ? featureSet_EnumTypeFromJSON(object.enumType) : 0,
            repeatedFieldEncoding: isSet(object.repeatedFieldEncoding)
                ? featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding)
                : 0,
            stringFieldValidation: isSet(object.stringFieldValidation)
                ? featureSet_StringFieldValidationFromJSON(object.stringFieldValidation)
                : 0,
            messageEncoding: isSet(object.messageEncoding) ? featureSet_MessageEncodingFromJSON(object.messageEncoding) : 0,
            jsonFormat: isSet(object.jsonFormat) ? featureSet_JsonFormatFromJSON(object.jsonFormat) : 0,
            rawFeatures: isSet(object.rawFeatures) ? exports.FeatureSet.fromJSON(object.rawFeatures) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fieldPresence !== 0) {
            obj.fieldPresence = featureSet_FieldPresenceToJSON(message.fieldPresence);
        }
        if (message.enumType !== 0) {
            obj.enumType = featureSet_EnumTypeToJSON(message.enumType);
        }
        if (message.repeatedFieldEncoding !== 0) {
            obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingToJSON(message.repeatedFieldEncoding);
        }
        if (message.stringFieldValidation !== 0) {
            obj.stringFieldValidation = featureSet_StringFieldValidationToJSON(message.stringFieldValidation);
        }
        if (message.messageEncoding !== 0) {
            obj.messageEncoding = featureSet_MessageEncodingToJSON(message.messageEncoding);
        }
        if (message.jsonFormat !== 0) {
            obj.jsonFormat = featureSet_JsonFormatToJSON(message.jsonFormat);
        }
        if (message.rawFeatures !== undefined) {
            obj.rawFeatures = exports.FeatureSet.toJSON(message.rawFeatures);
        }
        return obj;
    },
    create(base) {
        return exports.FeatureSet.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseFeatureSet();
        message.fieldPresence = (_a = object.fieldPresence) !== null && _a !== void 0 ? _a : 0;
        message.enumType = (_b = object.enumType) !== null && _b !== void 0 ? _b : 0;
        message.repeatedFieldEncoding = (_c = object.repeatedFieldEncoding) !== null && _c !== void 0 ? _c : 0;
        message.stringFieldValidation = (_d = object.stringFieldValidation) !== null && _d !== void 0 ? _d : 0;
        message.messageEncoding = (_e = object.messageEncoding) !== null && _e !== void 0 ? _e : 0;
        message.jsonFormat = (_f = object.jsonFormat) !== null && _f !== void 0 ? _f : 0;
        message.rawFeatures = (object.rawFeatures !== undefined && object.rawFeatures !== null)
            ? exports.FeatureSet.fromPartial(object.rawFeatures)
            : undefined;
        return message;
    },
};
function createBaseSourceCodeInfo() {
    return { location: [] };
}
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
            location: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.location)
                ? object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.location) === null || _a === void 0 ? void 0 : _a.length) {
            obj.location = message.location.map((e) => exports.SourceCodeInfo_Location.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSourceCodeInfo();
        message.location = ((_a = object.location) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SourceCodeInfo_Location.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSourceCodeInfo_Location() {
    return { path: [], span: [], leadingComments: "", trailingComments: "", leadingDetachedComments: [] };
}
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        message.span.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leadingComments = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.trailingComments = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.leadingDetachedComments.push(reader.string());
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
            path: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => globalThis.Number(e)) : [],
            span: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.span) ? object.span.map((e) => globalThis.Number(e)) : [],
            leadingComments: isSet(object.leadingComments) ? globalThis.String(object.leadingComments) : "",
            trailingComments: isSet(object.trailingComments) ? globalThis.String(object.trailingComments) : "",
            leadingDetachedComments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.leadingDetachedComments)
                ? object.leadingDetachedComments.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if ((_a = message.path) === null || _a === void 0 ? void 0 : _a.length) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        if ((_b = message.span) === null || _b === void 0 ? void 0 : _b.length) {
            obj.span = message.span.map((e) => Math.round(e));
        }
        if (message.leadingComments !== "") {
            obj.leadingComments = message.leadingComments;
        }
        if (message.trailingComments !== "") {
            obj.trailingComments = message.trailingComments;
        }
        if ((_c = message.leadingDetachedComments) === null || _c === void 0 ? void 0 : _c.length) {
            obj.leadingDetachedComments = message.leadingDetachedComments;
        }
        return obj;
    },
    create(base) {
        return exports.SourceCodeInfo_Location.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSourceCodeInfo_Location();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.span = ((_b = object.span) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.leadingComments = (_c = object.leadingComments) !== null && _c !== void 0 ? _c : "";
        message.trailingComments = (_d = object.trailingComments) !== null && _d !== void 0 ? _d : "";
        message.leadingDetachedComments = ((_e = object.leadingDetachedComments) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo() {
    return { annotation: [] };
}
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
            annotation: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.annotation)
                ? object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.annotation) === null || _a === void 0 ? void 0 : _a.length) {
            obj.annotation = message.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGeneratedCodeInfo();
        message.annotation = ((_a = object.annotation) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GeneratedCodeInfo_Annotation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGeneratedCodeInfo_Annotation() {
    return { path: [], sourceFile: "", begin: 0, end: 0, semantic: 0 };
}
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        if (message.semantic !== 0) {
            writer.uint32(40).int32(message.semantic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceFile = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.begin = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.end = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.semantic = reader.int32();
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
            path: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.path) ? object.path.map((e) => globalThis.Number(e)) : [],
            sourceFile: isSet(object.sourceFile) ? globalThis.String(object.sourceFile) : "",
            begin: isSet(object.begin) ? globalThis.Number(object.begin) : 0,
            end: isSet(object.end) ? globalThis.Number(object.end) : 0,
            semantic: isSet(object.semantic) ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.path) === null || _a === void 0 ? void 0 : _a.length) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        if (message.sourceFile !== "") {
            obj.sourceFile = message.sourceFile;
        }
        if (message.begin !== 0) {
            obj.begin = Math.round(message.begin);
        }
        if (message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        if (message.semantic !== 0) {
            obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(message.semantic);
        }
        return obj;
    },
    create(base) {
        return exports.GeneratedCodeInfo_Annotation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = ((_a = object.path) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.sourceFile = (_b = object.sourceFile) !== null && _b !== void 0 ? _b : "";
        message.begin = (_c = object.begin) !== null && _c !== void 0 ? _c : 0;
        message.end = (_d = object.end) !== null && _d !== void 0 ? _d : 0;
        message.semantic = (_e = object.semantic) !== null && _e !== void 0 ? _e : 0;
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
//# sourceMappingURL=descriptor.js.map