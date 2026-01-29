// modules/reply_nudge/ReplyNudgeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun67136: for (var _fun67136_ip = 0;;) switch (_fun67136_ip) {
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
            case 72: // try_end0
                _fun67136_ip = 76;
                continue _fun67136;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: handleNudgeVisibilityChange, environment: var3
        _fun67139: for (var _fun67139_ip = 0;;) switch (_fun67139_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var2 = var0.EnableDmReplyNudgeReminders;
                var0 = var2.getSetting;
                var2 = var0.bind(var2)();
                var0 = false;
                var2 = var0 !== var2;
                if (!var2) {
                    _fun67139_ip = 104;
                    continue _fun67139
                }
            case 50:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 11;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var6 = var4.ReplyNudgeExperiment;
                var5 = var6.getConfig;
                var4 = {};
                var7 = 'ReplyNudgeStore';
                var4.location = var7;
                var4 = var5.bind(var6)(var4);
                var2 = var4.enabled;
            case 104:
                var4 = _closure1_slot12;
                if (!(var4 !== var2)) {
                    _fun67139_ip = 118;
                    continue _fun67139
                }
            case 112:
                _closure1_slot12 = var2;
                return var1;
            case 118:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var7 = 3;
    var1 = var5[var7];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.DAY;
    var1 = var7 * var1;
    var _closure1_slot11 = var1;
    var1 = false;
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ReplyNudgeStore, environment: var5
            _fun67141: for (var _fun67141_ip = 0;;) switch (_fun67141_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67141_ip = 69;
                        continue _fun67141
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67141_ip = 105;
                    continue _fun67141;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun67142: for (var _fun67142_ip = 0;;) switch (_fun67142_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var11 = null;
                    var2 = var11 == var1;
                    var0 = undefined;
                    var5 = undefined;
                    if (var2) {
                        _fun67142_ip = 25;
                        continue _fun67142
                    }
                case 19:
                    var5 = var1.nudgedChannels;
                case 25:
                    if (!(var11 == var5)) {
                        _fun67142_ip = 31;
                        continue _fun67142
                    }
                case 29:
                    var5 = {};
                case 31:
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var10 = var2.bind(var3)();
                    var2 = {};
                    var3 = var1.Object;
                    var1 = var3.entries;
                    var9 = var1.bind(var3)(var5);
                    var1 = var9.length;
                    var8 = 0;
                    var3 = var8 < var1;
                    var7 = 2;
                    var6 = 1;
                    var5 = 0;
                    if (!var3) {
                        _fun67142_ip = 152;
                        continue _fun67142
                    }
                case 92:
                    var12 = var9[var5];
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var0)(var12, var7);
                    var12 = var3[var8];
                    var3 = var3[var6];
                    var13 = var11 != var3;
                    if (!var13) {
                        _fun67142_ip = 133;
                        continue _fun67142
                    }
                case 121:
                    var15 = var10 - var3;
                    var14 = _closure1_slot11;
                    var13 = var15 < var14;
                case 133:
                    if (!var13) {
                        _fun67142_ip = 140;
                        continue _fun67142
                    }
                case 136:
                    var2[var12] = var3;
                case 140:
                    var5 = var5 + 1;
                    var3 = var9.length;
                    if (var5 < var3) {
                        _fun67142_ip = 92;
                        continue _fun67142
                    }
                case 152:
                    _closure1_slot13 = var2;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot10;
                    var6 = _closure1_slot9;
                    var5 = _closure1_slot8;
                    var2 = var3.bind(var4)(var2, var6, var5);
                    var3 = var4.syncWith;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = _closure1_slot15;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot13;
            var0.nudgedChannels = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getNudgeTimestamp';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun67144: for (var _fun67144_ip = 0;;) switch (_fun67144_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var3 = null;
                    var0 = null;
                    if (!var2) {
                        _fun67144_ip = 37;
                        continue _fun67144
                    }
                case 14:
                    var2 = _closure1_slot13;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun67144_ip = 37;
                        continue _fun67144
                    }
                case 34:
                    var0 = var1;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isChannelNudged';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.getNudgeTimestamp;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ReplyNudgeStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 13;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleReplyNudgeSet, environment: var3
        _fun67146: for (var _fun67146_ip = 0;;) switch (_fun67146_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = var0.timestamp;
                var3 = _closure1_slot13;
                var3 = var2 in var3;
                if (var3) {
                    _fun67146_ip = 40;
                    continue _fun67146
                }
            case 28:
                var0 = _closure1_slot13;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            case 40:
                var0 = false;
                return var0;
        }
    };
    var1.REPLY_NUDGE_SET = var8;
    var8 = function(arg0) { // Original name: handleMessageCreate, environment: var3
        _fun67147: for (var _fun67147_ip = 0;;) switch (_fun67147_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.message;
                var3 = var0.channel_id;
                var2 = _closure1_slot13;
                var2 = var3 in var2;
                if (var2) {
                    _fun67147_ip = 31;
                    continue _fun67147
                }
            case 27:
                var2 = false;
                return var2;
            case 31:
                var1 = _closure1_slot13;
                var0 = var0.channel_id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function(arg0) { // Original name: handleMessageReactionAdd, environment: var3
        _fun67148: for (var _fun67148_ip = 0;;) switch (_fun67148_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = var0.userId;
                var4 = _closure1_slot10;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                var0 = var1 === var0;
                if (!var0) {
                    _fun67148_ip = 61;
                    continue _fun67148
                }
            case 37:
                var1 = _closure1_slot13;
                var1 = var3 in var1;
                if (!var1) {
                    _fun67148_ip = 58;
                    continue _fun67148
                }
            case 48:
                var2 = _closure1_slot13;
                var2 = delete var2[var3];
                var1 = undefined;
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD = var8;
    var8 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        _fun67149: for (var _fun67149_ip = 0;;) switch (_fun67149_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var1 = var0.id;
                var2 = _closure1_slot13;
                var2 = var1 in var2;
                if (var2) {
                    _fun67149_ip = 31;
                    continue _fun67149
                }
            case 27:
                var2 = false;
                return var2;
            case 31:
                var0 = _closure1_slot13;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var8;
    var3 = function() { // Original name: handleLogout, environment: var3
        var0 = {};
        _closure1_slot13 = var0;
        var0 = false;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1211, 1310, 1216, 667, 1348, 8292, 566, 806, 2]);