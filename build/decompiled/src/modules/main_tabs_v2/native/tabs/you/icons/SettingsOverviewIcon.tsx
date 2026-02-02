// modules/main_tabs_v2/native/tabs/you/icons/SettingsOverviewIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103428: for (var _fun103428_ip = 0;;) switch (_fun103428_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.color;
                var4 = var0.showRedDot;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var12.container;
                var0.style = var5;
                if (var4) {
                    _fun103428_ip = 104;
                    continue _fun103428
                }
            case 49:
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.SettingsIcon;
                var4 = {};
                var7 = 'sm';
                var4.size = var7;
                var4.color = var16;
                var4 = var6.bind(var3)(var5, var4);
                _fun103428_ip = 261;
                continue _fun103428;
            case 104:
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = _closure1_slot4;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 3;
                var8 = var17[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var14 = _closure1_slot6;
                var13 = new Array(1);
                var13[0] = var14;
                var8.cutouts = var13;
                var15 = _closure1_slot4;
                var14 = _closure1_slot0;
                var13 = 7;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.SettingsIcon;
                var13 = {};
                var17 = 'sm';
                var13.size = var17;
                var13.color = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8.children = var13;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var9 = {};
                var12 = var12.dot;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 261:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
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
    var3 = {};
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CutoutShape;
    var7 = var7.Circle;
    var3.shape = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ICON_SIZE;
    var8 = var7.sm;
    var7 = 8.5;
    var7 = var8 - var7;
    var3.x = var7;
    var7 = -1;
    var3.y = var7;
    var7 = 10;
    var3.size = var7;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9.color = var12;
    var3.icon = var9;
    var9 = {
        'height': 20,
        'width': 20,
        'aspectRatio': 1,
        'position': 'relative',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'height': 6.5,
        'width': 6.5,
        'backgroundColor': null,
        'borderRadius': null,
        'right': 0.1,
        'top': 0.7
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_NOTIFICATION;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9.borderRadius = var10;
    var3.dot = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.color;
        var0 = var0.isBadged;
        var3 = _closure1_slot4;
        var2 = _closure1_slot8;
        var1 = {};
        var1.color = var4;
        var1.showRedDot = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/icons/SettingsOverviewIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5421, 13425, 1297, 671, 5333, 2]);