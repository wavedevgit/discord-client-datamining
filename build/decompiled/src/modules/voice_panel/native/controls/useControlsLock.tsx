// modules/voice_panel/native/controls/useControlsLock.tsx
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
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/useControlsLock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot2;
        var2 = var4.useContext;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var5.bind(var0)(var3);
        var0 = var2.bind(var4)(var0);
        var0 = var0.generateStateLocker;
        var _closure2_slot1 = var0;
        var2 = var4.useState;
        var0 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var2.bind(var4)(var0);
        var0 = 0;
        var0 = var2[var0];
        var _closure2_slot2 = var0;
        var3 = var4.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var1 = _closure2_slot2;
                var0 = var1.unlock;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11839, 2]);