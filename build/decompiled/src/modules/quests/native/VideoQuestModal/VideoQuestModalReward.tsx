// modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun83929: for (var _fun83929_ip = 0;;) switch (_fun83929_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.style;
                var2 = var1.withQuestName;
                var3 = undefined;
                var10 = var3 === var2;
                if (var10) {
                    _fun83929_ip = 28;
                    continue _fun83929
                }
            case 25:
                var10 = var2;
            case 28:
                var2 = var1.withRewardAvailableCopy;
                var8 = var3 === var2;
                if (var8) {
                    _fun83929_ip = 44;
                    continue _fun83929
                }
            case 41:
                var8 = var2;
            case 44:
                var2 = var1.size;
                var20 = 'lg';
                if (!(var3 !== var2)) {
                    _fun83929_ip = 60;
                    continue _fun83929
                }
            case 57:
                var20 = var2;
            case 60:
                var16 = var1.withRewardTileAnimation;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 2;
                var1 = var12[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useVideoQuestModalContext;
                var1 = var1.bind(var2)();
                var17 = var1.quest;
                var _closure2_slot0 = var17;
                var1 = 3;
                var1 = var12[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useQuestTaskDetails;
                var19 = var1.bind(var2)(var17);
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var7 = var17.id;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openRewardDetailsBottomSheet;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.questId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var18 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var5 = 5;
                var0 = var12[var5];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {
                    'justify': 'center',
                    'align': 'center'
                };
                var13 = 'center';
                var11 = _closure1_slot1;
                var7 = 6;
                var14 = var12[var7];
                var14 = var11.bind(var3)(var14);
                var14 = var14.spacing;
                var14 = var14.PX_24;
                var0.spacing = var14;
                var0.style = var4;
                var15 = _closure1_slot4;
                var4 = 7;
                var4 = var12[var4];
                var14 = var11.bind(var3)(var4);
                var4 = {};
                var21 = true;
                var4.hasConfetti = var21;
                var4.quest = var17;
                var4.size = var20;
                var19 = var19.percentComplete;
                var4.progress = var19;
                var4.onPress = var18;
                var4.withAnimation = var16;
                var14 = var15.bind(var3)(var14, var4);
                var4 = new Array(2);
                var4[0] = var14;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Stack;
                var5 = {};
                var5.align = var13;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var5.spacing = var7;
                if (!var10) {
                    _fun83929_ip = 487;
                    continue _fun83929
                }
            case 362:
                var12 = _closure1_slot4;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 8;
                var7 = var18[var7];
                var7 = var14.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'text-strong'
                };
                var13 = 9;
                var15 = var18[var13];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.EAYZAr;
                var13 = {};
                var17 = var17.config;
                var17 = var17.messages;
                var17 = var17.questName;
                var13.questName = var17;
                var13 = var15.bind(var16)(var14, var13);
                var7.children = var13;
                var10 = var12.bind(var3)(var11, var7);
            case 487:
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun83929_ip = 600;
                    continue _fun83929
                }
            case 498:
                var11 = _closure1_slot4;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 8;
                var9 = var16[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'heading-sm/medium',
                    'color': 'text-subtle'
                };
                var12 = 9;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["1Wvve2"];
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 600:
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 10699, 5308, 10019, 4071, 671, 10730, 3932, 1234, 2]);