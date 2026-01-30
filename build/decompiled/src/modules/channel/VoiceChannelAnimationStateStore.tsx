// modules/channel/VoiceChannelAnimationStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun95858: for (var _fun95858_ip = 0;;) switch (_fun95858_ip) {
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
                _fun95858_ip = 76;
                continue _fun95858;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun95861: for (var _fun95861_ip = 0;;) switch (_fun95861_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95861_ip = 45;
                    continue _fun95861
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun95861_ip = 54;
                    continue _fun95861
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun95861_ip = 344;
                    continue _fun95861
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95861_ip = 322;
                    continue _fun95861
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95861_ip = 282;
                    continue _fun95861
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95861_ip = 269;
                    continue _fun95861
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
                    _fun95861_ip = 162;
                    continue _fun95861
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun95861_ip = 178;
                    continue _fun95861
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95861_ip = 248;
                    continue _fun95861
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95861_ip = 248;
                    continue _fun95861
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95861_ip = 233;
                    continue _fun95861
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95861_ip = 246;
                    continue _fun95861
                }
            case 233:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun95861_ip = 264;
                continue _fun95861;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun95861_ip = 282;
                continue _fun95861;
            case 269:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun95861_ip = 322;
                    continue _fun95861
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
                    _fun95861_ip = 329;
                    continue _fun95861
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95862: for (var _fun95862_ip = 0;;) switch (_fun95862_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95862_ip = 56;
                                continue _fun95862
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
                            _fun95862_ip = 67;
                            continue _fun95862;
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
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun95863: for (var _fun95863_ip = 0;;) switch (_fun95863_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95863_ip = 23;
                    continue _fun95863
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95863_ip = 33;
                    continue _fun95863
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
                    _fun95863_ip = 70;
                    continue _fun95863
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95863_ip = 55;
                    continue _fun95863
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: clearAnimationTimer, environment: var4
        _fun95864: for (var _fun95864_ip = 0;;) switch (_fun95864_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot10;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun95864_ip = 51;
                    continue _fun95864
                }
            case 20:
                var2 = global;
                var4 = var2.clearTimeout;
                var2 = _closure1_slot10;
                var3 = var2[var1];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var0 = _closure1_slot10;
                var0 = delete var0[var1];
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: scheduleTransitionToGentleAmbient, environment: var4
        var3 = arg0;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot16;
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var2 = _closure1_slot10;
        var4 = global;
        var5 = var4.setTimeout;
        var4 = function() { // Environment: var1
            _fun95866: for (var _fun95866_ip = 0;;) switch (_fun95866_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var5 = var3[var2];
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun95866_ip = 81;
                        continue _fun95866
                    }
                case 24:
                    var4 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var8 = var2;
                    var7 = var5;
                    var5 = copyDataProperties(var8, var7);
                    var5 = _closure1_slot8;
                    var6 = var5.GENTLE_AMBIENT;
                    var5 = 'style';
                    var2[var5] = var6;
                    var4[var3] = var2;
                    var3 = _closure1_slot12;
                    var2 = var3.emitChange;
                    var2 = var2.bind(var3)();
                case 81:
                    var1 = _closure1_slot10;
                    var0 = _closure2_slot0;
                    var0 = delete var1[var0];
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = 2000;
        var1 = var5.bind(var0)(var4, var1);
        var2[var3] = var1;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: resetAllState, environment: var4
        _fun95867: for (var _fun95867_ip = 0;;) switch (_fun95867_ip) {
            case 0:
                var5 = global;
                var3 = var5.Object;
                var1 = var3.keys;
                var0 = _closure1_slot10;
                var4 = var1.bind(var3)(var0);
                var0 = var4.length;
                var3 = 0;
                var1 = var3 < var0;
                var0 = undefined;
                if (!var1) {
                    _fun95867_ip = 76;
                    continue _fun95867
                }
            case 41:
                var7 = var4[var3];
                var6 = var5.clearTimeout;
                var1 = _closure1_slot10;
                var1 = var1[var7];
                var1 = var6.bind(var0)(var1);
                var3 = var3 + 1;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun95867_ip = 41;
                    continue _fun95867
                }
            case 76:
                var1 = {};
                _closure1_slot10 = var1;
                var1 = {};
                _closure1_slot9 = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: updateChannelAnimationState, environment: var4
        _fun95868: for (var _fun95868_ip = 0;;) switch (_fun95868_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot9;
                var7 = var0[var3];
                var0 = null;
                var4 = var0 == var7;
                var2 = undefined;
                var6 = undefined;
                if (var4) {
                    _fun95868_ip = 33;
                    continue _fun95868
                }
            case 27:
                var6 = var7.userCount;
            case 33:
                var8 = var0 != var6;
                var5 = 0;
                var4 = 0;
                if (!var8) {
                    _fun95868_ip = 47;
                    continue _fun95868
                }
            case 44:
                var4 = var6;
            case 47:
                var6 = global;
                var9 = var6.Math;
                var8 = var9.max;
                var6 = arg1;
                var6 = var4 + var6;
                var6 = var8.bind(var9)(var5, var6);
                if (!(var5 === var4)) {
                    _fun95868_ip = 84;
                    continue _fun95868
                }
            case 77:
                if (!(!(var6 > var5))) {
                    _fun95868_ip = 206;
                    continue _fun95868
                }
            case 84:
                if (!(var4 > var5)) {
                    _fun95868_ip = 92;
                    continue _fun95868
                }
            case 88:
                if (!(!(var6 > var4))) {
                    _fun95868_ip = 164;
                    continue _fun95868
                }
            case 92:
                if (!(var5 !== var6)) {
                    _fun95868_ip = 143;
                    continue _fun95868
                }
            case 96:
                var0 = var0 != var7;
                if (!var0) {
                    _fun95868_ip = 107;
                    continue _fun95868
                }
            case 103:
                var0 = var6 !== var4;
            case 107:
                if (!var0) {
                    _fun95868_ip = 141;
                    continue _fun95868
                }
            case 110:
                var5 = _closure1_slot9;
                var4 = {};
                var11 = var4;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var7 = 'userCount';
                var4[var7] = var6;
                var5[var3] = var4;
                var0 = true;
            case 141:
                _fun95868_ip = 162;
                continue _fun95868;
            case 143:
                var4 = _closure1_slot16;
                var4 = var4.bind(var2)(var3);
                var4 = _closure1_slot9;
                var4 = delete var4[var3];
                var0 = true;
            case 162:
                _fun95868_ip = 204;
                continue _fun95868;
            case 164:
                var5 = _closure1_slot9;
                var4 = {};
                var7 = _closure1_slot8;
                var7 = var7.HIGH_CONTRAST;
                var4.style = var7;
                var4.userCount = var6;
                var5[var3] = var4;
                var4 = _closure1_slot17;
                var4 = var4.bind(var2)(var3);
                var0 = true;
            case 204:
                _fun95868_ip = 246;
                continue _fun95868;
            case 206:
                var5 = _closure1_slot9;
                var4 = {};
                var7 = _closure1_slot8;
                var7 = var7.GENTLE_AMBIENT_WITH_INTRO;
                var4.style = var7;
                var4.userCount = var6;
                var5[var3] = var4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var2)(var3);
                var0 = true;
            case 246:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var6 = function() { // Original name: handleConnectionOpenOrLogout, environment: var4
        var1 = _closure1_slot18;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = true;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var3 = 'GENTLE_AMBIENT';
    var1.GENTLE_AMBIENT = var3;
    var3 = 'GENTLE_AMBIENT_WITH_INTRO';
    var1.GENTLE_AMBIENT_WITH_INTRO = var3;
    var3 = 'HIGH_CONTRAST';
    var1.HIGH_CONTRAST = var3;
    var _closure1_slot8 = var1;
    var3 = {};
    var _closure1_slot9 = var3;
    var3 = {};
    var _closure1_slot10 = var3;
    var3 = null;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: VoiceChannelAnimationStateStoreClass, environment: var5
            _fun95871: for (var _fun95871_ip = 0;;) switch (_fun95871_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95871_ip = 69;
                        continue _fun95871
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95871_ip = 105;
                    continue _fun95871;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot6;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getAnimationStyle';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun95873: for (var _fun95873_ip = 0;;) switch (_fun95873_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun95873_ip = 30;
                        continue _fun95873
                    }
                case 25:
                    var0 = var3.style;
                case 30:
                    if (!(var2 == var0)) {
                        _fun95873_ip = 44;
                        continue _fun95873
                    }
                case 34:
                    var1 = _closure1_slot8;
                    var0 = var1.GENTLE_AMBIENT;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUserCount';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun95874: for (var _fun95874_ip = 0;;) switch (_fun95874_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun95874_ip = 31;
                        continue _fun95874
                    }
                case 25:
                    var1 = var2.userCount;
                case 31:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun95874_ip = 43;
                        continue _fun95874
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'VoiceChannelAnimationStateStore';
    var8.displayName = var3;
    var3 = 9;
    var3 = var5[var3];
    var12 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var4
        _fun95875: for (var _fun95875_ip = 0;;) switch (_fun95875_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.voiceStates;
                var2 = _closure1_slot6;
                var0 = var2.getGuildId;
                var11 = var0.bind(var2)();
                var0 = _closure1_slot11;
                var0 = var11 !== var0;
                if (!var0) {
                    _fun95875_ip = 43;
                    continue _fun95875
                }
            case 37:
                var2 = null;
                var0 = var2 != var11;
            case 43:
                if (!var0) {
                    _fun95875_ip = 50;
                    continue _fun95875
                }
            case 46:
                _closure1_slot11 = var11;
            case 50:
                var2 = {};
                var0 = _closure1_slot14;
                var9 = undefined;
                var6 = var0.bind(var9)(var1);
                var1 = var6.bind(var9)();
                var0 = var1.done;
                var8 = 1;
                var5 = null;
                var7 = 0;
                var4 = var1;
                var3 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun95875_ip = 240;
                    continue _fun95875
                }
            case 92:
                var0 = var4.value;
                var14 = var0.guildId;
                var13 = var3;
                var12 = var1;
                if (!(var14 === var11)) {
                    _fun95875_ip = 216;
                    continue _fun95875
                }
            case 112:
                var14 = var0.oldChannelId;
                if (!(var5 != var14)) {
                    _fun95875_ip = 161;
                    continue _fun95875
                }
            case 122:
                var16 = var0.oldChannelId;
                var14 = var0.oldChannelId;
                var14 = var2[var14];
                var17 = var5 != var14;
                var15 = 0;
                if (!var17) {
                    _fun95875_ip = 150;
                    continue _fun95875
                }
            case 147:
                var15 = var14;
            case 150:
                var15 = var15 - var8;
                var2[var16] = var15;
                var3 = var14;
            case 161:
                var14 = var0.channelId;
                var13 = var3;
                var12 = var1;
                if (!(var5 != var14)) {
                    _fun95875_ip = 216;
                    continue _fun95875
                }
            case 176:
                var15 = var0.channelId;
                var0 = var0.channelId;
                var0 = var2[var0];
                var16 = var5 != var0;
                var14 = 0;
                if (!var16) {
                    _fun95875_ip = 202;
                    continue _fun95875
                }
            case 199:
                var14 = var0;
            case 202:
                var14 = var14 + var8;
                var2[var15] = var14;
                var13 = var3;
                var12 = var0;
            case 216:
                var14 = var6.bind(var9)();
                var0 = var14.done;
                var3 = var13;
                var1 = var12;
                var4 = var14;
                if (!var0) {
                    _fun95875_ip = 92;
                    continue _fun95875
                }
            case 240:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.entries;
                var6 = var0.bind(var1)(var2);
                var0 = var6.length;
                var1 = var7 < var0;
                var3 = false;
                var4 = 2;
                var2 = 0;
                var0 = false;
                if (!var1) {
                    _fun95875_ip = 332;
                    continue _fun95875
                }
            case 280:
                var11 = var6[var2];
                var1 = _closure1_slot5;
                var1 = var1.bind(var9)(var11, var4);
                var12 = _closure1_slot19;
                var11 = var1[var7];
                var1 = var1[var8];
                var1 = var12.bind(var9)(var11, var1);
                if (!var1) {
                    _fun95875_ip = 317;
                    continue _fun95875
                }
            case 315:
                var3 = true;
            case 317:
                var2 = var2 + 1;
                var1 = var6.length;
                var0 = var3;
                if (var2 < var1) {
                    _fun95875_ip = 280;
                    continue _fun95875
                }
            case 332:
                return var0;
        }
    };
    var3.VOICE_STATE_UPDATES = var9;
    var9 = function(arg0) { // Original name: handleChannelSelect, environment: var4
        _fun95876: for (var _fun95876_ip = 0;;) switch (_fun95876_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = _closure1_slot11;
                if (!(var2 !== var0)) {
                    _fun95876_ip = 272;
                    continue _fun95876
                }
            case 22:
                var10 = null;
                if (!(var10 != var2)) {
                    _fun95876_ip = 268;
                    continue _fun95876
                }
            case 31:
                _closure1_slot11 = var2;
                var0 = _closure1_slot18;
                var6 = undefined;
                var0 = var0.bind(var6)();
                var1 = _closure1_slot7;
                var0 = var1.getVoiceStates;
                var4 = var0.bind(var1)(var2);
                var2 = {};
                var0 = global;
                var3 = var0.Object;
                var1 = var3.values;
                var9 = var1.bind(var3)(var4);
                var1 = var9.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = 1;
                var8 = 0;
                var3 = undefined;
                if (!var1) {
                    _fun95876_ip = 163;
                    continue _fun95876
                }
            case 101:
                var1 = var9[var8];
                var11 = var1.channelId;
                if (!(var10 != var11)) {
                    _fun95876_ip = 151;
                    continue _fun95876
                }
            case 114:
                var12 = var1.channelId;
                var1 = var1.channelId;
                var1 = var2[var1];
                var13 = var10 != var1;
                var11 = 0;
                if (!var13) {
                    _fun95876_ip = 140;
                    continue _fun95876
                }
            case 137:
                var11 = var1;
            case 140:
                var11 = var11 + var4;
                var2[var12] = var11;
                var3 = var1;
            case 151:
                var8 = var8 + 1;
                var1 = var9.length;
                if (var8 < var1) {
                    _fun95876_ip = 101;
                    continue _fun95876
                }
            case 163:
                var1 = var0.Object;
                var0 = var1.entries;
                var3 = var0.bind(var1)(var2);
                var0 = var3.length;
                var0 = var5 < var0;
                var2 = 2;
                var1 = 0;
                if (!var0) {
                    _fun95876_ip = 264;
                    continue _fun95876
                }
            case 197:
                var8 = var3[var1];
                var0 = _closure1_slot5;
                var0 = var0.bind(var6)(var8, var2);
                var9 = var0[var5];
                var10 = var0[var4];
                if (!(var10 > var5)) {
                    _fun95876_ip = 252;
                    continue _fun95876
                }
            case 223:
                var8 = _closure1_slot9;
                var0 = {};
                var11 = _closure1_slot8;
                var11 = var11.GENTLE_AMBIENT;
                var0.style = var11;
                var0.userCount = var10;
                var8[var9] = var0;
            case 252:
                var1 = var1 + 1;
                var0 = var3.length;
                if (var1 < var0) {
                    _fun95876_ip = 197;
                    continue _fun95876
                }
            case 264:
                var0 = true;
                return var0;
            case 268:
                var0 = false;
                return var0;
            case 272:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var9;
    var3.CONNECTION_OPEN = var6;
    var3.LOGOUT = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var13 = var6;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot12 = var3;
    var4 = 10;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/VoiceChannelAnimationStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.AnimationStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 3172, 3480, 566, 806, 2]);