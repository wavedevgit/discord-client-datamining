// modules/calls/native/TelecomManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114585: for (var _fun114585_ip = 0;;) switch (_fun114585_ip) {
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
                _fun114585_ip = 76;
                continue _fun114585;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var3 = var5[var8];
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DeviceEventEmitter;
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
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ApplicationStreamStates;
    var _closure1_slot14 = var7;
    var3 = var3.RTCConnectionStates;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var10 = var6.bind(var0)(var3);
    var3 = var10.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var13 = 'TelecomManager';
    var14 = var7;
    var3 = new var14[var10](var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var3.Connecting = var9;
    var7 = 'Connecting';
    var3[var9] = var7;
    var3.Connected = var8;
    var7 = 'Connected';
    var3[var8] = var7;
    var _closure1_slot17 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: TelecomManager, environment: var5
            _fun114589: for (var _fun114589_ip = 0;;) switch (_fun114589_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5, var4);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114589_ip = 86;
                        continue _fun114589
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun114589_ip = 120;
                    continue _fun114589;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = {};
                    var5 = function(arg0) { // Original name: CALL_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleCallDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.CALL_DELETE = var5;
                    var5 = function(arg0) { // Original name: CHANNEL_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleChannelDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.CHANNEL_DELETE = var5;
                    var5 = function(arg0) { // Original name: VOICE_CHANNEL_SELECT, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleVoiceChannelSelect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.VOICE_CHANNEL_SELECT = var5;
                    var5 = function(arg0) { // Original name: RTC_CONNECTION_STATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleRTCConnectionState;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.RTC_CONNECTION_STATE = var5;
                    var0.actions = var4;
                    var4 = global;
                    var4 = var4.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var5;
                    var4 = new var14[var4](var13);
                    var7 = var4 instanceof Object ? var4 : var5;
                    var6 = var7.set;
                    var5 = _closure1_slot13;
                    var4 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleMuteStoreChange;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = var6.bind(var7)(var5, var4);
                    var5 = var6.set;
                    var4 = _closure1_slot10;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleScreenShareStoreChange;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var5.bind(var6)(var4, var2);
                    var0.stores = var2;
                    var2 = null;
                    var0.currentCall = var2;
                    var0.rtcConnectedStartCallPromise = var2;
                    var4 = false;
                    var0.isInitialized = var4;
                    var0.lastMuteState = var2;
                    var0.lastScreenShareActive = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114596: for (var _fun114596_ip = 0;;) switch (_fun114596_ip) {
                            case 0:
                                var3 = arg0;
                                var5 = _closure1_slot16;
                                var4 = var5.info;
                                var2 = var3.callId;
                                var1 = 'Received end call request from Call Bar:';
                                var1 = var4.bind(var5)(var1, var2);
                                var1 = _closure3_slot0;
                                var4 = var1.currentCall;
                                var1 = null;
                                var1 = var1 != var4;
                                if (!var1) {
                                    _fun114596_ip = 81;
                                    continue _fun114596
                                }
                            case 56:
                                var3 = var3.callId;
                                var2 = _closure3_slot0;
                                var2 = var2.currentCall;
                                var2 = var2.channelId;
                                var1 = var3 === var2;
                            case 81:
                                if (!var1) {
                                    _fun114596_ip = 116;
                                    continue _fun114596
                                }
                            case 84:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.disconnect;
                                var0 = var0.bind(var1)();
                            case 116:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleEndCallRequested = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114597: for (var _fun114597_ip = 0;;) switch (_fun114597_ip) {
                            case 0:
                                var3 = _closure1_slot16;
                                var2 = var3.info;
                                var1 = 'Received set foreground request from Call Bar';
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var3 = var1.currentCall;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun114597_ip = 144;
                                    continue _fun114597
                                }
                            case 43:
                                var3 = arg0;
                                var4 = var3.callId;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                if (!(var4 === var3)) {
                                    _fun114597_ip = 144;
                                    continue _fun114597
                                }
                            case 71:
                                var4 = _closure1_slot11;
                                var3 = var4.getChannel;
                                var2 = _closure3_slot0;
                                var2 = var2.currentCall;
                                var2 = var2.channelId;
                                var3 = var3.bind(var4)(var2);
                                if (!(var1 != var3)) {
                                    _fun114597_ip = 144;
                                    continue _fun114597
                                }
                            case 104:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.navigateToVoiceChannel;
                                var0 = 'Call Bar';
                                var0 = var1.bind(var2)(var3, var0);
                            case 144:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSetForegroundRequested = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114598: for (var _fun114598_ip = 0;;) switch (_fun114598_ip) {
                            case 0:
                                var1 = arg0;
                                var7 = _closure1_slot16;
                                var6 = var7.info;
                                var10 = var1.callId;
                                var8 = var1.isMuted;
                                var11 = 'Received mic mute request from Call Bar:';
                                var9 = 'isMuted:';
                                var12 = var7;
                                var2 = var12[var6](var11, var10, var9, var8, var7);
                                var2 = _closure3_slot0;
                                var4 = var2.currentCall;
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun114598_ip = 94;
                                    continue _fun114598
                                }
                            case 69:
                                var4 = var1.callId;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                var2 = var4 === var3;
                            case 94:
                                if (!var2) {
                                    _fun114598_ip = 121;
                                    continue _fun114598
                                }
                            case 97:
                                var4 = _closure1_slot13;
                                var3 = var4.isSelfMute;
                                var4 = var3.bind(var4)();
                                var3 = var1.isMuted;
                                var2 = var4 !== var3;
                            case 121:
                                if (!var2) {
                                    _fun114598_ip = 184;
                                    continue _fun114598
                                }
                            case 124:
                                var4 = _closure1_slot16;
                                var3 = var4.info;
                                var2 = var1.isMuted;
                                var1 = 'Updating Call Bar -> Discord mute state:';
                                var1 = var3.bind(var4)(var1, var2);
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.toggleSelfMute;
                                var0 = var0.bind(var1)();
                            case 184:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMicMuteRequested = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114599: for (var _fun114599_ip = 0;;) switch (_fun114599_ip) {
                            case 0:
                                var1 = arg0;
                                var7 = _closure1_slot16;
                                var6 = var7.info;
                                var11 = var1.callId;
                                var9 = var1.isEnabled;
                                var12 = 'Received screen share request from Call Bar:';
                                var10 = 'isEnabled:';
                                var13 = var7;
                                var2 = var13[var6](var12, var11, var10, var9, var8);
                                var2 = _closure3_slot0;
                                var4 = var2.currentCall;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun114599_ip = 413;
                                    continue _fun114599
                                }
                            case 69:
                                var5 = var1.callId;
                                var4 = _closure3_slot0;
                                var4 = var4.currentCall;
                                var4 = var4.channelId;
                                if (!(var5 === var4)) {
                                    _fun114599_ip = 413;
                                    continue _fun114599
                                }
                            case 97:
                                var5 = _closure1_slot11;
                                var4 = var5.getChannel;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                var8 = var4.bind(var5)(var3);
                                if (!(var2 != var8)) {
                                    _fun114599_ip = 413;
                                    continue _fun114599
                                }
                            case 133:
                                var4 = _closure1_slot10;
                                var3 = var4.getCurrentUserActiveStream;
                                var3 = var3.bind(var4)();
                                var2 = var2 != var3;
                                if (!var2) {
                                    _fun114599_ip = 173;
                                    continue _fun114599
                                }
                            case 154:
                                var4 = var3.state;
                                var3 = _closure1_slot14;
                                var3 = var3.ACTIVE;
                                var2 = var4 === var3;
                            case 173:
                                var3 = var1.isEnabled;
                                if (!var3) {
                                    _fun114599_ip = 342;
                                    continue _fun114599
                                }
                            case 185:
                                if (var2) {
                                    _fun114599_ip = 342;
                                    continue _fun114599
                                }
                            case 191:
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 16;
                                var3 = var4[var3];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var3);
                                var3 = var6.getVideoPermission;
                                var3 = var3.bind(var6)(var8);
                                var6 = 17;
                                var4 = var4[var6];
                                var7 = var7.bind(var5)(var4);
                                var4 = var7.getOSRequirement;
                                var4 = var4.bind(var7)();
                                var7 = _closure1_slot16;
                                if (var4) {
                                    _fun114599_ip = 273;
                                    continue _fun114599
                                }
                            case 253:
                                var8 = var7.warn;
                                var4 = 'Cannot start screen share from Call Bar: OS version does not meet requirements';
                                var4 = var8.bind(var7)(var4);
                                var4 = undefined;
                                return var4;
                            case 273:
                                if (var3) {
                                    _fun114599_ip = 296;
                                    continue _fun114599
                                }
                            case 276:
                                var4 = var7.warn;
                                var3 = 'Cannot start screen share from Call Bar: user lacks streaming permission in this channel';
                                var3 = var4.bind(var7)(var3);
                                var3 = undefined;
                                return var3;
                            case 296:
                                var4 = var7.info;
                                var3 = 'Starting screen share from Call Bar';
                                var3 = var4.bind(var7)(var3);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.startStream;
                                var3 = var3.bind(var4)();
                                _fun114599_ip = 413;
                                continue _fun114599;
                            case 342:
                                var1 = var1.isEnabled;
                                var1 = !var1;
                                if (!var1) {
                                    _fun114599_ip = 357;
                                    continue _fun114599
                                }
                            case 354:
                                var1 = var2;
                            case 357:
                                if (!var1) {
                                    _fun114599_ip = 413;
                                    continue _fun114599
                                }
                            case 360:
                                var3 = _closure1_slot16;
                                var2 = var3.info;
                                var1 = 'Stopping screen share from Call Bar';
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.stopScreenshare;
                                var0 = var0.bind(var1)();
                            case 413:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleScreenShareRequested = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114602: for (var _fun114602_ip = 0;;) switch (_fun114602_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114602_ip = 387;
                                            continue _fun114602
                                        }
                                    case 13:
                                        var9 = var1.guildId;
                                        var5 = var1.channelId;
                                        var3 = undefined;
                                        SaveGenerator(address = 29);
                                    case 27:
                                        return var3;
                                    case 29:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114602_ip = 384;
                                            continue _fun114602
                                        }
                                    case 38:
                                        var6 = _closure3_slot0;
                                        var2 = var6.isEnabled;
                                        var2 = var2.bind(var6)();
                                        if (!var2) {
                                            _fun114602_ip = 348;
                                            continue _fun114602
                                        }
                                    case 61:
                                        var8 = _closure1_slot16;
                                        var7 = var8.info;
                                        var6 = 'Voice channel select:';
                                        var6 = var7.bind(var8)(var6, var9, var5);
                                        var6 = null;
                                        if (!(var6 == var5)) {
                                            _fun114602_ip = 112;
                                            continue _fun114602
                                        }
                                    case 93:
                                        var8 = _closure3_slot0;
                                        var7 = var8.reportCallEnded;
                                        var7 = var7.bind(var8)();
                                        _fun114602_ip = 348;
                                        continue _fun114602;
                                    case 112:
                                        var7 = _closure3_slot0;
                                        var8 = var7.currentCall;
                                        var10 = var6 == var8;
                                        var7 = undefined;
                                        if (var10) {
                                            _fun114602_ip = 136;
                                            continue _fun114602
                                        }
                                    case 131:
                                        var7 = var8.channelId;
                                    case 136:
                                        if (!(var7 !== var5)) {
                                            _fun114602_ip = 357;
                                            continue _fun114602
                                        }
                                    case 143:
                                        var8 = _closure1_slot11;
                                        var7 = var8.getChannel;
                                        var10 = var7.bind(var8)(var5);
                                        if (!(var6 != var10)) {
                                            _fun114602_ip = 354;
                                            continue _fun114602
                                        }
                                    case 164:
                                        var7 = var6 != var9;
                                        var11 = null;
                                        if (!var7) {
                                            _fun114602_ip = 187;
                                            continue _fun114602
                                        }
                                    case 173:
                                        var8 = _closure1_slot12;
                                        var7 = var8.getGuild;
                                        var11 = var7.bind(var8)(var9);
                                    case 187:
                                        var7 = _closure3_slot0;
                                        var7 = var7.currentCall;
                                        var8 = var6 != var7;
                                        var7 = null;
                                        if (!var8) {
                                            _fun114602_ip = 237;
                                            continue _fun114602
                                        }
                                    case 206:
                                        var8 = _closure3_slot0;
                                        var8 = var8.currentCall;
                                        var8 = var8.channelId;
                                        var7 = null;
                                        if (!(var8 !== var5)) {
                                            _fun114602_ip = 237;
                                            continue _fun114602
                                        }
                                    case 227:
                                        var8 = _closure3_slot0;
                                        var7 = var8.currentCall;
                                    case 237:
                                        var9 = _closure3_slot0;
                                        var8 = {};
                                        var8.channelId = var5;
                                        var13 = var6 == var11;
                                        var12 = undefined;
                                        if (var13) {
                                            _fun114602_ip = 261;
                                            continue _fun114602
                                        }
                                    case 256:
                                        var12 = var11.id;
                                    case 261:
                                        var13 = var6 != var12;
                                        var11 = null;
                                        if (!var13) {
                                            _fun114602_ip = 273;
                                            continue _fun114602
                                        }
                                    case 270:
                                        var11 = var12;
                                    case 273:
                                        var8.guildId = var11;
                                        var11 = var10.name;
                                        var12 = var6 != var11;
                                        var10 = null;
                                        if (!var12) {
                                            _fun114602_ip = 294;
                                            continue _fun114602
                                        }
                                    case 291:
                                        var10 = var11;
                                    case 294:
                                        var8.channelName = var10;
                                        var10 = _closure1_slot17;
                                        var10 = var10.Connecting;
                                        var8.state = var10;
                                        var9.currentCall = var8;
                                        if (!(var6 != var7)) {
                                            _fun114602_ip = 348;
                                            continue _fun114602
                                        }
                                    case 323:
                                        var6 = _closure3_slot0;
                                        var4 = var6.endCall;
                                        var4 = var4.bind(var6)(var7);
                                        SaveGenerator(address = 342);
                                    case 340:
                                        return var4;
                                    case 342:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun114602_ip = 351;
                                            continue _fun114602
                                        }
                                    case 348:
                                        return var3;
                                    case 351:
                                        return var4;
                                    case 354:
                                        return var3;
                                    case 357:
                                        var4 = _closure1_slot16;
                                        var3 = var4.info;
                                        var2 = 'Call already in progress for channel:';
                                        var2 = var3.bind(var4)(var2, var5);
                                        var2 = undefined;
                                        return var2;
                                    case 384:
                                        return var1;
                                    case 387:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var2 = var2.bind(var3)();
                    var0.handleVoiceChannelSelect = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114606: for (var _fun114606_ip = 0;;) switch (_fun114606_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114606_ip = 821;
                                            continue _fun114606
                                        }
                                    case 13:
                                        var11 = var1.state;
                                        var3 = var1.channelId;
                                        var5 = undefined;
                                        var6 = undefined;
                                        var9 = undefined;
                                        var7 = undefined;
                                        SaveGenerator(address = 35);
                                    case 33:
                                        return var5;
                                    case 35:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114606_ip = 818;
                                            continue _fun114606
                                        }
                                    case 44:
                                        var8 = _closure3_slot0;
                                        var4 = var8.isEnabled;
                                        var4 = var4.bind(var8)();
                                        if (!var4) {
                                            _fun114606_ip = 505;
                                            continue _fun114606
                                        }
                                    case 67:
                                        var13 = _closure1_slot16;
                                        var12 = var13.info;
                                        var10 = var3;
                                        var8 = 'RTC connection state:';
                                        var8 = var12.bind(var13)(var8, var11, var10);
                                        var8 = _closure1_slot15;
                                        var8 = var8.RTC_CONNECTED;
                                        if (!(var11 === var8)) {
                                            _fun114606_ip = 126;
                                            continue _fun114606
                                        }
                                    case 110:
                                        var8 = _closure3_slot0;
                                        var8 = var8.currentCall;
                                        var10 = null;
                                        if (!(var10 == var8)) {
                                            _fun114606_ip = 201;
                                            continue _fun114606
                                        }
                                    case 126:
                                        var8 = _closure1_slot15;
                                        var8 = var8.DISCONNECTED;
                                        var8 = var11 === var8;
                                        if (!var8) {
                                            _fun114606_ip = 176;
                                            continue _fun114606
                                        }
                                    case 143:
                                        var11 = _closure3_slot0;
                                        var11 = var11.currentCall;
                                        var12 = null;
                                        var13 = var12 == var11;
                                        var12 = undefined;
                                        if (var13) {
                                            _fun114606_ip = 169;
                                            continue _fun114606
                                        }
                                    case 164:
                                        var12 = var11.channelId;
                                    case 169:
                                        var11 = var3;
                                        var8 = var12 === var11;
                                    case 176:
                                        if (!var8) {
                                            _fun114606_ip = 505;
                                            continue _fun114606
                                        }
                                    case 182:
                                        var11 = _closure3_slot0;
                                        var8 = var11.reportCallEnded;
                                        var8 = var8.bind(var11)();
                                        _fun114606_ip = 505;
                                        continue _fun114606;
                                    case 201:
                                        var8 = _closure3_slot0;
                                        var8 = var8.currentCall;
                                        var11 = var8.channelId;
                                        var8 = var3;
                                        if (!(var11 === var8)) {
                                            _fun114606_ip = 767;
                                            continue _fun114606
                                        }
                                    case 226:
                                        var8 = _closure3_slot0;
                                        var8 = var8.currentCall;
                                        var11 = var8.state;
                                        var8 = _closure1_slot17;
                                        var8 = var8.Connected;
                                        if (!(var11 !== var8)) {
                                            _fun114606_ip = 764;
                                            continue _fun114606
                                        }
                                    case 258:
                                        var8 = _closure3_slot0;
                                        var8 = var8.rtcConnectedStartCallPromise;
                                        var12 = var10 == var8;
                                        var11 = undefined;
                                        if (var12) {
                                            _fun114606_ip = 282;
                                            continue _fun114606
                                        }
                                    case 277:
                                        var11 = var8.channelId;
                                    case 282:
                                        var8 = var3;
                                        if (!(var11 !== var8)) {
                                            _fun114606_ip = 606;
                                            continue _fun114606
                                        }
                                    case 292:
                                        var11 = _closure3_slot0;
                                        var12 = var11.startCall;
                                        var8 = {};
                                        var13 = var11.currentCall;
                                        var13 = var13.channelId;
                                        var8.channelId = var13;
                                        var13 = var11.currentCall;
                                        var13 = var13.guildId;
                                        var8.guildId = var13;
                                        var12 = var12.bind(var11)(var8);
                                        var6 = var12;
                                        var8 = {};
                                        var13 = var3;
                                        var8.channelId = var13;
                                        var8.promise = var12;
                                        var11.rtcConnectedStartCallPromise = var8;
                                    case 362: // try_start_0
                                        SaveGenerator(address = 366);
                                    case 364:
                                        return var6;
                                    case 366:
                                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 11);
                                        if (var11) {
                                            _fun114606_ip = 508;
                                            continue _fun114606
                                        }
                                    case 375:
                                        var8 = var6;
                                        if (!var6) {
                                            _fun114606_ip = 415;
                                            continue _fun114606
                                        }
                                    case 381:
                                        var11 = _closure3_slot0;
                                        var11 = var11.currentCall;
                                        var9 = var11;
                                        var12 = var10 == var11;
                                        var11 = undefined;
                                        if (var12) {
                                            _fun114606_ip = 408;
                                            continue _fun114606
                                        }
                                    case 403:
                                        var11 = var9.channelId;
                                    case 408:
                                        var9 = var3;
                                        var8 = var11 === var9;
                                    case 415:
                                        if (!var8) {
                                            _fun114606_ip = 458;
                                            continue _fun114606
                                        }
                                    case 418:
                                        var11 = _closure3_slot0;
                                        var9 = var11.currentCall;
                                        var8 = _closure1_slot17;
                                        var8 = var8.Connected;
                                        var9.state = var8;
                                        var9 = var11.setCallActive;
                                        var8 = var3;
                                        var8 = var9.bind(var11)(var8);
                                    case 458: // try_end0
                                        var8 = _closure3_slot0;
                                        var8 = var8.rtcConnectedStartCallPromise;
                                        var7 = var8;
                                        var8 = var10 == var8;
                                        var9 = undefined;
                                        if (var8) {
                                            _fun114606_ip = 488;
                                            continue _fun114606
                                        }
                                    case 480:
                                        var8 = var7;
                                        var9 = var8.channelId;
                                    case 488:
                                        var8 = var3;
                                        if (!(var9 === var8)) {
                                            _fun114606_ip = 505;
                                            continue _fun114606
                                        }
                                    case 495:
                                        var8 = _closure3_slot0;
                                        var8.rtcConnectedStartCallPromise = var10;
                                    case 505:
                                        return var5;
                                    case 508:
                                        var8 = _closure3_slot0;
                                        var8 = var8.rtcConnectedStartCallPromise;
                                        var7 = var8;
                                        var8 = var10 == var8;
                                        var9 = undefined;
                                        if (var8) {
                                            _fun114606_ip = 538;
                                            continue _fun114606
                                        }
                                    case 530:
                                        var8 = var7;
                                        var9 = var8.channelId;
                                    case 538:
                                        var8 = var3;
                                        if (!(var9 === var8)) {
                                            _fun114606_ip = 555;
                                            continue _fun114606
                                        }
                                    case 545:
                                        var8 = _closure3_slot0;
                                        var8.rtcConnectedStartCallPromise = var10;
                                    case 555:
                                        return var6;
                                    case 558: // catch_target0
                                        CatchBlockStart(arg_register = 6);
                                        var8 = _closure3_slot0;
                                        var8 = var8.rtcConnectedStartCallPromise;
                                        var7 = var8;
                                        var9 = var10 == var8;
                                        var8 = undefined;
                                        if (var9) {
                                            _fun114606_ip = 587;
                                            continue _fun114606
                                        }
                                    case 582:
                                        var8 = var7.channelId;
                                    case 587:
                                        var7 = var3;
                                        if (!(var8 === var7)) {
                                            _fun114606_ip = 604;
                                            continue _fun114606
                                        }
                                    case 594:
                                        var7 = _closure3_slot0;
                                        var7.rtcConnectedStartCallPromise = var10;
                                    case 604:
                                        throw var6;
                                    case 606:
                                        var6 = _closure3_slot0;
                                        var6 = var6.rtcConnectedStartCallPromise;
                                        var6 = var6.promise;
                                        SaveGenerator(address = 626);
                                    case 624:
                                        return var6;
                                    case 626:
                                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun114606_ip = 761;
                                            continue _fun114606
                                        }
                                    case 635:
                                        var7 = _closure3_slot0;
                                        var7 = var7.currentCall;
                                        var8 = var10 == var7;
                                        var9 = undefined;
                                        if (var8) {
                                            _fun114606_ip = 659;
                                            continue _fun114606
                                        }
                                    case 654:
                                        var9 = var7.state;
                                    case 659:
                                        var7 = var6;
                                        if (!var7) {
                                            _fun114606_ip = 696;
                                            continue _fun114606
                                        }
                                    case 665:
                                        var8 = _closure3_slot0;
                                        var8 = var8.currentCall;
                                        var11 = var10 == var8;
                                        var10 = undefined;
                                        if (var11) {
                                            _fun114606_ip = 689;
                                            continue _fun114606
                                        }
                                    case 684:
                                        var10 = var8.channelId;
                                    case 689:
                                        var8 = var3;
                                        var7 = var10 === var8;
                                    case 696:
                                        if (!var7) {
                                            _fun114606_ip = 713;
                                            continue _fun114606
                                        }
                                    case 699:
                                        var8 = _closure1_slot17;
                                        var8 = var8.Connected;
                                        var7 = var9 !== var8;
                                    case 713:
                                        if (!var7) {
                                            _fun114606_ip = 756;
                                            continue _fun114606
                                        }
                                    case 716:
                                        var10 = _closure3_slot0;
                                        var9 = var10.currentCall;
                                        var8 = _closure1_slot17;
                                        var8 = var8.Connected;
                                        var9.state = var8;
                                        var9 = var10.setCallActive;
                                        var8 = var3;
                                        var7 = var9.bind(var10)(var8);
                                    case 756:
                                        var7 = undefined;
                                        return var7;
                                    case 761:
                                        return var6;
                                    case 764:
                                        return var5;
                                    case 767:
                                        var7 = _closure1_slot16;
                                        var6 = var7.warn;
                                        var16 = var3;
                                        var2 = _closure3_slot0;
                                        var2 = var2.currentCall;
                                        var14 = var2.channelId;
                                        var17 = 'RTC connected for different channel:';
                                        var15 = 'current:';
                                        var18 = var7;
                                        var2 = var18[var6](var17, var16, var15, var14, var13);
                                        var2 = undefined;
                                        return var2;
                                    case 818:
                                        return var1;
                                    case 821:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var2 = var2.bind(var3)();
                    var0.handleRTCConnectionState = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114608: for (var _fun114608_ip = 0;;) switch (_fun114608_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.channelId;
                                var3 = _closure3_slot0;
                                var1 = var3.isEnabled;
                                var1 = var1.bind(var3)();
                                if (!var1) {
                                    _fun114608_ip = 97;
                                    continue _fun114608
                                }
                            case 28:
                                var4 = _closure1_slot16;
                                var3 = var4.info;
                                var1 = 'Call deleted:';
                                var1 = var3.bind(var4)(var1, var2);
                                var1 = _closure3_slot0;
                                var3 = var1.currentCall;
                                var1 = null;
                                var4 = var1 == var3;
                                var1 = undefined;
                                if (var4) {
                                    _fun114608_ip = 79;
                                    continue _fun114608
                                }
                            case 74:
                                var1 = var3.channelId;
                            case 79:
                                if (!(var1 === var2)) {
                                    _fun114608_ip = 97;
                                    continue _fun114608
                                }
                            case 83:
                                var1 = _closure3_slot0;
                                var0 = var1.reportCallEnded;
                                var0 = var0.bind(var1)();
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleCallDelete = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun114609: for (var _fun114609_ip = 0;;) switch (_fun114609_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.channel;
                                var3 = _closure3_slot0;
                                var2 = var3.isEnabled;
                                var2 = var2.bind(var3)();
                                if (!var2) {
                                    _fun114609_ip = 107;
                                    continue _fun114609
                                }
                            case 28:
                                var5 = _closure1_slot16;
                                var4 = var5.info;
                                var3 = var1.id;
                                var2 = 'Channel deleted:';
                                var2 = var4.bind(var5)(var2, var3);
                                var2 = _closure3_slot0;
                                var3 = var2.currentCall;
                                var2 = null;
                                var4 = var2 == var3;
                                var2 = undefined;
                                if (var4) {
                                    _fun114609_ip = 84;
                                    continue _fun114609
                                }
                            case 79:
                                var2 = var3.channelId;
                            case 84:
                                var1 = var1.id;
                                if (!(var2 === var1)) {
                                    _fun114609_ip = 107;
                                    continue _fun114609
                                }
                            case 93:
                                var1 = _closure3_slot0;
                                var0 = var1.reportCallEnded;
                                var0 = var0.bind(var1)();
                            case 107:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleChannelDelete = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun114610: for (var _fun114610_ip = 0;;) switch (_fun114610_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    var0 = !var0;
                    if (!var0) {
                        _fun114610_ip = 25;
                        continue _fun114610
                    }
                case 15:
                    var2 = var1.isSupported;
                    var0 = var2.bind(var1)();
                case 25:
                    if (!var0) {
                        _fun114610_ip = 163;
                        continue _fun114610
                    }
                case 31:
                    var4 = _closure1_slot16;
                    var3 = var4.info;
                    var2 = 'Initializing CallKitManager using Telecom framework';
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot9;
                    var3 = var4.addListener;
                    var2 = var1.handleEndCallRequested;
                    var0 = 'telecom-end-call-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleSetForegroundRequested;
                    var0 = 'telecom-set-foreground-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleMicMuteRequested;
                    var0 = 'telecom-mic-mute-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleScreenShareRequested;
                    var0 = 'telecom-screen-share-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var0 = true;
                    var1.isInitialized = var0;
                case 163:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var7 = '_terminate';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            _fun114611: for (var _fun114611_ip = 0;;) switch (_fun114611_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun114611_ip = 113;
                        continue _fun114611
                    }
                case 12:
                    var3 = _closure1_slot9;
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-end-call-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-set-foreground-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-mic-mute-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-screen-share-requested';
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.reportCallEnded;
                    var0 = var0.bind(var1)();
                    var0 = null;
                    var1.rtcConnectedStartCallPromise = var0;
                    var0 = false;
                    var1.isInitialized = var0;
                case 113:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'isSupported';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            _fun114612: for (var _fun114612_ip = 0;;) switch (_fun114612_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 18;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isMetaQuest;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun114612_ip = 64;
                        continue _fun114612
                    }
                case 38:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var0 = var1 != var2;
                case 64:
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'isEnabled';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            _fun114613: for (var _fun114613_ip = 0;;) switch (_fun114613_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSupported;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun114613_ip = 22;
                        continue _fun114613
                    }
                case 16:
                    var0 = var1.isInitialized;
                case 22:
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'startCall';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun114615: for (var _fun114615_ip = 0;;) switch (_fun114615_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var5 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114615_ip = 306;
                            continue _fun114615
                        }
                    case 16:
                        var8 = undefined;
                        var1 = undefined;
                        var11 = undefined;
                        var6 = undefined;
                        var1 = var2.channelId;
                        var11 = var2.guildId;
                        var2 = var5.currentCall;
                        var9 = null;
                        var4 = var9 == var2;
                        var3 = undefined;
                        if (var4) {
                            _fun114615_ip = 56;
                            continue _fun114615
                        }
                    case 51:
                        var3 = var2.channelId;
                    case 56:
                        var2 = var1;
                        if (!(var3 === var2)) {
                            _fun114615_ip = 94;
                            continue _fun114615
                        }
                    case 63:
                        var2 = var5.currentCall;
                        var4 = var2.state;
                        var3 = _closure1_slot17;
                        var3 = var3.Connected;
                        if (!(var4 !== var3)) {
                            _fun114615_ip = 276;
                            continue _fun114615
                        }
                    case 94:
                        var12 = _closure1_slot16;
                        var10 = var12.info;
                        var7 = var1;
                        var4 = 'Starting Telecom call:';
                        var4 = var10.bind(var12)(var4, var7);
                    case 122: // try_start_0
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 19;
                        var4 = var10[var4];
                        var8 = var7.bind(var8)(var4);
                        var7 = var8.startCall;
                        var4 = var1;
                        var10 = var11;
                        var10 = var9 != var10;
                        var9 = null;
                        if (!var10) {
                            _fun114615_ip = 172;
                            continue _fun114615
                        }
                    case 163:
                        var10 = {};
                        var10.guildId = var11;
                        var9 = var10;
                    case 172:
                        var4 = var7.bind(var8)(var4, var9);
                        SaveGenerator(address = 182);
                    case 180:
                        return var4;
                    case 182:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun114615_ip = 231;
                            continue _fun114615
                        }
                    case 188:
                        var6 = var4;
                        if (var4) {
                            _fun114615_ip = 228;
                            continue _fun114615
                        }
                    case 194:
                        var9 = _closure1_slot16;
                        var8 = var9.warn;
                        var7 = 'Native startCall returned false, clearing call state';
                        var7 = var8.bind(var9)(var7);
                        var8 = var5.clearCall;
                        var7 = var1;
                        var7 = var8.bind(var5)(var7);
                    case 228: // try_end0
                        return var6;
                    case 231:
                        return var4;
                    case 234: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot16;
                        var4 = var6.warn;
                        var3 = 'Failed to register call with Telecom:';
                        var3 = var4.bind(var6)(var3, var7);
                        var4 = var5.clearCall;
                        var3 = var1;
                        var3 = var4.bind(var5)(var3);
                        var3 = false;
                        return var3;
                    case 276:
                        var4 = _closure1_slot16;
                        var3 = var4.info;
                        var2 = var1;
                        var1 = 'Call already active for channel:';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = true;
                        return var1;
                    case 306:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() { // Original name: startCall, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'endCall';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var1;
            var6 = _closure1_slot16;
            var5 = var6.info;
            var4 = var1.channelId;
            var3 = 'Ending call:';
            var3 = var5.bind(var6)(var3, var4);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.endCall;
            var1 = var1.channelId;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.clearCall;
                var0 = _closure3_slot1;
                var0 = var0.channelId;
                var0 = var1.bind(var2)(var0);
                var0 = arg0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot16;
                var2 = var3.warn;
                var1 = 'Failed to end call:';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure3_slot0;
                var1 = var2.clearCall;
                var0 = _closure3_slot1;
                var0 = var0.channelId;
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'reportCallEnded';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun114620: for (var _fun114620_ip = 0;;) switch (_fun114620_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot16;
                    var1 = var3.info;
                    var0 = 'Reporting call ended';
                    var0 = var1.bind(var3)(var0);
                    var1 = var2.currentCall;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun114620_ip = 58;
                        continue _fun114620
                    }
                case 39:
                    var1 = var2.endCall;
                    var0 = var2.currentCall;
                    var0 = var1.bind(var2)(var0);
                    _fun114620_ip = 79;
                    continue _fun114620;
                case 58:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = true;
                    var0 = var2.bind(var3)(var1);
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setCallActive';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun114621: for (var _fun114621_ip = 0;;) switch (_fun114621_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var3 = var2.currentCall;
                    var4 = null;
                    var6 = var4 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var6) {
                        _fun114621_ip = 30;
                        continue _fun114621
                    }
                case 25:
                    var1 = var3.channelId;
                case 30:
                    if (!(var1 !== var5)) {
                        _fun114621_ip = 63;
                        continue _fun114621
                    }
                case 34:
                    var6 = _closure1_slot16;
                    var3 = var6.warn;
                    var1 = 'setCallActive called for unknown channel:';
                    var1 = var3.bind(var6)(var1, var5);
                    _fun114621_ip = 278;
                    continue _fun114621;
                case 63:
                    var11 = _closure1_slot16;
                    var6 = var11.info;
                    var3 = 'Setting call active:';
                    var3 = var6.bind(var11)(var3, var5);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var8 = var6[var3];
                    var9 = var7.bind(var0)(var8);
                    var8 = var9.setCallActive;
                    var8 = var8.bind(var9)(var5);
                    var9 = _closure1_slot13;
                    var8 = var9.isSelfMute;
                    var8 = var8.bind(var9)();
                    var2.lastMuteState = var8;
                    var10 = var11.info;
                    var9 = 'Syncing initial mute state to Call Bar:';
                    var9 = var10.bind(var11)(var9, var8);
                    var6 = var6[var3];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.setMicMuted;
                    var6 = var6.bind(var7)(var5, var8);
                    var7 = _closure1_slot10;
                    var6 = var7.getCurrentUserActiveStream;
                    var6 = var6.bind(var7)();
                    var4 = var4 != var6;
                    if (!var4) {
                        _fun114621_ip = 218;
                        continue _fun114621
                    }
                case 199:
                    var7 = var6.state;
                    var6 = _closure1_slot14;
                    var6 = var6.ACTIVE;
                    var4 = var7 === var6;
                case 218:
                    var2.lastScreenShareActive = var4;
                    var7 = _closure1_slot16;
                    var6 = var7.info;
                    var2 = 'Syncing initial screen share state to Call Bar:';
                    var2 = var6.bind(var7)(var2, var4);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setScreenShareState;
                    var1 = true;
                    var1 = var2.bind(var3)(var5, var1, var4);
                case 278:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'clearScreenShareState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = null;
            var0 = this;
            var0.lastScreenShareActive = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'clearCall';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun114623: for (var _fun114623_ip = 0;;) switch (_fun114623_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.currentCall;
                    var1 = null;
                    var5 = var1 == var3;
                    var0 = undefined;
                    var4 = undefined;
                    if (var5) {
                        _fun114623_ip = 27;
                        continue _fun114623
                    }
                case 22:
                    var4 = var3.channelId;
                case 27:
                    var3 = arg0;
                    if (!(var4 === var3)) {
                        _fun114623_ip = 64;
                        continue _fun114623
                    }
                case 34:
                    var2.currentCall = var1;
                    var2.rtcConnectedStartCallPromise = var1;
                    var2.lastMuteState = var1;
                    var1 = var2.clearScreenShareState;
                    var1 = var1.bind(var2)();
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleMuteStoreChange';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun114624: for (var _fun114624_ip = 0;;) switch (_fun114624_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun114624_ip = 159;
                        continue _fun114624
                    }
                case 19:
                    var2 = var0.currentCall;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun114624_ip = 159;
                        continue _fun114624
                    }
                case 34:
                    var1 = var0.currentCall;
                    var3 = var1.state;
                    var2 = _closure1_slot17;
                    var2 = var2.Connected;
                    if (!(var3 === var2)) {
                        _fun114624_ip = 159;
                        continue _fun114624
                    }
                case 62:
                    var3 = _closure1_slot13;
                    var2 = var3.isSelfMute;
                    var3 = var2.bind(var3)();
                    var2 = var0.lastMuteState;
                    if (!(var2 !== var3)) {
                        _fun114624_ip = 159;
                        continue _fun114624
                    }
                case 86:
                    var0.lastMuteState = var3;
                    var5 = _closure1_slot16;
                    var4 = var5.info;
                    var2 = 'Syncing Discord -> Call Bar mute state:';
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setMicMuted;
                    var0 = var0.currentCall;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0, var3);
                case 159:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleScreenShareStoreChange';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun114625: for (var _fun114625_ip = 0;;) switch (_fun114625_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun114625_ip = 191;
                        continue _fun114625
                    }
                case 19:
                    var1 = var0.currentCall;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun114625_ip = 191;
                        continue _fun114625
                    }
                case 34:
                    var1 = var0.currentCall;
                    var4 = var1.state;
                    var2 = _closure1_slot17;
                    var2 = var2.Connected;
                    if (!(var4 === var2)) {
                        _fun114625_ip = 191;
                        continue _fun114625
                    }
                case 65:
                    var4 = _closure1_slot10;
                    var2 = var4.getCurrentUserActiveStream;
                    var2 = var2.bind(var4)();
                    var4 = var3 != var2;
                    if (!var4) {
                        _fun114625_ip = 105;
                        continue _fun114625
                    }
                case 86:
                    var3 = var2.state;
                    var2 = _closure1_slot14;
                    var2 = var2.ACTIVE;
                    var4 = var3 === var2;
                case 105:
                    var2 = var0.lastScreenShareActive;
                    if (!(var2 !== var4)) {
                        _fun114625_ip = 191;
                        continue _fun114625
                    }
                case 115:
                    var0.lastScreenShareActive = var4;
                    var5 = _closure1_slot16;
                    var3 = var5.info;
                    var2 = 'Syncing Discord -> Call Bar screen share state:';
                    var2 = var3.bind(var5)(var2, var4);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setScreenShareState;
                    var0 = var0.currentCall;
                    var1 = var0.channelId;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0, var4);
                case 191:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
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
    var14 = var3;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/native/TelecomManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 27, 3671, 1372, 1410, 3435, 660, 3, 4189, 7836, 8167, 8408, 8413, 4059, 14636, 4256, 2]);