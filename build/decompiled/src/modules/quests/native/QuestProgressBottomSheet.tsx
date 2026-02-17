// modules/quests/native/QuestProgressBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 12;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {};
        var9 = arg0;
        var10 = var0;
        var5 = copyDataProperties(var10, var9);
        var5 = _closure1_slot1;
        var4 = 13;
        var4 = var8[var4];
        var5 = var5.bind(var2)(var4);
        var4 = 'icon';
        var0[var4] = var5;
        var5 = 'secondary-overlay';
        var4 = 'variant';
        var0[var4] = var5;
        var4 = 14;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["UKOtz+"];
        var5 = var5.bind(var6)(var4);
        var4 = 'accessibilityLabel';
        var0[var4] = var5;
        var5 = 'sm';
        var4 = 'size';
        var0[var4] = var5;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun111208: for (var _fun111208_ip = 0;;) switch (_fun111208_ip) {
            case 0:
                var1 = arg0;
                var32 = var1.quest;
                var _closure2_slot0 = var32;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useIsScreenLandscape;
                var30 = var1.bind(var2)();
                var1 = _closure1_slot12;
                var12 = var1.bind(var3)(var30);
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                var15 = var1.gradientEnd;
                var1 = 16;
                var1 = var4[var1];
                var5 = var6.bind(var3)(var1);
                var2 = var5.useGetOrFetchApplication;
                var1 = 17;
                var1 = var4[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.getActivityApplicationId;
                var1 = var1.bind(var6)(var32);
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot1;
                var1 = 18;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = null;
                var6 = var7 == var5;
                var4 = undefined;
                if (var6) {
                    _fun111208_ip = 157;
                    continue _fun111208
                }
            case 152:
                var4 = var5.id;
            case 157:
                var1.applicationId = var4;
                var4 = 600;
                var1.size = var4;
                var4 = ['embedded_cover'];
                var1.names = var4;
                var1 = var2.bind(var3)(var1);
                var13 = var1.url;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useQuestTaskDetails;
                var8 = var1.bind(var2)(var32);
                var21 = 14;
                var1 = var5[var21];
                var1 = var6.bind(var3)(var1);
                var9 = var1.intl;
                var4 = var9.formatToPlainString;
                var1 = var5[var21];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.EAYZAr;
                var1 = {};
                var10 = var32.config;
                var10 = var10.messages;
                var10 = var10.questName;
                var1.questName = var10;
                var27 = var4.bind(var9)(var2, var1);
                var1 = 20;
                var1 = var5[var1];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useQuestsInstructionsToWinReward;
                var1 = {};
                var1.quest = var32;
                var1.taskDetails = var8;
                var8 = _closure1_slot8;
                var8 = var8.QUEST_ACTIVITY_BOTTOM_SHEET;
                var1.location = var8;
                var31 = 11;
                var8 = var5[var31];
                var8 = var6.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var1.questContent = var8;
                var5 = var5[var31];
                var5 = var6.bind(var3)(var5);
                var5 = var5.QuestContent;
                var5 = var5.RUNNING_ACTIVITY;
                var1.sourceQuestContent = var5;
                var28 = var2.bind(var4)(var1);
                var2 = var32.userStatus;
                var4 = var7 == var2;
                var1 = undefined;
                if (var4) {
                    _fun111208_ip = 423;
                    continue _fun111208
                }
            case 417:
                var1 = var2.completedAt;
            case 423:
                var24 = var7 != var1;
                if (!var24) {
                    _fun111208_ip = 455;
                    continue _fun111208
                }
            case 430:
                var2 = var32.userStatus;
                var4 = var7 == var2;
                var1 = undefined;
                if (var4) {
                    _fun111208_ip = 451;
                    continue _fun111208
                }
            case 445:
                var1 = var2.claimedAt;
            case 451:
                var24 = var7 == var1;
            case 455:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var6 = var1.bind(var3)(var2);
                var5 = var6.useQuestRewardClaimHandler;
                var2 = {};
                var2.quest = var32;
                var8 = var4[var31];
                var8 = var1.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var2.questContent = var8;
                var8 = var4[var31];
                var8 = var1.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var2.sourceQuestContent = var8;
                var2 = var5.bind(var6)(var2);
                var19 = var2.isClaiming;
                var9 = var2.claim;
                _closure2_slot1 = var9;
                var20 = var2.isLoading;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var5 = _closure1_slot3;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun111210: for (var _fun111210_ip = 0;;) switch (_fun111210_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun111210_ip = 83;
                                    continue _fun111210
                                }
                            case 7:
                                var1 = _closure2_slot1;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun111210_ip = 80;
                                    continue _fun111210
                                }
                            case 30:
                                if (!var1) {
                                    _fun111210_ip = 77;
                                    continue _fun111210
                                }
                            case 33:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 22;
                                var4 = var6[var4];
                                var5 = var5.bind(var2)(var4);
                                var4 = var5.updateFramePanelMode;
                                var3 = _closure1_slot9;
                                var3 = var3.PIP;
                                var3 = var4.bind(var5)(var3);
                            case 77:
                                return var2;
                            case 80:
                                return var1;
                            case 83:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var3)(var2);
                var2 = new Array(1);
                var2[0] = var9;
                var23 = var6.bind(var8)(var5, var2);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = var32.id;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 22;
                    var2 = var3[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.updateFramePanelMode;
                    var2 = _closure1_slot9;
                    var2 = var2.PIP;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot0;
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openQuestHome;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.scrollToQuestId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var22 = var6.bind(var8)(var2, var5);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = var32.id;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 23;
                    var2 = var6[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var1 = 25;
                    var1 = var6[var1];
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.showShareActionSheet;
                    var1 = {};
                    var4 = 26;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.getQuestUrl;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var1.message = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var26 = var6.bind(var8)(var2, var5);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var16 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot11;
                var0 = 27;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'handleDisabled': true,
                    'startExpanded': true
                };
                var18 = true;
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var12.heroContainer;
                var4.style = var8;
                var8 = var7 != var13;
                if (!var8) {
                    _fun111208_ip = 819;
                    continue _fun111208
                }
            case 767:
                var10 = _closure1_slot10;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 28;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var11 = {};
                var11.uri = var13;
                var7.source = var11;
                var11 = var12.heroImg;
                var7.style = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 819:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 29;
                var8 = var17[var8];
                var9 = var13.bind(var3)(var8);
                var8 = {};
                var11 = var12.heroGradient;
                var8.style = var11;
                var25 = _closure1_slot0;
                var11 = 30;
                var29 = var17[var11];
                var29 = var25.bind(var3)(var29);
                var29 = var29.VerticalGradient;
                var29 = var29.START;
                var8.start = var29;
                var11 = var17[var11];
                var11 = var25.bind(var3)(var11);
                var11 = var11.VerticalGradient;
                var11 = var11.END;
                var8.end = var11;
                var11 = ['rgba(0, 0, 0, 0)'];
                var11[1] = var15;
                var8.colors = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var12.gameTileContainer;
                var8.style = var11;
                var15 = _closure1_slot10;
                var11 = 31;
                var11 = var17[var11];
                var13 = var13.bind(var3)(var11);
                var11 = {};
                var11.quest = var32;
                var17 = 80;
                var25 = var17;
                if (!var30) {
                    _fun111208_ip = 1003;
                    continue _fun111208
                }
            case 1000:
                var25 = 56;
            case 1003:
                var11.height = var25;
                if (!var30) {
                    _fun111208_ip = 1013;
                    continue _fun111208
                }
            case 1010:
                var17 = 56;
            case 1013:
                var11.width = var17;
                var11 = var15.bind(var3)(var13, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var12.contextMenuContainer;
                var8.style = var11;
                var15 = _closure1_slot10;
                var25 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 12;
                var11 = var17[var11];
                var11 = var25.bind(var3)(var11);
                var13 = var11.IconButton;
                var11 = {};
                var29 = _closure1_slot1;
                var33 = 32;
                var33 = var17[var33];
                var33 = var29.bind(var3)(var33);
                var11.icon = var33;
                var11.onPress = var26;
                var26 = 'secondary-overlay';
                var11.variant = var26;
                var26 = 'sm';
                var11.size = var26;
                var26 = var17[var21];
                var26 = var25.bind(var3)(var26);
                var34 = var26.intl;
                var33 = var34.string;
                var26 = var17[var21];
                var26 = var25.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.RDE0Sc;
                var26 = var33.bind(var34)(var26);
                var11.accessibilityLabel = var26;
                var13 = var15.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var26 = _closure1_slot10;
                var13 = 33;
                var13 = var17[var13];
                var15 = var29.bind(var3)(var13);
                var13 = {};
                var13.quest = var32;
                var13.showShareLink = var18;
                var32 = _closure1_slot8;
                var32 = var32.QUEST_ACTIVITY_BOTTOM_SHEET;
                var13.location = var32;
                var31 = var17[var31];
                var31 = var25.bind(var3)(var31);
                var31 = var31.QuestContent;
                var31 = var31.RUNNING_ACTIVITY;
                var13.sourceQuestContent = var31;
                var31 = _closure1_slot14;
                var13.children = var31;
                var13 = var26.bind(var3)(var15, var13);
                var11[1] = var13;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var12.contentContainer;
                var5.style = var8;
                var11 = _closure1_slot11;
                var9 = 34;
                var8 = var17[var9];
                var8 = var25.bind(var3)(var8);
                var10 = var8.Stack;
                var8 = {};
                var15 = 'vertical';
                var8.direction = var15;
                var13 = 8;
                var26 = var17[var13];
                var26 = var29.bind(var3)(var26);
                var26 = var26.spacing;
                var26 = var26.PX_8;
                var8.spacing = var26;
                var26 = var12.textContainer;
                var8.style = var26;
                var26 = _closure1_slot10;
                var29 = 35;
                var17 = var17[var29];
                var17 = var25.bind(var3)(var17);
                var25 = var17.Text;
                var17 = {};
                var31 = 'heading-lg/bold';
                if (!var30) {
                    _fun111208_ip = 1437;
                    continue _fun111208
                }
            case 1433:
                var31 = 'heading-md/bold';
            case 1437:
                var17.variant = var31;
                var31 = 'mobile-text-heading-primary';
                var17.color = var31;
                var17.children = var27;
                var25 = var26.bind(var3)(var25, var17);
                var17 = new Array(2);
                var17[0] = var25;
                var27 = _closure1_slot10;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var29];
                var25 = var26.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {};
                var29 = var12.questDescription;
                var25.style = var29;
                var29 = 'text-md/normal';
                if (!var30) {
                    _fun111208_ip = 1522;
                    continue _fun111208
                }
            case 1516:
                var29 = 'text-sm/normal';
            case 1522:
                var25.variant = var29;
                var29 = 'text-muted';
                var25.color = var29;
                var25.children = var28;
                var25 = var27.bind(var3)(var26, var25);
                var17[1] = var25;
                var8.children = var17;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot11;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = var25[var9];
                var9 = var26.bind(var3)(var9);
                var10 = var9.Stack;
                var9 = {};
                var9.direction = var15;
                var15 = _closure1_slot1;
                var13 = var25[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_12;
                var9.spacing = var13;
                var12 = var12.buttonsContainer;
                var9.style = var12;
                var17 = _closure1_slot10;
                var13 = 36;
                var12 = var25[var13];
                var12 = var26.bind(var3)(var12);
                var15 = var12.Button;
                var12 = {};
                var27 = 'lg';
                var12.size = var27;
                var25 = var25[var21];
                var25 = var26.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var21];
                var25 = var28.bind(var3)(var25);
                var28 = var25.t;
                if (var24) {
                    _fun111208_ip = 1724;
                    continue _fun111208
                }
            case 1716:
                var25 = var28.LLLLPD;
                _fun111208_ip = 1730;
                continue _fun111208;
            case 1724:
                var25 = var28.cfY4PE;
            case 1730:
                var25 = var26.bind(var27)(var25);
                var12.text = var25;
                if (!var24) {
                    _fun111208_ip = 1745;
                    continue _fun111208
                }
            case 1742:
                var22 = var23;
            case 1745:
                var12.onPress = var22;
                if (var19) {
                    _fun111208_ip = 1755;
                    continue _fun111208
                }
            case 1752:
                var19 = var20;
            case 1755:
                var12.loading = var19;
                var12.grow = var18;
                var15 = var17.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = _closure1_slot10;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = var17[var13];
                var13 = var20.bind(var3)(var13);
                var14 = var13.Button;
                var13 = {
                    'size': 'lg',
                    'text': null,
                    'onPress': null,
                    'variant': 'secondary',
                    'grow': true
                };
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["ETE/oC"];
                var17 = var18.bind(var19)(var17);
                var13.text = var17;
                var13.onPress = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
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
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun111214: for (var _fun111214_ip = 0;;) switch (_fun111214_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var1 = {};
                var2 = 'flex';
                var1.display = var2;
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = 8;
                var8 = var2[var6];
                var5 = undefined;
                var8 = var7.bind(var5)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.paddingHorizontal = var8;
                var2 = var2[var6];
                var2 = var7.bind(var5)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_16;
                var1.paddingBottom = var2;
                var0.contentContainer = var1;
                var1 = {};
                var2 = 140;
                if (!var4) {
                    _fun111214_ip = 94;
                    continue _fun111214
                }
            case 91:
                var2 = 125;
            case 94:
                var1.height = var2;
                var2 = 'relative';
                var1.position = var2;
                var2 = 0;
                if (var4) {
                    _fun111214_ip = 146;
                    continue _fun111214
                }
            case 111:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.spacing;
                var8 = var7.PX_8;
                var7 = 52;
                var2 = var7 + var8;
            case 146:
                var1.marginBottom = var2;
                var0.heroContainer = var1;
                var1 = {};
                var2 = 'cover';
                var1.resizeMode = var2;
                var9 = _closure1_slot6;
                var12 = var9.absoluteFillObject;
                var13 = var1;
                var2 = copyDataProperties(var13, var12);
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.lg;
                var10 = 'borderTopLeftRadius';
                var1[var10] = var7;
                var7 = var2[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.radii;
                var11 = var7.lg;
                var7 = 'borderTopRightRadius';
                var1[var7] = var11;
                var0.heroImg = var1;
                var1 = {};
                var12 = var9.absoluteFillObject;
                var13 = var1;
                var9 = copyDataProperties(var13, var12);
                var9 = var2[var6];
                var9 = var8.bind(var5)(var9);
                var9 = var9.radii;
                var9 = var9.lg;
                var1[var10] = var9;
                var2 = var2[var6];
                var2 = var8.bind(var5)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1[var7] = var2;
                var0.heroGradient = var1;
                var1 = {
                    'position': 'absolute',
                    'bottom': null,
                    'left': 0,
                    'right': 0,
                    'alignItems': 'center'
                };
                var2 = -52;
                if (!var4) {
                    _fun111214_ip = 374;
                    continue _fun111214
                }
            case 346:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.spacing;
                var2 = var7.PX_12;
            case 374:
                var1.bottom = var2;
                var2 = 'center';
                var0.gameTileContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'top': null,
                    'right': null,
                    'display': 'flex',
                    'flexDirection': 'row',
                    'gap': null,
                    'alignItems': 'center'
                };
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var9 = var7[var6];
                var9 = var8.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_16;
                var1.top = var9;
                var9 = var7[var6];
                var9 = var8.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_16;
                var1.right = var9;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var1.gap = var7;
                var0.contextMenuContainer = var1;
                var1 = {};
                var1.alignItems = var2;
                var7 = undefined;
                if (var4) {
                    _fun111214_ip = 529;
                    continue _fun111214
                }
            case 502:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var6];
                var8 = var9.bind(var5)(var8);
                var8 = var8.spacing;
                var7 = var8.PX_16;
            case 529:
                var1.paddingTop = var7;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var9 = var7[var6];
                var9 = var8.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_8;
                var1.gap = var9;
                var7 = var7[var6];
                var7 = var8.bind(var5)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var1.marginBottom = var7;
                var1.textAlign = var2;
                var0.textContainer = var1;
                var1 = {};
                var1.textAlign = var2;
                var0.questDescription = var1;
                var1 = {};
                var2 = undefined;
                if (var4) {
                    _fun111214_ip = 643;
                    continue _fun111214
                }
            case 616:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.spacing;
                var2 = var3.PX_16;
            case 643:
                var1.paddingTop = var2;
                var0.buttonsContainer = var1;
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyleProperties;
    var3 = function() { // Environment: var1
        var0 = {};
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.colors;
        var1 = var1.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
        var0.gradientEnd = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestProgressBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111216: for (var _fun111216_ip = 0;;) switch (_fun111216_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.questId;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot7;
                    var1 = var2.getQuest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var _closure2_slot1 = var6;
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun111216_ip = 199;
                    continue _fun111216
                }
            case 83:
                var3 = _closure1_slot10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var9 = true;
                var1.overrideVisibility = var9;
                var1.questOrQuests = var6;
                var6 = 11;
                var9 = var8[var6];
                var9 = var7.bind(var4)(var9);
                var9 = var9.QuestContent;
                var9 = var9.RUNNING_ACTIVITY;
                var1.questContent = var9;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.QuestContent;
                var6 = var6.RUNNING_ACTIVITY;
                var1.sourceQuestContent = var6;
                var5 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var0 = _closure2_slot1;
                    var1.quest = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 199:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5286, 5290, 7944, 33, 1297, 671, 566, 10059, 5292, 8200, 8202, 1235, 5425, 6966, 5329, 8100, 5375, 10049, 10741, 7968, 3284, 10044, 8304, 5353, 4940, 4711, 4106, 670, 10046, 8201, 10779, 4088, 3940, 4092, 2]);