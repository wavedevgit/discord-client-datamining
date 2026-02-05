// modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = new Array(0);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92056: for (var _fun92056_ip = 0;;) switch (_fun92056_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getUserProfile;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1);
                var _closure2_slot1 = var1;
                var2 = _closure1_slot2;
                var4 = null;
                var5 = var4 == var1;
                var4 = undefined;
                if (var5) {
                    _fun92056_ip = 89;
                    continue _fun92056
                }
            case 83:
                var4 = var1.applicationRoleConnections;
            case 89:
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun92058: for (var _fun92058_ip = 0;;) switch (_fun92058_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun92058_ip = 28;
                                continue _fun92058
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var1 = var3.applicationRoleConnections;
                        case 28:
                            if (!(var2 != var1)) {
                                _fun92058_ip = 44;
                                continue _fun92058
                            }
                        case 32:
                            var0 = _closure2_slot1;
                            var0 = var0.applicationRoleConnections;
                            _fun92058_ip = 51;
                            continue _fun92058;
                        case 44:
                            var0 = _closure1_slot4;
                        case 51:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4660, 566, 2]);