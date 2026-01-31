// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useEffect;
    var _closure1_slot3 = var4;
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var1 = function() {
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.get;
            var0 = 'window';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var0 = 2;
        var5 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var _closure2_slot0 = var0;
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot1 = var3;
        var3 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = function() { // Environment: var1
            var3 = function arg0() {
                _fun4919: for (var _fun4919_ip = 0;;) switch (_fun4919_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.window;
                        var1 = _closure2_slot0;
                        var3 = var1.width;
                        var1 = var2.width;
                        var1 = var3 === var1;
                        if (!var1) {
                            _fun4919_ip = 50;
                            continue _fun4919
                        }
                    case 32:
                        var3 = _closure2_slot0;
                        var4 = var3.height;
                        var3 = var2.height;
                        var1 = var4 === var3;
                    case 50:
                        if (!var1) {
                            _fun4919_ip = 73;
                            continue _fun4919
                        }
                    case 53:
                        var3 = _closure2_slot0;
                        var4 = var3.scale;
                        var3 = var2.scale;
                        var1 = var4 === var3;
                    case 73:
                        if (!var1) {
                            _fun4919_ip = 96;
                            continue _fun4919
                        }
                    case 76:
                        var3 = _closure2_slot0;
                        var4 = var3.fontScale;
                        var3 = var2.fontScale;
                        var1 = var4 === var3;
                    case 96:
                        if (var1) {
                            _fun4919_ip = 110;
                            continue _fun4919
                        }
                    case 99:
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 110:
                        var0 = undefined;
                        return var0;
                }
            };
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var1 = var6[var4];
            var2 = undefined;
            var8 = var5.bind(var2)(var1);
            var7 = var8.addEventListener;
            var1 = 'change';
            var1 = var7.bind(var8)(var1, var3);
            var _closure3_slot0 = var1;
            var1 = {};
            var4 = var6[var4];
            var6 = var5.bind(var2)(var4);
            var5 = var6.get;
            var4 = 'window';
            var4 = var5.bind(var6)(var4);
            var1.window = var4;
            var1 = var3.bind(var2)(var1);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 97]);