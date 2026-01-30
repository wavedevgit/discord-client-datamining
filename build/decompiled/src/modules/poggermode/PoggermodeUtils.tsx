// modules/poggermode/PoggermodeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.ShakeLevel;
    var _closure1_slot2 = var6;
    var6 = var3.SHAKE_STEPS;
    var _closure1_slot3 = var6;
    var3 = var3.SHAKE_STEP_DIVIDER;
    var _closure1_slot4 = var3;
    var3 = function(arg0, arg1) { // Original name: getStepwiseValue, environment: var1
        _fun54550: for (var _fun54550_ip = 0;;) switch (_fun54550_ip) {
            case 0:
                var0 = arg0;
                var4 = arguments[2];
                var2 = var0.multiplier;
                var0 = var0.value;
                var9 = arg1;
                var6 = var9[Symbol.iterator];
                var9 = var6().next;
                var8 = var9().value;
                var3 = var6;
                var5 = undefined;
                var7 = var3 === var5;
                var3 = undefined;
                if (var7) {
                    _fun54550_ip = 46;
                    continue _fun54550
                }
            case 43:
                var3 = var8;
            case 46:
                var _closure2_slot0 = var3;
                var8 = undefined;
                if (var7) {
                    _fun54550_ip = 80;
                    continue _fun54550
                }
            case 55:
                var10 = var9().value;
                var9 = var6;
                var9 = var9 === var5;
                var8 = undefined;
                var7 = var9;
                if (var9) {
                    _fun54550_ip = 80;
                    continue _fun54550
                }
            case 74:
                var8 = var10;
                var7 = var9;
            case 80:
                var _closure2_slot1 = var8;
                if (var7) {
                    _fun54550_ip = 90;
                    continue _fun54550
                }
            case 87:
                var6.return();
            case 90:
                if (!(var4 === var5)) {
                    _fun54550_ip = 97;
                    continue _fun54550
                }
            case 94:
                var4 = 1;
            case 97:
                var _closure2_slot2 = var5;
                var2 = var0 * var2;
                _closure2_slot2 = var2;
                var0 = 0;
                if (!(!(var2 <= var0))) {
                    _fun54550_ip = 153;
                    continue _fun54550
                }
            case 115:
                var2 = var3.reduce;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun54551: for (var _fun54551_ip = 0;;) switch (_fun54551_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = arg1;
                            var1 = arg2;
                            var3 = _closure2_slot2;
                            if (!(!(var3 > var6))) {
                                _fun54551_ip = 38;
                                continue _fun54551
                            }
                        case 20:
                            var3 = _closure2_slot2;
                            if (!(var3 === var6)) {
                                _fun54551_ip = 36;
                                continue _fun54551
                            }
                        case 28:
                            var3 = _closure2_slot1;
                            var2 = var3[var1];
                        case 36:
                            return var2;
                        case 38:
                            var2 = _closure2_slot1;
                            var3 = var2[var1];
                            var2 = 1;
                            var5 = var1 + var2;
                            var4 = _closure2_slot0;
                            var4 = var4.length;
                            if (!(var5 !== var4)) {
                                _fun54551_ip = 120;
                                continue _fun54551
                            }
                        case 66:
                            var5 = _closure2_slot0;
                            var4 = var1 + var2;
                            var4 = var5[var4];
                            var5 = _closure2_slot1;
                            var2 = var1 + var2;
                            var2 = var5[var2];
                            var5 = _closure2_slot2;
                            var5 = var5 - var6;
                            var4 = var4 - var6;
                            var4 = var5 / var4;
                            var2 = var2 - var3;
                            var2 = var4 * var2;
                            var2 = var2 + var3;
                            return var2;
                        case 120:
                            var0 = _closure2_slot1;
                            var0 = var0[var1];
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1, var0);
                var1 = global;
                var2 = var1.Math;
                var1 = var2.min;
                var1 = var1.bind(var2)(var4, var3);
                return var1;
            case 153:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var7 = new Array(7);
    var3 = [1, 0.001];
    var7[0] = var3;
    var3 = [25, 0.3];
    var7[1] = var3;
    var3 = [100, 0.5];
    var7[2] = var3;
    var3 = [250, 0.8];
    var7[3] = var3;
    var3 = [500, 0.9];
    var7[4] = var3;
    var3 = [2500, 0.95];
    var7[5] = var3;
    var3 = [9001, 1];
    var7[6] = var3;
    var6 = var7.map;
    var3 = function(arg0) { // Environment: var1
        _fun54552: for (var _fun54552_ip = 0;;) switch (_fun54552_ip) {
            case 0:
                var0 = arg0;
                var1 = var0[Symbol.iterator];
                var0 = var1().next;
                var3 = var0().value;
                var2 = var1;
                var0 = undefined;
                var2 = var2 === var0;
                if (var2) {
                    _fun54552_ip = 25;
                    continue _fun54552
                }
            case 22:
                var0 = var3;
            case 25:
                if (var2) {
                    _fun54552_ip = 31;
                    continue _fun54552
                }
            case 28:
                var1.return();
            case 31:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var6 = var7.map;
    var3 = function(arg0) { // Environment: var1
        _fun54553: for (var _fun54553_ip = 0;;) switch (_fun54553_ip) {
            case 0:
                var3 = arg0;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var0 = var3().value;
                var0 = var1;
                var5 = undefined;
                var2 = var0 === var5;
                var0 = undefined;
                if (var2) {
                    _fun54553_ip = 49;
                    continue _fun54553
                }
            case 24:
                var4 = var3().value;
                var3 = var1;
                var3 = var3 === var5;
                var0 = undefined;
                var2 = var3;
                if (var3) {
                    _fun54553_ip = 49;
                    continue _fun54553
                }
            case 43:
                var0 = var4;
                var2 = var3;
            case 49:
                if (var2) {
                    _fun54553_ip = 55;
                    continue _fun54553
                }
            case 52:
                var1.return();
            case 55:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/poggermode/PoggermodeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun54554: for (var _fun54554_ip = 0;;) switch (_fun54554_ip) {
            case 0:
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun54554_ip = 22;
                    continue _fun54554
                }
            case 9:
                var0 = _closure1_slot2;
                var1 = var0.LEVEL_3;
            case 22:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var5 = var2[var1];
                var2 = new Array(2);
                var2[0] = var5;
                var0 = _closure1_slot4;
                var0 = var0[var1];
                var2[1] = var0;
                var1 = arg0;
                var0 = 100000;
                var0 = var3.bind(var4)(var1, var2, var0);
                return var0;
        }
    };
    var2.getComboShakeIntensity = var3;
    var3 = function(arg0) { // Environment: var1
        var4 = _closure1_slot5;
        var1 = _closure1_slot6;
        var3 = new Array(2);
        var3[0] = var1;
        var0 = _closure1_slot7;
        var3[1] = var0;
        var2 = undefined;
        var1 = arg0;
        var0 = 1;
        var0 = var4.bind(var2)(var1, var3, var0);
        return var0;
    };
    var2.getComboPercentage = var3;
    var3 = function(arg0) { // Environment: var1
        _fun54556: for (var _fun54556_ip = 0;;) switch (_fun54556_ip) {
            case 0:
                var1 = arg0;
                var3 = 1;
                if (!(var3 !== var1)) {
                    _fun54556_ip = 269;
                    continue _fun54556
                }
            case 13:
                var0 = 2;
                if (!(var0 !== var1)) {
                    _fun54556_ip = 221;
                    continue _fun54556
                }
            case 23:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun54556_ip = 221;
                    continue _fun54556
                }
            case 33:
                var0 = 4;
                if (!(var0 !== var1)) {
                    _fun54556_ip = 166;
                    continue _fun54556
                }
            case 43:
                var0 = 5;
                if (!(var0 !== var1)) {
                    _fun54556_ip = 166;
                    continue _fun54556
                }
            case 50:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun54556_ip = 111;
                    continue _fun54556
                }
            case 57:
                var0 = {};
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var3];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.unsafe_getRawColor;
                var1 = 'ORANGE_345';
                var1 = var2.bind(var4)(var1);
                var0.color = var1;
                var1 = true;
                var0.flair = var1;
                _fun54556_ip = 164;
                continue _fun54556;
            case 111:
                var1 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.unsafe_getRawColor;
                var2 = 'RED_400';
                var2 = var4.bind(var5)(var2);
                var1.color = var2;
                var2 = true;
                var1.square = var2;
                var0 = var1;
            case 164:
                _fun54556_ip = 219;
                continue _fun54556;
            case 166:
                var1 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.unsafe_getRawColor;
                var2 = 'YELLOW_300';
                var2 = var4.bind(var5)(var2);
                var1.color = var2;
                var2 = true;
                var1.square = var2;
                var0 = var1;
            case 219:
                _fun54556_ip = 267;
                continue _fun54556;
            case 221:
                var1 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.unsafe_getRawColor;
                var2 = 'GREEN_360';
                var2 = var4.bind(var5)(var2);
                var1.color = var2;
                var0 = var1;
            case 267:
                _fun54556_ip = 315;
                continue _fun54556;
            case 269:
                var1 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var3];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.unsafe_getRawColor;
                var2 = 'BRAND_500';
                var2 = var3.bind(var4)(var2);
                var1.color = var2;
                var0 = var1;
            case 315:
                return var0;
        }
    };
    var2.getComboStyles = var3;
    var1 = function(arg0) { // Original name: getComboScore, environment: var1
        _fun54557: for (var _fun54557_ip = 0;;) switch (_fun54557_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.value;
                var2 = var0.multiplier;
                var0 = null;
                var3 = var0 != var2;
                var0 = 1;
                if (!var3) {
                    _fun54557_ip = 29;
                    continue _fun54557
                }
            case 26:
                var0 = var2;
            case 29:
                var0 = var1 * var0;
                return var0;
        }
    };
    var2.getComboScore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6492, 808, 2]);