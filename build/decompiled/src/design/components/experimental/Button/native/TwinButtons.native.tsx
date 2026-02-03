// design/components/experimental/Button/native/TwinButtons.native.tsx
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
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun57494: for (var _fun57494_ip = 0;;) switch (_fun57494_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {};
                var3 = 'row';
                if (!var2) {
                    _fun57494_ip = 18;
                    continue _fun57494
                }
            case 14:
                var3 = 'column';
            case 18:
                var1.flexDirection = var3;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.spacing;
                if (var2) {
                    _fun57494_ip = 63;
                    continue _fun57494
                }
            case 55:
                var2 = var3.PX_12;
                _fun57494_ip = 69;
                continue _fun57494;
            case 63:
                var2 = var3.PX_8;
            case 69:
                var1.gap = var2;
                var0.container = var1;
                var1 = {};
                var2 = 1;
                var1.flex = var2;
                var0.button = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/experimental/Button/native/TwinButtons.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.children;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.useFontScale;
        var2 = var0.bind(var1)();
        var1 = _closure1_slot6;
        var0 = 1.2;
        var0 = var2 > var0;
        var6 = var1.bind(var3)(var0);
        var _closure2_slot0 = var6;
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = var6.container;
        var0.style = var6;
        var5 = _closure1_slot3;
        var6 = var5.Children;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            _fun57496: for (var _fun57496_ip = 0;;) switch (_fun57496_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot3;
                    var0 = var2.isValidElement;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    if (!var2) {
                        _fun57496_ip = 102;
                        continue _fun57496
                    }
                case 26:
                    var3 = var5.type;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.Button;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun57496_ip = 102;
                        continue _fun57496
                    }
                case 65:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.button;
                    var1.style = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 102:
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var7, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.TwinButtons = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4081, 4075, 2]);