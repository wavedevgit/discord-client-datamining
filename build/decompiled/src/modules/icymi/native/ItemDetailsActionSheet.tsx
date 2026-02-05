// modules/icymi/native/ItemDetailsActionSheet.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.height = var9;
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ItemDetailsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103655: for (var _fun103655_ip = 0;;) switch (_fun103655_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var2 = var1.channelId;
                var _closure2_slot1 = var2;
                var1 = var1.id;
                var _closure2_slot2 = var1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 8;
                var1 = var2[var4];
                var3 = undefined;
                var9 = var5.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var8.bind(var9)(var7, var1);
                var1 = var2[var4];
                var9 = var5.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var8.bind(var9)(var7, var1);
                var1 = _closure1_slot1;
                var7 = 9;
                var7 = var2[var7];
                var8 = var1.bind(var3)(var7);
                var7 = true;
                var10 = var8.bind(var3)(var12, var7);
                var4 = var2[var4];
                var7 = var5.bind(var3)(var4);
                var5 = var7.useStateFromStores;
                var8 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var8;
                var0 = function() { // Environment: var0
                    _fun103658: for (var _fun103658_ip = 0;;) switch (_fun103658_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun103658_ip = 40;
                                continue _fun103658
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getDehydratedItem;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var11 = var5.bind(var7)(var4, var0);
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = 'show_icymi_debug_scores';
                var7 = var1.bind(var3)(var0);
                var8 = null;
                if (!(var8 == var17)) {
                    _fun103655_ip = 297;
                    continue _fun103655
                }
            case 218:
                var0 = var8 != var12;
                var13 = undefined;
                if (!var0) {
                    _fun103655_ip = 362;
                    continue _fun103655
                }
            case 230:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 12;
                var0 = var9[var4];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot0;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.AvatarSizes;
                var4 = var4.LARGE;
                var0.size = var4;
                var0.channel = var12;
                var13 = var2.bind(var3)(var1, var0);
                _fun103655_ip = 362;
                continue _fun103655;
            case 297:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 11;
                var0 = var9[var4];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.guild = var17;
                var5 = _closure1_slot0;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.GuildIconSizes;
                var4 = var4.LARGE;
                var0.size = var4;
                var13 = var2.bind(var3)(var1, var0);
            case 362:
                var0 = _closure1_slot10;
                var18 = var0.bind(var3)();
                var14 = var8 != var12;
                if (!var14) {
                    _fun103655_ip = 381;
                    continue _fun103655
                }
            case 377:
                var14 = var8 != var17;
            case 381:
                if (!var14) {
                    _fun103655_ip = 415;
                    continue _fun103655
                }
            case 384:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isChannelCustomScoreEligible;
                var14 = var0.bind(var1)(var12);
            case 415:
                var2 = _closure1_slot9;
                var5 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 14;
                var0 = var15[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {
                    'showGradient': true,
                    'startExpanded': true
                };
                var9 = _closure1_slot7;
                var4 = 15;
                var4 = var15[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ActionSheetIconHeader;
                var4 = {};
                var4.icon = var13;
                var4.title = var10;
                var10 = var8 == var17;
                var13 = undefined;
                if (var10) {
                    _fun103655_ip = 505;
                    continue _fun103655
                }
            case 500:
                var13 = var17.name;
            case 505:
                var15 = var8 != var13;
                var10 = '';
                if (!var15) {
                    _fun103655_ip = 519;
                    continue _fun103655
                }
            case 516:
                var10 = var13;
            case 519:
                var4.subtitle = var10;
                var4 = var9.bind(var3)(var5, var4);
                var0.header = var4;
                var5 = var14;
                if (!var14) {
                    _fun103655_ip = 586;
                    continue _fun103655
                }
            case 540:
                var10 = _closure1_slot7;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 16;
                var4 = var13[var4];
                var4 = var9.bind(var3)(var4);
                var9 = var4.ChannelScoreSettings;
                var4 = {};
                var4.channel = var12;
                var4.guild = var17;
                var5 = var10.bind(var3)(var9, var4);
            case 586:
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var8 != var11;
                if (!var5) {
                    _fun103655_ip = 605;
                    continue _fun103655
                }
            case 601:
                var5 = var8 != var17;
            case 605:
                if (!var5) {
                    _fun103655_ip = 711;
                    continue _fun103655
                }
            case 608:
                var12 = _closure1_slot9;
                var10 = _closure1_slot8;
                var9 = {};
                if (!var14) {
                    _fun103655_ip = 647;
                    continue _fun103655
                }
            case 621:
                var16 = _closure1_slot7;
                var15 = _closure1_slot3;
                var13 = {};
                var18 = var18.divider;
                var13.style = var18;
                var14 = var16.bind(var3)(var15, var13);
            case 647:
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 16;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.GuildScoreSettings;
                var14 = {};
                var14.guild = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var9.children = var13;
                var5 = var12.bind(var3)(var10, var9);
            case 711:
                var4[1] = var5;
                var9 = var8 != var11;
                var5 = null;
                if (!var9) {
                    _fun103655_ip = 863;
                    continue _fun103655
                }
            case 727:
                var5 = null;
                if (!var7) {
                    _fun103655_ip = 863;
                    continue _fun103655
                }
            case 735:
                var8 = _closure1_slot7;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 17;
                var6 = var12[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var9 = 'Debug details';
                var6.title = var9;
                var9 = 18;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.TableRow;
                var9 = {};
                var13 = var11.score;
                var12 = 'Total Score: ';
                var12 = var12 + var13;
                var9.label = var12;
                var12 = global;
                var13 = var12.JSON;
                var12 = var13.stringify;
                var11 = var11.score_components;
                var11 = var12.bind(var13)(var11);
                var9.subLabel = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 863:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 8896, 33, 1297, 671, 566, 4794, 4592, 7415, 5456, 8905, 5210, 5214, 13558, 5367, 4900, 2]);