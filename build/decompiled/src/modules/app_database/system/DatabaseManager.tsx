// modules/app_database/system/DatabaseManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun18721: for (var _fun18721_ip = 0;;) switch (_fun18721_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18721_ip = 45;
                    continue _fun18721
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun18721_ip = 54;
                    continue _fun18721
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun18721_ip = 342;
                    continue _fun18721
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18721_ip = 322;
                    continue _fun18721
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18721_ip = 282;
                    continue _fun18721
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18721_ip = 269;
                    continue _fun18721
                }
            case 109:
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
                    _fun18721_ip = 162;
                    continue _fun18721
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun18721_ip = 178;
                    continue _fun18721
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18721_ip = 248;
                    continue _fun18721
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18721_ip = 248;
                    continue _fun18721
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18721_ip = 233;
                    continue _fun18721
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18721_ip = 246;
                    continue _fun18721
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun18721_ip = 264;
                continue _fun18721;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun18721_ip = 282;
                continue _fun18721;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun18721_ip = 322;
                    continue _fun18721
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun18721_ip = 329;
                    continue _fun18721
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18722: for (var _fun18722_ip = 0;;) switch (_fun18722_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18722_ip = 56;
                                continue _fun18722
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
                            _fun18722_ip = 67;
                            continue _fun18722;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun18723: for (var _fun18723_ip = 0;;) switch (_fun18723_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18723_ip = 23;
                    continue _fun18723
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18723_ip = 33;
                    continue _fun18723
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
                    _fun18723_ip = 70;
                    continue _fun18723
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18723_ip = 55;
                    continue _fun18723
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun18724: for (var _fun18724_ip = 0;;) switch (_fun18724_ip) {
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
                _fun18724_ip = 74;
                continue _fun18724;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: _databaseName, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '@account.';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _trySpeculativelyOpenDatabaseAsync, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun18730: for (var _fun18730_ip = 0;;) switch (_fun18730_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18730_ip = 152;
                            continue _fun18730
                        }
                    case 10:
                        var5 = undefined;
                        var2 = undefined;
                        var4 = _closure1_slot15;
                        var3 = arg0;
                        var8 = var4.bind(var5)(var3);
                        var2 = var8;
                        var6 = _closure1_slot11;
                        var4 = var6.verbose;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var3 = 'speculatively opening ';
                        var3 = var7.bind(var3)(var8);
                        var3 = var4.bind(var6)(var3);
                    case 71: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 10;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var4 = var3.Database;
                        var3 = var4.open;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 112);
                    case 110:
                        return var2;
                    case 112:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18730_ip = 121;
                            continue _fun18730
                        }
                    case 118: // try_end0
                        return var2;
                    case 121:
                        return var2;
                    case 124: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot11;
                        var2 = var3.warn;
                        var1 = "couldn't speculatively open database.";
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = null;
                        return var1;
                    case 152:
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'DatabaseManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot11 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: DatabaseManager, environment: var5
            _fun18732: for (var _fun18732_ip = 0;;) switch (_fun18732_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot5;
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var0 = 8;
                    var6 = var7[var0];
                    var6 = var8.bind(var3)(var6);
                    var9 = new Array(3);
                    var9[0] = var6;
                    var6 = {};
                    var8 = function(arg0) { // Original name: CLEAR_CACHES, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleClearCaches;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CLEAR_CACHES = var8;
                    var8 = function() { // Original name: CONNECTION_CLOSED, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleAuthenticationStoreChanged;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6.CONNECTION_CLOSED = var8;
                    var8 = function() { // Original name: CONNECTION_OPEN, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6.CONNECTION_OPEN = var8;
                    var8 = function() { // Original name: LOGOUT, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleAuthenticationStoreChanged;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6.LOGOUT = var8;
                    var9[1] = var6;
                    var6 = _closure1_slot0;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var0 = var0.DispatchBand;
                    var0 = var0.Early;
                    var9[2] = var0;
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot7;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun18732_ip = 167;
                        continue _fun18732
                    }
                case 154:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun18732_ip = 201;
                    continue _fun18732;
                case 167:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 201:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var2;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.databases = var1;
                    var1 = null;
                    var0.activeUserId = var1;
                    var1 = false;
                    var0.preventWritingCachesAgainThisSession = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot9;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var _closure3_slot0 = var4;
            var2 = var4.waitFor;
            var3 = _closure1_slot10;
            var2 = var2.bind(var4)(var3);
            var5 = var4.carefullySpeculativelyOpen;
            var6 = _closure1_slot2;
            var2 = _closure1_slot3;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var6 = var6.bind(var0)(var2);
            var2 = var6.getUserId;
            var2 = var2.bind(var6)();
            var2 = var5.bind(var4)(var2);
            var2 = var4.handleAuthenticationStoreChanged;
            var2 = var2.bind(var4)();
            var2 = var3.addChangeListener;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.handleAuthenticationStoreChanged;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var7 = 'databaseName';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot15;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'database';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun18740: for (var _fun18740_ip = 0;;) switch (_fun18740_ip) {
                case 0:
                    var4 = arg0;
                    var3 = null;
                    var1 = var3 != var4;
                    var0 = null;
                    if (!var1) {
                        _fun18740_ip = 45;
                        continue _fun18740
                    }
                case 14:
                    var1 = this;
                    var2 = var1.databases;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var4);
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun18740_ip = 45;
                        continue _fun18740
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'carefullyOpenDatabase';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun18741: for (var _fun18741_ip = 0;;) switch (_fun18741_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.preventWritingCachesAgainThisSession;
                    if (var0) {
                        _fun18741_ip = 154;
                        continue _fun18741
                    }
                case 18:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun18741_ip = 141;
                        continue _fun18741
                    }
                case 24:
                    var3 = var1.databases;
                    var0 = var3.has;
                    var0 = var0.bind(var3)(var2);
                    if (var0) {
                        _fun18741_ip = 141;
                        continue _fun18741
                    }
                case 43:
                    var3 = function(arg0) { // Original name: tryOpenDatabase, environment: var0
                        _fun18742: for (var _fun18742_ip = 0;;) switch (_fun18742_ip) {
                            case 0:
                                var2 = _closure1_slot15;
                                var9 = undefined;
                                var1 = arg0;
                                var5 = var2.bind(var9)(var1);
                                var _closure4_slot0 = var5;
                                var3 = _closure1_slot11;
                                var2 = var3.verbose;
                                var8 = global;
                                var1 = var8.HermesInternal;
                                var4 = var1.concat;
                                var1 = 'synchronously opening ';
                                var1 = var4.bind(var1)(var5);
                                var1 = var2.bind(var3)(var1);
                                var5 = 50;
                                var6 = function() { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    var3 = var0.Database;
                                    var2 = var3.openSyncUnsafe;
                                    var1 = _closure4_slot0;
                                    var0 = {};
                                    var4 = true;
                                    var0.invalidateDisabledHandles = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var7 = 0;
                                var4 = 'tryUntil ';
                            case 78: // try_start_0
                                var0 = var6;
                                var0 = var0.bind(var9)();
                            case 85: // try_end0
                                _fun18742_ip = 138;
                                continue _fun18742;
                            case 87: // catch_target0
                                CatchBlockStart(arg_register = 13);
                                var12 = _closure1_slot11;
                                var11 = var12.error;
                                var1 = var7;
                                var2 = var8.HermesInternal;
                                var2 = var2.concat;
                                var2 = var2.bind(var4)(var1);
                                var2 = var11.bind(var12)(var2, var13);
                                var2 = var1 + 1;
                                var7 = var2;
                                var1 = var5;
                                var0 = null;
                                if (var2 < var1) {
                                    _fun18742_ip = 78;
                                    continue _fun18742
                                }
                            case 138:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var5 = _closure1_slot11;
                    var3 = var5.verbose;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var13 = 'added database (';
                    var11 = ' → ';
                    var9 = ')';
                    var12 = var2;
                    var10 = var4;
                    var0 = var13[var8](var12, var11, var10, var9, var8);
                    var0 = var3.bind(var5)(var0);
                    var3 = var1.databases;
                    var0 = var3.set;
                    var0 = var0.bind(var3)(var2, var4);
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                case 141:
                    var0 = var1.database;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                case 154:
                    var2 = _closure1_slot11;
                    var1 = var2.verbose;
                    var0 = 'Not opening database because caches have been manually cleared.';
                    var0 = var1.bind(var2)(var0);
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'replaceDisableAllDatabases';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun18744: for (var _fun18744_ip = 0;;) switch (_fun18744_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var4 = _closure1_slot11;
                    var3 = var4.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var5 = 'disabling and nulling all databases (reason: ';
                    var1 = ')';
                    var1 = var7.bind(var5)(var6, var1);
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot12;
                    var1 = var2.databases;
                    var0 = var1.keys;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var3 = var5.bind(var0)();
                    var1 = var3.done;
                    var4 = null;
                    if (var1) {
                        _fun18744_ip = 175;
                        continue _fun18744
                    }
                case 93:
                    var8 = var3.value;
                    var7 = var2.databases;
                    var1 = var7.get;
                    var7 = var1.bind(var7)(var8);
                    if (!(var4 != var7)) {
                        _fun18744_ip = 129;
                        continue _fun18744
                    }
                case 118:
                    var1 = var7.disable;
                    var1 = var1.bind(var7)(var6);
                case 129:
                    if (!(var4 != var7)) {
                        _fun18744_ip = 143;
                        continue _fun18744
                    }
                case 133:
                    var1 = var7.close;
                    var1 = var1.bind(var7)();
                case 143:
                    var7 = var2.databases;
                    var1 = var7.set;
                    var1 = var1.bind(var7)(var8, var4);
                    var7 = var5.bind(var0)();
                    var1 = var7.done;
                    var3 = var7;
                    if (!var1) {
                        _fun18744_ip = 93;
                        continue _fun18744
                    }
                case 175:
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'remove';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun18745: for (var _fun18745_ip = 0;;) switch (_fun18745_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.databases;
                    var0 = var2.get;
                    var2 = var0.bind(var2)(var3);
                    var5 = _closure1_slot11;
                    var4 = var5.log;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var13 = 'removing database (user: ';
                    var11 = ', database: ';
                    var9 = ')';
                    var12 = var3;
                    var10 = var2;
                    var0 = var13[var8](var12, var11, var10, var9, var8);
                    var0 = var4.bind(var5)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun18745_ip = 94;
                        continue _fun18745
                    }
                case 84:
                    var0 = var2.close;
                    var0 = var0.bind(var2)();
                case 94:
                    var2 = var1.databases;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[5] = var4;
        var4 = {};
        var7 = 'handleClearCaches';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun18746: for (var _fun18746_ip = 0;;) switch (_fun18746_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0.preventWritingCachesAgainThisSession;
                    if (!var1) {
                        _fun18746_ip = 23;
                        continue _fun18746
                    }
                case 15:
                    var1 = true;
                    var2.preventWritingCachesAgainThisSession = var1;
                case 23:
                    var1 = var2.replaceDisableAllDatabases;
                    var5 = var0.reason;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'DatabaseManager (';
                    var0 = ')';
                    var0 = var4.bind(var3)(var5, var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[6] = var4;
        var4 = {};
        var7 = 'handleConnectionOpen';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            _fun18747: for (var _fun18747_ip = 0;;) switch (_fun18747_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot10;
                    var0 = var1.getId;
                    var2 = var0.bind(var1)();
                    var1 = var3.databases;
                    var0 = var1.get;
                    var6 = var0.bind(var1)(var2);
                    var1 = null;
                    var7 = var1 == var6;
                    var0 = undefined;
                    var5 = undefined;
                    if (var7) {
                        _fun18747_ip = 58;
                        continue _fun18747
                    }
                case 49:
                    var7 = var6.state;
                    var5 = var7.bind(var6)();
                case 58:
                    var1 = var1 == var6;
                    if (!var1) {
                        _fun18747_ip = 101;
                        continue _fun18747
                    }
                case 65:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.DatabaseState;
                    var4 = var4.Open;
                    var1 = var5 !== var4;
                case 101:
                    if (!var1) {
                        _fun18747_ip = 115;
                        continue _fun18747
                    }
                case 104:
                    var1 = var3.remove;
                    var1 = var1.bind(var3)(var2);
                case 115:
                    var1 = var3.carefullyOpenDatabase;
                    var1 = var1.bind(var3)(var2);
                    return var0;
            }
        };
        var4.value = var7;
        var0[7] = var4;
        var4 = {};
        var7 = 'handleAuthenticationStoreChanged';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            _fun18748: for (var _fun18748_ip = 0;;) switch (_fun18748_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot10;
                    var1 = var2.getId;
                    var1 = var1.bind(var2)();
                    var2 = var0.activeUserId;
                    if (!(var1 !== var2)) {
                        _fun18748_ip = 183;
                        continue _fun18748
                    }
                case 33:
                    var5 = var0.databases;
                    var4 = var5.get;
                    var5 = var4.bind(var5)(var2);
                    var7 = _closure1_slot11;
                    var6 = var7.verbose;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var10 = var4.concat;
                    var17 = 'active user changed (now: ';
                    var8 = ', was: ';
                    var11 = ')';
                    var16 = var1;
                    var15 = var8;
                    var14 = var2;
                    var13 = var8;
                    var12 = var5;
                    var4 = var17[var10](var16, var15, var14, var13, var12, var11, var10);
                    var4 = var6.bind(var7)(var4);
                    var4 = null;
                    if (!(var4 != var5)) {
                        _fun18748_ip = 128;
                        continue _fun18748
                    }
                case 118:
                    var4 = var5.close;
                    var4 = var4.bind(var5)();
                case 128:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.setUserId;
                    var3 = var3.bind(var4)(var1);
                    var0.activeUserId = var1;
                    var1 = var0.databases;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 183:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[8] = var4;
        var4 = {};
        var7 = 'carefullySpeculativelyOpen';
        var4.key = var7;
        var7 = _closure1_slot4;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun18750: for (var _fun18750_ip = 0;;) switch (_fun18750_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18750_ip = 278;
                            continue _fun18750
                        }
                    case 16:
                        var1 = var4.preventWritingCachesAgainThisSession;
                        if (var1) {
                            _fun18750_ip = 249;
                            continue _fun18750
                        }
                    case 28:
                        var2 = null;
                        if (!(var2 != var9)) {
                            _fun18750_ip = 273;
                            continue _fun18750
                        }
                    case 37:
                        var3 = function() { // Original name: trySpeculativelyOpenDatabaseAsync, environment: var1
                            var0 = undefined;
                            var3 = _closure1_slot16;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = undefined;
                        var1 = var3.bind(var1)(var9);
                        SaveGenerator(address = 55);
                    case 53:
                        return var1;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18750_ip = 246;
                            continue _fun18750
                        }
                    case 64:
                        if (!(var2 != var1)) {
                            _fun18750_ip = 173;
                            continue _fun18750
                        }
                    case 68:
                        var5 = var4.databases;
                        var3 = var5.has;
                        var3 = var3.bind(var5)(var9);
                        if (var3) {
                            _fun18750_ip = 173;
                            continue _fun18750
                        }
                    case 87:
                        var6 = _closure1_slot11;
                        var5 = var6.verbose;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var10 = var3.concat;
                        var15 = 'added speculative database (';
                        var13 = ' → ';
                        var11 = ')';
                        var14 = var9;
                        var12 = var1;
                        var3 = var15[var10](var14, var13, var12, var11, var10);
                        var3 = var5.bind(var6)(var3);
                        var5 = var4.databases;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var9, var1);
                        var3 = var4.emitChange;
                        var3 = var3.bind(var4)();
                        _fun18750_ip = 273;
                        continue _fun18750;
                    case 173:
                        var5 = _closure1_slot11;
                        var4 = var5.verbose;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var15 = 'discarding speculative database (';
                        var13 = ' → ';
                        var11 = ')';
                        var14 = var9;
                        var12 = var1;
                        var3 = var15[var8](var14, var13, var12, var11, var10);
                        var3 = var4.bind(var5)(var3);
                        if (!(var2 != var1)) {
                            _fun18750_ip = 273;
                            continue _fun18750
                        }
                    case 234:
                        var2 = var1.close;
                        var2 = var2.bind(var1)();
                        _fun18750_ip = 273;
                        continue _fun18750;
                    case 246:
                        return var1;
                    case 249:
                        var3 = _closure1_slot11;
                        var2 = var3.verbose;
                        var1 = 'Not opening database because caches have been manually cleared.';
                        var1 = var2.bind(var3)(var1);
                    case 273:
                        var1 = undefined;
                        return var1;
                    case 278:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: carefullySpeculativelyOpen, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/system/DatabaseManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1216, 3, 806, 1654, 1638, 566, 2]);