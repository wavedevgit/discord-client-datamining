// design/components/Sheet/native/ActionSheetPresenter.native.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Modal;
    var _closure1_slot5 = var8;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var6 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun46978: for (var _fun46978_ip = 0;;) switch (_fun46978_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.sheetKey;
                var _closure2_slot0 = var12;
                var11 = var1.content;
                var15 = var1.impressionName;
                var13 = var1.impressionProperties;
                var9 = _closure1_slot4;
                var2 = var9.useState;
                var1 = 'visible';
                var4 = var2.bind(var9)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var14 = var2[var1];
                var _closure2_slot1 = var14;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var1 = var9.useRef;
                var4 = _closure1_slot8;
                var1 = var1.bind(var9)(var4);
                var _closure2_slot3 = var1;
                var5 = var9.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot3;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var2 = var5.bind(var9)(var2, var1);
                var _closure2_slot4 = var2;
                var1 = var9.useRef;
                var1 = var1.bind(var9)(var4);
                var _closure2_slot5 = var1;
                var5 = var9.useCallback;
                var4 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = var1.current;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var8 = var5.bind(var9)(var4, var1);
                var _closure2_slot6 = var8;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var7 = var1.bind(var3)(var4);
                var4 = {};
                var5 = _closure1_slot0;
                var16 = 7;
                var16 = var6[var16];
                var16 = var5.bind(var3)(var16);
                var16 = var16.ImpressionTypes;
                var16 = var16.HALFSHEET;
                var4.type = var16;
                var4.name = var15;
                var4.properties = var13;
                var4 = var7.bind(var3)(var4);
                var15 = var9.useImperativeHandle;
                var13 = arg1;
                var7 = function() { // Environment: var0
                    var0 = {};
                    var2 = function() {
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = 'visible';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.componentDidEnter = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot2;
                        var0 = undefined;
                        var2 = 'exiting';
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot5;
                        var1 = arg0;
                        var2.current = var1;
                        return var0;
                    };
                    var0.componentWillLeave = var2;
                    var1 = function() {
                        var3 = _closure2_slot2;
                        var0 = undefined;
                        var2 = 'exited';
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot5;
                        var1 = _closure1_slot8;
                        var2.current = var1;
                        return var0;
                    };
                    var0.componentDidLeave = var1;
                    return var0;
                };
                var4 = new Array(0);
                var4 = var15.bind(var9)(var13, var7, var4);
                var13 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var12;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hideActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13 = var13.bind(var9)(var4, var7);
                var _closure2_slot7 = var13;
                var7 = var9.useMemo;
                var4 = new Array(4);
                var4[0] = var14;
                var4[1] = var13;
                var4[2] = var8;
                var4[3] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.transitionState = var2;
                    var2 = _closure2_slot7;
                    var0.close = var2;
                    var2 = _closure2_slot6;
                    var0.onLeave = var2;
                    var1 = _closure2_slot4;
                    var0.registerDismissHandler = var1;
                    return var0;
                };
                var4 = var7.bind(var9)(var2, var4);
                var2 = _closure1_slot9;
                var7 = 9;
                var7 = var6[var7];
                var7 = var5.bind(var3)(var7);
                var8 = var7.Dialog;
                var7 = {};
                var7.dialogKey = var12;
                var7.onDismiss = var13;
                var7.children = var11;
                var14 = var2.bind(var3)(var8, var7);
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var13;
                var0 = function() { // Environment: var0
                    _fun46987: for (var _fun46987_ip = 0;;) switch (_fun46987_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun46987_ip = 31;
                                continue _fun46987
                            }
                        case 18:
                            var2 = _closure2_slot3;
                            var1 = var2.current;
                            var1 = var1.bind(var2)();
                        case 31:
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var11 = var8.bind(var9)(var0, var7);
                var0 = 10;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 11;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.isAndroid;
                var5 = var4.bind(var5)();
                var4 = var14;
                if (!var5) {
                    _fun46978_ip = 627;
                    continue _fun46978
                }
            case 449:
                var7 = _closure1_slot9;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 12;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.SafeAreaProvider;
                var5 = {};
                var17 = _closure1_slot6;
                var8 = var17.absoluteFill;
                var5.style = var8;
                var9 = _closure1_slot5;
                var8 = {
                    'transparent': true,
                    'statusBarTranslucent': true,
                    'navigationBarTranslucent': true,
                    'animationType': 'none'
                };
                var12 = var17.absoluteFill;
                var8.style = var12;
                var8.onRequestClose = var11;
                var12 = _closure1_slot10;
                var10 = 13;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.GestureHandlerRootView;
                var10 = {};
                var17 = var17.absoluteFill;
                var10.style = var17;
                var10.onAccessibilityEscape = var13;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 14;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.MOVED_TO_ACTION_SHEET_ON_ANDROID_COMPONENTS;
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 627:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/ActionSheetPresenter.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 15;
        var1 = var7[var1];
        var3 = undefined;
        var9 = var6.bind(var3)(var1);
        var8 = var9.useStateFromStoresArray;
        var1 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var1;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot7;
            var0 = var1.getStack;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = new Array(0);
        var2 = var8.bind(var9)(var4, var2, var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var6 = var0.content;
            var4 = var0.key;
            var5 = var0.impressionName;
            var0 = var0.impressionProperties;
            var3 = _closure1_slot9;
            var2 = _closure1_slot11;
            var1 = {};
            var1.sheetKey = var4;
            var1.content = var6;
            var1.impressionName = var5;
            var1.impressionProperties = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var4 = var1.bind(var2)(var0);
        var2 = _closure1_slot9;
        var0 = 16;
        var0 = var7[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var5 = _closure1_slot6;
        var5 = var5.absoluteFill;
        var0.style = var5;
        var5 = 17;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.TransitionGroupOverlayView;
        var0.component = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ActionSheetPresenter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3142, 660, 33, 5264, 481, 3279, 4065, 5250, 478, 5265, 4963, 5266, 566, 10429, 4029, 2]);