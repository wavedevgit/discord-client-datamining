// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = var4.Animated;
    var4 = var4.Platform;
    var4 = var3.add;
    var _closure1_slot2 = var4;
    var3 = var3.multiply;
    var _closure1_slot3 = var3;
    var3 = function arg0() {
        _fun51500: for (var _fun51500_ip = 0;;) switch (_fun51500_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var7 = var0.next;
                var10 = var0.inverted;
                var0 = var0.layouts;
                var13 = var0.screen;
                var0 = {};
                var1 = {};
                var4 = {};
                var11 = _closure1_slot3;
                var12 = var2.progress;
                var9 = var12.interpolate;
                var3 = {};
                var5 = [0, 1];
                var3.inputRange = var5;
                var6 = var13.width;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 0;
                var5[1] = var6;
                var3.outputRange = var5;
                var5 = 'clamp';
                var3.extrapolate = var5;
                var3 = var9.bind(var12)(var3);
                var9 = undefined;
                var3 = var11.bind(var9)(var3, var10);
                var4.translateX = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                if (!var7) {
                    _fun51500_ip = 224;
                    continue _fun51500
                }
            case 137:
                var8 = _closure1_slot3;
                var12 = var7.progress;
                var11 = var12.interpolate;
                var7 = {};
                var14 = [0, 1];
                var7.inputRange = var14;
                var14 = var13.width;
                var13 = -0.3;
                var14 = var13 * var14;
                var13 = [0];
                var13[1] = var14;
                var7.outputRange = var13;
                var7.extrapolate = var5;
                var7 = var11.bind(var12)(var7);
                var6 = var8.bind(var9)(var7, var10);
            case 224:
                var4.translateX = var6;
                var3[1] = var4;
                var1.transform = var3;
                var0.cardStyle = var1;
                var1 = {};
                var6 = var2.progress;
                var4 = var6.interpolate;
                var3 = {};
                var7 = [0, 1];
                var3.inputRange = var7;
                var7 = [0, 0.07];
                var3.outputRange = var7;
                var3.extrapolate = var5;
                var3 = var4.bind(var6)(var3);
                var1.opacity = var3;
                var0.overlayStyle = var1;
                var1 = {};
                var4 = var2.progress;
                var3 = var4.interpolate;
                var2 = {};
                var6 = [0, 1];
                var2.inputRange = var6;
                var6 = [0, 0.3];
                var2.outputRange = var6;
                var2.extrapolate = var5;
                var2 = var3.bind(var4)(var2);
                var1.shadowOpacity = var2;
                var0.shadowStyle = var1;
                return var0;
        }
    };
    var2.forHorizontalIOS = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.current;
        var6 = var0.inverted;
        var0 = var0.layouts;
        var8 = var0.screen;
        var0 = {};
        var1 = {};
        var3 = {};
        var5 = _closure1_slot3;
        var7 = var2.progress;
        var4 = var7.interpolate;
        var2 = {};
        var9 = [0, 1];
        var2.inputRange = var9;
        var9 = var8.height;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 0;
        var8[1] = var9;
        var2.outputRange = var8;
        var8 = 'clamp';
        var2.extrapolate = var8;
        var4 = var4.bind(var7)(var2);
        var2 = undefined;
        var2 = var5.bind(var2)(var4, var6);
        var3.translateY = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1.transform = var2;
        var0.cardStyle = var1;
        return var0;
    };
    var2.forVerticalIOS = var3;
    var3 = function arg0() {
        _fun51502: for (var _fun51502_ip = 0;;) switch (_fun51502_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.index;
                var4 = var0.current;
                var5 = var0.next;
                var8 = var0.inverted;
                var1 = var0.layouts;
                var12 = var1.screen;
                var2 = var0.insets;
                var1 = var12.width;
                var0 = var12.height;
                var1 = var1 > var0;
                var0 = 10;
                var6 = var0;
                if (!var1) {
                    _fun51502_ip = 67;
                    continue _fun51502
                }
            case 65:
                var6 = 0;
            case 67:
                var9 = var2.top;
                var7 = var12.height;
                var2 = var12.width;
                var14 = var7 / var2;
                var11 = _closure1_slot2;
                var10 = var4.progress;
                var7 = var10.interpolate;
                var4 = {};
                var13 = [0, 1];
                var4.inputRange = var13;
                var13 = [0, 1];
                var4.outputRange = var13;
                var16 = 'clamp';
                var4.extrapolate = var16;
                var10 = var7.bind(var10)(var4);
                var4 = 0;
                var7 = 0;
                if (!var5) {
                    _fun51502_ip = 212;
                    continue _fun51502
                }
            case 158:
                var15 = var5.progress;
                var13 = var15.interpolate;
                var5 = {};
                var17 = [0, 1];
                var5.inputRange = var17;
                var17 = [0, 1];
                var5.outputRange = var17;
                var5.extrapolate = var16;
                var7 = var13.bind(var15)(var5);
            case 212:
                var5 = undefined;
                var11 = var11.bind(var5)(var10, var7);
                var7 = var4 === var3;
                var3 = _closure1_slot3;
                var10 = var11.interpolate;
                var2 = {};
                var13 = [0, 1, 2];
                var2.inputRange = var13;
                var15 = var12.height;
                var13 = new Array(3);
                var13[0] = var15;
                var15 = 0;
                if (var7) {
                    _fun51502_ip = 270;
                    continue _fun51502
                }
            case 267:
                var15 = var6;
            case 270:
                var13[1] = var15;
                var15 = 0;
                if (!var7) {
                    _fun51502_ip = 282;
                    continue _fun51502
                }
            case 279:
                var15 = var9;
            case 282:
                var14 = var6 * var14;
                var14 = var15 - var14;
                var13[2] = var14;
                var2.outputRange = var13;
                var2 = var10.bind(var11)(var2);
                var3 = var3.bind(var5)(var2, var8);
                var5 = var11.interpolate;
                var2 = {};
                var8 = [0, 1, 1.0001, 2];
                var2.inputRange = var8;
                var8 = [0, 0.3, 1, 1];
                var2.outputRange = var8;
                var2 = var5.bind(var11)(var2);
                var14 = 1;
                var5 = var14;
                if (var1) {
                    _fun51502_ip = 438;
                    continue _fun51502
                }
            case 362:
                var10 = var11.interpolate;
                var8 = {};
                var13 = [0, 1, 2];
                var8.inputRange = var13;
                var15 = var12.width;
                var13 = var14;
                if (!var15) {
                    _fun51502_ip = 414;
                    continue _fun51502
                }
            case 394:
                var15 = var12.width;
                var12 = 2;
                var12 = var12 * var6;
                var12 = var12 / var15;
                var13 = var14 - var12;
            case 414:
                var12 = [1, 1];
                var12[2] = var13;
                var8.outputRange = var12;
                var5 = var10.bind(var11)(var8);
            case 438:
                var8 = 0;
                if (var1) {
                    _fun51502_ip = 492;
                    continue _fun51502
                }
            case 443:
                if (!var7) {
                    _fun51502_ip = 489;
                    continue _fun51502
                }
            case 446:
                var10 = var11.interpolate;
                var1 = {};
                var12 = [0, 1, 1.0001, 2];
                var1.inputRange = var12;
                var12 = [0, 0, 0, 10];
                var1.outputRange = var12;
                var0 = var10.bind(var11)(var1);
            case 489:
                var8 = var0;
            case 492:
                var0 = {};
                var1 = {
                    'overflow': 'hidden',
                    'borderTopLeftRadius': null,
                    'borderTopRightRadius': null,
                    'borderBottomLeftRadius': 0,
                    'borderBottomRightRadius': 0
                };
                var1.borderTopLeftRadius = var8;
                var1.borderTopRightRadius = var8;
                var8 = 0;
                if (var7) {
                    _fun51502_ip = 528;
                    continue _fun51502
                }
            case 525:
                var8 = var9;
            case 528:
                var1.marginTop = var8;
                var4 = 0;
                if (var7) {
                    _fun51502_ip = 540;
                    continue _fun51502
                }
            case 537:
                var4 = var6;
            case 540:
                var1.marginBottom = var4;
                var4 = {};
                var4.translateY = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                var4.scale = var5;
                var3[1] = var4;
                var1.transform = var3;
                var0.cardStyle = var1;
                var1 = {};
                var1.opacity = var2;
                var0.overlayStyle = var1;
                return var0;
        }
    };
    var2.forModalPresentationIOS = var3;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.current;
        var2 = var0.inverted;
        var1 = var0.layouts;
        var8 = var1.screen;
        var7 = var0.closing;
        var1 = _closure1_slot3;
        var6 = var3.progress;
        var5 = var6.interpolate;
        var0 = {};
        var9 = [0, 1];
        var0.inputRange = var9;
        var9 = var8.height;
        var8 = 0.08;
        var9 = var8 * var9;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 0;
        var8[1] = var9;
        var0.outputRange = var8;
        var10 = 'clamp';
        var0.extrapolate = var10;
        var0 = var5.bind(var6)(var0);
        var6 = undefined;
        var2 = var1.bind(var6)(var0, var2);
        var0 = {};
        var1 = {};
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 1;
        var4 = var8[var4];
        var5 = var5.bind(var6)(var4);
        var4 = var3.progress;
        var9 = var3.progress;
        var8 = var9.interpolate;
        var3 = {};
        var11 = [0, 0.5, 0.9, 1];
        var3.inputRange = var11;
        var11 = [0, 0.25, 0.7, 1];
        var3.outputRange = var11;
        var3.extrapolate = var10;
        var3 = var8.bind(var9)(var3);
        var3 = var5.bind(var6)(var7, var4, var3);
        var1.opacity = var3;
        var3 = {};
        var3.translateY = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1.transform = var2;
        var0.cardStyle = var1;
        return var0;
    };
    var2.forFadeFromBottomAndroid = var3;
    var3 = function arg0() {
        _fun51504: for (var _fun51504_ip = 0;;) switch (_fun51504_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var7 = var0.next;
                var10 = var0.inverted;
                var0 = var0.layouts;
                var13 = var0.screen;
                var0 = {};
                var1 = {};
                var3 = 'hidden';
                var1.overflow = var3;
                var4 = {};
                var11 = _closure1_slot3;
                var12 = var2.progress;
                var9 = var12.interpolate;
                var3 = {};
                var5 = [0, 1];
                var3.inputRange = var5;
                var6 = var13.height;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 0;
                var5[1] = var6;
                var3.outputRange = var5;
                var5 = 'clamp';
                var3.extrapolate = var5;
                var3 = var9.bind(var12)(var3);
                var9 = undefined;
                var3 = var11.bind(var9)(var3, var10);
                var4.translateY = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var1.transform = var3;
                var0.containerStyle = var1;
                var1 = {};
                var4 = {};
                var14 = var2.progress;
                var12 = var14.interpolate;
                var3 = {};
                var15 = [0, 1];
                var3.inputRange = var15;
                var16 = var13.height;
                var15 = 0.9590000000000001;
                var17 = var15 * var16;
                var16 = new Array(2);
                var15 = -1;
                var17 = var17 * var15;
                var16[0] = var17;
                var16[1] = var6;
                var3.outputRange = var16;
                var3.extrapolate = var5;
                var3 = var12.bind(var14)(var3);
                var3 = var11.bind(var9)(var3, var10);
                var4.translateY = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var4 = {};
                if (!var7) {
                    _fun51504_ip = 354;
                    continue _fun51504
                }
            case 263:
                var8 = _closure1_slot3;
                var12 = var7.progress;
                var11 = var12.interpolate;
                var7 = {};
                var14 = [0, 1];
                var7.inputRange = var14;
                var14 = var13.height;
                var13 = 0.02;
                var14 = var13 * var14;
                var13 = [0];
                var14 = var14 * var15;
                var13[1] = var14;
                var7.outputRange = var13;
                var7.extrapolate = var5;
                var7 = var11.bind(var12)(var7);
                var6 = var8.bind(var9)(var7, var10);
            case 354:
                var4.translateY = var6;
                var3[1] = var4;
                var1.transform = var3;
                var0.cardStyle = var1;
                var1 = {};
                var4 = var2.progress;
                var3 = var4.interpolate;
                var2 = {};
                var6 = [0, 0.36, 1];
                var2.inputRange = var6;
                var6 = [0, 0.1, 0.1];
                var2.outputRange = var6;
                var2.extrapolate = var5;
                var2 = var3.bind(var4)(var2);
                var1.opacity = var2;
                var0.overlayStyle = var1;
                return var0;
        }
    };
    var2.forRevealFromBottomAndroid = var3;
    var3 = function arg0() {
        _fun51505: for (var _fun51505_ip = 0;;) switch (_fun51505_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var5 = var0.next;
                var7 = var0.closing;
                var3 = _closure1_slot2;
                var6 = var2.progress;
                var1 = var6.interpolate;
                var0 = {};
                var8 = [0, 1];
                var0.inputRange = var8;
                var8 = [0, 1];
                var0.outputRange = var8;
                var10 = 'clamp';
                var0.extrapolate = var10;
                var1 = var1.bind(var6)(var0);
                var0 = 0;
                if (!var5) {
                    _fun51505_ip = 143;
                    continue _fun51505
                }
            case 89:
                var8 = var5.progress;
                var6 = var8.interpolate;
                var5 = {};
                var9 = [0, 1];
                var5.inputRange = var9;
                var9 = [0, 1];
                var5.outputRange = var9;
                var5.extrapolate = var10;
                var0 = var6.bind(var8)(var5);
            case 143:
                var6 = undefined;
                var9 = var3.bind(var6)(var1, var0);
                var0 = {};
                var1 = {};
                var5 = var9.interpolate;
                var3 = {};
                var8 = [0, 0.75, 0.875, 1, 1.0825, 1.2075, 2];
                var3.inputRange = var8;
                var8 = [0, 0, 1, 1, 1, 1, 0];
                var3.outputRange = var8;
                var3 = var5.bind(var9)(var3);
                var1.opacity = var3;
                var3 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 1;
                var4 = var8[var4];
                var5 = var5.bind(var6)(var4);
                var8 = var2.progress;
                var4 = var8.interpolate;
                var2 = {};
                var11 = [0, 1];
                var2.inputRange = var11;
                var11 = [0.925, 1];
                var2.outputRange = var11;
                var2.extrapolate = var10;
                var4 = var4.bind(var8)(var2);
                var8 = var9.interpolate;
                var2 = {};
                var10 = [0, 1, 2];
                var2.inputRange = var10;
                var10 = [0.85, 1, 1.075];
                var2.outputRange = var10;
                var2 = var8.bind(var9)(var2);
                var2 = var5.bind(var6)(var7, var4, var2);
                var3.scale = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1.transform = var2;
                var0.cardStyle = var1;
                return var0;
        }
    };
    var2.forScaleFromCenterAndroid = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.current;
        var3 = var0.inverted;
        var1 = var0.layouts;
        var5 = var1.screen;
        var9 = var0.closing;
        var1 = _closure1_slot3;
        var7 = var2.progress;
        var6 = var7.interpolate;
        var0 = {};
        var8 = [0, 1];
        var0.inputRange = var8;
        var8 = var5.height;
        var5 = 0.8;
        var8 = var5 * var8;
        var5 = new Array(2);
        var5[0] = var8;
        var8 = 0;
        var5[1] = var8;
        var0.outputRange = var5;
        var5 = 'clamp';
        var0.extrapolate = var5;
        var0 = var6.bind(var7)(var0);
        var8 = undefined;
        var3 = var1.bind(var8)(var0, var3);
        var0 = {};
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 1;
        var4 = var7[var4];
        var7 = var6.bind(var8)(var4);
        var6 = var2.progress;
        var11 = var2.progress;
        var10 = var11.interpolate;
        var4 = {};
        var12 = [0, 1];
        var4.inputRange = var12;
        var12 = [0, 1];
        var4.outputRange = var12;
        var4.extrapolate = var5;
        var4 = var10.bind(var11)(var4);
        var4 = var7.bind(var8)(var9, var6, var4);
        var1.opacity = var4;
        var4 = {};
        var4.translateY = var3;
        var3 = new Array(1);
        var3[0] = var4;
        var1.transform = var3;
        var0.cardStyle = var1;
        var1 = {};
        var4 = var2.progress;
        var3 = var4.interpolate;
        var2 = {};
        var6 = [0, 1];
        var2.inputRange = var6;
        var6 = [0, 0.3];
        var2.outputRange = var6;
        var2.extrapolate = var5;
        var2 = var3.bind(var4)(var2);
        var1.opacity = var2;
        var0.overlayStyle = var1;
        return var0;
    };
    var2.forBottomSheetAndroid = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.current;
        var4 = var0.progress;
        var0 = {};
        var1 = {};
        var3 = var4.interpolate;
        var2 = {};
        var5 = [0, 0.5, 0.9, 1];
        var2.inputRange = var5;
        var5 = [0, 0.25, 0.7, 1];
        var2.outputRange = var5;
        var2 = var3.bind(var4)(var2);
        var1.opacity = var2;
        var0.cardStyle = var1;
        var1 = {};
        var3 = var4.interpolate;
        var2 = {};
        var5 = [0, 1];
        var2.inputRange = var5;
        var5 = [0, 0.5];
        var2.outputRange = var5;
        var5 = 'clamp';
        var2.extrapolate = var5;
        var2 = var3.bind(var4)(var2);
        var1.opacity = var2;
        var0.overlayStyle = var1;
        return var0;
    };
    var2.forFadeFromCenter = var3;
    var1 = function() {
        var0 = {};
        return var0;
    };
    var2.forNoAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5839]);