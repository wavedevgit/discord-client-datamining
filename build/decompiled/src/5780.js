// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = var4.Animated;
    var4 = var4.I18nManager;
    var _closure1_slot0 = var4;
    var3 = var3.add;
    var _closure1_slot1 = var3;
    var3 = function arg0() {
        _fun51117: for (var _fun51117_ip = 0;;) switch (_fun51117_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.current;
                var0 = var2.next;
                var8 = var2.layouts;
                var2 = var8.leftLabel;
                var10 = 100;
                var13 = var10;
                if (!var2) {
                    _fun51117_ip = 74;
                    continue _fun51117
                }
            case 34:
                var2 = var8.screen;
                var3 = var2.width;
                var2 = var8.leftLabel;
                var2 = var2.width;
                var3 = var3 - var2;
                var2 = 2;
                var3 = var3 / var2;
                var2 = 27;
                var13 = var3 - var2;
            case 74:
                var2 = var8.title;
                if (!var2) {
                    _fun51117_ip = 121;
                    continue _fun51117
                }
            case 82:
                var2 = var8.screen;
                var3 = var2.width;
                var2 = var8.title;
                var2 = var2.width;
                var3 = var3 - var2;
                var2 = 2;
                var3 = var3 / var2;
                var2 = 27;
                var10 = var3 - var2;
            case 121:
                var2 = var8.screen;
                var3 = var2.width;
                var2 = 4;
                var11 = var3 / var2;
                var3 = _closure1_slot1;
                var4 = var1.progress;
                var2 = var4.interpolate;
                var1 = {};
                var5 = [0, 1];
                var1.inputRange = var5;
                var5 = [0, 1];
                var1.outputRange = var5;
                var7 = 'clamp';
                var1.extrapolate = var7;
                var2 = var2.bind(var4)(var1);
                var9 = 0;
                var1 = 0;
                if (!var0) {
                    _fun51117_ip = 265;
                    continue _fun51117
                }
            case 211:
                var5 = var0.progress;
                var4 = var5.interpolate;
                var0 = {};
                var12 = [0, 1];
                var0.inputRange = var12;
                var12 = [0, 1];
                var0.outputRange = var12;
                var0.extrapolate = var7;
                var1 = var4.bind(var5)(var0);
            case 265:
                var0 = undefined;
                var5 = var3.bind(var0)(var2, var1);
                var0 = {};
                var1 = {};
                var3 = var5.interpolate;
                var2 = {};
                var4 = [0.3, 1, 1.5];
                var2.inputRange = var4;
                var4 = [0, 1, 0];
                var2.outputRange = var4;
                var2 = var3.bind(var5)(var2);
                var1.opacity = var2;
                var0.leftButtonStyle = var1;
                var1 = {};
                var3 = {};
                var4 = var5.interpolate;
                var2 = {};
                var7 = [0, 1, 2];
                var2.inputRange = var7;
                var12 = _closure1_slot0;
                var7 = var12.getConstants;
                var7 = var7.bind(var12)();
                var7 = var7.isRTL;
                var14 = -var11;
                var12 = new Array(3);
                if (var7) {
                    _fun51117_ip = 401;
                    continue _fun51117
                }
            case 384:
                var12[0] = var13;
                var12[1] = var9;
                var12[2] = var14;
                var7 = var12;
                _fun51117_ip = 416;
                continue _fun51117;
            case 401:
                var12[0] = var14;
                var12[1] = var9;
                var12[2] = var13;
                var7 = var12;
            case 416:
                var2.outputRange = var7;
                var2 = var4.bind(var5)(var2);
                var3.translateX = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1.transform = var2;
                var0.leftLabelStyle = var1;
                var1 = {};
                var3 = var5.interpolate;
                var2 = {};
                var4 = [0.3, 1, 1.5];
                var2.inputRange = var4;
                var4 = [0, 1, 0];
                var2.outputRange = var4;
                var2 = var3.bind(var5)(var2);
                var1.opacity = var2;
                var0.rightButtonStyle = var1;
                var1 = {};
                var3 = var5.interpolate;
                var2 = {};
                var4 = [0, 0.4, 1, 1.5];
                var2.inputRange = var4;
                var4 = [0, 0.1, 1, 0];
                var2.outputRange = var4;
                var2 = var3.bind(var5)(var2);
                var1.opacity = var2;
                var3 = {};
                var4 = var5.interpolate;
                var2 = {};
                var7 = [0.5, 1, 2];
                var2.inputRange = var7;
                var12 = _closure1_slot0;
                var7 = var12.getConstants;
                var7 = var7.bind(var12)();
                var7 = var7.isRTL;
                var12 = -var10;
                var10 = new Array(3);
                if (var7) {
                    _fun51117_ip = 623;
                    continue _fun51117
                }
            case 606:
                var10[0] = var11;
                var10[1] = var9;
                var10[2] = var12;
                var7 = var10;
                _fun51117_ip = 638;
                continue _fun51117;
            case 623:
                var10[0] = var12;
                var10[1] = var9;
                var10[2] = var11;
                var7 = var10;
            case 638:
                var2.outputRange = var7;
                var2 = var4.bind(var5)(var2);
                var3.translateX = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1.transform = var2;
                var0.titleStyle = var1;
                var1 = {};
                var3 = {};
                var4 = var5.interpolate;
                var2 = {};
                var7 = [0, 1, 2];
                var2.inputRange = var7;
                var7 = _closure1_slot0;
                var6 = var7.getConstants;
                var6 = var6.bind(var7)();
                var6 = var6.isRTL;
                var7 = var8.screen;
                var10 = var7.width;
                var7 = new Array(3);
                if (var6) {
                    _fun51117_ip = 764;
                    continue _fun51117
                }
            case 733:
                var7[0] = var10;
                var7[1] = var9;
                var6 = var8.screen;
                var6 = var6.width;
                var6 = -var6;
                var7[2] = var6;
                var6 = var7;
                _fun51117_ip = 793;
                continue _fun51117;
            case 764:
                var10 = -var10;
                var7[0] = var10;
                var7[1] = var9;
                var8 = var8.screen;
                var8 = var8.width;
                var7[2] = var8;
                var6 = var7;
            case 793:
                var2.outputRange = var6;
                var2 = var4.bind(var5)(var2);
                var3.translateX = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1.transform = var2;
                var0.backgroundStyle = var1;
                return var0;
        }
    };
    var2.forUIKit = var3;
    var3 = function arg0() {
        _fun51118: for (var _fun51118_ip = 0;;) switch (_fun51118_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.current;
                var0 = var0.next;
                var3 = _closure1_slot1;
                var4 = var1.progress;
                var2 = var4.interpolate;
                var1 = {};
                var5 = [0, 1];
                var1.inputRange = var5;
                var5 = [0, 1];
                var1.outputRange = var5;
                var6 = 'clamp';
                var1.extrapolate = var6;
                var2 = var2.bind(var4)(var1);
                var1 = 0;
                if (!var0) {
                    _fun51118_ip = 137;
                    continue _fun51118
                }
            case 83:
                var5 = var0.progress;
                var4 = var5.interpolate;
                var0 = {};
                var7 = [0, 1];
                var0.inputRange = var7;
                var7 = [0, 1];
                var0.outputRange = var7;
                var0.extrapolate = var6;
                var1 = var4.bind(var5)(var0);
            case 137:
                var0 = undefined;
                var4 = var3.bind(var0)(var2, var1);
                var1 = var4.interpolate;
                var0 = {};
                var2 = [0, 1, 2];
                var0.inputRange = var2;
                var2 = [0, 1, 0];
                var0.outputRange = var2;
                var2 = var1.bind(var4)(var0);
                var0 = {};
                var1 = {};
                var1.opacity = var2;
                var0.leftButtonStyle = var1;
                var1 = {};
                var1.opacity = var2;
                var0.rightButtonStyle = var1;
                var1 = {};
                var1.opacity = var2;
                var0.titleStyle = var1;
                var1 = {};
                var3 = var4.interpolate;
                var2 = {};
                var5 = [0, 1, 1.9, 2];
                var2.inputRange = var5;
                var5 = [0, 1, 1, 0];
                var2.outputRange = var5;
                var2 = var3.bind(var4)(var2);
                var1.opacity = var2;
                var0.backgroundStyle = var1;
                return var0;
        }
    };
    var2.forFade = var3;
    var3 = function arg0() {
        _fun51119: for (var _fun51119_ip = 0;;) switch (_fun51119_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var1 = var0.next;
                var0 = var0.layouts;
                var6 = var0.screen;
                var0 = {};
                var5 = _closure1_slot1;
                var7 = var2.progress;
                var3 = var7.interpolate;
                var2 = {};
                var8 = [0, 1];
                var2.inputRange = var8;
                var8 = [0, 1];
                var2.outputRange = var8;
                var10 = 'clamp';
                var2.extrapolate = var10;
                var3 = var3.bind(var7)(var2);
                var7 = 0;
                var2 = 0;
                if (!var1) {
                    _fun51119_ip = 153;
                    continue _fun51119
                }
            case 99:
                var9 = var1.progress;
                var8 = var9.interpolate;
                var1 = {};
                var11 = [0, 1];
                var1.inputRange = var11;
                var11 = [0, 1];
                var1.outputRange = var11;
                var1.extrapolate = var10;
                var2 = var8.bind(var9)(var1);
            case 153:
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var2);
                var2 = var3.interpolate;
                var1 = {};
                var5 = [0, 1, 2];
                var1.inputRange = var5;
                var5 = _closure1_slot0;
                var4 = var5.getConstants;
                var4 = var4.bind(var5)();
                var4 = var4.isRTL;
                var8 = var6.width;
                var5 = new Array(3);
                if (var4) {
                    _fun51119_ip = 239;
                    continue _fun51119
                }
            case 214:
                var5[0] = var8;
                var5[1] = var7;
                var4 = var6.width;
                var4 = -var4;
                var5[2] = var4;
                var4 = var5;
                _fun51119_ip = 262;
                continue _fun51119;
            case 239:
                var8 = -var8;
                var5[0] = var8;
                var5[1] = var7;
                var6 = var6.width;
                var5[2] = var6;
                var4 = var5;
            case 262:
                var1.outputRange = var4;
                var1 = var2.bind(var3)(var1);
                var0.translateX = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = {};
                var1 = {};
                var1.transform = var2;
                var0.leftButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.rightButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.titleStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.backgroundStyle = var1;
                return var0;
        }
    };
    var2.forSlideLeft = var3;
    var3 = function arg0() {
        _fun51120: for (var _fun51120_ip = 0;;) switch (_fun51120_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var1 = var0.next;
                var0 = var0.layouts;
                var6 = var0.screen;
                var0 = {};
                var5 = _closure1_slot1;
                var7 = var2.progress;
                var3 = var7.interpolate;
                var2 = {};
                var8 = [0, 1];
                var2.inputRange = var8;
                var8 = [0, 1];
                var2.outputRange = var8;
                var10 = 'clamp';
                var2.extrapolate = var10;
                var3 = var3.bind(var7)(var2);
                var7 = 0;
                var2 = 0;
                if (!var1) {
                    _fun51120_ip = 153;
                    continue _fun51120
                }
            case 99:
                var9 = var1.progress;
                var8 = var9.interpolate;
                var1 = {};
                var11 = [0, 1];
                var1.inputRange = var11;
                var11 = [0, 1];
                var1.outputRange = var11;
                var1.extrapolate = var10;
                var2 = var8.bind(var9)(var1);
            case 153:
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var2);
                var2 = var3.interpolate;
                var1 = {};
                var5 = [0, 1, 2];
                var1.inputRange = var5;
                var5 = _closure1_slot0;
                var4 = var5.getConstants;
                var4 = var4.bind(var5)();
                var4 = var4.isRTL;
                var8 = var6.width;
                var5 = new Array(3);
                if (var4) {
                    _fun51120_ip = 239;
                    continue _fun51120
                }
            case 214:
                var4 = -var8;
                var5[0] = var4;
                var5[1] = var7;
                var4 = var6.width;
                var5[2] = var4;
                var4 = var5;
                _fun51120_ip = 262;
                continue _fun51120;
            case 239:
                var5[0] = var8;
                var5[1] = var7;
                var6 = var6.width;
                var6 = -var6;
                var5[2] = var6;
                var4 = var5;
            case 262:
                var1.outputRange = var4;
                var1 = var2.bind(var3)(var1);
                var0.translateX = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = {};
                var1 = {};
                var1.transform = var2;
                var0.leftButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.rightButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.titleStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.backgroundStyle = var1;
                return var0;
        }
    };
    var2.forSlideRight = var3;
    var3 = function arg0() {
        _fun51121: for (var _fun51121_ip = 0;;) switch (_fun51121_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.current;
                var1 = var0.next;
                var0 = var0.layouts;
                var5 = var0.header;
                var0 = {};
                var4 = _closure1_slot1;
                var6 = var2.progress;
                var3 = var6.interpolate;
                var2 = {};
                var7 = [0, 1];
                var2.inputRange = var7;
                var7 = [0, 1];
                var2.outputRange = var7;
                var9 = 'clamp';
                var2.extrapolate = var9;
                var3 = var3.bind(var6)(var2);
                var6 = 0;
                var2 = 0;
                if (!var1) {
                    _fun51121_ip = 152;
                    continue _fun51121
                }
            case 98:
                var8 = var1.progress;
                var7 = var8.interpolate;
                var1 = {};
                var10 = [0, 1];
                var1.inputRange = var10;
                var10 = [0, 1];
                var1.outputRange = var10;
                var1.extrapolate = var9;
                var2 = var7.bind(var8)(var1);
            case 152:
                var1 = undefined;
                var3 = var4.bind(var1)(var3, var2);
                var2 = var3.interpolate;
                var1 = {};
                var4 = [0, 1, 2];
                var1.inputRange = var4;
                var4 = var5.height;
                var7 = -var4;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var6;
                var5 = var5.height;
                var5 = -var5;
                var4[2] = var5;
                var1.outputRange = var4;
                var1 = var2.bind(var3)(var1);
                var0.translateY = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = {};
                var1 = {};
                var1.transform = var2;
                var0.leftButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.rightButtonStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.titleStyle = var1;
                var1 = {};
                var1.transform = var2;
                var0.backgroundStyle = var1;
                return var0;
        }
    };
    var2.forSlideUp = var3;
    var1 = function() {
        var0 = {};
        return var0;
    };
    var2.forNoAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);