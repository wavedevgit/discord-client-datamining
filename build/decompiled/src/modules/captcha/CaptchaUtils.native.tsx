// modules/captcha/CaptchaUtils.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.CAPTCHA_MODAL_KEY;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1() {
        _fun112316: for (var _fun112316_ip = 0;;) switch (_fun112316_ip) {
            case 0:
                var1 = arg0;
                var7 = arguments[2];
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun112316_ip = 23;
                    continue _fun112316
                }
            case 21:
                var7 = {};
            case 23:
                var10 = var1.sitekey;
                var9 = var1.captchaService;
                var6 = var1.options;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 3;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var11 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var11 = var11.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var11.bind(var0)(var3, var2);
                var2 = _closure1_slot4;
                var1 = {};
                var1.sitekey = var10;
                var1.captchaService = var9;
                var9 = function arg0, arg1() {
                    var2 = _closure2_slot0;
                    var1 = {};
                    var0 = arg0;
                    var1.captcha_key = var0;
                    var0 = arg1;
                    var1.captcha_rqtoken = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onCaptchaVerify = var9;
                var8 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var0 = _closure1_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.close = var8;
                var14 = var1;
                var13 = var7;
                var7 = copyDataProperties(var14, var13);
                var14 = var1;
                var13 = var6;
                var6 = copyDataProperties(var14, var13);
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var1.showCaptcha = var6;
    var6 = function arg0() {
        _fun112319: for (var _fun112319_ip = 0;;) switch (_fun112319_ip) {
            case 0:
                var1 = arg0;
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun112319_ip = 16;
                    continue _fun112319
                }
            case 14:
                var3 = {};
            case 16:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var2;
                var _closure2_slot3 = var2;
                var _closure2_slot4 = var2;
                var2 = var1.sitekey;
                _closure2_slot1 = var2;
                var2 = var1.captchaService;
                _closure2_slot2 = var2;
                var2 = var1.captchaSessionId;
                _closure2_slot3 = var2;
                var1 = var1.options;
                _closure2_slot4 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var3 = var2[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 5;
                    var3 = var2[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = 4;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var0)(var3, var2);
                    var3 = _closure1_slot4;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2.sitekey = var8;
                    var8 = _closure2_slot2;
                    var2.captchaService = var8;
                    var8 = function arg0, arg1() {
                        var2 = _closure3_slot0;
                        var1 = {};
                        var0 = arg0;
                        var1.captcha_key = var0;
                        var0 = arg1;
                        var1.captcha_rqtoken = var0;
                        var0 = _closure2_slot3;
                        var1.captcha_session_id = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onCaptchaVerify = var8;
                    var8 = function arg0() {
                        _fun112322: for (var _fun112322_ip = 0;;) switch (_fun112322_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var4 = 6;
                                var2 = var0[var4];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.CaptchaError;
                                var3 = var2.CANCEL;
                                var2 = arg0;
                                if (!(var2 !== var3)) {
                                    _fun112322_ip = 120;
                                    continue _fun112322
                                }
                            case 44:
                                var3 = _closure3_slot1;
                                var2 = global;
                                var6 = var2.Error;
                                var8 = _closure2_slot2;
                                var2 = var2.HermesInternal;
                                var7 = var2.concat;
                                var5 = 'Failed to display captcha for service ';
                                var2 = '.';
                                var10 = var7.bind(var5)(var8, var2);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var11 = var5;
                                var2 = new var11[var6](var10, var9);
                                var2 = var2 instanceof Object ? var2 : var5;
                                var2 = var3.bind(var0)(var2);
                                _fun112322_ip = 175;
                                continue _fun112322;
                            case 120:
                                var2 = _closure3_slot1;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var4];
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.CaptchaCancelError;
                                var3 = var1.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var11 = var3;
                                var1 = new var11[var1](var10);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var1 = var2.bind(var0)(var1);
                            case 175:
                                return var0;
                        }
                    };
                    var2.onReject = var8;
                    var7 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.hideActionSheet;
                        var0 = _closure1_slot4;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.close = var7;
                    var11 = _closure2_slot0;
                    var12 = var2;
                    var7 = copyDataProperties(var12, var11);
                    var11 = _closure2_slot4;
                    var12 = var2;
                    var1 = copyDataProperties(var12, var11);
                    var9 = 'stack';
                    var13 = var6;
                    var12 = var4;
                    var11 = var3;
                    var10 = var2;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
                    return var0;
                };
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var1.showCaptchaAsync = var6;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.getKey;
            var1 = var1.bind(var2)();
            var0 = _closure1_slot4;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useIsCaptchaModalOpen = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/captcha/CaptchaUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3101, 5214, 566, 3239, 14400, 1307, 5224, 2]);