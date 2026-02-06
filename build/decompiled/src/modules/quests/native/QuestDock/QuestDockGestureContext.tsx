// modules/quests/native/QuestDock/QuestDockGestureContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var10 = 0;
    var7 = var6[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var9 = var3.QuestDockMode;
    var _closure1_slot5 = var9;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot6 = var4;
    var3 = var3.QUEST_DOCK_EXPANDED_HEIGHT;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var4 = var7.createContext;
    var3 = {};
    var8 = 5;
    var11 = var6[var8];
    var13 = var5.bind(var0)(var11);
    var12 = var13.createFakeSharedValue;
    var11 = {
        'width': 0,
        'height': 0,
        'x': 0,
        'y': 0,
        'prevDeltaY': 0
    };
    var11 = var12.bind(var13)(var11);
    var3.questDockWrapperSpecs = var11;
    var11 = var6[var8];
    var13 = var5.bind(var0)(var11);
    var12 = var13.createFakeSharedValue;
    var11 = {
        'width': 0,
        'height': 0,
        'maxContentHeight': 0,
        'landscape': false
    };
    var11 = var12.bind(var13)(var11);
    var3.windowDimensions = var11;
    var11 = var6[var8];
    var12 = var5.bind(var0)(var11);
    var11 = var12.createFakeSharedValue;
    var9 = var9.COLLAPSED;
    var9 = var11.bind(var12)(var9);
    var3.activeQuestDockMode = var9;
    var8 = var6[var8];
    var9 = var5.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var10);
    var3.minExpandedContentHeight = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var4 = var7.memo;
    var1 = function arg0() {
        _fun46884: for (var _fun46884_ip = 0;;) switch (_fun46884_ip) {
            case 0:
                var5 = _closure1_slot3;
                var6 = var5.useMemo;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 6;
                var2 = var11[var2];
                var3 = undefined;
                var2 = var10.bind(var3)(var2);
                var4 = var2.getWindowDimensions;
                var2 = new Array(0);
                var12 = var6.bind(var5)(var4, var2);
                var2 = 7;
                var2 = var11[var2];
                var6 = var10.bind(var3)(var2);
                var4 = var6.useMainTabsHeight;
                var2 = {
                    'enabled': true,
                    'ignoreQuestDock': true
                };
                var2 = var4.bind(var6)(var2);
                var _closure2_slot0 = var2;
                var4 = var5.useRef;
                var4 = var4.bind(var5)(var2);
                var _closure2_slot1 = var4;
                var6 = 8;
                var4 = var11[var6];
                var7 = var10.bind(var3)(var4);
                var5 = var7.useSharedValue;
                var4 = {};
                var8 = var12.width;
                var4.width = var8;
                var8 = var12.height;
                var4.height = var8;
                var9 = var12.width;
                var8 = var12.height;
                var8 = var9 > var8;
                var4.landscape = var8;
                var8 = var12.height;
                var8 = var8 - var2;
                var4.maxContentHeight = var8;
                var9 = var5.bind(var7)(var4);
                var _closure2_slot2 = var9;
                var4 = var11[var6];
                var8 = var10.bind(var3)(var4);
                var7 = var8.useSharedValue;
                var5 = {};
                var4 = 9;
                var13 = var11[var4];
                var16 = var10.bind(var3)(var13);
                var15 = var16.getQuestDockCollapsedWidth;
                var14 = var12.width;
                var12 = 10;
                var13 = var11[var12];
                var17 = var10.bind(var3)(var13);
                var13 = var17.getSafeAreaInsets;
                var13 = var13.bind(var17)();
                var13 = var13.left;
                var12 = var11[var12];
                var17 = var10.bind(var3)(var12);
                var12 = var17.getSafeAreaInsets;
                var12 = var12.bind(var17)();
                var12 = var12.right;
                var12 = var15.bind(var16)(var14, var13, var12);
                var5.width = var12;
                var13 = _closure1_slot6;
                var5.height = var13;
                var12 = 0;
                var5.x = var12;
                var5.y = var13;
                var5.prevDeltaY = var12;
                var8 = var7.bind(var8)(var5);
                var _closure2_slot3 = var8;
                var5 = var11[var6];
                var7 = var10.bind(var3)(var5);
                var5 = var7.useSharedValue;
                var4 = var11[var4];
                var11 = var10.bind(var3)(var4);
                var10 = var11.isSoftDismissed;
                var4 = _closure1_slot4;
                var4 = var4.questDockSoftDismissedAt;
                var4 = var10.bind(var11)(var4);
                var10 = _closure1_slot5;
                if (var4) {
                    _fun46884_ip = 381;
                    continue _fun46884
                }
            case 373:
                var4 = var10.COLLAPSED;
                _fun46884_ip = 387;
                continue _fun46884;
            case 381:
                var4 = var10.SOFT_DISMISSED;
            case 387:
                var7 = var5.bind(var7)(var4);
                var _closure2_slot4 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var6 = var5.bind(var3)(var4);
                var5 = var6.useSharedValue;
                var4 = _closure1_slot7;
                var6 = var5.bind(var6)(var4);
                var _closure2_slot5 = var6;
                var5 = _closure1_slot3;
                var10 = var5.useEffect;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var10.bind(var5)(var2, var4);
                var10 = var5.useEffect;
                var4 = new Array(1);
                var4[0] = var9;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var5 = var0.width;
                        var4 = var0.height;
                        var2 = _closure2_slot2;
                        var1 = var2.set;
                        var0 = {};
                        var0.width = var5;
                        var0.height = var4;
                        var5 = var5 > var4;
                        var0.landscape = var5;
                        var3 = _closure2_slot1;
                        var3 = var3.current;
                        var3 = var4 - var3;
                        var0.maxContentHeight = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var10.bind(var5)(var2, var4);
                var4 = var5.useMemo;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure2_slot2;
                    var0.windowDimensions = var2;
                    var2 = _closure2_slot3;
                    var0.questDockWrapperSpecs = var2;
                    var2 = _closure2_slot4;
                    var0.activeQuestDockMode = var2;
                    var1 = _closure2_slot5;
                    var0.minExpandedContentHeight = var1;
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot8;
                var0 = _closure1_slot9;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = arg0;
                var4 = var4.children;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockGestureContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.QuestDockGestureContext = var3;
    var2.QuestDockGestureContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5256, 5233, 5258, 33, 5260, 1464, 5229, 3722, 5257, 1568, 5261, 2]);