// polyfills.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var2.bind(var0)(var4);
    var4 = global;
    var5 = var4.String;
    var5 = var5.prototype;
    var5 = var5.toLocaleLowerCase;
    var _closure1_slot0 = var5;
    var4 = var4.String;
    var4 = var4.prototype;
    var1 = function() {
        _fun96861: for (var _fun96861_ip = 0;;) switch (_fun96861_ip) {
            case 0:
                var3 = this;
                var2 = var3.length;
                var0 = '';
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun96861_ip = 35;
                    continue _fun96861
                }
            case 18:
                var2 = _closure1_slot0;
                var1 = var2.call;
                var0 = var1.bind(var2)(var3);
            case 35:
                return var0;
        }
    };
    var4.toLocaleLowerCase = var1;
    var1 = 1;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'polyfills.android.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12657, 2]);