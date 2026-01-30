// components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: getThemedImageSource, environment: var1
        _fun78258: for (var _fun78258_ip = 0;;) switch (_fun78258_ip) {
            case 0:
                var1 = arg1;
                var0 = arg2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isThemeDark;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun78258_ip = 51;
                    continue _fun78258
                }
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: getTierIcon, environment: var1
        _fun78259: for (var _fun78259_ip = 0;;) switch (_fun78259_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = _closure1_slot6;
                var1 = var1.NONE;
                if (!(var1 !== var2)) {
                    _fun78259_ip = 216;
                    continue _fun78259
                }
            case 26:
                var1 = _closure1_slot6;
                var1 = var1.TIER_1;
                if (!(var1 !== var2)) {
                    _fun78259_ip = 169;
                    continue _fun78259
                }
            case 43:
                var1 = _closure1_slot6;
                var1 = var1.TIER_2;
                if (!(var1 !== var2)) {
                    _fun78259_ip = 122;
                    continue _fun78259
                }
            case 57:
                var1 = _closure1_slot6;
                var1 = var1.TIER_3;
                if (!(var1 !== var2)) {
                    _fun78259_ip = 75;
                    continue _fun78259
                }
            case 71:
                var1 = undefined;
                return var1;
            case 75:
                var5 = _closure1_slot11;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 15;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = 16;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            case 122:
                var5 = _closure1_slot11;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = 14;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            case 169:
                var5 = _closure1_slot11;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = 12;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            case 216:
                var3 = _closure1_slot11;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var2 = undefined;
                var1 = var5.bind(var2)(var0);
                var0 = 10;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var3.bind(var2)(var4, var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BoostedGuildTiers;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 16,
        'borderRadius': null,
        'flexDirection': 'row'
    };
    var9 = 16;
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.guild = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.guildInfo = var8;
    var8 = {
        'fontSize': 16,
        'lineHeight': 20
    };
    var9 = 7;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.DARK_WHITE_500_LIGHT_BLACK_500;
    var8.color = var12;
    var3.guildName = var8;
    var8 = {
        'marginTop': 8,
        'padding': 4,
        'paddingRight': 8,
        'alignSelf': 'flex-start',
        'flexDirection': 'row',
        'borderRadius': 11
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.tierPill = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.tierPillImage = var8;
    var8 = {
        'fontSize': 12,
        'lineHeight': 16,
        'marginLeft': 4
    };
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.DARK_WHITE_500_LIGHT_PRIMARY_660;
    var8.color = var9;
    var3.tierPillText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Original name: PremiumGuildTierPill, environment: var1
        var0 = arg0;
        var10 = var0.tier;
        var11 = var0.theme;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.tierPill;
        var0.style = var4;
        var7 = _closure1_slot7;
        var5 = _closure1_slot4;
        var4 = {};
        var6 = var9.tierPillImage;
        var4.style = var6;
        var6 = _closure1_slot12;
        var6 = var6.bind(var3)(var11, var10);
        var4.source = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var6 = _closure1_slot1;
        var11 = _closure1_slot2;
        var5 = 17;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var9 = var9.tierPillText;
        var5.style = var9;
        var9 = _closure1_slot0;
        var8 = 18;
        var8 = var11[var8];
        var9 = var9.bind(var3)(var8);
        var8 = var9.getTierName;
        var8 = var8.bind(var9)(var10);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/PremiumGuildPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var11 = var0.guild;
        var5 = var0.style;
        var0 = _closure1_slot9;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var14 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 19;
        var0 = var13[var0];
        var4 = var14.bind(var3)(var0);
        var2 = var4.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot5;
            var0 = var0.theme;
            return var0;
        };
        var10 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot8;
        var1 = _closure1_slot3;
        var0 = {};
        var6 = var12.guild;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var9 = _closure1_slot7;
        var8 = _closure1_slot1;
        var6 = 20;
        var4 = var13[var6];
        var5 = var8.bind(var3)(var4);
        var4 = {};
        var4.guild = var11;
        var6 = var13[var6];
        var6 = var14.bind(var3)(var6);
        var6 = var6.GuildIconSizes;
        var6 = var6.LARGE;
        var4.size = var6;
        var6 = false;
        var4.selected = var6;
        var5 = var9.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var12.guildInfo;
        var5.style = var6;
        var6 = 17;
        var6 = var13[var6];
        var8 = var8.bind(var3)(var6);
        var6 = {};
        var12 = var12.guildName;
        var6.style = var12;
        var12 = var11.name;
        var6.children = var12;
        var8 = var9.bind(var3)(var8, var6);
        var6 = new Array(2);
        var6[0] = var8;
        var8 = _closure1_slot10;
        var7 = {};
        var11 = var11.premiumTier;
        var7.tier = var11;
        var7.theme = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 660, 33, 1297, 671, 4834, 3165, 9918, 9919, 9920, 9921, 9922, 9923, 9924, 9925, 1295, 6668, 566, 7356, 2]);