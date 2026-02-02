// modules/autocompleter/createAutocompleterResult.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.HeaderRecord;
    var _closure1_slot0 = var6;
    var3 = var3.AutocompleterResultTypes;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/autocompleter/createAutocompleterResult.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = {};
        var2 = _closure1_slot1;
        var2 = var2.HEADER;
        var0.type = var2;
        var3 = _closure1_slot0;
        var1 = var3.prototype;
        var2 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var4 = arg0;
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.record = var1;
        var1 = 0;
        var0.score = var1;
        return var0;
    };
    var2.createHeaderResult = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5563, 2]);