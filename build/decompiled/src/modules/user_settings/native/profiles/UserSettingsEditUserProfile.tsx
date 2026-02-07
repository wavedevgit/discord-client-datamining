// modules/user_settings/native/profiles/UserSettingsEditUserProfile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/profiles/UserSettingsEditUserProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80748: for (var _fun80748_ip = 0;;) switch (_fun80748_ip) {
            case 0:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 3;
                var2 = var7[var1];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.USER_SETTINGS_USER_PROFILE;
                var2 = var3.bind(var4)(var2);
                var6 = var2.analyticsLocations;
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var7[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var7.bind(var8)(var3, var2);
                var _closure2_slot0 = var7;
                var8 = _closure1_slot3;
                var3 = var8.useEffect;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    _fun80750: for (var _fun80750_ip = 0;;) switch (_fun80750_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun80750_ip = 78;
                                continue _fun80750
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var5 = _closure2_slot0;
                            var2 = var5.id;
                            var1 = var5.getAvatarURL;
                            var0 = 80;
                            var1 = var1.bind(var5)(var4, var0);
                            var0 = {};
                            var5 = true;
                            var0.dispatchWait = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var8)(var0, var2);
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun80748_ip = 227;
                    continue _fun80748
                }
            case 145:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var6;
                var6 = _closure1_slot1;
                var5 = 7;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.currentUser = var7;
                var10 = arg0;
                var11 = var5;
                var7 = copyDataProperties(var11, var10);
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 227:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 5777, 5631, 566, 7026, 10270, 2]);