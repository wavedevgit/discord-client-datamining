// modules/app_icons/native/AppIcon.tsx
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
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getIconById;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'hidden';
    var8.overflow = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var9;
    var3.container = var8;
    var8 = {
        'resizeMode': 'contain',
        'height': '100%',
        'width': '100%'
    };
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_icons/native/AppIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85870: for (var _fun85870_ip = 0;;) switch (_fun85870_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.id;
                var11 = var0.size;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun85870_ip = 22;
                    continue _fun85870
                }
            case 19:
                var11 = 56;
            case 22:
                var8 = var0.style;
                var0 = _closure1_slot7;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var0 = _closure1_slot5;
                var6 = var0.bind(var3)(var1);
                var1 = _closure1_slot0;
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                var10 = 1;
                if (!var0) {
                    _fun85870_ip = 106;
                    continue _fun85870
                }
            case 104:
                var10 = 0;
            case 106:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var9 = var7.container;
                var5 = new Array(3);
                var5[0] = var9;
                var9 = {};
                var9.width = var11;
                var9.height = var11;
                var9.borderWidth = var10;
                var5[1] = var9;
                var5[2] = var8;
                var0.style = var5;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var7.image;
                var4.style = var7;
                var6 = var6.iconSource;
                var4.source = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7655, 33, 1297, 671, 3246, 3206, 2]);