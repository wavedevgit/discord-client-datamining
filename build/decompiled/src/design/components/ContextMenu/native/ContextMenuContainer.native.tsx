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
    var0 = function(arg0) { // Original name: getItemKey, environment: var1
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
    var7 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var12 = var7.absoluteFillObject;
    var13 = var8;
    var9 = copyDataProperties(var13, var12);
    var10 = 99999;
    var9 = 'zIndex';
    var8[var9] = var10;
    var3.overlayView = var8;
    var8 = var7.absoluteFillObject;
    var3.wrapperView = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = new Array(0);
    var _closure1_slot8 = var3;
    var3 = function() { // Original name: EMPTY_CALLBACK, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: renderItem, environment: var1
        var4 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 3;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ContextMenu/native/ContextMenuContainer.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: ContextMenuContainer, environment: var1
        _fun46345: for (var _fun46345_ip = 0;;) switch (_fun46345_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useActiveContextMenu;
                var6 = var1.bind(var2)();
                var2 = null;
                if (!(var2 == var6)) {
                    _fun46345_ip = 49;
                    continue _fun46345
                }
            case 43:
                var5 = _closure1_slot8;
                _fun46345_ip = 60;
                continue _fun46345;
            case 49:
                var1 = new Array(1);
                var1[0] = var6;
                var5 = var1;
            case 60:
                var7 = var2 == var6;
                var1 = undefined;
                if (var7) {
                    _fun46345_ip = 75;
                    continue _fun46345
                }
            case 69:
                var1 = var6.requestClose;
            case 75:
                if (!(var2 == var1)) {
                    _fun46345_ip = 83;
                    continue _fun46345
                }
            case 79:
                var1 = _closure1_slot9;
            case 83:
                var _closure2_slot0 = var1;
                var6 = _closure1_slot3;
                var8 = var6.useEffect;
                var7 = function() { // Environment: var0
                    var4 = _closure1_slot4;
                    var3 = var4.addListener;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
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
                var2 = var8.bind(var6)(var7, var2);
                var7 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var7.bind(var6)(var1, var2);
                var _closure2_slot1 = var7;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun46349: for (var _fun46349_ip = 0;;) switch (_fun46349_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure1_slot7;
                            var4 = var4.overlayView;
                            var0.style = var4;
                            var5 = _closure1_slot5;
                            var4 = {};
                            var7 = arg1;
                            var9 = var7.length;
                            var7 = 'auto';
                            var8 = 0;
                            if (!(var8 === var9)) {
                                _fun46349_ip = 73;
                                continue _fun46349
                            }
                        case 69:
                            var7 = 'none';
                        case 73:
                            var4.pointerEvents = var7;
                            var7 = _closure1_slot7;
                            var7 = var7.wrapperView;
                            var4.style = var7;
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 6;
                            var6 = var9[var6];
                            var6 = var7.bind(var2)(var6);
                            var7 = var6.Dialog;
                            var6 = {};
                            var9 = _closure2_slot1;
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
                var0 = 7;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5180, 5182, 3989, 4024, 3987, 2]);