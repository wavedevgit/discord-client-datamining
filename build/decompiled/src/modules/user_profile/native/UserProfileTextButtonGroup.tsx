// modules/user_profile/native/UserProfileTextButtonGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PROFILE_SIDE_PADDING;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 12
    };
    var3.container = var8;
    var8 = {};
    var8.flexGrow = var9;
    var3.buttonArea = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileTextButtonGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62072: for (var _fun62072_ip = 0;;) switch (_fun62072_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.primaryButton;
                var6 = var0.secondaryButton;
                var11 = var0.maxWidth;
                var8 = var0.style;
                var0 = _closure1_slot6;
                var5 = undefined;
                var7 = var0.bind(var5)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var0 = var3[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.bind(var5)();
                var9 = var0.width;
                var1 = null;
                var4 = var9;
                if (!(var1 != var11)) {
                    _fun62072_ip = 96;
                    continue _fun62072
                }
            case 77:
                var0 = global;
                var3 = var0.Math;
                var0 = var3.min;
                var4 = var0.bind(var3)(var9, var11);
            case 96:
                var0 = _closure1_slot3;
                var3 = 2;
                var0 = var3 * var0;
                var4 = var4 - var0;
                var0 = 12;
                var0 = var4 - var0;
                var15 = var0 / var3;
                if (!(var1 == var10)) {
                    _fun62072_ip = 138;
                    continue _fun62072
                }
            case 126:
                var3 = var1 == var6;
                var0 = null;
                if (var3) {
                    _fun62072_ip = 380;
                    continue _fun62072
                }
            case 138:
                if (!(var1 != var10)) {
                    _fun62072_ip = 336;
                    continue _fun62072
                }
            case 145:
                if (!(var1 != var6)) {
                    _fun62072_ip = 293;
                    continue _fun62072
                }
            case 152:
                var4 = _closure1_slot5;
                var3 = _closure1_slot2;
                var1 = {};
                var11 = var7.container;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var8;
                var1.style = var9;
                var12 = _closure1_slot4;
                var9 = {};
                var13 = var7.buttonArea;
                var11 = new Array(2);
                var11[0] = var13;
                var13 = {};
                var13.minWidth = var15;
                var11[1] = var13;
                var9.style = var11;
                var9.children = var10;
                var11 = var12.bind(var5)(var3, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = {};
                var14 = var7.buttonArea;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var14.minWidth = var15;
                var13[1] = var14;
                var11.style = var13;
                var11.children = var6;
                var11 = var12.bind(var5)(var3, var11);
                var9[1] = var11;
                var1.children = var9;
                var1 = var4.bind(var5)(var3, var1);
                _fun62072_ip = 334;
                continue _fun62072;
            case 293:
                var9 = _closure1_slot4;
                var4 = _closure1_slot2;
                var3 = {};
                var12 = var7.container;
                var11 = new Array(2);
                var11[0] = var12;
                var11[1] = var8;
                var3.style = var11;
                var3.children = var10;
                var1 = var9.bind(var5)(var4, var3);
            case 334:
                _fun62072_ip = 377;
                continue _fun62072;
            case 336:
                var4 = _closure1_slot4;
                var3 = _closure1_slot2;
                var2 = {};
                var9 = var7.container;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2.style = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 377:
                var0 = var1;
            case 380:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6920, 33, 1297, 1464, 2]);