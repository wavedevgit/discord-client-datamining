// modules/quests/utils/QuestMatchingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function arg0, arg1() {
        _fun92774: for (var _fun92774_ip = 0;;) switch (_fun92774_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92774_ip = 46;
                    continue _fun92774
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92774_ip = 55;
                    continue _fun92774
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92774_ip = 345;
                    continue _fun92774
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92774_ip = 323;
                    continue _fun92774
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92774_ip = 283;
                    continue _fun92774
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92774_ip = 270;
                    continue _fun92774
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
                    _fun92774_ip = 163;
                    continue _fun92774
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92774_ip = 179;
                    continue _fun92774
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92774_ip = 249;
                    continue _fun92774
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92774_ip = 249;
                    continue _fun92774
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92774_ip = 234;
                    continue _fun92774
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92774_ip = 247;
                    continue _fun92774
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92774_ip = 265;
                continue _fun92774;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92774_ip = 283;
                continue _fun92774;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92774_ip = 323;
                    continue _fun92774
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
                    _fun92774_ip = 330;
                    continue _fun92774
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92775: for (var _fun92775_ip = 0;;) switch (_fun92775_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92775_ip = 56;
                                continue _fun92775
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
                            _fun92775_ip = 67;
                            continue _fun92775;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun92776: for (var _fun92776_ip = 0;;) switch (_fun92776_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92776_ip = 23;
                    continue _fun92776
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92776_ip = 33;
                    continue _fun92776
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
                    _fun92776_ip = 70;
                    continue _fun92776
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92776_ip = 55;
                    continue _fun92776
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function arg0, arg1() {
        _fun92777: for (var _fun92777_ip = 0;;) switch (_fun92777_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun92777_ip = 293;
                    continue _fun92777
                }
            case 18:
                var5 = var2.application_id;
                var1 = _closure1_slot8;
                var1 = var5 === var1;
                if (var1) {
                    _fun92777_ip = 58;
                    continue _fun92777
                }
            case 38:
                var6 = var2.platform;
                var5 = _closure1_slot7;
                var5 = var5.XBOX;
                var1 = var6 === var5;
            case 58:
                if (var1) {
                    _fun92777_ip = 186;
                    continue _fun92777
                }
            case 64:
                var5 = var2.platform;
                var1 = _closure1_slot7;
                var1 = var1.PS4;
                var1 = var5 === var1;
                if (var1) {
                    _fun92777_ip = 107;
                    continue _fun92777
                }
            case 87:
                var6 = var2.platform;
                var5 = _closure1_slot7;
                var5 = var5.PS5;
                var1 = var6 === var5;
            case 107:
                if (var1) {
                    _fun92777_ip = 186;
                    continue _fun92777
                }
            case 110:
                var1 = var3 != var7;
                if (!var1) {
                    _fun92777_ip = 130;
                    continue _fun92777
                }
            case 117:
                var6 = var7.id;
                var5 = _closure1_slot5;
                var1 = var6 === var5;
            case 130:
                if (!var1) {
                    _fun92777_ip = 147;
                    continue _fun92777
                }
            case 133:
                var6 = var2.application_id;
                var5 = _closure1_slot6;
                var1 = var6 === var5;
            case 147:
                if (var1) {
                    _fun92777_ip = 184;
                    continue _fun92777
                }
            case 150:
                var5 = var2.application_id;
                var5 = var3 != var5;
                if (!var5) {
                    _fun92777_ip = 181;
                    continue _fun92777
                }
            case 163:
                var9 = _closure1_slot13;
                var8 = var2.application_id;
                var6 = undefined;
                var5 = var9.bind(var6)(var8, var7);
            case 181:
                var1 = var5;
            case 184:
                _fun92777_ip = 290;
                continue _fun92777;
            case 186:
                var5 = var2.name;
                var2 = var5.toLowerCase;
                var5 = var2.bind(var5)();
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var8.bind(var2)(var6);
                var2 = var6.getConsoleApplicationId;
                var7 = var2.bind(var6)(var7);
                var6 = var3 == var7;
                var2 = false;
                if (var6) {
                    _fun92777_ip = 287;
                    continue _fun92777
                }
            case 243:
                var6 = _closure1_slot3;
                var4 = var6.getApplication;
                var4 = var4.bind(var6)(var7);
                var3 = var3 != var4;
                if (!var3) {
                    _fun92777_ip = 284;
                    continue _fun92777
                }
            case 265:
                var6 = var4.name;
                var4 = var6.toLowerCase;
                var4 = var4.bind(var6)();
                var3 = var5 === var4;
            case 284:
                var2 = var3;
            case 287:
                var1 = var2;
            case 290:
                var0 = var1;
            case 293:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0, arg1() {
        _fun92778: for (var _fun92778_ip = 0;;) switch (_fun92778_ip) {
            case 0:
                var9 = arg1;
                var2 = _closure1_slot9;
                var0 = undefined;
                var1 = arg0;
                var7 = var2.bind(var0)(var1);
                var2 = var7.bind(var0)();
                var1 = var2.done;
                var6 = 6;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun92778_ip = 127;
                    continue _fun92778
                }
            case 43:
                var10 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var0)(var10, var5);
                var10 = var1[var4];
                var1 = var1[var3];
                var10 = _closure1_slot11;
                var10 = var10.bind(var0)(var9, var1);
                if (!var10) {
                    _fun92778_ip = 112;
                    continue _fun92778
                }
            case 79:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var6];
                var11 = var11.bind(var0)(var10);
                var10 = var11.isQuestExpired;
                var10 = var10.bind(var11)(var1);
                if (var10) {
                    _fun92778_ip = 112;
                    continue _fun92778
                }
            case 110:
                return var1;
            case 112:
                var10 = var7.bind(var0)();
                var1 = var10.done;
                var2 = var10;
                if (!var1) {
                    _fun92778_ip = 43;
                    continue _fun92778
                }
            case 127:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = function arg0, arg1() {
        _fun92779: for (var _fun92779_ip = 0;;) switch (_fun92779_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getAllApplicationIds;
                var0 = arg1;
                var3 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun92779_ip = 75;
                    continue _fun92779
                }
            case 57:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 75:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.DISCORD_APPLICATION_ID;
    var _closure1_slot4 = var8;
    var8 = var5.PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID;
    var _closure1_slot5 = var8;
    var5 = var5.PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ActivityGamePlatforms;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.XBOX_ACTIVITY_APPLICATION_ID;
    var _closure1_slot8 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/QuestMatchingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.questMatchesActivity = var4;
    var2.getQuestByActivity = var3;
    var3 = function arg0, arg1() {
        _fun92781: for (var _fun92781_ip = 0;;) switch (_fun92781_ip) {
            case 0:
                var10 = arg1;
                var1 = _closure1_slot9;
                var8 = undefined;
                var0 = arg0;
                var7 = var1.bind(var8)(var0);
                var0 = var7.bind(var8)();
                var1 = var0.done;
                var6 = 6;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                var2 = var0;
                var0 = undefined;
                if (var1) {
                    _fun92781_ip = 135;
                    continue _fun92781
                }
            case 48:
                var11 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var8)(var11, var5);
                var11 = var1[var4];
                var11 = var1[var3];
                var1 = _closure1_slot13;
                var1 = var1.bind(var8)(var10, var11);
                if (!var1) {
                    _fun92781_ip = 118;
                    continue _fun92781
                }
            case 84:
                var12 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var12 = var12.bind(var8)(var1);
                var1 = var12.isQuestExpired;
                var1 = var1.bind(var12)(var11);
                var0 = var11;
                if (!var1) {
                    _fun92781_ip = 135;
                    continue _fun92781
                }
            case 118:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                var0 = undefined;
                if (!var1) {
                    _fun92781_ip = 48;
                    continue _fun92781
                }
            case 135:
                return var0;
        }
    };
    var2.getQuestByApplicationId = var3;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var1 = var4.values;
        var1 = var1.bind(var4)();
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun92783: for (var _fun92783_ip = 0;;) switch (_fun92783_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot13;
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var2.bind(var3)(var0, var4);
                    if (!var0) {
                        _fun92783_ip = 62;
                        continue _fun92783
                    }
                case 28:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.isQuestExpired;
                    var2 = var2.bind(var5)(var4);
                    var0 = !var2;
                case 62:
                    if (!var0) {
                        _fun92783_ip = 103;
                        continue _fun92783
                    }
                case 65:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.hasPlayOnDesktopTask;
                    var1 = {};
                    var1.quest = var4;
                    var0 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.allPlayOnDesktopQuestsByApplicationId = var3;
    var3 = function arg0, arg1() {
        _fun92784: for (var _fun92784_ip = 0;;) switch (_fun92784_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun92784_ip = 85;
                    continue _fun92784
                }
            case 12:
                if (!(var0 != var7)) {
                    _fun92784_ip = 85;
                    continue _fun92784
                }
            case 16:
                var1 = _closure1_slot9;
                var5 = undefined;
                var4 = var1.bind(var5)(var2);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                if (var1) {
                    _fun92784_ip = 83;
                    continue _fun92784
                }
            case 45:
                var2 = _closure1_slot12;
                var1 = var3.value;
                var1 = var2.bind(var5)(var7, var1);
                if (!(var0 == var1)) {
                    _fun92784_ip = 81;
                    continue _fun92784
                }
            case 64:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if (var2) {
                    _fun92784_ip = 83;
                    continue _fun92784
                }
            case 79:
                _fun92784_ip = 45;
                continue _fun92784;
            case 81:
                return var1;
            case 83:
                return var0;
            case 85:
                return var0;
        }
    };
    var2.getQuestsFromActivities = var3;
    var1 = function arg0, arg1() {
        _fun92785: for (var _fun92785_ip = 0;;) switch (_fun92785_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun92785_ip = 64;
                    continue _fun92785
                }
            case 18:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = var4.values;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun92786: for (var _fun92786_ip = 0;;) switch (_fun92786_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var0 = var1[var0];
                            var1 = undefined;
                            var2 = var2.bind(var1)(var0);
                            var0 = var2.getPlayActivityApplicationId;
                            var5 = var0.bind(var2)(var3);
                            var2 = null;
                            var0 = var2 != var3;
                            if (!var0) {
                                _fun92786_ip = 79;
                                continue _fun92786
                            }
                        case 48:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var6 = 7;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.canLaunchActivity;
                            var0 = var6.bind(var7)(var3);
                        case 79:
                            if (!var0) {
                                _fun92786_ip = 116;
                                continue _fun92786
                            }
                        case 82:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var6 = 6;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.isQuestExpired;
                            var6 = var6.bind(var7)(var3);
                            var0 = !var6;
                        case 116:
                            if (!var0) {
                                _fun92786_ip = 130;
                                continue _fun92786
                            }
                        case 119:
                            var6 = _closure2_slot0;
                            var0 = var5 === var6;
                        case 130:
                            if (!var0) {
                                _fun92786_ip = 141;
                                continue _fun92786
                            }
                        case 133:
                            var4 = _closure1_slot4;
                            var0 = var5 !== var4;
                        case 141:
                            if (!var0) {
                                _fun92786_ip = 169;
                                continue _fun92786
                            }
                        case 144:
                            var5 = var3.userStatus;
                            var6 = var2 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun92786_ip = 165;
                                continue _fun92786
                            }
                        case 159:
                            var4 = var5.completedAt;
                        case 165:
                            var0 = var2 == var4;
                        case 169:
                            if (!var0) {
                                _fun92786_ip = 197;
                                continue _fun92786
                            }
                        case 172:
                            var3 = var3.userStatus;
                            var4 = var2 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun92786_ip = 193;
                                continue _fun92786
                            }
                        case 187:
                            var1 = var3.enrolledAt;
                        case 193:
                            var0 = var2 == var1;
                        case 197:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun92785_ip = 68;
                continue _fun92785;
            case 64:
                var0 = new Array(0);
            case 68:
                return var0;
        }
    };
    var2.getEligibleQuestsForApplicationId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3415, 5193, 660, 3418, 5231, 5203, 5230, 2]);