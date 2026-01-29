// modules/user_settings/FrecencySettingsMigrations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var7
        _fun98233: for (var _fun98233_ip = 0;;) switch (_fun98233_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun98233_ip = 45;
                    continue _fun98233
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun98233_ip = 54;
                    continue _fun98233
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun98233_ip = 344;
                    continue _fun98233
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun98233_ip = 322;
                    continue _fun98233
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun98233_ip = 282;
                    continue _fun98233
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun98233_ip = 269;
                    continue _fun98233
                }
            case 109:
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
                    _fun98233_ip = 162;
                    continue _fun98233
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun98233_ip = 178;
                    continue _fun98233
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun98233_ip = 248;
                    continue _fun98233
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun98233_ip = 248;
                    continue _fun98233
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun98233_ip = 233;
                    continue _fun98233
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun98233_ip = 246;
                    continue _fun98233
                }
            case 233:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun98233_ip = 264;
                continue _fun98233;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun98233_ip = 282;
                continue _fun98233;
            case 269:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun98233_ip = 322;
                    continue _fun98233
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun98233_ip = 329;
                    continue _fun98233
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun98234: for (var _fun98234_ip = 0;;) switch (_fun98234_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun98234_ip = 56;
                                continue _fun98234
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
                            _fun98234_ip = 67;
                            continue _fun98234;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var7
        _fun98235: for (var _fun98235_ip = 0;;) switch (_fun98235_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun98235_ip = 23;
                    continue _fun98235
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun98235_ip = 33;
                    continue _fun98235
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
                    _fun98235_ip = 70;
                    continue _fun98235
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun98235_ip = 55;
                    continue _fun98235
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: readFavoriteGIFs, environment: var7
        _fun98236: for (var _fun98236_ip = 0;;) switch (_fun98236_ip) {
            case 0:
                var1 = 1;
                var _closure2_slot0 = var1;
                var1 = {};
                var2 = 'IMAGE';
                var1.IMAGE = var2;
                var2 = 'VIDEO';
                var1.VIDEO = var2;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.PersistedStore;
                var3 = var4.migrateAndReadStoreState;
                var2 = new Array(2);
                var1 = function(arg0) { // Environment: var0
                    _fun98237: for (var _fun98237_ip = 0;;) switch (_fun98237_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun98237_ip = 52;
                                continue _fun98237
                            }
                        case 9:
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var1 = var0.bind(var1)(var2);
                            var0 = var2;
                            if (!var1) {
                                _fun98237_ip = 50;
                                continue _fun98237
                            }
                        case 33:
                            var1 = {};
                            var1.favorites = var2;
                            var2 = 0;
                            var1.timesFavorited = var2;
                            var0 = var1;
                        case 50:
                            _fun98237_ip = 73;
                            continue _fun98237;
                        case 52:
                            var1 = {};
                            var2 = new Array(0);
                            var1.favorites = var2;
                            var2 = 0;
                            var1.timesFavorited = var2;
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun98238: for (var _fun98238_ip = 0;;) switch (_fun98238_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = global;
                            var3 = var1.Array;
                            var2 = var3.isArray;
                            var1 = var0.favorites;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun98238_ip = 51;
                                continue _fun98238
                            }
                        case 30:
                            var1 = {};
                            var2 = new Array(0);
                            var1.favorites = var2;
                            var2 = 0;
                            var1.timesFavorited = var2;
                            var0 = var1;
                        case 51:
                            return var0;
                    }
                };
                var2[1] = var1;
                var1 = 'GIFFavoritesStore';
                var1 = var3.bind(var4)(var1, var2);
                var1 = var1.state;
                var _closure2_slot2 = var1;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun98236_ip = 167;
                    continue _fun98236
                }
            case 125:
                var2 = var1.favorites;
                var3 = var2.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun98236_ip = 167;
                    continue _fun98236
                }
            case 142:
                var2 = var1.favorites;
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun98239: for (var _fun98239_ip = 0;;) switch (_fun98239_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 3;
                            var0 = var0[var7];
                            var6 = undefined;
                            var0 = var1.bind(var6)(var0);
                            var1 = var0.FavoriteGIF;
                            var0 = var1.create;
                            var1 = var0.bind(var1)();
                            var5 = var2.format;
                            var3 = _closure2_slot1;
                            var3 = var3.IMAGE;
                            if (!(var5 !== var3)) {
                                _fun98239_ip = 146;
                                continue _fun98239
                            }
                        case 65:
                            var5 = var2.format;
                            var3 = _closure2_slot1;
                            var3 = var3.VIDEO;
                            if (!(var5 !== var3)) {
                                _fun98239_ip = 115;
                                continue _fun98239
                            }
                        case 84:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.GIFType;
                            var3 = var3.NONE;
                            _fun98239_ip = 144;
                            continue _fun98239;
                        case 115:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.GIFType;
                            var3 = var5.VIDEO;
                        case 144:
                            _fun98239_ip = 175;
                            continue _fun98239;
                        case 146:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.GIFType;
                            var3 = var4.IMAGE;
                        case 175:
                            var1.format = var3;
                            var3 = var2.src;
                            var1.src = var3;
                            var3 = var2.width;
                            var1.width = var3;
                            var3 = var2.height;
                            var1.height = var3;
                            var3 = _closure2_slot2;
                            var3 = var3.favorites;
                            var4 = var3.length;
                            var3 = arg1;
                            var3 = var4 - var3;
                            var0 = _closure2_slot0;
                            var0 = var3 + var0;
                            var1.order = var0;
                            var0 = {};
                            var2 = var2.url;
                            var0.url = var2;
                            var0.favorite = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun98236_ip = 171;
                continue _fun98236;
            case 167:
                var0 = new Array(0);
            case 171:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.MAX_FAVORITES;
    var _closure1_slot3 = var3;
    var1 = var1.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ID_REGEX;
    var _closure1_slot5 = var1;
    var3 = {};
    var1 = 2;
    var3.version = var1;
    var1 = function(arg0) { // Original name: run, environment: var7
        _fun98240: for (var _fun98240_ip = 0;;) switch (_fun98240_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot8;
                var5 = undefined;
                var0 = 1;
                var0 = var3.bind(var5)(var0);
                var4 = var0.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun98240_ip = 197;
                    continue _fun98240
                }
            case 34:
                var4 = var1.favoriteGifs;
                var3 = null;
                if (!(var3 == var4)) {
                    _fun98240_ip = 87;
                    continue _fun98240
                }
            case 46:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var3.FavoriteGIFs;
                var3 = var4.create;
                var3 = var3.bind(var4)();
                var1.favoriteGifs = var3;
            case 87:
                var4 = var1.favoriteGifs;
                var3 = {};
                var4.gifs = var3;
                var2 = _closure1_slot6;
                var4 = var2.bind(var5)(var0);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if (var2) {
                    _fun98240_ip = 169;
                    continue _fun98240
                }
            case 122:
                var2 = var3.value;
                var7 = var2.url;
                var6 = var2.favorite;
                var2 = var1.favoriteGifs;
                var2 = var2.gifs;
                var2[var7] = var6;
                var6 = var4.bind(var5)();
                var2 = var6.done;
                var3 = var6;
                if (!var2) {
                    _fun98240_ip = 122;
                    continue _fun98240
                }
            case 169:
                var1 = var1.favoriteGifs;
                var2 = var0.length;
                var0 = 2;
                var0 = var2 > var0;
                var1.hideTooltip = var0;
                var0 = true;
                return var0;
            case 197:
                var0 = false;
                return var0;
        }
    };
    var3.run = var1;
    var1 = function() { // Original name: cleanup, environment: var7
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var1;
    var1 = new Array(8);
    var1[0] = var3;
    var3 = {};
    var6 = 3;
    var3.version = var6;
    var6 = function(arg0) { // Original name: run, environment: var7
        _fun98242: for (var _fun98242_ip = 0;;) switch (_fun98242_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var6 = var1.PersistedStore;
                var4 = var6.migrateAndReadStoreState;
                var1 = new Array(2);
                var7 = function(arg0) { // Environment: var0
                    _fun98243: for (var _fun98243_ip = 0;;) switch (_fun98243_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun98243_ip = 38;
                                continue _fun98243
                            }
                        case 9:
                            var1 = global;
                            var2 = var1.Object;
                            var1 = var2.keys;
                            var1 = var1.bind(var2)(var0);
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun98243_ip = 59;
                                continue _fun98243
                            }
                        case 38:
                            var1 = {};
                            var2 = {};
                            var1.usageHistory = var2;
                            var2 = new Array(0);
                            var1.favorites = var2;
                            var0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var1[0] = var7;
                var0 = function(arg0) { // Environment: var0
                    _fun98244: for (var _fun98244_ip = 0;;) switch (_fun98244_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun98244_ip = 66;
                                continue _fun98244
                            }
                        case 9:
                            var0 = global;
                            var2 = var0.Object;
                            var0 = var2.keys;
                            var0 = var0.bind(var2)(var1);
                            var2 = var0.length;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun98244_ip = 66;
                                continue _fun98244
                            }
                        case 38:
                            var2 = var1.favorites;
                            var0 = var1;
                            if (!(var3 == var2)) {
                                _fun98244_ip = 87;
                                continue _fun98244
                            }
                        case 51:
                            var2 = new Array(0);
                            var1.favorites = var2;
                            var0 = var1;
                            _fun98244_ip = 87;
                            continue _fun98244;
                        case 66:
                            var1 = {};
                            var2 = {};
                            var1.usageHistory = var2;
                            var2 = new Array(0);
                            var1.favorites = var2;
                            var0 = var1;
                        case 87:
                            return var0;
                    }
                };
                var1[1] = var0;
                var0 = 'StickersPersistedStore';
                var0 = var4.bind(var6)(var0, var1);
                var1 = var0.state;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun98242_ip = 349;
                    continue _fun98242
                }
            case 94:
                var0 = var1.favorites;
                var0 = var0.length;
                var6 = 0;
                var4 = var0 > var6;
                var0 = false;
                if (!var4) {
                    _fun98242_ip = 219;
                    continue _fun98242
                }
            case 116:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var7.bind(var5)(var4);
                var7 = var4.FavoriteStickers;
                var4 = var7.create;
                var4 = var4.bind(var7)();
                var2.favoriteStickers = var4;
                var7 = var2.favoriteStickers;
                var8 = _closure1_slot1;
                var4 = 4;
                var4 = var9[var4];
                var9 = var8.bind(var5)(var4);
                var8 = var9.uniq;
                var4 = var1.favorites;
                var9 = var8.bind(var9)(var4);
                var8 = var9.slice;
                var4 = _closure1_slot3;
                var4 = var8.bind(var9)(var6, var4);
                var7.stickerIds = var4;
                var0 = true;
            case 219:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 4;
                var4 = var8[var4];
                var8 = var7.bind(var5)(var4);
                var7 = var8.size;
                var4 = var1.usageHistory;
                var4 = var7.bind(var8)(var4);
                if (!(var4 > var6)) {
                    _fun98242_ip = 347;
                    continue _fun98242
                }
            case 259:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var7 = var3.StickerFrecency;
                var3 = var7.create;
                var3 = var3.bind(var7)();
                var2.stickerFrecency = var3;
                var2 = var2.stickerFrecency;
                var3 = 5;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.serializeUsageHistory;
                var3 = var1.usageHistory;
                var1 = 100;
                var1 = var4.bind(var5)(var3, var1);
                var2.stickers = var1;
                var0 = true;
            case 347:
                return var0;
            case 349:
                var0 = false;
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() { // Original name: cleanup, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'StickersPersistedStore';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var6;
    var1[1] = var3;
    var3 = {};
    var6 = 4;
    var3.version = var6;
    var6 = function(arg0) { // Original name: run, environment: var7
        _fun98246: for (var _fun98246_ip = 0;;) switch (_fun98246_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var6 = var0.PersistedStore;
                var4 = var6.migrateAndReadStoreState;
                var1 = new Array(1);
                var0 = function() { // Environment: var0
                    _fun98247: for (var _fun98247_ip = 0;;) switch (_fun98247_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.Storage;
                            var2 = var3.get;
                            var1 = 'EmojiUsageHistory';
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun98247_ip = 54;
                                continue _fun98247
                            }
                        case 52:
                            var1 = {};
                        case 54:
                            var0.usageHistory = var1;
                            return var0;
                    }
                };
                var1[0] = var0;
                var0 = 'EmojiStore';
                var0 = var4.bind(var6)(var0, var1);
                var1 = var0.state;
                var4 = null;
                if (!(var4 != var1)) {
                    _fun98246_ip = 355;
                    continue _fun98246
                }
            case 83:
                var0 = var1.favorites;
                var4 = var4 != var0;
                if (!var4) {
                    _fun98246_ip = 113;
                    continue _fun98246
                }
            case 96:
                var0 = var1.favorites;
                var6 = var0.length;
                var0 = 0;
                var4 = var6 > var0;
            case 113:
                var0 = false;
                if (!var4) {
                    _fun98246_ip = 223;
                    continue _fun98246
                }
            case 118:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var4 = var8[var4];
                var4 = var6.bind(var5)(var4);
                var6 = var4.FavoriteEmojis;
                var4 = var6.create;
                var4 = var4.bind(var6)();
                var2.favoriteEmojis = var4;
                var6 = var2.favoriteEmojis;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var8[var4];
                var8 = var7.bind(var5)(var4);
                var7 = var8.uniq;
                var4 = var1.favorites;
                var9 = var7.bind(var8)(var4);
                var8 = var9.slice;
                var7 = _closure1_slot3;
                var4 = 0;
                var4 = var8.bind(var9)(var4, var7);
                var6.emojis = var4;
                var0 = true;
            case 223:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 4;
                var4 = var7[var4];
                var7 = var6.bind(var5)(var4);
                var6 = var7.size;
                var4 = var1.usageHistory;
                var6 = var6.bind(var7)(var4);
                var4 = 0;
                if (!(var6 > var4)) {
                    _fun98246_ip = 353;
                    continue _fun98246
                }
            case 265:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var7 = var3.EmojiFrecency;
                var3 = var7.create;
                var3 = var3.bind(var7)();
                var2.emojiFrecency = var3;
                var2 = var2.emojiFrecency;
                var3 = 5;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.serializeUsageHistory;
                var3 = var1.usageHistory;
                var1 = 100;
                var1 = var4.bind(var5)(var3, var1);
                var2.emojis = var1;
                var0 = true;
            case 353:
                return var0;
            case 355:
                var0 = false;
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() { // Original name: cleanup, environment: var7
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'EmojiStore';
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'EmojiUsageHistory';
        var4 = var5.bind(var6)(var4);
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'EmojiDiversitySurrogate';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var6;
    var1[2] = var3;
    var3 = {};
    var6 = 6;
    var3.version = var6;
    var6 = function(arg0) { // Original name: run, environment: var7
        _fun98249: for (var _fun98249_ip = 0;;) switch (_fun98249_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.favoriteGifs;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun98249_ip = 63;
                    continue _fun98249
                }
            case 17:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var3 = var0.FavoriteGIFs;
                var0 = var3.create;
                var0 = var0.bind(var3)();
                var7.favoriteGifs = var0;
            case 63:
                var0 = var7.favoriteGifs;
                var0 = var0.gifs;
                if (!(var2 == var0)) {
                    _fun98249_ip = 93;
                    continue _fun98249
                }
            case 79:
                var2 = var7.favoriteGifs;
                var0 = {};
                var2.gifs = var0;
            case 93:
                var2 = _closure1_slot8;
                var5 = undefined;
                var0 = 1;
                var12 = var2.bind(var5)(var0);
                var _closure2_slot0 = var12;
                var0 = var12.length;
                var4 = 0;
                if (!(var4 !== var0)) {
                    _fun98249_ip = 660;
                    continue _fun98249
                }
            case 128:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 4;
                var2 = var0[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var7.favoriteGifs;
                var2 = var2.gifs;
                var3 = var3.bind(var5)(var2);
                var2 = var3.values;
                var8 = var2.bind(var3)();
                var3 = var8.sortBy;
                var2 = 'order';
                var3 = var3.bind(var8)(var2);
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.length;
                    var0 = 1;
                    var1 = var1 + var0;
                    var0 = arg1;
                    var0 = var1 + var0;
                    var1 = arg0;
                    var1.order = var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var3 = 3;
                var0 = var0[var3];
                var0 = var1.bind(var5)(var0);
                var2 = var0.FavoriteGIFs;
                var1 = var2.toBinary;
                var0 = var7.favoriteGifs;
                var0 = var1.bind(var2)(var0);
                var11 = var0.length;
                var0 = _closure1_slot6;
                var10 = var0.bind(var5)(var12);
                var1 = var10.bind(var5)();
                var0 = var1.done;
                var9 = 7;
                var8 = var1;
                var2 = 0;
                var1 = undefined;
                if (var0) {
                    _fun98249_ip = 490;
                    continue _fun98249
                }
            case 284:
                var0 = var8.value;
                var16 = var0.url;
                var0 = var0.favorite;
                var13 = var12.length;
                var13 = var13 - var2;
                var0.order = var13;
                var2 = var2 + 1;
                var13 = var7.favoriteGifs;
                var13 = var13.gifs;
                var13 = var16 in var13;
                if (var13) {
                    _fun98249_ip = 432;
                    continue _fun98249
                }
            case 337:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var3];
                var13 = var14.bind(var5)(var13);
                var14 = var13.FavoriteGIF;
                var13 = var14.toBinary;
                var13 = var13.bind(var14)(var0);
                var14 = var13.length;
                var13 = var16.length;
                var13 = var14 + var13;
                var15 = var13 + var9;
                var18 = var11 + var15;
                var17 = _closure1_slot4;
                var14 = var11;
                var13 = var15;
                if (!(!(var18 > var17))) {
                    _fun98249_ip = 466;
                    continue _fun98249
                }
            case 407:
                var14 = var11 + var15;
                var18 = var7.favoriteGifs;
                var18 = var18.gifs;
                var18[var16] = var0;
                var13 = var15;
                _fun98249_ip = 466;
                continue _fun98249;
            case 432:
                var15 = var7.favoriteGifs;
                var15 = var15.gifs;
                var15 = var15[var16];
                var0 = var0.order;
                var15.order = var0;
                var14 = var11;
                var13 = var1;
            case 466:
                var15 = var10.bind(var5)();
                var0 = var15.done;
                var11 = var14;
                var1 = var13;
                var8 = var15;
                if (!var0) {
                    _fun98249_ip = 284;
                    continue _fun98249
                }
            case 490:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var1.bind(var5)(var0);
                var2 = var0.FavoriteGIFs;
                var1 = var2.toBinary;
                var0 = var7.favoriteGifs;
                var0 = var1.bind(var2)(var0);
                var1 = var0.length;
                var0 = _closure1_slot4;
                var2 = 10;
                if (!(var1 > var0)) {
                    _fun98249_ip = 656;
                    continue _fun98249
                }
            case 546:
                var0 = var7.favoriteGifs;
                var10 = var0.gifs;
                var0 = 0;
                for (var1 in var10)
                    case 568: {
                        case 577: var13 = var1;
                        var12 = var7.favoriteGifs;
                        var12 = var12.gifs;
                        var12 = delete var12[var13];
                        var0 = var0 + 1;
                        if (!(var0 >= var2)) {
                            _fun98249_ip = 568;
                            continue _fun98249
                        }
                    }
            case 603:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var0 = var1.bind(var5)(var0);
                var8 = var0.FavoriteGIFs;
                var1 = var8.toBinary;
                var0 = var7.favoriteGifs;
                var0 = var1.bind(var8)(var0);
                var1 = var0.length;
                var0 = _closure1_slot4;
                if (var1 > var0) {
                    _fun98249_ip = 546;
                    continue _fun98249
                }
            case 656:
                var0 = true;
                return var0;
            case 660:
                var0 = false;
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() { // Original name: cleanup, environment: var7
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[3] = var3;
    var3 = {};
    var6 = 7;
    var3.version = var6;
    var6 = function(arg0) { // Original name: run, environment: var7
        _fun98252: for (var _fun98252_ip = 0;;) switch (_fun98252_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var6 = var0.PersistedStore;
                var4 = var6.migrateAndReadStoreState;
                var1 = 'ApplicationCommandFrecency';
                var0 = new Array(0);
                var0 = var4.bind(var6)(var1, var0);
                var1 = var0.state;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun98252_ip = 208;
                    continue _fun98252
                }
            case 68:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var6 = var4.bind(var5)(var0);
                var4 = var6.size;
                var0 = var1.usageHistory;
                var4 = var4.bind(var6)(var0);
                var0 = 0;
                var4 = var4 > var0;
                var0 = false;
                if (!var4) {
                    _fun98252_ip = 206;
                    continue _fun98252
                }
            case 115:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var7 = var3.ApplicationCommandFrecency;
                var3 = var7.create;
                var3 = var3.bind(var7)();
                var2.applicationCommandFrecency = var3;
                var2 = var2.applicationCommandFrecency;
                var3 = 5;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.serializeUsageHistory;
                var3 = var1.usageHistory;
                var1 = 500;
                var1 = var4.bind(var5)(var3, var1);
                var2.applicationCommands = var1;
                var0 = true;
            case 206:
                return var0;
            case 208:
                var0 = false;
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() { // Original name: cleanup, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'ApplicationCommandFrecency';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var6;
    var1[4] = var3;
    var6 = {};
    var3 = 8;
    var6.version = var3;
    var8 = function(arg0) { // Original name: run, environment: var7
        _fun98254: for (var _fun98254_ip = 0;;) switch (_fun98254_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var6 = var0.PersistedStore;
                var4 = var6.migrateAndReadStoreState;
                var2 = 'SoundboardFavoriteStore';
                var0 = new Array(0);
                var0 = var4.bind(var6)(var2, var0);
                var2 = var0.state;
                var _closure2_slot1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun98254_ip = 221;
                    continue _fun98254
                }
            case 80:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var6 = var4.bind(var5)(var0);
                var4 = var6.size;
                var0 = var2.favoriteSounds;
                var4 = var4.bind(var6)(var0);
                var0 = 0;
                var4 = var4 > var0;
                var0 = false;
                if (!var4) {
                    _fun98254_ip = 219;
                    continue _fun98254
                }
            case 127:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var4 = var8.bind(var5)(var4);
                var8 = var4.FavoriteSoundboardSounds;
                var4 = var8.create;
                var4 = var4.bind(var8)();
                var7.favoriteSoundboardSounds = var4;
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.keys;
                var2 = var2.favoriteSounds;
                var3 = var3.bind(var4)(var2);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.Set;
                    var0 = _closure2_slot1;
                    var1 = var0.favoriteSounds;
                    var0 = arg0;
                    var3 = var1[var0];
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun98256: for (var _fun98256_ip = 0;;) switch (_fun98256_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                var0 = var0.favoriteSoundboardSounds;
                                var1 = null;
                                if (!(var1 != var0)) {
                                    _fun98256_ip = 38;
                                    continue _fun98256
                                }
                            case 19:
                                var2 = var0.soundIds;
                                var1 = var2.push;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 38:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 219:
                return var0;
            case 221:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() { // Original name: cleanup, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'SoundboardFavoriteStore';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[5] = var6;
    var6 = {};
    var8 = 9;
    var6.version = var8;
    var8 = function(arg0) { // Original name: run, environment: var7
        _fun98258: for (var _fun98258_ip = 0;;) switch (_fun98258_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = 'selectedChannelGuildFrecency';
                var4 = var4.bind(var5)(var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun98258_ip = 189;
                    continue _fun98258
                }
            case 59:
                var7 = var4;
                for (var2 in var7)
                    case 70: {
                        case 79: var9 = var2;
                        var11 = _closure1_slot5;
                        var10 = var11.test;
                        var10 = var10.bind(var11)(var9);
                        if (var10) {
                            _fun98258_ip = 70;
                            continue _fun98258
                        }
                        case 99: var9 = delete var4[var9];
                        _fun98258_ip = 70;
                        continue _fun98258;
                    }
            case 105:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.GuildAndChannelFrecency;
                var1 = var6.create;
                var1 = var1.bind(var6)();
                var0.guildAndChannelFrecency = var1;
                var1 = var0.guildAndChannelFrecency;
                var0 = 5;
                var0 = var5[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.serializeUsageHistory;
                var0 = 100;
                var0 = var2.bind(var3)(var4, var0);
                var1.guildAndChannels = var0;
                var0 = true;
                return var0;
            case 189:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() { // Original name: cleanup, environment: var7
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'selectedChannelGuildFrecency';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[6] = var6;
    var6 = {};
    var8 = 10;
    var6.version = var8;
    var8 = function(arg0) { // Original name: run, environment: var7
        _fun98260: for (var _fun98260_ip = 0;;) switch (_fun98260_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.emojiFrecency;
                var7 = null;
                if (!(var7 != var0)) {
                    _fun98260_ip = 214;
                    continue _fun98260
                }
            case 18:
                var0 = var2.emojiFrecency;
                var4 = var0.emojis;
                if (!(var7 == var4)) {
                    _fun98260_ip = 36;
                    continue _fun98260
                }
            case 34:
                var4 = {};
            case 36:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.size;
                var1 = var0.bind(var1)(var4);
                var0 = 0;
                var1 = var1 > var0;
                var0 = false;
                if (!var1) {
                    _fun98260_ip = 212;
                    continue _fun98260
                }
            case 85:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 3;
                var1 = var4[var6];
                var1 = var8.bind(var5)(var1);
                var9 = var1.EmojiFrecency;
                var1 = var9.create;
                var1 = var1.bind(var9)();
                var4 = var4[var6];
                var4 = var8.bind(var5)(var4);
                var9 = var4.EmojiFrecency;
                var8 = var9.mergePartial;
                var4 = var2.emojiFrecency;
                var4 = var8.bind(var9)(var1, var4);
                var4 = var2.emojiReactionFrecency;
                if (!(var7 != var4)) {
                    _fun98260_ip = 204;
                    continue _fun98260
                }
            case 163:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var5 = var3.EmojiFrecency;
                var4 = var5.mergePartial;
                var3 = var2.emojiReactionFrecency;
                var3 = var4.bind(var5)(var1, var3);
            case 204:
                var2.emojiReactionFrecency = var1;
                var0 = true;
            case 212:
                return var0;
            case 214:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var7 = function() { // Original name: cleanup, environment: var7
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var7;
    var1[7] = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/FrecencySettingsMigrations.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [665, 660, 566, 1343, 22, 1344, 587, 21, 2]);