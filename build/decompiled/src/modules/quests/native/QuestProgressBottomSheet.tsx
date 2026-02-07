// modules/quests/native/QuestProgressBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot9;
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
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun111091: for (var _fun111091_ip = 0;;) switch (_fun111091_ip) {
            case 0:
                var1 = arg0;
                var29 = var1.quest;
                var _closure2_slot0 = var29;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot11;
                var12 = var1.bind(var3)();
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                var13 = var1.gradientEnd;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var5 = var6.bind(var3)(var1);
                var2 = var5.useGetOrFetchApplication;
                var1 = 16;
                var1 = var4[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.getActivityApplicationId;
                var1 = var1.bind(var6)(var29);
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot1;
                var1 = 17;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = null;
                var6 = var7 == var5;
                var4 = undefined;
                if (var6) {
                    _fun111091_ip = 134;
                    continue _fun111091
                }
            case 129:
                var4 = var5.id;
            case 134:
                var1.applicationId = var4;
                var4 = 600;
                var1.size = var4;
                var4 = ['embedded_cover'];
                var1.names = var4;
                var1 = var2.bind(var3)(var1);
                var15 = var1.url;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var1 = var5[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useQuestTaskDetails;
                var8 = var1.bind(var2)(var29);
                var1 = var29.config;
                var1 = var1.messages;
                var32 = var1.questName;
                var1 = 19;
                var1 = var5[var1];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useQuestsInstructionsToWinReward;
                var1 = {};
                var1.quest = var29;
                var1.taskDetails = var8;
                var8 = _closure1_slot7;
                var8 = var8.QUEST_ACTIVITY_BOTTOM_SHEET;
                var1.location = var8;
                var28 = 11;
                var8 = var5[var28];
                var8 = var6.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var1.questContent = var8;
                var5 = var5[var28];
                var5 = var6.bind(var3)(var5);
                var5 = var5.QuestContent;
                var5 = var5.RUNNING_ACTIVITY;
                var1.sourceQuestContent = var5;
                var31 = var2.bind(var4)(var1);
                var2 = var29.userStatus;
                var4 = var7 == var2;
                var1 = undefined;
                if (var4) {
                    _fun111091_ip = 345;
                    continue _fun111091
                }
            case 339:
                var1 = var2.completedAt;
            case 345:
                var24 = var7 != var1;
                if (!var24) {
                    _fun111091_ip = 377;
                    continue _fun111091
                }
            case 352:
                var2 = var29.userStatus;
                var4 = var7 == var2;
                var1 = undefined;
                if (var4) {
                    _fun111091_ip = 373;
                    continue _fun111091
                }
            case 367:
                var1 = var2.claimedAt;
            case 373:
                var24 = var7 == var1;
            case 377:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var6 = var1.bind(var3)(var2);
                var5 = var6.useQuestRewardClaimHandler;
                var2 = {};
                var2.quest = var29;
                var8 = var4[var28];
                var8 = var1.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.RUNNING_ACTIVITY;
                var2.questContent = var8;
                var8 = var4[var28];
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
                        _fun111093: for (var _fun111093_ip = 0;;) switch (_fun111093_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun111093_ip = 83;
                                    continue _fun111093
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
                                    _fun111093_ip = 80;
                                    continue _fun111093
                                }
                            case 30:
                                if (!var1) {
                                    _fun111093_ip = 77;
                                    continue _fun111093
                                }
                            case 33:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 21;
                                var4 = var6[var4];
                                var5 = var5.bind(var2)(var4);
                                var4 = var5.updateFramePanelMode;
                                var3 = _closure1_slot8;
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
                var2 = var29.id;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 21;
                    var2 = var3[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.updateFramePanelMode;
                    var2 = _closure1_slot8;
                    var2 = var2.PIP;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot0;
                    var1 = 23;
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
                var2 = var29.id;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 22;
                    var2 = var6[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var1 = 24;
                    var1 = var6[var1];
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.showShareActionSheet;
                    var1 = {};
                    var4 = 25;
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
                var21 = var6.bind(var8)(var2, var5);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var16 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot10;
                var0 = 26;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'handleDisabled': true,
                    'startExpanded': true
                };
                var18 = true;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var12.heroContainer;
                var4.style = var8;
                var8 = var7 != var15;
                if (!var8) {
                    _fun111091_ip = 741;
                    continue _fun111091
                }
            case 689:
                var10 = _closure1_slot9;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 27;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var11 = {};
                var11.uri = var15;
                var7.source = var11;
                var11 = var12.heroImg;
                var7.style = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 741:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot9;
                var15 = _closure1_slot1;
                var25 = _closure1_slot2;
                var8 = 28;
                var8 = var25[var8];
                var9 = var15.bind(var3)(var8);
                var8 = {};
                var11 = var12.heroGradient;
                var8.style = var11;
                var26 = _closure1_slot0;
                var11 = 29;
                var17 = var25[var11];
                var17 = var26.bind(var3)(var17);
                var17 = var17.VerticalGradient;
                var17 = var17.START;
                var8.start = var17;
                var11 = var25[var11];
                var11 = var26.bind(var3)(var11);
                var11 = var11.VerticalGradient;
                var11 = var11.END;
                var8.end = var11;
                var11 = ['rgba(0, 0, 0, 0)'];
                var11[1] = var13;
                var8.colors = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var12.gameTileContainer;
                var8.style = var11;
                var17 = _closure1_slot9;
                var11 = 30;
                var11 = var25[var11];
                var13 = var15.bind(var3)(var11);
                var11 = {
                    'quest': null,
                    'height': 80,
                    'width': 80
                };
                var11.quest = var29;
                var11 = var17.bind(var3)(var13, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var12.contextMenuContainer;
                var8.style = var11;
                var17 = _closure1_slot9;
                var11 = 12;
                var11 = var25[var11];
                var11 = var26.bind(var3)(var11);
                var13 = var11.IconButton;
                var11 = {};
                var27 = 31;
                var27 = var25[var27];
                var27 = var15.bind(var3)(var27);
                var11.icon = var27;
                var11.onPress = var21;
                var21 = 'secondary-overlay';
                var11.variant = var21;
                var21 = 'sm';
                var11.size = var21;
                var21 = 14;
                var27 = var25[var21];
                var27 = var26.bind(var3)(var27);
                var33 = var27.intl;
                var30 = var33.string;
                var27 = var25[var21];
                var27 = var26.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.RDE0Sc;
                var27 = var30.bind(var33)(var27);
                var11.accessibilityLabel = var27;
                var13 = var17.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var27 = _closure1_slot9;
                var13 = 32;
                var13 = var25[var13];
                var17 = var15.bind(var3)(var13);
                var13 = {};
                var13.quest = var29;
                var13.showShareLink = var18;
                var29 = _closure1_slot7;
                var29 = var29.QUEST_ACTIVITY_BOTTOM_SHEET;
                var13.location = var29;
                var28 = var25[var28];
                var28 = var26.bind(var3)(var28);
                var28 = var28.QuestContent;
                var28 = var28.RUNNING_ACTIVITY;
                var13.sourceQuestContent = var28;
                var28 = _closure1_slot13;
                var13.children = var28;
                var13 = var27.bind(var3)(var17, var13);
                var11[1] = var13;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var12.contentContainer;
                var5.style = var8;
                var11 = _closure1_slot10;
                var9 = 33;
                var8 = var25[var9];
                var8 = var26.bind(var3)(var8);
                var10 = var8.Stack;
                var8 = {};
                var17 = 'vertical';
                var8.direction = var17;
                var13 = 8;
                var27 = var25[var13];
                var27 = var15.bind(var3)(var27);
                var27 = var27.spacing;
                var27 = var27.PX_8;
                var8.spacing = var27;
                var27 = var12.textContainer;
                var8.style = var27;
                var30 = _closure1_slot9;
                var28 = 34;
                var27 = var25[var28];
                var27 = var26.bind(var3)(var27);
                var29 = var27.Text;
                var27 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var27.children = var32;
                var29 = var30.bind(var3)(var29, var27);
                var27 = new Array(2);
                var27[0] = var29;
                var30 = _closure1_slot9;
                var28 = var25[var28];
                var28 = var26.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var28.children = var31;
                var28 = var30.bind(var3)(var29, var28);
                var27[1] = var28;
                var8.children = var27;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot10;
                var9 = var25[var9];
                var9 = var26.bind(var3)(var9);
                var10 = var9.Stack;
                var9 = {};
                var9.direction = var17;
                var13 = var25[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_12;
                var9.spacing = var13;
                var12 = var12.buttonsContainer;
                var9.style = var12;
                var17 = _closure1_slot9;
                var13 = 35;
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
                    _fun111091_ip = 1562;
                    continue _fun111091
                }
            case 1554:
                var25 = var28.LLLLPD;
                _fun111091_ip = 1568;
                continue _fun111091;
            case 1562:
                var25 = var28.cfY4PE;
            case 1568:
                var25 = var26.bind(var27)(var25);
                var12.text = var25;
                if (!var24) {
                    _fun111091_ip = 1583;
                    continue _fun111091
                }
            case 1580:
                var22 = var23;
            case 1583:
                var12.onPress = var22;
                if (var19) {
                    _fun111091_ip = 1593;
                    continue _fun111091
                }
            case 1590:
                var19 = var20;
            case 1593:
                var12.loading = var19;
                var12.grow = var18;
                var15 = var17.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = _closure1_slot9;
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
    var _closure1_slot14 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var12 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var10 = 'flex';
    var9.display = var10;
    var10 = 8;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingBottom = var13;
    var6.contentContainer = var9;
    var9 = {
        'height': 140,
        'position': 'relative'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var14 = var13.PX_8;
    var13 = 52;
    var13 = var13 + var14;
    var9.marginBottom = var13;
    var6.heroContainer = var9;
    var9 = {};
    var13 = 'cover';
    var9.resizeMode = var13;
    var17 = var12.absoluteFillObject;
    var18 = var9;
    var13 = copyDataProperties(var18, var17);
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var14 = 'borderTopLeftRadius';
    var9[var14] = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var15 = var13.lg;
    var13 = 'borderTopRightRadius';
    var9[var13] = var15;
    var6.heroImg = var9;
    var9 = {};
    var17 = var12.absoluteFillObject;
    var18 = var9;
    var12 = copyDataProperties(var18, var17);
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9[var14] = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9[var13] = var12;
    var6.heroGradient = var9;
    var12 = 'center';
    var9 = {
        'position': 'absolute',
        'bottom': 4294967244,
        'left': 0,
        'right': 0,
        'alignItems': 'center'
    };
    var6.gameTileContainer = var9;
    var9 = {
        'position': 'absolute',
        'top': null,
        'right': null,
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'alignItems': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.top = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.right = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.gap = var13;
    var6.contextMenuContainer = var9;
    var9 = {};
    var9.alignItems = var12;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingTop = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginBottom = var13;
    var9.textAlign = var12;
    var6.textContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingTop = var10;
    var6.buttonsContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
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
    var _closure1_slot12 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestProgressBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111098: for (var _fun111098_ip = 0;;) switch (_fun111098_ip) {
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
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot6;
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
                    _fun111098_ip = 199;
                    continue _fun111098
                }
            case 83:
                var3 = _closure1_slot9;
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
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot14;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5278, 5280, 7985, 33, 1297, 671, 566, 10125, 5282, 7579, 8241, 1234, 6953, 5319, 8140, 5365, 10115, 10775, 8009, 3279, 10110, 8343, 5342, 4933, 4704, 4098, 670, 10112, 8240, 10813, 4080, 3942, 4084, 2]);