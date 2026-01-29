// modules/captcha/SharedCaptchaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun46774: for (var _fun46774_ip = 0;;) switch (_fun46774_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun46774_ip = 74;
                continue _fun46774;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var7[var4];
    var5 = var5.bind(var0)(var4);
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var8 = var4.incrementCaptchaServeVolume;
    var _closure1_slot5 = var8;
    var8 = var4.flushCaptchaServeVolume;
    var _closure1_slot6 = var8;
    var4 = var4.isCaptchaStoreVolumeEmpty;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'cancel';
    var4.CANCEL = var8;
    var8 = 'error';
    var4.ERROR = var8;
    var8 = 'expired';
    var4.EXPIRED = var8;
    var1 = var1.Error;
    var5 = var5.bind(var0)(var1);
    var1 = function(arg0) { // Environment: var3
        var2 = function() { // Original name: CaptchaCancelError, environment: var0
            _fun46778: for (var _fun46778_ip = 0;;) switch (_fun46778_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = ['Captcha cancelled'];
                    var0 = _closure1_slot3;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun46778_ip = 72;
                        continue _fun46778
                    }
                case 59:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun46778_ip = 106;
                    continue _fun46778;
                case 72:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 106:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/captcha/SharedCaptchaUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.CaptchaError = var4;
    var4 = function(arg0) { // Original name: extractCaptchaPropsFromResponse, environment: var3
        _fun46779: for (var _fun46779_ip = 0;;) switch (_fun46779_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.captcha_service;
                var0.captchaService = var1;
                var1 = var2.captcha_sitekey;
                var0.sitekey = var1;
                var1 = var2.captcha_session_id;
                var0.captchaSessionId = var1;
                var1 = {};
                var3 = var2.captcha_rqdata;
                var1.rqdata = var3;
                var3 = var2.captcha_rqtoken;
                var1.rqtoken = var3;
                var4 = var2.should_serve_invisible;
                var3 = null;
                var3 = var3 != var4;
                if (!var3) {
                    _fun46779_ip = 86;
                    continue _fun46779
                }
            case 83:
                var3 = var4;
            case 86:
                var1.serveInvisible = var3;
                var2 = var2.user_flow;
                var1.userflow = var2;
                var0.options = var1;
                return var0;
        }
    };
    var2.extractCaptchaPropsFromResponse = var4;
    var3 = function(arg0) { // Original name: emitCaptchaDistributionMetric, environment: var3
        _fun46780: for (var _fun46780_ip = 0;;) switch (_fun46780_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun46780_ip = 41;
                    continue _fun46780
                }
            case 16:
                var2 = global;
                var4 = var2.setTimeout;
                var3 = _closure1_slot8;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot6;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var2 = var4.bind(var0)(var2, var3);
            case 41:
                var2 = _closure1_slot5;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.emitCaptchaDistributionMetric = var3;
    var2.CaptchaCancelError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 5216, 5205, 2]);