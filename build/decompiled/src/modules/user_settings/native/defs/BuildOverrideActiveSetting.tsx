// modules/user_settings/native/defs/BuildOverrideActiveSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun87604: for (var _fun87604_ip = 0;;) switch (_fun87604_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var0 = var2.getCurrentBuildOverride;
                    var0 = var0.bind(var2)();
                    var4 = var0.overrides;
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    var0 = undefined;
                    if (var5) {
                        _fun87604_ip = 80;
                        continue _fun87604
                    }
                case 36:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 4;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.DEVICE_FIELD;
                    var1 = var4[var1];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun87604_ip = 80;
                        continue _fun87604
                    }
                case 75:
                    var0 = var1.id;
                case 80:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = arg2;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot3 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {
        'title': 'Build Override Active',
        'parent': null
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.RefreshIcon;
    var1.IconComponent = var9;
    var9 = function() {
        _fun87605: for (var _fun87605_ip = 0;;) switch (_fun87605_ip) {
            case 0:
                var0 = _closure1_slot4;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var0 = null;
                var2 = var0 != var5;
                var0 = undefined;
                if (!var2) {
                    _fun87605_ip = 76;
                    continue _fun87605
                }
            case 24:
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.DevToolsContentSubLabel;
                var1 = {};
                var6 = 'Build override: ';
                var1.label = var6;
                var1.value = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 76:
                return var0;
        }
    };
    var1.useDescription = var9;
    var9 = function() {
        _fun87606: for (var _fun87606_ip = 0;;) switch (_fun87606_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.useStaffOrDeveloperSettingPredicate;
                var1 = var1.bind(var3)();
                var0 = _closure1_slot4;
                var2 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun87606_ip = 55;
                    continue _fun87606
                }
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var1.usePredicate = var9;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.navigateToDevTools;
        var1 = {};
        var4 = 'buildOverride';
        var1.screenKey = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onPress = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/BuildOverrideActiveSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9750, 33, 11282, 566, 9976, 10352, 11283, 8945, 10669, 2]);