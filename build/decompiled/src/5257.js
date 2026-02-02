// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var4 = var3.Clipboard;
        var3 = var4.setString;
        var3 = var3.bind(var4)(var5);
        var3 = _closure1_slot3;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = arg0;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = undefined;
    var2.useClipboard = var0;
    var4 = 0;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var1 = function() {
        var3 = _closure1_slot2;
        var4 = var3.useState;
        var5 = undefined;
        var2 = '';
        var6 = var4.bind(var5)(var2);
        var2 = 0;
        var2 = var6[var2];
        var4 = 1;
        var4 = var6[var4];
        var _closure2_slot0 = var4;
        var7 = var3.useEffect;
        var6 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.Clipboard;
            var1 = var2.getString;
            var3 = var1.bind(var2)();
            var2 = var3.then;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = new Array(0);
        var4 = var7.bind(var5)(var6, var4);
        var4 = var3.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.add;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot3;
                var1 = var2.delete;
                var0 = _closure2_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var4.bind(var5)(var3, var0);
        var0 = new Array(2);
        var0[0] = var2;
        var1 = _closure1_slot4;
        var0[1] = var1;
        return var0;
    };
    var2.useClipboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5258]);