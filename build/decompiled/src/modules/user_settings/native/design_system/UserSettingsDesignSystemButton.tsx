// modules/user_settings/native/design_system/UserSettingsDesignSystemButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun88072: for (var _fun88072_ip = 0;;) switch (_fun88072_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.variant;
                var11 = var1.text;
                var10 = var1.grow;
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 5;
                var1 = var17[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var4 = var2.buttonScale;
                var6 = var2.buttonSize;
                var1 = var2.enableLoadingState;
                var _closure2_slot0 = var1;
                var5 = var2.iconPosition;
                var8 = var2.showIcon;
                var16 = var2.showDisabled;
                var13 = _closure1_slot4;
                var2 = var13.useRef;
                var9 = null;
                var2 = var2.bind(var13)(var9);
                var _closure2_slot1 = var2;
                var14 = _closure1_slot4;
                var13 = var14.useState;
                var2 = false;
                var14 = var13.bind(var14)(var2);
                var13 = _closure1_slot3;
                var2 = 2;
                var14 = var13.bind(var3)(var14, var2);
                var2 = 0;
                var13 = var14[var2];
                var2 = 1;
                var2 = var14[var2];
                var _closure2_slot2 = var2;
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun88073: for (var _fun88073_ip = 0;;) switch (_fun88073_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun88073_ip = 101;
                                continue _fun88073
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88073_ip = 49;
                                continue _fun88073
                            }
                        case 25:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 49:
                            var2 = _closure2_slot2;
                            var4 = undefined;
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure2_slot1;
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 5000;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.current = var0;
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var14.bind(var15)(var1, var2);
                var14 = _closure1_slot4;
                var2 = var14.useCallback;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = function() { // Environment: var1
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 5000;
                    var1 = var4.bind(var0)(var3, var1);
                    var2.current = var1;
                    return var0;
                };
                var0 = new Array(0);
                var14 = var2.bind(var14)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var0 = 6;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Button;
                var0 = {};
                var0.disabled = var16;
                var0.onPress = var15;
                var0.onLongPress = var14;
                var0.loading = var13;
                var0.variant = var12;
                if (!(var9 != var11)) {
                    _fun88072_ip = 269;
                    continue _fun88072
                }
            case 266:
                var12 = var11;
            case 269:
                var13 = var9 != var12;
                var11 = '';
                if (!var13) {
                    _fun88072_ip = 283;
                    continue _fun88072
                }
            case 280:
                var11 = var12;
            case 283:
                var0.text = var11;
                var9 = var9 != var10;
                if (!var9) {
                    _fun88072_ip = 297;
                    continue _fun88072
                }
            case 294:
                var9 = var10;
            case 297:
                var0.grow = var9;
                var0.size = var6;
                var6 = undefined;
                if (!var8) {
                    _fun88072_ip = 331;
                    continue _fun88072
                }
            case 311:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 7;
                var7 = var9[var7];
                var6 = var8.bind(var3)(var7);
            case 331:
                var0.icon = var6;
                var0.iconPosition = var5;
                var0.scaleAmountInPx = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun88077: for (var _fun88077_ip = 0;;) switch (_fun88077_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.variant;
                var10 = var0.showLabel;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun88077_ip = 24;
                    continue _fun88077
                }
            case 22:
                var10 = false;
            case 24:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 5;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var0 = var2.buttonSize;
                var1 = var2.enableLoadingState;
                _closure2_slot0 = var1;
                var11 = var2.showDisabled;
                var4 = _closure1_slot4;
                var2 = var4.useRef;
                var8 = null;
                var2 = var2.bind(var4)(var8);
                _closure2_slot1 = var2;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var2 = false;
                var7 = var4.bind(var7)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var4 = var4.bind(var3)(var7, var2);
                var2 = 0;
                var7 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                _closure2_slot2 = var2;
                var13 = _closure1_slot4;
                var4 = var13.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    _fun88078: for (var _fun88078_ip = 0;;) switch (_fun88078_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun88078_ip = 101;
                                continue _fun88078
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88078_ip = 49;
                                continue _fun88078
                            }
                        case 25:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 49:
                            var2 = _closure2_slot2;
                            var4 = undefined;
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure2_slot1;
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 5000;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.current = var0;
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var13)(var1, var2);
                _closure2_slot3 = var1;
                var2 = _closure1_slot9;
                var4 = _closure1_slot0;
                var1 = 8;
                var1 = var12[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.IconButton;
                var4 = {};
                var4.disabled = var11;
                if (var10) {
                    _fun88077_ip = 295;
                    continue _fun88077
                }
            case 224:
                var10 = function() {
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var10;
                var11 = var8 != var6;
                var10 = '';
                if (!var11) {
                    _fun88077_ip = 249;
                    continue _fun88077
                }
            case 246:
                var10 = var6;
            case 249:
                var4.accessibilityLabel = var10;
                var4.loading = var7;
                var4.variant = var6;
                var4.size = var0;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 9;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var4.icon = var0;
                var0 = var4;
                _fun88077_ip = 367;
                continue _fun88077;
            case 295:
                var9 = function() {
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var9;
                var9 = var8 != var6;
                var8 = '';
                if (!var9) {
                    _fun88077_ip = 320;
                    continue _fun88077
                }
            case 317:
                var8 = var6;
            case 320:
                var4.label = var8;
                var8 = true;
                var4.grow = var8;
                var4.loading = var7;
                var4.variant = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var4.icon = var5;
                var0 = var4;
            case 367:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun88082: for (var _fun88082_ip = 0;;) switch (_fun88082_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.image;
                var7 = var0.label;
                var9 = var0.showLabel;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun88082_ip = 30;
                    continue _fun88082
                }
            case 28:
                var9 = false;
            case 30:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 5;
                var0 = var11[var0];
                var0 = var2.bind(var3)(var0);
                var4 = var0.bind(var3)();
                var0 = var4.buttonSize;
                var2 = var4.enableLoadingState;
                _closure2_slot0 = var2;
                var10 = var4.showDisabled;
                var12 = _closure1_slot4;
                var6 = var12.useRef;
                var4 = null;
                var4 = var6.bind(var12)(var4);
                _closure2_slot1 = var4;
                var12 = _closure1_slot4;
                var6 = var12.useState;
                var4 = false;
                var12 = var6.bind(var12)(var4);
                var6 = _closure1_slot3;
                var4 = 2;
                var12 = var6.bind(var3)(var12, var4);
                var4 = 0;
                var6 = var12[var4];
                var4 = 1;
                var4 = var12[var4];
                _closure2_slot2 = var4;
                var13 = _closure1_slot4;
                var12 = var13.useCallback;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var8
                    _fun88083: for (var _fun88083_ip = 0;;) switch (_fun88083_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun88083_ip = 101;
                                continue _fun88083
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88083_ip = 49;
                                continue _fun88083
                            }
                        case 25:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 49:
                            var2 = _closure2_slot2;
                            var4 = undefined;
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure2_slot1;
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 5000;
                            var0 = var3.bind(var4)(var2, var0);
                            var1.current = var0;
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var12.bind(var13)(var2, var4);
                _closure2_slot3 = var2;
                var2 = _closure1_slot9;
                var4 = _closure1_slot0;
                var1 = 10;
                var1 = var11[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.ImageButton;
                var4 = {};
                var4.disabled = var10;
                if (var9) {
                    _fun88082_ip = 264;
                    continue _fun88082
                }
            case 230:
                var9 = function() {
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var9;
                var4.accessibilityLabel = var7;
                var4.loading = var6;
                var4.size = var0;
                var4.image = var5;
                var0 = var4;
                _fun88082_ip = 299;
                continue _fun88082;
            case 264:
                var8 = function() {
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var4.onPress = var8;
                var4.label = var7;
                var7 = true;
                var4.grow = var7;
                var4.loading = var6;
                var4.image = var5;
                var0 = var4;
            case 299:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = false;
        var5 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var8 = var2[var1];
        var _closure2_slot0 = var8;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 11;
        var2 = var6[var2];
        var7 = var1.bind(var3)(var2);
        var5 = var7.useToggleButtonProps;
        var2 = {};
        var9 = {};
        var10 = 'Unfollow';
        var9.text = var10;
        var11 = _closure1_slot1;
        var10 = 12;
        var10 = var6[var10];
        var10 = var11.bind(var3)(var10);
        var9.icon = var10;
        var2.on = var9;
        var9 = {};
        var10 = 'Follow';
        var9.text = var10;
        var10 = 13;
        var10 = var6[var10];
        var10 = var11.bind(var3)(var10);
        var9.icon = var10;
        var2.off = var9;
        var12 = var5.bind(var7)(var2, var8);
        var2 = _closure1_slot9;
        var0 = 6;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {};
        var13 = var0;
        var5 = copyDataProperties(var13, var12);
        var5 = function() {
            var2 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1 = !var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = 'onPress';
        var0[var4] = var5;
        var5 = 'secondary';
        var4 = 'variant';
        var0[var4] = var5;
        var5 = 'md';
        var4 = 'size';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = false;
        var5 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var8 = var2[var1];
        var _closure2_slot0 = var8;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 11;
        var2 = var6[var2];
        var7 = var1.bind(var3)(var2);
        var5 = var7.useToggleIconButtonProps;
        var2 = {};
        var9 = {
            'variant': 'destructive',
            'accessibilityLabel': 'Mute'
        };
        var11 = _closure1_slot1;
        var10 = 14;
        var12 = var6[var10];
        var12 = var11.bind(var3)(var12);
        var9.icon = var12;
        var2.on = var9;
        var9 = {
            'variant': 'secondary',
            'accessibilityLabel': 'Mute'
        };
        var10 = var6[var10];
        var10 = var11.bind(var3)(var10);
        var9.icon = var10;
        var2.off = var9;
        var13 = var5.bind(var7)(var2, var8);
        var2 = _closure1_slot9;
        var0 = 8;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {};
        var14 = var0;
        var5 = copyDataProperties(var14, var13);
        var5 = function() {
            var2 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1 = !var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = 'onPress';
        var0[var4] = var5;
        var5 = 'md';
        var4 = 'size';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LIGHT_BACKGROUND_GRADIENT_PRESETS;
    var _closure1_slot7 = var6;
    var3 = var3.DARK_BACKGROUND_GRADIENT_PRESETS;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = ['primary', 'secondary', 'tertiary'];
    var _closure1_slot12 = var3;
    var3 = ['primary-overlay', 'secondary-overlay'];
    var _closure1_slot13 = var3;
    var3 = ['destructive', 'active'];
    var _closure1_slot14 = var3;
    var3 = ['experimental_premium-primary', 'experimental_premium-secondary'];
    var _closure1_slot15 = var3;
    var3 = 15;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingVertical = var11;
    var3.buttonContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BG_GRADIENT_CHROMA_GLOW_1;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_48;
    var8.paddingVertical = var9;
    var3.overlayButtonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot16;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var _closure2_slot0 = var8;
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var0 = 17;
        var0 = var13[var0];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useNavigation;
        var2 = var0.bind(var1)();
        var7 = _closure1_slot4;
        var4 = var7.useCallback;
        var1 = function() { // Environment: var10
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 18;
            var3 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.openLazy;
            var5 = _closure1_slot0;
            var2 = 20;
            var2 = var1[var2];
            var5 = var5.bind(var0)(var2);
            var2 = 19;
            var2 = var1[var2];
            var1 = var1.paths;
            var2 = var5.bind(var0)(var2, var1);
            var1 = 'UserSettingsDesignSystemButtonActionSheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var0 = var4.bind(var7)(var1, var0);
        var _closure2_slot1 = var0;
        var1 = var2.setOptions;
        var0 = {};
        var4 = function() {
            var3 = _closure1_slot9;
            var1 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 8;
            var0 = var6[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.IconButton;
            var0 = {
                'onPress': null,
                'icon': null,
                'size': 'sm',
                'variant': 'secondary',
                'accessibilityLabel': 'Settings'
            };
            var5 = _closure2_slot1;
            var0.onPress = var5;
            var5 = _closure1_slot1;
            var4 = 9;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var0.icon = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.headerRight = var4;
        var0 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot11;
        var0 = {};
        var14 = _closure1_slot9;
        var7 = _closure1_slot6;
        var4 = {};
        var20 = 21;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var16 = var9.Stack;
        var15 = {};
        var19 = 24;
        var15.spacing = var19;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var18 = _closure1_slot9;
        var12 = var13[var20];
        var12 = var6.bind(var3)(var12);
        var17 = var12.Stack;
        var12 = {};
        var21 = var8.container;
        var12.style = var21;
        var23 = _closure1_slot9;
        var24 = 22;
        var21 = var13[var24];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Text;
        var21 = {
            'variant': 'heading-lg/bold',
            'children': 'Hierarchical buttons'
        };
        var21 = var23.bind(var3)(var22, var21);
        var12.children = var21;
        var17 = var18.bind(var3)(var17, var12);
        var12 = new Array(2);
        var12[0] = var17;
        var18 = _closure1_slot9;
        var23 = _closure1_slot5;
        var17 = {};
        var35 = _closure1_slot12;
        var22 = var35.map;
        var21 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot17;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var21 = var22.bind(var35)(var21);
        var17.children = var21;
        var17 = var18.bind(var3)(var23, var17);
        var12[1] = var17;
        var9.children = var12;
        var9 = var2.bind(var3)(var11, var9);
        var17 = new Array(19);
        var17[0] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var21 = _closure1_slot9;
        var12 = var13[var20];
        var12 = var6.bind(var3)(var12);
        var18 = var12.Stack;
        var12 = {};
        var22 = var8.container;
        var12.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Sentiment buttons'
        };
        var22 = var26.bind(var3)(var25, var22);
        var12.children = var22;
        var18 = var21.bind(var3)(var18, var12);
        var12 = new Array(2);
        var12[0] = var18;
        var21 = _closure1_slot9;
        var18 = {};
        var36 = _closure1_slot14;
        var25 = var36.map;
        var22 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot17;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var22 = var25.bind(var36)(var22);
        var18.children = var22;
        var18 = var21.bind(var3)(var23, var18);
        var12[1] = var18;
        var9.children = var12;
        var9 = var2.bind(var3)(var11, var9);
        var17[1] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var21 = _closure1_slot9;
        var12 = var13[var20];
        var12 = var6.bind(var3)(var12);
        var18 = var12.Stack;
        var12 = {};
        var22 = var8.container;
        var12.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Experimental premium buttons'
        };
        var22 = var26.bind(var3)(var25, var22);
        var12.children = var22;
        var18 = var21.bind(var3)(var18, var12);
        var12 = new Array(2);
        var12[0] = var18;
        var21 = _closure1_slot9;
        var18 = {};
        var26 = _closure1_slot15;
        var25 = var26.map;
        var22 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot17;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var22 = var25.bind(var26)(var22);
        var18.children = var22;
        var18 = var21.bind(var3)(var23, var18);
        var12[1] = var18;
        var9.children = var12;
        var9 = var2.bind(var3)(var11, var9);
        var17[2] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var12 = var13[var20];
        var12 = var6.bind(var3)(var12);
        var18 = var12.Stack;
        var12 = {};
        var21 = var8.container;
        var12.style = var21;
        var25 = _closure1_slot9;
        var21 = var13[var24];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Text;
        var21 = {
            'variant': 'heading-lg/bold',
            'children': 'Overlay buttons'
        };
        var22 = var25.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'text-sm/normal',
            'children': 'Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme.'
        };
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var12.children = var21;
        var18 = var2.bind(var3)(var18, var12);
        var12 = new Array(2);
        var12[0] = var18;
        var21 = _closure1_slot9;
        var18 = {};
        var27 = _closure1_slot13;
        var25 = var27.map;
        var22 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure2_slot0;
            var7 = var6.buttonContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6.overlayButtonContainer;
            var5[1] = var6;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot17;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var22 = var25.bind(var27)(var22);
        var18.children = var22;
        var18 = var21.bind(var3)(var23, var18);
        var12[1] = var18;
        var9.children = var12;
        var9 = var2.bind(var3)(var11, var9);
        var17[3] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var12 = var13[var20];
        var12 = var6.bind(var3)(var12);
        var18 = var12.Stack;
        var12 = {};
        var21 = var8.container;
        var12.style = var21;
        var25 = _closure1_slot9;
        var21 = var13[var24];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Text;
        var21 = {
            'variant': 'heading-lg/bold',
            'children': 'Custom color icons'
        };
        var22 = var25.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'text-sm/normal',
            'children': 'If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop.'
        };
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var12.children = var21;
        var12 = var2.bind(var3)(var18, var12);
        var18 = new Array(2);
        var18[0] = var12;
        var21 = {};
        var25 = _closure1_slot9;
        var22 = {};
        var12 = var8.buttonContainer;
        var22.style = var12;
        var31 = _closure1_slot9;
        var28 = 6;
        var12 = var13[var28];
        var12 = var6.bind(var3)(var12);
        var30 = var12.Button;
        var26 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Button with a custom color icon',
            'size': 'md'
        };
        var12 = function() {
            var0 = undefined;
            return var0;
        };
        var26.onPress = var12;
        var29 = 'secondary';
        var37 = _closure1_slot9;
        var12 = var13[var28];
        var12 = var6.bind(var3)(var12);
        var12 = var12.Button;
        var34 = var12.Icon;
        var32 = {};
        var12 = _closure1_slot1;
        var33 = 23;
        var38 = var13[var33];
        var38 = var12.bind(var3)(var38);
        var32.source = var38;
        var32 = var37.bind(var3)(var34, var32);
        var26.icon = var32;
        var26 = var31.bind(var3)(var30, var26);
        var22.children = var26;
        var25 = var25.bind(var3)(var23, var22);
        var22 = new Array(2);
        var22[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var30 = var8.buttonContainer;
        var25.style = var30;
        var32 = _closure1_slot9;
        var30 = var13[var28];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Button;
        var30 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Button with a entity variant icon',
            'size': 'md'
        };
        var34 = function() {
            var0 = undefined;
            return var0;
        };
        var30.onPress = var34;
        var38 = _closure1_slot9;
        var34 = var13[var28];
        var34 = var6.bind(var3)(var34);
        var34 = var34.Button;
        var37 = var34.Icon;
        var34 = {};
        var39 = 'entity';
        var34.variant = var39;
        var39 = var13[var19];
        var39 = var12.bind(var3)(var39);
        var34.source = var39;
        var34 = var38.bind(var3)(var37, var34);
        var30.icon = var34;
        var30 = var32.bind(var3)(var31, var30);
        var25.children = var30;
        var25 = var26.bind(var3)(var23, var25);
        var22[1] = var25;
        var21.children = var22;
        var21 = var2.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[4] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var22 = _closure1_slot9;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var25 = var8.container;
        var18.style = var25;
        var30 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Buttons with various text lengths'
        };
        var25 = var30.bind(var3)(var26, var25);
        var18.children = var25;
        var21 = var22.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var21 = {};
        var25 = _closure1_slot9;
        var22 = {};
        var26 = var8.buttonContainer;
        var22.style = var26;
        var31 = _closure1_slot9;
        var26 = var13[var28];
        var26 = var6.bind(var3)(var26);
        var30 = var26.Button;
        var26 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            'size': 'md'
        };
        var32 = function() {
            var0 = undefined;
            return var0;
        };
        var26.onPress = var32;
        var32 = var13[var33];
        var32 = var12.bind(var3)(var32);
        var26.icon = var32;
        var26 = var31.bind(var3)(var30, var26);
        var22.children = var26;
        var25 = var25.bind(var3)(var23, var22);
        var22 = new Array(4);
        var22[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var30 = var8.buttonContainer;
        var25.style = var30;
        var32 = _closure1_slot9;
        var30 = var13[var28];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Button;
        var30 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            'size': 'md',
            'icon': null,
            'iconPosition': 'end'
        };
        var34 = function() {
            var0 = undefined;
            return var0;
        };
        var30.onPress = var34;
        var33 = var13[var33];
        var33 = var12.bind(var3)(var33);
        var30.icon = var33;
        var30 = var32.bind(var3)(var31, var30);
        var25.children = var30;
        var25 = var26.bind(var3)(var23, var25);
        var22[1] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var30 = var8.buttonContainer;
        var25.style = var30;
        var32 = _closure1_slot9;
        var30 = var13[var28];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Button;
        var30 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            'size': 'md'
        };
        var33 = function() {
            var0 = undefined;
            return var0;
        };
        var30.onPress = var33;
        var30 = var32.bind(var3)(var31, var30);
        var25.children = var30;
        var25 = var26.bind(var3)(var23, var25);
        var22[2] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var30 = var8.buttonContainer;
        var25.style = var30;
        var31 = _closure1_slot9;
        var28 = var13[var28];
        var28 = var6.bind(var3)(var28);
        var30 = var28.Button;
        var28 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'A',
            'size': 'md'
        };
        var32 = function() {
            var0 = undefined;
            return var0;
        };
        var28.onPress = var32;
        var28 = var31.bind(var3)(var30, var28);
        var25.children = var28;
        var25 = var26.bind(var3)(var23, var25);
        var22[3] = var25;
        var21.children = var22;
        var21 = var2.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[5] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var22 = var8.container;
        var18.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Toggling button states'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(3);
        var22[0] = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states.'
        };
        var25 = var28.bind(var3)(var26, var25);
        var22[1] = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'This hook changes the button presentation and adds some important accessibility attributes for a toggle button.'
        };
        var25 = var28.bind(var3)(var26, var25);
        var22[2] = var25;
        var18.children = var22;
        var21 = var2.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var21 = {};
        var25 = _closure1_slot9;
        var22 = {};
        var26 = var8.buttonContainer;
        var22.style = var26;
        var30 = _closure1_slot9;
        var28 = _closure1_slot20;
        var26 = {};
        var26 = var30.bind(var3)(var28, var26);
        var22.children = var26;
        var25 = var25.bind(var3)(var23, var22);
        var22 = new Array(2);
        var22[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var8.buttonContainer;
        var25.style = var28;
        var31 = _closure1_slot9;
        var30 = _closure1_slot21;
        var28 = {};
        var28 = var31.bind(var3)(var30, var28);
        var25.children = var28;
        var25 = var26.bind(var3)(var23, var25);
        var22[1] = var25;
        var21.children = var22;
        var21 = var2.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[6] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var22 = var8.container;
        var18.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Hierarchical icon buttons'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(3);
        var22[0] = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'While the primary variants of IconButton are supported, these should be used very rarely.'
        };
        var25 = var28.bind(var3)(var26, var25);
        var22[1] = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'An icon button usually has a secondary function and should use the secondary variants.'
        };
        var25 = var28.bind(var3)(var26, var25);
        var22[2] = var25;
        var18.children = var22;
        var21 = var2.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var22 = _closure1_slot9;
        var21 = {};
        var26 = var35.map;
        var25 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot18;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var35)(var25);
        var21.children = var25;
        var21 = var22.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[7] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var22 = _closure1_slot9;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var25 = var8.container;
        var18.style = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Sentiment icon buttons'
        };
        var25 = var28.bind(var3)(var26, var25);
        var18.children = var25;
        var21 = var22.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var22 = _closure1_slot9;
        var21 = {};
        var26 = var36.map;
        var25 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot18;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var36)(var25);
        var21.children = var25;
        var21 = var22.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[8] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var22 = _closure1_slot9;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var25 = var8.container;
        var18.style = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Overlay icon buttons'
        };
        var25 = var28.bind(var3)(var26, var25);
        var18.children = var25;
        var21 = var22.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var22 = _closure1_slot9;
        var21 = {};
        var26 = var27.map;
        var25 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure2_slot0;
            var7 = var6.buttonContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6.overlayButtonContainer;
            var5[1] = var6;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot18;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var27)(var25);
        var21.children = var25;
        var21 = var22.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[9] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var11 = var9.Stack;
        var9 = {};
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var21 = var18.Stack;
        var18 = {};
        var22 = var8.container;
        var18.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Image buttons'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(2);
        var22[0] = var25;
        var27 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'Image buttons are rereserved for more branded buttons, like social media sharing buttons.'
        };
        var25 = var27.bind(var3)(var26, var25);
        var22[1] = var25;
        var18.children = var22;
        var21 = var2.bind(var3)(var21, var18);
        var18 = new Array(2);
        var18[0] = var21;
        var21 = {};
        var25 = _closure1_slot9;
        var22 = {};
        var27 = var8.buttonContainer;
        var26 = new Array(1);
        var26[0] = var27;
        var22.style = var26;
        var27 = _closure1_slot9;
        var33 = _closure1_slot19;
        var26 = {};
        var32 = 25;
        var28 = var13[var32];
        var28 = var12.bind(var3)(var28);
        var26.image = var28;
        var28 = 'Telegram';
        var26.label = var28;
        var26 = var27.bind(var3)(var33, var26);
        var22.children = var26;
        var25 = var25.bind(var3)(var23, var22);
        var22 = new Array(3);
        var22[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var8.buttonContainer;
        var27 = new Array(1);
        var27[0] = var28;
        var25.style = var27;
        var28 = _closure1_slot9;
        var27 = {};
        var38 = 26;
        var30 = var13[var38];
        var30 = var12.bind(var3)(var30);
        var27.image = var30;
        var30 = 'WhatsApp';
        var27.label = var30;
        var27 = var28.bind(var3)(var33, var27);
        var25.children = var27;
        var25 = var26.bind(var3)(var23, var25);
        var22[1] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var8.buttonContainer;
        var27 = new Array(1);
        var27[0] = var28;
        var25.style = var27;
        var28 = _closure1_slot9;
        var27 = {};
        var34 = 27;
        var30 = var13[var34];
        var30 = var12.bind(var3)(var30);
        var27.image = var30;
        var30 = 'Twitter';
        var27.label = var30;
        var27 = var28.bind(var3)(var33, var27);
        var25.children = var27;
        var25 = var26.bind(var3)(var23, var25);
        var22[2] = var25;
        var21.children = var22;
        var21 = var2.bind(var3)(var23, var21);
        var18[1] = var21;
        var9.children = var18;
        var9 = var2.bind(var3)(var11, var9);
        var17[10] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var18 = var9.Stack;
        var9 = {};
        var9.spacing = var19;
        var11 = var13[var20];
        var11 = var6.bind(var3)(var11);
        var21 = var11.Stack;
        var11 = {};
        var22 = var8.container;
        var11.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'IconButton with a label'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(3);
        var22[0] = var25;
        var27 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size."
        };
        var25 = var27.bind(var3)(var26, var25);
        var22[1] = var25;
        var27 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings.'
        };
        var25 = var27.bind(var3)(var26, var25);
        var22[2] = var25;
        var11.children = var22;
        var11 = var2.bind(var3)(var21, var11);
        var21 = new Array(3);
        var21[0] = var11;
        var22 = _closure1_slot9;
        var11 = {};
        var37 = true;
        var11.horizontal = var37;
        var25 = {};
        var28 = '100%';
        var25.minWidth = var28;
        var11.contentContainerStyle = var25;
        var30 = _closure1_slot9;
        var25 = var13[var20];
        var25 = var6.bind(var3)(var25);
        var27 = var25.Stack;
        var26 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var25 = 'horizontal';
        var31 = var8.buttonContainer;
        var26.style = var31;
        var39 = var35.map;
        var31 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot18;
            var1 = {};
            var1.variant = var4;
            var0 = true;
            var1.showLabel = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var31 = var39.bind(var35)(var31);
        var26.children = var31;
        var26 = var30.bind(var3)(var27, var26);
        var11.children = var26;
        var11 = var22.bind(var3)(var7, var11);
        var21[1] = var11;
        var26 = _closure1_slot9;
        var22 = {};
        var22.horizontal = var37;
        var11 = {};
        var11.minWidth = var28;
        var22.contentContainerStyle = var11;
        var11 = var13[var20];
        var11 = var6.bind(var3)(var11);
        var30 = var11.Stack;
        var27 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var11 = var8.buttonContainer;
        var27.style = var11;
        var41 = _closure1_slot9;
        var39 = 8;
        var11 = var13[var39];
        var11 = var6.bind(var3)(var11);
        var40 = var11.IconButton;
        var31 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var11 = 9;
        var42 = var13[var11];
        var42 = var12.bind(var3)(var42);
        var31.icon = var42;
        var42 = function() {
            var0 = undefined;
            return var0;
        };
        var31.onPress = var42;
        var40 = var41.bind(var3)(var40, var31);
        var31 = new Array(3);
        var31[0] = var40;
        var42 = _closure1_slot9;
        var40 = var13[var39];
        var40 = var6.bind(var3)(var40);
        var41 = var40.IconButton;
        var40 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var43 = var13[var11];
        var43 = var12.bind(var3)(var43);
        var40.icon = var43;
        var43 = function() {
            var0 = undefined;
            return var0;
        };
        var40.onPress = var43;
        var40 = var42.bind(var3)(var41, var40);
        var31[1] = var40;
        var41 = _closure1_slot9;
        var39 = var13[var39];
        var39 = var6.bind(var3)(var39);
        var40 = var39.IconButton;
        var39 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var42 = var13[var11];
        var42 = var12.bind(var3)(var42);
        var39.icon = var42;
        var42 = function() {
            var0 = undefined;
            return var0;
        };
        var39.onPress = var42;
        var39 = var41.bind(var3)(var40, var39);
        var31[2] = var39;
        var27.children = var31;
        var27 = var2.bind(var3)(var30, var27);
        var22.children = var27;
        var22 = var26.bind(var3)(var7, var22);
        var21[2] = var22;
        var9.children = var21;
        var9 = var2.bind(var3)(var18, var9);
        var17[11] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var18 = var9.Stack;
        var9 = {};
        var9.spacing = var19;
        var26 = _closure1_slot9;
        var21 = var13[var20];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Stack;
        var21 = {};
        var27 = var8.container;
        var21.style = var27;
        var31 = _closure1_slot9;
        var27 = var13[var24];
        var27 = var6.bind(var3)(var27);
        var30 = var27.Text;
        var27 = {
            'variant': 'heading-lg/bold',
            'children': 'ImageButton with a label'
        };
        var27 = var31.bind(var3)(var30, var27);
        var21.children = var27;
        var22 = var26.bind(var3)(var22, var21);
        var21 = new Array(3);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = {};
        var22.horizontal = var37;
        var27 = {};
        var27.minWidth = var28;
        var22.contentContainerStyle = var27;
        var27 = var13[var20];
        var27 = var6.bind(var3)(var27);
        var30 = var27.Stack;
        var27 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var31 = var8.buttonContainer;
        var27.style = var31;
        var39 = _closure1_slot9;
        var31 = {
            'image': null,
            'label': 'Label',
            'showLabel': true
        };
        var40 = 28;
        var40 = var13[var40];
        var40 = var12.bind(var3)(var40);
        var31.image = var40;
        var39 = var39.bind(var3)(var33, var31);
        var31 = new Array(3);
        var31[0] = var39;
        var40 = _closure1_slot9;
        var39 = {
            'image': null,
            'label': 'Label',
            'showLabel': true
        };
        var41 = var13[var19];
        var41 = var12.bind(var3)(var41);
        var39.image = var41;
        var39 = var40.bind(var3)(var33, var39);
        var31[1] = var39;
        var40 = _closure1_slot9;
        var39 = {
            'image': null,
            'label': 'Label',
            'showLabel': true
        };
        var41 = 29;
        var41 = var13[var41];
        var41 = var12.bind(var3)(var41);
        var39.image = var41;
        var39 = var40.bind(var3)(var33, var39);
        var31[2] = var39;
        var27.children = var31;
        var27 = var2.bind(var3)(var30, var27);
        var22.children = var27;
        var22 = var26.bind(var3)(var7, var22);
        var21[1] = var22;
        var26 = _closure1_slot9;
        var22 = {};
        var22.horizontal = var37;
        var27 = {};
        var27.minWidth = var28;
        var22.contentContainerStyle = var27;
        var27 = var13[var20];
        var27 = var6.bind(var3)(var27);
        var28 = var27.Stack;
        var27 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var30 = var8.buttonContainer;
        var27.style = var30;
        var31 = _closure1_slot9;
        var30 = {
            'image': null,
            'label': 'Supercalifragilisticexpialidocious',
            'showLabel': true
        };
        var32 = var13[var32];
        var32 = var12.bind(var3)(var32);
        var30.image = var32;
        var31 = var31.bind(var3)(var33, var30);
        var30 = new Array(3);
        var30[0] = var31;
        var32 = _closure1_slot9;
        var31 = {
            'image': null,
            'label': 'Supercalifragilisticexpialidocious',
            'showLabel': true
        };
        var38 = var13[var38];
        var38 = var12.bind(var3)(var38);
        var31.image = var38;
        var31 = var32.bind(var3)(var33, var31);
        var30[1] = var31;
        var32 = _closure1_slot9;
        var31 = {
            'image': null,
            'label': 'Supercalifragilisticexpialidocious',
            'showLabel': true
        };
        var34 = var13[var34];
        var34 = var12.bind(var3)(var34);
        var31.image = var34;
        var31 = var32.bind(var3)(var33, var31);
        var30[2] = var31;
        var27.children = var30;
        var27 = var2.bind(var3)(var28, var27);
        var22.children = var27;
        var22 = var26.bind(var3)(var7, var22);
        var21[2] = var22;
        var9.children = var21;
        var9 = var2.bind(var3)(var18, var9);
        var17[12] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var18 = var9.Stack;
        var9 = {};
        var9.spacing = var19;
        var22 = _closure1_slot9;
        var19 = var13[var20];
        var19 = var6.bind(var3)(var19);
        var21 = var19.Stack;
        var19 = {};
        var26 = var8.container;
        var19.style = var26;
        var28 = _closure1_slot9;
        var26 = var13[var24];
        var26 = var6.bind(var3)(var26);
        var27 = var26.Text;
        var26 = {
            'variant': 'heading-lg/bold',
            'children': 'Mixing buttons'
        };
        var26 = var28.bind(var3)(var27, var26);
        var19.children = var26;
        var21 = var22.bind(var3)(var21, var19);
        var19 = new Array(2);
        var19[0] = var21;
        var21 = 30;
        var21 = var13[var21];
        var21 = var6.bind(var3)(var21);
        var22 = var21.ButtonGroup;
        var21 = {};
        var21.direction = var25;
        var25 = var8.container;
        var21.style = var25;
        var27 = _closure1_slot9;
        var26 = _closure1_slot17;
        var25 = {
            'variant': 'secondary',
            'text': 'Search',
            'grow': true
        };
        var26 = var27.bind(var3)(var26, var25);
        var25 = new Array(2);
        var25[0] = var26;
        var28 = _closure1_slot9;
        var27 = _closure1_slot18;
        var26 = {};
        var26.variant = var29;
        var26 = var28.bind(var3)(var27, var26);
        var25[1] = var26;
        var21.children = var25;
        var21 = var2.bind(var3)(var22, var21);
        var19[1] = var21;
        var9.children = var19;
        var9 = var2.bind(var3)(var18, var9);
        var17[13] = var9;
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var19 = var9.Stack;
        var18 = {};
        var9 = var13[var20];
        var9 = var6.bind(var3)(var9);
        var21 = var9.Stack;
        var9 = {};
        var22 = var8.container;
        var9.style = var22;
        var26 = _closure1_slot9;
        var22 = var13[var24];
        var22 = var6.bind(var3)(var22);
        var25 = var22.Text;
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Light Profile Themes'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(2);
        var22[0] = var25;
        var27 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'text-sm/normal',
            'children': 'All buttons as they appear on a light profile theme'
        };
        var25 = var27.bind(var3)(var26, var25);
        var22[1] = var25;
        var9.children = var22;
        var9 = var2.bind(var3)(var21, var9);
        var21 = new Array(2);
        var21[0] = var9;
        var26 = _closure1_slot9;
        var27 = 31;
        var9 = var13[var27];
        var9 = var6.bind(var3)(var9);
        var25 = var9.ThemeContextProvider;
        var22 = {};
        var9 = 'light';
        var22.theme = var9;
        var9 = 32;
        var28 = var13[var9];
        var30 = var6.bind(var3)(var28);
        var29 = var30.hex2int;
        var28 = '#ffae70';
        var28 = var29.bind(var30)(var28);
        var22.primaryColor = var28;
        var28 = var13[var9];
        var29 = var6.bind(var3)(var28);
        var28 = var29.hex2int;
        var32 = '#cc2300';
        var28 = var28.bind(var29)(var32);
        var22.secondaryColor = var28;
        var38 = _closure1_slot9;
        var28 = 33;
        var29 = var13[var28];
        var30 = var12.bind(var3)(var29);
        var29 = {};
        var31 = {};
        var33 = 16;
        var31.padding = var33;
        var29.style = var31;
        var34 = 0;
        var31 = {
            'x': 0,
            'y': 0
        };
        var29.start = var31;
        var31 = {
            'x': 0,
            'y': 1
        };
        var29.end = var31;
        var31 = ['#ffae70', '#cc2300'];
        var29.colors = var31;
        var41 = _closure1_slot9;
        var31 = 34;
        var39 = var13[var31];
        var39 = var6.bind(var3)(var39);
        var40 = var39.Card;
        var39 = {};
        var42 = var13[var20];
        var42 = var6.bind(var3)(var42);
        var43 = var42.Stack;
        var42 = {};
        var42.spacing = var33;
        var45 = var35.map;
        var44 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var45 = var45.bind(var35)(var44);
        var44 = new Array(2);
        var44[0] = var45;
        var46 = var36.map;
        var45 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var45 = var46.bind(var36)(var45);
        var44[1] = var45;
        var42.children = var44;
        var42 = var2.bind(var3)(var43, var42);
        var39.children = var42;
        var39 = var41.bind(var3)(var40, var39);
        var29.children = var39;
        var29 = var38.bind(var3)(var30, var29);
        var22.children = var29;
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var18.children = var21;
        var18 = var2.bind(var3)(var19, var18);
        var17[14] = var18;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var19 = var18.Stack;
        var18 = {};
        var21 = var13[var20];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Stack;
        var21 = {};
        var25 = var8.container;
        var21.style = var25;
        var29 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Dark Profile Themes'
        };
        var26 = var29.bind(var3)(var26, var25);
        var25 = new Array(2);
        var25[0] = var26;
        var30 = _closure1_slot9;
        var26 = var13[var24];
        var26 = var6.bind(var3)(var26);
        var29 = var26.Text;
        var26 = {
            'variant': 'text-sm/normal',
            'children': 'All buttons as they appear on a dark profile theme'
        };
        var26 = var30.bind(var3)(var29, var26);
        var25[1] = var26;
        var21.children = var25;
        var22 = var2.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = var13[var27];
        var22 = var6.bind(var3)(var22);
        var25 = var22.ThemeContextProvider;
        var22 = {};
        var29 = 'dark';
        var22.theme = var29;
        var29 = var13[var9];
        var38 = var6.bind(var3)(var29);
        var30 = var38.hex2int;
        var29 = '#490000';
        var29 = var30.bind(var38)(var29);
        var22.primaryColor = var29;
        var29 = var13[var9];
        var30 = var6.bind(var3)(var29);
        var29 = var30.hex2int;
        var29 = var29.bind(var30)(var32);
        var22.secondaryColor = var29;
        var30 = _closure1_slot9;
        var28 = var13[var28];
        var29 = var12.bind(var3)(var28);
        var28 = {};
        var32 = {};
        var32.padding = var33;
        var28.style = var32;
        var32 = {
            'x': 0,
            'y': 0
        };
        var28.start = var32;
        var32 = {
            'x': 0,
            'y': 1
        };
        var28.end = var32;
        var32 = ['#490000', '#cc2300'];
        var28.colors = var32;
        var38 = _closure1_slot9;
        var31 = var13[var31];
        var31 = var6.bind(var3)(var31);
        var32 = var31.Card;
        var31 = {};
        var39 = var13[var20];
        var39 = var6.bind(var3)(var39);
        var40 = var39.Stack;
        var39 = {};
        var39.spacing = var33;
        var42 = var35.map;
        var41 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var42 = var42.bind(var35)(var41);
        var41 = new Array(2);
        var41[0] = var42;
        var43 = var36.map;
        var42 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var42 = var43.bind(var36)(var42);
        var41[1] = var42;
        var39.children = var41;
        var39 = var2.bind(var3)(var40, var39);
        var31.children = var39;
        var31 = var38.bind(var3)(var32, var31);
        var28.children = var31;
        var28 = var30.bind(var3)(var29, var28);
        var22.children = var28;
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var18.children = var21;
        var18 = var2.bind(var3)(var19, var18);
        var17[15] = var18;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var19 = var18.Stack;
        var18 = {};
        var21 = var13[var20];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Stack;
        var21 = {};
        var25 = var8.container;
        var21.style = var25;
        var28 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Light Client Theme'
        };
        var26 = var28.bind(var3)(var26, var25);
        var25 = new Array(2);
        var25[0] = var26;
        var29 = _closure1_slot9;
        var26 = var13[var24];
        var26 = var6.bind(var3)(var26);
        var28 = var26.Text;
        var26 = {
            'variant': 'text-sm/normal',
            'children': 'All buttons as they appear on a light client theme'
        };
        var26 = var29.bind(var3)(var28, var26);
        var25[1] = var26;
        var21.children = var25;
        var22 = var2.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = var13[var27];
        var22 = var6.bind(var3)(var22);
        var25 = var22.ThemeContextProvider;
        var22 = {};
        var38 = _closure1_slot7;
        var28 = var38[var34];
        var28 = var28.theme;
        var22.theme = var28;
        var28 = var38[var34];
        var22.gradient = var28;
        var28 = var13[var27];
        var30 = var6.bind(var3)(var28);
        var29 = var30.setThemeFlag;
        var28 = var13[var27];
        var28 = var6.bind(var3)(var28);
        var28 = var28.ThemeContextFlags;
        var28 = var28.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
        var28 = var29.bind(var30)(var34, var28);
        var22.flags = var28;
        var29 = {};
        var28 = {
            'position': 'relative',
            'padding': 16
        };
        var29.style = var28;
        var32 = _closure1_slot9;
        var28 = 35;
        var30 = var13[var28];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Gradient;
        var30 = {};
        var30.absolute = var37;
        var38 = var38[var34];
        var30.gradient = var38;
        var31 = var32.bind(var3)(var31, var30);
        var30 = new Array(2);
        var30[0] = var31;
        var39 = _closure1_slot9;
        var31 = {};
        var40 = {
            'backgroundColor': null,
            'padding': 16,
            'borderRadius': 16
        };
        var32 = 36;
        var38 = var13[var32];
        var43 = var6.bind(var3)(var38);
        var42 = var43.setColorOpacity;
        var41 = 'white';
        var38 = 0.7;
        var41 = var42.bind(var43)(var41, var38);
        var40.backgroundColor = var41;
        var31.style = var40;
        var40 = var13[var20];
        var40 = var6.bind(var3)(var40);
        var41 = var40.Stack;
        var40 = {};
        var40.spacing = var33;
        var43 = var35.map;
        var42 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var43 = var43.bind(var35)(var42);
        var42 = new Array(2);
        var42[0] = var43;
        var44 = var36.map;
        var43 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var43 = var44.bind(var36)(var43);
        var42[1] = var43;
        var40.children = var42;
        var40 = var2.bind(var3)(var41, var40);
        var31.children = var40;
        var31 = var39.bind(var3)(var23, var31);
        var30[1] = var31;
        var29.children = var30;
        var29 = var2.bind(var3)(var23, var29);
        var22.children = var29;
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var18.children = var21;
        var18 = var2.bind(var3)(var19, var18);
        var17[16] = var18;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var19 = var18.Stack;
        var18 = {};
        var21 = var13[var20];
        var21 = var6.bind(var3)(var21);
        var22 = var21.Stack;
        var21 = {};
        var25 = var8.container;
        var21.style = var25;
        var29 = _closure1_slot9;
        var25 = var13[var24];
        var25 = var6.bind(var3)(var25);
        var26 = var25.Text;
        var25 = {
            'variant': 'heading-lg/bold',
            'children': 'Dark Client Theme'
        };
        var26 = var29.bind(var3)(var26, var25);
        var25 = new Array(2);
        var25[0] = var26;
        var30 = _closure1_slot9;
        var26 = var13[var24];
        var26 = var6.bind(var3)(var26);
        var29 = var26.Text;
        var26 = {
            'variant': 'text-sm/normal',
            'children': 'All buttons as they appear on a dark client theme'
        };
        var26 = var30.bind(var3)(var29, var26);
        var25[1] = var26;
        var21.children = var25;
        var22 = var2.bind(var3)(var22, var21);
        var21 = new Array(2);
        var21[0] = var22;
        var26 = _closure1_slot9;
        var22 = var13[var27];
        var22 = var6.bind(var3)(var22);
        var25 = var22.ThemeContextProvider;
        var22 = {};
        var31 = _closure1_slot8;
        var29 = var31[var34];
        var29 = var29.theme;
        var22.theme = var29;
        var29 = var31[var34];
        var22.gradient = var29;
        var29 = var13[var27];
        var30 = var6.bind(var3)(var29);
        var29 = var30.setThemeFlag;
        var27 = var13[var27];
        var27 = var6.bind(var3)(var27);
        var27 = var27.ThemeContextFlags;
        var27 = var27.MOBILE_DARK_GRADIENT_THEME_ENABLED;
        var27 = var29.bind(var30)(var34, var27);
        var22.flags = var27;
        var27 = {};
        var29 = {
            'position': 'relative',
            'padding': 16
        };
        var27.style = var29;
        var30 = _closure1_slot9;
        var28 = var13[var28];
        var28 = var6.bind(var3)(var28);
        var29 = var28.Gradient;
        var28 = {};
        var28.absolute = var37;
        var31 = var31[var34];
        var28.gradient = var31;
        var29 = var30.bind(var3)(var29, var28);
        var28 = new Array(2);
        var28[0] = var29;
        var30 = _closure1_slot9;
        var29 = {};
        var31 = {
            'backgroundColor': null,
            'padding': 16,
            'borderRadius': 16
        };
        var32 = var13[var32];
        var37 = var6.bind(var3)(var32);
        var34 = var37.setColorOpacity;
        var32 = 'black';
        var32 = var34.bind(var37)(var32, var38);
        var31.backgroundColor = var32;
        var29.style = var31;
        var31 = var13[var20];
        var31 = var6.bind(var3)(var31);
        var32 = var31.Stack;
        var31 = {};
        var31.spacing = var33;
        var34 = var35.map;
        var33 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var34 = var34.bind(var35)(var33);
        var33 = new Array(2);
        var33[0] = var34;
        var35 = var36.map;
        var34 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot17;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var34 = var35.bind(var36)(var34);
        var33[1] = var34;
        var31.children = var33;
        var31 = var2.bind(var3)(var32, var31);
        var29.children = var31;
        var29 = var30.bind(var3)(var23, var29);
        var28[1] = var29;
        var27.children = var28;
        var27 = var2.bind(var3)(var23, var27);
        var22.children = var27;
        var22 = var26.bind(var3)(var25, var22);
        var21[1] = var22;
        var18.children = var21;
        var18 = var2.bind(var3)(var19, var18);
        var17[17] = var18;
        var18 = var13[var20];
        var18 = var6.bind(var3)(var18);
        var19 = var18.Stack;
        var18 = {};
        var20 = var13[var20];
        var20 = var6.bind(var3)(var20);
        var21 = var20.Stack;
        var20 = {};
        var8 = var8.container;
        var20.style = var8;
        var26 = _closure1_slot9;
        var8 = var13[var24];
        var8 = var6.bind(var3)(var8);
        var25 = var8.Text;
        var8 = 'Floating Action Button';
        var22 = {
            'variant': 'heading-lg/bold',
            'children': 'Floating Action Button'
        };
        var25 = var26.bind(var3)(var25, var22);
        var22 = new Array(2);
        var22[0] = var25;
        var26 = _closure1_slot9;
        var24 = var13[var24];
        var24 = var6.bind(var3)(var24);
        var25 = var24.Text;
        var24 = {
            'variant': 'text-sm/normal',
            'children': 'An ever-present icon button, giving the most important call to action in a compact way.'
        };
        var24 = var26.bind(var3)(var25, var24);
        var22[1] = var24;
        var20.children = var22;
        var21 = var2.bind(var3)(var21, var20);
        var20 = new Array(2);
        var20[0] = var21;
        var22 = _closure1_slot9;
        var21 = {};
        var24 = {};
        var25 = 48;
        var24.padding = var25;
        var21.style = var24;
        var21 = var22.bind(var3)(var23, var21);
        var20[1] = var21;
        var18.children = var20;
        var18 = var2.bind(var3)(var19, var18);
        var17[18] = var18;
        var15.children = var17;
        var15 = var2.bind(var3)(var16, var15);
        var4.children = var15;
        var7 = var14.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot9;
        var5 = 37;
        var5 = var13[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.FloatingActionButton;
        var5 = {};
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var5.icon = var11;
        var10 = function() {
            var0 = undefined;
            return var0;
        };
        var5.onPress = var10;
        var5.positionBottom = var9;
        var5.accessibilityLabel = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3210, 33, 11392, 4084, 11393, 7508, 5370, 8390, 11394, 8769, 6665, 8240, 1297, 671, 1469, 3278, 11395, 1307, 4080, 3941, 7511, 8381, 8386, 8388, 8387, 8385, 8384, 6443, 3159, 668, 4098, 4900, 8724, 3208, 7032, 2]);