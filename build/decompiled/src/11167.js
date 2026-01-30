// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: _typeof, environment: var7
        _fun86662: for (var _fun86662_ip = 0;;) switch (_fun86662_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun86662_ip = 42;
                    continue _fun86662
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun86662_ip = 51;
                    continue _fun86662
                }
            case 42:
                var2 = function(arg0) { // Environment: var0
                    _fun86664: for (var _fun86664_ip = 0;;) switch (_fun86664_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun86664_ip = 58;
                                continue _fun86664
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun86664_ip = 58;
                                continue _fun86664
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun86664_ip = 58;
                                continue _fun86664
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun86664_ip = 61;
                                continue _fun86664
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun86662_ip = 58;
                continue _fun86662;
            case 51:
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 58:
                _closure1_slot1 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: identity, environment: var7
        var0 = arg0;
        var2 = 1;
        var3 = 0;
        var0[var3] = var2;
        var0[var2] = var3;
        var1 = 2;
        var0[var1] = var3;
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var3;
        var1 = 5;
        var0[var1] = var2;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var3;
        var1 = 9;
        var0[var1] = var3;
        var1 = 10;
        var0[var1] = var2;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot2 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: multiply, environment: var7
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var38 = 0;
        var24 = var3[var38];
        var37 = 1;
        var19 = var3[var37];
        var36 = 2;
        var14 = var3[var36];
        var25 = 3;
        var9 = var3[var25];
        var34 = 4;
        var23 = var3[var34];
        var33 = 5;
        var18 = var3[var33];
        var32 = 6;
        var13 = var3[var32];
        var7 = 7;
        var8 = var3[var7];
        var30 = 8;
        var22 = var3[var30];
        var29 = 9;
        var17 = var3[var29];
        var28 = 10;
        var12 = var3[var28];
        var5 = 11;
        var6 = var3[var5];
        var21 = 12;
        var20 = var3[var21];
        var16 = 13;
        var15 = var3[var16];
        var11 = 14;
        var10 = var3[var11];
        var2 = 15;
        var4 = var3[var2];
        var31 = var1[var38];
        var27 = var1[var37];
        var26 = var1[var36];
        var3 = var1[var25];
        var39 = var31 * var24;
        var35 = var27 * var23;
        var39 = var39 + var35;
        var35 = var26 * var22;
        var39 = var39 + var35;
        var35 = var3 * var20;
        var35 = var39 + var35;
        var0[var38] = var35;
        var38 = var31 * var19;
        var35 = var27 * var18;
        var38 = var38 + var35;
        var35 = var26 * var17;
        var38 = var38 + var35;
        var35 = var3 * var15;
        var35 = var38 + var35;
        var0[var37] = var35;
        var37 = var31 * var14;
        var35 = var27 * var13;
        var37 = var37 + var35;
        var35 = var26 * var12;
        var37 = var37 + var35;
        var35 = var3 * var10;
        var35 = var37 + var35;
        var0[var36] = var35;
        var31 = var31 * var9;
        var27 = var27 * var8;
        var27 = var31 + var27;
        var26 = var26 * var6;
        var26 = var27 + var26;
        var3 = var3 * var4;
        var3 = var26 + var3;
        var0[var25] = var3;
        var27 = var1[var34];
        var26 = var1[var33];
        var25 = var1[var32];
        var3 = var1[var7];
        var35 = var27 * var24;
        var31 = var26 * var23;
        var35 = var35 + var31;
        var31 = var25 * var22;
        var35 = var35 + var31;
        var31 = var3 * var20;
        var31 = var35 + var31;
        var0[var34] = var31;
        var34 = var27 * var19;
        var31 = var26 * var18;
        var34 = var34 + var31;
        var31 = var25 * var17;
        var34 = var34 + var31;
        var31 = var3 * var15;
        var31 = var34 + var31;
        var0[var33] = var31;
        var33 = var27 * var14;
        var31 = var26 * var13;
        var33 = var33 + var31;
        var31 = var25 * var12;
        var33 = var33 + var31;
        var31 = var3 * var10;
        var31 = var33 + var31;
        var0[var32] = var31;
        var27 = var27 * var9;
        var26 = var26 * var8;
        var26 = var27 + var26;
        var25 = var25 * var6;
        var25 = var26 + var25;
        var3 = var3 * var4;
        var3 = var25 + var3;
        var0[var7] = var3;
        var26 = var1[var30];
        var25 = var1[var29];
        var7 = var1[var28];
        var3 = var1[var5];
        var31 = var26 * var24;
        var27 = var25 * var23;
        var31 = var31 + var27;
        var27 = var7 * var22;
        var31 = var31 + var27;
        var27 = var3 * var20;
        var27 = var31 + var27;
        var0[var30] = var27;
        var30 = var26 * var19;
        var27 = var25 * var18;
        var30 = var30 + var27;
        var27 = var7 * var17;
        var30 = var30 + var27;
        var27 = var3 * var15;
        var27 = var30 + var27;
        var0[var29] = var27;
        var29 = var26 * var14;
        var27 = var25 * var13;
        var29 = var29 + var27;
        var27 = var7 * var12;
        var29 = var29 + var27;
        var27 = var3 * var10;
        var27 = var29 + var27;
        var0[var28] = var27;
        var26 = var26 * var9;
        var25 = var25 * var8;
        var25 = var26 + var25;
        var7 = var7 * var6;
        var7 = var25 + var7;
        var3 = var3 * var4;
        var3 = var7 + var3;
        var0[var5] = var3;
        var7 = var1[var21];
        var5 = var1[var16];
        var3 = var1[var11];
        var1 = var1[var2];
        var24 = var7 * var24;
        var23 = var5 * var23;
        var23 = var24 + var23;
        var22 = var3 * var22;
        var22 = var23 + var22;
        var20 = var1 * var20;
        var20 = var22 + var20;
        var0[var21] = var20;
        var19 = var7 * var19;
        var18 = var5 * var18;
        var18 = var19 + var18;
        var17 = var3 * var17;
        var17 = var18 + var17;
        var15 = var1 * var15;
        var15 = var17 + var15;
        var0[var16] = var15;
        var14 = var7 * var14;
        var13 = var5 * var13;
        var13 = var14 + var13;
        var12 = var3 * var12;
        var12 = var13 + var12;
        var10 = var1 * var10;
        var10 = var12 + var10;
        var0[var11] = var10;
        var7 = var7 * var9;
        var5 = var5 * var8;
        var5 = var7 + var5;
        var3 = var3 * var6;
        var3 = var5 + var3;
        var1 = var1 * var4;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var8 = function(arg0, arg1, arg2) { // Original name: fromRotationTranslation, environment: var7
        var0 = arg0;
        var6 = arg1;
        var3 = arg2;
        var4 = 0;
        var5 = var6[var4];
        var2 = 1;
        var8 = var6[var2];
        var1 = 2;
        var11 = var6[var1];
        var14 = 3;
        var15 = var6[var14];
        var7 = var5 + var5;
        var9 = var8 + var8;
        var12 = var11 + var11;
        var6 = var5 * var7;
        var13 = var5 * var9;
        var10 = var5 * var12;
        var5 = var8 * var9;
        var8 = var8 * var12;
        var11 = var11 * var12;
        var7 = var15 * var7;
        var9 = var15 * var9;
        var12 = var15 * var12;
        var15 = var5 + var11;
        var15 = var2 - var15;
        var0[var4] = var15;
        var15 = var13 + var12;
        var0[var2] = var15;
        var15 = var10 - var9;
        var0[var1] = var15;
        var0[var14] = var4;
        var13 = var13 - var12;
        var12 = 4;
        var0[var12] = var13;
        var11 = var6 + var11;
        var12 = var2 - var11;
        var11 = 5;
        var0[var11] = var12;
        var12 = var8 + var7;
        var11 = 6;
        var0[var11] = var12;
        var11 = 7;
        var0[var11] = var4;
        var10 = var10 + var9;
        var9 = 8;
        var0[var9] = var10;
        var8 = var8 - var7;
        var7 = 9;
        var0[var7] = var8;
        var5 = var6 + var5;
        var6 = var2 - var5;
        var5 = 10;
        var0[var5] = var6;
        var5 = 11;
        var0[var5] = var4;
        var5 = var3[var4];
        var4 = 12;
        var0[var4] = var5;
        var5 = var3[var2];
        var4 = 13;
        var0[var4] = var5;
        var3 = var3[var1];
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var _closure1_slot3 = var8;
    var6 = function(arg0, arg1) { // Original name: getScaling, environment: var7
        var0 = arg0;
        var3 = arg1;
        var9 = 0;
        var15 = var3[var9];
        var7 = 1;
        var14 = var3[var7];
        var2 = 2;
        var8 = var3[var2];
        var1 = 4;
        var11 = var3[var1];
        var1 = 5;
        var10 = var3[var1];
        var1 = 6;
        var4 = var3[var1];
        var1 = 8;
        var6 = var3[var1];
        var1 = 9;
        var5 = var3[var1];
        var1 = 10;
        var1 = var3[var1];
        var3 = global;
        var13 = var3.Math;
        var12 = var13.sqrt;
        var15 = var15 * var15;
        var14 = var14 * var14;
        var14 = var15 + var14;
        var8 = var8 * var8;
        var8 = var14 + var8;
        var8 = var12.bind(var13)(var8);
        var0[var9] = var8;
        var9 = var3.Math;
        var8 = var9.sqrt;
        var11 = var11 * var11;
        var10 = var10 * var10;
        var10 = var11 + var10;
        var4 = var4 * var4;
        var4 = var10 + var4;
        var4 = var8.bind(var9)(var4);
        var0[var7] = var4;
        var4 = var3.Math;
        var3 = var4.sqrt;
        var6 = var6 * var6;
        var5 = var5 * var5;
        var5 = var6 + var5;
        var1 = var1 * var1;
        var1 = var5 + var1;
        var1 = var3.bind(var4)(var1);
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot4 = var6;
    var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: perspectiveNO, environment: var7
        _fun86669: for (var _fun86669_ip = 0;;) switch (_fun86669_ip) {
            case 0:
                var0 = arg0;
                var3 = arg3;
                var4 = arg4;
                var1 = global;
                var6 = var1.Math;
                var5 = var6.tan;
                var2 = arg1;
                var1 = 2;
                var2 = var2 / var1;
                var2 = var5.bind(var6)(var2);
                var5 = 1;
                var6 = var5 / var2;
                var2 = arg2;
                var2 = var6 / var2;
                var7 = 0;
                var0[var7] = var2;
                var0[var5] = var7;
                var0[var1] = var7;
                var2 = 3;
                var0[var2] = var7;
                var2 = 4;
                var0[var2] = var7;
                var2 = 5;
                var0[var2] = var6;
                var2 = 6;
                var0[var2] = var7;
                var2 = 7;
                var0[var2] = var7;
                var2 = 8;
                var0[var2] = var7;
                var2 = 9;
                var0[var2] = var7;
                var6 = -1;
                var2 = 11;
                var0[var2] = var6;
                var2 = 12;
                var0[var2] = var7;
                var2 = 13;
                var0[var2] = var7;
                var2 = 15;
                var0[var2] = var7;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun86669_ip = 169;
                    continue _fun86669
                }
            case 155:
                var2 = inf;
                if (!(var4 === var2)) {
                    _fun86669_ip = 195;
                    continue _fun86669
                }
            case 169:
                var2 = 10;
                var0[var2] = var6;
                var2 = -2;
                var6 = var2 * var3;
                var2 = 14;
                var0[var2] = var6;
                _fun86669_ip = 237;
                continue _fun86669;
            case 195:
                var2 = var3 - var4;
                var2 = var5 / var2;
                var5 = var4 + var3;
                var6 = var5 * var2;
                var5 = 10;
                var0[var5] = var6;
                var1 = var1 * var4;
                var1 = var1 * var3;
                var2 = var1 * var2;
                var1 = 14;
                var0[var1] = var2;
            case 237:
                return var0;
        }
    };
    var4 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: orthoNO, environment: var7
        var0 = arg0;
        var10 = arg1;
        var8 = arg2;
        var7 = arg3;
        var5 = arg4;
        var4 = arg5;
        var1 = arg6;
        var3 = var10 - var8;
        var2 = 1;
        var9 = var2 / var3;
        var3 = var7 - var5;
        var6 = var2 / var3;
        var3 = var4 - var1;
        var3 = var2 / var3;
        var13 = -2;
        var11 = var13 * var9;
        var12 = 0;
        var0[var12] = var11;
        var0[var2] = var12;
        var11 = 2;
        var0[var11] = var12;
        var14 = 3;
        var0[var14] = var12;
        var14 = 4;
        var0[var14] = var12;
        var14 = var13 * var6;
        var13 = 5;
        var0[var13] = var14;
        var13 = 6;
        var0[var13] = var12;
        var13 = 7;
        var0[var13] = var12;
        var13 = 8;
        var0[var13] = var12;
        var13 = 9;
        var0[var13] = var12;
        var13 = var11 * var3;
        var11 = 10;
        var0[var11] = var13;
        var11 = 11;
        var0[var11] = var12;
        var8 = var10 + var8;
        var9 = var8 * var9;
        var8 = 12;
        var0[var8] = var9;
        var5 = var5 + var7;
        var6 = var5 * var6;
        var5 = 13;
        var0[var5] = var6;
        var1 = var1 + var4;
        var3 = var1 * var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var1 = function(arg0, arg1, arg2) { // Original name: subtract, environment: var7
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 3;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 4;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 5;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 6;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 7;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 8;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 9;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 10;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 11;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 12;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 13;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var4 = 14;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 - var2;
        var0[var4] = var2;
        var2 = 15;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 - var1;
        var0[var2] = var1;
        return var0;
    };
    var9 = global;
    var12 = var9.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var9 = true;
    var10.value = var9;
    var9 = '__esModule';
    var9 = var11.bind(var12)(var2, var9, var10);
    var9 = function(arg0, arg1, arg2) { // Original name: add, environment: var7
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = 0;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 1;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 2;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 3;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 4;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 5;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 6;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 7;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 8;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 9;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 10;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 11;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 12;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 13;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var4 = 14;
        var5 = var3[var4];
        var2 = var1[var4];
        var2 = var5 + var2;
        var0[var4] = var2;
        var2 = 15;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.add = var9;
    var9 = function(arg0, arg1) { // Original name: adjoint, environment: var7
        var0 = arg0;
        var1 = arg1;
        var45 = 0;
        var18 = var1[var45];
        var44 = 1;
        var17 = var1[var44];
        var43 = 2;
        var15 = var1[var43];
        var42 = 3;
        var29 = var1[var42];
        var41 = 4;
        var21 = var1[var41];
        var39 = 5;
        var22 = var1[var39];
        var38 = 6;
        var19 = var1[var38];
        var36 = 7;
        var33 = var1[var36];
        var34 = 8;
        var7 = var1[var34];
        var30 = 9;
        var6 = var1[var30];
        var28 = 10;
        var4 = var1[var28];
        var24 = 11;
        var23 = var1[var24];
        var20 = 12;
        var10 = var1[var20];
        var13 = 13;
        var11 = var1[var13];
        var9 = 14;
        var8 = var1[var9];
        var2 = 15;
        var27 = var1[var2];
        var3 = var18 * var22;
        var1 = var17 * var21;
        var1 = var3 - var1;
        var5 = var18 * var19;
        var3 = var15 * var21;
        var3 = var5 - var3;
        var12 = var18 * var33;
        var5 = var29 * var21;
        var26 = var12 - var5;
        var12 = var17 * var19;
        var5 = var15 * var22;
        var5 = var12 - var5;
        var14 = var17 * var33;
        var12 = var29 * var22;
        var25 = var14 - var12;
        var14 = var15 * var33;
        var12 = var29 * var19;
        var35 = var14 - var12;
        var14 = var7 * var11;
        var12 = var6 * var10;
        var12 = var14 - var12;
        var16 = var7 * var8;
        var14 = var4 * var10;
        var14 = var16 - var14;
        var31 = var7 * var27;
        var16 = var23 * var10;
        var32 = var31 - var16;
        var31 = var6 * var8;
        var16 = var4 * var11;
        var16 = var31 - var16;
        var37 = var6 * var27;
        var31 = var23 * var11;
        var31 = var37 - var31;
        var40 = var4 * var27;
        var37 = var23 * var8;
        var37 = var40 - var37;
        var46 = var22 * var37;
        var40 = var19 * var31;
        var46 = var46 - var40;
        var40 = var33 * var16;
        var40 = var46 + var40;
        var0[var45] = var40;
        var45 = var15 * var31;
        var40 = var17 * var37;
        var45 = var45 - var40;
        var40 = var29 * var16;
        var40 = var45 - var40;
        var0[var44] = var40;
        var44 = var11 * var35;
        var40 = var8 * var25;
        var44 = var44 - var40;
        var40 = var27 * var5;
        var40 = var44 + var40;
        var0[var43] = var40;
        var43 = var4 * var25;
        var40 = var6 * var35;
        var43 = var43 - var40;
        var40 = var23 * var5;
        var40 = var43 - var40;
        var0[var42] = var40;
        var42 = var19 * var32;
        var40 = var21 * var37;
        var42 = var42 - var40;
        var40 = var33 * var14;
        var40 = var42 - var40;
        var0[var41] = var40;
        var40 = var18 * var37;
        var37 = var15 * var32;
        var40 = var40 - var37;
        var37 = var29 * var14;
        var37 = var40 + var37;
        var0[var39] = var37;
        var39 = var8 * var26;
        var37 = var10 * var35;
        var39 = var39 - var37;
        var37 = var27 * var3;
        var37 = var39 - var37;
        var0[var38] = var37;
        var37 = var7 * var35;
        var35 = var4 * var26;
        var37 = var37 - var35;
        var35 = var23 * var3;
        var35 = var37 + var35;
        var0[var36] = var35;
        var36 = var21 * var31;
        var35 = var22 * var32;
        var35 = var36 - var35;
        var33 = var33 * var12;
        var33 = var35 + var33;
        var0[var34] = var33;
        var32 = var17 * var32;
        var31 = var18 * var31;
        var31 = var32 - var31;
        var29 = var29 * var12;
        var29 = var31 - var29;
        var0[var30] = var29;
        var30 = var10 * var25;
        var29 = var11 * var26;
        var29 = var30 - var29;
        var27 = var27 * var1;
        var27 = var29 + var27;
        var0[var28] = var27;
        var26 = var6 * var26;
        var25 = var7 * var25;
        var25 = var26 - var25;
        var23 = var23 * var1;
        var23 = var25 - var23;
        var0[var24] = var23;
        var22 = var22 * var14;
        var21 = var21 * var16;
        var21 = var22 - var21;
        var19 = var19 * var12;
        var19 = var21 - var19;
        var0[var20] = var19;
        var16 = var18 * var16;
        var14 = var17 * var14;
        var14 = var16 - var14;
        var12 = var15 * var12;
        var12 = var14 + var12;
        var0[var13] = var12;
        var11 = var11 * var3;
        var10 = var10 * var5;
        var10 = var11 - var10;
        var8 = var8 * var1;
        var8 = var10 - var8;
        var0[var9] = var8;
        var5 = var7 * var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var1 = var4 * var1;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.adjoint = var9;
    var9 = function(arg0) { // Original name: clone, environment: var7
        var1 = arg0;
        var0 = _closure1_slot0;
        var3 = var0.ARRAY_TYPE;
        var0 = var3.prototype;
        var2 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var4 = 16;
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        var3 = 0;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 1;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 3;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 5;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 8;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 9;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 10;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 11;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 12;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 13;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 14;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 15;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.clone = var9;
    var9 = function(arg0, arg1) { // Original name: copy, environment: var7
        var0 = arg0;
        var1 = arg1;
        var3 = 0;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 1;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 2;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 3;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 5;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 8;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 9;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 10;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 11;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 12;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 13;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 14;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 15;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.copy = var9;
    var9 = function() { // Original name: create, environment: var7
        _fun86676: for (var _fun86676_ip = 0;;) switch (_fun86676_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.ARRAY_TYPE;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 16;
                var5 = var2;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var2;
                var1 = _closure1_slot0;
                var2 = var1.ARRAY_TYPE;
                var1 = global;
                var1 = var1.Float32Array;
                if (!(var2 != var1)) {
                    _fun86676_ip = 144;
                    continue _fun86676
                }
            case 58:
                var2 = 0;
                var1 = 1;
                var0[var1] = var2;
                var1 = 2;
                var0[var1] = var2;
                var1 = 3;
                var0[var1] = var2;
                var1 = 4;
                var0[var1] = var2;
                var1 = 6;
                var0[var1] = var2;
                var1 = 7;
                var0[var1] = var2;
                var1 = 8;
                var0[var1] = var2;
                var1 = 9;
                var0[var1] = var2;
                var1 = 11;
                var0[var1] = var2;
                var1 = 12;
                var0[var1] = var2;
                var1 = 13;
                var0[var1] = var2;
                var1 = 14;
                var0[var1] = var2;
            case 144:
                var2 = 1;
                var1 = 0;
                var0[var1] = var2;
                var1 = 5;
                var0[var1] = var2;
                var1 = 10;
                var0[var1] = var2;
                var1 = 15;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.create = var9;
    var9 = function(arg0, arg1, arg2, arg3) { // Original name: decompose, environment: var7
        _fun86677: for (var _fun86677_ip = 0;;) switch (_fun86677_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var8 = arg3;
                var1 = 12;
                var1 = var8[var1];
                var9 = 0;
                var4[var9] = var1;
                var1 = 13;
                var1 = var8[var1];
                var6 = 1;
                var4[var6] = var1;
                var1 = 14;
                var1 = var8[var1];
                var2 = 2;
                var4[var2] = var1;
                var12 = var8[var9];
                var4 = var8[var6];
                var7 = var8[var2];
                var1 = 4;
                var1 = var8[var1];
                var5 = 5;
                var16 = var8[var5];
                var5 = 6;
                var10 = var8[var5];
                var5 = 8;
                var15 = var8[var5];
                var5 = 9;
                var14 = var8[var5];
                var5 = 10;
                var13 = var8[var5];
                var11 = global;
                var17 = var11.Math;
                var8 = var17.sqrt;
                var18 = var12 * var12;
                var5 = var4 * var4;
                var18 = var18 + var5;
                var5 = var7 * var7;
                var5 = var18 + var5;
                var5 = var8.bind(var17)(var5);
                var3[var9] = var5;
                var17 = var11.Math;
                var8 = var17.sqrt;
                var18 = var1 * var1;
                var5 = var16 * var16;
                var18 = var18 + var5;
                var5 = var10 * var10;
                var5 = var18 + var5;
                var5 = var8.bind(var17)(var5);
                var3[var6] = var5;
                var17 = var11.Math;
                var8 = var17.sqrt;
                var18 = var15 * var15;
                var5 = var14 * var14;
                var18 = var18 + var5;
                var5 = var13 * var13;
                var5 = var18 + var5;
                var5 = var8.bind(var17)(var5);
                var3[var2] = var5;
                var5 = var3[var9];
                var5 = var6 / var5;
                var8 = var3[var6];
                var8 = var6 / var8;
                var3 = var3[var2];
                var3 = var6 / var3;
                var12 = var12 * var5;
                var4 = var4 * var8;
                var7 = var7 * var3;
                var1 = var1 * var5;
                var16 = var16 * var8;
                var10 = var10 * var3;
                var5 = var15 * var5;
                var8 = var14 * var8;
                var15 = var13 * var3;
                var3 = var12 + var16;
                var3 = var3 + var15;
                if (!(!(var3 > var9))) {
                    _fun86677_ip = 604;
                    continue _fun86677
                }
            case 307:
                if (!(var12 > var16)) {
                    _fun86677_ip = 318;
                    continue _fun86677
                }
            case 311:
                if (!(!(var12 > var15))) {
                    _fun86677_ip = 512;
                    continue _fun86677
                }
            case 318:
                if (!(!(var16 > var15))) {
                    _fun86677_ip = 417;
                    continue _fun86677
                }
            case 322:
                var17 = var11.Math;
                var14 = var17.sqrt;
                var13 = var6 + var15;
                var13 = var13 - var12;
                var13 = var13 - var16;
                var13 = var14.bind(var17)(var13);
                var14 = var2 * var13;
                var13 = var4 - var1;
                var17 = var13 / var14;
                var13 = 3;
                var0[var13] = var17;
                var13 = var5 + var7;
                var13 = var13 / var14;
                var0[var9] = var13;
                var13 = var10 + var8;
                var13 = var13 / var14;
                var0[var6] = var13;
                var13 = 0.25;
                var13 = var13 * var14;
                var0[var2] = var13;
                _fun86677_ip = 686;
                continue _fun86677;
            case 417:
                var17 = var11.Math;
                var14 = var17.sqrt;
                var13 = var6 + var16;
                var13 = var13 - var12;
                var13 = var13 - var15;
                var13 = var14.bind(var17)(var13);
                var14 = var2 * var13;
                var13 = var5 - var7;
                var17 = var13 / var14;
                var13 = 3;
                var0[var13] = var17;
                var13 = var4 + var1;
                var13 = var13 / var14;
                var0[var9] = var13;
                var13 = 0.25;
                var13 = var13 * var14;
                var0[var6] = var13;
                var13 = var10 + var8;
                var13 = var13 / var14;
                var0[var2] = var13;
                _fun86677_ip = 686;
                continue _fun86677;
            case 512:
                var14 = var11.Math;
                var13 = var14.sqrt;
                var12 = var6 + var12;
                var12 = var12 - var16;
                var12 = var12 - var15;
                var12 = var13.bind(var14)(var12);
                var13 = var2 * var12;
                var12 = var10 - var8;
                var14 = var12 / var13;
                var12 = 3;
                var0[var12] = var14;
                var12 = 0.25;
                var12 = var12 * var13;
                var0[var9] = var12;
                var12 = var4 + var1;
                var12 = var12 / var13;
                var0[var6] = var12;
                var12 = var5 + var7;
                var12 = var12 / var13;
                var0[var2] = var12;
                _fun86677_ip = 686;
                continue _fun86677;
            case 604:
                var12 = var11.Math;
                var11 = var12.sqrt;
                var3 = var3 + var6;
                var3 = var11.bind(var12)(var3);
                var3 = var2 * var3;
                var11 = 0.25;
                var12 = var11 * var3;
                var11 = 3;
                var0[var11] = var12;
                var8 = var10 - var8;
                var8 = var8 / var3;
                var0[var9] = var8;
                var5 = var5 - var7;
                var5 = var5 / var3;
                var0[var6] = var5;
                var1 = var4 - var1;
                var1 = var1 / var3;
                var0[var2] = var1;
            case 686:
                return var0;
        }
    };
    var2.decompose = var9;
    var9 = function(arg0) { // Original name: determinant, environment: var7
        var3 = arg0;
        var0 = 0;
        var21 = var3[var0];
        var0 = 1;
        var20 = var3[var0];
        var0 = 2;
        var12 = var3[var0];
        var0 = 3;
        var13 = var3[var0];
        var0 = 4;
        var18 = var3[var0];
        var0 = 5;
        var17 = var3[var0];
        var0 = 6;
        var15 = var3[var0];
        var0 = 7;
        var19 = var3[var0];
        var0 = 8;
        var11 = var3[var0];
        var0 = 9;
        var10 = var3[var0];
        var0 = 10;
        var1 = var3[var0];
        var0 = 11;
        var2 = var3[var0];
        var0 = 12;
        var7 = var3[var0];
        var0 = 13;
        var6 = var3[var0];
        var0 = 14;
        var4 = var3[var0];
        var0 = 15;
        var9 = var3[var0];
        var3 = var21 * var17;
        var0 = var20 * var18;
        var0 = var3 - var0;
        var5 = var21 * var15;
        var3 = var12 * var18;
        var3 = var5 - var3;
        var8 = var20 * var15;
        var5 = var12 * var17;
        var5 = var8 - var5;
        var14 = var11 * var6;
        var8 = var10 * var7;
        var8 = var14 - var8;
        var16 = var11 * var4;
        var14 = var1 * var7;
        var14 = var16 - var14;
        var22 = var10 * var4;
        var16 = var1 * var6;
        var16 = var22 - var16;
        var21 = var21 * var16;
        var20 = var20 * var14;
        var20 = var21 - var20;
        var12 = var12 * var8;
        var12 = var20 + var12;
        var12 = var19 * var12;
        var16 = var18 * var16;
        var14 = var17 * var14;
        var14 = var16 - var14;
        var8 = var15 * var8;
        var8 = var14 + var8;
        var8 = var13 * var8;
        var8 = var12 - var8;
        var11 = var11 * var5;
        var10 = var10 * var3;
        var10 = var11 - var10;
        var1 = var1 * var0;
        var1 = var10 + var1;
        var1 = var9 * var1;
        var1 = var8 + var1;
        var5 = var7 * var5;
        var3 = var6 * var3;
        var3 = var5 - var3;
        var0 = var4 * var0;
        var0 = var3 + var0;
        var0 = var2 * var0;
        var0 = var1 - var0;
        return var0;
    };
    var2.determinant = var9;
    var9 = function(arg0, arg1) { // Original name: equals, environment: var7
        _fun86679: for (var _fun86679_ip = 0;;) switch (_fun86679_ip) {
            case 0:
                var10 = arg0;
                var1 = arg1;
                var25 = 0;
                var11 = var10[var25];
                var7 = 1;
                var38 = var10[var7];
                var23 = 2;
                var36 = var10[var23];
                var21 = 3;
                var34 = var10[var21];
                var19 = 4;
                var32 = var10[var19];
                var17 = 5;
                var30 = var10[var17];
                var15 = 6;
                var28 = var10[var15];
                var13 = 7;
                var26 = var10[var13];
                var9 = 8;
                var24 = var10[var9];
                var8 = 9;
                var22 = var10[var8];
                var6 = 10;
                var20 = var10[var6];
                var5 = 11;
                var18 = var10[var5];
                var4 = 12;
                var16 = var10[var4];
                var3 = 13;
                var14 = var10[var3];
                var2 = 14;
                var12 = var10[var2];
                var0 = 15;
                var10 = var10[var0];
                var40 = var1[var25];
                var39 = var1[var7];
                var37 = var1[var23];
                var35 = var1[var21];
                var33 = var1[var19];
                var31 = var1[var17];
                var29 = var1[var15];
                var27 = var1[var13];
                var25 = var1[var9];
                var23 = var1[var8];
                var21 = var1[var6];
                var19 = var1[var5];
                var17 = var1[var4];
                var15 = var1[var3];
                var13 = var1[var2];
                var9 = var1[var0];
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var0 = var11 - var40;
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot0;
                var4 = var0.EPSILON;
                var8 = var1.Math;
                var6 = var8.max;
                var5 = var1.Math;
                var0 = var5.abs;
                var5 = var0.bind(var5)(var11);
                var11 = var1.Math;
                var0 = var11.abs;
                var0 = var0.bind(var11)(var40);
                var0 = var6.bind(var8)(var7, var5, var0);
                var0 = var4 * var0;
                var0 = var2 <= var0;
                if (!var0) {
                    _fun86679_ip = 371;
                    continue _fun86679
                }
            case 280:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var38 - var39;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var38);
                var38 = var1.Math;
                var2 = var38.abs;
                var2 = var2.bind(var38)(var39);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 371:
                if (!var0) {
                    _fun86679_ip = 465;
                    continue _fun86679
                }
            case 374:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var36 - var37;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var36);
                var36 = var1.Math;
                var2 = var36.abs;
                var2 = var2.bind(var36)(var37);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 465:
                if (!var0) {
                    _fun86679_ip = 559;
                    continue _fun86679
                }
            case 468:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var34 - var35;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var34);
                var34 = var1.Math;
                var2 = var34.abs;
                var2 = var2.bind(var34)(var35);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 559:
                if (!var0) {
                    _fun86679_ip = 653;
                    continue _fun86679
                }
            case 562:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var32 - var33;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var32);
                var32 = var1.Math;
                var2 = var32.abs;
                var2 = var2.bind(var32)(var33);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 653:
                if (!var0) {
                    _fun86679_ip = 747;
                    continue _fun86679
                }
            case 656:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var30 - var31;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var30);
                var30 = var1.Math;
                var2 = var30.abs;
                var2 = var2.bind(var30)(var31);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 747:
                if (!var0) {
                    _fun86679_ip = 841;
                    continue _fun86679
                }
            case 750:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var28 - var29;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var28);
                var28 = var1.Math;
                var2 = var28.abs;
                var2 = var2.bind(var28)(var29);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 841:
                if (!var0) {
                    _fun86679_ip = 935;
                    continue _fun86679
                }
            case 844:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var26 - var27;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var26);
                var26 = var1.Math;
                var2 = var26.abs;
                var2 = var2.bind(var26)(var27);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 935:
                if (!var0) {
                    _fun86679_ip = 1029;
                    continue _fun86679
                }
            case 938:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var24 - var25;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var24);
                var24 = var1.Math;
                var2 = var24.abs;
                var2 = var2.bind(var24)(var25);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1029:
                if (!var0) {
                    _fun86679_ip = 1123;
                    continue _fun86679
                }
            case 1032:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var22 - var23;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var22);
                var22 = var1.Math;
                var2 = var22.abs;
                var2 = var2.bind(var22)(var23);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1123:
                if (!var0) {
                    _fun86679_ip = 1217;
                    continue _fun86679
                }
            case 1126:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var20 - var21;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var20);
                var20 = var1.Math;
                var2 = var20.abs;
                var2 = var2.bind(var20)(var21);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1217:
                if (!var0) {
                    _fun86679_ip = 1311;
                    continue _fun86679
                }
            case 1220:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var18 - var19;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var18);
                var18 = var1.Math;
                var2 = var18.abs;
                var2 = var2.bind(var18)(var19);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1311:
                if (!var0) {
                    _fun86679_ip = 1405;
                    continue _fun86679
                }
            case 1314:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var16 - var17;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var16);
                var16 = var1.Math;
                var2 = var16.abs;
                var2 = var2.bind(var16)(var17);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1405:
                if (!var0) {
                    _fun86679_ip = 1499;
                    continue _fun86679
                }
            case 1408:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var14 - var15;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var14);
                var14 = var1.Math;
                var2 = var14.abs;
                var2 = var2.bind(var14)(var15);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1499:
                if (!var0) {
                    _fun86679_ip = 1593;
                    continue _fun86679
                }
            case 1502:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var12 - var13;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var5 = var2.EPSILON;
                var11 = var1.Math;
                var8 = var11.max;
                var6 = var1.Math;
                var2 = var6.abs;
                var6 = var2.bind(var6)(var12);
                var12 = var1.Math;
                var2 = var12.abs;
                var2 = var2.bind(var12)(var13);
                var2 = var8.bind(var11)(var7, var6, var2);
                var2 = var5 * var2;
                var0 = var4 <= var2;
            case 1593:
                if (!var0) {
                    _fun86679_ip = 1687;
                    continue _fun86679
                }
            case 1596:
                var5 = var1.Math;
                var4 = var5.abs;
                var2 = var10 - var9;
                var2 = var4.bind(var5)(var2);
                var3 = _closure1_slot0;
                var3 = var3.EPSILON;
                var6 = var1.Math;
                var5 = var6.max;
                var8 = var1.Math;
                var4 = var8.abs;
                var4 = var4.bind(var8)(var10);
                var8 = var1.Math;
                var1 = var8.abs;
                var1 = var1.bind(var8)(var9);
                var1 = var5.bind(var6)(var7, var4, var1);
                var1 = var3 * var1;
                var0 = var2 <= var1;
            case 1687:
                return var0;
        }
    };
    var2.equals = var9;
    var9 = function(arg0, arg1) { // Original name: exactEquals, environment: var7
        _fun86680: for (var _fun86680_ip = 0;;) switch (_fun86680_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = 0;
                var1 = var2[var0];
                var0 = var3[var0];
                var0 = var1 === var0;
                if (!var0) {
                    _fun86680_ip = 38;
                    continue _fun86680
                }
            case 23:
                var1 = 1;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 38:
                if (!var0) {
                    _fun86680_ip = 56;
                    continue _fun86680
                }
            case 41:
                var1 = 2;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 56:
                if (!var0) {
                    _fun86680_ip = 74;
                    continue _fun86680
                }
            case 59:
                var1 = 3;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 74:
                if (!var0) {
                    _fun86680_ip = 92;
                    continue _fun86680
                }
            case 77:
                var1 = 4;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 92:
                if (!var0) {
                    _fun86680_ip = 110;
                    continue _fun86680
                }
            case 95:
                var1 = 5;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 110:
                if (!var0) {
                    _fun86680_ip = 128;
                    continue _fun86680
                }
            case 113:
                var1 = 6;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 128:
                if (!var0) {
                    _fun86680_ip = 146;
                    continue _fun86680
                }
            case 131:
                var1 = 7;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 146:
                if (!var0) {
                    _fun86680_ip = 164;
                    continue _fun86680
                }
            case 149:
                var1 = 8;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 164:
                if (!var0) {
                    _fun86680_ip = 182;
                    continue _fun86680
                }
            case 167:
                var1 = 9;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 182:
                if (!var0) {
                    _fun86680_ip = 200;
                    continue _fun86680
                }
            case 185:
                var1 = 10;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 200:
                if (!var0) {
                    _fun86680_ip = 218;
                    continue _fun86680
                }
            case 203:
                var1 = 11;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 218:
                if (!var0) {
                    _fun86680_ip = 236;
                    continue _fun86680
                }
            case 221:
                var1 = 12;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 236:
                if (!var0) {
                    _fun86680_ip = 254;
                    continue _fun86680
                }
            case 239:
                var1 = 13;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 254:
                if (!var0) {
                    _fun86680_ip = 272;
                    continue _fun86680
                }
            case 257:
                var1 = 14;
                var4 = var2[var1];
                var1 = var3[var1];
                var0 = var4 === var1;
            case 272:
                if (!var0) {
                    _fun86680_ip = 290;
                    continue _fun86680
                }
            case 275:
                var1 = 15;
                var2 = var2[var1];
                var1 = var3[var1];
                var0 = var2 === var1;
            case 290:
                return var0;
        }
    };
    var2.exactEquals = var9;
    var9 = function(arg0) { // Original name: frob, environment: var7
        var5 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.sqrt;
        var0 = 0;
        var3 = var5[var0];
        var0 = var5[var0];
        var3 = var3 * var0;
        var0 = 1;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 2;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 3;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 4;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 5;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 6;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 7;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 8;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 9;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 10;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 11;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 12;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 13;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 14;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var3 = var3 + var0;
        var0 = 15;
        var4 = var5[var0];
        var0 = var5[var0];
        var0 = var4 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.frob = var9;
    var9 = function(arg0, arg1) { // Original name: fromQuat, environment: var7
        var0 = arg0;
        var5 = arg1;
        var3 = 0;
        var1 = var5[var3];
        var2 = 1;
        var4 = var5[var2];
        var14 = 2;
        var10 = var5[var14];
        var12 = 3;
        var13 = var5[var12];
        var5 = var1 + var1;
        var7 = var4 + var4;
        var9 = var10 + var10;
        var1 = var1 * var5;
        var11 = var4 * var5;
        var4 = var4 * var7;
        var8 = var10 * var5;
        var6 = var10 * var7;
        var10 = var10 * var9;
        var5 = var13 * var5;
        var7 = var13 * var7;
        var9 = var13 * var9;
        var13 = var2 - var4;
        var13 = var13 - var10;
        var0[var3] = var13;
        var13 = var11 + var9;
        var0[var2] = var13;
        var13 = var8 - var7;
        var0[var14] = var13;
        var0[var12] = var3;
        var11 = var11 - var9;
        var9 = 4;
        var0[var9] = var11;
        var9 = var2 - var1;
        var10 = var9 - var10;
        var9 = 5;
        var0[var9] = var10;
        var10 = var6 + var5;
        var9 = 6;
        var0[var9] = var10;
        var9 = 7;
        var0[var9] = var3;
        var8 = var8 + var7;
        var7 = 8;
        var0[var7] = var8;
        var6 = var6 - var5;
        var5 = 9;
        var0[var5] = var6;
        var1 = var2 - var1;
        var4 = var1 - var4;
        var1 = 10;
        var0[var1] = var4;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromQuat = var9;
    var9 = function(arg0, arg1) { // Original name: fromQuat2, environment: var7
        _fun86683: for (var _fun86683_ip = 0;;) switch (_fun86683_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var2 = _closure1_slot0;
                var3 = var2.ARRAY_TYPE;
                var2 = var3.prototype;
                var5 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var2 = 3;
                var21 = var5;
                var20 = var2;
                var3 = new var21[var3](var20, var19);
                var3 = var3 instanceof Object ? var3 : var5;
                var16 = 0;
                var5 = var4[var16];
                var8 = -var5;
                var15 = 1;
                var5 = var4[var15];
                var10 = -var5;
                var5 = 2;
                var6 = var4[var5];
                var12 = -var6;
                var13 = var4[var2];
                var2 = 4;
                var7 = var4[var2];
                var2 = 5;
                var2 = var4[var2];
                var6 = 6;
                var11 = var4[var6];
                var6 = 7;
                var9 = var4[var6];
                var14 = var8 * var8;
                var6 = var10 * var10;
                var14 = var14 + var6;
                var6 = var12 * var12;
                var14 = var14 + var6;
                var6 = var13 * var13;
                var6 = var14 + var6;
                if (!(!(var6 > var16))) {
                    _fun86683_ip = 248;
                    continue _fun86683
                }
            case 138:
                var17 = var7 * var13;
                var14 = var9 * var8;
                var17 = var17 + var14;
                var14 = var2 * var12;
                var17 = var17 + var14;
                var14 = var11 * var10;
                var14 = var17 - var14;
                var14 = var5 * var14;
                var3[var16] = var14;
                var17 = var2 * var13;
                var14 = var9 * var10;
                var17 = var17 + var14;
                var14 = var11 * var8;
                var17 = var17 + var14;
                var14 = var7 * var12;
                var14 = var17 - var14;
                var14 = var5 * var14;
                var3[var15] = var14;
                var17 = var11 * var13;
                var14 = var9 * var12;
                var17 = var17 + var14;
                var14 = var7 * var10;
                var17 = var17 + var14;
                var14 = var2 * var8;
                var14 = var17 - var14;
                var14 = var5 * var14;
                var3[var5] = var14;
                _fun86683_ip = 368;
                continue _fun86683;
            case 248:
                var17 = var7 * var13;
                var14 = var9 * var8;
                var17 = var17 + var14;
                var14 = var2 * var12;
                var17 = var17 + var14;
                var14 = var11 * var10;
                var14 = var17 - var14;
                var14 = var5 * var14;
                var14 = var14 / var6;
                var3[var16] = var14;
                var16 = var2 * var13;
                var14 = var9 * var10;
                var16 = var16 + var14;
                var14 = var11 * var8;
                var16 = var16 + var14;
                var14 = var7 * var12;
                var14 = var16 - var14;
                var14 = var5 * var14;
                var14 = var14 / var6;
                var3[var15] = var14;
                var11 = var11 * var13;
                var9 = var9 * var12;
                var9 = var11 + var9;
                var7 = var7 * var10;
                var7 = var9 + var7;
                var2 = var2 * var8;
                var2 = var7 - var2;
                var2 = var5 * var2;
                var2 = var2 / var6;
                var3[var5] = var2;
            case 368:
                var2 = _closure1_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var4, var3);
                return var0;
        }
    };
    var2.fromQuat2 = var9;
    var9 = function(arg0, arg1, arg2) { // Original name: fromRotation, environment: var7
        _fun86684: for (var _fun86684_ip = 0;;) switch (_fun86684_ip) {
            case 0:
                var0 = arg0;
                var9 = arg1;
                var1 = arg2;
                var3 = 0;
                var7 = var1[var3];
                var2 = 1;
                var6 = var1[var2];
                var10 = 2;
                var5 = var1[var10];
                var4 = global;
                var11 = var4.Math;
                var8 = var11.sqrt;
                var12 = var7 * var7;
                var1 = var6 * var6;
                var12 = var12 + var1;
                var1 = var5 * var5;
                var1 = var12 + var1;
                var1 = var8.bind(var11)(var1);
                var8 = _closure1_slot0;
                var8 = var8.EPSILON;
                if (!(!(var1 < var8))) {
                    _fun86684_ip = 379;
                    continue _fun86684
                }
            case 88:
                var1 = var2 / var1;
                var8 = var7 * var1;
                var6 = var6 * var1;
                var1 = var5 * var1;
                var7 = var4.Math;
                var5 = var7.sin;
                var7 = var5.bind(var7)(var9);
                var5 = var4.Math;
                var4 = var5.cos;
                var4 = var4.bind(var5)(var9);
                var5 = var2 - var4;
                var9 = var8 * var8;
                var9 = var9 * var5;
                var9 = var9 + var4;
                var0[var3] = var9;
                var11 = var1 * var7;
                var9 = var6 * var8;
                var9 = var9 * var5;
                var9 = var9 + var11;
                var0[var2] = var9;
                var11 = var6 * var7;
                var9 = var1 * var8;
                var9 = var9 * var5;
                var9 = var9 - var11;
                var0[var10] = var9;
                var9 = 3;
                var0[var9] = var3;
                var10 = var1 * var7;
                var9 = var8 * var6;
                var9 = var9 * var5;
                var10 = var9 - var10;
                var9 = 4;
                var0[var9] = var10;
                var9 = var6 * var6;
                var9 = var9 * var5;
                var10 = var9 + var4;
                var9 = 5;
                var0[var9] = var10;
                var10 = var8 * var7;
                var9 = var1 * var6;
                var9 = var9 * var5;
                var10 = var9 + var10;
                var9 = 6;
                var0[var9] = var10;
                var9 = 7;
                var0[var9] = var3;
                var10 = var6 * var7;
                var9 = var8 * var1;
                var9 = var9 * var5;
                var10 = var9 + var10;
                var9 = 8;
                var0[var9] = var10;
                var7 = var8 * var7;
                var6 = var6 * var1;
                var6 = var6 * var5;
                var7 = var6 - var7;
                var6 = 9;
                var0[var6] = var7;
                var1 = var1 * var1;
                var1 = var1 * var5;
                var4 = var1 + var4;
                var1 = 10;
                var0[var1] = var4;
                var1 = 11;
                var0[var1] = var3;
                var1 = 12;
                var0[var1] = var3;
                var1 = 13;
                var0[var1] = var3;
                var1 = 14;
                var0[var1] = var3;
                var1 = 15;
                var0[var1] = var2;
                return var0;
            case 379:
                var0 = null;
                return var0;
        }
    };
    var2.fromRotation = var9;
    var2.fromRotationTranslation = var8;
    var8 = function(arg0, arg1, arg2, arg3) { // Original name: fromRotationTranslationScale, environment: var7
        var0 = arg0;
        var7 = arg1;
        var3 = arg2;
        var6 = arg3;
        var4 = 0;
        var5 = var7[var4];
        var2 = 1;
        var9 = var7[var2];
        var1 = 2;
        var12 = var7[var1];
        var16 = 3;
        var14 = var7[var16];
        var8 = var5 + var5;
        var10 = var9 + var9;
        var13 = var12 + var12;
        var7 = var5 * var8;
        var15 = var5 * var10;
        var11 = var5 * var13;
        var5 = var9 * var10;
        var9 = var9 * var13;
        var12 = var12 * var13;
        var8 = var14 * var8;
        var10 = var14 * var10;
        var14 = var14 * var13;
        var18 = var6[var4];
        var13 = var6[var2];
        var6 = var6[var1];
        var17 = var5 + var12;
        var17 = var2 - var17;
        var17 = var17 * var18;
        var0[var4] = var17;
        var17 = var15 + var14;
        var17 = var17 * var18;
        var0[var2] = var17;
        var17 = var11 - var10;
        var17 = var17 * var18;
        var0[var1] = var17;
        var0[var16] = var4;
        var14 = var15 - var14;
        var15 = var14 * var13;
        var14 = 4;
        var0[var14] = var15;
        var12 = var7 + var12;
        var12 = var2 - var12;
        var14 = var12 * var13;
        var12 = 5;
        var0[var12] = var14;
        var12 = var9 + var8;
        var13 = var12 * var13;
        var12 = 6;
        var0[var12] = var13;
        var12 = 7;
        var0[var12] = var4;
        var10 = var11 + var10;
        var11 = var10 * var6;
        var10 = 8;
        var0[var10] = var11;
        var8 = var9 - var8;
        var9 = var8 * var6;
        var8 = 9;
        var0[var8] = var9;
        var5 = var7 + var5;
        var5 = var2 - var5;
        var6 = var5 * var6;
        var5 = 10;
        var0[var5] = var6;
        var5 = 11;
        var0[var5] = var4;
        var5 = var3[var4];
        var4 = 12;
        var0[var4] = var5;
        var5 = var3[var2];
        var4 = 13;
        var0[var4] = var5;
        var3 = var3[var1];
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotationTranslationScale = var8;
    var8 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: fromRotationTranslationScaleOrigin, environment: var7
        var0 = arg0;
        var7 = arg1;
        var9 = arg2;
        var6 = arg3;
        var5 = arg4;
        var14 = 0;
        var1 = var7[var14];
        var2 = 1;
        var12 = var7[var2];
        var3 = 2;
        var4 = var7[var3];
        var17 = 3;
        var8 = var7[var17];
        var10 = var1 + var1;
        var11 = var12 + var12;
        var7 = var4 + var4;
        var19 = var1 * var10;
        var15 = var1 * var11;
        var21 = var1 * var7;
        var1 = var12 * var11;
        var20 = var12 * var7;
        var4 = var4 * var7;
        var10 = var8 * var10;
        var11 = var8 * var11;
        var12 = var8 * var7;
        var23 = var6[var14];
        var22 = var6[var2];
        var18 = var6[var3];
        var8 = var5[var14];
        var7 = var5[var2];
        var5 = var5[var3];
        var6 = var1 + var4;
        var6 = var2 - var6;
        var16 = var6 * var23;
        var6 = var15 + var12;
        var13 = var6 * var23;
        var6 = var21 - var11;
        var6 = var6 * var23;
        var12 = var15 - var12;
        var15 = var12 * var22;
        var4 = var19 + var4;
        var4 = var2 - var4;
        var12 = var4 * var22;
        var4 = var20 + var10;
        var4 = var4 * var22;
        var11 = var21 + var11;
        var11 = var11 * var18;
        var10 = var20 - var10;
        var10 = var10 * var18;
        var1 = var19 + var1;
        var1 = var2 - var1;
        var1 = var1 * var18;
        var0[var14] = var16;
        var0[var2] = var13;
        var0[var3] = var6;
        var0[var17] = var14;
        var17 = 4;
        var0[var17] = var15;
        var17 = 5;
        var0[var17] = var12;
        var17 = 6;
        var0[var17] = var4;
        var17 = 7;
        var0[var17] = var14;
        var17 = 8;
        var0[var17] = var11;
        var17 = 9;
        var0[var17] = var10;
        var17 = 10;
        var0[var17] = var1;
        var17 = 11;
        var0[var17] = var14;
        var14 = var9[var14];
        var14 = var14 + var8;
        var16 = var16 * var8;
        var15 = var15 * var7;
        var15 = var16 + var15;
        var11 = var11 * var5;
        var11 = var15 + var11;
        var14 = var14 - var11;
        var11 = 12;
        var0[var11] = var14;
        var11 = var9[var2];
        var11 = var11 + var7;
        var13 = var13 * var8;
        var12 = var12 * var7;
        var12 = var13 + var12;
        var10 = var10 * var5;
        var10 = var12 + var10;
        var11 = var11 - var10;
        var10 = 13;
        var0[var10] = var11;
        var3 = var9[var3];
        var3 = var3 + var5;
        var6 = var6 * var8;
        var4 = var4 * var7;
        var4 = var6 + var4;
        var1 = var1 * var5;
        var1 = var4 + var1;
        var3 = var3 - var1;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromRotationTranslationScaleOrigin = var8;
    var8 = function(arg0, arg1) { // Original name: fromScaling, environment: var7
        var0 = arg0;
        var4 = arg1;
        var3 = 0;
        var1 = var4[var3];
        var0[var3] = var1;
        var2 = 1;
        var0[var2] = var3;
        var1 = 2;
        var0[var1] = var3;
        var5 = 3;
        var0[var5] = var3;
        var5 = 4;
        var0[var5] = var3;
        var6 = var4[var2];
        var5 = 5;
        var0[var5] = var6;
        var5 = 6;
        var0[var5] = var3;
        var5 = 7;
        var0[var5] = var3;
        var5 = 8;
        var0[var5] = var3;
        var5 = 9;
        var0[var5] = var3;
        var4 = var4[var1];
        var1 = 10;
        var0[var1] = var4;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromScaling = var8;
    var8 = function(arg0, arg1) { // Original name: fromTranslation, environment: var7
        var0 = arg0;
        var3 = arg1;
        var2 = 1;
        var4 = 0;
        var0[var4] = var2;
        var0[var2] = var4;
        var1 = 2;
        var0[var1] = var4;
        var5 = 3;
        var0[var5] = var4;
        var5 = 4;
        var0[var5] = var4;
        var5 = 5;
        var0[var5] = var2;
        var5 = 6;
        var0[var5] = var4;
        var5 = 7;
        var0[var5] = var4;
        var5 = 8;
        var0[var5] = var4;
        var5 = 9;
        var0[var5] = var4;
        var5 = 10;
        var0[var5] = var2;
        var5 = 11;
        var0[var5] = var4;
        var5 = var3[var4];
        var4 = 12;
        var0[var4] = var5;
        var5 = var3[var2];
        var4 = 13;
        var0[var4] = var5;
        var3 = var3[var1];
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromTranslation = var8;
    var8 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) { // Original name: fromValues, environment: var7
        var0 = _closure1_slot0;
        var2 = var0.ARRAY_TYPE;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 16;
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        var2 = arg0;
        var1 = 0;
        var0[var1] = var2;
        var2 = arg1;
        var1 = 1;
        var0[var1] = var2;
        var2 = arg2;
        var1 = 2;
        var0[var1] = var2;
        var2 = arg3;
        var1 = 3;
        var0[var1] = var2;
        var2 = arg4;
        var1 = 4;
        var0[var1] = var2;
        var2 = arg5;
        var1 = 5;
        var0[var1] = var2;
        var2 = arg6;
        var1 = 6;
        var0[var1] = var2;
        var2 = arg7;
        var1 = 7;
        var0[var1] = var2;
        var2 = arg8;
        var1 = 8;
        var0[var1] = var2;
        var2 = arg9;
        var1 = 9;
        var0[var1] = var2;
        var2 = arg10;
        var1 = 10;
        var0[var1] = var2;
        var2 = arg11;
        var1 = 11;
        var0[var1] = var2;
        var2 = arg12;
        var1 = 12;
        var0[var1] = var2;
        var2 = arg13;
        var1 = 13;
        var0[var1] = var2;
        var2 = arg14;
        var1 = 14;
        var0[var1] = var2;
        var2 = arg15;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromValues = var8;
    var8 = function(arg0, arg1) { // Original name: fromXRotation, environment: var7
        var0 = arg0;
        var4 = arg1;
        var2 = global;
        var3 = var2.Math;
        var1 = var3.sin;
        var1 = var1.bind(var3)(var4);
        var3 = var2.Math;
        var2 = var3.cos;
        var4 = var2.bind(var3)(var4);
        var2 = 1;
        var3 = 0;
        var0[var3] = var2;
        var0[var2] = var3;
        var5 = 2;
        var0[var5] = var3;
        var5 = 3;
        var0[var5] = var3;
        var5 = 4;
        var0[var5] = var3;
        var5 = 5;
        var0[var5] = var4;
        var5 = 6;
        var0[var5] = var1;
        var5 = 7;
        var0[var5] = var3;
        var5 = 8;
        var0[var5] = var3;
        var5 = -var1;
        var1 = 9;
        var0[var1] = var5;
        var1 = 10;
        var0[var1] = var4;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromXRotation = var8;
    var8 = function(arg0, arg1) { // Original name: fromYRotation, environment: var7
        var0 = arg0;
        var3 = arg1;
        var1 = global;
        var4 = var1.Math;
        var2 = var4.sin;
        var5 = var2.bind(var4)(var3);
        var2 = var1.Math;
        var1 = var2.cos;
        var4 = var1.bind(var2)(var3);
        var3 = 0;
        var0[var3] = var4;
        var2 = 1;
        var0[var2] = var3;
        var6 = -var5;
        var1 = 2;
        var0[var1] = var6;
        var1 = 3;
        var0[var1] = var3;
        var1 = 4;
        var0[var1] = var3;
        var1 = 5;
        var0[var1] = var2;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var5;
        var1 = 9;
        var0[var1] = var3;
        var1 = 10;
        var0[var1] = var4;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromYRotation = var8;
    var8 = function(arg0, arg1) { // Original name: fromZRotation, environment: var7
        var0 = arg0;
        var4 = arg1;
        var2 = global;
        var3 = var2.Math;
        var1 = var3.sin;
        var1 = var1.bind(var3)(var4);
        var3 = var2.Math;
        var2 = var3.cos;
        var4 = var2.bind(var3)(var4);
        var3 = 0;
        var0[var3] = var4;
        var2 = 1;
        var0[var2] = var1;
        var5 = 2;
        var0[var5] = var3;
        var5 = 3;
        var0[var5] = var3;
        var5 = -var1;
        var1 = 4;
        var0[var1] = var5;
        var1 = 5;
        var0[var1] = var4;
        var1 = 6;
        var0[var1] = var3;
        var1 = 7;
        var0[var1] = var3;
        var1 = 8;
        var0[var1] = var3;
        var1 = 9;
        var0[var1] = var3;
        var1 = 10;
        var0[var1] = var2;
        var1 = 11;
        var0[var1] = var3;
        var1 = 12;
        var0[var1] = var3;
        var1 = 13;
        var0[var1] = var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.fromZRotation = var8;
    var8 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: frustum, environment: var7
        var0 = arg0;
        var11 = arg1;
        var9 = arg2;
        var8 = arg3;
        var6 = arg4;
        var5 = arg5;
        var1 = arg6;
        var2 = var9 - var11;
        var12 = 1;
        var10 = var12 / var2;
        var2 = var6 - var8;
        var7 = var12 / var2;
        var2 = var5 - var1;
        var3 = var12 / var2;
        var4 = 2;
        var2 = var4 * var5;
        var13 = var2 * var10;
        var2 = 0;
        var0[var2] = var13;
        var0[var12] = var2;
        var0[var4] = var2;
        var12 = 3;
        var0[var12] = var2;
        var12 = 4;
        var0[var12] = var2;
        var12 = var4 * var5;
        var13 = var12 * var7;
        var12 = 5;
        var0[var12] = var13;
        var12 = 6;
        var0[var12] = var2;
        var12 = 7;
        var0[var12] = var2;
        var9 = var9 + var11;
        var10 = var9 * var10;
        var9 = 8;
        var0[var9] = var10;
        var6 = var6 + var8;
        var7 = var6 * var7;
        var6 = 9;
        var0[var6] = var7;
        var6 = var1 + var5;
        var7 = var6 * var3;
        var6 = 10;
        var0[var6] = var7;
        var7 = -1;
        var6 = 11;
        var0[var6] = var7;
        var6 = 12;
        var0[var6] = var2;
        var6 = 13;
        var0[var6] = var2;
        var1 = var1 * var5;
        var1 = var1 * var4;
        var3 = var1 * var3;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.frustum = var8;
    var8 = function(arg0, arg1) { // Original name: getRotation, environment: var7
        _fun86694: for (var _fun86694_ip = 0;;) switch (_fun86694_ip) {
            case 0:
                var0 = arg0;
                var14 = arg1;
                var1 = _closure1_slot0;
                var1 = var1.ARRAY_TYPE;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = 3;
                var20 = var3;
                var19 = var12;
                var1 = new var20[var1](var19, var18);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = _closure1_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)(var1, var14);
                var9 = 0;
                var2 = var1[var9];
                var6 = 1;
                var5 = var6 / var2;
                var2 = var1[var6];
                var8 = var6 / var2;
                var2 = 2;
                var1 = var1[var2];
                var13 = var6 / var1;
                var1 = var14[var9];
                var11 = var1 * var5;
                var1 = var14[var6];
                var4 = var1 * var8;
                var1 = var14[var2];
                var7 = var1 * var13;
                var1 = 4;
                var1 = var14[var1];
                var1 = var1 * var5;
                var3 = 5;
                var3 = var14[var3];
                var16 = var3 * var8;
                var3 = 6;
                var3 = var14[var3];
                var10 = var3 * var13;
                var3 = 8;
                var3 = var14[var3];
                var5 = var3 * var5;
                var3 = 9;
                var3 = var14[var3];
                var8 = var3 * var8;
                var3 = 10;
                var3 = var14[var3];
                var15 = var3 * var13;
                var3 = var11 + var16;
                var3 = var3 + var15;
                if (!(!(var3 > var9))) {
                    _fun86694_ip = 488;
                    continue _fun86694
                }
            case 194:
                if (!(var11 > var16)) {
                    _fun86694_ip = 205;
                    continue _fun86694
                }
            case 198:
                if (!(!(var11 > var15))) {
                    _fun86694_ip = 397;
                    continue _fun86694
                }
            case 205:
                if (!(!(var16 > var15))) {
                    _fun86694_ip = 303;
                    continue _fun86694
                }
            case 209:
                var13 = global;
                var17 = var13.Math;
                var14 = var17.sqrt;
                var13 = var6 + var15;
                var13 = var13 - var11;
                var13 = var13 - var16;
                var13 = var14.bind(var17)(var13);
                var14 = var2 * var13;
                var13 = var4 - var1;
                var13 = var13 / var14;
                var0[var12] = var13;
                var13 = var5 + var7;
                var13 = var13 / var14;
                var0[var9] = var13;
                var13 = var10 + var8;
                var13 = var13 / var14;
                var0[var6] = var13;
                var13 = 0.25;
                var13 = var13 * var14;
                var0[var2] = var13;
                _fun86694_ip = 569;
                continue _fun86694;
            case 303:
                var13 = global;
                var17 = var13.Math;
                var14 = var17.sqrt;
                var13 = var6 + var16;
                var13 = var13 - var11;
                var13 = var13 - var15;
                var13 = var14.bind(var17)(var13);
                var14 = var2 * var13;
                var13 = var5 - var7;
                var13 = var13 / var14;
                var0[var12] = var13;
                var13 = var4 + var1;
                var13 = var13 / var14;
                var0[var9] = var13;
                var13 = 0.25;
                var13 = var13 * var14;
                var0[var6] = var13;
                var13 = var10 + var8;
                var13 = var13 / var14;
                var0[var2] = var13;
                _fun86694_ip = 569;
                continue _fun86694;
            case 397:
                var13 = global;
                var14 = var13.Math;
                var13 = var14.sqrt;
                var11 = var6 + var11;
                var11 = var11 - var16;
                var11 = var11 - var15;
                var11 = var13.bind(var14)(var11);
                var13 = var2 * var11;
                var11 = var10 - var8;
                var11 = var11 / var13;
                var0[var12] = var11;
                var11 = 0.25;
                var11 = var11 * var13;
                var0[var9] = var11;
                var11 = var4 + var1;
                var11 = var11 / var13;
                var0[var6] = var11;
                var11 = var5 + var7;
                var11 = var11 / var13;
                var0[var2] = var11;
                _fun86694_ip = 569;
                continue _fun86694;
            case 488:
                var11 = global;
                var13 = var11.Math;
                var11 = var13.sqrt;
                var3 = var3 + var6;
                var3 = var11.bind(var13)(var3);
                var3 = var2 * var3;
                var11 = 0.25;
                var11 = var11 * var3;
                var0[var12] = var11;
                var8 = var10 - var8;
                var8 = var8 / var3;
                var0[var9] = var8;
                var5 = var5 - var7;
                var5 = var5 / var3;
                var0[var6] = var5;
                var1 = var4 - var1;
                var1 = var1 / var3;
                var0[var2] = var1;
            case 569:
                return var0;
        }
    };
    var2.getRotation = var8;
    var2.getScaling = var6;
    var6 = function(arg0, arg1) { // Original name: getTranslation, environment: var7
        var0 = arg0;
        var2 = arg1;
        var1 = 12;
        var3 = var2[var1];
        var1 = 0;
        var0[var1] = var3;
        var1 = 13;
        var3 = var2[var1];
        var1 = 1;
        var0[var1] = var3;
        var1 = 14;
        var2 = var2[var1];
        var1 = 2;
        var0[var1] = var2;
        return var0;
    };
    var2.getTranslation = var6;
    var2.identity = var0;
    var0 = function(arg0, arg1) { // Original name: invert, environment: var7
        _fun86696: for (var _fun86696_ip = 0;;) switch (_fun86696_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var46 = 0;
                var19 = var1[var46];
                var45 = 1;
                var18 = var1[var45];
                var44 = 2;
                var16 = var1[var44];
                var43 = 3;
                var30 = var1[var43];
                var42 = 4;
                var22 = var1[var42];
                var40 = 5;
                var23 = var1[var40];
                var39 = 6;
                var20 = var1[var39];
                var37 = 7;
                var34 = var1[var37];
                var35 = 8;
                var8 = var1[var35];
                var31 = 9;
                var7 = var1[var31];
                var29 = 10;
                var5 = var1[var29];
                var25 = 11;
                var24 = var1[var25];
                var21 = 12;
                var11 = var1[var21];
                var14 = 13;
                var12 = var1[var14];
                var10 = 14;
                var9 = var1[var10];
                var2 = 15;
                var28 = var1[var2];
                var3 = var19 * var23;
                var1 = var18 * var22;
                var1 = var3 - var1;
                var4 = var19 * var20;
                var3 = var16 * var22;
                var4 = var4 - var3;
                var6 = var19 * var34;
                var3 = var30 * var22;
                var27 = var6 - var3;
                var6 = var18 * var20;
                var3 = var16 * var23;
                var6 = var6 - var3;
                var13 = var18 * var34;
                var3 = var30 * var23;
                var26 = var13 - var3;
                var13 = var16 * var34;
                var3 = var30 * var20;
                var36 = var13 - var3;
                var13 = var8 * var12;
                var3 = var7 * var11;
                var13 = var13 - var3;
                var15 = var8 * var9;
                var3 = var5 * var11;
                var15 = var15 - var3;
                var17 = var8 * var28;
                var3 = var24 * var11;
                var33 = var17 - var3;
                var17 = var7 * var9;
                var3 = var5 * var12;
                var17 = var17 - var3;
                var32 = var7 * var28;
                var3 = var24 * var12;
                var32 = var32 - var3;
                var38 = var5 * var28;
                var3 = var24 * var9;
                var38 = var38 - var3;
                var41 = var1 * var38;
                var3 = var4 * var32;
                var41 = var41 - var3;
                var3 = var27 * var17;
                var41 = var41 + var3;
                var3 = var6 * var33;
                var41 = var41 + var3;
                var3 = var26 * var15;
                var41 = var41 - var3;
                var3 = var36 * var13;
                var3 = var41 + var3;
                if (var3) {
                    _fun86696_ip = 312;
                    continue _fun86696
                }
            case 308:
                var41 = null;
                return var41;
            case 312:
                var3 = var45 / var3;
                var47 = var23 * var38;
                var41 = var20 * var32;
                var47 = var47 - var41;
                var41 = var34 * var17;
                var41 = var47 + var41;
                var41 = var41 * var3;
                var0[var46] = var41;
                var46 = var16 * var32;
                var41 = var18 * var38;
                var46 = var46 - var41;
                var41 = var30 * var17;
                var41 = var46 - var41;
                var41 = var41 * var3;
                var0[var45] = var41;
                var45 = var12 * var36;
                var41 = var9 * var26;
                var45 = var45 - var41;
                var41 = var28 * var6;
                var41 = var45 + var41;
                var41 = var41 * var3;
                var0[var44] = var41;
                var44 = var5 * var26;
                var41 = var7 * var36;
                var44 = var44 - var41;
                var41 = var24 * var6;
                var41 = var44 - var41;
                var41 = var41 * var3;
                var0[var43] = var41;
                var43 = var20 * var33;
                var41 = var22 * var38;
                var43 = var43 - var41;
                var41 = var34 * var15;
                var41 = var43 - var41;
                var41 = var41 * var3;
                var0[var42] = var41;
                var41 = var19 * var38;
                var38 = var16 * var33;
                var41 = var41 - var38;
                var38 = var30 * var15;
                var38 = var41 + var38;
                var38 = var38 * var3;
                var0[var40] = var38;
                var40 = var9 * var27;
                var38 = var11 * var36;
                var40 = var40 - var38;
                var38 = var28 * var4;
                var38 = var40 - var38;
                var38 = var38 * var3;
                var0[var39] = var38;
                var38 = var8 * var36;
                var36 = var5 * var27;
                var38 = var38 - var36;
                var36 = var24 * var4;
                var36 = var38 + var36;
                var36 = var36 * var3;
                var0[var37] = var36;
                var37 = var22 * var32;
                var36 = var23 * var33;
                var36 = var37 - var36;
                var34 = var34 * var13;
                var34 = var36 + var34;
                var34 = var34 * var3;
                var0[var35] = var34;
                var33 = var18 * var33;
                var32 = var19 * var32;
                var32 = var33 - var32;
                var30 = var30 * var13;
                var30 = var32 - var30;
                var30 = var30 * var3;
                var0[var31] = var30;
                var31 = var11 * var26;
                var30 = var12 * var27;
                var30 = var31 - var30;
                var28 = var28 * var1;
                var28 = var30 + var28;
                var28 = var28 * var3;
                var0[var29] = var28;
                var27 = var7 * var27;
                var26 = var8 * var26;
                var26 = var27 - var26;
                var24 = var24 * var1;
                var24 = var26 - var24;
                var24 = var24 * var3;
                var0[var25] = var24;
                var23 = var23 * var15;
                var22 = var22 * var17;
                var22 = var23 - var22;
                var20 = var20 * var13;
                var20 = var22 - var20;
                var20 = var20 * var3;
                var0[var21] = var20;
                var17 = var19 * var17;
                var15 = var18 * var15;
                var15 = var17 - var15;
                var13 = var16 * var13;
                var13 = var15 + var13;
                var13 = var13 * var3;
                var0[var14] = var13;
                var12 = var12 * var4;
                var11 = var11 * var6;
                var11 = var12 - var11;
                var9 = var9 * var1;
                var9 = var11 - var9;
                var9 = var9 * var3;
                var0[var10] = var9;
                var6 = var8 * var6;
                var4 = var7 * var4;
                var4 = var6 - var4;
                var1 = var5 * var1;
                var1 = var4 + var1;
                var1 = var1 * var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.invert = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: lookAt, environment: var7
        _fun86697: for (var _fun86697_ip = 0;;) switch (_fun86697_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var1 = arg2;
                var2 = arg3;
                var16 = 0;
                var8 = var4[var16];
                var3 = 1;
                var7 = var4[var3];
                var15 = 2;
                var6 = var4[var15];
                var12 = var2[var16];
                var10 = var2[var3];
                var11 = var2[var15];
                var5 = var1[var16];
                var2 = var1[var3];
                var4 = var1[var15];
                var9 = global;
                var14 = var9.Math;
                var13 = var14.abs;
                var1 = var8 - var5;
                var14 = var13.bind(var14)(var1);
                var13 = _closure1_slot0;
                var13 = var13.EPSILON;
                if (!(var14 < var13)) {
                    _fun86697_ip = 169;
                    continue _fun86697
                }
            case 96:
                var17 = var9.Math;
                var14 = var17.abs;
                var13 = var7 - var2;
                var14 = var14.bind(var17)(var13);
                var13 = _closure1_slot0;
                var13 = var13.EPSILON;
                if (!(var14 < var13)) {
                    _fun86697_ip = 169;
                    continue _fun86697
                }
            case 131:
                var17 = var9.Math;
                var14 = var17.abs;
                var13 = var6 - var4;
                var14 = var14.bind(var17)(var13);
                var13 = _closure1_slot0;
                var13 = var13.EPSILON;
                if (!(!(var14 < var13))) {
                    _fun86697_ip = 604;
                    continue _fun86697
                }
            case 169:
                var13 = var8 - var5;
                var2 = var7 - var2;
                var4 = var6 - var4;
                var17 = var9.Math;
                var14 = var17.sqrt;
                var18 = var13 * var13;
                var5 = var2 * var2;
                var18 = var18 + var5;
                var5 = var4 * var4;
                var5 = var18 + var5;
                var5 = var14.bind(var17)(var5);
                var5 = var3 / var5;
                var4 = var4 * var5;
                var17 = var10 * var4;
                var2 = var2 * var5;
                var14 = var11 * var2;
                var17 = var17 - var14;
                var5 = var13 * var5;
                var13 = var11 * var5;
                var11 = var12 * var4;
                var11 = var13 - var11;
                var12 = var12 * var2;
                var10 = var10 * var5;
                var18 = var12 - var10;
                var13 = var9.Math;
                var12 = var13.sqrt;
                var14 = var17 * var17;
                var10 = var11 * var11;
                var14 = var14 + var10;
                var10 = var18 * var18;
                var10 = var14 + var10;
                var10 = var12.bind(var13)(var10);
                var14 = 0;
                var12 = 0;
                var13 = 0;
                if (!var10) {
                    _fun86697_ip = 332;
                    continue _fun86697
                }
            case 316:
                var10 = var3 / var10;
                var14 = var17 * var10;
                var12 = var11 * var10;
                var13 = var18 * var10;
            case 332:
                var11 = var2 * var13;
                var10 = var4 * var12;
                var19 = var11 - var10;
                var11 = var4 * var14;
                var10 = var5 * var13;
                var18 = var11 - var10;
                var11 = var5 * var12;
                var10 = var2 * var14;
                var20 = var11 - var10;
                var11 = var9.Math;
                var10 = var11.sqrt;
                var17 = var19 * var19;
                var9 = var18 * var18;
                var17 = var17 + var9;
                var9 = var20 * var20;
                var9 = var17 + var9;
                var17 = var10.bind(var11)(var9);
                var11 = 0;
                var9 = 0;
                var10 = 0;
                if (!var17) {
                    _fun86697_ip = 430;
                    continue _fun86697
                }
            case 414:
                var17 = var3 / var17;
                var11 = var19 * var17;
                var9 = var18 * var17;
                var10 = var20 * var17;
            case 430:
                var0[var16] = var14;
                var0[var3] = var11;
                var0[var15] = var5;
                var15 = 3;
                var0[var15] = var16;
                var15 = 4;
                var0[var15] = var12;
                var15 = 5;
                var0[var15] = var9;
                var15 = 6;
                var0[var15] = var2;
                var15 = 7;
                var0[var15] = var16;
                var15 = 8;
                var0[var15] = var13;
                var15 = 9;
                var0[var15] = var10;
                var15 = 10;
                var0[var15] = var4;
                var15 = 11;
                var0[var15] = var16;
                var14 = var14 * var8;
                var12 = var12 * var7;
                var13 = var13 * var6;
                var12 = var14 + var12;
                var12 = var12 + var13;
                var13 = -var12;
                var12 = 12;
                var0[var12] = var13;
                var11 = var11 * var8;
                var9 = var9 * var7;
                var10 = var10 * var6;
                var9 = var11 + var9;
                var9 = var9 + var10;
                var10 = -var9;
                var9 = 13;
                var0[var9] = var10;
                var5 = var5 * var8;
                var2 = var2 * var7;
                var4 = var4 * var6;
                var2 = var5 + var2;
                var2 = var2 + var4;
                var4 = -var2;
                var2 = 14;
                var0[var2] = var4;
                var2 = 15;
                var0[var2] = var3;
                return var0;
            case 604:
                var2 = _closure1_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.lookAt = var0;
    var0 = undefined;
    var2.mul = var0;
    var2.multiply = var3;
    var6 = function(arg0, arg1, arg2) { // Original name: multiplyScalar, environment: var7
        var0 = arg0;
        var1 = arg1;
        var3 = arg2;
        var4 = 0;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 1;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 2;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 3;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 4;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 5;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 6;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 7;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 8;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 9;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 10;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 11;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 12;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 13;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var4 = 14;
        var2 = var1[var4];
        var2 = var2 * var3;
        var0[var4] = var2;
        var2 = 15;
        var1 = var1[var2];
        var1 = var1 * var3;
        var0[var2] = var1;
        return var0;
    };
    var2.multiplyScalar = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: multiplyScalarAndAdd, environment: var7
        var0 = arg0;
        var3 = arg1;
        var1 = arg2;
        var4 = arg3;
        var5 = 0;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 1;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 2;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 3;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 4;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 5;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 6;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 7;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 8;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 9;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 10;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 11;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 12;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 13;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var5 = 14;
        var6 = var3[var5];
        var2 = var1[var5];
        var2 = var2 * var4;
        var2 = var6 + var2;
        var0[var5] = var2;
        var2 = 15;
        var3 = var3[var2];
        var1 = var1[var2];
        var1 = var1 * var4;
        var1 = var3 + var1;
        var0[var2] = var1;
        return var0;
    };
    var2.multiplyScalarAndAdd = var6;
    var2.ortho = var0;
    var2.orthoNO = var4;
    var6 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: orthoZO, environment: var7
        var0 = arg0;
        var9 = arg1;
        var7 = arg2;
        var6 = arg3;
        var4 = arg4;
        var3 = arg5;
        var1 = var9 - var7;
        var2 = 1;
        var8 = var2 / var1;
        var1 = var6 - var4;
        var5 = var2 / var1;
        var1 = arg6;
        var1 = var3 - var1;
        var1 = var2 / var1;
        var10 = -2;
        var12 = var10 * var8;
        var11 = 0;
        var0[var11] = var12;
        var0[var2] = var11;
        var12 = 2;
        var0[var12] = var11;
        var12 = 3;
        var0[var12] = var11;
        var12 = 4;
        var0[var12] = var11;
        var12 = var10 * var5;
        var10 = 5;
        var0[var10] = var12;
        var10 = 6;
        var0[var10] = var11;
        var10 = 7;
        var0[var10] = var11;
        var10 = 8;
        var0[var10] = var11;
        var10 = 9;
        var0[var10] = var11;
        var10 = 10;
        var0[var10] = var1;
        var10 = 11;
        var0[var10] = var11;
        var7 = var9 + var7;
        var8 = var7 * var8;
        var7 = 12;
        var0[var7] = var8;
        var4 = var4 + var6;
        var5 = var4 * var5;
        var4 = 13;
        var0[var4] = var5;
        var3 = var3 * var1;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.orthoZO = var6;
    var2.perspective = var0;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: perspectiveFromFieldOfView, environment: var7
        var0 = arg0;
        var10 = arg1;
        var4 = arg2;
        var1 = arg3;
        var2 = global;
        var6 = var2.Math;
        var5 = var6.tan;
        var7 = var10.upDegrees;
        var3 = var2.Math;
        var3 = var3.PI;
        var3 = var7 * var3;
        var8 = 180;
        var3 = var3 / var8;
        var7 = var5.bind(var6)(var3);
        var6 = var2.Math;
        var5 = var6.tan;
        var9 = var10.downDegrees;
        var3 = var2.Math;
        var3 = var3.PI;
        var3 = var9 * var3;
        var3 = var3 / var8;
        var3 = var5.bind(var6)(var3);
        var9 = var2.Math;
        var6 = var9.tan;
        var11 = var10.leftDegrees;
        var5 = var2.Math;
        var5 = var5.PI;
        var5 = var11 * var5;
        var5 = var5 / var8;
        var9 = var6.bind(var9)(var5);
        var6 = var2.Math;
        var5 = var6.tan;
        var10 = var10.rightDegrees;
        var2 = var2.Math;
        var2 = var2.PI;
        var2 = var10 * var2;
        var2 = var2 / var8;
        var5 = var5.bind(var6)(var2);
        var2 = var9 + var5;
        var10 = 2;
        var8 = var10 / var2;
        var2 = var7 + var3;
        var6 = var10 / var2;
        var2 = 0;
        var0[var2] = var8;
        var11 = 1;
        var0[var11] = var2;
        var0[var10] = var2;
        var10 = 3;
        var0[var10] = var2;
        var10 = 4;
        var0[var10] = var2;
        var10 = 5;
        var0[var10] = var6;
        var10 = 6;
        var0[var10] = var2;
        var10 = 7;
        var0[var10] = var2;
        var5 = var9 - var5;
        var5 = -var5;
        var8 = var5 * var8;
        var5 = 0.5;
        var9 = var8 * var5;
        var8 = 8;
        var0[var8] = var9;
        var3 = var7 - var3;
        var3 = var3 * var6;
        var5 = var3 * var5;
        var3 = 9;
        var0[var3] = var5;
        var3 = var4 - var1;
        var5 = var1 / var3;
        var3 = 10;
        var0[var3] = var5;
        var5 = -1;
        var3 = 11;
        var0[var3] = var5;
        var3 = 12;
        var0[var3] = var2;
        var3 = 13;
        var0[var3] = var2;
        var3 = var1 * var4;
        var1 = var4 - var1;
        var3 = var3 / var1;
        var1 = 14;
        var0[var1] = var3;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.perspectiveFromFieldOfView = var6;
    var2.perspectiveNO = var5;
    var6 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: perspectiveZO, environment: var7
        _fun86702: for (var _fun86702_ip = 0;;) switch (_fun86702_ip) {
            case 0:
                var0 = arg0;
                var3 = arg3;
                var1 = arg4;
                var2 = global;
                var6 = var2.Math;
                var5 = var6.tan;
                var4 = arg1;
                var2 = 2;
                var4 = var4 / var2;
                var5 = var5.bind(var6)(var4);
                var4 = 1;
                var5 = var4 / var5;
                var6 = arg2;
                var7 = var5 / var6;
                var6 = 0;
                var0[var6] = var7;
                var0[var4] = var6;
                var0[var2] = var6;
                var2 = 3;
                var0[var2] = var6;
                var2 = 4;
                var0[var2] = var6;
                var2 = 5;
                var0[var2] = var5;
                var2 = 6;
                var0[var2] = var6;
                var2 = 7;
                var0[var2] = var6;
                var2 = 8;
                var0[var2] = var6;
                var2 = 9;
                var0[var2] = var6;
                var5 = -1;
                var2 = 11;
                var0[var2] = var5;
                var2 = 12;
                var0[var2] = var6;
                var2 = 13;
                var0[var2] = var6;
                var2 = 15;
                var0[var2] = var6;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun86702_ip = 169;
                    continue _fun86702
                }
            case 155:
                var2 = inf;
                if (!(var1 === var2)) {
                    _fun86702_ip = 188;
                    continue _fun86702
                }
            case 169:
                var2 = 10;
                var0[var2] = var5;
                var5 = -var3;
                var2 = 14;
                var0[var2] = var5;
                _fun86702_ip = 222;
                continue _fun86702;
            case 188:
                var2 = var3 - var1;
                var2 = var4 / var2;
                var5 = var1 * var2;
                var4 = 10;
                var0[var4] = var5;
                var1 = var1 * var3;
                var2 = var1 * var2;
                var1 = 14;
                var0[var1] = var2;
            case 222:
                return var0;
        }
    };
    var2.perspectiveZO = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: rotate, environment: var7
        _fun86703: for (var _fun86703_ip = 0;;) switch (_fun86703_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var6 = arg2;
                var3 = arg3;
                var35 = 0;
                var7 = var3[var35];
                var34 = 1;
                var2 = var3[var34];
                var33 = 2;
                var5 = var3[var33];
                var3 = global;
                var9 = var3.Math;
                var8 = var9.sqrt;
                var10 = var7 * var7;
                var4 = var2 * var2;
                var10 = var10 + var4;
                var4 = var5 * var5;
                var4 = var10 + var4;
                var4 = var8.bind(var9)(var4);
                var8 = _closure1_slot0;
                var8 = var8.EPSILON;
                if (!(!(var4 < var8))) {
                    _fun86703_ip = 690;
                    continue _fun86703
                }
            case 91:
                var4 = var34 / var4;
                var38 = var7 * var4;
                var2 = var2 * var4;
                var4 = var5 * var4;
                var7 = var3.Math;
                var5 = var7.sin;
                var37 = var5.bind(var7)(var6);
                var5 = var3.Math;
                var3 = var5.cos;
                var32 = var3.bind(var5)(var6);
                var36 = var34 - var32;
                var20 = var1[var35];
                var16 = var1[var34];
                var12 = var1[var33];
                var29 = 3;
                var8 = var1[var29];
                var28 = 4;
                var17 = var1[var28];
                var27 = 5;
                var13 = var1[var27];
                var26 = 6;
                var9 = var1[var26];
                var22 = 7;
                var7 = var1[var22];
                var18 = 8;
                var19 = var1[var18];
                var14 = 9;
                var15 = var1[var14];
                var10 = 10;
                var11 = var1[var10];
                var3 = 11;
                var6 = var1[var3];
                var5 = var38 * var38;
                var5 = var5 * var36;
                var31 = var5 + var32;
                var21 = var4 * var37;
                var5 = var2 * var38;
                var5 = var5 * var36;
                var25 = var5 + var21;
                var21 = var2 * var37;
                var5 = var4 * var38;
                var5 = var5 * var36;
                var30 = var5 - var21;
                var21 = var4 * var37;
                var5 = var38 * var2;
                var5 = var5 * var36;
                var24 = var5 - var21;
                var5 = var2 * var2;
                var5 = var5 * var36;
                var21 = var5 + var32;
                var23 = var38 * var37;
                var5 = var4 * var2;
                var5 = var5 * var36;
                var23 = var5 + var23;
                var39 = var2 * var37;
                var5 = var38 * var4;
                var5 = var5 * var36;
                var5 = var5 + var39;
                var37 = var38 * var37;
                var2 = var2 * var4;
                var2 = var2 * var36;
                var2 = var2 - var37;
                var4 = var4 * var4;
                var4 = var4 * var36;
                var4 = var4 + var32;
                var37 = var20 * var31;
                var32 = var17 * var25;
                var36 = var19 * var30;
                var32 = var37 + var32;
                var32 = var32 + var36;
                var0[var35] = var32;
                var36 = var16 * var31;
                var32 = var13 * var25;
                var35 = var15 * var30;
                var32 = var36 + var32;
                var32 = var32 + var35;
                var0[var34] = var32;
                var35 = var12 * var31;
                var32 = var9 * var25;
                var34 = var11 * var30;
                var32 = var35 + var32;
                var32 = var32 + var34;
                var0[var33] = var32;
                var31 = var8 * var31;
                var25 = var7 * var25;
                var30 = var6 * var30;
                var25 = var31 + var25;
                var25 = var25 + var30;
                var0[var29] = var25;
                var30 = var20 * var24;
                var25 = var17 * var21;
                var29 = var19 * var23;
                var25 = var30 + var25;
                var25 = var25 + var29;
                var0[var28] = var25;
                var29 = var16 * var24;
                var25 = var13 * var21;
                var28 = var15 * var23;
                var25 = var29 + var25;
                var25 = var25 + var28;
                var0[var27] = var25;
                var28 = var12 * var24;
                var25 = var9 * var21;
                var27 = var11 * var23;
                var25 = var28 + var25;
                var25 = var25 + var27;
                var0[var26] = var25;
                var24 = var8 * var24;
                var21 = var7 * var21;
                var23 = var6 * var23;
                var21 = var24 + var21;
                var21 = var21 + var23;
                var0[var22] = var21;
                var20 = var20 * var5;
                var17 = var17 * var2;
                var19 = var19 * var4;
                var17 = var20 + var17;
                var17 = var17 + var19;
                var0[var18] = var17;
                var16 = var16 * var5;
                var13 = var13 * var2;
                var15 = var15 * var4;
                var13 = var16 + var13;
                var13 = var13 + var15;
                var0[var14] = var13;
                var12 = var12 * var5;
                var9 = var9 * var2;
                var11 = var11 * var4;
                var9 = var12 + var9;
                var9 = var9 + var11;
                var0[var10] = var9;
                var5 = var8 * var5;
                var2 = var7 * var2;
                var4 = var6 * var4;
                var2 = var5 + var2;
                var2 = var2 + var4;
                var0[var3] = var2;
                if (!(var1 !== var0)) {
                    _fun86703_ip = 688;
                    continue _fun86703
                }
            case 644:
                var3 = 12;
                var2 = var1[var3];
                var0[var3] = var2;
                var3 = 13;
                var2 = var1[var3];
                var0[var3] = var2;
                var3 = 14;
                var2 = var1[var3];
                var0[var3] = var2;
                var2 = 15;
                var1 = var1[var2];
                var0[var2] = var1;
            case 688:
                return var0;
            case 690:
                var0 = null;
                return var0;
        }
    };
    var2.rotate = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateX, environment: var7
        _fun86704: for (var _fun86704_ip = 0;;) switch (_fun86704_ip) {
            case 0:
                var0 = arg0;
                var15 = arg1;
                var3 = arg2;
                var1 = global;
                var4 = var1.Math;
                var2 = var4.sin;
                var4 = var2.bind(var4)(var3);
                var2 = var1.Math;
                var1 = var2.cos;
                var5 = var1.bind(var2)(var3);
                var19 = 4;
                var12 = var15[var19];
                var18 = 5;
                var9 = var15[var18];
                var17 = 6;
                var6 = var15[var17];
                var16 = 7;
                var1 = var15[var16];
                var13 = 8;
                var14 = var15[var13];
                var10 = 9;
                var11 = var15[var10];
                var7 = 10;
                var8 = var15[var7];
                var2 = 11;
                var3 = var15[var2];
                if (!(var15 !== var0)) {
                    _fun86704_ip = 192;
                    continue _fun86704
                }
            case 105:
                var21 = 0;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 1;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 2;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 3;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 12;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 13;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 14;
                var20 = var15[var21];
                var0[var21] = var20;
                var20 = 15;
                var15 = var15[var20];
                var0[var20] = var15;
            case 192:
                var20 = var12 * var5;
                var15 = var14 * var4;
                var15 = var20 + var15;
                var0[var19] = var15;
                var19 = var9 * var5;
                var15 = var11 * var4;
                var15 = var19 + var15;
                var0[var18] = var15;
                var18 = var6 * var5;
                var15 = var8 * var4;
                var15 = var18 + var15;
                var0[var17] = var15;
                var17 = var1 * var5;
                var15 = var3 * var4;
                var15 = var17 + var15;
                var0[var16] = var15;
                var14 = var14 * var5;
                var12 = var12 * var4;
                var12 = var14 - var12;
                var0[var13] = var12;
                var11 = var11 * var5;
                var9 = var9 * var4;
                var9 = var11 - var9;
                var0[var10] = var9;
                var8 = var8 * var5;
                var6 = var6 * var4;
                var6 = var8 - var6;
                var0[var7] = var6;
                var3 = var3 * var5;
                var1 = var1 * var4;
                var1 = var3 - var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.rotateX = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateY, environment: var7
        _fun86705: for (var _fun86705_ip = 0;;) switch (_fun86705_ip) {
            case 0:
                var0 = arg0;
                var15 = arg1;
                var3 = arg2;
                var1 = global;
                var4 = var1.Math;
                var2 = var4.sin;
                var5 = var2.bind(var4)(var3);
                var2 = var1.Math;
                var1 = var2.cos;
                var4 = var1.bind(var2)(var3);
                var19 = 0;
                var14 = var15[var19];
                var18 = 1;
                var11 = var15[var18];
                var17 = 2;
                var8 = var15[var17];
                var16 = 3;
                var3 = var15[var16];
                var13 = 8;
                var12 = var15[var13];
                var10 = 9;
                var9 = var15[var10];
                var7 = 10;
                var6 = var15[var7];
                var2 = 11;
                var1 = var15[var2];
                if (!(var15 !== var0)) {
                    _fun86705_ip = 192;
                    continue _fun86705
                }
            case 104:
                var21 = 4;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 5;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 6;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 7;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 12;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 13;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 14;
                var20 = var15[var21];
                var0[var21] = var20;
                var20 = 15;
                var15 = var15[var20];
                var0[var20] = var15;
            case 192:
                var20 = var14 * var4;
                var15 = var12 * var5;
                var15 = var20 - var15;
                var0[var19] = var15;
                var19 = var11 * var4;
                var15 = var9 * var5;
                var15 = var19 - var15;
                var0[var18] = var15;
                var18 = var8 * var4;
                var15 = var6 * var5;
                var15 = var18 - var15;
                var0[var17] = var15;
                var17 = var3 * var4;
                var15 = var1 * var5;
                var15 = var17 - var15;
                var0[var16] = var15;
                var14 = var14 * var5;
                var12 = var12 * var4;
                var12 = var14 + var12;
                var0[var13] = var12;
                var11 = var11 * var5;
                var9 = var9 * var4;
                var9 = var11 + var9;
                var0[var10] = var9;
                var8 = var8 * var5;
                var6 = var6 * var4;
                var6 = var8 + var6;
                var0[var7] = var6;
                var3 = var3 * var5;
                var1 = var1 * var4;
                var1 = var3 + var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.rotateY = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: rotateZ, environment: var7
        _fun86706: for (var _fun86706_ip = 0;;) switch (_fun86706_ip) {
            case 0:
                var0 = arg0;
                var15 = arg1;
                var3 = arg2;
                var1 = global;
                var4 = var1.Math;
                var2 = var4.sin;
                var4 = var2.bind(var4)(var3);
                var2 = var1.Math;
                var1 = var2.cos;
                var5 = var1.bind(var2)(var3);
                var19 = 0;
                var12 = var15[var19];
                var18 = 1;
                var9 = var15[var18];
                var17 = 2;
                var6 = var15[var17];
                var16 = 3;
                var1 = var15[var16];
                var13 = 4;
                var14 = var15[var13];
                var10 = 5;
                var11 = var15[var10];
                var7 = 6;
                var8 = var15[var7];
                var2 = 7;
                var3 = var15[var2];
                if (!(var15 !== var0)) {
                    _fun86706_ip = 192;
                    continue _fun86706
                }
            case 104:
                var21 = 8;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 9;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 10;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 11;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 12;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 13;
                var20 = var15[var21];
                var0[var21] = var20;
                var21 = 14;
                var20 = var15[var21];
                var0[var21] = var20;
                var20 = 15;
                var15 = var15[var20];
                var0[var20] = var15;
            case 192:
                var20 = var12 * var5;
                var15 = var14 * var4;
                var15 = var20 + var15;
                var0[var19] = var15;
                var19 = var9 * var5;
                var15 = var11 * var4;
                var15 = var19 + var15;
                var0[var18] = var15;
                var18 = var6 * var5;
                var15 = var8 * var4;
                var15 = var18 + var15;
                var0[var17] = var15;
                var17 = var1 * var5;
                var15 = var3 * var4;
                var15 = var17 + var15;
                var0[var16] = var15;
                var14 = var14 * var5;
                var12 = var12 * var4;
                var12 = var14 - var12;
                var0[var13] = var12;
                var11 = var11 * var5;
                var9 = var9 * var4;
                var9 = var11 - var9;
                var0[var10] = var9;
                var8 = var8 * var5;
                var6 = var6 * var4;
                var6 = var8 - var6;
                var0[var7] = var6;
                var3 = var3 * var5;
                var1 = var1 * var4;
                var1 = var3 - var1;
                var0[var2] = var1;
                return var0;
        }
    };
    var2.rotateZ = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: scale, environment: var7
        var0 = arg0;
        var1 = arg1;
        var2 = arg2;
        var8 = 0;
        var6 = var2[var8];
        var7 = 1;
        var5 = var2[var7];
        var3 = 2;
        var4 = var2[var3];
        var2 = var1[var8];
        var2 = var2 * var6;
        var0[var8] = var2;
        var2 = var1[var7];
        var2 = var2 * var6;
        var0[var7] = var2;
        var2 = var1[var3];
        var2 = var2 * var6;
        var0[var3] = var2;
        var3 = 3;
        var2 = var1[var3];
        var2 = var2 * var6;
        var0[var3] = var2;
        var3 = 4;
        var2 = var1[var3];
        var2 = var2 * var5;
        var0[var3] = var2;
        var3 = 5;
        var2 = var1[var3];
        var2 = var2 * var5;
        var0[var3] = var2;
        var3 = 6;
        var2 = var1[var3];
        var2 = var2 * var5;
        var0[var3] = var2;
        var3 = 7;
        var2 = var1[var3];
        var2 = var2 * var5;
        var0[var3] = var2;
        var3 = 8;
        var2 = var1[var3];
        var2 = var2 * var4;
        var0[var3] = var2;
        var3 = 9;
        var2 = var1[var3];
        var2 = var2 * var4;
        var0[var3] = var2;
        var3 = 10;
        var2 = var1[var3];
        var2 = var2 * var4;
        var0[var3] = var2;
        var3 = 11;
        var2 = var1[var3];
        var2 = var2 * var4;
        var0[var3] = var2;
        var3 = 12;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 13;
        var2 = var1[var3];
        var0[var3] = var2;
        var3 = 14;
        var2 = var1[var3];
        var0[var3] = var2;
        var2 = 15;
        var1 = var1[var2];
        var0[var2] = var1;
        return var0;
    };
    var2.scale = var6;
    var6 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16) { // Original name: set, environment: var7
        var0 = arg0;
        var2 = arg1;
        var1 = 0;
        var0[var1] = var2;
        var2 = arg2;
        var1 = 1;
        var0[var1] = var2;
        var2 = arg3;
        var1 = 2;
        var0[var1] = var2;
        var2 = arg4;
        var1 = 3;
        var0[var1] = var2;
        var2 = arg5;
        var1 = 4;
        var0[var1] = var2;
        var2 = arg6;
        var1 = 5;
        var0[var1] = var2;
        var2 = arg7;
        var1 = 6;
        var0[var1] = var2;
        var2 = arg8;
        var1 = 7;
        var0[var1] = var2;
        var2 = arg9;
        var1 = 8;
        var0[var1] = var2;
        var2 = arg10;
        var1 = 9;
        var0[var1] = var2;
        var2 = arg11;
        var1 = 10;
        var0[var1] = var2;
        var2 = arg12;
        var1 = 11;
        var0[var1] = var2;
        var2 = arg13;
        var1 = 12;
        var0[var1] = var2;
        var2 = arg14;
        var1 = 13;
        var0[var1] = var2;
        var2 = arg15;
        var1 = 14;
        var0[var1] = var2;
        var2 = arg16;
        var1 = 15;
        var0[var1] = var2;
        return var0;
    };
    var2.set = var6;
    var6 = function(arg0) { // Original name: str, environment: var7
        var3 = arg0;
        var0 = 0;
        var1 = var3[var0];
        var0 = 'mat4(';
        var0 = var0 + var1;
        var1 = 1;
        var1 = var3[var1];
        var2 = ', ';
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 2;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 3;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 4;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 5;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 6;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 7;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 8;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 9;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 10;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 11;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 12;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 13;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 14;
        var1 = var3[var1];
        var0 = var0 + var2;
        var0 = var0 + var1;
        var1 = 15;
        var1 = var3[var1];
        var0 = var0 + var2;
        var1 = var0 + var1;
        var0 = ')';
        var0 = var1 + var0;
        return var0;
    };
    var2.str = var6;
    var2.sub = var0;
    var2.subtract = var1;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: targetTo, environment: var7
        _fun86710: for (var _fun86710_ip = 0;;) switch (_fun86710_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var7 = arg2;
                var8 = arg3;
                var6 = 0;
                var5 = var1[var6];
                var2 = 1;
                var4 = var1[var2];
                var12 = 2;
                var3 = var1[var12];
                var10 = var8[var6];
                var1 = var8[var2];
                var11 = var8[var12];
                var8 = var7[var6];
                var15 = var5 - var8;
                var8 = var7[var2];
                var14 = var4 - var8;
                var7 = var7[var12];
                var16 = var3 - var7;
                var8 = var15 * var15;
                var7 = var14 * var14;
                var8 = var8 + var7;
                var7 = var16 * var16;
                var18 = var8 + var7;
                var9 = var15;
                var8 = var14;
                var7 = var16;
                if (!(var18 > var6)) {
                    _fun86710_ip = 136;
                    continue _fun86710
                }
            case 101:
                var13 = global;
                var17 = var13.Math;
                var13 = var17.sqrt;
                var13 = var13.bind(var17)(var18);
                var13 = var2 / var13;
                var9 = var15 * var13;
                var8 = var14 * var13;
                var7 = var16 * var13;
            case 136:
                var14 = var1 * var7;
                var13 = var11 * var8;
                var15 = var14 - var13;
                var13 = var11 * var9;
                var11 = var10 * var7;
                var14 = var13 - var11;
                var10 = var10 * var8;
                var1 = var1 * var9;
                var16 = var10 - var1;
                var10 = var15 * var15;
                var1 = var14 * var14;
                var10 = var10 + var1;
                var1 = var16 * var16;
                var18 = var10 + var1;
                var1 = var15;
                var10 = var14;
                var11 = var16;
                if (!(var18 > var6)) {
                    _fun86710_ip = 240;
                    continue _fun86710
                }
            case 205:
                var13 = global;
                var17 = var13.Math;
                var13 = var17.sqrt;
                var13 = var13.bind(var17)(var18);
                var13 = var2 / var13;
                var1 = var15 * var13;
                var10 = var14 * var13;
                var11 = var16 * var13;
            case 240:
                var0[var6] = var1;
                var0[var2] = var10;
                var0[var12] = var11;
                var12 = 3;
                var0[var12] = var6;
                var13 = var8 * var11;
                var12 = var7 * var10;
                var13 = var13 - var12;
                var12 = 4;
                var0[var12] = var13;
                var12 = var7 * var1;
                var11 = var9 * var11;
                var12 = var12 - var11;
                var11 = 5;
                var0[var11] = var12;
                var10 = var9 * var10;
                var1 = var8 * var1;
                var10 = var10 - var1;
                var1 = 6;
                var0[var1] = var10;
                var1 = 7;
                var0[var1] = var6;
                var1 = 8;
                var0[var1] = var9;
                var1 = 9;
                var0[var1] = var8;
                var1 = 10;
                var0[var1] = var7;
                var1 = 11;
                var0[var1] = var6;
                var1 = 12;
                var0[var1] = var5;
                var1 = 13;
                var0[var1] = var4;
                var1 = 14;
                var0[var1] = var3;
                var1 = 15;
                var0[var1] = var2;
                return var0;
        }
    };
    var2.targetTo = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: translate, environment: var7
        _fun86711: for (var _fun86711_ip = 0;;) switch (_fun86711_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = arg2;
                var7 = 0;
                var3 = var4[var7];
                var6 = 1;
                var5 = var4[var6];
                var2 = 2;
                var4 = var4[var2];
                if (!(var1 !== var0)) {
                    _fun86711_ip = 304;
                    continue _fun86711
                }
            case 36:
                var19 = var1[var7];
                var16 = var1[var6];
                var13 = var1[var2];
                var28 = 3;
                var10 = var1[var28];
                var27 = 4;
                var18 = var1[var27];
                var26 = 5;
                var15 = var1[var26];
                var25 = 6;
                var12 = var1[var25];
                var24 = 7;
                var9 = var1[var24];
                var23 = 8;
                var17 = var1[var23];
                var22 = 9;
                var14 = var1[var22];
                var21 = 10;
                var11 = var1[var21];
                var20 = 11;
                var8 = var1[var20];
                var0[var7] = var19;
                var0[var6] = var16;
                var0[var2] = var13;
                var0[var28] = var10;
                var0[var27] = var18;
                var0[var26] = var15;
                var0[var25] = var12;
                var0[var24] = var9;
                var0[var23] = var17;
                var0[var22] = var14;
                var0[var21] = var11;
                var0[var20] = var8;
                var19 = var19 * var3;
                var18 = var18 * var5;
                var18 = var19 + var18;
                var17 = var17 * var4;
                var19 = var18 + var17;
                var18 = 12;
                var17 = var1[var18];
                var17 = var19 + var17;
                var0[var18] = var17;
                var16 = var16 * var3;
                var15 = var15 * var5;
                var15 = var16 + var15;
                var14 = var14 * var4;
                var16 = var15 + var14;
                var15 = 13;
                var14 = var1[var15];
                var14 = var16 + var14;
                var0[var15] = var14;
                var13 = var13 * var3;
                var12 = var12 * var5;
                var12 = var13 + var12;
                var11 = var11 * var4;
                var13 = var12 + var11;
                var12 = 14;
                var11 = var1[var12];
                var11 = var13 + var11;
                var0[var12] = var11;
                var10 = var10 * var3;
                var9 = var9 * var5;
                var9 = var10 + var9;
                var8 = var8 * var4;
                var10 = var9 + var8;
                var9 = 15;
                var8 = var1[var9];
                var8 = var10 + var8;
                var0[var9] = var8;
                _fun86711_ip = 519;
                continue _fun86711;
            case 304:
                var7 = var1[var7];
                var8 = var7 * var3;
                var7 = 4;
                var7 = var1[var7];
                var7 = var7 * var5;
                var8 = var8 + var7;
                var7 = 8;
                var7 = var1[var7];
                var7 = var7 * var4;
                var9 = var8 + var7;
                var8 = 12;
                var7 = var1[var8];
                var7 = var9 + var7;
                var0[var8] = var7;
                var6 = var1[var6];
                var7 = var6 * var3;
                var6 = 5;
                var6 = var1[var6];
                var6 = var6 * var5;
                var7 = var7 + var6;
                var6 = 9;
                var6 = var1[var6];
                var6 = var6 * var4;
                var8 = var7 + var6;
                var7 = 13;
                var6 = var1[var7];
                var6 = var8 + var6;
                var0[var7] = var6;
                var2 = var1[var2];
                var6 = var2 * var3;
                var2 = 6;
                var2 = var1[var2];
                var2 = var2 * var5;
                var6 = var6 + var2;
                var2 = 10;
                var2 = var1[var2];
                var2 = var2 * var4;
                var7 = var6 + var2;
                var6 = 14;
                var2 = var1[var6];
                var2 = var7 + var2;
                var0[var6] = var2;
                var2 = 3;
                var2 = var1[var2];
                var3 = var2 * var3;
                var2 = 7;
                var2 = var1[var2];
                var2 = var2 * var5;
                var3 = var3 + var2;
                var2 = 11;
                var2 = var1[var2];
                var2 = var2 * var4;
                var3 = var3 + var2;
                var2 = 15;
                var1 = var1[var2];
                var1 = var3 + var1;
                var0[var2] = var1;
            case 519:
                return var0;
        }
    };
    var2.translate = var6;
    var6 = function(arg0, arg1) { // Original name: transpose, environment: var7
        _fun86712: for (var _fun86712_ip = 0;;) switch (_fun86712_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                if (!(var0 !== var7)) {
                    _fun86712_ip = 193;
                    continue _fun86712
                }
            case 13:
                var2 = 0;
                var1 = var7[var2];
                var0[var2] = var1;
                var2 = 4;
                var3 = var7[var2];
                var1 = 1;
                var0[var1] = var3;
                var9 = 8;
                var3 = var7[var9];
                var8 = 2;
                var0[var8] = var3;
                var6 = 12;
                var3 = var7[var6];
                var5 = 3;
                var0[var5] = var3;
                var1 = var7[var1];
                var0[var2] = var1;
                var2 = 5;
                var1 = var7[var2];
                var0[var2] = var1;
                var2 = 9;
                var3 = var7[var2];
                var1 = 6;
                var0[var1] = var3;
                var4 = 13;
                var10 = var7[var4];
                var3 = 7;
                var0[var3] = var10;
                var8 = var7[var8];
                var0[var9] = var8;
                var1 = var7[var1];
                var0[var2] = var1;
                var2 = 10;
                var1 = var7[var2];
                var0[var2] = var1;
                var2 = 14;
                var8 = var7[var2];
                var1 = 11;
                var0[var1] = var8;
                var5 = var7[var5];
                var0[var6] = var5;
                var3 = var7[var3];
                var0[var4] = var3;
                var1 = var7[var1];
                var0[var2] = var1;
                var2 = 15;
                var1 = var7[var2];
                var0[var2] = var1;
                _fun86712_ip = 325;
                continue _fun86712;
            case 193:
                var10 = 1;
                var3 = var7[var10];
                var14 = 2;
                var11 = var7[var14];
                var15 = 3;
                var6 = var7[var15];
                var12 = 6;
                var9 = var7[var12];
                var13 = 7;
                var4 = var7[var13];
                var8 = 11;
                var2 = var7[var8];
                var1 = 4;
                var5 = var7[var1];
                var0[var10] = var5;
                var10 = 8;
                var5 = var7[var10];
                var0[var14] = var5;
                var5 = 12;
                var14 = var7[var5];
                var0[var15] = var14;
                var0[var1] = var3;
                var1 = 9;
                var3 = var7[var1];
                var0[var12] = var3;
                var3 = 13;
                var12 = var7[var3];
                var0[var13] = var12;
                var0[var10] = var11;
                var0[var1] = var9;
                var1 = 14;
                var7 = var7[var1];
                var0[var8] = var7;
                var0[var5] = var6;
                var0[var3] = var4;
                var0[var1] = var2;
            case 325:
                return var0;
        }
    };
    var2.transpose = var6;
    var8 = arg6;
    var6 = 0;
    var8 = var8[var6];
    var6 = arg1;
    var8 = var6.bind(var0)(var8);
    var6 = function(arg0, arg1) { // Original name: _interopRequireWildcard, environment: var7
        _fun86713: for (var _fun86713_ip = 0;;) switch (_fun86713_ip) {
            case 0:
                var3 = arg0;
                var13 = global;
                var0 = var13.WeakMap;
                var12 = undefined;
                var4 = 'function';
                var0 = typeof var0;
                var2 = undefined;
                if (!(var4 === var0)) {
                    _fun86713_ip = 71;
                    continue _fun86713
                }
            case 26:
                var0 = var13.WeakMap;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var22 = var1;
                var0 = new var22[var0](var21);
                var2 = var0 instanceof Object ? var0 : var1;
                var5 = var13.WeakMap;
                var1 = var5.prototype;
                var22 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var1 = new var22[var5](var21);
            case 71:
                if (!var3) {
                    _fun86713_ip = 89;
                    continue _fun86713
                }
            case 74:
                var1 = var3.__esModule;
                var0 = var3;
                if (var1) {
                    _fun86713_ip = 342;
                    continue _fun86713
                }
            case 89:
                var1 = null;
                var11 = Object.create(var1);
                var11.default = var3;
                var0 = var11;
                if (!(var1 !== var3)) {
                    _fun86713_ip = 342;
                    continue _fun86713
                }
            case 108:
                var1 = _closure1_slot1;
                var5 = var1.bind(var12)(var3);
                var1 = 'object';
                if (!(var1 != var5)) {
                    _fun86713_ip = 141;
                    continue _fun86713
                }
            case 128:
                var1 = typeof var3;
                var0 = var11;
                if (!(var4 === var1)) {
                    _fun86713_ip = 342;
                    continue _fun86713
                }
            case 141:
                if (!var2) {
                    _fun86713_ip = 171;
                    continue _fun86713
                }
            case 144:
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun86713_ip = 332;
                    continue _fun86713
                }
            case 160:
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var11);
            case 171:
                var9 = var3;
                var5 = 'default';
                var4 = var2;
                var1 = undefined;
                var0 = var11;
                for (var6 in var9)
                    case 197: {
                        var0 = var11;
                        case 212: var16 = var6;
                        var14 = var5 !== var16;
                        if (!var14) {
                            _fun86713_ip = 241;
                            continue _fun86713
                        }
                        case 222: var15 = {};
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var14 = var15.bind(var17)(var3, var16);
                        case 241: if (!var14) {
                            _fun86713_ip = 197;
                            continue _fun86713
                        }
                        case 244: var14 = var13.Object;
                        var15 = var14.defineProperty;
                        var14 = var15;
                        if (!var14) {
                            _fun86713_ip = 279;
                            continue _fun86713
                        }
                        case 261: var18 = var13.Object;
                        var17 = var18.getOwnPropertyDescriptor;
                        var14 = var17.bind(var18)(var3, var16);
                        case 279: if (!var14) {
                            _fun86713_ip = 298;
                            continue _fun86713
                        }
                        case 282: var17 = var14.get;
                        if (var17) {
                            _fun86713_ip = 314;
                            continue _fun86713
                        }
                        case 290: var17 = var14.set;
                        if (var17) {
                            _fun86713_ip = 314;
                            continue _fun86713
                        }
                        case 298: var17 = var3[var16];
                        var11[var16] = var17;
                        var4 = var15;
                        var1 = var14;
                        _fun86713_ip = 197;
                        continue _fun86713;
                        case 314: var16 = var15.bind(var12)(var11, var16, var14);
                        var4 = var15;
                        var1 = var14;
                        _fun86713_ip = 197;
                        continue _fun86713;
                        case 332: var1 = var2.get;
                        var0 = var1.bind(var2)(var3);
                    }
            case 342:
                return var0;
        }
    };
    var6 = var6.bind(var0)(var8);
    var _closure1_slot0 = var6;
    var2.perspective = var5;
    var2.ortho = var4;
    var2.mul = var3;
    var2.sub = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11163]);