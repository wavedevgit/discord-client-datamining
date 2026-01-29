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
                    _fun6608_ip = 478;
                    continue _fun6608
                }
            case 21:
                var1 = var0.Object;
                var1 = var1.getOwnPropertySymbols;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 478;
                    continue _fun6608
                }
            case 43:
                var1 = var0.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun6608_ip = 474;
                    continue _fun6608
                }
            case 68:
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
                    _fun6608_ip = 470;
                    continue _fun6608
                }
            case 112:
                var1 = var0.Object;
                var1 = var1.prototype;
                var2 = var1.toString;
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
                var2 = '[object Symbol]';
                if (!(var2 === var1)) {
                    _fun6608_ip = 466;
                    continue _fun6608
                }
            case 149:
                var1 = var0.Object;
                var1 = var1.prototype;
                var6 = var1.toString;
                var1 = var6.call;
                var1 = var1.bind(var6)(var7);
                if (!(var2 === var1)) {
                    _fun6608_ip = 462;
                    continue _fun6608
                }
            case 182:
                var2 = 42;
                var4[var3] = var2;
                var8 = var4;
                for (var1 in var8)
                    case 200: {
                        case 209: var1 = false;
                        return var1;
                    }
            case 213:
                var1 = var0.Object;
                var1 = var1.keys;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 261;
                    continue _fun6608
                }
            case 231:
                var6 = var0.Object;
                var1 = var6.keys;
                var1 = var1.bind(var6)(var4);
                var6 = var1.length;
                var1 = 0;
                if (!(var1 === var6)) {
                    _fun6608_ip = 458;
                    continue _fun6608
                }
            case 261:
                var1 = var0.Object;
                var1 = var1.getOwnPropertyNames;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 311;
                    continue _fun6608
                }
            case 280:
                var6 = var0.Object;
                var1 = var6.getOwnPropertyNames;
                var1 = var1.bind(var6)(var4);
                var6 = var1.length;
                var1 = 0;
                if (!(var1 === var6)) {
                    _fun6608_ip = 454;
                    continue _fun6608
                }
            case 311:
                var6 = var0.Object;
                var1 = var6.getOwnPropertySymbols;
                var6 = var1.bind(var6)(var4);
                var7 = var6.length;
                var1 = 1;
                if (!(var1 === var7)) {
                    _fun6608_ip = 450;
                    continue _fun6608
                }
            case 340:
                var1 = 0;
                var1 = var6[var1];
                if (!(var1 === var3)) {
                    _fun6608_ip = 450;
                    continue _fun6608
                }
            case 350:
                var1 = var0.Object;
                var1 = var1.prototype;
                var6 = var1.propertyIsEnumerable;
                var1 = var6.call;
                var1 = var1.bind(var6)(var4, var3);
                if (var1) {
                    _fun6608_ip = 385;
                    continue _fun6608
                }
            case 381:
                var1 = false;
                return var1;
            case 385:
                var1 = var0.Object;
                var1 = var1.getOwnPropertyDescriptor;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun6608_ip = 442;
                    continue _fun6608
                }
            case 404:
                var1 = var0.Object;
                var0 = var1.getOwnPropertyDescriptor;
                var0 = var0.bind(var1)(var4, var3);
                var1 = var0.value;
                if (!(var2 === var1)) {
                    _fun6608_ip = 446;
                    continue _fun6608
                }
            case 431:
                var1 = var0.enumerable;
                var0 = true;
                if (!(var0 === var1)) {
                    _fun6608_ip = 446;
                    continue _fun6608
                }
            case 442:
                var0 = true;
                return var0;
            case 446:
                var0 = false;
                return var0;
            case 450:
                var0 = false;
                return var0;
            case 454:
                var0 = false;
                return var0;
            case 458:
                var0 = false;
                return var0;
            case 462:
                var0 = false;
                return var0;
            case 466:
                var0 = false;
                return var0;
            case 470:
                var0 = false;
                return var0;
            case 474:
                var0 = true;
                return var0;
            case 478:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);