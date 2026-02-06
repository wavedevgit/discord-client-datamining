// modules/voice_messages/VoiceMessageAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = {};
    var4 = 'sent';
    var3.SENT = var4;
    var4 = 'cancelled_duration';
    var3.CANCELLED_DURATION = var4;
    var4 = 'cancelled_user_requested';
    var3.CANCELLED_USER_REQUESTED = var4;
    var4 = 'cancelled_gesture_conflict';
    var3.CANCELLED_GESTURE_CONFLICT = var4;
    var4 = 'cancelled_on_background';
    var3.CANCELLED_ON_BACKGROUND = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/VoiceMessageAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VoiceMessageRecordingResult = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun79795: for (var _fun79795_ip = 0;;) switch (_fun79795_ip) {
            case 0:
                var9 = arg1;
                var8 = arg2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.VOICE_MESSAGE_PLAYBACK_STARTED;
                var1 = {};
                var5 = arg0;
                var1.message_id = var5;
                var1.total_duration_secs = var9;
                var5 = global;
                var7 = var5.Math;
                var6 = var7.min;
                var10 = null;
                var5 = var8;
                if (!(var10 != var9)) {
                    _fun79795_ip = 86;
                    continue _fun79795
                }
            case 83:
                var5 = var9;
            case 86:
                var5 = var6.bind(var7)(var5, var8);
                var1.start_duration_secs = var5;
                var5 = arg3;
                var1.sender_user_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.logVoiceMessagePlaybackStarted = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun79796: for (var _fun79796_ip = 0;;) switch (_fun79796_ip) {
            case 0:
                var9 = arg1;
                var8 = arg2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.VOICE_MESSAGE_PLAYBACK_ENDED;
                var1 = {};
                var5 = arg0;
                var1.message_id = var5;
                var1.total_duration_secs = var9;
                var5 = global;
                var7 = var5.Math;
                var6 = var7.min;
                var10 = null;
                var5 = var8;
                if (!(var10 != var9)) {
                    _fun79796_ip = 86;
                    continue _fun79796
                }
            case 83:
                var5 = var9;
            case 86:
                var5 = var6.bind(var7)(var5, var8);
                var1.end_duration_secs = var5;
                var5 = arg3;
                var1.sender_user_id = var5;
                var5 = arg4;
                var1.duration_listening_secs = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.logVoiceMessagePlaybackEnded = var3;
    var1 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot2;
        var2 = var1.VOICE_MESSAGE_PLAYBACK_FAILED;
        var1 = {};
        var5 = arg0;
        var1.message_id = var5;
        var5 = arg1;
        var1.error_message = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.logVoiceMessagePlaybackFailed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);