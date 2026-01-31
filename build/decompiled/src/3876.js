// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function(arg0, arg1) { // Original name: createJSONStorage, environment: var1
        _fun35099: for (var _fun35099_ip = 0;;) switch (_fun35099_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
            case 12: // try_start_0
                var2 = var0;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var _closure2_slot1 = var0;
            case 25: // try_end0
                var0 = {};
                var2 = function(arg0) { // Original name: getItem, environment: var1
                    _fun35100: for (var _fun35100_ip = 0;;) switch (_fun35100_ip) {
                        case 0:
                            var3 = function(arg0) { // Original name: parse, environment: var0
                                _fun35101: for (var _fun35101_ip = 0;;) switch (_fun35101_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var6 = null;
                                        var0 = null;
                                        if (!(var0 !== var4)) {
                                            _fun35101_ip = 59;
                                            continue _fun35101
                                        }
                                    case 11:
                                        var1 = global;
                                        var3 = var1.JSON;
                                        var2 = var3.parse;
                                        var1 = _closure2_slot0;
                                        var6 = var6 == var1;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun35101_ip = 53;
                                            continue _fun35101
                                        }
                                    case 41:
                                        var5 = _closure2_slot0;
                                        var1 = var5.reviver;
                                    case 53:
                                        var0 = var2.bind(var3)(var4, var1);
                                    case 59:
                                        return var0;
                                }
                            };
                            var2 = _closure2_slot1;
                            var1 = var2.getItem;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var2 = null;
                            var1 = var2 != var0;
                            if (!var1) {
                                _fun35100_ip = 40;
                                continue _fun35100
                            }
                        case 37:
                            var2 = var0;
                        case 40:
                            var0 = global;
                            var0 = var0.Promise;
                            var0 = var2 instanceof var0;
                            if (var0) {
                                _fun35100_ip = 64;
                                continue _fun35100
                            }
                        case 55:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            _fun35100_ip = 74;
                            continue _fun35100;
                        case 64:
                            var1 = var2.then;
                            var0 = var1.bind(var2)(var3);
                        case 74:
                            return var0;
                    }
                };
                var0.getItem = var2;
                var2 = function(arg0, arg1) { // Original name: setItem, environment: var1
                    _fun35102: for (var _fun35102_ip = 0;;) switch (_fun35102_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.setItem;
                            var1 = global;
                            var5 = var1.JSON;
                            var4 = var5.stringify;
                            var6 = _closure2_slot0;
                            var1 = null;
                            var6 = var1 == var6;
                            var1 = undefined;
                            if (var6) {
                                _fun35102_ip = 54;
                                continue _fun35102
                            }
                        case 42:
                            var0 = _closure2_slot0;
                            var1 = var0.replacer;
                        case 54:
                            var0 = arg1;
                            var1 = var4.bind(var5)(var0, var1);
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var0.setItem = var2;
                var1 = function(arg0) { // Original name: removeItem, environment: var1
                    var2 = _closure2_slot1;
                    var1 = var2.removeItem;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.removeItem = var1;
                return var0;
            case 59: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = ['enabled', 'anonymousActionType', 'store'];
    var _closure1_slot3 = var4;
    var4 = ['connection'];
    var _closure1_slot4 = var4;
    var4 = global;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var8 = var5;
    var4 = new var8[var4](var7);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot5 = var4;
    var4 = function(arg0) { // Original name: getTrackedConnectionState, environment: var1
        _fun35109: for (var _fun35109_ip = 0;;) switch (_fun35109_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                if (var1) {
                    _fun35109_ip = 27;
                    continue _fun35109
                }
            case 23:
                var0 = {};
                _fun35109_ip = 86;
                continue _fun35109;
            case 27:
                var4 = global;
                var3 = var4.Object;
                var2 = var3.fromEntries;
                var5 = var4.Object;
                var4 = var5.entries;
                var1 = var1.stores;
                var5 = var4.bind(var5)(var1);
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 2;
                    var2 = var3.bind(var2)(var1, var0);
                    var0 = 0;
                    var1 = var2[var0];
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function(arg0) { // Original name: findCallerName, environment: var1
        _fun35111: for (var _fun35111_ip = 0;;) switch (_fun35111_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun35111_ip = 123;
                    continue _fun35111
                }
            case 6:
                var1 = var2.split;
                var0 = '\n';
                var1 = var1.bind(var2)(var0);
                var2 = var1.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.includes;
                    var0 = 'api.setState';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var2 = 0;
                if (!(!(var0 < var2))) {
                    _fun35111_ip = 123;
                    continue _fun35111
                }
            case 44:
                var2 = 1;
                var0 = var0 + var2;
                var4 = var1[var0];
                var3 = null;
                var1 = var3 == var4;
                var5 = undefined;
                if (var1) {
                    _fun35111_ip = 76;
                    continue _fun35111
                }
            case 66:
                var1 = var4.trim;
                var5 = var1.bind(var4)();
            case 76:
                if (var5) {
                    _fun35111_ip = 83;
                    continue _fun35111
                }
            case 79:
                var5 = '';
            case 83:
                var4 = /.+ (.+) .+/;
                var1 = var4.exec;
                var1 = var1.bind(var4)(var5);
                var3 = var3 == var1;
                var0 = undefined;
                if (var3) {
                    _fun35111_ip = 121;
                    continue _fun35111
                }
            case 117:
                var0 = var1[var2];
            case 121:
                return var0;
            case 123:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function(arg0, arg1) { // Original name: parseJsonThen, environment: var1
        _fun35124: for (var _fun35124_ip = 0;;) switch (_fun35124_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = undefined;
                var1 = undefined;
            case 10: // try_start_0
                var4 = global;
                var5 = var4.JSON;
                var4 = var5.parse;
                var1 = var4.bind(var5)(var3);
            case 29: // try_end0
                _fun35124_ip = 58;
                continue _fun35124;
            case 31: // catch_target0
                CatchBlockStart(arg_register = 6);
                var3 = global;
                var5 = var3.console;
                var4 = var5.error;
                var3 = '[zustand devtools middleware] Could not parse the received json';
                var3 = var4.bind(var5)(var3, var6);
            case 58:
                var3 = var1;
                if (!(var0 !== var3)) {
                    _fun35124_ip = 70;
                    continue _fun35124
                }
            case 65:
                var1 = var2.bind(var0)(var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function(arg0) { // Original name: toThenable, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun35130: for (var _fun35130_ip = 0;;) switch (_fun35130_ip) {
                case 0:
                    var0 = arg0;
                    var4 = undefined;
                    var2 = undefined;
                case 9: // try_start_0
                    var3 = _closure2_slot0;
                    var3 = var3.bind(var4)(var0);
                    var2 = var3;
                    var _closure3_slot0 = var3;
                    var0 = global;
                    var0 = var0.Promise;
                    var0 = var3 instanceof var0;
                    if (var0) {
                        _fun35130_ip = 66;
                        continue _fun35130
                    }
                case 43:
                    var0 = {};
                    var3 = function(arg0) { // Original name: then, environment: var1
                        var1 = _closure1_slot9;
                        var2 = undefined;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.then = var3;
                    var3 = function(arg0) { // Original name: _catch, environment: var1
                        var0 = this;
                        return var0;
                    };
                    var0.catch = var3;
                    _fun35130_ip = 69;
                    continue _fun35130;
                case 66:
                    var0 = var2;
                case 69: // try_end0
                    return var0;
                case 71: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var2 = function(arg0) { // Original name: then, environment: var1
                        var0 = this;
                        return var0;
                    };
                    var0.then = var2;
                    var1 = function(arg0) { // Original name: _catch, environment: var1
                        var1 = _closure1_slot9;
                        var2 = undefined;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.catch = var1;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot9 = var4;
    var4 = function(arg0, arg1) { // Original name: combine, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function() { // Environment: var0
            var6 = undefined;
            var0 = undefined;
            var1 = global;
            var4 = var1.Object;
            var3 = var4.assign;
            var2 = _closure2_slot0;
            var5 = _closure2_slot1;
            var1 = var5.apply;
            var0 = arguments;
            var1 = var1.bind(var5)(var6, var0);
            var0 = {};
            var0 = var3.bind(var4)(var0, var2, var1);
            return var0;
        };
        return var0;
    };
    var2.combine = var4;
    var2.createJSONStorage = var3;
    var3 = function(arg0) { // Original name: devtoolsImpl, environment: var1
        _fun35113: for (var _fun35113_ip = 0;;) switch (_fun35113_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun35113_ip = 31;
                    continue _fun35113
                }
            case 23:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun35113_ip = 35;
                    continue _fun35113
                }
            case 31:
                var1 = {};
                _fun35113_ip = 39;
                continue _fun35113;
            case 35:
                var1 = arguments[var2];
            case 39:
                var _closure2_slot1 = var1;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun35114: for (var _fun35114_ip = 0;;) switch (_fun35114_ip) {
                        case 0:
                            var10 = arg0;
                            var7 = arg1;
                            var5 = arg2;
                            var12 = var10;
                            var _closure3_slot0 = var10;
                            var6 = var7;
                            var _closure3_slot1 = var7;
                            var3 = var5;
                            var _closure3_slot2 = var5;
                            var10 = undefined;
                            var9 = undefined;
                            var15 = undefined;
                            var11 = undefined;
                            var8 = undefined;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = undefined;
                            var5 = _closure2_slot1;
                            var15 = var5.enabled;
                            var5 = _closure2_slot1;
                            var5 = var5.anonymousActionType;
                            var _closure3_slot3 = var5;
                            var5 = _closure2_slot1;
                            var5 = var5.store;
                            var11 = var5;
                            var _closure3_slot4 = var5;
                            var16 = _closure1_slot1;
                            var14 = _closure2_slot1;
                            var13 = _closure1_slot3;
                            var13 = var16.bind(var10)(var14, var13);
                            var8 = var13;
                            var _closure3_slot5 = var13;
                        case 121: // try_start_0
                            var17 = var15;
                            var16 = null;
                            var16 = var16 != var17;
                            var14 = var16;
                            if (!var16) {
                                _fun35114_ip = 139;
                                continue _fun35114
                            }
                        case 136:
                            var14 = var15;
                        case 139:
                            var13 = var14;
                            if (!var14) {
                                _fun35114_ip = 161;
                                continue _fun35114
                            }
                        case 145:
                            var14 = global;
                            var14 = var14.window;
                            var13 = var14.__REDUX_DEVTOOLS_EXTENSION__;
                        case 161:
                            var9 = var13;
                        case 164: // try_end0
                            _fun35114_ip = 168;
                            continue _fun35114;
                        case 166: // catch_target0
                            CatchBlockStart(arg_register = 13);
                        case 168:
                            var13 = var9;
                            if (var13) {
                                _fun35114_ip = 196;
                                continue _fun35114
                            }
                        case 174:
                            var15 = _closure2_slot0;
                            var14 = var12;
                            var13 = var6;
                            var12 = var3;
                            var12 = var15.bind(var10)(var14, var13, var12);
                            return var12;
                        case 196:
                            var16 = var11;
                            var13 = var9;
                            var12 = var8;
                            if (!(var10 !== var16)) {
                                _fun35114_ip = 353;
                                continue _fun35114
                            }
                        case 212:
                            var11 = _closure1_slot5;
                            var9 = var11.get;
                            var8 = var12.name;
                            var15 = var9.bind(var11)(var8);
                            var14 = {};
                            if (var15) {
                                _fun35114_ip = 317;
                                continue _fun35114
                            }
                        case 236:
                            var8 = var13.connect;
                            var8 = var8.bind(var13)(var12);
                            var14.connection = var8;
                            var8 = {};
                            var14.stores = var8;
                            var11 = _closure1_slot5;
                            var9 = var11.set;
                            var8 = var12.name;
                            var8 = var9.bind(var11)(var8, var14);
                            var8 = global;
                            var11 = var8.Object;
                            var9 = var11.assign;
                            var8 = {};
                            var17 = 'tracked';
                            var8.type = var17;
                            var8.store = var16;
                            var9 = var9.bind(var11)(var8, var14);
                            _fun35114_ip = 384;
                            continue _fun35114;
                        case 317:
                            var8 = global;
                            var11 = var8.Object;
                            var8 = var11.assign;
                            var17 = 'tracked';
                            var14.type = var17;
                            var14.store = var16;
                            var9 = var8.bind(var11)(var14, var15);
                            _fun35114_ip = 384;
                            continue _fun35114;
                        case 353:
                            var8 = {};
                            var11 = 'untracked';
                            var8.type = var11;
                            var11 = var13.connect;
                            var11 = var11.bind(var13)(var12);
                            var8.connection = var11;
                            var9 = var8;
                        case 384:
                            var8 = var9.connection;
                            var2 = var8;
                            var _closure3_slot6 = var8;
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot4;
                            var5 = var8.bind(var10)(var9, var5);
                            var4 = var5;
                            var _closure3_slot7 = var5;
                            var8 = true;
                            var _closure3_slot8 = var8;
                            var9 = var3;
                            var8 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun35115: for (var _fun35115_ip = 0;;) switch (_fun35115_ip) {
                                    case 0:
                                        var3 = arg2;
                                        var4 = _closure3_slot0;
                                        var5 = undefined;
                                        var2 = arg0;
                                        var0 = arg1;
                                        var0 = var4.bind(var5)(var2, var0);
                                        var2 = _closure3_slot8;
                                        if (var2) {
                                            _fun35115_ip = 33;
                                            continue _fun35115
                                        }
                                    case 31:
                                        return var0;
                                    case 33:
                                        if (!(var5 !== var3)) {
                                            _fun35115_ip = 62;
                                            continue _fun35115
                                        }
                                    case 37:
                                        var6 = 'string';
                                        var2 = typeof var3;
                                        var4 = var3;
                                        if (!(var6 === var2)) {
                                            _fun35115_ip = 60;
                                            continue _fun35115
                                        }
                                    case 51:
                                        var2 = {};
                                        var2.type = var3;
                                        var4 = var2;
                                    case 60:
                                        _fun35115_ip = 133;
                                        continue _fun35115;
                                    case 62:
                                        var2 = {};
                                        var3 = _closure3_slot3;
                                        if (var3) {
                                            _fun35115_ip = 117;
                                            continue _fun35115
                                        }
                                    case 71:
                                        var7 = _closure1_slot7;
                                        var6 = global;
                                        var6 = var6.Error;
                                        var8 = var6.prototype;
                                        var8 = Object.create(var8, {
                                            constructor: {
                                                value: var6
                                            }
                                        });
                                        var18 = var8;
                                        var6 = new var18[var6](var17);
                                        var6 = var6 instanceof Object ? var6 : var8;
                                        var6 = var6.stack;
                                        var3 = var7.bind(var5)(var6);
                                    case 117:
                                        if (var3) {
                                            _fun35115_ip = 126;
                                            continue _fun35115
                                        }
                                    case 120:
                                        var3 = 'anonymous';
                                    case 126:
                                        var2.type = var3;
                                        var4 = var2;
                                    case 133:
                                        var2 = _closure3_slot4;
                                        if (!(var5 !== var2)) {
                                            _fun35115_ip = 306;
                                            continue _fun35115
                                        }
                                    case 144:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun35115_ip = 340;
                                            continue _fun35115
                                        }
                                    case 157:
                                        var7 = _closure3_slot6;
                                        var6 = var7.send;
                                        var2 = global;
                                        var10 = var2.Object;
                                        var9 = var10.assign;
                                        var8 = {};
                                        var13 = _closure3_slot4;
                                        var14 = var4.type;
                                        var3 = var2.HermesInternal;
                                        var12 = var3.concat;
                                        var11 = '';
                                        var3 = '/';
                                        var3 = var12.bind(var11)(var13, var3, var14);
                                        var8.type = var3;
                                        var3 = {};
                                        var3 = var9.bind(var10)(var3, var4, var8);
                                        var11 = var2.Object;
                                        var10 = var11.assign;
                                        var9 = _closure1_slot6;
                                        var8 = _closure3_slot5;
                                        var8 = var8.name;
                                        var9 = var9.bind(var5)(var8);
                                        var12 = _closure1_slot0;
                                        var8 = _closure3_slot2;
                                        var2 = var8.getState;
                                        var8 = var2.bind(var8)();
                                        var2 = {};
                                        var8 = var12.bind(var5)(var2, var13, var8);
                                        var2 = {};
                                        var2 = var10.bind(var11)(var2, var9, var8);
                                        var2 = var6.bind(var7)(var3, var2);
                                        _fun35115_ip = 340;
                                        continue _fun35115;
                                    case 306:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun35115_ip = 340;
                                            continue _fun35115
                                        }
                                    case 316:
                                        var3 = _closure3_slot6;
                                        var2 = var3.send;
                                        var1 = _closure3_slot1;
                                        var1 = var1.bind(var5)();
                                        var1 = var2.bind(var3)(var4, var1);
                                    case 340:
                                        return var0;
                                }
                            };
                            var9.setState = var8;
                            var8 = {};
                            var11 = function() { // Original name: cleanup, environment: var1
                                _fun35116: for (var _fun35116_ip = 0;;) switch (_fun35116_ip) {
                                    case 0:
                                        var1 = _closure3_slot6;
                                        if (!var1) {
                                            _fun35116_ip = 31;
                                            continue _fun35116
                                        }
                                    case 10:
                                        var2 = _closure3_slot6;
                                        var2 = var2.unsubscribe;
                                        var3 = 'function';
                                        var2 = typeof var2;
                                        var1 = var3 === var2;
                                    case 31:
                                        if (!var1) {
                                            _fun35116_ip = 48;
                                            continue _fun35116
                                        }
                                    case 34:
                                        var2 = _closure3_slot6;
                                        var1 = var2.unsubscribe;
                                        var1 = var1.bind(var2)();
                                    case 48:
                                        var1 = _closure3_slot5;
                                        var3 = var1.name;
                                        var5 = _closure3_slot4;
                                        var0 = undefined;
                                        if (!(var0 !== var5)) {
                                            _fun35116_ip = 146;
                                            continue _fun35116
                                        }
                                    case 67:
                                        var4 = _closure1_slot5;
                                        var2 = var4.get;
                                        var2 = var2.bind(var4)(var3);
                                        if (!var2) {
                                            _fun35116_ip = 146;
                                            continue _fun35116
                                        }
                                    case 87:
                                        var4 = var2.stores;
                                        var4 = delete var4[var5];
                                        var4 = global;
                                        var5 = var4.Object;
                                        var4 = var5.keys;
                                        var2 = var2.stores;
                                        var2 = var4.bind(var5)(var2);
                                        var4 = var2.length;
                                        var2 = 0;
                                        if (!(var2 === var4)) {
                                            _fun35116_ip = 146;
                                            continue _fun35116
                                        }
                                    case 132:
                                        var2 = _closure1_slot5;
                                        var1 = var2.delete;
                                        var1 = var1.bind(var2)(var3);
                                    case 146:
                                        return var0;
                                }
                            };
                            var8.cleanup = var11;
                            var9.devtools = var8;
                            var8 = function() { // Original name: setStateFromDevtools, environment: var1
                                var0 = undefined;
                                var3 = undefined;
                                var1 = _closure3_slot8;
                                var4 = false;
                                _closure3_slot8 = var4;
                                var5 = _closure3_slot0;
                                var4 = var5.apply;
                                var3 = arguments;
                                var3 = var4.bind(var5)(var0, var3);
                                _closure3_slot8 = var1;
                                return var0;
                            };
                            var _closure3_slot9 = var8;
                            var8 = _closure2_slot0;
                            var7 = var9.setState;
                            var6 = var8.bind(var10)(var7, var6, var9);
                            var0 = var6;
                            var _closure3_slot10 = var6;
                            var6 = var5.type;
                            var5 = 'untracked';
                            if (!(var5 !== var6)) {
                                _fun35114_ip = 608;
                                continue _fun35114
                            }
                        case 504:
                            var5 = var4;
                            var7 = var5.stores;
                            var6 = var5.store;
                            var5 = var3;
                            var7[var6] = var5;
                            var6 = var2;
                            var5 = null;
                            if (!(var5 != var6)) {
                                _fun35114_ip = 634;
                                continue _fun35114
                            }
                        case 535:
                            var6 = var2;
                            var5 = var6.init;
                            var9 = global;
                            var8 = var9.Object;
                            var7 = var8.fromEntries;
                            var10 = var9.Object;
                            var9 = var10.entries;
                            var4 = var4.stores;
                            var10 = var9.bind(var10)(var4);
                            var9 = var10.map;
                            var4 = function(arg0) { // Environment: var1
                                _fun35118: for (var _fun35118_ip = 0;;) switch (_fun35118_ip) {
                                    case 0:
                                        var3 = _closure1_slot2;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = 2;
                                        var1 = var3.bind(var2)(var1, var0);
                                        var0 = 0;
                                        var4 = var1[var0];
                                        var0 = 1;
                                        var3 = var1[var0];
                                        var0 = new Array(2);
                                        var0[0] = var4;
                                        var1 = _closure3_slot7;
                                        var1 = var1.store;
                                        if (!(var4 !== var1)) {
                                            _fun35118_ip = 71;
                                            continue _fun35118
                                        }
                                    case 59:
                                        var1 = var3.getState;
                                        var1 = var1.bind(var3)();
                                        _fun35118_ip = 75;
                                        continue _fun35118;
                                    case 71:
                                        var1 = _closure3_slot10;
                                    case 75:
                                        var0[1] = var1;
                                        return var0;
                                }
                            };
                            var4 = var9.bind(var10)(var4);
                            var4 = var7.bind(var8)(var4);
                            var4 = var5.bind(var6)(var4);
                            _fun35114_ip = 634;
                            continue _fun35114;
                        case 608:
                            var5 = var2;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun35114_ip = 634;
                                continue _fun35114
                            }
                        case 617:
                            var6 = var2;
                            var5 = var6.init;
                            var4 = var0;
                            var4 = var5.bind(var6)(var4);
                        case 634:
                            var4 = var3;
                            var4 = var4.dispatchFromDevtools;
                            if (!var4) {
                                _fun35114_ip = 688;
                                continue _fun35114
                            }
                        case 646:
                            var4 = var3;
                            var4 = var4.dispatch;
                            var5 = 'function';
                            var4 = typeof var4;
                            if (!(var5 === var4)) {
                                _fun35114_ip = 688;
                                continue _fun35114
                            }
                        case 665:
                            var4 = var3;
                            var3 = var4.dispatch;
                            var _closure3_slot11 = var3;
                            var3 = function() { // Environment: var1
                                _fun35119: for (var _fun35119_ip = 0;;) switch (_fun35119_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var4 = undefined;
                                        var2 = arguments.length;
                                        var1 = global;
                                        var1 = var1.Array;
                                        var3 = var1.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var8 = var3;
                                        var7 = var2;
                                        var1 = new var8[var1](var7, var6);
                                        var3 = var1 instanceof Object ? var1 : var3;
                                        var1 = 0;
                                        var5 = var1 < var2;
                                        if (!var5) {
                                            _fun35119_ip = 62;
                                            continue _fun35119
                                        }
                                    case 47:
                                        var5 = arguments[var1];
                                        var3[var1] = var5;
                                        var1 = var1 + 1;
                                        if (var1 < var2) {
                                            _fun35119_ip = 47;
                                            continue _fun35119
                                        }
                                    case 62:
                                        var2 = _closure3_slot11;
                                        var1 = var2.apply;
                                        var1 = var1.bind(var2)(var0, var3);
                                        return var0;
                                }
                            };
                            var4.dispatch = var3;
                        case 688:
                            var3 = var2;
                            var2 = var3.subscribe;
                            var1 = function(arg0) { // Environment: var1
                                _fun35120: for (var _fun35120_ip = 0;;) switch (_fun35120_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.type;
                                        var2 = 'ACTION';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 570;
                                            continue _fun35120
                                        }
                                    case 21:
                                        var2 = 'DISPATCH';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 33;
                                            continue _fun35120
                                        }
                                    case 29:
                                        var2 = undefined;
                                        return var2;
                                    case 33:
                                        var2 = var0.payload;
                                        var3 = var2.type;
                                        var2 = 'RESET';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 442;
                                            continue _fun35120
                                        }
                                    case 55:
                                        var2 = 'COMMIT';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 330;
                                            continue _fun35120
                                        }
                                    case 68:
                                        var2 = 'ROLLBACK';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 303;
                                            continue _fun35120
                                        }
                                    case 81:
                                        var2 = 'JUMP_TO_STATE';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 276;
                                            continue _fun35120
                                        }
                                    case 94:
                                        var2 = 'JUMP_TO_ACTION';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 276;
                                            continue _fun35120
                                        }
                                    case 107:
                                        var2 = 'IMPORT_STATE';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 147;
                                            continue _fun35120
                                        }
                                    case 117:
                                        var2 = 'PAUSE_RECORDING';
                                        if (!(var2 !== var3)) {
                                            _fun35120_ip = 131;
                                            continue _fun35120
                                        }
                                    case 127:
                                        var2 = undefined;
                                        return var2;
                                    case 131:
                                        var2 = _closure3_slot8;
                                        var2 = !var2;
                                        _closure3_slot8 = var2;
                                        return var2;
                                    case 147:
                                        var2 = var0.payload;
                                        var6 = var2.nextLiftedState;
                                        var4 = var6.computedStates;
                                        var3 = var4.slice;
                                        var2 = -1;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = 0;
                                        var2 = var3[var2];
                                        var5 = null;
                                        var3 = var5 == var2;
                                        var7 = undefined;
                                        var9 = undefined;
                                        if (var3) {
                                            _fun35120_ip = 209;
                                            continue _fun35120
                                        }
                                    case 204:
                                        var9 = var2.state;
                                    case 209:
                                        if (var9) {
                                            _fun35120_ip = 214;
                                            continue _fun35120
                                        }
                                    case 212:
                                        return var7;
                                    case 214:
                                        var4 = _closure3_slot9;
                                        var8 = _closure3_slot4;
                                        var2 = var9;
                                        if (!(var7 !== var8)) {
                                            _fun35120_ip = 240;
                                            continue _fun35120
                                        }
                                    case 232:
                                        var8 = _closure3_slot4;
                                        var2 = var9[var8];
                                    case 240:
                                        var2 = var4.bind(var7)(var2);
                                        var2 = _closure3_slot6;
                                        var2 = var5 == var2;
                                        if (var2) {
                                            _fun35120_ip = 272;
                                            continue _fun35120
                                        }
                                    case 256:
                                        var4 = _closure3_slot6;
                                        var3 = var4.send;
                                        var2 = var3.bind(var4)(var5, var6);
                                    case 272:
                                        var2 = undefined;
                                        return var2;
                                    case 276:
                                        var5 = _closure1_slot8;
                                        var4 = var0.state;
                                        var2 = undefined;
                                        var3 = function(arg0) { // Environment: var1
                                            _fun35123: for (var _fun35123_ip = 0;;) switch (_fun35123_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var2 = _closure3_slot4;
                                                    var0 = undefined;
                                                    if (!(var0 === var2)) {
                                                        _fun35123_ip = 27;
                                                        continue _fun35123
                                                    }
                                                case 16:
                                                    var2 = _closure3_slot9;
                                                    var2 = var2.bind(var0)(var3);
                                                    _fun35123_ip = 106;
                                                    continue _fun35123;
                                                case 27:
                                                    var2 = global;
                                                    var6 = var2.JSON;
                                                    var5 = var6.stringify;
                                                    var7 = _closure3_slot2;
                                                    var4 = var7.getState;
                                                    var4 = var4.bind(var7)();
                                                    var4 = var5.bind(var6)(var4);
                                                    var6 = var2.JSON;
                                                    var5 = var6.stringify;
                                                    var2 = _closure3_slot4;
                                                    var2 = var3[var2];
                                                    var2 = var5.bind(var6)(var2);
                                                    if (!(var4 !== var2)) {
                                                        _fun35123_ip = 106;
                                                        continue _fun35123
                                                    }
                                                case 89:
                                                    var2 = _closure3_slot9;
                                                    var1 = _closure3_slot4;
                                                    var1 = var3[var1];
                                                    var1 = var2.bind(var0)(var1);
                                                case 106:
                                                    return var0;
                                            }
                                        };
                                        var3 = var5.bind(var2)(var4, var3);
                                        return var2;
                                    case 303:
                                        var5 = _closure1_slot8;
                                        var4 = var0.state;
                                        var2 = undefined;
                                        var3 = function(arg0) { // Environment: var1
                                            _fun35122: for (var _fun35122_ip = 0;;) switch (_fun35122_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var0 = _closure3_slot4;
                                                    var2 = undefined;
                                                    if (!(var2 !== var0)) {
                                                        _fun35122_ip = 81;
                                                        continue _fun35122
                                                    }
                                                case 16:
                                                    var4 = _closure3_slot9;
                                                    var0 = _closure3_slot4;
                                                    var0 = var3[var0];
                                                    var0 = var4.bind(var2)(var0);
                                                    var4 = _closure3_slot6;
                                                    var0 = null;
                                                    if (!(var0 != var4)) {
                                                        _fun35122_ip = 79;
                                                        continue _fun35122
                                                    }
                                                case 43:
                                                    var5 = _closure3_slot6;
                                                    var4 = var5.init;
                                                    var6 = _closure1_slot6;
                                                    var0 = _closure3_slot5;
                                                    var0 = var0.name;
                                                    var0 = var6.bind(var2)(var0);
                                                    var0 = var4.bind(var5)(var0);
                                                case 79:
                                                    return var2;
                                                case 81:
                                                    var0 = _closure3_slot9;
                                                    var0 = var0.bind(var2)(var3);
                                                    var2 = _closure3_slot6;
                                                    var0 = null;
                                                    var0 = var0 == var2;
                                                    if (var0) {
                                                        _fun35122_ip = 132;
                                                        continue _fun35122
                                                    }
                                                case 103:
                                                    var3 = _closure3_slot6;
                                                    var2 = var3.init;
                                                    var4 = _closure3_slot2;
                                                    var1 = var4.getState;
                                                    var1 = var1.bind(var4)();
                                                    var0 = var2.bind(var3)(var1);
                                                case 132:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var3 = var5.bind(var2)(var4, var3);
                                        return var2;
                                    case 330:
                                        var2 = _closure3_slot4;
                                        var8 = undefined;
                                        if (!(var8 !== var2)) {
                                            _fun35120_ip = 396;
                                            continue _fun35120
                                        }
                                    case 343:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        var3 = var2 == var3;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun35120_ip = 394;
                                            continue _fun35120
                                        }
                                    case 358:
                                        var6 = _closure3_slot6;
                                        var5 = var6.init;
                                        var7 = _closure1_slot6;
                                        var3 = _closure3_slot5;
                                        var3 = var3.name;
                                        var3 = var7.bind(var8)(var3);
                                        var2 = var5.bind(var6)(var3);
                                    case 394:
                                        _fun35120_ip = 440;
                                        continue _fun35120;
                                    case 396:
                                        var5 = _closure3_slot6;
                                        var3 = null;
                                        var3 = var3 == var5;
                                        if (var3) {
                                            _fun35120_ip = 438;
                                            continue _fun35120
                                        }
                                    case 409:
                                        var6 = _closure3_slot6;
                                        var5 = var6.init;
                                        var7 = _closure3_slot2;
                                        var4 = var7.getState;
                                        var4 = var4.bind(var7)();
                                        var3 = var5.bind(var6)(var4);
                                    case 438:
                                        var2 = undefined;
                                    case 440:
                                        return var2;
                                    case 442:
                                        var5 = _closure3_slot9;
                                        var2 = _closure3_slot10;
                                        var3 = undefined;
                                        var2 = var5.bind(var3)(var2);
                                        var2 = _closure3_slot4;
                                        if (!(var3 !== var2)) {
                                            _fun35120_ip = 521;
                                            continue _fun35120
                                        }
                                    case 468:
                                        var5 = _closure3_slot6;
                                        var2 = null;
                                        var5 = var2 == var5;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun35120_ip = 519;
                                            continue _fun35120
                                        }
                                    case 483:
                                        var7 = _closure3_slot6;
                                        var6 = var7.init;
                                        var8 = _closure1_slot6;
                                        var5 = _closure3_slot5;
                                        var5 = var5.name;
                                        var5 = var8.bind(var3)(var5);
                                        var2 = var6.bind(var7)(var5);
                                    case 519:
                                        _fun35120_ip = 568;
                                        continue _fun35120;
                                    case 521:
                                        var6 = _closure3_slot6;
                                        var5 = null;
                                        var5 = var5 == var6;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun35120_ip = 565;
                                            continue _fun35120
                                        }
                                    case 536:
                                        var6 = _closure3_slot6;
                                        var5 = var6.init;
                                        var7 = _closure3_slot2;
                                        var4 = var7.getState;
                                        var4 = var4.bind(var7)();
                                        var3 = var5.bind(var6)(var4);
                                    case 565:
                                        var2 = var3;
                                    case 568:
                                        return var2;
                                    case 570:
                                        var2 = var0.payload;
                                        var3 = 'string';
                                        var2 = typeof var2;
                                        if (!(var3 === var2)) {
                                            _fun35120_ip = 615;
                                            continue _fun35120
                                        }
                                    case 587:
                                        var3 = _closure1_slot8;
                                        var2 = var0.payload;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun35121: for (var _fun35121_ip = 0;;) switch (_fun35121_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = var2.type;
                                                    var0 = '__setState';
                                                    if (!(var0 === var1)) {
                                                        _fun35121_ip = 196;
                                                        continue _fun35121
                                                    }
                                                case 21:
                                                    var1 = _closure3_slot4;
                                                    var3 = undefined;
                                                    if (!(var3 !== var1)) {
                                                        _fun35121_ip = 178;
                                                        continue _fun35121
                                                    }
                                                case 37:
                                                    var1 = global;
                                                    var6 = var1.Object;
                                                    var5 = var6.keys;
                                                    var4 = var2.state;
                                                    var4 = var5.bind(var6)(var4);
                                                    var5 = var4.length;
                                                    var4 = 1;
                                                    if (!(var4 !== var5)) {
                                                        _fun35121_ip = 94;
                                                        continue _fun35121
                                                    }
                                                case 72:
                                                    var6 = var1.console;
                                                    var5 = var6.error;
                                                    var4 = '\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ';
                                                    var4 = var5.bind(var6)(var4);
                                                case 94:
                                                    var5 = var2.state;
                                                    var4 = _closure3_slot4;
                                                    var4 = var5[var4];
                                                    var5 = null;
                                                    if (!(var5 != var4)) {
                                                        _fun35121_ip = 176;
                                                        continue _fun35121
                                                    }
                                                case 113:
                                                    var7 = var1.JSON;
                                                    var6 = var7.stringify;
                                                    var8 = _closure3_slot2;
                                                    var5 = var8.getState;
                                                    var5 = var5.bind(var8)();
                                                    var5 = var6.bind(var7)(var5);
                                                    var6 = var1.JSON;
                                                    var1 = var6.stringify;
                                                    var1 = var1.bind(var6)(var4);
                                                    if (!(var5 !== var1)) {
                                                        _fun35121_ip = 249;
                                                        continue _fun35121
                                                    }
                                                case 165:
                                                    var1 = _closure3_slot9;
                                                    var1 = var1.bind(var3)(var4);
                                                    _fun35121_ip = 249;
                                                    continue _fun35121;
                                                case 176:
                                                    return var3;
                                                case 178:
                                                    var1 = _closure3_slot9;
                                                    var0 = var2.state;
                                                    var0 = var1.bind(var3)(var0);
                                                    var0 = undefined;
                                                    return var0;
                                                case 196:
                                                    var1 = _closure3_slot2;
                                                    var1 = var1.dispatchFromDevtools;
                                                    if (!var1) {
                                                        _fun35121_ip = 232;
                                                        continue _fun35121
                                                    }
                                                case 212:
                                                    var3 = _closure3_slot2;
                                                    var3 = var3.dispatch;
                                                    var4 = 'function';
                                                    var3 = typeof var3;
                                                    var1 = var4 === var3;
                                                case 232:
                                                    if (!var1) {
                                                        _fun35121_ip = 249;
                                                        continue _fun35121
                                                    }
                                                case 235:
                                                    var1 = _closure3_slot2;
                                                    var0 = var1.dispatch;
                                                    var0 = var0.bind(var1)(var2);
                                                case 249:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var3.bind(var0)(var2, var1);
                                        _fun35120_ip = 641;
                                        continue _fun35120;
                                    case 615:
                                        var1 = global;
                                        var3 = var1.console;
                                        var2 = var3.error;
                                        var1 = '[zustand devtools middleware] Unsupported action format';
                                        var1 = var2.bind(var3)(var1);
                                        var0 = undefined;
                                    case 641:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.devtools = var3;
    var3 = function(arg0, arg1) { // Original name: persistImpl, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            _fun35136: for (var _fun35136_ip = 0;;) switch (_fun35136_ip) {
                case 0:
                    var4 = arg1;
                    var5 = arg2;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var4;
                    var6 = global;
                    var9 = var6.Object;
                    var8 = var9.assign;
                    var7 = {};
                    var2 = _closure1_slot10;
                    var3 = undefined;
                    var1 = function() { // Environment: var0
                        var0 = global;
                        var0 = var0.localStorage;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var7.storage = var1;
                    var1 = function(arg0) { // Original name: partialize, environment: var0
                        var0 = arg0;
                        return var0;
                    };
                    var7.partialize = var1;
                    var1 = 0;
                    var7.version = var1;
                    var1 = function(arg0, arg1) { // Original name: merge, environment: var0
                        var0 = global;
                        var4 = var0.Object;
                        var3 = var4.assign;
                        var2 = {};
                        var1 = arg1;
                        var0 = arg0;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var7.merge = var1;
                    var2 = _closure2_slot1;
                    var2 = var8.bind(var9)(var7, var2);
                    var _closure3_slot2 = var2;
                    var7 = false;
                    var _closure3_slot3 = var7;
                    var7 = var6.Set;
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var8;
                    var7 = new var13[var7](var12);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var _closure3_slot4 = var7;
                    var6 = var6.Set;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = var7;
                    var6 = new var13[var6](var12);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var _closure3_slot5 = var6;
                    var2 = var2.storage;
                    var _closure3_slot6 = var2;
                    if (var2) {
                        _fun35136_ip = 199;
                        continue _fun35136
                    }
                case 181:
                    var6 = _closure2_slot0;
                    var2 = function() { // Environment: var0
                        var0 = undefined;
                        var1 = undefined;
                        var3 = global;
                        var5 = var3.console;
                        var4 = var5.warn;
                        var6 = _closure3_slot2;
                        var8 = var6.name;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = "[zustand persist middleware] Unable to update item '";
                        var3 = "', the given storage is currently unavailable.";
                        var3 = var7.bind(var6)(var8, var3);
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var1 = arguments;
                        var1 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var2 = var6.bind(var3)(var2, var4, var5);
                    return var2;
                case 199:
                    var2 = function() { // Original name: setItem, environment: var0
                        var2 = _closure3_slot2;
                        var1 = var2.partialize;
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var3 = _closure3_slot1;
                        var0 = undefined;
                        var3 = var3.bind(var0)();
                        var0 = {};
                        var0 = var5.bind(var6)(var0, var3);
                        var5 = var1.bind(var2)(var0);
                        var3 = _closure3_slot6;
                        var2 = var3.setItem;
                        var0 = _closure3_slot2;
                        var1 = var0.name;
                        var0 = {};
                        var0.state = var5;
                        var4 = _closure3_slot2;
                        var4 = var4.version;
                        var0.version = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var _closure3_slot7 = var2;
                    var2 = var5.setState;
                    var _closure3_slot8 = var2;
                    var2 = function(arg0, arg1) { // Environment: var0
                        var4 = _closure3_slot8;
                        var1 = undefined;
                        var3 = arg0;
                        var2 = arg1;
                        var2 = var4.bind(var1)(var3, var2);
                        var0 = _closure3_slot7;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5.setState = var2;
                    var2 = _closure2_slot0;
                    var1 = function() { // Environment: var0
                        var1 = undefined;
                        var2 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var2 = arguments;
                        var2 = var3.bind(var4)(var1, var2);
                        var0 = _closure3_slot7;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1, var4, var5);
                    var _closure3_slot10 = var1;
                    var2 = function() { // Environment: var0
                        var0 = _closure3_slot10;
                        return var0;
                    };
                    var5.getInitialState = var2;
                    var2 = function() { // Original name: hydrate, environment: var0
                        _fun35145: for (var _fun35145_ip = 0;;) switch (_fun35145_ip) {
                            case 0:
                                var2 = _closure3_slot6;
                                if (var2) {
                                    _fun35145_ip = 16;
                                    continue _fun35145
                                }
                            case 12:
                                var2 = undefined;
                                return var2;
                            case 16:
                                var2 = false;
                                _closure3_slot3 = var2;
                                var4 = _closure3_slot4;
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var0
                                    _fun35146: for (var _fun35146_ip = 0;;) switch (_fun35146_ip) {
                                        case 0:
                                            var1 = _closure3_slot1;
                                            var2 = undefined;
                                            var1 = var1.bind(var2)();
                                            var3 = null;
                                            if (!(var3 == var1)) {
                                                _fun35146_ip = 23;
                                                continue _fun35146
                                            }
                                        case 19:
                                            var1 = _closure3_slot10;
                                        case 23:
                                            var0 = arg0;
                                            var0 = var0.bind(var2)(var1);
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure3_slot2;
                                var7 = var2.onRehydrateStorage;
                                var8 = null;
                                var4 = var8 == var7;
                                var3 = undefined;
                                var2 = undefined;
                                if (var4) {
                                    _fun35145_ip = 97;
                                    continue _fun35145
                                }
                            case 66:
                                var6 = var7.call;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var4.bind(var3)();
                                if (!(var8 == var4)) {
                                    _fun35145_ip = 91;
                                    continue _fun35145
                                }
                            case 87:
                                var4 = _closure3_slot10;
                            case 91:
                                var2 = var6.bind(var7)(var5, var4);
                            case 97:
                                if (var2) {
                                    _fun35145_ip = 102;
                                    continue _fun35145
                                }
                            case 100:
                                var2 = undefined;
                            case 102:
                                var _closure4_slot0 = var2;
                                var4 = _closure1_slot9;
                                var2 = _closure3_slot6;
                                var6 = var2.getItem;
                                var5 = var6.bind;
                                var2 = _closure3_slot6;
                                var2 = var5.bind(var6)(var2);
                                var2 = var4.bind(var3)(var2);
                                var1 = _closure3_slot2;
                                var1 = var1.name;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    _fun35147: for (var _fun35147_ip = 0;;) switch (_fun35147_ip) {
                                        case 0:
                                            var1 = arg0;
                                            if (!var1) {
                                                _fun35147_ip = 89;
                                                continue _fun35147
                                            }
                                        case 6:
                                            var0 = var1.version;
                                            var2 = 'number';
                                            var0 = typeof var0;
                                            if (!(var2 === var0)) {
                                                _fun35147_ip = 184;
                                                continue _fun35147
                                            }
                                        case 26:
                                            var3 = var1.version;
                                            var2 = _closure3_slot2;
                                            var2 = var2.version;
                                            if (!(var3 !== var2)) {
                                                _fun35147_ip = 184;
                                                continue _fun35147
                                            }
                                        case 52:
                                            var2 = _closure3_slot2;
                                            var2 = var2.migrate;
                                            if (var2) {
                                                _fun35147_ip = 107;
                                                continue _fun35147
                                            }
                                        case 65:
                                            var2 = global;
                                            var4 = var2.console;
                                            var3 = var4.error;
                                            var2 = "State loaded from storage couldn't be migrated since no migrate function was provided";
                                            var2 = var3.bind(var4)(var2);
                                        case 89:
                                            var2 = new Array(2);
                                            var3 = false;
                                            var2[0] = var3;
                                            var3 = undefined;
                                            var2[1] = var3;
                                            return var2;
                                        case 107:
                                            var4 = _closure3_slot2;
                                            var3 = var4.migrate;
                                            var2 = var1.state;
                                            var0 = var1.version;
                                            var4 = var3.bind(var4)(var2, var0);
                                            var0 = global;
                                            var0 = var0.Promise;
                                            var0 = var4 instanceof var0;
                                            if (var0) {
                                                _fun35147_ip = 165;
                                                continue _fun35147
                                            }
                                        case 149:
                                            var0 = new Array(2);
                                            var2 = true;
                                            var0[0] = var2;
                                            var0[1] = var4;
                                            _fun35147_ip = 182;
                                            continue _fun35147;
                                        case 165:
                                            var3 = var4.then;
                                            var2 = function(arg0) { // Environment: var2
                                                var0 = new Array(2);
                                                var1 = true;
                                                var0[0] = var1;
                                                var1 = arg0;
                                                var0[1] = var1;
                                                return var0;
                                            };
                                            var0 = var3.bind(var4)(var2);
                                        case 182:
                                            return var0;
                                        case 184:
                                            var0 = new Array(2);
                                            var2 = false;
                                            var0[0] = var2;
                                            var1 = var1.state;
                                            var0[1] = var1;
                                            return var0;
                                    }
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    _fun35149: for (var _fun35149_ip = 0;;) switch (_fun35149_ip) {
                                        case 0:
                                            var3 = _closure1_slot2;
                                            var1 = undefined;
                                            var2 = arg0;
                                            var0 = 2;
                                            var3 = var3.bind(var1)(var2, var0);
                                            var0 = 0;
                                            var2 = var3[var0];
                                            var0 = 1;
                                            var6 = var3[var0];
                                            var5 = _closure3_slot2;
                                            var4 = var5.merge;
                                            var3 = _closure3_slot1;
                                            var3 = var3.bind(var1)();
                                            var7 = null;
                                            if (!(var7 == var3)) {
                                                _fun35149_ip = 65;
                                                continue _fun35149
                                            }
                                        case 61:
                                            var3 = _closure3_slot10;
                                        case 65:
                                            var5 = var4.bind(var5)(var6, var3);
                                            var _closure3_slot9 = var5;
                                            var4 = _closure3_slot0;
                                            var3 = true;
                                            var3 = var4.bind(var1)(var5, var3);
                                            if (var2) {
                                                _fun35149_ip = 92;
                                                continue _fun35149
                                            }
                                        case 90:
                                            return var1;
                                        case 92:
                                            var0 = _closure3_slot7;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                    }
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.then;
                                var1 = function() { // Environment: var0
                                    _fun35150: for (var _fun35150_ip = 0;;) switch (_fun35150_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun35150_ip = 32;
                                                continue _fun35150
                                            }
                                        case 13:
                                            var2 = _closure4_slot0;
                                            var1 = _closure3_slot9;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1, var0);
                                        case 32:
                                            var2 = _closure3_slot1;
                                            var0 = undefined;
                                            var2 = var2.bind(var0)();
                                            _closure3_slot9 = var2;
                                            var2 = true;
                                            _closure3_slot3 = var2;
                                            var3 = _closure3_slot5;
                                            var2 = var3.forEach;
                                            var1 = function(arg0) { // Environment: var1
                                                var2 = _closure3_slot9;
                                                var1 = arg0;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                                return var0;
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.catch;
                                var0 = function(arg0) { // Environment: var0
                                    _fun35152: for (var _fun35152_ip = 0;;) switch (_fun35152_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun35152_ip = 28;
                                                continue _fun35152
                                            }
                                        case 13:
                                            var2 = _closure4_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var2.bind(var1)(var1, var0);
                                        case 28:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var _closure3_slot11 = var2;
                    var4 = {};
                    var6 = function(arg0) { // Original name: setOptions, environment: var0
                        _fun35153: for (var _fun35153_ip = 0;;) switch (_fun35153_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = global;
                                var5 = var1.Object;
                                var4 = var5.assign;
                                var3 = _closure3_slot2;
                                var2 = {};
                                var2 = var4.bind(var5)(var2, var3, var0);
                                _closure3_slot2 = var2;
                                var2 = var0.storage;
                                if (!var2) {
                                    _fun35153_ip = 55;
                                    continue _fun35153
                                }
                            case 45:
                                var0 = var0.storage;
                                _closure3_slot6 = var0;
                            case 55:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.setOptions = var6;
                    var6 = function() { // Original name: clearStorage, environment: var0
                        _fun35154: for (var _fun35154_ip = 0;;) switch (_fun35154_ip) {
                            case 0:
                                var2 = _closure3_slot6;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun35154_ip = 37;
                                    continue _fun35154
                                }
                            case 13:
                                var2 = _closure3_slot6;
                                var1 = var2.removeItem;
                                var0 = _closure3_slot2;
                                var0 = var0.name;
                                var0 = var1.bind(var2)(var0);
                            case 37:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.clearStorage = var6;
                    var6 = function() { // Original name: getOptions, environment: var0
                        var0 = _closure3_slot2;
                        return var0;
                    };
                    var4.getOptions = var6;
                    var6 = function() { // Original name: rehydrate, environment: var0
                        var1 = _closure3_slot11;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var4.rehydrate = var6;
                    var6 = function() { // Original name: hasHydrated, environment: var0
                        var0 = _closure3_slot3;
                        return var0;
                    };
                    var4.hasHydrated = var6;
                    var6 = function(arg0) { // Original name: onHydrate, environment: var0
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var2 = _closure3_slot4;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var0 = function() { // Environment: var0
                            var2 = _closure3_slot4;
                            var1 = var2.delete;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                    };
                    var4.onHydrate = var6;
                    var6 = function(arg0) { // Original name: onFinishHydration, environment: var0
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var2 = _closure3_slot5;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var0 = function() { // Environment: var0
                            var2 = _closure3_slot5;
                            var1 = var2.delete;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                    };
                    var4.onFinishHydration = var6;
                    var5.persist = var4;
                    var4 = _closure3_slot2;
                    var4 = var4.skipHydration;
                    if (var4) {
                        _fun35136_ip = 376;
                        continue _fun35136
                    }
                case 372:
                    var2 = var2.bind(var3)();
                case 376:
                    var0 = _closure3_slot9;
                    if (var0) {
                        _fun35136_ip = 386;
                        continue _fun35136
                    }
                case 383:
                    var0 = var1;
                case 386:
                    return var0;
            }
        };
        return var0;
    };
    var2.persist = var3;
    var3 = function(arg0, arg1) { // Original name: reduxImpl, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            var2 = arg2;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var2;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var4 = _closure3_slot0;
                var3 = undefined;
                var2 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = _closure4_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var1 = false;
                var1 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var2.dispatch = var1;
            var1 = true;
            var2.dispatchFromDevtools = var1;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.assign;
            var1 = {};
            var0 = function() { // Original name: dispatch, environment: var0
                var0 = undefined;
                var3 = _closure3_slot1;
                var2 = var3.dispatch;
                var1 = var2.apply;
                var0 = arguments;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1.dispatch = var0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        return var0;
    };
    var2.redux = var3;
    var1 = function(arg0) { // Original name: subscribeWithSelectorImpl, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            var4 = arg2;
            var _closure3_slot0 = var4;
            var1 = var4.subscribe;
            var _closure3_slot1 = var1;
            var0 = function(arg0, arg1, arg2) { // Environment: var0
                _fun35127: for (var _fun35127_ip = 0;;) switch (_fun35127_ip) {
                    case 0:
                        var7 = arg0;
                        var4 = arg1;
                        var6 = arg2;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var4;
                        var2 = var7;
                        if (!var4) {
                            _fun35127_ip = 130;
                            continue _fun35127
                        }
                    case 25:
                        var5 = null;
                        var8 = var5 == var6;
                        var3 = undefined;
                        var0 = undefined;
                        if (var8) {
                            _fun35127_ip = 44;
                            continue _fun35127
                        }
                    case 38:
                        var0 = var6.equalityFn;
                    case 44:
                        if (var0) {
                            _fun35127_ip = 61;
                            continue _fun35127
                        }
                    case 47:
                        var8 = global;
                        var8 = var8.Object;
                        var0 = var8.is;
                    case 61:
                        var _closure4_slot2 = var0;
                        var8 = _closure3_slot0;
                        var0 = var8.getState;
                        var0 = var0.bind(var8)();
                        var0 = var7.bind(var3)(var0);
                        var _closure4_slot3 = var0;
                        var0 = function(arg0) { // Original name: listener, environment: var1
                            _fun35128: for (var _fun35128_ip = 0;;) switch (_fun35128_ip) {
                                case 0:
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = _closure4_slot2;
                                    var1 = _closure4_slot3;
                                    var1 = var2.bind(var0)(var1, var3);
                                    if (var1) {
                                        _fun35128_ip = 52;
                                        continue _fun35128
                                    }
                                case 34:
                                    var2 = _closure4_slot3;
                                    var1 = _closure4_slot1;
                                    _closure4_slot3 = var3;
                                    var1 = var1.bind(var0)(var3, var2);
                                case 52:
                                    return var0;
                            }
                        };
                        var7 = var5 == var6;
                        var5 = undefined;
                        if (var7) {
                            _fun35127_ip = 111;
                            continue _fun35127
                        }
                    case 105:
                        var5 = var6.fireImmediately;
                    case 111:
                        var2 = var0;
                        if (!var5) {
                            _fun35127_ip = 130;
                            continue _fun35127
                        }
                    case 117:
                        var1 = _closure4_slot3;
                        var1 = var4.bind(var3)(var1, var1);
                        var2 = var0;
                    case 130:
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var4.subscribe = var0;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        return var0;
    };
    var2.subscribeWithSelector = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 29, 57]);