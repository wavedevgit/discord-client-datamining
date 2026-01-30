// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0) { // Original name: getFormattedString, environment: var3
        _fun46127: for (var _fun46127_ip = 0;;) switch (_fun46127_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.js;
                var6 = null;
                var1 = var6 == var0;
                var11 = undefined;
                if (var1) {
                    _fun46127_ip = 26;
                    continue _fun46127
                }
            case 20:
                var11 = var0.averageFPS;
            case 26:
                var0 = var3.js;
                var1 = var6 == var0;
                var8 = undefined;
                if (var1) {
                    _fun46127_ip = 47;
                    continue _fun46127
                }
            case 41:
                var8 = var0.minFPS;
            case 47:
                var0 = var3.js;
                var1 = var6 == var0;
                var7 = undefined;
                if (var1) {
                    _fun46127_ip = 68;
                    continue _fun46127
                }
            case 62:
                var7 = var0.maxFPS;
            case 68:
                var2 = global;
                var0 = var2.HermesInternal;
                var5 = var0.concat;
                var18 = 'Results:\n\nJS FPS: Avg: ';
                var16 = ' | Min: ';
                var14 = ' | Max: ';
                var9 = '\n\n';
                var17 = var11;
                var15 = var8;
                var13 = var7;
                var12 = var9;
                var4 = var18[var5](var17, var16, var15, var14, var13, var12, var11);
                var5 = var3.blankArea;
                var1 = '';
                var0 = var1;
                if (!var5) {
                    _fun46127_ip = 215;
                    continue _fun46127
                }
            case 137:
                var5 = var3.blankArea;
                var7 = var6 == var5;
                var8 = undefined;
                if (var7) {
                    _fun46127_ip = 158;
                    continue _fun46127
                }
            case 152:
                var8 = var5.maxBlankArea;
            case 158:
                var5 = var3.blankArea;
                var6 = var6 == var5;
                var10 = undefined;
                if (var6) {
                    _fun46127_ip = 179;
                    continue _fun46127
                }
            case 173:
                var10 = var5.cumulativeBlankArea;
            case 179:
                var5 = var2.HermesInternal;
                var7 = var5.concat;
                var18 = 'Blank Area: Max: ';
                var16 = ' Cumulative: ';
                var17 = var8;
                var15 = var10;
                var14 = var9;
                var0 = var18[var7](var17, var16, var15, var14, var13);
            case 215:
                var0 = var4 + var0;
                var4 = var3.suggestions;
                var5 = var4.length;
                var4 = 0;
                var4 = var5 > var4;
                if (!var4) {
                    _fun46127_ip = 298;
                    continue _fun46127
                }
            case 239:
                var5 = var3.suggestions;
                var4 = var5.map;
                var3 = function(arg0, arg1) { // Environment: var3
                    var1 = arg1;
                    var0 = 1;
                    var4 = var1 + var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var2 = '';
                    var1 = '. ';
                    var0 = arg0;
                    var0 = var3.bind(var2)(var4, var1, var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.join;
                var3 = '\n';
                var4 = var4.bind(var5)(var3);
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Suggestions:\n\n';
                var1 = var3.bind(var2)(var4);
            case 298:
                var0 = var0 + var1;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = function(arg0, arg1, arg2) { // Original name: runScrollBenchmark, environment: var3
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() { // Original name: _runScrollBenchmark, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun46132: for (var _fun46132_ip = 0;;) switch (_fun46132_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var10 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46132_ip = 265;
                            continue _fun46132
                        }
                    case 21:
                        var _closure4_slot0 = var2;
                        var3 = undefined;
                        var _closure4_slot1 = var3;
                        var4 = var2.current;
                        if (!var4) {
                            _fun46132_ip = 256;
                            continue _fun46132
                        }
                    case 42:
                        var4 = var2.current;
                        var4 = var4.props;
                        var4 = var4.horizontal;
                        _closure4_slot1 = var4;
                        var2 = var2.current;
                        var5 = var2.recyclerlistview_unsafe;
                        if (!var5) {
                            _fun46132_ip = 256;
                            continue _fun46132
                        }
                    case 79:
                        var2 = var5.getRenderedSize;
                        var2 = var2.bind(var5)();
                        var4 = var5.getContentDimension;
                        var4 = var4.bind(var5)();
                        var6 = var4.width;
                        var5 = var2.width;
                        var8 = var6 - var5;
                        var4 = var4.height;
                        var2 = var2.height;
                        var7 = var4 - var2;
                        var6 = function(arg0, arg1) { // Original name: scrollNow, environment: var1
                            _fun46133: for (var _fun46133_ip = 0;;) switch (_fun46133_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = arg1;
                                    var0 = _closure4_slot0;
                                    var2 = var0.current;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun46133_ip = 59;
                                        continue _fun46133
                                    }
                                case 24:
                                    var1 = var2.scrollToOffset;
                                    var0 = {};
                                    var5 = _closure4_slot1;
                                    if (!var5) {
                                        _fun46133_ip = 42;
                                        continue _fun46133
                                    }
                                case 39:
                                    var3 = var4;
                                case 42:
                                    var0.offset = var3;
                                    var3 = false;
                                    var0.animated = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 59:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var11 = 4;
                        var1 = var1[var11];
                        var4 = var4.bind(var3)(var1);
                        var1 = var4.autoScroll;
                        var19 = var4;
                        var18 = var6;
                        var17 = 0;
                        var16 = 0;
                        var15 = var8;
                        var14 = var7;
                        var13 = var9;
                        var12 = var10;
                        var1 = var19[var1](var18, var17, var16, var15, var14, var13, var12, var11);
                        SaveGenerator(address = 191);
                    case 189:
                        return var1;
                    case 191:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46132_ip = 262;
                            continue _fun46132
                        }
                    case 197:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var11];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.autoScroll;
                        var19 = var4;
                        var18 = var6;
                        var17 = var8;
                        var16 = var7;
                        var15 = 0;
                        var14 = 0;
                        var13 = var9;
                        var12 = var10;
                        var2 = var19[var2](var18, var17, var16, var15, var14, var13, var12, var11);
                        SaveGenerator(address = 250);
                    case 248:
                        return var2;
                    case 250:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46132_ip = 259;
                            continue _fun46132
                        }
                    case 256:
                        return var3;
                    case 259:
                        return var2;
                    case 262:
                        return var1;
                    case 265:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var3 = function(arg0, arg1) { // Original name: useBenchmark, environment: var3
        _fun46134: for (var _fun46134_ip = 0;;) switch (_fun46134_ip) {
            case 0:
                var8 = arg0;
                var4 = undefined;
                var2 = undefined;
                var _closure2_slot0 = var8;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arguments.length;
                var6 = 2;
                if (!(var1 > var6)) {
                    _fun46134_ip = 38;
                    continue _fun46134
                }
            case 30:
                var1 = arguments[var6];
                if (!(var4 === var1)) {
                    _fun46134_ip = 42;
                    continue _fun46134
                }
            case 38:
                var1 = {};
                _fun46134_ip = 46;
                continue _fun46134;
            case 42:
                var1 = arguments[var6];
            case 46:
                var _closure2_slot2 = var1;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var7 = var5.bind(var4)(var3);
                var5 = var7.useBlankAreaTracker;
                var3 = {};
                var1 = var1.sumNegativeBlankAreaValues;
                var3.sumNegativeValues = var1;
                var1 = 0;
                var3.startDelayInMs = var1;
                var5 = var5.bind(var7)(var8, var4, var3);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var5, var6);
                var1 = var3[var1];
                var _closure2_slot3 = var1;
                var1 = 1;
                var1 = var3[var1];
                var3 = _closure1_slot4;
                var2 = function() { // Environment: var0
                    _fun46135: for (var _fun46135_ip = 0;;) switch (_fun46135_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var1 = var4[var1];
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.Cancellable;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var11 = var3;
                            var1 = new var11[var1](var10);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var _closure3_slot0 = var1;
                            var1 = new Array(0);
                            var _closure3_slot1 = var1;
                            var3 = _closure2_slot0;
                            var3 = var3.current;
                            if (!var3) {
                                _fun46135_ip = 168;
                                continue _fun46135
                            }
                        case 80:
                            var3 = global;
                            var6 = var3.Number;
                            var5 = _closure2_slot0;
                            var5 = var5.current;
                            var5 = var5.props;
                            var7 = var5.data;
                            var5 = null;
                            var8 = var5 == var7;
                            var5 = undefined;
                            if (var8) {
                                _fun46135_ip = 123;
                                continue _fun46135
                            }
                        case 118:
                            var5 = var7.length;
                        case 123:
                            var6 = var6.bind(var4)(var5);
                            var5 = 0;
                            if (!(!(var6 > var5))) {
                                _fun46135_ip = 168;
                                continue _fun46135
                            }
                        case 134:
                            var6 = var3.Error;
                            var3 = var6.prototype;
                            var5 = Object.create(var3, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var10 = 'Data is empty, cannot run benchmark';
                            var11 = var5;
                            var3 = new var11[var6](var10, var9);
                            var3 = var3 instanceof Object ? var3 : var5;
                            throw var3;
                        case 168:
                            var3 = global;
                            var3 = var3.setTimeout;
                            var5 = _closure1_slot2;
                            var2 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun46137: for (var _fun46137_ip = 0;;) switch (_fun46137_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun46137_ip = 420;
                                                continue _fun46137
                                            }
                                        case 10:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var1 = 5;
                                            var1 = var2[var1];
                                            var2 = undefined;
                                            var1 = var3.bind(var2)(var1);
                                            var1 = var1.JSFPSMonitor;
                                            var3 = var1.prototype;
                                            var3 = Object.create(var3, {
                                                constructor: {
                                                    value: var1
                                                }
                                            });
                                            var21 = var3;
                                            var1 = new var21[var1](var20);
                                            var7 = var1 instanceof Object ? var1 : var3;
                                            var1 = var7.startTracking;
                                            var1 = var1.bind(var7)();
                                            var1 = _closure2_slot2;
                                            var1 = var1.repeatCount;
                                            if (var1) {
                                                _fun46137_ip = 90;
                                                continue _fun46137
                                            }
                                        case 87:
                                            var1 = 1;
                                        case 90:
                                            var13 = 0;
                                            var1 = var13 < var1;
                                            var9 = 1;
                                            var8 = 0;
                                            if (!var1) {
                                                _fun46137_ip = 178;
                                                continue _fun46137
                                            }
                                        case 107:
                                            var11 = _closure1_slot6;
                                            var10 = _closure2_slot0;
                                            var6 = _closure3_slot0;
                                            var1 = _closure2_slot2;
                                            var1 = var1.speedMultiplier;
                                            if (var1) {
                                                _fun46137_ip = 135;
                                                continue _fun46137
                                            }
                                        case 132:
                                            var1 = var9;
                                        case 135:
                                            var1 = var11.bind(var2)(var10, var6, var1);
                                            SaveGenerator(address = 146);
                                        case 144:
                                            return var1;
                                        case 146:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                            if (var6) {
                                                _fun46137_ip = 417;
                                                continue _fun46137
                                            }
                                        case 155:
                                            var8 = var8 + 1;
                                            var6 = _closure2_slot2;
                                            var6 = var6.repeatCount;
                                            if (var6) {
                                                _fun46137_ip = 174;
                                                continue _fun46137
                                            }
                                        case 171:
                                            var6 = var9;
                                        case 174:
                                            if (var8 < var6) {
                                                _fun46137_ip = 107;
                                                continue _fun46137
                                            }
                                        case 178:
                                            var6 = var7.stopAndGetData;
                                            var8 = var6.bind(var7)();
                                            var7 = var8.averageFPS;
                                            var6 = 35;
                                            if (!(var7 < var6)) {
                                                _fun46137_ip = 221;
                                                continue _fun46137
                                            }
                                        case 201:
                                            var9 = _closure3_slot1;
                                            var7 = var9.push;
                                            var6 = 'Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any';
                                            var6 = var7.bind(var9)(var6);
                                        case 221:
                                            var9 = _closure2_slot0;
                                            var6 = _closure3_slot1;
                                            var7 = function(arg0, arg1) { // Original name: computeSuggestions, environment: var7
                                                _fun46138: for (var _fun46138_ip = 0;;) switch (_fun46138_ip) {
                                                    case 0:
                                                        var6 = arg0;
                                                        var2 = arg1;
                                                        var0 = var6.current;
                                                        if (!var0) {
                                                            _fun46138_ip = 396;
                                                            continue _fun46138
                                                        }
                                                    case 19:
                                                        var0 = var6.current;
                                                        var0 = var0.props;
                                                        var0 = var0.data;
                                                        var1 = var0.length;
                                                        var0 = 200;
                                                        if (!(var1 < var0)) {
                                                            _fun46138_ip = 62;
                                                            continue _fun46138
                                                        }
                                                    case 46:
                                                        var1 = var2.push;
                                                        var0 = "Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.";
                                                        var0 = var1.bind(var2)(var0);
                                                    case 62:
                                                        var3 = _closure1_slot0;
                                                        var1 = _closure1_slot1;
                                                        var0 = 6;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var3 = var3.bind(var0)(var1);
                                                        var1 = var3.roundToDecimalPlaces;
                                                        var0 = var6.current;
                                                        var0 = var0.firstItemOffset;
                                                        var8 = 0;
                                                        var4 = var1.bind(var3)(var0, var8);
                                                        var0 = var6.current;
                                                        var0 = var0.props;
                                                        var0 = var0.estimatedFirstItemOffset;
                                                        if (var0) {
                                                            _fun46138_ip = 133;
                                                            continue _fun46138
                                                        }
                                                    case 131:
                                                        var0 = 0;
                                                    case 133:
                                                        if (!(var0 !== var4)) {
                                                            _fun46138_ip = 171;
                                                            continue _fun46138
                                                        }
                                                    case 137:
                                                        var1 = var2.push;
                                                        var0 = global;
                                                        var0 = var0.HermesInternal;
                                                        var3 = var0.concat;
                                                        var0 = 'estimatedFirstItemOffset can be set to ';
                                                        var0 = var3.bind(var0)(var4);
                                                        var0 = var1.bind(var2)(var0);
                                                    case 171:
                                                        var0 = var6.current;
                                                        var0 = var0.recyclerlistview_unsafe;
                                                        var _closure6_slot0 = var0;
                                                        var1 = var6.current;
                                                        var1 = var1.props;
                                                        var1 = var1.horizontal;
                                                        var _closure6_slot1 = var1;
                                                        if (!var0) {
                                                            _fun46138_ip = 396;
                                                            continue _fun46138
                                                        }
                                                    case 212:
                                                        var0 = var0.props;
                                                        var1 = var0.dataProvider;
                                                        var0 = var1.getAllData;
                                                        var3 = var0.bind(var1)();
                                                        var1 = var3.map;
                                                        var0 = function(arg0, arg1) { // Environment: var5
                                                            _fun46139: for (var _fun46139_ip = 0;;) switch (_fun46139_ip) {
                                                                case 0:
                                                                    var6 = arg1;
                                                                    var0 = _closure6_slot1;
                                                                    var1 = _closure6_slot0;
                                                                    var1 = var1.getLayout;
                                                                    var3 = null;
                                                                    var5 = var3 == var1;
                                                                    if (var0) {
                                                                        _fun46139_ip = 70;
                                                                        continue _fun46139
                                                                    }
                                                                case 29:
                                                                    var0 = undefined;
                                                                    if (var5) {
                                                                        _fun46139_ip = 63;
                                                                        continue _fun46139
                                                                    }
                                                                case 34:
                                                                    var7 = _closure6_slot0;
                                                                    var1 = var7.getLayout;
                                                                    var1 = var1.bind(var7)(var6);
                                                                    var7 = var3 == var1;
                                                                    var0 = undefined;
                                                                    if (var7) {
                                                                        _fun46139_ip = 63;
                                                                        continue _fun46139
                                                                    }
                                                                case 58:
                                                                    var0 = var1.height;
                                                                case 63:
                                                                    if (var0) {
                                                                        _fun46139_ip = 68;
                                                                        continue _fun46139
                                                                    }
                                                                case 66:
                                                                    var0 = 0;
                                                                case 68:
                                                                    _fun46139_ip = 112;
                                                                    continue _fun46139;
                                                                case 70:
                                                                    var1 = undefined;
                                                                    if (var5) {
                                                                        _fun46139_ip = 104;
                                                                        continue _fun46139
                                                                    }
                                                                case 75:
                                                                    var5 = _closure6_slot0;
                                                                    var2 = var5.getLayout;
                                                                    var2 = var2.bind(var5)(var6);
                                                                    var3 = var3 == var2;
                                                                    var1 = undefined;
                                                                    if (var3) {
                                                                        _fun46139_ip = 104;
                                                                        continue _fun46139
                                                                    }
                                                                case 99:
                                                                    var1 = var2.width;
                                                                case 104:
                                                                    if (var1) {
                                                                        _fun46139_ip = 109;
                                                                        continue _fun46139
                                                                    }
                                                                case 107:
                                                                    var1 = 0;
                                                                case 109:
                                                                    var0 = var1;
                                                                case 112:
                                                                    return var0;
                                                            }
                                                        };
                                                        var1 = var1.bind(var3)(var0);
                                                        var0 = global;
                                                        var4 = var0.Math;
                                                        var3 = var4.round;
                                                        var7 = var1.reduce;
                                                        var5 = function(arg0, arg1) { // Environment: var5
                                                            var1 = arg0;
                                                            var0 = arg1;
                                                            var0 = var1 + var0;
                                                            return var0;
                                                        };
                                                        var5 = var7.bind(var1)(var5, var8);
                                                        var1 = var1.length;
                                                        var1 = var5 / var1;
                                                        var4 = var3.bind(var4)(var1);
                                                        var5 = var0.Math;
                                                        var3 = var5.abs;
                                                        var1 = var6.current;
                                                        var1 = var1.props;
                                                        var1 = var1.estimatedItemSize;
                                                        var7 = null;
                                                        if (!(var7 == var1)) {
                                                            _fun46138_ip = 348;
                                                            continue _fun46138
                                                        }
                                                    case 326:
                                                        var6 = var6.current;
                                                        var6 = var6.state;
                                                        var6 = var6.layoutProvider;
                                                        var1 = var6.defaultEstimatedItemSize;
                                                    case 348:
                                                        var1 = var4 - var1;
                                                        var3 = var3.bind(var5)(var1);
                                                        var1 = 5;
                                                        if (!(var3 > var1)) {
                                                            _fun46138_ip = 396;
                                                            continue _fun46138
                                                        }
                                                    case 364:
                                                        var1 = var2.push;
                                                        var0 = var0.HermesInternal;
                                                        var3 = var0.concat;
                                                        var0 = 'estimatedItemSize can be set to ';
                                                        var0 = var3.bind(var0)(var4);
                                                        var0 = var1.bind(var2)(var0);
                                                    case 396:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var7 = var7.bind(var2)(var9, var6);
                                            var10 = _closure2_slot3;
                                            var7 = _closure3_slot0;
                                            var4 = {};
                                            var4.js = var8;
                                            var8 = var10.maxBlankArea;
                                            var9 = var8 >= var13;
                                            var8 = undefined;
                                            if (!var9) {
                                                _fun46137_ip = 352;
                                                continue _fun46137
                                            }
                                        case 272:
                                            var9 = {};
                                            var12 = _closure1_slot0;
                                            var14 = _closure1_slot1;
                                            var11 = 6;
                                            var15 = var14[var11];
                                            var17 = var12.bind(var2)(var15);
                                            var16 = var17.roundToDecimalPlaces;
                                            var15 = var10.maxBlankArea;
                                            var15 = var16.bind(var17)(var15, var13);
                                            var9.maxBlankArea = var15;
                                            var11 = var14[var11];
                                            var12 = var12.bind(var2)(var11);
                                            var11 = var12.roundToDecimalPlaces;
                                            var10 = var10.cumulativeBlankArea;
                                            var10 = var11.bind(var12)(var10, var13);
                                            var9.cumulativeBlankArea = var10;
                                            var8 = var9;
                                        case 352:
                                            var4.blankArea = var8;
                                            var4.suggestions = var6;
                                            var6 = var7.isCancelled;
                                            var6 = var6.bind(var7)();
                                            var4.interrupted = var6;
                                            var6 = var7.isCancelled;
                                            var6 = var6.bind(var7)();
                                            if (var6) {
                                                _fun46137_ip = 405;
                                                continue _fun46137
                                            }
                                        case 390:
                                            var5 = _closure1_slot5;
                                            var5 = var5.bind(var2)(var4);
                                            var4.formattedString = var5;
                                        case 405:
                                            var3 = _closure2_slot1;
                                            var3 = var3.bind(var2)(var4);
                                            return var2;
                                        case 417:
                                            return var1;
                                        case 420:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var5.bind(var4)(var2);
                            var1 = _closure2_slot2;
                            var1 = var1.startDelayInMs;
                            if (var1) {
                                _fun46135_ip = 209;
                                continue _fun46135
                            }
                        case 203:
                            var1 = 3000;
                        case 209:
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot2 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var3 = var0.clearTimeout;
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure3_slot0;
                                var1 = var2.cancel;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var0);
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
        }
    };
    var2.useBenchmark = var3;
    var2.getFormattedString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1308, 5139, 31, 5143, 5144, 5145, 5146]);