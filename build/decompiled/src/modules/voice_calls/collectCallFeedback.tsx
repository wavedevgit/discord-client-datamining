// modules/voice_calls/collectCallFeedback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/collectCallFeedback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: collectCallFeedback, environment: var1
        _fun93771: for (var _fun93771_ip = 0;;) switch (_fun93771_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot7;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                var4 = _closure1_slot4;
                var2 = var4.getChannel;
                var5 = var2.bind(var4)(var1);
                var4 = null;
                var2 = arg1;
                if (!(var4 == var2)) {
                    _fun93771_ip = 51;
                    continue _fun93771
                }
            case 43:
                if (!(var4 != var1)) {
                    _fun93771_ip = 51;
                    continue _fun93771
                }
            case 47:
                if (!(var4 == var5)) {
                    _fun93771_ip = 62;
                    continue _fun93771
                }
            case 51:
                var1 = undefined;
                var1 = var3.bind(var1)();
                _fun93771_ip = 625;
                continue _fun93771;
            case 62:
                var6 = _closure1_slot6;
                var1 = var6.getVoiceFilterSpeakingDurationMs;
                var7 = var1.bind(var6)();
                var1 = {};
                var2 = var5.id;
                var1.channel_id = var2;
                var2 = var5.type;
                var1.channel_type = var2;
                var2 = var5.getGuildId;
                var2 = var2.bind(var5)();
                var1.guild_id = var2;
                var2 = var6.getRTCConnectionId;
                var2 = var2.bind(var6)();
                var1.rtc_connection_id = var2;
                var2 = var6.getDuration;
                var2 = var2.bind(var6)();
                var1.duration = var2;
                var2 = var6.getMediaSessionId;
                var2 = var2.bind(var6)();
                var1.media_session_id = var2;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var5 = var5[var2];
                var2 = undefined;
                var10 = var8.bind(var2)(var5);
                var9 = var10.getVoiceStateMetadata;
                var5 = var6.getGuildId;
                var8 = var5.bind(var6)();
                var5 = var6.getChannelId;
                var6 = var5.bind(var6)();
                var5 = arg3;
                var12 = var9.bind(var10)(var8, var6, var5);
                var13 = var1;
                var5 = copyDataProperties(var13, var12);
                var5 = var4 != var7;
                var6 = null;
                if (!var5) {
                    _fun93771_ip = 254;
                    continue _fun93771
                }
            case 229:
                var5 = var7.keys;
                var12 = var5.bind(var7)();
                var5 = new Array(0);
                var11 = 0;
                var13 = var5;
                var8 = arraySpread(var13, var12, var11);
                var6 = var5;
            case 254:
                var5 = 'duration_speaking_voice_filter_ids';
                var1[var5] = var6;
                var5 = var4 != var7;
                var6 = null;
                if (!var5) {
                    _fun93771_ip = 299;
                    continue _fun93771
                }
            case 274:
                var5 = var7.values;
                var12 = var5.bind(var7)();
                var5 = new Array(0);
                var11 = 0;
                var13 = var5;
                var7 = arraySpread(var13, var12, var11);
                var6 = var5;
            case 299:
                var5 = 'duration_speaking_voice_filter_ms';
                var1[var5] = var6;
                var3 = var3.bind(var2)();
                var3 = _closure1_slot3;
                var3 = var3.hasUsedBackgroundInCall;
                if (var3) {
                    _fun93771_ip = 381;
                    continue _fun93771
                }
            case 329:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var6 = var5.bind(var2)(var3);
                var5 = var6.dispatch;
                var3 = {};
                var7 = 'VOICE_CHANNEL_SHOW_FEEDBACK';
                var3.type = var7;
                var3.analyticsData = var1;
                var3 = var5.bind(var6)(var3);
                _fun93771_ip = 625;
                continue _fun93771;
            case 381:
                var3 = {};
                var13 = var3;
                var12 = var1;
                var1 = copyDataProperties(var13, var12);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var6 = var5.bind(var2)(var1);
                var5 = var6.getLastUsedVideoBackgroundOption;
                var7 = _closure1_slot8;
                var1 = var7.getCurrentUser;
                var1 = var1.bind(var7)();
                var7 = var5.bind(var6)(var1);
                var1 = {};
                var8 = _closure1_slot5;
                var5 = var8.getVideoDevices;
                var6 = var5.bind(var8)();
                var5 = var8.getVideoDeviceId;
                var5 = var5.bind(var8)();
                var5 = var6[var5];
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun93771_ip = 481;
                    continue _fun93771
                }
            case 476:
                var4 = var5.name;
            case 481:
                var1.video_device_name = var4;
                var5 = _closure1_slot5;
                var4 = var5.getHardwareEncoding;
                var4 = var4.bind(var5)();
                var1.video_hardware_scaling_enabled = var4;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 8;
                var8 = var4[var5];
                var9 = var6.bind(var2)(var8);
                var8 = var9.getEffectAnalyticsType;
                var8 = var8.bind(var9)(var7);
                var1.video_effect_type = var8;
                var5 = var4[var5];
                var6 = var6.bind(var2)(var5);
                var5 = var6.getEffectDetailAnalyticsName;
                var5 = var5.bind(var6)(var7);
                var1.video_effect_detail = var5;
                var13 = var3;
                var12 = var1;
                var1 = copyDataProperties(var13, var12);
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'VIDEO_BACKGROUND_SHOW_FEEDBACK';
                var0.type = var4;
                var0.analyticsData = var3;
                var0 = var1.bind(var2)(var0);
            case 625:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8173, 1372, 3435, 3477, 1661, 1613, 4259, 8179, 8174, 806, 2]);