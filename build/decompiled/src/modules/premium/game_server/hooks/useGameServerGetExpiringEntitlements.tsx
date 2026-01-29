// modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGameServerGetExpiringEntitlements, environment: var1
        _fun102729: for (var _fun102729_ip = 0;;) switch (_fun102729_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var3, var1);
                var _closure2_slot1 = var1;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var5 = null;
                var5 = var5 == var1;
                if (var5) {
                    _fun102729_ip = 92;
                    continue _fun102729
                }
            case 86:
                var4 = var1.entitlements;
            case 92:
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun102731: for (var _fun102731_ip = 0;;) switch (_fun102731_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.values;
                            var0 = _closure2_slot1;
                            var4 = null;
                            var6 = var4 == var0;
                            var3 = undefined;
                            var0 = undefined;
                            if (var6) {
                                _fun102731_ip = 43;
                                continue _fun102731
                            }
                        case 33:
                            var5 = _closure2_slot1;
                            var0 = var5.entitlements;
                        case 43:
                            if (!(var4 == var0)) {
                                _fun102731_ip = 49;
                                continue _fun102731
                            }
                        case 47:
                            var0 = {};
                        case 49:
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.length;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun102731_ip = 101;
                                continue _fun102731
                            }
                        case 65:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 3;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.getExpiringGuildEntitlements;
                            var0 = var0.bind(var1)(var2);
                            _fun102731_ip = 105;
                            continue _fun102731;
                        case 101:
                            var0 = new Array(0);
                        case 105:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6672, 566, 13337, 2]);