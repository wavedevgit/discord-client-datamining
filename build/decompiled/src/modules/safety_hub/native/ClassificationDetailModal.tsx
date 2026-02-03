// modules/safety_hub/native/ClassificationDetailModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'CLASSIFICATION_DETAIL';
    var3.CLASSIFICATION_DETAIL = var6;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.headerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/ClassificationDetailModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79797: for (var _fun79797_ip = 0;;) switch (_fun79797_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.classificationId;
                var _closure2_slot0 = var11;
                var6 = var1.source;
                var _closure2_slot1 = var6;
                var10 = var1.shouldRedirectToAccountStanding;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun79797_ip = 38;
                    continue _fun79797
                }
            case 36:
                var10 = false;
            case 38:
                var _closure2_slot2 = var10;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                _closure2_slot3 = var9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 10;
                var1 = var8[var1];
                var2 = var7.bind(var3)(var1);
                var1 = var2.useSafetyHubInitialized;
                var1 = var1.bind(var2)();
                _closure2_slot4 = var1;
                var5 = _closure1_slot4;
                var12 = var5.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun79798: for (var _fun79798_ip = 0;;) switch (_fun79798_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun79798_ip = 45;
                                continue _fun79798
                            }
                        case 10:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.getSafetyHubData;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var12.bind(var5)(var1, var2);
                var1 = 12;
                var1 = var8[var1];
                var2 = var7.bind(var3)(var1);
                var1 = var2.useIsFocused;
                var1 = var1.bind(var2)();
                var2 = var5.useMemo;
                var1 = new Array(4);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var6;
                var0 = function() { // Environment: var0
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot2;
                    var7 = _closure2_slot3;
                    var6 = _closure2_slot1;
                    var1 = function arg0, arg1, arg2, arg3() {
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = arg3;
                        var _closure4_slot2 = var0;
                        var6 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var _closure4_slot3 = var6;
                        var0 = {};
                        var1 = _closure1_slot7;
                        var2 = var1.CLASSIFICATION_DETAIL;
                        var1 = {};
                        var5 = arg2;
                        var5 = var5.headerStyle;
                        var1.headerStyle = var5;
                        var5 = function() {
                            var0 = null;
                            return var0;
                        };
                        var1.headerTitle = var5;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 6;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var7.bind(var4)(var5);
                        var4 = var5.getHeaderCloseButton;
                        var4 = var4.bind(var5)(var6);
                        var1.headerLeft = var4;
                        var3 = function() {
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 7;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = _closure4_slot0;
                            var0.classificationId = var6;
                            var5 = _closure4_slot2;
                            var0.source = var5;
                            var5 = function() {
                                _fun79804: for (var _fun79804_ip = 0;;) switch (_fun79804_ip) {
                                    case 0:
                                        var2 = _closure4_slot3;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)();
                                        var1 = _closure4_slot1;
                                        if (!var1) {
                                            _fun79804_ip = 100;
                                            continue _fun79804
                                        }
                                    case 20:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var1 = 8;
                                        var1 = var6[var1];
                                        var3 = var5.bind(var0)(var1);
                                        var2 = var3.openUserSettings;
                                        var1 = {};
                                        var4 = _closure1_slot5;
                                        var4 = var4.ACCOUNT;
                                        var1.screen = var4;
                                        var4 = 9;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var4 = var4.AccountSettingsTabs;
                                        var4 = var4.STANDING;
                                        var1.subsection = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 100:
                                        return var0;
                                }
                            };
                            var0.onClose = var5;
                            var4 = function() {
                                var1 = _closure4_slot3;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var1 = 8;
                                var1 = var6[var1];
                                var3 = var5.bind(var0)(var1);
                                var2 = var3.openUserSettings;
                                var1 = {};
                                var4 = _closure1_slot5;
                                var4 = var4.ACCOUNT;
                                var1.screen = var4;
                                var4 = 9;
                                var4 = var6[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.AccountSettingsTabs;
                                var4 = var4.STANDING;
                                var1.subsection = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onError = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var10 = undefined;
                    var0 = var10[var1](var9, var8, var7, var6, var5);
                    return var0;
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot6;
                var0 = 13;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var5;
                var4 = _closure1_slot7;
                var4 = var4.CLASSIFICATION_DETAIL;
                var0.initialRouteName = var4;
                var4 = 14;
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
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 4561, 4705, 10151, 5922, 10182, 11570, 10159, 1470, 5786, 1234, 2]);