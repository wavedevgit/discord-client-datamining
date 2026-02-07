// modules/overlay/OverlayV3Experiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var21 = require;
    var2 = exports;
    var22 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var22;
    var14 = function arg0() {
        var2 = _closure1_slot5;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var14;
    var12 = function arg0() {
        _fun95896: for (var _fun95896_ip = 0;;) switch (_fun95896_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95896_ip = 11;
                    continue _fun95896
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
    var _closure1_slot13 = var12;
    var9 = function arg0() {
        _fun95897: for (var _fun95897_ip = 0;;) switch (_fun95897_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95897_ip = 11;
                    continue _fun95897
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
    var _closure1_slot14 = var9;
    var7 = function arg0() {
        _fun95898: for (var _fun95898_ip = 0;;) switch (_fun95898_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95898_ip = 11;
                    continue _fun95898
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
    var _closure1_slot15 = var7;
    var5 = function arg0() {
        _fun95899: for (var _fun95899_ip = 0;;) switch (_fun95899_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95899_ip = 11;
                    continue _fun95899
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
    var _closure1_slot16 = var5;
    var3 = function arg0() {
        var2 = _closure1_slot11;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var3;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var27 = true;
    var4.value = var27;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var4);
    var10 = 0;
    var4 = var22[var10];
    var0 = undefined;
    var4 = var21.bind(var0)(var4);
    var15 = var4.CommonTriggerPoints;
    var6 = 1;
    var4 = var22[var6];
    var11 = var21.bind(var0)(var4);
    var8 = var11.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-06_overlay_raf_manager',
        'label': 'Overlay RAF Manager'
    };
    var13 = var15.CONNECTION_OPEN;
    var4.commonTriggerPoint = var13;
    var13 = {};
    var26 = false;
    var13.enabled = var26;
    var4.defaultConfig = var13;
    var16 = {
        'id': 1,
        'label': 'Enable RAF Manager'
    };
    var13 = {};
    var13.enabled = var27;
    var16.config = var13;
    var13 = new Array(1);
    var13[0] = var16;
    var4.treatments = var13;
    var19 = var8.bind(var11)(var4);
    var _closure1_slot2 = var19;
    var4 = var22[var6];
    var13 = var21.bind(var0)(var4);
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
    var _closure1_slot3 = var18;
    var8 = var22[var6];
    var13 = var21.bind(var0)(var8);
    var11 = var13.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-07_overlay_default_disable',
        'label': 'Overlay Default Disable'
    };
    var15 = var15.CONNECTION_OPEN;
    var8.commonTriggerPoint = var15;
    var15 = {};
    var15.enabled = var26;
    var8.defaultConfig = var15;
    var16 = {
        'id': 1,
        'label': 'Enable Default Disable Behavior'
    };
    var15 = {};
    var15.enabled = var27;
    var16.config = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var8.treatments = var15;
    var17 = var11.bind(var13)(var8);
    var _closure1_slot4 = var17;
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
    var8 = var22[var4];
    var11 = var21.bind(var0)(var8);
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
    var15.enabled = var27;
    var20 = var16.GREEN_BUTTON_WITH_TEXT;
    var15.designVariant = var20;
    var13[1] = var15;
    var15 = {};
    var15.enabled = var27;
    var20 = var16.GRAY_BUTTON_WITH_TEXT;
    var15.designVariant = var20;
    var13[2] = var15;
    var15 = {};
    var15.enabled = var27;
    var20 = var16.SINGLE_ICON_BUTTON;
    var15.designVariant = var20;
    var13[3] = var15;
    var8.variations = var13;
    var15 = var10.bind(var11)(var8);
    var _closure1_slot5 = var15;
    var8 = var22[var6];
    var11 = var21.bind(var0)(var8);
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
    var20 = {
        'id': 1,
        'label': 'Use Stream CTA Copy'
    };
    var13 = {
        'oneClickGoLiveEnabled': false,
        'useStreamCtaCopy': true
    };
    var20.config = var13;
    var13 = new Array(2);
    var13[0] = var20;
    var20 = {
        'id': 2,
        'label': 'Enable One Click Go Live with Stream CTA Copy'
    };
    var23 = {
        'oneClickGoLiveEnabled': true,
        'useStreamCtaCopy': true
    };
    var20.config = var23;
    var13[1] = var20;
    var8.treatments = var13;
    var13 = var10.bind(var11)(var8);
    var _closure1_slot6 = var13;
    var8 = var22[var6];
    var11 = var21.bind(var0)(var8);
    var10 = var11.createExperiment;
    var8 = {
        'id': '2025-10_overlay_default_keybind',
        'label': 'Overlay Default Keybind',
        'kind': 'user'
    };
    var20 = {};
    var20.keybindOverride = var0;
    var8.defaultConfig = var20;
    var23 = {
        'id': 1,
        'label': 'Ctrl + Tab Keybind'
    };
    var20 = {};
    var24 = 'ctrl+tab';
    var20.keybindOverride = var24;
    var23.config = var20;
    var20 = new Array(3);
    var20[0] = var23;
    var23 = {
        'id': 2,
        'label': 'Alt + X Keybind'
    };
    var24 = {};
    var25 = 'alt+x';
    var24.keybindOverride = var25;
    var23.config = var24;
    var20[1] = var23;
    var23 = {
        'id': 3,
        'label': 'Ctrl + L Keybind'
    };
    var24 = {};
    var25 = 'ctrl+l';
    var24.keybindOverride = var25;
    var23.config = var24;
    var20[2] = var23;
    var8.treatments = var20;
    var11 = var10.bind(var11)(var8);
    var _closure1_slot7 = var11;
    var8 = var22[var6];
    var23 = var21.bind(var0)(var8);
    var10 = var23.createExperiment;
    var8 = {
        'kind': 'user',
        'id': '2025-10_overlay_negative_widget_testing',
        'label': 'Overlay Negative Widget Testing'
    };
    var20 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var8.defaultConfig = var20;
    var20 = {
        'id': 1,
        'label': 'Voice Widget Default Unpinned'
    };
    var24 = {
        'voiceWidgetDefaultUnpinned': true,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var20.config = var24;
    var24 = new Array(5);
    var24[0] = var20;
    var20 = {
        'id': 2,
        'label': 'Video Widget Default Unpinned'
    };
    var25 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': true,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var20.config = var25;
    var24[1] = var20;
    var20 = {
        'id': 3,
        'label': 'Disable Welcome Notification'
    };
    var25 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': true,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': false
    };
    var20.config = var25;
    var24[2] = var20;
    var25 = {
        'id': 4,
        'label': 'Notifications Default Off'
    };
    var20 = 4;
    var28 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': true,
        'unlockedOnlyDefaultOverlay': false
    };
    var25.config = var28;
    var24[3] = var25;
    var25 = {
        'id': 5,
        'label': 'Unlocked Only Default Overlay'
    };
    var28 = {
        'voiceWidgetDefaultUnpinned': false,
        'videoWidgetDefaultUnpinned': false,
        'disableWelcomeNotification': false,
        'notificationsDefaultOff': false,
        'unlockedOnlyDefaultOverlay': true
    };
    var25.config = var28;
    var24[4] = var25;
    var8.treatments = var24;
    var10 = var10.bind(var23)(var8);
    var _closure1_slot8 = var10;
    var8 = var22[var6];
    var24 = var21.bind(var0)(var8);
    var23 = var24.createExperiment;
    var8 = {
        'id': '2025-11_overlay_welcome_notification',
        'label': 'Overlay Welcome Notification',
        'kind': 'user'
    };
    var25 = {};
    var25.enabled = var26;
    var8.defaultConfig = var25;
    var28 = {
        'id': 1,
        'label': 'Modular Experience'
    };
    var25 = {};
    var25.enabled = var27;
    var28.config = var25;
    var25 = new Array(1);
    var25[0] = var28;
    var8.treatments = var25;
    var8 = var23.bind(var24)(var8);
    var _closure1_slot9 = var8;
    var6 = var22[var6];
    var24 = var21.bind(var0)(var6);
    var23 = var24.createExperiment;
    var6 = {
        'id': '2025-11_overlay_bug_reporter',
        'label': 'Overlay Bug Reporter',
        'kind': 'user'
    };
    var25 = {};
    var25.enabled = var26;
    var6.defaultConfig = var25;
    var26 = {
        'id': 1,
        'label': 'Enable Bug Reporter'
    };
    var25 = {};
    var25.enabled = var27;
    var26.config = var25;
    var25 = new Array(1);
    var25[0] = var26;
    var6.treatments = var25;
    var6 = var23.bind(var24)(var6);
    var _closure1_slot10 = var6;
    var4 = var22[var4];
    var24 = var21.bind(var0)(var4);
    var23 = var24.createApexExperiment;
    var4 = {
        'name': '2025-11-overlay-chat',
        'kind': 'user'
    };
    var25 = {
        'hasChat': false,
        'hasFriendList': false
    };
    var4.defaultConfig = var25;
    var25 = {};
    var26 = {
        'hasChat': true,
        'hasFriendList': false
    };
    var25[1] = var26;
    var26 = {
        'hasChat': true,
        'hasFriendList': true
    };
    var25[2] = var26;
    var4.variations = var25;
    var4 = var23.bind(var24)(var4);
    var _closure1_slot11 = var4;
    var20 = var22[var20];
    var22 = var21.bind(var0)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/overlay/OverlayV3Experiment.tsx';
    var20 = var21.bind(var22)(var20);
    var2.OverlayRafManagerExperiment = var19;
    var19 = function arg0() {
        var2 = _closure1_slot2;
        var1 = var2.useExperiment;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayRafManager = var19;
    var19 = function arg0() {
        _fun95902: for (var _fun95902_ip = 0;;) switch (_fun95902_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95902_ip = 11;
                    continue _fun95902
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
    var2.getUseOverlayRafManager = var19;
    var2.OverlayRenderTimeoutExperiment = var18;
    var18 = function arg0() {
        _fun95903: for (var _fun95903_ip = 0;;) switch (_fun95903_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95903_ip = 11;
                    continue _fun95903
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
    var2.getOverlayRenderTimeout = var18;
    var2.OverlayDefaultDisableExperiment = var17;
    var17 = function arg0() {
        var2 = _closure1_slot4;
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
        _fun95905: for (var _fun95905_ip = 0;;) switch (_fun95905_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95905_ip = 11;
                    continue _fun95905
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
    var2.getOverlayDefaultDisable = var17;
    var2.StreamWatchDesignVariations = var16;
    var2.OverlayStreamWatchNudgeExperiment = var15;
    var2.getOverlayStreamWatchNudgeConfig = var14;
    var14 = function arg0() {
        var2 = _closure1_slot5;
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
        _fun95907: for (var _fun95907_ip = 0;;) switch (_fun95907_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun95907_ip = 11;
                    continue _fun95907
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
    var2.getOverlayDefaultKeybind = var11;
    var2.OverlayNegativeWidgetExperiment = var10;
    var10 = function arg0() {
        _fun95908: for (var _fun95908_ip = 0;;) switch (_fun95908_ip) {
            case 0:
                var4 = _closure1_slot14;
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
                    _fun95908_ip = 148;
                    continue _fun95908
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
                    _fun95908_ip = 146;
                    continue _fun95908
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
        var2 = _closure1_slot10;
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
        var2 = _closure1_slot11;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useOverlayChat = var3;
    var1 = function() {
        var3 = _closure1_slot12;
        var0 = undefined;
        var2 = 'OVERLAY_INITIALIZED';
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot13;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot14;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot15;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot16;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot17;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.trackOverlayInitializedExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3117, 1301, 644, 2]);