// modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.radii;
    var3 = var3.sm;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        var2 = arg0;
        var3 = arg1;
        var0 = {};
        var1 = {};
        var1.width = var2;
        var1.height = var2;
        var1.borderRadius = var3;
        var0.appIcon = var1;
        var1 = {
            'borderWidth': 1,
            'borderColor': null,
            'overflow': 'hidden'
        };
        var2 = 1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 2;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.colors;
        var4 = var4.BORDER_SUBTLE;
        var1.borderColor = var4;
        var2 = var3 + var2;
        var1.borderRadius = var2;
        var0.entityWrapper = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83061: for (var _fun83061_ip = 0;;) switch (_fun83061_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.iconSource;
                var9 = var0.wrapperStyle;
                var8 = var0.iconStyle;
                var2 = var0.iconSize;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun83061_ip = 36;
                    continue _fun83061
                }
            case 33:
                var2 = 32;
            case 36:
                var1 = var0.iconBorderRadius;
                if (!(var1 === var3)) {
                    _fun83061_ip = 53;
                    continue _fun83061
                }
            case 46:
                var1 = _closure1_slot4;
            case 53:
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)(var2, var1);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var10 = var7.entityWrapper;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var0.style = var5;
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 4;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var9 = var7.appIcon;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.style = var7;
                var4.source = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 671, 1297, 4704, 2]);