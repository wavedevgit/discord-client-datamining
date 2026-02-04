// modules/quests/native/QuestContextMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = arg0;
        var6 = var2.ref;
        var1 = _closure1_slot4;
        var0 = _closure1_slot3;
        var3 = undefined;
        var9 = var1.bind(var3)(var2, var0);
        var2 = _closure1_slot7;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 4;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.IconButton;
        var0 = {};
        var0.ref = var6;
        var10 = var0;
        var5 = copyDataProperties(var10, var9);
        var5 = _closure1_slot1;
        var4 = 5;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = 'icon';
        var0[var4] = var5;
        var5 = 'secondary';
        var4 = 'variant';
        var0[var4] = var5;
        var4 = 6;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["UKOtz+"];
        var5 = var5.bind(var6)(var4);
        var4 = 'accessibilityLabel';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = ['ref'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun84081: for (var _fun84081_ip = 0;;) switch (_fun84081_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun84081_ip = 23;
                    continue _fun84081
                }
            case 16:
                var4 = _closure1_slot8;
            case 23:
                var2 = var0.quest;
                var _closure2_slot0 = var2;
                var21 = var0.showShareLink;
                if (!(var21 === var3)) {
                    _fun84081_ip = 45;
                    continue _fun84081
                }
            case 43:
                var21 = false;
            case 45:
                var5 = var0.additionalItems;
                if (!(var5 === var3)) {
                    _fun84081_ip = 61;
                    continue _fun84081
                }
            case 57:
                var5 = new Array(0);
            case 61:
                var _closure2_slot1 = var5;
                var8 = var0.sourceQuestContent;
                var _closure2_slot2 = var8;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 7;
                var6 = var14[var12];
                var9 = var13.bind(var3)(var6);
                var7 = var9.useQuestPreviewActions;
                var6 = var2.id;
                var6 = var7.bind(var9)(var6);
                var18 = var6.handleComplete;
                _closure2_slot3 = var18;
                var16 = var6.handleProgress;
                _closure2_slot4 = var16;
                var17 = var6.handleResetDismissibilityClick;
                _closure2_slot5 = var17;
                var7 = var6.handleResetStatusClick;
                _closure2_slot6 = var7;
                var6 = var6.handleOverrideDeliveryClick;
                _closure2_slot7 = var6;
                var9 = 8;
                var9 = var14[var9];
                var19 = var13.bind(var3)(var9);
                var15 = var19.useStateFromStores;
                var9 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var9;
                var10 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.questDeliveryOverride;
                    return var0;
                };
                var9 = new Array(0);
                var15 = var15.bind(var19)(var11, var10, var9);
                _closure2_slot8 = var15;
                var9 = 9;
                var9 = var14[var9];
                var10 = var13.bind(var3)(var9);
                var9 = var10.useTrackQuestContentClickedWithImpression;
                var9 = var9.bind(var10)();
                _closure2_slot9 = var9;
                var10 = 10;
                var10 = var14[var10];
                var11 = var13.bind(var3)(var10);
                var10 = var11.useQuestImpressionId;
                var10 = var10.bind(var11)();
                _closure2_slot10 = var10;
                var11 = 11;
                var11 = var14[var11];
                var13 = var13.bind(var3)(var11);
                var11 = var13.getExternalCtaLabel;
                var24 = var11.bind(var13)(var2);
                _closure2_slot11 = var24;
                if (!var21) {
                    _fun84081_ip = 413;
                    continue _fun84081
                }
            case 377:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 12;
                var11 = var14[var11];
                var14 = var13.bind(var3)(var11);
                var13 = var14.isShareableQuest;
                var11 = var2.config;
                var21 = var13.bind(var14)(var11);
            case 413:
                _closure2_slot12 = var21;
                var11 = _closure1_slot5;
                var19 = var11.useCallback;
                var14 = new Array(3);
                var14[0] = var2;
                var14[1] = var10;
                var14[2] = var8;
                var13 = function() { // Environment: var1
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var1);
                    var3 = var4.openGameLinkDirectly;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = 14;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var1.content = var6;
                    var6 = 15;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.CONTEXT_MENU_OPEN_GAME_LINK;
                    var1.ctaContent = var6;
                    var6 = _closure2_slot10;
                    var1.impressionId = var6;
                    var5 = _closure2_slot2;
                    var1.sourceQuestContent = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var23 = var19.bind(var11)(var13, var14);
                _closure2_slot13 = var23;
                var14 = var11.useCallback;
                var13 = new Array(4);
                var13[0] = var21;
                var19 = var2.id;
                var13[1] = var19;
                var13[2] = var10;
                var13[3] = var8;
                var10 = function() { // Environment: var1
                    _fun84084: for (var _fun84084_ip = 0;;) switch (_fun84084_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            if (!var0) {
                                _fun84084_ip = 136;
                                continue _fun84084
                            }
                        case 13:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 11;
                            var0 = var8[var0];
                            var6 = undefined;
                            var3 = var7.bind(var6)(var0);
                            var2 = var3.copyShareLink;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = {};
                            var5 = 14;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.QuestContent;
                            var5 = var5.QUEST_HOME_MOBILE;
                            var0.content = var5;
                            var5 = 15;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.QuestContentCTA;
                            var5 = var5.CONTEXT_MENU_COPY_LINK;
                            var0.ctaContent = var5;
                            var5 = _closure2_slot10;
                            var0.impressionId = var5;
                            var4 = _closure2_slot2;
                            var0.sourceQuestContent = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 136:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var14.bind(var11)(var10, var13);
                _closure2_slot14 = var13;
                var19 = var11.useCallback;
                var14 = new Array(2);
                var14[0] = var2;
                var14[1] = var8;
                var10 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 16;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showModal;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.quest = var4;
                    var4 = false;
                    var1.isTargetedDisclosure = var4;
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = 14;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var4.content = var6;
                    var6 = 15;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.CONTEXT_MENU_OPEN_DISCLOSURE;
                    var4.ctaContent = var6;
                    var5 = _closure2_slot2;
                    var4.sourceQuestContent = var5;
                    var1.trackingCtx = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var22 = var19.bind(var11)(var10, var14);
                _closure2_slot15 = var22;
                var19 = var11.useCallback;
                var10 = var2.id;
                var14 = new Array(1);
                var14[0] = var10;
                var10 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.manuallyStartConsoleQuest;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var20 = var19.bind(var11)(var10, var14);
                _closure2_slot16 = var20;
                var19 = var11.useCallback;
                var10 = var2.id;
                var14 = new Array(1);
                var14[0] = var10;
                var10 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.manualStopConsoleQuest;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var19.bind(var11)(var10, var14);
                _closure2_slot17 = var10;
                var19 = var11.useMemo;
                var14 = new Array(5);
                var14[0] = var24;
                var14[1] = var23;
                var14[2] = var22;
                var14[3] = var21;
                var14[4] = var13;
                var13 = function() { // Environment: var1
                    _fun84088: for (var _fun84088_ip = 0;;) switch (_fun84088_ip) {
                        case 0:
                            var2 = {};
                            var0 = _closure2_slot11;
                            var2.label = var0;
                            var10 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 18;
                            var0 = var8[var0];
                            var6 = undefined;
                            var0 = var10.bind(var6)(var0);
                            var0 = var0.LinkExternalSmallIcon;
                            var2.IconComponent = var0;
                            var0 = _closure2_slot13;
                            var2.action = var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var2 = {};
                            var4 = 6;
                            var3 = var8[var4];
                            var3 = var10.bind(var6)(var3);
                            var9 = var3.intl;
                            var5 = var9.string;
                            var3 = var8[var4];
                            var3 = var10.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.GcsZKJ;
                            var3 = var5.bind(var9)(var3);
                            var2.label = var3;
                            var3 = _closure2_slot15;
                            var2.action = var3;
                            var5 = _closure1_slot1;
                            var3 = 19;
                            var3 = var8[var3];
                            var3 = var5.bind(var6)(var3);
                            var2.iconSource = var3;
                            var0[1] = var2;
                            var2 = _closure2_slot12;
                            if (var2) {
                                _fun84088_ip = 163;
                                continue _fun84088
                            }
                        case 157:
                            var2 = new Array(0);
                            _fun84088_ip = 262;
                            continue _fun84088;
                        case 163:
                            var3 = {};
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var8 = var7[var4];
                            var8 = var5.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.t;
                            var4 = var4.WqhZss;
                            var4 = var8.bind(var9)(var4);
                            var3.label = var4;
                            var4 = 20;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.CopyIcon;
                            var3.IconComponent = var4;
                            var1 = _closure2_slot14;
                            var3.action = var1;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var2 = var1;
                        case 262:
                            var11 = 2;
                            var13 = var0;
                            var12 = var2;
                            var1 = arraySpread(var13, var12, var11);
                            return var0;
                    }
                };
                var14 = var19.bind(var11)(var13, var14);
                _closure2_slot18 = var14;
                var19 = var11.useMemo;
                var13 = new Array(3);
                var13[0] = var2;
                var13[1] = var20;
                var13[2] = var10;
                var10 = function() { // Environment: var1
                    _fun84089: for (var _fun84089_ip = 0;;) switch (_fun84089_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isConsoleQuest;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun84089_ip = 52;
                                continue _fun84089
                            }
                        case 46:
                            var0 = new Array(0);
                            _fun84089_ip = 107;
                            continue _fun84089;
                        case 52:
                            var2 = {};
                            var1 = 'Start Console Heartbeat';
                            var2.label = var1;
                            var1 = _closure2_slot16;
                            var2.action = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = 'Stop Console Heartbeat';
                            var2.label = var4;
                            var3 = _closure2_slot17;
                            var2.action = var3;
                            var1[1] = var2;
                            var0 = var1;
                        case 107:
                            return var0;
                    }
                };
                var19 = var19.bind(var11)(var10, var13);
                _closure2_slot19 = var19;
                var13 = var11.useMemo;
                var10 = new Array(6);
                var10[0] = var19;
                var10[1] = var18;
                var10[2] = var17;
                var10[3] = var16;
                var10[4] = var7;
                var7 = var2.id;
                var10[5] = var7;
                var7 = function() { // Environment: var1
                    var1 = {};
                    var0 = 'Set Random Quest Progress';
                    var1.label = var0;
                    var0 = function() {
                        var2 = _closure2_slot4;
                        var0 = global;
                        var1 = var0.Math;
                        var0 = var1.random;
                        var1 = var0.bind(var1)();
                        var0 = 0.9;
                        var3 = var0 * var1;
                        var1 = undefined;
                        var0 = 0.03;
                        var0 = var3 + var0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1.action = var0;
                    var0 = new Array(5);
                    var0[0] = var1;
                    var2 = {};
                    var1 = 'Complete Quest';
                    var2.label = var1;
                    var4 = _closure2_slot3;
                    var2.action = var4;
                    var0[1] = var2;
                    var2 = {};
                    var4 = 'Reset Quest';
                    var2.label = var4;
                    var4 = _closure2_slot6;
                    var2.action = var4;
                    var0[2] = var2;
                    var2 = {};
                    var4 = 'Reset Dismissibility';
                    var2.label = var4;
                    var4 = _closure2_slot5;
                    var2.action = var4;
                    var0[3] = var2;
                    var6 = _closure2_slot19;
                    var5 = 4;
                    var7 = var0;
                    var2 = arraySpread(var7, var6, var5);
                    var1 = {};
                    var4 = 'Copy Quest ID';
                    var1.label = var4;
                    var3 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.copy;
                        var0 = _closure2_slot0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.action = var3;
                    var0[var2] = var1;
                    var1 = 1;
                    var1 = var2 + var1;
                    return var0;
                };
                var13 = var13.bind(var11)(var7, var10);
                _closure2_slot20 = var13;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var10 = var10.bind(var3)(var7);
                var7 = var10.useShouldShowQuestBarOverride;
                var12 = var7.bind(var10)(var2);
                _closure2_slot21 = var12;
                var10 = var11.useMemo;
                var7 = new Array(3);
                var7[0] = var6;
                var6 = var2.id;
                var7[1] = var6;
                var6 = null;
                var16 = var6 == var15;
                var6 = undefined;
                if (var16) {
                    _fun84081_ip = 819;
                    continue _fun84081
                }
            case 814:
                var6 = var15.id;
            case 819:
                var7[2] = var6;
                var6 = function() { // Environment: var1
                    _fun84093: for (var _fun84093_ip = 0;;) switch (_fun84093_ip) {
                        case 0:
                            var0 = {};
                            var1 = 'Show in Quest Bar';
                            var0.label = var1;
                            var2 = _closure2_slot7;
                            var0.action = var2;
                            var3 = _closure2_slot8;
                            var2 = null;
                            var2 = var2 == var3;
                            var4 = undefined;
                            var3 = undefined;
                            if (var2) {
                                _fun84093_ip = 49;
                                continue _fun84093
                            }
                        case 40:
                            var2 = _closure2_slot8;
                            var3 = var2.id;
                        case 49:
                            var1 = _closure2_slot0;
                            var2 = var1.id;
                            var1 = undefined;
                            if (!(var3 === var2)) {
                                _fun84093_ip = 93;
                                continue _fun84093
                            }
                        case 64:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 23;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var1 = var2.CheckmarkLargeIcon;
                        case 93:
                            var0.IconComponent = var1;
                            return var0;
                    }
                };
                var11 = var10.bind(var11)(var6, var7);
                _closure2_slot22 = var11;
                var7 = _closure1_slot5;
                var10 = var7.useMemo;
                var6 = new Array(6);
                var6[0] = var14;
                var6[1] = var13;
                var13 = var2.preview;
                var6[2] = var13;
                var6[3] = var12;
                var6[4] = var11;
                var6[5] = var5;
                var5 = function() { // Environment: var1
                    _fun84094: for (var _fun84094_ip = 0;;) switch (_fun84094_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun84094_ip = 27;
                                continue _fun84094
                            }
                        case 13:
                            var0 = _closure2_slot18;
                            var4 = new Array(1);
                            var4[0] = var0;
                            _fun84094_ip = 50;
                            continue _fun84094;
                        case 27:
                            var1 = _closure2_slot18;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = _closure2_slot1;
                            var0[1] = var1;
                            var4 = var0;
                        case 50:
                            var0 = _closure2_slot21;
                            if (!var0) {
                                _fun84094_ip = 79;
                                continue _fun84094
                            }
                        case 57:
                            var1 = var4.push;
                            var3 = _closure2_slot22;
                            var0 = new Array(1);
                            var0[0] = var3;
                            var0 = var1.bind(var4)(var0);
                        case 79:
                            var0 = _closure2_slot0;
                            var1 = var0.preview;
                            var0 = var4;
                            if (!var1) {
                                _fun84094_ip = 130;
                                continue _fun84094
                            }
                        case 95:
                            var1 = new Array(1);
                            var5 = 0;
                            var7 = var1;
                            var6 = var4;
                            var3 = arraySpread(var7, var6, var5);
                            var2 = _closure2_slot20;
                            var1[var3] = var2;
                            var2 = 1;
                            var2 = var3 + var2;
                            var0 = var1;
                        case 130:
                            return var0;
                    }
                };
                var6 = var10.bind(var7)(var5, var6);
                var5 = var7.useCallback;
                var10 = var2.id;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot9;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1.questId = var0;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 14;
                    var4 = var6[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.QuestContent;
                    var4 = var4.QUEST_HOME_MOBILE;
                    var1.questContent = var4;
                    var4 = 15;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.QuestContentCTA;
                    var4 = var4.OPEN_CONTEXT_MENU;
                    var1.questContentCTA = var4;
                    var3 = _closure2_slot2;
                    var1.sourceQuestContent = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var5.bind(var7)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 24;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ContextMenu;
                var0 = {};
                var0.items = var6;
                var0.onOpen = var5;
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
    var3 = 'modules/quests/native/QuestContextMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 5226, 33, 7511, 8172, 1234, 5313, 566, 5303, 5304, 5290, 5266, 5317, 5230, 5277, 10756, 5258, 6432, 9689, 3258, 5267, 5291, 3262, 8948, 2]);