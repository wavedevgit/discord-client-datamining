// modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModalHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot1 = var7;
    var3 = var3.jsxs;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'flexDirection': 'row'
    };
    var3.pageMarkerContainer = var9;
    var9 = {
        'width': 14,
        'height': 14,
        'borderRadius': 7,
        'borderWidth': 1
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var3.circleIcon = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': '50%',
        'bottom': '50%',
        'height': 1
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9.backgroundColor = var12;
    var3.horizontalLine = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_BRAND;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.borderColor = var10;
    var3.filledCircle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot3 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var10 = var1.numMarkers;
        var1 = var1.currentPage;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot3;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var _closure2_slot1 = var7;
        var1 = global;
        var1 = var1.Array;
        var2 = var1.bind(var3)(var10);
        var1 = var2.fill;
        var2 = var1.bind(var2)(var3);
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun80990: for (var _fun80990_ip = 0;;) switch (_fun80990_ip) {
                case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot0;
                    var2 = {};
                    var0 = _closure2_slot1;
                    var1 = var0.circleIcon;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var5 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var1 + 1;
                    var5 = var5 === var1;
                    if (!var5) {
                        _fun80990_ip = 61;
                        continue _fun80990
                    }
                case 51:
                    var6 = _closure2_slot1;
                    var5 = var6.filledCircle;
                case 61:
                    var0[1] = var5;
                    var2.style = var0;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
            }
        };
        var5 = var1.bind(var2)(var0);
        var2 = _closure1_slot2;
        var1 = _closure1_slot0;
        var0 = {};
        var8 = var7.pageMarkerContainer;
        var6 = new Array(2);
        var6[0] = var8;
        var8 = {};
        var9 = 20;
        var9 = var9 * var10;
        var8.width = var9;
        var6[1] = var8;
        var0.style = var6;
        var6 = _closure1_slot1;
        var4 = {};
        var7 = var7.horizontalLine;
        var4.style = var7;
        var6 = var6.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/mfa_modal_flow/TwoFASetupModalHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.PageMarker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);