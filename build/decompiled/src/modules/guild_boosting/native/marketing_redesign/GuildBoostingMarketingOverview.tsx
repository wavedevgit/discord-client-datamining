// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsPages;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 24;
    var8.paddingBottom = var9;
    var3.wrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78501: for (var _fun78501_ip = 0;;) switch (_fun78501_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot13;
                var4 = undefined;
                var7 = var1.bind(var4)();
                var8 = var0.guildId;
                var _closure2_slot0 = var8;
                var2 = var0.guildBoostSlots;
                var _closure2_slot1 = var2;
                var0 = null;
                var1 = var0 == var2;
                var12 = undefined;
                if (var1) {
                    _fun78501_ip = 54;
                    continue _fun78501
                }
            case 48:
                var1 = 0;
                var12 = var2[var1];
            case 54:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 8;
                var1 = var9[var3];
                var11 = var5.bind(var4)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var17
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var10.bind(var11)(var6, var1);
                var _closure2_slot2 = var13;
                var1 = 9;
                var1 = var9[var1];
                var6 = var5.bind(var4)(var1);
                var1 = var6.useNavigation;
                var16 = var1.bind(var6)();
                var _closure2_slot3 = var16;
                var15 = _closure1_slot1;
                var1 = 10;
                var1 = var9[var1];
                var1 = var15.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var6 = var1.analyticsLocations;
                var _closure2_slot4 = var6;
                var18 = _closure1_slot4;
                var1 = var18.useState;
                var10 = false;
                var1 = var1.bind(var18)(var10);
                var22 = _closure1_slot3;
                var21 = 2;
                var1 = var22.bind(var4)(var1, var21);
                var20 = 0;
                var11 = var1[var20];
                var19 = 1;
                var1 = var1[var19];
                var _closure2_slot5 = var1;
                var1 = var18.useState;
                var1 = var1.bind(var18)(var20);
                var1 = var22.bind(var4)(var1, var21);
                var20 = var1[var20];
                var _closure2_slot6 = var20;
                var1 = var1[var19];
                var _closure2_slot7 = var1;
                var1 = var18.useRef;
                var1 = var1.bind(var18)(var10);
                var _closure2_slot8 = var1;
                var1 = 11;
                var1 = var9[var1];
                var10 = var15.bind(var4)(var1);
                var1 = function() { // Environment: var17
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var10.bind(var4)(var1);
                var _closure2_slot9 = var1;
                var10 = 12;
                var10 = var9[var10];
                var15 = var15.bind(var4)(var10);
                var10 = {};
                var18 = true;
                var10.forceFetch = var18;
                var10 = var15.bind(var4)(var10);
                var3 = var9[var3];
                var15 = var5.bind(var4)(var3);
                var9 = var15.useStateFromStores;
                var3 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var17
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var9.bind(var15)(var5, var3);
                if (!(var0 == var3)) {
                    _fun78501_ip = 387;
                    continue _fun78501
                }
            case 353:
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 13;
                var5 = var15[var5];
                var5 = var9.bind(var4)(var5);
                var5 = var5.PremiumSubscriptionGroupRole;
                var9 = var5.UNSPECIFIED;
                _fun78501_ip = 393;
                continue _fun78501;
            case 387:
                var9 = var3.premiumGroupRole;
            case 393:
                var15 = _closure1_slot4;
                var5 = var15.useLayoutEffect;
                var3 = new Array(3);
                var3[0] = var16;
                var3[1] = var2;
                var16 = var0 == var13;
                var2 = undefined;
                if (var16) {
                    _fun78501_ip = 429;
                    continue _fun78501
                }
            case 424:
                var2 = var13.name;
            case 429:
                var3[2] = var2;
                var2 = function() { // Environment: var17
                    _fun78505: for (var _fun78505_ip = 0;;) switch (_fun78505_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var6 = null;
                            var5 = var6 != var0;
                            if (!var5) {
                                _fun78505_ip = 31;
                                continue _fun78505
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            var1 = var0.length;
                            var0 = 0;
                            var5 = var1 > var0;
                        case 31:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = '';
                            var3 = var4;
                            if (var5) {
                                _fun78505_ip = 88;
                                continue _fun78505
                            }
                        case 53:
                            var5 = _closure2_slot2;
                            var8 = var6 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun78505_ip = 75;
                                continue _fun78505
                            }
                        case 66:
                            var7 = _closure2_slot2;
                            var5 = var7.name;
                        case 75:
                            var6 = var6 != var5;
                            if (!var6) {
                                _fun78505_ip = 85;
                                continue _fun78505
                            }
                        case 82:
                            var4 = var5;
                        case 85:
                            var3 = var4;
                        case 88:
                            var0.title = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var15)(var2, var3);
                var5 = _closure1_slot4;
                var3 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var6;
                var2[2] = var1;
                var1 = function() { // Environment: var17
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot8;
                        var2 = var1.MODAL_DISMISSED;
                        var1 = {};
                        var5 = _closure1_slot9;
                        var5 = var5.PREMIUM_GUILD_USER_MODAL;
                        var1.type = var5;
                        var6 = _closure2_slot4;
                        var1.location_stack = var6;
                        var6 = _closure2_slot0;
                        var1.guild_id = var6;
                        var6 = global;
                        var7 = var6.Date;
                        var6 = var7.now;
                        var6 = var6.bind(var7)();
                        var5 = _closure2_slot9;
                        var5 = var6 - var5;
                        var1.duration_open_ms = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var5)(var1, var2);
                var3 = var5.useEffect;
                var2 = function() { // Environment: var17
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 16;
                        var1 = var3[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var1 = var4.fetchPremiumSubscriptionPlans;
                        var1 = var1.bind(var4)();
                        var1 = 17;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.fetchPaymentSources;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var5)(var2, var1);
                var1 = var0 == var13;
                var0 = null;
                if (var1) {
                    _fun78501_ip = 846;
                    continue _fun78501
                }
            case 518:
                var3 = _closure1_slot11;
                var2 = _closure1_slot12;
                var1 = {};
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var7.wrapper;
                var5.contentContainerStyle = var7;
                var7 = function arg0() {
                    _fun78510: for (var _fun78510_ip = 0;;) switch (_fun78510_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var4 = var0.layoutMeasurement;
                            var1 = var0.contentOffset;
                            var3 = var0.contentSize;
                            var2 = _closure2_slot8;
                            var2 = var2.current;
                            var2 = !var2;
                            if (!var2) {
                                _fun78510_ip = 103;
                                continue _fun78510
                            }
                        case 45:
                            var5 = var4.height;
                            var4 = var1.y;
                            var4 = var5 + var4;
                            var5 = var3.height;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 18;
                            var6 = var6[var3];
                            var3 = undefined;
                            var3 = var7.bind(var3)(var6);
                            var3 = var3.VISIBILITY_OFFSET;
                            var3 = var5 - var3;
                            var2 = var4 >= var3;
                        case 103:
                            if (!var2) {
                                _fun78510_ip = 202;
                                continue _fun78510
                            }
                        case 106:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.track;
                            var2 = _closure1_slot8;
                            var3 = var2.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                            var2 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.PREMIUM_GUILD_USER_MODAL;
                            var2.type = var6;
                            var6 = _closure2_slot4;
                            var2.location_stack = var6;
                            var6 = _closure2_slot2;
                            var6 = var6.id;
                            var2.guild_id = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = _closure2_slot8;
                            var2 = true;
                            var3.current = var2;
                        case 202:
                            var2 = _closure2_slot5;
                            var1 = var1.y;
                            var0 = _closure2_slot6;
                            var1 = var1 >= var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var5.onScroll = var7;
                var7 = 16;
                var5.scrollEventThrottle = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var15 = 19;
                var15 = var14[var15];
                var16 = var7.bind(var4)(var15);
                var15 = {};
                var15.guild = var13;
                var15.previousGuildSubscriptionSlot = var12;
                var17 = function arg0() {
                    var0 = arg0;
                    var2 = _closure2_slot7;
                    var1 = var0.nativeEvent;
                    var1 = var1.layout;
                    var1 = var1.y;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onLayout = var17;
                var15.fractionalPremiumInfo = var10;
                var15.premiumGroupRole = var9;
                var16 = var8.bind(var4)(var16, var15);
                var15 = new Array(6);
                var15[0] = var16;
                var16 = 20;
                var16 = var14[var16];
                var17 = var7.bind(var4)(var16);
                var16 = {};
                var16.guild = var13;
                var16 = var8.bind(var4)(var17, var16);
                var15[1] = var16;
                var16 = 21;
                var16 = var14[var16];
                var17 = var7.bind(var4)(var16);
                var16 = {};
                var16.guild = var13;
                var16 = var8.bind(var4)(var17, var16);
                var15[2] = var16;
                var16 = 22;
                var16 = var14[var16];
                var17 = var7.bind(var4)(var16);
                var16 = {};
                var16 = var8.bind(var4)(var17, var16);
                var15[3] = var16;
                var16 = 23;
                var16 = var14[var16];
                var17 = var7.bind(var4)(var16);
                var16 = {};
                var16 = var8.bind(var4)(var17, var16);
                var15[4] = var16;
                var16 = 24;
                var16 = var14[var16];
                var17 = var7.bind(var4)(var16);
                var16 = {};
                var16 = var8.bind(var4)(var17, var16);
                var15[5] = var16;
                var5.children = var15;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 18;
                var6 = var14[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.guild = var13;
                var6.previousGuildSubscriptionSlot = var12;
                var6.isVisible = var11;
                var10 = var10.fractionalState;
                var6.fractionalPremiumState = var10;
                var6.premiumGroupRole = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 846:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 1621, 660, 33, 1297, 566, 1469, 5730, 4930, 4651, 1637, 795, 806, 5630, 3443, 9977, 9983, 10004, 10011, 10022, 10029, 10033, 2]);