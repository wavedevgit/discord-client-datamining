// modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun71952: for (var _fun71952_ip = 0;;) switch (_fun71952_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var4 = undefined;
                var7 = var3.bind(var4)(var1);
                var2 = var7.useStateFromStores;
                var0 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    _fun71953: for (var _fun71953_ip = 0;;) switch (_fun71953_ip) {
                        case 0:
                            var0 = _closure1_slot2;
                            var0 = var0.settings;
                            var2 = var0.privacy;
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun71953_ip = 50;
                                continue _fun71953
                            }
                        case 30:
                            var2 = var2.inappropriateConversationWarnings;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun71953_ip = 50;
                                continue _fun71953
                            }
                        case 45:
                            var1 = var2.value;
                        case 50:
                            var0 = var0 == var1;
                            if (var0) {
                                _fun71953_ip = 60;
                                continue _fun71953
                            }
                        case 57:
                            var0 = var1;
                        case 60:
                            return var0;
                    }
                };
                var2 = var2.bind(var7)(var1, var0);
                var0 = 3;
                var0 = var6[var0];
                var1 = var3.bind(var4)(var0);
                var0 = var1.useUserIsTeen;
                var1 = var0.bind(var1)();
                var0 = 4;
                var0 = var6[var0];
                var6 = var3.bind(var4)(var0);
                var3 = var6.useIsEligibleForInappropriateConversationDefaultOn;
                var0 = {};
                var7 = 'useSafetyAlertsSettingOrDefault';
                var0.location = var7;
                var0 = var3.bind(var6)(var0);
                var3 = !var1;
                if (var3) {
                    _fun71952_ip = 134;
                    continue _fun71952
                }
            case 131:
                var3 = !var0;
            case 134:
                var0 = !var3;
                if (!var3) {
                    _fun71952_ip = 179;
                    continue _fun71952
                }
            case 140:
                if (var1) {
                    _fun71952_ip = 170;
                    continue _fun71952
                }
            case 143:
                var3 = null;
                var3 = var3 == var5;
                var4 = undefined;
                if (var3) {
                    _fun71952_ip = 164;
                    continue _fun71952
                }
            case 154:
                var3 = var5.isStaff;
                var4 = var3.bind(var5)();
            case 164:
                var3 = true;
                var1 = var3 === var4;
            case 170:
                if (!var1) {
                    _fun71952_ip = 176;
                    continue _fun71952
                }
            case 173:
                var1 = var2;
            case 176:
                var0 = var1;
            case 179:
                return var0;
        }
    };
    var2.useSafetyAlertsSettingOrDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1613, 566, 6469, 8956, 2]);