// modules/launchpad/native/useLaunchPadType.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.LaunchPadTypes;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/useLaunchPadType.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun77221: for (var _fun77221_ip = 0;;) switch (_fun77221_ip) {
            case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var3 = var2[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.LaunchPadModeSetting;
                var3 = var5.useSetting;
                var3 = var3.bind(var5)();
                var5 = 2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.LaunchPadMode;
                var2 = var2.LAUNCH_PAD_DISABLED;
                if (!(var2 !== var3)) {
                    _fun77221_ip = 209;
                    continue _fun77221
                }
            case 72:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.LaunchPadMode;
                var2 = var2.LAUNCH_PAD_GESTURE_FULL_SCREEN;
                if (!(var2 !== var3)) {
                    _fun77221_ip = 197;
                    continue _fun77221
                }
            case 105:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.LaunchPadMode;
                var2 = var2.LAUNCH_PAD_GESTURE_RIGHT_EDGE;
                if (!(var2 !== var3)) {
                    _fun77221_ip = 185;
                    continue _fun77221
                }
            case 138:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.LaunchPadMode;
                var2 = var2.LAUNCH_PAD_PULL_TAB;
                if (!(var2 !== var3)) {
                    _fun77221_ip = 173;
                    continue _fun77221
                }
            case 171:
                return var1;
            case 173:
                var1 = _closure1_slot2;
                var1 = var1.PULL_TAB;
                return var1;
            case 185:
                var1 = _closure1_slot2;
                var1 = var1.GESTURE_EDGE;
                return var1;
            case 197:
                var1 = _closure1_slot2;
                var1 = var1.GESTURE_FULL;
                return var1;
            case 209:
                var0 = _closure1_slot2;
                var0 = var0.DISABLED;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9847, 1348, 1311, 2]);