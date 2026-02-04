// modules/nuf/native/components/RedesignDiscoverabilityModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun113965: for (var _fun113965_ip = 0;;) switch (_fun113965_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.onComplete;
                var _closure2_slot0 = var6;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var7 = var4.bind(var3)(var2);
                var2 = var7.useNavigation;
                var7 = var2.bind(var7)();
                var _closure2_slot1 = var7;
                var2 = 10;
                var2 = var5[var2];
                var8 = var4.bind(var3)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    _fun113966: for (var _fun113966_ip = 0;;) switch (_fun113966_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun113966_ip = 33;
                                continue _fun113966
                            }
                        case 27:
                            var0 = var1.phone;
                        case 33:
                            return var0;
                    }
                };
                var9 = var5.bind(var8)(var4, var2);
                var _closure2_slot2 = var9;
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)();
                var12 = var2.allowPhone;
                var _closure2_slot3 = var12;
                var8 = var2.name;
                var _closure2_slot4 = var8;
                var11 = var2.allowEmail;
                var _closure2_slot5 = var11;
                var10 = var12;
                if (var10) {
                    _fun113965_ip = 150;
                    continue _fun113965
                }
            case 147:
                var10 = var11;
            case 150:
                _closure2_slot6 = var10;
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = new Array(7);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var7;
                var2[6] = var6;
                var1 = function() { // Environment: var1
                    _fun113967: for (var _fun113967_ip = 0;;) switch (_fun113967_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.updateDiscoverability;
                            var3 = {};
                            var6 = _closure2_slot3;
                            var3.phone = var6;
                            var6 = _closure2_slot5;
                            var3.email = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot6;
                            if (!var3) {
                                _fun113967_ip = 91;
                                continue _fun113967
                            }
                        case 66:
                            var3 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun113967_ip = 91;
                                continue _fun113967
                            }
                        case 76:
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun113967_ip = 91;
                                continue _fun113967
                            }
                        case 83:
                            var3 = _closure2_slot4;
                            if (!(var4 != var3)) {
                                _fun113967_ip = 101;
                                continue _fun113967
                            }
                        case 91:
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var0)();
                            _fun113967_ip = 147;
                            continue _fun113967;
                        case 101:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 12;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DiscoverabilityScenes;
                            var1 = var1.NAME;
                            var1 = var2.bind(var3)(var1);
                        case 147:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onNext = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun113968: for (var _fun113968_ip = 0;;) switch (_fun113968_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.onComplete;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot8;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)();
                var8 = var1.name;
                var1 = var1.allowPhone;
                var _closure2_slot1 = var1;
                var9 = _closure1_slot3;
                var6 = var9.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var7;
                var1 = function() { // Environment: var0
                    _fun113969: for (var _fun113969_ip = 0;;) switch (_fun113969_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun113969_ip = 20;
                                continue _fun113969
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 20:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var9)(var1, var2);
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.startContactSyncForDiscoverability;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7 = var2.bind(var6)(var0, var1);
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
                    _fun113968_ip = 188;
                    continue _fun113968
                }
            case 185:
                var7 = var8;
            case 188:
                var4.initialName = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.route;
        var0 = var0.params;
        var10 = var0.onComplete;
        var _closure2_slot0 = var10;
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 18;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var6 = var6.header;
        var0.headerStyle = var6;
        var9 = _closure1_slot3;
        var6 = var9.useMemo;
        var5 = new Array(1);
        var5[0] = var10;
        var4 = function() { // Environment: var4
            _fun113972: for (var _fun113972_ip = 0;;) switch (_fun113972_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun113972_ip = 24;
                        continue _fun113972
                    }
                case 15:
                    var2 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    _fun113972_ip = 28;
                    continue _fun113972;
                case 24:
                    var2 = _closure2_slot0;
                case 28:
                    var1 = function arg0() {
                        var0 = arg0;
                        var _closure4_slot0 = var0;
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
                        var9 = function arg0() {
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = true;
                            var0.insideNavigator = var4;
                            var6 = arg0;
                            var7 = var0;
                            var4 = copyDataProperties(var7, var6);
                            var5 = function() {
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var4 = 'onPress';
                            var0[var4] = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var2.headerRight = var9;
                        var9 = function() {
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var0 = _closure4_slot0;
                            var1.onComplete = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
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
                            var1 = {};
                            var0 = _closure4_slot0;
                            var1.onComplete = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var4 = var6.bind(var9)(var4, var5);
        var0.screens = var4;
        var4 = 12;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.DiscoverabilityScenes;
        var4 = var4.LANDING;
        var0.initialRouteName = var4;
        var4 = 19;
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
    var10 = {
        'borderBottomWidth': 0,
        'backgroundColor': null,
        'shadowColor': 'transparent'
    };
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var13;
    var3.header = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var13;
    var3.backButton = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var10.color = var13;
    var3.skipButton = var10;
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
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/components/RedesignDiscoverabilityModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10315, 1621, 660, 33, 1297, 671, 4703, 1469, 566, 10323, 670, 14609, 10314, 10330, 481, 10466, 5786, 1234, 2]);