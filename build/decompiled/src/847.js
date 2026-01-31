// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() { // Original name: getCurrentScope, environment: var0
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
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function() { // Original name: getClient, environment: var0
        var1 = _closure1_slot2;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = var1.getClient;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getClient = var3;
    var1.getCurrentScope = var2;
    var2 = function() { // Original name: getGlobalScope, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getGlobalSingleton;
        var1 = 'globalScope';
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
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
    var2 = function() { // Original name: getIsolationScope, environment: var0
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
    var2 = function(arg0) { // Original name: getTraceContextFromScope, environment: var0
        _fun8963: for (var _fun8963_ip = 0;;) switch (_fun8963_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getPropagationContext;
                var2 = var0.bind(var1)();
                var3 = var2.traceId;
                var1 = var2.parentSpanId;
                var0 = {};
                var0.trace_id = var3;
                var2 = var2.propagationSpanId;
                if (var2) {
                    _fun8963_ip = 76;
                    continue _fun8963
                }
            case 41:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.generateSpanId;
                var2 = var3.bind(var4)();
            case 76:
                var0.span_id = var2;
                if (!var1) {
                    _fun8963_ip = 90;
                    continue _fun8963
                }
            case 84:
                var0.parent_span_id = var1;
            case 90:
                return var0;
        }
    };
    var1.getTraceContextFromScope = var2;
    var2 = function() { // Original name: withIsolationScope, environment: var0
        _fun8964: for (var _fun8964_ip = 0;;) switch (_fun8964_ip) {
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
                    _fun8964_ip = 117;
                    continue _fun8964
                }
            case 102:
                var7 = arguments[var3];
                var0[var3] = var7;
                var3 = var3 + 1;
                if (var3 < var5) {
                    _fun8964_ip = 102;
                    continue _fun8964
                }
            case 117:
                var5 = var0.length;
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun8964_ip = 146;
                    continue _fun8964
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
                    _fun8964_ip = 170;
                    continue _fun8964
                }
            case 157:
                var0 = var4.withIsolationScope;
                var0 = var0.bind(var4)(var2);
                _fun8964_ip = 182;
                continue _fun8964;
            case 170:
                var1 = var4.withSetIsolationScope;
                var0 = var1.bind(var4)(var3, var2);
            case 182:
                return var0;
        }
    };
    var1.withIsolationScope = var2;
    var0 = function() { // Original name: withScope, environment: var0
        _fun8965: for (var _fun8965_ip = 0;;) switch (_fun8965_ip) {
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
                    _fun8965_ip = 117;
                    continue _fun8965
                }
            case 102:
                var7 = arguments[var3];
                var0[var3] = var7;
                var3 = var3 + 1;
                if (var3 < var5) {
                    _fun8965_ip = 102;
                    continue _fun8965
                }
            case 117:
                var5 = var0.length;
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun8965_ip = 146;
                    continue _fun8965
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
                    _fun8965_ip = 170;
                    continue _fun8965
                }
            case 157:
                var0 = var4.withScope;
                var0 = var0.bind(var4)(var2);
                _fun8965_ip = 182;
                continue _fun8965;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [825, 840, 842, 829]);