// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51175: for (var _fun51175_ip = 0;;) switch (_fun51175_ip) {
        case 0:
            var7 = require;
            var3 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var9;
            var0 = function() {
                _fun51176: for (var _fun51176_ip = 0;;) switch (_fun51176_ip) {
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
                        _fun51176_ip = 74;
                        continue _fun51176;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
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
            var0 = ['state', 'descriptors'];
            var _closure1_slot3 = var0;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var1);
            var0 = 0;
            var1 = var9[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var8 = 1;
            var1 = var9[var8];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 2;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 3;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 4;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 5;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 6;
            var1 = var9[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 7;
            var3 = var9[var1];
            var1 = arg3;
            var1 = var1.bind(var0)(var3);
            var3 = 8;
            var3 = var9[var3];
            var3 = var7.bind(var0)(var3);
            var6 = var3.StyleSheet;
            var3 = var3.View;
            var5 = 9;
            var5 = var9[var5];
            var5 = var7.bind(var0)(var5);
            var5 = var5.jsx;
            var _closure1_slot11 = var5;
            var5 = 10;
            var10 = var9[var5];
            var10 = var7.bind(var0)(var10);
            var11 = var10.GestureHandlerRootView;
            var10 = null;
            if (!(var10 != var11)) {
                _fun51175_ip = 292;
                continue _fun51175
            }
        case 277:
            var5 = var9[var5];
            var5 = var7.bind(var0)(var5);
            var3 = var5.GestureHandlerRootView;
        case 292:
            var _closure1_slot12 = var3;
            var3 = var1.Component;
            var1 = function(arg0) { // Environment: var4
                var4 = function() {
                    _fun51180: for (var _fun51180_ip = 0;;) switch (_fun51180_ip) {
                        case 0:
                            var4 = this;
                            var3 = undefined;
                            var9 = undefined;
                            var6 = _closure1_slot6;
                            var2 = _closure2_slot0;
                            var2 = var6.bind(var3)(var4, var2);
                            var6 = arguments.length;
                            var7 = global;
                            var2 = var7.Array;
                            var8 = var2.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var14 = var8;
                            var13 = var6;
                            var2 = new var14[var2](var13, var12);
                            var8 = var2 instanceof Object ? var2 : var8;
                            var2 = 0;
                            var10 = var2 < var6;
                            if (!var10) {
                                _fun51180_ip = 87;
                                continue _fun51180
                            }
                        case 72:
                            var10 = arguments[var2];
                            var8[var2] = var10;
                            var2 = var2 + 1;
                            if (var2 < var6) {
                                _fun51180_ip = 72;
                                continue _fun51180
                            }
                        case 87:
                            var2 = _closure2_slot0;
                            var6 = new Array(0);
                            var0 = var6.concat;
                            var6 = var0.bind(var6)(var8);
                            var0 = _closure1_slot9;
                            var9 = var0.bind(var3)(var2);
                            var2 = _closure1_slot8;
                            var0 = _closure1_slot14;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun51180_ip = 142;
                                continue _fun51180
                            }
                        case 129:
                            var0 = var9.apply;
                            var0 = var0.bind(var9)(var4, var6);
                            _fun51180_ip = 181;
                            continue _fun51180;
                        case 142:
                            var8 = var7.Reflect;
                            var7 = var8.construct;
                            if (var6) {
                                _fun51180_ip = 160;
                                continue _fun51180
                            }
                        case 156:
                            var6 = new Array(0);
                        case 160:
                            var5 = _closure1_slot9;
                            var5 = var5.bind(var3)(var4);
                            var5 = var5.constructor;
                            var0 = var7.bind(var8)(var9, var6, var5);
                        case 181:
                            var0 = var2.bind(var3)(var4, var0);
                            var _closure3_slot0 = var0;
                            var2 = {};
                            var3 = new Array(0);
                            var2.routes = var3;
                            var3 = new Array(0);
                            var2.previousRoutes = var3;
                            var3 = {};
                            var2.previousDescriptors = var3;
                            var3 = new Array(0);
                            var2.openingRouteKeys = var3;
                            var3 = new Array(0);
                            var2.closingRouteKeys = var3;
                            var3 = new Array(0);
                            var2.replacingRouteKeys = var3;
                            var3 = {};
                            var2.descriptors = var3;
                            var0.state = var2;
                            var2 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var1 = var1.route;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var3 = var2.closingRouteKeys;
                                var _closure4_slot1 = var3;
                                var2 = var2.replacingRouteKeys;
                                var _closure4_slot2 = var2;
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var3 = var1.routes;
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    _fun51182: for (var _fun51182_ip = 0;;) switch (_fun51182_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var1 = var2.key;
                                            var0 = _closure4_slot0;
                                            var0 = var0.key;
                                            var0 = var1 === var0;
                                            if (var0) {
                                                _fun51182_ip = 77;
                                                continue _fun51182
                                            }
                                        case 27:
                                            var5 = _closure4_slot1;
                                            var4 = var5.includes;
                                            var1 = var2.key;
                                            var1 = var4.bind(var5)(var1);
                                            var1 = !var1;
                                            if (!var1) {
                                                _fun51182_ip = 74;
                                                continue _fun51182
                                            }
                                        case 52:
                                            var4 = _closure4_slot2;
                                            var3 = var4.includes;
                                            var2 = var2.key;
                                            var2 = var3.bind(var4)(var2);
                                            var1 = !var2;
                                        case 74:
                                            var0 = var1;
                                        case 77:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var2 = var1.findIndex;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.key;
                                    var0 = _closure4_slot0;
                                    var0 = var0.key;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var2 = var2.bind(var1)(var0);
                                var0 = 1;
                                var0 = var2 - var0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var0.getPreviousRoute = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun51184: for (var _fun51184_ip = 0;;) switch (_fun51184_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.route;
                                        var2 = _closure3_slot0;
                                        var2 = var2.state;
                                        var3 = var2.descriptors;
                                        var2 = var0.key;
                                        var2 = var3[var2];
                                        if (var2) {
                                            _fun51184_ip = 63;
                                            continue _fun51184
                                        }
                                    case 39:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.descriptors;
                                        var0 = var0.key;
                                        var2 = var1[var0];
                                    case 63:
                                        var0 = null;
                                        if (!var2) {
                                            _fun51184_ip = 78;
                                            continue _fun51184
                                        }
                                    case 68:
                                        var1 = var2.render;
                                        var0 = var1.bind(var2)();
                                    case 78:
                                        return var0;
                                }
                            };
                            var0.renderScene = var2;
                            var2 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot11;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = global;
                                var6 = var0.Object;
                                var5 = var6.assign;
                                var4 = {};
                                var0 = arg0;
                                var0 = var5.bind(var6)(var4, var0);
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.renderHeader = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun51186: for (var _fun51186_ip = 0;;) switch (_fun51186_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = var1.route;
                                        var _closure4_slot0 = var4;
                                        var2 = _closure3_slot0;
                                        var3 = var2.props;
                                        var2 = var3.state;
                                        var3 = var3.navigation;
                                        var5 = _closure3_slot0;
                                        var5 = var5.state;
                                        var8 = var5.closingRouteKeys;
                                        var7 = var5.replacingRouteKeys;
                                        var6 = var8.some;
                                        var5 = function(arg0) { // Environment: var0
                                            var0 = _closure4_slot0;
                                            var1 = var0.key;
                                            var0 = arg0;
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var5 = var6.bind(var8)(var5);
                                        if (!var5) {
                                            _fun51186_ip = 159;
                                            continue _fun51186
                                        }
                                    case 78:
                                        var6 = var7.every;
                                        var5 = function(arg0) { // Environment: var0
                                            var0 = _closure4_slot0;
                                            var1 = var0.key;
                                            var0 = arg0;
                                            var0 = var0 !== var1;
                                            return var0;
                                        };
                                        var5 = var6.bind(var7)(var5);
                                        if (!var5) {
                                            _fun51186_ip = 159;
                                            continue _fun51186
                                        }
                                    case 97:
                                        var7 = var2.routeNames;
                                        var6 = var7.includes;
                                        var5 = var4.name;
                                        var5 = var6.bind(var7)(var5);
                                        if (!var5) {
                                            _fun51186_ip = 159;
                                            continue _fun51186
                                        }
                                    case 121:
                                        var6 = var2.routes;
                                        var5 = var6.some;
                                        var2 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.key;
                                            var0 = _closure4_slot0;
                                            var0 = var0.key;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var2 = var5.bind(var6)(var2);
                                        if (var2) {
                                            _fun51186_ip = 159;
                                            continue _fun51186
                                        }
                                    case 146:
                                        var2 = var3.navigate;
                                        var2 = var2.bind(var3)(var4);
                                        _fun51186_ip = 179;
                                        continue _fun51186;
                                    case 159:
                                        var2 = _closure3_slot0;
                                        var1 = var2.setState;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun51190: for (var _fun51190_ip = 0;;) switch (_fun51190_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var _closure5_slot0 = var2;
                                                    var0 = {};
                                                    var3 = var2.replacingRouteKeys;
                                                    var3 = var3.length;
                                                    var6 = var2.routes;
                                                    if (var3) {
                                                        _fun51190_ip = 36;
                                                        continue _fun51190
                                                    }
                                                case 31:
                                                    var3 = var6;
                                                    _fun51190_ip = 51;
                                                    continue _fun51190;
                                                case 36:
                                                    var5 = var6.filter;
                                                    var4 = function(arg0) { // Environment: var1
                                                        var0 = _closure5_slot0;
                                                        var2 = var0.replacingRouteKeys;
                                                        var1 = var2.includes;
                                                        var0 = arg0;
                                                        var0 = var0.key;
                                                        var0 = var1.bind(var2)(var0);
                                                        var0 = !var0;
                                                        return var0;
                                                    };
                                                    var3 = var5.bind(var6)(var4);
                                                case 51:
                                                    var0.routes = var3;
                                                    var5 = var2.openingRouteKeys;
                                                    var4 = var5.filter;
                                                    var3 = function(arg0) { // Environment: var1
                                                        var0 = _closure4_slot0;
                                                        var1 = var0.key;
                                                        var0 = arg0;
                                                        var0 = var0 !== var1;
                                                        return var0;
                                                    };
                                                    var3 = var4.bind(var5)(var3);
                                                    var0.openingRouteKeys = var3;
                                                    var3 = var2.closingRouteKeys;
                                                    var2 = var3.filter;
                                                    var1 = function(arg0) { // Environment: var1
                                                        var0 = _closure4_slot0;
                                                        var1 = var0.key;
                                                        var0 = arg0;
                                                        var0 = var0 !== var1;
                                                        return var0;
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                    var0.closingRouteKeys = var1;
                                                    var1 = new Array(0);
                                                    var0.replacingRouteKeys = var1;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 179:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.handleOpenRoute = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun51194: for (var _fun51194_ip = 0;;) switch (_fun51194_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var7 = var0.route;
                                        var _closure4_slot0 = var7;
                                        var0 = _closure3_slot0;
                                        var2 = var0.props;
                                        var0 = var2.state;
                                        var2 = var2.navigation;
                                        var6 = var0.routes;
                                        var5 = var6.some;
                                        var4 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.key;
                                            var0 = _closure4_slot0;
                                            var0 = var0.key;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var4 = var5.bind(var6)(var4);
                                        if (var4) {
                                            _fun51194_ip = 85;
                                            continue _fun51194
                                        }
                                    case 63:
                                        var4 = _closure3_slot0;
                                        var3 = var4.setState;
                                        var1 = function(arg0) { // Environment: var1
                                            var2 = arg0;
                                            var0 = {};
                                            var5 = var2.routes;
                                            var4 = var5.filter;
                                            var3 = function(arg0) { // Environment: var1
                                                var0 = arg0;
                                                var1 = var0.key;
                                                var0 = _closure4_slot0;
                                                var0 = var0.key;
                                                var0 = var1 !== var0;
                                                return var0;
                                            };
                                            var3 = var4.bind(var5)(var3);
                                            var0.routes = var3;
                                            var5 = var2.openingRouteKeys;
                                            var4 = var5.filter;
                                            var3 = function(arg0) { // Environment: var1
                                                var0 = _closure4_slot0;
                                                var1 = var0.key;
                                                var0 = arg0;
                                                var0 = var0 !== var1;
                                                return var0;
                                            };
                                            var3 = var4.bind(var5)(var3);
                                            var0.openingRouteKeys = var3;
                                            var3 = var2.closingRouteKeys;
                                            var2 = var3.filter;
                                            var1 = function(arg0) { // Environment: var1
                                                var0 = _closure4_slot0;
                                                var1 = var0.key;
                                                var0 = arg0;
                                                var0 = var0 !== var1;
                                                return var0;
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            var0.closingRouteKeys = var1;
                                            return var0;
                                        };
                                        var1 = var3.bind(var4)(var1);
                                        _fun51194_ip = 179;
                                        continue _fun51194;
                                    case 85:
                                        var1 = var2.dispatch;
                                        var3 = global;
                                        var6 = var3.Object;
                                        var5 = var6.assign;
                                        var8 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 12;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var3 = var8.bind(var3)(var4);
                                        var4 = var3.StackActions;
                                        var3 = var4.pop;
                                        var4 = var3.bind(var4)();
                                        var3 = {};
                                        var7 = var7.key;
                                        var3.source = var7;
                                        var0 = var0.key;
                                        var3.target = var0;
                                        var0 = {};
                                        var0 = var5.bind(var6)(var0, var4, var3);
                                        var0 = var1.bind(var2)(var0);
                                    case 179:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.handleCloseRoute = var2;
                            var2 = function(arg0, arg1) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.route;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.emit;
                                var0 = {};
                                var4 = 'transitionStart';
                                var0.type = var4;
                                var4 = {};
                                var5 = arg1;
                                var4.closing = var5;
                                var0.data = var4;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.handleTransitionStart = var2;
                            var2 = function(arg0, arg1) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.route;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.emit;
                                var0 = {};
                                var4 = 'transitionEnd';
                                var0.type = var4;
                                var4 = {};
                                var5 = arg1;
                                var4.closing = var5;
                                var0.data = var4;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.handleTransitionEnd = var2;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.route;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.emit;
                                var0 = {};
                                var4 = 'gestureStart';
                                var0.type = var4;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.handleGestureStart = var2;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.route;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.emit;
                                var0 = {};
                                var4 = 'gestureEnd';
                                var0.type = var4;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.handleGestureEnd = var2;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.route;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.emit;
                                var0 = {};
                                var4 = 'gestureCancel';
                                var0.type = var4;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0.handleGestureCancel = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var4;
                var5 = _closure1_slot10;
                var3 = undefined;
                var2 = arg0;
                var2 = var5.bind(var3)(var4, var2);
                var2 = _closure1_slot7;
                var5 = {};
                var1 = 'render';
                var5.key = var1;
                var1 = function() {
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var5 = var0.props;
                    var1 = var5.state;
                    var _closure3_slot1 = var1;
                    var1 = var5.descriptors;
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot3;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var5, var1);
                    var _closure3_slot2 = var1;
                    var0 = var0.state;
                    var1 = var0.routes;
                    var _closure3_slot3 = var1;
                    var1 = var0.descriptors;
                    var _closure3_slot4 = var1;
                    var1 = var0.openingRouteKeys;
                    var _closure3_slot5 = var1;
                    var0 = var0.closingRouteKeys;
                    var _closure3_slot6 = var0;
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot12;
                    var0 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.container;
                    var0.style = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 13;
                    var4 = var9[var4];
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.SafeAreaProviderCompat;
                    var4 = {};
                    var6 = 14;
                    var6 = var9[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.SafeAreaInsetsContext;
                    var7 = var6.Consumer;
                    var6 = {};
                    var8 = function arg0() {
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = _closure1_slot11;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 15;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.Consumer;
                        var0 = {};
                        var4 = function arg0() {
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var0 = var0.HeaderShownContext;
                            var1 = var0.Consumer;
                            var0 = {};
                            var4 = function arg0() {
                                var3 = _closure1_slot11;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 16;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = global;
                                var6 = var0.Object;
                                var5 = var6.assign;
                                var4 = {};
                                var0 = _closure4_slot0;
                                var4.insets = var0;
                                var0 = arg0;
                                var4.isParentHeaderShown = var0;
                                var0 = _closure5_slot0;
                                var4.isParentModal = var0;
                                var7 = _closure3_slot0;
                                var8 = var7.getPreviousRoute;
                                var4.getPreviousRoute = var8;
                                var8 = _closure3_slot3;
                                var4.routes = var8;
                                var8 = _closure3_slot5;
                                var4.openingRouteKeys = var8;
                                var8 = _closure3_slot6;
                                var4.closingRouteKeys = var8;
                                var8 = var7.handleOpenRoute;
                                var4.onOpenRoute = var8;
                                var8 = var7.handleCloseRoute;
                                var4.onCloseRoute = var8;
                                var8 = var7.handleTransitionStart;
                                var4.onTransitionStart = var8;
                                var8 = var7.handleTransitionEnd;
                                var4.onTransitionEnd = var8;
                                var8 = var7.renderHeader;
                                var4.renderHeader = var8;
                                var8 = var7.renderScene;
                                var4.renderScene = var8;
                                var8 = _closure3_slot1;
                                var4.state = var8;
                                var8 = _closure3_slot4;
                                var4.descriptors = var8;
                                var8 = var7.handleGestureStart;
                                var4.onGestureStart = var8;
                                var8 = var7.handleGestureEnd;
                                var4.onGestureEnd = var8;
                                var7 = var7.handleGestureCancel;
                                var4.onGestureCancel = var7;
                                var0 = _closure3_slot2;
                                var0 = var5.bind(var6)(var4, var0);
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var0.children = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var6.children = var8;
                    var6 = var2.bind(var3)(var7, var6);
                    var4.children = var6;
                    var4 = var2.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5.value = var1;
                var1 = new Array(1);
                var1[0] = var5;
                var5 = {};
                var6 = 'getDerivedStateFromProps';
                var5.key = var6;
                var0 = function arg0, arg1() {
                    _fun51209: for (var _fun51209_ip = 0;;) switch (_fun51209_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = arg1;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var6;
                            var1 = var0.state;
                            var2 = var1.routes;
                            var1 = var6.previousRoutes;
                            if (!(var2 !== var1)) {
                                _fun51209_ip = 100;
                                continue _fun51209
                            }
                        case 37:
                            var1 = var0.state;
                            var3 = var1.routes;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var0 = var0.key;
                                return var0;
                            };
                            var4 = var2.bind(var3)(var1);
                            var3 = var6.previousRoutes;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var0 = var0.key;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = function arg0, arg1() {
                                _fun51210: for (var _fun51210_ip = 0;;) switch (_fun51210_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = arg1;
                                        var _closure4_slot0 = var0;
                                        var2 = var3.length;
                                        var0 = var0.length;
                                        var0 = var2 === var0;
                                        if (!var0) {
                                            _fun51210_ip = 45;
                                            continue _fun51210
                                        }
                                    case 29:
                                        var2 = var3.every;
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            var1 = _closure4_slot0;
                                            var0 = arg1;
                                            var1 = var1[var0];
                                            var0 = arg0;
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1);
                                    case 45:
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var4, var3);
                            if (!var1) {
                                _fun51209_ip = 117;
                                continue _fun51209
                            }
                        case 100:
                            var1 = var6.routes;
                            var1 = var1.length;
                            if (var1) {
                                _fun51209_ip = 1250;
                                continue _fun51209
                            }
                        case 117:
                            var1 = var0.state;
                            var2 = var1.index;
                            var1 = var0.state;
                            var1 = var1.routes;
                            var1 = var1.length;
                            var24 = 1;
                            var1 = var1 - var24;
                            if (!(!(var2 < var1))) {
                                _fun51209_ip = 167;
                                continue _fun51209
                            }
                        case 154:
                            var1 = var0.state;
                            var19 = var1.routes;
                            _fun51209_ip = 205;
                            continue _fun51209;
                        case 167:
                            var1 = var0.state;
                            var4 = var1.routes;
                            var3 = var4.slice;
                            var1 = var0.state;
                            var1 = var1.index;
                            var2 = var1 + var24;
                            var1 = 0;
                            var19 = var3.bind(var4)(var1, var2);
                        case 205:
                            var16 = var6.openingRouteKeys;
                            var11 = var6.closingRouteKeys;
                            var _closure3_slot3 = var11;
                            var17 = var6.replacingRouteKeys;
                            var _closure3_slot4 = var17;
                            var10 = var6.previousRoutes;
                            var1 = var10.length;
                            var1 = var1 - var24;
                            var18 = var10[var1];
                            var _closure3_slot5 = var18;
                            var1 = var19.length;
                            var1 = var1 - var24;
                            var13 = var19[var1];
                            var _closure3_slot6 = var13;
                            var2 = function arg0() {
                                _fun51217: for (var _fun51217_ip = 0;;) switch (_fun51217_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1.descriptors;
                                        var1 = var1[var2];
                                        if (var1) {
                                            _fun51217_ip = 37;
                                            continue _fun51217
                                        }
                                    case 23:
                                        var0 = _closure3_slot1;
                                        var0 = var0.descriptors;
                                        var1 = var0[var2];
                                    case 37:
                                        var0 = !var1;
                                        if (var0) {
                                            _fun51217_ip = 60;
                                            continue _fun51217
                                        }
                                    case 43:
                                        var1 = var1.options;
                                        var2 = var1.animationEnabled;
                                        var1 = false;
                                        var0 = var1 !== var2;
                                    case 60:
                                        return var0;
                                }
                            };
                            var _closure3_slot7 = var2;
                            if (!var18) {
                                _fun51209_ip = 300;
                                continue _fun51209
                            }
                        case 283:
                            var3 = var18.key;
                            var1 = var13.key;
                            if (!(var3 === var1)) {
                                _fun51209_ip = 442;
                                continue _fun51209
                            }
                        case 300:
                            var1 = var17.length;
                            if (var1) {
                                _fun51209_ip = 331;
                                continue _fun51209
                            }
                        case 308:
                            var1 = var11.length;
                            var8 = var19;
                            var7 = var16;
                            var4 = var11;
                            var3 = var17;
                            if (!var1) {
                                _fun51209_ip = 1131;
                                continue _fun51209
                            }
                        case 331:
                            var1 = var19.slice;
                            var1 = var1.bind(var19)();
                            var14 = var1.splice;
                            var12 = var14.apply;
                            var9 = var1.length;
                            var9 = var9 - var24;
                            var20 = new Array(2);
                            var20[0] = var9;
                            var9 = 0;
                            var20[1] = var9;
                            var15 = var20.concat;
                            var22 = _closure1_slot4;
                            var23 = var6.routes;
                            var21 = var23.filter;
                            var9 = function(arg0) { // Environment: var5
                                _fun51228: for (var _fun51228_ip = 0;;) switch (_fun51228_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.key;
                                        var1 = _closure3_slot7;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var4);
                                        var1 = !var0;
                                        var0 = !var1;
                                        if (var1) {
                                            _fun51228_ip = 65;
                                            continue _fun51228
                                        }
                                    case 31:
                                        var3 = _closure3_slot4;
                                        var1 = var3.includes;
                                        var1 = var1.bind(var3)(var4);
                                        if (var1) {
                                            _fun51228_ip = 62;
                                            continue _fun51228
                                        }
                                    case 48:
                                        var3 = _closure3_slot3;
                                        var2 = var3.includes;
                                        var1 = var2.bind(var3)(var4);
                                    case 62:
                                        var0 = var1;
                                    case 65:
                                        return var0;
                                }
                            };
                            var21 = var21.bind(var23)(var9);
                            var9 = undefined;
                            var9 = var22.bind(var9)(var21);
                            var9 = var15.bind(var20)(var9);
                            var9 = var12.bind(var14)(var1, var9);
                            var8 = var1;
                            var7 = var16;
                            var4 = var11;
                            var3 = var17;
                            _fun51209_ip = 1131;
                            continue _fun51209;
                        case 442:
                            var9 = var10.some;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot6;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var9.bind(var10)(var1);
                            if (var1) {
                                _fun51209_ip = 925;
                                continue _fun51209
                            }
                        case 464:
                            var1 = var13.key;
                            var25 = undefined;
                            var1 = var2.bind(var25)(var1);
                            if (!var1) {
                                _fun51209_ip = 497;
                                continue _fun51209
                            }
                        case 479:
                            var10 = var16.includes;
                            var9 = var13.key;
                            var9 = var10.bind(var16)(var9);
                            var1 = !var9;
                        case 497:
                            var8 = var19;
                            var7 = var16;
                            var4 = var11;
                            var3 = var17;
                            if (!var1) {
                                _fun51209_ip = 1131;
                                continue _fun51209
                            }
                        case 515:
                            var12 = new Array(0);
                            var10 = var12.concat;
                            var1 = _closure1_slot4;
                            var9 = var1.bind(var25)(var16);
                            var14 = var13.key;
                            var1 = new Array(1);
                            var1[0] = var14;
                            var20 = var10.bind(var12)(var9, var1);
                            var9 = var11.filter;
                            var1 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot6;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var22 = var9.bind(var11)(var1);
                            _closure3_slot3 = var22;
                            var9 = var17.filter;
                            var1 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot6;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var21 = var9.bind(var17)(var1);
                            _closure3_slot4 = var21;
                            var9 = var19.some;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot5;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var14 = var9.bind(var19)(var1);
                            var12 = var19;
                            var10 = var20;
                            var9 = var22;
                            var1 = var21;
                            if (var14) {
                                _fun51209_ip = 908;
                                continue _fun51209
                            }
                        case 627:
                            var15 = var20.filter;
                            var14 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot5;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var27 = var15.bind(var20)(var14);
                            var15 = var13.key;
                            var13 = var0.descriptors;
                            var13 = var13[var15];
                            if (var13) {
                                _fun51209_ip = 670;
                                continue _fun51209
                            }
                        case 660:
                            var14 = var6.descriptors;
                            var13 = var14[var15];
                        case 670:
                            var13 = var13.options;
                            var13 = var13.animationTypeForReplace;
                            var14 = null;
                            var15 = var14 != var13;
                            var14 = 'push';
                            if (!var15) {
                                _fun51209_ip = 697;
                                continue _fun51209
                            }
                        case 694:
                            var14 = var13;
                        case 697:
                            var13 = 'pop';
                            if (!(var13 !== var14)) {
                                _fun51209_ip = 806;
                                continue _fun51209
                            }
                        case 705:
                            var20 = new Array(0);
                            var15 = var20.concat;
                            var13 = _closure1_slot4;
                            var14 = var13.bind(var25)(var21);
                            var26 = var18.key;
                            var13 = new Array(1);
                            var13[0] = var26;
                            var13 = var15.bind(var20)(var14, var13);
                            _closure3_slot4 = var13;
                            var15 = var22.filter;
                            var14 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot5;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var14 = var15.bind(var22)(var14);
                            _closure3_slot3 = var14;
                            var15 = var19.slice;
                            var15 = var15.bind(var19)();
                            var26 = var15.splice;
                            var20 = var15.length;
                            var24 = var20 - var24;
                            var20 = 0;
                            var20 = var26.bind(var15)(var24, var20, var18);
                            var20 = var15;
                            var15 = var27;
                            _fun51209_ip = 896;
                            continue _fun51209;
                        case 806:
                            var28 = new Array(0);
                            var26 = var28.concat;
                            var24 = _closure1_slot4;
                            var23 = var24.bind(var25)(var22);
                            var29 = var18.key;
                            var22 = new Array(1);
                            var22[0] = var29;
                            var22 = var26.bind(var28)(var23, var22);
                            _closure3_slot3 = var22;
                            var26 = var27.filter;
                            var23 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot6;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var15 = var26.bind(var27)(var23);
                            var27 = new Array(0);
                            var26 = var27.concat;
                            var25 = var24.bind(var25)(var19);
                            var24 = new Array(1);
                            var24[0] = var18;
                            var20 = var26.bind(var27)(var25, var24);
                            var14 = var22;
                            var13 = var21;
                        case 896:
                            var12 = var20;
                            var10 = var15;
                            var9 = var14;
                            var1 = var13;
                        case 908:
                            var8 = var12;
                            var7 = var10;
                            var4 = var9;
                            var3 = var1;
                            _fun51209_ip = 1131;
                            continue _fun51209;
                        case 925:
                            var9 = var19.some;
                            var1 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure3_slot5;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var9.bind(var19)(var1);
                            var8 = var19;
                            var7 = var16;
                            var4 = var11;
                            var3 = var17;
                            if (var1) {
                                _fun51209_ip = 1131;
                                continue _fun51209
                            }
                        case 959:
                            var1 = var18.key;
                            var15 = undefined;
                            var12 = var2.bind(var15)(var1);
                            if (!var12) {
                                _fun51209_ip = 992;
                                continue _fun51209
                            }
                        case 974:
                            var2 = var11.includes;
                            var1 = var18.key;
                            var1 = var2.bind(var11)(var1);
                            var12 = !var1;
                        case 992:
                            var10 = var19;
                            var9 = var16;
                            var2 = var11;
                            var1 = var17;
                            if (!var12) {
                                _fun51209_ip = 1119;
                                continue _fun51209
                            }
                        case 1007:
                            var20 = new Array(0);
                            var13 = var20.concat;
                            var14 = _closure1_slot4;
                            var12 = var14.bind(var15)(var11);
                            var21 = var18.key;
                            var11 = new Array(1);
                            var11[0] = var21;
                            var12 = var13.bind(var20)(var12, var11);
                            _closure3_slot3 = var12;
                            var13 = var16.filter;
                            var11 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot5;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var9 = var13.bind(var16)(var11);
                            var16 = var17.filter;
                            var11 = function(arg0) { // Environment: var5
                                var0 = _closure3_slot5;
                                var1 = var0.key;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var11 = var16.bind(var17)(var11);
                            _closure3_slot4 = var11;
                            var17 = new Array(0);
                            var16 = var17.concat;
                            var15 = var14.bind(var15)(var19);
                            var14 = new Array(1);
                            var14[0] = var18;
                            var10 = var16.bind(var17)(var15, var14);
                            var2 = var12;
                            var1 = var11;
                        case 1119:
                            var8 = var10;
                            var7 = var9;
                            var4 = var2;
                            var3 = var1;
                        case 1131:
                            var1 = var8.length;
                            if (var1) {
                                _fun51209_ip = 1175;
                                continue _fun51209
                            }
                        case 1139:
                            var1 = global;
                            var9 = var1.Error;
                            var1 = var9.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var32 = 'There should always be at least one route in the navigation state.';
                            var33 = var2;
                            var1 = new var33[var9](var32, var31);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 1175:
                            var9 = var8.reduce;
                            var2 = function(arg0, arg1) { // Environment: var5
                                _fun51229: for (var _fun51229_ip = 0;;) switch (_fun51229_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = arg1;
                                        var2 = var3.key;
                                        var1 = _closure3_slot0;
                                        var5 = var1.descriptors;
                                        var1 = var3.key;
                                        var1 = var5[var1];
                                        if (var1) {
                                            _fun51229_ip = 55;
                                            continue _fun51229
                                        }
                                    case 36:
                                        var4 = _closure3_slot1;
                                        var4 = var4.descriptors;
                                        var3 = var3.key;
                                        var1 = var4[var3];
                                    case 55:
                                        var0[var2] = var1;
                                        return var0;
                                }
                            };
                            var1 = {};
                            var2 = var9.bind(var8)(var2, var1);
                            var1 = {};
                            var1.routes = var8;
                            var8 = var0.state;
                            var8 = var8.routes;
                            var1.previousRoutes = var8;
                            var8 = var0.descriptors;
                            var1.previousDescriptors = var8;
                            var1.openingRouteKeys = var7;
                            var1.closingRouteKeys = var4;
                            var1.replacingRouteKeys = var3;
                            var1.descriptors = var2;
                            return var1;
                        case 1250:
                            var4 = var6.routes;
                            var3 = var6.previousRoutes;
                            var2 = var0.descriptors;
                            var1 = var6.previousDescriptors;
                            var8 = var0.descriptors;
                            var7 = var6.previousDescriptors;
                            if (!(var8 !== var7)) {
                                _fun51209_ip = 1321;
                                continue _fun51209
                            }
                        case 1290:
                            var10 = var6.routes;
                            var9 = var10.reduce;
                            var8 = function(arg0, arg1) { // Environment: var5
                                _fun51214: for (var _fun51214_ip = 0;;) switch (_fun51214_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = arg1;
                                        var2 = var3.key;
                                        var1 = _closure3_slot0;
                                        var5 = var1.descriptors;
                                        var1 = var3.key;
                                        var1 = var5[var1];
                                        if (var1) {
                                            _fun51214_ip = 55;
                                            continue _fun51214
                                        }
                                    case 36:
                                        var4 = _closure3_slot1;
                                        var4 = var4.descriptors;
                                        var3 = var3.key;
                                        var1 = var4[var3];
                                    case 55:
                                        var0[var2] = var1;
                                        return var0;
                                }
                            };
                            var7 = {};
                            var2 = var9.bind(var10)(var8, var7);
                            var1 = var0.descriptors;
                        case 1321:
                            var7 = var0.state;
                            var8 = var7.routes;
                            var7 = var6.previousRoutes;
                            if (!(var8 !== var7)) {
                                _fun51209_ip = 1408;
                                continue _fun51209
                            }
                        case 1342:
                            var7 = var0.state;
                            var10 = var7.routes;
                            var9 = var10.reduce;
                            var8 = function(arg0, arg1) { // Environment: var5
                                var0 = arg0;
                                var2 = arg1;
                                var1 = var2.key;
                                var0[var1] = var2;
                                return var0;
                            };
                            var7 = {};
                            var7 = var9.bind(var10)(var8, var7);
                            var _closure3_slot2 = var7;
                            var7 = var6.routes;
                            var6 = var7.map;
                            var5 = function(arg0) { // Environment: var5
                                _fun51216: for (var _fun51216_ip = 0;;) switch (_fun51216_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = _closure3_slot2;
                                        var0 = var1.key;
                                        var0 = var2[var0];
                                        if (var0) {
                                            _fun51216_ip = 25;
                                            continue _fun51216
                                        }
                                    case 22:
                                        var0 = var1;
                                    case 25:
                                        return var0;
                                }
                            };
                            var4 = var6.bind(var7)(var5);
                            var0 = var0.state;
                            var3 = var0.routes;
                        case 1408:
                            var0 = {};
                            var0.routes = var4;
                            var0.previousRoutes = var3;
                            var0.descriptors = var2;
                            var0.previousDescriptors = var1;
                            return var0;
                    }
                };
                var5.value = var0;
                var0 = new Array(1);
                var0[0] = var5;
                var0 = var2.bind(var3)(var4, var1, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var5 = var6.create;
            var3 = {};
            var7 = {};
            var7.flex = var8;
            var3.container = var7;
            var3 = var5.bind(var6)(var3);
            var _closure1_slot13 = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 29, 6, 7, 15, 17, 18, 31, 27, 33, 5791, 5794, 1470, 5795, 1571, 5821, 5824]);