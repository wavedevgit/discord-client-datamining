// modules/premium/powerups/utils/powerupListing.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function arg0, arg1() {
        _fun102880: for (var _fun102880_ip = 0;;) switch (_fun102880_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun102880_ip = 46;
                    continue _fun102880
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun102880_ip = 55;
                    continue _fun102880
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun102880_ip = 345;
                    continue _fun102880
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun102880_ip = 323;
                    continue _fun102880
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun102880_ip = 283;
                    continue _fun102880
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun102880_ip = 270;
                    continue _fun102880
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
                    _fun102880_ip = 163;
                    continue _fun102880
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun102880_ip = 179;
                    continue _fun102880
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun102880_ip = 249;
                    continue _fun102880
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun102880_ip = 249;
                    continue _fun102880
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun102880_ip = 234;
                    continue _fun102880
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun102880_ip = 247;
                    continue _fun102880
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun102880_ip = 265;
                continue _fun102880;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun102880_ip = 283;
                continue _fun102880;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun102880_ip = 323;
                    continue _fun102880
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
                    _fun102880_ip = 330;
                    continue _fun102880
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun102881: for (var _fun102881_ip = 0;;) switch (_fun102881_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun102881_ip = 56;
                                continue _fun102881
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
                            _fun102881_ip = 67;
                            continue _fun102881;
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
        _fun102882: for (var _fun102882_ip = 0;;) switch (_fun102882_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun102882_ip = 23;
                    continue _fun102882
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun102882_ip = 33;
                    continue _fun102882
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
                    _fun102882_ip = 70;
                    continue _fun102882
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun102882_ip = 55;
                    continue _fun102882
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var3 = function arg0, arg1, arg2() {
        _fun102883: for (var _fun102883_ip = 0;;) switch (_fun102883_ip) {
            case 0:
                var6 = arg1;
                var3 = arg2;
                var2 = new Array(0);
                var _closure2_slot0 = var2;
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var0
                    _fun102884: for (var _fun102884_ip = 0;;) switch (_fun102884_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var4 = var3.type;
                            var2 = _closure1_slot5;
                            var2 = var2.PERK;
                            if (!(var4 === var2)) {
                                _fun102884_ip = 80;
                                continue _fun102884
                            }
                        case 28:
                            var2 = _closure1_slot7;
                            var1 = var3.skuId;
                            var1 = var2[var1];
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun102884_ip = 78;
                                continue _fun102884
                            }
                        case 48:
                            var2 = var0[var1];
                            if (!(var2 == var4)) {
                                _fun102884_ip = 64;
                                continue _fun102884
                            }
                        case 56:
                            var2 = new Array(0);
                            var0[var1] = var2;
                        case 64:
                            var2 = var0[var1];
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 78:
                            return var0;
                        case 80:
                            return var0;
                    }
                };
                var1 = {};
                var1 = var5.bind(var6)(var4, var1);
                var _closure2_slot1 = var1;
                var8 = function() {
                    _fun102885: for (var _fun102885_ip = 0;;) switch (_fun102885_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = var1.type;
                            var1 = _closure1_slot5;
                            var1 = var1.LEVEL;
                            if (!(var2 !== var1)) {
                                _fun102885_ip = 189;
                                continue _fun102885
                            }
                        case 34:
                            var2 = _closure1_slot7;
                            var1 = _closure2_slot2;
                            var1 = var1.skuId;
                            var2 = var2[var1];
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun102885_ip = 97;
                                continue _fun102885
                            }
                        case 58:
                            var6 = _closure2_slot0;
                            var5 = var6.push;
                            var1 = {};
                            var7 = 'singlePerk';
                            var1.type = var7;
                            var7 = _closure2_slot2;
                            var1.powerup = var7;
                            var1 = var5.bind(var6)(var1);
                            var1 = undefined;
                            return var1;
                        case 97:
                            var1 = _closure2_slot1;
                            var6 = var1[var2];
                            var1 = undefined;
                            if (!(var1 !== var6)) {
                                _fun102885_ip = 185;
                                continue _fun102885
                            }
                        case 111:
                            var4 = _closure1_slot6;
                            var4 = var4[var2];
                            var _closure3_slot0 = var4;
                            var4 = var6.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var3 = _closure3_slot0;
                                var2 = var3.indexOf;
                                var1 = arg0;
                                var1 = var1.skuId;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.indexOf;
                                var0 = arg1;
                                var0 = var0.skuId;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1 - var0;
                                return var0;
                            };
                            var0 = var4.bind(var6)(var0);
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var0 = {};
                            var7 = 'multiPerk';
                            var0.type = var7;
                            var0.group = var2;
                            var0.powerups = var6;
                            var0 = var4.bind(var5)(var0);
                            var0 = _closure2_slot1;
                            var0[var2] = var1;
                        case 185:
                            var0 = 0;
                            return var0;
                        case 189:
                            var2 = _closure2_slot0;
                            var1 = var2.push;
                            var0 = {};
                            var4 = 'singleLevel';
                            var0.type = var4;
                            var3 = _closure2_slot2;
                            var0.powerup = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = 0;
                            return var0;
                    }
                };
                var5 = _closure1_slot9;
                var1 = undefined;
                var7 = var5.bind(var1)(var6);
                var6 = var7.bind(var1)();
                var5 = var6.done;
                if (var5) {
                    _fun102883_ip = 102;
                    continue _fun102883
                }
            case 74:
                var5 = var6.value;
                var _closure2_slot2 = var5;
                var5 = var8.bind(var1)();
                var9 = var7.bind(var1)();
                var5 = var9.done;
                var6 = var9;
                if (!var5) {
                    _fun102883_ip = 74;
                    continue _fun102883
                }
            case 102:
                if (!var3) {
                    _fun102883_ip = 122;
                    continue _fun102883
                }
            case 105:
                var4 = _closure1_slot5;
                var5 = var4.PERK;
                var4 = arg0;
                var3 = var4 === var5;
            case 122:
                if (!var3) {
                    _fun102883_ip = 145;
                    continue _fun102883
                }
            case 125:
                var4 = var2.push;
                var3 = {};
                var5 = 'gameServer';
                var3.type = var5;
                var3 = var4.bind(var2)(var3);
            case 145:
                var0 = function arg0() {
                    _fun102887: for (var _fun102887_ip = 0;;) switch (_fun102887_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var1
                                _fun102888: for (var _fun102888_ip = 0;;) switch (_fun102888_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.type;
                                        var0 = 'singlePerk';
                                        var0 = var0 === var2;
                                        if (!var0) {
                                            _fun102888_ip = 68;
                                            continue _fun102888
                                        }
                                    case 21:
                                        var1 = var1.powerup;
                                        var2 = var1.skuId;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 4;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.GUILD_POWERUP_TAG_SKU_ID;
                                        var0 = var2 === var1;
                                    case 68:
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var2)(var0);
                            var4 = var2.findIndex;
                            var3 = function(arg0) { // Environment: var1
                                _fun102889: for (var _fun102889_ip = 0;;) switch (_fun102889_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.type;
                                        var0 = 'multiPerk';
                                        var0 = var0 === var2;
                                        if (!var0) {
                                            _fun102889_ip = 37;
                                            continue _fun102889
                                        }
                                    case 21:
                                        var2 = var1.group;
                                        var1 = 'guildTagsBadgePacks';
                                        var0 = var1 === var2;
                                    case 37:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var2)(var3);
                            var4 = -1;
                            if (!(var4 !== var0)) {
                                _fun102887_ip = 66;
                                continue _fun102887
                            }
                        case 51:
                            if (!(var4 !== var3)) {
                                _fun102887_ip = 66;
                                continue _fun102887
                            }
                        case 55:
                            var5 = 1;
                            var0 = var0 + var5;
                            if (!(var3 === var0)) {
                                _fun102887_ip = 68;
                                continue _fun102887
                            }
                        case 66:
                            return var2;
                        case 68:
                            var0 = new Array(0);
                            var4 = 0;
                            var9 = var0;
                            var8 = var2;
                            var7 = 0;
                            var2 = arraySpread(var9, var8, var7);
                            var2 = var0.splice;
                            var6 = var2.bind(var0)(var3, var5);
                            var3 = _closure1_slot2;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var6, var5);
                            var3 = var2[var4];
                            var2 = var0.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                _fun102890: for (var _fun102890_ip = 0;;) switch (_fun102890_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.type;
                                        var0 = 'singlePerk';
                                        var0 = var0 === var2;
                                        if (!var0) {
                                            _fun102890_ip = 68;
                                            continue _fun102890
                                        }
                                    case 21:
                                        var1 = var1.powerup;
                                        var2 = var1.skuId;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 4;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.GUILD_POWERUP_TAG_SKU_ID;
                                        var0 = var2 === var1;
                                    case 68:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            var2 = var0.splice;
                            var1 = var1 + var5;
                            var1 = var2.bind(var0)(var1, var4, var3);
                            return var0;
                    }
                };
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var9 = var7[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var9);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var8 = var4.GuildPowerupType;
    var _closure1_slot5 = var8;
    var4 = {};
    var10 = 4;
    var9 = var7[var10];
    var9 = var6.bind(var0)(var9);
    var11 = var9.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID;
    var9 = new Array(4);
    var9[0] = var11;
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID;
    var9[1] = var11;
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID;
    var9[2] = var11;
    var10 = var7[var10];
    var10 = var6.bind(var0)(var10);
    var10 = var10.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID;
    var9[3] = var10;
    var4.guildTagsBadgePacks = var9;
    var _closure1_slot6 = var4;
    var9 = var5.Object;
    var5 = var9.entries;
    var11 = var5.bind(var9)(var4);
    var10 = var11.reduce;
    var9 = function(arg0, arg1) { // Environment: var1
        _fun102891: for (var _fun102891_ip = 0;;) switch (_fun102891_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var2 = var6().value;
                var3 = var1;
                var5 = undefined;
                var3 = var3 === var5;
                var4 = undefined;
                if (var3) {
                    _fun102891_ip = 30;
                    continue _fun102891
                }
            case 27:
                var4 = var2;
            case 30:
                var2 = undefined;
                if (var3) {
                    _fun102891_ip = 60;
                    continue _fun102891
                }
            case 35:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var5;
                var2 = undefined;
                var3 = var6;
                if (var6) {
                    _fun102891_ip = 60;
                    continue _fun102891
                }
            case 54:
                var2 = var7;
                var3 = var6;
            case 60:
                if (var3) {
                    _fun102891_ip = 66;
                    continue _fun102891
                }
            case 63:
                var1.return();
            case 66:
                var1 = _closure1_slot9;
                var3 = var1.bind(var5)(var2);
                var2 = var3.bind(var5)();
                var1 = var2.done;
                if (var1) {
                    _fun102891_ip = 114;
                    continue _fun102891
                }
            case 90:
                var1 = var2.value;
                var0[var1] = var4;
                var6 = var3.bind(var5)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun102891_ip = 90;
                    continue _fun102891
                }
            case 114:
                return var0;
        }
    };
    var5 = {};
    var5 = var10.bind(var11)(var9, var5);
    var _closure1_slot7 = var5;
    var9 = var8.LEVEL;
    var5 = new Array(2);
    var5[0] = var9;
    var8 = var8.PERK;
    var5[1] = var8;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/utils/powerupListing.tsx';
    var5 = var6.bind(var7)(var5);
    var2.POWERUP_GROUP_TO_SKU_IDS = var4;
    var2.buildPowerupListings = var3;
    var1 = function arg0, arg1() {
        _fun102892: for (var _fun102892_ip = 0;;) switch (_fun102892_ip) {
            case 0:
                var4 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var4;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var5 = undefined;
                var7 = var3.bind(var5)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var3, var1);
                var _closure2_slot2 = var1;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var6 = null;
                var6 = var6 == var1;
                if (var6) {
                    _fun102892_ip = 99;
                    continue _fun102892
                }
            case 93:
                var5 = var1.powerupCatalog;
            case 99:
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot8;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun102895: for (var _fun102895_ip = 0;;) switch (_fun102895_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = arg1;
                                var3 = _closure2_slot2;
                                var2 = null;
                                var6 = var2 == var3;
                                var5 = undefined;
                                var3 = undefined;
                                if (var6) {
                                    _fun102895_ip = 40;
                                    continue _fun102895
                                }
                            case 26:
                                var6 = _closure2_slot2;
                                var6 = var6.powerupCatalog;
                                var3 = var6[var4];
                            case 40:
                                if (!(var2 != var3)) {
                                    _fun102895_ip = 85;
                                    continue _fun102895
                                }
                            case 44:
                                var2 = _closure1_slot11;
                                var1 = _closure2_slot1;
                                var3 = var2.bind(var5)(var4, var3, var1);
                                var2 = var0.push;
                                var1 = {};
                                var1.type = var4;
                                var1.listings = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            case 85:
                                return var0;
                        }
                    };
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useBuildGuildPowerupsSections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6793, 6794, 6716, 566, 2]);