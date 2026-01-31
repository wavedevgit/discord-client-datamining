// modules/app_launcher/hooks/useSortedSectionCommands.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CommandListSortOrder;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useSortedSectionCommands.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107918: for (var _fun107918_ip = 0;;) switch (_fun107918_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.sectionId;
                var _closure2_slot0 = var8;
                var0 = var0.commandsByActiveSection;
                var _closure2_slot1 = var0;
                var10 = _closure1_slot4;
                var2 = var10.useState;
                var6 = _closure1_slot5;
                var1 = var6.ALPHABETICAL;
                var3 = var2.bind(var10)(var1);
                var2 = _closure1_slot3;
                var9 = undefined;
                var1 = 2;
                var2 = var2.bind(var9)(var3, var1);
                var1 = 0;
                var4 = var2[var1];
                var1 = 1;
                var3 = var2[var1];
                var _closure2_slot2 = var3;
                var2 = var10.useMemo;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var8;
                var0 = function() { // Environment: var7
                    _fun107919: for (var _fun107919_ip = 0;;) switch (_fun107919_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.section;
                                var1 = var0.id;
                                var0 = _closure2_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun107919_ip = 42;
                                continue _fun107919
                            }
                        case 37:
                            var0 = var2.data;
                        case 42:
                            if (!(var1 == var0)) {
                                _fun107919_ip = 50;
                                continue _fun107919
                            }
                        case 46:
                            var0 = new Array(0);
                        case 50:
                            return var0;
                    }
                };
                var0 = var2.bind(var10)(var0, var1);
                var2 = {};
                var2.alphabeticalSortedCommands = var0;
                var1 = function arg0() {
                    var1 = arg0;
                    var4 = var1.alphabeticalSortedCommands;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun107922: for (var _fun107922_ip = 0;;) switch (_fun107922_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.length;
                                var0 = 1;
                                if (!(!(var2 <= var0))) {
                                    _fun107922_ip = 128;
                                    continue _fun107922
                                }
                            case 21:
                                var0 = false;
                                var _closure4_slot0 = var0;
                                var5 = _closure3_slot0;
                                var4 = var5.map;
                                var2 = function(arg0, arg1) { // Environment: var3
                                    _fun107923: for (var _fun107923_ip = 0;;) switch (_fun107923_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var0 = _closure4_slot0;
                                            if (var0) {
                                                _fun107923_ip = 25;
                                                continue _fun107923
                                            }
                                        case 13:
                                            var4 = var1.global_popularity_rank;
                                            var3 = null;
                                            var0 = var3 != var4;
                                        case 25:
                                            _closure4_slot0 = var0;
                                            var0 = {};
                                            var0.command = var1;
                                            var1 = arg1;
                                            var0.alphabeticalSortIndex = var1;
                                            return var0;
                                    }
                                };
                                var5 = var4.bind(var5)(var2);
                                var4 = _closure4_slot0;
                                var2 = {};
                                if (var4) {
                                    _fun107922_ip = 76;
                                    continue _fun107922
                                }
                            case 57:
                                var4 = _closure3_slot0;
                                var2.popularSortedCommands = var4;
                                var2.canSort = var0;
                                var0 = var2;
                                _fun107922_ip = 126;
                                continue _fun107922;
                            case 76:
                                var6 = var5.sort;
                                var4 = function(arg0, arg1) { // Environment: var3
                                    _fun107924: for (var _fun107924_ip = 0;;) switch (_fun107924_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = arg1;
                                            var0 = var3.command;
                                            var1 = var0.global_popularity_rank;
                                            var0 = var2.command;
                                            var0 = var0.global_popularity_rank;
                                            var4 = null;
                                            if (!(var4 != var1)) {
                                                _fun107924_ip = 40;
                                                continue _fun107924
                                            }
                                        case 36:
                                            if (!(var4 == var0)) {
                                                _fun107924_ip = 61;
                                                continue _fun107924
                                            }
                                        case 40:
                                            if (!(var4 == var1)) {
                                                _fun107924_ip = 53;
                                                continue _fun107924
                                            }
                                        case 44:
                                            if (!(var4 != var0)) {
                                                _fun107924_ip = 65;
                                                continue _fun107924
                                            }
                                        case 48:
                                            var4 = 1;
                                            return var4;
                                        case 53:
                                            var4 = -1;
                                            return var4;
                                        case 61:
                                            if (!(var1 === var0)) {
                                                _fun107924_ip = 83;
                                                continue _fun107924
                                            }
                                        case 65:
                                            var3 = var3.alphabeticalSortIndex;
                                            var2 = var2.alphabeticalSortIndex;
                                            var2 = var3 - var2;
                                            return var2;
                                        case 83:
                                            var0 = var1 - var0;
                                            return var0;
                                    }
                                };
                                var4 = var6.bind(var5)(var4);
                                var4 = var5.map;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var0 = var0.command;
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var3);
                                var2.popularSortedCommands = var3;
                                var3 = true;
                                var2.canSort = var3;
                                var0 = var2;
                            case 126:
                                return var0;
                            case 128:
                                var0 = {};
                                var1 = _closure3_slot0;
                                var0.popularSortedCommands = var1;
                                var1 = false;
                                var0.canSort = var1;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = var1.bind(var9)(var2);
                var2 = var1.popularSortedCommands;
                var1 = var1.canSort;
                var _closure2_slot3 = var1;
                var11 = var10.useEffect;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var7
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 3;
                    var1 = var7[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getApplication;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 4;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.Millis;
                    var5 = var5.DAY;
                    var1.dontRefetchMs = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var8 = var11.bind(var10)(var8, var9);
                var9 = var10.useLayoutEffect;
                var8 = new Array(1);
                var8[0] = var1;
                var7 = function() { // Environment: var7
                    _fun107927: for (var _fun107927_ip = 0;;) switch (_fun107927_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun107927_ip = 34;
                                continue _fun107927
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var0 = _closure1_slot5;
                            var1 = var0.POPULAR;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var7, var8);
                var6 = var6.POPULAR;
                if (!(var6 !== var4)) {
                    _fun107918_ip = 225;
                    continue _fun107918
                }
            case 212:
                var5 = _closure1_slot5;
                var5 = var5.ALPHABETICAL;
                var2 = var0;
            case 225:
                var0 = {};
                var0.sortOrder = var4;
                var0.setSortOrder = var3;
                var0.commands = var2;
                var0.canSort = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 13895, 13834, 667, 2]);