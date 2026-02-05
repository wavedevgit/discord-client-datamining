// modules/user_settings/native/defs/SyncReducedMotionWithDeviceSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["St+DJK"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.ACCESSIBILITY;
    var1.parent = var8;
    var8 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot2;
            var1 = var0.rawPrefersReducedMotion;
            var0 = 'auto';
            var0 = var0 === var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useValue = var8;
    var7 = function arg0() {
        _fun85459: for (var _fun85459_ip = 0;;) switch (_fun85459_ip) {
            case 0:
                var1 = _closure1_slot2;
                var4 = var1.systemPrefersReducedMotion;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPrefersReducedMotion;
                var1 = 'auto';
                var5 = arg0;
                if (var5) {
                    _fun85459_ip = 54;
                    continue _fun85459
                }
            case 51:
                var1 = var4;
            case 54:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onValueChange = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SyncReducedMotionWithDeviceSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 7028, 566, 10952, 9017, 1234, 2]);