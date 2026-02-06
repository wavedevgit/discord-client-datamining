// modules/collectibles/native/SelectedUserField.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'borderRadius': null,
        'minHeight': null,
        'overflow': 'hidden',
        'alignItems': 'center',
        'display': 'flex'
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.InputHeights;
    var9 = var9.LG;
    var8.minHeight = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var9 = 6;
    var8.paddingVertical = var9;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginHorizontal = var12;
    var3.container = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginRight = var12;
    var3.searchIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'flex': 1
    };
    var3.selectedUserContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingVertical': 6,
        'paddingHorizontal': 6
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var8.borderRadius = var10;
    var3.userPill = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.userPillText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/SelectedUserField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87718: for (var _fun87718_ip = 0;;) switch (_fun87718_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.selectedUser;
                var4 = var0.onPress;
                var0 = var0.setSelectedUser;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot7;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var19.container;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.MagnifyingGlassIcon;
                var4 = {
                    'style': null,
                    'size': 'xs',
                    'color': 'interactive-text-default'
                };
                var7 = var19.searchIcon;
                var4.style = var7;
                var15 = 'xs';
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!(var5 == var21)) {
                    _fun87718_ip = 253;
                    continue _fun87718
                }
            case 142:
                var7 = _closure1_slot5;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 8;
                var5 = var14[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = 'text-sm/medium';
                var5.variant = var8;
                var8 = var19.userPillText;
                var5.style = var8;
                var8 = 11;
                var9 = var14[var8];
                var9 = var12.bind(var3)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var8 = var14[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.R0vK0N;
                var8 = var9.bind(var11)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun87718_ip = 525;
                continue _fun87718;
            case 253:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var19.selectedUserContainer;
                var6.style = var9;
                var9 = {};
                var11 = var19.userPill;
                var9.style = var11;
                var12 = _closure1_slot5;
                var20 = _closure1_slot1;
                var16 = _closure1_slot2;
                var18 = 7;
                var11 = var16[var18];
                var17 = var20.bind(var3)(var11);
                var11 = {};
                var11.user = var21;
                var11.guildId = var3;
                var14 = _closure1_slot0;
                var18 = var16[var18];
                var18 = var14.bind(var3)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.XSMALL_20;
                var11.size = var18;
                var17 = var12.bind(var3)(var17, var11);
                var11 = new Array(2);
                var11[0] = var17;
                var17 = 8;
                var17 = var16[var17];
                var17 = var14.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {};
                var22 = 'text-md/medium';
                var17.variant = var22;
                var19 = var19.userPillText;
                var17.style = var19;
                var19 = 9;
                var19 = var16[var19];
                var20 = var20.bind(var3)(var19);
                var19 = var20.getName;
                var19 = var19.bind(var20)(var21);
                var17.children = var19;
                var17 = var12.bind(var3)(var18, var17);
                var11[1] = var17;
                var9.children = var11;
                var11 = var8.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot3;
                var10 = {};
                var13 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var0);
                    return var0;
                };
                var10.onPress = var13;
                var13 = 10;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.CircleXIcon;
                var13 = {};
                var13.size = var15;
                var13 = var12.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 525:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5401, 7038, 5457, 3943, 3238, 5378, 1234, 2]);