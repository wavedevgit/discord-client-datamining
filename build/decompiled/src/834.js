// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun8844: for (var _fun8844_ip = 0;;) switch (_fun8844_ip) {
            case 0:
                var4 = arg0;
                if (!var4) {
                    _fun8844_ip = 66;
                    continue _fun8844
                }
            case 6:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isString;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun8844_ip = 70;
                    continue _fun8844
                }
            case 45:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun8844_ip = 70;
                    continue _fun8844
                }
            case 66:
                var2 = undefined;
                return var2;
            case 70:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun8844_ip = 102;
                    continue _fun8844
                }
            case 91:
                var0 = _closure1_slot5;
                var0 = var0.bind(var1)(var4);
                _fun8844_ip = 123;
                continue _fun8844;
            case 102:
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot5;
                    var3 = undefined;
                    var2 = arg1;
                    var4 = var4.bind(var3)(var2);
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot2;
                        var0 = undefined;
                        var2 = arg0;
                        var1 = 2;
                        var2 = var3.bind(var0)(var2, var1);
                        var1 = 0;
                        var3 = var2[var1];
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = _closure3_slot0;
                        var1[var3] = var2;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 123:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.split;
        var1 = ',';
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun8848: for (var _fun8848_ip = 0;;) switch (_fun8848_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.indexOf;
                    var0 = '=';
                    var4 = var1.bind(var3)(var0);
                    var0 = -1;
                    if (!(var0 !== var4)) {
                        _fun8848_ip = 89;
                        continue _fun8848
                    }
                case 28:
                    var1 = var3.slice;
                    var0 = 0;
                    var0 = var1.bind(var3)(var0, var4);
                    var2 = new Array(2);
                    var2[0] = var0;
                    var1 = var3.slice;
                    var0 = 1;
                    var0 = var4 + var0;
                    var0 = var1.bind(var3)(var0);
                    var2[1] = var0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun8849: for (var _fun8849_ip = 0;;) switch (_fun8849_ip) {
                            case 0:
                                var0 = arg0;
                            case 3: // try_start_0
                                var1 = global;
                                var2 = var1.decodeURIComponent;
                                var1 = var0;
                                var0 = var1.trim;
                                var1 = var0.bind(var1)();
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 31: // try_end0
                                return var0;
                            case 33: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun8848_ip = 93;
                    continue _fun8848;
                case 89:
                    var0 = new Array(0);
                case 93:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun8850: for (var _fun8850_ip = 0;;) switch (_fun8850_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = arg1;
                    var1 = 2;
                    var3 = var4.bind(var3)(var2, var1);
                    var1 = 0;
                    var2 = var3[var1];
                    var1 = 1;
                    var1 = var3[var1];
                    var3 = var2;
                    if (!var3) {
                        _fun8850_ip = 46;
                        continue _fun8850
                    }
                case 43:
                    var3 = var1;
                case 46:
                    if (!var3) {
                        _fun8850_ip = 53;
                        continue _fun8850
                    }
                case 49:
                    var0[var2] = var1;
                case 53:
                    return var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var3 = function arg0() {
        _fun8851: for (var _fun8851_ip = 0;;) switch (_fun8851_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var3 = var0.Object;
                var1 = var3.keys;
                var1 = var1.bind(var3)(var2);
                var3 = var1.length;
                var1 = 0;
                if (!(var1 === var3)) {
                    _fun8851_ip = 36;
                    continue _fun8851
                }
            case 32:
                var1 = undefined;
                return var1;
            case 36:
                var1 = var0.Object;
                var0 = var1.entries;
                var3 = var0.bind(var1)(var2);
                var2 = var3.reduce;
                var1 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun8852: for (var _fun8852_ip = 0;;) switch (_fun8852_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot2;
                            var5 = undefined;
                            var0 = arg1;
                            var7 = 2;
                            var2 = var2.bind(var5)(var0, var7);
                            var6 = 0;
                            var9 = var2[var6];
                            var0 = 1;
                            var8 = var2[var0];
                            var2 = global;
                            var0 = var2.encodeURIComponent;
                            var12 = var0.bind(var5)(var9);
                            var0 = var2.encodeURIComponent;
                            var10 = var0.bind(var5)(var8);
                            var0 = var2.HermesInternal;
                            var4 = var0.concat;
                            var11 = '';
                            var0 = '=';
                            var10 = var4.bind(var11)(var12, var0, var10);
                            var4 = arg2;
                            var0 = var10;
                            if (!(var6 !== var4)) {
                                _fun8852_ip = 119;
                                continue _fun8852
                            }
                        case 97:
                            var4 = var2.HermesInternal;
                            var6 = var4.concat;
                            var4 = ',';
                            var0 = var6.bind(var11)(var1, var4, var10);
                        case 119:
                            var6 = var0.length;
                            var4 = 8192;
                            if (!(var6 > var4)) {
                                _fun8852_ip = 241;
                                continue _fun8852
                            }
                        case 134:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var7];
                            var4 = var6.bind(var5)(var4);
                            var4 = var4.DEBUG_BUILD;
                            var0 = var1;
                            if (!var4) {
                                _fun8852_ip = 241;
                                continue _fun8852
                            }
                        case 163:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 3;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var4 = var3.debug;
                            var3 = var4.warn;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var17 = 'Not adding key: ';
                            var15 = ' with val: ';
                            var13 = ' to baggage header due to exceeding baggage size limits.';
                            var16 = var9;
                            var14 = var8;
                            var2 = var17[var7](var16, var15, var14, var13, var12);
                            var2 = var3.bind(var4)(var2);
                            var0 = var1;
                        case 241:
                            return var0;
                    }
                };
                var0 = '';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var5 = /^sentry-/;
    var _closure1_slot3 = var5;
    var6 = 8192;
    var2.MAX_BAGGAGE_STRING_LENGTH = var6;
    var6 = 'sentry-';
    var2.SENTRY_BAGGAGE_KEY_PREFIX = var6;
    var2.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = var5;
    var5 = function arg0() {
        _fun8853: for (var _fun8853_ip = 0;;) switch (_fun8853_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = undefined;
                var1 = arg0;
                var4 = var2.bind(var0)(var1);
                if (var4) {
                    _fun8853_ip = 22;
                    continue _fun8853
                }
            case 20:
                return var0;
            case 22:
                var2 = global;
                var3 = var2.Object;
                var1 = var3.entries;
                var5 = var1.bind(var3)(var4);
                var4 = var5.reduce;
                var3 = function(arg0, arg1) { // Environment: var1
                    _fun8854: for (var _fun8854_ip = 0;;) switch (_fun8854_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = _closure1_slot2;
                            var4 = undefined;
                            var3 = arg1;
                            var2 = 2;
                            var3 = var5.bind(var4)(var3, var2);
                            var2 = 0;
                            var4 = var3[var2];
                            var2 = 1;
                            var2 = var3[var2];
                            var3 = var4.match;
                            var1 = _closure1_slot3;
                            var1 = var3.bind(var4)(var1);
                            if (!var1) {
                                _fun8854_ip = 72;
                                continue _fun8854
                            }
                        case 55:
                            var3 = var4.slice;
                            var1 = 7;
                            var1 = var3.bind(var4)(var1);
                            var0[var1] = var2;
                        case 72:
                            return var0;
                    }
                };
                var1 = {};
                var1 = var4.bind(var5)(var3, var1);
                var3 = var2.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var1);
                var3 = var2.length;
                var2 = 0;
                var2 = var3 > var2;
                var0 = undefined;
                if (!var2) {
                    _fun8853_ip = 97;
                    continue _fun8853
                }
            case 94:
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var2.baggageHeaderToDynamicSamplingContext = var5;
    var4 = function arg0() {
        _fun8855: for (var _fun8855_ip = 0;;) switch (_fun8855_ip) {
            case 0:
                var3 = arg0;
                if (var3) {
                    _fun8855_ip = 10;
                    continue _fun8855
                }
            case 6:
                var0 = undefined;
                return var0;
            case 10:
                var2 = _closure1_slot6;
                var0 = global;
                var1 = var0.Object;
                var0 = var1.entries;
                var4 = var0.bind(var1)(var3);
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun8856: for (var _fun8856_ip = 0;;) switch (_fun8856_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot2;
                            var3 = undefined;
                            var2 = arg1;
                            var1 = 2;
                            var2 = var4.bind(var3)(var2, var1);
                            var1 = 0;
                            var5 = var2[var1];
                            var1 = 1;
                            var2 = var2[var1];
                            if (!var2) {
                                _fun8856_ip = 73;
                                continue _fun8856
                            }
                        case 40:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var3 = '';
                            var1 = 'sentry-';
                            var1 = var4.bind(var3)(var1, var5);
                            var0[var1] = var2;
                        case 73:
                            return var0;
                    }
                };
                var0 = {};
                var1 = var3.bind(var4)(var1, var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.dynamicSamplingContextToSentryBaggageHeader = var4;
    var2.objectToBaggageHeader = var3;
    var2.parseBaggageHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 827, 823, 824]);