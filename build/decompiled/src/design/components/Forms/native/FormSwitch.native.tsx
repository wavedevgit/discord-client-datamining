// design/components/Forms/native/FormSwitch.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
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
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Pressable;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var6 = var5[var3];
    var7 = var8.bind(var0)(var6);
    var6 = var7.createAnimatedComponent;
    var6 = var6.bind(var7)(var9);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var7 = var9.createStyles;
    var6 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'width': 48,
            'height': 32,
            'flexGrow': 0,
            'flexShrink': 0
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 6;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.padding = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var0.switch = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_MOD_NORMAL;
        var1.tintColor = var6;
        var0.unselectedBackground = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.ICON_OVERLAY_DARK;
        var1.tintColor = var6;
        var0.unselectedIcon = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.REDESIGN_INPUT_CONTROL_SELECTED;
        var1.tintColor = var6;
        var0.selected = var1;
        var1 = {
            'height': 24,
            'width': 24,
            'padding': 6,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.WHITE;
        var1.backgroundColor = var2;
        var0.knob = var1;
        return var0;
    };
    var6 = var7.bind(var9)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var7 = var8.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 7;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function FormSwitchNativeTsx2(){const{withSpring,checked,SUBTLE_SPRING}=this.__closure;return{left:withSpring(checked?16:0,SUBTLE_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}";
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Forms/native/FormSwitch.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48224: for (var _fun48224_ip = 0;;) switch (_fun48224_ip) {
            case 0:
                var0 = arg0;
                var2 = function arg0, arg1() {
                    var9 = arg0;
                    var5 = arg1;
                    var _closure3_slot0 = var9;
                    var _closure3_slot1 = var5;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 4;
                    var1 = var8[var1];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var1);
                    var1 = var2.useAnimatedStyle;
                    var0 = function() {
                        _fun48226: for (var _fun48226_ip = 0;;) switch (_fun48226_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var5 = 1;
                                if (var0) {
                                    _fun48226_ip = 36;
                                    continue _fun48226
                                }
                            case 13:
                                var0 = _closure2_slot3;
                                if (var0) {
                                    _fun48226_ip = 29;
                                    continue _fun48226
                                }
                            case 23:
                                var0 = _closure3_slot1;
                                _fun48226_ip = 33;
                                continue _fun48226;
                            case 29:
                                var0 = _closure3_slot0;
                            case 33:
                                var5 = var0;
                            case 36:
                                var0 = {};
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 9;
                                var4 = var4[var3];
                                var7 = undefined;
                                var11 = var6.bind(var7)(var4);
                                var10 = var11.withSpring;
                                var4 = _closure2_slot3;
                                if (var4) {
                                    _fun48226_ip = 84;
                                    continue _fun48226
                                }
                            case 78:
                                var9 = _closure3_slot1;
                                _fun48226_ip = 88;
                                continue _fun48226;
                            case 84:
                                var9 = _closure3_slot0;
                            case 88:
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 10;
                                var2 = var8[var1];
                                var2 = var6.bind(var7)(var2);
                                var4 = var2.SUBTLE_SPRING;
                                var2 = 'animate-always';
                                var2 = var10.bind(var11)(var9, var4, var2);
                                var0.opacity = var2;
                                var2 = {};
                                var3 = var8[var3];
                                var4 = var6.bind(var7)(var3);
                                var3 = var4.withSpring;
                                var1 = var8[var1];
                                var1 = var6.bind(var7)(var1);
                                var1 = var1.SUBTLE_SPRING;
                                var1 = var3.bind(var4)(var5, var1);
                                var2.scale = var1;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0.transform = var1;
                                return var0;
                        }
                    };
                    var4 = {};
                    var11 = _closure2_slot2;
                    var4.useReducedMotion = var11;
                    var10 = _closure2_slot3;
                    var4.checked = var10;
                    var4.on = var9;
                    var4.off = var5;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.withSpring;
                    var4.withSpring = var5;
                    var5 = 10;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.SUBTLE_SPRING;
                    var4.SUBTLE_SPRING = var5;
                    var0.__closure = var4;
                    var4 = 14329332652102.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot11;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var0.disabled;
                var4 = var0.value;
                var _closure2_slot0 = var4;
                var1 = var0.onValueChange;
                var _closure2_slot1 = var1;
                var17 = var0.accessibilityLabel;
                var15 = var0.accessibilityHint;
                var18 = var0["aria-hidden"];
                var9 = _closure1_slot4;
                var1 = var9.useContext;
                var19 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var3 = undefined;
                var0 = var19.bind(var3)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var1.bind(var9)(var0);
                var0 = var0.reducedMotion;
                var0 = var0.enabled;
                var _closure2_slot2 = var0;
                var0 = var9.useState;
                var5 = var0.bind(var9)(var4);
                var1 = _closure1_slot3;
                var0 = 2;
                var5 = var1.bind(var3)(var5, var0);
                var1 = 0;
                var6 = var5[var1];
                var _closure2_slot3 = var6;
                var0 = 1;
                var5 = var5[var0];
                var _closure2_slot4 = var5;
                var8 = var9.useEffect;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var13
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var8.bind(var9)(var4, var5);
                var4 = _closure1_slot7;
                var9 = var4.bind(var3)();
                var20 = var9.selected;
                var _closure2_slot5 = var20;
                var12 = var9.unselectedBackground;
                var _closure2_slot6 = var12;
                var4 = 4;
                var5 = var7[var4];
                var10 = var19.bind(var3)(var5);
                var8 = var10.useAnimatedStyle;
                var5 = function() {
                    _fun48228: for (var _fun48228_ip = 0;;) switch (_fun48228_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var3 = _closure2_slot3;
                            if (var3) {
                                _fun48228_ip = 54;
                                continue _fun48228
                            }
                        case 42:
                            var3 = _closure2_slot6;
                            var3 = var3.tintColor;
                            _fun48228_ip = 64;
                            continue _fun48228;
                        case 54:
                            var2 = _closure2_slot5;
                            var3 = var2.tintColor;
                        case 64:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var11 = {};
                var21 = 9;
                var22 = var7[var21];
                var22 = var19.bind(var3)(var22);
                var22 = var22.withSpring;
                var11.withSpring = var22;
                var11.checked = var6;
                var11.selected = var20;
                var11.unselectedBackground = var12;
                var12 = 10;
                var20 = var7[var12];
                var20 = var19.bind(var3)(var20);
                var20 = var20.SUBTLE_SPRING;
                var11.SUBTLE_SPRING = var20;
                var5.__closure = var11;
                var11 = 9840720249224.0;
                var5.__workletHash = var11;
                var11 = _closure1_slot9;
                var5.__initData = var11;
                var20 = var8.bind(var10)(var5);
                var5 = var7[var4];
                var10 = var19.bind(var3)(var5);
                var8 = var10.useAnimatedStyle;
                var5 = function() {
                    _fun48229: for (var _fun48229_ip = 0;;) switch (_fun48229_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var2 = _closure2_slot3;
                            var3 = 0;
                            if (!var2) {
                                _fun48229_ip = 47;
                                continue _fun48229
                            }
                        case 44:
                            var3 = 16;
                        case 47:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 10;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.left = var1;
                            return var0;
                    }
                };
                var11 = {};
                var21 = var7[var21];
                var21 = var19.bind(var3)(var21);
                var21 = var21.withSpring;
                var11.withSpring = var21;
                var11.checked = var6;
                var12 = var7[var12];
                var12 = var19.bind(var3)(var12);
                var12 = var12.SUBTLE_SPRING;
                var11.SUBTLE_SPRING = var12;
                var5.__closure = var11;
                var11 = 13478345030228.0;
                var5.__workletHash = var11;
                var11 = _closure1_slot10;
                var5.__initData = var11;
                var8 = var8.bind(var10)(var5);
                var10 = var2.bind(var3)(var0, var1);
                var12 = var2.bind(var3)(var1, var0);
                var5 = _closure1_slot1;
                var0 = 7;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.Sizes;
                var11 = var0.SMALL;
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var21 = var9.switch;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var0.style = var19;
                var19 = function() {
                    _fun48230: for (var _fun48230_ip = 0;;) switch (_fun48230_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun48230_ip = 36;
                                continue _fun48230
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            var0 = var2.bind(var3)(var1);
                        case 36:
                            return var0;
                    }
                };
                var0.onPress = var19;
                var0.disabled = var16;
                var19 = true;
                var0.accessible = var19;
                var0['aria-hidden'] = var18;
                var18 = 'switch';
                var0.accessibilityRole = var18;
                var0.accessibilityLabel = var17;
                var0.accessibilityHint = var15;
                var15 = {};
                var15.disabled = var16;
                var15.checked = var6;
                var0.accessibilityState = var15;
                var13 = function() {
                    var2 = _closure2_slot4;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var2 = var1.setTimeout;
                    var1 = function() { // Environment: var1
                        _fun48232: for (var _fun48232_ip = 0;;) switch (_fun48232_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun48232_ip = 31;
                                    continue _fun48232
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = !var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 31:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onAccessibilityTap = var13;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var13 = var9.knob;
                var7 = new Array(2);
                var7[0] = var13;
                var7[1] = var8;
                var4.style = var7;
                var7 = _closure1_slot8;
                var8 = {};
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var6) {
                    _fun48224_ip = 672;
                    continue _fun48224
                }
            case 625:
                var6 = 12;
                var6 = var14[var6];
                var6 = var13.bind(var3)(var6);
                var8.source = var6;
                var8.size = var11;
                var15 = var9.unselectedIcon;
                var6 = new Array(2);
                var6[0] = var15;
                var6[1] = var12;
                var8.style = var6;
                var6 = var8;
                _fun48224_ip = 717;
                continue _fun48224;
            case 672:
                var12 = 11;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var8.source = var12;
                var8.size = var11;
                var11 = var9.selected;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var8.style = var9;
                var6 = var8;
            case 717:
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.FormSwitch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 3720, 1297, 671, 4086, 3165, 4081, 4087, 5418, 5419, 2]);