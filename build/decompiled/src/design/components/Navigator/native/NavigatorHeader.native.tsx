// design/components/Navigator/native/NavigatorHeader.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var3 = function() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ArrowLargeLeftIcon;
        var0 = {};
        var5 = 'md';
        var0.size = var5;
        var4 = var4.headerButtonIcon;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = function arg0() {
        _fun43638: for (var _fun43638_ip = 0;;) switch (_fun43638_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.onPress;
                var1 = null;
                var2 = Object.create(var1);
                var0 = 0;
                var2.onPress = var0;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var6 = copyDataProperties(var12, var11, var10);
                var3 = undefined;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot8;
                var2 = var2.bind(var3)();
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useNavigation;
                var2 = var2.bind(var5)();
                var _closure2_slot1 = var2;
                if (!(var1 == var7)) {
                    _fun43638_ip = 97;
                    continue _fun43638
                }
            case 92:
                var7 = function() { // Environment: var4
                    var1 = _closure2_slot1;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
            case 97:
                _closure2_slot2 = var7;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var9 = var1.bind(var3)(var2);
                var5 = var9.useNavigatorBackPressHandler;
                var2 = function() { // Environment: var4
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var2 = var5.bind(var9)(var2);
                var2 = 11;
                var5 = var8[var2];
                var5 = var1.bind(var3)(var5);
                var9 = var5.intl;
                var5 = var9.string;
                var2 = var8[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.cpT0Cq;
                var5 = var5.bind(var9)(var2);
                var2 = _closure1_slot6;
                var0 = 12;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.HeaderBackButton;
                var0 = {};
                var12 = var0;
                var11 = var6;
                var6 = copyDataProperties(var12, var11);
                var6 = 'onPress';
                var0[var6] = var7;
                var6 = 'label';
                var0[var6] = var5;
                var7 = false;
                var6 = 'labelVisible';
                var0[var6] = var7;
                var6 = function arg0() {
                    var0 = arg0;
                    var6 = var0.tintColor;
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.XSmallIcon;
                    var0 = {};
                    var4 = 'md';
                    var0.size = var4;
                    var4 = _closure2_slot0;
                    var5 = var4.headerButtonIcon;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var5.tintColor = var6;
                    var4[1] = var5;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4 = 'backImage';
                var0[var4] = var6;
                var4 = 'accessibilityLabel';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var6 = var2.onPress;
        var _closure2_slot0 = var6;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.onPress = var0;
        var12 = {};
        var11 = var2;
        var10 = var1;
        var11 = copyDataProperties(var12, var11, var10);
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 10;
        var2 = var7[var2];
        var3 = undefined;
        var9 = var1.bind(var3)(var2);
        var8 = var9.useNavigatorBackPressHandler;
        var2 = function() { // Environment: var4
            _fun43643: for (var _fun43643_ip = 0;;) switch (_fun43643_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun43643_ip = 26;
                        continue _fun43643
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 26:
                    return var0;
            }
        };
        var2 = var8.bind(var9)(var2);
        var2 = _closure1_slot6;
        var0 = 12;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.HeaderBackButton;
        var0 = {};
        var12 = var0;
        var5 = copyDataProperties(var12, var11);
        var5 = 'onPress';
        var0[var5] = var6;
        var6 = false;
        var5 = 'labelVisible';
        var0[var5] = var6;
        var5 = function() {
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = undefined;
            var0 = {};
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4 = 'backImage';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun43645: for (var _fun43645_ip = 0;;) switch (_fun43645_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.text;
                var1 = var3.labelStyle;
                var0 = null;
                var2 = Object.create(var0);
                var0 = 0;
                var2.text = var0;
                var2.labelStyle = var0;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var5 = copyDataProperties(var12, var11, var10);
                var2 = {};
                var6 = _closure1_slot8;
                var3 = undefined;
                var6 = var6.bind(var3)();
                var11 = var6.headerBackTitleStyle;
                var12 = var2;
                var6 = copyDataProperties(var12, var11);
                var7 = 16;
                var6 = 'marginHorizontal';
                var2[var6] = var7;
                var8 = new Array(2);
                var8[0] = var2;
                var8[1] = var1;
                var2 = _closure1_slot6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.HeaderBackButton;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var5 = 'label';
                var0[var5] = var4;
                var9 = true;
                var5 = 'labelVisible';
                var0[var5] = var9;
                var5 = 'labelStyle';
                var0[var5] = var8;
                var8 = function() {
                    var0 = null;
                    return var0;
                };
                var5 = 'backImage';
                var0[var5] = var8;
                var5 = 14;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.isAndroid;
                var6 = var5.bind(var6)();
                var5 = undefined;
                if (!var6) {
                    _fun43645_ip = 211;
                    continue _fun43645
                }
            case 208:
                var5 = var4;
            case 211:
                var4 = 'accessibilityLabel';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var5);
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot4 = var5;
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var12 = var4.Fonts;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot6 = var5;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var7[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var13 = 'hidden';
    var9.overflow = var13;
    var4.fauxHeaderWrapper = var9;
    var9 = {};
    var13 = 7;
    var13 = var7[var13];
    var13 = var6.bind(var0)(var13);
    var13 = var13.TextStyleSheet;
    var16 = var13["redesign/heading-18/bold"];
    var17 = var9;
    var13 = copyDataProperties(var17, var16);
    var13 = var7[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var13 = 'color';
    var9[var13] = var14;
    var4.headerTitle = var9;
    var9 = {
        'fontFamily': null,
        'fontSize': 16,
        'letterSpacing': 0,
        'lineHeight': 20
    };
    var12 = var12.PRIMARY_MEDIUM;
    var9.fontFamily = var12;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var12;
    var4.headerBackTitleStyle = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.navigatorHeaderTitleContainer = var9;
    var9 = {
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.navigatorHeaderContainer = var9;
    var9 = {};
    var12 = -2;
    var9.marginTop = var12;
    var4.navigatorHeaderSubtitle = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9.tintColor = var12;
    var4.headerButtonIcon = var9;
    var9 = {
        'width': 22,
        'height': 22
    };
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var10;
    var4.submittingIndicator = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/Navigator/native/NavigatorHeader.native.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useStyles = var4;
    var4 = function arg0() {
        _fun43647: for (var _fun43647_ip = 0;;) switch (_fun43647_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.title;
                var9 = var0.subtitle;
                var7 = var0.icon;
                var0 = _closure1_slot8;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.navigatorHeaderContainer;
                var0.style = var4;
                var4 = {};
                var5 = var10.navigatorHeaderTitleContainer;
                var4.style = var5;
                var5 = new Array(2);
                var5[0] = var7;
                var12 = _closure1_slot6;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 7;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'accessibilityRole': 'header',
                    'aria-level': '1',
                    'lineClamp': 1,
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var7.children = var13;
                var7 = var12.bind(var3)(var8, var7);
                var5[1] = var7;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var9;
                if (!var5) {
                    _fun43647_ip = 164;
                    continue _fun43647
                }
            case 156:
                var7 = '';
                var5 = var7 !== var9;
            case 164:
                if (!var5) {
                    _fun43647_ip = 229;
                    continue _fun43647
                }
            case 167:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var10 = var10.navigatorHeaderSubtitle;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 229:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.NavigatorHeader = var4;
    var2.HeaderBackImage = var3;
    var3 = function() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot9;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.renderBackImage = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure1_slot10;
            var1 = {};
            var5 = arg0;
            var6 = var1;
            var0 = copyDataProperties(var6, var5);
            var4 = _closure2_slot0;
            var0 = 'onPress';
            var1[var0] = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        return var0;
    };
    var2.getHeaderCloseButton = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = arg0;
            var1 = var3.onPress;
            var _closure3_slot0 = var1;
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2.onPress = var1;
            var8 = {};
            var7 = var3;
            var6 = var2;
            var7 = copyDataProperties(var8, var7, var6);
            var0 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun43655: for (var _fun43655_ip = 0;;) switch (_fun43655_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun43655_ip = 60;
                                    continue _fun43655
                                }
                            case 7:
                                var1 = _closure2_slot0;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun43655_ip = 57;
                                    continue _fun43655
                                }
                            case 30:
                                if (!var1) {
                                    _fun43655_ip = 54;
                                    continue _fun43655
                                }
                            case 33:
                                var5 = _closure3_slot0;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun43655_ip = 54;
                                    continue _fun43655
                                }
                            case 46:
                                var3 = _closure3_slot0;
                                var3 = var3.bind(var2)();
                            case 54:
                                return var2;
                            case 57:
                                return var1;
                            case 60:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var3 = undefined;
            var5 = var0.bind(var3)();
            var2 = _closure1_slot6;
            var1 = _closure1_slot11;
            var0 = {};
            var8 = var0;
            var4 = copyDataProperties(var8, var7);
            var4 = 'onPress';
            var0[var4] = var5;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        return var0;
    };
    var2.getHeaderConditionalBackButton = var3;
    var3 = function arg0() {
        _fun43657: for (var _fun43657_ip = 0;;) switch (_fun43657_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun43657_ip = 20;
                    continue _fun43657
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var1;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var1 = var3.onPress;
                    var _closure3_slot0 = var1;
                    var1 = null;
                    var2 = Object.create(var1);
                    var1 = 0;
                    var2.onPress = var1;
                    var7 = {};
                    var6 = var3;
                    var5 = var2;
                    var6 = copyDataProperties(var7, var6, var5);
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var4 = function() {
                        _fun43659: for (var _fun43659_ip = 0;;) switch (_fun43659_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun43659_ip = 23;
                                    continue _fun43659
                                }
                            case 13:
                                var3 = _closure2_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)();
                            case 23:
                                var0 = _closure2_slot1;
                                var0 = !var0;
                                if (!var0) {
                                    _fun43659_ip = 54;
                                    continue _fun43659
                                }
                            case 33:
                                var1 = _closure3_slot0;
                                if (!(var2 != var1)) {
                                    _fun43659_ip = 54;
                                    continue _fun43659
                                }
                            case 44:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 'onPress';
                    var1[var0] = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                return var0;
        }
    };
    var2.getHeaderBackButton = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure1_slot12;
            var1 = {};
            var6 = arg0;
            var7 = var1;
            var0 = copyDataProperties(var7, var6);
            var5 = _closure2_slot0;
            var4 = 'text';
            var1[var4] = var5;
            var4 = _closure2_slot1;
            var0 = 'onPress';
            var1[var0] = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        return var0;
    };
    var2.getHeaderTextButton = var3;
    var3 = function() {
        var0 = function() { // Environment: var0
            var0 = null;
            return var0;
        };
        return var0;
    };
    var2.getHeaderNoTitle = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var6 = var0.style;
        var0 = _closure1_slot8;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 15;
        var0 = var11[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var9 = var0.top;
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var5.fauxHeaderWrapper;
        var5 = new Array(3);
        var5[0] = var7;
        var7 = {};
        var7.paddingTop = var9;
        var10 = _closure1_slot0;
        var8 = 16;
        var8 = var11[var8];
        var8 = var10.bind(var3)(var8);
        var8 = var8.NAV_BAR_HEIGHT;
        var8 = var9 + var8;
        var7.height = var8;
        var5[1] = var7;
        var5[2] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.FauxHeader = var3;
    var1 = function() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = true;
        var0.animating = var5;
        var5 = var4.submittingIndicator;
        var0.style = var5;
        var4 = var4.submittingIndicator;
        var4 = var4.color;
        var0.color = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.HeaderSubmittingIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 33, 1297, 671, 3941, 4706, 1470, 4708, 1234, 4709, 4732, 478, 1568, 4703, 2]);