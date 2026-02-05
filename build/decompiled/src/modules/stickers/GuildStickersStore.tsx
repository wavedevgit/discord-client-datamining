// modules/stickers/GuildStickersStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun49551: for (var _fun49551_ip = 0;;) switch (_fun49551_ip) {
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
                _fun49551_ip = 74;
                continue _fun49551;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function arg0, arg1() {
        _fun49554: for (var _fun49554_ip = 0;;) switch (_fun49554_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49554_ip = 46;
                    continue _fun49554
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49554_ip = 55;
                    continue _fun49554
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49554_ip = 343;
                    continue _fun49554
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49554_ip = 323;
                    continue _fun49554
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49554_ip = 283;
                    continue _fun49554
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49554_ip = 270;
                    continue _fun49554
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
                    _fun49554_ip = 163;
                    continue _fun49554
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49554_ip = 179;
                    continue _fun49554
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49554_ip = 249;
                    continue _fun49554
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49554_ip = 249;
                    continue _fun49554
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49554_ip = 234;
                    continue _fun49554
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49554_ip = 247;
                    continue _fun49554
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49554_ip = 265;
                continue _fun49554;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49554_ip = 283;
                continue _fun49554;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49554_ip = 323;
                    continue _fun49554
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
                    _fun49554_ip = 330;
                    continue _fun49554
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49555: for (var _fun49555_ip = 0;;) switch (_fun49555_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49555_ip = 56;
                                continue _fun49555
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
                            _fun49555_ip = 67;
                            continue _fun49555;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun49556: for (var _fun49556_ip = 0;;) switch (_fun49556_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49556_ip = 23;
                    continue _fun49556
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49556_ip = 33;
                    continue _fun49556
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
                    _fun49556_ip = 70;
                    continue _fun49556
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49556_ip = 55;
                    continue _fun49556
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.tags;
        var0.tags = var2;
        var2 = var1.type;
        var0.type = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = var1.description;
        var0.description = var2;
        var2 = var1.format_type;
        var0.format_type = var2;
        var2 = var1.guild_id;
        var0.guild_id = var2;
        var2 = var1.available;
        var0.available = var2;
        var2 = var1.version;
        var0.version = var2;
        var1 = var1.user_id;
        var0.user_id = var1;
        var2 = _closure1_slot9;
        var1 = 'GuildSticker';
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun49558: for (var _fun49558_ip = 0;;) switch (_fun49558_ip) {
            case 0:
                var0 = {};
                var2 = _closure1_slot12;
                var4 = undefined;
                var1 = arg0;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun49558_ip = 69;
                    continue _fun49558
                }
            case 31:
                var7 = var2.value;
                var6 = var7.id;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)(var7);
                var0[var6] = var1;
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun49558_ip = 31;
                    continue _fun49558
                }
            case 69:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun49559: for (var _fun49559_ip = 0;;) switch (_fun49559_ip) {
            case 0:
                var2 = arg1;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var6 = var2.tags;
                var3 = {};
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = 9;
                var4 = var4[var8];
                var7 = undefined;
                var4 = var9.bind(var7)(var4);
                var4 = var4.StickerMetadataTypes;
                var4 = var4.STICKER_NAME;
                var3.type = var4;
                var4 = var2.name;
                var2 = var4.trim;
                var4 = var2.bind(var4)();
                var2 = var4.toLocaleLowerCase;
                var2 = var2.bind(var4)();
                var3.value = var2;
                var2 = var0.push;
                var2 = var2.bind(var0)(var3);
                var2 = null;
                if (!(var2 != var6)) {
                    _fun49559_ip = 399;
                    continue _fun49559
                }
            case 110:
                var4 = {};
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var9.bind(var7)(var3);
                var3 = var3.StickerMetadataTypes;
                var3 = var3.TAG;
                var4.type = var3;
                var3 = var6.trim;
                var9 = var3.bind(var6)();
                var3 = var9.toLocaleLowerCase;
                var3 = var3.bind(var9)();
                var4.value = var3;
                var3 = var0.push;
                var3 = var3.bind(var0)(var4);
                var9 = _closure1_slot10;
                var4 = var9.getGuild;
                var3 = arg0;
                var3 = var4.bind(var9)(var3);
                if (!(var2 != var3)) {
                    _fun49559_ip = 292;
                    continue _fun49559
                }
            case 200:
                var4 = var3.name;
                var3 = var4.trim;
                var4 = var3.bind(var4)();
                var3 = var4.toLocaleLowerCase;
                var9 = var3.bind(var4)();
                var3 = var2 != var9;
                if (!var3) {
                    _fun49559_ip = 240;
                    continue _fun49559
                }
            case 232:
                var4 = '';
                var3 = var4 !== var9;
            case 240:
                if (!var3) {
                    _fun49559_ip = 292;
                    continue _fun49559
                }
            case 243:
                var4 = var0.push;
                var3 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var8];
                var10 = var11.bind(var7)(var10);
                var10 = var10.StickerMetadataTypes;
                var10 = var10.GUILD_NAME;
                var3.type = var10;
                var3.value = var9;
                var3 = var4.bind(var0)(var3);
            case 292:
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 10;
                var3 = var9[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.getByName;
                var3 = var3.bind(var4)(var6);
                if (!(var2 != var3)) {
                    _fun49559_ip = 399;
                    continue _fun49559
                }
            case 327:
                var4 = var0.push;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var5 = var5.StickerMetadataTypes;
                var5 = var5.CORRELATED_EMOJI;
                var2.type = var5;
                var5 = var3.surrogates;
                var2.value = var5;
                var2 = var4.bind(var0)(var2);
                var2 = var3.forEachDiversity;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.StickerMetadataTypes;
                    var3 = var3.CORRELATED_EMOJI;
                    var0.type = var3;
                    var3 = arg0;
                    var3 = var3.surrogates;
                    var0.value = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 399:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TypeTag;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LibdiscoreStore;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun49562: for (var _fun49562_ip = 0;;) switch (_fun49562_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun49562_ip = 86;
                        continue _fun49562
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun49562_ip = 120;
                    continue _fun49562;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var3 = var0.addKKVDatabase;
                    var2 = 'guildStickers';
                    var2 = var3.bind(var0)(var2);
                    var0.database = var2;
                    var4 = var0.database;
                    var3 = var4.addSecondaryKVIndex;
                    var2 = 'id';
                    var2 = var3.bind(var4)(var2);
                    var0.stickerByIdIndex = var2;
                    var4 = var0.database;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        _fun49563: for (var _fun49563_ip = 0;;) switch (_fun49563_ip) {
                            case 0:
                                var7 = arg0;
                                var6 = global;
                                var0 = var6.Map;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var15 = var1;
                                var0 = new var15[var0](var14);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var4 = var7;
                                for (var1 in var4)
                                    case 42: {
                                        case 51: var10 = var1;
                                        var9 = var0.set;
                                        var12 = var6.Object;
                                        var11 = var12.values;
                                        var8 = var7[var10];
                                        var8 = var8.root;
                                        var8 = var11.bind(var12)(var8);
                                        var8 = var9.bind(var0)(var10, var8);
                                        _fun49563_ip = 42;
                                        continue _fun49563;
                                    }
                            case 93:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getAllGuildStickers = var2;
                    var4 = var0.database;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        _fun49564: for (var _fun49564_ip = 0;;) switch (_fun49564_ip) {
                            case 0:
                                var16 = arg0;
                                var15 = global;
                                var0 = var15.Map;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var22 = var1;
                                var0 = new var22[var0](var21);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var13 = var16;
                                var9 = 0;
                                var7 = undefined;
                                var6 = 2;
                                var5 = 1;
                                for (var10 in var13)
                                    case 55: {
                                        case 64: var4 = var10;
                                        var3 = var15.Object;
                                        var2 = var3.entries;
                                        var1 = var16[var4];
                                        var1 = var1.root;
                                        var3 = var2.bind(var3)(var1);
                                        var1 = var3.length;
                                        var1 = var9 < var1;
                                        var2 = 0;
                                        if (!var1) {
                                            _fun49564_ip = 55;
                                            continue _fun49564
                                        }
                                        case 108: var17 = var3[var2];
                                        var1 = _closure1_slot3;
                                        var1 = var1.bind(var7)(var17, var6);
                                        var18 = var1[var9];
                                        var19 = var1[var5];
                                        var17 = var0.set;
                                        var1 = _closure1_slot16;
                                        var1 = var1.bind(var7)(var4, var19);
                                        var1 = var17.bind(var0)(var18, var1);
                                        var2 = var2 + 1;
                                        var1 = var3.length;
                                        if (var2 < var1) {
                                            _fun49564_ip = 108;
                                            continue _fun49564
                                        }
                                        case 163: _fun49564_ip = 55;
                                        continue _fun49564;
                                    }
                            case 165:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getStickerMetadataMap = var2;
                    var3 = var0.database;
                    var2 = var3.memoizedPartition;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.values;
                        var0 = arg1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.getStickersByGuildId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'getStickerById';
        var4.key = var0;
        var0 = function arg0() {
            _fun49566: for (var _fun49566_ip = 0;;) switch (_fun49566_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.stickerByIdIndex;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun49566_ip = 36;
                        continue _fun49566
                    }
                case 33:
                    var0 = var1;
                case 36:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'stateWrapper';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var0 = var0.database;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var6);
    var3 = 'GuildStickersStore';
    var7.displayName = var3;
    var6 = {};
    var3 = function arg0, arg1() {
        var1 = arg1;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.LOGOUT = var3;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.BACKGROUND_SYNC = var3;
    var3 = function arg0, arg1() {
        _fun49570: for (var _fun49570_ip = 0;;) switch (_fun49570_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = global;
                var2 = var0.Set;
                var0 = var4.getPartitionKeys;
                var13 = var0.bind(var4)();
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var2 = var0 instanceof Object ? var0 : var1;
                var6 = _closure1_slot12;
                var5 = var3.guilds;
                var0 = undefined;
                var8 = var6.bind(var0)(var5);
                var6 = var8.bind(var0)();
                var5 = var6.done;
                var7 = null;
                if (var5) {
                    _fun49570_ip = 165;
                    continue _fun49570
                }
            case 78:
                var5 = var6.value;
                var10 = var2.delete;
                var9 = var5.id;
                var9 = var10.bind(var2)(var9);
                var9 = var5.stickers;
                var9 = var9.items;
                if (!(var7 != var9)) {
                    _fun49570_ip = 150;
                    continue _fun49570
                }
            case 113:
                var10 = var4.setPartition;
                var9 = var5.id;
                var11 = _closure1_slot15;
                var5 = var5.stickers;
                var5 = var5.items;
                var5 = var11.bind(var0)(var5);
                var5 = var10.bind(var4)(var9, var5);
            case 150:
                var9 = var8.bind(var0)();
                var5 = var9.done;
                var6 = var9;
                if (!var5) {
                    _fun49570_ip = 78;
                    continue _fun49570
                }
            case 165:
                var5 = _closure1_slot12;
                var3 = var3.unavailableGuilds;
                var6 = var5.bind(var0)(var3);
                var5 = var6.bind(var0)();
                var3 = var5.done;
                if (var3) {
                    _fun49570_ip = 222;
                    continue _fun49570
                }
            case 192:
                var7 = var5.value;
                var3 = var2.delete;
                var3 = var3.bind(var2)(var7);
                var7 = var6.bind(var0)();
                var3 = var7.done;
                var5 = var7;
                if (!var3) {
                    _fun49570_ip = 192;
                    continue _fun49570
                }
            case 222:
                var1 = _closure1_slot12;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun49570_ip = 274;
                    continue _fun49570
                }
            case 243:
                var5 = var2.value;
                var1 = var4.removePartition;
                var1 = var1.bind(var4)(var5);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun49570_ip = 243;
                    continue _fun49570
                }
            case 274:
                return var0;
        }
    };
    var6.CONNECTION_OPEN = var3;
    var3 = function arg0, arg1() {
        _fun49571: for (var _fun49571_ip = 0;;) switch (_fun49571_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = var6.guild;
                var0 = var0.joined_at;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun49571_ip = 114;
                    continue _fun49571
                }
            case 26:
                var1 = var6.guild;
                var1 = var1.stickers;
                var1 = var1.items;
                var1 = var2 != var1;
                if (!var1) {
                    _fun49571_ip = 111;
                    continue _fun49571
                }
            case 49:
                var4 = var5.setPartition;
                var3 = var6.guild;
                var3 = var3.id;
                var7 = _closure1_slot15;
                var6 = var6.guild;
                var6 = var6.stickers;
                var6 = var6.items;
                if (!(var2 == var6)) {
                    _fun49571_ip = 96;
                    continue _fun49571
                }
            case 92:
                var6 = new Array(0);
            case 96:
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var4.bind(var5)(var3, var2);
                var1 = undefined;
            case 111:
                var0 = var1;
            case 114:
                return var0;
        }
    };
    var6.GUILD_CREATE = var3;
    var3 = function arg0, arg1() {
        var2 = arg1;
        var1 = var2.removePartition;
        var0 = arg0;
        var0 = var0.guild;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6.GUILD_DELETE = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var5 = arg1;
        var4 = var5.setRecord;
        var3 = var0.guildId;
        var1 = var0.sticker;
        var2 = var1.id;
        var6 = _closure1_slot14;
        var1 = var0.sticker;
        var0 = undefined;
        var1 = var6.bind(var0)(var1);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var6.GUILD_STICKERS_CREATE_SUCCESS = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var5 = arg1;
        var4 = var5.setRecord;
        var1 = var0.sticker;
        var3 = var1.guild_id;
        var1 = var0.sticker;
        var2 = var1.id;
        var6 = _closure1_slot14;
        var1 = var0.sticker;
        var0 = undefined;
        var1 = var6.bind(var0)(var1);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var6.GUILD_STICKER_FETCH_SUCCESS = var3;
    var3 = function arg0, arg1() {
        _fun49575: for (var _fun49575_ip = 0;;) switch (_fun49575_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = var4.getPartition;
                var0 = var1.guildId;
                var11 = var2.bind(var4)(var0);
                var3 = _closure1_slot15;
                var2 = var1.stickers;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var10 = null;
                if (!(var10 != var11)) {
                    _fun49575_ip = 145;
                    continue _fun49575
                }
            case 48:
                var8 = var3;
                var2 = 'user_id';
                for (var5 in var8)
                    case 63: {
                        case 72: var13 = var5;
                        var15 = var3[var13];
                        var14 = var11[var13];
                        var12 = var10 != var14;
                        if (!var12) {
                            _fun49575_ip = 100;
                            continue _fun49575
                        }
                        case 90: var16 = var15.user_id;
                        var12 = var10 == var16;
                        case 100: if (!var12) {
                            _fun49575_ip = 113;
                            continue _fun49575
                        }
                        case 103: var16 = var14.user_id;
                        var12 = var10 != var16;
                        case 113: if (!var12) {
                            _fun49575_ip = 63;
                            continue _fun49575
                        }
                        case 116: var12 = {};
                        var18 = var12;
                        var17 = var15;
                        var15 = copyDataProperties(var18, var17);
                        var14 = var14.user_id;
                        var12[var2] = var14;
                        var3[var13] = var12;
                        _fun49575_ip = 63;
                        continue _fun49575;
                    }
            case 145:
                var2 = var4.setPartition;
                var1 = var1.guildId;
                var1 = var2.bind(var4)(var1, var3);
                return var0;
        }
    };
    var6.GUILD_STICKERS_UPDATE = var3;
    var3 = function arg0, arg1() {
        _fun49576: for (var _fun49576_ip = 0;;) switch (_fun49576_ip) {
            case 0:
                var8 = arg1;
                var2 = _closure1_slot12;
                var0 = arg0;
                var1 = var0.stickers;
                var0 = undefined;
                var6 = var2.bind(var0)(var1);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun49576_ip = 105;
                    continue _fun49576
                }
            case 46:
                var9 = var2.value;
                var1 = _closure1_slot3;
                var1 = var1.bind(var0)(var9, var5);
                var10 = var1[var4];
                var11 = var1[var3];
                var9 = var8.setPartition;
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)(var11);
                var1 = var9.bind(var8)(var10, var1);
                var9 = var6.bind(var0)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun49576_ip = 46;
                    continue _fun49576
                }
            case 105:
                return var0;
        }
    };
    var6.CACHED_STICKERS_LOADED = var3;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var4 = arg1;
        var3 = var4.setPartition;
        var2 = var0.guildId;
        var5 = _closure1_slot15;
        var1 = var0.stickers;
        var0 = undefined;
        var1 = var5.bind(var0)(var1);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6.GUILD_STICKERS_FETCH_SUCCESS = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.LibdiscoreBatchStoreRefactorExperiment;
    var1 = var3.getCachedBridgedStoreMode;
    var10 = var1.bind(var3)();
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var11 = var6;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/GuildStickersStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1412, 1414, 1410, 4219, 3104, 1613, 2]);