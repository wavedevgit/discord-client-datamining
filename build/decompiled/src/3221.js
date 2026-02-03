// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var2 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var2;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot3 = var1;
    var1.resetWarningCache = var2;
    var1 = function() { // Environment: var0
        var2 = function arg0, arg1, arg2, arg3, arg4, arg5() {
            _fun27981: for (var _fun27981_ip = 0;;) switch (_fun27981_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = arg5;
                    if (!(var1 === var2)) {
                        _fun27981_ip = 33;
                        continue _fun27981
                    }
                case 31:
                    return var0;
                case 33:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var1 = 'Invariant Violation';
                    var0.name = var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var1 = function() {
            var0 = _closure2_slot0;
            return var0;
        };
        var2.isRequired = var2;
        var0 = {};
        var0.array = var2;
        var0.bool = var2;
        var0.func = var2;
        var0.number = var2;
        var0.object = var2;
        var0.string = var2;
        var0.symbol = var2;
        var0.any = var2;
        var0.arrayOf = var1;
        var0.element = var2;
        var0.elementType = var2;
        var0.instanceOf = var1;
        var0.node = var2;
        var0.objectOf = var1;
        var0.oneOf = var1;
        var0.oneOfType = var1;
        var0.shape = var1;
        var0.exact = var1;
        var2 = _closure1_slot3;
        var0.checkPropTypes = var2;
        var1 = _closure1_slot2;
        var0.resetWarningCache = var1;
        var0.PropTypes = var0;
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3222]);