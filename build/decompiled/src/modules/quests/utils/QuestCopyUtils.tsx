// modules/quests/utils/QuestCopyUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.QuestHomeSortMethods;
    var _closure1_slot2 = var4;
    var4 = var3.RewardFilterTypes;
    var _closure1_slot3 = var4;
    var3 = var3.TaskFilterTypes;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        var0 = global;
        var1 = var0.location;
        var11 = var1.protocol;
        var1 = var0.location;
        var9 = var1.host;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var12 = '';
        var10 = '//';
        var8 = '/quests/';
        var7 = arg0;
        var0 = var12[var4](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot5 = var3;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/utils/QuestCopyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun47292: for (var _fun47292_ip = 0;;) switch (_fun47292_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.quest;
                var1 = var0.taskDetails;
                var0 = var0.thirdPartyTaskDetails;
                var5 = var8.userStatus;
                var2 = null;
                var6 = var2 == var5;
                var4 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun47292_ip = 46;
                    continue _fun47292
                }
            case 40:
                var3 = var5.completedAt;
            case 46:
                if (!(var2 == var3)) {
                    _fun47292_ip = 479;
                    continue _fun47292
                }
            case 53:
                var5 = var8.userStatus;
                var6 = var2 == var5;
                var3 = undefined;
                if (var6) {
                    _fun47292_ip = 74;
                    continue _fun47292
                }
            case 68:
                var3 = var5.enrolledAt;
            case 74:
                if (!(var2 == var3)) {
                    _fun47292_ip = 163;
                    continue _fun47292
                }
            case 78:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 1;
                var6 = var9[var3];
                var6 = var5.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var3 = var9[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var5 = var3.EQa7os;
                var3 = {};
                var8 = var8.config;
                var8 = var8.messages;
                var8 = var8.questName;
                var3.questName = var8;
                var3 = var6.bind(var7)(var5, var3);
                return var3;
            case 163:
                var1 = var1.percentComplete;
                if (!(var2 != var0)) {
                    _fun47292_ip = 179;
                    continue _fun47292
                }
            case 173:
                var1 = var0.percentComplete;
            case 179:
                var0 = 0.75;
                if (!(!(var1 >= var0))) {
                    _fun47292_ip = 417;
                    continue _fun47292
                }
            case 196:
                var0 = 0.45;
                if (!(var1 >= var0)) {
                    _fun47292_ip = 227;
                    continue _fun47292
                }
            case 210:
                var0 = 0.55;
                if (!(!(var1 <= var0))) {
                    _fun47292_ip = 355;
                    continue _fun47292
                }
            case 227:
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun47292_ip = 293;
                    continue _fun47292
                }
            case 233:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["7e5k7L"];
                var0 = var1.bind(var2)(var0);
                _fun47292_ip = 353;
                continue _fun47292;
            case 293:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.JMbfnc;
                var0 = var2.bind(var3)(var1);
            case 353:
                _fun47292_ip = 415;
                continue _fun47292;
            case 355:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.JNx8sG;
                var0 = var2.bind(var3)(var1);
            case 415:
                _fun47292_ip = 477;
                continue _fun47292;
            case 417:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gvCR4H;
                var0 = var2.bind(var3)(var1);
            case 477:
                return var0;
            case 479:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.BzFeTF;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getContextualEntrypointHeading = var4;
    var4 = function arg0() {
        _fun47293: for (var _fun47293_ip = 0;;) switch (_fun47293_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.isTargetedDisclosure;
                var0 = var2.isVideoQuest;
                var6 = var2.gamePublisher;
                var9 = var2.gameTitle;
                var5 = var2.cosponsorName;
                if (var1) {
                    _fun47293_ip = 230;
                    continue _fun47293
                }
            case 39:
                if (!var0) {
                    _fun47293_ip = 86;
                    continue _fun47293
                }
            case 42:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 1;
                var0 = var0[var8];
                var7 = undefined;
                var0 = var2.bind(var7)(var0);
                var0 = var0.intl;
                var2 = var0.currentLocale;
                var0 = 'en-US';
                if (!(var0 !== var2)) {
                    _fun47293_ip = 163;
                    continue _fun47293
                }
            case 86:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 1;
                var3 = var11[var0];
                var2 = undefined;
                var3 = var10.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var11[var0];
                var0 = var10.bind(var2)(var0);
                var0 = var0.t;
                var2 = var0["5bQWNG"];
                var0 = {};
                var0.gamePublisher = var6;
                var0.gameTitle = var9;
                var0 = var3.bind(var4)(var2, var0);
                _fun47293_ip = 225;
                continue _fun47293;
            case 163:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var8];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var8];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.rctMRl;
                var1 = {};
                var1.gamePublisher = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 225:
                _fun47293_ip = 386;
                continue _fun47293;
            case 230:
                var1 = null;
                if (!(var1 != var5)) {
                    _fun47293_ip = 313;
                    continue _fun47293
                }
            case 236:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.DV47Gy;
                var1 = {};
                var1.gamePublisher = var6;
                var1.cosponsorName = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun47293_ip = 383;
                continue _fun47293;
            case 313:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 1;
                var4 = var8[var2];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.Piihy1;
                var2 = {};
                var2.gamePublisher = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 383:
                var0 = var1;
            case 386:
                return var0;
        }
    };
    var2.getDisclosureText = var4;
    var4 = function arg0() {
        var0 = arg0;
        var0 = var0.config;
        var0 = var0.ctaConfig;
        var0 = var0.buttonLabel;
        return var0;
    };
    var2.getExternalCtaLabel = var4;
    var4 = function arg0() {
        _fun47295: for (var _fun47295_ip = 0;;) switch (_fun47295_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.SUGGESTED;
                if (!(var1 !== var2)) {
                    _fun47295_ip = 255;
                    continue _fun47295
                }
            case 23:
                var1 = _closure1_slot2;
                var1 = var1.MOST_RECENT;
                if (!(var1 !== var2)) {
                    _fun47295_ip = 194;
                    continue _fun47295
                }
            case 40:
                var1 = _closure1_slot2;
                var1 = var1.EXPIRING_SOON;
                if (!(var1 !== var2)) {
                    _fun47295_ip = 133;
                    continue _fun47295
                }
            case 54:
                var1 = _closure1_slot2;
                var1 = var1.RECENTLY_ENROLLED;
                if (!(var1 !== var2)) {
                    _fun47295_ip = 72;
                    continue _fun47295
                }
            case 68:
                var1 = undefined;
                return var1;
            case 72:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["BB+2tX"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 133:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.IB22n3;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 194:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.K6oEu2;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 255:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.gBfXPZ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getSortMethodText = var4;
    var4 = function arg0() {
        _fun47296: for (var _fun47296_ip = 0;;) switch (_fun47296_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var1 = var1.VIRTUAL_CURRENCY;
                if (!(var1 !== var2)) {
                    _fun47296_ip = 333;
                    continue _fun47296
                }
            case 23:
                var1 = _closure1_slot3;
                var1 = var1.COLLECTIBLE;
                if (!(var1 !== var2)) {
                    _fun47296_ip = 272;
                    continue _fun47296
                }
            case 40:
                var1 = _closure1_slot3;
                var1 = var1.IN_GAME;
                if (!(var1 !== var2)) {
                    _fun47296_ip = 211;
                    continue _fun47296
                }
            case 57:
                var1 = _closure1_slot4;
                var1 = var1.VIDEO;
                if (!(var1 !== var2)) {
                    _fun47296_ip = 150;
                    continue _fun47296
                }
            case 71:
                var1 = _closure1_slot4;
                var1 = var1.PLAY;
                if (!(var1 !== var2)) {
                    _fun47296_ip = 89;
                    continue _fun47296
                }
            case 85:
                var1 = undefined;
                return var1;
            case 89:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["1nJR4p"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 150:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.e0iISA;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 211:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["O/J2kr"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 272:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Jg17Ut;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 333:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ElYQFS;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getFilterTypeText = var4;
    var4 = function arg0() {
        _fun47297: for (var _fun47297_ip = 0;;) switch (_fun47297_ip) {
            case 0:
                var1 = arg0;
                var0 = 'reward';
                if (!(var0 !== var1)) {
                    _fun47297_ip = 87;
                    continue _fun47297
                }
            case 11:
                var0 = 'task';
                if (!(var0 !== var1)) {
                    _fun47297_ip = 23;
                    continue _fun47297
                }
            case 19:
                var0 = undefined;
                return var0;
            case 23:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Hufmss;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 87:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.vjLqAU;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getFilterGroupHeadingText = var4;
    var2.getQuestUrl = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.ctaConfig;
        var0 = var0.link;
        return var0;
    };
    var2.getCtaLink = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var4 = arg0;
        var8 = arg1;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var2 = var5[var0];
        var0 = undefined;
        var7 = var3.bind(var0)(var2);
        var6 = var7.trackQuestContentClicked;
        var2 = {};
        var2.questId = var4;
        var9 = var8.content;
        var2.questContent = var9;
        var9 = var8.ctaContent;
        var2.questContentCTA = var9;
        var9 = var8.position;
        var2.questContentPosition = var9;
        var9 = var8.impressionId;
        var2.impressionId = var9;
        var8 = var8.sourceQuestContent;
        var2.sourceQuestContent = var8;
        var2 = var6.bind(var7)(var2);
        var2 = 3;
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.copy;
        var1 = _closure1_slot5;
        var1 = var1.bind(var0)(var4);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.copyShareLink = var3;
    var3 = function arg0() {
        _fun47300: for (var _fun47300_ip = 0;;) switch (_fun47300_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.rewardsConfig;
                var0 = var0.rewards;
                var0 = var0.length;
                var2 = 0;
                if (!(var2 !== var0)) {
                    _fun47300_ip = 44;
                    continue _fun47300
                }
            case 26:
                var0 = var1.rewardsConfig;
                var0 = var0.rewards;
                var0 = var0[var2];
                return var0;
            case 44:
                var0 = global;
                var2 = var0.Error;
                var4 = var1.id;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = 'Quest ';
                var0 = ' has no rewards configured';
                var6 = var3.bind(var1)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.getDefaultReward = var3;
    var1 = function(arg0) { // Environment: var1
        _fun47301: for (var _fun47301_ip = 0;;) switch (_fun47301_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.hasVideoAsset;
                var7 = var1.playerState;
                var4 = var1.pauseReason;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var0) {
                    _fun47301_ip = 141;
                    continue _fun47301
                }
            case 37:
                var0 = 4;
                var0 = var5[var0];
                var10 = undefined;
                var1 = var3.bind(var10)(var0);
                var0 = var1.isWeb;
                var0 = var0.bind(var1)();
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 1;
                var6 = var11[var1];
                var6 = var9.bind(var10)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var1 = var11[var1];
                var1 = var9.bind(var10)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun47301_ip = 123;
                    continue _fun47301
                }
            case 108:
                var0 = var1["rStN/7"];
                var0 = var6.bind(var8)(var0);
                _fun47301_ip = 136;
                continue _fun47301;
            case 123:
                var1 = var1["E1du/q"];
                var0 = var6.bind(var8)(var1);
            case 136:
                _fun47301_ip = 271;
                continue _fun47301;
            case 141:
                var1 = 5;
                var1 = var5[var1];
                var6 = undefined;
                var1 = var3.bind(var6)(var1);
                var1 = var1.VideoPlayerState;
                var3 = var1.PAUSED;
                var1 = null;
                if (!(var7 === var3)) {
                    _fun47301_ip = 268;
                    continue _fun47301
                }
            case 173:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.VideoPauseReason;
                var3 = var3.LOST_FOCUS;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun47301_ip = 268;
                    continue _fun47301
                }
            case 211:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2["U7Xrb+"];
                var1 = var3.bind(var4)(var2);
            case 268:
                var0 = var1;
            case 271:
                return var0;
        }
    };
    var2.getVideoStatusMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5232, 1234, 5265, 5295, 478, 5300, 5234, 2]);