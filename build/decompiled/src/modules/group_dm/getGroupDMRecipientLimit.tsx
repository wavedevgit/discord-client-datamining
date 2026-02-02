// modules/group_dm/getGroupDMRecipientLimit.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot1 = var6;
    var3 = var3.MAX_GROUP_DM_STAFF_PARTICIPANTS;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/group_dm/getGroupDMRecipientLimit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107213: for (var _fun107213_ip = 0;;) switch (_fun107213_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = var3.getCurrentUser;
                var4 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun107213_ip = 38;
                    continue _fun107213
                }
            case 25:
                var3 = var4.isStaff;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun107213_ip = 68;
                    continue _fun107213
                }
            case 38:
                if (!(var0 != var2)) {
                    _fun107213_ip = 54;
                    continue _fun107213
                }
            case 42:
                var3 = var2.userLimit;
                var0 = 0;
                if (!(!(var3 > var0))) {
                    _fun107213_ip = 60;
                    continue _fun107213
                }
            case 54:
                var0 = _closure1_slot1;
                _fun107213_ip = 66;
                continue _fun107213;
            case 60:
                var0 = var2.userLimit;
            case 66:
                _fun107213_ip = 72;
                continue _fun107213;
            case 68:
                var0 = _closure1_slot2;
            case 72:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 660, 2]);