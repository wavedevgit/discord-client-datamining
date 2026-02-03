// modules/messages/MessageManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun67963: for (var _fun67963_ip = 0;;) switch (_fun67963_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun67963_ip = 76;
                continue _fun67963;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun67966: for (var _fun67966_ip = 0;;) switch (_fun67966_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.guildId;
                var9 = var0.channelId;
                var15 = var0.messageId;
                var11 = var0.forceFetch;
                var6 = var0.isPreload;
                var14 = var0.jumpType;
                var5 = var0.skipLocalFetch;
                var4 = var0.avoidInitialScroll;
                var3 = var0.fetchKey;
                var10 = null;
                if (!(var10 != var9)) {
                    _fun67966_ip = 1507;
                    continue _fun67966
                }
            case 63:
                var0 = _closure1_slot22;
                var2 = undefined;
                var0 = var0.bind(var2)(var9);
                if (var0) {
                    _fun67966_ip = 1507;
                    continue _fun67966
                }
            case 83:
                var1 = _closure1_slot11;
                var0 = var1.getChannel;
                var0 = var0.bind(var1)(var9);
                var1 = var10 == var0;
                var8 = undefined;
                if (var1) {
                    _fun67966_ip = 111;
                    continue _fun67966
                }
            case 106:
                var8 = var0.type;
            case 111:
                var1 = _closure1_slot18;
                var1 = var1.GUILD_STORE;
                if (!(var8 !== var1)) {
                    _fun67966_ip = 1507;
                    continue _fun67966
                }
            case 128:
                var8 = var10 == var0;
                var1 = undefined;
                if (var8) {
                    _fun67966_ip = 142;
                    continue _fun67966
                }
            case 137:
                var1 = var0.type;
            case 142:
                if (!(var10 != var1)) {
                    _fun67966_ip = 177;
                    continue _fun67966
                }
            case 146:
                var1 = _closure1_slot21;
                var12 = var1.GUILD_THREADS_ONLY;
                var8 = var12.has;
                var1 = var0.type;
                var1 = var8.bind(var12)(var1);
                if (var1) {
                    _fun67966_ip = 1507;
                    continue _fun67966
                }
            case 177:
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 17;
                var1 = var17[var12];
                var8 = var8.bind(var2)(var1);
                var1 = var8.getOrCreate;
                var8 = var1.bind(var8)(var9);
                var13 = var8.some;
                var16 = _closure1_slot0;
                var1 = 18;
                var1 = var17[var1];
                var1 = var16.bind(var2)(var1);
                var1 = var1.messageHasExpiredAttachmentUrl;
                var1 = var13.bind(var8)(var1);
                var17 = var8;
                if (!var1) {
                    _fun67966_ip = 315;
                    continue _fun67966
                }
            case 247:
                var13 = _closure1_slot25;
                var8 = var13.log;
                var1 = 'Found expired attachment link, clearing messages';
                var1 = var8.bind(var13)(var1);
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = var1[var12];
                var16 = var8.bind(var2)(var13);
                var13 = var16.clear;
                var13 = var13.bind(var16)(var9);
                var1 = var1[var12];
                var8 = var8.bind(var2)(var1);
                var1 = var8.getOrCreate;
                var17 = var1.bind(var8)(var9);
            case 315:
                var1 = var17.jumpTargetId;
                var1 = var10 != var1;
                if (!var1) {
                    _fun67966_ip = 332;
                    continue _fun67966
                }
            case 328:
                var1 = var10 == var15;
            case 332:
                var16 = var17;
                if (!var1) {
                    _fun67966_ip = 427;
                    continue _fun67966
                }
            case 338:
                var13 = var17.mutate;
                var1 = {
                    'jumpTargetId': null,
                    'jumped': false
                };
                var20 = _closure1_slot0;
                var8 = _closure1_slot2;
                var19 = 19;
                var19 = var8[var19];
                var19 = var20.bind(var2)(var19);
                var19 = var19.JumpTypes;
                var19 = var19.ANIMATED;
                var1.jumpType = var19;
                var1 = var13.bind(var17)(var1);
                var13 = _closure1_slot1;
                var8 = var8[var12];
                var13 = var13.bind(var2)(var8);
                var8 = var13.commit;
                var8 = var8.bind(var13)(var1);
                var16 = var1;
            case 427:
                var1 = var16.focusTargetId;
                var8 = var10 != var1;
                if (!var8) {
                    _fun67966_ip = 444;
                    continue _fun67966
                }
            case 440:
                var8 = var10 == var15;
            case 444:
                var1 = var16;
                if (!var8) {
                    _fun67966_ip = 499;
                    continue _fun67966
                }
            case 450:
                var13 = var16.mutate;
                var8 = {};
                var8.focusTargetId = var10;
                var8 = var13.bind(var16)(var8);
                var16 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var12];
                var16 = var16.bind(var2)(var13);
                var13 = var16.commit;
                var13 = var13.bind(var16)(var8);
                var1 = var8;
            case 499:
                if (!var6) {
                    _fun67966_ip = 530;
                    continue _fun67966
                }
            case 502:
                var13 = _closure1_slot8;
                var8 = var13.isConnected;
                var8 = var8.bind(var13)();
                if (var8) {
                    _fun67966_ip = 530;
                    continue _fun67966
                }
            case 519:
                var13 = var1.loadingMore;
                var8 = true;
                if (!var13) {
                    _fun67966_ip = 601;
                    continue _fun67966
                }
            case 530:
                var13 = var1.loadingMore;
                if (var13) {
                    _fun67966_ip = 592;
                    continue _fun67966
                }
            case 539:
                var13 = var1.ready;
                if (!var13) {
                    _fun67966_ip = 557;
                    continue _fun67966
                }
            case 548:
                var13 = var1.cached;
                if (!var13) {
                    _fun67966_ip = 592;
                    continue _fun67966
                }
            case 557:
                var13 = var10 != var18;
                if (!var13) {
                    _fun67966_ip = 582;
                    continue _fun67966
                }
            case 564:
                var17 = _closure1_slot12;
                var16 = var17.getGuild;
                var16 = var16.bind(var17)(var18);
                var13 = var10 == var16;
            case 582:
                var8 = var11;
                if (var13) {
                    _fun67966_ip = 601;
                    continue _fun67966
                }
            case 588:
                var8 = true;
                _fun67966_ip = 601;
                continue _fun67966;
            case 592:
                var8 = var11;
                if (!(var10 != var15)) {
                    _fun67966_ip = 601;
                    continue _fun67966
                }
            case 599:
                var8 = true;
            case 601:
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 20;
                var11 = var16[var11];
                var11 = var13.bind(var2)(var11);
                var11 = var11.bind(var2)(var9);
                if (!var11) {
                    _fun67966_ip = 644;
                    continue _fun67966
                }
            case 629:
                var16 = _closure1_slot13;
                var13 = var16.hasUnread;
                var11 = var13.bind(var16)(var9);
            case 644:
                if (!var11) {
                    _fun67966_ip = 649;
                    continue _fun67966
                }
            case 647:
                var8 = true;
            case 649:
                if (!var8) {
                    _fun67966_ip = 1507;
                    continue _fun67966
                }
            case 655:
                var11 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var13 = var11.bind(var2)(var8);
                var11 = var13.commit;
                var16 = var1.mutate;
                var8 = {};
                var12 = true;
                var8.loadingMore = var12;
                var8 = var16.bind(var1)(var8);
                var8 = var11.bind(var13)(var8);
                if (!(var10 != var15)) {
                    _fun67966_ip = 778;
                    continue _fun67966
                }
            case 707:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 21;
                var8 = var13[var8];
                var13 = var11.bind(var2)(var8);
                var11 = var13.jumpToMessage;
                var8 = {};
                var8.channelId = var9;
                var8.messageId = var15;
                var8.flash = var12;
                var8.isPreload = var6;
                var8.skipLocalFetch = var5;
                var8.jumpType = var14;
                var8.avoidInitialScroll = var4;
                var8 = var11.bind(var13)(var8);
                _fun67966_ip = 1507;
                continue _fun67966;
            case 778:
                if (!(var10 != var0)) {
                    _fun67966_ip = 1050;
                    continue _fun67966
                }
            case 785:
                var8 = var0.isThread;
                var8 = var8.bind(var0)();
                if (!var8) {
                    _fun67966_ip = 1050;
                    continue _fun67966
                }
            case 801:
                var11 = _closure1_slot13;
                var8 = var11.hasOpenedThread;
                var13 = var8.bind(var11)(var9);
                var8 = false;
                var11 = false;
                if (var13) {
                    _fun67966_ip = 1044;
                    continue _fun67966
                }
            case 826:
                var13 = _closure1_slot26;
                if (!(var10 == var13)) {
                    _fun67966_ip = 887;
                    continue _fun67966
                }
            case 834:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 22;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var16 = var13.Storage;
                var15 = var16.get;
                var14 = _closure1_slot28;
                var13 = {};
                var13 = var15.bind(var16)(var14, var13);
                if (!(var10 == var13)) {
                    _fun67966_ip = 883;
                    continue _fun67966
                }
            case 881:
                var13 = {};
            case 883:
                var _closure1_slot26 = var13;
            case 887:
                var13 = _closure1_slot26;
                var13 = var9 in var13;
                var11 = false;
                if (var13) {
                    _fun67966_ip = 1044;
                    continue _fun67966
                }
            case 903:
                var15 = _closure1_slot26;
                var13 = global;
                var16 = var13.Date;
                var14 = var16.now;
                var14 = var14.bind(var16)();
                var15[var9] = var14;
                var14 = var13.Date;
                var13 = var14.now;
                var14 = var13.bind(var14)();
                var13 = _closure1_slot27;
                var18 = var14 - var13;
                var16 = _closure1_slot26;
                for (var13 in var16)
                    case 963: {
                        case 972: var20 = var13;
                        var19 = _closure1_slot26;
                        var19 = var19[var20];
                        if (!(var19 < var18)) {
                            _fun67966_ip = 963;
                            continue _fun67966
                        }
                        case 987: var19 = _closure1_slot26;
                        var19 = delete var19[var20];
                        _fun67966_ip = 963;
                        continue _fun67966;
                    }
            case 997:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 22;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var16 = var13.Storage;
                var15 = var16.set;
                var14 = _closure1_slot28;
                var13 = _closure1_slot26;
                var13 = var15.bind(var16)(var14, var13);
                var11 = true;
            case 1044:
                if (var11) {
                    _fun67966_ip = 1381;
                    continue _fun67966
                }
            case 1050:
                if (!(var10 != var0)) {
                    _fun67966_ip = 1274;
                    continue _fun67966
                }
            case 1057:
                var10 = var0.isThread;
                var10 = var10.bind(var0)();
                if (!var10) {
                    _fun67966_ip = 1274;
                    continue _fun67966
                }
            case 1073:
                var12 = _closure1_slot13;
                var11 = var12.hasTrackedUnread;
                var10 = var0.id;
                var10 = var11.bind(var12)(var10);
                if (!var10) {
                    _fun67966_ip = 1274;
                    continue _fun67966
                }
            case 1099:
                var1 = var1.ready;
                if (var1) {
                    _fun67966_ip = 1274;
                    continue _fun67966
                }
            case 1111:
                var11 = _closure1_slot13;
                var10 = var11.getTrackedAckMessageId;
                var1 = var0.id;
                var13 = var10.bind(var11)(var1);
                var11 = _closure1_slot25;
                var10 = var11.log;
                var15 = var0.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var14 = var1.concat;
                var12 = 'Jumping to most recent message in thread ';
                var1 = ' - ';
                var1 = var14.bind(var12)(var15, var1, var13);
                var1 = var10.bind(var11)(var1);
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 21;
                var1 = var11[var1];
                var11 = var10.bind(var2)(var1);
                var10 = var11.fetchMessages;
                var1 = {};
                var1.channelId = var9;
                var12 = _closure1_slot16;
                var1.limit = var12;
                var12 = {
                    'messageId': null,
                    'flash': false,
                    'offset': 1
                };
                var12.messageId = var13;
                var1.jump = var12;
                var1.isPreload = var6;
                var1.skipLocalFetch = var5;
                var1.avoidInitialScroll = var4;
                var1.fetchKey = var3;
                var1 = var10.bind(var11)(var1);
                return var1;
            case 1274:
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 21;
                var1 = var15[var1];
                var11 = var10.bind(var2)(var1);
                var10 = var11.fetchMessages;
                var1 = {};
                var1.channelId = var9;
                var12 = _closure1_slot16;
                var1.limit = var12;
                var1.isPreload = var6;
                var1.skipLocalFetch = var5;
                var12 = {};
                var14 = _closure1_slot0;
                var13 = 19;
                var13 = var15[var13];
                var13 = var14.bind(var2)(var13);
                var13 = var13.JumpTypes;
                var13 = var13.ANIMATED;
                var12.jumpType = var13;
                var1.jump = var12;
                var1.avoidInitialScroll = var4;
                var1.fetchKey = var3;
                var1 = var10.bind(var11)(var1);
                return var1;
            case 1381:
                var10 = _closure1_slot25;
                var1 = var10.log;
                var12 = var0.id;
                var0 = global;
                var0 = var0.HermesInternal;
                var11 = var0.concat;
                var0 = 'Jumping to start of thread ';
                var0 = var11.bind(var0)(var12);
                var0 = var1.bind(var10)(var0);
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 21;
                var0 = var10[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.fetchMessages;
                var0 = {};
                var0.channelId = var9;
                var7 = _closure1_slot16;
                var0.limit = var7;
                var7 = {};
                var7.messageId = var9;
                var7.flash = var8;
                var0.jump = var7;
                var0.isPreload = var6;
                var0.skipLocalFetch = var5;
                var0.avoidInitialScroll = var4;
                var0.fetchKey = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 1507:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        _fun67967: for (var _fun67967_ip = 0;;) switch (_fun67967_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = var2.getChannelId;
                var3 = var0.bind(var2)();
                var6 = null;
                if (!(var6 != var3)) {
                    _fun67967_ip = 317;
                    continue _fun67967
                }
            case 26:
                var2 = _closure1_slot11;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                if (!(var6 != var0)) {
                    _fun67967_ip = 317;
                    continue _fun67967
                }
            case 47:
                var2 = var0.id;
                var3 = _closure1_slot23;
                if (!(var6 != var3)) {
                    _fun67967_ip = 76;
                    continue _fun67967
                }
            case 60:
                var3 = _closure1_slot23;
                var3 = var3.channelId;
                if (!(var3 !== var2)) {
                    _fun67967_ip = 214;
                    continue _fun67967
                }
            case 76:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 23;
                var3 = var5[var3];
                var7 = undefined;
                var8 = var4.bind(var7)(var3);
                var5 = var8.matchPath;
                var3 = global;
                var3 = var3.location;
                var4 = var3.pathname;
                var3 = {};
                var13 = _closure1_slot20;
                var12 = var13.CHANNEL;
                var11 = ':guild';
                var10 = ':channel';
                var9 = ':message';
                var9 = var12.bind(var13)(var11, var10, var9);
                var3.path = var9;
                var9 = true;
                var3.exact = var9;
                var3 = var5.bind(var8)(var4, var3);
                var5 = {};
                var5.channelId = var2;
                var4 = var6 == var3;
                var2 = undefined;
                if (var4) {
                    _fun67967_ip = 208;
                    continue _fun67967
                }
            case 188:
                var3 = var3.params;
                var4 = var6 == var3;
                var2 = undefined;
                if (var4) {
                    _fun67967_ip = 208;
                    continue _fun67967
                }
            case 203:
                var2 = var3.message;
            case 208:
                var5.messageId = var2;
                _fun67967_ip = 218;
                continue _fun67967;
            case 214:
                var5 = _closure1_slot23;
            case 218:
                var3 = undefined;
                var _closure1_slot23 = var3;
                var4 = _closure1_slot31;
                var2 = {};
                var7 = var0.getGuildId;
                var7 = var7.bind(var0)();
                var2.guildId = var7;
                var7 = var0.id;
                var2.channelId = var7;
                var7 = var5.messageId;
                var2.messageId = var7;
                var7 = var5.jumpType;
                var2.jumpType = var7;
                var5 = var5.messageId;
                var5 = var6 != var5;
                var2.avoidInitialScroll = var5;
                var2 = var4.bind(var3)(var2);
                var2 = _closure1_slot38;
                var1 = var0.getGuildId;
                var1 = var1.bind(var0)();
                var0 = var0.id;
                var0 = var2.bind(var3)(var1, var0);
            case 317:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        _fun67968: for (var _fun67968_ip = 0;;) switch (_fun67968_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 24;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun67968_ip = 110;
                    continue _fun67968
                }
            case 38:
                var3 = _closure1_slot14;
                var2 = var3.getChannelId;
                var5 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun67968_ip = 110;
                    continue _fun67968
                }
            case 58:
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var5);
                if (!(var2 != var3)) {
                    _fun67968_ip = 110;
                    continue _fun67968
                }
            case 76:
                var2 = _closure1_slot31;
                var1 = {};
                var4 = var3.getGuildId;
                var4 = var4.bind(var3)();
                var1.guildId = var4;
                var3 = var3.id;
                var1.channelId = var3;
                var1 = var2.bind(var0)(var1);
            case 110:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        _fun67969: for (var _fun67969_ip = 0;;) switch (_fun67969_ip) {
            case 0:
                var2 = _closure1_slot14;
                var0 = var2.getChannelId;
                var5 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun67969_ip = 201;
                    continue _fun67969
                }
            case 26:
                var3 = _closure1_slot11;
                var0 = var3.getChannel;
                var0 = var0.bind(var3)(var5);
                if (!(var2 != var0)) {
                    _fun67969_ip = 201;
                    continue _fun67969
                }
            case 47:
                var4 = _closure1_slot9;
                var2 = var0.type;
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                if (var2) {
                    _fun67969_ip = 93;
                    continue _fun67969
                }
            case 66:
                var6 = _closure1_slot38;
                var2 = var0.getGuildId;
                var4 = var2.bind(var0)();
                var2 = var0.id;
                var2 = var6.bind(var3)(var4, var2);
                _fun67969_ip = 201;
                continue _fun67969;
            case 93:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 17;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getOrCreate;
                var4 = var2.bind(var4)(var5);
                var2 = var4.ready;
                if (!var2) {
                    _fun67969_ip = 139;
                    continue _fun67969
                }
            case 133:
                var2 = var4.hasFetched;
            case 139:
                if (var2) {
                    _fun67969_ip = 176;
                    continue _fun67969
                }
            case 142:
                var4 = _closure1_slot31;
                var2 = {};
                var5 = var0.getGuildId;
                var5 = var5.bind(var0)();
                var2.guildId = var5;
                var5 = var0.id;
                var2.channelId = var5;
                var2 = var4.bind(var3)(var2);
            case 176:
                var2 = _closure1_slot38;
                var1 = var0.getGuildId;
                var1 = var1.bind(var0)();
                var0 = var0.id;
                var0 = var2.bind(var3)(var1, var0);
            case 201:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun67970: for (var _fun67970_ip = 0;;) switch (_fun67970_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.guildId;
                var4 = var1.channelId;
                var3 = var1.messageId;
                var0 = var1.jumpType;
                var1 = var1.isInitialSetup;
                if (var1) {
                    _fun67970_ip = 78;
                    continue _fun67970
                }
            case 33:
                var7 = _closure1_slot31;
                var6 = {};
                var6.guildId = var5;
                var6.channelId = var4;
                var6.messageId = var3;
                var6.jumpType = var0;
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var2 = _closure1_slot38;
                var2 = var2.bind(var1)(var5, var4);
                return var1;
            case 78:
                var2 = null;
                if (!(var2 != var4)) {
                    _fun67970_ip = 118;
                    continue _fun67970
                }
            case 84:
                var1 = {};
                var1.channelId = var4;
                var4 = var2 != var3;
                var2 = undefined;
                if (!var4) {
                    _fun67970_ip = 102;
                    continue _fun67970
                }
            case 99:
                var2 = var3;
            case 102:
                var1.messageId = var2;
                var1.jumpType = var0;
                _closure1_slot23 = var1;
            case 118:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.channelId;
        var2 = _closure1_slot31;
        var1 = {};
        var1.guildId = var3;
        var1.channelId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.guildId;
        var4 = var0.channelId;
        var3 = var0.messageId;
        var0 = var0.jumpType;
        var2 = _closure1_slot31;
        var1 = {};
        var1.guildId = var5;
        var1.channelId = var4;
        var1.messageId = var3;
        var1.jumpType = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function arg0, arg1() {
        _fun67973: for (var _fun67973_ip = 0;;) switch (_fun67973_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot10;
                var1 = var2.getCurrentSidebarChannelId;
                var3 = var1.bind(var2)(var4);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun67973_ip = 72;
                    continue _fun67973
                }
            case 27:
                var2 = _closure1_slot31;
                var1 = {};
                var5 = arg0;
                var1.guildId = var5;
                var1.channelId = var3;
                var3 = _closure1_slot10;
                var0 = var3.getCurrentSidebarMessageId;
                var0 = var0.bind(var3)(var4);
                var1.messageId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function() {
        _fun67974: for (var _fun67974_ip = 0;;) switch (_fun67974_ip) {
            case 0:
                var2 = _closure1_slot14;
                var1 = var2.getChannelId;
                var3 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.getGuildId;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun67974_ip = 120;
                    continue _fun67974
                }
            case 37:
                if (!(var1 != var3)) {
                    _fun67974_ip = 120;
                    continue _fun67974
                }
            case 41:
                var5 = _closure1_slot10;
                var4 = var5.getSidebarState;
                var4 = var4.bind(var5)(var3);
                var6 = var1 == var4;
                var1 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun67974_ip = 74;
                    continue _fun67974
                }
            case 69:
                var5 = var4.type;
            case 74:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 25;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.SidebarType;
                var4 = var4.VIEW_CHANNEL;
                if (!(var5 !== var4)) {
                    _fun67974_ip = 120;
                    continue _fun67974
                }
            case 110:
                var0 = _closure1_slot38;
                var0 = var0.bind(var1)(var2, var3);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun67975: for (var _fun67975_ip = 0;;) switch (_fun67975_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var2 = var0.channelId;
                var4 = var0.context;
                var1 = _closure1_slot17;
                if (!(var4 === var1)) {
                    _fun67975_ip = 60;
                    continue _fun67975
                }
            case 29:
                var5 = _closure1_slot31;
                var4 = {};
                var4.guildId = var3;
                var4.channelId = var2;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var0 = _closure1_slot38;
                var0 = var0.bind(var1)(var3, var2);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        _fun67976: for (var _fun67976_ip = 0;;) switch (_fun67976_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var0 = var0.messageId;
                var4 = var3.guild_id;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun67976_ip = 54;
                    continue _fun67976
                }
            case 27:
                var5 = _closure1_slot14;
                var2 = var5.getChannelId;
                var5 = var2.bind(var5)(var4);
                var2 = var3.id;
                var1 = var5 === var2;
            case 54:
                if (!var1) {
                    _fun67976_ip = 90;
                    continue _fun67976
                }
            case 57:
                var2 = _closure1_slot31;
                var1 = {};
                var1.guildId = var4;
                var3 = var3.id;
                var1.channelId = var3;
                var1.messageId = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 90:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        _fun67977: for (var _fun67977_ip = 0;;) switch (_fun67977_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.response;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun67977_ip = 258;
                    continue _fun67977
                }
            case 18:
                var2 = var1.body;
                if (!(var0 != var2)) {
                    _fun67977_ip = 258;
                    continue _fun67977
                }
            case 30:
                var2 = var1.body;
                var3 = var2.code;
                var2 = _closure1_slot19;
                var2 = var2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
                if (!(var3 === var2)) {
                    _fun67977_ip = 254;
                    continue _fun67977
                }
            case 60:
                var1 = var1.body;
                var11 = var1.retry_after;
                if (!(var0 != var11)) {
                    _fun67977_ip = 254;
                    continue _fun67977
                }
            case 78:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 26;
                var1 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var1);
                var2 = var3.show;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = 27;
                var6 = var9[var4];
                var6 = var5.bind(var8)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var4];
                var6 = var5.bind(var8)(var6);
                var6 = var6.t;
                var6 = var6.Whhv4w;
                var6 = var7.bind(var10)(var6);
                var1.title = var6;
                var6 = var9[var4];
                var6 = var5.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var9[var4];
                var4 = var5.bind(var8)(var4);
                var4 = var4.t;
                var5 = var4.qoxdQB;
                var4 = {};
                var8 = global;
                var10 = var8.Math;
                var9 = var10.ceil;
                var8 = 60;
                var8 = var11 / var8;
                var8 = var9.bind(var10)(var8);
                var4.retryAfterMinutes = var8;
                var4 = var6.bind(var7)(var5, var4);
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
            case 254:
                var1 = undefined;
                return var1;
            case 258:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function arg0() {
        _fun67978: for (var _fun67978_ip = 0;;) switch (_fun67978_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var4 = var0.jump;
                var1 = var0.isStale;
                var2 = var0.isPreview;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun67978_ip = 34;
                    continue _fun67978
                }
            case 32:
                var2 = false;
            case 34:
                if (var2) {
                    _fun67978_ip = 236;
                    continue _fun67978
                }
            case 40:
                var2 = _closure1_slot29;
                var2 = var2[var6];
                var3 = null;
                var3 = var3 != var2;
                var7 = 0;
                if (!var3) {
                    _fun67978_ip = 65;
                    continue _fun67978
                }
            case 62:
                var7 = var2;
            case 65:
                var2 = global;
                var8 = var2.Date;
                var3 = var8.now;
                var3 = var3.bind(var8)();
                var7 = var3 - var7;
                var3 = _closure1_slot24;
                if (!(!(var7 < var3))) {
                    _fun67978_ip = 236;
                    continue _fun67978
                }
            case 97:
                var3 = _closure1_slot29;
                var7 = var2.Date;
                var2 = var7.now;
                var2 = var2.bind(var7)();
                var3[var6] = var2;
                var3 = _closure1_slot14;
                var2 = var3.getChannelId;
                var2 = var2.bind(var3)();
                var7 = _closure1_slot10;
                var3 = var7.getCurrentSidebarChannelId;
                var3 = var3.bind(var7)(var2);
                if (!var1) {
                    _fun67978_ip = 166;
                    continue _fun67978
                }
            case 152:
                var8 = _closure1_slot8;
                var7 = var8.isConnected;
                var1 = var7.bind(var8)();
            case 166:
                if (!var1) {
                    _fun67978_ip = 183;
                    continue _fun67978
                }
            case 169:
                var2 = var6 === var2;
                if (var2) {
                    _fun67978_ip = 180;
                    continue _fun67978
                }
            case 176:
                var2 = var6 === var3;
            case 180:
                var1 = var2;
            case 183:
                if (!var1) {
                    _fun67978_ip = 236;
                    continue _fun67978
                }
            case 186:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var1.channelId = var6;
                var5 = _closure1_slot16;
                var1.limit = var5;
                var1.jump = var4;
                var1 = var2.bind(var3)(var1);
            case 236:
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        _fun67979: for (var _fun67979_ip = 0;;) switch (_fun67979_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var6 = var0.messageId;
                var5 = var0.reason;
                var2 = var0.noSendFailed;
                var4 = var0.shouldSendNotification;
                var3 = null;
                var0 = var3 != var6;
                if (!var0) {
                    _fun67979_ip = 46;
                    continue _fun67979
                }
            case 40:
                var1 = true;
                var0 = var1 !== var2;
            case 46:
                if (!var0) {
                    _fun67979_ip = 130;
                    continue _fun67979
                }
            case 49:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 28;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var8 = 'MESSAGE_SEND_FAILED';
                var0.type = var8;
                var0.channelId = var7;
                var0.messageId = var6;
                var6 = var3 != var5;
                var3 = null;
                if (!var6) {
                    _fun67979_ip = 109;
                    continue _fun67979
                }
            case 106:
                var3 = var5;
            case 109:
                var0.reason = var3;
                var3 = false;
                var3 = var3 !== var4;
                var0.shouldNotify = var3;
                var0 = var1.bind(var2)(var0);
            case 130:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        _fun67980: for (var _fun67980_ip = 0;;) switch (_fun67980_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var0 = 'active';
                if (!(var0 === var1)) {
                    _fun67980_ip = 83;
                    continue _fun67980
                }
            case 16:
                var2 = _closure1_slot14;
                var0 = var2.getChannelId;
                var4 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun67980_ip = 79;
                    continue _fun67980
                }
            case 39:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 21;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.fetchNewLocalMessages;
                var1 = _closure1_slot16;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            case 79:
                var0 = false;
                return var0;
            case 83:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.isTextChannel;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var8 = 10;
    var3 = var5[var8];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = var7;
    var7 = var3.CURRENT_APP_CONTEXT;
    var _closure1_slot17 = var7;
    var7 = var3.ChannelTypes;
    var _closure1_slot18 = var7;
    var7 = var3.AbortCodes;
    var _closure1_slot19 = var7;
    var7 = var3.Routes;
    var _closure1_slot20 = var7;
    var3 = var3.ChannelTypesSets;
    var _closure1_slot21 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isStaticChannelRoute;
    var _closure1_slot22 = var3;
    var3 = 15;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var7 = var8 * var7;
    var _closure1_slot24 = var7;
    var7 = 16;
    var7 = var5[var7];
    var9 = var6.bind(var0)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var12 = 'MessageManager';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot25 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.DAY;
    var3 = 90;
    var3 = var3 * var7;
    var _closure1_slot27 = var3;
    var3 = 'viewedThreadIds';
    var _closure1_slot28 = var3;
    var3 = {};
    var _closure1_slot29 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun67982: for (var _fun67982_ip = 0;;) switch (_fun67982_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var1);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot30;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun67982_ip = 86;
                        continue _fun67982
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun67982_ip = 120;
                    continue _fun67982;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var1.bind(var4)(var5, var0);
                    var1 = _closure1_slot31;
                    var0.fetchMessages = var1;
                    var1 = _closure1_slot34;
                    var0.loadSelectedChannelIfNecessary = var1;
                    var1 = global;
                    var1 = var1.Map;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var4;
                    var1 = new var14[var1](var13);
                    var6 = var1 instanceof Object ? var1 : var4;
                    var5 = var6.set;
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot39;
                    var1 = var5.bind(var6)(var4, var1);
                    var0.stores = var1;
                    var1 = {};
                    var4 = _closure1_slot45;
                    var1.APP_STATE_UPDATE = var4;
                    var4 = _closure1_slot32;
                    var1.OVERLAY_INITIALIZE = var4;
                    var4 = _closure1_slot33;
                    var1.CONNECTION_RESUMED = var4;
                    var4 = _closure1_slot35;
                    var1.CHANNEL_SELECT = var4;
                    var4 = _closure1_slot36;
                    var1.VOICE_CHANNEL_SELECT = var4;
                    var4 = _closure1_slot41;
                    var1.THREAD_CREATE = var4;
                    var5 = function() {
                        var1 = _closure1_slot34;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.THREAD_LIST_SYNC = var5;
                    var1.CHANNEL_CREATE = var4;
                    var4 = _closure1_slot40;
                    var1.CHANNEL_PRELOAD = var4;
                    var4 = function() {
                        var1 = _closure1_slot34;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.GUILD_CREATE = var4;
                    var4 = _closure1_slot42;
                    var1.MESSAGE_END_EDIT = var4;
                    var4 = _closure1_slot43;
                    var1.LOAD_MESSAGES_SUCCESS = var4;
                    var4 = _closure1_slot44;
                    var1.UPLOAD_FAIL = var4;
                    var4 = function() {
                        var1 = _closure1_slot34;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.CHANNEL_DELETE = var4;
                    var3 = function() {
                        var1 = _closure1_slot34;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.THREAD_DELETE = var3;
                    var2 = _closure1_slot37;
                    var1.CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 28;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = _closure1_slot32;
            var1 = 'CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 28;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = _closure1_slot32;
            var1 = 'CONNECTION_OPEN';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/MessageManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3474, 1376, 4225, 1372, 1410, 3947, 1670, 3213, 660, 1379, 667, 3, 4250, 8447, 4251, 5894, 6526, 587, 3218, 4253, 4227, 4003, 1234, 806, 4299, 2]);