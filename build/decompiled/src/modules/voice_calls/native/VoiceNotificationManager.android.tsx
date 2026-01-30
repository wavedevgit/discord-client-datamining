// modules/voice_calls/native/VoiceNotificationManager.android.tsx
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
        _fun98418: for (var _fun98418_ip = 0;;) switch (_fun98418_ip) {
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
                _fun98418_ip = 76;
                continue _fun98418;
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
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function() { // Original name: VoiceNotificationManager, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot6;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = 9000;
            var2.voiceServiceHandlerId = var3;
            var3 = null;
            var2.connectionState = var3;
            var3 = false;
            var2.selfMute = var3;
            var2.deafened = var3;
            var2.isStreaming = var3;
            var3 = function() { // Environment: var1
                var1 = _closure1_slot13;
                var0 = var1.getChannelId;
                var13 = var0.bind(var1)();
                var0 = var1.getState;
                var12 = var0.bind(var1)();
                var5 = _closure3_slot0;
                var4 = var5.handleUpdate;
                var11 = var5.selfMute;
                var10 = var5.deafened;
                var9 = var5.embeddedActivity;
                var8 = var5.isStreaming;
                var14 = var5;
                var0 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
                var0 = undefined;
                return var0;
            };
            var2.handleVoiceStateChange = var3;
            var3 = function() { // Environment: var1
                _fun98424: for (var _fun98424_ip = 0;;) switch (_fun98424_ip) {
                    case 0:
                        var2 = _closure1_slot12;
                        var1 = var2.isSelfMute;
                        var7 = var1.bind(var2)();
                        if (var7) {
                            _fun98424_ip = 34;
                            continue _fun98424
                        }
                    case 20:
                        var2 = _closure1_slot12;
                        var1 = var2.isSelfMutedTemporarily;
                        var7 = var1.bind(var2)();
                    case 34:
                        var2 = _closure1_slot12;
                        var1 = var2.isSelfDeaf;
                        var6 = var1.bind(var2)();
                        if (var6) {
                            _fun98424_ip = 65;
                            continue _fun98424
                        }
                    case 51:
                        var1 = _closure1_slot12;
                        var0 = var1.isDeaf;
                        var6 = var0.bind(var1)();
                    case 65:
                        var5 = _closure3_slot0;
                        var4 = var5.handleUpdate;
                        var13 = var5.channelId;
                        var12 = var5.connectionState;
                        var9 = var5.embeddedActivity;
                        var8 = var5.isStreaming;
                        var14 = var5;
                        var11 = var7;
                        var10 = var6;
                        var0 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleMediaEngineStateChange = var3;
            var3 = function() { // Environment: var1
                _fun98425: for (var _fun98425_ip = 0;;) switch (_fun98425_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.channelId;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun98425_ip = 81;
                            continue _fun98425
                        }
                    case 18:
                        var2 = _closure1_slot8;
                        var1 = var2.getCurrentEmbeddedActivity;
                        var9 = var1.bind(var2)();
                        var6 = _closure3_slot0;
                        var5 = var6.handleUpdate;
                        var13 = var6.channelId;
                        var12 = var6.connectionState;
                        var11 = var6.selfMute;
                        var10 = var6.deafened;
                        var8 = var6.isStreaming;
                        var14 = var6;
                        var0 = var14[var5](var13, var12, var11, var10, var9, var8, var7);
                    case 81:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleEmbeddedActivityStateChange = var3;
            var3 = function() { // Environment: var1
                var1 = _closure1_slot10;
                var0 = var1.getCurrentUserActiveStream;
                var1 = var0.bind(var1)();
                var0 = null;
                var8 = var0 != var1;
                var6 = _closure3_slot0;
                var5 = var6.handleUpdate;
                var13 = var6.channelId;
                var12 = var6.connectionState;
                var11 = var6.selfMute;
                var10 = var6.deafened;
                var9 = var6.embeddedActivity;
                var14 = var6;
                var0 = var14[var5](var13, var12, var11, var10, var9, var8, var7);
                var0 = undefined;
                return var0;
            };
            var2.handleApplicationStreamStateChange = var3;
            var3 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                _fun98427: for (var _fun98427_ip = 0;;) switch (_fun98427_ip) {
                    case 0:
                        var9 = arg0;
                        var7 = arg1;
                        var11 = arg2;
                        var10 = arg3;
                        var8 = arg4;
                        var6 = arg5;
                        var1 = _closure3_slot0;
                        var1 = var1.channelId;
                        if (!(var1 === var9)) {
                            _fun98427_ip = 139;
                            continue _fun98427
                        }
                    case 34:
                        var1 = _closure3_slot0;
                        var1 = var1.connectionState;
                        if (!(var1 === var7)) {
                            _fun98427_ip = 139;
                            continue _fun98427
                        }
                    case 48:
                        var1 = _closure3_slot0;
                        var1 = var1.selfMute;
                        if (!(var1 === var11)) {
                            _fun98427_ip = 139;
                            continue _fun98427
                        }
                    case 62:
                        var1 = _closure3_slot0;
                        var1 = var1.deafened;
                        if (!(var1 === var10)) {
                            _fun98427_ip = 139;
                            continue _fun98427
                        }
                    case 76:
                        var1 = _closure3_slot0;
                        var4 = var1.embeddedActivity;
                        var3 = null;
                        var5 = var3 == var4;
                        var1 = undefined;
                        if (var5) {
                            _fun98427_ip = 103;
                            continue _fun98427
                        }
                    case 97:
                        var1 = var4.launchId;
                    case 103:
                        var3 = var3 == var8;
                        var2 = undefined;
                        if (var3) {
                            _fun98427_ip = 118;
                            continue _fun98427
                        }
                    case 112:
                        var2 = var8.launchId;
                    case 118:
                        if (!(var1 === var2)) {
                            _fun98427_ip = 139;
                            continue _fun98427
                        }
                    case 122:
                        var1 = _closure3_slot0;
                        var1 = var1.isStreaming;
                        if (!(var1 !== var6)) {
                            _fun98427_ip = 1062;
                            continue _fun98427
                        }
                    case 139:
                        var2 = null;
                        if (!(var2 != var7)) {
                            _fun98427_ip = 1062;
                            continue _fun98427
                        }
                    case 148:
                        var1 = _closure3_slot0;
                        var1 = var1.channelId;
                        if (!(var1 !== var9)) {
                            _fun98427_ip = 171;
                            continue _fun98427
                        }
                    case 161:
                        var1 = _closure3_slot0;
                        var1.channelId = var9;
                    case 171:
                        var1 = _closure3_slot0;
                        var1 = var1.connectionState;
                        if (!(var1 !== var7)) {
                            _fun98427_ip = 195;
                            continue _fun98427
                        }
                    case 185:
                        var1 = _closure3_slot0;
                        var1.connectionState = var7;
                    case 195:
                        var1 = _closure3_slot0;
                        var1 = var1.selfMute;
                        if (!(var1 !== var11)) {
                            _fun98427_ip = 219;
                            continue _fun98427
                        }
                    case 209:
                        var1 = _closure3_slot0;
                        var1.selfMute = var11;
                    case 219:
                        var1 = _closure3_slot0;
                        var1 = var1.deafened;
                        if (!(var1 !== var10)) {
                            _fun98427_ip = 243;
                            continue _fun98427
                        }
                    case 233:
                        var1 = _closure3_slot0;
                        var1.deafened = var10;
                    case 243:
                        var1 = _closure3_slot0;
                        var1 = var1.embeddedActivity;
                        var5 = var2 == var1;
                        var4 = undefined;
                        var3 = undefined;
                        if (var5) {
                            _fun98427_ip = 270;
                            continue _fun98427
                        }
                    case 264:
                        var3 = var1.compositeInstanceId;
                    case 270:
                        var5 = var2 == var8;
                        var1 = undefined;
                        if (var5) {
                            _fun98427_ip = 285;
                            continue _fun98427
                        }
                    case 279:
                        var1 = var8.compositeInstanceId;
                    case 285:
                        if (!(var3 !== var1)) {
                            _fun98427_ip = 299;
                            continue _fun98427
                        }
                    case 289:
                        var1 = _closure3_slot0;
                        var1.embeddedActivity = var8;
                    case 299:
                        var1 = _closure3_slot0;
                        var1 = var1.isStreaming;
                        if (!(var1 !== var6)) {
                            _fun98427_ip = 323;
                            continue _fun98427
                        }
                    case 313:
                        var1 = _closure3_slot0;
                        var1.isStreaming = var6;
                    case 323:
                        var5 = _closure1_slot11;
                        var3 = var5.getChannel;
                        var13 = var3.bind(var5)(var9);
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 11;
                        var3 = var9[var3];
                        var5 = var5.bind(var4)(var3);
                        var3 = var5.getStatus;
                        var3 = var3.bind(var5)(var7);
                        var19 = var3.connectionStatusText;
                        var3 = var2 != var8;
                        var14 = '';
                        var12 = var14;
                        if (!var3) {
                            _fun98427_ip = 483;
                            continue _fun98427
                        }
                    case 391:
                        var7 = _closure1_slot9;
                        var5 = var7.getApplication;
                        var9 = var2 == var8;
                        var3 = undefined;
                        if (var9) {
                            _fun98427_ip = 415;
                            continue _fun98427
                        }
                    case 410:
                        var3 = var8.applicationId;
                    case 415:
                        var7 = var5.bind(var7)(var3);
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 12;
                        var3 = var8[var3];
                        var5 = var5.bind(var4)(var3);
                        var8 = var2 == var7;
                        var3 = undefined;
                        if (var8) {
                            _fun98427_ip = 454;
                            continue _fun98427
                        }
                    case 449:
                        var3 = var7.name;
                    case 454:
                        var7 = var5.bind(var4)(var3);
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var3 = ' - ';
                        var12 = var5.bind(var3)(var7);
                    case 483:
                        var5 = var2 != var13;
                        var3 = null;
                        if (!var5) {
                            _fun98427_ip = 973;
                            continue _fun98427
                        }
                    case 495:
                        var5 = {};
                        var16 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var17 = 13;
                        var8 = var7[var17];
                        var8 = var16.bind(var4)(var8);
                        var18 = var8.intl;
                        var15 = var18.formatToPlainString;
                        var8 = var7[var17];
                        var8 = var16.bind(var4)(var8);
                        var8 = var8.t;
                        var9 = var8["aUT3+M"];
                        var8 = {};
                        var8.callState = var19;
                        var8 = var15.bind(var18)(var9, var8);
                        var5.title = var8;
                        var9 = var13.name;
                        var8 = global;
                        var8 = var8.HermesInternal;
                        var8 = var8.concat;
                        var8 = var8.bind(var14)(var9, var12);
                        var5.content = var8;
                        var9 = 14;
                        var8 = var7[var9];
                        var8 = var16.bind(var4)(var8);
                        var8 = var8.ServiceNotificationPriority;
                        var8 = var8.HIGH;
                        var5.priority = var8;
                        var14 = _closure3_slot0;
                        var12 = var14.createAction;
                        var8 = 'SelectChannel';
                        var8 = var12.bind(var14)(var13, var8, var4);
                        var5.contentAction = var8;
                        var12 = var14.createAction;
                        var8 = var7[var17];
                        var8 = var16.bind(var4)(var8);
                        var15 = var8.intl;
                        var8 = var15.string;
                        var7 = var7[var17];
                        var7 = var16.bind(var4)(var7);
                        var7 = var7.t;
                        var7 = var7["6vrfgt"];
                        var8 = var8.bind(var15)(var7);
                        var7 = 'Disconnect';
                        var8 = var12.bind(var14)(var13, var7, var8);
                        var7 = new Array(3);
                        var7[0] = var8;
                        var12 = var14.createAction;
                        var18 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var15 = var8[var17];
                        var15 = var18.bind(var4)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var8 = var8[var17];
                        var8 = var18.bind(var4)(var8);
                        var8 = var8.t;
                        if (var11) {
                            _fun98427_ip = 787;
                            continue _fun98427
                        }
                    case 774:
                        var11 = var8.w4m945;
                        var11 = var15.bind(var16)(var11);
                        _fun98427_ip = 798;
                        continue _fun98427;
                    case 787:
                        var8 = var8.YqAjXy;
                        var11 = var15.bind(var16)(var8);
                    case 798:
                        var8 = 'ToggleSelfMute';
                        var8 = var12.bind(var14)(var13, var8, var11);
                        var7[1] = var8;
                        var12 = _closure3_slot0;
                        var11 = var12.createAction;
                        var16 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var14 = var8[var17];
                        var14 = var16.bind(var4)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var8 = var8[var17];
                        var8 = var16.bind(var4)(var8);
                        var8 = var8.t;
                        if (var10) {
                            _fun98427_ip = 882;
                            continue _fun98427
                        }
                    case 869:
                        var10 = var8.wjcRFX;
                        var10 = var14.bind(var15)(var10);
                        _fun98427_ip = 895;
                        continue _fun98427;
                    case 882:
                        var8 = var8["2US872"];
                        var10 = var14.bind(var15)(var8);
                    case 895:
                        var8 = 'ToggleDeafen';
                        var8 = var11.bind(var12)(var13, var8, var10);
                        var7[2] = var8;
                        var5.auxiliaryActions = var7;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var4)(var7);
                        var7 = var7.ServiceNotificationType;
                        if (var6) {
                            _fun98427_ip = 953;
                            continue _fun98427
                        }
                    case 945:
                        var6 = var7.VOICE_CALL;
                        _fun98427_ip = 959;
                        continue _fun98427;
                    case 953:
                        var6 = var7.SCREEN_SHARE;
                    case 959:
                        var5.type = var6;
                        var6 = true;
                        var5.usesGateway = var6;
                        var3 = var5;
                    case 973:
                        if (!(var2 == var3)) {
                            _fun98427_ip = 1020;
                            continue _fun98427
                        }
                    case 977:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 15;
                        var2 = var6[var2];
                        var6 = var5.bind(var4)(var2);
                        var5 = var6.removeServiceHandler;
                        var2 = _closure3_slot0;
                        var2 = var2.voiceServiceHandlerId;
                        var2 = var5.bind(var6)(var2);
                        _fun98427_ip = 1062;
                        continue _fun98427;
                    case 1020:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 15;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.updateServiceHandler;
                        var0 = _closure3_slot0;
                        var0 = var0.voiceServiceHandlerId;
                        var0 = var1.bind(var2)(var0, var3);
                    case 1062:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleUpdate = var3;
            var1 = function(arg0, arg1, arg2) { // Environment: var1
                var2 = arg0;
                var1 = arg1;
                var0 = {};
                var5 = var2.id;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '';
                var3 = var4.bind(var3)(var1, var5);
                var0.tag = var3;
                var0.taskName = var1;
                var1 = arg2;
                var0.title = var1;
                var1 = {};
                var2 = var2.id;
                var1.channelId = var2;
                var0.data = var1;
                return var0;
            };
            var2.createAction = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var4 = _closure1_slot13;
            var3 = var4.addChangeListener;
            var2 = var0.handleVoiceStateChange;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot12;
            var3 = var4.addChangeListener;
            var2 = var0.handleMediaEngineStateChange;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot8;
            var3 = var4.addChangeListener;
            var2 = var0.handleEmbeddedActivityStateChange;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot10;
            var1 = var2.addChangeListener;
            var0 = var0.handleApplicationStreamStateChange;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var4 = _closure1_slot13;
            var3 = var4.removeChangeListener;
            var2 = var0.handleVoiceStateChange;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot12;
            var1 = var2.removeChangeListener;
            var0 = var0.handleMediaEngineStateChange;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var12 = var7;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot14 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: VoiceNotificationLifecycleManager, environment: var5
            _fun98432: for (var _fun98432_ip = 0;;) switch (_fun98432_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun98432_ip = 69;
                        continue _fun98432
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun98432_ip = 105;
                    continue _fun98432;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot14;
            var0 = var1.initialize;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot14;
            var0 = var1.terminate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
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
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/VoiceNotificationManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1371, 3413, 3673, 1372, 3435, 3477, 8608, 7742, 1234, 6509, 6508, 3977, 2]);