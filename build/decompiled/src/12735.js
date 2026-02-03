// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun97491: for (var _fun97491_ip = 0;;) switch (_fun97491_ip) {
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
            case 72: // try_end0
                _fun97491_ip = 76;
                continue _fun97491;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var4);
    var2.default = var0;
    var3 = 5;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = function arg0, arg1() {
        _fun97494: for (var _fun97494_ip = 0;;) switch (_fun97494_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun97494_ip = 71;
                    continue _fun97494
                }
            case 26:
                var0 = var13.WeakMap;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var22 = var1;
                var0 = new var22[var0](var21);
                var2 = var0 instanceof Object ? var0 : var1;
                var5 = var13.WeakMap;
                var1 = var5.prototype;
                var22 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var1 = new var22[var5](var21);
            case 71:
                if (!var3) {
                    _fun97494_ip = 89;
                    continue _fun97494
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun97494_ip = 330;
                    continue _fun97494
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun97494_ip = 330;
                    continue _fun97494
                }
            case 108:
                var1 = typeof var3;
                var5 = 'object';
                if (!(var5 !== var1)) {
                    _fun97494_ip = 129;
                    continue _fun97494
                }
            case 119:
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun97494_ip = 330;
                    continue _fun97494
                }
            case 129:
                if (!var2) {
                    _fun97494_ip = 159;
                    continue _fun97494
                }
            case 132:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun97494_ip = 320;
                    continue _fun97494
                }
            case 148:
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var11);
            case 159:
                var9 = var3;
                var5 = 'default';
                var4 = var2;
                var1 = undefined;
                var0 = var11;
                for (var6 in var9)
                    case 185: {
                        var0 = var11;
                        case 200: var16 = var6;
                        var14 = var5 !== var16;
                        if (!var14) {
                            _fun97494_ip = 229;
                            continue _fun97494
                        }
                        case 210: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 229: if (!var14) {
                            _fun97494_ip = 185;
                            continue _fun97494
                        }
                        case 232: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun97494_ip = 267;
                            continue _fun97494
                        }
                        case 249: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 267: if (!var14) {
                            _fun97494_ip = 286;
                            continue _fun97494
                        }
                        case 270: var17 = var14.get;
                        if (var17) {
                            _fun97494_ip = 302;
                            continue _fun97494
                        }
                        case 278: var17 = var14.set;
                        if (var17) {
                            _fun97494_ip = 302;
                            continue _fun97494
                        }
                        case 286: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun97494_ip = 185;
                        continue _fun97494;
                        case 302: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun97494_ip = 185;
                        continue _fun97494;
                        case 320: var1 = var2.get;
                        var0 = var1.bind(var2)(var3);
                    }
            case 330:
                return var0;
        }
    };
    var3 = var3.bind(var0)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'right': 0,
        'bottom': 0,
        'zIndex': 1000,
        'opacity': 0.25
    };
    var4.container = var5;
    var5 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': 'transparent',
        'zIndex': 2000
    };
    var4.debugContainer = var5;
    var5 = {
        'backgroundColor': 'lightgray',
        'margin': 50,
        'padding': 20
    };
    var4.debugTextContainer = var5;
    var5 = {
        'color': 'red',
        'fontSize': 16,
        'marginBottom': 10
    };
    var4.debugText = var5;
    var _closure1_slot7 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun97496: for (var _fun97496_ip = 0;;) switch (_fun97496_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var3);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var0 = _closure1_slot3;
                    var10 = var0.bind(var5)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun97496_ip = 75;
                        continue _fun97496
                    }
                case 62:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun97496_ip = 109;
                    continue _fun97496;
                case 75:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot3;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 109:
                    var0 = var3.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var3 = {
                        'opacity': null,
                        'uri': null,
                        'justifyContent': 'center',
                        'alignItems': 'center'
                    };
                    var4 = _closure1_slot7;
                    var4 = var4.container;
                    var4 = var4.opacity;
                    var3.opacity = var4;
                    var0.state = var3;
                    var4 = var2.emitter;
                    var3 = var4.on;
                    var2 = 'overlay';
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var4 = var2.state;
                        var3 = {};
                        var0 = arg0;
                        var0 = var5.bind(var6)(var3, var4, var0);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'createContainerStyle';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.state;
            var8 = var0.opacity;
            var5 = var0.justifyContent;
            var0 = var0.alignItems;
            var2 = _closure1_slot5;
            var4 = var2.Dimensions;
            var3 = var4.get;
            var2 = 'window';
            var2 = var3.bind(var4)(var2);
            var7 = var2.width;
            var6 = var2.height;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.assign;
            var1 = _closure1_slot7;
            var2 = var1.container;
            var1 = {};
            var1.opacity = var8;
            var1.width = var7;
            var1.height = var6;
            var1.justifyContent = var5;
            var1.alignItems = var0;
            var0 = {};
            var0 = var3.bind(var4)(var0, var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderDebug';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.state;
            var0 = var0.showDebug;
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun97500: for (var _fun97500_ip = 0;;) switch (_fun97500_ip) {
                case 0:
                    var6 = this;
                    var2 = var6.state;
                    var11 = var2.uri;
                    var12 = var2.width;
                    var10 = var2.height;
                    var9 = var2.growToWindow;
                    var7 = var2.resizeMode;
                    var4 = var2.marginLeft;
                    var3 = undefined;
                    var0 = 0;
                    if (!(var3 !== var4)) {
                        _fun97500_ip = 53;
                        continue _fun97500
                    }
                case 50:
                    var0 = var4;
                case 53:
                    var5 = var2.marginRight;
                    var4 = 0;
                    if (!(var3 !== var5)) {
                        _fun97500_ip = 68;
                        continue _fun97500
                    }
                case 65:
                    var4 = var5;
                case 68:
                    var5 = var2.marginTop;
                    var8 = 0;
                    if (!(var3 !== var5)) {
                        _fun97500_ip = 82;
                        continue _fun97500
                    }
                case 79:
                    var8 = var5;
                case 82:
                    var2 = var2.marginBottom;
                    var5 = {};
                    var5.width = var12;
                    var5.height = var10;
                    var5.marginTop = var8;
                    var5.marginRight = var4;
                    var1 = 0;
                    if (!(var3 !== var2)) {
                        _fun97500_ip = 115;
                        continue _fun97500
                    }
                case 112:
                    var1 = var2;
                case 115:
                    var5.marginBottom = var1;
                    var5.marginLeft = var0;
                    if (!var9) {
                        _fun97500_ip = 176;
                        continue _fun97500
                    }
                case 127:
                    var0 = _closure1_slot5;
                    var2 = var0.Dimensions;
                    var1 = var2.get;
                    var0 = 'window';
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.width;
                    var5.width = var1;
                    var0 = var0.height;
                    var5.height = var0;
                case 176:
                    var0 = _closure1_slot6;
                    var2 = var0.jsx;
                    var0 = _closure1_slot5;
                    if (var11) {
                        _fun97500_ip = 210;
                        continue _fun97500
                    }
                case 195:
                    var8 = var0.View;
                    var1 = {};
                    var8 = var2.bind(var3)(var8, var1);
                    _fun97500_ip = 250;
                    continue _fun97500;
                case 210:
                    var1 = var0.Image;
                    var0 = {};
                    var10 = {};
                    var10.uri = var11;
                    var0.source = var10;
                    var0.style = var5;
                    var5 = null;
                    if (!var9) {
                        _fun97500_ip = 240;
                        continue _fun97500
                    }
                case 237:
                    var5 = var7;
                case 240:
                    var0.resizeMode = var5;
                    var8 = var2.bind(var3)(var1, var0);
                case 250:
                    var5 = _closure1_slot6;
                    var2 = var5.jsxs;
                    var1 = var5.Fragment;
                    var0 = {};
                    var7 = var5.jsx;
                    var4 = _closure1_slot5;
                    var5 = var4.View;
                    var4 = {};
                    var9 = var6.createContainerStyle;
                    var9 = var9.bind(var6)();
                    var4.style = var9;
                    var9 = 'none';
                    var4.pointerEvents = var9;
                    var4.children = var8;
                    var5 = var7.bind(var3)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = var6.renderDebug;
                    var5 = var5.bind(var6)();
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33]);