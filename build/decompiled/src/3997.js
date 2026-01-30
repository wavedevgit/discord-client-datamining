// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useEffect;
    var _closure1_slot0 = var4;
    var3 = var3.useRef;
    var _closure1_slot1 = var3;
    var1 = function(arg0) { // Original name: usePrevious, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot1;
        var3 = undefined;
        var0 = var0.bind(var3)();
        var _closure2_slot1 = var0;
        var2 = _closure1_slot0;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = var0.current;
        return var0;
    };
    var2.usePrevious = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);