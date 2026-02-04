// modules/user_settings/DefultGuildsRestrictedSetting.tsx
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
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/DefultGuildsRestrictedSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun88850: for (var _fun88850_ip = 0;;) switch (_fun88850_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var2 = var4[var0];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var5 = var2.DefaultGuildsRestricted;
                var2 = var5.useSetting;
                var2 = var2.bind(var5)();
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var1 = var0.DefaultGuildsRestrictedV2;
                var0 = var1.useSetting;
                var0 = var0.bind(var1)();
                var1 = null;
                if (!(var1 == var0)) {
                    _fun88850_ip = 86;
                    continue _fun88850
                }
            case 71:
                var3 = !var2;
                var1 = !var3;
                if (!var3) {
                    _fun88850_ip = 83;
                    continue _fun88850
                }
            case 80:
                var1 = var2;
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.useDefaultGuildsRestricted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1348, 2]);