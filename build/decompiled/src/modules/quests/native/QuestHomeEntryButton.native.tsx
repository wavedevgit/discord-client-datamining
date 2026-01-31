// modules/quests/native/QuestHomeEntryButton.native.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
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
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'height': 32,
        'justifyContent': 'center',
        'marginRight': 4,
        'width': 32
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHomeEntryButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: QuestHomeEntryButton, environment: var1
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openUserSettings;
            var1 = {};
            var4 = _closure1_slot4;
            var4 = var4.QUESTS;
            var1.screen = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var4 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 6;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.PressableScale;
        var0 = {};
        var7 = var7.button;
        var0.style = var7;
        var7 = 'button';
        var0.accessibilityRole = var7;
        var7 = 7;
        var9 = var8[var7];
        var9 = var5.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var5.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.JALI2K;
        var7 = var9.bind(var10)(var7);
        var0.accessibilityLabel = var7;
        var0.onPress = var4;
        var4 = 8;
        var0.hitSlop = var4;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.QuestsIcon;
        var4 = {};
        var7 = 'sm';
        var4.size = var7;
        var7 = _closure1_slot1;
        var6 = 4;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.WHITE;
        var4.color = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 1297, 671, 5884, 6987, 1234, 10605, 2]);