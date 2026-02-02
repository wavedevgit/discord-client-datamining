// modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'paddingHorizontal': 16,
        'gap': 24
    };
    var3.actions = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96521: for (var _fun96521_ip = 0;;) switch (_fun96521_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.guild;
                var4 = var0.expanded;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun96521_ip = 22;
                    continue _fun96521
                }
            case 20:
                var4 = false;
            case 22:
                var0 = _closure1_slot6;
                var10 = var0.bind(var3)();
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 5;
                var0 = var14[var0];
                var0 = var9.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.bottom;
                var2 = _closure1_slot4;
                var12 = _closure1_slot0;
                var0 = 6;
                var0 = var14[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var5 = true;
                var0.scrollable = var5;
                var0.startExpanded = var4;
                var6 = _closure1_slot5;
                var4 = 7;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var7 = false;
                var4.scrollsToTop = var7;
                var7 = var10.container;
                var4.style = var7;
                var7 = {};
                var7.paddingBottom = var11;
                var4.contentContainerStyle = var7;
                var7 = 8;
                var7 = var14[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.guild = var13;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = _closure1_slot3;
                var8 = {};
                var10 = var10.actions;
                var8.style = var10;
                var11 = 9;
                var10 = var14[var11];
                var10 = var12.bind(var3)(var10);
                var15 = var10.GuildActionSheetDirectoryActions;
                var10 = {};
                var10.guild = var13;
                var15 = var2.bind(var3)(var15, var10);
                var10 = new Array(2);
                var10[0] = var15;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.GuildDeveloperOptionAction;
                var11 = {};
                var11.guild = var13;
                var11 = var2.bind(var3)(var12, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 4896, 4898, 12537, 12530, 2]);