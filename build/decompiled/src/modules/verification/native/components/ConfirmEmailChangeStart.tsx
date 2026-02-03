// modules/verification/native/components/ConfirmEmailChangeStart.tsx
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
    var7 = var3.Image;
    var _closure1_slot7 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.container = var3;
    var3 = {
        'height': 190,
        'width': 220,
        'resizeMode': 'contain'
    };
    var6.image = var3;
    var3 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var6.title = var3;
    var3 = 18;
    var9 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var6.body = var9;
    var9 = {
        'marginTop': 16,
        'width': '100%'
    };
    var6.button = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ConfirmEmailChangeStart.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun60602: for (var _fun60602_ip = 0;;) switch (_fun60602_ip) {
            case 0:
                var0 = _closure1_slot12;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var _closure2_slot0 = var16;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useNavigation;
                var5 = var0.bind(var3)();
                var _closure2_slot1 = var5;
                var0 = 8;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var2.bind(var3)(var1, var0);
                var3 = _closure1_slot5;
                var1 = var3.useState;
                var0 = false;
                var2 = var1.bind(var3)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var13 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var2 = var3.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var11
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun60605: for (var _fun60605_ip = 0;;) switch (_fun60605_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun60605_ip = 279;
                                    continue _fun60605
                                }
                            case 10:
                                var4 = undefined;
                                var6 = undefined;
                                var3 = _closure2_slot2;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 28: // try_start_0 // try_start_1
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 9;
                                var1 = var7[var1];
                                var5 = var5.bind(var4)(var1);
                                var1 = var5.sendConfirmationCode;
                                var1 = var1.bind(var5)();
                                SaveGenerator(address = 65);
                            case 63:
                                return var1;
                            case 65:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun60605_ip = 122;
                                    continue _fun60605
                                }
                            case 71:
                                var7 = _closure2_slot1;
                                var5 = var7.push;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var3 = 10;
                                var3 = var9[var3];
                                var3 = var8.bind(var4)(var3);
                                var3 = var3.VerificationModalScenes;
                                var3 = var3.CONFIRM_EMAIL_CHANGE_CODE;
                                var3 = var5.bind(var7)(var3);
                            case 117: // try_end0
                                _fun60605_ip = 250;
                                continue _fun60605;
                            case 122: // try_end1
                                var5 = _closure2_slot2;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 136: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 7);
                                var5 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var3 = 11;
                                var3 = var8[var3];
                                var3 = var5.bind(var4)(var3);
                                var5 = var3.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var11 = var5;
                                var10 = var7;
                                var3 = new var11[var3](var10, var9);
                                var5 = var3 instanceof Object ? var3 : var5;
                                var3 = var5.getAnyErrorMessage;
                                var5 = var3.bind(var5)();
                                var6 = var5;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun60605_ip = 250;
                                    continue _fun60605
                                }
                            case 203:
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 12;
                                var1 = var5[var1];
                                var5 = var3.bind(var4)(var1);
                                var3 = var5.open;
                                var1 = {};
                                var7 = 'CONFIRM_EMAIL_ERROR';
                                var1.key = var7;
                                var1.content = var6;
                                var1 = var3.bind(var5)(var1);
                            case 250: // try_end2
                                var3 = _closure2_slot2;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                return var4;
                            case 264: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot2;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 279:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var4)(var0);
                var0 = new Array(1);
                var0[0] = var5;
                var14 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun60602_ip = 643;
                    continue _fun60602
                }
            case 181:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 13;
                var1 = var19[var15];
                var1 = var18.bind(var4)(var1);
                var5 = var1.intl;
                var3 = var5.format;
                var1 = var19[var15];
                var1 = var18.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.oMFSgi;
                var1 = {};
                var6 = var6.email;
                var1.oldEmail = var6;
                var17 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot10;
                var1 = 14;
                var1 = var19[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var6 = _closure1_slot8;
                var5 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var9 = _closure1_slot11;
                var8 = _closure1_slot6;
                var7 = {};
                var10 = var16.container;
                var7.style = var10;
                var12 = _closure1_slot7;
                var10 = {};
                var21 = var16.image;
                var10.style = var21;
                var20 = _closure1_slot1;
                var21 = 15;
                var21 = var19[var21];
                var21 = var20.bind(var4)(var21);
                var10.source = var21;
                var12 = var3.bind(var4)(var12, var10);
                var10 = new Array(4);
                var10[0] = var12;
                var12 = 16;
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var21 = var12.Text;
                var12 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = var16.title;
                var12.style = var22;
                var22 = var19[var15];
                var22 = var18.bind(var4)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var19[var15];
                var22 = var18.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.dQ71Wa;
                var22 = var23.bind(var24)(var22);
                var12.children = var22;
                var12 = var3.bind(var4)(var21, var12);
                var10[1] = var12;
                var12 = var17.map;
                var11 = function(arg0, arg1) { // Environment: var11
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var0 = _closure2_slot0;
                    var0 = var0.body;
                    var1.style = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11 = var12.bind(var17)(var11);
                var10[2] = var11;
                var17 = 17;
                var11 = var19[var17];
                var12 = var20.bind(var4)(var11);
                var11 = {};
                var17 = var19[var17];
                var17 = var20.bind(var4)(var17);
                var17 = var17.Sizes;
                var17 = var17.MEDIUM;
                var11.size = var17;
                var16 = var16.button;
                var11.style = var16;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.rXV81H;
                var15 = var16.bind(var17)(var15);
                var11.text = var15;
                var11.onPress = var14;
                var11.loading = var13;
                var13 = true;
                var11.shrink = var13;
                var11 = var3.bind(var4)(var12, var11);
                var10[3] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 643:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 33, 1297, 1469, 566, 7474, 670, 3352, 3148, 1234, 4897, 7472, 3941, 4873, 2]);