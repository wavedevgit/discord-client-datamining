// modules/replies/didReplyMention.tsx
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
    var1 = 'modules/replies/didReplyMention.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun56188: for (var _fun56188_ip = 0;;) switch (_fun56188_ip) {
            case 0:
                var1 = arg1;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun56188_ip = 48;
                    continue _fun56188
                }
            case 12:
                var2 = arg0;
                var3 = var2.mentions;
                var2 = var3.includes;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var1;
            case 48:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);