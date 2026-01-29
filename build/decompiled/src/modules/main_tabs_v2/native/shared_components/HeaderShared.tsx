// modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var10;
    var7 = function(arg0) { // Original name: GenericHeaderTitle, environment: var1
        _fun70846: for (var _fun70846_ip = 0;;) switch (_fun70846_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.title;
                var _closure2_slot0 = var2;
                var9 = var1.subtitle;
                var2 = var1.color;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun70846_ip = 37;
                    continue _fun70846
                }
            case 31:
                var2 = 'mobile-text-heading-primary';
            case 37:
                var _closure2_slot1 = var2;
                var11 = var1.subtitleColor;
                if (!(var11 === var3)) {
                    _fun70846_ip = 57;
                    continue _fun70846
                }
            case 51:
                var11 = 'text-default';
            case 57:
                var2 = var1.icon;
                var _closure2_slot2 = var2;
                var1 = var1.variant;
                if (!(var1 === var3)) {
                    _fun70846_ip = 79;
                    continue _fun70846
                }
            case 75:
                var1 = 'heading-md/bold';
            case 79:
                var _closure2_slot3 = var1;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot8;
                var10 = var1.bind(var3)();
                _closure2_slot4 = var10;
                var2 = function(arg0) { // Original name: renderTitle, environment: var0
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {};
                    var4 = arg0;
                    var0.accessibilityRole = var4;
                    var4 = 1;
                    var0.lineClamp = var4;
                    var4 = _closure2_slot3;
                    var0.variant = var4;
                    var4 = _closure2_slot1;
                    var0.color = var4;
                    var4 = _closure2_slot4;
                    var4 = var4.headerText;
                    var0.style = var4;
                    var6 = _closure2_slot2;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = _closure2_slot0;
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0 = null;
                if (!(var0 != var9)) {
                    _fun70846_ip = 232;
                    continue _fun70846
                }
            case 115:
                var4 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {
                    'accessible': true,
                    'accessibilityRole': 'header'
                };
                var7 = var2.bind(var3)();
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 6;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/medium'
                };
                var6.color = var11;
                var10 = var10.subtitleText;
                var6.style = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var4.bind(var3)(var1, var0);
                _fun70846_ip = 241;
                continue _fun70846;
            case 232:
                var1 = 'header';
                var0 = var2.bind(var3)(var1);
            case 241:
                return var0;
        }
    };
    var _closure1_slot10 = var7;
    var6 = function(arg0) { // Original name: renderGenericTitle, environment: var1
        var0 = arg0;
        var0 = var0.children;
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1.title = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var6;
    var5 = function(arg0) { // Original name: HeaderTextButton, environment: var1
        var2 = arg0;
        var6 = var2.labelStyle;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.labelStyle = var0;
        var10 = {};
        var9 = var2;
        var8 = var1;
        var9 = copyDataProperties(var10, var9, var8);
        var1 = _closure1_slot8;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 7;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.HeaderBackButton;
        var0 = {};
        var7 = var5.backButtonLabel;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.labelStyle = var5;
        var5 = true;
        var0.labelVisible = var5;
        var5 = function() { // Original name: backImage, environment: var5
            var0 = null;
            return var0;
        };
        var0.backImage = var5;
        var10 = var0;
        var4 = copyDataProperties(var10, var9);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var5;
    var4 = function(arg0) { // Original name: getRenderBackImage, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot7;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.PressableNavigatorBackIcon;
            var0 = {};
            var6 = arg0;
            var7 = var0;
            var4 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var4 = 'navigation';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot13 = var4;
    var0 = function(arg0) { // Original name: HeaderChannelActions, environment: var1
        var0 = arg0;
        var4 = var0.route;
        var5 = var0.screenIndex;
        var1 = _closure1_slot8;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 16;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var6 = var6.headerRightContainer;
        var0.containerStyle = var6;
        var8 = var4.params;
        var9 = var0;
        var4 = copyDataProperties(var9, var8);
        var4 = 'screenIndex';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var11 = var0.Object;
    var8 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var3);
    var0 = 0;
    var8 = var10[var0];
    var3 = arg3;
    var0 = undefined;
    var13 = var3.bind(var0)(var8);
    var _closure1_slot3 = var13;
    var3 = 1;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot4 = var8;
    var3 = var3.Platform;
    var3 = 2;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var3.MIN_HEADER_HEIGHT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var8 = var3.jsxs;
    var _closure1_slot6 = var8;
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var10[var3];
    var12 = var9.bind(var0)(var3);
    var11 = var12.createStyles;
    var3 = {};
    var8 = {};
    var14 = 16;
    var8.marginRight = var14;
    var3.headerRightContainer = var8;
    var8 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 0,
        'flexGrow': 1,
        'borderColor': null,
        'borderBottomWidth': 1
    };
    var15 = 5;
    var14 = var10[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var14;
    var17 = 'center';
    var14 = var10[var15];
    var14 = var16.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.borderColor = var14;
    var3.headerWrapper = var8;
    var8 = 20;
    var14 = {
        'padding': 8,
        'zIndex': 100,
        'width': 40,
        'height': 40,
        'borderRadius': 20
    };
    var3.actionButtonPressable = var14;
    var14 = {};
    var18 = var10[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_TEXT_DEFAULT;
    var14.tintColor = var18;
    var3.actionButtonIcon = var14;
    var14 = {
        'textAlign': 'center',
        'fontSize': 18
    };
    var3.headerText = var14;
    var14 = {};
    var14.textAlign = var17;
    var3.subtitleText = var14;
    var14 = {};
    var17 = 6;
    var17 = var10[var17];
    var17 = var9.bind(var0)(var17);
    var17 = var17.TextStyleSheet;
    var20 = var17["text-md/semibold"];
    var21 = var14;
    var17 = copyDataProperties(var21, var20);
    var15 = var10[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.TEXT_BRAND;
    var15 = 'color';
    var14[var15] = var16;
    var3.backButtonLabel = var14;
    var3 = var11.bind(var12)(var3);
    var _closure1_slot8 = var3;
    var12 = var13.memo;
    var11 = function(arg0) { // Original name: HeaderInner, environment: var1
        _fun70854: for (var _fun70854_ip = 0;;) switch (_fun70854_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.navigation;
                var12 = var0.options;
                var16 = var0.back;
                var13 = var0.route;
                var5 = var0.shouldHandleSafeArea;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun70854_ip = 44;
                    continue _fun70854
                }
            case 42:
                var5 = true;
            case 44:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot8;
                var2 = var2.bind(var3)();
                _closure2_slot0 = var2;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = var4.top;
                var15 = 0;
                if (!var5) {
                    _fun70854_ip = 108;
                    continue _fun70854
                }
            case 105:
                var15 = var4;
            case 108:
                _closure2_slot1 = var15;
                var6 = var12.headerLeft;
                if (!(var3 === var6)) {
                    _fun70854_ip = 131;
                    continue _fun70854
                }
            case 122:
                var4 = _closure1_slot13;
                var6 = var4.bind(var3)(var11);
            case 131:
                var10 = var12.headerTitle;
                var7 = var12.headerRight;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 12;
                var4 = var9[var4];
                var8 = var5.bind(var3)(var4);
                var4 = var8.useTheme;
                var4 = var4.bind(var8)();
                var4 = var4.colors;
                var8 = var4.text;
                var4 = 13;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.useGradientTop;
                var14 = var4.bind(var5)();
                _closure2_slot2 = var14;
                var9 = _closure1_slot3;
                var5 = var9.useMemo;
                var4 = new Array(3);
                var4[0] = var15;
                var4[1] = var14;
                var4[2] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.headerWrapper;
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = _closure2_slot2;
                    var0[1] = var1;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1.paddingTop = var3;
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot5;
                    var2 = var3 + var2;
                    var1.minHeight = var2;
                    var0[2] = var1;
                    return var0;
                };
                var4 = var5.bind(var9)(var2, var4);
                var5 = 'string';
                var2 = typeof var10;
                var14 = var5 === var2;
                if (var14) {
                    _fun70854_ip = 270;
                    continue _fun70854
                }
            case 261:
                var2 = null;
                var9 = var10;
                if (!(var2 == var10)) {
                    _fun70854_ip = 274;
                    continue _fun70854
                }
            case 270:
                var9 = _closure1_slot11;
            case 274:
                var5 = _closure1_slot3;
                var2 = var5.useLayoutEffect;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var0 = {};
                    var3 = 0;
                    var0.duration = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var5)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var4;
                var4 = {};
                var5 = null;
                var17 = var5 == var16;
                var15 = undefined;
                if (var17) {
                    _fun70854_ip = 328;
                    continue _fun70854
                }
            case 323:
                var15 = var16.title;
            case 328:
                var4.label = var15;
                var15 = var11.isFocused;
                var15 = var15.bind(var11)();
                if (!var15) {
                    _fun70854_ip = 355;
                    continue _fun70854
                }
            case 345:
                var16 = var11.canGoBack;
                var15 = var16.bind(var11)();
            case 355:
                var4.canGoBack = var15;
                var4.tintColor = var8;
                var6 = var6.bind(var3)(var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = {};
                if (var14) {
                    _fun70854_ip = 400;
                    continue _fun70854
                }
            case 383:
                var12 = var12.title;
                if (!(var5 == var12)) {
                    _fun70854_ip = 397;
                    continue _fun70854
                }
            case 392:
                var12 = var13.name;
            case 397:
                var10 = var12;
            case 400:
                var6.children = var10;
                var6.tintColor = var8;
                var6 = var9.bind(var3)(var6);
                var4[1] = var6;
                var6 = var5 == var7;
                var5 = undefined;
                if (var6) {
                    _fun70854_ip = 467;
                    continue _fun70854
                }
            case 427:
                var6 = {};
                var9 = var11.isFocused;
                var9 = var9.bind(var11)();
                if (!var9) {
                    _fun70854_ip = 452;
                    continue _fun70854
                }
            case 442:
                var10 = var11.canGoBack;
                var9 = var10.bind(var11)();
            case 452:
                var6.canGoBack = var9;
                var6.tintColor = var8;
                var5 = var7.bind(var3)(var6);
            case 467:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = function(arg0, arg1) { // Environment: var1
        _fun70857: for (var _fun70857_ip = 0;;) switch (_fun70857_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 15;
                var0 = var0[var6];
                var4 = undefined;
                var5 = var5.bind(var4)(var0);
                var0 = ['back'];
                var0 = var5.bind(var4)(var2, var1, var0);
                var5 = !var0;
                var0 = !var5;
                if (var5) {
                    _fun70857_ip = 106;
                    continue _fun70857
                }
            case 57:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var4)(var3);
                var2 = var2.back;
                var5 = null;
                if (!(var5 == var2)) {
                    _fun70857_ip = 88;
                    continue _fun70857
                }
            case 86:
                var2 = {};
            case 88:
                var1 = var1.back;
                if (!(var5 == var1)) {
                    _fun70857_ip = 100;
                    continue _fun70857
                }
            case 98:
                var1 = {};
            case 100:
                var0 = var3.bind(var4)(var2, var1);
            case 106:
                return var0;
        }
    };
    var3 = var12.bind(var13)(var11, var3);
    var _closure1_slot9 = var3;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/main_tabs_v2/native/shared_components/HeaderShared.tsx';
    var8 = var9.bind(var10)(var8);
    var2.GenericHeaderTitle = var7;
    var2.renderGenericTitle = var6;
    var2.HeaderTextButton = var5;
    var5 = function(arg0, arg1) { // Original name: getRenderHeaderTextButton, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot7;
            var2 = _closure1_slot12;
            var1 = {};
            var4 = _closure2_slot0;
            var1.label = var4;
            var0 = _closure2_slot1;
            var1.onPress = var0;
            var5 = arg0;
            var6 = var1;
            var0 = copyDataProperties(var6, var5);
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        return var0;
    };
    var2.getRenderHeaderTextButton = var5;
    var5 = function(arg0) { // Original name: renderHeader, environment: var1
        var3 = _closure1_slot7;
        var2 = _closure1_slot9;
        var1 = {};
        var4 = arg0;
        var5 = var1;
        var0 = copyDataProperties(var5, var4);
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderHeader = var5;
    var2.getRenderBackImage = var4;
    var4 = function(arg0) { // Original name: getRenderModalBackImage, environment: var1
        _fun70861: for (var _fun70861_ip = 0;;) switch (_fun70861_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun70861_ip = 56;
                    continue _fun70861
                }
            case 47:
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.navigation = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                return var1;
            case 56:
                return var0;
        }
    };
    var2.getRenderModalBackImage = var4;
    var4 = function(arg0) { // Original name: getRenderModalCloseImage, environment: var1
        _fun70863: for (var _fun70863_ip = 0;;) switch (_fun70863_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun70863_ip = 56;
                    continue _fun70863
                }
            case 47:
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.navigation = var4;
                    var4 = 'close';
                    var0.type = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                return var1;
            case 56:
                return var0;
        }
    };
    var2.getRenderModalCloseImage = var4;
    var2.Header = var3;
    var3 = function(arg0) { // Original name: getDefaultStackHeaderProps, environment: var1
        var0 = {};
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg0;
        var2 = var4.bind(var3)(var2);
        var0.headerLeft = var2;
        var1 = _closure1_slot11;
        var0.headerTitle = var1;
        var1 = false;
        var0.headerBackVisible = var1;
        return var0;
    };
    var2.getDefaultStackHeaderProps = var3;
    var3 = function(arg0, arg1) { // Original name: getDefaultChannelStackHeaderProps, environment: var1
        _fun70866: for (var _fun70866_ip = 0;;) switch (_fun70866_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = var0.name;
                var5 = 'none';
                var2 = 'channel';
                var0 = var5;
                if (!(var2 === var3)) {
                    _fun70866_ip = 81;
                    continue _fun70866
                }
            case 32:
                var2 = var4.getState;
                var2 = var2.bind(var4)();
                var6 = var2.routes;
                var3 = var6.findIndex;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var0.key;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var6)(var2);
                var3 = null;
                var3 = var3 != var2;
                var0 = var5;
                if (!var3) {
                    _fun70866_ip = 81;
                    continue _fun70866
                }
            case 78:
                var0 = var2;
            case 81:
                var _closure2_slot1 = var0;
                var0 = {};
                var3 = _closure1_slot13;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var0.headerLeft = var2;
                var2 = function() { // Original name: headerTitle, environment: var1
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.params;
                    var8 = var0;
                    var5 = copyDataProperties(var8, var7);
                    var6 = true;
                    var5 = 'isNavigationScreen';
                    var0[var5] = var6;
                    var5 = _closure2_slot1;
                    var4 = 'screenIndex';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.headerTitle = var2;
                var1 = function() { // Original name: headerRight, environment: var1
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.route = var4;
                    var0 = _closure2_slot1;
                    var1.screenIndex = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.headerRight = var1;
                var1 = false;
                var0.headerBackVisible = var1;
                return var0;
        }
    };
    var2.getDefaultChannelStackHeaderProps = var3;
    var1 = function(arg0) { // Original name: HeaderIconButton, environment: var1
        _fun70870: for (var _fun70870_ip = 0;;) switch (_fun70870_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.accessibilityLabel;
                var5 = var0.onPress;
                var8 = var0.source;
                var7 = var0.resizeMode;
                var9 = var0.color;
                var0 = _closure1_slot8;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 18;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var12 = 'button';
                var0.accessibilityRole = var12;
                var0.accessibilityLabel = var6;
                var6 = var10.actionButtonPressable;
                var0.style = var6;
                var0.onPress = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = 19;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var11 = null;
                if (!(var11 == var9)) {
                    _fun70870_ip = 139;
                    continue _fun70870
                }
            case 127:
                var10 = var10.actionButtonIcon;
                var9 = var10.tintColor;
            case 139:
                var4.color = var9;
                var4.source = var8;
                var4.resizeMode = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HeaderIconButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8845, 33, 1297, 671, 3895, 4665, 8846, 478, 8851, 1568, 1470, 8853, 4851, 628, 8854, 8972, 4858, 4039, 2]);