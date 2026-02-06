// design/components/Tabs/native/TabItem.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var9 = var1.index;
        var _closure2_slot0 = var9;
        var5 = var1.activeIndex;
        var _closure2_slot1 = var5;
        var10 = var1.pressed;
        var _closure2_slot2 = var10;
        var1 = _closure1_slot10;
        var7 = undefined;
        var11 = var1.bind(var7)();
        var _closure2_slot3 = var11;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var1 = var8[var1];
        var2 = var6.bind(var7)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun62256: for (var _fun62256_ip = 0;;) switch (_fun62256_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var5 = var1.inactive;
                    var2 = _closure2_slot2;
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
                    var8 = _closure2_slot1;
                    var1 = var8.get;
                    var1 = var1.bind(var8)();
                    var1 = var6.bind(var7)(var1);
                    if (!(var4 !== var2)) {
                        _fun62256_ip = 111;
                        continue _fun62256
                    }
                case 80:
                    if (var3) {
                        _fun62256_ip = 99;
                        continue _fun62256
                    }
                case 83:
                    if (!(var1 === var2)) {
                        _fun62256_ip = 121;
                        continue _fun62256
                    }
                case 87:
                    var1 = _closure2_slot3;
                    var5 = var1.active;
                    _fun62256_ip = 121;
                    continue _fun62256;
                case 99:
                    var1 = _closure2_slot3;
                    var5 = var1.inactive;
                    _fun62256_ip = 121;
                    continue _fun62256;
                case 111:
                    var0 = _closure2_slot3;
                    var5 = var0.pressed;
                case 121:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
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
        var4 = {};
        var4.colors = var11;
        var4.pressed = var10;
        var4.index = var9;
        var4.activeIndex = var5;
        var5 = 6;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.withSpring;
        var4.withSpring = var5;
        var5 = _closure1_slot7;
        var4.TEXT_SPRING_CONFIG = var5;
        var0.__closure = var4;
        var4 = 11643476765161.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot11;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.count;
        var12 = var0.index;
        var11 = var0.activeIndex;
        var8 = var0.pressed;
        var0 = _closure1_slot9;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 3;
        var2 = var9[var0];
        var13 = var5.bind(var3)(var2);
        var10 = var13.useSharedValue;
        var2 = 0;
        var14 = var10.bind(var13)(var2);
        var _closure2_slot0 = var14;
        var15 = _closure1_slot3;
        var13 = var15.useLayoutEffect;
        var10 = new Array(1);
        var10[0] = var14;
        var2 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.set;
            var0 = 1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = var13.bind(var15)(var2, var10);
        var2 = var9[var0];
        var10 = var5.bind(var3)(var2);
        var2 = var10.useAnimatedStyle;
        var1 = function() {
            var0 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var2 = var9[var3];
            var7 = undefined;
            var10 = var8.bind(var7)(var2);
            var5 = var10.withSpring;
            var6 = _closure2_slot0;
            var2 = var6.get;
            var4 = var2.bind(var6)();
            var2 = _closure1_slot8;
            var2 = var5.bind(var10)(var4, var2);
            var0.opacity = var2;
            var2 = {};
            var3 = var9[var3];
            var5 = var8.bind(var7)(var3);
            var4 = var5.withSpring;
            var3 = 3;
            var3 = var9[var3];
            var9 = var8.bind(var7)(var3);
            var8 = var9.interpolate;
            var3 = var6.get;
            var7 = var3.bind(var6)();
            var6 = new Array(2);
            var3 = -10;
            var6[0] = var3;
            var3 = 0;
            var6[1] = var3;
            var3 = [0, 1];
            var3 = var8.bind(var9)(var7, var3, var6);
            var1 = _closure1_slot8;
            var1 = var4.bind(var5)(var3, var1);
            var2.translateX = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var13 = {};
        var15 = 6;
        var15 = var9[var15];
        var15 = var5.bind(var3)(var15);
        var15 = var15.withSpring;
        var13.withSpring = var15;
        var13.countAnimationState = var14;
        var14 = _closure1_slot8;
        var13.COUNT_SPRING_CONFIG = var14;
        var14 = var9[var0];
        var14 = var5.bind(var3)(var14);
        var14 = var14.interpolate;
        var13.interpolate = var14;
        var1.__closure = var13;
        var13 = 16666672974627.0;
        var1.__workletHash = var13;
        var13 = _closure1_slot12;
        var1.__initData = var13;
        var10 = var2.bind(var10)(var1);
        var2 = _closure1_slot14;
        var1 = {};
        var1.index = var12;
        var1.activeIndex = var11;
        var1.pressed = var8;
        var8 = var2.bind(var3)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot1;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var11 = var6.count;
        var6 = new Array(2);
        var6[0] = var11;
        var6[1] = var10;
        var0.style = var6;
        var6 = _closure1_slot4;
        var4 = 7;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'animated': true,
            'variant': 'text-sm/medium',
            'style': null,
            'lineClamp': 1
        };
        var4.style = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var9.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot6 = var3;
    var3 = {
        'mass': 0.3,
        'damping': 13,
        'stiffness': 250,
        'overshootClamping': true
    };
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 2,
        'damping': 30,
        'stiffness': 300,
        'overshootClamping': true
    };
    var _closure1_slot8 = var3;
    var3 = 4;
    var6 = var5[var3];
    var10 = var4.bind(var0)(var6);
    var7 = var10.createStyles;
    var6 = {};
    var8 = {
        'flexShrink': 0,
        'flexBasis': 0,
        'paddingBottom': 14,
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var6.item = var8;
    var11 = {};
    var8 = 5;
    var12 = var5[var8];
    var12 = var9.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11.marginLeft = var12;
    var6.count = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyleProperties;
    var3 = {};
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var3.inactive = var10;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var3.active = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.TEXT_BRAND;
    var3.pressed = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tabs/native/TabItem.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62260: for (var _fun62260_ip = 0;;) switch (_fun62260_ip) {
            case 0:
                var3 = arg0;
                var13 = var3.label;
                var12 = var3.count;
                var11 = var3.index;
                var _closure2_slot0 = var11;
                var0 = var3.state;
                var9 = var3.pressed;
                var18 = var3.grow;
                var2 = {
                    'label': 0,
                    'count': 0,
                    'index': 0,
                    'state': 0,
                    'pressed': 0,
                    'grow': 0
                };
                var4 = null;
                var21 = var2;
                var20 = null;
                var1 = silentSetPrototypeOf(var21, var20);
                var21 = {};
                var20 = var3;
                var19 = var2;
                var8 = copyDataProperties(var21, var20, var19);
                var10 = var0.activeIndex;
                var _closure2_slot1 = var10;
                var0 = var0.setItemDimensions;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useAnimatedProps;
                var0 = function() {
                    var0 = {};
                    var1 = {};
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot0;
                    var2 = var3 === var2;
                    var1.selected = var2;
                    var0.accessibilityState = var1;
                    return var0;
                };
                var7 = {};
                var7.activeIndex = var10;
                var7.index = var11;
                var0.__closure = var7;
                var7 = 11618929630200.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot13;
                var0.__initData = var7;
                var7 = var1.bind(var2)(var0);
                var1 = _closure1_slot14;
                var0 = {};
                var0.index = var11;
                var0.activeIndex = var10;
                var0.pressed = var9;
                var14 = var1.bind(var3)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var16 = var15.item;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = {};
                var17 = 0;
                if (!var18) {
                    _fun62260_ip = 249;
                    continue _fun62260
                }
            case 246:
                var17 = 1;
            case 249:
                var16.flexGrow = var17;
                var15[1] = var16;
                var0.style = var15;
                var21 = var0;
                var20 = var8;
                var8 = copyDataProperties(var21, var20);
                var8 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.runOnUI;
                    var2 = _closure2_slot2;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5 = 'onLayout';
                var0[var5] = var8;
                var8 = 'tab';
                var5 = 'accessibilityRole';
                var0[var5] = var8;
                var5 = 'animatedProps';
                var0[var5] = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 7;
                var5 = var15[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'animated': true,
                    'variant': 'text-sm/semibold',
                    'style': null,
                    'lineClamp': 1
                };
                var5.style = var14;
                var5.children = var13;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var4 != var12;
                var4 = null;
                if (!var7) {
                    _fun62260_ip = 419;
                    continue _fun62260
                }
            case 384:
                var8 = _closure1_slot4;
                var7 = _closure1_slot15;
                var6 = {};
                var6.count = var12;
                var6.index = var11;
                var6.activeIndex = var10;
                var6.pressed = var9;
                var4 = var8.bind(var3)(var7, var6);
            case 419:
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TabItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3722, 1297, 671, 4082, 3943, 2]);