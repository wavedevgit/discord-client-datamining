// modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var7 = var6[var1];
    var4 = metroImportAll;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.ActivityTypes;
    var _closure1_slot14 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'marginBottom': 1,
        'borderRadius': null,
        'marginHorizontal': null,
        'padding': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var11 = 14;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10.borderRadius = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.marginHorizontal = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.padding = var13;
    var4.pressable = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10.borderRadius = var13;
    var4.nameplate = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_BACKGROUND_ACTIVE;
    var10.backgroundColor = var13;
    var4.rowActive = var10;
    var10 = {
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'left': 0,
        'right': 0,
        'borderWidth': 1
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_MUTED;
    var10.borderColor = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10.borderRadius = var13;
    var4.selectedBorder = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10.borderRadius = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var10.backgroundColor = var11;
    var4.rowSelected = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun101375: for (var _fun101375_ip = 0;;) switch (_fun101375_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.channel;
                var _closure2_slot0 = var23;
                var4 = var0.height;
                var _closure2_slot1 = var4;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var5 = var2[var0];
                var3 = undefined;
                var8 = var1.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var16
                    _fun101376: for (var _fun101376_ip = 0;;) switch (_fun101376_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = var1.getChannelId;
                            var3 = null;
                            var1 = var0.bind(var1)(var3);
                            var0 = _closure2_slot0;
                            var3 = var3 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun101376_ip = 45;
                                continue _fun101376
                            }
                        case 36:
                            var2 = _closure2_slot0;
                            var0 = var2.id;
                        case 45:
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var22 = var7.bind(var8)(var6, var5);
                var _closure2_slot2 = var22;
                var5 = _closure1_slot18;
                var25 = var5.bind(var3)();
                var _closure2_slot3 = var25;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var16
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.height = var1;
                    var1 = 'hidden';
                    var0.overflow = var1;
                    return var0;
                };
                var5 = var6.bind(var8)(var4, var5);
                var7 = var8.useMemo;
                var6 = new Array(2);
                var6[0] = var25;
                var6[1] = var22;
                var4 = function() { // Environment: var16
                    _fun101378: for (var _fun101378_ip = 0;;) switch (_fun101378_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = var0.pressable;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot2;
                            var1 = undefined;
                            if (!var3) {
                                _fun101378_ip = 40;
                                continue _fun101378
                            }
                        case 30:
                            var2 = _closure2_slot3;
                            var1 = var2.rowSelected;
                        case 40:
                            var0[1] = var1;
                            return var0;
                    }
                };
                var7 = var7.bind(var8)(var4, var6);
                var4 = var2[var0];
                var10 = var1.bind(var3)(var4);
                var9 = var10.useStateFromStoresObject;
                var4 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var16
                    _fun101379: for (var _fun101379_ip = 0;;) switch (_fun101379_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.isDM;
                            var1 = var0.bind(var1)();
                            var0 = undefined;
                            var2 = undefined;
                            if (!var1) {
                                _fun101379_ip = 56;
                                continue _fun101379
                            }
                        case 24:
                            var5 = _closure1_slot7;
                            var4 = var5.getActivities;
                            var6 = _closure2_slot0;
                            var1 = var6.getRecipientId;
                            var1 = var1.bind(var6)();
                            var2 = var4.bind(var5)(var1);
                        case 56:
                            var4 = _closure2_slot0;
                            var1 = var4.isDM;
                            var4 = var1.bind(var4)();
                            var1 = {};
                            if (var4) {
                                _fun101379_ip = 89;
                                continue _fun101379
                            }
                        case 75:
                            var1.status = var0;
                            var1.activities = var0;
                            var0 = var1;
                            _fun101379_ip = 133;
                            continue _fun101379;
                        case 89:
                            var5 = _closure1_slot7;
                            var4 = var5.getStatus;
                            var6 = _closure2_slot0;
                            var3 = var6.getRecipientId;
                            var3 = var3.bind(var6)();
                            var3 = var4.bind(var5)(var3);
                            var1.status = var3;
                            var1.activities = var2;
                            var0 = var1;
                        case 133:
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var6, var4);
                var26 = var4.status;
                var18 = var4.activities;
                var4 = var2[var0];
                var10 = var1.bind(var3)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var16
                    _fun101380: for (var _fun101380_ip = 0;;) switch (_fun101380_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var1 = var4.getMentionCount;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var1 = var1.bind(var4)(var0);
                            var0 = 0;
                            var0 = var1 > var0;
                            if (var0) {
                                _fun101380_ip = 89;
                                continue _fun101380
                            }
                        case 39:
                            var4 = _closure2_slot0;
                            var1 = var4.getGuildId;
                            var4 = var1.bind(var4)();
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun101380_ip = 86;
                                continue _fun101380
                            }
                        case 62:
                            var4 = _closure1_slot8;
                            var3 = var4.hasUnread;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 86:
                            var0 = var1;
                        case 89:
                            return var0;
                    }
                };
                var13 = var9.bind(var10)(var6, var4);
                var4 = var2[var0];
                var10 = var1.bind(var3)(var4);
                var9 = var10.useStateFromStoresObject;
                var4 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var16
                    var0 = {};
                    var3 = _closure1_slot11;
                    var2 = var3.resolveUnreadSetting;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var0.resolvedUnreadSetting = var2;
                    var5 = var3.isChannelMuted;
                    var2 = var1.getGuildId;
                    var4 = var2.bind(var1)();
                    var2 = var1.id;
                    var2 = var5.bind(var3)(var4, var2);
                    var0.muted = var2;
                    var2 = var3.isMessagesFavorite;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.favorite = var1;
                    return var0;
                };
                var4 = var9.bind(var10)(var6, var4);
                var12 = var4.resolvedUnreadSetting;
                var20 = var4.muted;
                var21 = var4.favorite;
                var4 = var2[var0];
                var10 = var1.bind(var3)(var4);
                var9 = var10.useStateFromStoresObject;
                var4 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var16
                    _fun101382: for (var _fun101382_ip = 0;;) switch (_fun101382_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var1 = var3.isDM;
                            var1 = var1.bind(var3)();
                            var3 = !var1;
                            var1 = !var3;
                            if (var3) {
                                _fun101382_ip = 60;
                                continue _fun101382
                            }
                        case 28:
                            var5 = _closure1_slot9;
                            var4 = var5.isIgnored;
                            var6 = _closure2_slot0;
                            var3 = var6.getRecipientId;
                            var3 = var3.bind(var6)();
                            var1 = var4.bind(var5)(var3);
                        case 60:
                            var0.ignored = var1;
                            var3 = _closure2_slot0;
                            var1 = var3.isDM;
                            var1 = var1.bind(var3)();
                            var3 = !var1;
                            var1 = !var3;
                            if (var3) {
                                _fun101382_ip = 120;
                                continue _fun101382
                            }
                        case 88:
                            var4 = _closure1_slot9;
                            var3 = var4.isBlocked;
                            var5 = _closure2_slot0;
                            var2 = var5.getRecipientId;
                            var2 = var2.bind(var5)();
                            var1 = var3.bind(var4)(var2);
                        case 120:
                            var0.blocked = var1;
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var6, var4);
                var19 = var4.ignored;
                var17 = var4.blocked;
                var0 = var2[var0];
                var9 = var1.bind(var3)(var0);
                var6 = var9.useStateFromStores;
                var0 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var16
                    _fun101383: for (var _fun101383_ip = 0;;) switch (_fun101383_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.getUser;
                            var4 = _closure2_slot0;
                            var0 = var4.isDM;
                            var5 = var0.bind(var4)();
                            var4 = true;
                            var0 = undefined;
                            if (!(var4 === var5)) {
                                _fun101383_ip = 52;
                                continue _fun101383
                            }
                        case 38:
                            var4 = _closure2_slot0;
                            var3 = var4.getRecipientId;
                            var0 = var3.bind(var4)();
                        case 52:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var6.bind(var9)(var4, var0);
                var0 = var8.useState;
                var4 = false;
                var9 = var0.bind(var8)(var4);
                var8 = _closure1_slot3;
                var0 = 2;
                var8 = var8.bind(var3)(var9, var0);
                var0 = 0;
                var9 = var8[var0];
                var0 = 1;
                var0 = var8[var0];
                var _closure2_slot4 = var0;
                var0 = 16;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useNameplate;
                var0 = {};
                var0.user = var6;
                var24 = var1.bind(var2)(var0);
                var14 = null;
                var11 = var14 != var24;
                if (!var11) {
                    _fun101375_ip = 485;
                    continue _fun101375
                }
            case 473:
                var0 = var22;
                if (var22) {
                    _fun101375_ip = 482;
                    continue _fun101375
                }
            case 479:
                var0 = var9;
            case 482:
                var11 = var0;
            case 485:
                var6 = _closure1_slot4;
                var2 = var6.useCallback;
                var0 = var23.guild_id;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var23.id;
                var1[1] = var0;
                var0 = function() { // Environment: var16
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.preload;
                    var2 = _closure2_slot0;
                    var3 = var2.guild_id;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot4;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var30 = var2.bind(var6)(var0, var1);
                var2 = var6.useCallback;
                var1 = function() { // Environment: var16
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var29 = var2.bind(var6)(var1, var0);
                var2 = var6.useCallback;
                var0 = var23.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    _fun101386: for (var _fun101386_ip = 0;;) switch (_fun101386_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.transitionToChannel;
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure1_slot6;
                            var3 = var4.isChannelNudged;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun101386_ip = 361;
                                continue _fun101386
                            }
                        case 74:
                            var3 = _closure1_slot6;
                            var2 = var3.getNudgeTimestamp;
                            var5 = _closure2_slot0;
                            var1 = var5.id;
                            var10 = var2.bind(var3)(var1);
                            var2 = _closure1_slot13;
                            var1 = var2.getPrivateChannelIds;
                            var4 = var1.bind(var2)();
                            var2 = var4.indexOf;
                            var1 = var5.id;
                            var9 = var2.bind(var4)(var1);
                            var2 = var3.getChannelNudge;
                            var1 = var5.id;
                            var6 = var2.bind(var3)(var1);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot15;
                            var2 = var1.REPLY_NUDGE_OPENED;
                            var1 = {};
                            var5 = var5.id;
                            var1.channel_id = var5;
                            var5 = 0;
                            var11 = var9 >= var5;
                            var5 = null;
                            var7 = null;
                            if (!var11) {
                                _fun101386_ip = 207;
                                continue _fun101386
                            }
                        case 204:
                            var7 = var9;
                        case 207:
                            var1.channel_dm_list_index = var7;
                            var9 = var5 != var10;
                            var7 = null;
                            if (!var9) {
                                _fun101386_ip = 242;
                                continue _fun101386
                            }
                        case 221:
                            var9 = global;
                            var11 = var9.Date;
                            var9 = var11.now;
                            var9 = var9.bind(var11)();
                            var7 = var9 - var10;
                        case 242:
                            var1.nudge_age_ms = var7;
                            var9 = var5 == var6;
                            var7 = undefined;
                            if (var9) {
                                _fun101386_ip = 262;
                                continue _fun101386
                            }
                        case 256:
                            var7 = var6.affinity;
                        case 262:
                            var1.nudge_author_affinity = var7;
                            var9 = var5 == var6;
                            var7 = undefined;
                            if (var9) {
                                _fun101386_ip = 282;
                                continue _fun101386
                            }
                        case 276:
                            var7 = var6.authorId;
                        case 282:
                            var1.nudge_author_id = var7;
                            var9 = var5 == var6;
                            var7 = undefined;
                            if (var9) {
                                _fun101386_ip = 302;
                                continue _fun101386
                            }
                        case 296:
                            var7 = var6.authorId;
                        case 302:
                            var7 = var5 != var7;
                            if (!var7) {
                                _fun101386_ip = 330;
                                continue _fun101386
                            }
                        case 309:
                            var10 = _closure1_slot9;
                            var9 = var10.isFriend;
                            var8 = var6.authorId;
                            var7 = var9.bind(var10)(var8);
                        case 330:
                            var1.nudge_author_is_friend = var7;
                            var7 = var5 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun101386_ip = 350;
                                continue _fun101386
                            }
                        case 344:
                            var5 = var6.lastMessageId;
                        case 350:
                            var1.nudge_message_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 361:
                            return var0;
                    }
                };
                var27 = var2.bind(var6)(var0, var1);
                var2 = var6.useCallback;
                var0 = var23.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var16
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openChannelLongPressActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var5;
                var0.collapsable = var4;
                var6 = _closure1_slot17;
                var28 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 21;
                var4 = var10[var4];
                var4 = var28.bind(var3)(var4);
                var5 = var4.PressableHighlight;
                var4 = {};
                var4.onPressIn = var30;
                var4.onPressOut = var29;
                var4.onPress = var27;
                var4.onLongPress = var8;
                var8 = 'button';
                var4.accessibilityRole = var8;
                var8 = _closure1_slot1;
                var27 = 22;
                var29 = var10[var27];
                var30 = var8.bind(var3)(var29);
                var29 = {};
                var29.channel = var23;
                var29.unread = var13;
                var29 = var30.bind(var3)(var29);
                var4.accessibilityLabel = var29;
                var27 = var10[var27];
                var29 = var28.bind(var3)(var27);
                var28 = var29.getChannelA11yHint;
                var27 = {};
                var27.channel = var23;
                var27.muted = var20;
                var27.userStatus = var26;
                var27 = var28.bind(var29)(var27);
                var4.accessibilityHint = var27;
                var27 = var25.rowActive;
                var27 = var27.backgroundColor;
                var4.underlayColor = var27;
                var4.style = var7;
                var7 = 23;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var10 = undefined;
                if (!var11) {
                    _fun101375_ip = 810;
                    continue _fun101375
                }
            case 807:
                var10 = var24;
            case 810:
                var7.nameplate = var10;
                var7.isFocused = var22;
                var7.isPressed = var9;
                var10 = var20;
                if (var10) {
                    _fun101375_ip = 834;
                    continue _fun101375
                }
            case 831:
                var10 = var19;
            case 834:
                if (var10) {
                    _fun101375_ip = 840;
                    continue _fun101375
                }
            case 837:
                var10 = var17;
            case 840:
                var7.isMuted = var10;
                var7.fadeIn = var9;
                var9 = var25.nameplate;
                var7.style = var9;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(5);
                var7[0] = var8;
                var8 = var22;
                if (!var8) {
                    _fun101375_ip = 915;
                    continue _fun101375
                }
            case 880:
                var24 = _closure1_slot16;
                var10 = _closure1_slot5;
                var9 = {};
                var25 = var25.selectedBorder;
                var9.style = var25;
                var25 = 'none';
                var9.pointerEvents = var25;
                var8 = var24.bind(var3)(var10, var9);
            case 915:
                var7[1] = var8;
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var24 = _closure1_slot2;
                var8 = 24;
                var8 = var24[var8];
                var25 = var9.bind(var3)(var8);
                var8 = {};
                var8.unread = var13;
                var8.resolvedUnreadSetting = var12;
                var8.muted = var20;
                var27 = _closure1_slot0;
                var15 = 25;
                var15 = var24[var15];
                var15 = var27.bind(var3)(var15);
                var15 = var15.ChannelListLayoutTypes;
                var15 = var15.COZY_DRAWER_SMOL;
                var8.layout = var15;
                var15 = true;
                var8.panelVariant = var15;
                var8 = var10.bind(var3)(var25, var8);
                var7[2] = var8;
                var8 = 26;
                var8 = var24[var8];
                var25 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var23;
                var8.channelSelected = var22;
                var8.hasUnreadMessages = var13;
                var8.muted = var20;
                var8.ignored = var19;
                var8.blocked = var17;
                var27 = 27;
                var27 = var24[var27];
                var27 = var9.bind(var3)(var27);
                var27 = var27.bind(var3)(var18);
                var8.isStreaming = var27;
                var8.status = var26;
                var8 = var10.bind(var3)(var25, var8);
                var7[3] = var8;
                var8 = 28;
                var8 = var24[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var23;
                var8.channelSelected = var22;
                var8.favorite = var21;
                var8.muted = var20;
                var8.ignored = var19;
                var8.blocked = var17;
                var17 = var14 == var18;
                var14 = undefined;
                if (var17) {
                    _fun101375_ip = 1159;
                    continue _fun101375
                }
            case 1141:
                var17 = var18.some;
                var16 = function(arg0) { // Environment: var16
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot14;
                    var0 = var0.CUSTOM_STATUS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var14 = var17.bind(var18)(var16);
            case 1159:
                var14 = var15 === var14;
                var8.hasActivity = var14;
                var8.hasUnreadMessages = var13;
                var8.resolvedUnreadSetting = var12;
                var8.hasNameplate = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8354, 3610, 3947, 3100, 1670, 4303, 1621, 8353, 660, 33, 1297, 671, 566, 9123, 3945, 3943, 4302, 9131, 4904, 7897, 6938, 13228, 8823, 13229, 5740, 13230, 2]);