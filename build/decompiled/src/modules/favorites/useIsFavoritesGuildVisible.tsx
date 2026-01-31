// modules/favorites/useIsFavoritesGuildVisible.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0, arg1, arg2() {
        _fun94387: for (var _fun94387_ip = 0;;) switch (_fun94387_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var4 = undefined;
                var8 = var2.bind(var4)(var0);
                var7 = var8.getCurrentConfig;
                var6 = {};
                var0 = 'isFavoritesGuildVisible';
                var6.location = var0;
                var2 = {};
                var0 = false;
                var2.autoTrackExposure = var0;
                var6 = var7.bind(var8)(var6, var2);
                var2 = var6.canShow;
                var6 = var6.isFavoritesPerk;
                if (var6) {
                    _fun94387_ip = 216;
                    continue _fun94387
                }
            case 93:
                if (var2) {
                    _fun94387_ip = 98;
                    continue _fun94387
                }
            case 96:
                return var0;
            case 98:
                var2 = var5.getFavoriteChannels;
                var8 = var2.bind(var5)();
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 5;
                var2 = var2[var5];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isEmpty;
                var2 = var2.bind(var6)(var8);
                if (var2) {
                    _fun94387_ip = 214;
                    continue _fun94387
                }
            case 142:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 6;
                var6 = var1[var6];
                var7 = var2.bind(var4)(var6);
                var6 = var7.keys;
                var7 = var6.bind(var7)(var8);
                var6 = var7.filter;
                var3 = function(arg0) { // Environment: var3
                    _fun94388: for (var _fun94388_ip = 0;;) switch (_fun94388_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var1 = var3.getChannel;
                            var0 = arg0;
                            var5 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var5;
                            if (!var0) {
                                _fun94388_ip = 80;
                                continue _fun94388
                            }
                        case 29:
                            var1 = var5.isPrivate;
                            var1 = var1.bind(var5)();
                            var3 = !var1;
                            var1 = !var3;
                            if (!var3) {
                                _fun94388_ip = 77;
                                continue _fun94388
                            }
                        case 48:
                            var4 = _closure2_slot1;
                            var3 = var4.can;
                            var2 = _closure1_slot6;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = var3.bind(var4)(var2, var5);
                        case 77:
                            var0 = var1;
                        case 80:
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var3);
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isEmpty;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                return var1;
            case 214:
                return var0;
            case 216:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun94389: for (var _fun94389_ip = 0;;) switch (_fun94389_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var3 = undefined;
                var7 = var4.bind(var3)(var0);
                var2 = var7.useFavoritesServerExperiment;
                var0 = 'useIsFavoritesGuildVisible';
                var0 = var2.bind(var7)(var0);
                var2 = var0.canShow;
                var _closure2_slot0 = var2;
                var0 = var0.isFavoritesPerk;
                var2 = 7;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.useStateFromStores;
                var6 = _closure1_slot5;
                var2 = new Array(3);
                var2[0] = var6;
                var6 = _closure1_slot3;
                var2[1] = var6;
                var5 = _closure1_slot4;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun94390: for (var _fun94390_ip = 0;;) switch (_fun94390_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun94390_ip = 38;
                                continue _fun94390
                            }
                        case 10:
                            var5 = _closure1_slot7;
                            var4 = _closure1_slot5;
                            var3 = _closure1_slot3;
                            var2 = _closure1_slot4;
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 38:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var2 = !var0;
                var0 = !var2;
                if (!var2) {
                    _fun94389_ip = 130;
                    continue _fun94389
                }
            case 127:
                var0 = var1;
            case 130:
                return var0;
        }
    };
    var2.default = var3;
    var2.isFavoritesGuildVisible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 1375, 483, 12339, 22, 21, 566, 2]);