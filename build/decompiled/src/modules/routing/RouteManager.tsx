// modules/routing/RouteManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun99197: for (var _fun99197_ip = 0;;) switch (_fun99197_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun99197_ip = 46;
                    continue _fun99197
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun99197_ip = 55;
                    continue _fun99197
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun99197_ip = 345;
                    continue _fun99197
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun99197_ip = 323;
                    continue _fun99197
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun99197_ip = 283;
                    continue _fun99197
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun99197_ip = 270;
                    continue _fun99197
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
                    _fun99197_ip = 163;
                    continue _fun99197
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun99197_ip = 179;
                    continue _fun99197
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun99197_ip = 249;
                    continue _fun99197
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun99197_ip = 249;
                    continue _fun99197
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun99197_ip = 234;
                    continue _fun99197
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun99197_ip = 247;
                    continue _fun99197
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun99197_ip = 265;
                continue _fun99197;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun99197_ip = 283;
                continue _fun99197;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun99197_ip = 323;
                    continue _fun99197
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
                    _fun99197_ip = 330;
                    continue _fun99197
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun99198: for (var _fun99198_ip = 0;;) switch (_fun99198_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun99198_ip = 56;
                                continue _fun99198
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
                            _fun99198_ip = 67;
                            continue _fun99198;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun99199: for (var _fun99199_ip = 0;;) switch (_fun99199_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun99199_ip = 23;
                    continue _fun99199
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun99199_ip = 33;
                    continue _fun99199
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
                    _fun99199_ip = 70;
                    continue _fun99199
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun99199_ip = 55;
                    continue _fun99199
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = global;
            var4 = var3.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.rewrites = var4;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var8 = var4;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.listeners = var3;
            var3 = 0;
            var2.routeChangeCount = var3;
            var3 = -1;
            var2.timer = var3;
            var3 = false;
            var2.connected = var3;
            var3 = function() { // Environment: var1
                _fun99202: for (var _fun99202_ip = 0;;) switch (_fun99202_ip) {
                    case 0:
                        var2 = _closure1_slot4;
                        var1 = var2.isConnected;
                        var4 = var1.bind(var2)();
                        var2 = var4;
                        if (!var2) {
                            _fun99202_ip = 39;
                            continue _fun99202
                        }
                    case 23:
                        var1 = _closure3_slot0;
                        var1 = var1.connected;
                        var2 = !var1;
                    case 39:
                        var3 = _closure3_slot0;
                        var3.connected = var4;
                        if (!var2) {
                            _fun99202_ip = 122;
                            continue _fun99202
                        }
                    case 55:
                        var3 = _closure3_slot0;
                        var1 = 0;
                        var3.routeChangeCount = var1;
                        var2 = var3.executeRouteRewrites;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var0 = var1.getHistory;
                        var0 = var0.bind(var1)();
                        var1 = var0.location;
                        var0 = 'REPLACE';
                        var0 = var2.bind(var3)(var1, var0);
                    case 122:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleConnectionChange = var3;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun99203: for (var _fun99203_ip = 0;;) switch (_fun99203_ip) {
                    case 0:
                        var2 = arg1;
                        var3 = arg0;
                        var4 = var2;
                        var0 = undefined;
                        var5 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var1 = 'POP';
                        if (!(var1 !== var2)) {
                            _fun99203_ip = 141;
                            continue _fun99203
                        }
                    case 25:
                        var9 = _closure3_slot0;
                        var8 = var9.executeRouteRewrites;
                        var2 = var3;
                        var1 = var4;
                        var1 = var8.bind(var9)(var2, var1);
                        if (var1) {
                            _fun99203_ip = 296;
                            continue _fun99203
                        }
                    case 56:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var2 = 6;
                        var2 = var9[var2];
                        var9 = var8.bind(var0)(var2);
                        var8 = var9.convertRouteToNavigation;
                        var2 = var3;
                        var2 = var8.bind(var9)(var2);
                        if (var2) {
                            _fun99203_ip = 141;
                            continue _fun99203
                        }
                    case 96:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var2 = 5;
                        var2 = var9[var2];
                        var8 = var8.bind(var0)(var2);
                        var2 = var8.replaceWith;
                        var1 = _closure1_slot6;
                        var1 = var1.ME;
                        var1 = var2.bind(var8)(var1);
                        var1 = undefined;
                        return var1;
                    case 141:
                        var8 = _closure1_slot5;
                        var2 = var8.getState;
                        var9 = var2.bind(var8)();
                        var8 = var9.basePath;
                        var2 = var3;
                        var2 = var2.pathname;
                        if (!(var8 !== var2)) {
                            _fun99203_ip = 197;
                            continue _fun99203
                        }
                    case 177:
                        var8 = var9.resetPath;
                        var2 = var3;
                        var2 = var2.pathname;
                        var2 = var8.bind(var9)(var2);
                    case 197:
                        var8 = _closure1_slot7;
                        var2 = _closure3_slot0;
                        var2 = var2.listeners;
                        var2 = var8.bind(var0)(var2);
                        var6 = var2;
                        var2 = var2.bind(var0)();
                        var5 = var2;
                        var2 = var2.done;
                        if (var2) {
                            _fun99203_ip = 282;
                            continue _fun99203
                        }
                    case 237:
                        var2 = var5;
                        var7 = var2.value;
                    case 245: // try_start_0
                        var9 = var7;
                        var8 = var3;
                        var2 = var4;
                        var2 = var9.bind(var0)(var8, var2);
                    case 260: // try_end0
                        _fun99203_ip = 264;
                        continue _fun99203;
                    case 262: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 264:
                        var2 = var6;
                        var2 = var2.bind(var0)();
                        var5 = var2;
                        var2 = var2.done;
                        if (!var2) {
                            _fun99203_ip = 237;
                            continue _fun99203
                        }
                    case 282:
                        var2 = _closure3_slot0;
                        var1 = 0;
                        var2.routeChangeCount = var1;
                        return var0;
                    case 296:
                        return var0;
                }
            };
            var2.handleRouteChange = var3;
            var3 = function(arg0) { // Environment: var1
                _fun99204: for (var _fun99204_ip = 0;;) switch (_fun99204_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.path;
                        var1 = _closure3_slot0;
                        var3 = var1.timer;
                        var1 = -1;
                        if (!(var1 !== var3)) {
                            _fun99204_ip = 57;
                            continue _fun99204
                        }
                    case 32:
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var1 = _closure3_slot0;
                        var3 = var1.timer;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                    case 57:
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun99204_ip = 98;
                            continue _fun99204
                        }
                    case 63:
                        var1 = _closure3_slot0;
                        var0 = global;
                        var4 = var0.setTimeout;
                        var3 = var1.flushRoute;
                        var2 = undefined;
                        var0 = 200;
                        var0 = var4.bind(var2)(var3, var0);
                        var1.timer = var0;
                    case 98:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleKeybindRouteChange = var3;
            var1 = function() { // Environment: var1
                _fun99205: for (var _fun99205_ip = 0;;) switch (_fun99205_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure3_slot0;
                        var1 = var0.timer;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = _closure1_slot5;
                        var1 = var3.getState;
                        var1 = var1.bind(var3)();
                        var4 = var1.path;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun99205_ip = 94;
                            continue _fun99205
                        }
                    case 57:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 5;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.transitionTo;
                        var1 = var1.path;
                        var1 = var2.bind(var3)(var1);
                    case 94:
                        return var0;
                }
            };
            var2.flushRoute = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.cleanup;
            var0 = var0.bind(var1)();
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var6 = var5[var3];
            var0 = undefined;
            var7 = var4.bind(var0)(var6);
            var6 = var7.getHistory;
            var8 = var6.bind(var7)();
            var7 = var8.listen;
            var6 = var1.handleRouteChange;
            var6 = var7.bind(var8)(var6);
            var1.unlistenHistory = var6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.getHistory;
            var3 = var3.bind(var4)();
            var3 = var3.location;
            var6 = var3.pathname;
            var5 = _closure1_slot5;
            var3 = var5.getState;
            var4 = var3.bind(var5)();
            var3 = var4.resetPath;
            var3 = var3.bind(var4)(var6);
            var4 = var5.subscribe;
            var3 = var1.handleKeybindRouteChange;
            var3 = var4.bind(var5)(var3);
            var1.unlistenKeyboardChange = var3;
            var3 = _closure1_slot4;
            var2 = var3.addChangeListener;
            var1 = var1.handleConnectionChange;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'executeRouteRewrites';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun99207: for (var _fun99207_ip = 0;;) switch (_fun99207_ip) {
                case 0:
                    var10 = arg0;
                    var8 = arg1;
                    var0 = this;
                    var2 = var0.routeChangeCount;
                    var1 = 1;
                    var1 = var2 + var1;
                    var0.routeChangeCount = var1;
                    var2 = var0.routeChangeCount;
                    var1 = 10;
                    if (!(!(var2 < var1))) {
                        _fun99207_ip = 77;
                        continue _fun99207
                    }
                case 41:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = 'RouteManager: Something has gone horribly wrong with rewrites';
                    var14 = var2;
                    var1 = new var14[var3](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 77:
                    var2 = _closure1_slot7;
                    var0 = var0.rewrites;
                    var3 = undefined;
                    var7 = var2.bind(var3)(var0);
                    var2 = var7.bind(var3)();
                    var0 = var2.done;
                    var4 = 5;
                    var6 = null;
                    var5 = var2;
                    if (var0) {
                        _fun99207_ip = 295;
                        continue _fun99207
                    }
                case 120:
                    var0 = var5.value;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var4];
                    var9 = var9.bind(var3)(var2);
                    var2 = var9.getHistory;
                    var2 = var2.bind(var9)();
                    var2 = var2.location;
                    var9 = var2.pathname;
                    var0 = var0.bind(var3)(var10, var8);
                    if (!(var6 == var0)) {
                        _fun99207_ip = 190;
                        continue _fun99207
                    }
                case 173:
                    var11 = var7.bind(var3)();
                    var2 = var11.done;
                    var5 = var11;
                    if (var2) {
                        _fun99207_ip = 295;
                        continue _fun99207
                    }
                case 188:
                    _fun99207_ip = 120;
                    continue _fun99207;
                case 190:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var5 = 7;
                    var5 = var1[var5];
                    var7 = var2.bind(var3)(var5);
                    var6 = var7.addBreadcrumb;
                    var5 = {};
                    var8 = 'RouteManager.handleRouteChange: A route rewrite is replacing the current route';
                    var5.message = var8;
                    var8 = {};
                    var10 = var0.path;
                    var8.replacePath = var10;
                    var8.previousPath = var9;
                    var5.data = var8;
                    var5 = var6.bind(var7)(var5);
                    var1 = var1[var4];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.replaceWith;
                    var1 = var0.path;
                    var0 = var0.state;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = true;
                    return var0;
                case 295:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'cleanup';
        var0.key = var5;
        var5 = function() {
            _fun99208: for (var _fun99208_ip = 0;;) switch (_fun99208_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.unlistenHistory;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun99208_ip = 25;
                        continue _fun99208
                    }
                case 15:
                    var0 = var3.call;
                    var0 = var0.bind(var3)(var1);
                case 25:
                    var0 = undefined;
                    var1.unlistenHistory = var0;
                    var3 = var1.unlistenKeyboardChange;
                    if (!(var2 != var3)) {
                        _fun99208_ip = 53;
                        continue _fun99208
                    }
                case 43:
                    var2 = var3.call;
                    var2 = var2.bind(var3)(var1);
                case 53:
                    var1.unlistenKeyboardChange = var0;
                    var3 = _closure1_slot4;
                    var2 = var3.removeChangeListener;
                    var1 = var1.handleConnectionChange;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'addRouteChangeListener';
        var0.key = var5;
        var5 = function arg0() {
            _fun99209: for (var _fun99209_ip = 0;;) switch (_fun99209_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var4 = var1.unlistenHistory;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun99209_ip = 80;
                        continue _fun99209
                    }
                case 28:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getHistory;
                    var2 = var2.bind(var4)();
                    var4 = var2.location;
                    var2 = 'REPLACE';
                    var2 = var3.bind(var5)(var4, var2);
                case 80:
                    var2 = var1.listeners;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.removeRouteChangeListener;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'addRouteRewriter';
        var0.key = var5;
        var5 = function arg0() {
            _fun99211: for (var _fun99211_ip = 0;;) switch (_fun99211_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var2 = var1.unlistenHistory;
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun99211_ip = 142;
                        continue _fun99211
                    }
                case 28:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 5;
                    var8 = var2[var7];
                    var6 = undefined;
                    var10 = var9.bind(var6)(var8);
                    var8 = var10.getHistory;
                    var8 = var8.bind(var10)();
                    var8 = var8.location;
                    var2 = var2[var7];
                    var9 = var9.bind(var6)(var2);
                    var2 = var9.getHistory;
                    var2 = var2.bind(var9)();
                    var2 = var2.action;
                    var2 = var3.bind(var6)(var8, var2);
                    if (!(var5 != var2)) {
                        _fun99211_ip = 142;
                        continue _fun99211
                    }
                case 102:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.replaceWith;
                    var4 = var2.path;
                    var2 = var2.state;
                    var2 = var5.bind(var6)(var4, var2);
                case 142:
                    var2 = var1.rewrites;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.removeRouteRewriter;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'removeRouteChangeListener';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.listeners;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'removeRouteRewriter';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.rewrites;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getHistory';
        var0.key = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getHistory;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/RouteManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.RouteManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3475, 12930, 660, 1220, 12931, 12933, 2]);