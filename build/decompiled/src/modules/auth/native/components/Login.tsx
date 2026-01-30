// modules/auth/native/components/Login.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: handlePressPasswordManagerHint, environment: var3
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
        var4 = function() { // Original name: onConfirm, environment: var4
            _fun60452: for (var _fun60452_ip = 0;;) switch (_fun60452_ip) {
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
                        _fun60452_ip = 70;
                        continue _fun60452
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
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
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
    var10 = 4;
    var1 = var6[var10];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AuthStates;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot11 = var4;
    var1 = var1.jsxs;
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {};
    var9 = 32;
    var8.marginTop = var9;
    var1.login = var8;
    var8 = {};
    var9 = 24;
    var8.marginTop = var9;
    var1.password = var8;
    var9 = 16;
    var8 = {
        'width': '100%',
        'marginTop': 16
    };
    var1.button = var8;
    var8 = {};
    var8.marginTop = var10;
    var1.hint = var8;
    var8 = {
        'alignSelf': 'flex-start',
        'paddingVertical': 4
    };
    var1.link = var8;
    var11 = 12;
    var8 = {
        'paddingTop': 24,
        'paddingBottom': 12
    };
    var1.forgotPasswordLinkButtonContainer = var8;
    var8 = {};
    var8.marginTop = var11;
    var1.passkeyButton = var8;
    var8 = {
        'display': 'flex',
        'borderRadius': null,
        'flexDirection': 'row',
        'padding': 12,
        'marginTop': 16
    };
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_CRITICAL;
    var8.backgroundColor = var13;
    var1.errorContainer = var8;
    var8 = {
        'textDecorationLine': 'underline',
        'textDecorationColor': null,
        'flexShrink': 1
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var8.textDecorationColor = var11;
    var1.errorLink = var8;
    var8 = {
        'display': 'flex',
        'marginLeft': 8,
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'width': '100%'
    };
    var1.errorTextContainer = var8;
    var8 = {};
    var8.marginRight = var10;
    var1.incorrectText = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var1.separator = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot13 = var1;
    var1 = function(arg0) { // Original name: LinkButton, environment: var3
        _fun60453: for (var _fun60453_ip = 0;;) switch (_fun60453_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPress;
                var6 = var0.text;
                var12 = var0.containerStyle;
                var9 = var0.textStyle;
                var8 = var0.variant;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun60453_ip = 42;
                    continue _fun60453
                }
            case 36:
                var8 = 'text-xs/medium';
            case 42:
                var7 = var0.textColor;
                if (!(var7 === var3)) {
                    _fun60453_ip = 58;
                    continue _fun60453
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
    var4 = function(arg0) { // Original name: ErrorBanner, environment: var3
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
        var9 = _closure1_slot11;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var4 = 12;
        var4 = var14[var4];
        var4 = var13.bind(var3)(var4);
        var5 = var4.CircleErrorIcon;
        var4 = {
            'color': 'icon-feedback-critical',
            'size': 'sm'
        };
        var5 = var9.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var16.errorTextContainer;
        var5.style = var6;
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
    var _closure1_slot15 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/Login.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: Login, environment: var3
        _fun60455: for (var _fun60455_ip = 0;;) switch (_fun60455_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.isMultiAccount;
                var3 = undefined;
                if (!(var25 === var3)) {
                    _fun60455_ip = 19;
                    continue _fun60455
                }
            case 17:
                var25 = false;
            case 19:
                var _closure2_slot0 = var25;
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
                var20 = function() { // Original name: handlePasskeyLogin, environment: var28
                    var0 = undefined;
                    var3 = _closure2_slot20;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = function() { // Original name: _handlePasskeyLogin, environment: var28
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun60459: for (var _fun60459_ip = 0;;) switch (_fun60459_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun60459_ip = 239;
                                        continue _fun60459
                                    }
                                case 10:
                                    var1 = undefined;
                                    var7 = undefined;
                                    var3 = _closure2_slot12;
                                    if (var3) {
                                        _fun60459_ip = 236;
                                        continue _fun60459
                                    }
                                case 27:
                                    var5 = _closure1_slot9;
                                    var4 = var5.getIsPasswordlessActive;
                                    var4 = var4.bind(var5)();
                                    if (var4) {
                                        _fun60459_ip = 236;
                                        continue _fun60459
                                    }
                                case 50:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 29;
                                    var4 = var6[var4];
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var4.hasAndroidPasskeySupport;
                                    var5 = _closure1_slot7;
                                    var5 = var5.DCDSecurityKeyManager;
                                    if (var4) {
                                        _fun60459_ip = 99;
                                        continue _fun60459
                                    }
                                case 91:
                                    var4 = var5.authenticate;
                                    _fun60459_ip = 105;
                                    continue _fun60459;
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
                                    var4 = 21;
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
                                        _fun60459_ip = 180;
                                        continue _fun60459
                                    }
                                case 178: // try_end0
                                    _fun60459_ip = 236;
                                    continue _fun60459;
                                case 180:
                                    return var4;
                                case 183: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var6 = _closure2_slot4;
                                    var4 = false;
                                    var4 = var6.bind(var1)(var4);
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 26;
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
                    _closure2_slot20 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot20 = var0;
                var0 = _closure1_slot13;
                var10 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 17;
                var1 = var0[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useNavigation;
                var17 = var1.bind(var2)();
                _closure2_slot1 = var17;
                var1 = 18;
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
                var23 = var5.bind(var7)(var2, var1);
                var5 = var23.code;
                var2 = var5.split;
                var1 = ' ';
                var1 = var2.bind(var5)(var1);
                var27 = _closure1_slot4;
                var12 = 1;
                var1 = var27.bind(var3)(var1, var12);
                var15 = 0;
                var18 = var1[var15];
                var13 = _closure1_slot5;
                var1 = var13.useRef;
                var11 = null;
                var29 = var1.bind(var13)(var11);
                _closure2_slot2 = var29;
                var1 = var13.useState;
                var30 = false;
                var1 = var1.bind(var13)(var30);
                var22 = 2;
                var1 = var27.bind(var3)(var1, var22);
                var16 = var1[var15];
                var1 = var1[var12];
                _closure2_slot3 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var30);
                var1 = var27.bind(var3)(var1, var22);
                var21 = var1[var15];
                var1 = var1[var12];
                _closure2_slot4 = var1;
                var2 = var13.useState;
                var1 = {};
                var1 = var2.bind(var13)(var1);
                var1 = var27.bind(var3)(var1, var22);
                var9 = var1[var15];
                var1 = var1[var12];
                _closure2_slot5 = var1;
                var1 = 19;
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
                var1 = var27.bind(var3)(var1, var22);
                var26 = var1[var15];
                _closure2_slot7 = var26;
                var1 = var1[var12];
                _closure2_slot8 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var8);
                var1 = var27.bind(var3)(var1, var22);
                var24 = var1[var15];
                _closure2_slot9 = var24;
                var19 = var1[var12];
                var1 = var13.useState;
                var1 = var1.bind(var13)(var15);
                var1 = var27.bind(var3)(var1, var22);
                var14 = var1[var15];
                _closure2_slot10 = var14;
                var1 = var1[var12];
                _closure2_slot11 = var1;
                var1 = var13.useState;
                var1 = var1.bind(var13)(var30);
                var1 = var27.bind(var3)(var1, var22);
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
                    _fun60463: for (var _fun60463_ip = 0;;) switch (_fun60463_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var4 = var1.retry_after;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun60463_ip = 107;
                                continue _fun60463
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
                var27 = var15.bind(var13)(var12, var1);
                _closure2_slot15 = var27;
                var1 = 20;
                var1 = var0[var1];
                var12 = var4.bind(var3)(var1);
                var4 = var12.useFocusEffect;
                var30 = var13.useCallback;
                var15 = function() { // Environment: var28
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var30.bind(var13)(var15, var1);
                var1 = var4.bind(var12)(var1);
                var12 = var13.useCallback;
                var4 = _closure1_slot3;
                var1 = function*() { // Environment: var28
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60467: for (var _fun60467_ip = 0;;) switch (_fun60467_ip) {
                            case 0:
                                StartGenerator();
                                var1 = arguments[0];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun60467_ip = 576;
                                    continue _fun60467
                                }
                            case 13:
                                var5 = undefined;
                                if (!(var1 === var5)) {
                                    _fun60467_ip = 21;
                                    continue _fun60467
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
                                    _fun60467_ip = 573;
                                    continue _fun60467
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
                                var2 = 21;
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
                                    _fun60467_ip = 485;
                                    continue _fun60467
                                }
                            case 115:
                                var8 = var2;
                                var6 = false;
                                if (!(var6 !== var2)) {
                                    _fun60467_ip = 473;
                                    continue _fun60467
                                }
                            case 127:
                                var9 = var8;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 22;
                                var8 = var11[var8];
                                var8 = var10.bind(var5)(var8);
                                var8 = var8.PasswordResetMethods;
                                var8 = var8.ONE_TIME_LOGIN;
                                if (!(var9 !== var8)) {
                                    _fun60467_ip = 405;
                                    continue _fun60467
                                }
                            case 169:
                                if (var7) {
                                    _fun60467_ip = 328;
                                    continue _fun60467
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
                                _fun60467_ip = 471;
                                continue _fun60467;
                            case 328:
                                var8 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var7 = 23;
                                var7 = var12[var7];
                                var10 = var8.bind(var5)(var7);
                                var9 = var10.openAlert;
                                var11 = _closure1_slot11;
                                var8 = _closure1_slot1;
                                var7 = 25;
                                var7 = var12[var7];
                                var8 = var8.bind(var5)(var7);
                                var7 = {};
                                var12 = _closure2_slot7;
                                var7.email = var12;
                                var8 = var11.bind(var5)(var8, var7);
                                var7 = 'reset-password-confirm';
                                var7 = var9.bind(var10)(var7, var8);
                                _fun60467_ip = 471;
                                continue _fun60467;
                            case 405:
                                var8 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var7 = 23;
                                var7 = var11[var7];
                                var9 = var8.bind(var5)(var7);
                                var8 = var9.openAlert;
                                var10 = _closure1_slot11;
                                var7 = _closure1_slot1;
                                var4 = 24;
                                var4 = var11[var4];
                                var7 = var7.bind(var5)(var4);
                                var4 = {};
                                var7 = var10.bind(var5)(var7, var4);
                                var4 = 'one-time-login-forgot-password-confirm';
                                var4 = var8.bind(var9)(var4, var7);
                            case 471: // try_end0
                                _fun60467_ip = 544;
                                continue _fun60467;
                            case 473: // try_end1
                                var4 = _closure2_slot4;
                                var4 = var4.bind(var5)(var6);
                                return var5;
                            case 485:
                                var6 = _closure2_slot4;
                                var4 = false;
                                var4 = var6.bind(var5)(var4);
                                return var2;
                            case 499: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 26;
                                var2 = var7[var2];
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                                var4 = var2.bind(var4)(var6);
                                var2 = _closure2_slot15;
                                var2 = var2.bind(var5)(var4);
                            case 544: // try_end2
                                var4 = _closure2_slot4;
                                var2 = false;
                                var2 = var4.bind(var5)(var2);
                                return var5;
                            case 558: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                throw var2;
                            case 573:
                                return var1;
                            case 576:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = var4.bind(var3)(var1);
                var1 = new Array(2);
                var1[0] = var27;
                var1[1] = var26;
                var1 = var12.bind(var13)(var4, var1);
                _closure2_slot16 = var1;
                var12 = var13.useCallback;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var28
                    var2 = _closure2_slot16;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var12.bind(var13)(var1, var4);
                _closure2_slot17 = var1;
                var12 = var13.useCallback;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var26;
                var1 = function() { // Environment: var28
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 23;
                    var2 = var6[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.openAlert;
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var1 = 27;
                    var1 = var6[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var7 = _closure2_slot17;
                    var1.onConfirm = var7;
                    var6 = _closure2_slot7;
                    var1.login = var6;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = 'reset-password-nudge';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var15 = var12.bind(var13)(var1, var4);
                _closure2_slot18 = var15;
                var12 = var13.useCallback;
                var1 = function() { // Environment: var28
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun60472: for (var _fun60472_ip = 0;;) switch (_fun60472_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arguments[2];
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun60472_ip = 345;
                                        continue _fun60472
                                    }
                                case 13:
                                    var9 = arg0;
                                    var8 = arg1;
                                    var2 = undefined;
                                    if (!(var1 === var2)) {
                                        _fun60472_ip = 27;
                                        continue _fun60472
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
                                        _fun60472_ip = 342;
                                        continue _fun60472
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
                                    var5 = 21;
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
                                        _fun60472_ip = 153;
                                        continue _fun60472
                                    }
                                case 148: // try_end0
                                    _fun60472_ip = 339;
                                    continue _fun60472;
                                case 153:
                                    return var5;
                                case 156: // catch_target0
                                    CatchBlockStart(arg_register = 12);
                                    var7 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var7.bind(var2)(var5);
                                    var11 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 26;
                                    var5 = var10[var5];
                                    var11 = var11.bind(var2)(var5);
                                    var5 = var11.getAuthenticationErrorsFromV6OrEarlierAPIError;
                                    var13 = var5.bind(var11)(var12);
                                    var3 = var13;
                                    var11 = _closure1_slot1;
                                    var12 = 28;
                                    var10 = var10[var12];
                                    var11 = var11.bind(var2)(var10);
                                    var10 = 'login';
                                    var11 = var11.bind(var2)(var10, var13);
                                    var10 = null;
                                    var11 = var10 != var11;
                                    var5 = var11;
                                    if (!var11) {
                                        _fun60472_ip = 278;
                                        continue _fun60472
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
                                        _fun60472_ip = 302;
                                        continue _fun60472
                                    }
                                case 298:
                                    var7 = var9 !== var8;
                                case 302:
                                    var5 = var7;
                                    if (!var7) {
                                        _fun60472_ip = 311;
                                        continue _fun60472
                                    }
                                case 308:
                                    var5 = var6;
                                case 311:
                                    if (!var5) {
                                        _fun60472_ip = 330;
                                        continue _fun60472
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
                var4 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var27;
                var1[1] = var25;
                var12 = var12.bind(var13)(var4, var1);
                _closure2_slot19 = var12;
                var1 = _closure1_slot1;
                var4 = 30;
                var4 = var0[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = 31;
                var4 = var0[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)(var17, var12);
                var12 = var13.useEffect;
                var4 = new Array(3);
                var4[0] = var15;
                var4[1] = var14;
                var4[2] = var2;
                var2 = function() { // Environment: var28
                    _fun60475: for (var _fun60475_ip = 0;;) switch (_fun60475_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var1 = 2;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun60475_ip = 21;
                                continue _fun60475
                            }
                        case 17:
                            var1 = _closure2_slot6;
                        case 21:
                            if (!var1) {
                                _fun60475_ip = 34;
                                continue _fun60475
                            }
                        case 24:
                            var1 = _closure2_slot18;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var12.bind(var13)(var2, var4);
                var2 = 28;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var27 = 'password';
                var0 = var0.bind(var3)(var27, var9);
                var4 = var11 != var0;
                if (!var4) {
                    _fun60455_ip = 902;
                    continue _fun60455
                }
            case 871:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'login';
                var0 = var1.bind(var3)(var0, var9);
                var4 = var11 != var0;
            case 902:
                if (!var5) {
                    _fun60455_ip = 908;
                    continue _fun60455
                }
            case 905:
                if (var4) {
                    _fun60455_ip = 968;
                    continue _fun60455
                }
            case 908:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'login';
                var17 = var1.bind(var3)(var0, var9);
                if (!(var11 == var17)) {
                    _fun60455_ip = 966;
                    continue _fun60455
                }
            case 939:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'email';
                var17 = var1.bind(var3)(var0, var9);
            case 966:
                _fun60455_ip = 995;
                continue _fun60455;
            case 968:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = 'email';
                var17 = var1.bind(var3)(var0, var9);
            case 995:
                var14 = null;
                if (var5) {
                    _fun60455_ip = 1023;
                    continue _fun60455
                }
            case 1000:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var14 = var0.bind(var3)(var27, var9);
            case 1023:
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 32;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var30 = _closure1_slot0;
                var25 = 13;
                var13 = var12[var25];
                var13 = var30.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var12[var25];
                var12 = var30.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["7fNJgA"];
                var12 = var13.bind(var15)(var12);
                var0.headerText = var12;
                var12 = null;
                if (var7) {
                    _fun60455_ip = 1211;
                    continue _fun60455
                }
            case 1112:
                var30 = _closure1_slot11;
                var34 = _closure1_slot0;
                var31 = _closure1_slot2;
                var13 = 11;
                var13 = var31[var13];
                var13 = var34.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var32 = var31[var25];
                var32 = var34.bind(var3)(var32);
                var33 = var32.intl;
                var32 = var33.string;
                var31 = var31[var25];
                var31 = var34.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.euS7r4;
                var31 = var32.bind(var33)(var31);
                var13.children = var31;
                var12 = var30.bind(var3)(var15, var13);
            case 1211:
                var0.subHeader = var12;
                if (!var5) {
                    _fun60455_ip = 1222;
                    continue _fun60455
                }
            case 1219:
                var5 = var4;
            case 1222:
                if (!var5) {
                    _fun60455_ip = 1250;
                    continue _fun60455
                }
            case 1225:
                var13 = _closure1_slot11;
                var12 = _closure1_slot15;
                var4 = {};
                var15 = function() { // Original name: onPress, environment: var28
                    var1 = _closure2_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var15;
                var5 = var13.bind(var3)(var12, var4);
            case 1250:
                var4 = new Array(9);
                var4[0] = var5;
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 33;
                var5 = var15[var5];
                var12 = var12.bind(var3)(var5);
                var5 = {};
                var30 = var10.login;
                var5.containerStyle = var30;
                var30 = !var7;
                var5.autoFocus = var30;
                var30 = 'emailAddress';
                var5.textContentType = var30;
                var30 = 'email-address';
                var5.keyboardType = var30;
                var23 = var23.alpha2;
                var5.alpha2 = var23;
                var5.countryCode = var18;
                var18 = function(arg0, arg1) { // Original name: onChange, environment: var28
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
                var5.onChange = var18;
                var18 = function() { // Original name: onSubmitEditing, environment: var28
                    _fun60478: for (var _fun60478_ip = 0;;) switch (_fun60478_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun60478_ip = 33;
                                continue _fun60478
                            }
                        case 23:
                            var1 = var2.focus;
                            var0 = var1.bind(var2)();
                        case 33:
                            return var0;
                    }
                };
                var5.onSubmitEditing = var18;
                var18 = 'next';
                var5.returnKeyType = var18;
                var18 = 'none';
                var5.autoCapitalize = var18;
                var23 = _closure1_slot0;
                var30 = var15[var25];
                var30 = var23.bind(var3)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var15[var25];
                var30 = var23.bind(var3)(var30);
                var30 = var30.t;
                var30 = var30.tUjnxr;
                var30 = var31.bind(var32)(var30);
                var5.label = var30;
                var5.errorMessage = var17;
                var17 = 'login_login_input';
                var5.testID = var17;
                var17 = function() { // Original name: onPressCountrySelector, environment: var28
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
                var30 = 'username';
                var5.autoComplete = var30;
                var5 = var13.bind(var3)(var12, var5);
                var4[1] = var5;
                var5 = 34;
                var5 = var15[var5];
                var5 = var23.bind(var3)(var5);
                var12 = var5.TextInput;
                var5 = {};
                var30 = var10.password;
                var5.containerStyle = var30;
                var5.ref = var29;
                var5.textContentType = var27;
                var27 = !var16;
                var5.secureTextEntry = var27;
                var5.onChange = var19;
                var5.autoCapitalize = var18;
                var18 = function() { // Original name: onSubmitEditing, environment: var28
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.onSubmitEditing = var18;
                var18 = var15[var25];
                var18 = var23.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var15 = var15[var25];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["CIGa+7"];
                var15 = var18.bind(var19)(var15);
                var5.label = var15;
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                if (var16) {
                    _fun60455_ip = 1632;
                    continue _fun60455
                }
            case 1612:
                var15 = 36;
                var15 = var23[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.EyeIcon;
                _fun60455_ip = 1650;
                continue _fun60455;
            case 1632:
                var18 = 35;
                var18 = var23[var18];
                var18 = var19.bind(var3)(var18);
                var15 = var18.EyeSlashIcon;
            case 1650:
                var5.trailingIcon = var15;
                var15 = {};
                var27 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var25];
                var19 = var27.bind(var3)(var19);
                var23 = var19.intl;
                var19 = var23.string;
                var18 = var18[var25];
                var18 = var27.bind(var3)(var18);
                var18 = var18.t;
                if (var16) {
                    _fun60455_ip = 1714;
                    continue _fun60455
                }
            case 1701:
                var16 = var18.nFzpM5;
                var16 = var19.bind(var23)(var16);
                _fun60455_ip = 1725;
                continue _fun60455;
            case 1714:
                var18 = var18.Nusip4;
                var16 = var19.bind(var23)(var18);
            case 1725:
                var15.accessibilityLabel = var16;
                var16 = function() { // Original name: onPress, environment: var28
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
                    _fun60455_ip = 1906;
                    continue _fun60455
                }
            case 1812:
                var14 = _closure1_slot11;
                var13 = _closure1_slot14;
                var12 = {};
                var15 = var10.link;
                var12.containerStyle = var15;
                var15 = function() { // Original name: onPress, environment: var28
                    var1 = _closure2_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var12.onPress = var15;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var25];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var15 = var15[var25];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.wWIufs;
                var15 = var16.bind(var18)(var15);
                var12.text = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 1906:
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
                    _fun60455_ip = 2058;
                    continue _fun60455
                }
            case 1945:
                var14 = _closure1_slot11;
                var13 = _closure1_slot14;
                var12 = {};
                var15 = var10.link;
                var12.containerStyle = var15;
                var15 = _closure1_slot16;
                var12.onPress = var15;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var25];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var15 = var15[var25];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.RL5Fy2;
                var15 = var16.bind(var18)(var15);
                var12.text = var15;
                var15 = 'text-link';
                if (!var7) {
                    _fun60455_ip = 2047;
                    continue _fun60455
                }
            case 2041:
                var15 = 'text-brand';
            case 2047:
                var12.textColor = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 2058:
                var4[4] = var5;
                var5 = null;
                if (!var7) {
                    _fun60455_ip = 2143;
                    continue _fun60455
                }
            case 2067:
                var12 = var9.message;
                var12 = var11 != var12;
                var5 = null;
                if (!var12) {
                    _fun60455_ip = 2143;
                    continue _fun60455
                }
            case 2081:
                var12 = var9.message;
                var5 = null;
                if (!(var8 !== var12)) {
                    _fun60455_ip = 2143;
                    continue _fun60455
                }
            case 2092:
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 37;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var15 = var10.hint;
                var12.style = var15;
                var15 = var9.message;
                var12.children = var15;
                var5 = var14.bind(var3)(var13, var12);
            case 2143:
                var4[5] = var5;
                var13 = _closure1_slot11;
                var12 = _closure1_slot6;
                var5 = {};
                var15 = var10.button;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var7;
                if (!var15) {
                    _fun60455_ip = 2189;
                    continue _fun60455
                }
            case 2177:
                var16 = {};
                var18 = 24;
                var16.marginTop = var18;
                var15 = var16;
            case 2189:
                var14[1] = var15;
                var5.style = var14;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var18 = 38;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {};
                var19 = 'lg';
                var14.size = var19;
                var19 = var22;
                if (!var7) {
                    _fun60455_ip = 2263;
                    continue _fun60455
                }
            case 2243:
                var23 = var22;
                if (var22) {
                    _fun60455_ip = 2253;
                    continue _fun60455
                }
            case 2249:
                var23 = var8 === var26;
            case 2253:
                if (var23) {
                    _fun60455_ip = 2260;
                    continue _fun60455
                }
            case 2256:
                var23 = var8 === var24;
            case 2260:
                var19 = var23;
            case 2263:
                var14.disabled = var19;
                var14.loading = var21;
                var26 = _closure1_slot0;
                var19 = _closure1_slot2;
                var23 = var19[var25];
                var23 = var26.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var19 = var19[var25];
                var19 = var26.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.dKhVQN;
                var19 = var23.bind(var24)(var19);
                var14.text = var19;
                var19 = function() { // Original name: onPress, environment: var28
                    var3 = _closure2_slot19;
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14.onPress = var19;
                var14 = var16.bind(var3)(var15, var14);
                var5.children = var14;
                var5 = var13.bind(var3)(var12, var5);
                var4[6] = var5;
                if (var7) {
                    _fun60455_ip = 2549;
                    continue _fun60455
                }
            case 2363:
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
                _fun60455_ip = 2963;
                continue _fun60455;
            case 2549:
                var14 = _closure1_slot12;
                var13 = _closure1_slot6;
                var12 = {};
                var17 = _closure1_slot11;
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var16 = 39;
                var15 = var26[var16];
                var15 = var24.bind(var3)(var15);
                var19 = var15.Stack;
                var15 = {
                    'direction': 'horizontal',
                    'align': 'center',
                    'justify': 'center'
                };
                var23 = var10.forgotPasswordLinkButtonContainer;
                var15.style = var23;
                var27 = _closure1_slot14;
                var23 = {};
                var28 = function() { // Original name: onPress, environment: var28
                    var1 = _closure2_slot16;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var23.onPress = var28;
                var28 = var26[var25];
                var28 = var24.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var26[var25];
                var28 = var24.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28["+/6Nv9"];
                var28 = var29.bind(var30)(var28);
                var23.text = var28;
                var28 = 'text-md/medium';
                var23.variant = var28;
                var28 = 'text-brand';
                var23.textColor = var28;
                var23 = var17.bind(var3)(var27, var23);
                var15.children = var23;
                var19 = var17.bind(var3)(var19, var15);
                var15 = new Array(3);
                var15[0] = var19;
                var16 = var26[var16];
                var16 = var24.bind(var3)(var16);
                var19 = var16.Stack;
                var16 = {};
                var23 = var10.separator;
                var16.style = var23;
                var23 = 40;
                var23 = var26[var23];
                var23 = var24.bind(var3)(var23);
                var27 = var23.OrSeparator;
                var23 = {};
                var23 = var17.bind(var3)(var27, var23);
                var16.children = var23;
                var16 = var17.bind(var3)(var19, var16);
                var15[1] = var16;
                var16 = {};
                var19 = var10.passkeyButton;
                var16.style = var19;
                var18 = var26[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.Button;
                var18 = {
                    'icon': null,
                    'size': 'lg',
                    'variant': 'tertiary'
                };
                var23 = 41;
                var23 = var26[var23];
                var23 = var24.bind(var3)(var23);
                var24 = var23.KeyIcon;
                var23 = {};
                var23 = var17.bind(var3)(var24, var23);
                var18.icon = var23;
                if (var21) {
                    _fun60455_ip = 2867;
                    continue _fun60455
                }
            case 2864:
                var21 = var22;
            case 2867:
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
            case 2963:
                var4[7] = var5;
                var5 = null;
                if (var7) {
                    _fun60455_ip = 3048;
                    continue _fun60455
                }
            case 2972:
                var7 = var9.message;
                var7 = var11 == var7;
                var5 = null;
                if (var7) {
                    _fun60455_ip = 3048;
                    continue _fun60455
                }
            case 2986:
                var7 = var9.message;
                var5 = null;
                if (!(var8 !== var7)) {
                    _fun60455_ip = 3048;
                    continue _fun60455
                }
            case 2997:
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 37;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var10.hint;
                var6.style = var10;
                var9 = var9.message;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 3048:
                var4[8] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.LinkButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 7441, 1216, 660, 33, 1297, 671, 4864, 3901, 5352, 1234, 3896, 478, 3984, 1469, 566, 7442, 1472, 4520, 7444, 3988, 7445, 7446, 7449, 7450, 7452, 7453, 7488, 7489, 7491, 7497, 5362, 7502, 7503, 5847, 4043, 4039, 7505, 7507, 4835, 2]);