// modules/quests/native/QuestUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun78271: for (var _fun78271_ip = 0;;) switch (_fun78271_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78271_ip = 45;
                    continue _fun78271
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun78271_ip = 54;
                    continue _fun78271
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun78271_ip = 344;
                    continue _fun78271
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78271_ip = 322;
                    continue _fun78271
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78271_ip = 282;
                    continue _fun78271
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78271_ip = 269;
                    continue _fun78271
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
                    _fun78271_ip = 162;
                    continue _fun78271
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun78271_ip = 178;
                    continue _fun78271
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78271_ip = 248;
                    continue _fun78271
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78271_ip = 248;
                    continue _fun78271
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78271_ip = 233;
                    continue _fun78271
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78271_ip = 246;
                    continue _fun78271
                }
            case 233:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun78271_ip = 264;
                continue _fun78271;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun78271_ip = 282;
                continue _fun78271;
            case 269:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun78271_ip = 322;
                    continue _fun78271
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
                    _fun78271_ip = 329;
                    continue _fun78271
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78272: for (var _fun78272_ip = 0;;) switch (_fun78272_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78272_ip = 56;
                                continue _fun78272
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
                            _fun78272_ip = 67;
                            continue _fun78272;
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
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun78273: for (var _fun78273_ip = 0;;) switch (_fun78273_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78273_ip = 23;
                    continue _fun78273
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78273_ip = 33;
                    continue _fun78273
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
                    _fun78273_ip = 70;
                    continue _fun78273
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78273_ip = 55;
                    continue _fun78273
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: openRewardClaimBottomSheet, environment: var1
        var0 = arg0;
        var8 = var0.questId;
        var7 = var0.questContent;
        var6 = var0.questContentPosition;
        var5 = var0.sourceQuestContent;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var2 = 4;
        var2 = var1[var2];
        var10 = undefined;
        var4 = var3.bind(var10)(var2);
        var3 = var4.openLazy;
        var9 = _closure1_slot0;
        var2 = 6;
        var2 = var1[var2];
        var9 = var9.bind(var10)(var2);
        var2 = 7;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var9.bind(var10)(var2, var1);
        var1 = _closure1_slot6;
        var0 = {};
        var0.questId = var8;
        var0.questContent = var7;
        var0.questContentPosition = var6;
        var0.sourceQuestContent = var5;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.QuestsExperimentLocations;
    var _closure1_slot5 = var4;
    var4 = var3.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var4;
    var3 = var3.QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot8 = var3;
    var4 = function(arg0) { // Original name: viewReward, environment: var1
        _fun78275: for (var _fun78275_ip = 0;;) switch (_fun78275_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.quest;
                var13 = var0.product;
                var5 = var0.questContent;
                var4 = var0.questContentPosition;
                var12 = var0.onSuccess;
                var3 = var0.sourceQuestContent;
                var9 = var0.orbBalancePriorToReward;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 8;
                var2 = var0[var8];
                var0 = undefined;
                var10 = var7.bind(var0)(var2);
                var7 = var10.hasQuestRewardCode;
                var2 = var6.config;
                var2 = var7.bind(var10)(var2);
                if (var2) {
                    _fun78275_ip = 215;
                    continue _fun78275
                }
            case 92:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var8 = var7.bind(var0)(var2);
                var7 = var8.hasVirtualCurrencyReward;
                var2 = var6.config;
                var2 = var7.bind(var8)(var2);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                if (var2) {
                    _fun78275_ip = 178;
                    continue _fun78275
                }
            case 136:
                var2 = 10;
                var2 = var8[var2];
                var11 = var7.bind(var0)(var2);
                var10 = var11.openQuestCollectibleRewardModal;
                var2 = {};
                var2.quest = var6;
                var2.product = var13;
                var2.onSuccess = var12;
                var2 = var10.bind(var11)(var2);
                _fun78275_ip = 251;
                continue _fun78275;
            case 178:
                var2 = 9;
                var2 = var8[var2];
                var8 = var7.bind(var0)(var2);
                var7 = var8.openQuestOrbsRewardModal;
                var2 = {};
                var2.quest = var6;
                var2.orbBalancePriorToReward = var9;
                var2 = var7.bind(var8)(var2);
                _fun78275_ip = 251;
                continue _fun78275;
            case 215:
                var2 = _closure1_slot13;
                var1 = {};
                var6 = var6.id;
                var1.questId = var6;
                var1.questContent = var5;
                var1.questContentPosition = var4;
                var1.sourceQuestContent = var3;
                var1 = var2.bind(var0)(var1);
            case 251:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun78278: for (var _fun78278_ip = 0;;) switch (_fun78278_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun78278_ip = 324;
                            continue _fun78278
                        }
                    case 13:
                        var3 = var5;
                        var6 = undefined;
                        var1 = undefined;
                        var2 = undefined;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 11;
                        var7 = var9[var7];
                        var11 = var8.bind(var6)(var7);
                        var10 = var11.getQuestLogger;
                        var7 = {};
                        var12 = _closure1_slot5;
                        var12 = var12.QUEST_HOME_MOBILE;
                        var7.location = var12;
                        var1 = var10.bind(var11)(var7);
                        var7 = 8;
                        var7 = var9[var7];
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.getDefaultPlatform;
                        var5 = var5.config;
                        var2 = var7.bind(var8)(var5);
                    case 100: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 12;
                        var5 = var10[var5];
                        var8 = var9.bind(var6)(var5);
                        var7 = var8.claimQuestReward;
                        var5 = var3.id;
                        var3 = var2;
                        var2 = 13;
                        var2 = var10[var2];
                        var2 = var9.bind(var6)(var2);
                        var2 = var2.QuestContent;
                        var2 = var2.QUEST_HOME_MOBILE;
                        var2 = var7.bind(var8)(var5, var3, var2);
                        SaveGenerator(address = 169);
                    case 167:
                        return var2;
                    case 169:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun78278_ip = 180;
                            continue _fun78278
                        }
                    case 175: // try_end0
                        var3 = true;
                        return var3;
                    case 180:
                        return var2;
                    case 183: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = var1;
                        var2 = var3.error;
                        var1 = 'Error claiming reward';
                        var1 = var2.bind(var3)(var1, var5);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 14;
                        var1 = var7[var1];
                        var3 = var5.bind(var6)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var8 = 'CLAIM_QUEST_REWARD_ERROR';
                        var1.key = var8;
                        var10 = _closure1_slot0;
                        var4 = 15;
                        var8 = var7[var4];
                        var8 = var10.bind(var6)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var4 = var7[var4];
                        var4 = var10.bind(var6)(var4);
                        var4 = var4.t;
                        var4 = var4.CKsXk3;
                        var4 = var8.bind(var9)(var4);
                        var1.content = var4;
                        var4 = 16;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        var1.icon = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 324:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun78282: for (var _fun78282_ip = 0;;) switch (_fun78282_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun78282_ip = 504;
                            continue _fun78282
                        }
                    case 13:
                        var9 = var1.quest;
                        var8 = var1.questContent;
                        var7 = var1.questContentPosition;
                        var14 = var1.product;
                        var10 = var1.hideActionSheet;
                        var4 = var1.currentUserHasVerifiedEmailOrPhone;
                        var3 = var1.currentUserHasVerifiedEmail;
                        var13 = var1.onSuccess;
                        var6 = var1.sourceQuestContent;
                        var5 = undefined;
                        SaveGenerator(address = 73);
                    case 71:
                        return var5;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun78282_ip = 501;
                            continue _fun78282
                        }
                    case 82:
                        var2 = true;
                        if (!(var2 === var10)) {
                            _fun78282_ip = 121;
                            continue _fun78282
                        }
                    case 88:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var10 = 4;
                        var10 = var12[var10];
                        var11 = var11.bind(var5)(var10);
                        var10 = var11.hideActionSheet;
                        var10 = var10.bind(var11)();
                    case 121:
                        if (!var4) {
                            _fun78282_ip = 175;
                            continue _fun78282
                        }
                    case 124:
                        if (var3) {
                            _fun78282_ip = 335;
                            continue _fun78282
                        }
                    case 130:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 8;
                        var4 = var11[var4];
                        var11 = var10.bind(var5)(var4);
                        var10 = var11.hasVirtualCurrencyReward;
                        var4 = var9.config;
                        var4 = var10.bind(var11)(var4);
                        if (!var4) {
                            _fun78282_ip = 335;
                            continue _fun78282
                        }
                    case 175:
                        if (var3) {
                            _fun78282_ip = 211;
                            continue _fun78282
                        }
                    case 178:
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 17;
                        var3 = var10[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.open;
                        var3 = var3.bind(var4)();
                    case 211:
                        var12 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var3 = 14;
                        var3 = var15[var3];
                        var10 = var12.bind(var5)(var3);
                        var4 = var10.open;
                        var3 = {};
                        var16 = 'CLAIM_QUEST_REWARD_ERROR';
                        var3.key = var16;
                        var18 = _closure1_slot0;
                        var11 = 15;
                        var16 = var15[var11];
                        var16 = var18.bind(var5)(var16);
                        var17 = var16.intl;
                        var16 = var17.string;
                        var11 = var15[var11];
                        var11 = var18.bind(var5)(var11);
                        var11 = var11.t;
                        var11 = var11["HZlu0+"];
                        var11 = var16.bind(var17)(var11);
                        var3.content = var11;
                        var11 = 16;
                        var11 = var15[var11];
                        var11 = var12.bind(var5)(var11);
                        var3.icon = var11;
                        var3 = var4.bind(var10)(var3);
                        var3 = false;
                        return var3;
                    case 335:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 8;
                        var4 = var11[var4];
                        var11 = var10.bind(var5)(var4);
                        var10 = var11.hasQuestRewardCode;
                        var4 = var9.config;
                        var4 = var10.bind(var11)(var4);
                        if (var4) {
                            _fun78282_ip = 462;
                            continue _fun78282
                        }
                    case 377:
                        var10 = _closure1_slot4;
                        var4 = var10.getCurrentBalance;
                        var12 = var4.bind(var10)();
                        var4 = _closure1_slot10;
                        var4 = var4.bind(var5)(var9);
                        SaveGenerator(address = 404);
                    case 402:
                        return var4;
                    case 404:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                        if (var10) {
                            _fun78282_ip = 459;
                            continue _fun78282
                        }
                    case 410:
                        var11 = _closure1_slot9;
                        var10 = {};
                        var10.quest = var9;
                        var10.product = var14;
                        var10.questContent = var8;
                        var10.questContentPosition = var7;
                        var10.onSuccess = var13;
                        var10.sourceQuestContent = var6;
                        var10.orbBalancePriorToReward = var12;
                        var10 = var11.bind(var5)(var10);
                        return var4;
                    case 459:
                        return var4;
                    case 462:
                        var4 = _closure1_slot13;
                        var3 = {};
                        var9 = var9.id;
                        var3.questId = var9;
                        var3.questContent = var8;
                        var3.questContentPosition = var7;
                        var3.sourceQuestContent = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 501:
                        return var1;
                    case 504:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestUtils.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Original name: openRewardDetailsBottomSheet, environment: var1
        var0 = arg0;
        var5 = var0.questId;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var2 = 4;
        var2 = var1[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.openLazy;
        var6 = _closure1_slot0;
        var2 = 6;
        var2 = var1[var2];
        var6 = var6.bind(var7)(var2);
        var2 = 5;
        var2 = var1[var2];
        var1 = var1.paths;
        var2 = var6.bind(var7)(var2, var1);
        var1 = _closure1_slot7;
        var0 = {};
        var0.questId = var5;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var2.openRewardDetailsBottomSheet = var5;
    var2.viewReward = var4;
    var2.handleRewardClaimThenView = var3;
    var3 = function() { // Environment: var1
        _fun78285: for (var _fun78285_ip = 0;;) switch (_fun78285_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun78285_ip = 13;
                    continue _fun78285
                }
            case 11:
                var2 = {};
            case 13:
                var3 = var2.scrollToQuestId;
                var _closure2_slot0 = var3;
                var3 = var2.mergeExistingRoutes;
                if (!(var3 === var0)) {
                    _fun78285_ip = 35;
                    continue _fun78285
                }
            case 33:
                var3 = false;
            case 35:
                var _closure2_slot1 = var3;
                var3 = var2.sort;
                if (!(var3 === var0)) {
                    _fun78285_ip = 51;
                    continue _fun78285
                }
            case 49:
                var3 = null;
            case 51:
                var _closure2_slot2 = var3;
                var2 = var2.filter;
                if (!(var2 === var0)) {
                    _fun78285_ip = 66;
                    continue _fun78285
                }
            case 64:
                var2 = null;
            case 66:
                var _closure2_slot3 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isMetaQuest;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun78285_ip = 154;
                    continue _fun78285
                }
            case 106:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.bind(var0)();
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    _fun78286: for (var _fun78286_ip = 0;;) switch (_fun78286_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun78286_ip = 230;
                                continue _fun78286
                            }
                        case 44:
                            var4 = var3.isReady;
                            var4 = var4.bind(var3)();
                            if (!var4) {
                                _fun78286_ip = 230;
                                continue _fun78286
                            }
                        case 60:
                            var4 = _closure2_slot1;
                            var5 = null;
                            if (!var4) {
                                _fun78286_ip = 86;
                                continue _fun78286
                            }
                        case 72:
                            var4 = function(arg0) { // Environment: var4
                                _fun78287: for (var _fun78287_ip = 0;;) switch (_fun78287_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.getRootState;
                                        var1 = var0.bind(var1)();
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun78287_ip = 67;
                                            continue _fun78287
                                        }
                                    case 21:
                                        var3 = var1.routes;
                                        if (!var3) {
                                            _fun78287_ip = 67;
                                            continue _fun78287
                                        }
                                    case 30:
                                        var3 = function(arg0) { // Original name: isQuestsRoute, environment: var2
                                            _fun78288: for (var _fun78288_ip = 0;;) switch (_fun78288_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.name;
                                                    var0 = 'settings';
                                                    var0 = var0 === var2;
                                                    if (!var0) {
                                                        _fun78288_ip = 59;
                                                        continue _fun78288
                                                    }
                                                case 19:
                                                    var1 = var1.params;
                                                    var2 = null;
                                                    var3 = var2 == var1;
                                                    var2 = undefined;
                                                    if (var3) {
                                                        _fun78288_ip = 42;
                                                        continue _fun78288
                                                    }
                                                case 36:
                                                    var2 = var1.screen;
                                                case 42:
                                                    var1 = _closure1_slot8;
                                                    var1 = var1.QUESTS;
                                                    var0 = var2 === var1;
                                                case 59:
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot0 = var3;
                                        var3 = function(arg0) { // Original name: searchRoutes, environment: var2
                                            _fun78289: for (var _fun78289_ip = 0;;) switch (_fun78289_ip) {
                                                case 0:
                                                    var1 = _closure1_slot11;
                                                    var8 = undefined;
                                                    var0 = arg0;
                                                    var7 = var1.bind(var8)(var0);
                                                    var2 = var7.bind(var8)();
                                                    var1 = var2.done;
                                                    var0 = null;
                                                    var5 = var2;
                                                    var4 = undefined;
                                                    if (var1) {
                                                        _fun78289_ip = 130;
                                                        continue _fun78289
                                                    }
                                                case 39:
                                                    var1 = var5.value;
                                                    var2 = _closure4_slot0;
                                                    var2 = var2.bind(var8)(var1);
                                                    if (var2) {
                                                        _fun78289_ip = 128;
                                                        continue _fun78289
                                                    }
                                                case 56:
                                                    var2 = var1.state;
                                                    var9 = var4;
                                                    if (!(var0 != var2)) {
                                                        _fun78289_ip = 106;
                                                        continue _fun78289
                                                    }
                                                case 68:
                                                    var2 = var2.routes;
                                                    var9 = var4;
                                                    if (!var2) {
                                                        _fun78289_ip = 106;
                                                        continue _fun78289
                                                    }
                                                case 80:
                                                    var3 = _closure4_slot1;
                                                    var2 = var1.state;
                                                    var2 = var2.routes;
                                                    var2 = var3.bind(var8)(var2);
                                                    var9 = var2;
                                                    if (var9) {
                                                        _fun78289_ip = 126;
                                                        continue _fun78289
                                                    }
                                                case 106:
                                                    var10 = var7.bind(var8)();
                                                    var3 = var10.done;
                                                    var4 = var9;
                                                    var5 = var10;
                                                    if (var3) {
                                                        _fun78289_ip = 130;
                                                        continue _fun78289
                                                    }
                                                case 124:
                                                    _fun78289_ip = 39;
                                                    continue _fun78289;
                                                case 126:
                                                    return var2;
                                                case 128:
                                                    return var1;
                                                case 130:
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot1 = var3;
                                        var2 = var1.routes;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        return var1;
                                    case 67:
                                        return var0;
                                }
                            };
                            var5 = var4.bind(var0)(var3);
                        case 86:
                            var4 = {};
                            var7 = _closure1_slot8;
                            var7 = var7.QUESTS;
                            var4.screen = var7;
                            var7 = _closure2_slot0;
                            var8 = var2 != var7;
                            var7 = '';
                            if (!var8) {
                                _fun78286_ip = 122;
                                continue _fun78286
                            }
                        case 118:
                            var7 = _closure2_slot0;
                        case 122:
                            var4.subsection = var7;
                            var7 = {};
                            var8 = _closure2_slot2;
                            var7.sort = var8;
                            var8 = _closure2_slot3;
                            var7.filter = var8;
                            var4.searchParams = var7;
                            var6 = _closure2_slot1;
                            if (!var6) {
                                _fun78286_ip = 162;
                                continue _fun78286
                            }
                        case 158:
                            if (!(var2 == var5)) {
                                _fun78286_ip = 195;
                                continue _fun78286
                            }
                        case 162:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 21;
                            var1 = var6[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openUserSettings;
                            var1 = var1.bind(var2)(var4);
                            _fun78286_ip = 230;
                            continue _fun78286;
                        case 195:
                            var2 = var3.navigate;
                            var1 = {};
                            var6 = 'settings';
                            var1.name = var6;
                            var5 = var5.key;
                            var1.key = var5;
                            var1.params = var4;
                            var1 = var2.bind(var3)(var1);
                        case 230:
                            return var0;
                    }
                };
                var1 = 1;
                var1 = var3.bind(var0)(var2, var1);
            case 154:
                return var0;
        }
    };
    var2.openQuestHome = var3;
    var3 = function(arg0) { // Environment: var1
        _fun78290: for (var _fun78290_ip = 0;;) switch (_fun78290_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 22;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.isIOS;
                var0 = var0.bind(var1)();
                var3 = var2.mimetype;
                var1 = 'video/mp4';
                var1 = var1 === var3;
                if (var0) {
                    _fun78290_ip = 81;
                    continue _fun78290
                }
            case 57:
                var0 = var1;
                if (var1) {
                    _fun78290_ip = 79;
                    continue _fun78290
                }
            case 63:
                var3 = var2.mimetype;
                var2 = 'video/webm';
                var0 = var2 === var3;
            case 79:
                _fun78290_ip = 84;
                continue _fun78290;
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var2.isHeroVideoSupported = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openURL;
        var1 = 'https://support.discord.com/hc/en-us/articles/22225719947543-Discord-Quests-FAQ#h_01HVPBZR5FBM7QBFR9KDBASXP5';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.openDiscordQuestsFAQ = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9488, 5184, 660, 3237, 9934, 1307, 9936, 5242, 9948, 9958, 5196, 5214, 5186, 3107, 1234, 7417, 7423, 4059, 7899, 3873, 5880, 478, 3103, 2]);