// modules/user_settings/native/defs/InternalBuildActiveSetting.tsx
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
    var1 = 2;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createStatic;
    var1 = {
        'title': 'Internal Build Active',
        'parent': null
    };
    var8 = 3;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.MobilePhoneSettingsIcon;
    var1.IconComponent = var8;
    var8 = function() {
        var0 = 'Build installed from builds.discord.tools';
        return var0;
    };
    var1.useDescription = var8;
    var7 = function() {
        _fun88049: for (var _fun88049_ip = 0;;) switch (_fun88049_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.useStaffOrDeveloperSettingPredicate;
                var1 = var1.bind(var2)();
                var0 = _closure1_slot2;
                var0 = var0.hasUpdatesConfigured;
                if (!var0) {
                    _fun88049_ip = 51;
                    continue _fun88049
                }
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/InternalBuildActiveSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11402, 10469, 9017, 11114, 2]);