// modules/media/MediaAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media/MediaAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun79236: for (var _fun79236_ip = 0;;) switch (_fun79236_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var9 = arg2;
                var8 = arg4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.MEDIA_ATTACHMENT_PLAYBACK_STARTED;
                var1 = {};
                var7 = var6.guild_id;
                var1.guild_id = var7;
                var7 = var6.id;
                var1.channel_id = var7;
                var6 = var6.type;
                var1.channel_type = var6;
                var6 = var5.content_type;
                var1.type = var6;
                var6 = var5.flags;
                var1.flags = var6;
                var5 = var5.size;
                var1.size = var5;
                var1.duration = var9;
                var5 = arg3;
                var1.message_id = var5;
                var5 = global;
                var7 = var5.Math;
                var6 = var7.min;
                var10 = null;
                var5 = var8;
                if (!(var10 != var9)) {
                    _fun79236_ip = 147;
                    continue _fun79236
                }
            case 144:
                var5 = var9;
            case 147:
                var5 = var6.bind(var7)(var5, var8);
                var1.start_duration_secs = var5;
                var5 = arg5;
                var1.sender_user_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.logMediaAttachmentPlaybackStarted = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun79237: for (var _fun79237_ip = 0;;) switch (_fun79237_ip) {
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
                var2 = var1.MEDIA_ATTACHMENT_PLAYBACK_ENDED;
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
                    _fun79237_ip = 86;
                    continue _fun79237
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
                var5 = arg5;
                var5 = var5.content_type;
                var1.type = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.logMediaAttachmentPlaybackEnded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);