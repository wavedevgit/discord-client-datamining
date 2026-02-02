// hooks/useResettingValue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useState;
    var _closure1_slot4 = var6;
    var6 = var3.useCallback;
    var _closure1_slot5 = var6;
    var3 = var3.useEffect;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useResettingValue.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var6 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var0 = _closure1_slot4;
        var4 = undefined;
        var3 = var0.bind(var4)(var6);
        var0 = _closure1_slot3;
        var8 = 2;
        var5 = var0.bind(var4)(var3, var8);
        var0 = 0;
        var3 = var5[var0];
        var0 = 1;
        var0 = var5[var0];
        var _closure2_slot2 = var0;
        var5 = _closure1_slot1;
        var0 = _closure1_slot2;
        var0 = var0[var8];
        var5 = var5.bind(var4)(var0);
        var0 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.Timeout;
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
        var5 = var5.bind(var4)(var0);
        var _closure2_slot3 = var5;
        var9 = _closure1_slot6;
        var8 = new Array(1);
        var8[0] = var5;
        var0 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var1 = _closure2_slot3;
                var0 = var1.stop;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var0 = var9.bind(var4)(var0, var8);
        var0 = new Array(2);
        var0[0] = var3;
        var3 = _closure1_slot5;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun82647: for (var _fun82647_ip = 0;;) switch (_fun82647_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot0;
                    if (!(var3 !== var2)) {
                        _fun82647_ip = 53;
                        continue _fun82647
                    }
                case 25:
                    var4 = _closure2_slot3;
                    var3 = var4.start;
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot2;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                case 53:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4893, 3591, 2]);