// modules/user_settings/native/defs/ExperimentOverrideActiveSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 4;
        var1 = var6[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var1);
        var8 = var9.useStateFromStores;
        var1 = _closure1_slot2;
        var7 = new Array(1);
        var7[0] = var1;
        var1 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var3 = _closure1_slot2;
            var0 = var3.getAllExperimentOverrideDescriptors;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            var0 = var0.length;
            return var0;
        };
        var1 = var8.bind(var9)(var7, var1);
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var0 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var3 = _closure1_slot3;
            var0 = var3.getClientOverrides;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            var0 = var0.length;
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0);
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
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
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {
        'title': 'Experiments Overrides Active',
        'parent': null
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.BeakerIcon;
    var1.IconComponent = var9;
    var9 = function() {
        var1 = _closure1_slot5;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 5;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.DevToolsContentSubLabel;
        var0 = {};
        var4 = 'Experiments overridden: ';
        var0.label = var4;
        var4 = var5.toString;
        var4 = var4.bind(var5)();
        var0.value = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useDescription = var9;
    var9 = function() {
        _fun88098: for (var _fun88098_ip = 0;;) switch (_fun88098_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.useStaffOrDeveloperSettingPredicate;
                var1 = var1.bind(var3)();
                var0 = _closure1_slot5;
                var2 = var0.bind(var2)();
                var0 = 0;
                var0 = var2 > var0;
                if (!var0) {
                    _fun88098_ip = 55;
                    continue _fun88098
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
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.navigateToDevTools;
        var1 = {};
        var4 = 'experiments';
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
    var3 = 'modules/user_settings/native/defs/ExperimentOverrideActiveSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1590, 1211, 33, 11394, 566, 11395, 10471, 9023, 11145, 2]);