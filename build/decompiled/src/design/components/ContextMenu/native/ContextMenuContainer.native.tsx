// design/components/ContextMenu/native/ContextMenuContainer.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.key;
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Keyboard;
    var _closure1_slot4 = var6;
    var8 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = {};
    var13 = var8.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = 99999;
    var10 = 'zIndex';
    var9[var10] = var11;
    var3.overlayView = var9;
    var8 = var8.absoluteFillObject;
    var3.wrapperView = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = new Array(0);
    var _closure1_slot8 = var3;
    var3 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.ContextMenuPopout;
        var1 = {};
        var0 = arg1;
        var1.menu = var0;
        var0 = arg2;
        var1.transitionState = var0;
        var0 = arg3;
        var1.cleanUp = var0;
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ContextMenu/native/ContextMenuContainer.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun47100: for (var _fun47100_ip = 0;;) switch (_fun47100_ip) {
            case 0:
                var1 = _closure1_slot7;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useActiveContextMenu;
                var6 = var1.bind(var2)();
                var2 = null;
                if (!(var2 == var6)) {
                    _fun47100_ip = 61;
                    continue _fun47100
                }
            case 55:
                var5 = _closure1_slot8;
                _fun47100_ip = 72;
                continue _fun47100;
            case 61:
                var1 = new Array(1);
                var1[0] = var6;
                var5 = var1;
            case 72:
                var8 = var2 == var6;
                var1 = undefined;
                if (var8) {
                    _fun47100_ip = 87;
                    continue _fun47100
                }
            case 81:
                var1 = var6.requestClose;
            case 87:
                if (!(var2 == var1)) {
                    _fun47100_ip = 95;
                    continue _fun47100
                }
            case 91:
                var1 = _closure1_slot9;
            case 95:
                var _closure2_slot1 = var1;
                var6 = _closure1_slot3;
                var9 = var6.useEffect;
                var8 = function() { // Environment: var0
                    var4 = _closure1_slot4;
                    var3 = var4.addListener;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var2 = var1.hideContextMenu;
                    var1 = 'keyboardDidHide';
                    var1 = var3.bind(var4)(var1, var2);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var9.bind(var6)(var8, var2);
                var8 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var8.bind(var6)(var1, var2);
                var _closure2_slot2 = var8;
                var2 = var6.useCallback;
                var1 = new Array(3);
                var1[0] = var8;
                var8 = var7.overlayView;
                var1[1] = var8;
                var7 = var7.wrapperView;
                var1[2] = var7;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun47104: for (var _fun47104_ip = 0;;) switch (_fun47104_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.overlayView;
                            var0.style = var4;
                            var5 = _closure1_slot5;
                            var4 = {};
                            var7 = arg1;
                            var10 = var7.length;
                            var7 = 'auto';
                            var8 = 0;
                            if (!(var8 === var10)) {
                                _fun47104_ip = 76;
                                continue _fun47104
                            }
                        case 72:
                            var7 = 'none';
                        case 76:
                            var4.pointerEvents = var7;
                            var7 = _closure2_slot0;
                            var7 = var7.wrapperView;
                            var4.style = var7;
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 7;
                            var6 = var10[var6];
                            var6 = var7.bind(var2)(var6);
                            var7 = var6.Dialog;
                            var6 = {};
                            var9 = _closure2_slot2;
                            var6.onDismiss = var9;
                            var9 = arg0;
                            var6.children = var9;
                            var6 = var8.bind(var2)(var7, var6);
                            var4.children = var6;
                            var4 = var3.bind(var2)(var5, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TransitionGroup;
                var0 = {};
                var0.wrapChildren = var6;
                var0.items = var5;
                var5 = _closure1_slot10;
                var0.renderItem = var5;
                var4 = _closure1_slot11;
                var0.getItemKey = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContextMenuContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5274, 5276, 4025, 4071, 4023, 2]);