// ../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun67228: for (var _fun67228_ip = 0;;) switch (_fun67228_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = var1.length;
                var4 = 0;
                if (!(var4 < var0)) {
                    _fun67228_ip = 67;
                    continue _fun67228
                }
            case 17:
                var0 = var2.length;
                var0 = var4 < var0;
                var4 = 0;
                if (!var0) {
                    _fun67228_ip = 67;
                    continue _fun67228
                }
            case 31:
                var5 = var1[var4];
                var3 = var2[var4];
                var0 = var4;
                if (!(var5 == var3)) {
                    _fun67228_ip = 83;
                    continue _fun67228
                }
            case 46:
                var4 = var0 + 1;
                var3 = var1.length;
                if (!(var4 < var3)) {
                    _fun67228_ip = 67;
                    continue _fun67228
                }
            case 58:
                var3 = var2.length;
                if (var4 < var3) {
                    _fun67228_ip = 31;
                    continue _fun67228
                }
            case 67:
                var4 = var1.length;
                var3 = var2.length;
                var3 = var4 - var3;
                return var3;
            case 83:
                var1 = var1[var0];
                var0 = var2[var0];
                var0 = var1 - var0;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun67231: for (var _fun67231_ip = 0;;) switch (_fun67231_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67231_ip = 325;
                            continue _fun67231
                        }
                    case 13:
                        var3 = global;
                        var7 = var3.Promise;
                        var4 = var7.all;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 1;
                        var1 = var8[var5];
                        var6 = undefined;
                        var13 = var9.bind(var6)(var1);
                        var11 = var13.generateKeyFingerprint;
                        var10 = arg1;
                        var1 = arg2;
                        var10 = var11.bind(var13)(var12, var10, var1);
                        var1 = new Array(2);
                        var1[0] = var10;
                        var8 = var8[var5];
                        var11 = var9.bind(var6)(var8);
                        var10 = var11.generateKeyFingerprint;
                        var9 = arg3;
                        var8 = arg4;
                        var8 = var10.bind(var11)(var12, var9, var8);
                        var1[1] = var8;
                        var1 = var4.bind(var7)(var1);
                        SaveGenerator(address = 120);
                    case 118:
                        return var1;
                    case 120:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67231_ip = 322;
                            continue _fun67231
                        }
                    case 129:
                        var7 = var1.sort;
                        var4 = _closure1_slot5;
                        var4 = var7.bind(var1)(var4);
                        var9 = var3.Uint8Array;
                        var4 = 0;
                        var7 = var1[var4];
                        var8 = var7.byteLength;
                        var7 = var1[var5];
                        var7 = var7.byteLength;
                        var16 = var8 + var7;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var17 = var8;
                        var7 = new var17[var9](var16, var15);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var9 = var7.set;
                        var8 = var1[var4];
                        var8 = var9.bind(var7)(var8, var4);
                        var8 = var7.set;
                        var5 = var1[var5];
                        var4 = var1[var4];
                        var4 = var4.byteLength;
                        var4 = var8.bind(var7)(var5, var4);
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 2;
                        var4 = var8[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.scryptAsync;
                        var4 = _closure1_slot3;
                        var2 = _closure1_slot4;
                        var2 = var5.bind(var6)(var7, var4, var2);
                        SaveGenerator(address = 281);
                    case 279:
                        return var2;
                    case 281:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67231_ip = 319;
                            continue _fun67231
                        }
                    case 287:
                        var3 = var3.Uint8Array;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var17 = var4;
                        var16 = var2;
                        var3 = new var17[var3](var16, var15);
                        var3 = var3 instanceof Object ? var3 : var4;
                        return var3;
                    case 319:
                        return var2;
                    case 322:
                        return var1;
                    case 325:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var21 = var3.Uint8Array;
    var20 = var21.of;
    var37 = 36;
    var36 = 202;
    var35 = 177;
    var16 = 122;
    var32 = 248;
    var31 = 236;
    var30 = 43;
    var29 = 130;
    var28 = 180;
    var27 = 18;
    var26 = 185;
    var25 = 45;
    var24 = 171;
    var23 = 25;
    var22 = 46;
    var38 = var21;
    var34 = var16;
    var33 = var16;
    var3 = var38[var20](var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21);
    var _closure1_slot3 = var3;
    var3 = {
        'N': 16384,
        'r': 8,
        'p': 2,
        'dkLen': 64
    };
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.generatePairwiseFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8322, 8324, 2]);