// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var16;
    var0 = function arg0() {
        _fun44946: for (var _fun44946_ip = 0;;) switch (_fun44946_ip) {
            case 0:
                var2 = arg0;
                var3 = 'number';
                var1 = typeof var2;
                var0 = var2;
                if (!(var3 !== var1)) {
                    _fun44946_ip = 104;
                    continue _fun44946
                }
            case 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.BaseGesture;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun44946_ip = 95;
                    continue _fun44946
                }
            case 55:
                var4 = var2.current;
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun44946_ip = 77;
                    continue _fun44946
                }
            case 71:
                var3 = var4.handlerTag;
            case 77:
                var4 = var1 != var3;
                var1 = -1;
                if (!var4) {
                    _fun44946_ip = 93;
                    continue _fun44946
                }
            case 90:
                var1 = var3;
            case 93:
                _fun44946_ip = 101;
                continue _fun44946;
            case 95:
                var1 = var2.handlerTag;
            case 101:
                var0 = var1;
            case 104:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun44947: for (var _fun44947_ip = 0;;) switch (_fun44947_ip) {
            case 0:
                var8 = arg0;
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var4 = var0.Set;
                var3 = null;
                var5 = var3 == var8;
                var0 = undefined;
                if (var5) {
                    _fun44947_ip = 76;
                    continue _fun44947
                }
            case 33:
                var7 = var8.map;
                var5 = _closure1_slot6;
                var7 = var7.bind(var8)(var5);
                var5 = var3 == var7;
                var0 = undefined;
                if (var5) {
                    _fun44947_ip = 76;
                    continue _fun44947
                }
            case 59:
                var6 = var7.filter;
                var5 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var0 = var6.bind(var7)(var5);
            case 76:
                if (!(var3 == var0)) {
                    _fun44947_ip = 84;
                    continue _fun44947
                }
            case 80:
                var0 = new Array(0);
            case 84:
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var3;
                var9 = var0;
                var0 = new var10[var4](var9, var8);
                var0 = var0 instanceof Object ? var0 : var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var16[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var16[var3];
    var14 = var4.bind(var0)(var3);
    var3 = 2;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 3;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot3 = var4;
    var4 = var3.useRef;
    var _closure1_slot4 = var4;
    var3 = var3.useState;
    var _closure1_slot5 = var3;
    var13 = new Array(0);
    var12 = var13.concat;
    var3 = 4;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.baseGestureHandlerWithDetectorProps;
    var11 = var14.bind(var0)(var3);
    var3 = 5;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.tapGestureHandlerProps;
    var24 = var14.bind(var0)(var3);
    var3 = 6;
    var4 = var16[var3];
    var4 = var15.bind(var0)(var4);
    var4 = var4.panGestureHandlerProps;
    var23 = var14.bind(var0)(var4);
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.panGestureHandlerCustomNativeProps;
    var22 = var14.bind(var0)(var3);
    var3 = 7;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.longPressGestureHandlerProps;
    var21 = var14.bind(var0)(var3);
    var3 = 8;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.forceTouchGestureHandlerProps;
    var20 = var14.bind(var0)(var3);
    var3 = 9;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.flingGestureHandlerProps;
    var19 = var14.bind(var0)(var3);
    var3 = 10;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.hoverGestureHandlerProps;
    var18 = var14.bind(var0)(var3);
    var3 = 11;
    var3 = var16[var3];
    var3 = var15.bind(var0)(var3);
    var3 = var3.nativeViewGestureHandlerProps;
    var17 = var14.bind(var0)(var3);
    var26 = var13;
    var25 = var11;
    var3 = var26[var12](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
    var2.ALLOWED_PROPS = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.config;
        var4 = _closure1_slot7;
        var0 = var1.config;
        var0 = var0.requireToFail;
        var3 = undefined;
        var0 = var4.bind(var3)(var0);
        var2.requireToFail = var0;
        var2 = var1.config;
        var0 = var1.config;
        var0 = var0.simultaneousWith;
        var0 = var4.bind(var3)(var0);
        var2.simultaneousWith = var0;
        var2 = var1.config;
        var0 = var1.config;
        var0 = var0.blocksHandlers;
        var0 = var4.bind(var3)(var0);
        var2.blocksHandlers = var0;
        var0 = {};
        var2 = var1.config;
        var2 = var2.requireToFail;
        var0.waitFor = var2;
        var2 = var1.config;
        var2 = var2.simultaneousWith;
        var0.simultaneousHandlers = var2;
        var1 = var1.config;
        var1 = var1.blocksHandlers;
        var0.blocksHandlers = var1;
        return var0;
    };
    var2.extractGestureRelations = var3;
    var3 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var2.checkGestureCallbacksForWorklets = var3;
    var3 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var2.validateDetectorChildren = var3;
    var3 = function() {
        var4 = _closure1_slot5;
        var3 = undefined;
        var2 = false;
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot2;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var5 = var4[var2];
        var _closure2_slot0 = var5;
        var2 = 1;
        var4 = var4[var2];
        var _closure2_slot1 = var4;
        var2 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1 = !var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useForceRender = var3;
    var1 = function() {
        _fun44954: for (var _fun44954_ip = 0;;) switch (_fun44954_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = {};
                var3 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.onGestureHandlerEvent;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onGestureHandlerEvent = var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.isNewWebImplementationEnabled;
                var5 = var3.bind(var5)();
                var3 = undefined;
                if (!var5) {
                    _fun44954_ip = 63;
                    continue _fun44954
                }
            case 58:
                var3 = function(arg0) { // Environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.onGestureHandlerEvent;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
            case 63:
                var1.onGestureHandlerStateChange = var3;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.useWebEventHandlers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 27, 31, 4980, 4981, 4993, 4992, 4990, 4996, 5001, 4998, 5002, 4967, 4970, 4965, 5003]);