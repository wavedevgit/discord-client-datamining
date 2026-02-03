// modules/stickers/StickersHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var0 = function arg0, arg1() {
        _fun74406: for (var _fun74406_ip = 0;;) switch (_fun74406_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun74406_ip = 46;
                    continue _fun74406
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun74406_ip = 55;
                    continue _fun74406
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun74406_ip = 345;
                    continue _fun74406
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun74406_ip = 323;
                    continue _fun74406
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun74406_ip = 283;
                    continue _fun74406
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun74406_ip = 270;
                    continue _fun74406
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
                    _fun74406_ip = 163;
                    continue _fun74406
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun74406_ip = 179;
                    continue _fun74406
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun74406_ip = 249;
                    continue _fun74406
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun74406_ip = 249;
                    continue _fun74406
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun74406_ip = 234;
                    continue _fun74406
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun74406_ip = 247;
                    continue _fun74406
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun74406_ip = 265;
                continue _fun74406;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun74406_ip = 283;
                continue _fun74406;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun74406_ip = 323;
                    continue _fun74406
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
                    _fun74406_ip = 330;
                    continue _fun74406
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun74407: for (var _fun74407_ip = 0;;) switch (_fun74407_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun74407_ip = 56;
                                continue _fun74407
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
                            _fun74407_ip = 67;
                            continue _fun74407;
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
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun74408: for (var _fun74408_ip = 0;;) switch (_fun74408_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun74408_ip = 23;
                    continue _fun74408
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun74408_ip = 33;
                    continue _fun74408
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
                    _fun74408_ip = 70;
                    continue _fun74408
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun74408_ip = 55;
                    continue _fun74408
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var6 = function() {
        _fun74409: for (var _fun74409_ip = 0;;) switch (_fun74409_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.useFrecencySettings;
                var2 = var2.bind(var3)();
                var3 = var2.favoriteStickers;
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun74409_ip = 56;
                    continue _fun74409
                }
            case 50:
                var0 = var3.stickerIds;
            case 56:
                if (!(var2 == var0)) {
                    _fun74409_ip = 64;
                    continue _fun74409
                }
            case 60:
                var0 = _closure1_slot14;
            case 64:
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function() {
        var2 = _closure1_slot18;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 10;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot11;
                var1 = var2.getStickerById;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun74413: for (var _fun74413_ip = 0;;) switch (_fun74413_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun74413_ip = 85;
                            continue _fun74413
                        }
                    case 12:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 13;
                        var1 = var1[var6];
                        var5 = undefined;
                        var3 = var3.bind(var5)(var1);
                        var1 = var3.isGuildSticker;
                        var1 = var1.bind(var3)(var4);
                        var1 = !var1;
                        if (var1) {
                            _fun74413_ip = 82;
                            continue _fun74413
                        }
                    case 54:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.isAvailableGuildSticker;
                        var1 = var2.bind(var3)(var4);
                    case 82:
                        var0 = var1;
                    case 85:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot19 = var5;
    var4 = function() {
        _fun74414: for (var _fun74414_ip = 0;;) switch (_fun74414_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = var2.useFrecencySettings;
                var4 = var1.bind(var2)();
                var0 = _closure1_slot14;
                var5 = null;
                var2 = var5 == var4;
                var1 = undefined;
                if (var2) {
                    _fun74414_ip = 71;
                    continue _fun74414
                }
            case 50:
                var2 = var4.stickerFrecency;
                var3 = var5 == var2;
                var1 = undefined;
                if (var3) {
                    _fun74414_ip = 71;
                    continue _fun74414
                }
            case 65:
                var1 = var2.stickers;
            case 71:
                if (!(var5 != var1)) {
                    _fun74414_ip = 123;
                    continue _fun74414
                }
            case 75:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var7 = var5 == var4;
                var1 = undefined;
                if (var7) {
                    _fun74414_ip = 118;
                    continue _fun74414
                }
            case 97:
                var4 = var4.stickerFrecency;
                var5 = var5 == var4;
                var1 = undefined;
                if (var5) {
                    _fun74414_ip = 118;
                    continue _fun74414
                }
            case 112:
                var1 = var4.stickers;
            case 118:
                var0 = var2.bind(var3)(var1);
            case 123:
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var3);
    var0 = 0;
    var3 = var10[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var10[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var10[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var7 = function() {
        var3 = _closure1_slot5;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.fetchStickerPacks;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var7;
    var3 = new Array(0);
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var2 = _closure1_slot19;
        var3 = undefined;
        var8 = var2.bind(var3)();
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 10;
        var7 = var6[var2];
        var12 = var5.bind(var3)(var7);
        var11 = var12.useStateFromStoresObject;
        var7 = _closure1_slot11;
        var10 = new Array(2);
        var10[0] = var7;
        var7 = _closure1_slot10;
        var10[1] = var7;
        var9 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot11;
            var2 = var3.getPremiumPacks;
            var2 = var2.bind(var3)();
            var0.packs = var2;
            var1 = _closure1_slot10;
            var1 = var1.stickerFrecencyWithoutFetchingLatest;
            var1 = var1.frequently;
            var0.frequentlyUsedStickers = var1;
            return var0;
        };
        var7 = new Array(0);
        var7 = var11.bind(var12)(var10, var9, var7);
        var9 = var7.packs;
        var _closure2_slot2 = var9;
        var7 = var7.frequentlyUsedStickers;
        var _closure2_slot3 = var7;
        var2 = var6[var2];
        var10 = var5.bind(var3)(var2);
        var6 = var10.useStateFromStores;
        var2 = _closure1_slot9;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot9;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var6.bind(var10)(var5, var2);
        var _closure2_slot4 = var5;
        var2 = function(arg0) { // Environment: var0
            var4 = arg0;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var6 = var8[var2];
            var3 = undefined;
            var10 = var5.bind(var3)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() { // Environment: var0
                var1 = _closure1_slot11;
                var0 = var1.getAllGuildStickers;
                var0 = var0.bind(var1)();
                return var0;
            };
            var7 = var9.bind(var10)(var7, var6);
            var _closure3_slot1 = var7;
            var6 = var8[var2];
            var12 = var5.bind(var3)(var6);
            var11 = var12.useStateFromStoresArray;
            var6 = _closure1_slot8;
            var10 = new Array(2);
            var10[0] = var6;
            var6 = _closure1_slot6;
            var10[1] = var6;
            var9 = function() { // Environment: var0
                var2 = _closure1_slot8;
                var0 = var2.getFlattenedGuildIds;
                var3 = var0.bind(var2)();
                var0 = new Array(0);
                var _closure4_slot0 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun74423: for (var _fun74423_ip = 0;;) switch (_fun74423_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var0 = arg0;
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74423_ip = 43;
                                continue _fun74423
                            }
                        case 26:
                            var1 = _closure4_slot0;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var6 = new Array(0);
            var6 = var11.bind(var12)(var10, var9, var6);
            var _closure3_slot2 = var6;
            var2 = var8[var2];
            var8 = var5.bind(var3)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() { // Environment: var0
                var1 = _closure1_slot9;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                return var0;
            };
            var5 = var5.bind(var8)(var3, var2);
            var _closure3_slot3 = var5;
            var3 = _closure1_slot5;
            var2 = var3.useMemo;
            var1 = new Array(4);
            var1[0] = var7;
            var1[1] = var6;
            var1[2] = var5;
            var1[3] = var4;
            var0 = function() { // Environment: var0
                _fun74425: for (var _fun74425_ip = 0;;) switch (_fun74425_ip) {
                    case 0:
                        var0 = new Array(0);
                        var2 = _closure1_slot16;
                        var1 = _closure3_slot2;
                        var3 = undefined;
                        var8 = var2.bind(var3)(var1);
                        var6 = var8.bind(var3)();
                        var1 = var6.done;
                        var13 = 15;
                        var7 = 0;
                        var2 = null;
                        if (var1) {
                            _fun74425_ip = 165;
                            continue _fun74425
                        }
                    case 44:
                        var1 = var6.value;
                        var11 = var1.name;
                        var12 = var1.id;
                        var9 = _closure3_slot1;
                        var1 = var9.get;
                        var10 = var1.bind(var9)(var12);
                        var1 = var2 != var10;
                        if (!var1) {
                            _fun74425_ip = 89;
                            continue _fun74425
                        }
                    case 80:
                        var9 = var10.length;
                        var1 = var7 !== var9;
                    case 89:
                        if (!var1) {
                            _fun74425_ip = 150;
                            continue _fun74425
                        }
                    case 92:
                        var9 = var0.push;
                        var1 = {};
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var13];
                        var14 = var15.bind(var3)(var14);
                        var14 = var14.StickerCategoryTypes;
                        var14 = var14.GUILD;
                        var1.type = var14;
                        var1.id = var12;
                        var1.name = var11;
                        var1.stickers = var10;
                        var1 = var9.bind(var0)(var1);
                    case 150:
                        var9 = var8.bind(var3)();
                        var1 = var9.done;
                        var6 = var9;
                        if (!var1) {
                            _fun74425_ip = 44;
                            continue _fun74425
                        }
                    case 165:
                        var1 = _closure3_slot0;
                        var6 = var2 == var1;
                        var1 = undefined;
                        if (var6) {
                            _fun74425_ip = 192;
                            continue _fun74425
                        }
                    case 178:
                        var8 = _closure3_slot0;
                        var6 = var8.getGuildId;
                        var1 = var6.bind(var8)();
                    case 192:
                        if (!(var2 != var1)) {
                            _fun74425_ip = 491;
                            continue _fun74425
                        }
                    case 199:
                        var8 = _closure1_slot6;
                        var6 = var8.getGuild;
                        var9 = _closure3_slot0;
                        var1 = var9.getGuildId;
                        var1 = var1.bind(var9)();
                        var10 = var6.bind(var8)(var1);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 14;
                        var1 = var8[var1];
                        var6 = var6.bind(var3)(var1);
                        var1 = var6.getManageResourcePermissions;
                        var1 = var1.bind(var6)(var10);
                        var6 = var1.canManageAllExpressions;
                        var8 = var0.findIndex;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure3_slot0;
                            var0 = var2.getGuildId;
                            var0 = var0.bind(var2)();
                            var0 = var1 === var0;
                            return var0;
                        };
                        var9 = var8.bind(var0)(var1);
                        var8 = 1;
                        if (!(!(var9 >= var8))) {
                            _fun74425_ip = 392;
                            continue _fun74425
                        }
                    case 291:
                        var1 = -1;
                        var1 = var1 === var9;
                        if (!var1) {
                            _fun74425_ip = 308;
                            continue _fun74425
                        }
                    case 304:
                        var1 = var2 != var10;
                    case 308:
                        if (!var1) {
                            _fun74425_ip = 314;
                            continue _fun74425
                        }
                    case 311:
                        var1 = var6;
                    case 314:
                        if (!var1) {
                            _fun74425_ip = 419;
                            continue _fun74425
                        }
                    case 317:
                        var6 = var0.unshift;
                        var1 = {};
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var13];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.StickerCategoryTypes;
                        var11 = var11.EMPTY_GUILD_UPSELL;
                        var1.type = var11;
                        var11 = var10.id;
                        var1.id = var11;
                        var10 = var10.name;
                        var1.name = var10;
                        var10 = new Array(0);
                        var1.stickers = var10;
                        var1 = var6.bind(var0)(var1);
                        _fun74425_ip = 419;
                        continue _fun74425;
                    case 392:
                        var6 = var0.unshift;
                        var1 = var0.splice;
                        var1 = var1.bind(var0)(var9, var8);
                        var1 = var1[var7];
                        var1 = var6.bind(var0)(var1);
                    case 419:
                        var1 = _closure3_slot3;
                        if (!(var2 != var1)) {
                            _fun74425_ip = 491;
                            continue _fun74425
                        }
                    case 427:
                        var2 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 18;
                        var1 = var6[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.can;
                        var1 = {};
                        var5 = _closure1_slot12;
                        var5 = var5.USE_EXTERNAL_EMOJIS;
                        var1.permission = var5;
                        var5 = _closure3_slot3;
                        var1.user = var5;
                        var4 = _closure3_slot0;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                    case 491:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var6 = var2.bind(var3)(var4);
        var _closure2_slot5 = var6;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function() { // Environment: var0
            _fun74427: for (var _fun74427_ip = 0;;) switch (_fun74427_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var2 = var3.map;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 13;
                    var0 = var9[var0];
                    var4 = undefined;
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.createStickerPackCategory;
                    var2 = var2.bind(var3)(var0);
                    var3 = {};
                    var6 = 15;
                    var0 = var9[var6];
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.StickerCategoryTypes;
                    var0 = var0.FAVORITE;
                    var3.type = var0;
                    var0 = var9[var6];
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.StickerCategoryTypes;
                    var0 = var0.FAVORITE;
                    var3.id = var0;
                    var5 = 17;
                    var0 = var9[var5];
                    var0 = var8.bind(var4)(var0);
                    var10 = var0.intl;
                    var7 = var10.string;
                    var0 = var9[var5];
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.t;
                    var0 = var0.y3LQCG;
                    var0 = var7.bind(var10)(var0);
                    var3.name = var0;
                    var0 = _closure2_slot1;
                    var3.stickers = var0;
                    var0 = new Array(2);
                    var0[0] = var3;
                    var3 = {};
                    var7 = var9[var6];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.StickerCategoryTypes;
                    var7 = var7.RECENT;
                    var3.type = var7;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.StickerCategoryTypes;
                    var6 = var6.RECENT;
                    var3.id = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var4)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5["6hjpXW"];
                    var5 = var6.bind(var7)(var5);
                    var3.name = var5;
                    var6 = _closure2_slot3;
                    var5 = null;
                    var6 = var5 == var6;
                    if (var6) {
                        _fun74427_ip = 309;
                        continue _fun74427
                    }
                case 286:
                    var8 = _closure2_slot3;
                    var7 = var8.filter;
                    var6 = function(arg0) { // Environment: var6
                        _fun74428: for (var _fun74428_ip = 0;;) switch (_fun74428_ip) {
                            case 0:
                                var10 = arg0;
                                var _closure4_slot0 = var10;
                                var1 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var3 = 13;
                                var0 = var0[var3];
                                var5 = undefined;
                                var1 = var1.bind(var5)(var0);
                                var0 = var1.isGuildSticker;
                                var0 = var0.bind(var1)(var10);
                                if (var0) {
                                    _fun74428_ip = 111;
                                    continue _fun74428
                                }
                            case 48:
                                var1 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var0 = var0[var3];
                                var1 = var1.bind(var5)(var0);
                                var0 = var1.isStandardSticker;
                                var1 = var0.bind(var1)(var10);
                                var0 = undefined;
                                if (!var1) {
                                    _fun74428_ip = 106;
                                    continue _fun74428
                                }
                            case 81:
                                var6 = _closure2_slot2;
                                var3 = var6.some;
                                var1 = function(arg0) { // Environment: var4
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.pack_id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var3.bind(var6)(var1);
                            case 106:
                                _fun74428_ip = 245;
                                continue _fun74428;
                            case 111:
                                var6 = _closure1_slot11;
                                var3 = var6.getStickersByGuildId;
                                var1 = var10.guild_id;
                                var7 = var3.bind(var6)(var1);
                                var1 = null;
                                var6 = var1 == var7;
                                var3 = undefined;
                                if (var6) {
                                    _fun74428_ip = 160;
                                    continue _fun74428
                                }
                            case 142:
                                var6 = var7.some;
                                var4 = function(arg0) { // Environment: var4
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var3 = var6.bind(var7)(var4);
                            case 160:
                                var1 = var1 != var3;
                                if (!var1) {
                                    _fun74428_ip = 170;
                                    continue _fun74428
                                }
                            case 167:
                                var1 = var3;
                            case 170:
                                if (!var1) {
                                    _fun74428_ip = 242;
                                    continue _fun74428
                                }
                            case 173:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 20;
                                var3 = var6[var2];
                                var9 = var4.bind(var5)(var3);
                                var8 = var9.getStickerSendability;
                                var7 = _closure2_slot4;
                                var3 = _closure2_slot0;
                                var3 = var8.bind(var9)(var10, var7, var3);
                                var2 = var6[var2];
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.StickerSendability;
                                var2 = var2.NONSENDABLE;
                                var1 = var3 !== var2;
                            case 242:
                                var0 = var1;
                            case 245:
                                return var0;
                        }
                    };
                    var4 = var7.bind(var8)(var6);
                case 309:
                    if (!(var5 == var4)) {
                        _fun74427_ip = 317;
                        continue _fun74427
                    }
                case 313:
                    var4 = new Array(0);
                case 317:
                    var3.stickers = var4;
                    var0[1] = var3;
                    var12 = _closure2_slot5;
                    var11 = 2;
                    var13 = var0;
                    var11 = arraySpread(var13, var12, var11);
                    var13 = var0;
                    var12 = var2;
                    var1 = arraySpread(var13, var12, var11);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var3;
    var8 = 21;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/stickers/StickersHooks.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg0) { // Environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot13;
        var0 = undefined;
        var3 = var3.bind(var0)();
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 10;
        var3 = var5[var3];
        var7 = var4.bind(var0)(var3);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot11;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var0 = _closure1_slot11;
            var0 = var0.hasLoadedStickerPacks;
            return var0;
        };
        var5 = var5.bind(var7)(var4, var3);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun74433: for (var _fun74433_ip = 0;;) switch (_fun74433_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun74433_ip = 38;
                        continue _fun74433
                    }
                case 10:
                    var4 = _closure1_slot11;
                    var3 = var4.getStickerPack;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    var1 = var2 == var3;
                case 38:
                    if (!var1) {
                        _fun74433_ip = 81;
                        continue _fun74433
                    }
                case 41:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchStickerPack;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useFetchStickerPack = var8;
    var8 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 12;
        var0 = var4[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var3 = var0.AnimateStickers;
        var0 = var3.useSetting;
        var3 = var0.bind(var3)();
        var0 = 13;
        var0 = var4[var0];
        var2 = var2.bind(var1)(var0);
        var1 = var2.shouldAnimateSticker;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.useShouldAnimateSticker = var8;
    var8 = function(arg0) { // Environment: var1
        _fun74435: for (var _fun74435_ip = 0;;) switch (_fun74435_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.collapsedStickersCategories;
                var _closure2_slot0 = var10;
                var9 = var1.filteredStickers;
                var _closure2_slot1 = var9;
                var8 = var1.listPaddingRight;
                var2 = undefined;
                if (!(var8 === var2)) {
                    _fun74435_ip = 45;
                    continue _fun74435
                }
            case 43:
                var8 = 0;
            case 45:
                var _closure2_slot2 = var8;
                var7 = var1.listWidth;
                if (!(var7 === var2)) {
                    _fun74435_ip = 63;
                    continue _fun74435
                }
            case 61:
                var7 = 0;
            case 63:
                var _closure2_slot3 = var7;
                var6 = var1.stickerNodeMargin;
                if (!(var6 === var2)) {
                    _fun74435_ip = 81;
                    continue _fun74435
                }
            case 79:
                var6 = 0;
            case 81:
                var _closure2_slot4 = var6;
                var5 = var1.stickerNodeWidth;
                var _closure2_slot5 = var5;
                var4 = var1.stickersCategories;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot5;
                var2 = var3.useMemo;
                var1 = new Array(7);
                var1[0] = var10;
                var1[1] = var9;
                var1[2] = var8;
                var1[3] = var7;
                var1[4] = var6;
                var1[5] = var5;
                var1[6] = var4;
                var0 = function() { // Environment: var0
                    _fun74436: for (var _fun74436_ip = 0;;) switch (_fun74436_ip) {
                        case 0:
                            var4 = global;
                            var6 = var4.Math;
                            var3 = var6.floor;
                            var0 = _closure2_slot3;
                            var8 = _closure2_slot2;
                            var1 = var0 - var8;
                            var7 = _closure2_slot4;
                            var9 = var1 + var7;
                            var1 = _closure2_slot5;
                            var2 = var1 + var7;
                            var2 = var9 / var2;
                            var9 = var3.bind(var6)(var2);
                            var _closure3_slot0 = var9;
                            var3 = var4.Math;
                            var2 = var3.floor;
                            var6 = var4.Math;
                            var4 = var6.max;
                            var8 = var0 - var8;
                            var1 = var1 * var9;
                            var8 = var8 - var1;
                            var1 = 1;
                            var1 = var9 - var1;
                            var1 = var8 / var1;
                            var1 = var4.bind(var6)(var7, var1);
                            var2 = var2.bind(var3)(var1);
                            var1 = new Array(0);
                            var _closure3_slot1 = var1;
                            var4 = new Array(0);
                            var _closure3_slot2 = var4;
                            var3 = new Array(0);
                            var _closure3_slot3 = var3;
                            var14 = 0;
                            var _closure3_slot4 = var14;
                            var _closure3_slot5 = var14;
                            var _closure3_slot6 = var14;
                            if (!(var14 !== var0)) {
                                _fun74436_ip = 534;
                                continue _fun74436
                            }
                        case 162:
                            var13 = function arg0, arg1() {
                                _fun74437: for (var _fun74437_ip = 0;;) switch (_fun74437_ip) {
                                    case 0:
                                        var13 = arg0;
                                        var12 = arguments[2];
                                        var0 = arg1;
                                        var _closure4_slot0 = var0;
                                        var0 = undefined;
                                        if (!(var12 === var0)) {
                                            _fun74437_ip = 23;
                                            continue _fun74437
                                        }
                                    case 21:
                                        var12 = false;
                                    case 23:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 13;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.isGuildSticker;
                                        var10 = 0;
                                        var1 = var13[var10];
                                        var1 = var2.bind(var3)(var1);
                                        var4 = undefined;
                                        if (!var1) {
                                            _fun74437_ip = 91;
                                            continue _fun74437
                                        }
                                    case 68:
                                        var3 = _closure1_slot6;
                                        var2 = var3.getGuild;
                                        var1 = var13[var10];
                                        var1 = var1.guild_id;
                                        var4 = var2.bind(var3)(var1);
                                    case 91:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 14;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getManageResourcePermissions;
                                        var1 = var1.bind(var2)(var4);
                                        var3 = var1.canCreateExpressions;
                                        var2 = _closure1_slot7;
                                        var1 = var2.getGuildId;
                                        var5 = var1.bind(var2)();
                                        var6 = _closure2_slot6;
                                        var2 = var6.findIndex;
                                        var1 = function(arg0) { // Environment: var14
                                            var0 = arg0;
                                            var1 = var0.type;
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var0 = 15;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var2);
                                            var0 = var0.StickerCategoryTypes;
                                            var0 = var0.FAVORITE;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var9 = var2.bind(var6)(var1);
                                        var2 = var6.findIndex;
                                        var1 = function(arg0) { // Environment: var14
                                            var0 = arg0;
                                            var1 = var0.type;
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var0 = 15;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var2);
                                            var0 = var0.StickerCategoryTypes;
                                            var0 = var0.RECENT;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var8 = var2.bind(var6)(var1);
                                        var1 = var13.length;
                                        var7 = null;
                                        var2 = var7 != var4;
                                        var6 = var4;
                                        if (!var2) {
                                            _fun74437_ip = 211;
                                            continue _fun74437
                                        }
                                    case 202:
                                        var4 = var6.id;
                                        var2 = var5 === var4;
                                    case 211:
                                        if (!var2) {
                                            _fun74437_ip = 217;
                                            continue _fun74437
                                        }
                                    case 214:
                                        var2 = var3;
                                    case 217:
                                        if (!var2) {
                                            _fun74437_ip = 266;
                                            continue _fun74437
                                        }
                                    case 220:
                                        var4 = var13.length;
                                        var5 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var3 = 16;
                                        var3 = var15[var3];
                                        var15 = var5.bind(var0)(var3);
                                        var5 = var15.getTotalStickerCountForTier;
                                        var3 = var6.premiumTier;
                                        var3 = var5.bind(var15)(var3);
                                        var2 = var4 < var3;
                                    case 266:
                                        var5 = var1;
                                        if (!var2) {
                                            _fun74437_ip = 275;
                                            continue _fun74437
                                        }
                                    case 272:
                                        var5 = var1 + 1;
                                    case 275:
                                        var1 = global;
                                        var4 = var1.Math;
                                        var3 = var4.ceil;
                                        var1 = _closure3_slot0;
                                        var1 = var5 / var1;
                                        var4 = var3.bind(var4)(var1);
                                        var15 = _closure3_slot2;
                                        var3 = _closure3_slot5;
                                        var1 = 0;
                                        if (var12) {
                                            _fun74437_ip = 321;
                                            continue _fun74437
                                        }
                                    case 318:
                                        var1 = var4;
                                    case 321:
                                        var15[var3] = var1;
                                        var15 = var10 < var4;
                                        var3 = 15;
                                        var1 = 17;
                                        var10 = 0;
                                        if (!var15) {
                                            _fun74437_ip = 636;
                                            continue _fun74437
                                        }
                                    case 343:
                                        var15 = _closure3_slot0;
                                        var17 = var10 * var15;
                                        var16 = var17 + var15;
                                        var15 = var13.slice;
                                        var17 = var15.bind(var13)(var17, var16);
                                        var16 = var17.map;
                                        var15 = function(arg0, arg1) { // Environment: var14
                                            _fun74440: for (var _fun74440_ip = 0;;) switch (_fun74440_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var0 = {};
                                                    var4 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var1 = 15;
                                                    var1 = var5[var1];
                                                    var3 = undefined;
                                                    var1 = var4.bind(var3)(var1);
                                                    var1 = var1.StickerGridItemTypes;
                                                    var1 = var1.STICKER;
                                                    var0.type = var1;
                                                    var0.sticker = var2;
                                                    var1 = 13;
                                                    var1 = var5[var1];
                                                    var3 = var4.bind(var3)(var1);
                                                    var1 = var3.isStandardSticker;
                                                    var3 = var1.bind(var3)(var2);
                                                    var1 = 'TODO - fix';
                                                    if (!var3) {
                                                        _fun74440_ip = 89;
                                                        continue _fun74440
                                                    }
                                                case 83:
                                                    var1 = var2.pack_id;
                                                case 89:
                                                    var0.packId = var1;
                                                    var2 = _closure3_slot5;
                                                    var0.gridSectionIndex = var2;
                                                    var2 = _closure3_slot4;
                                                    var0.rowIndex = var2;
                                                    var2 = arg1;
                                                    var0.columnIndex = var2;
                                                    var1 = _closure3_slot6;
                                                    var0.visibleRowIndex = var1;
                                                    var1 = _closure4_slot0;
                                                    var0.category = var1;
                                                    return var0;
                                            }
                                        };
                                        var15 = var16.bind(var17)(var15);
                                        var16 = _closure3_slot5;
                                        var16 = var16 > var8;
                                        if (!var16) {
                                            _fun74437_ip = 402;
                                            continue _fun74437
                                        }
                                    case 394:
                                        var17 = _closure3_slot5;
                                        var16 = var17 > var9;
                                    case 402:
                                        if (!var16) {
                                            _fun74437_ip = 409;
                                            continue _fun74437
                                        }
                                    case 405:
                                        var16 = var7 != var6;
                                    case 409:
                                        if (!var16) {
                                            _fun74437_ip = 421;
                                            continue _fun74437
                                        }
                                    case 412:
                                        var17 = var13.length;
                                        var16 = var5 > var17;
                                    case 421:
                                        if (!var16) {
                                            _fun74437_ip = 568;
                                            continue _fun74437
                                        }
                                    case 427:
                                        var17 = var15.push;
                                        var16 = {};
                                        var21 = _closure1_slot0;
                                        var18 = _closure1_slot2;
                                        var19 = var18[var3];
                                        var19 = var21.bind(var0)(var19);
                                        var19 = var19.StickerGridItemTypes;
                                        var19 = var19.CREATE_STICKER;
                                        var16.type = var19;
                                        var19 = var6.id;
                                        var16.guild_id = var19;
                                        var19 = var18[var1];
                                        var19 = var21.bind(var0)(var19);
                                        var20 = var19.intl;
                                        var19 = var20.string;
                                        var18 = var18[var1];
                                        var18 = var21.bind(var0)(var18);
                                        var18 = var18.t;
                                        var18 = var18["UwF+Cw"];
                                        var18 = var19.bind(var20)(var18);
                                        var16.name = var18;
                                        var18 = _closure3_slot5;
                                        var16.gridSectionIndex = var18;
                                        var18 = _closure3_slot4;
                                        var16.rowIndex = var18;
                                        var18 = var15.length;
                                        var16.columnIndex = var18;
                                        var18 = _closure3_slot6;
                                        var16.visibleRowIndex = var18;
                                        var16 = var17.bind(var15)(var16);
                                    case 568:
                                        if (var12) {
                                            _fun74437_ip = 615;
                                            continue _fun74437
                                        }
                                    case 571:
                                        var16 = _closure3_slot6;
                                        var16 = var16 + 1;
                                        _closure3_slot6 = var16;
                                        var17 = _closure3_slot3;
                                        var16 = var17.push;
                                        var16 = var16.bind(var17)(var15);
                                        var17 = _closure3_slot1;
                                        var16 = var17.push;
                                        var15 = var15.length;
                                        var15 = var16.bind(var17)(var15);
                                    case 615:
                                        var15 = _closure3_slot4;
                                        var15 = var15 + 1;
                                        _closure3_slot4 = var15;
                                        var10 = var10 + 1;
                                        if (var10 < var4) {
                                            _fun74437_ip = 343;
                                            continue _fun74437
                                        }
                                    case 636:
                                        var1 = _closure3_slot5;
                                        var1 = var1 + 1;
                                        _closure3_slot5 = var1;
                                        return var0;
                                }
                            };
                            var0 = _closure2_slot1;
                            var12 = null;
                            if (!(var12 != var0)) {
                                _fun74436_ip = 334;
                                continue _fun74436
                            }
                        case 182:
                            var0 = _closure2_slot1;
                            var0 = var0.sendable;
                            var0 = var0.length;
                            if (!(var0 > var14)) {
                                _fun74436_ip = 254;
                                continue _fun74436
                            }
                        case 201:
                            var0 = _closure2_slot1;
                            var7 = var0.sendable;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 15;
                            var0 = var6[var0];
                            var6 = undefined;
                            var0 = var8.bind(var6)(var0);
                            var0 = var0.StickerCategoryTypes;
                            var0 = var0.SEARCH_RESULTS;
                            var0 = var13.bind(var6)(var7, var0);
                        case 254:
                            var0 = _closure2_slot1;
                            var0 = var0.sendableWithPremium;
                            var0 = var0.length;
                            if (!(var0 > var14)) {
                                _fun74436_ip = 534;
                                continue _fun74436
                            }
                        case 276:
                            var0 = _closure2_slot1;
                            var7 = var0.sendableWithPremium;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 15;
                            var0 = var6[var0];
                            var6 = undefined;
                            var0 = var8.bind(var6)(var0);
                            var0 = var0.StickerCategoryTypes;
                            var0 = var0.SEARCH_RESULTS;
                            var0 = var13.bind(var6)(var7, var0);
                            _fun74436_ip = 534;
                            continue _fun74436;
                        case 334:
                            var6 = _closure1_slot16;
                            var0 = _closure2_slot6;
                            var10 = undefined;
                            var9 = var6.bind(var10)(var0);
                            var6 = var9.bind(var10)();
                            var0 = var6.done;
                            var8 = true;
                            var7 = 15;
                            if (var0) {
                                _fun74436_ip = 534;
                                continue _fun74436
                            }
                        case 372:
                            var18 = var6.value;
                            var0 = var18.stickers;
                            var0 = var0.length;
                            if (!(!(var0 > var14))) {
                                _fun74436_ip = 451;
                                continue _fun74436
                            }
                        case 392:
                            var16 = var18.type;
                            var17 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var17.bind(var10)(var0);
                            var0 = var0.StickerCategoryTypes;
                            var0 = var0.EMPTY_GUILD_UPSELL;
                            if (!(var16 === var0)) {
                                _fun74436_ip = 516;
                                continue _fun74436
                            }
                        case 430:
                            var0 = _closure3_slot5;
                            var4[var0] = var14;
                            var0 = _closure3_slot5;
                            var0 = var0 + 1;
                            _closure3_slot5 = var0;
                            _fun74436_ip = 516;
                            continue _fun74436;
                        case 451:
                            var0 = _closure3_slot4;
                            var0 = var0 + 1;
                            _closure3_slot4 = var0;
                            var17 = var18.stickers;
                            var16 = var18.type;
                            var0 = _closure2_slot0;
                            var19 = var12 == var0;
                            var0 = undefined;
                            if (var19) {
                                _fun74436_ip = 505;
                                continue _fun74436
                            }
                        case 486:
                            var20 = _closure2_slot0;
                            var19 = var20.has;
                            var18 = var18.id;
                            var0 = var19.bind(var20)(var18);
                        case 505:
                            var0 = var8 === var0;
                            var0 = var13.bind(var10)(var17, var16, var0);
                        case 516:
                            var16 = var9.bind(var10)();
                            var0 = var16.done;
                            var6 = var16;
                            if (!var0) {
                                _fun74436_ip = 372;
                                continue _fun74436
                            }
                        case 534:
                            var0 = {};
                            var5 = _closure3_slot4;
                            var0.rowCount = var5;
                            var0.rowCountBySection = var4;
                            var0.stickersGrid = var3;
                            var0.gutterWidth = var2;
                            var0.columnCounts = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useStickersGrid = var8;
    var8 = function() { // Environment: var1
        var0 = true;
        return var0;
    };
    var2.useHasSendableSticker = var8;
    var2.useFetchStickerPacks = var7;
    var2.useFavoriteStickerIds = var6;
    var2.useFavoriteStickers = var5;
    var2.useLatestFrecentStickerIds = var4;
    var4 = function() {
        var2 = _closure1_slot20;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 10;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot11;
                var1 = var2.getStickerById;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = undefined;
                var0 = arg0;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useLatestFrecentStickers = var4;
    var2.useStickerPackCategories = var3;
    var3 = function(arg0) { // Environment: var1
        _fun74446: for (var _fun74446_ip = 0;;) switch (_fun74446_ip) {
            case 0:
                var3 = arg0;
                var8 = arguments[1];
                var _closure2_slot0 = var3;
                var10 = undefined;
                if (!(var8 === var10)) {
                    _fun74446_ip = 20;
                    continue _fun74446
                }
            case 18:
                var8 = false;
            case 20:
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var10;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 10;
                var0 = var1[var0];
                var9 = var6.bind(var10)(var0);
                var7 = var9.useStateFromStores;
                var0 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var4
                    var2 = _closure1_slot11;
                    var1 = var2.getStickerById;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var9)(var2, var0);
                var15 = _closure1_slot5;
                var7 = var15.useState;
                var2 = true;
                var2 = var7.bind(var15)(var2);
                var13 = _closure1_slot4;
                var12 = 2;
                var9 = var13.bind(var10)(var2, var12);
                var2 = 0;
                var7 = var9[var2];
                var11 = 1;
                var9 = var9[var11];
                _closure2_slot2 = var9;
                var14 = var15.useState;
                var9 = false;
                var9 = var14.bind(var15)(var9);
                var9 = var13.bind(var10)(var9, var12);
                var2 = var9[var2];
                var9 = var9[var11];
                _closure2_slot3 = var9;
                var11 = 13;
                var1 = var1[var11];
                var6 = var6.bind(var10)(var1);
                var1 = var6.isGuildSticker;
                var1 = var1.bind(var6)(var3);
                if (var1) {
                    _fun74446_ip = 223;
                    continue _fun74446
                }
            case 195:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var9 = var9.bind(var10)(var6);
                var6 = var9.isStandardSticker;
                var1 = var6.bind(var9)(var3);
            case 223:
                var6 = {};
                var6.hasFetched = var2;
                var6.isReturnable = var1;
                var6.renderableSticker = var3;
                var6.shouldFetch = var7;
                var6.stickersStoreDefinition = var0;
                _closure2_slot4 = var6;
                var7 = _closure1_slot5;
                var5 = var7.useRef;
                var5 = var5.bind(var7)(var6);
                _closure2_slot5 = var5;
                var6 = var7.useEffect;
                var5 = function() { // Environment: var4
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot4;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var8;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot3;
                    var0 = undefined;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun74451: for (var _fun74451_ip = 0;;) switch (_fun74451_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun74451_ip = 159;
                                        continue _fun74451
                                    }
                                case 10:
                                    var1 = undefined;
                                    var3 = undefined;
                                    var4 = _closure2_slot5;
                                    var7 = var4.current;
                                    var4 = var7.hasFetched;
                                    var6 = var7.isReturnable;
                                    var3 = var7.renderableSticker;
                                    var5 = var7.shouldFetch;
                                    var7 = var7.stickersStoreDefinition;
                                    var8 = _closure2_slot1;
                                    if (!var8) {
                                        _fun74451_ip = 156;
                                        continue _fun74451
                                    }
                                case 63:
                                    if (var6) {
                                        _fun74451_ip = 156;
                                        continue _fun74451
                                    }
                                case 66:
                                    var6 = null;
                                    if (!(var6 == var7)) {
                                        _fun74451_ip = 156;
                                        continue _fun74451
                                    }
                                case 72:
                                    if (!var5) {
                                        _fun74451_ip = 156;
                                        continue _fun74451
                                    }
                                case 75:
                                    if (var4) {
                                        _fun74451_ip = 156;
                                        continue _fun74451
                                    }
                                case 78:
                                    var5 = _closure2_slot2;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                case 89: // try_start_0
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var4 = 11;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var1)(var4);
                                    var4 = var5.fetchSticker;
                                    var3 = var3.id;
                                    var3 = var4.bind(var5)(var3);
                                    SaveGenerator(address = 132);
                                case 130:
                                    return var3;
                                case 132:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun74451_ip = 140;
                                        continue _fun74451
                                    }
                                case 138: // try_end0
                                    _fun74451_ip = 145;
                                    continue _fun74451;
                                case 140:
                                    return var3;
                                case 143: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                case 145:
                                    var3 = _closure2_slot3;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                case 156:
                                    return var1;
                                case 159:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var5);
                if (var1) {
                    _fun74446_ip = 344;
                    continue _fun74446
                }
            case 318:
                var1 = null;
                var4 = var1 != var0;
                if (!var4) {
                    _fun74446_ip = 330;
                    continue _fun74446
                }
            case 327:
                var1 = var0;
            case 330:
                var0 = new Array(2);
                var0[0] = var1;
                var0[1] = var2;
                _fun74446_ip = 359;
                continue _fun74446;
            case 344:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                var0 = var1;
            case 359:
                return var0;
        }
    };
    var2.useStickerForRenderableSticker = var3;
    var1 = function(arg0) { // Environment: var1
        var4 = _closure1_slot15;
        var3 = undefined;
        var2 = arg0;
        var4 = var4.bind(var3)(var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun74454: for (var _fun74454_ip = 0;;) switch (_fun74454_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 15;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.StickerCategoryTypes;
                        var0 = var0.EMPTY_GUILD_UPSELL;
                        var0 = var2 === var0;
                        if (var0) {
                            _fun74454_ip = 69;
                            continue _fun74454
                        }
                    case 52:
                        var1 = var1.stickers;
                        var2 = var1.length;
                        var1 = 0;
                        var0 = var2 > var1;
                    case 69:
                        return var0;
                }
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useFilteredStickerPackCategories = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1410, 3213, 4376, 1621, 5593, 5594, 660, 566, 9372, 1348, 3999, 8089, 4219, 6707, 1234, 3096, 9091, 5611, 2]);