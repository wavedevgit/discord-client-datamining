// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Environment: var0
        _fun60793: for (var _fun60793_ip = 0;;) switch (_fun60793_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Buffer;
                var1 = var2.isBuffer;
                var1 = var1.bind(var2)(var3);
                var14 = var3;
                if (var1) {
                    _fun60793_ip = 57;
                    continue _fun60793
                }
            case 28:
                var1 = var0.Buffer;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var22 = var2;
                var21 = var3;
                var1 = new var22[var1](var21, var20);
                var14 = var1 instanceof Object ? var1 : var2;
            case 57:
                var2 = var0.Buffer;
                var3 = var0.Math;
                var1 = var3.floor;
                var0 = var14.length;
                var13 = 5;
                var0 = var0 / var13;
                var3 = var1.bind(var3)(var0);
                var0 = var14.length;
                var1 = var0 % var13;
                var12 = 0;
                var0 = var3;
                if (!(var1 !== var12)) {
                    _fun60793_ip = 117;
                    continue _fun60793
                }
            case 110:
                var1 = 1;
                var0 = var3 + var1;
            case 117:
                var11 = 8;
                var21 = var11 * var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var22 = var1;
                var0 = new var22[var2](var21, var20);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = var14.length;
                var1 = var12 < var1;
                var10 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
                var9 = 1;
                var8 = 255;
                var7 = 31;
                var6 = 3;
                var5 = 0;
                var4 = 0;
                var2 = 0;
                var3 = 0;
                if (!var1) {
                    _fun60793_ip = 340;
                    continue _fun60793
                }
            case 185:
                var18 = var14[var5];
                if (!(!(var2 > var6))) {
                    _fun60793_ip = 237;
                    continue _fun60793
                }
            case 193:
                var15 = var2 + var13;
                var1 = var11 - var15;
                var1 = var18 >> var1;
                var1 = var1 & var7;
                var19 = var15 % var11;
                var15 = var5;
                var17 = var19;
                var16 = var1;
                if (!(var12 === var19)) {
                    _fun60793_ip = 301;
                    continue _fun60793
                }
            case 226:
                var15 = var5 + 1;
                var17 = var19;
                var16 = var1;
                _fun60793_ip = 301;
                continue _fun60793;
            case 237:
                var1 = var8 >> var2;
                var1 = var18 & var1;
                var18 = var2 + var13;
                var18 = var18 % var11;
                var20 = var5 + var9;
                var19 = var14.length;
                var19 = var20 < var19;
                var20 = 0;
                if (!var19) {
                    _fun60793_ip = 279;
                    continue _fun60793
                }
            case 271:
                var19 = var5 + var9;
                var20 = var14[var19];
            case 279:
                var19 = var11 - var18;
                var19 = var20 >> var19;
                var1 = var1 << var18;
                var16 = var1 | var19;
                var15 = var5 + 1;
                var17 = var18;
            case 301:
                var1 = var10.charCodeAt;
                var1 = var1.bind(var10)(var16);
                var0[var4] = var1;
                var4 = var4 + 1;
                var1 = var14.length;
                var5 = var15;
                var2 = var17;
                var3 = var4;
                if (var5 < var1) {
                    _fun60793_ip = 185;
                    continue _fun60793
                }
            case 340:
                var1 = var0.length;
                var2 = 61;
                if (!(var3 < var1)) {
                    _fun60793_ip = 368;
                    continue _fun60793
                }
            case 352:
                var0[var3] = var2;
                var3 = var3 + 1;
                var1 = var0.length;
                if (var3 < var1) {
                    _fun60793_ip = 352;
                    continue _fun60793
                }
            case 368:
                return var0;
        }
    };
    var1.encode = var2;
    var0 = function(arg0) { // Environment: var0
        _fun60794: for (var _fun60794_ip = 0;;) switch (_fun60794_ip) {
            case 0:
                var2 = arg0;
                var16 = global;
                var1 = var16.Buffer;
                var0 = var1.isBuffer;
                var0 = var0.bind(var1)(var2);
                var15 = var2;
                if (var0) {
                    _fun60794_ip = 57;
                    continue _fun60794
                }
            case 28:
                var0 = var16.Buffer;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var24 = var1;
                var23 = var2;
                var0 = new var24[var0](var23, var22);
                var15 = var0 instanceof Object ? var0 : var1;
            case 57:
                var2 = var16.Buffer;
                var3 = var16.Math;
                var1 = var3.ceil;
                var0 = var15.length;
                var14 = 5;
                var0 = var14 * var0;
                var13 = 8;
                var0 = var0 / var13;
                var23 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var24 = var1;
                var0 = new var24[var2](var23, var22);
                var3 = var0 instanceof Object ? var0 : var1;
                var0 = var15.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = 0;
                if (!var0) {
                    _fun60794_ip = 375;
                    continue _fun60794
                }
            case 138:
                var0 = var15[var2];
                var12 = 61;
                var0 = var12 != var0;
                var10 = 255;
                var8 = 3;
                var7 = 48;
                var11 = undefined;
                var6 = 0;
                var5 = 0;
                var4 = 0;
                var1 = 0;
                if (!var0) {
                    _fun60794_ip = 375;
                    continue _fun60794
                }
            case 177:
                var0 = var15[var4];
                var17 = var0 - var7;
                var0 = _closure1_slot0;
                var0 = var0.length;
                if (!(!(var17 < var0))) {
                    _fun60794_ip = 232;
                    continue _fun60794
                }
            case 198:
                var19 = var16.Error;
                var0 = var19.prototype;
                var18 = Object.create(var0, {
                    constructor: {
                        value: var19
                    }
                });
                var23 = 'Invalid input - it is not base32 encoded string';
                var24 = var18;
                var0 = new var24[var19](var23, var22);
                var0 = var0 instanceof Object ? var0 : var18;
                throw var0;
            case 232:
                var0 = _closure1_slot0;
                var0 = var0[var17];
                if (!(!(var6 <= var8))) {
                    _fun60794_ip = 285;
                    continue _fun60794
                }
            case 244:
                var17 = var6 + var14;
                var18 = var17 % var13;
                var17 = var0 >>> var18;
                var17 = var10 & var17;
                var17 = var11 | var17;
                var3[var5] = var17;
                var17 = var5 + 1;
                var19 = var13 - var18;
                var19 = var0 << var19;
                var19 = var10 & var19;
                _fun60794_ip = 337;
                continue _fun60794;
            case 285:
                var20 = var6 + var14;
                var20 = var20 % var13;
                if (!(var2 !== var20)) {
                    _fun60794_ip = 321;
                    continue _fun60794
                }
            case 297:
                var21 = var13 - var20;
                var21 = var0 << var21;
                var21 = var10 & var21;
                var19 = var11 | var21;
                var18 = var20;
                var17 = var5;
                _fun60794_ip = 337;
                continue _fun60794;
            case 321:
                var0 = var11 | var0;
                var3[var5] = var0;
                var17 = var5 + 1;
                var19 = 0;
                var18 = var20;
            case 337:
                var4 = var4 + 1;
                var0 = var15.length;
                var1 = var17;
                if (!(var4 < var0)) {
                    _fun60794_ip = 375;
                    continue _fun60794
                }
            case 352:
                var0 = var15[var4];
                var11 = var19;
                var6 = var18;
                var5 = var17;
                var1 = var5;
                if (var12 != var0) {
                    _fun60794_ip = 177;
                    continue _fun60794
                }
            case 375:
                var0 = var3.slice;
                var0 = var0.bind(var3)(var2, var1);
                return var0;
        }
    };
    var1.decode = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);