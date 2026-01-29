// modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.queueBlockWarning;
    var _closure1_slot4 = var6;
    var3 = var3.dequeueBlockWarning;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoiceChannelWarningSurfaces;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: showVoiceChannelBlockedUserWarning, environment: var1
        _fun96270: for (var _fun96270_ip = 0;;) switch (_fun96270_ip) {
            case 0:
                var7 = arg0;
                var8 = arg1;
                var1 = _closure1_slot3;
                var0 = var1.getState;
                var2 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = var1.AppStates;
                var1 = var1.ACTIVE;
                if (!(var2 !== var1)) {
                    _fun96270_ip = 74;
                    continue _fun96270
                }
            case 61:
                var1 = _closure1_slot4;
                var1 = var1.bind(var0)();
                _fun96270_ip = 234;
                continue _fun96270;
            case 74:
                var1 = _closure1_slot5;
                var1 = var1.bind(var0)();
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 4;
                var1 = var10[var1];
                var5 = var2.bind(var0)(var1);
                var4 = var5.openLazy;
                var9 = _closure1_slot0;
                var1 = 6;
                var1 = var10[var1];
                var3 = var9.bind(var0)(var1);
                var1 = 5;
                var2 = var10[var1];
                var1 = var10.paths;
                var3 = var3.bind(var0)(var2, var1);
                var2 = {};
                var2.channelId = var7;
                var2.blockedUserId = var8;
                var1 = 7;
                var1 = var10[var1];
                var1 = var9.bind(var0)(var1);
                var1 = var1.ImpressionNames;
                var1 = var1.VOICE_CHANNEL_BLOCKED_USER_WARNING;
                var2.impressionName = var1;
                var1 = {};
                var1.channel_id = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var1.blocked_user_ids = var7;
                var6 = _closure1_slot6;
                var6 = var6.POST_JOIN_SHEET;
                var1.warning_surface = var6;
                var2.impressionProperties = var1;
                var1 = 'gdm_blocked_user_action_sheet';
                var1 = var4.bind(var5)(var3, var1, var2);
            case 234:
                return var0;
        }
    };
    var2.showVoiceChannelBlockedUserWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5239, 12490, 12493, 670, 3237, 12496, 1307, 481, 2]);