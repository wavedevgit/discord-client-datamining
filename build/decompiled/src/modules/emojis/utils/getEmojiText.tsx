// modules/emojis/utils/getEmojiText.tsx
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
    var1 = 'modules/emojis/utils/getEmojiText.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun108605: for (var _fun108605_ip = 0;;) switch (_fun108605_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.id;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun108605_ip = 23;
                    continue _fun108605
                }
            case 14:
                var0 = var1.surrogates;
                if (!(var2 == var0)) {
                    _fun108605_ip = 85;
                    continue _fun108605
                }
            case 23:
                var0 = var1.uniqueName;
                if (!(var2 != var0)) {
                    _fun108605_ip = 47;
                    continue _fun108605
                }
            case 33:
                var2 = var1.uniqueName;
                var0 = '';
                if (!(var0 === var2)) {
                    _fun108605_ip = 54;
                    continue _fun108605
                }
            case 47:
                var3 = var1.name;
                _fun108605_ip = 60;
                continue _fun108605;
            case 54:
                var3 = var1.uniqueName;
            case 60:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = ':';
                var0 = var2.bind(var0)(var3, var0);
                _fun108605_ip = 90;
                continue _fun108605;
            case 85:
                var0 = var1.surrogates;
            case 90:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);