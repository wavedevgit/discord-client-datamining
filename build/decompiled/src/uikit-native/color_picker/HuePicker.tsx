// uikit-native/color_picker/HuePicker.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'];
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'left': 0,
        'position': 'absolute',
        'borderColor': null,
        'width': 24,
        'height': 36,
        'borderRadius': null,
        'borderWidth': 2
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var8.borderColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.slider = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.colorBar = var8;
    var8 = {
        'minWidth': 240,
        'height': 32
    };
    var3.colorBarInner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function HuePickerTsx1({x:x}){const{hue,normalizeValue,barWidth}=this.__closure;hue.set(normalizeValue(x/barWidth.get())*360);}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function HuePickerTsx2(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function HuePickerTsx3(){const{hslToRgbWorklet,hue,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:1,l:0.5});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:barWidth.get()*hue.get()/360}]};}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function HuePickerTsx4(){const{sliderHeight,barHeight,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/color_picker/HuePicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HuePicker, environment: var1
        var1 = arg0;
        var16 = var1.hue;
        var _closure2_slot0 = var16;
        var4 = var1.onPanFinalize;
        var1 = _closure1_slot8;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var12 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 7;
        var1 = var11[var5];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useSharedValue;
        var9 = 0;
        var6 = var1.bind(var2)(var9);
        var _closure2_slot1 = var6;
        var1 = var11[var5];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useSharedValue;
        var14 = var1.bind(var2)(var9);
        var _closure2_slot2 = var14;
        var1 = var11[var5];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useSharedValue;
        var7 = var1.bind(var2)(var9);
        var _closure2_slot3 = var7;
        var1 = var11[var5];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useSharedValue;
        var1 = var1.bind(var2)(var9);
        var _closure2_slot4 = var1;
        var2 = function(arg0, arg1, arg2) { // Original name: useHuePickerGesture, environment: var0
            var7 = arg0;
            var6 = arg1;
            var5 = arg2;
            var _closure3_slot0 = var7;
            var _closure3_slot1 = var6;
            var _closure3_slot2 = var5;
            var0 = {};
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() { // Environment: var1
                var4 = function(arg0) { // Original name: t, environment: var0
                    var0 = arg0;
                    var6 = var0.x;
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.normalizeValue;
                    var7 = _closure3_slot1;
                    var1 = var7.get;
                    var1 = var1.bind(var7)();
                    var1 = var6 / var1;
                    var4 = var4.bind(var5)(var1);
                    var1 = 360;
                    var1 = var1 * var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = {};
                var2 = _closure3_slot0;
                var1.hue = var2;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 5;
                var2 = var8[var2];
                var6 = undefined;
                var2 = var7.bind(var6)(var2);
                var2 = var2.normalizeValue;
                var1.normalizeValue = var2;
                var2 = _closure3_slot1;
                var1.barWidth = var2;
                var4.__closure = var1;
                var1 = 7671468234964.0;
                var4.__workletHash = var1;
                var1 = _closure1_slot9;
                var4.__initData = var1;
                var1 = 6;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var2 = var1.Gesture;
                var1 = var2.Pan;
                var2 = var1.bind(var2)();
                var1 = var2.onBegin;
                var2 = var1.bind(var2)(var4);
                var1 = var2.onUpdate;
                var2 = var1.bind(var2)(var4);
                var1 = var2.onFinalize;
                var0 = function() { // Original name: l, environment: var0
                    _fun79782: for (var _fun79782_ip = 0;;) switch (_fun79782_ip) {
                        case 0:
                            var2 = _closure3_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun79782_ip = 56;
                                continue _fun79782
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runOnJS;
                            var0 = _closure3_slot2;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = {};
                var5 = _closure3_slot2;
                var4.onPanFinalize = var5;
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.runOnJS;
                var4.runOnJS = var5;
                var0.__closure = var4;
                var4 = 182773971449.0;
                var0.__workletHash = var4;
                var3 = _closure1_slot10;
                var0.__initData = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var3.bind(var4)(var1, var2);
            var0.gesture = var1;
            return var0;
        };
        var2 = var2.bind(var3)(var16, var1, var4);
        var13 = var2.gesture;
        var2 = var11[var5];
        var9 = var12.bind(var3)(var2);
        var4 = var9.useAnimatedStyle;
        var2 = function() { // Original name: k, environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var3 = var5.hslToRgbWorklet;
            var0 = {
                'h': null,
                's': 1,
                'l': 0.5
            };
            var4 = _closure2_slot0;
            var2 = var4.get;
            var2 = var2.bind(var4)();
            var0.h = var2;
            var2 = 1;
            var3 = var3.bind(var5)(var0);
            var0 = {};
            var5 = 0;
            var15 = var3[var5];
            var13 = var3[var2];
            var2 = 2;
            var11 = var3[var2];
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var16 = 'rgb(';
            var3 = ', ';
            var10 = ')';
            var14 = var3;
            var12 = var3;
            var2 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
            var0.backgroundColor = var2;
            var2 = {};
            var3 = _closure2_slot4;
            var1 = var3.get;
            var3 = var1.bind(var3)();
            var1 = var4.get;
            var1 = var1.bind(var4)();
            var3 = var3 * var1;
            var1 = 360;
            var1 = var3 / var1;
            var2.translateX = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var10 = {};
        var17 = 5;
        var17 = var11[var17];
        var17 = var12.bind(var3)(var17);
        var17 = var17.hslToRgbWorklet;
        var10.hslToRgbWorklet = var17;
        var10.hue = var16;
        var10.barWidth = var1;
        var2.__closure = var10;
        var10 = 774575483053.0;
        var2.__workletHash = var10;
        var10 = _closure1_slot11;
        var2.__initData = var10;
        var9 = var4.bind(var9)(var2);
        var16 = _closure1_slot3;
        var10 = var16.useCallback;
        var4 = new Array(2);
        var4[0] = var14;
        var4[1] = var6;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var4 = var0.height;
            var2 = var0.width;
            var3 = _closure2_slot2;
            var1 = var3.set;
            var1 = var1.bind(var3)(var4);
            var1 = _closure2_slot1;
            var0 = var1.set;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var10 = var10.bind(var16)(var2, var4);
        var4 = var16.useCallback;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var4 = var0.height;
            var2 = var0.width;
            var3 = _closure2_slot3;
            var1 = var3.set;
            var1 = var1.bind(var3)(var4);
            var1 = _closure2_slot4;
            var0 = var1.set;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var17 = var4.bind(var16)(var1, var2);
        var1 = var11[var5];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() { // Original name: H, environment: var0
            _fun79786: for (var _fun79786_ip = 0;;) switch (_fun79786_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var3 = _closure2_slot3;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2 - var1;
                    var2 = 0;
                    if (!(var1 > var2)) {
                        _fun79786_ip = 76;
                        continue _fun79786
                    }
                case 39:
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var4 = _closure2_slot3;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var3 = var3 - var1;
                    var1 = 2;
                    var2 = var3 / var1;
                case 76:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 2;
                    var1 = var1 / var0;
                    var0 = {};
                    var0.paddingTop = var2;
                    var0.paddingBottom = var2;
                    var0.paddingLeft = var1;
                    var0.paddingRight = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.sliderHeight = var14;
        var4.barHeight = var7;
        var4.sliderWidth = var6;
        var0.__closure = var4;
        var4 = 5225548665736.0;
        var0.__workletHash = var4;
        var4 = _closure1_slot12;
        var0.__initData = var4;
        var7 = var1.bind(var2)(var0);
        var2 = _closure1_slot6;
        var6 = _closure1_slot1;
        var0 = var11[var5];
        var0 = var6.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var14 = var8.container;
        var4 = new Array(2);
        var4[0] = var14;
        var4[1] = var7;
        var0.style = var4;
        var7 = _closure1_slot5;
        var4 = 6;
        var4 = var11[var4];
        var4 = var12.bind(var3)(var4);
        var12 = var4.GestureDetector;
        var4 = {};
        var4.gesture = var13;
        var13 = 8;
        var13 = var11[var13];
        var14 = var6.bind(var3)(var13);
        var13 = {};
        var16 = _closure1_slot7;
        var13.colors = var16;
        var16 = {
            'x': 0,
            'y': 0.5
        };
        var13.start = var16;
        var16 = {
            'x': 1,
            'y': 0.5
        };
        var13.end = var16;
        var16 = var8.colorBar;
        var13.style = var16;
        var16 = _closure1_slot4;
        var15 = {};
        var15.onLayout = var17;
        var17 = var8.colorBarInner;
        var15.style = var17;
        var15 = var7.bind(var3)(var16, var15);
        var13.children = var15;
        var13 = var7.bind(var3)(var14, var13);
        var4.children = var13;
        var12 = var7.bind(var3)(var12, var4);
        var4 = new Array(2);
        var4[0] = var12;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.View;
        var5 = {};
        var5.onLayout = var10;
        var10 = 'box-none';
        var5.pointerEvents = var10;
        var10 = var8.slider;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10108, 4923, 3679, 4057, 2]);