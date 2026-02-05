// utils/native/CaptchaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.NativeModules;
    var7 = var4.NativeEventEmitter;
    var4 = var4.Keyboard;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.CaptchaEvent;
    var _closure1_slot7 = var8;
    var8 = var4.RECAPTCHA_SITE_KEY;
    var _closure1_slot8 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var3 = var3.CaptchaManager;
    var _closure1_slot11 = var3;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot12 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var8 = arg0;
        var7 = arg3;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 6;
        var1 = var6[var0];
        var0 = undefined;
        var9 = var2.bind(var0)(var1);
        var5 = var9.track;
        var1 = _closure1_slot9;
        var3 = var1.CAPTCHA_EVENT;
        var1 = {};
        var1.captcha_event_name = var8;
        var1.captcha_service = var7;
        var10 = arg2;
        var1.sitekey = var10;
        var10 = arg1;
        var1.captcha_flow_key = var10;
        var1 = var5.bind(var9)(var3, var1);
        var1 = 7;
        var1 = var6[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.increment;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.MetricEvents;
        var4 = var4.CAPTCHA_EVENT;
        var1.name = var4;
        var5 = global;
        var4 = var5.HermesInternal;
        var6 = var4.concat;
        var4 = 'event_name:';
        var6 = var6.bind(var4)(var8);
        var4 = new Array(2);
        var4[0] = var6;
        var5 = var5.HermesInternal;
        var6 = var5.concat;
        var5 = 'captcha_service:';
        var5 = var6.bind(var5)(var7);
        var4[1] = var5;
        var1.tags = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var3 = {};
    var4 = function() {
        _fun112441: for (var _fun112441_ip = 0;;) switch (_fun112441_ip) {
            case 0:
                var1 = arguments[0];
                var4 = arguments[1];
                var3 = this;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun112441_ip = 50;
                    continue _fun112441
                }
            case 15:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var0 = var2.bind(var5)(var0);
                var0 = var0.CaptchaTypes;
                var1 = var0.RECAPTCHA;
            case 50:
                var6 = _closure1_slot4;
                var2 = var6.dismiss;
                var2 = var2.bind(var6)();
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var9 = var7.bind(var5)(var2);
                var8 = var9.track;
                var2 = _closure1_slot9;
                var7 = var2.OPEN_MODAL;
                var2 = {};
                var10 = 'CAPTCHA';
                var2.type = var10;
                var2 = var8.bind(var9)(var7, var2);
                var2 = _closure1_slot0;
                var0 = 11;
                var0 = var6[var0];
                var0 = var2.bind(var5)(var0);
                var0 = var0.CaptchaTypes;
                var0 = var0.HCAPTCHA;
                if (!(var1 === var0)) {
                    _fun112441_ip = 156;
                    continue _fun112441
                }
            case 150:
                var0 = null;
                if (!(var0 == var4)) {
                    _fun112441_ip = 168;
                    continue _fun112441
                }
            case 156:
                var0 = var3.showRecaptcha;
                var0 = var0.bind(var3)();
                _fun112441_ip = 183;
                continue _fun112441;
            case 168:
                var2 = var3.showHcaptcha;
                var1 = arguments[2];
                var0 = var2.bind(var3)(var4, var1);
            case 183:
                return var0;
        }
    };
    var3.showCaptcha = var4;
    var4 = function() {
        var1 = _closure1_slot11;
        var0 = var1.closeCaptcha;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.closeCaptcha = var4;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var1 = var2[var0];
            var0 = undefined;
            var4 = var8.bind(var0)(var1);
            var1 = var4.v4;
            var10 = var1.bind(var4)();
            var _closure3_slot2 = var10;
            var9 = _closure1_slot13;
            var7 = _closure2_slot0;
            var4 = 11;
            var4 = var2[var4];
            var4 = var8.bind(var0)(var4);
            var4 = var4.CaptchaTypes;
            var11 = var4.HCAPTCHA;
            var14 = 'initial-load';
            var15 = undefined;
            var13 = var10;
            var12 = var7;
            var4 = var15[var9](var14, var13, var12, var11, var10);
            var4 = _closure1_slot1;
            var3 = 14;
            var3 = var2[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.pushLazy;
            var3 = 16;
            var3 = var2[var3];
            var8 = var8.bind(var0)(var3);
            var3 = 15;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var8.bind(var0)(var3, var2);
            var2 = {};
            var2.siteKey = var7;
            var6 = function arg0() {
                _fun112445: for (var _fun112445_ip = 0;;) switch (_fun112445_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = null;
                        var4 = var3 == var1;
                        var0 = undefined;
                        var2 = undefined;
                        if (var4) {
                            _fun112445_ip = 27;
                            continue _fun112445
                        }
                    case 16:
                        var4 = var1.nativeEvent;
                        var2 = var4.data;
                    case 27:
                        if (!(var3 != var2)) {
                            _fun112445_ip = 336;
                            continue _fun112445
                        }
                    case 34:
                        var1 = var1.nativeEvent;
                        var2 = var1.data;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 13;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.CaptchaError;
                        var1 = var1.CANCEL;
                        if (!(var2 !== var1)) {
                            _fun112445_ip = 224;
                            continue _fun112445
                        }
                    case 87:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.CaptchaError;
                        var1 = var1.ERROR;
                        if (!(var2 !== var1)) {
                            _fun112445_ip = 224;
                            continue _fun112445
                        }
                    case 120:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.CaptchaError;
                        var1 = var1.EXPIRED;
                        if (!(var2 !== var1)) {
                            _fun112445_ip = 224;
                            continue _fun112445
                        }
                    case 153:
                        var8 = _closure1_slot13;
                        var12 = _closure3_slot2;
                        var11 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 11;
                        var4 = var9[var4];
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.CaptchaTypes;
                        var10 = var4.HCAPTCHA;
                        var13 = 'verify';
                        var14 = undefined;
                        var4 = var14[var8](var13, var12, var11, var10, var9);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)(var2);
                        _fun112445_ip = 336;
                        continue _fun112445;
                    case 224:
                        var8 = _closure1_slot13;
                        var12 = _closure3_slot2;
                        var11 = _closure2_slot0;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var4 = var9.bind(var0)(var4);
                        var4 = var4.CaptchaTypes;
                        var10 = var4.HCAPTCHA;
                        var14 = undefined;
                        var13 = var2;
                        var4 = var14[var8](var13, var12, var11, var10, var9);
                        var5 = _closure1_slot1;
                        var4 = 6;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.track;
                        var3 = _closure1_slot9;
                        var4 = var3.CAPTCHA_FAILED;
                        var3 = {};
                        var3.reason = var2;
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)(var2);
                    case 336:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var2.onMessage = var6;
            var1 = _closure2_slot1;
            var2.rqdata = var1;
            var1 = 'hcaptcha';
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var3.showHcaptcha = var4;
    var4 = function() {
        var1 = this;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var0 = 10;
            var3 = var8[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var3 = var5.v4;
            var6 = var3.bind(var5)();
            var _closure3_slot2 = var6;
            var5 = _closure1_slot13;
            var7 = _closure1_slot8;
            var3 = 11;
            var3 = var8[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.CaptchaTypes;
            var9 = var3.HCAPTCHA;
            var12 = 'initial-load';
            var13 = undefined;
            var11 = var6;
            var10 = var7;
            var3 = var13[var5](var12, var11, var10, var9, var8);
            var6 = _closure1_slot11;
            var5 = var6.showCaptcha;
            var3 = _closure1_slot6;
            var4 = var3.theme;
            var3 = 'https://cdn.discordapp.com/recaptcha/ios.html';
            var3 = var5.bind(var6)(var7, var4, var3);
            var4 = _closure1_slot12;
            var6 = var4.addListener;
            var2 = _closure1_slot7;
            var5 = var2.SOLVED;
            var3 = function(arg0) { // Environment: var1
                var1 = _closure2_slot0;
                var0 = var1.closeCaptcha;
                var0 = var0.bind(var1)();
                var6 = _closure1_slot13;
                var9 = _closure3_slot2;
                var8 = _closure1_slot8;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.CaptchaTypes;
                var7 = var2.RECAPTCHA;
                var10 = 'verify';
                var11 = undefined;
                var2 = var11[var6](var10, var9, var8, var7, var6);
                var2 = _closure3_slot0;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var3 = var6.bind(var4)(var5, var3);
            var3 = var4.addListener;
            var2 = var2.EXPIRED;
            var1 = function() { // Environment: var1
                var1 = _closure2_slot0;
                var0 = var1.closeCaptcha;
                var0 = var0.bind(var1)();
                var10 = _closure1_slot13;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var2 = var4[var1];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var2 = var2.CaptchaError;
                var9 = var2.EXPIRED;
                var13 = _closure3_slot2;
                var12 = _closure1_slot8;
                var6 = 11;
                var6 = var4[var6];
                var6 = var3.bind(var0)(var6);
                var6 = var6.CaptchaTypes;
                var11 = var6.RECAPTCHA;
                var15 = undefined;
                var14 = var9;
                var6 = var15[var10](var14, var13, var12, var11, var10);
                var7 = _closure1_slot1;
                var6 = 6;
                var6 = var4[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.track;
                var5 = _closure1_slot9;
                var6 = var5.CAPTCHA_FAILED;
                var5 = {};
                var9 = 'expired';
                var5.reason = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2 = _closure3_slot1;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.CaptchaError;
                var1 = var1.EXPIRED;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var3.showRecaptcha = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/CaptchaUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var2 = arg0;
        var7 = var2.siteKey;
        var _closure2_slot0 = var7;
        var0 = var2.onVerify;
        var _closure2_slot1 = var0;
        var0 = var2.onError;
        var _closure2_slot2 = var0;
        var1 = {
            'siteKey': 0,
            'onVerify': 0,
            'onError': 0
        };
        var12 = null;
        var13 = var1;
        var0 = silentSetPrototypeOf(var13, var12);
        var13 = {};
        var12 = var2;
        var11 = var1;
        var4 = copyDataProperties(var13, var12, var11);
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var3 = undefined;
        var10 = var2.bind(var3)(var1);
        var9 = var10.useStateFromStores;
        var1 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var6
            var0 = _closure1_slot5;
            var0 = var0.locale;
            return var0;
        };
        var5 = var9.bind(var10)(var5, var1);
        var1 = 10;
        var1 = var8[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        var _closure2_slot3 = var1;
        var10 = _closure1_slot3;
        var9 = var10.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var7;
        var1 = function() { // Environment: var6
            var5 = _closure1_slot13;
            var8 = _closure2_slot3;
            var7 = _closure2_slot0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.CaptchaTypes;
            var6 = var1.HCAPTCHA;
            var9 = 'initial-load';
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var1 = var9.bind(var10)(var1, var2);
        var2 = _closure1_slot10;
        var1 = _closure1_slot1;
        var0 = 12;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.siteKey = var7;
        var6 = function arg0() {
            _fun112453: for (var _fun112453_ip = 0;;) switch (_fun112453_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.nativeEvent;
                    var1 = var1.data;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun112453_ip = 329;
                        continue _fun112453
                    }
                case 23:
                    var0 = var0.nativeEvent;
                    var2 = var0.data;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 13;
                    var0 = var0[var6];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.CaptchaError;
                    var0 = var0.CANCEL;
                    if (!(var2 !== var0)) {
                        _fun112453_ip = 212;
                        continue _fun112453
                    }
                case 78:
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.CaptchaError;
                    var0 = var0.ERROR;
                    if (!(var2 !== var0)) {
                        _fun112453_ip = 212;
                        continue _fun112453
                    }
                case 111:
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var6];
                    var0 = var5.bind(var1)(var0);
                    var0 = var0.CaptchaError;
                    var0 = var0.EXPIRED;
                    if (!(var2 !== var0)) {
                        _fun112453_ip = 212;
                        continue _fun112453
                    }
                case 144:
                    var9 = _closure1_slot13;
                    var13 = _closure2_slot3;
                    var12 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 11;
                    var5 = var10[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.CaptchaTypes;
                    var11 = var5.HCAPTCHA;
                    var14 = 'verify';
                    var15 = undefined;
                    var5 = var15[var9](var14, var13, var12, var11, var10);
                    var0 = _closure2_slot1;
                    var0 = var0.bind(var1)(var2);
                    _fun112453_ip = 329;
                    continue _fun112453;
                case 212:
                    var9 = _closure1_slot13;
                    var13 = _closure2_slot3;
                    var12 = _closure2_slot0;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.CaptchaTypes;
                    var11 = var5.HCAPTCHA;
                    var15 = undefined;
                    var14 = var2;
                    var5 = var15[var9](var14, var13, var12, var11, var10);
                    var6 = _closure1_slot1;
                    var5 = 6;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.track;
                    var3 = _closure1_slot9;
                    var5 = var3.CAPTCHA_FAILED;
                    var3 = {};
                    var3.reason = var2;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure2_slot2;
                    if (!(var4 != var3)) {
                        _fun112453_ip = 329;
                        continue _fun112453
                    }
                case 320:
                    var0 = _closure2_slot2;
                    var0 = var0.bind(var1)(var2);
                case 329:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onMessage = var6;
        var0.languageCode = var5;
        var13 = var0;
        var12 = var4;
        var4 = copyDataProperties(var13, var12);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.InlineHcaptcha = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1685, 3196, 660, 33, 795, 4261, 4266, 566, 491, 562, 14470, 5263, 4561, 14471, 1307, 2]);