// modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var9 = 0;
    var1 = var7[var9];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var5 = var7[var8];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var5);
    var _closure1_slot4 = var1;
    var13 = 2;
    var1 = var7[var13];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var12 = 3;
    var1 = var7[var12];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var11 = 4;
    var1 = var7[var11];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var10 = 5;
    var1 = var7[var10];
    var1 = var6.bind(var0)(var1);
    var1 = var1.PermissionPromptType;
    var _closure1_slot8 = var1;
    var5 = 6;
    var1 = var7[var5];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var3 = {};
    var3.NotificationsNudge = var9;
    var1 = 'NotificationsNudge';
    var3[var9] = var1;
    var3.NotificationsNudgeSeparator = var8;
    var1 = 'NotificationsNudgeSeparator';
    var3[var8] = var1;
    var3.FavoriteChannels = var13;
    var1 = 'FavoriteChannels';
    var3[var13] = var1;
    var3.Channels = var12;
    var1 = 'Channels';
    var3[var12] = var1;
    var3.Separator = var11;
    var1 = 'Separator';
    var3[var11] = var1;
    var3.SuggestedFriends = var10;
    var1 = 'SuggestedFriends';
    var3[var10] = var1;
    var3.Placeholders = var5;
    var1 = 'Placeholders';
    var3[var5] = var1;
    var1 = {};
    var1.HappeningNow = var9;
    var5 = 'HappeningNow';
    var1[var9] = var5;
    var1.EmptyState = var8;
    var5 = 'EmptyState';
    var1[var8] = var5;
    var _closure1_slot10 = var1;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() {
        _fun101461: for (var _fun101461_ip = 0;;) switch (_fun101461_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var3 = var6[var2];
                var14 = undefined;
                var8 = var4.bind(var14)(var3);
                var7 = var8.useStateFromStoresObject;
                var3 = _closure1_slot6;
                var5 = new Array(2);
                var5[0] = var3;
                var3 = _closure1_slot5;
                var5[1] = var3;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot6;
                    var2 = var3.getSessionId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var2 = var2 != var3;
                    var0.connected = var2;
                    var2 = _closure1_slot5;
                    var1 = var2.isConnected;
                    var1 = var1.bind(var2)();
                    var0.connectedToGateway = var1;
                    return var0;
                };
                var3 = var7.bind(var8)(var5, var3);
                var13 = var3.connected;
                var _closure2_slot0 = var13;
                var12 = var3.connectedToGateway;
                var _closure2_slot1 = var12;
                var3 = var6[var2];
                var7 = var4.bind(var14)(var3);
                var5 = var7.useStateFromStoresArray;
                var3 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getSortedChannels;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var5.bind(var7)(var4, var3);
                var3 = _closure1_slot3;
                var16 = 2;
                var4 = var3.bind(var14)(var4, var16);
                var3 = 0;
                var11 = var4[var3];
                var _closure2_slot2 = var11;
                var8 = 1;
                var10 = var4[var8];
                var _closure2_slot3 = var10;
                var5 = _closure1_slot1;
                var4 = 8;
                var4 = var6[var4];
                var5 = var5.bind(var14)(var4);
                var4 = {};
                var6 = 'Messages Tab';
                var4.location = var6;
                var6 = var13;
                if (!var6) {
                    _fun101461_ip = 197;
                    continue _fun101461
                }
            case 194:
                var6 = var12;
            case 197:
                var4.isConnected = var6;
                var5 = var5.bind(var14)(var4);
                var4 = var5.setAdded;
                var _closure2_slot4 = var4;
                var7 = var5.friendSuggestions;
                var _closure2_slot5 = var7;
                var9 = var5.numFriendSuggestions;
                var _closure2_slot6 = var9;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 9;
                var5 = var18[var5];
                var5 = var17.bind(var14)(var5);
                var6 = var5.HappeningNowCardsDisabled;
                var5 = var6.useSetting;
                var6 = var5.bind(var6)();
                var _closure2_slot7 = var6;
                var2 = var18[var2];
                var19 = var17.bind(var14)(var2);
                var15 = var19.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getFriendCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var15.bind(var19)(var5, var2);
                var _closure2_slot8 = var5;
                var19 = 10;
                var2 = var18[var19];
                var21 = var17.bind(var14)(var2);
                var20 = var21.useShouldSeePushNotificationNudge;
                var2 = _closure1_slot8;
                var15 = var2.DM_SPACE;
                var15 = var20.bind(var21)(var15);
                var19 = var18[var19];
                var20 = var17.bind(var14)(var19);
                var19 = var20.useNudgeExperimentConfigWithoutExposure;
                var2 = var2.DM_SPACE;
                var22 = var19.bind(var20)(var2);
                var2 = 11;
                var2 = var18[var2];
                var19 = var17.bind(var14)(var2);
                var18 = var19.useSelectedTimeRecurringDismissibleContent;
                var2 = null;
                var17 = null;
                if (!var15) {
                    _fun101461_ip = 436;
                    continue _fun101461
                }
            case 404:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var15 = 12;
                var15 = var21[var15];
                var15 = var20.bind(var14)(var15);
                var15 = var15.DismissibleContent;
                var17 = var15.NOTIFICATION_NUDGE_DM_HOME_BANNER;
            case 436:
                var15 = {};
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 13;
                var20 = var23[var20];
                var21 = var21.bind(var14)(var20);
                var20 = var21.getNotificationNudgeCooldownMs;
                var23 = var2 == var22;
                var2 = undefined;
                if (var23) {
                    _fun101461_ip = 479;
                    continue _fun101461
                }
            case 473:
                var2 = var22.timing;
            case 479:
                var2 = var20.bind(var21)(var2);
                var15.cooldownDurationMs = var2;
                var24 = true;
                var28 = var19;
                var27 = var17;
                var26 = var15;
                var25 = undefined;
                var15 = var28[var18](var27, var26, var25, var24, var23);
                var2 = _closure1_slot3;
                var2 = var2.bind(var14)(var15, var16);
                var3 = var2[var3];
                var2 = var2[var8];
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 12;
                var2 = var15[var2];
                var2 = var8.bind(var14)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.NOTIFICATION_NUDGE_DM_HOME_BANNER;
                var8 = var3 === var2;
                var _closure2_slot9 = var8;
                var3 = _closure1_slot4;
                var2 = var3.useRef;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var _closure2_slot10 = var1;
                var2 = var3.useMemo;
                var1 = new Array(10);
                var1[0] = var13;
                var1[1] = var12;
                var1[2] = var11;
                var1[3] = var10;
                var1[4] = var9;
                var1[5] = var8;
                var1[6] = var7;
                var1[7] = var6;
                var1[8] = var5;
                var1[9] = var4;
                var0 = function() { // Environment: var0
                    _fun101465: for (var _fun101465_ip = 0;;) switch (_fun101465_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var1 = var0.current;
                            var0 = -1;
                            if (!(var0 !== var1)) {
                                _fun101465_ip = 56;
                                continue _fun101465
                            }
                        case 22:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun101465_ip = 33;
                                continue _fun101465
                            }
                        case 29:
                            var0 = _closure2_slot1;
                        case 33:
                            if (!var0) {
                                _fun101465_ip = 68;
                                continue _fun101465
                            }
                        case 36:
                            var1 = _closure2_slot10;
                            var0 = var1.current;
                            var0 = var0 + 1;
                            var1.current = var0;
                            _fun101465_ip = 68;
                            continue _fun101465;
                        case 56:
                            var1 = _closure2_slot10;
                            var0 = 0;
                            var1.current = var0;
                        case 68:
                            var0 = _closure2_slot2;
                            var1 = var0.length;
                            var0 = _closure2_slot3;
                            var0 = var0.length;
                            var0 = var1 + var0;
                            var8 = 0;
                            var4 = var0 > var8;
                            var0 = _closure2_slot6;
                            var3 = var0 > var8;
                            if (!var3) {
                                _fun101465_ip = 149;
                                continue _fun101465
                            }
                        case 107:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun101465_ip = 121;
                                continue _fun101465
                            }
                        case 114:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun101465_ip = 149;
                                continue _fun101465
                            }
                        case 121:
                            var0 = global;
                            var6 = var0.Math;
                            var2 = var6.min;
                            var1 = _closure2_slot6;
                            var0 = 5;
                            var2 = var2.bind(var6)(var1, var0);
                            _fun101465_ip = 167;
                            continue _fun101465;
                        case 149:
                            if (var4) {
                                _fun101465_ip = 162;
                                continue _fun101465
                            }
                        case 152:
                            var1 = _closure2_slot0;
                            var0 = 15;
                            if (!var1) {
                                _fun101465_ip = 164;
                                continue _fun101465
                            }
                        case 162:
                            var0 = 0;
                        case 164:
                            var2 = var0;
                        case 167:
                            var1 = new Array(0);
                            var6 = var1.push;
                            var7 = _closure2_slot9;
                            var0 = 0;
                            if (!var7) {
                                _fun101465_ip = 188;
                                continue _fun101465
                            }
                        case 185:
                            var0 = 1;
                        case 188:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var7 = _closure2_slot9;
                            var0 = 0;
                            if (!var7) {
                                _fun101465_ip = 210;
                                continue _fun101465
                            }
                        case 207:
                            var0 = 1;
                        case 210:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var0 = _closure2_slot3;
                            var0 = var0.length;
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var0 = 0;
                            if (!var3) {
                                _fun101465_ip = 266;
                                continue _fun101465
                            }
                        case 263:
                            var0 = 1;
                        case 266:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var0 = 0;
                            if (!var3) {
                                _fun101465_ip = 308;
                                continue _fun101465
                            }
                        case 281:
                            var7 = _closure2_slot0;
                            var0 = 0;
                            if (!var7) {
                                _fun101465_ip = 308;
                                continue _fun101465
                            }
                        case 290:
                            var7 = _closure2_slot1;
                            var0 = 0;
                            if (!var7) {
                                _fun101465_ip = 308;
                                continue _fun101465
                            }
                        case 299:
                            var7 = _closure2_slot5;
                            var0 = var7.length;
                        case 308:
                            var0 = var6.bind(var1)(var0);
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                            if (var4) {
                                _fun101465_ip = 346;
                                continue _fun101465
                            }
                        case 326:
                            var2 = null;
                            if (!var3) {
                                _fun101465_ip = 344;
                                continue _fun101465
                            }
                        case 331:
                            var0 = _closure1_slot10;
                            var2 = var0.EmptyState;
                        case 344:
                            _fun101465_ip = 371;
                            continue _fun101465;
                        case 346:
                            var7 = _closure2_slot7;
                            var0 = null;
                            if (var7) {
                                _fun101465_ip = 368;
                                continue _fun101465
                            }
                        case 355:
                            var7 = _closure1_slot10;
                            var0 = var7.HappeningNow;
                        case 368:
                            var2 = var0;
                        case 371:
                            var0 = {};
                            var7 = _closure2_slot3;
                            var0.channels = var7;
                            var7 = _closure2_slot2;
                            var0.channelFavorites = var7;
                            var7 = _closure2_slot10;
                            var7 = var7.current;
                            var7 = var7 > var8;
                            var6 = null;
                            if (!var7) {
                                _fun101465_ip = 440;
                                continue _fun101465
                            }
                        case 409:
                            var7 = _closure2_slot10;
                            var9 = var7.current;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var8 = var7.concat;
                            var7 = '';
                            var6 = var8.bind(var7)(var9);
                        case 440:
                            var0.dataKey = var6;
                            var6 = !var4;
                            if (var4) {
                                _fun101465_ip = 455;
                                continue _fun101465
                            }
                        case 451:
                            var6 = _closure2_slot0;
                        case 455:
                            if (!var6) {
                                _fun101465_ip = 461;
                                continue _fun101465
                            }
                        case 458:
                            var6 = !var3;
                        case 461:
                            var0.showFullscreenEmptyState = var6;
                            var6 = _closure2_slot4;
                            var0.setAddedFriendSuggestions = var6;
                            var6 = _closure2_slot5;
                            var0.friendSuggestions = var6;
                            var0.renderHeader = var2;
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun101465_ip = 507;
                                continue _fun101465
                            }
                        case 496:
                            var6 = _closure2_slot8;
                            var5 = 4;
                            var2 = var6 < var5;
                        case 507:
                            if (!var2) {
                                _fun101465_ip = 513;
                                continue _fun101465
                            }
                        case 510:
                            var2 = var4;
                        case 513:
                            if (var2) {
                                _fun101465_ip = 519;
                                continue _fun101465
                            }
                        case 516:
                            var2 = var3;
                        case 519:
                            var0.renderFooter = var2;
                            var0.sections = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var4;
    var2.MessagesDataSections = var3;
    var2.MessagesDataHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3476, 1216, 3102, 11040, 8359, 566, 13242, 1348, 11039, 5965, 1358, 11045, 2]);