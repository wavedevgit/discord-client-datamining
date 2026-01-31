// modules/client_themes/native/useThemedHeaderOptions.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = {};
    var3.headerBackground = var0;
    var3.contentStyle = var0;
    var _closure1_slot5 = var3;
    var3 = function() { // Original name: headerBackground, environment: var1
        var3 = _closure1_slot4;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {
            'absolute': true,
            'tall': true,
            'wide': true
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/native/useThemedHeaderOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useThemedHeaderOptions, environment: var1
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 3;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var4 = var2.bind(var3)();
        var _closure2_slot0 = var4;
        var2 = 4;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var5 = var2.top;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun107127: for (var _fun107127_ip = 0;;) switch (_fun107127_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun107127_ip = 19;
                        continue _fun107127
                    }
                case 13:
                    var0 = _closure1_slot5;
                    return var0;
                case 19:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 5;
                    var3 = var3[var0];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun107127_ip = 82;
                        continue _fun107127
                    }
                case 54:
                    var3 = {};
                    var4 = _closure1_slot6;
                    var3.headerBackground = var4;
                    var4 = _closure1_slot5;
                    var4 = var4.contentStyle;
                    var3.contentStyle = var4;
                    return var3;
                case 82:
                    var4 = _closure2_slot1;
                    var3 = 50;
                    var4 = var4 > var3;
                    var3 = 0;
                    if (!var4) {
                        _fun107127_ip = 101;
                        continue _fun107127
                    }
                case 98:
                    var3 = var0;
                case 101:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 6;
                    var0 = var6[var0];
                    var4 = var4.bind(var5)(var0);
                    var0 = var4.isIpadOS;
                    var0 = var0.bind(var4)();
                    var4 = 44;
                    if (!var0) {
                        _fun107127_ip = 140;
                        continue _fun107127
                    }
                case 137:
                    var4 = 46;
                case 140:
                    var0 = {};
                    var1 = _closure1_slot6;
                    var0.headerBackground = var1;
                    var1 = {};
                    var2 = _closure2_slot1;
                    var2 = -var2;
                    var3 = var2 + var3;
                    var2 = 56;
                    var2 = var2 - var4;
                    var2 = var3 + var2;
                    var1.marginTop = var2;
                    var0.contentStyle = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 8671, 8672, 1568, 478, 1309, 2]);