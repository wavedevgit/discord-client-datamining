// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0() {
        _fun29586: for (var _fun29586_ip = 0;;) switch (_fun29586_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun29586_ip = 43;
                    continue _fun29586
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun29586_ip = 50;
                    continue _fun29586
                }
            case 43:
                var2 = function arg0() {
                    _fun29588: for (var _fun29588_ip = 0;;) switch (_fun29588_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun29588_ip = 58;
                                continue _fun29588
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun29588_ip = 58;
                                continue _fun29588
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun29588_ip = 58;
                                continue _fun29588
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun29588_ip = 61;
                                continue _fun29588
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun29586_ip = 55;
                continue _fun29586;
            case 50:
                var2 = function arg0() {
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 55:
                _closure1_slot12 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var5 = '';
    var4 = var5.concat;
    var3 = 'https://js.stripe.com';
    var0 = '/';
    var5 = var4.bind(var5)(var3, var0);
    var4 = var5.concat;
    var3 = 'basil';
    var0 = '/stripe.js';
    var0 = var4.bind(var5)(var3, var0);
    var _closure1_slot1 = var0;
    var0 = /^https:\\/\\ / js\.stripe\.com\\ / v3\\ / ? (\?.*) ? $ / ;
    var _closure1_slot2 = var0;
    var0 = /^https:\\/\\ / js\.stripe\.com\\ / (v3 | [a - z] + )\\ / stripe\.js(\?.*) ? $ / ;
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun29589: for (var _fun29589_ip = 0;;) switch (_fun29589_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot2;
                var0 = var2.test;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun29589_ip = 37;
                    continue _fun29589
                }
            case 23:
                var2 = _closure1_slot3;
                var1 = var2.test;
                var0 = var1.bind(var2)(var3);
            case 37:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun29590: for (var _fun29590_ip = 0;;) switch (_fun29590_ip) {
            case 0:
                var0 = arg0;
                var5 = '';
                var4 = var5;
                if (!var0) {
                    _fun29590_ip = 31;
                    continue _fun29590
                }
            case 13:
                var0 = var0.advancedFraudSignals;
                var4 = var5;
                if (var0) {
                    _fun29590_ip = 31;
                    continue _fun29590
                }
            case 25:
                var4 = '?advancedFraudSignals=false';
            case 31:
                var1 = global;
                var3 = var1.document;
                var2 = var3.createElement;
                var0 = 'script';
                var0 = var2.bind(var3)(var0);
                var3 = var5.concat;
                var2 = _closure1_slot1;
                var3 = var3.bind(var5)(var2);
                var2 = var3.concat;
                var2 = var2.bind(var3)(var4);
                var0.src = var2;
                var2 = var1.document;
                var2 = var2.head;
                if (var2) {
                    _fun29590_ip = 113;
                    continue _fun29590
                }
            case 102:
                var3 = var1.document;
                var2 = var3.body;
            case 113:
                if (var2) {
                    _fun29590_ip = 150;
                    continue _fun29590
                }
            case 116:
                var4 = var1.Error;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = 'Expected document.body not to be null. Stripe.js requires a <body> element.';
                var7 = var3;
                var1 = new var7[var4](var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 150:
                var1 = var2.appendChild;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = null;
    var _closure1_slot6 = var0;
    var _closure1_slot7 = var0;
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun29591: for (var _fun29591_ip = 0;;) switch (_fun29591_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot6;
                var2 = null;
                if (!(var2 === var3)) {
                    _fun29591_ip = 77;
                    continue _fun29591
                }
            case 22:
                var2 = global;
                var4 = var2.Promise;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var5 = function(arg0, arg1) { // Environment: var0
                    _fun29592: for (var _fun29592_ip = 0;;) switch (_fun29592_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = arg1;
                            var0 = undefined;
                            var5 = undefined;
                            var7 = undefined;
                            var1 = global;
                            var4 = var1.window;
                            var8 = 'undefined';
                            var4 = typeof var4;
                            if (!(var8 !== var4)) {
                                _fun29592_ip = 45;
                                continue _fun29592
                            }
                        case 32:
                            var4 = var1.document;
                            var4 = typeof var4;
                            if (!(var8 === var4)) {
                                _fun29592_ip = 60;
                                continue _fun29592
                            }
                        case 45:
                            var8 = var2;
                            var4 = null;
                            var4 = var8.bind(var0)(var4);
                            _fun29592_ip = 548;
                            continue _fun29592;
                        case 60:
                            var4 = var1.window;
                            var4 = var4.Stripe;
                            if (!var4) {
                                _fun29592_ip = 82;
                                continue _fun29592
                            }
                        case 75:
                            var4 = _closure2_slot0;
                        case 82:
                            if (!var4) {
                                _fun29592_ip = 107;
                                continue _fun29592
                            }
                        case 85:
                            var9 = var1.console;
                            var8 = var9.warn;
                            var4 = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
                            var4 = var8.bind(var9)(var4);
                        case 107:
                            var4 = var1.window;
                            var4 = var4.Stripe;
                            if (var4) {
                                _fun29592_ip = 531;
                                continue _fun29592
                            }
                        case 125: // try_start_0
                            var9 = var1.document;
                            var8 = var9.querySelectorAll;
                            var12 = 'script[src^="';
                            var11 = var12.concat;
                            var10 = 'https://js.stripe.com';
                            var4 = '"]';
                            var4 = var11.bind(var12)(var10, var4);
                            var12 = var8.bind(var9)(var4);
                            var4 = var12.length;
                            var11 = 0;
                            var9 = var11 < var4;
                            var10 = null;
                            var8 = null;
                            if (!var9) {
                                _fun29592_ip = 234;
                                continue _fun29592
                            }
                        case 192:
                            var13 = var12[var11];
                            var14 = _closure1_slot4;
                            var9 = var13.src;
                            var9 = var14.bind(var0)(var9);
                            var8 = var13;
                            if (var9) {
                                _fun29592_ip = 234;
                                continue _fun29592
                            }
                        case 217:
                            var11 = var11 + 1;
                            var9 = var12.length;
                            var9 = var11 < var9;
                            var8 = null;
                            if (var9) {
                                _fun29592_ip = 192;
                                continue _fun29592
                            }
                        case 234:
                            var5 = var8;
                            if (!var8) {
                                _fun29592_ip = 253;
                                continue _fun29592
                            }
                        case 240:
                            var8 = _closure2_slot0;
                            if (var8) {
                                _fun29592_ip = 418;
                                continue _fun29592
                            }
                        case 253:
                            var8 = var5;
                            if (var8) {
                                _fun29592_ip = 280;
                                continue _fun29592
                            }
                        case 259:
                            var9 = _closure1_slot5;
                            var8 = _closure2_slot0;
                            var5 = var9.bind(var0)(var8);
                            _fun29592_ip = 440;
                            continue _fun29592;
                        case 280:
                            var8 = var5;
                            if (!var8) {
                                _fun29592_ip = 440;
                                continue _fun29592
                            }
                        case 289:
                            var8 = _closure1_slot8;
                            if (!(var10 !== var8)) {
                                _fun29592_ip = 440;
                                continue _fun29592
                            }
                        case 300:
                            var8 = _closure1_slot7;
                            if (!(var10 !== var8)) {
                                _fun29592_ip = 440;
                                continue _fun29592
                            }
                        case 311:
                            var9 = var5;
                            var12 = var9.removeEventListener;
                            var11 = _closure1_slot8;
                            var8 = 'load';
                            var8 = var12.bind(var9)(var8, var11);
                            var12 = var9.removeEventListener;
                            var11 = _closure1_slot7;
                            var8 = 'error';
                            var8 = var12.bind(var9)(var8, var11);
                            var9 = var9.parentNode;
                            var7 = var9;
                            var9 = var10 === var9;
                            var8 = var9;
                            if (var9) {
                                _fun29592_ip = 380;
                                continue _fun29592
                            }
                        case 373:
                            var9 = var7;
                            var8 = var0 === var9;
                        case 380:
                            if (var8) {
                                _fun29592_ip = 400;
                                continue _fun29592
                            }
                        case 383:
                            var9 = var7;
                            var8 = var9.removeChild;
                            var7 = var5;
                            var7 = var8.bind(var9)(var7);
                        case 400:
                            var8 = _closure1_slot5;
                            var7 = _closure2_slot0;
                            var5 = var8.bind(var0)(var7);
                            _fun29592_ip = 440;
                            continue _fun29592;
                        case 418:
                            var9 = var1.console;
                            var8 = var9.warn;
                            var7 = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
                            var7 = var8.bind(var9)(var7);
                        case 440:
                            var9 = var2;
                            var7 = var3;
                            var8 = function arg0, arg1() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = arg1;
                                var _closure4_slot1 = var1;
                                var0 = function() { // Environment: var0
                                    _fun29594: for (var _fun29594_ip = 0;;) switch (_fun29594_ip) {
                                        case 0:
                                            var0 = global;
                                            var1 = var0.window;
                                            var2 = var1.Stripe;
                                            if (var2) {
                                                _fun29594_ip = 65;
                                                continue _fun29594
                                            }
                                        case 20:
                                            var4 = _closure4_slot1;
                                            var5 = var0.Error;
                                            var2 = var5.prototype;
                                            var3 = Object.create(var2, {
                                                constructor: {
                                                    value: var5
                                                }
                                            });
                                            var6 = 'Stripe.js not available';
                                            var7 = var3;
                                            var2 = new var7[var5](var6, var5);
                                            var3 = var2 instanceof Object ? var2 : var3;
                                            var2 = undefined;
                                            var2 = var4.bind(var2)(var3);
                                            _fun29594_ip = 88;
                                            continue _fun29594;
                                        case 65:
                                            var2 = _closure4_slot0;
                                            var0 = var0.window;
                                            var1 = var0.Stripe;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                        case 88:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var8 = var8.bind(var0)(var9, var7);
                            _closure1_slot8 = var8;
                            var6 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var0 = global;
                                    var4 = var0.Error;
                                    var3 = {};
                                    var0 = arg0;
                                    var3.cause = var0;
                                    var0 = var4.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var6 = 'Failed to load Stripe.js';
                                    var7 = var1;
                                    var5 = var3;
                                    var0 = new var7[var4](var6, var5, var4);
                                    var1 = var0 instanceof Object ? var0 : var1;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var6 = var6.bind(var0)(var7);
                            _closure1_slot7 = var6;
                            var7 = var5;
                            var8 = var7.addEventListener;
                            var6 = _closure1_slot8;
                            var5 = 'load';
                            var5 = var8.bind(var7)(var5, var6);
                            var6 = var7.addEventListener;
                            var5 = _closure1_slot7;
                            var4 = 'error';
                            var4 = var6.bind(var7)(var4, var5);
                        case 518: // try_end0
                            _fun29592_ip = 548;
                            continue _fun29592;
                        case 520: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var3 = var3.bind(var0)(var4);
                            var3 = undefined;
                            return var3;
                        case 531:
                            var1 = var1.window;
                            var1 = var1.Stripe;
                            var1 = var2.bind(var0)(var1);
                        case 548:
                            return var0;
                    }
                };
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var3 = var2 instanceof Object ? var2 : var3;
                _closure1_slot6 = var3;
                var2 = var3.catch;
                var0 = function(arg0) { // Environment: var0
                    var0 = null;
                    _closure1_slot6 = var0;
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.reject;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _fun29591_ip = 81;
                continue _fun29591;
            case 77:
                var0 = _closure1_slot6;
            case 81:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun29598: for (var _fun29598_ip = 0;;) switch (_fun29598_ip) {
            case 0:
                var1 = arg0;
                var5 = 'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ';
                var4 = var5.concat;
                var0 = global;
                var3 = var0.JSON;
                var2 = var3.stringify;
                var3 = var2.bind(var3)(var1);
                var2 = '\n';
                var2 = var4.bind(var5)(var3, var2);
                var3 = null;
                if (!(var3 !== var1)) {
                    _fun29598_ip = 149;
                    continue _fun29598
                }
            case 49:
                var4 = _closure1_slot12;
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var3 = 'object';
                if (!(var3 === var4)) {
                    _fun29598_ip = 149;
                    continue _fun29598
                }
            case 71:
                var4 = var0.Object;
                var3 = var4.keys;
                var3 = var3.bind(var4)(var1);
                var4 = var3.length;
                var3 = 1;
                if (!(var3 === var4)) {
                    _fun29598_ip = 116;
                    continue _fun29598
                }
            case 99:
                var3 = var1.advancedFraudSignals;
                var4 = 'boolean';
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun29598_ip = 147;
                    continue _fun29598
                }
            case 116:
                var3 = var0.Error;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var4;
                var7 = var2;
                var3 = new var8[var3](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 147:
                return var1;
            case 149:
                var0 = var0.Error;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var7 = var2;
                var0 = new var8[var0](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = false;
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun29599: for (var _fun29599_ip = 0;;) switch (_fun29599_ip) {
            case 0:
                var3 = undefined;
                var6 = undefined;
                var5 = arguments.length;
                var2 = global;
                var1 = var2.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var4;
                var8 = var5;
                var1 = new var9[var1](var8, var7);
                var4 = var1 instanceof Object ? var1 : var4;
                var _closure2_slot0 = var4;
                var1 = 0;
                var7 = var1 < var5;
                if (!var7) {
                    _fun29599_ip = 68;
                    continue _fun29599
                }
            case 53:
                var7 = arguments[var1];
                var4[var1] = var7;
                var1 = var1 + 1;
                if (var1 < var5) {
                    _fun29599_ip = 53;
                    continue _fun29599
                }
            case 68:
                var4 = true;
                _closure1_slot11 = var4;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var _closure2_slot1 = var2;
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = function arg0, arg1, arg2() {
                        _fun29601: for (var _fun29601_ip = 0;;) switch (_fun29601_ip) {
                            case 0:
                                var4 = arg0;
                                var3 = arg1;
                                var0 = null;
                                if (!(var0 !== var4)) {
                                    _fun29601_ip = 232;
                                    continue _fun29601
                                }
                            case 15:
                                var1 = 0;
                                var5 = var3[var1];
                                var2 = var5.match;
                                var1 = /^pk_test/;
                                var1 = var2.bind(var5)(var1);
                                var2 = var4.version;
                                var8 = 'v3';
                                var5 = 3;
                                if (!(var5 !== var2)) {
                                    _fun29601_ip = 66;
                                    continue _fun29601
                                }
                            case 63:
                                var8 = var2;
                            case 66:
                                if (!var1) {
                                    _fun29601_ip = 79;
                                    continue _fun29601
                                }
                            case 69:
                                var2 = 'basil';
                                var1 = var8 !== var2;
                            case 79:
                                if (!var1) {
                                    _fun29601_ip = 169;
                                    continue _fun29601
                                }
                            case 82:
                                var1 = global;
                                var5 = var1.console;
                                var2 = var5.warn;
                                var7 = 'Stripe.js@';
                                var6 = var7.concat;
                                var1 = ' was loaded on the page, but @stripe/stripe-js@';
                                var8 = var6.bind(var7)(var8, var1);
                                var7 = var8.concat;
                                var6 = '7.3.1';
                                var1 = ' expected Stripe.js@';
                                var8 = var7.bind(var8)(var6, var1);
                                var7 = var8.concat;
                                var6 = 'basil';
                                var1 = '. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning';
                                var1 = var7.bind(var8)(var6, var1);
                                var1 = var2.bind(var5)(var1);
                            case 169:
                                var2 = var4.apply;
                                var1 = undefined;
                                var1 = var2.bind(var4)(var1, var3);
                                var2 = var1;
                                if (!var2) {
                                    _fun29601_ip = 194;
                                    continue _fun29601
                                }
                            case 188:
                                var2 = var1._registerWrapper;
                            case 194:
                                if (!var2) {
                                    _fun29601_ip = 230;
                                    continue _fun29601
                                }
                            case 197:
                                var3 = var1._registerWrapper;
                                var2 = {
                                    'name': 'stripe-js',
                                    'version': '7.3.1'
                                };
                                var4 = arg2;
                                var2.startTime = var4;
                                var2 = var3.bind(var1)(var2);
                            case 230:
                                return var1;
                            case 232:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0, var4, var3);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2 = function(arg0) { // Environment: var2
        _fun29602: for (var _fun29602_ip = 0;;) switch (_fun29602_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot11;
                if (!var0) {
                    _fun29602_ip = 77;
                    continue _fun29602
                }
            case 19:
                var0 = _closure1_slot0;
                if (!var0) {
                    _fun29602_ip = 77;
                    continue _fun29602
                }
            case 26:
                var4 = _closure1_slot10;
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var4 = global;
                var5 = var4.Object;
                var4 = var5.keys;
                var6 = var4.bind(var5)(var3);
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var1
                    _fun29603: for (var _fun29603_ip = 0;;) switch (_fun29603_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            if (!var0) {
                                _fun29603_ip = 49;
                                continue _fun29603
                            }
                        case 9:
                            var1 = _closure2_slot0;
                            var2 = var1[var4];
                            var3 = _closure1_slot0;
                            var6 = null;
                            var1 = undefined;
                            if (!(var6 !== var3)) {
                                _fun29603_ip = 45;
                                continue _fun29603
                            }
                        case 35:
                            var1 = undefined;
                            if (!(var1 !== var3)) {
                                _fun29603_ip = 45;
                                continue _fun29603
                            }
                        case 41:
                            var1 = var3[var4];
                        case 45:
                            var0 = var2 === var1;
                        case 49:
                            return var0;
                    }
                };
                var1 = true;
                var1 = var5.bind(var6)(var4, var1);
                if (var1) {
                    _fun29602_ip = 137;
                    continue _fun29602
                }
            case 77:
                var1 = _closure1_slot11;
                if (var1) {
                    _fun29602_ip = 101;
                    continue _fun29602
                }
            case 84:
                var4 = _closure1_slot10;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var _closure1_slot0 = var3;
                return var1;
            case 101:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = 'You cannot change load parameters after calling loadStripe';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 137:
                return var0;
        }
    };
    var0.setLoadParameters = var2;
    var1.loadStripe = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);