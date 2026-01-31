// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun10209: for (var _fun10209_ip = 0;;) switch (_fun10209_ip) {
        case 0:
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var6 = this;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var8;
            var4 = function() { // Original name: getRNSentryModule, environment: var1
                _fun10210: for (var _fun10210_ip = 0;;) switch (_fun10210_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 2;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var0);
                        var0 = var3.isTurboModuleEnabled;
                        var0 = var0.bind(var3)();
                        if (var0) {
                            _fun10210_ip = 50;
                            continue _fun10210
                        }
                    case 38:
                        var0 = _closure1_slot3;
                        var0 = var0.RNSentry;
                        _fun10210_ip = 113;
                        continue _fun10210;
                    case 50:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 3;
                        var1 = var4[var1];
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.ReactNativeLibraries;
                        var4 = var1.TurboModuleRegistry;
                        var3 = null;
                        var1 = undefined;
                        if (!(var3 !== var4)) {
                            _fun10210_ip = 110;
                            continue _fun10210
                        }
                    case 90:
                        var1 = undefined;
                        if (!(var1 !== var4)) {
                            _fun10210_ip = 110;
                            continue _fun10210
                        }
                    case 96:
                        var3 = var4.get;
                        var2 = 'RNSentry';
                        var1 = var3.bind(var4)(var2);
                    case 110:
                        var0 = var1;
                    case 113:
                        return var0;
                }
            };
            var0 = global;
            var10 = var0.Object;
            var9 = var10.defineProperty;
            var3 = {};
            var5 = true;
            var3.value = var5;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var3);
            var0 = 0;
            var9 = var8[var0];
            var3 = arg2;
            var0 = undefined;
            var3 = var3.bind(var0)(var9);
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var8[var3];
            var3 = var7.bind(var0)(var3);
            var9 = var3.NativeModules;
            var _closure1_slot3 = var9;
            var3 = var3.Platform;
            var3 = var6;
            if (!var6) {
                _fun10209_ip = 119;
                continue _fun10209
            }
        case 113:
            var3 = var6.__awaiter;
        case 119:
            if (var3) {
                _fun10209_ip = 127;
                continue _fun10209
            }
        case 122:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun10211: for (var _fun10211_ip = 0;;) switch (_fun10211_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun10211_ip = 48;
                            continue _fun10211
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun10212: for (var _fun10212_ip = 0;;) switch (_fun10212_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun10213: for (var _fun10213_ip = 0;;) switch (_fun10213_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun10213_ip = 52;
                                                continue _fun10213;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun10214: for (var _fun10214_ip = 0;;) switch (_fun10214_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun10214_ip = 53;
                                                continue _fun10214;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun10215: for (var _fun10215_ip = 0;;) switch (_fun10215_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun10215_ip = 54;
                                                    continue _fun10215
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun10216: for (var _fun10216_ip = 0;;) switch (_fun10216_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun10216_ip = 52;
                                                                continue _fun10216
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun10215_ip = 73;
                                                continue _fun10215;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun10212_ip = 70;
                                        continue _fun10212
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 127:
            var _closure1_slot4 = var3;
            var3 = var6;
            if (!var3) {
                _fun10209_ip = 143;
                continue _fun10209
            }
        case 137:
            var3 = var6.__rest;
        case 143:
            if (var3) {
                _fun10209_ip = 151;
                continue _fun10209
            }
        case 146:
            var3 = function(arg0, arg1) { // Environment: var1
                _fun10218: for (var _fun10218_ip = 0;;) switch (_fun10218_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = {};
                        var8 = var7;
                        var5 = 0;
                        var4 = global;
                        for (var1 in var8)
                            case 23: {
                                case 32: var11 = var1;
                                var10 = var4.Object;
                                var10 = var10.prototype;
                                var12 = var10.hasOwnProperty;
                                var10 = var12.call;
                                var10 = var10.bind(var12)(var7, var11);
                                if (!var10) {
                                    _fun10218_ip = 81;
                                    continue _fun10218
                                }
                                case 66: var12 = var6.indexOf;
                                var12 = var12.bind(var6)(var11);
                                var10 = var12 < var5;
                                case 81: if (!var10) {
                                    _fun10218_ip = 23;
                                    continue _fun10218
                                }
                                case 84: var10 = var7[var11];
                                var0[var11] = var10;
                                _fun10218_ip = 23;
                                continue _fun10218;
                            }
                    case 94:
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun10218_ip = 242;
                            continue _fun10218
                        }
                    case 103:
                        var1 = var4.Object;
                        var1 = var1.getOwnPropertySymbols;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun10218_ip = 242;
                            continue _fun10218
                        }
                    case 126:
                        var2 = var4.Object;
                        var1 = var2.getOwnPropertySymbols;
                        var3 = var1.bind(var2)(var7);
                        var1 = var3.length;
                        var1 = var5 < var1;
                        var2 = 0;
                        if (!var1) {
                            _fun10218_ip = 242;
                            continue _fun10218
                        }
                    case 157:
                        var8 = var6.indexOf;
                        var1 = var3[var2];
                        var1 = var8.bind(var6)(var1);
                        var1 = var1 < var5;
                        if (!var1) {
                            _fun10218_ip = 211;
                            continue _fun10218
                        }
                    case 179:
                        var8 = var4.Object;
                        var8 = var8.prototype;
                        var10 = var8.propertyIsEnumerable;
                        var9 = var10.call;
                        var8 = var3[var2];
                        var1 = var9.bind(var10)(var7, var8);
                    case 211:
                        if (!var1) {
                            _fun10218_ip = 230;
                            continue _fun10218
                        }
                    case 214:
                        var8 = var3[var2];
                        var1 = var3[var2];
                        var1 = var7[var1];
                        var0[var8] = var1;
                    case 230:
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun10218_ip = 157;
                            continue _fun10218
                        }
                    case 242:
                        return var0;
                }
            };
        case 151:
            var _closure1_slot5 = var3;
            var3 = var4.bind(var0)();
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var8[var3];
            var9 = var7.bind(var0)(var3);
            var6 = var9.encodeUTF8;
            var3 = '\n';
            var3 = var6.bind(var9)(var3);
            var _closure1_slot7 = var3;
            var3 = {};
            var6 = function() { // Original name: fetchModules, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10221: for (var _fun10221_ip = 0;;) switch (_fun10221_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10221_ip = 110;
                                    continue _fun10221
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10221_ip = 27;
                                    continue _fun10221
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10221_ip = 56;
                                    continue _fun10221
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchModules;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 74);
                            case 72:
                                return var1;
                            case 74:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun10221_ip = 107;
                                    continue _fun10221
                                }
                            case 80:
                                var2 = null;
                                if (!var1) {
                                    _fun10221_ip = 104;
                                    continue _fun10221
                                }
                            case 85:
                                var3 = global;
                                var4 = var3.JSON;
                                var3 = var4.parse;
                                var2 = var3.bind(var4)(var1);
                            case 104:
                                return var2;
                            case 107:
                                return var1;
                            case 110:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchModules = var6;
            var6 = function(arg0) { // Original name: sendEnvelope, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10224: for (var _fun10224_ip = 0;;) switch (_fun10224_ip) {
                            case 0:
                                StartGenerator();
                                var21 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun10224_ip = 919;
                                    continue _fun10224
                                }
                            case 13:
                                var2 = undefined;
                                var1 = undefined;
                                var6 = undefined;
                                var17 = undefined;
                                var18 = undefined;
                                var19 = undefined;
                                var20 = undefined;
                                var4 = var21.enableNative;
                                if (var4) {
                                    _fun10224_ip = 86;
                                    continue _fun10224
                                }
                            case 39:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var4 = 5;
                                var4 = var7[var4];
                                var4 = var5.bind(var2)(var4);
                                var7 = var4.debug;
                                var5 = var7.warn;
                                var4 = 'Event was skipped as native SDK is not enabled.';
                                var4 = var5.bind(var7)(var4);
                                _fun10224_ip = 913;
                                continue _fun10224;
                            case 86:
                                var5 = var21._isModuleLoaded;
                                var4 = _closure1_slot6;
                                var4 = var5.bind(var21)(var4);
                                if (var4) {
                                    _fun10224_ip = 112;
                                    continue _fun10224
                                }
                            case 104:
                                var4 = var21._NativeClientError;
                                throw var4;
                            case 112:
                                var5 = _closure1_slot2;
                                var4 = _closure2_slot0;
                                var16 = 2;
                                var4 = var5.bind(var2)(var4, var16);
                                var15 = 0;
                                var8 = var4[var15];
                                var14 = 1;
                                var4 = var4[var14];
                                var13 = global;
                                var7 = var13.JSON;
                                var5 = var7.stringify;
                                var8 = var5.bind(var7)(var8);
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var12 = 4;
                                var5 = var5[var12];
                                var7 = var7.bind(var2)(var5);
                                var5 = var7.encodeUTF8;
                                var5 = var5.bind(var7)(var8);
                                var9 = var13.Uint8Array;
                                var8 = var5.length;
                                var7 = _closure1_slot7;
                                var7 = var7.length;
                                var31 = var8 + var7;
                                var8 = var9.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var9
                                    }
                                });
                                var32 = var8;
                                var7 = new var32[var9](var31, var30);
                                var9 = var7 instanceof Object ? var7 : var8;
                                var1 = var9;
                                var7 = var9.set;
                                var7 = var7.bind(var9)(var5);
                                var8 = var9.set;
                                var7 = _closure1_slot7;
                                var5 = var5.length;
                                var5 = var8.bind(var9)(var7, var5);
                                var6 = false;
                                var11 = var4;
                                var5 = var11[Symbol.iterator];
                                var11 = var5().next;
                                var10 = 'text/plain';
                                var9 = 'application/octet-stream';
                                var8 = 'string';
                                var7 = 6;
                                var4 = 'application/vnd.sentry.items.log+json';
                            case 305:
                                var23 = var11().value;
                                var22 = var5;
                                if (!(var22 !== var2)) {
                                    _fun10224_ip = 849;
                                    continue _fun10224
                                }
                            case 319: // try_start_0
                                var22 = var21._processItem;
                                var23 = var22.bind(var21)(var23);
                                var22 = _closure1_slot2;
                                var22 = var22.bind(var2)(var23, var16);
                                var17 = var22[var15];
                                var22 = var22[var14];
                                var18 = var22;
                                var19 = undefined;
                                var20 = undefined;
                                var22 = typeof var22;
                                if (!(var8 !== var22)) {
                                    _fun10224_ip = 507;
                                    continue _fun10224
                                }
                            case 365:
                                var23 = var18;
                                var22 = var13.Uint8Array;
                                var22 = var23 instanceof var22;
                                if (var22) {
                                    _fun10224_ip = 471;
                                    continue _fun10224
                                }
                            case 381:
                                var19 = var4;
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var12];
                                var24 = var23.bind(var2)(var22);
                                var23 = var24.encodeUTF8;
                                var26 = var13.JSON;
                                var25 = var26.stringify;
                                var22 = var18;
                                var22 = var25.bind(var26)(var22);
                                var20 = var23.bind(var24)(var22);
                                var22 = var6;
                                if (var22) {
                                    _fun10224_ip = 541;
                                    continue _fun10224
                                }
                            case 438:
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var7];
                                var24 = var23.bind(var2)(var22);
                                var23 = var24.isHardCrash;
                                var22 = var18;
                                var6 = var23.bind(var24)(var22);
                                _fun10224_ip = 541;
                                continue _fun10224;
                            case 471:
                                var22 = var17;
                                var22 = var22.content_type;
                                var23 = typeof var22;
                                var22 = var9;
                                if (!(var8 === var23)) {
                                    _fun10224_ip = 499;
                                    continue _fun10224
                                }
                            case 490:
                                var23 = var17;
                                var22 = var23.content_type;
                            case 499:
                                var19 = var22;
                                var20 = var18;
                                _fun10224_ip = 541;
                                continue _fun10224;
                            case 507:
                                var19 = var10;
                                var23 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var12];
                                var24 = var23.bind(var2)(var22);
                                var23 = var24.encodeUTF8;
                                var22 = var18;
                                var20 = var23.bind(var24)(var22);
                            case 541:
                                var25 = var17;
                                var22 = var19;
                                var25.content_type = var22;
                                var23 = var20;
                                var22 = var23.length;
                                var25.length = var22;
                                var24 = var13.JSON;
                                var22 = var24.stringify;
                                var25 = var22.bind(var24)(var25);
                                var24 = _closure1_slot0;
                                var22 = _closure1_slot1;
                                var22 = var22[var12];
                                var24 = var24.bind(var2)(var22);
                                var22 = var24.encodeUTF8;
                                var26 = var22.bind(var24)(var25);
                                var25 = var13.Uint8Array;
                                var27 = var1;
                                var24 = var27.length;
                                var22 = var26.length;
                                var24 = var24 + var22;
                                var22 = _closure1_slot7;
                                var22 = var22.length;
                                var24 = var24 + var22;
                                var22 = var23.length;
                                var24 = var24 + var22;
                                var22 = _closure1_slot7;
                                var22 = var22.length;
                                var31 = var24 + var22;
                                var24 = var25.prototype;
                                var24 = Object.create(var24, {
                                    constructor: {
                                        value: var25
                                    }
                                });
                                var32 = var24;
                                var22 = new var32[var25](var31, var30);
                                var22 = var22 instanceof Object ? var22 : var24;
                                var24 = var22.set;
                                var24 = var24.bind(var22)(var27);
                                var25 = var22.set;
                                var24 = var27.length;
                                var24 = var25.bind(var22)(var26, var24);
                                var28 = var22.set;
                                var25 = _closure1_slot7;
                                var29 = var27.length;
                                var24 = var26.length;
                                var24 = var29 + var24;
                                var24 = var28.bind(var22)(var25, var24);
                                var25 = var22.set;
                                var28 = var27.length;
                                var24 = var26.length;
                                var28 = var28 + var24;
                                var24 = _closure1_slot7;
                                var24 = var24.length;
                                var24 = var28 + var24;
                                var24 = var25.bind(var22)(var23, var24);
                                var25 = var22.set;
                                var24 = _closure1_slot7;
                                var27 = var27.length;
                                var26 = var26.length;
                                var27 = var27 + var26;
                                var26 = _closure1_slot7;
                                var26 = var26.length;
                                var26 = var27 + var26;
                                var23 = var23.length;
                                var23 = var26 + var23;
                                var23 = var25.bind(var22)(var24, var23);
                                var1 = var22;
                            case 837: // try_end0
                                _fun10224_ip = 305;
                                continue _fun10224;
                            case 842: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var5.return();
                                throw var4;
                            case 849:
                                var5 = _closure1_slot6;
                                var4 = var5.captureEnvelope;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var3 = 7;
                                var3 = var8[var3];
                                var7 = var7.bind(var2)(var3);
                                var3 = var7.base64StringFromByteArray;
                                var3 = var3.bind(var7)(var1);
                                var1 = {};
                                var1.hardCrashed = var6;
                                var1 = var4.bind(var5)(var3, var1);
                                SaveGenerator(address = 907);
                            case 905:
                                return var1;
                            case 907:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun10224_ip = 916;
                                    continue _fun10224
                                }
                            case 913:
                                return var2;
                            case 916:
                                return var1;
                            case 919:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.sendEnvelope = var6;
            var6 = function(arg0) { // Original name: initNativeSdk, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10227: for (var _fun10227_ip = 0;;) switch (_fun10227_ip) {
                            case 0:
                                StartGenerator();
                                var3 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10227_ip = 624;
                                    continue _fun10227
                                }
                            case 15:
                                var1 = global;
                                var6 = var1.Object;
                                var5 = var6.assign;
                                var10 = var1.Object;
                                var7 = var10.assign;
                                var2 = true;
                                var1 = _closure2_slot0;
                                var4 = {
                                    'enableNative': true,
                                    'autoInitializeNativeSdk': true
                                };
                                var4 = var7.bind(var10)(var4, var1);
                                var1 = var1.enableLogs;
                                var7 = undefined;
                                if (!(var7 === var1)) {
                                    _fun10227_ip = 80;
                                    continue _fun10227
                                }
                            case 76:
                                var1 = {};
                                _fun10227_ip = 121;
                                continue _fun10227;
                            case 80:
                                var10 = {};
                                var11 = _closure2_slot0;
                                var11 = var11.enableLogs;
                                if (!var11) {
                                    _fun10227_ip = 113;
                                    continue _fun10227
                                }
                            case 95:
                                var12 = _closure2_slot0;
                                var13 = var12.logsOrigin;
                                var12 = 'js';
                                var11 = var12 !== var13;
                            case 113:
                                var10.enableLogs = var11;
                                var1 = var10;
                            case 121:
                                var6 = var5.bind(var6)(var4, var1);
                                var1 = var6.enableNative;
                                if (var1) {
                                    _fun10227_ip = 201;
                                    continue _fun10227
                                }
                            case 136:
                                var1 = var6.enableNativeNagger;
                                if (!var1) {
                                    _fun10227_ip = 190;
                                    continue _fun10227
                                }
                            case 145:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 5;
                                var1 = var5[var1];
                                var1 = var4.bind(var7)(var1);
                                var5 = var1.debug;
                                var4 = var5.warn;
                                var1 = 'Note: Native Sentry SDK is disabled.';
                                var1 = var4.bind(var5)(var1);
                            case 190:
                                var1 = false;
                                var3.enableNative = var1;
                                return var1;
                            case 201:
                                var1 = var6.autoInitializeNativeSdk;
                                if (var1) {
                                    _fun10227_ip = 275;
                                    continue _fun10227
                                }
                            case 210:
                                var1 = var6.enableNativeNagger;
                                if (!var1) {
                                    _fun10227_ip = 264;
                                    continue _fun10227
                                }
                            case 219:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 5;
                                var1 = var5[var1];
                                var1 = var4.bind(var7)(var1);
                                var5 = var1.debug;
                                var4 = var5.warn;
                                var1 = 'Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false';
                                var1 = var4.bind(var5)(var1);
                            case 264:
                                var3.enableNative = var2;
                                var1 = false;
                                return var1;
                            case 275:
                                var4 = var6.dsn;
                                if (var4) {
                                    _fun10227_ip = 340;
                                    continue _fun10227
                                }
                            case 287:
                                var5 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var4 = 5;
                                var4 = var10[var4];
                                var4 = var5.bind(var7)(var4);
                                var10 = var4.debug;
                                var5 = var10.warn;
                                var4 = 'Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.';
                                var4 = var5.bind(var10)(var4);
                                var4 = false;
                                var3.enableNative = var4;
                                return var4;
                            case 340:
                                var5 = var3._isModuleLoaded;
                                var4 = _closure1_slot6;
                                var4 = var5.bind(var3)(var4);
                                if (var4) {
                                    _fun10227_ip = 366;
                                    continue _fun10227
                                }
                            case 358:
                                var4 = var3._NativeClientError;
                                throw var4;
                            case 366:
                                var4 = var6.ignoreErrors;
                                var _closure2_slot1 = var4;
                                var11 = null;
                                var5 = undefined;
                                if (!(var11 !== var4)) {
                                    _fun10227_ip = 413;
                                    continue _fun10227
                                }
                            case 384:
                                var4 = _closure2_slot1;
                                var5 = undefined;
                                if (!(var7 !== var4)) {
                                    _fun10227_ip = 413;
                                    continue _fun10227
                                }
                            case 394:
                                var12 = _closure2_slot1;
                                var10 = var12.filter;
                                var4 = function(arg0) { // Environment: var8
                                    var1 = 'string';
                                    var0 = arg0;
                                    var0 = typeof var0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var5 = var10.bind(var12)(var4);
                            case 413:
                                var10 = var6.ignoreErrors;
                                var _closure2_slot2 = var10;
                                var4 = undefined;
                                if (!(var11 !== var10)) {
                                    _fun10227_ip = 473;
                                    continue _fun10227
                                }
                            case 429:
                                var10 = _closure2_slot2;
                                var4 = undefined;
                                if (!(var4 !== var10)) {
                                    _fun10227_ip = 473;
                                    continue _fun10227
                                }
                            case 439:
                                var11 = _closure2_slot2;
                                var10 = var11.filter;
                                var9 = function(arg0) { // Environment: var8
                                    var0 = global;
                                    var1 = var0.RegExp;
                                    var0 = arg0;
                                    var0 = var0 instanceof var1;
                                    return var0;
                                };
                                var10 = var10.bind(var11)(var9);
                                var9 = var10.map;
                                var8 = function(arg0) { // Environment: var8
                                    var0 = arg0;
                                    var0 = var0.source;
                                    return var0;
                                };
                                var4 = var9.bind(var10)(var8);
                            case 473:
                                var8 = var5;
                                if (!var8) {
                                    _fun10227_ip = 490;
                                    continue _fun10227
                                }
                            case 479:
                                var10 = var5.length;
                                var9 = 0;
                                var8 = var10 > var9;
                            case 490:
                                if (!var8) {
                                    _fun10227_ip = 499;
                                    continue _fun10227
                                }
                            case 493:
                                var6.ignoreErrorsStr = var5;
                            case 499:
                                var5 = var4;
                                if (!var5) {
                                    _fun10227_ip = 516;
                                    continue _fun10227
                                }
                            case 505:
                                var9 = var4.length;
                                var8 = 0;
                                var5 = var9 > var8;
                            case 516:
                                if (!var5) {
                                    _fun10227_ip = 525;
                                    continue _fun10227
                                }
                            case 519:
                                var6.ignoreErrorsRegex = var4;
                            case 525:
                                var4 = var6.beforeSend;
                                var4 = var6.beforeBreadcrumb;
                                var4 = var6.beforeSendTransaction;
                                var4 = var6.integrations;
                                var4 = var6.ignoreErrors;
                                var4 = var6.logsOrigin;
                                var5 = _closure1_slot5;
                                var4 = ['beforeSend', 'beforeBreadcrumb', 'beforeSendTransaction', 'integrations', 'ignoreErrors', 'logsOrigin'];
                                var5 = var5.bind(var7)(var6, var4);
                                var4 = _closure1_slot6;
                                var1 = var4.initNativeSdk;
                                var1 = var1.bind(var4)(var5);
                                SaveGenerator(address = 600);
                            case 598:
                                return var1;
                            case 600:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun10227_ip = 621;
                                    continue _fun10227
                                }
                            case 606:
                                var3.nativeIsReady = var1;
                                var3.enableNative = var2;
                                return var1;
                            case 621:
                                return var1;
                            case 624:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.initNativeSdk = var6;
            var6 = function() { // Original name: fetchNativeLogAttributes, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10233: for (var _fun10233_ip = 0;;) switch (_fun10233_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10233_ip = 73;
                                    continue _fun10233
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10233_ip = 27;
                                    continue _fun10233
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10233_ip = 56;
                                    continue _fun10233
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchNativeLogAttributes;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 73:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeLogAttributes = var6;
            var6 = function() { // Original name: fetchNativeRelease, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10236: for (var _fun10236_ip = 0;;) switch (_fun10236_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10236_ip = 73;
                                    continue _fun10236
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10236_ip = 27;
                                    continue _fun10236
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10236_ip = 56;
                                    continue _fun10236
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchNativeRelease;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 73:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeRelease = var6;
            var6 = function() { // Original name: fetchNativeSdkInfo, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10239: for (var _fun10239_ip = 0;;) switch (_fun10239_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10239_ip = 73;
                                    continue _fun10239
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10239_ip = 27;
                                    continue _fun10239
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10239_ip = 56;
                                    continue _fun10239
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchNativeSdkInfo;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 73:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeSdkInfo = var6;
            var6 = function() { // Original name: fetchNativeDeviceContexts, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10242: for (var _fun10242_ip = 0;;) switch (_fun10242_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10242_ip = 73;
                                    continue _fun10242
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10242_ip = 27;
                                    continue _fun10242
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10242_ip = 56;
                                    continue _fun10242
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchNativeDeviceContexts;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 73:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeDeviceContexts = var6;
            var6 = function() { // Original name: fetchNativeAppStart, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10245: for (var _fun10245_ip = 0;;) switch (_fun10245_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10245_ip = 159;
                                    continue _fun10245
                                }
                            case 13:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10245_ip = 73;
                                    continue _fun10245
                                }
                            case 25:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 5;
                                var4 = var4[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var4);
                                var5 = var1.debug;
                                var4 = var5.warn;
                                var1 = var2._DisabledNativeError;
                                var1 = var4.bind(var5)(var1);
                                var1 = null;
                                _fun10245_ip = 156;
                                continue _fun10245;
                            case 73:
                                var5 = var2._isModuleLoaded;
                                var4 = _closure1_slot6;
                                var4 = var5.bind(var2)(var4);
                                if (var4) {
                                    _fun10245_ip = 139;
                                    continue _fun10245
                                }
                            case 91:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var4 = 5;
                                var5 = var5[var4];
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var5 = var4.debug;
                                var4 = var5.error;
                                var2 = var2._NativeClientError;
                                var2 = var4.bind(var5)(var2);
                                var2 = null;
                                _fun10245_ip = 153;
                                continue _fun10245;
                            case 139:
                                var4 = _closure1_slot6;
                                var3 = var4.fetchNativeAppStart;
                                var2 = var3.bind(var4)();
                            case 153:
                                var1 = var2;
                            case 156:
                                return var1;
                            case 159:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeAppStart = var6;
            var6 = function() { // Original name: fetchNativeFrames, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10248: for (var _fun10248_ip = 0;;) switch (_fun10248_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10248_ip = 73;
                                    continue _fun10248
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10248_ip = 27;
                                    continue _fun10248
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10248_ip = 56;
                                    continue _fun10248
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchNativeFrames;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 73:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchNativeFrames = var6;
            var6 = function() { // Original name: nativeCrash, environment: var1
                _fun10249: for (var _fun10249_ip = 0;;) switch (_fun10249_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.enableNative;
                        if (!var0) {
                            _fun10249_ip = 55;
                            continue _fun10249
                        }
                    case 12:
                        var3 = var1._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var1)(var2);
                        if (var2) {
                            _fun10249_ip = 41;
                            continue _fun10249
                        }
                    case 33:
                        var1 = var1._NativeClientError;
                        throw var1;
                    case 41:
                        var1 = _closure1_slot6;
                        var0 = var1.crash;
                        var0 = var0.bind(var1)();
                    case 55:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.nativeCrash = var6;
            var6 = function(arg0) { // Original name: setUser, environment: var1
                _fun10250: for (var _fun10250_ip = 0;;) switch (_fun10250_ip) {
                    case 0:
                        var12 = arg0;
                        var6 = this;
                        var0 = var6.enableNative;
                        if (!var0) {
                            _fun10250_ip = 167;
                            continue _fun10250
                        }
                    case 18:
                        var2 = var6._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var1 = var2.bind(var6)(var1);
                        if (var1) {
                            _fun10250_ip = 47;
                            continue _fun10250
                        }
                    case 39:
                        var1 = var6._NativeClientError;
                        throw var1;
                    case 47:
                        var3 = null;
                        var2 = null;
                        if (!var12) {
                            _fun10250_ip = 151;
                            continue _fun10250
                        }
                    case 54:
                        var10 = var12.id;
                        var9 = var12.ip_address;
                        var8 = var12.email;
                        var7 = var12.username;
                        var1 = var12.geo;
                        var11 = _closure1_slot5;
                        var5 = undefined;
                        var4 = ['id', 'ip_address', 'email', 'username', 'geo'];
                        var5 = var11.bind(var5)(var12, var4);
                        var4 = {};
                        var4.id = var10;
                        var4.ip_address = var9;
                        var4.email = var8;
                        var4.username = var7;
                        var4.geo = var1;
                        var1 = var6._serializeObject;
                        var3 = var1.bind(var6)(var4);
                        var1 = var6._serializeObject;
                        var2 = var1.bind(var6)(var5);
                    case 151:
                        var1 = _closure1_slot6;
                        var0 = var1.setUser;
                        var0 = var0.bind(var1)(var3, var2);
                    case 167:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.setUser = var6;
            var6 = function(arg0, arg1) { // Original name: setTag, environment: var1
                _fun10251: for (var _fun10251_ip = 0;;) switch (_fun10251_ip) {
                    case 0:
                        var4 = arg1;
                        var1 = this;
                        var0 = var1.enableNative;
                        if (!var0) {
                            _fun10251_ip = 96;
                            continue _fun10251
                        }
                    case 15:
                        var3 = var1._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var1)(var2);
                        if (var2) {
                            _fun10251_ip = 44;
                            continue _fun10251
                        }
                    case 36:
                        var1 = var1._NativeClientError;
                        throw var1;
                    case 44:
                        var2 = 'string';
                        var1 = typeof var4;
                        var3 = var4;
                        if (!(var2 !== var1)) {
                            _fun10251_ip = 77;
                            continue _fun10251
                        }
                    case 58:
                        var1 = global;
                        var2 = var1.JSON;
                        var1 = var2.stringify;
                        var3 = var1.bind(var2)(var4);
                    case 77:
                        var2 = _closure1_slot6;
                        var1 = var2.setTag;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0, var3);
                    case 96:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.setTag = var6;
            var6 = function(arg0, arg1) { // Original name: setExtra, environment: var1
                _fun10252: for (var _fun10252_ip = 0;;) switch (_fun10252_ip) {
                    case 0:
                        var3 = this;
                        var1 = arg0;
                        var0 = arg1;
                        var7 = undefined;
                        var4 = undefined;
                        var2 = var3.enableNative;
                        if (var2) {
                            _fun10252_ip = 24;
                            continue _fun10252
                        }
                    case 22:
                        return var7;
                    case 24:
                        var6 = var3._isModuleLoaded;
                        var5 = _closure1_slot6;
                        var5 = var6.bind(var3)(var5);
                        if (var5) {
                            _fun10252_ip = 53;
                            continue _fun10252
                        }
                    case 45:
                        var3 = var3._NativeClientError;
                        throw var3;
                    case 53:
                        var3 = var0;
                        var5 = 'string';
                        var3 = typeof var3;
                        if (!(var5 !== var3)) {
                            _fun10252_ip = 263;
                            continue _fun10252
                        }
                    case 70:
                        var3 = var0;
                        if (!(var7 !== var3)) {
                            _fun10252_ip = 238;
                            continue _fun10252
                        }
                    case 80: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 5;
                        var3 = var8[var3];
                        var8 = var6.bind(var7)(var3);
                        var6 = var8.normalize;
                        var3 = var0;
                        var8 = var6.bind(var8)(var3);
                        var3 = global;
                        var6 = var3.JSON;
                        var3 = var6.stringify;
                        var4 = var3.bind(var6)(var8);
                    case 133: // try_end0
                        _fun10252_ip = 180;
                        continue _fun10252;
                    case 135: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var3 = 5;
                        var3 = var9[var3];
                        var3 = var6.bind(var7)(var3);
                        var7 = var3.debug;
                        var6 = var7.error;
                        var3 = 'Extra for key ${key} not passed to native SDK, because it contains non-stringifiable values';
                        var3 = var6.bind(var7)(var3, var8);
                    case 180:
                        var3 = var4;
                        var3 = typeof var3;
                        if (!(var5 !== var3)) {
                            _fun10252_ip = 217;
                            continue _fun10252
                        }
                    case 190:
                        var7 = _closure1_slot6;
                        var6 = var7.setExtra;
                        var5 = var1;
                        var3 = '**non-stringifiable**';
                        var3 = var6.bind(var7)(var5, var3);
                        _fun10252_ip = 236;
                        continue _fun10252;
                    case 217:
                        var7 = _closure1_slot6;
                        var6 = var7.setExtra;
                        var5 = var1;
                        var3 = var6.bind(var7)(var5, var4);
                    case 236:
                        return var3;
                    case 238:
                        var6 = _closure1_slot6;
                        var5 = var6.setExtra;
                        var4 = var1;
                        var3 = 'undefined';
                        var3 = var5.bind(var6)(var4, var3);
                        return var3;
                    case 263:
                        var3 = _closure1_slot6;
                        var2 = var3.setExtra;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3.setExtra = var6;
            var6 = function(arg0) { // Original name: addBreadcrumb, environment: var1
                _fun10253: for (var _fun10253_ip = 0;;) switch (_fun10253_ip) {
                    case 0:
                        var7 = arg0;
                        var9 = this;
                        var0 = var9.enableNative;
                        if (!var0) {
                            _fun10253_ip = 132;
                            continue _fun10253
                        }
                    case 15:
                        var2 = var9._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var1 = var2.bind(var9)(var1);
                        if (var1) {
                            _fun10253_ip = 44;
                            continue _fun10253
                        }
                    case 36:
                        var1 = var9._NativeClientError;
                        throw var1;
                    case 44:
                        var2 = _closure1_slot6;
                        var1 = var2.addBreadcrumb;
                        var0 = global;
                        var5 = var0.Object;
                        var4 = var5.assign;
                        var6 = var0.Object;
                        var3 = var6.assign;
                        var0 = {};
                        var3 = var3.bind(var6)(var0, var7);
                        var0 = {};
                        var8 = var7.level;
                        var6 = undefined;
                        if (!var8) {
                            _fun10253_ip = 116;
                            continue _fun10253
                        }
                    case 99:
                        var8 = var9._processLevel;
                        var7 = var7.level;
                        var6 = var8.bind(var9)(var7);
                    case 116:
                        var0.level = var6;
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                    case 132:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.addBreadcrumb = var6;
            var6 = function() { // Original name: clearBreadcrumbs, environment: var1
                _fun10254: for (var _fun10254_ip = 0;;) switch (_fun10254_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.enableNative;
                        if (!var0) {
                            _fun10254_ip = 55;
                            continue _fun10254
                        }
                    case 12:
                        var3 = var1._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var1)(var2);
                        if (var2) {
                            _fun10254_ip = 41;
                            continue _fun10254
                        }
                    case 33:
                        var1 = var1._NativeClientError;
                        throw var1;
                    case 41:
                        var1 = _closure1_slot6;
                        var0 = var1.clearBreadcrumbs;
                        var0 = var0.bind(var1)();
                    case 55:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.clearBreadcrumbs = var6;
            var6 = function(arg0, arg1) { // Original name: setContext, environment: var1
                _fun10255: for (var _fun10255_ip = 0;;) switch (_fun10255_ip) {
                    case 0:
                        var3 = this;
                        var0 = arg0;
                        var5 = arg1;
                        var2 = undefined;
                        var4 = undefined;
                        var1 = var3.enableNative;
                        if (!var1) {
                            _fun10255_ip = 189;
                            continue _fun10255
                        }
                    case 25:
                        var7 = var3._isModuleLoaded;
                        var6 = _closure1_slot6;
                        var6 = var7.bind(var3)(var6);
                        if (var6) {
                            _fun10255_ip = 54;
                            continue _fun10255
                        }
                    case 46:
                        var3 = var3._NativeClientError;
                        throw var3;
                    case 54:
                        var6 = var5;
                        var3 = null;
                        if (!(var3 !== var6)) {
                            _fun10255_ip = 191;
                            continue _fun10255
                        }
                    case 66: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var6 = 8;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.convertToNormalizedObject;
                        var4 = var6.bind(var7)(var5);
                    case 97: // try_end0
                        _fun10255_ip = 144;
                        continue _fun10255;
                    case 99: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 5;
                        var5 = var7[var5];
                        var5 = var6.bind(var2)(var5);
                        var7 = var5.debug;
                        var6 = var7.error;
                        var5 = 'Context for key ${key} not passed to native SDK, because it contains non-serializable values';
                        var5 = var6.bind(var7)(var5, var8);
                    case 144:
                        var8 = var4;
                        var7 = _closure1_slot6;
                        var6 = var7.setContext;
                        var5 = var0;
                        if (var8) {
                            _fun10255_ip = 183;
                            continue _fun10255
                        }
                    case 163:
                        var8 = {};
                        var9 = '**non-serializable**';
                        var8.error = var9;
                        var8 = var6.bind(var7)(var5, var8);
                        _fun10255_ip = 189;
                        continue _fun10255;
                    case 183:
                        var4 = var6.bind(var7)(var5, var4);
                    case 189:
                        return var2;
                    case 191:
                        var2 = _closure1_slot6;
                        var1 = var2.setContext;
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                }
            };
            var3.setContext = var6;
            var6 = function() { // Original name: closeNativeSdk, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10258: for (var _fun10258_ip = 0;;) switch (_fun10258_ip) {
                            case 0:
                                StartGenerator();
                                var5 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun10258_ip = 83;
                                    continue _fun10258
                                }
                            case 12:
                                var _closure4_slot0 = var5;
                                var2 = var5.enableNative;
                                if (!var2) {
                                    _fun10258_ip = 46;
                                    continue _fun10258
                                }
                            case 25:
                                var4 = var5._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var5)(var3);
                                if (var3) {
                                    _fun10258_ip = 51;
                                    continue _fun10258
                                }
                            case 46:
                                var3 = undefined;
                                return var3;
                            case 51:
                                var3 = _closure1_slot6;
                                var2 = var3.closeNativeSdk;
                                var3 = var2.bind(var3)();
                                var2 = var3.then;
                                var1 = function() { // Environment: var1
                                    var1 = _closure4_slot0;
                                    var0 = false;
                                    var1.enableNative = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 83:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.closeNativeSdk = var6;
            var6 = function() { // Original name: disableNativeFramesTracking, environment: var1
                _fun10260: for (var _fun10260_ip = 0;;) switch (_fun10260_ip) {
                    case 0:
                        var3 = this;
                        var0 = var3.enableNative;
                        if (!var0) {
                            _fun10260_ip = 30;
                            continue _fun10260
                        }
                    case 12:
                        var2 = var3._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var0 = var2.bind(var3)(var1);
                    case 30:
                        if (!var0) {
                            _fun10260_ip = 50;
                            continue _fun10260
                        }
                    case 33:
                        var1 = _closure1_slot6;
                        var0 = var1.disableNativeFramesTracking;
                        var0 = var0.bind(var1)();
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.disableNativeFramesTracking = var6;
            var6 = function() { // Original name: enableNativeFramesTracking, environment: var1
                _fun10261: for (var _fun10261_ip = 0;;) switch (_fun10261_ip) {
                    case 0:
                        var3 = this;
                        var0 = var3.enableNative;
                        if (!var0) {
                            _fun10261_ip = 30;
                            continue _fun10261
                        }
                    case 12:
                        var2 = var3._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var0 = var2.bind(var3)(var1);
                    case 30:
                        if (!var0) {
                            _fun10261_ip = 50;
                            continue _fun10261
                        }
                    case 33:
                        var1 = _closure1_slot6;
                        var0 = var1.enableNativeFramesTracking;
                        var0 = var0.bind(var1)();
                    case 50:
                        var0 = undefined;
                        return var0;
                }
            };
            var3.enableNativeFramesTracking = var6;
            var6 = function() { // Original name: isNativeAvailable, environment: var1
                var2 = this;
                var1 = var2._isModuleLoaded;
                var0 = _closure1_slot6;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3.isNativeAvailable = var6;
            var6 = function() { // Original name: captureScreenshot, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10265: for (var _fun10265_ip = 0;;) switch (_fun10265_ip) {
                            case 0:
                                StartGenerator();
                                var3 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10265_ip = 249;
                                    continue _fun10265
                                }
                            case 13:
                                var4 = undefined;
                                var2 = undefined;
                                var5 = var3.enableNative;
                                if (var5) {
                                    _fun10265_ip = 76;
                                    continue _fun10265
                                }
                            case 29:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var5 = 5;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var7 = var5.debug;
                                var6 = var7.warn;
                                var5 = var3._DisabledNativeError;
                                var5 = var6.bind(var7)(var5);
                                var5 = null;
                                return var5;
                            case 76:
                                var6 = var3._isModuleLoaded;
                                var5 = _closure1_slot6;
                                var5 = var6.bind(var3)(var5);
                                if (var5) {
                                    _fun10265_ip = 141;
                                    continue _fun10265
                                }
                            case 94:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var5 = 5;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var6 = var5.debug;
                                var5 = var6.error;
                                var3 = var3._NativeClientError;
                                var3 = var5.bind(var6)(var3);
                                var3 = null;
                                return var3;
                            case 141: // try_start_0
                                var5 = _closure1_slot6;
                                var3 = var5.captureScreenshot;
                                var3 = var3.bind(var5)();
                                SaveGenerator(address = 159);
                            case 157:
                                return var3;
                            case 159:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun10265_ip = 170;
                                    continue _fun10265
                                }
                            case 165:
                                var2 = var3;
                            case 168: // try_end0
                                _fun10265_ip = 218;
                                continue _fun10265;
                            case 170:
                                return var3;
                            case 173: // catch_target0
                                CatchBlockStart(arg_register = 5);
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var1 = 5;
                                var1 = var6[var1];
                                var1 = var3.bind(var4)(var1);
                                var4 = var1.debug;
                                var3 = var4.warn;
                                var1 = 'Failed to capture screenshot';
                                var1 = var3.bind(var4)(var1, var5);
                            case 218:
                                var3 = var2;
                                var1 = null;
                                if (!var3) {
                                    _fun10265_ip = 246;
                                    continue _fun10265
                                }
                            case 226:
                                var4 = var2;
                                var3 = var4.map;
                                var2 = function(arg0) { // Environment: var2
                                    var4 = arg0;
                                    var5 = global;
                                    var3 = var5.Object;
                                    var2 = var3.assign;
                                    var6 = var5.Object;
                                    var1 = var6.assign;
                                    var0 = {};
                                    var1 = var1.bind(var6)(var0, var4);
                                    var0 = {};
                                    var6 = var5.Uint8Array;
                                    var8 = var4.data;
                                    var5 = var6.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var9 = var5;
                                    var4 = new var9[var6](var8, var7);
                                    var4 = var4 instanceof Object ? var4 : var5;
                                    var0.data = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2);
                            case 246:
                                return var1;
                            case 249:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.captureScreenshot = var6;
            var6 = function() { // Original name: fetchViewHierarchy, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10269: for (var _fun10269_ip = 0;;) switch (_fun10269_ip) {
                            case 0:
                                StartGenerator();
                                var2 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10269_ip = 122;
                                    continue _fun10269
                                }
                            case 10:
                                var1 = var2.enableNative;
                                if (var1) {
                                    _fun10269_ip = 27;
                                    continue _fun10269
                                }
                            case 19:
                                var1 = var2._DisabledNativeError;
                                throw var1;
                            case 27:
                                var4 = var2._isModuleLoaded;
                                var3 = _closure1_slot6;
                                var3 = var4.bind(var2)(var3);
                                if (var3) {
                                    _fun10269_ip = 56;
                                    continue _fun10269
                                }
                            case 48:
                                var2 = var2._NativeClientError;
                                throw var2;
                            case 56:
                                var2 = _closure1_slot6;
                                var1 = var2.fetchViewHierarchy;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 74);
                            case 72:
                                return var1;
                            case 74:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun10269_ip = 119;
                                    continue _fun10269
                                }
                            case 80:
                                var2 = null;
                                if (!var1) {
                                    _fun10269_ip = 116;
                                    continue _fun10269
                                }
                            case 85:
                                var3 = global;
                                var3 = var3.Uint8Array;
                                var4 = var3.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var6 = var4;
                                var5 = var1;
                                var3 = new var6[var3](var5, var4);
                                var2 = var3 instanceof Object ? var3 : var4;
                            case 116:
                                return var2;
                            case 119:
                                return var1;
                            case 122:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.fetchViewHierarchy = var6;
            var6 = function(arg0) { // Original name: startProfiling, environment: var1
                _fun10270: for (var _fun10270_ip = 0;;) switch (_fun10270_ip) {
                    case 0:
                        var0 = this;
                        var1 = var0.enableNative;
                        if (var1) {
                            _fun10270_ip = 20;
                            continue _fun10270
                        }
                    case 12:
                        var1 = var0._DisabledNativeError;
                        throw var1;
                    case 20:
                        var3 = var0._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var0)(var2);
                        if (var2) {
                            _fun10270_ip = 49;
                            continue _fun10270
                        }
                    case 41:
                        var0 = var0._NativeClientError;
                        throw var0;
                    case 49:
                        var3 = _closure1_slot6;
                        var2 = var3.startProfiling;
                        var0 = arg0;
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.started;
                        var4 = var2.error;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.debug;
                        if (var0) {
                            _fun10270_ip = 128;
                            continue _fun10270
                        }
                    case 109:
                        var2 = var3.error;
                        var1 = '[NATIVE] Start Profiling Failed';
                        var1 = var2.bind(var3)(var1, var4);
                        _fun10270_ip = 144;
                        continue _fun10270;
                    case 128:
                        var2 = var3.log;
                        var1 = '[NATIVE] Start Profiling';
                        var1 = var2.bind(var3)(var1);
                    case 144:
                        var0 = !var0;
                        var0 = !var0;
                        return var0;
                }
            };
            var3.startProfiling = var6;
            var6 = function() { // Original name: stopProfiling, environment: var1
                _fun10271: for (var _fun10271_ip = 0;;) switch (_fun10271_ip) {
                    case 0:
                        var1 = this;
                        var2 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var0 = var1.enableNative;
                        if (var0) {
                            _fun10271_ip = 28;
                            continue _fun10271
                        }
                    case 20:
                        var0 = var1._DisabledNativeError;
                        throw var0;
                    case 28:
                        var7 = var1._isModuleLoaded;
                        var3 = _closure1_slot6;
                        var3 = var7.bind(var1)(var3);
                        if (var3) {
                            _fun10271_ip = 57;
                            continue _fun10271
                        }
                    case 49:
                        var1 = var1._NativeClientError;
                        throw var1;
                    case 57:
                        var3 = _closure1_slot6;
                        var1 = var3.stopProfiling;
                        var3 = var1.bind(var3)();
                        var1 = var3.profile;
                        var6 = var1;
                        var5 = var3.nativeProfile;
                        var4 = var3.androidProfile;
                        var3 = var3.error;
                        if (!var1) {
                            _fun10271_ip = 244;
                            continue _fun10271
                        }
                    case 103:
                        if (var3) {
                            _fun10271_ip = 244;
                            continue _fun10271
                        }
                    case 109:
                        var1 = var4;
                        if (var1) {
                            _fun10271_ip = 157;
                            continue _fun10271
                        }
                    case 115:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var1 = 5;
                        var1 = var8[var1];
                        var1 = var7.bind(var2)(var1);
                        var8 = var1.debug;
                        var7 = var8.warn;
                        var1 = '[NATIVE] Stop Profiling Failed: No Android Profile';
                        var1 = var7.bind(var8)(var1);
                    case 157: // try_start_0
                        var1 = {};
                        var7 = global;
                        var8 = var7.JSON;
                        var7 = var8.parse;
                        var6 = var7.bind(var8)(var6);
                        var1.hermesProfile = var6;
                        var1.nativeProfile = var5;
                        var1.androidProfile = var4;
                    case 193: // try_end0
                        return var1;
                    case 195: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 5;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.debug;
                        var4 = var5.error;
                        var1 = '[NATIVE] Failed to parse Hermes Profile JSON';
                        var1 = var4.bind(var5)(var1, var6);
                        var1 = null;
                        return var1;
                    case 244:
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 5;
                        var0 = var4[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.debug;
                        var1 = var2.error;
                        var0 = '[NATIVE] Stop Profiling Failed';
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = null;
                        return var0;
                }
            };
            var3.stopProfiling = var6;
            var6 = function() { // Original name: fetchNativePackageName, environment: var1
                _fun10272: for (var _fun10272_ip = 0;;) switch (_fun10272_ip) {
                    case 0:
                        var3 = this;
                        var0 = var3.enableNative;
                        if (!var0) {
                            _fun10272_ip = 30;
                            continue _fun10272
                        }
                    case 12:
                        var2 = var3._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var0 = var2.bind(var3)(var1);
                    case 30:
                        if (!var0) {
                            _fun10272_ip = 50;
                            continue _fun10272
                        }
                    case 33:
                        var2 = _closure1_slot6;
                        var1 = var2.fetchNativePackageName;
                        var0 = var1.bind(var2)();
                    case 50:
                        if (var0) {
                            _fun10272_ip = 55;
                            continue _fun10272
                        }
                    case 53:
                        var0 = null;
                    case 55:
                        return var0;
                }
            };
            var3.fetchNativePackageName = var6;
            var6 = function(arg0) { // Original name: fetchNativeStackFramesBy, environment: var1
                _fun10273: for (var _fun10273_ip = 0;;) switch (_fun10273_ip) {
                    case 0:
                        var3 = this;
                        var0 = var3.enableNative;
                        if (!var0) {
                            _fun10273_ip = 30;
                            continue _fun10273
                        }
                    case 12:
                        var2 = var3._isModuleLoaded;
                        var1 = _closure1_slot6;
                        var0 = var2.bind(var3)(var1);
                    case 30:
                        if (!var0) {
                            _fun10273_ip = 54;
                            continue _fun10273
                        }
                    case 33:
                        var3 = _closure1_slot6;
                        var2 = var3.fetchNativeStackFramesBy;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 54:
                        if (var0) {
                            _fun10273_ip = 59;
                            continue _fun10273
                        }
                    case 57:
                        var0 = null;
                    case 59:
                        return var0;
                }
            };
            var3.fetchNativeStackFramesBy = var6;
            var6 = function() { // Original name: initNativeReactNavigationNewFrameTracking, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10276: for (var _fun10276_ip = 0;;) switch (_fun10276_ip) {
                            case 0:
                                StartGenerator();
                                var4 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10276_ip = 62;
                                    continue _fun10276
                                }
                            case 10:
                                var1 = var4.enableNative;
                                if (!var1) {
                                    _fun10276_ip = 40;
                                    continue _fun10276
                                }
                            case 19:
                                var3 = var4._isModuleLoaded;
                                var2 = _closure1_slot6;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun10276_ip = 45;
                                    continue _fun10276
                                }
                            case 40:
                                var2 = undefined;
                                return var2;
                            case 45:
                                var2 = _closure1_slot6;
                                var1 = var2.initNativeReactNavigationNewFrameTracking;
                                var1 = var1.bind(var2)();
                                return var1;
                            case 62:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.initNativeReactNavigationNewFrameTracking = var6;
            var6 = function(arg0) { // Original name: captureReplay, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10279: for (var _fun10279_ip = 0;;) switch (_fun10279_ip) {
                            case 0:
                                StartGenerator();
                                var3 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10279_ip = 300;
                                    continue _fun10279
                                }
                            case 13:
                                var2 = var3.enableNative;
                                if (var2) {
                                    _fun10279_ip = 129;
                                    continue _fun10279
                                }
                            case 25:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 5;
                                var4 = var4[var2];
                                var2 = undefined;
                                var2 = var5.bind(var2)(var4);
                                var6 = var2.debug;
                                var5 = var6.warn;
                                var2 = var3.captureReplay;
                                var9 = var2.name;
                                var2 = global;
                                var4 = var2.HermesInternal;
                                var8 = var4.concat;
                                var7 = '[NATIVE] `';
                                var4 = '` is not available when native is disabled.';
                                var4 = var8.bind(var7)(var9, var4);
                                var4 = var5.bind(var6)(var4);
                                var5 = var2.Promise;
                                var4 = var5.resolve;
                                var2 = null;
                                var2 = var4.bind(var5)(var2);
                                _fun10279_ip = 294;
                                continue _fun10279;
                            case 129:
                                var5 = var3._isModuleLoaded;
                                var4 = _closure1_slot6;
                                var4 = var5.bind(var3)(var4);
                                if (var4) {
                                    _fun10279_ip = 248;
                                    continue _fun10279
                                }
                            case 147:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var4 = 5;
                                var5 = var5[var4];
                                var4 = undefined;
                                var4 = var6.bind(var4)(var5);
                                var6 = var4.debug;
                                var5 = var6.warn;
                                var3 = var3.captureReplay;
                                var9 = var3.name;
                                var3 = global;
                                var4 = var3.HermesInternal;
                                var8 = var4.concat;
                                var7 = '[NATIVE] `';
                                var4 = '` is not available when native is not available.';
                                var4 = var8.bind(var7)(var9, var4);
                                var4 = var5.bind(var6)(var4);
                                var5 = var3.Promise;
                                var4 = var5.resolve;
                                var3 = null;
                                var3 = var4.bind(var5)(var3);
                                _fun10279_ip = 291;
                                continue _fun10279;
                            case 248:
                                var5 = _closure1_slot6;
                                var4 = var5.captureReplay;
                                var1 = _closure2_slot0;
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 274);
                            case 272:
                                return var1;
                            case 274:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun10279_ip = 297;
                                    continue _fun10279
                                }
                            case 280:
                                var4 = var1;
                                if (var4) {
                                    _fun10279_ip = 288;
                                    continue _fun10279
                                }
                            case 286:
                                var4 = null;
                            case 288:
                                var3 = var4;
                            case 291:
                                var2 = var3;
                            case 294:
                                return var2;
                            case 297:
                                return var1;
                            case 300:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.captureReplay = var6;
            var6 = function() { // Original name: getCurrentReplayId, environment: var1
                _fun10280: for (var _fun10280_ip = 0;;) switch (_fun10280_ip) {
                    case 0:
                        var1 = this;
                        var0 = var1.enableNative;
                        if (var0) {
                            _fun10280_ip = 102;
                            continue _fun10280
                        }
                    case 15:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 5;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var4 = var0.debug;
                        var3 = var4.warn;
                        var0 = var1.getCurrentReplayId;
                        var7 = var0.name;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var6 = var0.concat;
                        var5 = '[NATIVE] `';
                        var0 = '` is not available when native is disabled.';
                        var0 = var6.bind(var5)(var7, var0);
                        var0 = var3.bind(var4)(var0);
                        var0 = null;
                        _fun10280_ip = 229;
                        continue _fun10280;
                    case 102:
                        var4 = var1._isModuleLoaded;
                        var3 = _closure1_slot6;
                        var3 = var4.bind(var1)(var3);
                        if (var3) {
                            _fun10280_ip = 204;
                            continue _fun10280
                        }
                    case 120:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 5;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var4 = var3.debug;
                        var3 = var4.warn;
                        var1 = var1.getCurrentReplayId;
                        var7 = var1.name;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var5 = '[NATIVE] `';
                        var1 = '` is not available when native is not available.';
                        var1 = var6.bind(var5)(var7, var1);
                        var1 = var3.bind(var4)(var1);
                        var1 = null;
                        _fun10280_ip = 226;
                        continue _fun10280;
                    case 204:
                        var3 = _closure1_slot6;
                        var2 = var3.getCurrentReplayId;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun10280_ip = 223;
                            continue _fun10280
                        }
                    case 221:
                        var2 = null;
                    case 223:
                        var1 = var2;
                    case 226:
                        var0 = var1;
                    case 229:
                        return var0;
                }
            };
            var3.getCurrentReplayId = var6;
            var6 = function() { // Original name: crashedLastRun, environment: var1
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10283: for (var _fun10283_ip = 0;;) switch (_fun10283_ip) {
                            case 0:
                                StartGenerator();
                                var4 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10283_ip = 96;
                                    continue _fun10283
                                }
                            case 10:
                                var1 = var4.enableNative;
                                if (var1) {
                                    _fun10283_ip = 24;
                                    continue _fun10283
                                }
                            case 19:
                                var1 = null;
                                return var1;
                            case 24:
                                var3 = var4._isModuleLoaded;
                                var2 = _closure1_slot6;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun10283_ip = 50;
                                    continue _fun10283
                                }
                            case 45:
                                var2 = null;
                                return var2;
                            case 50:
                                var2 = _closure1_slot6;
                                var1 = var2.crashedLastRun;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 68);
                            case 66:
                                return var1;
                            case 68:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun10283_ip = 93;
                                    continue _fun10283
                                }
                            case 74:
                                var4 = 'boolean';
                                var3 = typeof var1;
                                var2 = null;
                                if (!(var4 === var3)) {
                                    _fun10283_ip = 90;
                                    continue _fun10283
                                }
                            case 87:
                                var2 = var1;
                            case 90:
                                return var2;
                            case 93:
                                return var1;
                            case 96:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.crashedLastRun = var6;
            var6 = function() { // Original name: getNewScreenTimeToDisplay, environment: var1
                _fun10284: for (var _fun10284_ip = 0;;) switch (_fun10284_ip) {
                    case 0:
                        var3 = this;
                        var0 = var3.enableNative;
                        if (!var0) {
                            _fun10284_ip = 33;
                            continue _fun10284
                        }
                    case 12:
                        var2 = var3._isModuleLoaded;
                        var0 = _closure1_slot6;
                        var0 = var2.bind(var3)(var0);
                        if (var0) {
                            _fun10284_ip = 56;
                            continue _fun10284
                        }
                    case 33:
                        var0 = global;
                        var3 = var0.Promise;
                        var2 = var3.resolve;
                        var0 = null;
                        var0 = var2.bind(var3)(var0);
                        _fun10284_ip = 70;
                        continue _fun10284;
                    case 56:
                        var2 = _closure1_slot6;
                        var1 = var2.getNewScreenTimeToDisplay;
                        var0 = var1.bind(var2)();
                    case 70:
                        return var0;
                }
            };
            var3.getNewScreenTimeToDisplay = var6;
            var6 = function(arg0) { // Original name: getDataFromUri, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10287: for (var _fun10287_ip = 0;;) switch (_fun10287_ip) {
                            case 0:
                                StartGenerator();
                                var4 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10287_ip = 169;
                                    continue _fun10287
                                }
                            case 13:
                                var1 = var4.enableNative;
                                if (!var1) {
                                    _fun10287_ip = 43;
                                    continue _fun10287
                                }
                            case 22:
                                var3 = var4._isModuleLoaded;
                                var2 = _closure1_slot6;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun10287_ip = 48;
                                    continue _fun10287
                                }
                            case 43:
                                var2 = null;
                                return var2;
                            case 48: // try_start_0
                                var4 = _closure1_slot6;
                                var3 = var4.getDataFromUri;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address = 74);
                            case 72:
                                return var2;
                            case 74:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun10287_ip = 114;
                                    continue _fun10287
                                }
                            case 80:
                                var3 = global;
                                var3 = var3.Uint8Array;
                                var4 = var3.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var7 = var4;
                                var6 = var2;
                                var3 = new var7[var3](var6, var5);
                                var3 = var3 instanceof Object ? var3 : var4;
                            case 111: // try_end0
                                return var3;
                            case 114:
                                return var2;
                            case 117: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 5;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.debug;
                                var2 = var3.error;
                                var1 = 'Error:';
                                var1 = var2.bind(var3)(var1, var4);
                                var1 = null;
                                return var1;
                            case 169:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.getDataFromUri = var6;
            var6 = function(arg0) { // Original name: popTimeToDisplayFor, environment: var1
                _fun10288: for (var _fun10288_ip = 0;;) switch (_fun10288_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var0 = var4.enableNative;
                        if (!var0) {
                            _fun10288_ip = 36;
                            continue _fun10288
                        }
                    case 15:
                        var3 = var4._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun10288_ip = 59;
                            continue _fun10288
                        }
                    case 36:
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var2 = null;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 59: // try_start_0
                        var3 = _closure1_slot6;
                        var2 = var3.popTimeToDisplayFor;
                        var1 = var2.bind(var3)(var1);
                    case 74: // try_end0
                        return var1;
                    case 76: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.debug;
                        var1 = var2.error;
                        var0 = 'Error:';
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = global;
                        var2 = var0.Promise;
                        var1 = var2.resolve;
                        var0 = null;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var3.popTimeToDisplayFor = var6;
            var6 = function(arg0) { // Original name: setActiveSpanId, environment: var1
                _fun10289: for (var _fun10289_ip = 0;;) switch (_fun10289_ip) {
                    case 0:
                        var4 = this;
                        var1 = arg0;
                        var0 = var4.enableNative;
                        if (!var0) {
                            _fun10289_ip = 51;
                            continue _fun10289
                        }
                    case 15:
                        var3 = var4._isModuleLoaded;
                        var2 = _closure1_slot6;
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun10289_ip = 51;
                            continue _fun10289
                        }
                    case 36: // try_start_0
                        var3 = _closure1_slot6;
                        var2 = var3.setActiveSpanId;
                        var1 = var2.bind(var3)(var1);
                    case 51: // try_end0
                        var1 = undefined;
                        return var1;
                    case 55: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.debug;
                        var1 = var2.error;
                        var0 = 'Error:';
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                }
            };
            var3.setActiveSpanId = var6;
            var6 = function(arg0) { // Original name: encodeToBase64, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10292: for (var _fun10292_ip = 0;;) switch (_fun10292_ip) {
                            case 0:
                                StartGenerator();
                                var4 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10292_ip = 202;
                                    continue _fun10292
                                }
                            case 13:
                                var1 = var4.enableNative;
                                if (!var1) {
                                    _fun10292_ip = 43;
                                    continue _fun10292
                                }
                            case 22:
                                var3 = var4._isModuleLoaded;
                                var2 = _closure1_slot6;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun10292_ip = 67;
                                    continue _fun10292
                                }
                            case 43:
                                var2 = global;
                                var4 = var2.Promise;
                                var3 = var4.resolve;
                                var2 = null;
                                var2 = var3.bind(var4)(var2);
                                return var2;
                            case 67: // try_start_0
                                var2 = global;
                                var4 = var2.Array;
                                var3 = var4.from;
                                var2 = _closure2_slot0;
                                var5 = var3.bind(var4)(var2);
                                var4 = _closure1_slot6;
                                var2 = var4.encodeToBase64;
                                var2 = var2.bind(var4)(var5);
                                SaveGenerator(address = 111);
                            case 109:
                                return var2;
                            case 111:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun10292_ip = 128;
                                    continue _fun10292
                                }
                            case 117:
                                var3 = var2;
                                if (var2) {
                                    _fun10292_ip = 125;
                                    continue _fun10292
                                }
                            case 123:
                                var3 = null;
                            case 125: // try_end0
                                return var3;
                            case 128:
                                return var2;
                            case 131: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 5;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.debug;
                                var2 = var3.error;
                                var1 = 'Error:';
                                var1 = var2.bind(var3)(var1, var4);
                                var1 = global;
                                var3 = var1.Promise;
                                var2 = var3.resolve;
                                var1 = null;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 202:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var3.encodeToBase64 = var6;
            var6 = function(arg0) { // Original name: primitiveProcessor, environment: var1
                var0 = arg0;
                return var0;
            };
            var3.primitiveProcessor = var6;
            var6 = function(arg0) { // Original name: _processItem, environment: var1
                _fun10294: for (var _fun10294_ip = 0;;) switch (_fun10294_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = this;
                        var5 = _closure1_slot2;
                        var3 = undefined;
                        var2 = 2;
                        var5 = var5.bind(var3)(var1, var2);
                        var2 = 0;
                        var2 = var5[var2];
                        var3 = 1;
                        var3 = var5[var3];
                        var6 = var2.type;
                        var5 = 'event';
                        if (!(var5 != var6)) {
                            _fun10294_ip = 65;
                            continue _fun10294
                        }
                    case 50:
                        var6 = var2.type;
                        var5 = 'transaction';
                        if (!(var5 != var6)) {
                            _fun10294_ip = 65;
                            continue _fun10294
                        }
                    case 63:
                        return var1;
                    case 65:
                        var1 = var4._processLevels;
                        var1 = var1.bind(var4)(var3);
                        var0 = _closure1_slot8;
                        var3 = var0.platform;
                        var0 = 'android';
                        var0 = var0 === var3;
                        if (!var0) {
                            _fun10294_ip = 105;
                            continue _fun10294
                        }
                    case 97:
                        var3 = 'message';
                        var0 = var3 in var1;
                    case 105:
                        if (!var0) {
                            _fun10294_ip = 125;
                            continue _fun10294
                        }
                    case 108:
                        var0 = {};
                        var3 = var1.message;
                        var0.message = var3;
                        var1.message = var0;
                    case 125:
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                }
            };
            var3._processItem = var6;
            var6 = function(arg0) { // Original name: _serializeObject, environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = {};
                var _closure2_slot1 = var0;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun10296: for (var _fun10296_ip = 0;;) switch (_fun10296_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            var5 = var1[var2];
                            var1 = _closure2_slot1;
                            var4 = 'string';
                            var3 = typeof var5;
                            var0 = var5;
                            if (!(var4 !== var3)) {
                                _fun10296_ip = 51;
                                continue _fun10296
                            }
                        case 32:
                            var3 = global;
                            var4 = var3.JSON;
                            var3 = var4.stringify;
                            var0 = var3.bind(var4)(var5);
                        case 51:
                            var1[var2] = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var3._serializeObject = var6;
            var6 = function(arg0) { // Original name: _processLevels, environment: var1
                _fun10297: for (var _fun10297_ip = 0;;) switch (_fun10297_ip) {
                    case 0:
                        var4 = arg0;
                        var10 = this;
                        var _closure2_slot0 = var10;
                        var0 = global;
                        var3 = var0.Object;
                        var2 = var3.assign;
                        var6 = var0.Object;
                        var1 = var6.assign;
                        var0 = {};
                        var1 = var1.bind(var6)(var0, var4);
                        var0 = {};
                        var8 = var4.level;
                        var7 = undefined;
                        if (!var8) {
                            _fun10297_ip = 74;
                            continue _fun10297
                        }
                    case 57:
                        var9 = var10._processLevel;
                        var8 = var4.level;
                        var7 = var9.bind(var10)(var8);
                    case 74:
                        var0.level = var7;
                        var7 = var4.breadcrumbs;
                        var8 = null;
                        var4 = undefined;
                        if (!(var8 !== var7)) {
                            _fun10297_ip = 114;
                            continue _fun10297
                        }
                    case 93:
                        var4 = undefined;
                        if (!(var4 !== var7)) {
                            _fun10297_ip = 114;
                            continue _fun10297
                        }
                    case 99:
                        var6 = var7.map;
                        var5 = function(arg0) { // Environment: var5
                            _fun10298: for (var _fun10298_ip = 0;;) switch (_fun10298_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = global;
                                    var3 = var0.Object;
                                    var2 = var3.assign;
                                    var4 = var0.Object;
                                    var1 = var4.assign;
                                    var0 = {};
                                    var1 = var1.bind(var4)(var0, var5);
                                    var0 = {};
                                    var6 = var5.level;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun10298_ip = 72;
                                        continue _fun10298
                                    }
                                case 48:
                                    var7 = _closure2_slot0;
                                    var6 = var7._processLevel;
                                    var5 = var5.level;
                                    var4 = var6.bind(var7)(var5);
                                case 72:
                                    var0.level = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var4 = var6.bind(var7)(var5);
                    case 114:
                        var0.breadcrumbs = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3._processLevels = var6;
            var6 = function(arg0) { // Original name: _processLevel, environment: var1
                _fun10299: for (var _fun10299_ip = 0;;) switch (_fun10299_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 'log';
                        var2 = var0 == var1;
                        var0 = 'debug';
                        if (var2) {
                            _fun10299_ip = 21;
                            continue _fun10299
                        }
                    case 18:
                        var0 = var1;
                    case 21:
                        return var0;
                }
            };
            var3._processLevel = var6;
            var6 = function(arg0) { // Original name: _isModuleLoaded, environment: var1
                var0 = arg0;
                var0 = !var0;
                var0 = !var0;
                return var0;
            };
            var3._isModuleLoaded = var6;
            var6 = function(arg0) { // Original name: _setPrimitiveProcessor, environment: var1
                var1 = arg0;
                var0 = this;
                var0.primitiveProcessor = var1;
                var0 = undefined;
                return var0;
            };
            var3._setPrimitiveProcessor = var6;
            var6 = 5;
            var9 = var8[var6];
            var9 = var7.bind(var0)(var9);
            var11 = var9.SentryError;
            var9 = var11.prototype;
            var10 = Object.create(var9, {
                constructor: {
                    value: var11
                }
            });
            var14 = 'Native is disabled';
            var15 = var10;
            var9 = new var15[var11](var14, var13);
            var9 = var9 instanceof Object ? var9 : var10;
            var3._DisabledNativeError = var9;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var8 = var6.SentryError;
            var6 = var8.prototype;
            var7 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var14 = "Native Client is not available, can't start on native.";
            var15 = var7;
            var6 = new var15[var8](var14, var13);
            var6 = var6 instanceof Object ? var6 : var7;
            var3._NativeClientError = var6;
            var3.enableNative = var5;
            var5 = false;
            var3.nativeIsReady = var5;
            var5 = 'android';
            var3.platform = var5;
            var _closure1_slot8 = var3;
            var2.getRNSentryModule = var4;
            var2.NATIVE = var3;
            var1 = function(arg0) { // Original name: getDataFromUri, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot4;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun10304: for (var _fun10304_ip = 0;;) switch (_fun10304_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun10304_ip = 35;
                                    continue _fun10304
                                }
                            case 7:
                                var3 = _closure1_slot8;
                                var2 = var3.getDataFromUri;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 35:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var2.getDataFromUri = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 999, 994, 1001, 817, 1010, 1004, 1011]);