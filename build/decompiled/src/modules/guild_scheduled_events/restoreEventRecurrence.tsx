// modules/guild_scheduled_events/restoreEventRecurrence.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/restoreEventRecurrence.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun67568: for (var _fun67568_ip = 0;;) switch (_fun67568_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var4 = arg2;
                var3 = arg3;
                var7 = var0.scheduled_start_time;
                var6 = var0.scheduled_end_time;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun67568_ip = 34;
                    continue _fun67568
                }
            case 30:
                if (!(var0 != var6)) {
                    _fun67568_ip = 104;
                    continue _fun67568
                }
            case 34:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.updateGuildEventException;
                var0 = {};
                var0.scheduled_start_time = var7;
                var0.scheduled_end_time = var6;
                var6 = false;
                var0.is_canceled = var6;
                var12 = var2;
                var11 = var0;
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var0 = var12[var1](var11, var10, var9, var8, var7);
                _fun67568_ip = 141;
                continue _fun67568;
            case 104:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var1 = var2.deleteGuildEventException;
                var0 = var1.bind(var2)(var5, var4, var3);
            case 141:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8062, 2]);