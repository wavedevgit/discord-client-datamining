// modules/activities/useNewestBadgeableVersion.tsx
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
    var6 = var3.useEffect;
    var _closure1_slot2 = var6;
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useNewestBadgeableVersion.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun111614: for (var _fun111614_ip = 0;;) switch (_fun111614_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.surface;
                var _closure2_slot0 = var4;
                var2 = var1.skipFetchingShelf;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun111614_ip = 31;
                    continue _fun111614
                }
            case 29:
                var2 = true;
            case 31:
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 2;
                var5 = var7[var5];
                var8 = var6.bind(var3)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var7.bind(var8)(var6, var5);
                _closure2_slot2 = var5;
                var7 = _closure1_slot2;
                var8 = var5.lastCheckedForBadgeableActivities;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    _fun111616: for (var _fun111616_ip = 0;;) switch (_fun111616_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var6 = var0.lastCheckedForBadgeableActivities;
                            var3 = null;
                            var0 = var3 == var6;
                            if (var0) {
                                _fun111616_ip = 92;
                                continue _fun111616
                            }
                        case 22:
                            var2 = global;
                            var4 = var2.Date;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var5;
                            var7 = var6;
                            var4 = new var8[var4](var7, var6);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var4 = var5.getTime;
                            var4 = var4.bind(var5)();
                            var5 = var2.Date;
                            var2 = var5.now;
                            var5 = var2.bind(var5)();
                            var2 = 43200000;
                            var2 = var5 - var2;
                            var0 = var4 < var2;
                        case 92:
                            if (!var0) {
                                _fun111616_ip = 102;
                                continue _fun111616
                            }
                        case 95:
                            var1 = _closure2_slot1;
                            var0 = !var1;
                        case 102:
                            if (!var0) {
                                _fun111616_ip = 147;
                                continue _fun111616
                            }
                        case 105:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchShelf;
                            var0 = {};
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var3)(var2, var6);
                var2 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getNewestBadgeableVersion;
                    var0 = {};
                    var4 = _closure2_slot2;
                    var0.storeState = var4;
                    var3 = _closure2_slot0;
                    var0.surface = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useNewestBadgeableVersion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 566, 7874, 12562, 2]);