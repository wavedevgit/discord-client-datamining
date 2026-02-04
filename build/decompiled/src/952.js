// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        var4 = arg0;
        var3 = var4.setAttribute;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
        var1 = 'auto.vercelai.otel';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun9838: for (var _fun9838_ip = 0;;) switch (_fun9838_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.spanToJSON;
                var4 = var1.bind(var4)(var3);
                var1 = var4.data;
                var6 = var4.description;
                if (!var6) {
                    _fun9838_ip = 1993;
                    continue _fun9838
                }
            case 55:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 2;
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_TOOL_CALL_NAME_ATTRIBUTE;
                var4 = var1[var4];
                if (!var4) {
                    _fun9838_ip = 131;
                    continue _fun9838
                }
            case 88:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_TOOL_CALL_ID_ATTRIBUTE;
                var4 = var1[var4];
                if (!var4) {
                    _fun9838_ip = 131;
                    continue _fun9838
                }
            case 118:
                var4 = 'ai.toolCall';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1751;
                    continue _fun9838
                }
            case 131:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var8 = var4[var7];
                var8 = var5.bind(var0)(var8);
                var8 = var8.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var8];
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_MODEL_PROVIDER_ATTRIBUTE;
                var5 = var1[var4];
                var9 = 'string';
                var4 = typeof var8;
                var4 = var9 === var4;
                if (!var4) {
                    _fun9838_ip = 198;
                    continue _fun9838
                }
            case 191:
                var10 = typeof var5;
                var4 = var9 === var10;
            case 198:
                if (!var4) {
                    _fun9838_ip = 204;
                    continue _fun9838
                }
            case 201:
                var4 = var8;
            case 204:
                if (!var4) {
                    _fun9838_ip = 210;
                    continue _fun9838
                }
            case 207:
                var4 = var5;
            case 210:
                if (!var4) {
                    _fun9838_ip = 1993;
                    continue _fun9838
                }
            case 216:
                var5 = _closure1_slot2;
                var4 = 'auto.vercelai.otel';
                var4 = var5.bind(var0)(var3, var4);
                var5 = var6.replace;
                var4 = 'ai.';
                var11 = '';
                var10 = var5.bind(var6)(var4, var11);
                var5 = var3.setAttribute;
                var4 = 'ai.pipeline.name';
                var4 = var5.bind(var3)(var4, var10);
                var4 = var3.updateName;
                var4 = var4.bind(var3)(var10);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = var8;
                if (!var4) {
                    _fun9838_ip = 322;
                    continue _fun9838
                }
            case 315:
                var5 = typeof var8;
                var4 = var9 === var5;
            case 322:
                if (!var4) {
                    _fun9838_ip = 380;
                    continue _fun9838
                }
            case 325:
                var5 = var3.updateName;
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var4 = ' ';
                var4 = var9.bind(var11)(var10, var4, var8);
                var4 = var5.bind(var3)(var4);
                var5 = var3.setAttribute;
                var4 = 'gen_ai.function_id';
                var4 = var5.bind(var3)(var4, var8);
            case 380:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_PROMPT_ATTRIBUTE;
                var4 = var1[var4];
                if (!var4) {
                    _fun9838_ip = 478;
                    continue _fun9838
                }
            case 410:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 6;
                var5 = var4[var5];
                var8 = var9.bind(var0)(var5);
                var5 = var8.getTruncatedJsonString;
                var4 = var4[var7];
                var4 = var9.bind(var0)(var4);
                var4 = var4.AI_PROMPT_ATTRIBUTE;
                var4 = var1[var4];
                var8 = var5.bind(var8)(var4);
                var5 = var3.setAttribute;
                var4 = 'gen_ai.prompt';
                var4 = var5.bind(var3)(var4, var8);
            case 478:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var4 = var1[var4];
                if (!var4) {
                    _fun9838_ip = 538;
                    continue _fun9838
                }
            case 508:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var0)(var5);
                var5 = var5.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var5 = var1[var5];
                var4 = !var5;
            case 538:
                if (!var4) {
                    _fun9838_ip = 595;
                    continue _fun9838
                }
            case 541:
                var8 = var3.setAttribute;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = var4[var7];
                var5 = var9.bind(var0)(var5);
                var5 = var5.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var4 = var4[var7];
                var4 = var9.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var4 = var1[var4];
                var4 = var8.bind(var3)(var5, var4);
            case 595:
                var8 = var3.setAttribute;
                var5 = var6.includes;
                var4 = 'stream';
                var5 = var5.bind(var6)(var4);
                var4 = 'ai.streaming';
                var4 = var8.bind(var3)(var4, var5);
                var4 = 'ai.generateText';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1703;
                    continue _fun9838
                }
            case 640:
                var4 = 'ai.generateText.doGenerate';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1601;
                    continue _fun9838
                }
            case 653:
                var4 = 'ai.streamText';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1553;
                    continue _fun9838
                }
            case 666:
                var4 = 'ai.streamText.doStream';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1451;
                    continue _fun9838
                }
            case 679:
                var4 = 'ai.generateObject';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1403;
                    continue _fun9838
                }
            case 692:
                var4 = 'ai.generateObject.doGenerate';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1301;
                    continue _fun9838
                }
            case 705:
                var4 = 'ai.streamObject';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1253;
                    continue _fun9838
                }
            case 718:
                var4 = 'ai.streamObject.doStream';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1151;
                    continue _fun9838
                }
            case 731:
                var4 = 'ai.embed';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1103;
                    continue _fun9838
                }
            case 744:
                var4 = 'ai.embed.doEmbed';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 1001;
                    continue _fun9838
                }
            case 757:
                var4 = 'ai.embedMany';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 953;
                    continue _fun9838
                }
            case 770:
                var4 = 'ai.embedMany.doEmbed';
                if (!(var4 !== var6)) {
                    _fun9838_ip = 851;
                    continue _fun9838
                }
            case 780:
                var5 = var6.startsWith;
                var4 = 'ai.stream';
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun9838_ip = 1993;
                    continue _fun9838
                }
            case 803:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'ai.run';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 851:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.embed_many';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'embed_many ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 953:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1001:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.embed';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'embed ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1103:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1151:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.stream_object';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'stream_object ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1253:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1301:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.generate_object';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'generate_object ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1403:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1451:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.stream_text';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'stream_text ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1553:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1601:
                var9 = var3.setAttribute;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var5 = var4[var5];
                var5 = var6.bind(var0)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var5 = 'gen_ai.generate_text';
                var5 = var9.bind(var3)(var8, var5);
                var5 = var3.updateName;
                var4 = var4[var7];
                var4 = var6.bind(var0)(var4);
                var4 = var4.AI_MODEL_ID_ATTRIBUTE;
                var8 = var1[var4];
                var4 = global;
                var4 = var4.HermesInternal;
                var6 = var4.concat;
                var4 = 'generate_text ';
                var4 = var6.bind(var4)(var8);
                var4 = var5.bind(var3)(var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1703:
                var6 = var3.setAttribute;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var4 = 'gen_ai.invoke_agent';
                var4 = var6.bind(var3)(var5, var4);
                _fun9838_ip = 1993;
                continue _fun9838;
            case 1751:
                var5 = _closure1_slot2;
                var4 = 'auto.vercelai.otel';
                var4 = var5.bind(var0)(var3, var4);
                var9 = var3.setAttribute;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 0;
                var6 = var4[var6];
                var6 = var5.bind(var0)(var6);
                var8 = var6.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var6 = 'gen_ai.execute_tool';
                var6 = var9.bind(var3)(var8, var6);
                var6 = _closure1_slot6;
                var8 = var4[var7];
                var8 = var5.bind(var0)(var8);
                var9 = var8.AI_TOOL_CALL_NAME_ATTRIBUTE;
                var8 = 'gen_ai.tool.name';
                var8 = var6.bind(var0)(var1, var9, var8);
                var4 = var4[var7];
                var4 = var5.bind(var0)(var4);
                var5 = var4.AI_TOOL_CALL_ID_ATTRIBUTE;
                var4 = 'gen_ai.tool.call.id';
                var4 = var6.bind(var0)(var1, var5, var4);
                var5 = var1["gen_ai.tool.call.id"];
                var6 = 'string';
                var4 = typeof var5;
                if (!(var6 === var4)) {
                    _fun9838_ip = 1920;
                    continue _fun9838
                }
            case 1883:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var2 = var4.bind(var0)(var2);
                var4 = var2.toolCallSpanMap;
                var2 = var4.set;
                var2 = var2.bind(var4)(var5, var3);
            case 1920:
                var2 = var1["gen_ai.tool.type"];
                if (var2) {
                    _fun9838_ip = 1949;
                    continue _fun9838
                }
            case 1929:
                var5 = var3.setAttribute;
                var4 = 'gen_ai.tool.type';
                var2 = 'function';
                var2 = var5.bind(var3)(var4, var2);
            case 1949:
                var5 = var1["gen_ai.tool.name"];
                if (!var5) {
                    _fun9838_ip = 1993;
                    continue _fun9838
                }
            case 1958:
                var2 = var3.updateName;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'execute_tool ';
                var1 = var4.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
            case 1993:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun9839: for (var _fun9839_ip = 0;;) switch (_fun9839_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var1 = undefined;
                var7 = undefined;
                var3 = var0.type;
                var2 = 'transaction';
                if (!(var2 === var3)) {
                    _fun9839_ip = 299;
                    continue _fun9839
                }
            case 25:
                var2 = var0.spans;
                if (!var2) {
                    _fun9839_ip = 299;
                    continue _fun9839
                }
            case 37:
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var3;
                var2 = new var15[var2](var14);
                var1 = var2 instanceof Object ? var2 : var3;
                var2 = var0.spans;
                var3 = var2;
                var4 = var3[Symbol.iterator];
                var3 = var4().next;
                var6 = 3;
            case 83:
                var11 = var3().value;
                var8 = var4;
                if (!(var8 !== var5)) {
                    _fun9839_ip = 144;
                    continue _fun9839
                }
            case 94: // try_start_0
                var8 = _closure1_slot5;
                var8 = var8.bind(var5)(var11);
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var6];
                var10 = var9.bind(var5)(var8);
                var9 = var10.accumulateTokensForParent;
                var8 = var1;
                var8 = var9.bind(var10)(var11, var8);
            case 135: // try_end0
                _fun9839_ip = 83;
                continue _fun9839;
            case 137: // catch_target0
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 144:
                var8 = var0.spans;
                var3 = var8;
                var4 = var3[Symbol.iterator];
                var3 = var4().next;
                var8 = 'gen_ai.invoke_agent';
            case 162:
                var9 = var3().value;
                var10 = var4;
                if (!(var10 !== var5)) {
                    _fun9839_ip = 229;
                    continue _fun9839
                }
            case 173: // try_start_1
                var7 = var9;
                var9 = var9.op;
                if (!(var8 === var9)) {
                    _fun9839_ip = 220;
                    continue _fun9839
                }
            case 185:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var12 = var10.bind(var5)(var9);
                var11 = var12.applyAccumulatedTokens;
                var10 = var7;
                var9 = var1;
                var9 = var11.bind(var12)(var10, var9);
            case 220: // try_end1
                _fun9839_ip = 162;
                continue _fun9839;
            case 222: // catch_target1
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 229:
                var3 = var0.contexts;
                var4 = null;
                var7 = var4 == var3;
                var4 = undefined;
                if (var7) {
                    _fun9839_ip = 252;
                    continue _fun9839
                }
            case 246:
                var4 = var3.trace;
            case 252:
                var3 = var4;
                if (!var3) {
                    _fun9839_ip = 267;
                    continue _fun9839
                }
            case 258:
                var7 = var4.op;
                var3 = var8 === var7;
            case 267:
                if (!var3) {
                    _fun9839_ip = 299;
                    continue _fun9839
                }
            case 270:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.applyAccumulatedTokens;
                var1 = var2.bind(var3)(var4, var1);
            case 299:
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var2 = function arg0() {
        _fun9840: for (var _fun9840_ip = 0;;) switch (_fun9840_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                var7 = undefined;
                var8 = undefined;
                var7 = var1.data;
                var2 = var1.origin;
                var1 = 'auto.vercelai.otel';
                if (!(var1 === var2)) {
                    _fun9840_ip = 1460;
                    continue _fun9840
                }
            case 33:
                var9 = _closure1_slot6;
                var2 = var7;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var16 = 2;
                var4 = var1[var16];
                var4 = var3.bind(var0)(var4);
                var5 = var4.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE;
                var4 = var1[var16];
                var4 = var3.bind(var0)(var4);
                var4 = var4.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var4 = var9.bind(var0)(var2, var5, var4);
                var4 = var1[var16];
                var4 = var3.bind(var0)(var4);
                var5 = var4.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE;
                var4 = var1[var16];
                var4 = var3.bind(var0)(var4);
                var4 = var4.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var4 = var9.bind(var0)(var2, var5, var4);
                var4 = var1[var16];
                var4 = var3.bind(var0)(var4);
                var5 = var4.AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE;
                var10 = 4;
                var4 = var1[var10];
                var4 = var3.bind(var0)(var4);
                var4 = var4.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE;
                var4 = var9.bind(var0)(var2, var5, var4);
                var1 = var1[var16];
                var1 = var3.bind(var0)(var1);
                var1 = var1.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var1 = var2[var1];
                var3 = 'number';
                var1 = typeof var1;
                var1 = var3 === var1;
                if (!var1) {
                    _fun9840_ip = 238;
                    continue _fun9840
                }
            case 201:
                var4 = var7;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var5.bind(var0)(var2);
                var2 = var2.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var2 = var4[var2];
                var2 = typeof var2;
                var1 = var3 === var2;
            case 238:
                if (!var1) {
                    _fun9840_ip = 300;
                    continue _fun9840
                }
            case 241:
                var2 = var7;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var16];
                var3 = var4.bind(var0)(var3);
                var3 = var3.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var3 = var2[var3];
                var1 = var1[var16];
                var1 = var4.bind(var0)(var1);
                var1 = var1.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var1 = var2[var1];
                var1 = var3 + var1;
                var2['gen_ai.usage.total_tokens'] = var1;
            case 300:
                var2 = var7;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var16];
                var1 = var3.bind(var0)(var1);
                var1 = var1.AI_PROMPT_TOOLS_ATTRIBUTE;
                var1 = var2[var1];
                if (!var1) {
                    _fun9840_ip = 381;
                    continue _fun9840
                }
            case 333:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.isArray;
                var5 = var7;
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var9.bind(var0)(var2);
                var2 = var2.AI_PROMPT_TOOLS_ATTRIBUTE;
                var2 = var5[var2];
                var1 = var3.bind(var4)(var2);
            case 381:
                if (!var1) {
                    _fun9840_ip = 456;
                    continue _fun9840
                }
            case 384:
                var3 = var7;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var16];
                var2 = var9.bind(var0)(var2);
                var2 = var2.AI_PROMPT_TOOLS_ATTRIBUTE;
                var4 = 3;
                var4 = var1[var4];
                var5 = var9.bind(var0)(var4);
                var4 = var5.convertAvailableToolsToJsonString;
                var1 = var1[var16];
                var1 = var9.bind(var0)(var1);
                var1 = var1.AI_PROMPT_TOOLS_ATTRIBUTE;
                var1 = var3[var1];
                var1 = var4.bind(var5)(var1);
                var3[var2] = var1;
            case 456:
                var4 = _closure1_slot6;
                var3 = var7;
                var15 = _closure1_slot0;
                var13 = _closure1_slot1;
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_PROMPT_MESSAGES_ATTRIBUTE;
                var1 = 'gen_ai.request.messages';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_RESPONSE_TEXT_ATTRIBUTE;
                var1 = 'gen_ai.response.text';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                var1 = 'gen_ai.response.tool_calls';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_RESPONSE_OBJECT_ATTRIBUTE;
                var1 = 'gen_ai.response.object';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_PROMPT_TOOLS_ATTRIBUTE;
                var1 = 'gen_ai.request.available_tools';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_TOOL_CALL_ARGS_ATTRIBUTE;
                var1 = 'gen_ai.tool.input';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_TOOL_CALL_RESULT_ATTRIBUTE;
                var1 = 'gen_ai.tool.output';
                var1 = var4.bind(var0)(var3, var2, var1);
                var1 = var13[var16];
                var1 = var15.bind(var0)(var1);
                var2 = var1.AI_SCHEMA_ATTRIBUTE;
                var1 = 'gen_ai.request.schema';
                var1 = var4.bind(var0)(var3, var2, var1);
                var2 = var3;
                var11 = undefined;
                var5 = undefined;
                var1 = undefined;
                var9 = undefined;
                var14 = undefined;
                var4 = undefined;
                var12 = undefined;
                var13 = var13[var16];
                var13 = var15.bind(var0)(var13);
                var13 = var13.AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE;
                var13 = var3[var13];
                var11 = var13;
                if (!var13) {
                    _fun9840_ip = 1354;
                    continue _fun9840
                }
            case 736: // try_start_0
                var13 = global;
                var15 = var13.JSON;
                var13 = var15.parse;
                var11 = var13.bind(var15)(var11);
                var1 = var11;
                var11 = var11.openai;
                if (!var11) {
                    _fun9840_ip = 922;
                    continue _fun9840
                }
            case 770:
                var16 = _closure1_slot7;
                var15 = var2;
                var13 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var10];
                var11 = var13.bind(var0)(var11);
                var17 = var11.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE;
                var11 = var1;
                var13 = var11.openai;
                var13 = var13.cachedPromptTokens;
                var13 = var16.bind(var0)(var15, var17, var13);
                var13 = var11.openai;
                var17 = var13.reasoningTokens;
                var13 = 'gen_ai.usage.output_tokens.reasoning';
                var13 = var16.bind(var0)(var15, var13, var17);
                var13 = var11.openai;
                var17 = var13.acceptedPredictionTokens;
                var13 = 'gen_ai.usage.output_tokens.prediction_accepted';
                var13 = var16.bind(var0)(var15, var13, var17);
                var13 = var11.openai;
                var17 = var13.rejectedPredictionTokens;
                var13 = 'gen_ai.usage.output_tokens.prediction_rejected';
                var13 = var16.bind(var0)(var15, var13, var17);
                var11 = var11.openai;
                var13 = var11.responseId;
                var11 = 'gen_ai.conversation.id';
                var11 = var16.bind(var0)(var15, var11, var13);
            case 922:
                var11 = var1;
                var11 = var11.anthropic;
                if (!var11) {
                    _fun9840_ip = 1133;
                    continue _fun9840
                }
            case 937:
                var11 = var1;
                var11 = var11.anthropic;
                var13 = var11.usage;
                var14 = var13;
                var11 = null;
                var15 = var11 == var13;
                var13 = undefined;
                if (var15) {
                    _fun9840_ip = 972;
                    continue _fun9840
                }
            case 966:
                var13 = var14.cache_read_input_tokens;
            case 972:
                var9 = var13;
                if (!(var11 == var13)) {
                    _fun9840_ip = 996;
                    continue _fun9840
                }
            case 979:
                var13 = var1;
                var13 = var13.anthropic;
                var15 = var13.cacheReadInputTokens;
                _fun9840_ip = 999;
                continue _fun9840;
            case 996:
                var15 = var9;
            case 999:
                var14 = _closure1_slot7;
                var13 = var2;
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var16.bind(var0)(var9);
                var9 = var9.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE;
                var9 = var14.bind(var0)(var13, var9, var15);
                var9 = var1;
                var9 = var9.anthropic;
                var9 = var9.usage;
                var12 = var9;
                var13 = var11 == var9;
                var9 = undefined;
                if (var13) {
                    _fun9840_ip = 1069;
                    continue _fun9840
                }
            case 1063:
                var9 = var12.cache_creation_input_tokens;
            case 1069:
                var4 = var9;
                if (!(var11 == var9)) {
                    _fun9840_ip = 1093;
                    continue _fun9840
                }
            case 1076:
                var9 = var1;
                var9 = var9.anthropic;
                var12 = var9.cacheCreationInputTokens;
                _fun9840_ip = 1096;
                continue _fun9840;
            case 1093:
                var12 = var4;
            case 1096:
                var11 = _closure1_slot7;
                var9 = var2;
                var13 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var10];
                var4 = var13.bind(var0)(var4);
                var4 = var4.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE;
                var4 = var11.bind(var0)(var9, var4, var12);
            case 1133:
                var9 = var1;
                var11 = var9.bedrock;
                var5 = var11;
                var9 = null;
                var9 = var9 != var11;
                var4 = var9;
                if (!var9) {
                    _fun9840_ip = 1163;
                    continue _fun9840
                }
            case 1157:
                var4 = var5.usage;
            case 1163:
                if (!var4) {
                    _fun9840_ip = 1264;
                    continue _fun9840
                }
            case 1166:
                var11 = _closure1_slot7;
                var9 = var2;
                var12 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = var5[var10];
                var4 = var12.bind(var0)(var4);
                var14 = var4.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE;
                var4 = var1;
                var13 = var4.bedrock;
                var13 = var13.usage;
                var13 = var13.cacheReadInputTokens;
                var13 = var11.bind(var0)(var9, var14, var13);
                var5 = var5[var10];
                var5 = var12.bind(var0)(var5);
                var5 = var5.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE;
                var4 = var4.bedrock;
                var4 = var4.usage;
                var4 = var4.cacheWriteInputTokens;
                var4 = var11.bind(var0)(var9, var5, var4);
            case 1264:
                var4 = var1;
                var4 = var4.deepseek;
                if (!var4) {
                    _fun9840_ip = 1350;
                    continue _fun9840
                }
            case 1276:
                var5 = _closure1_slot7;
                var4 = var2;
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var2 = var9.bind(var0)(var2);
                var9 = var2.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE;
                var2 = var1.deepseek;
                var2 = var2.promptCacheHitTokens;
                var2 = var5.bind(var0)(var4, var9, var2);
                var1 = var1.deepseek;
                var2 = var1.promptCacheMissTokens;
                var1 = 'gen_ai.usage.input_tokens.cache_miss';
                var1 = var5.bind(var0)(var4, var1, var2);
            case 1350: // try_end0
                _fun9840_ip = 1354;
                continue _fun9840;
            case 1352: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 1354:
                var5 = global;
                var2 = var5.Object;
                var1 = var2.keys;
                var1 = var1.bind(var2)(var3);
                var4 = var1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var3 = 'vercel.';
                var1 = 'ai.';
            case 1390:
                var10 = var4().value;
                var9 = var2;
                if (!(var9 !== var0)) {
                    _fun9840_ip = 1460;
                    continue _fun9840
                }
            case 1401: // try_start_1
                var8 = var10;
                var9 = var10.startsWith;
                var9 = var9.bind(var10)(var1);
                if (!var9) {
                    _fun9840_ip = 1451;
                    continue _fun9840
                }
            case 1418:
                var12 = _closure1_slot6;
                var11 = var7;
                var10 = var8;
                var9 = var5.HermesInternal;
                var9 = var9.concat;
                var9 = var9.bind(var3)(var10);
                var9 = var12.bind(var0)(var11, var10, var9);
            case 1451: // try_end1
                _fun9840_ip = 1390;
                continue _fun9840;
            case 1453: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 1460:
                return var0;
        }
    };
    var _closure1_slot5 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun9841: for (var _fun9841_ip = 0;;) switch (_fun9841_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = var1[var0];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun9841_ip = 31;
                    continue _fun9841
                }
            case 16:
                var3 = var1[var0];
                var2 = arg2;
                var1[var2] = var3;
                var0 = delete var1[var0];
            case 31:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun9842: for (var _fun9842_ip = 0;;) switch (_fun9842_ip) {
            case 0:
                var2 = arg2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun9842_ip = 19;
                    continue _fun9842
                }
            case 9:
                var1 = arg0;
                var0 = arg1;
                var1[var0] = var2;
            case 19:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0() {
        var2 = arg0;
        var4 = var2.on;
        var3 = _closure1_slot3;
        var1 = 'spanStart';
        var1 = var4.bind(var2)(var1, var3);
        var1 = var2.addEventProcessor;
        var3 = global;
        var5 = var3.Object;
        var4 = var5.assign;
        var3 = _closure1_slot4;
        var0 = {};
        var6 = 'VercelAiEventProcessor';
        var0.id = var6;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.addVercelAiProcessors = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [838, 819, 953, 954, 955, 956, 957]);