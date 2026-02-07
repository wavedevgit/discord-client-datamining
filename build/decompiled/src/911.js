// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun9551: for (var _fun9551_ip = 0;;) switch (_fun9551_ip) {
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
                    _fun9551_ip = 288;
                    continue _fun9551
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
                    _fun9551_ip = 288;
                    continue _fun9551
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
                    _fun9551_ip = 276;
                    continue _fun9551
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
                    _fun9551_ip = 276;
                    continue _fun9551
                }
            case 223: // try_start_0
                var8 = var11;
                var11 = var11.filename;
                if (var11) {
                    _fun9551_ip = 237;
                    continue _fun9551
                }
            case 235: // try_end0
                _fun9551_ip = 212;
                continue _fun9551;
            case 237: // try_start_1
                var13 = _closure1_slot2;
                var12 = var13.set;
                var9 = var8;
                var11 = var9.filename;
                var9 = var7;
                var9 = var12.bind(var13)(var11, var9);
            case 264: // try_end1
                var10.return();
                _fun9551_ip = 276;
                continue _fun9551;
            case 269: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 9);
                var10.return();
                throw var9;
            case 276: // try_end2
                _fun9551_ip = 104;
                continue _fun9551;
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
    var4 = var3.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var1, var5, var4);
    var4 = var3.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var12 = var5;
    var4 = new var12[var4](var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot3 = var3;
    var3 = function arg0, arg1() {
        _fun9552: for (var _fun9552_ip = 0;;) switch (_fun9552_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var3 = var1.exception;
                var4 = null;
                var1 = var4 == var3;
                var2 = var3;
                if (var1) {
                    _fun9552_ip = 42;
                    continue _fun9552
                }
            case 30:
                var3 = var3.values;
                var1 = var4 == var3;
                var2 = var3;
            case 42:
                if (var1) {
                    _fun9552_ip = 60;
                    continue _fun9552
                }
            case 45:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun9553: for (var _fun9553_ip = 0;;) switch (_fun9553_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var3 = null;
                            var0 = var3 == var1;
                            var2 = var1;
                            if (var0) {
                                _fun9553_ip = 34;
                                continue _fun9553
                            }
                        case 21:
                            var1 = var1.frames;
                            var0 = var3 == var1;
                            var2 = var1;
                        case 34:
                            if (var0) {
                                _fun9553_ip = 54;
                                continue _fun9553
                            }
                        case 37:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun9554: for (var _fun9554_ip = 0;;) switch (_fun9554_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.filename;
                                        if (!var0) {
                                            _fun9554_ip = 58;
                                            continue _fun9554
                                        }
                                    case 12:
                                        var0 = var1.module_metadata;
                                        if (var0) {
                                            _fun9554_ip = 58;
                                            continue _fun9554
                                        }
                                    case 21:
                                        var4 = _closure1_slot4;
                                        var3 = _closure2_slot0;
                                        var2 = var1.filename;
                                        var0 = undefined;
                                        var0 = var4.bind(var0)(var3, var2);
                                        if (!var0) {
                                            _fun9554_ip = 58;
                                            continue _fun9554
                                        }
                                    case 52:
                                        var1.module_metadata = var0;
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var1.addMetadataToStackFrames = var3;
    var1.getMetadataForUrl = var2;
    var0 = function arg0() {
        _fun9555: for (var _fun9555_ip = 0;;) switch (_fun9555_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.exception;
                var3 = null;
                var0 = var3 == var1;
                var2 = var1;
                if (var0) {
                    _fun9555_ip = 33;
                    continue _fun9555
                }
            case 21:
                var1 = var1.values;
                var0 = var3 == var1;
                var2 = var1;
            case 33:
                if (var0) {
                    _fun9555_ip = 53;
                    continue _fun9555
                }
            case 36:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun9556: for (var _fun9556_ip = 0;;) switch (_fun9556_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var3 = null;
                            var0 = var3 == var1;
                            var2 = var1;
                            if (var0) {
                                _fun9556_ip = 34;
                                continue _fun9556
                            }
                        case 21:
                            var1 = var1.frames;
                            var0 = var3 == var1;
                            var2 = var1;
                        case 34:
                            if (var0) {
                                _fun9556_ip = 54;
                                continue _fun9556
                            }
                        case 37:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = delete var0.module_metadata;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 53:
                var0 = undefined;
                return var0;
        }
    };
    var1.stripMetadataFromStackFrames = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821]);