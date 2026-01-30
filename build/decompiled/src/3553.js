// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var1 = var1.Object;
    var1 = var1.prototype;
    var1 = var1.hasOwnProperty;
    var _closure1_slot2 = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: equalObjects, environment: var0
        _fun31597: for (var _fun31597_ip = 0;;) switch (_fun31597_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var19 = arg2;
                var18 = arg3;
                var17 = arg4;
                var4 = arg5;
                var0 = 1;
                var16 = var0 & var19;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var7 = var3[var0];
                var15 = undefined;
                var7 = var2.bind(var15)(var7);
                var14 = var7.bind(var15)(var5);
                var13 = var14.length;
                var0 = var3[var0];
                var0 = var2.bind(var15)(var0);
                var0 = var0.bind(var15)(var1);
                var0 = var0.length;
                if (!(var13 != var0)) {
                    _fun31597_ip = 89;
                    continue _fun31597
                }
            case 82:
                if (var16) {
                    _fun31597_ip = 89;
                    continue _fun31597
                }
            case 85:
                var0 = false;
                return var0;
            case 89:
                var0 = parseFloat(var13);
                var3 = var0 - 1;
                var2 = var3;
                if (!var0) {
                    _fun31597_ip = 148;
                    continue _fun31597
                }
            case 101:
                var7 = var14[var3];
                if (var16) {
                    _fun31597_ip = 125;
                    continue _fun31597
                }
            case 108:
                var8 = _closure1_slot2;
                var0 = var8.call;
                var0 = var0.bind(var8)(var1, var7);
                _fun31597_ip = 129;
                continue _fun31597;
            case 125:
                var0 = var7 in var1;
            case 129:
                if (var0) {
                    _fun31597_ip = 136;
                    continue _fun31597
                }
            case 132:
                var0 = false;
                return var0;
            case 136:
                var0 = parseFloat(var3);
                var3 = var0 - 1;
                var2 = var3;
                if (var0) {
                    _fun31597_ip = 101;
                    continue _fun31597
                }
            case 148:
                var0 = var4.get;
                var0 = var0.bind(var4)(var5);
                if (!var0) {
                    _fun31597_ip = 177;
                    continue _fun31597
                }
            case 161:
                var3 = var4.get;
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun31597_ip = 491;
                    continue _fun31597
                }
            case 177:
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var1);
                var3 = var4.set;
                var3 = var3.bind(var4)(var1, var5);
                var12 = var2 + 1;
                var2 = var12 < var13;
                var8 = 'constructor';
                var10 = var16;
                var9 = undefined;
                var7 = true;
                var6 = var10;
                if (!var2) {
                    _fun31597_ip = 374;
                    continue _fun31597
                }
            case 226:
                var2 = var14[var12];
                var23 = var5[var2];
                var22 = var1[var2];
                if (!var18) {
                    _fun31597_ip = 297;
                    continue _fun31597
                }
            case 241:
                if (var16) {
                    _fun31597_ip = 270;
                    continue _fun31597
                }
            case 244:
                var31 = undefined;
                var30 = var23;
                var29 = var22;
                var28 = var2;
                var27 = var5;
                var26 = var1;
                var25 = var4;
                var20 = var31[var18](var30, var29, var28, var27, var26, var25, var24);
                _fun31597_ip = 294;
                continue _fun31597;
            case 270:
                var31 = undefined;
                var30 = var22;
                var29 = var23;
                var28 = var2;
                var27 = var1;
                var26 = var5;
                var25 = var4;
                var20 = var31[var18](var30, var29, var28, var27, var26, var25, var24);
            case 294:
                var9 = var20;
            case 297:
                var20 = var9;
                if (!(var15 === var20)) {
                    _fun31597_ip = 335;
                    continue _fun31597
                }
            case 304:
                var21 = var23 === var22;
                if (var21) {
                    _fun31597_ip = 332;
                    continue _fun31597
                }
            case 311:
                var31 = undefined;
                var30 = var23;
                var29 = var22;
                var28 = var19;
                var27 = var18;
                var26 = var4;
                var21 = var31[var17](var30, var29, var28, var27, var26, var25);
            case 332:
                var20 = var21;
            case 335:
                var7 = false;
                var6 = var10;
                if (!var20) {
                    _fun31597_ip = 374;
                    continue _fun31597
                }
            case 343:
                var20 = var10;
                if (var10) {
                    _fun31597_ip = 353;
                    continue _fun31597
                }
            case 349:
                var20 = var8 == var2;
            case 353:
                var12 = var12 + 1;
                var2 = var12 < var13;
                var10 = var20;
                var7 = true;
                var6 = var10;
                if (var2) {
                    _fun31597_ip = 226;
                    continue _fun31597
                }
            case 374:
                var2 = var7;
                if (!var2) {
                    _fun31597_ip = 469;
                    continue _fun31597
                }
            case 380:
                var2 = var7;
                if (var6) {
                    _fun31597_ip = 469;
                    continue _fun31597
                }
            case 386:
                var10 = var5.constructor;
                var9 = var1.constructor;
                var6 = var10 == var9;
                if (var6) {
                    _fun31597_ip = 410;
                    continue _fun31597
                }
            case 403:
                var11 = var8 in var5;
                var6 = !var11;
            case 410:
                if (var6) {
                    _fun31597_ip = 420;
                    continue _fun31597
                }
            case 413:
                var8 = var8 in var1;
                var6 = !var8;
            case 420:
                if (var6) {
                    _fun31597_ip = 461;
                    continue _fun31597
                }
            case 423:
                var11 = 'function';
                var8 = typeof var10;
                var8 = var11 === var8;
                if (!var8) {
                    _fun31597_ip = 441;
                    continue _fun31597
                }
            case 437:
                var8 = var10 instanceof var10;
            case 441:
                if (!var8) {
                    _fun31597_ip = 451;
                    continue _fun31597
                }
            case 444:
                var10 = typeof var9;
                var8 = var11 === var10;
            case 451:
                if (!var8) {
                    _fun31597_ip = 458;
                    continue _fun31597
                }
            case 454:
                var8 = var9 instanceof var9;
            case 458:
                var6 = var8;
            case 461:
                var2 = var7;
                if (var6) {
                    _fun31597_ip = 469;
                    continue _fun31597
                }
            case 467:
                var2 = false;
            case 469:
                var3 = var4.delete;
                var3 = var3.bind(var4)(var5);
                var3 = var4.delete;
                var3 = var3.bind(var4)(var1);
                return var2;
            case 491:
                var0 = var0 == var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3554]);