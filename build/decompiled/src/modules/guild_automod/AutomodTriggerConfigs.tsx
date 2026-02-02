// modules/guild_automod/AutomodTriggerConfigs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var7 = global;
    var5 = var7.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var14 = 0;
    var4 = var9[var14];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var12 = 1;
    var3 = var9[var12];
    var3 = var8.bind(var0)(var3);
    var10 = var3.AutomodActionType;
    var13 = var3.AutomodEventType;
    var11 = var3.AutomodTriggerType;
    var _closure1_slot3 = var11;
    var3 = var3.MENTION_SPAM_LIMIT_DEFAULT;
    var _closure1_slot4 = var3;
    var6 = {};
    var3 = 'new';
    var6.NEW = var3;
    var3 = 'recommended';
    var6.RECOMMENDED = var3;
    var3 = 'beta';
    var6.BETA = var3;
    var3 = 'alpha';
    var6.ALPHA = var3;
    var5 = {};
    var4 = var11.SPAM_LINK;
    var3 = {};
    var15 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
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
    };
    var3.getDefaultRuleName = var15;
    var15 = var11.SPAM_LINK;
    var3.type = var15;
    var15 = var13.MESSAGE_SEND;
    var3.eventType = var15;
    var3.perGuildMaxCount = var14;
    var14 = var7.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var14
        }
    });
    var20 = var15;
    var14 = new var20[var14](var19);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var14 = var7.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var14
        }
    });
    var20 = var15;
    var14 = new var20[var14](var19);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var14 = var7.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var14
        }
    });
    var20 = var15;
    var14 = new var20[var14](var19);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.KEYWORD;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
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
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.KEYWORD;
    var3.type = var14;
    var14 = var13.MESSAGE_SEND;
    var3.eventType = var14;
    var14 = 6;
    var3.perGuildMaxCount = var14;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(3);
    var14[0] = var15;
    var15 = var10.FLAG_TO_CHANNEL;
    var14[1] = var15;
    var15 = var10.USER_COMMUNICATION_DISABLED;
    var14[2] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var14 = var7.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var14
        }
    });
    var20 = var15;
    var14 = new var20[var14](var19);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(1);
    var14[0] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.ML_SPAM;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["puF/Os"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.ML_SPAM;
    var3.type = var14;
    var14 = var13.MESSAGE_SEND;
    var3.eventType = var14;
    var3.perGuildMaxCount = var12;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(2);
    var14[0] = var15;
    var15 = var10.FLAG_TO_CHANNEL;
    var14[1] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var16 = var7.Set;
    var14 = var16.prototype;
    var15 = Object.create(var14, {
        constructor: {
            value: var16
        }
    });
    var19 = new Array(0);
    var20 = var15;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(1);
    var14[0] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.DEFAULT_KEYWORD_LIST;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.LnGhZv;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.DEFAULT_KEYWORD_LIST;
    var3.type = var14;
    var14 = var13.MESSAGE_SEND;
    var3.eventType = var14;
    var3.perGuildMaxCount = var12;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(2);
    var14[0] = var15;
    var15 = var10.FLAG_TO_CHANNEL;
    var14[1] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var16 = var7.Set;
    var14 = var16.prototype;
    var15 = Object.create(var14, {
        constructor: {
            value: var16
        }
    });
    var19 = new Array(0);
    var20 = var15;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(1);
    var14[0] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.MENTION_SPAM;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.pX7i6n;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.MENTION_SPAM;
    var3.type = var14;
    var14 = var13.MESSAGE_SEND;
    var3.eventType = var14;
    var3.perGuildMaxCount = var12;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(3);
    var14[0] = var15;
    var15 = var10.FLAG_TO_CHANNEL;
    var14[1] = var15;
    var15 = var10.USER_COMMUNICATION_DISABLED;
    var14[2] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var16 = var7.Set;
    var14 = var16.prototype;
    var15 = Object.create(var14, {
        constructor: {
            value: var16
        }
    });
    var19 = new Array(0);
    var20 = var15;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var16 = var7.Set;
    var15 = var10.BLOCK_MESSAGE;
    var14 = new Array(1);
    var14[0] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.USER_PROFILE;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.q1L2v8;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.USER_PROFILE;
    var3.type = var14;
    var14 = var13.GUILD_MEMBER_JOIN_OR_UPDATE;
    var3.eventType = var14;
    var3.perGuildMaxCount = var12;
    var16 = var7.Set;
    var15 = var10.QUARANTINE_USER;
    var14 = new Array(2);
    var14[0] = var15;
    var15 = var10.FLAG_TO_CHANNEL;
    var14[1] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.availableActionTypes = var14;
    var16 = var7.Set;
    var14 = var16.prototype;
    var15 = Object.create(var14, {
        constructor: {
            value: var16
        }
    });
    var19 = new Array(0);
    var20 = var15;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.flags = var14;
    var16 = var7.Set;
    var15 = var10.QUARANTINE_USER;
    var14 = new Array(1);
    var14[0] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var20 = var15;
    var19 = var14;
    var14 = new var20[var16](var19, var18);
    var14 = var14 instanceof Object ? var14 : var15;
    var3.defaultActionTypes = var14;
    var5[var4] = var3;
    var4 = var11.SERVER_POLICY;
    var3 = {};
    var14 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.ZQr92M;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getDefaultRuleName = var14;
    var14 = var11.SERVER_POLICY;
    var3.type = var14;
    var13 = var13.MESSAGE_SEND;
    var3.eventType = var13;
    var3.perGuildMaxCount = var12;
    var13 = var7.Set;
    var12 = var10.FLAG_TO_CHANNEL;
    var10 = new Array(1);
    var10[0] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var20 = var12;
    var19 = var10;
    var10 = new var20[var13](var19, var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var3.availableActionTypes = var10;
    var13 = var7.Set;
    var12 = var6.ALPHA;
    var10 = new Array(1);
    var10[0] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var20 = var12;
    var19 = var10;
    var10 = new var20[var13](var19, var18);
    var10 = var10 instanceof Object ? var10 : var12;
    var3.flags = var10;
    var7 = var7.Set;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var20 = var10;
    var7 = new var20[var7](var19);
    var7 = var7 instanceof Object ? var7 : var10;
    var3.defaultActionTypes = var7;
    var5[var4] = var3;
    var _closure1_slot5 = var5;
    var4 = {};
    var3 = 'members';
    var4.MEMBERS = var3;
    var3 = 'content';
    var4.CONTENT = var3;
    var _closure1_slot6 = var4;
    var3 = {};
    var10 = var4.MEMBERS;
    var7 = var11.USER_PROFILE;
    var12 = var5[var7];
    var7 = new Array(1);
    var7[0] = var12;
    var3[var10] = var7;
    var10 = var4.CONTENT;
    var7 = var11.SERVER_POLICY;
    var12 = var5[var7];
    var7 = new Array(5);
    var7[0] = var12;
    var12 = var11.MENTION_SPAM;
    var12 = var5[var12];
    var7[1] = var12;
    var12 = var11.ML_SPAM;
    var12 = var5[var12];
    var7[2] = var12;
    var12 = var11.DEFAULT_KEYWORD_LIST;
    var12 = var5[var12];
    var7[3] = var12;
    var11 = var11.KEYWORD;
    var11 = var5[var11];
    var7[4] = var11;
    var3[var10] = var7;
    var _closure1_slot7 = var3;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_automod/AutomodTriggerConfigs.tsx';
    var7 = var8.bind(var9)(var7);
    var2.AutomodTriggerConfigFlags = var6;
    var2.triggerConfigs = var5;
    var2.AutomodTriggerCategory = var4;
    var2.AUTOMOD_RULE_CONFIGS_BY_CATEGORY = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var1[var0];
        var2 = var0.flags;
        var1 = var2.has;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.checkTriggerTypeForFlag = var3;
    var3 = function arg0() {
        var0 = global;
        var2 = var0.Array;
        var1 = var2.from;
        var3 = _closure1_slot5;
        var0 = arg0;
        var0 = var3[var0];
        var0 = var0.availableActionTypes;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getAvailableActionTypes = var3;
    var3 = function arg0, arg1() {
        _fun115118: for (var _fun115118_ip = 0;;) switch (_fun115118_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var1 = var0.id;
                var _closure2_slot0 = var1;
                var1 = var0.eventType;
                var3 = var0.triggerType;
                var _closure2_slot1 = var3;
                var5 = var0.actions;
                var0 = _closure1_slot5;
                var0 = var0[var3];
                var _closure2_slot2 = var0;
                var6 = var7.filter;
                var4 = function(arg0) { // Environment: var2
                    _fun115119: for (var _fun115119_ip = 0;;) switch (_fun115119_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var0 = var2.id;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun115119_ip = 36;
                                continue _fun115119
                            }
                        case 22:
                            var2 = var2.triggerType;
                            var1 = _closure2_slot1;
                            var0 = var2 === var1;
                        case 36:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4);
                var6 = var4.length;
                var4 = var0.perGuildMaxCount;
                if (!(!(var6 > var4))) {
                    _fun115118_ip = 193;
                    continue _fun115118
                }
            case 86:
                var4 = var5.some;
                var2 = function(arg0) { // Environment: var2
                    var0 = _closure2_slot2;
                    var2 = var0.availableActionTypes;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun115118_ip = 157;
                    continue _fun115118
                }
            case 107:
                var0 = var0.eventType;
                if (!(var1 === var0)) {
                    _fun115118_ip = 121;
                    continue _fun115118
                }
            case 117:
                var0 = undefined;
                return var0;
            case 121:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = 'You have provided an event type that is not available for this trigger type';
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 157:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = 'You have provided an action that is not available for this trigger type';
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 193:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'You have exceeded the maximum number of rules of type ';
                var8 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.validateRuleByTriggerConfigOrThrow = var3;
    var3 = function arg0() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useIsUserProfileRuleEnabled;
        var2 = arg0;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = {};
            var1 = _closure1_slot6;
            var4 = var1.MEMBERS;
            var2 = new Array(0);
            var3[var4] = var2;
            var2 = var1.CONTENT;
            var1 = new Array(0);
            var3[var2] = var1;
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var0 = _closure1_slot7;
            var2 = var1.bind(var2)(var0);
            var1 = var2.reduce;
            var0 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var2 = arg1;
                var3 = _closure1_slot7;
                var5 = var3[var2];
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    _fun115124: for (var _fun115124_ip = 0;;) switch (_fun115124_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var0 = _closure1_slot3;
                            var0 = var0.SERVER_POLICY;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun115124_ip = 81;
                                continue _fun115124
                            }
                        case 28:
                            var3 = var2.type;
                            var1 = _closure1_slot3;
                            var1 = var1.USER_PROFILE;
                            var3 = var3 === var1;
                            if (!var3) {
                                _fun115124_ip = 60;
                                continue _fun115124
                            }
                        case 50:
                            var1 = _closure2_slot0;
                            var3 = !var1;
                        case 60:
                            var1 = !var3;
                            if (var3) {
                                _fun115124_ip = 78;
                                continue _fun115124
                            }
                        case 66:
                            var3 = var2.perGuildMaxCount;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 78:
                            var0 = var1;
                        case 81:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.type;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var0[var2] = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0, var3);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAvailableTriggerTypes = var3;
    var1 = function arg0, arg1() {
        _fun115126: for (var _fun115126_ip = 0;;) switch (_fun115126_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var1);
                var3 = var5.isInMentionRaidExperiment;
                var1 = arg1;
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot3;
                var3 = var3.DEFAULT_KEYWORD_LIST;
                if (!(var3 !== var4)) {
                    _fun115126_ip = 180;
                    continue _fun115126
                }
            case 59:
                var3 = _closure1_slot3;
                var3 = var3.USER_PROFILE;
                if (!(var3 !== var4)) {
                    _fun115126_ip = 149;
                    continue _fun115126
                }
            case 73:
                var3 = _closure1_slot3;
                var3 = var3.KEYWORD;
                if (!(var3 !== var4)) {
                    _fun115126_ip = 149;
                    continue _fun115126
                }
            case 87:
                var3 = _closure1_slot3;
                var3 = var3.MENTION_SPAM;
                if (!(var3 !== var4)) {
                    _fun115126_ip = 127;
                    continue _fun115126
                }
            case 101:
                var3 = _closure1_slot3;
                var3 = var3.ML_SPAM;
                if (!(var3 !== var4)) {
                    _fun115126_ip = 125;
                    continue _fun115126
                }
            case 115:
                var3 = _closure1_slot3;
                var3 = var3.SERVER_POLICY;
            case 125:
                return var0;
            case 127:
                var0 = {};
                var2 = _closure1_slot4;
                var0.mentionTotalLimit = var2;
                var0.mentionRaidProtectionEnabled = var1;
                return var0;
            case 149:
                var0 = {};
                var1 = new Array(0);
                var0.keywordFilter = var1;
                var1 = new Array(0);
                var0.regexPatterns = var1;
                var1 = new Array(0);
                var0.allowList = var1;
                return var0;
            case 180:
                var0 = {};
                var1 = new Array(0);
                var0.allowList = var1;
                var1 = new Array(0);
                var0.presets = var1;
                return var0;
        }
    };
    var2.getDefaultTriggerMetadataForTriggerType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10036, 1234, 14005, 8693, 2]);