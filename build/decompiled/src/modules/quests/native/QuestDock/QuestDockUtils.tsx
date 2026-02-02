// modules/quests/native/QuestDock/QuestDockUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var10[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var4 = var3.PixelRatio;
    var3 = 1;
    var3 = var10[var3];
    var3 = var9.bind(var0)(var3);
    var5 = var3.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED;
    var _closure1_slot0 = var5;
    var5 = var3.QUEST_DOCK_COLLAPSED_MAX_WIDTH;
    var _closure1_slot1 = var5;
    var3 = var3.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot2 = var3;
    var3 = var4.get;
    var3 = var3.bind(var4)();
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function roundToNearestPixel_QuestDockUtilsTsx1(position){const{PIXEL_DENSITY}=this.__closure;return Math.round(position*PIXEL_DENSITY)/PIXEL_DENSITY;}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.round;
            var1 = _closure1_slot3;
            var0 = arg0;
            var0 = var0 * var1;
            var0 = var2.bind(var3)(var0);
            var0 = var0 / var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.PIXEL_DENSITY = var3;
        var0.__closure = var2;
        var2 = 9602449563120.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var7 = var3.bind(var0)();
    var3 = {};
    var4 = 'function getQuestDockExpandedHeightLimits_QuestDockUtilsTsx2(windowHeight,safeAreaTop,minContentHeight){const{QUEST_DOCK_COLLAPSED_HEIGHT}=this.__closure;return{minHeight:QUEST_DOCK_COLLAPSED_HEIGHT,maxHeight:Math.min(minContentHeight,windowHeight-safeAreaTop)};}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = {};
            var1 = _closure1_slot2;
            var0.minHeight = var1;
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var2 = arg0;
            var1 = arg1;
            var2 = var2 - var1;
            var1 = arg2;
            var1 = var3.bind(var4)(var1, var2);
            var0.maxHeight = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.QUEST_DOCK_COLLAPSED_HEIGHT = var3;
        var0.__closure = var2;
        var2 = 880847803554.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var6 = var3.bind(var0)();
    var3 = {};
    var4 = 'function getQuestDockCollapsedWidth_QuestDockUtilsTsx3(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;safeAreaLeft=Math.max(safeAreaLeft,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);safeAreaRight=Math.max(safeAreaRight,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED);return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var6 = _closure1_slot0;
            var2 = arg1;
            var5 = var3.bind(var4)(var2, var6);
            var4 = var1.Math;
            var3 = var4.max;
            var2 = arg2;
            var4 = var3.bind(var4)(var2, var6);
            var3 = var1.Math;
            var2 = var3.min;
            var1 = arg0;
            var1 = var1 - var5;
            var1 = var1 - var4;
            var0 = _closure1_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot0;
        var2.QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED = var3;
        var3 = _closure1_slot1;
        var2.QUEST_DOCK_COLLAPSED_MAX_WIDTH = var3;
        var0.__closure = var2;
        var2 = 1119343760780.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot6;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = {};
    var4 = 'function getQuestDockExpandedWidth_QuestDockUtilsTsx4(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.min;
            var1 = arg0;
            var0 = arg1;
            var1 = var1 - var0;
            var0 = arg2;
            var1 = var1 - var0;
            var0 = _closure1_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot1;
        var2.QUEST_DOCK_COLLAPSED_MAX_WIDTH = var3;
        var0.__closure = var2;
        var2 = 6480418564130.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var8 = 'function getQuestDockClosedWidth_QuestDockUtilsTsx5(windowWidth,safeAreaLeft,safeAreaRight){const{QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return Math.min(windowWidth-safeAreaLeft-safeAreaRight,QUEST_DOCK_COLLAPSED_MAX_WIDTH);}';
    var3.code = var8;
    var _closure1_slot8 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.min;
            var1 = arg0;
            var0 = arg1;
            var1 = var1 - var0;
            var0 = arg2;
            var1 = var1 - var0;
            var0 = _closure1_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot1;
        var2.QUEST_DOCK_COLLAPSED_MAX_WIDTH = var3;
        var0.__closure = var2;
        var2 = 14159592925974.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot8;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var8 = 2;
    var11 = var10[var8];
    var8 = arg2;
    var8 = var8.bind(var0)(var11);
    var8 = var8.Millis;
    var11 = var8.HOUR;
    var8 = 3;
    var11 = var8 * var11;
    var _closure1_slot9 = var11;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quests/native/QuestDock/QuestDockUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.roundToNearestPixel = var7;
    var2.getQuestDockExpandedHeightLimits = var6;
    var2.getQuestDockCollapsedWidth = var5;
    var2.getQuestDockExpandedWidth = var4;
    var2.getQuestDockClosedWidth = var3;
    var1 = function arg0() {
        _fun46717: for (var _fun46717_ip = 0;;) switch (_fun46717_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun46717_ip = 44;
                    continue _fun46717
                }
            case 12:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2 = var1 - var2;
                var1 = _closure1_slot9;
                var0 = var2 < var1;
            case 44:
                return var0;
        }
    };
    var2.isSoftDismissed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5218, 667, 2]);