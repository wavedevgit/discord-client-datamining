// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun14784: for (var _fun14784_ip = 0;;) switch (_fun14784_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.base64decode = var0;
            var2.base64encode = var0;
            var5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var4 = var5.split;
            var3 = '';
            var7 = var4.bind(var5)(var3);
            var _closure1_slot0 = var7;
            var5 = new Array(0);
            var _closure1_slot1 = var5;
            var3 = var7.length;
            var6 = 0;
            var3 = var6 < var3;
            var4 = 0;
            if (!var3) {
                _fun14784_ip = 130;
                continue _fun14784
            }
        case 99:
            var8 = var7[var4];
            var3 = var8.charCodeAt;
            var3 = var3.bind(var8)(var6);
            var5[var3] = var4;
            var4 = var4 + 1;
            var3 = var7.length;
            if (var4 < var3) {
                _fun14784_ip = 99;
                continue _fun14784
            }
        case 130:
            var4 = '-';
            var3 = var4.charCodeAt;
            var4 = var3.bind(var4)(var6);
            var8 = var7.indexOf;
            var3 = '+';
            var3 = var8.bind(var7)(var3);
            var5[var4] = var3;
            var4 = '_';
            var3 = var4.charCodeAt;
            var4 = var3.bind(var4)(var6);
            var6 = var7.indexOf;
            var3 = '/';
            var3 = var6.bind(var7)(var3);
            var5[var4] = var3;
            var3 = function arg0() {
                _fun14785: for (var _fun14785_ip = 0;;) switch (_fun14785_ip) {
                    case 0:
                        var25 = arg0;
                        var0 = var25.length;
                        var24 = 3;
                        var0 = var24 * var0;
                        var23 = 4;
                        var0 = var0 / var23;
                        var1 = var25.length;
                        var22 = 2;
                        var1 = var1 - var22;
                        var1 = var25[var1];
                        var21 = '=';
                        if (!(var21 != var1)) {
                            _fun14785_ip = 75;
                            continue _fun14785
                        }
                    case 46:
                        var2 = var25.length;
                        var1 = 1;
                        var2 = var2 - var1;
                        var2 = var25[var2];
                        var3 = var0;
                        if (!(var21 == var2)) {
                            _fun14785_ip = 79;
                            continue _fun14785
                        }
                    case 69:
                        var3 = var0 - var1;
                        _fun14785_ip = 79;
                        continue _fun14785;
                    case 75:
                        var3 = var0 - var22;
                    case 79:
                        var0 = global;
                        var1 = var0.Uint8Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var36 = var2;
                        var35 = var3;
                        var1 = new var36[var1](var35, var34);
                        var5 = var1 instanceof Object ? var1 : var2;
                        var1 = var25.length;
                        var4 = 0;
                        var7 = var4 < var1;
                        var20 = ' ';
                        var19 = '\t';
                        var18 = '\r';
                        var17 = '\n';
                        var6 = 1;
                        var16 = 48;
                        var15 = 15;
                        var14 = 60;
                        var13 = 6;
                        var2 = undefined;
                        var11 = 0;
                        var10 = 0;
                        var9 = 0;
                        var8 = 0;
                        var3 = 0;
                        var1 = 0;
                        if (!var7) {
                            _fun14785_ip = 472;
                            continue _fun14785
                        }
                    case 177:
                        var26 = _closure1_slot1;
                        var7 = var25.charCodeAt;
                        var7 = var7.bind(var25)(var8);
                        var29 = var26[var7];
                        var7 = var8;
                        if (!(var2 !== var29)) {
                            _fun14785_ip = 355;
                            continue _fun14785
                        }
                    case 206:
                        if (!(var4 !== var10)) {
                            _fun14785_ip = 344;
                            continue _fun14785
                        }
                    case 213:
                        if (!(var6 !== var10)) {
                            _fun14785_ip = 310;
                            continue _fun14785
                        }
                    case 217:
                        if (!(var22 !== var10)) {
                            _fun14785_ip = 269;
                            continue _fun14785
                        }
                    case 221:
                        var27 = var11;
                        var28 = var9;
                        var26 = var10;
                        if (!(var24 === var26)) {
                            _fun14785_ip = 442;
                            continue _fun14785
                        }
                    case 237:
                        var32 = parseFloat(var11);
                        var27 = var32 + 1;
                        var31 = var24 & var9;
                        var31 = var31 << var13;
                        var31 = var31 | var29;
                        var5[var32] = var31;
                        var26 = 0;
                        var28 = var9;
                        _fun14785_ip = 442;
                        continue _fun14785;
                    case 269:
                        var32 = parseFloat(var11);
                        var27 = var32 + 1;
                        var33 = var15 & var9;
                        var31 = var14 & var29;
                        var33 = var33 << var23;
                        var31 = var31 >> var22;
                        var31 = var33 | var31;
                        var5[var32] = var31;
                        var26 = var24;
                        var28 = var29;
                        _fun14785_ip = 442;
                        continue _fun14785;
                    case 310:
                        var32 = parseFloat(var11);
                        var27 = var32 + 1;
                        var33 = var9 << var22;
                        var31 = var16 & var29;
                        var31 = var31 >> var23;
                        var31 = var33 | var31;
                        var5[var32] = var31;
                        var26 = var22;
                        var28 = var29;
                        _fun14785_ip = 442;
                        continue _fun14785;
                    case 344:
                        var27 = var11;
                        var26 = var6;
                        var28 = var29;
                        _fun14785_ip = 442;
                        continue _fun14785;
                    case 355:
                        var29 = var25[var7];
                        if (!(var21 !== var29)) {
                            _fun14785_ip = 434;
                            continue _fun14785
                        }
                    case 363:
                        var27 = var11;
                        var26 = var10;
                        var28 = var9;
                        if (!(var17 !== var29)) {
                            _fun14785_ip = 442;
                            continue _fun14785
                        }
                    case 376:
                        var27 = var11;
                        var26 = var10;
                        var28 = var9;
                        if (!(var18 !== var29)) {
                            _fun14785_ip = 442;
                            continue _fun14785
                        }
                    case 389:
                        var27 = var11;
                        var26 = var10;
                        var28 = var9;
                        if (!(var19 !== var29)) {
                            _fun14785_ip = 442;
                            continue _fun14785
                        }
                    case 402:
                        var27 = var11;
                        var26 = var10;
                        var28 = var9;
                        if (!(var20 !== var29)) {
                            _fun14785_ip = 442;
                            continue _fun14785
                        }
                    case 415:
                        var30 = var0.Error;
                        var29 = 'invalid base64 string.';
                        var29 = var30.bind(var2)(var29);
                        throw var29;
                    case 434:
                        var27 = var11;
                        var26 = 0;
                        var28 = var9;
                    case 442:
                        var8 = var7 + 1;
                        var7 = var25.length;
                        var11 = var27;
                        var10 = var26;
                        var9 = var28;
                        var3 = var11;
                        var1 = var10;
                        if (var8 < var7) {
                            _fun14785_ip = 177;
                            continue _fun14785
                        }
                    case 472:
                        if (!(var6 !== var1)) {
                            _fun14785_ip = 490;
                            continue _fun14785
                        }
                    case 476:
                        var1 = var5.subarray;
                        var1 = var1.bind(var5)(var4, var3);
                        return var1;
                    case 490:
                        var1 = var0.Error;
                        var0 = 'invalid base64 string.';
                        var0 = var1.bind(var2)(var0);
                        throw var0;
                }
            };
            var2.base64decode = var3;
            var1 = function arg0() {
                _fun14786: for (var _fun14786_ip = 0;;) switch (_fun14786_ip) {
                    case 0:
                        var17 = arg0;
                        var0 = var17.length;
                        var16 = 0;
                        var0 = var16 < var0;
                        var9 = '';
                        var15 = 2;
                        var14 = 3;
                        var13 = 4;
                        var5 = 1;
                        var12 = 15;
                        var11 = 6;
                        var10 = 63;
                        var8 = 0;
                        var7 = 0;
                        var6 = 0;
                        var2 = var9;
                        var4 = 0;
                        var3 = 0;
                        if (!var0) {
                            _fun14786_ip = 212;
                            continue _fun14786
                        }
                    case 61:
                        var0 = var17[var6];
                        if (!(var16 !== var8)) {
                            _fun14786_ip = 155;
                            continue _fun14786
                        }
                    case 69:
                        if (!(var5 !== var8)) {
                            _fun14786_ip = 122;
                            continue _fun14786
                        }
                    case 73:
                        var20 = var9;
                        var18 = var7;
                        if (!(var15 === var8)) {
                            _fun14786_ip = 182;
                            continue _fun14786
                        }
                    case 83:
                        var22 = _closure1_slot0;
                        var19 = var0 >> var11;
                        var19 = var7 | var19;
                        var19 = var22[var19];
                        var21 = var9 + var19;
                        var19 = var10 & var0;
                        var19 = var22[var19];
                        var20 = var21 + var19;
                        var8 = 0;
                        var18 = var7;
                        _fun14786_ip = 182;
                        continue _fun14786;
                    case 122:
                        var21 = _closure1_slot0;
                        var19 = var0 >> var13;
                        var19 = var7 | var19;
                        var19 = var21[var19];
                        var20 = var9 + var19;
                        var19 = var12 & var0;
                        var18 = var19 << var15;
                        var8 = var15;
                        _fun14786_ip = 182;
                        continue _fun14786;
                    case 155:
                        var21 = _closure1_slot0;
                        var19 = var0 >> var15;
                        var19 = var21[var19];
                        var20 = var9 + var19;
                        var0 = var14 & var0;
                        var18 = var0 << var13;
                        var8 = var5;
                    case 182:
                        var6 = var6 + 1;
                        var0 = var17.length;
                        var9 = var20;
                        var7 = var18;
                        var2 = var9;
                        var4 = var8;
                        var3 = var7;
                        if (var6 < var0) {
                            _fun14786_ip = 61;
                            continue _fun14786
                        }
                    case 212:
                        var0 = var2;
                        if (!var4) {
                            _fun14786_ip = 252;
                            continue _fun14786
                        }
                    case 218:
                        var1 = _closure1_slot0;
                        var1 = var1[var3];
                        var1 = var2 + var1;
                        var3 = '=';
                        var2 = var1 + var3;
                        var1 = var2;
                        if (!(var5 === var4)) {
                            _fun14786_ip = 249;
                            continue _fun14786
                        }
                    case 245:
                        var1 = var2 + var3;
                    case 249:
                        var0 = var1;
                    case 252:
                        return var0;
                }
            };
            var2.base64encode = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);