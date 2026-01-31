// design/components/Menu/native/MenuPopout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.Fragment;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Menu/native/MenuPopout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MenuPopout, environment: var1
        _fun44481: for (var _fun44481_ip = 0;;) switch (_fun44481_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.children;
                var7 = var0.key;
                var17 = var0.menuItems;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun44481_ip = 31;
                    continue _fun44481
                }
            case 27:
                var17 = new Array(0);
            case 31:
                var _closure2_slot0 = var17;
                var1 = var0.onRequestOpen;
                var _closure2_slot1 = var1;
                var5 = var0.onRequestClose;
                var _closure2_slot2 = var5;
                var16 = var0.position;
                var _closure2_slot3 = var16;
                var15 = var0.align;
                var _closure2_slot4 = var15;
                var14 = var0.offset;
                var _closure2_slot5 = var14;
                var2 = var0.offsetAnimated;
                var _closure2_slot6 = var2;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 3;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.useUID;
                var12 = var8.bind(var9)();
                var8 = null;
                if (!(var8 != var7)) {
                    _fun44481_ip = 164;
                    continue _fun44481
                }
            case 161:
                var12 = var7;
            case 164:
                _closure2_slot7 = var12;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 4;
                var7 = var9[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.useAnimatedRef;
                var10 = var7.bind(var8)();
                _closure2_slot8 = var10;
                var9 = _closure1_slot4;
                var8 = var9.useState;
                var7 = false;
                var11 = var8.bind(var9)(var7);
                var8 = _closure1_slot3;
                var7 = 2;
                var11 = var8.bind(var3)(var11, var7);
                var7 = 0;
                var7 = var11[var7];
                _closure2_slot9 = var7;
                var8 = 1;
                var8 = var11[var8];
                _closure2_slot10 = var8;
                var11 = var17.map;
                var8 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.label;
                    var0.name = var2;
                    var1 = var1.label;
                    var0.label = var1;
                    return var0;
                };
                var8 = var11.bind(var17)(var8);
                var13 = var9.useCallback;
                var11 = new Array(2);
                var11[0] = var12;
                var11[1] = var5;
                var5 = function() { // Environment: var4
                    _fun44483: for (var _fun44483_ip = 0;;) switch (_fun44483_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun44483_ip = 34;
                                continue _fun44483
                            }
                        case 26:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var0)();
                        case 34:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideNativeMenu;
                            var1 = _closure2_slot7;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var11 = var13.bind(var9)(var5, var11);
                _closure2_slot11 = var11;
                var13 = var9.useMemo;
                var5 = new Array(7);
                var5[0] = var10;
                var5[1] = var11;
                var5[2] = var17;
                var5[3] = var16;
                var5[4] = var15;
                var5[5] = var14;
                var5[6] = var2;
                var2 = function() { // Environment: var4
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Menu;
                    var0 = {};
                    var5 = _closure2_slot8;
                    var0.toggleButtonRef = var5;
                    var5 = _closure2_slot11;
                    var0.onClose = var5;
                    var5 = _closure2_slot3;
                    var0.position = var5;
                    var5 = _closure2_slot4;
                    var0.align = var5;
                    var5 = _closure2_slot5;
                    var0.offset = var5;
                    var5 = _closure2_slot6;
                    var0.offsetAnimated = var5;
                    var6 = _closure2_slot0;
                    var5 = var6.map;
                    var4 = function(arg0, arg1) { // Environment: var4
                        var4 = _closure1_slot5;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 7;
                        var0 = var6[var0];
                        var3 = undefined;
                        var0 = var5.bind(var3)(var0);
                        var2 = var0.MenuGroup;
                        var1 = {};
                        var0 = 8;
                        var0 = var6[var0];
                        var0 = var5.bind(var3)(var0);
                        var5 = var0.MenuItem;
                        var0 = {};
                        var6 = true;
                        var0.showIconFirst = var6;
                        var8 = arg0;
                        var9 = var0;
                        var6 = copyDataProperties(var9, var8);
                        var0 = var4.bind(var3)(var5, var0);
                        var1.children = var0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var6 = var0.concat;
                        var5 = 'chat-context-menu-group-';
                        var0 = arg1;
                        var0 = var6.bind(var5)(var0);
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var13 = var13.bind(var9)(var2, var5);
                _closure2_slot12 = var13;
                var5 = var9.useCallback;
                var2 = new Array(3);
                var2[0] = var13;
                var2[1] = var12;
                var2[2] = var1;
                var1 = function() { // Environment: var4
                    _fun44486: for (var _fun44486_ip = 0;;) switch (_fun44486_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var0 = undefined;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun44486_ip = 34;
                                continue _fun44486
                            }
                        case 26:
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var0)();
                        case 34:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.showNativeMenu;
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot12;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var5.bind(var9)(var1, var2);
                _closure2_slot13 = var1;
                var5 = var9.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var11;
                var2[2] = var1;
                var1 = function() { // Environment: var4
                    _fun44487: for (var _fun44487_ip = 0;;) switch (_fun44487_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun44487_ip = 22;
                                continue _fun44487
                            }
                        case 10:
                            var2 = _closure2_slot13;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun44487_ip = 32;
                            continue _fun44487;
                        case 22:
                            var1 = _closure2_slot11;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var5.bind(var9)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = {};
                var5.ref = var10;
                var5.onPress = var9;
                var9 = {};
                var9.expanded = var7;
                var5.accessibilityState = var9;
                var5.accessibilityActions = var8;
                var4 = function(arg0) { // Original name: onAccessibilityAction, environment: var4
                    _fun44488: for (var _fun44488_ip = 0;;) switch (_fun44488_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.label;
                                var0 = _closure3_slot0;
                                var0 = var0.nativeEvent;
                                var0 = var0.actionName;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var3 = null;
                            var0 = var3 == var1;
                            if (var0) {
                                _fun44488_ip = 49;
                                continue _fun44488
                            }
                        case 40:
                            var2 = var1.action;
                            var0 = var3 == var2;
                        case 49:
                            if (var0) {
                                _fun44488_ip = 61;
                                continue _fun44488
                            }
                        case 52:
                            var0 = var1.action;
                            var0 = var0.bind(var1)();
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onAccessibilityAction = var4;
                var4 = {};
                var4.isShown = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MenuPopout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 4890, 3679, 4892, 4846, 4852, 4853, 2]);