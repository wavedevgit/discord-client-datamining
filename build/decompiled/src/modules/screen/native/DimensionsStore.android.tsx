// modules/screen/native/DimensionsStore.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun16926: for (var _fun16926_ip = 0;;) switch (_fun16926_ip) {
            case 0:
                var0 = arg0;
                var2 = arg2;
                var1 = arg3;
                var11 = var2.width;
                var9 = var2.height;
                var3 = var1.width;
                var4 = var1.height;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.getSafeAreaInsets;
                var2 = var2.bind(var5)();
                var10 = var3;
                var6 = var4;
                if (!(var6 === var11)) {
                    _fun16926_ip = 80;
                    continue _fun16926
                }
            case 74:
                var10 = var4;
                var6 = var3;
            case 80:
                var4 = global;
                var7 = var4.Math;
                var5 = var7.min;
                var3 = var2.left;
                var11 = var11 + var3;
                var3 = var2.right;
                var3 = var11 + var3;
                var3 = var5.bind(var7)(var3, var10);
                var5 = var4.Math;
                var4 = var5.min;
                var7 = var2.top;
                var7 = var9 + var7;
                var2 = var2.bottom;
                var7 = var7 + var2;
                var9 = arg1;
                var2 = 0;
                if (var9) {
                    _fun16926_ip = 184;
                    continue _fun16926
                }
            case 154:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 4;
                var8 = var10[var8];
                var9 = var9.bind(var1)(var8);
                var8 = var9.getSystemKeyboardHeight;
                var2 = var8.bind(var9)();
            case 184:
                var2 = var7 - var2;
                var2 = var4.bind(var5)(var2, var6);
                var4 = null;
                var4 = var4 == var0;
                var1 = undefined;
                if (var4) {
                    _fun16926_ip = 210;
                    continue _fun16926
                }
            case 205:
                var1 = var0.width;
            case 210:
                if (!(var1 === var3)) {
                    _fun16926_ip = 223;
                    continue _fun16926
                }
            case 214:
                var1 = var0.height;
                if (!(var1 !== var2)) {
                    _fun16926_ip = 236;
                    continue _fun16926
                }
            case 223:
                var1 = {};
                var1.width = var3;
                var1.height = var2;
                var0 = var1;
            case 236:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        _fun16927: for (var _fun16927_ip = 0;;) switch (_fun16927_ip) {
            case 0:
                var0 = arg0;
                var10 = {};
                var4 = _closure1_slot3;
                var3 = var4.get;
                var1 = 'window';
                var13 = var3.bind(var4)(var1);
                var14 = var10;
                var1 = copyDataProperties(var14, var13);
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 2;
                var3 = var1[var5];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = null;
                var4 = var6 == var3;
                var3 = undefined;
                if (var4) {
                    _fun16927_ip = 93;
                    continue _fun16927
                }
            case 66:
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var5];
                var7 = var7.bind(var1)(var4);
                var4 = var7.getWindowSize;
                var3 = var4.bind(var7)();
            case 93:
                var14 = var10;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var4.bind(var1)(var3);
                var3 = var6 == var3;
                var9 = undefined;
                if (var3) {
                    _fun16927_ip = 156;
                    continue _fun16927
                }
            case 129:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getScreenSize;
                var9 = var3.bind(var4)();
            case 156:
                if (!(var6 == var9)) {
                    _fun16927_ip = 178;
                    continue _fun16927
                }
            case 160:
                var5 = _closure1_slot3;
                var4 = var5.get;
                var3 = 'screen';
                var9 = var4.bind(var5)(var3);
            case 178:
                var5 = var10.fontScale;
                var4 = var9.width;
                var3 = var9.height;
                var4 = var4 > var3;
                var7 = var6 == var0;
                var3 = undefined;
                if (var7) {
                    _fun16927_ip = 213;
                    continue _fun16927
                }
            case 207:
                var3 = var0.windowDimensions;
            case 213:
                var7 = var6 == var0;
                var8 = undefined;
                if (var7) {
                    _fun16927_ip = 228;
                    continue _fun16927
                }
            case 222:
                var8 = var0.windowDimensionsIgnoringKeyboard;
            case 228:
                var7 = _closure1_slot5;
                var13 = false;
                var15 = undefined;
                var14 = var3;
                var12 = var10;
                var11 = var9;
                var3 = var15[var7](var14, var13, var12, var11, var10);
                var13 = true;
                var14 = var8;
                var12 = var10;
                var11 = var9;
                var2 = var15[var7](var14, var13, var12, var11, var10);
                var6 = var6 == var0;
                var1 = undefined;
                if (var6) {
                    _fun16927_ip = 279;
                    continue _fun16927
                }
            case 273:
                var1 = var0.windowDimensions;
            case 279:
                if (!(var1 === var3)) {
                    _fun16927_ip = 303;
                    continue _fun16927
                }
            case 283:
                var1 = var0.fontScale;
                if (!(var1 === var5)) {
                    _fun16927_ip = 303;
                    continue _fun16927
                }
            case 293:
                var1 = var0.screenIsLandscape;
                if (!(var1 !== var4)) {
                    _fun16927_ip = 328;
                    continue _fun16927
                }
            case 303:
                var1 = {};
                var1.fontScale = var5;
                var1.screenIsLandscape = var4;
                var1.windowDimensions = var3;
                var1.windowDimensionsIgnoringKeyboard = var2;
                var0 = var1;
            case 328:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.Dimensions;
    var _closure1_slot3 = var8;
    var1 = 1;
    var1 = var5[var1];
    var7 = var9.bind(var0)(var1);
    var1 = 6;
    var1 = var5[var1];
    var10 = var4.bind(var0)(var1);
    var6 = var10.create;
    var1 = function() { // Environment: var3
        var1 = _closure1_slot6;
        var0 = undefined;
        var0 = var1.bind(var0)(var0);
        return var0;
    };
    var1 = var6.bind(var10)(var1);
    var _closure1_slot4 = var1;
    var6 = 7;
    var6 = var5[var6];
    var9 = var9.bind(var0)(var6);
    var6 = function() { // Environment: var3
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6 = var9.bind(var0)(var6);
    var6 = function() { // Environment: var3
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6 = var7.bind(var0)(var6);
    var7 = var8.addEventListener;
    var6 = 'change';
    var3 = function() { // Environment: var3
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3 = var7.bind(var8)(var6, var3);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen/native/DimensionsStore.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1466, 655, 1568, 1585, 802, 629, 1584, 2]);