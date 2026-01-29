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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun68083: for (var _fun68083_ip = 0;;) switch (_fun68083_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68083_ip = 45;
                    continue _fun68083
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun68083_ip = 54;
                    continue _fun68083
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun68083_ip = 344;
                    continue _fun68083
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68083_ip = 322;
                    continue _fun68083
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68083_ip = 282;
                    continue _fun68083
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68083_ip = 269;
                    continue _fun68083
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
                    _fun68083_ip = 162;
                    continue _fun68083
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun68083_ip = 178;
                    continue _fun68083
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68083_ip = 248;
                    continue _fun68083
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68083_ip = 248;
                    continue _fun68083
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68083_ip = 233;
                    continue _fun68083
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68083_ip = 246;
                    continue _fun68083
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun68083_ip = 264;
                continue _fun68083;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun68083_ip = 282;
                continue _fun68083;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun68083_ip = 322;
                    continue _fun68083
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
                    _fun68083_ip = 329;
                    continue _fun68083
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68084: for (var _fun68084_ip = 0;;) switch (_fun68084_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68084_ip = 56;
                                continue _fun68084
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
                            _fun68084_ip = 67;
                            continue _fun68084;
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
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun68085: for (var _fun68085_ip = 0;;) switch (_fun68085_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68085_ip = 23;
                    continue _fun68085
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68085_ip = 33;
                    continue _fun68085
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
                    _fun68085_ip = 70;
                    continue _fun68085
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68085_ip = 55;
                    continue _fun68085
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: createSoundItems, environment: var3
        _fun68086: for (var _fun68086_ip = 0;;) switch (_fun68086_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = null;
                var2 = var3;
                if (!(var0 != var1)) {
                    _fun68086_ip = 22;
                    continue _fun68086
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
    var0 = function(arg0) { // Original name: _addSectionForPotentialSoundIds, environment: var3
        _fun68088: for (var _fun68088_ip = 0;;) switch (_fun68088_ip) {
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
                    _fun68088_ip = 190;
                    continue _fun68088
                }
            case 103:
                var15 = var9[var7];
                var16 = function(arg0) { // Original name: _loop, environment: var13
                    _fun68089: for (var _fun68089_ip = 0;;) switch (_fun68089_ip) {
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
                                _fun68089_ip = 53;
                                continue _fun68089
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
                    _fun68088_ip = 136;
                    continue _fun68088
                }
            case 132:
                var4 = new Array(0);
            case 136:
                var15 = var14.bind(var0)(var4);
                var14 = var15.bind(var0)();
                var4 = var14.done;
                if (var4) {
                    _fun68088_ip = 178;
                    continue _fun68088
                }
            case 153:
                var4 = var14.value;
                var4 = var16.bind(var0)(var4);
                var17 = var15.bind(var0)();
                var4 = var17.done;
                var14 = var17;
                if (!var4) {
                    _fun68088_ip = 153;
                    continue _fun68088
                }
            case 178:
                var7 = var7 + 1;
                var4 = var9.length;
                if (var7 < var4) {
                    _fun68088_ip = 103;
                    continue _fun68088
                }
            case 190:
                var4 = new Array(0);
                var7 = _closure1_slot13;
                var9 = var7.bind(var0)(var8);
                var8 = var9.bind(var0)();
                var7 = var8.done;
                if (var7) {
                    _fun68088_ip = 253;
                    continue _fun68088
                }
            case 215:
                var7 = var8.value;
                var12 = var11[var7];
                if (!(var10 != var12)) {
                    _fun68088_ip = 238;
                    continue _fun68088
                }
            case 228:
                var7 = var4.push;
                var7 = var7.bind(var4)(var12);
            case 238:
                var12 = var9.bind(var0)();
                var7 = var12.done;
                var8 = var12;
                if (!var7) {
                    _fun68088_ip = 215;
                    continue _fun68088
                }
            case 253:
                var1 = _closure1_slot15;
                var4 = var1.bind(var0)(var4, var5);
                var1 = var4.length;
                if (!(var1 > var2)) {
                    _fun68088_ip = 304;
                    continue _fun68088
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
            case 304:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: addDefaultSection, environment: var3
        _fun68091: for (var _fun68091_ip = 0;;) switch (_fun68091_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var2.get;
                var0 = _closure1_slot10;
                var6 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun68091_ip = 33;
                    continue _fun68091
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
    var1 = function() { // Original name: useFrequentlyPlayedSounds, environment: var3
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
    var4 = function(arg0) { // Original name: useSoundGrid, environment: var3
        _fun68095: for (var _fun68095_ip = 0;;) switch (_fun68095_ip) {
            case 0:
                var16 = arg0;
                var1 = arguments[1];
                var7 = arguments[2];
                var _closure2_slot0 = var16;
                var17 = undefined;
                if (!(var1 === var17)) {
                    _fun68095_ip = 23;
                    continue _fun68095
                }
            case 21:
                var1 = {};
            case 23:
                var11 = var1.filterOutEmptyCurrentGuild;
                if (!(var11 === var17)) {
                    _fun68095_ip = 35;
                    continue _fun68095
                }
            case 33:
                var11 = false;
            case 35:
                var _closure2_slot1 = var11;
                var10 = var1.moveDefaultsToBottom;
                if (!(var10 === var17)) {
                    _fun68095_ip = 53;
                    continue _fun68095
                }
            case 51:
                var10 = false;
            case 53:
                var _closure2_slot2 = var10;
                if (!(var7 === var17)) {
                    _fun68095_ip = 63;
                    continue _fun68095
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
                        _fun68099: for (var _fun68099_ip = 0;;) switch (_fun68099_ip) {
                            case 0:
                                var2 = _closure1_slot5;
                                var1 = var2.getGuild;
                                var0 = arg0;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun68099_ip = 43;
                                    continue _fun68099
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
                    _fun68100: for (var _fun68100_ip = 0;;) switch (_fun68100_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun68100_ip = 39;
                                continue _fun68100
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
                    _fun68103: for (var _fun68103_ip = 0;;) switch (_fun68103_ip) {
                        case 0:
                            var18 = 0;
                            var _closure3_slot0 = var18;
                            var _closure3_slot1 = var18;
                            var3 = new Array(0);
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68103_ip = 1143;
                                continue _fun68103
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
                                _fun68103_ip = 239;
                                continue _fun68103
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
                                _fun68103_ip = 340;
                                continue _fun68103
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
                                _fun68103_ip = 660;
                                continue _fun68103
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
                                _fun68103_ip = 442;
                                continue _fun68103
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
                                _fun68103_ip = 498;
                                continue _fun68103
                            }
                        case 495:
                            var10 = var6;
                        case 498:
                            var6 = var8.length;
                            var6 = var18 === var6;
                            var10 = !var10;
                            if (!var10) {
                                _fun68103_ip = 516;
                                continue _fun68103
                            }
                        case 513:
                            var10 = !var6;
                        case 516:
                            if (var10) {
                                _fun68103_ip = 522;
                                continue _fun68103
                            }
                        case 519:
                            var10 = var0;
                        case 522:
                            if (var10) {
                                _fun68103_ip = 574;
                                continue _fun68103
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
                                _fun68103_ip = 580;
                                continue _fun68103
                            }
                        case 577:
                            var0 = var6;
                        case 580:
                            if (var0) {
                                _fun68103_ip = 660;
                                continue _fun68103
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
                        case 660:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun68103_ip = 671;
                                continue _fun68103
                            }
                        case 667:
                            var0 = _closure2_slot11;
                        case 671:
                            if (var0) {
                                _fun68103_ip = 688;
                                continue _fun68103
                            }
                        case 674:
                            var6 = _closure1_slot17;
                            var0 = _closure2_slot5;
                            var0 = var6.bind(var7)(var3, var0);
                        case 688:
                            var0 = {};
                            var0.sections = var3;
                            var6 = _closure2_slot10;
                            var0.guilds = var6;
                            var6 = _closure2_slot12;
                            var16 = null;
                            var8 = var16 == var6;
                            var6 = undefined;
                            if (var8) {
                                _fun68103_ip = 728;
                                continue _fun68103
                            }
                        case 719:
                            var8 = _closure2_slot12;
                            var6 = var8.id;
                        case 728:
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
                                _fun68103_ip = 997;
                                continue _fun68103
                            }
                        case 827:
                            var22 = var9.value;
                            var0 = var22.id;
                            if (!(var0 !== var14)) {
                                _fun68103_ip = 979;
                                continue _fun68103
                            }
                        case 844:
                            var20 = _closure1_slot15;
                            var19 = var13.get;
                            var0 = var22.id;
                            var19 = var19.bind(var13)(var0);
                            var0 = var19;
                            if (!(var16 == var19)) {
                                _fun68103_ip = 874;
                                continue _fun68103
                            }
                        case 870:
                            var0 = new Array(0);
                        case 874:
                            var0 = var20.bind(var7)(var0, var11);
                            var20 = var0.length;
                            var8 = var19;
                            var6 = var0;
                            if (!(var20 > var18)) {
                                _fun68103_ip = 979;
                                continue _fun68103
                            }
                        case 895:
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
                        case 979:
                            var19 = var10.bind(var7)();
                            var0 = var19.done;
                            var9 = var19;
                            if (!var0) {
                                _fun68103_ip = 827;
                                continue _fun68103
                            }
                        case 997:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun68103_ip = 1008;
                                continue _fun68103
                            }
                        case 1004:
                            var0 = _closure2_slot11;
                        case 1008:
                            if (!var0) {
                                _fun68103_ip = 1025;
                                continue _fun68103
                            }
                        case 1011:
                            var6 = _closure1_slot17;
                            var0 = _closure2_slot5;
                            var0 = var6.bind(var7)(var3, var0);
                        case 1025:
                            var6 = var3.forEach;
                            var0 = function(arg0) { // Environment: var5
                                _fun68105: for (var _fun68105_ip = 0;;) switch (_fun68105_ip) {
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
                                            _fun68105_ip = 121;
                                            continue _fun68105
                                        }
                                    case 55:
                                        var2 = var1.categoryInfo;
                                        var3 = var2.isNitroLocked;
                                        if (var3) {
                                            _fun68105_ip = 98;
                                            continue _fun68105
                                        }
                                    case 73:
                                        var4 = _closure3_slot0;
                                        var3 = var1.items;
                                        var3 = var3.length;
                                        var3 = var4 + var3;
                                        _closure3_slot0 = var3;
                                        _fun68105_ip = 121;
                                        continue _fun68105;
                                    case 98:
                                        var3 = _closure3_slot1;
                                        var1 = var1.items;
                                        var1 = var1.length;
                                        var1 = var3 + var1;
                                        _closure3_slot1 = var1;
                                    case 121:
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
                            _fun68103_ip = 1230;
                            continue _fun68103;
                        case 1143:
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
                                _fun68103_ip = 1194;
                                continue _fun68103
                            }
                        case 1190:
                            var3 = _closure1_slot11;
                        case 1194:
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
                        case 1230:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: useSearchCategories, environment: var3
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
            _fun68107: for (var _fun68107_ip = 0;;) switch (_fun68107_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun68107_ip = 24;
                        continue _fun68107
                    }
                case 18:
                    var0 = _closure2_slot0;
                    _fun68107_ip = 128;
                    continue _fun68107;
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
                case 128:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSearchCategories = var3;
    var2.useFrequentlyPlayedSounds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 3050, 1613, 8468, 3910, 3911, 1615, 4755, 6665, 8470, 566, 3068, 8471, 8049, 8469, 1355, 2]);