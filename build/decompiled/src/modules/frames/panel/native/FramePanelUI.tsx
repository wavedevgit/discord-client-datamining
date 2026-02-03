// modules/frames/panel/native/FramePanelUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun110468: for (var _fun110468_ip = 0;;) switch (_fun110468_ip) {
            case 0:
                var4 = _closure1_slot4;
                var1 = _closure1_slot1;
                var3 = 'pip';
                var0 = arg1;
                if (!(var3 !== var0)) {
                    _fun110468_ip = 35;
                    continue _fun110468
                }
            case 22:
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                _fun110468_ip = 46;
                continue _fun110468;
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
    var _closure1_slot5 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
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
            var3 = _closure1_slot4;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 4;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1 = new Array(0);
        var4 = var4.bind(var3)(var2, var1);
        var _closure2_slot0 = var4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var1 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 5;
            var0 = var6[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.BaseActivityPanelUI;
            var0 = {};
            var5 = _closure1_slot5;
            var0.renderActivityOrPIP = var5;
            var5 = _closure1_slot1;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var0.context = var4;
            var4 = _closure2_slot0;
            var0.renderActivityPanelSystemUIManager = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 14227, 14231, 14234, 14205, 14225, 2]);