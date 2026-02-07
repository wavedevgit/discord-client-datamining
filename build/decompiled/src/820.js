// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun8740: for (var _fun8740_ip = 0;;) switch (_fun8740_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                if (var1) {
                    _fun8740_ip = 13;
                    continue _fun8740
                }
            case 9:
                var1 = undefined;
                return var1;
            case 13:
                var1 = var0;
                var2 = 'object';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun8740_ip = 61;
                    continue _fun8740
                }
            case 27:
                var2 = var0;
                var1 = 'deref';
                var1 = var1 in var2;
                if (!var1) {
                    _fun8740_ip = 61;
                    continue _fun8740
                }
            case 41:
                var1 = var0;
                var1 = var1.deref;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun8740_ip = 66;
                    continue _fun8740
                }
            case 61:
                var1 = var0;
                return var1;
            case 66: // try_start_0
                var1 = var0;
                var0 = var1.deref;
                var0 = var0.bind(var1)();
            case 79: // try_end0
                return var0;
            case 81: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1._sentryScope;
        var0.scope = var2;
        var3 = _closure1_slot2;
        var2 = var1._sentryIsolationScope;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var0.isolationScope = var1;
        return var0;
    };
    var1.getCapturedScopesOnSpan = var2;
    var0 = function arg0, arg1, arg2() {
        _fun8742: for (var _fun8742_ip = 0;;) switch (_fun8742_ip) {
            case 0:
                var4 = arg0;
                if (!var4) {
                    _fun8742_ip = 165;
                    continue _fun8742
                }
            case 9:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var5 = var3[var0];
                var1 = undefined;
                var8 = var2.bind(var1)(var5);
                var7 = var8.addNonEnumerableProperty;
                var5 = arg2;
                var6 = undefined;
            case 45: // try_start_0
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 0;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.GLOBAL_OBJ;
                var9 = var9.WeakRef;
                var6 = var9;
                var10 = 'function';
                var9 = typeof var9;
                if (!(var10 !== var9)) {
                    _fun8742_ip = 92;
                    continue _fun8742
                }
            case 90: // try_end0
                _fun8742_ip = 122;
                continue _fun8742;
            case 92: // try_start_1
                var10 = var6;
                var14 = var5;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var15 = var9;
                var6 = new var15[var10](var14, var13);
                var6 = var6 instanceof Object ? var6 : var9;
            case 118: // try_end1
                _fun8742_ip = 125;
                continue _fun8742;
            case 120: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 9);
            case 122:
                var6 = var5;
            case 125:
                var5 = '_sentryIsolationScope';
                var5 = var7.bind(var8)(var4, var5, var6);
                var0 = var3[var0];
                var3 = var2.bind(var1)(var0);
                var2 = var3.addNonEnumerableProperty;
                var1 = '_sentryScope';
                var0 = arg1;
                var0 = var2.bind(var3)(var4, var1, var0);
            case 165:
                var0 = undefined;
                return var0;
        }
    };
    var1.setCapturedScopesOnSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821, 822]);