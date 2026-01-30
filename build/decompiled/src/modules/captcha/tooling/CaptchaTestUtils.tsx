// modules/captcha/tooling/CaptchaTestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var7 = global;
    var8 = var7.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var9 = var7.Object;
    var8 = var9.entries;
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.HCaptchaDifficulty;
    var9 = var8.bind(var9)(var3);
    var8 = var9.map;
    var3 = function(arg0) { // Environment: var1
        _fun87161: for (var _fun87161_ip = 0;;) switch (_fun87161_ip) {
            case 0:
                var4 = arg0;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var1 = var4().value;
                var2 = var0;
                var6 = undefined;
                var3 = var2 === var6;
                var2 = undefined;
                if (var3) {
                    _fun87161_ip = 27;
                    continue _fun87161
                }
            case 24:
                var2 = var1;
            case 27:
                var1 = undefined;
                if (var3) {
                    _fun87161_ip = 57;
                    continue _fun87161
                }
            case 32:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var1 = undefined;
                var3 = var4;
                if (var4) {
                    _fun87161_ip = 57;
                    continue _fun87161
                }
            case 51:
                var1 = var5;
                var3 = var4;
            case 57:
                if (var3) {
                    _fun87161_ip = 63;
                    continue _fun87161
                }
            case 60:
                var0.return();
            case 63:
                var0 = {};
                var3 = var1.toString;
                var3 = var3.bind(var1)();
                var0.id = var3;
                var0.label = var2;
                var0.value = var1;
                return var0;
        }
    };
    var9 = var8.bind(var9)(var3);
    var8 = var9.filter;
    var3 = function(arg0) { // Original name: isHCaptchaDifficulty, environment: var1
        var0 = arg0;
        var0 = var0.value;
        var1 = 'string';
        var0 = typeof var0;
        var0 = var1 !== var0;
        return var0;
    };
    var3 = var8.bind(var9)(var3);
    var8 = var7.Object;
    var7 = var8.entries;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.CaptchaDeciderType;
    var7 = var7.bind(var8)(var4);
    var4 = var7.map;
    var1 = function(arg0) { // Environment: var1
        _fun87163: for (var _fun87163_ip = 0;;) switch (_fun87163_ip) {
            case 0:
                var4 = arg0;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var1 = var4().value;
                var2 = var0;
                var6 = undefined;
                var3 = var2 === var6;
                var2 = undefined;
                if (var3) {
                    _fun87163_ip = 27;
                    continue _fun87163
                }
            case 24:
                var2 = var1;
            case 27:
                var1 = undefined;
                if (var3) {
                    _fun87163_ip = 57;
                    continue _fun87163
                }
            case 32:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var6;
                var1 = undefined;
                var3 = var4;
                if (var4) {
                    _fun87163_ip = 57;
                    continue _fun87163
                }
            case 51:
                var1 = var5;
                var3 = var4;
            case 57:
                if (var3) {
                    _fun87163_ip = 63;
                    continue _fun87163
                }
            case 60:
                var0.return();
            case 63:
                var0 = {};
                var0.id = var1;
                var0.label = var2;
                var0.value = var1;
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/tooling/CaptchaTestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.HCAPTCHA_DIFFICULTY_OPTIONS = var3;
    var2.CAPTCHA_DECIDER_TYPE_OPTIONS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11206, 2]);