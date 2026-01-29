// uikit-native/GuildBadgeV2.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var3 = 8;
    var9.marginRight = var3;
    var6.icon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/GuildBadgeV2.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: GuildBadgeV2, environment: var1
        _fun59666: for (var _fun59666_ip = 0;;) switch (_fun59666_ip) {
            case 0:
                var3 = arg0;
                var8 = var3.guild;
                var9 = var3.size;
                var5 = undefined;
                if (!(var9 === var5)) {
                    _fun59666_ip = 54;
                    continue _fun59666
                }
            case 19:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.Sizes;
                var9 = var0.MEDIUM;
            case 54:
                var0 = null;
                var2 = Object.create(var0);
                var1 = 0;
                var2.guild = var1;
                var2.size = var1;
                var13 = {};
                var12 = var3;
                var11 = var2;
                var6 = copyDataProperties(var13, var12, var11);
                var1 = _closure1_slot4;
                var7 = var1.bind(var5)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.useThemeContext;
                var1 = var1.bind(var3)();
                var4 = var1.theme;
                if (!(var0 != var8)) {
                    _fun59666_ip = 241;
                    continue _fun59666
                }
            case 132:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getGuildBadgeImageSource;
                var8 = var1.bind(var3)(var8, var4);
                var3 = var0 == var8;
                var1 = null;
                if (var3) {
                    _fun59666_ip = 239;
                    continue _fun59666
                }
            case 173:
                var4 = _closure1_slot3;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 3;
                var2 = var10[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2.size = var9;
                var2.source = var8;
                var7 = var7.icon;
                var2.style = var7;
                var7 = true;
                var2.disableColor = var7;
                var13 = var2;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var1 = var4.bind(var5)(var3, var2);
            case 239:
                return var1;
            case 241:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: hasGuildBadge, environment: var1
        _fun59667: for (var _fun59667_ip = 0;;) switch (_fun59667_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 6;
                var2 = var0[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var5 = var6.getGuildTraits;
                var2 = arg0;
                var6 = var5.bind(var6)(var2);
                var2 = 7;
                var2 = var0[var2];
                var5 = var3.bind(var4)(var2);
                var2 = var5.getBadgeCategory;
                var2 = var2.bind(var5)(var6);
                var7 = 5;
                var0 = var0[var7];
                var0 = var3.bind(var4)(var0);
                var0 = var0.badgeVariants;
                var5 = var0[var2];
                var2 = null;
                var0 = var2 != var5;
                if (!var0) {
                    _fun59667_ip = 130;
                    continue _fun59667
                }
            case 93:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var4 = var3.bind(var4)(var1);
                var3 = var4.resolveImageSource;
                var1 = arg1;
                var1 = var3.bind(var4)(var5, var6, var1);
                var0 = var2 != var1;
            case 130:
                return var0;
        }
    };
    var2.hasGuildBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 4039, 3165, 7356, 7351, 7352, 2]);