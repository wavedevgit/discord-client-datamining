// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0, arg1, arg2() {
        _fun1261: for (var _fun1261_ip = 0;;) switch (_fun1261_ip) {
            case 0:
                var11 = arg1;
                var0 = arg2;
                var4 = undefined;
                var5 = null;
                if (!(var4 !== var0)) {
                    _fun1261_ip = 17;
                    continue _fun1261
                }
            case 14:
                var5 = '' + var0;
            case 17:
                var0 = var11.key;
                if (!(var4 !== var0)) {
                    _fun1261_ip = 34;
                    continue _fun1261
                }
            case 26:
                var0 = var11.key;
                var5 = '' + var0;
            case 34:
                var10 = 'key';
                var0 = var10 in var11;
                var1 = var11;
                if (!var0) {
                    _fun1261_ip = 93;
                    continue _fun1261
                }
            case 48:
                var3 = {};
                var8 = var11;
                var1 = var3;
                for (var0 in var8)
                    case 64: {
                        var1 = var3;
                        case 76: var13 = var0;
                        if (var10 === var13) {
                            _fun1261_ip = 64;
                            continue _fun1261
                        }
                        case 83: var12 = var11[var13];
                        var3[var13] = var12;
                        _fun1261_ip = 64;
                        continue _fun1261;
                    }
            case 93:
                var3 = var1.ref;
                var0 = {};
                var6 = _closure1_slot0;
                var0.$$typeof = var6;
                var6 = arg0;
                var0.type = var6;
                var0.key = var5;
                var2 = null;
                if (!(var4 !== var3)) {
                    _fun1261_ip = 132;
                    continue _fun1261
                }
            case 129:
                var2 = var3;
            case 132:
                var0.ref = var2;
                var0.props = var1;
                return var0;
        }
    };
    var2 = global;
    var6 = var2.Symbol;
    var5 = var6.for;
    var3 = 'react.transitional.element';
    var3 = var5.bind(var6)(var3);
    var _closure1_slot0 = var3;
    var4 = var2.Symbol;
    var3 = var4.for;
    var2 = 'react.fragment';
    var2 = var3.bind(var4)(var2);
    var1.Fragment = var2;
    var1.jsx = var0;
    var1.jsxs = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);