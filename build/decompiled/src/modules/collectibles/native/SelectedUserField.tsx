// modules/collectibles/native/SelectedUserField.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var10 = {
        'backgroundColor': null,
        'flexDirection': 'row',
        'borderRadius': null,
        'minHeight': null,
        'overflow': 'hidden',
        'alignItems': 'center',
        'display': 'flex'
    };
    var11 = 4;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.colors;
    var3 = var3.INPUT_BACKGROUND_DEFAULT;
    var10.backgroundColor = var3;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.radii;
    var3 = var3.lg;
    var10.borderRadius = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InputHeights;
    var3 = var3.LG;
    var10.minHeight = var3;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var3 = var3.spacing;
    var3 = var3.PX_16;
    var10.paddingHorizontal = var3;
    var3 = 6;
    var10.paddingVertical = var3;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginHorizontal = var13;
    var6.container = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.marginRight = var13;
    var6.searchIcon = var10;
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'flex': 1
    };
    var6.selectedUserContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingVertical': 6,
        'paddingHorizontal': 6
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10.borderRadius = var11;
    var6.userPill = var10;
    var10 = {};
    var10.marginLeft = var3;
    var6.userPillText = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CircleXIcon;
    var3 = {};
    var8 = 'xs';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/SelectedUserField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71382: for (var _fun71382_ip = 0;;) switch (_fun71382_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.selectedUser;
                var4 = var0.onPress;
                var0 = var0.setSelectedUser;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot7;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var16.container;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.MagnifyingGlassIcon;
                var4 = {
                    'style': null,
                    'size': 'xs',
                    'color': 'interactive-text-default'
                };
                var7 = var16.searchIcon;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!(var5 == var18)) {
                    _fun71382_ip = 249;
                    continue _fun71382
                }
            case 138:
                var7 = _closure1_slot5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 9;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = 'text-sm/medium';
                var5.variant = var8;
                var8 = var16.userPillText;
                var5.style = var8;
                var8 = 11;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.R0vK0N;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun71382_ip = 495;
                continue _fun71382;
            case 249:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var16.selectedUserContainer;
                var6.style = var9;
                var9 = {};
                var10 = var16.userPill;
                var9.style = var10;
                var12 = _closure1_slot5;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var20 = 8;
                var10 = var19[var20];
                var11 = var17.bind(var3)(var10);
                var10 = {};
                var10.user = var18;
                var10.guildId = var3;
                var15 = _closure1_slot0;
                var20 = var19[var20];
                var20 = var15.bind(var3)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.XSMALL_20;
                var10.size = var20;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = 9;
                var11 = var19[var11];
                var11 = var15.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {};
                var20 = 'text-md/medium';
                var11.variant = var20;
                var16 = var16.userPillText;
                var11.style = var16;
                var16 = 10;
                var16 = var19[var16];
                var17 = var17.bind(var3)(var16);
                var16 = var17.getName;
                var16 = var16.bind(var17)(var18);
                var11.children = var16;
                var11 = var12.bind(var3)(var15, var11);
                var10[1] = var11;
                var9.children = var10;
                var10 = var8.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = _closure1_slot3;
                var10 = {};
                var14 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var0);
                    return var0;
                };
                var10.onPress = var14;
                var13 = _closure1_slot8;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 495:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5459, 5437, 7108, 5512, 3938, 3237, 1234, 2]);