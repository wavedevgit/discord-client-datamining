// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.isBrowser;
        var _closure2_slot0 = var2;
        var2 = var1.root;
        var _closure2_slot1 = var2;
        var1 = var1.prefix;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun99646: for (var _fun99646_ip = 0;;) switch (_fun99646_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.filename;
                    if (var1) {
                        _fun99646_ip = 14;
                        continue _fun99646
                    }
                case 12:
                    return var0;
                case 14:
                    var3 = /^[a-zA-Z]:\\/;
                    var2 = var3.test;
                    var1 = var0.filename;
                    var2 = var2.bind(var3)(var1);
                    if (var2) {
                        _fun99646_ip = 96;
                        continue _fun99646
                    }
                case 47:
                    var4 = var0.filename;
                    var3 = var4.includes;
                    var1 = '\\';
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun99646_ip = 93;
                        continue _fun99646
                    }
                case 70:
                    var5 = var0.filename;
                    var4 = var5.includes;
                    var3 = '/';
                    var3 = var4.bind(var5)(var3);
                    var1 = !var3;
                case 93:
                    var2 = var1;
                case 96:
                    var4 = /^\\/ / ;
                    var3 = var4.test;
                    var1 = var0.filename;
                    var3 = var3.bind(var4)(var1);
                    var4 = _closure2_slot0;
                    if (var4) {
                        _fun99646_ip = 316;
                        continue _fun99646
                    }
                case 139:
                    if (var2) {
                        _fun99646_ip = 148;
                        continue _fun99646
                    }
                case 142:
                    if (!var3) {
                        _fun99646_ip = 375;
                        continue _fun99646
                    }
                case 148:
                    var5 = var0.filename;
                    if (var2) {
                        _fun99646_ip = 162;
                        continue _fun99646
                    }
                case 157:
                    var6 = var5;
                    _fun99646_ip = 220;
                    continue _fun99646;
                case 162:
                    var4 = var5.replace;
                    var3 = /^[a-zA-Z]:/;
                    var2 = '';
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.replace;
                    var3 = /\\/g;
                    var2 = '/';
                    var6 = var4.bind(var5)(var3, var2);
                case 220:
                    var2 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    if (var2) {
                        _fun99646_ip = 265;
                        continue _fun99646
                    }
                case 252:
                    var2 = var4.basename;
                    var5 = var2.bind(var4)(var6);
                    _fun99646_ip = 281;
                    continue _fun99646;
                case 265:
                    var3 = var4.relative;
                    var2 = _closure2_slot1;
                    var5 = var3.bind(var4)(var2, var6);
                case 281:
                    var4 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var2 = var3.bind(var2)(var4, var5);
                    var0.filename = var2;
                    _fun99646_ip = 375;
                    continue _fun99646;
                case 316:
                    var2 = _closure2_slot1;
                    if (!var2) {
                        _fun99646_ip = 375;
                        continue _fun99646
                    }
                case 323:
                    var4 = var0.filename;
                    var3 = var4.indexOf;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2);
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun99646_ip = 375;
                        continue _fun99646
                    }
                case 350:
                    var3 = var4.replace;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.filename = var1;
                case 375:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Environment: var1
        _fun99647: for (var _fun99647_ip = 0;;) switch (_fun99647_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun99647_ip = 23;
                    continue _fun99647
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun99647_ip = 27;
                    continue _fun99647
                }
            case 23:
                var0 = {};
                _fun99647_ip = 31;
                continue _fun99647;
            case 27:
                var0 = arguments[var2];
            case 31:
                var6 = var0.root;
                var5 = var0.prefix;
                if (var5) {
                    _fun99647_ip = 52;
                    continue _fun99647
                }
            case 46:
                var5 = 'app:///';
            case 52:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var9 = 1;
                var3 = var3[var9];
                var3 = var7.bind(var4)(var3);
                var7 = var3.GLOBAL_OBJ;
                var3 = 'window';
                var7 = var3 in var7;
                if (!var7) {
                    _fun99647_ip = 124;
                    continue _fun99647
                }
            case 92:
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var3 = var8.bind(var4)(var3);
                var3 = var3.GLOBAL_OBJ;
                var3 = var3.window;
                var7 = var4 !== var3;
            case 124:
                var0 = var0.iteratee;
                if (var0) {
                    _fun99647_ip = 159;
                    continue _fun99647
                }
            case 133:
                var3 = _closure1_slot2;
                var2 = {};
                var2.isBrowser = var7;
                var2.root = var6;
                var2.prefix = var5;
                var0 = var3.bind(var4)(var2);
            case 159:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'RewriteFrames';
                var0.name = var2;
                var1 = function arg0() {
                    _fun99648: for (var _fun99648_ip = 0;;) switch (_fun99648_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3.exception;
                            if (!var1) {
                                _fun99648_ip = 41;
                                continue _fun99648
                            }
                        case 12:
                            var0 = global;
                            var4 = var0.Array;
                            var2 = var4.isArray;
                            var0 = var3.exception;
                            var0 = var0.values;
                            var1 = var2.bind(var4)(var0);
                        case 41:
                            var0 = var3;
                            if (!var1) {
                                _fun99648_ip = 63;
                                continue _fun99648
                            }
                        case 47:
                            var2 = function arg0() {
                                _fun99649: for (var _fun99649_ip = 0;;) switch (_fun99649_ip) {
                                    case 0:
                                        var0 = arg0;
                                    case 3: // try_start_0
                                        var1 = global;
                                        var5 = var1.Object;
                                        var4 = var5.assign;
                                        var3 = var0;
                                        var2 = {};
                                        var9 = var1.Object;
                                        var8 = var9.assign;
                                        var7 = var3.exception;
                                        var6 = {};
                                        var1 = var3.exception;
                                        var11 = var1.values;
                                        var10 = var11.map;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun99650: for (var _fun99650_ip = 0;;) switch (_fun99650_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var5 = global;
                                                    var3 = var5.Object;
                                                    var2 = var3.assign;
                                                    var1 = var4.stacktrace;
                                                    if (!var1) {
                                                        _fun99650_ip = 108;
                                                        continue _fun99650
                                                    }
                                                case 25:
                                                    var0 = {};
                                                    var9 = var4.stacktrace;
                                                    var8 = var5.Object;
                                                    var7 = var8.assign;
                                                    var6 = {};
                                                    var5 = var9;
                                                    if (!var5) {
                                                        _fun99650_ip = 58;
                                                        continue _fun99650
                                                    }
                                                case 52:
                                                    var5 = var9.frames;
                                                case 58:
                                                    if (!var5) {
                                                        _fun99650_ip = 86;
                                                        continue _fun99650
                                                    }
                                                case 61:
                                                    var12 = var9.frames;
                                                    var11 = var12.map;
                                                    var10 = function(arg0) { // Environment: var10
                                                        var2 = _closure2_slot0;
                                                        var1 = undefined;
                                                        var0 = arg0;
                                                        var0 = var2.bind(var1)(var0);
                                                        return var0;
                                                    };
                                                    var5 = var11.bind(var12)(var10);
                                                case 86:
                                                    var6.frames = var5;
                                                    var5 = {};
                                                    var5 = var7.bind(var8)(var5, var9, var6);
                                                    var0.stacktrace = var5;
                                                    var1 = var0;
                                                case 108:
                                                    var0 = {};
                                                    var0 = var2.bind(var3)(var0, var4, var1);
                                                    return var0;
                                            }
                                        };
                                        var1 = var10.bind(var11)(var1);
                                        var6.values = var1;
                                        var1 = {};
                                        var1 = var8.bind(var9)(var1, var7, var6);
                                        var2.exception = var1;
                                        var1 = {};
                                        var1 = var4.bind(var5)(var1, var3, var2);
                                    case 97: // try_end0
                                        return var1;
                                    case 99: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 63:
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var2.generateIteratee = var3;
    var2.rewriteFramesIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12958, 12869]);