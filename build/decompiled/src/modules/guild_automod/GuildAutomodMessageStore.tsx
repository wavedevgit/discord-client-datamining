// modules/guild_automod/GuildAutomodMessageStore.tsx
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
        _fun54015: for (var _fun54015_ip = 0;;) switch (_fun54015_ip) {
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
                _fun54015_ip = 74;
                continue _fun54015;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var6 = var0.messageData;
        var5 = var0.errorResponseBody;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 8;
        var2 = var8[var0];
        var4 = undefined;
        var3 = var7.bind(var4)(var2);
        var2 = var3.getFailedMessageId;
        var3 = var2.bind(var3)(var6);
        var2 = {};
        var2.id = var3;
        var0 = var8[var0];
        var9 = var7.bind(var4)(var0);
        var0 = var9.isMessageDataEdit;
        var0 = var0.bind(var9)(var6);
        var2.isBlockedEdit = var0;
        var2.messageData = var6;
        var0 = 9;
        var0 = var8[var0];
        var4 = var7.bind(var4)(var0);
        var0 = var4.getAutomodErrorMessage;
        var0 = var0.bind(var4)(var6, var5);
        var2.errorMessage = var0;
        var0 = _closure1_slot13;
        var0[var3] = var2;
        var0 = _closure1_slot14;
        var0 = var0 + 1;
        _closure1_slot14 = var0;
        var0 = true;
        return var0;
    };
    var9 = function arg0() {
        _fun54019: for (var _fun54019_ip = 0;;) switch (_fun54019_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var6 = var0.messages;
                var2 = _closure1_slot8;
                var0 = var2.getChannel;
                var4 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var4;
                var3 = undefined;
                if (var2) {
                    _fun54019_ip = 52;
                    continue _fun54019
                }
            case 42:
                var2 = var4.getGuildId;
                var3 = var2.bind(var4)();
            case 52:
                if (!(var0 != var3)) {
                    _fun54019_ip = 117;
                    continue _fun54019
                }
            case 56:
                var2 = _closure1_slot16;
                var5 = var2[var3];
                var4 = var6.reduce;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun54020: for (var _fun54020_ip = 0;;) switch (_fun54020_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = arg1;
                            var4 = var2.type;
                            var0 = _closure1_slot12;
                            var1 = var0.AUTO_MODERATION_ACTION;
                            var0 = var6;
                            if (!(var4 === var1)) {
                                _fun54020_ip = 135;
                                continue _fun54020
                            }
                        case 31:
                            var9 = var2.embeds;
                            var4 = null;
                            var7 = var4 == var9;
                            var1 = undefined;
                            var5 = undefined;
                            if (var7) {
                                _fun54020_ip = 68;
                                continue _fun54020
                            }
                        case 50:
                            var8 = var9.some;
                            var7 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot11;
                                var0 = var0.AUTO_MODERATION_NOTIFICATION;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var8.bind(var9)(var7);
                        case 68:
                            var0 = var6;
                            if (!var5) {
                                _fun54020_ip = 135;
                                continue _fun54020
                            }
                        case 74:
                            if (!(var4 != var6)) {
                                _fun54020_ip = 127;
                                continue _fun54020
                            }
                        case 78:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.compare;
                            var3 = var2.id;
                            var4 = var4.bind(var5)(var6, var3);
                            var3 = -1;
                            var1 = undefined;
                            if (!(var3 === var4)) {
                                _fun54020_ip = 132;
                                continue _fun54020
                            }
                        case 127:
                            var1 = var2.id;
                        case 132:
                            var0 = var1;
                        case 135:
                            return var0;
                    }
                };
                var2 = var4.bind(var6)(var2, var5);
                var0 = var0 != var2;
                if (!var0) {
                    _fun54019_ip = 102;
                    continue _fun54019
                }
            case 90:
                var4 = _closure1_slot16;
                var4 = var4[var3];
                var0 = var4 !== var2;
            case 102:
                if (!var0) {
                    _fun54019_ip = 115;
                    continue _fun54019
                }
            case 105:
                var1 = _closure1_slot16;
                var1[var3] = var2;
                var0 = true;
            case 115:
                return var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var10 = var7.AbortCodes;
    var _closure1_slot10 = var10;
    var10 = var7.MessageEmbedTypes;
    var _closure1_slot11 = var10;
    var7 = var7.MessageTypes;
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var1;
    var1 = {};
    var _closure1_slot15 = var1;
    var1 = {};
    var _closure1_slot16 = var1;
    var1 = function arg0() {
        _fun54022: for (var _fun54022_ip = 0;;) switch (_fun54022_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot13;
                var3 = var0[var2];
                var0 = null;
                if (!(var0 != var3)) {
                    _fun54022_ip = 28;
                    continue _fun54022
                }
            case 20:
                var0 = _closure1_slot13;
                var0 = delete var0[var2];
            case 28:
                var0 = _closure1_slot14;
                var0 = var0 + 1;
                _closure1_slot14 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun54024: for (var _fun54024_ip = 0;;) switch (_fun54024_ip) {
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
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54024_ip = 69;
                        continue _fun54024
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54024_ip = 105;
                    continue _fun54024;
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
        var0 = function arg0() {
            _fun54025: for (var _fun54025_ip = 0;;) switch (_fun54025_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var4 = var5.waitFor;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun54025_ip = 55;
                        continue _fun54025
                    }
                case 35:
                    var2 = var0.automodFailedMessages;
                    _closure1_slot13 = var2;
                    var0 = var0.mentionRaidDetectionByGuild;
                    _closure1_slot15 = var0;
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot13;
            var0.automodFailedMessages = var2;
            var2 = _closure1_slot15;
            var0.mentionRaidDetectionByGuild = var2;
            var1 = _closure1_slot16;
            var0.lastIncidentAlertMessage = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun54027: for (var _fun54027_ip = 0;;) switch (_fun54027_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = null;
                    if (var2) {
                        _fun54027_ip = 40;
                        continue _fun54027
                    }
                case 14:
                    var2 = _closure1_slot13;
                    var2 = var2[var3];
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun54027_ip = 37;
                        continue _fun54027
                    }
                case 34:
                    var1 = var2;
                case 37:
                    var0 = var1;
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMessagesVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getMentionRaidDetected';
        var4.key = var6;
        var6 = function arg0() {
            _fun54029: for (var _fun54029_ip = 0;;) switch (_fun54029_ip) {
                case 0:
                    var1 = _closure1_slot15;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun54029_ip = 26;
                        continue _fun54029
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLastIncidentAlertMessage';
        var4.key = var6;
        var5 = function arg0() {
            _fun54030: for (var _fun54030_ip = 0;;) switch (_fun54030_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun54030_ip = 26;
                        continue _fun54030
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildAutomodMessageStore';
    var7.displayName = var1;
    var1 = 'GuildAutomodMessages';
    var7.persistKey = var1;
    var1 = 14;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() {
        _fun54031: for (var _fun54031_ip = 0;;) switch (_fun54031_ip) {
            case 0:
                var0 = global;
                var3 = var0.Object;
                var1 = var3.keys;
                var0 = _closure1_slot13;
                var0 = var1.bind(var3)(var0);
                var1 = var0.length;
                var0 = 0;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun54031_ip = 58;
                    continue _fun54031
                }
            case 39:
                var1 = {};
                _closure1_slot13 = var1;
                var1 = _closure1_slot14;
                var1 = var1 + 1;
                _closure1_slot14 = var1;
                var0 = true;
            case 58:
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var10;
    var1.LOAD_MESSAGES_SUCCESS = var9;
    var1.LOCAL_MESSAGES_LOADED = var9;
    var9 = function arg0() {
        _fun54032: for (var _fun54032_ip = 0;;) switch (_fun54032_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var7 = var0.message;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun54032_ip = 173;
                    continue _fun54032
                }
            case 22:
                var1 = var7.type;
                var0 = _closure1_slot12;
                var0 = var0.AUTO_MODERATION_ACTION;
                if (!(var1 === var0)) {
                    _fun54032_ip = 169;
                    continue _fun54032
                }
            case 47:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 10;
                var2 = var0[var2];
                var6 = undefined;
                var5 = var1.bind(var6)(var2);
                var2 = var5.createMessageRecord;
                var2 = var2.bind(var5)(var7);
                var7 = 11;
                var0 = var0[var7];
                var1 = var1.bind(var6)(var0);
                var0 = var1.isAutomodMessageRecord;
                var0 = var0.bind(var1)(var2);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun54032_ip = 167;
                    continue _fun54032
                }
            case 112:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var5 = var5.bind(var6)(var1);
                var1 = var5.isAutomodNotification;
                var1 = var1.bind(var5)(var2);
                var5 = !var1;
                var1 = !var5;
                if (var5) {
                    _fun54032_ip = 164;
                    continue _fun54032
                }
            case 149:
                var3 = _closure1_slot16;
                var2 = var2.id;
                var3[var4] = var2;
                var1 = true;
            case 164:
                var0 = var1;
            case 167:
                return var0;
            case 169:
                var0 = false;
                return var0;
            case 173:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var9;
    var1.MESSAGE_SEND_FAILED_AUTOMOD = var8;
    var1.MESSAGE_EDIT_FAILED_AUTOMOD = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.messageId;
        var1 = _closure1_slot17;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        var0 = true;
        return var0;
    };
    var1.REMOVE_AUTOMOD_MESSAGE_NOTICE = var8;
    var8 = function arg0() {
        _fun54034: for (var _fun54034_ip = 0;;) switch (_fun54034_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.response;
                var3 = null;
                var4 = var3 == var2;
                var0 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun54034_ip = 27;
                    continue _fun54034
                }
            case 22:
                var1 = var2.body;
            case 27:
                if (!(var3 != var1)) {
                    _fun54034_ip = 91;
                    continue _fun54034
                }
            case 31:
                var1 = var2.body;
                var5 = var1.code;
                var4 = _closure1_slot10;
                var4 = var4.AUTOMOD_MESSAGE_BLOCKED;
                if (!(var5 !== var4)) {
                    _fun54034_ip = 87;
                    continue _fun54034
                }
            case 58:
                var2 = var2.body;
                var2 = var2.id;
                if (!(var3 != var2)) {
                    _fun54034_ip = 83;
                    continue _fun54034
                }
            case 72:
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)(var2);
                return var0;
            case 83:
                var0 = false;
                return var0;
            case 87:
                var0 = false;
                return var0;
            case 91:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_END_EDIT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var4 = var0.decisionId;
        var3 = var0.suspiciousMentionActivityUntil;
        var1 = _closure1_slot15;
        var0 = {};
        var0.guildId = var2;
        var0.decisionId = var4;
        var0.suspiciousMentionActivityUntil = var3;
        var1[var2] = var0;
        var0 = true;
        return var0;
    };
    var1.AUTO_MODERATION_MENTION_RAID_DETECTION = var8;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var0 = _closure1_slot15;
        var0 = delete var0[var1];
        var0 = true;
        return var0;
    };
    var1.AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/GuildAutomodMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 4249, 660, 4301, 6523, 3972, 4530, 21, 566, 806, 2]);