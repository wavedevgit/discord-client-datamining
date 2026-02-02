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
    var0 = function() {
        _fun43196: for (var _fun43196_ip = 0;;) switch (_fun43196_ip) {
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
                _fun43196_ip = 74;
                continue _fun43196;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var0 = function arg0, arg1, arg2() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun43200: for (var _fun43200_ip = 0;;) switch (_fun43200_ip) {
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
                        _fun43200_ip = 121;
                        continue _fun43200
                    }
                case 47:
                    var0 = var1.options;
                    var13 = var0[var9];
                    var0 = var13.id;
                    var0 = var10[var0];
                    var12 = var2 == var0;
                    if (!var12) {
                        _fun43200_ip = 74;
                        continue _fun43200
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
                        _fun43200_ip = 47;
                        continue _fun43200
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
    var8 = function arg0() {
        _fun43201: for (var _fun43201_ip = 0;;) switch (_fun43201_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var4 = var0.updates;
                var7 = var4.onboardingPromptsSeen;
                var0 = null;
                if (!(var0 == var7)) {
                    _fun43201_ip = 55;
                    continue _fun43201
                }
            case 26:
                var1 = _closure1_slot13;
                var2 = var1[var3];
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun43201_ip = 52;
                    continue _fun43201
                }
            case 46:
                var1 = var2.onboardingPromptsSeen;
            case 52:
                var7 = var1;
            case 55:
                if (!(var0 == var7)) {
                    _fun43201_ip = 61;
                    continue _fun43201
                }
            case 59:
                var7 = {};
            case 61:
                var6 = var4.onboardingResponsesSeen;
                if (!(var0 == var6)) {
                    _fun43201_ip = 100;
                    continue _fun43201
                }
            case 71:
                var1 = _closure1_slot13;
                var2 = var1[var3];
                var5 = var0 == var2;
                var1 = undefined;
                if (var5) {
                    _fun43201_ip = 97;
                    continue _fun43201
                }
            case 91:
                var1 = var2.onboardingResponsesSeen;
            case 97:
                var6 = var1;
            case 100:
                if (!(var0 == var6)) {
                    _fun43201_ip = 106;
                    continue _fun43201
                }
            case 104:
                var6 = {};
            case 106:
                var5 = _closure1_slot22;
                var2 = var4.prompts;
                if (!(var0 == var2)) {
                    _fun43201_ip = 149;
                    continue _fun43201
                }
            case 123:
                var8 = _closure1_slot13;
                var9 = var8[var3];
                var10 = var0 == var9;
                var8 = undefined;
                if (var10) {
                    _fun43201_ip = 146;
                    continue _fun43201
                }
            case 140:
                var8 = var9.prompts;
            case 146:
                var2 = var8;
            case 149:
                if (!(var0 == var2)) {
                    _fun43201_ip = 157;
                    continue _fun43201
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
    var0 = function arg0, arg1() {
        _fun43202: for (var _fun43202_ip = 0;;) switch (_fun43202_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var7;
                var3 = _closure1_slot14;
                var4 = var3[var2];
                var3 = null;
                if (!(var3 != var4)) {
                    _fun43202_ip = 171;
                    continue _fun43202
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
                    _fun43203: for (var _fun43203_ip = 0;;) switch (_fun43203_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot1;
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var2);
                            if (var1) {
                                _fun43203_ip = 57;
                                continue _fun43203
                            }
                        case 23:
                            var3 = _closure1_slot14;
                            var1 = _closure2_slot0;
                            var1 = var3[var1];
                            var1 = var1[var2];
                            if (!var1) {
                                _fun43203_ip = 57;
                                continue _fun43203
                            }
                        case 45:
                            var3 = _closure2_slot2;
                            var1 = true;
                            var3[var2] = var1;
                            _fun43203_ip = 112;
                            continue _fun43203;
                        case 57:
                            var3 = _closure2_slot1;
                            var1 = var3.includes;
                            var1 = var1.bind(var3)(var2);
                            if (!var1) {
                                _fun43203_ip = 99;
                                continue _fun43203
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
                                _fun43203_ip = 112;
                                continue _fun43203
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
                    _fun43204: for (var _fun43204_ip = 0;;) switch (_fun43204_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot2;
                            var3 = var0[var2];
                            var0 = null;
                            var0 = var0 == var3;
                            if (var0) {
                                _fun43204_ip = 37;
                                continue _fun43204
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
                    _fun43205: for (var _fun43205_ip = 0;;) switch (_fun43205_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            var3 = var1[var2];
                            var1 = true;
                            var1 = var1 !== var3;
                            if (var1) {
                                _fun43205_ip = 37;
                                continue _fun43205
                            }
                        case 23:
                            var4 = _closure2_slot1;
                            var3 = var4.includes;
                            var1 = var3.bind(var4)(var2);
                        case 37:
                            if (var1) {
                                _fun43205_ip = 54;
                                continue _fun43205
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
        var3 = function() {
            _fun43207: for (var _fun43207_ip = 0;;) switch (_fun43207_ip) {
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
                        _fun43207_ip = 69;
                        continue _fun43207
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43207_ip = 105;
                    continue _fun43207;
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
        var0 = function() {
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
        var6 = function arg0() {
            _fun43209: for (var _fun43209_ip = 0;;) switch (_fun43209_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43209_ip = 31;
                        continue _fun43209
                    }
                case 25:
                    var0 = var3.onboardingPrompts;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43209_ip = 39;
                        continue _fun43209
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
        var6 = function arg0() {
            _fun43210: for (var _fun43210_ip = 0;;) switch (_fun43210_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43210_ip = 31;
                        continue _fun43210
                    }
                case 25:
                    var0 = var3.prompts;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43210_ip = 39;
                        continue _fun43210
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
        var6 = function arg0() {
            _fun43211: for (var _fun43211_ip = 0;;) switch (_fun43211_ip) {
                case 0:
                    var6 = arg0;
                    var1 = _closure1_slot8;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var6);
                    if (var0) {
                        _fun43211_ip = 59;
                        continue _fun43211
                    }
                case 24:
                    var0 = _closure1_slot13;
                    var2 = var0[var6];
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun43211_ip = 49;
                        continue _fun43211
                    }
                case 43:
                    var0 = var2.responses;
                case 49:
                    if (!(var1 == var0)) {
                        _fun43211_ip = 57;
                        continue _fun43211
                    }
                case 53:
                    var0 = _closure1_slot18;
                case 57:
                    _fun43211_ip = 102;
                    continue _fun43211;
                case 59:
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var5 = _closure1_slot8;
                    var1 = var5.getOnboardingResponses;
                    var1 = var1.bind(var5)(var6);
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun43211_ip = 97;
                        continue _fun43211
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
        var6 = function arg0() {
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
        var6 = function arg0, arg1() {
            _fun43215: for (var _fun43215_ip = 0;;) switch (_fun43215_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot13;
                    var2 = var2[var6];
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun43215_ip = 130;
                        continue _fun43215
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
                        _fun43215_ip = 124;
                        continue _fun43215
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
                    _fun43215_ip = 128;
                    continue _fun43215;
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
        var6 = function arg0() {
            _fun43218: for (var _fun43218_ip = 0;;) switch (_fun43218_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot13;
                    var4 = var0[var3];
                    var1 = _closure1_slot8;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var3);
                    var3 = null;
                    if (var0) {
                        _fun43218_ip = 62;
                        continue _fun43218
                    }
                case 34:
                    if (!(var3 != var4)) {
                        _fun43218_ip = 56;
                        continue _fun43218
                    }
                case 38:
                    var0 = var4.enabled;
                    if (!var0) {
                        _fun43218_ip = 56;
                        continue _fun43218
                    }
                case 46:
                    var0 = var4.prompts;
                    if (!(var3 == var0)) {
                        _fun43218_ip = 60;
                        continue _fun43218
                    }
                case 56:
                    var0 = _closure1_slot17;
                case 60:
                    _fun43218_ip = 88;
                    continue _fun43218;
                case 62:
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun43218_ip = 77;
                        continue _fun43218
                    }
                case 71:
                    var1 = var4.prompts;
                case 77:
                    if (!(var3 == var1)) {
                        _fun43218_ip = 85;
                        continue _fun43218
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
        var6 = function arg0() {
            _fun43219: for (var _fun43219_ip = 0;;) switch (_fun43219_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43219_ip = 31;
                        continue _fun43219
                    }
                case 25:
                    var0 = var3.defaultChannelIds;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43219_ip = 39;
                        continue _fun43219
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
        var6 = function arg0() {
            _fun43220: for (var _fun43220_ip = 0;;) switch (_fun43220_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot8;
                    var0 = var3.isFullServerPreview;
                    var0 = var0.bind(var3)(var2);
                    var1 = _closure1_slot13;
                    var2 = var1[var2];
                    var1 = null;
                    if (var0) {
                        _fun43220_ip = 60;
                        continue _fun43220
                    }
                case 34:
                    var0 = var1 == var2;
                    var3 = undefined;
                    if (var0) {
                        _fun43220_ip = 48;
                        continue _fun43220
                    }
                case 43:
                    var3 = var2.enabled;
                case 48:
                    var0 = var1 != var3;
                    if (!var0) {
                        _fun43220_ip = 58;
                        continue _fun43220
                    }
                case 55:
                    var0 = var3;
                case 58:
                    _fun43220_ip = 64;
                    continue _fun43220;
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
        var6 = function arg0() {
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
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'shouldFetchPrompts';
        var4.key = var6;
        var6 = function arg0() {
            _fun43225: for (var _fun43225_ip = 0;;) switch (_fun43225_ip) {
                case 0:
                    var2 = arguments[1];
                    var3 = undefined;
                    if (!(var2 === var3)) {
                        _fun43225_ip = 44;
                        continue _fun43225
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
                        _fun43225_ip = 101;
                        continue _fun43225
                    }
                case 54:
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var3 = var1[var0];
                    var0 = null;
                    var0 = var0 == var3;
                    if (var0) {
                        _fun43225_ip = 99;
                        continue _fun43225
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
        var6 = function arg0() {
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
        var6 = function arg0() {
            var3 = this;
            var2 = var3.getEnabledOnboardingPrompts;
            var1 = arg0;
            var3 = var2.bind(var3)(var1);
            var1 = '0';
            var _closure3_slot0 = var1;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                _fun43228: for (var _fun43228_ip = 0;;) switch (_fun43228_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.options;
                        var2 = var3.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun43229: for (var _fun43229_ip = 0;;) switch (_fun43229_ip) {
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
                                        _fun43229_ip = 67;
                                        continue _fun43229
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
                            _fun43228_ip = 89;
                            continue _fun43228
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
        var6 = function arg0() {
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
        var6 = function arg0() {
            _fun43231: for (var _fun43231_ip = 0;;) switch (_fun43231_ip) {
                case 0:
                    var4 = arg0;
                    var2 = null;
                    var0 = var2 != var4;
                    if (!var0) {
                        _fun43231_ip = 51;
                        continue _fun43231
                    }
                case 12:
                    var3 = _closure1_slot13;
                    var3 = var3[var4];
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun43231_ip = 37;
                        continue _fun43231
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
        var5 = function arg0() {
            _fun43232: for (var _fun43232_ip = 0;;) switch (_fun43232_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43232_ip = 31;
                        continue _fun43232
                    }
                case 25:
                    var0 = var3.connections;
                case 31:
                    if (!(var2 == var0)) {
                        _fun43232_ip = 39;
                        continue _fun43232
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
    var9 = function() {
        var0 = false;
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function arg0() {
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
    var9 = function() {
        var0 = true;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ONBOARDING_PROMPTS_FETCH_START = var9;
    var9 = function arg0() {
        _fun43236: for (var _fun43236_ip = 0;;) switch (_fun43236_ip) {
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
                    _fun43236_ip = 193;
                    continue _fun43236
                }
            case 189:
                var10 = new Array(0);
            case 193:
                var5.responses = var10;
                var5.onboardingPromptsSeen = var9;
                var5.onboardingResponsesSeen = var8;
                var8 = null;
                if (!(var8 == var7)) {
                    _fun43236_ip = 218;
                    continue _fun43236
                }
            case 214:
                var7 = new Array(0);
            case 218:
                var5.connections = var7;
                var6[var3] = var5;
                if (var2) {
                    _fun43236_ip = 240;
                    continue _fun43236
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
    var9 = function() {
        var0 = false;
        _closure1_slot16 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE = var9;
    var9 = function arg0() {
        _fun43240: for (var _fun43240_ip = 0;;) switch (_fun43240_ip) {
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
                    _fun43240_ip = 307;
                    continue _fun43240
                }
            case 62:
                var1 = _closure1_slot13;
                var1 = var1[var4];
                var5 = null;
                var1 = var5 != var1;
                if (!var1) {
                    _fun43240_ip = 304;
                    continue _fun43240
                }
            case 82:
                var7 = var5 != var6;
                if (!var7) {
                    _fun43240_ip = 100;
                    continue _fun43240
                }
            case 89:
                var11 = var6.length;
                var10 = 0;
                var7 = var11 > var10;
            case 100:
                if (!var7) {
                    _fun43240_ip = 151;
                    continue _fun43240
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
                    _fun43240_ip = 204;
                    continue _fun43240
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
                _fun43240_ip = 228;
                continue _fun43240;
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
                    _fun43240_ip = 250;
                    continue _fun43240
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
                    _fun43240_ip = 281;
                    continue _fun43240
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
    var9 = function arg0() {
        _fun43242: for (var _fun43242_ip = 0;;) switch (_fun43242_ip) {
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
                    _fun43242_ip = 146;
                    continue _fun43242
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
    var8 = function arg0() {
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
    var8 = function arg0() {
        _fun43245: for (var _fun43245_ip = 0;;) switch (_fun43245_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.connections;
                var1 = _closure1_slot13;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun43245_ip = 65;
                    continue _fun43245
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
    var3 = function arg0() {
        _fun43246: for (var _fun43246_ip = 0;;) switch (_fun43246_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = var0.mode;
                var0 = _closure1_slot13;
                var0 = var0[var2];
                var2 = null;
                if (!(var2 != var0)) {
                    _fun43246_ip = 36;
                    continue _fun43246
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1664, 1372, 4649, 4549, 4551, 22, 667, 21, 566, 806, 2]);