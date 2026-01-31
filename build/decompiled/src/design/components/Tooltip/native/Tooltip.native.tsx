// design/components/Tooltip/native/Tooltip.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Pressable;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 1,
        'overshootClamping': true,
        'damping': 27,
        'stiffness': 300
    };
    var _closure1_slot8 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.BRAND_500;
    var _closure1_slot9 = var3;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.BRAND_560;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var11 = 'center';
    var8 = {
        'position': 'absolute',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'paddingHorizontal': null,
        'paddingVertical': null,
        'borderRadius': null,
        'maxWidth': 150,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.paddingVertical = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.backgroundColor = var12;
    var3.textContainer = var8;
    var8 = {};
    var8.textAlign = var11;
    var3.text = var8;
    var8 = {
        'width': 0,
        'height': 0,
        'borderStyle': 'solid',
        'borderLeftColor': 'transparent',
        'borderRightColor': 'transparent'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.borderTopColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BRAND;
    var8.borderBottomColor = var9;
    var3.arrow = var8;
    var8 = {
        'borderLeftWidth': 6,
        'borderRightWidth': 6,
        'borderTopWidth': 6
    };
    var3.bottomArrow = var8;
    var8 = {
        'borderLeftWidth': 6,
        'borderRightWidth': 6,
        'borderBottomWidth': 6
    };
    var3.topArrow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,BACKGROUND_COLOR,BACKGROUND_COLOR_PRESSED,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[BACKGROUND_COLOR,BACKGROUND_COLOR_PRESSED]),ON_PRESS_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,BACKGROUND_COLOR,BACKGROUND_COLOR_PRESSED,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[BACKGROUND_COLOR,BACKGROUND_COLOR_PRESSED]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[BACKGROUND_COLOR,BACKGROUND_COLOR_PRESSED]),ON_PRESS_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tooltip/native/Tooltip.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: Tooltip, environment: var1
        _fun57344: for (var _fun57344_ip = 0;;) switch (_fun57344_ip) {
            case 0:
                var0 = arg0;
                var31 = var0.targetMeasurements;
                var2 = var0.surfaceMeasurements;
                var16 = var0.label;
                var7 = var0.position;
                var21 = var0.onPress;
                var0 = _closure1_slot11;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var9 = 6;
                var0 = var26[var9];
                var1 = var27.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var14 = 0;
                var25 = var0.bind(var1)(var14);
                var _closure2_slot0 = var25;
                var1 = _closure1_slot4;
                var5 = var1.useCallback;
                var4 = new Array(1);
                var4[0] = var25;
                var0 = function() { // Environment: var20
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var5 = var5.bind(var1)(var0, var4);
                var10 = var1.useCallback;
                var4 = new Array(1);
                var4[0] = var25;
                var0 = function() { // Environment: var20
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var10.bind(var1)(var0, var4);
                var0 = var1.useState;
                var19 = null;
                var10 = var0.bind(var1)(var19);
                var1 = _closure1_slot3;
                var0 = 2;
                var0 = var1.bind(var3)(var10, var0);
                var18 = var0[var14];
                var17 = 1;
                var0 = var0[var17];
                var _closure2_slot1 = var0;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var26[var0];
                var1 = var1.bind(var3)(var0);
                var29 = 4;
                var34 = undefined;
                var33 = var18;
                var32 = var2;
                var30 = var7;
                var0 = var34[var1](var33, var32, var31, var30, var29, var28);
                var12 = var0.adjustmentX;
                var8 = var0.tooltipX;
                var13 = var0.tooltipY;
                var0 = var26[var9];
                var2 = var27.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: b, environment: var20
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var2 = var7[var2];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var2);
                    var4 = var5.withSpring;
                    var2 = 6;
                    var2 = var7[var2];
                    var8 = var6.bind(var3)(var2);
                    var7 = var8.interpolateColor;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var6 = var2.bind(var3)();
                    var2 = _closure1_slot9;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var2 = _closure1_slot10;
                    var3[1] = var2;
                    var2 = [0, 1];
                    var3 = var7.bind(var8)(var6, var2, var3);
                    var2 = _closure1_slot8;
                    var1 = 'animate-always';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.backgroundColor = var1;
                    return var0;
                };
                var10 = {};
                var28 = 8;
                var15 = var26[var28];
                var15 = var27.bind(var3)(var15);
                var15 = var15.withSpring;
                var10.withSpring = var15;
                var15 = var26[var9];
                var15 = var27.bind(var3)(var15);
                var15 = var15.interpolateColor;
                var10.interpolateColor = var15;
                var10.pressed = var25;
                var24 = _closure1_slot9;
                var10.BACKGROUND_COLOR = var24;
                var23 = _closure1_slot10;
                var10.BACKGROUND_COLOR_PRESSED = var23;
                var22 = _closure1_slot8;
                var10.ON_PRESS_SPRING = var22;
                var0.__closure = var10;
                var10 = 11581405332425.0;
                var0.__workletHash = var10;
                var10 = _closure1_slot12;
                var0.__initData = var10;
                var15 = var1.bind(var2)(var0);
                var0 = var26[var9];
                var2 = var27.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: D, environment: var20
                    var0 = {};
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 8;
                    var1 = var11[var2];
                    var8 = undefined;
                    var13 = var9.bind(var8)(var1);
                    var12 = var13.withSpring;
                    var6 = 6;
                    var1 = var11[var6];
                    var16 = var9.bind(var8)(var1);
                    var15 = var16.interpolateColor;
                    var7 = _closure2_slot0;
                    var1 = var7.get;
                    var14 = var1.bind(var7)();
                    var10 = _closure1_slot9;
                    var5 = new Array(2);
                    var5[0] = var10;
                    var1 = _closure1_slot10;
                    var5[1] = var1;
                    var3 = [0, 1];
                    var3 = var15.bind(var16)(var14, var3, var5);
                    var5 = _closure1_slot8;
                    var4 = 'animate-always';
                    var3 = var12.bind(var13)(var3, var5, var4);
                    var0.borderTopColor = var3;
                    var2 = var11[var2];
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.withSpring;
                    var6 = var11[var6];
                    var9 = var9.bind(var8)(var6);
                    var8 = var9.interpolateColor;
                    var6 = var7.get;
                    var7 = var6.bind(var7)();
                    var6 = new Array(2);
                    var6[0] = var10;
                    var6[1] = var1;
                    var1 = [0, 1];
                    var1 = var8.bind(var9)(var7, var1, var6);
                    var1 = var2.bind(var3)(var1, var5, var4);
                    var0.borderBottomColor = var1;
                    return var0;
                };
                var10 = {};
                var28 = var26[var28];
                var28 = var27.bind(var3)(var28);
                var28 = var28.withSpring;
                var10.withSpring = var28;
                var26 = var26[var9];
                var26 = var27.bind(var3)(var26);
                var26 = var26.interpolateColor;
                var10.interpolateColor = var26;
                var10.pressed = var25;
                var10.BACKGROUND_COLOR = var24;
                var10.BACKGROUND_COLOR_PRESSED = var23;
                var10.ON_PRESS_SPRING = var22;
                var0.__closure = var10;
                var10 = 10186236993493.0;
                var0.__workletHash = var10;
                var10 = _closure1_slot13;
                var0.__initData = var10;
                var10 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var22 = var19 == var21;
                var0.disabled = var22;
                var0.onPress = var21;
                var20 = function(arg0) { // Original name: onLayout, environment: var20
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var3 = var0.layout;
                    var3 = var3.width;
                    var1.width = var3;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onLayout = var20;
                var0.onPressIn = var5;
                var0.onPressOut = var4;
                var0.accessibilityLabel = var16;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var5 = var11.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var18 = var19 != var18;
                if (!var18) {
                    _fun57344_ip = 554;
                    continue _fun57344
                }
            case 551:
                var14 = var17;
            case 554:
                var5.opacity = var14;
                var5.top = var13;
                var5.left = var8;
                var4[1] = var5;
                var0.style = var4;
                var4 = 'bottom';
                var5 = var4 === var7;
                if (!var5) {
                    _fun57344_ip = 664;
                    continue _fun57344
                }
            case 585:
                var13 = _closure1_slot6;
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var8.bind(var3)(var4);
                var8 = var4.View;
                var4 = {};
                var17 = var11.arrow;
                var14 = new Array(4);
                var14[0] = var17;
                var17 = var11.topArrow;
                var14[1] = var17;
                var17 = {};
                var18 = -var12;
                var17.left = var18;
                var14[2] = var17;
                var14[3] = var10;
                var4.style = var14;
                var5 = var13.bind(var3)(var8, var4);
            case 664:
                var4 = new Array(3);
                var4[0] = var5;
                var13 = _closure1_slot6;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var5 = var17[var9];
                var5 = var8.bind(var3)(var5);
                var8 = var5.View;
                var5 = {};
                var18 = var11.textContainer;
                var14 = new Array(2);
                var14[0] = var18;
                var14[1] = var15;
                var5.style = var14;
                var15 = _closure1_slot0;
                var14 = 9;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'always-white'
                };
                var17 = var11.text;
                var14.style = var17;
                var14.children = var16;
                var14 = var13.bind(var3)(var15, var14);
                var5.children = var14;
                var5 = var13.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = 'top';
                var5 = var5 === var7;
                if (!var5) {
                    _fun57344_ip = 882;
                    continue _fun57344
                }
            case 803:
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.View;
                var6 = {};
                var13 = var11.arrow;
                var9 = new Array(4);
                var9[0] = var13;
                var11 = var11.bottomArrow;
                var9[1] = var11;
                var11 = {};
                var12 = -var12;
                var11.left = var12;
                var9[2] = var11;
                var9[3] = var10;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 882:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Tooltip = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 671, 1297, 3679, 6982, 4040, 3900, 2]);