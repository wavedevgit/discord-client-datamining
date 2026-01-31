// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var2 = exports;
            var4 = dependencyMap;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var4;
            var1 = function() { // Original name: getDefaultSidecarUrl, environment: var3
                _fun12301: for (var _fun12301_ip = 0;;) switch (_fun12301_ip) {
                    case 0:
                        var1 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var2 = undefined;
                    case 8: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.ReactNativeLibraries;
                        var7 = var3.Devtools;
                        var6 = var7;
                        var4 = null;
                        var3 = undefined;
                        if (!(var4 !== var7)) {
                            _fun12301_ip = 76;
                            continue _fun12301
                        }
                    case 54:
                        var7 = var6;
                        var3 = undefined;
                        if (!(var1 !== var7)) {
                            _fun12301_ip = 76;
                            continue _fun12301
                        }
                    case 63:
                        var7 = var6;
                        var6 = var7.getDevServer;
                        var3 = var6.bind(var7)();
                    case 76:
                        var5 = var3;
                        if (!(var4 !== var3)) {
                            _fun12301_ip = 90;
                            continue _fun12301
                        }
                    case 83:
                        var3 = var5;
                        if (!(var1 === var3)) {
                            _fun12301_ip = 94;
                            continue _fun12301
                        }
                    case 90:
                        var3 = {};
                        _fun12301_ip = 97;
                        continue _fun12301;
                    case 94:
                        var3 = var5;
                    case 97:
                        var3 = var3.url;
                        var2 = var3;
                        if (var3) {
                            _fun12301_ip = 114;
                            continue _fun12301
                        }
                    case 108:
                        var0 = _closure1_slot3;
                        _fun12301_ip = 201;
                        continue _fun12301;
                    case 114:
                        var5 = var2;
                        var3 = var5.match;
                        var2 = /^(?:\w+:)?\\/\\ / ([ ^ \/:]+)(:\d+)?(.*)$/;
                                var2 = var3.bind(var5)(var2);
                                var3 = var4 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun12301_ip = 158;
                                    continue _fun12301
                                }
                                case 151:
                                var3 = 1;
                                var1 = var2[var3];
                                case 158:
                                var4 = null;
                                if (!var1) {
                                    _fun12301_ip = 170;
                                    continue _fun12301
                                }
                                case 163:
                                var1 = 1;
                                var4 = var2[var1];
                                case 170:
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var3 = var1.concat;
                                var2 = 'http://';
                                var1 = ':8969/stream';
                                var0 = var3.bind(var2)(var4, var1);
                                case 201: // try_end0
                                return var0;
                                case 203: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var0 = _closure1_slot3;
                                return var0;
                            }
                        };
                        var _closure1_slot4 = var1;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.defineProperty;
                        var5 = {};
                        var0 = true;
                        var5.value = var0;
                        var0 = '__esModule';
                        var0 = var6.bind(var7)(var2, var0, var5);
                        var0 = 0;
                        var5 = var4[var0];
                        var4 = arg2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var5);
                        var _closure1_slot2 = var4;
                        var4 = 'http://localhost:8969/stream';
                        var _closure1_slot3 = var4;
                        var3 = function() { // Original name: spotlightIntegration, environment: var3
                            _fun12302: for (var _fun12302_ip = 0;;) switch (_fun12302_ip) {
                                case 0:
                                    var3 = undefined;
                                    var4 = undefined;
                                    var0 = arguments.length;
                                    var2 = 0;
                                    if (!(var0 > var2)) {
                                        _fun12302_ip = 23;
                                        continue _fun12302
                                    }
                                case 15:
                                    var0 = arguments[var2];
                                    if (!(var3 === var0)) {
                                        _fun12302_ip = 27;
                                        continue _fun12302
                                    }
                                case 23:
                                    var0 = {};
                                    _fun12302_ip = 31;
                                    continue _fun12302;
                                case 27:
                                    var0 = arguments[var2];
                                case 31:
                                    var4 = var0.sidecarUrl;
                                    if (!(var3 === var4)) {
                                        _fun12302_ip = 52;
                                        continue _fun12302
                                    }
                                case 41:
                                    var0 = _closure1_slot4;
                                    var4 = var0.bind(var3)();
                                case 52:
                                    var _closure2_slot0 = var4;
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var0 = 1;
                                    var0 = var5[var0];
                                    var0 = var2.bind(var3)(var0);
                                    var3 = var0.debug;
                                    var2 = var3.log;
                                    var0 = '[Spotlight] Using Sidecar URL';
                                    var0 = var2.bind(var3)(var0, var4);
                                    var0 = {};
                                    var2 = 'Spotlight';
                                    var0.name = var2;
                                    var2 = function() { // Original name: setupOnce, environment: var1
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0.setupOnce = var2;
                                    var1 = function(arg0) { // Original name: setup, environment: var1
                                        var3 = _closure2_slot0;
                                        var2 = function(arg0, arg1) { // Original name: _setup, environment: var0
                                            var3 = function(arg0, arg1) { // Original name: sendEnvelopesToSidecar, environment: var0
                                                _fun12306: for (var _fun12306_ip = 0;;) switch (_fun12306_ip) {
                                                    case 0:
                                                        var4 = arg0;
                                                        var0 = arg1;
                                                        var _closure5_slot0 = var0;
                                                        var2 = var4.on;
                                                        var0 = undefined;
                                                        if (var2) {
                                                            _fun12306_ip = 25;
                                                            continue _fun12306
                                                        }
                                                    case 23:
                                                        return var0;
                                                    case 25:
                                                        var3 = var4.on;
                                                        var2 = 'beforeEnvelope';
                                                        var1 = function(arg0) { // Environment: var1
                                                            _fun12307: for (var _fun12307_ip = 0;;) switch (_fun12307_ip) {
                                                                case 0:
                                                                    var3 = arg0;
                                                                    var4 = _closure1_slot2;
                                                                    var0 = undefined;
                                                                    var5 = var4.bind(var0)(var3);
                                                                    var6 = 1;
                                                                    var3 = var3[var6];
                                                                    var7 = var4.bind(var0)(var3);
                                                                    var4 = var7.filter;
                                                                    var3 = function(arg0) { // Environment: var2
                                                                        _fun12308: for (var _fun12308_ip = 0;;) switch (_fun12308_ip) {
                                                                            case 0:
                                                                                var2 = arg0;
                                                                                var1 = 0;
                                                                                var0 = var2[var1];
                                                                                var0 = var0.content_type;
                                                                                var3 = 'string';
                                                                                var0 = typeof var0;
                                                                                var0 = var3 !== var0;
                                                                                if (var0) {
                                                                                    _fun12308_ip = 57;
                                                                                    continue _fun12308
                                                                                }
                                                                            case 29:
                                                                                var1 = var2[var1];
                                                                                var3 = var1.content_type;
                                                                                var2 = var3.startsWith;
                                                                                var1 = 'image';
                                                                                var1 = var2.bind(var3)(var1);
                                                                                var0 = !var1;
                                                                            case 57:
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    var3 = var4.bind(var7)(var3);
                                                                    var5[var6] = var3;
                                                                    var4 = _closure1_slot0;
                                                                    var7 = _closure1_slot1;
                                                                    var3 = 2;
                                                                    var3 = var7[var3];
                                                                    var4 = var4.bind(var0)(var3);
                                                                    var3 = var4.createStealthXhr;
                                                                    var3 = var3.bind(var4)();
                                                                    var _closure6_slot0 = var3;
                                                                    if (var3) {
                                                                        _fun12307_ip = 128;
                                                                        continue _fun12307
                                                                    }
                                                                case 87:
                                                                    var7 = _closure1_slot0;
                                                                    var4 = _closure1_slot1;
                                                                    var4 = var4[var6];
                                                                    var4 = var7.bind(var0)(var4);
                                                                    var8 = var4.debug;
                                                                    var7 = var8.error;
                                                                    var4 = '[Spotlight] Sentry SDK can not create XHR object';
                                                                    var4 = var7.bind(var8)(var4);
                                                                    _fun12307_ip = 228;
                                                                    continue _fun12307;
                                                                case 128:
                                                                    var9 = var3.open;
                                                                    var8 = _closure5_slot0;
                                                                    var7 = 'POST';
                                                                    var4 = true;
                                                                    var4 = var9.bind(var3)(var7, var8, var4);
                                                                    var8 = var3.setRequestHeader;
                                                                    var7 = 'Content-Type';
                                                                    var4 = 'application/x-sentry-envelope';
                                                                    var4 = var8.bind(var3)(var7, var4);
                                                                    var2 = function() { // Environment: var2
                                                                        _fun12309: for (var _fun12309_ip = 0;;) switch (_fun12309_ip) {
                                                                            case 0:
                                                                                var0 = _closure6_slot0;
                                                                                var4 = var0.readyState;
                                                                                var5 = _closure1_slot0;
                                                                                var3 = _closure1_slot1;
                                                                                var0 = 2;
                                                                                var3 = var3[var0];
                                                                                var0 = undefined;
                                                                                var3 = var5.bind(var0)(var3);
                                                                                var3 = var3.XHR_READYSTATE_DONE;
                                                                                if (!(var4 === var3)) {
                                                                                    _fun12309_ip = 176;
                                                                                    continue _fun12309
                                                                                }
                                                                            case 51:
                                                                                var3 = _closure6_slot0;
                                                                                var6 = var3.status;
                                                                                var3 = 0;
                                                                                var3 = var3 === var6;
                                                                                if (var3) {
                                                                                    _fun12309_ip = 92;
                                                                                    continue _fun12309
                                                                                }
                                                                            case 69:
                                                                                var4 = 200;
                                                                                var4 = var6 >= var4;
                                                                                if (!var4) {
                                                                                    _fun12309_ip = 89;
                                                                                    continue _fun12309
                                                                                }
                                                                            case 79:
                                                                                var5 = 400;
                                                                                var4 = var6 < var5;
                                                                            case 89:
                                                                                var3 = var4;
                                                                            case 92:
                                                                                if (var3) {
                                                                                    _fun12309_ip = 176;
                                                                                    continue _fun12309
                                                                                }
                                                                            case 95:
                                                                                var3 = _closure1_slot0;
                                                                                var4 = _closure1_slot1;
                                                                                var2 = 1;
                                                                                var2 = var4[var2];
                                                                                var2 = var3.bind(var0)(var2);
                                                                                var4 = var2.debug;
                                                                                var3 = var4.error;
                                                                                var2 = global;
                                                                                var5 = var2.Error;
                                                                                var1 = _closure6_slot0;
                                                                                var8 = var1.statusText;
                                                                                var2 = var5.prototype;
                                                                                var2 = Object.create(var2, {
                                                                                    constructor: {
                                                                                        value: var5
                                                                                    }
                                                                                });
                                                                                var9 = var2;
                                                                                var1 = new var9[var5](var8, var7);
                                                                                var2 = var1 instanceof Object ? var1 : var2;
                                                                                var1 = "[Spotlight] Sentry SDK can't connect to Spotlight is it running? See https://spotlightjs.com to download it.";
                                                                                var1 = var3.bind(var4)(var1, var2);
                                                                            case 176:
                                                                                return var0;
                                                                        }
                                                                    };
                                                                    var3.onreadystatechange = var2;
                                                                    var2 = var3.send;
                                                                    var4 = _closure1_slot0;
                                                                    var1 = _closure1_slot1;
                                                                    var1 = var1[var6];
                                                                    var4 = var4.bind(var0)(var1);
                                                                    var1 = var4.serializeEnvelope;
                                                                    var1 = var1.bind(var4)(var5);
                                                                    var1 = var2.bind(var3)(var1);
                                                                case 228:
                                                                    return var0;
                                                            }
                                                        };
                                                        var1 = var3.bind(var4)(var2, var1);
                                                        return var0;
                                                }
                                            };
                                            var0 = undefined;
                                            var2 = arg0;
                                            var1 = arg1;
                                            var1 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        var0 = undefined;
                                        var1 = arg0;
                                        var1 = var2.bind(var0)(var1, var3);
                                        return var0;
                                    };
                                    var0.setup = var1;
                                    return var0;
                            }
                        };
                        var2.spotlightIntegration = var3;
                        var2.getDefaultSidecarUrl = var1;
                        return var0;
                })(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817, 815, 994]);