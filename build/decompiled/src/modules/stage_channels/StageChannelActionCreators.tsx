// modules/stage_channels/StageChannelActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var4 = function(arg0, arg1) { // Original name: audienceAckRequestToSpeak, environment: var1
        _fun51764: for (var _fun51764_ip = 0;;) switch (_fun51764_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var7 = arguments[2];
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun51764_ip = 17;
                    continue _fun51764
                }
            case 15:
                var7 = false;
            case 17:
                var6 = null;
                var0 = var6 == var5;
                var10 = undefined;
                if (var0) {
                    _fun51764_ip = 38;
                    continue _fun51764
                }
            case 28:
                var0 = var5.getGuildId;
                var10 = var0.bind(var5)();
            case 38:
                var2 = _closure1_slot1;
                var0 = _closure1_slot3;
                var1 = 5;
                var1 = var0[var1];
                var9 = var2.bind(var3)(var1);
                var2 = var6 != var10;
                var1 = 'This channel cannot be guildless.';
                var1 = var9.bind(var3)(var2, var1);
                var9 = _closure1_slot6;
                var2 = var9.getVoiceStateForChannel;
                var1 = var5.id;
                var2 = var2.bind(var9)(var1);
                var1 = _closure1_slot0;
                var11 = 10;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getAudienceRequestToSpeakState;
                var2 = var0.bind(var1)(var2);
                if (var8) {
                    _fun51764_ip = 183;
                    continue _fun51764
                }
            case 127:
                var1 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 11;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.shouldAgeVerifyToSpeakForCurrentUser;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun51764_ip = 183;
                    continue _fun51764
                }
            case 160:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                _fun51764_ip = 414;
                continue _fun51764;
            case 183:
                var9 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var11];
                var1 = var9.bind(var3)(var1);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var1 = var2 !== var1;
                if (var1) {
                    _fun51764_ip = 222;
                    continue _fun51764
                }
            case 219:
                var1 = var8;
            case 222:
                if (var1) {
                    _fun51764_ip = 299;
                    continue _fun51764
                }
            case 225:
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var1 = 6;
                var1 = var14[var1];
                var11 = var13.bind(var3)(var1);
                var9 = var11.trackWithMetadata;
                var1 = _closure1_slot8;
                var2 = var1.PROMOTED_TO_SPEAKER;
                var1 = {};
                var12 = 7;
                var12 = var14[var12];
                var13 = var13.bind(var3)(var12);
                var12 = var13.getStageChannelMetadata;
                var15 = var12.bind(var13)(var5);
                var16 = var1;
                var12 = copyDataProperties(var16, var15);
                var1 = var9.bind(var11)(var2, var1);
            case 299:
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var1 = 8;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.patch;
                var1 = {};
                var9 = _closure1_slot9;
                var4 = var9.UPDATE_VOICE_STATE;
                var4 = var4.bind(var9)(var10);
                var1.url = var4;
                var4 = {};
                var4.suppress = var8;
                var4.request_to_speak_timestamp = var6;
                var5 = var5.id;
                var4.channel_id = var5;
                if (var7) {
                    _fun51764_ip = 379;
                    continue _fun51764
                }
            case 375:
                var5 = {};
                _fun51764_ip = 389;
                continue _fun51764;
            case 379:
                var6 = {};
                var6.silent = var7;
                var5 = var6;
            case 389:
                var16 = var4;
                var15 = var5;
                var5 = copyDataProperties(var16, var15);
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var0 = var2.bind(var3)(var1);
            case 414:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: setUserSuppress, environment: var1
        var4 = arg0;
        var0 = var4.getGuildId;
        var7 = var0.bind(var4)();
        var1 = _closure1_slot1;
        var5 = _closure1_slot3;
        var0 = 5;
        var0 = var5[var0];
        var2 = undefined;
        var6 = var1.bind(var2)(var0);
        var0 = null;
        var1 = var0 != var7;
        var0 = 'This channel cannot be guildless.';
        var0 = var6.bind(var2)(var1, var0);
        var1 = _closure1_slot0;
        var0 = 8;
        var0 = var5[var0];
        var0 = var1.bind(var2)(var0);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot9;
        var5 = var6.UPDATE_VOICE_STATE;
        var3 = arg1;
        var3 = var5.bind(var6)(var7, var3);
        var0.url = var3;
        var3 = {};
        var5 = arg2;
        var3.suppress = var5;
        var4 = var4.id;
        var3.channel_id = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.catch;
        var0 = function(arg0) { // Environment: var0
            _fun51766: for (var _fun51766_ip = 0;;) switch (_fun51766_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK;
                    if (!(var3 === var2)) {
                        _fun51766_ip = 68;
                        continue _fun51766
                    }
                case 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showFailedToast;
                    var1 = _closure1_slot10;
                    var1 = var1.GENERIC_ERROR;
                    var1 = var2.bind(var3)(var1);
                case 68:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = function() { // Original name: _startStage, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun51769: for (var _fun51769_ip = 0;;) switch (_fun51769_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var9 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51769_ip = 168;
                            continue _fun51769
                        }
                    case 16:
                        var1 = '';
                        if (!(var1 === var9)) {
                            _fun51769_ip = 29;
                            continue _fun51769
                        }
                    case 24:
                        var1 = undefined;
                        return var1;
                    case 29:
                        var3 = _closure1_slot5;
                        var1 = var3.getVoiceChannelId;
                        var3 = var1.bind(var3)();
                        var1 = var6.id;
                        if (!(var3 !== var1)) {
                            _fun51769_ip = 88;
                            continue _fun51769
                        }
                    case 55:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 17;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.connectToStage;
                        var1 = var1.bind(var3)(var6);
                    case 88:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 18;
                        var1 = var4[var1];
                        var5 = undefined;
                        var8 = var3.bind(var5)(var1);
                        var7 = var8.startStageInstance;
                        var13 = var6.id;
                        var11 = arg2;
                        var10 = arg3;
                        var14 = var8;
                        var12 = var9;
                        var1 = var14[var7](var13, var12, var11, var10, var9);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51769_ip = 165;
                            continue _fun51769
                        }
                    case 147:
                        var4 = _closure1_slot11;
                        var3 = false;
                        var2 = true;
                        var2 = var4.bind(var5)(var6, var3, var2);
                        return var1;
                    case 165:
                        return var1;
                    case 168:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _editStage, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun51772: for (var _fun51772_ip = 0;;) switch (_fun51772_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51772_ip = 88;
                            continue _fun51772
                        }
                    case 10:
                        var1 = '';
                        if (!(var1 === var5)) {
                            _fun51772_ip = 23;
                            continue _fun51772
                        }
                    case 18:
                        var1 = undefined;
                        return var1;
                    case 23:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateStageInstance;
                        var1 = arg0;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var5, var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun51772_ip = 85;
                            continue _fun51772
                        }
                    case 82:
                        return var1;
                    case 85:
                        return var1;
                    case 88:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _endStage, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun51775: for (var _fun51775_ip = 0;;) switch (_fun51775_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51775_ip = 67;
                            continue _fun51775
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 18;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.endStageInstance;
                        var1 = arg0;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 55);
                    case 53:
                        return var1;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51775_ip = 64;
                            continue _fun51775
                        }
                    case 61:
                        return var2;
                    case 64:
                        return var1;
                    case 67:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AbortCodes;
    var _closure1_slot7 = var8;
    var8 = var5.AnalyticEvents;
    var _closure1_slot8 = var8;
    var5 = var5.Endpoints;
    var _closure1_slot9 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.SafetyToastType;
    var _closure1_slot10 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageChannelActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1) { // Original name: toggleRequestToSpeak, environment: var1
        _fun51776: for (var _fun51776_ip = 0;;) switch (_fun51776_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var0 = var4.getGuildId;
                var8 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var7 = var1.bind(var2)(var0);
                var5 = null;
                var1 = var5 != var8;
                var0 = 'This channel cannot be guildless.';
                var0 = var7.bind(var2)(var1, var0);
                if (!var6) {
                    _fun51776_ip = 136;
                    continue _fun51776
                }
            case 62:
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var0 = 6;
                var0 = var12[var0];
                var9 = var11.bind(var2)(var0);
                var7 = var9.trackWithMetadata;
                var0 = _closure1_slot8;
                var1 = var0.REQUEST_TO_SPEAK_INITIATED;
                var0 = {};
                var10 = 7;
                var10 = var12[var10];
                var11 = var11.bind(var2)(var10);
                var10 = var11.getStageChannelMetadata;
                var13 = var10.bind(var11)(var4);
                var14 = var0;
                var10 = copyDataProperties(var14, var13);
                var0 = var7.bind(var9)(var1, var0);
            case 136:
                var1 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.patch;
                var0 = {};
                var7 = _closure1_slot9;
                var3 = var7.UPDATE_VOICE_STATE;
                var3 = var3.bind(var7)(var8);
                var0.url = var3;
                var3 = {};
                var5 = null;
                if (!var6) {
                    _fun51776_ip = 233;
                    continue _fun51776
                }
            case 195:
                var6 = global;
                var6 = var6.Date;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var7;
                var6 = new var15[var6](var14);
                var7 = var6 instanceof Object ? var6 : var7;
                var6 = var7.toISOString;
                var5 = var6.bind(var7)();
            case 233:
                var3.request_to_speak_timestamp = var5;
                var4 = var4.id;
                var3.channel_id = var4;
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.toggleRequestToSpeak = var5;
    var5 = function(arg0, arg1) { // Original name: inviteUserToStage, environment: var1
        var5 = arg0;
        var0 = var5.getGuildId;
        var7 = var0.bind(var5)();
        var1 = _closure1_slot1;
        var4 = _closure1_slot3;
        var0 = 5;
        var0 = var4[var0];
        var2 = undefined;
        var6 = var1.bind(var2)(var0);
        var0 = null;
        var1 = var0 != var7;
        var0 = 'This channel cannot be guildless.';
        var0 = var6.bind(var2)(var1, var0);
        var1 = _closure1_slot0;
        var0 = 8;
        var0 = var4[var0];
        var0 = var1.bind(var2)(var0);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot9;
        var4 = var6.UPDATE_VOICE_STATE;
        var3 = arg1;
        var3 = var4.bind(var6)(var7, var3);
        var0.url = var3;
        var4 = {};
        var3 = false;
        var4.suppress = var3;
        var6 = global;
        var6 = var6.Date;
        var7 = var6.prototype;
        var7 = Object.create(var7, {
            constructor: {
                value: var6
            }
        });
        var10 = var7;
        var6 = new var10[var6](var9);
        var7 = var6 instanceof Object ? var6 : var7;
        var6 = var7.toISOString;
        var6 = var6.bind(var7)();
        var4.request_to_speak_timestamp = var6;
        var5 = var5.id;
        var4.channel_id = var5;
        var0.body = var4;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.catch;
        var0 = function(arg0) { // Environment: var0
            _fun51778: for (var _fun51778_ip = 0;;) switch (_fun51778_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK;
                    if (!(var3 === var2)) {
                        _fun51778_ip = 68;
                        continue _fun51778
                    }
                case 25:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.showFailedToast;
                    var1 = _closure1_slot10;
                    var1 = var1.GENERIC_ERROR;
                    var1 = var2.bind(var3)(var1);
                case 68:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.inviteUserToStage = var5;
    var2.audienceAckRequestToSpeak = var4;
    var4 = function(arg0) { // Original name: moveSelfToAudience, environment: var1
        _fun51779: for (var _fun51779_ip = 0;;) switch (_fun51779_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var2 = undefined;
                var6 = undefined;
                if (var1) {
                    _fun51779_ip = 26;
                    continue _fun51779
                }
            case 16:
                var1 = var3.getGuildId;
                var6 = var1.bind(var3)();
            case 26:
                var7 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 5;
                var1 = var5[var1];
                var7 = var7.bind(var2)(var1);
                var1 = var0 != var6;
                var0 = 'This channel cannot be guildless.';
                var0 = var7.bind(var2)(var1, var0);
                var1 = _closure1_slot0;
                var0 = 8;
                var0 = var5[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.patch;
                var0 = {};
                var5 = _closure1_slot9;
                var4 = var5.UPDATE_VOICE_STATE;
                var4 = var4.bind(var5)(var6);
                var0.url = var4;
                var4 = {
                    'suppress': true,
                    'channel_id': null,
                    'self_video': false,
                    'self_stream': false
                };
                var3 = var3.id;
                var4.channel_id = var3;
                var3 = false;
                var0.body = var4;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.moveSelfToAudience = var4;
    var2.setUserSuppress = var3;
    var3 = function(arg0, arg1) { // Original name: moveUserToAudience, environment: var1
        _fun51780: for (var _fun51780_ip = 0;;) switch (_fun51780_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun51780_ip = 16;
                    continue _fun51780
                }
            case 12:
                if (!(var0 == var4)) {
                    _fun51780_ip = 20;
                    continue _fun51780
                }
            case 16:
                var1 = undefined;
                return var1;
            case 20:
                var1 = var3.getGuildId;
                var7 = var1.bind(var3)();
                var8 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 5;
                var1 = var6[var1];
                var2 = undefined;
                var8 = var8.bind(var2)(var1);
                var1 = var0 != var7;
                var0 = 'This channel cannot be guildless.';
                var0 = var8.bind(var2)(var1, var0);
                var8 = _closure1_slot12;
                var1 = var4.id;
                var0 = true;
                var0 = var8.bind(var2)(var3, var1, var0);
                var1 = _closure1_slot0;
                var0 = 8;
                var0 = var6[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.patch;
                var0 = {};
                var6 = _closure1_slot9;
                var5 = var6.UPDATE_VOICE_STATE;
                var4 = var4.id;
                var4 = var5.bind(var6)(var7, var4);
                var0.url = var4;
                var4 = {
                    'suppress': true,
                    'channel_id': null,
                    'self_video': false,
                    'self_stream': false
                };
                var3 = var3.id;
                var4.channel_id = var3;
                var3 = false;
                var0.body = var4;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.moveUserToAudience = var3;
    var3 = function(arg0, arg1) { // Original name: removeUserFromChannel, environment: var1
        _fun51781: for (var _fun51781_ip = 0;;) switch (_fun51781_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var5 = null;
                var2 = var5 == var3;
                var0 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun51781_ip = 29;
                    continue _fun51781
                }
            case 19:
                var2 = var3.getGuildId;
                var4 = var2.bind(var3)();
            case 29:
                var2 = var5 != var4;
                if (!var2) {
                    _fun51781_ip = 40;
                    continue _fun51781
                }
            case 36:
                var2 = var5 != var1;
            case 40:
                if (!var2) {
                    _fun51781_ip = 84;
                    continue _fun51781
                }
            case 43:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 12;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setChannel;
                var1 = var1.id;
                var1 = var2.bind(var3)(var4, var1, var5);
            case 84:
                return var0;
        }
    };
    var2.removeUserFromChannel = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: setEveryoneRolePermissionAllowed, environment: var1
        _fun51782: for (var _fun51782_ip = 0;;) switch (_fun51782_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var0 = var1.getGuildId;
                var5 = var0.bind(var1)();
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 5;
                var3 = var8[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var3 = null;
                var4 = var3 != var5;
                var3 = 'Channel cannot be guildless';
                var3 = var6.bind(var0)(var4, var3);
                var3 = var1.permissionOverwrites;
                var12 = var3[var5];
                var4 = {};
                var4.id = var5;
                var6 = _closure1_slot0;
                var5 = 13;
                var5 = var8[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.PermissionOverwriteType;
                var5 = var5.ROLE;
                var4.type = var5;
                var6 = _closure1_slot2;
                var5 = 14;
                var9 = var8[var5];
                var9 = var6.bind(var0)(var9);
                var9 = var9.NONE;
                var4.allow = var9;
                var5 = var8[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.NONE;
                var4.deny = var5;
                var13 = var4;
                var3 = copyDataProperties(var13, var12);
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var3 = 15;
                var8 = var6[var3];
                var10 = var5.bind(var0)(var8);
                var8 = arg2;
                if (var8) {
                    _fun51782_ip = 245;
                    continue _fun51782
                }
            case 187:
                var9 = var10.remove;
                var8 = var4.allow;
                var8 = var9.bind(var10)(var8, var7);
                var4.allow = var8;
                var8 = var6[var3];
                var11 = var5.bind(var0)(var8);
                var9 = var11.add;
                var8 = var4.deny;
                var8 = var9.bind(var11)(var8, var7);
                var4.deny = var8;
                _fun51782_ip = 301;
                continue _fun51782;
            case 245:
                var9 = var10.add;
                var8 = var4.allow;
                var8 = var9.bind(var10)(var8, var7);
                var4.allow = var8;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.remove;
                var3 = var4.deny;
                var3 = var5.bind(var6)(var3, var7);
                var4.deny = var3;
            case 301:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 16;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.updatePermissionOverwrite;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.setEveryoneRolePermissionAllowed = var3;
    var3 = function() { // Original name: startStage, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startStage = var3;
    var3 = function() { // Original name: editStage, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.editStage = var3;
    var1 = function() { // Original name: endStage, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.endStage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1661, 3480, 660, 5878, 44, 4265, 5879, 507, 5885, 4202, 4211, 4641, 1636, 3055, 484, 3905, 5872, 5887, 2]);