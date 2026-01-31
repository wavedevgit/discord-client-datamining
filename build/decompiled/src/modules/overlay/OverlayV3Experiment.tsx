// modules/overlay/OverlayV3Experiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var19 = require;
    var2 = exports;
    var20 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var20;
    var12 = function arg0() {
        var2 = _closure1_slot5;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var12;
    var10 = function arg0() {
        _fun95318: for (var _fun95318_ip = 0;;) switch (_fun95318_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95318_ip = 11;
                    continue _fun95318
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
    var _closure1_slot12 = var10;
    var7 = function arg0() {
        _fun95319: for (var _fun95319_ip = 0;;) switch (_fun95319_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95319_ip = 11;
                    continue _fun95319
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
    var _closure1_slot13 = var7;
    var5 = function arg0() {
        _fun95320: for (var _fun95320_ip = 0;;) switch (_fun95320_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95320_ip = 11;
                    continue _fun95320
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
    var _closure1_slot14 = var5;
    var3 = function arg0() {
        _fun95321: for (var _fun95321_ip = 0;;) switch (_fun95321_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95321_ip = 11;
                    continue _fun95321
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot10;
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
    var _closure1_slot15 = var3;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var25 = true;
    var4.value = var25;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var4);
    var9 = 0;
    var4 = var20[var9];
    var0 = undefined;
    var4 = var19.bind(var0)(var4);
    var14 = var4.CommonTriggerPoints;
    var4 = 1;
    var6 = var20[var4];
    var11 = var19.bind(var0)(var6);
    var8 = var11.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2025-06_overlay_raf_manager',
        'label': 'Overlay RAF Manager'
    };
    var13 = var14.CONNECTION_OPEN;
    var6.commonTriggerPoint = var13;
    var13 = {};
    var24 = false;
    var13.enabled = var24;
    var6.defaultConfig = var13;
    var15 = {
        'id': 1,
        'label': 'Enable RAF Manager'
    };
    var13 = {};
    var13.enabled = var25;
    var15.config = var13;
    var13 = new Array(1);
    var13[0] = var15;
    var6.treatments = var13;
    var17 = var8.bind(var11)(var6);
    var _closure1_slot2 = var17;
    var6 = var20[var4];
    var13 = var19.bind(var0)(var6);
    var11 = var13.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-06_overlay_render_timeout',
        'label': 'Overlay Render Timeout'
    };
    var6 = var14.CONNECTION_OPEN;
    var8.commonTriggerPoint = var6;
    var6 = {
        'shortTimeout': 8000,
        'longTimeout': 12000
    };
    var8.defaultConfig = var6;
    var6 = {
        'id': 1,
        'label': 'Shortest Timeouts (2s, 3s)'
    };
    var15 = {
        'shortTimeout': 2000,
        'longTimeout': 3000
    };
    var6.config = var15;
    var15 = new Array(3);
    var15[0] = var6;
    var16 = {
        'id': 2,
        'label': 'Medium Timeouts (4s, 6s)'
    };
    var6 = 2;
    var18 = {
        'shortTimeout': 4000,
        'longTimeout': 6000
    };
    var16.config = var18;
    var15[1] = var16;
    var16 = {
        'id': 3,
        'label': 'Longer Timeouts (16s, 24s)'
    };
    var18 = {
        'shortTimeout': 16000,
        'longTimeout': 24000
    };
    var16.config = var18;
    var15[2] = var16;
    var8.treatments = var15;
    var16 = var11.bind(var13)(var8);
    var _closure1_slot3 = var16;
    var8 = var20[var4];
    var13 = var19.bind(var0)(var8);
    var11 = var13.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-07_overlay_default_disable',
        'label': 'Overlay Default Disable'
    };
    var14 = var14.CONNECTION_OPEN;
    var8.commonTriggerPoint = var14;
    var14 = {};
    var14.enabled = var24;
    var8.defaultConfig = var14;
    var15 = {
        'id': 1,
        'label': 'Enable Default Disable Behavior'
    };
    var14 = {};
    var14.enabled = var25;
    var15.config = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var8.treatments = var14;
    var15 = var11.bind(var13)(var8);
    var _closure1_slot4 = var15;
    var14 = {};
    var14.GREEN_BUTTON_WITH_TEXT = var9;
    var8 = 'GREEN_BUTTON_WITH_TEXT';
    var14[var9] = var8;
    var14.GRAY_BUTTON_WITH_TEXT = var4;
    var8 = 'GRAY_BUTTON_WITH_TEXT';
    var14[var4] = var8;
    var14.SINGLE_ICON_BUTTON = var6;
    var8 = 'SINGLE_ICON_BUTTON';
    var14[var6] = var8;
    var6 = var20[var6];
    var9 = var19.bind(var0)(var6);
    var8 = var9.createApexExperiment;
    var6 = {
        'name': '2025-08-overlay-stream-watch-nudge',
        'kind': 'user'
    };
    var11 = {
        'enabled': false,
        'designVariant': null
    };
    var6.defaultConfig = var11;
    var11 = {};
    var13 = {};
    var13.enabled = var25;
    var18 = var14.GREEN_BUTTON_WITH_TEXT;
    var13.designVariant = var18;
    var11[1] = var13;
    var13 = {};
    var13.enabled = var25;
    var18 = var14.GRAY_BUTTON_WITH_TEXT;
    var13.designVariant = var18;
    var11[2] = var13;
    var13 = {};
    var13.enabled = var25;
    var18 = var14.SINGLE_ICON_BUTTON;
    var13.designVariant = var18;
    var11[3] = var13;
    var6.variations = var11;
    var13 = var8.bind(var9)(var6);
    var _closure1_slot5 = var13;
    var6 = var20[var4];
    var9 = var19.bind(var0)(var6);
    var8 = var9.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2025-10_overlay_v3_one_click_go_live',
        'label': 'Overlay V3 One Click Go Live'
    };
    var11 = {
        'oneClickGoLiveEnabled': false,
        'useStreamCtaCopy': false
    };
    var6.defaultConfig = var11;
    var18 = {
        'id': 1,
        'label': 'Use Stream CTA Copy'
    };
    var11 = {
        'oneClickGoLiveEnabled': false,
        'useStreamCtaCopy': true
    };
    var18.config = var11;
    var11 = new Array(2);
    var11[0] = var18;
    var18 = {
        'id': 2,
        'label': 'Enable One Click Go Live with Stream CTA Copy'
    };
    var21 = {
        'oneClickGoLiveEnabled': true,
        'useStreamCtaCopy': true
    };
    var18.config = var21;
    var11[1] = var18;
    var6.treatments = var11;
    var11 = var8.bind(var9)(var6);
    var _closure1_slot6 = var11;
    var6 = var20[var4];
    var9 = var19.bind(var0)(var6);
    var8 = var9.createExperiment;
    var6 = {
        'id': '2025-10_overlay_default_keybind',
        'label': 'Overlay Default Keybind',
        'kind': 'user'
    };
    var18 = {};
    var18.keybindOverride = var0;
    var6.defaultConfig = var18;
    var21 = {
        'id': 1,
        'label': 'Ctrl + Tab Keybind'
    };
    var18 = {};
    var22 = 'ctrl+tab';
    var18.keybindOverride = var22;
    var21.config = var18;
    var18 = new Array(3);
    var18[0] = var21;
    var21 = {
        'id': 2,
        'label': 'Alt + X Keybind'
    };
    var22 = {};
    var23 = 'alt+x';
    var22.keybindOverride = var23;
    var21.config = var22;
    var18[1] = var21;
    var21 = {
        'id': 3,
        'label': 'Ctrl + L Keybind'
    };
    var22 = {};
    var23 = 'ctrl+l';
    var22.keybindOverride = var23;
    var21.config = var22;
    var18[2] = var21;
    var6.treatments = var18;
    var9 = var8.bind(var9)(var6);
    var _closure1_slot7 = var9;
    var6 = var20[var4];
    var21 = var19.bind(var0)(var6);
    var8 = var21.createExperiment;
    var6 = {
        'kind': 'user',
        'id': '2025-10_overlay_negative_widget_testing',
        'label': 'Overlay Negative Widget Testing'
    };
    var18 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var6.defaultConfig = var18;
    var18 = {
        'id': 1,
        'label': 'Voice Widget Default Unpinned'
    };
    var22 = {
        'voiceWidgetDefaultUnpinned': true,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var18.config = var22;
    var22 = new Array(5);
    var22[0] = var18;
    var18 = {
        'id': 2,
        'label': 'Video Widget Default Unpinned'
    };
    var23 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': true,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var18.config = var23;
    var22[1] = var18;
    var18 = {
        'id': 3,
        'label': 'Disable Welcome Notification'
    };
    var23 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': true,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var18.config = var23;
    var22[2] = var18;
    var23 = {
        'id': 4,
        'label': 'Notifications Default Off'
    };
    var18 = 4;
    var26 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': true,
        'unlockedOnlyDefaultOverlay': false
    };
    var23.config = var26;
    var22[3] = var23;
    var23 = {
        'id': 5,
        'label': 'Unlocked Only Default Overlay'
    };
    var26 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': true
    };
    var23.config = var26;
    var22[4] = var23;
    var6.treatments = var22;
    var8 = var8.bind(var21)(var6);
    var _closure1_slot8 = var8;
    var6 = var20[var4];
    var22 = var19.bind(var0)(var6);
    var21 = var22.createExperiment;
    var6 = {
        'id': '2025-11_overlay_welcome_notification',
        'label': 'Overlay Welcome Notification',
        'kind': 'user'
    };
    var23 = {};
    var23.enabled = var24;
    var6.defaultConfig = var23;
    var26 = {
        'id': 1,
        'label': 'Modular Experience'
    };
    var23 = {};
    var23.enabled = var25;
    var26.config = var23;
    var23 = new Array(1);
    var23[0] = var26;
    var6.treatments = var23;
    var6 = var21.bind(var22)(var6);
    var _closure1_slot9 = var6;
    var4 = var20[var4];
    var22 = var19.bind(var0)(var4);
    var21 = var22.createExperiment;
    var4 = {
        'id': '2025-11_overlay_bug_reporter',
        'label': 'Overlay Bug Reporter',
        'kind': 'user'
    };
    var23 = {};
    var23.enabled = var24;
    var4.defaultConfig = var23;
    var24 = {
        'id': 1,
        'label': 'Enable Bug Reporter'
    };
    var23 = {};
    var23.enabled = var25;
    var24.config = var23;
    var23 = new Array(1);
    var23[0] = var24;
    var4.treatments = var23;
    var4 = var21.bind(var22)(var4);
    var _closure1_slot10 = var4;
    var18 = var20[var18];
    var20 = var19.bind(var0)(var18);
    var19 = var20.fileFinishedImporting;
    var18 = 'modules/overlay/OverlayV3Experiment.tsx';
    var18 = var19.bind(var20)(var18);
    var2.OverlayRafManagerExperiment = var17;
    var17 = function arg0() {
        var2 = _closure1_slot2;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayRafManager = var17;
    var17 = function arg0() {
        _fun95323: for (var _fun95323_ip = 0;;) switch (_fun95323_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95323_ip = 11;
                    continue _fun95323
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
    var2.getUseOverlayRafManager = var17;
    var2.OverlayRenderTimeoutExperiment = var16;
    var16 = function arg0() {
        _fun95324: for (var _fun95324_ip = 0;;) switch (_fun95324_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95324_ip = 11;
                    continue _fun95324
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
                return var0;
        }
    };
    var2.getOverlayRenderTimeout = var16;
    var2.OverlayDefaultDisableExperiment = var15;
    var15 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useOverlayDefaultDisable = var15;
    var15 = function arg0() {
        _fun95326: for (var _fun95326_ip = 0;;) switch (_fun95326_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95326_ip = 11;
                    continue _fun95326
                }
            case 9:
                var4 = true;
            case 11:
                var3 = _closure1_slot4;
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
    var2.getOverlayDefaultDisable = var15;
    var2.StreamWatchDesignVariations = var14;
    var2.OverlayStreamWatchNudgeExperiment = var13;
    var2.getOverlayStreamWatchNudgeConfig = var12;
    var12 = function arg0() {
        var2 = _closure1_slot5;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayStreamWatchNudge = var12;
    var2.OverlayV3OneClickGoLiveExperiment = var11;
    var2.getOverlayV3OneClickGoLive = var10;
    var2.OverlayDefaultKeybindOverrideExperiment = var9;
    var9 = function arg0() {
        _fun95328: for (var _fun95328_ip = 0;;) switch (_fun95328_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95328_ip = 11;
                    continue _fun95328
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
    var2.getOverlayDefaultKeybind = var9;
    var2.OverlayNegativeWidgetExperiment = var8;
    var8 = function arg0() {
        _fun95329: for (var _fun95329_ip = 0;;) switch (_fun95329_ip) {
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
                var2 = _closure1_slot8;
                var2 = var2.definition;
                var2 = var2.defaultConfig;
                var2 = var3.bind(var5)(var2, var4);
                if (var2) {
                    _fun95329_ip = 148;
                    continue _fun95329
                }
            case 71:
                var1 = _closure1_slot8;
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
                    _fun95329_ip = 146;
                    continue _fun95329
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
    var2.getOverlayNegativeWidgetExperimentBucket = var8;
    var2.getOverlayNegativeWidgetConfig = var7;
    var2.OverlayWelcomeNotificationExperiment = var6;
    var2.getOverlayWelcomeNotificationConfig = var5;
    var2.OverlayBugReporterExperiment = var4;
    var2.getOverlayBugReporterConfig = var3;
    var3 = function arg0() {
        var2 = _closure1_slot10;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useOverlayBugReporter = var3;
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
        var1 = _closure1_slot15;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.trackOverlayInitializedExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3074, 1301, 644, 2]);