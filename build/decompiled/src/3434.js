// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun29196: for (var _fun29196_ip = 0;;) switch (_fun29196_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var1 = arg2;
                var9 = arg3;
                var14 = arg4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var4 = var3.bind(var2)(var11);
                if (!(var2 !== var11)) {
                    _fun29196_ip = 124;
                    continue _fun29196
                }
            case 48:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var11);
                if (var3) {
                    _fun29196_ip = 124;
                    continue _fun29196
                }
            case 76:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var6 = var5.bind(var2)(var3);
                var3 = var6.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var24 = 'Assertion failed: O must be undefined or an Object';
                var25 = var5;
                var3 = new var25[var6](var24, var23);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 124:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var10);
                if (var3) {
                    _fun29196_ip = 200;
                    continue _fun29196
                }
            case 152:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var6 = var5.bind(var2)(var3);
                var3 = var6.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var24 = 'Assertion failed: P must be a Property Key';
                var25 = var5;
                var3 = new var25[var6](var24, var23);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 200:
                var5 = 'boolean';
                var3 = typeof var1;
                if (!(var5 === var3)) {
                    _fun29196_ip = 1754;
                    continue _fun29196
                }
            case 214:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 4;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var9);
                if (var3) {
                    _fun29196_ip = 290;
                    continue _fun29196
                }
            case 242:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var3 = var7.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var24 = 'Assertion failed: Desc must be a Property Descriptor';
                var25 = var5;
                var3 = new var25[var7](var24, var23);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 290:
                if (!(var2 !== var14)) {
                    _fun29196_ip = 367;
                    continue _fun29196
                }
            case 294:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var14);
                if (var3) {
                    _fun29196_ip = 367;
                    continue _fun29196
                }
            case 319:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var6 = var5.bind(var2)(var3);
                var3 = var6.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var24 = 'Assertion failed: current must be a Property Descriptor, or undefined';
                var25 = var5;
                var3 = new var25[var6](var24, var23);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 367:
                if (!(var2 !== var14)) {
                    _fun29196_ip = 1520;
                    continue _fun29196
                }
            case 374:
                var12 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 10;
                var3 = var7[var3];
                var5 = var12.bind(var2)(var3);
                var3 = {};
                var8 = 5;
                var6 = var7[var8];
                var6 = var12.bind(var2)(var6);
                var3.IsAccessorDescriptor = var6;
                var6 = 7;
                var7 = var7[var6];
                var7 = var12.bind(var2)(var7);
                var3.IsDataDescriptor = var7;
                var3 = var5.bind(var2)(var3, var14);
                if (var3) {
                    _fun29196_ip = 487;
                    continue _fun29196
                }
            case 439:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var3 = var7.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var24 = '`current`, when present, must be a fully populated and valid Property Descriptor';
                var25 = var5;
                var3 = new var25[var7](var24, var23);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 487:
                var3 = var14["[[Configurable]]"];
                if (var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 499:
                var3 = '[[Configurable]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 522;
                    continue _fun29196
                }
            case 510:
                var3 = var9["[[Configurable]]"];
                if (var3) {
                    _fun29196_ip = 902;
                    continue _fun29196
                }
            case 522:
                var3 = '[[Enumerable]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 578;
                    continue _fun29196
                }
            case 533:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 8;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var5 = var9["[[Enumerable]]"];
                var3 = var14["[[Enumerable]]"];
                var3 = var7.bind(var2)(var5, var3);
                if (var3) {
                    _fun29196_ip = 578;
                    continue _fun29196
                }
            case 574:
                var3 = false;
                return var3;
            case 578:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 11;
                var3 = var7[var3];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var9);
                if (var3) {
                    _fun29196_ip = 667;
                    continue _fun29196
                }
            case 606:
                var12 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 8;
                var5 = var3[var5];
                var7 = var12.bind(var2)(var5);
                var5 = var3[var8];
                var5 = var12.bind(var2)(var5);
                var5 = var5.bind(var2)(var9);
                var3 = var3[var8];
                var3 = var12.bind(var2)(var3);
                var3 = var3.bind(var2)(var14);
                var3 = var7.bind(var2)(var5, var3);
                if (var3) {
                    _fun29196_ip = 667;
                    continue _fun29196
                }
            case 663:
                var3 = false;
                return var3;
            case 667:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var3 = var5.bind(var2)(var3);
                var3 = var3.bind(var2)(var14);
                if (var3) {
                    _fun29196_ip = 790;
                    continue _fun29196
                }
            case 692:
                var3 = var14["[[Writable]]"];
                if (var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 704:
                var3 = '[[Writable]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 724;
                    continue _fun29196
                }
            case 715:
                var3 = var9["[[Writable]]"];
                if (var3) {
                    _fun29196_ip = 786;
                    continue _fun29196
                }
            case 724:
                var3 = '[[Value]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 738:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 8;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var5 = var9["[[Value]]"];
                var3 = var14["[[Value]]"];
                var3 = var7.bind(var2)(var5, var3);
                if (var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 782:
                var3 = false;
                return var3;
            case 786:
                var3 = false;
                return var3;
            case 790:
                var3 = '[[Get]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 846;
                    continue _fun29196
                }
            case 801:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 8;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var5 = var9["[[Get]]"];
                var3 = var14["[[Get]]"];
                var3 = var7.bind(var2)(var5, var3);
                if (var3) {
                    _fun29196_ip = 846;
                    continue _fun29196
                }
            case 842:
                var3 = false;
                return var3;
            case 846:
                var3 = '[[Set]]';
                var3 = var3 in var9;
                if (!var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 857:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 8;
                var3 = var7[var3];
                var7 = var5.bind(var2)(var3);
                var5 = var9["[[Set]]"];
                var3 = var14["[[Set]]"];
                var3 = var7.bind(var2)(var5, var3);
                if (var3) {
                    _fun29196_ip = 906;
                    continue _fun29196
                }
            case 898:
                var3 = false;
                return var3;
            case 902:
                var3 = false;
                return var3;
            case 906:
                var3 = 'Undefined';
                var3 = var3 === var4;
                if (var3) {
                    _fun29196_ip = 1518;
                    continue _fun29196
                }
            case 922:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var2)(var5);
                var5 = var5.bind(var2)(var14);
                if (!var5) {
                    _fun29196_ip = 975;
                    continue _fun29196
                }
            case 947:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var2)(var5);
                var5 = var5.bind(var2)(var9);
                if (var5) {
                    _fun29196_ip = 1315;
                    continue _fun29196
                }
            case 975:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var2)(var5);
                var5 = var5.bind(var2)(var14);
                if (!var5) {
                    _fun29196_ip = 1025;
                    continue _fun29196
                }
            case 1000:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var6];
                var5 = var7.bind(var2)(var5);
                var5 = var5.bind(var2)(var9);
                if (var5) {
                    _fun29196_ip = 1101;
                    continue _fun29196
                }
            case 1025:
                var13 = _closure1_slot0;
                var15 = _closure1_slot1;
                var5 = 6;
                var5 = var15[var5];
                var12 = var13.bind(var2)(var5);
                var5 = var15[var6];
                var8 = var13.bind(var2)(var5);
                var5 = 8;
                var5 = var15[var5];
                var23 = var13.bind(var2)(var5);
                var5 = 9;
                var5 = var15[var5];
                var22 = var13.bind(var2)(var5);
                var25 = undefined;
                var24 = var8;
                var21 = var11;
                var20 = var10;
                var19 = var9;
                var5 = var25[var12](var24, var23, var22, var21, var20, var19, var18);
                _fun29196_ip = 1310;
                continue _fun29196;
            case 1101:
                var7 = '[[Configurable]]';
                var8 = var7 in var9;
                var7 = var14;
                if (!var8) {
                    _fun29196_ip = 1118;
                    continue _fun29196
                }
            case 1115:
                var7 = var9;
            case 1118:
                var17 = var7["[[Configurable]]"];
                var7 = '[[Enumerable]]';
                var8 = var7 in var9;
                var7 = var14;
                if (!var8) {
                    _fun29196_ip = 1141;
                    continue _fun29196
                }
            case 1138:
                var7 = var9;
            case 1141:
                var16 = var7["[[Enumerable]]"];
                var8 = _closure1_slot0;
                var18 = _closure1_slot1;
                var7 = 6;
                var7 = var18[var7];
                var15 = var8.bind(var2)(var7);
                var7 = var18[var6];
                var13 = var8.bind(var2)(var7);
                var7 = 8;
                var7 = var18[var7];
                var12 = var8.bind(var2)(var7);
                var7 = 9;
                var7 = var18[var7];
                var8 = var8.bind(var2)(var7);
                var7 = {};
                var17 = !var17;
                var17 = !var17;
                var7['[[Configurable]]'] = var17;
                var16 = !var16;
                var16 = !var16;
                var7['[[Enumerable]]'] = var16;
                var16 = '[[Value]]';
                var17 = var16 in var9;
                var16 = var14;
                if (!var17) {
                    _fun29196_ip = 1241;
                    continue _fun29196
                }
            case 1238:
                var16 = var9;
            case 1241:
                var16 = var16["[[Value]]"];
                var7['[[Value]]'] = var16;
                var16 = '[[Writable]]';
                var17 = var16 in var9;
                var16 = var14;
                if (!var17) {
                    _fun29196_ip = 1269;
                    continue _fun29196
                }
            case 1266:
                var16 = var9;
            case 1269:
                var16 = var16["[[Writable]]"];
                var16 = !var16;
                var16 = !var16;
                var7['[[Writable]]'] = var16;
                var25 = undefined;
                var24 = var13;
                var23 = var12;
                var22 = var8;
                var21 = var11;
                var20 = var10;
                var19 = var7;
                var5 = var25[var15](var24, var23, var22, var21, var20, var19, var18);
            case 1310:
                _fun29196_ip = 1515;
                continue _fun29196;
            case 1315:
                var7 = '[[Configurable]]';
                var8 = var7 in var9;
                var7 = var14;
                if (!var8) {
                    _fun29196_ip = 1332;
                    continue _fun29196
                }
            case 1329:
                var7 = var9;
            case 1332:
                var16 = var7["[[Configurable]]"];
                var7 = '[[Enumerable]]';
                var8 = var7 in var9;
                var7 = var14;
                if (!var8) {
                    _fun29196_ip = 1355;
                    continue _fun29196
                }
            case 1352:
                var7 = var9;
            case 1355:
                var15 = var7["[[Enumerable]]"];
                var7 = _closure1_slot0;
                var17 = _closure1_slot1;
                var8 = 6;
                var8 = var17[var8];
                var13 = var7.bind(var2)(var8);
                var6 = var17[var6];
                var12 = var7.bind(var2)(var6);
                var6 = 8;
                var6 = var17[var6];
                var8 = var7.bind(var2)(var6);
                var6 = 9;
                var6 = var17[var6];
                var7 = var7.bind(var2)(var6);
                var6 = {};
                var16 = !var16;
                var16 = !var16;
                var6['[[Configurable]]'] = var16;
                var15 = !var15;
                var15 = !var15;
                var6['[[Enumerable]]'] = var15;
                var15 = '[[Get]]';
                var16 = var15 in var9;
                var15 = var14;
                if (!var16) {
                    _fun29196_ip = 1455;
                    continue _fun29196
                }
            case 1452:
                var15 = var9;
            case 1455:
                var15 = var15["[[Get]]"];
                var6['[[Get]]'] = var15;
                var15 = '[[Set]]';
                var15 = var15 in var9;
                if (!var15) {
                    _fun29196_ip = 1480;
                    continue _fun29196
                }
            case 1477:
                var14 = var9;
            case 1480:
                var14 = var14["[[Set]]"];
                var6['[[Set]]'] = var14;
                var25 = undefined;
                var24 = var12;
                var23 = var8;
                var22 = var7;
                var21 = var11;
                var20 = var10;
                var19 = var6;
                var5 = var25[var13](var24, var23, var22, var21, var20, var19, var18);
            case 1515:
                var3 = var5;
            case 1518:
                return var3;
            case 1520:
                var3 = !var1;
                var1 = !var3;
                if (var3) {
                    _fun29196_ip = 1752;
                    continue _fun29196
                }
            case 1532:
                var3 = 'Undefined';
                var3 = var3 === var4;
                if (var3) {
                    _fun29196_ip = 1749;
                    continue _fun29196
                }
            case 1548:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 5;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.bind(var2)(var9);
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var5 = 6;
                var5 = var13[var5];
                var8 = var12.bind(var2)(var5);
                var5 = 7;
                var5 = var13[var5];
                var7 = var12.bind(var2)(var5);
                var5 = 8;
                var5 = var13[var5];
                var6 = var12.bind(var2)(var5);
                var5 = 9;
                var5 = var13[var5];
                var5 = var12.bind(var2)(var5);
                if (var4) {
                    _fun29196_ip = 1722;
                    continue _fun29196
                }
            case 1632:
                var4 = {};
                var12 = var9["[[Configurable]]"];
                var12 = !var12;
                var12 = !var12;
                var4['[[Configurable]]'] = var12;
                var12 = var9["[[Enumerable]]"];
                var12 = !var12;
                var12 = !var12;
                var4['[[Enumerable]]'] = var12;
                var12 = var9["[[Value]]"];
                var4['[[Value]]'] = var12;
                var12 = var9["[[Writable]]"];
                var12 = !var12;
                var12 = !var12;
                var4['[[Writable]]'] = var12;
                var25 = undefined;
                var24 = var7;
                var23 = var6;
                var22 = var5;
                var21 = var11;
                var20 = var10;
                var19 = var4;
                var4 = var25[var8](var24, var23, var22, var21, var20, var19, var18);
                _fun29196_ip = 1746;
                continue _fun29196;
            case 1722:
                var25 = undefined;
                var24 = var7;
                var23 = var6;
                var22 = var5;
                var21 = var11;
                var20 = var10;
                var19 = var9;
                var4 = var25[var8](var24, var23, var22, var21, var20, var19, var18);
            case 1746:
                var3 = var4;
            case 1749:
                var1 = var3;
            case 1752:
                return var1;
            case 1754:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var24 = 'Assertion failed: extensible must be a Boolean';
                var25 = var1;
                var0 = new var25[var2](var24, var23);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3435, 3368, 518, 3415, 3419, 3432, 3422, 3423, 3424, 3425, 3436, 3437]);