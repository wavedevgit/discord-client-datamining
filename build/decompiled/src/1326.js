// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun14906: for (var _fun14906_ip = 0;;) switch (_fun14906_ip) {
        case 0:
            var2 = exports;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.ScalarType = var0;
            var2.LongType = var0;
            var2.RepeatType = var0;
            var2.normalizeFieldInfo = var0;
            var2.readFieldOptions = var0;
            var2.readFieldOption = var0;
            var2.readMessageOption = var0;
            var8 = var2.ScalarType;
            if (var8) {
                _fun14906_ip = 115;
                continue _fun14906
            }
        case 104:
            var3 = {};
            var2.ScalarType = var3;
            var8 = var3;
        case 115:
            var6 = 1;
            var8.DOUBLE = var6;
            var3 = 'DOUBLE';
            var8[var6] = var3;
            var5 = 2;
            var8.FLOAT = var5;
            var3 = 'FLOAT';
            var8[var5] = var3;
            var4 = 3;
            var8.INT64 = var4;
            var3 = 'INT64';
            var8[var4] = var3;
            var4 = 4;
            var8.UINT64 = var4;
            var3 = 'UINT64';
            var8[var4] = var3;
            var4 = 5;
            var8.INT32 = var4;
            var3 = 'INT32';
            var8[var4] = var3;
            var4 = 6;
            var8.FIXED64 = var4;
            var3 = 'FIXED64';
            var8[var4] = var3;
            var4 = 7;
            var8.FIXED32 = var4;
            var3 = 'FIXED32';
            var8[var4] = var3;
            var4 = 8;
            var8.BOOL = var4;
            var3 = 'BOOL';
            var8[var4] = var3;
            var4 = 9;
            var8.STRING = var4;
            var3 = 'STRING';
            var8[var4] = var3;
            var7 = 12;
            var8.BYTES = var7;
            var4 = 'BYTES';
            var8[var7] = var4;
            var7 = 13;
            var8.UINT32 = var7;
            var4 = 'UINT32';
            var8[var7] = var4;
            var7 = 15;
            var8.SFIXED32 = var7;
            var4 = 'SFIXED32';
            var8[var7] = var4;
            var7 = 16;
            var8.SFIXED64 = var7;
            var4 = 'SFIXED64';
            var8[var7] = var4;
            var7 = 17;
            var8.SINT32 = var7;
            var4 = 'SINT32';
            var8[var7] = var4;
            var7 = 18;
            var8.SINT64 = var7;
            var4 = 'SINT64';
            var8[var7] = var4;
            var4 = var2.LongType;
            if (var4) {
                _fun14906_ip = 390;
                continue _fun14906
            }
        case 379:
            var7 = {};
            var2.LongType = var7;
            var4 = var7;
        case 390:
            var7 = 0;
            var4.BIGINT = var7;
            var8 = 'BIGINT';
            var4[var7] = var8;
            var4.STRING = var6;
            var4[var6] = var3;
            var4.NUMBER = var5;
            var3 = 'NUMBER';
            var4[var5] = var3;
            var4 = var2.RepeatType;
            if (var4) {
                _fun14906_ip = 450;
                continue _fun14906
            }
        case 439:
            var3 = {};
            var2.RepeatType = var3;
            var4 = var3;
        case 450:
            var _closure1_slot2 = var4;
            var4.NO = var7;
            var3 = 'NO';
            var4[var7] = var3;
            var4.PACKED = var6;
            var3 = 'PACKED';
            var4[var6] = var3;
            var4.UNPACKED = var5;
            var3 = 'UNPACKED';
            var4[var5] = var3;
            var3 = function(arg0) { // Original name: normalizeFieldInfo, environment: var1
                _fun14907: for (var _fun14907_ip = 0;;) switch (_fun14907_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.localName;
                        var2 = null;
                        if (!(var2 !== var1)) {
                            _fun14907_ip = 21;
                            continue _fun14907
                        }
                    case 15:
                        var3 = undefined;
                        if (!(var3 === var1)) {
                            _fun14907_ip = 61;
                            continue _fun14907
                        }
                    case 21:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 0;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.lowerCamelCase;
                        var3 = var0.name;
                        var1 = var4.bind(var5)(var3);
                    case 61:
                        var0.localName = var1;
                        var1 = var0.jsonName;
                        if (!(var2 !== var1)) {
                            _fun14907_ip = 83;
                            continue _fun14907
                        }
                    case 77:
                        var3 = undefined;
                        if (!(var3 === var1)) {
                            _fun14907_ip = 123;
                            continue _fun14907
                        }
                    case 83:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 0;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.lowerCamelCase;
                        var3 = var0.name;
                        var1 = var4.bind(var5)(var3);
                    case 123:
                        var0.jsonName = var1;
                        var1 = var0.repeat;
                        if (!(var2 !== var1)) {
                            _fun14907_ip = 145;
                            continue _fun14907
                        }
                    case 139:
                        var3 = undefined;
                        if (!(var3 === var1)) {
                            _fun14907_ip = 158;
                            continue _fun14907
                        }
                    case 145:
                        var3 = _closure1_slot2;
                        var1 = var3.NO;
                    case 158:
                        var0.repeat = var1;
                        var1 = var0.opt;
                        if (!(var2 !== var1)) {
                            _fun14907_ip = 180;
                            continue _fun14907
                        }
                    case 174:
                        var2 = undefined;
                        if (!(var2 === var1)) {
                            _fun14907_ip = 223;
                            continue _fun14907
                        }
                    case 180:
                        var2 = var0.repeat;
                        var2 = !var2;
                        if (!var2) {
                            _fun14907_ip = 220;
                            continue _fun14907
                        }
                    case 192:
                        var3 = var0.oneof;
                        var3 = !var3;
                        if (!var3) {
                            _fun14907_ip = 217;
                            continue _fun14907
                        }
                    case 204:
                        var5 = var0.kind;
                        var4 = 'message';
                        var3 = var4 == var5;
                    case 217:
                        var2 = var3;
                    case 220:
                        var1 = var2;
                    case 223:
                        var0.opt = var1;
                        return var0;
                }
            };
            var2.normalizeFieldInfo = var3;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: readFieldOptions, environment: var1
                _fun14908: for (var _fun14908_ip = 0;;) switch (_fun14908_ip) {
                    case 0:
                        var4 = arg2;
                        var3 = arg3;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var1 = arg0;
                        var2 = var1.fields;
                        var1 = var2.find;
                        var0 = function(arg0, arg1) { // Environment: var0
                            _fun14909: for (var _fun14909_ip = 0;;) switch (_fun14909_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.localName;
                                    var0 = _closure2_slot0;
                                    var0 = var2 == var0;
                                    if (var0) {
                                        _fun14909_ip = 34;
                                        continue _fun14909
                                    }
                                case 23:
                                    var2 = _closure2_slot0;
                                    var1 = arg1;
                                    var0 = var1 == var2;
                                case 34:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var5 = undefined;
                        var2 = null;
                        var1 = undefined;
                        if (!(var2 !== var0)) {
                            _fun14908_ip = 60;
                            continue _fun14908
                        }
                    case 49:
                        var1 = undefined;
                        if (!(var5 !== var0)) {
                            _fun14908_ip = 60;
                            continue _fun14908
                        }
                    case 55:
                        var1 = var0.options;
                    case 60:
                        var0 = undefined;
                        if (!var1) {
                            _fun14908_ip = 89;
                            continue _fun14908
                        }
                    case 65:
                        var2 = var1[var4];
                        var0 = undefined;
                        if (!var2) {
                            _fun14908_ip = 89;
                            continue _fun14908
                        }
                    case 74:
                        var2 = var3.fromJson;
                        var1 = var1[var4];
                        var0 = var2.bind(var3)(var1);
                    case 89:
                        return var0;
                }
            };
            var2.readFieldOptions = var3;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: readFieldOption, environment: var1
                _fun14910: for (var _fun14910_ip = 0;;) switch (_fun14910_ip) {
                    case 0:
                        var4 = arg3;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var1 = arg0;
                        var2 = var1.fields;
                        var1 = var2.find;
                        var0 = function(arg0, arg1) { // Environment: var0
                            _fun14911: for (var _fun14911_ip = 0;;) switch (_fun14911_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.localName;
                                    var0 = _closure2_slot0;
                                    var0 = var2 == var0;
                                    if (var0) {
                                        _fun14911_ip = 34;
                                        continue _fun14911
                                    }
                                case 23:
                                    var2 = _closure2_slot0;
                                    var1 = arg1;
                                    var0 = var1 == var2;
                                case 34:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var1 = undefined;
                        var3 = null;
                        var2 = undefined;
                        if (!(var3 !== var0)) {
                            _fun14910_ip = 57;
                            continue _fun14910
                        }
                    case 46:
                        var2 = undefined;
                        if (!(var2 !== var0)) {
                            _fun14910_ip = 57;
                            continue _fun14910
                        }
                    case 52:
                        var2 = var0.options;
                    case 57:
                        if (var2) {
                            _fun14910_ip = 62;
                            continue _fun14910
                        }
                    case 60:
                        return var1;
                    case 62:
                        var0 = arg2;
                        var3 = var2[var0];
                        var0 = var3;
                        if (!(var1 !== var0)) {
                            _fun14910_ip = 96;
                            continue _fun14910
                        }
                    case 76:
                        var1 = var3;
                        if (!var4) {
                            _fun14910_ip = 93;
                            continue _fun14910
                        }
                    case 82:
                        var2 = var4.fromJson;
                        var1 = var2.bind(var4)(var3);
                    case 93:
                        var0 = var1;
                    case 96:
                        return var0;
                }
            };
            var2.readFieldOption = var3;
            var1 = function(arg0, arg1, arg2) { // Original name: readMessageOption, environment: var1
                _fun14912: for (var _fun14912_ip = 0;;) switch (_fun14912_ip) {
                    case 0:
                        var4 = arg2;
                        var0 = arg0;
                        var1 = var0.options;
                        var0 = arg1;
                        var3 = var1[var0];
                        var1 = undefined;
                        var0 = var3;
                        if (!(var1 !== var0)) {
                            _fun14912_ip = 47;
                            continue _fun14912
                        }
                    case 27:
                        var1 = var3;
                        if (!var4) {
                            _fun14912_ip = 44;
                            continue _fun14912
                        }
                    case 33:
                        var2 = var4.fromJson;
                        var1 = var2.bind(var4)(var3);
                    case 44:
                        var0 = var1;
                    case 47:
                        return var0;
                }
            };
            var2.readMessageOption = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1327]);