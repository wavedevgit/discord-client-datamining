// modules/panels/morphable/AppFreezeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.create;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.lockKeys = var2;
        var1 = function arg0() {
            var0 = arg0;
            var2 = var0.key;
            var _closure3_slot0 = var2;
            var0 = var0.lockEnabled;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun104964: for (var _fun104964_ip = 0;;) switch (_fun104964_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure3_slot1;
                            var5 = var3.lockKeys;
                            var4 = var5.has;
                            var1 = _closure3_slot0;
                            var1 = var4.bind(var5)(var1);
                            if (var0) {
                                _fun104964_ip = 106;
                                continue _fun104964
                            }
                        case 33:
                            if (var1) {
                                _fun104964_ip = 38;
                                continue _fun104964
                            }
                        case 36:
                            return var3;
                        case 38:
                            var0 = global;
                            var0 = var0.Set;
                            var4 = var0.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var4;
                            var9 = var5;
                            var0 = new var10[var0](var9, var8);
                            var5 = var0 instanceof Object ? var0 : var4;
                            var4 = var5.delete;
                            var0 = _closure3_slot0;
                            var0 = var4.bind(var5)(var0);
                            var0 = {};
                            var9 = var0;
                            var8 = var3;
                            var4 = copyDataProperties(var9, var8);
                            var4 = 'lockKeys';
                            var0[var4] = var5;
                            return var0;
                        case 106:
                            var0 = var3;
                            if (var1) {
                                _fun104964_ip = 211;
                                continue _fun104964
                            }
                        case 112:
                            var1 = {};
                            var9 = var1;
                            var8 = var3;
                            var4 = copyDataProperties(var9, var8);
                            var5 = global;
                            var4 = var5.Set;
                            var6 = _closure3_slot0;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var6 = var5.Array;
                            var5 = var6.from;
                            var3 = var3.lockKeys;
                            var8 = var5.bind(var6)(var3);
                            var7 = 1;
                            var9 = var2;
                            var3 = arraySpread(var9, var8, var7);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var10 = var3;
                            var9 = var2;
                            var2 = new var10[var4](var9, var8);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = 'lockKeys';
                            var1[var2] = var3;
                            var0 = var1;
                        case 211:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.requestFreezeLock = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/panels/morphable/AppFreezeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);