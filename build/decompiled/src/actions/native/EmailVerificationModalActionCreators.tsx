// actions/native/EmailVerificationModalActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function() {
        _fun60370: for (var _fun60370_ip = 0;;) switch (_fun60370_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun60370_ip = 11;
                    continue _fun60370
                }
            case 9:
                var1 = false;
            case 11:
                if (!var1) {
                    _fun60370_ip = 57;
                    continue _fun60370
                }
            case 14:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.track;
                var2 = _closure1_slot3;
                var2 = var2.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED;
                var2 = var3.bind(var4)(var2);
            case 57:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 2;
                var4 = var2[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.pushLazy;
                var6 = _closure1_slot0;
                var3 = 4;
                var3 = var2[var3];
                var6 = var6.bind(var0)(var3);
                var3 = 3;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var0)(var3, var2);
                var2 = {};
                var2.isChangeEmail = var1;
                var1 = 'EMAIL_VERIFICATION_MODAL_KEY';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var1.open = var6;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.popWithKey;
            var1 = 'EMAIL_VERIFICATION_MODAL_KEY';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/EmailVerificationModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 4525, 7426, 1307, 806, 2]);