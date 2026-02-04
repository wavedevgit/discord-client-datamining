// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        _fun45035: for (var _fun45035_ip = 0;;) switch (_fun45035_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = undefined;
                if (!(var2 !== var4)) {
                    _fun45035_ip = 96;
                    continue _fun45035
                }
            case 12:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.transformIntoHandlerTags;
                var4 = var0.bind(var1)(var4);
                var0 = var4;
                var1 = var0[Symbol.iterator];
                var0 = var1().next;
            case 52:
                var5 = var0().value;
                var4 = var1;
                if (!(var4 !== var2)) {
                    _fun45035_ip = 92;
                    continue _fun45035
                }
            case 63: // try_start_0
                var4 = var3;
                var4 = var4.handlerTag;
                if (!(var5 !== var4)) {
                    _fun45035_ip = 78;
                    continue _fun45035
                }
            case 76: // try_end0
                _fun45035_ip = 52;
                continue _fun45035;
            case 78:
                var1.return();
                var0 = true;
                return var0;
            case 85: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 92:
                var0 = false;
                return var0;
            case 96:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useLayoutEffect;
    var _closure1_slot2 = var3;
    var1 = function arg0, arg1, arg2() {
        var4 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var0;
        var2 = arg2;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var0;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.MountRegistry;
            var1 = var2.addMountListener;
            var0 = function(arg0) { // Environment: var0
                _fun45038: for (var _fun45038_ip = 0;;) switch (_fun45038_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var2 = _closure2_slot1;
                        var2 = var2.isMounted;
                        if (var2) {
                            _fun45038_ip = 86;
                            continue _fun45038
                        }
                    case 25:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun45038_ip = 227;
                            continue _fun45038
                        }
                    case 38:
                        var3 = _closure2_slot2;
                        var2 = global;
                        var8 = var2.Error;
                        var2 = var8.prototype;
                        var4 = Object.create(var2, {
                            constructor: {
                                value: var8
                            }
                        });
                        var12 = 'GestureDetector is not mounted, but a mount listener was triggered. This should not happen.';
                        var13 = var4;
                        var2 = new var13[var8](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2 = var3.bind(var0)(var2);
                        _fun45038_ip = 227;
                        continue _fun45038;
                    case 86:
                        var2 = _closure2_slot1;
                        var3 = var2.attachedGestures;
                        var4 = var3;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                    case 105:
                        var8 = var4().value;
                        var9 = var2;
                        if (!(var9 !== var0)) {
                            _fun45038_ip = 227;
                            continue _fun45038
                        }
                    case 116: // try_start_0
                        var9 = var8.config;
                        var10 = var9.blocksHandlers;
                        var9 = var8.config;
                        var6 = var9.requireToFail;
                        var8 = var8.config;
                        var7 = var8.simultaneousWith;
                        var9 = _closure1_slot3;
                        var8 = var5;
                        var8 = var9.bind(var0)(var10, var8);
                        if (var8) {
                            _fun45038_ip = 205;
                            continue _fun45038
                        }
                    case 165:
                        var10 = _closure1_slot3;
                        var9 = var6;
                        var8 = var5;
                        var8 = var10.bind(var0)(var9, var8);
                        if (var8) {
                            _fun45038_ip = 205;
                            continue _fun45038
                        }
                    case 184:
                        var10 = _closure1_slot3;
                        var9 = var7;
                        var8 = var5;
                        var8 = var10.bind(var0)(var9, var8);
                        if (var8) {
                            _fun45038_ip = 205;
                            continue _fun45038
                        }
                    case 203: // try_end0
                        _fun45038_ip = 105;
                        continue _fun45038;
                    case 205: // try_start_1
                        var1 = _closure2_slot0;
                        var1 = var1.bind(var0)();
                    case 213: // try_end1
                        var2.return();
                        var1 = undefined;
                        return var1;
                    case 220: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var2.return();
                        throw var1;
                    case 227:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.useMountReactions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4984, 4986]);