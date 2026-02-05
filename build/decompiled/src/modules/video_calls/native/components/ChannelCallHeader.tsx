// modules/video_calls/native/components/ChannelCallHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun69293: for (var _fun69293_ip = 0;;) switch (_fun69293_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 15;
                var0 = var7[var0];
                var3 = undefined;
                var6 = var1.bind(var3)(var0);
                var2 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    _fun69294: for (var _fun69294_ip = 0;;) switch (_fun69294_ip) {
                        case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.getVoiceParticipantsHidden;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var3 = var3.bind(var4)(var0);
                            var0 = undefined;
                            if (!var3) {
                                _fun69294_ip = 59;
                                continue _fun69294
                            }
                        case 35:
                            var3 = _closure1_slot6;
                            var2 = var3.getUserParticipantCount;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 59:
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var1, var0);
                var0 = _closure1_slot17;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var0 = 16;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = null;
                if (!(var7 == var6)) {
                    _fun69293_ip = 113;
                    continue _fun69293
                }
            case 105:
                var7 = var8.defaultNavigatorIcon;
                _fun69293_ip = 119;
                continue _fun69293;
            case 113:
                var7 = var8.navigatorIcon;
            case 119:
                var0.containerStyle = var7;
                var0.membersCount = var6;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 19;
                var8 = var7[var6];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var7[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["hl1V+b"];
                var6 = var8.bind(var9)(var6);
                var0.accessibilityLabel = var6;
                var6 = _closure1_slot1;
                var5 = 42;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var0.source = var5;
                var4 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openVoiceChannelActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.channel;
        var5 = var0.children;
        var12 = var0.showArrowIcon;
        var10 = var0.theme;
        var11 = var0.showConnecting;
        var0 = _closure1_slot17;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot15;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.header;
        var0.style = var4;
        var4 = 'box-none';
        var0.pointerEvents = var4;
        var8 = _closure1_slot14;
        var7 = _closure1_slot18;
        var4 = {};
        var4.theme = var10;
        var4.channel = var9;
        var4.useArrowIcon = var12;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(3);
        var4[0] = var7;
        var8 = _closure1_slot14;
        var7 = _closure1_slot19;
        var6 = {};
        var6.showConnecting = var11;
        var6.theme = var10;
        var6.channel = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4[1] = var6;
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var1;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var4 = var8[var14];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var8[var10];
    var3 = var7.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var8[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var11 = 8;
    var3 = var8[var11];
    var3 = var7.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = var3.ChannelTypes;
    var _closure1_slot12 = var4;
    var13 = var3.Fonts;
    var3 = 9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot14 = var4;
    var4 = var3.jsxs;
    var _closure1_slot15 = var4;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var8[var3];
    var6 = var7.bind(var0)(var3);
    var4 = var6.createStyles;
    var3 = {};
    var9 = {
        'height': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 12
    };
    var12 = 12;
    var12 = var8[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.NAV_BAR_HEIGHT;
    var9.height = var12;
    var3.header = var9;
    var9 = {};
    var9.flex = var14;
    var3.leftTitleButton = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'marginRight': 2
    };
    var3.channelTitleIconContainer = var9;
    var15 = 18;
    var9 = {
        'height': 18,
        'width': 18,
        'marginTop': 0,
        'marginRight': 8,
        'tintColor': 'white'
    };
    var3.channelIcon = var9;
    var9 = {
        'height': 18,
        'width': 18,
        'marginTop': 0,
        'marginRight': 8
    };
    var12 = 13;
    var17 = var8[var12];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var9.tintColor = var17;
    var3.channelIconConnecting = var9;
    var9 = {
        'marginLeft': 12,
        'flexDirection': 'column'
    };
    var3.leftTitleContainer = var9;
    var9 = {
        'opacity': 1,
        'width': 32,
        'height': 32,
        'marginLeft': 4,
        'marginRight': 4
    };
    var3.iconPlaceholder = var9;
    var9 = {};
    var17 = 'rgba(255, 255, 255, .1)';
    var9.backgroundColor = var17;
    var3.noBlurBackground = var9;
    var9 = {};
    var9.flex = var14;
    var14 = 14;
    var14 = var8[var14];
    var14 = var16.bind(var0)(var14);
    var13 = var13.DISPLAY_EXTRABOLD;
    var12 = var8[var12];
    var12 = var16.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var19 = var14.bind(var0)(var13, var12, var15);
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var3.leftTitle = var9;
    var9 = {};
    var9.width = var0;
    var9.paddingHorizontal = var11;
    var3.navigatorIcon = var9;
    var9 = {
        'width': 32,
        'paddingHorizontal': 0
    };
    var3.defaultNavigatorIcon = var9;
    var9 = {};
    var9.marginHorizontal = var10;
    var3.liveTag = var9;
    var3 = var4.bind(var6)(var3);
    var _closure1_slot17 = var3;
    var3 = function arg0() {
        _fun69297: for (var _fun69297_ip = 0;;) switch (_fun69297_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var5 = var0.useArrowIcon;
                var9 = var0.disableBackground;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 15;
                var0 = var1[var0];
                var3 = undefined;
                var8 = var2.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = _closure1_slot10;
                var2[1] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot8;
                    var1 = var2.getTotalMentionCount;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot10;
                    var2 = var3.getMentionCount;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 - var0;
                    return var0;
                };
                var7 = var7.bind(var8)(var2, var0);
                var2 = _closure1_slot14;
                var8 = _closure1_slot1;
                var0 = 16;
                var0 = var1[var0];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var0.disableBackground = var9;
                var10 = _closure1_slot2;
                if (var5) {
                    _fun69297_ip = 132;
                    continue _fun69297
                }
            case 123:
                var5 = 18;
                var5 = var10[var5];
                _fun69297_ip = 139;
                continue _fun69297;
            case 132:
                var9 = 17;
                var5 = var10[var9];
            case 139:
                var5 = var8.bind(var3)(var5);
                var0.source = var5;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 19;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var8[var9];
                var9 = var5.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.cpT0Cq;
                var9 = var10.bind(var11)(var9);
                var0.accessibilityLabel = var9;
                var6 = function() {
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 20;
                    var2 = var6[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot11;
                    var4 = var2.VIDEO_LAYOUT_TOGGLED;
                    var2 = {};
                    var5 = 'pop out';
                    var2.video_layout = var5;
                    var5 = _closure1_slot0;
                    var1 = 21;
                    var1 = var6[var1];
                    var11 = var5.bind(var0)(var1);
                    var10 = var11.collectVoiceAnalyticsMetadata;
                    var1 = _closure2_slot0;
                    var9 = var1.id;
                    var12 = var10.bind(var11)(var9);
                    var13 = var2;
                    var9 = copyDataProperties(var13, var12);
                    var2 = var7.bind(var8)(var4, var2);
                    var2 = 22;
                    var2 = var6[var2];
                    var7 = var3.bind(var0)(var2);
                    var4 = var7.setHidden;
                    var2 = false;
                    var2 = var4.bind(var7)(var2);
                    var2 = 23;
                    var2 = var6[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.popWithKey;
                    var4 = 24;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.getVoiceChannelKey;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var6;
                var6 = _closure1_slot14;
                var4 = 25;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.MaskedBadge;
                var4 = {};
                var4.value = var7;
                var7 = {};
                var4.maskStyle = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var3 = function arg0() {
        _fun69300: for (var _fun69300_ip = 0;;) switch (_fun69300_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channel;
                var7 = var1.showConnecting;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun69300_ip = 24;
                    continue _fun69300
                }
            case 22:
                var7 = false;
            case 24:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 26;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var11);
                var2 = 27;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var16 = var2.bind(var3)(var11);
                var2 = _closure1_slot0;
                var4 = 28;
                var4 = var6[var4];
                var9 = var2.bind(var3)(var4);
                var5 = var9.useGuildChannelScheduledEvents;
                var4 = var11.id;
                var4 = var5.bind(var9)(var4);
                _closure2_slot0 = var4;
                var10 = _closure1_slot4;
                var9 = var10.useMemo;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot7;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var4, var5);
                var5 = _closure1_slot3;
                var4 = 1;
                var5 = var5.bind(var3)(var9, var4);
                var4 = 0;
                var4 = var5[var4];
                _closure2_slot1 = var4;
                var9 = var10.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var0 = function() { // Environment: var0
                    _fun69303: for (var _fun69303_ip = 0;;) switch (_fun69303_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun69303_ip = 93;
                                continue _fun69303
                            }
                        case 13:
                            var6 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 29;
                            var3 = var4[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = _closure1_slot0;
                            var2 = 30;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openGuildEventDetails;
                            var2 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var2.eventId = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        case 93:
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var0, var5);
                var0 = _closure1_slot17;
                var19 = var0.bind(var3)();
                var0 = 31;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getChannelIcon;
                var9 = var0.bind(var2)(var11);
                var18 = null;
                var0 = var18 != var9;
                var13 = null;
                if (!var0) {
                    _fun69300_ip = 316;
                    continue _fun69300
                }
            case 234:
                var6 = _closure1_slot14;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 32;
                var0 = var14[var10];
                var2 = var12.bind(var3)(var0);
                var0 = {};
                var10 = var14[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.CUSTOM;
                var0.size = var10;
                var0.source = var9;
                if (var7) {
                    _fun69300_ip = 300;
                    continue _fun69300
                }
            case 292:
                var7 = var19.channelIcon;
                _fun69300_ip = 306;
                continue _fun69300;
            case 300:
                var7 = var19.channelIconConnecting;
            case 306:
                var0.style = var7;
                var13 = var6.bind(var3)(var2, var0);
            case 316:
                var2 = _closure1_slot1;
                var20 = _closure1_slot2;
                var0 = 33;
                var0 = var20[var0];
                var0 = var2.bind(var3)(var0);
                var17 = var0.bind(var3)(var11, var1);
                var2 = _closure1_slot14;
                var14 = _closure1_slot0;
                var0 = 34;
                var0 = var20[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var0.onPress = var5;
                var5 = var19.leftTitleButton;
                var0.style = var5;
                var4 = var18 == var4;
                var0.disabled = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = 'none';
                var4.pointerEvents = var7;
                var7 = var19.leftTitleContainer;
                var4.style = var7;
                var10 = _closure1_slot15;
                var9 = _closure1_slot5;
                var7 = {};
                var12 = var19.channelTitleIconContainer;
                var7.style = var12;
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot14;
                var13 = 35;
                var13 = var20[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.LegacyText;
                var13 = {
                    'style': null,
                    'numberOfLines': 1,
                    'maxFontSizeMultiplier': 2
                };
                var19 = var19.leftTitle;
                var13.style = var19;
                if (!(var18 != var17)) {
                    _fun69300_ip = 512;
                    continue _fun69300
                }
            case 509:
                var16 = var17;
            case 512:
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 36;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var4 = function() {
        _fun69304: for (var _fun69304_ip = 0;;) switch (_fun69304_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresObject;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var0 = {};
                    var2 = _closure1_slot9;
                    var1 = var2.isVideoEnabled;
                    var1 = var1.bind(var2)();
                    var0.isVideoEnabled = var1;
                    var1 = var2.getVideoDeviceId;
                    var1 = var1.bind(var2)();
                    var0.videoDeviceId = var1;
                    var1 = var2.getVideoDevices;
                    var1 = var1.bind(var2)();
                    var0.videoDevices = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var1 = var0.isVideoEnabled;
                var2 = var0.videoDeviceId;
                var _closure2_slot0 = var2;
                var0 = var0.videoDevices;
                var _closure2_slot1 = var0;
                var0 = null;
                if (!var1) {
                    _fun69304_ip = 210;
                    continue _fun69304
                }
            case 89:
                var3 = _closure1_slot14;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 16;
                var1 = var8[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var11 = _closure1_slot0;
                var6 = 19;
                var9 = var8[var6];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var11.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["t9eQ/g"];
                var6 = var9.bind(var10)(var6);
                var1.accessibilityLabel = var6;
                var6 = 37;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var1.source = var6;
                var5 = function() {
                    _fun69306: for (var _fun69306_ip = 0;;) switch (_fun69306_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.keys;
                            var0 = _closure2_slot1;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var1 = _closure2_slot0;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun69306_ip = 86;
                                continue _fun69306
                            }
                        case 50:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 38;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.setVideoDevice;
                            var0 = var0.bind(var1)(var2);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = true;
                var1.disableBackground = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 210:
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var3 = function arg0() {
        _fun69308: for (var _fun69308_ip = 0;;) switch (_fun69308_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 39;
                var0 = var7[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var1 = var0.bind(var4)(var2);
                var0 = 26;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)(var2);
                var2 = null;
                var3 = var2 == var0;
                var0 = null;
                if (var3) {
                    _fun69308_ip = 201;
                    continue _fun69308
                }
            case 75:
                var0 = null;
                if (var1) {
                    _fun69308_ip = 201;
                    continue _fun69308
                }
            case 80:
                var3 = _closure1_slot14;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 16;
                var1 = var8[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var11 = _closure1_slot0;
                var6 = 19;
                var9 = var8[var6];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var8[var6];
                var6 = var11.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.HK4JIu;
                var6 = var9.bind(var10)(var6);
                var1.accessibilityLabel = var6;
                var6 = 40;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var1.source = var6;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.selectParticipant;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = null;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1.onPress = var5;
                var5 = true;
                var1.disableBackground = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 201:
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var6 = function() {
        var1 = _closure1_slot17;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot14;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.iconPlaceholder;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var6;
    var6 = 46;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/components/ChannelCallHeader.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function arg0() {
        _fun69311: for (var _fun69311_ip = 0;;) switch (_fun69311_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var4 = var0.showConnecting;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun69311_ip = 22;
                    continue _fun69311
                }
            case 20:
                var4 = false;
            case 22:
                var0 = _closure1_slot17;
                var16 = var0.bind(var3)();
                var7 = var8.type;
                var0 = _closure1_slot12;
                var6 = var0.GUILD_STAGE_VOICE;
                var0 = var8.isPrivate;
                var0 = var0.bind(var8)();
                var11 = !var0;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 43;
                var1 = var9[var0];
                var12 = var2.bind(var3)(var1);
                var10 = var12.useStore;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.orientation;
                    return var0;
                };
                var1 = var10.bind(var12)(var1);
                var12 = _closure1_slot1;
                var10 = 26;
                var10 = var9[var10];
                var10 = var12.bind(var3)(var10);
                var15 = var10.bind(var3)(var8);
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.OrientationType;
                var0 = var0.LANDSCAPE;
                var9 = var1 === var0;
                if (!var9) {
                    _fun69311_ip = 156;
                    continue _fun69311
                }
            case 150:
                var0 = null;
                var9 = var0 != var15;
            case 156:
                if (!var9) {
                    _fun69311_ip = 178;
                    continue _fun69311
                }
            case 159:
                var1 = var15.type;
                var0 = _closure1_slot13;
                var0 = var0.STREAM;
                var9 = var1 === var0;
            case 178:
                var2 = _closure1_slot14;
                var1 = _closure1_slot24;
                var0 = {};
                var0.showConnecting = var4;
                var0.channel = var8;
                var6 = var7 === var6;
                var6 = !var6;
                var0.showArrowIcon = var6;
                if (var4) {
                    _fun69311_ip = 390;
                    continue _fun69311
                }
            case 215:
                var7 = _closure1_slot15;
                var6 = _closure1_slot16;
                var4 = {};
                var12 = null;
                if (!var9) {
                    _fun69311_ip = 277;
                    continue _fun69311
                }
            case 230:
                var14 = _closure1_slot14;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 45;
                var9 = var17[var9];
                var13 = var13.bind(var3)(var9);
                var9 = {};
                var16 = var16.liveTag;
                var9.style = var16;
                var9.participant = var15;
                var12 = var14.bind(var3)(var13, var9);
            case 277:
                var9 = new Array(5);
                var9[0] = var12;
                var14 = _closure1_slot14;
                var13 = _closure1_slot21;
                var12 = {};
                var12.channel = var8;
                var12 = var14.bind(var3)(var13, var12);
                var9[1] = var12;
                var14 = _closure1_slot14;
                var13 = _closure1_slot20;
                var12 = {};
                var12 = var14.bind(var3)(var13, var12);
                var9[2] = var12;
                var14 = _closure1_slot14;
                var13 = _closure1_slot23;
                var12 = {};
                var12.channel = var8;
                var12 = var14.bind(var3)(var13, var12);
                var9[3] = var12;
                var10 = null;
                if (!var11) {
                    _fun69311_ip = 374;
                    continue _fun69311
                }
            case 358:
                var13 = _closure1_slot14;
                var12 = _closure1_slot22;
                var11 = {};
                var10 = var13.bind(var3)(var12, var11);
            case 374:
                var9[4] = var10;
                var4.children = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun69311_ip = 432;
                continue _fun69311;
            case 390:
                var7 = _closure1_slot14;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 44;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChannelCallConnectingHeader;
                var5 = {};
                var5.channel = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 432:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var5;
    var2.CameraButton = var4;
    var2.GridButton = var3;
    var2.ChannelCallHeaderBase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3948, 3334, 8659, 3476, 3947, 660, 3523, 33, 1297, 4703, 671, 4682, 566, 8451, 8671, 8672, 1234, 795, 4302, 7912, 4561, 7898, 8663, 7907, 4794, 8102, 3278, 8207, 4809, 4086, 8673, 4904, 4878, 8675, 8676, 8230, 7906, 8677, 7900, 8678, 7839, 8485, 8063, 2]);