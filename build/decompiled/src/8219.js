// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun66633: for (var _fun66633_ip = 0;;) switch (_fun66633_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot13;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun66633_ip = 51;
                    continue _fun66633
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun66633_ip = 92;
                continue _fun66633;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun66633_ip = 71;
                    continue _fun66633
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun66634: for (var _fun66634_ip = 0;;) switch (_fun66634_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun66634_ip = 76;
                continue _fun66634;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.value = var6;
    var6 = '__esModule';
    var6 = var8.bind(var9)(var2, var6, var7);
    var2.SHA256 = var0;
    var2.sha256 = var0;
    var2.sha224 = var0;
    var8 = var3.Uint32Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var12 = [1116352408, 1899447441, 3049323471.0, 3921009573.0, 961987163, 1508970993, 2453635748.0, 2870763221.0, 3624381080.0, 310598401, 607225278, 1426881987, 1925078388, 2162078206.0, 2614888103.0, 3248222580.0, 3835390401.0, 4022224774.0, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882.0, 2821834349.0, 2952996808.0, 3210313671.0, 3336571891.0, 3584528711.0, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350.0, 2456956037.0, 2730485921.0, 2820302411.0, 3259730800.0, 3345764771.0, 3516065817.0, 3600352804.0, 4094571909.0, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452.0, 2361852424.0, 2428436474.0, 2756734187.0, 3204031479.0, 3329325298.0];
    var13 = var7;
    var6 = new var13[var8](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var8 = var3.Uint32Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var12 = [1779033703, 3144134277.0, 1013904242, 2773480762.0, 1359893119, 2600822924.0, 528734635, 1541459225];
    var13 = var7;
    var6 = new var13[var8](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var6;
    var7 = var3.Uint32Array;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = 64;
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HashMD;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: SHA256, environment: var5
            var5 = this;
            var0 = _closure1_slot2;
            var4 = _closure2_slot0;
            var3 = undefined;
            var0 = var0.bind(var3)(var5, var4);
            var2 = _closure1_slot12;
            var0 = [64, 32, 8];
            var6 = false;
            var0[3] = var6;
            var0 = var2.bind(var3)(var5, var4, var0);
            var2 = _closure1_slot8;
            var1 = 0;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.A = var1;
            var1 = 1;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.B = var1;
            var1 = 2;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.C = var1;
            var1 = 3;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.D = var1;
            var1 = 4;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.E = var1;
            var1 = 5;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.F = var1;
            var1 = 6;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.G = var1;
            var1 = 7;
            var1 = var2[var1];
            var1 = var1 | 0;
            var0.H = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'get';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var1 = this;
            var2 = var1.A;
            var0 = new Array(8);
            var0[0] = var2;
            var2 = var1.B;
            var0[1] = var2;
            var2 = var1.C;
            var0[2] = var2;
            var2 = var1.D;
            var0[3] = var2;
            var2 = var1.E;
            var0[4] = var2;
            var2 = var1.F;
            var0[5] = var2;
            var2 = var1.G;
            var0[6] = var2;
            var1 = var1.H;
            var0[7] = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'set';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // Original name: set, environment: var5
            var1 = this;
            var0 = arg0;
            var0 = var0 | 0;
            var1.A = var0;
            var0 = arg1;
            var0 = var0 | 0;
            var1.B = var0;
            var0 = arg2;
            var0 = var0 | 0;
            var1.C = var0;
            var0 = arg3;
            var0 = var0 | 0;
            var1.D = var0;
            var0 = arg4;
            var0 = var0 | 0;
            var1.E = var0;
            var0 = arg5;
            var0 = var0 | 0;
            var1.F = var0;
            var0 = arg6;
            var0 = var0 | 0;
            var1.G = var0;
            var0 = arg7;
            var0 = var0 | 0;
            var1.H = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'process';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: process, environment: var5
            _fun66641: for (var _fun66641_ip = 0;;) switch (_fun66641_ip) {
                case 0:
                    var15 = arg0;
                    var14 = arg1;
                    var10 = this;
                    var13 = false;
                    var12 = 4;
                    var9 = 16;
                    var8 = 15;
                    var25 = 2;
                    var24 = 5;
                    var0 = undefined;
                    var7 = 7;
                    var6 = 18;
                    var5 = 3;
                    var4 = 17;
                    var3 = 19;
                    var2 = 10;
                    var23 = 64;
                    var11 = 0;
                case 54:
                    var16 = _closure1_slot9;
                    var1 = var15.getUint32;
                    var1 = var1.bind(var15)(var14, var13);
                    var16[var11] = var1;
                    var11 = var11 + 1;
                    var14 = var14 + var12;
                    var1 = var9;
                    if (var11 < var1) {
                        _fun66641_ip = 54;
                        continue _fun66641
                    }
                case 88:
                    var12 = _closure1_slot9;
                    var11 = var1 - var8;
                    var14 = var12[var11];
                    var11 = var1 - var25;
                    var11 = var12[var11];
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var15 = var13[var24];
                    var15 = var16.bind(var0)(var15);
                    var15 = var15.rotr;
                    var17 = var15.bind(var0)(var14, var7);
                    var15 = var13[var24];
                    var15 = var16.bind(var0)(var15);
                    var15 = var15.rotr;
                    var15 = var15.bind(var0)(var14, var6);
                    var15 = var17 ^ var15;
                    var14 = var14 >>> var5;
                    var14 = var15 ^ var14;
                    var15 = var13[var24];
                    var15 = var16.bind(var0)(var15);
                    var15 = var15.rotr;
                    var15 = var15.bind(var0)(var11, var4);
                    var13 = var13[var24];
                    var13 = var16.bind(var0)(var13);
                    var13 = var13.rotr;
                    var13 = var13.bind(var0)(var11, var3);
                    var13 = var15 ^ var13;
                    var11 = var11 >>> var2;
                    var13 = var13 ^ var11;
                    var11 = var1 - var7;
                    var11 = var12[var11];
                    var11 = var13 + var11;
                    var13 = var1 - var9;
                    var13 = var12[var13];
                    var11 = var11 + var14;
                    var11 = var11 + var13;
                    var11 = var11 | 0;
                    var12[var1] = var11;
                    var1 = var1 + 1;
                    if (var1 < var23) {
                        _fun66641_ip = 88;
                        continue _fun66641
                    }
                case 269:
                    var22 = var10.A;
                    var21 = var10.B;
                    var20 = var10.C;
                    var19 = var10.D;
                    var18 = var10.E;
                    var17 = var10.F;
                    var16 = var10.G;
                    var15 = var10.H;
                    var14 = 6;
                    var13 = 11;
                    var12 = 25;
                    var11 = 13;
                    var1 = 22;
                    var27 = 0;
                case 334:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var3 = var2[var24];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.rotr;
                    var4 = var3.bind(var0)(var18, var14);
                    var3 = var2[var24];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.rotr;
                    var3 = var3.bind(var0)(var18, var13);
                    var4 = var4 ^ var3;
                    var3 = var2[var24];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.rotr;
                    var3 = var3.bind(var0)(var18, var12);
                    var3 = var4 ^ var3;
                    var4 = var15 + var3;
                    var3 = var2[var14];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.Chi;
                    var3 = var3.bind(var0)(var18, var17, var16);
                    var4 = var4 + var3;
                    var3 = _closure1_slot7;
                    var3 = var3[var27];
                    var4 = var4 + var3;
                    var3 = _closure1_slot9;
                    var3 = var3[var27];
                    var3 = var4 + var3;
                    var3 = var3 | 0;
                    var4 = var2[var24];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.rotr;
                    var6 = var4.bind(var0)(var22, var25);
                    var4 = var2[var24];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.rotr;
                    var4 = var4.bind(var0)(var22, var11);
                    var6 = var6 ^ var4;
                    var4 = var2[var24];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.rotr;
                    var4 = var4.bind(var0)(var22, var1);
                    var4 = var6 ^ var4;
                    var2 = var2[var14];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.Maj;
                    var2 = var2.bind(var0)(var22, var21, var20);
                    var2 = var4 + var2;
                    var2 = var2 | 0;
                    var4 = var19 + var3;
                    var5 = var4 | 0;
                    var2 = var3 + var2;
                    var9 = var2 | 0;
                    var27 = var27 + 1;
                    var8 = var22;
                    var7 = var21;
                    var6 = var20;
                    var4 = var18;
                    var3 = var17;
                    var2 = var16;
                    var22 = var9;
                    var21 = var8;
                    var20 = var7;
                    var19 = var6;
                    var18 = var5;
                    var17 = var4;
                    var16 = var3;
                    var15 = var2;
                    if (var27 < var23) {
                        _fun66641_ip = 334;
                        continue _fun66641
                    }
                case 636:
                    var1 = var10.A;
                    var1 = var9 + var1;
                    var35 = var1 | 0;
                    var1 = var10.B;
                    var1 = var8 + var1;
                    var34 = var1 | 0;
                    var1 = var10.C;
                    var1 = var7 + var1;
                    var33 = var1 | 0;
                    var1 = var10.D;
                    var1 = var6 + var1;
                    var32 = var1 | 0;
                    var1 = var10.E;
                    var1 = var5 + var1;
                    var31 = var1 | 0;
                    var1 = var10.F;
                    var1 = var4 + var1;
                    var30 = var1 | 0;
                    var1 = var10.G;
                    var1 = var3 + var1;
                    var29 = var1 | 0;
                    var1 = var10.H;
                    var1 = var2 + var1;
                    var28 = var1 | 0;
                    var1 = var10.set;
                    var36 = var10;
                    var1 = var36[var1](var35, var34, var33, var32, var31, var30, var29, var28, var27);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'roundClean';
        var4.key = var6;
        var6 = function() { // Original name: roundClean, environment: var5
            var2 = _closure1_slot9;
            var1 = var2.fill;
            var0 = 0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'destroy';
        var4.key = var6;
        var5 = function() { // Original name: destroy, environment: var5
            var0 = this;
            var1 = var0.set;
            var2 = 0;
            var11 = var0;
            var10 = 0;
            var9 = 0;
            var8 = 0;
            var7 = 0;
            var6 = 0;
            var5 = 0;
            var4 = 0;
            var3 = 0;
            var1 = var11[var1](var10, var9, var8, var7, var6, var5, var4, var3, var2);
            var1 = var0.buffer;
            var0 = var1.fill;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var2.SHA256 = var6;
    var3 = function(arg0) { // Environment: var1
        var2 = function() { // Original name: SHA224, environment: var0
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var4 = var4.bind(var1)(var3, var2);
            var0 = _closure1_slot12;
            var0 = var0.bind(var1)(var3, var2);
            var1 = -1056596264;
            var0.A = var1;
            var1 = 914150663;
            var0.B = var1;
            var1 = 812702999;
            var0.C = var1;
            var1 = -150054599;
            var0.D = var1;
            var1 = -4191439;
            var0.E = var1;
            var1 = 1750603025;
            var0.F = var1;
            var1 = 1694076839;
            var0.G = var1;
            var1 = -1090891868;
            var0.H = var1;
            var1 = 28;
            var0.outputLen = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot11 = var3;
    var3 = 5;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var7 = var6.wrapConstructor;
    var6 = function() { // Environment: var1
        var0 = _closure1_slot10;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6 = var7.bind(var0)(var6);
    var2.sha256 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.wrapConstructor;
    var1 = function() { // Environment: var1
        var0 = _closure1_slot11;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = var3.bind(var0)(var1);
    var2.sha224 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8214, 8220]);