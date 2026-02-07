// modules/collectibles/native/WishlistButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun88016: for (var _fun88016_ip = 0;;) switch (_fun88016_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.isWishlisted;
                var _closure2_slot0 = var16;
                var12 = var0.onPress;
                var _closure2_slot1 = var12;
                var13 = var0.busy;
                var _closure2_slot2 = var13;
                var9 = var0.disabled;
                var _closure2_slot3 = var9;
                var6 = var0.accessibilityLabel;
                var5 = var0.accessibilityHidden;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun88016_ip = 62;
                    continue _fun88016
                }
            case 60:
                var5 = false;
            case 62:
                var1 = var0.style;
                var _closure2_slot4 = var1;
                var1 = var0.size;
                if (!(var1 === var3)) {
                    _fun88016_ip = 84;
                    continue _fun88016
                }
            case 80:
                var1 = 'sm';
            case 84:
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var0 = _closure1_slot15;
                var7 = var0.bind(var3)(var1);
                _closure2_slot5 = var7;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var4 = var0.ICON_SIZE;
                var0 = _closure1_slot14;
                var0 = var0[var1];
                var10 = var4[var0];
                var0 = 13;
                var0 = var8[var0];
                var4 = var2.bind(var3)(var0);
                var0 = var4.useThemeContext;
                var0 = var0.bind(var4)();
                var4 = var0.theme;
                var0 = 14;
                var0 = var8[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeLight;
                var0 = var0.bind(var2)(var4);
                var2 = _closure1_slot9;
                var2 = var2.MIDNIGHT;
                var2 = var4 === var2;
                _closure2_slot6 = var2;
                var15 = var1;
                if (var0) {
                    _fun88016_ip = 257;
                    continue _fun88016
                }
            case 249:
                var1 = var7.dark;
                _fun88016_ip = 263;
                continue _fun88016;
            case 257:
                var1 = var7.light;
            case 263:
                _closure2_slot7 = var1;
                if (var0) {
                    _fun88016_ip = 278;
                    continue _fun88016
                }
            case 270:
                var0 = var7.darkPressed;
                _fun88016_ip = 284;
                continue _fun88016;
            case 278:
                var0 = var7.lightPressed;
            case 284:
                _closure2_slot8 = var0;
                var2 = _closure1_slot5;
                var1 = var2.useContext;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 15;
                var0 = var8[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var1.bind(var2)(var0);
                var0 = var0.reducedMotion;
                var1 = var0.enabled;
                _closure2_slot9 = var1;
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var0 = false;
                var4 = var2.bind(var4)(var0);
                var2 = _closure1_slot4;
                var0 = 2;
                var2 = var2.bind(var3)(var4, var0);
                var11 = 0;
                var0 = var2[var11];
                _closure2_slot10 = var0;
                var17 = 1;
                var2 = var2[var17];
                _closure2_slot11 = var2;
                var21 = var16;
                if (var21) {
                    _fun88016_ip = 403;
                    continue _fun88016
                }
            case 400:
                var21 = var0;
            case 403:
                _closure2_slot12 = var21;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 7;
                var2 = var2[var8];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSharedValue;
                var11 = 0;
                if (!var16) {
                    _fun88016_ip = 441;
                    continue _fun88016
                }
            case 438:
                var11 = var17;
            case 441:
                var22 = var2.bind(var4)(var11);
                _closure2_slot13 = var22;
                var11 = _closure1_slot5;
                var4 = var11.useCallback;
                var2 = new Array(5);
                var2[0] = var13;
                var2[1] = var12;
                var2[2] = var16;
                var2[3] = var1;
                var2[4] = var0;
                var1 = function() { // Environment: var18
                    _fun88017: for (var _fun88017_ip = 0;;) switch (_fun88017_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun88017_ip = 86;
                                continue _fun88017
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun88017_ip = 39;
                                continue _fun88017
                            }
                        case 17:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun88017_ip = 39;
                                continue _fun88017
                            }
                        case 24:
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            _fun88017_ip = 66;
                            continue _fun88017;
                        case 39:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun88017_ip = 50;
                                continue _fun88017
                            }
                        case 46:
                            var1 = _closure2_slot10;
                        case 50:
                            if (!var1) {
                                _fun88017_ip = 66;
                                continue _fun88017
                            }
                        case 53:
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                        case 66:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88017_ip = 86;
                                continue _fun88017
                            }
                        case 76:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var11)(var1, var2);
                var12 = _closure1_slot5;
                var11 = var12.useEffect;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var0;
                var2[2] = var22;
                var1 = function() { // Environment: var18
                    _fun88018: for (var _fun88018_ip = 0;;) switch (_fun88018_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun88018_ip = 36;
                                continue _fun88018
                            }
                        case 10:
                            var2 = _closure2_slot13;
                            var1 = var2.set;
                            var3 = _closure2_slot0;
                            var0 = 0;
                            if (!var3) {
                                _fun88018_ip = 31;
                                continue _fun88018
                            }
                        case 28:
                            var0 = 1;
                        case 31:
                            var0 = var1.bind(var2)(var0);
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var11.bind(var12)(var1, var2);
                var11 = _closure1_slot5;
                var2 = var11.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var22;
                var0 = function() { // Environment: var18
                    _fun88019: for (var _fun88019_ip = 0;;) switch (_fun88019_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            if (var2) {
                                _fun88019_ip = 16;
                                continue _fun88019
                            }
                        case 12:
                            var2 = undefined;
                            return var2;
                        case 16:
                            var3 = _closure2_slot13;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var1 = global;
                            var3 = var1.requestAnimationFrame;
                            var2 = undefined;
                            var1 = function() { // Environment: var0
                                var3 = _closure2_slot13;
                                var2 = var3.set;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var0 = 16;
                                var4 = var12[var0];
                                var0 = undefined;
                                var8 = var11.bind(var0)(var4);
                                var7 = var8.withTiming;
                                var15 = _closure1_slot12;
                                var5 = function arg0() {
                                    _fun88021: for (var _fun88021_ip = 0;;) switch (_fun88021_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun88021_ip = 55;
                                                continue _fun88021
                                            }
                                        case 6:
                                            var1 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var0 = 7;
                                            var0 = var2[var0];
                                            var2 = undefined;
                                            var3 = var1.bind(var2)(var0);
                                            var1 = var3.runOnJS;
                                            var0 = _closure2_slot11;
                                            var1 = var1.bind(var3)(var0);
                                            var0 = false;
                                            var0 = var1.bind(var2)(var0);
                                        case 55:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4 = {};
                                var10 = 7;
                                var10 = var12[var10];
                                var10 = var11.bind(var0)(var10);
                                var10 = var10.runOnJS;
                                var4.runOnJS = var10;
                                var9 = _closure2_slot11;
                                var4.setIsClickAnimating = var9;
                                var5.__closure = var4;
                                var4 = 13061953734403.0;
                                var5.__workletHash = var4;
                                var1 = _closure1_slot16;
                                var5.__initData = var1;
                                var16 = 1;
                                var14 = 'animate-always';
                                var17 = var8;
                                var13 = var5;
                                var1 = var17[var7](var16, var15, var14, var13, var12);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.cancelAnimationFrame;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var11)(var0, var1);
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = var19[var8];
                var2 = var20.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun88023: for (var _fun88023_ip = 0;;) switch (_fun88023_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot5;
                            var15 = var1.animationFill;
                            var16 = var0;
                            var1 = copyDataProperties(var16, var15);
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var10 = 17;
                            var1 = var1[var10];
                            var8 = undefined;
                            var13 = var3.bind(var8)(var1);
                            var12 = var13.withSpring;
                            var1 = _closure2_slot12;
                            var6 = 1;
                            var11 = var6;
                            if (!var1) {
                                _fun88023_ip = 67;
                                continue _fun88023
                            }
                        case 65:
                            var11 = 0;
                        case 67:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var9 = 18;
                            var1 = var3[var9];
                            var1 = var4.bind(var8)(var1);
                            var1 = var1.SUBTLE_SPRING;
                            var5 = 'animate-always';
                            var11 = var12.bind(var13)(var11, var1, var5);
                            var1 = 'opacity';
                            var0[var1] = var11;
                            var1 = {};
                            var3 = var3[var10];
                            var4 = var4.bind(var8)(var3);
                            var3 = var4.withSpring;
                            var7 = _closure2_slot12;
                            if (!var7) {
                                _fun88023_ip = 148;
                                continue _fun88023
                            }
                        case 138:
                            var6 = 0.9;
                        case 148:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var9];
                            var2 = var7.bind(var8)(var2);
                            var2 = var2.SUBTLE_SPRING;
                            var2 = var3.bind(var4)(var6, var2, var5);
                            var1.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = 'transform';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var11 = {};
                var11.styles = var7;
                var23 = 17;
                var12 = var19[var23];
                var12 = var20.bind(var3)(var12);
                var12 = var12.withSpring;
                var11.withSpring = var12;
                var11.showFilled = var21;
                var17 = 18;
                var12 = var19[var17];
                var12 = var20.bind(var3)(var12);
                var12 = var12.SUBTLE_SPRING;
                var11.SUBTLE_SPRING = var12;
                var0.__closure = var11;
                var11 = 1357254413161.0;
                var0.__workletHash = var11;
                var11 = _closure1_slot17;
                var0.__initData = var11;
                var12 = var1.bind(var2)(var0);
                var0 = var19[var8];
                var2 = var20.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun88024: for (var _fun88024_ip = 0;;) switch (_fun88024_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var0 = var1.get;
                            var7 = var0.bind(var1)();
                            var0 = {};
                            var1 = _closure2_slot5;
                            var12 = var1.animationFill;
                            var13 = var0;
                            var1 = copyDataProperties(var13, var12);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 17;
                            var3 = var4[var3];
                            var4 = undefined;
                            var9 = var5.bind(var4)(var3);
                            var6 = var9.withSpring;
                            var2 = _closure2_slot12;
                            var5 = 0;
                            if (!var2) {
                                _fun88024_ip = 77;
                                continue _fun88024
                            }
                        case 74:
                            var5 = 1;
                        case 77:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 18;
                            var1 = var8[var1];
                            var1 = var3.bind(var4)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var2 = var6.bind(var9)(var5, var2, var1);
                            var1 = 'opacity';
                            var0[var1] = var2;
                            var1 = {};
                            var2 = 7;
                            var5 = var8[var2];
                            var6 = var3.bind(var4)(var5);
                            var5 = var6.interpolate;
                            var2 = var8[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.Extrapolation;
                            var10 = var2.CLAMP;
                            var12 = [0, 0.625, 1];
                            var11 = [0, 1.35, 1];
                            var14 = var6;
                            var13 = var7;
                            var2 = var14[var5](var13, var12, var11, var10, var9);
                            var1.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = 'transform';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var11 = {};
                var11.animationFillProgress = var22;
                var11.styles = var7;
                var23 = var19[var23];
                var23 = var20.bind(var3)(var23);
                var23 = var23.withSpring;
                var11.withSpring = var23;
                var11.showFilled = var21;
                var17 = var19[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.SUBTLE_SPRING;
                var11.SUBTLE_SPRING = var17;
                var17 = var19[var8];
                var17 = var20.bind(var3)(var17);
                var17 = var17.interpolate;
                var11.interpolate = var17;
                var17 = var19[var8];
                var17 = var20.bind(var3)(var17);
                var17 = var17.Extrapolation;
                var11.Extrapolation = var17;
                var0.__closure = var11;
                var11 = 15039903885060.0;
                var0.__workletHash = var11;
                var11 = _closure1_slot18;
                var0.__initData = var11;
                var11 = var1.bind(var2)(var0);
                var0 = var19[var8];
                var2 = var20.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun88025: for (var _fun88025_ip = 0;;) switch (_fun88025_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var0 = var2.get;
                            var7 = var0.bind(var2)();
                            var0 = {};
                            var2 = _closure2_slot5;
                            var11 = var2.animationFill;
                            var12 = var0;
                            var2 = copyDataProperties(var12, var11);
                            var1 = _closure2_slot12;
                            var2 = 0;
                            if (!var1) {
                                _fun88025_ip = 126;
                                continue _fun88025
                            }
                        case 44:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 7;
                            var5 = var8[var1];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var5);
                            var5 = var6.interpolate;
                            var1 = var8[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.Extrapolation;
                            var9 = var1.CLAMP;
                            var11 = [0, 0.7];
                            var10 = [1, 0];
                            var13 = var6;
                            var12 = var7;
                            var2 = var13[var5](var12, var11, var10, var9, var8);
                        case 126:
                            var1 = 'opacity';
                            var0[var1] = var2;
                            var1 = {};
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 7;
                            var5 = var8[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var5);
                            var5 = var6.interpolate;
                            var2 = var8[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.Extrapolation;
                            var9 = var2.CLAMP;
                            var11 = [0, 0.625, 1];
                            var10 = [0, 1.35, 1];
                            var13 = var6;
                            var12 = var7;
                            var2 = var13[var5](var12, var11, var10, var9, var8);
                            var1.scale = var2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = 'transform';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var17 = {};
                var17.animationFillProgress = var22;
                var17.styles = var7;
                var17.showFilled = var21;
                var21 = var19[var8];
                var21 = var20.bind(var3)(var21);
                var21 = var21.interpolate;
                var17.interpolate = var21;
                var19 = var19[var8];
                var19 = var20.bind(var3)(var19);
                var19 = var19.Extrapolation;
                var17.Extrapolation = var19;
                var0.__closure = var17;
                var17 = 12429379889426.0;
                var0.__workletHash = var17;
                var17 = _closure1_slot19;
                var0.__initData = var17;
                var17 = var1.bind(var2)(var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var18 = function arg0() {
                    _fun88026: for (var _fun88026_ip = 0;;) switch (_fun88026_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.pressed;
                            var0 = _closure2_slot5;
                            var3 = var0.button;
                            var0 = new Array(6);
                            var0[0] = var3;
                            var3 = _closure2_slot7;
                            var0[1] = var3;
                            var3 = _closure2_slot6;
                            if (!var3) {
                                _fun88026_ip = 55;
                                continue _fun88026
                            }
                        case 45:
                            var4 = _closure2_slot5;
                            var3 = var4.midnight;
                        case 55:
                            var0[2] = var3;
                            if (!var2) {
                                _fun88026_ip = 66;
                                continue _fun88026
                            }
                        case 62:
                            var2 = _closure2_slot8;
                        case 66:
                            var0[3] = var2;
                            var2 = _closure2_slot3;
                            if (!var2) {
                                _fun88026_ip = 86;
                                continue _fun88026
                            }
                        case 77:
                            var3 = _closure2_slot5;
                            var2 = var3.disabled;
                        case 86:
                            var0[4] = var2;
                            var1 = _closure2_slot4;
                            var0[5] = var1;
                            return var0;
                    }
                };
                var0.style = var18;
                var0.onPress = var4;
                var0.disabled = var9;
                var4 = 'togglebutton';
                if (!var5) {
                    _fun88016_ip = 1003;
                    continue _fun88016
                }
            case 999:
                var4 = 'none';
            case 1003:
                var0.accessibilityRole = var4;
                var4 = undefined;
                if (var5) {
                    _fun88016_ip = 1015;
                    continue _fun88016
                }
            case 1012:
                var4 = var6;
            case 1015:
                var0.accessibilityLabel = var4;
                var4 = undefined;
                if (var5) {
                    _fun88016_ip = 1043;
                    continue _fun88016
                }
            case 1024:
                var6 = {};
                var6.checked = var16;
                var6.busy = var13;
                var6.disabled = var9;
                var4 = var6;
            case 1043:
                var0.accessibilityState = var4;
                var0.accessibilityElementsHidden = var5;
                var4 = 'auto';
                if (!var5) {
                    _fun88016_ip = 1066;
                    continue _fun88016
                }
            case 1060:
                var4 = 'no-hide-descendants';
            case 1066:
                var0.importantForAccessibility = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot7;
                var4 = {};
                var9 = var7.iconContainer;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = {};
                var9.width = var10;
                var9.height = var10;
                var7[1] = var9;
                var4.style = var7;
                var18 = _closure1_slot10;
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = var16[var8];
                var7 = var9.bind(var3)(var7);
                var10 = var7.View;
                var7 = {};
                var7.style = var12;
                var13 = 'none';
                var7.pointerEvents = var13;
                var21 = _closure1_slot10;
                var12 = _closure1_slot0;
                var19 = 19;
                var19 = var16[var19];
                var19 = var12.bind(var3)(var19);
                var20 = var19.HeartOutlineIcon;
                var19 = {};
                var22 = _closure1_slot14;
                var22 = var22[var15];
                var19.size = var22;
                var23 = 10;
                var22 = var16[var23];
                var22 = var9.bind(var3)(var22);
                var22 = var22.colors;
                var22 = var22.INTERACTIVE_ICON_DEFAULT;
                var19.color = var22;
                var19 = var21.bind(var3)(var20, var19);
                var7.children = var19;
                var10 = var18.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var19 = _closure1_slot10;
                var10 = var16[var8];
                var10 = var9.bind(var3)(var10);
                var18 = var10.View;
                var10 = {};
                var10.style = var11;
                var10.pointerEvents = var13;
                var22 = _closure1_slot10;
                var11 = 20;
                var20 = var16[var11];
                var20 = var12.bind(var3)(var20);
                var21 = var20.HeartIcon;
                var20 = {};
                var24 = _closure1_slot14;
                var24 = var24[var15];
                var20.size = var24;
                var23 = var16[var23];
                var23 = var9.bind(var3)(var23);
                var23 = var23.unsafe_rawColors;
                var23 = var23.RED_NEW_50;
                var20.color = var23;
                var20 = var22.bind(var3)(var21, var20);
                var10.children = var20;
                var10 = var19.bind(var3)(var18, var10);
                var7[1] = var10;
                var10 = _closure1_slot10;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.View;
                var8 = {};
                var8.style = var17;
                var8.pointerEvents = var13;
                var13 = _closure1_slot10;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.HeartIcon;
                var11 = {};
                var14 = _closure1_slot14;
                var14 = var14[var15];
                var11.size = var14;
                var14 = 'white';
                var11.color = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var1 = function arg0() {
        _fun88027: for (var _fun88027_ip = 0;;) switch (_fun88027_ip) {
            case 0:
                var4 = arg0;
                var12 = var4.skuId;
                var10 = var4.product;
                var _closure2_slot0 = var10;
                var13 = var4.onPress;
                var _closure2_slot1 = var13;
                var2 = {
                    'skuId': 0,
                    'product': 0,
                    'onPress': 0
                };
                var0 = null;
                var21 = var2;
                var20 = null;
                var1 = silentSetPrototypeOf(var21, var20);
                var21 = {};
                var20 = var4;
                var19 = var2;
                var5 = copyDataProperties(var21, var20, var19);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 21;
                var2 = var9[var2];
                var4 = undefined;
                var11 = var8.bind(var4)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var11)(var6, var2);
                var7 = _closure1_slot1;
                var6 = 22;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.bind(var4)();
                var17 = var6.shouldShowWishlistNUXActionSheet;
                var _closure2_slot2 = var17;
                var16 = var6.showWishlistNUXActionSheet;
                var _closure2_slot3 = var16;
                var7 = 23;
                var6 = var9[var7];
                var6 = var8.bind(var4)(var6);
                var15 = var6.intl;
                var14 = var15.formatToPlainString;
                var6 = var9[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var11 = var6["7kFjeK"];
                var6 = {};
                var18 = var10.name;
                var6.productName = var18;
                var6 = var14.bind(var15)(var11, var6);
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var11 = new Array(3);
                var11[0] = var17;
                var11[1] = var16;
                var11[2] = var10;
                var10 = function() { // Environment: var3
                    _fun88029: for (var _fun88029_ip = 0;;) switch (_fun88029_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun88029_ip = 25;
                                continue _fun88029
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 25:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var14.bind(var15)(var10, var11);
                var10 = var9[var7];
                var10 = var8.bind(var4)(var10);
                var14 = var10.intl;
                var10 = var14.string;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.F8FvUy;
                var7 = var10.bind(var14)(var7);
                var _closure2_slot4 = var7;
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'WISHLIST_ERROR';
                    var1.key = var4;
                    var4 = _closure2_slot4;
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var14.bind(var15)(var7, var10);
                var7 = 25;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.useWishlistButtonState;
                var7 = {};
                var7.currentUser = var2;
                var7.skuId = var12;
                var7.onAddSuccess = var11;
                var7.onError = var10;
                var8 = var8.bind(var9)(var7);
                var9 = var8.isWishlisted;
                var7 = var8.isBusy;
                var12 = var8.handleToggle;
                var _closure2_slot5 = var12;
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var8 = _closure1_slot3;
                var3 = function*() { // Environment: var3
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun88032: for (var _fun88032_ip = 0;;) switch (_fun88032_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun88032_ip = 56;
                                    continue _fun88032
                                }
                            case 7:
                                var3 = _closure2_slot1;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun88032_ip = 30;
                                    continue _fun88032
                                }
                            case 20:
                                var3 = _closure2_slot1;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 30:
                                var1 = _closure2_slot5;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 44);
                            case 42:
                                return var1;
                            case 44:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun88032_ip = 53;
                                    continue _fun88032
                                }
                            case 50:
                                return var2;
                            case 53:
                                return var1;
                            case 56:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = var8.bind(var4)(var3);
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var12;
                var8 = var10.bind(var11)(var8, var3);
                var2 = var0 == var2;
                if (var2) {
                    _fun88027_ip = 501;
                    continue _fun88027
                }
            case 457:
                var3 = _closure1_slot10;
                var2 = _closure1_slot20;
                var1 = {};
                var1.isWishlisted = var9;
                var1.onPress = var8;
                var1.busy = var7;
                var1.accessibilityLabel = var6;
                var21 = var1;
                var20 = var5;
                var5 = copyDataProperties(var21, var20);
                var0 = var3.bind(var4)(var2, var1);
            case 501:
                return var0;
        }
    };
    var _closure1_slot21 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var13 = 0;
    var5 = var7[var13];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var12 = 1;
    var5 = var7[var12];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.Pressable;
    var _closure1_slot6 = var9;
    var5 = var5.View;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = {};
    var8 = 400;
    var5.duration = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var11 = var8.Easing;
    var10 = var11.bezier;
    var17 = 0.67;
    var15 = 0.26;
    var18 = var11;
    var16 = 0;
    var14 = var12;
    var8 = var18[var10](var17, var16, var15, var14, var13);
    var5.easing = var8;
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 8;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.SMALL_BUTTON_HEIGHT;
    var5.sm = var9;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MEDIUM_BUTTON_HEIGHT;
    var5.md = var8;
    var _closure1_slot13 = var5;
    var5 = {
        'sm': 'sm',
        'md': 'md'
    };
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = function(arg0) { // Environment: var4
        var3 = arg0;
        var0 = {};
        var1 = {
            'width': null,
            'height': null,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'borderRadius': null,
            'borderWidth': 1
        };
        var2 = _closure1_slot13;
        var4 = var2[var3];
        var1.width = var4;
        var2 = var2[var3];
        var1.height = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 10;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var1.borderRadius = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.CONTROL_SECONDARY_BORDER_DEFAULT;
        var1.borderColor = var7;
        var0.button = var1;
        var1 = {};
        var7 = _closure1_slot0;
        var6 = 11;
        var8 = var5[var6];
        var11 = var7.bind(var3)(var8);
        var10 = var11.setColorOpacity;
        var9 = 'white';
        var8 = 0.72;
        var8 = var10.bind(var11)(var9, var8);
        var1.backgroundColor = var8;
        var0.light = var1;
        var1 = {};
        var6 = var5[var6];
        var8 = var7.bind(var3)(var6);
        var7 = var8.setColorOpacity;
        var6 = 0.62;
        var6 = var7.bind(var8)(var9, var6);
        var1.backgroundColor = var6;
        var0.lightPressed = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var1.backgroundColor = var6;
        var0.dark = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
        var1.backgroundColor = var6;
        var0.darkPressed = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BORDER_STRONG;
        var1.borderColor = var2;
        var0.midnight = var1;
        var1 = {};
        var2 = 0.5;
        var1.opacity = var2;
        var0.disabled = var1;
        var1 = {
            'position': 'relative',
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var0.iconContainer = var1;
        var1 = {
            'position': 'absolute',
            'inset': 0,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var0.animationFill = var1;
        return var0;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = {};
    var8 = 'function WishlistButtonTsx1(done){const{runOnJS,setIsClickAnimating}=this.__closure;if(done){runOnJS(setIsClickAnimating)(false);}}';
    var5.code = var8;
    var _closure1_slot16 = var5;
    var5 = {};
    var8 = "function WishlistButtonTsx2(){const{styles,withSpring,showFilled,SUBTLE_SPRING}=this.__closure;return{...styles.animationFill,opacity:withSpring(showFilled?0:1,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(showFilled?0.9:1,SUBTLE_SPRING,'animate-always')}]};}";
    var5.code = var8;
    var _closure1_slot17 = var5;
    var5 = {};
    var8 = "function WishlistButtonTsx3(){const{animationFillProgress,styles,withSpring,showFilled,SUBTLE_SPRING,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:withSpring(showFilled?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}";
    var5.code = var8;
    var _closure1_slot18 = var5;
    var5 = {};
    var8 = 'function WishlistButtonTsx4(){const{animationFillProgress,styles,showFilled,interpolate,Extrapolation}=this.__closure;const progress=animationFillProgress.get();return{...styles.animationFill,opacity:showFilled?interpolate(progress,[0,0.7],[1,0],Extrapolation.CLAMP):0,transform:[{scale:interpolate(progress,[0,0.625,1],[0,1.35,1],Extrapolation.CLAMP)}]};}';
    var5.code = var8;
    var _closure1_slot19 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/WishlistButton.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun88034: for (var _fun88034_ip = 0;;) switch (_fun88034_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.selectedProduct;
                var0 = null;
                var2 = Object.create(var0);
                var1 = 0;
                var2.selectedProduct = var1;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var5 = copyDataProperties(var12, var11, var10);
                var8 = var7.skuId;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 26;
                var2 = var9[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useProductPurchaseState;
                var2 = var2.bind(var3)(var7);
                var2 = var2.isPurchased;
                var3 = 27;
                var3 = var9[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isWishlistableCollectiblesProduct;
                var6 = var3.bind(var6)(var7);
                if (var2) {
                    _fun88034_ip = 150;
                    continue _fun88034
                }
            case 107:
                var3 = _closure1_slot10;
                var2 = _closure1_slot21;
                var1 = {};
                var1.skuId = var8;
                var1.product = var7;
                var6 = !var6;
                var1.disabled = var6;
                var12 = var1;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var0 = var3.bind(var4)(var2, var1);
            case 150:
                return var0;
        }
    };
    var2.default = var4;
    var2.WishlistButtonBase = var3;
    var2.WishlistButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 483, 33, 3721, 4088, 1297, 671, 3209, 5457, 3161, 3207, 3167, 4097, 4081, 4087, 11374, 9136, 566, 11356, 1234, 3150, 11361, 11376, 11355, 2]);