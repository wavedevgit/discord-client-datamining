// modules/nuf/native/components/DiscoverabilityModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun81080: for (var _fun81080_ip = 0;;) switch (_fun81080_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var2 = var6.useNavigation;
                var10 = var2.bind(var6)();
                var _closure2_slot0 = var10;
                var2 = 10;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    _fun81081: for (var _fun81081_ip = 0;;) switch (_fun81081_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun81081_ip = 33;
                                continue _fun81081
                            }
                        case 27:
                            var0 = var1.phone;
                        case 33:
                            return var0;
                    }
                };
                var9 = var5.bind(var6)(var4, var2);
                var _closure2_slot1 = var9;
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)();
                var7 = var2.allowPhone;
                var _closure2_slot2 = var7;
                var8 = var2.allowEmail;
                var _closure2_slot3 = var8;
                var6 = var7;
                if (var6) {
                    _fun81080_ip = 124;
                    continue _fun81080
                }
            case 121:
                var6 = var8;
            case 124:
                var _closure2_slot4 = var6;
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = new Array(5);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var7;
                var2[4] = var6;
                var1 = function() { // Environment: var1
                    _fun81082: for (var _fun81082_ip = 0;;) switch (_fun81082_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.updateDiscoverability;
                            var3 = {};
                            var6 = _closure2_slot2;
                            var3.phone = var6;
                            var6 = _closure2_slot3;
                            var3.email = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot4;
                            if (!var3) {
                                _fun81082_ip = 83;
                                continue _fun81082
                            }
                        case 66:
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun81082_ip = 83;
                                continue _fun81082
                            }
                        case 76:
                            var3 = _closure2_slot2;
                            if (var3) {
                                _fun81082_ip = 118;
                                continue _fun81082
                            }
                        case 83:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 13;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.closeDiscoverabilityModal;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            _fun81082_ip = 164;
                            continue _fun81082;
                        case 118:
                            var3 = _closure2_slot0;
                            var2 = var3.push;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 12;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DiscoverabilityScenes;
                            var1 = var1.NAME;
                            var1 = var2.bind(var3)(var1);
                        case 164:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 14;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onNext = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        _fun81083: for (var _fun81083_ip = 0;;) switch (_fun81083_ip) {
            case 0:
                var1 = _closure1_slot8;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)();
                var8 = var1.name;
                var1 = var1.allowPhone;
                var _closure2_slot0 = var1;
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun81084: for (var _fun81084_ip = 0;;) switch (_fun81084_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun81084_ip = 48;
                                continue _fun81084
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.closeDiscoverabilityModal;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var2);
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var4 = var3[var1];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var4);
                    var5 = var6.startContactSyncForDiscoverability;
                    var4 = arg0;
                    var4 = var5.bind(var6)(var4);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.closeDiscoverabilityModal;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var7 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 15;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onNext = var7;
                var7 = false;
                var4.loading = var7;
                var7 = null;
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun81083_ip = 167;
                    continue _fun81083
                }
            case 164:
                var7 = var8;
            case 167:
                var4.initialName = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var1 = function() {
        var3 = _closure1_slot7;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 17;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var9 = _closure1_slot3;
        var6 = var9.useMemo;
        var5 = function() { // Environment: var4
            var1 = function() {
                var0 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var2 = var2.DiscoverabilityScenes;
                var8 = var2.LANDING;
                var2 = {
                    'ignoreKeyboard': true,
                    'impressionName': null,
                    'fullscreen': true
                };
                var4 = 16;
                var9 = var7[var4];
                var9 = var6.bind(var5)(var9);
                var9 = var9.ImpressionNames;
                var9 = var9.DISCOVERABILITY;
                var2.impressionName = var9;
                var9 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerLeft = var9;
                var9 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var9;
                var9 = function() {
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot9;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var2.render = var9;
                var0[var8] = var2;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.DiscoverabilityScenes;
                var2 = var1.NAME;
                var1 = {
                    'ignoreKeyboard': true,
                    'impressionName': null,
                    'fullscreen': true
                };
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ImpressionNames;
                var4 = var4.DISCOVERABILITY;
                var1.impressionName = var4;
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var4;
                var3 = function() {
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot10;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4 = new Array(0);
        var4 = var6.bind(var9)(var5, var4);
        var0.screens = var4;
        var4 = 12;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.DiscoverabilityScenes;
        var4 = var4.LANDING;
        var0.initialRouteName = var4;
        var4 = 18;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
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
    var3 = arg3;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContactSyncModalStore;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ModalAnimation;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var13;
    var3.backButton = var10;
    var10 = {
        'flex': 1,
        'backgroundColor': null,
        'justifyContent': 'center',
        'paddingBottom': 44
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var11 = 8;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var12 = var11.NAV_BAR_HEIGHT;
    var11 = 32;
    var11 = var12 + var11;
    var10.paddingTop = var11;
    var3.container = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = var6.SLIDE_IN_OUT;
    var3.animation = var6;
    var1.modalConfig = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/components/DiscoverabilityModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10312, 1621, 660, 33, 1297, 671, 4703, 1469, 566, 10320, 670, 10311, 10324, 10327, 481, 5786, 1234, 2]);