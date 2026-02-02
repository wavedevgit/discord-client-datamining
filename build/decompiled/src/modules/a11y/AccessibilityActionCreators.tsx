// modules/a11y/AccessibilityActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SettingsOverrideReasonKeys;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StickerAnimationSettings;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/AccessibilityActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_FONT_SIZE';
        var1.type = var4;
        var4 = arg0;
        var1.fontSize = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setFontSize = var3;
    var3 = function() {
        _fun84801: for (var _fun84801_ip = 0;;) switch (_fun84801_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun84801_ip = 11;
                    continue _fun84801
                }
            case 9:
                var4 = null;
            case 11:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING';
                var1.type = var5;
                var1.messageGroupSpacing = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setMessageGroupSpacing = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_ZOOM';
        var1.type = var4;
        var4 = arg0;
        var1.zoom = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setZoom = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_RESET_TO_DEFAULT';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetToDefault = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 4;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.dispatch;
        var2 = {};
        var7 = 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE';
        var2.type = var7;
        var2 = var5.bind(var6)(var2);
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.KEYBOARD_MODE_TOGGLED;
        var1 = {};
        var5 = true;
        var1.enabled = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.enableKeyboardMode = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 4;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.dispatch;
        var2 = {};
        var7 = 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE';
        var2.type = var7;
        var2 = var5.bind(var6)(var2);
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.KEYBOARD_MODE_TOGGLED;
        var1 = {};
        var5 = false;
        var1.enabled = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.disableKeyboardMode = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleDesaturateUserColors = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_COLORBLIND_TOGGLE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleColorblindMode = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleDarkSidebar = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.forcedColorsModalSeen = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.keyboardNavigationExplainerModalSeen = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED';
        var1.type = var4;
        var4 = arg0;
        var1.systemPrefersReducedMotion = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.systemPrefersReducedMotionChanged = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED';
        var1.type = var4;
        var4 = arg0;
        var1.systemPrefersCrossfades = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.systemPrefersCrossfadesChanged = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_LOW_CONTRAST_TOGGLE';
        var1.type = var4;
        var4 = arg0;
        var1.lowContrastMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setLowContrastMode = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_SATURATION';
        var1.type = var4;
        var4 = arg0;
        var1.saturation = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSaturation = var3;
    var3 = function arg0() {
        _fun84815: for (var _fun84815_ip = 0;;) switch (_fun84815_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.useReducedMotion;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
                var4.type = var7;
                var7 = arg0;
                var4.prefersReducedMotion = var7;
                var4 = var5.bind(var6)(var4);
                var3 = var3.useReducedMotion;
                if (var2) {
                    _fun84815_ip = 192;
                    continue _fun84815
                }
            case 72:
                if (!var3) {
                    _fun84815_ip = 192;
                    continue _fun84815
                }
            case 75:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.applySettingsOverride;
                var4 = {};
                var7 = {};
                var9 = false;
                var7.value = var9;
                var8 = _closure1_slot4;
                var10 = var8.REDUCED_MOTION;
                var7.reasonKey = var10;
                var4.gifAutoPlay = var7;
                var7 = {};
                var7.value = var9;
                var9 = var8.REDUCED_MOTION;
                var7.reasonKey = var9;
                var4.animateEmoji = var7;
                var7 = {};
                var9 = _closure1_slot5;
                var9 = var9.ANIMATE_ON_INTERACTION;
                var7.value = var9;
                var8 = var8.REDUCED_MOTION_STICKERS;
                var7.reasonKey = var8;
                var4.animateStickers = var7;
                var4 = var5.bind(var6)(var4);
                _fun84815_ip = 246;
                continue _fun84815;
            case 192:
                if (!var2) {
                    _fun84815_ip = 198;
                    continue _fun84815
                }
            case 195:
                var2 = !var3;
            case 198:
                if (!var2) {
                    _fun84815_ip = 246;
                    continue _fun84815
                }
            case 201:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var4 = var5.clearSettingsOverride;
                var3 = 'gifAutoPlay';
                var2 = 'animateEmoji';
                var1 = 'animateStickers';
                var1 = var4.bind(var5)(var3, var2, var1);
            case 246:
                return var0;
        }
    };
    var2.setPrefersReducedMotion = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS';
        var1.type = var4;
        var4 = arg0;
        var1.syncForcedColors = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSyncForcedColors = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED';
        var1.type = var4;
        var4 = arg0;
        var1.systemForcedColors = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.systemColorPreferencesChanged = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED';
        var1.type = var4;
        var4 = arg0;
        var1.systemPrefersContrast = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.systemPrefersContrastChanged = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS';
        var1.type = var4;
        var4 = arg0;
        var1.alwaysShowLinkDecorations = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setAlwaysShowLinkDecorations = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR';
        var1.type = var4;
        var4 = arg0;
        var1.enableCustomCursor = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setEnableCustomCursor = var3;
    var3 = function arg0() {
        var5 = arg0;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 4;
        var2 = var4[var0];
        var0 = undefined;
        var7 = var3.bind(var0)(var2);
        var6 = var7.dispatch;
        var2 = {};
        var8 = 'ACCESSIBILITY_SET_ROLE_STYLE';
        var2.type = var8;
        var2.roleStyle = var5;
        var2 = var6.bind(var7)(var2);
        var2 = 5;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.ROLE_STYLE_SETTING_UPDATED;
        var1 = {};
        var1.role_style = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setRoleStyle = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED';
        var1.type = var4;
        var4 = arg0;
        var1.enabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setDisplayNameStylesEnabled = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleSubmitButton = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleSyncProfileThemeWithUserTheme = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_CONTRAST';
        var1.type = var4;
        var4 = arg0;
        var1.contrast = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setContrast = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_CONTRAST_MODE';
        var1.type = var4;
        var4 = arg0;
        var1.contrastMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setContrastMode = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED';
        var1.type = var4;
        var4 = arg0;
        var1.switchIconsEnabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSwitchIconsEnabled = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UNSYNCED_USER_SETTINGS_UPDATE';
        var1.type = var4;
        var4 = {};
        var5 = arg0;
        var4.hdrDynamicRange = var5;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setHDRDynamicRange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 660, 1351, 1352, 806, 795, 7588, 2]);