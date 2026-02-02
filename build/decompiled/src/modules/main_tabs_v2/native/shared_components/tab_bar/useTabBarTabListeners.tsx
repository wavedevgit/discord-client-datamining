// modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarTabListeners.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MainTabsNavigatorScreens;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot11 = var6;
    var3 = var3.ME;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = function() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 9;
        var1 = var4[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var2 = var5.trackTabPressed;
        var1 = _closure1_slot10;
        var1 = var1.GUILDS;
        var1 = var2.bind(var5)(var1);
        var2 = _closure1_slot1;
        var1 = 10;
        var1 = var4[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.track;
        var0 = _closure1_slot11;
        var1 = var0.REDESIGN_NAV_BAR_CLICKED;
        var0 = {};
        var4 = 'Guilds';
        var0.tab = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = {};
        var1 = function() {
            _fun104606: for (var _fun104606_ip = 0;;) switch (_fun104606_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var1 = var6[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.coerceGuildsRoute;
                    var5 = _closure1_slot1;
                    var1 = 12;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.bind(var3)();
                    var2 = var2.bind(var4)(var1);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun104606_ip = 64;
                        continue _fun104606
                    }
                case 62:
                    return var3;
                case 64:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 13;
                    var5 = var8[var4];
                    var6 = var7.bind(var3)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_MEDIUM;
                    var4 = var5.bind(var6)(var4);
                    var2 = var2.params;
                    var5 = var1 == var2;
                    var4 = undefined;
                    if (var5) {
                        _fun104606_ip = 136;
                        continue _fun104606
                    }
                case 131:
                    var4 = var2.guildId;
                case 136:
                    var2 = _closure1_slot12;
                    if (!(var4 !== var2)) {
                        _fun104606_ip = 181;
                        continue _fun104606
                    }
                case 144:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.transitionToGuild;
                    var2 = _closure1_slot12;
                    var2 = var4.bind(var5)(var2);
                    _fun104606_ip = 230;
                    continue _fun104606;
                case 181:
                    var4 = _closure1_slot9;
                    var2 = var4.getLastSelectedGuildId;
                    var2 = var2.bind(var4)();
                    if (!(var1 != var2)) {
                        _fun104606_ip = 230;
                        continue _fun104606
                    }
                case 199:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 14;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.transitionToGuild;
                    var0 = var0.bind(var1)(var2);
                case 230:
                    var0 = {};
                    var1 = function() {
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 13;
                        var4 = var3[var2];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var4);
                        var4 = var5.triggerHapticFeedback;
                        var2 = var3[var2];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_HEAVY;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 15;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.long = var1;
                    return var0;
            }
        };
        var0.short = var1;
        return var0;
    };
    var3.short = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = function() {
        _fun104608: for (var _fun104608_ip = 0;;) switch (_fun104608_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var4 = var5.track;
                var0 = _closure1_slot11;
                var1 = var0.REDESIGN_NAV_BAR_CLICKED;
                var0 = {};
                var7 = 'Notifications';
                var0.tab = var7;
                var0 = var4.bind(var5)(var1, var0);
                var1 = _closure1_slot0;
                var0 = 9;
                var0 = var2[var0];
                var2 = var1.bind(var6)(var0);
                var1 = var2.trackTabPressed;
                var0 = _closure1_slot10;
                var0 = var0.NOTIFICATIONS;
                var0 = var1.bind(var2)(var0);
                var0 = _closure1_slot6;
                var0 = var0.initialized;
                if (var0) {
                    _fun104608_ip = 195;
                    continue _fun104608
                }
            case 107:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var2 = var5.bind(var6)(var0);
                var1 = var2.fetchNotificationCenterItems;
                var0 = {};
                var4 = 17;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.PAGE_SIZE_WITH_MENTIONS;
                var0.limit = var4;
                var4 = true;
                var0.with_mentions = var4;
                var3 = _closure1_slot7;
                var4 = var3.roleFilter;
                var0.roles_filter = var4;
                var3 = var3.everyoneFilter;
                var0.everyone_filter = var3;
                var0 = var1.bind(var2)(var0);
            case 195:
                var0 = {};
                var1 = function() {
                    _fun104609: for (var _fun104609_ip = 0;;) switch (_fun104609_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.getCurrentConfig;
                            var3 = {};
                            var1 = 'NativeNotificationsTapSequencer';
                            var3.location = var1;
                            var1 = {};
                            var6 = false;
                            var1.autoTrackExposure = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = var1.enabled;
                            if (!var1) {
                                _fun104609_ip = 116;
                                continue _fun104609
                            }
                        case 66:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 19;
                            var3 = var5[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.bind(var0)();
                            if (var3) {
                                _fun104609_ip = 113;
                                continue _fun104609
                            }
                        case 93:
                            var5 = _closure1_slot8;
                            var4 = var5.getSavedMessageCount;
                            var5 = var4.bind(var5)();
                            var4 = 0;
                            var3 = var5 > var4;
                        case 113:
                            var1 = var3;
                        case 116:
                            if (!var1) {
                                _fun104609_ip = 255;
                                continue _fun104609
                            }
                        case 122:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var4 = 13;
                            var5 = var1[var4];
                            var6 = var3.bind(var0)(var5);
                            var5 = var6.triggerHapticFeedback;
                            var4 = var1[var4];
                            var4 = var3.bind(var0)(var4);
                            var4 = var4.HapticFeedbackTypes;
                            var4 = var4.IMPACT_MEDIUM;
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure1_slot1;
                            var2 = 20;
                            var2 = var1[var2];
                            var6 = var4.bind(var0)(var2);
                            var5 = var6.pushLazy;
                            var2 = 22;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 21;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var10 = var3.bind(var0)(var2, var1);
                            var3 = {};
                            var1 = 'modal';
                            var3.presentation = var1;
                            var9 = {};
                            var8 = 'for-later-modal';
                            var11 = var6;
                            var7 = var3;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                        case 255:
                            return var0;
                    }
                };
                var0.short = var1;
                return var0;
        }
    };
    var3.short = var6;
    var _closure1_slot14 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/tab_bar/useTabBarTabListeners.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 23;
        var5 = var6[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var5);
        var7 = var8.useTapSequencer;
        var5 = _closure1_slot13;
        var5 = var7.bind(var8)(var5);
        var _closure2_slot0 = var5;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useTapSequencer;
        var2 = _closure1_slot14;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = {};
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var2 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.setHomeDrawerState;
                var2 = true;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot1;
                var1 = 24;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.closeICYMITab;
                var1 = var1.bind(var2)();
                var2 = _closure2_slot0;
                var1 = var2.handleShortPress;
                var1 = var1.bind(var2)();
                return var0;
            };
            var1.tabPress = var3;
            var3 = function() {
                var1 = _closure2_slot0;
                var0 = var1.handleLongPress;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1.tabLongPress = var3;
            var0.guilds = var1;
            var1 = {};
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 24;
                var2 = var4[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var2 = var5.closeICYMITab;
                var2 = var2.bind(var5)();
                var2 = 10;
                var2 = var4[var2];
                var6 = var3.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot11;
                var3 = var2.REDESIGN_NAV_BAR_CLICKED;
                var2 = {};
                var7 = 'Messages';
                var2.tab = var7;
                var2 = var5.bind(var6)(var3, var2);
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.trackTabPressed;
                var1 = _closure1_slot10;
                var1 = var1.MESSAGES;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.tabPress = var3;
            var0.messages = var1;
            var1 = {};
            var3 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 24;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.closeICYMITab;
                var1 = var1.bind(var2)();
                var2 = _closure2_slot1;
                var1 = var2.handleShortPress;
                var1 = var1.bind(var2)();
                return var0;
            };
            var1.tabPress = var3;
            var0.notifications = var1;
            var1 = {};
            var3 = function() {
                _fun104616: for (var _fun104616_ip = 0;;) switch (_fun104616_ip) {
                    case 0:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 24;
                        var1 = var5[var3];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var1);
                        var1 = var4.openICYMITab;
                        var1 = var1.bind(var4)();
                        var6 = _closure1_slot0;
                        var1 = 25;
                        var1 = var5[var1];
                        var4 = var6.bind(var0)(var1);
                        var1 = var4.icymiTabBadgeShown;
                        var1 = var1.bind(var4)();
                        var4 = 26;
                        var5 = var5[var4];
                        var5 = var6.bind(var0)(var5);
                        var7 = var5.ICYMIAnalytics;
                        var6 = var7.trackFeedShown;
                        var5 = {};
                        var8 = 'gravity_tab';
                        var5.homeSessionId = var8;
                        var8 = 'NoDotShown';
                        if (!var1) {
                            _fun104616_ip = 113;
                            continue _fun104616
                        }
                    case 107:
                        var8 = 'DotShown';
                    case 113:
                        var5.variant = var8;
                        var5 = var6.bind(var7)(var5);
                        if (!var1) {
                            _fun104616_ip = 141;
                            continue _fun104616
                        }
                    case 125:
                        var6 = _closure1_slot5;
                        var5 = var6.hasOpened;
                        var1 = var5.bind(var6)();
                    case 141:
                        if (!var1) {
                            _fun104616_ip = 215;
                            continue _fun104616
                        }
                    case 144:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var4 = var1[var4];
                        var4 = var5.bind(var0)(var4);
                        var6 = var4.ICYMIAnalytics;
                        var5 = var6.trackFeedShown;
                        var4 = {
                            'homeSessionId': 'gravity_refresh',
                            'variant': 'DotShown'
                        };
                        var4 = var5.bind(var6)(var4);
                        var2 = _closure1_slot1;
                        var1 = var1[var3];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.reloadICYMITab;
                        var1 = var1.bind(var2)();
                    case 215:
                        return var0;
                }
            };
            var1.tabPress = var3;
            var0.icymi = var1;
            var1 = {};
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 24;
                var2 = var4[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var2 = var5.closeICYMITab;
                var2 = var2.bind(var5)();
                var2 = 10;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.REDESIGN_NAV_BAR_CLICKED;
                var1 = {};
                var5 = 'Happening';
                var1.tab = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var1.tabPress = var3;
            var0.happening = var1;
            var1 = {};
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 24;
                var2 = var4[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var2 = var5.closeICYMITab;
                var2 = var2.bind(var5)();
                var2 = 10;
                var2 = var4[var2];
                var6 = var3.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot11;
                var3 = var2.REDESIGN_NAV_BAR_CLICKED;
                var2 = {};
                var7 = 'You';
                var2.tab = var7;
                var2 = var5.bind(var6)(var3, var2);
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.trackTabPressed;
                var1 = _closure1_slot10;
                var1 = var1.YOU;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.tabPress = var3;
            var5 = _closure1_slot3;
            var4 = undefined;
            var3 = function*() { // Environment: var2
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun104620: for (var _fun104620_ip = 0;;) switch (_fun104620_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun104620_ip = 128;
                                continue _fun104620
                            }
                        case 7:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 22;
                            var4 = var1[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var4);
                            var4 = 27;
                            var4 = var1[var4];
                            var1 = var1.paths;
                            var1 = var5.bind(var2)(var4, var1);
                            SaveGenerator(address = 54);
                        case 52:
                            return var1;
                        case 54:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun104620_ip = 125;
                                continue _fun104620
                            }
                        case 60:
                            var4 = var1.showYouAccountActionSheet;
                            var4 = var4.bind(var1)();
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 13;
                            var4 = var7[var3];
                            var5 = var6.bind(var2)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var3 = var7[var3];
                            var3 = var6.bind(var2)(var3);
                            var3 = var3.HapticFeedbackTypes;
                            var3 = var3.IMPACT_MEDIUM;
                            var3 = var4.bind(var5)(var3);
                            return var2;
                        case 125:
                            return var1;
                        case 128:
                            return var0;
                    }
                };
                return var0;
            };
            var3 = var5.bind(var4)(var3);
            var _closure3_slot0 = var3;
            var2 = function() { // Environment: var2
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1.tabLongPress = var2;
            var0.you = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 8824, 3931, 8588, 9588, 3174, 6904, 660, 13076, 795, 3880, 7701, 3240, 5579, 7700, 13433, 13432, 8698, 9591, 4527, 9593, 1307, 13599, 8834, 13410, 8838, 13412, 2]);