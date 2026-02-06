// modules/stickers/StickersActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var12;
    var0 = function arg0() {
        _fun74519: for (var _fun74519_ip = 0;;) switch (_fun74519_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot6;
                var3 = var0.totalUnavailableGuilds;
                var2 = 0;
                var0 = var4;
                if (!(!(var3 > var2))) {
                    _fun74519_ip = 67;
                    continue _fun74519
                }
            case 25:
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var2 = var1.bind(var2)();
                var1 = var4;
                if (!var2) {
                    _fun74519_ip = 64;
                    continue _fun74519
                }
            case 45:
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.getStickerById;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var12[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var12[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var12[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var12[var3];
    var3 = var11.bind(var0)(var3);
    var4 = var3.MAX_FAVORITES;
    var _closure1_slot10 = var4;
    var3 = var3.UserSettingsDelay;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun74523: for (var _fun74523_ip = 0;;) switch (_fun74523_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74523_ip = 159;
                            continue _fun74523
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.httpGetWithCountryCodeQuery;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.STICKER_PACK;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun74523_ip = 156;
                            continue _fun74523
                        }
                    case 86:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 9;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'STICKER_PACK_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.packId = var6;
                        var3.pack = var2;
                        var6 = arg1;
                        var3.ingestStickers = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 156:
                        return var1;
                    case 159:
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
    var9 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun74527: for (var _fun74527_ip = 0;;) switch (_fun74527_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun74527_ip = 275;
                            continue _fun74527
                        }
                    case 13:
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun74527_ip = 21;
                            continue _fun74527
                        }
                    case 19:
                        var1 = {};
                    case 21:
                        var9 = var1.locale;
                        if (!(var9 === var2)) {
                            _fun74527_ip = 44;
                            continue _fun74527
                        }
                    case 31:
                        var1 = _closure1_slot5;
                        var9 = var1.locale;
                    case 44:
                        SaveGenerator(address = 48);
                    case 46:
                        return var2;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun74527_ip = 272;
                            continue _fun74527
                        }
                    case 57:
                        var3 = _closure1_slot8;
                        var3 = var3.isFetchingStickerPacks;
                        if (var3) {
                            _fun74527_ip = 269;
                            continue _fun74527
                        }
                    case 76:
                        var3 = _closure1_slot8;
                        var3 = var3.hasLoadedStickerPacks;
                        if (var3) {
                            _fun74527_ip = 269;
                            continue _fun74527
                        }
                    case 92:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var6 = 9;
                        var3 = var7[var6];
                        var8 = var5.bind(var2)(var3);
                        var5 = var8.wait;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'STICKER_PACKS_FETCH_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var5.bind(var8)(var3);
                        var5 = _closure1_slot0;
                        var3 = 10;
                        var3 = var7[var3];
                        var3 = var5.bind(var2)(var3);
                        var7 = var3.HTTP;
                        var5 = var7.get;
                        var3 = {};
                        var8 = _closure1_slot9;
                        var8 = var8.STICKER_PACKS;
                        var3.url = var8;
                        var8 = {};
                        var8.locale = var9;
                        var3.query = var8;
                        var8 = false;
                        var3.rejectWithError = var8;
                        var3 = var5.bind(var7)(var3);
                        SaveGenerator(address = 201);
                    case 199:
                        return var3;
                    case 201:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun74527_ip = 266;
                            continue _fun74527
                        }
                    case 207:
                        var5 = var3.body;
                        var7 = var5.sticker_packs;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'STICKER_PACKS_FETCH_SUCCESS';
                        var4.type = var8;
                        var4.packs = var7;
                        var4 = var5.bind(var6)(var4);
                        _fun74527_ip = 269;
                        continue _fun74527;
                    case 266:
                        return var3;
                    case 269:
                        return var2;
                    case 272:
                        return var1;
                    case 275:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var8 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun74532: for (var _fun74532_ip = 0;;) switch (_fun74532_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74532_ip = 301;
                            continue _fun74532
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.STICKER;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun74532_ip = 298;
                            continue _fun74532
                        }
                    case 93:
                        var6 = var1.body;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 11;
                        var4 = var4[var7];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.isGuildSticker;
                        var4 = var4.bind(var5)(var6);
                        if (var4) {
                            _fun74532_ip = 248;
                            continue _fun74532
                        }
                    case 132:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.isStandardSticker;
                        var4 = var4.bind(var5)(var6);
                        if (var4) {
                            _fun74532_ip = 199;
                            continue _fun74532
                        }
                    case 163:
                        var4 = global;
                        var7 = var4.Error;
                        var4 = var7.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var7
                            }
                        });
                        var9 = 'Invalid sticker type';
                        var10 = var5;
                        var4 = new var10[var7](var9, var8);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 199:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var7 = var5.bind(var2)(var4);
                        var5 = var7.dispatch;
                        var4 = {};
                        var8 = 'PACK_STICKER_FETCH_SUCCESS';
                        var4.type = var8;
                        var4.sticker = var6;
                        var4 = var5.bind(var7)(var4);
                        _fun74532_ip = 295;
                        continue _fun74532;
                    case 248:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_STICKER_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.sticker = var6;
                        var3 = var4.bind(var5)(var3);
                    case 295:
                        return var2;
                    case 298:
                        return var1;
                    case 301:
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
    var7 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun74536: for (var _fun74536_ip = 0;;) switch (_fun74536_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74536_ip = 177;
                            continue _fun74536
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.GUILD_STICKER_PACKS;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var7 = arg1;
                        var1.signal = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun74536_ip = 174;
                            continue _fun74536
                        }
                    case 98:
                        var8 = var1.body;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_STICKERS_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.guildId = var6;
                        var7 = var8.map;
                        var6 = function(arg0) { // Environment: var6
                            _fun74537: for (var _fun74537_ip = 0;;) switch (_fun74537_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = var2.user;
                                    var1 = null;
                                    var0 = var2;
                                    if (!(var1 != var3)) {
                                        _fun74537_ip = 65;
                                        continue _fun74537
                                    }
                                case 17:
                                    var1 = {};
                                    var6 = var1;
                                    var5 = var2;
                                    var3 = copyDataProperties(var6, var5);
                                    var3 = var2.user;
                                    var4 = var3.id;
                                    var3 = 'user_id';
                                    var1[var3] = var4;
                                    var3 = var2.user;
                                    var2 = 'user';
                                    var1[var2] = var3;
                                    var0 = var1;
                                case 65:
                                    return var0;
                            }
                        };
                        var6 = var7.bind(var8)(var6);
                        var3.stickers = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 174:
                        return var1;
                    case 177:
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
    var6 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun74541: for (var _fun74541_ip = 0;;) switch (_fun74541_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74541_ip = 105;
                            continue _fun74541
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = var8.GUILD_STICKER;
                        var6 = var5.guild_id;
                        var5 = var5.id;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun74541_ip = 102;
                            continue _fun74541
                        }
                    case 99:
                        return var2;
                    case 102:
                        return var1;
                    case 105:
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
    var5 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun74545: for (var _fun74545_ip = 0;;) switch (_fun74545_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74545_ip = 406;
                            continue _fun74545
                        }
                    case 13:
                        var5 = var10.guildId;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var7 = undefined;
                        var1 = var2.bind(var7)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var4 = var8.GUILD_STICKER_PACKS;
                        var4 = var4.bind(var8)(var5);
                        var1.url = var4;
                        var9 = var10.platform;
                        var8 = 'web';
                        var4 = undefined;
                        if (!(var8 === var9)) {
                            _fun74545_ip = 96;
                            continue _fun74545
                        }
                    case 91:
                        var4 = var10.body;
                    case 96:
                        var1.body = var4;
                        var8 = var10.platform;
                        var9 = 'mobile';
                        var4 = undefined;
                        if (!(var9 === var8)) {
                            _fun74545_ip = 193;
                            continue _fun74545
                        }
                    case 116:
                        var11 = {};
                        var8 = 'name';
                        var11.name = var8;
                        var8 = var10.name;
                        var11.value = var8;
                        var8 = new Array(3);
                        var8[0] = var11;
                        var11 = {};
                        var12 = 'tags';
                        var11.name = var12;
                        var12 = var10.tags;
                        var11.value = var12;
                        var8[1] = var11;
                        var11 = {};
                        var12 = 'description';
                        var11.name = var12;
                        var12 = var10.description;
                        var11.value = var12;
                        var8[2] = var11;
                        var4 = var8;
                    case 193:
                        var1.fields = var4;
                        var8 = var10.platform;
                        var4 = undefined;
                        if (!(var9 === var8)) {
                            _fun74545_ip = 266;
                            continue _fun74545
                        }
                    case 210:
                        var9 = {};
                        var8 = 'file';
                        var9.name = var8;
                        var8 = {};
                        var11 = var10.uri;
                        var8.uri = var11;
                        var11 = var10.name;
                        var8.name = var11;
                        var10 = var10.mimeType;
                        var8.type = var10;
                        var9.file = var8;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var4 = var8;
                    case 266:
                        var1.attachments = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 286);
                    case 284:
                        return var1;
                    case 286:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun74545_ip = 403;
                            continue _fun74545
                        }
                    case 292:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var2 = var4[var2];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var8 = 'GUILD_STICKERS_CREATE_SUCCESS';
                        var2.type = var8;
                        var2.guildId = var5;
                        var5 = {};
                        var13 = var1.body;
                        var14 = var5;
                        var8 = copyDataProperties(var14, var13);
                        var8 = _closure1_slot7;
                        var6 = var8.getCurrentUser;
                        var6 = var6.bind(var8)();
                        var8 = null;
                        var8 = var8 == var6;
                        var7 = undefined;
                        if (var8) {
                            _fun74545_ip = 376;
                            continue _fun74545
                        }
                    case 371:
                        var7 = var6.id;
                    case 376:
                        var6 = 'user_id';
                        var5[var6] = var7;
                        var2.sticker = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.body;
                        return var2;
                    case 403:
                        return var1;
                    case 406:
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
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun74549: for (var _fun74549_ip = 0;;) switch (_fun74549_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun74549_ip = 110;
                            continue _fun74549
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var7 = _closure1_slot9;
                        var6 = var7.GUILD_STICKER;
                        var5 = arg0;
                        var4 = arg1;
                        var4 = var6.bind(var7)(var5, var4);
                        var1.url = var4;
                        var4 = arg2;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun74549_ip = 107;
                            continue _fun74549
                        }
                    case 99:
                        var2 = var1.body;
                        return var2;
                    case 107:
                        return var1;
                    case 110:
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
    var3 = var3.bind(var0)();
    var10 = 16;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/stickers/StickersActionCreators.tsx';
    var10 = var11.bind(var12)(var10);
    var2.fetchStickerPack = var9;
    var2.fetchStickerPacks = var8;
    var2.fetchSticker = var7;
    var2.fetchGuildStickersWithCreator = var6;
    var2.deleteGuildSticker = var5;
    var2.createGuildSticker = var4;
    var2.updateGuildSticker = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ADD_STICKER_PREVIEW';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.sticker = var4;
        var4 = arg2;
        var1.draftType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addStickerPreview = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_STICKER_PREVIEW';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.draftType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearStickerPreview = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 12;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot11;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteStickers';
        var1 = function(arg0) { // Environment: var1
            _fun74554: for (var _fun74554_ip = 0;;) switch (_fun74554_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure1_slot12;
                    var0 = var2.stickerIds;
                    var9 = undefined;
                    var0 = var1.bind(var9)(var0);
                    var2.stickerIds = var0;
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var0 = var3[var0];
                    var3 = var1.bind(var9)(var0);
                    var1 = var3.size;
                    var0 = var2.stickerIds;
                    var1 = var1.bind(var3)(var0);
                    var0 = _closure1_slot10;
                    if (!(!(var1 >= var0))) {
                        _fun74554_ip = 129;
                        continue _fun74554
                    }
                case 73:
                    var4 = var2.stickerIds;
                    var3 = var4.includes;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var4)(var0);
                    var0 = !var0;
                    if (!var0) {
                        _fun74554_ip = 124;
                        continue _fun74554
                    }
                case 102:
                    var3 = var2.stickerIds;
                    var2 = var3.push;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0 = undefined;
                case 124:
                    _fun74554_ip = 279;
                    continue _fun74554;
                case 129:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 14;
                    var1 = var10[var1];
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 15;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6["+XYXtZ"];
                    var6 = var7.bind(var11)(var6);
                    var1.title = var6;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.t;
                    var5 = var4.JaIyFi;
                    var4 = {};
                    var8 = _closure1_slot10;
                    var4.count = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = false;
                case 279:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.favoriteSticker = var3;
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 12;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot11;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteStickers';
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var3 = var2.stickerIds;
            var1 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure2_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var2.stickerIds = var0;
            var3 = _closure1_slot12;
            var1 = var2.stickerIds;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var2.stickerIds = var1;
            return var0;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.unfavoriteSticker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3476, 1685, 4002, 1621, 5598, 660, 665, 3363, 806, 507, 3999, 1355, 22, 4003, 1234, 2]);