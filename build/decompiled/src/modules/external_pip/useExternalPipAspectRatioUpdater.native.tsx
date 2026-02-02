// modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot2;
        var1 = var3.useRef;
        var1 = var1.bind(var3)(var2);
        var _closure2_slot2 = var1;
        var2 = var3.useInsertionEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot2;
            var0 = _closure2_slot1;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var3 = var2.getTargetDimensions;
            var1 = _closure2_slot2;
            var1 = var1.current;
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.setPipAspectRatio;
            var3 = var1.width;
            var1 = var1.height;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var2.subscribeFromItem;
            var0 = function() { // Environment: var0
                _fun110789: for (var _fun110789_ip = 0;;) switch (_fun110789_ip) {
                    case 0:
                        var2 = _closure2_slot0;
                        var1 = var2.getTargetDimensions;
                        var0 = _closure2_slot2;
                        var0 = var0.current;
                        var0 = var1.bind(var2)(var0);
                        var3 = var0.width;
                        var2 = var0.height;
                        var0 = _closure3_slot0;
                        var0 = var0.width;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun110789_ip = 69;
                            continue _fun110789
                        }
                    case 56:
                        var4 = _closure3_slot0;
                        var4 = var4.height;
                        var0 = var2 === var4;
                    case 69:
                        if (var0) {
                            _fun110789_ip = 123;
                            continue _fun110789
                        }
                    case 72:
                        var0 = {};
                        var0.width = var3;
                        var0.height = var2;
                        _closure3_slot0 = var0;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var0 = var1.setPipAspectRatio;
                        var0 = var0.bind(var1)(var3, var2);
                    case 123:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7998, 2]);