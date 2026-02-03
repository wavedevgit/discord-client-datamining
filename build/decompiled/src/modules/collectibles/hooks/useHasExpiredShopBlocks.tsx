// modules/collectibles/hooks/useHasExpiredShopBlocks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot3 = var6;
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        var3 = arg0;
        var1 = null;
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun88390: for (var _fun88390_ip = 0;;) switch (_fun88390_ip) {
                case 0:
                    var3 = arg0;
                    var4 = var3.type;
                    var6 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 2;
                    var2 = var0[var5];
                    var0 = undefined;
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.ShopBlockType;
                    var2 = var2.IMMERSIVE_BANNER;
                    if (!(var4 !== var2)) {
                        _fun88390_ip = 107;
                        continue _fun88390
                    }
                case 49:
                    var4 = var3.type;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.ShopBlockType;
                    var1 = var1.COUNTDOWN_TIMER;
                    var2 = null;
                    if (!(var4 === var1)) {
                        _fun88390_ip = 141;
                        continue _fun88390
                    }
                case 89:
                    var4 = var3.endTime;
                    var1 = var4.getTime;
                    var2 = var1.bind(var4)();
                    _fun88390_ip = 141;
                    continue _fun88390;
                case 107:
                    var4 = var3.endTime;
                    var1 = null;
                    var4 = var1 != var4;
                    if (!var4) {
                        _fun88390_ip = 138;
                        continue _fun88390
                    }
                case 122:
                    var4 = var3.endTime;
                    var3 = var4.getTime;
                    var1 = var3.bind(var4)();
                case 138:
                    var2 = var1;
                case 141:
                    var3 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var3;
                    if (var3) {
                        _fun88390_ip = 175;
                        continue _fun88390
                    }
                case 157:
                    var4 = var4 != var2;
                    if (!var4) {
                        _fun88390_ip = 172;
                        continue _fun88390
                    }
                case 164:
                    var5 = _closure2_slot0;
                    var4 = var2 < var5;
                case 172:
                    var3 = var4;
                case 175:
                    if (!var3) {
                        _fun88390_ip = 182;
                        continue _fun88390
                    }
                case 178:
                    _closure2_slot0 = var2;
                case 182:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useHasExpiredShopBlocks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 600000;
    var2.COLLECTIBLES_SHOP_HOME_CACHE_DURATION = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        var5 = arg0;
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = false;
        var8 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var0 = 2;
        var8 = var3.bind(var4)(var8, var0);
        var0 = 0;
        var0 = var8[var0];
        var3 = 1;
        var3 = var8[var3];
        var _closure2_slot3 = var3;
        var3 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun88392: for (var _fun88392_ip = 0;;) switch (_fun88392_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var3 = _closure2_slot1;
                    if (var3) {
                        _fun88392_ip = 149;
                        continue _fun88392
                    }
                case 30:
                    var3 = _closure2_slot2;
                    if (var3) {
                        _fun88392_ip = 149;
                        continue _fun88392
                    }
                case 37:
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun88392_ip = 149;
                        continue _fun88392
                    }
                case 43:
                    var3 = global;
                    var6 = var3.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var7 = var5 - var4;
                    var4 = 0;
                    if (!(!(var7 <= var4))) {
                        _fun88392_ip = 136;
                        continue _fun88392
                    }
                case 70:
                    var5 = _closure2_slot3;
                    var4 = false;
                    var4 = var5.bind(var0)(var4);
                    var5 = var3.setTimeout;
                    var6 = var3.Math;
                    var4 = var6.min;
                    var3 = 2147483647;
                    var4 = var4.bind(var6)(var3, var7);
                    var3 = function() { // Environment: var2
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var5.bind(var0)(var3, var4);
                    var _closure3_slot0 = var3;
                    var2 = function() { // Environment: var2
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var2;
                case 136:
                    var3 = _closure2_slot3;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    _fun88392_ip = 160;
                    continue _fun88392;
                case 149:
                    var2 = _closure2_slot3;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                case 160:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useHasExpiredShopBlocks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3307, 2]);