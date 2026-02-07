// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun17320: for (var _fun17320_ip = 0;;) switch (_fun17320_ip) {
            case 0:
                var6 = arg0;
                var0 = undefined;
                var4 = undefined;
                var _closure2_slot0 = var6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var5 = var5[var3];
                var5 = var7.bind(var0)(var5);
                var5 = var5.bind(var0)();
                var _closure2_slot1 = var5;
                var3 = arguments[var3];
                if (!(var0 !== var3)) {
                    _fun17320_ip = 76;
                    continue _fun17320
                }
            case 52:
                var3 = global;
                var7 = var3.console;
                var4 = var7.error;
                var3 = "You passed a second argument to 'useFocusEffect', but it only accepts one argument. If you want to pass a dependency array, you can use 'React.useCallback':\n\nuseFocusEffect(\n  React.useCallback(() => {\n    // Your code here\n  }, [depA, depB])\n);\n\nSee usage guide: https://reactnavigation.org/docs/use-focus-effect";
                var3 = var4.bind(var7)(var3);
            case 76:
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun17321: for (var _fun17321_ip = 0;;) switch (_fun17321_ip) {
                        case 0:
                            var1 = false;
                            var _closure3_slot1 = var1;
                            var3 = function() {
                                _fun17322: for (var _fun17322_ip = 0;;) switch (_fun17322_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        var1 = undefined;
                                        var0 = var0.bind(var1)();
                                        if (!(var1 !== var0)) {
                                            _fun17322_ip = 30;
                                            continue _fun17322
                                        }
                                    case 17:
                                        var3 = 'function';
                                        var2 = typeof var0;
                                        if (!(var3 !== var2)) {
                                            _fun17322_ip = 30;
                                            continue _fun17322
                                        }
                                    case 28:
                                        return var1;
                                    case 30:
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var3;
                            var4 = _closure2_slot1;
                            var2 = var4.isFocused;
                            var2 = var2.bind(var4)();
                            if (!var2) {
                                _fun17321_ip = 53;
                                continue _fun17321
                            }
                        case 37:
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            var _closure3_slot0 = var2;
                            var2 = true;
                            _closure3_slot1 = var2;
                        case 53:
                            var4 = _closure2_slot1;
                            var3 = var4.addListener;
                            var2 = 'focus';
                            var1 = function() { // Environment: var0
                                _fun17323: for (var _fun17323_ip = 0;;) switch (_fun17323_ip) {
                                    case 0:
                                        var0 = _closure3_slot1;
                                        if (var0) {
                                            _fun17323_ip = 46;
                                            continue _fun17323
                                        }
                                    case 10:
                                        var0 = _closure3_slot0;
                                        var2 = undefined;
                                        if (!(var2 !== var0)) {
                                            _fun17323_ip = 28;
                                            continue _fun17323
                                        }
                                    case 20:
                                        var0 = _closure3_slot0;
                                        var0 = var0.bind(var2)();
                                    case 28:
                                        var0 = _closure3_slot2;
                                        var0 = var0.bind(var2)();
                                        _closure3_slot0 = var0;
                                        var0 = true;
                                        _closure3_slot1 = var0;
                                    case 46:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot3 = var1;
                            var3 = var4.addListener;
                            var2 = 'blur';
                            var1 = function() { // Environment: var0
                                _fun17324: for (var _fun17324_ip = 0;;) switch (_fun17324_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        if (!(var0 !== var1)) {
                                            _fun17324_ip = 21;
                                            continue _fun17324
                                        }
                                    case 13:
                                        var1 = _closure3_slot0;
                                        var1 = var1.bind(var0)();
                                    case 21:
                                        _closure3_slot0 = var0;
                                        var1 = false;
                                        _closure3_slot1 = var1;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot4 = var1;
                            var0 = function() { // Environment: var0
                                _fun17325: for (var _fun17325_ip = 0;;) switch (_fun17325_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var0 = undefined;
                                        if (!(var0 !== var2)) {
                                            _fun17325_ip = 21;
                                            continue _fun17325
                                        }
                                    case 13:
                                        var2 = _closure3_slot0;
                                        var2 = var2.bind(var0)();
                                    case 21:
                                        var2 = _closure3_slot3;
                                        var2 = var2.bind(var0)();
                                        var1 = _closure3_slot4;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1521]);