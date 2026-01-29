// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: AsyncFromSyncIterator, environment: var1
        var0 = function(arg0) { // Original name: AsyncFromSyncIteratorContinuation, environment: var3
            _fun9910: for (var _fun9910_ip = 0;;) switch (_fun9910_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var4 = var0.Object;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (!(var2 === var3)) {
                        _fun9910_ip = 72;
                        continue _fun9910
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
            _fun9914: for (var _fun9914_ip = 0;;) switch (_fun9914_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun9914_ip = 53;
                        continue _fun9914
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun9914_ip = 87;
                    continue _fun9914;
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
            _fun9915: for (var _fun9915_ip = 0;;) switch (_fun9915_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = var3.s;
                    var5 = var1.return;
                    if (!(var2 !== var5)) {
                        _fun9915_ip = 53;
                        continue _fun9915
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = var3.s;
                    var0 = arguments;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    _fun9915_ip = 75;
                    continue _fun9915;
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
    var0 = function(arg0, arg1) { // Original name: processChatCompletionToolCalls, environment: var1
        _fun9916: for (var _fun9916_ip = 0;;) switch (_fun9916_ip) {
            case 0:
                var6 = arg1;
                var0 = undefined;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var5 = arg0;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var4 = null;
                var3 = '';
                var1 = global;
            case 25:
                var10 = var5().value;
                var11 = var2;
                if (!(var11 !== var0)) {
                    _fun9916_ip = 284;
                    continue _fun9916
                }
            case 39: // try_start_0
                var7 = var10;
                var10 = var10.index;
                var8 = var10;
                if (!(var0 !== var10)) {
                    _fun9916_ip = 272;
                    continue _fun9916
                }
            case 57:
                var10 = var7;
                var10 = var10.function;
                if (!var10) {
                    _fun9916_ip = 272;
                    continue _fun9916
                }
            case 72:
                var11 = var8;
                var10 = var6;
                var10 = var10.chatCompletionToolCalls;
                var12 = var11 in var10;
                var10 = var6;
                var11 = var10.chatCompletionToolCalls;
                var10 = var8;
                if (var12) {
                    _fun9916_ip = 182;
                    continue _fun9916
                }
            case 103:
                var16 = var1.Object;
                var15 = var16.assign;
                var14 = var7;
                var13 = {};
                var12 = {};
                var17 = var14.function;
                var17 = var17.name;
                var12.name = var17;
                var18 = var14.function;
                var18 = var18.arguments;
                var17 = var18;
                if (var18) {
                    _fun9916_ip = 157;
                    continue _fun9916
                }
            case 154:
                var17 = var3;
            case 157:
                var12.arguments = var17;
                var13.function = var12;
                var12 = {};
                var12 = var15.bind(var16)(var12, var14, var13);
                var11[var10] = var12;
                _fun9916_ip = 272;
                continue _fun9916;
            case 182:
                var9 = var11[var10];
                var12 = var7;
                var12 = var12.function;
                var12 = var12.arguments;
                var11 = var12;
                if (!var12) {
                    _fun9916_ip = 214;
                    continue _fun9916
                }
            case 207:
                var12 = var9;
                var11 = var4 != var12;
            case 214:
                var10 = var11;
                if (!var11) {
                    _fun9916_ip = 229;
                    continue _fun9916
                }
            case 220:
                var11 = var9;
                var10 = var11.function;
            case 229:
                if (!var10) {
                    _fun9916_ip = 272;
                    continue _fun9916
                }
            case 232:
                var10 = var9;
                var11 = var10.function;
                var12 = var11.arguments;
                var10 = var7;
                var10 = var10.function;
                var10 = var10.arguments;
                var10 = var12 + var10;
                var11.arguments = var10;
            case 272: // try_end0
                _fun9916_ip = 25;
                continue _fun9916;
            case 277: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 284:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: processChatCompletionChunk, environment: var1
        _fun9917: for (var _fun9917_ip = 0;;) switch (_fun9917_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var5 = var3;
                var6 = arg2;
                var0 = undefined;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var2 = var1.id;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun9917_ip = 40;
                    continue _fun9917
                }
            case 31:
                var10 = var5;
                var2 = var10.responseId;
            case 40:
                var3.responseId = var2;
                var3 = var5;
                var2 = var1.model;
                if (!(var4 == var2)) {
                    _fun9917_ip = 68;
                    continue _fun9917
                }
            case 59:
                var10 = var5;
                var2 = var10.responseModel;
            case 68:
                var3.responseModel = var2;
                var3 = var5;
                var2 = var1.created;
                if (!(var4 == var2)) {
                    _fun9917_ip = 96;
                    continue _fun9917
                }
            case 87:
                var10 = var5;
                var2 = var10.responseTimestamp;
            case 96:
                var3.responseTimestamp = var2;
                var2 = var1.usage;
                if (!var2) {
                    _fun9917_ip = 168;
                    continue _fun9917
                }
            case 111:
                var3 = var5;
                var2 = var1.usage;
                var2 = var2.prompt_tokens;
                var3.promptTokens = var2;
                var2 = var1.usage;
                var2 = var2.completion_tokens;
                var3.completionTokens = var2;
                var2 = var1.usage;
                var2 = var2.total_tokens;
                var3.totalTokens = var2;
            case 168:
                var1 = var1.choices;
                if (!(var4 == var1)) {
                    _fun9917_ip = 182;
                    continue _fun9917
                }
            case 178:
                var1 = new Array(0);
            case 182:
                var3 = var1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
            case 191:
                var10 = var3().value;
                var11 = var2;
                if (!(var11 !== var0)) {
                    _fun9917_ip = 397;
                    continue _fun9917
                }
            case 205: // try_start_0
                var7 = var10;
                var10 = var6;
                if (!var10) {
                    _fun9917_ip = 345;
                    continue _fun9917
                }
            case 217:
                var11 = var7;
                var11 = var11.delta;
                var8 = var11;
                var11 = var4 != var11;
                var10 = var11;
                if (!var11) {
                    _fun9917_ip = 247;
                    continue _fun9917
                }
            case 239:
                var11 = var8;
                var10 = var11.content;
            case 247:
                if (!var10) {
                    _fun9917_ip = 283;
                    continue _fun9917
                }
            case 250:
                var10 = var5;
                var12 = var10.responseTexts;
                var11 = var12.push;
                var10 = var7;
                var10 = var10.delta;
                var10 = var10.content;
                var10 = var11.bind(var12)(var10);
            case 283:
                var11 = var7;
                var11 = var11.delta;
                var9 = var11;
                var11 = var4 != var11;
                var10 = var11;
                if (!var11) {
                    _fun9917_ip = 314;
                    continue _fun9917
                }
            case 305:
                var11 = var9;
                var10 = var11.tool_calls;
            case 314:
                if (!var10) {
                    _fun9917_ip = 345;
                    continue _fun9917
                }
            case 317:
                var12 = _closure1_slot7;
                var10 = var7;
                var10 = var10.delta;
                var11 = var10.tool_calls;
                var10 = var5;
                var10 = var12.bind(var0)(var11, var10);
            case 345:
                var10 = var7;
                var10 = var10.finish_reason;
                if (!var10) {
                    _fun9917_ip = 385;
                    continue _fun9917
                }
            case 357:
                var10 = var5;
                var12 = var10.finishReasons;
                var11 = var12.push;
                var10 = var7;
                var10 = var10.finish_reason;
                var10 = var11.bind(var12)(var10);
            case 385: // try_end0
                _fun9917_ip = 191;
                continue _fun9917;
            case 390: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 397:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: processResponsesApiEvent, environment: var1
        _fun9918: for (var _fun9918_ip = 0;;) switch (_fun9918_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var2 = arg2;
                var6 = arg3;
                if (!var3) {
                    _fun9918_ip = 26;
                    continue _fun9918
                }
            case 15:
                var4 = 'object';
                var1 = typeof var3;
                if (!(var4 !== var1)) {
                    _fun9918_ip = 53;
                    continue _fun9918
                }
            case 26:
                var5 = var0.eventTypes;
                var4 = var5.push;
                var1 = 'unknown:non-object';
                var1 = var4.bind(var5)(var1);
                _fun9918_ip = 488;
                continue _fun9918;
            case 53:
                var1 = global;
                var1 = var1.Error;
                var1 = var3 instanceof var1;
                if (var1) {
                    _fun9918_ip = 492;
                    continue _fun9918
                }
            case 71:
                var1 = 'type';
                var1 = var1 in var3;
                if (!var1) {
                    _fun9918_ip = 488;
                    continue _fun9918
                }
            case 85:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var5 = var1.RESPONSE_EVENT_TYPES;
                var4 = var5.includes;
                var1 = var3.type;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun9918_ip = 160;
                    continue _fun9918
                }
            case 134:
                var5 = var0.eventTypes;
                var4 = var5.push;
                var1 = var3.type;
                var1 = var4.bind(var5)(var1);
                _fun9918_ip = 488;
                continue _fun9918;
            case 160:
                if (!var2) {
                    _fun9918_ip = 251;
                    continue _fun9918
                }
            case 163:
                var4 = var3.type;
                var1 = 'response.output_item.done';
                var1 = var1 === var4;
                if (!var1) {
                    _fun9918_ip = 189;
                    continue _fun9918
                }
            case 181:
                var4 = 'item';
                var1 = var4 in var3;
            case 189:
                if (!var1) {
                    _fun9918_ip = 213;
                    continue _fun9918
                }
            case 192:
                var5 = var0.responsesApiToolCalls;
                var4 = var5.push;
                var1 = var3.item;
                var1 = var4.bind(var5)(var1);
            case 213:
                var4 = var3.type;
                var1 = 'response.output_text.delta';
                if (!(var1 === var4)) {
                    _fun9918_ip = 251;
                    continue _fun9918
                }
            case 228:
                var1 = 'delta';
                var1 = var1 in var3;
                if (!var1) {
                    _fun9918_ip = 251;
                    continue _fun9918
                }
            case 239:
                var1 = var3.delta;
                if (var1) {
                    _fun9918_ip = 466;
                    continue _fun9918
                }
            case 251:
                var1 = 'response';
                var1 = var1 in var3;
                if (!var1) {
                    _fun9918_ip = 488;
                    continue _fun9918
                }
            case 265:
                var1 = var3.response;
                var4 = var1.id;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun9918_ip = 288;
                    continue _fun9918
                }
            case 282:
                var4 = var0.responseId;
            case 288:
                var0.responseId = var4;
                var4 = var1.model;
                if (!(var5 == var4)) {
                    _fun9918_ip = 310;
                    continue _fun9918
                }
            case 304:
                var4 = var0.responseModel;
            case 310:
                var0.responseModel = var4;
                var4 = var1.created_at;
                if (!(var5 == var4)) {
                    _fun9918_ip = 332;
                    continue _fun9918
                }
            case 326:
                var4 = var0.responseTimestamp;
            case 332:
                var0.responseTimestamp = var4;
                var4 = var1.usage;
                if (!var4) {
                    _fun9918_ip = 401;
                    continue _fun9918
                }
            case 347:
                var4 = var1.usage;
                var4 = var4.input_tokens;
                var0.promptTokens = var4;
                var4 = var1.usage;
                var4 = var4.output_tokens;
                var0.completionTokens = var4;
                var4 = var1.usage;
                var4 = var4.total_tokens;
                var0.totalTokens = var4;
            case 401:
                var4 = var1.status;
                if (!var4) {
                    _fun9918_ip = 430;
                    continue _fun9918
                }
            case 409:
                var7 = var0.finishReasons;
                var5 = var7.push;
                var4 = var1.status;
                var4 = var5.bind(var7)(var4);
            case 430:
                if (!var2) {
                    _fun9918_ip = 439;
                    continue _fun9918
                }
            case 433:
                var2 = var1.output_text;
            case 439:
                if (!var2) {
                    _fun9918_ip = 488;
                    continue _fun9918
                }
            case 442:
                var4 = var0.responseTexts;
                var2 = var4.push;
                var1 = var1.output_text;
                var1 = var2.bind(var4)(var1);
                _fun9918_ip = 488;
                continue _fun9918;
            case 466:
                var2 = var0.responseTexts;
                var1 = var2.push;
                var0 = var3.delta;
                var0 = var1.bind(var2)(var0);
            case 488:
                var0 = undefined;
                return var0;
            case 492:
                var5 = var6.setStatus;
                var0 = {};
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var7 = var4[var1];
                var1 = undefined;
                var7 = var2.bind(var1)(var7);
                var7 = var7.SPAN_STATUS_ERROR;
                var0.code = var7;
                var7 = 'internal_error';
                var0.message = var7;
                var0 = var5.bind(var6)(var0);
                var0 = 5;
                var0 = var4[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.captureException;
                var0 = {};
                var4 = {
                    'handled': false,
                    'type': 'auto.ai.openai.stream-response'
                };
                var0.mechanism = var4;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: _instrumentStream, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun9921: for (var _fun9921_ip = 0;;) switch (_fun9921_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun9921_ip = 5926;
                            continue _fun9921
                        }
                    case 10:
                        var10 = arg0;
                        var2 = arg1;
                        var8 = arg2;
                        var9 = undefined;
                        var4 = undefined;
                        var1 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                        var21 = undefined;
                        var6 = undefined;
                        var22 = undefined;
                        var3 = undefined;
                        var11 = {
                            'eventTypes': null,
                            'responseTexts': null,
                            'finishReasons': null,
                            'responseId': '',
                            'responseModel': '',
                            'responseTimestamp': 0
                        };
                        var5 = new Array(0);
                        var11.eventTypes = var5;
                        var5 = new Array(0);
                        var11.responseTexts = var5;
                        var5 = new Array(0);
                        var11.finishReasons = var5;
                        var15 = '';
                        var5 = 0;
                        var11.promptTokens = var9;
                        var11.completionTokens = var9;
                        var11.totalTokens = var9;
                        var13 = {};
                        var11.chatCompletionToolCalls = var13;
                        var13 = new Array(0);
                        var11.responsesApiToolCalls = var13;
                        var4 = var11;
                    case 117: // try_start_8
                        var12 = false;
                        var7 = false;
                    case 121: // try_start_0 // try_start_1
                        var16 = var10;
                        var11 = global;
                        var10 = var11.Symbol;
                        var13 = 'undefined';
                        var10 = typeof var10;
                        var26 = undefined;
                        var25 = undefined;
                        if (!(var13 !== var10)) {
                            _fun9921_ip = 169;
                            continue _fun9921
                        }
                    case 146:
                        var10 = var11.Symbol;
                        var26 = var10.asyncIterator;
                        var10 = var11.Symbol;
                        var25 = var10.iterator;
                    case 169:
                        var24 = 1;
                        var23 = '@@asyncIterator';
                        var19 = '@@iterator';
                        var17 = null;
                        var18 = undefined;
                    case 186:
                        if (!var26) {
                            _fun9921_ip = 200;
                            continue _fun9921
                        }
                    case 189:
                        var13 = var16[var26];
                        var18 = var13;
                        if (!(var17 == var18)) {
                            _fun9921_ip = 302;
                            continue _fun9921
                        }
                    case 200:
                        if (!var25) {
                            _fun9921_ip = 214;
                            continue _fun9921
                        }
                    case 203:
                        var14 = var16[var25];
                        var18 = var14;
                        if (!(var17 == var18)) {
                            _fun9921_ip = 263;
                            continue _fun9921
                        }
                    case 214:
                        var10 = parseFloat(var24);
                        var24 = var10 - 1;
                        var26 = var23;
                        var25 = var19;
                        if (var10) {
                            _fun9921_ip = 186;
                            continue _fun9921
                        }
                    case 229:
                        var19 = var11.TypeError;
                        var10 = var19.prototype;
                        var18 = Object.create(var10, {
                            constructor: {
                                value: var19
                            }
                        });
                        var32 = 'Object is not async iterable';
                        var33 = var18;
                        var10 = new var33[var19](var32, var31);
                        var10 = var10 instanceof Object ? var10 : var18;
                        throw var10;
                    case 263:
                        var18 = _closure1_slot6;
                        var10 = var14.call;
                        var32 = var10.bind(var14)(var16);
                        var14 = var18.prototype;
                        var14 = Object.create(var14, {
                            constructor: {
                                value: var18
                            }
                        });
                        var33 = var14;
                        var10 = new var33[var18](var32, var31);
                        var14 = var10 instanceof Object ? var10 : var14;
                        _fun9921_ip = 312;
                        continue _fun9921;
                    case 302:
                        var10 = var13.call;
                        var14 = var10.bind(var13)(var16);
                    case 312:
                        var6 = var14;
                        var13 = _closure1_slot4;
                        var10 = var14.next;
                        var10 = var10.bind(var14)();
                        var13 = var13.bind(var9)(var10);
                        SaveGenerator(address = 340);
                    case 338:
                        return var13;
                    case 340:
                        ResumeGenerator(result_out_reg = 13, return_bool_out_reg = 10);
                        if (var10) {
                            _fun9921_ip = 2696;
                            continue _fun9921
                        }
                    case 349:
                        var21 = var13;
                        var10 = var13.done;
                        var10 = !var10;
                        var12 = var10;
                        var19 = 7;
                        if (!var10) {
                            _fun9921_ip = 561;
                            continue _fun9921
                        }
                    case 372:
                        var10 = var21;
                        var18 = var10.value;
                        var22 = var18;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var19];
                        var14 = var14.bind(var9)(var10);
                        var10 = var14.isChatCompletionChunk;
                        var10 = var10.bind(var14)(var18);
                        if (var10) {
                            _fun9921_ip = 472;
                            continue _fun9921
                        }
                    case 414:
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var19];
                        var18 = var14.bind(var9)(var10);
                        var14 = var18.isResponsesApiStreamEvent;
                        var10 = var22;
                        var10 = var14.bind(var18)(var10);
                        if (!var10) {
                            _fun9921_ip = 492;
                            continue _fun9921
                        }
                    case 448:
                        var24 = _closure1_slot9;
                        var32 = var22;
                        var31 = var4;
                        var30 = var8;
                        var29 = var2;
                        var33 = undefined;
                        var10 = var33[var24](var32, var31, var30, var29, var28);
                        _fun9921_ip = 492;
                        continue _fun9921;
                    case 472:
                        var23 = _closure1_slot8;
                        var18 = var22;
                        var14 = var4;
                        var10 = var8;
                        var10 = var23.bind(var9)(var18, var14, var10);
                    case 492:
                        var14 = var22;
                        SaveGenerator(address = 499);
                    case 497:
                        return var14;
                    case 499:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 10);
                        if (var10) {
                            _fun9921_ip = 1631;
                            continue _fun9921
                        }
                    case 508:
                        var12 = false;
                        var18 = _closure1_slot4;
                        var23 = var6;
                        var10 = var23.next;
                        var10 = var10.bind(var23)();
                        var18 = var18.bind(var9)(var10);
                        SaveGenerator(address = 535);
                    case 533:
                        return var18;
                    case 535:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 10);
                        if (var10) {
                            _fun9921_ip = 566;
                            continue _fun9921
                        }
                    case 541:
                        var21 = var18;
                        var10 = var18.done;
                        var10 = !var10;
                        var12 = var10;
                        if (var10) {
                            _fun9921_ip = 372;
                            continue _fun9921
                        }
                    case 561: // try_end0
                        _fun9921_ip = 3771;
                        continue _fun9921;
                    case 566: // try_start_2 // try_end1
                        var20 = var12;
                        var10 = var20;
                        if (!var20) {
                            _fun9921_ip = 588;
                            continue _fun9921
                        }
                    case 575:
                        var20 = var6;
                        var20 = var20.return;
                        var10 = var17 != var20;
                    case 588:
                        if (!var10) {
                            _fun9921_ip = 626;
                            continue _fun9921
                        }
                    case 591:
                        var20 = _closure1_slot4;
                        var21 = var6;
                        var10 = var21.return;
                        var10 = var10.bind(var21)();
                        var10 = var20.bind(var9)(var10);
                        SaveGenerator(address = 617);
                    case 615:
                        return var10;
                    case 617:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 20);
                        if (var20) {
                            _fun9921_ip = 1121;
                            continue _fun9921
                        }
                    case 626: // try_end2
                        var20 = var7;
                        if (var20) {
                            _fun9921_ip = 1116;
                            continue _fun9921
                        }
                    case 635: // try_end8
                        var25 = _closure1_slot0;
                        var21 = _closure1_slot1;
                        var20 = var21[var19];
                        var28 = var25.bind(var9)(var20);
                        var27 = var28.setCommonResponseAttributes;
                        var23 = var2;
                        var20 = var4;
                        var31 = var20.responseId;
                        var30 = var20.responseModel;
                        var29 = var20.responseTimestamp;
                        var33 = var28;
                        var32 = var23;
                        var22 = var33[var27](var32, var31, var30, var29, var28);
                        var22 = var21[var19];
                        var28 = var25.bind(var9)(var22);
                        var27 = var28.setTokenUsageAttributes;
                        var31 = var20.promptTokens;
                        var30 = var20.completionTokens;
                        var29 = var20.totalTokens;
                        var33 = var28;
                        var32 = var23;
                        var22 = var33[var27](var32, var31, var30, var29, var28);
                        var22 = var23.setAttributes;
                        var27 = _closure1_slot3;
                        var24 = 8;
                        var21 = var21[var24];
                        var21 = var25.bind(var9)(var21);
                        var26 = var21.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var25 = {};
                        var21 = true;
                        var21 = var27.bind(var9)(var25, var26, var21);
                        var21 = var22.bind(var23)(var21);
                        var20 = var20.finishReasons;
                        var20 = var20.length;
                        if (!var20) {
                            _fun9921_ip = 869;
                            continue _fun9921
                        }
                    case 793:
                        var22 = var2;
                        var21 = var22.setAttributes;
                        var26 = _closure1_slot3;
                        var23 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var20 = var20[var24];
                        var20 = var23.bind(var9)(var20);
                        var25 = var20.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var27 = var11.JSON;
                        var23 = var27.stringify;
                        var20 = var4;
                        var20 = var20.finishReasons;
                        var23 = var23.bind(var27)(var20);
                        var20 = {};
                        var20 = var26.bind(var9)(var20, var25, var23);
                        var20 = var21.bind(var22)(var20);
                    case 869:
                        var21 = var8;
                        var20 = var21;
                        if (!var21) {
                            _fun9921_ip = 892;
                            continue _fun9921
                        }
                    case 878:
                        var21 = var4;
                        var21 = var21.responseTexts;
                        var20 = var21.length;
                    case 892:
                        if (!var20) {
                            _fun9921_ip = 964;
                            continue _fun9921
                        }
                    case 895:
                        var22 = var2;
                        var21 = var22.setAttributes;
                        var26 = _closure1_slot3;
                        var23 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var20 = var20[var24];
                        var20 = var23.bind(var9)(var20);
                        var25 = var20.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var20 = var4;
                        var23 = var20.responseTexts;
                        var20 = var23.join;
                        var23 = var20.bind(var23)(var15);
                        var20 = {};
                        var20 = var26.bind(var9)(var20, var25, var23);
                        var20 = var21.bind(var22)(var20);
                    case 964:
                        var23 = var11.Object;
                        var22 = var23.values;
                        var20 = var4;
                        var21 = var20.chatCompletionToolCalls;
                        var23 = var22.bind(var23)(var21);
                        var22 = new Array(0);
                        var21 = var22.concat;
                        var25 = _closure1_slot2;
                        var20 = var20.responsesApiToolCalls;
                        var20 = var25.bind(var9)(var20);
                        var20 = var21.bind(var22)(var23, var20);
                        var3 = var20;
                        var20 = var20.length;
                        if (!(var20 > var5)) {
                            _fun9921_ip = 1101;
                            continue _fun9921
                        }
                    case 1031:
                        var22 = var2;
                        var21 = var22.setAttributes;
                        var25 = _closure1_slot3;
                        var23 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var20 = var20[var24];
                        var20 = var23.bind(var9)(var20);
                        var24 = var20.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var26 = var11.JSON;
                        var23 = var26.stringify;
                        var20 = var3;
                        var23 = var23.bind(var26)(var20);
                        var20 = {};
                        var20 = var25.bind(var9)(var20, var24, var23);
                        var20 = var21.bind(var22)(var20);
                    case 1101:
                        var21 = var2;
                        var20 = var21.end;
                        var20 = var20.bind(var21)();
                        return var18;
                    case 1116: // try_start_9
                        var18 = var1;
                        throw var18;
                    case 1121:
                        var18 = var7;
                        if (var18) {
                            _fun9921_ip = 1611;
                            continue _fun9921
                        }
                    case 1130: // try_end9
                        var24 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var18 = var20[var19];
                        var27 = var24.bind(var9)(var18);
                        var26 = var27.setCommonResponseAttributes;
                        var22 = var2;
                        var18 = var4;
                        var31 = var18.responseId;
                        var30 = var18.responseModel;
                        var29 = var18.responseTimestamp;
                        var33 = var27;
                        var32 = var22;
                        var21 = var33[var26](var32, var31, var30, var29, var28);
                        var21 = var20[var19];
                        var27 = var24.bind(var9)(var21);
                        var26 = var27.setTokenUsageAttributes;
                        var31 = var18.promptTokens;
                        var30 = var18.completionTokens;
                        var29 = var18.totalTokens;
                        var33 = var27;
                        var32 = var22;
                        var21 = var33[var26](var32, var31, var30, var29, var28);
                        var21 = var22.setAttributes;
                        var26 = _closure1_slot3;
                        var23 = 8;
                        var20 = var20[var23];
                        var20 = var24.bind(var9)(var20);
                        var25 = var20.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var24 = {};
                        var20 = true;
                        var20 = var26.bind(var9)(var24, var25, var20);
                        var20 = var21.bind(var22)(var20);
                        var18 = var18.finishReasons;
                        var18 = var18.length;
                        if (!var18) {
                            _fun9921_ip = 1364;
                            continue _fun9921
                        }
                    case 1288:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var25 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var24 = var18.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var26 = var11.JSON;
                        var22 = var26.stringify;
                        var18 = var4;
                        var18 = var18.finishReasons;
                        var22 = var22.bind(var26)(var18);
                        var18 = {};
                        var18 = var25.bind(var9)(var18, var24, var22);
                        var18 = var20.bind(var21)(var18);
                    case 1364:
                        var20 = var8;
                        var18 = var20;
                        if (!var20) {
                            _fun9921_ip = 1387;
                            continue _fun9921
                        }
                    case 1373:
                        var20 = var4;
                        var20 = var20.responseTexts;
                        var18 = var20.length;
                    case 1387:
                        if (!var18) {
                            _fun9921_ip = 1459;
                            continue _fun9921
                        }
                    case 1390:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var25 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var24 = var18.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var18 = var4;
                        var22 = var18.responseTexts;
                        var18 = var22.join;
                        var22 = var18.bind(var22)(var15);
                        var18 = {};
                        var18 = var25.bind(var9)(var18, var24, var22);
                        var18 = var20.bind(var21)(var18);
                    case 1459:
                        var22 = var11.Object;
                        var21 = var22.values;
                        var18 = var4;
                        var20 = var18.chatCompletionToolCalls;
                        var22 = var21.bind(var22)(var20);
                        var21 = new Array(0);
                        var20 = var21.concat;
                        var24 = _closure1_slot2;
                        var18 = var18.responsesApiToolCalls;
                        var18 = var24.bind(var9)(var18);
                        var18 = var20.bind(var21)(var22, var18);
                        var3 = var18;
                        var18 = var18.length;
                        if (!(var18 > var5)) {
                            _fun9921_ip = 1596;
                            continue _fun9921
                        }
                    case 1526:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var24 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var23 = var18.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var25 = var11.JSON;
                        var22 = var25.stringify;
                        var18 = var3;
                        var22 = var22.bind(var25)(var18);
                        var18 = {};
                        var18 = var24.bind(var9)(var18, var23, var22);
                        var18 = var20.bind(var21)(var18);
                    case 1596:
                        var20 = var2;
                        var18 = var20.end;
                        var18 = var18.bind(var20)();
                        return var10;
                    case 1611: // try_start_10
                        var10 = var1;
                        throw var10;
                    case 1616: // catch_target2
                        CatchBlockStart(arg_register = 10);
                        var18 = var7;
                        if (var18) {
                            _fun9921_ip = 1626;
                            continue _fun9921
                        }
                    case 1624:
                        throw var10;
                    case 1626:
                        var10 = var1;
                        throw var10;
                    case 1631: // try_start_3
                        var18 = var12;
                        var10 = var18;
                        if (!var18) {
                            _fun9921_ip = 1653;
                            continue _fun9921
                        }
                    case 1640:
                        var18 = var6;
                        var18 = var18.return;
                        var10 = var17 != var18;
                    case 1653:
                        if (!var10) {
                            _fun9921_ip = 1691;
                            continue _fun9921
                        }
                    case 1656:
                        var18 = _closure1_slot4;
                        var20 = var6;
                        var10 = var20.return;
                        var10 = var10.bind(var20)();
                        var10 = var18.bind(var9)(var10);
                        SaveGenerator(address = 1682);
                    case 1680:
                        return var10;
                    case 1682:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 18);
                        if (var18) {
                            _fun9921_ip = 2186;
                            continue _fun9921
                        }
                    case 1691: // try_end3
                        var18 = var7;
                        if (var18) {
                            _fun9921_ip = 2181;
                            continue _fun9921
                        }
                    case 1700: // try_end10
                        var24 = _closure1_slot0;
                        var20 = _closure1_slot1;
                        var18 = var20[var19];
                        var27 = var24.bind(var9)(var18);
                        var26 = var27.setCommonResponseAttributes;
                        var22 = var2;
                        var18 = var4;
                        var31 = var18.responseId;
                        var30 = var18.responseModel;
                        var29 = var18.responseTimestamp;
                        var33 = var27;
                        var32 = var22;
                        var21 = var33[var26](var32, var31, var30, var29, var28);
                        var21 = var20[var19];
                        var27 = var24.bind(var9)(var21);
                        var26 = var27.setTokenUsageAttributes;
                        var31 = var18.promptTokens;
                        var30 = var18.completionTokens;
                        var29 = var18.totalTokens;
                        var33 = var27;
                        var32 = var22;
                        var21 = var33[var26](var32, var31, var30, var29, var28);
                        var21 = var22.setAttributes;
                        var26 = _closure1_slot3;
                        var23 = 8;
                        var20 = var20[var23];
                        var20 = var24.bind(var9)(var20);
                        var25 = var20.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var24 = {};
                        var20 = true;
                        var20 = var26.bind(var9)(var24, var25, var20);
                        var20 = var21.bind(var22)(var20);
                        var18 = var18.finishReasons;
                        var18 = var18.length;
                        if (!var18) {
                            _fun9921_ip = 1934;
                            continue _fun9921
                        }
                    case 1858:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var25 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var24 = var18.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var26 = var11.JSON;
                        var22 = var26.stringify;
                        var18 = var4;
                        var18 = var18.finishReasons;
                        var22 = var22.bind(var26)(var18);
                        var18 = {};
                        var18 = var25.bind(var9)(var18, var24, var22);
                        var18 = var20.bind(var21)(var18);
                    case 1934:
                        var20 = var8;
                        var18 = var20;
                        if (!var20) {
                            _fun9921_ip = 1957;
                            continue _fun9921
                        }
                    case 1943:
                        var20 = var4;
                        var20 = var20.responseTexts;
                        var18 = var20.length;
                    case 1957:
                        if (!var18) {
                            _fun9921_ip = 2029;
                            continue _fun9921
                        }
                    case 1960:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var25 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var24 = var18.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var18 = var4;
                        var22 = var18.responseTexts;
                        var18 = var22.join;
                        var22 = var18.bind(var22)(var15);
                        var18 = {};
                        var18 = var25.bind(var9)(var18, var24, var22);
                        var18 = var20.bind(var21)(var18);
                    case 2029:
                        var22 = var11.Object;
                        var21 = var22.values;
                        var18 = var4;
                        var20 = var18.chatCompletionToolCalls;
                        var22 = var21.bind(var22)(var20);
                        var21 = new Array(0);
                        var20 = var21.concat;
                        var24 = _closure1_slot2;
                        var18 = var18.responsesApiToolCalls;
                        var18 = var24.bind(var9)(var18);
                        var18 = var20.bind(var21)(var22, var18);
                        var3 = var18;
                        var18 = var18.length;
                        if (!(var18 > var5)) {
                            _fun9921_ip = 2166;
                            continue _fun9921
                        }
                    case 2096:
                        var21 = var2;
                        var20 = var21.setAttributes;
                        var24 = _closure1_slot3;
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var18 = var18[var23];
                        var18 = var22.bind(var9)(var18);
                        var23 = var18.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var25 = var11.JSON;
                        var22 = var25.stringify;
                        var18 = var3;
                        var22 = var22.bind(var25)(var18);
                        var18 = {};
                        var18 = var24.bind(var9)(var18, var23, var22);
                        var18 = var20.bind(var21)(var18);
                    case 2166:
                        var20 = var2;
                        var18 = var20.end;
                        var18 = var18.bind(var20)();
                        return var14;
                    case 2181: // try_start_11
                        var14 = var1;
                        throw var14;
                    case 2186:
                        var14 = var7;
                        if (var14) {
                            _fun9921_ip = 2676;
                            continue _fun9921
                        }
                    case 2195: // try_end11
                        var22 = _closure1_slot0;
                        var18 = _closure1_slot1;
                        var14 = var18[var19];
                        var26 = var22.bind(var9)(var14);
                        var25 = var26.setCommonResponseAttributes;
                        var20 = var2;
                        var14 = var4;
                        var31 = var14.responseId;
                        var30 = var14.responseModel;
                        var29 = var14.responseTimestamp;
                        var33 = var26;
                        var32 = var20;
                        var21 = var33[var25](var32, var31, var30, var29, var28);
                        var19 = var18[var19];
                        var25 = var22.bind(var9)(var19);
                        var24 = var25.setTokenUsageAttributes;
                        var31 = var14.promptTokens;
                        var30 = var14.completionTokens;
                        var29 = var14.totalTokens;
                        var33 = var25;
                        var32 = var20;
                        var19 = var33[var24](var32, var31, var30, var29, var28);
                        var19 = var20.setAttributes;
                        var24 = _closure1_slot3;
                        var21 = 8;
                        var18 = var18[var21];
                        var18 = var22.bind(var9)(var18);
                        var23 = var18.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var22 = {};
                        var18 = true;
                        var18 = var24.bind(var9)(var22, var23, var18);
                        var18 = var19.bind(var20)(var18);
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun9921_ip = 2429;
                            continue _fun9921
                        }
                    case 2353:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var23 = _closure1_slot3;
                        var20 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var21];
                        var14 = var20.bind(var9)(var14);
                        var22 = var14.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var24 = var11.JSON;
                        var20 = var24.stringify;
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var20 = var20.bind(var24)(var14);
                        var14 = {};
                        var14 = var23.bind(var9)(var14, var22, var20);
                        var14 = var18.bind(var19)(var14);
                    case 2429:
                        var18 = var8;
                        var14 = var18;
                        if (!var18) {
                            _fun9921_ip = 2452;
                            continue _fun9921
                        }
                    case 2438:
                        var18 = var4;
                        var18 = var18.responseTexts;
                        var14 = var18.length;
                    case 2452:
                        if (!var14) {
                            _fun9921_ip = 2524;
                            continue _fun9921
                        }
                    case 2455:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var23 = _closure1_slot3;
                        var20 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var21];
                        var14 = var20.bind(var9)(var14);
                        var22 = var14.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var14 = var4;
                        var20 = var14.responseTexts;
                        var14 = var20.join;
                        var20 = var14.bind(var20)(var15);
                        var14 = {};
                        var14 = var23.bind(var9)(var14, var22, var20);
                        var14 = var18.bind(var19)(var14);
                    case 2524:
                        var20 = var11.Object;
                        var19 = var20.values;
                        var14 = var4;
                        var18 = var14.chatCompletionToolCalls;
                        var20 = var19.bind(var20)(var18);
                        var19 = new Array(0);
                        var18 = var19.concat;
                        var22 = _closure1_slot2;
                        var14 = var14.responsesApiToolCalls;
                        var14 = var22.bind(var9)(var14);
                        var14 = var18.bind(var19)(var20, var14);
                        var3 = var14;
                        var14 = var14.length;
                        if (!(var14 > var5)) {
                            _fun9921_ip = 2661;
                            continue _fun9921
                        }
                    case 2591:
                        var19 = var2;
                        var18 = var19.setAttributes;
                        var22 = _closure1_slot3;
                        var20 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var21];
                        var14 = var20.bind(var9)(var14);
                        var21 = var14.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var23 = var11.JSON;
                        var20 = var23.stringify;
                        var14 = var3;
                        var20 = var20.bind(var23)(var14);
                        var14 = {};
                        var14 = var22.bind(var9)(var14, var21, var20);
                        var14 = var18.bind(var19)(var14);
                    case 2661:
                        var18 = var2;
                        var14 = var18.end;
                        var14 = var14.bind(var18)();
                        return var10;
                    case 2676: // try_start_12
                        var10 = var1;
                        throw var10;
                    case 2681: // catch_target3
                        CatchBlockStart(arg_register = 10);
                        var14 = var7;
                        if (var14) {
                            _fun9921_ip = 2691;
                            continue _fun9921
                        }
                    case 2689:
                        throw var10;
                    case 2691:
                        var10 = var1;
                        throw var10;
                    case 2696: // try_start_4
                        var14 = var12;
                        var10 = var14;
                        if (!var14) {
                            _fun9921_ip = 2718;
                            continue _fun9921
                        }
                    case 2705:
                        var14 = var6;
                        var14 = var14.return;
                        var10 = var17 != var14;
                    case 2718:
                        if (!var10) {
                            _fun9921_ip = 2756;
                            continue _fun9921
                        }
                    case 2721:
                        var14 = _closure1_slot4;
                        var17 = var6;
                        var10 = var17.return;
                        var10 = var10.bind(var17)();
                        var10 = var14.bind(var9)(var10);
                        SaveGenerator(address = 2747);
                    case 2745:
                        return var10;
                    case 2747:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 14);
                        if (var14) {
                            _fun9921_ip = 3254;
                            continue _fun9921
                        }
                    case 2756: // try_end4
                        var14 = var7;
                        if (var14) {
                            _fun9921_ip = 3249;
                            continue _fun9921
                        }
                    case 2765: // try_end12
                        var21 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var18 = 7;
                        var14 = var17[var18];
                        var25 = var21.bind(var9)(var14);
                        var24 = var25.setCommonResponseAttributes;
                        var19 = var2;
                        var14 = var4;
                        var31 = var14.responseId;
                        var30 = var14.responseModel;
                        var29 = var14.responseTimestamp;
                        var33 = var25;
                        var32 = var19;
                        var20 = var33[var24](var32, var31, var30, var29, var28);
                        var18 = var17[var18];
                        var24 = var21.bind(var9)(var18);
                        var23 = var24.setTokenUsageAttributes;
                        var31 = var14.promptTokens;
                        var30 = var14.completionTokens;
                        var29 = var14.totalTokens;
                        var33 = var24;
                        var32 = var19;
                        var18 = var33[var23](var32, var31, var30, var29, var28);
                        var18 = var19.setAttributes;
                        var23 = _closure1_slot3;
                        var20 = 8;
                        var17 = var17[var20];
                        var17 = var21.bind(var9)(var17);
                        var22 = var17.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var21 = {};
                        var17 = true;
                        var17 = var23.bind(var9)(var21, var22, var17);
                        var17 = var18.bind(var19)(var17);
                        var14 = var14.finishReasons;
                        var14 = var14.length;
                        if (!var14) {
                            _fun9921_ip = 3002;
                            continue _fun9921
                        }
                    case 2926:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var22 = _closure1_slot3;
                        var19 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var20];
                        var14 = var19.bind(var9)(var14);
                        var21 = var14.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var23 = var11.JSON;
                        var19 = var23.stringify;
                        var14 = var4;
                        var14 = var14.finishReasons;
                        var19 = var19.bind(var23)(var14);
                        var14 = {};
                        var14 = var22.bind(var9)(var14, var21, var19);
                        var14 = var17.bind(var18)(var14);
                    case 3002:
                        var17 = var8;
                        var14 = var17;
                        if (!var17) {
                            _fun9921_ip = 3025;
                            continue _fun9921
                        }
                    case 3011:
                        var17 = var4;
                        var17 = var17.responseTexts;
                        var14 = var17.length;
                    case 3025:
                        if (!var14) {
                            _fun9921_ip = 3097;
                            continue _fun9921
                        }
                    case 3028:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var22 = _closure1_slot3;
                        var19 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var20];
                        var14 = var19.bind(var9)(var14);
                        var21 = var14.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var14 = var4;
                        var19 = var14.responseTexts;
                        var14 = var19.join;
                        var19 = var14.bind(var19)(var15);
                        var14 = {};
                        var14 = var22.bind(var9)(var14, var21, var19);
                        var14 = var17.bind(var18)(var14);
                    case 3097:
                        var19 = var11.Object;
                        var18 = var19.values;
                        var14 = var4;
                        var17 = var14.chatCompletionToolCalls;
                        var19 = var18.bind(var19)(var17);
                        var18 = new Array(0);
                        var17 = var18.concat;
                        var21 = _closure1_slot2;
                        var14 = var14.responsesApiToolCalls;
                        var14 = var21.bind(var9)(var14);
                        var14 = var17.bind(var18)(var19, var14);
                        var3 = var14;
                        var14 = var14.length;
                        if (!(var14 > var5)) {
                            _fun9921_ip = 3234;
                            continue _fun9921
                        }
                    case 3164:
                        var18 = var2;
                        var17 = var18.setAttributes;
                        var21 = _closure1_slot3;
                        var19 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var20];
                        var14 = var19.bind(var9)(var14);
                        var20 = var14.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var22 = var11.JSON;
                        var19 = var22.stringify;
                        var14 = var3;
                        var19 = var19.bind(var22)(var14);
                        var14 = {};
                        var14 = var21.bind(var9)(var14, var20, var19);
                        var14 = var17.bind(var18)(var14);
                    case 3234:
                        var17 = var2;
                        var14 = var17.end;
                        var14 = var14.bind(var17)();
                        return var13;
                    case 3249: // try_start_13
                        var13 = var1;
                        throw var13;
                    case 3254:
                        var13 = var7;
                        if (var13) {
                            _fun9921_ip = 3747;
                            continue _fun9921
                        }
                    case 3263: // try_end13
                        var20 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var17 = 7;
                        var13 = var14[var17];
                        var24 = var20.bind(var9)(var13);
                        var23 = var24.setCommonResponseAttributes;
                        var18 = var2;
                        var13 = var4;
                        var31 = var13.responseId;
                        var30 = var13.responseModel;
                        var29 = var13.responseTimestamp;
                        var33 = var24;
                        var32 = var18;
                        var19 = var33[var23](var32, var31, var30, var29, var28);
                        var17 = var14[var17];
                        var23 = var20.bind(var9)(var17);
                        var22 = var23.setTokenUsageAttributes;
                        var31 = var13.promptTokens;
                        var30 = var13.completionTokens;
                        var29 = var13.totalTokens;
                        var33 = var23;
                        var32 = var18;
                        var17 = var33[var22](var32, var31, var30, var29, var28);
                        var17 = var18.setAttributes;
                        var22 = _closure1_slot3;
                        var19 = 8;
                        var14 = var14[var19];
                        var14 = var20.bind(var9)(var14);
                        var21 = var14.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var20 = {};
                        var14 = true;
                        var14 = var22.bind(var9)(var20, var21, var14);
                        var14 = var17.bind(var18)(var14);
                        var13 = var13.finishReasons;
                        var13 = var13.length;
                        if (!var13) {
                            _fun9921_ip = 3500;
                            continue _fun9921
                        }
                    case 3424:
                        var17 = var2;
                        var14 = var17.setAttributes;
                        var21 = _closure1_slot3;
                        var18 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var19];
                        var13 = var18.bind(var9)(var13);
                        var20 = var13.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var22 = var11.JSON;
                        var18 = var22.stringify;
                        var13 = var4;
                        var13 = var13.finishReasons;
                        var18 = var18.bind(var22)(var13);
                        var13 = {};
                        var13 = var21.bind(var9)(var13, var20, var18);
                        var13 = var14.bind(var17)(var13);
                    case 3500:
                        var14 = var8;
                        var13 = var14;
                        if (!var14) {
                            _fun9921_ip = 3523;
                            continue _fun9921
                        }
                    case 3509:
                        var14 = var4;
                        var14 = var14.responseTexts;
                        var13 = var14.length;
                    case 3523:
                        if (!var13) {
                            _fun9921_ip = 3595;
                            continue _fun9921
                        }
                    case 3526:
                        var17 = var2;
                        var14 = var17.setAttributes;
                        var21 = _closure1_slot3;
                        var18 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var19];
                        var13 = var18.bind(var9)(var13);
                        var20 = var13.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var13 = var4;
                        var18 = var13.responseTexts;
                        var13 = var18.join;
                        var18 = var13.bind(var18)(var15);
                        var13 = {};
                        var13 = var21.bind(var9)(var13, var20, var18);
                        var13 = var14.bind(var17)(var13);
                    case 3595:
                        var18 = var11.Object;
                        var17 = var18.values;
                        var13 = var4;
                        var14 = var13.chatCompletionToolCalls;
                        var18 = var17.bind(var18)(var14);
                        var17 = new Array(0);
                        var14 = var17.concat;
                        var20 = _closure1_slot2;
                        var13 = var13.responsesApiToolCalls;
                        var13 = var20.bind(var9)(var13);
                        var13 = var14.bind(var17)(var18, var13);
                        var3 = var13;
                        var13 = var13.length;
                        if (!(var13 > var5)) {
                            _fun9921_ip = 3732;
                            continue _fun9921
                        }
                    case 3662:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var18 = _closure1_slot3;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var9)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var19 = var11.JSON;
                        var16 = var19.stringify;
                        var11 = var3;
                        var16 = var16.bind(var19)(var11);
                        var11 = {};
                        var11 = var18.bind(var9)(var11, var17, var16);
                        var11 = var13.bind(var14)(var11);
                    case 3732:
                        var13 = var2;
                        var11 = var13.end;
                        var11 = var11.bind(var13)();
                        return var10;
                    case 3747: // try_start_14
                        var10 = var1;
                        throw var10;
                    case 3752: // catch_target4
                        CatchBlockStart(arg_register = 10);
                        var11 = var7;
                        if (var11) {
                            _fun9921_ip = 3762;
                            continue _fun9921
                        }
                    case 3760:
                        throw var10;
                    case 3762:
                        var10 = var1;
                        throw var10;
                    case 3767: // try_start_5 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var7 = true;
                    case 3771: // try_start_6 // try_end5
                        var11 = var12;
                        var10 = var11;
                        if (!var11) {
                            _fun9921_ip = 3795;
                            continue _fun9921
                        }
                    case 3780:
                        var11 = var6;
                        var13 = var11.return;
                        var11 = null;
                        var10 = var11 != var13;
                    case 3795:
                        if (!var10) {
                            _fun9921_ip = 3836;
                            continue _fun9921
                        }
                    case 3798:
                        var11 = _closure1_slot4;
                        var13 = var6;
                        var10 = var13.return;
                        var10 = var10.bind(var13)();
                        var10 = var11.bind(var9)(var10);
                        SaveGenerator(address = 3827);
                    case 3825:
                        return var10;
                    case 3827:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun9921_ip = 4341;
                            continue _fun9921
                        }
                    case 3836: // try_end6
                        var11 = var7;
                        if (var11) {
                            _fun9921_ip = 4336;
                            continue _fun9921
                        }
                    case 3845: // try_end14
                        var19 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var14 = 7;
                        var11 = var13[var14];
                        var24 = var19.bind(var9)(var11);
                        var23 = var24.setCommonResponseAttributes;
                        var18 = var2;
                        var11 = var4;
                        var31 = var11.responseId;
                        var30 = var11.responseModel;
                        var29 = var11.responseTimestamp;
                        var33 = var24;
                        var32 = var18;
                        var20 = var33[var23](var32, var31, var30, var29, var28);
                        var14 = var13[var14];
                        var23 = var19.bind(var9)(var14);
                        var22 = var23.setTokenUsageAttributes;
                        var31 = var11.promptTokens;
                        var30 = var11.completionTokens;
                        var29 = var11.totalTokens;
                        var33 = var23;
                        var32 = var18;
                        var14 = var33[var22](var32, var31, var30, var29, var28);
                        var14 = var18.setAttributes;
                        var22 = _closure1_slot3;
                        var20 = 8;
                        var13 = var13[var20];
                        var13 = var19.bind(var9)(var13);
                        var21 = var13.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var19 = {};
                        var13 = true;
                        var13 = var22.bind(var9)(var19, var21, var13);
                        var13 = var14.bind(var18)(var13);
                        var11 = var11.finishReasons;
                        var11 = var11.length;
                        if (!var11) {
                            _fun9921_ip = 4087;
                            continue _fun9921
                        }
                    case 4009:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var21 = _closure1_slot3;
                        var18 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var20];
                        var11 = var18.bind(var9)(var11);
                        var19 = var11.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var11 = global;
                        var22 = var11.JSON;
                        var18 = var22.stringify;
                        var11 = var4;
                        var11 = var11.finishReasons;
                        var18 = var18.bind(var22)(var11);
                        var11 = {};
                        var11 = var21.bind(var9)(var11, var19, var18);
                        var11 = var13.bind(var14)(var11);
                    case 4087:
                        var13 = var8;
                        var11 = var13;
                        if (!var13) {
                            _fun9921_ip = 4110;
                            continue _fun9921
                        }
                    case 4096:
                        var13 = var4;
                        var13 = var13.responseTexts;
                        var11 = var13.length;
                    case 4110:
                        if (!var11) {
                            _fun9921_ip = 4182;
                            continue _fun9921
                        }
                    case 4113:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var21 = _closure1_slot3;
                        var18 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var20];
                        var11 = var18.bind(var9)(var11);
                        var19 = var11.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var11 = var4;
                        var18 = var11.responseTexts;
                        var11 = var18.join;
                        var18 = var11.bind(var18)(var15);
                        var11 = {};
                        var11 = var21.bind(var9)(var11, var19, var18);
                        var11 = var13.bind(var14)(var11);
                    case 4182:
                        var11 = global;
                        var19 = var11.Object;
                        var18 = var19.values;
                        var13 = var4;
                        var14 = var13.chatCompletionToolCalls;
                        var19 = var18.bind(var19)(var14);
                        var18 = new Array(0);
                        var14 = var18.concat;
                        var21 = _closure1_slot2;
                        var13 = var13.responsesApiToolCalls;
                        var13 = var21.bind(var9)(var13);
                        var13 = var14.bind(var18)(var19, var13);
                        var3 = var13;
                        var13 = var13.length;
                        if (!(var13 > var5)) {
                            _fun9921_ip = 4321;
                            continue _fun9921
                        }
                    case 4251:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var19 = _closure1_slot3;
                        var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var20];
                        var17 = var18.bind(var9)(var17);
                        var18 = var17.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var20 = var11.JSON;
                        var17 = var20.stringify;
                        var11 = var3;
                        var17 = var17.bind(var20)(var11);
                        var11 = {};
                        var11 = var19.bind(var9)(var11, var18, var17);
                        var11 = var13.bind(var14)(var11);
                    case 4321:
                        var13 = var2;
                        var11 = var13.end;
                        var11 = var11.bind(var13)();
                        return var9;
                    case 4336: // try_start_15
                        var11 = var1;
                        throw var11;
                    case 4341:
                        var11 = var7;
                        if (var11) {
                            _fun9921_ip = 4838;
                            continue _fun9921
                        }
                    case 4350: // try_end15
                        var18 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var14 = 7;
                        var11 = var13[var14];
                        var23 = var18.bind(var9)(var11);
                        var22 = var23.setCommonResponseAttributes;
                        var17 = var2;
                        var11 = var4;
                        var31 = var11.responseId;
                        var30 = var11.responseModel;
                        var29 = var11.responseTimestamp;
                        var33 = var23;
                        var32 = var17;
                        var19 = var33[var22](var32, var31, var30, var29, var28);
                        var14 = var13[var14];
                        var22 = var18.bind(var9)(var14);
                        var21 = var22.setTokenUsageAttributes;
                        var31 = var11.promptTokens;
                        var30 = var11.completionTokens;
                        var29 = var11.totalTokens;
                        var33 = var22;
                        var32 = var17;
                        var14 = var33[var21](var32, var31, var30, var29, var28);
                        var14 = var17.setAttributes;
                        var21 = _closure1_slot3;
                        var19 = 8;
                        var13 = var13[var19];
                        var13 = var18.bind(var9)(var13);
                        var20 = var13.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var18 = {};
                        var13 = true;
                        var13 = var21.bind(var9)(var18, var20, var13);
                        var13 = var14.bind(var17)(var13);
                        var11 = var11.finishReasons;
                        var11 = var11.length;
                        if (!var11) {
                            _fun9921_ip = 4589;
                            continue _fun9921
                        }
                    case 4511:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var20 = _closure1_slot3;
                        var17 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var19];
                        var11 = var17.bind(var9)(var11);
                        var18 = var11.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var11 = global;
                        var21 = var11.JSON;
                        var17 = var21.stringify;
                        var11 = var4;
                        var11 = var11.finishReasons;
                        var17 = var17.bind(var21)(var11);
                        var11 = {};
                        var11 = var20.bind(var9)(var11, var18, var17);
                        var11 = var13.bind(var14)(var11);
                    case 4589:
                        var13 = var8;
                        var11 = var13;
                        if (!var13) {
                            _fun9921_ip = 4612;
                            continue _fun9921
                        }
                    case 4598:
                        var13 = var4;
                        var13 = var13.responseTexts;
                        var11 = var13.length;
                    case 4612:
                        if (!var11) {
                            _fun9921_ip = 4684;
                            continue _fun9921
                        }
                    case 4615:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var20 = _closure1_slot3;
                        var17 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var11 = var11[var19];
                        var11 = var17.bind(var9)(var11);
                        var18 = var11.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var11 = var4;
                        var17 = var11.responseTexts;
                        var11 = var17.join;
                        var17 = var11.bind(var17)(var15);
                        var11 = {};
                        var11 = var20.bind(var9)(var11, var18, var17);
                        var11 = var13.bind(var14)(var11);
                    case 4684:
                        var11 = global;
                        var18 = var11.Object;
                        var17 = var18.values;
                        var13 = var4;
                        var14 = var13.chatCompletionToolCalls;
                        var18 = var17.bind(var18)(var14);
                        var17 = new Array(0);
                        var14 = var17.concat;
                        var20 = _closure1_slot2;
                        var13 = var13.responsesApiToolCalls;
                        var13 = var20.bind(var9)(var13);
                        var13 = var14.bind(var17)(var18, var13);
                        var3 = var13;
                        var13 = var13.length;
                        if (!(var13 > var5)) {
                            _fun9921_ip = 4823;
                            continue _fun9921
                        }
                    case 4753:
                        var14 = var2;
                        var13 = var14.setAttributes;
                        var18 = _closure1_slot3;
                        var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var19];
                        var16 = var17.bind(var9)(var16);
                        var17 = var16.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var19 = var11.JSON;
                        var16 = var19.stringify;
                        var11 = var3;
                        var16 = var16.bind(var19)(var11);
                        var11 = {};
                        var11 = var18.bind(var9)(var11, var17, var16);
                        var11 = var13.bind(var14)(var11);
                    case 4823:
                        var13 = var2;
                        var11 = var13.end;
                        var11 = var11.bind(var13)();
                        return var10;
                    case 4838: // try_start_16
                        var10 = var1;
                        throw var10;
                    case 4843: // catch_target6
                        CatchBlockStart(arg_register = 10);
                        var11 = var7;
                        if (var11) {
                            _fun9921_ip = 4853;
                            continue _fun9921
                        }
                    case 4851:
                        throw var10;
                    case 4853:
                        var10 = var1;
                        throw var10;
                    case 4858: // catch_target1 // catch_target5
                        CatchBlockStart(arg_register = 10);
                    case 4860: // try_start_7
                        var11 = var12;
                        if (!var12) {
                            _fun9921_ip = 4881;
                            continue _fun9921
                        }
                    case 4866:
                        var12 = var6;
                        var13 = var12.return;
                        var12 = null;
                        var11 = var12 != var13;
                    case 4881:
                        if (!var11) {
                            _fun9921_ip = 4919;
                            continue _fun9921
                        }
                    case 4884:
                        var11 = _closure1_slot4;
                        var12 = var6;
                        var6 = var12.return;
                        var6 = var6.bind(var12)();
                        var6 = var11.bind(var9)(var6);
                        SaveGenerator(address = 4913);
                    case 4911:
                        return var6;
                    case 4913:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 11);
                        if (var11) {
                            _fun9921_ip = 4932;
                            continue _fun9921
                        }
                    case 4919: // try_end7
                        var11 = var7;
                        if (var11) {
                            _fun9921_ip = 4927;
                            continue _fun9921
                        }
                    case 4925:
                        throw var10;
                    case 4927:
                        var10 = var1;
                        throw var10;
                    case 4932:
                        var10 = var7;
                        if (var10) {
                            _fun9921_ip = 5429;
                            continue _fun9921
                        }
                    case 4941: // try_end16
                        var16 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var12 = 7;
                        var10 = var11[var12];
                        var21 = var16.bind(var9)(var10);
                        var20 = var21.setCommonResponseAttributes;
                        var14 = var2;
                        var10 = var4;
                        var31 = var10.responseId;
                        var30 = var10.responseModel;
                        var29 = var10.responseTimestamp;
                        var33 = var21;
                        var32 = var14;
                        var17 = var33[var20](var32, var31, var30, var29, var28);
                        var12 = var11[var12];
                        var20 = var16.bind(var9)(var12);
                        var19 = var20.setTokenUsageAttributes;
                        var31 = var10.promptTokens;
                        var30 = var10.completionTokens;
                        var29 = var10.totalTokens;
                        var33 = var20;
                        var32 = var14;
                        var12 = var33[var19](var32, var31, var30, var29, var28);
                        var12 = var14.setAttributes;
                        var19 = _closure1_slot3;
                        var17 = 8;
                        var11 = var11[var17];
                        var11 = var16.bind(var9)(var11);
                        var18 = var11.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var16 = {};
                        var11 = true;
                        var11 = var19.bind(var9)(var16, var18, var11);
                        var11 = var12.bind(var14)(var11);
                        var10 = var10.finishReasons;
                        var10 = var10.length;
                        if (!var10) {
                            _fun9921_ip = 5180;
                            continue _fun9921
                        }
                    case 5102:
                        var12 = var2;
                        var11 = var12.setAttributes;
                        var18 = _closure1_slot3;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var17];
                        var10 = var14.bind(var9)(var10);
                        var16 = var10.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var10 = global;
                        var19 = var10.JSON;
                        var14 = var19.stringify;
                        var10 = var4;
                        var10 = var10.finishReasons;
                        var14 = var14.bind(var19)(var10);
                        var10 = {};
                        var10 = var18.bind(var9)(var10, var16, var14);
                        var10 = var11.bind(var12)(var10);
                    case 5180:
                        var11 = var8;
                        var10 = var11;
                        if (!var11) {
                            _fun9921_ip = 5203;
                            continue _fun9921
                        }
                    case 5189:
                        var11 = var4;
                        var11 = var11.responseTexts;
                        var10 = var11.length;
                    case 5203:
                        if (!var10) {
                            _fun9921_ip = 5275;
                            continue _fun9921
                        }
                    case 5206:
                        var12 = var2;
                        var11 = var12.setAttributes;
                        var18 = _closure1_slot3;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var17];
                        var10 = var14.bind(var9)(var10);
                        var16 = var10.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var10 = var4;
                        var14 = var10.responseTexts;
                        var10 = var14.join;
                        var14 = var10.bind(var14)(var15);
                        var10 = {};
                        var10 = var18.bind(var9)(var10, var16, var14);
                        var10 = var11.bind(var12)(var10);
                    case 5275:
                        var10 = global;
                        var16 = var10.Object;
                        var14 = var16.values;
                        var11 = var4;
                        var12 = var11.chatCompletionToolCalls;
                        var16 = var14.bind(var16)(var12);
                        var14 = new Array(0);
                        var12 = var14.concat;
                        var18 = _closure1_slot2;
                        var11 = var11.responsesApiToolCalls;
                        var11 = var18.bind(var9)(var11);
                        var11 = var12.bind(var14)(var16, var11);
                        var3 = var11;
                        var11 = var11.length;
                        if (!(var11 > var5)) {
                            _fun9921_ip = 5414;
                            continue _fun9921
                        }
                    case 5344:
                        var12 = var2;
                        var11 = var12.setAttributes;
                        var16 = _closure1_slot3;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var17];
                        var13 = var14.bind(var9)(var13);
                        var14 = var13.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var17 = var10.JSON;
                        var13 = var17.stringify;
                        var10 = var3;
                        var13 = var13.bind(var17)(var10);
                        var10 = {};
                        var10 = var16.bind(var9)(var10, var14, var13);
                        var10 = var11.bind(var12)(var10);
                    case 5414:
                        var11 = var2;
                        var10 = var11.end;
                        var10 = var10.bind(var11)();
                        return var6;
                    case 5429: // try_start_17
                        var6 = var1;
                        throw var6;
                    case 5434: // catch_target7
                        CatchBlockStart(arg_register = 6);
                        if (var7) {
                            _fun9921_ip = 5441;
                            continue _fun9921
                        }
                    case 5439:
                        throw var6;
                    case 5441:
                        throw var1;
                    case 5443: // try_end17 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15 // catch_target16 // catch_target17
                        CatchBlockStart(arg_register = 1);
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var11 = 7;
                        var6 = var10[var11];
                        var19 = var14.bind(var9)(var6);
                        var18 = var19.setCommonResponseAttributes;
                        var13 = var2;
                        var6 = var4;
                        var31 = var6.responseId;
                        var30 = var6.responseModel;
                        var29 = var6.responseTimestamp;
                        var33 = var19;
                        var32 = var13;
                        var12 = var33[var18](var32, var31, var30, var29, var28);
                        var11 = var10[var11];
                        var18 = var14.bind(var9)(var11);
                        var17 = var18.setTokenUsageAttributes;
                        var31 = var6.promptTokens;
                        var30 = var6.completionTokens;
                        var29 = var6.totalTokens;
                        var33 = var18;
                        var32 = var13;
                        var11 = var33[var17](var32, var31, var30, var29, var28);
                        var12 = var13.setAttributes;
                        var17 = _closure1_slot3;
                        var11 = 8;
                        var10 = var10[var11];
                        var10 = var14.bind(var9)(var10);
                        var16 = var10.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE;
                        var14 = {};
                        var10 = true;
                        var10 = var17.bind(var9)(var14, var16, var10);
                        var10 = var12.bind(var13)(var10);
                        var6 = var6.finishReasons;
                        var6 = var6.length;
                        if (!var6) {
                            _fun9921_ip = 5687;
                            continue _fun9921
                        }
                    case 5609:
                        var12 = var2;
                        var10 = var12.setAttributes;
                        var16 = _closure1_slot3;
                        var13 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var11];
                        var6 = var13.bind(var9)(var6);
                        var14 = var6.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                        var6 = global;
                        var17 = var6.JSON;
                        var13 = var17.stringify;
                        var6 = var4;
                        var6 = var6.finishReasons;
                        var13 = var13.bind(var17)(var6);
                        var6 = {};
                        var6 = var16.bind(var9)(var6, var14, var13);
                        var6 = var10.bind(var12)(var6);
                    case 5687:
                        var6 = var8;
                        if (!var8) {
                            _fun9921_ip = 5707;
                            continue _fun9921
                        }
                    case 5693:
                        var8 = var4;
                        var8 = var8.responseTexts;
                        var6 = var8.length;
                    case 5707:
                        if (!var6) {
                            _fun9921_ip = 5779;
                            continue _fun9921
                        }
                    case 5710:
                        var10 = var2;
                        var8 = var10.setAttributes;
                        var14 = _closure1_slot3;
                        var12 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var11];
                        var6 = var12.bind(var9)(var6);
                        var13 = var6.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                        var6 = var4;
                        var12 = var6.responseTexts;
                        var6 = var12.join;
                        var12 = var6.bind(var12)(var15);
                        var6 = {};
                        var6 = var14.bind(var9)(var6, var13, var12);
                        var6 = var8.bind(var10)(var6);
                    case 5779:
                        var6 = global;
                        var12 = var6.Object;
                        var10 = var12.values;
                        var8 = var4.chatCompletionToolCalls;
                        var12 = var10.bind(var12)(var8);
                        var10 = new Array(0);
                        var8 = var10.concat;
                        var13 = _closure1_slot2;
                        var4 = var4.responsesApiToolCalls;
                        var4 = var13.bind(var9)(var4);
                        var4 = var8.bind(var10)(var12, var4);
                        var3 = var4;
                        var4 = var4.length;
                        if (!(var4 > var5)) {
                            _fun9921_ip = 5912;
                            continue _fun9921
                        }
                    case 5845:
                        var5 = var2;
                        var4 = var5.setAttributes;
                        var8 = _closure1_slot3;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var11];
                        var7 = var10.bind(var9)(var7);
                        var7 = var7.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                        var10 = var6.JSON;
                        var6 = var10.stringify;
                        var6 = var6.bind(var10)(var3);
                        var3 = {};
                        var3 = var8.bind(var9)(var3, var7, var6);
                        var3 = var4.bind(var5)(var3);
                    case 5912:
                        var3 = var2;
                        var2 = var3.end;
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 5926:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.instrumentStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 77, 963, 965, 839, 867, 961, 960, 955]);