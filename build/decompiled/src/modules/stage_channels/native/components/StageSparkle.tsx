// modules/stage_channels/native/components/StageSparkle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: StageSparkleInner, environment: var1
        _fun51856: for (var _fun51856_ip = 0;;) switch (_fun51856_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var12 = var0.IconComponent;
                var13 = var0.icon;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun51856_ip = 47;
                    continue _fun51856
                }
            case 24:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var13 = var1.bind(var3)(var0);
            case 47:
                var0 = _closure1_slot6;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var8.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot3;
                var4 = {};
                var9 = var8.iconContainer;
                var4.style = var9;
                var9 = null;
                if (!(var9 == var12)) {
                    _fun51856_ip = 163;
                    continue _fun51856
                }
            case 115:
                var11 = _closure1_slot4;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 6;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.source = var13;
                var13 = var8.iconStyle;
                var9.style = var13;
                var9 = var11.bind(var3)(var10, var9);
                _fun51856_ip = 218;
                continue _fun51856;
            case 163:
                var11 = _closure1_slot4;
                var10 = {};
                var13 = 'lg';
                var10.size = var13;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 4;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.colors;
                var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
                var10.color = var13;
                var9 = var11.bind(var3)(var12, var10);
            case 218:
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 6;
                var5 = var10[var5];
                var6 = var9.bind(var3)(var5);
                var5 = {};
                var8 = var8.sparkles;
                var5.style = var8;
                var8 = 7;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 88,
        'height': 88,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': 28,
        'height': 56,
        'width': 56,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.iconContainer = var8;
    var8 = {
        'tintColor': null,
        'height': 32,
        'width': 32
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.tintColor = var9;
    var3.iconStyle = var8;
    var8 = {
        'position': 'absolute',
        'top': 0
    };
    var3.sparkles = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageSparkle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: StageSparkle, environment: var1
        _fun51857: for (var _fun51857_ip = 0;;) switch (_fun51857_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.theme;
                var0 = null;
                var2 = Object.create(var0);
                var1 = 0;
                var2.theme = var1;
                var11 = {};
                var10 = var3;
                var9 = var2;
                var8 = copyDataProperties(var11, var10, var9);
                if (!(var0 == var6)) {
                    _fun51857_ip = 70;
                    continue _fun51857
                }
            case 37:
                var3 = _closure1_slot4;
                var2 = _closure1_slot7;
                var1 = {};
                var11 = var1;
                var10 = var8;
                var0 = copyDataProperties(var11, var10);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                _fun51857_ip = 148;
                continue _fun51857;
            case 70:
                var4 = _closure1_slot4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var1.theme = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot7;
                var5 = {};
                var11 = var5;
                var10 = var8;
                var8 = copyDataProperties(var11, var10);
                var5 = var7.bind(var3)(var6, var5);
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 148:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5889, 4666, 5890, 3118, 2]);