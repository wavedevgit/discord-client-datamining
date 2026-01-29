// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: addPrivateRequestAttributes, environment: var1
        _fun9942: for (var _fun9942_ip = 0;;) switch (_fun9942_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = 'messages';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9942_ip = 101;
                    continue _fun9942
                }
            case 17:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var3 = var8[var3];
                var7 = undefined;
                var6 = var4.bind(var7)(var3);
                var5 = var6.getTruncatedJsonString;
                var3 = var0.messages;
                var6 = var5.bind(var6)(var3);
                var3 = var2.setAttributes;
                var5 = _closure1_slot3;
                var1 = 2;
                var1 = var8[var1];
                var1 = var4.bind(var7)(var1);
                var4 = var1.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var1 = {};
                var1 = var5.bind(var7)(var1, var4, var6);
                var1 = var3.bind(var2)(var1);
            case 101:
                var1 = 'input';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9942_ip = 196;
                    continue _fun9942
                }
            case 112:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var3 = var8[var3];
                var7 = undefined;
                var6 = var4.bind(var7)(var3);
                var5 = var6.getTruncatedJsonString;
                var3 = var0.input;
                var6 = var5.bind(var6)(var3);
                var3 = var2.setAttributes;
                var5 = _closure1_slot3;
                var1 = 2;
                var1 = var8[var1];
                var1 = var4.bind(var7)(var1);
                var4 = var1.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var1 = {};
                var1 = var5.bind(var7)(var1, var4, var6);
                var1 = var3.bind(var2)(var1);
            case 196:
                var1 = 'prompt';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9942_ip = 287;
                    continue _fun9942
                }
            case 207:
                var1 = var2.setAttributes;
                var6 = _closure1_slot3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var4 = var3.GEN_AI_PROMPT_ATTRIBUTE;
                var3 = global;
                var7 = var3.JSON;
                var3 = var7.stringify;
                var0 = var0.prompt;
                var3 = var3.bind(var7)(var0);
                var0 = {};
                var0 = var6.bind(var5)(var0, var4, var3);
                var0 = var1.bind(var2)(var0);
            case 287:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: addResponseAttributes, environment: var1
        _fun9943: for (var _fun9943_ip = 0;;) switch (_fun9943_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var0 = var2;
                if (!var0) {
                    _fun9943_ip = 23;
                    continue _fun9943
                }
            case 12:
                var4 = 'object';
                var1 = typeof var2;
                var0 = var4 === var1;
            case 23:
                if (!var0) {
                    _fun9943_ip = 600;
                    continue _fun9943
                }
            case 29:
                var0 = 'type';
                var0 = var0 in var2;
                if (!var0) {
                    _fun9943_ip = 56;
                    continue _fun9943
                }
            case 40:
                var1 = var2.type;
                var0 = 'error';
                if (!(var0 !== var1)) {
                    _fun9943_ip = 563;
                    continue _fun9943
                }
            case 56:
                var0 = arg2;
                if (!var0) {
                    _fun9943_ip = 77;
                    continue _fun9943
                }
            case 62:
                var1 = function(arg0, arg1) { // Original name: addContentAttributes, environment: var0
                    _fun9944: for (var _fun9944_ip = 0;;) switch (_fun9944_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg1;
                            var0 = undefined;
                            var2 = undefined;
                            var11 = undefined;
                            var5 = 'content';
                            var5 = var5 in var1;
                            if (!var5) {
                                _fun9944_ip = 333;
                                continue _fun9944
                            }
                        case 28:
                            var5 = global;
                            var8 = var5.Array;
                            var7 = var8.isArray;
                            var6 = var1.content;
                            var6 = var7.bind(var8)(var6);
                            if (!var6) {
                                _fun9944_ip = 333;
                                continue _fun9944
                            }
                        case 57:
                            var7 = var3.setAttributes;
                            var12 = _closure1_slot3;
                            var10 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var9 = 2;
                            var8 = var8[var9];
                            var8 = var10.bind(var0)(var8);
                            var10 = var8.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                            var14 = var1.content;
                            var13 = var14.map;
                            var8 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var0 = var0.text;
                                return var0;
                            };
                            var13 = var13.bind(var14)(var8);
                            var8 = var13.filter;
                            var4 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var0 = !var0;
                                var0 = !var0;
                                return var0;
                            };
                            var13 = var8.bind(var13)(var4);
                            var8 = var13.join;
                            var4 = '';
                            var8 = var8.bind(var13)(var4);
                            var4 = {};
                            var4 = var12.bind(var0)(var4, var10, var8);
                            var4 = var7.bind(var3)(var4);
                            var2 = new Array(0);
                            var4 = var1.content;
                            var10 = var4;
                            var7 = var10[Symbol.iterator];
                            var10 = var7().next;
                            var8 = 'server_tool_use';
                            var4 = 'tool_use';
                        case 186:
                            var13 = var10().value;
                            var12 = var7;
                            if (!(var12 !== var0)) {
                                _fun9944_ip = 255;
                                continue _fun9944
                            }
                        case 197: // try_start_0
                            var11 = var13;
                            var13 = var13.type;
                            var13 = var4 !== var13;
                            var12 = var13;
                            if (!var13) {
                                _fun9944_ip = 227;
                                continue _fun9944
                            }
                        case 215:
                            var13 = var11;
                            var13 = var13.type;
                            var12 = var8 !== var13;
                        case 227:
                            if (var12) {
                                _fun9944_ip = 246;
                                continue _fun9944
                            }
                        case 230:
                            var14 = var2;
                            var13 = var14.push;
                            var12 = var11;
                            var12 = var13.bind(var14)(var12);
                        case 246: // try_end0
                            _fun9944_ip = 186;
                            continue _fun9944;
                        case 248: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var7.return();
                            throw var4;
                        case 255:
                            var4 = var2;
                            var7 = var4.length;
                            var4 = 0;
                            if (!(var7 > var4)) {
                                _fun9944_ip = 333;
                                continue _fun9944
                            }
                        case 269:
                            var4 = var3.setAttributes;
                            var7 = _closure1_slot3;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var6 = var6[var9];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                            var8 = var5.JSON;
                            var5 = var8.stringify;
                            var5 = var5.bind(var8)(var2);
                            var2 = {};
                            var2 = var7.bind(var0)(var2, var6, var5);
                            var2 = var4.bind(var3)(var2);
                        case 333:
                            var2 = 'completion';
                            var2 = var2 in var1;
                            if (!var2) {
                                _fun9944_ip = 403;
                                continue _fun9944
                            }
                        case 344:
                            var4 = var3.setAttributes;
                            var7 = _closure1_slot3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 2;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var6 = var2.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                            var5 = var1.completion;
                            var2 = {};
                            var2 = var7.bind(var0)(var2, var6, var5);
                            var2 = var4.bind(var3)(var2);
                        case 403:
                            var2 = 'input_tokens';
                            var2 = var2 in var1;
                            if (!var2) {
                                _fun9944_ip = 492;
                                continue _fun9944
                            }
                        case 414:
                            var2 = var3.setAttributes;
                            var6 = _closure1_slot3;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var4 = 2;
                            var4 = var7[var4];
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                            var4 = global;
                            var7 = var4.JSON;
                            var4 = var7.stringify;
                            var1 = var1.input_tokens;
                            var4 = var4.bind(var7)(var1);
                            var1 = {};
                            var1 = var6.bind(var0)(var1, var5, var4);
                            var1 = var2.bind(var3)(var1);
                        case 492:
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
            case 77:
                var0 = 'id';
                var0 = var0 in var2;
                if (!var0) {
                    _fun9943_ip = 96;
                    continue _fun9943
                }
            case 88:
                var1 = 'model';
                var0 = var1 in var2;
            case 96:
                if (!var0) {
                    _fun9943_ip = 600;
                    continue _fun9943
                }
            case 102:
                var5 = var3.setAttributes;
                var9 = _closure1_slot3;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 2;
                var8 = var1[var7];
                var4 = undefined;
                var8 = var6.bind(var4)(var8);
                var11 = var8.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                var10 = var2.id;
                var8 = {};
                var8 = var9.bind(var4)(var8, var11, var10);
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var6 = var1.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var1 = var2.model;
                var1 = var9.bind(var4)(var8, var6, var1);
                var1 = var5.bind(var3)(var1);
                var1 = 'created';
                var1 = var1 in var2;
                if (!var1) {
                    _fun9943_ip = 218;
                    continue _fun9943
                }
            case 201:
                var5 = var2.created;
                var6 = 'number';
                var5 = typeof var5;
                var1 = var6 === var5;
            case 218:
                if (!var1) {
                    _fun9943_ip = 322;
                    continue _fun9943
                }
            case 221:
                var5 = var3.setAttributes;
                var9 = _closure1_slot3;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var8 = var1.ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
                var1 = global;
                var10 = var1.Date;
                var6 = var2.created;
                var1 = 1000;
                var16 = var1 * var6;
                var6 = var10.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var10
                    }
                });
                var17 = var6;
                var1 = new var17[var10](var16, var15);
                var6 = var1 instanceof Object ? var1 : var6;
                var1 = var6.toISOString;
                var6 = var1.bind(var6)();
                var1 = {};
                var1 = var9.bind(var4)(var1, var8, var6);
                var1 = var5.bind(var3)(var1);
            case 322:
                var1 = 'created_at';
                var1 = var1 in var2;
                if (!var1) {
                    _fun9943_ip = 350;
                    continue _fun9943
                }
            case 333:
                var5 = var2.created_at;
                var6 = 'number';
                var5 = typeof var5;
                var1 = var6 === var5;
            case 350:
                if (!var1) {
                    _fun9943_ip = 454;
                    continue _fun9943
                }
            case 353:
                var5 = var3.setAttributes;
                var8 = _closure1_slot3;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var7 = var1.ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
                var1 = global;
                var9 = var1.Date;
                var6 = var2.created_at;
                var1 = 1000;
                var16 = var1 * var6;
                var6 = var9.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var9
                    }
                });
                var17 = var6;
                var1 = new var17[var9](var16, var15);
                var6 = var1 instanceof Object ? var1 : var6;
                var1 = var6.toISOString;
                var6 = var1.bind(var6)();
                var1 = {};
                var1 = var8.bind(var4)(var1, var7, var6);
                var1 = var5.bind(var3)(var1);
            case 454:
                var1 = 'usage';
                var1 = var1 in var2;
                if (!var1) {
                    _fun9943_ip = 471;
                    continue _fun9943
                }
            case 465:
                var1 = var2.usage;
            case 471:
                if (!var1) {
                    _fun9943_ip = 600;
                    continue _fun9943
                }
            case 477:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var7 = var1.bind(var4)(var0);
                var6 = var7.setTokenUsageAttributes;
                var0 = var2.usage;
                var15 = var0.input_tokens;
                var0 = var2.usage;
                var14 = var0.output_tokens;
                var0 = var2.usage;
                var13 = var0.cache_creation_input_tokens;
                var0 = var2.usage;
                var12 = var0.cache_read_input_tokens;
                var17 = var7;
                var16 = var3;
                var0 = var17[var6](var16, var15, var14, var13, var12, var11);
                _fun9943_ip = 600;
                continue _fun9943;
            case 563:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.handleResponseError;
                var0 = var0.bind(var1)(var3, var2);
            case 600:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: handleStreamingError, environment: var1
        _fun9947: for (var _fun9947_ip = 0;;) switch (_fun9947_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var1 = var5[var1];
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var3 = var5.captureException;
                var1 = {};
                var7 = {
                    'handled': false,
                    'type': 'auto.ai.anthropic'
                };
                var8 = {};
                var9 = arg2;
                var8.function = var9;
                var7.data = var8;
                var1.mechanism = var7;
                var1 = var3.bind(var5)(var0, var1);
                var1 = var2.isRecording;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun9947_ip = 149;
                    continue _fun9947
                }
            case 87:
                var3 = var2.setStatus;
                var1 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.SPAN_STATUS_ERROR;
                var1.code = var4;
                var4 = 'internal_error';
                var1.message = var4;
                var1 = var3.bind(var2)(var1);
                var1 = var2.end;
                var1 = var1.bind(var2)();
            case 149:
                throw var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: instrumentMethod, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = arg3;
        var _closure2_slot3 = var0;
        var0 = global;
        var2 = var0.Proxy;
        var0 = {};
        var1 = function(arg0, arg1, arg2) { // Original name: apply, environment: var1
            _fun9949: for (var _fun9949_ip = 0;;) switch (_fun9949_ip) {
                case 0:
                    var13 = arg0;
                    var12 = arg2;
                    var _closure3_slot0 = var13;
                    var _closure3_slot1 = var12;
                    var9 = _closure2_slot1;
                    var7 = _closure1_slot3;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 2;
                    var3 = var8[var6];
                    var11 = undefined;
                    var3 = var4.bind(var11)(var3);
                    var10 = var3.GEN_AI_SYSTEM_ATTRIBUTE;
                    var5 = {};
                    var3 = 'anthropic';
                    var10 = var7.bind(var11)(var5, var10, var3);
                    var3 = var8[var6];
                    var3 = var4.bind(var11)(var3);
                    var5 = var3.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                    var15 = 3;
                    var3 = var8[var15];
                    var14 = var4.bind(var11)(var3);
                    var3 = var14.getFinalOperationName;
                    var3 = var3.bind(var14)(var9);
                    var5 = var7.bind(var11)(var10, var5, var3);
                    var3 = 4;
                    var3 = var8[var3];
                    var3 = var4.bind(var11)(var3);
                    var4 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var3 = 'auto.ai.anthropic';
                    var10 = var7.bind(var11)(var5, var4, var3);
                    var3 = var12.length;
                    var4 = 0;
                    if (!(var3 > var4)) {
                        _fun9949_ip = 183;
                        continue _fun9949
                    }
                case 158:
                    var3 = var12[var4];
                    var5 = 'object';
                    var3 = typeof var3;
                    if (!(var5 === var3)) {
                        _fun9949_ip = 183;
                        continue _fun9949
                    }
                case 173:
                    var3 = var12[var4];
                    var5 = null;
                    if (!(var5 === var3)) {
                        _fun9949_ip = 243;
                        continue _fun9949
                    }
                case 183:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var3 = var7.bind(var11)(var3);
                    var7 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var3 = 'models.retrieve';
                    if (!(var3 !== var9)) {
                        _fun9949_ip = 230;
                        continue _fun9949
                    }
                case 216:
                    var3 = 'unknown';
                    var8 = 'models.get';
                    if (!(var8 === var9)) {
                        _fun9949_ip = 234;
                        continue _fun9949
                    }
                case 230:
                    var3 = var12[var4];
                case 234:
                    var10[var7] = var3;
                    _fun9949_ip = 646;
                    continue _fun9949;
                case 243:
                    var3 = var12[var4];
                    var7 = var3.tools;
                    if (!var7) {
                        _fun9949_ip = 280;
                        continue _fun9949
                    }
                case 256:
                    var8 = global;
                    var14 = var8.Array;
                    var9 = var14.isArray;
                    var8 = var3.tools;
                    var7 = var9.bind(var14)(var8);
                case 280:
                    if (!var7) {
                        _fun9949_ip = 335;
                        continue _fun9949
                    }
                case 283:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var11)(var7);
                    var8 = var7.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE;
                    var7 = global;
                    var14 = var7.JSON;
                    var9 = var14.stringify;
                    var7 = var3.tools;
                    var7 = var9.bind(var14)(var7);
                    var10[var8] = var7;
                case 335:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var6];
                    var7 = var8.bind(var11)(var7);
                    var7 = var7.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var8 = var3.model;
                    var9 = var5 != var8;
                    var5 = 'unknown';
                    if (!var9) {
                        _fun9949_ip = 378;
                        continue _fun9949
                    }
                case 375:
                    var5 = var8;
                case 378:
                    var10[var7] = var5;
                    var5 = 'temperature';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 426;
                        continue _fun9949
                    }
                case 393:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var7 = var5.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE;
                    var5 = var3.temperature;
                    var10[var7] = var5;
                case 426:
                    var5 = 'top_p';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 470;
                        continue _fun9949
                    }
                case 437:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var7 = var5.GEN_AI_REQUEST_TOP_P_ATTRIBUTE;
                    var5 = var3.top_p;
                    var10[var7] = var5;
                case 470:
                    var5 = 'stream';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 514;
                        continue _fun9949
                    }
                case 481:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var7 = var5.GEN_AI_REQUEST_STREAM_ATTRIBUTE;
                    var5 = var3.stream;
                    var10[var7] = var5;
                case 514:
                    var5 = 'top_k';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 558;
                        continue _fun9949
                    }
                case 525:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var7 = var5.GEN_AI_REQUEST_TOP_K_ATTRIBUTE;
                    var5 = var3.top_k;
                    var10[var7] = var5;
                case 558:
                    var5 = 'frequency_penalty';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 602;
                        continue _fun9949
                    }
                case 569:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var7 = var5.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE;
                    var5 = var3.frequency_penalty;
                    var10[var7] = var5;
                case 602:
                    var5 = 'max_tokens';
                    var5 = var5 in var3;
                    if (!var5) {
                        _fun9949_ip = 646;
                        continue _fun9949
                    }
                case 613:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var11)(var5);
                    var5 = var5.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE;
                    var3 = var3.max_tokens;
                    var10[var5] = var3;
                case 646:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var3 = var5.bind(var11)(var3);
                    var3 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var5 = var10[var3];
                    var3 = null;
                    var6 = var3 != var5;
                    var19 = 'unknown';
                    if (!var6) {
                        _fun9949_ip = 689;
                        continue _fun9949
                    }
                case 686:
                    var19 = var5;
                case 689:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var15];
                    var7 = var6.bind(var11)(var5);
                    var6 = var7.getFinalOperationName;
                    var5 = _closure2_slot1;
                    var9 = var6.bind(var7)(var5);
                    var5 = var12[var4];
                    var6 = 'object';
                    var5 = typeof var5;
                    var8 = undefined;
                    if (!(var6 === var5)) {
                        _fun9949_ip = 742;
                        continue _fun9949
                    }
                case 738:
                    var8 = var12[var4];
                case 742:
                    var _closure3_slot2 = var8;
                    var16 = global;
                    var4 = var16.Boolean;
                    var5 = var3 == var8;
                    var3 = undefined;
                    if (var5) {
                        _fun9949_ip = 769;
                        continue _fun9949
                    }
                case 763:
                    var3 = var8.stream;
                case 769:
                    var7 = var4.bind(var11)(var3);
                    var4 = _closure2_slot1;
                    var3 = 'messages.stream';
                    var6 = var3 === var4;
                    if (var7) {
                        _fun9949_ip = 900;
                        continue _fun9949
                    }
                case 791:
                    if (var6) {
                        _fun9949_ip = 900;
                        continue _fun9949
                    }
                case 794:
                    var14 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var3 = 8;
                    var3 = var0[var3];
                    var5 = var14.bind(var11)(var3);
                    var4 = var5.startSpan;
                    var3 = {};
                    var16 = var16.HermesInternal;
                    var18 = var16.concat;
                    var17 = '';
                    var16 = ' ';
                    var16 = var18.bind(var17)(var9, var16, var19);
                    var3.name = var16;
                    var0 = var0[var15];
                    var15 = var14.bind(var11)(var0);
                    var14 = var15.getSpanOperation;
                    var0 = _closure2_slot1;
                    var0 = var14.bind(var15)(var0);
                    var3.op = var0;
                    var3.attributes = var10;
                    var0 = function(arg0) { // Environment: var1
                        _fun9956: for (var _fun9956_ip = 0;;) switch (_fun9956_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var1 = _closure2_slot3;
                                var1 = var1.recordInputs;
                                if (!var1) {
                                    _fun9956_ip = 32;
                                    continue _fun9956
                                }
                            case 25:
                                var1 = _closure3_slot2;
                            case 32:
                                if (!var1) {
                                    _fun9956_ip = 57;
                                    continue _fun9956
                                }
                            case 35:
                                var3 = _closure1_slot4;
                                var2 = _closure3_slot2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var4, var2);
                            case 57:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.handleCallbackErrors;
                                var9 = function() { // Environment: var0
                                    var3 = _closure3_slot0;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot2;
                                    var0 = _closure3_slot1;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var8 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 6;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.captureException;
                                    var2 = {};
                                    var1 = {
                                        'handled': false,
                                        'type': 'auto.ai.anthropic'
                                    };
                                    var5 = {};
                                    var6 = _closure2_slot1;
                                    var5.function = var6;
                                    var1.data = var5;
                                    var2.mechanism = var1;
                                    var1 = arg0;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var0;
                                };
                                var7 = function() { // Environment: var0
                                    var0 = undefined;
                                    return var0;
                                };
                                var6 = function(arg0) { // Environment: var0
                                    var4 = _closure1_slot5;
                                    var3 = _closure4_slot0;
                                    var0 = _closure2_slot3;
                                    var2 = var0.recordOutputs;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var4.bind(var0)(var3, var1, var2);
                                    return var0;
                                };
                                var10 = var5;
                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var3, var0);
                    _fun9949_ip = 948;
                    continue _fun9949;
                case 900:
                    var30 = _closure2_slot0;
                    var28 = _closure2_slot2;
                    var24 = _closure2_slot1;
                    var22 = _closure2_slot3;
                    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) { // Original name: handleStreamingRequest, environment: var1
                        _fun9950: for (var _fun9950_ip = 0;;) switch (_fun9950_ip) {
                            case 0:
                                var0 = arg4;
                                var7 = arg6;
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var2 = arg1;
                                var _closure4_slot1 = var2;
                                var2 = arg2;
                                var _closure4_slot2 = var2;
                                var2 = arg3;
                                var _closure4_slot3 = var2;
                                var _closure4_slot4 = var7;
                                var2 = arg7;
                                var _closure4_slot5 = var2;
                                var2 = arg8;
                                var _closure4_slot6 = var2;
                                var4 = {};
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 2;
                                var3 = var5[var3];
                                var5 = undefined;
                                var3 = var6.bind(var5)(var3);
                                var3 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                                var3 = var0[var3];
                                var6 = null;
                                var6 = var6 != var3;
                                var11 = 'unknown';
                                if (!var6) {
                                    _fun9950_ip = 107;
                                    continue _fun9950
                                }
                            case 104:
                                var11 = var3;
                            case 107:
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var10 = var3.concat;
                                var16 = '';
                                var15 = arg5;
                                var14 = ' ';
                                var12 = ' stream-response';
                                var13 = var11;
                                var3 = var16[var10](var15, var14, var13, var12, var11);
                                var4.name = var3;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var3 = 3;
                                var3 = var8[var3];
                                var6 = var6.bind(var5)(var3);
                                var3 = var6.getSpanOperation;
                                var3 = var3.bind(var6)(var7);
                                var4.op = var3;
                                var4.attributes = var0;
                                var0 = arg9;
                                if (!var0) {
                                    _fun9950_ip = 245;
                                    continue _fun9950
                                }
                            case 196:
                                var0 = arg10;
                                if (var0) {
                                    _fun9950_ip = 245;
                                    continue _fun9950
                                }
                            case 202:
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var0 = 8;
                                var0 = var6[var0];
                                var6 = var3.bind(var5)(var0);
                                var3 = var6.startSpanManual;
                                var0 = function() { // Environment: var1
                                    var3 = _closure1_slot2;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun9953: for (var _fun9953_ip = 0;;) switch (_fun9953_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun9953_ip = 198;
                                                        continue _fun9953
                                                    }
                                                case 10:
                                                    var2 = arg0;
                                                    var1 = undefined;
                                                    var8 = undefined;
                                                case 17: // try_start_0
                                                    var4 = _closure4_slot6;
                                                    var4 = var4.recordInputs;
                                                    var3 = var4;
                                                    if (!var4) {
                                                        _fun9953_ip = 40;
                                                        continue _fun9953
                                                    }
                                                case 36:
                                                    var3 = _closure4_slot5;
                                                case 40:
                                                    if (!var3) {
                                                        _fun9953_ip = 63;
                                                        continue _fun9953
                                                    }
                                                case 43:
                                                    var5 = _closure1_slot4;
                                                    var4 = var2;
                                                    var3 = _closure4_slot5;
                                                    var3 = var5.bind(var1)(var4, var3);
                                                case 63:
                                                    var6 = _closure4_slot0;
                                                    var5 = var6.apply;
                                                    var4 = _closure4_slot2;
                                                    var3 = _closure4_slot3;
                                                    var3 = var5.bind(var6)(var4, var3);
                                                    SaveGenerator(address = 90);
                                                case 88:
                                                    return var3;
                                                case 90:
                                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                                    if (var4) {
                                                        _fun9953_ip = 166;
                                                        continue _fun9953
                                                    }
                                                case 96:
                                                    var5 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var4 = 9;
                                                    var4 = var6[var4];
                                                    var7 = var5.bind(var1)(var4);
                                                    var6 = var7.instrumentAsyncIterableStream;
                                                    var5 = var2;
                                                    var9 = _closure4_slot6;
                                                    var10 = var9.recordOutputs;
                                                    var8 = var10;
                                                    var9 = null;
                                                    var9 = var9 != var10;
                                                    var4 = var9;
                                                    if (!var9) {
                                                        _fun9953_ip = 156;
                                                        continue _fun9953
                                                    }
                                                case 153:
                                                    var4 = var8;
                                                case 156:
                                                    var4 = var6.bind(var7)(var3, var5, var4);
                                                case 163: // try_end0
                                                    return var4;
                                                case 166:
                                                    return var3;
                                                case 169: // catch_target0
                                                    CatchBlockStart(arg_register = 5);
                                                    var4 = _closure1_slot6;
                                                    var3 = var2;
                                                    var2 = _closure4_slot4;
                                                    var2 = var4.bind(var1)(var5, var3, var2);
                                                    return var1;
                                                case 198:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var0.bind(var5)();
                                var0 = var3.bind(var6)(var4, var0);
                                _fun9950_ip = 282;
                                continue _fun9950;
                            case 245:
                                var3 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 8;
                                var2 = var6[var2];
                                var3 = var3.bind(var5)(var2);
                                var2 = var3.startSpanManual;
                                var1 = function(arg0) { // Environment: var1
                                    _fun9955: for (var _fun9955_ip = 0;;) switch (_fun9955_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var0 = undefined;
                                            var7 = undefined;
                                        case 7: // try_start_0
                                            var3 = _closure4_slot6;
                                            var3 = var3.recordInputs;
                                            var2 = var3;
                                            if (!var3) {
                                                _fun9955_ip = 30;
                                                continue _fun9955
                                            }
                                        case 26:
                                            var2 = _closure4_slot5;
                                        case 30:
                                            if (!var2) {
                                                _fun9955_ip = 53;
                                                continue _fun9955
                                            }
                                        case 33:
                                            var4 = _closure1_slot4;
                                            var3 = var1;
                                            var2 = _closure4_slot5;
                                            var2 = var4.bind(var0)(var3, var2);
                                        case 53:
                                            var5 = _closure4_slot1;
                                            var4 = var5.apply;
                                            var3 = _closure4_slot2;
                                            var2 = _closure4_slot3;
                                            var6 = var4.bind(var5)(var3, var2);
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var2 = 9;
                                            var2 = var4[var2];
                                            var5 = var3.bind(var0)(var2);
                                            var4 = var5.instrumentMessageStream;
                                            var3 = var1;
                                            var8 = _closure4_slot6;
                                            var9 = var8.recordOutputs;
                                            var7 = var9;
                                            var8 = null;
                                            var8 = var8 != var9;
                                            var2 = var8;
                                            if (!var8) {
                                                _fun9955_ip = 136;
                                                continue _fun9955
                                            }
                                        case 133:
                                            var2 = var7;
                                        case 136:
                                            var2 = var4.bind(var5)(var6, var3, var2);
                                        case 143: // try_end0
                                            return var2;
                                        case 145: // catch_target0
                                            CatchBlockStart(arg_register = 4);
                                            var3 = _closure1_slot6;
                                            var2 = var1;
                                            var1 = _closure4_slot4;
                                            var1 = var3.bind(var0)(var4, var2, var1);
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var4, var1);
                            case 282:
                                return var0;
                        }
                    };
                    var31 = undefined;
                    var29 = var13;
                    var27 = var12;
                    var26 = var10;
                    var25 = var9;
                    var23 = var8;
                    var21 = var7;
                    var20 = var6;
                    var0 = var31[var1](var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19);
                case 948:
                    return var0;
            }
        };
        var0.apply = var1;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = var1;
        var5 = var3;
        var4 = var0;
        var0 = new var6[var2](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: createDeepProxy, environment: var1
        _fun9961: for (var _fun9961_ip = 0;;) switch (_fun9961_ip) {
            case 0:
                var1 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var4 = 1;
                var5 = var2 > var4;
                var6 = '';
                var2 = var6;
                if (!var5) {
                    _fun9961_ip = 41;
                    continue _fun9961
                }
            case 26:
                var5 = arguments[var4];
                var2 = var6;
                if (!(var1 !== var5)) {
                    _fun9961_ip = 41;
                    continue _fun9961
                }
            case 37:
                var2 = arguments[var4];
            case 41:
                var _closure2_slot0 = var2;
                var4 = arguments.length;
                var2 = 2;
                var4 = var4 > var2;
                var1 = undefined;
                if (!var4) {
                    _fun9961_ip = 64;
                    continue _fun9961
                }
            case 60:
                var1 = arguments[var2];
            case 64:
                var _closure2_slot1 = var1;
                var1 = global;
                var3 = var1.Proxy;
                var2 = {};
                var0 = function(arg0, arg1) { // Original name: get, environment: var0
                    _fun9962: for (var _fun9962_ip = 0;;) switch (_fun9962_ip) {
                        case 0:
                            var6 = arg0;
                            var9 = arg1;
                            var5 = var6[var9];
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 3;
                            var0 = var3[var0];
                            var4 = undefined;
                            var8 = var1.bind(var4)(var0);
                            var7 = var8.buildMethodPath;
                            var3 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.String;
                            var0 = var0.bind(var4)(var9);
                            var3 = var7.bind(var8)(var3, var0);
                            var8 = typeof var5;
                            var0 = 'function';
                            var0 = var0 === var8;
                            if (!var0) {
                                _fun9962_ip = 115;
                                continue _fun9962
                            }
                        case 81:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var7 = 5;
                            var7 = var10[var7];
                            var9 = var9.bind(var4)(var7);
                            var7 = var9.shouldInstrument;
                            var7 = var7.bind(var9)(var3);
                            if (var7) {
                                _fun9962_ip = 164;
                                continue _fun9962
                            }
                        case 115:
                            if (var0) {
                                _fun9962_ip = 152;
                                continue _fun9962
                            }
                        case 118:
                            var0 = var5;
                            if (!var5) {
                                _fun9962_ip = 150;
                                continue _fun9962
                            }
                        case 124:
                            var7 = 'object';
                            var0 = var5;
                            if (!(var7 === var8)) {
                                _fun9962_ip = 150;
                                continue _fun9962
                            }
                        case 135:
                            var8 = _closure1_slot8;
                            var7 = _closure2_slot1;
                            var0 = var8.bind(var4)(var5, var3, var7);
                        case 150:
                            _fun9962_ip = 162;
                            continue _fun9962;
                        case 152:
                            var7 = var5.bind;
                            var0 = var7.bind(var5)(var6);
                        case 162:
                            _fun9962_ip = 187;
                            continue _fun9962;
                        case 164:
                            var2 = _closure1_slot7;
                            var11 = _closure2_slot1;
                            var15 = undefined;
                            var14 = var5;
                            var13 = var3;
                            var12 = var6;
                            var0 = var15[var2](var14, var13, var12, var11, var10);
                        case 187:
                            return var0;
                    }
                };
                var2.get = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = arg0;
                var9 = var1;
                var7 = var2;
                var0 = new var9[var3](var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
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
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function(arg0, arg1) { // Original name: instrumentAnthropicAiClient, environment: var1
        _fun9963: for (var _fun9963_ip = 0;;) switch (_fun9963_ip) {
            case 0:
                var1 = global;
                var3 = var1.Boolean;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 11;
                var0 = var4[var0];
                var4 = undefined;
                var5 = var5.bind(var4)(var0);
                var0 = var5.getClient;
                var6 = var0.bind(var5)();
                var0 = null;
                var5 = var0 == var6;
                var0 = undefined;
                if (var5) {
                    _fun9963_ip = 70;
                    continue _fun9963
                }
            case 54:
                var5 = var6.getOptions;
                var5 = var5.bind(var6)();
                var0 = var5.sendDefaultPii;
            case 70:
                var0 = var3.bind(var4)(var0);
                var3 = _closure1_slot8;
                var5 = var1.Object;
                var2 = var5.assign;
                var1 = {};
                var1.recordInputs = var0;
                var1.recordOutputs = var0;
                var0 = arg1;
                var2 = var2.bind(var5)(var1, var0);
                var1 = arg0;
                var0 = '';
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
        }
    };
    var2.instrumentAnthropicAiClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 77, 955, 957, 838, 967, 867, 839, 864, 969, 865, 847]);