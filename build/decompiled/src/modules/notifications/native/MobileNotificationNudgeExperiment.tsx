// modules/notifications/native/MobileNotificationNudgeExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var16 = true;
    var3.value = var16;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var6 = {};
    var0 = 'app_startup';
    var6.APP_STARTUP = var0;
    var0 = 'dm_space';
    var6.DM_SPACE = var0;
    var0 = 'channel_banner';
    var6.CHANNEL_BANNER = var0;
    var5 = {};
    var0 = 'impression';
    var5.IMPRESSION = var0;
    var0 = 'dismiss';
    var5.DISMISS = var0;
    var0 = 'accept';
    var5.ACCEPT = var0;
    var4 = {};
    var0 = 'half-sheet';
    var4.HALF_SHEET = var0;
    var0 = 'x-dismissible';
    var4.X_DISMISSIBLE = var0;
    var3 = {};
    var0 = 'aggressive';
    var3.AGGRESSIVE = var0;
    var0 = 'relaxed';
    var3.RELAXED = var0;
    var _closure1_slot2 = var3;
    var10 = 0;
    var7 = var9[var10];
    var0 = undefined;
    var12 = var8.bind(var0)(var7);
    var11 = var12.createExperiment;
    var7 = {
        'kind': 'user',
        'id': '2025-09_mobile_notification_app_startup_nudge',
        'label': 'Mobile Notification App Startup Nudge'
    };
    var13 = {
        'reminderUI': null,
        'timing': null
    };
    var7.defaultConfig = var13;
    var14 = {
        'id': 1,
        'label': 'T1: App Startup Nudge'
    };
    var13 = {};
    var15 = var4.HALF_SHEET;
    var13.reminderUI = var15;
    var15 = var3.RELAXED;
    var13.timing = var15;
    var14.config = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var7.treatments = var13;
    var7 = var11.bind(var12)(var7);
    var _closure1_slot3 = var7;
    var7 = var9[var10];
    var13 = var8.bind(var0)(var7);
    var12 = var13.createExperiment;
    var11 = {
        'kind': 'user',
        'id': '2025-09_mobile_notification_message_list_nudge',
        'label': 'Mobile Notification Message Home List Nudge'
    };
    var7 = {
        'reminderUI': null,
        'timing': null
    };
    var11.defaultConfig = var7;
    var7 = {
        'id': 1,
        'label': 'T1: Inline Banner in DM List | Relaxed'
    };
    var14 = {};
    var15 = var4.X_DISMISSIBLE;
    var14.reminderUI = var15;
    var15 = var3.RELAXED;
    var14.timing = var15;
    var7.config = var14;
    var14 = new Array(2);
    var14[0] = var7;
    var15 = {
        'id': 2,
        'label': 'T2: Inline Banner in DM List | Aggressive'
    };
    var7 = 2;
    var17 = {};
    var18 = var4.X_DISMISSIBLE;
    var17.reminderUI = var18;
    var18 = var3.AGGRESSIVE;
    var17.timing = var18;
    var15.config = var17;
    var14[1] = var15;
    var11.treatments = var14;
    var11 = var12.bind(var13)(var11);
    var _closure1_slot4 = var11;
    var10 = var9[var10];
    var12 = var8.bind(var0)(var10);
    var11 = var12.createExperiment;
    var10 = {
        'kind': 'user',
        'id': '2025-09_mobile_notification_channel_nudge',
        'label': 'Mobile Notification Channel Nudge'
    };
    var17 = false;
    var13 = {
        'reminderUI': null,
        'timing': null,
        'isContextual': false
    };
    var10.defaultConfig = var13;
    var14 = {
        'id': 1,
        'label': 'T1: Channel Banner | On Channel Land | Relaxed'
    };
    var13 = {};
    var15 = var4.X_DISMISSIBLE;
    var13.reminderUI = var15;
    var15 = var3.RELAXED;
    var13.timing = var15;
    var13.isContextual = var17;
    var14.config = var13;
    var13 = new Array(4);
    var13[0] = var14;
    var14 = {
        'id': 2,
        'label': 'T2: Channel Banner | On Channel Land | Aggressive'
    };
    var15 = {};
    var18 = var4.X_DISMISSIBLE;
    var15.reminderUI = var18;
    var18 = var3.AGGRESSIVE;
    var15.timing = var18;
    var15.isContextual = var17;
    var14.config = var15;
    var13[1] = var14;
    var14 = {
        'id': 3,
        'label': 'T3: Channel Banner | On Message Send | Relaxed'
    };
    var15 = {};
    var17 = var4.X_DISMISSIBLE;
    var15.reminderUI = var17;
    var17 = var3.RELAXED;
    var15.timing = var17;
    var15.isContextual = var16;
    var14.config = var15;
    var13[2] = var14;
    var14 = {
        'id': 4,
        'label': 'T4: Channel Banner | On Message Send | Aggressive'
    };
    var15 = {};
    var17 = var4.X_DISMISSIBLE;
    var15.reminderUI = var17;
    var17 = var3.AGGRESSIVE;
    var15.timing = var17;
    var15.isContextual = var16;
    var14.config = var15;
    var13[3] = var14;
    var10.treatments = var13;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot5 = var10;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/notifications/native/MobileNotificationNudgeExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var2.NotificationNudgeSurface = var6;
    var2.NotificationNudgeAnalyticsAction = var5;
    var2.NotificationNudgeUI = var4;
    var2.NotificationNudgeTimingVariant = var3;
    var3 = function arg0() {
        _fun86153: for (var _fun86153_ip = 0;;) switch (_fun86153_ip) {
            case 0:
                var0 = _closure1_slot2;
                var2 = var0.AGGRESSIVE;
                var0 = 604800000;
                var1 = arg0;
                if (!(var1 === var2)) {
                    _fun86153_ip = 32;
                    continue _fun86153
                }
            case 26:
                var0 = 259200000;
            case 32:
                return var0;
        }
    };
    var2.getNotificationNudgeCooldownMs = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useExperiencesExperiment;
        var1 = _closure1_slot3;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useMobileNotificationAppStartupNudgeExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getExperiencesExperiment;
        var1 = _closure1_slot3;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getMobileNotificationAppStartupNudgeExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useExperiencesExperiment;
        var1 = _closure1_slot4;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useMobileNotificationMessageHomePageNudgeExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getExperiencesExperiment;
        var1 = _closure1_slot4;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getMobileNotificationMessageHomePageNudgeExperiment = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useExperiencesExperiment;
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useMobileNotificationChannelNudgeExperiment = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getExperiencesExperiment;
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getMobileNotificationChannelNudgeExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 7551, 2]);