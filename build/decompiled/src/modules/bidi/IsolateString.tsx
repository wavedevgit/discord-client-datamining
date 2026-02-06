// modules/bidi/IsolateString.tsx
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
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/bidi/IsolateString.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = '\u2068';
    var2.FSI = var1;
    var1 = '\u2069';
    var2.PDI = var1;
    var1 = function arg0() {
        _fun49356: for (var _fun49356_ip = 0;;) switch (_fun49356_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var0 = var2;
                if (!(var1 != var2)) {
                    _fun49356_ip = 46;
                    continue _fun49356
                }
            case 12:
                var3 = var2.length;
                var1 = 0;
                var0 = var2;
                if (!(var1 !== var3)) {
                    _fun49356_ip = 46;
                    continue _fun49356
                }
            case 26:
                var1 = '\u2068';
                var2 = var1 + var2;
                var1 = '\u2069';
                var0 = var2 + var1;
            case 46:
                return var0;
        }
    };
    var2.isolate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);