// modules/app_launcher/native/hooks/useLatch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useLatch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var2 = var4.useRef;
        var0 = false;
        var0 = var2.bind(var4)(var0);
        var _closure2_slot1 = var0;
        var0 = {};
        var6 = var4.useCallback;
        var3 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = _closure2_slot1;
            var1.current = var0;
            return var0;
        };
        var2 = new Array(0);
        var2 = var6.bind(var4)(var3, var2);
        var0.setLatch = var2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun108056: for (var _fun108056_ip = 0;;) switch (_fun108056_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var1 = var1.current;
                    if (!var1) {
                        _fun108056_ip = 37;
                        continue _fun108056
                    }
                case 15:
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2.current = var1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.tryCallback = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);