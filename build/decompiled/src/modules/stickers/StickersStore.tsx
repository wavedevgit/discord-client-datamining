// modules/stickers/StickersStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun49978: for (var _fun49978_ip = 0;;) switch (_fun49978_ip) {
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
            case 70: // try_end0
                _fun49978_ip = 74;
                continue _fun49978;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var8 = 2;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = {};
    var1.Unloaded = var10;
    var7 = 'Unloaded';
    var1[var10] = var7;
    var1.MaybeLoaded = var9;
    var7 = 'MaybeLoaded';
    var1[var9] = var7;
    var1.Loaded = var8;
    var7 = 'Loaded';
    var1[var8] = var7;
    var _closure1_slot13 = var1;
    var1 = var1.Unloaded;
    var _closure1_slot14 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun49983: for (var _fun49983_ip = 0;;) switch (_fun49983_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49983_ip = 206;
                            continue _fun49983
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot13;
                        var4 = var4.Unloaded;
                        if (!(var5 === var4)) {
                            _fun49983_ip = 200;
                            continue _fun49983
                        }
                    case 42:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 10;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.database;
                        var5 = var4.bind(var5)();
                        _closure4_slot0 = var5;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun49983_ip = 200;
                            continue _fun49983
                        }
                    case 82:
                        var5 = _closure1_slot13;
                        var5 = var5.Loaded;
                        _closure1_slot14 = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.tryLoadOrResetCacheGatewayAsync;
                        var5 = 'StickerStore.loadSavedGuildStickers';
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.timeAsync;
                            var2 = '💾';
                            var1 = 'loadSavedGuildStickers';
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getAsync;
                                var0 = _closure4_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var1);
                        SaveGenerator(address = 143);
                    case 141:
                        return var1;
                    case 143:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun49983_ip = 203;
                            continue _fun49983
                        }
                    case 149:
                        if (!(var4 != var1)) {
                            _fun49983_ip = 200;
                            continue _fun49983
                        }
                    case 153:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 14;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CACHED_STICKERS_LOADED';
                        var3.type = var6;
                        var3.stickers = var1;
                        var3 = var4.bind(var5)(var3);
                    case 200:
                        return var2;
                    case 203:
                        return var1;
                    case 206:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot15 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun49988: for (var _fun49988_ip = 0;;) switch (_fun49988_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun49988_ip = 69;
                        continue _fun49988
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun49988_ip = 105;
                    continue _fun49988;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var5 = var3.waitFor;
            var9 = _closure1_slot9;
            var4 = _closure1_slot11;
            var7 = _closure1_slot10;
            var0 = _closure1_slot12;
            var10 = var3;
            var8 = var4;
            var6 = var0;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            var2 = var3.syncWith;
            var1 = new Array(2);
            var1[0] = var4;
            var1[1] = var0;
            var0 = function() { // Environment: var0
                var0 = true;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(14);
        var0[0] = var4;
        var4 = {};
        var6 = 'isLoaded';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot14;
            var0 = _closure1_slot13;
            var0 = var0.Unloaded;
            var0 = var1 !== var0;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'loadState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getStickerMetadataArrays';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot15;
            var0 = undefined;
            var0 = var2.bind(var0)();
            var2 = _closure1_slot11;
            var0 = var2.getStickerMetadataMap;
            var2 = var0.bind(var2)();
            var0 = new Array(2);
            var0[0] = var2;
            var2 = _closure1_slot12;
            var1 = var2.getStickerMetadataMap;
            var1 = var1.bind(var2)();
            var0[1] = var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasLoadedStickerPacks';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var0 = var0.hasLoadedStickerPacks;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetchingStickerPacks';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var0 = var0.isFetchingStickerPacks;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getStickerById';
        var4.key = var6;
        var6 = function arg0() {
            _fun49996: for (var _fun49996_ip = 0;;) switch (_fun49996_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot15;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var2 = _closure1_slot11;
                    var0 = var2.getStickerById;
                    var0 = var0.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun49996_ip = 52;
                        continue _fun49996
                    }
                case 37:
                    var2 = _closure1_slot12;
                    var1 = var2.getStickerById;
                    var0 = var1.bind(var2)(var3);
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getStickerPack';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.getStickerPack;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getPremiumPacks';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot12;
            var0 = var1.getPremiumPacks;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isPremiumPack';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.isPremiumPack;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getRawStickersByGuild';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var0 = var1.getAllGuildStickers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAllGuildStickers';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = _closure1_slot11;
            var0 = var1.getAllGuildStickers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getAllPackStickers';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot12;
            var0 = var1.getAllPackStickers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getStickersByGuildId';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var2 = _closure1_slot11;
            var1 = var2.getStickersByGuildId;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[13] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'StickersStore';
    var7.displayName = var1;
    var1 = 14;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = _closure1_slot13;
        var0 = var0.Unloaded;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.BACKGROUND_SYNC = var8;
    var8 = function arg0() {
        _fun50005: for (var _fun50005_ip = 0;;) switch (_fun50005_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guilds;
                var1 = var2.every;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.stickers;
                    var1 = var0.items;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot13;
                if (var0) {
                    _fun50005_ip = 45;
                    continue _fun50005
                }
            case 37:
                var0 = var2.Unloaded;
                _fun50005_ip = 51;
                continue _fun50005;
            case 45:
                var0 = var2.MaybeLoaded;
            case 51:
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun50007: for (var _fun50007_ip = 0;;) switch (_fun50007_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var3 = _closure1_slot14;
                var0 = _closure1_slot13;
                var0 = var0.MaybeLoaded;
                var0 = var3 === var0;
                if (!var0) {
                    _fun50007_ip = 51;
                    continue _fun50007
                }
            case 32:
                var3 = var2.stickers;
                var4 = var3.op;
                var3 = 'update';
                var0 = var3 === var4;
            case 51:
                if (!var0) {
                    _fun50007_ip = 71;
                    continue _fun50007
                }
            case 54:
                var2 = var2.stickers;
                var3 = var2.items;
                var2 = null;
                var0 = var2 == var3;
            case 71:
                if (!var0) {
                    _fun50007_ip = 88;
                    continue _fun50007
                }
            case 74:
                var0 = _closure1_slot13;
                var0 = var0.Unloaded;
                _closure1_slot14 = var0;
            case 88:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_CREATE = var8;
    var3 = function() {
        var0 = _closure1_slot13;
        var0 = var0.Unloaded;
        _closure1_slot14 = var0;
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
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/StickersStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 1374, 1410, 5646, 5647, 1648, 1667, 20, 5648, 806, 566, 2]);