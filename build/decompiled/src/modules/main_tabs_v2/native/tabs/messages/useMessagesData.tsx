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
    var14 = 2;
    var1 = var7[var14];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var13 = 3;
    var1 = var7[var13];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var12 = 4;
    var1 = var7[var12];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var11 = 5;
    var1 = var7[var11];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var10 = 6;
    var1 = var7[var10];
    var1 = var6.bind(var0)(var1);
    var1 = var1.PermissionPromptType;
    var _closure1_slot9 = var1;
    var5 = 7;
    var1 = var7[var5];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var3 = {};
    var3.NotificationsNudge = var9;
    var1 = 'NotificationsNudge';
    var3[var9] = var1;
    var3.NotificationsNudgeSeparator = var8;
    var1 = 'NotificationsNudgeSeparator';
    var3[var8] = var1;
    var3.IncomingRequests = var14;
    var1 = 'IncomingRequests';
    var3[var14] = var1;
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
    var _closure1_slot11 = var1;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() { // Original name: useMessagesData, environment: var4
        _fun101399: for (var _fun101399_ip = 0;;) switch (_fun101399_ip) {
            case 0:
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 8;
                var2 = var7[var5];
                var15 = undefined;
                var6 = var10.bind(var15)(var2);
                var4 = var6.useStateFromStoresObject;
                var2 = _closure1_slot7;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot5;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot7;
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
                var2 = var4.bind(var6)(var3, var2);
                var14 = var2.connected;
                var _closure2_slot0 = var14;
                var13 = var2.connectedToGateway;
                var _closure2_slot1 = var13;
                var2 = var7[var5];
                var6 = var10.bind(var15)(var2);
                var4 = var6.useStateFromStoresArray;
                var2 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getSortedChannels;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var4.bind(var6)(var3, var2);
                var2 = _closure1_slot3;
                var17 = 2;
                var2 = var2.bind(var15)(var3, var17);
                var3 = 0;
                var12 = var2[var3];
                var _closure2_slot2 = var12;
                var8 = 1;
                var11 = var2[var8];
                var _closure2_slot3 = var11;
                var6 = _closure1_slot1;
                var20 = 9;
                var2 = var7[var20];
                var9 = var6.bind(var15)(var2);
                var4 = var9.useExperiment;
                var2 = {};
                var16 = 'DM List';
                var2.location = var16;
                var2 = var4.bind(var9)(var2);
                var9 = var2.showInDMs;
                var2 = var2.removeItemAfterAck;
                var4 = var7[var5];
                var18 = var10.bind(var15)(var4);
                var16 = var18.useStateFromStoresArray;
                var4 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var2 = var0.localItems;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun101403: for (var _fun101403_ip = 0;;) switch (_fun101403_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.type;
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var5 = 10;
                                var0 = var0[var5];
                                var4 = undefined;
                                var0 = var6.bind(var4)(var0);
                                var0 = var0.NotificationCenterLocalItems;
                                var0 = var0.INCOMING_FRIEND_REQUESTS;
                                var0 = var3 === var0;
                                if (var0) {
                                    _fun101403_ip = 90;
                                    continue _fun101403
                                }
                            case 52:
                                var2 = var2.type;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var5];
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.NotificationCenterLocalItems;
                                var1 = var1.INCOMING_GAME_FRIEND_REQUESTS;
                                var0 = var2 === var1;
                            case 90:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var16.bind(var18)(var10, var4);
                var4 = 11;
                var4 = var7[var4];
                var6 = var6.bind(var15)(var4);
                var4 = {};
                var7 = 'Messages Tab';
                var4.location = var7;
                var7 = var14;
                if (!var7) {
                    _fun101399_ip = 284;
                    continue _fun101399
                }
            case 281:
                var7 = var13;
            case 284:
                var4.isConnected = var7;
                var6 = var6.bind(var15)(var4);
                var4 = var6.setAdded;
                var _closure2_slot4 = var4;
                var7 = var6.friendSuggestions;
                var _closure2_slot5 = var7;
                var10 = var6.numFriendSuggestions;
                var _closure2_slot6 = var10;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 12;
                var6 = var16[var6];
                var6 = var19.bind(var15)(var6);
                var21 = var6.HappeningNowCardsDisabled;
                var6 = var21.useSetting;
                var6 = var6.bind(var21)();
                var _closure2_slot7 = var6;
                var5 = var16[var5];
                var23 = var19.bind(var15)(var5);
                var22 = var23.useStateFromStores;
                var5 = _closure1_slot8;
                var21 = new Array(1);
                var21[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getFriendCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var22.bind(var23)(var21, var5);
                var _closure2_slot8 = var5;
                var16 = var16[var20];
                var20 = var19.bind(var15)(var16);
                var19 = var20.useNumFriendRequestsForBadging;
                var16 = 'DMs';
                var16 = var19.bind(var20)(var16);
                if (!var9) {
                    _fun101399_ip = 445;
                    continue _fun101399
                }
            case 436:
                var18 = var18.length;
                var9 = var18 > var3;
            case 445:
                if (!var9) {
                    _fun101399_ip = 468;
                    continue _fun101399
                }
            case 448:
                var2 = !var2;
                if (var2) {
                    _fun101399_ip = 458;
                    continue _fun101399
                }
            case 454:
                var2 = var16 > var3;
            case 458:
                if (var2) {
                    _fun101399_ip = 465;
                    continue _fun101399
                }
            case 461:
                var2 = var3 === var5;
            case 465:
                var9 = var2;
            case 468:
                var _closure2_slot9 = var9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = 13;
                var2 = var19[var20];
                var22 = var18.bind(var15)(var2);
                var21 = var22.useShouldSeePushNotificationNudge;
                var2 = _closure1_slot9;
                var16 = var2.DM_SPACE;
                var16 = var21.bind(var22)(var16);
                var20 = var19[var20];
                var21 = var18.bind(var15)(var20);
                var20 = var21.useNudgeExperimentConfigWithoutExposure;
                var2 = var2.DM_SPACE;
                var23 = var20.bind(var21)(var2);
                var2 = 14;
                var2 = var19[var2];
                var20 = var18.bind(var15)(var2);
                var19 = var20.useSelectedTimeRecurringDismissibleContent;
                var2 = null;
                var18 = null;
                if (!var16) {
                    _fun101399_ip = 596;
                    continue _fun101399
                }
            case 564:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = 15;
                var16 = var22[var16];
                var16 = var21.bind(var15)(var16);
                var16 = var16.DismissibleContent;
                var18 = var16.NOTIFICATION_NUDGE_DM_HOME_BANNER;
            case 596:
                var16 = {};
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var21 = 16;
                var21 = var24[var21];
                var22 = var22.bind(var15)(var21);
                var21 = var22.getNotificationNudgeCooldownMs;
                var24 = var2 == var23;
                var2 = undefined;
                if (var24) {
                    _fun101399_ip = 639;
                    continue _fun101399
                }
            case 633:
                var2 = var23.timing;
            case 639:
                var2 = var21.bind(var22)(var2);
                var16.cooldownDurationMs = var2;
                var25 = true;
                var29 = var20;
                var28 = var18;
                var27 = var16;
                var26 = undefined;
                var16 = var29[var19](var28, var27, var26, var25, var24);
                var2 = _closure1_slot3;
                var2 = var2.bind(var15)(var16, var17);
                var3 = var2[var3];
                var2 = var2[var8];
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 15;
                var2 = var16[var2];
                var2 = var8.bind(var15)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.NOTIFICATION_NUDGE_DM_HOME_BANNER;
                var8 = var3 === var2;
                var _closure2_slot10 = var8;
                var3 = _closure1_slot4;
                var2 = var3.useRef;
                var1 = -1;
                var1 = var2.bind(var3)(var1);
                var _closure2_slot11 = var1;
                var2 = var3.useMemo;
                var1 = new Array(11);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var12;
                var1[3] = var11;
                var1[4] = var10;
                var1[5] = var9;
                var1[6] = var8;
                var1[7] = var7;
                var1[8] = var6;
                var1[9] = var5;
                var1[10] = var4;
                var0 = function() { // Environment: var0
                    _fun101405: for (var _fun101405_ip = 0;;) switch (_fun101405_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var1 = var0.current;
                            var0 = -1;
                            if (!(var0 !== var1)) {
                                _fun101405_ip = 56;
                                continue _fun101405
                            }
                        case 22:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun101405_ip = 33;
                                continue _fun101405
                            }
                        case 29:
                            var0 = _closure2_slot1;
                        case 33:
                            if (!var0) {
                                _fun101405_ip = 68;
                                continue _fun101405
                            }
                        case 36:
                            var1 = _closure2_slot11;
                            var0 = var1.current;
                            var0 = var0 + 1;
                            var1.current = var0;
                            _fun101405_ip = 68;
                            continue _fun101405;
                        case 56:
                            var1 = _closure2_slot11;
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
                                _fun101405_ip = 149;
                                continue _fun101405
                            }
                        case 107:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun101405_ip = 121;
                                continue _fun101405
                            }
                        case 114:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun101405_ip = 149;
                                continue _fun101405
                            }
                        case 121:
                            var0 = global;
                            var6 = var0.Math;
                            var2 = var6.min;
                            var1 = _closure2_slot6;
                            var0 = 5;
                            var2 = var2.bind(var6)(var1, var0);
                            _fun101405_ip = 167;
                            continue _fun101405;
                        case 149:
                            if (var4) {
                                _fun101405_ip = 162;
                                continue _fun101405
                            }
                        case 152:
                            var1 = _closure2_slot0;
                            var0 = 15;
                            if (!var1) {
                                _fun101405_ip = 164;
                                continue _fun101405
                            }
                        case 162:
                            var0 = 0;
                        case 164:
                            var2 = var0;
                        case 167:
                            var1 = new Array(0);
                            var6 = var1.push;
                            var7 = _closure2_slot10;
                            var0 = 0;
                            if (!var7) {
                                _fun101405_ip = 188;
                                continue _fun101405
                            }
                        case 185:
                            var0 = 1;
                        case 188:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var7 = _closure2_slot9;
                            var0 = 0;
                            if (var7) {
                                _fun101405_ip = 219;
                                continue _fun101405
                            }
                        case 207:
                            var7 = _closure2_slot10;
                            var0 = 0;
                            if (!var7) {
                                _fun101405_ip = 219;
                                continue _fun101405
                            }
                        case 216:
                            var0 = 1;
                        case 219:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var7 = _closure2_slot9;
                            var0 = 0;
                            if (!var7) {
                                _fun101405_ip = 241;
                                continue _fun101405
                            }
                        case 238:
                            var0 = 1;
                        case 241:
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
                                _fun101405_ip = 297;
                                continue _fun101405
                            }
                        case 294:
                            var0 = 1;
                        case 297:
                            var0 = var6.bind(var1)(var0);
                            var6 = var1.push;
                            var0 = 0;
                            if (!var3) {
                                _fun101405_ip = 339;
                                continue _fun101405
                            }
                        case 312:
                            var7 = _closure2_slot0;
                            var0 = 0;
                            if (!var7) {
                                _fun101405_ip = 339;
                                continue _fun101405
                            }
                        case 321:
                            var7 = _closure2_slot1;
                            var0 = 0;
                            if (!var7) {
                                _fun101405_ip = 339;
                                continue _fun101405
                            }
                        case 330:
                            var7 = _closure2_slot5;
                            var0 = var7.length;
                        case 339:
                            var0 = var6.bind(var1)(var0);
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                            if (var4) {
                                _fun101405_ip = 377;
                                continue _fun101405
                            }
                        case 357:
                            var2 = null;
                            if (!var3) {
                                _fun101405_ip = 375;
                                continue _fun101405
                            }
                        case 362:
                            var0 = _closure1_slot11;
                            var2 = var0.EmptyState;
                        case 375:
                            _fun101405_ip = 402;
                            continue _fun101405;
                        case 377:
                            var7 = _closure2_slot7;
                            var0 = null;
                            if (var7) {
                                _fun101405_ip = 399;
                                continue _fun101405
                            }
                        case 386:
                            var7 = _closure1_slot11;
                            var0 = var7.HappeningNow;
                        case 399:
                            var2 = var0;
                        case 402:
                            var0 = {};
                            var7 = _closure2_slot3;
                            var0.channels = var7;
                            var7 = _closure2_slot2;
                            var0.channelFavorites = var7;
                            var7 = _closure2_slot11;
                            var7 = var7.current;
                            var7 = var7 > var8;
                            var6 = null;
                            if (!var7) {
                                _fun101405_ip = 471;
                                continue _fun101405
                            }
                        case 440:
                            var7 = _closure2_slot11;
                            var9 = var7.current;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var8 = var7.concat;
                            var7 = '';
                            var6 = var8.bind(var7)(var9);
                        case 471:
                            var0.dataKey = var6;
                            var6 = !var4;
                            if (var4) {
                                _fun101405_ip = 486;
                                continue _fun101405
                            }
                        case 482:
                            var6 = _closure2_slot0;
                        case 486:
                            if (!var6) {
                                _fun101405_ip = 492;
                                continue _fun101405
                            }
                        case 489:
                            var6 = !var3;
                        case 492:
                            if (!var6) {
                                _fun101405_ip = 502;
                                continue _fun101405
                            }
                        case 495:
                            var7 = _closure2_slot9;
                            var6 = !var7;
                        case 502:
                            var0.showFullscreenEmptyState = var6;
                            var6 = _closure2_slot4;
                            var0.setAddedFriendSuggestions = var6;
                            var6 = _closure2_slot5;
                            var0.friendSuggestions = var6;
                            var0.renderHeader = var2;
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun101405_ip = 548;
                                continue _fun101405
                            }
                        case 537:
                            var6 = _closure2_slot8;
                            var5 = 4;
                            var2 = var6 < var5;
                        case 548:
                            if (!var2) {
                                _fun101405_ip = 554;
                                continue _fun101405
                            }
                        case 551:
                            var2 = var4;
                        case 554:
                            if (var2) {
                                _fun101405_ip = 560;
                                continue _fun101405
                            }
                        case 557:
                            var2 = var3;
                        case 560:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3433, 3929, 1216, 3059, 10920, 8292, 566, 13113, 3930, 13180, 1348, 10919, 5919, 1358, 10924, 2]);