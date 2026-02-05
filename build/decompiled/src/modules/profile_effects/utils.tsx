// modules/profile_effects/utils.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_effects/utils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun56920: for (var _fun56920_ip = 0;;) switch (_fun56920_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                var3 = var4 == var0;
                var1 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun56920_ip = 48;
                    continue _fun56920
                }
            case 16:
                var5 = var0.collectibles;
                var0 = var4 == var5;
                var2 = undefined;
                if (var0) {
                    _fun56920_ip = 48;
                    continue _fun56920
                }
            case 31:
                var3 = var5.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.CollectiblesItemType;
                    var0 = var0.PROFILE_EFFECT;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var5)(var0);
            case 48:
                if (!(var4 == var2)) {
                    _fun56920_ip = 54;
                    continue _fun56920
                }
            case 52:
                return var1;
            case 54:
                var0 = {};
                var3 = var2.sku_id;
                var0.skuId = var3;
                var3 = var2.expires_at;
                var3 = var4 != var3;
                var1 = undefined;
                if (!var3) {
                    _fun56920_ip = 153;
                    continue _fun56920
                }
            case 82:
                var5 = global;
                var4 = var5.Math;
                var3 = var4.floor;
                var6 = var5.Date;
                var7 = var2.expires_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var2 = new var8[var6](var7, var6);
                var5 = var2 instanceof Object ? var2 : var5;
                var2 = var5.getTime;
                var5 = var2.bind(var5)();
                var2 = 1000;
                var2 = var5 / var2;
                var1 = var3.bind(var4)(var2);
            case 153:
                var0.expiresAt = var1;
                return var0;
        }
    };
    var2.parseUserProfileEffect = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun56923: for (var _fun56923_ip = 0;;) switch (_fun56923_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.zIndex;
                    var3 = null;
                    var4 = var3 != var2;
                    var0 = 0;
                    if (!var4) {
                        _fun56923_ip = 23;
                        continue _fun56923
                    }
                case 20:
                    var0 = var2;
                case 23:
                    var2 = arg1;
                    var2 = var2.zIndex;
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun56923_ip = 44;
                        continue _fun56923
                    }
                case 41:
                    var1 = var2;
                case 44:
                    var0 = var0 - var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sortEffectLayers = var3;
    var1 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun56925: for (var _fun56925_ip = 0;;) switch (_fun56925_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun56925_ip = 174;
                        continue _fun56925
                    }
                case 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.cloneDeep;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var5 = var1.effects;
                    var4 = var5.reduce;
                    var3 = function(arg0, arg1) { // Environment: var2
                        _fun56926: for (var _fun56926_ip = 0;;) switch (_fun56926_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = arg1;
                                var2 = var0.randomizedSources;
                                var1 = null;
                                var3 = var1 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun56926_ip = 28;
                                    continue _fun56926
                                }
                            case 23:
                                var0 = var2.length;
                            case 28:
                                var1 = var1 != var0;
                                var2 = 0;
                                var4 = 0;
                                if (!var1) {
                                    _fun56926_ip = 42;
                                    continue _fun56926
                                }
                            case 39:
                                var4 = var0;
                            case 42:
                                var0 = var5;
                                if (!(var4 > var2)) {
                                    _fun56926_ip = 78;
                                    continue _fun56926
                                }
                            case 49:
                                var1 = var4;
                                if (!(var2 !== var5)) {
                                    _fun56926_ip = 75;
                                    continue _fun56926
                                }
                            case 56:
                                var2 = global;
                                var3 = var2.Math;
                                var2 = var3.min;
                                var1 = var2.bind(var3)(var5, var4);
                            case 75:
                                var0 = var1;
                            case 78:
                                return var0;
                        }
                    };
                    var6 = 0;
                    var3 = var4.bind(var5)(var3, var6);
                    var8 = 1;
                    var3 = var3 - var8;
                    var7 = global;
                    var5 = var7.Math;
                    var4 = var5.floor;
                    var9 = var7.Math;
                    var7 = var9.random;
                    var7 = var7.bind(var9)();
                    var3 = var3 - var6;
                    var3 = var3 + var8;
                    var3 = var7 * var3;
                    var3 = var3 + var6;
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot0 = var3;
                    var4 = var1.effects;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun56927: for (var _fun56927_ip = 0;;) switch (_fun56927_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.randomizedSources;
                                var1 = null;
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun56927_ip = 35;
                                    continue _fun56927
                                }
                            case 18:
                                var2 = var0.randomizedSources;
                                var3 = var2.length;
                                var2 = 0;
                                var1 = var3 > var2;
                            case 35:
                                if (!var1) {
                                    _fun56927_ip = 67;
                                    continue _fun56927
                                }
                            case 38:
                                var2 = var0.randomizedSources;
                                var1 = _closure3_slot0;
                                var1 = var2[var1];
                                var1 = var1.src;
                                var0.src = var1;
                            case 67:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1.effects = var2;
                    return var1;
                case 174:
                    var0 = _closure2_slot0;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.usePotentiallyRandomizedConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3493, 22, 2]);