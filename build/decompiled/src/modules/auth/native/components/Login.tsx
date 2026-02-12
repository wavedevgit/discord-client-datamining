// modules/auth/native/components/Login.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 14;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var7 = _closure1_slot0;
        var4 = 13;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.lzsy7t;
        var5 = var6.bind(var9)(var5);
        var1.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5["TYqh/t"];
        var5 = var6.bind(var9)(var5);
        var1.body = var5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5["9x0iKe"];
        var5 = var6.bind(var9)(var5);
        var1.confirmText = var5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4["ETE/oC"];
        var4 = var5.bind(var6)(var4);
        var1.cancelText = var4;
        var4 = function() {
            _fun63419: for (var _fun63419_ip = 0;;) switch (_fun63419_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun63419_ip = 70;
                        continue _fun63419
                    }
                case 38:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openAccessibilitySettings;
                    var1 = var1.bind(var2)();
                case 70:
                    return var0;
            }
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var4 = var6[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot6 = var4;
    var1 = var1.NativeModules;
    var _closure1_slot7 = var1;
    var13 = 4;
    var1 = var6[var13];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AuthStates;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot11 = var8;
    var1 = var1.jsxs;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var6[var1];
    var10 = var5.bind(var0)(var1);
    var9 = var10.createStyles;
    var1 = {};
    var4 = {};
    var11 = 32;
    var4.marginTop = var11;
    var1.login = var4;
    var4 = {};
    var11 = 24;
    var4.marginTop = var11;
    var1.password = var4;
    var12 = 16;
    var4 = {
        'width': '100%',
        'marginTop': 16
    };
    var1.button = var4;
    var4 = {};
    var4.marginTop = var13;
    var1.hint = var4;
    var4 = {
        'alignSelf': 'flex-start',
        'paddingVertical': 4
    };
    var1.link = var4;
    var4 = 12;
    var11 = {
        'paddingTop': 24,
        'paddingBottom': 12
    };
    var1.forgotPasswordLinkButtonContainer = var11;
    var11 = {};
    var11.marginTop = var4;
    var1.passkeyButton = var11;
    var11 = {
        'display': 'flex',
        'borderRadius': null,
        'flexDirection': 'row',
        'padding': 12,
        'marginTop': 16
    };
    var14 = 9;
    var15 = var6[var14];
    var15 = var7.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var11.borderRadius = var15;
    var15 = var6[var14];
    var15 = var7.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FEEDBACK_CRITICAL;
    var11.backgroundColor = var15;
    var1.errorContainer = var11;
    var11 = {
        'textDecorationLine': 'underline',
        'textDecorationColor': null,
        'flexShrink': 1
    };
    var14 = var6[var14];
    var14 = var7.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var11.textDecorationColor = var14;
    var1.errorLink = var11;
    var11 = {
        'display': 'flex',
        'marginLeft': 8,
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'width': '100%'
    };
    var1.errorTextContainer = var11;
    var11 = {};
    var11.marginRight = var13;
    var1.incorrectText = var11;
    var11 = {};
    var11.paddingHorizontal = var12;
    var1.separator = var11;
    var1 = var9.bind(var10)(var1);
    var _closure1_slot13 = var1;
    var1 = function arg0() {
        _fun63420: for (var _fun63420_ip = 0;;) switch (_fun63420_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPress;
                var6 = var0.text;
                var12 = var0.containerStyle;
                var9 = var0.textStyle;
                var8 = var0.variant;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun63420_ip = 42;
                    continue _fun63420
                }
            case 36:
                var8 = 'text-xs/medium';
            case 42:
                var7 = var0.textColor;
                if (!(var7 === var3)) {
                    _fun63420_ip = 58;
                    continue _fun63420
                }
            case 52:
                var7 = 'text-link';
            case 58:
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var11 = new Array(1);
                var11[0] = var12;
                var0.style = var11;
                var11 = {
                    'top': 8,
                    'right': 8,
                    'bottom': 8
                };
                var0.hitSlop = var11;
                var11 = 'button';
                var0.accessibilityRole = var11;
                var0.onPress = var4;
                var4 = 11;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var4.style = var9;
                var4.variant = var8;
                var4.color = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.CircleErrorIcon;
    var4 = {
        'color': 'icon-feedback-critical',
        'size': 'sm'
    };
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot15 = var4;
    var4 = function arg0() {
        var0 = arg0;
        var12 = var0.onPress;
        var0 = _closure1_slot13;
        var3 = undefined;
        var16 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var16.errorContainer;
        var0.style = var4;
        var5 = _closure1_slot15;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var16.errorTextContainer;
        var5.style = var6;
        var9 = _closure1_slot11;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var6 = 11;
        var6 = var14[var6];
        var6 = var13.bind(var3)(var6);
        var8 = var6.Text;
        var6 = {
            'style': null,
            'color': 'text-default',
            'variant': 'text-sm/medium'
        };
        var10 = var16.incorrectText;
        var6.style = var10;
        var15 = 'text-default';
        var11 = 'text-sm/medium';
        var10 = 13;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var14[var10];
        var17 = var13.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.ayvCBh;
        var17 = var18.bind(var19)(var17);
        var6.children = var17;
        var8 = var9.bind(var3)(var8, var6);
        var6 = new Array(2);
        var6[0] = var8;
        var8 = _closure1_slot14;
        var7 = {};
        var16 = var16.errorLink;
        var7.textStyle = var16;
        var7.textColor = var15;
        var7.onPress = var12;
        var7.variant = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["1q02lR"];
        var10 = var11.bind(var12)(var10);
        var7.text = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var4;
    var4 = 17;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot17 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.OrSeparator;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot18 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.KeyIcon;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot19 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/Login.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun63422: for (var _fun63422_ip = 0;;) switch (_fun63422_ip) {
            case 0:
                var0 = arg0;
                var29 = var0.isMultiAccount;
                var3 = undefined;
                if (!(var29 === var3)) {
                    _fun63422_ip = 19;
                    continue _fun63422
                }
            case 17:
                var29 = false;
            case 19:
                var _closure2_slot0 = var29;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var20 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot21;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun63426: for (var _fun63426_ip = 0;;) switch (_fun63426_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun63426_ip = 239;
                                        continue _fun63426
                                    }
                                case 10:
                                    var1 = undefined;
                                    var7 = undefined;
                                    var3 = _closure2_slot12;
                                    if (var3) {
                                        _fun63426_ip = 236;
                                        continue _fun63426
                                    }
                                case 27:
                                    var5 = _closure1_slot9;
                                    var4 = var5.getIsPasswordlessActive;
                                    var4 = var4.bind(var5)();
                                    if (var4) {
                                        _fun63426_ip = 236;
                                        continue _fun63426
                                    }
                                case 50:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 31;
                                    var4 = var6[var4];
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var4.hasAndroidPasskeySupport;
                                    var5 = _closure1_slot7;
                                    var5 = var5.DCDSecurityKeyManager;
                                    if (var4) {
                                        _fun63426_ip = 99;
                                        continue _fun63426
                                    }
                                case 91:
                                    var4 = var5.authenticate;
                                    _fun63426_ip = 105;
                                    continue _fun63426;
                                case 99:
                                    var4 = var5.authenticatePasskey;
                                case 105:
                                    var7 = var4;
                                    var5 = _closure2_slot4;
                                    var4 = true;
                                    var4 = var5.bind(var1)(var4);
                                    var5 = _closure2_slot5;
                                    var4 = {};
                                    var4 = var5.bind(var1)(var4);
                                case 130: // try_start_0
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 25;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var1)(var4);
                                    var5 = var6.authenticatePasswordless;
                                    var4 = {};
                                    var4.authenticateFunc = var7;
                                    var4 = var5.bind(var6)(var4);
                                    SaveGenerator(address = 172);
                                case 170:
                                    return var4;
                                case 172:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun63426_ip = 180;
                                        continue _fun63426
                                    }
                                case 178: // try_end0
                                    _fun63426_ip = 236;
                                    continue _fun63426;
                                case 180:
                                    return var4;
                                case 183: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var6 = _closure2_slot4;
                                    var4 = false;
                                    var4 = var6.bind(var1)(var4);
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 28;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.getAuthenticationErrorsFromAPIError;
                                    var3 = var3.bind(var4)(var5);
                                    var2 = _closure2_slot15;
                                    var2 = var2.bind(var1)(var3);
                                case 236:
                                    return var1;
                                case 239:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot21 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot21 = var0;
                var0 = _closure1_slot13;
                var10 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 20;
                var1 = var0[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useNavigation;
                var17 = var1.bind(var2)();
                _closure2_slot1 = var17;
                var1 = 21;
                var1 = var0[var1];
                var7 = var4.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var28
                    var1 = _closure1_slot8;
                    var0 = var1.getCountryCode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var27 = var5.bind(var7)(var2, var1);
                var5 = var27.code;
                var2 = var5.split;
                var1 = ' ';
                var1 = var2.bind(var5)(var1);
                var22 = _closure1_slot4;
                var12 = 1;
                var1 = var22.bind(var3)(var1, var12);
                var15 = 0;
                var19 = var1[var15];
                var13 = _closure1_slot5;
                var1 = var13.useRef;
                var11 = null;
                var30 = var1.bind(var13)(var11);
                _closure2_slot2 = var30;
                var1 = var13.useState;
                var25 = false;
                var1 = var1.bind(var13)(var25);
                var18 = 2;
                var1 = var22.bind(var3)(var1, var18);
                var16 = var1[var15];
                var1 = var1[var12];
                _closure2_slot3 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var25);
                var1 = var22.bind(var3)(var1, var18);
                var21 = var1[var15];
                var1 = var1[var12];
                _closure2_slot4 = var1;
                var2 = var13.useState;
                var1 = {};
                var1 = var2.bind(var13)(var1);
                var1 = var22.bind(var3)(var1, var18);
                var9 = var1[var15];
                var1 = var1[var12];
                _closure2_slot5 = var1;
                var1 = 22;
                var1 = var0[var1];
                var5 = var4.bind(var3)(var1);
                var2 = var5.useMobilePasswordRecoveryExperiment;
                var1 = {};
                var7 = 'Login.tsx';
                var1.location = var7;
                var1 = var2.bind(var5)(var1);
                var7 = var1.hasNewLandingPage;
                var5 = var1.hasNewErrorState;
                var2 = var1.showNudgeModal;
                _closure2_slot6 = var2;
                var1 = var13.useState;
                var8 = '';
                var1 = var1.bind(var13)(var8);
                var1 = var22.bind(var3)(var1, var18);
                var26 = var1[var15];
                _closure2_slot7 = var26;
                var1 = var1[var12];
                _closure2_slot8 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var8);
                var1 = var22.bind(var3)(var1, var18);
                var24 = var1[var15];
                _closure2_slot9 = var24;
                var23 = var1[var12];
                var1 = var13.useState;
                var1 = var1.bind(var13)(var15);
                var1 = var22.bind(var3)(var1, var18);
                var14 = var1[var15];
                _closure2_slot10 = var14;
                var1 = var1[var12];
                _closure2_slot11 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var25);
                var1 = var22.bind(var3)(var1, var18);
                var22 = var1[var15];
                _closure2_slot12 = var22;
                var1 = var1[var12];
                _closure2_slot13 = var1;
                var1 = var13.useRef;
                var1 = var1.bind(var13)(var3);
                _closure2_slot14 = var1;
                var15 = var13.useEffect;
                var12 = function() { // Environment: var28
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot14;
                        var1 = var0.current;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var15.bind(var13)(var12, var1);
                var15 = var13.useCallback;
                var12 = function(arg0) { // Environment: var28
                    _fun63430: for (var _fun63430_ip = 0;;) switch (_fun63430_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var4 = var1.retry_after;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun63430_ip = 107;
                                continue _fun63430
                            }
                        case 29:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var4 = _closure2_slot14;
                            var4 = var4.current;
                            var4 = var5.bind(var0)(var4);
                            var5 = _closure2_slot13;
                            var4 = true;
                            var4 = var5.bind(var0)(var4);
                            var2 = _closure2_slot14;
                            var4 = var3.setTimeout;
                            var3 = var1.retry_after;
                            var1 = 1000;
                            var3 = var1 * var3;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot13;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var4.bind(var0)(var1, var3);
                            var2.current = var1;
                        case 107:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var31 = var15.bind(var13)(var12, var1);
                _closure2_slot15 = var31;
                var1 = 23;
                var1 = var0[var1];
                var12 = var4.bind(var3)(var1);
                var4 = var12.useFocusEffect;
                var18 = var13.useCallback;
                var15 = function() { // Environment: var28
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var18.bind(var13)(var15, var1);
                var1 = var4.bind(var12)(var1);
                var25 = _closure1_slot11;
                var1 = _closure1_slot1;
                var18 = 24;
                var4 = var0[var18];
                var12 = var1.bind(var3)(var4);
                var4 = {};
                var4.email = var26;
                var4 = var25.bind(var3)(var12, var4);
                _closure2_slot16 = var4;
                var15 = var13.useCallback;
                var12 = _closure1_slot3;
                var4 = function*() { // Environment: var28
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun63434: for (var _fun63434_ip = 0;;) switch (_fun63434_ip) {
                            case 0:
                                StartGenerator();
                                var1 = arguments[0];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun63434_ip = 516;
                                    continue _fun63434
                                }
                            case 13:
                                var5 = undefined;
                                if (!(var1 === var5)) {
                                    _fun63434_ip = 21;
                                    continue _fun63434
                                }
                            case 19:
                                var1 = false;
                            case 21:
                                var7 = var1;
                                var8 = undefined;
                                SaveGenerator(address = 30);
                            case 28:
                                return var5;
                            case 30:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun63434_ip = 513;
                                    continue _fun63434
                                }
                            case 39:
                                var4 = _closure2_slot4;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                var4 = _closure2_slot5;
                                var2 = {};
                                var2 = var4.bind(var5)(var2);
                            case 64: // try_start_0 // try_start_1
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 25;
                                var2 = var9[var2];
                                var9 = var6.bind(var5)(var2);
                                var6 = var9.forgotPassword;
                                var2 = _closure2_slot7;
                                var2 = var6.bind(var9)(var2);
                                SaveGenerator(address = 106);
                            case 104:
                                return var2;
                            case 106:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun63434_ip = 425;
                                    continue _fun63434
                                }
                            case 115:
                                var8 = var2;
                                var6 = false;
                                if (!(var6 !== var2)) {
                                    _fun63434_ip = 413;
                                    continue _fun63434
                                }
                            case 127:
                                var9 = var8;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 26;
                                var8 = var11[var8];
                                var8 = var10.bind(var5)(var8);
                                var8 = var8.PasswordResetMethods;
                                var8 = var8.ONE_TIME_LOGIN;
                                if (!(var9 !== var8)) {
                                    _fun63434_ip = 369;
                                    continue _fun63434
                                }
                            case 169:
                                if (var7) {
                                    _fun63434_ip = 325;
                                    continue _fun63434
                                }
                            case 175:
                                var8 = _closure1_slot1;
                                var14 = _closure1_slot2;
                                var7 = 14;
                                var7 = var14[var7];
                                var9 = var8.bind(var5)(var7);
                                var8 = var9.show;
                                var7 = {};
                                var11 = _closure1_slot0;
                                var10 = 13;
                                var12 = var14[var10];
                                var12 = var11.bind(var5)(var12);
                                var15 = var12.intl;
                                var13 = var15.string;
                                var12 = var14[var10];
                                var12 = var11.bind(var5)(var12);
                                var12 = var12.t;
                                var12 = var12.f5Pi7A;
                                var12 = var13.bind(var15)(var12);
                                var7.title = var12;
                                var12 = var14[var10];
                                var12 = var11.bind(var5)(var12);
                                var13 = var12.intl;
                                var12 = var13.format;
                                var10 = var14[var10];
                                var10 = var11.bind(var5)(var10);
                                var10 = var10.t;
                                var11 = var10["6u5hQ9"];
                                var10 = {};
                                var14 = _closure2_slot7;
                                var10.email = var14;
                                var10 = var12.bind(var13)(var11, var10);
                                var7.body = var10;
                                var7 = var8.bind(var9)(var7);
                                _fun63434_ip = 411;
                                continue _fun63434;
                            case 325:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 27;
                                var7 = var9[var7];
                                var10 = var8.bind(var5)(var7);
                                var9 = var10.openAlert;
                                var8 = _closure2_slot16;
                                var7 = 'reset-password-confirm';
                                var7 = var9.bind(var10)(var7, var8);
                                _fun63434_ip = 411;
                                continue _fun63434;
                            case 369:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 27;
                                var7 = var9[var7];
                                var9 = var8.bind(var5)(var7);
                                var8 = var9.openAlert;
                                var7 = _closure1_slot17;
                                var4 = 'one-time-login-forgot-password-confirm';
                                var4 = var8.bind(var9)(var4, var7);
                            case 411: // try_end0
                                _fun63434_ip = 484;
                                continue _fun63434;
                            case 413: // try_end1
                                var4 = _closure2_slot4;
                                var4 = var4.bind(var5)(var6);
                                return var5;
                            case 425:
                                var6 = _closure2_slot4;
                                var4 = false;
                                var4 = var6.bind(var5)(var4);
                                return var2;
                            case 439: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 28;
                                var2 = var7[var2];
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                                var4 = var2.bind(var4)(var6);
                                var2 = _closure2_slot15;
                                var2 = var2.bind(var5)(var4);
                            case 484: // try_end2
                                var4 = _closure2_slot4;
                                var2 = false;
                                var2 = var4.bind(var5)(var2);
                                return var5;
                            case 498: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                throw var2;
                            case 513:
                                return var1;
                            case 516:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var12 = var12.bind(var3)(var4);
                var4 = new Array(2);
                var4[0] = var31;
                var4[1] = var26;
                var4 = var15.bind(var13)(var12, var4);
                _closure2_slot17 = var4;
                var15 = var13.useCallback;
                var12 = new Array(1);
                var12[0] = var4;
                var4 = function() { // Environment: var28
                    var2 = _closure2_slot17;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var15.bind(var13)(var4, var12);
                var12 = 29;
                var12 = var0[var12];
                var15 = var1.bind(var3)(var12);
                var12 = {};
                var12.onConfirm = var4;
                var12.login = var26;
                var12 = var25.bind(var3)(var15, var12);
                _closure2_slot18 = var12;
                var15 = var13.useCallback;
                var12 = new Array(2);
                var12[0] = var4;
                var12[1] = var26;
                var4 = function() { // Environment: var28
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.openAlert;
                    var2 = _closure2_slot18;
                    var1 = 'reset-password-nudge';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var15 = var15.bind(var13)(var4, var12);
                _closure2_slot19 = var15;
                var25 = var13.useCallback;
                var4 = function() { // Environment: var28
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun63439: for (var _fun63439_ip = 0;;) switch (_fun63439_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arguments[2];
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun63439_ip = 345;
                                        continue _fun63439
                                    }
                                case 13:
                                    var9 = arg0;
                                    var8 = arg1;
                                    var2 = undefined;
                                    if (!(var1 === var2)) {
                                        _fun63439_ip = 27;
                                        continue _fun63439
                                    }
                                case 25:
                                    var1 = false;
                                case 27:
                                    var11 = var1;
                                    var3 = undefined;
                                    var6 = undefined;
                                    SaveGenerator(address = 38);
                                case 36:
                                    return var2;
                                case 38:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun63439_ip = 342;
                                        continue _fun63439
                                    }
                                case 47:
                                    var7 = _closure2_slot4;
                                    var5 = true;
                                    var5 = var7.bind(var2)(var5);
                                    var7 = _closure2_slot5;
                                    var5 = {};
                                    var5 = var7.bind(var2)(var5);
                                case 72: // try_start_0
                                    var7 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var5 = 25;
                                    var5 = var10[var5];
                                    var10 = var7.bind(var2)(var5);
                                    var7 = var10.login;
                                    var5 = {};
                                    var12 = var9;
                                    var5.login = var12;
                                    var12 = var8;
                                    var5.password = var12;
                                    var5.undelete = var11;
                                    var11 = _closure2_slot0;
                                    var5.isMultiAccount = var11;
                                    var5 = var7.bind(var10)(var5);
                                    SaveGenerator(address = 142);
                                case 140:
                                    return var5;
                                case 142:
                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun63439_ip = 153;
                                        continue _fun63439
                                    }
                                case 148: // try_end0
                                    _fun63439_ip = 339;
                                    continue _fun63439;
                                case 153:
                                    return var5;
                                case 156: // catch_target0
                                    CatchBlockStart(arg_register = 12);
                                    var7 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var7.bind(var2)(var5);
                                    var11 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 28;
                                    var5 = var10[var5];
                                    var11 = var11.bind(var2)(var5);
                                    var5 = var11.getAuthenticationErrorsFromV6OrEarlierAPIError;
                                    var13 = var5.bind(var11)(var12);
                                    var3 = var13;
                                    var11 = _closure1_slot1;
                                    var12 = 30;
                                    var10 = var10[var12];
                                    var11 = var11.bind(var2)(var10);
                                    var10 = 'login';
                                    var11 = var11.bind(var2)(var10, var13);
                                    var10 = null;
                                    var11 = var10 != var11;
                                    var5 = var11;
                                    if (!var11) {
                                        _fun63439_ip = 278;
                                        continue _fun63439
                                    }
                                case 244:
                                    var11 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var7 = var7[var12];
                                    var12 = var11.bind(var2)(var7);
                                    var11 = var3;
                                    var7 = 'password';
                                    var7 = var12.bind(var2)(var7, var11);
                                    var5 = var10 != var7;
                                case 278:
                                    var6 = var5;
                                    var10 = var9;
                                    var9 = '';
                                    var10 = var9 !== var10;
                                    var7 = var10;
                                    if (!var10) {
                                        _fun63439_ip = 302;
                                        continue _fun63439
                                    }
                                case 298:
                                    var7 = var9 !== var8;
                                case 302:
                                    var5 = var7;
                                    if (!var7) {
                                        _fun63439_ip = 311;
                                        continue _fun63439
                                    }
                                case 308:
                                    var5 = var6;
                                case 311:
                                    if (!var5) {
                                        _fun63439_ip = 330;
                                        continue _fun63439
                                    }
                                case 314:
                                    var6 = _closure2_slot11;
                                    var5 = function(arg0) { // Environment: var5
                                        var1 = arg0;
                                        var0 = 1;
                                        var0 = var1 + var0;
                                        return var0;
                                    };
                                    var5 = var6.bind(var2)(var5);
                                case 330:
                                    var4 = _closure2_slot15;
                                    var3 = var4.bind(var2)(var3);
                                case 339:
                                    return var2;
                                case 342:
                                    return var1;
                                case 345:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
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
                var12 = var4.bind(var3)();
                var4 = new Array(2);
                var4[0] = var31;
                var4[1] = var29;
                var12 = var25.bind(var13)(var12, var4);
                _closure2_slot20 = var12;
                var4 = 32;
                var4 = var0[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = 33;
                var4 = var0[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)(var17, var12);
                var12 = var13.useEffect;
                var4 = new Array(3);
                var4[0] = var15;
                var4[1] = var14;
                var4[2] = var2;
                var2 = function() { // Environment: var28
                    _fun63442: for (var _fun63442_ip = 0;;) switch (_fun63442_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = 2;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun63442_ip = 21;
                                continue _fun63442
                            }
                        case 17:
                            var1 = _closure2_slot6;
                        case 21:
                            if (!var1) {
                                _fun63442_ip = 34;
                                continue _fun63442
                            }
                        case 24:
                            var1 = _closure2_slot19;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var12.bind(var13)(var2, var4);
                var2 = 30;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var29 = 'password';
                var0 = var0.bind(var3)(var29, var9);
                var4 = var11 != var0;
                if (!var4) {
                    _fun63422_ip = 969;
                    continue _fun63422
                }
            case 938:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'login';
                var0 = var1.bind(var3)(var0, var9);
                var4 = var11 != var0;
            case 969:
                if (!var5) {
                    _fun63422_ip = 975;
                    continue _fun63422
                }
            case 972:
                if (var4) {
                    _fun63422_ip = 1035;
                    continue _fun63422
                }
            case 975:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'login';
                var17 = var1.bind(var3)(var0, var9);
                if (!(var11 == var17)) {
                    _fun63422_ip = 1033;
                    continue _fun63422
                }
            case 1006:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'email';
                var17 = var1.bind(var3)(var0, var9);
            case 1033:
                _fun63422_ip = 1062;
                continue _fun63422;
            case 1035:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'email';
                var17 = var1.bind(var3)(var0, var9);
            case 1062:
                var14 = null;
                if (var5) {
                    _fun63422_ip = 1090;
                    continue _fun63422
                }
            case 1067:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var14 = var0.bind(var3)(var29, var9);
            case 1090:
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 34;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var31 = _closure1_slot0;
                var25 = 13;
                var13 = var12[var25];
                var13 = var31.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var12[var25];
                var12 = var31.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["7fNJgA"];
                var12 = var13.bind(var15)(var12);
                var0.headerText = var12;
                var12 = null;
                if (var7) {
                    _fun63422_ip = 1278;
                    continue _fun63422
                }
            case 1179:
                var31 = _closure1_slot11;
                var35 = _closure1_slot0;
                var32 = _closure1_slot2;
                var13 = 11;
                var13 = var32[var13];
                var13 = var35.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var33 = var32[var25];
                var33 = var35.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var32 = var32[var25];
                var32 = var35.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.euS7r4;
                var32 = var33.bind(var34)(var32);
                var13.children = var32;
                var12 = var31.bind(var3)(var15, var13);
            case 1278:
                var0.subHeader = var12;
                if (!var5) {
                    _fun63422_ip = 1289;
                    continue _fun63422
                }
            case 1286:
                var5 = var4;
            case 1289:
                if (!var5) {
                    _fun63422_ip = 1317;
                    continue _fun63422
                }
            case 1292:
                var13 = _closure1_slot11;
                var12 = _closure1_slot16;
                var4 = {};
                var15 = function() {
                    var1 = _closure2_slot17;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var15;
                var5 = var13.bind(var3)(var12, var4);
            case 1317:
                var4 = new Array(9);
                var4[0] = var5;
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 35;
                var5 = var15[var5];
                var12 = var12.bind(var3)(var5);
                var5 = {};
                var31 = var10.login;
                var5.containerStyle = var31;
                var31 = !var7;
                var5.autoFocus = var31;
                var31 = 'emailAddress';
                var5.textContentType = var31;
                var31 = 'email-address';
                var5.keyboardType = var31;
                var27 = var27.alpha2;
                var5.alpha2 = var27;
                var5.countryCode = var19;
                var19 = function arg0, arg1() {
                    var3 = _closure2_slot11;
                    var0 = undefined;
                    var2 = 0;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot8;
                    var3 = arg1;
                    var1 = arg0;
                    var1 = var3 + var1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onChange = var19;
                var19 = function() {
                    _fun63445: for (var _fun63445_ip = 0;;) switch (_fun63445_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun63445_ip = 33;
                                continue _fun63445
                            }
                        case 23:
                            var1 = var2.focus;
                            var0 = var1.bind(var2)();
                        case 33:
                            return var0;
                    }
                };
                var5.onSubmitEditing = var19;
                var19 = 'next';
                var5.returnKeyType = var19;
                var19 = 'none';
                var5.autoCapitalize = var19;
                var27 = _closure1_slot0;
                var31 = var15[var25];
                var31 = var27.bind(var3)(var31);
                var33 = var31.intl;
                var32 = var33.string;
                var31 = var15[var25];
                var31 = var27.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.tUjnxr;
                var31 = var32.bind(var33)(var31);
                var5.label = var31;
                var5.errorMessage = var17;
                var17 = 'login_login_input';
                var5.testID = var17;
                var17 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot10;
                    var0 = var0.COUNTRY_SELECT;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5.onPressCountrySelector = var17;
                var17 = true;
                var5.isClearable = var17;
                var31 = 'username';
                var5.autoComplete = var31;
                var5 = var13.bind(var3)(var12, var5);
                var4[1] = var5;
                var5 = 36;
                var5 = var15[var5];
                var5 = var27.bind(var3)(var5);
                var12 = var5.TextInput;
                var5 = {};
                var31 = var10.password;
                var5.containerStyle = var31;
                var5.ref = var30;
                var5.textContentType = var29;
                var29 = !var16;
                var5.secureTextEntry = var29;
                var5.onChange = var23;
                var5.autoCapitalize = var19;
                var19 = function() {
                    var3 = _closure2_slot20;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.onSubmitEditing = var19;
                var19 = var15[var25];
                var19 = var27.bind(var3)(var19);
                var23 = var19.intl;
                var19 = var23.string;
                var15 = var15[var25];
                var15 = var27.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["CIGa+7"];
                var15 = var19.bind(var23)(var15);
                var5.label = var15;
                var23 = _closure1_slot0;
                var27 = _closure1_slot2;
                if (var16) {
                    _fun63422_ip = 1699;
                    continue _fun63422
                }
            case 1679:
                var15 = 38;
                var15 = var27[var15];
                var15 = var23.bind(var3)(var15);
                var15 = var15.EyeIcon;
                _fun63422_ip = 1717;
                continue _fun63422;
            case 1699:
                var19 = 37;
                var19 = var27[var19];
                var19 = var23.bind(var3)(var19);
                var15 = var19.EyeSlashIcon;
            case 1717:
                var5.trailingIcon = var15;
                var15 = {};
                var29 = _closure1_slot0;
                var19 = _closure1_slot2;
                var23 = var19[var25];
                var23 = var29.bind(var3)(var23);
                var27 = var23.intl;
                var23 = var27.string;
                var19 = var19[var25];
                var19 = var29.bind(var3)(var19);
                var19 = var19.t;
                if (var16) {
                    _fun63422_ip = 1781;
                    continue _fun63422
                }
            case 1768:
                var16 = var19.nFzpM5;
                var16 = var23.bind(var27)(var16);
                _fun63422_ip = 1792;
                continue _fun63422;
            case 1781:
                var19 = var19.Nusip4;
                var16 = var23.bind(var27)(var19);
            case 1792:
                var15.accessibilityLabel = var16;
                var16 = function() {
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var15.onPress = var16;
                var16 = {
                    'top': 8,
                    'bottom': 8
                };
                var15.hitSlop = var16;
                var5.trailingPressableProps = var15;
                var15 = 'done';
                var5.returnKeyType = var15;
                var5.errorMessage = var14;
                var14 = 'login_password_input';
                var5.testID = var14;
                var14 = 'current-password';
                var5.autoComplete = var14;
                var5 = var13.bind(var3)(var12, var5);
                var4[2] = var5;
                var5 = !var7;
                if (!var5) {
                    _fun63422_ip = 1973;
                    continue _fun63422
                }
            case 1879:
                var14 = _closure1_slot11;
                var13 = _closure1_slot14;
                var12 = {};
                var15 = var10.link;
                var12.containerStyle = var15;
                var15 = function() {
                    var1 = _closure2_slot17;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var12.onPress = var15;
                var23 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var25];
                var16 = var23.bind(var3)(var16);
                var19 = var16.intl;
                var16 = var19.string;
                var15 = var15[var25];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.wWIufs;
                var15 = var16.bind(var19)(var15);
                var12.text = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 1973:
                var4[3] = var5;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 15;
                var5 = var13[var5];
                var12 = var12.bind(var3)(var5);
                var5 = var12.isAndroid;
                var12 = var5.bind(var12)();
                var5 = null;
                if (!var12) {
                    _fun63422_ip = 2125;
                    continue _fun63422
                }
            case 2012:
                var14 = _closure1_slot11;
                var13 = _closure1_slot14;
                var12 = {};
                var15 = var10.link;
                var12.containerStyle = var15;
                var15 = _closure1_slot20;
                var12.onPress = var15;
                var23 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var25];
                var16 = var23.bind(var3)(var16);
                var19 = var16.intl;
                var16 = var19.string;
                var15 = var15[var25];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.RL5Fy2;
                var15 = var16.bind(var19)(var15);
                var12.text = var15;
                var15 = 'text-link';
                if (!var7) {
                    _fun63422_ip = 2114;
                    continue _fun63422
                }
            case 2108:
                var15 = 'text-brand';
            case 2114:
                var12.textColor = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 2125:
                var4[4] = var5;
                var5 = null;
                if (!var7) {
                    _fun63422_ip = 2210;
                    continue _fun63422
                }
            case 2134:
                var12 = var9.message;
                var12 = var11 != var12;
                var5 = null;
                if (!var12) {
                    _fun63422_ip = 2210;
                    continue _fun63422
                }
            case 2148:
                var12 = var9.message;
                var5 = null;
                if (!(var8 !== var12)) {
                    _fun63422_ip = 2210;
                    continue _fun63422
                }
            case 2159:
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 39;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var15 = var10.hint;
                var12.style = var15;
                var15 = var9.message;
                var12.children = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 2210:
                var4[5] = var5;
                var13 = _closure1_slot11;
                var12 = _closure1_slot6;
                var5 = {};
                var15 = var10.button;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var7;
                if (!var15) {
                    _fun63422_ip = 2253;
                    continue _fun63422
                }
            case 2244:
                var16 = {};
                var16.marginTop = var18;
                var15 = var16;
            case 2253:
                var14[1] = var15;
                var5.style = var14;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var23 = 40;
                var14 = var14[var23];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {};
                var18 = 'lg';
                var14.size = var18;
                var18 = var22;
                if (!var7) {
                    _fun63422_ip = 2327;
                    continue _fun63422
                }
            case 2307:
                var19 = var22;
                if (var22) {
                    _fun63422_ip = 2317;
                    continue _fun63422
                }
            case 2313:
                var19 = var8 === var26;
            case 2317:
                if (var19) {
                    _fun63422_ip = 2324;
                    continue _fun63422
                }
            case 2320:
                var19 = var8 === var24;
            case 2324:
                var18 = var19;
            case 2327:
                var14.disabled = var18;
                var14.loading = var21;
                var26 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var25];
                var19 = var26.bind(var3)(var19);
                var24 = var19.intl;
                var19 = var24.string;
                var18 = var18[var25];
                var18 = var26.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.dKhVQN;
                var18 = var19.bind(var24)(var18);
                var14.text = var18;
                var18 = function() {
                    var3 = _closure2_slot20;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14.onPress = var18;
                var14 = var16.bind(var3)(var15, var14);
                var5.children = var14;
                var5 = var13.bind(var3)(var12, var5);
                var4[6] = var5;
                if (var7) {
                    _fun63422_ip = 2613;
                    continue _fun63422
                }
            case 2427:
                var13 = _closure1_slot11;
                var16 = _closure1_slot1;
                var14 = _closure1_slot2;
                var15 = 42;
                var5 = var14[var15];
                var12 = var16.bind(var3)(var5);
                var5 = {};
                var5.shrink = var17;
                var17 = var14[var15];
                var17 = var16.bind(var3)(var17);
                var17 = var17.Looks;
                var17 = var17.LINK;
                var5.look = var17;
                var17 = var14[var15];
                var17 = var16.bind(var3)(var17);
                var17 = var17.Colors;
                var17 = var17.LINK;
                var5.color = var17;
                var15 = var14[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.Sizes;
                var15 = var15.MEDIUM;
                var5.size = var15;
                var15 = var10.button;
                var5.style = var15;
                var17 = _closure1_slot0;
                var15 = var14[var25];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var25];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["/kpMDt"];
                var14 = var15.bind(var16)(var14);
                var5.text = var14;
                var5.onPress = var20;
                var5 = var13.bind(var3)(var12, var5);
                _fun63422_ip = 2983;
                continue _fun63422;
            case 2613:
                var14 = _closure1_slot12;
                var13 = _closure1_slot6;
                var12 = {};
                var17 = _closure1_slot11;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = 41;
                var15 = var18[var16];
                var15 = var19.bind(var3)(var15);
                var24 = var15.Stack;
                var15 = {
                    'direction': 'horizontal',
                    'align': 'center',
                    'justify': 'center'
                };
                var26 = var10.forgotPasswordLinkButtonContainer;
                var15.style = var26;
                var27 = _closure1_slot14;
                var26 = {};
                var28 = function() {
                    var1 = _closure2_slot17;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var26.onPress = var28;
                var28 = var18[var25];
                var28 = var19.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var18[var25];
                var28 = var19.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28["+/6Nv9"];
                var28 = var29.bind(var30)(var28);
                var26.text = var28;
                var28 = 'text-md/medium';
                var26.variant = var28;
                var28 = 'text-brand';
                var26.textColor = var28;
                var26 = var17.bind(var3)(var27, var26);
                var15.children = var26;
                var24 = var17.bind(var3)(var24, var15);
                var15 = new Array(3);
                var15[0] = var24;
                var16 = var18[var16];
                var16 = var19.bind(var3)(var16);
                var24 = var16.Stack;
                var16 = {};
                var26 = var10.separator;
                var16.style = var26;
                var26 = _closure1_slot18;
                var16.children = var26;
                var16 = var17.bind(var3)(var24, var16);
                var15[1] = var16;
                var16 = {};
                var24 = var10.passkeyButton;
                var16.style = var24;
                var18 = var18[var23];
                var18 = var19.bind(var3)(var18);
                var19 = var18.Button;
                var18 = {
                    'icon': null,
                    'size': 'lg',
                    'variant': 'tertiary'
                };
                var23 = _closure1_slot19;
                var18.icon = var23;
                if (var21) {
                    _fun63422_ip = 2887;
                    continue _fun63422
                }
            case 2884:
                var21 = var22;
            case 2887:
                var18.disabled = var21;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var25];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var25];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.EiwJkN;
                var21 = var22.bind(var23)(var21);
                var18.text = var21;
                var18.onPress = var20;
                var18 = var17.bind(var3)(var19, var18);
                var16.children = var18;
                var16 = var17.bind(var3)(var13, var16);
                var15[2] = var16;
                var12.children = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 2983:
                var4[7] = var5;
                var5 = null;
                if (var7) {
                    _fun63422_ip = 3068;
                    continue _fun63422
                }
            case 2992:
                var7 = var9.message;
                var7 = var11 == var7;
                var5 = null;
                if (var7) {
                    _fun63422_ip = 3068;
                    continue _fun63422
                }
            case 3006:
                var7 = var9.message;
                var5 = null;
                if (!(var8 !== var7)) {
                    _fun63422_ip = 3068;
                    continue _fun63422
                }
            case 3017:
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 39;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var10.hint;
                var6.style = var10;
                var9 = var9.message;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 3068:
                var4[8] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.LinkButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 7806, 1216, 660, 33, 1297, 671, 4880, 3938, 5454, 1234, 3933, 478, 4020, 7807, 7808, 7810, 1469, 566, 7812, 1472, 7814, 4563, 7817, 4024, 7818, 7819, 7821, 7822, 7855, 7856, 7858, 7864, 5464, 7869, 5363, 5963, 4090, 4086, 4849, 2]);