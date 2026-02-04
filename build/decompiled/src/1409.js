// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16441: for (var _fun16441_ip = 0;;) switch (_fun16441_ip) {
        case 0:
            var1 = module;
            var2 = global;
            var2 = var2.Object;
            var2 = var2.create;
            var3 = 'function';
            var2 = typeof var2;
            if (!(var3 !== var2)) {
                _fun16441_ip = 42;
                continue _fun16441
            }
        case 29:
            var2 = function arg0, arg1() {
                _fun16443: for (var _fun16443_ip = 0;;) switch (_fun16443_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = arg1;
                        if (!var2) {
                            _fun16443_ip = 70;
                            continue _fun16443
                        }
                    case 9:
                        var1.super_ = var2;
                        var0 = function() {
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var2.prototype;
                        var0.prototype = var2;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var3 = var2;
                        var0 = new var3[var0](var2);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var1.prototype = var0;
                        var0 = var1.prototype;
                        var0.constructor = var1;
                    case 70:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.exports = var2;
            _fun16441_ip = 53;
            continue _fun16441;
        case 42:
            var0 = function arg0, arg1() {
                _fun16442: for (var _fun16442_ip = 0;;) switch (_fun16442_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg1;
                        if (!var0) {
                            _fun16442_ip = 67;
                            continue _fun16442
                        }
                    case 9:
                        var1.super_ = var0;
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.create;
                        var2 = var0.prototype;
                        var0 = {};
                        var5 = {
                            'value': null,
                            'enumerable': false,
                            'writable': true,
                            'configurable': true
                        };
                        var5.value = var1;
                        var0.constructor = var5;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.prototype = var0;
                    case 67:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.exports = var0;
        case 53:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);