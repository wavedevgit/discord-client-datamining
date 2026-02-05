// modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = {};
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78089: for (var _fun78089_ip = 0;;) switch (_fun78089_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun78089_ip = 20;
                    continue _fun78089
                }
            case 18:
                var5 = 0;
            case 20:
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 2;
                var0 = var7[var0];
                var7 = var3.bind(var4)(var0);
                var4 = var7.useStateFromStores;
                var0 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getRoleMemberCount;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var7)(var3, var0);
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun78091: for (var _fun78091_ip = 0;;) switch (_fun78091_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun78091_ip = 145;
                                continue _fun78091
                            }
                        case 16:
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot0;
                            var4 = var4[var3];
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun78091_ip = 48;
                                continue _fun78091
                            }
                        case 38:
                            var5 = _closure2_slot1;
                            var3 = 0;
                            var2 = var5 > var3;
                        case 48:
                            if (!var2) {
                                _fun78091_ip = 80;
                                continue _fun78091
                            }
                        case 51:
                            var3 = global;
                            var5 = var3.Date;
                            var3 = var5.now;
                            var3 = var3.bind(var5)();
                            var4 = var3 - var4;
                            var3 = _closure2_slot1;
                            var2 = var4 < var3;
                        case 80:
                            if (var2) {
                                _fun78091_ip = 145;
                                continue _fun78091
                            }
                        case 83:
                            var3 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var1 = global;
                            var4 = var1.Date;
                            var1 = var4.now;
                            var1 = var1.bind(var4)();
                            var3[var2] = var1;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.fetchMemberCounts;
                            var0 = var0.bind(var1)(var2);
                        case 145:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9920, 566, 9921, 2]);