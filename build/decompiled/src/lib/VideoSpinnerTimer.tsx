// lib/VideoSpinnerTimer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'self_video';
    var3.SELF_VIDEO = var7;
    var7 = 'self_stream';
    var3.SELF_STREAM = var7;
    var7 = 'remote_video';
    var3.REMOTE_VIDEO = var7;
    var7 = 'remote_stream';
    var3.REMOTE_STREAM = var7;
    var7 = 'change_video_background';
    var3.CHANGE_VIDEO_BACKGROUND = var7;
    var7 = 'replay_video_stream';
    var3.REPLAY_VIDEO_STREAM = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var4
        }
    });
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = null;
            var2.spinnerVisibleStart = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var4 = var3.bind(var0)(var1);
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var6 = arg0;
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.logger = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'onSpinnerStarted';
        var0.key = var1;
        var1 = function() {
            _fun64655: for (var _fun64655_ip = 0;;) switch (_fun64655_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.spinnerVisibleStart;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun64655_ip = 55;
                        continue _fun64655
                    }
                case 15:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.spinnerVisibleStart = var0;
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'trackSpinnerDuration';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun64656: for (var _fun64656_ip = 0;;) switch (_fun64656_ip) {
                case 0:
                    var9 = arg0;
                    var6 = arg2;
                    var0 = this;
                    var1 = var0.spinnerVisibleStart;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun64656_ip = 571;
                        continue _fun64656
                    }
                case 24:
                    var3 = _closure1_slot11;
                    var1 = var3.get;
                    var3 = var1.bind(var3)(var6);
                    var7 = var2 != var3;
                    var1 = 0;
                    var4 = 0;
                    if (!var7) {
                        _fun64656_ip = 55;
                        continue _fun64656
                    }
                case 52:
                    var4 = var3;
                case 55:
                    var3 = 1;
                    var8 = var4 + var3;
                    var4 = _closure1_slot11;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var8);
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.now;
                    var6 = var4.bind(var6)();
                    var4 = var0.spinnerVisibleStart;
                    var7 = var6 - var4;
                    var0.spinnerVisibleStart = var2;
                    if (!(!(var7 < var1))) {
                        _fun64656_ip = 507;
                        continue _fun64656
                    }
                case 131:
                    var6 = var0.logger;
                    var4 = var6.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var13 = var1.concat;
                    var20 = 'spinner visible for ';
                    var18 = ' ms\n      [';
                    var16 = ', count for stream: ';
                    var14 = ']';
                    var19 = var7;
                    var17 = var9;
                    var15 = var8;
                    var1 = var20[var13](var19, var18, var17, var16, var15, var14, var13);
                    var1 = var4.bind(var6)(var1);
                    var13 = _closure1_slot8;
                    var1 = var13.getGuildId;
                    var11 = var1.bind(var13)();
                    var6 = _closure1_slot9;
                    var4 = var6.getUserVoiceChannelId;
                    var10 = _closure1_slot5;
                    var1 = var10.getId;
                    var1 = var1.bind(var10)();
                    var10 = var4.bind(var6)(var11, var1);
                    var4 = _closure1_slot6;
                    var1 = var4.getChannel;
                    var4 = var1.bind(var4)(var10);
                    var1 = var2 != var4;
                    var6 = null;
                    if (!var1) {
                        _fun64656_ip = 339;
                        continue _fun64656
                    }
                case 263:
                    var1 = var4.isGuildVoice;
                    var1 = var1.bind(var4)();
                    var6 = 'guild_voice';
                    if (var1) {
                        _fun64656_ip = 339;
                        continue _fun64656
                    }
                case 282:
                    var1 = var4.isGuildStageVoice;
                    var1 = var1.bind(var4)();
                    var6 = 'is_stage_channel';
                    if (var1) {
                        _fun64656_ip = 339;
                        continue _fun64656
                    }
                case 301:
                    var1 = var4.isDM;
                    var1 = var1.bind(var4)();
                    var6 = 'dm';
                    if (var1) {
                        _fun64656_ip = 339;
                        continue _fun64656
                    }
                case 318:
                    var1 = var4.isGroupDM;
                    var1 = var1.bind(var4)();
                    var6 = null;
                    if (!var1) {
                        _fun64656_ip = 339;
                        continue _fun64656
                    }
                case 333:
                    var6 = 'group_dm';
                case 339:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.VIDEO_SPINNER_SHOWN_V2;
                    var1 = {};
                    var1.video_spinner_context = var9;
                    var1.duration_video_spinner_visible_ms = var7;
                    var12 = var13.getRTCConnectionId;
                    var12 = var12.bind(var13)();
                    var1.rtc_connection_id = var12;
                    var12 = var13.getMediaSessionId;
                    var12 = var12.bind(var13)();
                    var1.media_session_id = var12;
                    var1.event_count_for_stream = var8;
                    var1.guild_id = var11;
                    var1.channel_id = var10;
                    var1.channel_type = var6;
                    var6 = arg1;
                    var1.spinning_user_id = var6;
                    var6 = _closure1_slot7;
                    var5 = var6.getType;
                    var5 = var5.bind(var6)();
                    var1.connection_type = var5;
                    var5 = var6.getEffectiveConnectionSpeed;
                    var5 = var5.bind(var6)();
                    var1.effective_connection_speed = var5;
                    var5 = var6.getServiceProvider;
                    var5 = var5.bind(var6)();
                    var1.service_provider = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun64656_ip = 571;
                    continue _fun64656;
                case 507:
                    var2 = var0.logger;
                    var1 = var2.warn;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var20 = 'spinner duration is negative: ';
                    var18 = ' ms\n        [';
                    var16 = ', count for stream: ';
                    var14 = ']';
                    var19 = var7;
                    var17 = var9;
                    var15 = var8;
                    var0 = var20[var6](var19, var18, var17, var16, var15, var14, var13);
                    var0 = var1.bind(var2)(var0);
                case 571:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VideoSpinnerTimer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VideoSpinnerContext = var3;
    var2.VideoSpinnerTimer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1216, 1372, 3626, 3518, 3521, 660, 3, 3529, 795, 2]);