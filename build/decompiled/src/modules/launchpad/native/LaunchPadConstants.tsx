// modules/launchpad/native/LaunchPadConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun77091: for (var _fun77091_ip = 0;;) switch (_fun77091_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var7 = global;
            var4 = var7.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var4 = var1.Dimensions;
            var3 = var4.get;
            var1 = 'screen';
            var4 = var3.bind(var4)(var1);
            var1 = 1;
            var1 = var6[var1];
            var3 = var5.bind(var0)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = 24;
            if (var1) {
                _fun77091_ip = 174;
                continue _fun77091
            }
        case 102:
            var1 = 2;
            var1 = var6[var1];
            var8 = var5.bind(var0)(var1);
            var1 = var8.isIpadOS;
            var8 = var1.bind(var8)();
            var1 = 13;
            if (var8) {
                _fun77091_ip = 171;
                continue _fun77091
            }
        case 130:
            var9 = var7.Math;
            var8 = var9.min;
            var7 = var4.width;
            var4 = var4.height;
            var7 = var8.bind(var9)(var7, var4);
            var4 = 0.09;
            var1 = var4 * var7;
        case 171:
            var3 = var1;
        case 174:
            var1 = {};
            var4 = 'gesture-full';
            var1.GESTURE_FULL = var4;
            var4 = 'gesture-edge';
            var1.GESTURE_EDGE = var4;
            var4 = 'pull-tab';
            var1.PULL_TAB = var4;
            var4 = 'disabled';
            var1.DISABLED = var4;
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/launchpad/native/LaunchPadConstants.tsx';
            var4 = var5.bind(var6)(var4);
            var4 = {
                'damping': 20,
                'stiffness': 280,
                'mass': 0.5,
                'restSpeedThreshold': 0.001,
                'restDisplacementThreshold': 0.001
            };
            var2.LAUNCH_PAD_SPRING_CONFIG = var4;
            var4 = 96;
            var2.LAUNCH_PAD_PULL_TAB_HEIGHT = var4;
            var4 = 26;
            var2.LAUNCH_PAD_PULL_TAB_WIDTH = var4;
            var4 = 18;
            var2.LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET = var4;
            var4 = 13;
            var2.LAUNCH_PAD_PULL_TAB_BORDER_RADIUS = var4;
            var4 = 1.1;
            var2.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR = var4;
            var4 = 4.800000000000004;
            var2.LAUNCH_PAD_PULL_TAB_SCALE_OFFSET = var4;
            var4 = 32;
            var2.LAUNCH_PAD_PULL_TAB_POSITION_MARGIN = var4;
            var4 = 300.8;
            var2.LAUNCH_PAD_PULL_TAB_MAX_POSITION = var4;
            var4 = 150.4;
            var2.LAUNCH_PAD_PULL_TAB_INITIAL_POSITION = var4;
            var4 = 16;
            var2.LAUNCH_PAD_MARGIN = var4;
            var2.LAUNCH_PAD_PULL_TAB_HIT_SLOP = var4;
            var2.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE = var3;
            var2.LaunchPadTypes = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 1309, 2]);