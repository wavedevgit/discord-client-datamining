// design/components/Modal/native/ModalFloatingAction.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'width': '100%',
        'paddingHorizontal': 16
    };
    var3.floating = var8;
    var8 = {};
    var9 = 96;
    var8.height = var9;
    var3.spacer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Modal/native/ModalFloatingAction.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun73205: for (var _fun73205_ip = 0;;) switch (_fun73205_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.isVisible;
                var _closure2_slot0 = var6;
                var11 = var3.floatingBackgroundColor;
                var _closure2_slot1 = var11;
                var0 = null;
                var1 = Object.create(var0);
                var13 = 0;
                var1.isVisible = var13;
                var1.floatingBackgroundColor = var13;
                var21 = {};
                var20 = var3;
                var19 = var1;
                var8 = copyDataProperties(var21, var20, var19);
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot8;
                var7 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = 4;
                var0 = var0[var4];
                var9 = var1.bind(var3)(var0);
                var1 = var9.useSharedValue;
                var0 = 0;
                if (!var6) {
                    _fun73205_ip = 109;
                    continue _fun73205
                }
            case 106:
                var0 = 1;
            case 109:
                var16 = var1.bind(var9)(var0);
                _closure2_slot2 = var16;
                var17 = _closure1_slot3;
                var9 = var17.useContext;
                var18 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 5;
                var1 = var0[var1];
                var1 = var18.bind(var3)(var1);
                var1 = var1.AccessibilityPreferencesContext;
                var1 = var9.bind(var17)(var1);
                var1 = var1.reducedMotion;
                var15 = var1.enabled;
                _closure2_slot3 = var15;
                var1 = _closure1_slot1;
                var9 = 6;
                var9 = var0[var9];
                var9 = var1.bind(var3)(var9);
                var9 = var9.bind(var3)();
                var14 = var17.useEffect;
                var12 = new Array(2);
                var12[0] = var6;
                var12[1] = var16;
                var10 = function() { // Environment: var2
                    _fun73206: for (var _fun73206_ip = 0;;) switch (_fun73206_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 7;
                            var5 = var5[var0];
                            var0 = undefined;
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.withSpring;
                            var4 = _closure2_slot0;
                            var5 = 0;
                            if (!var4) {
                                _fun73206_ip = 54;
                                continue _fun73206
                            }
                        case 51:
                            var5 = 1;
                        case 54:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 8;
                            var1 = var8[var1];
                            var1 = var4.bind(var0)(var1);
                            var4 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var10 = var14.bind(var17)(var10, var12);
                var10 = var0[var4];
                var12 = var18.bind(var3)(var10);
                var10 = var12.useAnimatedStyle;
                var2 = function() {
                    _fun73207: for (var _fun73207_ip = 0;;) switch (_fun73207_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 4;
                            var1 = var6[var3];
                            var4 = undefined;
                            var10 = var5.bind(var4)(var1);
                            var9 = var10.interpolate;
                            var7 = _closure2_slot2;
                            var2 = var7.get;
                            var8 = var2.bind(var7)();
                            var7 = [0, 1];
                            var2 = [0, 1];
                            var2 = var9.bind(var10)(var8, var7, var2);
                            var0.opacity = var2;
                            var2 = _closure2_slot1;
                            var0.borderBottomColor = var2;
                            var2 = 16;
                            var0.borderBottomWidth = var2;
                            var2 = {};
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var5 = var6.interpolate;
                            var4 = _closure2_slot2;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = _closure2_slot3;
                            var1 = 0;
                            if (!var3) {
                                _fun73207_ip = 146;
                                continue _fun73207
                            }
                        case 136:
                            var1 = 0.999999;
                        case 146:
                            var3 = new Array(2);
                            var3[0] = var1;
                            var1 = 1;
                            var3[1] = var1;
                            var1 = [32, 0];
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var14 = {};
                var17 = var0[var4];
                var17 = var18.bind(var3)(var17);
                var17 = var17.interpolate;
                var14.interpolate = var17;
                var14.sharedValue = var16;
                var14.floatingBackgroundColor = var11;
                var14.useReducedMotion = var15;
                var2.__closure = var14;
                var14 = 1679390676673.0;
                var2.__workletHash = var14;
                var14 = _closure1_slot9;
                var2.__initData = var14;
                var10 = var10.bind(var12)(var2);
                var2 = _closure1_slot7;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(3);
                var4[0] = var10;
                var7 = var7.floating;
                var4[1] = var7;
                var7 = {};
                var9 = var9.bottom;
                var7.paddingBottom = var9;
                var4[2] = var7;
                var0.style = var4;
                var4 = 'none';
                if (!var6) {
                    _fun73205_ip = 389;
                    continue _fun73205
                }
            case 385:
                var4 = 'auto';
            case 389:
                var0.pointerEvents = var4;
                var7 = _closure1_slot6;
                var12 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 9;
                var4 = var9[var4];
                var6 = var12.bind(var3)(var4);
                var4 = {};
                var10 = 10;
                var10 = var9[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.bind(var3)(var11);
                var10 = var12.alpha;
                var12 = var10.bind(var12)(var13);
                var10 = var12.hex;
                var12 = var10.bind(var12)();
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var4.colors = var10;
                var10 = [0, 0.5];
                var4.locations = var10;
                var10 = _closure1_slot4;
                var10 = var10.absoluteFill;
                var4.style = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var5 = 11;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ModalActionButton;
                var5 = {};
                var21 = var5;
                var20 = var8;
                var8 = copyDataProperties(var21, var20);
                var9 = 'primary';
                var8 = 'variant';
                var5[var8] = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ModalFloatingAction = var3;
    var1 = function() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.spacer;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ModalFloatingActionSpacer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3722, 3167, 1568, 4082, 4088, 4099, 669, 9212, 2]);