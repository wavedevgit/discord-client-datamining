// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var1
        var0 = function(arg0) { // Original name: AsyncFromSyncIteratorContinuation, environment: var3
            _fun10019: for (var _fun10019_ip = 0;;) switch (_fun10019_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun10019_ip = 72;
                        continue _fun10019
                    }
                case 24:
                    var2 = var3.done;
                    var _closure3_slot0 = var2;
                    var5 = var0.Promise;
                    var4 = var5.resolve;
                    var2 = var3.value;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.then;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = arg0;
                        var0.value = var1;
                        var1 = _closure3_slot0;
                        var0.done = var1;
                        return var0;
                    };
                    var1 = var2.bind(var4)(var1);
                    return var1;
                case 72:
                    var2 = var0.Promise;
                    var1 = var2.reject;
                    var4 = var0.TypeError;
                    var0 = ' is not an object.';
                    var6 = var3 + var0;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var0 = new var7[var4](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var0;
        var2 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var3
            var0 = arg0;
            var1 = this;
            var1.s = var0;
            var0 = var0.next;
            var1.n = var0;
            var0 = undefined;
            return var0;
        };
        _closure1_slot6 = var2;
        var1 = {
            's': null,
            'n': null
        };
        var4 = function() { // Original name: next, environment: var3
            var3 = this;
            var2 = undefined;
            var0 = undefined;
            var1 = _closure2_slot0;
            var5 = var3.n;
            var4 = var5.apply;
            var3 = var3.s;
            var0 = arguments;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.next = var4;
        var4 = function(arg0) { // Original name: _return, environment: var3
            _fun10023: for (var _fun10023_ip = 0;;) switch (_fun10023_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun10023_ip = 53;
                        continue _fun10023
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun10023_ip = 87;
                    continue _fun10023;
                case 53:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = {};
                    var4 = arg0;
                    var1.value = var4;
                    var4 = true;
                    var1.done = var4;
                    var0 = var2.bind(var3)(var1);
                case 87:
                    return var0;
            }
        };
        var1.return = var4;
        var3 = function(arg0) { // Original name: _throw, environment: var3
            _fun10024: for (var _fun10024_ip = 0;;) switch (_fun10024_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun10024_ip = 53;
                        continue _fun10024
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun10024_ip = 75;
                    continue _fun10024;
                case 53:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.reject;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 75:
                    return var0;
            }
        };
        var1.throw = var3;
        var2.prototype = var1;
        var2 = _closure1_slot6;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var5 = arg0;
        var6 = var1;
        var0 = new var6[var2](var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: processChunk, environment: var1
        _fun10025: for (var _fun10025_ip = 0;;) switch (_fun10025_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var12 = arg3;
                var2 = var0;
                if (!var2) {
                    _fun10025_ip = 215;
                    continue _fun10025
                }
            case 18:
                var5 = null;
                var3 = var5 == var0;
                var9 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun10025_ip = 37;
                    continue _fun10025
                }
            case 31:
                var4 = var0.promptFeedback;
            case 37:
                var6 = var5 != var4;
                var3 = false;
                if (!var6) {
                    _fun10025_ip = 212;
                    continue _fun10025
                }
            case 49:
                var6 = var4.blockReason;
                var3 = false;
                if (!var6) {
                    _fun10025_ip = 212;
                    continue _fun10025
                }
            case 63:
                var8 = var4.blockReasonMessage;
                if (!(var5 == var8)) {
                    _fun10025_ip = 79;
                    continue _fun10025
                }
            case 73:
                var8 = var4.blockReason;
            case 79:
                var11 = var12.setStatus;
                var6 = {};
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 4;
                var4 = var10[var4];
                var4 = var7.bind(var9)(var4);
                var4 = var4.SPAN_STATUS_ERROR;
                var6.code = var4;
                var4 = global;
                var5 = var4.HermesInternal;
                var13 = var5.concat;
                var5 = 'Content blocked: ';
                var13 = var13.bind(var5)(var8);
                var6.message = var13;
                var6 = var11.bind(var12)(var6);
                var6 = 5;
                var6 = var10[var6];
                var7 = var7.bind(var9)(var6);
                var6 = var7.captureException;
                var4 = var4.HermesInternal;
                var4 = var4.concat;
                var5 = var4.bind(var5)(var8);
                var4 = {};
                var8 = {
                    'handled': false,
                    'type': 'auto.ai.google_genai'
                };
                var4.mechanism = var8;
                var4 = var6.bind(var7)(var5, var4);
                var3 = true;
            case 212:
                var2 = !var3;
            case 215:
                if (!var2) {
                    _fun10025_ip = 817;
                    continue _fun10025
                }
            case 221:
                var2 = var0.responseId;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10025_ip = 250;
                    continue _fun10025
                }
            case 238:
                var2 = var0.responseId;
                var1.responseId = var2;
            case 250:
                var2 = var0.modelVersion;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10025_ip = 275;
                    continue _fun10025
                }
            case 263:
                var2 = var0.modelVersion;
                var1.responseModel = var2;
            case 275:
                var2 = var0.usageMetadata;
                if (!var2) {
                    _fun10025_ip = 363;
                    continue _fun10025
                }
            case 284:
                var3 = var2.promptTokenCount;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10025_ip = 313;
                    continue _fun10025
                }
            case 301:
                var3 = var2.promptTokenCount;
                var1.promptTokens = var3;
            case 313:
                var3 = var2.candidatesTokenCount;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10025_ip = 338;
                    continue _fun10025
                }
            case 326:
                var3 = var2.candidatesTokenCount;
                var1.completionTokens = var3;
            case 338:
                var3 = var2.totalTokenCount;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10025_ip = 363;
                    continue _fun10025
                }
            case 351:
                var2 = var2.totalTokenCount;
                var1.totalTokens = var2;
            case 363:
                var5 = var1;
                var6 = arg2;
                var4 = undefined;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var10 = undefined;
                var1 = global;
                var3 = var1.Array;
                var2 = var3.isArray;
                var1 = var0.functionCalls;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun10025_ip = 449;
                    continue _fun10025
                }
            case 406:
                var1 = var5;
                var11 = var1.toolCalls;
                var3 = var11.push;
                var2 = var3.apply;
                var12 = _closure1_slot3;
                var1 = var0.functionCalls;
                var1 = var12.bind(var4)(var1);
                var1 = var2.bind(var3)(var11, var1);
            case 449:
                var0 = var0.candidates;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun10025_ip = 465;
                    continue _fun10025
                }
            case 461:
                var0 = new Array(0);
            case 465:
                var2 = var0;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var0 = 'function';
            case 475:
                var13 = var2().value;
                var11 = var1;
                if (!(var11 !== var4)) {
                    _fun10025_ip = 817;
                    continue _fun10025
                }
            case 489: // try_start_1
                var7 = var13;
                var13 = var3 != var13;
                var12 = var13;
                if (!var13) {
                    _fun10025_ip = 511;
                    continue _fun10025
                }
            case 502:
                var13 = var7;
                var12 = var13.finishReason;
            case 511:
                var11 = var12;
                if (!var12) {
                    _fun10025_ip = 548;
                    continue _fun10025
                }
            case 517:
                var12 = var5;
                var14 = var12.finishReasons;
                var13 = var14.includes;
                var12 = var7;
                var12 = var12.finishReason;
                var12 = var13.bind(var14)(var12);
                var11 = !var12;
            case 548:
                if (!var11) {
                    _fun10025_ip = 579;
                    continue _fun10025
                }
            case 551:
                var11 = var5;
                var13 = var11.finishReasons;
                var12 = var13.push;
                var11 = var7;
                var11 = var11.finishReason;
                var11 = var12.bind(var13)(var11);
            case 579:
                var11 = var7;
                var12 = var3 == var11;
                var11 = undefined;
                if (var12) {
                    _fun10025_ip = 620;
                    continue _fun10025
                }
            case 591:
                var12 = var7;
                var12 = var12.content;
                var10 = var12;
                var12 = var3 == var12;
                var11 = undefined;
                if (var12) {
                    _fun10025_ip = 620;
                    continue _fun10025
                }
            case 611:
                var12 = var10;
                var11 = var12.parts;
            case 620:
                var9 = var11;
                if (!(var3 == var11)) {
                    _fun10025_ip = 633;
                    continue _fun10025
                }
            case 627:
                var13 = new Array(0);
                _fun10025_ip = 636;
                continue _fun10025;
            case 633:
                var13 = var9;
            case 636:
                var11 = var13;
                var12 = var11[Symbol.iterator];
                var11 = var12().next;
            case 642:
                var13 = var11().value;
                var14 = var12;
                if (!(var14 !== var4)) {
                    _fun10025_ip = 805;
                    continue _fun10025
                }
            case 656: // try_start_0
                var8 = var13;
                var14 = var6;
                var13 = var14;
                if (!var14) {
                    _fun10025_ip = 676;
                    continue _fun10025
                }
            case 668:
                var14 = var8;
                var13 = var14.text;
            case 676:
                if (!var13) {
                    _fun10025_ip = 706;
                    continue _fun10025
                }
            case 679:
                var13 = var5;
                var15 = var13.responseTexts;
                var14 = var15.push;
                var13 = var8;
                var13 = var13.text;
                var13 = var14.bind(var15)(var13);
            case 706:
                var13 = var8;
                var13 = var13.functionCall;
                if (!var13) {
                    _fun10025_ip = 793;
                    continue _fun10025
                }
            case 718:
                var13 = var5;
                var15 = var13.toolCalls;
                var14 = var15.push;
                var13 = {};
                var13.type = var0;
                var16 = var8;
                var17 = var16.functionCall;
                var17 = var17.id;
                var13.id = var17;
                var17 = var16.functionCall;
                var17 = var17.name;
                var13.name = var17;
                var16 = var16.functionCall;
                var16 = var16.args;
                var13.arguments = var16;
                var13 = var14.bind(var15)(var13);
            case 793: // try_end0
                _fun10025_ip = 642;
                continue _fun10025;
            case 798: // catch_target0
                CatchBlockStart(arg_register = 11);
                var12.return();
                throw var11;
            case 805: // try_end1
                _fun10025_ip = 475;
                continue _fun10025;
            case 810: // catch_target1
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 817:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: _instrumentStream, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun10028: for (var _fun10028_ip = 0;;) switch (_fun10028_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 8);
                        if (var8) {
                            _fun10028_ip = 6564;
                            continue _fun10028
                        }
                    case 10:
                        var9 = arg0;
                        var3 = arg1;
                        var7 = arg2;
                        var8 = undefined;
                        var4 = undefined;
                        var1 = undefined;
                        var11 = undefined;
                        var6 = undefined;
                        var18 = undefined;
                        var5 = undefined;
                        var2 = undefined;
                        var10 = {};
                        var12 = new Array(0);
                        var10.responseTexts = var12;
                        var12 = new Array(0);
                        var10.finishReasons = var12;
                        var12 = new Array(0);
                        var10.toolCalls = var12;
                        var4 = var10;
                    case 67: // try_start_8
                        var11 = false;
                        var6 = false;
                    case 71: // try_start_0 // try_start_1
                        var13 = var9;
                        var10 = global;
                        var9 = var10.Symbol;
                        var12 = 'undefined';
                        var9 = typeof var9;
                        var23 = undefined;
                        var22 = undefined;
                        if (!(var12 !== var9)) {
                            _fun10028_ip = 120;
                            continue _fun10028
                        }
                    case 96:
                        var9 = var10.Symbol;
                        var23 = var9.asyncIterator;
                        var9 = var10.Symbol;
                        var22 = var9.iterator;
                    case 120:
                        var21 = 1;
                        var20 = '@@asyncIterator';
                        var19 = '@@iterator';
                        var15 = null;
                        var16 = undefined;
                    case 137:
                        if (!var23) {
                            _fun10028_ip = 151;
                            continue _fun10028
                        }
                    case 140:
                        var12 = var13[var23];
                        var16 = var12;
                        if (!(var15 == var16)) {
                            _fun10028_ip = 253;
                            continue _fun10028
                        }
                    case 151:
                        if (!var22) {
                            _fun10028_ip = 165;
                            continue _fun10028
                        }
                    case 154:
                        var14 = var13[var22];
                        var16 = var14;
                        if (!(var15 == var16)) {
                            _fun10028_ip = 214;
                            continue _fun10028
                        }
                    case 165:
                        var9 = parseFloat(var21);
                        var21 = var9 - 1;
                        var23 = var20;
                        var22 = var19;
                        if (var9) {
                            _fun10028_ip = 137;
                            continue _fun10028
                        }
                    case 180:
                        var19 = var10.TypeError;
                        var9 = var19.prototype;
                        var16 = Object.create(var9, {
                            constructor: {
                                value: var19
                            }
                        });
                        var27 = 'Object is not async iterable';
                        var28 = var16;
                        var9 = new var28[var19](var27, var26);
                        var9 = var9 instanceof Object ? var9 : var16;
                        throw var9;
                    case 214:
                        var16 = _closure1_slot6;
                        var9 = var14.call;
                        var27 = var9.bind(var14)(var13);
                        var14 = var16.prototype;
                        var14 = Object.create(var14, {
                            constructor: {
                                value: var16
                            }
                        });
                        var28 = var14;
                        var9 = new var28[var16](var27, var26);
                        var14 = var9 instanceof Object ? var9 : var14;
                        _fun10028_ip = 263;
                        continue _fun10028;
                    case 253:
                        var9 = var12.call;
                        var14 = var9.bind(var12)(var13);
                    case 263:
                        var5 = var14;
                        var13 = _closure1_slot4;
                        var9 = var14.next;
                        var9 = var9.bind(var14)();
                        var13 = var13.bind(var8)(var9);
                        SaveGenerator(address = 291);
                    case 289:
                        return var13;
                    case 291:
                        ResumeGenerator(result_out_reg = 13, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10028_ip = 2869;
                            continue _fun10028
                        }
                    case 300:
                        var18 = var13;
                        var9 = var13.done;
                        var9 = !var9;
                        var11 = var9;
                        if (!var9) {
                            _fun10028_ip = 410;
                            continue _fun10028
                        }
                    case 317:
                        var9 = var18;
                        var14 = var9.value;
                        var20 = _closure1_slot7;
                        var26 = var4;
                        var25 = var7;
                        var24 = var3;
                        var28 = undefined;
                        var27 = var14;
                        var9 = var28[var20](var27, var26, var25, var24, var23);
                        SaveGenerator(address = 351);
                    case 349:
                        return var14;
                    case 351:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10028_ip = 1642;
                            continue _fun10028
                        }
                    case 360:
                        var11 = false;
                        var16 = _closure1_slot4;
                        var19 = var5;
                        var9 = var19.next;
                        var9 = var9.bind(var19)();
                        var16 = var16.bind(var8)(var9);
                        SaveGenerator(address = 387);
                    case 385:
                        return var16;
                    case 387:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10028_ip = 415;
                            continue _fun10028
                        }
                    case 393:
                        var18 = var16;
                        var9 = var16.done;
                        var9 = !var9;
                        var11 = var9;
                        if (var9) {
                            _fun10028_ip = 317;
                            continue _fun10028
                        }
                    case 410: // try_end0
                        _fun10028_ip = 4100;
                        continue _fun10028;
                    case 415: // try_start_2 // try_end1
                        var17 = var11;
                        var9 = var17;
                        if (!var17) {
                            _fun10028_ip = 437;
                            continue _fun10028
                        }
                    case 424:
                        var17 = var5;
                        var17 = var17.return;
                        var9 = var15 != var17;
                    case 437:
                        if (!var9) {
                            _fun10028_ip = 475;
                            continue _fun10028
                        }
                    case 440:
                        var17 = _closure1_slot4;
                        var18 = var5;
                        var9 = var18.return;
                        var9 = var9.bind(var18)();
                        var9 = var17.bind(var8)(var9);
                        SaveGenerator(address = 466);
                    case 464:
                        return var9;
                    case 466:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 17);
                        if (var17) {
                            _fun10028_ip = 1051;
                            continue _fun10028
                        }
                    case 475: // try_end2
                        var17 = var6;
                        if (var17) {
                            _fun10028_ip = 1046;
                            continue _fun10028
                        }
                    case 484: // try_end8
                        var21 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var20 = 6;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var19 = var17.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var18 = {};
                        var17 = true;
                        var2 = var21.bind(var8)(var18, var19, var17);
                        var17 = var4;
                        var17 = var17.responseId;
                        if (!var17) {
                            _fun10028_ip = 576;
                            continue _fun10028
                        }
                    case 537:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.responseId;
                        var19[var18] = var17;
                    case 576:
                        var17 = var4;
                        var17 = var17.responseModel;
                        if (!var17) {
                            _fun10028_ip = 627;
                            continue _fun10028
                        }
                    case 588:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.responseModel;
                        var19[var18] = var17;
                    case 627:
                        var17 = var4;
                        var17 = var17.promptTokens;
                        if (!(var8 !== var17)) {
                            _fun10028_ip = 679;
                            continue _fun10028
                        }
                    case 640:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.promptTokens;
                        var19[var18] = var17;
                    case 679:
                        var17 = var4;
                        var17 = var17.completionTokens;
                        if (!(var8 !== var17)) {
                            _fun10028_ip = 731;
                            continue _fun10028
                        }
                    case 692:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.completionTokens;
                        var19[var18] = var17;
                    case 731:
                        var17 = var4;
                        var17 = var17.totalTokens;
                        if (!(var8 !== var17)) {
                            _fun10028_ip = 783;
                            continue _fun10028
                        }
                    case 744:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.totalTokens;
                        var19[var18] = var17;
                    case 783:
                        var17 = var4;
                        var17 = var17.finishReasons;
                        var17 = var17.length;
                        if (!var17) {
                            _fun10028_ip = 856;
                            continue _fun10028
                        }
                    case 800:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var22 = var10.JSON;
                        var21 = var22.stringify;
                        var17 = var4;
                        var17 = var17.finishReasons;
                        var17 = var21.bind(var22)(var17);
                        var19[var18] = var17;
                    case 856:
                        var18 = var7;
                        var17 = var18;
                        if (!var18) {
                            _fun10028_ip = 879;
                            continue _fun10028
                        }
                    case 865:
                        var18 = var4;
                        var18 = var18.responseTexts;
                        var17 = var18.length;
                    case 879:
                        if (!var17) {
                            _fun10028_ip = 935;
                            continue _fun10028
                        }
                    case 882:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var17 = var4;
                        var22 = var17.responseTexts;
                        var21 = var22.join;
                        var17 = '';
                        var17 = var21.bind(var22)(var17);
                        var19[var18] = var17;
                    case 935:
                        var18 = var7;
                        var17 = var18;
                        if (!var18) {
                            _fun10028_ip = 958;
                            continue _fun10028
                        }
                    case 944:
                        var18 = var4;
                        var18 = var18.toolCalls;
                        var17 = var18.length;
                    case 958:
                        if (!var17) {
                            _fun10028_ip = 1017;
                            continue _fun10028
                        }
                    case 961:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var21 = var10.JSON;
                        var20 = var21.stringify;
                        var17 = var4;
                        var17 = var17.toolCalls;
                        var17 = var20.bind(var21)(var17);
                        var19[var18] = var17;
                    case 1017:
                        var18 = var3;
                        var19 = var18.setAttributes;
                        var17 = var2;
                        var17 = var19.bind(var18)(var17);
                        var17 = var18.end;
                        var17 = var17.bind(var18)();
                        return var16;
                    case 1046: // try_start_9
                        var16 = var1;
                        throw var16;
                    case 1051:
                        var16 = var6;
                        if (var16) {
                            _fun10028_ip = 1622;
                            continue _fun10028
                        }
                    case 1060: // try_end9
                        var20 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var19 = 6;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var18 = var16.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var17 = {};
                        var16 = true;
                        var2 = var20.bind(var8)(var17, var18, var16);
                        var16 = var4;
                        var16 = var16.responseId;
                        if (!var16) {
                            _fun10028_ip = 1152;
                            continue _fun10028
                        }
                    case 1113:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseId;
                        var18[var17] = var16;
                    case 1152:
                        var16 = var4;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun10028_ip = 1203;
                            continue _fun10028
                        }
                    case 1164:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseModel;
                        var18[var17] = var16;
                    case 1203:
                        var16 = var4;
                        var16 = var16.promptTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 1255;
                            continue _fun10028
                        }
                    case 1216:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.promptTokens;
                        var18[var17] = var16;
                    case 1255:
                        var16 = var4;
                        var16 = var16.completionTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 1307;
                            continue _fun10028
                        }
                    case 1268:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.completionTokens;
                        var18[var17] = var16;
                    case 1307:
                        var16 = var4;
                        var16 = var16.totalTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 1359;
                            continue _fun10028
                        }
                    case 1320:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.totalTokens;
                        var18[var17] = var16;
                    case 1359:
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        if (!var16) {
                            _fun10028_ip = 1432;
                            continue _fun10028
                        }
                    case 1376:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var21 = var10.JSON;
                        var20 = var21.stringify;
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var20.bind(var21)(var16);
                        var18[var17] = var16;
                    case 1432:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10028_ip = 1455;
                            continue _fun10028
                        }
                    case 1441:
                        var17 = var4;
                        var17 = var17.responseTexts;
                        var16 = var17.length;
                    case 1455:
                        if (!var16) {
                            _fun10028_ip = 1511;
                            continue _fun10028
                        }
                    case 1458:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var16 = var4;
                        var21 = var16.responseTexts;
                        var20 = var21.join;
                        var16 = '';
                        var16 = var20.bind(var21)(var16);
                        var18[var17] = var16;
                    case 1511:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10028_ip = 1534;
                            continue _fun10028
                        }
                    case 1520:
                        var17 = var4;
                        var17 = var17.toolCalls;
                        var16 = var17.length;
                    case 1534:
                        if (!var16) {
                            _fun10028_ip = 1593;
                            continue _fun10028
                        }
                    case 1537:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var20 = var10.JSON;
                        var19 = var20.stringify;
                        var16 = var4;
                        var16 = var16.toolCalls;
                        var16 = var19.bind(var20)(var16);
                        var18[var17] = var16;
                    case 1593:
                        var17 = var3;
                        var18 = var17.setAttributes;
                        var16 = var2;
                        var16 = var18.bind(var17)(var16);
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var9;
                    case 1622: // try_start_10
                        var9 = var1;
                        throw var9;
                    case 1627: // catch_target2
                        CatchBlockStart(arg_register = 9);
                        var16 = var6;
                        if (var16) {
                            _fun10028_ip = 1637;
                            continue _fun10028
                        }
                    case 1635:
                        throw var9;
                    case 1637:
                        var9 = var1;
                        throw var9;
                    case 1642: // try_start_3
                        var16 = var11;
                        var9 = var16;
                        if (!var16) {
                            _fun10028_ip = 1664;
                            continue _fun10028
                        }
                    case 1651:
                        var16 = var5;
                        var16 = var16.return;
                        var9 = var15 != var16;
                    case 1664:
                        if (!var9) {
                            _fun10028_ip = 1702;
                            continue _fun10028
                        }
                    case 1667:
                        var16 = _closure1_slot4;
                        var17 = var5;
                        var9 = var17.return;
                        var9 = var9.bind(var17)();
                        var9 = var16.bind(var8)(var9);
                        SaveGenerator(address = 1693);
                    case 1691:
                        return var9;
                    case 1693:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 16);
                        if (var16) {
                            _fun10028_ip = 2278;
                            continue _fun10028
                        }
                    case 1702: // try_end3
                        var16 = var6;
                        if (var16) {
                            _fun10028_ip = 2273;
                            continue _fun10028
                        }
                    case 1711: // try_end10
                        var20 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var19 = 6;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var18 = var16.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var17 = {};
                        var16 = true;
                        var2 = var20.bind(var8)(var17, var18, var16);
                        var16 = var4;
                        var16 = var16.responseId;
                        if (!var16) {
                            _fun10028_ip = 1803;
                            continue _fun10028
                        }
                    case 1764:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseId;
                        var18[var17] = var16;
                    case 1803:
                        var16 = var4;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun10028_ip = 1854;
                            continue _fun10028
                        }
                    case 1815:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseModel;
                        var18[var17] = var16;
                    case 1854:
                        var16 = var4;
                        var16 = var16.promptTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 1906;
                            continue _fun10028
                        }
                    case 1867:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.promptTokens;
                        var18[var17] = var16;
                    case 1906:
                        var16 = var4;
                        var16 = var16.completionTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 1958;
                            continue _fun10028
                        }
                    case 1919:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.completionTokens;
                        var18[var17] = var16;
                    case 1958:
                        var16 = var4;
                        var16 = var16.totalTokens;
                        if (!(var8 !== var16)) {
                            _fun10028_ip = 2010;
                            continue _fun10028
                        }
                    case 1971:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.totalTokens;
                        var18[var17] = var16;
                    case 2010:
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        if (!var16) {
                            _fun10028_ip = 2083;
                            continue _fun10028
                        }
                    case 2027:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var21 = var10.JSON;
                        var20 = var21.stringify;
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var20.bind(var21)(var16);
                        var18[var17] = var16;
                    case 2083:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10028_ip = 2106;
                            continue _fun10028
                        }
                    case 2092:
                        var17 = var4;
                        var17 = var17.responseTexts;
                        var16 = var17.length;
                    case 2106:
                        if (!var16) {
                            _fun10028_ip = 2162;
                            continue _fun10028
                        }
                    case 2109:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var16 = var4;
                        var21 = var16.responseTexts;
                        var20 = var21.join;
                        var16 = '';
                        var16 = var20.bind(var21)(var16);
                        var18[var17] = var16;
                    case 2162:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10028_ip = 2185;
                            continue _fun10028
                        }
                    case 2171:
                        var17 = var4;
                        var17 = var17.toolCalls;
                        var16 = var17.length;
                    case 2185:
                        if (!var16) {
                            _fun10028_ip = 2244;
                            continue _fun10028
                        }
                    case 2188:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var20 = var10.JSON;
                        var19 = var20.stringify;
                        var16 = var4;
                        var16 = var16.toolCalls;
                        var16 = var19.bind(var20)(var16);
                        var18[var17] = var16;
                    case 2244:
                        var17 = var3;
                        var18 = var17.setAttributes;
                        var16 = var2;
                        var16 = var18.bind(var17)(var16);
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var14;
                    case 2273: // try_start_11
                        var14 = var1;
                        throw var14;
                    case 2278:
                        var14 = var6;
                        if (var14) {
                            _fun10028_ip = 2849;
                            continue _fun10028
                        }
                    case 2287: // try_end11
                        var19 = _closure1_slot2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var18 = 6;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var17 = var14.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var16 = {};
                        var14 = true;
                        var2 = var19.bind(var8)(var16, var17, var14);
                        var14 = var4;
                        var14 = var14.responseId;
                        if (!var14) {
                            _fun10028_ip = 2379;
                            continue _fun10028
                        }
                    case 2340:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseId;
                        var17[var16] = var14;
                    case 2379:
                        var14 = var4;
                        var14 = var14.responseModel;
                        if (!var14) {
                            _fun10028_ip = 2430;
                            continue _fun10028
                        }
                    case 2391:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseModel;
                        var17[var16] = var14;
                    case 2430:
                        var14 = var4;
                        var14 = var14.promptTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 2482;
                            continue _fun10028
                        }
                    case 2443:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.promptTokens;
                        var17[var16] = var14;
                    case 2482:
                        var14 = var4;
                        var14 = var14.completionTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 2534;
                            continue _fun10028
                        }
                    case 2495:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.completionTokens;
                        var17[var16] = var14;
                    case 2534:
                        var14 = var4;
                        var14 = var14.totalTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 2586;
                            continue _fun10028
                        }
                    case 2547:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.totalTokens;
                        var17[var16] = var14;
                    case 2586:
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun10028_ip = 2659;
                            continue _fun10028
                        }
                    case 2603:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var20 = var10.JSON;
                        var19 = var20.stringify;
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var19.bind(var20)(var14);
                        var17[var16] = var14;
                    case 2659:
                        var16 = var7;
                        var14 = var16;
                        if (!var16) {
                            _fun10028_ip = 2682;
                            continue _fun10028
                        }
                    case 2668:
                        var16 = var4;
                        var16 = var16.responseTexts;
                        var14 = var16.length;
                    case 2682:
                        if (!var14) {
                            _fun10028_ip = 2738;
                            continue _fun10028
                        }
                    case 2685:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var14 = var4;
                        var20 = var14.responseTexts;
                        var19 = var20.join;
                        var14 = '';
                        var14 = var19.bind(var20)(var14);
                        var17[var16] = var14;
                    case 2738:
                        var16 = var7;
                        var14 = var16;
                        if (!var16) {
                            _fun10028_ip = 2761;
                            continue _fun10028
                        }
                    case 2747:
                        var16 = var4;
                        var16 = var16.toolCalls;
                        var14 = var16.length;
                    case 2761:
                        if (!var14) {
                            _fun10028_ip = 2820;
                            continue _fun10028
                        }
                    case 2764:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var19 = var10.JSON;
                        var18 = var19.stringify;
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var14 = var18.bind(var19)(var14);
                        var17[var16] = var14;
                    case 2820:
                        var16 = var3;
                        var17 = var16.setAttributes;
                        var14 = var2;
                        var14 = var17.bind(var16)(var14);
                        var14 = var16.end;
                        var14 = var14.bind(var16)();
                        return var9;
                    case 2849: // try_start_12
                        var9 = var1;
                        throw var9;
                    case 2854: // catch_target3
                        CatchBlockStart(arg_register = 9);
                        var14 = var6;
                        if (var14) {
                            _fun10028_ip = 2864;
                            continue _fun10028
                        }
                    case 2862:
                        throw var9;
                    case 2864:
                        var9 = var1;
                        throw var9;
                    case 2869: // try_start_4
                        var14 = var11;
                        var9 = var14;
                        if (!var14) {
                            _fun10028_ip = 2891;
                            continue _fun10028
                        }
                    case 2878:
                        var14 = var5;
                        var14 = var14.return;
                        var9 = var15 != var14;
                    case 2891:
                        if (!var9) {
                            _fun10028_ip = 2929;
                            continue _fun10028
                        }
                    case 2894:
                        var14 = _closure1_slot4;
                        var15 = var5;
                        var9 = var15.return;
                        var9 = var9.bind(var15)();
                        var9 = var14.bind(var8)(var9);
                        SaveGenerator(address = 2920);
                    case 2918:
                        return var9;
                    case 2920:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 14);
                        if (var14) {
                            _fun10028_ip = 3505;
                            continue _fun10028
                        }
                    case 2929: // try_end4
                        var14 = var6;
                        if (var14) {
                            _fun10028_ip = 3500;
                            continue _fun10028
                        }
                    case 2938: // try_end12
                        var18 = _closure1_slot2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var17 = 6;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var15 = {};
                        var14 = true;
                        var2 = var18.bind(var8)(var15, var16, var14);
                        var14 = var4;
                        var14 = var14.responseId;
                        if (!var14) {
                            _fun10028_ip = 3030;
                            continue _fun10028
                        }
                    case 2991:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseId;
                        var16[var15] = var14;
                    case 3030:
                        var14 = var4;
                        var14 = var14.responseModel;
                        if (!var14) {
                            _fun10028_ip = 3081;
                            continue _fun10028
                        }
                    case 3042:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseModel;
                        var16[var15] = var14;
                    case 3081:
                        var14 = var4;
                        var14 = var14.promptTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 3133;
                            continue _fun10028
                        }
                    case 3094:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.promptTokens;
                        var16[var15] = var14;
                    case 3133:
                        var14 = var4;
                        var14 = var14.completionTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 3185;
                            continue _fun10028
                        }
                    case 3146:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.completionTokens;
                        var16[var15] = var14;
                    case 3185:
                        var14 = var4;
                        var14 = var14.totalTokens;
                        if (!(var8 !== var14)) {
                            _fun10028_ip = 3237;
                            continue _fun10028
                        }
                    case 3198:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.totalTokens;
                        var16[var15] = var14;
                    case 3237:
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun10028_ip = 3310;
                            continue _fun10028
                        }
                    case 3254:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var19 = var10.JSON;
                        var18 = var19.stringify;
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var18.bind(var19)(var14);
                        var16[var15] = var14;
                    case 3310:
                        var15 = var7;
                        var14 = var15;
                        if (!var15) {
                            _fun10028_ip = 3333;
                            continue _fun10028
                        }
                    case 3319:
                        var15 = var4;
                        var15 = var15.responseTexts;
                        var14 = var15.length;
                    case 3333:
                        if (!var14) {
                            _fun10028_ip = 3389;
                            continue _fun10028
                        }
                    case 3336:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var14 = var4;
                        var19 = var14.responseTexts;
                        var18 = var19.join;
                        var14 = '';
                        var14 = var18.bind(var19)(var14);
                        var16[var15] = var14;
                    case 3389:
                        var15 = var7;
                        var14 = var15;
                        if (!var15) {
                            _fun10028_ip = 3412;
                            continue _fun10028
                        }
                    case 3398:
                        var15 = var4;
                        var15 = var15.toolCalls;
                        var14 = var15.length;
                    case 3412:
                        if (!var14) {
                            _fun10028_ip = 3471;
                            continue _fun10028
                        }
                    case 3415:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var18 = var10.JSON;
                        var17 = var18.stringify;
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var14 = var17.bind(var18)(var14);
                        var16[var15] = var14;
                    case 3471:
                        var15 = var3;
                        var16 = var15.setAttributes;
                        var14 = var2;
                        var14 = var16.bind(var15)(var14);
                        var14 = var15.end;
                        var14 = var14.bind(var15)();
                        return var13;
                    case 3500: // try_start_13
                        var13 = var1;
                        throw var13;
                    case 3505:
                        var13 = var6;
                        if (var13) {
                            _fun10028_ip = 4076;
                            continue _fun10028
                        }
                    case 3514: // try_end13
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var15 = 6;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var16 = var13.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var14 = {};
                        var13 = true;
                        var2 = var17.bind(var8)(var14, var16, var13);
                        var13 = var4;
                        var13 = var13.responseId;
                        if (!var13) {
                            _fun10028_ip = 3606;
                            continue _fun10028
                        }
                    case 3567:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseId;
                        var16[var14] = var13;
                    case 3606:
                        var13 = var4;
                        var13 = var13.responseModel;
                        if (!var13) {
                            _fun10028_ip = 3657;
                            continue _fun10028
                        }
                    case 3618:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseModel;
                        var16[var14] = var13;
                    case 3657:
                        var13 = var4;
                        var13 = var13.promptTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 3709;
                            continue _fun10028
                        }
                    case 3670:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.promptTokens;
                        var16[var14] = var13;
                    case 3709:
                        var13 = var4;
                        var13 = var13.completionTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 3761;
                            continue _fun10028
                        }
                    case 3722:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.completionTokens;
                        var16[var14] = var13;
                    case 3761:
                        var13 = var4;
                        var13 = var13.totalTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 3813;
                            continue _fun10028
                        }
                    case 3774:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.totalTokens;
                        var16[var14] = var13;
                    case 3813:
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var13.length;
                        if (!var13) {
                            _fun10028_ip = 3886;
                            continue _fun10028
                        }
                    case 3830:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var18 = var10.JSON;
                        var17 = var18.stringify;
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var17.bind(var18)(var13);
                        var16[var14] = var13;
                    case 3886:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10028_ip = 3909;
                            continue _fun10028
                        }
                    case 3895:
                        var14 = var4;
                        var14 = var14.responseTexts;
                        var13 = var14.length;
                    case 3909:
                        if (!var13) {
                            _fun10028_ip = 3965;
                            continue _fun10028
                        }
                    case 3912:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var13 = var4;
                        var18 = var13.responseTexts;
                        var17 = var18.join;
                        var13 = '';
                        var13 = var17.bind(var18)(var13);
                        var16[var14] = var13;
                    case 3965:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10028_ip = 3988;
                            continue _fun10028
                        }
                    case 3974:
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var13 = var14.length;
                    case 3988:
                        if (!var13) {
                            _fun10028_ip = 4047;
                            continue _fun10028
                        }
                    case 3991:
                        var13 = var2;
                        var14 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var15];
                        var12 = var14.bind(var8)(var12);
                        var12 = var12.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var15 = var10.JSON;
                        var14 = var15.stringify;
                        var10 = var4;
                        var10 = var10.toolCalls;
                        var10 = var14.bind(var15)(var10);
                        var13[var12] = var10;
                    case 4047:
                        var12 = var3;
                        var13 = var12.setAttributes;
                        var10 = var2;
                        var10 = var13.bind(var12)(var10);
                        var10 = var12.end;
                        var10 = var10.bind(var12)();
                        return var9;
                    case 4076: // try_start_14
                        var9 = var1;
                        throw var9;
                    case 4081: // catch_target4
                        CatchBlockStart(arg_register = 9);
                        var10 = var6;
                        if (var10) {
                            _fun10028_ip = 4091;
                            continue _fun10028
                        }
                    case 4089:
                        throw var9;
                    case 4091:
                        var9 = var1;
                        throw var9;
                    case 4096: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = true;
                    case 4100: // try_start_6 // try_end5
                        var10 = var11;
                        var9 = var10;
                        if (!var10) {
                            _fun10028_ip = 4124;
                            continue _fun10028
                        }
                    case 4109:
                        var10 = var5;
                        var12 = var10.return;
                        var10 = null;
                        var9 = var10 != var12;
                    case 4124:
                        if (!var9) {
                            _fun10028_ip = 4165;
                            continue _fun10028
                        }
                    case 4127:
                        var12 = _closure1_slot4;
                        var13 = var5;
                        var9 = var13.return;
                        var9 = var9.bind(var13)();
                        var9 = var12.bind(var8)(var9);
                        SaveGenerator(address = 4156);
                    case 4154:
                        return var9;
                    case 4156:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 12);
                        if (var12) {
                            _fun10028_ip = 4748;
                            continue _fun10028
                        }
                    case 4165: // try_end6
                        var12 = var6;
                        if (var12) {
                            _fun10028_ip = 4743;
                            continue _fun10028
                        }
                    case 4174: // try_end14
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var15 = 6;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var16 = var13.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var14 = {};
                        var13 = true;
                        var2 = var17.bind(var8)(var14, var16, var13);
                        var13 = var4;
                        var13 = var13.responseId;
                        if (!var13) {
                            _fun10028_ip = 4269;
                            continue _fun10028
                        }
                    case 4230:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseId;
                        var16[var14] = var13;
                    case 4269:
                        var13 = var4;
                        var13 = var13.responseModel;
                        if (!var13) {
                            _fun10028_ip = 4320;
                            continue _fun10028
                        }
                    case 4281:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseModel;
                        var16[var14] = var13;
                    case 4320:
                        var13 = var4;
                        var13 = var13.promptTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 4372;
                            continue _fun10028
                        }
                    case 4333:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.promptTokens;
                        var16[var14] = var13;
                    case 4372:
                        var13 = var4;
                        var13 = var13.completionTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 4424;
                            continue _fun10028
                        }
                    case 4385:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.completionTokens;
                        var16[var14] = var13;
                    case 4424:
                        var13 = var4;
                        var13 = var13.totalTokens;
                        if (!(var8 !== var13)) {
                            _fun10028_ip = 4476;
                            continue _fun10028
                        }
                    case 4437:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.totalTokens;
                        var16[var14] = var13;
                    case 4476:
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var13.length;
                        if (!var13) {
                            _fun10028_ip = 4551;
                            continue _fun10028
                        }
                    case 4493:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var13 = global;
                        var18 = var13.JSON;
                        var17 = var18.stringify;
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var17.bind(var18)(var13);
                        var16[var14] = var13;
                    case 4551:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10028_ip = 4574;
                            continue _fun10028
                        }
                    case 4560:
                        var14 = var4;
                        var14 = var14.responseTexts;
                        var13 = var14.length;
                    case 4574:
                        if (!var13) {
                            _fun10028_ip = 4630;
                            continue _fun10028
                        }
                    case 4577:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var13 = var4;
                        var18 = var13.responseTexts;
                        var17 = var18.join;
                        var13 = '';
                        var13 = var17.bind(var18)(var13);
                        var16[var14] = var13;
                    case 4630:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10028_ip = 4653;
                            continue _fun10028
                        }
                    case 4639:
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var13 = var14.length;
                    case 4653:
                        if (!var13) {
                            _fun10028_ip = 4714;
                            continue _fun10028
                        }
                    case 4656:
                        var14 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var15];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var12 = global;
                        var16 = var12.JSON;
                        var15 = var16.stringify;
                        var12 = var4;
                        var12 = var12.toolCalls;
                        var12 = var15.bind(var16)(var12);
                        var14[var13] = var12;
                    case 4714:
                        var13 = var3;
                        var14 = var13.setAttributes;
                        var12 = var2;
                        var12 = var14.bind(var13)(var12);
                        var12 = var13.end;
                        var12 = var12.bind(var13)();
                        return var8;
                    case 4743: // try_start_15
                        var12 = var1;
                        throw var12;
                    case 4748:
                        var12 = var6;
                        if (var12) {
                            _fun10028_ip = 5323;
                            continue _fun10028
                        }
                    case 4757: // try_end15
                        var16 = _closure1_slot2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var14 = 6;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var15 = var12.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var13 = {};
                        var12 = true;
                        var2 = var16.bind(var8)(var13, var15, var12);
                        var12 = var4;
                        var12 = var12.responseId;
                        if (!var12) {
                            _fun10028_ip = 4849;
                            continue _fun10028
                        }
                    case 4810:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.responseId;
                        var15[var13] = var12;
                    case 4849:
                        var12 = var4;
                        var12 = var12.responseModel;
                        if (!var12) {
                            _fun10028_ip = 4900;
                            continue _fun10028
                        }
                    case 4861:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.responseModel;
                        var15[var13] = var12;
                    case 4900:
                        var12 = var4;
                        var12 = var12.promptTokens;
                        if (!(var8 !== var12)) {
                            _fun10028_ip = 4952;
                            continue _fun10028
                        }
                    case 4913:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.promptTokens;
                        var15[var13] = var12;
                    case 4952:
                        var12 = var4;
                        var12 = var12.completionTokens;
                        if (!(var8 !== var12)) {
                            _fun10028_ip = 5004;
                            continue _fun10028
                        }
                    case 4965:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.completionTokens;
                        var15[var13] = var12;
                    case 5004:
                        var12 = var4;
                        var12 = var12.totalTokens;
                        if (!(var8 !== var12)) {
                            _fun10028_ip = 5056;
                            continue _fun10028
                        }
                    case 5017:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.totalTokens;
                        var15[var13] = var12;
                    case 5056:
                        var12 = var4;
                        var12 = var12.finishReasons;
                        var12 = var12.length;
                        if (!var12) {
                            _fun10028_ip = 5131;
                            continue _fun10028
                        }
                    case 5073:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var12 = global;
                        var17 = var12.JSON;
                        var16 = var17.stringify;
                        var12 = var4;
                        var12 = var12.finishReasons;
                        var12 = var16.bind(var17)(var12);
                        var15[var13] = var12;
                    case 5131:
                        var13 = var7;
                        var12 = var13;
                        if (!var13) {
                            _fun10028_ip = 5154;
                            continue _fun10028
                        }
                    case 5140:
                        var13 = var4;
                        var13 = var13.responseTexts;
                        var12 = var13.length;
                    case 5154:
                        if (!var12) {
                            _fun10028_ip = 5210;
                            continue _fun10028
                        }
                    case 5157:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var12 = var4;
                        var17 = var12.responseTexts;
                        var16 = var17.join;
                        var12 = '';
                        var12 = var16.bind(var17)(var12);
                        var15[var13] = var12;
                    case 5210:
                        var13 = var7;
                        var12 = var13;
                        if (!var13) {
                            _fun10028_ip = 5233;
                            continue _fun10028
                        }
                    case 5219:
                        var13 = var4;
                        var13 = var13.toolCalls;
                        var12 = var13.length;
                    case 5233:
                        if (!var12) {
                            _fun10028_ip = 5294;
                            continue _fun10028
                        }
                    case 5236:
                        var13 = var2;
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var14];
                        var10 = var12.bind(var8)(var10);
                        var12 = var10.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var10 = global;
                        var15 = var10.JSON;
                        var14 = var15.stringify;
                        var10 = var4;
                        var10 = var10.toolCalls;
                        var10 = var14.bind(var15)(var10);
                        var13[var12] = var10;
                    case 5294:
                        var12 = var3;
                        var13 = var12.setAttributes;
                        var10 = var2;
                        var10 = var13.bind(var12)(var10);
                        var10 = var12.end;
                        var10 = var10.bind(var12)();
                        return var9;
                    case 5323: // try_start_16
                        var9 = var1;
                        throw var9;
                    case 5328: // catch_target6
                        CatchBlockStart(arg_register = 9);
                        var10 = var6;
                        if (var10) {
                            _fun10028_ip = 5338;
                            continue _fun10028
                        }
                    case 5336:
                        throw var9;
                    case 5338:
                        var9 = var1;
                        throw var9;
                    case 5343: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 10);
                    case 5345: // try_start_7
                        var9 = var11;
                        if (!var11) {
                            _fun10028_ip = 5366;
                            continue _fun10028
                        }
                    case 5351:
                        var11 = var5;
                        var12 = var11.return;
                        var11 = null;
                        var9 = var11 != var12;
                    case 5366:
                        if (!var9) {
                            _fun10028_ip = 5404;
                            continue _fun10028
                        }
                    case 5369:
                        var11 = _closure1_slot4;
                        var12 = var5;
                        var5 = var12.return;
                        var5 = var5.bind(var12)();
                        var5 = var11.bind(var8)(var5);
                        SaveGenerator(address = 5398);
                    case 5396:
                        return var5;
                    case 5398:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 11);
                        if (var11) {
                            _fun10028_ip = 5417;
                            continue _fun10028
                        }
                    case 5404: // try_end7
                        var11 = var6;
                        if (var11) {
                            _fun10028_ip = 5412;
                            continue _fun10028
                        }
                    case 5410:
                        throw var10;
                    case 5412:
                        var10 = var1;
                        throw var10;
                    case 5417:
                        var10 = var6;
                        if (var10) {
                            _fun10028_ip = 5992;
                            continue _fun10028
                        }
                    case 5426: // try_end16
                        var14 = _closure1_slot2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var12 = 6;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var13 = var10.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var11 = {};
                        var10 = true;
                        var2 = var14.bind(var8)(var11, var13, var10);
                        var10 = var4;
                        var10 = var10.responseId;
                        if (!var10) {
                            _fun10028_ip = 5518;
                            continue _fun10028
                        }
                    case 5479:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.responseId;
                        var13[var11] = var10;
                    case 5518:
                        var10 = var4;
                        var10 = var10.responseModel;
                        if (!var10) {
                            _fun10028_ip = 5569;
                            continue _fun10028
                        }
                    case 5530:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.responseModel;
                        var13[var11] = var10;
                    case 5569:
                        var10 = var4;
                        var10 = var10.promptTokens;
                        if (!(var8 !== var10)) {
                            _fun10028_ip = 5621;
                            continue _fun10028
                        }
                    case 5582:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.promptTokens;
                        var13[var11] = var10;
                    case 5621:
                        var10 = var4;
                        var10 = var10.completionTokens;
                        if (!(var8 !== var10)) {
                            _fun10028_ip = 5673;
                            continue _fun10028
                        }
                    case 5634:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.completionTokens;
                        var13[var11] = var10;
                    case 5673:
                        var10 = var4;
                        var10 = var10.totalTokens;
                        if (!(var8 !== var10)) {
                            _fun10028_ip = 5725;
                            continue _fun10028
                        }
                    case 5686:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.totalTokens;
                        var13[var11] = var10;
                    case 5725:
                        var10 = var4;
                        var10 = var10.finishReasons;
                        var10 = var10.length;
                        if (!var10) {
                            _fun10028_ip = 5800;
                            continue _fun10028
                        }
                    case 5742:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var10 = global;
                        var15 = var10.JSON;
                        var14 = var15.stringify;
                        var10 = var4;
                        var10 = var10.finishReasons;
                        var10 = var14.bind(var15)(var10);
                        var13[var11] = var10;
                    case 5800:
                        var11 = var7;
                        var10 = var11;
                        if (!var11) {
                            _fun10028_ip = 5823;
                            continue _fun10028
                        }
                    case 5809:
                        var11 = var4;
                        var11 = var11.responseTexts;
                        var10 = var11.length;
                    case 5823:
                        if (!var10) {
                            _fun10028_ip = 5879;
                            continue _fun10028
                        }
                    case 5826:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var10 = var4;
                        var15 = var10.responseTexts;
                        var14 = var15.join;
                        var10 = '';
                        var10 = var14.bind(var15)(var10);
                        var13[var11] = var10;
                    case 5879:
                        var11 = var7;
                        var10 = var11;
                        if (!var11) {
                            _fun10028_ip = 5902;
                            continue _fun10028
                        }
                    case 5888:
                        var11 = var4;
                        var11 = var11.toolCalls;
                        var10 = var11.length;
                    case 5902:
                        if (!var10) {
                            _fun10028_ip = 5963;
                            continue _fun10028
                        }
                    case 5905:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var9 = var9[var12];
                        var9 = var10.bind(var8)(var9);
                        var10 = var9.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var9 = global;
                        var13 = var9.JSON;
                        var12 = var13.stringify;
                        var9 = var4;
                        var9 = var9.toolCalls;
                        var9 = var12.bind(var13)(var9);
                        var11[var10] = var9;
                    case 5963:
                        var10 = var3;
                        var11 = var10.setAttributes;
                        var9 = var2;
                        var9 = var11.bind(var10)(var9);
                        var9 = var10.end;
                        var9 = var9.bind(var10)();
                        return var5;
                    case 5992: // try_start_17
                        var5 = var1;
                        throw var5;
                    case 5997: // catch_target7
                        CatchBlockStart(arg_register = 5);
                        if (var6) {
                            _fun10028_ip = 6004;
                            continue _fun10028
                        }
                    case 6002:
                        throw var5;
                    case 6004:
                        throw var1;
                    case 6006: // try_end17 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                        CatchBlockStart(arg_register = 1);
                        var12 = _closure1_slot2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var9 = 6;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var11 = var6.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var10 = {};
                        var6 = true;
                        var2 = var12.bind(var8)(var10, var11, var6);
                        var6 = var4;
                        var6 = var6.responseId;
                        if (!var6) {
                            _fun10028_ip = 6103;
                            continue _fun10028
                        }
                    case 6064:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.responseId;
                        var11[var10] = var6;
                    case 6103:
                        var6 = var4;
                        var6 = var6.responseModel;
                        if (!var6) {
                            _fun10028_ip = 6154;
                            continue _fun10028
                        }
                    case 6115:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.responseModel;
                        var11[var10] = var6;
                    case 6154:
                        var6 = var4;
                        var6 = var6.promptTokens;
                        if (!(var8 !== var6)) {
                            _fun10028_ip = 6206;
                            continue _fun10028
                        }
                    case 6167:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.promptTokens;
                        var11[var10] = var6;
                    case 6206:
                        var6 = var4;
                        var6 = var6.completionTokens;
                        if (!(var8 !== var6)) {
                            _fun10028_ip = 6258;
                            continue _fun10028
                        }
                    case 6219:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.completionTokens;
                        var11[var10] = var6;
                    case 6258:
                        var6 = var4;
                        var6 = var6.totalTokens;
                        if (!(var8 !== var6)) {
                            _fun10028_ip = 6310;
                            continue _fun10028
                        }
                    case 6271:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.totalTokens;
                        var11[var10] = var6;
                    case 6310:
                        var6 = var4;
                        var6 = var6.finishReasons;
                        var6 = var6.length;
                        if (!var6) {
                            _fun10028_ip = 6385;
                            continue _fun10028
                        }
                    case 6327:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var6 = global;
                        var13 = var6.JSON;
                        var12 = var13.stringify;
                        var6 = var4;
                        var6 = var6.finishReasons;
                        var6 = var12.bind(var13)(var6);
                        var11[var10] = var6;
                    case 6385:
                        var10 = var7;
                        var6 = var10;
                        if (!var10) {
                            _fun10028_ip = 6408;
                            continue _fun10028
                        }
                    case 6394:
                        var10 = var4;
                        var10 = var10.responseTexts;
                        var6 = var10.length;
                    case 6408:
                        if (!var6) {
                            _fun10028_ip = 6464;
                            continue _fun10028
                        }
                    case 6411:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var6 = var4;
                        var13 = var6.responseTexts;
                        var12 = var13.join;
                        var6 = '';
                        var6 = var12.bind(var13)(var6);
                        var11[var10] = var6;
                    case 6464:
                        var6 = var7;
                        if (!var7) {
                            _fun10028_ip = 6484;
                            continue _fun10028
                        }
                    case 6470:
                        var7 = var4;
                        var7 = var7.toolCalls;
                        var6 = var7.length;
                    case 6484:
                        if (!var6) {
                            _fun10028_ip = 6542;
                            continue _fun10028
                        }
                    case 6487:
                        var6 = var2;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var9];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var7 = global;
                        var8 = var7.JSON;
                        var7 = var8.stringify;
                        var4 = var4.toolCalls;
                        var4 = var7.bind(var8)(var4);
                        var6[var5] = var4;
                    case 6542:
                        var4 = var3.setAttributes;
                        var2 = var4.bind(var3)(var2);
                        var2 = var3.end;
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 6564:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function(arg0, arg1, arg2) { // Original name: instrumentStream, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.instrumentStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 65, 963, 965, 839, 867, 955]);