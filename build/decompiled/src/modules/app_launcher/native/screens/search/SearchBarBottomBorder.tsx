// modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 3;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var8.borderBottomColor = var10;
    var8.borderBottomWidth = var9;
    var3.border = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: usePinnedSearchBarBottomBorder, environment: var1
        _fun108338: for (var _fun108338_ip = 0;;) switch (_fun108338_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.key;
                var11 = var1.triggerScrollHeight;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun108338_ip = 25;
                    continue _fun108338
                }
            case 22:
                var11 = 1;
            case 25:
                var _closure2_slot0 = var11;
                var _closure2_slot1 = var4;
                var1 = _closure1_slot5;
                var6 = var1.bind(var4)();
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var3 = var8[var1];
                var9 = var12.bind(var4)(var3);
                var7 = var9.useSharedValue;
                var3 = 0;
                var13 = var7.bind(var9)(var3);
                _closure2_slot1 = var13;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var7 = new Array(2);
                var7[0] = var5;
                var7[1] = var13;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var9.bind(var10)(var3, var7);
                var9 = var10.useCallback;
                var7 = new Array(1);
                var7[0] = var13;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.offset;
                    var1 = _closure2_slot1;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var3 = var9.bind(var10)(var3, var7);
                var7 = var8[var1];
                var9 = var12.bind(var4)(var7);
                var7 = var9.useAnimatedStyle;
                var0 = function() { // Original name: u, environment: var0
                    _fun108341: for (var _fun108341_ip = 0;;) switch (_fun108341_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var6 = undefined;
                            var4 = var3.bind(var6)(var2);
                            var3 = var4.withSpring;
                            var7 = _closure2_slot1;
                            var5 = var7.get;
                            var5 = var5.bind(var7)();
                            var2 = _closure2_slot0;
                            var5 = var5 > var2;
                            var2 = 0;
                            if (!var5) {
                                _fun108341_ip = 64;
                                continue _fun108341
                            }
                        case 61:
                            var2 = 1;
                        case 64:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 6;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.springStandard;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var10 = {};
                var14 = 5;
                var14 = var8[var14];
                var14 = var12.bind(var4)(var14);
                var14 = var14.withSpring;
                var10.withSpring = var14;
                var10.scrollPosition = var13;
                var10.triggerScrollHeight = var11;
                var11 = 6;
                var11 = var8[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.springStandard;
                var10.springStandard = var11;
                var0.__closure = var10;
                var10 = 5466161440826.0;
                var0.__workletHash = var10;
                var10 = _closure1_slot6;
                var0.__initData = var10;
                var7 = var7.bind(var9)(var0);
                var0 = {};
                var0.scrollHandler = var3;
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var8 = var6.border;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1 = var3.bind(var4)(var2, var1, var5);
                var0.bottomBorderComponent = var1;
                return var0;
        }
    };
    var2.usePinnedSearchBarBottomBorder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 3679, 4040, 4046, 2]);