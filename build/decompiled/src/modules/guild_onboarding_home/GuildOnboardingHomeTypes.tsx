// modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var13;
    var0 = function arg0, arg1() {
        _fun89746: for (var _fun89746_ip = 0;;) switch (_fun89746_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89746_ip = 46;
                    continue _fun89746
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89746_ip = 55;
                    continue _fun89746
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89746_ip = 345;
                    continue _fun89746
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89746_ip = 323;
                    continue _fun89746
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89746_ip = 283;
                    continue _fun89746
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89746_ip = 270;
                    continue _fun89746
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun89746_ip = 163;
                    continue _fun89746
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89746_ip = 179;
                    continue _fun89746
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89746_ip = 249;
                    continue _fun89746
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89746_ip = 249;
                    continue _fun89746
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89746_ip = 234;
                    continue _fun89746
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89746_ip = 247;
                    continue _fun89746
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89746_ip = 265;
                continue _fun89746;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89746_ip = 283;
                continue _fun89746;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89746_ip = 323;
                    continue _fun89746
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun89746_ip = 330;
                    continue _fun89746
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89747: for (var _fun89747_ip = 0;;) switch (_fun89747_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89747_ip = 56;
                                continue _fun89747
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun89747_ip = 67;
                            continue _fun89747;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun89748: for (var _fun89748_ip = 0;;) switch (_fun89748_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89748_ip = 23;
                    continue _fun89748
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89748_ip = 33;
                    continue _fun89748
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun89748_ip = 70;
                    continue _fun89748
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89748_ip = 55;
                    continue _fun89748
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var7 = function arg0() {
        _fun89749: for (var _fun89749_ip = 0;;) switch (_fun89749_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.channel_id;
                var0.channelId = var1;
                var1 = var2.action_type;
                var0.actionType = var1;
                var1 = var2.title;
                var0.title = var1;
                var1 = var2.description;
                var0.description = var1;
                var3 = var2.emoji;
                var1 = null;
                var4 = var1 == var3;
                var3 = null;
                if (var4) {
                    _fun89749_ip = 112;
                    continue _fun89749
                }
            case 60:
                var4 = {};
                var5 = var2.emoji;
                var5 = var5.id;
                var4.id = var5;
                var5 = var2.emoji;
                var5 = var5.name;
                var4.name = var5;
                var5 = var2.emoji;
                var5 = var5.animated;
                var4.animated = var5;
                var3 = var4;
            case 112:
                var0.emoji = var3;
                var2 = var2.icon;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun89749_ip = 134;
                    continue _fun89749
                }
            case 131:
                var1 = var2;
            case 134:
                var0.icon = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function arg0() {
        _fun89750: for (var _fun89750_ip = 0;;) switch (_fun89750_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.channel_id;
                var0.channelId = var1;
                var1 = var2.title;
                var0.title = var1;
                var4 = var2.description;
                var1 = null;
                var5 = var1 != var4;
                var3 = '';
                if (!var5) {
                    _fun89750_ip = 44;
                    continue _fun89750
                }
            case 41:
                var3 = var4;
            case 44:
                var0.description = var3;
                var3 = var2.emoji;
                var4 = var1 == var3;
                var3 = null;
                if (var4) {
                    _fun89750_ip = 115;
                    continue _fun89750
                }
            case 63:
                var4 = {};
                var5 = var2.emoji;
                var5 = var5.id;
                var4.id = var5;
                var5 = var2.emoji;
                var5 = var5.name;
                var4.name = var5;
                var5 = var2.emoji;
                var5 = var5.animated;
                var4.animated = var5;
                var3 = var4;
            case 115:
                var0.emoji = var3;
                var2 = var2.icon;
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun89750_ip = 137;
                    continue _fun89750
                }
            case 134:
                var1 = var2;
            case 137:
                var0.icon = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function arg0() {
        _fun89751: for (var _fun89751_ip = 0;;) switch (_fun89751_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                if (var0) {
                    _fun89751_ip = 82;
                    continue _fun89751
                }
            case 12:
                var1 = var3.message;
                var2 = var4 != var1;
                if (!var2) {
                    _fun89751_ip = 40;
                    continue _fun89751
                }
            case 24:
                var1 = var3.message;
                var5 = var1.length;
                var1 = 0;
                var2 = var5 > var1;
            case 40:
                var1 = !var2;
                if (var2) {
                    _fun89751_ip = 79;
                    continue _fun89751
                }
            case 46:
                var2 = var3.authorIds;
                var2 = var4 != var2;
                if (!var2) {
                    _fun89751_ip = 76;
                    continue _fun89751
                }
            case 59:
                var3 = var3.authorIds;
                var4 = var3.length;
                var3 = 0;
                var2 = var4 > var3;
            case 76:
                var1 = !var2;
            case 79:
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0() {
        _fun89752: for (var _fun89752_ip = 0;;) switch (_fun89752_ip) {
            case 0:
                var4 = arg0;
                var5 = null;
                var0 = var5 == var4;
                if (var0) {
                    _fun89752_ip = 116;
                    continue _fun89752
                }
            case 12:
                var3 = _closure1_slot10;
                var2 = var4.welcomeMessage;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = !var2;
                var1 = !var1;
                if (!var2) {
                    _fun89752_ip = 113;
                    continue _fun89752
                }
            case 41:
                var2 = var4.newMemberActions;
                var3 = var5 != var2;
                if (!var3) {
                    _fun89752_ip = 71;
                    continue _fun89752
                }
            case 54:
                var2 = var4.newMemberActions;
                var6 = var2.length;
                var2 = 0;
                var3 = var6 > var2;
            case 71:
                var2 = !var3;
                if (var3) {
                    _fun89752_ip = 110;
                    continue _fun89752
                }
            case 77:
                var3 = var4.resourceChannels;
                var3 = var5 != var3;
                if (!var3) {
                    _fun89752_ip = 107;
                    continue _fun89752
                }
            case 90:
                var4 = var4.resourceChannels;
                var5 = var4.length;
                var4 = 0;
                var3 = var5 > var4;
            case 107:
                var2 = !var3;
            case 110:
                var1 = var2;
            case 113:
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var11 = 0;
    var8 = var13[var11];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var8);
    var _closure1_slot3 = var1;
    var10 = 1;
    var1 = var13[var10];
    var1 = var12.bind(var0)(var1);
    var8 = var1.ChannelTypes;
    var _closure1_slot4 = var8;
    var1 = var1.Permissions;
    var _closure1_slot5 = var1;
    var8 = {};
    var8.VIEW = var11;
    var1 = 'VIEW';
    var8[var11] = var1;
    var8.CHAT = var10;
    var1 = 'CHAT';
    var8[var10] = var1;
    var1 = {};
    var1.DEFAULT = var11;
    var9 = 'DEFAULT';
    var1[var11] = var9;
    var1.TODO = var10;
    var9 = 'TODO';
    var1[var10] = var9;
    var11 = 2;
    var1.RESOURCE = var11;
    var9 = 'RESOURCE';
    var1[var11] = var9;
    var11 = 3;
    var1.RULES = var11;
    var9 = 'RULES';
    var1[var11] = var9;
    var9 = 4;
    var1.UPDATES = var9;
    var14 = 'UPDATES';
    var1[var9] = var14;
    var9 = var13[var9];
    var13 = var12.bind(var0)(var9);
    var12 = var13.fileFinishedImporting;
    var9 = 'modules/guild_onboarding_home/GuildOnboardingHomeTypes.tsx';
    var9 = var12.bind(var13)(var9);
    var9 = 7;
    var2.WELCOME_MESSAGE_MIN_LENGTH = var9;
    var12 = 300;
    var2.WELCOME_MESSAGE_MAX_LENGTH = var12;
    var2.NEW_MEMBER_ACTION_TITLE_MIN_LENGTH = var9;
    var12 = 60;
    var2.NEW_MEMBER_ACTION_TITLE_MAX_LENGTH = var12;
    var2.NEW_MEMBER_ACTION_MIN = var11;
    var11 = 5;
    var2.NEW_MEMBER_ACTION_MAX = var11;
    var2.RESOURCE_CHANNEL_TITLE_MIN_LENGTH = var10;
    var10 = 30;
    var2.RESOURCE_CHANNEL_TITLE_MAX_LENGTH = var10;
    var10 = 200;
    var2.RESOURCE_CHANNEL_DESCRIPTION_MAX_LENGTH = var10;
    var2.RESOURCE_CHANNEL_MAX = var9;
    var9 = 'NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY';
    var2.NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY = var9;
    var9 = 46;
    var2.CHANNEL_ACTION_BANNER_HEIGHT = var9;
    var2.NewMemberActionTypes = var8;
    var2.newMemberActionFromServer = var7;
    var2.resourceChannelFromServer = var6;
    var6 = function arg0() {
        _fun89753: for (var _fun89753_ip = 0;;) switch (_fun89753_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun89753_ip = 147;
                    continue _fun89753
                }
            case 14:
                var5 = var1.welcome_message;
                var7 = var1.new_member_actions;
                var6 = var1.resource_channels;
                var2 = var1.enabled;
                var1 = {};
                var3 = {};
                var8 = var5.author_ids;
                var3.authorIds = var8;
                var5 = var5.message;
                var3.message = var5;
                var1.welcomeMessage = var3;
                var5 = var7.filter;
                var3 = function(arg0) { // Environment: var4
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isNotNullish;
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var0 = arg0;
                    var0 = var0.channel_id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var5.bind(var7)(var3);
                var7 = var8.map;
                var5 = _closure1_slot8;
                var5 = var7.bind(var8)(var5);
                var1.newMemberActions = var5;
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var4
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isNotNullish;
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var0 = arg0;
                    var0 = var0.channel_id;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var3 = _closure1_slot9;
                var3 = var4.bind(var5)(var3);
                var1.resourceChannels = var3;
                var1.enabled = var2;
                return var1;
            case 147:
                return var0;
        }
    };
    var2.settingsFromServer = var6;
    var6 = function arg0, arg1() {
        _fun89756: for (var _fun89756_ip = 0;;) switch (_fun89756_ip) {
            case 0:
                var1 = arg1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun89756_ip = 213;
                    continue _fun89756
                }
            case 14:
                var5 = var1.welcomeMessage;
                var7 = var1.newMemberActions;
                var6 = var1.resourceChannels;
                var2 = var1.enabled;
                var1 = {};
                var4 = arg0;
                var1.guild_id = var4;
                var4 = {};
                var10 = var0 == var5;
                var9 = undefined;
                if (var10) {
                    _fun89756_ip = 63;
                    continue _fun89756
                }
            case 57:
                var9 = var5.authorIds;
            case 63:
                if (!(var0 == var9)) {
                    _fun89756_ip = 71;
                    continue _fun89756
                }
            case 67:
                var9 = new Array(0);
            case 71:
                var4.author_ids = var9;
                var9 = var0 == var5;
                var8 = undefined;
                if (var9) {
                    _fun89756_ip = 90;
                    continue _fun89756
                }
            case 85:
                var8 = var5.message;
            case 90:
                var9 = var0 != var8;
                var5 = '';
                if (!var9) {
                    _fun89756_ip = 104;
                    continue _fun89756
                }
            case 101:
                var5 = var8;
            case 104:
                var4.message = var5;
                var1.welcome_message = var4;
                if (!(var0 == var7)) {
                    _fun89756_ip = 121;
                    continue _fun89756
                }
            case 117:
                var7 = new Array(0);
            case 121:
                var5 = var7.filter;
                var4 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isNotNullish;
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var0 = arg0;
                    var0 = var0.channelId;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var5.bind(var7)(var4);
                var5 = var7.map;
                var4 = function(arg0) { // Environment: var3
                    _fun89758: for (var _fun89758_ip = 0;;) switch (_fun89758_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.channelId;
                            var0.channel_id = var1;
                            var1 = var2.actionType;
                            var0.action_type = var1;
                            var1 = var2.title;
                            var0.title = var1;
                            var1 = var2.description;
                            var0.description = var1;
                            var4 = {};
                            var5 = var2.emoji;
                            var3 = null;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89758_ip = 67;
                                continue _fun89758
                            }
                        case 62:
                            var6 = var5.id;
                        case 67:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89758_ip = 79;
                                continue _fun89758
                            }
                        case 76:
                            var5 = var6;
                        case 79:
                            var4.id = var5;
                            var5 = var2.emoji;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89758_ip = 103;
                                continue _fun89758
                            }
                        case 98:
                            var6 = var5.name;
                        case 103:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89758_ip = 115;
                                continue _fun89758
                            }
                        case 112:
                            var5 = var6;
                        case 115:
                            var4.name = var5;
                            var5 = var2.emoji;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89758_ip = 140;
                                continue _fun89758
                            }
                        case 134:
                            var6 = var5.animated;
                        case 140:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89758_ip = 152;
                                continue _fun89758
                            }
                        case 149:
                            var5 = var6;
                        case 152:
                            var4.animated = var5;
                            var0.emoji = var4;
                            var2 = var2.icon;
                            var3 = var3 != var2;
                            var1 = undefined;
                            if (!var3) {
                                _fun89758_ip = 179;
                                continue _fun89758
                            }
                        case 176:
                            var1 = var2;
                        case 179:
                            var0.icon = var1;
                            return var0;
                    }
                };
                var4 = var5.bind(var7)(var4);
                var1.new_member_actions = var4;
                if (!(var0 == var6)) {
                    _fun89756_ip = 168;
                    continue _fun89756
                }
            case 164:
                var6 = new Array(0);
            case 168:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isNotNullish;
                    var4 = _closure1_slot3;
                    var3 = var4.getChannel;
                    var0 = arg0;
                    var0 = var0.channelId;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    _fun89760: for (var _fun89760_ip = 0;;) switch (_fun89760_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.channelId;
                            var0.channel_id = var1;
                            var1 = var2.title;
                            var0.title = var1;
                            var1 = var2.description;
                            var0.description = var1;
                            var4 = {};
                            var5 = var2.emoji;
                            var3 = null;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89760_ip = 56;
                                continue _fun89760
                            }
                        case 51:
                            var6 = var5.id;
                        case 56:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89760_ip = 68;
                                continue _fun89760
                            }
                        case 65:
                            var5 = var6;
                        case 68:
                            var4.id = var5;
                            var5 = var2.emoji;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89760_ip = 92;
                                continue _fun89760
                            }
                        case 87:
                            var6 = var5.name;
                        case 92:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89760_ip = 104;
                                continue _fun89760
                            }
                        case 101:
                            var5 = var6;
                        case 104:
                            var4.name = var5;
                            var5 = var2.emoji;
                            var7 = var3 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun89760_ip = 129;
                                continue _fun89760
                            }
                        case 123:
                            var6 = var5.animated;
                        case 129:
                            var7 = var3 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun89760_ip = 141;
                                continue _fun89760
                            }
                        case 138:
                            var5 = var6;
                        case 141:
                            var4.animated = var5;
                            var0.emoji = var4;
                            var2 = var2.icon;
                            var3 = var3 != var2;
                            var1 = undefined;
                            if (!var3) {
                                _fun89760_ip = 168;
                                continue _fun89760
                            }
                        case 165:
                            var1 = var2;
                        case 168:
                            var0.icon = var1;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1.resource_channels = var3;
                var1.enabled = var2;
                return var1;
            case 213:
                return var0;
        }
    };
    var2.settingsToServer = var6;
    var6 = function(arg0) { // Environment: var3
        _fun89761: for (var _fun89761_ip = 0;;) switch (_fun89761_ip) {
            case 0:
                var7 = arg0;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun89761_ip = 61;
                    continue _fun89761
                }
            case 9:
                var1 = {};
                var5 = var7.channel_actions;
                for (var2 in var5)
                    case 25: {
                        case 34: var9 = var2;
                        var8 = var7.channel_actions;
                        var8 = var8[var9];
                        var8 = var8.completed;
                        var1[var9] = var8;
                        _fun89761_ip = 25;
                        continue _fun89761;
                    }
            case 59:
                return var1;
            case 61:
                return var0;
        }
    };
    var2.actionsFromServer = var6;
    var2.isWelcomeMessageEmpty = var5;
    var2.isSettingsEmpty = var4;
    var4 = function arg0() {
        _fun89762: for (var _fun89762_ip = 0;;) switch (_fun89762_ip) {
            case 0:
                var0 = arg0;
                var6 = null;
                if (!(var6 != var0)) {
                    _fun89762_ip = 321;
                    continue _fun89762
                }
            case 12:
                var1 = _closure1_slot11;
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                if (var1) {
                    _fun89762_ip = 317;
                    continue _fun89762
                }
            case 32:
                var2 = var0.welcomeMessage;
                var3 = var6 == var2;
                var1 = undefined;
                if (var3) {
                    _fun89762_ip = 52;
                    continue _fun89762
                }
            case 47:
                var1 = var2.message;
            case 52:
                if (!(var6 != var1)) {
                    _fun89762_ip = 313;
                    continue _fun89762
                }
            case 59:
                var1 = var0.welcomeMessage;
                var1 = var1.message;
                var2 = var1.length;
                var1 = 7;
                if (!(!(var2 < var1))) {
                    _fun89762_ip = 313;
                    continue _fun89762
                }
            case 85:
                var2 = var0.welcomeMessage;
                var3 = var6 == var2;
                var1 = undefined;
                if (var3) {
                    _fun89762_ip = 106;
                    continue _fun89762
                }
            case 100:
                var1 = var2.authorIds;
            case 106:
                if (!(var6 != var1)) {
                    _fun89762_ip = 309;
                    continue _fun89762
                }
            case 113:
                var1 = var0.welcomeMessage;
                var1 = var1.authorIds;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun89762_ip = 309;
                    continue _fun89762
                }
            case 139:
                var1 = var0.newMemberActions;
                if (!(var6 != var1)) {
                    _fun89762_ip = 305;
                    continue _fun89762
                }
            case 152:
                var1 = var0.newMemberActions;
                var1 = var1.length;
                var3 = 3;
                if (!(!(var1 < var3))) {
                    _fun89762_ip = 305;
                    continue _fun89762
                }
            case 173:
                var1 = var0.newMemberActions;
                if (!(var6 != var1)) {
                    _fun89762_ip = 301;
                    continue _fun89762
                }
            case 183:
                var1 = _closure1_slot6;
                var0 = var0.newMemberActions;
                var2 = var1.bind(var4)(var0);
                var1 = var2.bind(var4)();
                var0 = var1.done;
                if (var0) {
                    _fun89762_ip = 301;
                    continue _fun89762
                }
            case 210:
                var0 = var1.value;
                var8 = _closure1_slot3;
                var7 = var8.getChannel;
                var0 = var0.channelId;
                var9 = var7.bind(var8)(var0);
                if (!(var6 != var9)) {
                    _fun89762_ip = 297;
                    continue _fun89762
                }
            case 238:
                var7 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var8 = var7.bind(var4)(var0);
                var7 = var8.canEveryoneRole;
                var0 = _closure1_slot5;
                var0 = var0.VIEW_CHANNEL;
                var0 = var7.bind(var8)(var0, var9);
                if (!var0) {
                    _fun89762_ip = 297;
                    continue _fun89762
                }
            case 280:
                var7 = var2.bind(var4)();
                var0 = var7.done;
                var1 = var7;
                if (var0) {
                    _fun89762_ip = 301;
                    continue _fun89762
                }
            case 295:
                _fun89762_ip = 210;
                continue _fun89762;
            case 297:
                var0 = false;
                return var0;
            case 301:
                var0 = true;
                return var0;
            case 305:
                var0 = false;
                return var0;
            case 309:
                var0 = false;
                return var0;
            case 313:
                var0 = false;
                return var0;
            case 317:
                var0 = true;
                return var0;
            case 321:
                var0 = false;
                return var0;
        }
    };
    var2.isSettingsValid = var4;
    var4 = function arg0() {
        _fun89763: for (var _fun89763_ip = 0;;) switch (_fun89763_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.type;
                var0 = _closure1_slot4;
                var0 = var0.GUILD_TEXT;
                var0 = var2 === var0;
                if (!var0) {
                    _fun89763_ip = 75;
                    continue _fun89763
                }
            case 28:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.canEveryoneRole;
                var2 = _closure1_slot5;
                var2 = var2.SEND_MESSAGES;
                var2 = var3.bind(var5)(var2, var4);
                var0 = !var2;
            case 75:
                if (!var0) {
                    _fun89763_ip = 122;
                    continue _fun89763
                }
            case 78:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.canEveryoneRole;
                var1 = _closure1_slot5;
                var1 = var1.VIEW_CHANNEL;
                var0 = var2.bind(var3)(var1, var4);
            case 122:
                return var0;
        }
    };
    var2.isChannelValidForResourceChannel = var4;
    var3 = function arg0() {
        _fun89764: for (var _fun89764_ip = 0;;) switch (_fun89764_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.type;
                var1 = _closure1_slot4;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var2)) {
                    _fun89764_ip = 71;
                    continue _fun89764
                }
            case 25:
                var1 = _closure1_slot4;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var2)) {
                    _fun89764_ip = 71;
                    continue _fun89764
                }
            case 39:
                var1 = _closure1_slot4;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var2)) {
                    _fun89764_ip = 71;
                    continue _fun89764
                }
            case 53:
                var1 = _closure1_slot4;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var2)) {
                    _fun89764_ip = 71;
                    continue _fun89764
                }
            case 67:
                var1 = false;
                return var1;
            case 71:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.canEveryoneRole;
                var0 = _closure1_slot5;
                var0 = var0.VIEW_CHANNEL;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.isChannelValidForNewMemberAction = var3;
    var2.ChannelEditBlockTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 1304, 3096, 2]);