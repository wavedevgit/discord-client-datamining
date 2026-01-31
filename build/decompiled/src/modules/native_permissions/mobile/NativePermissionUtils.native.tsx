// modules/native_permissions/mobile/NativePermissionUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37094: for (var _fun37094_ip = 0;;) switch (_fun37094_ip) {
        case 0:
            var4 = require;
            var3 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var5;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var6
                _fun37095: for (var _fun37095_ip = 0;;) switch (_fun37095_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun37095_ip = 46;
                            continue _fun37095
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun37095_ip = 55;
                            continue _fun37095
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun37095_ip = 343;
                            continue _fun37095
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun37095_ip = 323;
                            continue _fun37095
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun37095_ip = 283;
                            continue _fun37095
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun37095_ip = 270;
                            continue _fun37095
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
                            _fun37095_ip = 163;
                            continue _fun37095
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun37095_ip = 179;
                            continue _fun37095
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun37095_ip = 249;
                            continue _fun37095
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun37095_ip = 249;
                            continue _fun37095
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun37095_ip = 234;
                            continue _fun37095
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun37095_ip = 247;
                            continue _fun37095
                        }
                    case 234:
                        var8 = _closure1_slot14;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun37095_ip = 265;
                        continue _fun37095;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun37095_ip = 283;
                        continue _fun37095;
                    case 270:
                        var6 = _closure1_slot14;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun37095_ip = 323;
                            continue _fun37095
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
                            _fun37095_ip = 330;
                            continue _fun37095
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun37096: for (var _fun37096_ip = 0;;) switch (_fun37096_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun37096_ip = 56;
                                        continue _fun37096
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
                                    _fun37096_ip = 67;
                                    continue _fun37096;
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
                    case 343:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var6
                _fun37097: for (var _fun37097_ip = 0;;) switch (_fun37097_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun37097_ip = 23;
                            continue _fun37097
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun37097_ip = 33;
                            continue _fun37097
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
                            _fun37097_ip = 70;
                            continue _fun37097
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun37097_ip = 55;
                            continue _fun37097
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var6
                _fun37098: for (var _fun37098_ip = 0;;) switch (_fun37098_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun37098_ip = 74;
                        continue _fun37098;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot15 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function() { // Original name: combineStatuses, environment: var6
                var0 = undefined;
                var3 = _closure1_slot17;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot16 = var0;
            var0 = function() { // Original name: _combineStatuses, environment: var6
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot8;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun37104: for (var _fun37104_ip = 0;;) switch (_fun37104_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun37104_ip = 108;
                                    continue _fun37104
                                }
                            case 7:
                                var3 = _closure1_slot13;
                                var6 = undefined;
                                var2 = arg0;
                                var5 = var3.bind(var6)(var2);
                                var3 = var5.bind(var6)();
                                var2 = var3.done;
                                var4 = var3;
                                if (var2) {
                                    _fun37104_ip = 95;
                                    continue _fun37104
                                }
                            case 39:
                                var2 = var4.value;
                                var2 = var2.bind(var6)();
                                SaveGenerator(address = 52);
                            case 50:
                                return var2;
                            case 52:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun37104_ip = 92;
                                    continue _fun37104
                                }
                            case 58:
                                var3 = _closure1_slot11;
                                var3 = var3.AUTHORIZED;
                                if (!(var2 === var3)) {
                                    _fun37104_ip = 89;
                                    continue _fun37104
                                }
                            case 72:
                                var7 = var5.bind(var6)();
                                var3 = var7.done;
                                var4 = var7;
                                if (var3) {
                                    _fun37104_ip = 95;
                                    continue _fun37104
                                }
                            case 87:
                                _fun37104_ip = 39;
                                continue _fun37104;
                            case 89:
                                return var2;
                            case 92:
                                return var2;
                            case 95:
                                var1 = _closure1_slot11;
                                var1 = var1.AUTHORIZED;
                                return var1;
                            case 108:
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
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 4;
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 6;
            var3 = var5[var1];
            var1 = arg3;
            var1 = var1.bind(var0)(var3);
            var _closure1_slot9 = var1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var8 = var1.NativeModules;
            var _closure1_slot10 = var8;
            var1 = var1.Platform;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.NativePermissionTypes;
            var3 = var3.NativePermissionStatus;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot12 = var3;
            var10 = 10;
            var3 = var5[var10];
            var9 = var4.bind(var0)(var3);
            var3 = var9.isAndroid;
            var9 = var3.bind(var9)();
            if (!var9) {
                _fun37094_ip = 340;
                continue _fun37094
            }
        case 321:
            var1 = var1.constants;
            var3 = var1.Version;
            var1 = 28;
            var9 = var3 <= var1;
        case 340:
            var1 = 17;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var3 = var1.NativePermissionBaseUtils;
            var1 = function(arg0) { // Environment: var6
                var3 = function() { // Original name: NativePermissionIOSUtils, environment: var5
                    _fun37106: for (var _fun37106_ip = 0;;) switch (_fun37106_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot5;
                            var0 = _closure1_slot15;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun37106_ip = 69;
                                continue _fun37106
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun37106_ip = 105;
                            continue _fun37106;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var2)(var3);
                            var5 = var5.constructor;
                            var4 = arguments;
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 105:
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot7;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot4;
                var4 = {};
                var0 = 'requestPermissionCore';
                var4.key = var0;
                var0 = function(arg0, arg1) { // Original name: value, environment: var5
                    var4 = this;
                    var3 = var4.performRequest;
                    var0 = _closure2_slot0;
                    var2 = var0.requestPermissionLookup;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(6);
                var0[0] = var4;
                var4 = {};
                var6 = 'hasPermissionCore';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    var4 = this;
                    var3 = var4.performRequest;
                    var0 = _closure2_slot0;
                    var2 = var0.hasPermissionLookup;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'performRequest';
                var4.key = var6;
                var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
                    _fun37109: for (var _fun37109_ip = 0;;) switch (_fun37109_ip) {
                        case 0:
                            var6 = arg1;
                            var3 = this;
                            var0 = arg0;
                            var2 = var0[var6];
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun37109_ip = 39;
                                continue _fun37109
                            }
                        case 19:
                            var1 = var3.requestAuthorization;
                            var0 = arg2;
                            var0 = var1.bind(var3)(var6, var2, var0);
                            _fun37109_ip = 143;
                            continue _fun37109;
                        case 39:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var9 = 'NativePermissionUtils';
                            var10 = var2;
                            var1 = new var10[var3](var9, var8);
                            var4 = var1 instanceof Object ? var1 : var2;
                            var3 = var4.error;
                            var1 = global;
                            var2 = var1.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'Unable to locate permission type ';
                            var2 = var5.bind(var2)(var6);
                            var2 = var3.bind(var4)(var2);
                            var3 = var1.Promise;
                            var2 = var3.resolve;
                            var1 = false;
                            var0 = var2.bind(var3)(var1);
                        case 143:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'didHavePermission';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var0 = this;
                    var2 = var0.storage;
                    var1 = var2.hasPermission;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'openSettings';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'openAlertModal';
                var4.key = var6;
                var5 = function(arg0) { // Original name: value, environment: var5
                    var0 = arg0;
                    var7 = var0.body;
                    var6 = var0.onConfirm;
                    var3 = _closure1_slot9;
                    var2 = var3.lazy;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var1 = 14;
                        var1 = var0[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = 13;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5 = var2.bind(var3)(var0);
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 15;
                    var2 = var12[var0];
                    var0 = undefined;
                    var4 = var11.bind(var0)(var2);
                    var3 = var4.openAlert;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var8 = 16;
                    var9 = var12[var8];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.sMFVrS;
                    var8 = var9.bind(var10)(var8);
                    var1.title = var8;
                    var1.body = var7;
                    var1.onConfirm = var6;
                    var2 = var2.bind(var0)(var5, var1);
                    var1 = 'permission-denied';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var4.value = var5;
                var0[5] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = {};
            var12 = var7.CAMERA;
            if (var9) {
                _fun37094_ip = 393;
                continue _fun37094
            }
        case 379:
            var11 = var8.NativePermissionManager;
            var11 = var11.requestCameraAuthorization;
            _fun37094_ip = 398;
            continue _fun37094;
        case 393:
            var11 = function() { // Environment: var6
                var2 = _closure1_slot16;
                var0 = _closure1_slot10;
                var1 = var0.NativePermissionManager;
                var3 = var1.requestExternalStorageAuthorization;
                var1 = new Array(2);
                var1[0] = var3;
                var0 = var0.NativePermissionManager;
                var0 = var0.requestCameraAuthorization;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
        case 398:
            var3[var12] = var11;
            var12 = var7.AUDIO;
            var11 = var5[var10];
            var13 = var4.bind(var0)(var11);
            var11 = var13.isAndroid;
            var11 = var11.bind(var13)();
            if (var11) {
                _fun37094_ip = 445;
                continue _fun37094
            }
        case 431:
            var11 = var8.NativePermissionManager;
            var11 = var11.requestMicrophoneAuthorization;
            _fun37094_ip = 450;
            continue _fun37094;
        case 445:
            var11 = function() { // Environment: var6
                var2 = _closure1_slot16;
                var0 = _closure1_slot10;
                var1 = var0.NativePermissionManager;
                var3 = var1.requestMicrophoneAuthorization;
                var1 = new Array(2);
                var1[0] = var3;
                var0 = var0.NativePermissionManager;
                var0 = var0.requestModifyAudioAuthorization;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
        case 450:
            var3[var12] = var11;
            var12 = var7.PHOTOS;
            var11 = var8.NativePermissionManager;
            var11 = var11.requestPhotoAuthorization;
            var3[var12] = var11;
            var12 = var7.CONTACTS;
            var11 = var8.NativePermissionManager;
            var11 = var11.requestContactsAuthorization;
            var3[var12] = var11;
            var12 = var7.INPUT_MONITORING;
            var11 = function() { // Environment: var6
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = _closure1_slot11;
                var0 = var0.AUTHORIZED;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3[var12] = var11;
            var1.requestPermissionLookup = var3;
            var3 = {};
            var11 = var7.CAMERA;
            if (var9) {
                _fun37094_ip = 550;
                continue _fun37094
            }
        case 536:
            var9 = var8.NativePermissionManager;
            var9 = var9.hasCameraAuthorization;
            _fun37094_ip = 555;
            continue _fun37094;
        case 550:
            var9 = function() { // Environment: var6
                var2 = _closure1_slot16;
                var0 = _closure1_slot10;
                var1 = var0.NativePermissionManager;
                var3 = var1.hasExternalStorageAuthorization;
                var1 = new Array(2);
                var1[0] = var3;
                var0 = var0.NativePermissionManager;
                var0 = var0.hasCameraAuthorization;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
        case 555:
            var3[var11] = var9;
            var9 = var7.AUDIO;
            var10 = var5[var10];
            var11 = var4.bind(var0)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            if (var10) {
                _fun37094_ip = 602;
                continue _fun37094
            }
        case 588:
            var8 = var8.NativePermissionManager;
            var8 = var8.hasMicrophoneAuthorization;
            _fun37094_ip = 607;
            continue _fun37094;
        case 602:
            var8 = function() { // Environment: var6
                var2 = _closure1_slot16;
                var0 = _closure1_slot10;
                var1 = var0.NativePermissionManager;
                var3 = var1.hasMicrophoneAuthorization;
                var1 = new Array(2);
                var1[0] = var3;
                var0 = var0.NativePermissionManager;
                var0 = var0.hasModifyAudioAuthorization;
                var1[1] = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
        case 607:
            var3[var9] = var8;
            var7 = var7.INPUT_MONITORING;
            var6 = function() { // Environment: var6
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = _closure1_slot11;
                var0 = var0.AUTHORIZED;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3[var7] = var6;
            var1.hasPermissionLookup = var3;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var17 = var3;
            var1 = new var17[var1](var16);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 18;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/native_permissions/mobile/NativePermissionUtils.native.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 31, 27, 3973, 33, 478, 3, 3983, 3985, 1307, 3988, 1234, 3979, 2]);