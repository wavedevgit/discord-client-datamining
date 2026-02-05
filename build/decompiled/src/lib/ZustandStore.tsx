// lib/ZustandStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/ZustandStore.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = function arg0() {
            _fun35278: for (var _fun35278_ip = 0;;) switch (_fun35278_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun35278_ip = 16;
                        continue _fun35278
                    }
                case 9:
                    var3 = _closure1_slot2;
                case 16:
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var _closure2_slot3 = var4;
        var3 = function arg0() {
            _fun35279: for (var _fun35279_ip = 0;;) switch (_fun35279_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure2_slot1;
                    var0 = var1.getState;
                    var2 = var0.bind(var1)();
                    var1 = null;
                    var0 = var2;
                    if (!(var1 != var3)) {
                        _fun35279_ip = 36;
                        continue _fun35279
                    }
                case 29:
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 36:
                    return var0;
            }
        };
        var _closure2_slot4 = var3;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var0 = 0;
        var0 = var8[var0];
        var6 = undefined;
        var5 = var7.bind(var6)(var0);
        var2 = var5.createWithEqualityFn;
        var0 = 1;
        var0 = var8[var0];
        var7 = var7.bind(var6)(var0);
        var6 = var7.subscribeWithSelector;
        var0 = function(arg0, arg1, arg2) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = function(arg0) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.batchUpdates;
                var0 = function() { // Environment: var0
                    var2 = _closure3_slot0;
                    var1 = _closure4_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = arg1;
            var0 = arg2;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var0 = var6.bind(var7)(var0);
        var0 = var2.bind(var5)(var0);
        var _closure2_slot1 = var0;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot1;
                var1 = var2.setState;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot2 = var2;
        var0 = {};
        var0.useState = var4;
        var0.getState = var3;
        var3 = function arg0() {
            _fun35285: for (var _fun35285_ip = 0;;) switch (_fun35285_ip) {
                case 0:
                    var3 = arguments[1];
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun35285_ip = 25;
                        continue _fun35285
                    }
                case 18:
                    var3 = _closure1_slot2;
                case 25:
                    var1 = _closure2_slot3;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0[var1];
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var0.useField = var3;
        var3 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot4;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0[var1];
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.getField = var3;
        var3 = function arg0, arg1, arg2() {
            var4 = _closure2_slot1;
            var3 = var4.subscribe;
            var2 = arg0;
            var1 = arg1;
            var0 = arg2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var0.subscribe = var3;
        var0.setState = var2;
        var1 = function() {
            var2 = _closure2_slot1;
            var1 = var2.getInitialState;
            var2 = var1.bind(var2)();
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0.resetState = var1;
        return var0;
    };
    var2.createZustandStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [797, 3917, 802, 2]);