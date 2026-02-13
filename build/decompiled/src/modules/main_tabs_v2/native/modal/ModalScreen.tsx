// modules/main_tabs_v2/native/modal/ModalScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = ['impressionName', 'impressionProperties'];
    var _closure1_slot3 = var0;
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
    var3 = var10.bind(var0)(var3);
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
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.containerWithPadding = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/modal/ModalScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110142: for (var _fun110142_ip = 0;;) switch (_fun110142_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.route;
                var1 = var1.params;
                var4 = var1.modal;
                var _closure2_slot0 = var4;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot11;
                var8 = var1.bind(var3)();
                var5 = var4.props;
                var11 = null;
                if (!(var11 == var5)) {
                    _fun110142_ip = 57;
                    continue _fun110142
                }
            case 55:
                var5 = {};
            case 57:
                var12 = var5.impressionName;
                var7 = var5.impressionProperties;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var9 = var2.bind(var3)(var5, var1);
                var5 = _closure1_slot5;
                var10 = var5.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
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
                var15 = _closure1_slot2;
                var1 = 8;
                var1 = var15[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var14 = _closure1_slot0;
                var13 = 9;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ImpressionTypes;
                var13 = var13.MODAL;
                var1.type = var13;
                var1.name = var12;
                var1.properties = var7;
                var1 = var2.bind(var3)(var1);
                var2 = var5.useRef;
                var7 = var4.callbacks;
                var12 = var11 == var7;
                var1 = undefined;
                if (var12) {
                    _fun110142_ip = 203;
                    continue _fun110142
                }
            case 197:
                var1 = var7.onExited;
            case 203:
                var1 = var2.bind(var5)(var1);
                _closure2_slot1 = var1;
                var5 = _closure1_slot5;
                var2 = var5.useEffect;
                var1 = function() { // Environment: var0
                    _fun110144: for (var _fun110144_ip = 0;;) switch (_fun110144_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var3 = var0.callbacks;
                            var0 = null;
                            var4 = var0 == var3;
                            var0 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun110144_ip = 36;
                                continue _fun110144
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
                        _fun110146: for (var _fun110146_ip = 0;;) switch (_fun110146_ip) {
                            case 0:
                                var0 = _closure2_slot1;
                                var2 = var0.current;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun110146_ip = 36;
                                    continue _fun110146
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
                    var0 = 10;
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
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 11;
                var0 = var0[var2];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useLocalHorizontalSafeArea;
                var0 = var0.bind(var1)();
                var14 = var0.left;
                var13 = var0.right;
                var0 = 0;
                var12 = var0 === var14;
                if (!var12) {
                    _fun110142_ip = 331;
                    continue _fun110142
                }
            case 327:
                var12 = var0 === var13;
            case 331:
                if (var12) {
                    _fun110142_ip = 367;
                    continue _fun110142
                }
            case 334:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var2 = var1.bind(var3)(var0);
                var1 = var2.shouldExcludeSafeAreaForModalKey;
                var0 = var4.key;
                var12 = var1.bind(var2)(var0);
            case 367:
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = _closure1_slot7;
                var7 = var5.absoluteFillObject;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = undefined;
                if (var12) {
                    _fun110142_ip = 433;
                    continue _fun110142
                }
            case 400:
                var12 = var8.containerWithPadding;
                var8 = new Array(2);
                var8[0] = var12;
                var12 = {};
                var12.paddingLeft = var14;
                var12.paddingRight = var13;
                var8[1] = var12;
                var7 = var8;
            case 433:
                var5[1] = var7;
                var0.style = var5;
                var5 = var4.closable;
                if (var5) {
                    _fun110142_ip = 456;
                    continue _fun110142
                }
            case 450:
                var5 = _closure1_slot8;
                _fun110142_ip = 482;
                continue _fun110142;
            case 456:
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 7;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var5 = var7.pop;
            case 482:
                var0.onAccessibilityEscape = var5;
                var8 = _closure1_slot5;
                var7 = var8.createElement;
                var5 = var4.modal;
                var4 = {};
                var17 = var4;
                var16 = var9;
                var9 = copyDataProperties(var17, var16);
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
                var5 = 12;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isIOS;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun110142_ip = 634;
                    continue _fun110142
                }
            case 589:
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 13;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.PortalKeyboardRenderer;
                var6 = {};
                var9 = false;
                var6.portal = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 634:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 660, 33, 1297, 671, 4567, 5270, 481, 4370, 13071, 478, 13902, 2]);