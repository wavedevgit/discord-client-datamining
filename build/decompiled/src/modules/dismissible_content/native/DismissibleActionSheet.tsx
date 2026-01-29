// modules/dismissible_content/native/DismissibleActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/dismissible_content/native/DismissibleActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: DismissibleActionSheet, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 1;
        var2 = var5[var2];
        var5 = undefined;
        var3 = var3.bind(var5)(var2);
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.openLazy;
            var6 = _closure2_slot0;
            var1 = var6.importer;
            var3 = var1.bind(var6)();
            var2 = var6.actionSheetKey;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var7 = function(arg0) { // Original name: markAsDismissed, environment: var6
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.hideActionSheet;
                var3 = _closure2_slot0;
                var1 = var3.actionSheetKey;
                var1 = var2.bind(var4)(var1);
                var2 = var3.markAsDismissed;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var6 = 'markAsDismissed';
            var1[var6] = var7;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var2 = var3.bind(var5)(var2);
        var3 = _closure1_slot2;
        var2 = var3.useEffect;
        var5 = var4.actionSheetKey;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = var4.hideSheetOnUnmount;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                _fun74460: for (var _fun74460_ip = 0;;) switch (_fun74460_ip) {
                    case 0:
                        var1 = _closure2_slot0;
                        var2 = var1.hideSheetOnUnmount;
                        var1 = null;
                        var1 = var1 != var2;
                        if (!var1) {
                            _fun74460_ip = 32;
                            continue _fun74460
                        }
                    case 22:
                        var2 = _closure2_slot0;
                        var1 = var2.hideSheetOnUnmount;
                    case 32:
                        if (!var1) {
                            _fun74460_ip = 81;
                            continue _fun74460
                        }
                    case 35:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideActionSheet;
                        var0 = _closure2_slot0;
                        var0 = var0.actionSheetKey;
                        var0 = var1.bind(var2)(var0);
                    case 81:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = null;
        return var0;
    };
    var2.DismissibleActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4056, 3237, 2]);