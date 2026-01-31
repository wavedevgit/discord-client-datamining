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
    var3 = function arg0, arg1() {
        _fun54567: for (var _fun54567_ip = 0;;) switch (_fun54567_ip) {
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
                    _fun54567_ip = 46;
                    continue _fun54567
                }
            case 43:
                var3 = var8;
            case 46:
                var _closure2_slot0 = var3;
                var8 = undefined;
                if (var7) {
                    _fun54567_ip = 80;
                    continue _fun54567
                }
            case 55:
                var10 = var9().value;
                var9 = var6;
                var9 = var9 === var5;
                var8 = undefined;
                var7 = var9;
                if (var9) {
                    _fun54567_ip = 80;
                    continue _fun54567
                }
            case 74:
                var8 = var10;
                var7 = var9;
            case 80:
                var _closure2_slot1 = var8;
                if (var7) {
                    _fun54567_ip = 90;
                    continue _fun54567
                }
            case 87:
                var6.return();
            case 90:
                if (!(var4 === var5)) {
                    _fun54567_ip = 97;
                    continue _fun54567
                }
            case 94:
                var4 = 1;
            case 97:
                var _closure2_slot2 = var5;
                var2 = var0 * var2;
                _closure2_slot2 = var2;
                var0 = 0;
                if (!(!(var2 <= var0))) {
                    _fun54567_ip = 153;
                    continue _fun54567
                }
            case 115:
                var2 = var3.reduce;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun54568: for (var _fun54568_ip = 0;;) switch (_fun54568_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = arg1;
                            var1 = arg2;
                            var3 = _closure2_slot2;
                            if (!(!(var3 > var6))) {
                                _fun54568_ip = 38;
                                continue _fun54568
                            }
                        case 20:
                            var3 = _closure2_slot2;
                            if (!(var3 === var6)) {
                                _fun54568_ip = 36;
                                continue _fun54568
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
                                _fun54568_ip = 120;
                                continue _fun54568
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
        _fun54569: for (var _fun54569_ip = 0;;) switch (_fun54569_ip) {
            case 0:
                var0 = arg0;
                var1 = var0[Symbol.iterator];
                var0 = var1().next;
                var3 = var0().value;
                var2 = var1;
                var0 = undefined;
                var2 = var2 === var0;
                if (var2) {
                    _fun54569_ip = 25;
                    continue _fun54569
                }
            case 22:
                var0 = var3;
            case 25:
                if (var2) {
                    _fun54569_ip = 31;
                    continue _fun54569
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
        _fun54570: for (var _fun54570_ip = 0;;) switch (_fun54570_ip) {
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
                    _fun54570_ip = 49;
                    continue _fun54570
                }
            case 24:
                var4 = var3().value;
                var3 = var1;
                var3 = var3 === var5;
                var0 = undefined;
                var2 = var3;
                if (var3) {
                    _fun54570_ip = 49;
                    continue _fun54570
                }
            case 43:
                var0 = var4;
                var2 = var3;
            case 49:
                if (var2) {
                    _fun54570_ip = 55;
                    continue _fun54570
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
        _fun54571: for (var _fun54571_ip = 0;;) switch (_fun54571_ip) {
            case 0:
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun54571_ip = 22;
                    continue _fun54571
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
        _fun54573: for (var _fun54573_ip = 0;;) switch (_fun54573_ip) {
            case 0:
                var1 = arg0;
                var3 = 1;
                if (!(var3 !== var1)) {
                    _fun54573_ip = 269;
                    continue _fun54573
                }
            case 13:
                var0 = 2;
                if (!(var0 !== var1)) {
                    _fun54573_ip = 221;
                    continue _fun54573
                }
            case 23:
                var0 = 3;
                if (!(var0 !== var1)) {
                    _fun54573_ip = 221;
                    continue _fun54573
                }
            case 33:
                var0 = 4;
                if (!(var0 !== var1)) {
                    _fun54573_ip = 166;
                    continue _fun54573
                }
            case 43:
                var0 = 5;
                if (!(var0 !== var1)) {
                    _fun54573_ip = 166;
                    continue _fun54573
                }
            case 50:
                var0 = 6;
                if (!(var0 !== var1)) {
                    _fun54573_ip = 111;
                    continue _fun54573
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
                _fun54573_ip = 164;
                continue _fun54573;
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
                _fun54573_ip = 219;
                continue _fun54573;
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
                _fun54573_ip = 267;
                continue _fun54573;
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
                _fun54573_ip = 315;
                continue _fun54573;
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
    var1 = function arg0() {
        _fun54574: for (var _fun54574_ip = 0;;) switch (_fun54574_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.value;
                var2 = var0.multiplier;
                var0 = null;
                var3 = var0 != var2;
                var0 = 1;
                if (!var3) {
                    _fun54574_ip = 29;
                    continue _fun54574
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6493, 808, 2]);