// modules/user_settings/native/profiles/UserSettingsEditGuildProfile.tsx
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var12 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 6;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var13;
    var13 = var5[var11];
    var13 = var6.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var10.borderRadius = var13;
    var13 = var12.hairlineWidth;
    var10.borderTopWidth = var13;
    var12 = var12.hairlineWidth;
    var10.borderBottomWidth = var12;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var10.borderColor = var11;
    var11 = 'hidden';
    var10.overflow = var11;
    var3.guildSelector = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/UserSettingsEditGuildProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun80285: for (var _fun80285_ip = 0;;) switch (_fun80285_ip) {
            case 0:
                var1 = _closure1_slot9;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var3 = var9.bind(var4)(var2);
                var2 = 9;
                var2 = var7[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.USER_SETTINGS_GUILD_PROFILE;
                var2 = var3.bind(var4)(var2);
                var5 = var2.analyticsLocations;
                var3 = _closure1_slot0;
                var2 = 10;
                var6 = var7[var2];
                var12 = var3.bind(var4)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var14
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var11.bind(var12)(var10, var6);
                var _closure2_slot0 = var10;
                var6 = 11;
                var6 = var7[var6];
                var6 = var9.bind(var4)(var6);
                var9 = var6.bind(var4)();
                var6 = var9.guild;
                var _closure2_slot1 = var6;
                var9 = var9.resetPending;
                var _closure2_slot2 = var9;
                var2 = var7[var2];
                var9 = var3.bind(var4)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var14
                    var1 = _closure1_slot5;
                    var0 = var1.showNotice;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var9)(var3, var2);
                var _closure2_slot3 = var2;
                var9 = _closure1_slot3;
                var7 = var9.useEffect;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var6;
                var2 = function() { // Environment: var14
                    _fun80288: for (var _fun80288_ip = 0;;) switch (_fun80288_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun80288_ip = 24;
                                continue _fun80288
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun80288_ip = 142;
                                continue _fun80288
                            }
                        case 27:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var2 = var3[var2];
                            var4 = undefined;
                            var7 = var5.bind(var4)(var2);
                            var6 = var7.setCurrentGuild;
                            var5 = _closure2_slot1;
                            var2 = var5.id;
                            var2 = var6.bind(var7)(var2);
                            var2 = _closure1_slot1;
                            var1 = 13;
                            var1 = var3[var1];
                            var3 = var2.bind(var4)(var1);
                            var7 = _closure2_slot0;
                            var2 = var7.id;
                            var6 = var7.getAvatarURL;
                            var1 = var5.id;
                            var0 = 80;
                            var1 = var6.bind(var7)(var1, var0);
                            var0 = {};
                            var5 = var5.id;
                            var0.guildId = var5;
                            var5 = true;
                            var0.dispatchWait = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 142:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var9)(var2, var3);
                var2 = null;
                if (!(var2 != var10)) {
                    _fun80285_ip = 514;
                    continue _fun80285
                }
            case 235:
                if (!(var2 != var6)) {
                    _fun80285_ip = 514;
                    continue _fun80285
                }
            case 242:
                var2 = function arg0() {
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setCurrentGuild;
                    var1 = arg0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot4 = var2;
                var3 = _closure1_slot8;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var9 = _closure1_slot7;
                var7 = _closure1_slot4;
                var5 = {};
                var8 = var8.guildSelector;
                var5.style = var8;
                var8 = 14;
                var8 = var11[var8];
                var8 = var18.bind(var4)(var8);
                var13 = var8.TableRow;
                var12 = {};
                var8 = _closure1_slot1;
                var17 = 15;
                var15 = var11[var17];
                var16 = var8.bind(var4)(var15);
                var15 = {};
                var15.guild = var6;
                var17 = var11[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.GuildIconSizes;
                var17 = var17.XSMALL;
                var15.size = var17;
                var15 = var9.bind(var4)(var16, var15);
                var12.icon = var15;
                var15 = var6.name;
                var12.label = var15;
                var15 = true;
                var12.arrow = var15;
                var14 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = function() {
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var3 = var1[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 19;
                        var2 = var1[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = 18;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var0)(var2, var1);
                        var2 = {};
                        var6 = _closure2_slot0;
                        var2.user = var6;
                        var6 = _closure2_slot1;
                        var2.selectedGuild = var6;
                        var1 = _closure2_slot4;
                        var2.onSelectGuild = var1;
                        var1 = 'GuildSelectComponentActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                        return var0;
                    };
                    var1.onConfirm = var3;
                    var4 = _closure2_slot3;
                    var1.hasEdits = var4;
                    var3 = _closure2_slot2;
                    var1.resetPending = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12.onPress = var14;
                var12 = var9.bind(var4)(var13, var12);
                var5.children = var12;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = 20;
                var7 = var11[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.currentUser = var10;
                var13 = var10.id;
                var12 = var6.id;
                var6 = global;
                var6 = var6.HermesInternal;
                var11 = var6.concat;
                var10 = '';
                var6 = '-';
                var6 = var11.bind(var10)(var13, var6, var12);
                var6 = var9.bind(var4)(var8, var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 514:
                var0 = _closure1_slot10;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5642, 1621, 33, 1297, 671, 10131, 5785, 5639, 566, 10133, 5781, 7052, 4876, 7356, 8728, 3279, 10135, 1307, 10136, 2]);