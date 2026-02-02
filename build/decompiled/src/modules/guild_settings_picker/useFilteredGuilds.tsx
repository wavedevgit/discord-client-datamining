// modules/guild_settings_picker/useFilteredGuilds.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings_picker/useFilteredGuilds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96350: for (var _fun96350_ip = 0;;) switch (_fun96350_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.isGuildIncluded;
                var _closure2_slot0 = var8;
                var3 = var0.selectedGuildId;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var2 = var7[var0];
                var1 = undefined;
                var11 = var6.bind(var1)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot5;
                    var0 = var1.getFlattenedGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var10.bind(var11)(var9, var2);
                var _closure2_slot1 = var10;
                var2 = var7[var0];
                var12 = var6.bind(var1)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot4;
                    var0 = var1.getGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var11.bind(var12)(var9, var2);
                var _closure2_slot2 = var2;
                var0 = var7[var0];
                var9 = var6.bind(var1)(var0);
                var7 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var4
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var7.bind(var9)(var6, var0);
                var _closure2_slot3 = var9;
                var0 = {};
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var5 = new Array(4);
                var5[0] = var10;
                var5[1] = var2;
                var5[2] = var9;
                var5[3] = var8;
                var4 = function() { // Environment: var4
                    _fun96354: for (var _fun96354_ip = 0;;) switch (_fun96354_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun96354_ip = 69;
                                continue _fun96354
                            }
                        case 15:
                            var2 = _closure2_slot0;
                            if (!(var3 != var2)) {
                                _fun96354_ip = 46;
                                continue _fun96354
                            }
                        case 23:
                            var4 = _closure2_slot1;
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot2;
                                var1 = arg0;
                                var3 = var2[var1];
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 5;
                                var1 = var2[var1];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var1);
                                var1 = null;
                                var4 = var1 != var3;
                                var1 = 'guild should not be null';
                                var1 = var5.bind(var2)(var4, var1);
                                var1 = _closure2_slot0;
                                var0 = _closure2_slot3;
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            _fun96354_ip = 50;
                            continue _fun96354;
                        case 46:
                            var2 = _closure2_slot1;
                        case 50:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var0 = _closure2_slot2;
                                var1 = var0[var2];
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 5;
                                var0 = var4[var0];
                                var5 = undefined;
                                var4 = var3.bind(var5)(var0);
                                var0 = null;
                                var3 = var0 != var1;
                                var0 = 'guild should not be null';
                                var0 = var4.bind(var5)(var3, var0);
                                var0 = {};
                                var0.id = var2;
                                var2 = var1.name;
                                var0.label = var2;
                                var1 = var1.id;
                                var0.value = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun96354_ip = 73;
                            continue _fun96354;
                        case 69:
                            var0 = new Array(0);
                        case 73:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                var0.options = var4;
                var4 = null;
                var4 = var4 == var3;
                if (var4) {
                    _fun96350_ip = 227;
                    continue _fun96350
                }
            case 223:
                var1 = var2[var3];
            case 227:
                var0.selectedGuild = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 4342, 1613, 566, 44, 2]);