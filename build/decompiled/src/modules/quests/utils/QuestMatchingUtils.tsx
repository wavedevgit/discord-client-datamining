// modules/quests/utils/QuestMatchingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun93158: for (var _fun93158_ip = 0;;) switch (_fun93158_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93158_ip = 45;
                    continue _fun93158
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun93158_ip = 54;
                    continue _fun93158
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun93158_ip = 344;
                    continue _fun93158
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93158_ip = 322;
                    continue _fun93158
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93158_ip = 282;
                    continue _fun93158
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93158_ip = 269;
                    continue _fun93158
                }
            case 109:
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
                    _fun93158_ip = 162;
                    continue _fun93158
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun93158_ip = 178;
                    continue _fun93158
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93158_ip = 248;
                    continue _fun93158
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93158_ip = 248;
                    continue _fun93158
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93158_ip = 233;
                    continue _fun93158
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93158_ip = 246;
                    continue _fun93158
                }
            case 233:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun93158_ip = 264;
                continue _fun93158;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun93158_ip = 282;
                continue _fun93158;
            case 269:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun93158_ip = 322;
                    continue _fun93158
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun93158_ip = 329;
                    continue _fun93158
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93159: for (var _fun93159_ip = 0;;) switch (_fun93159_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93159_ip = 56;
                                continue _fun93159
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
                            _fun93159_ip = 67;
                            continue _fun93159;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun93160: for (var _fun93160_ip = 0;;) switch (_fun93160_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93160_ip = 23;
                    continue _fun93160
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93160_ip = 33;
                    continue _fun93160
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
                    _fun93160_ip = 70;
                    continue _fun93160
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93160_ip = 55;
                    continue _fun93160
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function(arg0, arg1) { // Original name: questMatchesActivity, environment: var1
        _fun93161: for (var _fun93161_ip = 0;;) switch (_fun93161_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun93161_ip = 293;
                    continue _fun93161
                }
            case 18:
                var5 = var2.application_id;
                var1 = _closure1_slot8;
                var1 = var5 === var1;
                if (var1) {
                    _fun93161_ip = 58;
                    continue _fun93161
                }
            case 38:
                var6 = var2.platform;
                var5 = _closure1_slot7;
                var5 = var5.XBOX;
                var1 = var6 === var5;
            case 58:
                if (var1) {
                    _fun93161_ip = 186;
                    continue _fun93161
                }
            case 64:
                var5 = var2.platform;
                var1 = _closure1_slot7;
                var1 = var1.PS4;
                var1 = var5 === var1;
                if (var1) {
                    _fun93161_ip = 107;
                    continue _fun93161
                }
            case 87:
                var6 = var2.platform;
                var5 = _closure1_slot7;
                var5 = var5.PS5;
                var1 = var6 === var5;
            case 107:
                if (var1) {
                    _fun93161_ip = 186;
                    continue _fun93161
                }
            case 110:
                var1 = var3 != var7;
                if (!var1) {
                    _fun93161_ip = 130;
                    continue _fun93161
                }
            case 117:
                var6 = var7.id;
                var5 = _closure1_slot5;
                var1 = var6 === var5;
            case 130:
                if (!var1) {
                    _fun93161_ip = 147;
                    continue _fun93161
                }
            case 133:
                var6 = var2.application_id;
                var5 = _closure1_slot6;
                var1 = var6 === var5;
            case 147:
                if (var1) {
                    _fun93161_ip = 184;
                    continue _fun93161
                }
            case 150:
                var5 = var2.application_id;
                var5 = var3 != var5;
                if (!var5) {
                    _fun93161_ip = 181;
                    continue _fun93161
                }
            case 163:
                var9 = _closure1_slot13;
                var8 = var2.application_id;
                var6 = undefined;
                var5 = var9.bind(var6)(var8, var7);
            case 181:
                var1 = var5;
            case 184:
                _fun93161_ip = 290;
                continue _fun93161;
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
                    _fun93161_ip = 287;
                    continue _fun93161
                }
            case 243:
                var6 = _closure1_slot3;
                var4 = var6.getApplication;
                var4 = var4.bind(var6)(var7);
                var3 = var3 != var4;
                if (!var3) {
                    _fun93161_ip = 284;
                    continue _fun93161
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
    var3 = function(arg0, arg1) { // Original name: getQuestByActivity, environment: var1
        _fun93162: for (var _fun93162_ip = 0;;) switch (_fun93162_ip) {
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
                    _fun93162_ip = 127;
                    continue _fun93162
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
                    _fun93162_ip = 112;
                    continue _fun93162
                }
            case 79:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var6];
                var11 = var11.bind(var0)(var10);
                var10 = var11.isQuestExpired;
                var10 = var10.bind(var11)(var1);
                if (var10) {
                    _fun93162_ip = 112;
                    continue _fun93162
                }
            case 110:
                return var1;
            case 112:
                var10 = var7.bind(var0)();
                var1 = var10.done;
                var2 = var10;
                if (!var1) {
                    _fun93162_ip = 43;
                    continue _fun93162
                }
            case 127:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = function(arg0, arg1) { // Original name: questMatchesApplicationId, environment: var1
        _fun93163: for (var _fun93163_ip = 0;;) switch (_fun93163_ip) {
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
                    _fun93163_ip = 75;
                    continue _fun93163
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
    var3 = function(arg0, arg1) { // Original name: getQuestByApplicationId, environment: var1
        _fun93165: for (var _fun93165_ip = 0;;) switch (_fun93165_ip) {
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
                    _fun93165_ip = 135;
                    continue _fun93165
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
                    _fun93165_ip = 118;
                    continue _fun93165
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
                    _fun93165_ip = 135;
                    continue _fun93165
                }
            case 118:
                var11 = var7.bind(var8)();
                var1 = var11.done;
                var2 = var11;
                var0 = undefined;
                if (!var1) {
                    _fun93165_ip = 48;
                    continue _fun93165
                }
            case 135:
                return var0;
        }
    };
    var2.getQuestByApplicationId = var3;
    var3 = function(arg0, arg1) { // Original name: allPlayOnDesktopQuestsByApplicationId, environment: var1
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
            _fun93167: for (var _fun93167_ip = 0;;) switch (_fun93167_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot13;
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var2.bind(var3)(var0, var4);
                    if (!var0) {
                        _fun93167_ip = 62;
                        continue _fun93167
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
                        _fun93167_ip = 103;
                        continue _fun93167
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
    var3 = function(arg0, arg1) { // Original name: getQuestsFromActivities, environment: var1
        _fun93168: for (var _fun93168_ip = 0;;) switch (_fun93168_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun93168_ip = 85;
                    continue _fun93168
                }
            case 12:
                if (!(var0 != var7)) {
                    _fun93168_ip = 85;
                    continue _fun93168
                }
            case 16:
                var1 = _closure1_slot9;
                var5 = undefined;
                var4 = var1.bind(var5)(var2);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                if (var1) {
                    _fun93168_ip = 83;
                    continue _fun93168
                }
            case 45:
                var2 = _closure1_slot12;
                var1 = var3.value;
                var1 = var2.bind(var5)(var7, var1);
                if (!(var0 == var1)) {
                    _fun93168_ip = 81;
                    continue _fun93168
                }
            case 64:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if (var2) {
                    _fun93168_ip = 83;
                    continue _fun93168
                }
            case 79:
                _fun93168_ip = 45;
                continue _fun93168;
            case 81:
                return var1;
            case 83:
                return var0;
            case 85:
                return var0;
        }
    };
    var2.getQuestsFromActivities = var3;
    var1 = function(arg0, arg1) { // Original name: getEligibleQuestsForApplicationId, environment: var1
        _fun93169: for (var _fun93169_ip = 0;;) switch (_fun93169_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun93169_ip = 64;
                    continue _fun93169
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
                    _fun93170: for (var _fun93170_ip = 0;;) switch (_fun93170_ip) {
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
                                _fun93170_ip = 79;
                                continue _fun93170
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
                                _fun93170_ip = 116;
                                continue _fun93170
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
                                _fun93170_ip = 130;
                                continue _fun93170
                            }
                        case 119:
                            var6 = _closure2_slot0;
                            var0 = var5 === var6;
                        case 130:
                            if (!var0) {
                                _fun93170_ip = 141;
                                continue _fun93170
                            }
                        case 133:
                            var4 = _closure1_slot4;
                            var0 = var5 !== var4;
                        case 141:
                            if (!var0) {
                                _fun93170_ip = 169;
                                continue _fun93170
                            }
                        case 144:
                            var5 = var3.userStatus;
                            var6 = var2 == var5;
                            var4 = undefined;
                            if (var6) {
                                _fun93170_ip = 165;
                                continue _fun93170
                            }
                        case 159:
                            var4 = var5.completedAt;
                        case 165:
                            var0 = var2 == var4;
                        case 169:
                            if (!var0) {
                                _fun93170_ip = 197;
                                continue _fun93170
                            }
                        case 172:
                            var3 = var3.userStatus;
                            var4 = var2 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun93170_ip = 193;
                                continue _fun93170
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
                _fun93169_ip = 68;
                continue _fun93169;
            case 64:
                var0 = new Array(0);
            case 68:
                return var0;
        }
    };
    var2.getEligibleQuestsForApplicationId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3413, 5184, 660, 3416, 5222, 5194, 5221, 2]);