// components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumGuildSubscribeModalScenes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumGuildSubscribeModal, environment: var1
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var1 = var0.guildBoostSlots;
        var _closure2_slot1 = var1;
        var1 = var0.intent;
        var _closure2_slot2 = var1;
        var0 = var0.onResult;
        var _closure2_slot3 = var0;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 20;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = function() { // Environment: var4
            _fun77934: for (var _fun77934_ip = 0;;) switch (_fun77934_ip) {
                case 0:
                    var1 = new Array(0);
                    var0 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun77934_ip = 43;
                        continue _fun77934
                    }
                case 17:
                    var0 = _closure2_slot1;
                    if (!(var2 != var0)) {
                        _fun77934_ip = 43;
                        continue _fun77934
                    }
                case 25:
                    var0 = _closure2_slot1;
                    var3 = var0.length;
                    var0 = 0;
                    if (!(!(var3 > var0))) {
                        _fun77934_ip = 192;
                        continue _fun77934
                    }
                case 43:
                    var0 = _closure2_slot0;
                    if (!(var2 == var0)) {
                        _fun77934_ip = 119;
                        continue _fun77934
                    }
                case 51:
                    var2 = var1.push;
                    var0 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.GUILD_SELECT;
                    var0.name = var3;
                    var3 = {};
                    var5 = _closure2_slot1;
                    var3.guildBoostSlots = var5;
                    var5 = _closure2_slot2;
                    var3.intent = var5;
                    var5 = _closure2_slot3;
                    var3.onResult = var5;
                    var0.params = var3;
                    var0 = var2.bind(var1)(var0);
                    _fun77934_ip = 263;
                    continue _fun77934;
                case 119:
                    var2 = var1.push;
                    var0 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.OVERVIEW;
                    var0.name = var3;
                    var3 = {};
                    var5 = _closure2_slot0;
                    var3.guildId = var5;
                    var5 = _closure2_slot1;
                    var3.guildBoostSlots = var5;
                    var5 = _closure2_slot2;
                    var3.intent = var5;
                    var5 = _closure2_slot3;
                    var3.onResult = var5;
                    var0.params = var3;
                    var0 = var2.bind(var1)(var0);
                    _fun77934_ip = 263;
                    continue _fun77934;
                case 192:
                    var2 = var1.push;
                    var0 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.CONFIRMATION;
                    var0.name = var3;
                    var3 = {};
                    var5 = _closure2_slot0;
                    var3.guildId = var5;
                    var5 = _closure2_slot1;
                    var3.guildBoostSlots = var5;
                    var5 = _closure2_slot2;
                    var3.intent = var5;
                    var4 = _closure2_slot3;
                    var3.onResult = var4;
                    var0.params = var3;
                    var0 = var2.bind(var1)(var0);
                case 263:
                    var0 = {};
                    var0.initialStack = var1;
                    var2 = function() { // Original name: getScreens, environment: var1
                        var0 = {};
                        var1 = _closure1_slot6;
                        var5 = var1.GUILD_SELECT;
                        var2 = {};
                        var6 = false;
                        var2.headerShown = var6;
                        var6 = function(arg0) { // Original name: render, environment: var3
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = arg0;
                            var6 = var0;
                            var4 = copyDataProperties(var6, var5);
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var6;
                        var0[var5] = var2;
                        var6 = var1.OVERVIEW;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 7;
                        var4 = var9[var5];
                        var7 = undefined;
                        var12 = var8.bind(var7)(var4);
                        var11 = var12.getHeaderCloseButton;
                        var4 = 8;
                        var10 = var9[var4];
                        var10 = var8.bind(var7)(var10);
                        var10 = var10.closeApplyBoostModal;
                        var10 = var11.bind(var12)(var10);
                        var2.headerLeft = var10;
                        var10 = function() { // Original name: headerRight, environment: var3
                            _fun77937: for (var _fun77937_ip = 0;;) switch (_fun77937_ip) {
                                case 0:
                                    var3 = _closure1_slot8;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var0 = 9;
                                    var0 = var7[var0];
                                    var2 = undefined;
                                    var0 = var6.bind(var2)(var0);
                                    var1 = var0.HeaderActionButton;
                                    var0 = {};
                                    var5 = 10;
                                    var5 = var7[var5];
                                    var7 = var6.bind(var2)(var5);
                                    var6 = var7.isThemeDark;
                                    var5 = _closure1_slot5;
                                    var5 = var5.theme;
                                    var5 = var6.bind(var7)(var5);
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    if (var5) {
                                        _fun77937_ip = 95;
                                        continue _fun77937
                                    }
                                case 81:
                                    var5 = 12;
                                    var5 = var8[var5];
                                    var5 = var7.bind(var2)(var5);
                                    _fun77937_ip = 107;
                                    continue _fun77937;
                                case 95:
                                    var6 = 11;
                                    var6 = var8[var6];
                                    var5 = var7.bind(var2)(var6);
                                case 107:
                                    var0.source = var5;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var4 = 13;
                                    var4 = var8[var4];
                                    var4 = var7.bind(var2)(var4);
                                    var4 = var4.SettingsIcon;
                                    var0.IconComponent = var4;
                                    var4 = 14;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var2)(var5);
                                    var9 = var5.intl;
                                    var6 = var9.string;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var2)(var5);
                                    var5 = var5.t;
                                    var5 = var5["3D5yo/"];
                                    var5 = var6.bind(var9)(var5);
                                    var0.accessibilityLabel = var5;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var2)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var8[var4];
                                    var4 = var7.bind(var2)(var4);
                                    var4 = var4.t;
                                    var4 = var4["+CbP2v"];
                                    var4 = var5.bind(var6)(var4);
                                    var0.accessibilityHint = var4;
                                    var4 = function() { // Original name: onPress, environment: var4
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 15;
                                        var1 = var3[var0];
                                        var0 = undefined;
                                        var6 = var2.bind(var0)(var1);
                                        var5 = var6.trackUserSettingsPaneViewed;
                                        var1 = {};
                                        var4 = _closure1_slot7;
                                        var7 = var4.GUILD_BOOSTING;
                                        var1.destinationPane = var7;
                                        var1 = var5.bind(var6)(var1);
                                        var1 = 8;
                                        var1 = var3[var1];
                                        var5 = var2.bind(var0)(var1);
                                        var1 = var5.closeApplyBoostModal;
                                        var1 = var1.bind(var5)();
                                        var1 = 16;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.openUserSettings;
                                        var1 = {};
                                        var4 = var4.GUILD_BOOSTING;
                                        var1.screen = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var0.onPress = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var2.headerRight = var10;
                        var10 = function(arg0) { // Original name: headerTitle, environment: var3
                            _fun77939: for (var _fun77939_ip = 0;;) switch (_fun77939_ip) {
                                case 0:
                                    var0 = arg0;
                                    var8 = var0.children;
                                    var3 = _closure1_slot8;
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var0 = 7;
                                    var0 = var10[var0];
                                    var2 = undefined;
                                    var0 = var9.bind(var2)(var0);
                                    var1 = var0.NavigatorHeader;
                                    var0 = {};
                                    var4 = 14;
                                    var6 = var10[var4];
                                    var6 = var9.bind(var2)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var4 = var10[var4];
                                    var4 = var9.bind(var2)(var4);
                                    var4 = var4.t;
                                    var4 = var4.VJEVbu;
                                    var4 = var6.bind(var7)(var4);
                                    var0.title = var4;
                                    var6 = var8.length;
                                    var4 = 0;
                                    var6 = var6 > var4;
                                    var4 = null;
                                    if (!var6) {
                                        _fun77939_ip = 154;
                                        continue _fun77939
                                    }
                                case 112:
                                    var7 = _closure1_slot8;
                                    var6 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var5 = 17;
                                    var5 = var9[var5];
                                    var5 = var6.bind(var2)(var5);
                                    var6 = var5.LegacyText;
                                    var5 = {};
                                    var5.children = var8;
                                    var4 = var7.bind(var2)(var6, var5);
                                case 154:
                                    var0.subtitle = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var2.headerTitle = var10;
                        var10 = function(arg0) { // Original name: render, environment: var3
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 18;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = arg0;
                            var6 = var0;
                            var4 = copyDataProperties(var6, var5);
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var10;
                        var0[var6] = var2;
                        var2 = var1.CONFIRMATION;
                        var1 = {};
                        var5 = var9[var5];
                        var6 = var8.bind(var7)(var5);
                        var5 = var6.getHeaderCloseButton;
                        var4 = var9[var4];
                        var4 = var8.bind(var7)(var4);
                        var4 = var4.closeApplyBoostModal;
                        var4 = var5.bind(var6)(var4);
                        var1.headerLeft = var4;
                        var4 = 14;
                        var5 = var9[var4];
                        var5 = var8.bind(var7)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var8.bind(var7)(var4);
                        var4 = var4.t;
                        var4 = var4.VJEVbu;
                        var4 = var5.bind(var6)(var4);
                        var1.headerTitle = var4;
                        var3 = function(arg0) { // Original name: render, environment: var3
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = arg0;
                            var6 = var0;
                            var4 = copyDataProperties(var6, var5);
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var0.screens = var1;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var5 = var1.initialStack;
        var6 = var1.screens;
        var10 = _closure1_slot4;
        var8 = var10.useState;
        var1 = 0;
        var2 = var5[var1];
        var2 = var2.name;
        var11 = var8.bind(var10)(var2);
        var8 = _closure1_slot3;
        var2 = 2;
        var8 = var8.bind(var3)(var11, var2);
        var1 = var8[var1];
        var _closure2_slot4 = var1;
        var2 = 1;
        var2 = var8[var2];
        var _closure2_slot5 = var2;
        var2 = 21;
        var2 = var9[var2];
        var2 = var7.bind(var3)(var2);
        var8 = var10.useCallback;
        var7 = new Array(1);
        var7[0] = var1;
        var1 = function() { // Environment: var4
            _fun77942: for (var _fun77942_ip = 0;;) switch (_fun77942_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var0 = _closure1_slot6;
                    var0 = var0.GUILD_SELECT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun77942_ip = 61;
                        continue _fun77942
                    }
                case 27:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.closeApplyBoostModal;
                    var1 = var1.bind(var2)();
                    var0 = true;
                case 61:
                    return var0;
            }
        };
        var1 = var8.bind(var10)(var1, var7);
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot8;
        var8 = _closure1_slot0;
        var0 = 22;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var6;
        var0.initialRouteStack = var5;
        var5 = 14;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["13/7kX"];
        var5 = var6.bind(var7)(var5);
        var0.headerBackTitle = var5;
        var4 = function(arg0) { // Original name: onStateChange, environment: var4
            _fun77943: for (var _fun77943_ip = 0;;) switch (_fun77943_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var4) {
                        _fun77943_ip = 31;
                        continue _fun77943
                    }
                case 16:
                    var4 = var3.routes;
                    var3 = var3.index;
                    var1 = var4[var3];
                case 31:
                    if (!(var2 != var1)) {
                        _fun77943_ip = 52;
                        continue _fun77943
                    }
                case 35:
                    var2 = _closure2_slot5;
                    var1 = var1.name;
                    var1 = var2.bind(var0)(var1);
                case 52:
                    return var0;
            }
        };
        var0.onStateChange = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3155, 9853, 660, 33, 9854, 4668, 9851, 5284, 3165, 9855, 9856, 5331, 1234, 7187, 5884, 4839, 9857, 9916, 4891, 4038, 5748, 2]);