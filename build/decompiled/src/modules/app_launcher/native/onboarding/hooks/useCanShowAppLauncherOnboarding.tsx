// modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var9 = 5;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.BuiltInSectionId;
    var _closure1_slot9 = var1;
    var4 = 7;
    var1 = var6[var4];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var9 * var1;
    var _closure1_slot10 = var1;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.SECOND;
    var8 = var9 * var8;
    var _closure1_slot11 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Millis;
    var9 = var8.DAY;
    var8 = 14;
    var8 = var8 * var9;
    var _closure1_slot12 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var _closure1_slot13 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var4 = var4.DAY;
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun90334: for (var _fun90334_ip = 0;;) switch (_fun90334_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.channelId;
                var _closure2_slot0 = var18;
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var16 = var0.bind(var1)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 8;
                var0 = var0[var9];
                var19 = undefined;
                var4 = var1.bind(var19)(var0);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var3.bind(var4)(var1, var0);
                var10 = null;
                var1 = var10 == var14;
                var0 = undefined;
                if (var1) {
                    _fun90334_ip = 102;
                    continue _fun90334
                }
            case 97:
                var0 = var14.guild_id;
            case 102:
                var1 = function() {
                    _fun90336: for (var _fun90336_ip = 0;;) switch (_fun90336_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 8;
                            var0 = var3[var0];
                            var6 = undefined;
                            var4 = var2.bind(var6)(var0);
                            var3 = var4.useStateFromStores;
                            var0 = _closure1_slot6;
                            var2 = new Array(1);
                            var2[0] = var0;
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot6;
                                var0 = var1.getCurrentUser;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2, var0);
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun90336_ip = 74;
                                continue _fun90336
                            }
                        case 68:
                            var0 = var3.createdAt;
                        case 74:
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun90336_ip = 146;
                                continue _fun90336
                            }
                        case 81:
                            var2 = global;
                            var4 = var2.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.extractTimestamp;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var1 = _closure1_slot12;
                            var1 = var3 + var1;
                            var0 = var2 < var1;
                        case 146:
                            return var0;
                    }
                };
                var4 = var1.bind(var19)();
                var1 = {};
                var1.guildId = var0;
                var0 = function arg0() {
                    _fun90338: for (var _fun90338_ip = 0;;) switch (_fun90338_ip) {
                        case 0:
                            var1 = arg0;
                            var1 = var1.guildId;
                            var _closure3_slot0 = var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.useStateFromStores;
                            var4 = _closure1_slot5;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot5;
                                var1 = var2.getMemberCount;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1, var0);
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun90338_ip = 85;
                                continue _fun90338
                            }
                        case 78:
                            var1 = 200;
                            var0 = var2 < var1;
                        case 85:
                            return var0;
                    }
                };
                var8 = var0.bind(var19)(var1);
                var1 = {};
                var1.currentTimeMs = var16;
                var0 = function arg0() {
                    _fun90340: for (var _fun90340_ip = 0;;) switch (_fun90340_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.currentTimeMs;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 8;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.useStateFromStores;
                            var0 = _closure1_slot7;
                            var3 = new Array(1);
                            var3[0] = var0;
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot7;
                                var0 = var1.getLastSeenTimeMs;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3, var0);
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun90340_ip = 87;
                                continue _fun90340
                            }
                        case 75:
                            var1 = _closure1_slot13;
                            var1 = var3 + var1;
                            var0 = var2 < var1;
                        case 87:
                            return var0;
                    }
                };
                var7 = var0.bind(var19)(var1);
                var0 = {};
                var0.isInCooldown = var7;
                var0 = var0.isInCooldown;
                var5 = new Array(0);
                if (var0) {
                    _fun90334_ip = 212;
                    continue _fun90334
                }
            case 170:
                var1 = var5.push;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var0 = var3.bind(var19)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
                var0 = var1.bind(var5)(var0);
            case 212:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var1 = var6.bind(var19)(var0);
                var0 = var1.useSelectedDismissibleContent;
                var11 = var0.bind(var1)(var5);
                var0 = {};
                var5 = _closure1_slot3;
                var1 = 1;
                var5 = var5.bind(var19)(var11, var1);
                var1 = 0;
                var5 = var5[var1];
                var20 = 10;
                var1 = var3[var20];
                var1 = var6.bind(var19)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
                var1 = var5 === var1;
                var0.willShowGlobalSearchOnboarding = var1;
                var1 = var0.willShowGlobalSearchOnboarding;
                var0 = var3[var9];
                var12 = var6.bind(var19)(var0);
                var11 = var12.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var2 = _closure1_slot8;
                    var1 = var2.getRecentMessageMetadata;
                    var1 = var1.bind(var2)();
                    var0.recentMessageMetadata = var1;
                    var1 = var2.getRecentApplicationCommandMetadata;
                    var1 = var1.bind(var2)();
                    var0.recentApplicationCommandMetadata = var1;
                    return var0;
                };
                var0 = var11.bind(var12)(var5, var0);
                var5 = var0.recentMessageMetadata;
                var0 = var0.recentApplicationCommandMetadata;
                var3 = var3[var9];
                var9 = var6.bind(var19)(var3);
                var6 = var9.useStateFromStores;
                var11 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var11;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot7;
                    var0 = var1.getTriggeredOnboardingContentMetadata;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var6.bind(var9)(var3, var2);
                var3 = {};
                var3.currentTimeMs = var16;
                var3.recentMessageMetadata = var5;
                var3.channelId = var18;
                var11 = var3.currentTimeMs;
                var6 = var3.recentMessageMetadata;
                var5 = var3.channelId;
                var9 = var10 != var6;
                if (!var9) {
                    _fun90334_ip = 452;
                    continue _fun90334
                }
            case 434:
                var12 = var6.timeMs;
                var3 = _closure1_slot10;
                var3 = var12 + var3;
                var9 = var11 < var3;
            case 452:
                if (!var9) {
                    _fun90334_ip = 473;
                    continue _fun90334
                }
            case 455:
                var11 = var10 == var6;
                var3 = undefined;
                if (var11) {
                    _fun90334_ip = 469;
                    continue _fun90334
                }
            case 464:
                var3 = var6.channelId;
            case 469:
                var9 = var3 === var5;
            case 473:
                var3 = {};
                var3.currentTimeMs = var16;
                var3.recentApplicationCommandMetadata = var0;
                var3.channelId = var18;
                var11 = var3.currentTimeMs;
                var6 = var3.recentApplicationCommandMetadata;
                var5 = var3.channelId;
                var13 = var10 != var6;
                if (!var13) {
                    _fun90334_ip = 531;
                    continue _fun90334
                }
            case 513:
                var12 = var6.timeMs;
                var3 = _closure1_slot11;
                var3 = var12 + var3;
                var13 = var11 < var3;
            case 531:
                if (!var13) {
                    _fun90334_ip = 552;
                    continue _fun90334
                }
            case 534:
                var11 = var10 == var6;
                var3 = undefined;
                if (var11) {
                    _fun90334_ip = 548;
                    continue _fun90334
                }
            case 543:
                var3 = var6.channelId;
            case 548:
                var13 = var3 === var5;
            case 552:
                var5 = var10 == var0;
                var3 = undefined;
                if (var5) {
                    _fun90334_ip = 566;
                    continue _fun90334
                }
            case 561:
                var3 = var0.applicationId;
            case 566:
                var0 = _closure1_slot9;
                var0 = var0.BUILT_IN;
                var12 = var3 === var0;
                var17 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 12;
                var5 = var0[var3];
                var11 = var17.bind(var19)(var5);
                var6 = var11.UNSAFE_useIsDismissibleContentDismissed;
                var5 = var0[var20];
                var5 = var17.bind(var19)(var5);
                var5 = var5.DismissibleContent;
                var5 = var5.APP_LAUNCHER_ONBOARDING_BOTS_BANNER;
                var11 = var6.bind(var11)(var5);
                var5 = var0[var3];
                var21 = var17.bind(var19)(var5);
                var6 = var21.UNSAFE_useIsDismissibleContentDismissed;
                var5 = var0[var20];
                var5 = var17.bind(var19)(var5);
                var5 = var5.DismissibleContent;
                var5 = var5.APP_LAUNCHER_ONBOARDING_APPS_BANNER;
                var5 = var6.bind(var21)(var5);
                var3 = var0[var3];
                var6 = var17.bind(var19)(var3);
                var3 = var6.UNSAFE_useIsDismissibleContentDismissed;
                var0 = var0[var20];
                var0 = var17.bind(var19)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                var6 = var3.bind(var6)(var0);
                var0 = {
                    'canShowOnboarding': false,
                    'canShowBotsBanner': false,
                    'canShowAppsOrActivitiesBanner': false,
                    'willShowGlobalSearchOnboarding': false,
                    'fromTriggeredOnboarding': false
                };
                var3 = var10 != var2;
                if (!var3) {
                    _fun90334_ip = 744;
                    continue _fun90334
                }
            case 735:
                var17 = var2.channelId;
                var3 = var17 === var18;
            case 744:
                if (!var3) {
                    _fun90334_ip = 765;
                    continue _fun90334
                }
            case 747:
                var17 = var2.timeMs;
                var15 = _closure1_slot14;
                var15 = var17 + var15;
                var3 = var15 > var16;
            case 765:
                if (!(var10 != var14)) {
                    _fun90334_ip = 942;
                    continue _fun90334
                }
            case 772:
                var10 = !var13;
                if (!var13) {
                    _fun90334_ip = 781;
                    continue _fun90334
                }
            case 778:
                var10 = var12;
            case 781:
                if (var10) {
                    _fun90334_ip = 787;
                    continue _fun90334
                }
            case 784:
                var10 = var11;
            case 787:
                if (var10) {
                    _fun90334_ip = 793;
                    continue _fun90334
                }
            case 790:
                var10 = var7;
            case 793:
                if (var10) {
                    _fun90334_ip = 810;
                    continue _fun90334
                }
            case 796:
                var10 = true;
                var0.canShowOnboarding = var10;
                var0.canShowBotsBanner = var10;
            case 810:
                if (var4) {
                    _fun90334_ip = 816;
                    continue _fun90334
                }
            case 813:
                var4 = !var9;
            case 816:
                if (var4) {
                    _fun90334_ip = 822;
                    continue _fun90334
                }
            case 819:
                var4 = !var8;
            case 822:
                if (var4) {
                    _fun90334_ip = 828;
                    continue _fun90334
                }
            case 825:
                var4 = var7;
            case 828:
                if (var4) {
                    _fun90334_ip = 840;
                    continue _fun90334
                }
            case 831:
                if (!var5) {
                    _fun90334_ip = 837;
                    continue _fun90334
                }
            case 834:
                var5 = var6;
            case 837:
                var4 = var5;
            case 840:
                if (var4) {
                    _fun90334_ip = 857;
                    continue _fun90334
                }
            case 843:
                var4 = true;
                var0.canShowOnboarding = var4;
                var0.canShowAppsOrActivitiesBanner = var4;
            case 857:
                if (!var1) {
                    _fun90334_ip = 874;
                    continue _fun90334
                }
            case 860:
                var1 = true;
                var0.willShowGlobalSearchOnboarding = var1;
                var0.canShowOnboarding = var1;
            case 874:
                var1 = var0.canShowOnboarding;
                var1 = !var1;
                if (!var1) {
                    _fun90334_ip = 889;
                    continue _fun90334
                }
            case 886:
                var1 = var3;
            case 889:
                if (!var1) {
                    _fun90334_ip = 942;
                    continue _fun90334
                }
            case 892:
                var1 = true;
                var0.canShowOnboarding = var1;
                var3 = var2.canShowBotsBanner;
                var0.canShowBotsBanner = var3;
                var3 = var2.canShowAppsOrActivitiesBanner;
                var0.canShowAppsOrActivitiesBanner = var3;
                var2 = var2.willShowGlobalSearchOnboarding;
                var0.willShowGlobalSearchOnboarding = var2;
                var0.fromTriggeredOnboarding = var1;
            case 942:
                return var0;
        }
    };
    var2.default = var3;
    var2.RECENT_MESSAGE_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1372, 1599, 1621, 11731, 11732, 4545, 667, 566, 21, 1358, 5957, 3212, 2]);