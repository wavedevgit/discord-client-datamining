// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() {
        _fun10035: for (var _fun10035_ip = 0;;) switch (_fun10035_ip) {
            case 0:
                var3 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun10035_ip = 23;
                    continue _fun10035
                }
            case 15:
                var2 = arguments[var0];
                if (!(var3 === var2)) {
                    _fun10035_ip = 27;
                    continue _fun10035
                }
            case 23:
                var2 = {};
                _fun10035_ip = 31;
                continue _fun10035;
            case 27:
                var2 = arguments[var0];
            case 31:
                var5 = var2.recordInputs;
                var0 = null;
                var4 = var0 != var5;
                if (!var4) {
                    _fun10035_ip = 49;
                    continue _fun10035
                }
            case 46:
                var4 = var5;
            case 49:
                var _closure2_slot0 = var4;
                var2 = var2.recordOutputs;
                var0 = var0 != var2;
                if (!var0) {
                    _fun10035_ip = 69;
                    continue _fun10035
                }
            case 66:
                var0 = var2;
            case 69:
                var _closure2_slot1 = var0;
                var0 = global;
                var0 = var0.Map;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var7 = var2;
                var0 = new var7[var0](var6);
                var0 = var0 instanceof Object ? var0 : var2;
                var _closure2_slot2 = var0;
                var0 = function arg0() {
                    _fun10036: for (var _fun10036_ip = 0;;) switch (_fun10036_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var3 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun10036_ip = 39;
                                continue _fun10036
                            }
                        case 29:
                            var4 = var3.isRecording;
                            var1 = var4.bind(var3)();
                        case 39:
                            if (!var1) {
                                _fun10036_ip = 65;
                                continue _fun10036
                            }
                        case 42:
                            var1 = var3.end;
                            var1 = var1.bind(var3)();
                            var1 = _closure2_slot2;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = false;
                var0.lc_serializable = var2;
                var4 = ['langchain_core', 'callbacks', 'sentry'];
                var0.lc_namespace = var4;
                var0.lc_secrets = var3;
                var0.lc_attributes = var3;
                var0.lc_aliases = var3;
                var0.lc_serializable_keys = var3;
                var3 = ['langchain_core', 'callbacks', 'sentry'];
                var0.lc_id = var3;
                var3 = {};
                var0.lc_kwargs = var3;
                var3 = 'SentryCallbackHandler';
                var0.name = var3;
                var0.ignoreLLM = var2;
                var0.ignoreChain = var2;
                var0.ignoreAgent = var2;
                var0.ignoreRetriever = var2;
                var0.ignoreCustomEvent = var2;
                var0.raiseError = var2;
                var2 = true;
                var0.awaitHandlers = var2;
                var2 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7() {
                    var0 = arg2;
                    var _closure3_slot0 = var0;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 1;
                    var3 = var12[var2];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var3);
                    var4 = var7.getInvocationParams;
                    var3 = arg5;
                    var16 = var4.bind(var7)(var3);
                    var2 = var12[var2];
                    var9 = var6.bind(var0)(var2);
                    var8 = var9.extractLLMRequestAttributes;
                    var17 = _closure2_slot0;
                    var19 = arg0;
                    var18 = arg1;
                    var15 = arg6;
                    var20 = var9;
                    var9 = var20[var8](var19, var18, var17, var16, var15, var14);
                    var2 = 2;
                    var3 = var12[var2];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var14 = var9[var3];
                    var2 = var12[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                    var13 = var9[var2];
                    var2 = 3;
                    var2 = var12[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.startSpanManual;
                    var2 = {};
                    var7 = global;
                    var8 = var7.HermesInternal;
                    var11 = var8.concat;
                    var10 = '';
                    var8 = ' ';
                    var8 = var11.bind(var10)(var13, var8, var14);
                    var2.name = var8;
                    var11 = 'gen_ai.pipeline';
                    var2.op = var11;
                    var8 = var7.Object;
                    var7 = var8.assign;
                    var10 = _closure1_slot2;
                    var5 = 4;
                    var5 = var12[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var5 = {};
                    var6 = var10.bind(var0)(var5, var6, var11);
                    var5 = {};
                    var5 = var7.bind(var8)(var5, var9, var6);
                    var2.attributes = var5;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = _closure2_slot2;
                        var2 = var3.set;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.handleLLMStart = var2;
                var2 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7() {
                    var0 = arg2;
                    var _closure3_slot0 = var0;
                    var6 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 1;
                    var3 = var12[var2];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var3);
                    var4 = var7.getInvocationParams;
                    var3 = arg5;
                    var16 = var4.bind(var7)(var3);
                    var2 = var12[var2];
                    var9 = var6.bind(var0)(var2);
                    var8 = var9.extractChatModelRequestAttributes;
                    var17 = _closure2_slot0;
                    var19 = arg0;
                    var18 = arg1;
                    var15 = arg6;
                    var20 = var9;
                    var9 = var20[var8](var19, var18, var17, var16, var15, var14);
                    var2 = 2;
                    var3 = var12[var2];
                    var3 = var6.bind(var0)(var3);
                    var3 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var14 = var9[var3];
                    var2 = var12[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                    var13 = var9[var2];
                    var2 = 3;
                    var2 = var12[var2];
                    var4 = var6.bind(var0)(var2);
                    var3 = var4.startSpanManual;
                    var2 = {};
                    var7 = global;
                    var8 = var7.HermesInternal;
                    var11 = var8.concat;
                    var10 = '';
                    var8 = ' ';
                    var8 = var11.bind(var10)(var13, var8, var14);
                    var2.name = var8;
                    var11 = 'gen_ai.chat';
                    var2.op = var11;
                    var8 = var7.Object;
                    var7 = var8.assign;
                    var10 = _closure1_slot2;
                    var5 = 4;
                    var5 = var12[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var5 = {};
                    var6 = var10.bind(var0)(var5, var6, var11);
                    var5 = {};
                    var5 = var7.bind(var8)(var5, var9, var6);
                    var2.attributes = var5;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = _closure2_slot2;
                        var2 = var3.set;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.handleChatModelStart = var2;
                var2 = function arg0, arg1, arg2, arg3, arg4() {
                    _fun10041: for (var _fun10041_ip = 0;;) switch (_fun10041_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var5 = var1.bind(var3)(var2);
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun10041_ip = 106;
                                continue _fun10041
                            }
                        case 26:
                            var1 = var5.isRecording;
                            var1 = var1.bind(var5)();
                            if (!var1) {
                                _fun10041_ip = 106;
                                continue _fun10041
                            }
                        case 39:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var6 = var7.extractLlmResponseAttributes;
                            var4 = _closure2_slot1;
                            var3 = arg0;
                            var4 = var6.bind(var7)(var3, var4);
                            if (!var4) {
                                _fun10041_ip = 97;
                                continue _fun10041
                            }
                        case 86:
                            var3 = var5.setAttributes;
                            var3 = var3.bind(var5)(var4);
                        case 97:
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)(var2);
                        case 106:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.handleLLMEnd = var2;
                var2 = function arg0, arg1() {
                    _fun10042: for (var _fun10042_ip = 0;;) switch (_fun10042_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var5 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var5;
                            if (!var1) {
                                _fun10042_ip = 39;
                                continue _fun10042
                            }
                        case 29:
                            var3 = var5.isRecording;
                            var1 = var3.bind(var5)();
                        case 39:
                            if (!var1) {
                                _fun10042_ip = 109;
                                continue _fun10042
                            }
                        case 42:
                            var4 = var5.setStatus;
                            var3 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 5;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.SPAN_STATUS_ERROR;
                            var3.code = var6;
                            var6 = 'llm_error';
                            var3.message = var6;
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)(var2);
                        case 109:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 6;
                            var1 = var7[var0];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var1);
                            var3 = var4.captureException;
                            var2 = {};
                            var1 = {};
                            var5 = false;
                            var1.handled = var5;
                            var5 = 7;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var8 = var5.LANGCHAIN_ORIGIN;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var7 = var5.concat;
                            var6 = '';
                            var5 = '.llm_error_handler';
                            var5 = var7.bind(var6)(var8, var5);
                            var1.type = var5;
                            var2.mechanism = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var0.handleLLMError = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun10043: for (var _fun10043_ip = 0;;) switch (_fun10043_ip) {
                        case 0:
                            var0 = arg2;
                            var _closure3_slot0 = var0;
                            var0 = arg0;
                            var3 = var0.name;
                            if (var3) {
                                _fun10043_ip = 26;
                                continue _fun10043
                            }
                        case 20:
                            var3 = 'unknown_chain';
                        case 26:
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var12 = 4;
                            var2 = var0[var12];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var6 = var2.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var4 = {};
                            var2 = 'auto.ai.langchain';
                            var4 = var5.bind(var0)(var4, var6, var2);
                            var2 = 'langchain.chain.name';
                            var9 = var5.bind(var0)(var4, var2, var3);
                            var2 = _closure2_slot0;
                            var13 = var3;
                            if (!var2) {
                                _fun10043_ip = 130;
                                continue _fun10043
                            }
                        case 102:
                            var2 = global;
                            var4 = var2.JSON;
                            var3 = var4.stringify;
                            var2 = arg1;
                            var2 = var3.bind(var4)(var2);
                            var9['langchain.chain.inputs'] = var2;
                        case 130:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 3;
                            var2 = var5[var2];
                            var4 = var6.bind(var0)(var2);
                            var3 = var4.startSpanManual;
                            var2 = {};
                            var7 = global;
                            var8 = var7.HermesInternal;
                            var11 = var8.concat;
                            var8 = 'chain ';
                            var8 = var11.bind(var8)(var13);
                            var2.name = var8;
                            var11 = 'gen_ai.invoke_agent';
                            var2.op = var11;
                            var8 = var7.Object;
                            var7 = var8.assign;
                            var10 = _closure1_slot2;
                            var5 = var5[var12];
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var5 = {};
                            var6 = var10.bind(var0)(var5, var6, var11);
                            var5 = {};
                            var5 = var7.bind(var8)(var5, var9, var6);
                            var2.attributes = var5;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = _closure2_slot2;
                                var2 = var3.set;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.handleChainStart = var2;
                var2 = function arg0, arg1() {
                    _fun10045: for (var _fun10045_ip = 0;;) switch (_fun10045_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var4 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun10045_ip = 39;
                                continue _fun10045
                            }
                        case 29:
                            var3 = var4.isRecording;
                            var1 = var3.bind(var4)();
                        case 39:
                            if (!var1) {
                                _fun10045_ip = 100;
                                continue _fun10045
                            }
                        case 42:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun10045_ip = 89;
                                continue _fun10045
                            }
                        case 49:
                            var3 = var4.setAttributes;
                            var1 = {};
                            var5 = global;
                            var7 = var5.JSON;
                            var6 = var7.stringify;
                            var5 = arg0;
                            var5 = var6.bind(var7)(var5);
                            var1['langchain.chain.outputs'] = var5;
                            var1 = var3.bind(var4)(var1);
                        case 89:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.handleChainEnd = var2;
                var2 = function arg0, arg1() {
                    _fun10046: for (var _fun10046_ip = 0;;) switch (_fun10046_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var5 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var5;
                            if (!var1) {
                                _fun10046_ip = 39;
                                continue _fun10046
                            }
                        case 29:
                            var3 = var5.isRecording;
                            var1 = var3.bind(var5)();
                        case 39:
                            if (!var1) {
                                _fun10046_ip = 109;
                                continue _fun10046
                            }
                        case 42:
                            var4 = var5.setStatus;
                            var3 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 5;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.SPAN_STATUS_ERROR;
                            var3.code = var6;
                            var6 = 'chain_error';
                            var3.message = var6;
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)(var2);
                        case 109:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 6;
                            var1 = var7[var0];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var1);
                            var3 = var4.captureException;
                            var2 = {};
                            var1 = {};
                            var5 = false;
                            var1.handled = var5;
                            var5 = 7;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var8 = var5.LANGCHAIN_ORIGIN;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var7 = var5.concat;
                            var6 = '';
                            var5 = '.chain_error_handler';
                            var5 = var7.bind(var6)(var8, var5);
                            var1.type = var5;
                            var2.mechanism = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var0.handleChainError = var2;
                var2 = function arg0, arg1, arg2, arg3() {
                    _fun10047: for (var _fun10047_ip = 0;;) switch (_fun10047_ip) {
                        case 0:
                            var0 = arg2;
                            var _closure3_slot0 = var0;
                            var0 = arg0;
                            var3 = var0.name;
                            if (var3) {
                                _fun10047_ip = 26;
                                continue _fun10047
                            }
                        case 20:
                            var3 = 'unknown_tool';
                        case 26:
                            var5 = _closure1_slot2;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var12 = 4;
                            var2 = var7[var12];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var6 = var2.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var2 = 7;
                            var2 = var7[var2];
                            var2 = var4.bind(var0)(var2);
                            var4 = var2.LANGCHAIN_ORIGIN;
                            var2 = {};
                            var4 = var5.bind(var0)(var2, var6, var4);
                            var2 = 'gen_ai.tool.name';
                            var9 = var5.bind(var0)(var4, var2, var3);
                            var2 = _closure2_slot0;
                            var13 = var3;
                            if (!var2) {
                                _fun10047_ip = 121;
                                continue _fun10047
                            }
                        case 112:
                            var2 = arg1;
                            var9['gen_ai.tool.input'] = var2;
                        case 121:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var2 = 3;
                            var2 = var5[var2];
                            var4 = var6.bind(var0)(var2);
                            var3 = var4.startSpanManual;
                            var2 = {};
                            var7 = global;
                            var8 = var7.HermesInternal;
                            var11 = var8.concat;
                            var8 = 'execute_tool ';
                            var8 = var11.bind(var8)(var13);
                            var2.name = var8;
                            var11 = 'gen_ai.execute_tool';
                            var2.op = var11;
                            var8 = var7.Object;
                            var7 = var8.assign;
                            var10 = _closure1_slot2;
                            var5 = var5[var12];
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                            var5 = {};
                            var6 = var10.bind(var0)(var5, var6, var11);
                            var5 = {};
                            var5 = var7.bind(var8)(var5, var9, var6);
                            var2.attributes = var5;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = _closure2_slot2;
                                var2 = var3.set;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.handleToolStart = var2;
                var2 = function arg0, arg1() {
                    _fun10049: for (var _fun10049_ip = 0;;) switch (_fun10049_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var4 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun10049_ip = 39;
                                continue _fun10049
                            }
                        case 29:
                            var3 = var4.isRecording;
                            var1 = var3.bind(var4)();
                        case 39:
                            if (!var1) {
                                _fun10049_ip = 100;
                                continue _fun10049
                            }
                        case 42:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun10049_ip = 89;
                                continue _fun10049
                            }
                        case 49:
                            var3 = var4.setAttributes;
                            var1 = {};
                            var5 = global;
                            var7 = var5.JSON;
                            var6 = var7.stringify;
                            var5 = arg0;
                            var5 = var6.bind(var7)(var5);
                            var1['gen_ai.tool.output'] = var5;
                            var1 = var3.bind(var4)(var1);
                        case 89:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.handleToolEnd = var2;
                var2 = function arg0, arg1() {
                    _fun10050: for (var _fun10050_ip = 0;;) switch (_fun10050_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var5 = var1.bind(var3)(var2);
                            var1 = null;
                            var1 = var1 != var5;
                            if (!var1) {
                                _fun10050_ip = 39;
                                continue _fun10050
                            }
                        case 29:
                            var3 = var5.isRecording;
                            var1 = var3.bind(var5)();
                        case 39:
                            if (!var1) {
                                _fun10050_ip = 109;
                                continue _fun10050
                            }
                        case 42:
                            var4 = var5.setStatus;
                            var3 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 5;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var7.bind(var1)(var6);
                            var6 = var6.SPAN_STATUS_ERROR;
                            var3.code = var6;
                            var6 = 'tool_error';
                            var3.message = var6;
                            var3 = var4.bind(var5)(var3);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)(var2);
                        case 109:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 6;
                            var1 = var7[var0];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var1);
                            var3 = var4.captureException;
                            var2 = {};
                            var1 = {};
                            var5 = false;
                            var1.handled = var5;
                            var5 = 7;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var8 = var5.LANGCHAIN_ORIGIN;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var7 = var5.concat;
                            var6 = '';
                            var5 = '.tool_error_handler';
                            var5 = var7.bind(var6)(var8, var5);
                            var1.type = var5;
                            var2.mechanism = var1;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                    }
                };
                var0.handleToolError = var2;
                var2 = function() {
                    var0 = _closure2_slot4;
                    return var0;
                };
                var0.copy = var2;
                var2 = function() {
                    var0 = {
                        'lc': 1,
                        'type': 'not_implemented'
                    };
                    var1 = _closure2_slot4;
                    var1 = var1.lc_id;
                    var0.id = var1;
                    return var0;
                };
                var0.toJSON = var2;
                var2 = function() {
                    var0 = {
                        'lc': 1,
                        'type': 'not_implemented'
                    };
                    var1 = _closure2_slot4;
                    var1 = var1.lc_id;
                    var0.id = var1;
                    return var0;
                };
                var0.toJSONNotImplemented = var2;
                var _closure2_slot4 = var0;
                return var0;
        }
    };
    var2.createLangChainCallbackHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 975, 955, 864, 838, 839, 867, 976]);