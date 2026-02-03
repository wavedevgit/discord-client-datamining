// modules/quests/native/QuestDockDismissalToast.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() {
        var1 = _closure1_slot6;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var0 = var9[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'color': 'mobile-text-heading-primary',
            'variant': 'text-sm/semibold'
        };
        var4 = 6;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.dYE1px;
        var4 = {};
        var8 = function() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = _closure2_slot0;
            var4 = var7.toastArrowForwardIconContainer;
            var1.style = var4;
            var6 = _closure1_slot5;
            var5 = _closure1_slot3;
            var4 = {};
            var8 = 'contain';
            var4.resizeMode = var8;
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 7;
            var8 = var8[var0];
            var0 = undefined;
            var8 = var9.bind(var0)(var8);
            var4.source = var8;
            var7 = var7.toastArrowForwardIcon;
            var4.style = var7;
            var4 = var6.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.arrowHook = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'height': 6,
            'width': 16
        };
        var0.toastArrowForwardIconContainer = var1;
        var1 = {
            'opacity': 0.35,
            'position': 'absolute',
            'top': '50%',
            'left': 0,
            'height': 16,
            'width': 16
        };
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.colors;
        var2 = var2.INTERACTIVE_TEXT_ACTIVE;
        var1.tintColor = var2;
        var3 = {};
        var2 = -10;
        var3.translateY = var2;
        var2 = new Array(1);
        var2[0] = var3;
        var1.transform = var2;
        var0.toastArrowForwardIcon = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDockDismissalToast.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 8;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var7 = 'QUEST_BAR_DISMISS_TOAST';
        var1.key = var7;
        var4 = _closure1_slot7;
        var1.content = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var1.icon = var4;
        var4 = 'bottom';
        var1.position = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.displayQuestDismissalToast = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3941, 1234, 11658, 3148, 7291, 2]);