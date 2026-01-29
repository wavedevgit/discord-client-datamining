// design/components/Button/native/ButtonPill.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function(arg0) { // Original name: PillWrapper, environment: var5
        _fun37371: for (var _fun37371_ip = 0;;) switch (_fun37371_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.children;
                var1 = var0.variant;
                var13 = var0.style;
                var9 = var0.pressed;
                var0 = var0.shiny;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun37371_ip = 38;
                    continue _fun37371
                }
            case 36:
                var0 = false;
            case 38:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 7;
                var3 = var8[var2];
                var7 = var5.bind(var4)(var3);
                var3 = var7.useButtonPillStyles;
                var12 = var3.bind(var7)(var1, var9);
                var2 = var8[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.useGradientPillStyles;
                var17 = var2.bind(var3)(var1);
                var3 = 8;
                var2 = var8[var3];
                var14 = var5.bind(var4)(var2);
                var10 = var14.useToken;
                var7 = _closure1_slot1;
                var2 = 6;
                var9 = var8[var2];
                var9 = var7.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT;
                var9 = var10.bind(var14)(var9);
                var15 = new Array(3);
                var15[0] = var9;
                var9 = var8[var3];
                var14 = var5.bind(var4)(var9);
                var10 = var14.useToken;
                var9 = var8[var2];
                var9 = var7.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2;
                var9 = var10.bind(var14)(var9);
                var15[1] = var9;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useToken;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT;
                var2 = var3.bind(var5)(var2);
                var15[2] = var2;
                var10 = null;
                if (!var0) {
                    _fun37371_ip = 286;
                    continue _fun37371
                }
            case 244:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.ButtonShine;
                var0 = {};
                var0.variant = var1;
                var10 = var3.bind(var4)(var2, var0);
            case 286:
                var0 = 'experimental_premium-primary';
                if (!(var0 !== var1)) {
                    _fun37371_ip = 370;
                    continue _fun37371
                }
            case 296:
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.View;
                var0 = {};
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var12;
                var0.style = var3;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var10;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun37371_ip = 557;
                continue _fun37371;
            case 370:
                var3 = _closure1_slot8;
                var2 = _closure1_slot9;
                var1 = {};
                var14 = _closure1_slot7;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 10;
                var5 = var9[var5];
                var8 = var7.bind(var4)(var5);
                var5 = {};
                var16 = {
                    'x': 0,
                    'y': 0
                };
                var5.start = var16;
                var16 = {
                    'x': 1,
                    'y': 0
                };
                var5.end = var16;
                var16 = new Array(3);
                var16[0] = var13;
                var16[1] = var17;
                var17 = _closure1_slot6;
                var17 = var17.absoluteFill;
                var16[2] = var17;
                var5.style = var16;
                var5.colors = var15;
                var8 = var14.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot8;
                var6 = 11;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.View;
                var6 = {};
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var6.style = var9;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 557:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var4 = function(arg0) { // Original name: BasicButtonPill, environment: var5
        _fun37372: for (var _fun37372_ip = 0;;) switch (_fun37372_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.children;
                var10 = var0.style;
                var6 = var0.pressed;
                var9 = var0.variant;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun37372_ip = 34;
                    continue _fun37372
                }
            case 30:
                var9 = 'primary';
            case 34:
                var1 = var0.size;
                if (!(var1 === var3)) {
                    _fun37372_ip = 72;
                    continue _fun37372
                }
            case 43:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var1 = var2.DEFAULT_BUTTON_SIZE;
            case 72:
                var5 = var0.shiny;
                if (!(var5 === var3)) {
                    _fun37372_ip = 84;
                    continue _fun37372
                }
            case 82:
                var5 = false;
            case 84:
                var0 = _closure1_slot14;
                var8 = var0.bind(var3)(var9, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot17;
                var0 = {};
                var0.variant = var9;
                var11 = var8.pill;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var0.style = var9;
                var0.pressed = var6;
                var0.shiny = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var8.childContainer;
                var4.style = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var3 = function(arg0) { // Original name: LoadingButtonPill, environment: var5
        _fun37373: for (var _fun37373_ip = 0;;) switch (_fun37373_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.children;
                var6 = var1.style;
                var4 = var1.pressed;
                var15 = var1.variant;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun37373_ip = 36;
                    continue _fun37373
                }
            case 32:
                var15 = 'primary';
            case 36:
                var12 = var1.size;
                if (!(var12 === var3)) {
                    _fun37373_ip = 74;
                    continue _fun37373
                }
            case 45:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var12 = var2.DEFAULT_BUTTON_SIZE;
            case 74:
                var5 = var1.loading;
                if (!(var5 === var3)) {
                    _fun37373_ip = 86;
                    continue _fun37373
                }
            case 84:
                var5 = false;
            case 86:
                var _closure2_slot0 = var5;
                var13 = var1.loaderSize;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot14;
                var10 = var1.bind(var3)(var15, var12);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var14 = null;
                var1 = var1.bind(var2)(var14);
                _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var2 = var1.bind(var2)(var5);
                var1 = _closure1_slot3;
                var7 = 2;
                var11 = var1.bind(var3)(var2, var7);
                var2 = 0;
                var8 = var11[var2];
                var1 = 1;
                var11 = var11[var1];
                _closure2_slot2 = var11;
                var17 = _closure1_slot4;
                var16 = var17.useEffect;
                var11 = new Array(1);
                var11[0] = var5;
                var0 = function() { // Environment: var0
                    _fun37374: for (var _fun37374_ip = 0;;) switch (_fun37374_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun37374_ip = 42;
                                continue _fun37374
                            }
                        case 18:
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 42:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun37374_ip = 90;
                                continue _fun37374
                            }
                        case 49:
                            var2 = _closure2_slot1;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 500;
                            var1 = var5.bind(var4)(var3, var1);
                            var2.current = var1;
                            _fun37374_ip = 103;
                            continue _fun37374;
                        case 90:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var16.bind(var17)(var0, var11);
                var0 = _closure1_slot20;
                var5 = var0.bind(var3)(var5, var12);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var5, var7);
                var20 = var0[var2];
                var11 = var0[var1];
                var2 = _closure1_slot8;
                var1 = _closure1_slot17;
                var0 = {};
                var0.variant = var15;
                var7 = var10.pill;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.pressed = var4;
                var17 = _closure1_slot7;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 11;
                var4 = var16[var5];
                var4 = var6.bind(var3)(var4);
                var7 = var4.View;
                var4 = {};
                var21 = var10.childContainer;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var4.style = var19;
                var4.children = var18;
                var7 = var17.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot7;
                var5 = var16[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var16 = var10.ellipsis;
                var10 = new Array(2);
                var10[0] = var16;
                var10[1] = var11;
                var5.style = var10;
                if (!var8) {
                    _fun37373_ip = 447;
                    continue _fun37373
                }
            case 394:
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 12;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Ellipsis;
                var9 = {};
                var9.variant = var15;
                if (!(var14 != var13)) {
                    _fun37373_ip = 437;
                    continue _fun37373
                }
            case 434:
                var12 = var13;
            case 437:
                var9.size = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 447:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var1 = function(arg0, arg1) { // Original name: useLoadingStyles, environment: var5
        _fun37376: for (var _fun37376_ip = 0;;) switch (_fun37376_ip) {
            case 0:
                var13 = arg0;
                var _closure2_slot0 = var13;
                var3 = _closure1_slot4;
                var2 = var3.useContext;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 13;
                var0 = var6[var0];
                var9 = undefined;
                var0 = var5.bind(var9)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var2.bind(var3)(var0);
                var0 = var0.reducedMotion;
                var11 = var0.enabled;
                var _closure2_slot1 = var11;
                var6 = 12;
                var2 = 'lg';
                var0 = arg1;
                if (!(var2 === var0)) {
                    _fun37376_ip = 87;
                    continue _fun37376
                }
            case 84:
                var6 = 18;
            case 87:
                var _closure2_slot2 = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 11;
                var0 = var10[var7];
                var3 = var8.bind(var9)(var0);
                var2 = var3.useAnimatedStyle;
                var0 = function() { // Original name: o, environment: var1
                    _fun37377: for (var _fun37377_ip = 0;;) switch (_fun37377_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 14;
                            var0 = var0[var8];
                            var7 = undefined;
                            var6 = var1.bind(var7)(var0);
                            var5 = var6.withSpring;
                            var0 = _closure2_slot0;
                            var4 = 1;
                            if (!var0) {
                                _fun37377_ip = 45;
                                continue _fun37377
                            }
                        case 43:
                            var4 = 0;
                        case 45:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var11 = 15;
                            var0 = var0[var11];
                            var0 = var1.bind(var7)(var0);
                            var1 = var0.SUBTLE_SPRING;
                            var0 = 'animate-always';
                            var6 = var5.bind(var6)(var4, var1, var0);
                            var0 = _closure2_slot1;
                            var1 = {};
                            if (var0) {
                                _fun37377_ip = 195;
                                continue _fun37377
                            }
                        case 93:
                            var1.opacity = var6;
                            var4 = {};
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var8];
                            var9 = var5.bind(var7)(var0);
                            var8 = var9.withSpring;
                            var0 = _closure2_slot0;
                            var5 = 0;
                            if (!var0) {
                                _fun37377_ip = 144;
                                continue _fun37377
                            }
                        case 130:
                            var10 = _closure2_slot2;
                            var0 = -1;
                            var5 = var0 * var10;
                        case 144:
                            var10 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var11];
                            var0 = var10.bind(var7)(var0);
                            var0 = var0.SUBTLE_SPRING;
                            var0 = var8.bind(var9)(var5, var0);
                            var4.translateY = var0;
                            var0 = new Array(1);
                            var0[0] = var4;
                            var1.transform = var0;
                            var0 = var1;
                            _fun37377_ip = 269;
                            continue _fun37377;
                        case 195:
                            var4 = _closure2_slot0;
                            var2 = var6;
                            if (var4) {
                                _fun37377_ip = 241;
                                continue _fun37377
                            }
                        case 205:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 11;
                            var4 = var8[var4];
                            var5 = var5.bind(var7)(var4);
                            var4 = var5.withDelay;
                            var3 = _closure1_slot10;
                            var2 = var4.bind(var5)(var3, var6);
                        case 241:
                            var1.opacity = var2;
                            var3 = {};
                            var2 = 0;
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1.transform = var2;
                            var0 = var1;
                        case 269:
                            return var0;
                    }
                };
                var5 = {};
                var14 = 14;
                var12 = var10[var14];
                var12 = var8.bind(var9)(var12);
                var12 = var12.withSpring;
                var5.withSpring = var12;
                var5.loading = var13;
                var12 = 15;
                var15 = var10[var12];
                var15 = var8.bind(var9)(var15);
                var15 = var15.SUBTLE_SPRING;
                var5.SUBTLE_SPRING = var15;
                var5.useReducedMotion = var11;
                var15 = var10[var7];
                var15 = var8.bind(var9)(var15);
                var15 = var15.withDelay;
                var5.withDelay = var15;
                var15 = _closure1_slot10;
                var5.FADE_DELAY = var15;
                var5.offsetY = var6;
                var0.__closure = var5;
                var5 = 9388603334085.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot15;
                var0.__initData = var5;
                var2 = var2.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var2;
                var2 = var10[var7];
                var3 = var8.bind(var9)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function() { // Original name: s, environment: var1
                    _fun37378: for (var _fun37378_ip = 0;;) switch (_fun37378_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var9 = 14;
                            var0 = var0[var9];
                            var8 = undefined;
                            var7 = var1.bind(var8)(var0);
                            var6 = var7.withSpring;
                            var0 = _closure2_slot0;
                            var2 = 0;
                            var5 = 0;
                            if (!var0) {
                                _fun37378_ip = 47;
                                continue _fun37378
                            }
                        case 44:
                            var5 = 1;
                        case 47:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var12 = 15;
                            var0 = var0[var12];
                            var0 = var1.bind(var8)(var0);
                            var1 = var0.SUBTLE_SPRING;
                            var0 = 'animate-always';
                            var7 = var6.bind(var7)(var5, var1, var0);
                            var0 = _closure2_slot1;
                            var1 = {};
                            if (var0) {
                                _fun37378_ip = 187;
                                continue _fun37378
                            }
                        case 95:
                            var1.opacity = var7;
                            var5 = {};
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var9];
                            var10 = var6.bind(var8)(var0);
                            var9 = var10.withSpring;
                            var0 = _closure2_slot0;
                            var6 = 0;
                            if (var0) {
                                _fun37378_ip = 136;
                                continue _fun37378
                            }
                        case 132:
                            var6 = _closure2_slot2;
                        case 136:
                            var11 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var12];
                            var0 = var11.bind(var8)(var0);
                            var0 = var0.SUBTLE_SPRING;
                            var0 = var9.bind(var10)(var6, var0);
                            var5.translateY = var0;
                            var0 = new Array(1);
                            var0[0] = var5;
                            var1.transform = var0;
                            var0 = var1;
                            _fun37378_ip = 259;
                            continue _fun37378;
                        case 187:
                            var5 = _closure2_slot0;
                            var3 = var7;
                            if (!var5) {
                                _fun37378_ip = 233;
                                continue _fun37378
                            }
                        case 197:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 11;
                            var5 = var9[var5];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.withDelay;
                            var4 = _closure1_slot10;
                            var3 = var5.bind(var6)(var4, var7);
                        case 233:
                            var1.opacity = var3;
                            var3 = {};
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1.transform = var2;
                            var0 = var1;
                        case 259:
                            return var0;
                    }
                };
                var5 = {};
                var14 = var10[var14];
                var14 = var8.bind(var9)(var14);
                var14 = var14.withSpring;
                var5.withSpring = var14;
                var5.loading = var13;
                var12 = var10[var12];
                var12 = var8.bind(var9)(var12);
                var12 = var12.SUBTLE_SPRING;
                var5.SUBTLE_SPRING = var12;
                var5.useReducedMotion = var11;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.withDelay;
                var5.withDelay = var7;
                var7 = _closure1_slot10;
                var5.FADE_DELAY = var7;
                var5.offsetY = var6;
                var1.__closure = var5;
                var5 = 8255420825872.0;
                var1.__workletHash = var5;
                var4 = _closure1_slot16;
                var1.__initData = var4;
                var1 = var2.bind(var3)(var1);
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.View;
    var _closure1_slot5 = var9;
    var6 = var6.StyleSheet;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.jsx;
    var _closure1_slot7 = var9;
    var9 = var6.jsxs;
    var _closure1_slot8 = var9;
    var6 = var6.Fragment;
    var _closure1_slot9 = var6;
    var6 = 300;
    var _closure1_slot10 = var6;
    var6 = 4;
    var9 = var8[var6];
    var12 = var7.bind(var0)(var9);
    var11 = var12.getButtonPadding;
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var10 = var9.SMALL_BUTTON_HEIGHT;
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.SMALL_BUTTON_ICON_SIZE;
    var9 = var11.bind(var12)(var10, var9);
    var _closure1_slot11 = var9;
    var9 = var8[var6];
    var12 = var7.bind(var0)(var9);
    var11 = var12.getButtonPadding;
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var10 = var9.MEDIUM_BUTTON_HEIGHT;
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.MEDIUM_BUTTON_ICON_SIZE;
    var9 = var11.bind(var12)(var10, var9);
    var _closure1_slot12 = var9;
    var9 = var8[var6];
    var11 = var7.bind(var0)(var9);
    var10 = var11.getButtonPadding;
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.LARGE_BUTTON_HEIGHT;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.LARGE_BUTTON_ICON_SIZE;
    var6 = var10.bind(var11)(var9, var6);
    var _closure1_slot13 = var6;
    var6 = 5;
    var6 = var8[var6];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = function(arg0, arg1) { // Environment: var5
        _fun37379: for (var _fun37379_ip = 0;;) switch (_fun37379_ip) {
            case 0:
                var1 = arg1;
                var2 = {};
                var0 = 'sm';
                if (!(var0 !== var1)) {
                    _fun37379_ip = 220;
                    continue _fun37379
                }
            case 16:
                var0 = 'md';
                if (!(var0 !== var1)) {
                    _fun37379_ip = 129;
                    continue _fun37379
                }
            case 24:
                var0 = 'lg';
                if (!(var0 === var1)) {
                    _fun37379_ip = 309;
                    continue _fun37379
                }
            case 35:
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.LARGE_BUTTON_HEIGHT;
                var0.minHeight = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.LARGE_BUTTON_HEIGHT;
                var0.minWidth = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.LARGE_BUTTON_HORIZONTAL_PADDING;
                var0.paddingHorizontal = var3;
                var1 = _closure1_slot13;
                var0.paddingVertical = var1;
                var2 = var0;
                _fun37379_ip = 309;
                continue _fun37379;
            case 129:
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.MEDIUM_BUTTON_HEIGHT;
                var0.minHeight = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.MEDIUM_BUTTON_HEIGHT;
                var0.minWidth = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.MEDIUM_BUTTON_HORIZONTAL_PADDING;
                var0.paddingHorizontal = var3;
                var1 = _closure1_slot12;
                var0.paddingVertical = var1;
                var2 = var0;
                _fun37379_ip = 309;
                continue _fun37379;
            case 220:
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var7 = var7.SMALL_BUTTON_HEIGHT;
                var0.minHeight = var7;
                var7 = var6[var3];
                var7 = var5.bind(var4)(var7);
                var7 = var7.SMALL_BUTTON_HEIGHT;
                var0.minWidth = var7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.SMALL_BUTTON_HORIZONTAL_PADDING;
                var0.paddingHorizontal = var3;
                var1 = _closure1_slot11;
                var0.paddingVertical = var1;
                var2 = var0;
            case 309:
                var0 = {};
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'overflow': 'hidden'
                };
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 4;
                var4 = var6[var4];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.BUTTON_BORDER_WIDTH;
                var1.borderWidth = var4;
                var4 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderRadius = var3;
                var9 = var1;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                var0.pill = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'flexGrow': 1,
                    'maxWidth': '100%'
                };
                var0.childContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'height': '100%',
                    'width': '100%',
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var0.ellipsis = var1;
                return var0;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var6 = {};
    var9 = "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}";
    var6.code = var9;
    var _closure1_slot15 = var6;
    var6 = {};
    var9 = "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}";
    var6.code = var9;
    var _closure1_slot16 = var6;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/Button/native/ButtonPill.native.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function(arg0) { // Original name: ButtonPill, environment: var5
        _fun37380: for (var _fun37380_ip = 0;;) switch (_fun37380_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.loading;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun37380_ip = 48;
                    continue _fun37380
                }
            case 15:
                var4 = _closure1_slot7;
                var3 = _closure1_slot19;
                var2 = {};
                var6 = var2;
                var5 = var1;
                var0 = copyDataProperties(var6, var5);
                var0 = undefined;
                var0 = var4.bind(var0)(var3, var2);
                _fun37380_ip = 79;
                continue _fun37380;
            case 48:
                var4 = _closure1_slot7;
                var3 = _closure1_slot18;
                var2 = {};
                var6 = var2;
                var5 = var1;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 79:
                return var0;
        }
    };
    var2.ButtonPill = var5;
    var2.BasicButtonPill = var4;
    var2.LoadingButtonPill = var3;
    var2.useLoadingStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 4041, 1297, 671, 4042, 3110, 4049, 4051, 3677, 4055, 3124, 4034, 4040, 2]);