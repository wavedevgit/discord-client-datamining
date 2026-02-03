// modules/verification/native/components/ResendEmail.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerificationModalScenes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'padding': 16,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'height': 190,
        'width': 220,
        'resizeMode': 'contain'
    };
    var3.image = var8;
    var8 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.body = var8;
    var8 = {
        'marginTop': 16,
        'width': '100%'
    };
    var3.resend = var8;
    var8 = {
        'marginTop': 8,
        'width': '100%'
    };
    var3.change = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ResendEmail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun60586: for (var _fun60586_ip = 0;;) switch (_fun60586_ip) {
            case 0:
                var0 = _closure1_slot12;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var2 = 9;
                var1 = var12[var2];
                var6 = var7.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var9
                    var2 = _closure1_slot8;
                    var0 = var2.getCurrentUser;
                    var0 = var0.bind(var2)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 != var0;
                    var1 = 'ResendEmail: user cannot be undefined';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1);
                var19 = var1.email;
                var1 = var1.verified;
                var _closure2_slot1 = var1;
                var2 = var12[var2];
                var6 = var7.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var9
                    var1 = _closure1_slot7;
                    var0 = var1.getAction;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var5.bind(var6)(var4, var2);
                var14 = _closure1_slot1;
                var2 = 11;
                var2 = var12[var2];
                var4 = var14.bind(var3)(var2);
                var2 = var4.isEmailReverification;
                var2 = var2.bind(var4)(var5);
                var5 = !var2;
                var4 = _closure1_slot4;
                var6 = var4.useState;
                var2 = false;
                var8 = var6.bind(var4)(var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var3)(var8, var2);
                var2 = 0;
                var11 = var6[var2];
                var2 = 1;
                var2 = var6[var2];
                var _closure2_slot2 = var2;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var1);
                var _closure2_slot3 = var2;
                var6 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    _fun60589: for (var _fun60589_ip = 0;;) switch (_fun60589_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun60589_ip = 25;
                                continue _fun60589
                            }
                        case 10:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = false;
                            var0 = var1 === var2;
                        case 25:
                            if (!var0) {
                                _fun60589_ip = 63;
                                continue _fun60589
                            }
                        case 28:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.close;
                            var0 = var0.bind(var1)();
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = function() { // Environment: var9
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot9;
                    var0 = var0.ENTER_EMAIL;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var16.container;
                var0.style = var4;
                var8 = _closure1_slot10;
                var6 = _closure1_slot5;
                var4 = {};
                var13 = var16.image;
                var4.style = var13;
                var13 = 13;
                var13 = var12[var13];
                var13 = var14.bind(var3)(var13);
                var4.source = var13;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(5);
                var4[0] = var6;
                var6 = 14;
                var13 = var12[var6];
                var13 = var7.bind(var3)(var13);
                var17 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var16.title;
                var13.style = var14;
                var14 = 15;
                var18 = var12[var14];
                var18 = var7.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.string;
                var18 = var12[var14];
                var18 = var7.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.fUtddV;
                var18 = var20.bind(var21)(var18);
                var13.children = var18;
                var13 = var8.bind(var3)(var17, var13);
                var4[1] = var13;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = var16.body;
                var6.style = var12;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = var12[var14];
                var17 = var13.bind(var3)(var17);
                var18 = var17.intl;
                if (var11) {
                    _fun60586_ip = 567;
                    continue _fun60586
                }
            case 533:
                var17 = var18.string;
                var11 = var12[var14];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.tSXg8O;
                var11 = var17.bind(var18)(var11);
                _fun60586_ip = 607;
                continue _fun60586;
            case 567:
                var17 = var18.format;
                var12 = var12[var14];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.JqLgQL;
                var12 = {};
                var12.email = var19;
                var11 = var17.bind(var18)(var13, var12);
            case 607:
                var6.children = var11;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var8 = _closure1_slot10;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var13 = 16;
                var6 = var11[var13];
                var7 = var12.bind(var3)(var6);
                var6 = {};
                var17 = var16.resend;
                var6.style = var17;
                var20 = _closure1_slot0;
                var17 = var11[var14];
                var17 = var20.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var11[var14];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.WnX4J2;
                var17 = var18.bind(var19)(var17);
                var6.text = var17;
                var11 = var11[var13];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.BRAND;
                var6.color = var11;
                var9 = function() {
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var1 = var8[var1];
                    var3 = var2.bind(var0)(var1);
                    var1 = var3.verifyResend;
                    var1 = var1.bind(var3)();
                    var1 = 18;
                    var1 = var8[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT';
                    var1.key = var5;
                    var7 = _closure1_slot0;
                    var4 = 15;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["84yeoz"];
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var9 = true;
                var6.shrink = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[3] = var6;
                if (!var5) {
                    _fun60586_ip = 893;
                    continue _fun60586
                }
            case 768:
                var8 = _closure1_slot10;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = var11[var13];
                var7 = var12.bind(var3)(var6);
                var6 = {};
                var16 = var16.change;
                var6.style = var16;
                var17 = _closure1_slot0;
                var15 = var11[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var11[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Vm8akB;
                var14 = var15.bind(var16)(var14);
                var6.text = var14;
                var11 = var11[var13];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.TRANSPARENT;
                var6.color = var11;
                var6.onPress = var10;
                var6.shrink = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 893:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1366, 1621, 660, 33, 1297, 1469, 566, 44, 7471, 7463, 7472, 3941, 1234, 4873, 4557, 3148, 2]);