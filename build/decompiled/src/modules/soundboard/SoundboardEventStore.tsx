// modules/soundboard/SoundboardEventStore.tsx
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
        _fun68366: for (var _fun68366_ip = 0;;) switch (_fun68366_ip) {
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
            case 72: // try_end0
                _fun68366_ip = 76;
                continue _fun68366;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun68369: for (var _fun68369_ip = 0;;) switch (_fun68369_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68369_ip = 46;
                    continue _fun68369
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun68369_ip = 55;
                    continue _fun68369
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun68369_ip = 345;
                    continue _fun68369
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68369_ip = 323;
                    continue _fun68369
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68369_ip = 283;
                    continue _fun68369
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68369_ip = 270;
                    continue _fun68369
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
                    _fun68369_ip = 163;
                    continue _fun68369
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun68369_ip = 179;
                    continue _fun68369
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68369_ip = 249;
                    continue _fun68369
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68369_ip = 249;
                    continue _fun68369
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68369_ip = 234;
                    continue _fun68369
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68369_ip = 247;
                    continue _fun68369
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun68369_ip = 265;
                continue _fun68369;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun68369_ip = 283;
                continue _fun68369;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun68369_ip = 323;
                    continue _fun68369
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
                    _fun68369_ip = 330;
                    continue _fun68369
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68370: for (var _fun68370_ip = 0;;) switch (_fun68370_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68370_ip = 56;
                                continue _fun68370
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
                            _fun68370_ip = 67;
                            continue _fun68370;
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
        _fun68371: for (var _fun68371_ip = 0;;) switch (_fun68371_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68371_ip = 23;
                    continue _fun68371
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68371_ip = 33;
                    continue _fun68371
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
                    _fun68371_ip = 70;
                    continue _fun68371
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68371_ip = 55;
                    continue _fun68371
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun68372: for (var _fun68372_ip = 0;;) switch (_fun68372_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun68372_ip = 89;
                    continue _fun68372
                }
            case 16:
                var2 = _closure1_slot8;
                var2 = var2.frecencyWithoutFetchingLatest;
                var3 = var2.playedSoundFrecency;
                var2 = null;
                var4 = var2 == var3;
                var5 = undefined;
                if (var4) {
                    _fun68372_ip = 49;
                    continue _fun68372
                }
            case 43:
                var5 = var3.playedSounds;
            case 49:
                var4 = _closure1_slot14;
                var3 = var4.overwriteHistory;
                if (!(var2 == var5)) {
                    _fun68372_ip = 65;
                    continue _fun68372
                }
            case 63:
                var5 = {};
            case 65:
                var2 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.mapValues;
                    var1 = arg0;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var5 = var0;
                        var4 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var3 = var1.recentUses;
                        var2 = var3.map;
                        var1 = global;
                        var1 = var1.Number;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = 'recentUses';
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var0)(var5);
                var1 = _closure1_slot12;
                var1 = var3.bind(var4)(var2, var1);
            case 89:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.isInRecentlyUsedByUserVariant;
        var0 = 'soundboard_event_store';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
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
    var1 = var4.bind(var0)(var1);
    var8 = var1.NUM_RECENTLY_HEARD_SOUNDS;
    var7 = var1.NUM_FREQUENTLY_USED_SOUNDS;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot11 = var1;
    var1 = new Array(0);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var9 = var6.bind(var0)(var1);
    var1 = {};
    var1.max = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var13 = var8;
    var12 = var1;
    var1 = new var13[var9](var12, var11);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var0 = 100;
        return var0;
    };
    var1.computeBonus = var9;
    var9 = function arg0() {
        var2 = _closure1_slot10;
        var1 = var2.getSoundById;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.lookupKey = var9;
    var9 = function() {
        var0 = undefined;
        return var0;
    };
    var1.afterCompute = var9;
    var1.numFrequentlyItems = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var12 = var1;
    var1 = new var13[var8](var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot14 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun68381: for (var _fun68381_ip = 0;;) switch (_fun68381_ip) {
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
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun68381_ip = 69;
                        continue _fun68381
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun68381_ip = 105;
                    continue _fun68381;
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
        var0 = function arg0() {
            _fun68382: for (var _fun68382_ip = 0;;) switch (_fun68382_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var6 = var4.waitFor;
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot8;
                    var0 = _closure1_slot9;
                    var0 = var6.bind(var4)(var5, var3, var0);
                    var5 = null;
                    var6 = var5 == var2;
                    var0 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun68382_ip = 53;
                        continue _fun68382
                    }
                case 47:
                    var3 = var2.recentlyHeardCache;
                case 53:
                    if (!(var5 != var3)) {
                        _fun68382_ip = 78;
                        continue _fun68382
                    }
                case 57:
                    var7 = _closure1_slot13;
                    var6 = var7.load;
                    var3 = var2.recentlyHeardCache;
                    var3 = var6.bind(var7)(var3);
                case 78:
                    var6 = var5 == var2;
                    var3 = undefined;
                    if (var6) {
                        _fun68382_ip = 93;
                        continue _fun68382
                    }
                case 87:
                    var3 = var2.playedEventsPendingFlush;
                case 93:
                    if (!(var5 != var3)) {
                        _fun68382_ip = 107;
                        continue _fun68382
                    }
                case 97:
                    var2 = var2.playedEventsPendingFlush;
                    _closure1_slot12 = var2;
                case 107:
                    var3 = var4.syncWith;
                    var5 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = _closure1_slot18;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var3 = _closure1_slot13;
            var2 = var3.dump;
            var2 = var2.bind(var3)();
            var0.recentlyHeardCache = var2;
            var1 = _closure1_slot12;
            var0.playedEventsPendingFlush = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'playedSoundHistory';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.usageHistory;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'recentlyHeardSoundIds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot13;
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'frecentlyPlayedSounds';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot14;
            var0 = var0.frequently;
            return var0;
        };
        var4.get = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SoundboardEventStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 17;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun68388: for (var _fun68388_ip = 0;;) switch (_fun68388_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.sound;
                var3 = var0.trigger;
                var4 = _closure1_slot19;
                var0 = undefined;
                var4 = var4.bind(var0)();
                if (!var4) {
                    _fun68388_ip = 152;
                    continue _fun68388
                }
            case 31:
                var4 = var2.soundId;
                var2 = var4.toString;
                var5 = var2.bind(var4)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var2 = var4.bind(var0)(var2);
                var2 = var2.LocalSoundTrigger;
                var2 = var2.SOUNDBOARD;
                if (!(var3 === var2)) {
                    _fun68388_ip = 152;
                    continue _fun68388
                }
            case 82:
                var3 = _closure1_slot14;
                var2 = var3.track;
                var2 = var2.bind(var3)(var5);
                var4 = _closure1_slot12;
                var3 = var4.push;
                var2 = {};
                var2.key = var5;
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var2.timestamp = var5;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot14;
                var1 = var2.compute;
                var1 = var1.bind(var2)();
            case 152:
                return var0;
        }
    };
    var1.GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY = var8;
    var8 = function arg0() {
        _fun68389: for (var _fun68389_ip = 0;;) switch (_fun68389_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.soundId;
                var4 = var0.userId;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var2);
                var5 = var6.recentlyHeardExperiment;
                var2 = {
                    'location': 'soundboard_event_store',
                    'autoTrackExposure': false
                };
                var2 = var5.bind(var6)(var2);
                var2 = var2.canSeeRecentlyHeard;
                if (!var2) {
                    _fun68389_ip = 150;
                    continue _fun68389
                }
            case 73:
                var2 = var3.toString;
                var3 = var2.bind(var3)();
                var5 = _closure1_slot9;
                var2 = var5.getCurrentUser;
                var5 = var2.bind(var5)();
                var2 = null;
                var6 = var2 == var5;
                var2 = undefined;
                if (var6) {
                    _fun68389_ip = 111;
                    continue _fun68389
                }
            case 106:
                var2 = var5.id;
            case 111:
                var2 = var4 !== var2;
                if (!var2) {
                    _fun68389_ip = 132;
                    continue _fun68389
                }
            case 118:
                var4 = function arg0() {
                    _fun68390: for (var _fun68390_ip = 0;;) switch (_fun68390_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var1 = _closure1_slot16;
                            var2 = _closure1_slot10;
                            var0 = var2.getSounds;
                            var2 = var0.bind(var2)();
                            var0 = var2.values;
                            var0 = var0.bind(var2)();
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var1 = var3.bind(var4)();
                            var0 = var1.done;
                            var2 = null;
                            if (var0) {
                                _fun68390_ip = 107;
                                continue _fun68390
                            }
                        case 60:
                            var7 = var1.value;
                            var6 = var7.find;
                            var0 = function(arg0) { // Environment: var5
                                var0 = arg0;
                                var1 = var0.soundId;
                                var0 = var1.toString;
                                var1 = var0.bind(var1)();
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var6.bind(var7)(var0);
                            if (!(var2 == var0)) {
                                _fun68390_ip = 103;
                                continue _fun68390
                            }
                        case 86:
                            var6 = var3.bind(var4)();
                            var0 = var6.done;
                            var1 = var6;
                            if (var0) {
                                _fun68390_ip = 107;
                                continue _fun68390
                            }
                        case 101:
                            _fun68390_ip = 60;
                            continue _fun68390;
                        case 103:
                            var0 = true;
                            return var0;
                        case 107:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var4.bind(var0)(var3);
            case 132:
                if (!var2) {
                    _fun68389_ip = 150;
                    continue _fun68389
                }
            case 135:
                var2 = _closure1_slot13;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var3);
            case 150:
                return var0;
        }
    };
    var1.GUILD_SOUNDBOARD_SOUND_PLAY_START = var8;
    var3 = function arg0() {
        _fun68392: for (var _fun68392_ip = 0;;) switch (_fun68392_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var5 = var1.type;
                var3 = var0.wasSaved;
                var1 = _closure1_slot19;
                var0 = undefined;
                var1 = var1.bind(var0)();
                if (!var1) {
                    _fun68392_ip = 50;
                    continue _fun68392
                }
            case 36:
                var4 = _closure1_slot11;
                var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                var1 = var5 === var4;
            case 50:
                if (!var1) {
                    _fun68392_ip = 56;
                    continue _fun68392
                }
            case 53:
                var1 = var3;
            case 56:
                if (!var1) {
                    _fun68392_ip = 67;
                    continue _fun68392
                }
            case 59:
                var1 = new Array(0);
                _closure1_slot12 = var1;
            case 67:
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/SoundboardEventStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 1621, 3956, 3957, 665, 1386, 3607, 4799, 22, 8514, 3960, 566, 806, 2]);