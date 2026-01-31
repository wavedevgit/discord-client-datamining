// modules/guild_badge/native/GuildBadgeImageSource.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function(arg0, arg1, arg2) { // Original name: resolveImageSource, environment: var1
        _fun59725: for (var _fun59725_ip = 0;;) switch (_fun59725_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var0.premium;
                if (!var0) {
                    _fun59725_ip = 27;
                    continue _fun59725
                }
            case 15:
                var2 = var1.premiumImageSource;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun59725_ip = 97;
                    continue _fun59725
                }
            case 27:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isThemeLight;
                var0 = arg2;
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun59725_ip = 81;
                    continue _fun59725
                }
            case 69:
                var2 = var1.imageSourceLight;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun59725_ip = 89;
                    continue _fun59725
                }
            case 81:
                var0 = var1.imageSource;
                _fun59725_ip = 95;
                continue _fun59725;
            case 89:
                var0 = var1.imageSourceLight;
            case 95:
                _fun59725_ip = 103;
                continue _fun59725;
            case 97:
                var0 = var1.premiumImageSource;
            case 103:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var4 = {};
    var5 = 0;
    var8 = var7[var5];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.STAFF;
    var8 = {};
    var10 = 1;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var8.imageSource = var12;
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.PARTNERED;
    var8 = {};
    var12 = 2;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.imageSource = var12;
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.VERIFIED;
    var8 = {};
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var8.imageSource = var12;
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.COMMUNITY;
    var8 = {};
    var12 = 3;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.imageSource = var12;
    var12 = 4;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.imageSourceLight = var12;
    var12 = 5;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.premiumImageSource = var12;
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.DISCOVERABLE;
    var8 = {};
    var12 = 6;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.imageSource = var12;
    var12 = 7;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.imageSourceLight = var12;
    var12 = 8;
    var12 = var7[var12];
    var12 = var11.bind(var0)(var12);
    var8.premiumImageSource = var12;
    var4[var9] = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.BadgeCategory;
    var9 = var8.VERIFIED_AND_PARTNERED;
    var8 = {};
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var8.imageSource = var10;
    var4[var9] = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.BadgeCategory;
    var8 = var5.NONE;
    var5 = {};
    var4[var8] = var5;
    var _closure1_slot2 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_badge/native/GuildBadgeImageSource.tsx';
    var5 = var6.bind(var7)(var5);
    var2.badgeVariants = var4;
    var2.resolveImageSource = var3;
    var1 = function(arg0, arg1) { // Original name: getGuildBadgeImageSource, environment: var1
        _fun59726: for (var _fun59726_ip = 0;;) switch (_fun59726_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 10;
                var0 = var3[var0];
                var5 = undefined;
                var6 = var2.bind(var5)(var0);
                var4 = var6.getGuildTraits;
                var0 = arg0;
                var4 = var4.bind(var6)(var0);
                var0 = 0;
                var0 = var3[var0];
                var2 = var2.bind(var5)(var0);
                var0 = var2.getBadgeCategory;
                var2 = var0.bind(var2)(var4);
                var0 = _closure1_slot2;
                var3 = var0[var2];
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun59726_ip = 92;
                    continue _fun59726
                }
            case 78:
                var2 = _closure1_slot3;
                var1 = arg1;
                var0 = var2.bind(var5)(var3, var4, var1);
            case 92:
                return var0;
        }
    };
    var2.getGuildBadgeImageSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7354, 7359, 7360, 7361, 7362, 7363, 7364, 7365, 7366, 3165, 7353, 2]);