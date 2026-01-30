// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = var2.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = var2.Set;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var11 = var3;
    var2 = new var11[var2](var10);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot2 = var2;
    var2 = function() { // Original name: _INTERNAL_clearAiProviderSkips, environment: var0
        _fun9460: for (var _fun9460_ip = 0;;) switch (_fun9460_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = var2.clear;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9460_ip = 89;
                    continue _fun9460
                }
            case 47:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.log;
                var1 = 'Cleared AI provider skip registrations';
                var1 = var2.bind(var3)(var1);
            case 89:
                return var0;
        }
    };
    var1._INTERNAL_clearAiProviderSkips = var2;
    var2 = function(arg0) { // Original name: _INTERNAL_shouldSkipAiProviderWrapping, environment: var0
        var2 = _closure1_slot2;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1._INTERNAL_shouldSkipAiProviderWrapping = var2;
    var0 = function(arg0) { // Original name: _INTERNAL_skipAiProviderWrapping, environment: var0
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun9463: for (var _fun9463_ip = 0;;) switch (_fun9463_ip) {
                case 0:
                    var6 = arg0;
                    var2 = _closure1_slot2;
                    var0 = var2.add;
                    var0 = var0.bind(var2)(var6);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 0;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun9463_ip = 117;
                        continue _fun9463
                    }
                case 50:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.debug;
                    var2 = var3.log;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'AI provider "';
                    var1 = '" wrapping will be skipped';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                case 117:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1._INTERNAL_skipAiProviderWrapping = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [823, 824]);