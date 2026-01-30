// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function(arg0) { // Original name: useFocusEvents, environment: var1
        var0 = arg0;
        var2 = var0.state;
        var6 = var0.emitter;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot2;
        var5 = var4.useContext;
        var7 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 1;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var7.bind(var0)(var3);
        var5 = var5.bind(var4)(var3);
        var _closure2_slot1 = var5;
        var3 = var4.useRef;
        var3 = var3.bind(var4)();
        var _closure2_slot2 = var3;
        var3 = var2.routes;
        var2 = var2.index;
        var2 = var3[var2];
        var7 = var2.key;
        var _closure2_slot3 = var7;
        var8 = var4.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var5;
        var2 = function() { // Environment: var1
            _fun17373: for (var _fun17373_ip = 0;;) switch (_fun17373_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    var0 = undefined;
                    if (var2) {
                        _fun17373_ip = 45;
                        continue _fun17373
                    }
                case 18:
                    var4 = _closure2_slot1;
                    var3 = var4.addListener;
                    var2 = 'focus';
                    var1 = function() { // Environment: var1
                        var1 = _closure2_slot2;
                        var3 = _closure2_slot3;
                        var1.current = var3;
                        var2 = _closure2_slot0;
                        var1 = var2.emit;
                        var0 = {};
                        var4 = 'focus';
                        var0.type = var4;
                        var0.target = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1);
                case 45:
                    return var0;
            }
        };
        var2 = var8.bind(var4)(var2, var3);
        var8 = var4.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var5;
        var2 = function() { // Environment: var1
            _fun17375: for (var _fun17375_ip = 0;;) switch (_fun17375_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    var0 = undefined;
                    if (var2) {
                        _fun17375_ip = 45;
                        continue _fun17375
                    }
                case 18:
                    var4 = _closure2_slot1;
                    var3 = var4.addListener;
                    var2 = 'blur';
                    var1 = function() { // Environment: var1
                        var1 = _closure2_slot2;
                        var0 = undefined;
                        var1.current = var0;
                        var3 = _closure2_slot0;
                        var2 = var3.emit;
                        var1 = {};
                        var5 = 'blur';
                        var1.type = var5;
                        var4 = _closure2_slot3;
                        var1.target = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var1);
                case 45:
                    return var0;
            }
        };
        var2 = var8.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun17377: for (var _fun17377_ip = 0;;) switch (_fun17377_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var5 = var1.current;
                    var0 = _closure2_slot3;
                    var1.current = var0;
                    var0 = undefined;
                    var1 = var0 !== var5;
                    var2 = var1;
                    if (var2) {
                        _fun17377_ip = 38;
                        continue _fun17377
                    }
                case 34:
                    var2 = _closure2_slot1;
                case 38:
                    if (var2) {
                        _fun17377_ip = 75;
                        continue _fun17377
                    }
                case 41:
                    var6 = _closure2_slot0;
                    var3 = var6.emit;
                    var2 = {};
                    var7 = 'focus';
                    var2.type = var7;
                    var7 = _closure2_slot3;
                    var2.target = var7;
                    var2 = var3.bind(var6)(var2);
                case 75:
                    var2 = _closure2_slot3;
                    var2 = var5 === var2;
                    if (var2) {
                        _fun17377_ip = 113;
                        continue _fun17377
                    }
                case 86:
                    var3 = _closure2_slot1;
                    if (!var3) {
                        _fun17377_ip = 110;
                        continue _fun17377
                    }
                case 93:
                    var7 = _closure2_slot1;
                    var6 = var7.isFocused;
                    var6 = var6.bind(var7)();
                    var3 = !var6;
                case 110:
                    var2 = var3;
                case 113:
                    if (var2) {
                        _fun17377_ip = 179;
                        continue _fun17377
                    }
                case 116:
                    if (!var1) {
                        _fun17377_ip = 179;
                        continue _fun17377
                    }
                case 119:
                    var3 = _closure2_slot0;
                    var2 = var3.emit;
                    var1 = {};
                    var6 = 'blur';
                    var1.type = var6;
                    var1.target = var5;
                    var1 = var2.bind(var3)(var1);
                    var2 = var3.emit;
                    var1 = {};
                    var5 = 'focus';
                    var1.type = var5;
                    var4 = _closure2_slot3;
                    var1.target = var4;
                    var1 = var2.bind(var3)(var1);
                case 179:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1497]);