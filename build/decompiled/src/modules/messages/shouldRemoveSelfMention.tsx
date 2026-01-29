// modules/messages/shouldRemoveSelfMention.tsx
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
    var3 = var3.MessageTypesSets;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/shouldRemoveSelfMention.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: shouldRemoveSelfMention, environment: var1
        _fun68948: for (var _fun68948_ip = 0;;) switch (_fun68948_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot0;
                var3 = var0.SELF_MENTIONABLE_SYSTEM;
                var2 = var3.has;
                var0 = var1.type;
                var0 = var2.bind(var3)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun68948_ip = 66;
                    continue _fun68948
                }
            case 37:
                var1 = var1.author;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun68948_ip = 59;
                    continue _fun68948
                }
            case 54:
                var2 = var1.id;
            case 59:
                var1 = arg1;
                var0 = var2 === var1;
            case 66:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);