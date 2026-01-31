// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12334: for (var _fun12334_ip = 0;;) switch (_fun12334_ip) {
        case 0:
            var1 = exports;
            var3 = this;
            var2 = require;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = global;
            var6 = var2.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var2 = true;
            var4.value = var2;
            var2 = '__esModule';
            var2 = var5.bind(var6)(var1, var2, var4);
            var2 = var3;
            if (!var2) {
                _fun12334_ip = 66;
                continue _fun12334
            }
        case 60:
            var2 = var3.__rest;
        case 66:
            if (var2) {
                _fun12334_ip = 74;
                continue _fun12334
            }
        case 69:
            var2 = function(arg0, arg1) { // Environment: var0
                _fun12335: for (var _fun12335_ip = 0;;) switch (_fun12335_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = {};
                        var8 = var7;
                        var5 = 0;
                        var4 = global;
                        for (var1 in var8)
                            case 23: {
                                case 32: var11 = var1;
                                var10 = var4.Object;
                                var10 = var10.prototype;
                                var12 = var10.hasOwnProperty;
                                var10 = var12.call;
                                var10 = var10.bind(var12)(var7, var11);
                                if (!var10) {
                                    _fun12335_ip = 81;
                                    continue _fun12335
                                }
                                case 66: var12 = var6.indexOf;
                                var12 = var12.bind(var6)(var11);
                                var10 = var12 < var5;
                                case 81: if (!var10) {
                                    _fun12335_ip = 23;
                                    continue _fun12335
                                }
                                case 84: var10 = var7[var11];
                                var0[var11] = var10;
                                _fun12335_ip = 23;
                                continue _fun12335;
                            }
                    case 94:
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun12335_ip = 242;
                            continue _fun12335
                        }
                    case 103:
                        var1 = var4.Object;
                        var1 = var1.getOwnPropertySymbols;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun12335_ip = 242;
                            continue _fun12335
                        }
                    case 126:
                        var2 = var4.Object;
                        var1 = var2.getOwnPropertySymbols;
                        var3 = var1.bind(var2)(var7);
                        var1 = var3.length;
                        var1 = var5 < var1;
                        var2 = 0;
                        if (!var1) {
                            _fun12335_ip = 242;
                            continue _fun12335
                        }
                    case 157:
                        var8 = var6.indexOf;
                        var1 = var3[var2];
                        var1 = var8.bind(var6)(var1);
                        var1 = var1 < var5;
                        if (!var1) {
                            _fun12335_ip = 211;
                            continue _fun12335
                        }
                    case 179:
                        var8 = var4.Object;
                        var8 = var8.prototype;
                        var10 = var8.propertyIsEnumerable;
                        var9 = var10.call;
                        var8 = var3[var2];
                        var1 = var9.bind(var10)(var7, var8);
                    case 211:
                        if (!var1) {
                            _fun12335_ip = 230;
                            continue _fun12335
                        }
                    case 214:
                        var8 = var3[var2];
                        var1 = var3[var2];
                        var1 = var7[var1];
                        var0[var8] = var1;
                    case 230:
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun12335_ip = 157;
                            continue _fun12335
                        }
                    case 242:
                        return var0;
                }
            };
        case 74:
            var _closure1_slot2 = var2;
            var2 = 'MobileFeedback';
            var _closure1_slot3 = var2;
            var3 = function() {
                _fun12336: for (var _fun12336_ip = 0;;) switch (_fun12336_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 0;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var0);
                        var0 = var3.getClient;
                        var3 = var0.bind(var3)();
                        var4 = null;
                        var0 = undefined;
                        if (!(var4 !== var3)) {
                            _fun12336_ip = 63;
                            continue _fun12336
                        }
                    case 42:
                        var0 = undefined;
                        if (!(var0 !== var3)) {
                            _fun12336_ip = 63;
                            continue _fun12336
                        }
                    case 48:
                        var2 = var3.getIntegrationByName;
                        var1 = _closure1_slot3;
                        var0 = var2.bind(var3)(var1);
                    case 63:
                        return var0;
                }
            };
            var _closure1_slot4 = var3;
            var1.MOBILE_FEEDBACK_INTEGRATION_NAME = var2;
            var2 = function() {
                _fun12337: for (var _fun12337_ip = 0;;) switch (_fun12337_ip) {
                    case 0:
                        var9 = undefined;
                        var1 = undefined;
                        var2 = arguments.length;
                        var0 = 0;
                        if (!(var2 > var0)) {
                            _fun12337_ip = 21;
                            continue _fun12337
                        }
                    case 13:
                        var2 = arguments[var0];
                        if (!(var9 === var2)) {
                            _fun12337_ip = 25;
                            continue _fun12337
                        }
                    case 21:
                        var8 = {};
                        _fun12337_ip = 29;
                        continue _fun12337;
                    case 25:
                        var8 = arguments[var0];
                    case 29:
                        var5 = var8.buttonOptions;
                        var4 = var8.screenshotButtonOptions;
                        var3 = var8.colorScheme;
                        var2 = var8.themeLight;
                        var1 = var8.themeDark;
                        var6 = _closure1_slot2;
                        var0 = ['buttonOptions', 'screenshotButtonOptions', 'colorScheme', 'themeLight', 'themeDark'];
                        var6 = var6.bind(var9)(var8, var0);
                        var0 = {};
                        var7 = _closure1_slot3;
                        var0.name = var7;
                        var0.options = var6;
                        if (var5) {
                            _fun12337_ip = 101;
                            continue _fun12337
                        }
                    case 99:
                        var5 = {};
                    case 101:
                        var0.buttonOptions = var5;
                        if (var4) {
                            _fun12337_ip = 111;
                            continue _fun12337
                        }
                    case 109:
                        var4 = {};
                    case 111:
                        var0.screenshotButtonOptions = var4;
                        if (var3) {
                            _fun12337_ip = 123;
                            continue _fun12337
                        }
                    case 119:
                        var3 = 'system';
                    case 123:
                        var0.colorScheme = var3;
                        if (var2) {
                            _fun12337_ip = 133;
                            continue _fun12337
                        }
                    case 131:
                        var2 = {};
                    case 133:
                        var0.themeLight = var2;
                        if (var1) {
                            _fun12337_ip = 143;
                            continue _fun12337
                        }
                    case 141:
                        var1 = {};
                    case 143:
                        var0.themeDark = var1;
                        return var0;
                }
            };
            var1.feedbackIntegration = var2;
            var2 = function() {
                _fun12338: for (var _fun12338_ip = 0;;) switch (_fun12338_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        if (var1) {
                            _fun12338_ip = 20;
                            continue _fun12338
                        }
                    case 16:
                        var0 = {};
                        _fun12338_ip = 25;
                        continue _fun12338;
                    case 20:
                        var0 = var1.options;
                    case 25:
                        return var0;
                }
            };
            var1.getFeedbackOptions = var2;
            var2 = function() {
                _fun12339: for (var _fun12339_ip = 0;;) switch (_fun12339_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        if (var1) {
                            _fun12339_ip = 20;
                            continue _fun12339
                        }
                    case 16:
                        var0 = {};
                        _fun12339_ip = 26;
                        continue _fun12339;
                    case 20:
                        var0 = var1.buttonOptions;
                    case 26:
                        return var0;
                }
            };
            var1.getFeedbackButtonOptions = var2;
            var2 = function() {
                _fun12340: for (var _fun12340_ip = 0;;) switch (_fun12340_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        if (var1) {
                            _fun12340_ip = 20;
                            continue _fun12340
                        }
                    case 16:
                        var0 = {};
                        _fun12340_ip = 26;
                        continue _fun12340;
                    case 20:
                        var0 = var1.screenshotButtonOptions;
                    case 26:
                        return var0;
                }
            };
            var1.getScreenshotButtonOptions = var2;
            var2 = function() {
                _fun12341: for (var _fun12341_ip = 0;;) switch (_fun12341_ip) {
                    case 0:
                        var0 = _closure1_slot4;
                        var2 = undefined;
                        var1 = var0.bind(var2)();
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun12341_ip = 28;
                            continue _fun12341
                        }
                    case 22:
                        var2 = var1.colorScheme;
                    case 28:
                        var0 = 'system';
                        if (!var2) {
                            _fun12341_ip = 41;
                            continue _fun12341
                        }
                    case 35:
                        var0 = var1.colorScheme;
                    case 41:
                        return var0;
                }
            };
            var1.getColorScheme = var2;
            var2 = function() {
                _fun12342: for (var _fun12342_ip = 0;;) switch (_fun12342_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        if (var1) {
                            _fun12342_ip = 20;
                            continue _fun12342
                        }
                    case 16:
                        var0 = {};
                        _fun12342_ip = 26;
                        continue _fun12342;
                    case 20:
                        var0 = var1.themeLight;
                    case 26:
                        return var0;
                }
            };
            var1.getFeedbackLightTheme = var2;
            var0 = function() {
                _fun12343: for (var _fun12343_ip = 0;;) switch (_fun12343_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        if (var1) {
                            _fun12343_ip = 20;
                            continue _fun12343
                        }
                    case 16:
                        var0 = {};
                        _fun12343_ip = 26;
                        continue _fun12343;
                    case 20:
                        var0 = var1.themeDark;
                    case 26:
                        return var0;
                }
            };
            var1.getFeedbackDarkTheme = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);