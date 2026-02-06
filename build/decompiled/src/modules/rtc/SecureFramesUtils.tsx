// modules/rtc/SecureFramesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function arg0, arg1() {
        _fun66909: for (var _fun66909_ip = 0;;) switch (_fun66909_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun66909_ip = 46;
                    continue _fun66909
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun66909_ip = 55;
                    continue _fun66909
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun66909_ip = 345;
                    continue _fun66909
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun66909_ip = 323;
                    continue _fun66909
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun66909_ip = 283;
                    continue _fun66909
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun66909_ip = 270;
                    continue _fun66909
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun66909_ip = 163;
                    continue _fun66909
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun66909_ip = 179;
                    continue _fun66909
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun66909_ip = 249;
                    continue _fun66909
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun66909_ip = 249;
                    continue _fun66909
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun66909_ip = 234;
                    continue _fun66909
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun66909_ip = 247;
                    continue _fun66909
                }
            case 234:
                var8 = _closure1_slot18;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun66909_ip = 265;
                continue _fun66909;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun66909_ip = 283;
                continue _fun66909;
            case 270:
                var6 = _closure1_slot18;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun66909_ip = 323;
                    continue _fun66909
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun66909_ip = 330;
                    continue _fun66909
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun66910: for (var _fun66910_ip = 0;;) switch (_fun66910_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun66910_ip = 56;
                                continue _fun66910
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun66910_ip = 67;
                            continue _fun66910;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun66911: for (var _fun66911_ip = 0;;) switch (_fun66911_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun66911_ip = 23;
                    continue _fun66911
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun66911_ip = 33;
                    continue _fun66911
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun66911_ip = 70;
                    continue _fun66911
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun66911_ip = 55;
                    continue _fun66911
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var7 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getArticleURL;
        var0 = _closure1_slot16;
        var0 = var0.END_TO_END_ENCRYPTION;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot19 = var7;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66916: for (var _fun66916_ip = 0;;) switch (_fun66916_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66916_ip = 99;
                            continue _fun66916
                        }
                    case 7:
                        var3 = _closure1_slot5;
                        var2 = var3.getStaticAuthSessionId;
                        var4 = var2.bind(var3)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 19;
                        var2 = var5[var2];
                        var6 = undefined;
                        var5 = var3.bind(var6)(var2);
                        var2 = null;
                        var3 = var2 != var4;
                        var2 = '[getCurrentUserPublicKey] session id should not be null';
                        var2 = var5.bind(var6)(var3, var2);
                        var3 = _closure1_slot6;
                        var2 = var3.getMLSSigningKey;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var4, var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66916_ip = 96;
                            continue _fun66916
                        }
                    case 93:
                        return var1;
                    case 96:
                        return var1;
                    case 99:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 20;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.fromByteArray;
        var0 = global;
        var5 = var0.Uint8Array;
        var1 = var5.prototype;
        var4 = Object.create(var1, {
            constructor: {
                value: var5
            }
        });
        var6 = arg0;
        var7 = var4;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var2 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'data:application/octet-stream;base64,';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot22 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun66921: for (var _fun66921_ip = 0;;) switch (_fun66921_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66921_ip = 181;
                            continue _fun66921
                        }
                    case 10:
                        var4 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                    case 19: // try_start_0
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var1 = var3[var1];
                        var8 = undefined;
                        var1 = var2.bind(var8)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var10 = _closure1_slot15;
                        var9 = var10.VOICE_MATCH_PUBLIC_KEY;
                        var4 = var9.bind(var10)(var4);
                        var1.url = var4;
                        var4 = {};
                        var7 = _closure1_slot22;
                        var6 = var7.bind(var8)(var6);
                        var4.public_key = var6;
                        var4.key_version = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 116);
                    case 114:
                        return var1;
                    case 116:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66921_ip = 138;
                            continue _fun66921
                        }
                    case 122:
                        var2 = var1.body;
                        var2 = var2.is_match;
                    case 135: // try_end0
                        return var2;
                    case 138:
                        return var1;
                    case 141: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 22;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var1);
                        throw var1;
                    case 181:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66925: for (var _fun66925_ip = 0;;) switch (_fun66925_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66925_ip = 243;
                            continue _fun66925
                        }
                    case 13:
                        var4 = var2;
                        var5 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var1 = _closure1_slot20;
                        var1 = var1.bind(var5)(var2);
                        SaveGenerator(address = 38);
                    case 36:
                        return var1;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66925_ip = 240;
                            continue _fun66925
                        }
                    case 47:
                        var11 = var1.key;
                        var9 = var1.signature;
                    case 58: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 21;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.put;
                        var2 = {};
                        var10 = _closure1_slot15;
                        var8 = var10.VOICE_PUBLIC_KEYS;
                        var8 = var8.bind(var10)();
                        var2.url = var8;
                        var8 = {};
                        var10 = _closure1_slot22;
                        var11 = var10.bind(var5)(var11);
                        var8.public_key = var11;
                        var9 = var10.bind(var5)(var9);
                        var8.signature = var9;
                        var9 = var4;
                        var8.key_version = var9;
                        var2.body = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 162);
                    case 160:
                        return var2;
                    case 162:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun66925_ip = 202;
                            continue _fun66925
                        }
                    case 168:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 11;
                        var6 = var8[var6];
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.addUploadedKeyVersion;
                        var4 = var6.bind(var7)(var4);
                    case 199: // try_end0
                        return var5;
                    case 202:
                        return var2;
                    case 205: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 22;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.captureException;
                        var3 = var3.bind(var4)(var2);
                        throw var2;
                    case 240:
                        return var1;
                    case 243:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot10;
        var0 = var1.getUploadedKeyVersionsCached;
        var2 = var0.bind(var1)();
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66929: for (var _fun66929_ip = 0;;) switch (_fun66929_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66929_ip = 52;
                            continue _fun66929
                        }
                    case 10:
                        var4 = _closure1_slot27;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        if (var4) {
                            _fun66929_ip = 49;
                            continue _fun66929
                        }
                    case 27:
                        var2 = _closure1_slot25;
                        var2 = var2.bind(var1)(var3);
                        SaveGenerator(address = 40);
                    case 38:
                        return var2;
                    case 40:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun66929_ip = 49;
                            continue _fun66929
                        }
                    case 46:
                        return var2;
                    case 49:
                        return var1;
                    case 52:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66932: for (var _fun66932_ip = 0;;) switch (_fun66932_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66932_ip = 159;
                            continue _fun66932
                        }
                    case 13:
                        var1 = _closure1_slot27;
                        var6 = undefined;
                        var1 = var1.bind(var6)(var5);
                        if (var1) {
                            _fun66932_ip = 57;
                            continue _fun66932
                        }
                    case 30:
                        var1 = _closure1_slot25;
                        var1 = var1.bind(var6)(var5);
                        SaveGenerator(address = 43);
                    case 41:
                        return var1;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66932_ip = 54;
                            continue _fun66932
                        }
                    case 49:
                        var2 = true;
                        return var2;
                    case 54:
                        return var1;
                    case 57:
                        var2 = _closure1_slot5;
                        var1 = var2.getId;
                        var7 = var1.bind(var2)();
                        var1 = _closure1_slot20;
                        var1 = var1.bind(var6)(var5);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66932_ip = 156;
                            continue _fun66932
                        }
                    case 90:
                        var4 = var1.key;
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var6)(var7, var4, var5);
                        SaveGenerator(address = 110);
                    case 108:
                        return var2;
                    case 110:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66932_ip = 153;
                            continue _fun66932
                        }
                    case 116:
                        if (var2) {
                            _fun66932_ip = 150;
                            continue _fun66932
                        }
                    case 119:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 12;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.trackE2EEPublicKeyMismatch;
                        var3 = var3.bind(var4)(var5);
                    case 150:
                        return var2;
                    case 153:
                        return var2;
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var4 = function arg0, arg1() {
        _fun66933: for (var _fun66933_ip = 0;;) switch (_fun66933_ip) {
            case 0:
                var13 = arg0;
                var2 = _closure1_slot3;
                var11 = undefined;
                var1 = arg1;
                var0 = 2;
                var2 = var2.bind(var11)(var1, var0);
                var10 = 0;
                var1 = var2[var10];
                var0 = 1;
                var9 = var2[var0];
                var0 = var1.isUserConnected;
                var0 = var0.bind(var1)(var13);
                if (var0) {
                    _fun66933_ip = 55;
                    continue _fun66933
                }
            case 51:
                var0 = false;
                return var0;
            case 55:
                var0 = var1.getSecureFramesRosterMapEntry;
                var2 = var0.bind(var1)(var13);
                var8 = null;
                if (!(var8 != var2)) {
                    _fun66933_ip = 305;
                    continue _fun66933
                }
            case 75:
                var7 = global;
                var0 = var7.Uint8Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var1;
                var19 = var2;
                var0 = new var20[var0](var19, var18);
                var6 = var0 instanceof Object ? var0 : var1;
                var1 = _closure1_slot17;
                var0 = var9.getAllActiveStreamKeys;
                var0 = var0.bind(var9)();
                var5 = var1.bind(var11)(var0);
                var1 = var5.bind(var11)();
                var0 = var1.done;
                var4 = var1;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun66933_ip = 301;
                    continue _fun66933
                }
            case 149:
                var15 = var4.value;
                var0 = var9.isUserConnected;
                var0 = var0.bind(var9)(var15, var13);
                if (!var0) {
                    _fun66933_ip = 273;
                    continue _fun66933
                }
            case 169:
                var14 = _closure1_slot8;
                var0 = var14.getSecureFramesRosterMapEntry;
                var16 = var0.bind(var14)(var15, var13);
                if (!(var8 != var16)) {
                    _fun66933_ip = 297;
                    continue _fun66933
                }
            case 189:
                var0 = var7.Uint8Array;
                var14 = var0.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var14;
                var19 = var16;
                var0 = new var20[var0](var19, var18);
                var15 = var0 instanceof Object ? var0 : var14;
                var0 = var6.length;
                var0 = var10 < var0;
                var14 = 0;
                var3 = var16;
                var2 = var15;
                var1 = 0;
                if (!var0) {
                    _fun66933_ip = 273;
                    continue _fun66933
                }
            case 240:
                var17 = var6[var14];
                var0 = var15[var14];
                if (!(var17 === var0)) {
                    _fun66933_ip = 293;
                    continue _fun66933
                }
            case 252:
                var14 = var14 + 1;
                var0 = var6.length;
                var3 = var16;
                var2 = var15;
                var1 = var14;
                if (var1 < var0) {
                    _fun66933_ip = 240;
                    continue _fun66933
                }
            case 273:
                var14 = var5.bind(var11)();
                var0 = var14.done;
                var4 = var14;
                if (var0) {
                    _fun66933_ip = 301;
                    continue _fun66933
                }
            case 288:
                _fun66933_ip = 149;
                continue _fun66933;
            case 293:
                var0 = true;
                return var0;
            case 297:
                var0 = true;
                return var0;
            case 301:
                var0 = false;
                return var0;
            case 305:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var4;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.userId;
        var6 = var0.channelId;
        var8 = var0.nickname;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 12;
        var2 = var9[var0];
        var0 = undefined;
        var4 = var5.bind(var0)(var2);
        var3 = var4.trackE2EEUserVerificationFailed;
        var2 = {};
        var2.userId = var7;
        var2.channelId = var6;
        var6 = _closure1_slot12;
        var2.keyVersion = var6;
        var6 = _closure1_slot11;
        var6 = var6.OTHER_USER_INCONSISTENT_KEYS;
        var2.reason = var6;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot1;
        var1 = 23;
        var1 = var9[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var4 = 15;
        var6 = var9[var4];
        var6 = var5.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var4];
        var6 = var5.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6.mznLyR;
        var6 = var7.bind(var10)(var6);
        var1.title = var6;
        var6 = var9[var4];
        var6 = var5.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.t;
        var5 = var4.WY6IKb;
        var4 = {};
        var4.username = var8;
        var4 = var6.bind(var7)(var5, var4);
        var1.body = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot31 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.AnalyticsSecureFramesUserVerification;
    var _closure1_slot11 = var11;
    var8 = var8.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.LinkingTypes;
    var _closure1_slot13 = var11;
    var11 = var8.Routes;
    var _closure1_slot14 = var11;
    var11 = var8.Endpoints;
    var _closure1_slot15 = var11;
    var8 = var8.HelpdeskArticles;
    var _closure1_slot16 = var8;
    var8 = 25;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/rtc/SecureFramesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getSecureFramesHelpdeskArticle = var7;
    var7 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getArticleURL;
        var0 = _closure1_slot16;
        var0 = var0.END_TO_END_ENCRYPTION;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getSecureFramesPersistentCodesHelpdeskArticle = var7;
    var7 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getArticleURL;
        var0 = _closure1_slot16;
        var0 = var0.END_TO_END_ENCRYPTION;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getSecureFramesVerifiedDevicesHelpdeskArticle = var7;
    var7 = function arg0, arg1, arg2, arg3, arg4() {
        _fun66937: for (var _fun66937_ip = 0;;) switch (_fun66937_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = arg2;
                if (var2) {
                    _fun66937_ip = 51;
                    continue _fun66937
                }
            case 37:
                var2 = var3.createSecureFramesTransientKey;
                var2 = var2.bind(var3)(var4, var5);
                _fun66937_ip = 63;
                continue _fun66937;
            case 51:
                var2 = var3.createSecureFramesVerifiedKey;
                var2 = var2.bind(var3)(var4, var5);
            case 63:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.trackE2EEUserVerified;
                var1 = {};
                var5 = arg3;
                var1.channelId = var5;
                var1.userId = var4;
                var4 = arg4;
                var1.analyticsLocation = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.addVerification = var7;
    var7 = function arg0, arg1, arg2() {
        _fun66938: for (var _fun66938_ip = 0;;) switch (_fun66938_ip) {
            case 0:
                var3 = arg0;
                var1 = arg2;
                if (var1) {
                    _fun66938_ip = 47;
                    continue _fun66938
                }
            case 12:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.deleteSecureFramesTransientKey;
                var1 = var1.bind(var2)(var3);
                _fun66938_ip = 139;
                continue _fun66938;
            case 47:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var4 = undefined;
                var6 = var2.bind(var4)(var1);
                var2 = var6.serializeKey;
                var1 = global;
                var8 = var1.Uint8Array;
                var1 = var8.prototype;
                var7 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var10 = arg1;
                var11 = var7;
                var1 = new var11[var8](var10, var9);
                var1 = var1 instanceof Object ? var1 : var7;
                var2 = var2.bind(var6)(var1);
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.deleteSecureFramesVerifiedKey;
                var0 = var0.bind(var1)(var3, var2);
            case 139:
                var0 = undefined;
                return var0;
        }
    };
    var2.deleteVerification = var7;
    var7 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 14;
        var1 = var9[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openSecureFramesUpdateConfirmation;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 15;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6.hdL152;
        var6 = var7.bind(var10)(var6);
        var1.title = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5["8VGYKg"];
        var5 = var6.bind(var7)(var5);
        var1.subtitle = var5;
        var4 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 11;
            var2 = var3[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var5 = var6.deleteSecureFramesVerifiedKey;
            var4 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = var5.bind(var6)(var4, var2);
            var2 = _closure1_slot0;
            var1 = 12;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.trackE2EESettingsDeviceDelete;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deletePersistentVerification = var7;
    var7 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var1 = _closure1_slot9;
        var0 = var1.getUser;
        var6 = var0.bind(var1)(var2);
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 16;
        var1 = var9[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var1 = var3.getName;
        var12 = var1.bind(var3)(var6);
        var1 = 14;
        var1 = var9[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.openSecureFramesUpdateConfirmation;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 15;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var11 = var6.intl;
        var10 = var11.formatToPlainString;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var7 = var6.K6NGBy;
        var6 = {};
        var6.username = var12;
        var6 = var10.bind(var11)(var7, var6);
        var1.title = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.F1BQK3;
        var5 = var6.bind(var7)(var5);
        var1.subtitle = var5;
        var4 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 11;
            var2 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = var5.deleteSecureFramesUserVerifiedKeys;
            var2 = _closure2_slot0;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot0;
            var1 = 12;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.trackE2EESettingsUserDelete;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deleteUserPersistentVerifications = var7;
    var7 = function arg0() {
        _fun66943: for (var _fun66943_ip = 0;;) switch (_fun66943_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var4 = var2[var1];
                var5 = undefined;
                var6 = var3.bind(var5)(var4);
                var4 = arg0;
                var7 = var6.bind(var5)(var4);
                var1 = var2[var1];
                var1 = var3.bind(var5)(var1);
                var6 = var1.bind(var5)();
                var4 = var6.diff;
                var1 = 's';
                var4 = var4.bind(var6)(var7, var1);
                var1 = 18;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAYS_30;
                var7 = 12;
                var2 = var7 * var2;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 925;
                    continue _fun66943
                }
            case 100:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAYS_30;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 811;
                    continue _fun66943
                }
            case 136:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAY;
                var8 = 7;
                var2 = var8 * var2;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 693;
                    continue _fun66943
                }
            case 179:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAY;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 579;
                    continue _fun66943
                }
            case 215:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.HOUR;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 465;
                    continue _fun66943
                }
            case 251:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var1];
                var2 = var3.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.MINUTE;
                if (!(!(var4 > var2))) {
                    _fun66943_ip = 351;
                    continue _fun66943
                }
            case 284:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 15;
                var6 = var10[var2];
                var6 = var3.bind(var5)(var6);
                var9 = var6.intl;
                var6 = var9.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2["/w0Qpw"];
                var2 = {};
                var2.count = var4;
                var2 = var6.bind(var9)(var3, var2);
                return var2;
            case 351:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.round;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = var11[var1];
                var2 = var9.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.MINUTE;
                var2 = var4 / var2;
                var10 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 15;
                var6 = var11[var2];
                var6 = var3.bind(var5)(var6);
                var9 = var6.intl;
                var6 = var9.formatToPlainString;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.ws6rWq;
                var2 = {};
                var2.count = var10;
                var2 = var6.bind(var9)(var3, var2);
                return var2;
            case 465:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.round;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = var11[var1];
                var2 = var9.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.HOUR;
                var2 = var4 / var2;
                var10 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 15;
                var6 = var11[var2];
                var6 = var3.bind(var5)(var6);
                var9 = var6.intl;
                var6 = var9.formatToPlainString;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.KULxVS;
                var2 = {};
                var2.count = var10;
                var2 = var6.bind(var9)(var3, var2);
                return var2;
            case 579:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.round;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = var11[var1];
                var2 = var9.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAY;
                var2 = var4 / var2;
                var10 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 15;
                var6 = var11[var2];
                var6 = var3.bind(var5)(var6);
                var9 = var6.intl;
                var6 = var9.formatToPlainString;
                var2 = var11[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.LE8a2H;
                var2 = {};
                var2.count = var10;
                var2 = var6.bind(var9)(var3, var2);
                return var2;
            case 693:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.round;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = var10[var1];
                var2 = var9.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAY;
                var2 = var8 * var2;
                var2 = var4 / var2;
                var9 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 15;
                var6 = var10[var2];
                var6 = var3.bind(var5)(var6);
                var8 = var6.intl;
                var6 = var8.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2.dLurKZ;
                var2 = {};
                var2.count = var9;
                var2 = var6.bind(var8)(var3, var2);
                return var2;
            case 811:
                var2 = global;
                var6 = var2.Math;
                var3 = var6.round;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = var10[var1];
                var2 = var8.bind(var5)(var2);
                var2 = var2.Seconds;
                var2 = var2.DAYS_30;
                var2 = var4 / var2;
                var9 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 15;
                var6 = var10[var2];
                var6 = var3.bind(var5)(var6);
                var8 = var6.intl;
                var6 = var8.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2["iT+b+2"];
                var2 = {};
                var2.count = var9;
                var2 = var6.bind(var8)(var3, var2);
                return var2;
            case 925:
                var2 = global;
                var3 = var2.Math;
                var2 = var3.round;
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = var6[var1];
                var1 = var8.bind(var5)(var1);
                var1 = var1.Seconds;
                var1 = var1.DAYS_30;
                var1 = var7 * var1;
                var1 = var4 / var1;
                var4 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var0 = 15;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.F1wqkD;
                var0 = {};
                var0.count = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getSecureFramesUserVerifiedTimestamp = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot14;
        var1 = var2.FEATURE;
        var0 = _closure1_slot13;
        var0 = var0.DAVE_PROTOCOL_VERIFICATION;
        var14 = var1.bind(var2)(var0);
        var0 = global;
        var1 = var0.location;
        var8 = var1.protocol;
        var1 = var0.location;
        var15 = var1.host;
        var3 = var0.encodeURIComponent;
        var2 = undefined;
        var1 = arg1;
        var10 = var3.bind(var2)(var1);
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var18 = '';
        var16 = '//';
        var13 = '?userId=';
        var12 = arg0;
        var11 = '&fingerprint=';
        var17 = var8;
        var0 = var18[var5](var17, var16, var15, var14, var13, var12, var11, var10, var9);
        return var0;
    };
    var2.getUserVerificationDeeplink = var7;
    var7 = function arg0, arg1() {
        _fun66945: for (var _fun66945_ip = 0;;) switch (_fun66945_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = _closure1_slot11;
                var1 = var1.OTHER_USER_DISCONNECTED;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 872;
                    continue _fun66945
                }
            case 26:
                var1 = _closure1_slot11;
                var1 = var1.CURRENT_USER_DISCONNECTED;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 757;
                    continue _fun66945
                }
            case 43:
                var1 = _closure1_slot11;
                var1 = var1.UNABLE_TO_VERIFY;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 631;
                    continue _fun66945
                }
            case 60:
                var1 = _closure1_slot11;
                var1 = var1.FINGERPRINT_MISMATCH;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 505;
                    continue _fun66945
                }
            case 77:
                var1 = _closure1_slot11;
                var1 = var1.OTHER_USER_ALREADY_VERIFIED;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 379;
                    continue _fun66945
                }
            case 94:
                var1 = _closure1_slot11;
                var1 = var1.MATCH;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 253;
                    continue _fun66945
                }
            case 111:
                var1 = _closure1_slot11;
                var1 = var1.OTHER_USER_INCONSISTENT_KEYS;
                if (!(var1 !== var2)) {
                    _fun66945_ip = 129;
                    continue _fun66945
                }
            case 125:
                var1 = undefined;
                return var1;
            case 129:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.im1uUi;
                var4 = var4.bind(var6)(var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = var8[var2];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.format;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.WY6IKb;
                var2 = {};
                var2.username = var5;
                var2 = var4.bind(var6)(var3, var2);
                var1[1] = var2;
                return var1;
            case 253:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["xyE+Dn"];
                var4 = var4.bind(var6)(var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = var8[var2];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.format;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.znsPl5;
                var2 = {};
                var2.username = var5;
                var2 = var4.bind(var6)(var3, var2);
                var1[1] = var2;
                return var1;
            case 379:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["9lw+J+"];
                var4 = var4.bind(var6)(var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = var8[var2];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.format;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.TvBS1w;
                var2 = {};
                var2.username = var5;
                var2 = var4.bind(var6)(var3, var2);
                var1[1] = var2;
                return var1;
            case 505:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.HTJ76H;
                var4 = var4.bind(var6)(var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = var8[var2];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.format;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.tc6aAc;
                var2 = {};
                var2.username = var5;
                var2 = var4.bind(var6)(var3, var2);
                var1[1] = var2;
                return var1;
            case 631:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var8[var2];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["+no/arg7"];
                var4 = var4.bind(var6)(var1);
                var1 = new Array(2);
                var1[0] = var4;
                var4 = var8[var2];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.format;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.Mft7iJ;
                var2 = {};
                var2.username = var5;
                var2 = var4.bind(var6)(var3, var2);
                var1[1] = var2;
                return var1;
            case 757:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 15;
                var1 = var8[var2];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var4 = var1.intl;
                var3 = var4.string;
                var1 = var8[var2];
                var1 = var7.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1["5ICxE6"];
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = var8[var2];
                var3 = var7.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["v1eXp/"];
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            case 872:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var0 = var7[var1];
                var2 = undefined;
                var0 = var6.bind(var2)(var0);
                var4 = var0.intl;
                var3 = var4.string;
                var0 = var7[var1];
                var0 = var6.bind(var2)(var0);
                var0 = var0.t;
                var0 = var0.ZBHDM9;
                var3 = var3.bind(var4)(var0);
                var0 = new Array(2);
                var0[0] = var3;
                var3 = var7[var1];
                var3 = var6.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["+rIdOd"];
                var1 = {};
                var1.username = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0[1] = var1;
                return var0;
        }
    };
    var2.getUserVerifyStateText = var7;
    var7 = function arg0() {
        _fun66946: for (var _fun66946_ip = 0;;) switch (_fun66946_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.isCurrentUserKeyPersistent;
                var0 = var1.isOtherUserKeyPersistent;
                var7 = var1.otherUserNickname;
                if (!var2) {
                    _fun66946_ip = 30;
                    continue _fun66946
                }
            case 24:
                if (var0) {
                    _fun66946_ip = 182;
                    continue _fun66946
                }
            case 30:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 15;
                var3 = var9[var1];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                if (var2) {
                    _fun66946_ip = 147;
                    continue _fun66946
                }
            case 82:
                if (var0) {
                    _fun66946_ip = 116;
                    continue _fun66946
                }
            case 85:
                var2 = var1["6JLy+i"];
                var0 = {};
                var8 = _closure1_slot19;
                var8 = var8.bind(var6)();
                var0.helpArticle = var8;
                var0 = var3.bind(var4)(var2, var0);
                _fun66946_ip = 145;
                continue _fun66946;
            case 116:
                var8 = var1.qT5z87;
                var2 = {};
                var9 = _closure1_slot19;
                var9 = var9.bind(var6)();
                var2.helpArticle = var9;
                var0 = var3.bind(var4)(var8, var2);
            case 145:
                _fun66946_ip = 180;
                continue _fun66946;
            case 147:
                var2 = var1["p/9PGp"];
                var1 = {};
                var1.username = var7;
                var5 = _closure1_slot19;
                var5 = var5.bind(var6)();
                var1.helpArticle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 180:
                _fun66946_ip = 260;
                continue _fun66946;
            case 182:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 15;
                var3 = var7[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1["FJN+kh"];
                var1 = {};
                var5 = _closure1_slot19;
                var5 = var5.bind(var6)();
                var1.helpArticle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 260:
                return var0;
        }
    };
    var2.getUserVerificationFooterText = var7;
    var2.getCurrentUserSigningKey = var6;
    var2.isPublicKeyMatch = var5;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.ensureCurrentUserPublicKey = var5;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.isCurrentUserPublicKeyMatch = var5;
    var2.getIsSecureFramesKeyInconsistent = var4;
    var2.showSecureFramesKeyInconsistentAlert = var3;
    var1 = function arg0() {
        _fun66949: for (var _fun66949_ip = 0;;) switch (_fun66949_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var7 = var0.guildId;
                var6 = var0.channelId;
                var1 = _closure1_slot30;
                var2 = _closure1_slot7;
                var0 = new Array(2);
                var0[0] = var2;
                var2 = _closure1_slot8;
                var0[1] = var2;
                var2 = undefined;
                var0 = var1.bind(var2)(var4, var0);
                if (var0) {
                    _fun66949_ip = 60;
                    continue _fun66949
                }
            case 56:
                var0 = true;
                return var0;
            case 60:
                var1 = _closure1_slot9;
                var0 = var1.getUser;
                var5 = var0.bind(var1)(var4);
                var1 = _closure1_slot31;
                var0 = {};
                var0.userId = var4;
                var0.channelId = var6;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 24;
                var3 = var8[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.getName;
                var3 = var3.bind(var4)(var7, var6, var5);
                var0.nickname = var3;
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
        }
    };
    var2.validateSecureFramesKeyConsistent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 1216, 3478, 3520, 3611, 1621, 3515, 8291, 660, 1684, 8292, 8298, 8275, 8293, 1234, 3238, 3047, 667, 44, 206, 507, 1207, 4003, 3961, 2]);