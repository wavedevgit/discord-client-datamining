// modules/rpc/helpers/getCurrentVoiceChannel.tsx
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
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/getCurrentVoiceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: getCurrentVoiceChannel, environment: var1
        _fun50607: for (var _fun50607_ip = 0;;) switch (_fun50607_ip) {
            case 0:
                var4 = _closure1_slot2;
                var3 = var4.getVoiceStateForSession;
                var5 = _closure1_slot0;
                var1 = var5.getId;
                var2 = var1.bind(var5)();
                var1 = var5.getSessionId;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var2, var1);
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun50607_ip = 59;
                    continue _fun50607
                }
            case 54:
                var2 = var1.channelId;
            case 59:
                var1 = _closure1_slot1;
                var0 = var1.getChannel;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1372, 3480, 2]);