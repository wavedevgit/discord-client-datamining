// modules/hang_status/useCanSeeHangStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/useCanSeeHangStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useCanSeeHangStatus, environment: var1
        _fun61918: for (var _fun61918_ip = 0;;) switch (_fun61918_ip) {
            case 0:
                var7 = arg1;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var5 = undefined;
                var4 = var3.bind(var5)(var0);
                var3 = var4.useHangStatusExperiment;
                var0 = {};
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun61918_ip = 58;
                    continue _fun61918
                }
            case 53:
                var6 = var7.guild_id;
            case 58:
                var0.guildId = var6;
                var6 = arg0;
                var0.location = var6;
                var0 = var3.bind(var4)(var0);
                var0 = var0.enableHangStatus;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.useStateFromStores;
                var5 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot2;
                    var2 = var3.can;
                    var0 = _closure1_slot3;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                if (!var0) {
                    _fun61918_ip = 134;
                    continue _fun61918
                }
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var2.useCanSeeHangStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3050, 483, 3573, 566, 2]);