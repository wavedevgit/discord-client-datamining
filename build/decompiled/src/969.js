// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var1
        var0 = function(arg0) { // Original name: AsyncFromSyncIteratorContinuation, environment: var3
            _fun9970: for (var _fun9970_ip = 0;;) switch (_fun9970_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun9970_ip = 72;
                        continue _fun9970
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
        _closure1_slot5 = var2;
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
            _fun9974: for (var _fun9974_ip = 0;;) switch (_fun9974_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun9974_ip = 53;
                        continue _fun9974
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun9974_ip = 87;
                    continue _fun9974;
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
            _fun9975: for (var _fun9975_ip = 0;;) switch (_fun9975_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun9975_ip = 53;
                        continue _fun9975
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun9975_ip = 75;
                    continue _fun9975;
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
        var2 = _closure1_slot5;
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
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: processEvent, environment: var1
        _fun9976: for (var _fun9976_ip = 0;;) switch (_fun9976_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = arg2;
                var8 = arg3;
                if (!var2) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 18:
                var3 = 'object';
                var1 = typeof var2;
                if (!(var3 === var1)) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 32:
                var1 = 'type';
                var1 = var1 in var2;
                if (!var1) {
                    _fun9976_ip = 59;
                    continue _fun9976
                }
            case 43:
                var3 = var2.type;
                var5 = 'string';
                var3 = typeof var3;
                var1 = var5 === var3;
            case 59:
                if (!var1) {
                    _fun9976_ip = 75;
                    continue _fun9976
                }
            case 62:
                var5 = var2.type;
                var3 = 'error';
                var1 = var3 === var5;
            case 75:
                if (!var1) {
                    _fun9976_ip = 226;
                    continue _fun9976
                }
            case 81:
                var7 = var8.setStatus;
                var5 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 3;
                var9 = var9[var6];
                var6 = undefined;
                var9 = var10.bind(var6)(var9);
                var9 = var9.SPAN_STATUS_ERROR;
                var5.code = var9;
                var11 = var2.error;
                var9 = null;
                var12 = var9 == var11;
                var10 = undefined;
                if (var12) {
                    _fun9976_ip = 145;
                    continue _fun9976
                }
            case 140:
                var10 = var11.type;
            case 145:
                var11 = var9 != var10;
                var9 = 'internal_error';
                if (!var11) {
                    _fun9976_ip = 161;
                    continue _fun9976
                }
            case 158:
                var9 = var10;
            case 161:
                var5.message = var9;
                var5 = var7.bind(var8)(var5);
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var7 = var5.bind(var6)(var3);
                var6 = var7.captureException;
                var5 = var2.error;
                var3 = {};
                var8 = {
                    'handled': false,
                    'type': 'auto.ai.anthropic.anthropic_error'
                };
                var3.mechanism = var8;
                var3 = var6.bind(var7)(var5, var3);
                var1 = true;
            case 226:
                if (var1) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 232:
                var3 = var2.type;
                var1 = 'message_delta';
                var1 = var1 === var3;
                if (!var1) {
                    _fun9976_ip = 256;
                    continue _fun9976
                }
            case 250:
                var1 = var2.usage;
            case 256:
                if (!var1) {
                    _fun9976_ip = 273;
                    continue _fun9976
                }
            case 259:
                var5 = var2.usage;
                var3 = 'output_tokens';
                var1 = var3 in var5;
            case 273:
                if (!var1) {
                    _fun9976_ip = 299;
                    continue _fun9976
                }
            case 276:
                var3 = var2.usage;
                var3 = var3.output_tokens;
                var5 = 'number';
                var3 = typeof var3;
                var1 = var5 === var3;
            case 299:
                if (!var1) {
                    _fun9976_ip = 320;
                    continue _fun9976
                }
            case 302:
                var1 = var2.usage;
                var1 = var1.output_tokens;
                var4.completionTokens = var1;
            case 320:
                var1 = var2.message;
                if (!var1) {
                    _fun9976_ip = 531;
                    continue _fun9976
                }
            case 331:
                var1 = var2.message;
                var3 = var1.id;
                if (!var3) {
                    _fun9976_ip = 355;
                    continue _fun9976
                }
            case 344:
                var3 = var1.id;
                var4.responseId = var3;
            case 355:
                var3 = var1.model;
                if (!var3) {
                    _fun9976_ip = 376;
                    continue _fun9976
                }
            case 364:
                var3 = var1.model;
                var4.responseModel = var3;
            case 376:
                var3 = var1.stop_reason;
                if (!var3) {
                    _fun9976_ip = 407;
                    continue _fun9976
                }
            case 385:
                var6 = var4.finishReasons;
                var5 = var6.push;
                var3 = var1.stop_reason;
                var3 = var5.bind(var6)(var3);
            case 407:
                var3 = var1.usage;
                if (!var3) {
                    _fun9976_ip = 531;
                    continue _fun9976
                }
            case 416:
                var3 = var1.usage;
                var3 = var3.input_tokens;
                var5 = 'number';
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9976_ip = 457;
                    continue _fun9976
                }
            case 439:
                var3 = var1.usage;
                var3 = var3.input_tokens;
                var4.promptTokens = var3;
            case 457:
                var3 = var1.usage;
                var3 = var3.cache_creation_input_tokens;
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9976_ip = 494;
                    continue _fun9976
                }
            case 476:
                var3 = var1.usage;
                var3 = var3.cache_creation_input_tokens;
                var4.cacheCreationInputTokens = var3;
            case 494:
                var3 = var1.usage;
                var3 = var3.cache_read_input_tokens;
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9976_ip = 531;
                    continue _fun9976
                }
            case 513:
                var1 = var1.usage;
                var1 = var1.cache_read_input_tokens;
                var4.cacheReadInputTokens = var1;
            case 531:
                var3 = var2.type;
                var1 = 'content_block_start';
                var1 = var1 === var3;
                if (!var1) {
                    _fun9976_ip = 565;
                    continue _fun9976
                }
            case 549:
                var3 = var2.index;
                var5 = 'number';
                var3 = typeof var3;
                var1 = var5 === var3;
            case 565:
                if (!var1) {
                    _fun9976_ip = 574;
                    continue _fun9976
                }
            case 568:
                var1 = var2.content_block;
            case 574:
                if (!var1) {
                    _fun9976_ip = 681;
                    continue _fun9976
                }
            case 577:
                var1 = var2.content_block;
                var3 = var1.type;
                var1 = 'tool_use';
                var1 = var1 !== var3;
                if (!var1) {
                    _fun9976_ip = 622;
                    continue _fun9976
                }
            case 601:
                var3 = var2.content_block;
                var5 = var3.type;
                var3 = 'server_tool_use';
                var1 = var3 !== var5;
            case 622:
                if (var1) {
                    _fun9976_ip = 681;
                    continue _fun9976
                }
            case 625:
                var5 = var4.activeToolBlocks;
                var3 = var2.index;
                var1 = {};
                var6 = var2.content_block;
                var6 = var6.id;
                var1.id = var6;
                var6 = var2.content_block;
                var6 = var6.name;
                var1.name = var6;
                var6 = new Array(0);
                var1.inputJsonParts = var6;
                var5[var3] = var1;
            case 681:
                var3 = var2.type;
                var1 = 'content_block_delta';
                if (!(var1 === var3)) {
                    _fun9976_ip = 868;
                    continue _fun9976
                }
            case 699:
                var1 = var2.delta;
                if (!var1) {
                    _fun9976_ip = 868;
                    continue _fun9976
                }
            case 711:
                var1 = var2.index;
                var3 = 'number';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun9976_ip = 813;
                    continue _fun9976
                }
            case 727:
                var3 = var2.delta;
                var1 = 'partial_json';
                var1 = var1 in var3;
                if (!var1) {
                    _fun9976_ip = 813;
                    continue _fun9976
                }
            case 744:
                var1 = var2.delta;
                var1 = var1.partial_json;
                var3 = 'string';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun9976_ip = 813;
                    continue _fun9976
                }
            case 767:
                var3 = var4.activeToolBlocks;
                var1 = var2.index;
                var1 = var3[var1];
                if (!var1) {
                    _fun9976_ip = 813;
                    continue _fun9976
                }
            case 785:
                var5 = var1.inputJsonParts;
                var3 = var5.push;
                var1 = var2.delta;
                var1 = var1.partial_json;
                var1 = var3.bind(var5)(var1);
            case 813:
                if (!var0) {
                    _fun9976_ip = 838;
                    continue _fun9976
                }
            case 816:
                var1 = var2.delta;
                var1 = var1.text;
                var3 = 'string';
                var1 = typeof var1;
                var0 = var3 === var1;
            case 838:
                if (!var0) {
                    _fun9976_ip = 868;
                    continue _fun9976
                }
            case 841:
                var3 = var4.responseTexts;
                var1 = var3.push;
                var0 = var2.delta;
                var0 = var0.text;
                var0 = var1.bind(var3)(var0);
            case 868:
                var0 = var2;
                var1 = var4;
                var6 = undefined;
                var5 = undefined;
                var3 = undefined;
                var4 = var2.type;
                var2 = 'content_block_stop';
                if (!(var2 === var4)) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 898:
                var2 = var0;
                var2 = var2.index;
                var4 = 'number';
                var2 = typeof var2;
                if (!(var4 === var2)) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 920:
                var2 = var1;
                var4 = var2.activeToolBlocks;
                var2 = var0;
                var2 = var2.index;
                var2 = var4[var2];
                var6 = var2;
                if (!var2) {
                    _fun9976_ip = 1088;
                    continue _fun9976
                }
            case 950:
                var2 = var6;
                var7 = var2.inputJsonParts;
                var4 = var7.join;
                var2 = '';
                var3 = var4.bind(var7)(var2);
            case 973: // try_start_0
                var2 = var3;
                if (var2) {
                    _fun9976_ip = 983;
                    continue _fun9976
                }
            case 979:
                var2 = {};
                _fun9976_ip = 1005;
                continue _fun9976;
            case 983:
                var4 = global;
                var8 = var4.JSON;
                var7 = var8.parse;
                var4 = var3;
                var2 = var7.bind(var8)(var4);
            case 1005:
                var5 = var2;
            case 1008: // try_end0
                _fun9976_ip = 1022;
                continue _fun9976;
            case 1010: // catch_target0
                CatchBlockStart(arg_register = 2);
                var2 = {};
                var2.__unparsed = var3;
                var5 = var2;
            case 1022:
                var4 = var1.toolCalls;
                var3 = var4.push;
                var2 = {};
                var7 = 'tool_use';
                var2.type = var7;
                var7 = var6.id;
                var2.id = var7;
                var6 = var6.name;
                var2.name = var6;
                var2.input = var5;
                var2 = var3.bind(var4)(var2);
                var1 = var1.activeToolBlocks;
                var0 = var0.index;
                var0 = delete var1[var0];
            case 1088:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() { // Original name: _instrumentAsyncIterableStream, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun9979: for (var _fun9979_ip = 0;;) switch (_fun9979_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 8);
                        if (var8) {
                            _fun9979_ip = 6710;
                            continue _fun9979
                        }
                    case 10:
                        var7 = arg0;
                        var2 = arg1;
                        var5 = arg2;
                        var9 = undefined;
                        var3 = undefined;
                        var1 = undefined;
                        var10 = undefined;
                        var6 = undefined;
                        var18 = undefined;
                        var4 = undefined;
                        var8 = {};
                        var11 = new Array(0);
                        var8.responseTexts = var11;
                        var11 = new Array(0);
                        var8.finishReasons = var11;
                        var15 = '';
                        var8.responseId = var15;
                        var8.responseModel = var15;
                        var8.promptTokens = var9;
                        var8.completionTokens = var9;
                        var8.cacheCreationInputTokens = var9;
                        var8.cacheReadInputTokens = var9;
                        var11 = new Array(0);
                        var8.toolCalls = var11;
                        var11 = {};
                        var8.activeToolBlocks = var11;
                        var3 = var8;
                    case 106: // try_start_8
                        var10 = false;
                        var6 = false;
                    case 110: // try_start_0 // try_start_1
                        var13 = var7;
                        var8 = global;
                        var7 = var8.Symbol;
                        var11 = 'undefined';
                        var7 = typeof var7;
                        var23 = undefined;
                        var22 = undefined;
                        if (!(var11 !== var7)) {
                            _fun9979_ip = 158;
                            continue _fun9979
                        }
                    case 135:
                        var7 = var8.Symbol;
                        var23 = var7.asyncIterator;
                        var7 = var8.Symbol;
                        var22 = var7.iterator;
                    case 158:
                        var21 = 1;
                        var20 = '@@asyncIterator';
                        var19 = '@@iterator';
                        var14 = null;
                        var16 = undefined;
                    case 175:
                        if (!var23) {
                            _fun9979_ip = 189;
                            continue _fun9979
                        }
                    case 178:
                        var11 = var13[var23];
                        var16 = var11;
                        if (!(var14 == var16)) {
                            _fun9979_ip = 291;
                            continue _fun9979
                        }
                    case 189:
                        if (!var22) {
                            _fun9979_ip = 203;
                            continue _fun9979
                        }
                    case 192:
                        var12 = var13[var22];
                        var16 = var12;
                        if (!(var14 == var16)) {
                            _fun9979_ip = 252;
                            continue _fun9979
                        }
                    case 203:
                        var7 = parseFloat(var21);
                        var21 = var7 - 1;
                        var23 = var20;
                        var22 = var19;
                        if (var7) {
                            _fun9979_ip = 175;
                            continue _fun9979
                        }
                    case 218:
                        var19 = var8.TypeError;
                        var7 = var19.prototype;
                        var16 = Object.create(var7, {
                            constructor: {
                                value: var19
                            }
                        });
                        var31 = 'Object is not async iterable';
                        var32 = var16;
                        var7 = new var32[var19](var31, var30);
                        var7 = var7 instanceof Object ? var7 : var16;
                        throw var7;
                    case 252:
                        var16 = _closure1_slot5;
                        var7 = var12.call;
                        var31 = var7.bind(var12)(var13);
                        var12 = var16.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var16
                            }
                        });
                        var32 = var12;
                        var7 = new var32[var16](var31, var30);
                        var12 = var7 instanceof Object ? var7 : var12;
                        _fun9979_ip = 301;
                        continue _fun9979;
                    case 291:
                        var7 = var11.call;
                        var12 = var7.bind(var11)(var13);
                    case 301:
                        var4 = var12;
                        var11 = _closure1_slot3;
                        var7 = var12.next;
                        var7 = var7.bind(var12)();
                        var11 = var11.bind(var9)(var7);
                        SaveGenerator(address = 329);
                    case 327:
                        return var11;
                    case 329:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 7);
                        if (var7) {
                            _fun9979_ip = 2943;
                            continue _fun9979
                        }
                    case 338:
                        var18 = var11;
                        var7 = var11.done;
                        var7 = !var7;
                        var10 = var7;
                        if (!var7) {
                            _fun9979_ip = 448;
                            continue _fun9979
                        }
                    case 355:
                        var7 = var18;
                        var12 = var7.value;
                        var20 = _closure1_slot6;
                        var30 = var3;
                        var29 = var5;
                        var28 = var2;
                        var32 = undefined;
                        var31 = var12;
                        var7 = var32[var20](var31, var30, var29, var28, var27);
                        SaveGenerator(address = 389);
                    case 387:
                        return var12;
                    case 389:
                        ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 7);
                        if (var7) {
                            _fun9979_ip = 1698;
                            continue _fun9979
                        }
                    case 398:
                        var10 = false;
                        var16 = _closure1_slot3;
                        var19 = var4;
                        var7 = var19.next;
                        var7 = var7.bind(var19)();
                        var16 = var16.bind(var9)(var7);
                        SaveGenerator(address = 425);
                    case 423:
                        return var16;
                    case 425:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 7);
                        if (var7) {
                            _fun9979_ip = 453;
                            continue _fun9979
                        }
                    case 431:
                        var18 = var16;
                        var7 = var16.done;
                        var7 = !var7;
                        var10 = var7;
                        if (var7) {
                            _fun9979_ip = 355;
                            continue _fun9979
                        }
                    case 448: // try_end0
                        _fun9979_ip = 4192;
                        continue _fun9979;
                    case 453: // try_start_2 // try_end1
                        var17 = var10;
                        var7 = var17;
                        if (!var17) {
                            _fun9979_ip = 475;
                            continue _fun9979
                        }
                    case 462:
                        var17 = var4;
                        var17 = var17.return;
                        var7 = var14 != var17;
                    case 475:
                        if (!var7) {
                            _fun9979_ip = 513;
                            continue _fun9979
                        }
                    case 478:
                        var17 = _closure1_slot3;
                        var18 = var4;
                        var7 = var18.return;
                        var7 = var7.bind(var18)();
                        var7 = var17.bind(var9)(var7);
                        SaveGenerator(address = 504);
                    case 502:
                        return var7;
                    case 504:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 17);
                        if (var17) {
                            _fun9979_ip = 1098;
                            continue _fun9979
                        }
                    case 513: // try_end2
                        var17 = var6;
                        if (var17) {
                            _fun9979_ip = 1093;
                            continue _fun9979
                        }
                    case 522: // try_end8
                        var17 = var3;
                        var17 = var17.responseId;
                        if (!var17) {
                            _fun9979_ip = 596;
                            continue _fun9979
                        }
                    case 534:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var22 = _closure1_slot2;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot1;
                        var17 = 5;
                        var17 = var21[var17];
                        var17 = var20.bind(var9)(var17);
                        var21 = var17.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var17 = var3;
                        var20 = var17.responseId;
                        var17 = {};
                        var17 = var22.bind(var9)(var17, var21, var20);
                        var17 = var18.bind(var19)(var17);
                    case 596:
                        var17 = var3;
                        var17 = var17.responseModel;
                        if (!var17) {
                            _fun9979_ip = 670;
                            continue _fun9979
                        }
                    case 608:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var22 = _closure1_slot2;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot1;
                        var17 = 5;
                        var17 = var21[var17];
                        var17 = var20.bind(var9)(var17);
                        var21 = var17.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var17 = var3;
                        var20 = var17.responseModel;
                        var17 = {};
                        var17 = var22.bind(var9)(var17, var21, var20);
                        var17 = var18.bind(var19)(var17);
                    case 670:
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var17 = 6;
                        var17 = var18[var17];
                        var26 = var22.bind(var9)(var17);
                        var25 = var26.setTokenUsageAttributes;
                        var20 = var2;
                        var17 = var3;
                        var30 = var17.promptTokens;
                        var29 = var17.completionTokens;
                        var28 = var17.cacheCreationInputTokens;
                        var27 = var17.cacheReadInputTokens;
                        var32 = var26;
                        var31 = var20;
                        var19 = var32[var25](var31, var30, var29, var28, var27, var26);
                        var19 = var20.setAttributes;
                        var24 = _closure1_slot2;
                        var21 = 5;
                        var18 = var18[var21];
                        var18 = var22.bind(var9)(var18);
                        var23 = var18.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var22 = {};
                        var18 = true;
                        var18 = var24.bind(var9)(var22, var23, var18);
                        var18 = var19.bind(var20)(var18);
                        var17 = var17.finishReasons;
                        var17 = var17.length;
                        var19 = 0;
                        if (!(var17 > var19)) {
                            _fun9979_ip = 873;
                            continue _fun9979
                        }
                    case 797:
                        var20 = var2;
                        var18 = var20.setAttributes;
                        var24 = _closure1_slot2;
                        var22 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var21];
                        var17 = var22.bind(var9)(var17);
                        var23 = var17.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var25 = var8.JSON;
                        var22 = var25.stringify;
                        var17 = var3;
                        var17 = var17.finishReasons;
                        var22 = var22.bind(var25)(var17);
                        var17 = {};
                        var17 = var24.bind(var9)(var17, var23, var22);
                        var17 = var18.bind(var20)(var17);
                    case 873:
                        var18 = var5;
                        var17 = var18;
                        if (!var18) {
                            _fun9979_ip = 900;
                            continue _fun9979
                        }
                    case 882:
                        var18 = var3;
                        var18 = var18.responseTexts;
                        var18 = var18.length;
                        var17 = var18 > var19;
                    case 900:
                        if (!var17) {
                            _fun9979_ip = 972;
                            continue _fun9979
                        }
                    case 903:
                        var20 = var2;
                        var18 = var20.setAttributes;
                        var24 = _closure1_slot2;
                        var22 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var21];
                        var17 = var22.bind(var9)(var17);
                        var23 = var17.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var17 = var3;
                        var22 = var17.responseTexts;
                        var17 = var22.join;
                        var22 = var17.bind(var22)(var15);
                        var17 = {};
                        var17 = var24.bind(var9)(var17, var23, var22);
                        var17 = var18.bind(var20)(var17);
                    case 972:
                        var18 = var5;
                        var17 = var18;
                        if (!var18) {
                            _fun9979_ip = 999;
                            continue _fun9979
                        }
                    case 981:
                        var18 = var3;
                        var18 = var18.toolCalls;
                        var18 = var18.length;
                        var17 = var18 > var19;
                    case 999:
                        if (!var17) {
                            _fun9979_ip = 1078;
                            continue _fun9979
                        }
                    case 1002:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var22 = _closure1_slot2;
                        var20 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var21];
                        var17 = var20.bind(var9)(var17);
                        var21 = var17.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var23 = var8.JSON;
                        var20 = var23.stringify;
                        var17 = var3;
                        var17 = var17.toolCalls;
                        var20 = var20.bind(var23)(var17);
                        var17 = {};
                        var17 = var22.bind(var9)(var17, var21, var20);
                        var17 = var18.bind(var19)(var17);
                    case 1078:
                        var18 = var2;
                        var17 = var18.end;
                        var17 = var17.bind(var18)();
                        return var16;
                    case 1093: // try_start_9
                        var16 = var1;
                        throw var16;
                    case 1098:
                        var16 = var6;
                        if (var16) {
                            _fun9979_ip = 1678;
                            continue _fun9979
                        }
                    case 1107: // try_end9
                        var16 = var3;
                        var16 = var16.responseId;
                        if (!var16) {
                            _fun9979_ip = 1181;
                            continue _fun9979
                        }
                    case 1119:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var16 = 5;
                        var16 = var20[var16];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var3;
                        var19 = var16.responseId;
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 1181:
                        var16 = var3;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun9979_ip = 1255;
                            continue _fun9979
                        }
                    case 1193:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var16 = 5;
                        var16 = var20[var16];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var3;
                        var19 = var16.responseModel;
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 1255:
                        var21 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var16 = 6;
                        var16 = var17[var16];
                        var25 = var21.bind(var9)(var16);
                        var24 = var25.setTokenUsageAttributes;
                        var19 = var2;
                        var16 = var3;
                        var30 = var16.promptTokens;
                        var29 = var16.completionTokens;
                        var28 = var16.cacheCreationInputTokens;
                        var27 = var16.cacheReadInputTokens;
                        var32 = var25;
                        var31 = var19;
                        var18 = var32[var24](var31, var30, var29, var28, var27, var26);
                        var18 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var20 = 5;
                        var17 = var17[var20];
                        var17 = var21.bind(var9)(var17);
                        var22 = var17.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var21 = {};
                        var17 = true;
                        var17 = var23.bind(var9)(var21, var22, var17);
                        var17 = var18.bind(var19)(var17);
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        var18 = 0;
                        if (!(var16 > var18)) {
                            _fun9979_ip = 1458;
                            continue _fun9979
                        }
                    case 1382:
                        var19 = var2;
                        var17 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var21 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var21.bind(var9)(var16);
                        var22 = var16.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var24 = var8.JSON;
                        var21 = var24.stringify;
                        var16 = var3;
                        var16 = var16.finishReasons;
                        var21 = var21.bind(var24)(var16);
                        var16 = {};
                        var16 = var23.bind(var9)(var16, var22, var21);
                        var16 = var17.bind(var19)(var16);
                    case 1458:
                        var17 = var5;
                        var16 = var17;
                        if (!var17) {
                            _fun9979_ip = 1485;
                            continue _fun9979
                        }
                    case 1467:
                        var17 = var3;
                        var17 = var17.responseTexts;
                        var17 = var17.length;
                        var16 = var17 > var18;
                    case 1485:
                        if (!var16) {
                            _fun9979_ip = 1557;
                            continue _fun9979
                        }
                    case 1488:
                        var19 = var2;
                        var17 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var21 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var21.bind(var9)(var16);
                        var22 = var16.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var16 = var3;
                        var21 = var16.responseTexts;
                        var16 = var21.join;
                        var21 = var16.bind(var21)(var15);
                        var16 = {};
                        var16 = var23.bind(var9)(var16, var22, var21);
                        var16 = var17.bind(var19)(var16);
                    case 1557:
                        var17 = var5;
                        var16 = var17;
                        if (!var17) {
                            _fun9979_ip = 1584;
                            continue _fun9979
                        }
                    case 1566:
                        var17 = var3;
                        var17 = var17.toolCalls;
                        var17 = var17.length;
                        var16 = var17 > var18;
                    case 1584:
                        if (!var16) {
                            _fun9979_ip = 1663;
                            continue _fun9979
                        }
                    case 1587:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var22 = var8.JSON;
                        var19 = var22.stringify;
                        var16 = var3;
                        var16 = var16.toolCalls;
                        var19 = var19.bind(var22)(var16);
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 1663:
                        var17 = var2;
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var7;
                    case 1678: // try_start_10
                        var7 = var1;
                        throw var7;
                    case 1683: // catch_target2
                        CatchBlockStart(arg_register = 7);
                        var16 = var6;
                        if (var16) {
                            _fun9979_ip = 1693;
                            continue _fun9979
                        }
                    case 1691:
                        throw var7;
                    case 1693:
                        var7 = var1;
                        throw var7;
                    case 1698: // try_start_3
                        var16 = var10;
                        var7 = var16;
                        if (!var16) {
                            _fun9979_ip = 1720;
                            continue _fun9979
                        }
                    case 1707:
                        var16 = var4;
                        var16 = var16.return;
                        var7 = var14 != var16;
                    case 1720:
                        if (!var7) {
                            _fun9979_ip = 1758;
                            continue _fun9979
                        }
                    case 1723:
                        var16 = _closure1_slot3;
                        var17 = var4;
                        var7 = var17.return;
                        var7 = var7.bind(var17)();
                        var7 = var16.bind(var9)(var7);
                        SaveGenerator(address = 1749);
                    case 1747:
                        return var7;
                    case 1749:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 16);
                        if (var16) {
                            _fun9979_ip = 2343;
                            continue _fun9979
                        }
                    case 1758: // try_end3
                        var16 = var6;
                        if (var16) {
                            _fun9979_ip = 2338;
                            continue _fun9979
                        }
                    case 1767: // try_end10
                        var16 = var3;
                        var16 = var16.responseId;
                        if (!var16) {
                            _fun9979_ip = 1841;
                            continue _fun9979
                        }
                    case 1779:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var16 = 5;
                        var16 = var20[var16];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var16 = var3;
                        var19 = var16.responseId;
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 1841:
                        var16 = var3;
                        var16 = var16.responseModel;
                        if (!var16) {
                            _fun9979_ip = 1915;
                            continue _fun9979
                        }
                    case 1853:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var16 = 5;
                        var16 = var20[var16];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var16 = var3;
                        var19 = var16.responseModel;
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 1915:
                        var21 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var16 = 6;
                        var16 = var17[var16];
                        var25 = var21.bind(var9)(var16);
                        var24 = var25.setTokenUsageAttributes;
                        var19 = var2;
                        var16 = var3;
                        var30 = var16.promptTokens;
                        var29 = var16.completionTokens;
                        var28 = var16.cacheCreationInputTokens;
                        var27 = var16.cacheReadInputTokens;
                        var32 = var25;
                        var31 = var19;
                        var18 = var32[var24](var31, var30, var29, var28, var27, var26);
                        var18 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var20 = 5;
                        var17 = var17[var20];
                        var17 = var21.bind(var9)(var17);
                        var22 = var17.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var21 = {};
                        var17 = true;
                        var17 = var23.bind(var9)(var21, var22, var17);
                        var17 = var18.bind(var19)(var17);
                        var16 = var16.finishReasons;
                        var16 = var16.length;
                        var18 = 0;
                        if (!(var16 > var18)) {
                            _fun9979_ip = 2118;
                            continue _fun9979
                        }
                    case 2042:
                        var19 = var2;
                        var17 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var21 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var21.bind(var9)(var16);
                        var22 = var16.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var24 = var8.JSON;
                        var21 = var24.stringify;
                        var16 = var3;
                        var16 = var16.finishReasons;
                        var21 = var21.bind(var24)(var16);
                        var16 = {};
                        var16 = var23.bind(var9)(var16, var22, var21);
                        var16 = var17.bind(var19)(var16);
                    case 2118:
                        var17 = var5;
                        var16 = var17;
                        if (!var17) {
                            _fun9979_ip = 2145;
                            continue _fun9979
                        }
                    case 2127:
                        var17 = var3;
                        var17 = var17.responseTexts;
                        var17 = var17.length;
                        var16 = var17 > var18;
                    case 2145:
                        if (!var16) {
                            _fun9979_ip = 2217;
                            continue _fun9979
                        }
                    case 2148:
                        var19 = var2;
                        var17 = var19.setAttributes;
                        var23 = _closure1_slot2;
                        var21 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var21.bind(var9)(var16);
                        var22 = var16.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var16 = var3;
                        var21 = var16.responseTexts;
                        var16 = var21.join;
                        var21 = var16.bind(var21)(var15);
                        var16 = {};
                        var16 = var23.bind(var9)(var16, var22, var21);
                        var16 = var17.bind(var19)(var16);
                    case 2217:
                        var17 = var5;
                        var16 = var17;
                        if (!var17) {
                            _fun9979_ip = 2244;
                            continue _fun9979
                        }
                    case 2226:
                        var17 = var3;
                        var17 = var17.toolCalls;
                        var17 = var17.length;
                        var16 = var17 > var18;
                    case 2244:
                        if (!var16) {
                            _fun9979_ip = 2323;
                            continue _fun9979
                        }
                    case 2247:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var20];
                        var16 = var19.bind(var9)(var16);
                        var20 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var22 = var8.JSON;
                        var19 = var22.stringify;
                        var16 = var3;
                        var16 = var16.toolCalls;
                        var19 = var19.bind(var22)(var16);
                        var16 = {};
                        var16 = var21.bind(var9)(var16, var20, var19);
                        var16 = var17.bind(var18)(var16);
                    case 2323:
                        var17 = var2;
                        var16 = var17.end;
                        var16 = var16.bind(var17)();
                        return var12;
                    case 2338: // try_start_11
                        var12 = var1;
                        throw var12;
                    case 2343:
                        var12 = var6;
                        if (var12) {
                            _fun9979_ip = 2923;
                            continue _fun9979
                        }
                    case 2352: // try_end11
                        var12 = var3;
                        var12 = var12.responseId;
                        if (!var12) {
                            _fun9979_ip = 2426;
                            continue _fun9979
                        }
                    case 2364:
                        var17 = var2;
                        var16 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot1;
                        var12 = 5;
                        var12 = var19[var12];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var12 = var3;
                        var18 = var12.responseId;
                        var12 = {};
                        var12 = var20.bind(var9)(var12, var19, var18);
                        var12 = var16.bind(var17)(var12);
                    case 2426:
                        var12 = var3;
                        var12 = var12.responseModel;
                        if (!var12) {
                            _fun9979_ip = 2500;
                            continue _fun9979
                        }
                    case 2438:
                        var17 = var2;
                        var16 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot1;
                        var12 = 5;
                        var12 = var19[var12];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var12 = var3;
                        var18 = var12.responseModel;
                        var12 = {};
                        var12 = var20.bind(var9)(var12, var19, var18);
                        var12 = var16.bind(var17)(var12);
                    case 2500:
                        var20 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var12 = 6;
                        var12 = var16[var12];
                        var24 = var20.bind(var9)(var12);
                        var23 = var24.setTokenUsageAttributes;
                        var18 = var2;
                        var12 = var3;
                        var30 = var12.promptTokens;
                        var29 = var12.completionTokens;
                        var28 = var12.cacheCreationInputTokens;
                        var27 = var12.cacheReadInputTokens;
                        var32 = var24;
                        var31 = var18;
                        var17 = var32[var23](var31, var30, var29, var28, var27, var26);
                        var17 = var18.setAttributes;
                        var22 = _closure1_slot2;
                        var19 = 5;
                        var16 = var16[var19];
                        var16 = var20.bind(var9)(var16);
                        var21 = var16.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var20 = {};
                        var16 = true;
                        var16 = var22.bind(var9)(var20, var21, var16);
                        var16 = var17.bind(var18)(var16);
                        var12 = var12.finishReasons;
                        var12 = var12.length;
                        var17 = 0;
                        if (!(var12 > var17)) {
                            _fun9979_ip = 2703;
                            continue _fun9979
                        }
                    case 2627:
                        var18 = var2;
                        var16 = var18.setAttributes;
                        var22 = _closure1_slot2;
                        var20 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var19];
                        var12 = var20.bind(var9)(var12);
                        var21 = var12.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var23 = var8.JSON;
                        var20 = var23.stringify;
                        var12 = var3;
                        var12 = var12.finishReasons;
                        var20 = var20.bind(var23)(var12);
                        var12 = {};
                        var12 = var22.bind(var9)(var12, var21, var20);
                        var12 = var16.bind(var18)(var12);
                    case 2703:
                        var16 = var5;
                        var12 = var16;
                        if (!var16) {
                            _fun9979_ip = 2730;
                            continue _fun9979
                        }
                    case 2712:
                        var16 = var3;
                        var16 = var16.responseTexts;
                        var16 = var16.length;
                        var12 = var16 > var17;
                    case 2730:
                        if (!var12) {
                            _fun9979_ip = 2802;
                            continue _fun9979
                        }
                    case 2733:
                        var18 = var2;
                        var16 = var18.setAttributes;
                        var22 = _closure1_slot2;
                        var20 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var19];
                        var12 = var20.bind(var9)(var12);
                        var21 = var12.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var12 = var3;
                        var20 = var12.responseTexts;
                        var12 = var20.join;
                        var20 = var12.bind(var20)(var15);
                        var12 = {};
                        var12 = var22.bind(var9)(var12, var21, var20);
                        var12 = var16.bind(var18)(var12);
                    case 2802:
                        var16 = var5;
                        var12 = var16;
                        if (!var16) {
                            _fun9979_ip = 2829;
                            continue _fun9979
                        }
                    case 2811:
                        var16 = var3;
                        var16 = var16.toolCalls;
                        var16 = var16.length;
                        var12 = var16 > var17;
                    case 2829:
                        if (!var12) {
                            _fun9979_ip = 2908;
                            continue _fun9979
                        }
                    case 2832:
                        var17 = var2;
                        var16 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var19];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var21 = var8.JSON;
                        var18 = var21.stringify;
                        var12 = var3;
                        var12 = var12.toolCalls;
                        var18 = var18.bind(var21)(var12);
                        var12 = {};
                        var12 = var20.bind(var9)(var12, var19, var18);
                        var12 = var16.bind(var17)(var12);
                    case 2908:
                        var16 = var2;
                        var12 = var16.end;
                        var12 = var12.bind(var16)();
                        return var7;
                    case 2923: // try_start_12
                        var7 = var1;
                        throw var7;
                    case 2928: // catch_target3
                        CatchBlockStart(arg_register = 7);
                        var12 = var6;
                        if (var12) {
                            _fun9979_ip = 2938;
                            continue _fun9979
                        }
                    case 2936:
                        throw var7;
                    case 2938:
                        var7 = var1;
                        throw var7;
                    case 2943: // try_start_4
                        var12 = var10;
                        var7 = var12;
                        if (!var12) {
                            _fun9979_ip = 2965;
                            continue _fun9979
                        }
                    case 2952:
                        var12 = var4;
                        var12 = var12.return;
                        var7 = var14 != var12;
                    case 2965:
                        if (!var7) {
                            _fun9979_ip = 3003;
                            continue _fun9979
                        }
                    case 2968:
                        var12 = _closure1_slot3;
                        var14 = var4;
                        var7 = var14.return;
                        var7 = var7.bind(var14)();
                        var7 = var12.bind(var9)(var7);
                        SaveGenerator(address = 2994);
                    case 2992:
                        return var7;
                    case 2994:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 12);
                        if (var12) {
                            _fun9979_ip = 3588;
                            continue _fun9979
                        }
                    case 3003: // try_end4
                        var12 = var6;
                        if (var12) {
                            _fun9979_ip = 3583;
                            continue _fun9979
                        }
                    case 3012: // try_end12
                        var12 = var3;
                        var12 = var12.responseId;
                        if (!var12) {
                            _fun9979_ip = 3086;
                            continue _fun9979
                        }
                    case 3024:
                        var16 = var2;
                        var14 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var12 = 5;
                        var12 = var18[var12];
                        var12 = var17.bind(var9)(var12);
                        var18 = var12.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var12 = var3;
                        var17 = var12.responseId;
                        var12 = {};
                        var12 = var19.bind(var9)(var12, var18, var17);
                        var12 = var14.bind(var16)(var12);
                    case 3086:
                        var12 = var3;
                        var12 = var12.responseModel;
                        if (!var12) {
                            _fun9979_ip = 3160;
                            continue _fun9979
                        }
                    case 3098:
                        var16 = var2;
                        var14 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var12 = 5;
                        var12 = var18[var12];
                        var12 = var17.bind(var9)(var12);
                        var18 = var12.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var12 = var3;
                        var17 = var12.responseModel;
                        var12 = {};
                        var12 = var19.bind(var9)(var12, var18, var17);
                        var12 = var14.bind(var16)(var12);
                    case 3160:
                        var19 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var12 = 6;
                        var12 = var14[var12];
                        var23 = var19.bind(var9)(var12);
                        var22 = var23.setTokenUsageAttributes;
                        var17 = var2;
                        var12 = var3;
                        var30 = var12.promptTokens;
                        var29 = var12.completionTokens;
                        var28 = var12.cacheCreationInputTokens;
                        var27 = var12.cacheReadInputTokens;
                        var32 = var23;
                        var31 = var17;
                        var16 = var32[var22](var31, var30, var29, var28, var27, var26);
                        var16 = var17.setAttributes;
                        var21 = _closure1_slot2;
                        var18 = 5;
                        var14 = var14[var18];
                        var14 = var19.bind(var9)(var14);
                        var20 = var14.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var19 = {};
                        var14 = true;
                        var14 = var21.bind(var9)(var19, var20, var14);
                        var14 = var16.bind(var17)(var14);
                        var12 = var12.finishReasons;
                        var12 = var12.length;
                        var16 = 0;
                        if (!(var12 > var16)) {
                            _fun9979_ip = 3363;
                            continue _fun9979
                        }
                    case 3287:
                        var17 = var2;
                        var14 = var17.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var18];
                        var12 = var19.bind(var9)(var12);
                        var20 = var12.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var22 = var8.JSON;
                        var19 = var22.stringify;
                        var12 = var3;
                        var12 = var12.finishReasons;
                        var19 = var19.bind(var22)(var12);
                        var12 = {};
                        var12 = var21.bind(var9)(var12, var20, var19);
                        var12 = var14.bind(var17)(var12);
                    case 3363:
                        var14 = var5;
                        var12 = var14;
                        if (!var14) {
                            _fun9979_ip = 3390;
                            continue _fun9979
                        }
                    case 3372:
                        var14 = var3;
                        var14 = var14.responseTexts;
                        var14 = var14.length;
                        var12 = var14 > var16;
                    case 3390:
                        if (!var12) {
                            _fun9979_ip = 3462;
                            continue _fun9979
                        }
                    case 3393:
                        var17 = var2;
                        var14 = var17.setAttributes;
                        var21 = _closure1_slot2;
                        var19 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var18];
                        var12 = var19.bind(var9)(var12);
                        var20 = var12.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var12 = var3;
                        var19 = var12.responseTexts;
                        var12 = var19.join;
                        var19 = var12.bind(var19)(var15);
                        var12 = {};
                        var12 = var21.bind(var9)(var12, var20, var19);
                        var12 = var14.bind(var17)(var12);
                    case 3462:
                        var14 = var5;
                        var12 = var14;
                        if (!var14) {
                            _fun9979_ip = 3489;
                            continue _fun9979
                        }
                    case 3471:
                        var14 = var3;
                        var14 = var14.toolCalls;
                        var14 = var14.length;
                        var12 = var14 > var16;
                    case 3489:
                        if (!var12) {
                            _fun9979_ip = 3568;
                            continue _fun9979
                        }
                    case 3492:
                        var16 = var2;
                        var14 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var18];
                        var12 = var17.bind(var9)(var12);
                        var18 = var12.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var20 = var8.JSON;
                        var17 = var20.stringify;
                        var12 = var3;
                        var12 = var12.toolCalls;
                        var17 = var17.bind(var20)(var12);
                        var12 = {};
                        var12 = var19.bind(var9)(var12, var18, var17);
                        var12 = var14.bind(var16)(var12);
                    case 3568:
                        var14 = var2;
                        var12 = var14.end;
                        var12 = var12.bind(var14)();
                        return var11;
                    case 3583: // try_start_13
                        var11 = var1;
                        throw var11;
                    case 3588:
                        var11 = var6;
                        if (var11) {
                            _fun9979_ip = 4168;
                            continue _fun9979
                        }
                    case 3597: // try_end13
                        var11 = var3;
                        var11 = var11.responseId;
                        if (!var11) {
                            _fun9979_ip = 3671;
                            continue _fun9979
                        }
                    case 3609:
                        var14 = var2;
                        var12 = var14.setAttributes;
                        var18 = _closure1_slot2;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var11 = 5;
                        var11 = var17[var11];
                        var11 = var16.bind(var9)(var11);
                        var17 = var11.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var11 = var3;
                        var16 = var11.responseId;
                        var11 = {};
                        var11 = var18.bind(var9)(var11, var17, var16);
                        var11 = var12.bind(var14)(var11);
                    case 3671:
                        var11 = var3;
                        var11 = var11.responseModel;
                        if (!var11) {
                            _fun9979_ip = 3745;
                            continue _fun9979
                        }
                    case 3683:
                        var14 = var2;
                        var12 = var14.setAttributes;
                        var18 = _closure1_slot2;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var11 = 5;
                        var11 = var17[var11];
                        var11 = var16.bind(var9)(var11);
                        var17 = var11.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var11 = var3;
                        var16 = var11.responseModel;
                        var11 = {};
                        var11 = var18.bind(var9)(var11, var17, var16);
                        var11 = var12.bind(var14)(var11);
                    case 3745:
                        var18 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var11 = 6;
                        var11 = var12[var11];
                        var22 = var18.bind(var9)(var11);
                        var21 = var22.setTokenUsageAttributes;
                        var16 = var2;
                        var11 = var3;
                        var30 = var11.promptTokens;
                        var29 = var11.completionTokens;
                        var28 = var11.cacheCreationInputTokens;
                        var27 = var11.cacheReadInputTokens;
                        var32 = var22;
                        var31 = var16;
                        var14 = var32[var21](var31, var30, var29, var28, var27, var26);
                        var14 = var16.setAttributes;
                        var20 = _closure1_slot2;
                        var17 = 5;
                        var12 = var12[var17];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var18 = {};
                        var12 = true;
                        var12 = var20.bind(var9)(var18, var19, var12);
                        var12 = var14.bind(var16)(var12);
                        var11 = var11.finishReasons;
                        var11 = var11.length;
                        var14 = 0;
                        if (!(var11 > var14)) {
                            _fun9979_ip = 3948;
                            continue _fun9979
                        }
                    case 3872:
                        var16 = var2;
                        var12 = var16.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var17];
                        var11 = var18.bind(var9)(var11);
                        var19 = var11.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var21 = var8.JSON;
                        var18 = var21.stringify;
                        var11 = var3;
                        var11 = var11.finishReasons;
                        var18 = var18.bind(var21)(var11);
                        var11 = {};
                        var11 = var20.bind(var9)(var11, var19, var18);
                        var11 = var12.bind(var16)(var11);
                    case 3948:
                        var12 = var5;
                        var11 = var12;
                        if (!var12) {
                            _fun9979_ip = 3975;
                            continue _fun9979
                        }
                    case 3957:
                        var12 = var3;
                        var12 = var12.responseTexts;
                        var12 = var12.length;
                        var11 = var12 > var14;
                    case 3975:
                        if (!var11) {
                            _fun9979_ip = 4047;
                            continue _fun9979
                        }
                    case 3978:
                        var16 = var2;
                        var12 = var16.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var17];
                        var11 = var18.bind(var9)(var11);
                        var19 = var11.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var11 = var3;
                        var18 = var11.responseTexts;
                        var11 = var18.join;
                        var18 = var11.bind(var18)(var15);
                        var11 = {};
                        var11 = var20.bind(var9)(var11, var19, var18);
                        var11 = var12.bind(var16)(var11);
                    case 4047:
                        var12 = var5;
                        var11 = var12;
                        if (!var12) {
                            _fun9979_ip = 4074;
                            continue _fun9979
                        }
                    case 4056:
                        var12 = var3;
                        var12 = var12.toolCalls;
                        var12 = var12.length;
                        var11 = var12 > var14;
                    case 4074:
                        if (!var11) {
                            _fun9979_ip = 4153;
                            continue _fun9979
                        }
                    case 4077:
                        var12 = var2;
                        var11 = var12.setAttributes;
                        var16 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var17];
                        var13 = var14.bind(var9)(var13);
                        var14 = var13.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var17 = var8.JSON;
                        var13 = var17.stringify;
                        var8 = var3;
                        var8 = var8.toolCalls;
                        var13 = var13.bind(var17)(var8);
                        var8 = {};
                        var8 = var16.bind(var9)(var8, var14, var13);
                        var8 = var11.bind(var12)(var8);
                    case 4153:
                        var11 = var2;
                        var8 = var11.end;
                        var8 = var8.bind(var11)();
                        return var7;
                    case 4168: // try_start_14
                        var7 = var1;
                        throw var7;
                    case 4173: // catch_target4
                        CatchBlockStart(arg_register = 7);
                        var8 = var6;
                        if (var8) {
                            _fun9979_ip = 4183;
                            continue _fun9979
                        }
                    case 4181:
                        throw var7;
                    case 4183:
                        var7 = var1;
                        throw var7;
                    case 4188: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = true;
                    case 4192: // try_start_6 // try_end5
                        var8 = var10;
                        var7 = var8;
                        if (!var8) {
                            _fun9979_ip = 4216;
                            continue _fun9979
                        }
                    case 4201:
                        var8 = var4;
                        var11 = var8.return;
                        var8 = null;
                        var7 = var8 != var11;
                    case 4216:
                        if (!var7) {
                            _fun9979_ip = 4257;
                            continue _fun9979
                        }
                    case 4219:
                        var11 = _closure1_slot3;
                        var12 = var4;
                        var7 = var12.return;
                        var7 = var7.bind(var12)();
                        var7 = var11.bind(var9)(var7);
                        SaveGenerator(address = 4248);
                    case 4246:
                        return var7;
                    case 4248:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                        if (var11) {
                            _fun9979_ip = 4855;
                            continue _fun9979
                        }
                    case 4257: // try_end6
                        var11 = var6;
                        if (var11) {
                            _fun9979_ip = 4850;
                            continue _fun9979
                        }
                    case 4266: // try_end14
                        var11 = var3;
                        var11 = var11.responseId;
                        if (!var11) {
                            _fun9979_ip = 4343;
                            continue _fun9979
                        }
                    case 4278:
                        var13 = var2;
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var11 = 5;
                        var11 = var16[var11];
                        var11 = var14.bind(var9)(var11);
                        var16 = var11.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var11 = var3;
                        var14 = var11.responseId;
                        var11 = {};
                        var11 = var17.bind(var9)(var11, var16, var14);
                        var11 = var12.bind(var13)(var11);
                    case 4343:
                        var11 = var3;
                        var11 = var11.responseModel;
                        if (!var11) {
                            _fun9979_ip = 4420;
                            continue _fun9979
                        }
                    case 4355:
                        var13 = var2;
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var11 = 5;
                        var11 = var16[var11];
                        var11 = var14.bind(var9)(var11);
                        var16 = var11.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var11 = var3;
                        var14 = var11.responseModel;
                        var11 = {};
                        var11 = var17.bind(var9)(var11, var16, var14);
                        var11 = var12.bind(var13)(var11);
                    case 4420:
                        var18 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var12 = 6;
                        var12 = var13[var12];
                        var22 = var18.bind(var9)(var12);
                        var21 = var22.setTokenUsageAttributes;
                        var17 = var2;
                        var12 = var3;
                        var30 = var12.promptTokens;
                        var29 = var12.completionTokens;
                        var28 = var12.cacheCreationInputTokens;
                        var27 = var12.cacheReadInputTokens;
                        var32 = var22;
                        var31 = var17;
                        var14 = var32[var21](var31, var30, var29, var28, var27, var26);
                        var14 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var16 = 5;
                        var13 = var13[var16];
                        var13 = var18.bind(var9)(var13);
                        var19 = var13.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var18 = {};
                        var13 = true;
                        var13 = var20.bind(var9)(var18, var19, var13);
                        var13 = var14.bind(var17)(var13);
                        var12 = var12.finishReasons;
                        var12 = var12.length;
                        var14 = 0;
                        if (!(var12 > var14)) {
                            _fun9979_ip = 4628;
                            continue _fun9979
                        }
                    case 4550:
                        var17 = var2;
                        var13 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var16];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var12 = global;
                        var21 = var12.JSON;
                        var18 = var21.stringify;
                        var12 = var3;
                        var12 = var12.finishReasons;
                        var18 = var18.bind(var21)(var12);
                        var12 = {};
                        var12 = var20.bind(var9)(var12, var19, var18);
                        var12 = var13.bind(var17)(var12);
                    case 4628:
                        var13 = var5;
                        var12 = var13;
                        if (!var13) {
                            _fun9979_ip = 4655;
                            continue _fun9979
                        }
                    case 4637:
                        var13 = var3;
                        var13 = var13.responseTexts;
                        var13 = var13.length;
                        var12 = var13 > var14;
                    case 4655:
                        if (!var12) {
                            _fun9979_ip = 4727;
                            continue _fun9979
                        }
                    case 4658:
                        var17 = var2;
                        var13 = var17.setAttributes;
                        var20 = _closure1_slot2;
                        var18 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var16];
                        var12 = var18.bind(var9)(var12);
                        var19 = var12.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var12 = var3;
                        var18 = var12.responseTexts;
                        var12 = var18.join;
                        var18 = var12.bind(var18)(var15);
                        var12 = {};
                        var12 = var20.bind(var9)(var12, var19, var18);
                        var12 = var13.bind(var17)(var12);
                    case 4727:
                        var13 = var5;
                        var12 = var13;
                        if (!var13) {
                            _fun9979_ip = 4754;
                            continue _fun9979
                        }
                    case 4736:
                        var13 = var3;
                        var13 = var13.toolCalls;
                        var13 = var13.length;
                        var12 = var13 > var14;
                    case 4754:
                        if (!var12) {
                            _fun9979_ip = 4835;
                            continue _fun9979
                        }
                    case 4757:
                        var13 = var2;
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var16];
                        var11 = var14.bind(var9)(var11);
                        var16 = var11.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var11 = global;
                        var18 = var11.JSON;
                        var14 = var18.stringify;
                        var11 = var3;
                        var11 = var11.toolCalls;
                        var14 = var14.bind(var18)(var11);
                        var11 = {};
                        var11 = var17.bind(var9)(var11, var16, var14);
                        var11 = var12.bind(var13)(var11);
                    case 4835:
                        var12 = var2;
                        var11 = var12.end;
                        var11 = var11.bind(var12)();
                        return var9;
                    case 4850: // try_start_15
                        var11 = var1;
                        throw var11;
                    case 4855:
                        var11 = var6;
                        if (var11) {
                            _fun9979_ip = 5439;
                            continue _fun9979
                        }
                    case 4864: // try_end15
                        var11 = var3;
                        var11 = var11.responseId;
                        if (!var11) {
                            _fun9979_ip = 4938;
                            continue _fun9979
                        }
                    case 4876:
                        var13 = var2;
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var11 = 5;
                        var11 = var16[var11];
                        var11 = var14.bind(var9)(var11);
                        var16 = var11.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var11 = var3;
                        var14 = var11.responseId;
                        var11 = {};
                        var11 = var17.bind(var9)(var11, var16, var14);
                        var11 = var12.bind(var13)(var11);
                    case 4938:
                        var11 = var3;
                        var11 = var11.responseModel;
                        if (!var11) {
                            _fun9979_ip = 5012;
                            continue _fun9979
                        }
                    case 4950:
                        var13 = var2;
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var11 = 5;
                        var11 = var16[var11];
                        var11 = var14.bind(var9)(var11);
                        var16 = var11.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var11 = var3;
                        var14 = var11.responseModel;
                        var11 = {};
                        var11 = var17.bind(var9)(var11, var16, var14);
                        var11 = var12.bind(var13)(var11);
                    case 5012:
                        var17 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var11 = 6;
                        var11 = var12[var11];
                        var21 = var17.bind(var9)(var11);
                        var20 = var21.setTokenUsageAttributes;
                        var16 = var2;
                        var11 = var3;
                        var30 = var11.promptTokens;
                        var29 = var11.completionTokens;
                        var28 = var11.cacheCreationInputTokens;
                        var27 = var11.cacheReadInputTokens;
                        var32 = var21;
                        var31 = var16;
                        var13 = var32[var20](var31, var30, var29, var28, var27, var26);
                        var13 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var14 = 5;
                        var12 = var12[var14];
                        var12 = var17.bind(var9)(var12);
                        var18 = var12.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var17 = {};
                        var12 = true;
                        var12 = var19.bind(var9)(var17, var18, var12);
                        var12 = var13.bind(var16)(var12);
                        var11 = var11.finishReasons;
                        var11 = var11.length;
                        var13 = 0;
                        if (!(var11 > var13)) {
                            _fun9979_ip = 5217;
                            continue _fun9979
                        }
                    case 5139:
                        var16 = var2;
                        var12 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var14];
                        var11 = var17.bind(var9)(var11);
                        var18 = var11.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var11 = global;
                        var20 = var11.JSON;
                        var17 = var20.stringify;
                        var11 = var3;
                        var11 = var11.finishReasons;
                        var17 = var17.bind(var20)(var11);
                        var11 = {};
                        var11 = var19.bind(var9)(var11, var18, var17);
                        var11 = var12.bind(var16)(var11);
                    case 5217:
                        var12 = var5;
                        var11 = var12;
                        if (!var12) {
                            _fun9979_ip = 5244;
                            continue _fun9979
                        }
                    case 5226:
                        var12 = var3;
                        var12 = var12.responseTexts;
                        var12 = var12.length;
                        var11 = var12 > var13;
                    case 5244:
                        if (!var11) {
                            _fun9979_ip = 5316;
                            continue _fun9979
                        }
                    case 5247:
                        var16 = var2;
                        var12 = var16.setAttributes;
                        var19 = _closure1_slot2;
                        var17 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var14];
                        var11 = var17.bind(var9)(var11);
                        var18 = var11.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var11 = var3;
                        var17 = var11.responseTexts;
                        var11 = var17.join;
                        var17 = var11.bind(var17)(var15);
                        var11 = {};
                        var11 = var19.bind(var9)(var11, var18, var17);
                        var11 = var12.bind(var16)(var11);
                    case 5316:
                        var12 = var5;
                        var11 = var12;
                        if (!var12) {
                            _fun9979_ip = 5343;
                            continue _fun9979
                        }
                    case 5325:
                        var12 = var3;
                        var12 = var12.toolCalls;
                        var12 = var12.length;
                        var11 = var12 > var13;
                    case 5343:
                        if (!var11) {
                            _fun9979_ip = 5424;
                            continue _fun9979
                        }
                    case 5346:
                        var12 = var2;
                        var11 = var12.setAttributes;
                        var16 = _closure1_slot2;
                        var13 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var14];
                        var8 = var13.bind(var9)(var8);
                        var14 = var8.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var8 = global;
                        var17 = var8.JSON;
                        var13 = var17.stringify;
                        var8 = var3;
                        var8 = var8.toolCalls;
                        var13 = var13.bind(var17)(var8);
                        var8 = {};
                        var8 = var16.bind(var9)(var8, var14, var13);
                        var8 = var11.bind(var12)(var8);
                    case 5424:
                        var11 = var2;
                        var8 = var11.end;
                        var8 = var8.bind(var11)();
                        return var7;
                    case 5439: // try_start_16
                        var7 = var1;
                        throw var7;
                    case 5444: // catch_target6
                        CatchBlockStart(arg_register = 7);
                        var8 = var6;
                        if (var8) {
                            _fun9979_ip = 5454;
                            continue _fun9979
                        }
                    case 5452:
                        throw var7;
                    case 5454:
                        var7 = var1;
                        throw var7;
                    case 5459: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 8);
                    case 5461: // try_start_7
                        var7 = var10;
                        if (!var10) {
                            _fun9979_ip = 5482;
                            continue _fun9979
                        }
                    case 5467:
                        var10 = var4;
                        var11 = var10.return;
                        var10 = null;
                        var7 = var10 != var11;
                    case 5482:
                        if (!var7) {
                            _fun9979_ip = 5520;
                            continue _fun9979
                        }
                    case 5485:
                        var10 = _closure1_slot3;
                        var11 = var4;
                        var4 = var11.return;
                        var4 = var4.bind(var11)();
                        var4 = var10.bind(var9)(var4);
                        SaveGenerator(address = 5514);
                    case 5512:
                        return var4;
                    case 5514:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                        if (var10) {
                            _fun9979_ip = 5533;
                            continue _fun9979
                        }
                    case 5520: // try_end7
                        var10 = var6;
                        if (var10) {
                            _fun9979_ip = 5528;
                            continue _fun9979
                        }
                    case 5526:
                        throw var8;
                    case 5528:
                        var8 = var1;
                        throw var8;
                    case 5533:
                        var8 = var6;
                        if (var8) {
                            _fun9979_ip = 6117;
                            continue _fun9979
                        }
                    case 5542: // try_end16
                        var8 = var3;
                        var8 = var8.responseId;
                        if (!var8) {
                            _fun9979_ip = 5616;
                            continue _fun9979
                        }
                    case 5554:
                        var11 = var2;
                        var10 = var11.setAttributes;
                        var14 = _closure1_slot2;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var8 = 5;
                        var8 = var13[var8];
                        var8 = var12.bind(var9)(var8);
                        var13 = var8.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var8 = var3;
                        var12 = var8.responseId;
                        var8 = {};
                        var8 = var14.bind(var9)(var8, var13, var12);
                        var8 = var10.bind(var11)(var8);
                    case 5616:
                        var8 = var3;
                        var8 = var8.responseModel;
                        if (!var8) {
                            _fun9979_ip = 5690;
                            continue _fun9979
                        }
                    case 5628:
                        var11 = var2;
                        var10 = var11.setAttributes;
                        var14 = _closure1_slot2;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var8 = 5;
                        var8 = var13[var8];
                        var8 = var12.bind(var9)(var8);
                        var13 = var8.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var8 = var3;
                        var12 = var8.responseModel;
                        var8 = {};
                        var8 = var14.bind(var9)(var8, var13, var12);
                        var8 = var10.bind(var11)(var8);
                    case 5690:
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var8 = 6;
                        var8 = var10[var8];
                        var19 = var14.bind(var9)(var8);
                        var18 = var19.setTokenUsageAttributes;
                        var13 = var2;
                        var8 = var3;
                        var30 = var8.promptTokens;
                        var29 = var8.completionTokens;
                        var28 = var8.cacheCreationInputTokens;
                        var27 = var8.cacheReadInputTokens;
                        var32 = var19;
                        var31 = var13;
                        var11 = var32[var18](var31, var30, var29, var28, var27, var26);
                        var11 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var12 = 5;
                        var10 = var10[var12];
                        var10 = var14.bind(var9)(var10);
                        var16 = var10.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var14 = {};
                        var10 = true;
                        var10 = var17.bind(var9)(var14, var16, var10);
                        var10 = var11.bind(var13)(var10);
                        var8 = var8.finishReasons;
                        var8 = var8.length;
                        var11 = 0;
                        if (!(var8 > var11)) {
                            _fun9979_ip = 5895;
                            continue _fun9979
                        }
                    case 5817:
                        var13 = var2;
                        var10 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var12];
                        var8 = var14.bind(var9)(var8);
                        var16 = var8.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var8 = global;
                        var18 = var8.JSON;
                        var14 = var18.stringify;
                        var8 = var3;
                        var8 = var8.finishReasons;
                        var14 = var14.bind(var18)(var8);
                        var8 = {};
                        var8 = var17.bind(var9)(var8, var16, var14);
                        var8 = var10.bind(var13)(var8);
                    case 5895:
                        var10 = var5;
                        var8 = var10;
                        if (!var10) {
                            _fun9979_ip = 5922;
                            continue _fun9979
                        }
                    case 5904:
                        var10 = var3;
                        var10 = var10.responseTexts;
                        var10 = var10.length;
                        var8 = var10 > var11;
                    case 5922:
                        if (!var8) {
                            _fun9979_ip = 5994;
                            continue _fun9979
                        }
                    case 5925:
                        var13 = var2;
                        var10 = var13.setAttributes;
                        var17 = _closure1_slot2;
                        var14 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var12];
                        var8 = var14.bind(var9)(var8);
                        var16 = var8.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var8 = var3;
                        var14 = var8.responseTexts;
                        var8 = var14.join;
                        var14 = var8.bind(var14)(var15);
                        var8 = {};
                        var8 = var17.bind(var9)(var8, var16, var14);
                        var8 = var10.bind(var13)(var8);
                    case 5994:
                        var10 = var5;
                        var8 = var10;
                        if (!var10) {
                            _fun9979_ip = 6021;
                            continue _fun9979
                        }
                    case 6003:
                        var10 = var3;
                        var10 = var10.toolCalls;
                        var10 = var10.length;
                        var8 = var10 > var11;
                    case 6021:
                        if (!var8) {
                            _fun9979_ip = 6102;
                            continue _fun9979
                        }
                    case 6024:
                        var10 = var2;
                        var8 = var10.setAttributes;
                        var13 = _closure1_slot2;
                        var11 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var12];
                        var7 = var11.bind(var9)(var7);
                        var12 = var7.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var7 = global;
                        var14 = var7.JSON;
                        var11 = var14.stringify;
                        var7 = var3;
                        var7 = var7.toolCalls;
                        var11 = var11.bind(var14)(var7);
                        var7 = {};
                        var7 = var13.bind(var9)(var7, var12, var11);
                        var7 = var8.bind(var10)(var7);
                    case 6102:
                        var8 = var2;
                        var7 = var8.end;
                        var7 = var7.bind(var8)();
                        return var4;
                    case 6117: // try_start_17
                        var4 = var1;
                        throw var4;
                    case 6122: // catch_target7
                        CatchBlockStart(arg_register = 4);
                        if (var6) {
                            _fun9979_ip = 6129;
                            continue _fun9979
                        }
                    case 6127:
                        throw var4;
                    case 6129:
                        throw var1;
                    case 6131: // try_end17 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                        CatchBlockStart(arg_register = 1);
                        var4 = var3;
                        var4 = var4.responseId;
                        if (!var4) {
                            _fun9979_ip = 6210;
                            continue _fun9979
                        }
                    case 6145:
                        var7 = var2;
                        var6 = var7.setAttributes;
                        var11 = _closure1_slot2;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 5;
                        var4 = var10[var4];
                        var4 = var8.bind(var9)(var4);
                        var10 = var4.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                        var4 = var3;
                        var8 = var4.responseId;
                        var4 = {};
                        var4 = var11.bind(var9)(var4, var10, var8);
                        var4 = var6.bind(var7)(var4);
                    case 6210:
                        var4 = var3;
                        var4 = var4.responseModel;
                        if (!var4) {
                            _fun9979_ip = 6287;
                            continue _fun9979
                        }
                    case 6222:
                        var7 = var2;
                        var6 = var7.setAttributes;
                        var11 = _closure1_slot2;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 5;
                        var4 = var10[var4];
                        var4 = var8.bind(var9)(var4);
                        var10 = var4.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                        var4 = var3;
                        var8 = var4.responseModel;
                        var4 = {};
                        var4 = var11.bind(var9)(var4, var10, var8);
                        var4 = var6.bind(var7)(var4);
                    case 6287:
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 6;
                        var4 = var7[var4];
                        var17 = var12.bind(var9)(var4);
                        var16 = var17.setTokenUsageAttributes;
                        var11 = var2;
                        var4 = var3;
                        var30 = var4.promptTokens;
                        var29 = var4.completionTokens;
                        var28 = var4.cacheCreationInputTokens;
                        var27 = var4.cacheReadInputTokens;
                        var32 = var17;
                        var31 = var11;
                        var8 = var32[var16](var31, var30, var29, var28, var27, var26);
                        var8 = var11.setAttributes;
                        var14 = _closure1_slot2;
                        var10 = 5;
                        var7 = var7[var10];
                        var7 = var12.bind(var9)(var7);
                        var13 = var7.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var12 = {};
                        var7 = true;
                        var7 = var14.bind(var9)(var12, var13, var7);
                        var7 = var8.bind(var11)(var7);
                        var4 = var4.finishReasons;
                        var4 = var4.length;
                        var7 = 0;
                        if (!(var4 > var7)) {
                            _fun9979_ip = 6495;
                            continue _fun9979
                        }
                    case 6417:
                        var11 = var2;
                        var8 = var11.setAttributes;
                        var14 = _closure1_slot2;
                        var12 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var10];
                        var4 = var12.bind(var9)(var4);
                        var13 = var4.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var4 = global;
                        var16 = var4.JSON;
                        var12 = var16.stringify;
                        var4 = var3;
                        var4 = var4.finishReasons;
                        var12 = var12.bind(var16)(var4);
                        var4 = {};
                        var4 = var14.bind(var9)(var4, var13, var12);
                        var4 = var8.bind(var11)(var4);
                    case 6495:
                        var8 = var5;
                        var4 = var8;
                        if (!var8) {
                            _fun9979_ip = 6522;
                            continue _fun9979
                        }
                    case 6504:
                        var8 = var3;
                        var8 = var8.responseTexts;
                        var8 = var8.length;
                        var4 = var8 > var7;
                    case 6522:
                        if (!var4) {
                            _fun9979_ip = 6594;
                            continue _fun9979
                        }
                    case 6525:
                        var11 = var2;
                        var8 = var11.setAttributes;
                        var14 = _closure1_slot2;
                        var12 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var10];
                        var4 = var12.bind(var9)(var4);
                        var13 = var4.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var4 = var3;
                        var12 = var4.responseTexts;
                        var4 = var12.join;
                        var12 = var4.bind(var12)(var15);
                        var4 = {};
                        var4 = var14.bind(var9)(var4, var13, var12);
                        var4 = var8.bind(var11)(var4);
                    case 6594:
                        var4 = var5;
                        if (!var5) {
                            _fun9979_ip = 6618;
                            continue _fun9979
                        }
                    case 6600:
                        var5 = var3;
                        var5 = var5.toolCalls;
                        var5 = var5.length;
                        var4 = var5 > var7;
                    case 6618:
                        if (!var4) {
                            _fun9979_ip = 6696;
                            continue _fun9979
                        }
                    case 6621:
                        var5 = var2;
                        var4 = var5.setAttributes;
                        var8 = _closure1_slot2;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var10];
                        var6 = var7.bind(var9)(var6);
                        var7 = var6.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var6 = global;
                        var10 = var6.JSON;
                        var6 = var10.stringify;
                        var3 = var3.toolCalls;
                        var6 = var6.bind(var10)(var3);
                        var3 = {};
                        var3 = var8.bind(var9)(var3, var7, var6);
                        var3 = var4.bind(var5)(var3);
                    case 6696:
                        var3 = var2;
                        var2 = var3.end;
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 6710:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function(arg0, arg1, arg2) { // Original name: instrumentAsyncIterableStream, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.instrumentAsyncIterableStream = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: instrumentMessageStream, environment: var1
        var0 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = {};
        var3 = new Array(0);
        var2.responseTexts = var3;
        var3 = new Array(0);
        var2.finishReasons = var3;
        var3 = '';
        var2.responseId = var3;
        var2.responseModel = var3;
        var3 = undefined;
        var2.promptTokens = var3;
        var2.completionTokens = var3;
        var2.cacheCreationInputTokens = var3;
        var2.cacheReadInputTokens = var3;
        var3 = new Array(0);
        var2.toolCalls = var3;
        var3 = {};
        var2.activeToolBlocks = var3;
        var _closure2_slot2 = var2;
        var4 = var0.on;
        var3 = 'streamEvent';
        var2 = function(arg0) { // Environment: var1
            var5 = _closure1_slot6;
            var8 = _closure2_slot2;
            var7 = _closure2_slot1;
            var6 = _closure2_slot0;
            var0 = undefined;
            var9 = arg0;
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var2 = var4.bind(var0)(var3, var2);
        var4 = var0.on;
        var3 = 'message';
        var2 = function() { // Environment: var1
            _fun9983: for (var _fun9983_ip = 0;;) switch (_fun9983_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var3 = var1.isRecording;
                    var3 = var3.bind(var1)();
                    if (!var3) {
                        _fun9983_ip = 562;
                        continue _fun9983
                    }
                case 31:
                    var3 = var0.responseId;
                    if (!var3) {
                        _fun9983_ip = 101;
                        continue _fun9983
                    }
                case 40:
                    var4 = var1.setAttributes;
                    var8 = _closure1_slot2;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 5;
                    var3 = var6[var3];
                    var7 = undefined;
                    var3 = var5.bind(var7)(var3);
                    var6 = var3.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                    var5 = var0.responseId;
                    var3 = {};
                    var3 = var8.bind(var7)(var3, var6, var5);
                    var3 = var4.bind(var1)(var3);
                case 101:
                    var3 = var0.responseModel;
                    if (!var3) {
                        _fun9983_ip = 171;
                        continue _fun9983
                    }
                case 110:
                    var4 = var1.setAttributes;
                    var8 = _closure1_slot2;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 5;
                    var3 = var6[var3];
                    var7 = undefined;
                    var3 = var5.bind(var7)(var3);
                    var6 = var3.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                    var5 = var0.responseModel;
                    var3 = {};
                    var3 = var8.bind(var7)(var3, var6, var5);
                    var3 = var4.bind(var1)(var3);
                case 171:
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var5 = 6;
                    var5 = var4[var5];
                    var6 = undefined;
                    var12 = var8.bind(var6)(var5);
                    var11 = var12.setTokenUsageAttributes;
                    var16 = var0.promptTokens;
                    var15 = var0.completionTokens;
                    var14 = var0.cacheCreationInputTokens;
                    var13 = var0.cacheReadInputTokens;
                    var18 = var12;
                    var17 = var1;
                    var5 = var18[var11](var17, var16, var15, var14, var13, var12);
                    var5 = var1.setAttributes;
                    var10 = _closure1_slot2;
                    var7 = 5;
                    var4 = var4[var7];
                    var4 = var8.bind(var6)(var4);
                    var9 = var4.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                    var8 = {};
                    var4 = true;
                    var4 = var10.bind(var6)(var8, var9, var4);
                    var4 = var5.bind(var1)(var4);
                    var4 = var0.finishReasons;
                    var4 = var4.length;
                    var5 = 0;
                    if (!(var4 > var5)) {
                        _fun9983_ip = 369;
                        continue _fun9983
                    }
                case 297:
                    var8 = var1.setAttributes;
                    var11 = _closure1_slot2;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var9.bind(var6)(var4);
                    var10 = var4.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                    var4 = global;
                    var12 = var4.JSON;
                    var9 = var12.stringify;
                    var4 = var0.finishReasons;
                    var9 = var9.bind(var12)(var4);
                    var4 = {};
                    var4 = var11.bind(var6)(var4, var10, var9);
                    var4 = var8.bind(var1)(var4);
                case 369:
                    var4 = var2;
                    if (!var2) {
                        _fun9983_ip = 390;
                        continue _fun9983
                    }
                case 375:
                    var8 = var0.responseTexts;
                    var8 = var8.length;
                    var4 = var8 > var5;
                case 390:
                    if (!var4) {
                        _fun9983_ip = 460;
                        continue _fun9983
                    }
                case 393:
                    var8 = var1.setAttributes;
                    var11 = _closure1_slot2;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var7];
                    var4 = var9.bind(var6)(var4);
                    var10 = var4.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                    var12 = var0.responseTexts;
                    var9 = var12.join;
                    var4 = '';
                    var9 = var9.bind(var12)(var4);
                    var4 = {};
                    var4 = var11.bind(var6)(var4, var10, var9);
                    var4 = var8.bind(var1)(var4);
                case 460:
                    if (!var2) {
                        _fun9983_ip = 478;
                        continue _fun9983
                    }
                case 463:
                    var4 = var0.toolCalls;
                    var4 = var4.length;
                    var2 = var4 > var5;
                case 478:
                    if (!var2) {
                        _fun9983_ip = 553;
                        continue _fun9983
                    }
                case 481:
                    var2 = var1.setAttributes;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                    var3 = global;
                    var7 = var3.JSON;
                    var3 = var7.stringify;
                    var0 = var0.toolCalls;
                    var3 = var3.bind(var7)(var0);
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var4, var3);
                    var0 = var2.bind(var1)(var0);
                case 553:
                    var0 = var1.end;
                    var0 = var0.bind(var1)();
                case 562:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var4.bind(var0)(var3, var2);
        var3 = var0.on;
        var2 = 'error';
        var1 = function(arg0) { // Environment: var1
            _fun9984: for (var _fun9984_ip = 0;;) switch (_fun9984_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var3 = var5.captureException;
                    var2 = {};
                    var1 = {
                        'handled': false,
                        'type': 'auto.ai.anthropic.stream_error'
                    };
                    var2.mechanism = var1;
                    var1 = arg0;
                    var1 = var3.bind(var5)(var1, var2);
                    var3 = _closure2_slot0;
                    var2 = var3.isRecording;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun9984_ip = 143;
                        continue _fun9984
                    }
                case 77:
                    var2 = _closure2_slot0;
                    var3 = var2.setStatus;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 3;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.SPAN_STATUS_ERROR;
                    var1.code = var4;
                    var4 = 'stream_error';
                    var1.message = var4;
                    var1 = var3.bind(var2)(var1);
                    var1 = var2.end;
                    var1 = var1.bind(var2)();
                case 143:
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.instrumentMessageStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 963, 965, 839, 867, 955, 957]);