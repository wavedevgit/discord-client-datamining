// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: LCPEntryManager, environment: var1
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = '_processEntry';
        var0.key = var4;
        var1 = function(arg0) { // Original name: _processEntry, environment: var1
            _fun10801: for (var _fun10801_ip = 0;;) switch (_fun10801_ip) {
                case 0:
                    var3 = this;
                    var2 = var3._onBeforeProcessingEntry;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun10801_ip = 29;
                        continue _fun10801
                    }
                case 15:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 29:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.LCPEntryManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);