// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var3 = function arg0, arg1, arg2() {
        _fun75092: for (var _fun75092_ip = 0;;) switch (_fun75092_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = arg2;
                var1 = var0.vertical;
                if (var1) {
                    _fun75092_ip = 26;
                    continue _fun75092
                }
            case 18:
                var3 = var0.itemWidth;
                _fun75092_ip = 32;
                continue _fun75092;
            case 26:
                var3 = var0.itemHeight;
            case 32:
                var0 = new Array(0);
                var1 = var5.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun75092_ip = 84;
                    continue _fun75092
                }
            case 50:
                var6 = var0.push;
                var1 = var5[var2];
                var1 = var4 - var1;
                var1 = var1 * var3;
                var1 = var6.bind(var0)(var1);
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun75092_ip = 50;
                    continue _fun75092
                }
            case 84:
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = arg1;
    var4 = var4.bind(var0)(var5);
    var4 = var4.Platform;
    var2.getInputRangeFromIndexes = var3;
    var3 = function arg0, arg1() {
        var0 = {};
        var5 = _closure1_slot1;
        var4 = [1, 0];
        var1 = -1;
        var4[2] = var1;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var1 = var5.bind(var3)(var4, var2, var1);
        var0.inputRange = var1;
        var1 = [0, 1, 0];
        var0.outputRange = var1;
        return var0;
    };
    var2.defaultScrollInterpolator = var3;
    var3 = function arg0, arg1, arg2() {
        _fun75094: for (var _fun75094_ip = 0;;) switch (_fun75094_ip) {
            case 0:
                var6 = arg1;
                var7 = arg2;
                var4 = {};
                var3 = {};
                var0 = var7.inactiveSlideOpacity;
                var8 = 1;
                if (!(var0 < var8)) {
                    _fun75094_ip = 83;
                    continue _fun75094
                }
            case 23:
                var0 = {};
                var2 = var6.interpolate;
                var1 = {};
                var5 = [0, 1];
                var1.inputRange = var5;
                var9 = var7.inactiveSlideOpacity;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var8;
                var1.outputRange = var5;
                var1 = var2.bind(var6)(var1);
                var0.opacity = var1;
                var4 = var0;
            case 83:
                var0 = var7.inactiveSlideScale;
                if (!(var0 < var8)) {
                    _fun75094_ip = 168;
                    continue _fun75094
                }
            case 93:
                var0 = {};
                var2 = {};
                var5 = var6.interpolate;
                var1 = {};
                var9 = [0, 1];
                var1.inputRange = var9;
                var9 = var7.inactiveSlideScale;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var1.outputRange = var7;
                var1 = var5.bind(var6)(var1);
                var2.scale = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0.transform = var1;
                var3 = var0;
            case 168:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.assign;
                var0 = {};
                var0 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var2.defaultAnimatedStyles = var3;
    var3 = function arg0, arg1, arg2() {
        _fun75095: for (var _fun75095_ip = 0;;) switch (_fun75095_ip) {
            case 0:
                var2 = arg1;
                var6 = arg2;
                var4 = {};
                var9 = {};
                var8 = {};
                var0 = var6.inactiveSlideOpacity;
                var7 = 1;
                if (!(var0 < var7)) {
                    _fun75095_ip = 85;
                    continue _fun75095
                }
            case 25:
                var0 = {};
                var3 = var2.interpolate;
                var1 = {};
                var5 = [0, 1];
                var1.inputRange = var5;
                var10 = var6.inactiveSlideOpacity;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var7;
                var1.outputRange = var5;
                var1 = var3.bind(var2)(var1);
                var0.opacity = var1;
                var4 = var0;
            case 85:
                var0 = var6.inactiveSlideScale;
                if (!(var0 < var7)) {
                    _fun75095_ip = 156;
                    continue _fun75095
                }
            case 95:
                var0 = {};
                var3 = var2.interpolate;
                var1 = {};
                var5 = [0, 1];
                var1.inputRange = var5;
                var10 = var6.inactiveSlideScale;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var7;
                var1.outputRange = var5;
                var1 = var3.bind(var2)(var1);
                var0.scale = var1;
                var9 = var0;
            case 156:
                var0 = var6.inactiveSlideShift;
                var7 = 0;
                if (!(var7 !== var0)) {
                    _fun75095_ip = 254;
                    continue _fun75095
                }
            case 168:
                var0 = var6.vertical;
                var5 = 'translateY';
                if (!var0) {
                    _fun75095_ip = 185;
                    continue _fun75095
                }
            case 181:
                var5 = 'translateX';
            case 185:
                var3 = _closure1_slot0;
                var1 = var2.interpolate;
                var0 = {};
                var10 = [0, 1];
                var0.inputRange = var10;
                var10 = var6.inactiveSlideShift;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var7;
                var0.outputRange = var6;
                var2 = var1.bind(var2)(var0);
                var1 = undefined;
                var0 = {};
                var8 = var3.bind(var1)(var0, var5, var2);
            case 254:
                var5 = global;
                var3 = var5.Object;
                var2 = var3.assign;
                var1 = {};
                var7 = var5.Object;
                var6 = var7.assign;
                var0 = {};
                var6 = var6.bind(var7)(var0, var9);
                var0 = new Array(2);
                var0[0] = var6;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = {};
                var5 = var6.bind(var7)(var5, var8);
                var0[1] = var5;
                var1.transform = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var2.shiftAnimatedStyles = var3;
    var3 = function arg0, arg1() {
        var1 = [1, 0];
        var0 = -1;
        var1[2] = var0;
        var0 = -2;
        var1[3] = var0;
        var0 = -3;
        var1[4] = var0;
        var0 = {};
        var5 = _closure1_slot1;
        var4 = undefined;
        var3 = arg0;
        var2 = arg1;
        var2 = var5.bind(var4)(var1, var3, var2);
        var0.inputRange = var2;
        var0.outputRange = var1;
        return var0;
    };
    var2.stackScrollInterpolator = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun75097: for (var _fun75097_ip = 0;;) switch (_fun75097_ip) {
            case 0:
                var7 = arg1;
                var0 = arg2;
                var3 = arg3;
                var _closure2_slot0 = var3;
                var2 = var0.vertical;
                if (var2) {
                    _fun75097_ip = 32;
                    continue _fun75097
                }
            case 24:
                var11 = var0.itemWidth;
                _fun75097_ip = 38;
                continue _fun75097;
            case 32:
                var11 = var0.itemHeight;
            case 38:
                var _closure2_slot1 = var11;
                var2 = var0.vertical;
                var6 = 'translateX';
                if (!var2) {
                    _fun75097_ip = 59;
                    continue _fun75097
                }
            case 55:
                var6 = 'translateY';
            case 59:
                if (var3) {
                    _fun75097_ip = 71;
                    continue _fun75097
                }
            case 62:
                var2 = 18;
                var4 = 0;
                if (!(var4 === var3)) {
                    _fun75097_ip = 74;
                    continue _fun75097
                }
            case 71:
                var2 = var3;
            case 74:
                _closure2_slot0 = var2;
                var14 = function arg0, arg1() {
                    var7 = arg0;
                    var4 = arg1;
                    var0 = 1;
                    var0 = var0 / var4;
                    var6 = var0 * var7;
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.round;
                    var1 = _closure2_slot1;
                    var1 = var1 * var6;
                    var1 = var2.bind(var3)(var1);
                    var2 = -var1;
                    var6 = var0.Math;
                    var3 = var6.round;
                    var8 = _closure2_slot1;
                    var1 = var8 * var4;
                    var8 = var8 - var1;
                    var1 = 2;
                    var1 = var8 / var1;
                    var1 = var3.bind(var6)(var1);
                    var1 = var2 - var1;
                    var3 = var0.Math;
                    var2 = var3.round;
                    var5 = _closure2_slot0;
                    var6 = var0.Math;
                    var0 = var6.abs;
                    var0 = var0.bind(var6)(var7);
                    var0 = var5 * var0;
                    var0 = var0 / var4;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 - var0;
                    return var0;
                };
                var0 = var0.inactiveSlideOpacity;
                var12 = 1;
                if (!(var12 !== var0)) {
                    _fun75097_ip = 110;
                    continue _fun75097
                }
            case 98:
                var4 = [1, 0.75, 0.5, 0];
                _fun75097_ip = 120;
                continue _fun75097;
            case 110:
                var4 = [1, 1, 1, 0];
            case 120:
                var0 = {};
                var2 = var7.interpolate;
                var1 = {};
                var3 = new Array(4);
                var9 = -3;
                var3[0] = var9;
                var15 = -2;
                var3[1] = var15;
                var13 = -1;
                var3[2] = var13;
                var10 = 0;
                var3[3] = var10;
                var1.inputRange = var3;
                var3 = var4.reverse;
                var3 = var3.bind(var4)();
                var1.outputRange = var3;
                var8 = 'clamp';
                var1.extrapolate = var8;
                var1 = var2.bind(var7)(var1);
                var0.opacity = var1;
                var2 = {};
                var3 = var7.interpolate;
                var1 = {};
                var4 = new Array(4);
                var4[0] = var15;
                var4[1] = var13;
                var4[2] = var10;
                var4[3] = var12;
                var1.inputRange = var4;
                var4 = [0.8, 0.9, 1, 0.9];
                var1.outputRange = var4;
                var1.extrapolate = var8;
                var1 = var3.bind(var7)(var1);
                var2.scale = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var5 = _closure1_slot0;
                var3 = var7.interpolate;
                var2 = {};
                var4 = new Array(5);
                var4[0] = var9;
                var4[1] = var15;
                var4[2] = var13;
                var4[3] = var10;
                var4[4] = var12;
                var2.inputRange = var4;
                var4 = undefined;
                var12 = 0.8;
                var16 = var14.bind(var4)(var9, var12);
                var9 = new Array(5);
                var9[0] = var16;
                var12 = var14.bind(var4)(var15, var12);
                var9[1] = var12;
                var12 = 0.9;
                var12 = var14.bind(var4)(var13, var12);
                var9[2] = var12;
                var9[3] = var10;
                var10 = 0.5;
                var10 = var10 * var11;
                var9[4] = var10;
                var2.outputRange = var9;
                var2.extrapolate = var8;
                var3 = var3.bind(var7)(var2);
                var2 = {};
                var2 = var5.bind(var4)(var2, var6, var3);
                var1[1] = var2;
                var0.transform = var1;
                return var0;
        }
    };
    var2.stackAnimatedStyles = var3;
    var3 = function arg0, arg1() {
        var1 = [1, 0];
        var0 = -1;
        var1[2] = var0;
        var0 = -2;
        var1[3] = var0;
        var0 = -3;
        var1[4] = var0;
        var0 = {};
        var5 = _closure1_slot1;
        var4 = undefined;
        var3 = arg0;
        var2 = arg1;
        var2 = var5.bind(var4)(var1, var3, var2);
        var0.inputRange = var2;
        var0.outputRange = var1;
        return var0;
    };
    var2.tinderScrollInterpolator = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun75100: for (var _fun75100_ip = 0;;) switch (_fun75100_ip) {
            case 0:
                var7 = arg1;
                var3 = arg2;
                var2 = arg3;
                var _closure2_slot0 = var2;
                var1 = var3.vertical;
                if (var1) {
                    _fun75100_ip = 32;
                    continue _fun75100
                }
            case 24:
                var20 = var3.itemWidth;
                _fun75100_ip = 38;
                continue _fun75100;
            case 32:
                var20 = var3.itemHeight;
            case 38:
                var _closure2_slot1 = var20;
                var4 = var3.vertical;
                var1 = 'translateX';
                var17 = var1;
                if (!var4) {
                    _fun75100_ip = 62;
                    continue _fun75100
                }
            case 58:
                var17 = 'translateY';
            case 62:
                var3 = var3.vertical;
                var6 = 'translateY';
                if (!var3) {
                    _fun75100_ip = 78;
                    continue _fun75100
                }
            case 75:
                var6 = var1;
            case 78:
                if (var2) {
                    _fun75100_ip = 90;
                    continue _fun75100
                }
            case 81:
                var1 = 9;
                var3 = 0;
                if (!(var3 === var2)) {
                    _fun75100_ip = 93;
                    continue _fun75100
                }
            case 90:
                var1 = var2;
            case 93:
                _closure2_slot0 = var1;
                var19 = function arg0, arg1() {
                    var1 = 1;
                    var0 = arg1;
                    var1 = var1 / var0;
                    var0 = arg0;
                    var3 = var1 * var0;
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.round;
                    var0 = _closure2_slot1;
                    var0 = var0 * var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = -var0;
                    return var0;
                };
                var13 = function arg0, arg1() {
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.round;
                    var3 = _closure2_slot0;
                    var5 = var0.Math;
                    var4 = var5.abs;
                    var0 = arg0;
                    var0 = var4.bind(var5)(var0);
                    var3 = var3 * var0;
                    var0 = arg1;
                    var0 = var3 / var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = {};
                var2 = var7.interpolate;
                var1 = {};
                var3 = new Array(5);
                var16 = -3;
                var3[0] = var16;
                var15 = -2;
                var3[1] = var15;
                var12 = -1;
                var3[2] = var12;
                var10 = 0;
                var3[3] = var10;
                var18 = 1;
                var3[4] = var18;
                var1.inputRange = var3;
                var3 = [0, 0.92, 0.92, 1, 0];
                var1.outputRange = var3;
                var8 = 'clamp';
                var1.extrapolate = var8;
                var1 = var2.bind(var7)(var1);
                var0.opacity = var1;
                var2 = {};
                var3 = var7.interpolate;
                var1 = {};
                var4 = new Array(4);
                var4[0] = var16;
                var4[1] = var15;
                var4[2] = var12;
                var4[3] = var10;
                var1.inputRange = var4;
                var4 = new Array(4);
                var9 = 0.88;
                var4[0] = var9;
                var14 = 0.92;
                var4[1] = var14;
                var11 = 0.96;
                var4[2] = var11;
                var4[3] = var18;
                var1.outputRange = var4;
                var1.extrapolate = var8;
                var1 = var3.bind(var7)(var1);
                var2.scale = var1;
                var1 = new Array(4);
                var1[0] = var2;
                var2 = {};
                var4 = var7.interpolate;
                var3 = {};
                var5 = [0, 1];
                var3.inputRange = var5;
                var5 = ['0deg', '22deg'];
                var3.outputRange = var5;
                var3.extrapolate = var8;
                var3 = var4.bind(var7)(var3);
                var2.rotate = var3;
                var1[1] = var2;
                var5 = _closure1_slot0;
                var3 = var7.interpolate;
                var2 = {};
                var4 = new Array(5);
                var4[0] = var16;
                var4[1] = var15;
                var4[2] = var12;
                var4[3] = var10;
                var4[4] = var18;
                var2.inputRange = var4;
                var4 = undefined;
                var21 = var19.bind(var4)(var16, var9);
                var18 = new Array(5);
                var18[0] = var21;
                var21 = var19.bind(var4)(var15, var14);
                var18[1] = var21;
                var19 = var19.bind(var4)(var12, var11);
                var18[2] = var19;
                var18[3] = var10;
                var19 = 1.1;
                var19 = var19 * var20;
                var18[4] = var19;
                var2.outputRange = var18;
                var2.extrapolate = var8;
                var3 = var3.bind(var7)(var2);
                var2 = {};
                var2 = var5.bind(var4)(var2, var17, var3);
                var1[2] = var2;
                var3 = var7.interpolate;
                var2 = {};
                var17 = new Array(4);
                var17[0] = var16;
                var17[1] = var15;
                var17[2] = var12;
                var17[3] = var10;
                var2.inputRange = var17;
                var16 = var13.bind(var4)(var16, var9);
                var9 = new Array(4);
                var9[0] = var16;
                var14 = var13.bind(var4)(var15, var14);
                var9[1] = var14;
                var11 = var13.bind(var4)(var12, var11);
                var9[2] = var11;
                var9[3] = var10;
                var2.outputRange = var9;
                var2.extrapolate = var8;
                var3 = var3.bind(var7)(var2);
                var2 = {};
                var2 = var5.bind(var4)(var2, var6, var3);
                var1[3] = var2;
                var0.transform = var1;
                return var0;
        }
    };
    var2.tinderAnimatedStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 27]);