// stores/SlowmodeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun54181: for (var _fun54181_ip = 0;;) switch (_fun54181_ip) {
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
                _fun54181_ip = 74;
                continue _fun54181;
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun54184: for (var _fun54184_ip = 0;;) switch (_fun54184_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54184_ip = 46;
                    continue _fun54184
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54184_ip = 55;
                    continue _fun54184
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54184_ip = 343;
                    continue _fun54184
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54184_ip = 323;
                    continue _fun54184
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54184_ip = 283;
                    continue _fun54184
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54184_ip = 270;
                    continue _fun54184
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
                    _fun54184_ip = 163;
                    continue _fun54184
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54184_ip = 179;
                    continue _fun54184
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54184_ip = 249;
                    continue _fun54184
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54184_ip = 249;
                    continue _fun54184
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54184_ip = 234;
                    continue _fun54184
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54184_ip = 247;
                    continue _fun54184
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54184_ip = 265;
                continue _fun54184;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54184_ip = 283;
                continue _fun54184;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54184_ip = 323;
                    continue _fun54184
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
                    _fun54184_ip = 330;
                    continue _fun54184
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54185: for (var _fun54185_ip = 0;;) switch (_fun54185_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54185_ip = 56;
                                continue _fun54185
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
                            _fun54185_ip = 67;
                            continue _fun54185;
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
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun54186: for (var _fun54186_ip = 0;;) switch (_fun54186_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54186_ip = 23;
                    continue _fun54186
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54186_ip = 33;
                    continue _fun54186
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
                    _fun54186_ip = 70;
                    continue _fun54186
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54186_ip = 55;
                    continue _fun54186
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: setCooldown, environment: var4
        _fun54187: for (var _fun54187_ip = 0;;) switch (_fun54187_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var4;
                var0 = _closure1_slot11;
                var5 = var0[var4];
                var0 = var2.id;
                var5 = var5[var0];
                var0 = null;
                if (!(var0 != var5)) {
                    _fun54187_ip = 95;
                    continue _fun54187
                }
            case 45:
                var0 = _closure1_slot11;
                var5 = var0[var4];
                var0 = var2.id;
                var0 = var5[var0];
                var5 = var0.timer;
                var0 = var5.stop;
                var0 = var0.bind(var5)();
                var0 = _closure1_slot11;
                var5 = var0[var4];
                var0 = var2.id;
                var0 = delete var5[var0];
            case 95:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var5 = var5[var0];
                var0 = undefined;
                var6 = var6.bind(var0)(var5);
                var5 = var6.canBypassSlowmode;
                var5 = var5.bind(var6)(var2, var4);
                if (var5) {
                    _fun54187_ip = 310;
                    continue _fun54187
                }
            case 135:
                var5 = 0;
                if (!(!(var9 <= var5))) {
                    _fun54187_ip = 310;
                    continue _fun54187
                }
            case 144:
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var8 = var9 + var5;
                var _closure2_slot2 = var8;
                var5 = _closure1_slot11;
                var7 = var5[var4];
                var6 = var2.id;
                var5 = {};
                var10 = var2.rateLimitPerUser;
                var5.rateLimitPerUser = var10;
                var5.cooldownMs = var9;
                var5.cooldownEndTimestamp = var8;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var0)(var8);
                var8 = var8.Timeout;
                var9 = var8.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = var9;
                var8 = new var14[var8](var13);
                var8 = var8 instanceof Object ? var8 : var9;
                var5.timer = var8;
                var7[var6] = var5;
                var3 = _closure1_slot11;
                var3 = var3[var4];
                var2 = var2.id;
                var2 = var3[var2];
                var5 = var2.timer;
                var4 = var5.start;
                var3 = 1000;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SLOWMODE_SET_COOLDOWN';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var4 = _closure2_slot1;
                    var1.slowmodeType = var4;
                    var4 = global;
                    var7 = var4.Math;
                    var6 = var7.max;
                    var5 = _closure2_slot2;
                    var8 = var4.Date;
                    var4 = var8.now;
                    var4 = var4.bind(var8)();
                    var5 = var5 - var4;
                    var4 = 0;
                    var4 = var6.bind(var7)(var5, var4);
                    var1.cooldownMs = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = true;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 310:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: resetCooldown, environment: var4
        _fun54189: for (var _fun54189_ip = 0;;) switch (_fun54189_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = arg0;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun54189_ip = 107;
                    continue _fun54189
                }
            case 26:
                var3 = _closure1_slot15;
                var1 = var4.rateLimitPerUser;
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun54189_ip = 93;
                    continue _fun54189
                }
            case 42:
                var1 = var4.rateLimitPerUser;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 10;
                var5 = var5[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var5);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var1 = var1 * var0;
                var0 = 100;
                var2 = var1 + var0;
            case 93:
                var0 = undefined;
                var1 = arg1;
                var1 = var3.bind(var0)(var4, var1, var2);
                return var0;
            case 107:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var9 = function(arg0) { // Original name: handleUploadCancel, environment: var4
        _fun54190: for (var _fun54190_ip = 0;;) switch (_fun54190_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = _closure1_slot8;
                var0 = var2.getChannel;
                var5 = var0.bind(var2)(var3);
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun54190_ip = 61;
                    continue _fun54190
                }
            case 34:
                var4 = _closure1_slot15;
                var1 = _closure1_slot10;
                var3 = var1.SendMessage;
                var1 = undefined;
                var2 = 0;
                var2 = var4.bind(var1)(var5, var3, var2);
                var0 = undefined;
            case 61:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
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
    var1 = {};
    var1.SendMessage = var10;
    var3 = 'SendMessage';
    var1[var10] = var3;
    var1.CreateThread = var8;
    var3 = 'CreateThread';
    var1[var8] = var3;
    var _closure1_slot10 = var1;
    var3 = {};
    var10 = var1.SendMessage;
    var8 = {};
    var3[var10] = var8;
    var10 = var1.CreateThread;
    var8 = {};
    var3[var10] = var8;
    var _closure1_slot11 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: SlowmodeStore, environment: var5
            _fun54192: for (var _fun54192_ip = 0;;) switch (_fun54192_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54192_ip = 69;
                        continue _fun54192
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54192_ip = 105;
                    continue _fun54192;
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
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSlowmodeCooldownGuess';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun54194: for (var _fun54194_ip = 0;;) switch (_fun54194_ip) {
                case 0:
                    var2 = arg1;
                    var1 = _closure1_slot11;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun54194_ip = 26;
                        continue _fun54194
                    }
                case 16:
                    var3 = _closure1_slot10;
                    var2 = var3.SendMessage;
                case 26:
                    var2 = var1[var2];
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun54194_ip = 52;
                        continue _fun54194
                    }
                case 46:
                    var0 = var1.cooldownMs;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isChannelOnCooldown';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun54195: for (var _fun54195_ip = 0;;) switch (_fun54195_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var3 = var4.getSlowmodeCooldownGuess;
                    var2 = var1.id;
                    var0 = arg1;
                    var0 = var3.bind(var4)(var2, var0);
                    var2 = 0;
                    var0 = var0 > var2;
                    if (!var0) {
                        _fun54195_ip = 45;
                        continue _fun54195
                    }
                case 35:
                    var1 = var1.rateLimitPerUser;
                    var0 = var1 > var2;
                case 45:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SlowmodeStore';
    var8.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function(arg0) { // Original name: handleSlowmodeResetCooldown, environment: var4
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.slowmodeType;
        var1 = _closure1_slot16;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var3.SLOWMODE_RESET_COOLDOWN = var10;
    var10 = function(arg0) { // Original name: handleSlowmodeSetCooldown, environment: var4
        _fun54197: for (var _fun54197_ip = 0;;) switch (_fun54197_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.slowmodeType;
                var5 = var0.cooldownMs;
                var2 = _closure1_slot8;
                var1 = var2.getChannel;
                var3 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun54197_ip = 71;
                    continue _fun54197
                }
            case 43:
                var2 = _closure1_slot15;
                var1 = 0;
                if (!(var1 !== var5)) {
                    _fun54197_ip = 60;
                    continue _fun54197
                }
            case 53:
                var0 = 100;
                var1 = var5 + var0;
            case 60:
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var4, var1);
                return var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var3.SLOWMODE_SET_COOLDOWN = var10;
    var10 = function(arg0) { // Original name: handleUploadStart, environment: var4
        var0 = arg0;
        var3 = var0.channelId;
        var2 = _closure1_slot16;
        var0 = _closure1_slot10;
        var1 = var0.SendMessage;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3.UPLOAD_START = var10;
    var3.UPLOAD_FAIL = var9;
    var3.UPLOAD_CANCEL_REQUEST = var9;
    var9 = function(arg0) { // Original name: handleUpdateCooldown, environment: var4
        var1 = arg0;
        var1 = var1.channels;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot10;
        var3 = var2.SendMessage;
        var2 = new Array(2);
        var2[0] = var3;
        var1 = _closure1_slot10;
        var1 = var1.CreateThread;
        var2[1] = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun54200: for (var _fun54200_ip = 0;;) switch (_fun54200_ip) {
                case 0:
                    var10 = arg0;
                    var2 = _closure1_slot13;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var8 = var2.bind(var0)(var1);
                    var2 = var8.bind(var0)();
                    var1 = var2.done;
                    var7 = 10;
                    var6 = null;
                    var4 = global;
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun54200_ip = 211;
                        continue _fun54200
                    }
                case 51:
                    var14 = var3.value;
                    var1 = _closure1_slot11;
                    var11 = var1[var10];
                    var1 = var14.id;
                    var12 = var11[var1];
                    var18 = var14.rateLimitPerUser;
                    var11 = var2;
                    if (!(var6 != var12)) {
                        _fun54200_ip = 190;
                        continue _fun54200
                    }
                case 86:
                    var1 = var12.rateLimitPerUser;
                    var11 = var2;
                    if (!(var1 !== var18)) {
                        _fun54200_ip = 190;
                        continue _fun54200
                    }
                case 99:
                    var13 = _closure1_slot15;
                    var17 = var4.Math;
                    var16 = var17.min;
                    var15 = var6 == var12;
                    var1 = undefined;
                    if (var15) {
                        _fun54200_ip = 129;
                        continue _fun54200
                    }
                case 123:
                    var1 = var12.cooldownMs;
                case 129:
                    var12 = var6 != var1;
                    var15 = 0;
                    if (!var12) {
                        _fun54200_ip = 141;
                        continue _fun54200
                    }
                case 138:
                    var15 = var1;
                case 141:
                    var19 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var7];
                    var12 = var19.bind(var0)(var12);
                    var12 = var12.Millis;
                    var12 = var12.SECOND;
                    var12 = var18 * var12;
                    var12 = var16.bind(var17)(var15, var12);
                    var12 = var13.bind(var0)(var14, var10, var12);
                    var11 = var1;
                case 190:
                    var12 = var8.bind(var0)();
                    var1 = var12.done;
                    var2 = var11;
                    var3 = var12;
                    if (!var1) {
                        _fun54200_ip = 51;
                        continue _fun54200
                    }
                case 211:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.CHANNEL_UPDATES = var9;
    var4 = function() { // Original name: clear, environment: var4
        var1 = _closure1_slot10;
        var1 = var1.SendMessage;
        var2 = new Array(2);
        var2[0] = var1;
        var0 = _closure1_slot10;
        var0 = var0.CreateThread;
        var2[1] = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var _closure3_slot0 = var2;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.keys;
            var3 = _closure1_slot11;
            var3 = var3[var2];
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var1 = function(arg0) { // Environment: var1
                var1 = _closure1_slot11;
                var0 = _closure3_slot0;
                var1 = var1[var0];
                var0 = arg0;
                var0 = var1[var0];
                var1 = var0.timer;
                var0 = var1.stop;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var3.bind(var4)(var1);
            var1 = _closure1_slot11;
            var0 = {};
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SlowmodeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SlowmodeType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 3050, 6498, 3589, 806, 667, 566, 2]);