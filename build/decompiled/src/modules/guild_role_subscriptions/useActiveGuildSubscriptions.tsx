// modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot6 = var3;
    var3 = new Array(0);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun83923: for (var _fun83923_ip = 0;;) switch (_fun83923_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun83923_ip = 13;
                    continue _fun83923
                }
            case 11:
                var0 = {};
            case 13:
                var7 = var0.ensureFresh;
                if (!(var7 === var4)) {
                    _fun83923_ip = 25;
                    continue _fun83923
                }
            case 23:
                var7 = false;
            case 25:
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 3;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.bind(var4)();
                var0 = _closure1_slot6;
                var0 = var0.SUBSCRIBED;
                var6 = var3 === var0;
                _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var0 = 4;
                var0 = var5[var0];
                var5 = var3.bind(var4)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.getActiveGuildSubscriptions;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0);
                var5 = _closure1_slot4;
                var4 = var5.useRef;
                var3 = false;
                var3 = var4.bind(var5)(var3);
                _closure2_slot2 = var3;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() { // Environment: var2
                    _fun83925: for (var _fun83925_ip = 0;;) switch (_fun83925_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot0;
                            var0.ensureFresh = var1;
                            var1 = _closure2_slot1;
                            var0.hasRoleSubscriptions = var1;
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            var0.hasFetched = var1;
                            var5 = var0.ensureFresh;
                            var4 = var0.hasFetched;
                            var3 = var0.hasRoleSubscriptions;
                            var6 = _closure1_slot5;
                            var0 = var6.getActiveGuildSubscriptions;
                            var7 = var0.bind(var6)();
                            var6 = null;
                            var9 = var6 == var7;
                            var0 = undefined;
                            var8 = undefined;
                            if (var9) {
                                _fun83925_ip = 90;
                                continue _fun83925
                            }
                        case 85:
                            var8 = var7.length;
                        case 90:
                            var9 = var6 != var8;
                            var7 = 0;
                            var6 = 0;
                            if (!var9) {
                                _fun83925_ip = 104;
                                continue _fun83925
                            }
                        case 101:
                            var6 = var8;
                        case 104:
                            var6 = var7 !== var6;
                            if (var6) {
                                _fun83925_ip = 114;
                                continue _fun83925
                            }
                        case 111:
                            var6 = !var3;
                        case 114:
                            var3 = !var6;
                            if (!var6) {
                                _fun83925_ip = 132;
                                continue _fun83925
                            }
                        case 120:
                            var5 = !var5;
                            if (var5) {
                                _fun83925_ip = 129;
                                continue _fun83925
                            }
                        case 126:
                            var5 = var4;
                        case 129:
                            var3 = !var5;
                        case 132:
                            if (var3) {
                                _fun83925_ip = 161;
                                continue _fun83925
                            }
                        case 135:
                            var4 = !var4;
                            if (!var4) {
                                _fun83925_ip = 158;
                                continue _fun83925
                            }
                        case 141:
                            var6 = _closure1_slot5;
                            var5 = var6.hasFetchedSubscriptions;
                            var5 = var5.bind(var6)();
                            var4 = !var5;
                        case 158:
                            var3 = var4;
                        case 161:
                            if (!var3) {
                                _fun83925_ip = 206;
                                continue _fun83925
                            }
                        case 164:
                            var3 = _closure2_slot2;
                            var2 = true;
                            var3.current = var2;
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 5;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchSubscriptions;
                            var1 = var1.bind(var2)();
                        case 206:
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun83923_ip = 188;
                    continue _fun83923
                }
            case 184:
                var0 = _closure1_slot7;
            case 188:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3076, 5597, 10703, 566, 3402, 2]);