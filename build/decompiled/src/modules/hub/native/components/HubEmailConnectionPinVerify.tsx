// modules/hub/native/components/HubEmailConnectionPinVerify.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.Image;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.container = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 24
    };
    var3.description = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 12
    };
    var3.label = var8;
    var8 = {
        'alignSelf': 'center',
        'marginVertical': 8
    };
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function(arg0) { // Original name: presentResendToast, environment: var1
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 7;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var4 = 'HUB_EMAIL_RESET';
        var1.key = var4;
        var4 = arg0;
        var1.content = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var1.icon = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/HubEmailConnectionPinVerify.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HubEmailConnectionPinVerify, environment: var1
        _fun80336: for (var _fun80336_ip = 0;;) switch (_fun80336_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.email;
                var _closure2_slot0 = var23;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var1 = var1.onClose;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot11;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var2 = _closure1_slot5;
                var5 = var2.useEffect;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.initialize;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.terminate;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var1 = var5.bind(var2)(var1, var4);
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 11;
                var1 = var17[var1];
                var6 = var14.bind(var3)(var1);
                var5 = var6.throttle;
                var4 = _closure1_slot4;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun80341: for (var _fun80341_ip = 0;;) switch (_fun80341_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun80341_ip = 311;
                                    continue _fun80341
                                }
                            case 10:
                                var1 = undefined;
                                var4 = undefined;
                                var7 = undefined;
                            case 16: // try_start_0
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 12;
                                var2 = var6[var2];
                                var9 = var5.bind(var1)(var2);
                                var8 = var9.sendVerificationEmail;
                                var6 = _closure2_slot0;
                                var5 = _closure2_slot1;
                                var2 = true;
                                var2 = var8.bind(var9)(var6, var2, var5);
                                SaveGenerator(address = 69);
                            case 67:
                                return var2;
                            case 69:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun80341_ip = 146;
                                    continue _fun80341
                                }
                            case 75:
                                var5 = _closure1_slot12;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var3 = 13;
                                var6 = var10[var3];
                                var6 = var9.bind(var1)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var3 = var10[var3];
                                var3 = var9.bind(var1)(var3);
                                var3 = var3.t;
                                var3 = var3["2bO4dz"];
                                var3 = var6.bind(var8)(var3);
                                var3 = var5.bind(var1)(var3);
                            case 141: // try_end0
                                _fun80341_ip = 308;
                                continue _fun80341;
                            case 146:
                                return var2;
                            case 149: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 14;
                                var3 = var8[var3];
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.APIError;
                                var5 = var3.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var14 = var5;
                                var13 = var6;
                                var3 = new var14[var3](var13, var12);
                                var5 = var3 instanceof Object ? var3 : var5;
                                var7 = var5;
                                var3 = _closure1_slot12;
                                var6 = null;
                                var8 = var6 == var5;
                                var5 = undefined;
                                if (var8) {
                                    _fun80341_ip = 234;
                                    continue _fun80341
                                }
                            case 221:
                                var8 = var7;
                                var7 = var8.getAnyErrorMessage;
                                var5 = var7.bind(var8)();
                            case 234:
                                var4 = var5;
                                if (!(var6 == var5)) {
                                    _fun80341_ip = 300;
                                    continue _fun80341
                                }
                            case 241:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 13;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.FPzC5z;
                                var2 = var5.bind(var6)(var2);
                                _fun80341_ip = 303;
                                continue _fun80341;
                            case 300:
                                var2 = var4;
                            case 303:
                                var2 = var3.bind(var1)(var2);
                            case 308:
                                return var1;
                            case 311:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var4.bind(var3)(var1);
                var1 = 1000;
                var24 = var5.bind(var6)(var4, var1);
                var1 = var2.useState;
                var8 = null;
                var4 = var1.bind(var2)(var8);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var13 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun80344: for (var _fun80344_ip = 0;;) switch (_fun80344_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun80344_ip = 225;
                                        continue _fun80344
                                    }
                                case 10:
                                    var2 = arg0;
                                    var1 = undefined;
                                    var3 = undefined;
                                case 17: // try_start_0
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var5 = 12;
                                    var5 = var7[var5];
                                    var9 = var6.bind(var1)(var5);
                                    var8 = var9.verifyCode;
                                    var7 = var2;
                                    var6 = _closure2_slot1;
                                    var2 = _closure2_slot0;
                                    var2 = var8.bind(var9)(var7, var6, var2);
                                    SaveGenerator(address = 71);
                                case 69:
                                    return var2;
                                case 71:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun80344_ip = 153;
                                        continue _fun80344
                                    }
                                case 77:
                                    var8 = _closure1_slot8;
                                    var7 = var8.getGuild;
                                    var6 = _closure2_slot1;
                                    var7 = var7.bind(var8)(var6);
                                    var3 = var7;
                                    var6 = null;
                                    if (!(var6 != var7)) {
                                        _fun80344_ip = 151;
                                        continue _fun80344
                                    }
                                case 104:
                                    var6 = _closure2_slot2;
                                    var5 = true;
                                    var5 = var6.bind(var1)(var5);
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var4 = 15;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var1)(var4);
                                    var4 = var5.transitionToGuild;
                                    var3 = var3.id;
                                    var3 = var4.bind(var5)(var3);
                                case 151: // try_end0
                                    _fun80344_ip = 222;
                                    continue _fun80344;
                                case 153:
                                    return var2;
                                case 156: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var3 = _closure2_slot3;
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var1)(var2);
                                    var2 = var2.APIError;
                                    var4 = var2.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var13 = var4;
                                    var12 = var5;
                                    var2 = new var13[var2](var12, var11);
                                    var2 = var2 instanceof Object ? var2 : var4;
                                    var2 = var3.bind(var1)(var2);
                                case 222:
                                    return var1;
                                case 225:
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
                var18 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var16 = _closure1_slot0;
                var0 = 16;
                var0 = var17[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.HubEmailConnectionScreen;
                var0 = {};
                var6 = _closure1_slot10;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var12.container;
                var4.style = var7;
                var10 = _closure1_slot7;
                var7 = {};
                var11 = 17;
                var11 = var17[var11];
                var11 = var14.bind(var3)(var11);
                var7.source = var11;
                var10 = var2.bind(var3)(var10, var7);
                var7 = new Array(6);
                var7[0] = var10;
                var14 = 18;
                var10 = var17[var14];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var12.title;
                var10.style = var15;
                var15 = 13;
                var19 = var17[var15];
                var19 = var16.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var17[var15];
                var19 = var16.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.SJ3Lxc;
                var19 = var20.bind(var21)(var19);
                var10.children = var19;
                var10 = var2.bind(var3)(var11, var10);
                var7[1] = var10;
                var10 = 19;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.TextWithIOSLinkWorkaround;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var12.description;
                var10.style = var19;
                var19 = var17[var15];
                var19 = var16.bind(var3)(var19);
                var22 = var19.intl;
                var21 = var22.format;
                var19 = var17[var15];
                var19 = var16.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["b+W0oq"];
                var19 = {};
                var19.onClick = var24;
                var19.email = var23;
                var19 = var21.bind(var22)(var20, var19);
                var10.children = var19;
                var10 = var2.bind(var3)(var11, var10);
                var7[2] = var10;
                var10 = var17[var14];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var19 = var12.label;
                var10.style = var19;
                var19 = var17[var15];
                var19 = var16.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.rpWT1s;
                var15 = var19.bind(var20)(var15);
                var10.children = var15;
                var10 = var2.bind(var3)(var11, var10);
                var7[3] = var10;
                var15 = 20;
                var10 = var17[var15];
                var10 = var16.bind(var3)(var10);
                var11 = var10.CodeBlocks;
                var10 = {
                    'hasError': false,
                    'count': 8
                };
                var10.onCodeEntered = var18;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.CodeType;
                var15 = var15.ALPHANUMERIC;
                var10.codeType = var15;
                var10 = var2.bind(var3)(var11, var10);
                var7[4] = var10;
                var8 = var8 != var13;
                if (!var8) {
                    _fun80336_ip = 736;
                    continue _fun80336
                }
            case 667:
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var14];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-critical'
                };
                var12 = var12.error;
                var9.style = var12;
                var12 = var13.getAnyErrorMessage;
                var12 = var12.bind(var13)();
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 736:
                var7[5] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1410, 33, 1297, 3107, 7544, 10197, 7696, 22, 10189, 1234, 3309, 5573, 10184, 10198, 3895, 5289, 7543, 2]);