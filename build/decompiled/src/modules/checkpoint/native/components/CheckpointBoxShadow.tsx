// modules/checkpoint/native/components/CheckpointBoxShadow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var8 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.padding = var10;
    var8.borderWidth = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointBoxShadow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CheckpointBoxShadow, environment: var1
        _fun86514: for (var _fun86514_ip = 0;;) switch (_fun86514_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.selected;
                var8 = var1.children;
                var10 = var1.style;
                var1 = _closure1_slot7;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var6 = var4.useState;
                var1 = 0;
                var2 = {
                    'width': 0,
                    'height': 0
                };
                var6 = var6.bind(var4)(var2);
                var2 = _closure1_slot2;
                var14 = 2;
                var2 = var2.bind(var3)(var6, var14);
                var7 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot0 = var1;
                var6 = var4.useContext;
                var2 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 6;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.CheckpointColorContext;
                var1 = var6.bind(var4)(var1);
                var16 = var1.primaryColor;
                var6 = var1.secondaryColor;
                var1 = 7;
                var12 = var11[var1];
                var15 = var2.bind(var3)(var12);
                var12 = var15.useToken;
                var16 = var12.bind(var15)(var16);
                var1 = var11[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useToken;
                var15 = var1.bind(var2)(var6);
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.layout;
                    var0 = var1.height;
                    var3 = var1.width;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1.width = var3;
                    var1.height = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var11 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = {};
                var6 = 'relative';
                var4.position = var6;
                var0.style = var4;
                var6 = _closure1_slot5;
                var4 = {};
                var17 = {
                    'position': 'absolute',
                    'backgroundColor': 'black',
                    'transform': null,
                    'borderColor': null,
                    'borderBottomWidth': 4,
                    'borderRightWidth': 4
                };
                var12 = 'black';
                var19 = {};
                var20 = 3;
                var19.translateY = var20;
                var18 = new Array(2);
                var18[0] = var19;
                var19 = {};
                var19.translateX = var20;
                var18[1] = var19;
                var17.transform = var18;
                var18 = var16;
                if (!var13) {
                    _fun86514_ip = 320;
                    continue _fun86514
                }
            case 291:
                var19 = global;
                var19 = var19.HermesInternal;
                var21 = var19.concat;
                var20 = '';
                var19 = '90';
                var18 = var21.bind(var20)(var16, var19);
            case 320:
                var17.borderColor = var18;
                var18 = var7.height;
                var17.height = var18;
                var7 = var7.width;
                var17.width = var7;
                var7 = new Array(1);
                var7[0] = var17;
                var4.style = var7;
                var6 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var5.onLayout = var11;
                var11 = var9.container;
                var9 = new Array(3);
                var9[0] = var11;
                var11 = {};
                if (!var13) {
                    _fun86514_ip = 406;
                    continue _fun86514
                }
            case 403:
                var15 = var16;
            case 406:
                var11.borderColor = var15;
                var11.borderWidth = var14;
                if (!var13) {
                    _fun86514_ip = 448;
                    continue _fun86514
                }
            case 419:
                var13 = global;
                var13 = var13.HermesInternal;
                var15 = var13.concat;
                var14 = '';
                var13 = '40';
                var12 = var15.bind(var14)(var16, var13);
            case 448:
                var11.backgroundColor = var12;
                var9[1] = var11;
                var9[2] = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 11136, 3110, 2]);