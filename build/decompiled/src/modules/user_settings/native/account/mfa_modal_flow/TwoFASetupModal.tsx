// modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var0 = _closure1_slot9;
        var0 = var1.bind(var2)(var0);
        var5 = var0.length;
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 12;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PageMarker;
        var0 = {};
        var6 = _closure1_slot9;
        var4 = arg0;
        var4 = var6[var4];
        var0.currentPage = var4;
        var4 = 1;
        var4 = var5 - var4;
        var0.numMarkers = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var9 = var3.TwoFAModalSetupSections;
    var _closure1_slot5 = var9;
    var10 = 3;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var16 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var14 = var4.bind(var0)(var3);
    var11 = var14.createStyles;
    var8 = {};
    var3 = {};
    var3.flex = var13;
    var15 = 6;
    var15 = var5[var15];
    var15 = var6.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var15;
    var8.container = var3;
    var3 = {
        'position': 'absolute',
        'bottom': 12,
        'left': 12,
        'right': 12
    };
    var8.floatingButton = var3;
    var15 = {};
    var3 = 14;
    var15.fontSize = var3;
    var16 = var16.PRIMARY_SEMIBOLD;
    var15.fontFamily = var16;
    var8.buttonTextStyles = var15;
    var8 = var11.bind(var14)(var8);
    var _closure1_slot8 = var8;
    var8 = {};
    var11 = var9.LANDING;
    var8[var11] = var13;
    var11 = var9.SCAN;
    var8[var11] = var12;
    var9 = var9.ENTER_CODE;
    var8[var9] = var10;
    var _closure1_slot9 = var8;
    var8 = 13;
    var8 = var5[var8];
    var9 = var6.bind(var0)(var8);
    var8 = {};
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot10 = var8;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModal.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun80937: for (var _fun80937_ip = 0;;) switch (_fun80937_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.initialRouteName;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun80937_ip = 28;
                    continue _fun80937
                }
            case 15:
                var0 = _closure1_slot5;
                var5 = var0.LANDING;
            case 28:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.generateTotpSecret;
                    var1 = var0.bind(var1)();
                    var0 = function arg0() {
                        var5 = arg0;
                        var2 = _closure1_slot6;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 15;
                        var0 = var9[var0];
                        var7 = undefined;
                        var1 = var8.bind(var7)(var0);
                        var0 = {};
                        var0.totpSecret = var5;
                        var0 = var2.bind(var7)(var1, var0);
                        var _closure4_slot0 = var0;
                        var2 = _closure1_slot6;
                        var0 = 16;
                        var0 = var9[var0];
                        var1 = var8.bind(var7)(var0);
                        var0 = {};
                        var0.totpSecret = var5;
                        var0 = var2.bind(var7)(var1, var0);
                        var _closure4_slot1 = var0;
                        var0 = {};
                        var1 = _closure1_slot5;
                        var10 = var1.LANDING;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var5 = 17;
                        var4 = var9[var5];
                        var13 = var6.bind(var7)(var4);
                        var12 = var13.getHeaderCloseButton;
                        var4 = 8;
                        var11 = var9[var4];
                        var11 = var8.bind(var7)(var11);
                        var11 = var11.close;
                        var11 = var12.bind(var13)(var11);
                        var2.headerLeft = var11;
                        var11 = function() {
                            var2 = _closure1_slot12;
                            var0 = _closure1_slot5;
                            var1 = var0.LANDING;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() {
                            var0 = _closure1_slot10;
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var10 = var1.SCAN;
                        var2 = {};
                        var11 = function() {
                            var2 = _closure1_slot12;
                            var0 = _closure1_slot5;
                            var1 = var0.SCAN;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() {
                            var0 = _closure4_slot1;
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var10 = var1.ENTER_CODE;
                        var2 = {};
                        var11 = function() {
                            var2 = _closure1_slot12;
                            var0 = _closure1_slot5;
                            var1 = var0.ENTER_CODE;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() {
                            var0 = _closure4_slot0;
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var2 = var1.SUCCESS;
                        var1 = {};
                        var5 = var9[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.getHeaderCloseButton;
                        var4 = var9[var4];
                        var4 = var8.bind(var7)(var4);
                        var4 = var4.close;
                        var4 = var5.bind(var6)(var4);
                        var1.headerLeft = var4;
                        var4 = function() {
                            var0 = null;
                            return var0;
                        };
                        var1.headerTitle = var4;
                        var3 = function() {
                            var0 = _closure1_slot11;
                            return var0;
                        };
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = var0.bind(var2)(var1);
                    return var0;
                };
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot6;
                var7 = _closure1_slot0;
                var0 = 20;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.initialRouteName = var5;
                var0.screens = var4;
                var4 = 11;
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
                var4 = 'center';
                var0.headerTitleAlign = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun80948: for (var _fun80948_ip = 0;;) switch (_fun80948_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.children;
                var1 = _closure1_slot8;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var7 = var1.bind(var2)();
                var _closure2_slot0 = var7;
                var1 = var7.getState;
                var1 = var1.bind(var7)();
                var2 = var1.routes;
                var1 = var7.getState;
                var1 = var1.bind(var7)();
                var1 = var1.routes;
                var4 = var1.length;
                var1 = 1;
                var1 = var4 - var1;
                var1 = var2[var1];
                var14 = var1.name;
                var _closure2_slot1 = var14;
                var1 = _closure1_slot5;
                var1 = var1.ENTER_CODE;
                var5 = var14 !== var1;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var14;
                var0 = function() { // Environment: var0
                    _fun80949: for (var _fun80949_ip = 0;;) switch (_fun80949_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.LANDING;
                            if (!(var3 !== var2)) {
                                _fun80949_ip = 149;
                                continue _fun80949
                            }
                        case 27:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.SCAN;
                            if (!(var3 !== var2)) {
                                _fun80949_ip = 123;
                                continue _fun80949
                            }
                        case 45:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.ENTER_CODE;
                            if (!(var3 !== var2)) {
                                _fun80949_ip = 97;
                                continue _fun80949
                            }
                        case 63:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.close;
                            var2 = var2.bind(var3)();
                            _fun80949_ip = 173;
                            continue _fun80949;
                        case 97:
                            var4 = _closure2_slot0;
                            var3 = var4.push;
                            var2 = _closure1_slot5;
                            var2 = var2.SUCCESS;
                            var2 = var3.bind(var4)(var2);
                            _fun80949_ip = 173;
                            continue _fun80949;
                        case 123:
                            var4 = _closure2_slot0;
                            var3 = var4.push;
                            var2 = _closure1_slot5;
                            var2 = var2.ENTER_CODE;
                            var2 = var3.bind(var4)(var2);
                            _fun80949_ip = 173;
                            continue _fun80949;
                        case 149:
                            var2 = _closure2_slot0;
                            var1 = var2.push;
                            var0 = _closure1_slot5;
                            var0 = var0.SCAN;
                            var0 = var1.bind(var2)(var0);
                        case 173:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.container;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun80948_ip = 426;
                    continue _fun80948
                }
            case 195:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 9;
                var6 = var16[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var9 = true;
                var6.bottom = var9;
                var9 = var12.floatingButton;
                var6.style = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var9 = 10;
                var9 = var16[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.onPress = var15;
                var12 = var12.buttonTextStyles;
                var9.textStyle = var12;
                var12 = _closure1_slot5;
                var12 = var12.SUCCESS;
                if (!(var14 !== var12)) {
                    _fun80948_ip = 351;
                    continue _fun80948
                }
            case 294:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var12 = 11;
                var14 = var17[var12];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var17[var12];
                var12 = var16.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.XiOHRX;
                var12 = var14.bind(var15)(var12);
                _fun80948_ip = 406;
                continue _fun80948;
            case 351:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 11;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.i4jeWR;
                var12 = var14.bind(var15)(var13);
            case 406:
                var9.text = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 426:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TwoFASetupModalScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10237, 660, 33, 1297, 671, 1469, 10235, 4754, 4849, 1234, 10238, 10239, 10242, 10244, 10246, 5836, 4904, 7827, 5834, 2]);