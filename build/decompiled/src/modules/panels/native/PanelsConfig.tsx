// modules/panels/native/PanelsConfig.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function isTimingConfig_PanelsConfigTsx1(obj){return obj!=null&&obj.duration!=null;}';
    var1.code = var3;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        var0 = function(arg0) { // Original name: isTimingConfig, environment: var0
            _fun101025: for (var _fun101025_ip = 0;;) switch (_fun101025_ip) {
                case 0:
                    var1 = arg0;
                    var2 = null;
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun101025_ip = 21;
                        continue _fun101025
                    }
                case 12:
                    var1 = var1.duration;
                    var0 = var2 != var1;
                case 21:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14033676769786.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var6 = var1.bind(var0)();
    var3 = {
        'mass': 1,
        'stiffness': 250,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var7 = 1;
    var5 = 250;
    var10 = {};
    var1 = 30;
    var10.damping = var1;
    var19 = var10;
    var18 = var3;
    var1 = copyDataProperties(var19, var18);
    var1 = {};
    var4 = 20;
    var1.damping = var4;
    var19 = var1;
    var18 = var3;
    var3 = copyDataProperties(var19, var18);
    var13 = {};
    var13.duration = var5;
    var15 = 0;
    var3 = var9[var15];
    var3 = var8.bind(var0)(var3);
    var3 = var3.STANDARD_EASING;
    var13.easing = var3;
    var12 = {};
    var4 = 200;
    var12.duration = var4;
    var3 = var9[var15];
    var3 = var8.bind(var0)(var3);
    var3 = var3.STANDARD_EASING;
    var12.easing = var3;
    var3 = {};
    var3.swipeSidePanelOpen = var10;
    var3.swipeSidePanelClose = var1;
    var3.nonSwipeSidePanelOpen = var13;
    var3.nonSwipeSidePanelClose = var12;
    var11 = 8;
    var3.touchSlopForPanGesture = var11;
    var10 = 240;
    var3.minFlingVelocityX = var10;
    var1 = {};
    var14 = {};
    var14.duration = var5;
    var16 = var9[var15];
    var16 = var8.bind(var0)(var16);
    var16 = var16.DECELERATED_EASING;
    var14.easing = var16;
    var1.swipeSidePanelOpen = var14;
    var14 = {};
    var14.duration = var4;
    var15 = var9[var15];
    var15 = var8.bind(var0)(var15);
    var15 = var15.DECELERATED_EASING;
    var14.easing = var15;
    var1.swipeSidePanelClose = var14;
    var1.nonSwipeSidePanelOpen = var13;
    var1.nonSwipeSidePanelClose = var12;
    var1.touchSlopForPanGesture = var11;
    var1.minFlingVelocityX = var10;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/panels/native/PanelsConfig.tsx';
    var7 = var8.bind(var9)(var7);
    var2.isTimingConfig = var6;
    var2.SIDE_PANEL_OPEN_DURATION_MS = var5;
    var2.SIDE_PANEL_CLOSE_DURATION_MS = var4;
    var2.DEFAULT_PANELS_ANIMATION_CONFIG = var3;
    var2.ANDROID_PANELS_ANIMATION_CONFIG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4840, 2]);