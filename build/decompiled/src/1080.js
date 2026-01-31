// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = var0.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var0 = var0.WeakMap;
    var5 = var0.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var0
        }
    });
    var13 = var5;
    var0 = new var13[var0](var12);
    var0 = var0 instanceof Object ? var0 : var5;
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _reportingObserverIntegration, environment: var1
        _fun11027: for (var _fun11027_ip = 0;;) switch (_fun11027_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = function(arg0) { // Original name: handler, environment: var1
                    _fun11028: for (var _fun11028_ip = 0;;) switch (_fun11028_ip) {
                        case 0:
                            var0 = undefined;
                            var3 = undefined;
                            var4 = _closure1_slot2;
                            var2 = var4.has;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 0;
                            var1 = var6[var1];
                            var5 = var5.bind(var0)(var1);
                            var1 = var5.getClient;
                            var1 = var1.bind(var5)();
                            var1 = var2.bind(var4)(var1);
                            if (!var1) {
                                _fun11028_ip = 94;
                                continue _fun11028
                            }
                        case 53:
                            var3 = function(arg0) { // Original name: _loop, environment: var1
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 0;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.withScope;
                                var1 = function(arg0) { // Environment: var1
                                    _fun11030: for (var _fun11030_ip = 0;;) switch (_fun11030_ip) {
                                        case 0:
                                            var8 = arg0;
                                            var4 = var8.setExtra;
                                            var2 = _closure4_slot0;
                                            var3 = var2.url;
                                            var1 = 'url';
                                            var1 = var4.bind(var8)(var1, var3);
                                            var6 = var2.type;
                                            var1 = global;
                                            var3 = var1.HermesInternal;
                                            var5 = var3.concat;
                                            var4 = 'ReportingObserver [';
                                            var3 = ']';
                                            var7 = var5.bind(var4)(var6, var3);
                                            var3 = var2.body;
                                            var2 = 'No details available';
                                            var6 = var2;
                                            if (!var3) {
                                                _fun11030_ip = 275;
                                                continue _fun11030
                                            }
                                        case 85:
                                            var5 = {};
                                            var3 = _closure4_slot0;
                                            var10 = var3.body;
                                            for (var3 in var10)
                                                case 104: {
                                                    case 113: var13 = var3;
                                                    var12 = _closure4_slot0;
                                                    var12 = var12.body;
                                                    var12 = var12[var13];
                                                    var5[var13] = var12;
                                                    _fun11030_ip = 104;
                                                    continue _fun11030;
                                                }
                                        case 135:
                                            var4 = var8.setExtra;
                                            var3 = 'body';
                                            var3 = var4.bind(var8)(var3, var5);
                                            var3 = _closure4_slot0;
                                            var4 = var3.type;
                                            var3 = 'crash';
                                            if (!(var3 !== var4)) {
                                                _fun11030_ip = 193;
                                                continue _fun11030
                                            }
                                        case 168:
                                            var3 = _closure4_slot0;
                                            var3 = var3.body;
                                            var3 = var3.message;
                                            if (var3) {
                                                _fun11030_ip = 188;
                                                continue _fun11030
                                            }
                                        case 185:
                                            var3 = var2;
                                        case 188:
                                            var6 = var3;
                                            _fun11030_ip = 275;
                                            continue _fun11030;
                                        case 193:
                                            var0 = _closure4_slot0;
                                            var0 = var0.body;
                                            var3 = var0.crashId;
                                            if (var3) {
                                                _fun11030_ip = 215;
                                                continue _fun11030
                                            }
                                        case 211:
                                            var3 = '';
                                        case 215:
                                            var4 = new Array(2);
                                            var4[0] = var3;
                                            var0 = var0.reason;
                                            if (var0) {
                                                _fun11030_ip = 236;
                                                continue _fun11030
                                            }
                                        case 232:
                                            var0 = '';
                                        case 236:
                                            var4[1] = var0;
                                            var3 = var4.join;
                                            var0 = ' ';
                                            var3 = var3.bind(var4)(var0);
                                            var0 = var3.trim;
                                            var0 = var0.bind(var3)();
                                            if (var0) {
                                                _fun11030_ip = 272;
                                                continue _fun11030
                                            }
                                        case 269:
                                            var0 = var2;
                                        case 272:
                                            var6 = var0;
                                        case 275:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var0 = 0;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.captureMessage;
                                            var1 = var1.HermesInternal;
                                            var5 = var1.concat;
                                            var4 = '';
                                            var1 = ': ';
                                            var1 = var5.bind(var4)(var7, var1, var6);
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = arg0;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                        case 66:
                            var5 = var1().value;
                            var4 = var2;
                            if (!(var4 !== var0)) {
                                _fun11028_ip = 94;
                                continue _fun11028
                            }
                        case 77: // try_start_0
                            var4 = var3;
                            var4 = var4.bind(var0)(var5);
                        case 85: // try_end0
                            _fun11028_ip = 66;
                            continue _fun11028;
                        case 87: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 94:
                            return var0;
                    }
                };
                var _closure2_slot1 = var0;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun11027_ip = 32;
                    continue _fun11027
                }
            case 24:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun11027_ip = 36;
                    continue _fun11027
                }
            case 32:
                var0 = {};
                _fun11027_ip = 40;
                continue _fun11027;
            case 36:
                var0 = arguments[var2];
            case 40:
                var0 = var0.types;
                if (var0) {
                    _fun11027_ip = 59;
                    continue _fun11027
                }
            case 49:
                var0 = ['crash', 'deprecation', 'intervention'];
            case 59:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'ReportingObserver';
                var0.name = var2;
                var2 = function() { // Original name: setupOnce, environment: var1
                    _fun11031: for (var _fun11031_ip = 0;;) switch (_fun11031_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var3 = 0;
                            var2 = var0[var3];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.supportsReportingObserver;
                            var2 = var2.bind(var4)();
                            if (!var2) {
                                _fun11031_ip = 124;
                                continue _fun11031
                            }
                        case 37:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var3];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.GLOBAL_OBJ;
                            var4 = var1.ReportingObserver;
                            var7 = _closure2_slot1;
                            var1 = {};
                            var5 = true;
                            var1.buffered = var5;
                            var2 = _closure2_slot0;
                            var1.types = var2;
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = var2;
                            var6 = var1;
                            var1 = new var8[var4](var7, var6, var5);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = var2.observe;
                            var1 = var1.bind(var2)();
                        case 124:
                            return var0;
                    }
                };
                var0.setupOnce = var2;
                var1 = function(arg0) { // Original name: setup, environment: var1
                    var3 = _closure1_slot2;
                    var2 = var3.set;
                    var1 = arg0;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.reportingObserverIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);