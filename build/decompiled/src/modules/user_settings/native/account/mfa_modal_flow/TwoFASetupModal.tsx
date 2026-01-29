// modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getPageMarker, environment: var1
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
    var _closure1_slot10 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TwoFAModalSetupSections;
    var _closure1_slot5 = var6;
    var7 = 3;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot6 = var8;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var8 = var11.createStyles;
    var3 = {};
    var12 = {};
    var12.flex = var10;
    var14 = 6;
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var14;
    var3.container = var12;
    var12 = {
        'position': 'absolute',
        'bottom': 12,
        'left': 12,
        'right': 12
    };
    var3.floatingButton = var12;
    var12 = {};
    var14 = 14;
    var12.fontSize = var14;
    var13 = var13.PRIMARY_SEMIBOLD;
    var12.fontFamily = var13;
    var3.buttonTextStyles = var12;
    var3 = var8.bind(var11)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var8 = var6.LANDING;
    var3[var8] = var10;
    var8 = var6.SCAN;
    var3[var8] = var9;
    var6 = var6.ENTER_CODE;
    var3[var6] = var7;
    var _closure1_slot9 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModal.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: TwoFASetupModal, environment: var1
        _fun80974: for (var _fun80974_ip = 0;;) switch (_fun80974_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.initialRouteName;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun80974_ip = 28;
                    continue _fun80974
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
                    var0 = function(arg0) { // Original name: getScreens, environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = {};
                        var1 = _closure1_slot5;
                        var10 = var1.LANDING;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 13;
                        var7 = var9[var5];
                        var8 = undefined;
                        var13 = var6.bind(var8)(var7);
                        var12 = var13.getHeaderCloseButton;
                        var7 = _closure1_slot1;
                        var4 = 8;
                        var11 = var9[var4];
                        var11 = var7.bind(var8)(var11);
                        var11 = var11.close;
                        var11 = var12.bind(var13)(var11);
                        var2.headerLeft = var11;
                        var11 = function() { // Original name: headerTitle, environment: var3
                            var2 = _closure1_slot10;
                            var0 = _closure1_slot5;
                            var1 = var0.LANDING;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var10 = var1.SCAN;
                        var2 = {};
                        var11 = function() { // Original name: headerTitle, environment: var3
                            var2 = _closure1_slot10;
                            var0 = _closure1_slot5;
                            var1 = var0.SCAN;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 15;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.totpSecret = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var10 = var1.ENTER_CODE;
                        var2 = {};
                        var11 = function() { // Original name: headerTitle, environment: var3
                            var2 = _closure1_slot10;
                            var0 = _closure1_slot5;
                            var1 = var0.ENTER_CODE;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.headerTitle = var11;
                        var11 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure4_slot0;
                            var0.totpSecret = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.render = var11;
                        var0[var10] = var2;
                        var2 = var1.SUCCESS;
                        var1 = {};
                        var5 = var9[var5];
                        var6 = var6.bind(var8)(var5);
                        var5 = var6.getHeaderCloseButton;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.close;
                        var4 = var5.bind(var6)(var4);
                        var1.headerLeft = var4;
                        var4 = function() { // Original name: headerTitle, environment: var3
                            var0 = null;
                            return var0;
                        };
                        var1.headerTitle = var4;
                        var3 = function() { // Original name: render, environment: var3
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
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
    var1 = function(arg0) { // Original name: TwoFASetupModalScreen, environment: var1
        _fun80985: for (var _fun80985_ip = 0;;) switch (_fun80985_ip) {
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
                    _fun80986: for (var _fun80986_ip = 0;;) switch (_fun80986_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.LANDING;
                            if (!(var3 !== var2)) {
                                _fun80986_ip = 149;
                                continue _fun80986
                            }
                        case 27:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.SCAN;
                            if (!(var3 !== var2)) {
                                _fun80986_ip = 123;
                                continue _fun80986
                            }
                        case 45:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot5;
                            var2 = var2.ENTER_CODE;
                            if (!(var3 !== var2)) {
                                _fun80986_ip = 97;
                                continue _fun80986
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
                            _fun80986_ip = 173;
                            continue _fun80986;
                        case 97:
                            var4 = _closure2_slot0;
                            var3 = var4.push;
                            var2 = _closure1_slot5;
                            var2 = var2.SUCCESS;
                            var2 = var3.bind(var4)(var2);
                            _fun80986_ip = 173;
                            continue _fun80986;
                        case 123:
                            var4 = _closure2_slot0;
                            var3 = var4.push;
                            var2 = _closure1_slot5;
                            var2 = var2.ENTER_CODE;
                            var2 = var3.bind(var4)(var2);
                            _fun80986_ip = 173;
                            continue _fun80986;
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
                    _fun80985_ip = 426;
                    continue _fun80985
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
                    _fun80985_ip = 351;
                    continue _fun80985
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
                _fun80985_ip = 406;
                continue _fun80985;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10284, 660, 33, 1297, 671, 1469, 10282, 4690, 4829, 1234, 10285, 4661, 10286, 10289, 10290, 10292, 4884, 7455, 5744, 2]);