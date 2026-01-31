// modules/saved_messages/native/ForLaterModal.tsx
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
        'backgroundColor': null,
        'borderBottomWidth': 0,
        'shadowColor': 'transparent',
        'height': '100%'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.modal = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingTop = var9;
    var3.headerContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun75863: for (var _fun75863_ip = 0;;) switch (_fun75863_ip) {
            case 0:
                var0 = _closure1_slot6;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.modal;
                var0.style = var4;
                var6 = _closure1_slot4;
                var4 = {};
                var7 = var7.headerContainer;
                var4.style = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 5;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var11 = var7.Header;
                var7 = {};
                var8 = 6;
                var12 = var10[var8];
                var12 = var9.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["2pAkDA"];
                var8 = var12.bind(var13)(var8);
                var7.title = var8;
                var8 = function() {
                    var3 = _closure1_slot4;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 7;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.GenericHeaderTitle;
                    var0 = {};
                    var4 = 6;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4["2pAkDA"];
                    var4 = var5.bind(var6)(var4);
                    var0.title = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.headerTitle = var8;
                var8 = 'center';
                var7.headerTitleAlign = var8;
                var8 = 8;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.isIOS;
                var9 = var8.bind(var9)();
                var8 = undefined;
                if (!var9) {
                    _fun75863_ip = 180;
                    continue _fun75863
                }
            case 178:
                var8 = 0;
            case 180:
                var7.headerStatusBarHeight = var8;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 9;
                var8 = var10[var8];
                var14 = var9.bind(var3)(var8);
                var13 = var14.getHeaderCloseButton;
                var9 = _closure1_slot1;
                var8 = 10;
                var12 = var10[var8];
                var12 = var9.bind(var3)(var12);
                var12 = var12.pop;
                var12 = var13.bind(var14)(var12);
                var7.headerLeft = var12;
                var7 = var6.bind(var3)(var11, var7);
                var4.children = var7;
                var6 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var5 = 11;
                var5 = var10[var5];
                var6 = var9.bind(var3)(var5);
                var5 = {};
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.pop;
                var5.onClose = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4672, 1234, 8848, 478, 4668, 4525, 9592, 2]);