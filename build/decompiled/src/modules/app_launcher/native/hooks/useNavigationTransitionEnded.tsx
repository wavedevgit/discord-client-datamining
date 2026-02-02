// modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useAppLauncherNavigation;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/hooks/useNavigationTransitionEnded.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var0 = false;
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var6 = undefined;
        var0 = 2;
        var5 = var3.bind(var6)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var3 = 1;
        var5 = var5[var3];
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var7 = var3.bind(var6)();
        var _closure2_slot1 = var7;
        var3 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 3;
        var2 = var8[var2];
        var3 = var3.bind(var6)(var2);
        var2 = var3.useRoute;
        var6 = var2.bind(var3)();
        var _closure2_slot2 = var6;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            var3 = _closure2_slot1;
            var2 = var3.addListener;
            var1 = 'transitionEnd';
            var0 = function() { // Environment: var0
                _fun107875: for (var _fun107875_ip = 0;;) switch (_fun107875_ip) {
                    case 0:
                        var2 = _closure2_slot1;
                        var1 = var2.getState;
                        var1 = var1.bind(var2)();
                        var2 = var1.routes;
                        var1 = var1.index;
                        var1 = var2[var1];
                        var2 = var1.key;
                        var1 = _closure2_slot2;
                        var1 = var1.key;
                        if (!(var2 === var1)) {
                            _fun107875_ip = 63;
                            continue _fun107875
                        }
                    case 50:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                    case 63:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1468, 1470, 2]);