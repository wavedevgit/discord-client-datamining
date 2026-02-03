// modules/frames/panel/native/FramePanelPIPView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FrameLayoutModes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun110413: for (var _fun110413_ip = 0;;) switch (_fun110413_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.transitionState;
                var _closure2_slot0 = var4;
                var5 = var1.transitionCleanUp;
                var _closure2_slot1 = var5;
                var7 = undefined;
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var7;
                var _closure2_slot5 = var7;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var9 = var6.bind(var7)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getConnectedFrame;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var9)(var6, var3);
                var _closure2_slot2 = var8;
                var3 = null;
                var6 = var3 == var8;
                var3 = undefined;
                if (var6) {
                    _fun110413_ip = 112;
                    continue _fun110413
                }
            case 107:
                var3 = var8.applicationId;
            case 112:
                _closure2_slot3 = var3;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = var9[var2];
                var11 = var3.bind(var7)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    _fun110415: for (var _fun110415_ip = 0;;) switch (_fun110415_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun110415_ip = 40;
                                continue _fun110415
                            }
                        case 18:
                            var3 = _closure1_slot4;
                            var2 = var3.getPipOrientationLockStateForApp;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var6, var2);
                _closure2_slot4 = var6;
                var2 = 6;
                var2 = var9[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.useBaseActivityPanelPIPView;
                var2 = var2.bind(var3)();
                var7 = var2.landscapeSafeAreasConfig;
                _closure2_slot5 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.BaseActivityPanelPIPView;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.transitionState = var4;
                    var4 = _closure2_slot1;
                    var0.transitionCleanUp = var4;
                    var4 = _closure2_slot4;
                    var0.pipOrientationLockState = var4;
                    var5 = _closure2_slot2;
                    var4 = null;
                    var4 = var4 != var5;
                    var0.hasActivity = var4;
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var4 = var8[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.context = var4;
                    var4 = 8;
                    var4 = var8[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.PIP;
                    var4.layoutMode = var8;
                    var7 = _closure1_slot6;
                    var4.portraitSafeAreasConfig = var7;
                    var6 = _closure2_slot5;
                    var4.landscapeSafeAreasConfig = var6;
                    var4 = var3.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/FramePanelPIPView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7911, 7912, 14196, 33, 566, 14195, 14214, 14217, 2]);