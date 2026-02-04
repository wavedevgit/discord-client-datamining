// stores/RTCConnectionDesyncStore.tsx
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
        _fun96146: for (var _fun96146_ip = 0;;) switch (_fun96146_ip) {
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
                _fun96146_ip = 76;
                continue _fun96146;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun96149: for (var _fun96149_ip = 0;;) switch (_fun96149_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var9 = arg2;
                var4 = _closure1_slot8;
                var0 = {};
                var3 = var1.id;
                var0.userId = var3;
                var0.channelId = var9;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var14 = var3;
                var13 = var0;
                var0 = new var14[var4](var13, var12);
                var5 = var0 instanceof Object ? var0 : var3;
                var8 = _closure1_slot13;
                var3 = null;
                var6 = var7;
                if (!(var3 == var6)) {
                    _fun96149_ip = 71;
                    continue _fun96149
                }
            case 67:
                var6 = _closure1_slot14;
            case 71:
                var4 = var1.id;
                var0 = undefined;
                var10 = var8.bind(var0)(var5, var6, var4);
                var8 = _closure1_slot17;
                var6 = var8.set;
                var4 = var1.id;
                var4 = var6.bind(var8)(var4, var10);
                var4 = {};
                var6 = _closure1_slot16;
                var6 = var6.USER;
                var4.type = var6;
                var4.user = var1;
                var6 = var1.id;
                var4.id = var6;
                var4.streamId = var3;
                var4.voiceState = var5;
                var4.voicePlatform = var3;
                var3 = false;
                var4.speaking = var3;
                var4.latched = var3;
                var5 = 0;
                var4.lastSpoke = var5;
                var4.soundsharing = var3;
                var4.ringing = var3;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 14;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getName;
                var5 = var5.bind(var6)(var7, var9, var1);
                var4.userNick = var5;
                var6 = _closure1_slot0;
                var5 = 15;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getAvatarDecoration;
                var5 = var5.bind(var6)(var1, var7);
                var4.userAvatarDecoration = var5;
                var4.localVideoDisabled = var3;
                var4.isPoppedOut = var3;
                var3 = _closure1_slot18;
                var2 = var3.set;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun96150: for (var _fun96150_ip = 0;;) switch (_fun96150_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot17;
                var0 = var2.delete;
                var0 = var0.bind(var2)(var4);
                var3 = _closure1_slot18;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                var3 = _closure1_slot19;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                if (var0) {
                    _fun96150_ip = 54;
                    continue _fun96150
                }
            case 51:
                var0 = var2;
            case 54:
                if (var0) {
                    _fun96150_ip = 60;
                    continue _fun96150
                }
            case 57:
                var0 = var1;
            case 60:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun96151: for (var _fun96151_ip = 0;;) switch (_fun96151_ip) {
            case 0:
                var3 = _closure1_slot10;
                var2 = var3.getChannelId;
                var5 = var2.bind(var3)();
                var _closure2_slot0 = var5;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun96151_ip = 99;
                    continue _fun96151
                }
            case 29:
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var4 = var3.bind(var4)(var5);
                var3 = var2 == var4;
                var2 = undefined;
                if (var3) {
                    _fun96151_ip = 62;
                    continue _fun96151
                }
            case 52:
                var3 = var4.getGuildId;
                var2 = var3.bind(var4)();
            case 62:
                var _closure2_slot1 = var2;
                var2 = false;
                var _closure2_slot2 = var2;
                var3 = _closure1_slot19;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun96152: for (var _fun96152_ip = 0;;) switch (_fun96152_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = _closure1_slot12;
                            var3 = var4.getVoiceStateForChannel;
                            var2 = _closure2_slot0;
                            var3 = var3.bind(var4)(var2, var5);
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun96152_ip = 51;
                                continue _fun96152
                            }
                        case 35:
                            var4 = _closure1_slot19;
                            var3 = var4.delete;
                            var3 = var3.bind(var4)(var5);
                            _fun96152_ip = 111;
                            continue _fun96152;
                        case 51:
                            var4 = _closure1_slot11;
                            var3 = var4.getUser;
                            var4 = var3.bind(var4)(var5);
                            if (!(var2 != var4)) {
                                _fun96152_ip = 111;
                                continue _fun96152
                            }
                        case 70:
                            var2 = true;
                            _closure2_slot2 = var2;
                            var3 = _closure1_slot19;
                            var2 = var3.delete;
                            var2 = var2.bind(var3)(var5);
                            var3 = _closure1_slot21;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var4, var2, var1);
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot2;
                return var0;
            case 99:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var8 = function() {
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot18;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = _closure1_slot19;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var _closure1_slot24 = var8;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.makeSortedVoiceState;
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.ME;
    var _closure1_slot14 = var9;
    var7 = var7.RTCConnectionStates;
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ParticipantTypes;
    var _closure1_slot16 = var7;
    var7 = 13;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot17 = var9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var14 = var9;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot18 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var14 = var7;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun96155: for (var _fun96155_ip = 0;;) switch (_fun96155_ip) {
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
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96155_ip = 69;
                        continue _fun96155
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96155_ip = 105;
                    continue _fun96155;
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
            var3 = this;
            var6 = var3.waitFor;
            var10 = _closure1_slot12;
            var9 = _closure1_slot11;
            var8 = _closure1_slot9;
            var7 = _closure1_slot10;
            var11 = var3;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var2 = var3.syncWith;
            var4 = _closure1_slot11;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot23;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'desyncedVoiceStatesCount';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot17;
            var0 = var1.size;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getDesyncedUserIds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot17;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getDesyncedVoiceStates';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot17;
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getDesyncedParticipants';
        var4.key = var6;
        var5 = function() {
            var1 = _closure1_slot18;
            var0 = var1.values;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'RTCConnectionDesyncStore';
    var7.displayName = var1;
    var1 = 18;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var1 = _closure1_slot24;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var1.VOICE_CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun96162: for (var _fun96162_ip = 0;;) switch (_fun96162_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.state;
                var1 = var0.context;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.MediaEngineContextTypes;
                var0 = var0.DEFAULT;
                var0 = var1 === var0;
                if (!var0) {
                    _fun96162_ip = 87;
                    continue _fun96162
                }
            case 57:
                var1 = _closure1_slot15;
                var1 = var1.DISCONNECTED;
                var1 = var4 === var1;
                if (!var1) {
                    _fun96162_ip = 84;
                    continue _fun96162
                }
            case 74:
                var3 = _closure1_slot24;
                var3 = var3.bind(var2)();
                var1 = undefined;
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var8;
    var8 = function arg0() {
        _fun96163: for (var _fun96163_ip = 0;;) switch (_fun96163_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.voiceStates;
                var2 = _closure1_slot10;
                var0 = var2.getChannelId;
                var2 = var0.bind(var2)();
                var _closure2_slot0 = var2;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun96163_ip = 62;
                    continue _fun96163
                }
            case 41:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun96164: for (var _fun96164_ip = 0;;) switch (_fun96164_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            var4 = var0.userId;
                            var2 = var0.channelId;
                            var0 = _closure2_slot0;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun96164_ip = 50;
                                continue _fun96164
                            }
                        case 30:
                            var3 = _closure1_slot22;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                            var2 = !var2;
                            var0 = !var2;
                        case 50:
                            if (var0) {
                                _fun96164_ip = 56;
                                continue _fun96164
                            }
                        case 53:
                            var0 = var1;
                        case 56:
                            return var0;
                    }
                };
                var1 = false;
                var0 = var3.bind(var4)(var2, var1);
            case 62:
                return var0;
        }
    };
    var1.VOICE_STATE_UPDATES = var8;
    var8 = function arg0() {
        _fun96165: for (var _fun96165_ip = 0;;) switch (_fun96165_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userIds;
                var2 = var0.guildId;
                var _closure2_slot0 = var2;
                var2 = var0.channelId;
                var _closure2_slot1 = var2;
                var2 = var0.context;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var5.bind(var0)(var3);
                var0 = var0.MediaEngineContextTypes;
                var0 = var0.DEFAULT;
                var0 = var2 === var0;
                if (!var0) {
                    _fun96165_ip = 99;
                    continue _fun96165
                }
            case 78:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun96166: for (var _fun96166_ip = 0;;) switch (_fun96166_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var6 = _closure1_slot12;
                            var5 = var6.getVoiceStateForChannel;
                            var3 = _closure2_slot1;
                            var5 = var5.bind(var6)(var3, var4);
                            var3 = null;
                            if (!(var3 == var5)) {
                                _fun96166_ip = 101;
                                continue _fun96166
                            }
                        case 38:
                            var6 = _closure1_slot11;
                            var5 = var6.getUser;
                            var7 = var5.bind(var6)(var4);
                            if (!(var3 != var7)) {
                                _fun96166_ip = 82;
                                continue _fun96166
                            }
                        case 57:
                            var6 = _closure1_slot21;
                            var5 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var7, var5, var3);
                            var1 = true;
                            _fun96166_ip = 99;
                            continue _fun96166;
                        case 82:
                            var3 = _closure1_slot19;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var4);
                            var1 = var0;
                        case 99:
                            return var1;
                        case 101:
                            return var0;
                    }
                };
                var1 = false;
                var0 = var3.bind(var4)(var2, var1);
            case 99:
                return var0;
        }
    };
    var1.RTC_CONNECTION_CLIENT_CONNECT = var8;
    var3 = function arg0() {
        _fun96167: for (var _fun96167_ip = 0;;) switch (_fun96167_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var4 = var0.context;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.MediaEngineContextTypes;
                var0 = var0.DEFAULT;
                var0 = var4 === var0;
                if (!var0) {
                    _fun96167_ip = 66;
                    continue _fun96167
                }
            case 57:
                var1 = _closure1_slot22;
                var0 = var1.bind(var2)(var3);
            case 66:
                return var0;
        }
    };
    var1.RTC_CONNECTION_CLIENT_DISCONNECT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/RTCConnectionDesyncStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3522, 1372, 3518, 1621, 3521, 3526, 660, 3523, 3486, 3961, 3962, 3633, 566, 806, 2]);