// modules/frames/panel/native/FramePanelUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun111125: for (var _fun111125_ip = 0;;) switch (_fun111125_ip) {
            case 0:
                var4 = _closure1_slot4;
                var1 = _closure1_slot1;
                var3 = 'pip';
                var0 = arg1;
                if (!(var3 !== var0)) {
                    _fun111125_ip = 35;
                    continue _fun111125
                }
            case 22:
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                _fun111125_ip = 46;
                continue _fun111125;
            case 35:
                var3 = _closure1_slot2;
                var2 = 2;
                var0 = var3[var2];
            case 46:
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg2;
                var1.transitionState = var0;
                var0 = arg3;
                var1.transitionCleanUp = var0;
                var0 = arg0;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = 4;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/FramePanelUI.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot3;
        var4 = var3.useCallback;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot5;
            return var0;
        };
        var1 = new Array(0);
        var4 = var4.bind(var3)(var2, var1);
        var6 = _closure1_slot4;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 5;
        var1 = var9[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var2 = var1.BaseActivityPanelUI;
        var1 = {};
        var8 = _closure1_slot6;
        var1.renderActivityOrPIP = var8;
        var8 = _closure1_slot1;
        var7 = 6;
        var7 = var9[var7];
        var7 = var8.bind(var5)(var7);
        var1.context = var7;
        var1.renderActivityPanelSystemUIManager = var4;
        var1 = var6.bind(var5)(var2, var1);
        var _closure2_slot0 = var1;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = _closure2_slot0;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 14288, 14292, 14297, 14266, 14286, 2]);