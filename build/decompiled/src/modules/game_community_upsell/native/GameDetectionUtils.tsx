// modules/game_community_upsell/native/GameDetectionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun86926: for (var _fun86926_ip = 0;;) switch (_fun86926_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun86926_ip = 46;
                    continue _fun86926
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun86926_ip = 55;
                    continue _fun86926
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun86926_ip = 345;
                    continue _fun86926
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun86926_ip = 323;
                    continue _fun86926
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun86926_ip = 283;
                    continue _fun86926
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun86926_ip = 270;
                    continue _fun86926
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
                    _fun86926_ip = 163;
                    continue _fun86926
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun86926_ip = 179;
                    continue _fun86926
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun86926_ip = 249;
                    continue _fun86926
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun86926_ip = 249;
                    continue _fun86926
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun86926_ip = 234;
                    continue _fun86926
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun86926_ip = 247;
                    continue _fun86926
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun86926_ip = 265;
                continue _fun86926;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun86926_ip = 283;
                continue _fun86926;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun86926_ip = 323;
                    continue _fun86926
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
                    _fun86926_ip = 330;
                    continue _fun86926
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun86927: for (var _fun86927_ip = 0;;) switch (_fun86927_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun86927_ip = 56;
                                continue _fun86927
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
                            _fun86927_ip = 67;
                            continue _fun86927;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun86928: for (var _fun86928_ip = 0;;) switch (_fun86928_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun86928_ip = 23;
                    continue _fun86928
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun86928_ip = 33;
                    continue _fun86928
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
                    _fun86928_ip = 70;
                    continue _fun86928
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun86928_ip = 55;
                    continue _fun86928
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun86932: for (var _fun86932_ip = 0;;) switch (_fun86932_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86932_ip = 288;
                            continue _fun86932
                        }
                    case 10:
                        var5 = arg0;
                        var6 = _closure1_slot4;
                        var2 = var6.hasConsented;
                        var1 = _closure1_slot8;
                        var1 = var1.PERSONALIZATION;
                        var1 = var2.bind(var6)(var1);
                        if (var1) {
                            _fun86932_ip = 61;
                            continue _fun86932
                        }
                    case 44:
                        var1 = {
                            'isInstalled': false,
                            'error': 'Personalization consent not granted'
                        };
                        return var1;
                    case 61: // try_start_0
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 6;
                        var1 = var6[var1];
                        var7 = undefined;
                        var6 = var2.bind(var7)(var1);
                        var2 = var6.canOpenUrlScheme;
                        var1 = var5;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 101);
                    case 99:
                        return var1;
                    case 101:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86932_ip = 179;
                            continue _fun86932
                        }
                    case 107:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 7;
                        var2 = var8[var2];
                        var8 = var6.bind(var7)(var2);
                        var7 = var8.track;
                        var2 = _closure1_slot7;
                        var6 = var2.CAN_OPEN_URL_REQUESTED;
                        var2 = {};
                        var9 = var5;
                        var2.scheme = var9;
                        var2.result = var1;
                        var2 = var7.bind(var8)(var6, var2);
                        var2 = {};
                        var2.isInstalled = var1;
                        var6 = null;
                        var2.error = var6;
                    case 176: // try_end0
                        return var2;
                    case 179:
                        return var1;
                    case 182: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var4 = var6;
                        var1 = global;
                        var2 = var1.Error;
                        var2 = var6 instanceof var2;
                        if (var2) {
                            _fun86932_ip = 220;
                            continue _fun86932
                        }
                    case 202:
                        var7 = var1.String;
                        var6 = var4;
                        var2 = undefined;
                        var2 = var7.bind(var2)(var6);
                        _fun86932_ip = 225;
                        continue _fun86932;
                    case 220:
                        var2 = var4.message;
                    case 225:
                        var4 = _closure1_slot9;
                        var3 = var4.warn;
                        var7 = var5;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var5 = 'Error checking URL scheme: ';
                        var1 = ' - Error: ';
                        var1 = var6.bind(var5)(var7, var1, var2);
                        var1 = var3.bind(var4)(var1);
                        var1 = {};
                        var3 = false;
                        var1.isInstalled = var3;
                        var1.error = var2;
                        return var1;
                    case 288:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun86935: for (var _fun86935_ip = 0;;) switch (_fun86935_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86935_ip = 127;
                            continue _fun86935
                        }
                    case 7:
                        var1 = new Array(0);
                        var3 = _closure1_slot12;
                        var6 = undefined;
                        var2 = arg0;
                        var5 = var3.bind(var6)(var2);
                        var3 = var5.bind(var6)();
                        var2 = var3.done;
                        var4 = var3;
                        if (var2) {
                            _fun86935_ip = 124;
                            continue _fun86935
                        }
                    case 43:
                        var11 = var4.value;
                        var2 = _closure1_slot14;
                        var2 = var2.bind(var6)(var11);
                        SaveGenerator(address = 61);
                    case 59:
                        return var2;
                    case 61:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun86935_ip = 121;
                            continue _fun86935
                        }
                    case 67:
                        var10 = var2.isInstalled;
                        var9 = var2.error;
                        var8 = var1.push;
                        var3 = {};
                        var3.scheme = var11;
                        var3.isInstalled = var10;
                        var3.error = var9;
                        var3 = var8.bind(var1)(var3);
                        var8 = var5.bind(var6)();
                        var3 = var8.done;
                        var4 = var8;
                        if (var3) {
                            _fun86935_ip = 124;
                            continue _fun86935
                        }
                    case 119:
                        _fun86935_ip = 43;
                        continue _fun86935;
                    case 121:
                        return var2;
                    case 124:
                        return var1;
                    case 127:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun86938: for (var _fun86938_ip = 0;;) switch (_fun86938_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86938_ip = 201;
                            continue _fun86938
                        }
                    case 15:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.isAndroid;
                        var2 = var2.bind(var4)();
                        if (var2) {
                            _fun86938_ip = 117;
                            continue _fun86938
                        }
                    case 53:
                        var4 = var6.iosUrlSchemes;
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot16;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var4);
                        SaveGenerator(address = 75);
                    case 73:
                        return var2;
                    case 75:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun86938_ip = 114;
                            continue _fun86938
                        }
                    case 81:
                        var4 = {};
                        var7 = var2.some;
                        var5 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var0 = var0.isInstalled;
                            return var0;
                        };
                        var5 = var7.bind(var2)(var5);
                        var4.isInstalled = var5;
                        var4.schemeResults = var2;
                        return var4;
                    case 114:
                        return var2;
                    case 117:
                        var2 = _closure1_slot14;
                        var1 = var6.androidPackageName;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 136);
                    case 134:
                        return var1;
                    case 136:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86938_ip = 198;
                            continue _fun86938
                        }
                    case 142:
                        var5 = var1.isInstalled;
                        var3 = var1.error;
                        var2 = {};
                        var2.isInstalled = var5;
                        var4 = {};
                        var6 = var6.androidPackageName;
                        var4.scheme = var6;
                        var4.isInstalled = var5;
                        var4.error = var3;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var2.schemeResults = var3;
                        return var2;
                    case 198:
                        return var1;
                    case 201:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86944: for (var _fun86944_ip = 0;;) switch (_fun86944_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86944_ip = 96;
                            continue _fun86944
                        }
                    case 7:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.SUPPORTED_GAMES;
                        var2 = var3.map;
                        var1 = function() { // Environment: var1
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun86947: for (var _fun86947_ip = 0;;) switch (_fun86947_ip) {
                                        case 0:
                                            StartGenerator();
                                            var4 = arg0;
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun86947_ip = 111;
                                                continue _fun86947
                                            }
                                        case 10:
                                            var2 = _closure1_slot6;
                                            var1 = var2.isDebugMode;
                                            var3 = var1.bind(var2)();
                                            if (!var3) {
                                                _fun86947_ip = 36;
                                                continue _fun86947
                                            }
                                        case 30:
                                            var3 = var4.overrideInstall;
                                        case 36:
                                            var2 = function() {
                                                var0 = undefined;
                                                var3 = _closure1_slot17;
                                                var2 = var3.apply;
                                                var0 = arguments;
                                                var1 = var0;
                                                var0 = this;
                                                var0 = var2.bind(var3)(var0, var1);
                                                return var0;
                                            };
                                            var1 = undefined;
                                            var1 = var2.bind(var1)(var4);
                                            SaveGenerator(address = 56);
                                        case 54:
                                            return var1;
                                        case 56:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun86947_ip = 108;
                                                continue _fun86947
                                            }
                                        case 62:
                                            var5 = var1.isInstalled;
                                            var2 = {};
                                            var2.game = var4;
                                            var4 = var3;
                                            if (var4) {
                                                _fun86947_ip = 84;
                                                continue _fun86947
                                            }
                                        case 81:
                                            var4 = var5;
                                        case 84:
                                            var2.isInstalled = var4;
                                            var2.overridden = var3;
                                            var3 = var1.schemeResults;
                                            var2.schemeResults = var3;
                                            return var2;
                                        case 108:
                                            return var1;
                                        case 111:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = var1.bind(var4)();
                        var3 = var2.bind(var3)(var1);
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.all;
                        var1 = var1.bind(var2)(var3);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86944_ip = 93;
                            continue _fun86944
                        }
                    case 90:
                        return var1;
                    case 93:
                        return var1;
                    case 96:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86953: for (var _fun86953_ip = 0;;) switch (_fun86953_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86953_ip = 185;
                            continue _fun86953
                        }
                    case 12:
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var4 = var1.bind(var2)();
                        var2 = _closure1_slot10;
                        var5 = null;
                        if (!(var5 !== var2)) {
                            _fun86953_ip = 68;
                            continue _fun86953
                        }
                    case 42:
                        var2 = _closure1_slot11;
                        if (!(var5 !== var2)) {
                            _fun86953_ip = 68;
                            continue _fun86953
                        }
                    case 50:
                        var2 = _closure1_slot11;
                        var5 = var4 - var2;
                        var2 = 3600000;
                        if (!(!(var5 < var2))) {
                            _fun86953_ip = 157;
                            continue _fun86953
                        }
                    case 68:
                        var6 = _closure1_slot9;
                        var5 = var6.info;
                        var2 = 'detectInstalledGames: Cache not valid, calling detectInstalledGamesWithDiagnostics';
                        var2 = var5.bind(var6)(var2);
                        var5 = _closure1_slot18;
                        var2 = undefined;
                        var2 = var5.bind(var2)();
                        SaveGenerator(address = 103);
                    case 101:
                        return var2;
                    case 103:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86953_ip = 154;
                            continue _fun86953
                        }
                    case 109:
                        var6 = var2.filter;
                        var5 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.isInstalled;
                            return var0;
                        };
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.map;
                        var3 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.game;
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                        _closure1_slot10 = var3;
                        _closure1_slot11 = var4;
                        return var3;
                    case 154:
                        return var2;
                    case 157:
                        var4 = _closure1_slot9;
                        var3 = var4.info;
                        var2 = 'detectInstalledGames: Cache hit';
                        var2 = var3.bind(var4)(var2);
                        var1 = _closure1_slot10;
                        return var1;
                    case 185:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86958: for (var _fun86958_ip = 0;;) switch (_fun86958_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86958_ip = 136;
                            continue _fun86958
                        }
                    case 12:
                        var3 = _closure1_slot20;
                        var1 = undefined;
                        var1 = var3.bind(var1)();
                        SaveGenerator(address = 29);
                    case 27:
                        return var1;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun86958_ip = 133;
                            continue _fun86958
                        }
                    case 35:
                        var4 = var1.filter;
                        var3 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot5;
                            var1 = var2.isMember;
                            var0 = arg0;
                            var0 = var0.guildId;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.filter;
                        var2 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot6;
                            var1 = var2.hasShownGame;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var4 = var3.bind(var4)(var2);
                        var5 = var4.length;
                        var3 = 0;
                        var2 = null;
                        if (!(var3 !== var5)) {
                            _fun86958_ip = 130;
                            continue _fun86958
                        }
                    case 82:
                        var3 = global;
                        var6 = var3.Math;
                        var5 = var6.floor;
                        var7 = var3.Math;
                        var3 = var7.random;
                        var7 = var3.bind(var7)();
                        var3 = var4.length;
                        var3 = var7 * var3;
                        var3 = var5.bind(var6)(var3);
                        var2 = var4[var3];
                    case 130:
                        return var2;
                    case 133:
                        return var1;
                    case 136:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.AnalyticEvents;
    var _closure1_slot7 = var10;
    var6 = var6.Consents;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var9.bind(var0)(var6);
    var6 = var10.prototype;
    var9 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var14 = 'GameDetectionUtils';
    var15 = var9;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot9 = var6;
    var6 = null;
    var _closure1_slot10 = var6;
    var _closure1_slot11 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_community_upsell/native/GameDetectionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function() {
        var0 = null;
        _closure1_slot10 = var0;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var2.invalidateInstalledGamesCache = var6;
    var2.isGameInstalled = var5;
    var2.detectInstalledGamesWithDiagnostics = var4;
    var2.detectInstalledGames = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getTopPriorityGame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4559, 1374, 11227, 660, 3, 3621, 795, 478, 11229, 2]);