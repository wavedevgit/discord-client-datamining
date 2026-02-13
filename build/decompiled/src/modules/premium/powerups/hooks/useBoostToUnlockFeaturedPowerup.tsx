// modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun102869: for (var _fun102869_ip = 0;;) switch (_fun102869_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun102869_ip = 46;
                    continue _fun102869
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun102869_ip = 55;
                    continue _fun102869
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun102869_ip = 345;
                    continue _fun102869
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun102869_ip = 323;
                    continue _fun102869
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun102869_ip = 283;
                    continue _fun102869
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun102869_ip = 270;
                    continue _fun102869
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun102869_ip = 163;
                    continue _fun102869
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun102869_ip = 179;
                    continue _fun102869
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun102869_ip = 249;
                    continue _fun102869
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun102869_ip = 249;
                    continue _fun102869
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun102869_ip = 234;
                    continue _fun102869
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun102869_ip = 247;
                    continue _fun102869
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun102869_ip = 265;
                continue _fun102869;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun102869_ip = 283;
                continue _fun102869;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun102869_ip = 323;
                    continue _fun102869
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun102869_ip = 330;
                    continue _fun102869
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun102870: for (var _fun102870_ip = 0;;) switch (_fun102870_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun102870_ip = 56;
                                continue _fun102870
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun102870_ip = 67;
                            continue _fun102870;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun102871: for (var _fun102871_ip = 0;;) switch (_fun102871_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun102871_ip = 23;
                    continue _fun102871
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun102871_ip = 33;
                    continue _fun102871
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun102871_ip = 70;
                    continue _fun102871
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun102871_ip = 55;
                    continue _fun102871
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var7 = 1;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot7 = var3;
    var6 = {};
    var8 = 5;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_POWERUP_LEVEL_1_SKU_ID;
    var6.skuId = var3;
    var6.threshold = var7;
    var3 = new Array(7);
    var3[0] = var6;
    var6 = {};
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GUILD_POWERUP_LEVEL_2_SKU_ID;
    var6.skuId = var10;
    var6.threshold = var9;
    var3[1] = var6;
    var6 = {};
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GUILD_POWERUP_LEVEL_3_SKU_ID;
    var6.skuId = var10;
    var6.threshold = var9;
    var3[2] = var6;
    var6 = {};
    var9 = var5[var8];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUILD_POWERUP_TAG_SKU_ID;
    var6.skuId = var9;
    var6.threshold = var7;
    var3[3] = var6;
    var6 = {};
    var9 = var5[var8];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUILD_POWERUP_ROLE_COLOR_SKU_ID;
    var6.skuId = var9;
    var6.threshold = var7;
    var3[4] = var6;
    var6 = {};
    var9 = var5[var8];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID;
    var6.skuId = var9;
    var6.threshold = var7;
    var3[5] = var6;
    var6 = {};
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID;
    var6.skuId = var8;
    var6.threshold = var7;
    var3[6] = var6;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 6;
        var5 = var8[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getStateForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var9.bind(var10)(var7, var5);
        var _closure2_slot1 = var7;
        var9 = _closure1_slot1;
        var5 = 7;
        var5 = var8[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.bind(var3)(var6);
        var6 = var5.available;
        var _closure2_slot2 = var6;
        var2 = var8[var2];
        var10 = var4.bind(var3)(var2);
        var9 = var10.useStateFromStores;
        var2 = _closure1_slot4;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun102874: for (var _fun102874_ip = 0;;) switch (_fun102874_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun102874_ip = 61;
                        continue _fun102874
                    }
                case 35:
                    var3 = var2.features;
                    var2 = var3.has;
                    var0 = _closure1_slot7;
                    var0 = var0.PREMIUM_TIER_3_OVERRIDE;
                    var1 = var2.bind(var3)(var0);
                case 61:
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
            }
        };
        var5 = var9.bind(var10)(var5, var2);
        var _closure2_slot3 = var5;
        var2 = 8;
        var2 = var8[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useBoostToUnlockCoachmarkEnabled;
        var2 = 'useBoostToUnlockFeaturedPowerup';
        var4 = var3.bind(var4)(var2);
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun102875: for (var _fun102875_ip = 0;;) switch (_fun102875_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var9 = null;
                    if (!(var9 != var0)) {
                        _fun102875_ip = 235;
                        continue _fun102875
                    }
                case 18:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun102875_ip = 235;
                        continue _fun102875
                    }
                case 28:
                    var0 = _closure2_slot1;
                    var8 = var0.allPowerups;
                    var7 = var0.unlockedPowerups;
                    var _closure3_slot0 = var7;
                    var1 = _closure1_slot9;
                    var0 = _closure1_slot8;
                    var5 = undefined;
                    var4 = var1.bind(var5)(var0);
                    var1 = var4.bind(var5)();
                    var0 = var1.done;
                    var3 = 0;
                    var2 = var1;
                    var1 = undefined;
                    if (var0) {
                        _fun102875_ip = 235;
                        continue _fun102875
                    }
                case 88:
                    var0 = var2.value;
                    var14 = var0.skuId;
                    var13 = var0.threshold;
                    var0 = var8[var14];
                    var12 = var1;
                    if (!(var9 != var0)) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 116:
                    var15 = _closure2_slot3;
                    if (!var15) {
                        _fun102875_ip = 143;
                        continue _fun102875
                    }
                case 123:
                    var16 = _closure1_slot6;
                    var15 = var16.has;
                    var15 = var15.bind(var16)(var14);
                    var12 = var1;
                    if (var15) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 143:
                    var14 = var7[var14];
                    var12 = var1;
                    if (!(var9 == var14)) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 154:
                    var16 = var0.dependencies;
                    var15 = var16.every;
                    var14 = function(arg0) { // Environment: var11
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var14 = var15.bind(var16)(var14);
                    var12 = var1;
                    if (!var14) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 184:
                    var15 = var0.cost;
                    var14 = _closure2_slot2;
                    var14 = var15 - var14;
                    var12 = var14;
                    if (!(var14 > var3)) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 205:
                    var12 = var14;
                    if (!(var12 <= var13)) {
                        _fun102875_ip = 214;
                        continue _fun102875
                    }
                case 212:
                    return var0;
                case 214:
                    var13 = var4.bind(var5)();
                    var0 = var13.done;
                    var1 = var12;
                    var2 = var13;
                    if (!var0) {
                        _fun102875_ip = 88;
                        continue _fun102875
                    }
                case 235:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 6793, 6794, 660, 6716, 566, 6790, 13390, 2]);