// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun31428: for (var _fun31428_ip = 0;;) switch (_fun31428_ip) {
        case 0:
            var1 = module;
            var _closure1_slot0 = var1;
            var1 = global;
            var2 = var1;
            if (var2) {
                _fun31428_ip = 46;
                continue _fun31428
            }
        case 17:
            var3 = var1.self;
            var4 = 'object';
            var3 = typeof var3;
            var3 = var4 === var3;
            if (!var3) {
                _fun31428_ip = 43;
                continue _fun31428
            }
        case 37:
            var3 = var1.self;
        case 43:
            var2 = var3;
        case 46:
            if (var2) {
                _fun31428_ip = 72;
                continue _fun31428
            }
        case 49:
            var4 = var1.Function;
            var3 = undefined;
            var1 = 'return this';
            var1 = var4.bind(var3)(var1);
            var2 = var1.bind(var3)();
        case 72:
            var1 = function(arg0) { // Environment: var0
                _fun31429: for (var _fun31429_ip = 0;;) switch (_fun31429_ip) {
                    case 0:
                        var17 = arg0;
                        var16 = function(arg0, arg1, arg2, arg3) { // Original name: wrap, environment: var5
                            _fun31430: for (var _fun31430_ip = 0;;) switch (_fun31430_ip) {
                                case 0:
                                    var0 = arg1;
                                    var3 = arg3;
                                    if (!var0) {
                                        _fun31430_ip = 28;
                                        continue _fun31430
                                    }
                                case 9:
                                    var2 = var0.prototype;
                                    var1 = _closure2_slot12;
                                    var1 = var2 instanceof var1;
                                    if (var1) {
                                        _fun31430_ip = 35;
                                        continue _fun31430
                                    }
                                case 28:
                                    var0 = _closure2_slot12;
                                case 35:
                                    var1 = global;
                                    var2 = var1.Object;
                                    var1 = var2.create;
                                    var0 = var0.prototype;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = _closure2_slot19;
                                    if (var3) {
                                        _fun31430_ip = 72;
                                        continue _fun31430
                                    }
                                case 68:
                                    var3 = new Array(0);
                                case 72:
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var9 = var2;
                                    var8 = var3;
                                    var1 = new var9[var1](var8, var7);
                                    var5 = var1 instanceof Object ? var1 : var2;
                                    var4 = function(arg0, arg1, arg2) { // Original name: makeInvokeMethod, environment: var1
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arg1;
                                        var _closure4_slot1 = var1;
                                        var1 = arg2;
                                        var _closure4_slot2 = var1;
                                        var1 = _closure2_slot4;
                                        var _closure4_slot3 = var1;
                                        var0 = function(arg0, arg1) { // Original name: invoke, environment: var0
                                            _fun31432: for (var _fun31432_ip = 0;;) switch (_fun31432_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var0 = arg1;
                                                    var4 = _closure4_slot3;
                                                    var2 = _closure2_slot6;
                                                    if (!(var4 !== var2)) {
                                                        _fun31432_ip = 475;
                                                        continue _fun31432
                                                    }
                                                case 27:
                                                    var4 = _closure4_slot3;
                                                    var2 = _closure2_slot7;
                                                    if (!(var4 !== var2)) {
                                                        _fun31432_ip = 453;
                                                        continue _fun31432
                                                    }
                                                case 42:
                                                    var2 = _closure4_slot2;
                                                    var2.method = var3;
                                                    var2.arg = var0;
                                                    var11 = undefined;
                                                    var10 = 'throw';
                                                    var9 = 'normal';
                                                    var8 = 'return';
                                                    var7 = 'next';
                                                    var6 = undefined;
                                                    var5 = undefined;
                                                case 80:
                                                    var2 = _closure4_slot2;
                                                    var13 = var2.delegate;
                                                    if (!var13) {
                                                        _fun31432_ip = 116;
                                                        continue _fun31432
                                                    }
                                                case 93:
                                                    var4 = _closure2_slot16;
                                                    var2 = _closure4_slot2;
                                                    var2 = var4.bind(var11)(var13, var2);
                                                    var6 = var2;
                                                    if (var6) {
                                                        _fun31432_ip = 437;
                                                        continue _fun31432
                                                    }
                                                case 116:
                                                    var4 = _closure4_slot2;
                                                    var4 = var4.method;
                                                    var15 = var6;
                                                    if (!(var7 !== var4)) {
                                                        _fun31432_ip = 240;
                                                        continue _fun31432
                                                    }
                                                case 133:
                                                    var4 = _closure4_slot2;
                                                    var4 = var4.method;
                                                    if (!(var10 !== var4)) {
                                                        _fun31432_ip = 185;
                                                        continue _fun31432
                                                    }
                                                case 147:
                                                    var4 = _closure4_slot2;
                                                    var4 = var4.method;
                                                    if (!(var8 === var4)) {
                                                        _fun31432_ip = 262;
                                                        continue _fun31432
                                                    }
                                                case 161:
                                                    var14 = _closure4_slot2;
                                                    var13 = var14.abrupt;
                                                    var4 = var14.arg;
                                                    var4 = var13.bind(var14)(var8, var4);
                                                    _fun31432_ip = 262;
                                                    continue _fun31432;
                                                case 185:
                                                    var13 = _closure4_slot3;
                                                    var4 = _closure2_slot4;
                                                    if (!(var13 !== var4)) {
                                                        _fun31432_ip = 220;
                                                        continue _fun31432
                                                    }
                                                case 197:
                                                    var14 = _closure4_slot2;
                                                    var13 = var14.dispatchException;
                                                    var4 = var14.arg;
                                                    var4 = var13.bind(var14)(var4);
                                                    _fun31432_ip = 262;
                                                    continue _fun31432;
                                                case 220:
                                                    var4 = _closure2_slot7;
                                                    _closure4_slot3 = var4;
                                                    var4 = _closure4_slot2;
                                                    var4 = var4.arg;
                                                    throw var4;
                                                case 240:
                                                    var13 = _closure4_slot2;
                                                    var4 = var13.arg;
                                                    var13._sent = var4;
                                                    var13.sent = var4;
                                                case 262:
                                                    var4 = _closure2_slot6;
                                                    _closure4_slot3 = var4;
                                                    var16 = _closure2_slot11;
                                                    var14 = _closure4_slot0;
                                                    var13 = _closure4_slot1;
                                                    var4 = _closure4_slot2;
                                                    var13 = var16.bind(var11)(var14, var13, var4);
                                                    var4 = var13.type;
                                                    if (!(var9 !== var4)) {
                                                        _fun31432_ip = 361;
                                                        continue _fun31432
                                                    }
                                                case 302:
                                                    var4 = var13.type;
                                                    var6 = var15;
                                                    var5 = var13;
                                                    if (var10 !== var4) {
                                                        _fun31432_ip = 80;
                                                        continue _fun31432
                                                    }
                                                case 320:
                                                    var4 = _closure2_slot7;
                                                    _closure4_slot3 = var4;
                                                    var14 = _closure4_slot2;
                                                    var14.method = var10;
                                                    var4 = var13.arg;
                                                    var14.arg = var4;
                                                    var6 = var15;
                                                    var5 = var13;
                                                    _fun31432_ip = 80;
                                                    continue _fun31432;
                                                case 361:
                                                    var4 = _closure4_slot2;
                                                    var4 = var4.done;
                                                    if (var4) {
                                                        _fun31432_ip = 379;
                                                        continue _fun31432
                                                    }
                                                case 373:
                                                    var4 = _closure2_slot5;
                                                    _fun31432_ip = 383;
                                                    continue _fun31432;
                                                case 379:
                                                    var4 = _closure2_slot7;
                                                case 383:
                                                    _closure4_slot3 = var4;
                                                    var14 = var13.arg;
                                                    var4 = _closure2_slot8;
                                                    var6 = var15;
                                                    var5 = var13;
                                                    if (var14 === var4) {
                                                        _fun31432_ip = 80;
                                                        continue _fun31432
                                                    }
                                                case 410:
                                                    var4 = {};
                                                    var13 = var13.arg;
                                                    var4.value = var13;
                                                    var13 = _closure4_slot2;
                                                    var13 = var13.done;
                                                    var4.done = var13;
                                                    return var4;
                                                case 437:
                                                    var4 = _closure2_slot8;
                                                    var6 = var2;
                                                    if (var2 === var4) {
                                                        _fun31432_ip = 80;
                                                        continue _fun31432
                                                    }
                                                case 451:
                                                    return var2;
                                                case 453:
                                                    var2 = 'throw';
                                                    if (!(var2 !== var3)) {
                                                        _fun31432_ip = 473;
                                                        continue _fun31432
                                                    }
                                                case 461:
                                                    var2 = _closure2_slot21;
                                                    var1 = undefined;
                                                    var1 = var2.bind(var1)();
                                                    return var1;
                                                case 473:
                                                    throw var0;
                                                case 475:
                                                    var0 = global;
                                                    var2 = var0.Error;
                                                    var0 = var2.prototype;
                                                    var1 = Object.create(var0, {
                                                        constructor: {
                                                            value: var2
                                                        }
                                                    });
                                                    var19 = 'Generator is already running';
                                                    var20 = var1;
                                                    var0 = new var20[var2](var19, var18);
                                                    var0 = var0 instanceof Object ? var0 : var1;
                                                    throw var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var3 = undefined;
                                    var2 = arg0;
                                    var1 = arg2;
                                    var1 = var4.bind(var3)(var2, var1, var5);
                                    var0._invoke = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot10 = var16;
                        var0 = function(arg0, arg1, arg2) { // Original name: tryCatch, environment: var5
                            _fun31433: for (var _fun31433_ip = 0;;) switch (_fun31433_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg1;
                                    var1 = arg2;
                                case 9: // try_start_0
                                    var0 = {};
                                    var4 = 'normal';
                                    var0.type = var4;
                                    var4 = var3;
                                    var3 = var4.call;
                                    var1 = var3.bind(var4)(var2, var1);
                                    var0.arg = var1;
                                case 38: // try_end0
                                    return var0;
                                case 40: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var0 = {};
                                    var2 = 'throw';
                                    var0.type = var2;
                                    var0.arg = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot11 = var0;
                        var7 = function() { // Original name: Generator, environment: var5
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot12 = var7;
                        var14 = function() { // Original name: GeneratorFunction, environment: var5
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot13 = var14;
                        var13 = function() { // Original name: GeneratorFunctionPrototype, environment: var5
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot14 = var13;
                        var11 = function(arg0) { // Original name: defineIteratorMethods, environment: var5
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = ['next', 'throw', 'return'];
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var1 = _closure3_slot0;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = this;
                                    var2 = var3._invoke;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var1[var2] = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var12 = function(arg0) { // Original name: AsyncIterator, environment: var5
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = function(arg0, arg1, arg2, arg3) { // Original name: invoke, environment: var0
                                _fun31441: for (var _fun31441_ip = 0;;) switch (_fun31441_ip) {
                                    case 0:
                                        var5 = arg3;
                                        var0 = arg2;
                                        var _closure4_slot0 = var0;
                                        var _closure4_slot1 = var5;
                                        var7 = _closure2_slot11;
                                        var6 = _closure3_slot0;
                                        var2 = arg0;
                                        var4 = var6[var2];
                                        var3 = undefined;
                                        var2 = arg1;
                                        var2 = var7.bind(var3)(var4, var6, var2);
                                        var6 = var2.type;
                                        var4 = 'throw';
                                        if (!(var4 === var6)) {
                                            _fun31441_ip = 75;
                                            continue _fun31441
                                        }
                                    case 62:
                                        var4 = var2.arg;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
                                    case 75:
                                        var2 = var2.arg;
                                        var _closure4_slot2 = var2;
                                        var2 = var2.value;
                                        if (!var2) {
                                            _fun31441_ip = 126;
                                            continue _fun31441
                                        }
                                    case 93:
                                        var4 = 'object';
                                        var3 = typeof var2;
                                        if (!(var4 === var3)) {
                                            _fun31441_ip = 126;
                                            continue _fun31441
                                        }
                                    case 104:
                                        var4 = _closure2_slot0;
                                        var3 = var4.call;
                                        var0 = '__await';
                                        var0 = var3.bind(var4)(var2, var0);
                                        if (var0) {
                                            _fun31441_ip = 168;
                                            continue _fun31441
                                        }
                                    case 126:
                                        var0 = global;
                                        var3 = var0.Promise;
                                        var0 = var3.resolve;
                                        var5 = var0.bind(var3)(var2);
                                        var4 = var5.then;
                                        var3 = function(arg0) { // Environment: var1
                                            var2 = _closure4_slot2;
                                            var1 = arg0;
                                            var2.value = var1;
                                            var2 = _closure4_slot0;
                                            var1 = _closure4_slot2;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var0 = function(arg0) { // Environment: var1
                                            var5 = _closure3_slot2;
                                            var7 = _closure4_slot0;
                                            var6 = _closure4_slot1;
                                            var10 = undefined;
                                            var9 = 'throw';
                                            var8 = arg0;
                                            var0 = var10[var5](var9, var8, var7, var6, var5);
                                            return var0;
                                        };
                                        var0 = var4.bind(var5)(var3, var0);
                                        _fun31441_ip = 214;
                                        continue _fun31441;
                                    case 168:
                                        var3 = global;
                                        var4 = var3.Promise;
                                        var3 = var4.resolve;
                                        var2 = var2.__await;
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.then;
                                        var2 = function(arg0) { // Environment: var1
                                            var5 = _closure3_slot2;
                                            var7 = _closure4_slot0;
                                            var6 = _closure4_slot1;
                                            var0 = undefined;
                                            var9 = 'next';
                                            var8 = arg0;
                                            var10 = undefined;
                                            var1 = var10[var5](var9, var8, var7, var6, var5);
                                            return var0;
                                        };
                                        var1 = function(arg0) { // Environment: var1
                                            var5 = _closure3_slot2;
                                            var7 = _closure4_slot0;
                                            var6 = _closure4_slot1;
                                            var0 = undefined;
                                            var9 = 'throw';
                                            var8 = arg0;
                                            var10 = undefined;
                                            var1 = var10[var5](var9, var8, var7, var6, var5);
                                            return var0;
                                        };
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 214:
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var1;
                            var1 = function(arg0, arg1) { // Original name: enqueue, environment: var0
                                _fun31446: for (var _fun31446_ip = 0;;) switch (_fun31446_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arg1;
                                        var _closure4_slot1 = var1;
                                        var4 = function() { // Original name: callInvokeWithMethodAndArg, environment: var0
                                            var0 = global;
                                            var2 = var0.Promise;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var3 = function(arg0, arg1) { // Environment: var0
                                                var5 = _closure3_slot2;
                                                var9 = _closure4_slot0;
                                                var8 = _closure4_slot1;
                                                var0 = undefined;
                                                var7 = arg0;
                                                var6 = arg1;
                                                var10 = undefined;
                                                var1 = var10[var5](var9, var8, var7, var6, var5);
                                                return var0;
                                            };
                                            var4 = var1;
                                            var0 = new var4[var2](var3, var2);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        var0 = _closure3_slot1;
                                        if (var0) {
                                            _fun31446_ip = 39;
                                            continue _fun31446
                                        }
                                    case 31:
                                        var0 = undefined;
                                        var0 = var4.bind(var0)();
                                        _fun31446_ip = 54;
                                        continue _fun31446;
                                    case 39:
                                        var3 = _closure3_slot1;
                                        var2 = var3.then;
                                        var0 = var2.bind(var3)(var4, var4);
                                    case 54:
                                        var _closure3_slot1 = var0;
                                        return var0;
                                }
                            };
                            var0 = this;
                            var0._invoke = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot15 = var12;
                        var0 = function(arg0, arg1) { // Original name: maybeInvokeDelegate, environment: var5
                            _fun31449: for (var _fun31449_ip = 0;;) switch (_fun31449_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = arg1;
                                    var1 = var5.iterator;
                                    var0 = var2.method;
                                    var7 = var1[var0];
                                    var4 = undefined;
                                    if (!(var7 !== var4)) {
                                        _fun31449_ip = 259;
                                        continue _fun31449
                                    }
                                case 31:
                                    var6 = _closure2_slot11;
                                    var3 = var5.iterator;
                                    var1 = var2.arg;
                                    var1 = var6.bind(var4)(var7, var3, var1);
                                    var6 = var1.type;
                                    var3 = 'throw';
                                    if (!(var3 !== var6)) {
                                        _fun31449_ip = 227;
                                        continue _fun31449
                                    }
                                case 73:
                                    var8 = var1.arg;
                                    if (var8) {
                                        _fun31449_ip = 142;
                                        continue _fun31449
                                    }
                                case 82:
                                    var2.method = var3;
                                    var6 = global;
                                    var9 = var6.TypeError;
                                    var6 = var9.prototype;
                                    var7 = Object.create(var6, {
                                        constructor: {
                                            value: var9
                                        }
                                    });
                                    var12 = 'iterator result is not an object';
                                    var13 = var7;
                                    var6 = new var13[var9](var12, var11);
                                    var6 = var6 instanceof Object ? var6 : var7;
                                    var2.arg = var6;
                                    var6 = null;
                                    var2.delegate = var6;
                                    var6 = _closure2_slot8;
                                    _fun31449_ip = 225;
                                    continue _fun31449;
                                case 142:
                                    var9 = var8.done;
                                    var7 = var8;
                                    if (!var9) {
                                        _fun31449_ip = 222;
                                        continue _fun31449
                                    }
                                case 153:
                                    var9 = var5.resultName;
                                    var8 = var8.value;
                                    var2[var9] = var8;
                                    var8 = var5.nextLoc;
                                    var2.next = var8;
                                    var9 = var2.method;
                                    var8 = 'return';
                                    if (!(var8 !== var9)) {
                                        _fun31449_ip = 210;
                                        continue _fun31449
                                    }
                                case 194:
                                    var8 = 'next';
                                    var2.method = var8;
                                    var2.arg = var4;
                                case 210:
                                    var8 = null;
                                    var2.delegate = var8;
                                    var7 = _closure2_slot8;
                                case 222:
                                    var6 = var7;
                                case 225:
                                    return var6;
                                case 227:
                                    var2.method = var3;
                                    var1 = var1.arg;
                                    var2.arg = var1;
                                    var1 = null;
                                    var2.delegate = var1;
                                    var0 = _closure2_slot8;
                                    return var0;
                                case 259:
                                    var0 = null;
                                    var2.delegate = var0;
                                    var0 = var2.method;
                                    var1 = 'throw';
                                    if (!(var1 === var0)) {
                                        _fun31449_ip = 381;
                                        continue _fun31449
                                    }
                                case 281:
                                    var0 = var5.iterator;
                                    var0 = var0.return;
                                    if (!var0) {
                                        _fun31449_ip = 335;
                                        continue _fun31449
                                    }
                                case 296:
                                    var0 = 'return';
                                    var2.method = var0;
                                    var2.arg = var4;
                                    var3 = _closure2_slot16;
                                    var3 = var3.bind(var4)(var5, var2);
                                    var3 = var2.method;
                                    if (!(var1 !== var3)) {
                                        _fun31449_ip = 390;
                                        continue _fun31449
                                    }
                                case 335:
                                    var2.method = var1;
                                    var1 = global;
                                    var4 = var1.TypeError;
                                    var1 = var4.prototype;
                                    var3 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var12 = "The iterator does not provide a 'throw' method";
                                    var13 = var3;
                                    var1 = new var13[var4](var12, var11);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    var2.arg = var1;
                                case 381:
                                    var1 = _closure2_slot8;
                                    return var1;
                                case 390:
                                    var0 = _closure2_slot8;
                                    return var0;
                            }
                        };
                        var _closure2_slot16 = var0;
                        var0 = function(arg0) { // Original name: pushTryEntry, environment: var5
                            _fun31450: for (var _fun31450_ip = 0;;) switch (_fun31450_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = {};
                                    var0 = 0;
                                    var0 = var1[var0];
                                    var2.tryLoc = var0;
                                    var0 = 1;
                                    var3 = var0 in var1;
                                    if (!var3) {
                                        _fun31450_ip = 36;
                                        continue _fun31450
                                    }
                                case 26:
                                    var0 = var1[var0];
                                    var2.catchLoc = var0;
                                case 36:
                                    var0 = 2;
                                    var3 = var0 in var1;
                                    if (!var3) {
                                        _fun31450_ip = 69;
                                        continue _fun31450
                                    }
                                case 46:
                                    var0 = var1[var0];
                                    var2.finallyLoc = var0;
                                    var0 = 3;
                                    var0 = var1[var0];
                                    var2.afterLoc = var0;
                                case 69:
                                    var0 = this;
                                    var1 = var0.tryEntries;
                                    var0 = var1.push;
                                    var0 = var0.bind(var1)(var2);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot17 = var0;
                        var0 = function(arg0) { // Original name: resetTryEntry, environment: var5
                            _fun31451: for (var _fun31451_ip = 0;;) switch (_fun31451_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.completion;
                                    if (var0) {
                                        _fun31451_ip = 14;
                                        continue _fun31451
                                    }
                                case 12:
                                    var0 = {};
                                case 14:
                                    var2 = 'normal';
                                    var0.type = var2;
                                    var2 = delete var0.arg;
                                    var1.completion = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot18 = var0;
                        var4 = function(arg0) { // Original name: Context, environment: var5
                            var3 = arg0;
                            var2 = this;
                            var1 = {};
                            var0 = 'root';
                            var1.tryLoc = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            var2.tryEntries = var0;
                            var1 = var3.forEach;
                            var0 = _closure2_slot17;
                            var0 = var1.bind(var3)(var0, var2);
                            var1 = var2.reset;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot19 = var4;
                        var6 = function(arg0) { // Original name: values, environment: var5
                            _fun31453: for (var _fun31453_ip = 0;;) switch (_fun31453_ip) {
                                case 0:
                                    var2 = arg0;
                                    var _closure3_slot0 = var2;
                                    if (!var2) {
                                        _fun31453_ip = 92;
                                        continue _fun31453
                                    }
                                case 12:
                                    var0 = _closure2_slot1;
                                    var1 = var2[var0];
                                    if (var1) {
                                        _fun31453_ip = 109;
                                        continue _fun31453
                                    }
                                case 26:
                                    var0 = var2.next;
                                    var4 = 'function';
                                    var0 = typeof var0;
                                    if (!(var4 !== var0)) {
                                        _fun31453_ip = 107;
                                        continue _fun31453
                                    }
                                case 42:
                                    var0 = global;
                                    var5 = var0.isNaN;
                                    var4 = var2.length;
                                    var0 = undefined;
                                    var0 = var5.bind(var0)(var4);
                                    if (var0) {
                                        _fun31453_ip = 92;
                                        continue _fun31453
                                    }
                                case 65:
                                    var0 = -1;
                                    var _closure3_slot1 = var0;
                                    var0 = function() { // Original name: next, environment: var3
                                        _fun31454: for (var _fun31454_ip = 0;;) switch (_fun31454_ip) {
                                            case 0:
                                                var0 = _closure3_slot1;
                                                var2 = var0 + 1;
                                                _closure3_slot1 = var2;
                                                var0 = _closure3_slot0;
                                                var0 = var0.length;
                                                if (!(var2 < var0)) {
                                                    _fun31454_ip = 80;
                                                    continue _fun31454
                                                }
                                            case 30:
                                                var5 = _closure2_slot0;
                                                var4 = var5.call;
                                                var2 = _closure3_slot0;
                                                var0 = _closure3_slot1;
                                                var0 = var4.bind(var5)(var2, var0);
                                                if (var0) {
                                                    _fun31454_ip = 102;
                                                    continue _fun31454
                                                }
                                            case 56:
                                                var0 = _closure3_slot1;
                                                var2 = var0 + 1;
                                                _closure3_slot1 = var2;
                                                var0 = _closure3_slot0;
                                                var0 = var0.length;
                                                if (var2 < var0) {
                                                    _fun31454_ip = 30;
                                                    continue _fun31454
                                                }
                                            case 80:
                                                var0 = _closure3_slot2;
                                                var2 = undefined;
                                                var0.value = var2;
                                                var2 = true;
                                                var0.done = var2;
                                                return var0;
                                            case 102:
                                                var0 = _closure3_slot2;
                                                var2 = _closure3_slot0;
                                                var1 = _closure3_slot1;
                                                var1 = var2[var1];
                                                var0.value = var1;
                                                var1 = false;
                                                var0.done = var1;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var0;
                                    var0.next = var0;
                                    return var0;
                                case 92:
                                    var0 = {};
                                    var3 = _closure2_slot21;
                                    var0.next = var3;
                                    return var0;
                                case 107:
                                    return var2;
                                case 109:
                                    var0 = var1.call;
                                    var0 = var0.bind(var1)(var2);
                                    return var0;
                            }
                        };
                        var _closure2_slot20 = var6;
                        var0 = function() { // Original name: doneResult, environment: var5
                            var0 = {};
                            var1 = undefined;
                            var0.value = var1;
                            var1 = true;
                            var0.done = var1;
                            return var0;
                        };
                        var _closure2_slot21 = var0;
                        var8 = global;
                        var0 = var8.Object;
                        var19 = var0.prototype;
                        var20 = var19.hasOwnProperty;
                        var _closure2_slot0 = var20;
                        var0 = var8.Symbol;
                        var1 = 'function';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun31429_ip = 161;
                            continue _fun31429
                        }
                    case 157:
                        var0 = {};
                        _fun31429_ip = 167;
                        continue _fun31429;
                    case 161:
                        var0 = var8.Symbol;
                    case 167:
                        var9 = var0.iterator;
                        if (var9) {
                            _fun31429_ip = 180;
                            continue _fun31429
                        }
                    case 176:
                        var9 = '@@iterator';
                    case 180:
                        var _closure2_slot1 = var9;
                        var15 = var0.asyncIterator;
                        if (var15) {
                            _fun31429_ip = 199;
                            continue _fun31429
                        }
                    case 193:
                        var15 = '@@asyncIterator';
                    case 199:
                        var10 = var0.toStringTag;
                        if (var10) {
                            _fun31429_ip = 214;
                            continue _fun31429
                        }
                    case 208:
                        var10 = '@@toStringTag';
                    case 214:
                        var _closure2_slot2 = var10;
                        var1 = _closure1_slot0;
                        var2 = 'object';
                        var1 = typeof var1;
                        var2 = var2 === var1;
                        var1 = var17.regeneratorRuntime;
                        var _closure2_slot3 = var1;
                        if (var1) {
                            _fun31429_ip = 696;
                            continue _fun31429
                        }
                    case 252:
                        if (var2) {
                            _fun31429_ip = 259;
                            continue _fun31429
                        }
                    case 255:
                        var3 = {};
                        _fun31429_ip = 268;
                        continue _fun31429;
                    case 259:
                        var18 = _closure1_slot0;
                        var3 = var18.exports;
                    case 268:
                        var17.regeneratorRuntime = var3;
                        _closure2_slot3 = var3;
                        var3.wrap = var16;
                        var16 = 'suspendedStart';
                        var _closure2_slot4 = var16;
                        var16 = 'suspendedYield';
                        var _closure2_slot5 = var16;
                        var16 = 'executing';
                        var _closure2_slot6 = var16;
                        var16 = 'completed';
                        var _closure2_slot7 = var16;
                        var16 = {};
                        var _closure2_slot8 = var16;
                        var17 = {};
                        var16 = function() { // Environment: var5
                            var0 = this;
                            return var0;
                        };
                        var17[var9] = var16;
                        var16 = var8.Object;
                        var22 = var16.getPrototypeOf;
                        var16 = var22;
                        if (!var16) {
                            _fun31429_ip = 378;
                            continue _fun31429
                        }
                    case 357:
                        var21 = undefined;
                        var18 = new Array(0);
                        var18 = var6.bind(var21)(var18);
                        var18 = var22.bind(var21)(var18);
                        var16 = var22.bind(var21)(var18);
                    case 378:
                        var18 = var16;
                        if (!var16) {
                            _fun31429_ip = 388;
                            continue _fun31429
                        }
                    case 384:
                        var18 = var16 !== var19;
                    case 388:
                        if (!var18) {
                            _fun31429_ip = 402;
                            continue _fun31429
                        }
                    case 391:
                        var19 = var20.call;
                        var18 = var19.bind(var20)(var16, var9);
                    case 402:
                        if (!var18) {
                            _fun31429_ip = 408;
                            continue _fun31429
                        }
                    case 405:
                        var17 = var16;
                    case 408:
                        var16 = var8.Object;
                        var8 = var16.create;
                        var8 = var8.bind(var16)(var17);
                        var7.prototype = var8;
                        var13.prototype = var8;
                        var _closure2_slot9 = var8;
                        var8.constructor = var13;
                        var14.prototype = var13;
                        var13.constructor = var14;
                        var7 = 'GeneratorFunction';
                        var14.displayName = var7;
                        var13[var10] = var7;
                        var7 = function(arg0) { // Environment: var5
                            _fun31457: for (var _fun31457_ip = 0;;) switch (_fun31457_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = 'function';
                                    var1 = typeof var0;
                                    var2 = var2 === var1;
                                    if (!var2) {
                                        _fun31457_ip = 22;
                                        continue _fun31457
                                    }
                                case 17:
                                    var2 = var0.constructor;
                                case 22:
                                    var1 = !var2;
                                    var0 = !var1;
                                    if (var1) {
                                        _fun31457_ip = 71;
                                        continue _fun31457
                                    }
                                case 31:
                                    var1 = _closure2_slot13;
                                    var1 = var2 === var1;
                                    if (var1) {
                                        _fun31457_ip = 68;
                                        continue _fun31457
                                    }
                                case 45:
                                    var3 = var2.displayName;
                                    if (var3) {
                                        _fun31457_ip = 58;
                                        continue _fun31457
                                    }
                                case 53:
                                    var3 = var2.name;
                                case 58:
                                    var2 = 'GeneratorFunction';
                                    var1 = var2 === var3;
                                case 68:
                                    var0 = var1;
                                case 71:
                                    return var0;
                            }
                        };
                        var3.isGeneratorFunction = var7;
                        var7 = function(arg0) { // Environment: var5
                            _fun31458: for (var _fun31458_ip = 0;;) switch (_fun31458_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = global;
                                    var1 = var2.Object;
                                    var3 = var1.setPrototypeOf;
                                    if (var3) {
                                        _fun31458_ip = 60;
                                        continue _fun31458
                                    }
                                case 23:
                                    var3 = _closure2_slot14;
                                    var0.__proto__ = var3;
                                    var3 = _closure2_slot2;
                                    var3 = var3 in var0;
                                    if (var3) {
                                        _fun31458_ip = 82;
                                        continue _fun31458
                                    }
                                case 44:
                                    var4 = _closure2_slot2;
                                    var3 = 'GeneratorFunction';
                                    var0[var4] = var3;
                                    _fun31458_ip = 82;
                                    continue _fun31458;
                                case 60:
                                    var5 = var2.Object;
                                    var4 = var5.setPrototypeOf;
                                    var3 = _closure2_slot14;
                                    var3 = var4.bind(var5)(var0, var3);
                                case 82:
                                    var3 = var2.Object;
                                    var2 = var3.create;
                                    var1 = _closure2_slot9;
                                    var1 = var2.bind(var3)(var1);
                                    var0.prototype = var1;
                                    return var0;
                            }
                        };
                        var3.mark = var7;
                        var7 = function(arg0) { // Environment: var5
                            var0 = {};
                            var1 = arg0;
                            var0.__await = var1;
                            return var0;
                        };
                        var3.awrap = var7;
                        var13 = var12.prototype;
                        var7 = undefined;
                        var13 = var11.bind(var7)(var13);
                        var14 = var12.prototype;
                        var13 = function() { // Environment: var5
                            var0 = this;
                            return var0;
                        };
                        var14[var15] = var13;
                        var3.AsyncIterator = var12;
                        var12 = function(arg0, arg1, arg2, arg3) { // Environment: var5
                            _fun31461: for (var _fun31461_ip = 0;;) switch (_fun31461_ip) {
                                case 0:
                                    var4 = arg1;
                                    var5 = _closure2_slot15;
                                    var8 = _closure2_slot10;
                                    var13 = undefined;
                                    var12 = arg0;
                                    var10 = arg2;
                                    var9 = arg3;
                                    var11 = var4;
                                    var12 = var13[var8](var12, var11, var10, var9, var8);
                                    var3 = var5.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var13 = var3;
                                    var2 = new var13[var5](var12, var11);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    var _closure3_slot0 = var3;
                                    var2 = _closure2_slot3;
                                    var0 = var2.isGeneratorFunction;
                                    var2 = var0.bind(var2)(var4);
                                    var0 = var3;
                                    if (var2) {
                                        _fun31461_ip = 103;
                                        continue _fun31461
                                    }
                                case 79:
                                    var2 = var3.next;
                                    var3 = var2.bind(var3)();
                                    var2 = var3.then;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun31462: for (var _fun31462_ip = 0;;) switch (_fun31462_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = var1.done;
                                                if (var0) {
                                                    _fun31462_ip = 29;
                                                    continue _fun31462
                                                }
                                            case 11:
                                                var2 = _closure3_slot0;
                                                var0 = var2.next;
                                                var0 = var0.bind(var2)();
                                                _fun31462_ip = 34;
                                                continue _fun31462;
                                            case 29:
                                                var0 = var1.value;
                                            case 34:
                                                return var0;
                                        }
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 103:
                                    return var0;
                            }
                        };
                        var3.async = var12;
                        var7 = var11.bind(var7)(var8);
                        var7 = 'Generator';
                        var8[var10] = var7;
                        var7 = function() { // Environment: var5
                            var0 = this;
                            return var0;
                        };
                        var8[var9] = var7;
                        var7 = function() { // Environment: var5
                            var0 = '[object Generator]';
                            return var0;
                        };
                        var8.toString = var7;
                        var7 = function(arg0) { // Environment: var5
                            _fun31465: for (var _fun31465_ip = 0;;) switch (_fun31465_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure3_slot0 = var0;
                                    var2 = new Array(0);
                                    var _closure3_slot1 = var2;
                                    var5 = var0;
                                    for (var0 in var5)
                                        case 28: {
                                            case 37: var8 = var0;
                                            var7 = var2.push;
                                            var7 = var7.bind(var2)(var8);
                                            _fun31465_ip = 28;
                                            continue _fun31465;
                                        }
                                case 52:
                                    var0 = var2.reverse;
                                    var0 = var0.bind(var2)();
                                    var0 = function() { // Original name: next, environment: var1
                                        _fun31466: for (var _fun31466_ip = 0;;) switch (_fun31466_ip) {
                                            case 0:
                                                var1 = _closure3_slot1;
                                                var1 = var1.length;
                                                if (!var1) {
                                                    _fun31466_ip = 52;
                                                    continue _fun31466
                                                }
                                            case 15:
                                                var2 = _closure3_slot1;
                                                var1 = var2.pop;
                                                var1 = var1.bind(var2)();
                                                var2 = _closure3_slot0;
                                                var2 = var1 in var2;
                                                if (var2) {
                                                    _fun31466_ip = 66;
                                                    continue _fun31466
                                                }
                                            case 40:
                                                var2 = _closure3_slot1;
                                                var2 = var2.length;
                                                if (var2) {
                                                    _fun31466_ip = 15;
                                                    continue _fun31466
                                                }
                                            case 52:
                                                var2 = _closure3_slot2;
                                                var3 = true;
                                                var2.done = var3;
                                                return var2;
                                            case 66:
                                                var0 = _closure3_slot2;
                                                var0.value = var1;
                                                var1 = false;
                                                var0.done = var1;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var0;
                                    return var0;
                            }
                        };
                        var3.keys = var7;
                        var3.values = var6;
                        var3 = {};
                        var3.constructor = var4;
                        var6 = function(arg0) { // Original name: reset, environment: var5
                            _fun31467: for (var _fun31467_ip = 0;;) switch (_fun31467_ip) {
                                case 0:
                                    var11 = this;
                                    var10 = 0;
                                    var11.prev = var10;
                                    var11.next = var10;
                                    var0 = undefined;
                                    var11._sent = var0;
                                    var11.sent = var0;
                                    var1 = false;
                                    var11.done = var1;
                                    var1 = null;
                                    var11.delegate = var1;
                                    var1 = 'next';
                                    var11.method = var1;
                                    var11.arg = var0;
                                    var3 = var11.tryEntries;
                                    var2 = var3.forEach;
                                    var1 = _closure2_slot18;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = arg0;
                                    if (var1) {
                                        _fun31467_ip = 196;
                                        continue _fun31467
                                    }
                                case 92:
                                    var7 = var11;
                                    var3 = global;
                                    var2 = 1;
                                    var1 = 't';
                                    for (var4 in var7)
                                        case 112: {
                                            case 121: var12 = var4;
                                            var13 = var12.charAt;
                                            var13 = var13.bind(var12)(var10);
                                            var13 = var1 === var13;
                                            if (!var13) {
                                                _fun31467_ip = 157;
                                                continue _fun31467
                                            }
                                            case 142: var15 = _closure2_slot0;
                                            var14 = var15.call;
                                            var13 = var14.bind(var15)(var11, var12);
                                            case 157: if (!var13) {
                                                _fun31467_ip = 187;
                                                continue _fun31467
                                            }
                                            case 160: var15 = var3.isNaN;
                                            var14 = var12.slice;
                                            var14 = var14.bind(var12)(var2);
                                            var14 = var14 - 0;
                                            var14 = var15.bind(var0)(var14);
                                            var13 = !var14;
                                            case 187: if (!var13) {
                                                _fun31467_ip = 112;
                                                continue _fun31467
                                            }
                                            case 190: var11[var12] = var0;
                                            _fun31467_ip = 112;
                                            continue _fun31467;
                                        }
                                case 196:
                                    return var0;
                            }
                        };
                        var3.reset = var6;
                        var6 = function() { // Original name: stop, environment: var5
                            _fun31468: for (var _fun31468_ip = 0;;) switch (_fun31468_ip) {
                                case 0:
                                    var1 = this;
                                    var0 = true;
                                    var1.done = var0;
                                    var2 = var1.tryEntries;
                                    var0 = 0;
                                    var0 = var2[var0];
                                    var0 = var0.completion;
                                    var3 = var0.type;
                                    var2 = 'throw';
                                    if (!(var2 !== var3)) {
                                        _fun31468_ip = 50;
                                        continue _fun31468
                                    }
                                case 42:
                                    var1 = var1.rval;
                                    return var1;
                                case 50:
                                    var0 = var0.arg;
                                    throw var0;
                            }
                        };
                        var3.stop = var6;
                        var6 = function(arg0) { // Original name: dispatchException, environment: var5
                            _fun31469: for (var _fun31469_ip = 0;;) switch (_fun31469_ip) {
                                case 0:
                                    var0 = arg0;
                                    var12 = this;
                                    var _closure3_slot0 = var0;
                                    var3 = function(arg0, arg1) { // Original name: handle, environment: var13
                                        _fun31470: for (var _fun31470_ip = 0;;) switch (_fun31470_ip) {
                                            case 0:
                                                var0 = arg1;
                                                var3 = _closure3_slot2;
                                                var2 = 'throw';
                                                var3.type = var2;
                                                var3 = _closure3_slot2;
                                                var2 = _closure3_slot0;
                                                var3.arg = var2;
                                                var3 = _closure3_slot1;
                                                var2 = arg0;
                                                var3.next = var2;
                                                if (!var0) {
                                                    _fun31470_ip = 76;
                                                    continue _fun31470
                                                }
                                            case 50:
                                                var3 = _closure3_slot1;
                                                var2 = 'next';
                                                var3.method = var2;
                                                var2 = _closure3_slot1;
                                                var1 = undefined;
                                                var2.arg = var1;
                                            case 76:
                                                var0 = !var0;
                                                var0 = !var0;
                                                return var0;
                                        }
                                    };
                                    var1 = var12.done;
                                    if (var1) {
                                        _fun31469_ip = 373;
                                        continue _fun31469
                                    }
                                case 28:
                                    var _closure3_slot1 = var12;
                                    var1 = var12.tryEntries;
                                    var2 = var1.length;
                                    var1 = 1;
                                    var11 = var2 - var1;
                                    var2 = undefined;
                                    var10 = 0;
                                    var8 = 'catchLoc';
                                    var7 = 'finallyLoc';
                                    var6 = 'root';
                                    var5 = undefined;
                                    var4 = undefined;
                                    if (!(var11 >= var10)) {
                                        _fun31469_ip = 331;
                                        continue _fun31469
                                    }
                                case 80:
                                    var1 = var12.tryEntries;
                                    var1 = var1[var11];
                                    var14 = var1.completion;
                                    var _closure3_slot2 = var14;
                                    var14 = var1.tryLoc;
                                    if (!(var6 !== var14)) {
                                        _fun31469_ip = 362;
                                        continue _fun31469
                                    }
                                case 113:
                                    var15 = var1.tryLoc;
                                    var14 = var12.prev;
                                    if (!(var15 <= var14)) {
                                        _fun31469_ip = 321;
                                        continue _fun31469
                                    }
                                case 132:
                                    var15 = _closure2_slot0;
                                    var14 = var15.call;
                                    var17 = var14.bind(var15)(var1, var8);
                                    var15 = _closure2_slot0;
                                    var14 = var15.call;
                                    var16 = var14.bind(var15)(var1, var7);
                                    if (!var17) {
                                        _fun31469_ip = 168;
                                        continue _fun31469
                                    }
                                case 165:
                                    if (var16) {
                                        _fun31469_ip = 283;
                                        continue _fun31469
                                    }
                                case 168:
                                    if (var17) {
                                        _fun31469_ip = 245;
                                        continue _fun31469
                                    }
                                case 171:
                                    if (var16) {
                                        _fun31469_ip = 210;
                                        continue _fun31469
                                    }
                                case 174:
                                    var14 = global;
                                    var18 = var14.Error;
                                    var14 = var18.prototype;
                                    var15 = Object.create(var14, {
                                        constructor: {
                                            value: var18
                                        }
                                    });
                                    var20 = 'try statement without catch or finally';
                                    var21 = var15;
                                    var14 = new var21[var18](var20, var19);
                                    var14 = var14 instanceof Object ? var14 : var15;
                                    throw var14;
                                case 210:
                                    var15 = var12.prev;
                                    var14 = var1.finallyLoc;
                                    var5 = var17;
                                    var4 = var16;
                                    if (!(var15 < var14)) {
                                        _fun31469_ip = 321;
                                        continue _fun31469
                                    }
                                case 232:
                                    var14 = var1.finallyLoc;
                                    var14 = var3.bind(var2)(var14);
                                    return var14;
                                case 245:
                                    var15 = var12.prev;
                                    var14 = var1.catchLoc;
                                    var5 = var17;
                                    var4 = var16;
                                    if (!(var15 < var14)) {
                                        _fun31469_ip = 321;
                                        continue _fun31469
                                    }
                                case 267:
                                    var15 = var1.catchLoc;
                                    var14 = true;
                                    var14 = var3.bind(var2)(var15, var14);
                                    return var14;
                                case 283:
                                    var15 = var12.prev;
                                    var14 = var1.catchLoc;
                                    if (!(!(var15 < var14))) {
                                        _fun31469_ip = 346;
                                        continue _fun31469
                                    }
                                case 299:
                                    var15 = var12.prev;
                                    var14 = var1.finallyLoc;
                                    var5 = var17;
                                    var4 = var16;
                                    if (!(!(var15 < var14))) {
                                        _fun31469_ip = 333;
                                        continue _fun31469
                                    }
                                case 321:
                                    var11 = var11 - 1;
                                    if (var11 >= var10) {
                                        _fun31469_ip = 80;
                                        continue _fun31469
                                    }
                                case 331:
                                    return var2;
                                case 333:
                                    var4 = var1.finallyLoc;
                                    var4 = var3.bind(var2)(var4);
                                    return var4;
                                case 346:
                                    var4 = var1.catchLoc;
                                    var1 = true;
                                    var1 = var3.bind(var2)(var4, var1);
                                    return var1;
                                case 362:
                                    var1 = 'end';
                                    var1 = var3.bind(var2)(var1);
                                    return var1;
                                case 373:
                                    throw var0;
                            }
                        };
                        var3.dispatchException = var6;
                        var6 = function(arg0, arg1) { // Original name: abrupt, environment: var5
                            _fun31471: for (var _fun31471_ip = 0;;) switch (_fun31471_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = arg1;
                                    var3 = this;
                                    var1 = var3.tryEntries;
                                    var2 = var1.length;
                                    var1 = 1;
                                    var8 = var2 - var1;
                                    var6 = 0;
                                    var4 = 'finallyLoc';
                                    var2 = undefined;
                                    if (!(var8 >= var6)) {
                                        _fun31471_ip = 114;
                                        continue _fun31471
                                    }
                                case 42:
                                    var9 = var3.tryEntries;
                                    var11 = var9[var8];
                                    var10 = var11.tryLoc;
                                    var9 = var3.prev;
                                    if (!(var10 <= var9)) {
                                        _fun31471_ip = 105;
                                        continue _fun31471
                                    }
                                case 68:
                                    var10 = _closure2_slot0;
                                    var9 = var10.call;
                                    var9 = var9.bind(var10)(var11, var4);
                                    if (!var9) {
                                        _fun31471_ip = 105;
                                        continue _fun31471
                                    }
                                case 86:
                                    var10 = var3.prev;
                                    var9 = var11.finallyLoc;
                                    var2 = var11;
                                    if (!(!(var10 < var9))) {
                                        _fun31471_ip = 114;
                                        continue _fun31471
                                    }
                                case 105:
                                    var8 = var8 - 1;
                                    var2 = undefined;
                                    if (var8 >= var6) {
                                        _fun31471_ip = 42;
                                        continue _fun31471
                                    }
                                case 114:
                                    var4 = var2;
                                    if (!var2) {
                                        _fun31471_ip = 142;
                                        continue _fun31471
                                    }
                                case 120:
                                    var6 = 'break';
                                    var6 = var6 === var5;
                                    if (var6) {
                                        _fun31471_ip = 139;
                                        continue _fun31471
                                    }
                                case 131:
                                    var7 = 'continue';
                                    var6 = var7 === var5;
                                case 139:
                                    var4 = var6;
                                case 142:
                                    if (!var4) {
                                        _fun31471_ip = 155;
                                        continue _fun31471
                                    }
                                case 145:
                                    var6 = var2.tryLoc;
                                    var4 = var6 <= var0;
                                case 155:
                                    if (!var4) {
                                        _fun31471_ip = 168;
                                        continue _fun31471
                                    }
                                case 158:
                                    var6 = var2.finallyLoc;
                                    var4 = var0 <= var6;
                                case 168:
                                    if (!var4) {
                                        _fun31471_ip = 173;
                                        continue _fun31471
                                    }
                                case 171:
                                    var2 = null;
                                case 173:
                                    if (var2) {
                                        _fun31471_ip = 180;
                                        continue _fun31471
                                    }
                                case 176:
                                    var4 = {};
                                    _fun31471_ip = 186;
                                    continue _fun31471;
                                case 180:
                                    var4 = var2.completion;
                                case 186:
                                    var4.type = var5;
                                    var4.arg = var0;
                                    if (var2) {
                                        _fun31471_ip = 214;
                                        continue _fun31471
                                    }
                                case 201:
                                    var0 = var3.complete;
                                    var0 = var0.bind(var3)(var4);
                                    _fun31471_ip = 240;
                                    continue _fun31471;
                                case 214:
                                    var4 = 'next';
                                    var3.method = var4;
                                    var2 = var2.finallyLoc;
                                    var3.next = var2;
                                    var0 = _closure2_slot8;
                                case 240:
                                    return var0;
                            }
                        };
                        var3.abrupt = var6;
                        var6 = function(arg0, arg1) { // Original name: complete, environment: var5
                            _fun31472: for (var _fun31472_ip = 0;;) switch (_fun31472_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = arg1;
                                    var2 = this;
                                    var4 = var0.type;
                                    var1 = 'throw';
                                    if (!(var1 !== var4)) {
                                        _fun31472_ip = 151;
                                        continue _fun31472
                                    }
                                case 25:
                                    var4 = var0.type;
                                    var1 = 'break';
                                    if (!(var1 !== var4)) {
                                        _fun31472_ip = 130;
                                        continue _fun31472
                                    }
                                case 38:
                                    var4 = var0.type;
                                    var1 = 'continue';
                                    if (!(var1 !== var4)) {
                                        _fun31472_ip = 130;
                                        continue _fun31472
                                    }
                                case 51:
                                    var4 = var0.type;
                                    var1 = 'return';
                                    if (!(var1 !== var4)) {
                                        _fun31472_ip = 94;
                                        continue _fun31472
                                    }
                                case 64:
                                    var5 = var0.type;
                                    var4 = 'normal';
                                    var4 = var4 === var5;
                                    if (!var4) {
                                        _fun31472_ip = 83;
                                        continue _fun31472
                                    }
                                case 80:
                                    var4 = var3;
                                case 83:
                                    if (!var4) {
                                        _fun31472_ip = 142;
                                        continue _fun31472
                                    }
                                case 86:
                                    var2.next = var3;
                                    _fun31472_ip = 142;
                                    continue _fun31472;
                                case 94:
                                    var3 = var0.arg;
                                    var2.arg = var3;
                                    var2.rval = var3;
                                    var2.method = var1;
                                    var1 = 'end';
                                    var2.next = var1;
                                    _fun31472_ip = 142;
                                    continue _fun31472;
                                case 130:
                                    var1 = var0.arg;
                                    var2.next = var1;
                                case 142:
                                    var1 = _closure2_slot8;
                                    return var1;
                                case 151:
                                    var0 = var0.arg;
                                    throw var0;
                            }
                        };
                        var3.complete = var6;
                        var6 = function(arg0) { // Original name: finish, environment: var5
                            _fun31473: for (var _fun31473_ip = 0;;) switch (_fun31473_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = this;
                                    var0 = var4.tryEntries;
                                    var1 = var0.length;
                                    var0 = 1;
                                    var1 = var1 - var0;
                                    var0 = 0;
                                    if (!(var1 >= var0)) {
                                        _fun31473_ip = 57;
                                        continue _fun31473
                                    }
                                case 30:
                                    var3 = var4.tryEntries;
                                    var3 = var3[var1];
                                    var5 = var3.finallyLoc;
                                    if (!(var5 !== var2)) {
                                        _fun31473_ip = 61;
                                        continue _fun31473
                                    }
                                case 50:
                                    var1 = var1 - 1;
                                    if (var1 >= var0) {
                                        _fun31473_ip = 30;
                                        continue _fun31473
                                    }
                                case 57:
                                    var0 = undefined;
                                    return var0;
                                case 61:
                                    var2 = var4.complete;
                                    var1 = var3.completion;
                                    var0 = var3.afterLoc;
                                    var0 = var2.bind(var4)(var1, var0);
                                    var2 = _closure2_slot18;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var3);
                                    var0 = _closure2_slot8;
                                    return var0;
                            }
                        };
                        var3.finish = var6;
                        var6 = function(arg0) { // Original name: _catch, environment: var5
                            _fun31474: for (var _fun31474_ip = 0;;) switch (_fun31474_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = this;
                                    var0 = var2.tryEntries;
                                    var1 = var0.length;
                                    var0 = 1;
                                    var1 = var1 - var0;
                                    var0 = 0;
                                    if (!(var1 >= var0)) {
                                        _fun31474_ip = 57;
                                        continue _fun31474
                                    }
                                case 30:
                                    var4 = var2.tryEntries;
                                    var4 = var4[var1];
                                    var5 = var4.tryLoc;
                                    if (!(var5 !== var3)) {
                                        _fun31474_ip = 93;
                                        continue _fun31474
                                    }
                                case 50:
                                    var1 = var1 - 1;
                                    if (var1 >= var0) {
                                        _fun31474_ip = 30;
                                        continue _fun31474
                                    }
                                case 57:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var6 = 'illegal catch attempt';
                                    var7 = var1;
                                    var0 = new var7[var2](var6, var5);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 93:
                                    var1 = var4.completion;
                                    var5 = var1.type;
                                    var3 = undefined;
                                    var2 = 'throw';
                                    var0 = undefined;
                                    if (!(var2 === var5)) {
                                        _fun31474_ip = 134;
                                        continue _fun31474
                                    }
                                case 116:
                                    var0 = var1.arg;
                                    var2 = _closure2_slot18;
                                    var2 = var2.bind(var3)(var4);
                                case 134:
                                    return var0;
                            }
                        };
                        var3.catch = var6;
                        var5 = function(arg0, arg1, arg2) { // Original name: delegateYield, environment: var5
                            _fun31475: for (var _fun31475_ip = 0;;) switch (_fun31475_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = {};
                                    var5 = _closure2_slot20;
                                    var1 = undefined;
                                    var4 = arg0;
                                    var4 = var5.bind(var1)(var4);
                                    var3.iterator = var4;
                                    var4 = arg1;
                                    var3.resultName = var4;
                                    var4 = arg2;
                                    var3.nextLoc = var4;
                                    var2.delegate = var3;
                                    var4 = var2.method;
                                    var3 = 'next';
                                    if (!(var3 === var4)) {
                                        _fun31475_ip = 69;
                                        continue _fun31475
                                    }
                                case 63:
                                    var2.arg = var1;
                                case 69:
                                    var0 = _closure2_slot8;
                                    return var0;
                            }
                        };
                        var3.delegateYield = var5;
                        var4.prototype = var3;
                        _fun31429_ip = 709;
                        continue _fun31429;
                    case 696:
                        if (!var2) {
                            _fun31429_ip = 709;
                            continue _fun31429
                        }
                    case 699:
                        var0 = _closure1_slot0;
                        var0.exports = var1;
                    case 709:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);