// modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.QuestDockMode;
    var _closure1_slot8 = var7;
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.QUEST_DOCK_BORDER_RADII;
    var12 = var3.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
    var13 = var3.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 1,
        'flexShrink': 0,
        'justifyContent': 'flex-end'
    };
    var9.paddingHorizontal = var13;
    var9.paddingBottom = var12;
    var3.wrapper = var9;
    var9 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'padding': 8,
        'paddingRight': 16
    };
    var9.borderRadius = var10;
    var3.rewardContentWrapper = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'gap': 16
    };
    var3.rewardContent = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'gap': 4
    };
    var3.rewardContentCopy = var9;
    var9 = {};
    var10 = 9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var3.questDockRewardTile = var9;
    var9 = {
        'marginTop': 12,
        'paddingHorizontal': 4,
        'paddingTop': 16,
        'position': 'relative'
    };
    var3.questDockCtaWrapper = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.questDockCta = var9;
    var9 = {
        'position': 'absolute',
        'left': 4294967284,
        'right': 4294967284,
        'top': 0,
        'backgroundColor': null,
        'height': 1,
        'opacity': 1
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var3.questDockCtaSaparator = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun84757: for (var _fun84757_ip = 0;;) switch (_fun84757_ip) {
            case 0:
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 10;
                var1 = var11[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var1 = var2.bind(var4)(var1);
                var13 = var1.isVisible;
                var17 = var1.quest;
                var _closure2_slot0 = var17;
                var1 = _closure1_slot12;
                var20 = var1.bind(var3)();
                var8 = _closure1_slot0;
                var1 = 11;
                var2 = var11[var1];
                var10 = var8.bind(var3)(var2);
                var6 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var1 = var1.prevRestingQuestDockMode;
                    var0 = _closure1_slot8;
                    var0 = var0.EXPANDED;
                    var0 = var1 === var0;
                    return var0;
                };
                var12 = var6.bind(var10)(var5, var2);
                var1 = var11[var1];
                var6 = var8.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.isEnrolling;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var5.bind(var6)(var2, var1);
                var1 = 12;
                var2 = var11[var1];
                var6 = var8.bind(var3)(var2);
                var5 = var6.useHasWatchVideoOnMobileTasks;
                var2 = var17.config;
                var10 = var5.bind(var6)(var2);
                var _closure2_slot1 = var10;
                var2 = 13;
                var2 = var11[var2];
                var5 = var8.bind(var3)(var2);
                var2 = var5.useQuestTaskDetails;
                var29 = var2.bind(var5)(var17);
                var1 = var11[var1];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useMobileActivityQuest;
                var1 = var1.bind(var2)(var17);
                var6 = var1.isMobileActivityQuest;
                var _closure2_slot2 = var6;
                var16 = var1.questApplication;
                var5 = var1.launchMobileActivity;
                var _closure2_slot3 = var5;
                var2 = var4.useContext;
                var1 = 14;
                var1 = var11[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.QuestDockExternalCoordinationContext;
                var1 = var2.bind(var4)(var1);
                var8 = var1.setRestingQuestDockMode;
                var _closure2_slot4 = var8;
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun84761: for (var _fun84761_ip = 0;;) switch (_fun84761_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun84761_ip = 313;
                                    continue _fun84761
                                }
                            case 10:
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 15;
                                var1 = var8[var1];
                                var3 = undefined;
                                var7 = var10.bind(var3)(var1);
                                var6 = var7.enrollInQuest;
                                var1 = _closure2_slot0;
                                var2 = var1.id;
                                var1 = {};
                                var9 = 16;
                                var9 = var8[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                var1.questContentCTA = var9;
                                var9 = 17;
                                var11 = var8[var9];
                                var11 = var10.bind(var3)(var11);
                                var11 = var11.QuestContent;
                                var11 = var11.QUEST_BAR_MOBILE;
                                var1.questContent = var11;
                                var8 = var8[var9];
                                var8 = var10.bind(var3)(var8);
                                var8 = var8.QuestContent;
                                var8 = var8.QUEST_BAR_MOBILE;
                                var1.sourceQuestContent = var8;
                                var1 = var6.bind(var7)(var2, var1);
                                SaveGenerator(address = 149);
                            case 147:
                                return var1;
                            case 149:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun84761_ip = 310;
                                    continue _fun84761
                                }
                            case 158:
                                var2 = _closure2_slot2;
                                if (var2) {
                                    _fun84761_ip = 267;
                                    continue _fun84761
                                }
                            case 165:
                                var2 = _closure2_slot1;
                                if (!var2) {
                                    _fun84761_ip = 304;
                                    continue _fun84761
                                }
                            case 175:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 18;
                                var2 = var7[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = {};
                                var8 = _closure2_slot0;
                                var8 = var8.id;
                                var2.questId = var8;
                                var8 = _closure1_slot0;
                                var7 = var7[var9];
                                var7 = var8.bind(var3)(var7);
                                var7 = var7.QuestContent;
                                var7 = var7.QUEST_BAR_MOBILE;
                                var2.sourceQuestContent = var7;
                                var2 = var6.bind(var3)(var2);
                                var6 = _closure2_slot4;
                                var2 = _closure1_slot8;
                                var2 = var2.COLLAPSED;
                                var2 = var6.bind(var3)(var2);
                                _fun84761_ip = 304;
                                continue _fun84761;
                            case 267:
                                var2 = _closure2_slot3;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address = 279);
                            case 277:
                                return var2;
                            case 279:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun84761_ip = 307;
                                    continue _fun84761
                                }
                            case 285:
                                var5 = _closure2_slot4;
                                var4 = _closure1_slot8;
                                var4 = var4.COLLAPSED;
                                var4 = var5.bind(var3)(var4);
                            case 304:
                                return var3;
                            case 307:
                                return var2;
                            case 310:
                                return var1;
                            case 313:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var14 = var17.id;
                var0 = new Array(5);
                var0[0] = var14;
                var0[1] = var10;
                var0[2] = var8;
                var0[3] = var6;
                var0[4] = var5;
                var19 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var20.wrapper;
                var0.style = var4;
                var4 = {};
                var5 = var20.rewardContentWrapper;
                var4.style = var5;
                var10 = _closure1_slot10;
                var5 = 19;
                var5 = var11[var5];
                var6 = var7.bind(var3)(var5);
                var5 = {};
                var6 = var10.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = {};
                var6 = var20.rewardContent;
                var8.style = var6;
                var6 = 20;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {
                    'paused': null,
                    'height': 80,
                    'width': 80
                };
                var11 = !var12;
                if (var11) {
                    _fun84757_ip = 458;
                    continue _fun84757
                }
            case 455:
                var11 = !var13;
            case 458:
                var6.paused = var11;
                var6.quest = var17;
                var11 = var20.questDockRewardTile;
                var6.style = var11;
                var11 = var12;
                if (!var11) {
                    _fun84757_ip = 488;
                    continue _fun84757
                }
            case 485:
                var11 = var13;
            case 488:
                var6.withAnimation = var11;
                var6 = var10.bind(var3)(var7, var6);
                var10 = new Array(2);
                var10[0] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var21 = {};
                var11 = var20.rewardContentCopy;
                var21.style = var11;
                var11 = _closure1_slot10;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 21;
                var22 = var15[var13];
                var22 = var14.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'variant': 'heading-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = 22;
                var25 = var15[var24];
                var25 = var14.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.format;
                var24 = var15[var24];
                var24 = var14.bind(var3)(var24);
                var24 = var24.t;
                var25 = var24.EQa7os;
                var24 = {};
                var28 = var17.config;
                var28 = var28.messages;
                var28 = var28.questName;
                var24.questName = var28;
                var24 = var26.bind(var27)(var25, var24);
                var22.children = var24;
                var23 = var11.bind(var3)(var23, var22);
                var22 = new Array(2);
                var22[0] = var23;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var24 = var13.Text;
                var23 = {
                    'color': 'text-default',
                    'variant': 'text-sm/normal'
                };
                var13 = 23;
                var25 = var15[var13];
                var27 = var14.bind(var3)(var25);
                var26 = var27.useQuestsInstructionsToWinReward;
                var25 = {};
                var25.quest = var17;
                var28 = _closure1_slot9;
                var28 = var28.QUESTS_BAR_MOBILE;
                var25.location = var28;
                var28 = 17;
                var30 = var15[var28];
                var30 = var14.bind(var3)(var30);
                var30 = var30.QuestContent;
                var30 = var30.QUEST_BAR_MOBILE;
                var25.questContent = var30;
                var25.taskDetails = var29;
                var28 = var15[var28];
                var28 = var14.bind(var3)(var28);
                var28 = var28.QuestContent;
                var28 = var28.QUEST_BAR_MOBILE;
                var25.sourceQuestContent = var28;
                var25 = var26.bind(var27)(var25);
                var23.children = var25;
                var23 = var11.bind(var3)(var24, var23);
                var22[1] = var23;
                var21.children = var22;
                var21 = var7.bind(var3)(var6, var21);
                var10[1] = var21;
                var8.children = var10;
                var8 = var2.bind(var3)(var1, var8);
                var5[1] = var8;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = var20.questDockCtaWrapper;
                var5.style = var8;
                var8 = {};
                var10 = var20.questDockCtaSaparator;
                var8.style = var10;
                var10 = var11.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = _closure1_slot1;
                var9 = 24;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var20 = var20.questDockCta;
                var9.style = var20;
                var9.onPress = var19;
                var9.loading = var18;
                var13 = var15[var13];
                var15 = var14.bind(var3)(var13);
                var14 = var15.usePrimaryCtaCopy;
                var13 = {};
                var13.quest = var17;
                var13.application = var16;
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = !var12;
                var9.shineDisabled = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5284, 5310, 5287, 5312, 33, 1297, 671, 10806, 632, 5283, 5372, 5316, 5317, 5337, 5289, 10736, 10786, 10070, 3938, 1235, 10073, 7689, 2]);