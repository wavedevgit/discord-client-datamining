// modules/user_settings/native/design_system/UserSettingsDesignSystemButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var10 = function arg0() {
        _fun86978: for (var _fun86978_ip = 0;;) switch (_fun86978_ip) {
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
                    _fun86979: for (var _fun86979_ip = 0;;) switch (_fun86979_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun86979_ip = 101;
                                continue _fun86979
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86979_ip = 49;
                                continue _fun86979
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
                    _fun86978_ip = 269;
                    continue _fun86978
                }
            case 266:
                var12 = var11;
            case 269:
                var13 = var9 != var12;
                var11 = '';
                if (!var13) {
                    _fun86978_ip = 283;
                    continue _fun86978
                }
            case 280:
                var11 = var12;
            case 283:
                var0.text = var11;
                var9 = var9 != var10;
                if (!var9) {
                    _fun86978_ip = 297;
                    continue _fun86978
                }
            case 294:
                var9 = var10;
            case 297:
                var0.grow = var9;
                var0.size = var6;
                var6 = undefined;
                if (!var8) {
                    _fun86978_ip = 331;
                    continue _fun86978
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
    var _closure1_slot65 = var10;
    var8 = function arg0() {
        _fun86983: for (var _fun86983_ip = 0;;) switch (_fun86983_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.variant;
                var10 = var0.showLabel;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun86983_ip = 24;
                    continue _fun86983
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
                    _fun86984: for (var _fun86984_ip = 0;;) switch (_fun86984_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun86984_ip = 101;
                                continue _fun86984
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86984_ip = 49;
                                continue _fun86984
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
                    _fun86983_ip = 295;
                    continue _fun86983
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
                    _fun86983_ip = 249;
                    continue _fun86983
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
                _fun86983_ip = 367;
                continue _fun86983;
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
                    _fun86983_ip = 320;
                    continue _fun86983
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
    var _closure1_slot66 = var8;
    var9 = function arg0() {
        _fun86988: for (var _fun86988_ip = 0;;) switch (_fun86988_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.image;
                var7 = var0.label;
                var9 = var0.showLabel;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun86988_ip = 30;
                    continue _fun86988
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
                    _fun86989: for (var _fun86989_ip = 0;;) switch (_fun86989_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun86989_ip = 101;
                                continue _fun86989
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun86989_ip = 49;
                                continue _fun86989
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
                    _fun86988_ip = 264;
                    continue _fun86988
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
                _fun86988_ip = 299;
                continue _fun86988;
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
    var3 = var12.bind(var0)(var3);
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
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
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
    var11 = var4.bind(var0)(var3);
    var6 = var11.createStyles;
    var3 = {};
    var13 = {};
    var14 = 16;
    var15 = var5[var14];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var13.paddingHorizontal = var15;
    var3.container = var13;
    var13 = {};
    var15 = var5[var14];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var13.paddingHorizontal = var15;
    var15 = var5[var14];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var13.paddingVertical = var15;
    var3.buttonContainer = var13;
    var13 = {};
    var15 = var5[var14];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BG_GRADIENT_CHROMA_GLOW_1;
    var13.backgroundColor = var15;
    var14 = var5[var14];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_48;
    var13.paddingVertical = var14;
    var3.overlayButtonContainer = var13;
    var3 = var6.bind(var11)(var3);
    var _closure1_slot16 = var3;
    var3 = 17;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Hierarchical buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot17 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Sentiment buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot18 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Experimental premium buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot19 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Overlay buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot20 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot21 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Custom color icons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot22 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot23 = var6;
    var6 = 6;
    var11 = var5[var6];
    var11 = var4.bind(var0)(var11);
    var11 = var11.Button;
    var13 = var11.Icon;
    var11 = {};
    var14 = 18;
    var14 = var5[var14];
    var14 = var12.bind(var0)(var14);
    var11.source = var14;
    var11 = var7.bind(var0)(var13, var11);
    var _closure1_slot24 = var11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Button;
    var11 = var6.Icon;
    var6 = {};
    var13 = 'entity';
    var6.variant = var13;
    var15 = 19;
    var13 = var5[var15];
    var13 = var12.bind(var0)(var13);
    var6.source = var13;
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot25 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Buttons with various text lengths'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot26 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Toggling button states'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot27 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot28 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'This hook changes the button presentation and adds some important accessibility attributes for a toggle button.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot29 = var6;
    var11 = function() {
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
    var6 = {};
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot30 = var6;
    var11 = function() {
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
    var6 = {};
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot31 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Hierarchical icon buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot32 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'While the primary variants of IconButton are supported, these should be used very rarely.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot33 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'An icon button usually has a secondary function and should use the secondary variants.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot34 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Sentiment icon buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot35 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Overlay icon buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot36 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Image buttons'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot37 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var11 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'Image buttons are rereserved for more branded buttons, like social media sharing buttons.'
    };
    var6 = var7.bind(var0)(var11, var6);
    var _closure1_slot38 = var6;
    var6 = {};
    var14 = 20;
    var11 = var5[var14];
    var11 = var12.bind(var0)(var11);
    var6.image = var11;
    var11 = 'Telegram';
    var6.label = var11;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot39 = var6;
    var6 = {};
    var13 = 21;
    var11 = var5[var13];
    var11 = var12.bind(var0)(var11);
    var6.image = var11;
    var11 = 'WhatsApp';
    var6.label = var11;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot40 = var6;
    var6 = {};
    var11 = 22;
    var16 = var5[var11];
    var16 = var12.bind(var0)(var16);
    var6.image = var16;
    var16 = 'Twitter';
    var6.label = var16;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot41 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var16 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'IconButton with a label'
    };
    var6 = var7.bind(var0)(var16, var6);
    var _closure1_slot42 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var16 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size."
    };
    var6 = var7.bind(var0)(var16, var6);
    var _closure1_slot43 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var16 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings.'
    };
    var6 = var7.bind(var0)(var16, var6);
    var _closure1_slot44 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var16 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'ImageButton with a label'
    };
    var6 = var7.bind(var0)(var16, var6);
    var _closure1_slot45 = var6;
    var6 = {
        'image': null,
        'label': 'Label',
        'showLabel': true
    };
    var16 = 23;
    var16 = var5[var16];
    var16 = var12.bind(var0)(var16);
    var6.image = var16;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot46 = var6;
    var6 = {
        'image': null,
        'label': 'Label',
        'showLabel': true
    };
    var15 = var5[var15];
    var15 = var12.bind(var0)(var15);
    var6.image = var15;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot47 = var6;
    var6 = {
        'image': null,
        'label': 'Label',
        'showLabel': true
    };
    var15 = 24;
    var15 = var5[var15];
    var15 = var12.bind(var0)(var15);
    var6.image = var15;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot48 = var6;
    var6 = {
        'image': null,
        'label': 'Supercalifragilisticexpialidocious',
        'showLabel': true
    };
    var14 = var5[var14];
    var14 = var12.bind(var0)(var14);
    var6.image = var14;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot49 = var6;
    var6 = {
        'image': null,
        'label': 'Supercalifragilisticexpialidocious',
        'showLabel': true
    };
    var13 = var5[var13];
    var13 = var12.bind(var0)(var13);
    var6.image = var13;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot50 = var6;
    var6 = {
        'image': null,
        'label': 'Supercalifragilisticexpialidocious',
        'showLabel': true
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var6.image = var11;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot51 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var9 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Mixing buttons'
    };
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot52 = var6;
    var9 = 'secondary';
    var6 = {
        'variant': 'secondary',
        'text': 'Search',
        'grow': true
    };
    var6 = var7.bind(var0)(var10, var6);
    var _closure1_slot53 = var6;
    var6 = {};
    var6.variant = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot54 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Light Profile Themes'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot55 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'All buttons as they appear on a light profile theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot56 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Dark Profile Themes'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot57 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'All buttons as they appear on a dark profile theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot58 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Light Client Theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot59 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'All buttons as they appear on a light client theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot60 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Dark Client Theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot61 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'text-sm/normal',
        'children': 'All buttons as they appear on a dark client theme'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot62 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-lg/bold',
        'children': 'Floating Action Button'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot63 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'text-sm/normal',
        'children': 'An ever-present icon button, giving the most important call to action in a compact way.'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot64 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot16;
        var3 = undefined;
        var21 = var0.bind(var3)();
        var _closure2_slot0 = var21;
        var6 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 25;
        var0 = var12[var0];
        var1 = var6.bind(var3)(var0);
        var0 = var1.useNavigation;
        var2 = var0.bind(var1)();
        var7 = _closure1_slot4;
        var4 = var7.useCallback;
        var1 = function() { // Environment: var9
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 26;
            var3 = var1[var0];
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var3 = var4.openLazy;
            var5 = _closure1_slot0;
            var2 = 28;
            var2 = var1[var2];
            var5 = var5.bind(var0)(var2);
            var2 = 27;
            var2 = var1[var2];
            var1 = var1.paths;
            var2 = var5.bind(var0)(var2, var1);
            var1 = 'UserSettingsDesignSystemButtonActionSheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = new Array(0);
        var7 = var4.bind(var7)(var1, var0);
        var4 = _closure1_slot9;
        var30 = 8;
        var0 = var12[var30];
        var0 = var6.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {
            'onPress': null,
            'icon': null,
            'size': 'sm',
            'variant': 'secondary',
            'accessibilityLabel': 'Settings'
        };
        var0.onPress = var7;
        var11 = _closure1_slot1;
        var10 = 9;
        var7 = var12[var10];
        var7 = var11.bind(var3)(var7);
        var0.icon = var7;
        var0 = var4.bind(var3)(var1, var0);
        var _closure2_slot1 = var0;
        var1 = var2.setOptions;
        var0 = {};
        var4 = function() {
            var0 = _closure2_slot1;
            return var0;
        };
        var0.headerRight = var4;
        var0 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot11;
        var0 = {};
        var13 = _closure1_slot9;
        var7 = _closure1_slot6;
        var4 = {};
        var19 = 29;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var15 = var8.Stack;
        var14 = {};
        var18 = 24;
        var14.spacing = var18;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var16 = var8.Stack;
        var8 = {};
        var22 = _closure1_slot9;
        var17 = var12[var19];
        var17 = var6.bind(var3)(var17);
        var20 = var17.Stack;
        var17 = {};
        var23 = var21.container;
        var17.style = var23;
        var23 = _closure1_slot17;
        var17.children = var23;
        var20 = var22.bind(var3)(var20, var17);
        var17 = new Array(2);
        var17[0] = var20;
        var23 = _closure1_slot9;
        var22 = _closure1_slot5;
        var20 = {};
        var34 = _closure1_slot12;
        var25 = var34.map;
        var24 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot65;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var24 = var25.bind(var34)(var24);
        var20.children = var24;
        var20 = var23.bind(var3)(var22, var20);
        var17[1] = var20;
        var8.children = var17;
        var8 = var2.bind(var3)(var16, var8);
        var16 = new Array(19);
        var16[0] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var24 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var25 = var21.container;
        var20.style = var25;
        var25 = _closure1_slot18;
        var20.children = var25;
        var23 = var24.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var35 = _closure1_slot14;
        var26 = var35.map;
        var25 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot65;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var35)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[1] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var24 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var25 = var21.container;
        var20.style = var25;
        var25 = _closure1_slot19;
        var20.children = var25;
        var23 = var24.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var27 = _closure1_slot15;
        var26 = var27.map;
        var25 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot65;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var27)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[2] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot20;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot21;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var27 = _closure1_slot13;
        var26 = var27.map;
        var25 = function(arg0) { // Environment: var9
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
            var6 = _closure1_slot65;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var27)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[3] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot22;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot23;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var23 = {};
        var25 = _closure1_slot9;
        var24 = {};
        var26 = var21.buttonContainer;
        var24.style = var26;
        var31 = _closure1_slot9;
        var28 = 6;
        var26 = var12[var28];
        var26 = var6.bind(var3)(var26);
        var29 = var26.Button;
        var26 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Button with a custom color icon',
            'size': 'md'
        };
        var32 = function() {
            var0 = undefined;
            return var0;
        };
        var26.onPress = var32;
        var32 = _closure1_slot24;
        var26.icon = var32;
        var26 = var31.bind(var3)(var29, var26);
        var24.children = var26;
        var25 = var25.bind(var3)(var22, var24);
        var24 = new Array(2);
        var24[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var29 = var21.buttonContainer;
        var25.style = var29;
        var32 = _closure1_slot9;
        var29 = var12[var28];
        var29 = var6.bind(var3)(var29);
        var31 = var29.Button;
        var29 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Button with a entity variant icon',
            'size': 'md'
        };
        var33 = function() {
            var0 = undefined;
            return var0;
        };
        var29.onPress = var33;
        var33 = _closure1_slot25;
        var29.icon = var33;
        var29 = var32.bind(var3)(var31, var29);
        var25.children = var29;
        var25 = var26.bind(var3)(var22, var25);
        var24[1] = var25;
        var23.children = var24;
        var23 = var2.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[4] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var24 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var25 = var21.container;
        var20.style = var25;
        var25 = _closure1_slot26;
        var20.children = var25;
        var23 = var24.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var23 = {};
        var25 = _closure1_slot9;
        var24 = {};
        var26 = var21.buttonContainer;
        var24.style = var26;
        var31 = _closure1_slot9;
        var26 = var12[var28];
        var26 = var6.bind(var3)(var26);
        var29 = var26.Button;
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
        var33 = 18;
        var32 = var12[var33];
        var32 = var11.bind(var3)(var32);
        var26.icon = var32;
        var26 = var31.bind(var3)(var29, var26);
        var24.children = var26;
        var25 = var25.bind(var3)(var22, var24);
        var24 = new Array(4);
        var24[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var29 = var21.buttonContainer;
        var25.style = var29;
        var32 = _closure1_slot9;
        var29 = var12[var28];
        var29 = var6.bind(var3)(var29);
        var31 = var29.Button;
        var29 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            'size': 'md',
            'icon': null,
            'iconPosition': 'end'
        };
        var36 = function() {
            var0 = undefined;
            return var0;
        };
        var29.onPress = var36;
        var33 = var12[var33];
        var33 = var11.bind(var3)(var33);
        var29.icon = var33;
        var29 = var32.bind(var3)(var31, var29);
        var25.children = var29;
        var25 = var26.bind(var3)(var22, var25);
        var24[1] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var29 = var21.buttonContainer;
        var25.style = var29;
        var32 = _closure1_slot9;
        var29 = var12[var28];
        var29 = var6.bind(var3)(var29);
        var31 = var29.Button;
        var29 = {
            'onPress': null,
            'variant': 'secondary',
            'text': 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
            'size': 'md'
        };
        var33 = function() {
            var0 = undefined;
            return var0;
        };
        var29.onPress = var33;
        var29 = var32.bind(var3)(var31, var29);
        var25.children = var29;
        var25 = var26.bind(var3)(var22, var25);
        var24[2] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var29 = var21.buttonContainer;
        var25.style = var29;
        var31 = _closure1_slot9;
        var28 = var12[var28];
        var28 = var6.bind(var3)(var28);
        var29 = var28.Button;
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
        var28 = var31.bind(var3)(var29, var28);
        var25.children = var28;
        var25 = var26.bind(var3)(var22, var25);
        var24[3] = var25;
        var23.children = var24;
        var23 = var2.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[5] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot27;
        var24 = new Array(3);
        var24[0] = var25;
        var25 = _closure1_slot28;
        var24[1] = var25;
        var25 = _closure1_slot29;
        var24[2] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var23 = {};
        var25 = _closure1_slot9;
        var24 = {};
        var26 = var21.buttonContainer;
        var24.style = var26;
        var26 = _closure1_slot30;
        var24.children = var26;
        var25 = var25.bind(var3)(var22, var24);
        var24 = new Array(2);
        var24[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var21.buttonContainer;
        var25.style = var28;
        var28 = _closure1_slot31;
        var25.children = var28;
        var25 = var26.bind(var3)(var22, var25);
        var24[1] = var25;
        var23.children = var24;
        var23 = var2.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[6] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot32;
        var24 = new Array(3);
        var24[0] = var25;
        var25 = _closure1_slot33;
        var24[1] = var25;
        var25 = _closure1_slot34;
        var24[2] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var26 = var34.map;
        var25 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot66;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var34)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[7] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var24 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var25 = var21.container;
        var20.style = var25;
        var25 = _closure1_slot35;
        var20.children = var25;
        var23 = var24.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var26 = var35.map;
        var25 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = _closure2_slot0;
            var5 = var5.buttonContainer;
            var1.style = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot66;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var35)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[8] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var24 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var25 = var21.container;
        var20.style = var25;
        var25 = _closure1_slot36;
        var20.children = var25;
        var23 = var24.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var24 = _closure1_slot9;
        var23 = {};
        var26 = var27.map;
        var25 = function(arg0) { // Environment: var9
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
            var6 = _closure1_slot66;
            var5 = {};
            var5.variant = var4;
            var0 = undefined;
            var5 = var7.bind(var0)(var6, var5);
            var1.children = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var25 = var26.bind(var27)(var25);
        var23.children = var25;
        var23 = var24.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[9] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot37;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot38;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var23 = {};
        var25 = _closure1_slot9;
        var24 = {};
        var27 = var21.buttonContainer;
        var26 = new Array(1);
        var26[0] = var27;
        var24.style = var26;
        var26 = _closure1_slot39;
        var24.children = var26;
        var25 = var25.bind(var3)(var22, var24);
        var24 = new Array(3);
        var24[0] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var21.buttonContainer;
        var27 = new Array(1);
        var27[0] = var28;
        var25.style = var27;
        var27 = _closure1_slot40;
        var25.children = var27;
        var25 = var26.bind(var3)(var22, var25);
        var24[1] = var25;
        var26 = _closure1_slot9;
        var25 = {};
        var28 = var21.buttonContainer;
        var27 = new Array(1);
        var27[0] = var28;
        var25.style = var27;
        var27 = _closure1_slot41;
        var25.children = var27;
        var25 = var26.bind(var3)(var22, var25);
        var24[2] = var25;
        var23.children = var24;
        var23 = var2.bind(var3)(var22, var23);
        var20[1] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[10] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var8.spacing = var18;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot42;
        var24 = new Array(3);
        var24[0] = var25;
        var25 = _closure1_slot43;
        var24[1] = var25;
        var25 = _closure1_slot44;
        var24[2] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(3);
        var20[0] = var23;
        var25 = _closure1_slot9;
        var23 = {};
        var36 = true;
        var23.horizontal = var36;
        var24 = {};
        var27 = '100%';
        var24.minWidth = var27;
        var23.contentContainerStyle = var24;
        var29 = _closure1_slot9;
        var24 = var12[var19];
        var24 = var6.bind(var3)(var24);
        var28 = var24.Stack;
        var26 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var24 = 'horizontal';
        var31 = var21.buttonContainer;
        var26.style = var31;
        var32 = var34.map;
        var31 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot66;
            var1 = {};
            var1.variant = var4;
            var0 = true;
            var1.showLabel = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var31 = var32.bind(var34)(var31);
        var26.children = var31;
        var26 = var29.bind(var3)(var28, var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var7, var23);
        var20[1] = var23;
        var25 = _closure1_slot9;
        var23 = {};
        var23.horizontal = var36;
        var26 = {};
        var26.minWidth = var27;
        var23.contentContainerStyle = var26;
        var26 = var12[var19];
        var26 = var6.bind(var3)(var26);
        var28 = var26.Stack;
        var26 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var29 = var21.buttonContainer;
        var26.style = var29;
        var32 = _closure1_slot9;
        var29 = var12[var30];
        var29 = var6.bind(var3)(var29);
        var31 = var29.IconButton;
        var29 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var33 = var12[var10];
        var33 = var11.bind(var3)(var33);
        var29.icon = var33;
        var33 = function() {
            var0 = undefined;
            return var0;
        };
        var29.onPress = var33;
        var31 = var32.bind(var3)(var31, var29);
        var29 = new Array(3);
        var29[0] = var31;
        var33 = _closure1_slot9;
        var31 = var12[var30];
        var31 = var6.bind(var3)(var31);
        var32 = var31.IconButton;
        var31 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var37 = var12[var10];
        var37 = var11.bind(var3)(var37);
        var31.icon = var37;
        var37 = function() {
            var0 = undefined;
            return var0;
        };
        var31.onPress = var37;
        var31 = var33.bind(var3)(var32, var31);
        var29[1] = var31;
        var32 = _closure1_slot9;
        var30 = var12[var30];
        var30 = var6.bind(var3)(var30);
        var31 = var30.IconButton;
        var30 = {
            'variant': 'secondary',
            'icon': null,
            'label': 'Supercalifragilisticexpialidocious',
            'grow': true
        };
        var33 = var12[var10];
        var33 = var11.bind(var3)(var33);
        var30.icon = var33;
        var33 = function() {
            var0 = undefined;
            return var0;
        };
        var30.onPress = var33;
        var30 = var32.bind(var3)(var31, var30);
        var29[2] = var30;
        var26.children = var29;
        var26 = var2.bind(var3)(var28, var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var7, var23);
        var20[2] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[11] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var8.spacing = var18;
        var25 = _closure1_slot9;
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var26 = var21.container;
        var20.style = var26;
        var26 = _closure1_slot45;
        var20.children = var26;
        var23 = var25.bind(var3)(var23, var20);
        var20 = new Array(3);
        var20[0] = var23;
        var25 = _closure1_slot9;
        var23 = {};
        var23.horizontal = var36;
        var26 = {};
        var26.minWidth = var27;
        var23.contentContainerStyle = var26;
        var26 = var12[var19];
        var26 = var6.bind(var3)(var26);
        var28 = var26.Stack;
        var26 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var29 = var21.buttonContainer;
        var26.style = var29;
        var30 = _closure1_slot46;
        var29 = new Array(3);
        var29[0] = var30;
        var30 = _closure1_slot47;
        var29[1] = var30;
        var30 = _closure1_slot48;
        var29[2] = var30;
        var26.children = var29;
        var26 = var2.bind(var3)(var28, var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var7, var23);
        var20[1] = var23;
        var25 = _closure1_slot9;
        var23 = {};
        var23.horizontal = var36;
        var26 = {};
        var26.minWidth = var27;
        var23.contentContainerStyle = var26;
        var26 = var12[var19];
        var26 = var6.bind(var3)(var26);
        var27 = var26.Stack;
        var26 = {
            'direction': 'horizontal',
            'justify': 'center'
        };
        var28 = var21.buttonContainer;
        var26.style = var28;
        var29 = _closure1_slot49;
        var28 = new Array(3);
        var28[0] = var29;
        var29 = _closure1_slot50;
        var28[1] = var29;
        var29 = _closure1_slot51;
        var28[2] = var29;
        var26.children = var28;
        var26 = var2.bind(var3)(var27, var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var7, var23);
        var20[2] = var23;
        var8.children = var20;
        var8 = var2.bind(var3)(var17, var8);
        var16[12] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var17 = var8.Stack;
        var8 = {};
        var8.spacing = var18;
        var23 = _closure1_slot9;
        var18 = var12[var19];
        var18 = var6.bind(var3)(var18);
        var20 = var18.Stack;
        var18 = {};
        var25 = var21.container;
        var18.style = var25;
        var25 = _closure1_slot52;
        var18.children = var25;
        var20 = var23.bind(var3)(var20, var18);
        var18 = new Array(2);
        var18[0] = var20;
        var20 = 30;
        var20 = var12[var20];
        var20 = var6.bind(var3)(var20);
        var23 = var20.ButtonGroup;
        var20 = {};
        var20.direction = var24;
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot53;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot54;
        var24[1] = var25;
        var20.children = var24;
        var20 = var2.bind(var3)(var23, var20);
        var18[1] = var20;
        var8.children = var18;
        var8 = var2.bind(var3)(var17, var8);
        var16[13] = var8;
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var18 = var8.Stack;
        var17 = {};
        var8 = var12[var19];
        var8 = var6.bind(var3)(var8);
        var20 = var8.Stack;
        var8 = {};
        var23 = var21.container;
        var8.style = var23;
        var24 = _closure1_slot55;
        var23 = new Array(2);
        var23[0] = var24;
        var24 = _closure1_slot56;
        var23[1] = var24;
        var8.children = var23;
        var8 = var2.bind(var3)(var20, var8);
        var20 = new Array(2);
        var20[0] = var8;
        var25 = _closure1_slot9;
        var26 = 31;
        var8 = var12[var26];
        var8 = var6.bind(var3)(var8);
        var24 = var8.ThemeContextProvider;
        var23 = {};
        var8 = 'light';
        var23.theme = var8;
        var8 = 32;
        var27 = var12[var8];
        var29 = var6.bind(var3)(var27);
        var28 = var29.hex2int;
        var27 = '#ffae70';
        var27 = var28.bind(var29)(var27);
        var23.primaryColor = var27;
        var27 = var12[var8];
        var28 = var6.bind(var3)(var27);
        var27 = var28.hex2int;
        var31 = '#cc2300';
        var27 = var27.bind(var28)(var31);
        var23.secondaryColor = var27;
        var37 = _closure1_slot9;
        var27 = 33;
        var28 = var12[var27];
        var29 = var11.bind(var3)(var28);
        var28 = {};
        var30 = {};
        var32 = 16;
        var30.padding = var32;
        var28.style = var30;
        var33 = 0;
        var30 = {
            'x': 0,
            'y': 0
        };
        var28.start = var30;
        var30 = {
            'x': 0,
            'y': 1
        };
        var28.end = var30;
        var30 = ['#ffae70', '#cc2300'];
        var28.colors = var30;
        var40 = _closure1_slot9;
        var30 = 34;
        var38 = var12[var30];
        var38 = var6.bind(var3)(var38);
        var39 = var38.Card;
        var38 = {};
        var41 = var12[var19];
        var41 = var6.bind(var3)(var41);
        var42 = var41.Stack;
        var41 = {};
        var41.spacing = var32;
        var44 = var34.map;
        var43 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var44 = var44.bind(var34)(var43);
        var43 = new Array(2);
        var43[0] = var44;
        var45 = var35.map;
        var44 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var44 = var45.bind(var35)(var44);
        var43[1] = var44;
        var41.children = var43;
        var41 = var2.bind(var3)(var42, var41);
        var38.children = var41;
        var38 = var40.bind(var3)(var39, var38);
        var28.children = var38;
        var28 = var37.bind(var3)(var29, var28);
        var23.children = var28;
        var23 = var25.bind(var3)(var24, var23);
        var20[1] = var23;
        var17.children = var20;
        var17 = var2.bind(var3)(var18, var17);
        var16[14] = var17;
        var17 = var12[var19];
        var17 = var6.bind(var3)(var17);
        var18 = var17.Stack;
        var17 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot57;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot58;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var25 = _closure1_slot9;
        var23 = var12[var26];
        var23 = var6.bind(var3)(var23);
        var24 = var23.ThemeContextProvider;
        var23 = {};
        var28 = 'dark';
        var23.theme = var28;
        var28 = var12[var8];
        var37 = var6.bind(var3)(var28);
        var29 = var37.hex2int;
        var28 = '#490000';
        var28 = var29.bind(var37)(var28);
        var23.primaryColor = var28;
        var28 = var12[var8];
        var29 = var6.bind(var3)(var28);
        var28 = var29.hex2int;
        var28 = var28.bind(var29)(var31);
        var23.secondaryColor = var28;
        var29 = _closure1_slot9;
        var27 = var12[var27];
        var28 = var11.bind(var3)(var27);
        var27 = {};
        var31 = {};
        var31.padding = var32;
        var27.style = var31;
        var31 = {
            'x': 0,
            'y': 0
        };
        var27.start = var31;
        var31 = {
            'x': 0,
            'y': 1
        };
        var27.end = var31;
        var31 = ['#490000', '#cc2300'];
        var27.colors = var31;
        var37 = _closure1_slot9;
        var30 = var12[var30];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Card;
        var30 = {};
        var38 = var12[var19];
        var38 = var6.bind(var3)(var38);
        var39 = var38.Stack;
        var38 = {};
        var38.spacing = var32;
        var41 = var34.map;
        var40 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var41 = var41.bind(var34)(var40);
        var40 = new Array(2);
        var40[0] = var41;
        var42 = var35.map;
        var41 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var41 = var42.bind(var35)(var41);
        var40[1] = var41;
        var38.children = var40;
        var38 = var2.bind(var3)(var39, var38);
        var30.children = var38;
        var30 = var37.bind(var3)(var31, var30);
        var27.children = var30;
        var27 = var29.bind(var3)(var28, var27);
        var23.children = var27;
        var23 = var25.bind(var3)(var24, var23);
        var20[1] = var23;
        var17.children = var20;
        var17 = var2.bind(var3)(var18, var17);
        var16[15] = var17;
        var17 = var12[var19];
        var17 = var6.bind(var3)(var17);
        var18 = var17.Stack;
        var17 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot59;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot60;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var25 = _closure1_slot9;
        var23 = var12[var26];
        var23 = var6.bind(var3)(var23);
        var24 = var23.ThemeContextProvider;
        var23 = {};
        var37 = _closure1_slot7;
        var27 = var37[var33];
        var27 = var27.theme;
        var23.theme = var27;
        var27 = var37[var33];
        var23.gradient = var27;
        var27 = var12[var26];
        var29 = var6.bind(var3)(var27);
        var28 = var29.setThemeFlag;
        var27 = var12[var26];
        var27 = var6.bind(var3)(var27);
        var27 = var27.ThemeContextFlags;
        var27 = var27.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
        var27 = var28.bind(var29)(var33, var27);
        var23.flags = var27;
        var28 = {};
        var27 = {
            'position': 'relative',
            'padding': 16
        };
        var28.style = var27;
        var31 = _closure1_slot9;
        var27 = 35;
        var29 = var12[var27];
        var29 = var6.bind(var3)(var29);
        var30 = var29.Gradient;
        var29 = {};
        var29.absolute = var36;
        var37 = var37[var33];
        var29.gradient = var37;
        var30 = var31.bind(var3)(var30, var29);
        var29 = new Array(2);
        var29[0] = var30;
        var38 = _closure1_slot9;
        var30 = {};
        var39 = {
            'backgroundColor': null,
            'padding': 16,
            'borderRadius': 16
        };
        var31 = 36;
        var37 = var12[var31];
        var42 = var6.bind(var3)(var37);
        var41 = var42.setColorOpacity;
        var40 = 'white';
        var37 = 0.7;
        var40 = var41.bind(var42)(var40, var37);
        var39.backgroundColor = var40;
        var30.style = var39;
        var39 = var12[var19];
        var39 = var6.bind(var3)(var39);
        var40 = var39.Stack;
        var39 = {};
        var39.spacing = var32;
        var42 = var34.map;
        var41 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var42 = var42.bind(var34)(var41);
        var41 = new Array(2);
        var41[0] = var42;
        var43 = var35.map;
        var42 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var42 = var43.bind(var35)(var42);
        var41[1] = var42;
        var39.children = var41;
        var39 = var2.bind(var3)(var40, var39);
        var30.children = var39;
        var30 = var38.bind(var3)(var22, var30);
        var29[1] = var30;
        var28.children = var29;
        var28 = var2.bind(var3)(var22, var28);
        var23.children = var28;
        var23 = var25.bind(var3)(var24, var23);
        var20[1] = var23;
        var17.children = var20;
        var17 = var2.bind(var3)(var18, var17);
        var16[16] = var17;
        var17 = var12[var19];
        var17 = var6.bind(var3)(var17);
        var18 = var17.Stack;
        var17 = {};
        var20 = var12[var19];
        var20 = var6.bind(var3)(var20);
        var23 = var20.Stack;
        var20 = {};
        var24 = var21.container;
        var20.style = var24;
        var25 = _closure1_slot61;
        var24 = new Array(2);
        var24[0] = var25;
        var25 = _closure1_slot62;
        var24[1] = var25;
        var20.children = var24;
        var23 = var2.bind(var3)(var23, var20);
        var20 = new Array(2);
        var20[0] = var23;
        var25 = _closure1_slot9;
        var23 = var12[var26];
        var23 = var6.bind(var3)(var23);
        var24 = var23.ThemeContextProvider;
        var23 = {};
        var30 = _closure1_slot8;
        var28 = var30[var33];
        var28 = var28.theme;
        var23.theme = var28;
        var28 = var30[var33];
        var23.gradient = var28;
        var28 = var12[var26];
        var29 = var6.bind(var3)(var28);
        var28 = var29.setThemeFlag;
        var26 = var12[var26];
        var26 = var6.bind(var3)(var26);
        var26 = var26.ThemeContextFlags;
        var26 = var26.MOBILE_DARK_GRADIENT_THEME_ENABLED;
        var26 = var28.bind(var29)(var33, var26);
        var23.flags = var26;
        var26 = {};
        var28 = {
            'position': 'relative',
            'padding': 16
        };
        var26.style = var28;
        var29 = _closure1_slot9;
        var27 = var12[var27];
        var27 = var6.bind(var3)(var27);
        var28 = var27.Gradient;
        var27 = {};
        var27.absolute = var36;
        var30 = var30[var33];
        var27.gradient = var30;
        var28 = var29.bind(var3)(var28, var27);
        var27 = new Array(2);
        var27[0] = var28;
        var29 = _closure1_slot9;
        var28 = {};
        var30 = {
            'backgroundColor': null,
            'padding': 16,
            'borderRadius': 16
        };
        var31 = var12[var31];
        var36 = var6.bind(var3)(var31);
        var33 = var36.setColorOpacity;
        var31 = 'black';
        var31 = var33.bind(var36)(var31, var37);
        var30.backgroundColor = var31;
        var28.style = var30;
        var30 = var12[var19];
        var30 = var6.bind(var3)(var30);
        var31 = var30.Stack;
        var30 = {};
        var30.spacing = var32;
        var33 = var34.map;
        var32 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var33 = var33.bind(var34)(var32);
        var32 = new Array(2);
        var32[0] = var33;
        var34 = var35.map;
        var33 = function(arg0) { // Environment: var9
            var4 = arg0;
            var3 = _closure1_slot9;
            var2 = _closure1_slot65;
            var1 = {};
            var1.variant = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var33 = var34.bind(var35)(var33);
        var32[1] = var33;
        var30.children = var32;
        var30 = var2.bind(var3)(var31, var30);
        var28.children = var30;
        var28 = var29.bind(var3)(var22, var28);
        var27[1] = var28;
        var26.children = var27;
        var26 = var2.bind(var3)(var22, var26);
        var23.children = var26;
        var23 = var25.bind(var3)(var24, var23);
        var20[1] = var23;
        var17.children = var20;
        var17 = var2.bind(var3)(var18, var17);
        var16[17] = var17;
        var17 = var12[var19];
        var17 = var6.bind(var3)(var17);
        var18 = var17.Stack;
        var17 = {};
        var19 = var12[var19];
        var19 = var6.bind(var3)(var19);
        var20 = var19.Stack;
        var19 = {};
        var21 = var21.container;
        var19.style = var21;
        var23 = _closure1_slot63;
        var21 = new Array(2);
        var21[0] = var23;
        var23 = _closure1_slot64;
        var21[1] = var23;
        var19.children = var21;
        var20 = var2.bind(var3)(var20, var19);
        var19 = new Array(2);
        var19[0] = var20;
        var21 = _closure1_slot9;
        var20 = {};
        var23 = {};
        var24 = 48;
        var23.padding = var24;
        var20.style = var23;
        var20 = var21.bind(var3)(var22, var20);
        var19[1] = var20;
        var17.children = var19;
        var17 = var2.bind(var3)(var18, var17);
        var16[18] = var17;
        var14.children = var16;
        var14 = var2.bind(var3)(var15, var14);
        var4.children = var14;
        var7 = var13.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot9;
        var5 = 37;
        var5 = var12[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.FloatingActionButton;
        var5 = {};
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var5.icon = var10;
        var9 = function() {
            var0 = undefined;
            return var0;
        };
        var5.onPress = var9;
        var5.positionBottom = var8;
        var8 = 'Floating Action Button';
        var5.accessibilityLabel = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3211, 33, 11196, 4090, 11197, 7585, 5435, 9055, 11198, 9081, 6759, 8589, 1297, 671, 3938, 7842, 9046, 9051, 9053, 9052, 9050, 9049, 1469, 3279, 11199, 1307, 4086, 6532, 3161, 668, 4104, 4878, 7690, 3209, 7130, 2]);