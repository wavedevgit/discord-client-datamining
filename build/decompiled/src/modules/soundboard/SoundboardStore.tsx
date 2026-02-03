// modules/soundboard/SoundboardStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun36028: for (var _fun36028_ip = 0;;) switch (_fun36028_ip) {
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
                _fun36028_ip = 74;
                continue _fun36028;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun36031: for (var _fun36031_ip = 0;;) switch (_fun36031_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun36031_ip = 46;
                    continue _fun36031
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun36031_ip = 55;
                    continue _fun36031
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun36031_ip = 343;
                    continue _fun36031
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun36031_ip = 323;
                    continue _fun36031
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun36031_ip = 283;
                    continue _fun36031
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun36031_ip = 270;
                    continue _fun36031
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
                    _fun36031_ip = 163;
                    continue _fun36031
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun36031_ip = 179;
                    continue _fun36031
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun36031_ip = 249;
                    continue _fun36031
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun36031_ip = 249;
                    continue _fun36031
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun36031_ip = 234;
                    continue _fun36031
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun36031_ip = 247;
                    continue _fun36031
                }
            case 234:
                var8 = _closure1_slot29;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun36031_ip = 265;
                continue _fun36031;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun36031_ip = 283;
                continue _fun36031;
            case 270:
                var6 = _closure1_slot29;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun36031_ip = 323;
                    continue _fun36031
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
                    _fun36031_ip = 330;
                    continue _fun36031
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun36032: for (var _fun36032_ip = 0;;) switch (_fun36032_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun36032_ip = 56;
                                continue _fun36032
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
                            _fun36032_ip = 67;
                            continue _fun36032;
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
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun36033: for (var _fun36033_ip = 0;;) switch (_fun36033_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun36033_ip = 23;
                    continue _fun36033
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun36033_ip = 33;
                    continue _fun36033
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
                    _fun36033_ip = 70;
                    continue _fun36033
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun36033_ip = 55;
                    continue _fun36033
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var9 = function arg0() {
        _fun36034: for (var _fun36034_ip = 0;;) switch (_fun36034_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.sound;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot15;
                var3 = var4.get;
                var0 = var1.guildId;
                var6 = var3.bind(var4)(var0);
                var4 = null;
                var7 = var4 == var6;
                var0 = undefined;
                var3 = undefined;
                if (var7) {
                    _fun36034_ip = 66;
                    continue _fun36034
                }
            case 50:
                var7 = var6.findIndex;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var1 = var0.soundId;
                    var0 = _closure2_slot0;
                    var0 = var0.soundId;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var7.bind(var6)(var5);
            case 66:
                if (!(var4 != var6)) {
                    _fun36034_ip = 84;
                    continue _fun36034
                }
            case 70:
                if (!(var4 != var3)) {
                    _fun36034_ip = 84;
                    continue _fun36034
                }
            case 74:
                var5 = -1;
                if (!(var5 === var3)) {
                    _fun36034_ip = 140;
                    continue _fun36034
                }
            case 84:
                if (!(var4 != var6)) {
                    _fun36034_ip = 180;
                    continue _fun36034
                }
            case 88:
                if (!(var4 != var6)) {
                    _fun36034_ip = 102;
                    continue _fun36034
                }
            case 92:
                var4 = var6.push;
                var4 = var4.bind(var6)(var1);
            case 102:
                var8 = _closure1_slot15;
                var7 = var8.set;
                var5 = var1.guildId;
                var4 = new Array(0);
                var10 = 0;
                var12 = var4;
                var11 = var6;
                var9 = arraySpread(var12, var11, var10);
                var4 = var7.bind(var8)(var5, var4);
                _fun36034_ip = 180;
                continue _fun36034;
            case 140:
                var6[var3] = var1;
                var4 = _closure1_slot15;
                var3 = var4.set;
                var2 = var1.guildId;
                var1 = new Array(0);
                var10 = 0;
                var12 = var1;
                var11 = var6;
                var5 = arraySpread(var12, var11, var10);
                var1 = var3.bind(var4)(var2, var1);
            case 180:
                return var0;
        }
    };
    var0 = function arg0() {
        _fun36036: for (var _fun36036_ip = 0;;) switch (_fun36036_ip) {
            case 0:
                var1 = arg0;
                var6 = null;
                var3 = var6 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun36036_ip = 36;
                    continue _fun36036
                }
            case 16:
                var1 = var1.audioContextSettings;
                var3 = var6 == var1;
                var2 = undefined;
                if (var3) {
                    _fun36036_ip = 36;
                    continue _fun36036
                }
            case 31:
                var2 = var1.user;
            case 36:
                if (!(var6 == var2)) {
                    _fun36036_ip = 42;
                    continue _fun36036
                }
            case 40:
                var2 = {};
            case 42:
                var1 = global;
                var3 = var1.Object;
                var1 = var3.entries;
                var9 = var1.bind(var3)(var2);
                var1 = var9.length;
                var8 = 0;
                var1 = var8 < var1;
                var7 = 2;
                var3 = 1;
                var4 = var2;
                var2 = 0;
                if (!var1) {
                    _fun36036_ip = 158;
                    continue _fun36036
                }
            case 89:
                var10 = var9[var2];
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var10, var7);
                var11 = var1[var8];
                var1 = var1[var3];
                var1 = var1.soundboardMuted;
                var10 = _closure1_slot18;
                if (var1) {
                    _fun36036_ip = 136;
                    continue _fun36036
                }
            case 124:
                var1 = var10.delete;
                var1 = var1.bind(var10)(var11);
                _fun36036_ip = 146;
                continue _fun36036;
            case 136:
                var1 = var10.add;
                var1 = var1.bind(var10)(var11);
            case 146:
                var2 = var2 + 1;
                var1 = var9.length;
                if (var2 < var1) {
                    _fun36036_ip = 89;
                    continue _fun36036
                }
            case 158:
                var2 = _closure1_slot28;
                var3 = _closure1_slot18;
                var1 = var3.keys;
                var1 = var1.bind(var3)();
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun36036_ip = 234;
                    continue _fun36036
                }
            case 192:
                var8 = var2.value;
                var1 = var4[var8];
                if (!(var6 == var1)) {
                    _fun36036_ip = 219;
                    continue _fun36036
                }
            case 205:
                var7 = _closure1_slot18;
                var1 = var7.delete;
                var1 = var1.bind(var7)(var8);
            case 219:
                var7 = var3.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun36036_ip = 192;
                    continue _fun36036
                }
            case 234:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var3 = global;
    var10 = var3.Object;
    var8 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var1);
    var8 = 0;
    var1 = var6[var8];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var11 = 2;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot13 = var1;
    var1 = {};
    var1.NOT_FETCHED = var8;
    var10 = 'NOT_FETCHED';
    var1[var8] = var10;
    var1.FETCHING = var12;
    var10 = 'FETCHING';
    var1[var12] = var10;
    var1.FETCHED = var11;
    var10 = 'FETCHED';
    var1[var11] = var10;
    var _closure1_slot14 = var1;
    var10 = var3.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot15 = var10;
    var10 = var3.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot16 = var10;
    var10 = var3.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot17 = var10;
    var10 = var3.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot18 = var10;
    var10 = var1.NOT_FETCHED;
    var _closure1_slot19 = var10;
    var10 = var1.NOT_FETCHED;
    var _closure1_slot20 = var10;
    var10 = var1.NOT_FETCHED;
    var _closure1_slot21 = var10;
    var _closure1_slot22 = var8;
    var8 = var3.Set;
    var10 = var8.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var8
        }
    });
    var16 = var10;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot23 = var8;
    var3 = var3.Map;
    var8 = var3.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var3
        }
    });
    var16 = var8;
    var3 = new var16[var3](var15);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot24 = var3;
    var3 = false;
    var _closure1_slot25 = var3;
    var3 = 11;
    var3 = var6[var3];
    var11 = var7.bind(var0)(var3);
    var10 = var11.debounce;
    var8 = function(arg0, arg1) { // Environment: var4
        var4 = arg0;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 12;
        var1 = var3[var0];
        var0 = undefined;
        var7 = var5.bind(var0)(var1);
        var6 = var7.track;
        var1 = _closure1_slot12;
        var5 = var1.UPDATE_SOUNDBOARD_SETTINGS;
        var1 = {};
        var8 = global;
        var10 = var8.Math;
        var9 = var10.round;
        var2 = _closure1_slot0;
        var8 = 13;
        var8 = var3[var8];
        var11 = var2.bind(var0)(var8);
        var8 = var11.amplitudeToPerceptual;
        var8 = var8.bind(var11)(var4);
        var8 = var9.bind(var10)(var8);
        var1.volume = var8;
        var8 = arg1;
        var1.location_stack = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = 14;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.SoundboardSettings;
        var2 = var3.updateSetting;
        var1 = {};
        var1.volume = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3 = 1000;
    var3 = var10.bind(var11)(var8, var3);
    var _closure1_slot26 = var3;
    var3 = 17;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun36039: for (var _fun36039_ip = 0;;) switch (_fun36039_ip) {
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
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36039_ip = 69;
                        continue _fun36039
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36039_ip = 105;
                    continue _fun36039;
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
            var4 = this;
            var3 = var4.waitFor;
            var0 = _closure1_slot9;
            var2 = _closure1_slot10;
            var2 = var3.bind(var4)(var0, var2);
            var2 = _closure1_slot30;
            var1 = var0.settings;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(22);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOverlaySerializedState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = global;
            var5 = var2.Object;
            var4 = var5.fromEntries;
            var3 = _closure1_slot15;
            var3 = var4.bind(var5)(var3);
            var0.soundboardSounds = var3;
            var5 = var2.Array;
            var4 = var5.from;
            var3 = _closure1_slot23;
            var3 = var4.bind(var5)(var3);
            var0.favoritedSoundIds = var3;
            var3 = var2.Array;
            var2 = var3.from;
            var1 = _closure1_slot18;
            var1 = var2.bind(var3)(var1);
            var0.localSoundboardMutes = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSounds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSoundsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot15;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSound';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun36044: for (var _fun36044_ip = 0;;) switch (_fun36044_ip) {
                case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot15;
                    var2 = var3.get;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun36044_ip = 39;
                        continue _fun36044
                    }
                case 35:
                    var2 = new Array(0);
                case 39:
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.soundId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSoundById';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot15;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.flat;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.soundId;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isFetchingSounds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot20;
            var0 = _closure1_slot14;
            var0 = var0.FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isFetchingDefaultSounds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot19;
            var0 = _closure1_slot14;
            var0 = var0.FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            _fun36050: for (var _fun36050_ip = 0;;) switch (_fun36050_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.isFetchingSounds;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36050_ip = 30;
                        continue _fun36050
                    }
                case 18:
                    var1 = var2.isFetchingDefaultSounds;
                    var0 = var1.bind(var2)();
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'shouldFetchDefaultSounds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot19;
            var0 = _closure1_slot14;
            var0 = var0.NOT_FETCHED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'hasFetchedDefaultSounds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot19;
            var0 = _closure1_slot14;
            var0 = var0.FETCHED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isUserPlayingSounds';
        var4.key = var6;
        var6 = function arg0() {
            _fun36053: for (var _fun36053_ip = 0;;) switch (_fun36053_ip) {
                case 0:
                    var2 = _closure1_slot24;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun36053_ip = 35;
                        continue _fun36053
                    }
                case 29:
                    var1 = 0;
                    var0 = var2 > var1;
                case 35:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isPlayingSound';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot17;
            var1 = var2.get;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'isFavoriteSound';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot23;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getFavorites';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getAllTopSoundsForGuilds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isLocalSoundboardMuted';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot18;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'hasHadOtherUserPlaySoundInSession';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'shouldFetchTopSoundsForGuilds';
        var4.key = var6;
        var6 = function() {
            _fun36060: for (var _fun36060_ip = 0;;) switch (_fun36060_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isInTopSoundsForGuildsVariant;
                    var0 = 'SoundboardStore';
                    var0 = var1.bind(var2)(var0);
                    if (!var0) {
                        _fun36060_ip = 128;
                        continue _fun36060
                    }
                case 45:
                    var2 = _closure1_slot21;
                    var1 = _closure1_slot14;
                    var1 = var1.NOT_FETCHED;
                    var1 = var2 === var1;
                    if (var1) {
                        _fun36060_ip = 125;
                        continue _fun36060
                    }
                case 66:
                    var4 = _closure1_slot21;
                    var2 = _closure1_slot14;
                    var2 = var2.FETCHED;
                    var2 = var4 === var2;
                    if (!var2) {
                        _fun36060_ip = 122;
                        continue _fun36060
                    }
                case 87:
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var3 = _closure1_slot22;
                    var4 = var4 - var3;
                    var3 = 86400000;
                    var2 = var4 > var3;
                case 122:
                    var1 = var2;
                case 125:
                    var0 = var1;
                case 128:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'hasFetchedTopSoundsForGuilds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot21;
            var0 = _closure1_slot14;
            var0 = var0.FETCHED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'hasFetchedAllSounds';
        var4.key = var6;
        var6 = function() {
            _fun36062: for (var _fun36062_ip = 0;;) switch (_fun36062_ip) {
                case 0:
                    var1 = _closure1_slot20;
                    var2 = new Array(2);
                    var2[0] = var1;
                    var1 = _closure1_slot19;
                    var2[1] = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isInTopSoundsForGuildsVariant;
                    var1 = 'SoundboardStore';
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun36062_ip = 79;
                        continue _fun36062
                    }
                case 65:
                    var1 = var2.push;
                    var0 = _closure1_slot21;
                    var0 = var1.bind(var2)(var0);
                case 79:
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure1_slot14;
                        var1 = var0.FETCHED;
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isFetchingAnySounds';
        var4.key = var6;
        var5 = function() {
            var1 = _closure1_slot20;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = _closure1_slot19;
            var2[1] = var1;
            var0 = _closure1_slot21;
            var2[2] = var0;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = _closure1_slot14;
                var1 = var0.FETCHING;
                var0 = arg0;
                var0 = var0 === var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[21] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SoundboardStore';
    var8.displayName = var3;
    var3 = 18;
    var3 = var6[var3];
    var15 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function() {
        var2 = _closure1_slot15;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot16;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = 0;
        _closure1_slot22 = var0;
        var2 = _closure1_slot17;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot24;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = false;
        _closure1_slot25 = var0;
        var0 = _closure1_slot14;
        var2 = var0.NOT_FETCHED;
        _closure1_slot20 = var2;
        var2 = var0.NOT_FETCHED;
        _closure1_slot21 = var2;
        var0 = var0.NOT_FETCHED;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var10;
    var10 = function() {
        var0 = _closure1_slot14;
        var0 = var0.FETCHING;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SOUNDBOARD_FETCH = var10;
    var3.GUILD_SOUNDBOARD_SOUND_CREATE = var9;
    var3.GUILD_SOUNDBOARD_SOUND_UPDATE = var9;
    var9 = function arg0() {
        _fun36068: for (var _fun36068_ip = 0;;) switch (_fun36068_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.soundId;
                var _closure2_slot0 = var1;
                var4 = var0.guildId;
                var3 = _closure1_slot15;
                var0 = var3.get;
                var6 = var0.bind(var3)(var4);
                var3 = null;
                var7 = var3 == var6;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun36068_ip = 66;
                    continue _fun36068
                }
            case 50:
                var7 = var6.findIndex;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.soundId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var7.bind(var6)(var2);
            case 66:
                var2 = var3 == var6;
                if (var2) {
                    _fun36068_ip = 77;
                    continue _fun36068
                }
            case 73:
                var2 = var3 == var5;
            case 77:
                if (var2) {
                    _fun36068_ip = 86;
                    continue _fun36068
                }
            case 80:
                var3 = 0;
                var2 = var5 < var3;
            case 86:
                if (var2) {
                    _fun36068_ip = 135;
                    continue _fun36068
                }
            case 89:
                var3 = var6.splice;
                var2 = 1;
                var2 = var3.bind(var6)(var5, var2);
                var3 = _closure1_slot15;
                var2 = var3.set;
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var9 = var6;
                var5 = arraySpread(var10, var9, var8);
                var1 = var2.bind(var3)(var4, var1);
            case 135:
                return var0;
        }
    };
    var3.GUILD_SOUNDBOARD_SOUND_DELETE = var9;
    var9 = function arg0() {
        _fun36070: for (var _fun36070_ip = 0;;) switch (_fun36070_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.soundId;
                var3 = var0.userId;
                var1 = _closure1_slot17;
                var0 = var1.get;
                var1 = var0.bind(var1)(var7);
                var0 = null;
                var6 = var0 != var1;
                var5 = 0;
                if (!var6) {
                    _fun36070_ip = 45;
                    continue _fun36070
                }
            case 42:
                var5 = var1;
            case 45:
                var1 = 1;
                var6 = var5 + var1;
                var8 = _closure1_slot24;
                var5 = var8.get;
                var5 = var5.bind(var8)(var3);
                var8 = var0 != var5;
                var4 = 0;
                if (!var8) {
                    _fun36070_ip = 78;
                    continue _fun36070
                }
            case 75:
                var4 = var5;
            case 78:
                var5 = var4 + var1;
                var4 = _closure1_slot17;
                var1 = var4.set;
                var1 = var1.bind(var4)(var7, var6);
                var4 = _closure1_slot24;
                var1 = var4.set;
                var1 = var1.bind(var4)(var3, var5);
                var4 = _closure1_slot10;
                var1 = var4.getCurrentUser;
                var4 = var1.bind(var4)();
                var5 = var0 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun36070_ip = 141;
                    continue _fun36070
                }
            case 136:
                var1 = var4.id;
            case 141:
                if (!(var3 !== var1)) {
                    _fun36070_ip = 151;
                    continue _fun36070
                }
            case 145:
                var1 = true;
                _closure1_slot25 = var1;
            case 151:
                return var0;
        }
    };
    var3.GUILD_SOUNDBOARD_SOUND_PLAY_START = var9;
    var9 = function arg0() {
        _fun36071: for (var _fun36071_ip = 0;;) switch (_fun36071_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.soundId;
                var2 = var0.userId;
                var3 = _closure1_slot17;
                var1 = var3.get;
                var4 = var1.bind(var3)(var6);
                var3 = null;
                var7 = var3 != var4;
                var1 = 0;
                var5 = 0;
                if (!var7) {
                    _fun36071_ip = 47;
                    continue _fun36071
                }
            case 44:
                var5 = var4;
            case 47:
                var4 = 1;
                var7 = var5 - var4;
                var8 = _closure1_slot24;
                var5 = var8.get;
                var5 = var5.bind(var8)(var2);
                var8 = var3 != var5;
                var3 = 0;
                if (!var8) {
                    _fun36071_ip = 80;
                    continue _fun36071
                }
            case 77:
                var3 = var5;
            case 80:
                var4 = var3 - var4;
                if (!(!(var7 <= var1))) {
                    _fun36071_ip = 105;
                    continue _fun36071
                }
            case 88:
                var5 = _closure1_slot17;
                var3 = var5.set;
                var3 = var3.bind(var5)(var6, var7);
                _fun36071_ip = 119;
                continue _fun36071;
            case 105:
                var5 = _closure1_slot17;
                var3 = var5.delete;
                var3 = var3.bind(var5)(var6);
            case 119:
                if (!(!(var4 <= var1))) {
                    _fun36071_ip = 140;
                    continue _fun36071
                }
            case 123:
                var3 = _closure1_slot24;
                var1 = var3.set;
                var1 = var1.bind(var3)(var2, var4);
                _fun36071_ip = 154;
                continue _fun36071;
            case 140:
                var1 = _closure1_slot24;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 154:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SOUNDBOARD_SOUND_PLAY_END = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.soundboardSounds;
        var1 = _closure1_slot15;
        var0 = var1.set;
        var0 = var0.bind(var1)(var3, var2);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SOUNDBOARD_SOUNDS_UPDATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.volume;
        var2 = var0.location;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var3.USER_SOUNDBOARD_SET_VOLUME = var9;
    var9 = function() {
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot24;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.VOICE_CHANNEL_SELECT = var9;
    var9 = function arg0() {
        _fun36075: for (var _fun36075_ip = 0;;) switch (_fun36075_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.settings;
                var2 = var0.type;
                var4 = var0.proto;
                var0 = _closure1_slot13;
                var0 = var0.FRECENCY_AND_FAVORITES_SETTINGS;
                if (!(var2 !== var0)) {
                    _fun36075_ip = 64;
                    continue _fun36075
                }
            case 37:
                var0 = _closure1_slot13;
                var0 = var0.PRELOADED_USER_SETTINGS;
                if (!(var2 === var0)) {
                    _fun36075_ip = 139;
                    continue _fun36075
                }
            case 51:
                var2 = _closure1_slot30;
                var0 = undefined;
                var0 = var2.bind(var0)(var4);
                _fun36075_ip = 139;
                continue _fun36075;
            case 64:
                var0 = global;
                var3 = var0.Set;
                var2 = null;
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun36075_ip = 104;
                    continue _fun36075
                }
            case 83:
                var4 = var4.favoriteSoundboardSounds;
                var5 = var2 == var4;
                var0 = undefined;
                if (var5) {
                    _fun36075_ip = 104;
                    continue _fun36075
                }
            case 98:
                var0 = var4.soundIds;
            case 104:
                if (!(var2 == var0)) {
                    _fun36075_ip = 112;
                    continue _fun36075
                }
            case 108:
                var0 = new Array(0);
            case 112:
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var7 = var0;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot23 = var0;
            case 139:
                var0 = undefined;
                return var0;
        }
    };
    var3.USER_SETTINGS_PROTO_UPDATE = var9;
    var9 = function() {
        var0 = _closure1_slot14;
        var0 = var0.FETCHING;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_FETCH_DEFAULT_SOUNDS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.soundboardSounds;
        var3 = _closure1_slot15;
        var2 = var3.set;
        var0 = _closure1_slot11;
        var0 = var2.bind(var3)(var0, var4);
        var0 = _closure1_slot14;
        var0 = var0.FETCHED;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS = var9;
    var9 = function() {
        var0 = _closure1_slot14;
        var0 = var0.FETCHING;
        _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH = var9;
    var9 = function arg0() {
        var0 = arg0;
        var4 = var0.topSoundsForGuilds;
        var0 = global;
        var1 = var0.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var5 = var2;
        var1 = new var5[var1](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot16 = var2;
        var2 = _closure1_slot14;
        var2 = var2.FETCHED;
        _closure1_slot21 = var2;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS = var9;
    var9 = function() {
        var0 = _closure1_slot14;
        var0 = var0.FETCHED;
        _closure1_slot21 = var0;
        var0 = 0;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.updates;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.guildId;
            var2 = var0.sounds;
            var1 = _closure1_slot15;
            var0 = var1.set;
            var0 = var0.bind(var1)(var3, var2);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = _closure1_slot14;
        var0 = var0.FETCHED;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SOUNDBOARD_SOUNDS_RECEIVED = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot15;
        var1 = var2.delete;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.GUILD_DELETE = var9;
    var9 = function arg0() {
        _fun36084: for (var _fun36084_ip = 0;;) switch (_fun36084_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var3 = _closure1_slot18;
                var0 = var3.has;
                var0 = var0.bind(var3)(var2);
                var1 = _closure1_slot18;
                if (var0) {
                    _fun36084_ip = 44;
                    continue _fun36084
                }
            case 32:
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                _fun36084_ip = 54;
                continue _fun36084;
            case 44:
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 54:
                var0 = undefined;
                return var0;
        }
    };
    var3.AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE = var9;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.soundboardStoreState;
        var3 = global;
        var6 = var3.Map;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 15;
        var4 = var4[var0];
        var0 = undefined;
        var7 = var5.bind(var0)(var4);
        var5 = var7.entries;
        var4 = var1.soundboardSounds;
        var8 = var5.bind(var7)(var4);
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot15 = var4;
        var6 = var3.Set;
        var8 = var1.favoritedSoundIds;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot23 = var4;
        var4 = var3.Set;
        var8 = var1.localSoundboardMutes;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var9 = var3;
        var1 = new var9[var4](var8, var7);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot18 = var1;
        return var0;
    };
    var3.OVERLAY_INITIALIZE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var16 = var4;
    var14 = var3;
    var3 = new var16[var8](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/SoundboardStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1310, 1613, 3948, 660, 665, 22, 795, 3949, 1348, 21, 3951, 566, 806, 2]);