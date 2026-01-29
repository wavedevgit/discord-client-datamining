// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: addRequestAttributes, environment: var1
        _fun9868: for (var _fun9868_ip = 0;;) switch (_fun9868_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = 'messages';
                var0 = var0 in var1;
                if (!var0) {
                    _fun9868_ip = 101;
                    continue _fun9868
                }
            case 17:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var7 = undefined;
                var6 = var4.bind(var7)(var3);
                var5 = var6.getTruncatedJsonString;
                var3 = var1.messages;
                var6 = var5.bind(var6)(var3);
                var3 = var2.setAttributes;
                var5 = _closure1_slot4;
                var0 = 3;
                var0 = var8[var0];
                var0 = var4.bind(var7)(var0);
                var4 = var0.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var0 = {};
                var0 = var5.bind(var7)(var0, var4, var6);
                var0 = var3.bind(var2)(var0);
            case 101:
                var0 = 'input';
                var0 = var0 in var1;
                if (!var0) {
                    _fun9868_ip = 196;
                    continue _fun9868
                }
            case 112:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var7[var4];
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.getTruncatedJsonString;
                var1 = var1.input;
                var5 = var4.bind(var5)(var1);
                var1 = var2.setAttributes;
                var4 = _closure1_slot4;
                var0 = 3;
                var0 = var7[var0];
                var0 = var3.bind(var6)(var0);
                var3 = var0.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var0 = {};
                var0 = var4.bind(var6)(var0, var3, var5);
                var0 = var1.bind(var2)(var0);
            case 196:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: instrumentMethod, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun9872: for (var _fun9872_ip = 0;;) switch (_fun9872_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun9872_ip = 1445;
                                continue _fun9872
                            }
                        case 12:
                            var6 = undefined;
                            var7 = undefined;
                            var _closure5_slot0 = var6;
                            var _closure5_slot1 = var6;
                            var5 = arguments.length;
                            var12 = global;
                            var1 = var12.Array;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var22 = var3;
                            var21 = var5;
                            var1 = new var22[var1](var21, var20);
                            var4 = var1 instanceof Object ? var1 : var3;
                            _closure5_slot0 = var4;
                            var1 = 0;
                            var8 = var1 < var5;
                            var3 = 0;
                            if (!var8) {
                                _fun9872_ip = 88;
                                continue _fun9872
                            }
                        case 73:
                            var8 = arguments[var3];
                            var4[var3] = var8;
                            var3 = var3 + 1;
                            if (var3 < var5) {
                                _fun9872_ip = 73;
                                continue _fun9872
                            }
                        case 88:
                            var3 = _closure2_slot3;
                            if (var3) {
                                _fun9872_ip = 327;
                                continue _fun9872
                            }
                        case 101:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var7 = 7;
                            var7 = var10[var7];
                            var9 = var9.bind(var6)(var7);
                            var7 = var9.getCurrentScope;
                            var9 = var7.bind(var9)();
                            var7 = var9.getClient;
                            var14 = var7.bind(var9)();
                            var10 = null;
                            var7 = var10 == var14;
                            var11 = undefined;
                            if (var7) {
                                _fun9872_ip = 192;
                                continue _fun9872
                            }
                        case 155:
                            var7 = var14.getIntegrationByName;
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var5 = 8;
                            var5 = var13[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.OPENAI_INTEGRATION_NAME;
                            var11 = var7.bind(var14)(var5);
                        case 192:
                            var5 = !var11;
                            var7 = !var5;
                            if (var5) {
                                _fun9872_ip = 237;
                                continue _fun9872
                            }
                        case 201:
                            var9 = var12.Boolean;
                            var13 = var10 == var14;
                            var5 = undefined;
                            if (var13) {
                                _fun9872_ip = 232;
                                continue _fun9872
                            }
                        case 216:
                            var13 = var14.getOptions;
                            var13 = var13.bind(var14)();
                            var5 = var13.sendDefaultPii;
                        case 232:
                            var7 = var9.bind(var6)(var5);
                        case 237:
                            var5 = {};
                            var9 = var10 == var11;
                            var13 = undefined;
                            if (var9) {
                                _fun9872_ip = 268;
                                continue _fun9872
                            }
                        case 248:
                            var9 = var11.options;
                            var14 = var10 == var9;
                            var13 = undefined;
                            if (var14) {
                                _fun9872_ip = 268;
                                continue _fun9872
                            }
                        case 262:
                            var13 = var9.recordInputs;
                        case 268:
                            var9 = var7;
                            if (!(var10 != var13)) {
                                _fun9872_ip = 278;
                                continue _fun9872
                            }
                        case 275:
                            var9 = var13;
                        case 278:
                            var5.recordInputs = var9;
                            var13 = var10 == var11;
                            var9 = undefined;
                            if (var13) {
                                _fun9872_ip = 312;
                                continue _fun9872
                            }
                        case 292:
                            var11 = var11.options;
                            var13 = var10 == var11;
                            var9 = undefined;
                            if (var13) {
                                _fun9872_ip = 312;
                                continue _fun9872
                            }
                        case 306:
                            var9 = var11.recordOutputs;
                        case 312:
                            if (!(var10 != var9)) {
                                _fun9872_ip = 319;
                                continue _fun9872
                            }
                        case 316:
                            var7 = var9;
                        case 319:
                            var5.recordOutputs = var7;
                            var3 = var5;
                        case 327:
                            _closure5_slot1 = var3;
                            var17 = _closure2_slot1;
                            var13 = _closure1_slot4;
                            var7 = _closure1_slot0;
                            var14 = _closure1_slot1;
                            var10 = 3;
                            var5 = var14[var10];
                            var5 = var7.bind(var6)(var5);
                            var11 = var5.GEN_AI_SYSTEM_ATTRIBUTE;
                            var9 = {};
                            var5 = 'openai';
                            var15 = var13.bind(var6)(var9, var11, var5);
                            var5 = var14[var10];
                            var5 = var7.bind(var6)(var5);
                            var9 = var5.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                            var11 = 4;
                            var5 = var14[var11];
                            var16 = var7.bind(var6)(var5);
                            var5 = var16.getOperationName;
                            var5 = var5.bind(var16)(var17);
                            var9 = var13.bind(var6)(var15, var9, var5);
                            var5 = 5;
                            var5 = var14[var5];
                            var5 = var7.bind(var6)(var5);
                            var7 = var5.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var5 = 'auto.ai.openai';
                            var7 = var13.bind(var6)(var9, var7, var5);
                            var5 = var4.length;
                            if (!(var5 > var1)) {
                                _fun9872_ip = 690;
                                continue _fun9872
                            }
                        case 469:
                            var5 = var4[var1];
                            var13 = 'object';
                            var5 = typeof var5;
                            if (!(var13 === var5)) {
                                _fun9872_ip = 690;
                                continue _fun9872
                            }
                        case 487:
                            var9 = var4[var1];
                            var5 = null;
                            if (!(var5 !== var9)) {
                                _fun9872_ip = 690;
                                continue _fun9872
                            }
                        case 500:
                            var5 = var4[var1];
                            var15 = var12.Array;
                            var14 = var15.isArray;
                            var9 = var5.tools;
                            var9 = var14.bind(var15)(var9);
                            if (var9) {
                                _fun9872_ip = 535;
                                continue _fun9872
                            }
                        case 529:
                            var15 = new Array(0);
                            _fun9872_ip = 541;
                            continue _fun9872;
                        case 535:
                            var15 = var5.tools;
                        case 541:
                            var9 = var5.web_search_options;
                            if (!var9) {
                                _fun9872_ip = 563;
                                continue _fun9872
                            }
                        case 550:
                            var9 = var5.web_search_options;
                            var9 = typeof var9;
                            if (!(var13 !== var9)) {
                                _fun9872_ip = 569;
                                continue _fun9872
                            }
                        case 563:
                            var14 = new Array(0);
                            _fun9872_ip = 613;
                            continue _fun9872;
                        case 569:
                            var16 = var12.Object;
                            var13 = var16.assign;
                            var9 = {};
                            var17 = 'web_search_options';
                            var9.type = var17;
                            var5 = var5.web_search_options;
                            var9 = var13.bind(var16)(var9, var5);
                            var5 = new Array(1);
                            var5[0] = var9;
                            var14 = var5;
                        case 613:
                            var13 = new Array(0);
                            var9 = var13.concat;
                            var5 = _closure1_slot3;
                            var5 = var5.bind(var6)(var15);
                            var14 = var9.bind(var13)(var5, var14);
                            var5 = var14.length;
                            if (!(var5 > var1)) {
                                _fun9872_ip = 690;
                                continue _fun9872
                            }
                        case 646:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var6)(var5);
                            var9 = var5.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE;
                            var13 = var12.JSON;
                            var5 = var13.stringify;
                            var5 = var5.bind(var13)(var14);
                            var7[var9] = var5;
                        case 690:
                            var5 = var4.length;
                            if (!(var5 > var1)) {
                                _fun9872_ip = 724;
                                continue _fun9872
                            }
                        case 699:
                            var5 = var4[var1];
                            var9 = 'object';
                            var5 = typeof var5;
                            if (!(var9 === var5)) {
                                _fun9872_ip = 724;
                                continue _fun9872
                            }
                        case 714:
                            var5 = var4[var1];
                            var9 = null;
                            if (!(var9 === var5)) {
                                _fun9872_ip = 760;
                                continue _fun9872
                            }
                        case 724:
                            var13 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var13.bind(var6)(var5);
                            var13 = var5.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                            var5 = 'unknown';
                            var7[var13] = var5;
                            _fun9872_ip = 1119;
                            continue _fun9872;
                        case 760:
                            var5 = var4[var1];
                            var14 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var13 = var13[var10];
                            var13 = var14.bind(var6)(var13);
                            var13 = var13.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                            var14 = var5.model;
                            var15 = var9 != var14;
                            var9 = 'unknown';
                            if (!var15) {
                                _fun9872_ip = 807;
                                continue _fun9872
                            }
                        case 804:
                            var9 = var14;
                        case 807:
                            var7[var13] = var9;
                            var9 = 'temperature';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 855;
                                continue _fun9872
                            }
                        case 822:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE;
                            var9 = var5.temperature;
                            var7[var13] = var9;
                        case 855:
                            var9 = 'top_p';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 899;
                                continue _fun9872
                            }
                        case 866:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_TOP_P_ATTRIBUTE;
                            var9 = var5.top_p;
                            var7[var13] = var9;
                        case 899:
                            var9 = 'frequency_penalty';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 943;
                                continue _fun9872
                            }
                        case 910:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE;
                            var9 = var5.frequency_penalty;
                            var7[var13] = var9;
                        case 943:
                            var9 = 'presence_penalty';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 987;
                                continue _fun9872
                            }
                        case 954:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE;
                            var9 = var5.presence_penalty;
                            var7[var13] = var9;
                        case 987:
                            var9 = 'stream';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 1031;
                                continue _fun9872
                            }
                        case 998:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_STREAM_ATTRIBUTE;
                            var9 = var5.stream;
                            var7[var13] = var9;
                        case 1031:
                            var9 = 'encoding_format';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 1075;
                                continue _fun9872
                            }
                        case 1042:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var13 = var9.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE;
                            var9 = var5.encoding_format;
                            var7[var13] = var9;
                        case 1075:
                            var9 = 'dimensions';
                            var9 = var9 in var5;
                            if (!var9) {
                                _fun9872_ip = 1119;
                                continue _fun9872
                            }
                        case 1086:
                            var13 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var9 = var9[var10];
                            var9 = var13.bind(var6)(var9);
                            var9 = var9.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE;
                            var5 = var5.dimensions;
                            var7[var9] = var5;
                        case 1119:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var10];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                            var17 = var7[var5];
                            if (var17) {
                                _fun9872_ip = 1153;
                                continue _fun9872
                            }
                        case 1149:
                            var17 = 'unknown';
                        case 1153:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var11];
                            var10 = var9.bind(var6)(var5);
                            var9 = var10.getOperationName;
                            var5 = _closure2_slot1;
                            var16 = var9.bind(var10)(var5);
                            var1 = var4[var1];
                            if (!var1) {
                                _fun9872_ip = 1215;
                                continue _fun9872
                            }
                        case 1192:
                            var5 = 'object';
                            var4 = typeof var1;
                            if (!(var5 === var4)) {
                                _fun9872_ip = 1215;
                                continue _fun9872
                            }
                        case 1203:
                            var4 = var1.stream;
                            var1 = true;
                            if (!(var1 !== var4)) {
                                _fun9872_ip = 1325;
                                continue _fun9872
                            }
                        case 1215:
                            var10 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var4 = 9;
                            var4 = var1[var4];
                            var9 = var10.bind(var6)(var4);
                            var5 = var9.startSpan;
                            var4 = {};
                            var13 = var12.HermesInternal;
                            var15 = var13.concat;
                            var14 = '';
                            var13 = ' ';
                            var13 = var15.bind(var14)(var16, var13, var17);
                            var4.name = var13;
                            var1 = var1[var11];
                            var13 = var10.bind(var6)(var1);
                            var10 = var13.getSpanOperation;
                            var1 = _closure2_slot1;
                            var1 = var10.bind(var13)(var1);
                            var4.op = var1;
                            var4.attributes = var7;
                            var1 = function() { // Environment: var2
                                var3 = _closure1_slot2;
                                var2 = undefined;
                                var1 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun9879: for (var _fun9879_ip = 0;;) switch (_fun9879_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun9879_ip = 247;
                                                    continue _fun9879
                                                }
                                            case 10:
                                                var3 = arg0;
                                            case 13: // try_start_0
                                                var5 = _closure5_slot1;
                                                var5 = var5.recordInputs;
                                                var4 = var5;
                                                if (!var5) {
                                                    _fun9879_ip = 42;
                                                    continue _fun9879
                                                }
                                            case 32:
                                                var6 = _closure5_slot0;
                                                var5 = 0;
                                                var4 = var6[var5];
                                            case 42:
                                                var1 = var4;
                                                if (!var4) {
                                                    _fun9879_ip = 69;
                                                    continue _fun9879
                                                }
                                            case 48:
                                                var5 = _closure5_slot0;
                                                var4 = 0;
                                                var4 = var5[var4];
                                                var5 = 'object';
                                                var4 = typeof var4;
                                                var1 = var5 === var4;
                                            case 69:
                                                if (!var1) {
                                                    _fun9879_ip = 100;
                                                    continue _fun9879
                                                }
                                            case 72:
                                                var6 = _closure1_slot5;
                                                var5 = var3;
                                                var4 = _closure5_slot0;
                                                var1 = 0;
                                                var4 = var4[var1];
                                                var1 = undefined;
                                                var1 = var6.bind(var1)(var5, var4);
                                            case 100:
                                                var6 = _closure2_slot0;
                                                var5 = var6.apply;
                                                var4 = _closure2_slot2;
                                                var1 = _closure5_slot0;
                                                var1 = var5.bind(var6)(var4, var1);
                                                SaveGenerator(address = 130);
                                            case 128:
                                                return var1;
                                            case 130:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun9879_ip = 168;
                                                    continue _fun9879
                                                }
                                            case 136:
                                                var5 = var3;
                                                var2 = _closure5_slot1;
                                                var4 = var2.recordOutputs;
                                                var3 = function(arg0, arg1, arg2) { // Original name: addResponseAttributes, environment: var2
                                                    _fun9880: for (var _fun9880_ip = 0;;) switch (_fun9880_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            var1 = arg1;
                                                            var3 = arg2;
                                                            if (!var1) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 15:
                                                            var4 = 'object';
                                                            var0 = typeof var1;
                                                            if (!(var4 === var0)) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 29:
                                                            var5 = _closure1_slot0;
                                                            var4 = _closure1_slot1;
                                                            var9 = 4;
                                                            var4 = var4[var9];
                                                            var6 = undefined;
                                                            var5 = var5.bind(var6)(var4);
                                                            var4 = var5.isChatCompletionResponse;
                                                            var4 = var4.bind(var5)(var1);
                                                            var7 = _closure1_slot0;
                                                            var5 = _closure1_slot1;
                                                            var5 = var5[var9];
                                                            var5 = var7.bind(var6)(var5);
                                                            if (var4) {
                                                                _fun9880_ip = 262;
                                                                continue _fun9880
                                                            }
                                                        case 88:
                                                            var4 = var5.isResponsesApiResponse;
                                                            var4 = var4.bind(var5)(var1);
                                                            var8 = _closure1_slot0;
                                                            var7 = _closure1_slot1;
                                                            var7 = var7[var9];
                                                            var7 = var8.bind(var6)(var7);
                                                            if (var4) {
                                                                _fun9880_ip = 170;
                                                                continue _fun9880
                                                            }
                                                        case 119:
                                                            var4 = var7.isEmbeddingsResponse;
                                                            var4 = var4.bind(var7)(var1);
                                                            if (!var4) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 136:
                                                            var8 = _closure1_slot0;
                                                            var4 = _closure1_slot1;
                                                            var4 = var4[var9];
                                                            var8 = var8.bind(var6)(var4);
                                                            var4 = var8.addEmbeddingsAttributes;
                                                            var4 = var4.bind(var8)(var2, var1);
                                                            _fun9880_ip = 390;
                                                            continue _fun9880;
                                                        case 170:
                                                            var4 = var7.addResponsesApiAttributes;
                                                            var4 = var4.bind(var7)(var2, var1, var3);
                                                            var4 = var3;
                                                            if (!var4) {
                                                                _fun9880_ip = 195;
                                                                continue _fun9880
                                                            }
                                                        case 189:
                                                            var4 = var1.output_text;
                                                        case 195:
                                                            if (!var4) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 201:
                                                            var7 = var2.setAttributes;
                                                            var10 = _closure1_slot4;
                                                            var8 = _closure1_slot0;
                                                            var9 = _closure1_slot1;
                                                            var4 = 3;
                                                            var4 = var9[var4];
                                                            var4 = var8.bind(var6)(var4);
                                                            var9 = var4.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                                                            var8 = var1.output_text;
                                                            var4 = {};
                                                            var4 = var10.bind(var6)(var4, var9, var8);
                                                            var4 = var7.bind(var2)(var4);
                                                            _fun9880_ip = 390;
                                                            continue _fun9880;
                                                        case 262:
                                                            var4 = var5.addChatCompletionAttributes;
                                                            var4 = var4.bind(var5)(var2, var1, var3);
                                                            if (!var3) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 278:
                                                            var3 = var1.choices;
                                                            var4 = null;
                                                            if (!(var4 != var3)) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 290:
                                                            var3 = var3.length;
                                                            if (!var3) {
                                                                _fun9880_ip = 390;
                                                                continue _fun9880
                                                            }
                                                        case 298:
                                                            var4 = var1.choices;
                                                            var3 = var4.map;
                                                            var1 = function(arg0) { // Environment: var1
                                                                _fun9881: for (var _fun9881_ip = 0;;) switch (_fun9881_ip) {
                                                                    case 0:
                                                                        var0 = arg0;
                                                                        var1 = var0.message;
                                                                        var0 = null;
                                                                        var2 = var0 == var1;
                                                                        var0 = undefined;
                                                                        if (var2) {
                                                                            _fun9881_ip = 24;
                                                                            continue _fun9881
                                                                        }
                                                                    case 19:
                                                                        var0 = var1.content;
                                                                    case 24:
                                                                        if (var0) {
                                                                            _fun9881_ip = 31;
                                                                            continue _fun9881
                                                                        }
                                                                    case 27:
                                                                        var0 = '';
                                                                    case 31:
                                                                        return var0;
                                                                }
                                                            };
                                                            var7 = var3.bind(var4)(var1);
                                                            var1 = var2.setAttributes;
                                                            var5 = _closure1_slot4;
                                                            var3 = _closure1_slot0;
                                                            var4 = _closure1_slot1;
                                                            var0 = 3;
                                                            var0 = var4[var0];
                                                            var0 = var3.bind(var6)(var0);
                                                            var4 = var0.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                                                            var0 = global;
                                                            var3 = var0.JSON;
                                                            var0 = var3.stringify;
                                                            var3 = var0.bind(var3)(var7);
                                                            var0 = {};
                                                            var0 = var5.bind(var6)(var0, var4, var3);
                                                            var0 = var1.bind(var2)(var0);
                                                        case 390:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var2 = undefined;
                                                var2 = var3.bind(var2)(var5, var1, var4);
                                            case 165: // try_end0
                                                return var1;
                                            case 168:
                                                return var1;
                                            case 171: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var2 = 12;
                                                var3 = var3[var2];
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var3 = var4.captureException;
                                                var2 = {};
                                                var5 = {
                                                    'handled': false,
                                                    'type': 'auto.ai.openai'
                                                };
                                                var6 = {};
                                                var7 = _closure2_slot1;
                                                var6.function = var7;
                                                var5.data = var6;
                                                var2.mechanism = var5;
                                                var2 = var3.bind(var4)(var1, var2);
                                                throw var1;
                                            case 247:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure6_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = var1.bind(var6)();
                            var1 = var5.bind(var9)(var4, var1);
                            _fun9872_ip = 1442;
                            continue _fun9872;
                        case 1325:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var3 = 9;
                            var3 = var9[var3];
                            var5 = var10.bind(var6)(var3);
                            var4 = var5.startSpanManual;
                            var3 = {};
                            var12 = var12.HermesInternal;
                            var15 = var12.concat;
                            var22 = '';
                            var20 = ' ';
                            var18 = ' stream-response';
                            var21 = var16;
                            var19 = var17;
                            var12 = var22[var15](var21, var20, var19, var18, var17);
                            var3.name = var12;
                            var9 = var9[var11];
                            var10 = var10.bind(var6)(var9);
                            var9 = var10.getSpanOperation;
                            var8 = _closure2_slot1;
                            var8 = var9.bind(var10)(var8);
                            var3.op = var8;
                            var3.attributes = var7;
                            var2 = function() { // Environment: var2
                                var3 = _closure1_slot2;
                                var2 = undefined;
                                var1 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun9875: for (var _fun9875_ip = 0;;) switch (_fun9875_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun9875_ip = 342;
                                                    continue _fun9875
                                                }
                                            case 10:
                                                var2 = arg0;
                                                var5 = undefined;
                                                var8 = undefined;
                                            case 17: // try_start_0
                                                var4 = _closure5_slot1;
                                                var4 = var4.recordInputs;
                                                var3 = var4;
                                                if (!var4) {
                                                    _fun9875_ip = 46;
                                                    continue _fun9875
                                                }
                                            case 36:
                                                var6 = _closure5_slot0;
                                                var4 = 0;
                                                var3 = var6[var4];
                                            case 46:
                                                var1 = var3;
                                                if (!var3) {
                                                    _fun9875_ip = 73;
                                                    continue _fun9875
                                                }
                                            case 52:
                                                var4 = _closure5_slot0;
                                                var3 = 0;
                                                var3 = var4[var3];
                                                var4 = 'object';
                                                var3 = typeof var3;
                                                var1 = var4 === var3;
                                            case 73:
                                                if (!var1) {
                                                    _fun9875_ip = 102;
                                                    continue _fun9875
                                                }
                                            case 76:
                                                var4 = _closure1_slot5;
                                                var3 = var2;
                                                var6 = _closure5_slot0;
                                                var1 = 0;
                                                var1 = var6[var1];
                                                var1 = var4.bind(var5)(var3, var1);
                                            case 102:
                                                var6 = _closure2_slot0;
                                                var4 = var6.apply;
                                                var3 = _closure2_slot2;
                                                var1 = _closure5_slot0;
                                                var1 = var4.bind(var6)(var3, var1);
                                                SaveGenerator(address = 132);
                                            case 130:
                                                return var1;
                                            case 132:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                if (var3) {
                                                    _fun9875_ip = 208;
                                                    continue _fun9875
                                                }
                                            case 138:
                                                var4 = _closure1_slot0;
                                                var6 = _closure1_slot1;
                                                var3 = 10;
                                                var3 = var6[var3];
                                                var7 = var4.bind(var5)(var3);
                                                var6 = var7.instrumentStream;
                                                var4 = var2;
                                                var9 = _closure5_slot1;
                                                var10 = var9.recordOutputs;
                                                var8 = var10;
                                                var9 = null;
                                                var9 = var9 != var10;
                                                var3 = var9;
                                                if (!var9) {
                                                    _fun9875_ip = 198;
                                                    continue _fun9875
                                                }
                                            case 195:
                                                var3 = var8;
                                            case 198:
                                                var3 = var6.bind(var7)(var1, var4, var3);
                                            case 205: // try_end0
                                                return var3;
                                            case 208:
                                                return var1;
                                            case 211: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                                var3 = var2;
                                                var7 = var3.setStatus;
                                                var2 = {};
                                                var4 = _closure1_slot0;
                                                var6 = _closure1_slot1;
                                                var8 = 11;
                                                var8 = var6[var8];
                                                var8 = var4.bind(var5)(var8);
                                                var8 = var8.SPAN_STATUS_ERROR;
                                                var2.code = var8;
                                                var8 = 'internal_error';
                                                var2.message = var8;
                                                var2 = var7.bind(var3)(var2);
                                                var2 = 12;
                                                var2 = var6[var2];
                                                var5 = var4.bind(var5)(var2);
                                                var4 = var5.captureException;
                                                var2 = {};
                                                var6 = {
                                                    'handled': false,
                                                    'type': 'auto.ai.openai.stream'
                                                };
                                                var7 = {};
                                                var8 = _closure2_slot1;
                                                var7.function = var8;
                                                var6.data = var7;
                                                var2.mechanism = var6;
                                                var2 = var4.bind(var5)(var1, var2);
                                                var2 = var3.end;
                                                var2 = var2.bind(var3)();
                                                throw var1;
                                            case 342:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure6_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure6_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var2 = var2.bind(var6)();
                            var1 = var4.bind(var5)(var3, var2);
                        case 1442:
                            return var1;
                        case 1445:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Original name: instrumentedMethod, environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: createDeepProxy, environment: var1
        _fun9884: for (var _fun9884_ip = 0;;) switch (_fun9884_ip) {
            case 0:
                var1 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var4 = 1;
                var5 = var2 > var4;
                var6 = '';
                var2 = var6;
                if (!var5) {
                    _fun9884_ip = 41;
                    continue _fun9884
                }
            case 26:
                var5 = arguments[var4];
                var2 = var6;
                if (!(var1 !== var5)) {
                    _fun9884_ip = 41;
                    continue _fun9884
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
                    _fun9884_ip = 64;
                    continue _fun9884
                }
            case 60:
                var1 = arguments[var2];
            case 64:
                var _closure2_slot1 = var1;
                var1 = global;
                var3 = var1.Proxy;
                var2 = {};
                var0 = function(arg0, arg1) { // Original name: get, environment: var0
                    _fun9885: for (var _fun9885_ip = 0;;) switch (_fun9885_ip) {
                        case 0:
                            var6 = arg0;
                            var9 = arg1;
                            var5 = var6[var9];
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var10 = 4;
                            var0 = var0[var10];
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
                                _fun9885_ip = 112;
                                continue _fun9885
                            }
                        case 81:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var7 = var7[var10];
                            var9 = var9.bind(var4)(var7);
                            var7 = var9.shouldInstrument;
                            var7 = var7.bind(var9)(var3);
                            if (var7) {
                                _fun9885_ip = 161;
                                continue _fun9885
                            }
                        case 112:
                            if (var0) {
                                _fun9885_ip = 149;
                                continue _fun9885
                            }
                        case 115:
                            var0 = var5;
                            if (!var5) {
                                _fun9885_ip = 147;
                                continue _fun9885
                            }
                        case 121:
                            var7 = 'object';
                            var0 = var5;
                            if (!(var7 === var8)) {
                                _fun9885_ip = 147;
                                continue _fun9885
                            }
                        case 132:
                            var8 = _closure1_slot7;
                            var7 = _closure2_slot1;
                            var0 = var8.bind(var4)(var5, var3, var7);
                        case 147:
                            _fun9885_ip = 159;
                            continue _fun9885;
                        case 149:
                            var7 = var5.bind;
                            var0 = var7.bind(var5)(var6);
                        case 159:
                            _fun9885_ip = 184;
                            continue _fun9885;
                        case 161:
                            var2 = _closure1_slot6;
                            var11 = _closure2_slot1;
                            var15 = undefined;
                            var14 = var5;
                            var13 = var3;
                            var12 = var6;
                            var0 = var15[var2](var14, var13, var12, var11, var10);
                        case 184:
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
    var1 = function(arg0, arg1) { // Original name: instrumentOpenAiClient, environment: var1
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var1 = '';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.instrumentOpenAiClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 65, 77, 955, 960, 838, 957, 847, 961, 864, 962, 839, 867]);