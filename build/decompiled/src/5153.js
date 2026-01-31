// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = ['focusHook', 'enableFooterMarginAdjustment', 'onLayout', 'style', 'children'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.memo;
    var9 = var8.useEffect;
    var _closure1_slot4 = var9;
    var9 = var8.useCallback;
    var _closure1_slot5 = var9;
    var8 = var8.useMemo;
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var1 = function arg0() {
        _fun46233: for (var _fun46233_ip = 0;;) switch (_fun46233_ip) {
            case 0:
                var7 = arg0;
                var4 = var7.focusHook;
                var3 = undefined;
                if (!(var3 === var4)) {
                    _fun46233_ip = 24;
                    continue _fun46233
                }
            case 17:
                var4 = _closure1_slot4;
            case 24:
                var0 = var7.enableFooterMarginAdjustment;
                var14 = var3 !== var0;
                if (!var14) {
                    _fun46233_ip = 40;
                    continue _fun46233
                }
            case 37:
                var14 = var0;
            case 40:
                var12 = var7.onLayout;
                var _closure2_slot0 = var12;
                var9 = var7.style;
                var0 = var7.children;
                var6 = _closure1_slot3;
                var2 = _closure1_slot2;
                var7 = var6.bind(var3)(var7, var2);
                var8 = _closure1_slot0;
                var15 = _closure1_slot1;
                var6 = 4;
                var2 = var15[var6];
                var10 = var8.bind(var3)(var2);
                var2 = var10.useBottomSheetInternal;
                var11 = var2.bind(var10)();
                var13 = var11.animatedScrollableContentOffsetY;
                var _closure2_slot1 = var13;
                var2 = var11.animatedScrollableType;
                var _closure2_slot2 = var2;
                var10 = var11.enableDynamicSizing;
                var _closure2_slot3 = var10;
                var11 = var11.animatedContentHeight;
                var _closure2_slot4 = var11;
                var6 = var15[var6];
                var8 = var8.bind(var3)(var6);
                var6 = var8.useBottomSheetContentContainerStyle;
                var6 = var6.bind(var8)(var14, var9);
                var _closure2_slot5 = var6;
                var9 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var5
                    var1 = _closure2_slot5;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.styles;
                    var1 = var1.container;
                    var0[1] = var1;
                    return var0;
                };
                var8 = var9.bind(var3)(var6, var8);
                var9 = _closure1_slot5;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var2;
                var2 = function() { // Environment: var5
                    var2 = _closure2_slot1;
                    var1 = 0;
                    var2.value = var1;
                    var2 = _closure2_slot2;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.SCROLLABLE_TYPE;
                    var1 = var1.VIEW;
                    var2.value = var1;
                    return var0;
                };
                var2 = var9.bind(var3)(var2, var6);
                var6 = new Array(3);
                var6[0] = var12;
                var6[1] = var11;
                var6[2] = var10;
                var5 = function(arg0) { // Environment: var5
                    _fun46236: for (var _fun46236_ip = 0;;) switch (_fun46236_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun46236_ip = 44;
                                continue _fun46236
                            }
                        case 13:
                            var4 = _closure2_slot4;
                            var3 = var4.set;
                            var1 = var2.nativeEvent;
                            var1 = var1.layout;
                            var1 = var1.height;
                            var1 = var3.bind(var4)(var1);
                        case 44:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun46236_ip = 62;
                                continue _fun46236
                            }
                        case 51:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var9.bind(var3)(var5, var6);
                var2 = var4.bind(var3)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot7;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.onLayout = var9;
                var4.style = var8;
                var4.children = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetView';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 4901, 5154, 4897]);