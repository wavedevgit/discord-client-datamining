// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = ['theme', 'linking', 'fallback', 'documentTitle', 'onReady'];
    var _closure1_slot3 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot6 = var4;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var3 = var3.WeakMap;
    var5 = var3.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var3
        }
    });
    var13 = var5;
    var3 = new var13[var3](var12);
    var5 = var3 instanceof Object ? var3 : var5;
    var3 = global;
    var3.REACT_NAVIGATION_DEVTOOLS = var5;
    var3 = var4.forwardRef;
    var1 = function(arg0, arg1) { // Original name: NavigationContainerInner, environment: var1
        _fun17491: for (var _fun17491_ip = 0;;) switch (_fun17491_ip) {
            case 0:
                var9 = arg0;
                var10 = var9.theme;
                var4 = undefined;
                if (!(var4 === var10)) {
                    _fun17491_ip = 40;
                    continue _fun17491
                }
            case 17:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var10 = var1.bind(var4)(var0);
            case 40:
                var1 = var9.linking;
                var _closure2_slot0 = var1;
                var3 = var9.fallback;
                var15 = null;
                var0 = null;
                if (!(var4 !== var3)) {
                    _fun17491_ip = 67;
                    continue _fun17491
                }
            case 64:
                var0 = var3;
            case 67:
                var5 = var9.documentTitle;
                var6 = var9.onReady;
                var _closure2_slot1 = var6;
                var7 = _closure1_slot5;
                var3 = _closure1_slot3;
                var12 = var7.bind(var4)(var9, var3);
                var3 = !var1;
                var11 = !var3;
                if (var3) {
                    _fun17491_ip = 120;
                    continue _fun17491
                }
            case 109:
                var7 = var1.enabled;
                var3 = false;
                var11 = var3 !== var7;
            case 120:
                var _closure2_slot2 = var11;
                var3 = var15 != var1;
                if (!var3) {
                    _fun17491_ip = 136;
                    continue _fun17491
                }
            case 131:
                var3 = var1.config;
            case 136:
                if (!var3) {
                    _fun17491_ip = 175;
                    continue _fun17491
                }
            case 139:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 5;
                var3 = var9[var3];
                var9 = var7.bind(var4)(var3);
                var7 = var9.validatePathConfig;
                var3 = var1.config;
                var3 = var7.bind(var9)(var3);
            case 175:
                var16 = _closure1_slot6;
                var3 = var16.useRef;
                var7 = var3.bind(var16)(var15);
                var _closure2_slot3 = var7;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 6;
                var3 = var14[var3];
                var3 = var13.bind(var4)(var3);
                var3 = var3.bind(var4)(var7);
                var3 = 7;
                var3 = var14[var3];
                var3 = var13.bind(var4)(var3);
                var3 = var3.bind(var4)(var7, var5);
                var3 = 8;
                var3 = var14[var3];
                var5 = var13.bind(var4)(var3);
                var9 = global;
                var18 = var9.Object;
                var17 = var18.assign;
                var3 = {};
                var19 = var12.independent;
                var3.independent = var19;
                var3.enabled = var11;
                var19 = new Array(0);
                var3.prefixes = var19;
                var3 = var17.bind(var18)(var3, var1);
                var3 = var5.bind(var4)(var7, var3);
                var5 = var3.getInitialState;
                var17 = var16.useEffect;
                var3 = function() { // Environment: var2
                    _fun17492: for (var _fun17492_ip = 0;;) switch (_fun17492_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            if (!var1) {
                                _fun17492_ip = 64;
                                continue _fun17492
                            }
                        case 15:
                            var1 = global;
                            var3 = var1.REACT_NAVIGATION_DEVTOOLS;
                            var2 = var3.set;
                            var0 = _closure2_slot3;
                            var1 = var0.current;
                            var0 = {};
                            var6 = function() { // Original name: get linking, environment: var4
                                _fun17493: for (var _fun17493_ip = 0;;) switch (_fun17493_ip) {
                                    case 0:
                                        var0 = global;
                                        var4 = var0.Object;
                                        var3 = var4.assign;
                                        var2 = _closure2_slot0;
                                        var1 = {};
                                        var0 = _closure2_slot2;
                                        var1.enabled = var0;
                                        var0 = _closure2_slot0;
                                        var5 = null;
                                        var8 = var5 == var0;
                                        var7 = undefined;
                                        var0 = undefined;
                                        if (var8) {
                                            _fun17493_ip = 57;
                                            continue _fun17493
                                        }
                                    case 47:
                                        var8 = _closure2_slot0;
                                        var0 = var8.prefixes;
                                    case 57:
                                        if (!(var5 == var0)) {
                                            _fun17493_ip = 65;
                                            continue _fun17493
                                        }
                                    case 61:
                                        var0 = new Array(0);
                                    case 65:
                                        var1.prefixes = var0;
                                        var0 = _closure2_slot0;
                                        var8 = var5 == var0;
                                        var0 = undefined;
                                        if (var8) {
                                            _fun17493_ip = 93;
                                            continue _fun17493
                                        }
                                    case 83:
                                        var8 = _closure2_slot0;
                                        var0 = var8.getStateFromPath;
                                    case 93:
                                        if (!(var5 == var0)) {
                                            _fun17493_ip = 126;
                                            continue _fun17493
                                        }
                                    case 97:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var8 = 5;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var7)(var8);
                                        var0 = var8.getStateFromPath;
                                    case 126:
                                        var1.getStateFromPath = var0;
                                        var0 = _closure2_slot0;
                                        var8 = var5 == var0;
                                        var0 = undefined;
                                        if (var8) {
                                            _fun17493_ip = 154;
                                            continue _fun17493
                                        }
                                    case 144:
                                        var8 = _closure2_slot0;
                                        var0 = var8.getPathFromState;
                                    case 154:
                                        if (!(var5 == var0)) {
                                            _fun17493_ip = 187;
                                            continue _fun17493
                                        }
                                    case 158:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var8 = 5;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var7)(var8);
                                        var0 = var8.getPathFromState;
                                    case 187:
                                        var1.getPathFromState = var0;
                                        var0 = _closure2_slot0;
                                        var8 = var5 == var0;
                                        var0 = undefined;
                                        if (var8) {
                                            _fun17493_ip = 215;
                                            continue _fun17493
                                        }
                                    case 205:
                                        var6 = _closure2_slot0;
                                        var0 = var6.getActionFromState;
                                    case 215:
                                        if (!(var5 == var0)) {
                                            _fun17493_ip = 248;
                                            continue _fun17493
                                        }
                                    case 219:
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var5 = 5;
                                        var5 = var8[var5];
                                        var5 = var6.bind(var7)(var5);
                                        var0 = var5.getActionFromState;
                                    case 248:
                                        var1.getActionFromState = var0;
                                        var0 = {};
                                        var0 = var3.bind(var4)(var0, var2, var1);
                                        return var0;
                                }
                            };
                            var5 = undefined;
                            var4 = 'linking';
                            Object.defineProperty(var0, var4, {
                                get: var6,
                                set: var5,
                                enumerable: true
                            });
                            var0 = var2.bind(var3)(var1, var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var17.bind(var16)(var3);
                var3 = 9;
                var3 = var14[var3];
                var3 = var13.bind(var4)(var3);
                var13 = var3.bind(var4)(var5);
                var5 = _closure1_slot4;
                var3 = 2;
                var13 = var5.bind(var4)(var13, var3);
                var3 = 0;
                var3 = var13[var3];
                var5 = 1;
                var13 = var13[var5];
                var17 = var16.useImperativeHandle;
                var14 = arg1;
                var5 = function() { // Environment: var2
                    var0 = _closure2_slot3;
                    var0 = var0.current;
                    return var0;
                };
                var5 = var17.bind(var16)(var14, var5);
                var14 = var16.useMemo;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.options = var1;
                    return var0;
                };
                var5 = var14.bind(var16)(var1, var5);
                var1 = var12.initialState;
                var1 = var15 != var1;
                if (var1) {
                    _fun17491_ip = 423;
                    continue _fun17491
                }
            case 420:
                var1 = !var11;
            case 423:
                if (var1) {
                    _fun17491_ip = 429;
                    continue _fun17491
                }
            case 426:
                var1 = var3;
            case 429:
                var _closure2_slot4 = var1;
                var11 = _closure1_slot6;
                var3 = var11.useRef;
                var3 = var3.bind(var11)(var6);
                var _closure2_slot5 = var3;
                var6 = var11.useEffect;
                var3 = function() { // Environment: var2
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var6.bind(var11)(var3);
                var6 = var11.useEffect;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() { // Environment: var2
                    _fun17497: for (var _fun17497_ip = 0;;) switch (_fun17497_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun17497_ip = 38;
                                continue _fun17497
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun17497_ip = 38;
                                continue _fun17497
                            }
                        case 25:
                            var1 = _closure2_slot5;
                            var0 = var1.current;
                            var0 = var0.bind(var1)();
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var11)(var2, var3);
                if (!var1) {
                    _fun17491_ip = 645;
                    continue _fun17491
                }
            case 496:
                var3 = _closure1_slot7;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 10;
                var1 = var11[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Provider;
                var1 = {};
                var1.value = var5;
                var5 = 11;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.value = var10;
                var10 = _closure1_slot0;
                var8 = 5;
                var8 = var11[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.BaseNavigationContainer;
                var11 = var9.Object;
                var10 = var11.assign;
                var9 = {};
                var14 = var12.initialState;
                if (!(var15 != var14)) {
                    _fun17491_ip = 601;
                    continue _fun17491
                }
            case 595:
                var13 = var12.initialState;
            case 601:
                var9.initialState = var13;
                var9.ref = var7;
                var7 = {};
                var7 = var10.bind(var11)(var7, var12, var9);
                var7 = var3.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 645:
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 33, 1550, 1472, 1551, 1552, 1553, 1555, 1547, 1556]);