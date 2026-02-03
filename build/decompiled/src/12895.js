// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function arg0() {
        _fun98945: for (var _fun98945_ip = 0;;) switch (_fun98945_ip) {
            case 0:
                var4 = arg0;
                if (!var4) {
                    _fun98945_ip = 66;
                    continue _fun98945
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
                    _fun98945_ip = 70;
                    continue _fun98945
                }
            case 45:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun98945_ip = 70;
                    continue _fun98945
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
                    _fun98945_ip = 102;
                    continue _fun98945
                }
            case 91:
                var0 = _closure1_slot5;
                var0 = var0.bind(var1)(var4);
                _fun98945_ip = 125;
                continue _fun98945;
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
            case 125:
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
            var2 = arg0;
            var1 = var2.split;
            var0 = '=';
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = global;
                var2 = var0.decodeURIComponent;
                var0 = var1.trim;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun98951: for (var _fun98951_ip = 0;;) switch (_fun98951_ip) {
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
                        _fun98951_ip = 46;
                        continue _fun98951
                    }
                case 43:
                    var3 = var1;
                case 46:
                    if (!var3) {
                        _fun98951_ip = 53;
                        continue _fun98951
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
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = /^sentry-/;
    var _closure1_slot3 = var4;
    var5 = 'baggage';
    var2.BAGGAGE_HEADER_NAME = var5;
    var5 = 8192;
    var2.MAX_BAGGAGE_STRING_LENGTH = var5;
    var5 = 'sentry-';
    var2.SENTRY_BAGGAGE_KEY_PREFIX = var5;
    var2.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = var4;
    var4 = function arg0() {
        _fun98952: for (var _fun98952_ip = 0;;) switch (_fun98952_ip) {
            case 0:
                var2 = _closure1_slot4;
                var0 = undefined;
                var1 = arg0;
                var4 = var2.bind(var0)(var1);
                if (var4) {
                    _fun98952_ip = 22;
                    continue _fun98952
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
                    _fun98953: for (var _fun98953_ip = 0;;) switch (_fun98953_ip) {
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
                                _fun98953_ip = 72;
                                continue _fun98953
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
                    _fun98952_ip = 99;
                    continue _fun98952
                }
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var2.baggageHeaderToDynamicSamplingContext = var4;
    var3 = function arg0() {
        _fun98954: for (var _fun98954_ip = 0;;) switch (_fun98954_ip) {
            case 0:
                var3 = arg0;
                if (var3) {
                    _fun98954_ip = 12;
                    continue _fun98954
                }
            case 8:
                var1 = undefined;
                return var1;
            case 12:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.entries;
                var4 = var1.bind(var2)(var3);
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun98957: for (var _fun98957_ip = 0;;) switch (_fun98957_ip) {
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
                                _fun98957_ip = 73;
                                continue _fun98957
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
                var1 = {};
                var2 = var3.bind(var4)(var2, var1);
                var1 = function arg0() {
                    _fun98955: for (var _fun98955_ip = 0;;) switch (_fun98955_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = global;
                            var3 = var0.Object;
                            var1 = var3.keys;
                            var1 = var1.bind(var3)(var2);
                            var3 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun98955_ip = 76;
                                continue _fun98955
                            }
                        case 32:
                            var1 = var0.Object;
                            var0 = var1.entries;
                            var3 = var0.bind(var1)(var2);
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1, arg2) { // Environment: var0
                                _fun98956: for (var _fun98956_ip = 0;;) switch (_fun98956_ip) {
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
                                            _fun98956_ip = 119;
                                            continue _fun98956
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
                                            _fun98956_ip = 241;
                                            continue _fun98956
                                        }
                                    case 134:
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var4 = var4[var7];
                                        var4 = var6.bind(var5)(var4);
                                        var4 = var4.DEBUG_BUILD;
                                        var0 = var1;
                                        if (!var4) {
                                            _fun98956_ip = 241;
                                            continue _fun98956
                                        }
                                    case 163:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var3 = 3;
                                        var3 = var6[var3];
                                        var3 = var4.bind(var5)(var3);
                                        var4 = var3.logger;
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
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.dynamicSamplingContextToSentryBaggageHeader = var3;
    var2.parseBaggageHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 12860, 12868, 12867]);