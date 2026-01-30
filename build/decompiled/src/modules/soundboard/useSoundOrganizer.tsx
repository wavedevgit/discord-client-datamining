// modules/soundboard/useSoundOrganizer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: _positionUnavailableSoundsAtEnd, environment: var1
        var2 = new Array(0);
        var4 = arg0;
        var3 = 0;
        var5 = var2;
        var0 = arraySpread(var5, var4, var3);
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun68186: for (var _fun68186_ip = 0;;) switch (_fun68186_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var0 = var1.available;
                    if (!var0) {
                        _fun68186_ip = 30;
                        continue _fun68186
                    }
                case 15:
                    var3 = var2.available;
                    var0 = -1;
                    if (!var3) {
                        _fun68186_ip = 58;
                        continue _fun68186
                    }
                case 30:
                    var4 = var1.available;
                    var1 = 0;
                    if (var4) {
                        _fun68186_ip = 55;
                        continue _fun68186
                    }
                case 41:
                    var2 = var2.available;
                    var1 = 0;
                    if (!var2) {
                        _fun68186_ip = 55;
                        continue _fun68186
                    }
                case 52:
                    var1 = 1;
                case 55:
                    var0 = var1;
                case 58:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var3 = function(arg0) { // Original name: sortSoundsOldestToNewestCreationDate, environment: var1
        _fun68187: for (var _fun68187_ip = 0;;) switch (_fun68187_ip) {
            case 0:
                var1 = arguments[1];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun68187_ip = 11;
                    continue _fun68187
                }
            case 9:
                var1 = true;
            case 11:
                var4 = new Array(0);
                var6 = arg0;
                var5 = 0;
                var7 = var4;
                var0 = arraySpread(var7, var6, var5);
                var2 = var4.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var0 = arg0;
                    var1 = var0.soundId;
                    var0 = arg1;
                    var0 = var0.soundId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var4)(var0);
                var0 = var2;
                if (!var1) {
                    _fun68187_ip = 65;
                    continue _fun68187
                }
            case 53:
                var1 = _closure1_slot6;
                var0 = var1.bind(var3)(var2);
            case 65:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = function(arg0) { // Original name: sortSoundsNewestToOldestCreationDate, environment: var1
        _fun68189: for (var _fun68189_ip = 0;;) switch (_fun68189_ip) {
            case 0:
                var1 = arguments[1];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun68189_ip = 11;
                    continue _fun68189
                }
            case 9:
                var1 = true;
            case 11:
                var4 = new Array(0);
                var6 = arg0;
                var5 = 0;
                var7 = var4;
                var0 = arraySpread(var7, var6, var5);
                var2 = var4.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var0 = arg1;
                    var1 = var0.soundId;
                    var0 = arg0;
                    var0 = var0.soundId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var4)(var0);
                var0 = var2;
                if (!var1) {
                    _fun68189_ip = 65;
                    continue _fun68189
                }
            case 53:
                var1 = _closure1_slot6;
                var0 = var1.bind(var3)(var2);
            case 65:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _sortSoundsBySoundIdSequence, environment: var1
        _fun68191: for (var _fun68191_ip = 0;;) switch (_fun68191_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var3 = undefined;
                var0 = undefined;
                if (!(var0 === var0)) {
                    _fun68191_ip = 18;
                    continue _fun68191
                }
            case 16:
                var0 = true;
            case 18:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var1 = global;
                var6 = var1.Map;
                var5 = var8.map;
                var4 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var2 = var1.soundId;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var11 = var5.bind(var8)(var4);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = var5;
                var4 = new var12[var6](var11, var10);
                var6 = var4 instanceof Object ? var4 : var5;
                _closure2_slot0 = var6;
                var4 = new Array(0);
                _closure2_slot1 = var4;
                var5 = var7.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun68193: for (var _fun68193_ip = 0;;) switch (_fun68193_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var1 = var3.get;
                            var4 = var1.bind(var3)(var2);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun68193_ip = 54;
                                continue _fun68193
                            }
                        case 26:
                            var3 = _closure2_slot1;
                            var1 = var3.push;
                            var1 = var1.bind(var3)(var4);
                            var1 = _closure2_slot0;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var7)(var2);
                var5 = var1.Array;
                var2 = var5.from;
                var1 = var6.values;
                var1 = var1.bind(var6)();
                var6 = var2.bind(var5)(var1);
                var2 = new Array(0);
                var9 = 0;
                var11 = var2;
                var10 = var4;
                var9 = arraySpread(var11, var10, var9);
                var4 = _closure1_slot7;
                var10 = var4.bind(var3)(var6, var0);
                var11 = var2;
                var4 = arraySpread(var11, var10, var9);
                var4 = var0;
                var0 = var2;
                if (!var4) {
                    _fun68191_ip = 179;
                    continue _fun68191
                }
            case 170:
                var1 = _closure1_slot6;
                var0 = var1.bind(var3)(var2);
            case 179:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSoundOrganizer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.sortSoundsOldestToNewestCreationDate = var3;
    var1 = function() { // Original name: useSoundOrganizer, environment: var1
        _fun68194: for (var _fun68194_ip = 0;;) switch (_fun68194_ip) {
            case 0:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 4;
                var0 = var3[var7];
                var6 = undefined;
                var8 = var5.bind(var6)(var0);
                var4 = var8.useSoundboardXP3Experiment;
                var0 = 'useSoundOrganizer';
                var0 = var4.bind(var8)(var0);
                var4 = var0.sortingStrategy;
                var8 = 5;
                var0 = var3[var8];
                var11 = var5.bind(var6)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getAllTopSoundsForGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var10.bind(var11)(var9, var0);
                var _closure2_slot0 = var0;
                var8 = var3[var8];
                var11 = var5.bind(var6)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.frecentlyPlayedSounds;
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var8);
                var10 = _closure1_slot3;
                var8 = var10.useRef;
                var8 = var8.bind(var10)(var9);
                var11 = var8.current;
                var _closure2_slot1 = var11;
                var9 = var10.useCallback;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function(arg0) { // Environment: var1
                    _fun68197: for (var _fun68197_ip = 0;;) switch (_fun68197_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun68197_ip = 125;
                                continue _fun68197
                            }
                        case 16:
                            var2 = var0[var2];
                            var4 = var2.guildId;
                            var _closure3_slot0 = var4;
                            var3 = var0.every;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.guildId;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var3.bind(var0)(var2);
                            if (var2) {
                                _fun68197_ip = 52;
                                continue _fun68197
                            }
                        case 50:
                            return var0;
                        case 52:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var4 = var2.bind(var3)(var4);
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun68197_ip = 109;
                                continue _fun68197
                            }
                        case 75:
                            var3 = _closure1_slot9;
                            var2 = var4.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.soundId;
                                return var0;
                            };
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var3.bind(var1)(var0, var2);
                            _fun68197_ip = 123;
                            continue _fun68197;
                        case 109:
                            var3 = _closure1_slot7;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var0);
                        case 123:
                            return var1;
                        case 125:
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var0, var8);
                var9 = var10.useCallback;
                var8 = new Array(1);
                var8[0] = var11;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot1;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.soundId;
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var1 = var9.bind(var10)(var1, var8);
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SoundboardSortingStrategy;
                var3 = var3.TOP_SOUNDS;
                if (!(var3 !== var4)) {
                    _fun68194_ip = 313;
                    continue _fun68194
                }
            case 233:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SoundboardSortingStrategy;
                var3 = var3.RECENTLY_USED_BY_USER;
                if (!(var3 !== var4)) {
                    _fun68194_ip = 311;
                    continue _fun68194
                }
            case 266:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.SoundboardSortingStrategy;
                var3 = var3.NEWEST_CREATION_DATE;
                if (!(var3 !== var4)) {
                    _fun68194_ip = 305;
                    continue _fun68194
                }
            case 299:
                var3 = _closure1_slot7;
                return var3;
            case 305:
                var2 = _closure1_slot8;
                return var2;
            case 311:
                return var1;
            case 313:
                return var0;
        }
    };
    var2.useSoundOrganizer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8471, 3916, 21, 3920, 566, 2]);