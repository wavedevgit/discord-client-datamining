// modules/calls/ChannelRTCParticipants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var9;
    var5 = function arg0() {
        _fun35986: for (var _fun35986_ip = 0;;) switch (_fun35986_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.applicationId;
                var4 = var0.instanceId;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun35986_ip = 46;
                    continue _fun35986
                }
            case 20:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'activity-';
                var0 = var1.bind(var0)(var5);
                _fun35986_ip = 76;
                continue _fun35986;
            case 46:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'activity-';
                var1 = '-';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 76:
                return var0;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function arg0() {
        _fun35987: for (var _fun35987_ip = 0;;) switch (_fun35987_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var2 = _closure1_slot16;
                var2 = var2.ACTIVITY;
                if (!(var2 !== var3)) {
                    _fun35987_ip = 294;
                    continue _fun35987
                }
            case 28:
                var2 = _closure1_slot16;
                var2 = var2.HIDDEN_STREAM;
                if (!(var2 !== var3)) {
                    _fun35987_ip = 205;
                    continue _fun35987
                }
            case 45:
                var2 = _closure1_slot16;
                var2 = var2.STREAM;
                if (!(var2 !== var3)) {
                    _fun35987_ip = 205;
                    continue _fun35987
                }
            case 62:
                var2 = _closure1_slot16;
                var2 = var2.USER;
                if (!(var2 !== var3)) {
                    _fun35987_ip = 80;
                    continue _fun35987
                }
            case 76:
                var2 = undefined;
                return var2;
            case 80:
                var3 = var0.voiceState;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun35987_ip = 107;
                    continue _fun35987
                }
            case 92:
                var3 = var3.selfVideo;
                var5 = '\x03';
                if (var3) {
                    _fun35987_ip = 141;
                    continue _fun35987
                }
            case 107:
                var3 = var0.voiceState;
                var2 = var2 != var3;
                if (!var2) {
                    _fun35987_ip = 126;
                    continue _fun35987
                }
            case 120:
                var2 = var3.selfStream;
            case 126:
                var5 = '\x05';
                if (!var2) {
                    _fun35987_ip = 141;
                    continue _fun35987
                }
            case 135:
                var5 = '\x04';
            case 141:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var6 = undefined;
                var4 = var3.bind(var6)(var2);
                var3 = var0.userNick;
                var2 = var0.user;
                var4 = var4.bind(var6)(var3, var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var2 = var3.bind(var2)(var5, var4);
                return var2;
            case 205:
                var2 = var0.userVideo;
                var5 = '\x03';
                var4 = var5;
                if (!var2) {
                    _fun35987_ip = 229;
                    continue _fun35987
                }
            case 223:
                var4 = '\x02';
            case 229:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var0.userNick;
                var1 = var0.user;
                var3 = var3.bind(var6)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var1 = var2.bind(var1)(var4, var3, var5);
                return var1;
            case 294:
                var2 = var0.sortKey;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '\x01';
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var _closure1_slot22 = var4;
    var0 = function arg0() {
        _fun35988: for (var _fun35988_ip = 0;;) switch (_fun35988_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getId;
                var1 = var0.bind(var1)();
                var0 = arg0;
                var0 = var1 === var0;
                if (!var0) {
                    _fun35988_ip = 64;
                    continue _fun35988
                }
            case 27:
                var3 = _closure1_slot10;
                var1 = var3.isMute;
                var1 = var1.bind(var3)();
                var1 = !var1;
                if (!var1) {
                    _fun35988_ip = 61;
                    continue _fun35988
                }
            case 47:
                var3 = _closure1_slot11;
                var2 = var3.isCurrentUserPTTLatched;
                var1 = var2.bind(var3)();
            case 61:
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var9[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var6 = var1.isStreamParticipant;
    var _closure1_slot15 = var6;
    var1 = var1.ParticipantTypes;
    var _closure1_slot16 = var1;
    var1 = 13;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var6 = var1.ActivityTypes;
    var _closure1_slot17 = var6;
    var1 = var1.ChannelTypes;
    var _closure1_slot18 = var1;
    var1 = 14;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot19 = var1;
    var1 = {};
    var6 = 'VIDEO';
    var1.VIDEO = var6;
    var6 = 'STREAM';
    var1.STREAM = var6;
    var6 = 'FILTERED';
    var1.FILTERED = var6;
    var6 = 'SPEAKING';
    var1.SPEAKING = var6;
    var6 = 'ACTIVITY';
    var1.ACTIVITY = var6;
    var6 = 'NOT_POPPED_OUT';
    var1.NOT_POPPED_OUT = var6;
    var _closure1_slot20 = var1;
    var6 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = {};
            var2.participants = var3;
            var3 = {};
            var2.lastSpoke = var3;
            var3 = global;
            var4 = var3.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var2.guildRingingUsers = var4;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var8 = var4;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.poppedOutParticipants = var3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var5 = var3.SecondaryIndexMap;
            var6 = _closure1_slot22;
            var1 = var5.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var5
                }
            });
            var7 = function(arg0) { // Environment: var1
                _fun35991: for (var _fun35991_ip = 0;;) switch (_fun35991_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = new Array(0);
                        var4 = var3.type;
                        var2 = _closure1_slot16;
                        var2 = var2.USER;
                        var2 = var4 === var2;
                        if (!var2) {
                            _fun35991_ip = 38;
                            continue _fun35991
                        }
                    case 32:
                        var2 = var3.speaking;
                    case 38:
                        if (!var2) {
                            _fun35991_ip = 61;
                            continue _fun35991
                        }
                    case 41:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.SPEAKING;
                        var2 = var4.bind(var0)(var2);
                    case 61:
                        var4 = var3.type;
                        var2 = _closure1_slot16;
                        var2 = var2.USER;
                        if (!(var4 === var2)) {
                            _fun35991_ip = 101;
                            continue _fun35991
                        }
                    case 80:
                        var2 = var3.voiceState;
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun35991_ip = 101;
                            continue _fun35991
                        }
                    case 92:
                        var2 = var2.selfVideo;
                        if (var2) {
                            _fun35991_ip = 206;
                            continue _fun35991
                        }
                    case 101:
                        var4 = _closure1_slot15;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        if (!var2) {
                            _fun35991_ip = 264;
                            continue _fun35991
                        }
                    case 118:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.STREAM;
                        var2 = var4.bind(var0)(var2);
                        var4 = var3.type;
                        var2 = _closure1_slot16;
                        var2 = var2.HIDDEN_STREAM;
                        var2 = var4 === var2;
                        if (var2) {
                            _fun35991_ip = 172;
                            continue _fun35991
                        }
                    case 160:
                        var5 = var3.streamId;
                        var4 = null;
                        var2 = var4 == var5;
                    case 172:
                        if (var2) {
                            _fun35991_ip = 181;
                            continue _fun35991
                        }
                    case 175:
                        var2 = var3.isPoppedOut;
                    case 181:
                        if (var2) {
                            _fun35991_ip = 264;
                            continue _fun35991
                        }
                    case 184:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.FILTERED;
                        var2 = var4.bind(var0)(var2);
                        _fun35991_ip = 264;
                        continue _fun35991;
                    case 206:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.VIDEO;
                        var2 = var4.bind(var0)(var2);
                        var2 = var3.localVideoDisabled;
                        if (var2) {
                            _fun35991_ip = 241;
                            continue _fun35991
                        }
                    case 235:
                        var2 = var3.isPoppedOut;
                    case 241:
                        if (var2) {
                            _fun35991_ip = 264;
                            continue _fun35991
                        }
                    case 244:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.FILTERED;
                        var2 = var4.bind(var0)(var2);
                    case 264:
                        var4 = var3.type;
                        var2 = _closure1_slot16;
                        var2 = var2.ACTIVITY;
                        if (!(var4 === var2)) {
                            _fun35991_ip = 303;
                            continue _fun35991
                        }
                    case 283:
                        var4 = var0.push;
                        var2 = _closure1_slot20;
                        var2 = var2.ACTIVITY;
                        var2 = var4.bind(var0)(var2);
                    case 303:
                        var2 = 'isPoppedOut';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun35991_ip = 320;
                            continue _fun35991
                        }
                    case 314:
                        var2 = var3.isPoppedOut;
                    case 320:
                        if (var2) {
                            _fun35991_ip = 343;
                            continue _fun35991
                        }
                    case 323:
                        var2 = var0.push;
                        var1 = _closure1_slot20;
                        var1 = var1.NOT_POPPED_OUT;
                        var1 = var2.bind(var0)(var1);
                    case 343:
                        return var0;
                }
            };
            var8 = var3;
            var1 = new var8[var5](var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.participantByIndex = var1;
            var1 = arg0;
            var2.channelId = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'version';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.participantByIndex;
            var0 = var0.version;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(15);
        var1[0] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.participantByIndex;
            var1 = var2.size;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'toArray';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var3 = var0.participantByIndex;
            var2 = var3.values;
            var1 = arg0;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'rebuild';
        var0.key = var5;
        var5 = function() {
            _fun35995: for (var _fun35995_ip = 0;;) switch (_fun35995_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var3 = var1.channelId;
                    var5 = var4.bind(var5)(var3);
                    var4 = null;
                    if (!(var4 != var5)) {
                        _fun35995_ip = 423;
                        continue _fun35995
                    }
                case 40:
                    var6 = var5.type;
                    var3 = _closure1_slot18;
                    var3 = var3.GUILD_TEXT;
                    if (!(var6 !== var3)) {
                        _fun35995_ip = 423;
                        continue _fun35995
                    }
                case 62:
                    var7 = _closure1_slot8;
                    var6 = var7.getCall;
                    var3 = var1.channelId;
                    var3 = var6.bind(var7)(var3);
                    var1.call = var3;
                    var3 = var5.isPrivate;
                    var3 = var3.bind(var5)();
                    if (!var3) {
                        _fun35995_ip = 130;
                        continue _fun35995
                    }
                case 101:
                    var3 = var1.call;
                    if (!(var4 != var3)) {
                        _fun35995_ip = 419;
                        continue _fun35995
                    }
                case 113:
                    var3 = var1.call;
                    var3 = var3.unavailable;
                    if (var3) {
                        _fun35995_ip = 419;
                        continue _fun35995
                    }
                case 130:
                    var4 = global;
                    var6 = var4.Set;
                    var3 = var5.isGuildVocalOrThread;
                    var3 = var3.bind(var5)();
                    if (var3) {
                        _fun35995_ip = 159;
                        continue _fun35995
                    }
                case 151:
                    var3 = var5.recipients;
                    _fun35995_ip = 195;
                    continue _fun35995;
                case 159:
                    var8 = var4.Object;
                    var7 = var8.keys;
                    var10 = _closure1_slot14;
                    var9 = var10.getVoiceStatesForChannel;
                    var5 = var5.id;
                    var5 = var9.bind(var10)(var5);
                    var3 = var7.bind(var8)(var5);
                case 195:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var5;
                    var13 = var3;
                    var3 = new var14[var6](var13, var12);
                    var7 = var3 instanceof Object ? var3 : var5;
                    var _closure3_slot1 = var7;
                    var5 = var7.add;
                    var6 = _closure1_slot7;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var3 = var5.bind(var7)(var3);
                    var3 = var1.guildRingingUsers;
                    var6 = var3.size;
                    var5 = 0;
                    var3 = var7;
                    if (!(var6 > var5)) {
                        _fun35995_ip = 331;
                        continue _fun35995
                    }
                case 266:
                    var6 = var4.Set;
                    var4 = new Array(0);
                    var13 = var4;
                    var12 = var7;
                    var11 = 0;
                    var11 = arraySpread(var13, var12, var11);
                    var12 = var1.guildRingingUsers;
                    var13 = var4;
                    var5 = arraySpread(var13, var12, var11);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var5;
                    var13 = var4;
                    var4 = new var14[var6](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var5;
                    _closure3_slot1 = var4;
                    var3 = var4;
                case 331:
                    var5 = _closure1_slot6;
                    var4 = var5.getAllActiveStreamsForChannel;
                    var2 = var1.channelId;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.forEach;
                    var2 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0.ownerId;
                        var1 = _closure3_slot1;
                        var0 = var1.add;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    var4 = var1.participantByIndex;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var2 = {};
                    var1.participants = var2;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.updateParticipant;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.updateEmbeddedActivities;
                    var0 = var0.bind(var1)();
                    var0 = true;
                    return var0;
                case 419:
                    var0 = false;
                    return var0;
                case 423:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getParticipant';
        var0.key = var5;
        var5 = function arg0() {
            _fun35998: for (var _fun35998_ip = 0;;) switch (_fun35998_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.participantByIndex;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun35998_ip = 34;
                        continue _fun35998
                    }
                case 31:
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updateEmbeddedActivities';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.updateParticipant;
            var0 = '__EMBEDDED_ACTIVITIES__';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'hasEmbeddedActivity';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.size;
            var0 = _closure1_slot20;
            var0 = var0.ACTIVITY;
            var1 = var1.bind(var2)(var0);
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'updateParticipant';
        var0.key = var5;
        var5 = function arg0() {
            _fun36001: for (var _fun36001_ip = 0;;) switch (_fun36001_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.participants;
                    var7 = var0[var3];
                    var0 = '__EMBEDDED_ACTIVITIES__';
                    if (!(var3 !== var0)) {
                        _fun36001_ip = 45;
                        continue _fun36001
                    }
                case 32:
                    var0 = var1._getParticipantsForUser;
                    var2 = var0.bind(var1)(var3);
                    _fun36001_ip = 57;
                    continue _fun36001;
                case 45:
                    var0 = var1._getParticipantsForEmbeddedActivities;
                    var2 = var0.bind(var1)();
                case 57:
                    var5 = null;
                    var0 = var5 != var7;
                    if (var0) {
                        _fun36001_ip = 77;
                        continue _fun36001
                    }
                case 66:
                    var8 = var2.length;
                    var6 = 0;
                    var0 = var6 !== var8;
                case 77:
                    if (!var0) {
                        _fun36001_ip = 126;
                        continue _fun36001
                    }
                case 80:
                    if (!(var5 != var7)) {
                        _fun36001_ip = 99;
                        continue _fun36001
                    }
                case 84:
                    var6 = var7.forEach;
                    var5 = function(arg0) { // Environment: var4
                        var0 = _closure3_slot0;
                        var2 = var0.participantByIndex;
                        var1 = var2.delete;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                case 99:
                    var5 = var2.forEach;
                    var4 = function(arg0) { // Environment: var4
                        var3 = arg0;
                        var0 = _closure3_slot0;
                        var2 = var0.participantByIndex;
                        var1 = var2.set;
                        var0 = var3.id;
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var5.bind(var2)(var4);
                    var1 = var1.participants;
                    var1[var3] = var2;
                    var0 = true;
                case 126:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'updateParticipantSpeaking';
        var0.key = var5;
        var5 = function arg0() {
            _fun36004: for (var _fun36004_ip = 0;;) switch (_fun36004_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var1;
                    var0 = var0.participants;
                    var5 = var0[var1];
                    var0 = null;
                    var3 = var0 == var5;
                    var1 = undefined;
                    if (var3) {
                        _fun36004_ip = 56;
                        continue _fun36004
                    }
                case 37:
                    var4 = var5.reduce;
                    var3 = function(arg0, arg1) { // Environment: var2
                        _fun36005: for (var _fun36005_ip = 0;;) switch (_fun36005_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = arg1;
                                var2 = var9.type;
                                var1 = _closure1_slot16;
                                var1 = var1.USER;
                                if (!(var2 !== var1)) {
                                    _fun36005_ip = 30;
                                    continue _fun36005
                                }
                            case 28:
                                return var0;
                            case 30:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 17;
                                var1 = var4[var1];
                                var4 = undefined;
                                var8 = var2.bind(var4)(var1);
                                var5 = var8.getIsSpeaking;
                                var2 = {};
                                var7 = _closure3_slot1;
                                var2.userId = var7;
                                var1 = true;
                                var2.checkIsMuted = var1;
                                var11 = var5.bind(var8)(var2);
                                var2 = _closure1_slot23;
                                var10 = var2.bind(var4)(var7);
                                var5 = _closure1_slot11;
                                var2 = var5.isSoundSharing;
                                var7 = var2.bind(var5)(var7);
                                var2 = _closure3_slot0;
                                var8 = var2.participantByIndex;
                                var5 = var8.get;
                                var2 = var9.id;
                                var2 = var5.bind(var8)(var2);
                                var5 = null;
                                var5 = var5 == var2;
                                if (var5) {
                                    _fun36005_ip = 146;
                                    continue _fun36005
                                }
                            case 141:
                                var4 = var2.type;
                            case 146:
                                var3 = _closure1_slot16;
                                var3 = var3.USER;
                                if (!(var4 === var3)) {
                                    _fun36005_ip = 193;
                                    continue _fun36005
                                }
                            case 160:
                                var3 = var2.speaking;
                                if (!(var3 === var11)) {
                                    _fun36005_ip = 193;
                                    continue _fun36005
                                }
                            case 170:
                                var3 = var2.latched;
                                if (!(var3 === var10)) {
                                    _fun36005_ip = 193;
                                    continue _fun36005
                                }
                            case 180:
                                var2 = var2.soundsharing;
                                if (!(var2 !== var7)) {
                                    _fun36005_ip = 321;
                                    continue _fun36005
                                }
                            case 193:
                                if (!var11) {
                                    _fun36005_ip = 231;
                                    continue _fun36005
                                }
                            case 196:
                                var2 = _closure3_slot0;
                                var4 = var2.lastSpoke;
                                var3 = _closure3_slot1;
                                var2 = global;
                                var5 = var2.Date;
                                var2 = var5.now;
                                var2 = var2.bind(var5)();
                                var4[var3] = var2;
                            case 231:
                                var8 = _closure3_slot0;
                                var5 = var8.participantByIndex;
                                var4 = var5.set;
                                var3 = var9.id;
                                var2 = {};
                                var13 = var2;
                                var12 = var9;
                                var9 = copyDataProperties(var13, var12);
                                var9 = 'speaking';
                                var2[var9] = var11;
                                var9 = 'latched';
                                var2[var9] = var10;
                                var8 = var8.lastSpoke;
                                var6 = _closure3_slot1;
                                var8 = var8[var6];
                                var6 = 'lastSpoke';
                                var2[var6] = var8;
                                var6 = 'soundsharing';
                                var2[var6] = var7;
                                var2 = var4.bind(var5)(var3, var2);
                                var0 = true;
                            case 321:
                                return var0;
                        }
                    };
                    var2 = false;
                    var1 = var4.bind(var5)(var3, var2);
                case 56:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun36004_ip = 66;
                        continue _fun36004
                    }
                case 63:
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'updateParticipantQuality';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun36006: for (var _fun36006_ip = 0;;) switch (_fun36006_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var1 = arg2;
                    var _closure3_slot2 = var1;
                    var1 = var0.participants;
                    var0 = arg0;
                    var5 = var1[var0];
                    var0 = null;
                    var3 = var0 == var5;
                    var1 = undefined;
                    if (var3) {
                        _fun36006_ip = 66;
                        continue _fun36006
                    }
                case 47:
                    var4 = var5.reduce;
                    var3 = function(arg0, arg1) { // Environment: var2
                        _fun36007: for (var _fun36007_ip = 0;;) switch (_fun36007_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = arg1;
                                var2 = var6.type;
                                var1 = _closure1_slot16;
                                var1 = var1.STREAM;
                                if (!(var2 === var1)) {
                                    _fun36007_ip = 97;
                                    continue _fun36007
                                }
                            case 28:
                                var1 = _closure3_slot0;
                                var4 = var1.participantByIndex;
                                var3 = var4.set;
                                var2 = var6.id;
                                var1 = {};
                                var9 = var1;
                                var8 = var6;
                                var6 = copyDataProperties(var9, var8);
                                var7 = _closure3_slot1;
                                var6 = 'maxResolution';
                                var1[var6] = var7;
                                var6 = _closure3_slot2;
                                var5 = 'maxFrameRate';
                                var1[var5] = var6;
                                var1 = var3.bind(var4)(var2, var1);
                                var0 = true;
                            case 97:
                                return var0;
                        }
                    };
                    var2 = false;
                    var1 = var4.bind(var5)(var3, var2);
                case 66:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun36006_ip = 76;
                        continue _fun36006
                    }
                case 73:
                    var0 = var1;
                case 76:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'updateGuildRingingUsers';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun36008: for (var _fun36008_ip = 0;;) switch (_fun36008_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.guildRingingUsers;
                    var0 = arg1;
                    if (var0) {
                        _fun36008_ip = 30;
                        continue _fun36008
                    }
                case 18:
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    _fun36008_ip = 40;
                    continue _fun36008;
                case 30:
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'updateParticipantPoppedOut';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun36009: for (var _fun36009_ip = 0;;) switch (_fun36009_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.poppedOutParticipants;
                    var0 = arg1;
                    if (var0) {
                        _fun36009_ip = 30;
                        continue _fun36009
                    }
                case 18:
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    _fun36009_ip = 40;
                    continue _fun36009;
                case 30:
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = '_getEmbeddedActivities';
        var0.key = var5;
        var5 = function() {
            _fun36010: for (var _fun36010_ip = 0;;) switch (_fun36010_ip) {
                case 0:
                    var0 = this;
                    var3 = _closure1_slot5;
                    var4 = var3.getEmbeddedActivitiesForChannel;
                    var1 = var0.channelId;
                    var6 = var4.bind(var3)(var1);
                    var1 = var3.getSelfEmbeddedActivityForChannel;
                    var0 = var0.channelId;
                    var1 = var1.bind(var3)(var0);
                    var3 = null;
                    var0 = var6;
                    if (!(var3 != var1)) {
                        _fun36010_ip = 120;
                        continue _fun36010
                    }
                case 51:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.uniqBy;
                    var2 = new Array(1);
                    var7 = 0;
                    var9 = var2;
                    var8 = var6;
                    var5 = arraySpread(var9, var8, var7);
                    var2[var5] = var1;
                    var1 = 1;
                    var1 = var5 + var1;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.compositeInstanceId;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1);
                case 120:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = '_getParticipantsForEmbeddedActivities';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = var2._getEmbeddedActivities;
            var2 = var1.bind(var2)();
            var1 = var2.map;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun36013: for (var _fun36013_ip = 0;;) switch (_fun36013_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        var0 = {};
                        var3 = _closure1_slot16;
                        var3 = var3.ACTIVITY;
                        var0.type = var3;
                        var6 = _closure1_slot21;
                        var5 = {};
                        var3 = var1.applicationId;
                        var5.applicationId = var3;
                        var3 = var1.compositeInstanceId;
                        var5.instanceId = var3;
                        var3 = undefined;
                        var5 = var6.bind(var3)(var5);
                        var0.id = var5;
                        var5 = var1.applicationId;
                        var0.applicationId = var5;
                        var5 = _closure1_slot17;
                        var5 = var5.PLAYING;
                        var0.activityType = var5;
                        var5 = var1.url;
                        var0.activityUrl = var5;
                        var7 = var1.participants;
                        var1 = null;
                        if (!(var1 == var7)) {
                            _fun36013_ip = 112;
                            continue _fun36013
                        }
                    case 108:
                        var7 = new Array(0);
                    case 112:
                        var5 = new Array(0);
                        var8 = 0;
                        var10 = var5;
                        var9 = var7;
                        var6 = arraySpread(var10, var9, var8);
                        var0.participants = var5;
                        var6 = _closure1_slot9;
                        var5 = var6.getChannel;
                        var4 = _closure3_slot0;
                        var4 = var4.channelId;
                        var5 = var5.bind(var6)(var4);
                        var4 = var1 == var5;
                        var3 = undefined;
                        if (var4) {
                            _fun36013_ip = 178;
                            continue _fun36013
                        }
                    case 168:
                        var4 = var5.getGuildId;
                        var3 = var4.bind(var5)();
                    case 178:
                        var4 = var1 != var3;
                        var1 = null;
                        if (!var4) {
                            _fun36013_ip = 190;
                            continue _fun36013
                        }
                    case 187:
                        var1 = var3;
                    case 190:
                        var0.guildId = var1;
                        var1 = var2.toString;
                        var1 = var1.bind(var2)();
                        var0.sortKey = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = '_getParticipantsForUser';
        var0.key = var5;
        var4 = function arg0() {
            _fun36014: for (var _fun36014_ip = 0;;) switch (_fun36014_ip) {
                case 0:
                    var16 = arg0;
                    var1 = this;
                    var0 = new Array(0);
                    var4 = _closure1_slot12;
                    var2 = var4.getUser;
                    var9 = var2.bind(var4)(var16);
                    var10 = null;
                    if (!(var10 != var9)) {
                        _fun36014_ip = 1021;
                        continue _fun36014
                    }
                case 37:
                    var5 = _closure1_slot14;
                    var4 = var5.getVoiceStateForChannel;
                    var2 = var1.channelId;
                    var11 = var4.bind(var5)(var2, var16);
                    var4 = var5.getVoicePlatformForChannel;
                    var2 = var1.channelId;
                    var6 = var4.bind(var5)(var2, var16);
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var2 = var1.channelId;
                    var4 = var4.bind(var5)(var2);
                    var2 = var10 == var4;
                    var7 = undefined;
                    var8 = undefined;
                    if (var2) {
                        _fun36014_ip = 115;
                        continue _fun36014
                    }
                case 105:
                    var2 = var4.getGuildId;
                    var8 = var2.bind(var4)();
                case 115:
                    var4 = var1.call;
                    var5 = var10 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun36014_ip = 154;
                        continue _fun36014
                    }
                case 129:
                    var5 = var4.ringing;
                    var4 = var10 == var5;
                    var2 = undefined;
                    if (var4) {
                        _fun36014_ip = 154;
                        continue _fun36014
                    }
                case 144:
                    var4 = var5.includes;
                    var2 = var4.bind(var5)(var16);
                case 154:
                    if (var2) {
                        _fun36014_ip = 173;
                        continue _fun36014
                    }
                case 157:
                    var5 = var1.guildRingingUsers;
                    var4 = var5.has;
                    var2 = var4.bind(var5)(var16);
                case 173:
                    var5 = var10 != var2;
                    if (!var5) {
                        _fun36014_ip = 183;
                        continue _fun36014
                    }
                case 180:
                    var5 = var2;
                case 183:
                    var2 = var10 != var11;
                    if (var2) {
                        _fun36014_ip = 193;
                        continue _fun36014
                    }
                case 190:
                    var2 = var5;
                case 193:
                    if (!var2) {
                        _fun36014_ip = 567;
                        continue _fun36014
                    }
                case 199:
                    var4 = {};
                    var2 = _closure1_slot16;
                    var2 = var2.USER;
                    var4.type = var2;
                    var12 = _closure1_slot13;
                    var2 = var12.getUserStreamData;
                    var19 = var2.bind(var12)(var16, var8);
                    var20 = var4;
                    var2 = copyDataProperties(var20, var19);
                    var2 = 'user';
                    var4[var2] = var9;
                    var12 = var9.id;
                    var2 = 'id';
                    var4[var2] = var12;
                    var2 = 'voiceState';
                    var4[var2] = var11;
                    var2 = 'voicePlatform';
                    var4[var2] = var6;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 17;
                    var2 = var12[var2];
                    var12 = var6.bind(var7)(var2);
                    var6 = var12.getIsSpeaking;
                    var2 = {};
                    var2.userId = var16;
                    var13 = true;
                    var2.checkIsMuted = var13;
                    var6 = var6.bind(var12)(var2);
                    var2 = 'speaking';
                    var4[var2] = var6;
                    var2 = _closure1_slot23;
                    var6 = var2.bind(var7)(var16);
                    var2 = 'latched';
                    var4[var2] = var6;
                    var2 = var1.lastSpoke;
                    var2 = var2[var16];
                    var12 = var10 != var2;
                    var6 = 0;
                    if (!var12) {
                        _fun36014_ip = 372;
                        continue _fun36014
                    }
                case 369:
                    var6 = var2;
                case 372:
                    var2 = 'lastSpoke';
                    var4[var2] = var6;
                    var6 = _closure1_slot11;
                    var2 = var6.isSoundSharing;
                    var6 = var2.bind(var6)(var16);
                    var2 = 'soundsharing';
                    var4[var2] = var6;
                    var2 = 'ringing';
                    var4[var2] = var5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 19;
                    var2 = var6[var2];
                    var12 = var5.bind(var7)(var2);
                    var5 = var12.getName;
                    var2 = var1.channelId;
                    var5 = var5.bind(var12)(var8, var2, var9);
                    var2 = 'userNick';
                    var4[var2] = var5;
                    var5 = _closure1_slot0;
                    var2 = 20;
                    var2 = var6[var2];
                    var5 = var5.bind(var7)(var2);
                    var2 = var5.getAvatarDecoration;
                    var5 = var2.bind(var5)(var9, var8);
                    var2 = 'userAvatarDecoration';
                    var4[var2] = var5;
                    var6 = _closure1_slot10;
                    var5 = var6.isLocalVideoDisabled;
                    var2 = var9.id;
                    var5 = var5.bind(var6)(var2);
                    var2 = 'localVideoDisabled';
                    var4[var2] = var5;
                    var6 = var1.poppedOutParticipants;
                    var5 = var6.has;
                    var2 = var9.id;
                    var5 = var5.bind(var6)(var2);
                    var2 = 'isPoppedOut';
                    var4[var2] = var5;
                    var2 = var0.push;
                    var2 = var2.bind(var0)(var4);
                case 567:
                    var4 = _closure1_slot6;
                    var2 = var4.getStreamForUser;
                    var5 = var2.bind(var4)(var16, var8);
                    if (!(var10 == var5)) {
                        _fun36014_ip = 603;
                        continue _fun36014
                    }
                case 587:
                    var4 = _closure1_slot6;
                    var2 = var4.getActiveStreamForUser;
                    var5 = var2.bind(var4)(var16, var8);
                case 603:
                    if (!(var10 != var5)) {
                        _fun36014_ip = 1019;
                        continue _fun36014
                    }
                case 610:
                    var4 = var5.channelId;
                    var2 = var1.channelId;
                    if (!(var4 === var2)) {
                        _fun36014_ip = 1019;
                        continue _fun36014
                    }
                case 627:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var4 = var4.bind(var7)(var2);
                    var2 = var4.encodeStreamKey;
                    var4 = var2.bind(var4)(var5);
                    var2 = var1.getParticipant;
                    var13 = var2.bind(var1)(var4);
                    var6 = var5.ownerId;
                    var12 = _closure1_slot7;
                    var2 = var12.getId;
                    var2 = var2.bind(var12)();
                    var12 = var6 === var2;
                    if (!var12) {
                        _fun36014_ip = 716;
                        continue _fun36014
                    }
                case 696:
                    var14 = _closure1_slot6;
                    var6 = var14.isSelfStreamHidden;
                    var2 = var1.channelId;
                    var12 = var6.bind(var14)(var2);
                case 716:
                    var2 = var10 == var13;
                    var14 = undefined;
                    if (var2) {
                        _fun36014_ip = 730;
                        continue _fun36014
                    }
                case 725:
                    var14 = var13.type;
                case 730:
                    var2 = _closure1_slot16;
                    var2 = var2.STREAM;
                    var6 = null;
                    if (!(var14 === var2)) {
                        _fun36014_ip = 800;
                        continue _fun36014
                    }
                case 746:
                    var2 = {};
                    var14 = var13.maxResolution;
                    var15 = var10 != var14;
                    var14 = undefined;
                    if (!var15) {
                        _fun36014_ip = 781;
                        continue _fun36014
                    }
                case 763:
                    var15 = {};
                    var19 = var13.maxResolution;
                    var20 = var15;
                    var17 = copyDataProperties(var20, var19);
                    var14 = var15;
                case 781:
                    var2.maxResolution = var14;
                    var13 = var13.maxFrameRate;
                    var2.maxFrameRate = var13;
                    var6 = var2;
                case 800:
                    var2 = {};
                    var15 = _closure1_slot13;
                    var14 = var15.getUserStreamData;
                    var13 = _closure1_slot19;
                    var13 = var13.STREAM;
                    var19 = var14.bind(var15)(var16, var8, var13);
                    var20 = var2;
                    var13 = copyDataProperties(var20, var19);
                    var20 = var2;
                    var19 = var6;
                    var6 = copyDataProperties(var20, var19);
                    var6 = _closure1_slot16;
                    if (var12) {
                        _fun36014_ip = 861;
                        continue _fun36014
                    }
                case 853:
                    var12 = var6.STREAM;
                    _fun36014_ip = 867;
                    continue _fun36014;
                case 861:
                    var12 = var6.HIDDEN_STREAM;
                case 867:
                    var6 = 'type';
                    var2[var6] = var12;
                    var6 = 'id';
                    var2[var6] = var4;
                    var12 = var10 == var11;
                    var6 = undefined;
                    if (var12) {
                        _fun36014_ip = 900;
                        continue _fun36014
                    }
                case 894:
                    var6 = var11.selfVideo;
                case 900:
                    var10 = var10 != var6;
                    if (!var10) {
                        _fun36014_ip = 910;
                        continue _fun36014
                    }
                case 907:
                    var10 = var6;
                case 910:
                    var6 = 'userVideo';
                    var2[var6] = var10;
                    var6 = 'user';
                    var2[var6] = var9;
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 19;
                    var3 = var10[var3];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.getName;
                    var3 = var1.channelId;
                    var6 = var6.bind(var7)(var8, var3, var9);
                    var3 = 'userNick';
                    var2[var3] = var6;
                    var3 = 'stream';
                    var2[var3] = var5;
                    var3 = var1.poppedOutParticipants;
                    var1 = var3.has;
                    var3 = var1.bind(var3)(var4);
                    var1 = 'isPoppedOut';
                    var2[var1] = var3;
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var2);
                case 1019:
                    return var0;
                case 1021:
                    return var0;
            }
        };
        var0.value = var4;
        var1[14] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = var6.bind(var0)();
    var7 = 22;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/calls/ChannelRTCParticipants.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.getEmbeddedActivityParticipantId = var5;
    var5 = function arg0() {
        _fun36015: for (var _fun36015_ip = 0;;) switch (_fun36015_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var0 = var3;
                if (!(var1 != var0)) {
                    _fun36015_ip = 33;
                    continue _fun36015
                }
            case 12:
                var2 = var3.split;
                var1 = '-';
                var2 = var2.bind(var3)(var1);
                var1 = 1;
                var0 = var2[var1];
            case 33:
                return var0;
        }
    };
    var2.activityParticipantIdToApplicationId = var5;
    var2.sortKey = var4;
    var3 = function arg0, arg1() {
        _fun36016: for (var _fun36016_ip = 0;;) switch (_fun36016_ip) {
            case 0:
                var4 = arg0;
                var1 = var4[Symbol.iterator];
                var4 = var1().next;
                var11 = undefined;
                var2 = undefined;
                var3 = undefined;
                var5 = var4().value;
                var8 = var1;
                var8 = var8 === var11;
                var2 = var8;
                if (var8) {
                    _fun36016_ip = 32;
                    continue _fun36016
                }
            case 29:
                var3 = var5;
            case 32:
                var3 = undefined;
                var5 = var2;
                if (var5) {
                    _fun36016_ip = 60;
                    continue _fun36016
                }
            case 40:
                var4 = var4().value;
                var5 = var1;
                var5 = var5 === var11;
                var2 = var5;
                if (var5) {
                    _fun36016_ip = 60;
                    continue _fun36016
                }
            case 57:
                var3 = var4;
            case 60:
                var7 = var3;
                var3 = var2;
                if (var3) {
                    _fun36016_ip = 72;
                    continue _fun36016
                }
            case 69:
                var1.return();
            case 72:
                var9 = arg1;
                var4 = var9[Symbol.iterator];
                var9 = var4().next;
                var5 = undefined;
                var8 = undefined;
                var10 = var9().value;
                var12 = var4;
                var12 = var12 === var11;
                var5 = var12;
                if (var12) {
                    _fun36016_ip = 102;
                    continue _fun36016
                }
            case 99:
                var8 = var10;
            case 102:
                var8 = undefined;
                var10 = var5;
                if (var10) {
                    _fun36016_ip = 130;
                    continue _fun36016
                }
            case 110:
                var9 = var9().value;
                var10 = var4;
                var10 = var10 === var11;
                var5 = var10;
                if (var10) {
                    _fun36016_ip = 130;
                    continue _fun36016
                }
            case 127:
                var8 = var9;
            case 130:
                var6 = var8;
                var8 = var5;
                if (var8) {
                    _fun36016_ip = 142;
                    continue _fun36016
                }
            case 139:
                var4.return();
            case 142:
                var6 = var7 === var6;
                return var6;
            case 148:
                CatchBlockStart(arg_register = 3);
                if (var5) {
                    _fun36016_ip = 156;
                    continue _fun36016
                }
            case 153:
                var4.return();
            case 156:
                throw var3;
            case 158:
                CatchBlockStart(arg_register = 0);
                if (var2) {
                    _fun36016_ip = 166;
                    continue _fun36016
                }
            case 163:
                var1.return();
            case 166:
                throw var0;
        }
    };
    var2.areParticipantsEqual = var3;
    var2.ChannelRTCParticipantsIndexes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1371, 3705, 1216, 3466, 1372, 3467, 3940, 1613, 3943, 3512, 3514, 660, 3501, 3945, 3078, 3946, 22, 3952, 3953, 3496, 2]);