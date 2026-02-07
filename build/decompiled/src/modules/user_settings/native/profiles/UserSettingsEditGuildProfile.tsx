// modules/user_settings/native/profiles/UserSettingsEditGuildProfile.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var8.borderRadius = var12;
    var12 = var11.hairlineWidth;
    var8.borderTopWidth = var12;
    var11 = var11.hairlineWidth;
    var8.borderBottomWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var9;
    var9 = 'hidden';
    var8.overflow = var9;
    var3.guildSelector = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/UserSettingsEditGuildProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun80983: for (var _fun80983_ip = 0;;) switch (_fun80983_ip) {
            case 0:
                var1 = _closure1_slot8;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var2 = var7[var1];
                var4 = var8.bind(var3)(var2);
                var2 = 8;
                var2 = var7[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.USER_SETTINGS_GUILD_PROFILE;
                var2 = var4.bind(var3)(var2);
                var5 = var2.analyticsLocations;
                var4 = _closure1_slot0;
                var2 = 9;
                var6 = var7[var2];
                var11 = var4.bind(var3)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var13
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var10.bind(var11)(var9, var6);
                var _closure2_slot0 = var10;
                var6 = 10;
                var6 = var7[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.bind(var3)();
                var6 = var8.guild;
                var _closure2_slot1 = var6;
                var8 = var8.resetPending;
                var _closure2_slot2 = var8;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var13
                    var1 = _closure1_slot4;
                    var0 = var1.showNotice;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var8)(var4, var2);
                var _closure2_slot3 = var2;
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var4 = new Array(2);
                var4[0] = var10;
                var4[1] = var6;
                var2 = function() { // Environment: var13
                    _fun80986: for (var _fun80986_ip = 0;;) switch (_fun80986_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun80986_ip = 24;
                                continue _fun80986
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun80986_ip = 142;
                                continue _fun80986
                            }
                        case 27:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var2 = var3[var2];
                            var4 = undefined;
                            var7 = var5.bind(var4)(var2);
                            var6 = var7.setCurrentGuild;
                            var5 = _closure2_slot1;
                            var2 = var5.id;
                            var2 = var6.bind(var7)(var2);
                            var2 = _closure1_slot1;
                            var1 = 12;
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
                var2 = var7.bind(var8)(var2, var4);
                var2 = null;
                if (!(var2 != var10)) {
                    _fun80983_ip = 526;
                    continue _fun80983
                }
            case 235:
                if (!(var2 != var6)) {
                    _fun80983_ip = 526;
                    continue _fun80983
                }
            case 242:
                var2 = function arg0() {
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setCurrentGuild;
                    var1 = arg0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot4 = var2;
                var4 = _closure1_slot7;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var1 = var15.bind(var3)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var9 = _closure1_slot6;
                var14 = 14;
                var5 = var11[var14];
                var5 = var15.bind(var3)(var5);
                var7 = var5.FormRow;
                var5 = {};
                var8 = _closure1_slot1;
                var18 = 15;
                var16 = var11[var18];
                var17 = var8.bind(var3)(var16);
                var16 = {};
                var16.guild = var6;
                var18 = var11[var18];
                var18 = var15.bind(var3)(var18);
                var18 = var18.GuildIconSizes;
                var18 = var18.XSMALL;
                var16.size = var18;
                var16 = var9.bind(var3)(var17, var16);
                var5.leading = var16;
                var16 = var6.name;
                var5.label = var16;
                var14 = var11[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.FormRow;
                var15 = var14.Arrow;
                var14 = {};
                var14 = var9.bind(var3)(var15, var14);
                var5.trailing = var14;
                var13 = function() {
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
                var5.onPress = var13;
                var12 = var12.guildSelector;
                var5.style = var12;
                var7 = var9.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = 20;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
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
                var6 = var9.bind(var3)(var8, var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 526:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 13;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5634, 1621, 33, 1297, 671, 5777, 5631, 566, 10314, 5773, 7026, 10316, 5430, 7464, 9190, 3279, 10397, 1307, 10398, 2]);