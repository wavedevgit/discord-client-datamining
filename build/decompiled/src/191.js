// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2652: for (var _fun2652_ip = 0;;) switch (_fun2652_ip) {
        case 0:
            var2 = module;
            var0 = undefined;
            var1 = undefined;
            var4 = 'object';
            var3 = typeof var2;
            if (!(var4 !== var3)) {
                _fun2652_ip = 22;
                continue _fun2652
            }
        case 18:
            var3 = {};
            _fun2652_ip = 27;
            continue _fun2652;
        case 22:
            var3 = var2.exports;
        case 27:
            var2 = function(arg0) { // Environment: var2
                _fun2653: for (var _fun2653_ip = 0;;) switch (_fun2653_ip) {
                    case 0:
                        var8 = arg0;
                        var0 = var8;
                        var _closure2_slot0 = var8;
                        var8 = undefined;
                        var21 = undefined;
                        var19 = undefined;
                        var12 = undefined;
                        var4 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var7 = undefined;
                        var20 = undefined;
                        var17 = undefined;
                        var16 = function(arg0, arg1, arg2) { // Original name: define, environment: var3
                            var1 = arg0;
                            var0 = arg1;
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.defineProperty;
                            var2 = {
                                'value': null,
                                'enumerable': true,
                                'configurable': true,
                                'writable': true
                            };
                            var5 = arg2;
                            var2.value = var5;
                            var2 = var3.bind(var4)(var1, var0, var2);
                            var0 = var1[var0];
                            return var0;
                        };
                        var6 = var16;
                        var _closure2_slot11 = var16;
                        var16 = function(arg0, arg1, arg2, arg3) { // Original name: wrap, environment: var3
                            _fun2655: for (var _fun2655_ip = 0;;) switch (_fun2655_ip) {
                                case 0:
                                    var0 = arg1;
                                    var4 = arg3;
                                    if (!var0) {
                                        _fun2655_ip = 28;
                                        continue _fun2655
                                    }
                                case 9:
                                    var2 = var0.prototype;
                                    var1 = _closure2_slot14;
                                    var1 = var2 instanceof var1;
                                    if (var1) {
                                        _fun2655_ip = 35;
                                        continue _fun2655
                                    }
                                case 28:
                                    var0 = _closure2_slot14;
                                case 35:
                                    var1 = global;
                                    var2 = var1.Object;
                                    var1 = var2.create;
                                    var0 = var0.prototype;
                                    var0 = var1.bind(var2)(var0);
                                    var2 = _closure2_slot22;
                                    if (var4) {
                                        _fun2655_ip = 72;
                                        continue _fun2655
                                    }
                                case 68:
                                    var4 = new Array(0);
                                case 72:
                                    var3 = var2.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var11 = var3;
                                    var10 = var4;
                                    var2 = new var11[var2](var10, var9);
                                    var7 = var2 instanceof Object ? var2 : var3;
                                    var4 = _closure2_slot2;
                                    var3 = {};
                                    var6 = _closure2_slot18;
                                    var2 = undefined;
                                    var5 = arg0;
                                    var1 = arg2;
                                    var1 = var6.bind(var2)(var5, var1, var7);
                                    var3.value = var1;
                                    var1 = '_invoke';
                                    var1 = var4.bind(var2)(var0, var1, var3);
                                    return var0;
                            }
                        };
                        var18 = var16;
                        var _closure2_slot12 = var16;
                        var16 = function(arg0, arg1, arg2) { // Original name: tryCatch, environment: var3
                            _fun2656: for (var _fun2656_ip = 0;;) switch (_fun2656_ip) {
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
                        var _closure2_slot13 = var16;
                        var16 = function() { // Original name: Generator, environment: var3
                            var0 = undefined;
                            return var0;
                        };
                        var15 = var16;
                        var _closure2_slot14 = var16;
                        var16 = function() { // Original name: GeneratorFunction, environment: var3
                            var0 = undefined;
                            return var0;
                        };
                        var13 = var16;
                        var _closure2_slot15 = var16;
                        var16 = function() { // Original name: GeneratorFunctionPrototype, environment: var3
                            var0 = undefined;
                            return var0;
                        };
                        var14 = var16;
                        var _closure2_slot16 = var16;
                        var5 = function(arg0) { // Original name: defineIteratorMethods, environment: var3
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = ['next', 'throw', 'return'];
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var3 = _closure2_slot11;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = this;
                                    var2 = var3._invoke;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var1 = var3.bind(var0)(var2, var4, var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var16 = function(arg0, arg1) { // Original name: AsyncIterator, environment: var3
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = function(arg0, arg1, arg2, arg3) { // Original name: invoke, environment: var0
                                _fun2664: for (var _fun2664_ip = 0;;) switch (_fun2664_ip) {
                                    case 0:
                                        var6 = arg3;
                                        var0 = arg2;
                                        var _closure4_slot0 = var0;
                                        var _closure4_slot1 = var6;
                                        var8 = _closure2_slot13;
                                        var7 = _closure3_slot0;
                                        var2 = arg0;
                                        var5 = var7[var2];
                                        var4 = undefined;
                                        var2 = arg1;
                                        var2 = var8.bind(var4)(var5, var7, var2);
                                        var7 = var2.type;
                                        var5 = 'throw';
                                        if (!(var5 === var7)) {
                                            _fun2664_ip = 75;
                                            continue _fun2664
                                        }
                                    case 62:
                                        var5 = var2.arg;
                                        var5 = var6.bind(var4)(var5);
                                        return var4;
                                    case 75:
                                        var2 = var2.arg;
                                        var _closure4_slot2 = var2;
                                        var2 = var2.value;
                                        if (!var2) {
                                            _fun2664_ip = 126;
                                            continue _fun2664
                                        }
                                    case 93:
                                        var5 = 'object';
                                        var4 = typeof var2;
                                        if (!(var5 === var4)) {
                                            _fun2664_ip = 126;
                                            continue _fun2664
                                        }
                                    case 104:
                                        var5 = _closure2_slot1;
                                        var4 = var5.call;
                                        var0 = '__await';
                                        var0 = var4.bind(var5)(var2, var0);
                                        if (var0) {
                                            _fun2664_ip = 164;
                                            continue _fun2664
                                        }
                                    case 126:
                                        var4 = _closure3_slot1;
                                        var0 = var4.resolve;
                                        var6 = var0.bind(var4)(var2);
                                        var5 = var6.then;
                                        var4 = function(arg0) { // Environment: var1
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
                                            var5 = _closure3_slot3;
                                            var7 = _closure4_slot0;
                                            var6 = _closure4_slot1;
                                            var10 = undefined;
                                            var9 = 'throw';
                                            var8 = arg0;
                                            var0 = var10[var5](var9, var8, var7, var6, var5);
                                            return var0;
                                        };
                                        var0 = var5.bind(var6)(var4, var0);
                                        _fun2664_ip = 206;
                                        continue _fun2664;
                                    case 164:
                                        var4 = _closure3_slot1;
                                        var3 = var4.resolve;
                                        var2 = var2.__await;
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.then;
                                        var2 = function(arg0) { // Environment: var1
                                            var5 = _closure3_slot3;
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
                                            var5 = _closure3_slot3;
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
                                    case 206:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var1;
                            var4 = _closure2_slot2;
                            var3 = {};
                            var0 = function(arg0, arg1) { // Original name: enqueue, environment: var0
                                _fun2669: for (var _fun2669_ip = 0;;) switch (_fun2669_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arg1;
                                        var _closure4_slot1 = var1;
                                        var4 = function() { // Original name: callInvokeWithMethodAndArg, environment: var0
                                            var2 = _closure3_slot1;
                                            var0 = var2.prototype;
                                            var1 = Object.create(var0, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var3 = function(arg0, arg1) { // Environment: var0
                                                var5 = _closure3_slot3;
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
                                        var0 = _closure3_slot2;
                                        if (var0) {
                                            _fun2669_ip = 39;
                                            continue _fun2669
                                        }
                                    case 31:
                                        var0 = undefined;
                                        var0 = var4.bind(var0)();
                                        _fun2669_ip = 54;
                                        continue _fun2669;
                                    case 39:
                                        var3 = _closure3_slot2;
                                        var2 = var3.then;
                                        var0 = var2.bind(var3)(var4, var4);
                                    case 54:
                                        var _closure3_slot2 = var0;
                                        return var0;
                                }
                            };
                            var3.value = var0;
                            var0 = undefined;
                            var2 = this;
                            var1 = '_invoke';
                            var1 = var4.bind(var0)(var2, var1, var3);
                            return var0;
                        };
                        var10 = var16;
                        var _closure2_slot17 = var16;
                        var16 = function(arg0, arg1, arg2) { // Original name: makeInvokeMethod, environment: var3
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = arg2;
                            var _closure3_slot2 = var1;
                            var1 = _closure2_slot5;
                            var _closure3_slot3 = var1;
                            var0 = function(arg0, arg1) { // Original name: invoke, environment: var0
                                _fun2673: for (var _fun2673_ip = 0;;) switch (_fun2673_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = arg1;
                                        var4 = _closure3_slot3;
                                        var2 = _closure2_slot7;
                                        if (!(var4 !== var2)) {
                                            _fun2673_ip = 475;
                                            continue _fun2673
                                        }
                                    case 27:
                                        var4 = _closure3_slot3;
                                        var2 = _closure2_slot8;
                                        if (!(var4 !== var2)) {
                                            _fun2673_ip = 453;
                                            continue _fun2673
                                        }
                                    case 42:
                                        var2 = _closure3_slot2;
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
                                        var2 = _closure3_slot2;
                                        var13 = var2.delegate;
                                        if (!var13) {
                                            _fun2673_ip = 116;
                                            continue _fun2673
                                        }
                                    case 93:
                                        var4 = _closure2_slot19;
                                        var2 = _closure3_slot2;
                                        var2 = var4.bind(var11)(var13, var2);
                                        var6 = var2;
                                        if (var6) {
                                            _fun2673_ip = 437;
                                            continue _fun2673
                                        }
                                    case 116:
                                        var4 = _closure3_slot2;
                                        var4 = var4.method;
                                        var15 = var6;
                                        if (!(var7 !== var4)) {
                                            _fun2673_ip = 240;
                                            continue _fun2673
                                        }
                                    case 133:
                                        var4 = _closure3_slot2;
                                        var4 = var4.method;
                                        if (!(var10 !== var4)) {
                                            _fun2673_ip = 185;
                                            continue _fun2673
                                        }
                                    case 147:
                                        var4 = _closure3_slot2;
                                        var4 = var4.method;
                                        if (!(var8 === var4)) {
                                            _fun2673_ip = 262;
                                            continue _fun2673
                                        }
                                    case 161:
                                        var14 = _closure3_slot2;
                                        var13 = var14.abrupt;
                                        var4 = var14.arg;
                                        var4 = var13.bind(var14)(var8, var4);
                                        _fun2673_ip = 262;
                                        continue _fun2673;
                                    case 185:
                                        var13 = _closure3_slot3;
                                        var4 = _closure2_slot5;
                                        if (!(var13 !== var4)) {
                                            _fun2673_ip = 220;
                                            continue _fun2673
                                        }
                                    case 197:
                                        var14 = _closure3_slot2;
                                        var13 = var14.dispatchException;
                                        var4 = var14.arg;
                                        var4 = var13.bind(var14)(var4);
                                        _fun2673_ip = 262;
                                        continue _fun2673;
                                    case 220:
                                        var4 = _closure2_slot8;
                                        _closure3_slot3 = var4;
                                        var4 = _closure3_slot2;
                                        var4 = var4.arg;
                                        throw var4;
                                    case 240:
                                        var13 = _closure3_slot2;
                                        var4 = var13.arg;
                                        var13._sent = var4;
                                        var13.sent = var4;
                                    case 262:
                                        var4 = _closure2_slot7;
                                        _closure3_slot3 = var4;
                                        var16 = _closure2_slot13;
                                        var14 = _closure3_slot0;
                                        var13 = _closure3_slot1;
                                        var4 = _closure3_slot2;
                                        var13 = var16.bind(var11)(var14, var13, var4);
                                        var4 = var13.type;
                                        if (!(var9 !== var4)) {
                                            _fun2673_ip = 361;
                                            continue _fun2673
                                        }
                                    case 302:
                                        var4 = var13.type;
                                        var6 = var15;
                                        var5 = var13;
                                        if (var10 !== var4) {
                                            _fun2673_ip = 80;
                                            continue _fun2673
                                        }
                                    case 320:
                                        var4 = _closure2_slot8;
                                        _closure3_slot3 = var4;
                                        var14 = _closure3_slot2;
                                        var14.method = var10;
                                        var4 = var13.arg;
                                        var14.arg = var4;
                                        var6 = var15;
                                        var5 = var13;
                                        _fun2673_ip = 80;
                                        continue _fun2673;
                                    case 361:
                                        var4 = _closure3_slot2;
                                        var4 = var4.done;
                                        if (var4) {
                                            _fun2673_ip = 379;
                                            continue _fun2673
                                        }
                                    case 373:
                                        var4 = _closure2_slot6;
                                        _fun2673_ip = 383;
                                        continue _fun2673;
                                    case 379:
                                        var4 = _closure2_slot8;
                                    case 383:
                                        _closure3_slot3 = var4;
                                        var14 = var13.arg;
                                        var4 = _closure2_slot9;
                                        var6 = var15;
                                        var5 = var13;
                                        if (var14 === var4) {
                                            _fun2673_ip = 80;
                                            continue _fun2673
                                        }
                                    case 410:
                                        var4 = {};
                                        var13 = var13.arg;
                                        var4.value = var13;
                                        var13 = _closure3_slot2;
                                        var13 = var13.done;
                                        var4.done = var13;
                                        return var4;
                                    case 437:
                                        var4 = _closure2_slot9;
                                        var6 = var2;
                                        if (var2 === var4) {
                                            _fun2673_ip = 80;
                                            continue _fun2673
                                        }
                                    case 451:
                                        return var2;
                                    case 453:
                                        var2 = 'throw';
                                        if (!(var2 !== var3)) {
                                            _fun2673_ip = 473;
                                            continue _fun2673
                                        }
                                    case 461:
                                        var2 = _closure2_slot24;
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
                        var _closure2_slot18 = var16;
                        var16 = function(arg0, arg1) { // Original name: maybeInvokeDelegate, environment: var3
                            _fun2674: for (var _fun2674_ip = 0;;) switch (_fun2674_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = arg1;
                                    var2 = var1.method;
                                    var0 = var6.iterator;
                                    var8 = var0[var2];
                                    var5 = undefined;
                                    if (!(var8 !== var5)) {
                                        _fun2674_ip = 257;
                                        continue _fun2674
                                    }
                                case 30:
                                    var7 = _closure2_slot13;
                                    var4 = var6.iterator;
                                    var3 = var1.arg;
                                    var3 = var7.bind(var5)(var8, var4, var3);
                                    var7 = var3.type;
                                    var4 = 'throw';
                                    if (!(var4 !== var7)) {
                                        _fun2674_ip = 225;
                                        continue _fun2674
                                    }
                                case 71:
                                    var9 = var3.arg;
                                    if (var9) {
                                        _fun2674_ip = 140;
                                        continue _fun2674
                                    }
                                case 80:
                                    var1.method = var4;
                                    var7 = global;
                                    var10 = var7.TypeError;
                                    var7 = var10.prototype;
                                    var8 = Object.create(var7, {
                                        constructor: {
                                            value: var10
                                        }
                                    });
                                    var13 = 'iterator result is not an object';
                                    var14 = var8;
                                    var7 = new var14[var10](var13, var12);
                                    var7 = var7 instanceof Object ? var7 : var8;
                                    var1.arg = var7;
                                    var7 = null;
                                    var1.delegate = var7;
                                    var7 = _closure2_slot9;
                                    _fun2674_ip = 223;
                                    continue _fun2674;
                                case 140:
                                    var10 = var9.done;
                                    var8 = var9;
                                    if (!var10) {
                                        _fun2674_ip = 220;
                                        continue _fun2674
                                    }
                                case 151:
                                    var10 = var6.resultName;
                                    var9 = var9.value;
                                    var1[var10] = var9;
                                    var9 = var6.nextLoc;
                                    var1.next = var9;
                                    var10 = var1.method;
                                    var9 = 'return';
                                    if (!(var9 !== var10)) {
                                        _fun2674_ip = 208;
                                        continue _fun2674
                                    }
                                case 192:
                                    var9 = 'next';
                                    var1.method = var9;
                                    var1.arg = var5;
                                case 208:
                                    var9 = null;
                                    var1.delegate = var9;
                                    var8 = _closure2_slot9;
                                case 220:
                                    var7 = var8;
                                case 223:
                                    return var7;
                                case 225:
                                    var1.method = var4;
                                    var3 = var3.arg;
                                    var1.arg = var3;
                                    var3 = null;
                                    var1.delegate = var3;
                                    var0 = _closure2_slot9;
                                    return var0;
                                case 257:
                                    var0 = null;
                                    var1.delegate = var0;
                                    var0 = 'throw';
                                    var3 = var0 === var2;
                                    if (!var3) {
                                        _fun2674_ip = 287;
                                        continue _fun2674
                                    }
                                case 276:
                                    var4 = var6.iterator;
                                    var3 = var4.return;
                                case 287:
                                    if (!var3) {
                                        _fun2674_ip = 329;
                                        continue _fun2674
                                    }
                                case 290:
                                    var4 = 'return';
                                    var1.method = var4;
                                    var1.arg = var5;
                                    var4 = _closure2_slot19;
                                    var4 = var4.bind(var5)(var6, var1);
                                    var4 = var1.method;
                                    var3 = var0 === var4;
                                case 329:
                                    if (var3) {
                                        _fun2674_ip = 400;
                                        continue _fun2674
                                    }
                                case 332:
                                    var3 = 'return';
                                    if (!(var3 !== var2)) {
                                        _fun2674_ip = 400;
                                        continue _fun2674
                                    }
                                case 340:
                                    var1.method = var0;
                                    var0 = global;
                                    var3 = var0.TypeError;
                                    var0 = "The iterator does not provide a '";
                                    var4 = var0 + var2;
                                    var0 = var3.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var0 = "' method";
                                    var13 = var4 + var0;
                                    var14 = var2;
                                    var0 = new var14[var3](var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    var1.arg = var0;
                                case 400:
                                    var0 = _closure2_slot9;
                                    return var0;
                            }
                        };
                        var _closure2_slot19 = var16;
                        var16 = function(arg0) { // Original name: pushTryEntry, environment: var3
                            _fun2675: for (var _fun2675_ip = 0;;) switch (_fun2675_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = {};
                                    var0 = 0;
                                    var0 = var1[var0];
                                    var2.tryLoc = var0;
                                    var0 = 1;
                                    var3 = var0 in var1;
                                    if (!var3) {
                                        _fun2675_ip = 36;
                                        continue _fun2675
                                    }
                                case 26:
                                    var0 = var1[var0];
                                    var2.catchLoc = var0;
                                case 36:
                                    var0 = 2;
                                    var3 = var0 in var1;
                                    if (!var3) {
                                        _fun2675_ip = 69;
                                        continue _fun2675
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
                        var _closure2_slot20 = var16;
                        var16 = function(arg0) { // Original name: resetTryEntry, environment: var3
                            _fun2676: for (var _fun2676_ip = 0;;) switch (_fun2676_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1.completion;
                                    if (var0) {
                                        _fun2676_ip = 14;
                                        continue _fun2676
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
                        var _closure2_slot21 = var16;
                        var16 = function(arg0) { // Original name: Context, environment: var3
                            var3 = arg0;
                            var2 = this;
                            var1 = {};
                            var0 = 'root';
                            var1.tryLoc = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            var2.tryEntries = var0;
                            var1 = var3.forEach;
                            var0 = _closure2_slot20;
                            var0 = var1.bind(var3)(var0, var2);
                            var1 = var2.reset;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var16;
                        var _closure2_slot22 = var16;
                        var16 = function(arg0) { // Original name: values, environment: var3
                            _fun2678: for (var _fun2678_ip = 0;;) switch (_fun2678_ip) {
                                case 0:
                                    var2 = arg0;
                                    var _closure3_slot0 = var2;
                                    if (!var2) {
                                        _fun2678_ip = 92;
                                        continue _fun2678
                                    }
                                case 12:
                                    var0 = _closure2_slot3;
                                    var1 = var2[var0];
                                    if (var1) {
                                        _fun2678_ip = 109;
                                        continue _fun2678
                                    }
                                case 26:
                                    var0 = var2.next;
                                    var4 = 'function';
                                    var0 = typeof var0;
                                    if (!(var4 !== var0)) {
                                        _fun2678_ip = 107;
                                        continue _fun2678
                                    }
                                case 42:
                                    var0 = global;
                                    var5 = var0.isNaN;
                                    var4 = var2.length;
                                    var0 = undefined;
                                    var0 = var5.bind(var0)(var4);
                                    if (var0) {
                                        _fun2678_ip = 92;
                                        continue _fun2678
                                    }
                                case 65:
                                    var0 = -1;
                                    var _closure3_slot1 = var0;
                                    var0 = function() { // Original name: next, environment: var3
                                        _fun2679: for (var _fun2679_ip = 0;;) switch (_fun2679_ip) {
                                            case 0:
                                                var0 = _closure3_slot1;
                                                var2 = var0 + 1;
                                                _closure3_slot1 = var2;
                                                var0 = _closure3_slot0;
                                                var0 = var0.length;
                                                if (!(var2 < var0)) {
                                                    _fun2679_ip = 80;
                                                    continue _fun2679
                                                }
                                            case 30:
                                                var5 = _closure2_slot1;
                                                var4 = var5.call;
                                                var2 = _closure3_slot0;
                                                var0 = _closure3_slot1;
                                                var0 = var4.bind(var5)(var2, var0);
                                                if (var0) {
                                                    _fun2679_ip = 102;
                                                    continue _fun2679
                                                }
                                            case 56:
                                                var0 = _closure3_slot1;
                                                var2 = var0 + 1;
                                                _closure3_slot1 = var2;
                                                var0 = _closure3_slot0;
                                                var0 = var0.length;
                                                if (var2 < var0) {
                                                    _fun2679_ip = 30;
                                                    continue _fun2679
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
                                    var3 = _closure2_slot24;
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
                        var2 = var16;
                        var _closure2_slot23 = var16;
                        var16 = function() { // Original name: doneResult, environment: var3
                            var0 = {};
                            var1 = undefined;
                            var0.value = var1;
                            var1 = true;
                            var0.done = var1;
                            return var0;
                        };
                        var _closure2_slot24 = var16;
                        var16 = global;
                        var22 = var16.Object;
                        var22 = var22.prototype;
                        var21 = var22;
                        var22 = var22.hasOwnProperty;
                        var19 = var22;
                        var _closure2_slot1 = var22;
                        var22 = var16.Object;
                        var22 = var22.defineProperty;
                        if (var22) {
                            _fun2653_ip = 235;
                            continue _fun2653
                        }
                    case 230:
                        var22 = function(arg0, arg1, arg2) { // Environment: var3
                            var0 = arg2;
                            var2 = var0.value;
                            var1 = arg0;
                            var0 = arg1;
                            var1[var0] = var2;
                            var0 = undefined;
                            return var0;
                        };
                    case 235:
                        var12 = var22;
                        var _closure2_slot2 = var22;
                        var22 = var16.Symbol;
                        var23 = 'function';
                        var22 = typeof var22;
                        if (!(var23 !== var22)) {
                            _fun2653_ip = 262;
                            continue _fun2653
                        }
                    case 258:
                        var23 = {};
                        _fun2653_ip = 268;
                        continue _fun2653;
                    case 262:
                        var23 = var16.Symbol;
                    case 268:
                        var22 = var23.iterator;
                        if (var22) {
                            _fun2653_ip = 280;
                            continue _fun2653
                        }
                    case 276:
                        var22 = '@@iterator';
                    case 280:
                        var4 = var22;
                        var _closure2_slot3 = var22;
                        var22 = var23.asyncIterator;
                        if (var22) {
                            _fun2653_ip = 302;
                            continue _fun2653
                        }
                    case 296:
                        var22 = '@@asyncIterator';
                    case 302:
                        var11 = var22;
                        var23 = var23.toStringTag;
                        var22 = var23;
                        if (var23) {
                            _fun2653_ip = 323;
                            continue _fun2653
                        }
                    case 317:
                        var22 = '@@toStringTag';
                    case 323:
                        var9 = var22;
                        var _closure2_slot4 = var22;
                    case 330: // try_start_0
                        var24 = var6;
                        var23 = {};
                        var22 = '';
                        var22 = var24.bind(var8)(var23, var22);
                    case 345: // try_end0
                        _fun2653_ip = 361;
                        continue _fun2653;
                    case 347: // catch_target0
                        CatchBlockStart(arg_register = 22);
                        var22 = function(arg0, arg1, arg2) { // Original name: define, environment: var3
                            var0 = arg2;
                            var2 = arg0;
                            var1 = arg1;
                            var2[var1] = var0;
                            return var0;
                        };
                        var6 = var22;
                        _closure2_slot11 = var22;
                    case 361:
                        var22 = var0;
                        var22.wrap = var18;
                        var18 = 'suspendedStart';
                        var _closure2_slot5 = var18;
                        var18 = 'suspendedYield';
                        var _closure2_slot6 = var18;
                        var18 = 'executing';
                        var _closure2_slot7 = var18;
                        var18 = 'completed';
                        var _closure2_slot8 = var18;
                        var18 = {};
                        var _closure2_slot9 = var18;
                        var24 = {};
                        var7 = var24;
                        var23 = var6;
                        var22 = var4;
                        var18 = function() { // Environment: var3
                            var0 = this;
                            return var0;
                        };
                        var18 = var23.bind(var8)(var24, var22, var18);
                        var18 = var16.Object;
                        var22 = var18.getPrototypeOf;
                        var20 = var22;
                        var18 = var22;
                        if (!var22) {
                            _fun2653_ip = 483;
                            continue _fun2653
                        }
                    case 458:
                        var22 = var20;
                        var23 = var2;
                        var20 = new Array(0);
                        var20 = var23.bind(var8)(var20);
                        var20 = var22.bind(var8)(var20);
                        var18 = var22.bind(var8)(var20);
                    case 483:
                        var22 = var18;
                        var17 = var22;
                        var20 = var22;
                        if (!var22) {
                            _fun2653_ip = 502;
                            continue _fun2653
                        }
                    case 495:
                        var22 = var17;
                        var20 = var22 !== var21;
                    case 502:
                        var18 = var20;
                        if (!var20) {
                            _fun2653_ip = 528;
                            continue _fun2653
                        }
                    case 508:
                        var22 = var19;
                        var21 = var22.call;
                        var20 = var17;
                        var19 = var4;
                        var18 = var21.bind(var22)(var20, var19);
                    case 528:
                        if (!var18) {
                            _fun2653_ip = 534;
                            continue _fun2653
                        }
                    case 531:
                        var7 = var17;
                    case 534:
                        var17 = var16.Object;
                        var16 = var17.create;
                        var7 = var16.bind(var17)(var7);
                        var15.prototype = var7;
                        var14.prototype = var7;
                        var _closure2_slot10 = var7;
                        var13.prototype = var14;
                        var16 = var12;
                        var12 = {};
                        var12.value = var14;
                        var17 = true;
                        var12.configurable = var17;
                        var15 = 'constructor';
                        var12 = var16.bind(var8)(var7, var15, var12);
                        var12 = {};
                        var12.value = var13;
                        var12.configurable = var17;
                        var12 = var16.bind(var8)(var14, var15, var12);
                        var12 = 'GeneratorFunction';
                        var12 = var6.bind(var8)(var14, var9, var12);
                        var13.displayName = var12;
                        var12 = function(arg0) { // Environment: var3
                            _fun2684: for (var _fun2684_ip = 0;;) switch (_fun2684_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = 'function';
                                    var1 = typeof var0;
                                    var2 = var2 === var1;
                                    if (!var2) {
                                        _fun2684_ip = 22;
                                        continue _fun2684
                                    }
                                case 17:
                                    var2 = var0.constructor;
                                case 22:
                                    var1 = !var2;
                                    var0 = !var1;
                                    if (var1) {
                                        _fun2684_ip = 71;
                                        continue _fun2684
                                    }
                                case 31:
                                    var1 = _closure2_slot15;
                                    var1 = var2 === var1;
                                    if (var1) {
                                        _fun2684_ip = 68;
                                        continue _fun2684
                                    }
                                case 45:
                                    var3 = var2.displayName;
                                    if (var3) {
                                        _fun2684_ip = 58;
                                        continue _fun2684
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
                        var0.isGeneratorFunction = var12;
                        var12 = function(arg0) { // Environment: var3
                            _fun2685: for (var _fun2685_ip = 0;;) switch (_fun2685_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = global;
                                    var1 = var2.Object;
                                    var3 = var1.setPrototypeOf;
                                    if (var3) {
                                        _fun2685_ip = 58;
                                        continue _fun2685
                                    }
                                case 23:
                                    var3 = _closure2_slot16;
                                    var0.__proto__ = var3;
                                    var6 = _closure2_slot11;
                                    var5 = _closure2_slot4;
                                    var4 = undefined;
                                    var3 = 'GeneratorFunction';
                                    var3 = var6.bind(var4)(var0, var5, var3);
                                    _fun2685_ip = 80;
                                    continue _fun2685;
                                case 58:
                                    var5 = var2.Object;
                                    var4 = var5.setPrototypeOf;
                                    var3 = _closure2_slot16;
                                    var3 = var4.bind(var5)(var0, var3);
                                case 80:
                                    var3 = var2.Object;
                                    var2 = var3.create;
                                    var1 = _closure2_slot10;
                                    var1 = var2.bind(var3)(var1);
                                    var0.prototype = var1;
                                    return var0;
                            }
                        };
                        var0.mark = var12;
                        var12 = function(arg0) { // Environment: var3
                            var0 = {};
                            var1 = arg0;
                            var0.__await = var1;
                            return var0;
                        };
                        var0.awrap = var12;
                        var12 = var10.prototype;
                        var12 = var5.bind(var8)(var12);
                        var13 = var10.prototype;
                        var12 = var11;
                        var11 = function() { // Environment: var3
                            var0 = this;
                            return var0;
                        };
                        var11 = var6.bind(var8)(var13, var12, var11);
                        var0.AsyncIterator = var10;
                        var10 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var3
                            _fun2688: for (var _fun2688_ip = 0;;) switch (_fun2688_ip) {
                                case 0:
                                    var4 = arg1;
                                    var6 = arg4;
                                    var9 = undefined;
                                    if (!(var6 === var9)) {
                                        _fun2688_ip = 22;
                                        continue _fun2688
                                    }
                                case 14:
                                    var0 = global;
                                    var6 = var0.Promise;
                                case 22:
                                    var5 = _closure2_slot17;
                                    var8 = _closure2_slot12;
                                    var13 = arg0;
                                    var11 = arg2;
                                    var10 = arg3;
                                    var14 = undefined;
                                    var12 = var4;
                                    var13 = var14[var8](var13, var12, var11, var10, var9);
                                    var3 = var5.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var14 = var3;
                                    var12 = var6;
                                    var2 = new var14[var5](var13, var12, var11);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    var _closure3_slot0 = var3;
                                    var2 = _closure2_slot0;
                                    var0 = var2.isGeneratorFunction;
                                    var2 = var0.bind(var2)(var4);
                                    var0 = var3;
                                    if (var2) {
                                        _fun2688_ip = 123;
                                        continue _fun2688
                                    }
                                case 99:
                                    var2 = var3.next;
                                    var3 = var2.bind(var3)();
                                    var2 = var3.then;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun2689: for (var _fun2689_ip = 0;;) switch (_fun2689_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = var1.done;
                                                if (var0) {
                                                    _fun2689_ip = 29;
                                                    continue _fun2689
                                                }
                                            case 11:
                                                var2 = _closure3_slot0;
                                                var0 = var2.next;
                                                var0 = var0.bind(var2)();
                                                _fun2689_ip = 34;
                                                continue _fun2689;
                                            case 29:
                                                var0 = var1.value;
                                            case 34:
                                                return var0;
                                        }
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 123:
                                    return var0;
                            }
                        };
                        var0.async = var10;
                        var5 = var5.bind(var8)(var7);
                        var5 = 'Generator';
                        var5 = var6.bind(var8)(var7, var9, var5);
                        var5 = var4;
                        var4 = function() { // Environment: var3
                            var0 = this;
                            return var0;
                        };
                        var4 = var6.bind(var8)(var7, var5, var4);
                        var5 = 'toString';
                        var4 = function() { // Environment: var3
                            var0 = '[object Generator]';
                            return var0;
                        };
                        var4 = var6.bind(var8)(var7, var5, var4);
                        var4 = function(arg0) { // Environment: var3
                            _fun2692: for (var _fun2692_ip = 0;;) switch (_fun2692_ip) {
                                case 0:
                                    var0 = global;
                                    var3 = var0.Object;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var2)(var0);
                                    var _closure3_slot0 = var0;
                                    var2 = new Array(0);
                                    var _closure3_slot1 = var2;
                                    var5 = var0;
                                    for (var0 in var5)
                                        case 43: {
                                            case 52: var8 = var0;
                                            var7 = var2.push;
                                            var7 = var7.bind(var2)(var8);
                                            _fun2692_ip = 43;
                                            continue _fun2692;
                                        }
                                case 67:
                                    var0 = var2.reverse;
                                    var0 = var0.bind(var2)();
                                    var0 = function() { // Original name: next, environment: var1
                                        _fun2693: for (var _fun2693_ip = 0;;) switch (_fun2693_ip) {
                                            case 0:
                                                var1 = _closure3_slot1;
                                                var1 = var1.length;
                                                if (!var1) {
                                                    _fun2693_ip = 52;
                                                    continue _fun2693
                                                }
                                            case 15:
                                                var2 = _closure3_slot1;
                                                var1 = var2.pop;
                                                var1 = var1.bind(var2)();
                                                var2 = _closure3_slot0;
                                                var2 = var1 in var2;
                                                if (var2) {
                                                    _fun2693_ip = 66;
                                                    continue _fun2693
                                                }
                                            case 40:
                                                var2 = _closure3_slot1;
                                                var2 = var2.length;
                                                if (var2) {
                                                    _fun2693_ip = 15;
                                                    continue _fun2693
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
                        var0.keys = var4;
                        var0.values = var2;
                        var2 = var1;
                        var1 = {};
                        var1.constructor = var2;
                        var4 = function(arg0) { // Original name: reset, environment: var3
                            _fun2694: for (var _fun2694_ip = 0;;) switch (_fun2694_ip) {
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
                                    var1 = _closure2_slot21;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = arg0;
                                    if (var1) {
                                        _fun2694_ip = 196;
                                        continue _fun2694
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
                                                _fun2694_ip = 157;
                                                continue _fun2694
                                            }
                                            case 142: var15 = _closure2_slot1;
                                            var14 = var15.call;
                                            var13 = var14.bind(var15)(var11, var12);
                                            case 157: if (!var13) {
                                                _fun2694_ip = 187;
                                                continue _fun2694
                                            }
                                            case 160: var15 = var3.isNaN;
                                            var14 = var12.slice;
                                            var14 = var14.bind(var12)(var2);
                                            var14 = var14 - 0;
                                            var14 = var15.bind(var0)(var14);
                                            var13 = !var14;
                                            case 187: if (!var13) {
                                                _fun2694_ip = 112;
                                                continue _fun2694
                                            }
                                            case 190: var11[var12] = var0;
                                            _fun2694_ip = 112;
                                            continue _fun2694;
                                        }
                                case 196:
                                    return var0;
                            }
                        };
                        var1.reset = var4;
                        var4 = function() { // Original name: stop, environment: var3
                            _fun2695: for (var _fun2695_ip = 0;;) switch (_fun2695_ip) {
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
                                        _fun2695_ip = 50;
                                        continue _fun2695
                                    }
                                case 42:
                                    var1 = var1.rval;
                                    return var1;
                                case 50:
                                    var0 = var0.arg;
                                    throw var0;
                            }
                        };
                        var1.stop = var4;
                        var4 = function(arg0) { // Original name: dispatchException, environment: var3
                            _fun2696: for (var _fun2696_ip = 0;;) switch (_fun2696_ip) {
                                case 0:
                                    var0 = arg0;
                                    var12 = this;
                                    var _closure3_slot0 = var0;
                                    var3 = function(arg0, arg1) { // Original name: handle, environment: var13
                                        _fun2697: for (var _fun2697_ip = 0;;) switch (_fun2697_ip) {
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
                                                    _fun2697_ip = 76;
                                                    continue _fun2697
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
                                        _fun2696_ip = 373;
                                        continue _fun2696
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
                                        _fun2696_ip = 331;
                                        continue _fun2696
                                    }
                                case 80:
                                    var1 = var12.tryEntries;
                                    var1 = var1[var11];
                                    var14 = var1.completion;
                                    var _closure3_slot2 = var14;
                                    var14 = var1.tryLoc;
                                    if (!(var6 !== var14)) {
                                        _fun2696_ip = 362;
                                        continue _fun2696
                                    }
                                case 113:
                                    var15 = var1.tryLoc;
                                    var14 = var12.prev;
                                    if (!(var15 <= var14)) {
                                        _fun2696_ip = 321;
                                        continue _fun2696
                                    }
                                case 132:
                                    var15 = _closure2_slot1;
                                    var14 = var15.call;
                                    var17 = var14.bind(var15)(var1, var8);
                                    var15 = _closure2_slot1;
                                    var14 = var15.call;
                                    var16 = var14.bind(var15)(var1, var7);
                                    if (!var17) {
                                        _fun2696_ip = 168;
                                        continue _fun2696
                                    }
                                case 165:
                                    if (var16) {
                                        _fun2696_ip = 283;
                                        continue _fun2696
                                    }
                                case 168:
                                    if (var17) {
                                        _fun2696_ip = 245;
                                        continue _fun2696
                                    }
                                case 171:
                                    if (var16) {
                                        _fun2696_ip = 210;
                                        continue _fun2696
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
                                        _fun2696_ip = 321;
                                        continue _fun2696
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
                                        _fun2696_ip = 321;
                                        continue _fun2696
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
                                        _fun2696_ip = 346;
                                        continue _fun2696
                                    }
                                case 299:
                                    var15 = var12.prev;
                                    var14 = var1.finallyLoc;
                                    var5 = var17;
                                    var4 = var16;
                                    if (!(!(var15 < var14))) {
                                        _fun2696_ip = 333;
                                        continue _fun2696
                                    }
                                case 321:
                                    var11 = var11 - 1;
                                    if (var11 >= var10) {
                                        _fun2696_ip = 80;
                                        continue _fun2696
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
                        var1.dispatchException = var4;
                        var4 = function(arg0, arg1) { // Original name: abrupt, environment: var3
                            _fun2698: for (var _fun2698_ip = 0;;) switch (_fun2698_ip) {
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
                                        _fun2698_ip = 114;
                                        continue _fun2698
                                    }
                                case 42:
                                    var9 = var3.tryEntries;
                                    var11 = var9[var8];
                                    var10 = var11.tryLoc;
                                    var9 = var3.prev;
                                    if (!(var10 <= var9)) {
                                        _fun2698_ip = 105;
                                        continue _fun2698
                                    }
                                case 68:
                                    var10 = _closure2_slot1;
                                    var9 = var10.call;
                                    var9 = var9.bind(var10)(var11, var4);
                                    if (!var9) {
                                        _fun2698_ip = 105;
                                        continue _fun2698
                                    }
                                case 86:
                                    var10 = var3.prev;
                                    var9 = var11.finallyLoc;
                                    var2 = var11;
                                    if (!(!(var10 < var9))) {
                                        _fun2698_ip = 114;
                                        continue _fun2698
                                    }
                                case 105:
                                    var8 = var8 - 1;
                                    var2 = undefined;
                                    if (var8 >= var6) {
                                        _fun2698_ip = 42;
                                        continue _fun2698
                                    }
                                case 114:
                                    var4 = var2;
                                    if (!var2) {
                                        _fun2698_ip = 142;
                                        continue _fun2698
                                    }
                                case 120:
                                    var6 = 'break';
                                    var6 = var6 === var5;
                                    if (var6) {
                                        _fun2698_ip = 139;
                                        continue _fun2698
                                    }
                                case 131:
                                    var7 = 'continue';
                                    var6 = var7 === var5;
                                case 139:
                                    var4 = var6;
                                case 142:
                                    if (!var4) {
                                        _fun2698_ip = 155;
                                        continue _fun2698
                                    }
                                case 145:
                                    var6 = var2.tryLoc;
                                    var4 = var6 <= var0;
                                case 155:
                                    if (!var4) {
                                        _fun2698_ip = 168;
                                        continue _fun2698
                                    }
                                case 158:
                                    var6 = var2.finallyLoc;
                                    var4 = var0 <= var6;
                                case 168:
                                    if (!var4) {
                                        _fun2698_ip = 173;
                                        continue _fun2698
                                    }
                                case 171:
                                    var2 = null;
                                case 173:
                                    if (var2) {
                                        _fun2698_ip = 180;
                                        continue _fun2698
                                    }
                                case 176:
                                    var4 = {};
                                    _fun2698_ip = 186;
                                    continue _fun2698;
                                case 180:
                                    var4 = var2.completion;
                                case 186:
                                    var4.type = var5;
                                    var4.arg = var0;
                                    if (var2) {
                                        _fun2698_ip = 214;
                                        continue _fun2698
                                    }
                                case 201:
                                    var0 = var3.complete;
                                    var0 = var0.bind(var3)(var4);
                                    _fun2698_ip = 240;
                                    continue _fun2698;
                                case 214:
                                    var4 = 'next';
                                    var3.method = var4;
                                    var2 = var2.finallyLoc;
                                    var3.next = var2;
                                    var0 = _closure2_slot9;
                                case 240:
                                    return var0;
                            }
                        };
                        var1.abrupt = var4;
                        var4 = function(arg0, arg1) { // Original name: complete, environment: var3
                            _fun2699: for (var _fun2699_ip = 0;;) switch (_fun2699_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = arg1;
                                    var2 = this;
                                    var4 = var0.type;
                                    var1 = 'throw';
                                    if (!(var1 !== var4)) {
                                        _fun2699_ip = 151;
                                        continue _fun2699
                                    }
                                case 25:
                                    var4 = var0.type;
                                    var1 = 'break';
                                    if (!(var1 !== var4)) {
                                        _fun2699_ip = 130;
                                        continue _fun2699
                                    }
                                case 38:
                                    var4 = var0.type;
                                    var1 = 'continue';
                                    if (!(var1 !== var4)) {
                                        _fun2699_ip = 130;
                                        continue _fun2699
                                    }
                                case 51:
                                    var4 = var0.type;
                                    var1 = 'return';
                                    if (!(var1 !== var4)) {
                                        _fun2699_ip = 94;
                                        continue _fun2699
                                    }
                                case 64:
                                    var5 = var0.type;
                                    var4 = 'normal';
                                    var4 = var4 === var5;
                                    if (!var4) {
                                        _fun2699_ip = 83;
                                        continue _fun2699
                                    }
                                case 80:
                                    var4 = var3;
                                case 83:
                                    if (!var4) {
                                        _fun2699_ip = 142;
                                        continue _fun2699
                                    }
                                case 86:
                                    var2.next = var3;
                                    _fun2699_ip = 142;
                                    continue _fun2699;
                                case 94:
                                    var3 = var0.arg;
                                    var2.arg = var3;
                                    var2.rval = var3;
                                    var2.method = var1;
                                    var1 = 'end';
                                    var2.next = var1;
                                    _fun2699_ip = 142;
                                    continue _fun2699;
                                case 130:
                                    var1 = var0.arg;
                                    var2.next = var1;
                                case 142:
                                    var1 = _closure2_slot9;
                                    return var1;
                                case 151:
                                    var0 = var0.arg;
                                    throw var0;
                            }
                        };
                        var1.complete = var4;
                        var4 = function(arg0) { // Original name: finish, environment: var3
                            _fun2700: for (var _fun2700_ip = 0;;) switch (_fun2700_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = this;
                                    var0 = var4.tryEntries;
                                    var1 = var0.length;
                                    var0 = 1;
                                    var1 = var1 - var0;
                                    var0 = 0;
                                    if (!(var1 >= var0)) {
                                        _fun2700_ip = 57;
                                        continue _fun2700
                                    }
                                case 30:
                                    var3 = var4.tryEntries;
                                    var3 = var3[var1];
                                    var5 = var3.finallyLoc;
                                    if (!(var5 !== var2)) {
                                        _fun2700_ip = 61;
                                        continue _fun2700
                                    }
                                case 50:
                                    var1 = var1 - 1;
                                    if (var1 >= var0) {
                                        _fun2700_ip = 30;
                                        continue _fun2700
                                    }
                                case 57:
                                    var0 = undefined;
                                    return var0;
                                case 61:
                                    var2 = var4.complete;
                                    var1 = var3.completion;
                                    var0 = var3.afterLoc;
                                    var0 = var2.bind(var4)(var1, var0);
                                    var2 = _closure2_slot21;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var3);
                                    var0 = _closure2_slot9;
                                    return var0;
                            }
                        };
                        var1.finish = var4;
                        var4 = function(arg0) { // Original name: _catch, environment: var3
                            _fun2701: for (var _fun2701_ip = 0;;) switch (_fun2701_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = this;
                                    var0 = var2.tryEntries;
                                    var1 = var0.length;
                                    var0 = 1;
                                    var1 = var1 - var0;
                                    var0 = 0;
                                    if (!(var1 >= var0)) {
                                        _fun2701_ip = 57;
                                        continue _fun2701
                                    }
                                case 30:
                                    var4 = var2.tryEntries;
                                    var4 = var4[var1];
                                    var5 = var4.tryLoc;
                                    if (!(var5 !== var3)) {
                                        _fun2701_ip = 93;
                                        continue _fun2701
                                    }
                                case 50:
                                    var1 = var1 - 1;
                                    if (var1 >= var0) {
                                        _fun2701_ip = 30;
                                        continue _fun2701
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
                                        _fun2701_ip = 134;
                                        continue _fun2701
                                    }
                                case 116:
                                    var0 = var1.arg;
                                    var2 = _closure2_slot21;
                                    var2 = var2.bind(var3)(var4);
                                case 134:
                                    return var0;
                            }
                        };
                        var1.catch = var4;
                        var3 = function(arg0, arg1, arg2) { // Original name: delegateYield, environment: var3
                            _fun2702: for (var _fun2702_ip = 0;;) switch (_fun2702_ip) {
                                case 0:
                                    var2 = this;
                                    var3 = {};
                                    var5 = _closure2_slot23;
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
                                        _fun2702_ip = 68;
                                        continue _fun2702
                                    }
                                case 62:
                                    var2.arg = var1;
                                case 68:
                                    var0 = _closure2_slot9;
                                    return var0;
                            }
                        };
                        var1.delegateYield = var3;
                        var2.prototype = var1;
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var3);
        case 39: // try_start_0
            var3 = var1;
            var2 = global;
            var2.regeneratorRuntime = var3;
        case 50: // try_end0
            _fun2652_ip = 113;
            continue _fun2652;
        case 52: // catch_target0
            CatchBlockStart(arg_register = 2);
            var2 = global;
            var3 = var2.globalThis;
            var3 = typeof var3;
            if (!(var4 !== var3)) {
                _fun2652_ip = 101;
                continue _fun2652
            }
        case 69:
            var5 = var2.Function;
            var4 = 'r';
            var3 = 'regeneratorRuntime = r';
            var4 = var5.bind(var0)(var4, var3);
            var3 = var1;
            var3 = var4.bind(var0)(var3);
            _fun2652_ip = 113;
            continue _fun2652;
        case 101:
            var2 = var2.globalThis;
            var2.regeneratorRuntime = var1;
        case 113:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);