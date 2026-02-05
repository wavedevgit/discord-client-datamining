// modules/guild_action_sheet/native/components/GuildActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.container = var9;
    var9 = {
        'paddingHorizontal': 16,
        'gap': 24
    };
    var3.actions = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun96648: for (var _fun96648_ip = 0;;) switch (_fun96648_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.guild;
                var6 = var0.expanded;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun96648_ip = 22;
                    continue _fun96648
                }
            case 20:
                var6 = false;
            case 22:
                var0 = _closure1_slot6;
                var17 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 5;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.bottom;
                var12 = _closure1_slot0;
                var0 = 6;
                var0 = var14[var0];
                var1 = var12.bind(var3)(var0);
                var0 = var1.useBottomSheetRef;
                var0 = var0.bind(var1)();
                var7 = var0.bottomSheetRef;
                var13 = var0.bottomSheetClose;
                var2 = _closure1_slot4;
                var0 = 7;
                var0 = var14[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var4 = 8;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {
                    'ref': null,
                    'handleDisabled': true,
                    'showGradient': true,
                    'scrollable': true
                };
                var4.ref = var7;
                var4.startExpanded = var6;
                var8 = _closure1_slot5;
                var6 = 9;
                var6 = var14[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.BottomSheetScrollView;
                var6 = {};
                var9 = false;
                var6.scrollsToTop = var9;
                var9 = var17.container;
                var6.style = var9;
                var9 = {};
                var10 = 10;
                var10 = var14[var10];
                var12 = var12.bind(var3)(var10);
                var10 = var12.isAndroid;
                var12 = var10.bind(var12)();
                var10 = 0;
                if (!var12) {
                    _fun96648_ip = 239;
                    continue _fun96648
                }
            case 236:
                var10 = 16;
            case 239:
                var10 = var11 + var10;
                var9.paddingBottom = var10;
                var6.contentContainerStyle = var9;
                var12 = _closure1_slot4;
                var19 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 11;
                var9 = var16[var9];
                var10 = var19.bind(var3)(var9);
                var9 = {};
                var9.guild = var20;
                var10 = var12.bind(var3)(var10, var9);
                var9 = new Array(4);
                var9[0] = var10;
                var10 = 12;
                var10 = var16[var10];
                var11 = var19.bind(var3)(var10);
                var10 = {};
                var10.guild = var20;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var14 = _closure1_slot5;
                var11 = _closure1_slot3;
                var10 = {};
                var17 = var17.actions;
                var10.style = var17;
                var15 = _closure1_slot0;
                var18 = 13;
                var17 = var16[var18];
                var17 = var15.bind(var3)(var17);
                var21 = var17.GuildUnreadAction;
                var17 = {};
                var17.guild = var20;
                var21 = var12.bind(var3)(var21, var17);
                var17 = new Array(6);
                var17[0] = var21;
                var21 = 14;
                var21 = var16[var21];
                var22 = var19.bind(var3)(var21);
                var21 = {};
                var21.guild = var20;
                var21 = var12.bind(var3)(var22, var21);
                var17[1] = var21;
                var21 = var16[var18];
                var21 = var15.bind(var3)(var21);
                var22 = var21.GuildActionSheetPrimaryActions;
                var21 = {};
                var21.guild = var20;
                var21 = var12.bind(var3)(var22, var21);
                var17[2] = var21;
                var21 = var16[var18];
                var21 = var15.bind(var3)(var21);
                var22 = var21.GuildActionSheetSecondaryActions;
                var21 = {};
                var21.guild = var20;
                var21 = var12.bind(var3)(var22, var21);
                var17[3] = var21;
                var18 = var16[var18];
                var18 = var15.bind(var3)(var18);
                var21 = var18.GuildDeveloperOptionAction;
                var18 = {};
                var18.guild = var20;
                var18 = var12.bind(var3)(var21, var18);
                var17[4] = var18;
                var18 = 15;
                var18 = var16[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var20 = var20.id;
                var18.guildId = var20;
                var18 = var12.bind(var3)(var19, var18);
                var17[5] = var18;
                var10.children = var17;
                var10 = var14.bind(var3)(var11, var10);
                var9[2] = var10;
                var10 = 16;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.ActionSheetHeaderBar;
                var10 = {};
                var14 = 17;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.ActionSheetHeaderBarVariants;
                var14 = var14.FLOATING;
                var10.variant = var14;
                var10.onPress = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[3] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 5729, 4899, 4933, 4935, 478, 12600, 12607, 12593, 12612, 12615, 5204, 5204, 2]);