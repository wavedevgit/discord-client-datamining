// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var1;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var1);
    var4 = var5.defineIntegration;
    var1 = function() { // Environment: var3
        var0 = {};
        var1 = 'LaunchDarkly';
        var0.name = var1;
        var1 = function arg0, arg1, arg2() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 0;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2._INTERNAL_copyFlagsFromScopeToEvent;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.processEvent = var1;
        return var0;
    };
    var1 = var4.bind(var5)(var1);
    var3 = function() {
        var0 = {
            'name': 'sentry-flag-auditor',
            'type': 'flag-used',
            'synchronous': true
        };
        var1 = function arg0, arg1, arg2() {
            var4 = arg0;
            var1 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var6 = var5[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var6);
            var7 = var8._INTERNAL_insertFlagToScope;
            var6 = var1.value;
            var6 = var7.bind(var8)(var4, var6);
            var2 = var5[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3._INTERNAL_addFeatureFlagToActiveSpan;
            var1 = var1.value;
            var1 = var2.bind(var3)(var4, var1);
            return var0;
        };
        var0.method = var1;
        return var0;
    };
    var2.buildLaunchDarklyFlagUsedHandler = var3;
    var2.launchDarklyIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);