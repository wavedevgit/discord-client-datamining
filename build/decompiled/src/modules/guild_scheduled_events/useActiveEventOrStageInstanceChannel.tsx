// modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useActiveEventOrStageInstanceChannel, environment: var1
        _fun102330: for (var _fun102330_ip = 0;;) switch (_fun102330_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 1;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.useFirstActiveEventChannel;
                var1 = var1.bind(var3)(var4);
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var5 = var3.bind(var0)(var4);
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var2 = 0;
                var5 = var5[var2];
                var2 = null;
                var6 = var2 == var5;
                if (var6) {
                    _fun102330_ip = 89;
                    continue _fun102330
                }
            case 84:
                var0 = var5.id;
            case 89:
                var0 = var3.bind(var4)(var0);
                if (!(var2 != var1)) {
                    _fun102330_ip = 101;
                    continue _fun102330
                }
            case 98:
                var0 = var1;
            case 101:
                return var0;
        }
    };
    var2.useActiveEventOrStageInstanceChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 8040, 13286, 2]);