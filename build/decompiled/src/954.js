// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function(arg0) { // Original name: _INTERNAL_cleanupToolCallSpan, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.toolCallSpanMap;
        var2 = var3.delete;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1._INTERNAL_cleanupToolCallSpan = var2;
    var2 = function(arg0) { // Original name: _INTERNAL_getSpanForToolCallId, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.toolCallSpanMap;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1._INTERNAL_getSpanForToolCallId = var2;
    var2 = function(arg0, arg1) { // Original name: accumulateTokensForParent, environment: var0
        _fun9843: for (var _fun9843_ip = 0;;) switch (_fun9843_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = var1.parent_span_id;
                if (!var2) {
                    _fun9843_ip = 178;
                    continue _fun9843
                }
            case 18:
                var8 = var1.data;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var6 = var7[var0];
                var4 = undefined;
                var6 = var5.bind(var4)(var6);
                var6 = var6.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var6 = var8[var6];
                var1 = var1.data;
                var0 = var7[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var4 = var1[var0];
                var5 = 'number';
                var0 = typeof var6;
                var0 = var5 === var0;
                if (var0) {
                    _fun9843_ip = 102;
                    continue _fun9843
                }
            case 95:
                var1 = typeof var4;
                if (!(var5 === var1)) {
                    _fun9843_ip = 178;
                    continue _fun9843
                }
            case 102:
                var1 = var3.get;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun9843_ip = 125;
                    continue _fun9843
                }
            case 115:
                var1 = {
                    'inputTokens': 0,
                    'outputTokens': 0
                };
            case 125:
                if (!var0) {
                    _fun9843_ip = 144;
                    continue _fun9843
                }
            case 128:
                var0 = var1.inputTokens;
                var0 = var0 + var6;
                var1.inputTokens = var0;
            case 144:
                var0 = typeof var4;
                if (!(var5 === var0)) {
                    _fun9843_ip = 167;
                    continue _fun9843
                }
            case 151:
                var0 = var1.outputTokens;
                var0 = var0 + var4;
                var1.outputTokens = var0;
            case 167:
                var0 = var3.set;
                var0 = var0.bind(var3)(var2, var1);
            case 178:
                var0 = undefined;
                return var0;
        }
    };
    var1.accumulateTokensForParent = var2;
    var2 = function(arg0, arg1) { // Original name: applyAccumulatedTokens, environment: var0
        _fun9844: for (var _fun9844_ip = 0;;) switch (_fun9844_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var2 = var3.get;
                var0 = var1.span_id;
                var0 = var2.bind(var3)(var0);
                var2 = var0;
                if (!var2) {
                    _fun9844_ip = 33;
                    continue _fun9844
                }
            case 28:
                var2 = var1.data;
            case 33:
                if (!var2) {
                    _fun9844_ip = 200;
                    continue _fun9844
                }
            case 39:
                var2 = var0.inputTokens;
                var4 = 0;
                if (!(var2 > var4)) {
                    _fun9844_ip = 94;
                    continue _fun9844
                }
            case 51:
                var5 = var1.data;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var4];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var3 = var2.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var2 = var0.inputTokens;
                var5[var3] = var2;
            case 94:
                var2 = var0.outputTokens;
                if (!(var2 > var4)) {
                    _fun9844_ip = 147;
                    continue _fun9844
                }
            case 104:
                var5 = var1.data;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var4];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var3 = var2.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var2 = var0.outputTokens;
                var5[var3] = var2;
            case 147:
                var2 = var0.inputTokens;
                var2 = var2 > var4;
                if (var2) {
                    _fun9844_ip = 170;
                    continue _fun9844
                }
            case 160:
                var3 = var0.outputTokens;
                var2 = var3 > var4;
            case 170:
                if (!var2) {
                    _fun9844_ip = 200;
                    continue _fun9844
                }
            case 173:
                var1 = var1.data;
                var2 = var0.inputTokens;
                var0 = var0.outputTokens;
                var0 = var2 + var0;
                var1['gen_ai.usage.total_tokens'] = var0;
            case 200:
                var0 = undefined;
                return var0;
        }
    };
    var1.applyAccumulatedTokens = var2;
    var0 = function(arg0) { // Original name: convertAvailableToolsToJsonString, environment: var0
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun9846: for (var _fun9846_ip = 0;;) switch (_fun9846_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1;
                    var2 = 'string';
                    var1 = typeof var1;
                    if (!(var2 !== var1)) {
                        _fun9846_ip = 22;
                        continue _fun9846
                    }
                case 17:
                    var1 = var0;
                    return var1;
                case 22: // try_start_0
                    var1 = global;
                    var3 = var1.JSON;
                    var2 = var3.parse;
                    var1 = var0;
                    var1 = var2.bind(var3)(var1);
                case 44: // try_end0
                    return var1;
                case 46: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var0 = global;
        var1 = var0.JSON;
        var0 = var1.stringify;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.convertAvailableToolsToJsonString = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [955, 956]);