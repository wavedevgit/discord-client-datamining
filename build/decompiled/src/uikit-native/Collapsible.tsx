// uikit-native/Collapsible.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = {
        'stiffness': 150,
        'overshootClamping': true
    };
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'relative',
        'overflow': 'hidden'
    };
    var3.collapsible = var8;
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.collapsibleContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/Collapsible.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun58250: for (var _fun58250_ip = 0;;) switch (_fun58250_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.children;
                var11 = var2.collapsibleContent;
                var1 = var2.isExpanded;
                var5 = var2.style;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot9;
                var13 = var2.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var2 = false;
                var4 = var4.bind(var6)(var2);
                var2 = _closure1_slot3;
                var9 = 2;
                var2 = var2.bind(var3)(var4, var9);
                var18 = 0;
                var19 = var2[var18];
                var _closure2_slot0 = var19;
                var8 = 1;
                var15 = var2[var8];
                var _closure2_slot1 = var15;
                var10 = null;
                var6 = var19;
                if (!(var10 != var1)) {
                    _fun58250_ip = 122;
                    continue _fun58250
                }
            case 119:
                var6 = var1;
            case 122:
                var16 = _closure1_slot4;
                var1 = var16.useState;
                var1 = var1.bind(var16)(var18);
                var4 = _closure1_slot3;
                var1 = var4.bind(var3)(var1, var9);
                var2 = var1[var18];
                _closure2_slot2 = var2;
                var1 = var1[var8];
                _closure2_slot3 = var1;
                var1 = var16.useState;
                var1 = var1.bind(var16)(var18);
                var1 = var4.bind(var3)(var1, var9);
                var4 = var1[var18];
                _closure2_slot4 = var4;
                var1 = var1[var8];
                _closure2_slot5 = var1;
                var9 = var16.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var1 = function(arg0) { // Environment: var0
                    _fun58251: for (var _fun58251_ip = 0;;) switch (_fun58251_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun58251_ip = 44;
                                continue _fun58251
                            }
                        case 13:
                            var2 = _closure2_slot3;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var9.bind(var16)(var1, var8);
                var12 = var16.useCallback;
                var9 = new Array(1);
                var9[0] = var4;
                var1 = function(arg0) { // Environment: var0
                    _fun58252: for (var _fun58252_ip = 0;;) switch (_fun58252_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun58252_ip = 44;
                                continue _fun58252
                            }
                        case 13:
                            var2 = _closure2_slot5;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var12.bind(var16)(var1, var9);
                var1 = 0;
                if (!var6) {
                    _fun58250_ip = 250;
                    continue _fun58250
                }
            case 247:
                var1 = var4;
            case 250:
                var17 = var2 + var1;
                _closure2_slot6 = var17;
                var21 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 6;
                var1 = var9[var4];
                var6 = var21.bind(var3)(var1);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot8;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.height = var1;
                    return var0;
                };
                var16 = {};
                var20 = 7;
                var20 = var9[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.withSpring;
                var16.withSpring = var20;
                var16.totalHeight = var17;
                var20 = _closure1_slot8;
                var16.EXPAND_SPRING = var20;
                var1.__closure = var16;
                var16 = 1072657539267.0;
                var1.__workletHash = var16;
                var16 = _closure1_slot10;
                var1.__initData = var16;
                var16 = var2.bind(var6)(var1);
                var6 = _closure1_slot4;
                var2 = var6.useCallback;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var15;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var19 = var13.collapsible;
                var9 = new Array(2);
                var9[0] = var19;
                var10 = null;
                if (!(var17 > var18)) {
                    _fun58250_ip = 460;
                    continue _fun58250
                }
            case 457:
                var10 = var16;
            case 460:
                var9[1] = var10;
                var4.style = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot5;
                var7 = {};
                var7.onLayout = var8;
                var8 = {};
                var8.onPress = var15;
                var8 = var14.bind(var3)(var8);
                var7.children = var8;
                var8 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var13 = var13.collapsibleContent;
                var8.style = var13;
                var8.onLayout = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3681, 4042, 2]);