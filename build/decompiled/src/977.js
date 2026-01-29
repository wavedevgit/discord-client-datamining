// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0, arg1) { // Original name: instrumentStateGraphCompile, environment: var3
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Proxy;
        var2 = {};
        var0 = function(arg0, arg1, arg2) { // Original name: apply, environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 2;
            var1 = var10[var1];
            var8 = undefined;
            var3 = var9.bind(var8)(var1);
            var2 = var3.startSpan;
            var1 = {
                'op': 'gen_ai.create_agent',
                'name': 'create_agent'
            };
            var11 = 'gen_ai.create_agent';
            var7 = 'create_agent';
            var6 = _closure1_slot3;
            var4 = 3;
            var5 = var10[var4];
            var5 = var9.bind(var8)(var5);
            var13 = var5.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var12 = var5.LANGGRAPH_ORIGIN;
            var5 = {};
            var5 = var6.bind(var8)(var5, var13, var12);
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
            var5 = var6.bind(var8)(var5, var4, var11);
            var4 = 5;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.GEN_AI_OPERATION_NAME_ATTRIBUTE;
            var4 = var6.bind(var8)(var5, var4, var7);
            var1.attributes = var4;
            var0 = function(arg0) { // Environment: var0
                _fun10069: for (var _fun10069_ip = 0;;) switch (_fun10069_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = undefined;
                        var0 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                    case 11: // try_start_0
                        var4 = global;
                        var11 = var4.Reflect;
                        var10 = var11.apply;
                        var9 = _closure3_slot0;
                        var8 = _closure3_slot1;
                        var7 = _closure3_slot2;
                        var0 = var10.bind(var11)(var9, var8, var7);
                        var8 = var7.length;
                        var7 = 0;
                        if (!(!(var8 > var7))) {
                            _fun10069_ip = 61;
                            continue _fun10069
                        }
                    case 57:
                        var9 = {};
                        _fun10069_ip = 69;
                        continue _fun10069;
                    case 61:
                        var6 = _closure3_slot2;
                        var9 = var6[var7];
                    case 69:
                        var2 = var9;
                        var8 = null;
                        var8 = var8 != var9;
                        var7 = var8;
                        if (!var8) {
                            _fun10069_ip = 92;
                            continue _fun10069
                        }
                    case 84:
                        var8 = var2;
                        var7 = var8.name;
                    case 92:
                        var6 = var7;
                        if (!var7) {
                            _fun10069_ip = 117;
                            continue _fun10069
                        }
                    case 98:
                        var7 = var2;
                        var7 = var7.name;
                        var8 = 'string';
                        var7 = typeof var7;
                        var6 = var8 === var7;
                    case 117:
                        if (!var6) {
                            _fun10069_ip = 210;
                            continue _fun10069
                        }
                    case 120:
                        var7 = var1;
                        var10 = var7.setAttribute;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 5;
                        var6 = var9[var6];
                        var6 = var8.bind(var3)(var6);
                        var9 = var6.GEN_AI_AGENT_NAME_ATTRIBUTE;
                        var8 = var2;
                        var6 = var8.name;
                        var6 = var10.bind(var7)(var9, var6);
                        var6 = var7.updateName;
                        var9 = var8.name;
                        var4 = var4.HermesInternal;
                        var8 = var4.concat;
                        var4 = 'create_agent ';
                        var4 = var8.bind(var4)(var9);
                        var4 = var6.bind(var7)(var4);
                    case 210:
                        var4 = var0;
                        var6 = var4.invoke;
                        var5 = var6;
                        var4 = var6;
                        if (!var6) {
                            _fun10069_ip = 242;
                            continue _fun10069
                        }
                    case 228:
                        var6 = var5;
                        var7 = 'function';
                        var6 = typeof var6;
                        var4 = var7 === var6;
                    case 242:
                        if (!var4) {
                            _fun10069_ip = 293;
                            continue _fun10069
                        }
                    case 245:
                        var4 = var0;
                        var6 = var5;
                        var5 = var6.bind;
                        var15 = var5.bind(var6)(var4);
                        var13 = var2;
                        var12 = _closure2_slot0;
                        var2 = function(arg0, arg1, arg2, arg3) { // Original name: instrumentCompiledGraphInvoke, environment: var2
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var1 = arg3;
                            var _closure5_slot2 = var1;
                            var1 = global;
                            var3 = var1.Proxy;
                            var2 = {};
                            var0 = function(arg0, arg1, arg2) { // Original name: apply, environment: var0
                                var1 = arg0;
                                var _closure6_slot0 = var1;
                                var1 = arg1;
                                var _closure6_slot1 = var1;
                                var1 = arg2;
                                var _closure6_slot2 = var1;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var1 = 2;
                                var1 = var10[var1];
                                var4 = undefined;
                                var3 = var9.bind(var4)(var1);
                                var2 = var3.startSpan;
                                var1 = {
                                    'op': 'gen_ai.invoke_agent',
                                    'name': 'invoke_agent'
                                };
                                var8 = 'invoke_agent';
                                var7 = _closure1_slot3;
                                var5 = 3;
                                var6 = var10[var5];
                                var6 = var9.bind(var4)(var6);
                                var12 = var6.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                var6 = 4;
                                var6 = var10[var6];
                                var6 = var9.bind(var4)(var6);
                                var11 = var6.LANGGRAPH_ORIGIN;
                                var6 = {};
                                var12 = var7.bind(var4)(var6, var12, var11);
                                var5 = var10[var5];
                                var5 = var9.bind(var4)(var5);
                                var11 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                var5 = 5;
                                var6 = var10[var5];
                                var6 = var9.bind(var4)(var6);
                                var6 = var6.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
                                var6 = var7.bind(var4)(var12, var11, var6);
                                var5 = var10[var5];
                                var5 = var9.bind(var4)(var5);
                                var5 = var5.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                                var5 = var7.bind(var4)(var6, var5, var8);
                                var1.attributes = var5;
                                var0 = function() { // Environment: var0
                                    var3 = _closure1_slot2;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun10074: for (var _fun10074_ip = 0;;) switch (_fun10074_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun10074_ip = 683;
                                                        continue _fun10074
                                                    }
                                                case 10:
                                                    var2 = arg0;
                                                    var4 = undefined;
                                                    var12 = undefined;
                                                    var15 = undefined;
                                                    var11 = undefined;
                                                    var10 = undefined;
                                                    var7 = undefined;
                                                    var5 = undefined;
                                                    var3 = undefined;
                                                case 29: // try_start_0
                                                    var6 = _closure5_slot1;
                                                    var9 = null;
                                                    var6 = var9 == var6;
                                                    var8 = undefined;
                                                    if (var6) {
                                                        _fun10074_ip = 56;
                                                        continue _fun10074
                                                    }
                                                case 47:
                                                    var6 = _closure5_slot1;
                                                    var8 = var6.name;
                                                case 56:
                                                    var15 = var8;
                                                    var6 = var8;
                                                    if (!var8) {
                                                        _fun10074_ip = 79;
                                                        continue _fun10074
                                                    }
                                                case 65:
                                                    var8 = var15;
                                                    var13 = 'string';
                                                    var8 = typeof var8;
                                                    var6 = var13 === var8;
                                                case 79:
                                                    if (!var6) {
                                                        _fun10074_ip = 188;
                                                        continue _fun10074
                                                    }
                                                case 82:
                                                    var13 = var2;
                                                    var17 = var13.setAttribute;
                                                    var14 = _closure1_slot0;
                                                    var16 = _closure1_slot1;
                                                    var6 = 5;
                                                    var8 = var16[var6];
                                                    var8 = var14.bind(var4)(var8);
                                                    var8 = var8.GEN_AI_PIPELINE_NAME_ATTRIBUTE;
                                                    var8 = var17.bind(var13)(var8, var15);
                                                    var8 = var13.setAttribute;
                                                    var6 = var16[var6];
                                                    var6 = var14.bind(var4)(var6);
                                                    var6 = var6.GEN_AI_AGENT_NAME_ATTRIBUTE;
                                                    var6 = var8.bind(var13)(var6, var15);
                                                    var8 = var13.updateName;
                                                    var6 = global;
                                                    var6 = var6.HermesInternal;
                                                    var14 = var6.concat;
                                                    var6 = 'invoke_agent ';
                                                    var6 = var14.bind(var6)(var15);
                                                    var6 = var8.bind(var13)(var6);
                                                case 188:
                                                    var14 = _closure1_slot0;
                                                    var13 = _closure1_slot1;
                                                    var8 = 8;
                                                    var13 = var13[var8];
                                                    var15 = var14.bind(var4)(var13);
                                                    var14 = var15.extractToolsFromCompiledGraph;
                                                    var13 = _closure5_slot0;
                                                    var13 = var14.bind(var15)(var13);
                                                    var11 = var13;
                                                    if (!var13) {
                                                        _fun10074_ip = 292;
                                                        continue _fun10074
                                                    }
                                                case 232:
                                                    var15 = var2;
                                                    var14 = var15.setAttribute;
                                                    var16 = _closure1_slot0;
                                                    var17 = _closure1_slot1;
                                                    var13 = 5;
                                                    var13 = var17[var13];
                                                    var13 = var16.bind(var4)(var13);
                                                    var13 = var13.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE;
                                                    var16 = global;
                                                    var17 = var16.JSON;
                                                    var16 = var17.stringify;
                                                    var11 = var16.bind(var17)(var11);
                                                    var11 = var14.bind(var15)(var13, var11);
                                                case 292:
                                                    var1 = _closure5_slot2;
                                                    var10 = var1.recordInputs;
                                                    var7 = var1.recordOutputs;
                                                    var11 = _closure6_slot2;
                                                    var11 = var11.length;
                                                    var13 = 0;
                                                    if (!(var11 > var13)) {
                                                        _fun10074_ip = 347;
                                                        continue _fun10074
                                                    }
                                                case 326:
                                                    var11 = _closure6_slot2;
                                                    var11 = var11[var13];
                                                    var11 = var11.messages;
                                                    var12 = var11;
                                                    if (!(var9 == var11)) {
                                                        _fun10074_ip = 353;
                                                        continue _fun10074
                                                    }
                                                case 347:
                                                    var11 = new Array(0);
                                                    _fun10074_ip = 356;
                                                    continue _fun10074;
                                                case 353:
                                                    var11 = var12;
                                                case 356:
                                                    var5 = var11;
                                                    if (!var11) {
                                                        _fun10074_ip = 474;
                                                        continue _fun10074
                                                    }
                                                case 362:
                                                    if (!var10) {
                                                        _fun10074_ip = 474;
                                                        continue _fun10074
                                                    }
                                                case 365:
                                                    var11 = _closure1_slot0;
                                                    var14 = _closure1_slot1;
                                                    var10 = 9;
                                                    var10 = var14[var10];
                                                    var13 = var11.bind(var4)(var10);
                                                    var12 = var13.normalizeLangChainMessages;
                                                    var10 = var5;
                                                    var13 = var12.bind(var13)(var10);
                                                    var10 = 10;
                                                    var10 = var14[var10];
                                                    var12 = var11.bind(var4)(var10);
                                                    var10 = var12.truncateGenAiMessages;
                                                    var15 = var10.bind(var12)(var13);
                                                    var13 = var2;
                                                    var12 = var13.setAttribute;
                                                    var10 = 5;
                                                    var10 = var14[var10];
                                                    var10 = var11.bind(var4)(var10);
                                                    var11 = var10.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                                                    var10 = global;
                                                    var14 = var10.JSON;
                                                    var10 = var14.stringify;
                                                    var10 = var10.bind(var14)(var15);
                                                    var10 = var12.bind(var13)(var11, var10);
                                                case 474:
                                                    var10 = global;
                                                    var13 = var10.Reflect;
                                                    var12 = var13.apply;
                                                    var11 = _closure6_slot0;
                                                    var10 = _closure6_slot1;
                                                    var1 = _closure6_slot2;
                                                    var1 = var12.bind(var13)(var11, var10, var1);
                                                    SaveGenerator(address = 510);
                                                case 508:
                                                    return var1;
                                                case 510:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 10);
                                                    if (var10) {
                                                        _fun10074_ip = 576;
                                                        continue _fun10074
                                                    }
                                                case 516:
                                                    var3 = var1;
                                                    if (!var7) {
                                                        _fun10074_ip = 573;
                                                        continue _fun10074
                                                    }
                                                case 522:
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var6 = var6[var8];
                                                    var8 = var7.bind(var4)(var6);
                                                    var7 = var8.setResponseAttributes;
                                                    var6 = var2;
                                                    var10 = var5;
                                                    var10 = var9 != var10;
                                                    var9 = null;
                                                    if (!var10) {
                                                        _fun10074_ip = 563;
                                                        continue _fun10074
                                                    }
                                                case 560:
                                                    var9 = var5;
                                                case 563:
                                                    var5 = var3;
                                                    var5 = var7.bind(var8)(var6, var9, var5);
                                                case 573: // try_end0
                                                    return var3;
                                                case 576:
                                                    return var1;
                                                case 579: // catch_target0
                                                    CatchBlockStart(arg_register = 1);
                                                    var7 = var2;
                                                    var6 = var7.setStatus;
                                                    var2 = {};
                                                    var3 = _closure1_slot0;
                                                    var5 = _closure1_slot1;
                                                    var8 = 6;
                                                    var8 = var5[var8];
                                                    var8 = var3.bind(var4)(var8);
                                                    var8 = var8.SPAN_STATUS_ERROR;
                                                    var2.code = var8;
                                                    var8 = 'internal_error';
                                                    var2.message = var8;
                                                    var2 = var6.bind(var7)(var2);
                                                    var2 = 7;
                                                    var2 = var5[var2];
                                                    var4 = var3.bind(var4)(var2);
                                                    var3 = var4.captureException;
                                                    var2 = {};
                                                    var5 = {
                                                        'handled': false,
                                                        'type': 'auto.ai.langgraph.error'
                                                    };
                                                    var2.mechanism = var5;
                                                    var2 = var3.bind(var4)(var1, var2);
                                                    throw var1;
                                                case 683:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure7_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure7_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var0.bind(var4)();
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var2.apply = var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = arg0;
                            var6 = var1;
                            var4 = var2;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var16 = undefined;
                        var14 = var4;
                        var2 = var16[var2](var15, var14, var13, var12, var11);
                        var4.invoke = var2;
                    case 293: // try_end0
                        return var0;
                    case 295: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var6 = var1;
                        var5 = var6.setStatus;
                        var1 = {};
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var7 = 6;
                        var7 = var4[var7];
                        var7 = var2.bind(var3)(var7);
                        var7 = var7.SPAN_STATUS_ERROR;
                        var1.code = var7;
                        var7 = 'internal_error';
                        var1.message = var7;
                        var1 = var5.bind(var6)(var1);
                        var1 = 7;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.captureException;
                        var1 = {};
                        var4 = {
                            'handled': false,
                            'type': 'auto.ai.langgraph.error'
                        };
                        var1.mechanism = var4;
                        var1 = var2.bind(var3)(var0, var1);
                        throw var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2.apply = var0;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var6 = var1;
        var4 = var2;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot4 = var1;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var3 = function(arg0, arg1) { // Original name: instrumentLangGraph, environment: var3
        _fun10076: for (var _fun10076_ip = 0;;) switch (_fun10076_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                if (var4) {
                    _fun10076_ip = 11;
                    continue _fun10076
                }
            case 9:
                var4 = {};
            case 11:
                var3 = _closure1_slot4;
                var2 = var0.compile;
                var1 = var2.bind;
                var2 = var1.bind(var2)(var0);
                var1 = undefined;
                var1 = var3.bind(var1)(var2, var4);
                var0.compile = var1;
                return var0;
        }
    };
    var2.instrumentLangGraph = var3;
    var2.instrumentStateGraphCompile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 77, 864, 838, 978, 955, 839, 867, 979, 975, 958]);