// modules/user_settings/native/defs/CreateBugReportSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var8 = 5;
    var9 = var5[var8];
    var9 = var4.bind(var0)(var9);
    var10 = var9.intl;
    var9 = var10.string;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.aIkGJD;
    var8 = var9.bind(var10)(var8);
    var1.title = var8;
    var8 = null;
    var1.parent = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.WrenchIcon;
    var1.IconComponent = var8;
    var8 = function arg0() {
        _fun87609: for (var _fun87609_ip = 0;;) switch (_fun87609_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var2 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.setDeveloperOptionSettings;
                var2 = {};
                var6 = arg0;
                if (var6) {
                    _fun87609_ip = 82;
                    continue _fun87609
                }
            case 39:
                var6 = false;
                var2.bugReporterEnabled = var6;
                var6 = var4.bind(var5)(var2);
                var7 = _closure1_slot1;
                var6 = 2;
                var6 = var3[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.terminate;
                var6 = true;
                var6 = var7.bind(var8)(var6);
                _fun87609_ip = 120;
                continue _fun87609;
            case 82:
                var6 = true;
                var2.bugReporterEnabled = var6;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.initialize;
                var1 = var1.bind(var2)();
            case 120:
                return var0;
        }
    };
    var1.onValueChange = var8;
    var8 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.isBugReporterEnabled;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useValue = var8;
    var7 = function() {
        var0 = 'Photo permission is required';
        return var0;
    };
    var1.useDescription = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.useBugReporterExperimentSettingPredicate;
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/CreateBugReportSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [803, 805, 9710, 566, 8945, 1234, 11001, 11289, 2]);