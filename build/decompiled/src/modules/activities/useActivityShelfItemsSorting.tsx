// modules/activities/useActivityShelfItemsSorting.tsx
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
    var3 = function(arg0, arg1) { // Original name: applySorting, environment: var1
        var3 = arg1;
        var2 = new Array(0);
        var6 = arg0;
        var1 = 0;
        var7 = var2;
        var5 = 0;
        var4 = arraySpread(var7, var6, var5);
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var1;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun90996: for (var _fun90996_ip = 0;;) switch (_fun90996_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot0;
                    var2 = var3.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.application;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var5 = var2.bind(var3)(var0);
                    var0 = -1;
                    if (!(var0 !== var5)) {
                        _fun90996_ip = 154;
                        continue _fun90996
                    }
                case 44:
                    var0 = _closure2_slot0;
                    var4 = var0[var5];
                    var2 = _closure2_slot0;
                    var0 = var2.splice;
                    var3 = 1;
                    var0 = var0.bind(var2)(var5, var3);
                    var6 = _closure2_slot0;
                    var2 = var6.slice;
                    var0 = _closure2_slot1;
                    var5 = 0;
                    var8 = var2.bind(var6)(var5, var0);
                    var0 = new Array(1);
                    var9 = var0;
                    var7 = 0;
                    var2 = arraySpread(var9, var8, var7);
                    var0[var2] = var4;
                    var7 = var2 + var3;
                    var5 = _closure2_slot0;
                    var4 = var5.slice;
                    var2 = _closure2_slot1;
                    var8 = var4.bind(var5)(var2);
                    var9 = var0;
                    var2 = arraySpread(var9, var8, var7);
                    _closure2_slot0 = var0;
                    var0 = _closure2_slot1;
                    var0 = var0 + 1;
                    _closure2_slot1 = var0;
                case 154:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var3 = _closure2_slot0;
        var2 = var3.map;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = new Array(2);
            var1 = arg0;
            var0[0] = var1;
            var1 = arg1;
            var0[1] = var1;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun90999: for (var _fun90999_ip = 0;;) switch (_fun90999_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0[Symbol.iterator];
                    var0 = var1().next;
                    var3 = var0().value;
                    var0 = var1;
                    var5 = undefined;
                    var2 = var0 === var5;
                    var0 = undefined;
                    if (var2) {
                        _fun90999_ip = 27;
                        continue _fun90999
                    }
                case 24:
                    var0 = var3;
                case 27:
                    if (var2) {
                        _fun90999_ip = 33;
                        continue _fun90999
                    }
                case 30:
                    var1.return();
                case 33:
                    var0 = var0.application;
                    var0 = var0.embeddedActivityConfig;
                    var1 = null;
                    var2 = var1 == var0;
                    var3 = undefined;
                    if (var2) {
                        _fun90999_ip = 134;
                        continue _fun90999
                    }
                case 55:
                    var2 = var0.client_platform_config;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 2;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var6 = _closure1_slot0;
                    var0 = 3;
                    var0 = var7[var0];
                    var6 = var6.bind(var5)(var0);
                    var0 = var6.getOS;
                    var0 = var0.bind(var6)();
                    var0 = var4.bind(var5)(var0);
                    var0 = var2[var0];
                    var1 = var1 == var0;
                    var3 = undefined;
                    if (var1) {
                        _fun90999_ip = 134;
                        continue _fun90999
                    }
                case 128:
                    var3 = var0.label_type;
                case 134:
                    var1 = !var3;
                    var0 = !var1;
                    if (var1) {
                        _fun90999_ip = 221;
                        continue _fun90999
                    }
                case 143:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 4;
                    var1 = var1[var6];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.EmbeddedActivityLabelTypes;
                    var1 = var1.NEW;
                    var1 = var3 === var1;
                    if (var1) {
                        _fun90999_ip = 218;
                        continue _fun90999
                    }
                case 185:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.EmbeddedActivityLabelTypes;
                    var2 = var2.UPDATED;
                    var1 = var3 === var2;
                case 218:
                    var0 = var1;
                case 221:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun91000: for (var _fun91000_ip = 0;;) switch (_fun91000_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var5 = var4().value;
                    var1 = var2;
                    var0 = undefined;
                    var3 = var1 === var0;
                    var1 = undefined;
                    if (var3) {
                        _fun91000_ip = 27;
                        continue _fun91000
                    }
                case 24:
                    var1 = var5;
                case 27:
                    var7 = undefined;
                    if (var3) {
                        _fun91000_ip = 57;
                        continue _fun91000
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var0;
                    var7 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun91000_ip = 57;
                        continue _fun91000
                    }
                case 51:
                    var7 = var5;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun91000_ip = 63;
                        continue _fun91000
                    }
                case 60:
                    var2.return();
                case 63:
                    var2 = var1.application;
                    var2 = var2.embeddedActivityConfig;
                    var3 = null;
                    var6 = var7;
                    if (!(var3 != var2)) {
                        _fun91000_ip = 131;
                        continue _fun91000
                    }
                case 83:
                    var2 = var1.application;
                    var2 = var2.embeddedActivityConfig;
                    var2 = var2.shelf_rank;
                    var6 = var7;
                    if (!(var3 != var2)) {
                        _fun91000_ip = 131;
                        continue _fun91000
                    }
                case 107:
                    var1 = var1.application;
                    var1 = var1.embeddedActivityConfig;
                    var2 = var1.shelf_rank;
                    var1 = 1;
                    var6 = var2 - var1;
                case 131:
                    if (!(var6 < var7)) {
                        _fun91000_ip = 229;
                        continue _fun91000
                    }
                case 135:
                    var1 = _closure2_slot0;
                    var5 = var1[var7];
                    var3 = _closure2_slot0;
                    var1 = var3.splice;
                    var4 = 1;
                    var1 = var1.bind(var3)(var7, var4);
                    var3 = _closure2_slot0;
                    var1 = var3.slice;
                    var7 = 0;
                    var9 = var1.bind(var3)(var7, var6);
                    var1 = new Array(1);
                    var10 = var1;
                    var8 = 0;
                    var3 = arraySpread(var10, var9, var8);
                    var1[var3] = var5;
                    var8 = var3 + var4;
                    var5 = _closure2_slot0;
                    var3 = var5.slice;
                    var9 = var3.bind(var5)(var6);
                    var10 = var1;
                    var3 = arraySpread(var10, var9, var8);
                    _closure2_slot0 = var1;
                case 229:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useActivityShelfItemsSorting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useActivityShelfItemsSorting, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var5.bind(var2)(var3);
        var3 = var2.FrecencyUserSettingsActionCreators;
        var2 = var3.loadIfNecessary;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = new Array(0);
            var _closure3_slot0 = var4;
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = arg0;
                var0 = var0.application;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var2 = new Array(0);
            var5 = 0;
            var7 = var2;
            var6 = var4;
            var1 = arraySpread(var7, var6, var5);
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun91004: for (var _fun91004_ip = 0;;) switch (_fun91004_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var3 = _closure3_slot0;
                        var2 = var3.findIndex;
                        var1 = function(arg0) { // Environment: var0
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.findIndex;
                        var0 = function(arg0) { // Environment: var0
                            var1 = _closure4_slot1;
                            var0 = arg0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        var1 = var1 < var0;
                        var0 = 1;
                        if (!var1) {
                            _fun91004_ip = 75;
                            continue _fun91004
                        }
                    case 69:
                        var0 = -1;
                    case 75:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var1 = _closure1_slot4;
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1355, 7913, 478, 1636, 2]);