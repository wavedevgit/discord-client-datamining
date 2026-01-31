// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun10082: for (var _fun10082_ip = 0;;) switch (_fun10082_ip) {
            case 0:
                var0 = arg0;
                var7 = undefined;
                var1 = undefined;
                var8 = undefined;
                var9 = undefined;
                if (!var0) {
                    _fun10082_ip = 179;
                    continue _fun10082
                }
            case 17:
                var3 = var0.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun10082_ip = 179;
                    continue _fun10082
                }
            case 31:
                var1 = new Array(0);
                var6 = var0;
                var3 = var6[Symbol.iterator];
                var6 = var3().next;
                var4 = global;
                var0 = 'object';
            case 50:
                var10 = var6().value;
                var11 = var3;
                if (!(var11 !== var7)) {
                    _fun10082_ip = 157;
                    continue _fun10082
                }
            case 61: // try_start_0
                var8 = var10;
                if (!var10) {
                    _fun10082_ip = 148;
                    continue _fun10082
                }
            case 67:
                var10 = var8;
                var10 = typeof var10;
                if (!(var0 === var10)) {
                    _fun10082_ip = 148;
                    continue _fun10082
                }
            case 77:
                var10 = var8;
                var11 = var10.tool_calls;
                var9 = var11;
                var10 = var11;
                if (!var11) {
                    _fun10082_ip = 114;
                    continue _fun10082
                }
            case 95:
                var13 = var4.Array;
                var12 = var13.isArray;
                var11 = var9;
                var10 = var12.bind(var13)(var11);
            case 114:
                if (!var10) {
                    _fun10082_ip = 148;
                    continue _fun10082
                }
            case 117:
                var13 = var1;
                var12 = var13.push;
                var11 = var12.apply;
                var14 = _closure1_slot2;
                var10 = var9;
                var10 = var14.bind(var7)(var10);
                var10 = var11.bind(var12)(var13, var10);
            case 148: // try_end0
                _fun10082_ip = 50;
                continue _fun10082;
            case 150: // catch_target0
                CatchBlockStart(arg_register = 0);
                var3.return();
                throw var0;
            case 157:
                var0 = var1;
                var0 = var0.length;
                var2 = var0 > var2;
                var0 = null;
                if (!var2) {
                    _fun10082_ip = 177;
                    continue _fun10082
                }
            case 174:
                var0 = var1;
            case 177:
                return var0;
            case 179:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var4 = function arg0() {
        _fun10083: for (var _fun10083_ip = 0;;) switch (_fun10083_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.usage_metadata;
                if (!var1) {
                    _fun10083_ip = 32;
                    continue _fun10083
                }
            case 12:
                var1 = var0.usage_metadata;
                var2 = 'object';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun10083_ip = 220;
                    continue _fun10083
                }
            case 32:
                var1 = var0.response_metadata;
                var4 = 0;
                var3 = 0;
                var2 = 0;
                if (!var1) {
                    _fun10083_ip = 201;
                    continue _fun10083
                }
            case 50:
                var1 = var0.response_metadata;
                var6 = 'object';
                var1 = typeof var1;
                var4 = 0;
                var3 = 0;
                var2 = 0;
                if (!(var6 === var1)) {
                    _fun10083_ip = 201;
                    continue _fun10083
                }
            case 76:
                var1 = var0.response_metadata;
                var5 = var1.tokenUsage;
                var4 = 0;
                var3 = 0;
                var2 = 0;
                if (!var5) {
                    _fun10083_ip = 201;
                    continue _fun10083
                }
            case 97:
                var5 = var1.tokenUsage;
                var5 = typeof var5;
                var4 = 0;
                var3 = 0;
                var2 = 0;
                if (!(var6 === var5)) {
                    _fun10083_ip = 201;
                    continue _fun10083
                }
            case 116:
                var1 = var1.tokenUsage;
                var5 = var1.promptTokens;
                var8 = 'number';
                var5 = typeof var5;
                var6 = 0;
                if (!(var8 === var5)) {
                    _fun10083_ip = 147;
                    continue _fun10083
                }
            case 141:
                var6 = var1.promptTokens;
            case 147:
                var5 = var1.completionTokens;
                var7 = typeof var5;
                var5 = 0;
                if (!(var8 === var7)) {
                    _fun10083_ip = 168;
                    continue _fun10083
                }
            case 162:
                var5 = var1.completionTokens;
            case 168:
                var7 = var1.totalTokens;
                var7 = typeof var7;
                var4 = var6;
                var3 = var5;
                var2 = 0;
                if (!(var8 === var7)) {
                    _fun10083_ip = 201;
                    continue _fun10083
                }
            case 189:
                var2 = var1.totalTokens;
                var4 = var6;
                var3 = var5;
            case 201:
                var1 = {};
                var1.inputTokens = var4;
                var1.outputTokens = var3;
                var1.totalTokens = var2;
                return var1;
            case 220:
                var0 = var0.usage_metadata;
                var2 = var0.input_tokens;
                var5 = 'number';
                var2 = typeof var2;
                var3 = 0;
                if (!(var5 === var2)) {
                    _fun10083_ip = 251;
                    continue _fun10083
                }
            case 245:
                var3 = var0.input_tokens;
            case 251:
                var2 = var0.output_tokens;
                var4 = typeof var2;
                var2 = 0;
                if (!(var5 === var4)) {
                    _fun10083_ip = 272;
                    continue _fun10083
                }
            case 266:
                var2 = var0.output_tokens;
            case 272:
                var4 = var0.total_tokens;
                var4 = typeof var4;
                var1 = 0;
                if (!(var5 === var4)) {
                    _fun10083_ip = 293;
                    continue _fun10083
                }
            case 287:
                var1 = var0.total_tokens;
            case 293:
                var0 = {};
                var0.inputTokens = var3;
                var0.outputTokens = var2;
                var0.totalTokens = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var5 = function arg0, arg1() {
        _fun10084: for (var _fun10084_ip = 0;;) switch (_fun10084_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var1 = var0.response_metadata;
                if (!var1) {
                    _fun10084_ip = 208;
                    continue _fun10084
                }
            case 18:
                var1 = var0.response_metadata;
                var2 = 'object';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun10084_ip = 208;
                    continue _fun10084
                }
            case 38:
                var0 = var0.response_metadata;
                var1 = var0.model_name;
                if (!var1) {
                    _fun10084_ip = 70;
                    continue _fun10084
                }
            case 53:
                var2 = var0.model_name;
                var4 = 'string';
                var2 = typeof var2;
                var1 = var4 === var2;
            case 70:
                if (!var1) {
                    _fun10084_ip = 122;
                    continue _fun10084
                }
            case 73:
                var4 = var3.setAttribute;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var1 = var0.model_name;
                var1 = var4.bind(var3)(var2, var1);
            case 122:
                var1 = var0.finish_reason;
                if (!var1) {
                    _fun10084_ip = 148;
                    continue _fun10084
                }
            case 131:
                var2 = var0.finish_reason;
                var4 = 'string';
                var2 = typeof var2;
                var1 = var4 === var2;
            case 148:
                if (!var1) {
                    _fun10084_ip = 208;
                    continue _fun10084
                }
            case 151:
                var2 = var3.setAttribute;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                var4 = var0.finish_reason;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 208:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var5;
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
    var2.extractModelMetadata = var5;
    var2.extractTokenUsageFromMessage = var4;
    var2.extractToolCalls = var3;
    var3 = function arg0() {
        _fun10085: for (var _fun10085_ip = 0;;) switch (_fun10085_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.builder;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun10085_ip = 195;
                    continue _fun10085
                }
            case 18:
                var2 = var2.nodes;
                if (!(var0 != var2)) {
                    _fun10085_ip = 195;
                    continue _fun10085
                }
            case 31:
                var2 = var2.tools;
                if (!(var0 != var2)) {
                    _fun10085_ip = 195;
                    continue _fun10085
                }
            case 44:
                var2 = var2.runnable;
                if (!(var0 != var2)) {
                    _fun10085_ip = 195;
                    continue _fun10085
                }
            case 57:
                var2 = var2.tools;
                if (!var2) {
                    _fun10085_ip = 195;
                    continue _fun10085
                }
            case 69:
                var1 = var1.builder;
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun10085_ip = 135;
                    continue _fun10085
                }
            case 84:
                var1 = var1.nodes;
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun10085_ip = 135;
                    continue _fun10085
                }
            case 99:
                var1 = var1.tools;
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun10085_ip = 135;
                    continue _fun10085
                }
            case 114:
                var1 = var1.runnable;
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun10085_ip = 135;
                    continue _fun10085
                }
            case 129:
                var4 = var1.tools;
            case 135:
                var1 = null;
                if (!var4) {
                    _fun10085_ip = 193;
                    continue _fun10085
                }
            case 140:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                var1 = null;
                if (!var2) {
                    _fun10085_ip = 193;
                    continue _fun10085
                }
            case 163:
                var3 = var4.length;
                var2 = 0;
                var1 = null;
                if (!(var2 !== var3)) {
                    _fun10085_ip = 193;
                    continue _fun10085
                }
            case 176:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun10086: for (var _fun10086_ip = 0;;) switch (_fun10086_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var5 = var2.lc_kwargs;
                            var3 = null;
                            var6 = var3 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun10086_ip = 27;
                                continue _fun10086
                            }
                        case 22:
                            var4 = var5.name;
                        case 27:
                            var0.name = var4;
                            var5 = var2.lc_kwargs;
                            var6 = var3 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun10086_ip = 51;
                                continue _fun10086
                            }
                        case 46:
                            var4 = var5.description;
                        case 51:
                            var0.description = var4;
                            var2 = var2.lc_kwargs;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun10086_ip = 76;
                                continue _fun10086
                            }
                        case 70:
                            var1 = var2.schema;
                        case 76:
                            var0.schema = var1;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 193:
                return var1;
            case 195:
                return var0;
        }
    };
    var2.extractToolsFromCompiledGraph = var3;
    var1 = function arg0, arg1, arg2() {
        _fun10087: for (var _fun10087_ip = 0;;) switch (_fun10087_ip) {
            case 0:
                var6 = arg1;
                var2 = arg2;
                var3 = arg0;
                var0 = undefined;
                var7 = undefined;
                var4 = undefined;
                var1 = undefined;
                var5 = null;
                var8 = var5 == var2;
                var9 = undefined;
                if (var8) {
                    _fun10087_ip = 34;
                    continue _fun10087
                }
            case 28:
                var9 = var2.messages;
            case 34:
                if (!var9) {
                    _fun10087_ip = 511;
                    continue _fun10087
                }
            case 40:
                var8 = global;
                var10 = var8.Array;
                var2 = var10.isArray;
                var2 = var2.bind(var10)(var9);
                if (!var2) {
                    _fun10087_ip = 511;
                    continue _fun10087
                }
            case 64:
                var10 = var5 == var6;
                var2 = undefined;
                if (var10) {
                    _fun10087_ip = 78;
                    continue _fun10087
                }
            case 73:
                var2 = var6.length;
            case 78:
                var10 = var5 != var2;
                var5 = 0;
                var6 = 0;
                if (!var10) {
                    _fun10087_ip = 92;
                    continue _fun10087
                }
            case 89:
                var6 = var2;
            case 92:
                var2 = var9.length;
                if (!(!(var2 > var6))) {
                    _fun10087_ip = 107;
                    continue _fun10087
                }
            case 101:
                var10 = new Array(0);
                _fun10087_ip = 117;
                continue _fun10087;
            case 107:
                var2 = var9.slice;
                var10 = var2.bind(var9)(var6);
            case 117:
                var2 = var10.length;
                if (!(var5 !== var2)) {
                    _fun10087_ip = 511;
                    continue _fun10087
                }
            case 129:
                var6 = _closure1_slot3;
                var14 = var6.bind(var0)(var10);
                if (!var14) {
                    _fun10087_ip = 202;
                    continue _fun10087
                }
            case 144:
                var12 = var3;
                var11 = var12.setAttribute;
                var9 = _closure1_slot0;
                var13 = _closure1_slot1;
                var6 = 1;
                var6 = var13[var6];
                var6 = var9.bind(var0)(var6);
                var9 = var6.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                var13 = var8.JSON;
                var6 = var13.stringify;
                var6 = var6.bind(var13)(var14);
                var6 = var11.bind(var12)(var9, var6);
            case 202:
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 2;
                var6 = var9[var6];
                var11 = var13.bind(var0)(var6);
                var6 = var11.normalizeLangChainMessages;
                var14 = var6.bind(var11)(var10);
                var12 = var3;
                var11 = var12.setAttribute;
                var6 = 1;
                var9 = var9[var6];
                var9 = var13.bind(var0)(var9);
                var9 = var9.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                var13 = var8.JSON;
                var8 = var13.stringify;
                var8 = var8.bind(var13)(var14);
                var8 = var11.bind(var12)(var9, var8);
                var7 = 0;
                var4 = 0;
                var1 = 0;
                var8 = var10;
                var9 = var8[Symbol.iterator];
                var8 = var9().next;
            case 295:
                var12 = var8().value;
                var10 = var9;
                if (!(var10 !== var0)) {
                    _fun10087_ip = 376;
                    continue _fun10087
                }
            case 306: // try_start_0
                var10 = _closure1_slot4;
                var10 = var10.bind(var0)(var12);
                var13 = var7;
                var11 = var10.inputTokens;
                var7 = var13 + var11;
                var13 = var4;
                var11 = var10.outputTokens;
                var4 = var13 + var11;
                var11 = var1;
                var10 = var10.totalTokens;
                var1 = var11 + var10;
                var11 = _closure1_slot5;
                var10 = var3;
                var10 = var11.bind(var0)(var10, var12);
            case 367: // try_end0
                _fun10087_ip = 295;
                continue _fun10087;
            case 369: // catch_target0
                CatchBlockStart(arg_register = 8);
                var9.return();
                throw var8;
            case 376:
                var8 = var7;
                if (!(var8 > var5)) {
                    _fun10087_ip = 421;
                    continue _fun10087
                }
            case 383:
                var10 = var3;
                var9 = var10.setAttribute;
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var6];
                var8 = var11.bind(var0)(var8);
                var8 = var8.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var7 = var9.bind(var10)(var8, var7);
            case 421:
                var7 = var4;
                if (!(var7 > var5)) {
                    _fun10087_ip = 466;
                    continue _fun10087
                }
            case 428:
                var9 = var3;
                var8 = var9.setAttribute;
                var10 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var6];
                var7 = var10.bind(var0)(var7);
                var7 = var7.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var4 = var8.bind(var9)(var7, var4);
            case 466:
                var4 = var1;
                if (!(var4 > var5)) {
                    _fun10087_ip = 511;
                    continue _fun10087
                }
            case 473:
                var4 = var3;
                var3 = var4.setAttribute;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                var1 = var3.bind(var4)(var2, var1);
            case 511:
                return var0;
        }
    };
    var2.setResponseAttributes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 955, 975]);