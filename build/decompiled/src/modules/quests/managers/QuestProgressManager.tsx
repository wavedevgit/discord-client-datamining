// modules/quests/managers/QuestProgressManager.tsx
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
        _fun118732: for (var _fun118732_ip = 0;;) switch (_fun118732_ip) {
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
                _fun118732_ip = 76;
                continue _fun118732;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun118735: for (var _fun118735_ip = 0;;) switch (_fun118735_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118735_ip = 46;
                    continue _fun118735
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun118735_ip = 55;
                    continue _fun118735
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun118735_ip = 345;
                    continue _fun118735
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118735_ip = 323;
                    continue _fun118735
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118735_ip = 283;
                    continue _fun118735
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118735_ip = 270;
                    continue _fun118735
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
                    _fun118735_ip = 163;
                    continue _fun118735
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun118735_ip = 179;
                    continue _fun118735
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118735_ip = 249;
                    continue _fun118735
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118735_ip = 249;
                    continue _fun118735
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118735_ip = 234;
                    continue _fun118735
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118735_ip = 247;
                    continue _fun118735
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun118735_ip = 265;
                continue _fun118735;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun118735_ip = 283;
                continue _fun118735;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun118735_ip = 323;
                    continue _fun118735
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
                    _fun118735_ip = 330;
                    continue _fun118735
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118736: for (var _fun118736_ip = 0;;) switch (_fun118736_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118736_ip = 56;
                                continue _fun118736
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
                            _fun118736_ip = 67;
                            continue _fun118736;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun118737: for (var _fun118737_ip = 0;;) switch (_fun118737_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118737_ip = 23;
                    continue _fun118737
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118737_ip = 33;
                    continue _fun118737
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
                    _fun118737_ip = 70;
                    continue _fun118737
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118737_ip = 55;
                    continue _fun118737
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun118738: for (var _fun118738_ip = 0;;) switch (_fun118738_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isQuestExpired;
                var0 = var0.bind(var2)(var1);
                var0 = !var0;
                if (!var0) {
                    _fun118738_ip = 57;
                    continue _fun118738
                }
            case 45:
                var3 = var1.userStatus;
                var2 = null;
                var0 = var2 != var3;
            case 57:
                if (!var0) {
                    _fun118738_ip = 78;
                    continue _fun118738
                }
            case 60:
                var2 = var1.userStatus;
                var3 = var2.enrolledAt;
                var2 = null;
                var0 = var2 != var3;
            case 78:
                if (!var0) {
                    _fun118738_ip = 99;
                    continue _fun118738
                }
            case 81:
                var1 = var1.userStatus;
                var2 = var1.completedAt;
                var1 = null;
                var0 = var1 == var2;
            case 99:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun118739: for (var _fun118739_ip = 0;;) switch (_fun118739_ip) {
            case 0:
                var1 = _closure1_slot14;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var7 = var0.autoEnroll;
                var0 = _closure1_slot13;
                var6 = var0.quests;
                var3 = _closure1_slot20;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var1);
                var4 = var5.getEligibleQuestsForApplicationId;
                var1 = arg0;
                var1 = var4.bind(var5)(var6, var1);
                var6 = var3.bind(var0)(var1);
                var3 = var6.bind(var0)();
                var1 = var3.done;
                var5 = 18;
                var4 = var3;
                if (var1) {
                    _fun118739_ip = 308;
                    continue _fun118739
                }
            case 100:
                var1 = var4.value;
                if (!var7) {
                    _fun118739_ip = 161;
                    continue _fun118739
                }
            case 108:
                var3 = var1.config;
                var9 = var3.features;
                var8 = var9.includes;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var10.bind(var0)(var3);
                var3 = var3.QuestVariants;
                var3 = var3.MOBILE_ACTIVITY_QUEST;
                var3 = var8.bind(var9)(var3);
                if (var3) {
                    _fun118739_ip = 181;
                    continue _fun118739
                }
            case 161:
                var8 = var6.bind(var0)();
                var3 = var8.done;
                var4 = var8;
                if (var3) {
                    _fun118739_ip = 308;
                    continue _fun118739
                }
            case 179:
                _fun118739_ip = 100;
                continue _fun118739;
            case 181:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 19;
                var2 = var7[var2];
                var4 = var6.bind(var0)(var2);
                var3 = var4.enrollInQuest;
                var2 = var1.id;
                var1 = {};
                var5 = 20;
                var8 = var7[var5];
                var8 = var6.bind(var0)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var1.questContent = var8;
                var8 = 21;
                var8 = var7[var8];
                var8 = var6.bind(var0)(var8);
                var8 = var8.QuestContentCTA;
                var8 = var8.START_QUEST;
                var1.questContentCTA = var8;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.QuestContent;
                var5 = var5.RUNNING_ACTIVITY;
                var1.sourceQuestContent = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            case 308:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun118740: for (var _fun118740_ip = 0;;) switch (_fun118740_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun118740_ip = 77;
                    continue _fun118740
                }
            case 15:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.ROBLOX_APPLICATION_ID;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun118740_ip = 74;
                    continue _fun118740
                }
            case 38:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.isRobloxSubgame;
                var1 = var2.bind(var3)(var4);
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun118742: for (var _fun118742_ip = 0;;) switch (_fun118742_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun118742_ip = 70;
                    continue _fun118742
                }
            case 12:
                var1 = var1.config;
                var3 = var1.features;
                var2 = var3.includes;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.QuestVariants;
                var1 = var1.MANUAL_HEARTBEAT_INITIALIZATION;
                var0 = var2.bind(var3)(var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
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
    var7 = 1;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.DISCORD_APPLICATION_ID;
    var _closure1_slot15 = var8;
    var9 = var3.QuestsExperimentLocations;
    var3 = 14;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var7 * var8;
    var _closure1_slot16 = var8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var7 * var3;
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.getQuestLogger;
    var3 = {};
    var9 = var9.QUESTS_MANAGER;
    var3.location = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot18 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun118744: for (var _fun118744_ip = 0;;) switch (_fun118744_ip) {
                case 0:
                    var4 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var6 = undefined;
                    var7 = var7.bind(var6)(var4, var1);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var6)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun118744_ip = 86;
                        continue _fun118744
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun118744_ip = 120;
                    continue _fun118744;
                case 86:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var6)(var4);
                    var5 = var5.constructor;
                    var0 = var7.bind(var8)(var9, var10, var5);
                case 120:
                    var0 = var1.bind(var6)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 24;
                    var3 = var7[var4];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var9 = var3.PLAY_ON_DESKTOP;
                    var3 = global;
                    var8 = var3.Map;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = var10;
                    var8 = new var14[var8](var13);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var1[var9] = var8;
                    var8 = var7[var4];
                    var8 = var5.bind(var6)(var8);
                    var8 = var8.FirstPartyQuestTaskTypes;
                    var9 = var8.STREAM_ON_DESKTOP;
                    var8 = var3.Map;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var8
                        }
                    });
                    var14 = var10;
                    var8 = new var14[var8](var13);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var1[var9] = var8;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.FirstPartyQuestTaskTypes;
                    var4 = var4.PLAY_ACTIVITY;
                    var3 = var3.Map;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var5;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var1[var4] = var3;
                    var0.heartbeats = var1;
                    var1 = function(arg0) { // Environment: var2
                        _fun118745: for (var _fun118745_ip = 0;;) switch (_fun118745_ip) {
                            case 0:
                                var1 = _closure1_slot13;
                                var3 = var1.quests;
                                var2 = var3.get;
                                var1 = arg0;
                                var4 = var2.bind(var3)(var1);
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun118745_ip = 211;
                                    continue _fun118745
                                }
                            case 35:
                                var1 = var4.config;
                                if (!(var2 != var1)) {
                                    _fun118745_ip = 211;
                                    continue _fun118745
                                }
                            case 47:
                                var1 = var4.userStatus;
                                if (!(var2 != var1)) {
                                    _fun118745_ip = 211;
                                    continue _fun118745
                                }
                            case 60:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 25;
                                var1 = var7[var1];
                                var6 = undefined;
                                var3 = var5.bind(var6)(var1);
                                var2 = var3.getQuestTaskDetails;
                                var1 = 24;
                                var1 = var7[var1];
                                var1 = var5.bind(var6)(var1);
                                var1 = var1.FirstPartyQuestTaskTypesSets;
                                var1 = var1.DESKTOP;
                                var1 = var2.bind(var3)(var4, var1);
                                var2 = var1.progressSeconds;
                                var1 = var1.targetSeconds;
                                var3 = global;
                                var4 = var3.Math;
                                var3 = var4.max;
                                var2 = var1 - var2;
                                var5 = _closure1_slot1;
                                var1 = 14;
                                var1 = var7[var1];
                                var1 = var5.bind(var6)(var1);
                                var1 = var1.Millis;
                                var1 = var1.SECOND;
                                var2 = var2 * var1;
                                var1 = 0;
                                var3 = var3.bind(var4)(var1, var2);
                                var1 = _closure1_slot16;
                                if (!(!(var3 <= var1))) {
                                    _fun118745_ip = 201;
                                    continue _fun118745
                                }
                            case 195:
                                var1 = _closure1_slot16;
                                _fun118745_ip = 209;
                                continue _fun118745;
                            case 201:
                                var2 = _closure1_slot17;
                                var1 = var3 + var2;
                            case 209:
                                return var1;
                            case 211:
                                var0 = _closure1_slot16;
                                return var0;
                        }
                    };
                    var0.calculateHeartbeatDurationMs = var1;
                    var1 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun118746: for (var _fun118746_ip = 0;;) switch (_fun118746_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = arg1;
                                var _closure4_slot0 = var4;
                                var _closure4_slot1 = var2;
                                var0 = arg2;
                                var _closure4_slot2 = var0;
                                var0 = _closure3_slot0;
                                var0 = var0.heartbeats;
                                var2 = var0[var2];
                                var _closure4_slot3 = var2;
                                var0 = var2.has;
                                var2 = var0.bind(var2)(var4);
                                if (var2) {
                                    _fun118746_ip = 117;
                                    continue _fun118746
                                }
                            case 60:
                                var2 = function() {
                                    _fun118747: for (var _fun118747_ip = 0;;) switch (_fun118747_ip) {
                                        case 0:
                                            var4 = _closure3_slot0;
                                            var3 = var4.getActivelyProgressingQuests;
                                            var2 = _closure4_slot1;
                                            var4 = var3.bind(var4)(var2);
                                            var3 = var4.has;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            if (var2) {
                                                _fun118747_ip = 121;
                                                continue _fun118747
                                            }
                                        case 44:
                                            var5 = _closure1_slot18;
                                            var3 = var5.log;
                                            var6 = _closure4_slot0;
                                            var2 = global;
                                            var2 = var2.HermesInternal;
                                            var8 = var2.concat;
                                            var7 = '~ initiateHeartbeat -> Quest ';
                                            var2 = ' is no longer actively progressing, terminating heartbeat';
                                            var2 = var8.bind(var7)(var6, var2);
                                            var2 = var3.bind(var5)(var2);
                                            var5 = _closure3_slot0;
                                            var3 = var5.terminateHeartbeat;
                                            var2 = _closure4_slot1;
                                            var2 = var3.bind(var5)(var6, var2);
                                            _fun118747_ip = 483;
                                            continue _fun118747;
                                        case 121:
                                            var3 = var4.get;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            var3 = null;
                                            var4 = var3 == var2;
                                            var5 = undefined;
                                            var6 = undefined;
                                            if (var4) {
                                                _fun118747_ip = 153;
                                                continue _fun118747
                                            }
                                        case 148:
                                            var6 = var2.applicationId;
                                        case 153:
                                            if (!(var3 == var6)) {
                                                _fun118747_ip = 161;
                                                continue _fun118747
                                            }
                                        case 157:
                                            var6 = _closure4_slot2;
                                        case 161:
                                            var7 = _closure4_slot1;
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot2;
                                            var4 = 24;
                                            var4 = var9[var4];
                                            var4 = var8.bind(var5)(var4);
                                            var4 = var4.FirstPartyQuestTaskTypes;
                                            var4 = var4.STREAM_ON_DESKTOP;
                                            if (!(var7 !== var4)) {
                                                _fun118747_ip = 293;
                                                continue _fun118747
                                            }
                                        case 204:
                                            var8 = _closure1_slot18;
                                            var7 = var8.log;
                                            var9 = _closure4_slot0;
                                            var4 = global;
                                            var4 = var4.HermesInternal;
                                            var10 = var4.concat;
                                            var4 = '~ initiateHeartbeat -> Sending heartbeat for questId: ';
                                            var4 = var10.bind(var4)(var9);
                                            var4 = var7.bind(var8)(var4);
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var4 = 19;
                                            var4 = var8[var4];
                                            var8 = var7.bind(var5)(var4);
                                            var7 = var8.sendHeartbeat;
                                            var4 = {};
                                            var4.questId = var9;
                                            var4.applicationId = var6;
                                            var4 = var7.bind(var8)(var4);
                                            _fun118747_ip = 426;
                                            continue _fun118747;
                                        case 293:
                                            var7 = _closure1_slot10;
                                            var4 = var7.getCurrentUserActiveStream;
                                            var8 = var4.bind(var7)();
                                            if (!(var3 != var8)) {
                                                _fun118747_ip = 487;
                                                continue _fun118747
                                            }
                                        case 314:
                                            var4 = _closure1_slot0;
                                            var9 = _closure1_slot2;
                                            var3 = 26;
                                            var3 = var9[var3];
                                            var7 = var4.bind(var5)(var3);
                                            var3 = var7.encodeStreamKey;
                                            var7 = var3.bind(var7)(var8);
                                            var11 = _closure1_slot18;
                                            var10 = var11.log;
                                            var8 = _closure4_slot0;
                                            var3 = global;
                                            var3 = var3.HermesInternal;
                                            var12 = var3.concat;
                                            var3 = '~ initiateHeartbeat -> Sending heartbeat for questId: ';
                                            var3 = var12.bind(var3)(var8);
                                            var3 = var10.bind(var11)(var3);
                                            var3 = 19;
                                            var3 = var9[var3];
                                            var5 = var4.bind(var5)(var3);
                                            var4 = var5.sendHeartbeat;
                                            var3 = {};
                                            var3.questId = var8;
                                            var3.streamKey = var7;
                                            var3.applicationId = var6;
                                            var3 = var4.bind(var5)(var3);
                                        case 426:
                                            var4 = _closure3_slot0;
                                            var3 = var4.calculateHeartbeatDurationMs;
                                            var6 = _closure4_slot0;
                                            var7 = var3.bind(var4)(var6);
                                            var3 = global;
                                            var5 = var3.window;
                                            var4 = var5.setTimeout;
                                            var3 = _closure4_slot4;
                                            var5 = var4.bind(var5)(var3, var7);
                                            var4 = _closure4_slot3;
                                            var3 = var4.set;
                                            var3 = var3.bind(var4)(var6, var5);
                                        case 483:
                                            var3 = undefined;
                                            return var3;
                                        case 487:
                                            var5 = _closure1_slot18;
                                            var4 = var5.log;
                                            var3 = _closure4_slot0;
                                            var2 = global;
                                            var2 = var2.HermesInternal;
                                            var6 = var2.concat;
                                            var2 = '~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ';
                                            var2 = var6.bind(var2)(var3);
                                            var2 = var4.bind(var5)(var2);
                                            var2 = _closure3_slot0;
                                            var1 = var2.terminateHeartbeat;
                                            var0 = _closure4_slot1;
                                            var0 = var1.bind(var2)(var3, var0);
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var _closure4_slot4 = var2;
                                var5 = _closure1_slot18;
                                var3 = var5.log;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var6 = var1.concat;
                                var1 = '~ initiateHeartbeat -> Initiating heartbeat for Quest ';
                                var1 = var6.bind(var1)(var4);
                                var1 = var3.bind(var5)(var1);
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                _fun118746_ip = 155;
                                continue _fun118746;
                            case 117:
                                var2 = _closure1_slot18;
                                var1 = var2.log;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var0 = '~ initiateHeartbeat -> Heartbeat already initiated for questId: ';
                                var0 = var3.bind(var0)(var4);
                                var0 = var1.bind(var2)(var0);
                            case 155:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.initiateHeartbeat = var1;
                    var1 = function(arg0, arg1) { // Environment: var2
                        _fun118748: for (var _fun118748_ip = 0;;) switch (_fun118748_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var1 = var0.heartbeats;
                                var0 = arg1;
                                var6 = var1[var0];
                                var1 = _closure1_slot13;
                                var5 = var1.quests;
                                var1 = var6.get;
                                var8 = var1.bind(var6)(var3);
                                var2 = null;
                                if (!(var2 != var8)) {
                                    _fun118748_ip = 234;
                                    continue _fun118748
                                }
                            case 55:
                                var9 = _closure1_slot18;
                                var7 = var9.log;
                                var1 = global;
                                var4 = var1.HermesInternal;
                                var10 = var4.concat;
                                var4 = '~ terminateHeartbeat -> Terminating heartbeat for questId: ';
                                var4 = var10.bind(var4)(var3);
                                var4 = var7.bind(var9)(var4);
                                var7 = var1.window;
                                var4 = var7.clearTimeout;
                                var4 = var4.bind(var7)(var8);
                                var4 = var6.delete;
                                var4 = var4.bind(var6)(var3);
                                var4 = var5.get;
                                var6 = var4.bind(var5)(var3);
                                var2 = var2 != var6;
                                if (!var2) {
                                    _fun118748_ip = 148;
                                    continue _fun118748
                                }
                            case 137:
                                var5 = _closure1_slot22;
                                var4 = undefined;
                                var2 = var5.bind(var4)(var6);
                            case 148:
                                if (!var2) {
                                    _fun118748_ip = 234;
                                    continue _fun118748
                                }
                            case 151:
                                var4 = _closure1_slot18;
                                var2 = var4.log;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var1 = '~ terminateHeartbeat -> Sending terminal heartbeat for questId: ';
                                var1 = var5.bind(var1)(var3);
                                var1 = var2.bind(var4)(var1);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 19;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.sendHeartbeat;
                                var0 = {};
                                var0.questId = var3;
                                var3 = true;
                                var0.terminal = var3;
                                var0 = var1.bind(var2)(var0);
                            case 234:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.terminateHeartbeat = var1;
                    var1 = function(arg0) { // Environment: var2
                        _fun118749: for (var _fun118749_ip = 0;;) switch (_fun118749_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.questId;
                                var2 = var0.userStatus;
                                var6 = _closure1_slot18;
                                var5 = var6.log;
                                var0 = global;
                                var3 = var0.HermesInternal;
                                var8 = var3.concat;
                                var7 = '~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ';
                                var3 = ')';
                                var3 = var8.bind(var7)(var4, var3);
                                var3 = var5.bind(var6)(var3);
                                var3 = var2.completedAt;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun118749_ip = 191;
                                    continue _fun118749
                                }
                            case 73:
                                var3 = _closure1_slot18;
                                var2 = var3.log;
                                var1 = var0.HermesInternal;
                                var6 = var1.concat;
                                var5 = '~ handleSendHeartbeatSuccess -> Quest ';
                                var1 = ' completed, terminating any heartbeats for it';
                                var1 = var6.bind(var5)(var4, var1);
                                var1 = var2.bind(var3)(var1);
                                var2 = var0.Object;
                                var1 = var2.keys;
                                var0 = _closure3_slot0;
                                var0 = var0.heartbeats;
                                var2 = var1.bind(var2)(var0);
                                var0 = var2.length;
                                var1 = 0;
                                var0 = var1 < var0;
                                if (!var0) {
                                    _fun118749_ip = 191;
                                    continue _fun118749
                                }
                            case 159:
                                var6 = var2[var1];
                                var5 = _closure3_slot0;
                                var0 = var5.terminateHeartbeat;
                                var0 = var0.bind(var5)(var4, var6);
                                var1 = var1 + 1;
                                var0 = var2.length;
                                if (var1 < var0) {
                                    _fun118749_ip = 159;
                                    continue _fun118749
                                }
                            case 191:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSendHeartbeatSuccess = var1;
                    var1 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var4 = var0.questId;
                        var2 = _closure1_slot18;
                        var1 = var2.log;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = '~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ';
                        var0 = var3.bind(var0)(var4);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSendHeartbeatFailure = var1;
                    var1 = {};
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 24;
                        var1 = var6[var0];
                        var4 = undefined;
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.FirstPartyQuestTaskTypes;
                        var7 = var1.PLAY_ON_DESKTOP;
                        var1 = new Array(2);
                        var1[0] = var7;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1[1] = var0;
                        var0 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.QUESTS_FETCH_CURRENT_QUESTS_SUCCESS = var3;
                    var3 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.syncHeartbeats;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 24;
                        var2 = var6[var0];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.FirstPartyQuestTaskTypes;
                        var7 = var2.PLAY_ON_DESKTOP;
                        var2 = new Array(3);
                        var2[0] = var7;
                        var7 = var6[var0];
                        var7 = var5.bind(var1)(var7);
                        var7 = var7.FirstPartyQuestTaskTypes;
                        var7 = var7.STREAM_ON_DESKTOP;
                        var2[1] = var7;
                        var0 = var6[var0];
                        var0 = var5.bind(var1)(var0);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.PLAY_ACTIVITY;
                        var2[2] = var0;
                        var1 = 'QUESTS_ENROLL_SUCCESS';
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot25;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var1.QUESTS_ENROLL_SUCCESS = var3;
                    var3 = var0.handleSendHeartbeatSuccess;
                    var1.QUESTS_SEND_HEARTBEAT_SUCCESS = var3;
                    var3 = var0.handleSendHeartbeatFailure;
                    var1.QUESTS_SEND_HEARTBEAT_FAILURE = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 24;
                        var1 = var6[var0];
                        var4 = undefined;
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.FirstPartyQuestTaskTypes;
                        var7 = var1.PLAY_ON_DESKTOP;
                        var1 = new Array(3);
                        var1[0] = var7;
                        var7 = var6[var0];
                        var7 = var5.bind(var4)(var7);
                        var7 = var7.FirstPartyQuestTaskTypes;
                        var7 = var7.STREAM_ON_DESKTOP;
                        var1[1] = var7;
                        var0 = var6[var0];
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.PLAY_ACTIVITY;
                        var1[2] = var0;
                        var0 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.QUESTS_PREVIEW_UPDATE_SUCCESS = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.PLAY_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'RUNNING_GAMES_CHANGE';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.RUNNING_GAMES_CHANGE = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.PLAY_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'RUNNING_NON_GAMES_CHANGE';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.RUNNING_NON_GAMES_CHANGE = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'STREAM_START';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.STREAM_START = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'STREAM_CREATE';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.STREAM_CREATE = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'STREAM_CLOSE';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.STREAM_CLOSE = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'PASSIVE_UPDATE_V2';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.PASSIVE_UPDATE_V2 = var3;
                    var3 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.syncHeartbeats;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.STREAM_ON_DESKTOP;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = 'VOICE_STATE_UPDATES';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.VOICE_STATE_UPDATES = var3;
                    var3 = function arg0() {
                        var0 = arg0;
                        var2 = var0.applicationId;
                        var1 = _closure1_slot23;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var1.EMBEDDED_ACTIVITY_LAUNCH_SUCCESS = var3;
                    var3 = function arg0() {
                        var0 = arg0;
                        var2 = var0.applicationId;
                        var1 = _closure1_slot23;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var1.FRAME_LAUNCH = var3;
                    var3 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.syncHeartbeats;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 24;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.FirstPartyQuestTaskTypes;
                        var0 = var0.PLAY_ACTIVITY;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var1 = 'EMBEDDED_ACTIVITY_UPDATE_V2';
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot25;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var1.EMBEDDED_ACTIVITY_UPDATE_V2 = var3;
                    var2 = function arg0() {
                        var0 = arg0;
                        var0 = var0.questId;
                        var _closure4_slot0 = var0;
                        var5 = _closure3_slot0;
                        var4 = var5.syncHeartbeats;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 24;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = var2.FirstPartyQuestTaskTypes;
                        var2 = var2.PLAY_ACTIVITY;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = 'QUEST_APPLICATION_START_TIMER';
                        var1 = function(arg0) { // Environment: var1
                            _fun118767: for (var _fun118767_ip = 0;;) switch (_fun118767_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = null;
                                    var0 = var0 != var3;
                                    if (!var0) {
                                        _fun118767_ip = 28;
                                        continue _fun118767
                                    }
                                case 12:
                                    var2 = var3.id;
                                    var1 = _closure4_slot0;
                                    var0 = var2 === var1;
                                case 28:
                                    if (!var0) {
                                        _fun118767_ip = 45;
                                        continue _fun118767
                                    }
                                case 31:
                                    var2 = _closure1_slot25;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var3);
                                case 45:
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var1.QUEST_APPLICATION_START_TIMER = var2;
                    var0.actions = var1;
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
        var0 = 'syncHeartbeats';
        var4.key = var0;
        var0 = function arg0, arg1, arg2() {
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActivelyProgressingQuests';
        var4.key = var6;
        var6 = function arg0() {
            _fun118769: for (var _fun118769_ip = 0;;) switch (_fun118769_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 24;
                    var3 = var0[var6];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var3 = var3.PLAY_ON_DESKTOP;
                    if (!(var3 !== var4)) {
                        _fun118769_ip = 177;
                        continue _fun118769
                    }
                case 50:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var3 = var3.STREAM_ON_DESKTOP;
                    if (!(var3 !== var4)) {
                        _fun118769_ip = 163;
                        continue _fun118769
                    }
                case 83:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var3 = var3.PLAY_ACTIVITY;
                    if (!(var3 !== var4)) {
                        _fun118769_ip = 149;
                        continue _fun118769
                    }
                case 116:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.assertNever;
                    var2 = var2.bind(var3)(var4);
                    return var0;
                case 149:
                    var0 = var1.getActivelyProgressingActivityQuests;
                    var0 = var0.bind(var1)();
                    return var0;
                case 163:
                    var0 = var1.getActivelyProgressingStreamOnDesktopQuests;
                    var0 = var0.bind(var1)();
                    return var0;
                case 177:
                    var0 = var1.getActivelyProgressingPlayOnDesktopQuests;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActivelyProgressingPlayOnDesktopQuests';
        var4.key = var6;
        var6 = function() {
            _fun118770: for (var _fun118770_ip = 0;;) switch (_fun118770_ip) {
                case 0:
                    var1 = global;
                    var0 = var1.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var23 = var2;
                    var0 = new var23[var0](var22);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot9;
                    var4 = var5.getRunningGames;
                    var8 = var4.bind(var5)();
                    var4 = var5.getRunningNonGames;
                    var6 = var4.bind(var5)();
                    var4 = _closure1_slot13;
                    var4 = var4.quests;
                    var _closure3_slot1 = var4;
                    var9 = _closure1_slot18;
                    var7 = var9.log;
                    var22 = '~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ';
                    var20 = 'Running non-games: ';
                    var23 = var9;
                    var21 = var8;
                    var19 = var6;
                    var4 = var23[var7](var22, var21, var20, var19, var18);
                    var5 = {};
                    var _closure3_slot2 = var5;
                    var4 = _closure1_slot20;
                    var7 = undefined;
                    var12 = var4.bind(var7)(var8);
                    var8 = var12.bind(var7)();
                    var4 = var8.done;
                    var9 = null;
                    var11 = var8;
                    var10 = undefined;
                    var8 = undefined;
                    if (var4) {
                        _fun118770_ip = 321;
                        continue _fun118770
                    }
                case 152:
                    var17 = var11.value;
                    var4 = var17.isLauncher;
                    var14 = var10;
                    var13 = var8;
                    if (var4) {
                        _fun118770_ip = 297;
                        continue _fun118770
                    }
                case 175:
                    var4 = var17.id;
                    if (!(var9 != var4)) {
                        _fun118770_ip = 201;
                        continue _fun118770
                    }
                case 184:
                    var4 = var17.id;
                    var5[var4] = var17;
                    var14 = var10;
                    var13 = var8;
                    _fun118770_ip = 297;
                    continue _fun118770;
                case 201:
                    var15 = _closure1_slot9;
                    var4 = var15.getOverrideForGame;
                    var15 = var4.bind(var15)(var17);
                    var4 = var17.distributor;
                    if (!(var9 == var4)) {
                        _fun118770_ip = 238;
                        continue _fun118770
                    }
                case 228:
                    var13 = var8;
                    var14 = var15;
                    if (!(var9 == var14)) {
                        _fun118770_ip = 297;
                        continue _fun118770
                    }
                case 238:
                    var18 = _closure1_slot11;
                    var16 = var18.getGameByName;
                    var4 = var17.name;
                    var4 = var16.bind(var18)(var4);
                    var18 = var9 == var4;
                    var16 = undefined;
                    if (var18) {
                        _fun118770_ip = 272;
                        continue _fun118770
                    }
                case 267:
                    var16 = var4.id;
                case 272:
                    var14 = var15;
                    var13 = var4;
                    if (!(var9 != var16)) {
                        _fun118770_ip = 297;
                        continue _fun118770
                    }
                case 282:
                    var16 = var4.id;
                    var5[var16] = var17;
                    var14 = var15;
                    var13 = var4;
                case 297:
                    var15 = var12.bind(var7)();
                    var4 = var15.done;
                    var10 = var14;
                    var8 = var13;
                    var11 = var15;
                    if (!var4) {
                        _fun118770_ip = 152;
                        continue _fun118770
                    }
                case 321:
                    var4 = _closure1_slot20;
                    var8 = var4.bind(var7)(var6);
                    var6 = var8.bind(var7)();
                    var4 = var6.done;
                    if (var4) {
                        _fun118770_ip = 380;
                        continue _fun118770
                    }
                case 342:
                    var10 = var6.value;
                    var4 = var10.id;
                    if (!(var9 != var4)) {
                        _fun118770_ip = 365;
                        continue _fun118770
                    }
                case 356:
                    var4 = var10.id;
                    var5[var4] = var10;
                case 365:
                    var10 = var8.bind(var7)();
                    var4 = var10.done;
                    var6 = var10;
                    if (!var4) {
                        _fun118770_ip = 342;
                        continue _fun118770
                    }
                case 380:
                    var6 = function arg0() {
                        _fun118771: for (var _fun118771_ip = 0;;) switch (_fun118771_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = _closure3_slot2;
                                var9 = var0[var1];
                                var2 = _closure1_slot20;
                                var1 = _closure3_slot1;
                                var0 = var1.values;
                                var1 = var0.bind(var1)();
                                var0 = undefined;
                                var7 = var2.bind(var0)(var1);
                                var2 = var7.bind(var0)();
                                var1 = var2.done;
                                var6 = 22;
                                var5 = null;
                                var4 = 25;
                                var3 = var2;
                                var2 = undefined;
                                if (var1) {
                                    _fun118771_ip = 274;
                                    continue _fun118771
                                }
                            case 75:
                                var13 = var3.value;
                                var12 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var4];
                                var12 = var12.bind(var0)(var1);
                                var1 = var12.getDesktopApplicationIds;
                                var15 = var1.bind(var12)(var13);
                                var1 = _closure1_slot22;
                                var1 = var1.bind(var0)(var13);
                                var12 = var2;
                                if (!var1) {
                                    _fun118771_ip = 253;
                                    continue _fun118771
                                }
                            case 126:
                                var12 = var2;
                                if (!(var5 != var15)) {
                                    _fun118771_ip = 253;
                                    continue _fun118771
                                }
                            case 133:
                                var14 = var15.find;
                                var1 = function(arg0) { // Environment: var11
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var1 = var14.bind(var15)(var1);
                                if (!(var5 == var1)) {
                                    _fun118771_ip = 224;
                                    continue _fun118771
                                }
                            case 154:
                                var14 = _closure1_slot24;
                                var14 = var14.bind(var0)(var15, var9);
                                var12 = var1;
                                if (!var14) {
                                    _fun118771_ip = 253;
                                    continue _fun118771
                                }
                            case 170:
                                var17 = _closure3_slot0;
                                var16 = var17.set;
                                var15 = var13.id;
                                var14 = {};
                                var19 = _closure1_slot0;
                                var18 = _closure1_slot2;
                                var18 = var18[var6];
                                var18 = var19.bind(var0)(var18);
                                var18 = var18.ROBLOX_APPLICATION_ID;
                                var14.applicationId = var18;
                                var14 = var16.bind(var17)(var15, var14);
                                var12 = var1;
                                _fun118771_ip = 253;
                                continue _fun118771;
                            case 224:
                                var16 = _closure3_slot0;
                                var15 = var16.set;
                                var14 = var13.id;
                                var13 = {};
                                var13.applicationId = var1;
                                var13 = var15.bind(var16)(var14, var13);
                                var12 = var1;
                            case 253:
                                var13 = var7.bind(var0)();
                                var1 = var13.done;
                                var2 = var12;
                                var3 = var13;
                                if (!var1) {
                                    _fun118771_ip = 75;
                                    continue _fun118771
                                }
                            case 274:
                                return var0;
                        }
                    };
                    var4 = var1.Object;
                    var3 = var4.keys;
                    var5 = var3.bind(var4)(var5);
                    var3 = var5.length;
                    var4 = 0;
                    var3 = var4 < var3;
                    if (!var3) {
                        _fun118770_ip = 438;
                        continue _fun118770
                    }
                case 417:
                    var3 = var5[var4];
                    var3 = var6.bind(var7)(var3);
                    var4 = var4 + 1;
                    var3 = var5.length;
                    if (var4 < var3) {
                        _fun118770_ip = 417;
                        continue _fun118770
                    }
                case 438:
                    var4 = _closure1_slot18;
                    var3 = var4.log;
                    var5 = var1.Array;
                    var2 = var5.from;
                    var1 = var0.keys;
                    var1 = var1.bind(var0)();
                    var2 = var2.bind(var5)(var1);
                    var1 = '~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getActivelyProgressingStreamOnDesktopQuests';
        var4.key = var6;
        var6 = function() {
            _fun118773: for (var _fun118773_ip = 0;;) switch (_fun118773_ip) {
                case 0:
                    var1 = global;
                    var0 = var1.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var15 = var2;
                    var0 = new var15[var0](var14);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var4 = _closure1_slot10;
                    var3 = var4.getCurrentUserActiveStream;
                    var3 = var3.bind(var4)();
                    var9 = null;
                    if (!(var9 != var3)) {
                        _fun118773_ip = 330;
                        continue _fun118773
                    }
                case 54:
                    var5 = _closure1_slot12;
                    var4 = var5.countVoiceStatesForChannel;
                    var3 = var3.channelId;
                    var4 = var4.bind(var5)(var3);
                    var3 = 2;
                    if (!(!(var4 < var3))) {
                        _fun118773_ip = 328;
                        continue _fun118773
                    }
                case 84:
                    var4 = _closure1_slot10;
                    var3 = var4.getStreamerActiveStreamMetadata;
                    var3 = var3.bind(var4)();
                    if (!(var9 != var3)) {
                        _fun118773_ip = 326;
                        continue _fun118773
                    }
                case 105:
                    var6 = _closure1_slot18;
                    var5 = var6.log;
                    var4 = '~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ';
                    var4 = var5.bind(var6)(var4, var3);
                    var8 = var3.id;
                    if (!(var9 != var8)) {
                        _fun118773_ip = 324;
                        continue _fun118773
                    }
                case 138:
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot13;
                    var5 = var3.quests;
                    var3 = var5.values;
                    var3 = var3.bind(var5)();
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    var5 = 25;
                    if (var3) {
                        _fun118773_ip = 276;
                        continue _fun118773
                    }
                case 183:
                    var3 = var4.value;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var5];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.getStreamingApplicationId;
                    var10 = var10.bind(var11)(var3);
                    var11 = _closure1_slot22;
                    var11 = var11.bind(var7)(var3);
                    if (!var11) {
                        _fun118773_ip = 232;
                        continue _fun118773
                    }
                case 228:
                    var11 = var9 != var10;
                case 232:
                    if (!var11) {
                        _fun118773_ip = 261;
                        continue _fun118773
                    }
                case 235:
                    if (!(var10 === var8)) {
                        _fun118773_ip = 261;
                        continue _fun118773
                    }
                case 239:
                    var11 = var0.set;
                    var10 = var3.id;
                    var3 = {};
                    var3.applicationId = var8;
                    var3 = var11.bind(var0)(var10, var3);
                case 261:
                    var10 = var6.bind(var7)();
                    var3 = var10.done;
                    var4 = var10;
                    if (!var3) {
                        _fun118773_ip = 183;
                        continue _fun118773
                    }
                case 276:
                    var4 = _closure1_slot18;
                    var3 = var4.log;
                    var5 = var1.Array;
                    var2 = var5.from;
                    var1 = var0.keys;
                    var1 = var1.bind(var0)();
                    var2 = var2.bind(var5)(var1);
                    var1 = '~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 324:
                    return var0;
                case 326:
                    return var0;
                case 328:
                    return var0;
                case 330:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getActivelyProgressingActivityQuests';
        var4.key = var6;
        var5 = function() {
            _fun118774: for (var _fun118774_ip = 0;;) switch (_fun118774_ip) {
                case 0:
                    var1 = global;
                    var0 = var1.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var23 = var2;
                    var0 = new var23[var0](var22);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var4 = _closure1_slot8;
                    var3 = var4.getSelfEmbeddedActivities;
                    var6 = var3.bind(var4)();
                    var4 = var6.size;
                    var3 = 0;
                    var8 = var4 > var3;
                    var5 = _closure1_slot18;
                    var4 = var5.log;
                    var3 = '~ getActivelyProgressingActivityQuestIds -> Embedded activities: ';
                    var3 = var4.bind(var5)(var3, var6);
                    if (var8) {
                        _fun118774_ip = 82;
                        continue _fun118774
                    }
                case 80:
                    return var0;
                case 82:
                    var3 = _closure1_slot13;
                    var5 = var3.quests;
                    var4 = _closure1_slot20;
                    var3 = var6.keys;
                    var3 = var3.bind(var6)();
                    var7 = undefined;
                    var12 = var4.bind(var7)(var3);
                    var4 = var12.bind(var7)();
                    var3 = var4.done;
                    var11 = null;
                    var10 = 25;
                    var9 = var4;
                    var6 = undefined;
                    var4 = undefined;
                    if (var3) {
                        _fun118774_ip = 291;
                        continue _fun118774
                    }
                case 139:
                    var15 = var9.value;
                    var13 = _closure1_slot20;
                    var3 = var5.values;
                    var3 = var3.bind(var5)();
                    var14 = var13.bind(var7)(var3);
                    var13 = var14.bind(var7)();
                    var3 = var13.done;
                    if (var3) {
                        _fun118774_ip = 273;
                        continue _fun118774
                    }
                case 174:
                    var17 = var13.value;
                    var16 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var16 = var16.bind(var7)(var3);
                    var3 = var16.getPlayActivityApplicationId;
                    var16 = var3.bind(var16)(var17);
                    var3 = _closure1_slot22;
                    var3 = var3.bind(var7)(var17);
                    if (!var3) {
                        _fun118774_ip = 223;
                        continue _fun118774
                    }
                case 219:
                    var3 = var11 != var16;
                case 223:
                    if (!var3) {
                        _fun118774_ip = 252;
                        continue _fun118774
                    }
                case 226:
                    if (!(var16 === var15)) {
                        _fun118774_ip = 252;
                        continue _fun118774
                    }
                case 230:
                    var19 = var0.set;
                    var18 = var17.id;
                    var3 = {};
                    var3.applicationId = var15;
                    var3 = var19.bind(var0)(var18, var3);
                case 252:
                    var18 = var14.bind(var7)();
                    var3 = var18.done;
                    var13 = var18;
                    var6 = var17;
                    var4 = var16;
                    if (!var3) {
                        _fun118774_ip = 174;
                        continue _fun118774
                    }
                case 273:
                    var13 = var12.bind(var7)();
                    var3 = var13.done;
                    var9 = var13;
                    if (!var3) {
                        _fun118774_ip = 139;
                        continue _fun118774
                    }
                case 291:
                    var4 = _closure1_slot20;
                    var3 = var5.values;
                    var3 = var3.bind(var5)();
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    var5 = 28;
                    if (var3) {
                        _fun118774_ip = 419;
                        continue _fun118774
                    }
                case 324:
                    var3 = var4.value;
                    var9 = _closure1_slot22;
                    var9 = var9.bind(var7)(var3);
                    if (!var9) {
                        _fun118774_ip = 369;
                        continue _fun118774
                    }
                case 341:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var5];
                    var11 = var11.bind(var7)(var10);
                    var10 = var11.isPlayAnyActivityQuest;
                    var9 = var10.bind(var11)(var3);
                case 369:
                    if (!var9) {
                        _fun118774_ip = 375;
                        continue _fun118774
                    }
                case 372:
                    var9 = var8;
                case 375:
                    if (!var9) {
                        _fun118774_ip = 404;
                        continue _fun118774
                    }
                case 378:
                    var10 = var0.set;
                    var9 = var3.id;
                    var3 = {};
                    var11 = _closure1_slot15;
                    var3.applicationId = var11;
                    var3 = var10.bind(var0)(var9, var3);
                case 404:
                    var9 = var6.bind(var7)();
                    var3 = var9.done;
                    var4 = var9;
                    if (!var3) {
                        _fun118774_ip = 324;
                        continue _fun118774
                    }
                case 419:
                    var4 = _closure1_slot18;
                    var3 = var4.log;
                    var5 = var1.Array;
                    var2 = var5.from;
                    var1 = var0.keys;
                    var1 = var1.bind(var0)();
                    var2 = var2.bind(var5)(var1);
                    var1 = '~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
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
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/managers/QuestProgressManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1371, 3483, 3713, 3484, 3525, 5286, 14291, 5289, 667, 5301, 5299, 12199, 5297, 5319, 5291, 5339, 3617, 3616, 5295, 5328, 3504, 1304, 5327, 4307, 2]);