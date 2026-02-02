// modules/stage_channels/useRequestToSpeakPermission.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useRequestToSpeakPermission.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67738: for (var _fun67738_ip = 0;;) switch (_fun67738_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var4 = undefined;
                var8 = var6.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var7.bind(var8)(var6, var2, var3);
                var _closure2_slot1 = var6;
                var3 = _closure1_slot1;
                var2 = 5;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.canEveryoneRole;
                var2 = _closure1_slot6;
                var2 = var2.REQUEST_TO_SPEAK;
                var3 = var3.bind(var5)(var2, var6);
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var5 = var2.bind(var5)(var3);
                var2 = _closure1_slot3;
                var0 = 2;
                var5 = var2.bind(var4)(var5, var0);
                var0 = 0;
                var2 = var5[var0];
                var0 = 1;
                var0 = var5[var0];
                var _closure2_slot2 = var0;
                if (!(var3 !== var2)) {
                    _fun67738_ip = 168;
                    continue _fun67738
                }
            case 163:
                var0 = var0.bind(var4)(var3);
            case 168:
                var0 = new Array(2);
                var0[0] = var2;
                var1 = function(arg0) { // Environment: var1
                    _fun67740: for (var _fun67740_ip = 0;;) switch (_fun67740_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun67740_ip = 77;
                                continue _fun67740
                            }
                        case 16:
                            var0 = _closure2_slot2;
                            var5 = undefined;
                            var0 = var0.bind(var5)(var4);
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 6;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.setEveryoneRolePermissionAllowed;
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot6;
                            var0 = var0.REQUEST_TO_SPEAK;
                            var0 = var2.bind(var3)(var1, var0, var4);
                        case 77:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0[1] = var1;
                return var0;
        }
    };
    var2.useRequestToSpeakPermission = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 660, 566, 3057, 5880, 2]);