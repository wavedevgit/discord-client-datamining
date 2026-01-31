// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var5 = function() { // Original name: useSafeAreaInsets, environment: var4
        _fun17571: for (var _fun17571_ip = 0;;) switch (_fun17571_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.useContext;
                var1 = _closure1_slot9;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun17571_ip = 30;
                    continue _fun17571
                }
            case 28:
                return var1;
            case 30:
                var1 = global;
                var2 = var1.Error;
                var4 = _closure1_slot12;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot13 = var5;
    var0 = ['children', 'initialMetrics', 'initialSafeAreaInsets', 'style'];
    var _closure1_slot2 = var0;
    var0 = ['onChange', 'style', 'children'];
    var _closure1_slot3 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var7 = var6[var1];
    var1 = arg3;
    var7 = var1.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var1 = 3;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var8 = var1.Dimensions;
    var _closure1_slot7 = var8;
    var8 = var1.StyleSheet;
    var1 = 4;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = var7.createContext;
    var6 = null;
    var1 = var1.bind(var7)(var6);
    var _closure1_slot9 = var1;
    var3 = var7.createContext;
    var6 = var3.bind(var7)(var6);
    var _closure1_slot10 = var6;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.fill = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 'No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.';
    var _closure1_slot12 = var3;
    var3 = var1.Consumer;
    var2.SafeAreaInsetsContext = var1;
    var2.SafeAreaFrameContext = var6;
    var6 = function(arg0) { // Original name: SafeAreaProvider, environment: var4
        _fun17572: for (var _fun17572_ip = 0;;) switch (_fun17572_ip) {
            case 0:
                var5 = arg0;
                var14 = var5.children;
                var13 = var5.initialMetrics;
                var2 = var5.initialSafeAreaInsets;
                var10 = var5.style;
                var4 = _closure1_slot5;
                var1 = _closure1_slot2;
                var3 = undefined;
                var7 = var4.bind(var3)(var5, var1);
                var5 = _closure1_slot6;
                var4 = var5.useContext;
                var1 = _closure1_slot9;
                var6 = var4.bind(var5)(var1);
                var5 = _closure1_slot6;
                var4 = var5.useContext;
                var1 = _closure1_slot10;
                var1 = var4.bind(var5)(var1);
                var5 = _closure1_slot6;
                var4 = var5.useState;
                var8 = null;
                var11 = var8 == var13;
                var9 = undefined;
                if (var11) {
                    _fun17572_ip = 110;
                    continue _fun17572
                }
            case 104:
                var9 = var13.insets;
            case 110:
                if (!(var8 != var9)) {
                    _fun17572_ip = 117;
                    continue _fun17572
                }
            case 114:
                var2 = var9;
            case 117:
                if (!(var8 != var2)) {
                    _fun17572_ip = 124;
                    continue _fun17572
                }
            case 121:
                var6 = var2;
            case 124:
                var9 = var8 != var6;
                var2 = null;
                if (!var9) {
                    _fun17572_ip = 136;
                    continue _fun17572
                }
            case 133:
                var2 = var6;
            case 136:
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot4;
                var6 = 2;
                var5 = var2.bind(var3)(var4, var6);
                var4 = 0;
                var15 = var5[var4];
                var2 = 1;
                var5 = var5[var2];
                var _closure2_slot0 = var5;
                var9 = _closure1_slot6;
                var5 = var9.useState;
                var16 = var8 == var13;
                var11 = undefined;
                if (var16) {
                    _fun17572_ip = 195;
                    continue _fun17572
                }
            case 189:
                var11 = var13.frame;
            case 195:
                if (!(var8 != var11)) {
                    _fun17572_ip = 202;
                    continue _fun17572
                }
            case 199:
                var1 = var11;
            case 202:
                if (!(var8 == var1)) {
                    _fun17572_ip = 265;
                    continue _fun17572
                }
            case 206:
                var11 = {
                    'x': 0,
                    'y': 0
                };
                var17 = _closure1_slot7;
                var13 = var17.get;
                var16 = 'window';
                var13 = var13.bind(var17)(var16);
                var13 = var13.width;
                var11.width = var13;
                var13 = var17.get;
                var13 = var13.bind(var17)(var16);
                var13 = var13.height;
                var11.height = var13;
                var1 = var11;
            case 265:
                var5 = var5.bind(var9)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var5, var6);
                var13 = var1[var4];
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var4 = _closure1_slot6;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = var0.frame;
                    var _closure3_slot0 = var2;
                    var0 = var0.insets;
                    var _closure3_slot1 = var0;
                    var4 = _closure2_slot1;
                    var0 = undefined;
                    var3 = function(arg0) { // Environment: var1
                        _fun17574: for (var _fun17574_ip = 0;;) switch (_fun17574_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure3_slot0;
                                var0 = var4;
                                if (!var2) {
                                    _fun17574_ip = 95;
                                    continue _fun17574
                                }
                            case 16:
                                var2 = _closure3_slot0;
                                var3 = var2.height;
                                var2 = var4.height;
                                if (!(var3 === var2)) {
                                    _fun17574_ip = 91;
                                    continue _fun17574
                                }
                            case 34:
                                var2 = _closure3_slot0;
                                var3 = var2.width;
                                var2 = var4.width;
                                if (!(var3 === var2)) {
                                    _fun17574_ip = 91;
                                    continue _fun17574
                                }
                            case 52:
                                var2 = _closure3_slot0;
                                var3 = var2.x;
                                var2 = var4.x;
                                if (!(var3 === var2)) {
                                    _fun17574_ip = 91;
                                    continue _fun17574
                                }
                            case 70:
                                var2 = _closure3_slot0;
                                var3 = var2.y;
                                var2 = var4.y;
                                var0 = var4;
                                if (!(var3 !== var2)) {
                                    _fun17574_ip = 95;
                                    continue _fun17574
                                }
                            case 91:
                                var0 = _closure3_slot0;
                            case 95:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure2_slot0;
                    var1 = function(arg0) { // Environment: var1
                        _fun17575: for (var _fun17575_ip = 0;;) switch (_fun17575_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun17575_ip = 81;
                                    continue _fun17575
                                }
                            case 6:
                                var2 = _closure3_slot1;
                                var3 = var2.bottom;
                                var2 = var0.bottom;
                                if (!(var3 === var2)) {
                                    _fun17575_ip = 81;
                                    continue _fun17575
                                }
                            case 27:
                                var2 = _closure3_slot1;
                                var3 = var2.left;
                                var2 = var0.left;
                                if (!(var3 === var2)) {
                                    _fun17575_ip = 81;
                                    continue _fun17575
                                }
                            case 45:
                                var2 = _closure3_slot1;
                                var3 = var2.right;
                                var2 = var0.right;
                                if (!(var3 === var2)) {
                                    _fun17575_ip = 81;
                                    continue _fun17575
                                }
                            case 63:
                                var1 = _closure3_slot1;
                                var2 = var1.top;
                                var1 = var0.top;
                                if (!(var2 !== var1)) {
                                    _fun17575_ip = 88;
                                    continue _fun17575
                                }
                            case 81:
                                var0 = _closure3_slot1;
                            case 88:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.NativeSafeAreaProvider;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var9 = _closure1_slot11;
                var11 = var9.fill;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var4.style = var9;
                var4.onInsetsChange = var0;
                var0 = {};
                var9 = var8 != var15;
                var8 = null;
                if (!var9) {
                    _fun17572_ip = 459;
                    continue _fun17572
                }
            case 403:
                var11 = _closure1_slot8;
                var9 = _closure1_slot10;
                var10 = var9.Provider;
                var9 = {};
                var9.value = var13;
                var12 = _closure1_slot9;
                var13 = var12.Provider;
                var12 = {};
                var12.value = var15;
                var12.children = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 459:
                var0.children = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SafeAreaProvider = var6;
    var6 = function(arg0) { // Original name: SafeAreaListener, environment: var4
        var4 = arg0;
        var0 = var4.onChange;
        var _closure2_slot0 = var0;
        var10 = var4.style;
        var0 = var4.children;
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var3 = undefined;
        var7 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot8;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 5;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.NativeSafeAreaProvider;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var9 = _closure1_slot11;
        var11 = var9.fill;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var4.style = var9;
        var8 = function(arg0) { // Original name: onInsetsChange, environment: var8
            var0 = arg0;
            var2 = _closure2_slot0;
            var1 = {};
            var3 = var0.nativeEvent;
            var3 = var3.insets;
            var1.insets = var3;
            var0 = var0.nativeEvent;
            var0 = var0.frame;
            var1.frame = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.onInsetsChange = var8;
        var4.children = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SafeAreaListener = var6;
    var2.useSafeAreaInsets = var5;
    var5 = function() { // Original name: useSafeAreaFrame, environment: var4
        _fun17578: for (var _fun17578_ip = 0;;) switch (_fun17578_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.useContext;
                var1 = _closure1_slot10;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun17578_ip = 30;
                    continue _fun17578
                }
            case 28:
                return var1;
            case 30:
                var1 = global;
                var2 = var1.Error;
                var4 = _closure1_slot12;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useSafeAreaFrame = var5;
    var5 = function(arg0) { // Original name: withSafeAreaInsets, environment: var4
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot6;
        var1 = var2.forwardRef;
        var0 = function(arg0, arg1) { // Environment: var0
            var0 = _closure1_slot13;
            var3 = undefined;
            var0 = var0.bind(var3)();
            var2 = _closure1_slot8;
            var1 = _closure2_slot0;
            var4 = global;
            var7 = var4.Object;
            var6 = var7.assign;
            var5 = {};
            var5.insets = var0;
            var0 = arg1;
            var5.ref = var0;
            var4 = {};
            var0 = arg0;
            var0 = var6.bind(var7)(var4, var0, var5);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.withSafeAreaInsets = var5;
    var4 = function() { // Original name: useSafeArea, environment: var4
        var1 = _closure1_slot13;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var2.useSafeArea = var4;
    var2.SafeAreaConsumer = var3;
    var2.SafeAreaContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 1573]);