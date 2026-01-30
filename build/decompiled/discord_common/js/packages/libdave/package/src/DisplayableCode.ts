// ../discord_common/js/packages/libdave/package/src/DisplayableCode.ts
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = '../discord_common/js/packages/libdave/package/src/DisplayableCode.ts';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1, arg2) { // Original name: generateDisplayableCode, environment: var1
        _fun66519: for (var _fun66519_ip = 0;;) switch (_fun66519_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var10 = arg2;
                var0 = var12.byteLength;
                if (!(!(var0 < var11))) {
                    _fun66519_ip = 315;
                    continue _fun66519
                }
            case 22:
                var0 = var11 % var10;
                var9 = 0;
                if (!(var0 == var9)) {
                    _fun66519_ip = 279;
                    continue _fun66519
                }
            case 35:
                var0 = 8;
                if (!(!(var10 > var0))) {
                    _fun66519_ip = 243;
                    continue _fun66519
                }
            case 45:
                var0 = global;
                var2 = var0.BigInt;
                var20 = 10;
                var19 = var10;
                var1 = exponentiationOperator(var20, var19);
                var8 = undefined;
                var7 = var2.bind(var8)(var1);
                var13 = var9 < var11;
                var4 = '';
                var6 = '0';
                var5 = 8n;
                var3 = 0;
                var2 = undefined;
                var1 = var4;
                if (!var13) {
                    _fun66519_ip = 207;
                    continue _fun66519
                }
            case 98:
                var13 = var0.BigInt;
                var15 = var13.bind(var8)(var9);
                var13 = var15;
                var14 = var10;
                if (!(var14 > var9)) {
                    _fun66519_ip = 167;
                    continue _fun66519
                }
            case 119:
                var16 = var10 - var14;
                var16 = var3 + var16;
                var16 = var12[var16];
                if (!(var8 !== var16)) {
                    _fun66519_ip = 209;
                    continue _fun66519
                }
            case 135:
                var18 = var15 << var5;
                var17 = var0.BigInt;
                var17 = var17.bind(var8)(var16);
                var15 = var18 | var17;
                var14 = var14 - 1;
                var13 = var15;
                var2 = var16;
                if (var14 > var9) {
                    _fun66519_ip = 119;
                    continue _fun66519
                }
            case 167:
                var14 = var13 % var7;
                var13 = var14.toString;
                var14 = var13.bind(var14)();
                var13 = var14.padStart;
                var13 = var13.bind(var14)(var10, var6);
                var4 = var4 + var13;
                var3 = var3 + var10;
                var1 = var4;
                if (var3 < var11) {
                    _fun66519_ip = 98;
                    continue _fun66519
                }
            case 207:
                return var1;
            case 209:
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = 'Out of bounds access from data array';
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 243:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = 'groupSize must be less than or equal to 8';
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 279:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = 'desiredLength must be a multiple of groupSize';
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 315:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = 'data.byteLength must be greater than or equal to desiredLength';
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.generateDisplayableCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);