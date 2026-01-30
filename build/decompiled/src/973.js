// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var1
        var0 = function(arg0) { // Original name: AsyncFromSyncIteratorContinuation, environment: var3
            _fun10017: for (var _fun10017_ip = 0;;) switch (_fun10017_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun10017_ip = 72;
                        continue _fun10017
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
            _fun10021: for (var _fun10021_ip = 0;;) switch (_fun10021_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun10021_ip = 53;
                        continue _fun10021
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun10021_ip = 87;
                    continue _fun10021;
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
            _fun10022: for (var _fun10022_ip = 0;;) switch (_fun10022_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun10022_ip = 53;
                        continue _fun10022
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun10022_ip = 75;
                    continue _fun10022;
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
        _fun10023: for (var _fun10023_ip = 0;;) switch (_fun10023_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var12 = arg3;
                var2 = var0;
                if (!var2) {
                    _fun10023_ip = 215;
                    continue _fun10023
                }
            case 18:
                var5 = null;
                var3 = var5 == var0;
                var9 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun10023_ip = 37;
                    continue _fun10023
                }
            case 31:
                var4 = var0.promptFeedback;
            case 37:
                var6 = var5 != var4;
                var3 = false;
                if (!var6) {
                    _fun10023_ip = 212;
                    continue _fun10023
                }
            case 49:
                var6 = var4.blockReason;
                var3 = false;
                if (!var6) {
                    _fun10023_ip = 212;
                    continue _fun10023
                }
            case 63:
                var8 = var4.blockReasonMessage;
                if (!(var5 == var8)) {
                    _fun10023_ip = 79;
                    continue _fun10023
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
                    _fun10023_ip = 817;
                    continue _fun10023
                }
            case 221:
                var2 = var0.responseId;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10023_ip = 250;
                    continue _fun10023
                }
            case 238:
                var2 = var0.responseId;
                var1.responseId = var2;
            case 250:
                var2 = var0.modelVersion;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun10023_ip = 275;
                    continue _fun10023
                }
            case 263:
                var2 = var0.modelVersion;
                var1.responseModel = var2;
            case 275:
                var2 = var0.usageMetadata;
                if (!var2) {
                    _fun10023_ip = 363;
                    continue _fun10023
                }
            case 284:
                var3 = var2.promptTokenCount;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10023_ip = 313;
                    continue _fun10023
                }
            case 301:
                var3 = var2.promptTokenCount;
                var1.promptTokens = var3;
            case 313:
                var3 = var2.candidatesTokenCount;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10023_ip = 338;
                    continue _fun10023
                }
            case 326:
                var3 = var2.candidatesTokenCount;
                var1.completionTokens = var3;
            case 338:
                var3 = var2.totalTokenCount;
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun10023_ip = 363;
                    continue _fun10023
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
                    _fun10023_ip = 449;
                    continue _fun10023
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
                    _fun10023_ip = 465;
                    continue _fun10023
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
                    _fun10023_ip = 817;
                    continue _fun10023
                }
            case 489: // try_start_1
                var7 = var13;
                var13 = var3 != var13;
                var12 = var13;
                if (!var13) {
                    _fun10023_ip = 511;
                    continue _fun10023
                }
            case 502:
                var13 = var7;
                var12 = var13.finishReason;
            case 511:
                var11 = var12;
                if (!var12) {
                    _fun10023_ip = 548;
                    continue _fun10023
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
                    _fun10023_ip = 579;
                    continue _fun10023
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
                    _fun10023_ip = 620;
                    continue _fun10023
                }
            case 591:
                var12 = var7;
                var12 = var12.content;
                var10 = var12;
                var12 = var3 == var12;
                var11 = undefined;
                if (var12) {
                    _fun10023_ip = 620;
                    continue _fun10023
                }
            case 611:
                var12 = var10;
                var11 = var12.parts;
            case 620:
                var9 = var11;
                if (!(var3 == var11)) {
                    _fun10023_ip = 633;
                    continue _fun10023
                }
            case 627:
                var13 = new Array(0);
                _fun10023_ip = 636;
                continue _fun10023;
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
                    _fun10023_ip = 805;
                    continue _fun10023
                }
            case 656: // try_start_0
                var8 = var13;
                var14 = var6;
                var13 = var14;
                if (!var14) {
                    _fun10023_ip = 676;
                    continue _fun10023
                }
            case 668:
                var14 = var8;
                var13 = var14.text;
            case 676:
                if (!var13) {
                    _fun10023_ip = 706;
                    continue _fun10023
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
                    _fun10023_ip = 793;
                    continue _fun10023
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
                _fun10023_ip = 642;
                continue _fun10023;
            case 798: // catch_target0
                CatchBlockStart(arg_register = 11);
                var12.return();
                throw var11;
            case 805: // try_end1
                _fun10023_ip = 475;
                continue _fun10023;
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
                _fun10026: for (var _fun10026_ip = 0;;) switch (_fun10026_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 8);
                        if (var8) {
                            _fun10026_ip = 6563;
                            continue _fun10026
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
                            _fun10026_ip = 119;
                            continue _fun10026
                        }
                    case 96:
                        var9 = var10.Symbol;
                        var23 = var9.asyncIterator;
                        var9 = var10.Symbol;
                        var22 = var9.iterator;
                    case 119:
                        var21 = 1;
                        var20 = '@@asyncIterator';
                        var19 = '@@iterator';
                        var15 = null;
                        var16 = undefined;
                    case 136:
                        if (!var23) {
                            _fun10026_ip = 150;
                            continue _fun10026
                        }
                    case 139:
                        var12 = var13[var23];
                        var16 = var12;
                        if (!(var15 == var16)) {
                            _fun10026_ip = 252;
                            continue _fun10026
                        }
                    case 150:
                        if (!var22) {
                            _fun10026_ip = 164;
                            continue _fun10026
                        }
                    case 153:
                        var14 = var13[var22];
                        var16 = var14;
                        if (!(var15 == var16)) {
                            _fun10026_ip = 213;
                            continue _fun10026
                        }
                    case 164:
                        var9 = parseFloat(var21);
                        var21 = var9 - 1;
                        var23 = var20;
                        var22 = var19;
                        if (var9) {
                            _fun10026_ip = 136;
                            continue _fun10026
                        }
                    case 179:
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
                    case 213:
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
                        _fun10026_ip = 262;
                        continue _fun10026;
                    case 252:
                        var9 = var12.call;
                        var14 = var9.bind(var12)(var13);
                    case 262:
                        var5 = var14;
                        var13 = _closure1_slot4;
                        var9 = var14.next;
                        var9 = var9.bind(var14)();
                        var13 = var13.bind(var8)(var9);
                        SaveGenerator(address = 290);
                    case 288:
                        return var13;
                    case 290:
                        ResumeGenerator(result_out_reg = 13, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10026_ip = 2868;
                            continue _fun10026
                        }
                    case 299:
                        var18 = var13;
                        var9 = var13.done;
                        var9 = !var9;
                        var11 = var9;
                        if (!var9) {
                            _fun10026_ip = 409;
                            continue _fun10026
                        }
                    case 316:
                        var9 = var18;
                        var14 = var9.value;
                        var20 = _closure1_slot7;
                        var26 = var4;
                        var25 = var7;
                        var24 = var3;
                        var28 = undefined;
                        var27 = var14;
                        var9 = var28[var20](var27, var26, var25, var24, var23);
                        SaveGenerator(address = 350);
                    case 348:
                        return var14;
                    case 350:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10026_ip = 1641;
                            continue _fun10026
                        }
                    case 359:
                        var11 = false;
                        var16 = _closure1_slot4;
                        var19 = var5;
                        var9 = var19.next;
                        var9 = var9.bind(var19)();
                        var16 = var16.bind(var8)(var9);
                        SaveGenerator(address = 386);
                    case 384:
                        return var16;
                    case 386:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 9);
                        if (var9) {
                            _fun10026_ip = 414;
                            continue _fun10026
                        }
                    case 392:
                        var18 = var16;
                        var9 = var16.done;
                        var9 = !var9;
                        var11 = var9;
                        if (var9) {
                            _fun10026_ip = 316;
                            continue _fun10026
                        }
                    case 409: // try_end0
                        _fun10026_ip = 4099;
                        continue _fun10026;
                    case 414: // try_start_2 // try_end1
                        var17 = var11;
                        var9 = var17;
                        if (!var17) {
                            _fun10026_ip = 436;
                            continue _fun10026
                        }
                    case 423:
                        var17 = var5;
                        var17 = var17.return;
                        var9 = var15 != var17;
                    case 436:
                        if (!var9) {
                            _fun10026_ip = 474;
                            continue _fun10026
                        }
                    case 439:
                        var17 = _closure1_slot4;
                        var18 = var5;
                        var9 = var18.return;
                        var9 = var9.bind(var18)();
                        var9 = var17.bind(var8)(var9);
                        SaveGenerator(address = 465);
                    case 463:
                        return var9;
                    case 465:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 17);
                        if (var17) {
                            _fun10026_ip = 1050;
                            continue _fun10026
                        }
                    case 474: // try_end2
                        var17 = var6;
                        if (var17) {
                            _fun10026_ip = 1045;
                            continue _fun10026
                        }
                    case 483: // try_end8
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
                            _fun10026_ip = 575;
                            continue _fun10026
                        }
                    case 536:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.responseId;
                        var19[var18] = var17;
                    case 575:
                        var17 = var4;
                        var17 = var17.responseModel;
                        if (!var17) {
                            _fun10026_ip = 626;
                            continue _fun10026
                        }
                    case 587:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.responseModel;
                        var19[var18] = var17;
                    case 626:
                        var17 = var4;
                        var17 = var17.promptTokens;
                        if (!(var8 !== var17)) {
                            _fun10026_ip = 678;
                            continue _fun10026
                        }
                    case 639:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.promptTokens;
                        var19[var18] = var17;
                    case 678:
                        var17 = var4;
                        var17 = var17.completionTokens;
                        if (!(var8 !== var17)) {
                            _fun10026_ip = 730;
                            continue _fun10026
                        }
                    case 691:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.completionTokens;
                        var19[var18] = var17;
                    case 730:
                        var17 = var4;
                        var17 = var17.totalTokens;
                        if (!(var8 !== var17)) {
                            _fun10026_ip = 782;
                            continue _fun10026
                        }
                    case 743:
                        var19 = var2;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var8)(var17);
                        var18 = var17.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var17 = var4;
                        var17 = var17.totalTokens;
                        var19[var18] = var17;
                    case 782:
                        var17 = var4;
                        var17 = var17.finishReasons;
                        var17 = var17.length;
                        if (!var17) {
                            _fun10026_ip = 855;
                            continue _fun10026
                        }
                    case 799:
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
                    case 855:
                        var18 = var7;
                        var17 = var18;
                        if (!var18) {
                            _fun10026_ip = 878;
                            continue _fun10026
                        }
                    case 864:
                        var18 = var4;
                        var18 = var18.responseTexts;
                        var17 = var18.length;
                    case 878:
                        if (!var17) {
                            _fun10026_ip = 934;
                            continue _fun10026
                        }
                    case 881:
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
                    case 934:
                        var18 = var7;
                        var17 = var18;
                        if (!var18) {
                            _fun10026_ip = 957;
                            continue _fun10026
                        }
                    case 943:
                        var18 = var4;
                        var18 = var18.toolCalls;
                        var17 = var18.length;
                    case 957:
                        if (!var17) {
                            _fun10026_ip = 1016;
                            continue _fun10026
                        }
                    case 960:
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
                    case 1016:
                        var18 = var3;
                        var19 = var18.setAttributes;
                        var17 = var2;
                        var17 = var19.bind(var18)(var17);
                        var17 = var18.end;
                        var17 = var17.bind(var18)();
                        return var16;
                    case 1045: // try_start_9
                        var16 = var1;
                        throw var16;
                    case 1050:
                        var16 = var6;
                        if (var16) {
                            _fun10026_ip = 1621;
                            continue _fun10026
                        }
                    case 1059: // try_end9
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
                            _fun10026_ip = 1151;
                            continue _fun10026
                        }
                    case 1112:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseId;
                        var18[var17] = var16;
                    case 1151:
                        var16 = var4;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun10026_ip = 1202;
                            continue _fun10026
                        }
                    case 1163:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseModel;
                        var18[var17] = var16;
                    case 1202:
                        var16 = var4;
                        var16 = var16.promptTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 1254;
                            continue _fun10026
                        }
                    case 1215:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.promptTokens;
                        var18[var17] = var16;
                    case 1254:
                        var16 = var4;
                        var16 = var16.completionTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 1306;
                            continue _fun10026
                        }
                    case 1267:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.completionTokens;
                        var18[var17] = var16;
                    case 1306:
                        var16 = var4;
                        var16 = var16.totalTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 1358;
                            continue _fun10026
                        }
                    case 1319:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.totalTokens;
                        var18[var17] = var16;
                    case 1358:
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        if (!var16) {
                            _fun10026_ip = 1431;
                            continue _fun10026
                        }
                    case 1375:
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
                    case 1431:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10026_ip = 1454;
                            continue _fun10026
                        }
                    case 1440:
                        var17 = var4;
                        var17 = var17.responseTexts;
                        var16 = var17.length;
                    case 1454:
                        if (!var16) {
                            _fun10026_ip = 1510;
                            continue _fun10026
                        }
                    case 1457:
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
                    case 1510:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10026_ip = 1533;
                            continue _fun10026
                        }
                    case 1519:
                        var17 = var4;
                        var17 = var17.toolCalls;
                        var16 = var17.length;
                    case 1533:
                        if (!var16) {
                            _fun10026_ip = 1592;
                            continue _fun10026
                        }
                    case 1536:
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
                    case 1592:
                        var17 = var3;
                        var18 = var17.setAttributes;
                        var16 = var2;
                        var16 = var18.bind(var17)(var16);
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var9;
                    case 1621: // try_start_10
                        var9 = var1;
                        throw var9;
                    case 1626: // catch_target2
                        CatchBlockStart(arg_register = 9);
                        var16 = var6;
                        if (var16) {
                            _fun10026_ip = 1636;
                            continue _fun10026
                        }
                    case 1634:
                        throw var9;
                    case 1636:
                        var9 = var1;
                        throw var9;
                    case 1641: // try_start_3
                        var16 = var11;
                        var9 = var16;
                        if (!var16) {
                            _fun10026_ip = 1663;
                            continue _fun10026
                        }
                    case 1650:
                        var16 = var5;
                        var16 = var16.return;
                        var9 = var15 != var16;
                    case 1663:
                        if (!var9) {
                            _fun10026_ip = 1701;
                            continue _fun10026
                        }
                    case 1666:
                        var16 = _closure1_slot4;
                        var17 = var5;
                        var9 = var17.return;
                        var9 = var9.bind(var17)();
                        var9 = var16.bind(var8)(var9);
                        SaveGenerator(address = 1692);
                    case 1690:
                        return var9;
                    case 1692:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 16);
                        if (var16) {
                            _fun10026_ip = 2277;
                            continue _fun10026
                        }
                    case 1701: // try_end3
                        var16 = var6;
                        if (var16) {
                            _fun10026_ip = 2272;
                            continue _fun10026
                        }
                    case 1710: // try_end10
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
                            _fun10026_ip = 1802;
                            continue _fun10026
                        }
                    case 1763:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseId;
                        var18[var17] = var16;
                    case 1802:
                        var16 = var4;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun10026_ip = 1853;
                            continue _fun10026
                        }
                    case 1814:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.responseModel;
                        var18[var17] = var16;
                    case 1853:
                        var16 = var4;
                        var16 = var16.promptTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 1905;
                            continue _fun10026
                        }
                    case 1866:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.promptTokens;
                        var18[var17] = var16;
                    case 1905:
                        var16 = var4;
                        var16 = var16.completionTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 1957;
                            continue _fun10026
                        }
                    case 1918:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.completionTokens;
                        var18[var17] = var16;
                    case 1957:
                        var16 = var4;
                        var16 = var16.totalTokens;
                        if (!(var8 !== var16)) {
                            _fun10026_ip = 2009;
                            continue _fun10026
                        }
                    case 1970:
                        var18 = var2;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var8)(var16);
                        var17 = var16.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var16 = var4;
                        var16 = var16.totalTokens;
                        var18[var17] = var16;
                    case 2009:
                        var16 = var4;
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        if (!var16) {
                            _fun10026_ip = 2082;
                            continue _fun10026
                        }
                    case 2026:
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
                    case 2082:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10026_ip = 2105;
                            continue _fun10026
                        }
                    case 2091:
                        var17 = var4;
                        var17 = var17.responseTexts;
                        var16 = var17.length;
                    case 2105:
                        if (!var16) {
                            _fun10026_ip = 2161;
                            continue _fun10026
                        }
                    case 2108:
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
                    case 2161:
                        var17 = var7;
                        var16 = var17;
                        if (!var17) {
                            _fun10026_ip = 2184;
                            continue _fun10026
                        }
                    case 2170:
                        var17 = var4;
                        var17 = var17.toolCalls;
                        var16 = var17.length;
                    case 2184:
                        if (!var16) {
                            _fun10026_ip = 2243;
                            continue _fun10026
                        }
                    case 2187:
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
                    case 2243:
                        var17 = var3;
                        var18 = var17.setAttributes;
                        var16 = var2;
                        var16 = var18.bind(var17)(var16);
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var14;
                    case 2272: // try_start_11
                        var14 = var1;
                        throw var14;
                    case 2277:
                        var14 = var6;
                        if (var14) {
                            _fun10026_ip = 2848;
                            continue _fun10026
                        }
                    case 2286: // try_end11
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
                            _fun10026_ip = 2378;
                            continue _fun10026
                        }
                    case 2339:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseId;
                        var17[var16] = var14;
                    case 2378:
                        var14 = var4;
                        var14 = var14.responseModel;
                        if (!var14) {
                            _fun10026_ip = 2429;
                            continue _fun10026
                        }
                    case 2390:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseModel;
                        var17[var16] = var14;
                    case 2429:
                        var14 = var4;
                        var14 = var14.promptTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 2481;
                            continue _fun10026
                        }
                    case 2442:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.promptTokens;
                        var17[var16] = var14;
                    case 2481:
                        var14 = var4;
                        var14 = var14.completionTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 2533;
                            continue _fun10026
                        }
                    case 2494:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.completionTokens;
                        var17[var16] = var14;
                    case 2533:
                        var14 = var4;
                        var14 = var14.totalTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 2585;
                            continue _fun10026
                        }
                    case 2546:
                        var17 = var2;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var18];
                        var14 = var16.bind(var8)(var14);
                        var16 = var14.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.totalTokens;
                        var17[var16] = var14;
                    case 2585:
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun10026_ip = 2658;
                            continue _fun10026
                        }
                    case 2602:
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
                    case 2658:
                        var16 = var7;
                        var14 = var16;
                        if (!var16) {
                            _fun10026_ip = 2681;
                            continue _fun10026
                        }
                    case 2667:
                        var16 = var4;
                        var16 = var16.responseTexts;
                        var14 = var16.length;
                    case 2681:
                        if (!var14) {
                            _fun10026_ip = 2737;
                            continue _fun10026
                        }
                    case 2684:
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
                    case 2737:
                        var16 = var7;
                        var14 = var16;
                        if (!var16) {
                            _fun10026_ip = 2760;
                            continue _fun10026
                        }
                    case 2746:
                        var16 = var4;
                        var16 = var16.toolCalls;
                        var14 = var16.length;
                    case 2760:
                        if (!var14) {
                            _fun10026_ip = 2819;
                            continue _fun10026
                        }
                    case 2763:
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
                    case 2819:
                        var16 = var3;
                        var17 = var16.setAttributes;
                        var14 = var2;
                        var14 = var17.bind(var16)(var14);
                        var14 = var16.end;
                        var14 = var14.bind(var16)();
                        return var9;
                    case 2848: // try_start_12
                        var9 = var1;
                        throw var9;
                    case 2853: // catch_target3
                        CatchBlockStart(arg_register = 9);
                        var14 = var6;
                        if (var14) {
                            _fun10026_ip = 2863;
                            continue _fun10026
                        }
                    case 2861:
                        throw var9;
                    case 2863:
                        var9 = var1;
                        throw var9;
                    case 2868: // try_start_4
                        var14 = var11;
                        var9 = var14;
                        if (!var14) {
                            _fun10026_ip = 2890;
                            continue _fun10026
                        }
                    case 2877:
                        var14 = var5;
                        var14 = var14.return;
                        var9 = var15 != var14;
                    case 2890:
                        if (!var9) {
                            _fun10026_ip = 2928;
                            continue _fun10026
                        }
                    case 2893:
                        var14 = _closure1_slot4;
                        var15 = var5;
                        var9 = var15.return;
                        var9 = var9.bind(var15)();
                        var9 = var14.bind(var8)(var9);
                        SaveGenerator(address = 2919);
                    case 2917:
                        return var9;
                    case 2919:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 14);
                        if (var14) {
                            _fun10026_ip = 3504;
                            continue _fun10026
                        }
                    case 2928: // try_end4
                        var14 = var6;
                        if (var14) {
                            _fun10026_ip = 3499;
                            continue _fun10026
                        }
                    case 2937: // try_end12
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
                            _fun10026_ip = 3029;
                            continue _fun10026
                        }
                    case 2990:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseId;
                        var16[var15] = var14;
                    case 3029:
                        var14 = var4;
                        var14 = var14.responseModel;
                        if (!var14) {
                            _fun10026_ip = 3080;
                            continue _fun10026
                        }
                    case 3041:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.responseModel;
                        var16[var15] = var14;
                    case 3080:
                        var14 = var4;
                        var14 = var14.promptTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 3132;
                            continue _fun10026
                        }
                    case 3093:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.promptTokens;
                        var16[var15] = var14;
                    case 3132:
                        var14 = var4;
                        var14 = var14.completionTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 3184;
                            continue _fun10026
                        }
                    case 3145:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.completionTokens;
                        var16[var15] = var14;
                    case 3184:
                        var14 = var4;
                        var14 = var14.totalTokens;
                        if (!(var8 !== var14)) {
                            _fun10026_ip = 3236;
                            continue _fun10026
                        }
                    case 3197:
                        var16 = var2;
                        var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var17];
                        var14 = var15.bind(var8)(var14);
                        var15 = var14.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var14 = var4;
                        var14 = var14.totalTokens;
                        var16[var15] = var14;
                    case 3236:
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun10026_ip = 3309;
                            continue _fun10026
                        }
                    case 3253:
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
                    case 3309:
                        var15 = var7;
                        var14 = var15;
                        if (!var15) {
                            _fun10026_ip = 3332;
                            continue _fun10026
                        }
                    case 3318:
                        var15 = var4;
                        var15 = var15.responseTexts;
                        var14 = var15.length;
                    case 3332:
                        if (!var14) {
                            _fun10026_ip = 3388;
                            continue _fun10026
                        }
                    case 3335:
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
                    case 3388:
                        var15 = var7;
                        var14 = var15;
                        if (!var15) {
                            _fun10026_ip = 3411;
                            continue _fun10026
                        }
                    case 3397:
                        var15 = var4;
                        var15 = var15.toolCalls;
                        var14 = var15.length;
                    case 3411:
                        if (!var14) {
                            _fun10026_ip = 3470;
                            continue _fun10026
                        }
                    case 3414:
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
                    case 3470:
                        var15 = var3;
                        var16 = var15.setAttributes;
                        var14 = var2;
                        var14 = var16.bind(var15)(var14);
                        var14 = var15.end;
                        var14 = var14.bind(var15)();
                        return var13;
                    case 3499: // try_start_13
                        var13 = var1;
                        throw var13;
                    case 3504:
                        var13 = var6;
                        if (var13) {
                            _fun10026_ip = 4075;
                            continue _fun10026
                        }
                    case 3513: // try_end13
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
                            _fun10026_ip = 3605;
                            continue _fun10026
                        }
                    case 3566:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseId;
                        var16[var14] = var13;
                    case 3605:
                        var13 = var4;
                        var13 = var13.responseModel;
                        if (!var13) {
                            _fun10026_ip = 3656;
                            continue _fun10026
                        }
                    case 3617:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseModel;
                        var16[var14] = var13;
                    case 3656:
                        var13 = var4;
                        var13 = var13.promptTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 3708;
                            continue _fun10026
                        }
                    case 3669:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.promptTokens;
                        var16[var14] = var13;
                    case 3708:
                        var13 = var4;
                        var13 = var13.completionTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 3760;
                            continue _fun10026
                        }
                    case 3721:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.completionTokens;
                        var16[var14] = var13;
                    case 3760:
                        var13 = var4;
                        var13 = var13.totalTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 3812;
                            continue _fun10026
                        }
                    case 3773:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.totalTokens;
                        var16[var14] = var13;
                    case 3812:
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var13.length;
                        if (!var13) {
                            _fun10026_ip = 3885;
                            continue _fun10026
                        }
                    case 3829:
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
                    case 3885:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10026_ip = 3908;
                            continue _fun10026
                        }
                    case 3894:
                        var14 = var4;
                        var14 = var14.responseTexts;
                        var13 = var14.length;
                    case 3908:
                        if (!var13) {
                            _fun10026_ip = 3964;
                            continue _fun10026
                        }
                    case 3911:
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
                    case 3964:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10026_ip = 3987;
                            continue _fun10026
                        }
                    case 3973:
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var13 = var14.length;
                    case 3987:
                        if (!var13) {
                            _fun10026_ip = 4046;
                            continue _fun10026
                        }
                    case 3990:
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
                    case 4046:
                        var12 = var3;
                        var13 = var12.setAttributes;
                        var10 = var2;
                        var10 = var13.bind(var12)(var10);
                        var10 = var12.end;
                        var10 = var10.bind(var12)();
                        return var9;
                    case 4075: // try_start_14
                        var9 = var1;
                        throw var9;
                    case 4080: // catch_target4
                        CatchBlockStart(arg_register = 9);
                        var10 = var6;
                        if (var10) {
                            _fun10026_ip = 4090;
                            continue _fun10026
                        }
                    case 4088:
                        throw var9;
                    case 4090:
                        var9 = var1;
                        throw var9;
                    case 4095: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = true;
                    case 4099: // try_start_6 // try_end5
                        var10 = var11;
                        var9 = var10;
                        if (!var10) {
                            _fun10026_ip = 4123;
                            continue _fun10026
                        }
                    case 4108:
                        var10 = var5;
                        var12 = var10.return;
                        var10 = null;
                        var9 = var10 != var12;
                    case 4123:
                        if (!var9) {
                            _fun10026_ip = 4164;
                            continue _fun10026
                        }
                    case 4126:
                        var12 = _closure1_slot4;
                        var13 = var5;
                        var9 = var13.return;
                        var9 = var9.bind(var13)();
                        var9 = var12.bind(var8)(var9);
                        SaveGenerator(address = 4155);
                    case 4153:
                        return var9;
                    case 4155:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 12);
                        if (var12) {
                            _fun10026_ip = 4747;
                            continue _fun10026
                        }
                    case 4164: // try_end6
                        var12 = var6;
                        if (var12) {
                            _fun10026_ip = 4742;
                            continue _fun10026
                        }
                    case 4173: // try_end14
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
                            _fun10026_ip = 4268;
                            continue _fun10026
                        }
                    case 4229:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseId;
                        var16[var14] = var13;
                    case 4268:
                        var13 = var4;
                        var13 = var13.responseModel;
                        if (!var13) {
                            _fun10026_ip = 4319;
                            continue _fun10026
                        }
                    case 4280:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.responseModel;
                        var16[var14] = var13;
                    case 4319:
                        var13 = var4;
                        var13 = var13.promptTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 4371;
                            continue _fun10026
                        }
                    case 4332:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.promptTokens;
                        var16[var14] = var13;
                    case 4371:
                        var13 = var4;
                        var13 = var13.completionTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 4423;
                            continue _fun10026
                        }
                    case 4384:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.completionTokens;
                        var16[var14] = var13;
                    case 4423:
                        var13 = var4;
                        var13 = var13.totalTokens;
                        if (!(var8 !== var13)) {
                            _fun10026_ip = 4475;
                            continue _fun10026
                        }
                    case 4436:
                        var16 = var2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var15];
                        var13 = var14.bind(var8)(var13);
                        var14 = var13.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var13 = var4;
                        var13 = var13.totalTokens;
                        var16[var14] = var13;
                    case 4475:
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var13 = var13.length;
                        if (!var13) {
                            _fun10026_ip = 4550;
                            continue _fun10026
                        }
                    case 4492:
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
                    case 4550:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10026_ip = 4573;
                            continue _fun10026
                        }
                    case 4559:
                        var14 = var4;
                        var14 = var14.responseTexts;
                        var13 = var14.length;
                    case 4573:
                        if (!var13) {
                            _fun10026_ip = 4629;
                            continue _fun10026
                        }
                    case 4576:
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
                    case 4629:
                        var14 = var7;
                        var13 = var14;
                        if (!var14) {
                            _fun10026_ip = 4652;
                            continue _fun10026
                        }
                    case 4638:
                        var14 = var4;
                        var14 = var14.toolCalls;
                        var13 = var14.length;
                    case 4652:
                        if (!var13) {
                            _fun10026_ip = 4713;
                            continue _fun10026
                        }
                    case 4655:
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
                    case 4713:
                        var13 = var3;
                        var14 = var13.setAttributes;
                        var12 = var2;
                        var12 = var14.bind(var13)(var12);
                        var12 = var13.end;
                        var12 = var12.bind(var13)();
                        return var8;
                    case 4742: // try_start_15
                        var12 = var1;
                        throw var12;
                    case 4747:
                        var12 = var6;
                        if (var12) {
                            _fun10026_ip = 5322;
                            continue _fun10026
                        }
                    case 4756: // try_end15
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
                            _fun10026_ip = 4848;
                            continue _fun10026
                        }
                    case 4809:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.responseId;
                        var15[var13] = var12;
                    case 4848:
                        var12 = var4;
                        var12 = var12.responseModel;
                        if (!var12) {
                            _fun10026_ip = 4899;
                            continue _fun10026
                        }
                    case 4860:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.responseModel;
                        var15[var13] = var12;
                    case 4899:
                        var12 = var4;
                        var12 = var12.promptTokens;
                        if (!(var8 !== var12)) {
                            _fun10026_ip = 4951;
                            continue _fun10026
                        }
                    case 4912:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.promptTokens;
                        var15[var13] = var12;
                    case 4951:
                        var12 = var4;
                        var12 = var12.completionTokens;
                        if (!(var8 !== var12)) {
                            _fun10026_ip = 5003;
                            continue _fun10026
                        }
                    case 4964:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.completionTokens;
                        var15[var13] = var12;
                    case 5003:
                        var12 = var4;
                        var12 = var12.totalTokens;
                        if (!(var8 !== var12)) {
                            _fun10026_ip = 5055;
                            continue _fun10026
                        }
                    case 5016:
                        var15 = var2;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var14];
                        var12 = var13.bind(var8)(var12);
                        var13 = var12.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var12 = var4;
                        var12 = var12.totalTokens;
                        var15[var13] = var12;
                    case 5055:
                        var12 = var4;
                        var12 = var12.finishReasons;
                        var12 = var12.length;
                        if (!var12) {
                            _fun10026_ip = 5130;
                            continue _fun10026
                        }
                    case 5072:
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
                    case 5130:
                        var13 = var7;
                        var12 = var13;
                        if (!var13) {
                            _fun10026_ip = 5153;
                            continue _fun10026
                        }
                    case 5139:
                        var13 = var4;
                        var13 = var13.responseTexts;
                        var12 = var13.length;
                    case 5153:
                        if (!var12) {
                            _fun10026_ip = 5209;
                            continue _fun10026
                        }
                    case 5156:
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
                    case 5209:
                        var13 = var7;
                        var12 = var13;
                        if (!var13) {
                            _fun10026_ip = 5232;
                            continue _fun10026
                        }
                    case 5218:
                        var13 = var4;
                        var13 = var13.toolCalls;
                        var12 = var13.length;
                    case 5232:
                        if (!var12) {
                            _fun10026_ip = 5293;
                            continue _fun10026
                        }
                    case 5235:
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
                    case 5293:
                        var12 = var3;
                        var13 = var12.setAttributes;
                        var10 = var2;
                        var10 = var13.bind(var12)(var10);
                        var10 = var12.end;
                        var10 = var10.bind(var12)();
                        return var9;
                    case 5322: // try_start_16
                        var9 = var1;
                        throw var9;
                    case 5327: // catch_target6
                        CatchBlockStart(arg_register = 9);
                        var10 = var6;
                        if (var10) {
                            _fun10026_ip = 5337;
                            continue _fun10026
                        }
                    case 5335:
                        throw var9;
                    case 5337:
                        var9 = var1;
                        throw var9;
                    case 5342: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 10);
                    case 5344: // try_start_7
                        var9 = var11;
                        if (!var11) {
                            _fun10026_ip = 5365;
                            continue _fun10026
                        }
                    case 5350:
                        var11 = var5;
                        var12 = var11.return;
                        var11 = null;
                        var9 = var11 != var12;
                    case 5365:
                        if (!var9) {
                            _fun10026_ip = 5403;
                            continue _fun10026
                        }
                    case 5368:
                        var11 = _closure1_slot4;
                        var12 = var5;
                        var5 = var12.return;
                        var5 = var5.bind(var12)();
                        var5 = var11.bind(var8)(var5);
                        SaveGenerator(address = 5397);
                    case 5395:
                        return var5;
                    case 5397:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 11);
                        if (var11) {
                            _fun10026_ip = 5416;
                            continue _fun10026
                        }
                    case 5403: // try_end7
                        var11 = var6;
                        if (var11) {
                            _fun10026_ip = 5411;
                            continue _fun10026
                        }
                    case 5409:
                        throw var10;
                    case 5411:
                        var10 = var1;
                        throw var10;
                    case 5416:
                        var10 = var6;
                        if (var10) {
                            _fun10026_ip = 5991;
                            continue _fun10026
                        }
                    case 5425: // try_end16
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
                            _fun10026_ip = 5517;
                            continue _fun10026
                        }
                    case 5478:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.responseId;
                        var13[var11] = var10;
                    case 5517:
                        var10 = var4;
                        var10 = var10.responseModel;
                        if (!var10) {
                            _fun10026_ip = 5568;
                            continue _fun10026
                        }
                    case 5529:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.responseModel;
                        var13[var11] = var10;
                    case 5568:
                        var10 = var4;
                        var10 = var10.promptTokens;
                        if (!(var8 !== var10)) {
                            _fun10026_ip = 5620;
                            continue _fun10026
                        }
                    case 5581:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.promptTokens;
                        var13[var11] = var10;
                    case 5620:
                        var10 = var4;
                        var10 = var10.completionTokens;
                        if (!(var8 !== var10)) {
                            _fun10026_ip = 5672;
                            continue _fun10026
                        }
                    case 5633:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.completionTokens;
                        var13[var11] = var10;
                    case 5672:
                        var10 = var4;
                        var10 = var10.totalTokens;
                        if (!(var8 !== var10)) {
                            _fun10026_ip = 5724;
                            continue _fun10026
                        }
                    case 5685:
                        var13 = var2;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var12];
                        var10 = var11.bind(var8)(var10);
                        var11 = var10.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var10 = var4;
                        var10 = var10.totalTokens;
                        var13[var11] = var10;
                    case 5724:
                        var10 = var4;
                        var10 = var10.finishReasons;
                        var10 = var10.length;
                        if (!var10) {
                            _fun10026_ip = 5799;
                            continue _fun10026
                        }
                    case 5741:
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
                    case 5799:
                        var11 = var7;
                        var10 = var11;
                        if (!var11) {
                            _fun10026_ip = 5822;
                            continue _fun10026
                        }
                    case 5808:
                        var11 = var4;
                        var11 = var11.responseTexts;
                        var10 = var11.length;
                    case 5822:
                        if (!var10) {
                            _fun10026_ip = 5878;
                            continue _fun10026
                        }
                    case 5825:
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
                    case 5878:
                        var11 = var7;
                        var10 = var11;
                        if (!var11) {
                            _fun10026_ip = 5901;
                            continue _fun10026
                        }
                    case 5887:
                        var11 = var4;
                        var11 = var11.toolCalls;
                        var10 = var11.length;
                    case 5901:
                        if (!var10) {
                            _fun10026_ip = 5962;
                            continue _fun10026
                        }
                    case 5904:
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
                    case 5962:
                        var10 = var3;
                        var11 = var10.setAttributes;
                        var9 = var2;
                        var9 = var11.bind(var10)(var9);
                        var9 = var10.end;
                        var9 = var9.bind(var10)();
                        return var5;
                    case 5991: // try_start_17
                        var5 = var1;
                        throw var5;
                    case 5996: // catch_target7
                        CatchBlockStart(arg_register = 5);
                        if (var6) {
                            _fun10026_ip = 6003;
                            continue _fun10026
                        }
                    case 6001:
                        throw var5;
                    case 6003:
                        throw var1;
                    case 6005: // try_end17 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
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
                            _fun10026_ip = 6102;
                            continue _fun10026
                        }
                    case 6063:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.responseId;
                        var11[var10] = var6;
                    case 6102:
                        var6 = var4;
                        var6 = var6.responseModel;
                        if (!var6) {
                            _fun10026_ip = 6153;
                            continue _fun10026
                        }
                    case 6114:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.responseModel;
                        var11[var10] = var6;
                    case 6153:
                        var6 = var4;
                        var6 = var6.promptTokens;
                        if (!(var8 !== var6)) {
                            _fun10026_ip = 6205;
                            continue _fun10026
                        }
                    case 6166:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.promptTokens;
                        var11[var10] = var6;
                    case 6205:
                        var6 = var4;
                        var6 = var6.completionTokens;
                        if (!(var8 !== var6)) {
                            _fun10026_ip = 6257;
                            continue _fun10026
                        }
                    case 6218:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.completionTokens;
                        var11[var10] = var6;
                    case 6257:
                        var6 = var4;
                        var6 = var6.totalTokens;
                        if (!(var8 !== var6)) {
                            _fun10026_ip = 6309;
                            continue _fun10026
                        }
                    case 6270:
                        var11 = var2;
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var10.bind(var8)(var6);
                        var10 = var6.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                        var6 = var4;
                        var6 = var6.totalTokens;
                        var11[var10] = var6;
                    case 6309:
                        var6 = var4;
                        var6 = var6.finishReasons;
                        var6 = var6.length;
                        if (!var6) {
                            _fun10026_ip = 6384;
                            continue _fun10026
                        }
                    case 6326:
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
                    case 6384:
                        var10 = var7;
                        var6 = var10;
                        if (!var10) {
                            _fun10026_ip = 6407;
                            continue _fun10026
                        }
                    case 6393:
                        var10 = var4;
                        var10 = var10.responseTexts;
                        var6 = var10.length;
                    case 6407:
                        if (!var6) {
                            _fun10026_ip = 6463;
                            continue _fun10026
                        }
                    case 6410:
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
                    case 6463:
                        var6 = var7;
                        if (!var7) {
                            _fun10026_ip = 6483;
                            continue _fun10026
                        }
                    case 6469:
                        var7 = var4;
                        var7 = var7.toolCalls;
                        var6 = var7.length;
                    case 6483:
                        if (!var6) {
                            _fun10026_ip = 6541;
                            continue _fun10026
                        }
                    case 6486:
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
                    case 6541:
                        var4 = var3.setAttributes;
                        var2 = var4.bind(var3)(var2);
                        var2 = var3.end;
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 6563:
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