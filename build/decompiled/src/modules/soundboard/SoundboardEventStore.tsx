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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun68109: for (var _fun68109_ip = 0;;) switch (_fun68109_ip) {
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
                _fun68109_ip = 76;
                continue _fun68109;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun68112: for (var _fun68112_ip = 0;;) switch (_fun68112_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun68112_ip = 45;
                    continue _fun68112
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun68112_ip = 54;
                    continue _fun68112
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun68112_ip = 344;
                    continue _fun68112
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun68112_ip = 322;
                    continue _fun68112
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun68112_ip = 282;
                    continue _fun68112
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun68112_ip = 269;
                    continue _fun68112
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
                    _fun68112_ip = 162;
                    continue _fun68112
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun68112_ip = 178;
                    continue _fun68112
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun68112_ip = 248;
                    continue _fun68112
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun68112_ip = 248;
                    continue _fun68112
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun68112_ip = 233;
                    continue _fun68112
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun68112_ip = 246;
                    continue _fun68112
                }
            case 233:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun68112_ip = 264;
                continue _fun68112;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun68112_ip = 282;
                continue _fun68112;
            case 269:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun68112_ip = 322;
                    continue _fun68112
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
                    _fun68112_ip = 329;
                    continue _fun68112
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun68113: for (var _fun68113_ip = 0;;) switch (_fun68113_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun68113_ip = 56;
                                continue _fun68113
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
                            _fun68113_ip = 67;
                            continue _fun68113;
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
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun68114: for (var _fun68114_ip = 0;;) switch (_fun68114_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun68114_ip = 23;
                    continue _fun68114
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun68114_ip = 33;
                    continue _fun68114
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
                    _fun68114_ip = 70;
                    continue _fun68114
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun68114_ip = 55;
                    continue _fun68114
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: handleUserSettingsProtoStoreChange, environment: var3
        _fun68115: for (var _fun68115_ip = 0;;) switch (_fun68115_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun68115_ip = 89;
                    continue _fun68115
                }
            case 16:
                var2 = _closure1_slot8;
                var2 = var2.frecencyWithoutFetchingLatest;
                var3 = var2.playedSoundFrecency;
                var2 = null;
                var4 = var2 == var3;
                var5 = undefined;
                if (var4) {
                    _fun68115_ip = 49;
                    continue _fun68115
                }
            case 43:
                var5 = var3.playedSounds;
            case 49:
                var4 = _closure1_slot14;
                var3 = var4.overwriteHistory;
                if (!(var2 == var5)) {
                    _fun68115_ip = 65;
                    continue _fun68115
                }
            case 63:
                var5 = {};
            case 65:
                var2 = function(arg0) { // Original name: deserializedEventHistory, environment: var2
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
    var0 = function() { // Original name: _canUseFrequentlyUsed, environment: var3
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
    var9 = function() { // Original name: computeBonus, environment: var3
        var0 = 100;
        return var0;
    };
    var1.computeBonus = var9;
    var9 = function(arg0) { // Original name: lookupKey, environment: var3
        var2 = _closure1_slot10;
        var1 = var2.getSoundById;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.lookupKey = var9;
    var9 = function() { // Original name: afterCompute, environment: var3
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
        var3 = function() { // Original name: SoundboardEventStore, environment: var5
            _fun68124: for (var _fun68124_ip = 0;;) switch (_fun68124_ip) {
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
                        _fun68124_ip = 69;
                        continue _fun68124
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun68124_ip = 105;
                    continue _fun68124;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun68125: for (var _fun68125_ip = 0;;) switch (_fun68125_ip) {
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
                        _fun68125_ip = 53;
                        continue _fun68125
                    }
                case 47:
                    var3 = var2.recentlyHeardCache;
                case 53:
                    if (!(var5 != var3)) {
                        _fun68125_ip = 78;
                        continue _fun68125
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
                        _fun68125_ip = 93;
                        continue _fun68125
                    }
                case 87:
                    var3 = var2.playedEventsPendingFlush;
                case 93:
                    if (!(var5 != var3)) {
                        _fun68125_ip = 107;
                        continue _fun68125
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
        var6 = function() { // Original name: value, environment: var5
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
        var6 = function() { // Original name: value, environment: var5
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
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot14;
            var0 = var0.usageHistory;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'recentlyHeardSoundIds';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
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
        var5 = function() { // Original name: get, environment: var5
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
    var8 = function(arg0) { // Original name: handleSoundPlayLocally, environment: var3
        _fun68131: for (var _fun68131_ip = 0;;) switch (_fun68131_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.sound;
                var3 = var0.trigger;
                var4 = _closure1_slot19;
                var0 = undefined;
                var4 = var4.bind(var0)();
                if (!var4) {
                    _fun68131_ip = 152;
                    continue _fun68131
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
                    _fun68131_ip = 152;
                    continue _fun68131
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
    var8 = function(arg0) { // Original name: handleSoundPlayStart, environment: var3
        _fun68132: for (var _fun68132_ip = 0;;) switch (_fun68132_ip) {
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
                    _fun68132_ip = 150;
                    continue _fun68132
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
                    _fun68132_ip = 111;
                    continue _fun68132
                }
            case 106:
                var2 = var5.id;
            case 111:
                var2 = var4 !== var2;
                if (!var2) {
                    _fun68132_ip = 132;
                    continue _fun68132
                }
            case 118:
                var4 = function(arg0) { // Original name: _soundInJoinedGuilds, environment: var4
                    _fun68133: for (var _fun68133_ip = 0;;) switch (_fun68133_ip) {
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
                                _fun68133_ip = 107;
                                continue _fun68133
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
                                _fun68133_ip = 103;
                                continue _fun68133
                            }
                        case 86:
                            var6 = var3.bind(var4)();
                            var0 = var6.done;
                            var1 = var6;
                            if (var0) {
                                _fun68133_ip = 107;
                                continue _fun68133
                            }
                        case 101:
                            _fun68133_ip = 60;
                            continue _fun68133;
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
                    _fun68132_ip = 150;
                    continue _fun68132
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
    var3 = function(arg0) { // Original name: handleUserSettingsProtoUpdate, environment: var3
        _fun68135: for (var _fun68135_ip = 0;;) switch (_fun68135_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var5 = var1.type;
                var3 = var0.wasSaved;
                var1 = _closure1_slot19;
                var0 = undefined;
                var1 = var1.bind(var0)();
                if (!var1) {
                    _fun68135_ip = 50;
                    continue _fun68135
                }
            case 36:
                var4 = _closure1_slot11;
                var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
                var1 = var5 === var4;
            case 50:
                if (!var1) {
                    _fun68135_ip = 56;
                    continue _fun68135
                }
            case 53:
                var1 = var3;
            case 56:
                if (!var1) {
                    _fun68135_ip = 67;
                    continue _fun68135
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 1613, 3910, 3911, 665, 1386, 3564, 4755, 22, 8469, 3914, 566, 806, 2]);