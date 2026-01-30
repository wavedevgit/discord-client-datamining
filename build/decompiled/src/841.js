// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: getAsyncContextStack, environment: var1
        _fun8881: for (var _fun8881_ip = 0;;) switch (_fun8881_ip) {
            case 0:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var3 = var4[var0];
                var6 = undefined;
                var5 = var1.bind(var6)(var3);
                var3 = var5.getMainCarrier;
                var3 = var3.bind(var5)();
                var0 = var4[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.getSentryCarrier;
                var1 = var0.bind(var1)(var3);
                var0 = var1.stack;
                if (var0) {
                    _fun8881_ip = 140;
                    continue _fun8881
                }
            case 64:
                var5 = _closure1_slot4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 5;
                var4 = var7[var2];
                var8 = var3.bind(var6)(var4);
                var4 = var8.getDefaultCurrentScope;
                var4 = var4.bind(var8)();
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.getDefaultIsolationScope;
                var9 = var2.bind(var3)();
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var3;
                var10 = var4;
                var2 = new var11[var5](var10, var9, var8);
                var0 = var2 instanceof Object ? var2 : var3;
            case 140:
                var1.stack = var0;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: withScope, environment: var1
        var1 = _closure1_slot5;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.withScope;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: withSetScope, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var _closure2_slot2 = var2;
        var1 = var2.withScope;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = var2.getStackTop;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot0;
            var1.scope = var2;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: withIsolationScope, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = var2.withScope;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var0 = _closure1_slot5;
            var1 = undefined;
            var3 = var0.bind(var1)();
            var0 = var3.getIsolationScope;
            var0 = var0.bind(var3)();
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0, arg1) { // Original name: AsyncContextStack, environment: var4
            _fun8888: for (var _fun8888_ip = 0;;) switch (_fun8888_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var6 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var1, var5);
                    if (var3) {
                        _fun8888_ip = 80;
                        continue _fun8888
                    }
                case 34:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 2;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.Scope;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var6;
                    var5 = new var10[var5](var9);
                    var3 = var5 instanceof Object ? var5 : var6;
                case 80:
                    if (var2) {
                        _fun8888_ip = 129;
                        continue _fun8888
                    }
                case 83:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.Scope;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var10 = var5;
                    var4 = new var10[var4](var9);
                    var2 = var4 instanceof Object ? var4 : var5;
                case 129:
                    var4 = {};
                    var4.scope = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1._stack = var3;
                    var1._isolationScope = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'withScope';
        var0.key = var1;
        var1 = function(arg0) { // Original name: withScope, environment: var4
            _fun8889: for (var _fun8889_ip = 0;;) switch (_fun8889_ip) {
                case 0:
                    var2 = this;
                    var4 = arg0;
                    var5 = undefined;
                    var3 = undefined;
                    var0 = undefined;
                    var _closure3_slot0 = var2;
                    var6 = var2._pushScope;
                    var0 = var6.bind(var2)();
                case 28: // try_start_0
                    var3 = var4.bind(var5)(var0);
                case 33: // try_end0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 3;
                    var0 = var6[var0];
                    var5 = var4.bind(var5)(var0);
                    var4 = var5.isThenable;
                    var0 = var3;
                    var0 = var4.bind(var5)(var0);
                    if (var0) {
                        _fun8889_ip = 88;
                        continue _fun8889
                    }
                case 73:
                    var0 = var2._popScope;
                    var0 = var0.bind(var2)();
                    var0 = var3;
                    _fun8889_ip = 112;
                    continue _fun8889;
                case 88:
                    var5 = var3;
                    var4 = var5.then;
                    var3 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._popScope;
                        var0 = var0.bind(var1)();
                        var0 = arg0;
                        return var0;
                    };
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._popScope;
                        var0 = var0.bind(var1)();
                        var0 = arg0;
                        throw var0;
                    };
                    var0 = var4.bind(var5)(var3, var1);
                case 112:
                    return var0;
                case 114: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var1 = var2._popScope;
                    var1 = var1.bind(var2)();
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'getClient';
        var0.key = var5;
        var5 = function() { // Original name: getClient, environment: var4
            var1 = this;
            var0 = var1.getStackTop;
            var0 = var0.bind(var1)();
            var0 = var0.client;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getScope';
        var0.key = var5;
        var5 = function() { // Original name: getScope, environment: var4
            var1 = this;
            var0 = var1.getStackTop;
            var0 = var0.bind(var1)();
            var0 = var0.scope;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getIsolationScope';
        var0.key = var5;
        var5 = function() { // Original name: getIsolationScope, environment: var4
            var0 = this;
            var0 = var0._isolationScope;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getStackTop';
        var0.key = var5;
        var5 = function() { // Original name: getStackTop, environment: var4
            var0 = this;
            var1 = var0._stack;
            var0 = var0._stack;
            var2 = var0.length;
            var0 = 1;
            var0 = var2 - var0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_pushScope';
        var0.key = var5;
        var5 = function() { // Original name: _pushScope, environment: var4
            var5 = this;
            var0 = var5.getScope;
            var1 = var0.bind(var5)();
            var0 = var1.clone;
            var0 = var0.bind(var1)();
            var3 = var5._stack;
            var2 = var3.push;
            var1 = {};
            var4 = var5.getClient;
            var4 = var4.bind(var5)();
            var1.client = var4;
            var1.scope = var0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_popScope';
        var0.key = var5;
        var4 = function() { // Original name: _popScope, environment: var4
            _fun8897: for (var _fun8897_ip = 0;;) switch (_fun8897_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._stack;
                    var2 = var0.length;
                    var0 = 1;
                    var2 = var2 <= var0;
                    var0 = !var2;
                    if (var2) {
                        _fun8897_ip = 49;
                        continue _fun8897
                    }
                case 27:
                    var2 = var1._stack;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    var1 = !var1;
                    var0 = !var1;
                case 49:
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var2.AsyncContextStack = var3;
    var1 = function() { // Original name: getStackAsyncContextStrategy, environment: var1
        var0 = {};
        var3 = _closure1_slot8;
        var0.withIsolationScope = var3;
        var3 = _closure1_slot6;
        var0.withScope = var3;
        var2 = _closure1_slot7;
        var0.withSetScope = var2;
        var2 = function(arg0, arg1) { // Original name: withSetIsolationScope, environment: var1
            var2 = _closure1_slot8;
            var1 = undefined;
            var0 = arg1;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.withSetIsolationScope = var2;
        var2 = function() { // Original name: getCurrentScope, environment: var1
            var1 = _closure1_slot5;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = var1.getScope;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.getCurrentScope = var2;
        var1 = function() { // Original name: getIsolationScope, environment: var1
            var1 = _closure1_slot5;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = var1.getIsolationScope;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.getIsolationScope = var1;
        return var0;
    };
    var2.getStackAsyncContextStrategy = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 842, 827, 825, 846]);