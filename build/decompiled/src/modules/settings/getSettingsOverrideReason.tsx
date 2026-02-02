// modules/settings/getSettingsOverrideReason.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun84788: for (var _fun84788_ip = 0;;) switch (_fun84788_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var1 = var1.REDUCED_MOTION;
                if (!(var1 !== var2)) {
                    _fun84788_ip = 99;
                    continue _fun84788
                }
            case 20:
                var1 = _closure1_slot3;
                var1 = var1.REDUCED_MOTION_STICKERS;
                if (!(var1 !== var2)) {
                    _fun84788_ip = 38;
                    continue _fun84788
                }
            case 34:
                var1 = undefined;
                return var1;
            case 38:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["2ExvRu"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 99:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var2 = var5[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["1dT9V4"];
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
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
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SettingsOverrideReasonKeys;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/getSettingsOverrideReason.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var3 = _closure1_slot2;
            var1 = var3.getAppliedOverrideReasonKey;
            var0 = _closure2_slot0;
            var1 = var1.bind(var3)(var0);
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSettingsOverrideReason = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1349, 1351, 1234, 566, 2]);