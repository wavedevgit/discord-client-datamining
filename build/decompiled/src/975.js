// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0) { // Original name: asString, environment: var3
        _fun10048: for (var _fun10048_ip = 0;;) switch (_fun10048_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun10048_ip = 63;
                    continue _fun10048
                }
            case 17: // try_start_0
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.stringify;
                var1 = var0;
                var1 = var2.bind(var3)(var1);
            case 39: // try_end0
                return var1;
            case 41: // catch_target0
                CatchBlockStart(arg_register = 1);
                var1 = global;
                var3 = var1.String;
                var2 = var0;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: normalizeMessageRole, environment: var3
        _fun10049: for (var _fun10049_ip = 0;;) switch (_fun10049_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.toLowerCase;
                var0 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ROLE_MAP;
                var1 = var1[var0];
                var2 = null;
                if (!(var2 != var1)) {
                    _fun10049_ip = 57;
                    continue _fun10049
                }
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: normalizeRoleNameFromCtor, environment: var3
        _fun10050: for (var _fun10050_ip = 0;;) switch (_fun10050_ip) {
            case 0:
                var7 = arg0;
                var1 = var7.includes;
                var0 = 'System';
                var1 = var1.bind(var7)(var0);
                var0 = 'system';
                if (var1) {
                    _fun10050_ip = 155;
                    continue _fun10050
                }
            case 27:
                var2 = var7.includes;
                var1 = 'Human';
                var2 = var2.bind(var7)(var1);
                var4 = 'user';
                var1 = var4;
                if (var2) {
                    _fun10050_ip = 152;
                    continue _fun10050
                }
            case 53:
                var3 = var7.includes;
                var2 = 'AI';
                var3 = var3.bind(var7)(var2);
                var5 = 'assistant';
                var2 = var5;
                if (var3) {
                    _fun10050_ip = 149;
                    continue _fun10050
                }
            case 77:
                var6 = var7.includes;
                var3 = 'Assistant';
                var3 = var6.bind(var7)(var3);
                var2 = var5;
                if (var3) {
                    _fun10050_ip = 149;
                    continue _fun10050
                }
            case 99:
                var5 = var7.includes;
                var3 = 'Function';
                var5 = var5.bind(var7)(var3);
                var3 = 'function';
                if (var5) {
                    _fun10050_ip = 146;
                    continue _fun10050
                }
            case 120:
                var6 = var7.includes;
                var5 = 'Tool';
                var5 = var6.bind(var7)(var5);
                if (!var5) {
                    _fun10050_ip = 143;
                    continue _fun10050
                }
            case 139:
                var4 = 'tool';
            case 143:
                var3 = var4;
            case 146:
                var2 = var3;
            case 149:
                var1 = var2;
            case 152:
                var0 = var1;
            case 155:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var1 = function(arg0) { // Original name: normalizeLangChainMessages, environment: var3
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun10052: for (var _fun10052_ip = 0;;) switch (_fun10052_ip) {
                case 0:
                    var1 = arg0;
                    var4 = var1._getType;
                    var2 = 'function';
                    var0 = typeof var4;
                    if (!(var2 !== var0)) {
                        _fun10052_ip = 444;
                        continue _fun10052
                    }
                case 23:
                    var0 = var1.constructor;
                    var2 = null;
                    var3 = var2 == var0;
                    var5 = undefined;
                    var7 = undefined;
                    if (var3) {
                        _fun10052_ip = 46;
                        continue _fun10052
                    }
                case 41:
                    var7 = var0.name;
                case 46:
                    if (var7) {
                        _fun10052_ip = 396;
                        continue _fun10052
                    }
                case 52:
                    var0 = var1.type;
                    if (var0) {
                        _fun10052_ip = 329;
                        continue _fun10052
                    }
                case 63:
                    var0 = var1.role;
                    if (var0) {
                        _fun10052_ip = 271;
                        continue _fun10052
                    }
                case 75:
                    var0 = var1.lc;
                    var6 = 1;
                    if (!(var6 === var0)) {
                        _fun10052_ip = 96;
                        continue _fun10052
                    }
                case 87:
                    var0 = var1.kwargs;
                    if (var0) {
                        _fun10052_ip = 130;
                        continue _fun10052
                    }
                case 96:
                    var0 = {};
                    var3 = 'user';
                    var0.role = var3;
                    var8 = _closure1_slot5;
                    var3 = var1.content;
                    var3 = var8.bind(var5)(var3);
                    var0.content = var3;
                    return var0;
                case 130:
                    var3 = var1.id;
                    var0 = global;
                    var8 = var0.Array;
                    var0 = var8.isArray;
                    var0 = var0.bind(var8)(var3);
                    var8 = '';
                    var10 = var8;
                    if (!var0) {
                        _fun10052_ip = 193;
                        continue _fun10052
                    }
                case 163:
                    var9 = var3.length;
                    var0 = 0;
                    var0 = var9 > var0;
                    var10 = var8;
                    if (!var0) {
                        _fun10052_ip = 193;
                        continue _fun10052
                    }
                case 180:
                    var0 = var3.length;
                    var0 = var0 - var6;
                    var10 = var3[var0];
                case 193:
                    var0 = {};
                    var8 = _closure1_slot6;
                    var6 = 'user';
                    var11 = 'string';
                    var9 = typeof var10;
                    if (!(var11 === var9)) {
                        _fun10052_ip = 226;
                        continue _fun10052
                    }
                case 217:
                    var9 = _closure1_slot7;
                    var6 = var9.bind(var5)(var10);
                case 226:
                    var6 = var8.bind(var5)(var6);
                    var0.role = var6;
                    var3 = _closure1_slot5;
                    var6 = var1.kwargs;
                    var8 = var2 == var6;
                    var2 = undefined;
                    if (var8) {
                        _fun10052_ip = 260;
                        continue _fun10052
                    }
                case 255:
                    var2 = var6.content;
                case 260:
                    var2 = var3.bind(var5)(var2);
                    var0.content = var2;
                    return var0;
                case 271:
                    var0 = {};
                    var6 = _closure1_slot6;
                    var3 = global;
                    var8 = var3.String;
                    var3 = var1.role;
                    var3 = var8.bind(var5)(var3);
                    var3 = var6.bind(var5)(var3);
                    var0.role = var3;
                    var3 = _closure1_slot5;
                    var2 = var1.content;
                    var2 = var3.bind(var5)(var2);
                    var0.content = var2;
                    return var0;
                case 329:
                    var0 = {};
                    var6 = _closure1_slot6;
                    var3 = global;
                    var8 = var3.String;
                    var3 = var1.type;
                    var8 = var8.bind(var5)(var3);
                    var3 = var8.toLowerCase;
                    var3 = var3.bind(var8)();
                    var3 = var6.bind(var5)(var3);
                    var0.role = var3;
                    var3 = _closure1_slot5;
                    var2 = var1.content;
                    var2 = var3.bind(var5)(var2);
                    var0.content = var2;
                    return var0;
                case 396:
                    var0 = {};
                    var6 = _closure1_slot6;
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var5)(var7);
                    var3 = var6.bind(var5)(var3);
                    var0.role = var3;
                    var3 = _closure1_slot5;
                    var2 = var1.content;
                    var2 = var3.bind(var5)(var2);
                    var0.content = var2;
                    return var0;
                case 444:
                    var0 = {};
                    var5 = _closure1_slot6;
                    var3 = var4.call;
                    var4 = var3.bind(var4)(var1);
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var0.role = var4;
                    var2 = _closure1_slot5;
                    var1 = var1.content;
                    var1 = var2.bind(var3)(var1);
                    var0.content = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var1;
    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: baseRequestAttributes, environment: var3
        _fun10053: for (var _fun10053_ip = 0;;) switch (_fun10053_ip) {
            case 0:
                var14 = arg0;
                var9 = arg3;
                var4 = arg4;
                var12 = arg5;
                var8 = global;
                var3 = var8.Object;
                var2 = var3.assign;
                var13 = _closure1_slot2;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var10 = 2;
                var0 = var0[var10];
                var7 = undefined;
                var0 = var1.bind(var7)(var0);
                var11 = var0.GEN_AI_SYSTEM_ATTRIBUTE;
                var1 = _closure1_slot5;
                var6 = null;
                var15 = var6 != var14;
                var0 = 'langchain';
                if (!var15) {
                    _fun10053_ip = 82;
                    continue _fun10053
                }
            case 79:
                var0 = var14;
            case 82:
                var1 = var1.bind(var7)(var0);
                var0 = {};
                var11 = var13.bind(var7)(var0, var11, var1);
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var0 = var15[var10];
                var0 = var14.bind(var7)(var0);
                var1 = var0.GEN_AI_OPERATION_NAME_ATTRIBUTE;
                var0 = arg2;
                var11 = var13.bind(var7)(var11, var1, var0);
                var0 = var15[var10];
                var0 = var14.bind(var7)(var0);
                var1 = var0.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
                var16 = _closure1_slot5;
                var0 = arg1;
                var0 = var16.bind(var7)(var0);
                var11 = var13.bind(var7)(var11, var1, var0);
                var0 = 3;
                var0 = var15[var0];
                var0 = var14.bind(var7)(var0);
                var1 = var0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var0 = 1;
                var0 = var15[var0];
                var0 = var14.bind(var7)(var0);
                var0 = var0.LANGCHAIN_ORIGIN;
                var1 = var13.bind(var7)(var11, var1, var0);
                var0 = {};
                var11 = 'kwargs';
                var13 = var11 in var9;
                var11 = undefined;
                if (!var13) {
                    _fun10053_ip = 227;
                    continue _fun10053
                }
            case 221:
                var11 = var9.kwargs;
            case 227:
                var9 = var6 == var4;
                var14 = undefined;
                if (var9) {
                    _fun10053_ip = 242;
                    continue _fun10053
                }
            case 236:
                var14 = var4.temperature;
            case 242:
                if (!(var6 == var14)) {
                    _fun10053_ip = 264;
                    continue _fun10053
                }
            case 246:
                var13 = var6 == var12;
                var9 = undefined;
                if (var13) {
                    _fun10053_ip = 261;
                    continue _fun10053
                }
            case 255:
                var9 = var12.ls_temperature;
            case 261:
                var14 = var9;
            case 264:
                if (!(var6 == var14)) {
                    _fun10053_ip = 286;
                    continue _fun10053
                }
            case 268:
                var13 = var6 == var11;
                var9 = undefined;
                if (var13) {
                    _fun10053_ip = 283;
                    continue _fun10053
                }
            case 277:
                var9 = var11.temperature;
            case 283:
                var14 = var9;
            case 286:
                var13 = _closure1_slot4;
                var15 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var15.bind(var7)(var9);
                var9 = var9.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE;
                var9 = var13.bind(var7)(var0, var9, var14);
                var9 = var6 == var4;
                var13 = undefined;
                if (var9) {
                    _fun10053_ip = 335;
                    continue _fun10053
                }
            case 329:
                var13 = var4.max_tokens;
            case 335:
                if (!(var6 == var13)) {
                    _fun10053_ip = 357;
                    continue _fun10053
                }
            case 339:
                var14 = var6 == var12;
                var9 = undefined;
                if (var14) {
                    _fun10053_ip = 354;
                    continue _fun10053
                }
            case 348:
                var9 = var12.ls_max_tokens;
            case 354:
                var13 = var9;
            case 357:
                if (!(var6 == var13)) {
                    _fun10053_ip = 379;
                    continue _fun10053
                }
            case 361:
                var12 = var6 == var11;
                var9 = undefined;
                if (var12) {
                    _fun10053_ip = 376;
                    continue _fun10053
                }
            case 370:
                var9 = var11.max_tokens;
            case 376:
                var13 = var9;
            case 379:
                var12 = _closure1_slot4;
                var14 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var14.bind(var7)(var9);
                var9 = var9.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE;
                var9 = var12.bind(var7)(var0, var9, var13);
                var9 = var6 == var4;
                var12 = undefined;
                if (var9) {
                    _fun10053_ip = 428;
                    continue _fun10053
                }
            case 422:
                var12 = var4.top_p;
            case 428:
                if (!(var6 == var12)) {
                    _fun10053_ip = 450;
                    continue _fun10053
                }
            case 432:
                var13 = var6 == var11;
                var9 = undefined;
                if (var13) {
                    _fun10053_ip = 447;
                    continue _fun10053
                }
            case 441:
                var9 = var11.top_p;
            case 447:
                var12 = var9;
            case 450:
                var11 = _closure1_slot4;
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var13.bind(var7)(var9);
                var9 = var9.GEN_AI_REQUEST_TOP_P_ATTRIBUTE;
                var9 = var11.bind(var7)(var0, var9, var12);
                var9 = var6 == var4;
                var12 = undefined;
                if (var9) {
                    _fun10053_ip = 499;
                    continue _fun10053
                }
            case 493:
                var12 = var4.frequency_penalty;
            case 499:
                var11 = _closure1_slot4;
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var9 = var13.bind(var7)(var9);
                var9 = var9.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE;
                var9 = var11.bind(var7)(var0, var9, var12);
                var6 = var6 == var4;
                var11 = undefined;
                if (var6) {
                    _fun10053_ip = 548;
                    continue _fun10053
                }
            case 542:
                var11 = var4.presence_penalty;
            case 548:
                var9 = _closure1_slot4;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var6 = var12.bind(var7)(var6);
                var6 = var6.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE;
                var6 = var9.bind(var7)(var0, var6, var11);
                var6 = var4;
                if (!var6) {
                    _fun10053_ip = 596;
                    continue _fun10053
                }
            case 588:
                var9 = 'stream';
                var6 = var9 in var4;
            case 596:
                if (!var6) {
                    _fun10053_ip = 650;
                    continue _fun10053
                }
            case 599:
                var6 = _closure1_slot3;
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var10];
                var5 = var9.bind(var7)(var5);
                var5 = var5.GEN_AI_REQUEST_STREAM_ATTRIBUTE;
                var8 = var8.Boolean;
                var4 = var4.stream;
                var4 = var8.bind(var7)(var4);
                var4 = var6.bind(var7)(var0, var5, var4);
            case 650:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = function(arg0, arg1, arg2) { // Original name: setIfDefined, environment: var3
        _fun10054: for (var _fun10054_ip = 0;;) switch (_fun10054_ip) {
            case 0:
                var2 = arg2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun10054_ip = 19;
                    continue _fun10054
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
    var _closure1_slot3 = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: setNumberIfDefined, environment: var3
        _fun10055: for (var _fun10055_ip = 0;;) switch (_fun10055_ip) {
            case 0:
                var1 = global;
                var3 = var1.Number;
                var0 = undefined;
                var2 = arg2;
                var3 = var3.bind(var0)(var2);
                var2 = var1.Number;
                var1 = var2.isNaN;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun10055_ip = 48;
                    continue _fun10055
                }
            case 38:
                var2 = arg0;
                var1 = arg1;
                var2[var1] = var3;
            case 48:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: extractChatModelRequestAttributes, environment: var3
        _fun10056: for (var _fun10056_ip = 0;;) switch (_fun10056_ip) {
            case 0:
                var9 = arg0;
                var5 = arg1;
                var8 = arg3;
                var7 = arg4;
                var6 = _closure1_slot9;
                var2 = null;
                var0 = var2 == var7;
                var4 = undefined;
                var3 = undefined;
                if (var0) {
                    _fun10056_ip = 38;
                    continue _fun10056
                }
            case 32:
                var3 = var7.ls_provider;
            case 38:
                if (!(var2 == var3)) {
                    _fun10056_ip = 66;
                    continue _fun10056
                }
            case 42:
                var11 = var9.id;
                var10 = var2 == var11;
                var0 = undefined;
                if (var10) {
                    _fun10056_ip = 63;
                    continue _fun10056
                }
            case 56:
                var10 = 2;
                var0 = var11[var10];
            case 63:
                var3 = var0;
            case 66:
                var10 = var2 == var8;
                var0 = undefined;
                if (var10) {
                    _fun10056_ip = 81;
                    continue _fun10056
                }
            case 75:
                var0 = var8.model;
            case 81:
                if (!(var2 == var0)) {
                    _fun10056_ip = 103;
                    continue _fun10056
                }
            case 85:
                var11 = var2 == var7;
                var10 = undefined;
                if (var11) {
                    _fun10056_ip = 100;
                    continue _fun10056
                }
            case 94:
                var10 = var7.ls_model_name;
            case 100:
                var0 = var10;
            case 103:
                var10 = var2 != var0;
                var2 = 'unknown';
                if (!var10) {
                    _fun10056_ip = 117;
                    continue _fun10056
                }
            case 114:
                var2 = var0;
            case 117:
                var15 = 'chat';
                var18 = undefined;
                var17 = var3;
                var16 = var2;
                var14 = var9;
                var13 = var8;
                var12 = var7;
                var0 = var18[var6](var17, var16, var15, var14, var13, var12, var11);
                var2 = arg2;
                if (!var2) {
                    _fun10056_ip = 268;
                    continue _fun10056
                }
            case 148:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var5);
                if (!var2) {
                    _fun10056_ip = 268;
                    continue _fun10056
                }
            case 169:
                var3 = var5.length;
                var2 = 0;
                if (!(var3 > var2)) {
                    _fun10056_ip = 268;
                    continue _fun10056
                }
            case 180:
                var3 = _closure1_slot8;
                var2 = var5.flat;
                var2 = var2.bind(var5)();
                var5 = var3.bind(var4)(var2);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var3 = var6.bind(var4)(var2);
                var2 = var3.truncateGenAiMessages;
                var5 = var2.bind(var3)(var5);
                var3 = _closure1_slot3;
                var2 = 2;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)(var5);
                var1 = var3.bind(var4)(var0, var2, var1);
            case 268:
                return var0;
        }
    };
    var2.extractChatModelRequestAttributes = var4;
    var4 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: extractLLMRequestAttributes, environment: var3
        _fun10057: for (var _fun10057_ip = 0;;) switch (_fun10057_ip) {
            case 0:
                var5 = arg1;
                var9 = arg3;
                var8 = arg4;
                var7 = _closure1_slot9;
                var2 = null;
                var0 = var2 == var8;
                var4 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun10057_ip = 35;
                    continue _fun10057
                }
            case 29:
                var6 = var8.ls_provider;
            case 35:
                var3 = var2 == var9;
                var0 = undefined;
                if (var3) {
                    _fun10057_ip = 50;
                    continue _fun10057
                }
            case 44:
                var0 = var9.model;
            case 50:
                if (!(var2 == var0)) {
                    _fun10057_ip = 72;
                    continue _fun10057
                }
            case 54:
                var10 = var2 == var8;
                var3 = undefined;
                if (var10) {
                    _fun10057_ip = 69;
                    continue _fun10057
                }
            case 63:
                var3 = var8.ls_model_name;
            case 69:
                var0 = var3;
            case 72:
                var2 = var2 != var0;
                var3 = 'unknown';
                if (!var2) {
                    _fun10057_ip = 86;
                    continue _fun10057
                }
            case 83:
                var3 = var0;
            case 86:
                var14 = 'pipeline';
                var13 = arg0;
                var17 = undefined;
                var16 = var6;
                var15 = var3;
                var12 = var9;
                var11 = var8;
                var0 = var17[var7](var16, var15, var14, var13, var12, var11, var10);
                var2 = arg2;
                if (!var2) {
                    _fun10057_ip = 214;
                    continue _fun10057
                }
            case 119:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var5);
                if (!var2) {
                    _fun10057_ip = 214;
                    continue _fun10057
                }
            case 140:
                var3 = var5.length;
                var2 = 0;
                if (!(var3 > var2)) {
                    _fun10057_ip = 214;
                    continue _fun10057
                }
            case 151:
                var3 = var5.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = {};
                    var1 = 'user';
                    var0.role = var1;
                    var1 = arg0;
                    var0.content = var1;
                    return var0;
                };
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)(var5);
                var1 = var3.bind(var4)(var0, var2, var1);
            case 214:
                return var0;
        }
    };
    var2.extractLLMRequestAttributes = var4;
    var4 = function(arg0, arg1) { // Original name: extractLlmResponseAttributes, environment: var3
        _fun10059: for (var _fun10059_ip = 0;;) switch (_fun10059_ip) {
            case 0:
                var1 = arg0;
                if (var1) {
                    _fun10059_ip = 12;
                    continue _fun10059
                }
            case 8:
                var0 = undefined;
                return var0;
            case 12:
                var0 = {};
                var7 = global;
                var5 = var7.Array;
                var4 = var5.isArray;
                var3 = var1.generations;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun10059_ip = 489;
                    continue _fun10059
                }
            case 44:
                var4 = var1.generations;
                var3 = var4.flat;
                var5 = var3.bind(var4)();
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var2
                    _fun10060: for (var _fun10060_ip = 0;;) switch (_fun10060_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.generation_info;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun10060_ip = 26;
                                continue _fun10060
                            }
                        case 20:
                            var0 = var1.finish_reason;
                        case 26:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var2
                    var1 = 'string';
                    var0 = arg0;
                    var0 = typeof var0;
                    var0 = var1 === var0;
                    return var0;
                };
                var9 = var4.bind(var5)(var3);
                var4 = var9.length;
                var3 = 0;
                if (!(var4 > var3)) {
                    _fun10059_ip = 152;
                    continue _fun10059
                }
            case 101:
                var8 = _closure1_slot3;
                var10 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 2;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var10.bind(var6)(var5);
                var5 = var5.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var9);
                var4 = var8.bind(var6)(var0, var5, var4);
            case 152:
                var8 = var1.generations;
                var5 = undefined;
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var4 = new Array(0);
                var6 = var8.flat;
                var6 = var6.bind(var8)();
                var10 = var6;
                var8 = var10[Symbol.iterator];
                var10 = var8().next;
                var9 = 'tool_use';
                var6 = null;
            case 194:
                var14 = var10().value;
                var15 = var8;
                if (!(var15 !== var5)) {
                    _fun10059_ip = 318;
                    continue _fun10059
                }
            case 205: // try_start_1
                var14 = var14.message;
                var11 = var14;
                var14 = var6 == var14;
                var16 = undefined;
                if (var14) {
                    _fun10059_ip = 230;
                    continue _fun10059
                }
            case 222:
                var14 = var11;
                var16 = var14.content;
            case 230:
                var12 = var16;
                var15 = var7.Array;
                var14 = var15.isArray;
                var14 = var14.bind(var15)(var16);
                if (!var14) {
                    _fun10059_ip = 309;
                    continue _fun10059
                }
            case 252:
                var16 = var12;
                var14 = var16;
                var15 = var14[Symbol.iterator];
                var14 = var15().next;
            case 261:
                var16 = var14().value;
                var17 = var15;
                if (!(var17 !== var5)) {
                    _fun10059_ip = 309;
                    continue _fun10059
                }
            case 272: // try_start_0
                var13 = var16;
                var16 = var16.type;
                if (!(var9 === var16)) {
                    _fun10059_ip = 300;
                    continue _fun10059
                }
            case 284:
                var18 = var4;
                var17 = var18.push;
                var16 = var13;
                var16 = var17.bind(var18)(var16);
            case 300: // try_end0
                _fun10059_ip = 261;
                continue _fun10059;
            case 302: // catch_target0
                CatchBlockStart(arg_register = 14);
                var15.return();
                throw var14;
            case 309: // try_end1
                _fun10059_ip = 194;
                continue _fun10059;
            case 311: // catch_target1
                CatchBlockStart(arg_register = 6);
                var8.return();
                throw var6;
            case 318:
                var6 = var4;
                var6 = var6.length;
                if (!(var6 > var3)) {
                    _fun10059_ip = 379;
                    continue _fun10059
                }
            case 330:
                var8 = _closure1_slot3;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 2;
                var6 = var11[var6];
                var6 = var10.bind(var5)(var6);
                var6 = var6.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE;
                var9 = _closure1_slot5;
                var4 = var9.bind(var5)(var4);
                var4 = var8.bind(var5)(var0, var6, var4);
            case 379:
                var4 = arg1;
                if (!var4) {
                    _fun10059_ip = 489;
                    continue _fun10059
                }
            case 385:
                var6 = var1.generations;
                var4 = var6.flat;
                var8 = var4.bind(var6)();
                var6 = var8.map;
                var4 = function(arg0) { // Environment: var2
                    _fun10062: for (var _fun10062_ip = 0;;) switch (_fun10062_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.text;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun10062_ip = 36;
                                continue _fun10062
                            }
                        case 14:
                            var2 = var2.message;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun10062_ip = 33;
                                continue _fun10062
                            }
                        case 28:
                            var1 = var2.content;
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var4);
                var4 = var6.filter;
                var2 = function(arg0) { // Environment: var2
                    var1 = 'string';
                    var0 = arg0;
                    var0 = typeof var0;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var4.bind(var6)(var2);
                var2 = var6.length;
                if (!(var2 > var3)) {
                    _fun10059_ip = 489;
                    continue _fun10059
                }
            case 440:
                var4 = _closure1_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 2;
                var3 = var9[var3];
                var3 = var8.bind(var5)(var3);
                var3 = var3.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)(var6);
                var2 = var4.bind(var5)(var0, var3, var2);
            case 489:
                var3 = var1.llmOutput;
                if (!var3) {
                    _fun10059_ip = 950;
                    continue _fun10059
                }
            case 501:
                var2 = var3.tokenUsage;
                var3 = var3.usage;
                if (var2) {
                    _fun10059_ip = 838;
                    continue _fun10059
                }
            case 519:
                if (!var3) {
                    _fun10059_ip = 950;
                    continue _fun10059
                }
            case 525:
                var12 = _closure1_slot4;
                var9 = _closure1_slot0;
                var5 = _closure1_slot1;
                var8 = 2;
                var10 = var5[var8];
                var6 = undefined;
                var10 = var9.bind(var6)(var10);
                var11 = var10.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var10 = var3.input_tokens;
                var10 = var12.bind(var6)(var0, var11, var10);
                var10 = _closure1_slot4;
                var5 = var5[var8];
                var5 = var9.bind(var6)(var5);
                var9 = var5.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var5 = var3.output_tokens;
                var5 = var10.bind(var6)(var0, var9, var5);
                var9 = var7.Number;
                var5 = var3.input_tokens;
                var11 = var9.bind(var6)(var5);
                var9 = var7.Number;
                var5 = var3.output_tokens;
                var10 = var9.bind(var6)(var5);
                var9 = var7.Number;
                var5 = var9.isNaN;
                var12 = var5.bind(var9)(var11);
                var5 = 0;
                var9 = 0;
                if (var12) {
                    _fun10059_ip = 666;
                    continue _fun10059
                }
            case 663:
                var9 = var11;
            case 666:
                var11 = var7.Number;
                var7 = var11.isNaN;
                var11 = var7.bind(var11)(var10);
                var7 = 0;
                if (var11) {
                    _fun10059_ip = 691;
                    continue _fun10059
                }
            case 688:
                var7 = var10;
            case 691:
                var9 = var9 + var7;
                if (!(var9 > var5)) {
                    _fun10059_ip = 733;
                    continue _fun10059
                }
            case 699:
                var7 = _closure1_slot4;
                var10 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var10.bind(var6)(var5);
                var5 = var5.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                var5 = var7.bind(var6)(var0, var5, var9);
            case 733:
                var5 = var3.cache_creation_input_tokens;
                if (!(var6 !== var5)) {
                    _fun10059_ip = 783;
                    continue _fun10059
                }
            case 743:
                var9 = _closure1_slot4;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var6)(var5);
                var7 = var5.GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE;
                var5 = var3.cache_creation_input_tokens;
                var5 = var9.bind(var6)(var0, var7, var5);
            case 783:
                var5 = var3.cache_read_input_tokens;
                if (!(var6 !== var5)) {
                    _fun10059_ip = 950;
                    continue _fun10059
                }
            case 796:
                var5 = _closure1_slot4;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var4 = var7.bind(var6)(var4);
                var4 = var4.GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE;
                var3 = var3.cache_read_input_tokens;
                var3 = var5.bind(var6)(var0, var4, var3);
                _fun10059_ip = 950;
                continue _fun10059;
            case 838:
                var10 = _closure1_slot4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var8 = var7[var3];
                var5 = undefined;
                var8 = var6.bind(var5)(var8);
                var9 = var8.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE;
                var8 = var2.promptTokens;
                var8 = var10.bind(var5)(var0, var9, var8);
                var10 = _closure1_slot4;
                var8 = var7[var3];
                var8 = var6.bind(var5)(var8);
                var9 = var8.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE;
                var8 = var2.completionTokens;
                var8 = var10.bind(var5)(var0, var9, var8);
                var4 = _closure1_slot4;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE;
                var2 = var2.totalTokens;
                var2 = var4.bind(var5)(var0, var3, var2);
            case 950:
                var1 = var1.llmOutput;
                var2 = null;
                var3 = var2 == var1;
                var4 = undefined;
                var6 = undefined;
                if (var3) {
                    _fun10059_ip = 975;
                    continue _fun10059
                }
            case 969:
                var6 = var1.model_name;
            case 975:
                if (!(var2 == var6)) {
                    _fun10059_ip = 997;
                    continue _fun10059
                }
            case 979:
                var5 = var2 == var1;
                var3 = undefined;
                if (var5) {
                    _fun10059_ip = 994;
                    continue _fun10059
                }
            case 988:
                var3 = var1.model;
            case 994:
                var6 = var3;
            case 997:
                if (!var6) {
                    _fun10059_ip = 1040;
                    continue _fun10059
                }
            case 1000:
                var5 = _closure1_slot3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.GEN_AI_RESPONSE_MODEL_ATTRIBUTE;
                var3 = var5.bind(var4)(var0, var3, var6);
            case 1040:
                var3 = var2 != var1;
                if (!var3) {
                    _fun10059_ip = 1052;
                    continue _fun10059
                }
            case 1047:
                var3 = var1.id;
            case 1052:
                if (!var3) {
                    _fun10059_ip = 1100;
                    continue _fun10059
                }
            case 1055:
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 2;
                var3 = var7[var3];
                var3 = var5.bind(var4)(var3);
                var5 = var3.GEN_AI_RESPONSE_ID_ATTRIBUTE;
                var3 = var1.id;
                var3 = var6.bind(var4)(var0, var5, var3);
            case 1100:
                var2 = var2 != var1;
                if (!var2) {
                    _fun10059_ip = 1113;
                    continue _fun10059
                }
            case 1107:
                var2 = var1.stop_reason;
            case 1113:
                if (!var2) {
                    _fun10059_ip = 1171;
                    continue _fun10059
                }
            case 1116:
                var3 = _closure1_slot3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE;
                var5 = _closure1_slot5;
                var1 = var1.stop_reason;
                var1 = var5.bind(var4)(var1);
                var1 = var3.bind(var4)(var0, var2, var1);
            case 1171:
                return var0;
        }
    };
    var2.extractLlmResponseAttributes = var4;
    var3 = function(arg0) { // Original name: getInvocationParams, environment: var3
        _fun10064: for (var _fun10064_ip = 0;;) switch (_fun10064_ip) {
            case 0:
                var0 = arg0;
                if (!var0) {
                    _fun10064_ip = 35;
                    continue _fun10064
                }
            case 6:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var0);
                if (var1) {
                    _fun10064_ip = 35;
                    continue _fun10064
                }
            case 27:
                var0 = var0.invocation_params;
                return var0;
            case 35:
                var0 = undefined;
                return var0;
        }
    };
    var2.getInvocationParams = var3;
    var2.normalizeLangChainMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 976, 955, 838, 958]);