// modules/collectibles/native/hooks/useCardLayout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.COLLECTIBLES_SHOP_CARD_GAP;
        var2 = arg0;
        var0 = 1;
        var0 = var2 - var0;
        var1 = var1 * var0;
        var0 = arg1;
        var0 = var0 + var1;
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1, arg2() {
        var1 = arg0;
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = arg2;
        var2 = var3.bind(var2)(var1, var0);
        var0 = arg1;
        var0 = var0 - var2;
        var0 = var0 / var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/hooks/useCardLayout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun88491: for (var _fun88491_ip = 0;;) switch (_fun88491_ip) {
            case 0:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 1;
                var0 = var0[var4];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                var8 = var0.width;
                var0 = 320;
                var0 = var8 >= var0;
                var2 = var4;
                if (!var0) {
                    _fun88491_ip = 53;
                    continue _fun88491
                }
            case 50:
                var2 = 2;
            case 53:
                var3 = 2;
                if (!(!(var2 < var3))) {
                    _fun88491_ip = 520;
                    continue _fun88491
                }
            case 63:
                var0 = 768;
                var0 = var8 >= var0;
                var6 = var3;
                if (!var0) {
                    _fun88491_ip = 82;
                    continue _fun88491
                }
            case 79:
                var6 = 4;
            case 82:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 0;
                var10 = var0[var9];
                var10 = var5.bind(var1)(var10);
                var10 = var10.COLLECTIBLES_SHOP_CARD_WIDTH;
                var11 = var10 * var2;
                var10 = var0[var9];
                var10 = var5.bind(var1)(var10);
                var12 = var10.COLLECTIBLES_SHOP_CARD_GAP;
                var10 = var2 - var4;
                var10 = var12 * var10;
                var10 = var11 + var10;
                var11 = var8 - var10;
                var0 = var0[var9];
                var0 = var5.bind(var1)(var0);
                var0 = var0.COLLECTIBLES_SHOP_CARD_GAP;
                var0 = var3 * var0;
                if (!(!(var11 < var0))) {
                    _fun88491_ip = 194;
                    continue _fun88491
                }
            case 165:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var5.bind(var1)(var0);
                var0 = var0.COLLECTIBLES_SHOP_CARD_GAP;
                var3 = var3 * var0;
                _fun88491_ip = 216;
                continue _fun88491;
            case 194:
                var0 = global;
                var10 = var0.Math;
                var5 = var10.max;
                var0 = 4;
                var3 = var5.bind(var10)(var0, var11);
            case 216:
                var0 = _closure1_slot4;
                var10 = var0.bind(var1)(var2, var8, var3);
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var9];
                var0 = var5.bind(var1)(var0);
                var0 = var0.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
                var5 = var3;
                var3 = var2;
                var15 = var10;
                if (!(var10 > var0)) {
                    _fun88491_ip = 336;
                    continue _fun88491
                }
            case 263:
                var0 = var2;
                var15 = var10;
                var3 = var0;
                if (!(var3 < var6)) {
                    _fun88491_ip = 336;
                    continue _fun88491
                }
            case 276:
                var10 = var0 + 1;
                var11 = _closure1_slot4;
                var11 = var11.bind(var1)(var10, var8, var5);
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var9];
                var12 = var13.bind(var1)(var12);
                var12 = var12.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
                var3 = var10;
                var15 = var11;
                if (!(var11 > var12)) {
                    _fun88491_ip = 336;
                    continue _fun88491
                }
            case 323:
                var0 = var10;
                var15 = var11;
                var3 = var0;
                if (var3 < var6) {
                    _fun88491_ip = 276;
                    continue _fun88491
                }
            case 336:
                var0 = global;
                var11 = var0.Math;
                var10 = var11.min;
                var14 = var0.Math;
                var13 = var14.max;
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = var0[var9];
                var6 = var12.bind(var1)(var6);
                var6 = var6.COLLECTIBLES_SHOP_CARD_WIDTH;
                var6 = var13.bind(var14)(var15, var6);
                var0 = var0[var9];
                var0 = var12.bind(var1)(var0);
                var0 = var0.COLLECTIBLES_SHOP_CARD_MAX_WIDTH;
                var6 = var10.bind(var11)(var6, var0);
                var10 = var6 * var3;
                var0 = _closure1_slot3;
                var0 = var0.bind(var1)(var3, var5);
                var0 = var10 + var0;
                if (!(var0 > var8)) {
                    _fun88491_ip = 436;
                    continue _fun88491
                }
            case 432:
                if (!(!(var3 > var4))) {
                    _fun88491_ip = 498;
                    continue _fun88491
                }
            case 436:
                var0 = {};
                var0.columns = var3;
                var0.cardWidth = var6;
                var6 = var6 * var3;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var1)(var7);
                var7 = var7.COLLECTIBLES_SHOP_CARD_GAP;
                var3 = var3 - var4;
                var3 = var7 * var3;
                var3 = var6 + var3;
                var3 = var3 + var5;
                var0.rowWidth = var3;
                _fun88491_ip = 518;
                continue _fun88491;
            case 498:
                var3 = {};
                var3.columns = var4;
                var3.cardWidth = var1;
                var3.rowWidth = var1;
                var0 = var3;
            case 518:
                return var0;
            case 520:
                var0 = {};
                var0.columns = var2;
                var0.cardWidth = var1;
                var0.rowWidth = var1;
                return var0;
        }
    };
    var2.useCardLayout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11268, 1464, 2]);