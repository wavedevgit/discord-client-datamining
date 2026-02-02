// modules/avatar_decorations/native/AvatarGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun50845: for (var _fun50845_ip = 0;;) switch (_fun50845_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.user;
                var _closure2_slot0 = var11;
                var10 = var1.guildId;
                var0 = var1.size;
                var7 = var1.showStatus;
                var9 = var1.pendingAvatarSrc;
                var2 = var1.pendingAvatarDecoration;
                var1 = _closure1_slot8;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 7;
                var4 = var13[var8];
                var16 = var12.bind(var3)(var4);
                var15 = var16.useStateFromStores;
                var4 = _closure1_slot5;
                var14 = new Array(1);
                var14[0] = var4;
                var4 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getStatus;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var15.bind(var16)(var14, var4);
                var8 = var13[var8];
                var13 = var12.bind(var3)(var8);
                var12 = var13.useStateFromStores;
                var14 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var14;
                var5 = function() { // Environment: var5
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var12.bind(var13)(var8, var5);
                var5 = {};
                if (!(var3 === var2)) {
                    _fun50845_ip = 152;
                    continue _fun50845
                }
            case 146:
                var2 = var11.avatarDecoration;
            case 152:
                var5.avatarDecoration = var2;
                var2 = undefined;
                if (!var7) {
                    _fun50845_ip = 165;
                    continue _fun50845
                }
            case 162:
                var2 = var4;
            case 165:
                var5.status = var2;
                var1 = var1.avatarStatusStyle;
                var5.statusStyle = var1;
                var5.size = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                if (!(var3 === var9)) {
                    _fun50845_ip = 234;
                    continue _fun50845
                }
            case 212:
                var0 = {};
                var0.user = var11;
                var0.guildId = var10;
                var20 = var0;
                var19 = var5;
                var4 = copyDataProperties(var20, var19);
                _fun50845_ip = 298;
                continue _fun50845;
            case 234:
                var4 = {};
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 9;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getAvatarSource;
                var21 = var7;
                var20 = var11;
                var19 = var10;
                var18 = var9;
                var17 = var8;
                var6 = var21[var6](var20, var19, var18, var17, var16);
                var4.source = var6;
                var20 = var4;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var0 = var4;
            case 298:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-around'
    };
    var3.avatarRow = var8;
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.avatarStatusStyle = var8;
    var8 = {
        'width': 108,
        'height': 108,
        'justifyContent': 'space-around',
        'marginLeft': 28
    };
    var3.gridContainer = var8;
    var8 = {
        'width': 56,
        'height': 208,
        'display': 'flex',
        'alignItems': 'center',
        'backgroundColor': null,
        'marginLeft': 12
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.columnContainer = var8;
    var8 = {};
    var9 = 8;
    var8.padding = var9;
    var3.columnAvatarContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar_decorations/native/AvatarGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var10 = arg0;
        var0 = _closure1_slot8;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var6.gridContainer;
        var0.style = var4;
        var4 = {};
        var5 = var6.avatarRow;
        var4.style = var5;
        var8 = _closure1_slot6;
        var9 = _closure1_slot9;
        var5 = {};
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var12 = 8;
        var11 = var14[var12];
        var11 = var13.bind(var3)(var11);
        var11 = var11.AvatarSizes;
        var11 = var11.NORMAL;
        var5.size = var11;
        var18 = var5;
        var17 = var10;
        var11 = copyDataProperties(var18, var17);
        var8 = var8.bind(var3)(var9, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var15 = _closure1_slot6;
        var8 = {};
        var11 = var14[var12];
        var11 = var13.bind(var3)(var11);
        var11 = var11.AvatarSizes;
        var11 = var11.NORMAL;
        var8.size = var11;
        var11 = true;
        var8.showStatus = var11;
        var18 = var8;
        var17 = var10;
        var16 = copyDataProperties(var18, var17);
        var8 = var15.bind(var3)(var9, var8);
        var5[1] = var8;
        var4.children = var5;
        var5 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var6.avatarRow;
        var5.style = var6;
        var8 = _closure1_slot6;
        var6 = {};
        var15 = var14[var12];
        var15 = var13.bind(var3)(var15);
        var15 = var15.AvatarSizes;
        var15 = var15.REFRESH_MEDIUM_32;
        var6.size = var15;
        var18 = var6;
        var17 = var10;
        var15 = copyDataProperties(var18, var17);
        var8 = var8.bind(var3)(var9, var6);
        var6 = new Array(2);
        var6[0] = var8;
        var8 = _closure1_slot6;
        var7 = {};
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.AvatarSizes;
        var12 = var12.REFRESH_MEDIUM_32;
        var7.size = var12;
        var7.showStatus = var11;
        var18 = var7;
        var17 = var10;
        var10 = copyDataProperties(var18, var17);
        var7 = var8.bind(var3)(var9, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3571, 33, 1297, 671, 566, 5416, 5701, 2]);