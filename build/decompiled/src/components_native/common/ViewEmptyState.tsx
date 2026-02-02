// components_native/common/ViewEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Fonts;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot4 = var7;
    var6 = var6.jsxs;
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = 'center';
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginHorizontal': 36
    };
    var6.emptyContainer = var9;
    var9 = {
        'width': 170,
        'height': 130
    };
    var6.emptyImage = var9;
    var9 = {
        'marginTop': 4294967246,
        'alignItems': 'center'
    };
    var6.fixOpticalIllusion = var9;
    var9 = {};
    var10 = 5;
    var10 = var5[var10];
    var14 = var12.bind(var0)(var10);
    var13 = var3.DISPLAY_SEMIBOLD;
    var10 = 6;
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var12 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var10 = 18;
    var16 = var14.bind(var0)(var13, var12, var10);
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var10 = 'textAlign';
    var9[var10] = var11;
    var11 = 32;
    var10 = 'marginTop';
    var9[var10] = var11;
    var11 = 0.8;
    var10 = 'opacity';
    var9[var10] = var11;
    var6.emptyLabel = var9;
    var9 = {
        'fontFamily': null,
        'fontSize': 13,
        'marginTop': 8,
        'marginHorizontal': 10,
        'opacity': 0.6,
        'fontWeight': '400'
    };
    var3 = var3.PRIMARY_MEDIUM;
    var9.fontFamily = var3;
    var3 = 8;
    var6.emptyText = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/ViewEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60951: for (var _fun60951_ip = 0;;) switch (_fun60951_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.source;
                var16 = var0.label;
                var11 = var0.text;
                var5 = var0.style;
                var0 = _closure1_slot6;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var6 = var13.emptyContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var13.fixOpticalIllusion;
                var4.style = var6;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = 'contain';
                var6.resizeMode = var10;
                var6.source = var9;
                var9 = var13.emptyImage;
                var6.style = var9;
                var7 = var2.bind(var3)(var7, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var7 = null;
                var10 = var7 != var16;
                var9 = null;
                if (!var10) {
                    _fun60951_ip = 199;
                    continue _fun60951
                }
            case 137:
                var14 = _closure1_slot4;
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 7;
                var10 = var15[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.LegacyText;
                var10 = {};
                var15 = var13.emptyLabel;
                var10.style = var15;
                var15 = var16.toUpperCase;
                var15 = var15.bind(var16)();
                var10.children = var15;
                var9 = var14.bind(var3)(var12, var10);
            case 199:
                var6[1] = var9;
                var9 = var7 != var11;
                var7 = null;
                if (!var9) {
                    _fun60951_ip = 282;
                    continue _fun60951
                }
            case 212:
                var10 = _closure1_slot4;
                var9 = _closure1_slot0;
                var12 = _closure1_slot1;
                var8 = 7;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var14 = var13.emptyLabel;
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var13.emptyText;
                var12[1] = var13;
                var8.style = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 282:
                var6[2] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 4647, 671, 4841, 2]);