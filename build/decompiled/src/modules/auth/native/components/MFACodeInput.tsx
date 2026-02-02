// modules/auth/native/components/MFACodeInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = 20;
    var11 = 'center';
    var9 = {
        'marginTop': 20,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignSelf': 'stretch'
    };
    var3.inputContainer = var9;
    var9 = {
        'flex': 1,
        'maxWidth': 336,
        'flexDirection': 'row',
        'alignSelf': 'stretch'
    };
    var3.input = var9;
    var9 = {};
    var9.justifyContent = var11;
    var3.title = var9;
    var9 = {
        'flex': 1,
        'maxHeight': 20,
        'alignItems': 'center',
        'marginTop': 8
    };
    var3.status = var9;
    var9 = {};
    var11 = 7;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var9.color = var11;
    var3.error = var9;
    var9 = {};
    var9.minHeight = var10;
    var3.minHeightGuard = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun81086: for (var _fun81086_ip = 0;;) switch (_fun81086_ip) {
            case 0:
                var2 = arg0;
                var20 = var2.appState;
                var _closure2_slot0 = var20;
                var1 = var2.handleSubmit;
                var _closure2_slot1 = var1;
                var19 = var2.style;
                var15 = var2.error;
                var10 = var2.showActivityIndicator;
                var2 = var2.resetLoginOnClose;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun81086_ip = 57;
                    continue _fun81086
                }
            case 55:
                var2 = true;
            case 57:
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot12;
                var16 = var2.bind(var3)();
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 8;
                var2 = var18[var13];
                var4 = var17.bind(var3)(var2);
                var2 = var4.useThemeContext;
                var2 = var2.bind(var4)();
                var12 = var2.theme;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var2 = '';
                var2 = var4.bind(var7)(var2);
                var21 = _closure1_slot3;
                var14 = 2;
                var4 = var21.bind(var3)(var2, var14);
                var2 = 0;
                var11 = var4[var2];
                _closure2_slot3 = var11;
                var5 = 1;
                var6 = var4[var5];
                _closure2_slot4 = var6;
                var4 = var7.useState;
                var8 = null;
                var4 = var4.bind(var7)(var8);
                var4 = var21.bind(var3)(var4, var14);
                var2 = var4[var2];
                _closure2_slot5 = var2;
                var4 = var4[var5];
                _closure2_slot6 = var4;
                var5 = var7.useCallback;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getString;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun81088: for (var _fun81088_ip = 0;;) switch (_fun81088_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.trim;
                                var2 = var0.bind(var1)();
                                var1 = _closure2_slot5;
                                var1 = var2 !== var1;
                                if (!var1) {
                                    _fun81088_ip = 114;
                                    continue _fun81088
                                }
                            case 27:
                                var4 = var2.length;
                                var3 = 6;
                                var3 = var3 === var4;
                                if (!var3) {
                                    _fun81088_ip = 66;
                                    continue _fun81088
                                }
                            case 42:
                                var5 = /^\d+$/;
                                var4 = var5.test;
                                var3 = var4.bind(var5)(var2);
                            case 66:
                                if (var3) {
                                    _fun81088_ip = 111;
                                    continue _fun81088
                                }
                            case 69:
                                var5 = var2.length;
                                var4 = 8;
                                var4 = var4 === var5;
                                if (!var4) {
                                    _fun81088_ip = 108;
                                    continue _fun81088
                                }
                            case 84:
                                var6 = /^[a-z0-9]+$/i;
                                var5 = var6.test;
                                var4 = var5.bind(var6)(var2);
                            case 108:
                                var3 = var4;
                            case 111:
                                var1 = var3;
                            case 114:
                                if (!var1) {
                                    _fun81088_ip = 137;
                                    continue _fun81088
                                }
                            case 117:
                                var3 = _closure2_slot4;
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var0 = _closure2_slot6;
                                var0 = var0.bind(var1)(var2);
                            case 137:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var5.bind(var7)(var2, var4);
                _closure2_slot7 = var2;
                var5 = _closure1_slot1;
                var4 = 10;
                var4 = var18[var4];
                var14 = var5.bind(var3)(var4);
                var4 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = function() { // Environment: var0
                        _fun81090: for (var _fun81090_ip = 0;;) switch (_fun81090_ip) {
                            case 0:
                                var2 = _closure1_slot7;
                                var1 = var2.isAuthenticated;
                                var1 = var1.bind(var2)();
                                if (var1) {
                                    _fun81090_ip = 76;
                                    continue _fun81090
                                }
                            case 20:
                                var1 = _closure2_slot2;
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 11;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                if (var1) {
                                    _fun81090_ip = 64;
                                    continue _fun81090
                                }
                            case 52:
                                var1 = var2.loginStatusReset;
                                var1 = var1.bind(var2)();
                                _fun81090_ip = 127;
                                continue _fun81090;
                            case 64:
                                var1 = var2.loginReset;
                                var1 = var1.bind(var2)();
                                _fun81090_ip = 127;
                                continue _fun81090;
                            case 76:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.getString;
                                var2 = var0.bind(var1)();
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    _fun81091: for (var _fun81091_ip = 0;;) switch (_fun81091_ip) {
                                        case 0:
                                            var0 = _closure2_slot3;
                                            var2 = '';
                                            var0 = var2 !== var0;
                                            if (!var0) {
                                                _fun81091_ip = 29;
                                                continue _fun81091
                                            }
                                        case 18:
                                            var3 = _closure2_slot3;
                                            var1 = arg0;
                                            var0 = var3 === var1;
                                        case 29:
                                            if (!var0) {
                                                _fun81091_ip = 68;
                                                continue _fun81091
                                            }
                                        case 32:
                                            var3 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 9;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var3.bind(var0)(var1);
                                            var0 = var1.copy;
                                            var0 = var0.bind(var1)(var2);
                                        case 68:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 127:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var14.bind(var3)(var4);
                var14 = var7.useEffect;
                var4 = new Array(2);
                var4[0] = var20;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun81092: for (var _fun81092_ip = 0;;) switch (_fun81092_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot8;
                            var1 = var1.ACTIVE;
                            if (!(var2 === var1)) {
                                _fun81092_ip = 34;
                                continue _fun81092
                            }
                        case 24:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var14.bind(var7)(var2, var4);
                var4 = var7.useEffect;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun81093: for (var _fun81093_ip = 0;;) switch (_fun81093_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.length;
                            var1 = 6;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun81093_ip = 50;
                                continue _fun81093
                            }
                        case 22:
                            var4 = /^\d+$/;
                            var3 = var4.test;
                            var2 = _closure2_slot3;
                            var1 = var3.bind(var4)(var2);
                        case 50:
                            if (var1) {
                                _fun81093_ip = 69;
                                continue _fun81093
                            }
                        case 53:
                            var2 = _closure2_slot3;
                            var3 = var2.length;
                            var2 = 8;
                            var1 = var2 === var3;
                        case 69:
                            if (!var1) {
                                _fun81093_ip = 87;
                                continue _fun81093
                            }
                        case 72:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var1, var2);
                var4 = var7.useImperativeHandle;
                var2 = arg1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = function() {
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = '';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.clear = var1;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var7)(var2, var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = _closure1_slot9;
                var4 = 12;
                var4 = var18[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {
                    'autoFocus': true,
                    'style': null,
                    'textStyle': null,
                    'value': null,
                    'autoCapitalize': 'none',
                    'maxLength': 8,
                    'textContentType': 'oneTimeCode'
                };
                var20 = var16.inputContainer;
                var14 = new Array(2);
                var14[0] = var20;
                var14[1] = var19;
                var4.style = var14;
                var14 = var16.input;
                var4.textStyle = var14;
                var4.value = var11;
                var4.onChangeText = var6;
                var6 = 13;
                var11 = var18[var6];
                var11 = var17.bind(var3)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var6 = var18[var6];
                var6 = var17.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.yO4lAM;
                var6 = var11.bind(var14)(var6);
                var4.accessibilityLabel = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var14 = var16.status;
                var11 = new Array(2);
                var11[0] = var14;
                var14 = global;
                var14 = var14.Boolean;
                var14 = var14.bind(var3)(var15);
                if (!var14) {
                    _fun81086_ip = 554;
                    continue _fun81086
                }
            case 548:
                var14 = var16.minHeightGuard;
            case 554:
                var11[1] = var14;
                var5.style = var11;
                if (var10) {
                    _fun81086_ip = 634;
                    continue _fun81086
                }
            case 565:
                var10 = var8 != var15;
                var8 = null;
                if (!var10) {
                    _fun81086_ip = 632;
                    continue _fun81086
                }
            case 574:
                var14 = _closure1_slot9;
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 14;
                var10 = var17[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var16 = var16.error;
                var10.style = var16;
                var16 = 'text-md/medium';
                var10.variant = var16;
                var10.children = var15;
                var8 = var14.bind(var3)(var11, var10);
            case 632:
                _fun81086_ip = 724;
                continue _fun81086;
            case 634:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var11 = var11.bind(var3)(var10);
                var10 = var11.isThemeDark;
                var11 = var10.bind(var11)(var12);
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 7;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.unsafe_rawColors;
                if (var11) {
                    _fun81086_ip = 698;
                    continue _fun81086
                }
            case 690:
                var12 = var10.PRIMARY_500;
                _fun81086_ip = 704;
                continue _fun81086;
            case 698:
                var12 = var10.WHITE;
            case 704:
                var11 = _closure1_slot9;
                var10 = _closure1_slot5;
                var9 = {};
                var9.color = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 724:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/MFACodeInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1216, 660, 33, 1297, 671, 3167, 5255, 4064, 4523, 5846, 1234, 3902, 2]);