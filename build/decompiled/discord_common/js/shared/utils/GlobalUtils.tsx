// ../discord_common/js/shared/utils/GlobalUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/GlobalUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun96832: for (var _fun96832_ip = 0;;) switch (_fun96832_ip) {
            case 0:
                var1 = global;
                var0 = var1.globalThis;
                var3 = 'undefined';
                var0 = typeof var0;
                if (!(var3 === var0)) {
                    _fun96832_ip = 99;
                    continue _fun96832
                }
            case 19:
                var0 = var1.window;
                var0 = typeof var0;
                if (!(var3 === var0)) {
                    _fun96832_ip = 91;
                    continue _fun96832
                }
            case 31:
                var4 = _closure1_slot0;
                var0 = undefined;
                if (!(var0 === var4)) {
                    _fun96832_ip = 85;
                    continue _fun96832
                }
            case 44:
                var0 = var1.self;
                var0 = typeof var0;
                if (!(var3 === var0)) {
                    _fun96832_ip = 77;
                    continue _fun96832
                }
            case 57:
                var4 = var1.Object;
                var3 = var4.create;
                var0 = null;
                var0 = var3.bind(var4)(var0);
                _fun96832_ip = 83;
                continue _fun96832;
            case 77:
                var0 = var1.self;
            case 83:
                _fun96832_ip = 89;
                continue _fun96832;
            case 85:
                var0 = _closure1_slot0;
            case 89:
                _fun96832_ip = 97;
                continue _fun96832;
            case 91:
                var0 = var1.window;
            case 97:
                _fun96832_ip = 105;
                continue _fun96832;
            case 99:
                var0 = var1.globalThis;
            case 105:
                return var0;
        }
    };
    var2.getGlobalObject = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);