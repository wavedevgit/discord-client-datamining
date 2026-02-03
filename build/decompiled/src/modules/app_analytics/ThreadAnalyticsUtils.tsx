// modules/app_analytics/ThreadAnalyticsUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/ThreadAnalyticsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun53579: for (var _fun53579_ip = 0;;) switch (_fun53579_ip) {
            case 0:
                var2 = arg0;
                var7 = arguments[1];
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun53579_ip = 14;
                    continue _fun53579
                }
            case 12:
                var7 = false;
            case 14:
                var4 = null;
                var1 = var4 != var2;
                var0 = null;
                if (!var1) {
                    _fun53579_ip = 353;
                    continue _fun53579
                }
            case 28:
                var8 = _closure1_slot5;
                var5 = var8.has;
                var1 = var2.type;
                var1 = var5.bind(var8)(var1);
                var0 = null;
                if (!var1) {
                    _fun53579_ip = 353;
                    continue _fun53579
                }
            case 58:
                var1 = {};
                var5 = undefined;
                if (!var7) {
                    _fun53579_ip = 95;
                    continue _fun53579
                }
            case 65:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 5;
                var7 = var9[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.getLastRouteChangeSource;
                var5 = var7.bind(var8)();
            case 95:
                var1.location = var5;
                var8 = _closure1_slot3;
                var7 = var8.getMemberCount;
                var5 = var2.id;
                var5 = var7.bind(var8)(var5);
                var1.thread_approximate_member_count = var5;
                var8 = _closure1_slot4;
                var7 = var8.getCount;
                var5 = var2.id;
                var5 = var7.bind(var8)(var5);
                var1.thread_approximate_message_count = var5;
                var5 = var2.threadMetadata;
                var8 = var4 == var5;
                var7 = undefined;
                if (var8) {
                    _fun53579_ip = 174;
                    continue _fun53579
                }
            case 168:
                var7 = var5.archived;
            case 174:
                var5 = true;
                var5 = var5 === var7;
                var1.thread_archived = var5;
                var5 = var2.threadMetadata;
                var8 = var4 == var5;
                var7 = undefined;
                if (var8) {
                    _fun53579_ip = 208;
                    continue _fun53579
                }
            case 202:
                var7 = var5.locked;
            case 208:
                var5 = var4 != var7;
                if (!var5) {
                    _fun53579_ip = 218;
                    continue _fun53579
                }
            case 215:
                var5 = var7;
            case 218:
                var1.thread_locked = var5;
                var7 = var2.threadMetadata;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun53579_ip = 246;
                    continue _fun53579
                }
            case 240:
                var5 = var7.autoArchiveDuration;
            case 246:
                var7 = var4 != var5;
                var4 = 0;
                if (!var7) {
                    _fun53579_ip = 258;
                    continue _fun53579
                }
            case 255:
                var4 = var5;
            case 258:
                var1.thread_auto_archive_duration_minutes = var4;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.extractTimestamp;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1.thread_approximate_creation_date = var4;
                var5 = _closure1_slot6;
                var4 = var5.can;
                var3 = _closure1_slot7;
                var3 = var3.SEND_MESSAGES;
                var3 = var4.bind(var5)(var3, var2);
                var1.can_send_message = var3;
                var2 = var2.parentChannelThreadType;
                var1.parent_channel_type = var2;
                var0 = var1;
            case 353:
                return var0;
        }
    };
    var2.collectThreadMetadata = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6467, 6468, 1376, 3082, 660, 1220, 21, 2]);