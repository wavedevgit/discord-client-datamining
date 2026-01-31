// modules/verification/native/components/Overview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Endpoints;
    var _closure1_slot7 = var6;
    var6 = var3.VerificationModalScenes;
    var _closure1_slot8 = var6;
    var6 = var3.VerificationTypes;
    var _closure1_slot9 = var6;
    var3 = var3.HelpdeskArticles;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot10 = var8;
    var8 = var6.Fragment;
    var _closure1_slot11 = var8;
    var6 = var6.jsxs;
    var _closure1_slot12 = var6;
    var6 = 6;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var8 = var9.createStyles;
    var6 = {};
    var10 = {};
    var10.flex = var11;
    var12 = 7;
    var11 = var5[var12];
    var11 = var7.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var6.container = var10;
    var11 = 20;
    var10 = {
        'flex': 1,
        'padding': 20,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var6.containerInner = var10;
    var10 = {
        'height': 190,
        'width': 220,
        'resizeMode': 'contain'
    };
    var6.image = var10;
    var10 = {
        'marginTop': 20,
        'fontSize': 17,
        'textAlign': 'center'
    };
    var13 = var5[var12];
    var13 = var7.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var13;
    var6.title = var10;
    var10 = {
        'marginTop': 4,
        'marginBottom': 20,
        'fontSize': 14,
        'textAlign': 'center'
    };
    var12 = var5[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_400;
    var10.color = var12;
    var6.body = var10;
    var10 = {
        'width': '60%',
        'justifyContent': 'center'
    };
    var6.blocks = var10;
    var10 = {};
    var10.marginBottom = var11;
    var6.verificationType = var10;
    var10 = {
        'marginBottom': 20,
        'marginHorizontal': 20,
        'alignSelf': 'center'
    };
    var6.button = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var5[var6];
    var7 = var7.bind(var0)(var6);
    var6 = var7.getArticleURL;
    var3 = var3.VERIFICATION_FAQ;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/Overview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot13;
        var3 = undefined;
        var13 = var1.bind(var3)();
        var _closure2_slot0 = var13;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 9;
        var1 = var10[var1];
        var7 = var9.bind(var3)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var1;
        var12 = _closure1_slot1;
        var1 = 10;
        var1 = var10[var1];
        var1 = var12.bind(var3)(var1);
        var20 = var1.areVerificationTypesEqual;
        var22 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getAction;
            var2 = var1.bind(var2)();
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var0 = var1.getVerificationTypes;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var21 = new Array(0);
        var24 = var7;
        var23 = var5;
        var5 = var24[var6](var23, var22, var21, var20, var19);
        var _closure2_slot1 = var5;
        var1 = 11;
        var1 = var10[var1];
        var2 = var9.bind(var3)(var1);
        var1 = var2.useNavigation;
        var6 = var1.bind(var2)();
        var _closure2_slot2 = var6;
        var1 = 12;
        var2 = var10[var1];
        var2 = var12.bind(var3)(var2);
        var1 = var10[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.BackPressHandler;
        var1 = var1.minimize;
        var1 = var2.bind(var3)(var1);
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var13;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var5 = _closure2_slot1;
            var4 = var5.map;
            var0 = function(arg0) { // Environment: var0
                _fun114424: for (var _fun114424_ip = 0;;) switch (_fun114424_ip) {
                    case 0:
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var0 = _closure1_slot9;
                        var0 = var0.CAPTCHA;
                        if (!(var4 !== var0)) {
                            _fun114424_ip = 118;
                            continue _fun114424
                        }
                    case 26:
                        var3 = _closure1_slot10;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 13;
                        var0 = var9[var0];
                        var2 = undefined;
                        var1 = var8.bind(var2)(var0);
                        var0 = {};
                        var7 = _closure2_slot0;
                        var7 = var7.verificationType;
                        var0.style = var7;
                        var7 = 10;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.getButtonTitle;
                        var7 = var7.bind(var8)(var4);
                        var0.text = var7;
                        var7 = function() {
                            _fun114427: for (var _fun114427_ip = 0;;) switch (_fun114427_ip) {
                                case 0:
                                    var0 = _closure1_slot8;
                                    var2 = var0.ADD_PHONE;
                                    var4 = _closure4_slot0;
                                    var0 = _closure1_slot9;
                                    var0 = var0.EMAIL_OR_PHONE;
                                    var0 = var4 !== var0;
                                    if (!var0) {
                                        _fun114427_ip = 55;
                                        continue _fun114427
                                    }
                                case 37:
                                    var5 = _closure4_slot0;
                                    var4 = _closure1_slot9;
                                    var4 = var4.EMAIL;
                                    var0 = var5 !== var4;
                                case 55:
                                    if (!var0) {
                                        _fun114427_ip = 76;
                                        continue _fun114427
                                    }
                                case 58:
                                    var4 = _closure4_slot0;
                                    var3 = _closure1_slot9;
                                    var3 = var3.REVERIFY_EMAIL;
                                    var0 = var4 !== var3;
                                case 76:
                                    if (var0) {
                                        _fun114427_ip = 168;
                                        continue _fun114427
                                    }
                                case 79:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 17;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.accountDetailsInit;
                                    var3 = var3.bind(var4)();
                                    var4 = _closure1_slot6;
                                    var3 = var4.getCurrentUser;
                                    var4 = var3.bind(var4)();
                                    var3 = null;
                                    var5 = var3 == var4;
                                    if (var5) {
                                        _fun114427_ip = 139;
                                        continue _fun114427
                                    }
                                case 133:
                                    var0 = var4.email;
                                case 139:
                                    if (!(var3 == var0)) {
                                        _fun114427_ip = 155;
                                        continue _fun114427
                                    }
                                case 143:
                                    var0 = _closure1_slot8;
                                    var0 = var0.ENTER_EMAIL;
                                    _fun114427_ip = 165;
                                    continue _fun114427;
                                case 155:
                                    var1 = _closure1_slot8;
                                    var0 = var1.RESEND_EMAIL;
                                case 165:
                                    var2 = var0;
                                case 168:
                                    var1 = _closure2_slot2;
                                    var0 = var1.push;
                                    var0 = var0.bind(var1)(var2);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.onPress = var7;
                        var0 = var3.bind(var2)(var1, var0, var4);
                        _fun114424_ip = 220;
                        continue _fun114424;
                    case 118:
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 13;
                        var1 = var10[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var9 = _closure1_slot0;
                        var6 = 14;
                        var7 = var10[var6];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6["3413d0"];
                        var6 = var7.bind(var8)(var6);
                        var1.text = var6;
                        var5 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.showCaptcha;
                            var3 = var1.bind(var2)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 16;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var3 = var1.HTTP;
                                var2 = var3.post;
                                var1 = {};
                                var4 = _closure1_slot7;
                                var4 = var4.CAPTCHA;
                                var1.url = var4;
                                var4 = {};
                                var5 = arg0;
                                var4.captcha_key = var5;
                                var1.body = var4;
                                var4 = true;
                                var1.oldFormErrors = var4;
                                var1.rejectWithError = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1.onPress = var5;
                        var0 = var4.bind(var3)(var2, var1);
                    case 220:
                        return var0;
                }
            };
            var0 = var4.bind(var5)(var0);
            var1.children = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var11 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var13.container;
        var0.style = var4;
        var4 = {};
        var5 = var13.containerInner;
        var4.style = var5;
        var7 = _closure1_slot10;
        var5 = 18;
        var5 = var10[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'heading-lg/semibold',
            'style': null,
            'accessibilityRole': 'header'
        };
        var8 = var13.title;
        var5.style = var8;
        var8 = 14;
        var14 = var10[var8];
        var14 = var9.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var10[var8];
        var14 = var9.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.Iz0kDg;
        var14 = var15.bind(var16)(var14);
        var5.children = var14;
        var6 = var7.bind(var3)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var6 = 19;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var14 = var6.TextWithIOSLinkWorkaround;
        var6 = {};
        var15 = 'text-sm/medium';
        var6.variant = var15;
        var15 = var13.body;
        var6.style = var15;
        var15 = var10[var8];
        var15 = var9.bind(var3)(var15);
        var18 = var15.intl;
        var17 = var18.format;
        var15 = var10[var8];
        var15 = var9.bind(var3)(var15);
        var15 = var15.t;
        var16 = var15["0rqMV5"];
        var15 = {};
        var19 = _closure1_slot14;
        var15.helpCenterURL = var19;
        var15 = var17.bind(var18)(var16, var15);
        var6.children = var15;
        var6 = var7.bind(var3)(var14, var6);
        var5[1] = var6;
        var6 = {};
        var14 = var13.blocks;
        var6.style = var14;
        var11 = var11.bind(var3)();
        var6.children = var11;
        var6 = var7.bind(var3)(var1, var6);
        var5[2] = var6;
        var4.children = var5;
        var5 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var11 = 13;
        var5 = var10[var11];
        var6 = var12.bind(var3)(var5);
        var5 = {};
        var13 = var13.button;
        var5.style = var13;
        var11 = var10[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.Colors;
        var11 = var11.TRANSPARENT;
        var5.color = var11;
        var11 = var10[var8];
        var11 = var9.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["Yl/Riu"];
        var8 = var11.bind(var12)(var8);
        var5.text = var8;
        var8 = 20;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.emailSupport;
        var5.onPress = var8;
        var8 = 'link';
        var5.accessibilityRole = var8;
        var8 = true;
        var5.shrink = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1366, 1613, 660, 33, 1297, 671, 1675, 566, 7433, 1469, 4038, 4836, 1234, 14402, 507, 5683, 3900, 5294, 10974, 2]);