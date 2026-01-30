// utils/NetworkUtils.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = new Array(0);
    var _closure1_slot2 = var0;
    var0 = false;
    var _closure1_slot3 = var0;
    var1 = {};
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var9 = var6.default;
    var10 = var1;
    var6 = copyDataProperties(var10, var9);
    var6 = function() { // Original name: awaitOnline, environment: var3
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            _fun16689: for (var _fun16689_ip = 0;;) switch (_fun16689_ip) {
                case 0:
                    var1 = arg0;
                    var6 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 0;
                    var4 = var0[var5];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var6 = var4.default;
                    var4 = var6.isOnline;
                    var4 = var4.bind(var6)();
                    if (var4) {
                        _fun16689_ip = 118;
                        continue _fun16689
                    }
                case 47:
                    var6 = _closure1_slot2;
                    var4 = var6.push;
                    var4 = var4.bind(var6)(var1);
                    var4 = _closure1_slot3;
                    if (var4) {
                        _fun16689_ip = 116;
                        continue _fun16689
                    }
                case 68:
                    var4 = true;
                    _closure1_slot3 = var4;
                    var4 = function() { // Original name: whenOnline, environment: var3
                        var2 = _closure1_slot2;
                        var3 = var2.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var1 = 0;
                        var2.length = var1;
                        var2 = false;
                        _closure1_slot3 = var2;
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var1 = var0[var1];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.default;
                        var2 = var3.removeOnlineCallback;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.default;
                    var2 = var3.addOnlineCallback;
                    var2 = var2.bind(var3)(var4);
                case 116:
                    return var0;
                case 118:
                    var0 = var1.bind(var0)();
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var3 = 'awaitOnline';
    var1[var3] = var6;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/NetworkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1445, 2]);