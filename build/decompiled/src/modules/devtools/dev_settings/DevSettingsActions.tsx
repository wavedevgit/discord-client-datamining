// modules/devtools/dev_settings/DevSettingsActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = function arg0, arg1() {
        _fun86949: for (var _fun86949_ip = 0;;) switch (_fun86949_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = 'boolean';
                var0 = typeof var4;
                if (!(var1 !== var0)) {
                    _fun86949_ip = 37;
                    continue _fun86949
                }
            case 17:
                var1 = _closure1_slot2;
                var0 = var1.get;
                var0 = var0.bind(var1)(var5);
                var4 = !var0;
            case 37:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'DEV_TOOLS_DEV_SETTING_SET';
                var1.type = var6;
                var1.toggle = var5;
                var1.value = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/dev_settings/DevSettingsActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.toggle = var3;
    var1 = function() {
        _fun86950: for (var _fun86950_ip = 0;;) switch (_fun86950_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.enabled;
                var6 = var0.bind(var1)();
                var0 = undefined;
                var1 = false;
                for (var2 in var6)
                    case 28: {
                        case 37: var9 = var2;
                        var8 = _closure1_slot3;
                        var8 = var8.bind(var0)(var9, var1);
                        _fun86950_ip = 28;
                        continue _fun86950;
                    }
            case 52:
                return var0;
        }
    };
    var2.clearAll = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4005, 806, 2]);