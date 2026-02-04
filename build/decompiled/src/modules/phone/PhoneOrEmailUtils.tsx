// modules/phone/PhoneOrEmailUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var0 = 'phone';
    var3.PHONE = var0;
    var0 = 'email';
    var3.EMAIL = var0;
    var _closure1_slot0 = var3;
    var0 = /^[-() \d]+$/;
    var _closure1_slot1 = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/PhoneOrEmailUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PhoneOrEmailSelectorForceMode = var3;
    var3 = function arg0, arg1() {
        _fun60722: for (var _fun60722_ip = 0;;) switch (_fun60722_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = _closure1_slot0;
                var0 = var0.PHONE;
                if (!(var1 !== var0)) {
                    _fun60722_ip = 77;
                    continue _fun60722
                }
            case 23:
                var0 = _closure1_slot0;
                var0 = var0.EMAIL;
                var0 = var1 !== var0;
                if (!var0) {
                    _fun60722_ip = 75;
                    continue _fun60722
                }
            case 40:
                var4 = var3.length;
                var1 = 3;
                var4 = var4 < var1;
                var1 = !var4;
                if (var4) {
                    _fun60722_ip = 72;
                    continue _fun60722
                }
            case 58:
                var4 = _closure1_slot1;
                var2 = var4.test;
                var1 = var2.bind(var4)(var3);
            case 72:
                var0 = var1;
            case 75:
                _fun60722_ip = 95;
                continue _fun60722;
            case 77:
                var2 = var3.startsWith;
                var1 = '+';
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 95:
                return var0;
        }
    };
    var2.shouldShowCountryCodeSelector = var3;
    var1 = function arg0() {
        _fun60723: for (var _fun60723_ip = 0;;) switch (_fun60723_ip) {
            case 0:
                var2 = /^\+\d/;
                var1 = var2.test;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = _closure1_slot0;
                if (var0) {
                    _fun60723_ip = 45;
                    continue _fun60723
                }
            case 37:
                var0 = var1.EMAIL;
                _fun60723_ip = 51;
                continue _fun60723;
            case 45:
                var0 = var1.PHONE;
            case 51:
                return var0;
        }
    };
    var2.getPhoneOrEmail = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);