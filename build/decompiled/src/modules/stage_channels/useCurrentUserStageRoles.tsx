// modules/stage_channels/useCurrentUserStageRoles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useCurrentUserStageRoles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCurrentUserStageRoles, environment: var1
        _fun65165: for (var _fun65165_ip = 0;;) switch (_fun65165_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun65165_ip = 20;
                    continue _fun65165
                }
            case 18:
                var5 = false;
            case 20:
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresObject;
                var7 = _closure1_slot3;
                var2 = new Array(2);
                var2[0] = var7;
                var1 = _closure1_slot2;
                var2[1] = var1;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var4 = var1.bind(var2)();
                    var3 = _closure1_slot3;
                    var2 = var3.getPermissionsForUser;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var4, var1, var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 4210, 566, 2]);