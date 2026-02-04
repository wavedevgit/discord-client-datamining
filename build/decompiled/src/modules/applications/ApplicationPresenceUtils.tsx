// modules/applications/ApplicationPresenceUtils.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/ApplicationPresenceUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun59694: for (var _fun59694_ip = 0;;) switch (_fun59694_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var2 = var3.getChannel;
                var0 = arg1;
                var3 = var2.bind(var3)(var0);
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun59694_ip = 44;
                    continue _fun59694
                }
            case 38:
                var0 = var4.bot;
            case 44:
                if (!var0) {
                    _fun59694_ip = 57;
                    continue _fun59694
                }
            case 47:
                var4 = var3.isPrivate;
                var0 = var4.bind(var3)();
            case 57:
                if (!var0) {
                    _fun59694_ip = 85;
                    continue _fun59694
                }
            case 60:
                var4 = var3.rawRecipients;
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var0 = var2 == var1;
            case 85:
                return var0;
        }
    };
    var2.shouldDisableUserPresenceInChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 2]);