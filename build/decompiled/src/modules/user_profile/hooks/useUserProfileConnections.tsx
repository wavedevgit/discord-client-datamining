// modules/user_profile/hooks/useUserProfileConnections.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = new Array(0);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useUserProfileConnections.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92013: for (var _fun92013_ip = 0;;) switch (_fun92013_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var3 = undefined;
                var7 = var5.bind(var3)(var1);
                var4 = var7.usePlatformAllowed;
                var1 = {};
                var8 = true;
                var1.forUserProfile = var8;
                var4 = var4.bind(var7)(var1);
                var _closure2_slot1 = var4;
                var1 = 3;
                var1 = var6[var1];
                var7 = var5.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getUserProfile;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var1);
                var _closure2_slot2 = var1;
                var2 = _closure1_slot3;
                var5 = null;
                var6 = var5 == var1;
                var5 = undefined;
                if (var6) {
                    _fun92013_ip = 125;
                    continue _fun92013
                }
            case 119:
                var5 = var1.connectedAccounts;
            case 125:
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun92015: for (var _fun92015_ip = 0;;) switch (_fun92015_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun92015_ip = 28;
                                continue _fun92015
                            }
                        case 18:
                            var3 = _closure2_slot2;
                            var1 = var3.connectedAccounts;
                        case 28:
                            if (!(var2 != var1)) {
                                _fun92015_ip = 63;
                                continue _fun92015
                            }
                        case 32:
                            var0 = _closure2_slot2;
                            var2 = var0.connectedAccounts;
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun92016: for (var _fun92016_ip = 0;;) switch (_fun92016_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var5 = var0.type;
                                        var2 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var6 = 4;
                                        var0 = var0[var6];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var0);
                                        var0 = var2.get;
                                        var2 = var0.bind(var2)(var5);
                                        var0 = null;
                                        var0 = var0 != var2;
                                        if (!var0) {
                                            _fun92016_ip = 80;
                                            continue _fun92016
                                        }
                                    case 52:
                                        var4 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var6];
                                        var4 = var4.bind(var3)(var1);
                                        var1 = var4.isSupported;
                                        var0 = var1.bind(var4)(var5);
                                    case 80:
                                        if (!var0) {
                                            _fun92016_ip = 95;
                                            continue _fun92016
                                        }
                                    case 83:
                                        var1 = _closure2_slot1;
                                        var0 = var1.bind(var3)(var2);
                                    case 95:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun92015_ip = 70;
                            continue _fun92015;
                        case 63:
                            var0 = _closure1_slot5;
                        case 70:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4660, 4518, 566, 4395, 2]);