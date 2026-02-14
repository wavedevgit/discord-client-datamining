// modules/soundboard/useSoundGrid.tsx
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
        _fun68664: for (var _fun68664_ip = 0;;) switch (_fun68664_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68664_ip = 46;
                    continue _fun68664
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun68664_ip = 55;
                    continue _fun68664
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun68664_ip = 345;
                    continue _fun68664
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68664_ip = 323;
                    continue _fun68664
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68664_ip = 283;
                    continue _fun68664
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68664_ip = 270;
                    continue _fun68664
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
                    _fun68664_ip = 163;
                    continue _fun68664
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun68664_ip = 179;
                    continue _fun68664
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68664_ip = 249;
                    continue _fun68664
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68664_ip = 249;
                    continue _fun68664
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68664_ip = 234;
                    continue _fun68664
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68664_ip = 247;
                    continue _fun68664
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun68664_ip = 265;
                continue _fun68664;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun68664_ip = 283;
                continue _fun68664;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun68664_ip = 323;
                    continue _fun68664
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
                    _fun68664_ip = 330;
                    continue _fun68664
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68665: for (var _fun68665_ip = 0;;) switch (_fun68665_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68665_ip = 56;
                                continue _fun68665
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
                            _fun68665_ip = 67;
                            continue _fun68665;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun68666: for (var _fun68666_ip = 0;;) switch (_fun68666_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68666_ip = 23;
                    continue _fun68666
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68666_ip = 33;
                    continue _fun68666
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
                    _fun68666_ip = 70;
                    continue _fun68666
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68666_ip = 55;
                    continue _fun68666
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun68667: for (var _fun68667_ip = 0;;) switch (_fun68667_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = null;
                var2 = var3;
                if (!(var0 != var1)) {
                    _fun68667_ip = 22;
                    continue _fun68667
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
                    var1 = 8;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun68669: for (var _fun68669_ip = 0;;) switch (_fun68669_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var2.get;
                var0 = _closure1_slot9;
                var6 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var6)) {
                    _fun68669_ip = 33;
                    continue _fun68669
                }
            case 29:
                var6 = _closure1_slot10;
            case 33:
                var2 = var3.push;
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 8;
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
                var5 = _closure1_slot14;
                var4 = 10;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.sortSoundsOldestToNewestCreationDate;
                var4 = var5.bind(var0)(var6, var4);
                var1.items = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot9 = var6;
    var3 = var3.EMPTY_SOUND_LIST;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/useSoundGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun68670: for (var _fun68670_ip = 0;;) switch (_fun68670_ip) {
            case 0:
                var20 = arg0;
                var1 = arguments[1];
                var7 = arguments[2];
                var _closure2_slot0 = var20;
                var12 = undefined;
                if (!(var1 === var12)) {
                    _fun68670_ip = 23;
                    continue _fun68670
                }
            case 21:
                var1 = {};
            case 23:
                var11 = var1.filterOutEmptyCurrentGuild;
                if (!(var11 === var12)) {
                    _fun68670_ip = 35;
                    continue _fun68670
                }
            case 33:
                var11 = false;
            case 35:
                var _closure2_slot1 = var11;
                var10 = var1.moveDefaultsToBottom;
                if (!(var10 === var12)) {
                    _fun68670_ip = 53;
                    continue _fun68670
                }
            case 51:
                var10 = false;
            case 53:
                var _closure2_slot2 = var10;
                if (!(var7 === var12)) {
                    _fun68670_ip = 63;
                    continue _fun68670
                }
            case 61:
                var7 = false;
            case 63:
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var12;
                var _closure2_slot5 = var12;
                var _closure2_slot6 = var12;
                var _closure2_slot7 = var12;
                var _closure2_slot8 = var12;
                var _closure2_slot9 = var12;
                var _closure2_slot10 = var12;
                var _closure2_slot11 = var12;
                var _closure2_slot12 = var12;
                var _closure2_slot13 = var12;
                var3 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 11;
                var4 = var17[var2];
                var8 = var3.bind(var12)(var4);
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
                var19 = var6.bind(var8)(var5, var4);
                var18 = _closure1_slot1;
                var9 = 12;
                var4 = var17[var9];
                var6 = var18.bind(var12)(var4);
                var5 = var6.isPremium;
                var4 = _closure1_slot11;
                var4 = var4.TIER_2;
                var5 = var5.bind(var6)(var19, var4);
                _closure2_slot4 = var5;
                var4 = var17[var2];
                var13 = var3.bind(var12)(var4);
                var8 = var13.useStateFromStoresArray;
                var4 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot8;
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
                var8 = var8.bind(var13)(var6, var4);
                var6 = _closure1_slot3;
                var4 = 3;
                var6 = var6.bind(var12)(var8, var4);
                var4 = 0;
                var15 = var6[var4];
                _closure2_slot5 = var15;
                var4 = 1;
                var14 = var6[var4];
                _closure2_slot6 = var14;
                var4 = 2;
                var6 = var6[var4];
                _closure2_slot7 = var6;
                var4 = 10;
                var4 = var17[var4];
                var8 = var3.bind(var12)(var4);
                var4 = var8.useSoundOrganizer;
                var4 = var4.bind(var8)();
                _closure2_slot8 = var4;
                var8 = 13;
                var8 = var17[var8];
                var16 = var3.bind(var12)(var8);
                var13 = var16.useSortedGuildIdsForSoundboard;
                var8 = false;
                var16 = var13.bind(var16)(var20, var8);
                _closure2_slot9 = var16;
                var8 = var17[var2];
                var22 = var3.bind(var12)(var8);
                var21 = var22.useStateFromStoresArray;
                var13 = _closure1_slot5;
                var20 = new Array(1);
                var20[0] = var13;
                var8 = function() { // Environment: var0
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot9;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun68674: for (var _fun68674_ip = 0;;) switch (_fun68674_ip) {
                            case 0:
                                var2 = _closure1_slot5;
                                var1 = var2.getGuild;
                                var0 = arg0;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun68674_ip = 43;
                                    continue _fun68674
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
                var8 = var21.bind(var22)(var20, var8);
                _closure2_slot10 = var8;
                var9 = var17[var9];
                var18 = var18.bind(var12)(var9);
                var9 = var18.canUseSoundboardEverywhere;
                var9 = var9.bind(var18)(var19);
                _closure2_slot11 = var9;
                var18 = var17[var2];
                var20 = var3.bind(var12)(var18);
                var19 = var20.useStateFromStores;
                var18 = new Array(1);
                var18[0] = var13;
                var13 = function() { // Environment: var0
                    _fun68675: for (var _fun68675_ip = 0;;) switch (_fun68675_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun68675_ip = 39;
                                continue _fun68675
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var13 = var19.bind(var20)(var18, var13);
                _closure2_slot12 = var13;
                var2 = var17[var2];
                var18 = var3.bind(var12)(var2);
                var17 = var18.useStateFromStores;
                var2 = _closure1_slot6;
                var12 = new Array(1);
                var12[0] = var2;
                var3 = new Array(1);
                var3[0] = var13;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getManageResourcePermissions;
                    var0 = _closure2_slot12;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.canCreateExpressions;
                    return var0;
                };
                var12 = var17.bind(var18)(var12, var2, var3);
                _closure2_slot13 = var12;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = new Array(13);
                var1[0] = var16;
                var1[1] = var15;
                var1[2] = var14;
                var1[3] = var13;
                var1[4] = var12;
                var1[5] = var11;
                var1[6] = var10;
                var1[7] = var9;
                var1[8] = var8;
                var1[9] = var7;
                var1[10] = var6;
                var1[11] = var5;
                var1[12] = var4;
                var0 = function() { // Environment: var0
                    _fun68677: for (var _fun68677_ip = 0;;) switch (_fun68677_ip) {
                        case 0:
                            var18 = 0;
                            var _closure3_slot0 = var18;
                            var _closure3_slot1 = var18;
                            var3 = new Array(0);
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68677_ip = 959;
                                continue _fun68677
                            }
                        case 29:
                            var7 = {};
                            var7.sections = var3;
                            var0 = _closure2_slot9;
                            var7.guildIds = var0;
                            var0 = _closure2_slot5;
                            var7.allSounds = var0;
                            var1 = global;
                            var6 = var1.Array;
                            var5 = var6.from;
                            var0 = _closure2_slot6;
                            var0 = var5.bind(var6)(var0);
                            var7.potentialSoundIdsForSection = var0;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var17 = 8;
                            var5 = var9[var17];
                            var6 = undefined;
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.SoundboardSoundGridSectionType;
                            var5 = var5.FAVORITES;
                            var7.sectionType = var5;
                            var5 = 10;
                            var5 = var9[var5];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.sortSoundsOldestToNewestCreationDate;
                            var7.sortSoundsFn = var5;
                            var5 = function arg0() {
                                _fun68678: for (var _fun68678_ip = 0;;) switch (_fun68678_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = var1.sections;
                                        var19 = var1.guildIds;
                                        var12 = var1.allSounds;
                                        var8 = var1.potentialSoundIdsForSection;
                                        var _closure4_slot0 = var8;
                                        var6 = var1.sectionType;
                                        var5 = var1.sortSoundsFn;
                                        var11 = {};
                                        var _closure4_slot1 = var11;
                                        var9 = new Array(1);
                                        var2 = 0;
                                        var20 = var9;
                                        var18 = 0;
                                        var4 = arraySpread(var20, var19, var18);
                                        var0 = _closure1_slot9;
                                        var9[var4] = var0;
                                        var0 = 1;
                                        var0 = var4 + var0;
                                        var0 = var9.length;
                                        var4 = var2 < var0;
                                        var0 = undefined;
                                        var10 = null;
                                        var7 = 0;
                                        if (!var4) {
                                            _fun68678_ip = 190;
                                            continue _fun68678
                                        }
                                    case 103:
                                        var15 = var9[var7];
                                        var16 = function arg0() {
                                            _fun68679: for (var _fun68679_ip = 0;;) switch (_fun68679_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var _closure5_slot0 = var2;
                                                    var4 = _closure4_slot0;
                                                    var3 = var4.find;
                                                    var1 = function(arg0) { // Environment: var1
                                                        var0 = _closure5_slot0;
                                                        var1 = var0.soundId;
                                                        var0 = arg0;
                                                        var0 = var0 === var1;
                                                        return var0;
                                                    };
                                                    var3 = var3.bind(var4)(var1);
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun68679_ip = 53;
                                                        continue _fun68679
                                                    }
                                                case 39:
                                                    var1 = _closure4_slot1;
                                                    var0 = var2.soundId;
                                                    var1[var0] = var2;
                                                case 53:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var14 = _closure1_slot12;
                                        var4 = var12.get;
                                        var4 = var4.bind(var12)(var15);
                                        if (!(var10 == var4)) {
                                            _fun68678_ip = 136;
                                            continue _fun68678
                                        }
                                    case 132:
                                        var4 = new Array(0);
                                    case 136:
                                        var15 = var14.bind(var0)(var4);
                                        var14 = var15.bind(var0)();
                                        var4 = var14.done;
                                        if (var4) {
                                            _fun68678_ip = 178;
                                            continue _fun68678
                                        }
                                    case 153:
                                        var4 = var14.value;
                                        var4 = var16.bind(var0)(var4);
                                        var17 = var15.bind(var0)();
                                        var4 = var17.done;
                                        var14 = var17;
                                        if (!var4) {
                                            _fun68678_ip = 153;
                                            continue _fun68678
                                        }
                                    case 178:
                                        var7 = var7 + 1;
                                        var4 = var9.length;
                                        if (var7 < var4) {
                                            _fun68678_ip = 103;
                                            continue _fun68678
                                        }
                                    case 190:
                                        var4 = new Array(0);
                                        var7 = _closure1_slot12;
                                        var9 = var7.bind(var0)(var8);
                                        var8 = var9.bind(var0)();
                                        var7 = var8.done;
                                        if (var7) {
                                            _fun68678_ip = 253;
                                            continue _fun68678
                                        }
                                    case 215:
                                        var7 = var8.value;
                                        var12 = var11[var7];
                                        if (!(var10 != var12)) {
                                            _fun68678_ip = 238;
                                            continue _fun68678
                                        }
                                    case 228:
                                        var7 = var4.push;
                                        var7 = var7.bind(var4)(var12);
                                    case 238:
                                        var12 = var9.bind(var0)();
                                        var7 = var12.done;
                                        var8 = var12;
                                        if (!var7) {
                                            _fun68678_ip = 215;
                                            continue _fun68678
                                        }
                                    case 253:
                                        var1 = _closure1_slot14;
                                        var4 = var1.bind(var0)(var4, var5);
                                        var1 = var4.length;
                                        if (!(var1 > var2)) {
                                            _fun68678_ip = 303;
                                            continue _fun68678
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
                            var5 = var5.bind(var6)(var7);
                            var5 = _closure2_slot12;
                            if (!(var6 !== var5)) {
                                _fun68677_ip = 477;
                                continue _fun68677
                            }
                        case 169:
                            var9 = _closure2_slot12;
                            var8 = {};
                            var5 = _closure2_slot13;
                            var8.currentGuildHasAddPermissions = var5;
                            var5 = _closure2_slot5;
                            var8.allSounds = var5;
                            var5 = _closure2_slot1;
                            var8.filterOutEmptyCurrentGuild = var5;
                            var5 = _closure2_slot8;
                            var8.sortSoundsFn = var5;
                            var7 = var8.currentGuildHasAddPermissions;
                            var12 = var8.allSounds;
                            var5 = var8.filterOutEmptyCurrentGuild;
                            var11 = var8.sortSoundsFn;
                            var10 = var12.get;
                            var8 = var9.id;
                            var10 = var10.bind(var12)(var8);
                            var8 = null;
                            if (!(var8 == var10)) {
                                _fun68677_ip = 260;
                                continue _fun68677
                            }
                        case 256:
                            var10 = new Array(0);
                        case 260:
                            var8 = _closure1_slot14;
                            var8 = var8.bind(var6)(var10, var11);
                            var11 = var10.length;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 9;
                            var10 = var13[var10];
                            var12 = var12.bind(var6)(var10);
                            var10 = var12.getMaxSoundboardSlots;
                            var10 = var10.bind(var12)(var9);
                            var10 = var11 < var10;
                            if (!var10) {
                                _fun68677_ip = 316;
                                continue _fun68677
                            }
                        case 313:
                            var10 = var7;
                        case 316:
                            var7 = var8.length;
                            var7 = var18 === var7;
                            var10 = !var10;
                            if (!var10) {
                                _fun68677_ip = 334;
                                continue _fun68677
                            }
                        case 331:
                            var10 = !var7;
                        case 334:
                            if (var10) {
                                _fun68677_ip = 340;
                                continue _fun68677
                            }
                        case 337:
                            var10 = var5;
                        case 340:
                            if (var10) {
                                _fun68677_ip = 392;
                                continue _fun68677
                            }
                        case 343:
                            var11 = var8.push;
                            var10 = {};
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var12 = var12[var17];
                            var12 = var13.bind(var6)(var12);
                            var12 = var12.SoundboardSoundItemType;
                            var12 = var12.ADD_SOUND;
                            var10.type = var12;
                            var10.guild = var9;
                            var10 = var11.bind(var8)(var10);
                        case 392:
                            if (!var5) {
                                _fun68677_ip = 398;
                                continue _fun68677
                            }
                        case 395:
                            var5 = var7;
                        case 398:
                            if (var5) {
                                _fun68677_ip = 477;
                                continue _fun68677
                            }
                        case 401:
                            var7 = var3.push;
                            var5 = {};
                            var10 = {};
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var11 = var11[var17];
                            var11 = var12.bind(var6)(var11);
                            var11 = var11.SoundboardSoundGridSectionType;
                            var11 = var11.GUILD;
                            var10.type = var11;
                            var10.guild = var9;
                            var11 = false;
                            var10.isNitroLocked = var11;
                            var5.categoryInfo = var10;
                            var9 = var9.id;
                            var5.key = var9;
                            var5.items = var8;
                            var5 = var7.bind(var3)(var5);
                        case 477:
                            var5 = _closure2_slot2;
                            if (var5) {
                                _fun68677_ip = 488;
                                continue _fun68677
                            }
                        case 484:
                            var5 = _closure2_slot11;
                        case 488:
                            if (var5) {
                                _fun68677_ip = 505;
                                continue _fun68677
                            }
                        case 491:
                            var7 = _closure1_slot15;
                            var5 = _closure2_slot5;
                            var5 = var7.bind(var6)(var3, var5);
                        case 505:
                            var5 = {};
                            var5.sections = var3;
                            var7 = _closure2_slot10;
                            var5.guilds = var7;
                            var7 = _closure2_slot12;
                            var16 = null;
                            var8 = var16 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun68677_ip = 545;
                                continue _fun68677
                            }
                        case 536:
                            var8 = _closure2_slot12;
                            var7 = var8.id;
                        case 545:
                            var5.currentGuildId = var7;
                            var7 = _closure2_slot5;
                            var5.allSounds = var7;
                            var7 = _closure2_slot4;
                            var5.hasNitro = var7;
                            var7 = _closure2_slot8;
                            var5.sortSoundsFn = var7;
                            var15 = var5.sections;
                            var7 = var5.guilds;
                            var14 = var5.currentGuildId;
                            var13 = var5.allSounds;
                            var12 = var5.hasNitro;
                            var11 = var5.sortSoundsFn;
                            var5 = _closure1_slot12;
                            var10 = var5.bind(var6)(var7);
                            var7 = var10.bind(var6)();
                            var5 = var7.done;
                            var9 = var7;
                            var8 = undefined;
                            var7 = undefined;
                            if (var5) {
                                _fun68677_ip = 813;
                                continue _fun68677
                            }
                        case 644:
                            var22 = var9.value;
                            var5 = var22.id;
                            if (!(var5 !== var14)) {
                                _fun68677_ip = 795;
                                continue _fun68677
                            }
                        case 661:
                            var20 = _closure1_slot14;
                            var19 = var13.get;
                            var5 = var22.id;
                            var19 = var19.bind(var13)(var5);
                            var5 = var19;
                            if (!(var16 == var19)) {
                                _fun68677_ip = 691;
                                continue _fun68677
                            }
                        case 687:
                            var5 = new Array(0);
                        case 691:
                            var5 = var20.bind(var6)(var5, var11);
                            var20 = var5.length;
                            var8 = var19;
                            var7 = var5;
                            if (!(var20 > var18)) {
                                _fun68677_ip = 795;
                                continue _fun68677
                            }
                        case 712:
                            var21 = var15.push;
                            var20 = {};
                            var23 = {};
                            var25 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var24 = var24[var17];
                            var24 = var25.bind(var6)(var24);
                            var24 = var24.SoundboardSoundGridSectionType;
                            var24 = var24.GUILD;
                            var23.type = var24;
                            var23.guild = var22;
                            var24 = !var12;
                            var23.isNitroLocked = var24;
                            var20.categoryInfo = var23;
                            var22 = var22.id;
                            var20.key = var22;
                            var20.items = var5;
                            var20 = var21.bind(var15)(var20);
                            var8 = var19;
                            var7 = var5;
                        case 795:
                            var19 = var10.bind(var6)();
                            var5 = var19.done;
                            var9 = var19;
                            if (!var5) {
                                _fun68677_ip = 644;
                                continue _fun68677
                            }
                        case 813:
                            var5 = _closure2_slot2;
                            if (var5) {
                                _fun68677_ip = 824;
                                continue _fun68677
                            }
                        case 820:
                            var5 = _closure2_slot11;
                        case 824:
                            if (!var5) {
                                _fun68677_ip = 841;
                                continue _fun68677
                            }
                        case 827:
                            var5 = _closure1_slot15;
                            var0 = _closure2_slot5;
                            var0 = var5.bind(var6)(var3, var0);
                        case 841:
                            var5 = var3.forEach;
                            var0 = function(arg0) { // Environment: var4
                                _fun68681: for (var _fun68681_ip = 0;;) switch (_fun68681_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.categoryInfo;
                                        var3 = var0.type;
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 8;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var4.bind(var0)(var2);
                                        var2 = var2.SoundboardSoundGridSectionType;
                                        var2 = var2.GUILD;
                                        if (!(var3 === var2)) {
                                            _fun68681_ip = 119;
                                            continue _fun68681
                                        }
                                    case 55:
                                        var2 = var1.categoryInfo;
                                        var3 = var2.isNitroLocked;
                                        if (var3) {
                                            _fun68681_ip = 97;
                                            continue _fun68681
                                        }
                                    case 73:
                                        var4 = _closure3_slot0;
                                        var3 = var1.items;
                                        var3 = var3.length;
                                        var3 = var4 + var3;
                                        _closure3_slot0 = var3;
                                        _fun68681_ip = 119;
                                        continue _fun68681;
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
                            var0 = var5.bind(var3)(var0);
                            var0 = {};
                            var0.categories = var3;
                            var6 = var1.Array;
                            var5 = var6.from;
                            var7 = _closure2_slot5;
                            var1 = var7.values;
                            var1 = var1.bind(var7)();
                            var5 = var5.bind(var6)(var1);
                            var1 = var5.flat;
                            var1 = var1.bind(var5)();
                            var0.availableSounds = var1;
                            var1 = _closure2_slot7;
                            var0.isFetching = var1;
                            var1 = {};
                            var5 = _closure2_slot6;
                            var5 = var5.size;
                            var1.favoriteSoundCount = var5;
                            var5 = _closure3_slot0;
                            var1.unlockedCustomSoundCount = var5;
                            var4 = _closure3_slot1;
                            var1.lockedCustomSoundCount = var4;
                            var0.soundCounts = var1;
                            _fun68677_ip = 1049;
                            continue _fun68677;
                        case 959:
                            var6 = _closure1_slot15;
                            var5 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var3, var5);
                            var1 = {};
                            var1.categories = var3;
                            var6 = _closure2_slot5;
                            var5 = var6.get;
                            var3 = _closure1_slot9;
                            var3 = var5.bind(var6)(var3);
                            var5 = null;
                            if (!(var5 == var3)) {
                                _fun68677_ip = 1013;
                                continue _fun68677
                            }
                        case 1009:
                            var3 = _closure1_slot10;
                        case 1013:
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
                        case 1049:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1, arg2() {
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
            _fun68683: for (var _fun68683_ip = 0;;) switch (_fun68683_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun68683_ip = 24;
                        continue _fun68683
                    }
                case 18:
                    var0 = _closure2_slot0;
                    _fun68683_ip = 127;
                    continue _fun68683;
                case 24:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 8;
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
                    var3 = _closure1_slot14;
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
    var2.useSearchCategories = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 3098, 1621, 3954, 3955, 1623, 4808, 6786, 8547, 566, 3116, 8548, 8120, 2]);