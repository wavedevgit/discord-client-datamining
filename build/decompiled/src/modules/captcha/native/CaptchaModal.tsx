// modules/captcha/native/CaptchaModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.Keyboard;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.doesRegistrationHaveIdentityType;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot7 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'padding': 8
    };
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/captcha/native/CaptchaModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun112425: for (var _fun112425_ip = 0;;) switch (_fun112425_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onCaptchaVerify;
                var _closure2_slot0 = var1;
                var5 = var0.onReject;
                var _closure2_slot1 = var5;
                var1 = var0.close;
                var _closure2_slot2 = var1;
                var1 = var0.sitekey;
                var _closure2_slot3 = var1;
                var1 = var0.captchaService;
                var _closure2_slot4 = var1;
                var11 = var0.headerText;
                var14 = var0.bodyText;
                var1 = var0.rqdata;
                var _closure2_slot5 = var1;
                var1 = var0.rqtoken;
                var _closure2_slot6 = var1;
                var0 = var0.userflow;
                var _closure2_slot7 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var18 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 6;
                var0 = var9[var0];
                var0 = var18.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var _closure2_slot8 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    _fun112426: for (var _fun112426_ip = 0;;) switch (_fun112426_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var0 = var1.getState;
                            var0 = var0.bind(var1)();
                            var1 = var0.routes;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = null;
                            var1 = var1 == var0;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun112426_ip = 47;
                                continue _fun112426
                            }
                        case 42:
                            var4 = var0.name;
                        case 47:
                            var2 = 'Guild Join Captcha';
                            var1 = 'auth';
                            var0 = var2;
                            if (!(var1 === var4)) {
                                _fun112426_ip = 87;
                                continue _fun112426
                            }
                        case 64:
                            var1 = _closure1_slot6;
                            var1 = var1.bind(var3)();
                            var0 = var2;
                            if (!var1) {
                                _fun112426_ip = 87;
                                continue _fun112426
                            }
                        case 81:
                            var0 = 'User Registration Captcha';
                        case 87:
                            return var0;
                    }
                };
                var2 = var2.bind(var4)(var0, var1);
                var0 = 7;
                var0 = var9[var0];
                var1 = var18.bind(var3)(var0);
                var0 = {};
                var0.onReject = var5;
                var0.analyticsType = var2;
                var0 = var1.bind(var3)(var0);
                var _closure2_slot9 = var0;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var12
                    var1 = _closure1_slot5;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot9;
                var10 = _closure1_slot0;
                var0 = 8;
                var0 = var9[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'startHeight': 900,
                    'startExpanded': true
                };
                var13 = true;
                var6 = _closure1_slot10;
                var4 = 9;
                var4 = var9[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = var7.contentContainer;
                var4.style = var7;
                var15 = 12;
                var4.spacing = var15;
                var16 = _closure1_slot4;
                var7 = {};
                var17 = 10;
                var17 = var9[var17];
                var17 = var18.bind(var3)(var17);
                var7.source = var17;
                var16 = var2.bind(var3)(var16, var7);
                var7 = new Array(4);
                var7[0] = var16;
                var17 = 11;
                var9 = var9[var17];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'heading-xl/bold',
                    'accessibilityRole': 'header'
                };
                var16 = null;
                if (!(var16 == var11)) {
                    _fun112425_ip = 433;
                    continue _fun112425
                }
            case 379:
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var15];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var15];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.FpoiHe;
                var11 = var19.bind(var20)(var18);
            case 433:
                var9.children = var11;
                var9 = var2.bind(var3)(var10, var9);
                var7[1] = var9;
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var17];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                if (!(var16 == var14)) {
                    _fun112425_ip = 545;
                    continue _fun112425
                }
            case 491:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var15];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var15];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["/CidxO"];
                var14 = var17.bind(var18)(var16);
            case 545:
                var9.children = var14;
                var9 = var11.bind(var3)(var10, var9);
                var7[2] = var9;
                var10 = _closure1_slot9;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 13;
                var8 = var11[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.grow = var13;
                var12 = function() {
                    var3 = _closure2_slot9;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var0)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 14;
                    var4 = var5[var4];
                    var7 = var6.bind(var0)(var4);
                    var6 = var7.emitCaptchaDistributionMetric;
                    var4 = _closure2_slot7;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var3 = 15;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.showCaptcha;
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot5;
                    var4 = var5.bind(var6)(var4, var3, var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        _fun112429: for (var _fun112429_ip = 0;;) switch (_fun112429_ip) {
                            case 0:
                                var2 = _closure2_slot8;
                                var0 = var2.getState;
                                var0 = var0.bind(var2)();
                                var0 = var0.routes;
                                var3 = 0;
                                var0 = var0[var3];
                                var0 = var0.name;
                                var2 = 'auth';
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun112429_ip = 58;
                                    continue _fun112429
                                }
                            case 45:
                                var5 = _closure1_slot6;
                                var4 = undefined;
                                var0 = var5.bind(var4)();
                            case 58:
                                if (!var0) {
                                    _fun112429_ip = 129;
                                    continue _fun112429
                                }
                            case 61:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 16;
                                var4 = var4[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.trackRegTransition;
                                var0 = {};
                                var7 = _closure1_slot7;
                                var7 = var7.CAPTCHA;
                                var0.step = var7;
                                var6 = _closure1_slot8;
                                var6 = var6.SUBMITTED;
                                var0.actionType = var6;
                                var0 = var4.bind(var5)(var0);
                            case 129:
                                var6 = _closure2_slot0;
                                var5 = _closure2_slot6;
                                var0 = undefined;
                                var4 = arg0;
                                var4 = var6.bind(var0)(var4, var5);
                                var4 = _closure2_slot8;
                                var1 = var4.getState;
                                var1 = var1.bind(var4)();
                                var1 = var1.routes;
                                var1 = var1[var3];
                                var1 = var1.name;
                                var1 = var2 === var1;
                                if (!var1) {
                                    _fun112429_ip = 195;
                                    continue _fun112429
                                }
                            case 184:
                                var2 = _closure1_slot6;
                                var1 = var2.bind(var0)();
                            case 195:
                                if (!var1) {
                                    _fun112429_ip = 264;
                                    continue _fun112429
                                }
                            case 198:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 16;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.trackRegTransition;
                                var1 = {};
                                var5 = _closure1_slot7;
                                var5 = var5.CAPTCHA;
                                var1.step = var5;
                                var4 = _closure1_slot8;
                                var4 = var4.SUCCESS;
                                var1.actionType = var4;
                                var1 = var2.bind(var3)(var1);
                            case 264:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function(arg0) { // Environment: var1
                        _fun112430: for (var _fun112430_ip = 0;;) switch (_fun112430_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun112430_ip = 27;
                                    continue _fun112430
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 27:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onPress = var12;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["cY+Oob"];
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13068, 13069, 33, 1297, 1521, 14467, 4933, 4080, 14468, 3941, 1234, 4084, 5263, 14469, 13077, 2]);