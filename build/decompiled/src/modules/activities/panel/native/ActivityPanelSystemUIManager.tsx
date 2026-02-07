// modules/activities/panel/native/ActivityPanelSystemUIManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun111029: for (var _fun111029_ip = 0;;) switch (_fun111029_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.mode;
                var11 = var0.isWindowLandscape;
                var0 = _closure1_slot4;
                var0 = var0.PANEL;
                var9 = var7 === var0;
                var0 = _closure1_slot4;
                var4 = var0.PIP;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.isIOS;
                var0 = var0.bind(var1)();
                var0 = !var0;
                var8 = !var0;
                if (var0) {
                    _fun111029_ip = 85;
                    continue _fun111029
                }
            case 82:
                var8 = var9;
            case 85:
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = null;
                if (!(var7 !== var4)) {
                    _fun111029_ip = 161;
                    continue _fun111029
                }
            case 101:
                var10 = _closure1_slot5;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 5;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var11 = !var11;
                if (var11) {
                    _fun111029_ip = 136;
                    continue _fun111029
                }
            case 133:
                var11 = !var9;
            case 136:
                var11 = !var11;
                var4.hidden = var11;
                var11 = 'light-content';
                var4.barStyle = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 161:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 6;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                if (!var9) {
                    _fun111029_ip = 201;
                    continue _fun111029
                }
            case 198:
                var9 = !var8;
            case 201:
                var5.prefersHidden = var9;
                var5.prefersDeferringSystemGestures = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var8 = var4.Fragment;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var3 = function() { // Environment: var3
        var4 = _closure1_slot3;
        var2 = var4.useContext;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var1 = var2.bind(var4)(var1);
        var5 = var1.mode;
        var4 = var1.wrapperDimensions;
        var2 = _closure1_slot5;
        var1 = _closure1_slot8;
        var0 = {};
        var0.mode = var5;
        var4 = var4.isWindowLandscape;
        var0.isWindowLandscape = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelSystemUIManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.BaseActivityPanelSystemUIManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7985, 33, 14273, 478, 7961, 7963, 2]);