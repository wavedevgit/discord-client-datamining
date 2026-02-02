// modules/launchpad/native/LaunchPadGestureCoordinator.tsx
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
    var3 = var3.LaunchPadTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPadGestureCoordinator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89198: for (var _fun89198_ip = 0;;) switch (_fun89198_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.children;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 3;
                var2 = var10[var2];
                var4 = undefined;
                var6 = var8.bind(var4)(var2);
                var3 = var6.useConfig;
                var2 = {};
                var7 = 'LaunchPadGestureCoordinator';
                var2.location = var7;
                var9 = var3.bind(var6)(var2);
                var _closure2_slot0 = var9;
                var2 = 4;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var7 = var2.bind(var4)();
                var _closure2_slot1 = var7;
                var6 = _closure1_slot3;
                var3 = var6.useContext;
                var2 = 5;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var8 = var3.bind(var6)(var2);
                var _closure2_slot2 = var8;
                var3 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var0 = function() { // Environment: var0
                    _fun89199: for (var _fun89199_ip = 0;;) switch (_fun89199_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var6 = null;
                            var1 = var6 == var0;
                            var0 = null;
                            if (var1) {
                                _fun89199_ip = 172;
                                continue _fun89199
                            }
                        case 21:
                            var4 = _closure2_slot1;
                            var1 = _closure1_slot4;
                            var1 = var1.DISABLED;
                            var0 = null;
                            if (!(var4 !== var1)) {
                                _fun89199_ip = 172;
                                continue _fun89199
                            }
                        case 47:
                            var4 = _closure2_slot1;
                            var1 = _closure1_slot4;
                            var1 = var1.PULL_TAB;
                            var0 = null;
                            if (!(var4 !== var1)) {
                                _fun89199_ip = 172;
                                continue _fun89199
                            }
                        case 67:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var1 = var5[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = var4.isIOS;
                            var4 = var1.bind(var4)();
                            var1 = null;
                            if (!var4) {
                                _fun89199_ip = 169;
                                continue _fun89199
                            }
                        case 104:
                            var4 = _closure2_slot0;
                            var4 = var4.enabled;
                            var1 = null;
                            if (!var4) {
                                _fun89199_ip = 169;
                                continue _fun89199
                            }
                        case 118:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 7;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var4 = var3.Gesture;
                            var3 = var4.Native;
                            var4 = var3.bind(var4)();
                            var3 = var4.requireExternalGestureToFail;
                            var2 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2);
                        case 169:
                            var0 = var1;
                        case 172:
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var0, var2);
                var2 = null;
                var0 = var5;
                if (!(var2 != var6)) {
                    _fun89198_ip = 203;
                    continue _fun89198
                }
            case 156:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GestureDetector;
                var1 = {};
                var1.gesture = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 203:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9754, 33, 11555, 9755, 11556, 478, 4926, 2]);