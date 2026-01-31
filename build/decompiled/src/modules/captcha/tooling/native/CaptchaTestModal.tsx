// modules/captcha/tooling/native/CaptchaTestModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var7 = global;
    var8 = var7.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var6 = var5[var3];
    var11 = var4.bind(var0)(var6);
    var8 = var11.createStyles;
    var6 = {};
    var12 = {
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var9 = 6;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var14;
    var6.container = var12;
    var12 = {};
    var12.height = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var12.marginVertical = var13;
    var6.separator = var12;
    var12 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.marginBottom = var13;
    var6.footerContainer = var12;
    var12 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.paddingHorizontal = var13;
    var6.footerButton = var12;
    var12 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.margin = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var12.gap = var13;
    var6.content = var12;
    var6 = var8.bind(var11)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var12 = var8.HCAPTCHA_DIFFICULTY_OPTIONS;
    var11 = var12.map;
    var8 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.label;
        var1 = var0.value;
        var0 = {};
        var0.name = var2;
        var0.value = var1;
        return var0;
    };
    var8 = var11.bind(var12)(var8);
    var _closure1_slot10 = var8;
    var11 = var7.Set;
    var8 = 8;
    var7 = var5[var8];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CaptchaDeciderType;
    var12 = var7.HCAPTCHA_RQDATA;
    var7 = new Array(2);
    var7[0] = var12;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CaptchaDeciderType;
    var8 = var8.SMITE_RQDATA;
    var7[1] = var8;
    var8 = var11.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var11
        }
    });
    var18 = var8;
    var17 = var7;
    var7 = new var18[var11](var17, var16);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.CAPTCHA_DECIDER_TYPE_OPTIONS;
    var7 = var8.map;
    var6 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.label;
        var1 = var0.value;
        var0 = {};
        var0.name = var2;
        var0.value = var1;
        return var0;
    };
    var8 = var7.bind(var8)(var6);
    var7 = var8.filter;
    var6 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.value;
        var1 = _closure1_slot11;
        var0 = var1.has;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var6 = {};
    var7 = 'TEST_CAPTCHA';
    var6.TEST_CAPTCHA = var7;
    var _closure1_slot13 = var6;
    var6 = function(arg0) { // Original name: CaptchaTestScreen, environment: var1
        _fun86414: for (var _fun86414_ip = 0;;) switch (_fun86414_ip) {
            case 0:
                var1 = arg0;
                var9 = null;
                if (!(var1 != var9)) {
                    _fun86414_ip = 656;
                    continue _fun86414
                }
            case 14:
                var4 = undefined;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot9;
                var13 = var0.bind(var4)();
                var7 = _closure1_slot5;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var9);
                var6 = _closure1_slot4;
                var5 = 2;
                var0 = var6.bind(var4)(var0, var5);
                var3 = 0;
                var8 = var0[var3];
                _closure2_slot0 = var8;
                var2 = 1;
                var0 = var0[var2];
                _closure2_slot1 = var0;
                var0 = var7.useState;
                var0 = var0.bind(var7)(var9);
                var0 = var6.bind(var4)(var0, var5);
                var20 = var0[var3];
                _closure2_slot2 = var20;
                var0 = var0[var2];
                _closure2_slot3 = var0;
                var0 = function() { // Environment: var19
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86417: for (var _fun86417_ip = 0;;) switch (_fun86417_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86417_ip = 216;
                                        continue _fun86417
                                    }
                                case 10:
                                    var1 = _closure2_slot0;
                                    if (!var1) {
                                        _fun86417_ip = 211;
                                        continue _fun86417
                                    }
                                case 23: // try_start_0
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var4[var1];
                                    var4 = undefined;
                                    var6 = var3.bind(var4)(var1);
                                    var5 = var6.testCaptcha;
                                    var3 = _closure2_slot0;
                                    var1 = {};
                                    var9 = _closure2_slot2;
                                    var7 = null;
                                    var9 = var7 != var9;
                                    var7 = undefined;
                                    if (!var9) {
                                        _fun86417_ip = 79;
                                        continue _fun86417
                                    }
                                case 75:
                                    var7 = _closure2_slot2;
                                case 79:
                                    var1.difficulty = var7;
                                    var1 = var5.bind(var6)(var3, var1);
                                    SaveGenerator(address = 96);
                                case 94:
                                    return var1;
                                case 96:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun86417_ip = 149;
                                        continue _fun86417
                                    }
                                case 102:
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 9;
                                    var2 = var5[var2];
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.open;
                                    var2 = {
                                        'key': 'captcha-test-modal-success',
                                        'content': 'Captcha completed!'
                                    };
                                    var2 = var3.bind(var4)(var2);
                                case 147: // try_end0
                                    _fun86417_ip = 211;
                                    continue _fun86417;
                                case 149:
                                    return var1;
                                case 152: // catch_target0
                                    CatchBlockStart(arg_register = 4);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 9;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.open;
                                    var1 = {};
                                    var5 = 'captcha-test-modal-error';
                                    var1.key = var5;
                                    var4 = var4.message;
                                    var1.content = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 211:
                                    var1 = undefined;
                                    return var1;
                                case 216:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var15 = var0.bind(var4)();
                var3 = _closure1_slot8;
                var2 = _closure1_slot6;
                var0 = {};
                var5 = var13.container;
                var0.style = var5;
                var5 = {};
                var6 = var13.content;
                var5.style = var6;
                var6 = {};
                var18 = _closure1_slot7;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 10;
                var7 = var11[var12];
                var7 = var9.bind(var4)(var7);
                var14 = var7.Text;
                var7 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary',
                    'children': 'Decider'
                };
                var14 = var18.bind(var4)(var14, var7);
                var7 = new Array(2);
                var7[0] = var14;
                var16 = _closure1_slot1;
                var21 = 11;
                var14 = var11[var21];
                var16 = var16.bind(var4)(var14);
                var14 = {};
                var17 = true;
                var14.withSpacing = var17;
                var14.value = var8;
                var22 = _closure1_slot12;
                var14.options = var22;
                var22 = function(arg0) { // Original name: onChange, environment: var19
                    _fun86419: for (var _fun86419_ip = 0;;) switch (_fun86419_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.value;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var0);
                            var0 = var0.CaptchaDeciderType;
                            var0 = var0.HCAPTCHA_RQDATA;
                            if (!(var2 !== var0)) {
                                _fun86419_ip = 63;
                                continue _fun86419
                            }
                        case 49:
                            var3 = _closure2_slot3;
                            var0 = null;
                            var0 = var3.bind(var1)(var0);
                        case 63:
                            var0 = _closure2_slot1;
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var14.onChange = var22;
                var14 = var18.bind(var4)(var16, var14);
                var7[1] = var14;
                var6.children = var7;
                var7 = var3.bind(var4)(var2, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = 8;
                var7 = var11[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.CaptchaDeciderType;
                var7 = var7.HCAPTCHA_RQDATA;
                var7 = var8 === var7;
                if (!var7) {
                    _fun86414_ip = 462;
                    continue _fun86414
                }
            case 334:
                var11 = _closure1_slot8;
                var9 = _closure1_slot6;
                var8 = {};
                var18 = _closure1_slot7;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = var14[var12];
                var12 = var16.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary',
                    'children': 'Difficulty'
                };
                var16 = var18.bind(var4)(var16, var12);
                var12 = new Array(2);
                var12[0] = var16;
                var16 = _closure1_slot1;
                var14 = var14[var21];
                var16 = var16.bind(var4)(var14);
                var14 = {};
                var14.withSpacing = var17;
                var14.value = var20;
                var20 = _closure1_slot10;
                var14.options = var20;
                var19 = function(arg0) { // Original name: onChange, environment: var19
                    _fun86420: for (var _fun86420_ip = 0;;) switch (_fun86420_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.value;
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 8;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var5.bind(var2)(var0);
                            var0 = var0.CaptchaDeciderType;
                            var0 = var0.HCAPTCHA_RQDATA;
                            var0 = var4 === var0;
                            if (!var0) {
                                _fun86420_ip = 68;
                                continue _fun86420
                            }
                        case 59:
                            var1 = _closure2_slot3;
                            var0 = var1.bind(var2)(var3);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14.onChange = var19;
                var14 = var18.bind(var4)(var16, var14);
                var12[1] = var14;
                var8.children = var12;
                var7 = var11.bind(var4)(var9, var8);
            case 462:
                var6[1] = var7;
                var5.children = var6;
                var6 = var3.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot8;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var13.footerContainer;
                var6.style = var9;
                var12 = _closure1_slot7;
                var9 = {};
                var11 = var13.separator;
                var9.style = var11;
                var11 = var12.bind(var4)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 12;
                var10 = var16[var10];
                var10 = var14.bind(var4)(var10);
                var11 = var10.SafeAreaPaddingView;
                var10 = {};
                var10.bottom = var17;
                var13 = var13.footerButton;
                var10.style = var13;
                var13 = 13;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Button;
                var13 = {};
                var13.onPress = var15;
                var15 = 'Submit';
                var13.text = var15;
                var13 = var12.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 656:
                var23 = "Cannot destructure 'undefined' or 'null'.";
                var24 = var1;
                var0 = throwTypeError(var24, var23);
                var0 = undefined;
                throw var0;
        }
    };
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.headerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/captcha/tooling/native/CaptchaTestModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: CaptchaTestModal, environment: var1
        var1 = _closure1_slot15;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var2 = var5.useMemo;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = function(arg0) { // Original name: getScreens, environment: var0
                var0 = {};
                var1 = _closure1_slot13;
                var2 = var1.TEST_CAPTCHA;
                var1 = {};
                var5 = arg0;
                var5 = var5.headerStyle;
                var1.headerStyle = var5;
                var5 = 'Captcha Test Tool';
                var1.headerTitle = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 14;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getHeaderCloseButton;
                var4 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var1.headerLeft = var4;
                var3 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot14;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 16;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot13;
        var4 = var4.TEST_CAPTCHA;
        var0.initialRouteName = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 1297, 671, 11136, 11137, 3107, 3900, 7101, 4697, 4043, 4668, 4525, 5748, 1234, 2]);