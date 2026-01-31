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
        _fun83863: for (var _fun83863_ip = 0;;) switch (_fun83863_ip) {
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
                var16 = var1.quest;
                var _closure2_slot0 = var16;
                var1 = _closure1_slot12;
                var19 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var1 = 11;
                var2 = var11[var1];
                var10 = var5.bind(var3)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var1 = var1.prevRestingQuestDockMode;
                    var0 = _closure1_slot8;
                    var0 = var0.EXPANDED;
                    var0 = var1 === var0;
                    return var0;
                };
                var12 = var8.bind(var10)(var6, var2);
                var1 = var11[var1];
                var8 = var5.bind(var3)(var1);
                var6 = var8.useStateFromStores;
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
                var17 = var6.bind(var8)(var2, var1);
                var1 = 12;
                var1 = var11[var1];
                var6 = var5.bind(var3)(var1);
                var2 = var6.useHasWatchVideoOnMobileTasks;
                var1 = var16.config;
                var6 = var2.bind(var6)(var1);
                var _closure2_slot1 = var6;
                var1 = 13;
                var1 = var11[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useQuestTaskDetails;
                var28 = var1.bind(var2)(var16);
                var2 = var4.useContext;
                var1 = 14;
                var1 = var11[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.QuestDockExternalCoordinationContext;
                var1 = var2.bind(var4)(var1);
                var5 = var1.setRestingQuestDockMode;
                var _closure2_slot2 = var5;
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun83867: for (var _fun83867_ip = 0;;) switch (_fun83867_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun83867_ip = 258;
                                    continue _fun83867
                                }
                            case 10:
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 15;
                                var1 = var8[var1];
                                var2 = undefined;
                                var7 = var10.bind(var2)(var1);
                                var6 = var7.enrollInQuest;
                                var1 = _closure2_slot0;
                                var5 = var1.id;
                                var1 = {};
                                var9 = 16;
                                var9 = var8[var9];
                                var9 = var10.bind(var2)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                var1.questContentCTA = var9;
                                var9 = 17;
                                var11 = var8[var9];
                                var11 = var10.bind(var2)(var11);
                                var11 = var11.QuestContent;
                                var11 = var11.QUEST_BAR_MOBILE;
                                var1.questContent = var11;
                                var8 = var8[var9];
                                var8 = var10.bind(var2)(var8);
                                var8 = var8.QuestContent;
                                var8 = var8.QUEST_BAR_MOBILE;
                                var1.sourceQuestContent = var8;
                                var1 = var6.bind(var7)(var5, var1);
                                SaveGenerator(address = 149);
                            case 147:
                                return var1;
                            case 149:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun83867_ip = 255;
                                    continue _fun83867
                                }
                            case 155:
                                var5 = _closure2_slot1;
                                if (!var5) {
                                    _fun83867_ip = 252;
                                    continue _fun83867
                                }
                            case 162:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 18;
                                var5 = var7[var5];
                                var6 = var6.bind(var2)(var5);
                                var5 = {};
                                var8 = _closure2_slot0;
                                var8 = var8.id;
                                var5.questId = var8;
                                var8 = _closure1_slot0;
                                var7 = var7[var9];
                                var7 = var8.bind(var2)(var7);
                                var7 = var7.QuestContent;
                                var7 = var7.QUEST_BAR_MOBILE;
                                var5.sourceQuestContent = var7;
                                var5 = var6.bind(var2)(var5);
                                var4 = _closure2_slot2;
                                var3 = _closure1_slot8;
                                var3 = var3.COLLAPSED;
                                var3 = var4.bind(var2)(var3);
                            case 252:
                                return var2;
                            case 255:
                                return var1;
                            case 258:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var8 = var16.id;
                var0 = new Array(3);
                var0[0] = var8;
                var0[1] = var6;
                var0[2] = var5;
                var18 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var19.wrapper;
                var0.style = var4;
                var4 = {};
                var5 = var19.rewardContentWrapper;
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
                var6 = var19.rewardContent;
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
                    _fun83863_ip = 404;
                    continue _fun83863
                }
            case 401:
                var11 = !var13;
            case 404:
                var6.paused = var11;
                var6.quest = var16;
                var11 = var19.questDockRewardTile;
                var6.style = var11;
                var11 = var12;
                if (!var11) {
                    _fun83863_ip = 434;
                    continue _fun83863
                }
            case 431:
                var11 = var13;
            case 434:
                var6.withAnimation = var11;
                var6 = var10.bind(var3)(var7, var6);
                var10 = new Array(2);
                var10[0] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var20 = {};
                var11 = var19.rewardContentCopy;
                var20.style = var11;
                var11 = _closure1_slot10;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 21;
                var21 = var15[var13];
                var21 = var14.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'variant': 'heading-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var23 = 22;
                var24 = var15[var23];
                var24 = var14.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.format;
                var23 = var15[var23];
                var23 = var14.bind(var3)(var23);
                var23 = var23.t;
                var24 = var23.EQa7os;
                var23 = {};
                var27 = var16.config;
                var27 = var27.messages;
                var27 = var27.questName;
                var23.questName = var27;
                var23 = var25.bind(var26)(var24, var23);
                var21.children = var23;
                var22 = var11.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var23 = var13.Text;
                var22 = {
                    'color': 'text-default',
                    'variant': 'text-sm/normal'
                };
                var13 = 23;
                var24 = var15[var13];
                var26 = var14.bind(var3)(var24);
                var25 = var26.useQuestsInstructionsToWinReward;
                var24 = {};
                var24.quest = var16;
                var27 = _closure1_slot9;
                var27 = var27.QUESTS_BAR_MOBILE;
                var24.location = var27;
                var27 = 17;
                var29 = var15[var27];
                var29 = var14.bind(var3)(var29);
                var29 = var29.QuestContent;
                var29 = var29.QUEST_BAR_MOBILE;
                var24.questContent = var29;
                var24.taskDetails = var28;
                var27 = var15[var27];
                var27 = var14.bind(var3)(var27);
                var27 = var27.QuestContent;
                var27 = var27.QUEST_BAR_MOBILE;
                var24.sourceQuestContent = var27;
                var24 = var25.bind(var26)(var24);
                var22.children = var24;
                var22 = var11.bind(var3)(var23, var22);
                var21[1] = var22;
                var20.children = var21;
                var20 = var7.bind(var3)(var6, var20);
                var10[1] = var20;
                var8.children = var10;
                var8 = var2.bind(var3)(var1, var8);
                var5[1] = var8;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = var19.questDockCtaWrapper;
                var5.style = var8;
                var8 = {};
                var10 = var19.questDockCtaSaparator;
                var8.style = var10;
                var10 = var11.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = _closure1_slot1;
                var9 = 24;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var19 = var19.questDockCta;
                var9.style = var19;
                var9.onPress = var18;
                var9.loading = var17;
                var13 = var15[var13];
                var15 = var14.bind(var3)(var13);
                var14 = var15.usePrimaryCtaCopy;
                var13 = {};
                var13.quest = var16;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5189, 5214, 5191, 5216, 33, 1297, 671, 10688, 632, 5188, 5275, 5220, 5221, 5239, 5193, 10621, 10669, 9942, 3900, 1234, 9945, 7593, 2]);