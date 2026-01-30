// modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.doesRegistrationHaveIdentityType;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot4 = var6;
    var3 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useIsHCaptchaModalOpenTracking, environment: var1
        var4 = _closure1_slot2;
        var3 = var4.useContext;
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var5.bind(var0)(var2);
        var2 = var2.TrackRegistrationContext;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = var4.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun101127: for (var _fun101127_ip = 0;;) switch (_fun101127_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun101127_ip = 51;
                        continue _fun101127
                    }
                case 46:
                    var1 = var3.current;
                case 51:
                    if (!(var2 == var1)) {
                        _fun101127_ip = 57;
                        continue _fun101127
                    }
                case 55:
                    return var0;
                case 57:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var0 = function() { // Environment: var0
                        _fun101128: for (var _fun101128_ip = 0;;) switch (_fun101128_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var2 = var4.isModalOpen;
                                var1 = 'hcaptcha';
                                var1 = var2.bind(var4)(var1);
                                if (!var1) {
                                    _fun101128_ip = 53;
                                    continue _fun101128
                                }
                            case 45:
                                var2 = _closure1_slot3;
                                var1 = var2.bind(var0)();
                            case 53:
                                if (!var1) {
                                    _fun101128_ip = 100;
                                    continue _fun101128
                                }
                            case 56:
                                var2 = _closure2_slot0;
                                var1 = {};
                                var4 = _closure1_slot4;
                                var4 = var4.CAPTCHA;
                                var1.step = var4;
                                var3 = _closure1_slot5;
                                var3 = var3.VIEWED;
                                var1.actionType = var3;
                                var1 = var2.bind(var0)(var1);
                            case 100:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useIsHCaptchaModalOpenTracking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13068, 13069, 13066, 3879, 3878, 2]);