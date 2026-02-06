// modules/user_settings/native/defs/BugReporterSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.useConfig;
        var0 = {};
        var3 = 'native-settings';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.hasBugReporterAccess;
        return var0;
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createPressable;
    var3 = {};
    var10 = 6;
    var11 = var6[var10];
    var11 = var5.bind(var0)(var11);
    var12 = var11.intl;
    var11 = var12.string;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.t;
    var10 = var10["/tZh0A"];
    var10 = var11.bind(var12)(var10);
    var3.title = var10;
    var10 = null;
    var3.parent = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.BugIcon;
    var3.IconComponent = var10;
    var9 = function() {
        _fun88056: for (var _fun88056_ip = 0;;) switch (_fun88056_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getField;
                var0 = 'isReportOpen';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun88056_ip = 116;
                    continue _fun88056
                }
            case 25:
                var2 = _closure1_slot3;
                var1 = var2.setState;
                var0 = {};
                var4 = true;
                var0.isReportOpen = var4;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 1;
                var1 = var0[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.pushLazy;
                var4 = _closure1_slot0;
                var3 = 3;
                var3 = var0[var3];
                var4 = var4.bind(var5)(var3);
                var3 = 2;
                var3 = var0[var3];
                var0 = var0.paths;
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1.bind(var2)(var0);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var3.onPress = var9;
    var3.withArrow = var8;
    var3.usePredicate = var1;
    var3 = var4.bind(var7)(var3);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/BugReporterSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useBugReporterExperimentSettingPredicate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8778, 4562, 8850, 1307, 9790, 9023, 1234, 11402, 2]);