// modules/auth/native/useInitialRegistrationStep.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getRegistrationSteps;
        var1 = var0.bind(var1)();
        var0 = 1;
        var1 = var1[var0];
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.resetRegistration;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/useInitialRegistrationStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var7 = var4.bind(var0)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getAuthenticationConsentRequired;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var6.bind(var7)(var4, var2);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var5;
        var2 = function() { // Environment: var1
            _fun100362: for (var _fun100362_ip = 0;;) switch (_fun100362_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    if (!var2) {
                        _fun100362_ip = 34;
                        continue _fun100362
                    }
                case 24:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 == var4;
                case 34:
                    if (!var2) {
                        _fun100362_ip = 67;
                        continue _fun100362
                    }
                case 37:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getLocationMetadata;
                    var1 = var1.bind(var2)();
                case 67:
                    return var0;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun100363: for (var _fun100363_ip = 0;;) switch (_fun100363_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    if (var1) {
                        _fun100363_ip = 26;
                        continue _fun100363
                    }
                case 24:
                    return var0;
                case 26:
                    var0 = function() { // Environment: var0
                        _fun100364: for (var _fun100364_ip = 0;;) switch (_fun100364_ip) {
                            case 0:
                                var2 = _closure1_slot6;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var3 = _closure1_slot4;
                                var2 = var3.isAuthenticated;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun100364_ip = 60;
                                    continue _fun100364
                                }
                            case 30:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.loginReset;
                                var1 = var1.bind(var2)();
                            case 60:
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 4559, 13050, 13049, 566, 4557, 2]);