// modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjectTypes;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot11 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot12 = var6;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OpenThreadAnalyticsLocations;
    var _closure1_slot14 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/hooks/useNativeForumPostHandlers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76764: for (var _fun76764_ip = 0;;) switch (_fun76764_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.threadId;
                var _closure2_slot0 = var12;
                var11 = var1.reactionType;
                var1 = undefined;
                if (!(var11 === var1)) {
                    _fun76764_ip = 62;
                    continue _fun76764
                }
            case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ReactionTypes;
                var11 = var2.NORMAL;
            case 62:
                var _closure2_slot1 = var11;
                var _closure2_slot2 = var1;
                var10 = _closure1_slot3;
                var3 = var10.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function(arg0) { // Environment: var0
                    _fun76765: for (var _fun76765_ip = 0;;) switch (_fun76765_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messageId;
                            var _closure3_slot0 = var2;
                            var10 = var0.mediaItems;
                            var4 = var0.containerRef;
                            var9 = var0.initialIndex;
                            var0 = undefined;
                            if (!(var9 === var0)) {
                                _fun76765_ip = 40;
                                continue _fun76765
                            }
                        case 38:
                            var9 = 0;
                        case 40:
                            var _closure3_slot1 = var0;
                            var6 = _closure1_slot5;
                            var3 = var6.getChannel;
                            var2 = _closure2_slot0;
                            var7 = var3.bind(var6)(var2);
                            _closure3_slot1 = var7;
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var2 = var3[var2];
                            var8 = var6.bind(var0)(var2);
                            var2 = null;
                            var6 = var2 != var7;
                            var2 = '[Forum Post Handlers] Thread cannot be null.';
                            var2 = var8.bind(var0)(var6, var2);
                            var2 = _closure1_slot0;
                            var6 = 11;
                            var6 = var3[var6];
                            var12 = var2.bind(var0)(var6);
                            var11 = var12.computeChannelName;
                            var15 = _closure1_slot7;
                            var14 = _closure1_slot6;
                            var13 = false;
                            var17 = var12;
                            var16 = var7;
                            var6 = var17[var11](var16, var15, var14, var13, var12);
                            var5 = 12;
                            var5 = var3[var5];
                            var8 = var2.bind(var0)(var5);
                            var5 = var8.getChannelIcon;
                            var5 = var5.bind(var8)(var7);
                            var8 = var10.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun76766: for (var _fun76766_ip = 0;;) switch (_fun76766_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var6 = var1.src;
                                        var2 = var1.srcIsAnimated;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var0 = 13;
                                        var0 = var5[var0];
                                        var11 = undefined;
                                        var4 = var4.bind(var11)(var0);
                                        var0 = var4.toURLSafe;
                                        var4 = var0.bind(var4)(var6);
                                        var5 = null;
                                        var0 = var5 != var4;
                                        if (var2) {
                                            _fun76766_ip = 149;
                                            continue _fun76766
                                        }
                                    case 60:
                                        var7 = var0;
                                        if (!var0) {
                                            _fun76766_ip = 99;
                                            continue _fun76766
                                        }
                                    case 66:
                                        var8 = var4.pathname;
                                        var2 = var8.toLowerCase;
                                        var9 = var2.bind(var8)();
                                        var8 = var9.endsWith;
                                        var2 = '.avif';
                                        var7 = var8.bind(var9)(var2);
                                    case 99:
                                        var2 = var6;
                                        if (!var7) {
                                            _fun76766_ip = 489;
                                            continue _fun76766
                                        }
                                    case 108:
                                        var10 = var4.searchParams;
                                        var9 = var10.set;
                                        var8 = 'format';
                                        var7 = 'webp';
                                        var7 = var9.bind(var10)(var8, var7);
                                        var7 = var4.toString;
                                        var2 = var7.bind(var4)();
                                        _fun76766_ip = 489;
                                        continue _fun76766;
                                    case 149:
                                        if (!var0) {
                                            _fun76766_ip = 224;
                                            continue _fun76766
                                        }
                                    case 152:
                                        var8 = var4.pathname;
                                        var7 = var8.toLowerCase;
                                        var9 = var7.bind(var8)();
                                        var8 = var9.endsWith;
                                        var7 = '.webp';
                                        var7 = var8.bind(var9)(var7);
                                        if (var7) {
                                            _fun76766_ip = 221;
                                            continue _fun76766
                                        }
                                    case 188:
                                        var9 = var4.pathname;
                                        var8 = var9.toLowerCase;
                                        var10 = var8.bind(var9)();
                                        var9 = var10.endsWith;
                                        var8 = '.avif';
                                        var7 = var9.bind(var10)(var8);
                                    case 221:
                                        var0 = var7;
                                    case 224:
                                        if (!var0) {
                                            _fun76766_ip = 386;
                                            continue _fun76766
                                        }
                                    case 230:
                                        var8 = var1.type;
                                        var9 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var12 = 14;
                                        var7 = var7[var12];
                                        var7 = var9.bind(var11)(var7);
                                        var7 = var7.ForumPostMediaTypes;
                                        var7 = var7.ATTACHMENT;
                                        var7 = var8 === var7;
                                        if (!var7) {
                                            _fun76766_ip = 305;
                                            continue _fun76766
                                        }
                                    case 274:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var8 = 15;
                                        var8 = var10[var8];
                                        var9 = var9.bind(var11)(var8);
                                        var8 = var9.isAttachmentUrl;
                                        var7 = var8.bind(var9)(var4);
                                    case 305:
                                        if (var7) {
                                            _fun76766_ip = 383;
                                            continue _fun76766
                                        }
                                    case 308:
                                        var9 = var1.type;
                                        var10 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var12];
                                        var8 = var10.bind(var11)(var8);
                                        var8 = var8.ForumPostMediaTypes;
                                        var8 = var8.EMBED;
                                        var8 = var9 === var8;
                                        if (!var8) {
                                            _fun76766_ip = 380;
                                            continue _fun76766
                                        }
                                    case 349:
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var9 = 15;
                                        var9 = var12[var9];
                                        var10 = var10.bind(var11)(var9);
                                        var9 = var10.isExternalProxiedAttachmentUrl;
                                        var8 = var9.bind(var10)(var4);
                                    case 380:
                                        var7 = var8;
                                    case 383:
                                        var0 = var7;
                                    case 386:
                                        var2 = var6;
                                        if (!var0) {
                                            _fun76766_ip = 489;
                                            continue _fun76766
                                        }
                                    case 392:
                                        var8 = var4.searchParams;
                                        var7 = var8.set;
                                        var6 = 'animated';
                                        var0 = 'true';
                                        var0 = var7.bind(var8)(var6, var0);
                                        var6 = var4.pathname;
                                        var0 = var6.toLowerCase;
                                        var7 = var0.bind(var6)();
                                        var6 = var7.endsWith;
                                        var0 = '.avif';
                                        var0 = var6.bind(var7)(var0);
                                        if (!var0) {
                                            _fun76766_ip = 480;
                                            continue _fun76766
                                        }
                                    case 453:
                                        var8 = var4.searchParams;
                                        var7 = var8.set;
                                        var6 = 'format';
                                        var0 = 'webp';
                                        var0 = var7.bind(var8)(var6, var0);
                                    case 480:
                                        var0 = var4.toString;
                                        var2 = var0.bind(var4)();
                                    case 489:
                                        var0 = {};
                                        var0.uri = var2;
                                        var4 = _closure3_slot1;
                                        var4 = var4.guild_id;
                                        var0.guildId = var4;
                                        var4 = _closure3_slot0;
                                        if (!(var5 == var4)) {
                                            _fun76766_ip = 525;
                                            continue _fun76766
                                        }
                                    case 519:
                                        var3 = _closure1_slot13;
                                        _fun76766_ip = 529;
                                        continue _fun76766;
                                    case 525:
                                        var3 = _closure3_slot0;
                                    case 529:
                                        var0.messageId = var3;
                                        var2 = _closure3_slot1;
                                        var2 = var2.id;
                                        var0.channelId = var2;
                                        var2 = var1.mediaIndex;
                                        var0.mediaIndex = var2;
                                        var2 = var1.width;
                                        var0.width = var2;
                                        var2 = var1.height;
                                        var0.height = var2;
                                        var2 = var1.type;
                                        var0.accessoryType = var2;
                                        var1 = var1.attachmentId;
                                        var0.attachmentId = var1;
                                        return var0;
                                }
                            };
                            var8 = var8.bind(var10)(var1);
                            var1 = 16;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openMediaModal;
                            var1 = {};
                            var1.initialIndex = var9;
                            var1.initialSources = var8;
                            var7 = var7.id;
                            var1.channelId = var7;
                            var1.contextName = var6;
                            var1.contextIcon = var5;
                            var4 = var4.current;
                            var1.originViewOrOriginLayout = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var8 = var3.bind(var10)(var1, var2);
                var3 = var10.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var0
                    _fun76767: for (var _fun76767_ip = 0;;) switch (_fun76767_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isAndroid;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun76767_ip = 91;
                                continue _fun76767
                            }
                        case 38:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 18;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.triggerHapticFeedback;
                            var4 = _closure1_slot1;
                            var1 = 19;
                            var1 = var6[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var2.bind(var3)(var1);
                        case 91:
                            var10 = _closure1_slot5;
                            var1 = var10.getChannel;
                            var8 = _closure2_slot0;
                            var4 = var1.bind(var10)(var8);
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 10;
                            var1 = var3[var2];
                            var11 = var6.bind(var0)(var1);
                            var1 = null;
                            var9 = var1 != var4;
                            var7 = '[Forum Post Handlers] Thread cannot be null.';
                            var7 = var11.bind(var0)(var9, var7);
                            var9 = var10.getChannel;
                            var7 = var4.parent_id;
                            var9 = var9.bind(var10)(var7);
                            var2 = var3[var2];
                            var6 = var6.bind(var0)(var2);
                            var2 = var1 != var9;
                            var1 = '[Forum Post Handlers] Parent channel cannot be null.';
                            var1 = var6.bind(var0)(var2, var1);
                            var2 = _closure1_slot0;
                            var1 = 20;
                            var1 = var3[var1];
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.trackForumPostClicked;
                            var1 = {};
                            var10 = var9.guild_id;
                            var1.guildId = var10;
                            var9 = var9.id;
                            var1.channelId = var9;
                            var1.postId = var8;
                            var8 = {};
                            var9 = _closure1_slot11;
                            var9 = var9.GUILD_CHANNEL;
                            var8.page = var9;
                            var9 = _closure1_slot12;
                            var9 = var9.FORUM_CHANNEL_POST;
                            var8.section = var9;
                            var1.location = var8;
                            var1 = var6.bind(var7)(var1);
                            var1 = 21;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.transitionToThread;
                            var1 = {};
                            var5 = _closure1_slot14;
                            var5 = var5.FORUM;
                            var1.source = var5;
                            var5 = false;
                            var1.navigationReplace = var5;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var7 = var3.bind(var10)(var1, var2);
                _closure2_slot2 = var7;
                var3 = var10.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var12;
                var1 = function() { // Environment: var0
                    _fun76768: for (var _fun76768_ip = 0;;) switch (_fun76768_ip) {
                        case 0:
                            var11 = _closure1_slot5;
                            var0 = var11.getChannel;
                            var4 = _closure2_slot0;
                            var5 = var0.bind(var11)(var4);
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var2 = var7[var1];
                            var0 = undefined;
                            var12 = var3.bind(var0)(var2);
                            var2 = null;
                            var10 = var2 != var5;
                            var8 = '[Forum Post Handlers] Thread cannot be null.';
                            var8 = var12.bind(var0)(var10, var8);
                            var10 = var11.getChannel;
                            var8 = var5.parent_id;
                            var10 = var10.bind(var11)(var8);
                            var1 = var7[var1];
                            var7 = var3.bind(var0)(var1);
                            var3 = var2 != var10;
                            var1 = '[Forum Post Handlers] Parent channel cannot be null.';
                            var1 = var7.bind(var0)(var3, var1);
                            var3 = _closure1_slot9;
                            var1 = var3.getMessageState;
                            var3 = var1.bind(var3)(var4);
                            var1 = var3.message;
                            var3 = var3.loaded;
                            if (!var3) {
                                _fun76768_ip = 138;
                                continue _fun76768
                            }
                        case 134:
                            if (!(var2 == var1)) {
                                _fun76768_ip = 151;
                                continue _fun76768
                            }
                        case 138:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var0)();
                            _fun76768_ip = 299;
                            continue _fun76768;
                        case 151:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 20;
                            var2 = var4[var2];
                            var8 = var3.bind(var0)(var2);
                            var7 = var8.trackForumPostClicked;
                            var2 = {};
                            var11 = var10.guild_id;
                            var2.guildId = var11;
                            var10 = var10.id;
                            var2.channelId = var10;
                            var9 = _closure2_slot0;
                            var2.postId = var9;
                            var9 = {};
                            var10 = _closure1_slot11;
                            var10 = var10.GUILD_CHANNEL;
                            var9.page = var10;
                            var10 = _closure1_slot12;
                            var10 = var10.FORUM_CHANNEL_POST;
                            var9.section = var10;
                            var2.location = var9;
                            var2 = var7.bind(var8)(var2);
                            var2 = 21;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.transitionToThreadMessage;
                            var2 = var1.id;
                            var1 = {};
                            var6 = _closure1_slot14;
                            var6 = var6.FORUM;
                            var1.source = var6;
                            var6 = false;
                            var1.navigationReplace = var6;
                            var1 = var3.bind(var4)(var5, var2, var1);
                        case 299:
                            return var0;
                    }
                };
                var1 = var3.bind(var10)(var1, var2);
                var4 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function() { // Environment: var0
                    _fun76769: for (var _fun76769_ip = 0;;) switch (_fun76769_ip) {
                        case 0:
                            var9 = _closure1_slot5;
                            var2 = var9.getChannel;
                            var0 = _closure2_slot0;
                            var3 = var2.bind(var9)(var0);
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 10;
                            var2 = var7[var4];
                            var0 = undefined;
                            var10 = var5.bind(var0)(var2);
                            var6 = null;
                            var8 = var6 != var3;
                            var2 = '[Forum Post Handlers] Thread cannot be null.';
                            var2 = var10.bind(var0)(var8, var2);
                            var8 = var9.getChannel;
                            var2 = var3.parent_id;
                            var2 = var8.bind(var9)(var2);
                            var8 = var7[var4];
                            var10 = var5.bind(var0)(var8);
                            var9 = var6 != var2;
                            var8 = '[Forum Post Handlers] Parent channel cannot be null.';
                            var8 = var10.bind(var0)(var9, var8);
                            var4 = var7[var4];
                            var7 = var5.bind(var0)(var4);
                            var4 = var2.isForumLikeChannel;
                            var5 = var4.bind(var2)();
                            var4 = 'Forum parents must be forum channels';
                            var4 = var7.bind(var0)(var5, var4);
                            var5 = _closure1_slot4;
                            var4 = var5.getContent;
                            var4 = var4.bind(var5)();
                            var4 = var6 != var4;
                            var8 = _closure1_slot7;
                            var7 = var8.getUser;
                            var5 = var3.ownerId;
                            var5 = var7.bind(var8)(var5);
                            if (var4) {
                                _fun76769_ip = 182;
                                continue _fun76769
                            }
                        case 178:
                            var4 = var6 == var5;
                        case 182:
                            if (var4) {
                                _fun76769_ip = 237;
                                continue _fun76769
                            }
                        case 185:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 22;
                            var4 = var5[var4];
                            var6 = var6.bind(var0)(var4);
                            var4 = var6.dismissKeyboard;
                            var4 = var4.bind(var6)();
                            var4 = _closure1_slot1;
                            var1 = 23;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.bind(var0)(var3, var2);
                        case 237:
                            return var0;
                    }
                };
                var6 = var4.bind(var10)(var2, var3);
                var4 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function(arg0) { // Environment: var0
                    _fun76770: for (var _fun76770_ip = 0;;) switch (_fun76770_ip) {
                        case 0:
                            var0 = arg0;
                            var11 = var0.reaction;
                            var3 = var0.disableReactionCreates;
                            var2 = var0.disableReactionUpdates;
                            var6 = var0.locationAnalyticsObject;
                            var10 = var0.reactionLocation;
                            var1 = _closure1_slot5;
                            var0 = var1.getChannel;
                            var15 = _closure2_slot0;
                            var9 = var0.bind(var1)(var15);
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var8 = 10;
                            var1 = var13[var8];
                            var0 = undefined;
                            var16 = var12.bind(var0)(var1);
                            var1 = null;
                            var14 = var1 != var9;
                            var4 = '[Forum Post Handlers] Thread cannot be null.';
                            var4 = var16.bind(var0)(var14, var4);
                            var14 = _closure1_slot8;
                            var4 = var14.getMessage;
                            var4 = var4.bind(var14)(var15);
                            var4 = var4.firstMessage;
                            var8 = var13[var8];
                            var13 = var12.bind(var0)(var8);
                            var12 = var1 != var4;
                            var8 = '[Forum Post Handlers] Message cannot be null.';
                            var8 = var13.bind(var0)(var12, var8);
                            if (!var3) {
                                _fun76770_ip = 151;
                                continue _fun76770
                            }
                        case 148:
                            if (var2) {
                                _fun76770_ip = 222;
                                continue _fun76770
                            }
                        case 151:
                            var8 = var1 != var11;
                            if (!var8) {
                                _fun76770_ip = 170;
                                continue _fun76770
                            }
                        case 158:
                            var2 = var11.burst_count;
                            var1 = 0;
                            var8 = var2 > var1;
                        case 170:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleAddOrRemoveReaction;
                            var21 = var4.id;
                            var22 = var3;
                            var20 = var9;
                            var19 = var11;
                            var18 = var8;
                            var17 = var10;
                            var1 = var22[var2](var21, var20, var19, var18, var17, var16);
                            _fun76770_ip = 309;
                            continue _fun76770;
                        case 222:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleViewReactions;
                            var1 = {};
                            var8 = var4.id;
                            var1.messageId = var8;
                            var7 = _closure2_slot0;
                            var1.channelId = var7;
                            var4 = var4.reactions;
                            var1.reactions = var4;
                            var4 = {};
                            var4.object = var6;
                            var5 = _closure1_slot10;
                            var5 = var5.CANT_ADD_OR_REMOVE;
                            var4.objectType = var5;
                            var1.location = var4;
                            var1 = var2.bind(var3)(var1);
                        case 309:
                            return var0;
                    }
                };
                var5 = var4.bind(var10)(var2, var3);
                var4 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot8;
                    var0 = var2.getMessage;
                    var5 = _closure2_slot0;
                    var0 = var0.bind(var2)(var5);
                    var4 = var0.firstMessage;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var2 = var3[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var2);
                    var2 = null;
                    var6 = var2 != var4;
                    var2 = '[Forum Post Handlers] Message cannot be null.';
                    var2 = var7.bind(var0)(var6, var2);
                    var2 = _closure1_slot0;
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleViewReactions;
                    var1 = {};
                    var6 = var4.id;
                    var1.messageId = var6;
                    var1.channelId = var5;
                    var5 = arg0;
                    var5 = var5.emoji;
                    var1.emoji = var5;
                    var4 = var4.reactions;
                    var1.reactions = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var4.bind(var10)(var2, var3);
                var9 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var12;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var0 = var2.getMessage;
                    var5 = _closure2_slot0;
                    var0 = var0.bind(var2)(var5);
                    var4 = var0.firstMessage;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var2 = var3[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var2);
                    var2 = null;
                    var6 = var2 != var4;
                    var2 = '[Forum Post Handlers] Message cannot be null.';
                    var2 = var7.bind(var0)(var6, var2);
                    var2 = _closure1_slot0;
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleViewReactions;
                    var1 = {};
                    var6 = var4.id;
                    var1.messageId = var6;
                    var1.channelId = var5;
                    var4 = var4.reactions;
                    var1.reactions = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var9.bind(var10)(var2, var3);
                var9 = var10.useCallback;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var0 = var2.getChannel;
                    var10 = _closure2_slot0;
                    var6 = var0.bind(var2)(var10);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 10;
                    var2 = var9[var4];
                    var0 = undefined;
                    var11 = var7.bind(var0)(var2);
                    var5 = null;
                    var8 = var5 != var6;
                    var2 = '[Forum Post Handlers] Thread cannot be null.';
                    var2 = var11.bind(var0)(var8, var2);
                    var8 = _closure1_slot8;
                    var2 = var8.getMessage;
                    var2 = var2.bind(var8)(var10);
                    var2 = var2.firstMessage;
                    var4 = var9[var4];
                    var8 = var7.bind(var0)(var4);
                    var7 = var5 != var2;
                    var4 = '[Forum Post Handlers] Message cannot be null.';
                    var4 = var8.bind(var0)(var7, var4);
                    var8 = _closure1_slot0;
                    var3 = 25;
                    var3 = var9[var3];
                    var4 = var8.bind(var0)(var3);
                    var3 = var4.handleAddOrRemoveReaction;
                    var2 = var2.id;
                    var7 = _closure2_slot1;
                    var1 = 9;
                    var1 = var9[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.ReactionTypes;
                    var1 = var1.BURST;
                    var12 = var7 === var1;
                    var16 = var4;
                    var15 = var2;
                    var14 = var6;
                    var13 = null;
                    var1 = var16[var3](var15, var14, var13, var12, var11);
                    return var0;
                };
                var2 = var9.bind(var10)(var0, var2);
                var0 = {};
                var0.onTapMedia = var8;
                var0.onTapPost = var7;
                var0.onLongTapPost = var6;
                var0.onTapReaction = var5;
                var0.onLongTapReaction = var4;
                var0.onTapReactionCount = var3;
                var0.onTapAddReaction = var2;
                var0.onTapMostRecentMessage = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3142, 1372, 3102, 1621, 5650, 9796, 660, 1233, 6578, 44, 4795, 4810, 1457, 8914, 8475, 8881, 478, 3281, 3282, 6493, 3945, 3720, 9797, 9259, 9257, 2]);