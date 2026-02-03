// modules/core/isActionRequired.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/core/isActionRequired.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun15742: for (var _fun15742_ip = 0;;) switch (_fun15742_ip) {
            case 0:
                var4 = arguments[0];
                var1 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun15742_ip = 19;
                    continue _fun15742
                }
            case 12:
                var4 = _closure1_slot0;
            case 19:
                if (!(var1 === var0)) {
                    _fun15742_ip = 30;
                    continue _fun15742
                }
            case 23:
                var1 = _closure1_slot1;
            case 30:
                var0 = var1.getAction;
                var1 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var1;
                if (var0) {
                    _fun15742_ip = 88;
                    continue _fun15742
                }
            case 49:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = var4.getState;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 88:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1365, 1366, 2]);