// modules/overlay/OverlayV3Experiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var20 = require;
    var2 = exports;
    var21 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var21;
    var14 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var14;
    var12 = function arg0() {
        _fun95999: for (var _fun95999_ip = 0;;) switch (_fun95999_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95999_ip = 11;
                    continue _fun95999
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot5;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var12;
    var9 = function arg0() {
        _fun96000: for (var _fun96000_ip = 0;;) switch (_fun96000_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96000_ip = 11;
                    continue _fun96000
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot7;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var9;
    var7 = function arg0() {
        _fun96001: for (var _fun96001_ip = 0;;) switch (_fun96001_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96001_ip = 11;
                    continue _fun96001
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot8;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var7;
    var5 = function arg0() {
        _fun96002: for (var _fun96002_ip = 0;;) switch (_fun96002_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96002_ip = 11;
                    continue _fun96002
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot9;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var5;
    var3 = function arg0() {
        var2 = _closure1_slot10;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var3;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var26 = true;
    var4.value = var26;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var4);
    var10 = 0;
    var4 = var21[var10];
    var0 = undefined;
    var4 = var20.bind(var0)(var4);
    var15 = var4.CommonTriggerPoints;
    var6 = 1;
    var4 = var21[var6];
    var13 = var20.bind(var0)(var4);
    var11 = var13.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-06_overlay_render_timeout',
        'label': 'Overlay Render Timeout'
    };
    var4 = var15.CONNECTION_OPEN;
    var8.commonTriggerPoint = var4;
    var4 = {
        'shortTimeout': 8000,
        'longTimeout': 12000
    };
    var8.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'Shortest Timeouts (2s, 3s)'
    };
    var16 = {
        'shortTimeout': 2000,
        'longTimeout': 3000
    };
    var4.config = var16;
    var16 = new Array(3);
    var16[0] = var4;
    var17 = {
        'id': 2,
        'label': 'Medium Timeouts (4s, 6s)'
    };
    var4 = 2;
    var18 = {
        'shortTimeout': 4000,
        'longTimeout': 6000
    };
    var17.config = var18;
    var16[1] = var17;
    var17 = {
        'id': 3,
        'label': 'Longer Timeouts (16s, 24s)'
    };
    var18 = {
        'shortTimeout': 16000,
        'longTimeout': 24000
    };
    var17.config = var18;
    var16[2] = var17;
    var8.treatments = var16;
    var18 = var11.bind(var13)(var8);
    var _closure1_slot2 = var18;
    var8 = var21[var6];
    var13 = var20.bind(var0)(var8);
    var11 = var13.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-07_overlay_default_disable',
        'label': 'Overlay Default Disable'
    };
    var15 = var15.CONNECTION_OPEN;
    var8.commonTriggerPoint = var15;
    var15 = {};
    var25 = false;
    var15.enabled = var25;
    var8.defaultConfig = var15;
    var16 = {
        'id': 1,
        'label': 'Enable Default Disable Behavior'
    };
    var15 = {};
    var15.enabled = var26;
    var16.config = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var8.treatments = var15;
    var17 = var11.bind(var13)(var8);
    var _closure1_slot3 = var17;
    var16 = {};
    var16.GREEN_BUTTON_WITH_TEXT = var10;
    var8 = 'GREEN_BUTTON_WITH_TEXT';
    var16[var10] = var8;
    var16.GRAY_BUTTON_WITH_TEXT = var6;
    var8 = 'GRAY_BUTTON_WITH_TEXT';
    var16[var6] = var8;
    var16.SINGLE_ICON_BUTTON = var4;
    var8 = 'SINGLE_ICON_BUTTON';
    var16[var4] = var8;
    var8 = var21[var4];
    var11 = var20.bind(var0)(var8);
    var10 = var11.createApexExperiment;
    var8 = {
        'name': '2025-08-overlay-stream-watch-nudge',
        'kind': 'user'
    };
    var13 = {
        'enabled': false,
        'designVariant': null
    };
    var8.defaultConfig = var13;
    var13 = {};
    var15 = {};
    var15.enabled = var26;
    var19 = var16.GREEN_BUTTON_WITH_TEXT;
    var15.designVariant = var19;
    var13[1] = var15;
    var15 = {};
    var15.enabled = var26;
    var19 = var16.GRAY_BUTTON_WITH_TEXT;
    var15.designVariant = var19;
    var13[2] = var15;
    var15 = {};
    var15.enabled = var26;
    var19 = var16.SINGLE_ICON_BUTTON;
    var15.designVariant = var19;
    var13[3] = var15;
    var8.variations = var13;
    var15 = var10.bind(var11)(var8);
    var _closure1_slot4 = var15;
    var8 = var21[var6];
    var11 = var20.bind(var0)(var8);
    var10 = var11.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-10_overlay_v3_one_click_go_live',
        'label': 'Overlay V3 One Click Go Live'
    };
    var13 = {
        'oneClickGoLiveEnabled': false,
        'useStreamCtaCopy': false
    };
    var8.defaultConfig = var13;
    var19 = {
        'id': 1,
        'label': 'Use Stream CTA Copy'
    };
    var13 = {
        'oneClickGoLiveEnabled': false,
        'useStreamCtaCopy': true
    };
    var19.config = var13;
    var13 = new Array(2);
    var13[0] = var19;
    var19 = {
        'id': 2,
        'label': 'Enable One Click Go Live with Stream CTA Copy'
    };
    var22 = {
        'oneClickGoLiveEnabled': true,
        'useStreamCtaCopy': true
    };
    var19.config = var22;
    var13[1] = var19;
    var8.treatments = var13;
    var13 = var10.bind(var11)(var8);
    var _closure1_slot5 = var13;
    var8 = var21[var6];
    var11 = var20.bind(var0)(var8);
    var10 = var11.createExperiment;
    var8 = {
        'id': '2025-10_overlay_default_keybind',
        'label': 'Overlay Default Keybind',
        'kind': 'user'
    };
    var19 = {};
    var19.keybindOverride = var0;
    var8.defaultConfig = var19;
    var22 = {
        'id': 1,
        'label': 'Ctrl + Tab Keybind'
    };
    var19 = {};
    var23 = 'ctrl+tab';
    var19.keybindOverride = var23;
    var22.config = var19;
    var19 = new Array(3);
    var19[0] = var22;
    var22 = {
        'id': 2,
        'label': 'Alt + X Keybind'
    };
    var23 = {};
    var24 = 'alt+x';
    var23.keybindOverride = var24;
    var22.config = var23;
    var19[1] = var22;
    var22 = {
        'id': 3,
        'label': 'Ctrl + L Keybind'
    };
    var23 = {};
    var24 = 'ctrl+l';
    var23.keybindOverride = var24;
    var22.config = var23;
    var19[2] = var22;
    var8.treatments = var19;
    var11 = var10.bind(var11)(var8);
    var _closure1_slot6 = var11;
    var8 = var21[var6];
    var22 = var20.bind(var0)(var8);
    var10 = var22.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-10_overlay_negative_widget_testing',
        'label': 'Overlay Negative Widget Testing'
    };
    var19 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var8.defaultConfig = var19;
    var19 = {
        'id': 1,
        'label': 'Voice Widget Default Unpinned'
    };
    var23 = {
        'voiceWidgetDefaultUnpinned': true,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var19.config = var23;
    var23 = new Array(5);
    var23[0] = var19;
    var19 = {
        'id': 2,
        'label': 'Video Widget Default Unpinned'
    };
    var24 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': true,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var19.config = var24;
    var23[1] = var19;
    var19 = {
        'id': 3,
        'label': 'Disable Welcome Notification'
    };
    var24 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': true,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var19.config = var24;
    var23[2] = var19;
    var24 = {
        'id': 4,
        'label': 'Notifications Default Off'
    };
    var19 = 4;
    var27 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': true,
        'unlockedOnlyDefaultOverlay': false
    };
    var24.config = var27;
    var23[3] = var24;
    var24 = {
        'id': 5,
        'label': 'Unlocked Only Default Overlay'
    };
    var27 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': true
    };
    var24.config = var27;
    var23[4] = var24;
    var8.treatments = var23;
    var10 = var10.bind(var22)(var8);
    var _closure1_slot7 = var10;
    var8 = var21[var6];
    var23 = var20.bind(var0)(var8);
    var22 = var23.createExperiment;
    var8 = {
        'id': '2025-11_overlay_welcome_notification',
        'label': 'Overlay Welcome Notification',
        'kind': 'user'
    };
    var24 = {};
    var24.enabled = var25;
    var8.defaultConfig = var24;
    var27 = {
        'id': 1,
        'label': 'Modular Experience'
    };
    var24 = {};
    var24.enabled = var26;
    var27.config = var24;
    var24 = new Array(1);
    var24[0] = var27;
    var8.treatments = var24;
    var8 = var22.bind(var23)(var8);
    var _closure1_slot8 = var8;
    var6 = var21[var6];
    var23 = var20.bind(var0)(var6);
    var22 = var23.createExperiment;
    var6 = {
        'id': '2025-11_overlay_bug_reporter',
        'label': 'Overlay Bug Reporter',
        'kind': 'user'
    };
    var24 = {};
    var24.enabled = var25;
    var6.defaultConfig = var24;
    var25 = {
        'id': 1,
        'label': 'Enable Bug Reporter'
    };
    var24 = {};
    var24.enabled = var26;
    var25.config = var24;
    var24 = new Array(1);
    var24[0] = var25;
    var6.treatments = var24;
    var6 = var22.bind(var23)(var6);
    var _closure1_slot9 = var6;
    var4 = var21[var4];
    var23 = var20.bind(var0)(var4);
    var22 = var23.createApexExperiment;
    var4 = {
        'name': '2025-11-overlay-chat',
        'kind': 'user'
    };
    var24 = {
        'hasChat': false,
        'hasFriendList': false,
        'showNowPlayingForDifferentGames': false
    };
    var4.defaultConfig = var24;
    var24 = {};
    var25 = {
        'hasChat': true,
        'hasFriendList': false,
        'showNowPlayingForDifferentGames': false
    };
    var24[1] = var25;
    var25 = {
        'hasChat': true,
        'hasFriendList': true,
        'showNowPlayingForDifferentGames': false
    };
    var24[2] = var25;
    var25 = {
        'hasChat': true,
        'hasFriendList': true,
        'showNowPlayingForDifferentGames': true
    };
    var24[3] = var25;
    var4.variations = var24;
    var4 = var22.bind(var23)(var4);
    var _closure1_slot10 = var4;
    var19 = var21[var19];
    var21 = var20.bind(var0)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/overlay/OverlayV3Experiment.tsx';
    var19 = var20.bind(var21)(var19);
    var2.OverlayRenderTimeoutExperiment = var18;
    var18 = function arg0() {
        _fun96004: for (var _fun96004_ip = 0;;) switch (_fun96004_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96004_ip = 11;
                    continue _fun96004
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot2;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getOverlayRenderTimeout = var18;
    var2.OverlayDefaultDisableExperiment = var17;
    var17 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useOverlayDefaultDisable = var17;
    var17 = function arg0() {
        _fun96006: for (var _fun96006_ip = 0;;) switch (_fun96006_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96006_ip = 11;
                    continue _fun96006
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot3;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.getOverlayDefaultDisable = var17;
    var2.StreamWatchDesignVariations = var16;
    var2.OverlayStreamWatchNudgeExperiment = var15;
    var2.getOverlayStreamWatchNudgeConfig = var14;
    var14 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayStreamWatchNudge = var14;
    var2.OverlayV3OneClickGoLiveExperiment = var13;
    var2.getOverlayV3OneClickGoLive = var12;
    var2.OverlayDefaultKeybindOverrideExperiment = var11;
    var11 = function arg0() {
        _fun96008: for (var _fun96008_ip = 0;;) switch (_fun96008_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun96008_ip = 11;
                    continue _fun96008
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot6;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getOverlayDefaultKeybind = var11;
    var2.OverlayNegativeWidgetExperiment = var10;
    var10 = function arg0() {
        _fun96009: for (var _fun96009_ip = 0;;) switch (_fun96009_ip) {
            case 0:
                var4 = _closure1_slot13;
                var5 = undefined;
                var3 = arg0;
                var2 = false;
                var4 = var4.bind(var5)(var3, var2);
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = _closure1_slot7;
                var2 = var2.definition;
                var2 = var2.defaultConfig;
                var2 = var3.bind(var5)(var2, var4);
                if (var2) {
                    _fun96009_ip = 148;
                    continue _fun96009
                }
            case 71:
                var1 = _closure1_slot7;
                var1 = var1.definition;
                var2 = var1.treatments;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var0 = arg0;
                    var1 = var0.config;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = 'control';
                if (var2) {
                    _fun96009_ip = 146;
                    continue _fun96009
                }
            case 117:
                var3 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'treatment-';
                var0 = var2.bind(var1)(var3);
            case 146:
                return var0;
            case 148:
                var0 = 'control';
                return var0;
        }
    };
    var2.getOverlayNegativeWidgetExperimentBucket = var10;
    var2.getOverlayNegativeWidgetConfig = var9;
    var2.OverlayWelcomeNotificationExperiment = var8;
    var2.getOverlayWelcomeNotificationConfig = var7;
    var2.OverlayBugReporterExperiment = var6;
    var2.getOverlayBugReporterConfig = var5;
    var5 = function arg0() {
        var2 = _closure1_slot9;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useOverlayBugReporter = var5;
    var2.OverlayChatExperiment = var4;
    var2.getOverlayChatConfig = var3;
    var3 = function arg0() {
        var2 = _closure1_slot10;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayChat = var3;
    var1 = function() {
        var3 = _closure1_slot11;
        var0 = undefined;
        var2 = 'OVERLAY_INITIALIZED';
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot12;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot13;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot14;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot15;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot16;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.trackOverlayInitializedExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3120, 1301, 644, 2]);