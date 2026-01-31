// modules/collectibles/native/SkeletonCard.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = arg0;
        var1.width = var2;
        var2 = arg1;
        var1.height = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 3;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BORDER_SUBTLE;
        var1.backgroundColor = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.sm;
        var1.borderRadius = var2;
        var0.skeletonCard = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/SkeletonCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88145: for (var _fun88145_ip = 0;;) switch (_fun88145_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.width;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun88145_ip = 45;
                    continue _fun88145
                }
            case 16:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var5 = var1.COLLECTIBLES_SHOP_CARD_WIDTH;
            case 45:
                var4 = var0.height;
                var6 = var0.style;
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun88145_ip = 94;
                    continue _fun88145
                }
            case 65:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var4 = var0.COLLECTIBLES_SHOP_CARD_HEIGHT;
            case 94:
                var0 = _closure1_slot5;
                var4 = var0.bind(var3)(var5, var4);
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var5 = var7[var0];
                var10 = var8.bind(var3)(var5);
                var9 = var10.useSharedValue;
                var5 = 0.3;
                var10 = var9.bind(var10)(var5);
                _closure2_slot0 = var10;
                var12 = _closure1_slot3;
                var11 = var12.useEffect;
                var9 = new Array(1);
                var9[0] = var10;
                var5 = function() { // Environment: var2
                    var3 = _closure2_slot0;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 5;
                    var1 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var1);
                    var6 = var7.withRepeat;
                    var1 = 6;
                    var1 = var5[var1];
                    var8 = var4.bind(var0)(var1);
                    var5 = var8.withTiming;
                    var4 = {};
                    var1 = 650;
                    var4.duration = var1;
                    var1 = 1;
                    var5 = var5.bind(var8)(var1, var4);
                    var4 = -1;
                    var1 = true;
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var11.bind(var12)(var5, var9);
                var5 = var7[var0];
                var8 = var8.bind(var3)(var5);
                var5 = var8.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var9 = {};
                var9.opacity = var10;
                var2.__closure = var9;
                var9 = 5620456625640.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot6;
                var2.__initData = var9;
                var5 = var5.bind(var8)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var4.skeletonCard;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 11191, 3679, 4056, 2]);