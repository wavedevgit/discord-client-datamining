// modules/age_gate/native/components/NsfwGateGuildSidebar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NsfwGateSource;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot10 = var6;
    var3 = var3.Fonts;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var10 = 9;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.PANEL_BG;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {};
    var8.flex = var9;
    var3.emptyStateContainer = var8;
    var8 = {};
    var9 = 16;
    var8.marginBottom = var9;
    var3.emptyStateImageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/components/NsfwGateGuildSidebar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102861: for (var _fun102861_ip = 0;;) switch (_fun102861_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.style;
                var8 = var1.guildId;
                var _closure2_slot0 = var8;
                var1 = _closure1_slot14;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var3.bind(var5)(var2, var1);
                var _closure2_slot1 = var7;
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var _closure2_slot2 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useEffect;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun102863: for (var _fun102863_ip = 0;;) switch (_fun102863_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun102863_ip = 24;
                                continue _fun102863
                            }
                        case 16:
                            var1 = _closure2_slot1;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun102863_ip = 184;
                                continue _fun102863
                            }
                        case 30:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var8 = undefined;
                            var3 = var1.bind(var8)(var0);
                            var2 = var3.track;
                            var0 = _closure1_slot9;
                            var1 = var0.GUILD_NSFW_GATE_VIEWED;
                            var0 = {};
                            var10 = _closure2_slot0;
                            var0.guild_id = var10;
                            var5 = _closure2_slot2;
                            var6 = var5.id;
                            var0.user_id = var6;
                            var9 = _closure1_slot5;
                            var7 = var9.isMember;
                            var6 = var5.id;
                            var6 = var7.bind(var9)(var10, var6);
                            var0.is_member = var6;
                            var5 = var5.nsfwAllowed;
                            if (!var5) {
                                _fun102863_ip = 159;
                                continue _fun102863
                            }
                        case 129:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 12;
                            var6 = var9[var6];
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.getViewNsfwGuildsOrDefault;
                            var5 = var6.bind(var7)();
                        case 159:
                            var0.is_user_opted_in_to_age_restricted_servers = var5;
                            var4 = _closure1_slot8;
                            var4 = var4.GUILD_SIDEBAR;
                            var0.source = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 184:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun102861_ip = 489;
                    continue _fun102861
                }
            case 153:
                var3 = _closure1_slot13;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var10.container;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var6;
                var1.style = var5;
                var8 = _closure1_slot12;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 13;
                var5 = var16[var5];
                var6 = var15.bind(var4)(var5);
                var5 = {};
                var5.guild = var7;
                var7 = false;
                var5.showExtraButtons = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 14;
                var6 = var16[var6];
                var7 = var15.bind(var4)(var6);
                var6 = {};
                var9 = var10.emptyStateImageContainer;
                var6.imageStyle = var9;
                var9 = 15;
                var9 = var16[var9];
                var12 = var15.bind(var4)(var9);
                var9 = _closure1_slot11;
                var11 = var9.DISPLAY_EXTRABOLD;
                var9 = 16;
                var11 = var12.bind(var4)(var11, var4, var9);
                var6.titleStyle = var11;
                var10 = var10.emptyStateContainer;
                var6.containerStyle = var10;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var6.source = var9;
                var10 = _closure1_slot0;
                var9 = 17;
                var11 = var16[var9];
                var11 = var10.bind(var4)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var16[var9];
                var11 = var10.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.bAVpRR;
                var11 = var12.bind(var14)(var11);
                var6.title = var11;
                var11 = var16[var9];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var9 = var16[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.t;
                var10 = var9.NQuXf0;
                var9 = {};
                var14 = 18;
                var14 = var16[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.getArticleURL;
                var13 = _closure1_slot10;
                var13 = var13.NSFW_GUILD_GUIDELINES;
                var13 = var14.bind(var15)(var13);
                var9.helpURL = var13;
                var9 = var11.bind(var12)(var10, var9);
                var6.body = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 489:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 1410, 1613, 8994, 660, 33, 1297, 671, 566, 795, 7916, 13240, 8316, 4645, 13407, 1234, 1675, 2]);