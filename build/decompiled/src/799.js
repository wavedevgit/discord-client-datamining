// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8570: for (var _fun8570_ip = 0;;) switch (_fun8570_ip) {
        case 0:
            var3 = require;
            var2 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            var0 = 0;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var4 = global;
            var3 = var4.Object;
            var3 = var3.is;
            var5 = 'function';
            var3 = typeof var3;
            if (!(var5 !== var3)) {
                _fun8570_ip = 61;
                continue _fun8570
            }
        case 54:
            var3 = function(arg0, arg1) { // Original name: is, environment: var1
                _fun8571: for (var _fun8571_ip = 0;;) switch (_fun8571_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        var0 = var1 === var2;
                        if (!var0) {
                            _fun8571_ip = 40;
                            continue _fun8571
                        }
                    case 13:
                        var3 = 0;
                        var3 = var3 !== var1;
                        if (var3) {
                            _fun8571_ip = 37;
                            continue _fun8571
                        }
                    case 22:
                        var4 = 1;
                        var5 = var4 / var1;
                        var4 = var4 / var2;
                        var3 = var5 === var4;
                    case 37:
                        var0 = var3;
                    case 40:
                        if (var0) {
                            _fun8571_ip = 57;
                            continue _fun8571
                        }
                    case 43:
                        var1 = var1 != var1;
                        if (!var1) {
                            _fun8571_ip = 54;
                            continue _fun8571
                        }
                    case 50:
                        var1 = var2 != var2;
                    case 54:
                        var0 = var1;
                    case 57:
                        return var0;
                }
            };
            _fun8570_ip = 73;
            continue _fun8570;
        case 61:
            var4 = var4.Object;
            var3 = var4.is;
        case 73:
            var _closure1_slot2 = var3;
            var3 = var2.useRef;
            var _closure1_slot3 = var3;
            var3 = var2.useEffect;
            var _closure1_slot4 = var3;
            var3 = var2.useMemo;
            var _closure1_slot5 = var3;
            var2 = var2.useDebugValue;
            var _closure1_slot6 = var2;
            var2 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
                _fun8572: for (var _fun8572_ip = 0;;) switch (_fun8572_ip) {
                    case 0:
                        var8 = arg1;
                        var7 = arg2;
                        var6 = arg3;
                        var0 = arg4;
                        var _closure2_slot0 = var8;
                        var _closure2_slot1 = var7;
                        var _closure2_slot2 = var6;
                        var _closure2_slot3 = var0;
                        var4 = _closure1_slot3;
                        var2 = undefined;
                        var9 = null;
                        var5 = var4.bind(var2)(var9);
                        var4 = var5.current;
                        if (!(var9 !== var4)) {
                            _fun8572_ip = 66;
                            continue _fun8572
                        }
                    case 55:
                        var4 = var5.current;
                        var _closure2_slot4 = var4;
                        _fun8572_ip = 86;
                        continue _fun8572;
                    case 66:
                        var4 = {
                            'hasValue': false,
                            'value': null
                        };
                        _closure2_slot4 = var4;
                        var5.current = var4;
                    case 86:
                        var5 = _closure1_slot5;
                        var4 = new Array(4);
                        var4[0] = var8;
                        var4[1] = var7;
                        var4[2] = var6;
                        var4[3] = var0;
                        var0 = function() { // Environment: var3
                            _fun8573: for (var _fun8573_ip = 0;;) switch (_fun8573_ip) {
                                case 0:
                                    var0 = function(arg0) { // Original name: memoizedSelector, environment: var2
                                        _fun8574: for (var _fun8574_ip = 0;;) switch (_fun8574_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = _closure3_slot2;
                                                if (var0) {
                                                    _fun8574_ip = 92;
                                                    continue _fun8574
                                                }
                                            case 13:
                                                var0 = true;
                                                _closure3_slot2 = var0;
                                                var _closure3_slot0 = var3;
                                                var0 = _closure2_slot2;
                                                var5 = undefined;
                                                var1 = var0.bind(var5)(var3);
                                                var0 = _closure2_slot3;
                                                if (!(var5 !== var0)) {
                                                    _fun8574_ip = 80;
                                                    continue _fun8574
                                                }
                                            case 45:
                                                var0 = _closure2_slot4;
                                                var0 = var0.hasValue;
                                                if (!var0) {
                                                    _fun8574_ip = 80;
                                                    continue _fun8574
                                                }
                                            case 58:
                                                var0 = _closure2_slot4;
                                                var0 = var0.value;
                                                var4 = _closure2_slot3;
                                                var4 = var4.bind(var5)(var0, var1);
                                                if (var4) {
                                                    _fun8574_ip = 86;
                                                    continue _fun8574
                                                }
                                            case 80:
                                                var _closure3_slot1 = var1;
                                                return var1;
                                            case 86:
                                                _closure3_slot1 = var0;
                                                return var0;
                                            case 92:
                                                var0 = _closure3_slot1;
                                                var4 = _closure1_slot2;
                                                var1 = _closure3_slot0;
                                                var5 = undefined;
                                                var1 = var4.bind(var5)(var1, var3);
                                                if (var1) {
                                                    _fun8574_ip = 170;
                                                    continue _fun8574
                                                }
                                            case 118:
                                                var1 = _closure2_slot2;
                                                var1 = var1.bind(var5)(var3);
                                                var6 = _closure2_slot3;
                                                if (!(var5 !== var6)) {
                                                    _fun8574_ip = 151;
                                                    continue _fun8574
                                                }
                                            case 138:
                                                var4 = _closure2_slot3;
                                                var4 = var4.bind(var5)(var0, var1);
                                                if (var4) {
                                                    _fun8574_ip = 161;
                                                    continue _fun8574
                                                }
                                            case 151:
                                                _closure3_slot0 = var3;
                                                _closure3_slot1 = var1;
                                                _fun8574_ip = 168;
                                                continue _fun8574;
                                            case 161:
                                                _closure3_slot0 = var3;
                                                var1 = var0;
                                            case 168:
                                                return var1;
                                            case 170:
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var0;
                                    var0 = false;
                                    var _closure3_slot2 = var0;
                                    var5 = _closure2_slot1;
                                    var4 = null;
                                    var1 = undefined;
                                    var3 = null;
                                    if (!(var1 !== var5)) {
                                        _fun8573_ip = 38;
                                        continue _fun8573
                                    }
                                case 34:
                                    var3 = _closure2_slot1;
                                case 38:
                                    var _closure3_slot3 = var3;
                                    var0 = new Array(2);
                                    var5 = function() { // Environment: var2
                                        var2 = _closure3_slot4;
                                        var0 = _closure2_slot0;
                                        var1 = undefined;
                                        var0 = var0.bind(var1)();
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var0[0] = var5;
                                    var1 = undefined;
                                    if (!(var4 !== var3)) {
                                        _fun8573_ip = 66;
                                        continue _fun8573
                                    }
                                case 61:
                                    var1 = function() { // Environment: var2
                                        var2 = _closure3_slot4;
                                        var0 = _closure3_slot3;
                                        var1 = undefined;
                                        var0 = var0.bind(var1)();
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                case 66:
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var2)(var0, var4);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 1;
                        var5 = var5[var0];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.useSyncExternalStore;
                        var5 = 0;
                        var5 = var4[var5];
                        var4 = var4[var0];
                        var0 = arg0;
                        var0 = var6.bind(var7)(var0, var5, var4);
                        var _closure2_slot5 = var0;
                        var5 = _closure1_slot4;
                        var4 = new Array(1);
                        var4[0] = var0;
                        var3 = function() { // Environment: var3
                            var2 = _closure2_slot4;
                            var1 = true;
                            var2.hasValue = var1;
                            var1 = _closure2_slot4;
                            var0 = _closure2_slot5;
                            var1.value = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var3 = var5.bind(var2)(var3, var4);
                        var1 = _closure1_slot6;
                        var1 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var1 = arg5;
            var1.useSyncExternalStoreWithSelector = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 800]);