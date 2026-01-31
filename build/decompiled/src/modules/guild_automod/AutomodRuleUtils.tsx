// modules/guild_automod/AutomodRuleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var5 = function arg0, arg1() {
        _fun115022: for (var _fun115022_ip = 0;;) switch (_fun115022_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var0 = var2.length;
                if (!(!(var0 > var5))) {
                    _fun115022_ip = 38;
                    continue _fun115022
                }
            case 15:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun115023: for (var _fun115023_ip = 0;;) switch (_fun115023_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = var6.length;
                            var0 = _closure1_slot7;
                            if (!(!(var1 > var0))) {
                                _fun115023_ip = 36;
                                continue _fun115023
                            }
                        case 19:
                            var1 = var6.length;
                            var0 = _closure1_slot8;
                            if (!(!(var1 < var0))) {
                                _fun115023_ip = 36;
                                continue _fun115023
                            }
                        case 32:
                            var0 = undefined;
                            return var0;
                        case 36:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var0 = 6;
                            var0 = var8[var0];
                            var1 = undefined;
                            var0 = var7.bind(var1)(var0);
                            var2 = var0.InvalidKeywordError;
                            var0 = 5;
                            var3 = var8[var0];
                            var3 = var7.bind(var1)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var8[var0];
                            var0 = var7.bind(var1)(var0);
                            var0 = var0.t;
                            var1 = var0.rbRvGe;
                            var0 = {};
                            var0.keyword = var6;
                            var6 = _closure1_slot7;
                            var0.max = var6;
                            var5 = _closure1_slot8;
                            var0.min = var5;
                            var10 = var3.bind(var4)(var1, var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var1;
                            var0 = new var11[var2](var10, var9);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 38:
                var0 = global;
                var2 = var0.Error;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 5;
                var3 = var7[var0];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.mee4qd;
                var0 = {};
                var0.limit = var5;
                var9 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function arg0() {
        _fun115024: for (var _fun115024_ip = 0;;) switch (_fun115024_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.length;
                var0 = _closure1_slot6;
                if (!(!(var1 > var0))) {
                    _fun115024_ip = 42;
                    continue _fun115024
                }
            case 19:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun115025: for (var _fun115025_ip = 0;;) switch (_fun115025_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = var6.length;
                            var0 = _closure1_slot10;
                            if (!(!(var1 > var0))) {
                                _fun115025_ip = 36;
                                continue _fun115025
                            }
                        case 19:
                            var1 = var6.length;
                            var0 = _closure1_slot9;
                            if (!(!(var1 < var0))) {
                                _fun115025_ip = 36;
                                continue _fun115025
                            }
                        case 32:
                            var0 = undefined;
                            return var0;
                        case 36:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var0 = 6;
                            var0 = var8[var0];
                            var1 = undefined;
                            var0 = var7.bind(var1)(var0);
                            var2 = var0.InvalidRegexPatternError;
                            var0 = 5;
                            var3 = var8[var0];
                            var3 = var7.bind(var1)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var8[var0];
                            var0 = var7.bind(var1)(var0);
                            var0 = var0.t;
                            var1 = var0.WR0m9w;
                            var0 = {};
                            var0.regex = var6;
                            var6 = _closure1_slot10;
                            var0.max = var6;
                            var5 = _closure1_slot9;
                            var0.min = var5;
                            var10 = var3.bind(var4)(var1, var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var1;
                            var0 = new var11[var2](var10, var9);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 42:
                var0 = global;
                var2 = var0.Error;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 5;
                var3 = var7[var0];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0.tDjhF1;
                var0 = {};
                var5 = _closure1_slot6;
                var0.limit = var5;
                var9 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot16 = var4;
    var3 = function arg0() {
        _fun115026: for (var _fun115026_ip = 0;;) switch (_fun115026_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.isSnowflake;
                var0 = null;
                var5 = var0 == var4;
                if (var5) {
                    _fun115026_ip = 48;
                    continue _fun115026
                }
            case 43:
                var3 = var4.id;
            case 48:
                var4 = var0 != var3;
                var0 = 'INVALID_SNOWFLAKE';
                if (!var4) {
                    _fun115026_ip = 64;
                    continue _fun115026
                }
            case 61:
                var0 = var3;
            case 64:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var10[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.getRuleCountByTriggerType;
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var7 = var6.AutomodTriggerType;
    var _closure1_slot4 = var7;
    var7 = var6.MAX_KEYWORDS_PER_KEYWORD_FILTER;
    var _closure1_slot5 = var7;
    var7 = var6.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER;
    var _closure1_slot6 = var7;
    var7 = var6.MAX_CHARACTERS_PER_KEYWORD;
    var _closure1_slot7 = var7;
    var7 = var6.MIN_CHARACTERS_PER_KEYWORD;
    var _closure1_slot8 = var7;
    var7 = var6.MIN_REGEX_PATTERN_LENGTH;
    var _closure1_slot9 = var7;
    var7 = var6.MAX_REGEX_PATTERN_LENGTH;
    var _closure1_slot10 = var7;
    var7 = var6.AutomodActionType;
    var _closure1_slot11 = var7;
    var6 = var6.AutomodEventType;
    var _closure1_slot12 = var6;
    var7 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var10 = '';
        var9 = arg0;
        var8 = '-';
        var7 = arg1;
        var6 = '-new-rule';
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot13 = var7;
    var6 = function arg0() {
        _fun115028: for (var _fun115028_ip = 0;;) switch (_fun115028_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115028_ip = 20;
                    continue _fun115028
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.KEYWORD;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot14 = var6;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_automod/AutomodRuleUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getNewAutomodRuleMockId = var7;
    var2.isRuleKeywordFilter = var6;
    var6 = function(arg0) { // Environment: var1
        _fun115029: for (var _fun115029_ip = 0;;) switch (_fun115029_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115029_ip = 20;
                    continue _fun115029
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.ML_SPAM;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isRuleMLSpamFilter = var6;
    var6 = function(arg0) { // Environment: var1
        _fun115030: for (var _fun115030_ip = 0;;) switch (_fun115030_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115030_ip = 20;
                    continue _fun115030
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.DEFAULT_KEYWORD_LIST;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isRuleDefaultKeywordListFilter = var6;
    var6 = function(arg0) { // Environment: var1
        _fun115031: for (var _fun115031_ip = 0;;) switch (_fun115031_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115031_ip = 20;
                    continue _fun115031
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.MENTION_SPAM;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isRuleMentionSpamFilter = var6;
    var6 = function(arg0) { // Environment: var1
        _fun115032: for (var _fun115032_ip = 0;;) switch (_fun115032_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115032_ip = 20;
                    continue _fun115032
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.SERVER_POLICY;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isRuleServerPolicyFilter = var6;
    var6 = function(arg0) { // Environment: var1
        _fun115033: for (var _fun115033_ip = 0;;) switch (_fun115033_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun115033_ip = 20;
                    continue _fun115033
                }
            case 14:
                var1 = var0.triggerType;
            case 20:
                var0 = _closure1_slot4;
                var0 = var0.USER_PROFILE;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isRuleUserProfileFilter = var6;
    var6 = function arg0, arg1() {
        _fun115034: for (var _fun115034_ip = 0;;) switch (_fun115034_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var2 = var8[var1];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var2 = var2.triggerConfigs;
                var4 = var2[var6];
                var1 = var8[var1];
                var2 = var3.bind(var5)(var1);
                var1 = var2.getDefaultTriggerMetadataForTriggerType;
                var1 = var1.bind(var2)(var6, var7);
                var2 = {};
                var9 = _closure1_slot13;
                var9 = var9.bind(var5)(var7, var6);
                var2.id = var9;
                var9 = var4.getDefaultRuleName;
                var9 = var9.bind(var4)();
                var2.name = var9;
                var2.guildId = var7;
                var9 = var4.eventType;
                var2.eventType = var9;
                var2.triggerType = var6;
                var2.triggerMetadata = var1;
                var1 = true;
                var2.enabled = var1;
                var9 = _closure1_slot2;
                var1 = var9.getId;
                var1 = var1.bind(var9)();
                var2.creatorId = var1;
                var1 = 4;
                var1 = var8[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getRuleDefaultActionsFromConfig;
                var1 = var1.bind(var3)(var4);
                var2.actions = var1;
                var3 = 0;
                var2.position = var3;
                var1 = global;
                var4 = var1.Set;
                var8 = var4.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var8;
                var4 = new var12[var4](var11);
                var4 = var4 instanceof Object ? var4 : var8;
                var2.exemptChannels = var4;
                var4 = var1.Set;
                var8 = var4.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var8;
                var4 = new var12[var4](var11);
                var4 = var4 instanceof Object ? var4 : var8;
                var2.exemptRoles = var4;
                var4 = _closure1_slot17;
                var4 = var4.bind(var5)(var2);
                if (var4) {
                    _fun115034_ip = 312;
                    continue _fun115034
                }
            case 252:
                var4 = _closure1_slot3;
                var6 = var4.bind(var5)(var7, var6);
                if (!(var6 > var3)) {
                    _fun115034_ip = 310;
                    continue _fun115034
                }
            case 266:
                var4 = var2.name;
                var3 = 1;
                var7 = var6 + var3;
                var3 = var1.HermesInternal;
                var6 = var3.concat;
                var3 = ' ';
                var3 = var6.bind(var3)(var7);
                var3 = var4 + var3;
                var2.name = var3;
            case 310:
                return var2;
            case 312:
                var2 = var1.Error;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var1 = var6[var0];
                var1 = var4.bind(var5)(var1);
                var3 = var1.intl;
                var1 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0["A/nX8D"];
                var11 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var1;
                var0 = new var12[var2](var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.createDefaultRule = var6;
    var2.validateKeywordsOrThrow = var5;
    var2.validateRegexPatternsOrThrow = var4;
    var4 = function arg0() {
        _fun115035: for (var _fun115035_ip = 0;;) switch (_fun115035_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot14;
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                if (!var2) {
                    _fun115035_ip = 108;
                    continue _fun115035
                }
            case 20:
                var2 = var1.triggerMetadata;
                var6 = var2.keywordFilter;
                var2 = null;
                if (!(var2 == var6)) {
                    _fun115035_ip = 42;
                    continue _fun115035
                }
            case 38:
                var6 = new Array(0);
            case 42:
                var3 = var1.triggerMetadata;
                var3 = var3.regexPatterns;
                if (!(var2 == var3)) {
                    _fun115035_ip = 62;
                    continue _fun115035
                }
            case 58:
                var3 = new Array(0);
            case 62:
                var2 = var6.length;
                var4 = 0;
                if (!(var4 === var2)) {
                    _fun115035_ip = 85;
                    continue _fun115035
                }
            case 73:
                var2 = var3.length;
                if (!(var4 !== var2)) {
                    _fun115035_ip = 214;
                    continue _fun115035
                }
            case 85:
                var4 = _closure1_slot15;
                var2 = _closure1_slot5;
                var2 = var4.bind(var5)(var6, var2);
                var2 = _closure1_slot16;
                var2 = var2.bind(var5)(var3);
            case 108:
                var1 = var1.actions;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun115035_ip = 127;
                    continue _fun115035
                }
            case 125:
                return var5;
            case 127:
                var1 = global;
                var3 = var1.Error;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var2 = var7[var1];
                var2 = var6.bind(var5)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["t+gj5V"];
                var9 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var2;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 214:
                var1 = global;
                var2 = var1.Error;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var1 = var6[var0];
                var1 = var4.bind(var5)(var1);
                var3 = var1.intl;
                var1 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.kz2Av3;
                var9 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.validateRuleBeforeSaveOrThrow = var4;
    var2.isBackendPersistedRule = var3;
    var3 = function arg0() {
        _fun115036: for (var _fun115036_ip = 0;;) switch (_fun115036_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot12;
                var1 = var1.MESSAGE_SEND;
                if (!(var1 !== var2)) {
                    _fun115036_ip = 157;
                    continue _fun115036
                }
            case 23:
                var1 = _closure1_slot12;
                var1 = var1.GUILD_MEMBER_JOIN_OR_UPDATE;
                if (!(var1 !== var2)) {
                    _fun115036_ip = 96;
                    continue _fun115036
                }
            case 37:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.SP9BBx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 96:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Q+68IX"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 157:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.NlQW4P;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.eventTypeToName = var3;
    var3 = function arg0() {
        _fun115037: for (var _fun115037_ip = 0;;) switch (_fun115037_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot11;
                var1 = var1.BLOCK_MESSAGE;
                if (!(var1 !== var2)) {
                    _fun115037_ip = 313;
                    continue _fun115037
                }
            case 23:
                var1 = _closure1_slot11;
                var1 = var1.FLAG_TO_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun115037_ip = 252;
                    continue _fun115037
                }
            case 40:
                var1 = _closure1_slot11;
                var1 = var1.USER_COMMUNICATION_DISABLED;
                if (!(var1 !== var2)) {
                    _fun115037_ip = 191;
                    continue _fun115037
                }
            case 57:
                var1 = _closure1_slot11;
                var1 = var1.QUARANTINE_USER;
                if (!(var1 !== var2)) {
                    _fun115037_ip = 130;
                    continue _fun115037
                }
            case 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.SP9BBx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 130:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.NPO8ee;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["6WPxY2"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 252:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Y+VmvU"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 313:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.d1ab8n;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.actionTypeToName = var3;
    var1 = function arg0() {
        _fun115038: for (var _fun115038_ip = 0;;) switch (_fun115038_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.KEYWORD;
                if (!(var1 !== var2)) {
                    _fun115038_ip = 383;
                    continue _fun115038
                }
            case 23:
                var1 = _closure1_slot4;
                var1 = var1.ML_SPAM;
                if (!(var1 !== var2)) {
                    _fun115038_ip = 324;
                    continue _fun115038
                }
            case 40:
                var1 = _closure1_slot4;
                var1 = var1.DEFAULT_KEYWORD_LIST;
                if (!(var1 !== var2)) {
                    _fun115038_ip = 265;
                    continue _fun115038
                }
            case 57:
                var1 = _closure1_slot4;
                var1 = var1.MENTION_SPAM;
                if (!(var1 !== var2)) {
                    _fun115038_ip = 206;
                    continue _fun115038
                }
            case 74:
                var1 = _closure1_slot4;
                var1 = var1.USER_PROFILE;
                if (!(var1 !== var2)) {
                    _fun115038_ip = 147;
                    continue _fun115038
                }
            case 88:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.SP9BBx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 147:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.q1L2v8;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 206:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pX7i6n;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 265:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.LnGhZv;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 324:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["puF/Os"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 383:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ffR2cM;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.triggerTypeToName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 14648, 10034, 14652, 14653, 1234, 6485, 4508, 2]);