// modules/quests/utils/QuestRewardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function(arg0) { // Original name: getCollectiblesQuestReward, environment: var1
        _fun47055: for (var _fun47055_ip = 0;;) switch (_fun47055_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.rewardsConfig;
                var2 = var0.rewards;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.QuestRewardTypes;
                    var0 = var0.COLLECTIBLE;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var5 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun47055_ip = 50;
                    continue _fun47055
                }
            case 45:
                var3 = var1.type;
            case 50:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.COLLECTIBLE;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun47055_ip = 94;
                    continue _fun47055
                }
            case 91:
                var0 = var1;
            case 94:
                return var0;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function(arg0) { // Original name: hasFractionalPremiumQuestReward, environment: var1
        var0 = arg0;
        var0 = var0.rewardsConfig;
        var2 = var0.rewards;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.QuestRewardTypes;
            var0 = var0.FRACTIONAL_PREMIUM;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var4;
    var3 = function(arg0) { // Original name: isCollectibleQuestRewardPremiumExtendable, environment: var1
        _fun47059: for (var _fun47059_ip = 0;;) switch (_fun47059_ip) {
            case 0:
                var2 = _closure1_slot4;
                var3 = undefined;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var4 = var0 == var2;
                if (var4) {
                    _fun47059_ip = 32;
                    continue _fun47059
                }
            case 26:
                var3 = var2.expirationMode;
            case 32:
                var0 = var0 != var3;
                if (!var0) {
                    _fun47059_ip = 53;
                    continue _fun47059
                }
            case 39:
                var2 = _closure1_slot3;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 53:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = function(arg0, arg1) { // Original name: _getDefaultRewardName, environment: var1
        _fun47060: for (var _fun47060_ip = 0;;) switch (_fun47060_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot5;
                var3 = undefined;
                var0 = var0.bind(var3)(var2);
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                if (var0) {
                    _fun47060_ip = 78;
                    continue _fun47060
                }
            case 28:
                var0 = 7;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.getDefaultReward;
                var0 = var0.bind(var5)(var2);
                var5 = var0.messages;
                var0 = arg1;
                if (var0) {
                    _fun47060_ip = 70;
                    continue _fun47060
                }
            case 63:
                var0 = var5.name;
                _fun47060_ip = 76;
                continue _fun47060;
            case 70:
                var0 = var5.nameWithArticle;
            case 76:
                return var0;
            case 78:
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getFractionalPremiumQuestRewardName;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var9);
    var0 = 0;
    var10 = var8[var0];
    var9 = arg2;
    var0 = undefined;
    var9 = var9.bind(var0)(var10);
    var _closure1_slot2 = var9;
    var10 = var6.Set;
    var9 = 1;
    var6 = var8[var9];
    var6 = var7.bind(var0)(var6);
    var6 = var6.QuestRewardExpirationMode;
    var11 = var6.PREMIUM_EXTENSION;
    var6 = new Array(2);
    var6[0] = var11;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var9 = var9.QuestRewardExpirationMode;
    var9 = var9.PREMIUM_PERMANENT;
    var6[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var15 = var9;
    var14 = var6;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot3 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestRewardUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getCollectiblesQuestReward = var5;
    var5 = function(arg0) { // Original name: getCollectibleQuestRewardExtendableExpirationDate, environment: var1
        _fun47061: for (var _fun47061_ip = 0;;) switch (_fun47061_ip) {
            case 0:
                var1 = _closure1_slot4;
                var4 = undefined;
                var0 = arg0;
                var1 = var1.bind(var4)(var0);
                var5 = null;
                var3 = var5 != var1;
                var0 = null;
                if (!var3) {
                    _fun47061_ip = 93;
                    continue _fun47061
                }
            case 28:
                var3 = 'expiresAtPremium';
                var3 = var3 in var1;
                var0 = null;
                if (!var3) {
                    _fun47061_ip = 93;
                    continue _fun47061
                }
            case 41:
                var3 = var1.expiresAtPremium;
                var3 = var5 != var3;
                var0 = null;
                if (!var3) {
                    _fun47061_ip = 93;
                    continue _fun47061
                }
            case 56:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getQuestFormattedDate;
                var1 = var1.expiresAtPremium;
                var0 = var2.bind(var3)(var1);
            case 93:
                return var0;
        }
    };
    var2.getCollectibleQuestRewardExtendableExpirationDate = var5;
    var5 = function(arg0) { // Original name: getCollectibleQuestRewardDuration, environment: var1
        _fun47062: for (var _fun47062_ip = 0;;) switch (_fun47062_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot4;
                var6 = undefined;
                var2 = var0.bind(var6)(var4);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun47062_ip = 552;
                    continue _fun47062
                }
            case 26:
                var3 = 'expiresAt';
                var3 = var3 in var2;
                if (!var3) {
                    _fun47062_ip = 552;
                    continue _fun47062
                }
            case 40:
                var3 = var2.expiresAt;
                if (!(var0 != var3)) {
                    _fun47062_ip = 552;
                    continue _fun47062
                }
            case 53:
                var3 = global;
                var7 = var3.Date;
                var14 = var4.expiresAt;
                var5 = var7.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = var5;
                var4 = new var15[var7](var14, var13);
                var9 = var4 instanceof Object ? var4 : var5;
                var5 = var3.Date;
                var14 = var2.expiresAt;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var15 = var4;
                var2 = new var15[var5](var14, var13);
                var8 = var2 instanceof Object ? var2 : var4;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var10 = 4;
                var2 = var2[var10];
                var4 = var4.bind(var6)(var2);
                var2 = var4.differenceInDays;
                var4 = var2.bind(var4)(var8, var9);
                var11 = var3.Math;
                var7 = var11.floor;
                var2 = 30;
                var5 = var4 / var2;
                var5 = var7.bind(var11)(var5);
                var11 = var4 % var2;
                var4 = 0;
                var7 = 25;
                var2 = 0;
                if (!(var11 >= var7)) {
                    _fun47062_ip = 193;
                    continue _fun47062
                }
            case 190:
                var2 = 1;
            case 193:
                var5 = var5 + var2;
                var2 = 12;
                if (!(!(var5 >= var2))) {
                    _fun47062_ip = 466;
                    continue _fun47062
                }
            case 207:
                if (!(!(var5 > var4))) {
                    _fun47062_ip = 401;
                    continue _fun47062
                }
            case 214:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var10];
                var7 = var7.bind(var6)(var4);
                var4 = var7.differenceInDays;
                var9 = var4.bind(var7)(var8, var9);
                var4 = 7;
                if (!(!(var9 >= var4))) {
                    _fun47062_ip = 315;
                    continue _fun47062
                }
            case 250:
                var8 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 5;
                var10 = var12[var7];
                var10 = var8.bind(var6)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var12[var7];
                var7 = var8.bind(var6)(var7);
                var7 = var7.t;
                var8 = var7["k2UNz+"];
                var7 = {};
                var7.days = var9;
                var7 = var10.bind(var11)(var8, var7);
                return var7;
            case 315:
                var8 = var3.Math;
                var7 = var8.ceil;
                var4 = var9 / var4;
                var10 = var7.bind(var8)(var4);
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 5;
                var8 = var11[var4];
                var8 = var7.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var4 = var11[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4.EmoBD2;
                var4 = {};
                var4.weeks = var10;
                var4 = var8.bind(var9)(var7, var4);
                return var4;
            case 401:
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 5;
                var8 = var10[var4];
                var8 = var7.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var4 = var10[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4.kridzK;
                var4 = {};
                var4.months = var5;
                var4 = var8.bind(var9)(var7, var4);
                return var4;
            case 466:
                var4 = var3.Math;
                var3 = var4.floor;
                var2 = var5 / var2;
                var5 = var3.bind(var4)(var2);
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.PClsrw;
                var1 = {};
                var1.years = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 552:
                return var0;
        }
    };
    var2.getCollectibleQuestRewardDuration = var5;
    var2.hasFractionalPremiumQuestReward = var4;
    var4 = function(arg0) { // Original name: hasVirtualCurrencyReward, environment: var1
        var0 = arg0;
        var0 = var0.rewardsConfig;
        var2 = var0.rewards;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.QuestRewardTypes;
            var0 = var0.VIRTUAL_CURRENCY;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasVirtualCurrencyReward = var4;
    var4 = function(arg0) { // Original name: hasCollectiblesQuestReward, environment: var1
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.hasCollectiblesQuestReward = var4;
    var4 = function(arg0) { // Original name: hasInGameQuestReward, environment: var1
        var0 = arg0;
        var0 = var0.rewardsConfig;
        var2 = var0.rewards;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.QuestRewardTypes;
            var0 = var0.IN_GAME;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasInGameQuestReward = var4;
    var4 = function(arg0) { // Original name: hasQuestRewardCode, environment: var1
        var0 = arg0;
        var0 = var0.rewardsConfig;
        var2 = var0.rewards;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 2;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.QuestRewardTypes;
            var0 = var0.REWARD_CODE;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasQuestRewardCode = var4;
    var4 = function(arg0) { // Original name: getInGameQuestReward, environment: var1
        _fun47070: for (var _fun47070_ip = 0;;) switch (_fun47070_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.rewardsConfig;
                var2 = var0.rewards;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.QuestRewardTypes;
                    var0 = var0.IN_GAME;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun47070_ip = 44;
                    continue _fun47070
                }
            case 41:
                var0 = var1;
            case 44:
                return var0;
        }
    };
    var2.getInGameQuestReward = var4;
    var4 = function(arg0) { // Original name: getCollectiblesQuestRewardItem, environment: var1
        _fun47072: for (var _fun47072_ip = 0;;) switch (_fun47072_ip) {
            case 0:
                var2 = _closure1_slot4;
                var4 = undefined;
                var0 = arg0;
                var2 = var2.bind(var4)(var0);
                var0 = null;
                var5 = var0 == var2;
                var3 = undefined;
                if (var5) {
                    _fun47072_ip = 34;
                    continue _fun47072
                }
            case 28:
                var3 = var2.skuId;
            case 34:
                var2 = _closure1_slot2;
                var1 = var2.getProduct;
                var2 = var1.bind(var2)(var3);
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun47072_ip = 79;
                    continue _fun47072
                }
            case 58:
                var3 = var2.items;
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun47072_ip = 79;
                    continue _fun47072
                }
            case 73:
                var2 = 0;
                var1 = var3[var2];
            case 79:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun47072_ip = 91;
                    continue _fun47072
                }
            case 88:
                var0 = var1;
            case 91:
                return var0;
        }
    };
    var2.getCollectiblesQuestRewardItem = var4;
    var4 = function(arg0) { // Original name: getVirtualCurrencyRewardOrbQuantity, environment: var1
        _fun47073: for (var _fun47073_ip = 0;;) switch (_fun47073_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.rewardsConfig;
                var2 = var0.rewards;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.QuestRewardTypes;
                    var0 = var0.VIRTUAL_CURRENCY;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun47073_ip = 49;
                    continue _fun47073
                }
            case 43:
                var0 = var1.orbQuantity;
            case 49:
                return var0;
        }
    };
    var2.getVirtualCurrencyRewardOrbQuantity = var4;
    var2.isCollectibleQuestRewardPremiumExtendable = var3;
    var3 = function(arg0) { // Original name: isCollectibleQuestRewardPermanentWithPremiumSubscription, environment: var1
        _fun47075: for (var _fun47075_ip = 0;;) switch (_fun47075_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot6;
                var4 = undefined;
                var0 = var0.bind(var4)(var3);
                if (!var0) {
                    _fun47075_ip = 82;
                    continue _fun47075
                }
            case 20:
                var2 = _closure1_slot4;
                var3 = var2.bind(var4)(var3);
                var2 = null;
                var5 = var2 == var3;
                var2 = undefined;
                if (var5) {
                    _fun47075_ip = 46;
                    continue _fun47075
                }
            case 40:
                var2 = var3.expirationMode;
            case 46:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardExpirationMode;
                var1 = var1.PREMIUM_PERMANENT;
                var0 = var2 === var1;
            case 82:
                return var0;
        }
    };
    var2.isCollectibleQuestRewardPermanentWithPremiumSubscription = var3;
    var3 = function(arg0) { // Original name: getQuestPrimaryReward, environment: var1
        _fun47076: for (var _fun47076_ip = 0;;) switch (_fun47076_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.userStatus;
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun47076_ip = 26;
                    continue _fun47076
                }
            case 20:
                var0 = var3.claimedTier;
            case 26:
                var3 = var2 != var0;
                var2 = 0;
                if (!var3) {
                    _fun47076_ip = 38;
                    continue _fun47076
                }
            case 35:
                var2 = var0;
            case 38:
                var3 = var1.config;
                var0 = 'rewardsConfig';
                var0 = var0 in var3;
                var1 = var1.config;
                if (var0) {
                    _fun47076_ip = 71;
                    continue _fun47076
                }
            case 59:
                var0 = var1.rewards;
                var0 = var0[var2];
                _fun47076_ip = 87;
                continue _fun47076;
            case 71:
                var1 = var1.rewardsConfig;
                var1 = var1.rewards;
                var0 = var1[var2];
            case 87:
                return var0;
        }
    };
    var2.getQuestPrimaryReward = var3;
    var3 = function(arg0) { // Original name: getDefaultRewardName, environment: var1
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var0 = false;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.getDefaultRewardName = var3;
    var3 = function(arg0) { // Original name: getDefaultRewardNameWithArticle, environment: var1
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var0 = true;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.getDefaultRewardNameWithArticle = var3;
    var3 = function(arg0) { // Original name: getRewardCodeQuestReward, environment: var1
        _fun47079: for (var _fun47079_ip = 0;;) switch (_fun47079_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.quest;
                var2 = var0.idx;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun47079_ip = 95;
                    continue _fun47079
                }
            case 21:
                var1 = var1.config;
                var1 = var1.rewardsConfig;
                var1 = var1.rewards;
                var2 = var1[var2];
                var4 = var2.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var3 = var1.REWARD_CODE;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun47079_ip = 93;
                    continue _fun47079
                }
            case 90:
                var1 = var2;
            case 93:
                return var1;
            case 95:
                return var0;
        }
    };
    var2.getRewardCodeQuestReward = var3;
    var3 = function(arg0) { // Original name: isTieredRewardCodeQuest, environment: var1
        _fun47080: for (var _fun47080_ip = 0;;) switch (_fun47080_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.quest;
                var0 = var0.config;
                var1 = var0.rewardsConfig;
                var2 = var1.assignmentMethod;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.QuestRewardAssignmentMethods;
                var0 = var0.TIERED;
                var0 = var2 === var0;
                if (!var0) {
                    _fun47080_ip = 87;
                    continue _fun47080
                }
            case 70:
                var2 = var1.rewards;
                var3 = var2.length;
                var2 = 0;
                var0 = var3 > var2;
            case 87:
                if (!var0) {
                    _fun47080_ip = 114;
                    continue _fun47080
                }
            case 90:
                var3 = var1.rewards;
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.QuestRewardTypes;
                    var0 = var0.REWARD_CODE;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 114:
                return var0;
        }
    };
    var2.isTieredRewardCodeQuest = var3;
    var3 = function(arg0) { // Original name: getDefaultPlatform, environment: var1
        _fun47082: for (var _fun47082_ip = 0;;) switch (_fun47082_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.rewardsConfig;
                var2 = var0.platforms;
                var0 = var2.length;
                var1 = 0;
                if (!(!(var0 > var1))) {
                    _fun47082_ip = 65;
                    continue _fun47082
                }
            case 26:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.QuestRewardCodePlatforms;
                var0 = var0.CROSS_PLATFORM;
                _fun47082_ip = 69;
                continue _fun47082;
            case 65:
                var0 = var2[var1];
            case 69:
                return var0;
        }
    };
    var2.getDefaultPlatform = var3;
    var1 = function(arg0) { // Environment: var1
        _fun47083: for (var _fun47083_ip = 0;;) switch (_fun47083_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 9;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardCodePlatforms;
                var1 = var1.XBOX;
                if (!(var1 !== var2)) {
                    _fun47083_ip = 423;
                    continue _fun47083
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardCodePlatforms;
                var1 = var1.PLAYSTATION;
                if (!(var1 !== var2)) {
                    _fun47083_ip = 364;
                    continue _fun47083
                }
            case 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardCodePlatforms;
                var1 = var1.SWITCH;
                if (!(var1 !== var2)) {
                    _fun47083_ip = 305;
                    continue _fun47083
                }
            case 119:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardCodePlatforms;
                var1 = var1.PC;
                if (!(var1 !== var2)) {
                    _fun47083_ip = 246;
                    continue _fun47083
                }
            case 152:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.QuestRewardCodePlatforms;
                var1 = var1.CROSS_PLATFORM;
                if (!(var1 !== var2)) {
                    _fun47083_ip = 187;
                    continue _fun47083
                }
            case 185:
                return var4;
            case 187:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.UWVbzV;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 246:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["YK+wUg"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 305:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["1pp0su"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 364:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["6IeKx2"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 423:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.G84UWZ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getPlatformString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4561, 5249, 5199, 5200, 2678, 1234, 5250, 5251, 5258, 5192, 2]);