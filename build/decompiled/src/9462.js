// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot0;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun75088: for (var _fun75088_ip = 0;;) switch (_fun75088_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.defaultIndex;
                    var1 = var1.dataLength;
                    var4 = 'number';
                    var3 = typeof var2;
                    if (!(var4 === var3)) {
                        _fun75088_ip = 50;
                        continue _fun75088
                    }
                case 30:
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun75088_ip = 50;
                        continue _fun75088
                    }
                case 36:
                    if (!(!(var2 < var3))) {
                        _fun75088_ip = 208;
                        continue _fun75088
                    }
                case 43:
                    if (!(!(var2 >= var1))) {
                        _fun75088_ip = 208;
                        continue _fun75088
                    }
                case 50:
                    var1 = _closure2_slot0;
                    var1 = var1.mode;
                    if (!var1) {
                        _fun75088_ip = 82;
                        continue _fun75088
                    }
                case 62:
                    var1 = _closure2_slot0;
                    var2 = var1.mode;
                    var1 = 'parallax';
                    if (!(var1 === var2)) {
                        _fun75088_ip = 204;
                        continue _fun75088
                    }
                case 82:
                    var1 = _closure2_slot0;
                    var1 = var1.vertical;
                    if (var1) {
                        _fun75088_ip = 143;
                        continue _fun75088
                    }
                case 95:
                    var1 = _closure2_slot0;
                    var1 = var1.width;
                    if (var1) {
                        _fun75088_ip = 143;
                        continue _fun75088
                    }
                case 107:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = '`width` must be specified for horizontal carousels.';
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 143:
                    var1 = _closure2_slot0;
                    var1 = var1.vertical;
                    if (!var1) {
                        _fun75088_ip = 204;
                        continue _fun75088
                    }
                case 156:
                    var0 = _closure2_slot0;
                    var0 = var0.height;
                    if (var0) {
                        _fun75088_ip = 204;
                        continue _fun75088
                    }
                case 168:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = '`height` must be specified for vertical carousels.';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 204:
                    var0 = undefined;
                    return var0;
                case 208:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = 'DefaultIndex must be in the range of data length.';
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.usePropsErrorBoundary = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);