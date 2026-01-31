// modules/pomelo/native/components/PomeloModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun80760: for (var _fun80760_ip = 0;;) switch (_fun80760_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var12 = var0.source;
                var _closure2_slot1 = var12;
                var1 = var0.onCloseModal;
                var _closure2_slot2 = var1;
                var11 = var0.oneClickFlow;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun80760_ip = 47;
                    continue _fun80760
                }
            case 45:
                var11 = false;
            case 47:
                var _closure2_slot3 = var11;
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var6 = {};
                var7 = _closure1_slot7;
                if (var11) {
                    _fun80760_ip = 80;
                    continue _fun80760
                }
            case 72:
                var0 = var7.DETAILS;
                _fun80760_ip = 86;
                continue _fun80760;
            case 80:
                var0 = var7.EDIT;
            case 86:
                var6.name = var0;
                var0 = new Array(1);
                var0[0] = var6;
                var4 = var1.bind(var4)(var0);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var3)(var4, var0);
                var0 = 0;
                var4 = var1[var0];
                var6 = {};
                var0 = _closure1_slot7;
                var1 = var0.DETAILS;
                var0 = {};
                var7 = false;
                var0.headerShown = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 6;
                var9 = var8[var13];
                var9 = var7.bind(var3)(var9);
                var9 = var9.ImpressionNames;
                var9 = var9.POMELO_LANDING;
                var0.impressionName = var9;
                var9 = {};
                var10 = var8[var13];
                var10 = var7.bind(var3)(var10);
                var10 = var10.ImpressionGroups;
                var10 = var10.POMELO_FLOW;
                var9.impression_group = var10;
                var9.source = var12;
                var9.one_click_flow = var11;
                var0.impressionProperties = var9;
                var9 = function() {
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.user = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.render = var9;
                var9 = true;
                var0.fullscreen = var9;
                var6[var1] = var0;
                var0 = _closure1_slot7;
                var1 = var0.EDIT;
                var0 = {};
                var10 = var8[var13];
                var10 = var7.bind(var3)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.POMELO_LANDING;
                var0.impressionName = var10;
                var10 = {};
                var13 = var8[var13];
                var13 = var7.bind(var3)(var13);
                var13 = var13.ImpressionGroups;
                var13 = var13.POMELO_FLOW;
                var10.impression_group = var13;
                var10.source = var12;
                var10.one_click_flow = var11;
                var0.impressionProperties = var10;
                var10 = function() {
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.onCloseModal = var5;
                    var5 = _closure2_slot0;
                    var0.user = var5;
                    var5 = _closure2_slot1;
                    var0.source = var5;
                    var4 = _closure2_slot3;
                    var0.oneClickFlow = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.render = var10;
                var0.fullscreen = var9;
                var6[var1] = var0;
                var0 = _closure1_slot7;
                var1 = var0.REMINDER;
                var0 = {
                    'title': '',
                    'render': null,
                    'fullscreen': true
                };
                var2 = function() {
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot2;
                    var0.onCloseModal = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.render = var2;
                var6[var1] = var0;
                var2 = _closure1_slot8;
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var6;
                var5 = _closure1_slot7;
                var5 = var5.DETAILS;
                var0.initialRouteName = var5;
                var0.initialRouteStack = var4;
                var4 = 'center';
                var0.headerTitleAlign = var4;
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
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TIMEOUT_TIME;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PomeloScreens;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun80764: for (var _fun80764_ip = 0;;) switch (_fun80764_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.source;
                var6 = var0.onCloseModal;
                var5 = var0.oneClickFlow;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var9 = var3.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var9)(var3, var0);
                var _closure2_slot0 = var8;
                var0 = null;
                var3 = var0 == var8;
                var12 = undefined;
                if (var3) {
                    _fun80764_ip = 105;
                    continue _fun80764
                }
            case 100:
                var12 = var8.id;
            case 105:
                _closure2_slot1 = var12;
                var11 = _closure1_slot4;
                var10 = var11.useMemo;
                var9 = new Array(1);
                var9[0] = var8;
                var3 = function() { // Environment: var2
                    _fun80766: for (var _fun80766_ip = 0;;) switch (_fun80766_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun80766_ip = 56;
                                continue _fun80766
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getUserAvatarURLForPomelo;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var11 = var10.bind(var11)(var3, var9);
                _closure2_slot2 = var11;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 14;
                var3 = var10[var3];
                var10 = var9.bind(var4)(var3);
                var9 = var10.useUsernameSuggestion;
                var3 = undefined;
                if (!var5) {
                    _fun80764_ip = 178;
                    continue _fun80764
                }
            case 174:
                var3 = _closure1_slot6;
            case 178:
                var3 = var9.bind(var10)(var3);
                var10 = _closure1_slot4;
                var9 = var10.useLayoutEffect;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var11;
                var2 = function() { // Environment: var2
                    _fun80767: for (var _fun80767_ip = 0;;) switch (_fun80767_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun80767_ip = 24;
                                continue _fun80767
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun80767_ip = 66;
                                continue _fun80767
                            }
                        case 27:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1, var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var3);
                var2 = var0 == var8;
                var0 = null;
                if (var2) {
                    _fun80764_ip = 261;
                    continue _fun80764
                }
            case 227:
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var1.user = var8;
                var1.source = var7;
                var1.onCloseModal = var6;
                var1.oneClickFlow = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 261:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1613, 10244, 10246, 33, 481, 10248, 10255, 10274, 5748, 1234, 632, 10257, 10275, 6914, 2]);