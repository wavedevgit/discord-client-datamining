// modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx
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
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'padding': 16
    };
    var3.row = var9;
    var9 = {};
    var9.flex = var10;
    var3.rowInner = var9;
    var9 = {
        'width': 40,
        'height': 40,
        'borderRadius': null,
        'overflow': 'hidden',
        'marginRight': 16
    };
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var10 = 5;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.DARK_PRIMARY_500_LIGHT_PRIMARY_230;
    var9.backgroundColor = var11;
    var3.placeholderAvatar = var9;
    var9 = {
        'height': 15,
        'borderRadius': 5
    };
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_500_LIGHT_PRIMARY_230;
    var9.backgroundColor = var10;
    var3.placeholderText = var9;
    var9 = {
        'width': '100%',
        'marginTop': 10
    };
    var3.placeholderBody = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var0 = _closure1_slot5;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var _closure2_slot0 = var11;
        var8 = global;
        var5 = var8.Math;
        var2 = var5.floor;
        var1 = var8.Math;
        var0 = var1.random;
        var0 = var0.bind(var1)();
        var1 = 2;
        var0 = var1 * var0;
        var0 = var2.bind(var5)(var0);
        var10 = var0 + var1;
        var5 = var8.Math;
        var2 = var5.floor;
        var1 = var8.Math;
        var0 = var1.random;
        var0 = var0.bind(var1)();
        var1 = 10;
        var0 = var1 * var0;
        var0 = var2.bind(var5)(var0);
        var _closure2_slot1 = var0;
        var5 = var8.Math;
        var2 = var5.floor;
        var6 = var8.Math;
        var0 = var6.random;
        var6 = var0.bind(var6)();
        var0 = 50;
        var0 = var0 * var6;
        var0 = var2.bind(var5)(var0);
        var16 = var0 + var1;
        var2 = _closure1_slot4;
        var1 = _closure1_slot2;
        var0 = {};
        var5 = var11.row;
        var0.style = var5;
        var9 = _closure1_slot3;
        var4 = {};
        var5 = var11.placeholderAvatar;
        var4.style = var5;
        var5 = var9.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var11.rowInner;
        var5.style = var6;
        var6 = {};
        var12 = var11.placeholderText;
        var11 = new Array(2);
        var11[0] = var12;
        var12 = {};
        var13 = var8.HermesInternal;
        var15 = var13.concat;
        var14 = '';
        var13 = '%';
        var13 = var15.bind(var14)(var16, var13);
        var12.width = var13;
        var11[1] = var12;
        var6.style = var11;
        var9 = var9.bind(var3)(var1, var6);
        var6 = new Array(2);
        var6[0] = var9;
        var8 = var8.Array;
        var9 = var8.prototype;
        var9 = Object.create(var9, {
            constructor: {
                value: var8
            }
        });
        var19 = var9;
        var18 = var10;
        var8 = new var19[var8](var18, var17);
        var9 = var8 instanceof Object ? var8 : var9;
        var8 = var9.fill;
        var9 = var8.bind(var9)(var3);
        var8 = var9.map;
        var7 = function(arg0, arg1) { // Environment: var7
            var4 = arg1;
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = _closure2_slot0;
            var8 = var6.placeholderText;
            var5 = new Array(3);
            var5[0] = var8;
            var6 = var6.placeholderBody;
            var5[1] = var6;
            var6 = {};
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var0 = 6;
            var8 = var8[var0];
            var0 = undefined;
            var8 = var9.bind(var0)(var8);
            var7 = _closure2_slot1;
            var7 = var7 + var4;
            var10 = var8.bind(var0)(var7);
            var7 = global;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var8 = '';
            var7 = '%';
            var7 = var9.bind(var8)(var10, var7);
            var6.width = var7;
            var5[2] = var6;
            var1.style = var5;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var7 = var8.bind(var9)(var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4874, 8992, 2]);