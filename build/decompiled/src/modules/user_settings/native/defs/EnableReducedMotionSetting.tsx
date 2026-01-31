// modules/user_settings/native/defs/EnableReducedMotionSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.e3TR1b;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.ACCESSIBILITY;
    var1.parent = var8;
    var8 = function() { // Original name: useReducedMotionSettingValue, environment: var7
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
            var0 = _closure1_slot2;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: onReducedMotionSettingValueChange, environment: var7
        _fun84929: for (var _fun84929_ip = 0;;) switch (_fun84929_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPrefersReducedMotion;
                var1 = 'no-preference';
                var4 = arg0;
                if (!var4) {
                    _fun84929_ip = 47;
                    continue _fun84929
                }
            case 43:
                var1 = 'reduce';
            case 47:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.onValueChange = var8;
    var8 = function() { // Original name: useDescription, environment: var7
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun84931: for (var _fun84931_ip = 0;;) switch (_fun84931_ip) {
                case 0:
                    var0 = _closure1_slot3;
                    var2 = var0.active;
                    var5 = undefined;
                    var0 = undefined;
                    if (!var2) {
                        _fun84931_ip = 77;
                        continue _fun84931
                    }
                case 20:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 6;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1["1y+WEi"];
                    var0 = var2.bind(var3)(var1);
                case 77:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useDescription = var8;
    var7 = function() { // Original name: useIsDisabled, environment: var7
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
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
            var0 = var0.active;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/EnableReducedMotionSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 1299, 6967, 566, 10834, 8943, 1234, 2]);