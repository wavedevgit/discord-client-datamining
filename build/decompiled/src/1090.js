// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function(arg0) { // Original name: isSpotlightInteraction, environment: var1
        _fun11990: for (var _fun11990_ip = 0;;) switch (_fun11990_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var2 = var1.Boolean;
                var3 = var0.type;
                var1 = 'transaction';
                var1 = var1 === var3;
                if (!var1) {
                    _fun11990_ip = 33;
                    continue _fun11990
                }
            case 27:
                var1 = var0.spans;
            case 33:
                if (!var1) {
                    _fun11990_ip = 62;
                    continue _fun11990
                }
            case 36:
                var4 = var0.contexts;
                var3 = null;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun11990_ip = 59;
                    continue _fun11990
                }
            case 53:
                var3 = var4.trace;
            case 59:
                var1 = var3;
            case 62:
                if (!var1) {
                    _fun11990_ip = 92;
                    continue _fun11990
                }
            case 65:
                var3 = var0.contexts;
                var3 = var3.trace;
                var4 = var3.op;
                var3 = 'ui.action.click';
                var1 = var3 === var4;
            case 92:
                if (!var1) {
                    _fun11990_ip = 119;
                    continue _fun11990
                }
            case 95:
                var4 = var0.spans;
                var3 = var4.some;
                var0 = function(arg0) { // Environment: var0
                    _fun11991: for (var _fun11991_ip = 0;;) switch (_fun11991_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.description;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun11991_ip = 35;
                                continue _fun11991
                            }
                        case 19:
                            var2 = var3.includes;
                            var1 = '#sentry-spotlight';
                            var0 = var2.bind(var3)(var1);
                        case 35:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var0);
            case 119:
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var0 = var0.Symbol;
    var6 = var0.toStringTag;
    var0 = {};
    var9 = 'Module';
    var0.value = var9;
    var0 = var7.bind(var8)(var2, var6, var0);
    var0 = 1;
    var4 = var4[var0];
    var0 = undefined;
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Original name: _spotlightIntegration, environment: var1
        _fun11992: for (var _fun11992_ip = 0;;) switch (_fun11992_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun11992_ip = 23;
                    continue _fun11992
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun11992_ip = 27;
                    continue _fun11992
                }
            case 23:
                var0 = {};
                _fun11992_ip = 31;
                continue _fun11992;
            case 27:
                var0 = arguments[var2];
            case 31:
                var0 = var0.sidecarUrl;
                if (var0) {
                    _fun11992_ip = 46;
                    continue _fun11992
                }
            case 40:
                var0 = 'http://localhost:8969/stream';
            case 46:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'SpotlightBrowser';
                var0.name = var2;
                var2 = function() { // Original name: setup, environment: var1
                    _fun11993: for (var _fun11993_ip = 0;;) switch (_fun11993_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 0;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.DEBUG_BUILD;
                            if (!var2) {
                                _fun11993_ip = 83;
                                continue _fun11993
                            }
                        case 33:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var4 = var1.debug;
                            var3 = var4.log;
                            var2 = _closure2_slot0;
                            var1 = 'Using Sidecar URL';
                            var1 = var3.bind(var4)(var1, var2);
                        case 83:
                            return var0;
                    }
                };
                var0.setup = var2;
                var2 = function(arg0) { // Original name: processEvent, environment: var1
                    _fun11994: for (var _fun11994_ip = 0;;) switch (_fun11994_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot2;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var0 = null;
                            if (var2) {
                                _fun11994_ip = 25;
                                continue _fun11994
                            }
                        case 22:
                            var0 = var1;
                        case 25:
                            return var0;
                    }
                };
                var0.processEvent = var2;
                var1 = function(arg0) { // Original name: afterAllSetup, environment: var1
                    var3 = _closure2_slot0;
                    var2 = function(arg0, arg1) { // Original name: setupSidecarForwarding, environment: var0
                        var4 = arg0;
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 2;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var3 = var5.getNativeImplementation;
                        var2 = 'fetch';
                        var2 = var3.bind(var5)(var2);
                        var _closure4_slot1 = var2;
                        var2 = 0;
                        var _closure4_slot2 = var2;
                        var3 = var4.on;
                        var2 = 'beforeEnvelope';
                        var1 = function(arg0) { // Environment: var1
                            _fun11997: for (var _fun11997_ip = 0;;) switch (_fun11997_ip) {
                                case 0:
                                    var3 = _closure4_slot2;
                                    var2 = 3;
                                    if (!(!(var3 > var2))) {
                                        _fun11997_ip = 140;
                                        continue _fun11997
                                    }
                                case 19:
                                    var5 = _closure4_slot1;
                                    var4 = _closure4_slot0;
                                    var3 = {};
                                    var2 = 'POST';
                                    var3.method = var2;
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var2 = 1;
                                    var6 = var6[var2];
                                    var2 = undefined;
                                    var8 = var7.bind(var2)(var6);
                                    var7 = var8.serializeEnvelope;
                                    var6 = arg0;
                                    var6 = var7.bind(var8)(var6);
                                    var3.body = var6;
                                    var6 = {};
                                    var7 = 'application/x-sentry-envelope';
                                    var6['Content-Type'] = var7;
                                    var3.headers = var6;
                                    var6 = 'cors';
                                    var3.mode = var6;
                                    var4 = var5.bind(var2)(var4, var3);
                                    var3 = var4.then;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun11998: for (var _fun11998_ip = 0;;) switch (_fun11998_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var2 = var1.status;
                                                var0 = 200;
                                                var0 = var2 >= var0;
                                                if (!var0) {
                                                    _fun11998_ip = 33;
                                                    continue _fun11998
                                                }
                                            case 18:
                                                var2 = var1.status;
                                                var1 = 400;
                                                var0 = var2 < var1;
                                            case 33:
                                                if (!var0) {
                                                    _fun11998_ip = 45;
                                                    continue _fun11998
                                                }
                                            case 36:
                                                var0 = 0;
                                                _closure4_slot2 = var0;
                                            case 45:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = _closure4_slot2;
                                        var0 = var0 + 1;
                                        _closure4_slot2 = var0;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 1;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var4 = var1.debug;
                                        var3 = var4.error;
                                        var2 = "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/";
                                        var1 = arg0;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2, var1);
                                    _fun11997_ip = 192;
                                    continue _fun11997;
                                case 140:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 1;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    var3 = var1.debug;
                                    var2 = var3.warn;
                                    var1 = _closure4_slot2;
                                    var0 = '[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:';
                                    var0 = var2.bind(var3)(var0, var1);
                                case 192:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1, var3);
                    return var0;
                };
                var0.afterAllSetup = var1;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var4 = 'SpotlightBrowser';
    var2.INTEGRATION_NAME = var4;
    var2.isSpotlightInteraction = var3;
    var2.spotlightBrowserIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1073, 817, 1030]);