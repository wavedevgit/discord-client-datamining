// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun46826: for (var _fun46826_ip = 0;;) switch (_fun46826_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.js;
                var1 = null;
                var2 = var1 == var0;
                var8 = undefined;
                if (var2) {
                    _fun46826_ip = 26;
                    continue _fun46826
                }
            case 20:
                var8 = var0.averageFPS;
            case 26:
                var0 = var3.js;
                var2 = var1 == var0;
                var7 = undefined;
                if (var2) {
                    _fun46826_ip = 47;
                    continue _fun46826
                }
            case 41:
                var7 = var0.minFPS;
            case 47:
                var0 = var3.js;
                var1 = var1 == var0;
                var9 = undefined;
                if (var1) {
                    _fun46826_ip = 68;
                    continue _fun46826
                }
            case 62:
                var9 = var0.maxFPS;
            case 68:
                var2 = global;
                var0 = var2.HermesInternal;
                var6 = var0.concat;
                var16 = 'Results:\n\nJS FPS: Avg: ';
                var14 = ' | Min: ';
                var12 = ' | Max: ';
                var10 = '\n\n';
                var15 = var8;
                var13 = var7;
                var11 = var9;
                var1 = var16[var6](var15, var14, var13, var12, var11, var10, var9);
                var0 = var3.suggestions;
                var4 = var0.length;
                var0 = 0;
                var4 = var4 > var0;
                var0 = '';
                if (!var4) {
                    _fun46826_ip = 201;
                    continue _fun46826
                }
            case 142:
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
                var0 = var3.bind(var2)(var4);
            case 201:
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = function arg0, arg1, arg2() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun46831: for (var _fun46831_ip = 0;;) switch (_fun46831_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var10 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46831_ip = 259;
                            continue _fun46831
                        }
                    case 21:
                        var _closure4_slot0 = var2;
                        var3 = undefined;
                        var _closure4_slot1 = var3;
                        var4 = var2.current;
                        if (!var4) {
                            _fun46831_ip = 250;
                            continue _fun46831
                        }
                    case 42:
                        var4 = var2.current;
                        var4 = var4.props;
                        var4 = var4.horizontal;
                        _closure4_slot1 = var4;
                        var5 = var2.current;
                        if (!var5) {
                            _fun46831_ip = 250;
                            continue _fun46831
                        }
                    case 73:
                        var2 = var5.getWindowSize;
                        var2 = var2.bind(var5)();
                        var4 = var5.getChildContainerDimensions;
                        var4 = var4.bind(var5)();
                        var6 = var4.width;
                        var5 = var2.width;
                        var8 = var6 - var5;
                        var4 = var4.height;
                        var2 = var2.height;
                        var7 = var4 - var2;
                        var6 = function arg0, arg1() {
                            _fun46832: for (var _fun46832_ip = 0;;) switch (_fun46832_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = arg1;
                                    var0 = _closure4_slot0;
                                    var2 = var0.current;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun46832_ip = 59;
                                        continue _fun46832
                                    }
                                case 24:
                                    var1 = var2.scrollToOffset;
                                    var0 = {};
                                    var5 = _closure4_slot1;
                                    if (!var5) {
                                        _fun46832_ip = 42;
                                        continue _fun46832
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
                        var11 = 3;
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
                        SaveGenerator(address = 185);
                    case 183:
                        return var1;
                    case 185:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46831_ip = 256;
                            continue _fun46831
                        }
                    case 191:
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
                        SaveGenerator(address = 244);
                    case 242:
                        return var2;
                    case 244:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46831_ip = 253;
                            continue _fun46831
                        }
                    case 250:
                        return var3;
                    case 253:
                        return var2;
                    case 256:
                        return var1;
                    case 259:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var5 = var4.useEffect;
    var _closure1_slot4 = var5;
    var5 = var4.useState;
    var _closure1_slot5 = var5;
    var5 = var4.useCallback;
    var _closure1_slot6 = var5;
    var4 = var4.useRef;
    var _closure1_slot7 = var4;
    var3 = function arg0, arg1() {
        _fun46833: for (var _fun46833_ip = 0;;) switch (_fun46833_ip) {
            case 0:
                var7 = arg0;
                var8 = arg1;
                var5 = undefined;
                var1 = undefined;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var8;
                var2 = arguments.length;
                var6 = 2;
                if (!(var2 > var6)) {
                    _fun46833_ip = 38;
                    continue _fun46833
                }
            case 30:
                var2 = arguments[var6];
                if (!(var5 === var2)) {
                    _fun46833_ip = 42;
                    continue _fun46833
                }
            case 38:
                var2 = {};
                _fun46833_ip = 46;
                continue _fun46833;
            case 42:
                var2 = arguments[var6];
            case 46:
                var _closure2_slot2 = var2;
                var4 = _closure1_slot5;
                var1 = false;
                var4 = var4.bind(var5)(var1);
                var1 = _closure1_slot3;
                var6 = var1.bind(var5)(var4, var6);
                var1 = 0;
                var1 = var6[var1];
                var _closure2_slot3 = var1;
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot4 = var4;
                var6 = _closure1_slot7;
                var4 = null;
                var4 = var6.bind(var5)(var4);
                var _closure2_slot5 = var4;
                var6 = _closure1_slot6;
                var4 = new Array(5);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var1;
                var7 = var2.repeatCount;
                var4[3] = var7;
                var2 = var2.speedMultiplier;
                var4[4] = var2;
                var2 = function() { // Environment: var0
                    _fun46834: for (var _fun46834_ip = 0;;) switch (_fun46834_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun46834_ip = 238;
                                continue _fun46834
                            }
                        case 15:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 3;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.Cancellable;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var10 = var5;
                            var4 = new var10[var4](var9);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var _closure3_slot0 = var5;
                            var4 = _closure2_slot5;
                            var4.current = var5;
                            var4 = new Array(0);
                            var _closure3_slot1 = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.current;
                            if (!var4) {
                                _fun46834_ip = 214;
                                continue _fun46834
                            }
                        case 100:
                            var4 = global;
                            var6 = var4.Number;
                            var5 = _closure2_slot0;
                            var5 = var5.current;
                            var5 = var5.props;
                            var7 = var5.data;
                            var5 = null;
                            var8 = var5 == var7;
                            var5 = undefined;
                            if (var8) {
                                _fun46834_ip = 143;
                                continue _fun46834
                            }
                        case 138:
                            var5 = var7.length;
                        case 143:
                            var6 = var6.bind(var1)(var5);
                            var5 = 0;
                            if (!(!(var6 > var5))) {
                                _fun46834_ip = 214;
                                continue _fun46834
                            }
                        case 154:
                            var5 = var4.Error;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 4;
                            var3 = var6[var3];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.ErrorMessages;
                            var9 = var3.dataEmptyCannotRunBenchmark;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var10 = var4;
                            var3 = new var10[var5](var9, var8);
                            var3 = var3 instanceof Object ? var3 : var4;
                            throw var3;
                        case 214:
                            var3 = _closure2_slot4;
                            var2 = true;
                            var2 = var3.bind(var1)(var2);
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot2;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun46837: for (var _fun46837_ip = 0;;) switch (_fun46837_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun46837_ip = 374;
                                                    continue _fun46837
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
                                                var16 = var3;
                                                var1 = new var16[var1](var15);
                                                var7 = var1 instanceof Object ? var1 : var3;
                                                var1 = var7.startTracking;
                                                var1 = var1.bind(var7)();
                                                var1 = _closure2_slot2;
                                                var1 = var1.repeatCount;
                                                if (var1) {
                                                    _fun46837_ip = 90;
                                                    continue _fun46837
                                                }
                                            case 87:
                                                var1 = 1;
                                            case 90:
                                                var9 = 0;
                                                var1 = var9 < var1;
                                                var8 = 1;
                                                if (!var1) {
                                                    _fun46837_ip = 176;
                                                    continue _fun46837
                                                }
                                            case 105:
                                                var11 = _closure1_slot9;
                                                var10 = _closure2_slot0;
                                                var5 = _closure3_slot0;
                                                var1 = _closure2_slot2;
                                                var1 = var1.speedMultiplier;
                                                if (var1) {
                                                    _fun46837_ip = 133;
                                                    continue _fun46837
                                                }
                                            case 130:
                                                var1 = var8;
                                            case 133:
                                                var1 = var11.bind(var2)(var10, var5, var1);
                                                SaveGenerator(address = 144);
                                            case 142:
                                                return var1;
                                            case 144:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                                if (var5) {
                                                    _fun46837_ip = 371;
                                                    continue _fun46837
                                                }
                                            case 153:
                                                var9 = var9 + 1;
                                                var5 = _closure2_slot2;
                                                var5 = var5.repeatCount;
                                                if (var5) {
                                                    _fun46837_ip = 172;
                                                    continue _fun46837
                                                }
                                            case 169:
                                                var5 = var8;
                                            case 172:
                                                if (var9 < var5) {
                                                    _fun46837_ip = 105;
                                                    continue _fun46837
                                                }
                                            case 176:
                                                var5 = var7.stopAndGetData;
                                                var9 = var5.bind(var7)();
                                                var7 = var9.averageFPS;
                                                var5 = 35;
                                                if (!(var7 < var5)) {
                                                    _fun46837_ip = 219;
                                                    continue _fun46837
                                                }
                                            case 199:
                                                var8 = _closure3_slot1;
                                                var7 = var8.push;
                                                var5 = 'Your average JS FPS is low. This can indicate that your components are doing too much work. Try to optimize your components and reduce re-renders if any';
                                                var5 = var7.bind(var8)(var5);
                                            case 219:
                                                var7 = _closure2_slot0;
                                                var8 = _closure3_slot1;
                                                var5 = var7.current;
                                                if (!var5) {
                                                    _fun46837_ip = 262;
                                                    continue _fun46837
                                                }
                                            case 235:
                                                var7 = var7.current;
                                                var7 = var7.props;
                                                var7 = var7.data;
                                                var10 = var7.length;
                                                var7 = 200;
                                                var5 = var10 < var7;
                                            case 262:
                                                if (!var5) {
                                                    _fun46837_ip = 281;
                                                    continue _fun46837
                                                }
                                            case 265:
                                                var7 = var8.push;
                                                var5 = "Data count is low. Try to increase it to a large number (e.g 200) using the 'useDataMultiplier' hook.";
                                                var5 = var7.bind(var8)(var5);
                                            case 281:
                                                var7 = _closure3_slot1;
                                                var8 = _closure3_slot0;
                                                var5 = {};
                                                var5.js = var9;
                                                var5.suggestions = var7;
                                                var7 = var8.isCancelled;
                                                var7 = var7.bind(var8)();
                                                var5.interrupted = var7;
                                                var7 = _closure3_slot0;
                                                var6 = var7.isCancelled;
                                                var6 = var6.bind(var7)();
                                                if (var6) {
                                                    _fun46837_ip = 348;
                                                    continue _fun46837
                                                }
                                            case 333:
                                                var4 = _closure1_slot8;
                                                var4 = var4.bind(var2)(var5);
                                                var5.formattedString = var4;
                                            case 348:
                                                var4 = _closure2_slot1;
                                                var4 = var4.bind(var2)(var5);
                                                var4 = _closure2_slot4;
                                                var3 = false;
                                                var3 = var4.bind(var2)(var3);
                                                return var2;
                                            case 371:
                                                return var1;
                                            case 374:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() {
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var0.bind(var1)();
                            var0 = var0.bind(var1)();
                        case 238:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var5)(var2, var4);
                var _closure2_slot6 = var2;
                var4 = _closure1_slot4;
                var3 = function() { // Environment: var0
                    _fun46839: for (var _fun46839_ip = 0;;) switch (_fun46839_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var2 = var2.startManually;
                            if (var2) {
                                _fun46839_ip = 71;
                                continue _fun46839
                            }
                        case 20:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var1 = _closure2_slot2;
                            var3 = var1.startDelayInMs;
                            if (var3) {
                                _fun46839_ip = 47;
                                continue _fun46839
                            }
                        case 41:
                            var3 = 3000;
                        case 47:
                            var2 = undefined;
                            var1 = function() { // Environment: var0
                                var1 = _closure2_slot6;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = var4.bind(var2)(var1, var3);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun46841: for (var _fun46841_ip = 0;;) switch (_fun46841_ip) {
                                    case 0:
                                        var0 = global;
                                        var2 = var0.clearTimeout;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var2 = _closure2_slot5;
                                        var2 = var2.current;
                                        if (!var2) {
                                            _fun46841_ip = 56;
                                            continue _fun46841
                                        }
                                    case 37:
                                        var1 = _closure2_slot5;
                                        var2 = var1.current;
                                        var1 = var2.cancel;
                                        var1 = var1.bind(var2)();
                                    case 56:
                                        return var0;
                                }
                            };
                            return var0;
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var3, var0);
                var0 = {};
                var0.startBenchmark = var2;
                var0.isBenchmarkRunning = var1;
                return var0;
        }
    };
    var2.useBenchmark = var3;
    var2.getFormattedString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1308, 5104, 31, 5231, 5133, 5232]);