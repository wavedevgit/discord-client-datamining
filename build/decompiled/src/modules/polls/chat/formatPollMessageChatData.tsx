// modules/polls/chat/formatPollMessageChatData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun56139: for (var _fun56139_ip = 0;;) switch (_fun56139_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun56139_ip = 46;
                    continue _fun56139
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun56139_ip = 55;
                    continue _fun56139
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun56139_ip = 343;
                    continue _fun56139
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun56139_ip = 323;
                    continue _fun56139
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun56139_ip = 283;
                    continue _fun56139
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun56139_ip = 270;
                    continue _fun56139
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
                    _fun56139_ip = 163;
                    continue _fun56139
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun56139_ip = 179;
                    continue _fun56139
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun56139_ip = 249;
                    continue _fun56139
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun56139_ip = 249;
                    continue _fun56139
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun56139_ip = 234;
                    continue _fun56139
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun56139_ip = 247;
                    continue _fun56139
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun56139_ip = 265;
                continue _fun56139;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun56139_ip = 283;
                continue _fun56139;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun56139_ip = 323;
                    continue _fun56139
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
                    _fun56139_ip = 330;
                    continue _fun56139
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun56140: for (var _fun56140_ip = 0;;) switch (_fun56140_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun56140_ip = 56;
                                continue _fun56140
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
                            _fun56140_ip = 67;
                            continue _fun56140;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun56141: for (var _fun56141_ip = 0;;) switch (_fun56141_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun56141_ip = 23;
                    continue _fun56141
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun56141_ip = 33;
                    continue _fun56141
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
                    _fun56141_ip = 70;
                    continue _fun56141
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun56141_ip = 55;
                    continue _fun56141
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var4 = function arg0, arg1() {
        _fun56142: for (var _fun56142_ip = 0;;) switch (_fun56142_ip) {
            case 0:
                var8 = arg1;
                var2 = _closure1_slot12;
                var0 = undefined;
                var1 = arg0;
                var7 = var2.bind(var0)(var1);
                var2 = var7.bind(var0)();
                var1 = var2.done;
                var6 = global;
                var5 = '';
                var4 = 'number';
                var3 = var2;
                if (var1) {
                    _fun56142_ip = 131;
                    continue _fun56142
                }
            case 45:
                var1 = var3.value;
                var2 = var1.emoji;
                var2 = var2.id;
                var2 = typeof var2;
                if (!(var4 !== var2)) {
                    _fun56142_ip = 81;
                    continue _fun56142
                }
            case 68:
                var2 = var1.emoji;
                var2 = var2.id;
                _fun56142_ip = 108;
                continue _fun56142;
            case 81:
                var9 = var1.emoji;
                var10 = var9.id;
                var9 = var6.HermesInternal;
                var9 = var9.concat;
                var2 = var9.bind(var5)(var10);
            case 108:
                if (!(var2 !== var8)) {
                    _fun56142_ip = 129;
                    continue _fun56142
                }
            case 112:
                var9 = var7.bind(var0)();
                var2 = var9.done;
                var3 = var9;
                if (var2) {
                    _fun56142_ip = 131;
                    continue _fun56142
                }
            case 127:
                _fun56142_ip = 45;
                continue _fun56142;
            case 129:
                return var1;
            case 131:
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var0 = function arg0() {
        _fun56143: for (var _fun56143_ip = 0;;) switch (_fun56143_ip) {
            case 0:
                var3 = arg0;
                var0 = arguments[1];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun56143_ip = 14;
                    continue _fun56143
                }
            case 12:
                var0 = {};
            case 14:
                var1 = var0.animateEmoji;
                if (!(var1 === var6)) {
                    _fun56143_ip = 26;
                    continue _fun56143
                }
            case 24:
                var1 = false;
            case 26:
                var7 = var0.size;
                if (!(var7 === var6)) {
                    _fun56143_ip = 38;
                    continue _fun56143
                }
            case 35:
                var7 = 48;
            case 38:
                var4 = null;
                if (!(var4 == var3)) {
                    _fun56143_ip = 46;
                    continue _fun56143
                }
            case 44:
                return var6;
            case 46:
                var5 = var3.animated;
                var0 = var5;
                if (!(var4 == var5)) {
                    _fun56143_ip = 122;
                    continue _fun56143
                }
            case 59:
                var2 = var3.id;
                var0 = var5;
                if (!(var4 != var2)) {
                    _fun56143_ip = 122;
                    continue _fun56143
                }
            case 71:
                var8 = _closure1_slot4;
                var5 = var8.getCustomEmojiById;
                var2 = var3.id;
                var2 = var5.bind(var8)(var2);
                var8 = var4 == var2;
                var5 = undefined;
                if (var8) {
                    _fun56143_ip = 109;
                    continue _fun56143
                }
            case 103:
                var5 = var2.animated;
            case 109:
                var2 = var4 != var5;
                if (!var2) {
                    _fun56143_ip = 119;
                    continue _fun56143
                }
            case 116:
                var2 = var5;
            case 119:
                var0 = var2;
            case 122:
                if (!var1) {
                    _fun56143_ip = 129;
                    continue _fun56143
                }
            case 125:
                var1 = var4 != var0;
            case 129:
                if (!var1) {
                    _fun56143_ip = 135;
                    continue _fun56143
                }
            case 132:
                var1 = var0;
            case 135:
                var0 = {};
                var2 = var3.id;
                var5 = var4 == var2;
                var2 = null;
                if (var5) {
                    _fun56143_ip = 178;
                    continue _fun56143
                }
            case 151:
                var9 = var3.id;
                var5 = global;
                var5 = var5.HermesInternal;
                var8 = var5.concat;
                var5 = '';
                var2 = var8.bind(var5)(var9);
            case 178:
                var0.id = var2;
                var2 = var3.name;
                var0.name = var2;
                var2 = var3.id;
                if (!(var4 != var2)) {
                    _fun56143_ip = 207;
                    continue _fun56143
                }
            case 200:
                var2 = var3.name;
                _fun56143_ip = 246;
                continue _fun56143;
            case 207:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var9 = var8.bind(var6)(var5);
                var8 = var9.convertSurrogateToName;
                var5 = var3.name;
                var2 = var8.bind(var9)(var5);
            case 246:
                var0.displayName = var2;
                var2 = var3.id;
                if (!(var4 != var2)) {
                    _fun56143_ip = 315;
                    continue _fun56143
                }
            case 259:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var5 = var4.bind(var6)(var2);
                var4 = var5.getEmojiURL;
                var2 = {};
                var8 = var3.id;
                var2.id = var8;
                var2.animated = var1;
                var2.size = var7;
                var2 = var4.bind(var5)(var2);
                _fun56143_ip = 354;
                continue _fun56143;
            case 315:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.getURL;
                var3 = var3.name;
                var2 = var4.bind(var5)(var3);
            case 354:
                var0.src = var2;
                var0.animated = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var3 = function arg0() {
        _fun56144: for (var _fun56144_ip = 0;;) switch (_fun56144_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.poll;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun56144_ip = 51;
                    continue _fun56144
                }
            case 18:
                var5 = _closure1_slot7;
                var4 = var5.getMessage;
                var3 = var2.channel_id;
                var1 = var2.id;
                var1 = var4.bind(var5)(var3, var1);
                var0 = var1 === var2;
            case 51:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var1 = function arg0, arg1() {
        _fun56145: for (var _fun56145_ip = 0;;) switch (_fun56145_ip) {
            case 0:
                var21 = arg0;
                var1 = arg1;
                var0 = arguments[2];
                var19 = undefined;
                if (!(var0 === var19)) {
                    _fun56145_ip = 17;
                    continue _fun56145
                }
            case 15:
                var0 = {};
            case 17:
                var2 = var0.formattedExpirationLabel;
                var17 = var21.poll;
                var18 = null;
                if (!(var18 == var17)) {
                    _fun56145_ip = 37;
                    continue _fun56145
                }
            case 35:
                return var19;
            case 37:
                var4 = var21.state;
                var3 = _closure1_slot10;
                var3 = var3.SENT;
                var6 = var4 === var3;
                var13 = '';
                if (!var6) {
                    _fun56145_ip = 110;
                    continue _fun56145
                }
            case 66:
                if (!(var18 == var2)) {
                    _fun56145_ip = 107;
                    continue _fun56145
                }
            case 70:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var3 = var5[var3];
                var5 = var4.bind(var19)(var3);
                var4 = var5.formatExpirationLabel;
                var3 = var17.expiry;
                var2 = var4.bind(var5)(var3);
            case 107:
                var13 = var2;
            case 110:
                var8 = var18 == var13;
                if (!var8) {
                    _fun56145_ip = 120;
                    continue _fun56145
                }
            case 117:
                var8 = var6;
            case 120:
                if (!(var18 == var1)) {
                    _fun56145_ip = 149;
                    continue _fun56145
                }
            case 124:
                var4 = _closure1_slot9;
                var2 = var21.getChannelId;
                var3 = var2.bind(var21)();
                var2 = var21.id;
                var1 = var4.bind(var19)(var3, var2);
            case 149:
                if (!(var18 == var1)) {
                    _fun56145_ip = 157;
                    continue _fun56145
                }
            case 153:
                var1 = _closure1_slot11;
            case 157:
                var4 = var1.selectedAnswerIds;
                var3 = var1.submitting;
                var9 = var1.editing;
                var1 = var1.showResults;
                var10 = var21.reactions;
                var2 = _closure1_slot16;
                var5 = var2.bind(var19)(var21);
                var2 = var10;
                var7 = true;
                if (var5) {
                    _fun56145_ip = 274;
                    continue _fun56145
                }
            case 204:
                var14 = _closure1_slot7;
                var12 = var14.getMessage;
                var11 = var21.channel_id;
                var5 = var21.id;
                var12 = var12.bind(var14)(var11, var5);
                var5 = var21.isSearchHit;
                var5 = !var5;
                if (!var5) {
                    _fun56145_ip = 246;
                    continue _fun56145
                }
            case 242:
                var5 = var18 != var12;
            case 246:
                var14 = var18 == var12;
                var11 = undefined;
                if (var14) {
                    _fun56145_ip = 261;
                    continue _fun56145
                }
            case 255:
                var11 = var12.reactions;
            case 261:
                if (!(var18 != var11)) {
                    _fun56145_ip = 268;
                    continue _fun56145
                }
            case 265:
                var10 = var11;
            case 268:
                var2 = var10;
                var7 = var5;
            case 274:
                var10 = var4.size;
                var5 = 0;
                var12 = var10 > var5;
                var10 = var2.some;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var1 = var0.me_vote;
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
                };
                var10 = var10.bind(var2)(var5);
                var11 = !var9;
                var5 = var2;
                if (!var11) {
                    _fun56145_ip = 315;
                    continue _fun56145
                }
            case 312:
                var11 = var10;
            case 315:
                var2 = var11;
                if (var11) {
                    _fun56145_ip = 324;
                    continue _fun56145
                }
            case 321:
                var2 = var8;
            case 324:
                if (var2) {
                    _fun56145_ip = 330;
                    continue _fun56145
                }
            case 327:
                var2 = var1;
            case 330:
                var14 = var6;
                if (!var6) {
                    _fun56145_ip = 339;
                    continue _fun56145
                }
            case 336:
                var14 = var7;
            case 339:
                if (!var14) {
                    _fun56145_ip = 360;
                    continue _fun56145
                }
            case 342:
                var15 = !var10;
                if (var15) {
                    _fun56145_ip = 351;
                    continue _fun56145
                }
            case 348:
                var15 = var9;
            case 351:
                if (var15) {
                    _fun56145_ip = 357;
                    continue _fun56145
                }
            case 354:
                var15 = var2;
            case 357:
                var14 = var15;
            case 360:
                var20 = _closure1_slot5;
                var16 = var20.getChannel;
                var15 = var21.getChannelId;
                var15 = var15.bind(var21)();
                var16 = var16.bind(var20)(var15);
                var15 = var18 == var16;
                var20 = undefined;
                if (var15) {
                    _fun56145_ip = 418;
                    continue _fun56145
                }
            case 393:
                var15 = var16.getGuildId;
                var15 = var18 == var15;
                var20 = undefined;
                if (var15) {
                    _fun56145_ip = 418;
                    continue _fun56145
                }
            case 408:
                var15 = var16.getGuildId;
                var20 = var15.bind(var16)();
            case 418:
                var15 = var18 != var20;
                var18 = null;
                if (!var15) {
                    _fun56145_ip = 442;
                    continue _fun56145
                }
            case 427:
                var16 = _closure1_slot6;
                var15 = var16.getSelfMember;
                var18 = var15.bind(var16)(var20);
            case 442:
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 13;
                var0 = var20[var0];
                var16 = var15.bind(var19)(var0);
                var0 = var16.hasAutomodQuarantinedProfile;
                var16 = var0.bind(var16)(var18);
                var0 = 14;
                var0 = var20[var0];
                var15 = var15.bind(var19)(var0);
                var0 = var15.isMemberCommunicationDisabled;
                var15 = var0.bind(var15)(var18);
                var0 = {};
                var0.poll = var17;
                var0.canTapAnswers = var14;
                var14 = var11;
                if (!var14) {
                    _fun56145_ip = 517;
                    continue _fun56145
                }
            case 514:
                var14 = var6;
            case 517:
                if (!var14) {
                    _fun56145_ip = 523;
                    continue _fun56145
                }
            case 520:
                var14 = !var8;
            case 523:
                var0.canRemoveVote = var14;
                var0.canShowVoteCounts = var2;
                var14 = !var3;
                if (!var14) {
                    _fun56145_ip = 542;
                    continue _fun56145
                }
            case 539:
                var14 = var12;
            case 542:
                if (!var14) {
                    _fun56145_ip = 548;
                    continue _fun56145
                }
            case 545:
                var14 = !var11;
            case 548:
                if (!var14) {
                    _fun56145_ip = 554;
                    continue _fun56145
                }
            case 551:
                var14 = var6;
            case 554:
                if (!var14) {
                    _fun56145_ip = 560;
                    continue _fun56145
                }
            case 557:
                var14 = !var16;
            case 560:
                if (!var14) {
                    _fun56145_ip = 566;
                    continue _fun56145
                }
            case 563:
                var14 = !var15;
            case 566:
                var0.canSubmitVote = var14;
                var0.expirationLabel = var13;
                var0.hasSelectedAnswer = var12;
                var0.hasVoted = var11;
                var0.hasVoteRecorded = var10;
                var0.isEditingVote = var9;
                var0.isExpired = var8;
                var0.isInteractive = var7;
                var0.isSent = var6;
                var0.reactions = var5;
                var0.selectedAnswerIds = var4;
                var0.submitting = var3;
                var0.tapShouldOpenVotersModal = var2;
                var0.showResults = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var9 = global;
    var12 = var9.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.getPollState;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.EMPTY_STRING_SNOWFLAKE_ID;
    var6 = var6.MessageStates;
    var _closure1_slot10 = var6;
    var6 = {
        'channelId': null,
        'selectedAnswerIds': null,
        'submitting': false,
        'editing': false,
        'showResults': false
    };
    var6.channelId = var10;
    var9 = var9.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var6.selectedAnswerIds = var9;
    var _closure1_slot11 = var6;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/polls/chat/formatPollMessageChatData.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function arg0, arg1() {
        _fun56147: for (var _fun56147_ip = 0;;) switch (_fun56147_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[2];
                var14 = undefined;
                if (!(var0 === var14)) {
                    _fun56147_ip = 16;
                    continue _fun56147
                }
            case 14:
                var0 = {};
            case 16:
                var1 = var0.animateEmoji;
                if (!(var1 === var14)) {
                    _fun56147_ip = 28;
                    continue _fun56147
                }
            case 26:
                var1 = false;
            case 28:
                var _closure2_slot0 = var1;
                var16 = var0.theme;
                if (!(var16 === var14)) {
                    _fun56147_ip = 46;
                    continue _fun56147
                }
            case 42:
                var16 = 'dark';
            case 46:
                var0 = var0.formattedExpirationLabel;
                var _closure2_slot1 = var14;
                var _closure2_slot2 = var14;
                var _closure2_slot3 = var14;
                var _closure2_slot4 = var14;
                var _closure2_slot5 = var14;
                var _closure2_slot6 = var14;
                var _closure2_slot7 = var14;
                var _closure2_slot8 = var14;
                var _closure2_slot9 = var14;
                var _closure2_slot10 = var14;
                var _closure2_slot11 = var14;
                var _closure2_slot12 = var14;
                var _closure2_slot13 = var14;
                var _closure2_slot14 = var14;
                var _closure2_slot15 = var14;
                var26 = var5.poll;
                var1 = null;
                if (!(var1 != var26)) {
                    _fun56147_ip = 295;
                    continue _fun56147
                }
            case 127:
                var3 = _closure1_slot8;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                if (!(var1 != var6)) {
                    _fun56147_ip = 295;
                    continue _fun56147
                }
            case 150:
                var2 = _closure1_slot3;
                var2 = var2.useReducedMotion;
                _closure2_slot1 = var2;
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var2 = var5.getChannelId;
                var2 = var2.bind(var5)();
                var3 = var3.bind(var4)(var2);
                var2 = var1 == var3;
                var4 = undefined;
                if (var2) {
                    _fun56147_ip = 222;
                    continue _fun56147
                }
            case 197:
                var2 = var3.getGuildId;
                var2 = var1 == var2;
                var4 = undefined;
                if (var2) {
                    _fun56147_ip = 222;
                    continue _fun56147
                }
            case 212:
                var2 = var3.getGuildId;
                var4 = var2.bind(var3)();
            case 222:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 15;
                var2 = var7[var2];
                var3 = var3.bind(var14)(var2);
                var2 = var3.getAvatarUrl;
                var3 = var2.bind(var3)(var6, var4);
                var17 = var26.answers;
                var15 = var26.layout_type;
                _closure2_slot2 = var15;
                var4 = _closure1_slot17;
                var2 = {};
                var2.formattedExpirationLabel = var0;
                var0 = arg1;
                var0 = var4.bind(var14)(var5, var0, var2);
                if (!(var1 == var0)) {
                    _fun56147_ip = 297;
                    continue _fun56147
                }
            case 295:
                return var14;
            case 297:
                var9 = var0.canTapAnswers;
                var19 = var0.canRemoveVote;
                var6 = var0.canShowVoteCounts;
                var21 = var0.canSubmitVote;
                _closure2_slot3 = var21;
                var1 = var0.expirationLabel;
                if (!(var14 === var1)) {
                    _fun56147_ip = 392;
                    continue _fun56147
                }
            case 335:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 16;
                var4 = var8[var2];
                var4 = var7.bind(var14)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var8[var2];
                var2 = var7.bind(var14)(var2);
                var2 = var2.t;
                var2 = var2["e+J3JZ"];
                var1 = var4.bind(var5)(var2);
            case 392:
                _closure2_slot4 = var1;
                var7 = var0.hasSelectedAnswer;
                _closure2_slot5 = var7;
                var5 = var0.hasVoted;
                _closure2_slot6 = var5;
                var20 = var0.isEditingVote;
                var4 = var0.isExpired;
                _closure2_slot7 = var4;
                var10 = var0.isInteractive;
                var22 = var0.reactions;
                _closure2_slot8 = var22;
                var1 = var0.selectedAnswerIds;
                _closure2_slot9 = var1;
                var1 = var0.submitting;
                _closure2_slot10 = var1;
                var18 = var0.tapShouldOpenVotersModal;
                var0 = var0.showResults;
                _closure2_slot11 = var0;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var11 = var2.bind(var14)(var1);
                var1 = var11.getTotalVotes;
                var24 = var1.bind(var11)(var22);
                _closure2_slot12 = var24;
                var27 = 16;
                var1 = var8[var27];
                var1 = var2.bind(var14)(var1);
                var23 = var1.intl;
                var22 = var23.formatToPlainString;
                var1 = var8[var27];
                var1 = var2.bind(var14)(var1);
                var1 = var1.t;
                var11 = var1.XRkuof;
                var1 = {};
                var1.count = var24;
                var1 = var22.bind(var23)(var11, var1);
                _closure2_slot13 = var1;
                var1 = global;
                var22 = var1.Math;
                var11 = var22.max;
                var23 = var17.map;
                var1 = function(arg0) { // Environment: var13
                    _fun56148: for (var _fun56148_ip = 0;;) switch (_fun56148_ip) {
                        case 0:
                            var2 = _closure1_slot14;
                            var1 = _closure2_slot8;
                            var0 = arg0;
                            var4 = var0.answer_id;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var0 = '';
                            var0 = var3.bind(var0)(var4);
                            var4 = undefined;
                            var2 = var2.bind(var4)(var1, var0);
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun56148_ip = 85;
                                continue _fun56148
                            }
                        case 64:
                            var2 = var2.count_details;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun56148_ip = 85;
                                continue _fun56148
                            }
                        case 79:
                            var1 = var2.vote;
                        case 85:
                            var2 = var0 != var1;
                            var0 = 0;
                            if (!var2) {
                                _fun56148_ip = 97;
                                continue _fun56148
                            }
                        case 94:
                            var0 = var1;
                        case 97:
                            return var0;
                    }
                };
                var30 = var23.bind(var17)(var1);
                var1 = new Array(0);
                var29 = 0;
                var31 = var1;
                var23 = arraySpread(var31, var30, var29);
                var31 = var11;
                var30 = var1;
                var29 = var22;
                var1 = apply(var31, var30, var29);
                _closure2_slot14 = var1;
                var11 = var17.map;
                var1 = function(arg0) { // Environment: var13
                    _fun56149: for (var _fun56149_ip = 0;;) switch (_fun56149_ip) {
                        case 0:
                            var13 = arg0;
                            var4 = var13.answer_id;
                            var3 = global;
                            var0 = var3.HermesInternal;
                            var2 = var0.concat;
                            var0 = '';
                            var12 = var2.bind(var0)(var4);
                            var4 = _closure1_slot14;
                            var0 = _closure2_slot8;
                            var6 = undefined;
                            var14 = var4.bind(var6)(var0, var12);
                            var7 = null;
                            var0 = var7 == var14;
                            var8 = undefined;
                            if (var0) {
                                _fun56149_ip = 87;
                                continue _fun56149
                            }
                        case 66:
                            var0 = var14.count_details;
                            var4 = var7 == var0;
                            var8 = undefined;
                            if (var4) {
                                _fun56149_ip = 87;
                                continue _fun56149
                            }
                        case 81:
                            var8 = var0.vote;
                        case 87:
                            var9 = var7 != var8;
                            var4 = 0;
                            var0 = 0;
                            if (!var9) {
                                _fun56149_ip = 101;
                                continue _fun56149
                            }
                        case 98:
                            var0 = var8;
                        case 101:
                            var _closure3_slot0 = var0;
                            var8 = _closure2_slot12;
                            var9 = 0;
                            if (!(var9 !== var8)) {
                                _fun56149_ip = 123;
                                continue _fun56149
                            }
                        case 115:
                            var8 = _closure2_slot12;
                            var9 = var0 / var8;
                        case 123:
                            var10 = _closure2_slot9;
                            var8 = var10.has;
                            var10 = var8.bind(var10)(var12);
                            var8 = _closure2_slot14;
                            var11 = var0 >= var8;
                            if (!var11) {
                                _fun56149_ip = 152;
                                continue _fun56149
                            }
                        case 148:
                            var11 = var4 !== var0;
                        case 152:
                            var8 = _closure2_slot6;
                            var0 = undefined;
                            if (!var8) {
                                _fun56149_ip = 183;
                                continue _fun56149
                            }
                        case 161:
                            var15 = var7 == var14;
                            var4 = undefined;
                            if (var15) {
                                _fun56149_ip = 176;
                                continue _fun56149
                            }
                        case 170:
                            var4 = var14.me_vote;
                        case 176:
                            var8 = var7 != var4;
                            var0 = var4;
                        case 183:
                            if (!var8) {
                                _fun56149_ip = 189;
                                continue _fun56149
                            }
                        case 186:
                            var8 = var0;
                        case 189:
                            var14 = {};
                            var14.didSelfVote = var8;
                            var0 = _closure2_slot6;
                            var14.hasVoted = var0;
                            var0 = _closure2_slot7;
                            var14.isExpired = var0;
                            var14.isSelected = var10;
                            var14.isLeader = var11;
                            var0 = _closure2_slot11;
                            var14.showResults = var0;
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 8;
                            var0 = var0[var4];
                            var7 = var7.bind(var6)(var0);
                            var0 = var7.match;
                            var16 = var0.bind(var7)(var14);
                            var15 = var16.with;
                            var0 = true;
                            var14 = {
                                'isExpired': true,
                                'isLeader': true,
                                'didSelfVote': true
                            };
                            var7 = function() { // Environment: var1
                                var0 = 'victorSelected';
                                return var0;
                            };
                            var16 = var15.bind(var16)(var14, var7);
                            var15 = var16.with;
                            var14 = {
                                'isExpired': true,
                                'isLeader': true,
                                'didSelfVote': false
                            };
                            var7 = function() { // Environment: var1
                                var0 = 'victorNotSelected';
                                return var0;
                            };
                            var16 = var15.bind(var16)(var14, var7);
                            var15 = var16.with;
                            var14 = {
                                'isExpired': true,
                                'didSelfVote': true
                            };
                            var7 = function() { // Environment: var1
                                var0 = 'loserSelected';
                                return var0;
                            };
                            var16 = var15.bind(var16)(var14, var7);
                            var15 = var16.with;
                            var14 = {};
                            var14.isExpired = var0;
                            var7 = function() { // Environment: var1
                                var0 = 'notVoted';
                                return var0;
                            };
                            var16 = var15.bind(var16)(var14, var7);
                            var15 = var16.with;
                            var14 = {
                                'didSelfVote': true,
                                'isExpired': false
                            };
                            var7 = function() { // Environment: var1
                                var0 = 'voted';
                                return var0;
                            };
                            var16 = var15.bind(var16)(var14, var7);
                            var15 = var16.with;
                            var14 = {
                                'hasVoted': true,
                                'isExpired': false
                            };
                            var7 = function() { // Environment: var1
                                var0 = 'notVoted';
                                return var0;
                            };
                            var15 = var15.bind(var16)(var14, var7);
                            var14 = var15.with;
                            var7 = {};
                            var7.isSelected = var0;
                            var0 = function() { // Environment: var1
                                var0 = 'selected';
                                return var0;
                            };
                            var15 = var14.bind(var15)(var7, var0);
                            var14 = var15.with;
                            var7 = {
                                'isExpired': false,
                                'showResults': true
                            };
                            var0 = function() { // Environment: var1
                                var0 = 'notVoted';
                                return var0;
                            };
                            var14 = var14.bind(var15)(var7, var0);
                            var7 = var14.otherwise;
                            var0 = function() { // Environment: var1
                                var0 = 'normalVote';
                                return var0;
                            };
                            var7 = var7.bind(var14)(var0);
                            var0 = {};
                            var0.answerId = var12;
                            var12 = {};
                            var14 = var13.poll_media;
                            var14 = var14.text;
                            var12.text = var14;
                            var16 = _closure1_slot15;
                            var14 = var13.poll_media;
                            var15 = var14.emoji;
                            var14 = {};
                            var17 = _closure2_slot0;
                            var14.animateEmoji = var17;
                            var14 = var16.bind(var6)(var15, var14);
                            var12.emoji = var14;
                            var14 = var13.poll_media;
                            var14 = var14.sticker_id;
                            var12.stickerId = var14;
                            var13 = var13.poll_media;
                            var13 = var13.attachment_ids;
                            var12.attachmentIds = var13;
                            var0.pollMedia = var12;
                            var0.isSelected = var10;
                            var10 = _closure2_slot7;
                            if (!var10) {
                                _fun56149_ip = 626;
                                continue _fun56149
                            }
                        case 623:
                            var10 = var11;
                        case 626:
                            var0.isVictor = var10;
                            var0.didSelfVote = var8;
                            var0.style = var7;
                            var7 = _closure2_slot10;
                            if (!var7) {
                                _fun56149_ip = 656;
                                continue _fun56149
                            }
                        case 649:
                            var8 = _closure2_slot1;
                            var7 = !var8;
                        case 656:
                            var0.shouldAnimateTransition = var7;
                            var8 = var3.Math;
                            var7 = var8.round;
                            var3 = 100;
                            var3 = var3 * var9;
                            var3 = var7.bind(var8)(var3);
                            var0.votesPercentage = var3;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = var7[var4];
                            var5 = var3.bind(var6)(var4);
                            var4 = var5.match;
                            var2 = _closure2_slot2;
                            var5 = var4.bind(var5)(var2);
                            var4 = var5.with;
                            var2 = 18;
                            var2 = var7[var2];
                            var2 = var3.bind(var6)(var2);
                            var2 = var2.PollLayoutTypes;
                            var3 = var2.IMAGE_ONLY_ANSWERS;
                            var2 = function() { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = var1.toLocaleString;
                                var3 = var0.bind(var1)();
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var2 = var0.concat;
                                var1 = '(';
                                var0 = ')';
                                var0 = var2.bind(var1)(var3, var0);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3, var2);
                            var2 = var3.otherwise;
                            var1 = function() { // Environment: var1
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 16;
                                var2 = var5[var0];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var3 = var2.intl;
                                var2 = var3.formatToPlainString;
                                var0 = var5[var0];
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.t;
                                var1 = var0.XRkuof;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var0.count = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.votes = var1;
                            return var0;
                    }
                };
                var24 = var11.bind(var17)(var1);
                var23 = 8;
                var1 = var8[var23];
                var17 = var2.bind(var14)(var1);
                var11 = var17.match;
                var1 = {};
                var1.isExpired = var4;
                var1.canSubmitVote = var21;
                var1.hasVoted = var5;
                var1.isEditingVote = var20;
                var1.canRemoveVote = var19;
                var1.isInteractive = var10;
                var1.showResults = var0;
                var21 = var11.bind(var17)(var1);
                var17 = var21.with;
                var11 = {};
                var19 = false;
                var11.isInteractive = var19;
                var1 = function() { // Environment: var13
                    var0 = undefined;
                    return var0;
                };
                var21 = var17.bind(var21)(var11, var1);
                var17 = var21.with;
                var11 = {};
                var22 = true;
                var11.isExpired = var22;
                var1 = function() { // Environment: var13
                    var0 = undefined;
                    return var0;
                };
                var21 = var17.bind(var21)(var11, var1);
                var17 = var21.with;
                var11 = {};
                var11.isEditingVote = var22;
                var1 = function() { // Environment: var13
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.JwkNU4;
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    var1 = 'button';
                    var0.presentation = var1;
                    var1 = _closure2_slot5;
                    var0.enabled = var1;
                    var1 = 'submit';
                    var0.type = var1;
                    return var0;
                };
                var21 = var17.bind(var21)(var11, var1);
                var17 = var21.with;
                var11 = {};
                var11.canRemoveVote = var22;
                var1 = function() { // Environment: var13
                    var0 = {
                        'label': null,
                        'presentation': 'secondaryButton',
                        'enabled': true,
                        'type': 'remove'
                    };
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.XhQEh8;
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    return var0;
                };
                var21 = var17.bind(var21)(var11, var1);
                var17 = var21.with;
                var11 = {
                    'hasVoted': false,
                    'showResults': true
                };
                var1 = function() { // Environment: var13
                    var0 = {
                        'label': null,
                        'presentation': 'secondaryButton',
                        'enabled': true,
                        'type': 'showVotes'
                    };
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.gNj6In;
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    return var0;
                };
                var17 = var17.bind(var21)(var11, var1);
                var11 = var17.otherwise;
                var1 = function() { // Environment: var13
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.JwkNU4;
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    var1 = 'button';
                    var0.presentation = var1;
                    var1 = _closure2_slot3;
                    var0.enabled = var1;
                    var1 = 'submit';
                    var0.type = var1;
                    return var0;
                };
                var11 = var11.bind(var17)(var1);
                var1 = 19;
                var1 = var8[var1];
                var2 = var2.bind(var14)(var1);
                var1 = var2.isIOS;
                var17 = var1.bind(var2)();
                var21 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var27];
                var2 = var21.bind(var14)(var2);
                var8 = var2.intl;
                var2 = var8.string;
                var1 = var1[var27];
                var1 = var21.bind(var14)(var1);
                var1 = var1.t;
                if (var17) {
                    _fun56147_ip = 939;
                    continue _fun56147
                }
            case 924:
                var17 = var1.cHfFql;
                var17 = var2.bind(var8)(var17);
                _fun56147_ip = 952;
                continue _fun56147;
            case 939:
                var1 = var1["PVATM/"];
                var17 = var2.bind(var8)(var1);
            case 952:
                _closure2_slot15 = var17;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var23];
                var8 = var2.bind(var14)(var1);
                var2 = var8.match;
                var1 = {};
                var1.isExpired = var4;
                var1.isInteractive = var10;
                var1.isEditingVote = var20;
                var20 = var2.bind(var8)(var1);
                var8 = var20.with;
                var2 = {
                    'isInteractive': false,
                    'isExpired': false
                };
                var1 = function() { // Environment: var13
                    var0 = {
                        'label': null,
                        'presentation': 'text',
                        'enabled': false
                    };
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.trrip0;
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    return var0;
                };
                var20 = var8.bind(var20)(var2, var1);
                var8 = var20.with;
                var2 = {};
                var2.isEditingVote = var22;
                var1 = function() { // Environment: var13
                    var0 = {
                        'label': null,
                        'presentation': 'textButton',
                        'enabled': true,
                        'type': 'cancel'
                    };
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["ETE/oC"];
                    var1 = var2.bind(var3)(var1);
                    var0.label = var1;
                    return var0;
                };
                var8 = var8.bind(var20)(var2, var1);
                var2 = var8.otherwise;
                var1 = function() { // Environment: var13
                    var0 = {
                        'label': null,
                        'secondaryLabel': null,
                        'accessibilityHint': null,
                        'presentation': 'text',
                        'enabled': true,
                        'type': 'showVoterDetails'
                    };
                    var2 = _closure2_slot13;
                    var0.label = var2;
                    var2 = _closure2_slot4;
                    var0.secondaryLabel = var2;
                    var1 = _closure2_slot15;
                    var0.accessibilityHint = var1;
                    return var0;
                };
                var2 = var2.bind(var8)(var1);
                var1 = undefined;
                if (!var10) {
                    _fun56147_ip = 1169;
                    continue _fun56147
                }
            case 1077:
                var1 = undefined;
                if (var4) {
                    _fun56147_ip = 1169;
                    continue _fun56147
                }
            case 1082:
                var1 = undefined;
                if (var5) {
                    _fun56147_ip = 1169;
                    continue _fun56147
                }
            case 1087:
                var1 = undefined;
                if (var0) {
                    _fun56147_ip = 1169;
                    continue _fun56147
                }
            case 1092:
                var0 = {
                    'label': null,
                    'presentation': 'textButton',
                    'enabled': true,
                    'type': 'showVotes'
                };
                var25 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = var8[var27];
                var20 = var25.bind(var14)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var8 = var8[var27];
                var8 = var25.bind(var14)(var8);
                var8 = var8.t;
                var8 = var8["/KHAUF"];
                var8 = var20.bind(var21)(var8);
                var0.label = var8;
                var1 = var0;
            case 1169:
                var8 = var26.allow_multiselect;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = var20[var23];
                var27 = var21.bind(var14)(var0);
                var25 = var27.match;
                var0 = {};
                var0.isInteractive = var10;
                var0.isExpired = var4;
                var0.canSelectMultipleAnswers = var8;
                var28 = var25.bind(var27)(var0);
                var27 = var28.with;
                var25 = {};
                var25.isInteractive = var19;
                var0 = function() { // Environment: var13
                    var0 = undefined;
                    return var0;
                };
                var28 = var27.bind(var28)(var25, var0);
                var27 = var28.with;
                var25 = {};
                var25.isExpired = var22;
                var0 = function() { // Environment: var13
                    var0 = undefined;
                    return var0;
                };
                var28 = var27.bind(var28)(var25, var0);
                var27 = var28.with;
                var25 = {};
                var25.canSelectMultipleAnswers = var22;
                var0 = function() { // Environment: var13
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 16;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.yCXvxa;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var27 = var27.bind(var28)(var25, var0);
                var25 = var27.otherwise;
                var0 = function() { // Environment: var13
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 16;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["9Y2wKO"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var25 = var25.bind(var27)(var0);
                var0 = {};
                var26 = var26.question;
                var0.question = var26;
                var0.promptLabel = var25;
                var0.answers = var24;
                var20 = var20[var23];
                var23 = var21.bind(var14)(var20);
                var21 = var23.match;
                var20 = {};
                var20.tapShouldOpenVotersModal = var18;
                var20.canTapAnswers = var9;
                var20.canSelectMultipleAnswers = var8;
                var24 = var21.bind(var23)(var20);
                var23 = var24.with;
                var21 = {};
                var21.tapShouldOpenVotersModal = var22;
                var20 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PollChatAnswerInteractionType;
                    var0 = var0.LIST;
                    return var0;
                };
                var24 = var23.bind(var24)(var21, var20);
                var23 = var24.with;
                var21 = {};
                var21.canTapAnswers = var19;
                var20 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PollChatAnswerInteractionType;
                    var0 = var0.LIST;
                    return var0;
                };
                var23 = var23.bind(var24)(var21, var20);
                var21 = var23.with;
                var20 = {};
                var20.canSelectMultipleAnswers = var19;
                var19 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PollChatAnswerInteractionType;
                    var0 = var0.RADIO_BUTTONS;
                    return var0;
                };
                var21 = var21.bind(var23)(var20, var19);
                var20 = var21.with;
                var19 = {};
                var19.canSelectMultipleAnswers = var22;
                var13 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.PollChatAnswerInteractionType;
                    var0 = var0.CHECKBOXES;
                    return var0;
                };
                var19 = var20.bind(var21)(var19, var13);
                var13 = var19.exhaustive;
                var13 = var13.bind(var19)();
                var0.answersInteraction = var13;
                var13 = undefined;
                if (!var18) {
                    _fun56147_ip = 1491;
                    continue _fun56147
                }
            case 1488:
                var13 = var17;
            case 1491:
                var0.answerTapAccessibilityLabel = var13;
                var0.layoutType = var15;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 21;
                var12 = var17[var12];
                var13 = var13.bind(var14)(var12);
                var12 = {};
                var12.theme = var16;
                var12.layoutType = var15;
                var12 = var13.bind(var14)(var12);
                var0.resources = var12;
                var12 = 'normal';
                var0.containerStyle = var12;
                var0.primaryAction = var11;
                var0.isInteractive = var10;
                var0.canTapAnswers = var9;
                var0.canSelectMultipleAnswers = var8;
                var0.hasSelectedAnswer = var7;
                var0.canShowVoteCounts = var6;
                var0.hasVoted = var5;
                var0.isExpired = var4;
                var0.myAvatarUrl = var3;
                var0.secondaryAction = var2;
                var0.tertiaryAction = var1;
                return var0;
        }
    };
    var2.default = var5;
    var2.reactionForId = var4;
    var2.isPollMessageDirectlyInteractive = var3;
    var2.computeBasicPollChatData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 4732, 1372, 1672, 4245, 1613, 6796, 660, 3450, 3095, 3099, 1417, 6797, 3088, 3071, 6798, 1234, 6546, 6800, 478, 6801, 6802, 2]);