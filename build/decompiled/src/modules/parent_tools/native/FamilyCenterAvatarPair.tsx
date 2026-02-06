// modules/parent_tools/native/FamilyCenterAvatarPair.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'padding': 8
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.avatars = var8;
    var8 = {
        'height': 24,
        'width': 24,
        'marginHorizontal': 16
    };
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterAvatarPair.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82560: for (var _fun82560_ip = 0;;) switch (_fun82560_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.otherUser;
                var14 = var0.iconSrc;
                var17 = var0.iconStyles;
                var0 = _closure1_slot7;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var4 !== var13)) {
                    _fun82560_ip = 361;
                    continue _fun82560
                }
            case 95:
                var0 = null;
                if (!(var4 !== var9)) {
                    _fun82560_ip = 361;
                    continue _fun82560
                }
            case 104:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var16.avatars;
                var1.style = var5;
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 7;
                var5 = var12[var10];
                var6 = var7.bind(var4)(var5);
                var5 = {};
                var11 = _closure1_slot0;
                var15 = var12[var10];
                var15 = var11.bind(var4)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.LARGE_48;
                var5.size = var15;
                var5.user = var13;
                var5.guildId = var4;
                var13 = var13.avatarDecoration;
                var5.avatarDecoration = var13;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var15 = 8;
                var6 = var12[var15];
                var13 = var7.bind(var4)(var6);
                var6 = {};
                var18 = var16.icon;
                var16 = new Array(2);
                var16[0] = var18;
                var16[1] = var17;
                var6.style = var16;
                var15 = var12[var15];
                var15 = var7.bind(var4)(var15);
                var15 = var15.Sizes;
                var15 = var15.EXTRA_SMALL;
                var6.size = var15;
                var6.source = var14;
                var6 = var8.bind(var4)(var13, var6);
                var5[1] = var6;
                var6 = var12[var10];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.LARGE_48;
                var6.size = var10;
                var6.user = var9;
                var6.guildId = var4;
                var9 = var9.avatarDecoration;
                var6.avatarDecoration = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 361:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 632, 5457, 4087, 2]);