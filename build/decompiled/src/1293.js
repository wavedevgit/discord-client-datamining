// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: isMessagesProxy, environment: var0
        var0 = global;
        var0 = var0.Symbol;
        var1 = var0.toStringTag;
        var0 = arg0;
        var1 = var0[var1];
        var0 = 'IntlMessagesProxy';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot0 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0, arg1) { // Original name: chainMessagesObjects, environment: var0
        _fun14023: for (var _fun14023_ip = 0;;) switch (_fun14023_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var3 = _closure1_slot0;
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var3.bind(var0)(var2);
                if (!var4) {
                    _fun14023_ip = 31;
                    continue _fun14023
                }
            case 28:
                if (var3) {
                    _fun14023_ip = 149;
                    continue _fun14023
                }
            case 31:
                if (var4) {
                    _fun14023_ip = 77;
                    continue _fun14023
                }
            case 34:
                if (var3) {
                    _fun14023_ip = 77;
                    continue _fun14023
                }
            case 37:
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var8 = var0.Object;
                var7 = var8.assign;
                var0 = {};
                var0 = var7.bind(var8)(var0, var2);
                var0 = var5.bind(var6)(var0, var1);
                _fun14023_ip = 175;
                continue _fun14023;
            case 77:
                if (!var4) {
                    _fun14023_ip = 110;
                    continue _fun14023
                }
            case 80:
                if (var3) {
                    _fun14023_ip = 110;
                    continue _fun14023
                }
            case 83:
                var5 = global;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = var1.$$baseObject;
                var0 = var6.bind(var7)(var5, var2);
                _fun14023_ip = 175;
                continue _fun14023;
            case 110:
                if (!var3) {
                    _fun14023_ip = 116;
                    continue _fun14023
                }
            case 113:
                var3 = !var4;
            case 116:
                var0 = var1;
                if (!var3) {
                    _fun14023_ip = 175;
                    continue _fun14023
                }
            case 122:
                var3 = global;
                var5 = var3.Object;
                var4 = var5.assign;
                var3 = var2.$$baseObject;
                var0 = var4.bind(var5)(var3, var1);
                _fun14023_ip = 175;
                continue _fun14023;
            case 149:
                var4 = var1.$$loader;
                var3 = var4.fallbackWith;
                var2 = var2.$$loader;
                var2 = var3.bind(var4)(var2);
                var0 = var1;
            case 175:
                return var0;
        }
    };
    var1.chainMessagesObjects = var2;
    var0 = function(arg0) { // Original name: makeMessagesProxy, environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Original name: makeBind, environment: var4
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure2_slot0;
                var2 = var3.get;
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            return var0;
        };
        var _closure2_slot1 = var0;
        var3 = {};
        var2 = global;
        var5 = var2.Proxy;
        var0 = {};
        var6 = function(arg0) { // Original name: ownKeys, environment: var4
            var0 = global;
            var2 = var0.Reflect;
            var1 = var2.ownKeys;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.ownKeys = var6;
        var6 = function(arg0, arg1) { // Original name: getOwnPropertyDescriptor, environment: var4
            _fun14028: for (var _fun14028_ip = 0;;) switch (_fun14028_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var0 = var3[var2];
                    if (var0) {
                        _fun14028_ip = 31;
                        continue _fun14028
                    }
                case 13:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    var3[var2] = var0;
                case 31:
                    var0 = global;
                    var1 = var0.Reflect;
                    var0 = var1.getOwnPropertyDescriptor;
                    var0 = var0.bind(var1)(var3, var2);
                    return var0;
            }
        };
        var0.getOwnPropertyDescriptor = var6;
        var4 = function(arg0, arg1) { // Original name: get, environment: var4
            _fun14029: for (var _fun14029_ip = 0;;) switch (_fun14029_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var0 = 'object';
                    var1 = '$$typeof';
                    if (!(var1 !== var2)) {
                        _fun14029_ip = 74;
                        continue _fun14029
                    }
                case 18:
                    var1 = global;
                    var1 = var1.Symbol;
                    var4 = var1.toStringTag;
                    var1 = 'IntlMessagesProxy';
                    if (!(var2 !== var4)) {
                        _fun14029_ip = 71;
                        continue _fun14029
                    }
                case 42:
                    var4 = var3[var2];
                    if (var4) {
                        _fun14029_ip = 67;
                        continue _fun14029
                    }
                case 49:
                    var5 = _closure2_slot1;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var2);
                    var3[var2] = var4;
                case 67:
                    var1 = var3[var2];
                case 71:
                    var0 = var1;
                case 74:
                    return var0;
            }
        };
        var0.get = var4;
        var4 = var5.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var5
            }
        });
        var10 = var4;
        var9 = var3;
        var8 = var0;
        var0 = new var10[var5](var9, var8, var7);
        var0 = var0 instanceof Object ? var0 : var4;
        var6 = var2.Object;
        var5 = var6.defineProperty;
        var4 = {
            'value': null,
            'enumerable': false,
            'configurable': false,
            'writable': false
        };
        var4.value = var3;
        var3 = '$$baseObject';
        var3 = var5.bind(var6)(var0, var3, var4);
        var4 = var2.Object;
        var3 = var4.defineProperty;
        var2 = {
            'value': null,
            'enumerable': false,
            'configurable': false,
            'writable': false
        };
        var2.value = var1;
        var1 = '$$loader';
        var1 = var3.bind(var4)(var0, var1, var2);
        return var0;
    };
    var1.makeMessagesProxy = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);