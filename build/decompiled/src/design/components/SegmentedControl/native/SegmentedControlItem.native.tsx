// design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = {
        'mass': 0.3,
        'damping': 13,
        'stiffness': 250,
        'overshootClamping': true
    };
    var _closure1_slot7 = var3;
    var3 = 3;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun66107: for (var _fun66107_ip = 0;;) switch (_fun66107_ip) {
            case 0:
                var0 = {};
                var1 = {};
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 4;
                var4 = var2[var3];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderRadius = var2;
                var2 = 8;
                var5 = 'experimental_Small';
                var4 = arg0;
                if (!(var5 === var4)) {
                    _fun66107_ip = 63;
                    continue _fun66107
                }
            case 60:
                var2 = var3;
            case 63:
                var1.paddingVertical = var2;
                var2 = 'row';
                var1.flexDirection = var2;
                var2 = 'center';
                var1.justifyContent = var2;
                var0.item = var1;
                var1 = {
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'gap': 8
                };
                var0.label = var1;
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyleProperties;
    var3 = {};
    var8 = 4;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var3.inactive = var10;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var3.active = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.INTERACTIVE_TEXT_ACTIVE;
    var3.pressed = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/SegmentedControl/native/SegmentedControlItem.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66108: for (var _fun66108_ip = 0;;) switch (_fun66108_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.label;
                var18 = var2.index;
                var _closure2_slot0 = var18;
                var8 = var2.icon;
                var1 = var2.state;
                var15 = var2.onPress;
                var14 = var2.onPressIn;
                var6 = var2.onPressOut;
                var19 = var2.pressed;
                var _closure2_slot1 = var19;
                var13 = var2.variant;
                var17 = var2.style;
                var16 = var1.activeIndex;
                var _closure2_slot2 = var16;
                var1 = _closure1_slot8;
                var3 = undefined;
                var7 = var1.bind(var3)(var13);
                var1 = _closure1_slot9;
                var20 = var1.bind(var3)();
                var _closure2_slot3 = var20;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 5;
                var1 = var12[var1];
                var5 = var9.bind(var3)(var1);
                var2 = var5.useDerivedStateFromSharedValue;
                var1 = function(arg0) { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var1 = var1 === var2;
                    var0.selected = var1;
                    return var0;
                };
                var5 = var2.bind(var5)(var16, var1);
                var1 = 6;
                var1 = var12[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun66110: for (var _fun66110_ip = 0;;) switch (_fun66110_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var5 = var1.inactive;
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var1 = 0;
                            var3 = var3 >= var1;
                            var1 = var2.get;
                            var4 = var1.bind(var2)();
                            var2 = _closure2_slot0;
                            var1 = global;
                            var7 = var1.Math;
                            var6 = var7.round;
                            var8 = _closure2_slot2;
                            var1 = var8.get;
                            var1 = var1.bind(var8)();
                            var1 = var6.bind(var7)(var1);
                            if (!(var4 !== var2)) {
                                _fun66110_ip = 111;
                                continue _fun66110
                            }
                        case 80:
                            if (var3) {
                                _fun66110_ip = 99;
                                continue _fun66110
                            }
                        case 83:
                            if (!(var1 === var2)) {
                                _fun66110_ip = 121;
                                continue _fun66110
                            }
                        case 87:
                            var1 = _closure2_slot3;
                            var5 = var1.active;
                            _fun66110_ip = 121;
                            continue _fun66110;
                        case 99:
                            var1 = _closure2_slot3;
                            var5 = var1.inactive;
                            _fun66110_ip = 121;
                            continue _fun66110;
                        case 111:
                            var0 = _closure2_slot3;
                            var5 = var0.pressed;
                        case 121:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var2 = _closure1_slot7;
                            var1 = 'animate-always';
                            var1 = var3.bind(var4)(var5, var2, var1);
                            var0.color = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.colors = var20;
                var11.pressed = var19;
                var11.index = var18;
                var11.activeIndex = var16;
                var16 = 7;
                var16 = var12[var16];
                var16 = var9.bind(var3)(var16);
                var16 = var16.withSpring;
                var11.withSpring = var16;
                var16 = _closure1_slot7;
                var11.SPRING_CONFIG = var16;
                var0.__closure = var11;
                var11 = 9369301431547.0;
                var0.__workletHash = var11;
                var11 = _closure1_slot10;
                var0.__initData = var11;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var18 = var7.item;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var0.style = var16;
                var0.onPress = var15;
                var0.onPressIn = var14;
                var0.onPressOut = var6;
                var6 = 'tab';
                var0.accessibilityRole = var6;
                var0.accessibilityState = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var7.label;
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 8;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'animated': true,
                    'variant': 'text-sm/semibold',
                    'style': null,
                    'lineClamp': 1
                };
                var8.style = var11;
                var12 = 'experimental_Large';
                var11 = undefined;
                if (!(var12 === var13)) {
                    _fun66108_ip = 397;
                    continue _fun66108
                }
            case 387:
                var11 = 1.5;
            case 397:
                var8.maxFontSizeMultiplier = var11;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SegmentedControlItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8151, 3679, 4040, 3900, 2]);