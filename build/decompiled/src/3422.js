// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun29102: for (var _fun29102_ip = 0;;) switch (_fun29102_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var6);
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                if (var1) {
                    _fun29102_ip = 89;
                    continue _fun29102
                }
            case 49:
                var1 = 1;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var1 = var9.prototype;
                var8 = Object.create(var1, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = 'Assertion failed: O must be an Object';
                var17 = var8;
                var1 = new var17[var9](var16, var15);
                var1 = var1 instanceof Object ? var1 : var8;
                throw var1;
            case 89:
                var1 = 2;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var5);
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                if (var1) {
                    _fun29102_ip = 157;
                    continue _fun29102
                }
            case 117:
                var1 = 1;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var1 = var9.prototype;
                var8 = Object.create(var1, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = 'Assertion failed: P must be a Property Key';
                var17 = var8;
                var1 = new var17[var9](var16, var15);
                var1 = var1 instanceof Object ? var1 : var8;
                throw var1;
            case 157:
                var1 = 3;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)(var4);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                if (var7) {
                    _fun29102_ip = 225;
                    continue _fun29102
                }
            case 185:
                var7 = 1;
                var7 = var1[var7];
                var9 = var2.bind(var3)(var7);
                var7 = var9.prototype;
                var8 = Object.create(var7, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = 'Assertion failed: Desc must be a Property Descriptor';
                var17 = var8;
                var7 = new var17[var9](var16, var15);
                var7 = var7 instanceof Object ? var7 : var8;
                throw var7;
            case 225:
                var7 = 4;
                var1 = var1[var7];
                var8 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                if (var8) {
                    _fun29102_ip = 562;
                    continue _fun29102
                }
            case 251:
                var8 = 5;
                var8 = var1[var8];
                var8 = var2.bind(var3)(var8);
                var8 = var8.bind(var3)(var4);
                if (var8) {
                    _fun29102_ip = 514;
                    continue _fun29102
                }
            case 274:
                var8 = var5 in var6;
                var9 = !var8;
                if (var8) {
                    _fun29102_ip = 290;
                    continue _fun29102
                }
            case 284:
                var9 = var4["[[Writable]]"];
            case 290:
                if (!var9) {
                    _fun29102_ip = 299;
                    continue _fun29102
                }
            case 293:
                var9 = var4["[[Enumerable]]"];
            case 299:
                if (!var9) {
                    _fun29102_ip = 308;
                    continue _fun29102
                }
            case 302:
                var9 = var4["[[Configurable]]"];
            case 308:
                if (!var9) {
                    _fun29102_ip = 319;
                    continue _fun29102
                }
            case 311:
                var8 = '[[Value]]';
                var9 = var8 in var4;
            case 319:
                var8 = var5 in var6;
                if (!var8) {
                    _fun29102_ip = 349;
                    continue _fun29102
                }
            case 326:
                var10 = '[[Configurable]]';
                var11 = var10 in var4;
                var10 = !var11;
                if (!var11) {
                    _fun29102_ip = 346;
                    continue _fun29102
                }
            case 340:
                var10 = var4["[[Configurable]]"];
            case 346:
                var8 = var10;
            case 349:
                if (!var8) {
                    _fun29102_ip = 375;
                    continue _fun29102
                }
            case 352:
                var10 = '[[Enumerable]]';
                var11 = var10 in var4;
                var10 = !var11;
                if (!var11) {
                    _fun29102_ip = 372;
                    continue _fun29102
                }
            case 366:
                var10 = var4["[[Enumerable]]"];
            case 372:
                var8 = var10;
            case 375:
                if (!var8) {
                    _fun29102_ip = 401;
                    continue _fun29102
                }
            case 378:
                var10 = '[[Writable]]';
                var11 = var10 in var4;
                var10 = !var11;
                if (!var11) {
                    _fun29102_ip = 398;
                    continue _fun29102
                }
            case 392:
                var10 = var4["[[Writable]]"];
            case 398:
                var8 = var10;
            case 401:
                if (!var8) {
                    _fun29102_ip = 412;
                    continue _fun29102
                }
            case 404:
                var10 = '[[Value]]';
                var8 = var10 in var4;
            case 412:
                if (var9) {
                    _fun29102_ip = 466;
                    continue _fun29102
                }
            case 415:
                if (var8) {
                    _fun29102_ip = 466;
                    continue _fun29102
                }
            case 418:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 6;
                var8 = var10[var8];
                var10 = var9.bind(var3)(var8);
                var8 = var10.prototype;
                var9 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var16 = 'This environment does not support defining non-writable, non-enumerable, or non-configurable properties';
                var17 = var9;
                var8 = new var17[var10](var16, var15);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
            case 466:
                var8 = var4["[[Value]]"];
                var6[var5] = var8;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 7;
                var8 = var10[var8];
                var10 = var9.bind(var3)(var8);
                var9 = var6[var5];
                var8 = var4["[[Value]]"];
                var8 = var10.bind(var3)(var9, var8);
                return var8;
            case 514:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 6;
                var8 = var10[var8];
                var10 = var9.bind(var3)(var8);
                var8 = var10.prototype;
                var9 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var16 = 'This environment does not support accessor property descriptors.';
                var17 = var9;
                var8 = new var17[var10](var16, var15);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
            case 562:
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)(var6, var5);
                var2 = var7;
                if (!var2) {
                    _fun29102_ip = 608;
                    continue _fun29102
                }
            case 583:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 8;
                var1 = var9[var1];
                var1 = var8.bind(var3)(var1);
                var2 = var1.bind(var3)(var7);
            case 608:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 9;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var14 = var0.bind(var3)(var6);
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var17 = undefined;
                var16 = var6;
                var15 = var5;
                var13 = var4;
                var12 = var2;
                var0 = var17[var0](var16, var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3359, 518, 3406, 3410, 519, 3423, 539, 3415, 3411, 3424, 3425]);