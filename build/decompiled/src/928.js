// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: _wrapAndCaptureBooleanResult, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun9681: for (var _fun9681_ip = 0;;) switch (_fun9681_ip) {
                case 0:
                    var4 = undefined;
                    var3 = undefined;
                    var2 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var10 = var1;
                    var9 = var2;
                    var0 = new var10[var0](var9, var8);
                    var5 = var0 instanceof Object ? var0 : var1;
                    var0 = 0;
                    var6 = var0 < var2;
                    var1 = 0;
                    if (!var6) {
                        _fun9681_ip = 64;
                        continue _fun9681
                    }
                case 49:
                    var6 = arguments[var1];
                    var5[var1] = var6;
                    var1 = var1 + 1;
                    if (var1 < var2) {
                        _fun9681_ip = 49;
                        continue _fun9681
                    }
                case 64:
                    var3 = var5[var0];
                    var2 = _closure2_slot0;
                    var1 = var2.apply;
                    var0 = this;
                    var0 = var1.bind(var2)(var0, var5);
                    var2 = 'string';
                    var1 = typeof var3;
                    var1 = var2 === var1;
                    if (!var1) {
                        _fun9681_ip = 113;
                        continue _fun9681
                    }
                case 102:
                    var5 = 'boolean';
                    var2 = typeof var0;
                    var1 = var5 === var2;
                case 113:
                    if (!var1) {
                        _fun9681_ip = 172;
                        continue _fun9681
                    }
                case 116:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var6 = var5[var1];
                    var7 = var2.bind(var4)(var6);
                    var6 = var7._INTERNAL_insertFlagToScope;
                    var6 = var6.bind(var7)(var3, var0);
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2._INTERNAL_addFeatureFlagToActiveSpan;
                    var1 = var1.bind(var2)(var3, var0);
                case 172:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot2 = var0;
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
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var0 = var0.growthbookClass;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'GrowthBook';
        var0.name = var2;
        var2 = function() { // Original name: setupOnce, environment: var1
            _fun9683: for (var _fun9683_ip = 0;;) switch (_fun9683_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.prototype;
                    var0 = var4.isOn;
                    var1 = 'function';
                    var0 = typeof var0;
                    if (!(var1 === var0)) {
                        _fun9683_ip = 75;
                        continue _fun9683
                    }
                case 29:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.fill;
                    var2 = _closure1_slot2;
                    var0 = 'isOn';
                    var0 = var3.bind(var5)(var4, var0, var2);
                case 75:
                    var0 = var4.getFeatureValue;
                    var0 = typeof var0;
                    if (!(var1 === var0)) {
                        _fun9683_ip = 134;
                        continue _fun9683
                    }
                case 88:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fill;
                    var1 = _closure1_slot2;
                    var0 = 'getFeatureValue';
                    var0 = var2.bind(var3)(var4, var0, var1);
                case 134:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.setupOnce = var2;
        var1 = function(arg0, arg1, arg2) { // Original name: processEvent, environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
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
    var1 = var3.bind(var4)(var1);
    var2.growthbookIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [881, 822, 927]);