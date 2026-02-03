// modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun72254: for (var _fun72254_ip = 0;;) switch (_fun72254_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.children;
                var12 = var1.onPress;
                var11 = var1.pressAccessibilityLabel;
                var2 = _closure1_slot14;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var7 = var2.bind(var3)(var4);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var7, var2);
                var2 = 0;
                var10 = var3[var2];
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot0 = var2;
                var7 = _closure1_slot4;
                var3 = var7.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var3 = true;
                    var1.borderless = var3;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var1.radius = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var14 = var3.bind(var7)(var2, var0);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun72254_ip = 285;
                    continue _fun72254
                }
            case 113:
                var3 = _closure1_slot13;
                var2 = _closure1_slot12;
                var0 = {};
                var9 = _closure1_slot11;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 10;
                var7 = var16[var7];
                var7 = var15.bind(var4)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var13 = 11;
                var13 = var16[var13];
                var15 = var15.bind(var4)(var13);
                var13 = var15.isAndroid;
                var15 = var13.bind(var15)();
                var13 = undefined;
                if (!var15) {
                    _fun72254_ip = 185;
                    continue _fun72254
                }
            case 182:
                var13 = var14;
            case 185:
                var7.onLayout = var13;
                var7.onPress = var12;
                var7.androidRippleConfig = var10;
                var10 = 'header';
                var7.accessibilityRole = var10;
                var10 = var6.wrapper;
                var7.style = var10;
                var7.children = var5;
                var8 = var9.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot5;
                var8 = {};
                var8.onPress = var12;
                var8.accessibilityLabel = var11;
                var11 = var6.hiddenPressable;
                var8.style = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun72254_ip = 323;
                continue _fun72254;
            case 285:
                var3 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var6.wrapper;
                var1.style = var6;
                var6 = 'header';
                var1.accessibilityRole = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 323:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun72256: for (var _fun72256_ip = 0;;) switch (_fun72256_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.title;
                var16 = var0.accessibleTitle;
                var9 = var0.subtitle;
                var12 = var0.disableArrow;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun72256_ip = 34;
                    continue _fun72256
                }
            case 32:
                var12 = false;
            case 34:
                var19 = var0.userId;
                var18 = var0.guildId;
                var0 = _closure1_slot14;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var10.channelContent;
                var0.style = var4;
                var8 = _closure1_slot13;
                var7 = _closure1_slot6;
                var4 = {};
                var5 = var10.nameWithArrow;
                var4.style = var5;
                var5 = null;
                if (!(var5 == var19)) {
                    _fun72256_ip = 174;
                    continue _fun72256
                }
            case 101:
                var14 = _closure1_slot11;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 13;
                var11 = var15[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'style': null,
                    'accessibilityLabel': null,
                    'accessibilityRole': 'header',
                    'maxFontSizeMultiplier': 2
                };
                var15 = var10.channelName;
                var11.style = var15;
                var11.accessibilityLabel = var16;
                var11.children = var17;
                var13 = var14.bind(var3)(var13, var11);
                _fun72256_ip = 266;
                continue _fun72256;
            case 174:
                var15 = _closure1_slot11;
                var14 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 12;
                var11 = var20[var11];
                var14 = var14.bind(var3)(var11);
                var11 = {
                    'userId': null,
                    'guildId': null,
                    'userName': null,
                    'variant': 'heading-lg/bold',
                    'defaultColor': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var11.userId = var19;
                var11.guildId = var18;
                var11.userName = var17;
                var17 = var10.channelName;
                var11.style = var17;
                var11.accessibilityLabel = var16;
                var16 = 'header';
                var11.accessibilityRole = var16;
                var16 = 2;
                var11.maxFontSizeMultiplier = var16;
                var13 = var15.bind(var3)(var14, var11);
            case 266:
                var11 = new Array(2);
                var11[0] = var13;
                var12 = !var12;
                if (!var12) {
                    _fun72256_ip = 363;
                    continue _fun72256
                }
            case 280:
                var15 = _closure1_slot11;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 14;
                var13 = var18[var16];
                var14 = var17.bind(var3)(var13);
                var13 = {};
                var19 = 15;
                var19 = var18[var19];
                var19 = var17.bind(var3)(var19);
                var13.source = var19;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.REFRESH_SMALL_16;
                var13.size = var16;
                var16 = var10.arrowIcon;
                var13.style = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 363:
                var11[1] = var12;
                var4.children = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = var5 != var9;
                if (!var5) {
                    _fun72256_ip = 422;
                    continue _fun72256
                }
            case 392:
                var8 = _closure1_slot11;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var10.subTitleContainer;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 422:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.channel;
        var0 = _closure1_slot14;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 16;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var7 = _closure1_slot0;
        var6 = 17;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.AvatarSizes;
        var6 = var6.REFRESH_MEDIUM_32;
        var0.size = var6;
        var0.channel = var5;
        var4 = var4.channelIcon;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun72258: for (var _fun72258_ip = 0;;) switch (_fun72258_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.user;
                var8 = var0.status;
                var6 = var0.isMobileOnline;
                var5 = var0.isVROnline;
                var0 = _closure1_slot14;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 17;
                var0 = var11[var7];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.user = var9;
                var12 = var9.avatarDecoration;
                var0.avatarDecoration = var12;
                var0.guildId = var3;
                var10 = _closure1_slot0;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.AvatarSizes;
                var7 = var7.REFRESH_MEDIUM_32;
                var0.size = var7;
                var7 = var9.isSystemUser;
                var9 = var7.bind(var9)();
                var7 = null;
                if (var9) {
                    _fun72258_ip = 130;
                    continue _fun72258
                }
            case 127:
                var7 = var8;
            case 130:
                var0.status = var7;
                var0.isMobileOnline = var6;
                var0.isVROnline = var5;
                var4 = var4.channelIcon;
                var0.style = var4;
                var4 = true;
                var0.autoStatusCutout = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot20;
        var1 = {};
        var0 = arg0;
        var1.icon = var0;
        var0 = arg1;
        var1.IconComponent = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = function arg0() {
        _fun72260: for (var _fun72260_ip = 0;;) switch (_fun72260_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.icon;
                var4 = var0.IconComponent;
                var0 = _closure1_slot14;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var0 = null;
                if (!(var0 == var4)) {
                    _fun72260_ip = 111;
                    continue _fun72260
                }
            case 32:
                var5 = _closure1_slot11;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 14;
                var0 = var10[var8];
                var2 = var9.bind(var3)(var0);
                var0 = {};
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.SMALL_20;
                var0.size = var8;
                var0.source = var7;
                var6 = var6.guildChannelIcon;
                var6 = var6.tintColor;
                var0.color = var6;
                var0 = var5.bind(var3)(var2, var0);
                _fun72260_ip = 135;
                continue _fun72260;
            case 111:
                var2 = _closure1_slot11;
                var1 = {
                    'size': 'md',
                    'color': 'text-strong'
                };
                var0 = var2.bind(var3)(var4, var1);
            case 135:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.channel;
        var0 = _closure1_slot14;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 13;
        var0 = var7[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'lineClamp': 1,
            'accessibilityLabel': null,
            'maxFontSizeMultiplier': 2,
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var5 = 20;
        var10 = var7[var5];
        var10 = var6.bind(var3)(var10);
        var13 = var10.intl;
        var12 = var13.formatToPlainString;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.t;
        var11 = var5.BjYvHO;
        var10 = {};
        var5 = 21;
        var14 = var7[var5];
        var17 = var6.bind(var3)(var14);
        var16 = var17.computeChannelName;
        var15 = _closure1_slot9;
        var14 = _closure1_slot8;
        var14 = var16.bind(var17)(var8, var15, var14);
        var10.channelName = var14;
        var10 = var12.bind(var13)(var11, var10);
        var0.accessibilityLabel = var10;
        var9 = var9.parentChannelName;
        var0.style = var9;
        var5 = var7[var5];
        var7 = var6.bind(var3)(var5);
        var6 = var7.computeChannelName;
        var5 = _closure1_slot9;
        var4 = _closure1_slot8;
        var4 = var6.bind(var7)(var8, var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var1 = _closure1_slot14;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var4.channelIconWrapper;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Pressable;
    var _closure1_slot5 = var7;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.Fragment;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'flexShrink': 1,
        'flexDirection': 'row',
        'height': '100%',
        'paddingEnd': 8
    };
    var4.wrapper = var9;
    var9 = {
        'flex': 1,
        'flexShrink': 1,
        'justifyContent': 'center'
    };
    var4.channelContent = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 1
    };
    var4.nameWithArrow = var9;
    var9 = {
        'flexShrink': 1,
        'fontSize': 18,
        'lineHeight': 24
    };
    var4.channelName = var9;
    var9 = {
        'tintColor': null,
        'flexShrink': 0,
        'flexGrow': 0,
        'marginTop': 2,
        'marginLeft': 2
    };
    var10 = 9;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var12;
    var4.arrowIcon = var9;
    var9 = {
        'marginRight': 12,
        'flexShrink': 0
    };
    var4.channelIcon = var9;
    var9 = {
        'width': 0,
        'height': 0,
        'opacity': 0,
        'flexGrow': 0
    };
    var4.hiddenPressable = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.channelIconWrapper = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STRONG;
    var9.tintColor = var12;
    var4.guildChannelIcon = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4,
        'marginBottom': 4
    };
    var4.subTitleContainer = var9;
    var9 = {
        'lineHeight': 16,
        'flexShrink': 1
    };
    var4.parentChannelName = var9;
    var9 = {
        'paddingLeft': 8,
        'paddingRight': 8
    };
    var4.eventsActionButtonWithText = var9;
    var9 = {
        'width': 8,
        'height': 8
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_POSITIVE;
    var9.backgroundColor = var10;
    var4.onlineIndicator = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot15;
        var1 = {};
        var0 = arg1;
        var1.onPress = var0;
        var0 = arg2;
        var1.pressAccessibilityLabel = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderTitleWrapper = var4;
    var4 = function arg0() {
        _fun72264: for (var _fun72264_ip = 0;;) switch (_fun72264_ip) {
            case 0:
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun72264_ip = 11;
                    continue _fun72264
                }
            case 9:
                var0 = {};
            case 11:
                var8 = var0.accessibleTitle;
                var7 = var0.subtitle;
                var1 = var0.disableArrow;
                var6 = var3 !== var1;
                if (!var6) {
                    _fun72264_ip = 39;
                    continue _fun72264
                }
            case 36:
                var6 = var1;
            case 39:
                var5 = var0.userId;
                var4 = var0.guildId;
                var2 = _closure1_slot11;
                var1 = _closure1_slot16;
                var0 = {};
                var9 = arg0;
                var0.title = var9;
                var0.accessibleTitle = var8;
                var0.subtitle = var7;
                var0.disableArrow = var6;
                var0.userId = var5;
                var0.guildId = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.renderChannelTitle = var4;
    var4 = function arg0() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot17;
        var1 = {};
        var0 = arg0;
        var1.channel = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderGroupDMIcon = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot18;
        var1 = {};
        var0 = arg0;
        var1.user = var0;
        var0 = arg1;
        var1.status = var0;
        var0 = arg2;
        var1.isMobileOnline = var0;
        var0 = arg3;
        var1.isVROnline = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderUserAvatar = var4;
    var2.renderChannelIconRaw = var3;
    var3 = function arg0, arg1() {
        _fun72267: for (var _fun72267_ip = 0;;) switch (_fun72267_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var3 = _closure1_slot19;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 18;
                var1 = var5[var0];
                var2 = undefined;
                var8 = var4.bind(var2)(var1);
                var1 = var8.getChannelIconWithGuild;
                var1 = var1.bind(var8)(var6, var7);
                var0 = var5[var0];
                var5 = var4.bind(var2)(var0);
                var4 = var5.getChannelIconComponent;
                var0 = {};
                var8 = null;
                var9 = var8 == var7;
                var8 = undefined;
                if (var9) {
                    _fun72267_ip = 81;
                    continue _fun72267
                }
            case 75:
                var8 = var7.rulesChannelId;
            case 81:
                var7 = var6.id;
                var7 = var8 === var7;
                var0.isRulesChannel = var7;
                var0 = var4.bind(var5)(var6, var0);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.renderChannelIcon = var3;
    var3 = function arg0, arg1() {
        _fun72268: for (var _fun72268_ip = 0;;) switch (_fun72268_ip) {
            case 0:
                var10 = arg0;
                var11 = arg1;
                var8 = arguments[2];
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun72268_ip = 17;
                    continue _fun72268
                }
            case 15:
                var8 = false;
            case 17:
                var0 = null;
                if (!(var0 == var10)) {
                    _fun72268_ip = 30;
                    continue _fun72268
                }
            case 23:
                if (!(var0 != var11)) {
                    _fun72268_ip = 215;
                    continue _fun72268
                }
            case 30:
                var13 = 'online';
                var1 = 0;
                var12 = var13;
                if (!(var1 === var10)) {
                    _fun72268_ip = 54;
                    continue _fun72268
                }
            case 43:
                var12 = var13;
                if (!(var0 !== var11)) {
                    _fun72268_ip = 54;
                    continue _fun72268
                }
            case 50:
                var12 = 'total';
            case 54:
                var3 = _closure1_slot13;
                var2 = _closure1_slot12;
                var1 = {};
                var9 = _closure1_slot11;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 19;
                var5 = var14[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.type = var12;
                if (!(var13 === var12)) {
                    _fun72268_ip = 104;
                    continue _fun72268
                }
            case 101:
                var11 = var10;
            case 104:
                var12 = var0 != var11;
                var10 = undefined;
                if (!var12) {
                    _fun72268_ip = 116;
                    continue _fun72268
                }
            case 113:
                var10 = var11;
            case 116:
                var5.count = var10;
                var10 = 'text-muted';
                var5.color = var10;
                var6 = var9.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                if (!var8) {
                    _fun72268_ip = 199;
                    continue _fun72268
                }
            case 150:
                var9 = _closure1_slot11;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 13;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-xs/medium',
                    'color': 'border-subtle',
                    'children': '•'
                };
                var6 = var9.bind(var4)(var8, var7);
            case 199:
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 215:
                return var0;
        }
    };
    var2.renderMemberCountText = var3;
    var3 = function arg0() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot21;
        var1 = {};
        var0 = arg0;
        var1.channel = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderParentChannelSubTitle = var3;
    var3 = function() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot22;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.renderEmptyIcon = var3;
    var1 = function arg0() {
        _fun72271: for (var _fun72271_ip = 0;;) switch (_fun72271_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guild;
                var _closure2_slot0 = var9;
                var1 = _closure1_slot14;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 22;
                var1 = var11[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var9.id;
                var1 = var2.bind(var3)(var1);
                var6 = var1.length;
                var12 = _closure1_slot0;
                var1 = 23;
                var1 = var11[var1];
                var8 = var12.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot10;
                    var0 = var0.GUILD_EVENT;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var4.bind(var8)(var2, var1);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGuildEventListActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var0 = 25;
                var0 = var11[var0];
                var1 = var10.bind(var3)(var0);
                var0 = {};
                var9 = 26;
                var9 = var11[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.CalendarIcon;
                var0.IconComponent = var9;
                var9 = 27;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var0.source = var9;
                var0.onPress = var4;
                var4 = 0;
                if (!(!(var6 > var4))) {
                    _fun72271_ip = 261;
                    continue _fun72271
                }
            case 204:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 20;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.tlopTM;
                var9 = var10.bind(var11)(var9);
                _fun72271_ip = 324;
                continue _fun72271;
            case 261:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 20;
                var12 = var14[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.IBdqSu;
                var10 = {};
                var10.number = var6;
                var9 = var12.bind(var13)(var11, var10);
            case 324:
                var0.accessibilityLabel = var9;
                var0.badge = var8;
                var9 = var6 > var4;
                var8 = undefined;
                if (!var9) {
                    _fun72271_ip = 351;
                    continue _fun72271
                }
            case 342:
                var9 = var6.toString;
                var8 = var9.bind(var6)();
            case 351:
                var0.buttonText = var8;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var0.hitSlop = var7;
                var6 = var6 > var4;
                var4 = null;
                if (!var6) {
                    _fun72271_ip = 407;
                    continue _fun72271
                }
            case 401:
                var4 = var5.eventsActionButtonWithText;
            case 407:
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.EventsActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3938, 3091, 1613, 4300, 33, 1297, 671, 4897, 478, 6913, 3932, 4077, 9019, 9020, 5447, 4802, 9021, 1234, 4787, 8075, 566, 8090, 8982, 8176, 8173, 2]);