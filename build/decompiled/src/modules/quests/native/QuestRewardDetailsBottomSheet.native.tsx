// modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingBottom = var12;
    var3.wrapper = var8;
    var8 = {};
    var8.flexShrink = var11;
    var3.rewardDetailsCopy = var8;
    var8 = {};
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var8.backgroundColor = var9;
    var3.separator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78764: for (var _fun78764_ip = 0;;) switch (_fun78764_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.questId;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 5;
                var1 = var22[var1];
                var3 = undefined;
                var2 = var21.bind(var3)(var1);
                var1 = var2.useNonNullableQuest;
                var19 = var1.bind(var2)(var4);
                var _closure2_slot0 = var19;
                var1 = _closure1_slot8;
                var18 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var5 = var4.useMemo;
                var1 = var19.config;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isCollectibleQuestRewardPremiumExtendable;
                    var0 = _closure2_slot0;
                    var0 = var0.config;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var4)(var1, var2);
                var _closure2_slot1 = var5;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun78766: for (var _fun78766_ip = 0;;) switch (_fun78766_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var5 = undefined;
                            var7 = var4.bind(var5)(var0);
                            var6 = var7.getQuestPrimaryReward;
                            var2 = _closure2_slot0;
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.type;
                            var6 = 7;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.QuestRewardTypes;
                            var1 = var1.COLLECTIBLE;
                            if (!(var1 !== var2)) {
                                _fun78766_ip = 172;
                                continue _fun78766
                            }
                        case 76:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.QuestRewardTypes;
                            var1 = var1.FRACTIONAL_PREMIUM;
                            if (!(var1 !== var2)) {
                                _fun78766_ip = 113;
                                continue _fun78766
                            }
                        case 109:
                            var1 = null;
                            return var1;
                        case 113:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 8;
                            var2 = var7[var1];
                            var2 = var6.bind(var5)(var2);
                            var4 = var2.intl;
                            var2 = var4.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var5)(var1);
                            var1 = var1.t;
                            var1 = var1.maMtqM;
                            var1 = var2.bind(var4)(var1);
                            return var1;
                        case 172:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 8;
                            var1 = var1[var6];
                            var1 = var2.bind(var5)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.t;
                            if (var0) {
                                _fun78766_ip = 241;
                                continue _fun78766
                            }
                        case 231:
                            var0 = var3.ABD2CN;
                            _fun78766_ip = 249;
                            continue _fun78766;
                        case 241:
                            var0 = var3["66YyBJ"];
                        case 249:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var16 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot5;
                var0 = 9;
                var0 = var22[var0];
                var0 = var21.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot6;
                var10 = 10;
                var4 = var22[var10];
                var4 = var21.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var15 = 'vertical';
                var4.direction = var15;
                var14 = _closure1_slot1;
                var12 = 4;
                var7 = var22[var12];
                var7 = var14.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var4.spacing = var7;
                var7 = var18.wrapper;
                var4.style = var7;
                var7 = var22[var10];
                var7 = var21.bind(var3)(var7);
                var8 = var7.Stack;
                var7 = {
                    'align': 'center',
                    'direction': 'horizontal'
                };
                var9 = var22[var12];
                var9 = var14.bind(var3)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_16;
                var7.spacing = var9;
                var9 = 11;
                var9 = var22[var9];
                var11 = var14.bind(var3)(var9);
                var9 = {
                    'quest': null,
                    'height': 56,
                    'width': 56,
                    'withAnimation': true
                };
                var9.quest = var19;
                var11 = var2.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var22[var10];
                var10 = var21.bind(var3)(var10);
                var11 = var10.Stack;
                var10 = {};
                var10.direction = var15;
                var12 = var22[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_4;
                var10.spacing = var12;
                var12 = var18.rewardDetailsCopy;
                var10.style = var12;
                var17 = 12;
                var12 = var22[var17];
                var12 = var21.bind(var3)(var12);
                var14 = var12.Text;
                var12 = {
                    'variant': 'eyebrow',
                    'color': 'text-subtle'
                };
                var15 = 8;
                var20 = var22[var15];
                var20 = var21.bind(var3)(var20);
                var23 = var20.intl;
                var20 = var23.string;
                var15 = var22[var15];
                var15 = var21.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["jyYgZ+"];
                var15 = var20.bind(var23)(var15);
                var12.children = var15;
                var14 = var2.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var14 = var22[var17];
                var14 = var21.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'text-strong'
                };
                var20 = 6;
                var20 = var22[var20];
                var21 = var21.bind(var3)(var20);
                var20 = var21.getDefaultRewardName;
                var19 = var19.config;
                var19 = var20.bind(var21)(var19);
                var14.children = var19;
                var14 = var2.bind(var3)(var15, var14);
                var12[1] = var14;
                var10.children = var12;
                var10 = var6.bind(var3)(var11, var10);
                var9[1] = var10;
                var7.children = var9;
                var8 = var6.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                var8 = var8 != var16;
                if (!var8) {
                    _fun78764_ip = 697;
                    continue _fun78764
                }
            case 593:
                var11 = _closure1_slot6;
                var10 = _closure1_slot7;
                var9 = {};
                var15 = _closure1_slot5;
                var14 = _closure1_slot4;
                var12 = {};
                var18 = var18.separator;
                var12.style = var18;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 697:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5308, 5282, 5232, 1234, 4926, 4071, 10021, 3932, 2]);