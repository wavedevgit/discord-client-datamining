// modules/staff/StaffMemberPreloader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PRELOAD_SERVER_ID;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/staff/StaffMemberPreloader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: preloadStaffMembers, environment: var1
        _fun114197: for (var _fun114197_ip = 0;;) switch (_fun114197_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var3 = null;
                var1 = var3 != var4;
                if (!var1) {
                    _fun114197_ip = 35;
                    continue _fun114197
                }
            case 25:
                var2 = var4.isStaff;
                var1 = var2.bind(var4)();
            case 35:
                if (!var1) {
                    _fun114197_ip = 60;
                    continue _fun114197
                }
            case 38:
                var5 = _closure1_slot2;
                var4 = var5.getGuild;
                var2 = _closure1_slot4;
                var2 = var4.bind(var5)(var2);
                var1 = var3 != var2;
            case 60:
                if (!var1) {
                    _fun114197_ip = 110;
                    continue _fun114197
                }
            case 63:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.requestMembers;
                var9 = _closure1_slot4;
                var8 = '';
                var7 = 0;
                var6 = false;
                var10 = var5;
                var0 = var10[var4](var9, var8, var7, var6, var5);
            case 110:
                var0 = undefined;
                return var0;
        }
    };
    var2.preloadStaffMembers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1613, 14592, 4642, 2]);