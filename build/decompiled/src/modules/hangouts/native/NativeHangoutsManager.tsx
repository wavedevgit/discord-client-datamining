// modules/hangouts/native/NativeHangoutsManager.tsx
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
        _fun113761: for (var _fun113761_ip = 0;;) switch (_fun113761_ip) {
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
                _fun113761_ip = 76;
                continue _fun113761;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun113764: for (var _fun113764_ip = 0;;) switch (_fun113764_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun113764_ip = 48;
                    continue _fun113764
                }
            case 44:
                var0 = false;
                return var0;
            case 48:
                var2 = _closure1_slot10;
                var0 = var2.getMemberCount;
                var0 = var0.bind(var2)(var4);
                var2 = null;
                var2 = var2 != var0;
                var10 = 51;
                if (!var2) {
                    _fun113764_ip = 78;
                    continue _fun113764
                }
            case 75:
                var10 = var0;
            case 78:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 13;
                var0 = var0[var6];
                var0 = var2.bind(var5)(var0);
                var8 = var0.VoiceLockscreenWidgetUserExperiment;
                var7 = var8.getCurrentConfig;
                var2 = {};
                var2.location = var3;
                var0 = {};
                var9 = 50;
                var9 = var10 <= var9;
                var9 = !var9;
                var0.disable = var9;
                var9 = true;
                var0.autoTrackExposure = var9;
                var0 = var7.bind(var8)(var2, var0);
                var0 = var0.showWidget;
                if (var0) {
                    _fun113764_ip = 190;
                    continue _fun113764
                }
            case 155:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var2 = var2.bind(var5)(var1);
                var1 = var2.getLockscreenWidgetConfig;
                var1 = var1.bind(var2)(var4, var3);
                var0 = var1.showWidget;
            case 190:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun113765: for (var _fun113765_ip = 0;;) switch (_fun113765_ip) {
            case 0:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.isIOS;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun113765_ip = 431;
                    continue _fun113765
                }
            case 43:
                var4 = _closure1_slot14;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun113765_ip = 91;
                    continue _fun113765
                }
            case 53:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 14;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.stopHangoutActivity;
                var4 = 0;
                var4 = var5.bind(var6)(var4);
                _fun113765_ip = 431;
                continue _fun113765;
            case 91:
                var6 = _closure1_slot19;
                var4 = _closure1_slot14;
                var5 = var4.guildId;
                var4 = 'manager - updateLiveActivity';
                var4 = var6.bind(var0)(var5, var4);
                if (!var4) {
                    _fun113765_ip = 431;
                    continue _fun113765
                }
            case 122:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 14;
                var7 = var6[var5];
                var8 = var4.bind(var0)(var7);
                var7 = var8.activitiesAllowed;
                var9 = var7.bind(var8)();
                var8 = var9.then;
                var7 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot13;
                    var2 = var1.LIVE_ACTIVITY_SETTINGS_UPDATED;
                    var1 = {};
                    var5 = true;
                    var1.supported = var5;
                    var5 = arg0;
                    var1.enabled = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var8 = var8.bind(var9)(var7);
                var7 = var8.catch;
                var3 = function(arg0) { // Environment: var3
                    _fun113767: for (var _fun113767_ip = 0;;) switch (_fun113767_ip) {
                        case 0:
                            var1 = 'unsupported';
                            var0 = arg0;
                            if (!(var1 === var0)) {
                                _fun113767_ip = 71;
                                continue _fun113767
                            }
                        case 11:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot13;
                            var1 = var0.LIVE_ACTIVITY_SETTINGS_UPDATED;
                            var0 = {
                                'supported': false,
                                'enabled': false
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3);
                var3 = 16;
                var3 = var6[var3];
                var8 = var4.bind(var0)(var3);
                var7 = var8.fetchUserAffinitiesV2;
                var3 = false;
                var3 = var7.bind(var8)(var3);
                var7 = _closure1_slot1;
                var3 = 17;
                var3 = var6[var3];
                var11 = var7.bind(var0)(var3);
                var10 = var11.requestMembers;
                var3 = _closure1_slot14;
                var9 = var3.guildId;
                var3 = 18;
                var7 = var6[var3];
                var7 = var4.bind(var0)(var7);
                var8 = var7.MAX_MEMBERS;
                var7 = '';
                var7 = var10.bind(var11)(var9, var7, var8);
                var3 = var6[var3];
                var9 = var4.bind(var0)(var3);
                var8 = var9.generateLiveActivityState;
                var3 = _closure1_slot14;
                var15 = var3.guildId;
                var3 = _closure1_slot14;
                var14 = var3.channelId;
                var12 = _closure1_slot15;
                var13 = true;
                var16 = var9;
                var4 = var16[var8](var15, var14, var13, var12, var11);
                var1 = var1 != var4;
                if (!var1) {
                    _fun113765_ip = 374;
                    continue _fun113765
                }
            case 325:
                var3 = global;
                var7 = var3.JSON;
                var6 = var7.stringify;
                var6 = var6.bind(var7)(var4);
                var8 = var3.JSON;
                var7 = var8.stringify;
                var3 = _closure1_slot14;
                var3 = var3.data;
                var3 = var7.bind(var8)(var3);
                var1 = var6 !== var3;
            case 374:
                if (!var1) {
                    _fun113765_ip = 431;
                    continue _fun113765
                }
            case 377:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var3 = var3.bind(var0)(var1);
                var1 = var3.startHangoutActivity;
                var1 = var1.bind(var3)(var4);
                var1 = {};
                var14 = _closure1_slot14;
                var15 = var1;
                var3 = copyDataProperties(var15, var14);
                var3 = 'data';
                var1[var3] = var4;
                _closure1_slot14 = var1;
            case 431:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var7 = 10;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot13 = var3;
    var3 = null;
    var _closure1_slot14 = var3;
    var _closure1_slot15 = var3;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var7 * var3;
    var _closure1_slot17 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113769: for (var _fun113769_ip = 0;;) switch (_fun113769_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113769_ip = 86;
                        continue _fun113769
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113769_ip = 120;
                    continue _fun113769;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleStartHangout;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.START_HANGOUT = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleEndHangout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.END_HANGOUT = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleAppStateUpdate;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.APP_STATE_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleVoiceStateUpdates;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.VOICE_STATE_UPDATES = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleSpeaking;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.SPEAKING = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleMessageCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.MESSAGE_CREATE = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleUserAffinitiesSuccess;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.LOAD_USER_AFFINITIES_SUCCESS = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113777: for (var _fun113777_ip = 0;;) switch (_fun113777_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.guildId;
                                var3 = var0.channelId;
                                var2 = _closure1_slot9;
                                var1 = var2.getChannel;
                                var1 = var1.bind(var2)(var3);
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun113777_ip = 116;
                                    continue _fun113777
                                }
                            case 36:
                                var6 = _closure1_slot11;
                                var5 = var6.getGuild;
                                var1 = var1.guild_id;
                                var5 = var5.bind(var6)(var1);
                                var1 = var2 != var5;
                                if (!var1) {
                                    _fun113777_ip = 85;
                                    continue _fun113777
                                }
                            case 62:
                                var8 = _closure1_slot19;
                                var7 = var5.id;
                                var6 = undefined;
                                var5 = 'manager - start hangout';
                                var1 = var8.bind(var6)(var7, var5);
                            case 85:
                                if (!var1) {
                                    _fun113777_ip = 116;
                                    continue _fun113777
                                }
                            case 88:
                                var1 = {};
                                var1.guildId = var4;
                                var1.channelId = var3;
                                var1.data = var2;
                                _closure1_slot14 = var1;
                                var1 = _closure1_slot20;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 116:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleStartHangout = var2;
                    var2 = function() { // Environment: var1
                        var1 = null;
                        _closure1_slot14 = var1;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.stopHangoutActivity;
                        var1 = 0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleEndHangout = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hasActivity;
                        var3 = var1.bind(var2)();
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var1
                            _fun113780: for (var _fun113780_ip = 0;;) switch (_fun113780_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.hasActivity;
                                    var0 = var0.hasActiveActivity;
                                    if (var1) {
                                        _fun113780_ip = 39;
                                        continue _fun113780
                                    }
                                case 18:
                                    var2 = null;
                                    _closure1_slot14 = var2;
                                    var2 = _closure1_slot20;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
                                    _fun113780_ip = 157;
                                    continue _fun113780;
                                case 39:
                                    if (!var0) {
                                        _fun113780_ip = 157;
                                        continue _fun113780
                                    }
                                case 42:
                                    var3 = _closure1_slot12;
                                    var2 = var3.getVoiceStateForUser;
                                    var4 = _closure1_slot8;
                                    var1 = var4.getId;
                                    var1 = var1.bind(var4)();
                                    var2 = var2.bind(var3)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun113780_ip = 143;
                                        continue _fun113780
                                    }
                                case 80:
                                    var3 = var2.channelId;
                                    if (!(var1 != var3)) {
                                        _fun113780_ip = 143;
                                        continue _fun113780
                                    }
                                case 89:
                                    var4 = _closure1_slot9;
                                    var3 = var4.getChannel;
                                    var2 = var2.channelId;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var1 != var3;
                                    if (!var2) {
                                        _fun113780_ip = 124;
                                        continue _fun113780
                                    }
                                case 115:
                                    var3 = var3.guild_id;
                                    var2 = var1 == var3;
                                case 124:
                                    if (!var2) {
                                        _fun113780_ip = 157;
                                        continue _fun113780
                                    }
                                case 127:
                                    _closure1_slot14 = var1;
                                    var3 = _closure1_slot20;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)();
                                    _fun113780_ip = 157;
                                    continue _fun113780;
                                case 143:
                                    _closure1_slot14 = var1;
                                    var1 = _closure1_slot20;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 157:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleAppStateUpdate = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113781: for (var _fun113781_ip = 0;;) switch (_fun113781_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.voiceStates;
                                var1 = _closure1_slot14;
                                var0 = null;
                                if (!(var0 == var1)) {
                                    _fun113781_ip = 26;
                                    continue _fun113781
                                }
                            case 22:
                                var0 = undefined;
                                return var0;
                            case 26:
                                var1 = var2.some;
                                var0 = function(arg0) { // Environment: var0
                                    _fun113782: for (var _fun113782_ip = 0;;) switch (_fun113782_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var5 = var4.channelId;
                                            var6 = _closure1_slot14;
                                            var3 = null;
                                            var7 = var3 == var6;
                                            var2 = undefined;
                                            var0 = undefined;
                                            if (var7) {
                                                _fun113782_ip = 33;
                                                continue _fun113782
                                            }
                                        case 28:
                                            var0 = var6.channelId;
                                        case 33:
                                            var0 = var5 === var0;
                                            if (!var0) {
                                                _fun113782_ip = 67;
                                                continue _fun113782
                                            }
                                        case 40:
                                            var4 = var4.guildId;
                                            var5 = _closure1_slot14;
                                            var6 = var3 == var5;
                                            var3 = undefined;
                                            if (var6) {
                                                _fun113782_ip = 63;
                                                continue _fun113782
                                            }
                                        case 58:
                                            var3 = var5.guildId;
                                        case 63:
                                            var0 = var4 === var3;
                                        case 67:
                                            if (!var0) {
                                                _fun113782_ip = 80;
                                                continue _fun113782
                                            }
                                        case 70:
                                            var1 = _closure1_slot20;
                                            var1 = var1.bind(var2)();
                                            var0 = true;
                                        case 80:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0.handleVoiceStateUpdates = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113783: for (var _fun113783_ip = 0;;) switch (_fun113783_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.userId;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot14;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun113783_ip = 77;
                                    continue _fun113783
                                }
                            case 27:
                                var3 = _closure1_slot14;
                                var3 = var3.data;
                                if (!(var2 != var3)) {
                                    _fun113783_ip = 77;
                                    continue _fun113783
                                }
                            case 40:
                                var4 = var3.voiceUsers;
                                var3 = var4.find;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1);
                                if (!(var2 != var1)) {
                                    _fun113783_ip = 77;
                                    continue _fun113783
                                }
                            case 67:
                                var1 = _closure1_slot20;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 77:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSpeaking = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113785: for (var _fun113785_ip = 0;;) switch (_fun113785_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.guildId;
                                var2 = var0.message;
                                var0 = _closure1_slot14;
                                var4 = null;
                                var0 = var4 != var0;
                                if (!var0) {
                                    _fun113785_ip = 42;
                                    continue _fun113785
                                }
                            case 29:
                                var3 = _closure1_slot14;
                                var3 = var3.guildId;
                                var0 = var3 === var5;
                            case 42:
                                if (!var0) {
                                    _fun113785_ip = 83;
                                    continue _fun113785
                                }
                            case 45:
                                var3 = var2.author;
                                var5 = var4 == var3;
                                var4 = undefined;
                                if (var5) {
                                    _fun113785_ip = 65;
                                    continue _fun113785
                                }
                            case 60:
                                var4 = var3.id;
                            case 65:
                                var5 = _closure1_slot8;
                                var3 = var5.getId;
                                var3 = var3.bind(var5)();
                                var0 = var4 !== var3;
                            case 83:
                                if (!var0) {
                                    _fun113785_ip = 113;
                                    continue _fun113785
                                }
                            case 86:
                                var5 = _closure1_slot19;
                                var1 = _closure1_slot14;
                                var4 = var1.guildId;
                                var3 = undefined;
                                var1 = 'manager - updateLiveActivityWithMessage';
                                var0 = var5.bind(var3)(var4, var1);
                            case 113:
                                if (!var0) {
                                    _fun113785_ip = 132;
                                    continue _fun113785
                                }
                            case 116:
                                var1 = function arg0() {
                                    _fun113786: for (var _fun113786_ip = 0;;) switch (_fun113786_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var4 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 12;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var1);
                                            var1 = var4.isIOS;
                                            var1 = var1.bind(var4)();
                                            if (!var1) {
                                                _fun113786_ip = 335;
                                                continue _fun113786
                                            }
                                        case 44:
                                            var4 = _closure1_slot14;
                                            var1 = null;
                                            if (!(var1 != var4)) {
                                                _fun113786_ip = 335;
                                                continue _fun113786
                                            }
                                        case 57:
                                            var6 = _closure1_slot19;
                                            var4 = _closure1_slot14;
                                            var5 = var4.guildId;
                                            var4 = 'manager - updateLiveActivityWithMessage';
                                            var4 = var6.bind(var0)(var5, var4);
                                            if (!var4) {
                                                _fun113786_ip = 335;
                                                continue _fun113786
                                            }
                                        case 88:
                                            var4 = _closure1_slot14;
                                            if (!(var1 != var4)) {
                                                _fun113786_ip = 335;
                                                continue _fun113786
                                            }
                                        case 99:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot2;
                                            var4 = 18;
                                            var4 = var6[var4];
                                            var8 = var5.bind(var0)(var4);
                                            var7 = var8.generateLiveActivityState;
                                            var4 = _closure1_slot14;
                                            var13 = var4.guildId;
                                            var4 = _closure1_slot14;
                                            var12 = var4.channelId;
                                            var11 = true;
                                            var14 = var8;
                                            var10 = var3;
                                            var5 = var14[var7](var13, var12, var11, var10, var9);
                                            var4 = var1 != var5;
                                            if (!var4) {
                                                _fun113786_ip = 211;
                                                continue _fun113786
                                            }
                                        case 162:
                                            var6 = global;
                                            var8 = var6.JSON;
                                            var7 = var8.stringify;
                                            var7 = var7.bind(var8)(var5);
                                            var9 = var6.JSON;
                                            var8 = var9.stringify;
                                            var6 = _closure1_slot14;
                                            var6 = var6.data;
                                            var6 = var8.bind(var9)(var6);
                                            var4 = var7 !== var6;
                                        case 211:
                                            if (!var4) {
                                                _fun113786_ip = 335;
                                                continue _fun113786
                                            }
                                        case 214:
                                            _closure1_slot15 = var3;
                                            var4 = _closure1_slot0;
                                            var6 = _closure1_slot2;
                                            var3 = 14;
                                            var3 = var6[var3];
                                            var4 = var4.bind(var0)(var3);
                                            var3 = var4.startHangoutActivity;
                                            var3 = var3.bind(var4)(var5);
                                            var3 = {};
                                            var12 = _closure1_slot14;
                                            var13 = var3;
                                            var4 = copyDataProperties(var13, var12);
                                            var4 = 'data';
                                            var3[var4] = var5;
                                            _closure1_slot14 = var3;
                                            var3 = _closure1_slot16;
                                            if (!(var1 != var3)) {
                                                _fun113786_ip = 304;
                                                continue _fun113786
                                            }
                                        case 283:
                                            var3 = global;
                                            var4 = var3.clearTimeout;
                                            var3 = _closure1_slot16;
                                            var3 = var4.bind(var0)(var3);
                                            _closure1_slot16 = var1;
                                        case 304:
                                            var1 = global;
                                            var4 = var1.setTimeout;
                                            var3 = _closure1_slot17;
                                            var1 = function() { // Environment: var1
                                                var1 = null;
                                                _closure1_slot15 = var1;
                                                var1 = _closure1_slot20;
                                                var0 = undefined;
                                                var1 = var1.bind(var0)();
                                                return var0;
                                            };
                                            var1 = var4.bind(var0)(var1, var3);
                                            _closure1_slot16 = var1;
                                        case 335:
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 132:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMessageCreate = var2;
                    var1 = function() { // Environment: var1
                        _fun113788: for (var _fun113788_ip = 0;;) switch (_fun113788_ip) {
                            case 0:
                                var2 = _closure1_slot14;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun113788_ip = 23;
                                    continue _fun113788
                                }
                            case 13:
                                var1 = _closure1_slot20;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleUserAffinitiesSuccess = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = '_initialize';
        var4.key = var5;
        var0 = function() {
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                _fun113790: for (var _fun113790_ip = 0;;) switch (_fun113790_ip) {
                    case 0:
                        var3 = _closure1_slot12;
                        var2 = var3.getVoiceStateForUser;
                        var4 = _closure1_slot8;
                        var1 = var4.getId;
                        var1 = var1.bind(var4)();
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun113790_ip = 175;
                            continue _fun113790
                        }
                    case 41:
                        var3 = var1.channelId;
                        if (!(var2 != var3)) {
                            _fun113790_ip = 175;
                            continue _fun113790
                        }
                    case 53:
                        var4 = _closure1_slot9;
                        var3 = var4.getChannel;
                        var1 = var1.channelId;
                        var3 = var3.bind(var4)(var1);
                        if (!(var2 != var3)) {
                            _fun113790_ip = 175;
                            continue _fun113790
                        }
                    case 76:
                        var1 = var3.guild_id;
                        if (!(var2 != var1)) {
                            _fun113790_ip = 175;
                            continue _fun113790
                        }
                    case 85:
                        var5 = _closure1_slot11;
                        var4 = var5.getGuild;
                        var1 = var3.guild_id;
                        var4 = var4.bind(var5)(var1);
                        var1 = var2 != var4;
                        if (!var1) {
                            _fun113790_ip = 134;
                            continue _fun113790
                        }
                    case 111:
                        var7 = _closure1_slot19;
                        var6 = var4.id;
                        var5 = undefined;
                        var4 = 'manager - app startup';
                        var1 = var7.bind(var5)(var6, var4);
                    case 134:
                        if (!var1) {
                            _fun113790_ip = 175;
                            continue _fun113790
                        }
                    case 137:
                        var1 = {};
                        var4 = var3.guild_id;
                        var1.guildId = var4;
                        var3 = var3.id;
                        var1.channelId = var3;
                        var1.data = var2;
                        _closure1_slot14 = var1;
                        var1 = _closure1_slot20;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 175:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = 5000;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hangouts/native/NativeHangoutsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 1599, 1410, 3521, 660, 667, 478, 14583, 14584, 795, 8351, 4679, 14585, 4299, 2]);