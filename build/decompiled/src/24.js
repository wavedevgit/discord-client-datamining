// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun959: for (var _fun959_ip = 0;;) switch (_fun959_ip) {
        case 0:
            var3 = module;
            var2 = function(arg0) { // Environment: var1
                _fun960: for (var _fun960_ip = 0;;) switch (_fun960_ip) {
                    case 0:
                        var0 = function(arg0, arg1, arg2, arg3) { // Original name: Integer, environment: var1
                            _fun961: for (var _fun961_ip = 0;;) switch (_fun961_ip) {
                                case 0:
                                    var6 = arg0;
                                    var5 = arg1;
                                    var4 = arg2;
                                    var3 = undefined;
                                    if (!(var3 !== var6)) {
                                        _fun961_ip = 73;
                                        continue _fun961
                                    }
                                case 15:
                                    if (!(var3 !== var5)) {
                                        _fun961_ip = 32;
                                        continue _fun961
                                    }
                                case 19:
                                    var1 = var5 - 0;
                                    var0 = 10;
                                    if (!(var0 === var1)) {
                                        _fun961_ip = 46;
                                        continue _fun961
                                    }
                                case 29:
                                    if (var4) {
                                        _fun961_ip = 46;
                                        continue _fun961
                                    }
                                case 32:
                                    var0 = _closure2_slot46;
                                    var0 = var0.bind(var3)(var6);
                                    _fun961_ip = 71;
                                    continue _fun961;
                                case 46:
                                    var2 = _closure2_slot8;
                                    var7 = arg3;
                                    var11 = undefined;
                                    var10 = var6;
                                    var9 = var5;
                                    var8 = var4;
                                    var0 = var11[var2](var10, var9, var8, var7, var6);
                                case 71:
                                    _fun961_ip = 86;
                                    continue _fun961;
                                case 73:
                                    var2 = _closure2_slot9;
                                    var1 = 0;
                                    var0 = var2[var1];
                                case 86:
                                    return var0;
                            }
                        };
                        var _closure2_slot9 = var0;
                        var8 = function(arg0, arg1) { // Original name: BigInteger, environment: var1
                            var1 = this;
                            var0 = arg0;
                            var1.value = var0;
                            var0 = arg1;
                            var1.sign = var0;
                            var0 = false;
                            var1.isSmall = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot10 = var8;
                        var7 = function(arg0) { // Original name: SmallInteger, environment: var1
                            var2 = arg0;
                            var1 = this;
                            var1.value = var2;
                            var0 = 0;
                            var0 = var2 < var0;
                            var1.sign = var0;
                            var0 = true;
                            var1.isSmall = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot11 = var7;
                        var5 = function(arg0) { // Original name: NativeBigInt, environment: var1
                            var1 = arg0;
                            var0 = this;
                            var0.value = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot12 = var5;
                        var2 = function(arg0) { // Original name: isPrecise, environment: var1
                            _fun965: for (var _fun965_ip = 0;;) switch (_fun965_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = -9007199254740992.0;
                                    var0 = var0 < var2;
                                    if (!var0) {
                                        _fun965_ip = 34;
                                        continue _fun965
                                    }
                                case 20:
                                    var1 = 9007199254740992.0;
                                    var0 = var2 < var1;
                                case 34:
                                    return var0;
                            }
                        };
                        var _closure2_slot13 = var2;
                        var11 = function(arg0) { // Original name: smallToArray, environment: var1
                            _fun966: for (var _fun966_ip = 0;;) switch (_fun966_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = 10000000;
                                    if (!(!(var2 < var3))) {
                                        _fun966_ip = 144;
                                        continue _fun966
                                    }
                                case 16:
                                    var1 = 100000000000000.0;
                                    if (!(!(var2 < var1))) {
                                        _fun966_ip = 100;
                                        continue _fun966
                                    }
                                case 30:
                                    var4 = var2 % var3;
                                    var0 = new Array(3);
                                    var0[0] = var4;
                                    var4 = global;
                                    var7 = var4.Math;
                                    var6 = var7.floor;
                                    var5 = var2 / var3;
                                    var5 = var6.bind(var7)(var5);
                                    var5 = var5 % var3;
                                    var0[1] = var5;
                                    var5 = var4.Math;
                                    var4 = var5.floor;
                                    var1 = var2 / var1;
                                    var1 = var4.bind(var5)(var1);
                                    var0[2] = var1;
                                    _fun966_ip = 142;
                                    continue _fun966;
                                case 100:
                                    var4 = var2 % var3;
                                    var1 = new Array(2);
                                    var1[0] = var4;
                                    var4 = global;
                                    var5 = var4.Math;
                                    var4 = var5.floor;
                                    var3 = var2 / var3;
                                    var3 = var4.bind(var5)(var3);
                                    var1[1] = var3;
                                    var0 = var1;
                                case 142:
                                    _fun966_ip = 155;
                                    continue _fun966;
                                case 144:
                                    var1 = new Array(1);
                                    var1[0] = var2;
                                    var0 = var1;
                                case 155:
                                    return var0;
                            }
                        };
                        var _closure2_slot14 = var11;
                        var2 = function(arg0) { // Original name: arrayToSmall, environment: var1
                            _fun967: for (var _fun967_ip = 0;;) switch (_fun967_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure2_slot16;
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var4 = var1.length;
                                    var2 = 4;
                                    if (!(var4 < var2)) {
                                        _fun967_ip = 49;
                                        continue _fun967
                                    }
                                case 29:
                                    var2 = _closure2_slot32;
                                    var0 = _closure2_slot1;
                                    var2 = var2.bind(var3)(var1, var0);
                                    var0 = 0;
                                    if (!(!(var2 < var0))) {
                                        _fun967_ip = 51;
                                        continue _fun967
                                    }
                                case 49:
                                    return var1;
                                case 51:
                                    if (!(var0 !== var4)) {
                                        _fun967_ip = 135;
                                        continue _fun967
                                    }
                                case 55:
                                    var2 = 1;
                                    if (!(var2 !== var4)) {
                                        _fun967_ip = 129;
                                        continue _fun967
                                    }
                                case 62:
                                    var3 = 2;
                                    if (!(var3 !== var4)) {
                                        _fun967_ip = 105;
                                        continue _fun967
                                    }
                                case 69:
                                    var4 = var1[var0];
                                    var6 = var1[var2];
                                    var3 = var1[var3];
                                    var5 = 10000000;
                                    var3 = var3 * var5;
                                    var3 = var6 + var3;
                                    var3 = var3 * var5;
                                    var3 = var4 + var3;
                                    return var3;
                                case 105:
                                    var3 = var1[var0];
                                    var4 = var1[var2];
                                    var2 = 10000000;
                                    var2 = var4 * var2;
                                    var2 = var3 + var2;
                                    return var2;
                                case 129:
                                    var1 = var1[var0];
                                    return var1;
                                case 135:
                                    return var0;
                            }
                        };
                        var _closure2_slot15 = var2;
                        var2 = function(arg0) { // Original name: trim, environment: var1
                            _fun968: for (var _fun968_ip = 0;;) switch (_fun968_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.length;
                                    var2 = var0 - 1;
                                    var0 = var1[var2];
                                    var4 = 0;
                                    var3 = var2;
                                    var2 = var3;
                                    if (!(var4 === var0)) {
                                        _fun968_ip = 44;
                                        continue _fun968
                                    }
                                case 27:
                                    var5 = var3 - 1;
                                    var0 = var1[var5];
                                    var3 = var5;
                                    var2 = var3;
                                    if (var4 === var0) {
                                        _fun968_ip = 27;
                                        continue _fun968
                                    }
                                case 44:
                                    var0 = 1;
                                    var0 = var2 + var0;
                                    var1.length = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot16 = var2;
                        var2 = function(arg0) { // Original name: createArray, environment: var1
                            _fun969: for (var _fun969_ip = 0;;) switch (_fun969_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var6 = var1;
                                    var5 = var3;
                                    var0 = new var6[var0](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    var2 = 0;
                                    var4 = var2 < var3;
                                    var1 = 0;
                                    if (!var4) {
                                        _fun969_ip = 56;
                                        continue _fun969
                                    }
                                case 45:
                                    var0[var1] = var2;
                                    var1 = var1 + 1;
                                    if (var1 < var3) {
                                        _fun969_ip = 45;
                                        continue _fun969
                                    }
                                case 56:
                                    return var0;
                            }
                        };
                        var _closure2_slot17 = var2;
                        var2 = function(arg0) { // Original name: truncate, environment: var1
                            _fun970: for (var _fun970_ip = 0;;) switch (_fun970_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = 0;
                                    if (!(!(var3 > var0))) {
                                        _fun970_ip = 30;
                                        continue _fun970
                                    }
                                case 9:
                                    var0 = global;
                                    var1 = var0.Math;
                                    var0 = var1.ceil;
                                    var0 = var0.bind(var1)(var3);
                                    _fun970_ip = 49;
                                    continue _fun970;
                                case 30:
                                    var1 = global;
                                    var2 = var1.Math;
                                    var1 = var2.floor;
                                    var0 = var1.bind(var2)(var3);
                                case 49:
                                    return var0;
                            }
                        };
                        var _closure2_slot18 = var2;
                        var2 = function(arg0, arg1) { // Original name: add, environment: var1
                            _fun971: for (var _fun971_ip = 0;;) switch (_fun971_ip) {
                                case 0:
                                    var8 = arg0;
                                    var11 = arg1;
                                    var7 = var8.length;
                                    var10 = var11.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var16 = var1;
                                    var15 = var7;
                                    var0 = new var16[var0](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    var1 = 0;
                                    var12 = var1 < var10;
                                    var6 = 10000000;
                                    var5 = 1;
                                    var9 = 0;
                                    var3 = 0;
                                    var4 = 0;
                                    var2 = 0;
                                    if (!var12) {
                                        _fun971_ip = 126;
                                        continue _fun971
                                    }
                                case 73:
                                    var13 = var8[var9];
                                    var12 = var11[var9];
                                    var12 = var13 + var12;
                                    var14 = var12 + var3;
                                    var13 = 0;
                                    if (!(var14 >= var6)) {
                                        _fun971_ip = 98;
                                        continue _fun971
                                    }
                                case 95:
                                    var13 = var5;
                                case 98:
                                    var12 = var13 * var6;
                                    var12 = var14 - var12;
                                    var0[var9] = var12;
                                    var9 = var9 + 1;
                                    var3 = var13;
                                    var2 = var3;
                                    var4 = var9;
                                    if (var4 < var10) {
                                        _fun971_ip = 73;
                                        continue _fun971
                                    }
                                case 126:
                                    var3 = var2;
                                    var2 = var3;
                                    if (!(var4 < var7)) {
                                        _fun971_ip = 181;
                                        continue _fun971
                                    }
                                case 136:
                                    var9 = var8[var4];
                                    var12 = var9 + var3;
                                    var9 = 0;
                                    if (!(var12 === var6)) {
                                        _fun971_ip = 153;
                                        continue _fun971
                                    }
                                case 150:
                                    var9 = var5;
                                case 153:
                                    var11 = parseFloat(var4);
                                    var4 = var11 + 1;
                                    var10 = var9 * var6;
                                    var10 = var12 - var10;
                                    var0[var11] = var10;
                                    var3 = var9;
                                    var2 = var3;
                                    if (var4 < var7) {
                                        _fun971_ip = 136;
                                        continue _fun971
                                    }
                                case 181:
                                    if (!(var2 > var1)) {
                                        _fun971_ip = 195;
                                        continue _fun971
                                    }
                                case 185:
                                    var1 = var0.push;
                                    var1 = var1.bind(var0)(var2);
                                case 195:
                                    return var0;
                            }
                        };
                        var _closure2_slot19 = var2;
                        var2 = function(arg0, arg1) { // Original name: addAny, environment: var1
                            _fun972: for (var _fun972_ip = 0;;) switch (_fun972_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = arg1;
                                    var1 = var4.length;
                                    var0 = var3.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun972_ip = 37;
                                        continue _fun972
                                    }
                                case 20:
                                    var1 = _closure2_slot19;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var3, var4);
                                    _fun972_ip = 52;
                                    continue _fun972;
                                case 37:
                                    var2 = _closure2_slot19;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var4, var3);
                                case 52:
                                    return var0;
                            }
                        };
                        var _closure2_slot20 = var2;
                        var2 = function(arg0, arg1) { // Original name: addSmall, environment: var1
                            _fun973: for (var _fun973_ip = 0;;) switch (_fun973_ip) {
                                case 0:
                                    var10 = arg0;
                                    var7 = arg1;
                                    var9 = var10.length;
                                    var5 = global;
                                    var0 = var5.Array;
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var16 = var2;
                                    var15 = var9;
                                    var0 = new var16[var0](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    var4 = 0;
                                    var11 = var4 < var9;
                                    var3 = 10000000;
                                    var8 = 1;
                                    var6 = 0;
                                    var2 = var7;
                                    var1 = 0;
                                    if (!var11) {
                                        _fun973_ip = 129;
                                        continue _fun973
                                    }
                                case 67:
                                    var11 = var10[var6];
                                    var11 = var11 - var3;
                                    var13 = var11 + var7;
                                    var14 = var5.Math;
                                    var12 = var14.floor;
                                    var11 = var13 / var3;
                                    var11 = var12.bind(var14)(var11);
                                    var12 = var11 * var3;
                                    var12 = var13 - var12;
                                    var0[var6] = var12;
                                    var7 = var11 + var8;
                                    var6 = var6 + 1;
                                    var2 = var7;
                                    var1 = var6;
                                    if (var1 < var9) {
                                        _fun973_ip = 67;
                                        continue _fun973
                                    }
                                case 129:
                                    if (!(var2 > var4)) {
                                        _fun973_ip = 172;
                                        continue _fun973
                                    }
                                case 133:
                                    var7 = parseFloat(var1);
                                    var1 = var7 + 1;
                                    var6 = var2 % var3;
                                    var0[var7] = var6;
                                    var8 = var5.Math;
                                    var7 = var8.floor;
                                    var6 = var2 / var3;
                                    var2 = var7.bind(var8)(var6);
                                    if (var2 > var4) {
                                        _fun973_ip = 133;
                                        continue _fun973
                                    }
                                case 172:
                                    return var0;
                            }
                        };
                        var _closure2_slot21 = var2;
                        var2 = function(arg0, arg1) { // Original name: subtract, environment: var1
                            _fun974: for (var _fun974_ip = 0;;) switch (_fun974_ip) {
                                case 0:
                                    var3 = arg0;
                                    var10 = arg1;
                                    var2 = var3.length;
                                    var1 = var10.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var4 = var0.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var16 = var4;
                                    var15 = var2;
                                    var0 = new var16[var0](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var4;
                                    var7 = 0;
                                    var11 = var7 < var1;
                                    var6 = 10000000;
                                    var9 = 1;
                                    var8 = 0;
                                    var4 = 0;
                                    var5 = 0;
                                    if (!var11) {
                                        _fun974_ip = 120;
                                        continue _fun974
                                    }
                                case 71:
                                    var11 = var3[var8];
                                    var12 = var11 - var4;
                                    var11 = var10[var8];
                                    var13 = var12 - var11;
                                    var11 = 0;
                                    var12 = var13;
                                    if (!(var12 < var7)) {
                                        _fun974_ip = 103;
                                        continue _fun974
                                    }
                                case 96:
                                    var12 = var13 + var6;
                                    var11 = var9;
                                case 103:
                                    var0[var8] = var12;
                                    var8 = var8 + 1;
                                    var4 = var11;
                                    var5 = var4;
                                    if (var8 < var1) {
                                        _fun974_ip = 71;
                                        continue _fun974
                                    }
                                case 120:
                                    var4 = var1;
                                    var1 = var4;
                                    if (!(var1 < var2)) {
                                        _fun974_ip = 172;
                                        continue _fun974
                                    }
                                case 130:
                                    var8 = var3[var4];
                                    var8 = var8 - var5;
                                    if (!(!(var8 < var7))) {
                                        _fun974_ip = 154;
                                        continue _fun974
                                    }
                                case 142:
                                    var10 = parseFloat(var4);
                                    var1 = var10 + 1;
                                    var0[var10] = var8;
                                    _fun974_ip = 172;
                                    continue _fun974;
                                case 154:
                                    var8 = var8 + var6;
                                    var0[var4] = var8;
                                    var4 = var4 + 1;
                                    var1 = var4;
                                    if (var1 < var2) {
                                        _fun974_ip = 130;
                                        continue _fun974
                                    }
                                case 172:
                                    if (!(var1 < var2)) {
                                        _fun974_ip = 191;
                                        continue _fun974
                                    }
                                case 176:
                                    var4 = var3[var1];
                                    var0[var1] = var4;
                                    var1 = var1 + 1;
                                    if (var1 < var2) {
                                        _fun974_ip = 176;
                                        continue _fun974
                                    }
                                case 191:
                                    var2 = _closure2_slot16;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot22 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: subtractSmall, environment: var1
                            _fun975: for (var _fun975_ip = 0;;) switch (_fun975_ip) {
                                case 0:
                                    var8 = arg0;
                                    var4 = arg2;
                                    var7 = var8.length;
                                    var6 = global;
                                    var0 = var6.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var15 = var1;
                                    var14 = var7;
                                    var0 = new var15[var0](var14, var13);
                                    var3 = var0 instanceof Object ? var0 : var1;
                                    var0 = arg1;
                                    var5 = -var0;
                                    var2 = 0;
                                    var9 = var2 < var7;
                                    var1 = 10000000;
                                    var0 = 0;
                                    if (!var9) {
                                        _fun975_ip = 123;
                                        continue _fun975
                                    }
                                case 65:
                                    var9 = var8[var0];
                                    var10 = var9 + var5;
                                    var12 = var6.Math;
                                    var11 = var12.floor;
                                    var9 = var10 / var1;
                                    var9 = var11.bind(var12)(var9);
                                    var11 = var10 % var1;
                                    var10 = var11;
                                    if (!(var10 < var2)) {
                                        _fun975_ip = 109;
                                        continue _fun975
                                    }
                                case 105:
                                    var10 = var11 + var1;
                                case 109:
                                    var3[var0] = var10;
                                    var0 = var0 + 1;
                                    var5 = var9;
                                    if (var0 < var7) {
                                        _fun975_ip = 65;
                                        continue _fun975
                                    }
                                case 123:
                                    var2 = _closure2_slot15;
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var3);
                                    var3 = 'number';
                                    var0 = typeof var2;
                                    if (!(var3 !== var0)) {
                                        _fun975_ip = 180;
                                        continue _fun975
                                    }
                                case 148:
                                    var0 = _closure2_slot10;
                                    var3 = var0.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var15 = var3;
                                    var14 = var2;
                                    var13 = var4;
                                    var0 = new var15[var0](var14, var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun975_ip = 216;
                                    continue _fun975;
                                case 180:
                                    var3 = var2;
                                    if (!var4) {
                                        _fun975_ip = 189;
                                        continue _fun975
                                    }
                                case 186:
                                    var3 = -var2;
                                case 189:
                                    var1 = _closure2_slot11;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var15 = var2;
                                    var14 = var3;
                                    var1 = new var15[var1](var14, var13);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 216:
                                    return var0;
                            }
                        };
                        var _closure2_slot23 = var2;
                        var2 = function(arg0, arg1) { // Original name: multiplyLong, environment: var1
                            _fun976: for (var _fun976_ip = 0;;) switch (_fun976_ip) {
                                case 0:
                                    var11 = arg0;
                                    var10 = arg1;
                                    var9 = var11.length;
                                    var8 = var10.length;
                                    var3 = _closure2_slot17;
                                    var0 = var9 + var8;
                                    var2 = undefined;
                                    var0 = var3.bind(var2)(var0);
                                    var7 = 0;
                                    var12 = var7 < var9;
                                    var6 = global;
                                    var5 = 10000000;
                                    var4 = 1;
                                    var3 = 0;
                                    if (!var12) {
                                        _fun976_ip = 160;
                                        continue _fun976
                                    }
                                case 56:
                                    var13 = var11[var3];
                                    var14 = var7 < var8;
                                    var12 = 0;
                                    if (!var14) {
                                        _fun976_ip = 153;
                                        continue _fun976
                                    }
                                case 69:
                                    var14 = var10[var12];
                                    var15 = var13 * var14;
                                    var14 = var3 + var12;
                                    var14 = var0[var14];
                                    var17 = var15 + var14;
                                    var16 = var6.Math;
                                    var15 = var16.floor;
                                    var14 = var17 / var5;
                                    var16 = var15.bind(var16)(var14);
                                    var15 = var3 + var12;
                                    var14 = var16 * var5;
                                    var14 = var17 - var14;
                                    var0[var15] = var14;
                                    var14 = var3 + var12;
                                    var15 = var14 + var4;
                                    var14 = var0[var15];
                                    var14 = var14 + var16;
                                    var0[var15] = var14;
                                    var12 = var12 + 1;
                                    if (var12 < var8) {
                                        _fun976_ip = 69;
                                        continue _fun976
                                    }
                                case 153:
                                    var3 = var3 + 1;
                                    if (var3 < var9) {
                                        _fun976_ip = 56;
                                        continue _fun976
                                    }
                                case 160:
                                    var1 = _closure2_slot16;
                                    var1 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot24 = var2;
                        var2 = function(arg0, arg1) { // Original name: multiplySmall, environment: var1
                            _fun977: for (var _fun977_ip = 0;;) switch (_fun977_ip) {
                                case 0:
                                    var10 = arg0;
                                    var9 = arg1;
                                    var8 = var10.length;
                                    var5 = global;
                                    var0 = var5.Array;
                                    var1 = var0.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var16 = var1;
                                    var15 = var8;
                                    var0 = new var16[var0](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    var4 = 0;
                                    var11 = var4 < var8;
                                    var3 = 10000000;
                                    var7 = 0;
                                    var6 = 0;
                                    var2 = 0;
                                    var1 = 0;
                                    if (!var11) {
                                        _fun977_ip = 126;
                                        continue _fun977
                                    }
                                case 65:
                                    var11 = var10[var7];
                                    var11 = var11 * var9;
                                    var13 = var11 + var6;
                                    var14 = var5.Math;
                                    var12 = var14.floor;
                                    var11 = var13 / var3;
                                    var12 = var12.bind(var14)(var11);
                                    var11 = var12 * var3;
                                    var11 = var13 - var11;
                                    var0[var7] = var11;
                                    var7 = var7 + 1;
                                    var6 = var12;
                                    var1 = var6;
                                    var2 = var7;
                                    if (var2 < var8) {
                                        _fun977_ip = 65;
                                        continue _fun977
                                    }
                                case 126:
                                    if (!(var1 > var4)) {
                                        _fun977_ip = 169;
                                        continue _fun977
                                    }
                                case 130:
                                    var7 = parseFloat(var2);
                                    var2 = var7 + 1;
                                    var6 = var1 % var3;
                                    var0[var7] = var6;
                                    var8 = var5.Math;
                                    var7 = var8.floor;
                                    var6 = var1 / var3;
                                    var1 = var7.bind(var8)(var6);
                                    if (var1 > var4) {
                                        _fun977_ip = 130;
                                        continue _fun977
                                    }
                                case 169:
                                    return var0;
                            }
                        };
                        var _closure2_slot25 = var2;
                        var2 = function(arg0, arg1) { // Original name: shiftLeft, environment: var1
                            _fun978: for (var _fun978_ip = 0;;) switch (_fun978_ip) {
                                case 0:
                                    var2 = new Array(0);
                                    var0 = arg1;
                                    var0 = parseFloat(var0);
                                    var3 = var0 - 1;
                                    var1 = 0;
                                    if (!(var0 > var1)) {
                                        _fun978_ip = 39;
                                        continue _fun978
                                    }
                                case 19:
                                    var0 = var2.push;
                                    var0 = var0.bind(var2)(var1);
                                    var0 = parseFloat(var3);
                                    var3 = var0 - 1;
                                    if (var0 > var1) {
                                        _fun978_ip = 19;
                                        continue _fun978
                                    }
                                case 39:
                                    var1 = var2.concat;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot26 = var2;
                        var2 = function(arg0, arg1) { // Original name: multiplyKaratsuba, environment: var1
                            _fun979: for (var _fun979_ip = 0;;) switch (_fun979_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg1;
                                    var1 = global;
                                    var6 = var1.Math;
                                    var5 = var6.max;
                                    var4 = var3.length;
                                    var0 = var2.length;
                                    var0 = var5.bind(var6)(var4, var0);
                                    var4 = 30;
                                    if (!(!(var0 <= var4))) {
                                        _fun979_ip = 215;
                                        continue _fun979
                                    }
                                case 45:
                                    var4 = var1.Math;
                                    var1 = var4.ceil;
                                    var9 = 2;
                                    var0 = var0 / var9;
                                    var0 = var1.bind(var4)(var0);
                                    var1 = var3.slice;
                                    var13 = var1.bind(var3)(var0);
                                    var1 = var3.slice;
                                    var4 = 0;
                                    var7 = var1.bind(var3)(var4, var0);
                                    var1 = var2.slice;
                                    var12 = var1.bind(var2)(var0);
                                    var1 = var2.slice;
                                    var5 = var1.bind(var2)(var4, var0);
                                    var11 = _closure2_slot27;
                                    var4 = undefined;
                                    var10 = var11.bind(var4)(var7, var5);
                                    var8 = var11.bind(var4)(var13, var12);
                                    var6 = _closure2_slot20;
                                    var7 = var6.bind(var4)(var7, var13);
                                    var5 = var6.bind(var4)(var5, var12);
                                    var5 = var11.bind(var4)(var7, var5);
                                    var7 = _closure2_slot26;
                                    var11 = _closure2_slot22;
                                    var5 = var11.bind(var4)(var5, var10);
                                    var5 = var11.bind(var4)(var5, var8);
                                    var5 = var7.bind(var4)(var5, var0);
                                    var5 = var6.bind(var4)(var10, var5);
                                    var0 = var9 * var0;
                                    var0 = var7.bind(var4)(var8, var0);
                                    var0 = var6.bind(var4)(var5, var0);
                                    var1 = _closure2_slot16;
                                    var1 = var1.bind(var4)(var0);
                                    return var0;
                                case 215:
                                    var1 = _closure2_slot24;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var3, var2);
                                    return var0;
                            }
                        };
                        var _closure2_slot27 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: multiplySmallAndArray, environment: var1
                            _fun980: for (var _fun980_ip = 0;;) switch (_fun980_ip) {
                                case 0:
                                    var5 = arg0;
                                    var4 = arg1;
                                    var3 = _closure2_slot10;
                                    var1 = 10000000;
                                    if (!(!(var5 < var1))) {
                                        _fun980_ip = 46;
                                        continue _fun980
                                    }
                                case 23:
                                    var6 = _closure2_slot24;
                                    var1 = _closure2_slot14;
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var5);
                                    var2 = var6.bind(var2)(var4, var1);
                                    _fun980_ip = 58;
                                    continue _fun980;
                                case 46:
                                    var1 = _closure2_slot25;
                                    var0 = undefined;
                                    var2 = var1.bind(var0)(var4, var5);
                                case 58:
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = arg2;
                                    var9 = var1;
                                    var8 = var2;
                                    var0 = new var9[var3](var8, var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot28 = var2;
                        var2 = function(arg0) { // Original name: square, environment: var1
                            _fun981: for (var _fun981_ip = 0;;) switch (_fun981_ip) {
                                case 0:
                                    var9 = arg0;
                                    var8 = var9.length;
                                    var3 = _closure2_slot17;
                                    var0 = var8 + var8;
                                    var2 = undefined;
                                    var0 = var3.bind(var2)(var0);
                                    var7 = 0;
                                    var10 = var7 < var8;
                                    var6 = 2;
                                    var5 = global;
                                    var4 = 10000000;
                                    var3 = 0;
                                    if (!var10) {
                                        _fun981_ip = 163;
                                        continue _fun981
                                    }
                                case 48:
                                    var13 = var9[var3];
                                    var10 = var13 * var13;
                                    var12 = var7 - var10;
                                    var11 = var12;
                                    var10 = var3;
                                    if (!(var10 < var8)) {
                                        _fun981_ip = 148;
                                        continue _fun981
                                    }
                                case 70:
                                    var14 = var9[var10];
                                    var14 = var13 * var14;
                                    var15 = var14 * var6;
                                    var14 = var3 + var10;
                                    var14 = var0[var14];
                                    var14 = var15 + var14;
                                    var17 = var14 + var12;
                                    var16 = var5.Math;
                                    var15 = var16.floor;
                                    var14 = var17 / var4;
                                    var14 = var15.bind(var16)(var14);
                                    var16 = var3 + var10;
                                    var15 = var14 * var4;
                                    var15 = var17 - var15;
                                    var0[var16] = var15;
                                    var10 = var10 + 1;
                                    var12 = var14;
                                    var11 = var12;
                                    if (var10 < var8) {
                                        _fun981_ip = 70;
                                        continue _fun981
                                    }
                                case 148:
                                    var10 = var3 + var8;
                                    var0[var10] = var11;
                                    var3 = var3 + 1;
                                    if (var3 < var8) {
                                        _fun981_ip = 48;
                                        continue _fun981
                                    }
                                case 163:
                                    var1 = _closure2_slot16;
                                    var1 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot29 = var2;
                        var2 = function(arg0, arg1) { // Original name: divModSmall, environment: var1
                            _fun982: for (var _fun982_ip = 0;;) switch (_fun982_ip) {
                                case 0:
                                    var9 = arg0;
                                    var8 = arg1;
                                    var1 = var9.length;
                                    var0 = _closure2_slot17;
                                    var6 = undefined;
                                    var2 = var0.bind(var6)(var1);
                                    var0 = 1;
                                    var5 = var1 - var0;
                                    var4 = 0;
                                    var3 = 10000000;
                                    var0 = 0;
                                    var1 = 0;
                                    if (!(var5 >= var1)) {
                                        _fun982_ip = 98;
                                        continue _fun982
                                    }
                                case 48:
                                    var11 = var9[var5];
                                    var10 = var0 * var3;
                                    var12 = var10 + var11;
                                    var11 = _closure2_slot18;
                                    var10 = var12 / var8;
                                    var11 = var11.bind(var6)(var10);
                                    var10 = var11 * var8;
                                    var0 = var12 - var10;
                                    var11 = var11 | 0;
                                    var2[var5] = var11;
                                    var5 = var5 - 1;
                                    var1 = var0;
                                    if (var5 >= var4) {
                                        _fun982_ip = 48;
                                        continue _fun982
                                    }
                                case 98:
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var1 = var1 | 0;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot30 = var2;
                        var2 = function(arg0, arg1) { // Original name: divModAny, environment: var1
                            _fun983: for (var _fun983_ip = 0;;) switch (_fun983_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure2_slot46;
                                    var9 = undefined;
                                    var1 = arg1;
                                    var1 = var3.bind(var9)(var1);
                                    var3 = _closure2_slot3;
                                    if (var3) {
                                        _fun983_ip = 1716;
                                        continue _fun983
                                    }
                                case 30:
                                    var6 = var2.value;
                                    var5 = var1.value;
                                    var4 = 0;
                                    if (!(var4 !== var5)) {
                                        _fun983_ip = 1680;
                                        continue _fun983
                                    }
                                case 49:
                                    var7 = var2.isSmall;
                                    var3 = var1.isSmall;
                                    if (var7) {
                                        _fun983_ip = 1577;
                                        continue _fun983
                                    }
                                case 67:
                                    var12 = var5;
                                    if (!var3) {
                                        _fun983_ip = 137;
                                        continue _fun983
                                    }
                                case 73:
                                    var8 = 1;
                                    if (!(var8 !== var5)) {
                                        _fun983_ip = 1555;
                                        continue _fun983
                                    }
                                case 83:
                                    var7 = -1;
                                    if (!(var7 != var5)) {
                                        _fun983_ip = 1523;
                                        continue _fun983
                                    }
                                case 96:
                                    var7 = global;
                                    var10 = var7.Math;
                                    var7 = var10.abs;
                                    var10 = var7.bind(var10)(var5);
                                    var7 = 10000000;
                                    if (!(!(var10 < var7))) {
                                        _fun983_ip = 1297;
                                        continue _fun983
                                    }
                                case 128:
                                    var7 = _closure2_slot14;
                                    var12 = var7.bind(var9)(var10);
                                case 137:
                                    var7 = _closure2_slot32;
                                    var7 = var7.bind(var9)(var6, var12);
                                    var11 = -1;
                                    var17 = var12;
                                    if (!(var11 !== var7)) {
                                        _fun983_ip = 1275;
                                        continue _fun983
                                    }
                                case 163:
                                    if (!(var4 !== var7)) {
                                        _fun983_ip = 1226;
                                        continue _fun983
                                    }
                                case 170:
                                    var12 = var6.length;
                                    var7 = var17.length;
                                    var12 = var12 + var7;
                                    var7 = 200;
                                    if (!(!(var12 <= var7))) {
                                        _fun983_ip = 530;
                                        continue _fun983
                                    }
                                case 194:
                                    var24 = var6.length;
                                    var23 = var17.length;
                                    var13 = new Array(0);
                                    var7 = new Array(0);
                                    var22 = global;
                                    var21 = 1;
                                    var20 = 10000000;
                                    var19 = 2;
                                    var18 = undefined;
                                    var16 = undefined;
                                    var15 = undefined;
                                    var14 = undefined;
                                    var12 = var7;
                                    if (!var24) {
                                        _fun983_ip = 489;
                                        continue _fun983
                                    }
                                case 243:
                                    var26 = var7.unshift;
                                    var24 = var24 - 1;
                                    var25 = var6[var24];
                                    var25 = var26.bind(var7)(var25);
                                    var25 = _closure2_slot16;
                                    var25 = var25.bind(var9)(var7);
                                    var25 = _closure2_slot32;
                                    var25 = var25.bind(var9)(var7, var17);
                                    var30 = var7;
                                    if (!(!(var25 < var4))) {
                                        _fun983_ip = 440;
                                        continue _fun983
                                    }
                                case 290:
                                    var26 = var30.length;
                                    var25 = var26 - var21;
                                    var25 = var30[var25];
                                    var27 = var25 * var20;
                                    var25 = var26 - var19;
                                    var25 = var30[var25];
                                    var25 = var27 + var25;
                                    var27 = var23 - var21;
                                    var27 = var17[var27];
                                    var28 = var27 * var20;
                                    var27 = var23 - var19;
                                    var27 = var17[var27];
                                    var27 = var28 + var27;
                                    var28 = var25;
                                    if (!(var26 > var23)) {
                                        _fun983_ip = 358;
                                        continue _fun983
                                    }
                                case 350:
                                    var25 = var25 + var21;
                                    var28 = var25 * var20;
                                case 358:
                                    var29 = var22.Math;
                                    var26 = var29.ceil;
                                    var25 = var28 / var27;
                                    var25 = var26.bind(var29)(var25);
                                case 379:
                                    var29 = _closure2_slot32;
                                    var26 = _closure2_slot25;
                                    var26 = var26.bind(var9)(var17, var25);
                                    var32 = var29.bind(var9)(var26, var30);
                                    var31 = var25;
                                    var29 = var31;
                                    if (!(!(var32 <= var4))) {
                                        _fun983_ip = 418;
                                        continue _fun983
                                    }
                                case 409:
                                    var25 = var31 - 1;
                                    var29 = var25;
                                    if (var29) {
                                        _fun983_ip = 379;
                                        continue _fun983
                                    }
                                case 418:
                                    var25 = var13.push;
                                    var25 = var25.bind(var13)(var29);
                                    var25 = _closure2_slot22;
                                    var25 = var25.bind(var9)(var30, var26);
                                    _fun983_ip = 465;
                                    continue _fun983;
                                case 440:
                                    var31 = var13.push;
                                    var31 = var31.bind(var13)(var4);
                                    var29 = var18;
                                    var28 = var16;
                                    var27 = var15;
                                    var26 = var14;
                                    var25 = var30;
                                case 465:
                                    var18 = var29;
                                    var16 = var28;
                                    var15 = var27;
                                    var14 = var26;
                                    var7 = var25;
                                    var12 = var7;
                                    if (var24) {
                                        _fun983_ip = 243;
                                        continue _fun983
                                    }
                                case 489:
                                    var7 = var13.reverse;
                                    var7 = var7.bind(var13)();
                                    var7 = _closure2_slot15;
                                    var14 = var7.bind(var9)(var13);
                                    var13 = new Array(2);
                                    var13[0] = var14;
                                    var7 = var7.bind(var9)(var12);
                                    var13[1] = var7;
                                    _fun983_ip = 1025;
                                    continue _fun983;
                                case 530:
                                    var12 = var6.length;
                                    var22 = var17.length;
                                    var14 = _closure2_slot17;
                                    var7 = var17.length;
                                    var7 = var14.bind(var9)(var7);
                                    var21 = 1;
                                    var14 = var22 - var21;
                                    var18 = var17[var14];
                                    var20 = global;
                                    var16 = var20.Math;
                                    var15 = var16.ceil;
                                    var14 = 2;
                                    var14 = var14 * var18;
                                    var19 = 10000000;
                                    var14 = var19 / var14;
                                    var15 = var15.bind(var16)(var14);
                                    var16 = _closure2_slot25;
                                    var14 = var16.bind(var9)(var6, var15);
                                    var18 = var16.bind(var9)(var17, var15);
                                    var16 = var14.length;
                                    if (!(var16 <= var12)) {
                                        _fun983_ip = 636;
                                        continue _fun983
                                    }
                                case 626:
                                    var16 = var14.push;
                                    var16 = var16.bind(var14)(var4);
                                case 636:
                                    var16 = var18.push;
                                    var16 = var16.bind(var18)(var4);
                                    var16 = var22 - var21;
                                    var17 = var18[var16];
                                    var16 = var12 - var22;
                                    var12 = 9999999;
                                    if (!(var16 >= var4)) {
                                        _fun983_ip = 982;
                                        continue _fun983
                                    }
                                case 671:
                                    var23 = var16 + var22;
                                    var24 = var14[var23];
                                    var23 = var12;
                                    if (!(var24 !== var17)) {
                                        _fun983_ip = 735;
                                        continue _fun983
                                    }
                                case 686:
                                    var26 = var20.Math;
                                    var25 = var26.floor;
                                    var24 = var16 + var22;
                                    var24 = var14[var24];
                                    var27 = var24 * var19;
                                    var24 = var16 + var22;
                                    var24 = var24 - var21;
                                    var24 = var14[var24];
                                    var24 = var27 + var24;
                                    var24 = var24 / var17;
                                    var23 = var25.bind(var26)(var24);
                                case 735:
                                    var26 = var18.length;
                                    var29 = var4 < var26;
                                    var28 = 0;
                                    var27 = 0;
                                    var24 = 0;
                                    var25 = 0;
                                    if (!var29) {
                                        _fun983_ip = 859;
                                        continue _fun983
                                    }
                                case 755:
                                    var29 = var18[var24];
                                    var29 = var23 * var29;
                                    var32 = var28 + var29;
                                    var31 = var20.Math;
                                    var30 = var31.floor;
                                    var29 = var32 / var19;
                                    var30 = var30.bind(var31)(var29);
                                    var29 = var16 + var24;
                                    var31 = var14[var29];
                                    var29 = var30 * var19;
                                    var29 = var32 - var29;
                                    var29 = var31 - var29;
                                    var31 = var27 + var29;
                                    if (!(!(var31 < var4))) {
                                        _fun983_ip = 828;
                                        continue _fun983
                                    }
                                case 816:
                                    var29 = var16 + var24;
                                    var14[var29] = var31;
                                    var29 = 0;
                                    _fun983_ip = 843;
                                    continue _fun983;
                                case 828:
                                    var32 = var16 + var24;
                                    var31 = var31 + var19;
                                    var14[var32] = var31;
                                    var29 = var11;
                                case 843:
                                    var24 = var24 + 1;
                                    var27 = var29;
                                    var28 = var30;
                                    var25 = var27;
                                    if (var24 < var26) {
                                        _fun983_ip = 755;
                                        continue _fun983
                                    }
                                case 859:
                                    var24 = var23;
                                    var23 = var24;
                                    if (!(var4 !== var25)) {
                                        _fun983_ip = 968;
                                        continue _fun983
                                    }
                                case 869:
                                    var27 = var24 - var21;
                                    var31 = var4 < var26;
                                    var30 = 0;
                                    var29 = 0;
                                    var28 = 0;
                                    if (!var31) {
                                        _fun983_ip = 954;
                                        continue _fun983
                                    }
                                case 886:
                                    var31 = var16 + var29;
                                    var31 = var14[var31];
                                    var32 = var31 - var19;
                                    var31 = var18[var29];
                                    var31 = var32 + var31;
                                    var32 = var30 + var31;
                                    if (!(!(var32 < var4))) {
                                        _fun983_ip = 927;
                                        continue _fun983
                                    }
                                case 914:
                                    var31 = var16 + var29;
                                    var14[var31] = var32;
                                    var31 = var21;
                                    _fun983_ip = 941;
                                    continue _fun983;
                                case 927:
                                    var33 = var16 + var29;
                                    var32 = var32 + var19;
                                    var14[var33] = var32;
                                    var31 = 0;
                                case 941:
                                    var29 = var29 + 1;
                                    var30 = var31;
                                    var28 = var30;
                                    if (var29 < var26) {
                                        _fun983_ip = 886;
                                        continue _fun983
                                    }
                                case 954:
                                    var25 = var25 + var28;
                                    var24 = var27;
                                    var23 = var24;
                                    if (var4 !== var25) {
                                        _fun983_ip = 869;
                                        continue _fun983
                                    }
                                case 968:
                                    var7[var16] = var23;
                                    var16 = var16 - 1;
                                    if (var16 >= var4) {
                                        _fun983_ip = 671;
                                        continue _fun983
                                    }
                                case 982:
                                    var12 = _closure2_slot30;
                                    var12 = var12.bind(var9)(var14, var15);
                                    var14 = var12[var4];
                                    var12 = _closure2_slot15;
                                    var15 = var12.bind(var9)(var7);
                                    var7 = new Array(2);
                                    var7[0] = var15;
                                    var12 = var12.bind(var9)(var14);
                                    var7[1] = var12;
                                    var13 = var7;
                                case 1025:
                                    var12 = var13[var4];
                                    var14 = var2.sign;
                                    var7 = var1.sign;
                                    var16 = var14 !== var7;
                                    var7 = 1;
                                    var7 = var13[var7];
                                    var14 = var2.sign;
                                    var15 = 'number';
                                    var13 = typeof var12;
                                    if (!(var15 !== var13)) {
                                        _fun983_ip = 1101;
                                        continue _fun983
                                    }
                                case 1069:
                                    var13 = _closure2_slot10;
                                    var17 = var13.prototype;
                                    var17 = Object.create(var17, {
                                        constructor: {
                                            value: var13
                                        }
                                    });
                                    var36 = var17;
                                    var35 = var12;
                                    var34 = var16;
                                    var13 = new var36[var13](var35, var34, var33);
                                    var13 = var13 instanceof Object ? var13 : var17;
                                    _fun983_ip = 1137;
                                    continue _fun983;
                                case 1101:
                                    var17 = var12;
                                    if (!var16) {
                                        _fun983_ip = 1110;
                                        continue _fun983
                                    }
                                case 1107:
                                    var17 = -var12;
                                case 1110:
                                    var12 = _closure2_slot11;
                                    var16 = var12.prototype;
                                    var16 = Object.create(var16, {
                                        constructor: {
                                            value: var12
                                        }
                                    });
                                    var36 = var16;
                                    var35 = var17;
                                    var12 = new var36[var12](var35, var34);
                                    var13 = var12 instanceof Object ? var12 : var16;
                                case 1137:
                                    var12 = typeof var7;
                                    if (!(var15 !== var12)) {
                                        _fun983_ip = 1176;
                                        continue _fun983
                                    }
                                case 1144:
                                    var12 = _closure2_slot10;
                                    var15 = var12.prototype;
                                    var15 = Object.create(var15, {
                                        constructor: {
                                            value: var12
                                        }
                                    });
                                    var36 = var15;
                                    var35 = var7;
                                    var34 = var14;
                                    var12 = new var36[var12](var35, var34, var33);
                                    var12 = var12 instanceof Object ? var12 : var15;
                                    _fun983_ip = 1212;
                                    continue _fun983;
                                case 1176:
                                    var15 = var7;
                                    if (!var14) {
                                        _fun983_ip = 1185;
                                        continue _fun983
                                    }
                                case 1182:
                                    var15 = -var7;
                                case 1185:
                                    var7 = _closure2_slot11;
                                    var14 = var7.prototype;
                                    var14 = Object.create(var14, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var36 = var14;
                                    var35 = var15;
                                    var7 = new var36[var7](var35, var34);
                                    var12 = var7 instanceof Object ? var7 : var14;
                                case 1212:
                                    var7 = new Array(2);
                                    var7[0] = var13;
                                    var7[1] = var12;
                                    return var7;
                                case 1226:
                                    var7 = _closure2_slot9;
                                    var13 = var2.sign;
                                    var12 = var1.sign;
                                    if (!(var13 === var12)) {
                                        _fun983_ip = 1249;
                                        continue _fun983
                                    }
                                case 1246:
                                    var11 = 1;
                                case 1249:
                                    var11 = var7[var11];
                                    var7 = new Array(2);
                                    var7[0] = var11;
                                    var11 = _closure2_slot9;
                                    var11 = var11[var4];
                                    var7[1] = var11;
                                    return var7;
                                case 1275:
                                    var7 = _closure2_slot9;
                                    var11 = var7[var4];
                                    var7 = new Array(2);
                                    var7[0] = var11;
                                    var7[1] = var2;
                                    return var7;
                                case 1297:
                                    var11 = _closure2_slot15;
                                    var7 = _closure2_slot30;
                                    var7 = var7.bind(var9)(var6, var10);
                                    var10 = var7[var4];
                                    var10 = var11.bind(var9)(var10);
                                    var7 = var7[var8];
                                    var8 = var2.sign;
                                    var12 = var7;
                                    if (!var8) {
                                        _fun983_ip = 1339;
                                        continue _fun983
                                    }
                                case 1336:
                                    var12 = -var7;
                                case 1339:
                                    var8 = 'number';
                                    var7 = typeof var10;
                                    if (!(var8 !== var7)) {
                                        _fun983_ip = 1434;
                                        continue _fun983
                                    }
                                case 1350:
                                    var11 = _closure2_slot10;
                                    var13 = var2.sign;
                                    var7 = var1.sign;
                                    var8 = var11.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var34 = var13 !== var7;
                                    var36 = var8;
                                    var35 = var10;
                                    var7 = new var36[var11](var35, var34, var33);
                                    var8 = var7 instanceof Object ? var7 : var8;
                                    var7 = new Array(2);
                                    var7[0] = var8;
                                    var8 = _closure2_slot11;
                                    var11 = var8.prototype;
                                    var11 = Object.create(var11, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var36 = var11;
                                    var35 = var12;
                                    var8 = new var36[var8](var35, var34);
                                    var8 = var8 instanceof Object ? var8 : var11;
                                    var7[1] = var8;
                                    _fun983_ip = 1521;
                                    continue _fun983;
                                case 1434:
                                    var13 = var2.sign;
                                    var11 = var1.sign;
                                    var8 = var10;
                                    if (!(var13 !== var11)) {
                                        _fun983_ip = 1456;
                                        continue _fun983
                                    }
                                case 1453:
                                    var8 = -var10;
                                case 1456:
                                    var10 = _closure2_slot11;
                                    var11 = var10.prototype;
                                    var11 = Object.create(var11, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var36 = var11;
                                    var35 = var8;
                                    var8 = new var36[var10](var35, var34);
                                    var11 = var8 instanceof Object ? var8 : var11;
                                    var8 = new Array(2);
                                    var8[0] = var11;
                                    var11 = var10.prototype;
                                    var11 = Object.create(var11, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var36 = var11;
                                    var35 = var12;
                                    var10 = new var36[var10](var35, var34);
                                    var10 = var10 instanceof Object ? var10 : var11;
                                    var8[1] = var10;
                                    var7 = var8;
                                case 1521:
                                    return var7;
                                case 1523:
                                    var7 = var2.negate;
                                    var8 = var7.bind(var2)();
                                    var7 = new Array(2);
                                    var7[0] = var8;
                                    var8 = _closure2_slot9;
                                    var8 = var8[var4];
                                    var7[1] = var8;
                                    return var7;
                                case 1555:
                                    var7 = new Array(2);
                                    var7[0] = var2;
                                    var8 = _closure2_slot9;
                                    var8 = var8[var4];
                                    var7[1] = var8;
                                    return var7;
                                case 1577:
                                    if (var3) {
                                        _fun983_ip = 1602;
                                        continue _fun983
                                    }
                                case 1580:
                                    var3 = _closure2_slot9;
                                    var4 = var3[var4];
                                    var3 = new Array(2);
                                    var3[0] = var4;
                                    var3[1] = var2;
                                    _fun983_ip = 1678;
                                    continue _fun983;
                                case 1602:
                                    var7 = _closure2_slot11;
                                    var8 = _closure2_slot18;
                                    var4 = var6 / var5;
                                    var35 = var8.bind(var9)(var4);
                                    var8 = var7.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var36 = var8;
                                    var4 = new var36[var7](var35, var34);
                                    var8 = var4 instanceof Object ? var4 : var8;
                                    var4 = new Array(2);
                                    var4[0] = var8;
                                    var35 = var6 % var5;
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var36 = var6;
                                    var5 = new var36[var7](var35, var34);
                                    var5 = var5 instanceof Object ? var5 : var6;
                                    var4[1] = var5;
                                    var3 = var4;
                                case 1678:
                                    return var3;
                                case 1680:
                                    var3 = global;
                                    var5 = var3.Error;
                                    var3 = var5.prototype;
                                    var4 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var35 = 'Cannot divide by zero';
                                    var36 = var4;
                                    var3 = new var36[var5](var35, var34);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    throw var3;
                                case 1716:
                                    var3 = _closure2_slot12;
                                    var4 = var2.value;
                                    var0 = var1.value;
                                    var35 = var4 / var0;
                                    var4 = var3.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var36 = var4;
                                    var0 = new var36[var3](var35, var34);
                                    var4 = var0 instanceof Object ? var0 : var4;
                                    var0 = new Array(2);
                                    var0[0] = var4;
                                    var2 = var2.value;
                                    var1 = var1.value;
                                    var35 = var2 % var1;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var36 = var2;
                                    var1 = new var36[var3](var35, var34);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot31 = var2;
                        var2 = function(arg0, arg1) { // Original name: compareAbs, environment: var1
                            _fun984: for (var _fun984_ip = 0;;) switch (_fun984_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = arg1;
                                    var3 = var1.length;
                                    var2 = var0.length;
                                    if (!(var3 === var2)) {
                                        _fun984_ip = 88;
                                        continue _fun984
                                    }
                                case 20:
                                    var2 = var1.length;
                                    var3 = 1;
                                    var5 = var2 - var3;
                                    var4 = 0;
                                    if (!(var5 >= var4)) {
                                        _fun984_ip = 60;
                                        continue _fun984
                                    }
                                case 38:
                                    var7 = var1[var5];
                                    var6 = var0[var5];
                                    var2 = var5;
                                    if (!(var7 === var6)) {
                                        _fun984_ip = 62;
                                        continue _fun984
                                    }
                                case 53:
                                    var5 = var2 - 1;
                                    if (var5 >= var4) {
                                        _fun984_ip = 38;
                                        continue _fun984
                                    }
                                case 60:
                                    return var4;
                                case 62:
                                    var4 = var1[var2];
                                    var2 = var0[var2];
                                    var4 = var4 > var2;
                                    var2 = -1;
                                    if (!var4) {
                                        _fun984_ip = 86;
                                        continue _fun984
                                    }
                                case 83:
                                    var2 = var3;
                                case 86:
                                    return var2;
                                case 88:
                                    var1 = var1.length;
                                    var0 = var0.length;
                                    var1 = var1 > var0;
                                    var0 = -1;
                                    if (!var1) {
                                        _fun984_ip = 114;
                                        continue _fun984
                                    }
                                case 111:
                                    var0 = 1;
                                case 114:
                                    return var0;
                            }
                        };
                        var _closure2_slot32 = var2;
                        var2 = function(arg0) { // Original name: isBasicPrime, environment: var1
                            _fun985: for (var _fun985_ip = 0;;) switch (_fun985_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.abs;
                                    var5 = var0.bind(var1)();
                                    var0 = var5.isUnit;
                                    var0 = var0.bind(var5)();
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun985_ip = 173;
                                        continue _fun985
                                    }
                                case 32:
                                    var2 = var5.equals;
                                    var1 = 2;
                                    var1 = var2.bind(var5)(var1);
                                    if (var1) {
                                        _fun985_ip = 63;
                                        continue _fun985
                                    }
                                case 49:
                                    var3 = var5.equals;
                                    var2 = 3;
                                    var1 = var3.bind(var5)(var2);
                                case 63:
                                    if (var1) {
                                        _fun985_ip = 80;
                                        continue _fun985
                                    }
                                case 66:
                                    var3 = var5.equals;
                                    var2 = 5;
                                    var1 = var3.bind(var5)(var2);
                                case 80:
                                    var2 = !var1;
                                    var1 = !var2;
                                    if (!var2) {
                                        _fun985_ip = 170;
                                        continue _fun985
                                    }
                                case 89:
                                    var2 = var5.isEven;
                                    var2 = var2.bind(var5)();
                                    if (var2) {
                                        _fun985_ip = 116;
                                        continue _fun985
                                    }
                                case 102:
                                    var4 = var5.isDivisibleBy;
                                    var3 = 3;
                                    var2 = var4.bind(var5)(var3);
                                case 116:
                                    if (var2) {
                                        _fun985_ip = 133;
                                        continue _fun985
                                    }
                                case 119:
                                    var4 = var5.isDivisibleBy;
                                    var3 = 5;
                                    var2 = var4.bind(var5)(var3);
                                case 133:
                                    var2 = !var2;
                                    if (!var2) {
                                        _fun985_ip = 167;
                                        continue _fun985
                                    }
                                case 139:
                                    var4 = var5.lesser;
                                    var3 = 49;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = !var3;
                                    var3 = !var4;
                                    if (!var4) {
                                        _fun985_ip = 164;
                                        continue _fun985
                                    }
                                case 162:
                                    var3 = undefined;
                                case 164:
                                    var2 = var3;
                                case 167:
                                    var1 = var2;
                                case 170:
                                    var0 = var1;
                                case 173:
                                    return var0;
                            }
                        };
                        var _closure2_slot33 = var2;
                        var2 = function(arg0, arg1) { // Original name: millerRabinTest, environment: var1
                            _fun986: for (var _fun986_ip = 0;;) switch (_fun986_ip) {
                                case 0:
                                    var12 = arg0;
                                    var11 = arg1;
                                    var0 = var12.prev;
                                    var10 = var0.bind(var12)();
                                    var0 = var10.isEven;
                                    var0 = var0.bind(var10)();
                                    var9 = 0;
                                    var3 = 2;
                                    var2 = var10;
                                    var1 = 0;
                                    var8 = var2;
                                    var7 = 0;
                                    if (!var0) {
                                        _fun986_ip = 80;
                                        continue _fun986
                                    }
                                case 44:
                                    var0 = var2.divide;
                                    var5 = var0.bind(var2)(var3);
                                    var1 = var1 + 1;
                                    var0 = var5.isEven;
                                    var0 = var0.bind(var5)();
                                    var2 = var5;
                                    var8 = var2;
                                    var7 = var1;
                                    if (var0) {
                                        _fun986_ip = 44;
                                        continue _fun986
                                    }
                                case 80:
                                    var0 = var11.length;
                                    var0 = var9 < var0;
                                    var6 = undefined;
                                    var5 = 1;
                                    var3 = undefined;
                                    var2 = 0;
                                    var1 = undefined;
                                    if (!var0) {
                                        _fun986_ip = 295;
                                        continue _fun986
                                    }
                                case 109:
                                    var13 = var12.lesser;
                                    var0 = var11[var2];
                                    var0 = var13.bind(var12)(var0);
                                    var13 = var3;
                                    if (var0) {
                                        _fun986_ip = 277;
                                        continue _fun986
                                    }
                                case 133:
                                    var14 = _closure1_slot0;
                                    var0 = var11[var2];
                                    var14 = var14.bind(var6)(var0);
                                    var0 = var14.modPow;
                                    var0 = var0.bind(var14)(var8, var12);
                                    var14 = var0.isUnit;
                                    var14 = var14.bind(var0)();
                                    var13 = var3;
                                    var1 = var0;
                                    if (var14) {
                                        _fun986_ip = 277;
                                        continue _fun986
                                    }
                                case 177:
                                    var14 = var0.equals;
                                    var14 = var14.bind(var0)(var10);
                                    var13 = var3;
                                    var1 = var0;
                                    if (var14) {
                                        _fun986_ip = 277;
                                        continue _fun986
                                    }
                                case 197:
                                    var14 = var7 - var5;
                                    if (!(var9 !== var14)) {
                                        _fun986_ip = 269;
                                        continue _fun986
                                    }
                                case 205:
                                    var15 = var0.square;
                                    var16 = var15.bind(var0)();
                                    var15 = var16.mod;
                                    var15 = var15.bind(var16)(var12);
                                    var16 = var15.isUnit;
                                    var16 = var16.bind(var15)();
                                    if (var16) {
                                        _fun986_ip = 273;
                                        continue _fun986
                                    }
                                case 239:
                                    var16 = var15.equals;
                                    var16 = var16.bind(var15)(var10);
                                    var13 = var14;
                                    var1 = var15;
                                    if (var16) {
                                        _fun986_ip = 277;
                                        continue _fun986
                                    }
                                case 259:
                                    var14 = var14 - 1;
                                    var0 = var15;
                                    if (var9 != var14) {
                                        _fun986_ip = 205;
                                        continue _fun986
                                    }
                                case 269:
                                    var0 = false;
                                    return var0;
                                case 273:
                                    var0 = false;
                                    return var0;
                                case 277:
                                    var2 = var2 + 1;
                                    var0 = var11.length;
                                    var3 = var13;
                                    if (var2 < var0) {
                                        _fun986_ip = 109;
                                        continue _fun986
                                    }
                                case 295:
                                    var0 = true;
                                    return var0;
                            }
                        };
                        var _closure2_slot34 = var2;
                        var2 = function(arg0) { // Original name: shift_isSmall, environment: var1
                            var0 = global;
                            var2 = var0.Math;
                            var1 = var2.abs;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 10000000;
                            var0 = var1 <= var0;
                            return var0;
                        };
                        var _closure2_slot35 = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: bitwise, environment: var1
                            _fun988: for (var _fun988_ip = 0;;) switch (_fun988_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg2;
                                    var1 = _closure2_slot46;
                                    var7 = undefined;
                                    var0 = arg1;
                                    var4 = var1.bind(var7)(var0);
                                    var0 = var5.isNegative;
                                    var0 = var0.bind(var5)();
                                    var1 = var4.isNegative;
                                    var3 = var1.bind(var4)();
                                    var12 = var5;
                                    if (!var0) {
                                        _fun988_ip = 59;
                                        continue _fun988
                                    }
                                case 49:
                                    var1 = var5.not;
                                    var12 = var1.bind(var5)();
                                case 59:
                                    var11 = var4;
                                    if (!var3) {
                                        _fun988_ip = 75;
                                        continue _fun988
                                    }
                                case 65:
                                    var1 = var4.not;
                                    var11 = var1.bind(var4)();
                                case 75:
                                    var6 = new Array(0);
                                    var1 = var12.isZero;
                                    var1 = var1.bind(var12)();
                                    var5 = 0;
                                    var4 = 1;
                                    var10 = var12;
                                    var9 = var11;
                                    if (!var1) {
                                        _fun988_ip = 125;
                                        continue _fun988
                                    }
                                case 103:
                                    var1 = var11.isZero;
                                    var1 = var1.bind(var11)();
                                    var10 = var12;
                                    var9 = var11;
                                    if (var1) {
                                        _fun988_ip = 285;
                                        continue _fun988
                                    }
                                case 125:
                                    var11 = _closure2_slot31;
                                    var1 = _closure2_slot6;
                                    var12 = var11.bind(var7)(var10, var1);
                                    var11 = var12[var4];
                                    var1 = var11.toJSNumber;
                                    var11 = var1.bind(var11)();
                                    var14 = var11;
                                    if (!var0) {
                                        _fun988_ip = 171;
                                        continue _fun988
                                    }
                                case 159:
                                    var1 = _closure2_slot6;
                                    var1 = var1 - var4;
                                    var14 = var1 - var11;
                                case 171:
                                    var11 = _closure2_slot31;
                                    var1 = _closure2_slot6;
                                    var11 = var11.bind(var7)(var9, var1);
                                    var13 = var11[var4];
                                    var1 = var13.toJSNumber;
                                    var15 = var1.bind(var13)();
                                    var1 = var15;
                                    if (!var3) {
                                        _fun988_ip = 217;
                                        continue _fun988
                                    }
                                case 205:
                                    var13 = _closure2_slot6;
                                    var13 = var13 - var4;
                                    var1 = var13 - var15;
                                case 217:
                                    var12 = var12[var5];
                                    var11 = var11[var5];
                                    var13 = var6.push;
                                    var1 = var2.bind(var7)(var14, var1);
                                    var1 = var13.bind(var6)(var1);
                                    var1 = var12.isZero;
                                    var1 = var1.bind(var12)();
                                    var10 = var12;
                                    var9 = var11;
                                    if (!var1) {
                                        _fun988_ip = 125;
                                        continue _fun988
                                    }
                                case 263:
                                    var1 = var11.isZero;
                                    var1 = var1.bind(var11)();
                                    var10 = var12;
                                    var9 = var11;
                                    if (!var1) {
                                        _fun988_ip = 125;
                                        continue _fun988
                                    }
                                case 285:
                                    var1 = 0;
                                    if (!var0) {
                                        _fun988_ip = 293;
                                        continue _fun988
                                    }
                                case 290:
                                    var1 = var4;
                                case 293:
                                    var0 = 0;
                                    if (!var3) {
                                        _fun988_ip = 301;
                                        continue _fun988
                                    }
                                case 298:
                                    var0 = var4;
                                case 301:
                                    var0 = var2.bind(var7)(var1, var0);
                                    if (!(var5 === var0)) {
                                        _fun988_ip = 325;
                                        continue _fun988
                                    }
                                case 311:
                                    var0 = _closure1_slot0;
                                    var0 = var0.bind(var7)(var5);
                                    _fun988_ip = 343;
                                    continue _fun988;
                                case 325:
                                    var2 = _closure1_slot0;
                                    var1 = -1;
                                    var0 = var2.bind(var7)(var1);
                                case 343:
                                    var1 = var6.length;
                                    var3 = var1 - var4;
                                    var1 = var0;
                                    var0 = var1;
                                    if (!(var3 >= var5)) {
                                        _fun988_ip = 414;
                                        continue _fun988
                                    }
                                case 365:
                                    var10 = var1.multiply;
                                    var9 = _closure2_slot6;
                                    var11 = var10.bind(var1)(var9);
                                    var10 = var11.add;
                                    var12 = _closure1_slot0;
                                    var9 = var6[var3];
                                    var9 = var12.bind(var7)(var9);
                                    var1 = var10.bind(var11)(var9);
                                    var3 = var3 - var4;
                                    var0 = var1;
                                    if (var3 >= var5) {
                                        _fun988_ip = 365;
                                        continue _fun988
                                    }
                                case 414:
                                    return var0;
                            }
                        };
                        var _closure2_slot36 = var2;
                        var2 = function(arg0) { // Original name: roughLOB, environment: var1
                            _fun989: for (var _fun989_ip = 0;;) switch (_fun989_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.value;
                                    var1 = typeof var2;
                                    var0 = 'number';
                                    if (!(var0 !== var1)) {
                                        _fun989_ip = 94;
                                        continue _fun989
                                    }
                                case 19:
                                    var0 = 'bigint';
                                    if (!(var0 !== var1)) {
                                        _fun989_ip = 66;
                                        continue _fun989
                                    }
                                case 27:
                                    var0 = 0;
                                    var1 = var2[var0];
                                    var0 = 1;
                                    var3 = var2[var0];
                                    var0 = 10000000;
                                    var0 = var3 * var0;
                                    var1 = var1 + var0;
                                    var0 = 1073758208;
                                    var1 = var1 | var0;
                                    _fun989_ip = 92;
                                    continue _fun989;
                                case 66:
                                    var0 = global;
                                    var4 = var0.BigInt;
                                    var3 = _closure2_slot7;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var3);
                                    var1 = var2 | var0;
                                case 92:
                                    _fun989_ip = 105;
                                    continue _fun989;
                                case 94:
                                    var0 = _closure2_slot7;
                                    var1 = var2 | var0;
                                case 105:
                                    var0 = -var1;
                                    var0 = var1 & var0;
                                    return var0;
                            }
                        };
                        var _closure2_slot37 = var2;
                        var2 = function(arg0, arg1) { // Original name: integerLogarithm, environment: var1
                            _fun990: for (var _fun990_ip = 0;;) switch (_fun990_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg1;
                                    var0 = var2.compareTo;
                                    var0 = var0.bind(var2)(var5);
                                    var4 = 0;
                                    if (!(!(var0 <= var4))) {
                                        _fun990_ip = 52;
                                        continue _fun990
                                    }
                                case 23:
                                    var0 = {};
                                    var6 = _closure1_slot0;
                                    var3 = undefined;
                                    var1 = 1;
                                    var1 = var6.bind(var3)(var1);
                                    var0.p = var1;
                                    var0.e = var4;
                                    return var0;
                                case 52:
                                    var3 = _closure2_slot38;
                                    var0 = var2.square;
                                    var1 = var0.bind(var2)(var2);
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var5, var1);
                                    var1 = var0.p;
                                    var3 = var0.e;
                                    var0 = var1.multiply;
                                    var2 = var0.bind(var1)(var2);
                                    var0 = var2.compareTo;
                                    var0 = var0.bind(var2)(var5);
                                    if (!(!(var0 <= var4))) {
                                        _fun990_ip = 133;
                                        continue _fun990
                                    }
                                case 114:
                                    var0 = {};
                                    var0.p = var1;
                                    var1 = 2;
                                    var1 = var1 * var3;
                                    var0.e = var1;
                                    _fun990_ip = 160;
                                    continue _fun990;
                                case 133:
                                    var1 = {};
                                    var1.p = var2;
                                    var2 = 2;
                                    var3 = var2 * var3;
                                    var2 = 1;
                                    var2 = var3 + var2;
                                    var1.e = var2;
                                    var0 = var1;
                                case 160:
                                    return var0;
                            }
                        };
                        var _closure2_slot38 = var2;
                        var4 = function(arg0, arg1) { // Original name: max, environment: var1
                            _fun991: for (var _fun991_ip = 0;;) switch (_fun991_ip) {
                                case 0:
                                    var3 = _closure2_slot46;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var1 = var3.bind(var2)(var0);
                                    var0 = arg1;
                                    var0 = var3.bind(var2)(var0);
                                    var2 = var1.greater;
                                    var2 = var2.bind(var1)(var0);
                                    if (!var2) {
                                        _fun991_ip = 42;
                                        continue _fun991
                                    }
                                case 39:
                                    var0 = var1;
                                case 42:
                                    return var0;
                            }
                        };
                        var _closure2_slot39 = var4;
                        var3 = function(arg0, arg1) { // Original name: min, environment: var1
                            _fun992: for (var _fun992_ip = 0;;) switch (_fun992_ip) {
                                case 0:
                                    var3 = _closure2_slot46;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var1 = var3.bind(var2)(var0);
                                    var0 = arg1;
                                    var0 = var3.bind(var2)(var0);
                                    var2 = var1.lesser;
                                    var2 = var2.bind(var1)(var0);
                                    if (!var2) {
                                        _fun992_ip = 42;
                                        continue _fun992
                                    }
                                case 39:
                                    var0 = var1;
                                case 42:
                                    return var0;
                            }
                        };
                        var _closure2_slot40 = var3;
                        var2 = function(arg0, arg1) { // Original name: gcd, environment: var1
                            _fun993: for (var _fun993_ip = 0;;) switch (_fun993_ip) {
                                case 0:
                                    var2 = _closure2_slot46;
                                    var7 = undefined;
                                    var0 = arg0;
                                    var1 = var2.bind(var7)(var0);
                                    var0 = var1.abs;
                                    var0 = var0.bind(var1)();
                                    var1 = arg1;
                                    var2 = var2.bind(var7)(var1);
                                    var1 = var2.abs;
                                    var1 = var1.bind(var2)();
                                    var2 = var0.equals;
                                    var2 = var2.bind(var0)(var1);
                                    if (var2) {
                                        _fun993_ip = 482;
                                        continue _fun993
                                    }
                                case 62:
                                    var2 = var0.isZero;
                                    var2 = var2.bind(var0)();
                                    if (var2) {
                                        _fun993_ip = 480;
                                        continue _fun993
                                    }
                                case 78:
                                    var2 = var1.isZero;
                                    var2 = var2.bind(var1)();
                                    if (var2) {
                                        _fun993_ip = 478;
                                        continue _fun993
                                    }
                                case 94:
                                    var3 = _closure2_slot9;
                                    var2 = 1;
                                    var11 = var3[var2];
                                    var2 = var0.isEven;
                                    var2 = var2.bind(var0)();
                                    var3 = var0;
                                    var9 = var1;
                                    var5 = var11;
                                    if (!var2) {
                                        _fun993_ip = 271;
                                        continue _fun993
                                    }
                                case 130:
                                    var2 = var1.isEven;
                                    var2 = var2.bind(var1)();
                                    var10 = var0;
                                    var6 = var1;
                                    var4 = var11;
                                    var3 = var10;
                                    var9 = var6;
                                    var5 = var4;
                                    if (!var2) {
                                        _fun993_ip = 271;
                                        continue _fun993
                                    }
                                case 161:
                                    var12 = _closure2_slot40;
                                    var2 = _closure2_slot37;
                                    var11 = var2.bind(var7)(var10);
                                    var2 = var2.bind(var7)(var6);
                                    var11 = var12.bind(var7)(var11, var2);
                                    var2 = var10.divide;
                                    var13 = var2.bind(var10)(var11);
                                    var2 = var6.divide;
                                    var12 = var2.bind(var6)(var11);
                                    var2 = var4.multiply;
                                    var11 = var2.bind(var4)(var11);
                                    var2 = var13.isEven;
                                    var2 = var2.bind(var13)();
                                    var3 = var13;
                                    var9 = var12;
                                    var5 = var11;
                                    if (!var2) {
                                        _fun993_ip = 271;
                                        continue _fun993
                                    }
                                case 240:
                                    var2 = var12.isEven;
                                    var2 = var2.bind(var12)();
                                    var10 = var13;
                                    var6 = var12;
                                    var4 = var11;
                                    var3 = var10;
                                    var9 = var6;
                                    var5 = var4;
                                    if (var2) {
                                        _fun993_ip = 161;
                                        continue _fun993
                                    }
                                case 271:
                                    var2 = var3.isEven;
                                    var2 = var2.bind(var3)();
                                    var4 = var3;
                                    var6 = var4;
                                    var3 = var9;
                                    if (!var2) {
                                        _fun993_ip = 335;
                                        continue _fun993
                                    }
                                case 293:
                                    var10 = var4.divide;
                                    var2 = _closure2_slot37;
                                    var2 = var2.bind(var7)(var4);
                                    var10 = var10.bind(var4)(var2);
                                    var2 = var10.isEven;
                                    var2 = var2.bind(var10)();
                                    var4 = var10;
                                    var6 = var4;
                                    var3 = var9;
                                    if (var2) {
                                        _fun993_ip = 293;
                                        continue _fun993
                                    }
                                case 335:
                                    var2 = var3.isEven;
                                    var4 = var2.bind(var3)();
                                    var9 = var3;
                                    var2 = var9;
                                    if (!var4) {
                                        _fun993_ip = 393;
                                        continue _fun993
                                    }
                                case 354:
                                    var10 = var9.divide;
                                    var4 = _closure2_slot37;
                                    var4 = var4.bind(var7)(var9);
                                    var10 = var10.bind(var9)(var4);
                                    var4 = var10.isEven;
                                    var4 = var4.bind(var10)();
                                    var9 = var10;
                                    var2 = var9;
                                    if (var4) {
                                        _fun993_ip = 354;
                                        continue _fun993
                                    }
                                case 393:
                                    var4 = var6.greater;
                                    var10 = var4.bind(var6)(var2);
                                    var4 = var6;
                                    var9 = var2;
                                    if (!var10) {
                                        _fun993_ip = 419;
                                        continue _fun993
                                    }
                                case 413:
                                    var4 = var2;
                                    var9 = var6;
                                case 419:
                                    var2 = var9.subtract;
                                    var9 = var2.bind(var9)(var4);
                                    var2 = var9.isZero;
                                    var2 = var2.bind(var9)();
                                    var6 = var4;
                                    var3 = var9;
                                    if (!var2) {
                                        _fun993_ip = 335;
                                        continue _fun993
                                    }
                                case 449:
                                    var2 = var5.isUnit;
                                    var3 = var2.bind(var5)();
                                    var2 = var4;
                                    if (var3) {
                                        _fun993_ip = 476;
                                        continue _fun993
                                    }
                                case 465:
                                    var3 = var4.multiply;
                                    var2 = var3.bind(var4)(var5);
                                case 476:
                                    return var2;
                                case 478:
                                    return var0;
                                case 480:
                                    return var1;
                                case 482:
                                    return var0;
                            }
                        };
                        var _closure2_slot41 = var2;
                        var6 = function(arg0, arg1, arg2) { // Original name: parseBaseFromArray, environment: var1
                            _fun994: for (var _fun994_ip = 0;;) switch (_fun994_ip) {
                                case 0:
                                    var6 = arg0;
                                    var5 = arg1;
                                    var0 = _closure2_slot9;
                                    var4 = 0;
                                    var2 = var0[var4];
                                    var1 = 1;
                                    var3 = var0[var1];
                                    var0 = var6.length;
                                    var1 = var0 - var1;
                                    var0 = var2;
                                    var2 = var0;
                                    if (!(var1 >= var4)) {
                                        _fun994_ip = 91;
                                        continue _fun994
                                    }
                                case 45:
                                    var8 = var0.add;
                                    var9 = var6[var1];
                                    var7 = var9.times;
                                    var7 = var7.bind(var9)(var3);
                                    var0 = var8.bind(var0)(var7);
                                    var8 = var3.times;
                                    var3 = var8.bind(var3)(var5);
                                    var1 = var1 - 1;
                                    var2 = var0;
                                    if (var1 >= var4) {
                                        _fun994_ip = 45;
                                        continue _fun994
                                    }
                                case 91:
                                    var1 = arg2;
                                    var0 = var2;
                                    if (!var1) {
                                        _fun994_ip = 110;
                                        continue _fun994
                                    }
                                case 100:
                                    var1 = var2.negate;
                                    var0 = var1.bind(var2)();
                                case 110:
                                    return var0;
                            }
                        };
                        var _closure2_slot42 = var6;
                        var6 = function(arg0, arg1) { // Original name: toBase, environment: var1
                            _fun995: for (var _fun995_ip = 0;;) switch (_fun995_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure1_slot0;
                                    var9 = undefined;
                                    var0 = arg1;
                                    var8 = var2.bind(var9)(var0);
                                    var0 = var8.isZero;
                                    var0 = var0.bind(var8)();
                                    if (var0) {
                                        _fun995_ip = 795;
                                        continue _fun995
                                    }
                                case 36:
                                    var2 = var8.equals;
                                    var0 = -1;
                                    var0 = var2.bind(var8)(var0);
                                    if (var0) {
                                        _fun995_ip = 471;
                                        continue _fun995
                                    }
                                case 59:
                                    var0 = var1.isNegative;
                                    var2 = var0.bind(var1)();
                                    if (!var2) {
                                        _fun995_ip = 82;
                                        continue _fun995
                                    }
                                case 72:
                                    var0 = var8.isPositive;
                                    var2 = var0.bind(var8)();
                                case 82:
                                    var3 = false;
                                    var10 = var1;
                                    var0 = false;
                                    if (!var2) {
                                        _fun995_ip = 104;
                                        continue _fun995
                                    }
                                case 92:
                                    var2 = var1.abs;
                                    var10 = var2.bind(var1)();
                                    var0 = true;
                                case 104:
                                    var2 = var8.isUnit;
                                    var2 = var2.bind(var8)();
                                    if (var2) {
                                        _fun995_ip = 346;
                                        continue _fun995
                                    }
                                case 120:
                                    var5 = new Array(0);
                                    var2 = var10.isNegative;
                                    var2 = var2.bind(var10)();
                                    var7 = var10;
                                    if (var2) {
                                        _fun995_ip = 166;
                                        continue _fun995
                                    }
                                case 140:
                                    var2 = var10.compareAbs;
                                    var4 = var2.bind(var10)(var8);
                                    var2 = 0;
                                    var7 = var10;
                                    var6 = var7;
                                    if (!(var4 >= var2)) {
                                        _fun995_ip = 303;
                                        continue _fun995
                                    }
                                case 166:
                                    var2 = var7.divmod;
                                    var2 = var2.bind(var7)(var8);
                                    var13 = var2.quotient;
                                    var11 = var2.remainder;
                                    var2 = var11.isNegative;
                                    var2 = var2.bind(var11)();
                                    var4 = var13;
                                    var12 = var11;
                                    if (!var2) {
                                        _fun995_ip = 238;
                                        continue _fun995
                                    }
                                case 208:
                                    var2 = var8.minus;
                                    var11 = var2.bind(var8)(var11);
                                    var2 = var11.abs;
                                    var12 = var2.bind(var11)();
                                    var11 = var13.next;
                                    var4 = var11.bind(var13)();
                                case 238:
                                    var11 = var5.push;
                                    var2 = var12.toJSNumber;
                                    var2 = var2.bind(var12)();
                                    var2 = var11.bind(var5)(var2);
                                    var2 = var4.isNegative;
                                    var2 = var2.bind(var4)();
                                    var11 = var4;
                                    var7 = var11;
                                    if (var2) {
                                        _fun995_ip = 166;
                                        continue _fun995
                                    }
                                case 277:
                                    var2 = var11.compareAbs;
                                    var4 = var2.bind(var11)(var8);
                                    var2 = 0;
                                    var7 = var11;
                                    var6 = var7;
                                    if (var4 >= var2) {
                                        _fun995_ip = 166;
                                        continue _fun995
                                    }
                                case 303:
                                    var4 = var5.push;
                                    var2 = var6.toJSNumber;
                                    var2 = var2.bind(var6)();
                                    var2 = var4.bind(var5)(var2);
                                    var2 = {};
                                    var4 = var5.reverse;
                                    var4 = var4.bind(var5)();
                                    var2.value = var4;
                                    var2.isNegative = var0;
                                    return var2;
                                case 346:
                                    var2 = var10.isZero;
                                    var4 = var2.bind(var10)();
                                    var2 = {};
                                    if (var4) {
                                        _fun995_ip = 447;
                                        continue _fun995
                                    }
                                case 361:
                                    var4 = global;
                                    var8 = var4.Array;
                                    var7 = var8.apply;
                                    var6 = var4.Array;
                                    var5 = var10.toJSNumber;
                                    var5 = var5.bind(var10)();
                                    var6 = var6.bind(var9)(var5);
                                    var5 = null;
                                    var7 = var7.bind(var8)(var5, var6);
                                    var6 = var7.map;
                                    var4 = var4.Number;
                                    var4 = var4.prototype;
                                    var5 = var4.valueOf;
                                    var4 = 1;
                                    var4 = var6.bind(var7)(var5, var4);
                                    var2.value = var4;
                                    var2.isNegative = var0;
                                    var0 = var2;
                                    _fun995_ip = 469;
                                    continue _fun995;
                                case 447:
                                    var4 = [0];
                                    var2.value = var4;
                                    var2.isNegative = var3;
                                    var0 = var2;
                                case 469:
                                    return var0;
                                case 471:
                                    var0 = var1.isZero;
                                    var0 = var0.bind(var1)();
                                    if (var0) {
                                        _fun995_ip = 770;
                                        continue _fun995
                                    }
                                case 487:
                                    var0 = var1.isNegative;
                                    var0 = var0.bind(var1)();
                                    if (var0) {
                                        _fun995_ip = 649;
                                        continue _fun995
                                    }
                                case 503:
                                    var0 = global;
                                    var5 = var0.Array;
                                    var4 = var5.apply;
                                    var3 = var0.Array;
                                    var2 = var1.toJSNumber;
                                    var6 = var2.bind(var1)();
                                    var2 = 1;
                                    var2 = var6 - var2;
                                    var3 = var3.bind(var9)(var2);
                                    var2 = null;
                                    var4 = var4.bind(var5)(var2, var3);
                                    var3 = var4.map;
                                    var0 = var0.Array;
                                    var0 = var0.prototype;
                                    var2 = var0.valueOf;
                                    var0 = [0, 1];
                                    var5 = var3.bind(var4)(var2, var0);
                                    var2 = var5.unshift;
                                    var0 = [1];
                                    var0 = var2.bind(var5)(var0);
                                    var0 = {};
                                    var2 = new Array(0);
                                    var4 = var2.concat;
                                    var3 = var4.apply;
                                    var2 = new Array(0);
                                    var2 = var3.bind(var4)(var2, var5);
                                    var0.value = var2;
                                    var2 = false;
                                    var0.isNegative = var2;
                                    return var0;
                                case 649:
                                    var0 = {};
                                    var2 = new Array(0);
                                    var5 = var2.concat;
                                    var4 = var5.apply;
                                    var2 = global;
                                    var8 = var2.Array;
                                    var7 = var8.apply;
                                    var6 = var2.Array;
                                    var3 = var1.toJSNumber;
                                    var3 = var3.bind(var1)();
                                    var3 = -var3;
                                    var6 = var6.bind(var9)(var3);
                                    var3 = null;
                                    var7 = var7.bind(var8)(var3, var6);
                                    var6 = var7.map;
                                    var2 = var2.Array;
                                    var2 = var2.prototype;
                                    var3 = var2.valueOf;
                                    var2 = [1, 0];
                                    var3 = var6.bind(var7)(var3, var2);
                                    var2 = new Array(0);
                                    var2 = var4.bind(var5)(var2, var3);
                                    var0.value = var2;
                                    var2 = false;
                                    var0.isNegative = var2;
                                    return var0;
                                case 770:
                                    var0 = {};
                                    var2 = [0];
                                    var0.value = var2;
                                    var2 = false;
                                    var0.isNegative = var2;
                                    return var0;
                                case 795:
                                    var0 = var1.isZero;
                                    var0 = var0.bind(var1)();
                                    if (var0) {
                                        _fun995_ip = 844;
                                        continue _fun995
                                    }
                                case 808:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var15 = 'Cannot convert nonzero numbers to base 0.';
                                    var16 = var1;
                                    var0 = new var16[var2](var15, var14);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 844:
                                    var0 = {};
                                    var1 = [0];
                                    var0.value = var1;
                                    var1 = false;
                                    var0.isNegative = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot43 = var6;
                        var6 = function(arg0, arg1, arg2) { // Original name: toBaseString, environment: var1
                            _fun996: for (var _fun996_ip = 0;;) switch (_fun996_ip) {
                                case 0:
                                    var1 = arg2;
                                    var _closure3_slot0 = var1;
                                    var4 = _closure2_slot43;
                                    var3 = undefined;
                                    var2 = arg0;
                                    var1 = arg1;
                                    var2 = var4.bind(var3)(var2, var1);
                                    var4 = var2.isNegative;
                                    var3 = '';
                                    var1 = var3;
                                    if (!var4) {
                                        _fun996_ip = 50;
                                        continue _fun996
                                    }
                                case 46:
                                    var1 = '-';
                                case 50:
                                    var4 = var2.value;
                                    var2 = var4.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun997: for (var _fun997_ip = 0;;) switch (_fun997_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = _closure3_slot0;
                                                if (var1) {
                                                    _fun997_ip = 20;
                                                    continue _fun997
                                                }
                                            case 13:
                                                var1 = _closure2_slot2;
                                            case 20:
                                                var0 = var1.length;
                                                if (!(!(var2 < var0))) {
                                                    _fun997_ip = 47;
                                                    continue _fun997
                                                }
                                            case 29:
                                                var0 = '<';
                                                var3 = var0 + var2;
                                                var0 = '>';
                                                var0 = var3 + var0;
                                                _fun997_ip = 51;
                                                continue _fun997;
                                            case 47:
                                                var0 = var1[var2];
                                            case 51:
                                                return var0;
                                        }
                                    };
                                    var2 = var2.bind(var4)(var0);
                                    var0 = var2.join;
                                    var0 = var0.bind(var2)(var3);
                                    var0 = var1 + var0;
                                    return var0;
                            }
                        };
                        var _closure2_slot44 = var6;
                        var6 = function(arg0) { // Original name: parseStringValue, environment: var1
                            _fun998: for (var _fun998_ip = 0;;) switch (_fun998_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure2_slot13;
                                    var0 = var3 - 0;
                                    var4 = undefined;
                                    var0 = var2.bind(var4)(var0);
                                    if (var0) {
                                        _fun998_ip = 682;
                                        continue _fun998
                                    }
                                case 26:
                                    var12 = 0;
                                    var0 = var3[var12];
                                    var9 = '-';
                                    var10 = var9 === var0;
                                    var2 = var3;
                                    if (!var10) {
                                        _fun998_ip = 59;
                                        continue _fun998
                                    }
                                case 46:
                                    var5 = var3.slice;
                                    var0 = 1;
                                    var2 = var5.bind(var3)(var0);
                                case 59:
                                    var5 = var2.split;
                                    var0 = /e/i;
                                    var6 = var5.bind(var2)(var0);
                                    var0 = var6.length;
                                    var5 = 2;
                                    if (!(!(var0 > var5))) {
                                        _fun998_ip = 628;
                                        continue _fun998
                                    }
                                case 98:
                                    var0 = var6.length;
                                    if (!(var5 === var0)) {
                                        _fun998_ip = 310;
                                        continue _fun998
                                    }
                                case 110:
                                    var13 = 1;
                                    var7 = var6[var13];
                                    var8 = var7[var12];
                                    var5 = '+';
                                    var0 = var7;
                                    if (!(var5 === var8)) {
                                        _fun998_ip = 142;
                                        continue _fun998
                                    }
                                case 132:
                                    var5 = var7.slice;
                                    var0 = var5.bind(var7)(var13);
                                case 142:
                                    var7 = var0 - 0;
                                    var0 = _closure2_slot18;
                                    var0 = var0.bind(var4)(var7);
                                    if (!(var7 === var0)) {
                                        _fun998_ip = 578;
                                        continue _fun998
                                    }
                                case 161:
                                    var0 = _closure2_slot13;
                                    var0 = var0.bind(var4)(var7);
                                    if (!var0) {
                                        _fun998_ip = 578;
                                        continue _fun998
                                    }
                                case 176:
                                    var16 = var6[var12];
                                    var5 = var16.indexOf;
                                    var0 = '.';
                                    var8 = var5.bind(var16)(var0);
                                    var0 = var7;
                                    var5 = var16;
                                    if (!(var8 >= var12)) {
                                        _fun998_ip = 251;
                                        continue _fun998
                                    }
                                case 205:
                                    var11 = var16.length;
                                    var11 = var11 - var8;
                                    var11 = var11 - var13;
                                    var0 = var7 - var11;
                                    var14 = var16.slice;
                                    var14 = var14.bind(var16)(var12, var8);
                                    var15 = var16.slice;
                                    var8 = var8 + var13;
                                    var8 = var15.bind(var16)(var8);
                                    var5 = var14 + var8;
                                case 251:
                                    if (!(!(var0 < var12))) {
                                        _fun998_ip = 542;
                                        continue _fun998
                                    }
                                case 258:
                                    var8 = global;
                                    var11 = var8.Array;
                                    var8 = var11.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var11
                                        }
                                    });
                                    var18 = var0 + var13;
                                    var19 = var8;
                                    var0 = new var19[var11](var18, var17);
                                    var11 = var0 instanceof Object ? var0 : var8;
                                    var8 = var11.join;
                                    var0 = '0';
                                    var0 = var8.bind(var11)(var0);
                                    var2 = var5 + var0;
                                case 310:
                                    var5 = /^([0-9][0-9]*)$/;
                                    var0 = var5.test;
                                    var0 = var0.bind(var5)(var2);
                                    var8 = var2;
                                    if (var0) {
                                        _fun998_ip = 380;
                                        continue _fun998
                                    }
                                case 340:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var0 = 'Invalid integer: ';
                                    var18 = var0 + var8;
                                    var2 = var5.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var19 = var2;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 380:
                                    var0 = _closure2_slot3;
                                    if (var0) {
                                        _fun998_ip = 493;
                                        continue _fun998
                                    }
                                case 387:
                                    var5 = new Array(0);
                                    var11 = var8.length;
                                    var2 = 7;
                                    var0 = var11 - var2;
                                    if (!(var11 > var12)) {
                                        _fun998_ip = 452;
                                        continue _fun998
                                    }
                                case 407:
                                    var14 = var5.push;
                                    var13 = var8.slice;
                                    var13 = var13.bind(var8)(var0, var11);
                                    var13 = var13 - 0;
                                    var13 = var14.bind(var5)(var13);
                                    var0 = var0 - var2;
                                    var13 = var11;
                                    if (!(var0 < var12)) {
                                        _fun998_ip = 444;
                                        continue _fun998
                                    }
                                case 442:
                                    var0 = 0;
                                case 444:
                                    var11 = var13 - var2;
                                    if (var11 > var12) {
                                        _fun998_ip = 407;
                                        continue _fun998
                                    }
                                case 452:
                                    var0 = _closure2_slot16;
                                    var0 = var0.bind(var4)(var5);
                                    var0 = _closure2_slot10;
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var19 = var2;
                                    var18 = var5;
                                    var17 = var10;
                                    var0 = new var19[var0](var18, var17, var16);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    return var0;
                                case 493:
                                    var5 = _closure2_slot12;
                                    var0 = global;
                                    var2 = var0.BigInt;
                                    var0 = var8;
                                    if (!var10) {
                                        _fun998_ip = 515;
                                        continue _fun998
                                    }
                                case 511:
                                    var0 = var9 + var8;
                                case 515:
                                    var18 = var2.bind(var4)(var0);
                                    var2 = var5.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var19 = var2;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    return var0;
                                case 542:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var0 = var5.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var18 = 'Cannot include negative exponent part for integers';
                                    var19 = var2;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 578:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var0 = var5.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var0 = 'Invalid integer: ';
                                    var7 = var0 + var7;
                                    var0 = ' is not a valid exponent.';
                                    var18 = var7 + var0;
                                    var19 = var2;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 628:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var2 = var6.join;
                                    var0 = 'e';
                                    var2 = var2.bind(var6)(var0);
                                    var0 = 'Invalid integer: ';
                                    var18 = var0 + var2;
                                    var2 = var5.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var19 = var2;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 682:
                                    var2 = var3 - 0;
                                    var0 = _closure2_slot18;
                                    var0 = var0.bind(var4)(var2);
                                    if (!(var2 !== var0)) {
                                        _fun998_ip = 738;
                                        continue _fun998
                                    }
                                case 698:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var0 = 'Invalid integer: ';
                                    var18 = var0 + var3;
                                    var3 = var5.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var19 = var3;
                                    var0 = new var19[var5](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    throw var0;
                                case 738:
                                    var0 = _closure2_slot3;
                                    if (var0) {
                                        _fun998_ip = 774;
                                        continue _fun998
                                    }
                                case 745:
                                    var0 = _closure2_slot11;
                                    var3 = var0.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var19 = var3;
                                    var18 = var2;
                                    var0 = new var19[var0](var18, var17);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun998_ip = 811;
                                    continue _fun998;
                                case 774:
                                    var3 = _closure2_slot12;
                                    var1 = global;
                                    var1 = var1.BigInt;
                                    var18 = var1.bind(var4)(var2);
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var19 = var2;
                                    var1 = new var19[var3](var18, var17);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 811:
                                    return var0;
                            }
                        };
                        var _closure2_slot45 = var6;
                        var10 = function(arg0) { // Original name: parseValue, environment: var1
                            _fun999: for (var _fun999_ip = 0;;) switch (_fun999_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = typeof var5;
                                    var0 = 'number';
                                    if (!(var0 !== var2)) {
                                        _fun999_ip = 84;
                                        continue _fun999
                                    }
                                case 14:
                                    var0 = 'string';
                                    if (!(var0 !== var2)) {
                                        _fun999_ip = 65;
                                        continue _fun999
                                    }
                                case 22:
                                    var1 = 'bigint';
                                    var0 = var5;
                                    if (!(var1 === var2)) {
                                        _fun999_ip = 63;
                                        continue _fun999
                                    }
                                case 33:
                                    var1 = _closure2_slot12;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var8 = var2;
                                    var7 = var5;
                                    var1 = new var8[var1](var7, var6);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 63:
                                    _fun999_ip = 79;
                                    continue _fun999;
                                case 65:
                                    var2 = _closure2_slot45;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var5);
                                case 79:
                                    _fun999_ip = 252;
                                    continue _fun999;
                                case 84:
                                    var1 = _closure2_slot3;
                                    if (var1) {
                                        _fun999_ip = 210;
                                        continue _fun999
                                    }
                                case 94:
                                    var1 = _closure2_slot13;
                                    var4 = undefined;
                                    var1 = var1.bind(var4)(var5);
                                    if (var1) {
                                        _fun999_ip = 128;
                                        continue _fun999
                                    }
                                case 108:
                                    var3 = _closure2_slot45;
                                    var1 = var5.toString;
                                    var1 = var1.bind(var5)();
                                    var1 = var3.bind(var4)(var1);
                                    _fun999_ip = 249;
                                    continue _fun999;
                                case 128:
                                    var3 = _closure2_slot18;
                                    var3 = var3.bind(var4)(var5);
                                    if (!(var5 === var3)) {
                                        _fun999_ip = 170;
                                        continue _fun999
                                    }
                                case 141:
                                    var3 = _closure2_slot11;
                                    var4 = var3.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var8 = var4;
                                    var7 = var5;
                                    var3 = new var8[var3](var7, var6);
                                    var1 = var3 instanceof Object ? var3 : var4;
                                    _fun999_ip = 249;
                                    continue _fun999;
                                case 170:
                                    var3 = global;
                                    var6 = var3.Error;
                                    var3 = ' is not an integer.';
                                    var7 = var5 + var3;
                                    var4 = var6.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var8 = var4;
                                    var3 = new var8[var6](var7, var6);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    throw var3;
                                case 210:
                                    var4 = _closure2_slot12;
                                    var2 = global;
                                    var3 = var2.BigInt;
                                    var2 = undefined;
                                    var7 = var3.bind(var2)(var5);
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var8 = var3;
                                    var2 = new var8[var4](var7, var6);
                                    var1 = var2 instanceof Object ? var2 : var3;
                                case 249:
                                    var0 = var1;
                                case 252:
                                    return var0;
                            }
                        };
                        var _closure2_slot46 = var10;
                        var9 = undefined;
                        var6 = 9007199254740992.0;
                        var6 = var11.bind(var9)(var6);
                        var _closure2_slot1 = var6;
                        var6 = '0123456789abcdefghijklmnopqrstuvwxyz';
                        var _closure2_slot2 = var6;
                        var6 = global;
                        var11 = var6.BigInt;
                        var12 = 'function';
                        var11 = typeof var11;
                        var11 = var12 === var11;
                        var _closure2_slot3 = var11;
                        var13 = var6.Object;
                        var12 = var13.create;
                        var11 = var0.prototype;
                        var11 = var12.bind(var13)(var11);
                        var8.prototype = var11;
                        var13 = var6.Object;
                        var12 = var13.create;
                        var11 = var0.prototype;
                        var11 = var12.bind(var13)(var11);
                        var7.prototype = var11;
                        var12 = var6.Object;
                        var11 = var12.create;
                        var6 = var0.prototype;
                        var6 = var11.bind(var12)(var6);
                        var5.prototype = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1000: for (var _fun1000_ip = 0;;) switch (_fun1000_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = _closure2_slot46;
                                    var7 = undefined;
                                    var0 = arg0;
                                    var3 = var3.bind(var7)(var0);
                                    var4 = var2.sign;
                                    var0 = var3.sign;
                                    if (!(var4 === var0)) {
                                        _fun1000_ip = 154;
                                        continue _fun1000
                                    }
                                case 36:
                                    var5 = var2.value;
                                    var9 = var3.value;
                                    var0 = var3.isSmall;
                                    var6 = _closure2_slot10;
                                    if (var0) {
                                        _fun1000_ip = 97;
                                        continue _fun1000
                                    }
                                case 59:
                                    var0 = _closure2_slot20;
                                    var11 = var0.bind(var7)(var5, var9);
                                    var10 = var2.sign;
                                    var4 = var6.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var12 = var4;
                                    var0 = new var12[var6](var11, var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var4;
                                    _fun1000_ip = 152;
                                    continue _fun1000;
                                case 97:
                                    var4 = _closure2_slot21;
                                    var1 = global;
                                    var8 = var1.Math;
                                    var1 = var8.abs;
                                    var1 = var1.bind(var8)(var9);
                                    var11 = var4.bind(var7)(var5, var1);
                                    var10 = var2.sign;
                                    var4 = var6.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var12 = var4;
                                    var1 = new var12[var6](var11, var10, var9);
                                    var0 = var1 instanceof Object ? var1 : var4;
                                case 152:
                                    return var0;
                                case 154:
                                    var1 = var2.subtract;
                                    var0 = var3.negate;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var11.add = var6;
                        var11 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.add;
                        var11.plus = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1001: for (var _fun1001_ip = 0;;) switch (_fun1001_ip) {
                                case 0:
                                    var2 = this;
                                    var1 = _closure2_slot46;
                                    var10 = undefined;
                                    var0 = arg0;
                                    var3 = var1.bind(var10)(var0);
                                    var1 = var2.value;
                                    var5 = 0;
                                    var6 = var1 < var5;
                                    var0 = var3.sign;
                                    if (!(var6 === var0)) {
                                        _fun1001_ip = 194;
                                        continue _fun1001
                                    }
                                case 44:
                                    var0 = var3.value;
                                    var6 = var3.isSmall;
                                    var9 = var0;
                                    if (!var6) {
                                        _fun1001_ip = 105;
                                        continue _fun1001
                                    }
                                case 61:
                                    var7 = _closure2_slot13;
                                    var6 = var1 + var0;
                                    var6 = var7.bind(var10)(var6);
                                    if (var6) {
                                        _fun1001_ip = 164;
                                        continue _fun1001
                                    }
                                case 77:
                                    var7 = _closure2_slot14;
                                    var6 = global;
                                    var8 = var6.Math;
                                    var6 = var8.abs;
                                    var6 = var6.bind(var8)(var0);
                                    var9 = var7.bind(var10)(var6);
                                case 105:
                                    var8 = _closure2_slot10;
                                    var7 = _closure2_slot21;
                                    var6 = global;
                                    var11 = var6.Math;
                                    var6 = var11.abs;
                                    var6 = var6.bind(var11)(var1);
                                    var13 = var7.bind(var10)(var9, var6);
                                    var12 = var1 < var5;
                                    var6 = var8.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var14 = var6;
                                    var5 = new var14[var8](var13, var12, var11);
                                    var5 = var5 instanceof Object ? var5 : var6;
                                    return var5;
                                case 164:
                                    var4 = _closure2_slot11;
                                    var13 = var1 + var0;
                                    var1 = var4.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var14 = var1;
                                    var0 = new var14[var4](var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                                case 194:
                                    var1 = var2.subtract;
                                    var0 = var3.negate;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var11.add = var6;
                        var11 = var7.prototype;
                        var6 = var7.prototype;
                        var6 = var6.add;
                        var11.plus = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot12;
                            var1 = this;
                            var1 = var1.value;
                            var4 = _closure2_slot46;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.value;
                            var5 = var1 + var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.add = var6;
                        var11 = var5.prototype;
                        var6 = var5.prototype;
                        var6 = var6.add;
                        var11.plus = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1003: for (var _fun1003_ip = 0;;) switch (_fun1003_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = _closure2_slot46;
                                    var7 = undefined;
                                    var0 = arg0;
                                    var3 = var3.bind(var7)(var0);
                                    var4 = var2.sign;
                                    var0 = var3.sign;
                                    if (!(var4 === var0)) {
                                        _fun1003_ip = 239;
                                        continue _fun1003
                                    }
                                case 39:
                                    var6 = var2.value;
                                    var8 = var3.value;
                                    var0 = var3.isSmall;
                                    if (var0) {
                                        _fun1003_ip = 201;
                                        continue _fun1003
                                    }
                                case 61:
                                    var9 = var2.sign;
                                    var0 = _closure2_slot32;
                                    var4 = var0.bind(var7)(var6, var8);
                                    var0 = 0;
                                    if (!(!(var4 >= var0))) {
                                        _fun1003_ip = 98;
                                        continue _fun1003
                                    }
                                case 83:
                                    var0 = _closure2_slot22;
                                    var4 = var0.bind(var7)(var8, var6);
                                    var5 = !var9;
                                    _fun1003_ip = 111;
                                    continue _fun1003;
                                case 98:
                                    var0 = _closure2_slot22;
                                    var4 = var0.bind(var7)(var6, var8);
                                    var5 = var9;
                                case 111:
                                    var0 = _closure2_slot15;
                                    var4 = var0.bind(var7)(var4);
                                    var9 = 'number';
                                    var0 = typeof var4;
                                    if (!(var9 !== var0)) {
                                        _fun1003_ip = 163;
                                        continue _fun1003
                                    }
                                case 131:
                                    var0 = _closure2_slot10;
                                    var9 = var0.prototype;
                                    var9 = Object.create(var9, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var13 = var9;
                                    var12 = var4;
                                    var11 = var5;
                                    var0 = new var13[var0](var12, var11, var10);
                                    var0 = var0 instanceof Object ? var0 : var9;
                                    _fun1003_ip = 199;
                                    continue _fun1003;
                                case 163:
                                    var9 = var4;
                                    if (!var5) {
                                        _fun1003_ip = 172;
                                        continue _fun1003
                                    }
                                case 169:
                                    var9 = -var4;
                                case 172:
                                    var4 = _closure2_slot11;
                                    var5 = var4.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = var5;
                                    var12 = var9;
                                    var4 = new var13[var4](var12, var11);
                                    var0 = var4 instanceof Object ? var4 : var5;
                                case 199:
                                    _fun1003_ip = 237;
                                    continue _fun1003;
                                case 201:
                                    var5 = _closure2_slot23;
                                    var1 = global;
                                    var4 = var1.Math;
                                    var1 = var4.abs;
                                    var4 = var1.bind(var4)(var8);
                                    var1 = var2.sign;
                                    var0 = var5.bind(var7)(var6, var4, var1);
                                case 237:
                                    return var0;
                                case 239:
                                    var1 = var2.add;
                                    var0 = var3.negate;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var11.subtract = var6;
                        var11 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.subtract;
                        var11.minus = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1004: for (var _fun1004_ip = 0;;) switch (_fun1004_ip) {
                                case 0:
                                    var2 = this;
                                    var1 = _closure2_slot46;
                                    var8 = undefined;
                                    var0 = arg0;
                                    var3 = var1.bind(var8)(var0);
                                    var4 = var2.value;
                                    var0 = 0;
                                    var6 = var4 < var0;
                                    var1 = var3.sign;
                                    if (!(var6 === var1)) {
                                        _fun1004_ip = 121;
                                        continue _fun1004
                                    }
                                case 41:
                                    var1 = var3.value;
                                    var6 = var3.isSmall;
                                    if (var6) {
                                        _fun1004_ip = 91;
                                        continue _fun1004
                                    }
                                case 55:
                                    var7 = _closure2_slot23;
                                    var6 = global;
                                    var9 = var6.Math;
                                    var6 = var9.abs;
                                    var6 = var6.bind(var9)(var4);
                                    var0 = var4 >= var0;
                                    var0 = var7.bind(var8)(var1, var6, var0);
                                    _fun1004_ip = 119;
                                    continue _fun1004;
                                case 91:
                                    var5 = _closure2_slot11;
                                    var12 = var4 - var1;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var13 = var4;
                                    var1 = new var13[var5](var12, var11);
                                    var0 = var1 instanceof Object ? var1 : var4;
                                case 119:
                                    return var0;
                                case 121:
                                    var1 = var2.add;
                                    var0 = var3.negate;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var11.subtract = var6;
                        var11 = var7.prototype;
                        var6 = var7.prototype;
                        var6 = var6.subtract;
                        var11.minus = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot12;
                            var1 = this;
                            var1 = var1.value;
                            var4 = _closure2_slot46;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.value;
                            var5 = var1 - var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.subtract = var6;
                        var11 = var5.prototype;
                        var6 = var5.prototype;
                        var6 = var6.subtract;
                        var11.minus = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var3 = _closure2_slot10;
                            var5 = var0.value;
                            var0 = var0.sign;
                            var4 = !var0;
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.negate = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.sign;
                            var3 = _closure2_slot11;
                            var0 = var0.value;
                            var4 = -var0;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = var2;
                            var0 = new var5[var3](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var1 = !var1;
                            var0.sign = var1;
                            return var0;
                        };
                        var11.negate = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var2 = _closure2_slot12;
                            var0 = this;
                            var0 = var0.value;
                            var3 = -var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.negate = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var3 = _closure2_slot10;
                            var0 = this;
                            var5 = var0.value;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = false;
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.abs = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var2 = _closure2_slot11;
                            var0 = global;
                            var3 = var0.Math;
                            var1 = var3.abs;
                            var0 = this;
                            var0 = var0.value;
                            var4 = var1.bind(var3)(var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = var1;
                            var0 = new var5[var2](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.abs = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            _fun1011: for (var _fun1011_ip = 0;;) switch (_fun1011_ip) {
                                case 0:
                                    var1 = this;
                                    var2 = _closure2_slot12;
                                    var3 = var1.value;
                                    var0 = 0;
                                    if (!(!(var3 >= var0))) {
                                        _fun1011_ip = 31;
                                        continue _fun1011
                                    }
                                case 21:
                                    var0 = var1.value;
                                    var0 = -var0;
                                    _fun1011_ip = 36;
                                    continue _fun1011;
                                case 31:
                                    var0 = var1.value;
                                case 36:
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var5 = var1;
                                    var4 = var0;
                                    var0 = new var5[var2](var4, var3);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                            }
                        };
                        var11.abs = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1012: for (var _fun1012_ip = 0;;) switch (_fun1012_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = _closure2_slot46;
                                    var8 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var8)(var1);
                                    var7 = var2.value;
                                    var5 = var1.value;
                                    var4 = var2.sign;
                                    var3 = var1.sign;
                                    var6 = var4 !== var3;
                                    var1 = var1.isSmall;
                                    var9 = var5;
                                    if (!var1) {
                                        _fun1012_ip = 131;
                                        continue _fun1012
                                    }
                                case 58:
                                    var1 = 0;
                                    if (!(var1 !== var5)) {
                                        _fun1012_ip = 332;
                                        continue _fun1012
                                    }
                                case 67:
                                    var3 = 1;
                                    if (!(var3 !== var5)) {
                                        _fun1012_ip = 330;
                                        continue _fun1012
                                    }
                                case 77:
                                    var3 = -1;
                                    if (!(var3 !== var5)) {
                                        _fun1012_ip = 318;
                                        continue _fun1012
                                    }
                                case 90:
                                    var3 = global;
                                    var4 = var3.Math;
                                    var3 = var4.abs;
                                    var4 = var3.bind(var4)(var5);
                                    var3 = 10000000;
                                    if (!(!(var4 < var3))) {
                                        _fun1012_ip = 279;
                                        continue _fun1012
                                    }
                                case 122:
                                    var3 = _closure2_slot14;
                                    var9 = var3.bind(var8)(var4);
                                case 131:
                                    var12 = var7.length;
                                    var11 = var9.length;
                                    var3 = -0.012;
                                    var10 = var3 * var12;
                                    var3 = 0.012;
                                    var3 = var3 * var11;
                                    var5 = 1.5e-05;
                                    var5 = var5 * var12;
                                    var5 = var5 * var11;
                                    var3 = var10 - var3;
                                    var5 = var3 + var5;
                                    var3 = 0;
                                    if (!(!(var5 > var3))) {
                                        _fun1012_ip = 240;
                                        continue _fun1012
                                    }
                                case 201:
                                    var10 = _closure2_slot10;
                                    var3 = _closure2_slot24;
                                    var14 = var3.bind(var8)(var7, var9);
                                    var5 = var10.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var15 = var5;
                                    var13 = var6;
                                    var3 = new var15[var10](var14, var13, var12);
                                    var3 = var3 instanceof Object ? var3 : var5;
                                    _fun1012_ip = 277;
                                    continue _fun1012;
                                case 240:
                                    var10 = _closure2_slot10;
                                    var5 = _closure2_slot27;
                                    var14 = var5.bind(var8)(var7, var9);
                                    var9 = var10.prototype;
                                    var9 = Object.create(var9, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var15 = var9;
                                    var13 = var6;
                                    var5 = new var15[var10](var14, var13, var12);
                                    var3 = var5 instanceof Object ? var5 : var9;
                                case 277:
                                    return var3;
                                case 279:
                                    var5 = _closure2_slot10;
                                    var3 = _closure2_slot25;
                                    var14 = var3.bind(var8)(var7, var4);
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var15 = var4;
                                    var13 = var6;
                                    var3 = new var15[var5](var14, var13, var12);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    return var3;
                                case 318:
                                    var3 = var2.negate;
                                    var3 = var3.bind(var2)();
                                    return var3;
                                case 330:
                                    return var2;
                                case 332:
                                    var0 = _closure2_slot9;
                                    var0 = var0[var1];
                                    return var0;
                            }
                        };
                        var11.multiply = var6;
                        var11 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.multiply;
                        var11.times = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1013: for (var _fun1013_ip = 0;;) switch (_fun1013_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = this;
                                    var4 = _closure2_slot13;
                                    var5 = var2.value;
                                    var0 = var1.value;
                                    var0 = var5 * var0;
                                    var7 = undefined;
                                    var0 = var4.bind(var7)(var0);
                                    if (var0) {
                                        _fun1013_ip = 121;
                                        continue _fun1013
                                    }
                                case 37:
                                    var6 = _closure2_slot28;
                                    var0 = global;
                                    var8 = var0.Math;
                                    var5 = var8.abs;
                                    var4 = var2.value;
                                    var5 = var5.bind(var8)(var4);
                                    var4 = _closure2_slot14;
                                    var9 = var0.Math;
                                    var8 = var9.abs;
                                    var0 = var1.value;
                                    var0 = var8.bind(var9)(var0);
                                    var4 = var4.bind(var7)(var0);
                                    var8 = var1.sign;
                                    var0 = var2.sign;
                                    var0 = var8 !== var0;
                                    var0 = var6.bind(var7)(var5, var4, var0);
                                    _fun1013_ip = 159;
                                    continue _fun1013;
                                case 121:
                                    var3 = _closure2_slot11;
                                    var2 = var2.value;
                                    var1 = var1.value;
                                    var12 = var2 * var1;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var13 = var2;
                                    var1 = new var13[var3](var12, var11);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 159:
                                    return var0;
                            }
                        };
                        var11._multiplyBySmall = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1014: for (var _fun1014_ip = 0;;) switch (_fun1014_ip) {
                                case 0:
                                    var1 = arg0;
                                    var4 = this;
                                    var0 = var1.value;
                                    var2 = 0;
                                    if (!(var2 !== var0)) {
                                        _fun1014_ip = 125;
                                        continue _fun1014
                                    }
                                case 17:
                                    var5 = var1.value;
                                    var3 = 1;
                                    var0 = var4;
                                    if (!(var3 !== var5)) {
                                        _fun1014_ip = 123;
                                        continue _fun1014
                                    }
                                case 32:
                                    var5 = var1.value;
                                    var3 = -1;
                                    if (!(var3 !== var5)) {
                                        _fun1014_ip = 110;
                                        continue _fun1014
                                    }
                                case 47:
                                    var7 = _closure2_slot28;
                                    var3 = global;
                                    var6 = var3.Math;
                                    var5 = var6.abs;
                                    var3 = var1.value;
                                    var6 = var5.bind(var6)(var3);
                                    var5 = var4.value;
                                    var8 = var4.sign;
                                    var1 = var1.sign;
                                    var3 = undefined;
                                    var1 = var8 !== var1;
                                    var1 = var7.bind(var3)(var6, var5, var1);
                                    _fun1014_ip = 120;
                                    continue _fun1014;
                                case 110:
                                    var3 = var4.negate;
                                    var1 = var3.bind(var4)();
                                case 120:
                                    var0 = var1;
                                case 123:
                                    _fun1014_ip = 136;
                                    continue _fun1014;
                                case 125:
                                    var1 = _closure2_slot9;
                                    var0 = var1[var2];
                                case 136:
                                    return var0;
                            }
                        };
                        var11._multiplyBySmall = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot46;
                            var1 = undefined;
                            var0 = arg0;
                            var2 = var2.bind(var1)(var0);
                            var1 = var2._multiplyBySmall;
                            var0 = this;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var11.multiply = var6;
                        var11 = var7.prototype;
                        var6 = var7.prototype;
                        var6 = var6.multiply;
                        var11.times = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot12;
                            var1 = this;
                            var1 = var1.value;
                            var4 = _closure2_slot46;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.value;
                            var5 = var1 * var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.multiply = var6;
                        var11 = var5.prototype;
                        var6 = var5.prototype;
                        var6 = var6.multiply;
                        var11.times = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var3 = _closure2_slot10;
                            var2 = _closure2_slot29;
                            var0 = this;
                            var1 = var0.value;
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = false;
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.square = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            _fun1018: for (var _fun1018_ip = 0;;) switch (_fun1018_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = var0.value;
                                    var1 = var0.value;
                                    var3 = var2 * var1;
                                    var2 = _closure2_slot13;
                                    var4 = undefined;
                                    var2 = var2.bind(var4)(var3);
                                    if (var2) {
                                        _fun1018_ip = 104;
                                        continue _fun1018
                                    }
                                case 34:
                                    var5 = _closure2_slot10;
                                    var2 = _closure2_slot29;
                                    var6 = _closure2_slot14;
                                    var7 = global;
                                    var8 = var7.Math;
                                    var7 = var8.abs;
                                    var0 = var0.value;
                                    var0 = var7.bind(var8)(var0);
                                    var0 = var6.bind(var4)(var0);
                                    var10 = var2.bind(var4)(var0);
                                    var0 = var5.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var9 = false;
                                    var11 = var2;
                                    var0 = new var11[var5](var10, var9, var8);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    _fun1018_ip = 131;
                                    continue _fun1018;
                                case 104:
                                    var1 = _closure2_slot11;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var11 = var2;
                                    var10 = var3;
                                    var1 = new var11[var1](var10, var9);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 131:
                                    return var0;
                            }
                        };
                        var11.square = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var0 = this;
                            var2 = _closure2_slot12;
                            var1 = var0.value;
                            var0 = var0.value;
                            var3 = var1 * var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.square = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot31;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var2 = var3.bind(var2)(var1, var0);
                            var0 = {};
                            var1 = 0;
                            var1 = var2[var1];
                            var0.quotient = var1;
                            var1 = 1;
                            var1 = var2[var1];
                            var0.remainder = var1;
                            return var0;
                        };
                        var11.divmod = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.divmod;
                        var12.divmod = var6;
                        var11.divmod = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot31;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var1 = var3.bind(var2)(var1, var0);
                            var0 = 0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var11.divide = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot12;
                            var1 = this;
                            var1 = var1.value;
                            var4 = _closure2_slot46;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.value;
                            var5 = var1 / var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var12.divide = var6;
                        var11.over = var6;
                        var11 = var7.prototype;
                        var12 = var7.prototype;
                        var13 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.divide;
                        var13.over = var6;
                        var12.divide = var6;
                        var11.over = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot31;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var1 = var3.bind(var2)(var1, var0);
                            var0 = 1;
                            var0 = var1[var0];
                            return var0;
                        };
                        var11.mod = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = _closure2_slot12;
                            var1 = this;
                            var1 = var1.value;
                            var4 = _closure2_slot46;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.value;
                            var5 = var1 % var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var12.remainder = var6;
                        var11.mod = var6;
                        var11 = var7.prototype;
                        var12 = var7.prototype;
                        var13 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.mod;
                        var13.remainder = var6;
                        var12.mod = var6;
                        var11.remainder = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1025: for (var _fun1025_ip = 0;;) switch (_fun1025_ip) {
                                case 0:
                                    var7 = this;
                                    var2 = _closure2_slot46;
                                    var8 = undefined;
                                    var1 = arg0;
                                    var5 = var2.bind(var8)(var1);
                                    var11 = var7.value;
                                    var9 = var5.value;
                                    var2 = 0;
                                    if (!(var2 !== var9)) {
                                        _fun1025_ip = 393;
                                        continue _fun1025
                                    }
                                case 39:
                                    if (!(var2 !== var11)) {
                                        _fun1025_ip = 383;
                                        continue _fun1025
                                    }
                                case 46:
                                    var3 = 1;
                                    if (!(var3 !== var11)) {
                                        _fun1025_ip = 373;
                                        continue _fun1025
                                    }
                                case 56:
                                    var1 = -1;
                                    if (!(var1 !== var11)) {
                                        _fun1025_ip = 344;
                                        continue _fun1025
                                    }
                                case 69:
                                    var4 = var5.sign;
                                    if (var4) {
                                        _fun1025_ip = 334;
                                        continue _fun1025
                                    }
                                case 81:
                                    var4 = var5.isSmall;
                                    if (var4) {
                                        _fun1025_ip = 149;
                                        continue _fun1025
                                    }
                                case 90:
                                    var4 = global;
                                    var10 = var4.Error;
                                    var4 = var5.toString;
                                    var6 = var4.bind(var5)();
                                    var4 = 'The exponent ';
                                    var12 = var4 + var6;
                                    var4 = var10.prototype;
                                    var6 = Object.create(var4, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var4 = ' is too large.';
                                    var18 = var12 + var4;
                                    var19 = var6;
                                    var4 = new var19[var10](var18, var17);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    throw var4;
                                case 149:
                                    var4 = var7.isSmall;
                                    if (!var4) {
                                        _fun1025_ip = 190;
                                        continue _fun1025
                                    }
                                case 158:
                                    var4 = _closure2_slot13;
                                    var6 = global;
                                    var10 = var6.Math;
                                    var6 = var10.pow;
                                    var6 = var6.bind(var10)(var11, var9);
                                    var4 = var4.bind(var8)(var6);
                                    if (var4) {
                                        _fun1025_ip = 299;
                                        continue _fun1025
                                    }
                                case 190:
                                    var4 = _closure2_slot9;
                                    var13 = var4[var3];
                                    var12 = true;
                                    var10 = var12 & var9;
                                    var4 = var13;
                                    var11 = var9;
                                    if (!var10) {
                                        _fun1025_ip = 227;
                                        continue _fun1025
                                    }
                                case 213:
                                    var10 = var13.times;
                                    var4 = var10.bind(var13)(var7);
                                    var11 = var9 - 1;
                                case 227:
                                    var10 = 2;
                                    var9 = var7;
                                    var7 = var4;
                                    var4 = var7;
                                    if (!(var2 !== var11)) {
                                        _fun1025_ip = 297;
                                        continue _fun1025
                                    }
                                case 243:
                                    var15 = var11 / var10;
                                    var13 = var9.square;
                                    var14 = var13.bind(var9)();
                                    var16 = var12 & var15;
                                    var13 = var7;
                                    var11 = var15;
                                    if (!var16) {
                                        _fun1025_ip = 284;
                                        continue _fun1025
                                    }
                                case 270:
                                    var16 = var7.times;
                                    var13 = var16.bind(var7)(var14);
                                    var11 = var15 - 1;
                                case 284:
                                    var7 = var13;
                                    var9 = var14;
                                    var4 = var7;
                                    if (var2 !== var11) {
                                        _fun1025_ip = 243;
                                        continue _fun1025
                                    }
                                case 297:
                                    return var4;
                                case 299:
                                    var7 = _closure2_slot11;
                                    var4 = _closure2_slot18;
                                    var18 = var4.bind(var8)(var6);
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var19 = var6;
                                    var4 = new var19[var7](var18, var17);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    return var4;
                                case 334:
                                    var4 = _closure2_slot9;
                                    var4 = var4[var2];
                                    return var4;
                                case 344:
                                    var4 = var5.isEven;
                                    var5 = var4.bind(var5)();
                                    var4 = _closure2_slot9;
                                    if (var5) {
                                        _fun1025_ip = 367;
                                        continue _fun1025
                                    }
                                case 361:
                                    var1 = var4[var1];
                                    _fun1025_ip = 371;
                                    continue _fun1025;
                                case 367:
                                    var1 = var4[var3];
                                case 371:
                                    return var1;
                                case 373:
                                    var1 = _closure2_slot9;
                                    var1 = var1[var3];
                                    return var1;
                                case 383:
                                    var1 = _closure2_slot9;
                                    var1 = var1[var2];
                                    return var1;
                                case 393:
                                    var1 = _closure2_slot9;
                                    var0 = 1;
                                    var0 = var1[var0];
                                    return var0;
                            }
                        };
                        var11.pow = var6;
                        var11 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.pow;
                        var11.pow = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1026: for (var _fun1026_ip = 0;;) switch (_fun1026_ip) {
                                case 0:
                                    var6 = this;
                                    var2 = _closure2_slot46;
                                    var9 = undefined;
                                    var1 = arg0;
                                    var5 = var2.bind(var9)(var1);
                                    var8 = var6.value;
                                    var12 = var5.value;
                                    var2 = global;
                                    var1 = var2.BigInt;
                                    var3 = 0;
                                    var7 = var1.bind(var9)(var3);
                                    var4 = var2.BigInt;
                                    var1 = 1;
                                    var11 = var4.bind(var9)(var1);
                                    var10 = var2.BigInt;
                                    var4 = 2;
                                    var10 = var10.bind(var9)(var4);
                                    if (!(var12 !== var7)) {
                                        _fun1026_ip = 315;
                                        continue _fun1026
                                    }
                                case 80:
                                    if (!(var8 !== var7)) {
                                        _fun1026_ip = 305;
                                        continue _fun1026
                                    }
                                case 87:
                                    if (!(var8 !== var11)) {
                                        _fun1026_ip = 295;
                                        continue _fun1026
                                    }
                                case 94:
                                    var4 = var2.BigInt;
                                    var2 = -1;
                                    var4 = var4.bind(var9)(var2);
                                    if (!(var8 !== var4)) {
                                        _fun1026_ip = 266;
                                        continue _fun1026
                                    }
                                case 118:
                                    var4 = var5.isNegative;
                                    var4 = var4.bind(var5)();
                                    if (var4) {
                                        _fun1026_ip = 237;
                                        continue _fun1026
                                    }
                                case 131:
                                    var4 = _closure2_slot9;
                                    var13 = var4[var1];
                                    var8 = var12 & var11;
                                    var9 = var12;
                                    var4 = var13;
                                    if (!(var8 === var11)) {
                                        _fun1026_ip = 167;
                                        continue _fun1026
                                    }
                                case 153:
                                    var8 = var13.times;
                                    var4 = var8.bind(var13)(var6);
                                    var9 = var12 - 1;
                                case 167:
                                    var8 = var6;
                                    var6 = var4;
                                    var4 = var6;
                                    if (!(var9 !== var7)) {
                                        _fun1026_ip = 235;
                                        continue _fun1026
                                    }
                                case 180:
                                    var15 = var9 / var10;
                                    var12 = var8.square;
                                    var13 = var12.bind(var8)();
                                    var14 = var15 & var11;
                                    var9 = var15;
                                    var12 = var6;
                                    if (!(var14 === var11)) {
                                        _fun1026_ip = 222;
                                        continue _fun1026
                                    }
                                case 208:
                                    var14 = var6.times;
                                    var12 = var14.bind(var6)(var13);
                                    var9 = var15 - 1;
                                case 222:
                                    var6 = var12;
                                    var8 = var13;
                                    var4 = var6;
                                    if (var9 !== var7) {
                                        _fun1026_ip = 180;
                                        continue _fun1026
                                    }
                                case 235:
                                    return var4;
                                case 237:
                                    var4 = _closure2_slot12;
                                    var6 = var4.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var17 = var6;
                                    var16 = var7;
                                    var4 = new var17[var4](var16, var15);
                                    var4 = var4 instanceof Object ? var4 : var6;
                                    return var4;
                                case 266:
                                    var4 = var5.isEven;
                                    var5 = var4.bind(var5)();
                                    var4 = _closure2_slot9;
                                    if (var5) {
                                        _fun1026_ip = 289;
                                        continue _fun1026
                                    }
                                case 283:
                                    var2 = var4[var2];
                                    _fun1026_ip = 293;
                                    continue _fun1026;
                                case 289:
                                    var2 = var4[var1];
                                case 293:
                                    return var2;
                                case 295:
                                    var2 = _closure2_slot9;
                                    var2 = var2[var1];
                                    return var2;
                                case 305:
                                    var2 = _closure2_slot9;
                                    var2 = var2[var3];
                                    return var2;
                                case 315:
                                    var0 = _closure2_slot9;
                                    var0 = var0[var1];
                                    return var0;
                            }
                        };
                        var11.pow = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0, arg1) { // Environment: var1
                            _fun1027: for (var _fun1027_ip = 0;;) switch (_fun1027_ip) {
                                case 0:
                                    var3 = this;
                                    var4 = _closure2_slot46;
                                    var2 = undefined;
                                    var1 = arg0;
                                    var8 = var4.bind(var2)(var1);
                                    var1 = arg1;
                                    var7 = var4.bind(var2)(var1);
                                    var1 = var7.isZero;
                                    var1 = var1.bind(var7)();
                                    if (var1) {
                                        _fun1027_ip = 268;
                                        continue _fun1027
                                    }
                                case 44:
                                    var2 = _closure2_slot9;
                                    var1 = 1;
                                    var1 = var2[var1];
                                    var2 = var3.mod;
                                    var5 = var2.bind(var3)(var7);
                                    var2 = var8.isNegative;
                                    var2 = var2.bind(var8)();
                                    var3 = var8;
                                    var6 = var5;
                                    if (!var2) {
                                        _fun1027_ip = 121;
                                        continue _fun1027
                                    }
                                case 85:
                                    var4 = var8.multiply;
                                    var9 = _closure2_slot9;
                                    var2 = -1;
                                    var2 = var9[var2];
                                    var3 = var4.bind(var8)(var2);
                                    var2 = var5.modInv;
                                    var6 = var2.bind(var5)(var7);
                                case 121:
                                    var2 = var3.isPositive;
                                    var2 = var2.bind(var3)();
                                    var5 = 2;
                                    var4 = var3;
                                    var3 = var1;
                                    var1 = var3;
                                    if (!var2) {
                                        _fun1027_ip = 254;
                                        continue _fun1027
                                    }
                                case 146:
                                    var2 = var6.isZero;
                                    var2 = var2.bind(var6)();
                                    var9 = var6;
                                    if (var2) {
                                        _fun1027_ip = 256;
                                        continue _fun1027
                                    }
                                case 162:
                                    var2 = var4.isOdd;
                                    var2 = var2.bind(var4)();
                                    var8 = var3;
                                    if (!var2) {
                                        _fun1027_ip = 200;
                                        continue _fun1027
                                    }
                                case 178:
                                    var2 = var3.multiply;
                                    var10 = var2.bind(var3)(var9);
                                    var2 = var10.mod;
                                    var8 = var2.bind(var10)(var7);
                                case 200:
                                    var2 = var4.divide;
                                    var10 = var2.bind(var4)(var5);
                                    var2 = var9.square;
                                    var9 = var2.bind(var9)();
                                    var2 = var9.mod;
                                    var6 = var2.bind(var9)(var7);
                                    var2 = var10.isPositive;
                                    var2 = var2.bind(var10)();
                                    var3 = var8;
                                    var4 = var10;
                                    var1 = var3;
                                    if (var2) {
                                        _fun1027_ip = 146;
                                        continue _fun1027
                                    }
                                case 254:
                                    return var1;
                                case 256:
                                    var1 = _closure2_slot9;
                                    var0 = 0;
                                    var0 = var1[var0];
                                    return var0;
                                case 268:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var11 = 'Cannot take modPow with modulus 0';
                                    var12 = var1;
                                    var0 = new var12[var2](var11, var10);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var11.modPow = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.modPow;
                        var12.modPow = var6;
                        var11.modPow = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1028: for (var _fun1028_ip = 0;;) switch (_fun1028_ip) {
                                case 0:
                                    var2 = _closure2_slot46;
                                    var4 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var4)(var0);
                                    var2 = this;
                                    var3 = var2.value;
                                    var2 = var0.value;
                                    var5 = var0.isSmall;
                                    var0 = 1;
                                    if (var5) {
                                        _fun1028_ip = 52;
                                        continue _fun1028
                                    }
                                case 42:
                                    var1 = _closure2_slot32;
                                    var0 = var1.bind(var4)(var3, var2);
                                case 52:
                                    return var0;
                            }
                        };
                        var11.compareAbs = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1029: for (var _fun1029_ip = 0;;) switch (_fun1029_ip) {
                                case 0:
                                    var2 = _closure2_slot46;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    var1 = global;
                                    var4 = var1.Math;
                                    var3 = var4.abs;
                                    var2 = this;
                                    var2 = var2.value;
                                    var4 = var3.bind(var4)(var2);
                                    var5 = var0.value;
                                    var3 = var0.isSmall;
                                    var2 = -1;
                                    var0 = var2;
                                    if (!var3) {
                                        _fun1029_ip = 106;
                                        continue _fun1029
                                    }
                                case 67:
                                    var3 = var1.Math;
                                    var1 = var3.abs;
                                    var3 = var1.bind(var3)(var5);
                                    var1 = 0;
                                    if (!(var4 !== var3)) {
                                        _fun1029_ip = 103;
                                        continue _fun1029
                                    }
                                case 90:
                                    var3 = var4 > var3;
                                    if (!var3) {
                                        _fun1029_ip = 100;
                                        continue _fun1029
                                    }
                                case 97:
                                    var2 = 1;
                                case 100:
                                    var1 = var2;
                                case 103:
                                    var0 = var1;
                                case 106:
                                    return var0;
                            }
                        };
                        var11.compareAbs = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1030: for (var _fun1030_ip = 0;;) switch (_fun1030_ip) {
                                case 0:
                                    var0 = this;
                                    var1 = var0.value;
                                    var3 = _closure2_slot46;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var2)(var0);
                                    var3 = var0.value;
                                    var0 = 0;
                                    var2 = var1;
                                    if (!(!(var2 >= var0))) {
                                        _fun1030_ip = 42;
                                        continue _fun1030
                                    }
                                case 39:
                                    var2 = -var1;
                                case 42:
                                    var1 = var3;
                                    if (!(!(var1 >= var0))) {
                                        _fun1030_ip = 52;
                                        continue _fun1030
                                    }
                                case 49:
                                    var1 = -var3;
                                case 52:
                                    var0 = 0;
                                    if (!(var2 !== var1)) {
                                        _fun1030_ip = 77;
                                        continue _fun1030
                                    }
                                case 58:
                                    var2 = var2 > var1;
                                    var1 = -1;
                                    if (!var2) {
                                        _fun1030_ip = 74;
                                        continue _fun1030
                                    }
                                case 71:
                                    var1 = 1;
                                case 74:
                                    var0 = var1;
                                case 77:
                                    return var0;
                            }
                        };
                        var11.compareAbs = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1031: for (var _fun1031_ip = 0;;) switch (_fun1031_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = this;
                                    var0 = inf;
                                    if (!(var3 !== var0)) {
                                        _fun1031_ip = 174;
                                        continue _fun1031
                                    }
                                case 23:
                                    var0 = -inf;
                                    if (!(var3 !== var0)) {
                                        _fun1031_ip = 169;
                                        continue _fun1031
                                    }
                                case 40:
                                    var1 = _closure2_slot46;
                                    var5 = undefined;
                                    var1 = var1.bind(var5)(var3);
                                    var4 = var2.value;
                                    var3 = var1.value;
                                    var7 = var2.sign;
                                    var6 = var1.sign;
                                    if (!(var7 === var6)) {
                                        _fun1031_ip = 146;
                                        continue _fun1031
                                    }
                                case 80:
                                    var6 = var1.isSmall;
                                    if (var6) {
                                        _fun1031_ip = 123;
                                        continue _fun1031
                                    }
                                case 89:
                                    var0 = _closure2_slot32;
                                    var3 = var0.bind(var5)(var4, var3);
                                    var4 = var2.sign;
                                    var0 = 1;
                                    if (!var4) {
                                        _fun1031_ip = 117;
                                        continue _fun1031
                                    }
                                case 111:
                                    var0 = -1;
                                case 117:
                                    var0 = var3 * var0;
                                    _fun1031_ip = 144;
                                    continue _fun1031;
                                case 123:
                                    var3 = var2.sign;
                                    var2 = 1;
                                    if (!var3) {
                                        _fun1031_ip = 141;
                                        continue _fun1031
                                    }
                                case 135:
                                    var2 = -1;
                                case 141:
                                    var0 = var2;
                                case 144:
                                    _fun1031_ip = 167;
                                    continue _fun1031;
                                case 146:
                                    var2 = var1.sign;
                                    var1 = -1;
                                    if (!var2) {
                                        _fun1031_ip = 164;
                                        continue _fun1031
                                    }
                                case 161:
                                    var1 = 1;
                                case 164:
                                    var0 = var1;
                                case 167:
                                    return var0;
                                case 169:
                                    var0 = 1;
                                    return var0;
                                case 174:
                                    var0 = -1;
                                    return var0;
                            }
                        };
                        var11.compare = var6;
                        var11 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.compare;
                        var11.compareTo = var6;
                        var11 = var7.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1032: for (var _fun1032_ip = 0;;) switch (_fun1032_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = inf;
                                    if (!(var2 !== var0)) {
                                        _fun1032_ip = 166;
                                        continue _fun1032
                                    }
                                case 20:
                                    var0 = -inf;
                                    if (!(var2 !== var0)) {
                                        _fun1032_ip = 161;
                                        continue _fun1032
                                    }
                                case 37:
                                    var1 = _closure2_slot46;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                    var1 = this;
                                    var3 = var1.value;
                                    var2 = var0.value;
                                    var4 = var0.isSmall;
                                    var1 = 0;
                                    if (var4) {
                                        _fun1032_ip = 128;
                                        continue _fun1032
                                    }
                                case 75:
                                    var4 = var3 < var1;
                                    var0 = var0.sign;
                                    if (!(var4 === var0)) {
                                        _fun1032_ip = 107;
                                        continue _fun1032
                                    }
                                case 89:
                                    var4 = var3 < var1;
                                    var0 = -1;
                                    if (!var4) {
                                        _fun1032_ip = 105;
                                        continue _fun1032
                                    }
                                case 102:
                                    var0 = 1;
                                case 105:
                                    _fun1032_ip = 126;
                                    continue _fun1032;
                                case 107:
                                    var5 = var3 < var1;
                                    var4 = 1;
                                    if (!var5) {
                                        _fun1032_ip = 123;
                                        continue _fun1032
                                    }
                                case 117:
                                    var4 = -1;
                                case 123:
                                    var0 = var4;
                                case 126:
                                    _fun1032_ip = 159;
                                    continue _fun1032;
                                case 128:
                                    var4 = var3 == var2;
                                    var1 = 0;
                                    if (var4) {
                                        _fun1032_ip = 156;
                                        continue _fun1032
                                    }
                                case 137:
                                    var3 = var3 > var2;
                                    var2 = -1;
                                    if (!var3) {
                                        _fun1032_ip = 153;
                                        continue _fun1032
                                    }
                                case 150:
                                    var2 = 1;
                                case 153:
                                    var1 = var2;
                                case 156:
                                    var0 = var1;
                                case 159:
                                    return var0;
                                case 161:
                                    var0 = 1;
                                    return var0;
                                case 166:
                                    var0 = -1;
                                    return var0;
                            }
                        };
                        var11.compare = var6;
                        var11 = var7.prototype;
                        var6 = var7.prototype;
                        var6 = var6.compare;
                        var11.compareTo = var6;
                        var11 = var5.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1033: for (var _fun1033_ip = 0;;) switch (_fun1033_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = inf;
                                    if (!(var3 !== var0)) {
                                        _fun1033_ip = 90;
                                        continue _fun1033
                                    }
                                case 17:
                                    var0 = -inf;
                                    if (!(var3 !== var0)) {
                                        _fun1033_ip = 85;
                                        continue _fun1033
                                    }
                                case 31:
                                    var0 = this;
                                    var2 = var0.value;
                                    var1 = _closure2_slot46;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var3);
                                    var1 = var0.value;
                                    var0 = 0;
                                    if (!(var2 !== var1)) {
                                        _fun1033_ip = 83;
                                        continue _fun1033
                                    }
                                case 64:
                                    var2 = var2 > var1;
                                    var1 = -1;
                                    if (!var2) {
                                        _fun1033_ip = 80;
                                        continue _fun1033
                                    }
                                case 77:
                                    var1 = 1;
                                case 80:
                                    var0 = var1;
                                case 83:
                                    return var0;
                                case 85:
                                    var0 = 1;
                                    return var0;
                                case 90:
                                    var0 = -1;
                                    return var0;
                            }
                        };
                        var11.compare = var6;
                        var11 = var5.prototype;
                        var6 = var5.prototype;
                        var6 = var6.compare;
                        var11.compareTo = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var11.equals = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.equals;
                        var15.eq = var6;
                        var14.equals = var6;
                        var13.eq = var6;
                        var12.equals = var6;
                        var11.eq = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var0 !== var1;
                            return var0;
                        };
                        var11.notEquals = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.notEquals;
                        var15.neq = var6;
                        var14.notEquals = var6;
                        var13.neq = var6;
                        var12.notEquals = var6;
                        var11.neq = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var11.greater = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.greater;
                        var15.gt = var6;
                        var14.greater = var6;
                        var13.gt = var6;
                        var12.greater = var6;
                        var11.gt = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var1 < var0;
                            return var0;
                        };
                        var11.lesser = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.lesser;
                        var15.lt = var6;
                        var14.lesser = var6;
                        var13.lt = var6;
                        var12.lesser = var6;
                        var11.lt = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var1 >= var0;
                            return var0;
                        };
                        var11.greaterOrEquals = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.greaterOrEquals;
                        var15.geq = var6;
                        var14.greaterOrEquals = var6;
                        var13.geq = var6;
                        var12.greaterOrEquals = var6;
                        var11.geq = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            var2 = this;
                            var1 = var2.compare;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var0 = var1 <= var0;
                            return var0;
                        };
                        var11.lesserOrEquals = var6;
                        var11 = var5.prototype;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var14 = var7.prototype;
                        var15 = var8.prototype;
                        var6 = var8.prototype;
                        var6 = var6.lesserOrEquals;
                        var15.leq = var6;
                        var14.lesserOrEquals = var6;
                        var13.leq = var6;
                        var12.lesserOrEquals = var6;
                        var11.leq = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 0;
                            var1 = var1[var0];
                            var0 = 1;
                            var0 = var0 & var1;
                            var0 = !var0;
                            return var0;
                        };
                        var11.isEven = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 1;
                            var0 = var0 & var1;
                            var0 = !var0;
                            return var0;
                        };
                        var11.isEven = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var2 = var0.value;
                            var0 = global;
                            var4 = var0.BigInt;
                            var3 = undefined;
                            var1 = 1;
                            var1 = var4.bind(var3)(var1);
                            var1 = var2 & var1;
                            var2 = var0.BigInt;
                            var0 = 0;
                            var0 = var2.bind(var3)(var0);
                            var0 = var1 === var0;
                            return var0;
                        };
                        var11.isEven = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = ~var0;
                            var0 = 1;
                            var0 = var0 & var1;
                            var0 = !var0;
                            return var0;
                        };
                        var11.isOdd = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0.value;
                            var1 = ~var0;
                            var0 = 1;
                            var0 = var0 & var1;
                            var0 = !var0;
                            return var0;
                        };
                        var11.isOdd = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var4 = var0.value;
                            var0 = global;
                            var1 = var0.BigInt;
                            var3 = undefined;
                            var2 = 1;
                            var1 = var1.bind(var3)(var2);
                            var1 = var4 & var1;
                            var0 = var0.BigInt;
                            var0 = var0.bind(var3)(var2);
                            var0 = var1 === var0;
                            return var0;
                        };
                        var11.isOdd = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0.sign;
                            var0 = !var0;
                            return var0;
                        };
                        var11.isPositive = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var11.isPositive = var6;
                        var11 = var5.prototype;
                        var6 = var7.prototype;
                        var6 = var6.isPositive;
                        var11.isPositive = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0.sign;
                            return var0;
                        };
                        var11.isNegative = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 0;
                            var0 = var1 < var0;
                            return var0;
                        };
                        var11.isNegative = var6;
                        var11 = var5.prototype;
                        var6 = var7.prototype;
                        var6 = var6.isNegative;
                        var11.isNegative = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = false;
                            return var0;
                        };
                        var11.isUnit = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = global;
                            var2 = var0.Math;
                            var1 = var2.abs;
                            var0 = this;
                            var0 = var0.value;
                            var1 = var1.bind(var2)(var0);
                            var0 = 1;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var11.isUnit = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var1 = this;
                            var0 = var1.abs;
                            var0 = var0.bind(var1)();
                            var1 = var0.value;
                            var0 = global;
                            var3 = var0.BigInt;
                            var2 = undefined;
                            var0 = 1;
                            var0 = var3.bind(var2)(var0);
                            var0 = var1 === var0;
                            return var0;
                        };
                        var11.isUnit = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            var0 = false;
                            return var0;
                        };
                        var11.isZero = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = 0;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var11.isZero = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var0 = this;
                            var1 = var0.value;
                            var0 = global;
                            var3 = var0.BigInt;
                            var2 = undefined;
                            var0 = 0;
                            var0 = var3.bind(var2)(var0);
                            var0 = var1 === var0;
                            return var0;
                        };
                        var11.isZero = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1056: for (var _fun1056_ip = 0;;) switch (_fun1056_ip) {
                                case 0:
                                    var4 = this;
                                    var2 = _closure2_slot46;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var3 = var2.bind(var1)(var0);
                                    var0 = var3.isZero;
                                    var0 = var0.bind(var3)();
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun1056_ip = 114;
                                        continue _fun1056
                                    }
                                case 36:
                                    var1 = var3.isUnit;
                                    var1 = var1.bind(var3)();
                                    var2 = !var1;
                                    var1 = !var2;
                                    if (!var2) {
                                        _fun1056_ip = 111;
                                        continue _fun1056
                                    }
                                case 55:
                                    var5 = var3.compareAbs;
                                    var2 = 2;
                                    var5 = var5.bind(var3)(var2);
                                    var2 = 0;
                                    if (!(var2 !== var5)) {
                                        _fun1056_ip = 98;
                                        continue _fun1056
                                    }
                                case 75:
                                    var2 = var4.mod;
                                    var3 = var2.bind(var4)(var3);
                                    var2 = var3.isZero;
                                    var2 = var2.bind(var3)();
                                    _fun1056_ip = 108;
                                    continue _fun1056;
                                case 98:
                                    var3 = var4.isEven;
                                    var2 = var3.bind(var4)();
                                case 108:
                                    var1 = var2;
                                case 111:
                                    var0 = var1;
                                case 114:
                                    return var0;
                            }
                        };
                        var11.isDivisibleBy = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.isDivisibleBy;
                        var12.isDivisibleBy = var6;
                        var11.isDivisibleBy = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1057: for (var _fun1057_ip = 0;;) switch (_fun1057_ip) {
                                case 0:
                                    var3 = this;
                                    var0 = _closure2_slot33;
                                    var4 = undefined;
                                    var0 = var0.bind(var4)(var3);
                                    var2 = _closure2_slot0;
                                    if (!(var0 === var2)) {
                                        _fun1057_ip = 224;
                                        continue _fun1057
                                    }
                                case 28:
                                    var2 = var3.abs;
                                    var3 = var2.bind(var3)();
                                    var2 = var3.bitLength;
                                    var6 = var2.bind(var3)();
                                    var2 = 64;
                                    if (!(!(var6 <= var2))) {
                                        _fun1057_ip = 202;
                                        continue _fun1057
                                    }
                                case 58:
                                    var7 = global;
                                    var5 = var7.Math;
                                    var2 = var5.log;
                                    var8 = 2;
                                    var5 = var2.bind(var5)(var8);
                                    var2 = var6.toJSNumber;
                                    var2 = var2.bind(var6)();
                                    var10 = var5 * var2;
                                    var6 = var7.Math;
                                    var5 = var6.ceil;
                                    var11 = true;
                                    var9 = arg0;
                                    var2 = var10;
                                    if (!(var11 === var9)) {
                                        _fun1057_ip = 139;
                                        continue _fun1057
                                    }
                                case 117:
                                    var9 = var7.Math;
                                    var7 = var9.pow;
                                    var7 = var7.bind(var9)(var10, var8);
                                    var2 = var8 * var7;
                                case 139:
                                    var7 = var5.bind(var6)(var2);
                                    var5 = new Array(0);
                                    var6 = 0;
                                    var9 = var6 < var7;
                                    if (!var9) {
                                        _fun1057_ip = 190;
                                        continue _fun1057
                                    }
                                case 160:
                                    var10 = var5.push;
                                    var11 = _closure1_slot0;
                                    var9 = var6 + var8;
                                    var9 = var11.bind(var4)(var9);
                                    var9 = var10.bind(var5)(var9);
                                    var6 = var6 + 1;
                                    if (var6 < var7) {
                                        _fun1057_ip = 160;
                                        continue _fun1057
                                    }
                                case 190:
                                    var2 = _closure2_slot34;
                                    var2 = var2.bind(var4)(var3, var5);
                                    return var2;
                                case 202:
                                    var2 = _closure2_slot34;
                                    var1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
                                    var1 = var2.bind(var4)(var3, var1);
                                    return var1;
                                case 224:
                                    return var0;
                            }
                        };
                        var11.isPrime = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.isPrime;
                        var12.isPrime = var6;
                        var11.isPrime = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0, arg1) { // Environment: var1
                            _fun1058: for (var _fun1058_ip = 0;;) switch (_fun1058_ip) {
                                case 0:
                                    var2 = arg0;
                                    var9 = arg1;
                                    var5 = this;
                                    var0 = _closure2_slot33;
                                    var4 = undefined;
                                    var0 = var0.bind(var4)(var5);
                                    var3 = _closure2_slot0;
                                    if (!(var0 === var3)) {
                                        _fun1058_ip = 131;
                                        continue _fun1058
                                    }
                                case 31:
                                    var3 = var5.abs;
                                    var3 = var3.bind(var5)();
                                    var5 = _closure2_slot0;
                                    var8 = 5;
                                    if (!(var2 !== var5)) {
                                        _fun1058_ip = 55;
                                        continue _fun1058
                                    }
                                case 52:
                                    var8 = var2;
                                case 55:
                                    var2 = new Array(0);
                                    var7 = 0;
                                    var10 = var7 < var8;
                                    var5 = 2;
                                    if (!var10) {
                                        _fun1058_ip = 119;
                                        continue _fun1058
                                    }
                                case 74:
                                    var11 = var2.push;
                                    var13 = _closure1_slot0;
                                    var12 = var13.randBetween;
                                    var10 = var3.minus;
                                    var10 = var10.bind(var3)(var5);
                                    var10 = var12.bind(var13)(var5, var10, var9);
                                    var10 = var11.bind(var2)(var10);
                                    var7 = var7 + 1;
                                    if (var7 < var8) {
                                        _fun1058_ip = 74;
                                        continue _fun1058
                                    }
                                case 119:
                                    var1 = _closure2_slot34;
                                    var1 = var1.bind(var4)(var3, var2);
                                    return var1;
                                case 131:
                                    return var0;
                            }
                        };
                        var11.isProbablePrime = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.isProbablePrime;
                        var12.isProbablePrime = var6;
                        var11.isProbablePrime = var6;
                        var11 = var8.prototype;
                        var6 = function(arg0) { // Environment: var1
                            _fun1059: for (var _fun1059_ip = 0;;) switch (_fun1059_ip) {
                                case 0:
                                    var4 = arg0;
                                    var1 = this;
                                    var2 = _closure1_slot0;
                                    var7 = var2.zero;
                                    var0 = _closure1_slot0;
                                    var8 = var0.one;
                                    var2 = _closure2_slot46;
                                    var0 = undefined;
                                    var6 = var2.bind(var0)(var4);
                                    var0 = var1.abs;
                                    var5 = var0.bind(var1)();
                                    var0 = var5.isZero;
                                    var0 = var0.bind(var5)();
                                    var3 = var7;
                                    var2 = var6;
                                    if (var0) {
                                        _fun1059_ip = 158;
                                        continue _fun1059
                                    }
                                case 72:
                                    var0 = var6.divide;
                                    var10 = var0.bind(var6)(var5);
                                    var9 = var7.subtract;
                                    var0 = var10.multiply;
                                    var0 = var0.bind(var10)(var8);
                                    var12 = var9.bind(var7)(var0);
                                    var9 = var6.subtract;
                                    var0 = var10.multiply;
                                    var0 = var0.bind(var10)(var5);
                                    var11 = var9.bind(var6)(var0);
                                    var0 = var11.isZero;
                                    var0 = var0.bind(var11)();
                                    var7 = var8;
                                    var6 = var5;
                                    var8 = var12;
                                    var5 = var11;
                                    var3 = var7;
                                    var2 = var6;
                                    if (!var0) {
                                        _fun1059_ip = 72;
                                        continue _fun1059
                                    }
                                case 158:
                                    var0 = var2.isUnit;
                                    var0 = var0.bind(var2)();
                                    if (var0) {
                                        _fun1059_ip = 243;
                                        continue _fun1059
                                    }
                                case 171:
                                    var0 = global;
                                    var5 = var0.Error;
                                    var0 = var1.toString;
                                    var2 = var0.bind(var1)();
                                    var0 = ' and ';
                                    var2 = var2 + var0;
                                    var0 = var4.toString;
                                    var0 = var0.bind(var4)();
                                    var6 = var2 + var0;
                                    var0 = var5.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var0 = ' are not co-prime';
                                    var13 = var6 + var0;
                                    var14 = var2;
                                    var0 = new var14[var5](var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 243:
                                    var2 = var3.compare;
                                    var0 = 0;
                                    var5 = var2.bind(var3)(var0);
                                    var0 = -1;
                                    var2 = var3;
                                    if (!(var0 === var5)) {
                                        _fun1059_ip = 279;
                                        continue _fun1059
                                    }
                                case 269:
                                    var0 = var3.add;
                                    var2 = var0.bind(var3)(var4);
                                case 279:
                                    var0 = var1.isNegative;
                                    var1 = var0.bind(var1)();
                                    var0 = var2;
                                    if (!var1) {
                                        _fun1059_ip = 305;
                                        continue _fun1059
                                    }
                                case 295:
                                    var1 = var2.negate;
                                    var0 = var1.bind(var2)();
                                case 305:
                                    return var0;
                            }
                        };
                        var11.modInv = var6;
                        var11 = var5.prototype;
                        var12 = var7.prototype;
                        var6 = var8.prototype;
                        var6 = var6.modInv;
                        var12.modInv = var6;
                        var11.modInv = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            _fun1060: for (var _fun1060_ip = 0;;) switch (_fun1060_ip) {
                                case 0:
                                    var1 = this;
                                    var5 = var1.value;
                                    var0 = var1.sign;
                                    if (var0) {
                                        _fun1060_ip = 67;
                                        continue _fun1060
                                    }
                                case 20:
                                    var6 = _closure2_slot10;
                                    var4 = _closure2_slot21;
                                    var3 = undefined;
                                    var0 = 1;
                                    var9 = var4.bind(var3)(var5, var0);
                                    var8 = var1.sign;
                                    var3 = var6.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var10 = var3;
                                    var0 = new var10[var6](var9, var8, var7);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun1060_ip = 89;
                                    continue _fun1060;
                                case 67:
                                    var4 = _closure2_slot23;
                                    var3 = var1.sign;
                                    var2 = undefined;
                                    var1 = 1;
                                    var0 = var4.bind(var2)(var5, var1, var3);
                                case 89:
                                    return var0;
                            }
                        };
                        var11.next = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            _fun1061: for (var _fun1061_ip = 0;;) switch (_fun1061_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = var0.value;
                                    var1 = 1;
                                    var3 = var2 + var1;
                                    var0 = 9007199254740992.0;
                                    if (!(!(var3 < var0))) {
                                        _fun1061_ip = 64;
                                        continue _fun1061
                                    }
                                case 29:
                                    var5 = _closure2_slot10;
                                    var7 = _closure2_slot1;
                                    var0 = var5.prototype;
                                    var3 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var6 = false;
                                    var8 = var3;
                                    var0 = new var8[var5](var7, var6, var5);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun1061_ip = 95;
                                    continue _fun1061;
                                case 64:
                                    var3 = _closure2_slot11;
                                    var7 = var2 + var1;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var8 = var2;
                                    var1 = new var8[var3](var7, var6);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 95:
                                    return var0;
                            }
                        };
                        var11.next = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var2 = _closure2_slot12;
                            var0 = this;
                            var1 = var0.value;
                            var0 = global;
                            var4 = var0.BigInt;
                            var3 = undefined;
                            var0 = 1;
                            var0 = var4.bind(var3)(var0);
                            var5 = var1 + var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.next = var6;
                        var11 = var8.prototype;
                        var6 = function() { // Environment: var1
                            _fun1063: for (var _fun1063_ip = 0;;) switch (_fun1063_ip) {
                                case 0:
                                    var0 = this;
                                    var5 = var0.value;
                                    var2 = var0.sign;
                                    if (var2) {
                                        _fun1063_ip = 44;
                                        continue _fun1063
                                    }
                                case 20:
                                    var4 = _closure2_slot23;
                                    var3 = var0.sign;
                                    var2 = undefined;
                                    var0 = 1;
                                    var0 = var4.bind(var2)(var5, var0, var3);
                                    _fun1063_ip = 85;
                                    continue _fun1063;
                                case 44:
                                    var4 = _closure2_slot10;
                                    var3 = _closure2_slot21;
                                    var2 = undefined;
                                    var1 = 1;
                                    var8 = var3.bind(var2)(var5, var1);
                                    var1 = var4.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var7 = true;
                                    var9 = var2;
                                    var1 = new var9[var4](var8, var7, var6);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 85:
                                    return var0;
                            }
                        };
                        var11.prev = var6;
                        var11 = var7.prototype;
                        var6 = function() { // Environment: var1
                            _fun1064: for (var _fun1064_ip = 0;;) switch (_fun1064_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = var0.value;
                                    var1 = 1;
                                    var3 = var2 - var1;
                                    var0 = -9007199254740992.0;
                                    if (!(!(var3 > var0))) {
                                        _fun1064_ip = 64;
                                        continue _fun1064
                                    }
                                case 29:
                                    var5 = _closure2_slot10;
                                    var7 = _closure2_slot1;
                                    var0 = var5.prototype;
                                    var3 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var6 = true;
                                    var8 = var3;
                                    var0 = new var8[var5](var7, var6, var5);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    _fun1064_ip = 95;
                                    continue _fun1064;
                                case 64:
                                    var3 = _closure2_slot11;
                                    var7 = var2 - var1;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var8 = var2;
                                    var1 = new var8[var3](var7, var6);
                                    var0 = var1 instanceof Object ? var1 : var2;
                                case 95:
                                    return var0;
                            }
                        };
                        var11.prev = var6;
                        var11 = var5.prototype;
                        var6 = function() { // Environment: var1
                            var2 = _closure2_slot12;
                            var0 = this;
                            var1 = var0.value;
                            var0 = global;
                            var4 = var0.BigInt;
                            var3 = undefined;
                            var0 = 1;
                            var0 = var4.bind(var3)(var0);
                            var5 = var1 - var0;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.prev = var6;
                        var12 = [1];
                        var _closure2_slot4 = var12;
                        var11 = var12.length;
                        var6 = 1;
                        var11 = var11 - var6;
                        var11 = var12[var11];
                        var14 = 2;
                        var11 = var14 * var11;
                        var13 = 10000000;
                        if (!(var11 <= var13)) {
                            _fun960_ip = 2661;
                            continue _fun960
                        }
                    case 2613:
                        var15 = var12.push;
                        var11 = var12.length;
                        var11 = var11 - var6;
                        var11 = var12[var11];
                        var11 = var14 * var11;
                        var11 = var15.bind(var12)(var11);
                        var11 = var12.length;
                        var11 = var11 - var6;
                        var11 = var12[var11];
                        var11 = var14 * var11;
                        if (var11 <= var13) {
                            _fun960_ip = 2613;
                            continue _fun960
                        }
                    case 2661:
                        var11 = var12.length;
                        var _closure2_slot5 = var11;
                        var11 = var11 - var6;
                        var11 = var12[var11];
                        var _closure2_slot6 = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            _fun1066: for (var _fun1066_ip = 0;;) switch (_fun1066_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = _closure2_slot46;
                                    var4 = undefined;
                                    var0 = arg0;
                                    var3 = var3.bind(var4)(var0);
                                    var0 = var3.toJSNumber;
                                    var0 = var0.bind(var3)();
                                    var3 = _closure2_slot35;
                                    var3 = var3.bind(var4)(var0);
                                    if (var3) {
                                        _fun1066_ip = 93;
                                        continue _fun1066
                                    }
                                case 42:
                                    var3 = global;
                                    var5 = var3.Error;
                                    var3 = var3.String;
                                    var4 = var3.bind(var4)(var0);
                                    var3 = ' is too large for shifting.';
                                    var11 = var4 + var3;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var12 = var4;
                                    var3 = new var12[var5](var11, var10);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    throw var3;
                                case 93:
                                    var3 = 0;
                                    if (!(!(var0 < var3))) {
                                        _fun1066_ip = 199;
                                        continue _fun1066
                                    }
                                case 99:
                                    var3 = var2.isZero;
                                    var3 = var3.bind(var2)();
                                    if (var3) {
                                        _fun1066_ip = 197;
                                        continue _fun1066
                                    }
                                case 112:
                                    var3 = _closure2_slot5;
                                    var8 = 1;
                                    var7 = var0;
                                    var6 = var2;
                                    var4 = var6;
                                    var5 = var7;
                                    if (!(var5 >= var3)) {
                                        _fun1066_ip = 176;
                                        continue _fun1066
                                    }
                                case 135:
                                    var9 = var6.multiply;
                                    var3 = _closure2_slot6;
                                    var6 = var9.bind(var6)(var3);
                                    var3 = _closure2_slot5;
                                    var3 = var3 - var8;
                                    var7 = var7 - var3;
                                    var3 = _closure2_slot5;
                                    var4 = var6;
                                    var5 = var7;
                                    if (var5 >= var3) {
                                        _fun1066_ip = 135;
                                        continue _fun1066
                                    }
                                case 176:
                                    var3 = var4.multiply;
                                    var1 = _closure2_slot4;
                                    var1 = var1[var5];
                                    var1 = var3.bind(var4)(var1);
                                    return var1;
                                case 197:
                                    return var2;
                                case 199:
                                    var1 = var2.shiftRight;
                                    var0 = -var0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var12.shiftLeft = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.shiftLeft;
                        var13.shiftLeft = var11;
                        var12.shiftLeft = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            _fun1067: for (var _fun1067_ip = 0;;) switch (_fun1067_ip) {
                                case 0:
                                    var2 = this;
                                    var1 = _closure2_slot46;
                                    var8 = undefined;
                                    var0 = arg0;
                                    var1 = var1.bind(var8)(var0);
                                    var0 = var1.toJSNumber;
                                    var0 = var0.bind(var1)();
                                    var1 = _closure2_slot35;
                                    var1 = var1.bind(var8)(var0);
                                    if (var1) {
                                        _fun1067_ip = 93;
                                        continue _fun1067
                                    }
                                case 42:
                                    var1 = global;
                                    var5 = var1.Error;
                                    var1 = var1.String;
                                    var3 = var1.bind(var8)(var0);
                                    var1 = ' is too large for shifting.';
                                    var15 = var3 + var1;
                                    var3 = var5.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var16 = var3;
                                    var1 = new var16[var5](var15, var14);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    throw var1;
                                case 93:
                                    var5 = 0;
                                    if (!(!(var0 < var5))) {
                                        _fun1067_ip = 313;
                                        continue _fun1067
                                    }
                                case 102:
                                    var1 = _closure2_slot5;
                                    var3 = 1;
                                    var11 = var0;
                                    var10 = var2;
                                    var7 = var10;
                                    var9 = var11;
                                    if (!(var9 >= var1)) {
                                        _fun1067_ip = 255;
                                        continue _fun1067
                                    }
                                case 128:
                                    var1 = var10.isZero;
                                    var6 = var1.bind(var10)();
                                    var1 = var10;
                                    if (var6) {
                                        _fun1067_ip = 311;
                                        continue _fun1067
                                    }
                                case 147:
                                    var6 = var1.isNegative;
                                    var6 = var6.bind(var1)();
                                    if (!var6) {
                                        _fun1067_ip = 176;
                                        continue _fun1067
                                    }
                                case 160:
                                    var6 = var1.isUnit;
                                    var6 = var6.bind(var1)();
                                    if (var6) {
                                        _fun1067_ip = 311;
                                        continue _fun1067
                                    }
                                case 176:
                                    var12 = _closure2_slot31;
                                    var6 = _closure2_slot6;
                                    var12 = var12.bind(var8)(var1, var6);
                                    var13 = var12[var3];
                                    var6 = var13.isNegative;
                                    var6 = var6.bind(var13)();
                                    var12 = var12[var5];
                                    if (var6) {
                                        _fun1067_ip = 216;
                                        continue _fun1067
                                    }
                                case 211:
                                    var13 = var12;
                                    _fun1067_ip = 226;
                                    continue _fun1067;
                                case 216:
                                    var6 = var12.prev;
                                    var13 = var6.bind(var12)();
                                case 226:
                                    var6 = _closure2_slot5;
                                    var6 = var6 - var3;
                                    var11 = var11 - var6;
                                    var6 = _closure2_slot5;
                                    var10 = var13;
                                    var7 = var10;
                                    var9 = var11;
                                    if (var9 >= var6) {
                                        _fun1067_ip = 128;
                                        continue _fun1067
                                    }
                                case 255:
                                    var6 = _closure2_slot31;
                                    var4 = _closure2_slot4;
                                    var4 = var4[var9];
                                    var4 = var6.bind(var8)(var7, var4);
                                    var6 = var4[var3];
                                    var3 = var6.isNegative;
                                    var3 = var3.bind(var6)();
                                    var5 = var4[var5];
                                    if (var3) {
                                        _fun1067_ip = 299;
                                        continue _fun1067
                                    }
                                case 294:
                                    var3 = var5;
                                    _fun1067_ip = 309;
                                    continue _fun1067;
                                case 299:
                                    var4 = var5.prev;
                                    var3 = var4.bind(var5)();
                                case 309:
                                    return var3;
                                case 311:
                                    return var1;
                                case 313:
                                    var1 = var2.shiftLeft;
                                    var0 = -var0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var12.shiftRight = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.shiftRight;
                        var13.shiftRight = var11;
                        var12.shiftRight = var11;
                        var12 = var8.prototype;
                        var11 = function() { // Environment: var1
                            var1 = this;
                            var0 = var1.negate;
                            var1 = var0.bind(var1)();
                            var0 = var1.prev;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var12.not = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.not;
                        var13.not = var11;
                        var12.not = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var4 = _closure2_slot36;
                            var3 = undefined;
                            var2 = this;
                            var1 = arg0;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var1 & var0;
                                return var0;
                            };
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var12.and = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.and;
                        var13.and = var11;
                        var12.and = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var4 = _closure2_slot36;
                            var3 = undefined;
                            var2 = this;
                            var1 = arg0;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var1 | var0;
                                return var0;
                            };
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var12.or = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.or;
                        var13.or = var11;
                        var12.or = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var4 = _closure2_slot36;
                            var3 = undefined;
                            var2 = this;
                            var1 = arg0;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var1 ^ var0;
                                return var0;
                            };
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var12.xor = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.xor;
                        var13.xor = var11;
                        var12.xor = var11;
                        var11 = 1073741824;
                        var _closure2_slot7 = var11;
                        var12 = var8.prototype;
                        var11 = function() { // Environment: var1
                            _fun1075: for (var _fun1075_ip = 0;;) switch (_fun1075_ip) {
                                case 0:
                                    var5 = this;
                                    var4 = var5.compareTo;
                                    var0 = _closure1_slot0;
                                    var3 = undefined;
                                    var2 = 0;
                                    var0 = var0.bind(var3)(var2);
                                    var0 = var4.bind(var5)(var0);
                                    var4 = var5;
                                    if (!(var0 < var2)) {
                                        _fun1075_ip = 70;
                                        continue _fun1075
                                    }
                                case 37:
                                    var0 = var5.negate;
                                    var6 = var0.bind(var5)();
                                    var5 = var6.subtract;
                                    var7 = _closure1_slot0;
                                    var0 = 1;
                                    var0 = var7.bind(var3)(var0);
                                    var4 = var5.bind(var6)(var0);
                                case 70:
                                    var5 = var4.compareTo;
                                    var0 = _closure1_slot0;
                                    var0 = var0.bind(var3)(var2);
                                    var0 = var5.bind(var4)(var0);
                                    var6 = var4;
                                    if (!(var2 !== var0)) {
                                        _fun1075_ip = 156;
                                        continue _fun1075
                                    }
                                case 97:
                                    var4 = _closure1_slot0;
                                    var5 = _closure2_slot38;
                                    var0 = 2;
                                    var0 = var4.bind(var3)(var0);
                                    var0 = var5.bind(var3)(var6, var0);
                                    var0 = var0.e;
                                    var5 = var4.bind(var3)(var0);
                                    var4 = var5.add;
                                    var6 = _closure1_slot0;
                                    var0 = 1;
                                    var0 = var6.bind(var3)(var0);
                                    var0 = var4.bind(var5)(var0);
                                    _fun1075_ip = 165;
                                    continue _fun1075;
                                case 156:
                                    var1 = _closure1_slot0;
                                    var0 = var1.bind(var3)(var2);
                                case 165:
                                    return var0;
                            }
                        };
                        var12.bitLength = var11;
                        var12 = var5.prototype;
                        var13 = var7.prototype;
                        var11 = var8.prototype;
                        var11 = var11.bitLength;
                        var13.bitLength = var11;
                        var12.bitLength = var11;
                        var11 = function(arg0, arg1, arg2, arg3) { // Original name: parseBase, environment: var1
                            _fun1076: for (var _fun1076_ip = 0;;) switch (_fun1076_ip) {
                                case 0:
                                    var2 = arg1;
                                    var3 = arg2;
                                    if (var3) {
                                        _fun1076_ip = 16;
                                        continue _fun1076
                                    }
                                case 9:
                                    var3 = _closure2_slot2;
                                case 16:
                                    var13 = global;
                                    var1 = var13.String;
                                    var4 = undefined;
                                    var0 = arg0;
                                    var1 = var1.bind(var4)(var0);
                                    var0 = arg3;
                                    var12 = var1;
                                    var5 = var3;
                                    if (var0) {
                                        _fun1076_ip = 66;
                                        continue _fun1076
                                    }
                                case 46:
                                    var0 = var1.toLowerCase;
                                    var12 = var0.bind(var1)();
                                    var0 = var3.toLowerCase;
                                    var5 = var0.bind(var3)();
                                case 66:
                                    var6 = var12.length;
                                    var1 = var13.Math;
                                    var0 = var1.abs;
                                    var3 = var0.bind(var1)(var2);
                                    var11 = {};
                                    var0 = var5.length;
                                    var10 = 0;
                                    var0 = var10 < var0;
                                    var1 = 0;
                                    if (!var0) {
                                        _fun1076_ip = 126;
                                        continue _fun1076
                                    }
                                case 106:
                                    var0 = var5[var1];
                                    var11[var0] = var1;
                                    var1 = var1 + 1;
                                    var0 = var5.length;
                                    if (var1 < var0) {
                                        _fun1076_ip = 106;
                                        continue _fun1076
                                    }
                                case 126:
                                    var7 = var10 < var6;
                                    var9 = 1;
                                    var1 = '1';
                                    var5 = '-';
                                    var0 = 0;
                                    if (!var7) {
                                        _fun1076_ip = 236;
                                        continue _fun1076
                                    }
                                case 148:
                                    var8 = var12[var0];
                                    if (!(var5 !== var8)) {
                                        _fun1076_ip = 229;
                                        continue _fun1076
                                    }
                                case 156:
                                    var7 = var8 in var11;
                                    if (!var7) {
                                        _fun1076_ip = 229;
                                        continue _fun1076
                                    }
                                case 163:
                                    var7 = var11[var8];
                                    if (!(var7 >= var3)) {
                                        _fun1076_ip = 229;
                                        continue _fun1076
                                    }
                                case 171:
                                    if (!(var1 === var8)) {
                                        _fun1076_ip = 179;
                                        continue _fun1076
                                    }
                                case 175:
                                    if (!(var9 !== var3)) {
                                        _fun1076_ip = 229;
                                        continue _fun1076
                                    }
                                case 179:
                                    var14 = var13.Error;
                                    var7 = ' is not a valid digit in base ';
                                    var7 = var8 + var7;
                                    var15 = var7 + var2;
                                    var7 = var14.prototype;
                                    var8 = Object.create(var7, {
                                        constructor: {
                                            value: var14
                                        }
                                    });
                                    var7 = '.';
                                    var21 = var15 + var7;
                                    var22 = var8;
                                    var7 = new var22[var14](var21, var20);
                                    var7 = var7 instanceof Object ? var7 : var8;
                                    throw var7;
                                case 229:
                                    var0 = var0 + 1;
                                    if (var0 < var6) {
                                        _fun1076_ip = 148;
                                        continue _fun1076
                                    }
                                case 236:
                                    var1 = _closure2_slot46;
                                    var3 = var1.bind(var4)(var2);
                                    var2 = new Array(0);
                                    var1 = var12[var10];
                                    var1 = var5 === var1;
                                    var10 = 0;
                                    if (!var1) {
                                        _fun1076_ip = 268;
                                        continue _fun1076
                                    }
                                case 265:
                                    var10 = var9;
                                case 268:
                                    var5 = var12.length;
                                    var5 = var10 < var5;
                                    var8 = '>';
                                    var7 = '<';
                                    var6 = undefined;
                                    if (!var5) {
                                        _fun1076_ip = 458;
                                        continue _fun1076
                                    }
                                case 293:
                                    var15 = var12[var10];
                                    var5 = var15 in var11;
                                    if (var5) {
                                        _fun1076_ip = 411;
                                        continue _fun1076
                                    }
                                case 304:
                                    var16 = var10;
                                    if (!(var7 === var15)) {
                                        _fun1076_ip = 373;
                                        continue _fun1076
                                    }
                                case 311:
                                    var5 = var16 + 1;
                                    var14 = var12[var5];
                                    if (!(var8 !== var14)) {
                                        _fun1076_ip = 334;
                                        continue _fun1076
                                    }
                                case 322:
                                    var14 = var12.length;
                                    var16 = var5;
                                    if (var5 < var14) {
                                        _fun1076_ip = 311;
                                        continue _fun1076
                                    }
                                case 334:
                                    var16 = var2.push;
                                    var17 = _closure2_slot46;
                                    var18 = var12.slice;
                                    var14 = var10 + var9;
                                    var14 = var18.bind(var12)(var14, var5);
                                    var14 = var17.bind(var4)(var14);
                                    var14 = var16.bind(var2)(var14);
                                    var14 = var10;
                                    _fun1076_ip = 440;
                                    continue _fun1076;
                                case 373:
                                    var18 = var13.Error;
                                    var16 = ' is not a valid character';
                                    var21 = var15 + var16;
                                    var17 = var18.prototype;
                                    var17 = Object.create(var17, {
                                        constructor: {
                                            value: var18
                                        }
                                    });
                                    var22 = var17;
                                    var16 = new var22[var18](var21, var20);
                                    var16 = var16 instanceof Object ? var16 : var17;
                                    throw var16;
                                case 411:
                                    var16 = var2.push;
                                    var17 = _closure2_slot46;
                                    var15 = var11[var15];
                                    var15 = var17.bind(var4)(var15);
                                    var15 = var16.bind(var2)(var15);
                                    var5 = var10;
                                    var14 = var6;
                                case 440:
                                    var10 = var5 + 1;
                                    var5 = var12.length;
                                    var6 = var14;
                                    if (var10 < var5) {
                                        _fun1076_ip = 293;
                                        continue _fun1076
                                    }
                                case 458:
                                    var0 = _closure2_slot42;
                                    var0 = var0.bind(var4)(var2, var3, var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot8 = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot43;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var12.toArray = var11;
                        var12 = var7.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot43;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var12.toArray = var11;
                        var12 = var5.prototype;
                        var11 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot43;
                            var2 = undefined;
                            var1 = this;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var12.toArray = var11;
                        var12 = var8.prototype;
                        var11 = function(arg0, arg1) { // Environment: var1
                            _fun1080: for (var _fun1080_ip = 0;;) switch (_fun1080_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = this;
                                    var1 = _closure2_slot0;
                                    if (!(var4 === var1)) {
                                        _fun1080_ip = 20;
                                        continue _fun1080
                                    }
                                case 17:
                                    var4 = 10;
                                case 20:
                                    var1 = 10;
                                    if (!(var1 === var4)) {
                                        _fun1080_ip = 154;
                                        continue _fun1080
                                    }
                                case 30:
                                    var10 = var3.value;
                                    var1 = var10.length;
                                    var9 = global;
                                    var5 = var9.String;
                                    var1 = var1 - 1;
                                    var2 = var10[var1];
                                    var8 = undefined;
                                    var2 = var5.bind(var8)(var2);
                                    var7 = var1 - 1;
                                    var6 = '0000000';
                                    var5 = 0;
                                    var1 = var2;
                                    var2 = var1;
                                    if (!(var7 >= var5)) {
                                        _fun1080_ip = 131;
                                        continue _fun1080
                                    }
                                case 83:
                                    var12 = var9.String;
                                    var11 = var10[var7];
                                    var12 = var12.bind(var8)(var11);
                                    var13 = var6.slice;
                                    var11 = var12.length;
                                    var11 = var13.bind(var6)(var11);
                                    var11 = var11 + var12;
                                    var1 = var1 + var11;
                                    var7 = var7 - 1;
                                    var2 = var1;
                                    if (var7 >= var5) {
                                        _fun1080_ip = 83;
                                        continue _fun1080
                                    }
                                case 131:
                                    var5 = var3.sign;
                                    var1 = '';
                                    if (!var5) {
                                        _fun1080_ip = 148;
                                        continue _fun1080
                                    }
                                case 144:
                                    var1 = '-';
                                case 148:
                                    var1 = var1 + var2;
                                    return var1;
                                case 154:
                                    var2 = _closure2_slot44;
                                    var1 = undefined;
                                    var0 = arg1;
                                    var0 = var2.bind(var1)(var3, var4, var0);
                                    return var0;
                            }
                        };
                        var12.toString = var11;
                        var12 = var7.prototype;
                        var11 = function(arg0, arg1) { // Environment: var1
                            _fun1081: for (var _fun1081_ip = 0;;) switch (_fun1081_ip) {
                                case 0:
                                    var5 = arg0;
                                    var4 = this;
                                    var0 = _closure2_slot0;
                                    if (!(var5 === var0)) {
                                        _fun1081_ip = 20;
                                        continue _fun1081
                                    }
                                case 17:
                                    var5 = 10;
                                case 20:
                                    var0 = 10;
                                    if (!(var0 == var5)) {
                                        _fun1081_ip = 49;
                                        continue _fun1081
                                    }
                                case 27:
                                    var0 = global;
                                    var3 = var0.String;
                                    var2 = var4.value;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2);
                                    _fun1081_ip = 65;
                                    continue _fun1081;
                                case 49:
                                    var3 = _closure2_slot44;
                                    var2 = undefined;
                                    var1 = arg1;
                                    var0 = var3.bind(var2)(var4, var5, var1);
                                case 65:
                                    return var0;
                            }
                        };
                        var12.toString = var11;
                        var12 = var5.prototype;
                        var11 = var7.prototype;
                        var11 = var11.toString;
                        var12.toString = var11;
                        var12 = var5.prototype;
                        var13 = var8.prototype;
                        var14 = var7.prototype;
                        var11 = function() { // Environment: var1
                            var1 = this;
                            var0 = var1.toString;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var14.toJSON = var11;
                        var13.toJSON = var11;
                        var12.toJSON = var11;
                        var12 = var8.prototype;
                        var11 = function() { // Environment: var1
                            var1 = this;
                            var0 = global;
                            var3 = var0.parseInt;
                            var0 = var1.toString;
                            var2 = var0.bind(var1)();
                            var1 = undefined;
                            var0 = 10;
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var12.valueOf = var11;
                        var11 = var8.prototype;
                        var8 = var8.prototype;
                        var8 = var8.valueOf;
                        var11.toJSNumber = var8;
                        var11 = var7.prototype;
                        var8 = function() { // Environment: var1
                            var0 = this;
                            var0 = var0.value;
                            return var0;
                        };
                        var11.valueOf = var8;
                        var8 = var7.prototype;
                        var7 = var7.prototype;
                        var7 = var7.valueOf;
                        var8.toJSNumber = var7;
                        var7 = var5.prototype;
                        var8 = var5.prototype;
                        var5 = function() { // Environment: var1
                            var1 = this;
                            var0 = global;
                            var3 = var0.parseInt;
                            var0 = var1.toString;
                            var2 = var0.bind(var1)();
                            var1 = undefined;
                            var0 = 10;
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var8.toJSNumber = var5;
                        var7.valueOf = var5;
                        var5 = 0;
                        var8 = 1000;
                        var7 = 0;
                    case 3294:
                        var11 = var10.bind(var9)(var7);
                        var0[var7] = var11;
                        var11 = var7;
                        if (!(var11 > var5)) {
                            _fun960_ip = 3322;
                            continue _fun960
                        }
                    case 3310:
                        var13 = -var11;
                        var12 = var10.bind(var9)(var13);
                        var0[var13] = var12;
                    case 3322:
                        var7 = var11 + 1;
                        if (var7 < var8) {
                            _fun960_ip = 3294;
                            continue _fun960
                        }
                    case 3329:
                        var6 = var0[var6];
                        var0.one = var6;
                        var5 = var0[var5];
                        var0.zero = var5;
                        var5 = -1;
                        var5 = var0[var5];
                        var0.minusOne = var5;
                        var0.max = var4;
                        var0.min = var3;
                        var0.gcd = var2;
                        var2 = function(arg0, arg1) { // Original name: lcm, environment: var1
                            var2 = _closure2_slot46;
                            var4 = undefined;
                            var1 = arg0;
                            var3 = var2.bind(var4)(var1);
                            var1 = var3.abs;
                            var3 = var1.bind(var3)();
                            var1 = arg1;
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.abs;
                            var2 = var1.bind(var2)();
                            var1 = var3.divide;
                            var0 = _closure2_slot41;
                            var0 = var0.bind(var4)(var3, var2);
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.multiply;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                        };
                        var0.lcm = var2;
                        var2 = function(arg0) { // Environment: var1
                            _fun1087: for (var _fun1087_ip = 0;;) switch (_fun1087_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = _closure2_slot10;
                                    var0 = var2 instanceof var0;
                                    if (var0) {
                                        _fun1087_ip = 25;
                                        continue _fun1087
                                    }
                                case 17:
                                    var3 = _closure2_slot11;
                                    var0 = var2 instanceof var3;
                                case 25:
                                    if (var0) {
                                        _fun1087_ip = 36;
                                        continue _fun1087
                                    }
                                case 28:
                                    var1 = _closure2_slot12;
                                    var0 = var2 instanceof var1;
                                case 36:
                                    return var0;
                            }
                        };
                        var0.isInstance = var2;
                        var2 = function(arg0, arg1, arg2) { // Original name: randBetween, environment: var1
                            _fun1088: for (var _fun1088_ip = 0;;) switch (_fun1088_ip) {
                                case 0:
                                    var6 = arg2;
                                    var3 = _closure2_slot46;
                                    var0 = undefined;
                                    var2 = arg0;
                                    var5 = var3.bind(var0)(var2);
                                    var2 = arg1;
                                    var4 = var3.bind(var0)(var2);
                                    if (var6) {
                                        _fun1088_ip = 45;
                                        continue _fun1088
                                    }
                                case 31:
                                    var2 = global;
                                    var2 = var2.Math;
                                    var6 = var2.random;
                                case 45:
                                    var2 = _closure2_slot40;
                                    var2 = var2.bind(var0)(var5, var4);
                                    var3 = _closure2_slot39;
                                    var4 = var3.bind(var0)(var5, var4);
                                    var3 = var4.subtract;
                                    var5 = var3.bind(var4)(var2);
                                    var4 = var5.add;
                                    var3 = 1;
                                    var5 = var4.bind(var5)(var3);
                                    var3 = var5.isSmall;
                                    if (var3) {
                                        _fun1088_ip = 228;
                                        continue _fun1088
                                    }
                                case 101:
                                    var3 = _closure2_slot43;
                                    var9 = 10000000;
                                    var3 = var3.bind(var0)(var5, var9);
                                    var11 = var3.value;
                                    var8 = new Array(0);
                                    var3 = var11.length;
                                    var10 = 0;
                                    var3 = var10 < var3;
                                    var7 = false;
                                    var4 = true;
                                    if (!var3) {
                                        _fun1088_ip = 199;
                                        continue _fun1088
                                    }
                                case 144:
                                    var12 = var9;
                                    if (!var4) {
                                        _fun1088_ip = 154;
                                        continue _fun1088
                                    }
                                case 150:
                                    var12 = var11[var10];
                                case 154:
                                    var13 = _closure2_slot18;
                                    var3 = var6.bind(var0)();
                                    var3 = var3 * var12;
                                    var3 = var13.bind(var0)(var3);
                                    var13 = var8.push;
                                    var13 = var13.bind(var8)(var3);
                                    if (!(var3 < var12)) {
                                        _fun1088_ip = 187;
                                        continue _fun1088
                                    }
                                case 185:
                                    var4 = false;
                                case 187:
                                    var10 = var10 + 1;
                                    var3 = var11.length;
                                    if (var10 < var3) {
                                        _fun1088_ip = 144;
                                        continue _fun1088
                                    }
                                case 199:
                                    var3 = var2.add;
                                    var4 = _closure2_slot9;
                                    var1 = var4.fromArray;
                                    var1 = var1.bind(var4)(var8, var9, var7);
                                    var1 = var3.bind(var2)(var1);
                                    return var1;
                                case 228:
                                    var1 = var2.add;
                                    var3 = global;
                                    var4 = var3.Math;
                                    var3 = var4.floor;
                                    var0 = var6.bind(var0)();
                                    var0 = var0 * var5;
                                    var0 = var3.bind(var4)(var0);
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var0.randBetween = var2;
                        var1 = function(arg0, arg1, arg2) { // Environment: var1
                            _fun1089: for (var _fun1089_ip = 0;;) switch (_fun1089_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = arg1;
                                    var4 = _closure2_slot42;
                                    var2 = var3.map;
                                    var0 = _closure2_slot46;
                                    var3 = var2.bind(var3)(var0);
                                    if (var1) {
                                        _fun1089_ip = 33;
                                        continue _fun1089
                                    }
                                case 30:
                                    var1 = 10;
                                case 33:
                                    var2 = undefined;
                                    var1 = var0.bind(var2)(var1);
                                    var0 = arg2;
                                    var0 = var4.bind(var2)(var3, var1, var0);
                                    return var0;
                            }
                        };
                        var0.fromArray = var1;
                        return var0;
                }
            };
            var0 = undefined;
            var2 = var2.bind(var0)();
            var _closure1_slot0 = var2;
            var4 = var0 !== var3;
            if (!var4) {
                _fun959_ip = 42;
                continue _fun959
            }
        case 27:
            var6 = var3.hasOwnProperty;
            var5 = 'exports';
            var4 = var6.bind(var3)(var5);
        case 42:
            if (!var4) {
                _fun959_ip = 51;
                continue _fun959
            }
        case 45:
            var3.exports = var2;
        case 51:
            var2 = global;
            var3 = var2.define;
            var4 = 'function';
            var3 = typeof var3;
            var3 = var4 === var3;
            if (!var3) {
                _fun959_ip = 85;
                continue _fun959
            }
        case 73:
            var4 = var2.define;
            var3 = var4.amd;
        case 85:
            if (!var3) {
                _fun959_ip = 104;
                continue _fun959
            }
        case 88:
            var2 = var2.define;
            var1 = function() { // Environment: var1
                var0 = _closure1_slot0;
                return var0;
            };
            var1 = var2.bind(var0)(var1);
        case 104:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);