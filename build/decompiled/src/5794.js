// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51255: for (var _fun51255_ip = 0;;) switch (_fun51255_ip) {
        case 0:
            var12 = require;
            var4 = dependencyMap;
            var8 = var12;
            var _closure1_slot0 = var12;
            var9 = var4;
            var _closure1_slot1 = var4;
            var0 = undefined;
            var10 = undefined;
            var2 = undefined;
            var3 = undefined;
            var5 = 0;
            var5 = var4[var5];
            var5 = var12.bind(var0)(var5);
            var _closure1_slot2 = var5;
            var5 = {};
            var10 = var5;
            var _closure1_slot3 = var5;
            var5 = global;
            var11 = var5.Object;
            var7 = var11.keys;
            var6 = 1;
            var4 = var4[var6];
            var4 = var12.bind(var0)(var4);
            var11 = var7.bind(var11)(var4);
            var4 = var11;
            var7 = var4[Symbol.iterator];
            var4 = var7().next;
        case 90:
            var13 = var4().value;
            var11 = var7;
            if (!(var11 !== var0)) {
                _fun51255_ip = 136;
                continue _fun51255
            }
        case 101: // try_start_0
            var12 = var10;
            var14 = var8;
            var11 = var9;
            var11 = var11[var6];
            var11 = var14.bind(var0)(var11);
            var11 = var11[var13];
            var12[var11] = var13;
        case 127: // try_end0
            _fun51255_ip = 90;
            continue _fun51255;
        case 129: // catch_target0
            CatchBlockStart(arg_register = 4);
            var7.return();
            throw var4;
        case 136:
            var7 = {};
            var8 = 3;
            var4 = {
                'channels': 3,
                'labels': 'rgb'
            };
            var7.rgb = var4;
            var4 = {
                'channels': 3,
                'labels': 'hsl'
            };
            var7.hsl = var4;
            var4 = {
                'channels': 3,
                'labels': 'hsv'
            };
            var7.hsv = var4;
            var4 = {
                'channels': 3,
                'labels': 'hwb'
            };
            var7.hwb = var4;
            var4 = {
                'channels': 4,
                'labels': 'cmyk'
            };
            var7.cmyk = var4;
            var4 = {
                'channels': 3,
                'labels': 'xyz'
            };
            var7.xyz = var4;
            var4 = {
                'channels': 3,
                'labels': 'lab'
            };
            var7.lab = var4;
            var4 = {
                'channels': 3,
                'labels': 'lch'
            };
            var7.lch = var4;
            var4 = {};
            var4.channels = var6;
            var9 = ['hex'];
            var4.labels = var9;
            var7.hex = var4;
            var4 = {};
            var4.channels = var6;
            var9 = ['keyword'];
            var4.labels = var9;
            var7.keyword = var4;
            var4 = {};
            var4.channels = var6;
            var9 = ['ansi16'];
            var4.labels = var9;
            var7.ansi16 = var4;
            var4 = {};
            var4.channels = var6;
            var9 = ['ansi256'];
            var4.labels = var9;
            var7.ansi256 = var4;
            var4 = {};
            var4.channels = var8;
            var9 = ['h', 'c', 'g'];
            var4.labels = var9;
            var7.hcg = var4;
            var4 = {};
            var4.channels = var8;
            var8 = ['var16', 'g16', 'b16'];
            var4.labels = var8;
            var7.apple = var4;
            var4 = {};
            var4.channels = var6;
            var6 = ['gray'];
            var4.labels = var6;
            var7.gray = var4;
            var2 = var7;
            var _closure1_slot4 = var7;
            var4 = module;
            var4.exports = var7;
            var6 = var5.Object;
            var4 = var6.keys;
            var6 = var4.bind(var6)(var7);
            var8 = var6;
            var4 = var8[Symbol.iterator];
            var8 = var4().next;
            var7 = 'channels';
            var6 = 'labels';
        case 528:
            var10 = var8().value;
            var9 = var4;
            if (!(var9 !== var0)) {
                _fun51255_ip = 842;
                continue _fun51255
            }
        case 542: // try_start_1
            var3 = var10;
            var9 = var2;
            var9 = var9[var10];
            var9 = var7 in var9;
            if (var9) {
                _fun51255_ip = 600;
                continue _fun51255
            }
        case 559:
            var11 = var5.Error;
            var10 = var3;
            var9 = 'missing channels property: ';
            var19 = var9 + var10;
            var10 = var11.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var11
                }
            });
            var20 = var10;
            var9 = new var20[var11](var19, var18);
            var9 = var9 instanceof Object ? var9 : var10;
            throw var9;
        case 600:
            var10 = var2;
            var9 = var3;
            var9 = var10[var9];
            var9 = var6 in var9;
            if (var9) {
                _fun51255_ip = 658;
                continue _fun51255
            }
        case 617:
            var11 = var5.Error;
            var10 = var3;
            var9 = 'missing channel labels property: ';
            var19 = var9 + var10;
            var10 = var11.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var11
                }
            });
            var20 = var10;
            var9 = new var20[var11](var19, var18);
            var9 = var9 instanceof Object ? var9 : var10;
            throw var9;
        case 658:
            var11 = var2;
            var9 = var3;
            var10 = var11[var9];
            var10 = var10.labels;
            var10 = var10.length;
            var9 = var11[var9];
            var9 = var9.channels;
            if (!(var10 === var9)) {
                _fun51255_ip = 794;
                continue _fun51255
            }
        case 693:
            var10 = var2;
            var9 = var3;
            var11 = var10[var9];
            var16 = var11.channels;
            var13 = var11.labels;
            var11 = var10[var9];
            var11 = delete var11.channels;
            var11 = var10[var9];
            var11 = delete var11.labels;
            var15 = var5.Object;
            var14 = var15.defineProperty;
            var12 = var10[var9];
            var11 = {};
            var11.value = var16;
            var11 = var14.bind(var15)(var12, var7, var11);
            var12 = var5.Object;
            var11 = var12.defineProperty;
            var10 = var10[var9];
            var9 = {};
            var9.value = var13;
            var9 = var11.bind(var12)(var10, var6, var9);
        case 789: // try_end1
            _fun51255_ip = 528;
            continue _fun51255;
        case 794: // try_start_2
            var6 = var5.Error;
            var5 = var3;
            var3 = 'channel and label counts mismatch: ';
            var19 = var3 + var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var20 = var5;
            var3 = new var20[var6](var19, var18);
            var3 = var3 instanceof Object ? var3 : var5;
            throw var3;
        case 835: // try_end2 // catch_target1 // catch_target2
            CatchBlockStart(arg_register = 3);
            var4.return();
            throw var3;
        case 842:
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51256: for (var _fun51256_ip = 0;;) switch (_fun51256_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = 0;
                        var1 = var0[var3];
                        var2 = 255;
                        var10 = var1 / var2;
                        var1 = 1;
                        var1 = var0[var1];
                        var9 = var1 / var2;
                        var1 = 2;
                        var0 = var0[var1];
                        var8 = var0 / var2;
                        var0 = global;
                        var4 = var0.Math;
                        var2 = var4.min;
                        var6 = var2.bind(var4)(var10, var9, var8);
                        var4 = var0.Math;
                        var2 = var4.max;
                        var4 = var2.bind(var4)(var10, var9, var8);
                        var5 = var4 - var6;
                        var7 = var4 === var6;
                        var2 = 0;
                        if (var7) {
                            _fun51256_ip = 142;
                            continue _fun51256
                        }
                    case 89:
                        if (!(var10 !== var4)) {
                            _fun51256_ip = 134;
                            continue _fun51256
                        }
                    case 93:
                        if (!(var9 !== var4)) {
                            _fun51256_ip = 120;
                            continue _fun51256
                        }
                    case 97:
                        var2 = undefined;
                        if (!(var8 === var4)) {
                            _fun51256_ip = 142;
                            continue _fun51256
                        }
                    case 103:
                        var11 = var10 - var9;
                        var12 = var11 / var5;
                        var11 = 4;
                        var2 = var11 + var12;
                        _fun51256_ip = 142;
                        continue _fun51256;
                    case 120:
                        var10 = var8 - var10;
                        var10 = var10 / var5;
                        var2 = var1 + var10;
                        _fun51256_ip = 142;
                        continue _fun51256;
                    case 134:
                        var8 = var9 - var8;
                        var2 = var8 / var5;
                    case 142:
                        var9 = var0.Math;
                        var8 = var9.min;
                        var0 = 60;
                        var0 = var0 * var2;
                        var2 = 360;
                        var0 = var8.bind(var9)(var0, var2);
                        var8 = var0;
                        if (!(var8 < var3)) {
                            _fun51256_ip = 183;
                            continue _fun51256
                        }
                    case 179:
                        var8 = var0 + var2;
                    case 183:
                        var0 = var6 + var4;
                        var2 = var0 / var1;
                        var0 = new Array(3);
                        var0[0] = var8;
                        var3 = 0;
                        if (var7) {
                            _fun51256_ip = 243;
                            continue _fun51256
                        }
                    case 204:
                        var7 = 0.5;
                        if (!(!(var2 <= var7))) {
                            _fun51256_ip = 232;
                            continue _fun51256
                        }
                    case 218:
                        var1 = var1 - var4;
                        var1 = var1 - var6;
                        var1 = var5 / var1;
                        _fun51256_ip = 240;
                        continue _fun51256;
                    case 232:
                        var4 = var4 + var6;
                        var1 = var5 / var4;
                    case 240:
                        var3 = var1;
                    case 243:
                        var1 = 100;
                        var3 = var1 * var3;
                        var0[1] = var3;
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsl = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51257: for (var _fun51257_ip = 0;;) switch (_fun51257_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = 0;
                        var0 = var3[var6];
                        var2 = 255;
                        var12 = var0 / var2;
                        var5 = 1;
                        var0 = var3[var5];
                        var11 = var0 / var2;
                        var0 = 2;
                        var0 = var3[var0];
                        var9 = var0 / var2;
                        var0 = global;
                        var3 = var0.Math;
                        var2 = var3.max;
                        var2 = var2.bind(var3)(var12, var11, var9);
                        var _closure2_slot0 = var2;
                        var3 = var0.Math;
                        var0 = var3.min;
                        var0 = var0.bind(var3)(var12, var11, var9);
                        var0 = var2 - var0;
                        var _closure2_slot1 = var0;
                        var7 = function arg0() {
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var2 = var2 - var1;
                            var1 = 6;
                            var1 = var2 / var1;
                            var0 = _closure2_slot1;
                            var1 = var1 / var0;
                            var0 = 0.5;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var4 = 0;
                        var3 = 0;
                        if (!(var3 !== var0)) {
                            _fun51257_ip = 212;
                            continue _fun51257
                        }
                    case 103:
                        var0 = var0 / var2;
                        var1 = undefined;
                        var10 = var7.bind(var1)(var12);
                        var8 = var7.bind(var1)(var11);
                        var7 = var7.bind(var1)(var9);
                        if (!(var12 !== var2)) {
                            _fun51257_ip = 178;
                            continue _fun51257
                        }
                    case 128:
                        if (!(var11 !== var2)) {
                            _fun51257_ip = 158;
                            continue _fun51257
                        }
                    case 132:
                        var1 = undefined;
                        if (!(var9 === var2)) {
                            _fun51257_ip = 182;
                            continue _fun51257
                        }
                    case 138:
                        var9 = 0.6666666666666666;
                        var9 = var9 + var8;
                        var1 = var9 - var10;
                        _fun51257_ip = 182;
                        continue _fun51257;
                    case 158:
                        var9 = 0.3333333333333333;
                        var9 = var9 + var10;
                        var1 = var9 - var7;
                        _fun51257_ip = 182;
                        continue _fun51257;
                    case 178:
                        var1 = var7 - var8;
                    case 182:
                        if (!(!(var1 < var6))) {
                            _fun51257_ip = 205;
                            continue _fun51257
                        }
                    case 186:
                        var3 = var0;
                        var4 = var1;
                        if (!(var4 > var5)) {
                            _fun51257_ip = 212;
                            continue _fun51257
                        }
                    case 196:
                        var4 = var1 - var5;
                        var3 = var0;
                        _fun51257_ip = 212;
                        continue _fun51257;
                    case 205:
                        var4 = var1 + var5;
                        var3 = var0;
                    case 212:
                        var0 = new Array(3);
                        var1 = 360;
                        var1 = var1 * var4;
                        var0[0] = var1;
                        var1 = 100;
                        var3 = var1 * var3;
                        var0[1] = var3;
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsv = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var1 = 0;
                var7 = var4[var1];
                var3 = 1;
                var10 = var4[var3];
                var0 = 2;
                var9 = var4[var0];
                var0 = _closure1_slot4;
                var2 = var0.rgb;
                var0 = var2.hsl;
                var0 = var0.bind(var2)(var4);
                var1 = var0[var1];
                var0 = new Array(3);
                var0[0] = var1;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.min;
                var6 = var1.Math;
                var2 = var6.min;
                var2 = var2.bind(var6)(var10, var9);
                var2 = var4.bind(var5)(var7, var2);
                var4 = 0.00392156862745098;
                var5 = var4 * var2;
                var2 = 100;
                var5 = var2 * var5;
                var0[1] = var5;
                var6 = var1.Math;
                var5 = var6.max;
                var8 = var1.Math;
                var1 = var8.max;
                var1 = var1.bind(var8)(var10, var9);
                var1 = var5.bind(var6)(var7, var1);
                var1 = var4 * var1;
                var1 = var3 - var1;
                var1 = var2 * var1;
                var0[2] = var1;
                return var0;
            };
            var4.hwb = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51260: for (var _fun51260_ip = 0;;) switch (_fun51260_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = 0;
                        var0 = var5[var4];
                        var2 = 255;
                        var0 = var0 / var2;
                        var3 = 1;
                        var1 = var5[var3];
                        var6 = var1 / var2;
                        var1 = 2;
                        var1 = var5[var1];
                        var5 = var1 / var2;
                        var1 = global;
                        var2 = var1.Math;
                        var1 = var2.min;
                        var0 = var3 - var0;
                        var6 = var3 - var6;
                        var5 = var3 - var5;
                        var2 = var1.bind(var2)(var0, var6, var5);
                        var1 = var0 - var2;
                        var0 = var3 - var2;
                        var7 = var1 / var0;
                        if (var7) {
                            _fun51260_ip = 87;
                            continue _fun51260
                        }
                    case 85:
                        var7 = 0;
                    case 87:
                        var0 = new Array(4);
                        var1 = 100;
                        var7 = var1 * var7;
                        var0[0] = var7;
                        var7 = var6 - var2;
                        var6 = var3 - var2;
                        var6 = var7 / var6;
                        if (var6) {
                            _fun51260_ip = 119;
                            continue _fun51260
                        }
                    case 117:
                        var6 = 0;
                    case 119:
                        var6 = var1 * var6;
                        var0[1] = var6;
                        var5 = var5 - var2;
                        var3 = var3 - var2;
                        var3 = var5 / var3;
                        if (var3) {
                            _fun51260_ip = 144;
                            continue _fun51260
                        }
                    case 142:
                        var3 = 0;
                    case 144:
                        var3 = var1 * var3;
                        var0[2] = var3;
                        var1 = var1 * var2;
                        var0[3] = var1;
                        return var0;
                }
            };
            var4.cmyk = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51261: for (var _fun51261_ip = 0;;) switch (_fun51261_ip) {
                    case 0:
                        var2 = arg0;
                        var9 = var2;
                        var8 = undefined;
                        var1 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        var0 = _closure1_slot3;
                        var0 = var0[var2];
                        if (var0) {
                            _fun51261_ip = 216;
                            continue _fun51261
                        }
                    case 33:
                        var10 = inf;
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.keys;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var6 = 1;
                        var2 = var2[var6];
                        var2 = var5.bind(var8)(var2);
                        var2 = var3.bind(var4)(var2);
                        var5 = var2;
                        var3 = var5[Symbol.iterator];
                        var5 = var3().next;
                        var4 = 0;
                        var2 = 2;
                    case 92:
                        var14 = var5().value;
                        var13 = var3;
                        if (!(var13 !== var8)) {
                            _fun51261_ip = 214;
                            continue _fun51261
                        }
                    case 103: // try_start_0
                        var11 = var14;
                        var15 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var6];
                        var13 = var15.bind(var8)(var13);
                        var13 = var13[var14];
                        var15 = var9;
                        var16 = var15[var4];
                        var14 = var13[var4];
                        var19 = var16 - var14;
                        var18 = var2;
                        var16 = exponentiationOperator(var19, var18);
                        var17 = var15[var6];
                        var14 = var13[var6];
                        var19 = var17 - var14;
                        var14 = exponentiationOperator(var19, var18);
                        var14 = var16 + var14;
                        var15 = var15[var2];
                        var13 = var13[var2];
                        var19 = var15 - var13;
                        var13 = exponentiationOperator(var19, var18);
                        var14 = var14 + var13;
                        var12 = var14;
                        var13 = var10;
                        if (!(var14 < var13)) {
                            _fun51261_ip = 205;
                            continue _fun51261
                        }
                    case 199:
                        var10 = var12;
                        var1 = var11;
                    case 205: // try_end0
                        _fun51261_ip = 92;
                        continue _fun51261;
                    case 207: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                    case 214:
                        return var1;
                    case 216:
                        return var0;
                }
            };
            var4.keyword = var3;
            var4 = var2.keyword;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = arg0;
                var0 = var1[var0];
                return var0;
            };
            var4.rgb = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51263: for (var _fun51263_ip = 0;;) switch (_fun51263_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = 0;
                        var0 = var2[var0];
                        var1 = 255;
                        var3 = var0 / var1;
                        var0 = 1;
                        var0 = var2[var0];
                        var5 = var0 / var1;
                        var0 = 2;
                        var0 = var2[var0];
                        var2 = var0 / var1;
                        var0 = 0.04045;
                        if (!(!(var3 > var0))) {
                            _fun51263_ip = 68;
                            continue _fun51263
                        }
                    case 52:
                        var1 = 12.92;
                        var4 = var3 / var1;
                        _fun51263_ip = 110;
                        continue _fun51263;
                    case 68:
                        var1 = 0.055;
                        var3 = var3 + var1;
                        var1 = 1.055;
                        var9 = var3 / var1;
                        var8 = 2.4;
                        var4 = exponentiationOperator(var9, var8);
                    case 110:
                        var1 = 0.4124;
                        var7 = var1 * var4;
                        if (!(!(var5 > var0))) {
                            _fun51263_ip = 144;
                            continue _fun51263
                        }
                    case 128:
                        var1 = 12.92;
                        var3 = var5 / var1;
                        _fun51263_ip = 186;
                        continue _fun51263;
                    case 144:
                        var1 = 0.055;
                        var5 = var5 + var1;
                        var1 = 1.055;
                        var9 = var5 / var1;
                        var8 = 2.4;
                        var3 = exponentiationOperator(var9, var8);
                    case 186:
                        var1 = 0.3576;
                        var1 = var1 * var3;
                        if (!(!(var2 > var0))) {
                            _fun51263_ip = 220;
                            continue _fun51263
                        }
                    case 204:
                        var0 = 12.92;
                        var5 = var2 / var0;
                        _fun51263_ip = 262;
                        continue _fun51263;
                    case 220:
                        var0 = 0.055;
                        var2 = var2 + var0;
                        var0 = 1.055;
                        var9 = var2 / var0;
                        var8 = 2.4;
                        var5 = exponentiationOperator(var9, var8);
                    case 262:
                        var0 = 0.1805;
                        var6 = var0 * var5;
                        var0 = new Array(3);
                        var2 = 100;
                        var1 = var7 + var1;
                        var1 = var1 + var6;
                        var1 = var2 * var1;
                        var0[0] = var1;
                        var1 = 0.2126;
                        var7 = var1 * var4;
                        var1 = 0.7152;
                        var1 = var1 * var3;
                        var6 = 0.0722;
                        var6 = var6 * var5;
                        var1 = var7 + var1;
                        var1 = var1 + var6;
                        var1 = var2 * var1;
                        var0[1] = var1;
                        var1 = 0.0193;
                        var4 = var1 * var4;
                        var1 = 0.1192;
                        var1 = var1 * var3;
                        var3 = 0.9505;
                        var3 = var3 * var5;
                        var1 = var4 + var1;
                        var1 = var1 + var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.xyz = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51264: for (var _fun51264_ip = 0;;) switch (_fun51264_ip) {
                    case 0:
                        var0 = _closure1_slot4;
                        var2 = var0.rgb;
                        var1 = var2.xyz;
                        var0 = arg0;
                        var2 = var1.bind(var2)(var0);
                        var0 = 0;
                        var5 = var2[var0];
                        var0 = 1;
                        var1 = var2[var0];
                        var0 = 2;
                        var4 = var2[var0];
                        var0 = 100;
                        var3 = var1 / var0;
                        var1 = 0.008856;
                        if (!(!(var3 > var1))) {
                            _fun51264_ip = 98;
                            continue _fun51264
                        }
                    case 68:
                        var0 = 7.787;
                        var2 = var0 * var3;
                        var0 = 0.13793103448275862;
                        var2 = var2 + var0;
                        _fun51264_ip = 115;
                        continue _fun51264;
                    case 98:
                        var7 = 0.3333333333333333;
                        var8 = var3;
                        var2 = exponentiationOperator(var8, var7);
                    case 115:
                        var0 = 116;
                        var6 = var0 * var2;
                        var0 = new Array(3);
                        var3 = 16;
                        var3 = var6 - var3;
                        var0[0] = var3;
                        var3 = 95.047;
                        var6 = var5 / var3;
                        if (!(!(var6 > var1))) {
                            _fun51264_ip = 185;
                            continue _fun51264
                        }
                    case 155:
                        var3 = 7.787;
                        var5 = var3 * var6;
                        var3 = 0.13793103448275862;
                        var3 = var5 + var3;
                        _fun51264_ip = 202;
                        continue _fun51264;
                    case 185:
                        var7 = 0.3333333333333333;
                        var8 = var6;
                        var3 = exponentiationOperator(var8, var7);
                    case 202:
                        var5 = var3 - var2;
                        var3 = 500;
                        var3 = var3 * var5;
                        var0[1] = var3;
                        var3 = 108.883;
                        var4 = var4 / var3;
                        if (!(!(var4 > var1))) {
                            _fun51264_ip = 268;
                            continue _fun51264
                        }
                    case 238:
                        var1 = 7.787;
                        var3 = var1 * var4;
                        var1 = 0.13793103448275862;
                        var1 = var3 + var1;
                        _fun51264_ip = 285;
                        continue _fun51264;
                    case 268:
                        var7 = 0.3333333333333333;
                        var8 = var4;
                        var1 = exponentiationOperator(var8, var7);
                    case 285:
                        var2 = var2 - var1;
                        var1 = 200;
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.lab = var3;
            var4 = var2.hsl;
            var3 = function(arg0) { // Environment: var1
                _fun51265: for (var _fun51265_ip = 0;;) switch (_fun51265_ip) {
                    case 0:
                        var1 = arg0;
                        var15 = 0;
                        var2 = var1[var15];
                        var0 = 360;
                        var14 = var2 / var0;
                        var13 = 1;
                        var0 = var1[var13];
                        var2 = 100;
                        var0 = var0 / var2;
                        var12 = 2;
                        var1 = var1[var12];
                        var1 = var1 / var2;
                        if (!(var15 !== var0)) {
                            _fun51265_ip = 253;
                            continue _fun51265
                        }
                    case 51:
                        var2 = 0.5;
                        if (!(!(var1 < var2))) {
                            _fun51265_ip = 79;
                            continue _fun51265
                        }
                    case 65:
                        var3 = var1 + var0;
                        var2 = var1 * var0;
                        var11 = var3 - var2;
                        _fun51265_ip = 87;
                        continue _fun51265;
                    case 79:
                        var0 = var13 + var0;
                        var11 = var1 * var0;
                    case 87:
                        var0 = var12 * var1;
                        var10 = var0 - var11;
                        var0 = [0, 0, 0];
                        var9 = 255;
                        var8 = 3;
                        var7 = 6;
                        var6 = var11 - var10;
                        var5 = var7 * var6;
                        var4 = 0.6666666666666666;
                        var3 = 0.3333333333333333;
                        var2 = 0;
                    case 142:
                        var16 = var2 - var13;
                        var16 = -var16;
                        var16 = var3 * var16;
                        var17 = var14 + var16;
                        var16 = var17;
                        if (!(var16 < var15)) {
                            _fun51265_ip = 167;
                            continue _fun51265
                        }
                    case 164:
                        var16 = var17 + 1;
                    case 167:
                        var17 = var16;
                        if (!(var17 > var13)) {
                            _fun51265_ip = 177;
                            continue _fun51265
                        }
                    case 174:
                        var17 = var16 - 1;
                    case 177:
                        var16 = var7 * var17;
                        if (!(!(var16 < var13))) {
                            _fun51265_ip = 228;
                            continue _fun51265
                        }
                    case 185:
                        var18 = var12 * var17;
                        var16 = var11;
                        if (!(!(var18 < var13))) {
                            _fun51265_ip = 226;
                            continue _fun51265
                        }
                    case 196:
                        var19 = var8 * var17;
                        var18 = var10;
                        if (!(var19 < var12)) {
                            _fun51265_ip = 223;
                            continue _fun51265
                        }
                    case 207:
                        var19 = var4 - var17;
                        var19 = var6 * var19;
                        var19 = var19 * var7;
                        var18 = var10 + var19;
                    case 223:
                        var16 = var18;
                    case 226:
                        _fun51265_ip = 236;
                        continue _fun51265;
                    case 228:
                        var17 = var5 * var17;
                        var16 = var10 + var17;
                    case 236:
                        var16 = var9 * var16;
                        var0[var2] = var16;
                        var2 = var2 + 1;
                        if (var2 < var8) {
                            _fun51265_ip = 142;
                            continue _fun51265
                        }
                    case 251:
                        return var0;
                    case 253:
                        var0 = 255;
                        var1 = var0 * var1;
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.hsl;
            var3 = function(arg0) { // Environment: var1
                _fun51266: for (var _fun51266_ip = 0;;) switch (_fun51266_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = 0;
                        var8 = var0[var5];
                        var9 = 1;
                        var1 = var0[var9];
                        var2 = 100;
                        var6 = var1 / var2;
                        var3 = 2;
                        var0 = var0[var3];
                        var0 = var0 / var2;
                        var1 = global;
                        var7 = var1.Math;
                        var4 = var7.max;
                        var1 = 0.01;
                        var7 = var4.bind(var7)(var0, var1);
                        var4 = var0 * var3;
                        var0 = var4;
                        if (!(!(var0 <= var9))) {
                            _fun51266_ip = 78;
                            continue _fun51266
                        }
                    case 74:
                        var0 = var3 - var4;
                    case 78:
                        var1 = var6 * var0;
                        var0 = var7;
                        if (!(!(var0 <= var9))) {
                            _fun51266_ip = 93;
                            continue _fun51266
                        }
                    case 89:
                        var0 = var3 - var7;
                    case 93:
                        var6 = var6 * var0;
                        var0 = new Array(3);
                        var0[0] = var8;
                        if (!(var5 !== var4)) {
                            _fun51266_ip = 123;
                            continue _fun51266
                        }
                    case 109:
                        var8 = var3 * var1;
                        var5 = var4 + var1;
                        var5 = var8 / var5;
                        _fun51266_ip = 135;
                        continue _fun51266;
                    case 123:
                        var7 = var7 + var6;
                        var6 = var3 * var6;
                        var5 = var6 / var7;
                    case 135:
                        var5 = var2 * var5;
                        var0[1] = var5;
                        var1 = var4 + var1;
                        var1 = var1 / var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsv = var3;
            var4 = var2.hsv;
            var3 = function(arg0) { // Environment: var1
                _fun51267: for (var _fun51267_ip = 0;;) switch (_fun51267_ip) {
                    case 0:
                        var1 = arg0;
                        var7 = 0;
                        var2 = var1[var7];
                        var0 = 60;
                        var2 = var2 / var0;
                        var6 = 1;
                        var0 = var1[var6];
                        var3 = 100;
                        var10 = var0 / var3;
                        var0 = 2;
                        var1 = var1[var0];
                        var8 = var1 / var3;
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.floor;
                        var4 = var3.bind(var4)(var2);
                        var3 = 6;
                        var5 = var4 % var3;
                        var3 = var1.Math;
                        var1 = var3.floor;
                        var1 = var1.bind(var3)(var2);
                        var2 = var2 - var1;
                        var3 = 255;
                        var9 = var3 * var8;
                        var1 = var6 - var10;
                        var1 = var9 * var1;
                        var4 = var10 * var2;
                        var4 = var6 - var4;
                        var4 = var9 * var4;
                        var2 = var6 - var2;
                        var2 = var10 * var2;
                        var2 = var6 - var2;
                        var2 = var9 * var2;
                        var3 = var8 * var3;
                        if (!(var7 !== var5)) {
                            _fun51267_ip = 265;
                            continue _fun51267
                        }
                    case 142:
                        if (!(var6 !== var5)) {
                            _fun51267_ip = 247;
                            continue _fun51267
                        }
                    case 146:
                        if (!(var0 !== var5)) {
                            _fun51267_ip = 229;
                            continue _fun51267
                        }
                    case 150:
                        var0 = 3;
                        if (!(var0 !== var5)) {
                            _fun51267_ip = 211;
                            continue _fun51267
                        }
                    case 157:
                        var0 = 4;
                        if (!(var0 !== var5)) {
                            _fun51267_ip = 193;
                            continue _fun51267
                        }
                    case 164:
                        var0 = 5;
                        if (!(var0 !== var5)) {
                            _fun51267_ip = 175;
                            continue _fun51267
                        }
                    case 171:
                        var0 = undefined;
                        return var0;
                    case 175:
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var1;
                        var0[2] = var4;
                        return var0;
                    case 193:
                        var0 = new Array(3);
                        var0[0] = var2;
                        var0[1] = var1;
                        var0[2] = var3;
                        return var0;
                    case 211:
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var4;
                        var0[2] = var3;
                        return var0;
                    case 229:
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var3;
                        var0[2] = var2;
                        return var0;
                    case 247:
                        var0 = new Array(3);
                        var0[0] = var4;
                        var0[1] = var3;
                        var0[2] = var1;
                        return var0;
                    case 265:
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.hsv;
            var3 = function(arg0) { // Environment: var1
                _fun51268: for (var _fun51268_ip = 0;;) switch (_fun51268_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = 0;
                        var5 = var0[var6];
                        var9 = 1;
                        var1 = var0[var9];
                        var2 = 100;
                        var7 = var1 / var2;
                        var3 = 2;
                        var0 = var0[var3];
                        var4 = var0 / var2;
                        var0 = global;
                        var8 = var0.Math;
                        var1 = var8.max;
                        var0 = 0.01;
                        var0 = var1.bind(var8)(var4, var0);
                        var1 = var3 - var7;
                        var8 = var1 * var0;
                        var7 = var7 * var0;
                        var0 = new Array(3);
                        var0[0] = var5;
                        var5 = var8;
                        if (!(!(var5 <= var9))) {
                            _fun51268_ip = 94;
                            continue _fun51268
                        }
                    case 90:
                        var5 = var3 - var8;
                    case 94:
                        var5 = var7 / var5;
                        if (var5) {
                            _fun51268_ip = 103;
                            continue _fun51268
                        }
                    case 101:
                        var5 = 0;
                    case 103:
                        var5 = var2 * var5;
                        var0[1] = var5;
                        var1 = var1 * var4;
                        var1 = var1 / var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsl = var3;
            var4 = var2.hwb;
            var3 = function(arg0) { // Environment: var1
                _fun51269: for (var _fun51269_ip = 0;;) switch (_fun51269_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = 0;
                        var2 = var0[var9];
                        var1 = 360;
                        var2 = var2 / var1;
                        var8 = 1;
                        var3 = var0[var8];
                        var1 = 100;
                        var4 = var3 / var1;
                        var6 = 2;
                        var0 = var0[var6];
                        var5 = var0 / var1;
                        var3 = var4 + var5;
                        var0 = var4;
                        var1 = var5;
                        if (!(var3 > var8)) {
                            _fun51269_ip = 66;
                            continue _fun51269
                        }
                    case 58:
                        var0 = var4 / var3;
                        var1 = var5 / var3;
                    case 66:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.floor;
                        var10 = 6;
                        var2 = var10 * var2;
                        var7 = var3.bind(var4)(var2);
                        var1 = var8 - var1;
                        var2 = var2 - var7;
                        var4 = var8 & var7;
                        var3 = var2;
                        if (!var4) {
                            _fun51269_ip = 114;
                            continue _fun51269
                        }
                    case 110:
                        var3 = var8 - var2;
                    case 114:
                        var2 = var1 - var0;
                        var2 = var3 * var2;
                        var5 = var0 + var2;
                        var4 = var1;
                        var3 = var5;
                        var2 = var0;
                        if (!(var10 !== var7)) {
                            _fun51269_ip = 243;
                            continue _fun51269
                        }
                    case 139:
                        var4 = var1;
                        var3 = var5;
                        var2 = var0;
                        if (!(var9 !== var7)) {
                            _fun51269_ip = 243;
                            continue _fun51269
                        }
                    case 152:
                        if (!(var8 !== var7)) {
                            _fun51269_ip = 234;
                            continue _fun51269
                        }
                    case 156:
                        if (!(var6 !== var7)) {
                            _fun51269_ip = 223;
                            continue _fun51269
                        }
                    case 160:
                        var6 = 3;
                        if (!(var6 !== var7)) {
                            _fun51269_ip = 212;
                            continue _fun51269
                        }
                    case 167:
                        var6 = 4;
                        if (!(var6 !== var7)) {
                            _fun51269_ip = 201;
                            continue _fun51269
                        }
                    case 174:
                        var6 = 5;
                        var4 = var1;
                        var3 = var5;
                        var2 = var0;
                        if (!(var6 === var7)) {
                            _fun51269_ip = 243;
                            continue _fun51269
                        }
                    case 190:
                        var4 = var1;
                        var3 = var0;
                        var2 = var5;
                        _fun51269_ip = 243;
                        continue _fun51269;
                    case 201:
                        var4 = var5;
                        var3 = var0;
                        var2 = var1;
                        _fun51269_ip = 243;
                        continue _fun51269;
                    case 212:
                        var4 = var0;
                        var3 = var5;
                        var2 = var1;
                        _fun51269_ip = 243;
                        continue _fun51269;
                    case 223:
                        var4 = var0;
                        var3 = var1;
                        var2 = var5;
                        _fun51269_ip = 243;
                        continue _fun51269;
                    case 234:
                        var4 = var5;
                        var3 = var1;
                        var2 = var0;
                    case 243:
                        var0 = new Array(3);
                        var1 = 255;
                        var4 = var1 * var4;
                        var0[0] = var4;
                        var3 = var1 * var3;
                        var0[1] = var3;
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.cmyk;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var0 = 0;
                var0 = var4[var0];
                var2 = 100;
                var0 = var0 / var2;
                var3 = 1;
                var1 = var4[var3];
                var5 = var1 / var2;
                var1 = 2;
                var1 = var4[var1];
                var7 = var1 / var2;
                var1 = 3;
                var1 = var4[var1];
                var6 = var1 / var2;
                var4 = global;
                var8 = var4.Math;
                var2 = var8.min;
                var1 = var3 - var6;
                var0 = var0 * var1;
                var0 = var0 + var6;
                var0 = var2.bind(var8)(var3, var0);
                var8 = var3 - var0;
                var0 = new Array(3);
                var2 = 255;
                var8 = var2 * var8;
                var0[0] = var8;
                var9 = var4.Math;
                var8 = var9.min;
                var5 = var5 * var1;
                var5 = var5 + var6;
                var5 = var8.bind(var9)(var3, var5);
                var5 = var3 - var5;
                var5 = var2 * var5;
                var0[1] = var5;
                var5 = var4.Math;
                var4 = var5.min;
                var1 = var7 * var1;
                var1 = var1 + var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var3 - var1;
                var1 = var2 * var1;
                var0[2] = var1;
                return var0;
            };
            var4.rgb = var3;
            var4 = var2.xyz;
            var3 = function(arg0) { // Environment: var1
                _fun51271: for (var _fun51271_ip = 0;;) switch (_fun51271_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = 0;
                        var0 = var3[var8];
                        var1 = 100;
                        var2 = var0 / var1;
                        var5 = 1;
                        var0 = var3[var5];
                        var4 = var0 / var1;
                        var0 = 2;
                        var0 = var3[var0];
                        var3 = var0 / var1;
                        var0 = 3.2406;
                        var1 = var0 * var2;
                        var0 = -1.5372;
                        var0 = var0 * var4;
                        var1 = var1 + var0;
                        var0 = -0.4986;
                        var0 = var0 * var3;
                        var7 = var1 + var0;
                        var0 = 0.0031308;
                        if (!(!(var7 > var0))) {
                            _fun51271_ip = 118;
                            continue _fun51271
                        }
                    case 102:
                        var1 = 12.92;
                        var6 = var1 * var7;
                        _fun51271_ip = 163;
                        continue _fun51271;
                    case 118:
                        var11 = 0.4166666666666667;
                        var12 = var7;
                        var7 = exponentiationOperator(var12, var11);
                        var1 = 1.055;
                        var7 = var1 * var7;
                        var1 = 0.055;
                        var6 = var7 - var1;
                    case 163:
                        var1 = -0.9689;
                        var7 = var1 * var2;
                        var1 = 1.8758;
                        var1 = var1 * var4;
                        var7 = var7 + var1;
                        var1 = 0.0415;
                        var1 = var1 * var3;
                        var7 = var7 + var1;
                        if (!(!(var7 > var0))) {
                            _fun51271_ip = 233;
                            continue _fun51271
                        }
                    case 217:
                        var1 = 12.92;
                        var10 = var1 * var7;
                        _fun51271_ip = 278;
                        continue _fun51271;
                    case 233:
                        var11 = 0.4166666666666667;
                        var12 = var7;
                        var7 = exponentiationOperator(var12, var11);
                        var1 = 1.055;
                        var7 = var1 * var7;
                        var1 = 0.055;
                        var10 = var7 - var1;
                    case 278:
                        var1 = 0.0557;
                        var2 = var1 * var2;
                        var1 = -0.204;
                        var1 = var1 * var4;
                        var2 = var2 + var1;
                        var1 = 1.057;
                        var1 = var1 * var3;
                        var1 = var2 + var1;
                        if (!(!(var1 > var0))) {
                            _fun51271_ip = 348;
                            continue _fun51271
                        }
                    case 332:
                        var0 = 12.92;
                        var7 = var0 * var1;
                        _fun51271_ip = 393;
                        continue _fun51271;
                    case 348:
                        var11 = 0.4166666666666667;
                        var12 = var1;
                        var1 = exponentiationOperator(var12, var11);
                        var0 = 1.055;
                        var1 = var0 * var1;
                        var0 = 0.055;
                        var7 = var1 - var0;
                    case 393:
                        var1 = global;
                        var3 = var1.Math;
                        var2 = var3.min;
                        var4 = var1.Math;
                        var0 = var4.max;
                        var0 = var0.bind(var4)(var8, var6);
                        var0 = var2.bind(var3)(var0, var5);
                        var2 = 255;
                        var3 = var2 * var0;
                        var0 = new Array(3);
                        var0[0] = var3;
                        var6 = var1.Math;
                        var4 = var6.min;
                        var9 = var1.Math;
                        var3 = var9.max;
                        var3 = var3.bind(var9)(var8, var10);
                        var3 = var4.bind(var6)(var3, var5);
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var4 = var1.Math;
                        var3 = var4.min;
                        var6 = var1.Math;
                        var1 = var6.max;
                        var1 = var1.bind(var6)(var8, var7);
                        var1 = var3.bind(var4)(var1, var5);
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.xyz;
            var3 = function(arg0) { // Environment: var1
                _fun51272: for (var _fun51272_ip = 0;;) switch (_fun51272_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = 0;
                        var5 = var2[var0];
                        var0 = 1;
                        var1 = var2[var0];
                        var0 = 2;
                        var4 = var2[var0];
                        var0 = 100;
                        var3 = var1 / var0;
                        var1 = 0.008856;
                        if (!(!(var3 > var1))) {
                            _fun51272_ip = 74;
                            continue _fun51272
                        }
                    case 44:
                        var0 = 7.787;
                        var2 = var0 * var3;
                        var0 = 0.13793103448275862;
                        var2 = var2 + var0;
                        _fun51272_ip = 91;
                        continue _fun51272;
                    case 74:
                        var7 = 0.3333333333333333;
                        var8 = var3;
                        var2 = exponentiationOperator(var8, var7);
                    case 91:
                        var0 = 116;
                        var6 = var0 * var2;
                        var0 = new Array(3);
                        var3 = 16;
                        var3 = var6 - var3;
                        var0[0] = var3;
                        var3 = 95.047;
                        var6 = var5 / var3;
                        if (!(!(var6 > var1))) {
                            _fun51272_ip = 161;
                            continue _fun51272
                        }
                    case 131:
                        var3 = 7.787;
                        var5 = var3 * var6;
                        var3 = 0.13793103448275862;
                        var3 = var5 + var3;
                        _fun51272_ip = 178;
                        continue _fun51272;
                    case 161:
                        var7 = 0.3333333333333333;
                        var8 = var6;
                        var3 = exponentiationOperator(var8, var7);
                    case 178:
                        var5 = var3 - var2;
                        var3 = 500;
                        var3 = var3 * var5;
                        var0[1] = var3;
                        var3 = 108.883;
                        var4 = var4 / var3;
                        if (!(!(var4 > var1))) {
                            _fun51272_ip = 244;
                            continue _fun51272
                        }
                    case 214:
                        var1 = 7.787;
                        var3 = var1 * var4;
                        var1 = 0.13793103448275862;
                        var1 = var3 + var1;
                        _fun51272_ip = 261;
                        continue _fun51272;
                    case 244:
                        var7 = 0.3333333333333333;
                        var8 = var4;
                        var1 = exponentiationOperator(var8, var7);
                    case 261:
                        var2 = var2 - var1;
                        var1 = 200;
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.lab = var3;
            var4 = var2.lab;
            var3 = function(arg0) { // Environment: var1
                _fun51273: for (var _fun51273_ip = 0;;) switch (_fun51273_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = 0;
                        var1 = var4[var0];
                        var0 = 16;
                        var1 = var1 + var0;
                        var0 = 116;
                        var7 = var1 / var0;
                        var0 = 3;
                        var9 = var7;
                        var8 = var0;
                        var3 = exponentiationOperator(var9, var8);
                        var1 = 1;
                        var2 = var4[var1];
                        var1 = 500;
                        var1 = var2 / var1;
                        var6 = var1 + var7;
                        var9 = var6;
                        var1 = exponentiationOperator(var9, var8);
                        var2 = 2;
                        var4 = var4[var2];
                        var2 = 200;
                        var2 = var4 / var2;
                        var4 = var7 - var2;
                        var9 = var4;
                        var2 = exponentiationOperator(var9, var8);
                        var0 = 0.008856;
                        if (!(!(var3 > var0))) {
                            _fun51273_ip = 131;
                            continue _fun51273
                        }
                    case 103:
                        var5 = 0.13793103448275862;
                        var7 = var7 - var5;
                        var5 = 7.787;
                        var3 = var7 / var5;
                    case 131:
                        if (!(!(var1 > var0))) {
                            _fun51273_ip = 163;
                            continue _fun51273
                        }
                    case 135:
                        var5 = 0.13793103448275862;
                        var6 = var6 - var5;
                        var5 = 7.787;
                        var1 = var6 / var5;
                    case 163:
                        if (!(!(var2 > var0))) {
                            _fun51273_ip = 195;
                            continue _fun51273
                        }
                    case 167:
                        var0 = 0.13793103448275862;
                        var4 = var4 - var0;
                        var0 = 7.787;
                        var2 = var4 / var0;
                    case 195:
                        var0 = 95.047;
                        var1 = var1 * var0;
                        var0 = new Array(3);
                        var0[0] = var1;
                        var1 = 100;
                        var1 = var3 * var1;
                        var0[1] = var1;
                        var1 = 108.883;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.xyz = var3;
            var4 = var2.lab;
            var3 = function(arg0) { // Environment: var1
                _fun51274: for (var _fun51274_ip = 0;;) switch (_fun51274_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = 0;
                        var4 = var0[var7];
                        var1 = 1;
                        var5 = var0[var1];
                        var8 = 2;
                        var2 = var0[var8];
                        var3 = global;
                        var1 = var3.Math;
                        var0 = var1.atan2;
                        var0 = var0.bind(var1)(var2, var5);
                        var6 = 360;
                        var0 = var6 * var0;
                        var1 = var3.Math;
                        var1 = var1.PI;
                        var0 = var0 / var8;
                        var0 = var0 / var1;
                        var1 = var0;
                        if (!(var1 < var7)) {
                            _fun51274_ip = 84;
                            continue _fun51274
                        }
                    case 80:
                        var1 = var0 + var6;
                    case 84:
                        var0 = new Array(3);
                        var0[0] = var4;
                        var4 = var3.Math;
                        var3 = var4.sqrt;
                        var5 = var5 * var5;
                        var2 = var2 * var2;
                        var2 = var5 + var2;
                        var2 = var3.bind(var4)(var2);
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.lch = var3;
            var4 = var2.lch;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = 0;
                var3 = var0[var1];
                var1 = 1;
                var2 = var0[var1];
                var5 = 2;
                var1 = var0[var5];
                var0 = 360;
                var0 = var1 / var0;
                var1 = global;
                var4 = var1.Math;
                var4 = var4.PI;
                var0 = var0 * var5;
                var4 = var0 * var4;
                var0 = new Array(3);
                var0[0] = var3;
                var5 = var1.Math;
                var3 = var5.cos;
                var3 = var3.bind(var5)(var4);
                var3 = var2 * var3;
                var0[1] = var3;
                var3 = var1.Math;
                var1 = var3.sin;
                var1 = var1.bind(var3)(var4);
                var1 = var2 * var1;
                var0[2] = var1;
                return var0;
            };
            var4.lab = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51276: for (var _fun51276_ip = 0;;) switch (_fun51276_ip) {
                    case 0:
                        var8 = arg0;
                        var3 = undefined;
                        var0 = undefined;
                        var1 = arguments.length;
                        var6 = 1;
                        var1 = var1 > var6;
                        var5 = null;
                        var10 = null;
                        if (!var1) {
                            _fun51276_ip = 38;
                            continue _fun51276
                        }
                    case 24:
                        var1 = arguments[var6];
                        var10 = null;
                        if (!(var3 !== var1)) {
                            _fun51276_ip = 38;
                            continue _fun51276
                        }
                    case 34:
                        var10 = arguments[var6];
                    case 38:
                        var2 = _closure1_slot2;
                        var0 = 3;
                        var4 = var2.bind(var3)(var8, var0);
                        var2 = 0;
                        var7 = var4[var2];
                        var0 = var4[var6];
                        var3 = 2;
                        var4 = var4[var3];
                        if (!(var5 === var10)) {
                            _fun51276_ip = 100;
                            continue _fun51276
                        }
                    case 75:
                        var1 = _closure1_slot4;
                        var5 = var1.rgb;
                        var1 = var5.hsv;
                        var1 = var1.bind(var5)(var8);
                        var10 = var1[var3];
                    case 100:
                        var5 = global;
                        var9 = var5.Math;
                        var8 = var9.round;
                        var1 = 50;
                        var1 = var10 / var1;
                        var1 = var8.bind(var9)(var1);
                        if (!(var2 !== var1)) {
                            _fun51276_ip = 231;
                            continue _fun51276
                        }
                    case 129:
                        var9 = var5.Math;
                        var8 = var9.round;
                        var2 = 255;
                        var4 = var4 / var2;
                        var4 = var8.bind(var9)(var4);
                        var4 = var4 << var3;
                        var9 = var5.Math;
                        var8 = var9.round;
                        var0 = var0 / var2;
                        var0 = var8.bind(var9)(var0);
                        var0 = var0 << var6;
                        var6 = var5.Math;
                        var5 = var6.round;
                        var2 = var7 / var2;
                        var2 = var5.bind(var6)(var2);
                        var0 = var4 | var0;
                        var2 = var0 | var2;
                        var0 = 30;
                        var2 = var0 + var2;
                        var0 = var2;
                        if (!(var3 === var1)) {
                            _fun51276_ip = 229;
                            continue _fun51276
                        }
                    case 222:
                        var1 = 60;
                        var0 = var2 + var1;
                    case 229:
                        return var0;
                    case 231:
                        var0 = 30;
                        return var0;
                }
            };
            var4.ansi16 = var3;
            var4 = var2.hsv;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var1 = _closure1_slot4;
                var3 = var1.rgb;
                var2 = var3.ansi16;
                var0 = _closure1_slot4;
                var1 = var0.hsv;
                var0 = var1.rgb;
                var1 = var0.bind(var1)(var4);
                var0 = 2;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var4.ansi16 = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51278: for (var _fun51278_ip = 0;;) switch (_fun51278_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 0;
                        var6 = var1[var0];
                        var0 = 1;
                        var2 = var1[var0];
                        var0 = 2;
                        var7 = var1[var0];
                        if (!(var6 === var2)) {
                            _fun51278_ip = 31;
                            continue _fun51278
                        }
                    case 27:
                        if (!(var2 !== var7)) {
                            _fun51278_ip = 142;
                            continue _fun51278
                        }
                    case 31:
                        var1 = global;
                        var8 = var1.Math;
                        var4 = var8.round;
                        var0 = 255;
                        var3 = var6 / var0;
                        var5 = 5;
                        var3 = var3 * var5;
                        var4 = var4.bind(var8)(var3);
                        var3 = 36;
                        var3 = var3 * var4;
                        var8 = var1.Math;
                        var4 = var8.round;
                        var2 = var2 / var0;
                        var2 = var2 * var5;
                        var4 = var4.bind(var8)(var2);
                        var2 = 6;
                        var2 = var2 * var4;
                        var4 = var1.Math;
                        var1 = var4.round;
                        var0 = var7 / var0;
                        var0 = var0 * var5;
                        var1 = var1.bind(var4)(var0);
                        var0 = 16;
                        var0 = var0 + var3;
                        var0 = var0 + var2;
                        var0 = var0 + var1;
                        _fun51278_ip = 217;
                        continue _fun51278;
                    case 142:
                        var3 = 8;
                        var2 = var6 < var3;
                        var1 = 16;
                        if (var2) {
                            _fun51278_ip = 214;
                            continue _fun51278
                        }
                    case 155:
                        var2 = 248;
                        var4 = var6 > var2;
                        var2 = 231;
                        if (var4) {
                            _fun51278_ip = 211;
                            continue _fun51278
                        }
                    case 168:
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.round;
                        var6 = var6 - var3;
                        var3 = 247;
                        var6 = var6 / var3;
                        var3 = 24;
                        var3 = var6 * var3;
                        var4 = var4.bind(var5)(var3);
                        var3 = 232;
                        var2 = var4 + var3;
                    case 211:
                        var1 = var2;
                    case 214:
                        var0 = var1;
                    case 217:
                        return var0;
                }
            };
            var4.ansi256 = var3;
            var4 = var2.ansi16;
            var3 = function(arg0) { // Environment: var1
                _fun51279: for (var _fun51279_ip = 0;;) switch (_fun51279_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = 10;
                        var2 = var3 % var0;
                        var0 = 0;
                        if (!(var0 !== var2)) {
                            _fun51279_ip = 125;
                            continue _fun51279
                        }
                    case 16:
                        var0 = 7;
                        if (!(var0 !== var2)) {
                            _fun51279_ip = 125;
                            continue _fun51279
                        }
                    case 23:
                        var0 = 50;
                        var0 = var3 > var0;
                        var1 = 0.5;
                        var6 = 1;
                        var0 = ~var0;
                        var0 = ~var0;
                        var0 = var6 + var0;
                        var5 = var1 * var0;
                        var0 = new Array(3);
                        var1 = var6 & var2;
                        var1 = var1 * var5;
                        var4 = 255;
                        var1 = var1 * var4;
                        var0[0] = var1;
                        var1 = var2 >> var6;
                        var1 = var1 & var6;
                        var1 = var1 * var5;
                        var1 = var1 * var4;
                        var0[1] = var1;
                        var1 = 2;
                        var1 = var2 >> var1;
                        var1 = var1 & var6;
                        var1 = var1 * var5;
                        var1 = var1 * var4;
                        var0[2] = var1;
                        return var0;
                    case 125:
                        var0 = 50;
                        var1 = var2;
                        if (!(var3 > var0)) {
                            _fun51279_ip = 149;
                            continue _fun51279
                        }
                    case 135:
                        var0 = 3.5;
                        var1 = var2 + var0;
                    case 149:
                        var0 = 10.5;
                        var1 = var1 / var0;
                        var0 = 255;
                        var1 = var1 * var0;
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.ansi256;
            var3 = function(arg0) { // Environment: var1
                _fun51280: for (var _fun51280_ip = 0;;) switch (_fun51280_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 232;
                        if (!(!(var1 >= var0))) {
                            _fun51280_ip = 123;
                            continue _fun51280
                        }
                    case 10:
                        var2 = 16;
                        var6 = var1 - var2;
                        var7 = global;
                        var5 = var7.Math;
                        var4 = var5.floor;
                        var3 = 36;
                        var2 = var6 / var3;
                        var2 = var4.bind(var5)(var2);
                        var5 = 5;
                        var8 = var2 / var5;
                        var2 = new Array(3);
                        var4 = 255;
                        var8 = var8 * var4;
                        var2[0] = var8;
                        var9 = var7.Math;
                        var8 = var9.floor;
                        var6 = var6 % var3;
                        var3 = 6;
                        var7 = var6 / var3;
                        var7 = var8.bind(var9)(var7);
                        var7 = var7 / var5;
                        var7 = var7 * var4;
                        var2[1] = var7;
                        var3 = var6 % var3;
                        var3 = var3 / var5;
                        var3 = var3 * var4;
                        var2[2] = var3;
                        return var2;
                    case 123:
                        var1 = var1 - var0;
                        var0 = 10;
                        var1 = var0 * var1;
                        var0 = 8;
                        var1 = var1 + var0;
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                var6 = arg0;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.round;
                var0 = 0;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var2 = 255;
                var0 = var2 & var0;
                var5 = var1.Math;
                var4 = var5.round;
                var3 = 1;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var4 = var2 & var3;
                var5 = var1.Math;
                var3 = var5.round;
                var1 = 2;
                var1 = var6[var1];
                var1 = var3.bind(var5)(var1);
                var1 = var2 & var1;
                var2 = 16;
                var3 = var0 << var2;
                var0 = 8;
                var0 = var4 << var0;
                var0 = var3 + var0;
                var1 = var0 + var1;
                var0 = var1.toString;
                var1 = var0.bind(var1)(var2);
                var0 = var1.toUpperCase;
                var1 = var0.bind(var1)();
                var3 = '000000';
                var2 = var3.substring;
                var0 = var1.length;
                var0 = var2.bind(var3)(var0);
                var0 = var0 + var1;
                return var0;
            };
            var4.hex = var3;
            var4 = var2.hex;
            var3 = function(arg0) { // Environment: var1
                _fun51282: for (var _fun51282_ip = 0;;) switch (_fun51282_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.toString;
                        var0 = 16;
                        var3 = var1.bind(var2)(var0);
                        var2 = var3.match;
                        var1 = /[a-f0-9]{6}|[a-f0-9]{3}/i;
                        var3 = var2.bind(var3)(var1);
                        if (var3) {
                            _fun51282_ip = 54;
                            continue _fun51282
                        }
                    case 44:
                        var1 = [0, 0, 0];
                        return var1;
                    case 54:
                        var1 = 0;
                        var2 = var3[var1];
                        var1 = var3[var1];
                        var4 = var1.length;
                        var1 = 3;
                        var3 = var2;
                        if (!(var1 === var4)) {
                            _fun51282_ip = 120;
                            continue _fun51282
                        }
                    case 79:
                        var1 = var2.split;
                        var4 = '';
                        var5 = var1.bind(var2)(var4);
                        var2 = var5.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0 + var0;
                            return var0;
                        };
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.join;
                        var3 = var1.bind(var2)(var4);
                    case 120:
                        var1 = global;
                        var2 = var1.parseInt;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3, var0);
                        var3 = var2 >> var0;
                        var0 = new Array(3);
                        var1 = 255;
                        var3 = var3 & var1;
                        var0[0] = var3;
                        var3 = 8;
                        var3 = var2 >> var3;
                        var3 = var3 & var1;
                        var0[1] = var3;
                        var1 = var1 & var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                _fun51284: for (var _fun51284_ip = 0;;) switch (_fun51284_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = 0;
                        var3 = var0[var2];
                        var1 = 255;
                        var8 = var3 / var1;
                        var5 = 1;
                        var3 = var0[var5];
                        var6 = var3 / var1;
                        var9 = 2;
                        var0 = var0[var9];
                        var1 = var0 / var1;
                        var3 = global;
                        var7 = var3.Math;
                        var4 = var7.max;
                        var10 = var3.Math;
                        var0 = var10.max;
                        var0 = var0.bind(var10)(var8, var6);
                        var0 = var4.bind(var7)(var0, var1);
                        var7 = var3.Math;
                        var4 = var7.min;
                        var10 = var3.Math;
                        var3 = var10.min;
                        var3 = var3.bind(var10)(var8, var6);
                        var4 = var4.bind(var7)(var3, var1);
                        var3 = var0 - var4;
                        var7 = 0;
                        if (!(!(var3 <= var2))) {
                            _fun51284_ip = 175;
                            continue _fun51284
                        }
                    case 118:
                        if (!(var0 !== var8)) {
                            _fun51284_ip = 157;
                            continue _fun51284
                        }
                    case 122:
                        if (!(var0 !== var6)) {
                            _fun51284_ip = 143;
                            continue _fun51284
                        }
                    case 126:
                        var0 = var8 - var6;
                        var10 = var0 / var3;
                        var0 = 4;
                        var0 = var0 + var10;
                        _fun51284_ip = 155;
                        continue _fun51284;
                    case 143:
                        var8 = var1 - var8;
                        var8 = var8 / var3;
                        var0 = var9 + var8;
                    case 155:
                        _fun51284_ip = 172;
                        continue _fun51284;
                    case 157:
                        var1 = var6 - var1;
                        var6 = var1 / var3;
                        var1 = 6;
                        var0 = var6 % var1;
                    case 172:
                        var7 = var0;
                    case 175:
                        var0 = new Array(3);
                        var6 = 360;
                        var1 = 6;
                        var1 = var7 / var1;
                        var1 = var1 % var5;
                        var1 = var6 * var1;
                        var0[0] = var1;
                        var1 = 100;
                        var6 = var1 * var3;
                        var0[1] = var6;
                        var2 = 0;
                        if (!(var3 < var5)) {
                            _fun51284_ip = 229;
                            continue _fun51284
                        }
                    case 221:
                        var3 = var5 - var3;
                        var2 = var4 / var3;
                    case 229:
                        var1 = var1 * var2;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hcg = var3;
            var4 = var2.hsl;
            var3 = function(arg0) { // Environment: var1
                _fun51285: for (var _fun51285_ip = 0;;) switch (_fun51285_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = 1;
                        var0 = var4[var5];
                        var2 = 100;
                        var1 = var0 / var2;
                        var0 = 2;
                        var3 = var4[var0];
                        var7 = var3 / var2;
                        var6 = 0.5;
                        if (!(!(var7 < var6))) {
                            _fun51285_ip = 56;
                            continue _fun51285
                        }
                    case 42:
                        var8 = var0 * var1;
                        var3 = var5 - var7;
                        var3 = var8 * var3;
                        _fun51285_ip = 64;
                        continue _fun51285;
                    case 56:
                        var0 = var0 * var1;
                        var3 = var0 * var7;
                    case 64:
                        var0 = 0;
                        var1 = 0;
                        if (!(var3 < var5)) {
                            _fun51285_ip = 88;
                            continue _fun51285
                        }
                    case 72:
                        var6 = var6 * var3;
                        var6 = var7 - var6;
                        var5 = var5 - var3;
                        var1 = var6 / var5;
                    case 88:
                        var4 = var4[var0];
                        var0 = new Array(3);
                        var0[0] = var4;
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hcg = var3;
            var4 = var2.hsv;
            var3 = function(arg0) { // Environment: var1
                _fun51286: for (var _fun51286_ip = 0;;) switch (_fun51286_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = 1;
                        var0 = var4[var5];
                        var2 = 100;
                        var0 = var0 / var2;
                        var1 = 2;
                        var1 = var4[var1];
                        var6 = var1 / var2;
                        var3 = var0 * var6;
                        var0 = 0;
                        var1 = 0;
                        if (!(var3 < var5)) {
                            _fun51286_ip = 52;
                            continue _fun51286
                        }
                    case 40:
                        var6 = var6 - var3;
                        var5 = var5 - var3;
                        var1 = var6 / var5;
                    case 52:
                        var4 = var4[var0];
                        var0 = new Array(3);
                        var0[0] = var4;
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hcg = var3;
            var4 = var2.hcg;
            var3 = function(arg0) { // Environment: var1
                _fun51287: for (var _fun51287_ip = 0;;) switch (_fun51287_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 0;
                        var3 = var1[var0];
                        var2 = 360;
                        var3 = var3 / var2;
                        var7 = 1;
                        var4 = var1[var7];
                        var2 = 100;
                        var5 = var4 / var2;
                        var6 = 2;
                        var1 = var1[var6];
                        var1 = var1 / var2;
                        if (!(var0 !== var5)) {
                            _fun51287_ip = 282;
                            continue _fun51287
                        }
                    case 51:
                        var2 = [0, 0, 0];
                        var4 = var3 % var7;
                        var3 = 6;
                        var10 = var4 * var3;
                        var3 = var10 % var7;
                        var4 = var7 - var3;
                        var8 = global;
                        var9 = var8.Math;
                        var8 = var9.floor;
                        var9 = var8.bind(var9)(var10);
                        if (!(var0 !== var9)) {
                            _fun51287_ip = 193;
                            continue _fun51287
                        }
                    case 101:
                        if (!(var7 !== var9)) {
                            _fun51287_ip = 179;
                            continue _fun51287
                        }
                    case 105:
                        if (!(var6 !== var9)) {
                            _fun51287_ip = 165;
                            continue _fun51287
                        }
                    case 109:
                        var8 = 3;
                        if (!(var8 !== var9)) {
                            _fun51287_ip = 151;
                            continue _fun51287
                        }
                    case 116:
                        var8 = 4;
                        if (!(var8 !== var9)) {
                            _fun51287_ip = 137;
                            continue _fun51287
                        }
                    case 123:
                        var2[var0] = var7;
                        var2[var7] = var0;
                        var2[var6] = var4;
                        _fun51287_ip = 205;
                        continue _fun51287;
                    case 137:
                        var2[var0] = var3;
                        var2[var7] = var0;
                        var2[var6] = var7;
                        _fun51287_ip = 205;
                        continue _fun51287;
                    case 151:
                        var2[var0] = var0;
                        var2[var7] = var4;
                        var2[var6] = var7;
                        _fun51287_ip = 205;
                        continue _fun51287;
                    case 165:
                        var2[var0] = var0;
                        var2[var7] = var7;
                        var2[var6] = var3;
                        _fun51287_ip = 205;
                        continue _fun51287;
                    case 179:
                        var2[var0] = var4;
                        var2[var7] = var7;
                        var2[var6] = var0;
                        _fun51287_ip = 205;
                        continue _fun51287;
                    case 193:
                        var2[var0] = var7;
                        var2[var7] = var3;
                        var2[var6] = var0;
                    case 205:
                        var3 = var7 - var5;
                        var4 = var3 * var1;
                        var0 = var2[var0];
                        var8 = var5 * var0;
                        var0 = new Array(3);
                        var3 = 255;
                        var8 = var8 + var4;
                        var8 = var3 * var8;
                        var0[0] = var8;
                        var7 = var2[var7];
                        var7 = var5 * var7;
                        var7 = var7 + var4;
                        var7 = var3 * var7;
                        var0[1] = var7;
                        var2 = var2[var6];
                        var2 = var5 * var2;
                        var2 = var2 + var4;
                        var2 = var3 * var2;
                        var0[2] = var2;
                        return var0;
                    case 282:
                        var0 = 255;
                        var1 = var0 * var1;
                        var0 = new Array(3);
                        var0[0] = var1;
                        var0[1] = var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.rgb = var3;
            var4 = var2.hcg;
            var3 = function(arg0) { // Environment: var1
                _fun51288: for (var _fun51288_ip = 0;;) switch (_fun51288_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = 1;
                        var1 = var4[var0];
                        var2 = 100;
                        var5 = var1 / var2;
                        var1 = 2;
                        var1 = var4[var1];
                        var1 = var1 / var2;
                        var0 = var0 - var5;
                        var0 = var1 * var0;
                        var1 = var5 + var0;
                        var0 = 0;
                        var3 = 0;
                        if (!(var1 > var3)) {
                            _fun51288_ip = 52;
                            continue _fun51288
                        }
                    case 48:
                        var3 = var5 / var1;
                    case 52:
                        var4 = var4[var0];
                        var0 = new Array(3);
                        var0[0] = var4;
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsv = var3;
            var4 = var2.hcg;
            var3 = function(arg0) { // Environment: var1
                _fun51289: for (var _fun51289_ip = 0;;) switch (_fun51289_ip) {
                    case 0:
                        var4 = arg0;
                        var7 = 1;
                        var0 = var4[var7];
                        var2 = 100;
                        var6 = var0 / var2;
                        var5 = 2;
                        var0 = var4[var5];
                        var1 = var0 / var2;
                        var0 = var7 - var6;
                        var1 = var1 * var0;
                        var3 = 0.5;
                        var0 = var3 * var6;
                        var1 = var1 + var0;
                        var0 = 0;
                        if (!(var1 > var0)) {
                            _fun51289_ip = 64;
                            continue _fun51289
                        }
                    case 60:
                        if (!(!(var1 < var3))) {
                            _fun51289_ip = 94;
                            continue _fun51289
                        }
                    case 64:
                        var8 = var1 >= var3;
                        if (!var8) {
                            _fun51289_ip = 75;
                            continue _fun51289
                        }
                    case 71:
                        var8 = var1 < var7;
                    case 75:
                        var3 = 0;
                        if (!var8) {
                            _fun51289_ip = 102;
                            continue _fun51289
                        }
                    case 80:
                        var7 = var7 - var1;
                        var7 = var5 * var7;
                        var3 = var6 / var7;
                        _fun51289_ip = 102;
                        continue _fun51289;
                    case 94:
                        var5 = var5 * var1;
                        var3 = var6 / var5;
                    case 102:
                        var4 = var4[var0];
                        var0 = new Array(3);
                        var0[0] = var4;
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hsl = var3;
            var4 = var2.hcg;
            var3 = function(arg0) { // Environment: var1
                var5 = arg0;
                var3 = 1;
                var0 = var5[var3];
                var2 = 100;
                var4 = var0 / var2;
                var0 = 2;
                var0 = var5[var0];
                var1 = var0 / var2;
                var0 = var3 - var4;
                var0 = var1 * var0;
                var1 = var4 + var0;
                var0 = 0;
                var5 = var5[var0];
                var0 = new Array(3);
                var0[0] = var5;
                var4 = var1 - var4;
                var4 = var2 * var4;
                var0[1] = var4;
                var1 = var3 - var1;
                var1 = var2 * var1;
                var0[2] = var1;
                return var0;
            };
            var4.hwb = var3;
            var4 = var2.hwb;
            var3 = function(arg0) { // Environment: var1
                _fun51291: for (var _fun51291_ip = 0;;) switch (_fun51291_ip) {
                    case 0:
                        var4 = arg0;
                        var5 = 1;
                        var0 = var4[var5];
                        var2 = 100;
                        var0 = var0 / var2;
                        var1 = 2;
                        var1 = var4[var1];
                        var1 = var1 / var2;
                        var6 = var5 - var1;
                        var3 = var6 - var0;
                        var0 = 0;
                        var1 = 0;
                        if (!(var3 < var5)) {
                            _fun51291_ip = 56;
                            continue _fun51291
                        }
                    case 44:
                        var6 = var6 - var3;
                        var5 = var5 - var3;
                        var1 = var6 / var5;
                    case 56:
                        var4 = var4[var0];
                        var0 = new Array(3);
                        var0[0] = var4;
                        var3 = var2 * var3;
                        var0[1] = var3;
                        var1 = var2 * var1;
                        var0[2] = var1;
                        return var0;
                }
            };
            var4.hcg = var3;
            var4 = var2.apple;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var0 = 0;
                var0 = var4[var0];
                var3 = 65535;
                var1 = var0 / var3;
                var0 = new Array(3);
                var2 = 255;
                var1 = var1 * var2;
                var0[0] = var1;
                var1 = 1;
                var1 = var4[var1];
                var1 = var1 / var3;
                var1 = var1 * var2;
                var0[1] = var1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var1 / var3;
                var1 = var1 * var2;
                var0[2] = var1;
                return var0;
            };
            var4.rgb = var3;
            var4 = var2.rgb;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var0 = 0;
                var0 = var4[var0];
                var3 = 255;
                var1 = var0 / var3;
                var0 = new Array(3);
                var2 = 65535;
                var1 = var1 * var2;
                var0[0] = var1;
                var1 = 1;
                var1 = var4[var1];
                var1 = var1 / var3;
                var1 = var1 * var2;
                var0[1] = var1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var1 / var3;
                var1 = var1 * var2;
                var0[2] = var1;
                return var0;
            };
            var4.apple = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var4 = arg0;
                var1 = 0;
                var0 = var4[var1];
                var3 = 100;
                var5 = var0 / var3;
                var0 = new Array(3);
                var2 = 255;
                var5 = var5 * var2;
                var0[0] = var5;
                var5 = var4[var1];
                var5 = var5 / var3;
                var5 = var5 * var2;
                var0[1] = var5;
                var1 = var4[var1];
                var1 = var1 / var3;
                var1 = var1 * var2;
                var0[2] = var1;
                return var0;
            };
            var4.rgb = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = 0;
                var1 = var1[var0];
                var0 = [0, 0];
                var0[2] = var1;
                return var0;
            };
            var4.hsl = var3;
            var4 = var2.gray;
            var3 = var2.gray;
            var3 = var3.hsl;
            var4.hsv = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = 0;
                var1 = var1[var0];
                var0 = [0, 100];
                var0[2] = var1;
                return var0;
            };
            var4.hwb = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = 0;
                var1 = var1[var0];
                var0 = [0, 0, 0];
                var0[3] = var1;
                return var0;
            };
            var4.cmyk = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = 0;
                var2 = var0[var1];
                var0 = new Array(3);
                var0[0] = var2;
                var0[1] = var1;
                var0[2] = var1;
                return var0;
            };
            var4.lab = var3;
            var4 = var2.gray;
            var3 = function(arg0) { // Environment: var1
                var0 = global;
                var3 = var0.Math;
                var2 = var3.round;
                var1 = arg0;
                var0 = 0;
                var1 = var1[var0];
                var0 = 100;
                var0 = var1 / var0;
                var1 = 255;
                var0 = var0 * var1;
                var0 = var2.bind(var3)(var0);
                var1 = var1 & var0;
                var2 = 16;
                var3 = var1 << var2;
                var0 = 8;
                var0 = var1 << var0;
                var0 = var3 + var0;
                var1 = var0 + var1;
                var0 = var1.toString;
                var1 = var0.bind(var1)(var2);
                var0 = var1.toUpperCase;
                var1 = var0.bind(var1)();
                var3 = '000000';
                var2 = var3.substring;
                var0 = var1.length;
                var0 = var2.bind(var3)(var0);
                var0 = var0 + var1;
                return var0;
            };
            var4.hex = var3;
            var2 = var2.rgb;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var0 = 0;
                var1 = var2[var0];
                var0 = 1;
                var0 = var2[var0];
                var1 = var1 + var0;
                var0 = 2;
                var0 = var2[var0];
                var1 = var1 + var0;
                var0 = 3;
                var2 = var1 / var0;
                var0 = new Array(1);
                var1 = 255;
                var2 = var2 / var1;
                var1 = 100;
                var1 = var2 * var1;
                var0[0] = var1;
                return var0;
            };
            var2.gray = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5795]);