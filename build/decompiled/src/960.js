// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var5 = function arg0() {
        _fun9891: for (var _fun9891_ip = 0;;) switch (_fun9891_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.includes;
                var0 = 'chat.completions';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun9891_ip = 172;
                    continue _fun9891
                }
            case 25:
                var1 = var2.includes;
                var0 = 'responses';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun9891_ip = 133;
                    continue _fun9891
                }
            case 42:
                var1 = var2.includes;
                var0 = 'embeddings';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun9891_ip = 94;
                    continue _fun9891
                }
            case 61:
                var1 = var2.split;
                var0 = '.';
                var1 = var1.bind(var2)(var0);
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun9891_ip = 92;
                    continue _fun9891
                }
            case 88:
                var0 = 'unknown';
            case 92:
                _fun9891_ip = 131;
                continue _fun9891;
            case 94:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.OPENAI_OPERATIONS;
                var0 = var1.EMBEDDINGS;
            case 131:
                _fun9891_ip = 170;
                continue _fun9891;
            case 133:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.OPENAI_OPERATIONS;
                var0 = var1.RESPONSES;
            case 170:
                _fun9891_ip = 209;
                continue _fun9891;
            case 172:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.OPENAI_OPERATIONS;
                var0 = var1.CHAT;
            case 209:
                return var0;
        }
    };
    var _closure1_slot3 = var5;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun9892: for (var _fun9892_ip = 0;;) switch (_fun9892_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var0 = undefined;
                if (!(var0 !== var8)) {
                    _fun9892_ip = 93;
                    continue _fun9892
                }
            case 18:
                var2 = var3.setAttributes;
                var5 = _closure1_slot2;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 1;
                var4 = var10[var1];
                var4 = var9.bind(var0)(var4);
                var11 = var4.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE;
                var4 = {};
                var4 = var5.bind(var0)(var4, var11, var8);
                var1 = var10[var1];
                var1 = var9.bind(var0)(var1);
                var1 = var1.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var1 = var5.bind(var0)(var4, var1, var8);
                var1 = var2.bind(var3)(var1);
            case 93:
                if (!(var0 !== var7)) {
                    _fun9892_ip = 172;
                    continue _fun9892
                }
            case 97:
                var2 = var3.setAttributes;
                var5 = _closure1_slot2;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 1;
                var4 = var9[var1];
                var4 = var8.bind(var0)(var4);
                var10 = var4.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE;
                var4 = {};
                var4 = var5.bind(var0)(var4, var10, var7);
                var1 = var9[var1];
                var1 = var8.bind(var0)(var1);
                var1 = var1.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var1 = var5.bind(var0)(var4, var1, var7);
                var1 = var2.bind(var3)(var1);
            case 172:
                if (!(var0 !== var6)) {
                    _fun9892_ip = 229;
                    continue _fun9892
                }
            case 176:
                var2 = var3.setAttributes;
                var5 = _closure1_slot2;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var1 = var4.bind(var0)(var1);
                var4 = var1.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                var1 = {};
                var1 = var5.bind(var0)(var1, var4, var6);
                var1 = var2.bind(var3)(var1);
            case 229:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var4 = function arg0, arg1, arg2, arg3() {
        var3 = arg0;
        var11 = arg1;
        var10 = arg2;
        var7 = var3.setAttributes;
        var9 = _closure1_slot2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 1;
        var2 = var5[var1];
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var8 = var2.OPENAI_RESPONSE_ID_ATTRIBUTE;
        var2 = {};
        var8 = var9.bind(var0)(var2, var8, var11);
        var2 = var5[var1];
        var2 = var4.bind(var0)(var2);
        var2 = var2.GEN_AI_RESPONSE_ID_ATTRIBUTE;
        var2 = var9.bind(var0)(var8, var2, var11);
        var2 = var7.bind(var3)(var2);
        var7 = var3.setAttributes;
        var9 = _closure1_slot2;
        var2 = var5[var1];
        var2 = var4.bind(var0)(var2);
        var8 = var2.OPENAI_RESPONSE_MODEL_ATTRIBUTE;
        var2 = {};
        var8 = var9.bind(var0)(var2, var8, var10);
        var2 = var5[var1];
        var2 = var4.bind(var0)(var2);
        var2 = var2.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
        var2 = var9.bind(var0)(var8, var2, var10);
        var2 = var7.bind(var3)(var2);
        var2 = var3.setAttributes;
        var6 = _closure1_slot2;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var5 = var1.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE;
        var1 = global;
        var7 = var1.Date;
        var4 = 1000;
        var1 = arg3;
        var14 = var4 * var1;
        var4 = var7.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var7
            }
        });
        var15 = var4;
        var1 = new var15[var7](var14, var13);
        var4 = var1 instanceof Object ? var1 : var4;
        var1 = var4.toISOString;
        var4 = var1.bind(var4)();
        var1 = {};
        var1 = var6.bind(var0)(var1, var5, var4);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot5 = var4;
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var6 = var6.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var2, var7, var6);
    var6 = function arg0, arg1, arg2() {
        _fun9894: for (var _fun9894_ip = 0;;) switch (_fun9894_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var8 = _closure1_slot5;
                var15 = var6.id;
                var14 = var6.model;
                var13 = var6.created;
                var0 = undefined;
                var17 = undefined;
                var16 = var3;
                var1 = var17[var8](var16, var15, var14, var13, var12);
                var1 = var6.usage;
                if (!var1) {
                    _fun9894_ip = 101;
                    continue _fun9894
                }
            case 52:
                var8 = _closure1_slot4;
                var1 = var6.usage;
                var15 = var1.prompt_tokens;
                var1 = var6.usage;
                var14 = var1.completion_tokens;
                var1 = var6.usage;
                var13 = var1.total_tokens;
                var17 = undefined;
                var16 = var3;
                var1 = var17[var8](var16, var15, var14, var13, var12);
            case 101:
                var1 = global;
                var8 = var1.Array;
                var7 = var8.isArray;
                var5 = var6.choices;
                var5 = var7.bind(var8)(var5);
                if (!var5) {
                    _fun9894_ip = 376;
                    continue _fun9894
                }
            case 131:
                var8 = var6.choices;
                var7 = var8.map;
                var5 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.finish_reason;
                    return var0;
                };
                var8 = var7.bind(var8)(var5);
                var7 = var8.filter;
                var5 = function(arg0) { // Environment: var2
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var12 = var7.bind(var8)(var5);
                var7 = var12.length;
                var5 = 0;
                if (!(var7 > var5)) {
                    _fun9894_ip = 245;
                    continue _fun9894
                }
            case 178:
                var8 = var3.setAttributes;
                var11 = _closure1_slot2;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 1;
                var7 = var10[var7];
                var7 = var9.bind(var0)(var7);
                var10 = var7.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                var9 = var1.JSON;
                var7 = var9.stringify;
                var9 = var7.bind(var9)(var12);
                var7 = {};
                var7 = var11.bind(var0)(var7, var10, var9);
                var7 = var8.bind(var3)(var7);
            case 245:
                var7 = arg2;
                if (!var7) {
                    _fun9894_ip = 376;
                    continue _fun9894
                }
            case 254:
                var8 = var6.choices;
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var2
                    _fun9897: for (var _fun9897_ip = 0;;) switch (_fun9897_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.message;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun9897_ip = 25;
                                continue _fun9897
                            }
                        case 19:
                            var0 = var1.tool_calls;
                        case 25:
                            return var0;
                    }
                };
                var7 = var7.bind(var8)(var6);
                var6 = var7.filter;
                var2 = function(arg0) { // Environment: var2
                    _fun9898: for (var _fun9898_ip = 0;;) switch (_fun9898_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = global;
                            var2 = var0.Array;
                            var0 = var2.isArray;
                            var0 = var0.bind(var2)(var1);
                            if (!var0) {
                                _fun9898_ip = 35;
                                continue _fun9898
                            }
                        case 24:
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 35:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var2);
                var2 = var6.flat;
                var7 = var2.bind(var6)();
                var2 = var7.length;
                if (!(var2 > var5)) {
                    _fun9894_ip = 376;
                    continue _fun9894
                }
            case 309:
                var2 = var3.setAttributes;
                var6 = _closure1_slot2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 1;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                var4 = var1.JSON;
                var1 = var4.stringify;
                var4 = var1.bind(var4)(var7);
                var1 = {};
                var1 = var6.bind(var0)(var1, var5, var4);
                var1 = var2.bind(var3)(var1);
            case 376:
                return var0;
        }
    };
    var2.addChatCompletionAttributes = var6;
    var6 = function arg0, arg1() {
        _fun9899: for (var _fun9899_ip = 0;;) switch (_fun9899_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var5 = var4.setAttributes;
                var8 = _closure1_slot2;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 1;
                var7 = var9[var3];
                var0 = undefined;
                var7 = var6.bind(var0)(var7);
                var11 = var7.OPENAI_RESPONSE_MODEL_ATTRIBUTE;
                var10 = var1.model;
                var7 = {};
                var7 = var8.bind(var0)(var7, var11, var10);
                var3 = var9[var3];
                var3 = var6.bind(var0)(var3);
                var6 = var3.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var3 = var1.model;
                var3 = var8.bind(var0)(var7, var6, var3);
                var3 = var5.bind(var4)(var3);
                var3 = var1.usage;
                if (!var3) {
                    _fun9899_ip = 143;
                    continue _fun9899
                }
            case 104:
                var3 = _closure1_slot4;
                var2 = var1.usage;
                var14 = var2.prompt_tokens;
                var1 = var1.usage;
                var12 = var1.total_tokens;
                var16 = undefined;
                var15 = var4;
                var13 = undefined;
                var1 = var16[var3](var15, var14, var13, var12, var11);
            case 143:
                return var0;
        }
    };
    var2.addEmbeddingsAttributes = var6;
    var6 = function arg0, arg1, arg2() {
        _fun9900: for (var _fun9900_ip = 0;;) switch (_fun9900_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var7 = _closure1_slot5;
                var13 = var2.id;
                var12 = var2.model;
                var11 = var2.created_at;
                var0 = undefined;
                var15 = undefined;
                var14 = var3;
                var1 = var15[var7](var14, var13, var12, var11, var10);
                var1 = var2.status;
                if (!var1) {
                    _fun9900_ip = 131;
                    continue _fun9900
                }
            case 49:
                var5 = var3.setAttributes;
                var8 = _closure1_slot2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var7 = var1.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                var1 = global;
                var9 = var1.JSON;
                var6 = var9.stringify;
                var10 = var2.status;
                var1 = new Array(1);
                var1[0] = var10;
                var6 = var6.bind(var9)(var1);
                var1 = {};
                var1 = var8.bind(var0)(var1, var7, var6);
                var1 = var5.bind(var3)(var1);
            case 131:
                var1 = var2.usage;
                if (!var1) {
                    _fun9900_ip = 189;
                    continue _fun9900
                }
            case 140:
                var7 = _closure1_slot4;
                var1 = var2.usage;
                var13 = var1.input_tokens;
                var1 = var2.usage;
                var12 = var1.output_tokens;
                var1 = var2.usage;
                var11 = var1.total_tokens;
                var15 = undefined;
                var14 = var3;
                var1 = var15[var7](var14, var13, var12, var11, var10);
            case 189:
                var1 = arg2;
                if (!var1) {
                    _fun9900_ip = 341;
                    continue _fun9900
                }
            case 198:
                var1 = global;
                var7 = var1.Array;
                var6 = var7.isArray;
                var5 = var2.output;
                var5 = var6.bind(var7)(var5);
                if (!var5) {
                    _fun9900_ip = 341;
                    continue _fun9900
                }
            case 225:
                var5 = var2.output;
                var6 = var5.length;
                var5 = 0;
                if (!(var6 > var5)) {
                    _fun9900_ip = 341;
                    continue _fun9900
                }
            case 242:
                var7 = var2.output;
                var6 = var7.filter;
                var2 = function(arg0) { // Environment: var2
                    _fun9901: for (var _fun9901_ip = 0;;) switch (_fun9901_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = 'object';
                            var0 = typeof var1;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun9901_ip = 23;
                                continue _fun9901
                            }
                        case 17:
                            var2 = null;
                            var0 = var2 !== var1;
                        case 23:
                            if (!var0) {
                                _fun9901_ip = 41;
                                continue _fun9901
                            }
                        case 26:
                            var2 = var1.type;
                            var1 = 'function_call';
                            var0 = var1 === var2;
                        case 41:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var2);
                var2 = var7.length;
                if (!(var2 > var5)) {
                    _fun9900_ip = 341;
                    continue _fun9900
                }
            case 274:
                var2 = var3.setAttributes;
                var6 = _closure1_slot2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 1;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                var4 = var1.JSON;
                var1 = var4.stringify;
                var4 = var1.bind(var4)(var7);
                var1 = {};
                var1 = var6.bind(var0)(var1, var5, var4);
                var1 = var2.bind(var3)(var1);
            case 341:
                return var0;
        }
    };
    var2.addResponsesApiAttributes = var6;
    var6 = function arg0, arg1() {
        _fun9902: for (var _fun9902_ip = 0;;) switch (_fun9902_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var4;
                if (!var5) {
                    _fun9902_ip = 40;
                    continue _fun9902
                }
            case 12:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '.';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 40:
                return var0;
        }
    };
    var2.buildMethodPath = var6;
    var2.getOperationName = var5;
    var5 = function arg0() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var2 = var2.bind(var1)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'gen_ai.';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var2.getSpanOperation = var5;
    var5 = function arg0() {
        _fun9904: for (var _fun9904_ip = 0;;) switch (_fun9904_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun9904_ip = 23;
                    continue _fun9904
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun9904_ip = 34;
                    continue _fun9904
                }
            case 26:
                var2 = 'object';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun9904_ip = 53;
                    continue _fun9904
                }
            case 37:
                var2 = var1.object;
                var1 = 'chat.completion.chunk';
                var0 = var1 === var2;
            case 53:
                return var0;
        }
    };
    var2.isChatCompletionChunk = var5;
    var5 = function arg0() {
        _fun9905: for (var _fun9905_ip = 0;;) switch (_fun9905_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun9905_ip = 23;
                    continue _fun9905
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun9905_ip = 34;
                    continue _fun9905
                }
            case 26:
                var2 = 'object';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun9905_ip = 53;
                    continue _fun9905
                }
            case 37:
                var2 = var1.object;
                var1 = 'chat.completion';
                var0 = var1 === var2;
            case 53:
                return var0;
        }
    };
    var2.isChatCompletionResponse = var5;
    var5 = function arg0() {
        _fun9906: for (var _fun9906_ip = 0;;) switch (_fun9906_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun9906_ip = 98;
                    continue _fun9906
                }
            case 9:
                var0 = 'object';
                var2 = typeof var1;
                if (!(var0 === var2)) {
                    _fun9906_ip = 98;
                    continue _fun9906
                }
            case 20:
                var0 = var0 in var1;
                if (!var0) {
                    _fun9906_ip = 98;
                    continue _fun9906
                }
            case 27:
                var2 = var1.object;
                var0 = 'list';
                var0 = var0 === var2;
                if (!var0) {
                    _fun9906_ip = 61;
                    continue _fun9906
                }
            case 44:
                var2 = var1.model;
                var3 = 'string';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 61:
                if (!var0) {
                    _fun9906_ip = 96;
                    continue _fun9906
                }
            case 64:
                var2 = var1.model;
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.includes;
                var1 = 'embedding';
                var0 = var2.bind(var3)(var1);
            case 96:
                return var0;
            case 98:
                var0 = false;
                return var0;
        }
    };
    var2.isEmbeddingsResponse = var5;
    var5 = function arg0() {
        _fun9907: for (var _fun9907_ip = 0;;) switch (_fun9907_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun9907_ip = 23;
                    continue _fun9907
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun9907_ip = 34;
                    continue _fun9907
                }
            case 26:
                var2 = 'object';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun9907_ip = 51;
                    continue _fun9907
                }
            case 37:
                var2 = var1.object;
                var1 = 'response';
                var0 = var1 === var2;
            case 51:
                return var0;
        }
    };
    var2.isResponsesApiResponse = var5;
    var5 = function arg0() {
        _fun9908: for (var _fun9908_ip = 0;;) switch (_fun9908_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun9908_ip = 23;
                    continue _fun9908
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun9908_ip = 34;
                    continue _fun9908
                }
            case 26:
                var2 = 'type';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun9908_ip = 53;
                    continue _fun9908
                }
            case 37:
                var2 = var1.type;
                var3 = 'string';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 53:
                if (!var0) {
                    _fun9908_ip = 78;
                    continue _fun9908
                }
            case 56:
                var3 = var1.type;
                var2 = var3.startsWith;
                var1 = 'response.';
                var0 = var2.bind(var3)(var1);
            case 78:
                return var0;
        }
    };
    var2.isResponsesApiStreamEvent = var5;
    var2.setCommonResponseAttributes = var4;
    var2.setTokenUsageAttributes = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.INSTRUMENTED_METHODS;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.shouldInstrument = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 955, 961]);