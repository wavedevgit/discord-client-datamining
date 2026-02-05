// modules/user_settings/native/quests/SettingsQuestPreviewScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var6 = var5[var13];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var9 = 6;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.spacing;
    var11 = var3.PX_16;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.container = var8;
    var8 = {};
    var8.paddingHorizontal = var11;
    var12 = var11 / var12;
    var8.paddingTop = var12;
    var8.paddingBottom = var11;
    var3.controlBarContainer = var8;
    var8 = {};
    var8.paddingHorizontal = var11;
    var3.segmentedControlContainer = var8;
    var8 = {
        'flex': 1,
        'width': '100%'
    };
    var3.pagesContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginTop = var11;
    var3.activityIndicator = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_80;
    var8.marginBottom = var9;
    var3.allSectionsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/SettingsQuestPreviewScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun84205: for (var _fun84205_ip = 0;;) switch (_fun84205_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useRoute;
                var0 = var0.bind(var2)();
                var2 = var0.params;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot13;
                var7 = var0.bind(var4)();
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var9 = null;
                var8 = var9 == var2;
                var0 = undefined;
                if (var8) {
                    _fun84205_ip = 85;
                    continue _fun84205
                }
            case 79:
                var0 = var2.questId;
            case 85:
                var3 = var3.bind(var6)(var0);
                var0 = _closure1_slot3;
                var13 = 2;
                var0 = var0.bind(var4)(var3, var13);
                var18 = 0;
                var16 = var0[var18];
                var _closure2_slot2 = var16;
                var10 = 1;
                var15 = var0[var10];
                var _closure2_slot3 = var15;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 9;
                var6 = var0[var8];
                var17 = var3.bind(var4)(var6);
                var14 = var17.useStateFromStores;
                var6 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var6;
                var11 = new Array(1);
                var11[0] = var16;
                var6 = function() { // Environment: var1
                    _fun84206: for (var _fun84206_ip = 0;;) switch (_fun84206_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun84206_ip = 40;
                                continue _fun84206
                            }
                        case 18:
                            var3 = _closure1_slot8;
                            var2 = var3.getQuest;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var11 = var14.bind(var17)(var12, var6, var11);
                var _closure2_slot4 = var11;
                var0 = var0[var8];
                var12 = var3.bind(var4)(var0);
                var6 = var12.useStateFromStores;
                var0 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot9;
                    var0 = var0.theme;
                    return var0;
                };
                var0 = var6.bind(var12)(var3, var0);
                var _closure2_slot5 = var0;
                var12 = _closure1_slot4;
                var14 = var12.useCallback;
                var6 = new Array(1);
                var6[0] = var11;
                var3 = function() { // Environment: var1
                    _fun84208: for (var _fun84208_ip = 0;;) switch (_fun84208_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun84208_ip = 68;
                                continue _fun84208
                            }
                        case 16:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.QuestCardPreview;
                            var1 = {};
                            var5 = _closure2_slot4;
                            var1.quest = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 68:
                            return var0;
                    }
                };
                var17 = var14.bind(var12)(var3, var6);
                var _closure2_slot6 = var17;
                var6 = var12.useCallback;
                var3 = new Array(3);
                var3[0] = var16;
                var3[1] = var0;
                var14 = var9 == var11;
                var0 = undefined;
                if (var14) {
                    _fun84205_ip = 296;
                    continue _fun84205
                }
            case 290:
                var0 = var11.userStatus;
            case 296:
                var3[2] = var0;
                var0 = function() { // Environment: var1
                    _fun84209: for (var _fun84209_ip = 0;;) switch (_fun84209_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun84209_ip = 201;
                                continue _fun84209
                            }
                        case 16:
                            var9 = _closure2_slot2;
                            var8 = _closure2_slot5;
                            var1 = _closure2_slot4;
                            var1 = var0 == var1;
                            var5 = undefined;
                            var7 = undefined;
                            if (var1) {
                                _fun84209_ip = 64;
                                continue _fun84209
                            }
                        case 39:
                            var1 = _closure2_slot4;
                            var1 = var1.userStatus;
                            var2 = var0 == var1;
                            var7 = undefined;
                            if (var2) {
                                _fun84209_ip = 64;
                                continue _fun84209
                            }
                        case 58:
                            var7 = var1.completedAt;
                        case 64:
                            var1 = _closure2_slot4;
                            var1 = var0 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun84209_ip = 102;
                                continue _fun84209
                            }
                        case 77:
                            var1 = _closure2_slot4;
                            var1 = var1.userStatus;
                            var2 = var0 == var1;
                            var4 = undefined;
                            if (var2) {
                                _fun84209_ip = 102;
                                continue _fun84209
                            }
                        case 96:
                            var4 = var1.progress;
                        case 102:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var17 = '';
                            var1 = '-';
                            var16 = var9;
                            var15 = var1;
                            var14 = var8;
                            var13 = var1;
                            var12 = var7;
                            var11 = var1;
                            var10 = var4;
                            var4 = var17[var3](var16, var15, var14, var13, var12, var11, var10, var9);
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 11;
                            var1 = var7[var1];
                            var1 = var2.bind(var5)(var1);
                            var2 = var1.QuestEmbedPreview;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.questId = var6;
                            var1 = var3.bind(var5)(var2, var1, var4);
                            return var1;
                        case 201:
                            return var0;
                    }
                };
                var14 = var6.bind(var12)(var0, var3);
                var _closure2_slot7 = var14;
                var6 = _closure1_slot4;
                var12 = var6.useCallback;
                var3 = function() { // Environment: var1
                    var0 = null;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var12.bind(var6)(var3, var0);
                var _closure2_slot8 = var0;
                var12 = var6.useMemo;
                var3 = new Array(6);
                var3[0] = var11;
                var3[1] = var16;
                var3[2] = var17;
                var3[3] = var14;
                var3[4] = var0;
                var0 = var7.allSectionsContainer;
                var3[5] = var0;
                var0 = function() { // Environment: var1
                    _fun84211: for (var _fun84211_ip = 0;;) switch (_fun84211_ip) {
                        case 0:
                            var1 = {};
                            var0 = 'all';
                            var1.id = var0;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 12;
                            var2 = var0[var8];
                            var3 = undefined;
                            var2 = var6.bind(var3)(var2);
                            var5 = var2.intl;
                            var2 = var5.string;
                            var0 = var0[var8];
                            var0 = var6.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.Y9DnPa;
                            var0 = var2.bind(var5)(var0);
                            var1.label = var0;
                            var0 = _closure2_slot4;
                            var6 = null;
                            var5 = var6 != var0;
                            var0 = null;
                            if (!var5) {
                                _fun84211_ip = 169;
                                continue _fun84211
                            }
                        case 94:
                            var5 = _closure2_slot2;
                            var5 = var6 != var5;
                            var0 = null;
                            if (!var5) {
                                _fun84211_ip = 169;
                                continue _fun84211
                            }
                        case 107:
                            var7 = _closure1_slot11;
                            var6 = _closure1_slot5;
                            var5 = {};
                            var9 = _closure2_slot1;
                            var9 = var9.allSectionsContainer;
                            var5.style = var9;
                            var9 = _closure2_slot6;
                            var10 = var9.bind(var3)();
                            var9 = new Array(2);
                            var9[0] = var10;
                            var10 = _closure2_slot7;
                            var10 = var10.bind(var3)();
                            var9[1] = var10;
                            var5.children = var9;
                            var0 = var7.bind(var3)(var6, var5);
                        case 169:
                            var1.page = var0;
                            var0 = new Array(4);
                            var0[0] = var1;
                            var1 = {};
                            var5 = 'bar';
                            var1.id = var5;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = var4[var8];
                            var5 = var7.bind(var3)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var4[var8];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.uL4oBf;
                            var5 = var6.bind(var9)(var5);
                            var1.label = var5;
                            var5 = _closure2_slot8;
                            var5 = var5.bind(var3)();
                            var1.page = var5;
                            var0[1] = var1;
                            var1 = {};
                            var5 = 'card';
                            var1.id = var5;
                            var5 = var4[var8];
                            var5 = var7.bind(var3)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var4[var8];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.MAvIf1;
                            var5 = var6.bind(var9)(var5);
                            var1.label = var5;
                            var5 = _closure2_slot6;
                            var5 = var5.bind(var3)();
                            var1.page = var5;
                            var0[2] = var1;
                            var1 = {};
                            var5 = 'embed';
                            var1.id = var5;
                            var5 = var4[var8];
                            var5 = var7.bind(var3)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var4[var8];
                            var4 = var7.bind(var3)(var4);
                            var4 = var4.t;
                            var4 = var4.AswoU2;
                            var4 = var5.bind(var6)(var4);
                            var1.label = var4;
                            var2 = _closure2_slot7;
                            var2 = var2.bind(var3)();
                            var1.page = var2;
                            var0[3] = var1;
                            return var0;
                    }
                };
                var0 = var12.bind(var6)(var0, var3);
                var _closure2_slot9 = var0;
                var3 = var6.useState;
                var3 = var3.bind(var6)(var18);
                var12 = _closure1_slot3;
                var3 = var12.bind(var4)(var3, var13);
                var19 = var3[var18];
                var3 = var3[var10];
                var _closure2_slot10 = var3;
                var3 = var6.useState;
                var3 = var3.bind(var6)(var18);
                var3 = var12.bind(var4)(var3, var13);
                var12 = var3[var18];
                var _closure2_slot11 = var12;
                var14 = var3[var10];
                var13 = var6.useCallback;
                var10 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot10;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var3 = new Array(0);
                var17 = var13.bind(var6)(var10, var3);
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 13;
                var3 = var13[var3];
                var13 = var10.bind(var4)(var3);
                var10 = var13.useSegmentedControlState;
                var3 = {};
                var3.items = var0;
                var3.pageWidth = var19;
                var3.defaultIndex = var18;
                var3.onPageChange = var14;
                var19 = var10.bind(var13)(var3);
                var10 = var6.useMemo;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var0;
                var0 = function() { // Environment: var1
                    _fun84213: for (var _fun84213_ip = 0;;) switch (_fun84213_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = _closure2_slot11;
                            var0 = var1[var0];
                            var1 = null;
                            var1 = var1 == var0;
                            var2 = undefined;
                            if (var1) {
                                _fun84213_ip = 31;
                                continue _fun84213
                            }
                        case 26:
                            var2 = var0.id;
                        case 31:
                            var0 = 'all';
                            var0 = var0 === var2;
                            if (var0) {
                                _fun84213_ip = 50;
                                continue _fun84213
                            }
                        case 42:
                            var1 = 'bar';
                            var0 = var1 === var2;
                        case 50:
                            return var0;
                    }
                };
                var10 = var10.bind(var6)(var0, var3);
                var3 = var6.useEffect;
                var12 = var9 == var2;
                var0 = undefined;
                if (var12) {
                    _fun84205_ip = 587;
                    continue _fun84205
                }
            case 581:
                var0 = var2.questId;
            case 587:
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun84214: for (var _fun84214_ip = 0;;) switch (_fun84214_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun84214_ip = 30;
                                continue _fun84214
                            }
                        case 20:
                            var4 = _closure2_slot0;
                            var2 = var4.questId;
                        case 30:
                            if (!(var3 != var2)) {
                                _fun84214_ip = 53;
                                continue _fun84214
                            }
                        case 34:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var1 = var1.questId;
                            var1 = var2.bind(var0)(var1);
                        case 53:
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0, var2);
                var6 = _closure1_slot4;
                var3 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var16;
                var0 = function() { // Environment: var1
                    _fun84215: for (var _fun84215_ip = 0;;) switch (_fun84215_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun84215_ip = 53;
                                continue _fun84215
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchQuestPreview;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0, var2);
                var3 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var16;
                var0 = function() { // Environment: var1
                    var4 = function arg0() {
                        _fun84217: for (var _fun84217_ip = 0;;) switch (_fun84217_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.quest_id;
                                var2 = _closure2_slot2;
                                var1 = null;
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun84217_ip = 33;
                                    continue _fun84217
                                }
                            case 25:
                                var2 = _closure2_slot2;
                                var1 = var3 === var2;
                            case 33:
                                if (!var1) {
                                    _fun84217_ip = 76;
                                    continue _fun84217
                                }
                            case 36:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.fetchQuestPreview;
                                var0 = _closure2_slot2;
                                var0 = var1.bind(var2)(var0);
                            case 76:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.subscribe;
                    var1 = 'QUEST_PREVIEW_UPDATE';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure3_slot0;
                        var1 = 'QUEST_PREVIEW_UPDATE';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var0 = var3.bind(var6)(var0, var2);
                var3 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var16;
                var0 = function() { // Environment: var1
                    _fun84219: for (var _fun84219_ip = 0;;) switch (_fun84219_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun84219_ip = 53;
                                continue _fun84219
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchQuestPreview;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var3.bind(var6)(var0, var2);
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = var3[var8];
                var20 = var6.bind(var4)(var0);
                var18 = var20.useStateFromStores;
                var2 = _closure1_slot8;
                var13 = new Array(1);
                var13[0] = var2;
                var12 = new Array(1);
                var12[0] = var16;
                var0 = function() { // Environment: var1
                    _fun84220: for (var _fun84220_ip = 0;;) switch (_fun84220_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun84220_ip = 38;
                                continue _fun84220
                            }
                        case 16:
                            var3 = _closure1_slot8;
                            var2 = var3.isFetchingQuestPreview;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var0 = var18.bind(var20)(var13, var0, var12);
                var3 = var3[var8];
                var8 = var6.bind(var4)(var3);
                var6 = var8.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var16;
                var1 = function() { // Environment: var1
                    _fun84221: for (var _fun84221_ip = 0;;) switch (_fun84221_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun84221_ip = 38;
                                continue _fun84221
                            }
                        case 16:
                            var3 = _closure1_slot8;
                            var2 = var3.getFetchQuestPreviewError;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var8 = var6.bind(var8)(var3, var1, var2);
                if (!var0) {
                    _fun84205_ip = 800;
                    continue _fun84205
                }
            case 793:
                if (!(var9 != var11)) {
                    _fun84205_ip = 1148;
                    continue _fun84205
                }
            case 800:
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var3 = var7.container;
                var0.style = var3;
                var6 = _closure1_slot10;
                var3 = {};
                var12 = var7.controlBarContainer;
                var3.style = var12;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 16;
                var12 = var18[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.MobileQuestPreviewControlBar;
                var12 = {};
                var12.questId = var16;
                var12.setQuestId = var15;
                var12.refreshQuest = var14;
                var12 = var6.bind(var4)(var13, var12);
                var3.children = var12;
                var6 = var6.bind(var4)(var1, var3);
                var3 = new Array(3);
                var3[0] = var6;
                var6 = var9 != var11;
                if (!var6) {
                    _fun84205_ip = 913;
                    continue _fun84205
                }
            case 909:
                var6 = var9 == var8;
            case 913:
                if (!var6) {
                    _fun84205_ip = 1080;
                    continue _fun84205
                }
            case 919:
                var12 = _closure1_slot11;
                var9 = _closure1_slot12;
                var8 = {};
                var16 = _closure1_slot10;
                var14 = _closure1_slot5;
                var13 = {};
                var15 = var7.segmentedControlContainer;
                var13.style = var15;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 17;
                var15 = var20[var15];
                var15 = var18.bind(var4)(var15);
                var21 = var15.SegmentedControl;
                var15 = {};
                var15.state = var19;
                var15 = var16.bind(var4)(var21, var15);
                var13.children = var15;
                var14 = var16.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var15 = _closure1_slot7;
                var14 = {};
                var21 = var7.pagesContainer;
                var14.style = var21;
                var14.onLayout = var17;
                var17 = 18;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.SegmentedControlPages;
                var17 = {};
                var17.state = var19;
                var17 = var16.bind(var4)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var8.children = var13;
                var6 = var12.bind(var4)(var9, var8);
            case 1080:
                var3[1] = var6;
                var9 = _closure1_slot10;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 19;
                var6 = var12[var6];
                var6 = var8.bind(var4)(var6);
                var8 = var6.QuestBarPreview;
                var6 = {};
                var6.quest = var11;
                var6.isVisible = var10;
                var6 = var9.bind(var4)(var8, var6);
                var3[2] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun84205_ip = 1211;
                continue _fun84205;
            case 1148:
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var7.container;
                var1.style = var6;
                var6 = _closure1_slot6;
                var5 = {
                    'animating': true,
                    'size': 'large'
                };
                var7 = var7.activityIndicator;
                var5.style = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1211:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5230, 3196, 33, 671, 1297, 1470, 566, 10794, 10796, 1234, 7817, 5262, 806, 10797, 8210, 7825, 10803, 2]);