// modules/guild_onboarding/GuildOnboardingPromptsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun43124: for (var _fun43124_ip = 0;;) switch (_fun43124_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun43124_ip = 74;
                continue _fun43124;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: convertPromptsToTracked, environment: var3
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun43128: for (var _fun43128_ip = 0;;) switch (_fun43128_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure2_slot0;
                    var10 = _closure2_slot1;
                    var6 = new Array(0);
                    var0 = var1.options;
                    var0 = var0.length;
                    var9 = 0;
                    var0 = var9 < var0;
                    var4 = false;
                    var8 = 'isUnseen';
                    var2 = null;
                    var5 = false;
                    if (!var0) {
                        _fun43128_ip = 121;
                        continue _fun43128
                    }
                case 47:
                    var0 = var1.options;
                    var13 = var0[var9];
                    var0 = var13.id;
                    var0 = var10[var0];
                    var12 = var2 == var0;
                    if (!var12) {
                        _fun43128_ip = 74;
                        continue _fun43128
                    }
                case 72:
                    var4 = true;
                case 74:
                    var11 = var6.push;
                    var0 = {};
                    var15 = var0;
                    var14 = var13;
                    var13 = copyDataProperties(var15, var14);
                    var0[var8] = var12;
                    var0 = var11.bind(var6)(var0);
                    var9 = var9 + 1;
                    var0 = var1.options;
                    var0 = var0.length;
                    var5 = var4;
                    if (var9 < var0) {
                        _fun43128_ip = 47;
                        continue _fun43128
                    }
                case 121:
                    var0 = {};
                    var15 = var0;
                    var14 = var1;
                    var4 = copyDataProperties(var15, var14);
                    var4 = 'options';
                    var0[var4] = var6;
                    var4 = 'hasNewAnswers';
                    var0[var4] = var5;
                    var1 = var1.id;
                    var1 = var3[var1];
                    var2 = var2 == var1;
                    var1 = 'isNew';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var8 = function(arg0) { // Original name: handleUpdate, environment: var3
        _fun43129: for (var _fun43129_ip = 0;;) switch (_fun43129_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = var0.updates;
                var7 = var4.onboardingPromptsSeen;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun43129_ip = 55;
                    continue _fun43129
                }
            case 26:
                var1 = _closure1_slot13;
                var2 = var1[var3];
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun43129_ip = 52;
                    continue _fun43129
                }
            case 46:
                var1 = var2.onboardingPromptsSeen;
            case 52:
                var7 = var1;
            case 55:
                if (!(var0 == var7)) {
                    _fun43129_ip = 61;
                    continue _fun43129
                }
            case 59:
                var7 = {};
            case 61:
                var6 = var4.onboardingResponsesSeen;
                if (!(var0 == var6)) {
                    _fun43129_ip = 100;
                    continue _fun43129
                }
            case 71:
                var1 = _closure1_slot13;
                var2 = var1[var3];
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun43129_ip = 97;
                    continue _fun43129
                }
            case 91:
                var1 = var2.onboardingResponsesSeen;
            case 97:
                var6 = var1;
            case 100:
                if (!(var0 == var6)) {
                    _fun43129_ip = 106;
                    continue _fun43129
                }
            case 104:
                var6 = {};
            case 106:
                var5 = _closure1_slot22;
                var2 = var4.prompts;
                if (!(var0 == var2)) {
                    _fun43129_ip = 149;
                    continue _fun43129
                }
            case 123:
                var8 = _closure1_slot13;
                var9 = var8[var3];
                var10 = var0 == var9;
                var8 = undefined;
                if (var10) {
                    _fun43129_ip = 146;
                    continue _fun43129
                }
            case 140:
                var8 = var9.prompts;
            case 146:
                var2 = var8;
            case 149:
                if (!(var0 == var2)) {
                    _fun43129_ip = 157;
                    continue _fun43129
                }
            case 153:
                var2 = new Array(0);
            case 157:
                var0 = undefined;
                var5 = var5.bind(var0)(var2, var7, var6);
                var2 = _closure1_slot13;
                var1 = {};
                var12 = var2[var3];
                var13 = var1;
                var6 = copyDataProperties(var13, var12);
                var13 = var1;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var4 = 'prompts';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
        }
    };
    var0 = function(arg0, arg1) { // Original name: mergePendingResponses, environment: var3
        _fun43130: for (var _fun43130_ip = 0;;) switch (_fun43130_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var7;
                var3 = _closure1_slot14;
                var4 = var3[var2];
                var3 = null;
                if (!(var3 != var4)) {
                    _fun43130_ip = 171;
                    continue _fun43130
                }
            case 36:
                var6 = {};
                var _closure2_slot2 = var6;
                var3 = global;
                var8 = var3.Object;
                var5 = var8.keys;
                var4 = _closure1_slot14;
                var4 = var4[var2];
                var8 = var5.bind(var8)(var4);
                var5 = var8.forEach;
                var4 = function(arg0) { // Environment: var1
                    _fun43131: for (var _fun43131_ip = 0;;) switch (_fun43131_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot1;
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var2);
                            if (var1) {
                                _fun43131_ip = 57;
                                continue _fun43131
                            }
                        case 23:
                            var3 = _closure1_slot14;
                            var1 = _closure2_slot0;
                            var1 = var3[var1];
                            var1 = var1[var2];
                            if (!var1) {
                                _fun43131_ip = 57;
                                continue _fun43131
                            }
                        case 45:
                            var3 = _closure2_slot2;
                            var1 = true;
                            var3[var2] = var1;
                            _fun43131_ip = 112;
                            continue _fun43131;
                        case 57:
                            var3 = _closure2_slot1;
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var2);
                            if (!var1) {
                                _fun43131_ip = 99;
                                continue _fun43131
                            }
                        case 74:
                            var4 = _closure1_slot14;
                            var3 = _closure2_slot0;
                            var3 = var4[var3];
                            var4 = var3[var2];
                            var3 = false;
                            var1 = var3 === var4;
                        case 99:
                            if (!var1) {
                                _fun43131_ip = 112;
                                continue _fun43131
                            }
                        case 102:
                            var1 = _closure2_slot2;
                            var0 = false;
                            var1[var2] = var0;
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var5.bind(var8)(var4);
                var4 = _closure1_slot14;
                var4[var2] = var6;
                var5 = var7.filter;
                var4 = function(arg0) { // Environment: var1
                    _fun43132: for (var _fun43132_ip = 0;;) switch (_fun43132_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot2;
                            var3 = var0[var2];
                            var0 = null;
                            var0 = var0 == var3;
                            if (var0) {
                                _fun43132_ip = 37;
                                continue _fun43132
                            }
                        case 23:
                            var1 = _closure2_slot2;
                            var2 = var1[var2];
                            var1 = true;
                            var0 = var1 === var2;
                        case 37:
                            return var0;
                    }
                };
                var4 = var5.bind(var7)(var4);
                var _closure2_slot3 = var4;
                var5 = var3.Object;
                var3 = var5.keys;
                var5 = var3.bind(var5)(var6);
                var3 = var5.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun43133: for (var _fun43133_ip = 0;;) switch (_fun43133_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            var3 = var1[var2];
                            var1 = true;
                            var1 = var1 !== var3;
                            if (var1) {
                                _fun43133_ip = 37;
                                continue _fun43133
                            }
                        case 23:
                            var4 = _closure2_slot1;
                            var3 = var4.includes;
                            var1 = var3.bind(var4)(var2);
                        case 37:
                            if (var1) {
                                _fun43133_ip = 54;
                                continue _fun43133
                            }
                        case 40:
                            var1 = _closure2_slot3;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1);
                var1 = _closure1_slot13;
                var0 = {};
                var9 = var1[var2];
                var10 = var0;
                var3 = copyDataProperties(var10, var9);
                var3 = 'responses';
                var0[var3] = var4;
                var1[var2] = var0;
            case 171:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var7 = var5[var1];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildOnboardingStatus;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildOnboardingMode;
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = {};
    var _closure1_slot14 = var1;
    var1 = {};
    var _closure1_slot15 = var1;
    var1 = false;
    var _closure1_slot16 = var1;
    var1 = new Array(0);
    var _closure1_slot17 = var1;
    var1 = new Array(0);
    var _closure1_slot18 = var1;
    var1 = new Array(0);
    var _closure1_slot19 = var1;
    var1 = new Array(0);
    var _closure1_slot20 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GuildOnboardingPromptsStore, environment: var5
            _fun43135: for (var _fun43135_ip = 0;;) switch (_fun43135_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43135_ip = 69;
                        continue _fun43135
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43135_ip = 105;
                    continue _fun43135;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot10;
            var0 = _closure1_slot8;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOnboardingPromptsForOnboarding';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43137: for (var _fun43137_ip = 0;;) switch (_fun43137_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43137_ip = 31;
                        continue _fun43137
                    }
                case 25:
                    var0 = var3.onboardingPrompts;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43137_ip = 39;
                        continue _fun43137
                    }
                case 35:
                    var0 = _closure1_slot17;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getOnboardingPrompts';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43138: for (var _fun43138_ip = 0;;) switch (_fun43138_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43138_ip = 31;
                        continue _fun43138
                    }
                case 25:
                    var0 = var3.prompts;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43138_ip = 39;
                        continue _fun43138
                    }
                case 35:
                    var0 = _closure1_slot17;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getOnboardingResponses';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43139: for (var _fun43139_ip = 0;;) switch (_fun43139_ip) {
                case 0:
                    var6 = arg0;
                    var1 = _closure1_slot8;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var6);
                    if (var0) {
                        _fun43139_ip = 59;
                        continue _fun43139
                    }
                case 24:
                    var0 = _closure1_slot13;
                    var2 = var0[var6];
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun43139_ip = 49;
                        continue _fun43139
                    }
                case 43:
                    var0 = var2.responses;
                case 49:
                    if (!(var1 == var0)) {
                        _fun43139_ip = 57;
                        continue _fun43139
                    }
                case 53:
                    var0 = _closure1_slot18;
                case 57:
                    _fun43139_ip = 102;
                    continue _fun43139;
                case 59:
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var5 = _closure1_slot8;
                    var1 = var5.getOnboardingResponses;
                    var1 = var1.bind(var5)(var6);
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun43139_ip = 97;
                        continue _fun43139
                    }
                case 93:
                    var1 = _closure1_slot18;
                case 97:
                    var0 = var2.bind(var3)(var1);
                case 102:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSelectedOptions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var3 = arg0;
            var2 = this;
            var1 = var2.getOnboardingResponses;
            var1 = var1.bind(var2)(var3);
            var _closure3_slot0 = var1;
            var1 = var2.getOnboardingPrompts;
            var3 = var1.bind(var2)(var3);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.options;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.flat;
            var2 = var1.bind(var2)();
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.includes;
                var0 = arg0;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getOnboardingResponsesForPrompt';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun43143: for (var _fun43143_ip = 0;;) switch (_fun43143_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot13;
                    var2 = var2[var6];
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun43143_ip = 130;
                        continue _fun43143
                    }
                case 32:
                    var7 = var2.prompts;
                    var4 = var7.find;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var4.bind(var7)(var2);
                    if (!(var3 != var2)) {
                        _fun43143_ip = 124;
                        continue _fun43143
                    }
                case 57:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var3 = var4.intersection;
                    var7 = var2.options;
                    var2 = var7.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var2.bind(var7)(var1);
                    var1 = var5.getOnboardingResponses;
                    var1 = var1.bind(var5)(var6);
                    var1 = var3.bind(var4)(var2, var1);
                    _fun43143_ip = 128;
                    continue _fun43143;
                case 124:
                    var1 = _closure1_slot18;
                case 128:
                    return var1;
                case 130:
                    var0 = _closure1_slot18;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getEnabledOnboardingPrompts';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43146: for (var _fun43146_ip = 0;;) switch (_fun43146_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot13;
                    var4 = var0[var3];
                    var1 = _closure1_slot8;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var3);
                    var3 = null;
                    if (var0) {
                        _fun43146_ip = 62;
                        continue _fun43146
                    }
                case 34:
                    if (!(var3 != var4)) {
                        _fun43146_ip = 56;
                        continue _fun43146
                    }
                case 38:
                    var0 = var4.enabled;
                    if (!var0) {
                        _fun43146_ip = 56;
                        continue _fun43146
                    }
                case 46:
                    var0 = var4.prompts;
                    if (!(var3 == var0)) {
                        _fun43146_ip = 60;
                        continue _fun43146
                    }
                case 56:
                    var0 = _closure1_slot17;
                case 60:
                    _fun43146_ip = 88;
                    continue _fun43146;
                case 62:
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun43146_ip = 77;
                        continue _fun43146
                    }
                case 71:
                    var1 = var4.prompts;
                case 77:
                    if (!(var3 == var1)) {
                        _fun43146_ip = 85;
                        continue _fun43146
                    }
                case 81:
                    var1 = _closure1_slot17;
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getDefaultChannelIds';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43147: for (var _fun43147_ip = 0;;) switch (_fun43147_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43147_ip = 31;
                        continue _fun43147
                    }
                case 25:
                    var0 = var3.defaultChannelIds;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43147_ip = 39;
                        continue _fun43147
                    }
                case 35:
                    var0 = _closure1_slot19;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43148: for (var _fun43148_ip = 0;;) switch (_fun43148_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot8;
                    var0 = var3.isFullServerPreview;
                    var0 = var0.bind(var3)(var2);
                    var1 = _closure1_slot13;
                    var2 = var1[var2];
                    var1 = null;
                    if (var0) {
                        _fun43148_ip = 60;
                        continue _fun43148
                    }
                case 34:
                    var0 = var1 == var2;
                    var3 = undefined;
                    if (var0) {
                        _fun43148_ip = 48;
                        continue _fun43148
                    }
                case 43:
                    var3 = var2.enabled;
                case 48:
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun43148_ip = 58;
                        continue _fun43148
                    }
                case 55:
                    var0 = var3;
                case 58:
                    _fun43148_ip = 64;
                    continue _fun43148;
                case 60:
                    var0 = var1 != var2;
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getOnboardingPrompt';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot13;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.prompts;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.flat;
            var2 = var1.bind(var2)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'shouldFetchPrompts';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43153: for (var _fun43153_ip = 0;;) switch (_fun43153_ip) {
                case 0:
                    var2 = arguments[1];
                    var3 = undefined;
                    if (!(var2 === var3)) {
                        _fun43153_ip = 44;
                        continue _fun43153
                    }
                case 9:
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.Millis;
                    var2 = var0.HOUR;
                case 44:
                    var1 = _closure1_slot16;
                    if (var1) {
                        _fun43153_ip = 101;
                        continue _fun43153
                    }
                case 54:
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    var0 = var0 == var3;
                    if (var0) {
                        _fun43153_ip = 99;
                        continue _fun43153
                    }
                case 74:
                    var1 = global;
                    var4 = var1.Date;
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var1 = var1 - var3;
                    var0 = var1 > var2;
                case 99:
                    return var0;
                case 101:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getPendingResponseOptions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot14;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'ackIdForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.getEnabledOnboardingPrompts;
            var1 = arg0;
            var3 = var2.bind(var3)(var1);
            var1 = '0';
            var _closure3_slot0 = var1;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                _fun43156: for (var _fun43156_ip = 0;;) switch (_fun43156_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.options;
                        var2 = var3.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun43157: for (var _fun43157_ip = 0;;) switch (_fun43157_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 12;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var2);
                                    var5 = var6.compare;
                                    var4 = var1.id;
                                    var3 = _closure3_slot0;
                                    var4 = var5.bind(var6)(var4, var3);
                                    var3 = 0;
                                    if (!(var4 > var3)) {
                                        _fun43157_ip = 67;
                                        continue _fun43157
                                    }
                                case 58:
                                    var1 = var1.id;
                                    _closure3_slot0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var0);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.compare;
                        var4 = var1.id;
                        var3 = _closure3_slot0;
                        var4 = var5.bind(var6)(var4, var3);
                        var3 = 0;
                        if (!(var4 > var3)) {
                            _fun43156_ip = 89;
                            continue _fun43156
                        }
                    case 80:
                        var1 = var1.id;
                        _closure3_slot0 = var1;
                    case 89:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot0;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'lastFetchedAt';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot15;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isAdvancedMode';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun43159: for (var _fun43159_ip = 0;;) switch (_fun43159_ip) {
                case 0:
                    var4 = arg0;
                    var2 = null;
                    var0 = var2 != var4;
                    if (!var0) {
                        _fun43159_ip = 51;
                        continue _fun43159
                    }
                case 12:
                    var3 = _closure1_slot13;
                    var3 = var3[var4];
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun43159_ip = 37;
                        continue _fun43159
                    }
                case 32:
                    var2 = var3.mode;
                case 37:
                    var1 = _closure1_slot12;
                    var1 = var1.ONBOARDING_ADVANCED;
                    var0 = var2 === var1;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getConnections';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun43160: for (var _fun43160_ip = 0;;) switch (_fun43160_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43160_ip = 31;
                        continue _fun43160
                    }
                case 25:
                    var0 = var3.connections;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43160_ip = 39;
                        continue _fun43160
                    }
                case 35:
                    var0 = _closure1_slot20;
                case 39:
                    return var0;
            }
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildOnboardingPromptsStore';
    var7.displayName = var1;
    var1 = 14;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() { // Original name: handleConnectionOpen, environment: var3
        var0 = false;
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function(arg0) { // Original name: handleGuildDelete, environment: var3
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot13;
        var2 = var0.id;
        var2 = delete var3[var2];
        var3 = _closure1_slot14;
        var2 = var0.id;
        var2 = delete var3[var2];
        var1 = _closure1_slot15;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var9;
    var9 = function() { // Original name: handleStart, environment: var3
        var0 = true;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ONBOARDING_PROMPTS_FETCH_START = var9;
    var9 = function(arg0) { // Original name: handleSuccess, environment: var3
        _fun43164: for (var _fun43164_ip = 0;;) switch (_fun43164_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var _closure2_slot0 = var3;
                var6 = var0.prompts;
                var12 = var0.defaultChannelIds;
                var15 = var0.enabled;
                var4 = var0.responses;
                var9 = var0.onboardingPromptsSeen;
                var8 = var0.onboardingResponsesSeen;
                var13 = var0.mode;
                var11 = var0.belowRequirements;
                var7 = var0.connections;
                var0 = false;
                _closure1_slot16 = var0;
                var2 = _closure1_slot10;
                var0 = var2.getOnboardingStatus;
                var2 = var0.bind(var2)(var3);
                var0 = _closure1_slot11;
                var0 = var0.READY;
                var2 = var2 === var0;
                var5 = _closure1_slot22;
                var0 = undefined;
                var14 = var5.bind(var0)(var6, var9, var8);
                var6 = _closure1_slot13;
                var5 = {};
                var5.enabled = var15;
                var5.mode = var13;
                var5.belowRequirements = var11;
                var5.prompts = var14;
                var13 = var14.filter;
                var11 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var0 = var0.inOnboarding;
                    return var0;
                };
                var11 = var13.bind(var14)(var11);
                var5.onboardingPrompts = var11;
                var11 = var12.filter;
                var10 = function(arg0) { // Environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.canChannelBeDefault;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                var5.defaultChannelIds = var10;
                var10 = var4;
                if (!var2) {
                    _fun43164_ip = 193;
                    continue _fun43164
                }
            case 189:
                var10 = new Array(0);
            case 193:
                var5.responses = var10;
                var5.onboardingPromptsSeen = var9;
                var5.onboardingResponsesSeen = var8;
                var8 = null;
                if (!(var8 == var7)) {
                    _fun43164_ip = 218;
                    continue _fun43164
                }
            case 214:
                var7 = new Array(0);
            case 218:
                var5.connections = var7;
                var6[var3] = var5;
                if (var2) {
                    _fun43164_ip = 240;
                    continue _fun43164
                }
            case 230:
                var2 = _closure1_slot23;
                var2 = var2.bind(var0)(var3, var4);
            case 240:
                var2 = _closure1_slot15;
                var1 = global;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var2[var3] = var1;
                return var0;
        }
    };
    var1.GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS = var9;
    var9 = function() { // Original name: handleFailure, environment: var3
        var0 = false;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE = var9;
    var9 = function(arg0) { // Original name: handleOptionSelect, environment: var3
        _fun43168: for (var _fun43168_ip = 0;;) switch (_fun43168_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var _closure2_slot0 = var4;
                var9 = var0.optionId;
                var8 = var0.selected;
                var6 = var0.removedOptionIds;
                var1 = _closure1_slot8;
                var0 = var1.isFullServerPreview;
                var0 = var0.bind(var1)(var4);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun43168_ip = 307;
                    continue _fun43168
                }
            case 62:
                var1 = _closure1_slot13;
                var1 = var1[var4];
                var5 = null;
                var1 = var5 != var1;
                if (!var1) {
                    _fun43168_ip = 304;
                    continue _fun43168
                }
            case 82:
                var7 = var5 != var6;
                if (!var7) {
                    _fun43168_ip = 100;
                    continue _fun43168
                }
            case 89:
                var11 = var6.length;
                var10 = 0;
                var7 = var11 > var10;
            case 100:
                if (!var7) {
                    _fun43168_ip = 151;
                    continue _fun43168
                }
            case 103:
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 10;
                var10 = var10[var7];
                var7 = undefined;
                var11 = var11.bind(var7)(var10);
                var10 = var11.pullAll;
                var7 = _closure1_slot13;
                var7 = var7[var4];
                var7 = var7.responses;
                var7 = var10.bind(var11)(var7, var6);
            case 151:
                if (var8) {
                    _fun43168_ip = 204;
                    continue _fun43168
                }
            case 154:
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 10;
                var10 = var10[var7];
                var7 = undefined;
                var11 = var11.bind(var7)(var10);
                var10 = var11.pull;
                var7 = _closure1_slot13;
                var7 = var7[var4];
                var7 = var7.responses;
                var7 = var10.bind(var11)(var7, var9);
                _fun43168_ip = 228;
                continue _fun43168;
            case 204:
                var7 = _closure1_slot13;
                var7 = var7[var4];
                var10 = var7.responses;
                var7 = var10.push;
                var7 = var7.bind(var10)(var9);
            case 228:
                var7 = _closure1_slot14;
                var7 = var7[var4];
                if (!(var5 == var7)) {
                    _fun43168_ip = 250;
                    continue _fun43168
                }
            case 240:
                var10 = _closure1_slot14;
                var7 = {};
                var10[var4] = var7;
            case 250:
                var7 = _closure1_slot14;
                var7 = var7[var4];
                var7[var9] = var8;
                if (!(var5 != var6)) {
                    _fun43168_ip = 281;
                    continue _fun43168
                }
            case 266:
                var5 = var6.forEach;
                var3 = function(arg0) { // Environment: var3
                    var1 = _closure1_slot14;
                    var0 = _closure2_slot0;
                    var2 = var1[var0];
                    var0 = false;
                    var1 = arg0;
                    var2[var1] = var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
            case 281:
                var3 = _closure1_slot14;
                var2 = {};
                var12 = var3[var4];
                var13 = var2;
                var5 = copyDataProperties(var13, var12);
                var3[var4] = var2;
                var1 = true;
            case 304:
                var0 = var1;
            case 307:
                return var0;
        }
    };
    var1.GUILD_ONBOARDING_SELECT_OPTION = var9;
    var9 = function(arg0) { // Original name: handleUpdateResponsesSuccess, environment: var3
        _fun43170: for (var _fun43170_ip = 0;;) switch (_fun43170_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = var0.options;
                var6 = var0.prompts_seen;
                var5 = var0.options_seen;
                var2 = _closure1_slot23;
                var0 = undefined;
                var2 = var2.bind(var0)(var3, var4);
                var2 = _closure1_slot13;
                var4 = var2[var3];
                var2 = null;
                if (!(var2 != var4)) {
                    _fun43170_ip = 146;
                    continue _fun43170
                }
            case 54:
                var7 = _closure1_slot22;
                var2 = var4.prompts;
                var8 = var7.bind(var0)(var2, var6, var5);
                var2 = _closure1_slot13;
                var1 = {};
                var11 = var1;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = 'prompts';
                var1[var4] = var8;
                var7 = var8.filter;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.inOnboarding;
                    return var0;
                };
                var7 = var7.bind(var8)(var4);
                var4 = 'onboardingPrompts';
                var1[var4] = var7;
                var4 = 'onboardingPromptsSeen';
                var1[var4] = var6;
                var4 = 'onboardingResponsesSeen';
                var1[var4] = var5;
                var2[var3] = var1;
                return var0;
            case 146:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS = var9;
    var1.GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE = var8;
    var1.GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleUpdateDefaultChannels, environment: var3
        var0 = arg0;
        var2 = var0.guildId;
        var4 = var0.channelIds;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = var1[var2];
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = 'defaultChannelIds';
        var0[var3] = var4;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleUpdateConnections, environment: var3
        _fun43173: for (var _fun43173_ip = 0;;) switch (_fun43173_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.connections;
                var1 = _closure1_slot13;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun43173_ip = 65;
                    continue _fun43173
                }
            case 31:
                var1 = _closure1_slot13;
                var0 = {};
                var5 = var1[var2];
                var6 = var0;
                var3 = copyDataProperties(var6, var5);
                var3 = 'connections';
                var0[var3] = var4;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 65:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS = var8;
    var3 = function(arg0) { // Original name: handleSetMode, environment: var3
        _fun43174: for (var _fun43174_ip = 0;;) switch (_fun43174_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.mode;
                var0 = _closure1_slot13;
                var0 = var0[var2];
                var2 = null;
                if (!(var2 != var0)) {
                    _fun43174_ip = 36;
                    continue _fun43174
                }
            case 30:
                var0.mode = var1;
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_SETTINGS_ONBOARDING_SET_MODE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/GuildOnboardingPromptsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1664, 1372, 4640, 4540, 4542, 22, 667, 21, 566, 806, 2]);