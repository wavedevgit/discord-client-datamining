// ../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun66539: for (var _fun66539_ip = 0;;) switch (_fun66539_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var3 = arg1;
                        var5 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66539_ip = 368;
                            continue _fun66539
                        }
                    case 19:
                        var8 = 0;
                        if (!(var8 === var9)) {
                            _fun66539_ip = 332;
                            continue _fun66539
                        }
                    case 28:
                        var1 = var3.byteLength;
                        if (!(var8 !== var1)) {
                            _fun66539_ip = 296;
                            continue _fun66539
                        }
                    case 41:
                        var1 = var5.length;
                        if (!(var8 !== var1)) {
                            _fun66539_ip = 260;
                            continue _fun66539
                        }
                    case 53:
                        var1 = global;
                        var4 = var1.BigInt;
                        var2 = undefined;
                        var6 = var4.bind(var2)(var5);
                        var2 = 0n;
                        if (!(!(var6 < var2))) {
                            _fun66539_ip = 226;
                            continue _fun66539
                        }
                    case 79:
                        var12 = 2n;
                        var11 = 64n;
                        var2 = exponentiationOperator(var12, var11);
                        if (!(!(var6 >= var2))) {
                            _fun66539_ip = 226;
                            continue _fun66539
                        }
                    case 98:
                        var5 = var1.Uint8Array;
                        var2 = var3.byteLength;
                        var7 = 2;
                        var10 = var7 + var2;
                        var2 = var5.prototype;
                        var4 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var2 = 8;
                        var12 = var10 + var2;
                        var13 = var4;
                        var2 = new var13[var5](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var4 = var2.set;
                        var4 = var4.bind(var2)(var3, var7);
                        var10 = var1.DataView;
                        var12 = var2.buffer;
                        var5 = var10.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var10
                            }
                        });
                        var13 = var5;
                        var4 = new var13[var10](var12, var11);
                        var5 = var4 instanceof Object ? var4 : var5;
                        var4 = var5.setUint16;
                        var4 = var4.bind(var5)(var8, var9);
                        var4 = var5.setBigUint64;
                        var3 = var3.byteLength;
                        var3 = var7 + var3;
                        var3 = var4.bind(var5)(var3, var6);
                        return var2;
                    case 226:
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'user ID out of range';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 260:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'zero-length user ID';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 296:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'zero-length key';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 332:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var12 = 'unsupported fingerprint format version';
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 368:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot1 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot1;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.generateKeyFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 2]);