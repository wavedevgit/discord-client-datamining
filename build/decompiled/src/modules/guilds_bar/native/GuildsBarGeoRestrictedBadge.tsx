// modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'bottom': 4294967293,
        'right': 4294967293,
        'height': 22,
        'width': 22,
        'borderColor': null,
        'backgroundColor': null,
        'borderWidth': 3,
        'borderRadius': 11,
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_WARNING_BACKGROUND;
    var9.backgroundColor = var12;
    var3.badgeImageContainer = var9;
    var9 = {
        'height': 16,
        'width': 16
    };
    var12 = 5;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.DARK_1_LIGHT_08;
    var9.opacity = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var9.tintColor = var10;
    var3.badgeImage = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.style;
        var0 = _closure1_slot4;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot3;
        var1 = _closure1_slot2;
        var0 = {};
        var8 = var6.badgeImageContainer;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var7;
        var0.style = var5;
        var5 = 'none';
        var0.pointerEvents = var5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 6;
        var4 = var9[var4];
        var5 = var8.bind(var3)(var4);
        var4 = {};
        var7 = 7;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var4.source = var7;
        var6 = var6.badgeImage;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4835, 4667, 10395, 2]);