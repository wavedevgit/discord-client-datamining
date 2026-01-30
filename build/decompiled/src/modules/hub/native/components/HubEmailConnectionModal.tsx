// modules/hub/native/components/HubEmailConnectionModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: getScreens, environment: var1
        _fun80299: for (var _fun80299_ip = 0;;) switch (_fun80299_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var9 = undefined;
                var2 = var2.bind(var9)(var0);
                var0 = arg1;
                if (var0) {
                    _fun80299_ip = 49;
                    continue _fun80299
                }
            case 36:
                var0 = var2.getHeaderCloseButton;
                var6 = var0.bind(var2)(var4);
                _fun80299_ip = 60;
                continue _fun80299;
            case 49:
                var0 = var2.getHeaderBackButton;
                var6 = var0.bind(var2)(var4);
            case 60:
                var0 = {};
                var2 = _closure1_slot4;
                var4 = var2.STUDENT_PROMPT;
                var2 = {};
                var5 = true;
                var2.fullscreen = var5;
                var2.headerLeft = var6;
                var7 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var7;
                var7 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var7;
                var0[var4] = var2;
                var2 = _closure1_slot4;
                var4 = var2.VERIFY_EMAIL;
                var2 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 7;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.ImpressionNames;
                var7 = var7.HUB_EMAIL_SIGNUP;
                var2.impressionName = var7;
                var7 = function(arg0) { // Original name: impressionProperties, environment: var3
                    var0 = arg0;
                    var2 = var0.invite;
                    var0 = {};
                    var1 = null;
                    var1 = var1 != var2;
                    var0.has_invite = var1;
                    return var0;
                };
                var2.impressionProperties = var7;
                var2.fullscreen = var5;
                var2.headerLeft = var6;
                var6 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var6;
                var6 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var6;
                var0[var4] = var2;
                var2 = _closure1_slot4;
                var4 = var2.EMAIL_WAITLIST;
                var2 = {};
                var2.fullscreen = var5;
                var6 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var6;
                var6 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var6;
                var0[var4] = var2;
                var2 = _closure1_slot4;
                var4 = var2.SUBMIT_SCHOOL;
                var2 = {};
                var2.fullscreen = var5;
                var6 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var6;
                var6 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var6;
                var0[var4] = var2;
                var2 = _closure1_slot4;
                var4 = var2.SELECT_SCHOOL;
                var2 = {};
                var2.fullscreen = var5;
                var6 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var6;
                var6 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var6;
                var0[var4] = var2;
                var2 = _closure1_slot4;
                var4 = var2.VERIFY_PIN;
                var2 = {};
                var2.fullscreen = var5;
                var5 = function() { // Original name: headerTitle, environment: var3
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var5;
                var5 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var5;
                var0[var4] = var2;
                var1 = _closure1_slot4;
                var2 = var1.SELECT_SCHOOL_SEARCH;
                var1 = {
                    'fullscreen': true,
                    'headerShown': false
                };
                var3 = function(arg0) { // Original name: render, environment: var3
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = arg0;
                    var6 = var0;
                    var4 = copyDataProperties(var6, var5);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HubEmailConnectionSteps;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 4;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var8.marginTop = var10;
    var8.flex = var9;
    var3.safeArea = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/HubEmailConnectionModal.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: HubEmailConnectionModal, environment: var1
        var0 = arg0;
        var2 = var0.isNestedNavigator;
        var _closure2_slot0 = var2;
        var2 = var0.onCloseExtra;
        var _closure2_slot1 = var2;
        var2 = var0.invite;
        var _closure2_slot2 = var2;
        var0 = var0.displayStudentPrompt;
        var _closure2_slot3 = var0;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 15;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideHubUpsell;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 16;
        var2 = var8[var2];
        var3 = undefined;
        var4 = var7.bind(var3)(var2);
        var2 = var4.useNavigation;
        var2 = var2.bind(var4)();
        var _closure2_slot4 = var2;
        var4 = _closure1_slot1;
        var2 = 17;
        var2 = var8[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function() { // Environment: var1
            _fun80316: for (var _fun80316_ip = 0;;) switch (_fun80316_ip) {
                case 0:
                    var5 = function() { // Original name: handleClose, environment: var0
                        _fun80317: for (var _fun80317_ip = 0;;) switch (_fun80317_ip) {
                            case 0:
                                var4 = arguments[0];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun80317_ip = 11;
                                    continue _fun80317
                                }
                            case 9:
                                var4 = false;
                            case 11:
                                var3 = _closure2_slot1;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun80317_ip = 39;
                                    continue _fun80317
                                }
                            case 24:
                                var3 = _closure2_slot1;
                                var2 = true;
                                var2 = var2 === var4;
                                var2 = var3.bind(var0)(var2);
                            case 39:
                                var2 = _closure2_slot0;
                                if (var2) {
                                    _fun80317_ip = 81;
                                    continue _fun80317
                                }
                            case 46:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 18;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.close;
                                var2 = var2.bind(var3)();
                                _fun80317_ip = 95;
                                continue _fun80317;
                            case 81:
                                var2 = _closure2_slot4;
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
                            case 95:
                                return var0;
                        }
                    };
                    var1 = new Array(0);
                    var7 = _closure2_slot3;
                    var4 = var1.push;
                    var0 = {};
                    var6 = _closure1_slot4;
                    if (var7) {
                        _fun80316_ip = 75;
                        continue _fun80316
                    }
                case 37:
                    var7 = var6.VERIFY_EMAIL;
                    var0.name = var7;
                    var7 = {};
                    var8 = _closure2_slot2;
                    var7.invite = var8;
                    var7.onClose = var5;
                    var0.params = var7;
                    var7 = var4.bind(var1)(var0);
                    _fun80316_ip = 102;
                    continue _fun80316;
                case 75:
                    var6 = var6.STUDENT_PROMPT;
                    var0.name = var6;
                    var6 = {};
                    var6.onClose = var5;
                    var0.params = var6;
                    var0 = var4.bind(var1)(var0);
                case 102:
                    var0 = {};
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var5, var3);
                    var0.screens = var2;
                    var0.initialRouteStack = var1;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var5 = var1.screens;
        var4 = var1.initialRouteStack;
        var2 = _closure1_slot5;
        var0 = 19;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var0.initialRouteStack = var4;
        var4 = 20;
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
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: HubEmailConnectionScreen, environment: var1
        var0 = arg0;
        var4 = var0.children;
        var1 = _closure1_slot6;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 14;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var6 = true;
        var0.top = var6;
        var5 = var5.safeArea;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.HubEmailConnectionScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10174, 33, 1297, 4665, 4667, 10191, 481, 10194, 10198, 10200, 10201, 10202, 10205, 4696, 10207, 1469, 4890, 10209, 5747, 1234, 2]);