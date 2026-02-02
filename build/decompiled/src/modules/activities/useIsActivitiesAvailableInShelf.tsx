// modules/activities/useIsActivitiesAvailableInShelf.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useIsActivitiesAvailableInShelf.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun62881: for (var _fun62881_ip = 0;;) switch (_fun62881_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 1;
                var0 = var7[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.useIsActivitiesEnabledForCurrentPlatform;
                var1 = var0.bind(var1)();
                var _closure2_slot1 = var1;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var7[var0];
                var4 = var4.bind(var5)(var0);
                var0 = arg1;
                var4 = var4.bind(var5)(var0);
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun62881_ip = 89;
                    continue _fun62881
                }
            case 81:
                var5 = '';
                var0 = var5 !== var6;
            case 89:
                if (var0) {
                    _fun62881_ip = 95;
                    continue _fun62881
                }
            case 92:
                var0 = var4;
            case 95:
                var _closure2_slot2 = var0;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var6;
                var3[1] = var1;
                var3[2] = var0;
                var2 = function() { // Environment: var2
                    _fun62882: for (var _fun62882_ip = 0;;) switch (_fun62882_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun62882_ip = 14;
                                continue _fun62882
                            }
                        case 10:
                            var0 = _closure2_slot1;
                        case 14:
                            if (!var0) {
                                _fun62882_ip = 63;
                                continue _fun62882
                            }
                        case 17:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchShelf;
                            var0 = {};
                            var3 = _closure2_slot0;
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                if (!var0) {
                    _fun62881_ip = 141;
                    continue _fun62881
                }
            case 138:
                var0 = var1;
            case 141:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7874, 7875, 7876, 2]);