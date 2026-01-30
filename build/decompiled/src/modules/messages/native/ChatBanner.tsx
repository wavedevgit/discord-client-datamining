// modules/messages/native/ChatBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: OptInChannelBanner, environment: var3
        _fun89823: for (var _fun89823_ip = 0;;) switch (_fun89823_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var6 = var1.topBorder;
                var1 = _closure1_slot14;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var7 = _closure1_slot3;
                var4 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.CHANNEL_BANNER_VIEWED;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 14;
                    var7 = var8[var5];
                    var11 = var6.bind(var0)(var7);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var7 = _closure2_slot0;
                    var9 = var7.getGuildId;
                    var9 = var9.bind(var7)();
                    var12 = var10.bind(var11)(var9);
                    var13 = var1;
                    var9 = copyDataProperties(var13, var12);
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.collectChannelAnalyticsMetadata;
                    var12 = var5.bind(var6)(var7);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var6 = 'channel_opt_in';
                    var5 = 'banner_type';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var4.bind(var7)(var1, var2);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 13;
                    var2 = var5[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot10;
                    var6 = var2.CHANNEL_BANNER_CTA_CLICKED;
                    var3 = {};
                    var4 = _closure1_slot0;
                    var9 = 14;
                    var2 = var5[var9];
                    var12 = var4.bind(var0)(var2);
                    var11 = var12.collectGuildAnalyticsMetadata;
                    var2 = _closure2_slot0;
                    var10 = var2.getGuildId;
                    var10 = var10.bind(var2)();
                    var15 = var11.bind(var12)(var10);
                    var16 = var3;
                    var10 = copyDataProperties(var16, var15);
                    var9 = var5[var9];
                    var10 = var4.bind(var0)(var9);
                    var9 = var10.collectChannelAnalyticsMetadata;
                    var15 = var9.bind(var10)(var2);
                    var16 = var3;
                    var9 = copyDataProperties(var16, var15);
                    var10 = 'channel_opt_in';
                    var9 = 'banner_type';
                    var3[var9] = var10;
                    var10 = 'add channel';
                    var9 = 'cta_type';
                    var3[var9] = var10;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 15;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.setOptInChannel;
                    var16 = var2.guild_id;
                    var15 = var2.id;
                    var2 = {};
                    var1 = _closure1_slot11;
                    var1 = var1.CHANNEL;
                    var2.section = var1;
                    var14 = true;
                    var17 = var6;
                    var13 = var2;
                    var1 = var17[var5](var16, var15, var14, var13, var12);
                    return var0;
                };
                var16 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var17.optInChannelBannerContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var6) {
                    _fun89823_ip = 128;
                    continue _fun89823
                }
            case 122:
                var5 = var17.topBorder;
            case 128:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot12;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 16;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'lineClamp': 2,
                    'style': null,
                    'variant': 'text-sm/semibold'
                };
                var7 = var17.optInChannelBannerText;
                var4.style = var7;
                var11 = 17;
                var7 = var15[var11];
                var7 = var14.bind(var3)(var7);
                var10 = var7.intl;
                var9 = var10.string;
                var7 = var15[var11];
                var7 = var14.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.iOWmmB;
                var7 = var9.bind(var10)(var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var17.optInChannelBannerButtonContainer;
                var5.style = var9;
                var10 = _closure1_slot12;
                var13 = _closure1_slot1;
                var12 = 18;
                var8 = var15[var12];
                var9 = var13.bind(var3)(var8);
                var8 = {};
                var17 = var17.optInChannelBannerButton;
                var8.style = var17;
                var8.onPress = var16;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Sizes;
                var12 = var12.SMALL;
                var8.size = var12;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["TD/+zP"];
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var0 = function(arg0) { // Original name: ArchivedLockedThreadChatBanner, environment: var3
        _fun89826: for (var _fun89826_ip = 0;;) switch (_fun89826_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var0 = _closure1_slot14;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.CHANNEL_BANNER_VIEWED;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 14;
                    var7 = var8[var5];
                    var11 = var6.bind(var0)(var7);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var7 = _closure2_slot0;
                    var9 = var7.getGuildId;
                    var9 = var9.bind(var7)();
                    var12 = var10.bind(var11)(var9);
                    var13 = var1;
                    var9 = copyDataProperties(var13, var12);
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.collectChannelAnalyticsMetadata;
                    var12 = var5.bind(var6)(var7);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var6 = 'thread';
                    var5 = 'banner_type';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useCanUnarchiveThread;
                var5 = var0.bind(var1)(var10);
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.threadBannerContainer;
                var0.style = var4;
                var7 = _closure1_slot12;
                var4 = 16;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'lineClamp': 2,
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8 = var12.threadBannerTitle;
                var4.style = var8;
                var8 = var10.isForumPost;
                var8 = var8.bind(var10)();
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = 17;
                var13 = var10[var14];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var10 = var10[var14];
                var10 = var16.bind(var3)(var10);
                var10 = var10.t;
                if (var8) {
                    _fun89826_ip = 227;
                    continue _fun89826
                }
            case 212:
                var8 = var10.rEeodK;
                var8 = var13.bind(var15)(var8);
                _fun89826_ip = 240;
                continue _fun89826;
            case 227:
                var10 = var10["833FDn"];
                var8 = var13.bind(var15)(var10);
            case 240:
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun89826_ip = 396;
                    continue _fun89826
                }
            case 264:
                var8 = _closure1_slot12;
                var15 = _closure1_slot1;
                var10 = _closure1_slot2;
                var13 = 18;
                var6 = var10[var13];
                var7 = var15.bind(var3)(var6);
                var6 = {};
                var13 = var10[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.GREY;
                var6.color = var13;
                var12 = var12.threadBannerButton;
                var6.style = var12;
                var13 = _closure1_slot0;
                var11 = var10[var14];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["0dvvEi"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function() { // Original name: onPress, environment: var9
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var1 = var3[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.track;
                    var1 = _closure1_slot10;
                    var5 = var1.CHANNEL_BANNER_CTA_CLICKED;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = 14;
                    var4 = var3[var8];
                    var12 = var9.bind(var0)(var4);
                    var11 = var12.collectGuildAnalyticsMetadata;
                    var4 = _closure2_slot0;
                    var10 = var4.getGuildId;
                    var10 = var10.bind(var4)();
                    var13 = var11.bind(var12)(var10);
                    var14 = var1;
                    var10 = copyDataProperties(var14, var13);
                    var8 = var3[var8];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.collectChannelAnalyticsMetadata;
                    var13 = var8.bind(var9)(var4);
                    var14 = var1;
                    var8 = copyDataProperties(var14, var13);
                    var9 = 'thread';
                    var8 = 'banner_type';
                    var1[var8] = var9;
                    var9 = 'unarchive';
                    var8 = 'cta_type';
                    var1[var8] = var9;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.unarchiveThread;
                    var1 = false;
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 396:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: LockedThreadChatBanner, environment: var3
        _fun89829: for (var _fun89829_ip = 0;;) switch (_fun89829_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var0 = _closure1_slot14;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.CHANNEL_BANNER_VIEWED;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 14;
                    var7 = var8[var5];
                    var11 = var6.bind(var0)(var7);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var7 = _closure2_slot0;
                    var9 = var7.getGuildId;
                    var9 = var9.bind(var7)();
                    var12 = var10.bind(var11)(var9);
                    var13 = var1;
                    var9 = copyDataProperties(var13, var12);
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.collectChannelAnalyticsMetadata;
                    var12 = var5.bind(var6)(var7);
                    var13 = var1;
                    var5 = copyDataProperties(var13, var12);
                    var6 = 'thread';
                    var5 = 'banner_type';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useIsThreadModerator;
                var5 = var0.bind(var1)(var10);
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.threadBannerContainer;
                var0.style = var4;
                var7 = _closure1_slot12;
                var4 = 16;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'lineClamp': 2,
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8 = var12.threadBannerTitle;
                var4.style = var8;
                var8 = var10.isForumPost;
                var8 = var8.bind(var10)();
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = 17;
                var13 = var10[var14];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var10 = var10[var14];
                var10 = var16.bind(var3)(var10);
                var10 = var10.t;
                if (var8) {
                    _fun89829_ip = 227;
                    continue _fun89829
                }
            case 212:
                var8 = var10["V/JF2N"];
                var8 = var13.bind(var15)(var8);
                _fun89829_ip = 240;
                continue _fun89829;
            case 227:
                var10 = var10.E7oO8u;
                var8 = var13.bind(var15)(var10);
            case 240:
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun89829_ip = 396;
                    continue _fun89829
                }
            case 264:
                var8 = _closure1_slot12;
                var15 = _closure1_slot1;
                var10 = _closure1_slot2;
                var13 = 18;
                var6 = var10[var13];
                var7 = var15.bind(var3)(var6);
                var6 = {};
                var13 = var10[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.GREY;
                var6.color = var13;
                var12 = var12.threadBannerButton;
                var6.style = var12;
                var13 = _closure1_slot0;
                var11 = var10[var14];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.zA9d1J;
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function() { // Original name: onPress, environment: var9
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 13;
                    var1 = var4[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.track;
                    var1 = _closure1_slot10;
                    var5 = var1.CHANNEL_BANNER_CTA_CLICKED;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = 14;
                    var3 = var4[var8];
                    var12 = var9.bind(var0)(var3);
                    var11 = var12.collectGuildAnalyticsMetadata;
                    var3 = _closure2_slot0;
                    var10 = var3.getGuildId;
                    var10 = var10.bind(var3)();
                    var13 = var11.bind(var12)(var10);
                    var14 = var1;
                    var10 = copyDataProperties(var14, var13);
                    var8 = var4[var8];
                    var9 = var9.bind(var0)(var8);
                    var8 = var9.collectChannelAnalyticsMetadata;
                    var13 = var8.bind(var9)(var3);
                    var14 = var1;
                    var8 = copyDataProperties(var14, var13);
                    var9 = 'thread';
                    var8 = 'banner_type';
                    var1[var8] = var9;
                    var9 = 'unlock';
                    var8 = 'cta_type';
                    var1[var8] = var9;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.unlockThread;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var6.onPress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 396:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: NewMessagesChatBar, environment: var3
        _fun89832: for (var _fun89832_ip = 0;;) switch (_fun89832_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var25 = var0.unreadCount;
                var24 = var0.oldestUnreadTimestamp;
                var16 = var0.handleScrollToNewMessages;
                var0 = _closure1_slot14;
                var5 = undefined;
                var13 = var0.bind(var5)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var6 = var1.bind(var5)(var0);
                var4 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var1 = function() { // Environment: var11
                    var1 = _closure1_slot5;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var3 = var4.bind(var6)(var3, var1, var0);
                var0 = null;
                if (!var3) {
                    _fun89832_ip = 521;
                    continue _fun89832
                }
            case 108:
                var3 = 0;
                var3 = var25 <= var3;
                var1 = null;
                if (var3) {
                    _fun89832_ip = 518;
                    continue _fun89832
                }
            case 122:
                var4 = _closure1_slot6;
                var3 = var4.isEstimated;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var12 = 17;
                var2 = var2[var12];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                if (var3) {
                    _fun89832_ip = 182;
                    continue _fun89832
                }
            case 172:
                var23 = var2["BctFH/"];
                _fun89832_ip = 190;
                continue _fun89832;
            case 182:
                var23 = var2.wvtbbG;
            case 190:
                var4 = _closure1_slot13;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var13.newMessageBar;
                var2.style = var6;
                var9 = _closure1_slot12;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 21;
                var6 = var14[var7];
                var6 = var17.bind(var5)(var6);
                var8 = var6.PressableOpacity;
                var6 = {};
                var15 = 'button';
                var6.accessibilityRole = var15;
                var18 = var13.newMessageBarTextContainer;
                var6.style = var18;
                var6.onPress = var16;
                var19 = _closure1_slot12;
                var16 = 16;
                var16 = var14[var16];
                var16 = var17.bind(var5)(var16);
                var18 = var16.Text;
                var16 = {
                    'variant': 'text-sm/semibold',
                    'color': 'always-white'
                };
                var20 = var14[var12];
                var20 = var17.bind(var5)(var20);
                var22 = var20.intl;
                var21 = var22.format;
                var20 = {};
                var20.count = var25;
                var20.timestamp = var24;
                var20 = var21.bind(var22)(var23, var20);
                var16.children = var20;
                var16 = var19.bind(var5)(var18, var16);
                var6.children = var16;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot12;
                var7 = var14[var7];
                var7 = var17.bind(var5)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var7.accessibilityRole = var15;
                var15 = var14[var12];
                var15 = var17.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var12 = var14[var12];
                var12 = var17.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.e6RscS;
                var12 = var15.bind(var16)(var12);
                var7.accessibilityLabel = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.ack;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = {};
                    var5 = _closure1_slot11;
                    var5 = var5.NEW_MESSAGES_BANNER;
                    var0.section = var5;
                    var5 = _closure1_slot9;
                    var5 = var5.MARK_CHANNEL_AS_READ_BUTTON;
                    var0.object = var5;
                    var4 = _closure1_slot8;
                    var4 = var4.ACK_MANUAL;
                    var0.objectType = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7.onPress = var11;
                var12 = _closure1_slot12;
                var11 = _closure1_slot1;
                var10 = 23;
                var10 = var14[var10];
                var11 = var11.bind(var5)(var10);
                var10 = {};
                var13 = var13.closeText;
                var10.style = var13;
                var13 = '+';
                var10.children = var13;
                var10 = var12.bind(var5)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 518:
                var0 = var1;
            case 521:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var13 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChatOverlays;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot11 = var7;
    var15 = var4.Fonts;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'alignSelf': 'stretch',
        'height': 60,
        'flexDirection': 'row',
        'paddingHorizontal': 16,
        'paddingVertical': 12,
        'alignItems': 'center',
        'flexGrow': 0,
        'zIndex': 100
    };
    var14 = 12;
    var11 = 8;
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var16;
    var4.threadBannerContainer = var9;
    var9 = {
        'flex': 1,
        'lineHeight': 18
    };
    var4.threadBannerTitle = var9;
    var9 = {
        'flexGrow': 0,
        'height': 32,
        'paddingVertical': 7,
        'paddingHorizontal': 16,
        'marginLeft': 16
    };
    var4.threadBannerButton = var9;
    var9 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden',
        'zIndex': 100
    };
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BRAND;
    var9.backgroundColor = var16;
    var4.newMessageBar = var9;
    var9 = {
        'flex': 1,
        'paddingLeft': 16,
        'paddingVertical': 10
    };
    var4.newMessageBarTextContainer = var9;
    var9 = {};
    var16 = var6[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var9.color = var16;
    var15 = var15.PRIMARY_MEDIUM;
    var9.fontFamily = var15;
    var15 = 30;
    var9.fontSize = var15;
    var9.paddingHorizontal = var14;
    var15 = {};
    var14 = '45deg';
    var15.rotate = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var9.transform = var14;
    var4.closeText = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'overflow': 'hidden',
        'padding': 8,
        'paddingLeft': 16,
        'paddingRight': 16,
        'zIndex': 100
    };
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CHAT_BANNER_BG;
    var9.backgroundColor = var14;
    var14 = var13.hairlineWidth;
    var9.borderBottomWidth = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.CHAT_BORDER;
    var9.borderBottomColor = var14;
    var4.optInChannelBannerContainer = var9;
    var9 = {};
    var13 = var13.hairlineWidth;
    var9.borderTopWidth = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CHAT_BORDER;
    var9.borderTopColor = var11;
    var4.topBorder = var9;
    var9 = {};
    var9.flex = var10;
    var4.optInChannelBannerText = var9;
    var9 = {
        'flexShrink': 0,
        'marginLeft': 8
    };
    var4.optInChannelBannerButtonContainer = var9;
    var9 = {
        'borderRadius': 20,
        'paddingLeft': 16,
        'paddingRight': 16
    };
    var4.optInChannelBannerButton = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/ChatBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: ChatBanner, environment: var3
        _fun89835: for (var _fun89835_ip = 0;;) switch (_fun89835_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var7 = var1.handleScrollToNewMessages;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)(var5);
                var3 = 10;
                var3 = var8[var3];
                var3 = var6.bind(var4)(var3);
                var10 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var3 = 11;
                var3 = var8[var3];
                var9 = var6.bind(var4)(var3);
                var8 = var9.useStateFromStoresObject;
                var3 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var3;
                var11 = var5.id;
                var3 = new Array(1);
                var3[0] = var11;
                var0 = function() { // Environment: var0
                    _fun89836: for (var _fun89836_ip = 0;;) switch (_fun89836_ip) {
                        case 0:
                            var5 = _closure1_slot6;
                            var1 = var5.getOldestUnreadTimestamp;
                            var4 = _closure2_slot0;
                            var0 = var4.id;
                            var1 = var1.bind(var5)(var0);
                            var0 = {};
                            var6 = _closure1_slot6;
                            var5 = var6.getUnreadCount;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var0.unreadCount = var4;
                            var4 = 0;
                            if (!(var4 === var1)) {
                                _fun89836_ip = 107;
                                continue _fun89836
                            }
                        case 65:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.extractTimestamp;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 107:
                            var0.oldestUnreadTimestamp = var1;
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var6, var0, var3);
                var9 = var0.unreadCount;
                var8 = var0.oldestUnreadTimestamp;
                var0 = var5.isArchivedLockedThread;
                var0 = var0.bind(var5)();
                if (var0) {
                    _fun89835_ip = 308;
                    continue _fun89835
                }
            case 155:
                var0 = var5.isLockedThread;
                var0 = var0.bind(var5)();
                if (var0) {
                    _fun89835_ip = 286;
                    continue _fun89835
                }
            case 168:
                var0 = 0;
                if (!(var9 > var0)) {
                    _fun89835_ip = 197;
                    continue _fun89835
                }
            case 174:
                var3 = var10.includes;
                var0 = _closure1_slot7;
                var0 = var0.NEW_MESSAGES;
                var0 = var3.bind(var10)(var0);
                if (var0) {
                    _fun89835_ip = 249;
                    continue _fun89835
                }
            case 197:
                var0 = null;
                if (!var2) {
                    _fun89835_ip = 247;
                    continue _fun89835
                }
            case 202:
                var6 = var10.includes;
                var2 = _closure1_slot7;
                var2 = var2.OPT_IN_CHANNEL;
                var2 = var6.bind(var10)(var2);
                var0 = null;
                if (!var2) {
                    _fun89835_ip = 247;
                    continue _fun89835
                }
            case 227:
                var6 = _closure1_slot12;
                var3 = _closure1_slot15;
                var2 = {};
                var2.channel = var5;
                var0 = var6.bind(var4)(var3, var2);
            case 247:
                _fun89835_ip = 284;
                continue _fun89835;
            case 249:
                var6 = _closure1_slot12;
                var3 = _closure1_slot18;
                var2 = {};
                var2.unreadCount = var9;
                var2.oldestUnreadTimestamp = var8;
                var2.channel = var5;
                var2.handleScrollToNewMessages = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 284:
                _fun89835_ip = 306;
                continue _fun89835;
            case 286:
                var6 = _closure1_slot12;
                var3 = _closure1_slot17;
                var2 = {};
                var2.channel = var5;
                var0 = var6.bind(var4)(var3, var2);
            case 306:
                _fun89835_ip = 328;
                continue _fun89835;
            case 308:
                var3 = _closure1_slot12;
                var2 = _closure1_slot16;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 328:
                return var0;
        }
    };
    var2.default = var3;
    var2.OptInChannelBanner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3433, 3907, 11614, 660, 33, 1297, 671, 11615, 11616, 566, 21, 795, 4265, 4656, 3901, 1234, 4835, 6658, 6428, 4864, 4537, 1295, 2]);