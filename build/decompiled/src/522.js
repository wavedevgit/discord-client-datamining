// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() { // Original name: hasSymbols, environment: var0
        _fun6608: for (var _fun6608_ip = 0;;) switch (_fun6608_ip) {
            case 0:
                var0 = global;
                var1 = var0.Symbol;
                var5 = 'function';
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 479;
                    continue _fun6608
                }
            case 21:
                var1 = var0.Object;
                var1 = var1.getOwnPropertySymbols;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 479;
                    continue _fun6608
                }
            case 43:
                var1 = var0.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun6608_ip = 475;
                    continue _fun6608
                }
            case 69:
                var4 = {};
                var3 = var0.Symbol;
                var2 = undefined;
                var1 = 'test';
                var3 = var3.bind(var2)(var1);
                var1 = var0.Object;
                var7 = var1.bind(var2)(var3);
                var2 = 'string';
                var1 = typeof var3;
                if (!(var2 !== var1)) {
                    _fun6608_ip = 471;
                    continue _fun6608
                }
            case 113:
                var1 = var0.Object;
                var1 = var1.prototype;
                var2 = var1.toString;
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
                var2 = '[object Symbol]';
                if (!(var2 === var1)) {
                    _fun6608_ip = 467;
                    continue _fun6608
                }
            case 150:
                var1 = var0.Object;
                var1 = var1.prototype;
                var6 = var1.toString;
                var1 = var6.call;
                var1 = var1.bind(var6)(var7);
                if (!(var2 === var1)) {
                    _fun6608_ip = 463;
                    continue _fun6608
                }
            case 183:
                var2 = 42;
                var4[var3] = var2;
                var8 = var4;
                for (var1 in var8)
                    case 201: {
                        case 210: var1 = false;
                        return var1;
                    }
            case 214:
                var1 = var0.Object;
                var1 = var1.keys;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 262;
                    continue _fun6608
                }
            case 232:
                var6 = var0.Object;
                var1 = var6.keys;
                var1 = var1.bind(var6)(var4);
                var6 = var1.length;
                var1 = 0;
                if (!(var1 === var6)) {
                    _fun6608_ip = 459;
                    continue _fun6608
                }
            case 262:
                var1 = var0.Object;
                var1 = var1.getOwnPropertyNames;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 312;
                    continue _fun6608
                }
            case 281:
                var6 = var0.Object;
                var1 = var6.getOwnPropertyNames;
                var1 = var1.bind(var6)(var4);
                var6 = var1.length;
                var1 = 0;
                if (!(var1 === var6)) {
                    _fun6608_ip = 455;
                    continue _fun6608
                }
            case 312:
                var6 = var0.Object;
                var1 = var6.getOwnPropertySymbols;
                var6 = var1.bind(var6)(var4);
                var7 = var6.length;
                var1 = 1;
                if (!(var1 === var7)) {
                    _fun6608_ip = 451;
                    continue _fun6608
                }
            case 341:
                var1 = 0;
                var1 = var6[var1];
                if (!(var1 === var3)) {
                    _fun6608_ip = 451;
                    continue _fun6608
                }
            case 351:
                var1 = var0.Object;
                var1 = var1.prototype;
                var6 = var1.propertyIsEnumerable;
                var1 = var6.call;
                var1 = var1.bind(var6)(var4, var3);
                if (var1) {
                    _fun6608_ip = 386;
                    continue _fun6608
                }
            case 382:
                var1 = false;
                return var1;
            case 386:
                var1 = var0.Object;
                var1 = var1.getOwnPropertyDescriptor;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 443;
                    continue _fun6608
                }
            case 405:
                var1 = var0.Object;
                var0 = var1.getOwnPropertyDescriptor;
                var0 = var0.bind(var1)(var4, var3);
                var1 = var0.value;
                if (!(var2 === var1)) {
                    _fun6608_ip = 447;
                    continue _fun6608
                }
            case 432:
                var1 = var0.enumerable;
                var0 = true;
                if (!(var0 === var1)) {
                    _fun6608_ip = 447;
                    continue _fun6608
                }
            case 443:
                var0 = true;
                return var0;
            case 447:
                var0 = false;
                return var0;
            case 451:
                var0 = false;
                return var0;
            case 455:
                var0 = false;
                return var0;
            case 459:
                var0 = false;
                return var0;
            case 463:
                var0 = false;
                return var0;
            case 467:
                var0 = false;
                return var0;
            case 471:
                var0 = false;
                return var0;
            case 475:
                var0 = true;
                return var0;
            case 479:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);