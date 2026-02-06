// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun99652: for (var _fun99652_ip = 0;;) switch (_fun99652_ip) {
            case 0:
                var5 = arg0;
                var4 = undefined;
                var6 = undefined;
                var7 = undefined;
                var8 = undefined;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var1 = var1[var3];
                var1 = var2.bind(var4)(var1);
                var1 = var1.GLOBAL_OBJ;
                var1 = var1._sentryModuleMetadata;
                if (!var1) {
                    _fun99652_ip = 288;
                    continue _fun99652
                }
            case 51:
                var1 = global;
                var9 = var1.Object;
                var2 = var9.keys;
                var10 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var1 = var10.bind(var4)(var1);
                var1 = var1.GLOBAL_OBJ;
                var1 = var1._sentryModuleMetadata;
                var9 = var2.bind(var9)(var1);
                var1 = var9;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
            case 104:
                var11 = var1().value;
                var9 = var2;
                if (!(var9 !== var4)) {
                    _fun99652_ip = 288;
                    continue _fun99652
                }
            case 118: // try_start_2
                var6 = var11;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var3];
                var9 = var10.bind(var4)(var9);
                var9 = var9.GLOBAL_OBJ;
                var9 = var9._sentryModuleMetadata;
                var7 = var9[var11];
                var10 = _closure1_slot3;
                var9 = var10.has;
                var9 = var9.bind(var10)(var11);
                if (var9) {
                    _fun99652_ip = 276;
                    continue _fun99652
                }
            case 171:
                var11 = _closure1_slot3;
                var9 = var11.add;
                var10 = var6;
                var9 = var9.bind(var11)(var10);
                var9 = var5;
                var10 = var9.bind(var4)(var10);
                var9 = var10.reverse;
                var11 = var9.bind(var10)();
                var9 = var11;
                var10 = var9[Symbol.iterator];
                var9 = var10().next;
            case 212:
                var11 = var9().value;
                var12 = var10;
                if (!(var12 !== var4)) {
                    _fun99652_ip = 276;
                    continue _fun99652
                }
            case 223: // try_start_0
                var8 = var11;
                var11 = var11.filename;
                if (var11) {
                    _fun99652_ip = 237;
                    continue _fun99652
                }
            case 235: // try_end0
                _fun99652_ip = 212;
                continue _fun99652;
            case 237: // try_start_1
                var13 = _closure1_slot2;
                var12 = var13.set;
                var9 = var8;
                var11 = var9.filename;
                var9 = var7;
                var9 = var12.bind(var13)(var11, var9);
            case 264: // try_end1
                var10.return();
                _fun99652_ip = 276;
                continue _fun99652;
            case 269: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 9);
                var10.return();
                throw var9;
            case 276: // try_end2
                _fun99652_ip = 104;
                continue _fun99652;
            case 281: // catch_target2
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 288:
                var2 = _closure1_slot2;
                var1 = var2.get;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var4 = var3.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var11 = var5;
    var4 = new var11[var4](var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var11 = var4;
    var3 = new var11[var3](var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var3 = function arg0, arg1() {
        _fun99653: for (var _fun99653_ip = 0;;) switch (_fun99653_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = arg1;
            case 12: // try_start_0
                var1 = var1.exception;
                var2 = var1.values;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun99654: for (var _fun99654_ip = 0;;) switch (_fun99654_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = undefined;
                            var5 = undefined;
                            var6 = undefined;
                            var2 = var1.stacktrace;
                            if (!var2) {
                                _fun99654_ip = 134;
                                continue _fun99654
                            }
                        case 18:
                            var1 = var1.stacktrace;
                            var1 = var1.frames;
                            if (var1) {
                                _fun99654_ip = 37;
                                continue _fun99654
                            }
                        case 33:
                            var1 = new Array(0);
                        case 37:
                            var4 = var1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                        case 49:
                            var7 = var4().value;
                            var8 = var2;
                            if (!(var8 !== var0)) {
                                _fun99654_ip = 134;
                                continue _fun99654
                            }
                        case 60: // try_start_0
                            var5 = var7;
                            var7 = var7.filename;
                            if (!var7) {
                                _fun99654_ip = 125;
                                continue _fun99654
                            }
                        case 72:
                            var7 = var5;
                            var7 = var7.module_metadata;
                            if (var7) {
                                _fun99654_ip = 125;
                                continue _fun99654
                            }
                        case 84:
                            var9 = _closure1_slot4;
                            var8 = _closure2_slot0;
                            var7 = var5;
                            var7 = var7.filename;
                            var7 = var9.bind(var0)(var8, var7);
                            var6 = var7;
                            if (!var7) {
                                _fun99654_ip = 125;
                                continue _fun99654
                            }
                        case 113:
                            var8 = var5;
                            var7 = var6;
                            var8.module_metadata = var7;
                        case 125: // try_end0
                            _fun99654_ip = 49;
                            continue _fun99654;
                        case 127: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 134:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 40: // try_end0
                _fun99653_ip = 44;
                continue _fun99653;
            case 42: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 44:
                var0 = undefined;
                return var0;
        }
    };
    var1.addMetadataToStackFrames = var3;
    var1.getMetadataForUrl = var2;
    var0 = function arg0() {
        _fun99655: for (var _fun99655_ip = 0;;) switch (_fun99655_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var0 = var0.exception;
                var2 = var0.values;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun99656: for (var _fun99656_ip = 0;;) switch (_fun99656_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            if (!var1) {
                                _fun99656_ip = 64;
                                continue _fun99656
                            }
                        case 12:
                            var0 = var0.stacktrace;
                            var0 = var0.frames;
                            if (var0) {
                                _fun99656_ip = 31;
                                continue _fun99656
                            }
                        case 27:
                            var0 = new Array(0);
                        case 31:
                            var2 = var0;
                            var1 = var2[Symbol.iterator];
                            var2 = var1().next;
                            var0 = undefined;
                        case 39:
                            var3 = var2().value;
                            var4 = var1;
                            if (!(var4 !== var0)) {
                                _fun99656_ip = 64;
                                continue _fun99656
                            }
                        case 50: // try_start_0
                            var3 = delete var3.module_metadata;
                        case 55: // try_end0
                            _fun99656_ip = 39;
                            continue _fun99656;
                        case 57: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var1.return();
                            throw var0;
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 33: // try_end0
                _fun99655_ip = 37;
                continue _fun99655;
            case 35: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var1.stripMetadataFromStackFrames = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889]);