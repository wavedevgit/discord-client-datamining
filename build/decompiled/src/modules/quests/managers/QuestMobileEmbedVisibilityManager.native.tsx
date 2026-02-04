// modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun117396: for (var _fun117396_ip = 0;;) switch (_fun117396_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117396_ip = 46;
                    continue _fun117396
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117396_ip = 55;
                    continue _fun117396
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117396_ip = 345;
                    continue _fun117396
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117396_ip = 323;
                    continue _fun117396
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117396_ip = 283;
                    continue _fun117396
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117396_ip = 270;
                    continue _fun117396
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
                    _fun117396_ip = 163;
                    continue _fun117396
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117396_ip = 179;
                    continue _fun117396
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117396_ip = 249;
                    continue _fun117396
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117396_ip = 249;
                    continue _fun117396
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117396_ip = 234;
                    continue _fun117396
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117396_ip = 247;
                    continue _fun117396
                }
            case 234:
                var8 = _closure1_slot26;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117396_ip = 265;
                continue _fun117396;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117396_ip = 283;
                continue _fun117396;
            case 270:
                var6 = _closure1_slot26;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117396_ip = 323;
                    continue _fun117396
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
                    _fun117396_ip = 330;
                    continue _fun117396
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117397: for (var _fun117397_ip = 0;;) switch (_fun117397_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117397_ip = 56;
                                continue _fun117397
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
                            _fun117397_ip = 67;
                            continue _fun117397;
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
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun117398: for (var _fun117398_ip = 0;;) switch (_fun117398_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117398_ip = 23;
                    continue _fun117398
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117398_ip = 33;
                    continue _fun117398
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
                    _fun117398_ip = 70;
                    continue _fun117398
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117398_ip = 55;
                    continue _fun117398
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun117399: for (var _fun117399_ip = 0;;) switch (_fun117399_ip) {
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
                _fun117399_ip = 76;
                continue _fun117399;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun117402: for (var _fun117402_ip = 0;;) switch (_fun117402_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot8;
                var3 = _closure1_slot7;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun117402_ip = 44;
                    continue _fun117402
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun117402_ip = 99;
                    continue _fun117402
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun117402_ip = 99;
                    continue _fun117402
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 99:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useChannelDetailsStore;
    var _closure1_slot12 = var7;
    var3 = var3.getIsChannelDetailsSearchActive;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isTextChannel;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
    var _closure1_slot21 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageStates;
    var _closure1_slot22 = var3;
    var3 = function arg0() {
        _fun117404: for (var _fun117404_ip = 0;;) switch (_fun117404_ip) {
            case 0:
                var5 = 0;
                var0 = copyRestArgs(var5);
                var2 = _closure1_slot23;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun117404_ip = 66;
                    continue _fun117404
                }
            case 19:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getQuestLogger;
                var0 = {};
                var4 = 'QuestMobileEmbedVisibilityManager';
                var0.location = var4;
                var0 = var2.bind(var3)(var0);
                _fun117404_ip = 70;
                continue _fun117404;
            case 66:
                var0 = _closure1_slot23;
            case 70:
                var _closure1_slot23 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117406: for (var _fun117406_ip = 0;;) switch (_fun117406_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5, var4);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117406_ip = 86;
                        continue _fun117406
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun117406_ip = 120;
                    continue _fun117406;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var4 = {};
                    var5 = 50;
                    var4.max = var5;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var5;
                    var13 = var4;
                    var4 = new var14[var6](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.impressionCache = var4;
                    var4 = {};
                    var0.questStatuses = var4;
                    var0.chatChannelId = var3;
                    var0.previousChatChannelId = var3;
                    var3 = {};
                    var0.channelsWithChatOpen = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun117407: for (var _fun117407_ip = 0;;) switch (_fun117407_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.payload;
                                var2 = var0.visibleMessages;
                                var0 = var0.source;
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var4 = new Array(0);
                                var1 = _closure1_slot25;
                                var8 = var1.bind(var0)(var2);
                                var3 = var8.bind(var0)();
                                var2 = var3.done;
                                var7 = 0;
                                var6 = global;
                                var5 = 100;
                                if (var2) {
                                    _fun117407_ip = 262;
                                    continue _fun117407
                                }
                            case 71:
                                var2 = var3.value;
                                var12 = var2.message;
                                var10 = var2.percentVisible;
                                var14 = var2.state;
                                var2 = var12.codedLinks;
                                var2 = var2.length;
                                var2 = var2 <= var7;
                                if (var2) {
                                    _fun117407_ip = 148;
                                    continue _fun117407
                                }
                            case 110:
                                var11 = _closure1_slot22;
                                var15 = var11.SENDING;
                                var13 = new Array(2);
                                var13[0] = var15;
                                var11 = var11.SEND_FAILED;
                                var13[1] = var11;
                                var11 = var13.includes;
                                var2 = var11.bind(var13)(var14);
                            case 148:
                                if (var2) {
                                    _fun117407_ip = 244;
                                    continue _fun117407
                                }
                            case 151:
                                var11 = _closure1_slot24;
                                var2 = var12.id;
                                var2 = var12.content;
                                var14 = var6.Math;
                                var13 = var14.round;
                                var2 = var5 * var10;
                                var2 = var13.bind(var14)(var2);
                                var2 = var11.bind(var0)(var2);
                                var2 = _closure1_slot21;
                                if (!(var10 > var2)) {
                                    _fun117407_ip = 244;
                                    continue _fun117407
                                }
                            case 198:
                                var10 = var4.push;
                                var11 = _closure3_slot0;
                                var2 = var11.findQuestEmbedsInMessage;
                                var17 = var2.bind(var11)(var12);
                                var2 = new Array(0);
                                var18 = var2;
                                var16 = 0;
                                var11 = arraySpread(var18, var17, var16);
                                var18 = var10;
                                var17 = var2;
                                var16 = var4;
                                var2 = apply(var18, var17, var16);
                            case 244:
                                var10 = var8.bind(var0)();
                                var2 = var10.done;
                                var3 = var10;
                                if (!var2) {
                                    _fun117407_ip = 71;
                                    continue _fun117407
                                }
                            case 262:
                                var3 = _closure3_slot0;
                                var2 = var3.updateImpressionsForVisibleEmbeds;
                                var1 = {};
                                var1.visibleEmbeds = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleVisibleMessagesChanged = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = arg0;
                        var _closure4_slot0 = var2;
                        var0 = new Array(0);
                        var _closure4_slot1 = var0;
                        var3 = global;
                        var3 = var3.Set;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var6 = var4;
                        var3 = new var6[var3](var5);
                        var3 = var3 instanceof Object ? var3 : var4;
                        var _closure4_slot2 = var3;
                        var3 = var2.codedLinks;
                        var2 = var3.forEach;
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun117409: for (var _fun117409_ip = 0;;) switch (_fun117409_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = var1.type;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 21;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var4.bind(var0)(var2);
                                    var2 = var2.CodedLinkType;
                                    var2 = var2.QUESTS_EMBED;
                                    if (!(var3 === var2)) {
                                        _fun117409_ip = 139;
                                        continue _fun117409
                                    }
                                case 49:
                                    var3 = var1.code;
                                    var4 = _closure4_slot2;
                                    var2 = var4.has;
                                    var2 = var2.bind(var4)(var3);
                                    if (var2) {
                                        _fun117409_ip = 139;
                                        continue _fun117409
                                    }
                                case 74:
                                    var5 = _closure4_slot1;
                                    var4 = var5.push;
                                    var2 = {};
                                    var2.questId = var3;
                                    var6 = arg1;
                                    var2.questContentPosition = var6;
                                    var6 = _closure4_slot0;
                                    var7 = var6.id;
                                    var2.messageId = var7;
                                    var6 = var6.channel_id;
                                    var2.channelId = var6;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = _closure4_slot2;
                                    var1 = var2.add;
                                    var1 = var1.bind(var2)(var3);
                                case 139:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.findQuestEmbedsInMessage = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun117410: for (var _fun117410_ip = 0;;) switch (_fun117410_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.visibleEmbeds;
                                var1 = _closure1_slot25;
                                var0 = undefined;
                                var9 = var1.bind(var0)(var4);
                                var3 = var9.bind(var0)();
                                var2 = var3.done;
                                var8 = 22;
                                var7 = false;
                                var6 = null;
                                var5 = 23;
                                if (var2) {
                                    _fun117410_ip = 273;
                                    continue _fun117410
                                }
                            case 51:
                                var2 = var3.value;
                                var12 = var2.questId;
                                var18 = var2.questContentPosition;
                                var16 = var2.messageId;
                                var17 = var2.channelId;
                                var11 = _closure1_slot20;
                                var2 = var11.getQuest;
                                var15 = var2.bind(var11)(var12);
                                if (!(var6 != var15)) {
                                    _fun117410_ip = 255;
                                    continue _fun117410
                                }
                            case 100:
                                var12 = _closure3_slot0;
                                var11 = var12.ensureImpression;
                                var2 = {};
                                var2.quest = var15;
                                var14 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var19 = var13[var8];
                                var19 = var14.bind(var0)(var19);
                                var19 = var19.QuestContent;
                                var19 = var19.QUEST_EMBED_MOBILE;
                                var2.questContent = var19;
                                var2.triggeredByStatusChange = var7;
                                var2.questContentPosition = var18;
                                var2.channelId = var17;
                                var2.messageId = var16;
                                var15 = var15.id;
                                var2.questId = var15;
                                var15 = _closure1_slot20;
                                var15 = var15.questEnrollmentBlockedUntil;
                                var15 = var6 != var15;
                                var2.isQuestEnrollmentBlocked = var15;
                                var15 = var13[var8];
                                var15 = var14.bind(var0)(var15);
                                var15 = var15.QuestContent;
                                var15 = var15.QUEST_EMBED_MOBILE;
                                var2.sourceQuestContent = var15;
                                var13 = var13[var5];
                                var13 = var14.bind(var0)(var13);
                                var13 = var13.AdCreativeType;
                                var13 = var13.QUEST;
                                var2.adCreativeType = var13;
                                var2 = var11.bind(var12)(var2);
                            case 255:
                                var11 = var9.bind(var0)();
                                var2 = var11.done;
                                var3 = var11;
                                if (!var2) {
                                    _fun117410_ip = 51;
                                    continue _fun117410
                                }
                            case 273:
                                var3 = _closure3_slot0;
                                var2 = var3.stopMany;
                                var1 = {};
                                var1.visibleEmbeds = var4;
                                var4 = true;
                                var1.shouldDeleteHiddenEmbeds = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.updateImpressionsForVisibleEmbeds = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun117411: for (var _fun117411_ip = 0;;) switch (_fun117411_ip) {
                            case 0:
                                var3 = arg0;
                                var7 = var3.quest;
                                var2 = null;
                                var1 = Object.create(var2);
                                var0 = 0;
                                var1.quest = var0;
                                var13 = {};
                                var12 = var3;
                                var11 = var1;
                                var5 = copyDataProperties(var13, var12, var11);
                                var0 = _closure3_slot0;
                                var3 = var0.getCacheKey;
                                var4 = var3.bind(var0)(var5);
                                var3 = var0.impressionCache;
                                var0 = var3.get;
                                var9 = var0.bind(var3)(var4);
                                var3 = var2 != var9;
                                var0 = undefined;
                                var6 = undefined;
                                if (!var3) {
                                    _fun117411_ip = 85;
                                    continue _fun117411
                                }
                            case 78:
                                var3 = var2 != var9;
                                var6 = var9;
                            case 85:
                                if (!var3) {
                                    _fun117411_ip = 94;
                                    continue _fun117411
                                }
                            case 88:
                                var3 = var6.isRunning;
                            case 94:
                                if (var3) {
                                    _fun117411_ip = 272;
                                    continue _fun117411
                                }
                            case 100:
                                var3 = var9;
                                if (!(var2 != var3)) {
                                    _fun117411_ip = 131;
                                    continue _fun117411
                                }
                            case 107:
                                var8 = var9.clone;
                                var6 = {};
                                var10 = var5.triggeredByStatusChange;
                                var6.triggeredByStatusChange = var10;
                                var3 = var8.bind(var9)(var6);
                            case 131:
                                if (!(var2 == var3)) {
                                    _fun117411_ip = 217;
                                    continue _fun117411
                                }
                            case 135:
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 24;
                                var2 = var8[var2];
                                var2 = var6.bind(var0)(var2);
                                var6 = var2.QuestContentImpression;
                                var2 = {};
                                var8 = var7.id;
                                var7 = new Array(1);
                                var7[0] = var8;
                                var2.adContentIds = var7;
                                var13 = var2;
                                var12 = var5;
                                var5 = copyDataProperties(var13, var12);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var14 = var5;
                                var13 = var2;
                                var2 = new var14[var6](var13, var12);
                                var3 = var2 instanceof Object ? var2 : var5;
                            case 217:
                                var2 = _closure3_slot0;
                                var2 = var2.isChatViewable;
                                if (!var2) {
                                    _fun117411_ip = 239;
                                    continue _fun117411
                                }
                            case 230:
                                var5 = var3.isRunning;
                                var2 = !var5;
                            case 239:
                                if (!var2) {
                                    _fun117411_ip = 251;
                                    continue _fun117411
                                }
                            case 242:
                                var2 = var3.start;
                                var2 = var2.bind(var3)();
                            case 251:
                                var1 = _closure3_slot0;
                                var2 = var1.impressionCache;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var4, var3);
                            case 272:
                                return var0;
                        }
                    };
                    var0.ensureImpression = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun117412: for (var _fun117412_ip = 0;;) switch (_fun117412_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.key;
                                var2 = var0.shouldDelete;
                                var0 = _closure3_slot0;
                                var4 = var0.impressionCache;
                                var0 = var4.get;
                                var6 = var0.bind(var4)(var3);
                                var5 = null;
                                var0 = var5 == var6;
                                var4 = undefined;
                                var7 = undefined;
                                if (var0) {
                                    _fun117412_ip = 56;
                                    continue _fun117412
                                }
                            case 50:
                                var7 = var6.isRunning;
                            case 56:
                                var0 = var5 != var7;
                                if (!var0) {
                                    _fun117412_ip = 66;
                                    continue _fun117412
                                }
                            case 63:
                                var0 = var7;
                            case 66:
                                if (!(var5 != var6)) {
                                    _fun117412_ip = 80;
                                    continue _fun117412
                                }
                            case 70:
                                var5 = var6.stop;
                                var5 = var5.bind(var6)();
                            case 80:
                                if (!var2) {
                                    _fun117412_ip = 115;
                                    continue _fun117412
                                }
                            case 83:
                                var2 = _closure1_slot24;
                                var2 = var2.bind(var4)();
                                var1 = _closure3_slot0;
                                var2 = var1.impressionCache;
                                var1 = var2.del;
                                var1 = var1.bind(var2)(var3);
                            case 115:
                                return var0;
                        }
                    };
                    var0.stopOne = var3;
                    var3 = function() { // Environment: var2
                        _fun117413: for (var _fun117413_ip = 0;;) switch (_fun117413_ip) {
                            case 0:
                                var1 = arguments[0];
                                var0 = undefined;
                                if (!(var1 === var0)) {
                                    _fun117413_ip = 30;
                                    continue _fun117413
                                }
                            case 9:
                                var2 = {};
                                var3 = new Array(0);
                                var2.visibleEmbeds = var3;
                                var3 = false;
                                var2.shouldDeleteHiddenEmbeds = var3;
                                var1 = var2;
                            case 30:
                                var4 = var1.visibleEmbeds;
                                if (!(var4 === var0)) {
                                    _fun117413_ip = 44;
                                    continue _fun117413
                                }
                            case 40:
                                var4 = new Array(0);
                            case 44:
                                var6 = var1.shouldDeleteHiddenEmbeds;
                                if (!(var6 === var0)) {
                                    _fun117413_ip = 56;
                                    continue _fun117413
                                }
                            case 54:
                                var6 = false;
                            case 56:
                                var1 = global;
                                var3 = var1.Set;
                                var2 = var4.map;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2.getCacheKey;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var10 = var2.bind(var4)(var1);
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var11 = var2;
                                var1 = new var11[var3](var10, var9);
                                var5 = var1 instanceof Object ? var1 : var2;
                                var2 = _closure1_slot25;
                                var1 = _closure3_slot0;
                                var3 = var1.impressionCache;
                                var1 = var3.keys;
                                var1 = var1.bind(var3)();
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.bind(var0)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun117413_ip = 208;
                                    continue _fun117413
                                }
                            case 149:
                                var9 = var2.value;
                                var1 = var5.has;
                                var1 = var1.bind(var5)(var9);
                                if (var1) {
                                    _fun117413_ip = 193;
                                    continue _fun117413
                                }
                            case 167:
                                var8 = _closure3_slot0;
                                var7 = var8.stopOne;
                                var1 = {};
                                var1.key = var9;
                                var1.shouldDelete = var6;
                                var1 = var7.bind(var8)(var1);
                            case 193:
                                var7 = var3.bind(var0)();
                                var1 = var7.done;
                                var2 = var7;
                                if (!var1) {
                                    _fun117413_ip = 149;
                                    continue _fun117413
                                }
                            case 208:
                                return var0;
                        }
                    };
                    var0.stopMany = var3;
                    var3 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var0 = var1.channelId;
                        var3 = var1.messageId;
                        var1 = var1.questId;
                        var2 = ':';
                        var0 = var0 + var2;
                        var0 = var0 + var3;
                        var0 = var0 + var2;
                        var0 = var0 + var1;
                        return var0;
                    };
                    var0.getCacheKey = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = arg0;
                        var1 = var2.split;
                        var0 = ':';
                        var3 = var1.bind(var2)(var0);
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var0 = 3;
                        var2 = var2.bind(var1)(var3, var0);
                        var0 = {};
                        var1 = 0;
                        var1 = var2[var1];
                        var0.channelId = var1;
                        var1 = 1;
                        var1 = var2[var1];
                        var0.messageId = var1;
                        var1 = 2;
                        var1 = var2[var1];
                        var0.questId = var1;
                        return var0;
                    };
                    var0.parseCacheKey = var3;
                    var3 = function() { // Environment: var2
                        _fun117417: for (var _fun117417_ip = 0;;) switch (_fun117417_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 25;
                                var0 = var4[var0];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var0);
                                var0 = var1.isChannelFocused;
                                var0 = var0.bind(var1)();
                                var1 = 26;
                                var1 = var4[var1];
                                var2 = var3.bind(var2)(var1);
                                var1 = var2.getCurrentNavigationRouteName;
                                var2 = var1.bind(var2)();
                                if (!var0) {
                                    _fun117417_ip = 68;
                                    continue _fun117417
                                }
                            case 60:
                                var1 = 'channel';
                                var0 = var1 === var2;
                            case 68:
                                return var0;
                        }
                    };
                    var0.isOnChannelNavigationRoute = var3;
                    var3 = function() { // Environment: var2
                        _fun117418: for (var _fun117418_ip = 0;;) switch (_fun117418_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.chatChannelId;
                                var0 = null;
                                var0 = var0 != var2;
                                if (!var0) {
                                    _fun117418_ip = 46;
                                    continue _fun117418
                                }
                            case 22:
                                var3 = _closure1_slot13;
                                var1 = _closure3_slot0;
                                var2 = var1.chatChannelId;
                                var1 = undefined;
                                var0 = var3.bind(var1)(var2);
                            case 46:
                                return var0;
                        }
                    };
                    var0.isSearchShowing = var3;
                    var3 = function() { // Environment: var2
                        _fun117419: for (var _fun117419_ip = 0;;) switch (_fun117419_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.chatChannelId;
                                var1 = null;
                                if (!(var1 != var0)) {
                                    _fun117419_ip = 530;
                                    continue _fun117419
                                }
                            case 22:
                                var4 = _closure1_slot10;
                                var2 = var4.isOpen;
                                var2 = var2.bind(var4)();
                                if (var2) {
                                    _fun117419_ip = 516;
                                    continue _fun117419
                                }
                            case 45:
                                var4 = _closure1_slot19;
                                var2 = var4.getState;
                                var5 = var2.bind(var4)();
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 27;
                                var4 = var4[var2];
                                var2 = undefined;
                                var4 = var6.bind(var2)(var4);
                                var4 = var4.AppStates;
                                var4 = var4.ACTIVE;
                                if (!(var5 === var4)) {
                                    _fun117419_ip = 504;
                                    continue _fun117419
                                }
                            case 100:
                                var6 = _closure1_slot16;
                                var5 = var6.getChannel;
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                var4 = var5.bind(var6)(var4);
                                var5 = var1 == var4;
                                var7 = undefined;
                                if (var5) {
                                    _fun117419_ip = 138;
                                    continue _fun117419
                                }
                            case 133:
                                var7 = var4.type;
                            case 138:
                                var6 = _closure1_slot11;
                                var5 = var6.getChatOpen;
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                var6 = var5.bind(var6)(var4);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var9 = 28;
                                var4 = var4[var9];
                                var4 = var5.bind(var2)(var4);
                                var4 = var4.ChannelTypes;
                                var4 = var4.GUILD_STAGE_VOICE;
                                var5 = var7 === var4;
                                if (!var5) {
                                    _fun117419_ip = 205;
                                    continue _fun117419
                                }
                            case 202:
                                var5 = var6;
                            case 205:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 26;
                                var4 = var10[var4];
                                var8 = var8.bind(var2)(var4);
                                var4 = var8.getOpenModalKey;
                                var8 = var4.bind(var8)();
                                var4 = _closure3_slot0;
                                var11 = var4.chatChannelId;
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var10 = var4.concat;
                                var4 = 'voice-channel-';
                                var4 = var10.bind(var4)(var11);
                                if (!(var1 != var8)) {
                                    _fun117419_ip = 289;
                                    continue _fun117419
                                }
                            case 273:
                                if (!(var8 !== var4)) {
                                    _fun117419_ip = 289;
                                    continue _fun117419
                                }
                            case 277:
                                var4 = _closure1_slot24;
                                var4 = var4.bind(var2)();
                                var4 = false;
                                return var4;
                            case 289:
                                var8 = _closure3_slot0;
                                var4 = var8.isSearchShowing;
                                var4 = var4.bind(var8)();
                                if (var4) {
                                    _fun117419_ip = 492;
                                    continue _fun117419
                                }
                            case 309:
                                var8 = _closure1_slot18;
                                var4 = var8.getAlert;
                                var4 = var4.bind(var8)();
                                if (!(var1 == var4)) {
                                    _fun117419_ip = 480;
                                    continue _fun117419
                                }
                            case 330:
                                var8 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var9];
                                var4 = var8.bind(var2)(var4);
                                var4 = var4.ChannelTypes;
                                var4 = var4.GUILD_VOICE;
                                var4 = var7 === var4;
                                if (!var4) {
                                    _fun117419_ip = 369;
                                    continue _fun117419
                                }
                            case 366:
                                var4 = var6;
                            case 369:
                                var1 = var1 != var7;
                                if (!var1) {
                                    _fun117419_ip = 385;
                                    continue _fun117419
                                }
                            case 376:
                                var6 = _closure1_slot15;
                                var1 = var6.bind(var2)(var7);
                            case 385:
                                var7 = _closure1_slot14;
                                var6 = var7.getState;
                                var7 = var6.bind(var7)();
                                var6 = var7.isAnyVoicePanelOpen;
                                var6 = var6.bind(var7)();
                                var8 = _closure3_slot0;
                                var7 = var8.isOnChannelNavigationRoute;
                                var7 = var7.bind(var8)();
                                if (!var1) {
                                    _fun117419_ip = 429;
                                    continue _fun117419
                                }
                            case 426:
                                var1 = var7;
                            case 429:
                                if (!var1) {
                                    _fun117419_ip = 435;
                                    continue _fun117419
                                }
                            case 432:
                                var1 = !var6;
                            case 435:
                                if (!var1) {
                                    _fun117419_ip = 441;
                                    continue _fun117419
                                }
                            case 438:
                                var1 = !var5;
                            case 441:
                                if (!var1) {
                                    _fun117419_ip = 447;
                                    continue _fun117419
                                }
                            case 444:
                                var1 = !var4;
                            case 447:
                                if (var1) {
                                    _fun117419_ip = 453;
                                    continue _fun117419
                                }
                            case 450:
                                var1 = var5;
                            case 453:
                                if (var1) {
                                    _fun117419_ip = 459;
                                    continue _fun117419
                                }
                            case 456:
                                var1 = var4;
                            case 459:
                                var4 = _closure1_slot24;
                                var3 = _closure3_slot0;
                                var3 = var3.chatChannelId;
                                var3 = var4.bind(var2)(var3);
                                return var1;
                            case 480:
                                var1 = _closure1_slot24;
                                var1 = var1.bind(var2)();
                                var1 = false;
                                return var1;
                            case 492:
                                var1 = _closure1_slot24;
                                var1 = var1.bind(var2)();
                                var1 = false;
                                return var1;
                            case 504:
                                var1 = _closure1_slot24;
                                var1 = var1.bind(var2)();
                                var1 = false;
                                return var1;
                            case 516:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                var0 = false;
                                return var0;
                            case 530:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                var0 = false;
                                return var0;
                        }
                    };
                    var0.getIsChatViewable = var3;
                    var3 = function() { // Environment: var2
                        _fun117420: for (var _fun117420_ip = 0;;) switch (_fun117420_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var2 = _closure1_slot25;
                                var1 = _closure3_slot0;
                                var3 = var1.impressionCache;
                                var1 = var3.keys;
                                var1 = var1.bind(var3)();
                                var6 = var2.bind(var0)(var1);
                                var2 = var6.bind(var0)();
                                var1 = var2.done;
                                var5 = false;
                                var4 = null;
                                var3 = var2;
                                var2 = undefined;
                                if (var1) {
                                    _fun117420_ip = 271;
                                    continue _fun117420
                                }
                            case 68:
                                var12 = var3.value;
                                var1 = _closure3_slot0;
                                var9 = var1.impressionCache;
                                var1 = var9.get;
                                var13 = var1.bind(var9)(var12);
                                if (!(var4 != var13)) {
                                    _fun117420_ip = 253;
                                    continue _fun117420
                                }
                            case 100:
                                var9 = _closure3_slot0;
                                var1 = var9.parseCacheKey;
                                var1 = var1.bind(var9)(var12);
                                var1 = var1.channelId;
                                var9 = var13.isRunning;
                                if (!var9) {
                                    _fun117420_ip = 170;
                                    continue _fun117420
                                }
                            case 129:
                                var10 = _closure1_slot24;
                                var11 = _closure3_slot0;
                                var9 = var11.chatChannelId;
                                var9 = var10.bind(var0)(var9);
                                var10 = var11.stopOne;
                                var9 = {};
                                var9.key = var12;
                                var9.shouldDelete = var5;
                                var9 = var10.bind(var11)(var9);
                            case 170:
                                var9 = _closure3_slot0;
                                var9 = var9.chatChannelId;
                                var2 = var1;
                                if (!(var2 === var9)) {
                                    _fun117420_ip = 253;
                                    continue _fun117420
                                }
                            case 187:
                                var11 = _closure1_slot24;
                                var9 = _closure3_slot0;
                                var10 = var9.chatChannelId;
                                var10 = var11.bind(var0)(var10);
                                var11 = var13.clone;
                                var10 = {};
                                var10.triggeredByStatusChange = var5;
                                var11 = var11.bind(var13)(var10);
                                var10 = var11.start;
                                var10 = var10.bind(var11)();
                                var10 = var9.impressionCache;
                                var9 = var10.set;
                                var9 = var9.bind(var10)(var12, var11);
                                var2 = var1;
                            case 253:
                                var9 = var6.bind(var0)();
                                var1 = var9.done;
                                var3 = var9;
                                if (!var1) {
                                    _fun117420_ip = 68;
                                    continue _fun117420
                                }
                            case 271:
                                return var0;
                        }
                    };
                    var0.updateImpressionsForChatBecameViewable = var3;
                    var3 = function() { // Environment: var2
                        _fun117421: for (var _fun117421_ip = 0;;) switch (_fun117421_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.isChatViewable;
                                if (var1) {
                                    _fun117421_ip = 45;
                                    continue _fun117421
                                }
                            case 16:
                                var2 = _closure1_slot24;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                var2 = _closure3_slot0;
                                var1 = var2.stopMany;
                                var1 = var1.bind(var2)();
                                _fun117421_ip = 59;
                                continue _fun117421;
                            case 45:
                                var1 = _closure3_slot0;
                                var0 = var1.updateImpressionsForChatBecameViewable;
                                var0 = var0.bind(var1)();
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.refreshImpressions = var3;
                    var3 = function() { // Environment: var2
                        _fun117422: for (var _fun117422_ip = 0;;) switch (_fun117422_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.getIsChatViewable;
                                var1 = var1.bind(var0)();
                                var0 = var0.isChatViewable;
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun117422_ip = 65;
                                    continue _fun117422
                                }
                            case 30:
                                var4 = _closure1_slot24;
                                var3 = undefined;
                                var3 = var4.bind(var3)();
                                var2 = _closure3_slot0;
                                var2.isChatViewable = var1;
                                var1 = var2.refreshImpressions;
                                var1 = var1.bind(var2)();
                                var0 = true;
                            case 65:
                                return var0;
                        }
                    };
                    var0.checkChatViewable = var3;
                    var3 = function() { // Environment: var2
                        _fun117423: for (var _fun117423_ip = 0;;) switch (_fun117423_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.isOnChannelNavigationRoute;
                                var1 = var1.bind(var2)();
                                var2 = var2.wasOnChannelNavigationRoute;
                                if (!(var1 !== var2)) {
                                    _fun117423_ip = 60;
                                    continue _fun117423
                                }
                            case 27:
                                var3 = _closure1_slot24;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                                var0 = _closure3_slot0;
                                var2 = var0.checkChatViewable;
                                var2 = var2.bind(var0)();
                                var0.wasOnChannelNavigationRoute = var1;
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.checkIsOnChannelNavigationRoute = var3;
                    var3 = function() { // Environment: var2
                        _fun117424: for (var _fun117424_ip = 0;;) switch (_fun117424_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.isSearchShowing;
                                var1 = var1.bind(var2)();
                                var2 = var2.wasSearchShowing;
                                if (!(var1 !== var2)) {
                                    _fun117424_ip = 60;
                                    continue _fun117424
                                }
                            case 27:
                                var3 = _closure1_slot24;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                                var0 = _closure3_slot0;
                                var2 = var0.checkChatViewable;
                                var2 = var2.bind(var0)();
                                var0.wasSearchShowing = var1;
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.checkSearchShowing = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun117425: for (var _fun117425_ip = 0;;) switch (_fun117425_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var0 = var3.chatChannelId;
                                var3.previousChatChannelId = var0;
                                var0 = arg0;
                                var3.chatChannelId = var0;
                                var4 = _closure1_slot24;
                                var0 = var3.previousChatChannelId;
                                var2 = var3.chatChannelId;
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var4 = var3.stopMany;
                                var2 = {};
                                var5 = true;
                                var2.shouldDeleteHiddenEmbeds = var5;
                                var2 = var4.bind(var3)(var2);
                                var2 = var3.checkChatViewable;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun117425_ip = 101;
                                    continue _fun117425
                                }
                            case 87:
                                var2 = _closure3_slot0;
                                var1 = var2.refreshImpressions;
                                var1 = var1.bind(var2)();
                            case 101:
                                return var0;
                        }
                    };
                    var0.onChannelChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117426: for (var _fun117426_ip = 0;;) switch (_fun117426_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 26;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getOpenModalKey;
                                var2 = var1.bind(var2)();
                                var4 = _closure3_slot0;
                                var4 = var4.previouslyOpenModalKey;
                                if (!(var2 !== var4)) {
                                    _fun117426_ip = 87;
                                    continue _fun117426
                                }
                            case 52:
                                var4 = _closure1_slot24;
                                var1 = _closure3_slot0;
                                var3 = var1.previouslyOpenModalKey;
                                var3 = var4.bind(var0)(var3);
                                var3 = var1.checkChatViewable;
                                var3 = var3.bind(var1)();
                                var1.previouslyOpenModalKey = var2;
                            case 87:
                                return var0;
                        }
                    };
                    var0.checkOpenModalKey = var3;
                    var3 = function() { // Environment: var2
                        _fun117427: for (var _fun117427_ip = 0;;) switch (_fun117427_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var1 = _closure1_slot20;
                                var13 = var1.quests;
                                var1 = global;
                                var3 = var1.Set;
                                var1 = var13.keys;
                                var25 = var1.bind(var13)();
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var26 = var2;
                                var1 = new var26[var3](var25, var24);
                                var12 = var1 instanceof Object ? var1 : var2;
                                var2 = _closure1_slot25;
                                var1 = _closure3_slot0;
                                var3 = var1.impressionCache;
                                var1 = var3.keys;
                                var1 = var1.bind(var3)();
                                var10 = var2.bind(var0)(var1);
                                var2 = var10.bind(var0)();
                                var1 = var2.done;
                                var9 = true;
                                var8 = null;
                                var7 = 29;
                                var6 = var2;
                                var5 = undefined;
                                var4 = undefined;
                                var3 = undefined;
                                var2 = undefined;
                                if (var1) {
                                    _fun117427_ip = 481;
                                    continue _fun117427
                                }
                            case 124:
                                var22 = var6.value;
                                var15 = _closure3_slot0;
                                var1 = var15.parseCacheKey;
                                var19 = var1.bind(var15)(var22);
                                var15 = var12.has;
                                var1 = var19.questId;
                                var1 = var15.bind(var12)(var1);
                                var15 = var2;
                                if (!var1) {
                                    _fun117427_ip = 460;
                                    continue _fun117427
                                }
                            case 169:
                                var16 = var13.get;
                                var1 = var19.questId;
                                var18 = var16.bind(var13)(var1);
                                var1 = _closure3_slot0;
                                var16 = var1.questStatuses;
                                var1 = var19.questId;
                                var17 = var16[var1];
                                var1 = var8 != var18;
                                var16 = null;
                                if (!var1) {
                                    _fun117427_ip = 242;
                                    continue _fun117427
                                }
                            case 214:
                                var20 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var7];
                                var20 = var20.bind(var0)(var1);
                                var1 = var20.getQuestStatus;
                                var16 = var1.bind(var20)(var18);
                            case 242:
                                var5 = var18;
                                var15 = var2;
                                var3 = var16;
                                var4 = var17;
                                if (!(var3 !== var4)) {
                                    _fun117427_ip = 460;
                                    continue _fun117427
                                }
                            case 261:
                                var1 = _closure3_slot0;
                                var20 = var1.questStatuses;
                                var19 = var19.questId;
                                var20[var19] = var16;
                                var1 = var1.isChatViewable;
                                var5 = var18;
                                var4 = var17;
                                var3 = var16;
                                var15 = var2;
                                if (!var1) {
                                    _fun117427_ip = 460;
                                    continue _fun117427
                                }
                            case 305:
                                var1 = _closure3_slot0;
                                var19 = var1.impressionCache;
                                var1 = var19.get;
                                var1 = var1.bind(var19)(var22);
                                var20 = var8 == var1;
                                var19 = undefined;
                                if (var20) {
                                    _fun117427_ip = 340;
                                    continue _fun117427
                                }
                            case 334:
                                var19 = var1.isRunning;
                            case 340:
                                var5 = var18;
                                var4 = var17;
                                var3 = var16;
                                var15 = var1;
                                if (!(var9 === var19)) {
                                    _fun117427_ip = 460;
                                    continue _fun117427
                                }
                            case 356:
                                if (!(var8 == var18)) {
                                    _fun117427_ip = 400;
                                    continue _fun117427
                                }
                            case 360:
                                var21 = _closure3_slot0;
                                var20 = var21.stopOne;
                                var19 = {};
                                var19.key = var22;
                                var19.shouldDelete = var9;
                                var19 = var20.bind(var21)(var19);
                                var5 = var18;
                                var4 = var17;
                                var3 = var16;
                                var15 = var1;
                                _fun117427_ip = 460;
                                continue _fun117427;
                            case 400:
                                var20 = var1.clone;
                                var19 = {};
                                var19.triggeredByStatusChange = var9;
                                var21 = var20.bind(var1)(var19);
                                var19 = var21.start;
                                var19 = var19.bind(var21)();
                                var19 = _closure3_slot0;
                                var20 = var19.impressionCache;
                                var19 = var20.set;
                                var19 = var19.bind(var20)(var22, var21);
                                var5 = var18;
                                var4 = var17;
                                var3 = var16;
                                var15 = var1;
                            case 460:
                                var16 = var10.bind(var0)();
                                var1 = var16.done;
                                var2 = var15;
                                var6 = var16;
                                if (!var1) {
                                    _fun117427_ip = 124;
                                    continue _fun117427
                                }
                            case 481:
                                return var0;
                        }
                    };
                    var0.handleQuestStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117428: for (var _fun117428_ip = 0;;) switch (_fun117428_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var3 = _closure1_slot17;
                                var1 = var3.getChannelId;
                                var3 = var1.bind(var3)();
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                if (!(var3 !== var4)) {
                                    _fun117428_ip = 236;
                                    continue _fun117428
                                }
                            case 47:
                                var6 = _closure1_slot16;
                                var5 = var6.getChannel;
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                var9 = var5.bind(var6)(var4);
                                var6 = null;
                                var5 = var6 == var9;
                                var4 = undefined;
                                if (var5) {
                                    _fun117428_ip = 87;
                                    continue _fun117428
                                }
                            case 82:
                                var4 = var9.type;
                            case 87:
                                var5 = var6 != var4;
                                if (!var5) {
                                    _fun117428_ip = 183;
                                    continue _fun117428
                                }
                            case 94:
                                var7 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 28;
                                var8 = var10[var4];
                                var8 = var7.bind(var0)(var8);
                                var8 = var8.ChannelTypes;
                                var11 = var8.GUILD_STAGE_VOICE;
                                var8 = new Array(2);
                                var8[0] = var11;
                                var4 = var10[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.ChannelTypes;
                                var4 = var4.GUILD_VOICE;
                                var8[1] = var4;
                                var7 = var8.includes;
                                var10 = var6 == var9;
                                var4 = undefined;
                                if (var10) {
                                    _fun117428_ip = 178;
                                    continue _fun117428
                                }
                            case 173:
                                var4 = var9.type;
                            case 178:
                                var5 = var7.bind(var8)(var4);
                            case 183:
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                var4 = var6 != var4;
                                if (!var4) {
                                    _fun117428_ip = 203;
                                    continue _fun117428
                                }
                            case 200:
                                var4 = var5;
                            case 203:
                                if (var4) {
                                    _fun117428_ip = 236;
                                    continue _fun117428
                                }
                            case 206:
                                var4 = _closure1_slot24;
                                var2 = _closure3_slot0;
                                var1 = var2.chatChannelId;
                                var1 = var4.bind(var0)(var1);
                                var1 = var2.onChannelChanged;
                                var1 = var1.bind(var2)(var3);
                            case 236:
                                return var0;
                        }
                    };
                    var0.handleSelectedChannelStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117429: for (var _fun117429_ip = 0;;) switch (_fun117429_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var2 = _closure1_slot10;
                                var1 = var2.isOpen;
                                var2 = var1.bind(var2)();
                                var4 = _closure3_slot0;
                                var4 = var4.wasActionSheetOpen;
                                if (!(var2 !== var4)) {
                                    _fun117429_ip = 72;
                                    continue _fun117429
                                }
                            case 44:
                                var3 = _closure1_slot24;
                                var3 = var3.bind(var0)();
                                var1 = _closure3_slot0;
                                var3 = var1.checkChatViewable;
                                var3 = var3.bind(var1)();
                                var1.wasActionSheetOpen = var2;
                            case 72:
                                return var0;
                        }
                    };
                    var0.handleActionSheetStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117430: for (var _fun117430_ip = 0;;) switch (_fun117430_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var2 = _closure1_slot19;
                                var1 = var2.getState;
                                var2 = var1.bind(var2)();
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 27;
                                var1 = var5[var1];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.AppStates;
                                var1 = var1.ACTIVE;
                                var2 = var2 === var1;
                                var4 = _closure3_slot0;
                                var4 = var4.wasAppActive;
                                if (!(var4 !== var2)) {
                                    _fun117430_ip = 108;
                                    continue _fun117430
                                }
                            case 80:
                                var3 = _closure1_slot24;
                                var3 = var3.bind(var0)();
                                var1 = _closure3_slot0;
                                var3 = var1.checkChatViewable;
                                var3 = var3.bind(var1)();
                                var1.wasAppActive = var2;
                            case 108:
                                return var0;
                        }
                    };
                    var0.handleAppStateStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117431: for (var _fun117431_ip = 0;;) switch (_fun117431_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var2 = _closure1_slot14;
                                var1 = var2.getState;
                                var2 = var1.bind(var2)();
                                var1 = var2.isAnyVoicePanelOpen;
                                var2 = var1.bind(var2)();
                                var4 = _closure3_slot0;
                                var4 = var4.wasAnyVoicePanelOpen;
                                if (!(var2 !== var4)) {
                                    _fun117431_ip = 82;
                                    continue _fun117431
                                }
                            case 54:
                                var3 = _closure1_slot24;
                                var3 = var3.bind(var0)();
                                var1 = _closure3_slot0;
                                var3 = var1.checkChatViewable;
                                var3 = var3.bind(var1)();
                                var1.wasAnyVoicePanelOpen = var2;
                            case 82:
                                return var0;
                        }
                    };
                    var0.handleVoicePanelStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.checkSearchShowing;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleChannelDetailsStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117433: for (var _fun117433_ip = 0;;) switch (_fun117433_ip) {
                            case 0:
                                var1 = _closure1_slot24;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var2 = _closure1_slot11;
                                var1 = var2.getAllChatOpen;
                                var3 = var1.bind(var2)();
                                var4 = _closure1_slot25;
                                var5 = global;
                                var6 = var5.Set;
                                var8 = var5.Object;
                                var7 = var8.keys;
                                var2 = _closure3_slot0;
                                var2 = var2.channelsWithChatOpen;
                                var23 = var7.bind(var8)(var2);
                                var2 = new Array(0);
                                var22 = 0;
                                var24 = var2;
                                var22 = arraySpread(var24, var23, var22);
                                var8 = var5.Object;
                                var5 = var8.keys;
                                var23 = var5.bind(var8)(var3);
                                var24 = var2;
                                var5 = arraySpread(var24, var23, var22);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var25 = var5;
                                var24 = var2;
                                var2 = new var25[var6](var24, var23);
                                var2 = var2 instanceof Object ? var2 : var5;
                                var13 = var4.bind(var0)(var2);
                                var4 = var13.bind(var0)();
                                var2 = var4.done;
                                var12 = null;
                                var11 = 28;
                                var10 = var4;
                                var9 = undefined;
                                var8 = undefined;
                                var7 = undefined;
                                var6 = undefined;
                                if (var2) {
                                    _fun117433_ip = 498;
                                    continue _fun117433
                                }
                            case 165:
                                var5 = var10.value;
                                var4 = _closure1_slot16;
                                var2 = var4.getChannel;
                                var20 = var2.bind(var4)(var5);
                                var4 = var12 == var20;
                                var2 = undefined;
                                if (var4) {
                                    _fun117433_ip = 198;
                                    continue _fun117433
                                }
                            case 193:
                                var2 = var20.type;
                            case 198:
                                var18 = var9;
                                var17 = var8;
                                var16 = var7;
                                var15 = var6;
                                if (!(var12 != var2)) {
                                    _fun117433_ip = 372;
                                    continue _fun117433
                                }
                            case 217:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var19 = var2[var11];
                                var19 = var4.bind(var0)(var19);
                                var19 = var19.ChannelTypes;
                                var21 = var19.GUILD_STAGE_VOICE;
                                var19 = new Array(2);
                                var19[0] = var21;
                                var2 = var2[var11];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.ChannelTypes;
                                var2 = var2.GUILD_VOICE;
                                var19[1] = var2;
                                var4 = var19.includes;
                                var21 = var12 == var20;
                                var2 = undefined;
                                if (var21) {
                                    _fun117433_ip = 298;
                                    continue _fun117433
                                }
                            case 293:
                                var2 = var20.type;
                            case 298:
                                var2 = var4.bind(var19)(var2);
                                var18 = var9;
                                var17 = var8;
                                var16 = var7;
                                var15 = var6;
                                if (!var2) {
                                    _fun117433_ip = 372;
                                    continue _fun117433
                                }
                            case 318:
                                var2 = _closure3_slot0;
                                var2 = var2.channelsWithChatOpen;
                                var20 = var2[var5];
                                var4 = var12 != var20;
                                if (!var4) {
                                    _fun117433_ip = 342;
                                    continue _fun117433
                                }
                            case 339:
                                var4 = var20;
                            case 342:
                                var19 = var3[var5];
                                var2 = var12 != var19;
                                if (!var2) {
                                    _fun117433_ip = 356;
                                    continue _fun117433
                                }
                            case 353:
                                var2 = var19;
                            case 356:
                                var18 = var20;
                                var17 = var19;
                                var16 = var4;
                                var15 = var2;
                                if (!(var16 === var15)) {
                                    _fun117433_ip = 404;
                                    continue _fun117433
                                }
                            case 372:
                                var19 = var13.bind(var0)();
                                var4 = var19.done;
                                var9 = var18;
                                var8 = var17;
                                var7 = var16;
                                var6 = var15;
                                var10 = var19;
                                if (var4) {
                                    _fun117433_ip = 498;
                                    continue _fun117433
                                }
                            case 399:
                                _fun117433_ip = 165;
                                continue _fun117433;
                            case 404:
                                if (!var2) {
                                    _fun117433_ip = 421;
                                    continue _fun117433
                                }
                            case 407:
                                var4 = _closure3_slot0;
                                var4 = var4.chatChannelId;
                                if (!(var5 === var4)) {
                                    _fun117433_ip = 483;
                                    continue _fun117433
                                }
                            case 421:
                                if (var2) {
                                    _fun117433_ip = 467;
                                    continue _fun117433
                                }
                            case 424:
                                var2 = _closure3_slot0;
                                var4 = var2.previousChatChannelId;
                                var2 = var2.chatChannelId;
                                if (!(var4 !== var2)) {
                                    _fun117433_ip = 467;
                                    continue _fun117433
                                }
                            case 444:
                                var6 = _closure3_slot0;
                                var4 = var6.onChannelChanged;
                                var2 = var6.previousChatChannelId;
                                var2 = var4.bind(var6)(var2);
                                _fun117433_ip = 498;
                                continue _fun117433;
                            case 467:
                                var4 = _closure3_slot0;
                                var2 = var4.checkChatViewable;
                                var2 = var2.bind(var4)();
                                _fun117433_ip = 498;
                                continue _fun117433;
                            case 483:
                                var4 = _closure3_slot0;
                                var2 = var4.onChannelChanged;
                                var2 = var2.bind(var4)(var5);
                            case 498:
                                var2 = _closure3_slot0;
                                var1 = {};
                                var24 = var1;
                                var23 = var3;
                                var3 = copyDataProperties(var24, var23);
                                var2.channelsWithChatOpen = var1;
                                return var0;
                        }
                    };
                    var0.handleChannelRTCStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        var1 = _closure1_slot24;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var2 = _closure3_slot0;
                        var1 = var2.checkIsOnChannelNavigationRoute;
                        var1 = var1.bind(var2)();
                        var1 = var2.checkOpenModalKey;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handleNavigationStateChanged = var3;
                    var3 = function() { // Environment: var2
                        _fun117435: for (var _fun117435_ip = 0;;) switch (_fun117435_ip) {
                            case 0:
                                var1 = _closure1_slot18;
                                var0 = var1.getAlert;
                                var1 = var0.bind(var1)();
                                var0 = null;
                                var1 = var0 != var1;
                                var3 = _closure3_slot0;
                                var3 = var3.wasAlertOpen;
                                if (!(var1 !== var3)) {
                                    _fun117435_ip = 70;
                                    continue _fun117435
                                }
                            case 40:
                                var3 = _closure1_slot24;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                                var0 = _closure3_slot0;
                                var2 = var0.checkChatViewable;
                                var2 = var2.bind(var0)();
                                var0.wasAlertOpen = var1;
                            case 70:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleAlertStoreChanged = var3;
                    var3 = function() { // Environment: var2
                        var0 = undefined;
                        return var0;
                    };
                    var0.unsubscribeFromVoicePanelStore = var3;
                    var2 = function() { // Environment: var2
                        var0 = undefined;
                        return var0;
                    };
                    var0.unsubscribeFromChannelDetailsStore = var2;
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var4 = var5.set;
                    var3 = _closure1_slot20;
                    var2 = var0.handleQuestStoreChanged;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.set;
                    var3 = _closure1_slot17;
                    var2 = var0.handleSelectedChannelStoreChanged;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.set;
                    var3 = _closure1_slot10;
                    var2 = var0.handleActionSheetStoreChanged;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.set;
                    var3 = _closure1_slot19;
                    var2 = var0.handleAppStateStoreChanged;
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.set;
                    var3 = _closure1_slot11;
                    var2 = var0.handleChannelRTCStoreChanged;
                    var4 = var4.bind(var5)(var3, var2);
                    var3 = var4.set;
                    var2 = _closure1_slot18;
                    var1 = var0.handleAlertStoreChanged;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
                    var1 = {};
                    var2 = var0.handleVisibleMessagesChanged;
                    var1.QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun117438: for (var _fun117438_ip = 0;;) switch (_fun117438_ip) {
                case 0:
                    var5 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 30;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var6 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var6)) {
                        _fun117438_ip = 66;
                        continue _fun117438
                    }
                case 44:
                    var4 = var6.addListener;
                    var3 = var5.handleNavigationStateChanged;
                    var2 = 'state';
                    var2 = var4.bind(var6)(var2, var3);
                case 66:
                    var4 = _closure1_slot14;
                    var3 = var4.subscribe;
                    var2 = var5.handleVoicePanelStoreChanged;
                    var2 = var3.bind(var4)(var2);
                    var5.unsubscribeFromVoicePanelStore = var2;
                    var4 = _closure1_slot12;
                    var3 = var4.subscribe;
                    var2 = var5.handleChannelDetailsStoreChanged;
                    var2 = var3.bind(var4)(var2);
                    var5.unsubscribeFromChannelDetailsStore = var2;
                    var4 = _closure1_slot28;
                    var10 = _closure2_slot0;
                    var9 = '_initialize';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var5;
                    var2 = var11[var4](var10, var9, var8, var7, var6);
                    var1 = new Array(0);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            _fun117439: for (var _fun117439_ip = 0;;) switch (_fun117439_ip) {
                case 0:
                    var5 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 30;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var6 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var6)) {
                        _fun117439_ip = 66;
                        continue _fun117439
                    }
                case 44:
                    var4 = var6.removeListener;
                    var3 = var5.handleNavigationStateChanged;
                    var2 = 'state';
                    var2 = var4.bind(var6)(var2, var3);
                case 66:
                    var2 = var5.unsubscribeFromVoicePanelStore;
                    var2 = var2.bind(var5)();
                    var2 = var5.unsubscribeFromChannelDetailsStore;
                    var2 = var2.bind(var5)();
                    var4 = _closure1_slot28;
                    var10 = _closure2_slot0;
                    var9 = '_terminate';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var5;
                    var2 = var11[var4](var10, var9, var8, var7, var6);
                    var1 = new Array(0);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 102, 18, 3140, 3948, 8915, 7880, 1376, 1372, 1670, 9720, 5284, 5226, 5308, 660, 5240, 1386, 3327, 5230, 5305, 5307, 8742, 3919, 670, 790, 5277, 3920, 4299, 2]);