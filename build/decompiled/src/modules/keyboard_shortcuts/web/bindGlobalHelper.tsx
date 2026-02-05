// modules/keyboard_shortcuts/web/bindGlobalHelper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 2;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard_shortcuts/web/bindGlobalHelper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var2 = undefined;
        var1 = var3.bind(var2)(var0);
        var0 = 1;
        var0 = var4[var0];
        var4 = var3.bind(var2)(var0);
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var5 = arg0;
        var6 = var3;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.createGlobalBinder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12369, 12370, 2]);