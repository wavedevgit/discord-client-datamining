// modules/chat/SlowmodeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun54400: for (var _fun54400_ip = 0;;) switch (_fun54400_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var3 = arg2;
                var2 = var3.can;
                var0 = _closure1_slot5;
                var0 = var0.BYPASS_SLOWMODE;
                var0 = var2.bind(var3)(var0, var4);
                if (var0) {
                    _fun54400_ip = 243;
                    continue _fun54400
                }
            case 40:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var2);
                var5 = var7.getCurrentConfig;
                var2 = {};
                var8 = var4.guild_id;
                var2.guildId = var8;
                var8 = 'canBypassSlowmodeHelper';
                var2.location = var8;
                var2 = var5.bind(var7)(var2);
                var2 = var2.enabled;
                if (var2) {
                    _fun54400_ip = 239;
                    continue _fun54400
                }
            case 105:
                var2 = _closure1_slot4;
                var2 = var2.SendMessage;
                if (!(var2 !== var6)) {
                    _fun54400_ip = 190;
                    continue _fun54400
                }
            case 119:
                var2 = _closure1_slot4;
                var2 = var2.CreateThread;
                if (!(var2 !== var6)) {
                    _fun54400_ip = 166;
                    continue _fun54400
                }
            case 133:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.assertNever;
                var2 = var2.bind(var5)(var6);
                return var0;
            case 166:
                var2 = var3.can;
                var0 = _closure1_slot5;
                var0 = var0.MANAGE_THREADS;
                var0 = var2.bind(var3)(var0, var4);
                return var0;
            case 190:
                var2 = var3.can;
                var0 = _closure1_slot5;
                var0 = var0.MANAGE_CHANNELS;
                var0 = var2.bind(var3)(var0, var4);
                if (var0) {
                    _fun54400_ip = 237;
                    continue _fun54400
                }
            case 215:
                var2 = var3.can;
                var1 = _closure1_slot5;
                var1 = var1.MANAGE_MESSAGES;
                var0 = var2.bind(var3)(var1, var4);
            case 237:
                return var0;
            case 239:
                var0 = false;
                return var0;
            case 243:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SlowmodeType;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/SlowmodeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var4 = _closure1_slot6;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var4.bind(var2)(var1, var0, var3);
        return var0;
    };
    var2.canBypassSlowmode = var3;
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure1_slot3;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanBypassSlowmode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 6555, 660, 6557, 1304, 566, 2]);