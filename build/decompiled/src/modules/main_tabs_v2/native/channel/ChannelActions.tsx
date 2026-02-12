// modules/main_tabs_v2/native/channel/ChannelActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 12;
        var0 = var6[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PhoneCallIcon;
        var0 = {};
        var5 = 'sm';
        var0.size = var5;
        var5 = _closure1_slot1;
        var4 = 13;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.unsafe_rawColors;
        var4 = var4.GREEN_360;
        var0.color = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 14;
        var0 = var6[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PhoneHangUpIcon;
        var0 = {};
        var5 = 'sm';
        var0.size = var5;
        var5 = _closure1_slot1;
        var4 = 13;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.unsafe_rawColors;
        var4 = var4.RED_400;
        var0.color = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun62458: for (var _fun62458_ip = 0;;) switch (_fun62458_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var _closure2_slot0 = var9;
                var0 = var0.screenIndex;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot16;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 15;
                var1 = var17[var1];
                var1 = var15.bind(var3)(var1);
                var8 = var1.bind(var3)(var9);
                var13 = _closure1_slot0;
                var1 = 16;
                var1 = var17[var1];
                var2 = var13.bind(var3)(var1);
                var1 = var2.useCanSearchForumPosts;
                var2 = var1.bind(var2)(var9);
                var1 = 17;
                var1 = var17[var1];
                var6 = var13.bind(var3)(var1);
                var1 = var6.useThreadNotificationSetting;
                var12 = var1.bind(var6)(var9);
                var1 = _closure1_slot13;
                var10 = var1.NO_MESSAGES;
                var1 = 18;
                var1 = var17[var1];
                var1 = var15.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var11 = 19;
                var6 = var17[var11];
                var16 = var13.bind(var3)(var6);
                var14 = var16.useStateFromStores;
                var6 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var4
                    var3 = _closure1_slot4;
                    var2 = var3.hasThreadsForChannel;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = var14.bind(var16)(var7, var6);
                var6 = new Array(0);
                var _closure2_slot2 = var6;
                var14 = 20;
                var14 = var17[var14];
                var16 = var13.bind(var3)(var14);
                var14 = var16.useCanJoinThreadVoice;
                var16 = var14.bind(var16)(var9);
                var14 = var17[var11];
                var20 = var13.bind(var3)(var14);
                var19 = var20.useStateFromStores;
                var14 = _closure1_slot7;
                var18 = new Array(1);
                var18[0] = var14;
                var14 = function() { // Environment: var4
                    var2 = _closure1_slot7;
                    var1 = var2.isInChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var19.bind(var20)(var18, var14);
                var11 = var17[var11];
                var19 = var13.bind(var3)(var11);
                var18 = var19.useStateFromStores;
                var11 = _closure1_slot7;
                var13 = new Array(1);
                var13[0] = var11;
                var11 = function() { // Environment: var4
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isEmpty;
                    var4 = _closure1_slot7;
                    var3 = var4.getVoiceStatesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var13 = var18.bind(var19)(var13, var11);
                var11 = 22;
                var11 = var17[var11];
                var11 = var15.bind(var3)(var11);
                var15 = var11.bind(var3)(var9);
                var11 = var9.isVocalThread;
                var11 = var11.bind(var9)();
                if (!var11) {
                    _fun62458_ip = 316;
                    continue _fun62458
                }
            case 313:
                var11 = var16;
            case 316:
                if (!var11) {
                    _fun62458_ip = 322;
                    continue _fun62458
                }
            case 319:
                var11 = var13;
            case 322:
                if (!var11) {
                    _fun62458_ip = 450;
                    continue _fun62458
                }
            case 328:
                var13 = var6.push;
                var11 = {};
                var16 = null;
                var11.source = var16;
                if (var14) {
                    _fun62458_ip = 350;
                    continue _fun62458
                }
            case 344:
                var16 = _closure1_slot17;
                _fun62458_ip = 354;
                continue _fun62458;
            case 350:
                var16 = _closure1_slot18;
            case 354:
                var11.IconComponent = var16;
                if (var14) {
                    _fun62458_ip = 366;
                    continue _fun62458
                }
            case 361:
                var15 = function() { // Environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openChannelCallModal;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 366:
                var11.onPress = var15;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 24;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                if (var14) {
                    _fun62458_ip = 430;
                    continue _fun62458
                }
            case 417:
                var14 = var15.My50nf;
                var14 = var16.bind(var17)(var14);
                _fun62458_ip = 441;
                continue _fun62458;
            case 430:
                var15 = var15["4ry6yi"];
                var14 = var16.bind(var17)(var15);
            case 441:
                var11.accessibilityLabel = var14;
                var11 = var13.bind(var6)(var11);
            case 450:
                var13 = var9.type;
                var11 = _closure1_slot9;
                var11 = var11.GUILD_DIRECTORY;
                if (!(var11 !== var13)) {
                    _fun62458_ip = 1026;
                    continue _fun62458
                }
            case 472:
                var11 = _closure1_slot9;
                var11 = var11.GUILD_FORUM;
                if (!(var11 !== var13)) {
                    _fun62458_ip = 896;
                    continue _fun62458
                }
            case 489:
                var11 = _closure1_slot9;
                var11 = var11.GUILD_MEDIA;
                if (!(var11 !== var13)) {
                    _fun62458_ip = 896;
                    continue _fun62458
                }
            case 506:
                var11 = _closure1_slot9;
                var11 = var11.PUBLIC_THREAD;
                if (!(var11 !== var13)) {
                    _fun62458_ip = 551;
                    continue _fun62458
                }
            case 520:
                var11 = _closure1_slot9;
                var11 = var11.PRIVATE_THREAD;
                if (!(var11 !== var13)) {
                    _fun62458_ip = 551;
                    continue _fun62458
                }
            case 534:
                var11 = _closure1_slot9;
                var11 = var11.ANNOUNCEMENT_THREAD;
                if (!(var11 === var13)) {
                    _fun62458_ip = 769;
                    continue _fun62458
                }
            case 551:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 29;
                var11 = var14[var11];
                var14 = var13.bind(var3)(var11);
                var13 = var14.getCurrentConfig;
                var11 = {};
                var15 = 'ChannelActionButtons';
                var11.location = var15;
                var11 = var13.bind(var14)(var11);
                var11 = var11.enabled;
                if (var11) {
                    _fun62458_ip = 769;
                    continue _fun62458
                }
            case 605:
                var11 = var9.isForumPost;
                var11 = var11.bind(var9)();
                if (var11) {
                    _fun62458_ip = 1148;
                    continue _fun62458
                }
            case 621:
                var11 = _closure1_slot1;
                if (!(var12 !== var10)) {
                    _fun62458_ip = 642;
                    continue _fun62458
                }
            case 629:
                var12 = _closure1_slot2;
                var10 = 31;
                var10 = var12[var10];
                _fun62458_ip = 653;
                continue _fun62458;
            case 642:
                var13 = _closure1_slot2;
                var12 = 30;
                var10 = var13[var12];
            case 653:
                var12 = var11.bind(var3)(var10);
                var11 = var6.push;
                var10 = {};
                var10.source = var12;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 32;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.BellIcon;
                var10.IconComponent = var12;
                var12 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 33;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showThreadNotificationsBottomSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10.onPress = var12;
                var12 = 24;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.HcoRu0;
                var12 = var13.bind(var14)(var12);
                var10.accessibilityLabel = var12;
                var10 = var11.bind(var6)(var10);
                _fun62458_ip = 1148;
                continue _fun62458;
            case 769:
                var11 = var6.push;
                var10 = {};
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 25;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var10.source = var12;
                var15 = _closure1_slot0;
                var12 = 26;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.MagnifyingGlassIcon;
                var10.IconComponent = var12;
                var12 = function() {
                    _fun62466: for (var _fun62466_ip = 0;;) switch (_fun62466_ip) {
                        case 0:
                            var6 = _closure1_slot8;
                            var0 = _closure2_slot0;
                            var4 = var0.id;
                            var0 = undefined;
                            var3 = true;
                            var2 = 'initial';
                            var2 = var6.bind(var0)(var4, var3, var2);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 34;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isIOS;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun62466_ip = 128;
                                continue _fun62466
                            }
                        case 67:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 35;
                            var2 = var4[var2];
                            var6 = var3.bind(var0)(var2);
                            var4 = var6.getChatInputRef;
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var2 = _closure2_slot1;
                            var3 = var4.bind(var6)(var3, var2);
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun62466_ip = 128;
                                continue _fun62466
                            }
                        case 118:
                            var2 = var3.blur;
                            var2 = var2.bind(var3)();
                        case 128:
                            var2 = _closure2_slot0;
                            var3 = var2.isThread;
                            var9 = var3.bind(var2)();
                            var3 = var2.getGuildId;
                            var8 = var3.bind(var2)();
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var6 = 36;
                            var6 = var4[var6];
                            var7 = var3.bind(var0)(var6);
                            var6 = var7.getChannelDetailsSearchContext;
                            var2 = var2.id;
                            var8 = var6.bind(var7)(var2, var8, var9);
                            var6 = _closure1_slot1;
                            var2 = 37;
                            var2 = var4[var2];
                            var7 = var6.bind(var0)(var2);
                            var6 = var7.trackSearchOpened;
                            var2 = {};
                            var2.searchContext = var8;
                            var8 = _closure1_slot12;
                            var8 = var8.CHANNEL_HEADER;
                            var2.searchLocation = var8;
                            var2 = var6.bind(var7)(var2);
                            var2 = 38;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isSwipeToMemberListEnabled;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            if (var2) {
                                _fun62466_ip = 364;
                                continue _fun62466
                            }
                        case 272:
                            var2 = 40;
                            var2 = var4[var2];
                            var6 = var3.bind(var0)(var2);
                            var2 = var6.getRootNavigationRef;
                            var8 = var2.bind(var6)();
                            var2 = null;
                            if (!(var2 != var8)) {
                                _fun62466_ip = 362;
                                continue _fun62466
                            }
                        case 300:
                            var2 = var8.isReady;
                            var2 = var2.bind(var8)();
                            if (!var2) {
                                _fun62466_ip = 362;
                                continue _fun62466
                            }
                        case 313:
                            var7 = var8.navigate;
                            var6 = {
                                'channelId': null,
                                'search': true,
                                'source': 'channel-header-search'
                            };
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var6.channelId = var2;
                            var2 = 'sidebar';
                            var2 = var7.bind(var8)(var2, var6);
                            _fun62466_ip = 437;
                            continue _fun62466;
                        case 362:
                            return var0;
                        case 364:
                            var2 = 39;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var4 = var2.ComponentDispatch;
                            var3 = var4.dispatch;
                            var1 = _closure1_slot11;
                            var2 = var1.SHOW_CHANNEL_DETAILS;
                            var1 = {};
                            var6 = 'channel-header-search';
                            var1.source = var6;
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var1.channelId = var6;
                            var5 = _closure2_slot1;
                            var1.screenIndex = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 437:
                            return var0;
                    }
                };
                var10.onPress = var12;
                var12 = 24;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["5h0QOP"];
                var12 = var13.bind(var14)(var12);
                var10.accessibilityLabel = var12;
                var10 = var11.bind(var6)(var10);
                _fun62458_ip = 1148;
                continue _fun62458;
            case 896:
                if (!var2) {
                    _fun62458_ip = 1148;
                    continue _fun62458
                }
            case 902:
                var10 = var6.push;
                var2 = {};
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 25;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var2.source = var11;
                var14 = _closure1_slot0;
                var11 = 26;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.MagnifyingGlassIcon;
                var2.IconComponent = var11;
                var11 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateForumSearchQuery;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = '';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2.onPress = var11;
                var11 = 24;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["5h0QOP"];
                var11 = var12.bind(var13)(var11);
                var2.accessibilityLabel = var11;
                var2 = var10.bind(var6)(var2);
                _fun62458_ip = 1148;
                continue _fun62458;
            case 1026:
                var10 = var6.push;
                var2 = {};
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 25;
                var11 = var15[var11];
                var11 = var12.bind(var3)(var11);
                var2.source = var11;
                var14 = _closure1_slot0;
                var11 = 26;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.MagnifyingGlassIcon;
                var2.IconComponent = var11;
                var11 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2.onPress = var11;
                var11 = 24;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["5h0QOP"];
                var11 = var12.bind(var13)(var11);
                var2.accessibilityLabel = var11;
                var2 = var10.bind(var6)(var2);
            case 1148:
                if (!var1) {
                    _fun62458_ip = 1162;
                    continue _fun62458
                }
            case 1151:
                var10 = var6.length;
                var2 = 0;
                var1 = var2 !== var10;
            case 1162:
                if (var1) {
                    _fun62458_ip = 1291;
                    continue _fun62458
                }
            case 1168:
                var2 = {};
                var2.channel = var9;
                var2.isChannelNSFWGated = var8;
                var2.channelHasThreads = var7;
                var9 = var2.channel;
                var8 = var2.isChannelNSFWGated;
                var10 = var2.channelHasThreads;
                var11 = _closure1_slot5;
                var7 = var11.has;
                var2 = var9.type;
                var2 = var7.bind(var11)(var2);
                var7 = !var2;
                if (!var7) {
                    _fun62458_ip = 1229;
                    continue _fun62458
                }
            case 1226:
                var7 = var10;
            case 1229:
                if (!var7) {
                    _fun62458_ip = 1260;
                    continue _fun62458
                }
            case 1232:
                var10 = _closure1_slot10;
                var12 = var10.GUILD_THREADS_ONLY;
                var11 = var12.has;
                var10 = var9.type;
                var10 = var11.bind(var12)(var10);
                var7 = !var10;
            case 1260:
                if (!var2) {
                    _fun62458_ip = 1266;
                    continue _fun62458
                }
            case 1263:
                var2 = !var8;
            case 1266:
                if (!var2) {
                    _fun62458_ip = 1282;
                    continue _fun62458
                }
            case 1269:
                var8 = var9.isForumLikeChannel;
                var8 = var8.bind(var9)();
                var2 = !var8;
            case 1282:
                if (!var2) {
                    _fun62458_ip = 1288;
                    continue _fun62458
                }
            case 1285:
                var2 = var7;
            case 1288:
                var1 = !var2;
            case 1291:
                if (var1) {
                    _fun62458_ip = 1420;
                    continue _fun62458
                }
            case 1297:
                var2 = var6.unshift;
                var1 = {};
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 41;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var1.source = var7;
                var10 = _closure1_slot0;
                var7 = 42;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.ThreadIcon;
                var1.IconComponent = var7;
                var7 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 43;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPress = var7;
                var7 = 24;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.B2panI;
                var7 = var8.bind(var9)(var7);
                var1.accessibilityLabel = var7;
                var1 = var2.bind(var6)(var1);
            case 1420:
                var2 = _closure1_slot14;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.actionWrapper;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = arg0;
                    var0 = _closure2_slot2;
                    var1 = var0.length;
                    var0 = 1;
                    var6 = var1 - var0;
                    var3 = _closure1_slot15;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 44;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg1;
                    var5 = var5 === var6;
                    var0.noMargin = var5;
                    var8 = var0;
                    var7 = var4;
                    var5 = copyDataProperties(var8, var7);
                    var5 = var4.accessibilityLabel;
                    var4 = 'key';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun62469: for (var _fun62469_ip = 0;;) switch (_fun62469_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var5 = var1.screenIndex;
                var2 = var1.showCreateThread;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 19;
                var6 = var7[var4];
                var4 = undefined;
                var9 = var3.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var6, var0);
                var0 = 45;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useIsChannelContentGated;
                var7 = var0.bind(var3)(var6);
                var3 = null;
                var8 = var3 == var6;
                var0 = null;
                if (var8) {
                    _fun62469_ip = 148;
                    continue _fun62469
                }
            case 113:
                var0 = null;
                if (var7) {
                    _fun62469_ip = 148;
                    continue _fun62469
                }
            case 118:
                var0 = null;
                if (var2) {
                    _fun62469_ip = 148;
                    continue _fun62469
                }
            case 123:
                var3 = _closure1_slot14;
                var2 = _closure1_slot19;
                var1 = {};
                var1.channel = var6;
                var1.screenIndex = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 148:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var8 = var5[var3];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var8);
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.ChannelTypes;
    var _closure1_slot9 = var7;
    var7 = var6.ChannelTypesSets;
    var _closure1_slot10 = var7;
    var6 = var6.ComponentActions;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.SearchEntrypointAnalyticsLocations;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThreadMemberFlags;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createElement;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexShrink': 0,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.actionWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 48;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/ChannelActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62471: for (var _fun62471_ip = 0;;) switch (_fun62471_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
                var10 = var1.screenIndex;
                var11 = var1.containerStyle;
                var9 = var1.showCreateThread;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 19;
                var4 = var2[var3];
                var3 = undefined;
                var7 = var1.bind(var3)(var4);
                var6 = var7.useStateFromStoresObject;
                var12 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var12;
                var0 = function() { // Environment: var0
                    _fun62472: for (var _fun62472_ip = 0;;) switch (_fun62472_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot6;
                            var2 = var5.getChannel;
                            var1 = _closure2_slot0;
                            var7 = var2.bind(var5)(var1);
                            var1 = null;
                            var5 = var1 == var7;
                            var6 = undefined;
                            if (var5) {
                                _fun62472_ip = 47;
                                continue _fun62472
                            }
                        case 37:
                            var5 = var7.isMultiUserDM;
                            var6 = var5.bind(var7)();
                        case 47:
                            var5 = var1 != var6;
                            if (!var5) {
                                _fun62472_ip = 57;
                                continue _fun62472
                            }
                        case 54:
                            var5 = var6;
                        case 57:
                            var0.isMultiUserDM = var5;
                            var5 = _closure1_slot6;
                            var4 = var5.getChannel;
                            var3 = _closure2_slot0;
                            var4 = var4.bind(var5)(var3);
                            var3 = var1 == var4;
                            var2 = undefined;
                            if (var3) {
                                _fun62472_ip = 99;
                                continue _fun62472
                            }
                        case 89:
                            var3 = var4.isDM;
                            var2 = var3.bind(var4)();
                        case 99:
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun62472_ip = 109;
                                continue _fun62472
                            }
                        case 106:
                            var1 = var2;
                        case 109:
                            var0.isDM = var1;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var4, var0);
                var4 = var0.isMultiUserDM;
                var6 = var0.isDM;
                var0 = 16;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useHasForumSearchQuery;
                var7 = var0.bind(var1)(var8);
                var2 = _closure1_slot14;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var11;
                if (var7) {
                    _fun62471_ip = 219;
                    continue _fun62471
                }
            case 138:
                if (var6) {
                    _fun62471_ip = 176;
                    continue _fun62471
                }
            case 141:
                if (var4) {
                    _fun62471_ip = 176;
                    continue _fun62471
                }
            case 144:
                var7 = _closure1_slot14;
                var6 = _closure1_slot20;
                var4 = {};
                var4.channelId = var8;
                var4.screenIndex = var10;
                var4.showCreateThread = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun62471_ip = 217;
                continue _fun62471;
            case 176:
                var9 = _closure1_slot14;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 47;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.channelId = var8;
                var6.screenIndex = var10;
                var4 = var9.bind(var3)(var7, var6);
            case 217:
                _fun62471_ip = 261;
                continue _fun62471;
            case 219:
                var7 = _closure1_slot14;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 46;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ForumChannelCloseSearchButton;
                var5 = {};
                var5.channelId = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 261:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4230, 1376, 1372, 3518, 7720, 660, 7721, 1233, 33, 1297, 7724, 671, 7726, 7728, 7729, 7736, 7737, 566, 6791, 22, 7738, 7916, 1234, 11953, 7108, 9707, 7732, 11430, 9117, 6557, 8303, 9473, 478, 3715, 11421, 11449, 9816, 1229, 3917, 9938, 4816, 9084, 11954, 4557, 11955, 11958, 2]);