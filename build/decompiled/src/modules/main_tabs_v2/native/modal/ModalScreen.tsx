// modules/main_tabs_v2/native/modal/ModalScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['impressionName', 'impressionProperties'];
    var _closure1_slot3 = var0;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/modal/ModalScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110027: for (var _fun110027_ip = 0;;) switch (_fun110027_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.route;
                var1 = var1.params;
                var4 = var1.modal;
                var _closure2_slot0 = var4;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var5 = var4.props;
                var11 = null;
                if (!(var11 == var5)) {
                    _fun110027_ip = 46;
                    continue _fun110027
                }
            case 44:
                var5 = {};
            case 46:
                var8 = var5.impressionName;
                var7 = var5.impressionProperties;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var9 = var2.bind(var3)(var5, var1);
                var5 = _closure1_slot5;
                var10 = var5.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var10 = var10.bind(var5)(var2, var1);
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 6;
                var1 = var14[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var13 = _closure1_slot0;
                var12 = 7;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.ImpressionTypes;
                var12 = var12.MODAL;
                var1.type = var12;
                var1.name = var8;
                var1.properties = var7;
                var1 = var2.bind(var3)(var1);
                var2 = var5.useRef;
                var7 = var4.callbacks;
                var8 = var11 == var7;
                var1 = undefined;
                if (var8) {
                    _fun110027_ip = 195;
                    continue _fun110027
                }
            case 189:
                var1 = var7.onExited;
            case 195:
                var1 = var2.bind(var5)(var1);
                _closure2_slot1 = var1;
                var5 = _closure1_slot5;
                var2 = var5.useEffect;
                var1 = function() { // Environment: var0
                    _fun110029: for (var _fun110029_ip = 0;;) switch (_fun110029_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var3 = var0.callbacks;
                            var0 = null;
                            var4 = var0 == var3;
                            var0 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun110029_ip = 36;
                                continue _fun110029
                            }
                        case 30:
                            var1 = var3.onExited;
                        case 36:
                            var2.current = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var5)(var1);
                var7 = var5.useEffect;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun110031: for (var _fun110031_ip = 0;;) switch (_fun110031_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun110031_ip = 36;
                                    continue _fun110031
                                }
                            case 23:
                                var2 = _closure2_slot1;
                                var1 = var2.current;
                                var0 = var1.bind(var2)();
                            case 36:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var7.bind(var5)(var2, var1);
                var2 = var5.useLayoutEffect;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackAppUIViewed;
                    var0 = 'ModalScreen';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = _closure1_slot7;
                var5 = var5.absoluteFill;
                var0.style = var5;
                var5 = var4.closable;
                if (var5) {
                    _fun110027_ip = 309;
                    continue _fun110027
                }
            case 303:
                var5 = _closure1_slot8;
                _fun110027_ip = 335;
                continue _fun110027;
            case 309:
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 5;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var5 = var7.pop;
            case 335:
                var0.onAccessibilityEscape = var5;
                var8 = _closure1_slot5;
                var7 = var8.createElement;
                var5 = var4.modal;
                var4 = {};
                var16 = var4;
                var15 = var9;
                var9 = copyDataProperties(var16, var15);
                var9 = 'style';
                var4[var9] = var3;
                var9 = 'transitionState';
                var4[var9] = var11;
                var9 = 'onClose';
                var4[var9] = var10;
                var5 = var7.bind(var8)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 9;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isIOS;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun110027_ip = 487;
                    continue _fun110027
                }
            case 442:
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.PortalKeyboardRenderer;
                var6 = {};
                var9 = false;
                var6.portal = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 487:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 660, 33, 4561, 5264, 481, 4364, 478, 13918, 2]);