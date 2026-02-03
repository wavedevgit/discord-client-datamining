// modules/soundboard/useSoundGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun68265: for (var _fun68265_ip = 0;;) switch (_fun68265_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68265_ip = 46;
                    continue _fun68265
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun68265_ip = 55;
                    continue _fun68265
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun68265_ip = 345;
                    continue _fun68265
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68265_ip = 323;
                    continue _fun68265
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68265_ip = 283;
                    continue _fun68265
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68265_ip = 270;
                    continue _fun68265
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
                    _fun68265_ip = 163;
                    continue _fun68265
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun68265_ip = 179;
                    continue _fun68265
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68265_ip = 249;
                    continue _fun68265
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68265_ip = 249;
                    continue _fun68265
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68265_ip = 234;
                    continue _fun68265
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68265_ip = 247;
                    continue _fun68265
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun68265_ip = 265;
                continue _fun68265;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun68265_ip = 283;
                continue _fun68265;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun68265_ip = 323;
                    continue _fun68265
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
                    _fun68265_ip = 330;
                    continue _fun68265
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68266: for (var _fun68266_ip = 0;;) switch (_fun68266_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68266_ip = 56;
                                continue _fun68266
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
                            _fun68266_ip = 67;
                            continue _fun68266;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun68267: for (var _fun68267_ip = 0;;) switch (_fun68267_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68267_ip = 23;
                    continue _fun68267
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68267_ip = 33;
                    continue _fun68267
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
                    _fun68267_ip = 70;
                    continue _fun68267
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68267_ip = 55;
                    continue _fun68267
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun68268: for (var _fun68268_ip = 0;;) switch (_fun68268_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = null;
                var2 = var3;
                if (!(var0 != var1)) {
                    _fun68268_ip = 22;
                    continue _fun68268
                }
            case 15:
                var0 = undefined;
                var2 = var1.bind(var0)(var3);
            case 22:
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.SoundboardSoundItemType;
                    var1 = var1.SOUND;
                    var0.type = var1;
                    var1 = arg0;
                    var0.sound = var1;
                    var1 = arg1;
                    var0.index = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun68270: for (var _fun68270_ip = 0;;) switch (_fun68270_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.sections;
                var19 = var1.guildIds;
                var12 = var1.allSounds;
                var8 = var1.potentialSoundIdsForSection;
                var _closure2_slot0 = var8;
                var6 = var1.sectionType;
                var5 = var1.sortSoundsFn;
                var11 = {};
                var _closure2_slot1 = var11;
                var9 = new Array(1);
                var2 = 0;
                var20 = var9;
                var18 = 0;
                var4 = arraySpread(var20, var19, var18);
                var0 = _closure1_slot10;
                var9[var4] = var0;
                var0 = 1;
                var0 = var4 + var0;
                var0 = var9.length;
                var4 = var2 < var0;
                var0 = undefined;
                var10 = null;
                var7 = 0;
                if (!var4) {
                    _fun68270_ip = 190;
                    continue _fun68270
                }
            case 103:
                var15 = var9[var7];
                var16 = function arg0() {
                    _fun68271: for (var _fun68271_ip = 0;;) switch (_fun68271_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var4 = _closure2_slot0;
                            var3 = var4.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var1 = var0.soundId;
                                var0 = arg0;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var1);
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun68271_ip = 53;
                                continue _fun68271
                            }
                        case 39:
                            var1 = _closure2_slot1;
                            var0 = var2.soundId;
                            var1[var0] = var2;
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = _closure1_slot13;
                var4 = var12.get;
                var4 = var4.bind(var12)(var15);
                if (!(var10 == var4)) {
                    _fun68270_ip = 136;
                    continue _fun68270
                }
            case 132:
                var4 = new Array(0);
            case 136:
                var15 = var14.bind(var0)(var4);
                var14 = var15.bind(var0)();
                var4 = var14.done;
                if (var4) {
                    _fun68270_ip = 178;
                    continue _fun68270
                }
            case 153:
                var4 = var14.value;
                var4 = var16.bind(var0)(var4);
                var17 = var15.bind(var0)();
                var4 = var17.done;
                var14 = var17;
                if (!var4) {
                    _fun68270_ip = 153;
                    continue _fun68270
                }
            case 178:
                var7 = var7 + 1;
                var4 = var9.length;
                if (var7 < var4) {
                    _fun68270_ip = 103;
                    continue _fun68270
                }
            case 190:
                var4 = new Array(0);
                var7 = _closure1_slot13;
                var9 = var7.bind(var0)(var8);
                var8 = var9.bind(var0)();
                var7 = var8.done;
                if (var7) {
                    _fun68270_ip = 253;
                    continue _fun68270
                }
            case 215:
                var7 = var8.value;
                var12 = var11[var7];
                if (!(var10 != var12)) {
                    _fun68270_ip = 238;
                    continue _fun68270
                }
            case 228:
                var7 = var4.push;
                var7 = var7.bind(var4)(var12);
            case 238:
                var12 = var9.bind(var0)();
                var7 = var12.done;
                var8 = var12;
                if (!var7) {
                    _fun68270_ip = 215;
                    continue _fun68270
                }
            case 253:
                var1 = _closure1_slot15;
                var4 = var1.bind(var0)(var4, var5);
                var1 = var4.length;
                if (!(var1 > var2)) {
                    _fun68270_ip = 303;
                    continue _fun68270
                }
            case 272:
                var2 = var3.push;
                var1 = {};
                var1.key = var6;
                var5 = {};
                var5.type = var6;
                var1.categoryInfo = var5;
                var1.items = var4;
                var1 = var2.bind(var3)(var1);
            case 303:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun68273: for (var _fun68273_ip = 0;;) switch (_fun68273_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var2.get;
                var0 = _closure1_slot10;
                var6 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun68273_ip = 33;
                    continue _fun68273
                }
            case 29:
                var6 = _closure1_slot11;
            case 33:
                var2 = var3.push;
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 9;
                var5 = var8[var9];
                var0 = undefined;
                var5 = var7.bind(var0)(var5);
                var5 = var5.SoundboardSoundGridSectionType;
                var5 = var5.DEFAULTS;
                var1.key = var5;
                var5 = {};
                var9 = var8[var9];
                var9 = var7.bind(var0)(var9);
                var9 = var9.SoundboardSoundGridSectionType;
                var9 = var9.DEFAULTS;
                var5.type = var9;
                var1.categoryInfo = var5;
                var5 = _closure1_slot15;
                var4 = 11;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.sortSoundsOldestToNewestCreationDate;
                var4 = var5.bind(var0)(var6, var4);
                var1.items = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var1 = function() {
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.FrecencyUserSettingsActionCreators;
            var1 = var2.loadIfNecessary;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 12;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot8;
            var0 = var0.frecentlyPlayedSounds;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot10 = var7;
    var4 = var4.EMPTY_SOUND_LIST;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSoundGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun68277: for (var _fun68277_ip = 0;;) switch (_fun68277_ip) {
            case 0:
                var16 = arg0;
                var1 = arguments[1];
                var7 = arguments[2];
                var _closure2_slot0 = var16;
                var17 = undefined;
                if (!(var1 === var17)) {
                    _fun68277_ip = 23;
                    continue _fun68277
                }
            case 21:
                var1 = {};
            case 23:
                var11 = var1.filterOutEmptyCurrentGuild;
                if (!(var11 === var17)) {
                    _fun68277_ip = 35;
                    continue _fun68277
                }
            case 33:
                var11 = false;
            case 35:
                var _closure2_slot1 = var11;
                var10 = var1.moveDefaultsToBottom;
                if (!(var10 === var17)) {
                    _fun68277_ip = 53;
                    continue _fun68277
                }
            case 51:
                var10 = false;
            case 53:
                var _closure2_slot2 = var10;
                if (!(var7 === var17)) {
                    _fun68277_ip = 63;
                    continue _fun68277
                }
            case 61:
                var7 = false;
            case 63:
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var17;
                var _closure2_slot5 = var17;
                var _closure2_slot6 = var17;
                var _closure2_slot7 = var17;
                var _closure2_slot8 = var17;
                var _closure2_slot9 = var17;
                var _closure2_slot10 = var17;
                var _closure2_slot11 = var17;
                var _closure2_slot12 = var17;
                var _closure2_slot13 = var17;
                var _closure2_slot14 = var17;
                var _closure2_slot15 = var17;
                var _closure2_slot16 = var17;
                var _closure2_slot17 = var17;
                var3 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 12;
                var4 = var21[var2];
                var8 = var3.bind(var17)(var4);
                var6 = var8.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var6.bind(var8)(var5, var4);
                var13 = _closure1_slot1;
                var9 = 13;
                var4 = var21[var9];
                var6 = var13.bind(var17)(var4);
                var5 = var6.isPremium;
                var4 = _closure1_slot12;
                var4 = var4.TIER_2;
                var5 = var5.bind(var6)(var14, var4);
                _closure2_slot4 = var5;
                var4 = var21[var2];
                var12 = var3.bind(var17)(var4);
                var8 = var12.useStateFromStoresArray;
                var4 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var0 = var2.getSounds;
                    var1 = var0.bind(var2)();
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = var2.getFavorites;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    var1 = var2.isFetching;
                    var1 = var1.bind(var2)();
                    var0[2] = var1;
                    return var0;
                };
                var8 = var8.bind(var12)(var6, var4);
                var6 = _closure1_slot3;
                var4 = 3;
                var6 = var6.bind(var17)(var8, var4);
                var4 = 0;
                var19 = var6[var4];
                _closure2_slot5 = var19;
                var4 = 1;
                var18 = var6[var4];
                _closure2_slot6 = var18;
                var4 = 2;
                var6 = var6[var4];
                _closure2_slot7 = var6;
                var4 = 11;
                var4 = var21[var4];
                var8 = var3.bind(var17)(var4);
                var4 = var8.useSoundOrganizer;
                var4 = var4.bind(var8)();
                _closure2_slot8 = var4;
                var8 = 14;
                var8 = var21[var8];
                var15 = var3.bind(var17)(var8);
                var12 = var15.useSortedGuildIdsForSoundboard;
                var8 = false;
                var20 = var12.bind(var15)(var16, var8);
                _closure2_slot9 = var20;
                var8 = var21[var2];
                var22 = var3.bind(var17)(var8);
                var16 = var22.useStateFromStoresArray;
                var12 = _closure1_slot5;
                var15 = new Array(1);
                var15[0] = var12;
                var8 = function() { // Environment: var0
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot9;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun68281: for (var _fun68281_ip = 0;;) switch (_fun68281_ip) {
                            case 0:
                                var2 = _closure1_slot5;
                                var1 = var2.getGuild;
                                var0 = arg0;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun68281_ip = 43;
                                    continue _fun68281
                                }
                            case 26:
                                var1 = _closure3_slot0;
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
                var8 = var16.bind(var22)(var15, var8);
                _closure2_slot10 = var8;
                var9 = var21[var9];
                var13 = var13.bind(var17)(var9);
                var9 = var13.canUseSoundboardEverywhere;
                var9 = var9.bind(var13)(var14);
                _closure2_slot11 = var9;
                var13 = var21[var2];
                var15 = var3.bind(var17)(var13);
                var14 = var15.useStateFromStores;
                var13 = new Array(1);
                var13[0] = var12;
                var12 = function() { // Environment: var0
                    _fun68282: for (var _fun68282_ip = 0;;) switch (_fun68282_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun68282_ip = 39;
                                continue _fun68282
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var13 = var14.bind(var15)(var13, var12);
                _closure2_slot12 = var13;
                var12 = var21[var2];
                var22 = var3.bind(var17)(var12);
                var16 = var22.useStateFromStores;
                var12 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var12;
                var14 = new Array(1);
                var14[0] = var13;
                var12 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getManageResourcePermissions;
                    var0 = _closure2_slot12;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.canCreateExpressions;
                    return var0;
                };
                var12 = var16.bind(var22)(var15, var12, var14);
                _closure2_slot13 = var12;
                var14 = 16;
                var14 = var21[var14];
                var16 = var3.bind(var17)(var14);
                var15 = var16.useRecentlyHeardExperiment;
                var14 = {
                    'location': 'soundboard-useSoundGrid',
                    'autoTrackExposure': true
                };
                var15 = var15.bind(var16)(var14);
                var14 = var15.canSeeRecentlyHeard;
                _closure2_slot14 = var14;
                var15 = var15.canSeeFrequentlyPlayed;
                _closure2_slot15 = var15;
                var16 = _closure1_slot18;
                var16 = var16.bind(var17)();
                _closure2_slot16 = var16;
                var2 = var21[var2];
                var21 = var3.bind(var17)(var2);
                var17 = var21.useStateFromStoresArray;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.recentlyHeardSoundIds;
                    return var0;
                };
                var17 = var17.bind(var21)(var3, var2);
                _closure2_slot17 = var17;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(17);
                var1[0] = var20;
                var1[1] = var19;
                var1[2] = var18;
                var1[3] = var17;
                var1[4] = var16;
                var1[5] = var15;
                var1[6] = var14;
                var1[7] = var13;
                var1[8] = var12;
                var1[9] = var11;
                var1[10] = var10;
                var1[11] = var9;
                var1[12] = var8;
                var1[13] = var7;
                var1[14] = var6;
                var1[15] = var5;
                var1[16] = var4;
                var0 = function() { // Environment: var0
                    _fun68285: for (var _fun68285_ip = 0;;) switch (_fun68285_ip) {
                        case 0:
                            var18 = 0;
                            var _closure3_slot0 = var18;
                            var _closure3_slot1 = var18;
                            var3 = new Array(0);
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68285_ip = 1141;
                                continue _fun68285
                            }
                        case 32:
                            var6 = _closure1_slot16;
                            var0 = {};
                            var0.sections = var3;
                            var1 = _closure2_slot9;
                            var0.guildIds = var1;
                            var1 = _closure2_slot5;
                            var0.allSounds = var1;
                            var1 = global;
                            var9 = var1.Array;
                            var8 = var9.from;
                            var7 = _closure2_slot6;
                            var7 = var8.bind(var9)(var7);
                            var0.potentialSoundIdsForSection = var7;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var17 = 9;
                            var8 = var10[var17];
                            var7 = undefined;
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.SoundboardSoundGridSectionType;
                            var8 = var8.FAVORITES;
                            var0.sectionType = var8;
                            var8 = 11;
                            var8 = var10[var8];
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.sortSoundsOldestToNewestCreationDate;
                            var0.sortSoundsFn = var8;
                            var0 = var6.bind(var7)(var0);
                            var0 = _closure2_slot14;
                            if (!var0) {
                                _fun68285_ip = 239;
                                continue _fun68285
                            }
                        case 162:
                            var6 = _closure1_slot16;
                            var0 = {};
                            var0.sections = var3;
                            var8 = _closure2_slot9;
                            var0.guildIds = var8;
                            var8 = _closure2_slot5;
                            var0.allSounds = var8;
                            var8 = _closure2_slot17;
                            var0.potentialSoundIdsForSection = var8;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var17];
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.SoundboardSoundGridSectionType;
                            var8 = var8.RECENTLY_HEARD;
                            var0.sectionType = var8;
                            var0 = var6.bind(var7)(var0);
                        case 239:
                            var0 = _closure2_slot15;
                            if (!var0) {
                                _fun68285_ip = 340;
                                continue _fun68285
                            }
                        case 246:
                            var6 = _closure1_slot16;
                            var0 = {};
                            var0.sections = var3;
                            var8 = _closure2_slot9;
                            var0.guildIds = var8;
                            var8 = _closure2_slot5;
                            var0.allSounds = var8;
                            var10 = _closure2_slot16;
                            var9 = var10.map;
                            var8 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var0 = var0.soundId;
                                return var0;
                            };
                            var8 = var9.bind(var10)(var8);
                            var0.potentialSoundIdsForSection = var8;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var17];
                            var8 = var9.bind(var7)(var8);
                            var8 = var8.SoundboardSoundGridSectionType;
                            var8 = var8.FREQUENTLY_USED;
                            var0.sectionType = var8;
                            var0 = var6.bind(var7)(var0);
                        case 340:
                            var0 = _closure2_slot12;
                            if (!(var7 !== var0)) {
                                _fun68285_ip = 659;
                                continue _fun68285
                            }
                        case 351:
                            var9 = _closure2_slot12;
                            var8 = {};
                            var0 = _closure2_slot13;
                            var8.currentGuildHasAddPermissions = var0;
                            var0 = _closure2_slot5;
                            var8.allSounds = var0;
                            var0 = _closure2_slot1;
                            var8.filterOutEmptyCurrentGuild = var0;
                            var0 = _closure2_slot8;
                            var8.sortSoundsFn = var0;
                            var6 = var8.currentGuildHasAddPermissions;
                            var12 = var8.allSounds;
                            var0 = var8.filterOutEmptyCurrentGuild;
                            var11 = var8.sortSoundsFn;
                            var10 = var12.get;
                            var8 = var9.id;
                            var10 = var10.bind(var12)(var8);
                            var8 = null;
                            if (!(var8 == var10)) {
                                _fun68285_ip = 442;
                                continue _fun68285
                            }
                        case 438:
                            var10 = new Array(0);
                        case 442:
                            var8 = _closure1_slot15;
                            var8 = var8.bind(var7)(var10, var11);
                            var11 = var10.length;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 10;
                            var10 = var13[var10];
                            var12 = var12.bind(var7)(var10);
                            var10 = var12.getMaxSoundboardSlots;
                            var10 = var10.bind(var12)(var9);
                            var10 = var11 < var10;
                            if (!var10) {
                                _fun68285_ip = 498;
                                continue _fun68285
                            }
                        case 495:
                            var10 = var6;
                        case 498:
                            var6 = var8.length;
                            var6 = var18 === var6;
                            var10 = !var10;
                            if (!var10) {
                                _fun68285_ip = 516;
                                continue _fun68285
                            }
                        case 513:
                            var10 = !var6;
                        case 516:
                            if (var10) {
                                _fun68285_ip = 522;
                                continue _fun68285
                            }
                        case 519:
                            var10 = var0;
                        case 522:
                            if (var10) {
                                _fun68285_ip = 574;
                                continue _fun68285
                            }
                        case 525:
                            var11 = var8.push;
                            var10 = {};
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var12 = var12[var17];
                            var12 = var13.bind(var7)(var12);
                            var12 = var12.SoundboardSoundItemType;
                            var12 = var12.ADD_SOUND;
                            var10.type = var12;
                            var10.guild = var9;
                            var10 = var11.bind(var8)(var10);
                        case 574:
                            if (!var0) {
                                _fun68285_ip = 580;
                                continue _fun68285
                            }
                        case 577:
                            var0 = var6;
                        case 580:
                            if (var0) {
                                _fun68285_ip = 659;
                                continue _fun68285
                            }
                        case 583:
                            var6 = var3.push;
                            var0 = {};
                            var10 = {};
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var11 = var11[var17];
                            var11 = var12.bind(var7)(var11);
                            var11 = var11.SoundboardSoundGridSectionType;
                            var11 = var11.GUILD;
                            var10.type = var11;
                            var10.guild = var9;
                            var11 = false;
                            var10.isNitroLocked = var11;
                            var0.categoryInfo = var10;
                            var9 = var9.id;
                            var0.key = var9;
                            var0.items = var8;
                            var0 = var6.bind(var3)(var0);
                        case 659:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun68285_ip = 670;
                                continue _fun68285
                            }
                        case 666:
                            var0 = _closure2_slot11;
                        case 670:
                            if (var0) {
                                _fun68285_ip = 687;
                                continue _fun68285
                            }
                        case 673:
                            var6 = _closure1_slot17;
                            var0 = _closure2_slot5;
                            var0 = var6.bind(var7)(var3, var0);
                        case 687:
                            var0 = {};
                            var0.sections = var3;
                            var6 = _closure2_slot10;
                            var0.guilds = var6;
                            var6 = _closure2_slot12;
                            var16 = null;
                            var8 = var16 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun68285_ip = 727;
                                continue _fun68285
                            }
                        case 718:
                            var8 = _closure2_slot12;
                            var6 = var8.id;
                        case 727:
                            var0.currentGuildId = var6;
                            var6 = _closure2_slot5;
                            var0.allSounds = var6;
                            var6 = _closure2_slot4;
                            var0.hasNitro = var6;
                            var6 = _closure2_slot8;
                            var0.sortSoundsFn = var6;
                            var15 = var0.sections;
                            var6 = var0.guilds;
                            var14 = var0.currentGuildId;
                            var13 = var0.allSounds;
                            var12 = var0.hasNitro;
                            var11 = var0.sortSoundsFn;
                            var0 = _closure1_slot13;
                            var10 = var0.bind(var7)(var6);
                            var6 = var10.bind(var7)();
                            var0 = var6.done;
                            var9 = var6;
                            var8 = undefined;
                            var6 = undefined;
                            if (var0) {
                                _fun68285_ip = 995;
                                continue _fun68285
                            }
                        case 826:
                            var22 = var9.value;
                            var0 = var22.id;
                            if (!(var0 !== var14)) {
                                _fun68285_ip = 977;
                                continue _fun68285
                            }
                        case 843:
                            var20 = _closure1_slot15;
                            var19 = var13.get;
                            var0 = var22.id;
                            var19 = var19.bind(var13)(var0);
                            var0 = var19;
                            if (!(var16 == var19)) {
                                _fun68285_ip = 873;
                                continue _fun68285
                            }
                        case 869:
                            var0 = new Array(0);
                        case 873:
                            var0 = var20.bind(var7)(var0, var11);
                            var20 = var0.length;
                            var8 = var19;
                            var6 = var0;
                            if (!(var20 > var18)) {
                                _fun68285_ip = 977;
                                continue _fun68285
                            }
                        case 894:
                            var21 = var15.push;
                            var20 = {};
                            var23 = {};
                            var25 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var24 = var24[var17];
                            var24 = var25.bind(var7)(var24);
                            var24 = var24.SoundboardSoundGridSectionType;
                            var24 = var24.GUILD;
                            var23.type = var24;
                            var23.guild = var22;
                            var24 = !var12;
                            var23.isNitroLocked = var24;
                            var20.categoryInfo = var23;
                            var22 = var22.id;
                            var20.key = var22;
                            var20.items = var0;
                            var20 = var21.bind(var15)(var20);
                            var8 = var19;
                            var6 = var0;
                        case 977:
                            var19 = var10.bind(var7)();
                            var0 = var19.done;
                            var9 = var19;
                            if (!var0) {
                                _fun68285_ip = 826;
                                continue _fun68285
                            }
                        case 995:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun68285_ip = 1006;
                                continue _fun68285
                            }
                        case 1002:
                            var0 = _closure2_slot11;
                        case 1006:
                            if (!var0) {
                                _fun68285_ip = 1023;
                                continue _fun68285
                            }
                        case 1009:
                            var6 = _closure1_slot17;
                            var0 = _closure2_slot5;
                            var0 = var6.bind(var7)(var3, var0);
                        case 1023:
                            var6 = var3.forEach;
                            var0 = function(arg0) { // Environment: var5
                                _fun68287: for (var _fun68287_ip = 0;;) switch (_fun68287_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.categoryInfo;
                                        var3 = var0.type;
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 9;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var4.bind(var0)(var2);
                                        var2 = var2.SoundboardSoundGridSectionType;
                                        var2 = var2.GUILD;
                                        if (!(var3 === var2)) {
                                            _fun68287_ip = 119;
                                            continue _fun68287
                                        }
                                    case 55:
                                        var2 = var1.categoryInfo;
                                        var3 = var2.isNitroLocked;
                                        if (var3) {
                                            _fun68287_ip = 97;
                                            continue _fun68287
                                        }
                                    case 73:
                                        var4 = _closure3_slot0;
                                        var3 = var1.items;
                                        var3 = var3.length;
                                        var3 = var4 + var3;
                                        _closure3_slot0 = var3;
                                        _fun68287_ip = 119;
                                        continue _fun68287;
                                    case 97:
                                        var3 = _closure3_slot1;
                                        var1 = var1.items;
                                        var1 = var1.length;
                                        var1 = var3 + var1;
                                        _closure3_slot1 = var1;
                                    case 119:
                                        return var0;
                                }
                            };
                            var0 = var6.bind(var3)(var0);
                            var0 = {};
                            var0.categories = var3;
                            var7 = var1.Array;
                            var6 = var7.from;
                            var8 = _closure2_slot5;
                            var1 = var8.values;
                            var1 = var1.bind(var8)();
                            var6 = var6.bind(var7)(var1);
                            var1 = var6.flat;
                            var1 = var1.bind(var6)();
                            var0.availableSounds = var1;
                            var1 = _closure2_slot7;
                            var0.isFetching = var1;
                            var1 = {};
                            var6 = _closure2_slot6;
                            var6 = var6.size;
                            var1.favoriteSoundCount = var6;
                            var6 = _closure3_slot0;
                            var1.unlockedCustomSoundCount = var6;
                            var5 = _closure3_slot1;
                            var1.lockedCustomSoundCount = var5;
                            var0.soundCounts = var1;
                            _fun68285_ip = 1228;
                            continue _fun68285;
                        case 1141:
                            var6 = _closure1_slot17;
                            var5 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var3, var5);
                            var1 = {};
                            var1.categories = var3;
                            var6 = _closure2_slot5;
                            var5 = var6.get;
                            var3 = _closure1_slot10;
                            var3 = var5.bind(var6)(var3);
                            var5 = null;
                            if (!(var5 == var3)) {
                                _fun68285_ip = 1192;
                                continue _fun68285
                            }
                        case 1188:
                            var3 = _closure1_slot11;
                        case 1192:
                            var1.availableSounds = var3;
                            var2 = _closure2_slot7;
                            var1.isFetching = var2;
                            var2 = {
                                'favoriteSoundCount': 0,
                                'unlockedCustomSoundCount': 0,
                                'lockedCustomSoundCount': 0
                            };
                            var1.soundCounts = var2;
                            var0 = var1;
                        case 1228:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var4;
    var3 = function arg0, arg1, arg2() {
        var6 = arg0;
        var4 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var4;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var5 = var5.length;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun68289: for (var _fun68289_ip = 0;;) switch (_fun68289_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun68289_ip = 24;
                        continue _fun68289
                    }
                case 18:
                    var0 = _closure2_slot0;
                    _fun68289_ip = 127;
                    continue _fun68289;
                case 24:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var5 = var8[var6];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.SoundboardSoundGridSectionType;
                    var5 = var5.SEARCH;
                    var2.key = var5;
                    var5 = {};
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.SoundboardSoundGridSectionType;
                    var6 = var6.SEARCH;
                    var5.type = var6;
                    var2.categoryInfo = var5;
                    var3 = _closure1_slot15;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var1);
                    var2.items = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 127:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSearchCategories = var3;
    var2.useFrequentlyPlayedSounds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 3082, 1613, 8505, 3947, 3948, 1615, 4794, 6702, 8507, 566, 3100, 8508, 8084, 8506, 1355, 2]);