// modules/premium/native/BoostedGuildTierProgressCircle.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot5 = var6;
    var3 = var3.BoostedGuildTiers;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'relative',
        'width': 70,
        'height': 70
    };
    var3.guildTierProgressCircle = var8;
    var8 = {
        'backgroundColor': null,
        'width': 64,
        'height': 64,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xxl;
    var8.borderRadius = var9;
    var3.guildTierBackground = var8;
    var8 = {
        'width': 18,
        'height': 30
    };
    var3.guildTierNoneIcon = var8;
    var8 = {
        'width': 24,
        'height': 24
    };
    var3.guildTierIcon = var8;
    var8 = {
        'lineHeight': 16,
        'marginTop': 2
    };
    var3.guildTierName = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function(arg0, arg1) { // Original name: getTierIcon, environment: var1
        _fun82444: for (var _fun82444_ip = 0;;) switch (_fun82444_ip) {
            case 0:
                var1 = arg1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun82444_ip = 162;
                    continue _fun82444
                }
            case 12:
                var3 = var1.premiumTier;
                var2 = _closure1_slot6;
                var2 = var2.NONE;
                if (!(var3 !== var2)) {
                    _fun82444_ip = 162;
                    continue _fun82444
                }
            case 38:
                var2 = var1.premiumTier;
                var1 = _closure1_slot6;
                var1 = var1.TIER_1;
                if (!(var1 !== var2)) {
                    _fun82444_ip = 138;
                    continue _fun82444
                }
            case 58:
                var1 = _closure1_slot6;
                var1 = var1.TIER_2;
                if (!(var1 !== var2)) {
                    _fun82444_ip = 114;
                    continue _fun82444
                }
            case 72:
                var1 = _closure1_slot6;
                var1 = var1.TIER_3;
                if (!(var1 !== var2)) {
                    _fun82444_ip = 90;
                    continue _fun82444
                }
            case 86:
                var1 = undefined;
                return var1;
            case 90:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 114:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 138:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 162:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getTier048PxSource;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/BoostedGuildTierProgressCircle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun82445: for (var _fun82445_ip = 0;;) switch (_fun82445_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.guild;
                var8 = var0.theme;
                var0 = _closure1_slot9;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = null;
                var4 = var1 == var13;
                var0 = undefined;
                if (var4) {
                    _fun82445_ip = 63;
                    continue _fun82445
                }
            case 58:
                var0 = var13.id;
            case 63:
                var0 = var2.bind(var3)(var0);
                var2 = var0.available;
                if (!(var1 != var13)) {
                    _fun82445_ip = 381;
                    continue _fun82445
                }
            case 81:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var16 = 11;
                var0 = var0[var16];
                var5 = var4.bind(var3)(var0);
                var4 = var5.getNextGuildTierFromGuild;
                var0 = var13.id;
                var5 = var4.bind(var5)(var0);
                var4 = var1 != var5;
                var0 = null;
                if (!var4) {
                    _fun82445_ip = 134;
                    continue _fun82445
                }
            case 126:
                var4 = _closure1_slot5;
                var0 = var4[var5];
            case 134:
                var5 = var1 != var0;
                var1 = 100;
                var4 = var1;
                if (!var5) {
                    _fun82445_ip = 167;
                    continue _fun82445
                }
            case 147:
                var5 = 0;
                var5 = var0 > var5;
                var4 = var1;
                if (!var5) {
                    _fun82445_ip = 167;
                    continue _fun82445
                }
            case 159:
                var0 = var2 / var0;
                var4 = var0 * var1;
            case 167:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 12;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var6.guildTierProgressCircle;
                var0.style = var5;
                var0.percent = var4;
                var9 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = {};
                var10 = var6.guildTierBackground;
                var4.style = var10;
                var11 = _closure1_slot4;
                var10 = {};
                var12 = _closure1_slot10;
                var12 = var12.bind(var3)(var8, var13);
                var10.source = var12;
                var12 = var6.guildTierIcon;
                var10.style = var12;
                var11 = var2.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var15 = _closure1_slot0;
                var11 = 13;
                var11 = var14[var11];
                var11 = var15.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'interactive-text-active'
                };
                var17 = var6.guildTierName;
                var11.style = var17;
                var14 = var14[var16];
                var15 = var15.bind(var3)(var14);
                var14 = var15.getTierName;
                var13 = var13.premiumTier;
                var13 = var14.bind(var15)(var13);
                var11.children = var13;
                var11 = var2.bind(var3)(var12, var11);
                var10[1] = var11;
                var4.children = var10;
                var4 = var9.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 381:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var6.guildTierBackground;
                var0.style = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = _closure1_slot10;
                var7 = var7.bind(var3)(var8);
                var4.source = var7;
                var6 = var6.guildTierNoneIcon;
                var4.style = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 10534, 10538, 10539, 10540, 6671, 6665, 10152, 3895, 2]);