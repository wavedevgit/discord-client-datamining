// modules/main_tabs_v2/native/tabs/settings/Settings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
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
    var _closure1_slot2 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.containerOuter = var8;
    var8 = {};
    var9 = 4;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var8.borderRadius = var12;
    var8.flex = var11;
    var3.containerOuterTablet = var8;
    var8 = {};
    var8.flex = var11;
    var3.container = var8;
    var8 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'flex': 1
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.md;
    var8.borderRadius = var9;
    var3.containerTablet = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/settings/Settings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun104408: for (var _fun104408_ip = 0;;) switch (_fun104408_ip) {
            case 0:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 5;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.top;
                var _closure2_slot0 = var10;
                var1 = 6;
                var1 = var9[var1];
                var1 = var5.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var _closure2_slot1 = var7;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)();
                var _closure2_slot2 = var8;
                var4 = _closure1_slot2;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var10;
                var0 = function() { // Environment: var0
                    _fun104409: for (var _fun104409_ip = 0;;) switch (_fun104409_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            if (var0) {
                                _fun104409_ip = 22;
                                continue _fun104409
                            }
                        case 14:
                            var0 = var1.containerOuter;
                            _fun104409_ip = 54;
                            continue _fun104409;
                        case 22:
                            var2 = var1.containerOuterTablet;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var3 = _closure2_slot0;
                            var2.paddingTop = var3;
                            var1[1] = var2;
                            var0 = var1;
                        case 54:
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var0.style = var4;
                var4 = 7;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                if (var7) {
                    _fun104408_ip = 153;
                    continue _fun104408
                }
            case 146:
                var7 = var8.container;
                _fun104408_ip = 159;
                continue _fun104408;
            case 153:
                var7 = var8.containerTablet;
            case 159:
                var4.style = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 8;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 7685, 3720, 13609, 2]);