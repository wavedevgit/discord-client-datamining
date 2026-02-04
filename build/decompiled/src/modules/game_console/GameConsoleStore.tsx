// modules/game_console/GameConsoleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun31160: for (var _fun31160_ip = 0;;) switch (_fun31160_ip) {
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
                _fun31160_ip = 74;
                continue _fun31160;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun31163: for (var _fun31163_ip = 0;;) switch (_fun31163_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun31163_ip = 46;
                    continue _fun31163
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun31163_ip = 55;
                    continue _fun31163
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun31163_ip = 343;
                    continue _fun31163
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun31163_ip = 323;
                    continue _fun31163
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun31163_ip = 283;
                    continue _fun31163
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun31163_ip = 270;
                    continue _fun31163
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
                    _fun31163_ip = 163;
                    continue _fun31163
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun31163_ip = 179;
                    continue _fun31163
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun31163_ip = 249;
                    continue _fun31163
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun31163_ip = 249;
                    continue _fun31163
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun31163_ip = 234;
                    continue _fun31163
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun31163_ip = 247;
                    continue _fun31163
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun31163_ip = 265;
                continue _fun31163;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun31163_ip = 283;
                continue _fun31163;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun31163_ip = 323;
                    continue _fun31163
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
                    _fun31163_ip = 330;
                    continue _fun31163
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun31164: for (var _fun31164_ip = 0;;) switch (_fun31164_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun31164_ip = 56;
                                continue _fun31164
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
                            _fun31164_ip = 67;
                            continue _fun31164;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun31165: for (var _fun31165_ip = 0;;) switch (_fun31165_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun31165_ip = 23;
                    continue _fun31165
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun31165_ip = 33;
                    continue _fun31165
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
                    _fun31165_ip = 70;
                    continue _fun31165
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31165_ip = 55;
                    continue _fun31165
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = null;
    var _closure1_slot7 = var6;
    var _closure1_slot8 = var6;
    var6 = var1.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var6 = {};
    var _closure1_slot11 = var6;
    var6 = var1.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var12 = var7;
    var6 = new var12[var6](var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot12 = var6;
    var7 = var1.Object;
    var6 = var7.freeze;
    var1 = {};
    var1 = var6.bind(var7)(var1);
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun31167: for (var _fun31167_ip = 0;;) switch (_fun31167_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31167_ip = 69;
                        continue _fun31167
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31167_ip = 105;
                    continue _fun31167;
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
        var0 = function arg0() {
            _fun31168: for (var _fun31168_ip = 0;;) switch (_fun31168_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun31168_ip = 25;
                        continue _fun31168
                    }
                case 12:
                    var1 = var0.lastSelectedDeviceByPlatform;
                    _closure1_slot11 = var1;
                case 25:
                    var2 = var3.waitFor;
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot6;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot11;
            var0.lastSelectedDeviceByPlatform = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getDevicesForPlatform';
        var4.key = var6;
        var6 = function arg0() {
            _fun31170: for (var _fun31170_ip = 0;;) switch (_fun31170_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun31170_ip = 24;
                        continue _fun31170
                    }
                case 20:
                    var0 = _closure1_slot13;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastSelectedDeviceByPlatform';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getDevice';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun31172: for (var _fun31172_ip = 0;;) switch (_fun31172_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31172_ip = 32;
                        continue _fun31172
                    }
                case 25:
                    var1 = arg1;
                    var0 = var2[var1];
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getFetchingDevices';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot12;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPendingDeviceCommands';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getRemoteSessionId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getAwaitingRemoteSessionInfo';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GameConsoleStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 8;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        var0 = arg0;
        var0 = var0.sessionId;
        _closure1_slot7 = var0;
        var0 = null;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.REMOTE_SESSION_CONNECT = var7;
    var7 = function() {
        var0 = null;
        _closure1_slot7 = var0;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.REMOTE_SESSION_DISCONNECT = var7;
    var7 = function arg0() {
        var0 = arg0;
        var5 = var0.sessionType;
        var4 = var0.nonce;
        var3 = var0.channelId;
        var2 = var0.deviceId;
        var0 = var0.commandId;
        var1 = {};
        var1.type = var5;
        var1.nonce = var4;
        var1.channelId = var3;
        var3 = global;
        var4 = var3.Date;
        var3 = var4.now;
        var3 = var3.bind(var4)();
        var1.startedAt = var3;
        var1.deviceId = var2;
        var1.commandId = var0;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.WAIT_FOR_REMOTE_SESSION = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.platform;
        var1 = _closure1_slot12;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GAME_CONSOLE_FETCH_DEVICES_START = var7;
    var7 = function arg0() {
        _fun31181: for (var _fun31181_ip = 0;;) switch (_fun31181_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.platform;
                var4 = var0.devices;
                var1 = _closure1_slot12;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var7);
                var0 = _closure1_slot10;
                var6 = {};
                var0[var7] = var6;
                var1 = {};
                var3 = _closure1_slot15;
                var0 = undefined;
                var5 = var3.bind(var0)(var4);
                var4 = var5.bind(var0)();
                var3 = var4.done;
                if (var3) {
                    _fun31181_ip = 122;
                    continue _fun31181
                }
            case 67:
                var3 = var4.value;
                var8 = var3.id;
                var6[var8] = var3;
                var8 = _closure1_slot11;
                var9 = var8[var7];
                var8 = var3.id;
                if (!(var9 === var8)) {
                    _fun31181_ip = 107;
                    continue _fun31181
                }
            case 98:
                var3 = var3.id;
                var1[var7] = var3;
            case 107:
                var8 = var5.bind(var0)();
                var3 = var8.done;
                var4 = var8;
                if (!var3) {
                    _fun31181_ip = 67;
                    continue _fun31181
                }
            case 122:
                _closure1_slot11 = var1;
                return var0;
        }
    };
    var1.GAME_CONSOLE_FETCH_DEVICES_SUCCESS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.platform;
        var1 = _closure1_slot12;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GAME_CONSOLE_FETCH_DEVICES_FAIL = var7;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.platform;
        var1 = var0.deviceId;
        var0 = _closure1_slot11;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GAME_CONSOLE_SELECT_DEVICE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/GameConsoleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3520, 3521, 566, 806, 2]);