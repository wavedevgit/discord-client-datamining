// modules/stickers/StickersPackStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun49381: for (var _fun49381_ip = 0;;) switch (_fun49381_ip) {
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
                _fun49381_ip = 74;
                continue _fun49381;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun49384: for (var _fun49384_ip = 0;;) switch (_fun49384_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49384_ip = 45;
                    continue _fun49384
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun49384_ip = 54;
                    continue _fun49384
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun49384_ip = 342;
                    continue _fun49384
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49384_ip = 322;
                    continue _fun49384
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49384_ip = 282;
                    continue _fun49384
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49384_ip = 269;
                    continue _fun49384
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
                    _fun49384_ip = 162;
                    continue _fun49384
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun49384_ip = 178;
                    continue _fun49384
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49384_ip = 248;
                    continue _fun49384
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49384_ip = 248;
                    continue _fun49384
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49384_ip = 233;
                    continue _fun49384
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49384_ip = 246;
                    continue _fun49384
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun49384_ip = 264;
                continue _fun49384;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun49384_ip = 282;
                continue _fun49384;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun49384_ip = 322;
                    continue _fun49384
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
                    _fun49384_ip = 329;
                    continue _fun49384
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49385: for (var _fun49385_ip = 0;;) switch (_fun49385_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49385_ip = 56;
                                continue _fun49385
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
                            _fun49385_ip = 67;
                            continue _fun49385;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun49386: for (var _fun49386_ip = 0;;) switch (_fun49386_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49386_ip = 23;
                    continue _fun49386
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49386_ip = 33;
                    continue _fun49386
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
                    _fun49386_ip = 70;
                    continue _fun49386
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49386_ip = 55;
                    continue _fun49386
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: parseServerPackSticker, environment: var3
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
        var1 = var1.pack_id;
        var0.pack_id = var1;
        var2 = _closure1_slot8;
        var1 = 'PackSticker';
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: deriveStickerMetadata, environment: var3
        _fun49388: for (var _fun49388_ip = 0;;) switch (_fun49388_ip) {
            case 0:
                var3 = arg1;
                var0 = new Array(0);
                var2 = {};
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 9;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var5.bind(var6)(var1);
                var1 = var1.StickerMetadataTypes;
                var1 = var1.STICKER_NAME;
                var2.type = var1;
                var1 = arg0;
                var5 = var1.name;
                var1 = var5.trim;
                var5 = var1.bind(var5)();
                var1 = var5.toLocaleLowerCase;
                var1 = var1.bind(var5)();
                var2.value = var1;
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun49388_ip = 152;
                    continue _fun49388
                }
            case 98:
                var2 = var0.push;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.StickerMetadataTypes;
                var4 = var4.PACK_NAME;
                var1.type = var4;
                var3 = var3.name;
                var1.value = var3;
                var1 = var2.bind(var0)(var1);
            case 152:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: ingestStickerPack, environment: var3
        _fun49389: for (var _fun49389_ip = 0;;) switch (_fun49389_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var5 = arg2;
                var3 = arg3;
                var2 = var5.set;
                var1 = var0.id;
                var1 = var2.bind(var5)(var1, var0);
                var1 = arg4;
                if (!var1) {
                    _fun49389_ip = 50;
                    continue _fun49389
                }
            case 34:
                var2 = var3.set;
                var1 = var0.id;
                var1 = var2.bind(var3)(var1, var0);
            case 50:
                var3 = var4.setPartition;
                var2 = var0.id;
                var6 = var0.stickers;
                var1 = {};
                var5 = _closure1_slot13;
                var0 = undefined;
                var7 = var5.bind(var0)(var6);
                var6 = var7.bind(var0)();
                var5 = var6.done;
                if (var5) {
                    _fun49389_ip = 133;
                    continue _fun49389
                }
            case 95:
                var10 = var6.value;
                var9 = var10.id;
                var5 = _closure1_slot15;
                var5 = var5.bind(var0)(var10);
                var1[var9] = var5;
                var9 = var7.bind(var0)();
                var5 = var9.done;
                var6 = var9;
                if (!var5) {
                    _fun49389_ip = 95;
                    continue _fun49389
                }
            case 133:
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.TypeTag;
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.LibdiscoreStore;
    var1 = false;
    var _closure1_slot9 = var1;
    var1 = null;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.HOUR;
    var _closure1_slot11 = var1;
    var1 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: StickersPackStore, environment: var5
            _fun49391: for (var _fun49391_ip = 0;;) switch (_fun49391_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun49391_ip = 86;
                        continue _fun49391
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun49391_ip = 120;
                    continue _fun49391;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var3 = var0.addKVDatabase;
                    var2 = 'stickerPacks';
                    var2 = var3.bind(var0)(var2);
                    var0.packsDatabase = var2;
                    var3 = var0.addKKVDatabase;
                    var2 = 'packStickers';
                    var2 = var3.bind(var0)(var2);
                    var0.packStickersDatabase = var2;
                    var4 = var0.packStickersDatabase;
                    var3 = var4.addSecondaryKVIndex;
                    var2 = 'id';
                    var2 = var3.bind(var4)(var2);
                    var0.packStickerByIdIndex = var2;
                    var3 = var0.addKVDatabase;
                    var2 = 'premiumPacks';
                    var2 = var3.bind(var0)(var2);
                    var0.premiumPacksDatabase = var2;
                    var4 = var0.packStickersDatabase;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        _fun49392: for (var _fun49392_ip = 0;;) switch (_fun49392_ip) {
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
                                        _fun49392_ip = 42;
                                        continue _fun49392;
                                    }
                            case 93:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getAllPackStickers = var2;
                    var4 = var0.packStickersDatabase;
                    var3 = var4.memoized;
                    var2 = function(arg0) { // Environment: var1
                        _fun49393: for (var _fun49393_ip = 0;;) switch (_fun49393_ip) {
                            case 0:
                                var17 = arg0;
                                var16 = global;
                                var0 = var16.Map;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var24 = var1;
                                var0 = new var24[var0](var23);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var14 = var17;
                                var10 = 0;
                                var8 = undefined;
                                var7 = 2;
                                var6 = 1;
                                for (var11 in var14)
                                    case 61: {
                                        case 73: var4 = var11;
                                        var3 = var16.Object;
                                        var2 = var3.entries;
                                        var1 = var17[var4];
                                        var1 = var1.root;
                                        var3 = var2.bind(var3)(var1);
                                        var1 = var3.length;
                                        var1 = var10 < var1;
                                        var2 = 0;
                                        if (!var1) {
                                            _fun49393_ip = 61;
                                            continue _fun49393
                                        }
                                        case 117: var18 = var3[var2];
                                        var1 = _closure1_slot2;
                                        var1 = var1.bind(var8)(var18, var7);
                                        var19 = var1[var10];
                                        var21 = var1[var6];
                                        var1 = _closure3_slot0;
                                        var18 = var1.packsDatabase;
                                        var1 = var18.get;
                                        var20 = var1.bind(var18)(var4);
                                        var18 = var0.set;
                                        var1 = _closure1_slot16;
                                        var1 = var1.bind(var8)(var21, var20);
                                        var1 = var18.bind(var0)(var19, var1);
                                        var2 = var2 + 1;
                                        var1 = var3.length;
                                        if (var2 < var1) {
                                            _fun49393_ip = 117;
                                            continue _fun49393
                                        }
                                        case 192: _fun49393_ip = 61;
                                        continue _fun49393;
                                    }
                            case 197:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getStickerMetadataMap = var2;
                    var3 = var0.premiumPacksDatabase;
                    var2 = var3.memoized;
                    var1 = function(arg0) { // Environment: var1
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.values;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.getPremiumPacks = var1;
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
        var0 = 'stateWrapper';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var _closure3_slot0 = var2;
            var0 = {};
            var3 = var2.packsDatabase;
            var0.packsDatabase = var3;
            var3 = var2.packStickersDatabase;
            var0.packStickersDatabase = var3;
            var2 = var2.premiumPacksDatabase;
            var0.premiumPacksDatabase = var2;
            var2 = function() { // Original name: markDirty, environment: var1
                var1 = _closure3_slot0;
                var0 = var1.markDirty;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.markDirty = var2;
            var1 = function() { // Original name: clearAllDBs, environment: var1
                var1 = _closure3_slot0;
                var0 = var1.clearAllDatabases;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.clearAllDBs = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'isFetchingStickerPacks';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasLoadedStickerPacks';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun49399: for (var _fun49399_ip = 0;;) switch (_fun49399_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun49399_ip = 49;
                        continue _fun49399
                    }
                case 16:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot11;
                    var2 = var2 + var1;
                    var1 = global;
                    var3 = var1.performance;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var0 = var2 > var1;
                case 49:
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getStickerById';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.packStickerByIdIndex;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isPremiumPack';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.premiumPacksDatabase;
            var1 = var2.get;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getStickerPack';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var2 = var0.packsDatabase;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'StickersPackStore';
    var6.displayName = var1;
    var1 = {};
    var7 = function(arg0, arg1) { // Original name: LOGOUT, environment: var3
        var0 = arg1;
        var1 = var0.clearAllDBs;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var7;
    var7 = function(arg0, arg1) { // Original name: STICKER_PACK_FETCH_SUCCESS, environment: var3
        var0 = arg1;
        var1 = arg0;
        var11 = var1.pack;
        var10 = var0.packStickersDatabase;
        var9 = var0.packsDatabase;
        var8 = var0.premiumPacksDatabase;
        var2 = _closure1_slot17;
        var0 = undefined;
        var7 = false;
        var12 = undefined;
        var1 = var12[var2](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var1.STICKER_PACK_FETCH_SUCCESS = var7;
    var7 = function(arg0, arg1) { // Original name: STICKER_PACKS_FETCH_START, environment: var3
        var0 = arg1;
        var1 = var0.markDirty;
        var0 = true;
        _closure1_slot9 = var0;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.STICKER_PACKS_FETCH_START = var7;
    var7 = function(arg0, arg1) { // Original name: STICKER_PACKS_FETCH_SUCCESS, environment: var3
        _fun49406: for (var _fun49406_ip = 0;;) switch (_fun49406_ip) {
            case 0:
                var0 = arg1;
                var1 = arg0;
                var2 = var1.packs;
                var8 = var0.packStickersDatabase;
                var7 = var0.packsDatabase;
                var6 = var0.premiumPacksDatabase;
                var1 = var0.markDirty;
                var0 = false;
                _closure1_slot9 = var0;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = global;
                var3 = var1.performance;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                _closure1_slot10 = var1;
                var1 = _closure1_slot13;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun49406_ip = 134;
                    continue _fun49406
                }
            case 93:
                var9 = _closure1_slot17;
                var14 = var2.value;
                var15 = undefined;
                var13 = var8;
                var12 = var7;
                var11 = var6;
                var10 = true;
                var1 = var15[var9](var14, var13, var12, var11, var10, var9);
                var9 = var4.bind(var0)();
                var1 = var9.done;
                var2 = var9;
                if (!var1) {
                    _fun49406_ip = 93;
                    continue _fun49406
                }
            case 134:
                return var0;
        }
    };
    var1.STICKER_PACKS_FETCH_SUCCESS = var7;
    var3 = function(arg0, arg1) { // Original name: PACK_STICKER_FETCH_SUCCESS, environment: var3
        var0 = arg0;
        var6 = var0.sticker;
        var0 = arg1;
        var5 = var0.packStickersDatabase;
        var4 = var5.setRecord;
        var3 = var6.pack_id;
        var2 = var6.id;
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)(var6);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.PACK_STICKER_FETCH_SUCCESS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var11 = var1;
    var1 = new var12[var6](var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/StickersPackStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1412, 1414, 667, 4183, 2]);