// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43657: for (var _fun43657_ip = 0;;) switch (_fun43657_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var1 = function arg0() {
                _fun43658: for (var _fun43658_ip = 0;;) switch (_fun43658_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.children;
                        var7 = var0.style;
                        var3 = _closure1_slot2;
                        var1 = var3.useContext;
                        var8 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var2 = 4;
                        var0 = var0[var2];
                        var4 = undefined;
                        var0 = var8.bind(var4)(var0);
                        var0 = var0.SafeAreaInsetsContext;
                        var0 = var1.bind(var3)(var0);
                        var3 = _closure1_slot4;
                        if (var0) {
                            _fun43658_ip = 116;
                            continue _fun43658
                        }
                    case 66:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var2];
                        var0 = var1.bind(var4)(var0);
                        var1 = var0.SafeAreaProvider;
                        var0 = {};
                        var2 = _closure1_slot5;
                        var0.initialMetrics = var2;
                        var0.style = var7;
                        var0.children = var5;
                        var0 = var3.bind(var4)(var1, var0);
                        _fun43658_ip = 157;
                        continue _fun43658;
                    case 116:
                        var2 = _closure1_slot3;
                        var1 = {};
                        var6 = _closure1_slot6;
                        var8 = var6.container;
                        var6 = new Array(2);
                        var6[0] = var8;
                        var6[1] = var7;
                        var1.style = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 157:
                        return var0;
                }
            };
            var0 = global;
            var8 = var0.Object;
            var6 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var8)(var2, var0, var3);
            var9 = 0;
            var6 = var7[var9];
            var3 = arg2;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var8 = 1;
            var6 = var7[var8];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot2 = var3;
            var3 = 2;
            var3 = var7[var3];
            var3 = var5.bind(var0)(var3);
            var11 = var3.Dimensions;
            var6 = var3.Platform;
            var6 = var3.StyleSheet;
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var3 = 3;
            var3 = var7[var3];
            var3 = var5.bind(var0)(var3);
            var10 = var3.jsx;
            var _closure1_slot4 = var10;
            var3 = var3.jsxs;
            var10 = var11.get;
            var3 = 'window';
            var3 = var10.bind(var11)(var3);
            var11 = var3.width;
            var10 = 0;
            if (!(var0 !== var11)) {
                _fun43657_ip = 184;
                continue _fun43657
            }
        case 181:
            var10 = var11;
        case 184:
            var3 = var3.height;
            var9 = 0;
            if (!(var0 !== var3)) {
                _fun43657_ip = 198;
                continue _fun43657
            }
        case 195:
            var9 = var3;
        case 198:
            var3 = 4;
            var11 = var7[var3];
            var11 = var5.bind(var0)(var11);
            var12 = var11.initialWindowMetrics;
            var11 = null;
            if (!(var11 != var12)) {
                _fun43657_ip = 239;
                continue _fun43657
            }
        case 222:
            var3 = var7[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.initialWindowMetrics;
            _fun43657_ip = 282;
            continue _fun43657;
        case 239:
            var5 = {};
            var7 = {
                'x': 0,
                'y': 0
            };
            var7.width = var10;
            var7.height = var9;
            var5.frame = var7;
            var7 = {
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0
            };
            var5.insets = var7;
            var3 = var5;
        case 282:
            var _closure1_slot5 = var3;
            var1.initialMetrics = var3;
            var5 = var6.create;
            var3 = {};
            var7 = {};
            var7.flex = var8;
            var3.container = var7;
            var3 = var5.bind(var6)(var3);
            var _closure1_slot6 = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1571]);