// stores/RegionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun108865: for (var _fun108865_ip = 0;;) switch (_fun108865_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun108865_ip = 76;
                continue _fun108865;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = null;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun108869: for (var _fun108869_ip = 0;;) switch (_fun108869_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun108869_ip = 69;
                        continue _fun108869
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun108869_ip = 105;
                    continue _fun108869;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOptimalRegion';
        var4.key = var6;
        var6 = function() {
            _fun108871: for (var _fun108871_ip = 0;;) switch (_fun108871_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var5 = undefined;
                    if (!(var2 === var5)) {
                        _fun108871_ip = 14;
                        continue _fun108871
                    }
                case 12:
                    var2 = null;
                case 14:
                    var0 = var1.getRegions;
                    var4 = var0.bind(var1)(var2);
                    var2 = null;
                    var1 = var2 != var4;
                    var0 = null;
                    if (!var1) {
                        _fun108871_ip = 96;
                        continue _fun108871
                    }
                case 36:
                    var3 = var4.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.optimal;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    if (!(var2 == var1)) {
                        _fun108871_ip = 93;
                        continue _fun108871
                    }
                case 59:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.sample;
                    var1 = var2.bind(var3)(var4);
                case 93:
                    var0 = var1;
                case 96:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getOptimalRegionId';
        var4.key = var6;
        var6 = function() {
            _fun108873: for (var _fun108873_ip = 0;;) switch (_fun108873_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun108873_ip = 14;
                        continue _fun108873
                    }
                case 12:
                    var2 = null;
                case 14:
                    var0 = var1.getOptimalRegion;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun108873_ip = 41;
                        continue _fun108873
                    }
                case 36:
                    var0 = var1.id;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getRandomRegion';
        var4.key = var6;
        var6 = function() {
            _fun108874: for (var _fun108874_ip = 0;;) switch (_fun108874_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var4 = undefined;
                    if (!(var2 === var4)) {
                        _fun108874_ip = 14;
                        continue _fun108874
                    }
                case 12:
                    var2 = null;
                case 14:
                    var0 = var1.getRegions;
                    var3 = var0.bind(var1)(var2);
                    var0 = null;
                    var1 = var0 != var3;
                    if (!var1) {
                        _fun108874_ip = 68;
                        continue _fun108874
                    }
                case 34:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 6;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.sample;
                    var0 = var1.bind(var2)(var3);
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getRandomRegionId';
        var4.key = var6;
        var6 = function() {
            _fun108875: for (var _fun108875_ip = 0;;) switch (_fun108875_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun108875_ip = 14;
                        continue _fun108875
                    }
                case 12:
                    var2 = null;
                case 14:
                    var0 = var1.getRandomRegion;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun108875_ip = 41;
                        continue _fun108875
                    }
                case 36:
                    var0 = var1.id;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRegions';
        var4.key = var6;
        var5 = function arg0() {
            _fun108876: for (var _fun108876_ip = 0;;) switch (_fun108876_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun108876_ip = 18;
                        continue _fun108876
                    }
                case 9:
                    var0 = _closure1_slot8;
                    _fun108876_ip = 29;
                    continue _fun108876;
                case 18:
                    var1 = _closure1_slot9;
                    var0 = var1[var2];
                case 29:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'RegionStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun108877: for (var _fun108877_ip = 0;;) switch (_fun108877_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.sortBy;
                var4 = var1.regions;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var3 = var5.bind(var6)(var4, var3);
                var5 = var1.guildId;
                var4 = null;
                if (!(var4 == var5)) {
                    _fun108877_ip = 72;
                    continue _fun108877
                }
            case 66:
                _closure1_slot8 = var3;
                _fun108877_ip = 85;
                continue _fun108877;
            case 72:
                var2 = _closure1_slot9;
                var1 = var1.guildId;
                var2[var1] = var3;
            case 85:
                return var0;
        }
    };
    var1.LOAD_REGIONS = var7;
    var3 = function arg0() {
        var1 = _closure1_slot9;
        var0 = arg0;
        var0 = var0.guild;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/RegionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 22, 566, 806, 2]);