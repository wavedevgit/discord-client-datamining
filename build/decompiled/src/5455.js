// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = 0;
    var3 = var5[var4];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var5 = var5[var3];
    var3 = require;
    var3 = var3.bind(var0)(var5);
    var5 = var3.processColor;
    var3 = /\s+/;
    var _closure1_slot3 = var3;
    var3 = {};
    var3.type = var4;
    var4 = 'black';
    var4 = var5.bind(var0)(var4);
    var3.payload = var4;
    var _closure1_slot4 = var3;
    var3 = function(arg0) { // Original name: extractFeFlood, environment: var1
        _fun48422: for (var _fun48422_ip = 0;;) switch (_fun48422_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var6 = var1.floodColor;
                var3 = var1.floodOpacity;
                var1 = null;
                if (!(var1 != var6)) {
                    _fun48422_ip = 37;
                    continue _fun48422
                }
            case 23:
                if (var6) {
                    _fun48422_ip = 46;
                    continue _fun48422
                }
            case 26:
                var4 = 'number';
                var2 = typeof var6;
                if (!(var4 !== var2)) {
                    _fun48422_ip = 46;
                    continue _fun48422
                }
            case 37:
                var2 = _closure1_slot4;
                _fun48422_ip = 76;
                continue _fun48422;
            case 46:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 2;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var2 = var4.bind(var5)(var6);
            case 76:
                var0.floodColor = var2;
                if (!(var1 != var3)) {
                    _fun48422_ip = 122;
                    continue _fun48422
                }
            case 86:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.bind(var2)(var3);
                var0.floodOpacity = var1;
            case 122:
                return var0;
        }
    };
    var2.default = var3;
    var3 = function(arg0) { // Original name: extractFilter, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.x;
        var0.x = var2;
        var2 = var1.y;
        var0.y = var2;
        var2 = var1.width;
        var0.width = var2;
        var2 = var1.height;
        var0.height = var2;
        var1 = var1.result;
        var0.result = var1;
        return var0;
    };
    var2.extractFilter = var3;
    var3 = function(arg0) { // Original name: extractIn, environment: var1
        _fun48424: for (var _fun48424_ip = 0;;) switch (_fun48424_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.in;
                if (var0) {
                    _fun48424_ip = 16;
                    continue _fun48424
                }
            case 12:
                var0 = {};
                _fun48424_ip = 32;
                continue _fun48424;
            case 16:
                var1 = {};
                var2 = var2.in;
                var1.in1 = var2;
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var2.extractIn = var3;
    var3 = function(arg0) { // Original name: extractFeBlend, environment: var1
        _fun48425: for (var _fun48425_ip = 0;;) switch (_fun48425_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.in2;
                if (!var2) {
                    _fun48425_ip = 26;
                    continue _fun48425
                }
            case 14:
                var2 = var1.in2;
                var0.in2 = var2;
            case 26:
                var2 = var1.mode;
                if (!var2) {
                    _fun48425_ip = 45;
                    continue _fun48425
                }
            case 34:
                var1 = var1.mode;
                var0.mode = var1;
            case 45:
                return var0;
        }
    };
    var2.extractFeBlend = var3;
    var3 = function(arg0) { // Original name: extractFeColorMatrix, environment: var1
        _fun48426: for (var _fun48426_ip = 0;;) switch (_fun48426_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var1.values;
                var3 = undefined;
                if (!(var3 !== var4)) {
                    _fun48426_ip = 209;
                    continue _fun48426
                }
            case 21:
                var3 = global;
                var6 = var3.Array;
                var5 = var6.isArray;
                var4 = var1.values;
                var5 = var5.bind(var6)(var4);
                var4 = var1.values;
                if (var5) {
                    _fun48426_ip = 188;
                    continue _fun48426
                }
            case 55:
                var6 = 'number';
                var5 = typeof var4;
                if (!(var6 !== var5)) {
                    _fun48426_ip = 167;
                    continue _fun48426
                }
            case 66:
                var5 = var1.values;
                var6 = 'string';
                var5 = typeof var5;
                if (!(var6 !== var5)) {
                    _fun48426_ip = 106;
                    continue _fun48426
                }
            case 82:
                var7 = var3.console;
                var6 = var7.warn;
                var5 = 'Invalid value for FeColorMatrix `values` prop';
                var5 = var6.bind(var7)(var5);
                _fun48426_ip = 209;
                continue _fun48426;
            case 106:
                var7 = var1.values;
                var6 = var7.split;
                var5 = _closure1_slot3;
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var3 = var3.parseFloat;
                var6 = var5.bind(var6)(var3);
                var5 = var6.filter;
                var3 = function(arg0) { // Environment: var2
                    var0 = global;
                    var2 = var0.isNaN;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var0.values = var3;
                _fun48426_ip = 209;
                continue _fun48426;
            case 167:
                var5 = var1.values;
                var3 = new Array(1);
                var3[0] = var5;
                var0.values = var3;
                _fun48426_ip = 209;
                continue _fun48426;
            case 188:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun48427: for (var _fun48427_ip = 0;;) switch (_fun48427_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = 'number';
                            var1 = typeof var3;
                            var0 = var3;
                            if (!(var2 !== var1)) {
                                _fun48427_ip = 32;
                                continue _fun48427
                            }
                        case 17:
                            var1 = global;
                            var2 = var1.parseFloat;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 32:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var0.values = var2;
            case 209:
                var2 = var1.type;
                if (!var2) {
                    _fun48426_ip = 228;
                    continue _fun48426
                }
            case 217:
                var1 = var1.type;
                var0.type = var1;
            case 228:
                return var0;
        }
    };
    var2.extractFeColorMatrix = var3;
    var3 = function(arg0) { // Original name: extractFeComposite, environment: var1
        _fun48429: for (var _fun48429_ip = 0;;) switch (_fun48429_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = {};
                var3 = var2.in;
                if (var3) {
                    _fun48429_ip = 24;
                    continue _fun48429
                }
            case 20:
                var3 = '';
            case 24:
                var0.in1 = var3;
                var3 = var2.in2;
                if (var3) {
                    _fun48429_ip = 42;
                    continue _fun48429
                }
            case 38:
                var3 = '';
            case 42:
                var0.in2 = var3;
                var2 = var2.operator;
                if (var2) {
                    _fun48429_ip = 60;
                    continue _fun48429
                }
            case 56:
                var2 = 'over';
            case 60:
                var0.operator1 = var2;
                var _closure2_slot1 = var0;
                var3 = ['k1', 'k2', 'k3', 'k4'];
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun48430: for (var _fun48430_ip = 0;;) switch (_fun48430_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var2 = var0[var3];
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun48430_ip = 54;
                                continue _fun48430
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var4 = global;
                            var4 = var4.Number;
                            var1 = _closure2_slot0;
                            var1 = var1[var3];
                            var1 = var4.bind(var0)(var1);
                            if (var1) {
                                _fun48430_ip = 50;
                                continue _fun48430
                            }
                        case 48:
                            var1 = 0;
                        case 50:
                            var2[var3] = var1;
                        case 54:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.extractFeComposite = var3;
    var3 = function(arg0) { // Original name: extractFeGaussianBlur, environment: var1
        _fun48431: for (var _fun48431_ip = 0;;) switch (_fun48431_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = global;
                var5 = var2.Array;
                var4 = var5.isArray;
                var3 = var1.stdDeviation;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun48431_ip = 298;
                    continue _fun48431
                }
            case 35:
                var3 = var1.stdDeviation;
                var6 = 'string';
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun48431_ip = 82;
                    continue _fun48431
                }
            case 52:
                var7 = var1.stdDeviation;
                var5 = var7.match;
                var4 = _closure1_slot3;
                var4 = var5.bind(var7)(var4);
                if (var4) {
                    _fun48431_ip = 217;
                    continue _fun48431
                }
            case 82:
                var4 = var1.stdDeviation;
                var5 = 'number';
                var4 = typeof var4;
                var4 = var5 === var4;
                if (var4) {
                    _fun48431_ip = 148;
                    continue _fun48431
                }
            case 102:
                var5 = var1.stdDeviation;
                var5 = typeof var5;
                var5 = var6 === var5;
                if (!var5) {
                    _fun48431_ip = 145;
                    continue _fun48431
                }
            case 118:
                var8 = var1.stdDeviation;
                var7 = var8.match;
                var6 = _closure1_slot3;
                var6 = var7.bind(var8)(var6);
                var5 = !var6;
            case 145:
                var4 = var5;
            case 148:
                if (!var4) {
                    _fun48431_ip = 369;
                    continue _fun48431
                }
            case 154:
                var5 = var2.Number;
                var4 = var1.stdDeviation;
                var6 = undefined;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun48431_ip = 178;
                    continue _fun48431
                }
            case 176:
                var4 = 0;
            case 178:
                var0.stdDeviationX = var4;
                var5 = var2.Number;
                var4 = var1.stdDeviation;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun48431_ip = 206;
                    continue _fun48431
                }
            case 204:
                var4 = 0;
            case 206:
                var0.stdDeviationY = var4;
                _fun48431_ip = 369;
                continue _fun48431;
            case 217:
                var5 = var1.stdDeviation;
                var4 = var5.split;
                var3 = _closure1_slot3;
                var7 = var4.bind(var5)(var3);
                var5 = var2.Number;
                var4 = 0;
                var3 = var7[var4];
                var6 = undefined;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun48431_ip = 261;
                    continue _fun48431
                }
            case 259:
                var3 = 0;
            case 261:
                var0.stdDeviationX = var3;
                var5 = var2.Number;
                var3 = 1;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun48431_ip = 290;
                    continue _fun48431
                }
            case 288:
                var3 = 0;
            case 290:
                var0.stdDeviationY = var3;
                _fun48431_ip = 369;
                continue _fun48431;
            case 298:
                var6 = var2.Number;
                var4 = var1.stdDeviation;
                var3 = 0;
                var4 = var4[var3];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                if (var4) {
                    _fun48431_ip = 328;
                    continue _fun48431
                }
            case 326:
                var4 = 0;
            case 328:
                var0.stdDeviationX = var4;
                var4 = var2.Number;
                var6 = var1.stdDeviation;
                var2 = 1;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun48431_ip = 363;
                    continue _fun48431
                }
            case 361:
                var2 = 0;
            case 363:
                var0.stdDeviationY = var2;
            case 369:
                var2 = var1.edgeMode;
                if (!var2) {
                    _fun48431_ip = 390;
                    continue _fun48431
                }
            case 378:
                var1 = var1.edgeMode;
                var0.edgeMode = var1;
            case 390:
                return var0;
        }
    };
    var2.extractFeGaussianBlur = var3;
    var1 = function(arg0, arg1) { // Original name: extractFeMerge, environment: var1
        _fun48432: for (var _fun48432_ip = 0;;) switch (_fun48432_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = new Array(0);
                var3 = var2.children;
                if (var3) {
                    _fun48432_ip = 30;
                    continue _fun48432
                }
            case 24:
                var4 = new Array(0);
                _fun48432_ip = 64;
                continue _fun48432;
            case 30:
                var3 = _closure1_slot2;
                var5 = var3.Children;
                var3 = var5.map;
                var2 = var2.children;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.cloneElement;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.parent = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = var3.bind(var5)(var2, var0);
            case 64:
                var3 = var4.length;
                var2 = 0;
                var5 = var2 < var3;
                var0 = '';
                if (!var5) {
                    _fun48432_ip = 120;
                    continue _fun48432
                }
            case 82:
                var5 = var4[var2];
                var5 = var5.props;
                var6 = var5.in;
                var5 = var1.push;
                if (var6) {
                    _fun48432_ip = 108;
                    continue _fun48432
                }
            case 105:
                var6 = var0;
            case 108:
                var5 = var5.bind(var1)(var6);
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun48432_ip = 82;
                    continue _fun48432
                }
            case 120:
                var0 = {};
                var0.nodes = var1;
                return var0;
        }
    };
    var2.extractFeMerge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5435, 5423]);