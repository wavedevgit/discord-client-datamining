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
    var _closure1_slot10 = var12;
    var13 = var3.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
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
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun84771: for (var _fun84771_ip = 0;;) switch (_fun84771_ip) {
            case 0:
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var2.bind(var4)(var0);
                var14 = var0.isVisible;
                var17 = var0.quest;
                var _closure2_slot0 = var17;
                var0 = _closure1_slot13;
                var21 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = 11;
                var5 = var8[var0];
                var10 = var2.bind(var3)(var5);
                var7 = var10.useStateFromStores;
                var5 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var18
                    var1 = _closure1_slot7;
                    var1 = var1.prevRestingQuestDockMode;
                    var0 = _closure1_slot8;
                    var0 = var0.EXPANDED;
                    var0 = var1 === var0;
                    return var0;
                };
                var12 = var7.bind(var10)(var6, var5);
                var0 = var8[var0];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var18
                    var2 = _closure1_slot6;
                    var1 = var2.isEnrolling;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var6.bind(var7)(var5, var0);
                var0 = 12;
                var5 = var8[var0];
                var7 = var2.bind(var3)(var5);
                var6 = var7.useHasWatchVideoOnMobileTasks;
                var5 = var17.config;
                var10 = var6.bind(var7)(var5);
                var _closure2_slot1 = var10;
                var5 = 13;
                var5 = var8[var5];
                var6 = var2.bind(var3)(var5);
                var5 = var6.useQuestTaskDetails;
                var32 = var5.bind(var6)(var17);
                var0 = var8[var0];
                var5 = var2.bind(var3)(var0);
                var0 = var5.useMobileActivityQuest;
                var0 = var0.bind(var5)(var17);
                var7 = var0.isMobileActivityQuest;
                var _closure2_slot2 = var7;
                var16 = var0.questApplication;
                var5 = var0.launchMobileActivity;
                var _closure2_slot3 = var5;
                var0 = 14;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.bottom;
                var0 = 15;
                var0 = var8[var0];
                var6 = var2.bind(var3)(var0);
                var1 = var6.useYouBarEnabled;
                var0 = 'QuestDockUnenrolledBody';
                var6 = var1.bind(var6)(var0);
                var1 = var4.useContext;
                var0 = 16;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.QuestDockExternalCoordinationContext;
                var0 = var1.bind(var4)(var0);
                var8 = var0.setRestingQuestDockMode;
                var _closure2_slot4 = var8;
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var18
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun84775: for (var _fun84775_ip = 0;;) switch (_fun84775_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun84775_ip = 313;
                                    continue _fun84775
                                }
                            case 10:
                                var10 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 17;
                                var1 = var8[var1];
                                var3 = undefined;
                                var7 = var10.bind(var3)(var1);
                                var6 = var7.enrollInQuest;
                                var1 = _closure2_slot0;
                                var2 = var1.id;
                                var1 = {};
                                var9 = 18;
                                var9 = var8[var9];
                                var9 = var10.bind(var3)(var9);
                                var9 = var9.QuestContentCTA;
                                var9 = var9.ACCEPT_QUEST;
                                var1.questContentCTA = var9;
                                var9 = 19;
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
                                    _fun84775_ip = 310;
                                    continue _fun84775
                                }
                            case 158:
                                var2 = _closure2_slot2;
                                if (var2) {
                                    _fun84775_ip = 267;
                                    continue _fun84775
                                }
                            case 165:
                                var2 = _closure2_slot1;
                                if (!var2) {
                                    _fun84775_ip = 304;
                                    continue _fun84775
                                }
                            case 175:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 20;
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
                                _fun84775_ip = 304;
                                continue _fun84775;
                            case 267:
                                var2 = _closure2_slot3;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address = 279);
                            case 277:
                                return var2;
                            case 279:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun84775_ip = 307;
                                    continue _fun84775
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
                var13 = var17.id;
                var0 = new Array(5);
                var0[0] = var13;
                var0[1] = var10;
                var0[2] = var8;
                var0[3] = var7;
                var0[4] = var5;
                var20 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var21.wrapper;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var6) {
                    _fun84771_ip = 459;
                    continue _fun84771
                }
            case 426:
                var6 = {};
                var7 = global;
                var10 = var7.Math;
                var8 = var10.max;
                var7 = _closure1_slot10;
                var7 = var8.bind(var10)(var11, var7);
                var6.paddingBottom = var7;
                var5 = var6;
            case 459:
                var4[1] = var5;
                var0.style = var4;
                var8 = _closure1_slot12;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var21.rewardContentWrapper;
                var4.style = var6;
                var11 = _closure1_slot11;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 21;
                var6 = var13[var6];
                var10 = var7.bind(var3)(var6);
                var6 = {};
                var6 = var11.bind(var3)(var10, var6);
                var10 = new Array(2);
                var10[0] = var6;
                var22 = {};
                var6 = var21.rewardContent;
                var22.style = var6;
                var6 = 22;
                var6 = var13[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {
                    'paused': null,
                    'height': 80,
                    'width': 80
                };
                var13 = !var12;
                if (var13) {
                    _fun84771_ip = 574;
                    continue _fun84771
                }
            case 571:
                var13 = !var14;
            case 574:
                var6.paused = var13;
                var6.quest = var17;
                var13 = var21.questDockRewardTile;
                var6.style = var13;
                var13 = var12;
                if (!var13) {
                    _fun84771_ip = 604;
                    continue _fun84771
                }
            case 601:
                var13 = var14;
            case 604:
                var6.withAnimation = var13;
                var6 = var11.bind(var3)(var7, var6);
                var23 = new Array(2);
                var23[0] = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot5;
                var24 = {};
                var11 = var21.rewardContentCopy;
                var24.style = var11;
                var11 = _closure1_slot11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 23;
                var25 = var15[var13];
                var25 = var14.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {
                    'variant': 'heading-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = 24;
                var28 = var15[var27];
                var28 = var14.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.format;
                var27 = var15[var27];
                var27 = var14.bind(var3)(var27);
                var27 = var27.t;
                var28 = var27.EQa7os;
                var27 = {};
                var31 = var17.config;
                var31 = var31.messages;
                var31 = var31.questName;
                var27.questName = var31;
                var27 = var29.bind(var30)(var28, var27);
                var25.children = var27;
                var26 = var11.bind(var3)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var27 = var13.Text;
                var26 = {
                    'color': 'text-default',
                    'variant': 'text-sm/normal'
                };
                var13 = 25;
                var28 = var15[var13];
                var30 = var14.bind(var3)(var28);
                var29 = var30.useQuestsInstructionsToWinReward;
                var28 = {};
                var28.quest = var17;
                var31 = _closure1_slot9;
                var31 = var31.QUESTS_BAR_MOBILE;
                var28.location = var31;
                var31 = 19;
                var33 = var15[var31];
                var33 = var14.bind(var3)(var33);
                var33 = var33.QuestContent;
                var33 = var33.QUEST_BAR_MOBILE;
                var28.questContent = var33;
                var28.taskDetails = var32;
                var31 = var15[var31];
                var31 = var14.bind(var3)(var31);
                var31 = var31.QuestContent;
                var31 = var31.QUEST_BAR_MOBILE;
                var28.sourceQuestContent = var31;
                var28 = var29.bind(var30)(var28);
                var26.children = var28;
                var26 = var11.bind(var3)(var27, var26);
                var25[1] = var26;
                var24.children = var25;
                var24 = var7.bind(var3)(var6, var24);
                var23[1] = var24;
                var22.children = var23;
                var22 = var8.bind(var3)(var5, var22);
                var10[1] = var22;
                var4.children = var10;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = var21.questDockCtaWrapper;
                var5.style = var8;
                var8 = {};
                var10 = var21.questDockCtaSaparator;
                var8.style = var10;
                var10 = var11.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = _closure1_slot1;
                var9 = 26;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var21 = var21.questDockCta;
                var9.style = var21;
                var9.onPress = var20;
                var9.loading = var19;
                var18 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getPrimaryCtaIcon;
                    var1 = _closure2_slot0;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var9.renderIcon = var18;
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
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5286, 5312, 5289, 5314, 33, 1297, 671, 10812, 632, 5285, 5374, 1568, 5283, 5318, 5319, 5339, 5291, 10742, 10792, 10045, 3940, 1235, 10048, 7659, 10043, 2]);