// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var8[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = 1;
    var6 = var8[var3];
    var5 = metroImportAll;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var5 = var3.useImperativeHandle;
    var _closure1_slot3 = var5;
    var3 = var3.useRef;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var6 = new Array(0);
    var5 = var6.concat;
    var3 = 3;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.nativeViewProps;
    var4 = var4.bind(var0)(var3);
    var3 = ['onGestureHandlerEvent', 'onGestureHandlerStateChange'];
    var3 = var5.bind(var6)(var4, var3);
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        _fun44861: for (var _fun44861_ip = 0;;) switch (_fun44861_ip) {
            case 0:
                var3 = arg0;
                var6 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var3;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun44861_ip = 31;
                    continue _fun44861
                }
            case 23:
                var1 = arguments[var2];
                if (!(var6 === var1)) {
                    _fun44861_ip = 35;
                    continue _fun44861
                }
            case 31:
                var1 = {};
                _fun44861_ip = 39;
                continue _fun44861;
            case 35:
                var1 = arguments[var2];
            case 39:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot2;
                var1 = var2.forwardRef;
                var0 = function(arg0, arg1) { // Environment: var0
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var9 = global;
                    var1 = var9.Object;
                    var0 = var1.keys;
                    var4 = var0.bind(var1)(var5);
                    var3 = var4.reduce;
                    var1 = {};
                    var10 = var9.Object;
                    var7 = var10.assign;
                    var6 = _closure2_slot1;
                    var0 = {};
                    var0 = var7.bind(var10)(var0, var6);
                    var1.gestureHandlerProps = var0;
                    var0 = {};
                    var6 = var5.enabled;
                    var0.enabled = var6;
                    var6 = var5.hitSlop;
                    var0.hitSlop = var6;
                    var5 = var5.testID;
                    var0.testID = var5;
                    var1.childProps = var0;
                    var0 = function(arg0, arg1) { // Environment: var2
                        _fun44863: for (var _fun44863_ip = 0;;) switch (_fun44863_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = _closure1_slot6;
                                var1 = var2.includes;
                                var1 = var1.bind(var2)(var3);
                                if (var1) {
                                    _fun44863_ip = 49;
                                    continue _fun44863
                                }
                            case 26:
                                var2 = var0.childProps;
                                var1 = _closure3_slot0;
                                var1 = var1[var3];
                                var2[var3] = var1;
                                _fun44863_ip = 70;
                                continue _fun44863;
                            case 49:
                                var2 = var0.gestureHandlerProps;
                                var1 = _closure3_slot0;
                                var1 = var1[var3];
                                var2[var3] = var1;
                            case 70:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var0, var1);
                    var7 = var0.gestureHandlerProps;
                    var12 = var0.childProps;
                    var5 = _closure1_slot4;
                    var3 = undefined;
                    var4 = null;
                    var0 = var5.bind(var3)(var4);
                    var _closure3_slot1 = var0;
                    var10 = var5.bind(var3)(var4);
                    var _closure3_slot2 = var10;
                    var6 = _closure1_slot3;
                    var5 = new Array(2);
                    var5[0] = var0;
                    var5[1] = var10;
                    var4 = arg1;
                    var2 = function() { // Environment: var2
                        _fun44864: for (var _fun44864_ip = 0;;) switch (_fun44864_ip) {
                            case 0:
                                var0 = _closure3_slot2;
                                var2 = var0.current;
                                var0 = _closure3_slot1;
                                var4 = var0.current;
                                var0 = null;
                                if (!var4) {
                                    _fun44864_ip = 57;
                                    continue _fun44864
                                }
                            case 26:
                                var0 = null;
                                if (!var2) {
                                    _fun44864_ip = 57;
                                    continue _fun44864
                                }
                            case 31:
                                var1 = _closure3_slot1;
                                var3 = var1.current;
                                var2 = var2.handlerTag;
                                var3.handlerTag = var2;
                                var0 = var1.current;
                            case 57:
                                return var0;
                        }
                    };
                    var2 = var6.bind(var3)(var4, var2, var5);
                    var2 = _closure1_slot5;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.NativeViewGestureHandler;
                    var6 = var9.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var4.ref = var10;
                    var8 = _closure2_slot0;
                    var11 = var9.Object;
                    var10 = var11.assign;
                    var9 = {};
                    var9.ref = var0;
                    var0 = {};
                    var0 = var10.bind(var11)(var0, var12, var9);
                    var0 = var2.bind(var3)(var8, var0);
                    var4.children = var0;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var7, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var5 = null;
                var2 = var5 == var3;
                var1 = undefined;
                if (var2) {
                    _fun44861_ip = 82;
                    continue _fun44861
                }
            case 77:
                var1 = var3.displayName;
            case 82:
                if (var1) {
                    _fun44861_ip = 117;
                    continue _fun44861
                }
            case 85:
                var4 = var5 == var3;
                var2 = undefined;
                if (var4) {
                    _fun44861_ip = 114;
                    continue _fun44861
                }
            case 94:
                var4 = var3.render;
                var5 = var5 == var4;
                var2 = undefined;
                if (var5) {
                    _fun44861_ip = 114;
                    continue _fun44861
                }
            case 109:
                var2 = var4.name;
            case 114:
                var1 = var2;
            case 117:
                if (var1) {
                    _fun44861_ip = 140;
                    continue _fun44861
                }
            case 120:
                var4 = 'string';
                var2 = typeof var3;
                var2 = var4 === var2;
                if (!var2) {
                    _fun44861_ip = 137;
                    continue _fun44861
                }
            case 134:
                var2 = var3;
            case 137:
                var1 = var2;
            case 140:
                if (var1) {
                    _fun44861_ip = 149;
                    continue _fun44861
                }
            case 143:
                var1 = 'ComponentWrapper';
            case 149:
                var0.displayName = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 31, 33, 4991]);