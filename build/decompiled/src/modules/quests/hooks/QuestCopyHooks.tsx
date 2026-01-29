// modules/quests/hooks/QuestCopyHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1, arg2) { // Original name: formatWithOrWithoutMarkdown, environment: var1
        _fun78332: for (var _fun78332_ip = 0;;) switch (_fun78332_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.intl;
                var0 = arg2;
                if (var0) {
                    _fun78332_ip = 55;
                    continue _fun78332
                }
            case 42:
                var0 = var2.format;
                var0 = var0.bind(var2)(var4, var3);
                _fun78332_ip = 66;
                continue _fun78332;
            case 55:
                var1 = var2.formatToPlainString;
                var0 = var1.bind(var2)(var4, var3);
            case 66:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: getQuestInstructionsToWinRewardSponsored, environment: var1
        _fun78333: for (var _fun78333_ip = 0;;) switch (_fun78333_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.quest;
                var2 = var1.taskDetails;
                var12 = var1.sourceQuestContent;
                var0 = var1.withoutMarkdown;
                var10 = var1.popoutTargetElementRef;
                var9 = var1.onGameSheetOpened;
                var8 = var1.onGameSheetClosed;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = var5.getDefaultRewardNameWithArticle;
                var3 = var13.config;
                var6 = var4.bind(var5)(var3);
                var5 = var2.targetMinutes;
                var11 = var2.applications;
                if (var0) {
                    _fun78333_ip = 212;
                    continue _fun78333
                }
            case 101:
                var2 = {};
                var2.quest = var13;
                var2.rewardNameWithArticle = var6;
                var2.targetMinutes = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 14;
                var0 = var4[var0];
                var4 = var3.bind(var7)(var0);
                var3 = var4.createGameSheetHook;
                var0 = {};
                var0.quest = var13;
                var0.sourceQuestContent = var12;
                var12 = null;
                if (!(var12 == var11)) {
                    _fun78333_ip = 166;
                    continue _fun78333
                }
            case 162:
                var11 = new Array(0);
            case 166:
                var0.applications = var11;
                var0.popoutTargetElementRef = var10;
                var0.onGameSheetOpened = var9;
                var0.onGameSheetClosed = var8;
                var0 = var3.bind(var4)(var0);
                var2.gameSheetHook = var0;
                var0 = function(arg0) { // Original name: _getQuestInstructionsToWinRewardArenaPackage, environment: var0
                    _fun78334: for (var _fun78334_ip = 0;;) switch (_fun78334_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.quest;
                            var4 = var0.gameSheetHook;
                            var6 = var0.rewardNameWithArticle;
                            var5 = var0.targetMinutes;
                            var9 = {};
                            var2 = _closure1_slot9;
                            var12 = var2.PACKAGE_ACTION_ADVENTURE;
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var7 = 7;
                            var10 = var8[var7];
                            var2 = undefined;
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10.H485IA;
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var12 = var10.PACKAGE_RPG_MMO;
                            var10 = var8[var7];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10["3XS8Ni"];
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var12 = var10.PACKAGE_RACING_SPORTS;
                            var10 = var8[var7];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10["X+UCju"];
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var12 = var10.PACKAGE_SANDBOX_CREATIVE;
                            var10 = var8[var7];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10["6o4n1Q"];
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var12 = var10.PACKAGE_FAMILY_FRIENDLY;
                            var10 = var8[var7];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10.DUsNmf;
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var12 = var10.PACKAGE_HOLIDAY_SEASON;
                            var10 = var8[var7];
                            var10 = var11.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10["cWP8/Z"];
                            var9[var12] = var10;
                            var10 = _closure1_slot9;
                            var10 = var10.PACKAGE_NEW_YEARS;
                            var8 = var8[var7];
                            var8 = var11.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8["8+sIJz"];
                            var9[var10] = var8;
                            var _closure3_slot0 = var9;
                            var3 = var3.config;
                            var8 = var3.features;
                            var3 = var8.find;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var0 in var1;
                                return var0;
                            };
                            var8 = var3.bind(var8)(var1);
                            var1 = null;
                            var10 = var1 != var8;
                            var3 = null;
                            if (!var10) {
                                _fun78334_ip = 353;
                                continue _fun78334
                            }
                        case 349:
                            var3 = var9[var8];
                        case 353:
                            if (!(var1 == var3)) {
                                _fun78334_ip = 387;
                                continue _fun78334
                            }
                        case 357:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var1 = var8.bind(var2)(var1);
                            var1 = var1.t;
                            var3 = var1.CDeHul;
                        case 387:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.intl;
                            var1 = var2.format;
                            var0 = {};
                            var0.rewardNameWithArticle = var6;
                            var0.targetMinutes = var5;
                            var0.gameSheetHook = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var0 = var0.bind(var7)(var2);
                _fun78333_ip = 280;
                continue _fun78333;
            case 212:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var3 = var8[var1];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1["1votF6"];
                var1 = {};
                var1.rewardNameWithArticle = var6;
                var1.targetMinutes = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 280:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: _getQuestsInstructionsToWinReward, environment: var1
        _fun78336: for (var _fun78336_ip = 0;;) switch (_fun78336_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.quest;
                var9 = var0.taskDetails;
                var2 = var0.questContent;
                var14 = var0.thirdPartyTaskDetails;
                var8 = var0.sourceQuestContent;
                var7 = var0.withoutMarkdown;
                var17 = var0.currentUser;
                var6 = var0.popoutTargetElementRef;
                var5 = var0.onGameSheetOpened;
                var4 = var0.onGameSheetClosed;
                var11 = var0.onGameTitleClick;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 15;
                var12 = var0[var3];
                var3 = undefined;
                var16 = var15.bind(var3)(var12);
                var13 = var16.isPremium;
                var12 = _closure1_slot11;
                var12 = var12.TIER_2;
                var13 = var13.bind(var16)(var17, var12);
                var19 = 11;
                var12 = var0[var19];
                var17 = var15.bind(var3)(var12);
                var16 = var17.getCollectibleQuestRewardDuration;
                var12 = var10.config;
                var12 = var16.bind(var17)(var12);
                var18 = 10;
                var0 = var0[var18];
                var15 = var15.bind(var3)(var0);
                var0 = var15.isConsoleQuest;
                var0 = var0.bind(var15)(var10);
                if (!var0) {
                    _fun78336_ip = 198;
                    continue _fun78336
                }
            case 170:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var18];
                var16 = var16.bind(var3)(var15);
                var15 = var16.shouldUsePlayOnDesktopTask;
                var0 = var15.bind(var16)(var10);
            case 198:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = 9;
                var15 = var15[var17];
                var16 = var16.bind(var3)(var15);
                var15 = var16.isSponsoredPlayQuest;
                var15 = var15.bind(var16)(var10);
                if (var15) {
                    _fun78336_ip = 3327;
                    continue _fun78336
                }
            case 235:
                if (var0) {
                    _fun78336_ip = 2849;
                    continue _fun78336
                }
            case 241:
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var18];
                var15 = var15.bind(var3)(var0);
                var0 = var15.isConsoleQuest;
                var0 = var0.bind(var15)(var10);
                if (var0) {
                    _fun78336_ip = 2448;
                    continue _fun78336
                }
            case 275:
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var18];
                var15 = var15.bind(var3)(var0);
                var0 = var15.shouldUsePlayOnDesktopTask;
                var0 = var0.bind(var15)(var10);
                if (var0) {
                    _fun78336_ip = 1963;
                    continue _fun78336
                }
            case 309:
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var19];
                var16 = var15.bind(var3)(var0);
                var15 = var16.isTieredRewardCodeQuest;
                var0 = {};
                var0.quest = var10;
                var0 = var15.bind(var16)(var0);
                if (var0) {
                    _fun78336_ip = 1787;
                    continue _fun78336
                }
            case 350:
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var18];
                var15 = var15.bind(var3)(var0);
                var0 = var15.hasWatchVideoTasks;
                var0 = var0.bind(var15)(var10);
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var18];
                var15 = var16.bind(var3)(var15);
                if (var0) {
                    _fun78336_ip = 1436;
                    continue _fun78336
                }
            case 401:
                var0 = var15.hasPlayActivityTask;
                var0 = var0.bind(var15)(var10);
                if (var0) {
                    _fun78336_ip = 842;
                    continue _fun78336
                }
            case 418:
                var16 = null;
                if (!(var16 == var14)) {
                    _fun78336_ip = 832;
                    continue _fun78336
                }
            case 427:
                var18 = {};
                var18.quest = var10;
                var18.taskDetails = var9;
                var18.withoutMarkdown = var7;
                var18.hasNitro = var13;
                var18.collectibleRewardDuration = var12;
                var18.onGameTitleClick = var11;
                var0 = var18.quest;
                var24 = var18.taskDetails;
                var20 = var18.withoutMarkdown;
                var28 = var18.hasNitro;
                var23 = var18.collectibleRewardDuration;
                var21 = var18.onGameTitleClick;
                var26 = _closure1_slot0;
                var18 = _closure1_slot2;
                var22 = var18[var19];
                var27 = var26.bind(var3)(var22);
                var25 = var27.getDefaultRewardNameWithArticle;
                var22 = var0.config;
                var22 = var25.bind(var27)(var22);
                var24 = var24.targetMinutes;
                var25 = var0.config;
                var25 = var25.messages;
                var25 = var25.gameTitle;
                var27 = var18[var19];
                var30 = var26.bind(var3)(var27);
                var29 = var30.isCollectibleQuestRewardPremiumExtendable;
                var27 = var0.config;
                var27 = var29.bind(var30)(var27);
                var18 = var18[var19];
                var26 = var26.bind(var3)(var18);
                var18 = var26.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var0 = var0.config;
                var0 = var18.bind(var26)(var0);
                var26 = var16 != var21;
                var18 = _closure1_slot14;
                if (!var28) {
                    _fun78336_ip = 615;
                    continue _fun78336
                }
            case 612:
                if (var27) {
                    _fun78336_ip = 719;
                    continue _fun78336
                }
            case 615:
                if (var27) {
                    _fun78336_ip = 668;
                    continue _fun78336
                }
            case 618:
                if (!(var16 == var23)) {
                    _fun78336_ip = 668;
                    continue _fun78336
                }
            case 622:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var16 = 7;
                var16 = var28[var16];
                var16 = var27.bind(var3)(var16);
                var27 = var16.t;
                if (var26) {
                    _fun78336_ip = 658;
                    continue _fun78336
                }
            case 650:
                var16 = var27["hkJ+Gs"];
                _fun78336_ip = 666;
                continue _fun78336;
            case 658:
                var16 = var27.ER9rII;
            case 666:
                _fun78336_ip = 717;
                continue _fun78336;
            case 668:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var27 = 7;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.t;
                if (var26) {
                    _fun78336_ip = 706;
                    continue _fun78336
                }
            case 696:
                var27 = var28.BLyDvO;
                _fun78336_ip = 714;
                continue _fun78336;
            case 706:
                var27 = var28.Cko4a4;
            case 714:
                var16 = var27;
            case 717:
                _fun78336_ip = 797;
                continue _fun78336;
            case 719:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var27 = 7;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.t;
                if (var0) {
                    _fun78336_ip = 770;
                    continue _fun78336
                }
            case 747:
                if (var26) {
                    _fun78336_ip = 760;
                    continue _fun78336
                }
            case 750:
                var0 = var27.smG9ql;
                _fun78336_ip = 768;
                continue _fun78336;
            case 760:
                var0 = var27.eEuma3;
            case 768:
                _fun78336_ip = 794;
                continue _fun78336;
            case 770:
                if (var26) {
                    _fun78336_ip = 783;
                    continue _fun78336
                }
            case 773:
                var26 = var27["X8Yt/1"];
                _fun78336_ip = 791;
                continue _fun78336;
            case 783:
                var26 = var27.l9yxDa;
            case 791:
                var0 = var26;
            case 794:
                var16 = var0;
            case 797:
                var0 = {};
                var0.gameTitle = var25;
                var0.streamingDurationRequirement = var24;
                var0.duration = var23;
                var0.questReward = var22;
                var0.onGameTitleClick = var21;
                var0 = var18.bind(var3)(var16, var0, var20);
                _fun78336_ip = 837;
                continue _fun78336;
            case 832:
                var0 = var14.description;
            case 837:
                _fun78336_ip = 1431;
                continue _fun78336;
            case 842:
                var14 = {};
                var14.quest = var10;
                var14.taskDetails = var9;
                var14.withoutMarkdown = var7;
                var14.questContent = var2;
                var23 = var14.quest;
                var2 = var14.taskDetails;
                var18 = var14.withoutMarkdown;
                var16 = var14.questContent;
                var21 = var2.targetMinutes;
                var14 = _closure1_slot0;
                var2 = _closure1_slot2;
                var20 = var2[var19];
                var24 = var14.bind(var3)(var20);
                var22 = var24.getDefaultRewardNameWithArticle;
                var20 = var23.config;
                var20 = var22.bind(var24)(var20);
                var2 = var2[var17];
                var14 = var14.bind(var3)(var2);
                var2 = var14.isPlayAnyActivityQuest;
                var2 = var2.bind(var14)(var23);
                if (var2) {
                    _fun78336_ip = 1372;
                    continue _fun78336
                }
            case 953:
                var2 = var23.config;
                var17 = var2.features;
                var14 = var17.includes;
                var2 = _closure1_slot9;
                var2 = var2.CLOUD_GAMING_ACTIVITY;
                var2 = var14.bind(var17)(var2);
                if (var2) {
                    _fun78336_ip = 1070;
                    continue _fun78336
                }
            case 987:
                var17 = _closure1_slot14;
                var14 = _closure1_slot0;
                var22 = _closure1_slot2;
                var2 = 7;
                var2 = var22[var2];
                var2 = var14.bind(var3)(var2);
                var2 = var2.t;
                var14 = var2.UuzHh8;
                var2 = {};
                var22 = var23.config;
                var22 = var22.messages;
                var22 = var22.gameTitle;
                var2.activityName = var22;
                var2.streamingDurationRequirement = var21;
                var2.questReward = var20;
                var2 = var17.bind(var3)(var14, var2, var18);
                _fun78336_ip = 1370;
                continue _fun78336;
            case 1070:
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 12;
                var14 = var22[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.QuestContent;
                var14 = var14.QUESTS_EMBED;
                if (!(var16 !== var14)) {
                    _fun78336_ip = 1243;
                    continue _fun78336
                }
            case 1109:
                var17 = _closure1_slot14;
                var16 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 7;
                var14 = var25[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.t;
                var16 = var14["0NNM3l"];
                var14 = {};
                var22 = var23.config;
                var22 = var22.messages;
                var22 = var22.gameTitle;
                var14.activityName = var22;
                var22 = _closure1_slot12;
                var14.providerName = var22;
                var24 = _closure1_slot1;
                var22 = 13;
                var22 = var25[var22];
                var25 = var24.bind(var3)(var22);
                var24 = var25.getArticleURL;
                var22 = _closure1_slot10;
                var22 = var22.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
                var22 = var24.bind(var25)(var22);
                var14.providerLink = var22;
                var14.streamingDurationRequirement = var21;
                var14.questReward = var20;
                var14 = var17.bind(var3)(var16, var14, var18);
                _fun78336_ip = 1367;
                continue _fun78336;
            case 1243:
                var22 = _closure1_slot14;
                var17 = _closure1_slot0;
                var25 = _closure1_slot2;
                var16 = 7;
                var16 = var25[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["C+2RxC"];
                var16 = {};
                var23 = var23.config;
                var23 = var23.messages;
                var23 = var23.gameTitle;
                var16.activityName = var23;
                var23 = _closure1_slot12;
                var16.providerName = var23;
                var24 = _closure1_slot1;
                var23 = 13;
                var23 = var25[var23];
                var25 = var24.bind(var3)(var23);
                var24 = var25.getArticleURL;
                var23 = _closure1_slot10;
                var23 = var23.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST;
                var23 = var24.bind(var25)(var23);
                var16.providerLink = var23;
                var16.questReward = var20;
                var14 = var22.bind(var3)(var17, var16, var18);
            case 1367:
                var2 = var14;
            case 1370:
                _fun78336_ip = 1428;
                continue _fun78336;
            case 1372:
                var17 = _closure1_slot14;
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 7;
                var14 = var22[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.t;
                var16 = var14.VYwSSu;
                var14 = {};
                var14.streamingDurationRequirement = var21;
                var14.questReward = var20;
                var2 = var17.bind(var3)(var16, var14, var18);
            case 1428:
                var0 = var2;
            case 1431:
                _fun78336_ip = 1782;
                continue _fun78336;
            case 1436:
                var14 = var15.getDefaultWatchVideoTask;
                var2 = var10.config;
                var15 = var14.bind(var15)(var2);
                var14 = null;
                var16 = var14 == var15;
                var2 = undefined;
                if (var16) {
                    _fun78336_ip = 1475;
                    continue _fun78336
                }
            case 1463:
                var15 = var15.messages;
                var2 = var15.videoTitle;
            case 1475:
                var15 = var14 != var2;
                var17 = 'video';
                if (!var15) {
                    _fun78336_ip = 1489;
                    continue _fun78336
                }
            case 1486:
                var17 = var2;
            case 1489:
                var15 = _closure1_slot0;
                var2 = _closure1_slot2;
                var16 = var2[var19];
                var20 = var15.bind(var3)(var16);
                var18 = var20.getDefaultRewardNameWithArticle;
                var16 = var10.config;
                var16 = var18.bind(var20)(var16);
                var18 = var2[var19];
                var21 = var15.bind(var3)(var18);
                var20 = var21.isCollectibleQuestRewardPremiumExtendable;
                var18 = var10.config;
                var18 = var20.bind(var21)(var18);
                var2 = var2[var19];
                var20 = var15.bind(var3)(var2);
                var15 = var20.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var2 = var10.config;
                var2 = var15.bind(var20)(var2);
                var15 = _closure1_slot14;
                if (!var18) {
                    _fun78336_ip = 1585;
                    continue _fun78336
                }
            case 1579:
                if (var13) {
                    _fun78336_ip = 1710;
                    continue _fun78336
                }
            case 1585:
                if (var18) {
                    _fun78336_ip = 1675;
                    continue _fun78336
                }
            case 1588:
                if (!(var14 == var12)) {
                    _fun78336_ip = 1675;
                    continue _fun78336
                }
            case 1592:
                var18 = var10.id;
                var14 = _closure1_slot8;
                if (!(var18 !== var14)) {
                    _fun78336_ip = 1640;
                    continue _fun78336
                }
            case 1605:
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 7;
                var14 = var20[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["g+InPC"];
                _fun78336_ip = 1673;
                continue _fun78336;
            case 1640:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 7;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var14 = var18.Rsd5bL;
            case 1673:
                _fun78336_ip = 1708;
                continue _fun78336;
            case 1675:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 7;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var14 = var18["W/HkLO"];
            case 1708:
                _fun78336_ip = 1759;
                continue _fun78336;
            case 1710:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 7;
                var18 = var21[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                if (var2) {
                    _fun78336_ip = 1748;
                    continue _fun78336
                }
            case 1738:
                var2 = var18["vs/xBu"];
                _fun78336_ip = 1756;
                continue _fun78336;
            case 1748:
                var2 = var18["xqX+var5"];
            case 1756:
                var14 = var2;
            case 1759:
                var2 = {};
                var2.videoTitle = var17;
                var2.rewardNameWithArticle = var16;
                var2.duration = var12;
                var0 = var15.bind(var3)(var14, var2, var7);
            case 1782:
                _fun78336_ip = 1958;
                continue _fun78336;
            case 1787:
                var15 = {};
                var15.quest = var10;
                var15.taskDetails = var9;
                var15.withoutMarkdown = var7;
                var15.onGameTitleClick = var11;
                var2 = var15.quest;
                var14 = var15.taskDetails;
                var16 = var15.withoutMarkdown;
                var17 = var15.onGameTitleClick;
                var18 = var14.targetMinutes;
                var2 = var2.config;
                var2 = var2.messages;
                var20 = var2.gameTitle;
                var15 = _closure1_slot14;
                var2 = null;
                if (!(var2 == var17)) {
                    _fun78336_ip = 1901;
                    continue _fun78336
                }
            case 1866:
                var14 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 7;
                var2 = var21[var2];
                var2 = var14.bind(var3)(var2);
                var2 = var2.t;
                var14 = var2["a/ia7F"];
                _fun78336_ip = 1934;
                continue _fun78336;
            case 1901:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var2 = 7;
                var2 = var22[var2];
                var2 = var21.bind(var3)(var2);
                var2 = var2.t;
                var14 = var2.HHVg4i;
            case 1934:
                var2 = {};
                var2.gameTitle = var20;
                var2.streamingDurationRequirement = var18;
                var2.onGameTitleClick = var17;
                var0 = var15.bind(var3)(var14, var2, var16);
            case 1958:
                _fun78336_ip = 2443;
                continue _fun78336;
            case 1963:
                var2 = {};
                var2.quest = var10;
                var2.taskDetails = var9;
                var2.withoutMarkdown = var7;
                var2.hasNitro = var13;
                var2.collectibleRewardDuration = var12;
                var2.onGameTitleClick = var11;
                var14 = var2.quest;
                var21 = var2.taskDetails;
                var16 = var2.withoutMarkdown;
                var26 = var2.hasNitro;
                var20 = var2.collectibleRewardDuration;
                var17 = var2.onGameTitleClick;
                var15 = _closure1_slot0;
                var2 = _closure1_slot2;
                var18 = var2[var19];
                var23 = var15.bind(var3)(var18);
                var22 = var23.getDefaultRewardNameWithArticle;
                var18 = var14.config;
                var18 = var22.bind(var23)(var18);
                var21 = var21.targetMinutes;
                var22 = var14.config;
                var22 = var22.messages;
                var22 = var22.gameTitle;
                var23 = var2[var19];
                var25 = var15.bind(var3)(var23);
                var24 = var25.isCollectibleQuestRewardPremiumExtendable;
                var23 = var14.config;
                var24 = var24.bind(var25)(var23);
                var2 = var2[var19];
                var23 = var15.bind(var3)(var2);
                var15 = var23.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var2 = var14.config;
                var2 = var15.bind(var23)(var2);
                var14 = var14.config;
                var23 = var14.features;
                var15 = var23.includes;
                var14 = _closure1_slot9;
                var14 = var14.NON_GAMING_PLAY_QUEST;
                var25 = var15.bind(var23)(var14);
                var14 = null;
                var23 = var14 != var17;
                var15 = _closure1_slot14;
                if (!var26) {
                    _fun78336_ip = 2187;
                    continue _fun78336
                }
            case 2181:
                if (var24) {
                    _fun78336_ip = 2313;
                    continue _fun78336
                }
            case 2187:
                if (var24) {
                    _fun78336_ip = 2255;
                    continue _fun78336
                }
            case 2190:
                if (!(var14 == var20)) {
                    _fun78336_ip = 2255;
                    continue _fun78336
                }
            case 2194:
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var14 = 7;
                var14 = var26[var14];
                var14 = var24.bind(var3)(var14);
                var24 = var14.t;
                if (var25) {
                    _fun78336_ip = 2245;
                    continue _fun78336
                }
            case 2222:
                if (var23) {
                    _fun78336_ip = 2235;
                    continue _fun78336
                }
            case 2225:
                var14 = var24.FZL5Q5;
                _fun78336_ip = 2243;
                continue _fun78336;
            case 2235:
                var14 = var24.NrD2h8;
            case 2243:
                _fun78336_ip = 2253;
                continue _fun78336;
            case 2245:
                var14 = var24["03VJqu"];
            case 2253:
                _fun78336_ip = 2311;
                continue _fun78336;
            case 2255:
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = 7;
                var24 = var27[var24];
                var24 = var26.bind(var3)(var24);
                var26 = var24.t;
                if (var25) {
                    _fun78336_ip = 2302;
                    continue _fun78336
                }
            case 2283:
                if (var23) {
                    _fun78336_ip = 2294;
                    continue _fun78336
                }
            case 2286:
                var24 = var26.AwuMRS;
                _fun78336_ip = 2300;
                continue _fun78336;
            case 2294:
                var24 = var26["4JS2QJ"];
            case 2300:
                _fun78336_ip = 2308;
                continue _fun78336;
            case 2302:
                var24 = var26.enQ3jU;
            case 2308:
                var14 = var24;
            case 2311:
                _fun78336_ip = 2405;
                continue _fun78336;
            case 2313:
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = 7;
                var24 = var27[var24];
                var24 = var26.bind(var3)(var24);
                var24 = var24.t;
                if (var2) {
                    _fun78336_ip = 2371;
                    continue _fun78336
                }
            case 2341:
                if (var25) {
                    _fun78336_ip = 2363;
                    continue _fun78336
                }
            case 2344:
                if (var23) {
                    _fun78336_ip = 2355;
                    continue _fun78336
                }
            case 2347:
                var2 = var24.ziB0HF;
                _fun78336_ip = 2361;
                continue _fun78336;
            case 2355:
                var2 = var24.klYWbT;
            case 2361:
                _fun78336_ip = 2369;
                continue _fun78336;
            case 2363:
                var2 = var24["1AcTqm"];
            case 2369:
                _fun78336_ip = 2402;
                continue _fun78336;
            case 2371:
                if (var25) {
                    _fun78336_ip = 2393;
                    continue _fun78336
                }
            case 2374:
                if (var23) {
                    _fun78336_ip = 2385;
                    continue _fun78336
                }
            case 2377:
                var23 = var24["eb/Sna"];
                _fun78336_ip = 2391;
                continue _fun78336;
            case 2385:
                var23 = var24.tQoqXX;
            case 2391:
                _fun78336_ip = 2399;
                continue _fun78336;
            case 2393:
                var23 = var24.ztXW8V;
            case 2399:
                var2 = var23;
            case 2402:
                var14 = var2;
            case 2405:
                var2 = {};
                var2.gameTitle = var22;
                var2.streamingDurationRequirement = var21;
                var2.rewardNameWithArticle = var18;
                var2.duration = var20;
                var2.questReward = var18;
                var2.onGameTitleClick = var17;
                var0 = var15.bind(var3)(var14, var2, var16);
            case 2443:
                _fun78336_ip = 2844;
                continue _fun78336;
            case 2448:
                var14 = {};
                var14.quest = var10;
                var14.taskDetails = var9;
                var14.withoutMarkdown = var7;
                var14.hasNitro = var13;
                var14.collectibleRewardDuration = var12;
                var14.onGameTitleClick = var11;
                var2 = var14.quest;
                var18 = var14.taskDetails;
                var16 = var14.withoutMarkdown;
                var25 = var14.hasNitro;
                var20 = var14.collectibleRewardDuration;
                var17 = var14.onGameTitleClick;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var21 = var14[var19];
                var23 = var15.bind(var3)(var21);
                var22 = var23.getDefaultRewardNameWithArticle;
                var21 = var2.config;
                var21 = var22.bind(var23)(var21);
                var18 = var18.targetMinutes;
                var22 = var2.config;
                var22 = var22.messages;
                var22 = var22.gameTitle;
                var23 = var14[var19];
                var26 = var15.bind(var3)(var23);
                var24 = var26.isCollectibleQuestRewardPremiumExtendable;
                var23 = var2.config;
                var24 = var24.bind(var26)(var23);
                var14 = var14[var19];
                var15 = var15.bind(var3)(var14);
                var14 = var15.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var2 = var2.config;
                var2 = var14.bind(var15)(var2);
                var14 = null;
                var23 = var14 != var17;
                var15 = _closure1_slot14;
                if (!var25) {
                    _fun78336_ip = 2638;
                    continue _fun78336
                }
            case 2635:
                if (var24) {
                    _fun78336_ip = 2736;
                    continue _fun78336
                }
            case 2638:
                if (var24) {
                    _fun78336_ip = 2689;
                    continue _fun78336
                }
            case 2641:
                if (!(var14 == var20)) {
                    _fun78336_ip = 2689;
                    continue _fun78336
                }
            case 2645:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 7;
                var14 = var25[var14];
                var14 = var24.bind(var3)(var14);
                var24 = var14.t;
                if (var23) {
                    _fun78336_ip = 2681;
                    continue _fun78336
                }
            case 2673:
                var14 = var24.NIimTt;
                _fun78336_ip = 2687;
                continue _fun78336;
            case 2681:
                var14 = var24.GFdaUK;
            case 2687:
                _fun78336_ip = 2734;
                continue _fun78336;
            case 2689:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var24 = 7;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var25 = var24.t;
                if (var23) {
                    _fun78336_ip = 2725;
                    continue _fun78336
                }
            case 2717:
                var24 = var25.AwuMRS;
                _fun78336_ip = 2731;
                continue _fun78336;
            case 2725:
                var24 = var25["4JS2QJ"];
            case 2731:
                var14 = var24;
            case 2734:
                _fun78336_ip = 2806;
                continue _fun78336;
            case 2736:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var24 = 7;
                var24 = var26[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.t;
                if (var2) {
                    _fun78336_ip = 2783;
                    continue _fun78336
                }
            case 2764:
                if (var23) {
                    _fun78336_ip = 2775;
                    continue _fun78336
                }
            case 2767:
                var2 = var24.ziB0HF;
                _fun78336_ip = 2781;
                continue _fun78336;
            case 2775:
                var2 = var24.klYWbT;
            case 2781:
                _fun78336_ip = 2803;
                continue _fun78336;
            case 2783:
                if (var23) {
                    _fun78336_ip = 2794;
                    continue _fun78336
                }
            case 2786:
                var23 = var24["eb/Sna"];
                _fun78336_ip = 2800;
                continue _fun78336;
            case 2794:
                var23 = var24.tQoqXX;
            case 2800:
                var2 = var23;
            case 2803:
                var14 = var2;
            case 2806:
                var2 = {};
                var2.gameTitle = var22;
                var2.targetMinutes = var18;
                var2.rewardNameWithArticle = var21;
                var2.duration = var20;
                var2.streamingDurationRequirement = var18;
                var2.onGameTitleClick = var17;
                var0 = var15.bind(var3)(var14, var2, var16);
            case 2844:
                _fun78336_ip = 3325;
                continue _fun78336;
            case 2849:
                var2 = {};
                var2.quest = var10;
                var2.taskDetails = var9;
                var2.withoutMarkdown = var7;
                var2.hasNitro = var13;
                var2.collectibleRewardDuration = var12;
                var2.onGameTitleClick = var11;
                var11 = var2.quest;
                var15 = var2.taskDetails;
                var13 = var2.withoutMarkdown;
                var22 = var2.hasNitro;
                var16 = var2.collectibleRewardDuration;
                var14 = var2.onGameTitleClick;
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var17 = var2[var19];
                var20 = var12.bind(var3)(var17);
                var18 = var20.getDefaultRewardNameWithArticle;
                var17 = var11.config;
                var17 = var18.bind(var20)(var17);
                var15 = var15.targetMinutes;
                var18 = var11.config;
                var18 = var18.messages;
                var18 = var18.gameTitle;
                var20 = var2[var19];
                var23 = var12.bind(var3)(var20);
                var21 = var23.isCollectibleQuestRewardPremiumExtendable;
                var20 = var11.config;
                var20 = var21.bind(var23)(var20);
                var2 = var2[var19];
                var19 = var12.bind(var3)(var2);
                var12 = var19.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var2 = var11.config;
                var2 = var12.bind(var19)(var2);
                var11 = var11.config;
                var19 = var11.features;
                var12 = var19.includes;
                var11 = _closure1_slot9;
                var11 = var11.NON_GAMING_PLAY_QUEST;
                var21 = var12.bind(var19)(var11);
                var11 = null;
                var19 = var11 != var14;
                var12 = _closure1_slot14;
                if (!var22) {
                    _fun78336_ip = 3073;
                    continue _fun78336
                }
            case 3067:
                if (var20) {
                    _fun78336_ip = 3195;
                    continue _fun78336
                }
            case 3073:
                if (var20) {
                    _fun78336_ip = 3137;
                    continue _fun78336
                }
            case 3076:
                if (!(var11 == var16)) {
                    _fun78336_ip = 3137;
                    continue _fun78336
                }
            case 3080:
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 7;
                var11 = var22[var11];
                var11 = var20.bind(var3)(var11);
                var20 = var11.t;
                if (var21) {
                    _fun78336_ip = 3127;
                    continue _fun78336
                }
            case 3108:
                if (var19) {
                    _fun78336_ip = 3119;
                    continue _fun78336
                }
            case 3111:
                var11 = var20.NIimTt;
                _fun78336_ip = 3125;
                continue _fun78336;
            case 3119:
                var11 = var20.GFdaUK;
            case 3125:
                _fun78336_ip = 3135;
                continue _fun78336;
            case 3127:
                var11 = var20["e+K3xJ"];
            case 3135:
                _fun78336_ip = 3193;
                continue _fun78336;
            case 3137:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 7;
                var20 = var23[var20];
                var20 = var22.bind(var3)(var20);
                var22 = var20.t;
                if (var21) {
                    _fun78336_ip = 3184;
                    continue _fun78336
                }
            case 3165:
                if (var19) {
                    _fun78336_ip = 3176;
                    continue _fun78336
                }
            case 3168:
                var20 = var22.AwuMRS;
                _fun78336_ip = 3182;
                continue _fun78336;
            case 3176:
                var20 = var22["4JS2QJ"];
            case 3182:
                _fun78336_ip = 3190;
                continue _fun78336;
            case 3184:
                var20 = var22.enQ3jU;
            case 3190:
                var11 = var20;
            case 3193:
                _fun78336_ip = 3287;
                continue _fun78336;
            case 3195:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = 7;
                var20 = var23[var20];
                var20 = var22.bind(var3)(var20);
                var20 = var20.t;
                if (var2) {
                    _fun78336_ip = 3253;
                    continue _fun78336
                }
            case 3223:
                if (var21) {
                    _fun78336_ip = 3245;
                    continue _fun78336
                }
            case 3226:
                if (var19) {
                    _fun78336_ip = 3237;
                    continue _fun78336
                }
            case 3229:
                var2 = var20.ziB0HF;
                _fun78336_ip = 3243;
                continue _fun78336;
            case 3237:
                var2 = var20.klYWbT;
            case 3243:
                _fun78336_ip = 3251;
                continue _fun78336;
            case 3245:
                var2 = var20["1AcTqm"];
            case 3251:
                _fun78336_ip = 3284;
                continue _fun78336;
            case 3253:
                if (var21) {
                    _fun78336_ip = 3275;
                    continue _fun78336
                }
            case 3256:
                if (var19) {
                    _fun78336_ip = 3267;
                    continue _fun78336
                }
            case 3259:
                var19 = var20["eb/Sna"];
                _fun78336_ip = 3273;
                continue _fun78336;
            case 3267:
                var19 = var20.tQoqXX;
            case 3273:
                _fun78336_ip = 3281;
                continue _fun78336;
            case 3275:
                var19 = var20.ztXW8V;
            case 3281:
                var2 = var19;
            case 3284:
                var11 = var2;
            case 3287:
                var2 = {};
                var2.gameTitle = var18;
                var2.streamingDurationRequirement = var15;
                var2.rewardNameWithArticle = var17;
                var2.duration = var16;
                var2.targetMinutes = var15;
                var2.onGameTitleClick = var14;
                var0 = var12.bind(var3)(var11, var2, var13);
            case 3325:
                _fun78336_ip = 3373;
                continue _fun78336;
            case 3327:
                var2 = _closure1_slot15;
                var1 = {};
                var1.quest = var10;
                var1.taskDetails = var9;
                var1.sourceQuestContent = var8;
                var1.withoutMarkdown = var7;
                var1.popoutTargetElementRef = var6;
                var1.onGameSheetOpened = var5;
                var1.onGameSheetClosed = var4;
                var0 = var2.bind(var3)(var1);
            case 3373:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var4 = function(arg0) { // Original name: getQuestsInstructionsToWinReward, environment: var1
        _fun78337: for (var _fun78337_ip = 0;;) switch (_fun78337_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot16;
                var1 = {};
                var7 = var1;
                var6 = var0;
                var4 = copyDataProperties(var7, var6);
                var4 = var0.currentUser;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun78337_ip = 47;
                    continue _fun78337
                }
            case 34:
                var5 = _closure1_slot6;
                var3 = var5.getCurrentUser;
                var4 = var3.bind(var5)();
            case 47:
                var3 = 'currentUser';
                var1[var3] = var4;
                var4 = var0.popoutTargetElementRef;
                var3 = 'popoutTargetElementRef';
                var1[var3] = var4;
                var4 = var0.onGameSheetOpened;
                var3 = 'onGameSheetOpened';
                var1[var3] = var4;
                var4 = var0.onGameSheetClosed;
                var3 = 'onGameSheetClosed';
                var1[var3] = var4;
                var3 = var0.onGameTitleClick;
                var0 = 'onGameTitleClick';
                var1[var0] = var3;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var3 = function(arg0) { // Original name: useQuestsInstructionsToWinReward, environment: var1
        _fun78338: for (var _fun78338_ip = 0;;) switch (_fun78338_ip) {
            case 0:
                var5 = arg0;
                var8 = var5.quest;
                var12 = var5.questContent;
                var11 = var5.sourceQuestContent;
                var9 = var5.gameProfileSource;
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 8;
                var3 = var10[var1];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var6 = var7.useConnectedConsoleLinkOnClick;
                var3 = {};
                var3.quest = var8;
                var3.questContent = var12;
                var3.sourceQuestContent = var11;
                var7 = var6.bind(var7)(var3);
                var3 = 16;
                var3 = var10[var3];
                var12 = var4.bind(var2)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var11.bind(var12)(var6, var3);
                var1 = var10[var1];
                var3 = var4.bind(var2)(var1);
                var1 = var3.useThirdPartyTaskDetails;
                var3 = var1.bind(var3)(var8);
                var1 = 10;
                var1 = var10[var1];
                var4 = var4.bind(var2)(var1);
                var1 = var4.getAllApplicationIds;
                var8 = var1.bind(var4)(var8);
                var4 = null;
                var1 = var4 == var8;
                var10 = undefined;
                if (var1) {
                    _fun78338_ip = 184;
                    continue _fun78338
                }
            case 178:
                var1 = 0;
                var10 = var8[var1];
            case 184:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 17;
                var1 = var11[var1];
                var8 = var8.bind(var2)(var1);
                var1 = {};
                var1.applicationId = var10;
                var10 = _closure1_slot7;
                var10 = var10.QUEST_INSTRUCTIONS;
                var1.location = var10;
                if (!(var4 == var9)) {
                    _fun78338_ip = 260;
                    continue _fun78338
                }
            case 228:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 18;
                var10 = var12[var10];
                var10 = var11.bind(var2)(var10);
                var10 = var10.GameProfileSources;
                var9 = var10.QuestHome;
            case 260:
                var1.source = var9;
                var1 = var8.bind(var2)(var1);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 19;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var9 = var1.BusinessProfileLinkingExperiment;
                var8 = var9.getConfig;
                var1 = {};
                var10 = _closure1_slot7;
                var10 = var10.QUEST_INSTRUCTIONS;
                var1.location = var10;
                var1 = var8.bind(var9)(var1);
                var1 = var1.enabled;
                var1 = _closure1_slot17;
                var0 = {};
                var15 = var0;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var5 = 'connectedConsoleLinkOnClick';
                var0[var5] = var7;
                var5 = 'currentUser';
                var0[var5] = var6;
                var6 = false;
                var5 = 'withoutMarkdown';
                var0[var5] = var6;
                var5 = var4 != var3;
                var4 = undefined;
                if (!var5) {
                    _fun78338_ip = 386;
                    continue _fun78338
                }
            case 383:
                var4 = var3;
            case 386:
                var3 = 'thirdPartyTaskDetails';
                var0[var3] = var4;
                var3 = 'onGameTitleClick';
                var0[var3] = var2;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = function(arg0) { // Original name: getSimplifiedQuestTaskType, environment: var1
        _fun78340: for (var _fun78340_ip = 0;;) switch (_fun78340_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 10;
                var0 = var0[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isConsoleQuest;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun78340_ip = 223;
                    continue _fun78340
                }
            case 45:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.hasPlayActivityTask;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun78340_ip = 223;
                    continue _fun78340
                }
            case 79:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var6 = var2.bind(var4)(var0);
                var2 = var6.hasStreamOnDesktopTask;
                var0 = {};
                var0.quest = var3;
                var0 = var2.bind(var6)(var0);
                if (var0) {
                    _fun78340_ip = 211;
                    continue _fun78340
                }
            case 117:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.hasWatchVideoOnMobileTasks;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun78340_ip = 199;
                    continue _fun78340
                }
            case 148:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isInGameQuest;
                var0 = var0.bind(var2)(var3);
                var2 = _closure1_slot13;
                if (var0) {
                    _fun78340_ip = 191;
                    continue _fun78340
                }
            case 183:
                var0 = var2.PLAY;
                _fun78340_ip = 197;
                continue _fun78340;
            case 191:
                var0 = var2.IN_GAME;
            case 197:
                _fun78340_ip = 209;
                continue _fun78340;
            case 199:
                var2 = _closure1_slot13;
                var0 = var2.WATCH_VIDEO;
            case 209:
                _fun78340_ip = 221;
                continue _fun78340;
            case 211:
                var2 = _closure1_slot13;
                var0 = var2.STREAM;
            case 221:
                _fun78340_ip = 233;
                continue _fun78340;
            case 223:
                var1 = _closure1_slot13;
                var0 = var1.PLAY;
            case 233:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: canLaunchOnCurrentPlatform, environment: var1
        _fun78341: for (var _fun78341_ip = 0;;) switch (_fun78341_ip) {
            case 0:
                var5 = arg1;
                var0 = arg0;
                var0 = var0.config;
                var3 = var0.features;
                var1 = var3.includes;
                var0 = _closure1_slot9;
                var0 = var0.MOBILE_ACTIVITY_QUEST;
                var0 = var1.bind(var3)(var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun78341_ip = 118;
                    continue _fun78341
                }
            case 49:
                var6 = null;
                var1 = var6 == var5;
                if (var1) {
                    _fun78341_ip = 115;
                    continue _fun78341
                }
            case 58:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 22;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var7 = var6 == var5;
                var2 = undefined;
                if (var7) {
                    _fun78341_ip = 110;
                    continue _fun78341
                }
            case 89:
                var5 = var5.embeddedActivityConfig;
                var6 = var6 == var5;
                var2 = undefined;
                if (var6) {
                    _fun78341_ip = 110;
                    continue _fun78341
                }
            case 104:
                var2 = var5.supported_platforms;
            case 110:
                var1 = var3.bind(var4)(var2);
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var12 = 0;
    var5 = var7[var12];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var11 = 1;
    var9 = var7[var11];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var10 = 2;
    var5 = var7[var10];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var9 = 3;
    var5 = var7[var9];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var8 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot8 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.HelpdeskArticles;
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot11 = var5;
    var5 = 'NVIDIA GeForce NOW';
    var _closure1_slot12 = var5;
    var5 = {};
    var5.PLAY = var12;
    var8 = 'PLAY';
    var5[var12] = var8;
    var5.STREAM = var11;
    var8 = 'STREAM';
    var5[var11] = var8;
    var5.WATCH_VIDEO = var10;
    var8 = 'WATCH_VIDEO';
    var5[var10] = var8;
    var5.IN_GAME = var9;
    var8 = 'IN_GAME';
    var5[var9] = var8;
    var _closure1_slot13 = var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/QuestCopyHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: useQuestInstructionTitle, environment: var1
        _fun78342: for (var _fun78342_ip = 0;;) switch (_fun78342_ip) {
            case 0:
                var7 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var1 = var2[var0];
                var8 = undefined;
                var5 = var4.bind(var8)(var1);
                var1 = var5.useQuestTaskDetails;
                var1 = var1.bind(var5)(var7);
                var5 = var1.targetMinutes;
                var1 = var2[var0];
                var6 = var4.bind(var8)(var1);
                var1 = var6.useThirdPartyTaskDetails;
                var1 = var1.bind(var6)(var7);
                var0 = var2[var0];
                var9 = var4.bind(var8)(var0);
                var6 = var9.useConnectedConsoleLinkOnClick;
                var0 = {};
                var0.quest = var7;
                var10 = arg2;
                var0.questContent = var10;
                var10 = arg3;
                var0.sourceQuestContent = var10;
                var6 = var6.bind(var9)(var0);
                var12 = 9;
                var0 = var2[var12];
                var9 = var4.bind(var8)(var0);
                var0 = var9.isSponsoredPlayQuest;
                var0 = var0.bind(var9)(var7);
                var10 = 10;
                var2 = var2[var10];
                var4 = var4.bind(var8)(var2);
                var2 = var4.isConsoleQuest;
                var2 = var2.bind(var4)(var7);
                if (!var2) {
                    _fun78342_ip = 292;
                    continue _fun78342
                }
            case 160:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var9 = var4.bind(var8)(var2);
                var4 = var9.hasPlayOnDesktopTask;
                var2 = {};
                var2.quest = var7;
                var2 = var4.bind(var9)(var2);
                if (var2) {
                    _fun78342_ip = 292;
                    continue _fun78342
                }
            case 198:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 7;
                var9 = var13[var2];
                var9 = var4.bind(var8)(var9);
                var11 = var9.intl;
                var9 = var11.format;
                var2 = var13[var2];
                var2 = var4.bind(var8)(var2);
                var2 = var2.t;
                var4 = var2["l4S+cQ"];
                var2 = {};
                var2.minutes = var5;
                var2.onClick = var6;
                var13 = var7.config;
                var13 = var13.messages;
                var13 = var13.gameTitle;
                var2.gameTitle = var13;
                var2 = var9.bind(var11)(var4, var2);
                return var2;
            case 292:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var4 = var4.bind(var8)(var2);
                var2 = var4.isConsoleQuest;
                var4 = var2.bind(var4)(var7);
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                if (var4) {
                    _fun78342_ip = 998;
                    continue _fun78342
                }
            case 334:
                if (var0) {
                    _fun78342_ip = 939;
                    continue _fun78342
                }
            case 340:
                var4 = var9[var10];
                var11 = var2.bind(var8)(var4);
                var4 = var11.hasWatchVideoTasks;
                var4 = var4.bind(var11)(var7);
                if (var4) {
                    _fun78342_ip = 755;
                    continue _fun78342
                }
            case 366:
                var4 = null;
                if (!(var4 == var1)) {
                    _fun78342_ip = 748;
                    continue _fun78342
                }
            case 375:
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var10];
                var11 = var11.bind(var8)(var4);
                var4 = var11.hasPlayActivityTask;
                var13 = var4.bind(var11)(var7);
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                if (var13) {
                    _fun78342_ip = 613;
                    continue _fun78342
                }
            case 417:
                var15 = 7;
                var13 = var4[var15];
                var13 = var11.bind(var8)(var13);
                var13 = var13.t;
                var16 = var13["6zWtV8"];
                var13 = var4[var10];
                var17 = var11.bind(var8)(var13);
                var14 = var17.hasPlayOnDesktopTask;
                var13 = {};
                var13.quest = var7;
                var13 = var14.bind(var17)(var13);
                if (!var13) {
                    _fun78342_ip = 549;
                    continue _fun78342
                }
            case 472:
                var13 = var7.config;
                var17 = var13.features;
                var14 = var17.includes;
                var13 = _closure1_slot9;
                var13 = var13.NON_GAMING_PLAY_QUEST;
                var13 = var14.bind(var17)(var13);
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var15];
                var14 = var17.bind(var8)(var14);
                var14 = var14.t;
                if (var13) {
                    _fun78342_ip = 538;
                    continue _fun78342
                }
            case 528:
                var13 = var14["wmOh/q"];
                _fun78342_ip = 546;
                continue _fun78342;
            case 538:
                var13 = var14.fe7Xec;
            case 546:
                var16 = var13;
            case 549:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var14.bind(var8)(var13);
                var15 = var13.intl;
                var14 = var15.format;
                var13 = {};
                var13.minutes = var5;
                var17 = var7.config;
                var17 = var17.messages;
                var17 = var17.gameTitle;
                var13.gameTitle = var17;
                var13 = var14.bind(var15)(var16, var13);
                return var13;
            case 613:
                var4 = var4[var12];
                var11 = var11.bind(var8)(var4);
                var4 = var11.isPlayAnyActivityQuest;
                var4 = var4.bind(var11)(var7);
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 7;
                var13 = var15[var11];
                var13 = var12.bind(var8)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var15[var11];
                var11 = var12.bind(var8)(var11);
                var11 = var11.t;
                if (var4) {
                    _fun78342_ip = 725;
                    continue _fun78342
                }
            case 680:
                var12 = var11.xHXCyf;
                var4 = {};
                var4.minutes = var5;
                var15 = var7.config;
                var15 = var15.messages;
                var15 = var15.gameTitle;
                var4.activityName = var15;
                var4 = var13.bind(var14)(var12, var4);
                _fun78342_ip = 746;
                continue _fun78342;
            case 725:
                var12 = var11["1NaRSs"];
                var11 = {};
                var11.minutes = var5;
                var4 = var13.bind(var14)(var12, var11);
            case 746:
                return var4;
            case 748:
                var1 = var1.title;
                return var1;
            case 755:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var10 = var4.bind(var8)(var1);
                var4 = var10.getDefaultWatchVideoTask;
                var1 = var7.config;
                var4 = var4.bind(var10)(var1);
                var1 = null;
                var10 = var1 == var4;
                var12 = undefined;
                if (var10) {
                    _fun78342_ip = 811;
                    continue _fun78342
                }
            case 799:
                var4 = var4.messages;
                var12 = var4.videoTitle;
            case 811:
                if (!(var1 != var12)) {
                    _fun78342_ip = 882;
                    continue _fun78342
                }
            case 815:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 7;
                var10 = var13[var1];
                var10 = var4.bind(var8)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var1 = var13[var1];
                var1 = var4.bind(var8)(var1);
                var1 = var1.t;
                var4 = var1["9m9Mna"];
                var1 = {};
                var1.videoTitle = var12;
                var1 = var10.bind(var11)(var4, var1);
                _fun78342_ip = 937;
                continue _fun78342;
            case 882:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 7;
                var4 = var12[var3];
                var4 = var11.bind(var8)(var4);
                var10 = var4.intl;
                var4 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var8)(var3);
                var3 = var3.t;
                var3 = var3["o+e9yh"];
                var1 = var4.bind(var10)(var3);
            case 937:
                return var1;
            case 939:
                var1 = 7;
                var3 = var9[var1];
                var3 = var2.bind(var8)(var3);
                var10 = var3.intl;
                var4 = var10.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var3 = var1.Hu8SKW;
                var1 = {};
                var1.targetMinutes = var5;
                var1 = var4.bind(var10)(var3, var1);
                return var1;
            case 998:
                var1 = 7;
                var3 = var9[var1];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun78342_ip = 1087;
                    continue _fun78342
                }
            case 1037:
                var2 = var1.Ajlcd7;
                var0 = {};
                var0.minutes = var5;
                var0.onClick = var6;
                var7 = var7.config;
                var7 = var7.messages;
                var7 = var7.gameTitle;
                var0.gameTitle = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun78342_ip = 1113;
                continue _fun78342;
            case 1087:
                var2 = var1.gbtCpW;
                var1 = {};
                var1.onClick = var6;
                var1.minutes = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1113:
                return var0;
        }
    };
    var2.useQuestInstructionTitle = var5;
    var2.getQuestsInstructionsToWinReward = var4;
    var2.useQuestsInstructionsToWinReward = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: useQuestTileDescription, environment: var1
        _fun78343: for (var _fun78343_ip = 0;;) switch (_fun78343_ip) {
            case 0:
                var5 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 8;
                var0 = var8[var9];
                var6 = undefined;
                var2 = var7.bind(var6)(var0);
                var0 = var2.useQuestTaskDetails;
                var4 = var0.bind(var2)(var5);
                var0 = 10;
                var0 = var8[var0];
                var2 = var7.bind(var6)(var0);
                var0 = var2.getThirdPartyTaskDetails;
                var2 = var0.bind(var2)(var5);
                var3 = _closure1_slot18;
                var0 = {};
                var0.quest = var5;
                var0.taskDetails = var4;
                var4 = _closure1_slot7;
                var4 = var4.QUEST_HOME_DESKTOP;
                var0.location = var4;
                var4 = 12;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.QuestContent;
                var4 = var4.QUEST_HOME_DESKTOP;
                var0.questContent = var4;
                var4 = arg1;
                var0.sourceQuestContent = var4;
                var4 = arg3;
                var0.popoutTargetElementRef = var4;
                var4 = arg2;
                var0.gameProfileSource = var4;
                var3 = var3.bind(var6)(var0);
                var7 = var5.userStatus;
                var0 = null;
                var8 = var0 == var7;
                var4 = undefined;
                if (var8) {
                    _fun78343_ip = 173;
                    continue _fun78343
                }
            case 167:
                var4 = var7.claimedAt;
            case 173:
                var4 = var0 != var4;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var8 = var8.bind(var6)(var7);
                var7 = var8.useQuestFormattedDate;
                var9 = var5.userStatus;
                var10 = var0 == var9;
                var5 = undefined;
                if (var10) {
                    _fun78343_ip = 221;
                    continue _fun78343
                }
            case 215:
                var5 = var9.claimedAt;
            case 221:
                var5 = var7.bind(var8)(var5);
                if (var4) {
                    _fun78343_ip = 254;
                    continue _fun78343
                }
            case 229:
                if (!(var0 == var2)) {
                    _fun78343_ip = 247;
                    continue _fun78343
                }
            case 233:
                var4 = var0 != var3;
                var0 = null;
                if (!var4) {
                    _fun78343_ip = 245;
                    continue _fun78343
                }
            case 242:
                var0 = var3;
            case 245:
                _fun78343_ip = 252;
                continue _fun78343;
            case 247:
                var0 = var2.description;
            case 252:
                _fun78343_ip = 321;
                continue _fun78343;
            case 254:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.lOVr0O;
                var1 = {};
                var1.claimDate = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 321:
                return var0;
        }
    };
    var2.useQuestTileDescription = var3;
    var3 = function(arg0) { // Original name: useQuestBarSubtitle, environment: var1
        _fun78344: for (var _fun78344_ip = 0;;) switch (_fun78344_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.quest;
                var15 = var0.isExpanded;
                var22 = var0.sourceQuestContent;
                var11 = var0.activeScreen;
                var21 = var0.popoutTargetElementRef;
                var20 = var0.onGameSheetOpened;
                var6 = var0.onGameSheetClosed;
                var0 = var3.config;
                var0 = var0.rewardsConfig;
                var9 = var0.rewardsExpireAt;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var4 = var2[var1];
                var5 = undefined;
                var8 = var7.bind(var5)(var4);
                var4 = var8.useQuestFormattedDate;
                var4 = var4.bind(var8)(var9);
                var8 = var2[var1];
                var9 = var7.bind(var5)(var8);
                var8 = var9.useQuestTaskDetails;
                var10 = var8.bind(var9)(var3);
                var2 = var2[var1];
                var7 = var7.bind(var5)(var2);
                var2 = var7.useThirdPartyTaskDetails;
                var18 = var2.bind(var7)(var3);
                var7 = var3.userStatus;
                var17 = null;
                var8 = var17 == var7;
                var2 = undefined;
                if (var8) {
                    _fun78344_ip = 161;
                    continue _fun78344
                }
            case 155:
                var2 = var7.completedAt;
            case 161:
                var16 = var17 != var2;
                var7 = var3.userStatus;
                var8 = var17 == var7;
                var2 = undefined;
                if (var8) {
                    _fun78344_ip = 186;
                    continue _fun78344
                }
            case 180:
                var2 = var7.enrolledAt;
            case 186:
                var8 = var17 != var2;
                var2 = var10.percentComplete;
                var14 = 0;
                var7 = var2 > var14;
                var12 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = var19[var1];
                var2 = var12.bind(var5)(var1);
                var1 = var2.useIsQuestProgressing;
                var13 = var1.bind(var2)(var3);
                var2 = _closure1_slot18;
                var1 = {};
                var1.quest = var3;
                var9 = _closure1_slot7;
                var9 = var9.QUESTS_BAR;
                var1.location = var9;
                var9 = 12;
                var23 = var19[var9];
                var23 = var12.bind(var5)(var23);
                var23 = var23.QuestContent;
                var23 = var23.QUEST_BAR_V2;
                var1.questContent = var23;
                var1.taskDetails = var10;
                var1.sourceQuestContent = var22;
                var1.popoutTargetElementRef = var21;
                var1.onGameSheetOpened = var20;
                var1.onGameSheetClosed = var6;
                var6 = 18;
                var6 = var19[var6];
                var6 = var12.bind(var5)(var6);
                var6 = var6.GameProfileSources;
                var6 = var6.QuestBar;
                var1.gameProfileSource = var6;
                var2 = var2.bind(var5)(var1);
                if (!(var17 == var18)) {
                    _fun78344_ip = 355;
                    continue _fun78344
                }
            case 347:
                var12 = var10.percentComplete;
                _fun78344_ip = 361;
                continue _fun78344;
            case 355:
                var12 = var18.percentComplete;
            case 361:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var16) {
                    _fun78344_ip = 880;
                    continue _fun78344
                }
            case 375:
                if (var15) {
                    _fun78344_ip = 647;
                    continue _fun78344
                }
            case 381:
                var15 = 10;
                var15 = var6[var15];
                var16 = var1.bind(var5)(var15);
                var15 = var16.hasWatchVideoTasks;
                var15 = var15.bind(var16)(var3);
                if (var15) {
                    _fun78344_ip = 590;
                    continue _fun78344
                }
            case 410:
                if (!(!(var12 > var14))) {
                    _fun78344_ip = 473;
                    continue _fun78344
                }
            case 414:
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 7;
                var14 = var19[var12];
                var14 = var16.bind(var5)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var19[var12];
                var12 = var16.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12.S6UUc5;
                var12 = var14.bind(var15)(var12);
                _fun78344_ip = 588;
                continue _fun78344;
            case 473:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                if (var13) {
                    _fun78344_ip = 533;
                    continue _fun78344
                }
            case 484:
                var13 = 7;
                var14 = var16[var13];
                var14 = var15.bind(var5)(var14);
                var19 = var14.intl;
                var14 = var19.string;
                var13 = var16[var13];
                var13 = var15.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.mOrpXG;
                var13 = var14.bind(var19)(var13);
                _fun78344_ip = 585;
                continue _fun78344;
            case 533:
                var14 = 20;
                var14 = var16[var14];
                var16 = var15.bind(var5)(var14);
                var15 = var16.getContextualEntrypointHeading;
                var14 = {};
                var14.quest = var3;
                var14.taskDetails = var10;
                var19 = var17 != var18;
                var17 = undefined;
                if (!var19) {
                    _fun78344_ip = 575;
                    continue _fun78344
                }
            case 572:
                var17 = var18;
            case 575:
                var14.thirdPartyTaskDetails = var17;
                var13 = var15.bind(var16)(var14);
            case 585:
                var12 = var13;
            case 588:
                _fun78344_ip = 645;
                continue _fun78344;
            case 590:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 7;
                var14 = var17[var13];
                var14 = var16.bind(var5)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13["o+e9yh"];
                var12 = var14.bind(var15)(var13);
            case 645:
                return var12;
            case 647:
                var9 = var6[var9];
                var9 = var1.bind(var5)(var9);
                var9 = var9.TaskPlatformScreen;
                var9 = var9.SELECT;
                if (!(var11 !== var9)) {
                    _fun78344_ip = 821;
                    continue _fun78344
                }
            case 675:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 9;
                var9 = var12[var9];
                var11 = var11.bind(var5)(var9);
                var9 = var11.isSponsoredPlayQuest;
                var9 = var9.bind(var11)(var3);
                if (!var9) {
                    _fun78344_ip = 819;
                    continue _fun78344
                }
            case 709:
                if (!var8) {
                    _fun78344_ip = 819;
                    continue _fun78344
                }
            case 712:
                if (var7) {
                    _fun78344_ip = 819;
                    continue _fun78344
                }
            case 715:
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 11;
                var8 = var12[var8];
                var9 = var7.bind(var5)(var8);
                var8 = var9.getDefaultRewardNameWithArticle;
                var3 = var3.config;
                var11 = var8.bind(var9)(var3);
                var3 = 7;
                var8 = var12[var3];
                var8 = var7.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var3 = var12[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.t;
                var7 = var3["1votF6"];
                var3 = {};
                var3.rewardNameWithArticle = var11;
                var10 = var10.targetMinutes;
                var3.targetMinutes = var10;
                var3 = var8.bind(var9)(var7, var3);
                return var3;
            case 819:
                return var2;
            case 821:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var2 = var8[var0];
                var2 = var7.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var8[var0];
                var0 = var7.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.sWUpN8;
                var0 = var2.bind(var3)(var0);
                return var0;
            case 880:
                var0 = 7;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.APddvF;
                var0 = {};
                var0.expirationDate = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useQuestBarSubtitle = var3;
    var3 = function(arg0) { // Original name: useQuestBarTitle, environment: var1
        _fun78345: for (var _fun78345_ip = 0;;) switch (_fun78345_ip) {
            case 0:
                var3 = arg0;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var4 = undefined;
                var6 = var7.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.locale;
                    return var0;
                };
                var8 = var5.bind(var6)(var2, var1);
                var5 = 8;
                var1 = var9[var5];
                var2 = var7.bind(var4)(var1);
                var1 = var2.useQuestTaskDetails;
                var6 = var1.bind(var2)(var3);
                var1 = var9[var5];
                var2 = var7.bind(var4)(var1);
                var1 = var2.useTaskPlatformScreen;
                var10 = var1.bind(var2)(var3, var6);
                var2 = _closure1_slot3;
                var1 = 1;
                var2 = var2.bind(var4)(var10, var1);
                var1 = 0;
                var2 = var2[var1];
                var5 = var9[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.useThirdPartyTaskDetails;
                var9 = var5.bind(var7)(var3);
                var10 = var3.userStatus;
                var7 = null;
                var11 = var7 == var10;
                var5 = undefined;
                if (var11) {
                    _fun78345_ip = 166;
                    continue _fun78345
                }
            case 160:
                var5 = var10.completedAt;
            case 166:
                var5 = var7 != var5;
                if (!(var7 == var9)) {
                    _fun78345_ip = 182;
                    continue _fun78345
                }
            case 174:
                var6 = var6.percentComplete;
                _fun78345_ip = 188;
                continue _fun78345;
            case 182:
                var6 = var9.percentComplete;
            case 188:
                if (var5) {
                    _fun78345_ip = 528;
                    continue _fun78345
                }
            case 194:
                var9 = var3.userStatus;
                var10 = var7 == var9;
                var5 = undefined;
                if (var10) {
                    _fun78345_ip = 215;
                    continue _fun78345
                }
            case 209:
                var5 = var9.enrolledAt;
            case 215:
                if (!(var7 != var5)) {
                    _fun78345_ip = 226;
                    continue _fun78345
                }
            case 219:
                if (!(!(var6 > var1))) {
                    _fun78345_ip = 425;
                    continue _fun78345
                }
            case 226:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.TaskPlatformScreen;
                var1 = var1.SELECT;
                if (!(var2 !== var1)) {
                    _fun78345_ip = 366;
                    continue _fun78345
                }
            case 262:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isConsoleQuest;
                var1 = var1.bind(var2)(var3);
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var3 = var9[var2];
                var3 = var7.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var9[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun78345_ip = 353;
                    continue _fun78345
                }
            case 340:
                var1 = var2["7e5k7L"];
                var1 = var3.bind(var5)(var1);
                _fun78345_ip = 364;
                continue _fun78345;
            case 353:
                var2 = var2.mOrpXG;
                var1 = var3.bind(var5)(var2);
            case 364:
                _fun78345_ip = 423;
                continue _fun78345;
            case 366:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var3 = var9[var2];
                var3 = var7.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var9[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.EMrUHQ;
                var1 = var3.bind(var5)(var2);
            case 423:
                return var1;
            case 425:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var1 = var7[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.formatPercent;
                var1 = {};
                var9 = 'floor';
                var1.roundingMode = var9;
                var6 = var3.bind(var5)(var8, var6, var1);
                var1 = 7;
                var3 = var7[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.lVZaXD;
                var1 = {};
                var1.percent = var6;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 528:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["ij5E/5"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useQuestBarTitle = var3;
    var3 = function(arg0) { // Original name: usePrimaryCtaCopy, environment: var1
        _fun78347: for (var _fun78347_ip = 0;;) switch (_fun78347_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.quest;
                var5 = var0.application;
                var1 = var0.shortText;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun78347_ip = 30;
                    continue _fun78347
                }
            case 28:
                var1 = false;
            case 30:
                var0 = function(arg0) { // Original name: useSimplifiedQuestTaskType, environment: var0
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot19;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var6 = var0.bind(var4)(var2);
                var3 = _closure1_slot13;
                var3 = var3.PLAY;
                if (!(var3 !== var6)) {
                    _fun78347_ip = 414;
                    continue _fun78347
                }
            case 64:
                var3 = _closure1_slot13;
                var3 = var3.STREAM;
                if (!(var3 !== var6)) {
                    _fun78347_ip = 357;
                    continue _fun78347
                }
            case 81:
                var3 = _closure1_slot13;
                var3 = var3.WATCH_VIDEO;
                if (!(var3 !== var6)) {
                    _fun78347_ip = 298;
                    continue _fun78347
                }
            case 98:
                var3 = _closure1_slot13;
                var3 = var3.IN_GAME;
                if (!(var3 !== var6)) {
                    _fun78347_ip = 114;
                    continue _fun78347
                }
            case 112:
                return var4;
            case 114:
                var3 = var2.config;
                var7 = var3.features;
                var6 = var7.includes;
                var3 = _closure1_slot9;
                var3 = var3.START_QUEST_CTA;
                var3 = var6.bind(var7)(var3);
                if (!var3) {
                    _fun78347_ip = 161;
                    continue _fun78347
                }
            case 148:
                var3 = _closure1_slot20;
                var3 = var3.bind(var4)(var2, var5);
                if (var3) {
                    _fun78347_ip = 218;
                    continue _fun78347
                }
            case 161:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 7;
                var6 = var9[var3];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.l7E81v;
                var3 = var6.bind(var7)(var3);
                _fun78347_ip = 296;
                continue _fun78347;
            case 218:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var10 = 7;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var8 = var6.intl;
                var7 = var8.string;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var9.bind(var4)(var6);
                var9 = var6.t;
                if (var1) {
                    _fun78347_ip = 283;
                    continue _fun78347
                }
            case 273:
                var6 = var9["hRIVy+"];
                _fun78347_ip = 291;
                continue _fun78347;
            case 283:
                var6 = var9.CkUzLd;
            case 291:
                var3 = var7.bind(var8)(var6);
            case 296:
                return var3;
            case 298:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 7;
                var6 = var9[var3];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.umdNin;
                var3 = var6.bind(var7)(var3);
                return var3;
            case 357:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 7;
                var6 = var9[var3];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.l7E81v;
                var3 = var6.bind(var7)(var3);
                return var3;
            case 414:
                var3 = _closure1_slot20;
                var3 = var3.bind(var4)(var2, var5);
                if (!var3) {
                    _fun78347_ip = 498;
                    continue _fun78347
                }
            case 427:
                var3 = var2.config;
                var6 = var3.features;
                var5 = var6.includes;
                var3 = _closure1_slot9;
                var3 = var3.CLOUD_GAMING_ACTIVITY;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun78347_ip = 635;
                    continue _fun78347
                }
            case 464:
                var2 = var2.config;
                var5 = var2.features;
                var3 = var5.includes;
                var2 = _closure1_slot9;
                var2 = var2.START_QUEST_CTA;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun78347_ip = 555;
                    continue _fun78347
                }
            case 498:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.l7E81v;
                var2 = var3.bind(var5)(var2);
                return var2;
            case 555:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 7;
                var2 = var2[var7];
                var2 = var3.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                if (var1) {
                    _fun78347_ip = 620;
                    continue _fun78347
                }
            case 610:
                var1 = var5["Ie9++s"];
                _fun78347_ip = 628;
                continue _fun78347;
            case 620:
                var1 = var5.E4kW5O;
            case 628:
                var1 = var2.bind(var3)(var1);
                return var1;
            case 635:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["+qoymD"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.usePrimaryCtaCopy = var3;
    var3 = function(arg0) { // Original name: usePremiumExtendableCopy, environment: var1
        _fun78350: for (var _fun78350_ip = 0;;) switch (_fun78350_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var6;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isCollectibleQuestRewardPremiumExtendable;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var1, var3);
                var4 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var0, var1);
                var0 = null;
                if (!var3) {
                    _fun78350_ip = 153;
                    continue _fun78350
                }
            case 73:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun78350_ip = 137;
                    continue _fun78350
                }
            case 122:
                var1 = var2.GYGb3A;
                var1 = var3.bind(var4)(var1);
                _fun78350_ip = 150;
                continue _fun78350;
            case 137:
                var2 = var2["hh7Rb/"];
                var1 = var3.bind(var4)(var2);
            case 150:
                var0 = var1;
            case 153:
                return var0;
        }
    };
    var2.usePremiumExtendableCopy = var3;
    var1 = function(arg0) { // Original name: getRewardCodeRedemptionInstructions, environment: var1
        _fun78353: for (var _fun78353_ip = 0;;) switch (_fun78353_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.quest;
                var10 = var0.rewardCode;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 11;
                var2 = var0[var8];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.isTieredRewardCodeQuest;
                var2 = {};
                var2.quest = var1;
                var6 = var3.bind(var5)(var2);
                var3 = null;
                var5 = var3 == var10;
                var2 = undefined;
                if (var5) {
                    _fun78353_ip = 75;
                    continue _fun78353
                }
            case 69:
                var2 = var10.platform;
            case 75:
                if (!(var3 == var2)) {
                    _fun78353_ip = 111;
                    continue _fun78353
                }
            case 79:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 12;
                var5 = var9[var5];
                var5 = var7.bind(var0)(var5);
                var5 = var5.QuestRewardCodePlatforms;
                var2 = var5.CROSS_PLATFORM;
            case 111:
                var5 = null;
                if (!var6) {
                    _fun78353_ip = 199;
                    continue _fun78353
                }
            case 116:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var8 = var7.bind(var0)(var6);
                var7 = var8.getRewardCodeQuestReward;
                var6 = {};
                var6.quest = var1;
                var11 = var3 == var10;
                var9 = undefined;
                if (var11) {
                    _fun78353_ip = 161;
                    continue _fun78353
                }
            case 155:
                var9 = var10.tier;
            case 161:
                if (!(var3 == var9)) {
                    _fun78353_ip = 189;
                    continue _fun78353
                }
            case 165:
                var11 = var1.userStatus;
                var12 = var3 == var11;
                var10 = undefined;
                if (var12) {
                    _fun78353_ip = 186;
                    continue _fun78353
                }
            case 180:
                var10 = var11.claimedTier;
            case 186:
                var9 = var10;
            case 189:
                var6.idx = var9;
                var5 = var7.bind(var8)(var6);
            case 199:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 20;
                var4 = var7[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.getDefaultReward;
                var1 = var1.config;
                var4 = var4.bind(var6)(var1);
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun78353_ip = 265;
                    continue _fun78353
                }
            case 244:
                var5 = var5.messages;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun78353_ip = 265;
                    continue _fun78353
                }
            case 259:
                var1 = var5.redemptionInstructionsByPlatform;
            case 265:
                if (!(var3 == var1)) {
                    _fun78353_ip = 281;
                    continue _fun78353
                }
            case 269:
                var4 = var4.messages;
                var1 = var4.redemptionInstructionsByPlatform;
            case 281:
                var3 = var3 != var2;
                var0 = undefined;
                if (!var3) {
                    _fun78353_ip = 294;
                    continue _fun78353
                }
            case 290:
                var0 = var1[var2];
            case 294:
                return var0;
        }
    };
    var2.getRewardCodeRedemptionInstructions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1676, 1613, 5184, 660, 1615, 1234, 5268, 5221, 5222, 5242, 5186, 1675, 9939, 1628, 566, 9940, 9946, 5272, 5245, 1604, 7919, 2]);