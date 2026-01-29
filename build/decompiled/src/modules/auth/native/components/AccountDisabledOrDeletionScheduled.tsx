// modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LoginStates;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'paddingBottom': 16,
        'paddingHorizontal': 16
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'marginBottom': 32,
        'alignSelf': 'center'
    };
    var3.image = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'lineHeight': 18,
        'marginBottom': 24,
        'textAlign': 'center'
    };
    var3.description = var8;
    var8 = {};
    var9 = 12;
    var8.marginBottom = var9;
    var3.deleteButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AccountDisabledOrDeletionScheduled, environment: var1
        _fun100815: for (var _fun100815_ip = 0;;) switch (_fun100815_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.handleLogin;
                var _closure2_slot0 = var6;
                var2 = var1.onReset;
                var _closure2_slot1 = var2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var3 = undefined;
                var4 = var5.bind(var3)(var1);
                var1 = var4.useNavigation;
                var4 = var1.bind(var4)();
                var _closure2_slot2 = var4;
                var1 = 8;
                var1 = var8[var1];
                var9 = var5.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getLoginStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var9)(var5, var1);
                var _closure2_slot3 = var1;
                var5 = _closure1_slot3;
                var9 = var5.useRef;
                var8 = null;
                var8 = var9.bind(var5)(var8);
                var _closure2_slot4 = var8;
                var9 = var5.useEffect;
                var8 = new Array(2);
                var8[0] = var1;
                var8[1] = var4;
                var4 = function() { // Environment: var0
                    _fun100817: for (var _fun100817_ip = 0;;) switch (_fun100817_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.current;
                            var1 = _closure2_slot3;
                            if (!(var2 !== var1)) {
                                _fun100817_ip = 110;
                                continue _fun100817
                            }
                        case 20:
                            var1 = _closure2_slot4;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun100817_ip = 51;
                                continue _fun100817
                            }
                        case 35:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot3;
                            var2.current = var1;
                            _fun100817_ip = 110;
                            continue _fun100817;
                        case 51:
                            var3 = _closure2_slot3;
                            var1 = _closure1_slot6;
                            var1 = var1.ACCOUNT_SCHEDULED_FOR_DELETION;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun100817_ip = 93;
                                continue _fun100817
                            }
                        case 75:
                            var3 = _closure2_slot3;
                            var2 = _closure1_slot6;
                            var2 = var2.ACCOUNT_DISABLED;
                            var1 = var3 !== var2;
                        case 93:
                            if (!var1) {
                                _fun100817_ip = 110;
                                continue _fun100817
                            }
                        case 96:
                            var1 = _closure2_slot2;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var9.bind(var5)(var4, var8);
                var8 = var5.useCallback;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun100818: for (var _fun100818_ip = 0;;) switch (_fun100818_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun100818_ip = 25;
                                continue _fun100818
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun100818_ip = 60;
                            continue _fun100818;
                        case 25:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.loginReset;
                            var0 = var0.bind(var1)();
                        case 60:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = var8.bind(var5)(var2, var4);
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun100819: for (var _fun100819_ip = 0;;) switch (_fun100819_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var0 = var1.getCredentials;
                            var0 = var0.bind(var1)();
                            var4 = var0.login;
                            var1 = var0.password;
                            var3 = _closure2_slot0;
                            var2 = '';
                            var0 = undefined;
                            if (!(var0 !== var1)) {
                                _fun100819_ip = 49;
                                continue _fun100819
                            }
                        case 46:
                            var2 = var1;
                        case 49:
                            var1 = true;
                            var1 = var3.bind(var0)(var4, var2, var1);
                            return var0;
                    }
                };
                var12 = var4.bind(var5)(var0, var2);
                var0 = _closure1_slot9;
                var11 = var0.bind(var3)();
                var0 = _closure1_slot6;
                var0 = var0.ACCOUNT_DISABLED;
                var4 = var1 === var0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var16 = 10;
                var1 = var0[var16];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var16];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                if (var4) {
                    _fun100815_ip = 296;
                    continue _fun100815
                }
            case 281:
                var5 = var0.ZFWofo;
                var18 = var1.bind(var2)(var5);
                _fun100815_ip = 309;
                continue _fun100815;
            case 296:
                var0 = var0["j3rC+U"];
                var18 = var1.bind(var2)(var0);
            case 309:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var16];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var16];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                if (var4) {
                    _fun100815_ip = 368;
                    continue _fun100815
                }
            case 353:
                var4 = var0["pCBti+"];
                var10 = var1.bind(var2)(var4);
                _fun100815_ip = 381;
                continue _fun100815;
            case 368:
                var0 = var0["6eNTWe"];
                var10 = var1.bind(var2)(var0);
            case 381:
                var2 = _closure1_slot7;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 11;
                var0 = var15[var0];
                var1 = var14.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var11.container;
                var4.style = var8;
                var19 = _closure1_slot0;
                var7 = 12;
                var7 = var15[var7];
                var7 = var19.bind(var3)(var7);
                var8 = var7.WumpTrash;
                var7 = {};
                var9 = var11.image;
                var7.style = var9;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = 13;
                var9 = var15[var8];
                var9 = var19.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var20 = var11.title;
                var9.style = var20;
                var9.children = var18;
                var9 = var2.bind(var3)(var13, var9);
                var7[1] = var9;
                var8 = var15[var8];
                var8 = var19.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var11.description;
                var8.style = var13;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[2] = var8;
                var8 = {};
                var13 = 14;
                var9 = var15[var13];
                var10 = var14.bind(var3)(var9);
                var9 = {};
                var18 = var15[var13];
                var18 = var14.bind(var3)(var18);
                var18 = var18.Sizes;
                var18 = var18.MEDIUM;
                var9.size = var18;
                var18 = var15[var16];
                var18 = var19.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.string;
                var18 = var15[var16];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.JhDw5o;
                var18 = var20.bind(var21)(var18);
                var9.text = var18;
                var9.onPress = var17;
                var11 = var11.deleteButton;
                var9.style = var11;
                var10 = var2.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var15[var13];
                var11 = var14.bind(var3)(var10);
                var10 = {};
                var17 = var15[var13];
                var17 = var14.bind(var3)(var17);
                var17 = var17.Sizes;
                var17 = var17.MEDIUM;
                var10.size = var17;
                var17 = var15[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var15[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.v51oiN;
                var16 = var17.bind(var18)(var16);
                var10.text = var16;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Colors;
                var13 = var13.GREY;
                var10.color = var13;
                var10.onPress = var12;
                var10 = var2.bind(var3)(var11, var10);
                var9[1] = var10;
                var8.children = var9;
                var8 = var6.bind(var3)(var5, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1216, 660, 33, 1297, 671, 1469, 566, 4514, 1234, 7488, 13074, 3895, 4829, 2]);