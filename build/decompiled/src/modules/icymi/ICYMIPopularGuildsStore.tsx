// modules/icymi/ICYMIPopularGuildsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun103935: for (var _fun103935_ip = 0;;) switch (_fun103935_ip) {
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
                _fun103935_ip = 76;
                continue _fun103935;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = new Array(0);
    var _closure1_slot8 = var7;
    var7 = new Array(0);
    var _closure1_slot9 = var7;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun103939: for (var _fun103939_ip = 0;;) switch (_fun103939_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun103939_ip = 69;
                        continue _fun103939
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun103939_ip = 105;
                    continue _fun103939;
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
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOnboardingCategoryIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getOnboardingGuilds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCurrentOnboardingGuildOffset';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ICYMIPopularGuildsStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun103944: for (var _fun103944_ip = 0;;) switch (_fun103944_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.categoryIds;
                var7 = var0.guilds;
                var2 = var0.offset;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var6 = 0;
                if (!(var6 === var2)) {
                    _fun103944_ip = 58;
                    continue _fun103944
                }
            case 39:
                _closure1_slot8 = var4;
                var4 = new Array(0);
                _closure1_slot9 = var4;
                _closure1_slot10 = var6;
            case 58:
                var4 = global;
                var9 = var4.Set;
                var10 = _closure1_slot9;
                var8 = var10.map;
                var5 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var13 = var8.bind(var10)(var5);
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var14 = var8;
                var5 = new var14[var9](var13, var12);
                var5 = var5 instanceof Object ? var5 : var8;
                _closure2_slot0 = var5;
                var8 = var4.Set;
                var5 = _closure1_slot7;
                var4 = var5.getGuildIds;
                var13 = var4.bind(var5)();
                var5 = var8.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = var5;
                var4 = new var14[var8](var13, var12);
                var4 = var4 instanceof Object ? var4 : var5;
                _closure2_slot1 = var4;
                var5 = var7.map;
                var4 = function(arg0) { // Environment: var3
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 6;
                    var0 = var5[var0];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var0);
                    var1 = var2.fromClientDiscoverableGuild;
                    var0 = 7;
                    var0 = var5[var0];
                    var4 = var4.bind(var3)(var0);
                    var3 = var4.makeDiscoverableGuild;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var4);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var3
                    _fun103947: for (var _fun103947_ip = 0;;) switch (_fun103947_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = _closure2_slot1;
                            var3 = var4.has;
                            var0 = var1.id;
                            var0 = var3.bind(var4)(var0);
                            var0 = !var0;
                            if (!var0) {
                                _fun103947_ip = 53;
                                continue _fun103947
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var2 = var3.has;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 53:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var12 = _closure1_slot9;
                var3 = new Array(0);
                var13 = var3;
                var11 = 0;
                var11 = arraySpread(var13, var12, var11);
                var13 = var3;
                var12 = var5;
                var4 = arraySpread(var13, var12, var11);
                _closure1_slot9 = var3;
                _closure1_slot10 = var2;
                return var0;
        }
    };
    var1.LOAD_ICYMI_POPULAR_GUILDS = var8;
    var3 = function() {
        var0 = new Array(0);
        _closure1_slot8 = var0;
        var0 = new Array(0);
        _closure1_slot9 = var0;
        var0 = 0;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIPopularGuildsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 1598, 5618, 566, 806, 2]);