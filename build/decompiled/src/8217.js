// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun66609: for (var _fun66609_ip = 0;;) switch (_fun66609_ip) {
            case 0:
                var8 = arg0;
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var0 = var3[var1];
                var9 = undefined;
                var0 = var7.bind(var9)(var0);
                var0 = var0.hash;
                var0 = var0.bind(var9)(var8);
                var0 = 2;
                var4 = var3[var0];
                var4 = var7.bind(var9)(var4);
                var6 = var4.checkOpts;
                var5 = {
                    'dkLen': 32,
                    'asyncTick': 10
                };
                var4 = arg3;
                var4 = var6.bind(var9)(var5, var4);
                var6 = var4.c;
                var5 = var4.dkLen;
                var4 = var4.asyncTick;
                var10 = var3[var1];
                var10 = var7.bind(var9)(var10);
                var10 = var10.number;
                var10 = var10.bind(var9)(var6);
                var10 = var3[var1];
                var10 = var7.bind(var9)(var10);
                var10 = var10.number;
                var10 = var10.bind(var9)(var5);
                var3 = var3[var1];
                var3 = var7.bind(var9)(var3);
                var3 = var3.number;
                var3 = var3.bind(var9)(var4);
                if (!(!(var6 < var1))) {
                    _fun66609_ip = 331;
                    continue _fun66609
                }
            case 163:
                var1 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = var10[var0];
                var2 = var1.bind(var9)(var2);
                var3 = var2.toBytes;
                var2 = arg1;
                var2 = var3.bind(var9)(var2);
                var0 = var10[var0];
                var0 = var1.bind(var9)(var0);
                var3 = var0.toBytes;
                var0 = arg2;
                var7 = var3.bind(var9)(var0);
                var0 = global;
                var0 = var0.Uint8Array;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var3;
                var12 = var5;
                var0 = new var13[var0](var12, var11);
                var3 = var0 instanceof Object ? var0 : var3;
                var0 = 3;
                var0 = var10[var0];
                var0 = var1.bind(var9)(var0);
                var1 = var0.hmac;
                var0 = var1.create;
                var2 = var0.bind(var1)(var8, var2);
                var0 = var2._cloneInto;
                var1 = var0.bind(var2)();
                var0 = var1.update;
                var1 = var0.bind(var1)(var7);
                var0 = {};
                var0.c = var6;
                var0.dkLen = var5;
                var0.asyncTick = var4;
                var0.DK = var3;
                var0.PRF = var2;
                var0.PRFSalt = var1;
                return var0;
            case 331:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'PBKDF2: iterations (c) should be >= 1';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun66610: for (var _fun66610_ip = 0;;) switch (_fun66610_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = arg3;
                var2 = arg4;
                var0 = var4.destroy;
                var0 = var0.bind(var4)();
                var0 = var3.destroy;
                var0 = var0.bind(var3)();
                if (!var1) {
                    _fun66610_ip = 45;
                    continue _fun66610
                }
            case 35:
                var0 = var1.destroy;
                var0 = var0.bind(var1)();
            case 45:
                var1 = var2.fill;
                var0 = 0;
                var0 = var1.bind(var2)(var0);
                var0 = arg2;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun66613: for (var _fun66613_ip = 0;;) switch (_fun66613_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66613_ip = 610;
                            continue _fun66613
                        }
                    case 12:
                        var7 = undefined;
                        var _closure4_slot0 = var7;
                        var _closure4_slot1 = var7;
                        var _closure4_slot2 = var7;
                        var _closure4_slot3 = var7;
                        var _closure4_slot4 = var7;
                        var _closure4_slot5 = var7;
                        var _closure4_slot6 = var7;
                        var _closure4_slot7 = var7;
                        var _closure4_slot8 = var7;
                        var _closure4_slot9 = var7;
                        var _closure4_slot10 = var7;
                        var8 = _closure1_slot3;
                        var30 = arg0;
                        var29 = arg1;
                        var28 = arg2;
                        var27 = arg3;
                        var31 = undefined;
                        var4 = var31[var8](var30, var29, var28, var27, var26);
                        var1 = var4.c;
                        _closure4_slot1 = var1;
                        var16 = var4.dkLen;
                        var1 = var4.asyncTick;
                        _closure4_slot2 = var1;
                        var1 = var4.DK;
                        _closure4_slot3 = var1;
                        var6 = var4.PRF;
                        _closure4_slot4 = var6;
                        var5 = var4.PRFSalt;
                        _closure4_slot5 = var5;
                        var15 = global;
                        var9 = var15.Uint8Array;
                        var4 = var9.prototype;
                        var8 = Object.create(var4, {
                            constructor: {
                                value: var9
                            }
                        });
                        var30 = 4;
                        var31 = var8;
                        var4 = new var31[var9](var30, var29);
                        var8 = var4 instanceof Object ? var4 : var8;
                        _closure4_slot6 = var8;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 2;
                        var4 = var10[var4];
                        var4 = var9.bind(var7)(var4);
                        var4 = var4.createView;
                        var4 = var4.bind(var7)(var8);
                        _closure4_slot7 = var4;
                        var9 = var15.Uint8Array;
                        var30 = var6.outputLen;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var31 = var8;
                        var4 = new var31[var9](var30, var29);
                        var4 = var4 instanceof Object ? var4 : var8;
                        _closure4_slot8 = var4;
                        var14 = function*() { // Original name: _loop, environment: var2
                            var0 = function*() { // Original name: ?anon_0__loop, environment: var0
                                _fun66615: for (var _fun66615_ip = 0;;) switch (_fun66615_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun66615_ip = 242;
                                            continue _fun66615
                                        }
                                    case 12:
                                        var2 = undefined;
                                        var _closure6_slot0 = var2;
                                        var7 = _closure4_slot3;
                                        var6 = var7.subarray;
                                        var5 = _closure4_slot10;
                                        var4 = _closure4_slot4;
                                        var4 = var4.outputLen;
                                        var4 = var5 + var4;
                                        var6 = var6.bind(var7)(var5, var4);
                                        _closure6_slot0 = var6;
                                        var8 = _closure4_slot7;
                                        var7 = var8.setInt32;
                                        var5 = _closure4_slot9;
                                        var9 = 0;
                                        var4 = false;
                                        var4 = var7.bind(var8)(var9, var5, var4);
                                        var7 = _closure4_slot5;
                                        var5 = var7._cloneInto;
                                        var4 = _closure4_slot0;
                                        var7 = var5.bind(var7)(var4);
                                        _closure4_slot0 = var7;
                                        var5 = var7.update;
                                        var4 = _closure4_slot6;
                                        var7 = var5.bind(var7)(var4);
                                        var5 = var7.digestInto;
                                        var4 = _closure4_slot8;
                                        var4 = var5.bind(var7)(var4);
                                        var5 = var6.set;
                                        var8 = _closure4_slot8;
                                        var7 = var8.subarray;
                                        var4 = var6.length;
                                        var4 = var7.bind(var8)(var9, var4);
                                        var4 = var5.bind(var6)(var4);
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 2;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var2)(var4);
                                        var5 = var4.asyncLoop;
                                        var6 = _closure4_slot1;
                                        var4 = 1;
                                        var4 = var6 - var4;
                                        var3 = _closure4_slot2;
                                        var1 = function() { // Environment: var1
                                            _fun66616: for (var _fun66616_ip = 0;;) switch (_fun66616_ip) {
                                                case 0:
                                                    var2 = _closure4_slot4;
                                                    var1 = var2._cloneInto;
                                                    var0 = _closure4_slot0;
                                                    var2 = var1.bind(var2)(var0);
                                                    var1 = var2.update;
                                                    var0 = _closure4_slot8;
                                                    var2 = var1.bind(var2)(var0);
                                                    var1 = var2.digestInto;
                                                    var0 = _closure4_slot8;
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = _closure6_slot0;
                                                    var0 = var0.length;
                                                    var1 = 0;
                                                    var0 = var1 < var0;
                                                    if (!var0) {
                                                        _fun66616_ip = 113;
                                                        continue _fun66616
                                                    }
                                                case 73:
                                                    var4 = _closure6_slot0;
                                                    var5 = var4[var1];
                                                    var0 = _closure4_slot8;
                                                    var0 = var0[var1];
                                                    var0 = var5 ^ var0;
                                                    var4[var1] = var0;
                                                    var1 = var1 + 1;
                                                    var0 = _closure6_slot0;
                                                    var0 = var0.length;
                                                    if (var1 < var0) {
                                                        _fun66616_ip = 73;
                                                        continue _fun66616
                                                    }
                                                case 113:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var5.bind(var2)(var4, var3, var1);
                                        SaveGenerator(address = 230);
                                    case 228:
                                        return var1;
                                    case 230:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun66615_ip = 239;
                                            continue _fun66615
                                        }
                                    case 236:
                                        return var2;
                                    case 239:
                                        return var1;
                                    case 242:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var13 = 1;
                        _closure4_slot9 = var13;
                        var12 = 0;
                        _closure4_slot10 = var12;
                        var17 = var12 < var16;
                        var11 = 'iterator is not an object';
                        var10 = 'iterator.throw() did not return an object';
                        var9 = 'throw';
                        var8 = 'iterator.next() did not return an object';
                        if (!var17) {
                            _fun66613_ip = 581;
                            continue _fun66613
                        }
                    case 296:
                        var18 = var14.bind(var7)();
                        var17 = var15.Symbol;
                        var17 = var17.iterator;
                        var17 = var18[var17];
                        var19 = var17.bind(var18)();
                        var30 = var19;
                        var29 = var11;
                        var17 = ensureObject(var30, var29);
                        var24 = var19.next;
                        var23 = undefined;
                    case 337:
                        var18 = var23;
                        var18 = var24.bind(var19)(var18);
                        var30 = var18;
                        var29 = var8;
                        var20 = ensureObject(var30, var29);
                        var17 = var18;
                        var20 = var18.done;
                        if (var20) {
                            _fun66613_ip = 548;
                            continue _fun66613
                        }
                    case 369: // try_start_0
                        var20 = generatorSetDelegated();
                        SaveGenerator(address = 424);
                    case 375:
                        return var18;
                    case 377: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 20);
                        var30 = var19;
                        var29 = var9;
                        var18 = getMethod(var30, var29);
                        if (!(var18 !== var7)) {
                            _fun66613_ip = 507;
                            continue _fun66613
                        }
                    case 393:
                        var18 = var18.bind(var19)(var20);
                        var30 = var18;
                        var29 = var10;
                        var20 = ensureObject(var30, var29);
                        var20 = var18.done;
                        if (var20) {
                            _fun66613_ip = 502;
                            continue _fun66613
                        }
                    case 416:
                        var20 = generatorSetDelegated();
                        SaveGenerator(address = 424);
                    case 422:
                        return var18;
                    case 424: // try_start_1
                        ResumeGenerator(result_out_reg = 20, return_bool_out_reg = 22);
                        var23 = var20;
                        var21 = var22;
                        if (!var21) {
                            _fun66613_ip = 337;
                            continue _fun66613
                        }
                    case 436:
                        var23 = var20;
                    case 439: // try_end1
                        var29 = 'return';
                        var30 = var19;
                        var25 = getMethod(var30, var29);
                        if (!(var25 !== var7)) {
                            _fun66613_ip = 499;
                            continue _fun66613
                        }
                    case 454:
                        var21 = var23;
                        var21 = var25.bind(var19)(var21);
                        var29 = 'iterator.return() did not return an object';
                        var30 = var21;
                        var25 = ensureObject(var30, var29);
                        var25 = var21.done;
                        if (var25) {
                            _fun66613_ip = 491;
                            continue _fun66613
                        }
                    case 483:
                        var25 = generatorSetDelegated();
                        SaveGenerator(address = 424);
                    case 489:
                        return var21;
                    case 491:
                        var21 = var21.value;
                        return var21;
                    case 499:
                        return var20;
                    case 502:
                        var17 = var18;
                        _fun66613_ip = 548;
                        continue _fun66613;
                    case 507:
                        var29 = 'return';
                        var30 = var19;
                        var18 = getMethod(var30, var29);
                        if (!(var18 !== var7)) {
                            _fun66613_ip = 536;
                            continue _fun66613
                        }
                    case 522:
                        var30 = var18.bind(var19)();
                        var29 = 'iterator.return() did not return an object';
                        var18 = ensureObject(var30, var29);
                    case 536:
                        var30 = 'yield* delegate must have a .throw() method';
                        var18 = throwTypeError(var30);
                        throw var7;
                    case 548:
                        var17 = var17.value;
                        var13 = var13 + 1;
                        _closure4_slot9 = var13;
                        var17 = var6.outputLen;
                        var12 = var12 + var17;
                        _closure4_slot10 = var12;
                        if (var12 < var16) {
                            _fun66613_ip = 296;
                            continue _fun66613
                        }
                    case 581:
                        var3 = _closure1_slot4;
                        var27 = _closure4_slot0;
                        var31 = undefined;
                        var30 = var6;
                        var29 = var5;
                        var28 = var1;
                        var26 = var4;
                        var2 = var31[var3](var30, var29, var28, var27, var26, var25);
                        return var1;
                    case 610:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun66617: for (var _fun66617_ip = 0;;) switch (_fun66617_ip) {
            case 0:
                var5 = _closure1_slot3;
                var6 = undefined;
                var31 = arg0;
                var30 = arg1;
                var29 = arg2;
                var28 = arg3;
                var32 = undefined;
                var2 = var32[var5](var31, var30, var29, var28, var27);
                var17 = var2.c;
                var16 = var2.dkLen;
                var0 = var2.DK;
                var5 = var2.PRF;
                var4 = var2.PRFSalt;
                var2 = global;
                var8 = var2.Uint8Array;
                var3 = var8.prototype;
                var7 = Object.create(var3, {
                    constructor: {
                        value: var8
                    }
                });
                var31 = 4;
                var32 = var7;
                var3 = new var32[var8](var31, var30);
                var15 = var3 instanceof Object ? var3 : var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.createView;
                var14 = var3.bind(var6)(var15);
                var7 = var2.Uint8Array;
                var31 = var5.outputLen;
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var32 = var3;
                var2 = new var32[var7](var31, var30);
                var3 = var2 instanceof Object ? var2 : var3;
                var13 = 0;
                var18 = var13 < var16;
                var12 = 1;
                var11 = false;
                var10 = undefined;
                var9 = var12;
                var8 = 0;
                var7 = undefined;
                var2 = undefined;
                if (!var18) {
                    _fun66617_ip = 405;
                    continue _fun66617
                }
            case 178:
                var19 = var0.subarray;
                var18 = var5.outputLen;
                var18 = var8 + var18;
                var22 = var19.bind(var0)(var8, var18);
                var18 = var14.setInt32;
                var18 = var18.bind(var14)(var13, var9, var11);
                var18 = var4._cloneInto;
                var18 = var18.bind(var4)(var10);
                var19 = var18.update;
                var20 = var19.bind(var18)(var15);
                var19 = var20.digestInto;
                var19 = var19.bind(var20)(var3);
                var20 = var22.set;
                var21 = var3.subarray;
                var19 = var22.length;
                var19 = var21.bind(var3)(var13, var19);
                var19 = var20.bind(var22)(var19);
                var23 = var12 < var17;
                var19 = var9;
                var20 = var8;
                var21 = var12;
                if (!var23) {
                    _fun66617_ip = 379;
                    continue _fun66617
                }
            case 289:
                var23 = var5._cloneInto;
                var24 = var23.bind(var5)(var18);
                var23 = var24.update;
                var24 = var23.bind(var24)(var3);
                var23 = var24.digestInto;
                var23 = var23.bind(var24)(var3);
                var23 = var22.length;
                var24 = var13 < var23;
                var25 = 0;
                var23 = 0;
                if (!var24) {
                    _fun66617_ip = 369;
                    continue _fun66617
                }
            case 338:
                var26 = var22[var25];
                var24 = var3[var25];
                var24 = var26 ^ var24;
                var22[var25] = var24;
                var25 = var25 + 1;
                var24 = var22.length;
                var23 = var25;
                if (var23 < var24) {
                    _fun66617_ip = 338;
                    continue _fun66617
                }
            case 369:
                var21 = var21 + 1;
                var7 = var23;
                if (var21 < var17) {
                    _fun66617_ip = 289;
                    continue _fun66617
                }
            case 379:
                var9 = var19 + 1;
                var19 = var5.outputLen;
                var8 = var20 + var19;
                var10 = var18;
                var2 = var10;
                if (var8 < var16) {
                    _fun66617_ip = 178;
                    continue _fun66617
                }
            case 405:
                var1 = _closure1_slot4;
                var32 = undefined;
                var31 = var5;
                var30 = var4;
                var29 = var0;
                var28 = var2;
                var27 = var3;
                var1 = var32[var1](var31, var30, var29, var28, var27, var26);
                return var0;
        }
    };
    var2.pbkdf2 = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.pbkdf2Async = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8215, 8214, 8218]);