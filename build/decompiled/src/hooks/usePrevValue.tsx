// hooks/usePrevValue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.useRef;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/usePrevValue.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: usePrevValue, environment: var1
        _fun61858: for (var _fun61858_ip = 0;;) switch (_fun61858_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = undefined;
                var1 = null;
                var0 = var4.bind(var3)(var1);
                var1 = var4.bind(var3)(var1);
                var3 = global;
                var5 = var3.Object;
                var4 = var5.is;
                var3 = var1.current;
                var3 = var4.bind(var5)(var2, var3);
                if (var3) {
                    _fun61858_ip = 69;
                    continue _fun61858
                }
            case 52:
                var3 = var1.current;
                var0.current = var3;
                var1.current = var2;
            case 69:
                var0 = var0.current;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);