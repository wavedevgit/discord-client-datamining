// modules/notifications/VoiceActivityNotificationExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var12 = true;
    var3.value = var12;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var3.ChannelTypes;
    var _closure1_slot0 = var4;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var7[var3];
    var9 = var6.bind(var0)(var4);
    var8 = var9.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2023-11_voice_activity_notification_user',
        'label': 'Voice Activity Notifications for User'
    };
    var5 = {};
    var11 = false;
    var5.enabled = var11;
    var4.defaultConfig = var5;
    var5 = {
        'id': 1,
        'label': 'Voice Activity Notifications are enabled for user'
    };
    var10 = {};
    var10.enabled = var12;
    var5.config = var10;
    var10 = new Array(2);
    var10[0] = var5;
    var13 = {
        'id': 2,
        'label': 'Control for AA test. Voice Activity Notifications are NOT enabled for user.'
    };
    var5 = 2;
    var14 = {};
    var14.enabled = var11;
    var13.config = var14;
    var10[1] = var13;
    var4.treatments = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2023-11_voice_activity_notification_guild',
        'label': 'General Voice Channel Notifications for Guild'
    };
    var10 = {};
    var10.voiceChannelActivityNotifsEnabled = var11;
    var3.defaultConfig = var10;
    var11 = {
        'id': 2,
        'label': 'Deadchat notifs disabled, voice channel activity notifs enabled'
    };
    var10 = {};
    var10.voiceChannelActivityNotifsEnabled = var12;
    var11.config = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var3.treatments = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot3 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notifications/VoiceActivityNotificationExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.VoiceActivityNotificationUserExperiment = var4;
    var2.VoiceActivityNotificationGuildExperiment = var3;
    var3 = function arg0() {
        _fun69821: for (var _fun69821_ip = 0;;) switch (_fun69821_ip) {
            case 0:
                var4 = arg0;
                var8 = _closure1_slot3;
                var7 = var8.useExperiment;
                var6 = {};
                var1 = 'useVoiceActivityNotificationSettingsExperiment';
                var6.location = var1;
                var5 = null;
                var9 = var5 == var4;
                var2 = undefined;
                if (var9) {
                    _fun69821_ip = 47;
                    continue _fun69821
                }
            case 37:
                var9 = var4.getGuildId;
                var2 = var9.bind(var4)();
            case 47:
                if (!(var5 == var2)) {
                    _fun69821_ip = 55;
                    continue _fun69821
                }
            case 51:
                var2 = _closure1_slot1;
            case 55:
                var6.guildId = var2;
                var2 = {};
                var9 = var5 == var4;
                var10 = undefined;
                if (var9) {
                    _fun69821_ip = 75;
                    continue _fun69821
                }
            case 70:
                var10 = var4.type;
            case 75:
                var9 = _closure1_slot0;
                var9 = var9.GUILD_VOICE;
                var9 = var10 !== var9;
                var2.disable = var9;
                var9 = false;
                var2.autoTrackExposure = var9;
                var2 = var7.bind(var8)(var6, var2);
                var2 = var2.voiceChannelActivityNotifsEnabled;
                var8 = _closure1_slot2;
                var7 = var8.useExperiment;
                var6 = {};
                var6.location = var1;
                var1 = {};
                var9 = var5 == var4;
                var10 = undefined;
                if (var9) {
                    _fun69821_ip = 145;
                    continue _fun69821
                }
            case 140:
                var10 = var4.type;
            case 145:
                var9 = _closure1_slot0;
                var9 = var9.GUILD_VOICE;
                var9 = var10 !== var9;
                if (var9) {
                    _fun69821_ip = 165;
                    continue _fun69821
                }
            case 162:
                var9 = !var2;
            case 165:
                var1.disable = var9;
                var9 = true;
                var1.autoTrackExposure = var9;
                var1 = var7.bind(var8)(var6, var1);
                var1 = var1.enabled;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun69821_ip = 202;
                    continue _fun69821
                }
            case 197:
                var3 = var4.type;
            case 202:
                var0 = _closure1_slot0;
                var0 = var0.GUILD_VOICE;
                var0 = var3 === var0;
                if (!var0) {
                    _fun69821_ip = 222;
                    continue _fun69821
                }
            case 219:
                var0 = var2;
            case 222:
                if (!var0) {
                    _fun69821_ip = 228;
                    continue _fun69821
                }
            case 225:
                var0 = var1;
            case 228:
                return var0;
        }
    };
    var2.useVoiceActivityNotificationSettingsExperiment = var3;
    var1 = function arg0() {
        _fun69822: for (var _fun69822_ip = 0;;) switch (_fun69822_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot3;
                var1 = var2.getCurrentConfig;
                var0 = {};
                var5 = null;
                var6 = var5 == var7;
                var3 = undefined;
                if (var6) {
                    _fun69822_ip = 39;
                    continue _fun69822
                }
            case 29:
                var6 = var7.getGuildId;
                var3 = var6.bind(var7)();
            case 39:
                if (!(var5 == var3)) {
                    _fun69822_ip = 47;
                    continue _fun69822
                }
            case 43:
                var3 = _closure1_slot1;
            case 47:
                var0.guildId = var3;
                var3 = 'hasVoiceChannelActivityNotifsEnabled';
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                var0 = var0.voiceChannelActivityNotifsEnabled;
                return var0;
        }
    };
    var2.hasVoiceChannelActivityNotifsEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3074, 2]);