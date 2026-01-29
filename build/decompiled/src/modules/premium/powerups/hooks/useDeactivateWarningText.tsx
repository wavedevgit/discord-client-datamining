// modules/premium/powerups/hooks/useDeactivateWarningText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useDeactivateWarningText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useDeactivateWarningText, environment: var1
        var11 = arg0;
        var8 = arg1;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var8;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var3 = 4;
        var2 = var10[var3];
        var7 = undefined;
        var6 = var9.bind(var7)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getMemberCount;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var5.bind(var6)(var4, var2);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot1;
        var2 = 5;
        var2 = var10[var2];
        var2 = var4.bind(var7)(var2);
        var2 = var2.bind(var7)(var11);
        var _closure2_slot3 = var2;
        var4 = var10[var3];
        var13 = var9.bind(var7)(var4);
        var12 = var13.useStateFromStores;
        var4 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() { // Environment: var0
            _fun102860: for (var _fun102860_ip = 0;;) switch (_fun102860_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun102860_ip = 41;
                        continue _fun102860
                    }
                case 35:
                    var0 = var2.vanityURLCode;
                case 41:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var5 = var12.bind(var13)(var5, var4);
        var _closure2_slot4 = var5;
        var4 = 6;
        var4 = var10[var4];
        var13 = var9.bind(var7)(var4);
        var12 = var13.useVanityURLPerkExperimentEnabled;
        var4 = 'Powerup Deactivate Modal';
        var4 = var12.bind(var13)(var11, var4);
        var _closure2_slot5 = var4;
        var3 = var10[var3];
        var10 = var9.bind(var7)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = new Array(3);
        var3[0] = var11;
        var11 = var8.skuId;
        var3[1] = var11;
        var3[2] = var2;
        var2 = function() { // Environment: var0
            _fun102861: for (var _fun102861_ip = 0;;) switch (_fun102861_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var5 = var0.skuId;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var3 = var0.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                    var4 = 0;
                    var0 = 0;
                    if (!(var5 === var3)) {
                        _fun102861_ip = 107;
                        continue _fun102861
                    }
                case 52:
                    var5 = _closure2_slot3;
                    var3 = null;
                    var3 = var3 == var5;
                    var0 = 0;
                    if (var3) {
                        _fun102861_ip = 107;
                        continue _fun102861
                    }
                case 67:
                    var3 = _closure1_slot5;
                    var2 = var3.getSortedRoles;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun102862: for (var _fun102862_ip = 0;;) switch (_fun102862_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = arg1;
                                var0 = var3.colorStrings;
                                var1 = null;
                                var5 = var1 == var0;
                                var4 = undefined;
                                if (var5) {
                                    _fun102862_ip = 29;
                                    continue _fun102862
                                }
                            case 23:
                                var4 = var0.secondaryColor;
                            case 29:
                                var0 = var2;
                                if (!(var1 != var4)) {
                                    _fun102862_ip = 68;
                                    continue _fun102862
                                }
                            case 36:
                                var4 = _closure2_slot3;
                                var3 = var3.id;
                                var3 = var4[var3];
                                var4 = var1 != var3;
                                var1 = 0;
                                if (!var4) {
                                    _fun102862_ip = 64;
                                    continue _fun102862
                                }
                            case 61:
                                var1 = var3;
                            case 64:
                                var0 = var2 + var1;
                            case 68:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var4);
                case 107:
                    return var0;
            }
        };
        var7 = var9.bind(var10)(var7, var2, var3);
        var _closure2_slot6 = var7;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun102863: for (var _fun102863_ip = 0;;) switch (_fun102863_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.skuId;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 7;
                    var1 = var1[var8];
                    var7 = undefined;
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
                    if (!(var1 !== var2)) {
                        _fun102863_ip = 394;
                        continue _fun102863
                    }
                case 51:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.VANITY_URL_POWERUP_SKU_ID;
                    if (!(var1 !== var2)) {
                        _fun102863_ip = 305;
                        continue _fun102863
                    }
                case 81:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID;
                    if (!(var1 !== var2)) {
                        _fun102863_ip = 241;
                        continue _fun102863
                    }
                case 111:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID;
                    if (!(var1 !== var2)) {
                        _fun102863_ip = 241;
                        continue _fun102863
                    }
                case 138:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var1 = var2.bind(var7)(var1);
                    var5 = var1.intl;
                    var4 = var5.formatToPlainString;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var1 = var6[var1];
                    var1 = var2.bind(var7)(var1);
                    var2 = var1["4jSvr1"];
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.title;
                    var1.perk = var6;
                    var9 = _closure2_slot2;
                    var6 = null;
                    var9 = var6 != var9;
                    var6 = 0;
                    if (!var9) {
                        _fun102863_ip = 225;
                        continue _fun102863
                    }
                case 221:
                    var6 = _closure2_slot2;
                case 225:
                    var1.memberCount = var6;
                    var2 = var4.bind(var5)(var2, var1);
                    _fun102863_ip = 568;
                    continue _fun102863;
                case 241:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 8;
                    var1 = var9[var1];
                    var1 = var4.bind(var7)(var1);
                    var5 = var1.intl;
                    var4 = var5.string;
                    var6 = _closure1_slot1;
                    var1 = 9;
                    var1 = var9[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.Vf2ZcR;
                    var2 = var4.bind(var5)(var1);
                    _fun102863_ip = 568;
                    continue _fun102863;
                case 305:
                    var1 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var4 = var5.bind(var7)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var9 = _closure1_slot1;
                    var4 = 9;
                    var4 = var10[var4];
                    var4 = var9.bind(var7)(var4);
                    if (var1) {
                        _fun102863_ip = 373;
                        continue _fun102863
                    }
                case 358:
                    var1 = var4.Du91Rb;
                    var1 = var5.bind(var6)(var1);
                    _fun102863_ip = 386;
                    continue _fun102863;
                case 373:
                    var4 = var4.hN75yb;
                    var1 = var5.bind(var6)(var4);
                case 386:
                    var2 = var1;
                    _fun102863_ip = 568;
                    continue _fun102863;
                case 394:
                    var4 = _closure2_slot6;
                    var1 = 0;
                    if (!(!(var4 > var1))) {
                        _fun102863_ip = 482;
                        continue _fun102863
                    }
                case 404:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 8;
                    var1 = var9[var1];
                    var1 = var4.bind(var7)(var1);
                    var6 = var1.intl;
                    var5 = var6.formatToPlainString;
                    var4 = _closure1_slot1;
                    var1 = 9;
                    var1 = var9[var1];
                    var1 = var4.bind(var7)(var1);
                    var4 = var1.cavtEo;
                    var1 = {};
                    var9 = _closure2_slot1;
                    var9 = var9.title;
                    var1.perk = var9;
                    var1 = var5.bind(var6)(var4, var1);
                    _fun102863_ip = 565;
                    continue _fun102863;
                case 482:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var4 = var5.bind(var7)(var4);
                    var9 = var4.intl;
                    var6 = var9.formatToPlainString;
                    var5 = _closure1_slot1;
                    var4 = 9;
                    var4 = var10[var4];
                    var4 = var5.bind(var7)(var4);
                    var5 = var4["4jSvr1"];
                    var4 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.title;
                    var4.perk = var10;
                    var10 = _closure2_slot6;
                    var4.memberCount = var10;
                    var1 = var6.bind(var9)(var5, var4);
                case 565:
                    var2 = var1;
                case 568:
                    var4 = _closure2_slot4;
                    if (!var4) {
                        _fun102863_ip = 612;
                        continue _fun102863
                    }
                case 575:
                    var1 = _closure2_slot1;
                    var5 = var1.skuId;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.GUILD_POWERUP_LEVEL_3_SKU_ID;
                    var4 = var5 === var1;
                case 612:
                    var1 = null;
                    if (!var4) {
                        _fun102863_ip = 701;
                        continue _fun102863
                    }
                case 617:
                    var0 = _closure2_slot5;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var5.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var6 = _closure1_slot1;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    if (var0) {
                        _fun102863_ip = 685;
                        continue _fun102863
                    }
                case 670:
                    var0 = var3.M4XL5n;
                    var0 = var4.bind(var5)(var0);
                    _fun102863_ip = 698;
                    continue _fun102863;
                case 685:
                    var3 = var3.TkNA7b;
                    var0 = var4.bind(var5)(var3);
                case 698:
                    var1 = var0;
                case 701:
                    var0 = {};
                    var0.warningText = var2;
                    var0.vanityUrlWarning = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1599, 1665, 1410, 566, 9793, 13339, 6598, 1234, 1881, 2]);