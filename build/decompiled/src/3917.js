// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0, arg1() {
        _fun35292: for (var _fun35292_ip = 0;;) switch (_fun35292_ip) {
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
                var2 = function arg0() {
                    _fun35293: for (var _fun35293_ip = 0;;) switch (_fun35293_ip) {
                        case 0:
                            var3 = function arg0() {
                                _fun35294: for (var _fun35294_ip = 0;;) switch (_fun35294_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var6 = null;
                                        var0 = null;
                                        if (!(var0 !== var4)) {
                                            _fun35294_ip = 59;
                                            continue _fun35294
                                        }
                                    case 11:
                                        var1 = global;
                                        var3 = var1.JSON;
                                        var2 = var3.parse;
                                        var1 = _closure2_slot0;
                                        var6 = var6 == var1;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun35294_ip = 53;
                                            continue _fun35294
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
                                _fun35293_ip = 40;
                                continue _fun35293
                            }
                        case 37:
                            var2 = var0;
                        case 40:
                            var0 = global;
                            var0 = var0.Promise;
                            var0 = var2 instanceof var0;
                            if (var0) {
                                _fun35293_ip = 64;
                                continue _fun35293
                            }
                        case 55:
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            _fun35293_ip = 74;
                            continue _fun35293;
                        case 64:
                            var1 = var2.then;
                            var0 = var1.bind(var2)(var3);
                        case 74:
                            return var0;
                    }
                };
                var0.getItem = var2;
                var2 = function arg0, arg1() {
                    _fun35295: for (var _fun35295_ip = 0;;) switch (_fun35295_ip) {
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
                                _fun35295_ip = 54;
                                continue _fun35295
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
                var1 = function arg0() {
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
    var4 = function arg0() {
        _fun35302: for (var _fun35302_ip = 0;;) switch (_fun35302_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                if (var1) {
                    _fun35302_ip = 27;
                    continue _fun35302
                }
            case 23:
                var0 = {};
                _fun35302_ip = 86;
                continue _fun35302;
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
    var4 = function arg0() {
        _fun35304: for (var _fun35304_ip = 0;;) switch (_fun35304_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun35304_ip = 123;
                    continue _fun35304
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
                    _fun35304_ip = 123;
                    continue _fun35304
                }
            case 44:
                var2 = 1;
                var0 = var0 + var2;
                var4 = var1[var0];
                var3 = null;
                var1 = var3 == var4;
                var5 = undefined;
                if (var1) {
                    _fun35304_ip = 76;
                    continue _fun35304
                }
            case 66:
                var1 = var4.trim;
                var5 = var1.bind(var4)();
            case 76:
                if (var5) {
                    _fun35304_ip = 83;
                    continue _fun35304
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
                    _fun35304_ip = 121;
                    continue _fun35304
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
    var4 = function arg0, arg1() {
        _fun35317: for (var _fun35317_ip = 0;;) switch (_fun35317_ip) {
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
                _fun35317_ip = 58;
                continue _fun35317;
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
                    _fun35317_ip = 70;
                    continue _fun35317
                }
            case 65:
                var1 = var2.bind(var0)(var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun35323: for (var _fun35323_ip = 0;;) switch (_fun35323_ip) {
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
                        _fun35323_ip = 66;
                        continue _fun35323
                    }
                case 43:
                    var0 = {};
                    var3 = function arg0() {
                        var1 = _closure1_slot9;
                        var2 = undefined;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0.then = var3;
                    var3 = function arg0() {
                        var0 = this;
                        return var0;
                    };
                    var0.catch = var3;
                    _fun35323_ip = 69;
                    continue _fun35323;
                case 66:
                    var0 = var2;
                case 69: // try_end0
                    return var0;
                case 71: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var2 = function arg0() {
                        var0 = this;
                        return var0;
                    };
                    var0.then = var2;
                    var1 = function arg0() {
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
    var4 = function arg0, arg1() {
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
    var3 = function arg0() {
        _fun35306: for (var _fun35306_ip = 0;;) switch (_fun35306_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun35306_ip = 31;
                    continue _fun35306
                }
            case 23:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun35306_ip = 35;
                    continue _fun35306
                }
            case 31:
                var1 = {};
                _fun35306_ip = 39;
                continue _fun35306;
            case 35:
                var1 = arguments[var2];
            case 39:
                var _closure2_slot1 = var1;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun35307: for (var _fun35307_ip = 0;;) switch (_fun35307_ip) {
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
                                _fun35307_ip = 139;
                                continue _fun35307
                            }
                        case 136:
                            var14 = var15;
                        case 139:
                            var13 = var14;
                            if (!var14) {
                                _fun35307_ip = 161;
                                continue _fun35307
                            }
                        case 145:
                            var14 = global;
                            var14 = var14.window;
                            var13 = var14.__REDUX_DEVTOOLS_EXTENSION__;
                        case 161:
                            var9 = var13;
                        case 164: // try_end0
                            _fun35307_ip = 168;
                            continue _fun35307;
                        case 166: // catch_target0
                            CatchBlockStart(arg_register = 13);
                        case 168:
                            var13 = var9;
                            if (var13) {
                                _fun35307_ip = 196;
                                continue _fun35307
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
                                _fun35307_ip = 353;
                                continue _fun35307
                            }
                        case 212:
                            var11 = _closure1_slot5;
                            var9 = var11.get;
                            var8 = var12.name;
                            var15 = var9.bind(var11)(var8);
                            var14 = {};
                            if (var15) {
                                _fun35307_ip = 317;
                                continue _fun35307
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
                            _fun35307_ip = 384;
                            continue _fun35307;
                        case 317:
                            var8 = global;
                            var11 = var8.Object;
                            var8 = var11.assign;
                            var17 = 'tracked';
                            var14.type = var17;
                            var14.store = var16;
                            var9 = var8.bind(var11)(var14, var15);
                            _fun35307_ip = 384;
                            continue _fun35307;
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
                                _fun35308: for (var _fun35308_ip = 0;;) switch (_fun35308_ip) {
                                    case 0:
                                        var3 = arg2;
                                        var4 = _closure3_slot0;
                                        var5 = undefined;
                                        var2 = arg0;
                                        var0 = arg1;
                                        var0 = var4.bind(var5)(var2, var0);
                                        var2 = _closure3_slot8;
                                        if (var2) {
                                            _fun35308_ip = 33;
                                            continue _fun35308
                                        }
                                    case 31:
                                        return var0;
                                    case 33:
                                        if (!(var5 !== var3)) {
                                            _fun35308_ip = 62;
                                            continue _fun35308
                                        }
                                    case 37:
                                        var6 = 'string';
                                        var2 = typeof var3;
                                        var4 = var3;
                                        if (!(var6 === var2)) {
                                            _fun35308_ip = 60;
                                            continue _fun35308
                                        }
                                    case 51:
                                        var2 = {};
                                        var2.type = var3;
                                        var4 = var2;
                                    case 60:
                                        _fun35308_ip = 133;
                                        continue _fun35308;
                                    case 62:
                                        var2 = {};
                                        var3 = _closure3_slot3;
                                        if (var3) {
                                            _fun35308_ip = 117;
                                            continue _fun35308
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
                                            _fun35308_ip = 126;
                                            continue _fun35308
                                        }
                                    case 120:
                                        var3 = 'anonymous';
                                    case 126:
                                        var2.type = var3;
                                        var4 = var2;
                                    case 133:
                                        var2 = _closure3_slot4;
                                        if (!(var5 !== var2)) {
                                            _fun35308_ip = 306;
                                            continue _fun35308
                                        }
                                    case 144:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun35308_ip = 340;
                                            continue _fun35308
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
                                        _fun35308_ip = 340;
                                        continue _fun35308;
                                    case 306:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun35308_ip = 340;
                                            continue _fun35308
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
                            var11 = function() {
                                _fun35309: for (var _fun35309_ip = 0;;) switch (_fun35309_ip) {
                                    case 0:
                                        var1 = _closure3_slot6;
                                        if (!var1) {
                                            _fun35309_ip = 31;
                                            continue _fun35309
                                        }
                                    case 10:
                                        var2 = _closure3_slot6;
                                        var2 = var2.unsubscribe;
                                        var3 = 'function';
                                        var2 = typeof var2;
                                        var1 = var3 === var2;
                                    case 31:
                                        if (!var1) {
                                            _fun35309_ip = 48;
                                            continue _fun35309
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
                                            _fun35309_ip = 146;
                                            continue _fun35309
                                        }
                                    case 67:
                                        var4 = _closure1_slot5;
                                        var2 = var4.get;
                                        var2 = var2.bind(var4)(var3);
                                        if (!var2) {
                                            _fun35309_ip = 146;
                                            continue _fun35309
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
                                            _fun35309_ip = 146;
                                            continue _fun35309
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
                            var8 = function() {
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
                                _fun35307_ip = 608;
                                continue _fun35307
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
                                _fun35307_ip = 634;
                                continue _fun35307
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
                                _fun35311: for (var _fun35311_ip = 0;;) switch (_fun35311_ip) {
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
                                            _fun35311_ip = 71;
                                            continue _fun35311
                                        }
                                    case 59:
                                        var1 = var3.getState;
                                        var1 = var1.bind(var3)();
                                        _fun35311_ip = 75;
                                        continue _fun35311;
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
                            _fun35307_ip = 634;
                            continue _fun35307;
                        case 608:
                            var5 = var2;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun35307_ip = 634;
                                continue _fun35307
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
                                _fun35307_ip = 688;
                                continue _fun35307
                            }
                        case 646:
                            var4 = var3;
                            var4 = var4.dispatch;
                            var5 = 'function';
                            var4 = typeof var4;
                            if (!(var5 === var4)) {
                                _fun35307_ip = 688;
                                continue _fun35307
                            }
                        case 665:
                            var4 = var3;
                            var3 = var4.dispatch;
                            var _closure3_slot11 = var3;
                            var3 = function() { // Environment: var1
                                _fun35312: for (var _fun35312_ip = 0;;) switch (_fun35312_ip) {
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
                                            _fun35312_ip = 62;
                                            continue _fun35312
                                        }
                                    case 47:
                                        var5 = arguments[var1];
                                        var3[var1] = var5;
                                        var1 = var1 + 1;
                                        if (var1 < var2) {
                                            _fun35312_ip = 47;
                                            continue _fun35312
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
                                _fun35313: for (var _fun35313_ip = 0;;) switch (_fun35313_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.type;
                                        var2 = 'ACTION';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 570;
                                            continue _fun35313
                                        }
                                    case 21:
                                        var2 = 'DISPATCH';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 33;
                                            continue _fun35313
                                        }
                                    case 29:
                                        var2 = undefined;
                                        return var2;
                                    case 33:
                                        var2 = var0.payload;
                                        var3 = var2.type;
                                        var2 = 'RESET';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 442;
                                            continue _fun35313
                                        }
                                    case 55:
                                        var2 = 'COMMIT';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 330;
                                            continue _fun35313
                                        }
                                    case 68:
                                        var2 = 'ROLLBACK';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 303;
                                            continue _fun35313
                                        }
                                    case 81:
                                        var2 = 'JUMP_TO_STATE';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 276;
                                            continue _fun35313
                                        }
                                    case 94:
                                        var2 = 'JUMP_TO_ACTION';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 276;
                                            continue _fun35313
                                        }
                                    case 107:
                                        var2 = 'IMPORT_STATE';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 147;
                                            continue _fun35313
                                        }
                                    case 117:
                                        var2 = 'PAUSE_RECORDING';
                                        if (!(var2 !== var3)) {
                                            _fun35313_ip = 131;
                                            continue _fun35313
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
                                            _fun35313_ip = 209;
                                            continue _fun35313
                                        }
                                    case 204:
                                        var9 = var2.state;
                                    case 209:
                                        if (var9) {
                                            _fun35313_ip = 214;
                                            continue _fun35313
                                        }
                                    case 212:
                                        return var7;
                                    case 214:
                                        var4 = _closure3_slot9;
                                        var8 = _closure3_slot4;
                                        var2 = var9;
                                        if (!(var7 !== var8)) {
                                            _fun35313_ip = 240;
                                            continue _fun35313
                                        }
                                    case 232:
                                        var8 = _closure3_slot4;
                                        var2 = var9[var8];
                                    case 240:
                                        var2 = var4.bind(var7)(var2);
                                        var2 = _closure3_slot6;
                                        var2 = var5 == var2;
                                        if (var2) {
                                            _fun35313_ip = 272;
                                            continue _fun35313
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
                                            _fun35316: for (var _fun35316_ip = 0;;) switch (_fun35316_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var2 = _closure3_slot4;
                                                    var0 = undefined;
                                                    if (!(var0 === var2)) {
                                                        _fun35316_ip = 27;
                                                        continue _fun35316
                                                    }
                                                case 16:
                                                    var2 = _closure3_slot9;
                                                    var2 = var2.bind(var0)(var3);
                                                    _fun35316_ip = 106;
                                                    continue _fun35316;
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
                                                        _fun35316_ip = 106;
                                                        continue _fun35316
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
                                            _fun35315: for (var _fun35315_ip = 0;;) switch (_fun35315_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var0 = _closure3_slot4;
                                                    var2 = undefined;
                                                    if (!(var2 !== var0)) {
                                                        _fun35315_ip = 81;
                                                        continue _fun35315
                                                    }
                                                case 16:
                                                    var4 = _closure3_slot9;
                                                    var0 = _closure3_slot4;
                                                    var0 = var3[var0];
                                                    var0 = var4.bind(var2)(var0);
                                                    var4 = _closure3_slot6;
                                                    var0 = null;
                                                    if (!(var0 != var4)) {
                                                        _fun35315_ip = 79;
                                                        continue _fun35315
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
                                                        _fun35315_ip = 132;
                                                        continue _fun35315
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
                                            _fun35313_ip = 396;
                                            continue _fun35313
                                        }
                                    case 343:
                                        var3 = _closure3_slot6;
                                        var2 = null;
                                        var3 = var2 == var3;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun35313_ip = 394;
                                            continue _fun35313
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
                                        _fun35313_ip = 440;
                                        continue _fun35313;
                                    case 396:
                                        var5 = _closure3_slot6;
                                        var3 = null;
                                        var3 = var3 == var5;
                                        if (var3) {
                                            _fun35313_ip = 438;
                                            continue _fun35313
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
                                            _fun35313_ip = 521;
                                            continue _fun35313
                                        }
                                    case 468:
                                        var5 = _closure3_slot6;
                                        var2 = null;
                                        var5 = var2 == var5;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun35313_ip = 519;
                                            continue _fun35313
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
                                        _fun35313_ip = 568;
                                        continue _fun35313;
                                    case 521:
                                        var6 = _closure3_slot6;
                                        var5 = null;
                                        var5 = var5 == var6;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun35313_ip = 565;
                                            continue _fun35313
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
                                            _fun35313_ip = 615;
                                            continue _fun35313
                                        }
                                    case 587:
                                        var3 = _closure1_slot8;
                                        var2 = var0.payload;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun35314: for (var _fun35314_ip = 0;;) switch (_fun35314_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = var2.type;
                                                    var0 = '__setState';
                                                    if (!(var0 === var1)) {
                                                        _fun35314_ip = 196;
                                                        continue _fun35314
                                                    }
                                                case 21:
                                                    var1 = _closure3_slot4;
                                                    var3 = undefined;
                                                    if (!(var3 !== var1)) {
                                                        _fun35314_ip = 178;
                                                        continue _fun35314
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
                                                        _fun35314_ip = 94;
                                                        continue _fun35314
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
                                                        _fun35314_ip = 176;
                                                        continue _fun35314
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
                                                        _fun35314_ip = 249;
                                                        continue _fun35314
                                                    }
                                                case 165:
                                                    var1 = _closure3_slot9;
                                                    var1 = var1.bind(var3)(var4);
                                                    _fun35314_ip = 249;
                                                    continue _fun35314;
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
                                                        _fun35314_ip = 232;
                                                        continue _fun35314
                                                    }
                                                case 212:
                                                    var3 = _closure3_slot2;
                                                    var3 = var3.dispatch;
                                                    var4 = 'function';
                                                    var3 = typeof var3;
                                                    var1 = var4 === var3;
                                                case 232:
                                                    if (!var1) {
                                                        _fun35314_ip = 249;
                                                        continue _fun35314
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
                                        _fun35313_ip = 641;
                                        continue _fun35313;
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
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            _fun35329: for (var _fun35329_ip = 0;;) switch (_fun35329_ip) {
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
                    var1 = function arg0() {
                        var0 = arg0;
                        return var0;
                    };
                    var7.partialize = var1;
                    var1 = 0;
                    var7.version = var1;
                    var1 = function arg0, arg1() {
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
                        _fun35329_ip = 199;
                        continue _fun35329
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
                    var2 = function() {
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
                    var2 = function() {
                        _fun35338: for (var _fun35338_ip = 0;;) switch (_fun35338_ip) {
                            case 0:
                                var2 = _closure3_slot6;
                                if (var2) {
                                    _fun35338_ip = 16;
                                    continue _fun35338
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
                                    _fun35339: for (var _fun35339_ip = 0;;) switch (_fun35339_ip) {
                                        case 0:
                                            var1 = _closure3_slot1;
                                            var2 = undefined;
                                            var1 = var1.bind(var2)();
                                            var3 = null;
                                            if (!(var3 == var1)) {
                                                _fun35339_ip = 23;
                                                continue _fun35339
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
                                    _fun35338_ip = 97;
                                    continue _fun35338
                                }
                            case 66:
                                var6 = var7.call;
                                var5 = _closure3_slot2;
                                var4 = _closure3_slot1;
                                var4 = var4.bind(var3)();
                                if (!(var8 == var4)) {
                                    _fun35338_ip = 91;
                                    continue _fun35338
                                }
                            case 87:
                                var4 = _closure3_slot10;
                            case 91:
                                var2 = var6.bind(var7)(var5, var4);
                            case 97:
                                if (var2) {
                                    _fun35338_ip = 102;
                                    continue _fun35338
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
                                    _fun35340: for (var _fun35340_ip = 0;;) switch (_fun35340_ip) {
                                        case 0:
                                            var1 = arg0;
                                            if (!var1) {
                                                _fun35340_ip = 89;
                                                continue _fun35340
                                            }
                                        case 6:
                                            var0 = var1.version;
                                            var2 = 'number';
                                            var0 = typeof var0;
                                            if (!(var2 === var0)) {
                                                _fun35340_ip = 184;
                                                continue _fun35340
                                            }
                                        case 26:
                                            var3 = var1.version;
                                            var2 = _closure3_slot2;
                                            var2 = var2.version;
                                            if (!(var3 !== var2)) {
                                                _fun35340_ip = 184;
                                                continue _fun35340
                                            }
                                        case 52:
                                            var2 = _closure3_slot2;
                                            var2 = var2.migrate;
                                            if (var2) {
                                                _fun35340_ip = 107;
                                                continue _fun35340
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
                                                _fun35340_ip = 165;
                                                continue _fun35340
                                            }
                                        case 149:
                                            var0 = new Array(2);
                                            var2 = true;
                                            var0[0] = var2;
                                            var0[1] = var4;
                                            _fun35340_ip = 182;
                                            continue _fun35340;
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
                                    _fun35342: for (var _fun35342_ip = 0;;) switch (_fun35342_ip) {
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
                                                _fun35342_ip = 65;
                                                continue _fun35342
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
                                                _fun35342_ip = 92;
                                                continue _fun35342
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
                                    _fun35343: for (var _fun35343_ip = 0;;) switch (_fun35343_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun35343_ip = 32;
                                                continue _fun35343
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
                                    _fun35345: for (var _fun35345_ip = 0;;) switch (_fun35345_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun35345_ip = 28;
                                                continue _fun35345
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
                    var6 = function arg0() {
                        _fun35346: for (var _fun35346_ip = 0;;) switch (_fun35346_ip) {
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
                                    _fun35346_ip = 55;
                                    continue _fun35346
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
                    var6 = function() {
                        _fun35347: for (var _fun35347_ip = 0;;) switch (_fun35347_ip) {
                            case 0:
                                var2 = _closure3_slot6;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun35347_ip = 37;
                                    continue _fun35347
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
                    var6 = function() {
                        var0 = _closure3_slot2;
                        return var0;
                    };
                    var4.getOptions = var6;
                    var6 = function() {
                        var1 = _closure3_slot11;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var4.rehydrate = var6;
                    var6 = function() {
                        var0 = _closure3_slot3;
                        return var0;
                    };
                    var4.hasHydrated = var6;
                    var6 = function arg0() {
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
                    var6 = function arg0() {
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
                        _fun35329_ip = 376;
                        continue _fun35329
                    }
                case 372:
                    var2 = var2.bind(var3)();
                case 376:
                    var0 = _closure3_slot9;
                    if (var0) {
                        _fun35329_ip = 386;
                        continue _fun35329
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
    var3 = function arg0, arg1() {
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
            var0 = function() {
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
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            var4 = arg2;
            var _closure3_slot0 = var4;
            var1 = var4.subscribe;
            var _closure3_slot1 = var1;
            var0 = function(arg0, arg1, arg2) { // Environment: var0
                _fun35320: for (var _fun35320_ip = 0;;) switch (_fun35320_ip) {
                    case 0:
                        var7 = arg0;
                        var4 = arg1;
                        var6 = arg2;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var4;
                        var2 = var7;
                        if (!var4) {
                            _fun35320_ip = 130;
                            continue _fun35320
                        }
                    case 25:
                        var5 = null;
                        var8 = var5 == var6;
                        var3 = undefined;
                        var0 = undefined;
                        if (var8) {
                            _fun35320_ip = 44;
                            continue _fun35320
                        }
                    case 38:
                        var0 = var6.equalityFn;
                    case 44:
                        if (var0) {
                            _fun35320_ip = 61;
                            continue _fun35320
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
                        var0 = function arg0() {
                            _fun35321: for (var _fun35321_ip = 0;;) switch (_fun35321_ip) {
                                case 0:
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = _closure4_slot2;
                                    var1 = _closure4_slot3;
                                    var1 = var2.bind(var0)(var1, var3);
                                    if (var1) {
                                        _fun35321_ip = 52;
                                        continue _fun35321
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
                            _fun35320_ip = 111;
                            continue _fun35320
                        }
                    case 105:
                        var5 = var6.fireImmediately;
                    case 111:
                        var2 = var0;
                        if (!var5) {
                            _fun35320_ip = 130;
                            continue _fun35320
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