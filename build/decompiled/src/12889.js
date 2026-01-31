// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var0);
        var0 = var2.getMainCarrier;
        var2 = var0.bind(var2)();
        var0 = 1;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.getAsyncContextStrategy;
        var1 = var0.bind(var1)(var2);
        var0 = var1.getCurrentScope;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = function() {
        var1 = _closure1_slot2;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = var1.getClient;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getClient = var3;
    var1.getCurrentScope = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getGlobalSingleton;
        var1 = 'globalScope';
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.Scope;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var4 = var1;
            var0 = new var4[var0](var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.getGlobalScope = var2;
    var2 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var0);
        var0 = var2.getMainCarrier;
        var2 = var0.bind(var2)();
        var0 = 1;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.getAsyncContextStrategy;
        var1 = var0.bind(var1)(var2);
        var0 = var1.getIsolationScope;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getIsolationScope = var2;
    var2 = function() {
        _fun99178: for (var _fun99178_ip = 0;;) switch (_fun99178_ip) {
            case 0:
                var5 = undefined;
                var6 = undefined;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var4 = var3.bind(var5)(var1);
                var1 = var4.getMainCarrier;
                var4 = var1.bind(var4)();
                var1 = 1;
                var0 = var0[var1];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getAsyncContextStrategy;
                var4 = var0.bind(var3)(var4);
                var5 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var3;
                var9 = var5;
                var0 = new var10[var0](var9, var8);
                var0 = var0 instanceof Object ? var0 : var3;
                var7 = var2 < var5;
                var3 = 0;
                if (!var7) {
                    _fun99178_ip = 117;
                    continue _fun99178
                }
            case 102:
                var7 = arguments[var3];
                var0[var3] = var7;
                var3 = var3 + 1;
                if (var3 < var5) {
                    _fun99178_ip = 102;
                    continue _fun99178
                }
            case 117:
                var5 = var0.length;
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun99178_ip = 146;
                    continue _fun99178
                }
            case 129:
                var5 = var4.withIsolationScope;
                var3 = var0[var2];
                var3 = var5.bind(var4)(var3);
                return var3;
            case 146:
                var3 = var0[var2];
                var2 = var0[var1];
                if (var3) {
                    _fun99178_ip = 170;
                    continue _fun99178
                }
            case 157:
                var0 = var4.withIsolationScope;
                var0 = var0.bind(var4)(var2);
                _fun99178_ip = 182;
                continue _fun99178;
            case 170:
                var1 = var4.withSetIsolationScope;
                var0 = var1.bind(var4)(var3, var2);
            case 182:
                return var0;
        }
    };
    var1.withIsolationScope = var2;
    var0 = function() {
        _fun99179: for (var _fun99179_ip = 0;;) switch (_fun99179_ip) {
            case 0:
                var5 = undefined;
                var6 = undefined;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var1 = var0[var2];
                var4 = var3.bind(var5)(var1);
                var1 = var4.getMainCarrier;
                var4 = var1.bind(var4)();
                var1 = 1;
                var0 = var0[var1];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getAsyncContextStrategy;
                var4 = var0.bind(var3)(var4);
                var5 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var3;
                var9 = var5;
                var0 = new var10[var0](var9, var8);
                var0 = var0 instanceof Object ? var0 : var3;
                var7 = var2 < var5;
                var3 = 0;
                if (!var7) {
                    _fun99179_ip = 117;
                    continue _fun99179
                }
            case 102:
                var7 = arguments[var3];
                var0[var3] = var7;
                var3 = var3 + 1;
                if (var3 < var5) {
                    _fun99179_ip = 102;
                    continue _fun99179
                }
            case 117:
                var5 = var0.length;
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun99179_ip = 146;
                    continue _fun99179
                }
            case 129:
                var5 = var4.withScope;
                var3 = var0[var2];
                var3 = var5.bind(var4)(var3);
                return var3;
            case 146:
                var3 = var0[var2];
                var2 = var0[var1];
                if (var3) {
                    _fun99179_ip = 170;
                    continue _fun99179
                }
            case 157:
                var0 = var4.withScope;
                var0 = var0.bind(var4)(var2);
                _fun99179_ip = 182;
                continue _fun99179;
            case 170:
                var1 = var4.withSetScope;
                var0 = var1.bind(var4)(var3, var2);
            case 182:
                return var0;
        }
    };
    var1.withScope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12882, 12883, 12824, 12885]);