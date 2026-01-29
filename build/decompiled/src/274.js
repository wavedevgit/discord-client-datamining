// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3400: for (var _fun3400_ip = 0;;) switch (_fun3400_ip) {
        case 0:
            var1 = exports;
            var0 = function(arg0, arg1) { // Original name: push, environment: var4
                _fun3401: for (var _fun3401_ip = 0;;) switch (_fun3401_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var4 = var6.length;
                        var0 = var6.push;
                        var0 = var0.bind(var6)(var5);
                        var3 = 0;
                        var2 = 1;
                        var0 = undefined;
                        if (!(var3 < var4)) {
                            _fun3401_ip = 76;
                            continue _fun3401
                        }
                    case 35:
                        var7 = var4 - var2;
                        var7 = var7 >>> var2;
                        var8 = var6[var7];
                        var9 = _closure1_slot24;
                        var9 = var9.bind(var0)(var8, var5);
                        if (!(var3 < var9)) {
                            _fun3401_ip = 76;
                            continue _fun3401
                        }
                    case 61:
                        var6[var7] = var5;
                        var6[var4] = var8;
                        var4 = var7;
                        if (var3 < var4) {
                            _fun3401_ip = 35;
                            continue _fun3401
                        }
                    case 76:
                        return var0;
                }
            };
            var _closure1_slot21 = var0;
            var0 = function(arg0) { // Original name: peek, environment: var4
                _fun3402: for (var _fun3402_ip = 0;;) switch (_fun3402_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.length;
                        var1 = 0;
                        var0 = null;
                        if (!(var1 !== var3)) {
                            _fun3402_ip = 20;
                            continue _fun3402
                        }
                    case 16:
                        var0 = var2[var1];
                    case 20:
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function(arg0) { // Original name: pop, environment: var4
                _fun3403: for (var _fun3403_ip = 0;;) switch (_fun3403_ip) {
                    case 0:
                        var10 = arg0;
                        var0 = var10.length;
                        var9 = 0;
                        if (!(var9 !== var0)) {
                            _fun3403_ip = 188;
                            continue _fun3403
                        }
                    case 17:
                        var0 = var10[var9];
                        var1 = var10.pop;
                        var8 = var1.bind(var10)();
                        if (!(var8 !== var0)) {
                            _fun3403_ip = 186;
                            continue _fun3403
                        }
                    case 38:
                        var10[var9] = var8;
                        var7 = var10.length;
                        var6 = 1;
                        var5 = var7 >>> var6;
                        var3 = undefined;
                        var2 = 2;
                        var1 = 0;
                        if (!(var1 < var5)) {
                            _fun3403_ip = 186;
                            continue _fun3403
                        }
                    case 68:
                        var11 = var1 + var6;
                        var11 = var2 * var11;
                        var14 = var11 - var6;
                        var15 = var10[var14];
                        var12 = var14 + var6;
                        var13 = var10[var12];
                        var11 = _closure1_slot24;
                        var11 = var11.bind(var3)(var15, var8);
                        if (!(!(var9 > var11))) {
                            _fun3403_ip = 137;
                            continue _fun3403
                        }
                    case 106:
                        if (!(var12 < var7)) {
                            _fun3403_ip = 186;
                            continue _fun3403
                        }
                    case 110:
                        var11 = _closure1_slot24;
                        var11 = var11.bind(var3)(var13, var8);
                        if (!(var9 > var11)) {
                            _fun3403_ip = 186;
                            continue _fun3403
                        }
                    case 124:
                        var10[var1] = var13;
                        var10[var12] = var8;
                        var11 = var12;
                        _fun3403_ip = 179;
                        continue _fun3403;
                    case 137:
                        if (!(var12 < var7)) {
                            _fun3403_ip = 155;
                            continue _fun3403
                        }
                    case 141:
                        var16 = _closure1_slot24;
                        var16 = var16.bind(var3)(var13, var15);
                        if (!(!(var9 > var16))) {
                            _fun3403_ip = 168;
                            continue _fun3403
                        }
                    case 155:
                        var10[var1] = var15;
                        var10[var14] = var8;
                        var11 = var14;
                        _fun3403_ip = 179;
                        continue _fun3403;
                    case 168:
                        var10[var1] = var13;
                        var10[var12] = var8;
                        var11 = var12;
                    case 179:
                        var1 = var11;
                        if (var1 < var5) {
                            _fun3403_ip = 68;
                            continue _fun3403
                        }
                    case 186:
                        return var0;
                    case 188:
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var0 = function(arg0, arg1) { // Original name: compare, environment: var4
                _fun3404: for (var _fun3404_ip = 0;;) switch (_fun3404_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = arg1;
                        var3 = var2.sortIndex;
                        var0 = var1.sortIndex;
                        var0 = var3 - var0;
                        var3 = 0;
                        if (!(var3 === var0)) {
                            _fun3404_ip = 42;
                            continue _fun3404
                        }
                    case 28:
                        var2 = var2.id;
                        var1 = var1.id;
                        var0 = var2 - var1;
                    case 42:
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function(arg0) { // Original name: advanceTimers, environment: var4
                _fun3405: for (var _fun3405_ip = 0;;) switch (_fun3405_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot22;
                        var1 = _closure1_slot5;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = null;
                        if (!(var2 !== var1)) {
                            _fun3405_ip = 118;
                            continue _fun3405
                        }
                    case 27:
                        var5 = var1.callback;
                        if (!(var2 !== var5)) {
                            _fun3405_ip = 88;
                            continue _fun3405
                        }
                    case 37:
                        var5 = var1.startTime;
                        if (!(var5 <= var4)) {
                            _fun3405_ip = 118;
                            continue _fun3405
                        }
                    case 47:
                        var6 = _closure1_slot23;
                        var5 = _closure1_slot5;
                        var5 = var6.bind(var0)(var5);
                        var5 = var1.expirationTime;
                        var1.sortIndex = var5;
                        var6 = _closure1_slot21;
                        var5 = _closure1_slot4;
                        var5 = var6.bind(var0)(var5, var1);
                        _fun3405_ip = 101;
                        continue _fun3405;
                    case 88:
                        var6 = _closure1_slot23;
                        var5 = _closure1_slot5;
                        var5 = var6.bind(var0)(var5);
                    case 101:
                        var6 = _closure1_slot22;
                        var5 = _closure1_slot5;
                        var1 = var6.bind(var0)(var5);
                        if (var2 !== var1) {
                            _fun3405_ip = 27;
                            continue _fun3405
                        }
                    case 118:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function(arg0) { // Original name: handleTimeout, environment: var4
                _fun3406: for (var _fun3406_ip = 0;;) switch (_fun3406_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = false;
                        _closure1_slot11 = var0;
                        var2 = _closure1_slot25;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var5);
                        var2 = _closure1_slot10;
                        if (var2) {
                            _fun3406_ip = 117;
                            continue _fun3406
                        }
                    case 30:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot4;
                        var2 = var3.bind(var0)(var2);
                        var3 = null;
                        if (!(var3 === var2)) {
                            _fun3406_ip = 92;
                            continue _fun3406
                        }
                    case 49:
                        var4 = _closure1_slot22;
                        var2 = _closure1_slot5;
                        var2 = var4.bind(var0)(var2);
                        if (!(var3 !== var2)) {
                            _fun3406_ip = 117;
                            continue _fun3406
                        }
                    case 66:
                        var4 = _closure1_slot29;
                        var3 = _closure1_slot26;
                        var2 = var2.startTime;
                        var2 = var2 - var5;
                        var2 = var4.bind(var0)(var3, var2);
                        _fun3406_ip = 117;
                        continue _fun3406;
                    case 92:
                        var2 = true;
                        _closure1_slot10 = var2;
                        var3 = _closure1_slot17;
                        if (var3) {
                            _fun3406_ip = 117;
                            continue _fun3406
                        }
                    case 105:
                        _closure1_slot17 = var2;
                        var1 = _closure1_slot16;
                        var1 = var1.bind(var0)();
                    case 117:
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var2 = function() { // Original name: shouldYieldToHost, environment: var4
                _fun3407: for (var _fun3407_ip = 0;;) switch (_fun3407_ip) {
                    case 0:
                        var2 = _closure1_slot12;
                        var0 = !var2;
                        var0 = !var0;
                        if (var2) {
                            _fun3407_ip = 44;
                            continue _fun3407
                        }
                    case 16:
                        var3 = _closure1_slot0;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var1 = _closure1_slot19;
                        var2 = var2 - var1;
                        var1 = 5;
                        var1 = var1 > var2;
                        var0 = !var1;
                    case 44:
                        return var0;
                }
            };
            var _closure1_slot27 = var2;
            var6 = function() { // Original name: performWorkUntilDeadline, environment: var4
                _fun3408: for (var _fun3408_ip = 0;;) switch (_fun3408_ip) {
                    case 0:
                        var2 = undefined;
                        var7 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var12 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        var3 = false;
                        _closure1_slot12 = var3;
                        var0 = _closure1_slot17;
                        if (!var0) {
                            _fun3408_ip = 495;
                            continue _fun3408
                        }
                    case 33:
                        var0 = _closure1_slot0;
                        var0 = var0.bind(var2)();
                        var7 = var0;
                        _closure1_slot19 = var0;
                        var6 = true;
                        var4 = true;
                    case 52: // try_start_1
                        _closure1_slot10 = var3;
                        var0 = _closure1_slot11;
                        if (!var0) {
                            _fun3408_ip = 90;
                            continue _fun3408
                        }
                    case 63:
                        _closure1_slot11 = var3;
                        var9 = _closure1_slot14;
                        var0 = _closure1_slot18;
                        var0 = var9.bind(var2)(var0);
                        var0 = -1;
                        _closure1_slot18 = var0;
                    case 90:
                        _closure1_slot9 = var6;
                        var5 = _closure1_slot8;
                    case 98: // try_start_0
                        var9 = _closure1_slot25;
                        var0 = var7;
                        var0 = var9.bind(var2)(var0);
                        var9 = _closure1_slot22;
                        var0 = _closure1_slot4;
                        var9 = var9.bind(var2)(var0);
                        _closure1_slot7 = var9;
                        var0 = null;
                        if (!(var0 !== var9)) {
                            _fun3408_ip = 402;
                            continue _fun3408
                        }
                    case 136:
                        var9 = _closure1_slot7;
                        var13 = var9.expirationTime;
                        var9 = var7;
                        var11 = 'function';
                        if (!(var13 > var9)) {
                            _fun3408_ip = 171;
                            continue _fun3408
                        }
                    case 157:
                        var9 = _closure1_slot27;
                        var9 = var9.bind(var2)();
                        if (var9) {
                            _fun3408_ip = 402;
                            continue _fun3408
                        }
                    case 171:
                        var9 = _closure1_slot7;
                        var9 = var9.callback;
                        var12 = var9;
                        var9 = typeof var9;
                        if (!(var11 !== var9)) {
                            _fun3408_ip = 206;
                            continue _fun3408
                        }
                    case 191:
                        var13 = _closure1_slot23;
                        var9 = _closure1_slot4;
                        var9 = var13.bind(var2)(var9);
                        _fun3408_ip = 319;
                        continue _fun3408;
                    case 206:
                        var9 = _closure1_slot7;
                        var9.callback = var0;
                        var9 = _closure1_slot7;
                        var9 = var9.priorityLevel;
                        _closure1_slot8 = var9;
                        var13 = var12;
                        var9 = _closure1_slot7;
                        var14 = var9.expirationTime;
                        var9 = var7;
                        var9 = var14 <= var9;
                        var9 = var13.bind(var2)(var9);
                        var8 = var9;
                        var13 = _closure1_slot0;
                        var7 = var13.bind(var2)();
                        var9 = typeof var9;
                        if (!(var11 !== var9)) {
                            _fun3408_ip = 376;
                            continue _fun3408
                        }
                    case 273:
                        var13 = _closure1_slot7;
                        var14 = _closure1_slot22;
                        var9 = _closure1_slot4;
                        var9 = var14.bind(var2)(var9);
                        if (!(var13 === var9)) {
                            _fun3408_ip = 307;
                            continue _fun3408
                        }
                    case 294:
                        var13 = _closure1_slot23;
                        var9 = _closure1_slot4;
                        var9 = var13.bind(var2)(var9);
                    case 307:
                        var13 = _closure1_slot25;
                        var9 = var7;
                        var9 = var13.bind(var2)(var9);
                    case 319:
                        var13 = _closure1_slot22;
                        var9 = _closure1_slot4;
                        var9 = var13.bind(var2)(var9);
                        _closure1_slot7 = var9;
                        if (!(var0 !== var9)) {
                            _fun3408_ip = 402;
                            continue _fun3408
                        }
                    case 340:
                        var9 = _closure1_slot7;
                        var13 = var9.expirationTime;
                        var9 = var7;
                        if (!(var13 > var9)) {
                            _fun3408_ip = 171;
                            continue _fun3408
                        }
                    case 360:
                        var9 = _closure1_slot27;
                        var9 = var9.bind(var2)();
                        if (var9) {
                            _fun3408_ip = 402;
                            continue _fun3408
                        }
                    case 371:
                        _fun3408_ip = 171;
                        continue _fun3408;
                    case 376:
                        var9 = _closure1_slot7;
                        var9.callback = var8;
                        var9 = _closure1_slot25;
                        var8 = var7;
                        var8 = var9.bind(var2)(var8);
                        var4 = true;
                        _fun3408_ip = 460;
                        continue _fun3408;
                    case 402:
                        var8 = _closure1_slot7;
                        if (!(var0 === var8)) {
                            _fun3408_ip = 458;
                            continue _fun3408
                        }
                    case 410:
                        var9 = _closure1_slot22;
                        var8 = _closure1_slot5;
                        var8 = var9.bind(var2)(var8);
                        var10 = var8;
                        if (!(var0 !== var8)) {
                            _fun3408_ip = 454;
                            continue _fun3408
                        }
                    case 430:
                        var9 = _closure1_slot29;
                        var8 = _closure1_slot26;
                        var10 = var10.startTime;
                        var7 = var10 - var7;
                        var7 = var9.bind(var2)(var8, var7);
                    case 454:
                        var4 = false;
                        _fun3408_ip = 460;
                        continue _fun3408;
                    case 458:
                        var4 = true;
                    case 460: // try_end0
                        _closure1_slot7 = var0;
                        var0 = var5;
                        _closure1_slot8 = var0;
                        _closure1_slot9 = var3;
                    case 475: // try_end1
                        var0 = var4;
                        if (var0) {
                            _fun3408_ip = 487;
                            continue _fun3408
                        }
                    case 481:
                        _closure1_slot17 = var3;
                        _fun3408_ip = 495;
                        continue _fun3408;
                    case 487:
                        var0 = _closure1_slot16;
                        var0 = var0.bind(var2)();
                    case 495:
                        return var2;
                    case 497: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var6 = null;
                        _closure1_slot7 = var6;
                        _closure1_slot8 = var5;
                        _closure1_slot9 = var3;
                        throw var0;
                    case 515: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 0);
                        if (var4) {
                            _fun3408_ip = 526;
                            continue _fun3408
                        }
                    case 520:
                        _closure1_slot17 = var3;
                        _fun3408_ip = 534;
                        continue _fun3408;
                    case 526:
                        var1 = _closure1_slot16;
                        var1 = var1.bind(var2)();
                    case 534:
                        throw var0;
                }
            };
            var _closure1_slot28 = var6;
            var0 = function(arg0, arg1) { // Original name: requestHostTimeout, environment: var4
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot13;
                var0 = undefined;
                var3 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = arg1;
                var1 = var4.bind(var0)(var3, var1);
                _closure1_slot18 = var1;
                return var0;
            };
            var _closure1_slot29 = var0;
            var0 = function() { // Original name: throwNotImplemented, environment: var4
                var0 = global;
                var2 = var0.Error;
                var1 = undefined;
                var0 = 'Not implemented.';
                var0 = var2.bind(var1)(var0);
                throw var0;
            };
            var14 = global;
            var3 = var14.performance;
            var5 = 'object';
            var3 = typeof var3;
            if (!(var5 === var3)) {
                _fun3400_ip = 132;
                continue _fun3400
            }
        case 110:
            var3 = var14.performance;
            var3 = var3.now;
            var5 = 'function';
            var3 = typeof var3;
            if (!(var5 !== var3)) {
                _fun3400_ip = 166;
                continue _fun3400
            }
        case 132:
            var5 = var14.Date;
            var _closure1_slot2 = var5;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            var _closure1_slot3 = var3;
            var5 = function() { // Original name: getCurrentTime, environment: var4
                var2 = _closure1_slot2;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var0 = _closure1_slot3;
                var0 = var1 - var0;
                return var0;
            };
            var _closure1_slot0 = var5;
            _fun3400_ip = 188;
            continue _fun3400;
        case 166:
            var3 = var14.performance;
            var _closure1_slot1 = var3;
            var3 = function() { // Original name: getCurrentTime, environment: var4
                var1 = _closure1_slot1;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
            _closure1_slot0 = var3;
            var5 = var3;
        case 188:
            var3 = new Array(0);
            var _closure1_slot4 = var3;
            var3 = new Array(0);
            var _closure1_slot5 = var3;
            var12 = 1;
            var _closure1_slot6 = var12;
            var9 = null;
            var _closure1_slot7 = var9;
            var10 = 3;
            var _closure1_slot8 = var10;
            var8 = false;
            var _closure1_slot9 = var8;
            var _closure1_slot10 = var8;
            var _closure1_slot11 = var8;
            var _closure1_slot12 = var8;
            var3 = var14.setTimeout;
            var7 = 'function';
            var11 = typeof var3;
            var3 = null;
            if (!(var7 === var11)) {
                _fun3400_ip = 266;
                continue _fun3400
            }
        case 260:
            var3 = var14.setTimeout;
        case 266:
            var _closure1_slot13 = var3;
            var3 = var14.clearTimeout;
            var11 = typeof var3;
            var3 = null;
            if (!(var7 === var11)) {
                _fun3400_ip = 291;
                continue _fun3400
            }
        case 285:
            var3 = var14.clearTimeout;
        case 291:
            var _closure1_slot14 = var3;
            var3 = var14.setImmediate;
            var16 = 'undefined';
            var11 = typeof var3;
            var3 = null;
            if (!(var16 !== var11)) {
                _fun3400_ip = 320;
                continue _fun3400
            }
        case 314:
            var3 = var14.setImmediate;
        case 320:
            var _closure1_slot15 = var3;
            var _closure1_slot17 = var8;
            var8 = -1;
            var _closure1_slot18 = var8;
            var _closure1_slot19 = var8;
            var3 = typeof var3;
            if (!(var7 !== var3)) {
                _fun3400_ip = 432;
                continue _fun3400
            }
        case 349:
            var3 = var14.MessageChannel;
            var3 = typeof var3;
            if (!(var16 === var3)) {
                _fun3400_ip = 373;
                continue _fun3400
            }
        case 362:
            var3 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: var4
                var3 = _closure1_slot13;
                var2 = _closure1_slot28;
                var0 = undefined;
                var1 = 0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot16 = var3;
            _fun3400_ip = 441;
            continue _fun3400;
        case 373:
            var3 = var14.MessageChannel;
            var7 = var3.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var3
                }
            });
            var17 = var7;
            var3 = new var17[var3](var16);
            var3 = var3 instanceof Object ? var3 : var7;
            var7 = var3.port2;
            var _closure1_slot20 = var7;
            var3 = var3.port1;
            var3.onmessage = var6;
            var3 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: var4
                var2 = _closure1_slot20;
                var1 = var2.postMessage;
                var0 = null;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            _closure1_slot16 = var3;
            _fun3400_ip = 441;
            continue _fun3400;
        case 432:
            var3 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: var4
                var2 = _closure1_slot15;
                var1 = _closure1_slot28;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            _closure1_slot16 = var3;
        case 441:
            var3 = var14.nativeRuntimeScheduler;
            var8 = 2;
            var3 = typeof var3;
            if (!(var16 !== var3)) {
                _fun3400_ip = 469;
                continue _fun3400
            }
        case 457:
            var3 = var14.nativeRuntimeScheduler;
            var8 = var3.unstable_UserBlockingPriority;
        case 469:
            var3 = var14.nativeRuntimeScheduler;
            var3 = typeof var3;
            if (!(var16 !== var3)) {
                _fun3400_ip = 494;
                continue _fun3400
            }
        case 482:
            var3 = var14.nativeRuntimeScheduler;
            var10 = var3.unstable_NormalPriority;
        case 494:
            var3 = var14.nativeRuntimeScheduler;
            var11 = 4;
            var3 = typeof var3;
            if (!(var16 !== var3)) {
                _fun3400_ip = 522;
                continue _fun3400
            }
        case 510:
            var3 = var14.nativeRuntimeScheduler;
            var11 = var3.unstable_LowPriority;
        case 522:
            var3 = var14.nativeRuntimeScheduler;
            var3 = typeof var3;
            if (!(var16 !== var3)) {
                _fun3400_ip = 547;
                continue _fun3400
            }
        case 535:
            var3 = var14.nativeRuntimeScheduler;
            var12 = var3.unstable_ImmediatePriority;
        case 547:
            var3 = var14.nativeRuntimeScheduler;
            var3 = typeof var3;
            if (!(var16 === var3)) {
                _fun3400_ip = 567;
                continue _fun3400
            }
        case 560:
            var3 = function(arg0, arg1, arg2) { // Original name: unstable_scheduleCallback$1, environment: var4
                _fun3417: for (var _fun3417_ip = 0;;) switch (_fun3417_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg2;
                        var1 = _closure1_slot0;
                        var4 = undefined;
                        var5 = var1.bind(var4)();
                        var6 = 'object';
                        var3 = typeof var0;
                        var1 = var5;
                        if (!(var6 === var3)) {
                            _fun3417_ip = 78;
                            continue _fun3417
                        }
                    case 33:
                        var3 = null;
                        var1 = var5;
                        if (!(var3 !== var0)) {
                            _fun3417_ip = 78;
                            continue _fun3417
                        }
                    case 42:
                        var3 = var0.delay;
                        var8 = 'number';
                        var6 = typeof var3;
                        var0 = var5;
                        if (!(var8 === var6)) {
                            _fun3417_ip = 75;
                            continue _fun3417
                        }
                    case 62:
                        var6 = 0;
                        var0 = var5;
                        if (!(var6 < var3)) {
                            _fun3417_ip = 75;
                            continue _fun3417
                        }
                    case 71:
                        var0 = var5 + var3;
                    case 75:
                        var1 = var0;
                    case 78:
                        var3 = -1;
                        var0 = 1;
                        var6 = var3;
                        if (!(var0 !== var7)) {
                            _fun3417_ip = 142;
                            continue _fun3417
                        }
                    case 94:
                        var0 = 2;
                        if (!(var0 !== var7)) {
                            _fun3417_ip = 139;
                            continue _fun3417
                        }
                    case 101:
                        var0 = 5;
                        if (!(var0 !== var7)) {
                            _fun3417_ip = 131;
                            continue _fun3417
                        }
                    case 108:
                        var0 = 4;
                        if (!(var0 !== var7)) {
                            _fun3417_ip = 123;
                            continue _fun3417
                        }
                    case 115:
                        var6 = 5000;
                        _fun3417_ip = 142;
                        continue _fun3417;
                    case 123:
                        var6 = 10000;
                        _fun3417_ip = 142;
                        continue _fun3417;
                    case 131:
                        var6 = 1073741823;
                        _fun3417_ip = 142;
                        continue _fun3417;
                    case 139:
                        var6 = 250;
                    case 142:
                        var0 = {};
                        var8 = _closure1_slot6;
                        var8 = parseFloat(var8);
                        var9 = var8 + 1;
                        _closure1_slot6 = var9;
                        var0.id = var8;
                        var8 = arg1;
                        var0.callback = var8;
                        var0.priorityLevel = var7;
                        var0.startTime = var1;
                        var6 = var1 + var6;
                        var0.expirationTime = var6;
                        var0.sortIndex = var3;
                        if (!(!(var1 > var5))) {
                            _fun3417_ip = 265;
                            continue _fun3417
                        }
                    case 198:
                        var0.sortIndex = var6;
                        var7 = _closure1_slot21;
                        var6 = _closure1_slot4;
                        var6 = var7.bind(var4)(var6, var0);
                        var6 = _closure1_slot10;
                        if (var6) {
                            _fun3417_ip = 229;
                            continue _fun3417
                        }
                    case 225:
                        var6 = _closure1_slot9;
                    case 229:
                        if (var6) {
                            _fun3417_ip = 377;
                            continue _fun3417
                        }
                    case 235:
                        var6 = true;
                        _closure1_slot10 = var6;
                        var7 = _closure1_slot17;
                        if (var7) {
                            _fun3417_ip = 377;
                            continue _fun3417
                        }
                    case 251:
                        _closure1_slot17 = var6;
                        var6 = _closure1_slot16;
                        var6 = var6.bind(var4)();
                        _fun3417_ip = 377;
                        continue _fun3417;
                    case 265:
                        var0.sortIndex = var1;
                        var7 = _closure1_slot21;
                        var6 = _closure1_slot5;
                        var6 = var7.bind(var4)(var6, var0);
                        var7 = _closure1_slot22;
                        var6 = _closure1_slot4;
                        var7 = var7.bind(var4)(var6);
                        var6 = null;
                        var6 = var6 === var7;
                        if (!var6) {
                            _fun3417_ip = 324;
                            continue _fun3417
                        }
                    case 307:
                        var8 = _closure1_slot22;
                        var7 = _closure1_slot5;
                        var7 = var8.bind(var4)(var7);
                        var6 = var0 === var7;
                    case 324:
                        if (!var6) {
                            _fun3417_ip = 377;
                            continue _fun3417
                        }
                    case 327:
                        var6 = _closure1_slot11;
                        if (var6) {
                            _fun3417_ip = 342;
                            continue _fun3417
                        }
                    case 334:
                        var6 = true;
                        _closure1_slot11 = var6;
                        _fun3417_ip = 359;
                        continue _fun3417;
                    case 342:
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot18;
                        var6 = var7.bind(var4)(var6);
                        _closure1_slot18 = var3;
                    case 359:
                        var3 = _closure1_slot29;
                        var2 = _closure1_slot26;
                        var1 = var1 - var5;
                        var1 = var3.bind(var4)(var2, var1);
                    case 377:
                        return var0;
                }
            };
            _fun3400_ip = 579;
            continue _fun3400;
        case 567:
            var6 = var14.nativeRuntimeScheduler;
            var3 = var6.unstable_scheduleCallback;
        case 579:
            var6 = var14.nativeRuntimeScheduler;
            var6 = typeof var6;
            if (!(var16 === var6)) {
                _fun3400_ip = 599;
                continue _fun3400
            }
        case 592:
            var7 = function(arg0) { // Original name: unstable_cancelCallback$1, environment: var4
                var1 = null;
                var0 = arg0;
                var0.callback = var1;
                var0 = undefined;
                return var0;
            };
            _fun3400_ip = 611;
            continue _fun3400;
        case 599:
            var6 = var14.nativeRuntimeScheduler;
            var7 = var6.unstable_cancelCallback;
        case 611:
            var6 = var14.nativeRuntimeScheduler;
            var6 = typeof var6;
            if (!(var16 === var6)) {
                _fun3400_ip = 631;
                continue _fun3400
            }
        case 624:
            var6 = function() { // Original name: unstable_getCurrentPriorityLevel$1, environment: var4
                var0 = _closure1_slot8;
                return var0;
            };
            _fun3400_ip = 643;
            continue _fun3400;
        case 631:
            var13 = var14.nativeRuntimeScheduler;
            var6 = var13.unstable_getCurrentPriorityLevel;
        case 643:
            var13 = var14.nativeRuntimeScheduler;
            var13 = typeof var13;
            if (!(var16 !== var13)) {
                _fun3400_ip = 668;
                continue _fun3400
            }
        case 656:
            var13 = var14.nativeRuntimeScheduler;
            var2 = var13.unstable_shouldYield;
        case 668:
            var13 = var14.nativeRuntimeScheduler;
            var13 = typeof var13;
            if (!(var16 === var13)) {
                _fun3400_ip = 688;
                continue _fun3400
            }
        case 681:
            var4 = function() { // Original name: requestPaint, environment: var4
                var0 = true;
                _closure1_slot12 = var0;
                var0 = undefined;
                return var0;
            };
            _fun3400_ip = 700;
            continue _fun3400;
        case 688:
            var13 = var14.nativeRuntimeScheduler;
            var4 = var13.unstable_requestPaint;
        case 700:
            var13 = var14.nativeRuntimeScheduler;
            var13 = typeof var13;
            if (!(var16 !== var13)) {
                _fun3400_ip = 725;
                continue _fun3400
            }
        case 713:
            var13 = var14.nativeRuntimeScheduler;
            var5 = var13.unstable_now;
        case 725:
            var15 = var14.nativeRuntimeScheduler;
            var13 = 5;
            var15 = typeof var15;
            if (!(var16 !== var15)) {
                _fun3400_ip = 753;
                continue _fun3400
            }
        case 741:
            var14 = var14.nativeRuntimeScheduler;
            var13 = var14.unstable_IdlePriority;
        case 753:
            var1.unstable_IdlePriority = var13;
            var1.unstable_ImmediatePriority = var12;
            var1.unstable_LowPriority = var11;
            var1.unstable_NormalPriority = var10;
            var1.unstable_Profiling = var9;
            var1.unstable_UserBlockingPriority = var8;
            var1.unstable_cancelCallback = var7;
            var1.unstable_forceFrameRate = var0;
            var1.unstable_getCurrentPriorityLevel = var6;
            var1.unstable_next = var0;
            var1.unstable_now = var5;
            var1.unstable_requestPaint = var4;
            var1.unstable_runWithPriority = var0;
            var1.unstable_scheduleCallback = var3;
            var1.unstable_shouldYield = var2;
            var1.unstable_wrapCallback = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);