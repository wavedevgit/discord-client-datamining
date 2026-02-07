// modules/quests/utils/QuestTaskUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var19 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var20 = dependencyMap;
    var _closure1_slot0 = var19;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var20;
    var0 = function arg0, arg1() {
        _fun47593: for (var _fun47593_ip = 0;;) switch (_fun47593_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun47593_ip = 46;
                    continue _fun47593
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun47593_ip = 55;
                    continue _fun47593
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun47593_ip = 343;
                    continue _fun47593
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun47593_ip = 323;
                    continue _fun47593
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun47593_ip = 283;
                    continue _fun47593
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun47593_ip = 270;
                    continue _fun47593
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
                    _fun47593_ip = 163;
                    continue _fun47593
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun47593_ip = 179;
                    continue _fun47593
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun47593_ip = 249;
                    continue _fun47593
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun47593_ip = 249;
                    continue _fun47593
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun47593_ip = 234;
                    continue _fun47593
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun47593_ip = 247;
                    continue _fun47593
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun47593_ip = 265;
                continue _fun47593;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun47593_ip = 283;
                continue _fun47593;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun47593_ip = 323;
                    continue _fun47593
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
                    _fun47593_ip = 330;
                    continue _fun47593
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun47594: for (var _fun47594_ip = 0;;) switch (_fun47594_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun47594_ip = 56;
                                continue _fun47594
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
                            _fun47594_ip = 67;
                            continue _fun47594;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun47595: for (var _fun47595_ip = 0;;) switch (_fun47595_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun47595_ip = 23;
                    continue _fun47595
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun47595_ip = 33;
                    continue _fun47595
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
                    _fun47595_ip = 70;
                    continue _fun47595
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun47595_ip = 55;
                    continue _fun47595
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun47596: for (var _fun47596_ip = 0;;) switch (_fun47596_ip) {
            case 0:
                var11 = arg0;
                var10 = null;
                if (!(var10 == var11)) {
                    _fun47596_ip = 13;
                    continue _fun47596
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var1 = global;
                var0 = var1.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var18 = var2;
                var0 = new var18[var0](var17);
                var3 = var0 instanceof Object ? var0 : var2;
                var4 = _closure1_slot14;
                var0 = undefined;
                var2 = arg1;
                var8 = var4.bind(var0)(var2);
                var4 = var8.bind(var0)();
                var2 = var4.done;
                var7 = 'applications';
                var6 = var4;
                var5 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun47596_ip = 268;
                    continue _fun47596
                }
            case 84:
                var12 = var6.value;
                var2 = var11.config;
                var2 = var2.taskConfigV2;
                var2 = var2.tasks;
                var2 = var2[var12];
                var13 = var5;
                var12 = var4;
                if (!(var10 != var2)) {
                    _fun47596_ip = 244;
                    continue _fun47596
                }
            case 123:
                var14 = var7 in var2;
                var13 = var5;
                var12 = var4;
                if (!var14) {
                    _fun47596_ip = 244;
                    continue _fun47596
                }
            case 136:
                var16 = var1.Array;
                var15 = var16.isArray;
                var14 = var2.applications;
                var14 = var15.bind(var16)(var14);
                var13 = var5;
                var12 = var4;
                if (!var14) {
                    _fun47596_ip = 244;
                    continue _fun47596
                }
            case 167:
                var14 = _closure1_slot14;
                var2 = var2.applications;
                var15 = var14.bind(var0)(var2);
                var16 = var15.bind(var0)();
                var2 = var16.done;
                var14 = var16;
                var13 = var14;
                var12 = var15;
                if (var2) {
                    _fun47596_ip = 244;
                    continue _fun47596
                }
            case 203:
                var2 = var14.value;
                var16 = var3.add;
                var2 = var2.id;
                var2 = var16.bind(var3)(var2);
                var16 = var15.bind(var0)();
                var2 = var16.done;
                var14 = var16;
                var13 = var14;
                var12 = var15;
                if (!var2) {
                    _fun47596_ip = 203;
                    continue _fun47596
                }
            case 244:
                var14 = var8.bind(var0)();
                var2 = var14.done;
                var5 = var13;
                var4 = var12;
                var6 = var14;
                if (!var2) {
                    _fun47596_ip = 84;
                    continue _fun47596
                }
            case 268:
                var4 = var3.size;
                var2 = 0;
                var2 = var4 > var2;
                var0 = undefined;
                if (!var2) {
                    _fun47596_ip = 300;
                    continue _fun47596
                }
            case 284:
                var2 = var1.Array;
                var1 = var2.from;
                var0 = var1.bind(var2)(var3);
            case 300:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var17 = function arg0() {
        var0 = arg0;
        var0 = var0.quest;
        var0 = var0.config;
        var0 = var0.taskConfigV2;
        var1 = var0.tasks;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.FirstPartyQuestTaskTypes;
        var0 = var0.PLAY_ON_DESKTOP;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot17 = var17;
    var16 = function arg0() {
        var0 = arg0;
        var0 = var0.config;
        var0 = var0.taskConfigV2;
        var1 = var0.tasks;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.FirstPartyQuestTaskTypes;
        var0 = var0.PLAY_ACTIVITY;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot18 = var16;
    var15 = function arg0() {
        _fun47599: for (var _fun47599_ip = 0;;) switch (_fun47599_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun47599_ip = 33;
                    continue _fun47599
                }
            case 12:
                var3 = _closure1_slot17;
                var2 = {};
                var2.quest = var1;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 33:
                return var0;
        }
    };
    var _closure1_slot19 = var15;
    var13 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.FirstPartyQuestTaskTypesSets;
        var1 = var1.IN_GAME;
        var2 = var2.bind(var3)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = _closure2_slot0;
            var0 = var0.config;
            var0 = var0.taskConfigV2;
            var1 = var0.tasks;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot20 = var13;
    var8 = function arg0() {
        _fun47602: for (var _fun47602_ip = 0;;) switch (_fun47602_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.userStatus;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun47602_ip = 122;
                    continue _fun47602
                }
            case 18:
                var6 = _closure1_slot8;
                var4 = var3.userStatus;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 1;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var8.bind(var5)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.PLAY_ON_XBOX;
                var1 = var6.bind(var5)(var4, var1);
                if (var1) {
                    _fun47602_ip = 119;
                    continue _fun47602
                }
            case 74:
                var4 = _closure1_slot8;
                var3 = var3.userStatus;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var5)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_PLAYSTATION;
                var1 = var4.bind(var5)(var3, var2);
            case 119:
                var0 = var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot21 = var8;
    var0 = function arg0() {
        _fun47603: for (var _fun47603_ip = 0;;) switch (_fun47603_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun47603_ip = 21;
                    continue _fun47603
                }
            case 16:
                var1 = var0.type;
            case 21:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.FirstPartyQuestTaskTypes;
                var0 = var0.PLAY_ON_DESKTOP;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var7 = function arg0() {
        _fun47604: for (var _fun47604_ip = 0;;) switch (_fun47604_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.taskConfigV2;
                var6 = var0.tasks;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 1;
                var2 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.WATCH_VIDEO;
                var2 = var6[var2];
                var1 = var1.taskConfigV2;
                var1 = var1.tasks;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.FirstPartyQuestTaskTypes;
                var0 = var0.WATCH_VIDEO_ON_MOBILE;
                var3 = var1[var0];
                var1 = null;
                if (!(var1 != var2)) {
                    _fun47604_ip = 106;
                    continue _fun47604
                }
            case 99:
                var0 = var3;
                if (!(var1 == var0)) {
                    _fun47604_ip = 128;
                    continue _fun47604
                }
            case 106:
                if (!(var1 != var3)) {
                    _fun47604_ip = 113;
                    continue _fun47604
                }
            case 110:
                var2 = var3;
            case 113:
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun47604_ip = 125;
                    continue _fun47604
                }
            case 122:
                var1 = var2;
            case 125:
                var0 = var1;
            case 128:
                return var0;
        }
    };
    var _closure1_slot23 = var7;
    var6 = function arg0() {
        _fun47605: for (var _fun47605_ip = 0;;) switch (_fun47605_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.taskConfigV2;
                var1 = var0.tasks;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 1;
                var2 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.ACHIEVEMENT_IN_ACTIVITY;
                var2 = var1[var2];
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.FirstPartyQuestTaskTypes;
                var0 = var0.ACHIEVEMENT_IN_GAME;
                var1 = var1[var0];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun47605_ip = 90;
                    continue _fun47605
                }
            case 87:
                var1 = var2;
            case 90:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun47605_ip = 102;
                    continue _fun47605
                }
            case 99:
                var0 = var1;
            case 102:
                return var0;
        }
    };
    var _closure1_slot24 = var6;
    var5 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot26;
        var1 = var0.targetSeconds;
        var0 = var0.progressSeconds;
        var1 = var1 - var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot25 = var5;
    var4 = function arg0() {
        var7 = arg0;
        var0 = {};
        var5 = global;
        var6 = var5.Math;
        var3 = var6.max;
        var8 = var5.Math;
        var4 = var8.floor;
        var1 = 60;
        var2 = var7 / var1;
        var2 = var4.bind(var8)(var2);
        var4 = 0;
        var2 = var3.bind(var6)(var4, var2);
        var0.minutes = var2;
        var3 = var5.Math;
        var2 = var3.max;
        var6 = var5.Math;
        var5 = var6.floor;
        var1 = var7 % var1;
        var1 = var5.bind(var6)(var1);
        var1 = var2.bind(var3)(var4, var1);
        var0.seconds = var1;
        return var0;
    };
    var _closure1_slot26 = var4;
    var1 = function arg0, arg1() {
        var0 = global;
        var2 = var0.String;
        var6 = undefined;
        var1 = arg0;
        var2 = var2.bind(var6)(var1);
        var1 = var2.padStart;
        var5 = 2;
        var3 = '0';
        var4 = var1.bind(var2)(var5, var3);
        var2 = var0.String;
        var1 = arg1;
        var2 = var2.bind(var6)(var1);
        var1 = var2.padStart;
        var3 = var1.bind(var2)(var5, var3);
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot27 = var1;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var9);
    var0 = 0;
    var9 = var20[var0];
    var0 = undefined;
    var9 = var10.bind(var0)(var9);
    var _closure1_slot3 = var9;
    var14 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = _closure3_slot0;
                var0 = var0.config;
                var0 = var0.taskConfigV2;
                var1 = var0.tasks;
                var0 = arg0;
                var1 = var1[var0];
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var18 = 1;
    var9 = var20[var18];
    var9 = var19.bind(var0)(var9);
    var9 = var9.FirstPartyQuestTaskTypes;
    var10 = var9.PLAY_ON_XBOX;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = var20[var18];
    var10 = var19.bind(var0)(var10);
    var10 = var10.FirstPartyQuestTaskTypes;
    var10 = var10.PLAY_ON_PLAYSTATION;
    var9[1] = var10;
    var12 = var14.bind(var0)(var9);
    var _closure1_slot4 = var12;
    var9 = var20[var18];
    var9 = var19.bind(var0)(var9);
    var9 = var9.FirstPartyQuestTaskTypes;
    var10 = var9.WATCH_VIDEO;
    var9 = new Array(1);
    var9[0] = var10;
    var11 = var14.bind(var0)(var9);
    var _closure1_slot5 = var11;
    var9 = var20[var18];
    var9 = var19.bind(var0)(var9);
    var9 = var9.FirstPartyQuestTaskTypes;
    var10 = var9.WATCH_VIDEO_ON_MOBILE;
    var9 = new Array(1);
    var9[0] = var10;
    var10 = var14.bind(var0)(var9);
    var _closure1_slot6 = var10;
    var9 = var20[var18];
    var9 = var19.bind(var0)(var9);
    var9 = var9.FirstPartyQuestTaskTypes;
    var21 = var9.WATCH_VIDEO;
    var9 = new Array(2);
    var9[0] = var21;
    var18 = var20[var18];
    var18 = var19.bind(var0)(var18);
    var18 = var18.FirstPartyQuestTaskTypes;
    var18 = var18.WATCH_VIDEO_ON_MOBILE;
    var9[1] = var18;
    var9 = var14.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var18 = function arg0, arg1() {
        _fun47612: for (var _fun47612_ip = 0;;) switch (_fun47612_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var2 = var0 == var1;
                var3 = undefined;
                var4 = undefined;
                if (var2) {
                    _fun47612_ip = 59;
                    continue _fun47612
                }
            case 16:
                var2 = var1.progress;
                var1 = arg1;
                var1 = var2[var1];
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun47612_ip = 59;
                    continue _fun47612
                }
            case 38:
                var1 = var1.heartbeat;
                var2 = var0 == var1;
                var4 = undefined;
                if (var2) {
                    _fun47612_ip = 59;
                    continue _fun47612
                }
            case 53:
                var4 = var1.expiresAt;
            case 59:
                if (!(var0 != var4)) {
                    _fun47612_ip = 141;
                    continue _fun47612
                }
            case 63:
                var1 = global;
                var0 = var1.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var2;
                var5 = var4;
                var0 = new var6[var0](var5, var4);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.valueOf;
                var2 = var0.bind(var2)();
                var0 = var1.isNaN;
                var0 = var0.bind(var3)(var2);
                var0 = !var0;
                if (!var0) {
                    _fun47612_ip = 139;
                    continue _fun47612
                }
            case 120:
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var0 = var2 > var1;
            case 139:
                return var0;
            case 141:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot8 = var18;
    var18 = function arg0, arg1() {
        _fun47613: for (var _fun47613_ip = 0;;) switch (_fun47613_ip) {
            case 0:
                var2 = arg0;
                var0 = 0;
                var1 = var2 > var0;
                if (!var1) {
                    _fun47613_ip = 81;
                    continue _fun47613
                }
            case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.floor;
                var1 = global;
                var6 = var1.Math;
                var5 = var6.min;
                var1 = arg1;
                var2 = var1 / var2;
                var1 = 1;
                var2 = var5.bind(var6)(var2, var1);
                var1 = 4;
                var0 = var3.bind(var4)(var2, var1);
            case 81:
                return var0;
        }
    };
    var _closure1_slot9 = var18;
    var18 = function arg0, arg1() {
        _fun47614: for (var _fun47614_ip = 0;;) switch (_fun47614_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.userStatus;
                var0 = null;
                var3 = var0 == var1;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun47614_ip = 79;
                    continue _fun47614
                }
            case 22:
                var3 = var1.progress;
                var1 = var0 == var3;
                var4 = undefined;
                if (var1) {
                    _fun47614_ip = 79;
                    continue _fun47614
                }
            case 37:
                var1 = arg1;
                var1 = var1.type;
                var1 = var3[var1];
                var3 = var0 == var1;
                var4 = undefined;
                if (var3) {
                    _fun47614_ip = 79;
                    continue _fun47614
                }
            case 58:
                var1 = var1.heartbeat;
                var3 = var0 == var1;
                var4 = undefined;
                if (var3) {
                    _fun47614_ip = 79;
                    continue _fun47614
                }
            case 73:
                var4 = var1.lastBeatAt;
            case 79:
                if (!(var0 != var4)) {
                    _fun47614_ip = 252;
                    continue _fun47614
                }
            case 86:
                var1 = _closure1_slot21;
                var1 = var1.bind(var6)(var2);
                if (var1) {
                    _fun47614_ip = 121;
                    continue _fun47614
                }
            case 101:
                var5 = _closure1_slot3;
                var3 = var5.isProgressingOnDesktop;
                var2 = var2.id;
                var1 = var3.bind(var5)(var2);
            case 121:
                if (!var1) {
                    _fun47614_ip = 252;
                    continue _fun47614
                }
            case 127:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var3;
                var9 = var4;
                var1 = new var10[var1](var9, var8);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.valueOf;
                var1 = var1.bind(var3)();
                var4 = var2 - var1;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 2;
                var1 = var7[var3];
                var2 = var2.bind(var6)(var1);
                var1 = var2.floor;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.Millis;
                var0 = var0.SECOND;
                var0 = var4 / var0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
            case 252:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot10 = var18;
    var18 = function arg0, arg1() {
        _fun47615: for (var _fun47615_ip = 0;;) switch (_fun47615_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var0 = var2.target;
                var3 = var6.userStatus;
                var5 = null;
                var4 = var5 == var3;
                var8 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun47615_ip = 37;
                    continue _fun47615
                }
            case 31:
                var1 = var3.completedAt;
            case 37:
                if (!(var5 == var1)) {
                    _fun47615_ip = 294;
                    continue _fun47615
                }
            case 44:
                var1 = var6.userStatus;
                var4 = var5 == var1;
                var3 = undefined;
                if (var4) {
                    _fun47615_ip = 83;
                    continue _fun47615
                }
            case 59:
                var4 = var1.progress;
                var1 = var5 == var4;
                var3 = undefined;
                if (var1) {
                    _fun47615_ip = 83;
                    continue _fun47615
                }
            case 74:
                var1 = var2.type;
                var3 = var4[var1];
            case 83:
                var4 = var5 == var3;
                var1 = undefined;
                if (var4) {
                    _fun47615_ip = 97;
                    continue _fun47615
                }
            case 92:
                var1 = var3.value;
            case 97:
                if (!(var5 == var1)) {
                    _fun47615_ip = 125;
                    continue _fun47615
                }
            case 101:
                var4 = var6.userStatus;
                var7 = var5 == var4;
                var3 = undefined;
                if (var7) {
                    _fun47615_ip = 122;
                    continue _fun47615
                }
            case 116:
                var3 = var4.streamProgressSeconds;
            case 122:
                var1 = var3;
            case 125:
                var7 = var5 != var1;
                var4 = 0;
                var3 = 0;
                if (!var7) {
                    _fun47615_ip = 139;
                    continue _fun47615
                }
            case 136:
                var3 = var1;
            case 139:
                var7 = _closure1_slot7;
                var7 = var7.bind(var8)(var6);
                if (var7) {
                    _fun47615_ip = 170;
                    continue _fun47615
                }
            case 154:
                var7 = _closure1_slot10;
                var7 = var7.bind(var8)(var6, var2);
                var7 = var3 + var7;
                _fun47615_ip = 210;
                continue _fun47615;
            case 170:
                var10 = _closure1_slot3;
                var9 = var10.getOptimisticProgress;
                var6 = var6.id;
                var2 = var2.type;
                var2 = var9.bind(var10)(var6, var2);
                if (!(var5 != var2)) {
                    _fun47615_ip = 204;
                    continue _fun47615
                }
            case 200:
                if (!(var2 < var3)) {
                    _fun47615_ip = 207;
                    continue _fun47615
                }
            case 204:
                var2 = var3;
            case 207:
                var7 = var2;
            case 210:
                var2 = global;
                var6 = var2.Math;
                var5 = var6.min;
                var3 = 0.99;
                var3 = var3 * var0;
                var7 = var5.bind(var6)(var3, var7);
                var3 = var2.Math;
                var2 = var3.max;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 2;
                var1 = var1[var6];
                var5 = var5.bind(var8)(var1);
                var1 = var5.floor;
                var1 = var1.bind(var5)(var7, var6);
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            case 294:
                return var0;
        }
    };
    var _closure1_slot11 = var18;
    var18 = function arg0() {
        _fun47616: for (var _fun47616_ip = 0;;) switch (_fun47616_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.quest;
                var6 = var2.taskType;
                var2 = var2.includeTaskTypes;
                var8 = undefined;
                if (!(var2 === var8)) {
                    _fun47616_ip = 64;
                    continue _fun47616
                }
            case 29:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var8)(var3);
                var3 = var3.FirstPartyQuestTaskTypesSets;
                var2 = var3.ALL;
            case 64:
                var _closure2_slot0 = var2;
                var2 = var1.config;
                var2 = var2.taskConfigV2;
                var10 = null;
                var3 = var6;
                if (!(var10 == var3)) {
                    _fun47616_ip = 150;
                    continue _fun47616
                }
            case 88:
                var4 = global;
                var7 = var4.Object;
                var5 = var7.values;
                var4 = var2.tasks;
                var7 = var5.bind(var7)(var4);
                var5 = var7.filter;
                var4 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var4);
                var4 = 0;
                var5 = var5[var4];
                var7 = var10 == var5;
                var4 = undefined;
                if (var7) {
                    _fun47616_ip = 147;
                    continue _fun47616
                }
            case 142:
                var4 = var5.type;
            case 147:
                var3 = var4;
            case 150:
                var4 = var2.tasks;
                var9 = var4[var3];
                if (!(var10 == var9)) {
                    _fun47616_ip = 209;
                    continue _fun47616
                }
            case 164:
                var5 = var2.tasks;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 1;
                var4 = var11[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.FirstPartyQuestTaskTypes;
                var4 = var4.STREAM_ON_DESKTOP;
                var9 = var5[var4];
            case 209:
                if (!(var10 != var9)) {
                    _fun47616_ip = 409;
                    continue _fun47616
                }
            case 216:
                var7 = var9.target;
                var5 = _closure1_slot11;
                var5 = var5.bind(var8)(var1, var9);
                var9 = global;
                var12 = var9.Object;
                var11 = var12.values;
                var2 = var2.tasks;
                var12 = var11.bind(var12)(var2);
                var11 = var12.find;
                var2 = _closure1_slot22;
                var11 = var11.bind(var12)(var2);
                var12 = var10 == var11;
                var2 = undefined;
                if (var12) {
                    _fun47616_ip = 312;
                    continue _fun47616
                }
            case 282:
                var11 = var11.applications;
                var10 = var10 == var11;
                var2 = undefined;
                if (var10) {
                    _fun47616_ip = 312;
                    continue _fun47616
                }
            case 297:
                var10 = var11.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var2 = var10.bind(var11)(var0);
            case 312:
                var0 = {};
                var0.progressSeconds = var5;
                var0.targetSeconds = var7;
                var11 = var9.Math;
                var10 = var11.ceil;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 3;
                var9 = var13[var9];
                var9 = var12.bind(var8)(var9);
                var9 = var9.Seconds;
                var9 = var9.MINUTE;
                var9 = var7 / var9;
                var9 = var10.bind(var11)(var9);
                var0.targetMinutes = var9;
                var4 = _closure1_slot9;
                var4 = var4.bind(var8)(var7, var5);
                var0.percentComplete = var4;
                var0.taskType = var3;
                var0.applications = var2;
                return var0;
            case 409:
                var0 = global;
                var2 = var0.Error;
                var15 = var1.id;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var18 = 'No task with type ';
                var16 = ' found for quest ';
                var14 = '!';
                var17 = var6;
                var17 = var18[var4](var17, var16, var15, var14, var13);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot12 = var18;
    var18 = function arg0() {
        _fun47619: for (var _fun47619_ip = 0;;) switch (_fun47619_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.FirstPartyQuestTaskTypesSets;
                var2 = var0.ALL;
                var0 = var2.has;
                var2 = var0.bind(var2)(var1);
                var0 = null;
                if (!var2) {
                    _fun47619_ip = 58;
                    continue _fun47619
                }
            case 55:
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot13 = var18;
    var18 = 5;
    var18 = var20[var18];
    var20 = var19.bind(var0)(var18);
    var19 = var20.fileFinishedImporting;
    var18 = 'modules/quests/utils/QuestTaskUtils.tsx';
    var18 = var19.bind(var20)(var18);
    var18 = function arg0() {
        _fun47620: for (var _fun47620_ip = 0;;) switch (_fun47620_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun47620_ip = 13;
                    continue _fun47620
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var2 = _closure1_slot16;
                var0 = global;
                var4 = var0.Object;
                var1 = var4.keys;
                var0 = var3.config;
                var0 = var0.taskConfigV2;
                var0 = var0.tasks;
                var1 = var1.bind(var4)(var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.getAllApplicationIds = var18;
    var18 = function arg0() {
        var3 = _closure1_slot16;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.FirstPartyQuestTaskTypes;
        var0 = var0.PLAY_ON_DESKTOP;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.getDesktopApplicationIds = var18;
    var18 = function arg0() {
        _fun47622: for (var _fun47622_ip = 0;;) switch (_fun47622_ip) {
            case 0:
                var3 = _closure1_slot16;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var2 = var5[var1];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var6 = var2.PLAY_ON_XBOX;
                var2 = new Array(2);
                var2[0] = var6;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.PLAY_ON_PLAYSTATION;
                var2[1] = var1;
                var1 = arg0;
                var2 = var3.bind(var0)(var1, var2);
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun47622_ip = 98;
                    continue _fun47622
                }
            case 92:
                var1 = 0;
                var0 = var2[var1];
            case 98:
                return var0;
        }
    };
    var2.getConsoleApplicationId = var18;
    var18 = function arg0() {
        _fun47623: for (var _fun47623_ip = 0;;) switch (_fun47623_ip) {
            case 0:
                var3 = _closure1_slot16;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.PLAY_ACTIVITY;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = arg0;
                var2 = var3.bind(var0)(var1, var2);
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun47623_ip = 73;
                    continue _fun47623
                }
            case 67:
                var1 = 0;
                var0 = var2[var1];
            case 73:
                return var0;
        }
    };
    var2.getPlayActivityApplicationId = var18;
    var18 = function arg0() {
        _fun47624: for (var _fun47624_ip = 0;;) switch (_fun47624_ip) {
            case 0:
                var3 = _closure1_slot16;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 1;
                var2 = var5[var1];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var6 = var2.PLAY_ACTIVITY;
                var2 = new Array(2);
                var2[0] = var6;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.ACHIEVEMENT_IN_ACTIVITY;
                var2[1] = var1;
                var1 = arg0;
                var2 = var3.bind(var0)(var1, var2);
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun47624_ip = 98;
                    continue _fun47624
                }
            case 92:
                var1 = 0;
                var0 = var2[var1];
            case 98:
                return var0;
        }
    };
    var2.getActivityApplicationId = var18;
    var18 = function arg0() {
        _fun47625: for (var _fun47625_ip = 0;;) switch (_fun47625_ip) {
            case 0:
                var3 = _closure1_slot16;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.STREAM_ON_DESKTOP;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = arg0;
                var2 = var3.bind(var0)(var1, var2);
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun47625_ip = 73;
                    continue _fun47625
                }
            case 67:
                var1 = 0;
                var0 = var2[var1];
            case 73:
                return var0;
        }
    };
    var2.getStreamingApplicationId = var18;
    var2.hasPlayOnDesktopTask = var17;
    var17 = function arg0() {
        var0 = arg0;
        var0 = var0.quest;
        var0 = var0.config;
        var0 = var0.taskConfigV2;
        var1 = var0.tasks;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.FirstPartyQuestTaskTypes;
        var0 = var0.STREAM_ON_DESKTOP;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.hasStreamOnDesktopTask = var17;
    var2.hasPlayActivityTask = var16;
    var2.shouldUsePlayOnDesktopTask = var15;
    var2.hasSomeFirstPartyTasks = var14;
    var2.isInGameQuest = var13;
    var2.hasSomeConsoleTasks = var12;
    var2.hasWatchVideoOnDesktopTasks = var11;
    var2.hasWatchVideoOnMobileTasks = var10;
    var2.hasWatchVideoTasks = var9;
    var9 = function(arg0) { // Environment: var3
        _fun47627: for (var _fun47627_ip = 0;;) switch (_fun47627_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot6;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (!var0) {
                    _fun47627_ip = 32;
                    continue _fun47627
                }
            case 20:
                var1 = _closure1_slot5;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 32:
                return var0;
        }
    };
    var2.isMobileOnlyQuest = var9;
    var9 = function arg0() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.isConsoleQuest = var9;
    var2.isQuestProgressingOnConsole = var8;
    var8 = function arg0() {
        var0 = global;
        var2 = var0.Set;
        var3 = var0.Object;
        var1 = var3.keys;
        var0 = arg0;
        var0 = var0.config;
        var0 = var0.taskConfigV2;
        var0 = var0.tasks;
        var4 = var1.bind(var3)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getQuestTaskTypes = var8;
    var2.getDefaultWatchVideoTask = var7;
    var7 = function(arg0, arg1) { // Environment: var3
        _fun47630: for (var _fun47630_ip = 0;;) switch (_fun47630_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var0 = _closure1_slot20;
                var4 = undefined;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun47630_ip = 348;
                    continue _fun47630
                }
            case 26:
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun47630_ip = 261;
                    continue _fun47630
                }
            case 41:
                var0 = _closure1_slot7;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun47630_ip = 208;
                    continue _fun47630
                }
            case 56:
                var0 = _closure1_slot19;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun47630_ip = 153;
                    continue _fun47630
                }
            case 68:
                var0 = _closure1_slot18;
                var0 = var0.bind(var4)(var6);
                var5 = _closure1_slot12;
                var3 = {};
                var3.quest = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 1;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.FirstPartyQuestTaskTypes;
                if (var0) {
                    _fun47630_ip = 135;
                    continue _fun47630
                }
            case 117:
                var0 = var7.STREAM_ON_DESKTOP;
                var3.taskType = var0;
                var0 = var5.bind(var4)(var3);
                _fun47630_ip = 151;
                continue _fun47630;
            case 135:
                var7 = var7.PLAY_ACTIVITY;
                var3.taskType = var7;
                var0 = var5.bind(var4)(var3);
            case 151:
                _fun47630_ip = 206;
                continue _fun47630;
            case 153:
                var5 = _closure1_slot12;
                var3 = {};
                var3.quest = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 1;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.FirstPartyQuestTaskTypes;
                var7 = var7.PLAY_ON_DESKTOP;
                var3.taskType = var7;
                var0 = var5.bind(var4)(var3);
            case 206:
                _fun47630_ip = 259;
                continue _fun47630;
            case 208:
                var5 = _closure1_slot12;
                var3 = {};
                var3.quest = var6;
                var8 = _closure1_slot23;
                var7 = var6.config;
                var8 = var8.bind(var4)(var7);
                var7 = null;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun47630_ip = 249;
                    continue _fun47630
                }
            case 244:
                var7 = var8.type;
            case 249:
                var3.taskType = var7;
                var0 = var5.bind(var4)(var3);
            case 259:
                _fun47630_ip = 346;
                continue _fun47630;
            case 261:
                var3 = {};
                var3.quest = var6;
                var5 = null;
                if (!(var5 == var1)) {
                    _fun47630_ip = 329;
                    continue _fun47630
                }
            case 274:
                var5 = _closure1_slot21;
                var5 = var5.bind(var4)(var6);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 1;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.FirstPartyQuestTaskTypesSets;
                if (var5) {
                    _fun47630_ip = 320;
                    continue _fun47630
                }
            case 312:
                var5 = var6.ALL;
                _fun47630_ip = 326;
                continue _fun47630;
            case 320:
                var5 = var6.CONSOLE;
            case 326:
                var1 = var5;
            case 329:
                var3.includeTaskTypes = var1;
                var1 = function(arg0) { // Environment: var1
                    _fun47631: for (var _fun47631_ip = 0;;) switch (_fun47631_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.quest;
                            var3 = var0.includeTaskTypes;
                            var2 = undefined;
                            if (!(var3 === var2)) {
                                _fun47631_ip = 56;
                                continue _fun47631
                            }
                        case 21:
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 1;
                            var0 = var5[var0];
                            var0 = var1.bind(var2)(var0);
                            var0 = var0.FirstPartyQuestTaskTypesSets;
                            var3 = var0.ALL;
                        case 56:
                            var5 = _closure1_slot14;
                            var1 = global;
                            var7 = var1.Object;
                            var6 = var7.values;
                            var9 = var4.userStatus;
                            var8 = null;
                            var10 = var8 == var9;
                            var1 = undefined;
                            if (var10) {
                                _fun47631_ip = 99;
                                continue _fun47631
                            }
                        case 93:
                            var1 = var9.progress;
                        case 99:
                            if (!(var8 == var1)) {
                                _fun47631_ip = 105;
                                continue _fun47631
                            }
                        case 103:
                            var1 = {};
                        case 105:
                            var7 = var6.bind(var7)(var1);
                            var6 = var7.sort;
                            var1 = function(arg0, arg1) { // Environment: var1
                                _fun47632: for (var _fun47632_ip = 0;;) switch (_fun47632_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = null;
                                        var4 = var3 == var2;
                                        var5 = undefined;
                                        if (var4) {
                                            _fun47632_ip = 38;
                                            continue _fun47632
                                        }
                                    case 17:
                                        var4 = var2.heartbeat;
                                        var6 = var3 == var4;
                                        var5 = undefined;
                                        if (var6) {
                                            _fun47632_ip = 38;
                                            continue _fun47632
                                        }
                                    case 32:
                                        var5 = var4.lastBeatAt;
                                    case 38:
                                        var6 = var3 == var1;
                                        var4 = undefined;
                                        if (var6) {
                                            _fun47632_ip = 68;
                                            continue _fun47632
                                        }
                                    case 47:
                                        var6 = var1.heartbeat;
                                        var7 = var3 == var6;
                                        var4 = undefined;
                                        if (var7) {
                                            _fun47632_ip = 68;
                                            continue _fun47632
                                        }
                                    case 62:
                                        var4 = var6.lastBeatAt;
                                    case 68:
                                        if (!(var3 != var5)) {
                                            _fun47632_ip = 79;
                                            continue _fun47632
                                        }
                                    case 72:
                                        if (!(var3 == var4)) {
                                            _fun47632_ip = 261;
                                            continue _fun47632
                                        }
                                    case 79:
                                        if (!(var3 == var5)) {
                                            _fun47632_ip = 125;
                                            continue _fun47632
                                        }
                                    case 83:
                                        if (!(var3 == var4)) {
                                            _fun47632_ip = 125;
                                            continue _fun47632
                                        }
                                    case 87:
                                        var7 = var3 == var2;
                                        var6 = undefined;
                                        if (var7) {
                                            _fun47632_ip = 102;
                                            continue _fun47632
                                        }
                                    case 96:
                                        var6 = var2.updatedAt;
                                    case 102:
                                        if (!(var3 != var6)) {
                                            _fun47632_ip = 125;
                                            continue _fun47632
                                        }
                                    case 106:
                                        var6 = var3 == var1;
                                        var0 = undefined;
                                        if (var6) {
                                            _fun47632_ip = 121;
                                            continue _fun47632
                                        }
                                    case 115:
                                        var0 = var1.updatedAt;
                                    case 121:
                                        if (!(var3 == var0)) {
                                            _fun47632_ip = 156;
                                            continue _fun47632
                                        }
                                    case 125:
                                        var7 = var3 != var5;
                                        var6 = 1;
                                        var0 = var6;
                                        if (!var7) {
                                            _fun47632_ip = 154;
                                            continue _fun47632
                                        }
                                    case 138:
                                        var3 = var3 == var4;
                                        var0 = var6;
                                        if (!var3) {
                                            _fun47632_ip = 154;
                                            continue _fun47632
                                        }
                                    case 148:
                                        var0 = -1;
                                    case 154:
                                        _fun47632_ip = 259;
                                        continue _fun47632;
                                    case 156:
                                        var3 = global;
                                        var7 = var3.Date;
                                        var8 = var2.updatedAt;
                                        var6 = var7.prototype;
                                        var6 = Object.create(var6, {
                                            constructor: {
                                                value: var7
                                            }
                                        });
                                        var9 = var6;
                                        var2 = new var9[var7](var8, var7);
                                        var6 = var2 instanceof Object ? var2 : var6;
                                        var2 = var6.valueOf;
                                        var2 = var2.bind(var6)();
                                        var6 = var3.Date;
                                        var8 = var1.updatedAt;
                                        var3 = var6.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var6
                                            }
                                        });
                                        var9 = var3;
                                        var1 = new var9[var6](var8, var7);
                                        var3 = var1 instanceof Object ? var1 : var3;
                                        var1 = var3.valueOf;
                                        var1 = var1.bind(var3)();
                                        var2 = var2 > var1;
                                        var1 = 1;
                                        if (!var2) {
                                            _fun47632_ip = 256;
                                            continue _fun47632
                                        }
                                    case 250:
                                        var1 = -1;
                                    case 256:
                                        var0 = var1;
                                    case 259:
                                        _fun47632_ip = 358;
                                        continue _fun47632;
                                    case 261:
                                        var1 = global;
                                        var2 = var1.Date;
                                        var3 = var2.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var9 = var3;
                                        var8 = var5;
                                        var2 = new var9[var2](var8, var7);
                                        var3 = var2 instanceof Object ? var2 : var3;
                                        var2 = var3.valueOf;
                                        var2 = var2.bind(var3)();
                                        var1 = var1.Date;
                                        var3 = var1.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var9 = var3;
                                        var8 = var4;
                                        var1 = new var9[var1](var8, var7);
                                        var3 = var1 instanceof Object ? var1 : var3;
                                        var1 = var3.valueOf;
                                        var1 = var1.bind(var3)();
                                        var2 = var2 > var1;
                                        var1 = 1;
                                        if (!var2) {
                                            _fun47632_ip = 355;
                                            continue _fun47632
                                        }
                                    case 349:
                                        var1 = -1;
                                    case 355:
                                        var0 = var1;
                                    case 358:
                                        return var0;
                                }
                            };
                            var7 = var6.bind(var7)(var1);
                            var6 = var7.filter;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 4;
                            var1 = var10[var1];
                            var1 = var9.bind(var2)(var1);
                            var1 = var1.isNotNullish;
                            var1 = var6.bind(var7)(var1);
                            var7 = var5.bind(var2)(var1);
                            var5 = var7.bind(var2)();
                            var1 = var5.done;
                            if (var1) {
                                _fun47631_ip = 267;
                                continue _fun47631
                            }
                        case 181:
                            var1 = var5.value;
                            var6 = _closure1_slot13;
                            var1 = var1.eventName;
                            var6 = var6.bind(var2)(var1);
                            if (!(var8 != var6)) {
                                _fun47631_ip = 222;
                                continue _fun47631
                            }
                        case 205:
                            if (!(var8 != var3)) {
                                _fun47631_ip = 222;
                                continue _fun47631
                            }
                        case 209:
                            var1 = var3.has;
                            var1 = var1.bind(var3)(var6);
                            if (var1) {
                                _fun47631_ip = 239;
                                continue _fun47631
                            }
                        case 222:
                            var9 = var7.bind(var2)();
                            var1 = var9.done;
                            var5 = var9;
                            if (var1) {
                                _fun47631_ip = 267;
                                continue _fun47631
                            }
                        case 237:
                            _fun47631_ip = 181;
                            continue _fun47631;
                        case 239:
                            var5 = _closure1_slot12;
                            var1 = {};
                            var1.quest = var4;
                            var1.taskType = var6;
                            var1.includeTaskTypes = var3;
                            var1 = var5.bind(var2)(var1);
                            return var1;
                        case 267:
                            var1 = _closure1_slot12;
                            var0 = {};
                            var0.quest = var4;
                            var0.includeTaskTypes = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = var1.bind(var4)(var3);
            case 346:
                _fun47630_ip = 402;
                continue _fun47630;
            case 348:
                var1 = {
                    'progressSeconds': 0,
                    'targetSeconds': 1,
                    'targetMinutes': 1,
                    'percentComplete': 0
                };
                var5 = 1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.STREAM_ON_DESKTOP;
                var1.taskType = var2;
                var0 = var1;
            case 402:
                return var0;
        }
    };
    var2.getQuestTaskDetails = var7;
    var2.getDefaultInGameTask = var6;
    var6 = function arg0() {
        _fun47633: for (var _fun47633_ip = 0;;) switch (_fun47633_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot24;
                var0 = var2.config;
                var5 = undefined;
                var4 = var3.bind(var5)(var0);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun47633_ip = 169;
                    continue _fun47633
                }
            case 31:
                var3 = var2.userStatus;
                var6 = var0 == var3;
                var2 = undefined;
                if (var6) {
                    _fun47633_ip = 84;
                    continue _fun47633
                }
            case 46:
                var6 = var3.progress;
                var3 = var0 == var6;
                var2 = undefined;
                if (var3) {
                    _fun47633_ip = 84;
                    continue _fun47633
                }
            case 61:
                var3 = var4.type;
                var3 = var6[var3];
                var6 = var0 == var3;
                var2 = undefined;
                if (var6) {
                    _fun47633_ip = 84;
                    continue _fun47633
                }
            case 79:
                var2 = var3.value;
            case 84:
                var6 = var0 != var2;
                var3 = 0;
                if (!var6) {
                    _fun47633_ip = 96;
                    continue _fun47633
                }
            case 93:
                var3 = var2;
            case 96:
                var2 = _closure1_slot9;
                var1 = var4.target;
                var2 = var2.bind(var5)(var1, var3);
                var1 = {};
                var5 = var4.messages;
                var5 = var5.taskTitle;
                var1.title = var5;
                var5 = var4.messages;
                var5 = var5.taskDescription;
                var1.description = var5;
                var4 = var4.target;
                var1.target = var4;
                var1.progress = var3;
                var1.percentComplete = var2;
                return var1;
            case 169:
                return var0;
        }
    };
    var2.getThirdPartyTaskDetails = var6;
    var2.getRemainingTaskTime = var5;
    var2.parseMinutesAndSecondsFromSeconds = var4;
    var3 = function arg0() {
        var2 = _closure1_slot25;
        var3 = undefined;
        var0 = arg0;
        var0 = var2.bind(var3)(var0);
        var2 = _closure1_slot27;
        var1 = var0.minutes;
        var0 = var0.seconds;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.formatWatchTaskRemainingTime = var3;
    var2.formatWatchTaskTime = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5278, 5286, 22, 667, 1304, 2]);