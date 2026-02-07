// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun12137: for (var _fun12137_ip = 0;;) switch (_fun12137_ip) {
                case 0:
                    var4 = undefined;
                    var3 = undefined;
                    var2 = arguments.length;
                    var1 = global;
                    var0 = var1.Array;
                    var5 = var0.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var0
                        }
                    });
                    var21 = var5;
                    var20 = var2;
                    var0 = new var21[var0](var20, var19);
                    var7 = var0 instanceof Object ? var0 : var5;
                    var5 = 0;
                    var6 = var5 < var2;
                    var0 = 0;
                    if (!var6) {
                        _fun12137_ip = 64;
                        continue _fun12137
                    }
                case 49:
                    var6 = arguments[var0];
                    var7[var0] = var6;
                    var0 = var0 + 1;
                    if (var0 < var2) {
                        _fun12137_ip = 49;
                        continue _fun12137
                    }
                case 64:
                    var3 = var7[var5];
                    var6 = _closure2_slot0;
                    var2 = var6.apply;
                    var0 = this;
                    var0 = var2.bind(var6)(var0, var7);
                    var12 = typeof var3;
                    var2 = 'string';
                    if (!(var2 === var12)) {
                        _fun12137_ip = 113;
                        continue _fun12137
                    }
                case 99:
                    var6 = 'boolean';
                    var2 = typeof var0;
                    if (!(var6 !== var2)) {
                        _fun12137_ip = 238;
                        continue _fun12137
                    }
                case 113:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 1;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.DEBUG_BUILD;
                    if (!var6) {
                        _fun12137_ip = 291;
                        continue _fun12137
                    }
                case 148:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var2 = var6.bind(var4)(var2);
                    var6 = var2.debug;
                    var2 = var6.error;
                    var1 = var1.HermesInternal;
                    var11 = var1.concat;
                    var21 = '[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ';
                    var9 = ' (';
                    var17 = '), result: ';
                    var14 = typeof var0;
                    var13 = ')';
                    var20 = var3;
                    var19 = var9;
                    var18 = var12;
                    var16 = var0;
                    var15 = var9;
                    var1 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13, var12);
                    var1 = var2.bind(var6)(var1);
                    _fun12137_ip = 291;
                    continue _fun12137;
                case 238:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = var1[var5];
                    var7 = var2.bind(var4)(var6);
                    var6 = var7._INTERNAL_insertFlagToScope;
                    var6 = var6.bind(var7)(var3, var0);
                    var1 = var1[var5];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2._INTERNAL_addFeatureFlagToActiveSpan;
                    var1 = var1.bind(var2)(var3, var0);
                case 291:
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
        var0 = var0.featureFlagClientClass;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = 'Unleash';
        var0.name = var2;
        var2 = function() {
            var0 = _closure2_slot0;
            var5 = var0.prototype;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 0;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.fill;
            var2 = _closure1_slot2;
            var1 = 'isEnabled';
            var1 = var3.bind(var4)(var5, var1, var2);
            return var0;
        };
        var0.setupOnce = var2;
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
    var1 = var3.bind(var4)(var1);
    var2.unleashIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1073]);