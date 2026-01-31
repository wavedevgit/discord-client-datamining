// modules/guild_badge/useUpgradeToGuildBadgeV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var7 = var0.Set;
    var6 = 0;
    var3 = var5[var6];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.BadgeCategory;
    var8 = var3.PARTNERED;
    var3 = new Array(5);
    var3[0] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var8 = var8.VERIFIED;
    var3[1] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var8 = var8.VERIFIED_AND_PARTNERED;
    var3[2] = var8;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var8 = var8.COMMUNITY;
    var3[3] = var8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.BadgeCategory;
    var6 = var6.DISCOVERABLE;
    var3[4] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_badge/useUpgradeToGuildBadgeV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96545: for (var _fun96545_ip = 0;;) switch (_fun96545_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun96545_ip = 83;
                    continue _fun96545
                }
            case 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var2 = undefined;
                var3 = var4.bind(var2)(var1);
                var1 = var3.getGuildTraits;
                var3 = var1.bind(var3)(var6);
                var1 = 0;
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.getBadgeCategory;
                var2 = var1.bind(var2)(var3);
                var1 = _closure1_slot2;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7354, 7353, 2]);