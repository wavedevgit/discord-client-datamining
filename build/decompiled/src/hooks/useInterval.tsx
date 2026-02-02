// hooks/useInterval.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot2 = var6;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useInterval.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var2 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var4;
        var6 = _closure1_slot3;
        var0 = undefined;
        var5 = var6.bind(var0)(var2);
        var _closure2_slot2 = var5;
        var5 = null;
        var5 = var6.bind(var0)(var5);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot2;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot2;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var0)(var2, var5);
        var2 = new Array(1);
        var2[0] = var4;
        var1 = function() { // Environment: var1
            _fun57641: for (var _fun57641_ip = 0;;) switch (_fun57641_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if (!(var3 === var2)) {
                        _fun57641_ip = 62;
                        continue _fun57641
                    }
                case 15:
                    var2 = _closure2_slot3;
                    var2 = var2.current;
                    if (!(var3 !== var2)) {
                        _fun57641_ip = 58;
                        continue _fun57641
                    }
                case 28:
                    var2 = global;
                    var6 = var2.clearInterval;
                    var2 = _closure2_slot3;
                    var5 = var2.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var2.current = var3;
                case 58:
                    var2 = undefined;
                    return var2;
                case 62:
                    var2 = _closure2_slot3;
                    var3 = global;
                    var5 = var3.setInterval;
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = _closure2_slot2;
                        var3 = var2.current;
                        var1 = null;
                        var3 = var1 != var3;
                        var1 = 'Missing callback';
                        var1 = var4.bind(var0)(var3, var1);
                        var1 = var2.current;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var5.bind(var3)(var1, var4);
                    var2.current = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var0 = _closure2_slot3;
                        var1 = var0.current;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 44, 2]);