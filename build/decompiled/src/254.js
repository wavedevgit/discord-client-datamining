// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3310: for (var _fun3310_ip = 0;;) switch (_fun3310_ip) {
        case 0:
            var4 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var1 = 0;
            var7 = var6[var1];
            var0 = undefined;
            var7 = var4.bind(var0)(var7);
            var9 = var7.default;
            var8 = var9.roundToNearestPixel;
            var7 = 0.4;
            var7 = var8.bind(var9)(var7);
            if (!(var1 === var7)) {
                _fun3310_ip = 127;
                continue _fun3310
            }
        case 97:
            var1 = var6[var1];
            var1 = var4.bind(var0)(var1);
            var4 = var1.default;
            var1 = var4.get;
            var4 = var1.bind(var4)();
            var1 = 1;
            var7 = var1 / var4;
        case 127:
            var4 = {
                'position': 'absolute',
                'left': 0,
                'right': 0,
                'top': 0,
                'bottom': 0
            };
            var1 = {};
            var1.hairlineWidth = var7;
            var1.absoluteFill = var4;
            var1.absoluteFillObject = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var1.compose = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var1.flatten = var4;
            var4 = function arg0, arg1() {
                _fun3311: for (var _fun3311_ip = 0;;) switch (_fun3311_ip) {
                    case 0:
                        var3 = arg0;
                        var6 = arg1;
                        var4 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var5 = 3;
                        var2 = var0[var5];
                        var0 = undefined;
                        var2 = var4.bind(var0)(var2);
                        var2 = var2.default;
                        var4 = var2[var3];
                        var2 = true;
                        if (!(var2 !== var4)) {
                            _fun3311_ip = 192;
                            continue _fun3311
                        }
                    case 49:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var4.bind(var0)(var2);
                        var2 = var2.default;
                        var2 = var2[var3];
                        var4 = 'object';
                        var2 = typeof var2;
                        if (!(var4 === var2)) {
                            _fun3311_ip = 143;
                            continue _fun3311
                        }
                    case 86:
                        var2 = global;
                        var9 = var2.Object;
                        var8 = var9.assign;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var4.bind(var0)(var2);
                        var2 = var2.default;
                        var7 = var2[var3];
                        var4 = {};
                        var4.process = var6;
                        var2 = {};
                        var2 = var8.bind(var9)(var2, var7, var4);
                        _fun3311_ip = 202;
                        continue _fun3311;
                    case 143:
                        var4 = global;
                        var8 = var4.console;
                        var7 = var8.error;
                        var4 = var4.HermesInternal;
                        var10 = var4.concat;
                        var9 = '';
                        var4 = ' is not a valid style attribute';
                        var4 = var10.bind(var9)(var3, var4);
                        var4 = var7.bind(var8)(var4);
                        var4 = undefined;
                        return var4;
                    case 192:
                        var4 = {};
                        var4.process = var6;
                        var2 = var4;
                    case 202:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.default;
                        var1[var3] = var2;
                        return var0;
                }
            };
            var1.setStyleAttributePreprocessor = var4;
            var3 = function arg0() {
                var0 = arg0;
                return var0;
            };
            var1.create = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [96, 255, 147, 73]);