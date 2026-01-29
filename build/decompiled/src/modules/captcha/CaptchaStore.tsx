// modules/captcha/CaptchaStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var0.captchaServeVolume = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/CaptchaStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useCaptchaStore = var3;
    var3 = function() { // Original name: isCaptchaStoreVolumeEmpty, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var3 = _closure1_slot4;
        var0 = var3.getState;
        var0 = var0.bind(var3)();
        var0 = var0.captchaServeVolume;
        var0 = var1.bind(var2)(var0);
        var1 = var0.length;
        var0 = 0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isCaptchaStoreVolumeEmpty = var3;
    var3 = function(arg0) { // Original name: incrementCaptchaServeVolume, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                _fun46787: for (var _fun46787_ip = 0;;) switch (_fun46787_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure2_slot0;
                        var1 = null;
                        var0 = var4;
                        if (!(var1 != var2)) {
                            _fun46787_ip = 105;
                            continue _fun46787
                        }
                    case 19:
                        var2 = _closure2_slot0;
                        var1 = var4.captchaServeVolume;
                        var1 = var2 in var1;
                        var2 = {};
                        var3 = {};
                        var8 = var4.captchaServeVolume;
                        var9 = var3;
                        var6 = copyDataProperties(var9, var8);
                        var5 = _closure2_slot0;
                        var6 = 1;
                        if (var1) {
                            _fun46787_ip = 75;
                            continue _fun46787
                        }
                    case 60:
                        var3[var5] = var6;
                        var2.captchaServeVolume = var3;
                        var1 = var2;
                        _fun46787_ip = 102;
                        continue _fun46787;
                    case 75:
                        var4 = var4.captchaServeVolume;
                        var4 = var4[var5];
                        var4 = var4 + var6;
                        var3[var5] = var4;
                        var2.captchaServeVolume = var3;
                        var1 = var2;
                    case 102:
                        var0 = var1;
                    case 105:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.incrementCaptchaServeVolume = var3;
    var1 = function() { // Original name: flushCaptchaServeVolume, environment: var1
        _fun46788: for (var _fun46788_ip = 0;;) switch (_fun46788_ip) {
            case 0:
                var12 = global;
                var3 = var12.Object;
                var2 = var3.entries;
                var4 = _closure1_slot4;
                var0 = var4.getState;
                var0 = var0.bind(var4)();
                var0 = var0.captchaServeVolume;
                var11 = var2.bind(var3)(var0);
                var0 = var11.length;
                var10 = 0;
                var2 = var10 < var0;
                var0 = undefined;
                var3 = 2;
                var9 = 1;
                var8 = 3;
                var7 = 4;
                var6 = 'user_flow:';
                var5 = true;
                var4 = 0;
                if (!var2) {
                    _fun46788_ip = 207;
                    continue _fun46788
                }
            case 83:
                var13 = var11[var4];
                var2 = _closure1_slot3;
                var2 = var2.bind(var0)(var13, var3);
                var17 = var2[var10];
                var15 = var2[var9];
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = var16[var8];
                var14 = var13.bind(var0)(var2);
                var13 = var14.distribution;
                var2 = {};
                var18 = _closure1_slot0;
                var16 = var16[var7];
                var16 = var18.bind(var0)(var16);
                var16 = var16.MetricEvents;
                var16 = var16.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
                var2.name = var16;
                var16 = var12.HermesInternal;
                var16 = var16.concat;
                var17 = var16.bind(var6)(var17);
                var16 = new Array(1);
                var16[0] = var17;
                var2.tags = var16;
                var2 = var13.bind(var14)(var2, var15, var5);
                var4 = var4 + 1;
                var2 = var11.length;
                if (var4 < var2) {
                    _fun46788_ip = 83;
                    continue _fun46788
                }
            case 207:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = {};
                    var0.captchaServeVolume = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.flushCaptchaServeVolume = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 629, 802, 4218, 4223, 2]);