// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            _fun17166: for (var _fun17166_ip = 0;;) switch (_fun17166_ip) {
                case 0:
                    var3 = undefined;
                    var0 = undefined;
                    var1 = 0;
                    var0 = arguments[var1];
                    if (!(var3 === var0)) {
                        _fun17166_ip = 72;
                        continue _fun17166
                    }
                case 14:
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.Navigator = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var0.Group = var1;
                    var1 = 1;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var0.Screen = var1;
                    return var0;
                case 72:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = "Creating a navigator doesn't take an argument. Maybe you are trying to use React Navigation 4 API? See https://reactnavigation.org/docs/hello-react-navigation for the latest API and guides.";
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        return var0;
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1499, 1500]);