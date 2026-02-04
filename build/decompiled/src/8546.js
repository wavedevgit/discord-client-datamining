// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = ['children', 'offset', 'style', 'enabled'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.forwardRef;
    var8 = var8.useMemo;
    var _closure1_slot4 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Animated;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun68562: for (var _fun68562_ip = 0;;) switch (_fun68562_ip) {
            case 0:
                var6 = arg0;
                var8 = var6.children;
                var1 = var6.offset;
                var3 = undefined;
                if (!(var3 === var1)) {
                    _fun68562_ip = 24;
                    continue _fun68562
                }
            case 22:
                var1 = {};
            case 24:
                var2 = var1.closed;
                var11 = 0;
                if (!(var3 !== var2)) {
                    _fun68562_ip = 39;
                    continue _fun68562
                }
            case 36:
                var11 = var2;
            case 39:
                var _closure2_slot0 = var11;
                var1 = var1.opened;
                var13 = 0;
                if (!(var3 !== var1)) {
                    _fun68562_ip = 58;
                    continue _fun68562
                }
            case 55:
                var13 = var1;
            case 58:
                var5 = var6.style;
                var _closure2_slot1 = var5;
                var1 = var6.enabled;
                var10 = var3 === var1;
                if (var10) {
                    _fun68562_ip = 82;
                    continue _fun68562
                }
            case 79:
                var10 = var1;
            case 82:
                var _closure2_slot2 = var10;
                var4 = _closure1_slot3;
                var2 = _closure1_slot2;
                var7 = var4.bind(var3)(var6, var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 4;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useKeyboardAnimation;
                var2 = var2.bind(var4)();
                var9 = var2.height;
                var _closure2_slot3 = var9;
                var6 = var2.progress;
                var4 = var6.interpolate;
                var2 = {};
                var12 = [0, 1];
                var2.inputRange = var12;
                var12 = new Array(2);
                var12[0] = var11;
                var12[1] = var13;
                var2.outputRange = var12;
                var6 = var4.bind(var6)(var2);
                var _closure2_slot4 = var6;
                var4 = _closure1_slot4;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var6;
                var2[4] = var5;
                var0 = function() { // Environment: var0
                    _fun68563: for (var _fun68563_ip = 0;;) switch (_fun68563_ip) {
                        case 0:
                            var2 = {};
                            var3 = {};
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun68563_ip = 20;
                                continue _fun68563
                            }
                        case 14:
                            var0 = _closure2_slot0;
                            _fun68563_ip = 46;
                            continue _fun68563;
                        case 20:
                            var7 = _closure1_slot5;
                            var6 = var7.add;
                            var5 = _closure2_slot3;
                            var4 = _closure2_slot4;
                            var0 = var6.bind(var7)(var5, var4);
                        case 46:
                            var3.translateY = var0;
                            var0 = new Array(1);
                            var0[0] = var3;
                            var2.transform = var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var1 = _closure2_slot1;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var0 = var4.bind(var3)(var0, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var1 = var1.View;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var9 = arg1;
                var4.ref = var9;
                var4.style = var0;
                var0 = {};
                var0.children = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 8532]);