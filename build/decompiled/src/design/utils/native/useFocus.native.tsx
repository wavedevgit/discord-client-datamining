// design/utils/native/useFocus.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/utils/native/useFocus.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var5 = _closure1_slot1;
        var3 = var5.useState;
        var1 = false;
        var4 = var3.bind(var5)(var1);
        var3 = _closure1_slot0;
        var1 = undefined;
        var0 = 2;
        var3 = var3.bind(var1)(var4, var0);
        var0 = 0;
        var1 = var3[var0];
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot0 = var0;
        var0 = {};
        var4 = var5.useMemo;
        var3 = function() { // Environment: var2
            var0 = {};
            var2 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var0 = true;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0.onFocus = var2;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0.onBlur = var1;
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var0.focusProps = var2;
        var0.isFocused = var1;
        return var0;
    };
    var2.useFocus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);