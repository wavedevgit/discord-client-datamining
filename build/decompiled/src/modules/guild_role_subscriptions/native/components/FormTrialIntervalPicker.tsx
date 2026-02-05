// modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116947: for (var _fun116947_ip = 0;;) switch (_fun116947_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.interval;
                var _closure2_slot0 = var9;
                var1 = var0.onChange;
                var _closure2_slot1 = var1;
                var1 = var0.trialIntervalOptions;
                var _closure2_slot2 = var1;
                var4 = var0.disabled;
                var3 = _closure1_slot3;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var6 = null;
                if (!(var6 != var9)) {
                    _fun116947_ip = 110;
                    continue _fun116947
                }
            case 77:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 4;
                var6 = var10[var6];
                var8 = var8.bind(var2)(var6);
                var6 = var8.formatPlanIntervalDuration;
                var6 = var6.bind(var8)(var9);
                _fun116947_ip = 167;
                continue _fun116947;
            case 110:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 3;
                var8 = var11[var7];
                var8 = var10.bind(var2)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var2)(var7);
                var7 = var7.t;
                var7 = var7.WZG1BU;
                var6 = var8.bind(var9)(var7);
            case 167:
                var0.label = var6;
                var5 = function() {
                    _fun116948: for (var _fun116948_ip = 0;;) switch (_fun116948_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 5;
                            var2 = var9[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var8 = _closure1_slot0;
                            var1 = 7;
                            var1 = var9[var1];
                            var3 = var8.bind(var0)(var1);
                            var1 = 6;
                            var2 = var9[var1];
                            var1 = var9.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = 3;
                            var6 = var9[var1];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var1 = var9[var1];
                            var1 = var8.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1.m1KuWd;
                            var1 = var6.bind(var7)(var1);
                            var2.title = var1;
                            var1 = _closure2_slot2;
                            var2.items = var1;
                            var1 = function arg0() {
                                _fun116949: for (var _fun116949_ip = 0;;) switch (_fun116949_ip) {
                                    case 0:
                                        var2 = _closure2_slot1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun116949_ip = 27;
                                            continue _fun116949
                                        }
                                    case 13:
                                        var2 = _closure2_slot1;
                                        var1 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var1)(var0);
                                    case 27:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 5;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.hideActionSheet;
                                        var1 = 'GuildRoleSubscriptionTrialIntervalSelect';
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var2.onItemSelect = var1;
                            var7 = _closure2_slot0;
                            var1 = null;
                            var7 = var1 != var7;
                            if (!var7) {
                                _fun116948_ip = 160;
                                continue _fun116948
                            }
                        case 156:
                            var1 = _closure2_slot0;
                        case 160:
                            var2.selectedItem = var1;
                            var1 = 'GuildRoleSubscriptionTrialIntervalSelect';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var0.onPress = var5;
                var0.disabled = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 12580, 1234, 10847, 3278, 5381, 1307, 2]);