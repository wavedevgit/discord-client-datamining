// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var3 = var8.memo;
    var9 = var8.useCallback;
    var _closure1_slot3 = var9;
    var9 = var8.useMemo;
    var _closure1_slot4 = var9;
    var8 = var8.useRef;
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'function pnpm_BottomSheetFooterTsx1(){const{animatedFooterPosition,animatedKeyboardState,KEYBOARD_STATE,bottomInset}=this.__closure;let footerTranslateY=animatedFooterPosition.get();if(animatedKeyboardState.get()!==KEYBOARD_STATE.SHOWN){footerTranslateY=footerTranslateY-bottomInset;}return{transform:[{translateY:Math.max(0,footerTranslateY)}]};}';
    var4.code = var5;
    var _closure1_slot7 = var4;
    var1 = function(arg0) { // Original name: BottomSheetFooterComponent, environment: var1
        _fun45316: for (var _fun45316_ip = 0;;) switch (_fun45316_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.animatedFooterPosition;
                var _closure2_slot0 = var16;
                var1 = var0.bottomInset;
                var4 = undefined;
                var18 = 0;
                if (!(var4 !== var1)) {
                    _fun45316_ip = 32;
                    continue _fun45316
                }
            case 29:
                var18 = var1;
            case 32:
                var _closure2_slot1 = var18;
                var13 = var0.style;
                var _closure2_slot2 = var13;
                var5 = var0.children;
                var2 = _closure1_slot5;
                var0 = null;
                var8 = var2.bind(var4)(var0);
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 2;
                var6 = var11[var2];
                var7 = var3.bind(var4)(var6);
                var6 = var7.useBottomSheetInternal;
                var6 = var6.bind(var7)();
                var14 = var6.animatedFooterHeight;
                var _closure2_slot3 = var14;
                var17 = var6.animatedKeyboardState;
                var _closure2_slot4 = var17;
                var9 = 3;
                var6 = var11[var9];
                var15 = var3.bind(var4)(var6);
                var12 = var15.useAnimatedStyle;
                var7 = function() { // Original name: pnpm_BottomSheetFooterTsx1, environment: var10
                    _fun45317: for (var _fun45317_ip = 0;;) switch (_fun45317_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot4;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.KEYBOARD_STATE;
                            var2 = var2.SHOWN;
                            var5 = var1;
                            if (!(var3 !== var2)) {
                                _fun45317_ip = 81;
                                continue _fun45317
                            }
                        case 73:
                            var0 = _closure2_slot1;
                            var5 = var1 - var0;
                        case 81:
                            var0 = {};
                            var2 = {};
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.max;
                            var1 = 0;
                            var1 = var3.bind(var4)(var1, var5);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var6 = {};
                var6.animatedFooterPosition = var16;
                var6.animatedKeyboardState = var17;
                var19 = 4;
                var19 = var11[var19];
                var19 = var3.bind(var4)(var19);
                var19 = var19.KEYBOARD_STATE;
                var6.KEYBOARD_STATE = var19;
                var6.bottomInset = var18;
                var7.__closure = var6;
                var6 = 5322275157644.0;
                var7.__workletHash = var6;
                var6 = _closure1_slot7;
                var7.__initData = var6;
                var6 = new Array(3);
                var6[0] = var18;
                var6[1] = var17;
                var6[2] = var16;
                var6 = var12.bind(var15)(var7, var6);
                var _closure2_slot5 = var6;
                var12 = _closure1_slot4;
                var7 = new Array(2);
                var7[0] = var13;
                var7[1] = var6;
                var6 = function() { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.styles;
                    var1 = var0.container;
                    var0 = new Array(3);
                    var0[0] = var1;
                    var2 = _closure2_slot2;
                    var0[1] = var2;
                    var1 = _closure2_slot5;
                    var0[2] = var1;
                    return var0;
                };
                var6 = var12.bind(var4)(var6, var7);
                var13 = _closure1_slot3;
                var12 = new Array(1);
                var12[0] = var14;
                var7 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.height;
                    var1 = _closure2_slot3;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var7 = var13.bind(var4)(var7, var12);
                var12 = new Array(1);
                var12[0] = var14;
                var10 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var2 = var0.height;
                    var1 = _closure2_slot3;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var10 = var13.bind(var4)(var10, var12);
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useBoundingClientRect;
                var2 = var2.bind(var3)(var8, var10);
                if (!(var0 !== var5)) {
                    _fun45316_ip = 380;
                    continue _fun45316
                }
            case 329:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var1.ref = var8;
                var1.onLayout = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 380:
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetFooter';
    var1.displayName = var3;
    var2.BottomSheetFooter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4900, 3680, 4896, 5032]);