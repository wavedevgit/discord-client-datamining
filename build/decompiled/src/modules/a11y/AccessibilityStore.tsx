// modules/a11y/AccessibilityStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun14063: for (var _fun14063_ip = 0;;) switch (_fun14063_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun14063_ip = 74;
                continue _fun14063;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = ['fontScale'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.Accessibility;
    var _closure1_slot12 = var8;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.MESSAGE_GROUP_SPACING;
    var _closure1_slot13 = var3;
    var3 = var1.DEFAULT_COMPACT_SPACING;
    var _closure1_slot14 = var3;
    var1 = var1.DEFAULT_COZY_SPACING;
    var _closure1_slot15 = var1;
    var1 = {};
    var3 = 'default';
    var1.DEFAULT = var3;
    var3 = 'high';
    var1.HIGH = var3;
    var _closure1_slot16 = var1;
    var3 = {
        'fontSize': null,
        'zoom': null,
        'keyboardModeEnabled': false,
        'contrastMode': null,
        'colorblindMode': false,
        'lowContrastMode': false,
        'saturation': 1,
        'contrast': 1,
        'desaturateUserColors': false,
        'forcedColorsModalSeen': false,
        'keyboardNavigationExplainerModalSeen': false,
        'messageGroupSpacing': null,
        'systemPrefersReducedMotion': 'no-preference',
        'systemPrefersCrossfades': false,
        'prefersReducedMotion': 'auto',
        'systemForcedColors': 'none',
        'syncForcedColors': true,
        'systemPrefersContrast': 'no-preference',
        'alwaysShowLinkDecorations': false,
        'roleStyle': 'username',
        'displayNameStylesEnabled': true,
        'submitButtonEnabled': false,
        'syncProfileThemeWithUserTheme': false,
        'enableCustomCursor': true,
        'switchIconsEnabled': false
    };
    var9 = var8.FONT_SIZE_DEFAULT;
    var3.fontSize = var9;
    var8 = var8.ZOOM_DEFAULT;
    var3.zoom = var8;
    var8 = var1.DEFAULT;
    var3.contrastMode = var8;
    var _closure1_slot17 = var3;
    var _closure1_slot18 = var3;
    var3 = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.DeviceSettingsStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun14067: for (var _fun14067_ip = 0;;) switch (_fun14067_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun14067_ip = 69;
                        continue _fun14067
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun14067_ip = 105;
                    continue _fun14067;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun14068: for (var _fun14068_ip = 0;;) switch (_fun14068_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.waitFor;
                    var0 = _closure1_slot11;
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.waitFor;
                    var0 = _closure1_slot10;
                    var0 = var2.bind(var3)(var0);
                    var0 = {};
                    var7 = _closure1_slot17;
                    var8 = var0;
                    var2 = copyDataProperties(var8, var7);
                    var2 = null;
                    var5 = var2 != var4;
                    var3 = null;
                    if (!var5) {
                        _fun14068_ip = 66;
                        continue _fun14068
                    }
                case 63:
                    var3 = var4;
                case 66:
                    var8 = var0;
                    var7 = var3;
                    var3 = copyDataProperties(var8, var7);
                    _closure1_slot18 = var0;
                    var0 = global;
                    var4 = var0.isNaN;
                    var0 = _closure1_slot18;
                    var3 = var0.fontSize;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    if (!var3) {
                        _fun14068_ip = 128;
                        continue _fun14068
                    }
                case 108:
                    var4 = _closure1_slot18;
                    var3 = _closure1_slot12;
                    var3 = var3.FONT_SIZE_DEFAULT;
                    var4.fontSize = var3;
                case 128:
                    var5 = _closure1_slot13;
                    var4 = var5.indexOf;
                    var3 = _closure1_slot18;
                    var3 = var3.messageGroupSpacing;
                    var6 = var2 != var3;
                    var3 = -1;
                    if (!var6) {
                        _fun14068_ip = 171;
                        continue _fun14068
                    }
                case 161:
                    var6 = _closure1_slot18;
                    var3 = var6.messageGroupSpacing;
                case 171:
                    var4 = var4.bind(var5)(var3);
                    var3 = 0;
                    if (!(var4 < var3)) {
                        _fun14068_ip = 192;
                        continue _fun14068
                    }
                case 182:
                    var1 = _closure1_slot18;
                    var1.messageGroupSpacing = var2;
                case 192:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(37);
        var0[0] = var4;
        var4 = {};
        var6 = 'fontScale';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.fontSize;
            var0 = _closure1_slot12;
            var0 = var0.FONT_SIZE_DEFAULT;
            var1 = var1 / var0;
            var0 = 100;
            var0 = var1 * var0;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'fontSize';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.fontSize;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFontScaledUp';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.fontSize;
            var0 = _closure1_slot12;
            var0 = var0.FONT_SIZE_DEFAULT;
            var0 = var1 > var0;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFontScaledDown';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.fontSize;
            var0 = _closure1_slot12;
            var0 = var0.FONT_SIZE_DEFAULT;
            var0 = var1 < var0;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'fontScaleClass';
        var4.key = var6;
        var6 = function() {
            _fun14073: for (var _fun14073_ip = 0;;) switch (_fun14073_ip) {
                case 0:
                    var2 = this;
                    var1 = _closure1_slot19;
                    var0 = var2.fontSize;
                    var1 = var1[var0];
                    var0 = null;
                    var4 = var0 != var1;
                    var0 = '';
                    var3 = var0;
                    if (!var4) {
                        _fun14073_ip = 39;
                        continue _fun14073
                    }
                case 36:
                    var3 = var1;
                case 39:
                    var4 = var2.isFontScaledUp;
                    var1 = global;
                    if (var4) {
                        _fun14073_ip = 90;
                        continue _fun14073
                    }
                case 50:
                    var2 = var2.isFontScaledDown;
                    var4 = var1.HermesInternal;
                    var4 = var4.concat;
                    if (var2) {
                        _fun14073_ip = 77;
                        continue _fun14073
                    }
                case 70:
                    var0 = var4.bind(var0)(var3);
                    _fun14073_ip = 88;
                    continue _fun14073;
                case 77:
                    var2 = 'a11y-font-scaled-down ';
                    var0 = var4.bind(var2)(var3);
                case 88:
                    _fun14073_ip = 112;
                    continue _fun14073;
                case 90:
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'a11y-font-scaled-up ';
                    var0 = var2.bind(var1)(var3);
                case 112:
                    return var0;
            }
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'zoom';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.zoom;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isZoomedIn';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.zoom;
            var0 = _closure1_slot12;
            var0 = var0.ZOOM_DEFAULT;
            var0 = var1 > var0;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isZoomedOut';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.zoom;
            var0 = _closure1_slot12;
            var0 = var0.ZOOM_DEFAULT;
            var0 = var1 < var0;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'keyboardModeEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.keyboardModeEnabled;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'colorblindMode';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.colorblindMode;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'lowContrastMode';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.lowContrastMode;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'saturation';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.saturation;
            return var0;
        };
        var4.get = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'contrast';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.contrast;
            return var0;
        };
        var4.get = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'desaturateUserColors';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.desaturateUserColors;
            return var0;
        };
        var4.get = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'forcedColorsModalSeen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.forcedColorsModalSeen;
            return var0;
        };
        var4.get = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'keyboardNavigationExplainerModalSeen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.keyboardNavigationExplainerModalSeen;
            return var0;
        };
        var4.get = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'messageGroupSpacing';
        var4.key = var6;
        var6 = function() {
            _fun14085: for (var _fun14085_ip = 0;;) switch (_fun14085_ip) {
                case 0:
                    var0 = _closure1_slot18;
                    var2 = var0.messageGroupSpacing;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun14085_ip = 72;
                        continue _fun14085
                    }
                case 19:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.MessageDisplayCompact;
                    var0 = var2.getSetting;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun14085_ip = 66;
                        continue _fun14085
                    }
                case 60:
                    var0 = _closure1_slot15;
                    _fun14085_ip = 70;
                    continue _fun14085;
                case 66:
                    var0 = _closure1_slot14;
                case 70:
                    _fun14085_ip = 82;
                    continue _fun14085;
                case 72:
                    var1 = _closure1_slot18;
                    var0 = var1.messageGroupSpacing;
                case 82:
                    return var0;
            }
        };
        var4.get = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'isMessageGroupSpacingIncreased';
        var4.key = var6;
        var6 = function() {
            _fun14086: for (var _fun14086_ip = 0;;) switch (_fun14086_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.MessageDisplayCompact;
                    var1 = var2.getSetting;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun14086_ip = 50;
                        continue _fun14086
                    }
                case 44:
                    var1 = _closure1_slot15;
                    _fun14086_ip = 54;
                    continue _fun14086;
                case 50:
                    var1 = _closure1_slot14;
                case 54:
                    var0 = this;
                    var0 = var0.messageGroupSpacing;
                    var0 = var0 > var1;
                    return var0;
            }
        };
        var4.get = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'isMessageGroupSpacingDecreased';
        var4.key = var6;
        var6 = function() {
            _fun14087: for (var _fun14087_ip = 0;;) switch (_fun14087_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.MessageDisplayCompact;
                    var1 = var2.getSetting;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun14087_ip = 50;
                        continue _fun14087
                    }
                case 44:
                    var1 = _closure1_slot15;
                    _fun14087_ip = 54;
                    continue _fun14087;
                case 50:
                    var1 = _closure1_slot14;
                case 54:
                    var0 = this;
                    var0 = var0.messageGroupSpacing;
                    var0 = var0 < var1;
                    return var0;
            }
        };
        var4.get = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isSubmitButtonEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.submitButtonEnabled;
            return var0;
        };
        var4.get = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'syncProfileThemeWithUserTheme';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.syncProfileThemeWithUserTheme;
            return var0;
        };
        var4.get = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'systemPrefersReducedMotion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.systemPrefersReducedMotion;
            return var0;
        };
        var4.get = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'rawPrefersReducedMotion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.prefersReducedMotion;
            return var0;
        };
        var4.get = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'useReducedMotion';
        var4.key = var6;
        var6 = function() {
            _fun14092: for (var _fun14092_ip = 0;;) switch (_fun14092_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var1 = var1.active;
                    if (var1) {
                        _fun14092_ip = 68;
                        continue _fun14092
                    }
                case 16:
                    var1 = _closure1_slot18;
                    var2 = var1.prefersReducedMotion;
                    var1 = 'no-preference';
                    if (!(var1 !== var2)) {
                        _fun14092_ip = 64;
                        continue _fun14092
                    }
                case 36:
                    var1 = 'reduce';
                    if (!(var1 !== var2)) {
                        _fun14092_ip = 60;
                        continue _fun14092
                    }
                case 44:
                    var0 = _closure1_slot18;
                    var0 = var0.systemPrefersReducedMotion;
                    var0 = var1 === var0;
                    return var0;
                case 60:
                    var0 = true;
                    return var0;
                case 64:
                    var0 = false;
                    return var0;
                case 68:
                    var0 = true;
                    return var0;
            }
        };
        var4.get = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'systemForcedColors';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.systemForcedColors;
            return var0;
        };
        var4.get = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'syncForcedColors';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.syncForcedColors;
            return var0;
        };
        var4.get = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'useForcedColors';
        var4.key = var6;
        var6 = function() {
            _fun14095: for (var _fun14095_ip = 0;;) switch (_fun14095_ip) {
                case 0:
                    var0 = _closure1_slot18;
                    var0 = var0.syncForcedColors;
                    var0 = !var0;
                    if (var0) {
                        _fun14095_ip = 37;
                        continue _fun14095
                    }
                case 19:
                    var1 = _closure1_slot18;
                    var2 = var1.systemForcedColors;
                    var1 = 'active';
                    var0 = var1 !== var2;
                case 37:
                    var0 = !var0;
                    return var0;
            }
        };
        var4.get = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'systemPrefersContrast';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.systemPrefersContrast;
            return var0;
        };
        var4.get = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'systemPrefersCrossfades';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.systemPrefersCrossfades;
            return var0;
        };
        var4.get = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'alwaysShowLinkDecorations';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.alwaysShowLinkDecorations;
            return var0;
        };
        var4.get = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'enableCustomCursor';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.enableCustomCursor;
            return var0;
        };
        var4.get = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'roleStyle';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.roleStyle;
            return var0;
        };
        var4.get = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'displayNameStylesEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.displayNameStylesEnabled;
            return var0;
        };
        var4.get = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'isHighContrastModeEnabled';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var1 = var1.contrastMode;
            var0 = _closure1_slot16;
            var0 = var0.HIGH;
            var0 = var1 === var0;
            return var0;
        };
        var4.get = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'isSwitchIconsEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            var0 = var0.switchIconsEnabled;
            return var0;
        };
        var4.get = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var5;
        var0[36] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'AccessibilityStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(10);
    var9 = function() { // Environment: var4
        _fun14105: for (var _fun14105_ip = 0;;) switch (_fun14105_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 13;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var2 = var1.Storage;
                var1 = var2.get;
                var11 = 'a11yFontScale';
                var3 = var1.bind(var2)(var11);
                if (var3) {
                    _fun14105_ip = 53;
                    continue _fun14105
                }
            case 50:
                var3 = 100;
            case 53:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var2 = var1.Storage;
                var1 = var2.get;
                var10 = 'a11yZoom';
                var2 = var1.bind(var2)(var10);
                if (var2) {
                    _fun14105_ip = 105;
                    continue _fun14105
                }
            case 95:
                var1 = _closure1_slot12;
                var2 = var1.ZOOM_DEFAULT;
            case 105:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var4.bind(var6)(var1);
                var4 = var1.Storage;
                var1 = var4.get;
                var5 = 'a11yColorblindMode';
                var1 = var1.bind(var4)(var5);
                if (var1) {
                    _fun14105_ip = 149;
                    continue _fun14105
                }
            case 147:
                var1 = false;
            case 149:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = var0[var7];
                var8 = var4.bind(var6)(var8);
                var9 = var8.Storage;
                var8 = var9.remove;
                var8 = var8.bind(var9)(var11);
                var8 = var0[var7];
                var8 = var4.bind(var6)(var8);
                var9 = var8.Storage;
                var8 = var9.remove;
                var8 = var8.bind(var9)(var10);
                var0 = var0[var7];
                var0 = var4.bind(var6)(var0);
                var4 = var0.Storage;
                var0 = var4.remove;
                var0 = var0.bind(var4)(var5);
                var0 = {};
                var0.fontScale = var3;
                var0.zoom = var2;
                var0.colorblindMode = var1;
                var1 = false;
                var0.keyboardModeEnabled = var1;
                return var0;
        }
    };
    var3[0] = var9;
    var9 = function(arg0) { // Environment: var4
        _fun14106: for (var _fun14106_ip = 0;;) switch (_fun14106_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.fontScale;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = undefined;
                var1 = var2.bind(var0)(var4, var1);
                var0 = 82;
                if (!(var0 !== var3)) {
                    _fun14106_ip = 99;
                    continue _fun14106
                }
            case 35:
                var0 = 92;
                if (!(var0 !== var3)) {
                    _fun14106_ip = 94;
                    continue _fun14106
                }
            case 42:
                var4 = 16;
                var0 = 100;
                var2 = var4;
                if (!(var0 !== var3)) {
                    _fun14106_ip = 102;
                    continue _fun14106
                }
            case 55:
                var0 = 110;
                if (!(var0 !== var3)) {
                    _fun14106_ip = 89;
                    continue _fun14106
                }
            case 62:
                var0 = 125;
                if (!(var0 !== var3)) {
                    _fun14106_ip = 84;
                    continue _fun14106
                }
            case 69:
                var0 = 150;
                var2 = var4;
                if (!(var0 === var3)) {
                    _fun14106_ip = 102;
                    continue _fun14106
                }
            case 79:
                var2 = 24;
                _fun14106_ip = 102;
                continue _fun14106;
            case 84:
                var2 = 20;
                _fun14106_ip = 102;
                continue _fun14106;
            case 89:
                var2 = 18;
                _fun14106_ip = 102;
                continue _fun14106;
            case 94:
                var2 = 15;
                _fun14106_ip = 102;
                continue _fun14106;
            case 99:
                var2 = 12;
            case 102:
                var0 = {};
                var6 = var0;
                var5 = var1;
                var1 = copyDataProperties(var6, var5);
                var1 = 'fontSize';
                var0[var1] = var2;
                return var0;
        }
    };
    var3[1] = var9;
    var9 = function(arg0) { // Environment: var4
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = false;
        var1 = 'darkSidebar';
        var0[var1] = var2;
        return var0;
    };
    var3[2] = var9;
    var9 = function(arg0) { // Environment: var4
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = null;
        var1 = 'messageGroupSpacing';
        var0[var1] = var2;
        return var0;
    };
    var3[3] = var9;
    var9 = function(arg0) { // Environment: var4
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = 'no-preference';
        var1 = 'systemPrefersReducedMotion';
        var0[var1] = var2;
        var2 = 'auto';
        var1 = 'prefersReducedMotion';
        var0[var1] = var2;
        return var0;
    };
    var3[4] = var9;
    var9 = function(arg0) { // Environment: var4
        var1 = arg0;
        var0 = {};
        var6 = var0;
        var5 = var1;
        var2 = copyDataProperties(var6, var5);
        var2 = var1.saturation;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.LOW_SATURATION_THRESHOLD;
        var2 = var2 <= var1;
        var1 = 'alwaysShowLinkDecorations';
        var0[var1] = var2;
        return var0;
    };
    var3[5] = var9;
    var9 = function(arg0) { // Environment: var4
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = false;
        var1 = 'disableVoiceBackgrounds';
        var0[var1] = var2;
        return var0;
    };
    var3[6] = var9;
    var9 = function(arg0) { // Environment: var4
        _fun14112: for (var _fun14112_ip = 0;;) switch (_fun14112_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = var0;
                var1 = delete var1.disableVoiceBackgrounds;
            case 11: // try_end0
                _fun14112_ip = 15;
                continue _fun14112;
            case 13: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 15:
                return var0;
        }
    };
    var3[7] = var9;
    var9 = function(arg0) { // Environment: var4
        _fun14113: for (var _fun14113_ip = 0;;) switch (_fun14113_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = var0;
                var1 = delete var1.hideGuildTags;
            case 11: // try_end0
                _fun14113_ip = 15;
                continue _fun14113;
            case 13: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 15:
                return var0;
        }
    };
    var3[8] = var9;
    var9 = function(arg0) { // Environment: var4
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = true;
        var1 = 'enableCustomCursor';
        var0[var1] = var2;
        return var0;
    };
    var3[9] = var9;
    var8.migrations = var3;
    var3 = 15;
    var3 = var6[var3];
    var12 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        _fun14115: for (var _fun14115_ip = 0;;) switch (_fun14115_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.fontSize;
                var0 = _closure1_slot12;
                var3 = var0.FONT_SIZES;
                var0 = var3.indexOf;
                var3 = var0.bind(var3)(var1);
                var0 = 0;
                if (!(!(var3 >= var0))) {
                    _fun14115_ip = 49;
                    continue _fun14115
                }
            case 39:
                var0 = _closure1_slot12;
                var1 = var0.FONT_SIZE_DEFAULT;
            case 49:
                var0 = _closure1_slot12;
                var0 = var0.FONT_SIZE_MAX;
                if (!(!(var1 > var0))) {
                    _fun14115_ip = 118;
                    continue _fun14115
                }
            case 63:
                var0 = _closure1_slot12;
                var0 = var0.FONT_SIZE_MIN;
                if (!(!(var1 < var0))) {
                    _fun14115_ip = 118;
                    continue _fun14115
                }
            case 77:
                var0 = _closure1_slot18;
                var0 = var0.fontSize;
                if (!(var0 !== var1)) {
                    _fun14115_ip = 118;
                    continue _fun14115
                }
            case 91:
                var0 = {};
                var4 = _closure1_slot18;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                _closure1_slot18 = var0;
                var0.fontSize = var1;
                var0 = undefined;
                return var0;
            case 118:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SET_FONT_SIZE = var9;
    var9 = function arg0() {
        _fun14116: for (var _fun14116_ip = 0;;) switch (_fun14116_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.zoom;
                var2 = _closure1_slot12;
                var2 = var2.ZOOM_MIN;
                if (!(!(var3 < var2))) {
                    _fun14116_ip = 140;
                    continue _fun14116
                }
            case 26:
                var3 = var0.zoom;
                var2 = _closure1_slot12;
                var2 = var2.ZOOM_MAX;
                if (!(!(var3 > var2))) {
                    _fun14116_ip = 140;
                    continue _fun14116
                }
            case 46:
                var2 = _closure1_slot18;
                var3 = var2.zoom;
                var2 = var0.zoom;
                if (!(var3 !== var2)) {
                    _fun14116_ip = 140;
                    continue _fun14116
                }
            case 66:
                var2 = {};
                var4 = _closure1_slot18;
                var5 = var2;
                var3 = copyDataProperties(var5, var4);
                _closure1_slot18 = var2;
                var0 = var0.zoom;
                var2.zoom = var0;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.setZoomFactor;
                var1 = _closure1_slot18;
                var1 = var1.zoom;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 140:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SET_ZOOM = var9;
    var9 = function() {
        _fun14117: for (var _fun14117_ip = 0;;) switch (_fun14117_ip) {
            case 0:
                var1 = _closure1_slot18;
                var4 = var1.fontSize;
                var1 = _closure1_slot12;
                var3 = var1.FONT_SIZE_DEFAULT;
                var2 = _closure1_slot18;
                var2 = var2.zoom;
                var1 = var1.ZOOM_DEFAULT;
                if (!(var4 === var3)) {
                    _fun14117_ip = 51;
                    continue _fun14117
                }
            case 43:
                if (!(var2 === var1)) {
                    _fun14117_ip = 51;
                    continue _fun14117
                }
            case 47:
                var1 = false;
                return var1;
            case 51:
                var1 = {};
                var5 = _closure1_slot18;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                _closure1_slot18 = var1;
                var2 = var1.fontSize;
                var1 = _closure1_slot12;
                var1 = var1.FONT_SIZE_DEFAULT;
                if (!(var2 !== var1)) {
                    _fun14117_ip = 108;
                    continue _fun14117
                }
            case 88:
                var2 = _closure1_slot18;
                var1 = _closure1_slot12;
                var1 = var1.FONT_SIZE_DEFAULT;
                var2.fontSize = var1;
            case 108:
                var1 = _closure1_slot18;
                var2 = var1.zoom;
                var1 = _closure1_slot12;
                var1 = var1.ZOOM_DEFAULT;
                if (!(var2 !== var1)) {
                    _fun14117_ip = 195;
                    continue _fun14117
                }
            case 132:
                var2 = _closure1_slot18;
                var1 = _closure1_slot12;
                var1 = var1.ZOOM_DEFAULT;
                var2.zoom = var1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.setZoomFactor;
                var0 = _closure1_slot18;
                var0 = var0.zoom;
                var0 = var1.bind(var2)(var0);
            case 195:
                var0 = undefined;
                return var0;
        }
    };
    var3.ACCESSIBILITY_RESET_TO_DEFAULT = var9;
    var9 = function() {
        _fun14118: for (var _fun14118_ip = 0;;) switch (_fun14118_ip) {
            case 0:
                var1 = _closure1_slot18;
                var1 = var1.keyboardModeEnabled;
                if (var1) {
                    _fun14118_ip = 45;
                    continue _fun14118
                }
            case 16:
                var1 = {};
                var3 = _closure1_slot18;
                var4 = var1;
                var2 = copyDataProperties(var4, var3);
                _closure1_slot18 = var1;
                var0 = true;
                var1.keyboardModeEnabled = var0;
                var0 = undefined;
                return var0;
            case 45:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_KEYBOARD_MODE_ENABLE = var9;
    var9 = function() {
        _fun14119: for (var _fun14119_ip = 0;;) switch (_fun14119_ip) {
            case 0:
                var1 = _closure1_slot18;
                var1 = var1.keyboardModeEnabled;
                if (var1) {
                    _fun14119_ip = 20;
                    continue _fun14119
                }
            case 16:
                var1 = false;
                return var1;
            case 20:
                var1 = {};
                var3 = _closure1_slot18;
                var4 = var1;
                var2 = copyDataProperties(var4, var3);
                _closure1_slot18 = var1;
                var0 = false;
                var1.keyboardModeEnabled = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.ACCESSIBILITY_KEYBOARD_MODE_DISABLE = var9;
    var9 = function() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = var1.colorblindMode;
        var0 = !var0;
        var1.colorblindMode = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_COLORBLIND_TOGGLE = var9;
    var9 = function() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = var1.lowContrastMode;
        var0 = !var0;
        var1.lowContrastMode = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_LOW_CONTRAST_TOGGLE = var9;
    var9 = function arg0() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = arg0;
        var0 = var0.saturation;
        var1.saturation = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_SATURATION = var9;
    var9 = function() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = var1.desaturateUserColors;
        var0 = !var0;
        var1.desaturateUserColors = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_DESATURATE_ROLES_TOGGLE = var9;
    var9 = function arg0() {
        _fun14124: for (var _fun14124_ip = 0;;) switch (_fun14124_ip) {
            case 0:
                var1 = {};
                var5 = _closure1_slot18;
                var6 = var1;
                var2 = copyDataProperties(var6, var5);
                var2 = arg0;
                var2 = var2.systemForcedColors;
                var3 = null;
                var4 = var3 != var2;
                var3 = 'none';
                if (!var4) {
                    _fun14124_ip = 41;
                    continue _fun14124
                }
            case 38:
                var3 = var2;
            case 41:
                var2 = 'systemForcedColors';
                var1[var2] = var3;
                _closure1_slot18 = var1;
                var0 = true;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED = var9;
    var9 = function arg0() {
        _fun14125: for (var _fun14125_ip = 0;;) switch (_fun14125_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot18;
                var3 = var0.systemPrefersContrast;
                var0 = var2.systemPrefersContrast;
                if (!(var3 !== var0)) {
                    _fun14125_ip = 62;
                    continue _fun14125
                }
            case 26:
                var0 = {};
                var4 = _closure1_slot18;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.systemPrefersContrast;
                var2 = 'systemPrefersContrast';
                var0[var2] = var3;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            case 62:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED = var9;
    var9 = function arg0() {
        _fun14126: for (var _fun14126_ip = 0;;) switch (_fun14126_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot18;
                var3 = var0.systemPrefersReducedMotion;
                var0 = var2.systemPrefersReducedMotion;
                if (!(var3 !== var0)) {
                    _fun14126_ip = 62;
                    continue _fun14126
                }
            case 26:
                var0 = {};
                var4 = _closure1_slot18;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.systemPrefersReducedMotion;
                var2 = 'systemPrefersReducedMotion';
                var0[var2] = var3;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            case 62:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED = var9;
    var9 = function arg0() {
        _fun14127: for (var _fun14127_ip = 0;;) switch (_fun14127_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot18;
                var3 = var0.systemPrefersCrossfades;
                var0 = var2.systemPrefersCrossfades;
                if (!(var3 !== var0)) {
                    _fun14127_ip = 62;
                    continue _fun14127
                }
            case 26:
                var0 = {};
                var4 = _closure1_slot18;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.systemPrefersCrossfades;
                var2 = 'systemPrefersCrossfades';
                var0[var2] = var3;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            case 62:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED = var9;
    var9 = function arg0() {
        _fun14128: for (var _fun14128_ip = 0;;) switch (_fun14128_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot18;
                var3 = var0.prefersReducedMotion;
                var0 = var2.prefersReducedMotion;
                if (!(var3 !== var0)) {
                    _fun14128_ip = 62;
                    continue _fun14128
                }
            case 26:
                var0 = {};
                var4 = _closure1_slot18;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var3 = var2.prefersReducedMotion;
                var2 = 'prefersReducedMotion';
                var0[var2] = var3;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            case 62:
                var0 = false;
                return var0;
        }
    };
    var3.ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION = var9;
    var9 = function arg0() {
        var1 = _closure1_slot18;
        var0 = arg0;
        var0 = var0.syncForcedColors;
        var1.syncForcedColors = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_SYNC_FORCED_COLORS = var9;
    var9 = function arg0() {
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = arg0;
        var3 = var2.alwaysShowLinkDecorations;
        var2 = 'alwaysShowLinkDecorations';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS = var9;
    var9 = function arg0() {
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = arg0;
        var3 = var2.enableCustomCursor;
        var2 = 'enableCustomCursor';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR = var9;
    var9 = function arg0() {
        var1 = _closure1_slot18;
        var0 = arg0;
        var0 = var0.roleStyle;
        var1.roleStyle = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_ROLE_STYLE = var9;
    var9 = function arg0() {
        var1 = _closure1_slot18;
        var0 = arg0;
        var0 = var0.enabled;
        var1.displayNameStylesEnabled = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED = var9;
    var9 = function() {
        var1 = _closure1_slot18;
        var0 = true;
        var1.forcedColorsModalSeen = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN = var9;
    var9 = function() {
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = true;
        var2 = 'keyboardNavigationExplainerModalSeen';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.messageGroupSpacing;
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'messageGroupSpacing';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING = var9;
    var9 = function() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = var1.submitButtonEnabled;
        var0 = !var0;
        var1.submitButtonEnabled = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE = var9;
    var9 = function() {
        var1 = {};
        var3 = _closure1_slot18;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot18 = var1;
        var0 = var1.syncProfileThemeWithUserTheme;
        var0 = !var0;
        var1.syncProfileThemeWithUserTheme = var0;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.contrast;
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'contrast';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_CONTRAST = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.contrastMode;
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = 'contrastMode';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_CONTRAST_MODE = var9;
    var4 = function arg0() {
        var1 = {};
        var4 = _closure1_slot18;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = arg0;
        var3 = var2.switchIconsEnabled;
        var2 = 'switchIconsEnabled';
        var1[var2] = var3;
        _closure1_slot18 = var1;
        var0 = undefined;
        return var0;
    };
    var3.ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/AccessibilityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.AccessibilityContrastMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 1299, 1310, 660, 1346, 1347, 1348, 566, 587, 3197, 806, 2]);