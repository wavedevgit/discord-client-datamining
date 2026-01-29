// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0, arg1) { // Original name: extractModel, environment: var1
        _fun9986: for (var _fun9986_ip = 0;;) switch (_fun9986_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = 'model';
                var3 = var2 in var0;
                if (!var3) {
                    _fun9986_ip = 34;
                    continue _fun9986
                }
            case 17:
                var3 = var0.model;
                var4 = 'string';
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun9986_ip = 122;
                    continue _fun9986
                }
            case 34:
                if (!var1) {
                    _fun9986_ip = 100;
                    continue _fun9986
                }
            case 37:
                var4 = 'object';
                var3 = typeof var1;
                if (!(var4 === var3)) {
                    _fun9986_ip = 100;
                    continue _fun9986
                }
            case 48:
                var2 = var2 in var1;
                if (!var2) {
                    _fun9986_ip = 72;
                    continue _fun9986
                }
            case 55:
                var2 = var1.model;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 !== var2)) {
                    _fun9986_ip = 114;
                    continue _fun9986
                }
            case 72:
                var2 = 'modelVersion';
                var2 = var2 in var1;
                if (!var2) {
                    _fun9986_ip = 100;
                    continue _fun9986
                }
            case 83:
                var2 = var1.modelVersion;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 !== var2)) {
                    _fun9986_ip = 106;
                    continue _fun9986
                }
            case 100:
                var2 = 'unknown';
                return var2;
            case 106:
                var2 = var1.modelVersion;
                return var2;
            case 114:
                var1 = var1.model;
                return var1;
            case 122:
                var0 = var0.model;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = function(arg0, arg1, arg2) { // Original name: extractRequestAttributes, environment: var1
        _fun9987: for (var _fun9987_ip = 0;;) switch (_fun9987_ip) {
            case 0:
                var1 = arg1;
                var7 = arg2;
                var8 = _closure1_slot3;
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 2;
                var0 = var9[var6];
                var5 = undefined;
                var0 = var3.bind(var5)(var0);
                var10 = var0.GEN_AI_SYSTEM_ATTRIBUTE;
                var0 = 3;
                var0 = var9[var0];
                var0 = var3.bind(var5)(var0);
                var4 = var0.GOOGLE_GENAI_SYSTEM_NAME;
                var0 = {};
                var10 = var8.bind(var5)(var0, var10, var4);
                var0 = var9[var6];
                var0 = var3.bind(var5)(var0);
                var4 = var0.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                var0 = 4;
                var0 = var9[var0];
                var12 = var3.bind(var5)(var0);
                var11 = var12.getFinalOperationName;
                var0 = arg0;
                var0 = var11.bind(var12)(var0);
                var4 = var8.bind(var5)(var10, var4, var0);
                var0 = 5;
                var0 = var9[var0];
                var0 = var3.bind(var5)(var0);
                var3 = var0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var0 = 'auto.ai.google_genai';
                var0 = var8.bind(var5)(var4, var3, var0);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var4 = var3.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                var3 = _closure1_slot4;
                if (var1) {
                    _fun9987_ip = 194;
                    continue _fun9987
                }
            case 177:
                var8 = {};
                var8 = var3.bind(var5)(var8, var7);
                var0[var4] = var8;
                _fun9987_ip = 762;
                continue _fun9987;
            case 194:
                var3 = var3.bind(var5)(var1, var7);
                var0[var4] = var3;
                var3 = 'config';
                var3 = var3 in var1;
                if (!var3) {
                    _fun9987_ip = 762;
                    continue _fun9987
                }
            case 218:
                var3 = var1.config;
                var4 = 'object';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun9987_ip = 762;
                    continue _fun9987
                }
            case 237:
                var3 = var1.config;
                if (!var3) {
                    _fun9987_ip = 762;
                    continue _fun9987
                }
            case 248:
                var3 = var1.config;
                var1 = global;
                var8 = var1.Object;
                var7 = var8.assign;
                var4 = {};
                var9 = 'temperature';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 296;
                    continue _fun9987
                }
            case 279:
                var10 = var3.temperature;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 296:
                if (!var9) {
                    _fun9987_ip = 332;
                    continue _fun9987
                }
            case 299:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE;
                var9 = var3.temperature;
                var4[var10] = var9;
            case 332:
                var9 = 'topP';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 360;
                    continue _fun9987
                }
            case 343:
                var10 = var3.topP;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 360:
                if (!var9) {
                    _fun9987_ip = 396;
                    continue _fun9987
                }
            case 363:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_TOP_P_ATTRIBUTE;
                var9 = var3.topP;
                var4[var10] = var9;
            case 396:
                var9 = 'topK';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 424;
                    continue _fun9987
                }
            case 407:
                var10 = var3.topK;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 424:
                if (!var9) {
                    _fun9987_ip = 460;
                    continue _fun9987
                }
            case 427:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_TOP_K_ATTRIBUTE;
                var9 = var3.topK;
                var4[var10] = var9;
            case 460:
                var9 = 'maxOutputTokens';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 488;
                    continue _fun9987
                }
            case 471:
                var10 = var3.maxOutputTokens;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 488:
                if (!var9) {
                    _fun9987_ip = 524;
                    continue _fun9987
                }
            case 491:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE;
                var9 = var3.maxOutputTokens;
                var4[var10] = var9;
            case 524:
                var9 = 'frequencyPenalty';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 552;
                    continue _fun9987
                }
            case 535:
                var10 = var3.frequencyPenalty;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 552:
                if (!var9) {
                    _fun9987_ip = 588;
                    continue _fun9987
                }
            case 555:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE;
                var9 = var3.frequencyPenalty;
                var4[var10] = var9;
            case 588:
                var9 = 'presencePenalty';
                var9 = var9 in var3;
                if (!var9) {
                    _fun9987_ip = 616;
                    continue _fun9987
                }
            case 599:
                var10 = var3.presencePenalty;
                var11 = 'number';
                var10 = typeof var10;
                var9 = var11 === var10;
            case 616:
                if (!var9) {
                    _fun9987_ip = 652;
                    continue _fun9987
                }
            case 619:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var9 = var10.bind(var5)(var9);
                var10 = var9.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE;
                var9 = var3.presencePenalty;
                var4[var10] = var9;
            case 652:
                var4 = var7.bind(var8)(var0, var4);
                var4 = 'tools';
                var4 = var4 in var3;
                if (!var4) {
                    _fun9987_ip = 762;
                    continue _fun9987
                }
            case 669:
                var8 = var1.Array;
                var7 = var8.isArray;
                var4 = var3.tools;
                var4 = var7.bind(var8)(var4);
                if (!var4) {
                    _fun9987_ip = 762;
                    continue _fun9987
                }
            case 694:
                var7 = var3.tools;
                var4 = var7.flatMap;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.functionDeclarations;
                    return var0;
                };
                var4 = var4.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var3.bind(var5)(var2);
                var2 = var2.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE;
                var3 = var1.JSON;
                var1 = var3.stringify;
                var1 = var1.bind(var3)(var4);
                var0[var2] = var1;
            case 762:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: addPrivateRequestAttributes, environment: var1
        _fun9989: for (var _fun9989_ip = 0;;) switch (_fun9989_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var1 = 'contents';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9989_ip = 101;
                    continue _fun9989
                }
            case 17:
                var6 = var0.contents;
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 4;
                var3 = var8[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var3 = var5.getTruncatedJsonString;
                var6 = var3.bind(var5)(var6);
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
                var1 = 'message';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9989_ip = 195;
                    continue _fun9989
                }
            case 112:
                var6 = var0.message;
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 4;
                var3 = var8[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var3 = var5.getTruncatedJsonString;
                var6 = var3.bind(var5)(var6);
                var3 = var2.setAttributes;
                var5 = _closure1_slot3;
                var1 = 2;
                var1 = var8[var1];
                var1 = var4.bind(var7)(var1);
                var4 = var1.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var1 = {};
                var1 = var5.bind(var7)(var1, var4, var6);
                var1 = var3.bind(var2)(var1);
            case 195:
                var1 = 'history';
                var1 = var1 in var0;
                if (!var1) {
                    _fun9989_ip = 290;
                    continue _fun9989
                }
            case 206:
                var5 = var0.history;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var6 = undefined;
                var4 = var3.bind(var6)(var1);
                var1 = var4.getTruncatedJsonString;
                var5 = var1.bind(var4)(var5);
                var1 = var2.setAttributes;
                var4 = _closure1_slot3;
                var0 = 2;
                var0 = var7[var0];
                var0 = var3.bind(var6)(var0);
                var3 = var0.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var0 = {};
                var0 = var4.bind(var6)(var0, var3, var5);
                var0 = var1.bind(var2)(var0);
            case 290:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: instrumentMethod, environment: var1
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.CHATS_CREATE_METHOD;
        var1 = var2 === var1;
        var _closure2_slot3 = var1;
        var1 = global;
        var3 = var1.Proxy;
        var2 = {};
        var0 = function(arg0, arg1, arg2) { // Original name: apply, environment: var0
            _fun9991: for (var _fun9991_ip = 0;;) switch (_fun9991_ip) {
                case 0:
                    var2 = arg2;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var2;
                    var0 = 0;
                    var6 = var2[var0];
                    var _closure3_slot2 = var6;
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3, var6, var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                    var2 = var6[var2];
                    var3 = null;
                    var3 = var3 != var2;
                    var16 = 'unknown';
                    if (!var3) {
                        _fun9991_ip = 99;
                        continue _fun9991
                    }
                case 96:
                    var16 = var2;
                case 99:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var10 = 4;
                    var2 = var8[var10];
                    var9 = var3.bind(var5)(var2);
                    var2 = var9.getFinalOperationName;
                    var4 = _closure2_slot0;
                    var15 = var2.bind(var9)(var4);
                    var2 = 6;
                    var2 = var8[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isStreamingMethod;
                    var2 = var2.bind(var3)(var4);
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 7;
                    var3 = var8[var3];
                    var4 = var9.bind(var5)(var3);
                    if (var2) {
                        _fun9991_ip = 310;
                        continue _fun9991
                    }
                case 183:
                    var3 = var4.startSpan;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var12 = global;
                    var12 = var12.HermesInternal;
                    var17 = var12.concat;
                    var14 = '';
                    var13 = ' ';
                    if (var11) {
                        _fun9991_ip = 230;
                        continue _fun9991
                    }
                case 221:
                    var11 = var17.bind(var14)(var15, var13, var16);
                    _fun9991_ip = 252;
                    continue _fun9991;
                case 230:
                    var18 = ' create';
                    var22 = var14;
                    var21 = var15;
                    var20 = var13;
                    var19 = var16;
                    var11 = var22[var17](var21, var20, var19, var18, var17);
                case 252:
                    var2.name = var11;
                    var11 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var10];
                    var12 = var11.bind(var5)(var0);
                    var11 = var12.getSpanOperation;
                    var0 = _closure2_slot0;
                    var0 = var11.bind(var12)(var0);
                    var2.op = var0;
                    var2.attributes = var6;
                    var0 = function(arg0) { // Environment: var1
                        _fun9996: for (var _fun9996_ip = 0;;) switch (_fun9996_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var1 = _closure2_slot2;
                                var1 = var1.recordInputs;
                                if (!var1) {
                                    _fun9996_ip = 32;
                                    continue _fun9996
                                }
                            case 25:
                                var1 = _closure3_slot2;
                            case 32:
                                if (!var1) {
                                    _fun9996_ip = 57;
                                    continue _fun9996
                                }
                            case 35:
                                var3 = _closure1_slot6;
                                var2 = _closure3_slot2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var4, var2);
                            case 57:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 11;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.handleCallbackErrors;
                                var9 = function() { // Environment: var0
                                    var3 = _closure3_slot0;
                                    var2 = var3.apply;
                                    var1 = _closure2_slot1;
                                    var0 = _closure3_slot1;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var8 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.captureException;
                                    var2 = {};
                                    var1 = {
                                        'handled': false,
                                        'type': 'auto.ai.google_genai'
                                    };
                                    var5 = {};
                                    var6 = _closure2_slot0;
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
                                    _fun10000: for (var _fun10000_ip = 0;;) switch (_fun10000_ip) {
                                        case 0:
                                            var1 = _closure2_slot3;
                                            if (var1) {
                                                _fun10000_ip = 46;
                                                continue _fun10000
                                            }
                                        case 10:
                                            var4 = _closure4_slot0;
                                            var0 = _closure2_slot2;
                                            var3 = var0.recordOutputs;
                                            var2 = function(arg0, arg1, arg2) { // Original name: addResponseAttributes, environment: var0
                                                _fun10001: for (var _fun10001_ip = 0;;) switch (_fun10001_ip) {
                                                    case 0:
                                                        var2 = arg0;
                                                        var0 = arg1;
                                                        var1 = arg2;
                                                        if (!var0) {
                                                            _fun10001_ip = 586;
                                                            continue _fun10001
                                                        }
                                                    case 17:
                                                        var5 = 'object';
                                                        var4 = typeof var0;
                                                        if (!(var5 === var4)) {
                                                            _fun10001_ip = 586;
                                                            continue _fun10001
                                                        }
                                                    case 31:
                                                        var4 = var0.usageMetadata;
                                                        if (!var4) {
                                                            _fun10001_ip = 291;
                                                            continue _fun10001
                                                        }
                                                    case 43:
                                                        var4 = var0.usageMetadata;
                                                        var4 = typeof var4;
                                                        if (!(var5 === var4)) {
                                                            _fun10001_ip = 291;
                                                            continue _fun10001
                                                        }
                                                    case 59:
                                                        var4 = var0.usageMetadata;
                                                        var5 = var4.promptTokenCount;
                                                        var6 = 'number';
                                                        var5 = typeof var5;
                                                        if (!(var6 === var5)) {
                                                            _fun10001_ip = 143;
                                                            continue _fun10001
                                                        }
                                                    case 82:
                                                        var7 = var2.setAttributes;
                                                        var11 = _closure1_slot3;
                                                        var8 = _closure1_slot0;
                                                        var9 = _closure1_slot1;
                                                        var5 = 2;
                                                        var5 = var9[var5];
                                                        var10 = undefined;
                                                        var5 = var8.bind(var10)(var5);
                                                        var9 = var5.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                                                        var8 = var4.promptTokenCount;
                                                        var5 = {};
                                                        var5 = var11.bind(var10)(var5, var9, var8);
                                                        var5 = var7.bind(var2)(var5);
                                                    case 143:
                                                        var5 = var4.candidatesTokenCount;
                                                        var5 = typeof var5;
                                                        if (!(var6 === var5)) {
                                                            _fun10001_ip = 217;
                                                            continue _fun10001
                                                        }
                                                    case 156:
                                                        var7 = var2.setAttributes;
                                                        var11 = _closure1_slot3;
                                                        var8 = _closure1_slot0;
                                                        var9 = _closure1_slot1;
                                                        var5 = 2;
                                                        var5 = var9[var5];
                                                        var10 = undefined;
                                                        var5 = var8.bind(var10)(var5);
                                                        var9 = var5.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                                                        var8 = var4.candidatesTokenCount;
                                                        var5 = {};
                                                        var5 = var11.bind(var10)(var5, var9, var8);
                                                        var5 = var7.bind(var2)(var5);
                                                    case 217:
                                                        var5 = var4.totalTokenCount;
                                                        var5 = typeof var5;
                                                        if (!(var6 === var5)) {
                                                            _fun10001_ip = 291;
                                                            continue _fun10001
                                                        }
                                                    case 230:
                                                        var5 = var2.setAttributes;
                                                        var9 = _closure1_slot3;
                                                        var7 = _closure1_slot0;
                                                        var8 = _closure1_slot1;
                                                        var6 = 2;
                                                        var6 = var8[var6];
                                                        var8 = undefined;
                                                        var6 = var7.bind(var8)(var6);
                                                        var7 = var6.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                                                        var6 = var4.totalTokenCount;
                                                        var4 = {};
                                                        var4 = var9.bind(var8)(var4, var7, var6);
                                                        var4 = var5.bind(var2)(var4);
                                                    case 291:
                                                        if (!var1) {
                                                            _fun10001_ip = 458;
                                                            continue _fun10001
                                                        }
                                                    case 297:
                                                        var4 = global;
                                                        var6 = var4.Array;
                                                        var5 = var6.isArray;
                                                        var4 = var0.candidates;
                                                        var4 = var5.bind(var6)(var4);
                                                        if (!var4) {
                                                            _fun10001_ip = 458;
                                                            continue _fun10001
                                                        }
                                                    case 327:
                                                        var4 = var0.candidates;
                                                        var5 = var4.length;
                                                        var4 = 0;
                                                        if (!(var5 > var4)) {
                                                            _fun10001_ip = 458;
                                                            continue _fun10001
                                                        }
                                                    case 344:
                                                        var7 = var0.candidates;
                                                        var6 = var7.map;
                                                        var5 = function(arg0) { // Environment: var3
                                                            _fun10002: for (var _fun10002_ip = 0;;) switch (_fun10002_ip) {
                                                                case 0:
                                                                    var2 = arg0;
                                                                    var4 = var2.content;
                                                                    var0 = null;
                                                                    var5 = var0 != var4;
                                                                    var3 = '';
                                                                    var0 = var3;
                                                                    if (!var5) {
                                                                        _fun10002_ip = 124;
                                                                        continue _fun10002
                                                                    }
                                                                case 26:
                                                                    var4 = var4.parts;
                                                                    var0 = var3;
                                                                    if (!var4) {
                                                                        _fun10002_ip = 124;
                                                                        continue _fun10002
                                                                    }
                                                                case 38:
                                                                    var4 = global;
                                                                    var6 = var4.Array;
                                                                    var5 = var6.isArray;
                                                                    var4 = var2.content;
                                                                    var4 = var4.parts;
                                                                    var4 = var5.bind(var6)(var4);
                                                                    var0 = var3;
                                                                    if (!var4) {
                                                                        _fun10002_ip = 124;
                                                                        continue _fun10002
                                                                    }
                                                                case 73:
                                                                    var2 = var2.content;
                                                                    var5 = var2.parts;
                                                                    var4 = var5.map;
                                                                    var2 = function(arg0) { // Environment: var1
                                                                        _fun10003: for (var _fun10003_ip = 0;;) switch (_fun10003_ip) {
                                                                            case 0:
                                                                                var1 = arg0;
                                                                                var2 = var1.text;
                                                                                var0 = '';
                                                                                var3 = 'string';
                                                                                var2 = typeof var2;
                                                                                if (!(var3 === var2)) {
                                                                                    _fun10003_ip = 28;
                                                                                    continue _fun10003
                                                                                }
                                                                            case 23:
                                                                                var0 = var1.text;
                                                                            case 28:
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    var4 = var4.bind(var5)(var2);
                                                                    var2 = var4.filter;
                                                                    var1 = function(arg0) { // Environment: var1
                                                                        var0 = arg0;
                                                                        var1 = var0.length;
                                                                        var0 = 0;
                                                                        var0 = var1 > var0;
                                                                        return var0;
                                                                    };
                                                                    var2 = var2.bind(var4)(var1);
                                                                    var1 = var2.join;
                                                                    var0 = var1.bind(var2)(var3);
                                                                case 124:
                                                                    return var0;
                                                            }
                                                        };
                                                        var6 = var6.bind(var7)(var5);
                                                        var5 = var6.filter;
                                                        var3 = function(arg0) { // Environment: var3
                                                            var0 = arg0;
                                                            var1 = var0.length;
                                                            var0 = 0;
                                                            var0 = var1 > var0;
                                                            return var0;
                                                        };
                                                        var9 = var5.bind(var6)(var3);
                                                        var3 = var9.length;
                                                        if (!(var3 > var4)) {
                                                            _fun10001_ip = 458;
                                                            continue _fun10001
                                                        }
                                                    case 389:
                                                        var4 = var2.setAttributes;
                                                        var8 = _closure1_slot3;
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot1;
                                                        var3 = 2;
                                                        var3 = var6[var3];
                                                        var7 = undefined;
                                                        var3 = var5.bind(var7)(var3);
                                                        var6 = var3.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                                                        var5 = var9.join;
                                                        var3 = '';
                                                        var5 = var5.bind(var9)(var3);
                                                        var3 = {};
                                                        var3 = var8.bind(var7)(var3, var6, var5);
                                                        var3 = var4.bind(var2)(var3);
                                                    case 458:
                                                        if (!var1) {
                                                            _fun10001_ip = 586;
                                                            continue _fun10001
                                                        }
                                                    case 464:
                                                        var1 = var0.functionCalls;
                                                        if (!var1) {
                                                            _fun10001_ip = 586;
                                                            continue _fun10001
                                                        }
                                                    case 473:
                                                        var7 = var0.functionCalls;
                                                        var0 = global;
                                                        var3 = var0.Array;
                                                        var1 = var3.isArray;
                                                        var1 = var1.bind(var3)(var7);
                                                        if (!var1) {
                                                            _fun10001_ip = 511;
                                                            continue _fun10001
                                                        }
                                                    case 500:
                                                        var4 = var7.length;
                                                        var3 = 0;
                                                        var1 = var4 > var3;
                                                    case 511:
                                                        if (!var1) {
                                                            _fun10001_ip = 586;
                                                            continue _fun10001
                                                        }
                                                    case 514:
                                                        var1 = var2.setAttributes;
                                                        var6 = _closure1_slot3;
                                                        var4 = _closure1_slot0;
                                                        var5 = _closure1_slot1;
                                                        var3 = 2;
                                                        var3 = var5[var3];
                                                        var5 = undefined;
                                                        var3 = var4.bind(var5)(var3);
                                                        var4 = var3.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                                                        var3 = var0.JSON;
                                                        var0 = var3.stringify;
                                                        var3 = var0.bind(var3)(var7);
                                                        var0 = {};
                                                        var0 = var6.bind(var5)(var0, var4, var3);
                                                        var0 = var1.bind(var2)(var0);
                                                    case 586:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var2.bind(var1)(var4, var0, var3);
                                        case 46:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var10 = var5;
                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var0);
                    _fun9991_ip = 409;
                    continue _fun9991;
                case 310:
                    var3 = var4.startSpanManual;
                    var2 = {};
                    var11 = global;
                    var11 = var11.HermesInternal;
                    var14 = var11.concat;
                    var22 = '';
                    var20 = ' ';
                    var18 = ' stream-response';
                    var21 = var15;
                    var19 = var16;
                    var11 = var22[var14](var21, var20, var19, var18, var17);
                    var2.name = var11;
                    var8 = var8[var10];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.getSpanOperation;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var9)(var7);
                    var2.op = var7;
                    var2.attributes = var6;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun9994: for (var _fun9994_ip = 0;;) switch (_fun9994_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun9994_ip = 306;
                                            continue _fun9994
                                        }
                                    case 10:
                                        var2 = arg0;
                                    case 13: // try_start_0
                                        var4 = _closure2_slot2;
                                        var4 = var4.recordInputs;
                                        var1 = var4;
                                        if (!var4) {
                                            _fun9994_ip = 39;
                                            continue _fun9994
                                        }
                                    case 32:
                                        var1 = _closure3_slot2;
                                    case 39:
                                        if (!var1) {
                                            _fun9994_ip = 67;
                                            continue _fun9994
                                        }
                                    case 42:
                                        var6 = _closure1_slot6;
                                        var5 = var2;
                                        var4 = _closure3_slot2;
                                        var1 = undefined;
                                        var1 = var6.bind(var1)(var5, var4);
                                    case 67:
                                        var6 = _closure3_slot0;
                                        var5 = var6.apply;
                                        var4 = _closure2_slot1;
                                        var1 = _closure3_slot1;
                                        var1 = var5.bind(var6)(var4, var1);
                                        SaveGenerator(address = 97);
                                    case 95:
                                        return var1;
                                    case 97:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun9994_ip = 170;
                                            continue _fun9994
                                        }
                                    case 103:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 8;
                                        var4 = var6[var4];
                                        var8 = undefined;
                                        var6 = var5.bind(var8)(var4);
                                        var5 = var6.instrumentStream;
                                        var4 = var2;
                                        var7 = global;
                                        var7 = var7.Boolean;
                                        var3 = _closure2_slot2;
                                        var3 = var3.recordOutputs;
                                        var3 = var7.bind(var8)(var3);
                                        var3 = var5.bind(var6)(var1, var4, var3);
                                    case 167: // try_end0
                                        return var3;
                                    case 170:
                                        return var1;
                                    case 173: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var3 = var2;
                                        var7 = var3.setStatus;
                                        var2 = {};
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 9;
                                        var8 = var6[var4];
                                        var4 = undefined;
                                        var8 = var5.bind(var4)(var8);
                                        var8 = var8.SPAN_STATUS_ERROR;
                                        var2.code = var8;
                                        var8 = 'internal_error';
                                        var2.message = var8;
                                        var2 = var7.bind(var3)(var2);
                                        var2 = 10;
                                        var2 = var6[var2];
                                        var5 = var5.bind(var4)(var2);
                                        var4 = var5.captureException;
                                        var2 = {};
                                        var6 = {
                                            'handled': false,
                                            'type': 'auto.ai.google_genai'
                                        };
                                        var7 = {};
                                        var8 = _closure2_slot0;
                                        var7.function = var8;
                                        var6.data = var7;
                                        var2.mechanism = var6;
                                        var2 = var4.bind(var5)(var1, var2);
                                        var2 = var3.end;
                                        var2 = var2.bind(var3)();
                                        throw var1;
                                    case 306:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var1 = var1.bind(var5)();
                    var0 = var3.bind(var4)(var2, var1);
                case 409:
                    return var0;
            }
        };
        var2.apply = var0;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var6 = arg0;
        var7 = var1;
        var5 = var2;
        var0 = new var7[var3](var6, var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: createDeepProxy, environment: var1
        _fun10006: for (var _fun10006_ip = 0;;) switch (_fun10006_ip) {
            case 0:
                var1 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var4 = 1;
                var5 = var2 > var4;
                var6 = '';
                var2 = var6;
                if (!var5) {
                    _fun10006_ip = 41;
                    continue _fun10006
                }
            case 26:
                var5 = arguments[var4];
                var2 = var6;
                if (!(var1 !== var5)) {
                    _fun10006_ip = 41;
                    continue _fun10006
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
                    _fun10006_ip = 64;
                    continue _fun10006
                }
            case 60:
                var1 = arguments[var2];
            case 64:
                var _closure2_slot1 = var1;
                var1 = global;
                var3 = var1.Proxy;
                var2 = {};
                var0 = function(arg0, arg1, arg2) { // Original name: get, environment: var0
                    _fun10007: for (var _fun10007_ip = 0;;) switch (_fun10007_ip) {
                        case 0:
                            var6 = arg0;
                            var10 = arg1;
                            var3 = global;
                            var4 = var3.Reflect;
                            var2 = var4.get;
                            var1 = arg2;
                            var5 = var2.bind(var4)(var6, var10, var1);
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var1 = var4[var1];
                            var4 = undefined;
                            var9 = var7.bind(var4)(var1);
                            var8 = var9.buildMethodPath;
                            var7 = _closure2_slot0;
                            var3 = var3.String;
                            var3 = var3.bind(var4)(var10);
                            var3 = var8.bind(var9)(var7, var3);
                            var9 = typeof var5;
                            var7 = 'function';
                            var7 = var7 === var9;
                            if (!var7) {
                                _fun10007_ip = 134;
                                continue _fun10007
                            }
                        case 100:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var8 = 6;
                            var8 = var11[var8];
                            var10 = var10.bind(var4)(var8);
                            var8 = var10.shouldInstrument;
                            var8 = var8.bind(var10)(var3);
                            if (var8) {
                                _fun10007_ip = 183;
                                continue _fun10007
                            }
                        case 134:
                            if (var7) {
                                _fun10007_ip = 171;
                                continue _fun10007
                            }
                        case 137:
                            var7 = var5;
                            if (!var5) {
                                _fun10007_ip = 169;
                                continue _fun10007
                            }
                        case 143:
                            var8 = 'object';
                            var7 = var5;
                            if (!(var8 === var9)) {
                                _fun10007_ip = 169;
                                continue _fun10007
                            }
                        case 154:
                            var9 = _closure1_slot8;
                            var8 = _closure2_slot1;
                            var7 = var9.bind(var4)(var5, var3, var8);
                        case 169:
                            _fun10007_ip = 181;
                            continue _fun10007;
                        case 171:
                            var8 = var5.bind;
                            var7 = var8.bind(var5)(var6);
                        case 181:
                            return var7;
                        case 183:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var7 = 3;
                            var7 = var9[var7];
                            var7 = var8.bind(var4)(var7);
                            var7 = var7.CHATS_CREATE_METHOD;
                            if (!(var3 !== var7)) {
                                _fun10007_ip = 238;
                                continue _fun10007
                            }
                        case 213:
                            var8 = _closure1_slot7;
                            var12 = _closure2_slot1;
                            var16 = undefined;
                            var15 = var5;
                            var14 = var3;
                            var13 = var6;
                            var7 = var16[var8](var15, var14, var13, var12, var11);
                            return var7;
                        case 238:
                            var2 = _closure1_slot7;
                            var12 = _closure2_slot1;
                            var16 = undefined;
                            var15 = var5;
                            var14 = var3;
                            var13 = var6;
                            var1 = var16[var2](var15, var14, var13, var12, var11);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Original name: instrumentedAndProxiedCreate, environment: var0
                                _fun10008: for (var _fun10008_ip = 0;;) switch (_fun10008_ip) {
                                    case 0:
                                        var5 = undefined;
                                        var0 = undefined;
                                        var2 = _closure3_slot0;
                                        var1 = var2.apply;
                                        var0 = arguments;
                                        var4 = var1.bind(var2)(var5, var0);
                                        var0 = var4;
                                        if (!var4) {
                                            _fun10008_ip = 91;
                                            continue _fun10008
                                        }
                                    case 30:
                                        var2 = 'object';
                                        var1 = typeof var4;
                                        var0 = var4;
                                        if (!(var2 === var1)) {
                                            _fun10008_ip = 91;
                                            continue _fun10008
                                        }
                                    case 44:
                                        var3 = _closure1_slot8;
                                        var2 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var1 = 3;
                                        var1 = var6[var1];
                                        var1 = var2.bind(var5)(var1);
                                        var2 = var1.CHAT_PATH;
                                        var1 = _closure2_slot1;
                                        var0 = var3.bind(var5)(var4, var2, var1);
                                    case 91:
                                        return var0;
                                }
                            };
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
    var2.extractModel = var3;
    var1 = function(arg0, arg1) { // Original name: instrumentGoogleGenAIClient, environment: var1
        _fun10009: for (var _fun10009_ip = 0;;) switch (_fun10009_ip) {
            case 0:
                var1 = global;
                var3 = var1.Boolean;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 12;
                var0 = var4[var0];
                var4 = undefined;
                var5 = var5.bind(var4)(var0);
                var0 = var5.getClient;
                var6 = var0.bind(var5)();
                var0 = null;
                var5 = var0 == var6;
                var0 = undefined;
                if (var5) {
                    _fun10009_ip = 70;
                    continue _fun10009
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
    var2.instrumentGoogleGenAIClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 77, 955, 971, 957, 838, 972, 864, 973, 839, 867, 865, 847]);