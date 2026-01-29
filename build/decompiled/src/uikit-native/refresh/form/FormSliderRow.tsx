// uikit-native/refresh/form/FormSliderRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.labels = var8;
    var8 = {
        'marginStart': 4294967292,
        'marginTop': 8
    };
    var3.slider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormSliderRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormSliderRow, environment: var1
        _fun48027: for (var _fun48027_ip = 0;;) switch (_fun48027_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.label;
                var13 = var2.trailing;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.label = var0;
                var1.trailing = var0;
                var18 = {};
                var17 = var2;
                var16 = var1;
                var10 = copyDataProperties(var18, var17, var16);
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var1.bind(var2)(var0);
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot6;
                if (var0) {
                    _fun48027_ip = 207;
                    continue _fun48027
                }
            case 103:
                var1 = _closure1_slot7;
                var0 = {};
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 8;
                var2 = var11[var2];
                var5 = var7.bind(var4)(var2);
                var2 = {};
                var2.label = var15;
                var2.trailing = var13;
                var5 = var8.bind(var4)(var5, var2);
                var2 = new Array(2);
                var2[0] = var5;
                var5 = 7;
                var5 = var11[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var18 = var5;
                var17 = var10;
                var11 = copyDataProperties(var18, var17);
                var5 = var8.bind(var4)(var7, var5);
                var2[1] = var5;
                var0.children = var2;
                var0 = var3.bind(var4)(var1, var0);
                _fun48027_ip = 389;
                continue _fun48027;
            case 207:
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 5;
                var1 = var11[var1];
                var1 = var14.bind(var4)(var1);
                var2 = var1.Card;
                var1 = {};
                var7 = _closure1_slot4;
                var5 = {};
                var8 = var9.labels;
                var5.style = var8;
                var8 = _closure1_slot5;
                var12 = 6;
                var12 = var11[var12];
                var12 = var14.bind(var4)(var12);
                var14 = var12.Text;
                var12 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var12.children = var15;
                var14 = var8.bind(var4)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var5.children = var12;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot1;
                var6 = 7;
                var6 = var11[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var18 = var6;
                var17 = var10;
                var10 = copyDataProperties(var18, var17);
                var10 = var9.slider;
                var9 = 'style';
                var6[var9] = var10;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 389:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4853, 4856, 3895, 5384, 4847, 2]);