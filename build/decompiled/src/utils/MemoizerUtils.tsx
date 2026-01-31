// utils/MemoizerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = {};
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun54533: for (var _fun54533_ip = 0;;) switch (_fun54533_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var3 = undefined;
                    if (!(var3 === var0)) {
                        _fun54533_ip = 53;
                        continue _fun54533
                    }
                case 26:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        return var0;
    };
    var1.makeMemoizer = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/MemoizerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);