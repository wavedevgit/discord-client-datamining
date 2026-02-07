// modules/user_settings/native/hooks/useDesignSystemsSettingPredicate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/hooks/useDesignSystemsSettingPredicate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun88592: for (var _fun88592_ip = 0;;) switch (_fun88592_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var3.bind(var2)(var0);
                var0 = var1.useStaffOrDeveloperSettingPredicate;
                var0 = var0.bind(var1)();
                var1 = 1;
                var1 = var4[var1];
                var3 = var3.bind(var2)(var1);
                var2 = var3.usePlaygroundAccessExperiment;
                var1 = 'design_systems_settings';
                var1 = var2.bind(var3)(var1);
                if (var0) {
                    _fun88592_ip = 69;
                    continue _fun88592
                }
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var2.useDesignSystemsSettingPredicate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10509, 9161, 2]);