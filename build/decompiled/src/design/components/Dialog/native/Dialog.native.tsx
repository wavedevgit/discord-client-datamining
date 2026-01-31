// design/components/Dialog/native/Dialog.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Dialog/native/Dialog.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: Dialog, environment: var1
        _fun37305: for (var _fun37305_ip = 0;;) switch (_fun37305_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.dialogKey;
                var8 = var2.onDismiss;
                var7 = null;
                var1 = Object.create(var7);
                var0 = 0;
                var1.dialogKey = var0;
                var1.onDismiss = var0;
                var12 = {};
                var11 = var2;
                var10 = var1;
                var4 = copyDataProperties(var12, var11, var10);
                var1 = _closure1_slot2;
                var0 = var1.useId;
                var5 = var0.bind(var1)();
                var3 = _closure1_slot4;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.AccessibilityView;
                var0 = {};
                var9 = _closure1_slot3;
                var9 = var9.absoluteFill;
                var0.style = var9;
                var9 = true;
                var0.accessibilityViewIsModal = var9;
                var0.onAccessibilityEscape = var8;
                if (!(var7 != var6)) {
                    _fun37305_ip = 128;
                    continue _fun37305
                }
            case 125:
                var5 = var6;
            case 128:
                var0.nativeID = var5;
                var12 = var0;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.Dialog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4025, 2]);