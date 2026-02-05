// modules/a11y/native/AccessibilitySystemFeatures.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun97790: for (var _fun97790_ip = 0;;) switch (_fun97790_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var0 = _closure1_slot8;
                if (var5) {
                    _fun97790_ip = 29;
                    continue _fun97790
                }
            case 16:
                var1 = ~var3;
                var1 = var0 & var1;
                _closure1_slot8 = var1;
                _fun97790_ip = 37;
                continue _fun97790;
            case 29:
                var0 = var0 | var3;
                _closure1_slot8 = var0;
            case 37:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var1 = var0[var6];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var1 = var1.A11Y_FEATURE_MAP;
                var4 = var1[var3];
                var1 = null;
                if (!(var1 != var4)) {
                    _fun97790_ip = 127;
                    continue _fun97790
                }
            case 75:
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 4;
                var3 = var1[var3];
                var3 = var7.bind(var0)(var3);
                var2 = _closure1_slot0;
                var1 = var1[var6];
                var1 = var2.bind(var0)(var1);
                var2 = var1.accessibilityPreferencesSharedValue;
                var1 = {};
                var1[var4] = var5;
                var1 = var3.bind(var0)(var2, var1);
            case 127:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var7 = var1.AccessibilityInfo;
    var _closure1_slot3 = var7;
    var7 = var1.Appearance;
    var _closure1_slot4 = var7;
    var1 = var1.AppState;
    var _closure1_slot5 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AccessibilityFeatureFlags;
    var _closure1_slot7 = var1;
    var1 = var1.NONE;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function() {
        var1 = this;
        var4 = _closure1_slot6;
        var3 = var4.addChangeListener;
        var2 = var1.handleAccessibilityStoreChanged;
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var5 = var3.addEventListener;
        var4 = var1.handleReduceMotionChanged;
        var2 = 'reduceMotionChanged';
        var2 = var5.bind(var3)(var2, var4);
        var2 = var3.isReduceMotionEnabled;
        var5 = var2.bind(var3)();
        var4 = var5.then;
        var2 = var1.handleReduceMotionChanged;
        var2 = var4.bind(var5)(var2);
        var5 = var3.addEventListener;
        var4 = var1.handleReduceTransparencyChanged;
        var2 = 'reduceTransparencyChanged';
        var2 = var5.bind(var3)(var2, var4);
        var2 = var3.isReduceTransparencyEnabled;
        var5 = var2.bind(var3)();
        var4 = var5.then;
        var2 = var1.handleReduceTransparencyChanged;
        var2 = var4.bind(var5)(var2);
        var5 = var3.addEventListener;
        var4 = var1.handleBoldTextChanged;
        var2 = 'boldTextChanged';
        var2 = var5.bind(var3)(var2, var4);
        var2 = var3.isBoldTextEnabled;
        var5 = var2.bind(var3)();
        var4 = var5.then;
        var2 = var1.handleBoldTextChanged;
        var2 = var4.bind(var5)(var2);
        var5 = var3.addEventListener;
        var4 = var1.handleGrayscaleChanged;
        var2 = 'grayscaleChanged';
        var2 = var5.bind(var3)(var2, var4);
        var2 = var3.isGrayscaleEnabled;
        var5 = var2.bind(var3)();
        var4 = var5.then;
        var2 = var1.handleGrayscaleChanged;
        var2 = var4.bind(var5)(var2);
        var5 = var3.addEventListener;
        var4 = var1.handleInvertColorsChanged;
        var2 = 'invertColorsChanged';
        var2 = var5.bind(var3)(var2, var4);
        var2 = var3.isInvertColorsEnabled;
        var4 = var2.bind(var3)();
        var3 = var4.then;
        var2 = var1.handleInvertColorsChanged;
        var2 = var3.bind(var4)(var2);
        var3 = var1.handlePreferredColorSchemeChanged;
        var2 = {};
        var4 = _closure1_slot4;
        var5 = var4.getColorScheme;
        var5 = var5.bind(var4)();
        var2.colorScheme = var5;
        var2 = var3.bind(var1)(var2);
        var3 = var4.addChangeListener;
        var2 = var1.handlePreferredColorSchemeChanged;
        var2 = var3.bind(var4)(var2);
        var5 = _closure1_slot5;
        var4 = var5.addEventListener;
        var3 = var1.handleAppStateChange;
        var2 = 'change';
        var2 = var4.bind(var5)(var2, var3);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.setSystemAccessibilityFeatures;
        var1 = var1.getActiveFeatures;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.init = var6;
    var6 = function() {
        var0 = _closure1_slot8;
        return var0;
    };
    var1.getActiveFeatures = var6;
    var6 = function arg0() {
        _fun97793: for (var _fun97793_ip = 0;;) switch (_fun97793_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot9;
                var0 = _closure1_slot7;
                var2 = var0.REDUCED_MOTION;
                var0 = undefined;
                var2 = var3.bind(var0)(var2, var4);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.systemPrefersReducedMotionChanged;
                var1 = 'no-preference';
                if (!var4) {
                    _fun97793_ip = 67;
                    continue _fun97793
                }
            case 63:
                var1 = 'reduce';
            case 67:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.handleReduceMotionChanged = var6;
    var6 = function arg0() {
        var3 = _closure1_slot9;
        var0 = _closure1_slot7;
        var2 = var0.REDUCED_TRANSPARENCY;
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.handleReduceTransparencyChanged = var6;
    var6 = function arg0() {
        var3 = _closure1_slot9;
        var0 = _closure1_slot7;
        var2 = var0.BOLD_TEXT;
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.handleBoldTextChanged = var6;
    var6 = function arg0() {
        var3 = _closure1_slot9;
        var0 = _closure1_slot7;
        var2 = var0.GRAYSCALE;
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.handleGrayscaleChanged = var6;
    var6 = function arg0() {
        var3 = _closure1_slot9;
        var0 = _closure1_slot7;
        var2 = var0.INVERT_COLORS;
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.handleInvertColorsChanged = var6;
    var6 = function arg0() {
        _fun97798: for (var _fun97798_ip = 0;;) switch (_fun97798_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.colorScheme;
                var0 = 'dark';
                if (!(var0 !== var1)) {
                    _fun97798_ip = 109;
                    continue _fun97798
                }
            case 17:
                var0 = 'light';
                if (!(var0 !== var1)) {
                    _fun97798_ip = 66;
                    continue _fun97798
                }
            case 25:
                var3 = _closure1_slot9;
                var0 = _closure1_slot7;
                var4 = var0.PREFERS_COLOR_SCHEME_DARK;
                var2 = undefined;
                var1 = false;
                var4 = var3.bind(var2)(var4, var1);
                var0 = var0.PREFERS_COLOR_SCHEME_LIGHT;
                var0 = var3.bind(var2)(var0, var1);
                _fun97798_ip = 150;
                continue _fun97798;
            case 66:
                var3 = _closure1_slot9;
                var0 = _closure1_slot7;
                var4 = var0.PREFERS_COLOR_SCHEME_DARK;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var4, var1);
                var1 = var0.PREFERS_COLOR_SCHEME_LIGHT;
                var0 = true;
                var0 = var3.bind(var2)(var1, var0);
                _fun97798_ip = 150;
                continue _fun97798;
            case 109:
                var3 = _closure1_slot9;
                var0 = _closure1_slot7;
                var4 = var0.PREFERS_COLOR_SCHEME_LIGHT;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var4, var1);
                var1 = var0.PREFERS_COLOR_SCHEME_DARK;
                var0 = true;
                var0 = var3.bind(var2)(var1, var0);
            case 150:
                var0 = undefined;
                return var0;
        }
    };
    var1.handlePreferredColorSchemeChanged = var6;
    var6 = function() {
        var3 = _closure1_slot9;
        var2 = _closure1_slot7;
        var5 = var2.REDUCED_MOTION;
        var1 = _closure1_slot6;
        var4 = var1.useReducedMotion;
        var0 = undefined;
        var4 = var3.bind(var0)(var5, var4);
        var5 = var2.REDUCED_MOTION_FROM_USER_SETTINGS;
        var6 = var1.rawPrefersReducedMotion;
        var4 = 'auto';
        var4 = var4 !== var6;
        var4 = var3.bind(var0)(var5, var4);
        var6 = var2.SATURATION_LEVEL_DECREASED;
        var5 = var1.saturation;
        var4 = 1;
        var5 = var5 < var4;
        var5 = var3.bind(var0)(var6, var5);
        var6 = var2.CONTRAST_LEVEL_DECREASED;
        var5 = var1.contrast;
        var5 = var5 < var4;
        var5 = var3.bind(var0)(var6, var5);
        var2 = var2.CONTRAST_LEVEL_INCREASED;
        var1 = var1.contrast;
        var1 = var1 > var4;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.handleAccessibilityStoreChanged = var6;
    var3 = function arg0() {
        _fun97800: for (var _fun97800_ip = 0;;) switch (_fun97800_ip) {
            case 0:
                var2 = 'active';
                var1 = arg0;
                if (!(var2 === var1)) {
                    _fun97800_ip = 74;
                    continue _fun97800
                }
            case 13:
                var2 = _closure1_slot3;
                var1 = var2.isReduceMotionEnabled;
                var4 = var1.bind(var2)();
                var3 = var4.then;
                var1 = function(arg0) { // Environment: var0
                    _fun97801: for (var _fun97801_ip = 0;;) switch (_fun97801_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot9;
                            var0 = _closure1_slot7;
                            var2 = var0.REDUCED_MOTION;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2, var4);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.systemPrefersReducedMotionChanged;
                            var1 = 'no-preference';
                            if (!var4) {
                                _fun97801_ip = 67;
                                continue _fun97801
                            }
                        case 63:
                            var1 = 'reduce';
                        case 67:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2.prefersCrossFadeTransitions;
                var2 = var1.bind(var2)();
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var4 = _closure1_slot9;
                    var0 = _closure1_slot7;
                    var2 = var0.REDUCED_MOTION_PREFERS_CROSSFADES;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2, var3);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.systemPrefersCrossfadesChanged;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var1.handleAppStateChange = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/AccessibilitySystemFeatures.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 12650, 12789, 5305, 795, 10952, 2]);