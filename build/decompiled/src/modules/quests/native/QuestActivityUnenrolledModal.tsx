// modules/quests/native/QuestActivityUnenrolledModal.tsx
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
        _fun111190: for (var _fun111190_ip = 0;;) switch (_fun111190_ip) {
            case 0:
                var0 = arg0;
                var29 = var0.quest;
                var _closure2_slot0 = var29;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.useTheme;
                var6 = var0.bind(var2)();
                var2 = _closure1_slot14;
                var0 = 12;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.isThemeDark;
                var0 = var0.bind(var5)(var6);
                var11 = var2.bind(var3)(var0);
                var0 = 13;
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.autoEnroll;
                    return var0;
                };
                var5 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot5;
                var0 = var2.useState;
                var5 = var0.bind(var2)(var5);
                var2 = _closure1_slot4;
                var0 = 2;
                var2 = var2.bind(var3)(var5, var0);
                var0 = 0;
                var18 = var2[var0];
                var _closure2_slot1 = var18;
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot2 = var0;
                var0 = 14;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useGetOrFetchApplication;
                var0 = 15;
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var0 = var6.getActivityApplicationId;
                var0 = var0.bind(var6)(var29);
                var0 = var2.bind(var5)(var0);
                var _closure2_slot3 = var0;
                var2 = 16;
                var2 = var4[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useQuestTaskDetails;
                var7 = var2.bind(var5)(var29);
                var2 = 17;
                var2 = var4[var2];
                var6 = var1.bind(var3)(var2);
                var5 = var6.useQuestsInstructionsToWinReward;
                var2 = {};
                var2.quest = var29;
                var2.taskDetails = var7;
                var7 = _closure1_slot10;
                var7 = var7.QUESTS_BAR;
                var2.location = var7;
                var7 = 18;
                var8 = var4[var7];
                var8 = var1.bind(var3)(var8);
                var8 = var8.QuestContent;
                var8 = var8.QUEST_ACTIVITY_UNENROLLED_MODAL;
                var2.questContent = var8;
                var7 = var4[var7];
                var7 = var1.bind(var3)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_ACTIVITY_UNENROLLED_MODAL;
                var2.sourceQuestContent = var7;
                var25 = var5.bind(var6)(var2);
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var12
                    _fun111192: for (var _fun111192_ip = 0;;) switch (_fun111192_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun111192_ip = 83;
                                continue _fun111192
                            }
                        case 16:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getApplicationIconURL;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var5 = var4.id;
                            var1.id = var5;
                            var4 = var4.icon;
                            var1.icon = var4;
                            var4 = 87;
                            var1.size = var4;
                            var0 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var28 = var5.bind(var6)(var0, var2);
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var12
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun111194: for (var _fun111194_ip = 0;;) switch (_fun111194_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun111194_ip = 191;
                                    continue _fun111194
                                }
                            case 10:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 20;
                                var1 = var9[var1];
                                var2 = undefined;
                                var6 = var8.bind(var2)(var1);
                                var5 = var6.enrollInQuest;
                                var1 = _closure2_slot0;
                                var4 = var1.id;
                                var1 = {};
                                var7 = 18;
                                var10 = var9[var7];
                                var10 = var8.bind(var2)(var10);
                                var10 = var10.QuestContent;
                                var10 = var10.QUEST_ACTIVITY_UNENROLLED_MODAL;
                                var1.questContent = var10;
                                var10 = 21;
                                var10 = var9[var10];
                                var10 = var8.bind(var2)(var10);
                                var10 = var10.QuestContentCTA;
                                var10 = var10.START_QUEST;
                                var1.questContentCTA = var10;
                                var7 = var9[var7];
                                var7 = var8.bind(var2)(var7);
                                var7 = var7.QuestContent;
                                var7 = var7.QUEST_ACTIVITY_UNENROLLED_MODAL;
                                var1.sourceQuestContent = var7;
                                var1 = var5.bind(var6)(var4, var1);
                                SaveGenerator(address = 149);
                            case 147:
                                return var1;
                            case 149:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun111194_ip = 188;
                                    continue _fun111194
                                }
                            case 155:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 22;
                                var3 = var5[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.pop;
                                var3 = var3.bind(var4)();
                                return var2;
                            case 188:
                                return var1;
                            case 191:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var7 = var29.id;
                var0 = new Array(1);
                var0[0] = var7;
                var23 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot12;
                var0 = 23;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {
                    'direction': 'vertical',
                    'align': 'center',
                    'justify': 'center'
                };
                var26 = 'center';
                var4 = var11.container;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot7;
                var4 = {};
                var7 = var11.content;
                var4.style = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var11.baseShadow;
                var7.style = var10;
                var15 = _closure1_slot12;
                var13 = _closure1_slot7;
                var10 = {};
                var16 = var11.imagesContainer;
                var10.style = var16;
                var16 = null;
                var17 = var16 != var28;
                if (!var17) {
                    _fun111190_ip = 622;
                    continue _fun111190
                }
            case 540:
                var20 = _closure1_slot11;
                var19 = _closure1_slot7;
                var16 = {};
                var21 = var11.appIconContainer;
                var16.style = var21;
                var24 = _closure1_slot11;
                var22 = _closure1_slot1;
                var27 = _closure1_slot2;
                var21 = 24;
                var21 = var27[var21];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var27 = {};
                var27.uri = var28;
                var21.source = var27;
                var27 = var11.appIcon;
                var21.style = var27;
                var21 = var24.bind(var3)(var22, var21);
                var16.children = var21;
                var17 = var20.bind(var3)(var19, var16);
            case 622:
                var16 = new Array(2);
                var16[0] = var17;
                var21 = _closure1_slot11;
                var19 = _closure1_slot7;
                var17 = {};
                var20 = var11.rewardTileContainer;
                var17.style = var20;
                var27 = _closure1_slot11;
                var24 = _closure1_slot1;
                var20 = _closure1_slot2;
                var22 = 25;
                var22 = var20[var22];
                var24 = var24.bind(var3)(var22);
                var22 = {
                    'quest': null,
                    'height': 87,
                    'width': 87
                };
                var22.quest = var29;
                var28 = var11.questRewardTile;
                var22.style = var28;
                var22 = var27.bind(var3)(var24, var22);
                var17.children = var22;
                var17 = var21.bind(var3)(var19, var17);
                var16[1] = var17;
                var10.children = var16;
                var10 = var15.bind(var3)(var13, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot7;
                var8 = {};
                var13 = var11.textContainer;
                var8.style = var13;
                var21 = _closure1_slot11;
                var19 = _closure1_slot0;
                var13 = 26;
                var15 = var20[var13];
                var15 = var19.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = {};
                var16.textAlign = var26;
                var15.style = var16;
                var16 = 27;
                var22 = var20[var16];
                var22 = var19.bind(var3)(var22);
                var27 = var22.intl;
                var24 = var27.string;
                var22 = var20[var16];
                var22 = var19.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.IrNgN4;
                var22 = var24.bind(var27)(var22);
                var15.children = var22;
                var17 = var21.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var22 = _closure1_slot12;
                var17 = var20[var13];
                var17 = var19.bind(var3)(var17);
                var21 = var17.Text;
                var17 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var24 = {};
                var24.textAlign = var26;
                var17.style = var24;
                var24 = var20[var16];
                var24 = var19.bind(var3)(var24);
                var28 = var24.intl;
                var27 = var28.format;
                var24 = var20[var16];
                var24 = var19.bind(var3)(var24);
                var24 = var24.t;
                var26 = var24.V3NSJx;
                var24 = {};
                var29 = var29.config;
                var29 = var29.messages;
                var29 = var29.questName;
                var24.questName = var29;
                var26 = var27.bind(var28)(var26, var24);
                var24 = new Array(3);
                var24[0] = var26;
                var26 = '\xa0';
                var24[1] = var26;
                var24[2] = var25;
                var17.children = var24;
                var17 = var22.bind(var3)(var21, var17);
                var15[1] = var17;
                var8.children = var15;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var11.footer;
                var5.style = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot7;
                var8 = {};
                var11 = var11.buttonsContainer;
                var8.style = var11;
                var21 = _closure1_slot11;
                var15 = 28;
                var11 = var20[var15];
                var11 = var19.bind(var3)(var11);
                var17 = var11.Button;
                var11 = {};
                var22 = 'lg';
                var11.size = var22;
                var24 = var20[var16];
                var24 = var19.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var20[var16];
                var24 = var19.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.l7E81v;
                var24 = var25.bind(var26)(var24);
                var11.text = var24;
                var11.onPress = var23;
                var17 = var21.bind(var3)(var17, var11);
                var11 = new Array(2);
                var11[0] = var17;
                var21 = _closure1_slot11;
                var15 = var20[var15];
                var15 = var19.bind(var3)(var15);
                var17 = var15.Button;
                var15 = {};
                var15.size = var22;
                var22 = var20[var16];
                var22 = var19.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var20[var16];
                var22 = var19.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.fyT2ol;
                var22 = var23.bind(var24)(var22);
                var15.text = var22;
                var22 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 20;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.dismissQuestActivityModal;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 22;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var15.onPress = var22;
                var22 = 'secondary';
                var15.variant = var22;
                var15 = var21.bind(var3)(var17, var15);
                var11[1] = var15;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot12;
                var10 = _closure1_slot6;
                var9 = {};
                var15 = 'checkbox';
                var9.accessibilityRole = var15;
                var15 = var20[var16];
                var15 = var19.bind(var3)(var15);
                var21 = var15.intl;
                var17 = var21.string;
                var15 = var20[var16];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["931n1T"];
                var15 = var17.bind(var21)(var15);
                var9.accessibilityLabel = var15;
                var15 = {};
                var15.checked = var18;
                var9.accessibilityState = var15;
                var12 = function() {
                    var0 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var2 = !var1;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var2);
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 20;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.setAutoEnroll;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var9.onPress = var12;
                var12 = {
                    'alignSelf': 'center',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 8
                };
                var9.style = var12;
                var17 = _closure1_slot11;
                var12 = 29;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var15 = var12.FormCheckbox;
                var12 = {};
                var12.checked = var18;
                var15 = var17.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = _closure1_slot11;
                var13 = var20[var13];
                var13 = var19.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["931n1T"];
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
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
    var0 = function() {
        var3 = _closure1_slot11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 30;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.HeaderActionButton;
        var0 = {};
        var5 = _closure1_slot1;
        var4 = 31;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var0.source = var4;
        var4 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.pop;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.onPress = var4;
        var4 = 27;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.cpT0Cq;
        var4 = var5.bind(var6)(var4);
        var0.accessibilityLabel = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'main';
    var3.MAIN = var6;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun111199: for (var _fun111199_ip = 0;;) switch (_fun111199_ip) {
            case 0:
                var7 = arg0;
                var0 = {};
                var1 = {};
                var2 = 1;
                var1.flex = var2;
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 9;
                var6 = var3[var5];
                var4 = undefined;
                var6 = var9.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_24;
                var1.paddingHorizontal = var6;
                var6 = var3[var5];
                var6 = var9.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.paddingVertical = var6;
                var6 = var3[var5];
                var6 = var9.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_48;
                var1.paddingBottom = var6;
                var0.container = var1;
                var1 = {};
                var6 = 'auto';
                var1.marginTop = var6;
                var0.content = var1;
                var1 = {
                    'flexDirection': 'row',
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var6 = 'center';
                var8 = var3[var5];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_32;
                var1.marginBottom = var8;
                var9 = _closure1_slot0;
                var8 = 10;
                var3 = var3[var8];
                var9 = var9.bind(var4)(var3);
                var3 = var9.isIOS;
                var3 = var3.bind(var9)();
                if (var3) {
                    _fun111199_ip = 266;
                    continue _fun111199
                }
            case 192:
                var3 = {};
                if (var7) {
                    _fun111199_ip = 203;
                    continue _fun111199
                }
            case 197:
                var9 = new Array(0);
                _fun111199_ip = 260;
                continue _fun111199;
            case 203:
                var11 = {};
                var10 = {
                    'standardDeviation': '85px',
                    'color': 'rgba(144, 144, 251, 0.65)',
                    'offsetX': 0,
                    'offsetY': 0
                };
                var11.dropShadow = var10;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var12 = {
                    'standardDeviation': '85px',
                    'color': 'rgba(144, 144, 250, 0.41)',
                    'offsetX': 0,
                    'offsetY': 0
                };
                var11.dropShadow = var12;
                var10[1] = var11;
                var9 = var10;
            case 260:
                var3.filter = var9;
                _fun111199_ip = 309;
                continue _fun111199;
            case 266:
                if (var7) {
                    _fun111199_ip = 273;
                    continue _fun111199
                }
            case 269:
                var9 = {};
                _fun111199_ip = 306;
                continue _fun111199;
            case 273:
                var10 = {
                    'shadowColor': 'rgb(144, 144, 251)',
                    'shadowOffset': null,
                    'shadowOpacity': 0.6,
                    'shadowRadius': 85
                };
                var11 = {
                    'width': 0,
                    'height': 0
                };
                var10.shadowOffset = var11;
                var9 = var10;
            case 306:
                var3 = var9;
            case 309:
                var14 = var1;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var0.imagesContainer = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isIOS;
                var1 = var1.bind(var3)();
                var3 = {};
                if (var1) {
                    _fun111199_ip = 361;
                    continue _fun111199
                }
            case 356:
                var1 = var3;
                _fun111199_ip = 418;
                continue _fun111199;
            case 361:
                if (var7) {
                    _fun111199_ip = 368;
                    continue _fun111199
                }
            case 364:
                var7 = {};
                _fun111199_ip = 405;
                continue _fun111199;
            case 368:
                var8 = {
                    'shadowColor': 'rgb(144, 144, 250)',
                    'shadowOffset': null,
                    'shadowOpacity': 0.4,
                    'shadowRadius': 85
                };
                var9 = {
                    'width': 0,
                    'height': 16
                };
                var8.shadowOffset = var9;
                var7 = var8;
            case 405:
                var14 = var3;
                var13 = var7;
                var7 = copyDataProperties(var14, var13);
                var1 = var3;
            case 418:
                var0.baseShadow = var1;
                var1 = {
                    'borderRadius': null,
                    'borderWidth': 2.18,
                    'borderColor': 'rgba(151, 151, 159, 0.24)',
                    'borderStyle': 'solid',
                    'transform': null,
                    'overflow': 'hidden'
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.xl;
                var1.borderRadius = var7;
                var8 = 2.18;
                var9 = {};
                var7 = '-12.41deg';
                var9.rotate = var7;
                var7 = new Array(1);
                var7[0] = var9;
                var1.transform = var7;
                var0.appIconContainer = var1;
                var1 = {
                    'width': 87,
                    'height': 87
                };
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.xl;
                var7 = var7 - var8;
                var1.borderRadius = var7;
                var0.appIcon = var1;
                var1 = {
                    'borderWidth': 2.18,
                    'borderColor': 'rgba(151, 151, 159, 0.24)',
                    'borderRadius': null,
                    'borderStyle': 'solid',
                    'transform': null,
                    'overflow': 'hidden'
                };
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.xl;
                var1.borderRadius = var7;
                var9 = {};
                var7 = -10;
                var9.translateX = var7;
                var7 = new Array(2);
                var7[0] = var9;
                var9 = {};
                var10 = '7.81deg';
                var9.rotate = var10;
                var7[1] = var9;
                var1.transform = var7;
                var0.rewardTileContainer = var1;
                var1 = {};
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.xl;
                var7 = var7 - var8;
                var1.borderRadius = var7;
                var0.questRewardTile = var1;
                var1 = {};
                var1.alignItems = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_8;
                var1.gap = var6;
                var0.textContainer = var1;
                var1 = {
                    'flexDirection': 'column',
                    'gap': null,
                    'marginBottom': 20
                };
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_8;
                var1.gap = var2;
                var0.buttonsContainer = var1;
                var1 = {
                    'flexDirection': 'column',
                    'width': '100%',
                    'marginTop': 'auto'
                };
                var0.footer = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestActivityUnenrolledModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111200: for (var _fun111200_ip = 0;;) switch (_fun111200_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.questId;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var7
                    var2 = _closure1_slot8;
                    var1 = var2.getQuest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var5)(var2, var0);
                var _closure2_slot1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun111200_ip = 200;
                    continue _fun111200
                }
            case 80:
                var6 = {};
                var5 = _closure1_slot13;
                var3 = var5.MAIN;
                var2 = {};
                var8 = _closure1_slot16;
                var2.headerLeft = var8;
                var8 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerRight = var8;
                var8 = function() {
                    var3 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 26;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'redesign/heading-18/bold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var4 = 27;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.l7E81v;
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.headerTitle = var8;
                var7 = function() {
                    var3 = _closure1_slot11;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 32;
                    var0 = var6[var0];
                    var2 = undefined;
                    var0 = var5.bind(var2)(var0);
                    var1 = var0.QuestContentImpressionTrackerNative;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.questOrQuests = var4;
                    var4 = 18;
                    var7 = var6[var4];
                    var7 = var5.bind(var2)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_ACTIVITY_UNENROLLED_MODAL;
                    var0.questContent = var7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.QuestContent;
                    var4 = var4.QUEST_ACTIVITY_UNENROLLED_MODAL;
                    var0.sourceQuestContent = var4;
                    var4 = function() {
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot15;
                        var1 = {};
                        var0 = _closure2_slot1;
                        var1.quest = var0;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var7;
                var6[var3] = var2;
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 33;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Modal;
                var1 = {};
                var1.screens = var6;
                var5 = var5.MAIN;
                var1.initialRouteName = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 200:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5286, 14292, 5290, 33, 1297, 671, 479, 3252, 3164, 566, 6966, 5329, 5375, 10049, 5292, 1417, 5320, 5340, 4569, 4088, 4711, 10046, 3940, 1235, 4092, 5503, 5383, 5384, 10059, 10204, 2]);