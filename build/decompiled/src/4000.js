// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1, arg2() {
        _fun37217: for (var _fun37217_ip = 0;;) switch (_fun37217_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Number;
                var0 = var1.isInteger;
                var0 = var0.bind(var1)(var2);
                if (!var0) {
                    _fun37217_ip = 32;
                    continue _fun37217
                }
            case 25:
                var1 = arg1;
                var0 = var2 >= var1;
            case 32:
                if (!var0) {
                    _fun37217_ip = 42;
                    continue _fun37217
                }
            case 35:
                var1 = arg2;
                var0 = var2 <= var1;
            case 42:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = var3.Platform;
    var7 = new Array(1);
    var3 = -1;
    var7[0] = var3;
    var _closure1_slot0 = var7;
    var6 = [1];
    var _closure1_slot1 = var6;
    var5 = [0.5];
    var _closure1_slot2 = var5;
    var4 = [0.5, 1];
    var _closure1_slot3 = var4;
    var2.SHEET_FIT_TO_CONTENTS = var7;
    var2.SHEET_COMPAT_LARGE = var6;
    var2.SHEET_COMPAT_MEDIUM = var5;
    var2.SHEET_COMPAT_ALL = var4;
    var2.SHEET_DIMMED_ALWAYS = var3;
    var3 = function arg0() {
        _fun37218: for (var _fun37218_ip = 0;;) switch (_fun37218_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.length;
                var2 = 1;
                var0 = var2 < var0;
                var1 = var2;
                if (!var0) {
                    _fun37218_ip = 49;
                    continue _fun37218
                }
            case 21:
                var0 = var1 - var2;
                var4 = var3[var0];
                var0 = var3[var1];
                if (!(!(var4 > var0))) {
                    _fun37218_ip = 53;
                    continue _fun37218
                }
            case 37:
                var1 = var1 + 1;
                var0 = var3.length;
                if (var1 < var0) {
                    _fun37218_ip = 21;
                    continue _fun37218
                }
            case 49:
                var0 = undefined;
                return var0;
            case 53:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = '[RNScreens] The detent array is not sorted in ascending order!';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertDetentsArrayIsSorted = var3;
    var3 = function arg0() {
        _fun37219: for (var _fun37219_ip = 0;;) switch (_fun37219_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var5);
                if (var0) {
                    _fun37219_ip = 103;
                    continue _fun37219
                }
            case 24:
                var0 = 'fitToContents';
                if (!(var0 !== var5)) {
                    _fun37219_ip = 94;
                    continue _fun37219
                }
            case 34:
                var0 = 'large';
                if (!(var0 !== var5)) {
                    _fun37219_ip = 85;
                    continue _fun37219
                }
            case 42:
                var0 = 'medium';
                if (!(var0 !== var5)) {
                    _fun37219_ip = 76;
                    continue _fun37219
                }
            case 50:
                var0 = 'all';
                if (!(var0 !== var5)) {
                    _fun37219_ip = 67;
                    continue _fun37219
                }
            case 58:
                var0 = _closure1_slot1;
                _fun37219_ip = 74;
                continue _fun37219;
            case 67:
                var0 = _closure1_slot3;
            case 74:
                _fun37219_ip = 83;
                continue _fun37219;
            case 76:
                var0 = _closure1_slot2;
            case 83:
                _fun37219_ip = 92;
                continue _fun37219;
            case 85:
                var0 = _closure1_slot1;
            case 92:
                _fun37219_ip = 101;
                continue _fun37219;
            case 94:
                var0 = _closure1_slot0;
            case 101:
                _fun37219_ip = 134;
                continue _fun37219;
            case 103:
                var2 = var5.length;
                var4 = 3;
                var1 = var5;
                if (!(var2 > var4)) {
                    _fun37219_ip = 131;
                    continue _fun37219
                }
            case 118:
                var3 = var5.slice;
                var2 = 0;
                var1 = var3.bind(var5)(var2, var4);
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var2.resolveSheetAllowedDetents = var3;
    var3 = function arg0, arg1() {
        _fun37220: for (var _fun37220_ip = 0;;) switch (_fun37220_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var1 = 'number';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun37220_ip = 88;
                    continue _fun37220
                }
            case 17:
                var1 = 'last';
                var0 = var5;
                if (!(var1 !== var2)) {
                    _fun37220_ip = 86;
                    continue _fun37220
                }
            case 28:
                var4 = -1;
                var3 = 'none';
                var1 = var4;
                if (!(var3 !== var2)) {
                    _fun37220_ip = 83;
                    continue _fun37220
                }
            case 45:
                var3 = 'all';
                var1 = var4;
                if (!(var3 !== var2)) {
                    _fun37220_ip = 83;
                    continue _fun37220
                }
            case 56:
                var3 = 1;
                var6 = 'large';
                if (!(var6 !== var2)) {
                    _fun37220_ip = 80;
                    continue _fun37220
                }
            case 67:
                var6 = 'medium';
                if (!(var6 === var2)) {
                    _fun37220_ip = 77;
                    continue _fun37220
                }
            case 75:
                var4 = 0;
            case 77:
                var3 = var4;
            case 80:
                var1 = var3;
            case 83:
                var0 = var1;
            case 86:
                _fun37220_ip = 119;
                continue _fun37220;
            case 88:
                var4 = _closure1_slot4;
                var3 = undefined;
                var1 = -1;
                var3 = var4.bind(var3)(var2, var1, var5);
                if (!var3) {
                    _fun37220_ip = 116;
                    continue _fun37220
                }
            case 113:
                var1 = var2;
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.resolveSheetLargestUndimmedDetent = var3;
    var1 = function arg0, arg1() {
        _fun37221: for (var _fun37221_ip = 0;;) switch (_fun37221_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = 'last';
                var1 = var4;
                if (!(var0 !== var2)) {
                    _fun37221_ip = 28;
                    continue _fun37221
                }
            case 17:
                var0 = null;
                var1 = var2;
                if (!(var0 == var1)) {
                    _fun37221_ip = 28;
                    continue _fun37221
                }
            case 26:
                var1 = 0;
            case 28:
                var3 = _closure1_slot4;
                var2 = undefined;
                var0 = 0;
                var2 = var3.bind(var2)(var1, var0, var4);
                if (!var2) {
                    _fun37221_ip = 52;
                    continue _fun37221
                }
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var2.resolveSheetInitialDetentIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);