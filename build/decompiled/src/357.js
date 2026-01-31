// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0, arg1() {
        var1 = 3;
        var0 = arg1;
        var2 = var1 * var0;
        var0 = arg0;
        var1 = var1 * var0;
        var0 = 1;
        var0 = var0 - var2;
        var0 = var0 + var1;
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        var1 = 3;
        var0 = arg1;
        var1 = var1 * var0;
        var2 = 6;
        var0 = arg0;
        var0 = var2 * var0;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        var1 = 3;
        var0 = arg0;
        var0 = var1 * var0;
        return var0;
    };
    var _closure1_slot3 = var2;
    var2 = function arg0, arg1, arg2() {
        var1 = arg0;
        var4 = arg1;
        var6 = arg2;
        var2 = _closure1_slot1;
        var3 = undefined;
        var2 = var2.bind(var3)(var4, var6);
        var5 = var2 * var1;
        var2 = _closure1_slot2;
        var2 = var2.bind(var3)(var4, var6);
        var2 = var5 + var2;
        var2 = var2 * var1;
        var0 = _closure1_slot3;
        var0 = var0.bind(var3)(var4);
        var0 = var2 + var0;
        var0 = var0 * var1;
        return var0;
    };
    var _closure1_slot4 = var2;
    var2 = function arg0, arg1, arg2() {
        var5 = arg0;
        var4 = arg1;
        var6 = arg2;
        var0 = _closure1_slot1;
        var3 = undefined;
        var2 = var0.bind(var3)(var4, var6);
        var0 = 3;
        var0 = var0 * var2;
        var0 = var0 * var5;
        var2 = var0 * var5;
        var0 = _closure1_slot2;
        var6 = var0.bind(var3)(var4, var6);
        var0 = 2;
        var0 = var0 * var6;
        var0 = var0 * var5;
        var1 = _closure1_slot3;
        var1 = var1.bind(var3)(var4);
        var0 = var2 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var _closure1_slot5 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.Float32Array;
    var3 = 'function';
    var2 = typeof var2;
    var2 = var3 === var2;
    var _closure1_slot0 = var2;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun5280: for (var _fun5280_ip = 0;;) switch (_fun5280_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var5 = arg2;
                var1 = arg3;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var8;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var1;
                var2 = function arg0() {
                    _fun5281: for (var _fun5281_ip = 0;;) switch (_fun5281_ip) {
                        case 0:
                            var10 = arg0;
                            var1 = _closure2_slot4;
                            var0 = 1;
                            var1 = var1[var0];
                            var4 = var1 <= var10;
                            var9 = 0;
                            var3 = 0.1;
                            var15 = 10;
                            var6 = 0;
                            var5 = var0;
                            var14 = 0;
                            var1 = var5;
                            if (!var4) {
                                _fun5281_ip = 90;
                                continue _fun5281
                            }
                        case 49:
                            var8 = var6 + var3;
                            var7 = var5 + 1;
                            var14 = var8;
                            var1 = var7;
                            if (!(var15 !== var7)) {
                                _fun5281_ip = 90;
                                continue _fun5281
                            }
                        case 66:
                            var4 = _closure2_slot4;
                            var4 = var4[var7];
                            var6 = var8;
                            var5 = var7;
                            var14 = var6;
                            var1 = var5;
                            if (var4 <= var10) {
                                _fun5281_ip = 49;
                                continue _fun5281
                            }
                        case 90:
                            var5 = var1 - 1;
                            var1 = _closure2_slot4;
                            var1 = var1[var5];
                            var1 = var10 - var1;
                            var4 = _closure2_slot4;
                            var0 = var5 + var0;
                            var4 = var4[var0];
                            var0 = _closure2_slot4;
                            var0 = var0[var5];
                            var0 = var4 - var0;
                            var0 = var1 / var0;
                            var0 = var0 * var3;
                            var1 = var14 + var0;
                            var5 = _closure1_slot5;
                            var4 = _closure2_slot0;
                            var0 = _closure2_slot2;
                            var7 = undefined;
                            var4 = var5.bind(var7)(var1, var4, var0);
                            var0 = 0.001;
                            if (!(!(var4 >= var0))) {
                                _fun5281_ip = 294;
                                continue _fun5281
                            }
                        case 179:
                            var0 = var1;
                            if (!(var9 !== var4)) {
                                _fun5281_ip = 292;
                                continue _fun5281
                            }
                        case 186:
                            var13 = var14 + var3;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot2;
                            var6 = global;
                            var5 = 1e-07;
                            var4 = 2;
                            var3 = 0;
                        case 215:
                            var17 = _closure1_slot4;
                            var16 = var13 - var14;
                            var16 = var16 / var4;
                            var16 = var14 + var16;
                            var17 = var17.bind(var7)(var16, var12, var11);
                            var20 = var17 - var10;
                            var17 = var16;
                            if (!(var20 > var9)) {
                                _fun5281_ip = 255;
                                continue _fun5281
                            }
                        case 249:
                            var17 = var14;
                            var13 = var16;
                        case 255:
                            var19 = var6.Math;
                            var18 = var19.abs;
                            var18 = var18.bind(var19)(var20);
                            var0 = var16;
                            if (!(var18 > var5)) {
                                _fun5281_ip = 292;
                                continue _fun5281
                            }
                        case 279:
                            var3 = var3 + 1;
                            var14 = var17;
                            var0 = var16;
                            if (var3 < var15) {
                                _fun5281_ip = 215;
                                continue _fun5281
                            }
                        case 292:
                            _fun5281_ip = 367;
                            continue _fun5281;
                        case 294:
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var4 = 4;
                            var3 = var1;
                            var2 = 0;
                        case 310:
                            var1 = _closure1_slot5;
                            var13 = var1.bind(var7)(var3, var6, var5);
                            var12 = var3;
                            var1 = var12;
                            if (!(var9 !== var13)) {
                                _fun5281_ip = 364;
                                continue _fun5281
                            }
                        case 331:
                            var11 = _closure1_slot4;
                            var11 = var11.bind(var7)(var12, var6, var5);
                            var11 = var11 - var10;
                            var11 = var11 / var13;
                            var3 = var12 - var11;
                            var2 = var2 + 1;
                            var1 = var3;
                            if (var2 < var4) {
                                _fun5281_ip = 310;
                                continue _fun5281
                            }
                        case 364:
                            var0 = var1;
                        case 367:
                            return var0;
                    }
                };
                var _closure2_slot5 = var2;
                var7 = 0;
                if (!(var6 >= var7)) {
                    _fun5280_ip = 60;
                    continue _fun5280
                }
            case 45:
                var2 = 1;
                if (!(var6 <= var2)) {
                    _fun5280_ip = 60;
                    continue _fun5280
                }
            case 52:
                if (!(var5 >= var7)) {
                    _fun5280_ip = 60;
                    continue _fun5280
                }
            case 56:
                if (!(!(var5 <= var2))) {
                    _fun5280_ip = 96;
                    continue _fun5280
                }
            case 60:
                var2 = global;
                var4 = var2.Error;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = 'bezier x values must be in [0, 1] range';
                var14 = var3;
                var2 = new var14[var4](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 96:
                var3 = _closure1_slot0;
                var2 = global;
                if (var3) {
                    _fun5280_ip = 139;
                    continue _fun5280
                }
            case 108:
                var10 = var2.Array;
                var3 = var10.prototype;
                var9 = Object.create(var3, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = 11;
                var14 = var9;
                var3 = new var14[var10](var13, var12);
                var3 = var3 instanceof Object ? var3 : var9;
                _fun5280_ip = 168;
                continue _fun5280;
            case 139:
                var10 = var2.Float32Array;
                var2 = var10.prototype;
                var9 = Object.create(var2, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = 11;
                var14 = var9;
                var2 = new var14[var10](var13, var12);
                var3 = var2 instanceof Object ? var2 : var9;
            case 168:
                var _closure2_slot4 = var3;
                var2 = 0;
                if (!(var6 === var8)) {
                    _fun5280_ip = 184;
                    continue _fun5280
                }
            case 178:
                var2 = 0;
                if (!(var5 !== var1)) {
                    _fun5280_ip = 225;
                    continue _fun5280
                }
            case 184:
                var8 = _closure1_slot4;
                var1 = 0.1;
                var7 = var2 * var1;
                var1 = undefined;
                var1 = var8.bind(var1)(var7, var6, var5);
                var3[var2] = var1;
                var2 = var2 + 1;
                var1 = 11;
                if (var2 < var1) {
                    _fun5280_ip = 184;
                    continue _fun5280
                }
            case 225:
                var0 = function arg0() {
                    _fun5282: for (var _fun5282_ip = 0;;) switch (_fun5282_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            if (!(var1 === var0)) {
                                _fun5282_ip = 33;
                                continue _fun5282
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = var5;
                            if (!(var2 !== var1)) {
                                _fun5282_ip = 85;
                                continue _fun5282
                            }
                        case 33:
                            var1 = 0;
                            if (!(var1 !== var5)) {
                                _fun5282_ip = 82;
                                continue _fun5282
                            }
                        case 39:
                            var2 = 1;
                            if (!(var2 !== var5)) {
                                _fun5282_ip = 79;
                                continue _fun5282
                            }
                        case 46:
                            var7 = _closure1_slot4;
                            var4 = _closure2_slot5;
                            var6 = undefined;
                            var5 = var4.bind(var6)(var5);
                            var4 = _closure2_slot1;
                            var3 = _closure2_slot3;
                            var2 = var7.bind(var6)(var5, var4, var3);
                        case 79:
                            var1 = var2;
                        case 82:
                            var0 = var1;
                        case 85:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);