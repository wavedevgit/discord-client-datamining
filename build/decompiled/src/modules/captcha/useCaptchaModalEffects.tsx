// modules/captcha/useCaptchaModalEffects.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/captcha/useCaptchaModalEffects.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun112280: for (var _fun112280_ip = 0;;) switch (_fun112280_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.onReject;
                var _closure2_slot0 = var2;
                var1 = var1.analyticsType;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun112280_ip = 33;
                    continue _fun112280
                }
            case 27:
                var1 = 'Guild Join Captcha';
            case 33:
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var5;
                var4 = _closure1_slot3;
                var6 = var4.useRef;
                var3 = true;
                var3 = var6.bind(var4)(var3);
                _closure2_slot2 = var3;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun112282: for (var _fun112282_ip = 0;;) switch (_fun112282_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var1 = var1.current;
                                if (!var1) {
                                    _fun112282_ip = 71;
                                    continue _fun112282
                                }
                            case 15:
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun112282_ip = 71;
                                    continue _fun112282
                                }
                            case 25:
                                var2 = _closure2_slot0;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 3;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var3.bind(var1)(var0);
                                var0 = var0.CaptchaError;
                                var0 = var0.CANCEL;
                                var0 = var2.bind(var1)(var0);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var3.bind(var5)(var2);
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot4;
                    var1 = var0.OPEN_MODAL;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.type = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = function() { // Environment: var0
                        _fun112284: for (var _fun112284_ip = 0;;) switch (_fun112284_ip) {
                            case 0:
                                var0 = _closure2_slot2;
                                var0 = var0.current;
                                if (!var0) {
                                    _fun112284_ip = 71;
                                    continue _fun112284
                                }
                            case 15:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 4;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.track;
                                var0 = _closure1_slot4;
                                var1 = var0.MODAL_DISMISSED;
                                var0 = {};
                                var4 = _closure2_slot1;
                                var0.type = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot2;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 4094, 5254, 795, 2]);