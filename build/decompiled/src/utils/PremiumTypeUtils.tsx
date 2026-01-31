// utils/PremiumTypeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var5 = function arg0, arg1() {
        _fun18100: for (var _fun18100_ip = 0;;) switch (_fun18100_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = null;
                var0 = var1 == var4;
                if (var0) {
                    _fun18100_ip = 48;
                    continue _fun18100
                }
            case 15:
                var1 = var1 != var5;
                if (!var1) {
                    _fun18100_ip = 45;
                    continue _fun18100
                }
            case 22:
                var3 = _closure1_slot0;
                var3 = var3[var5];
                var2 = _closure1_slot0;
                var2 = var2[var4];
                var1 = var3 >= var2;
            case 45:
                var0 = var1;
            case 48:
                return var0;
        }
    };
    var _closure1_slot1 = var5;
    var3 = function arg0, arg1() {
        _fun18101: for (var _fun18101_ip = 0;;) switch (_fun18101_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun18101_ip = 22;
                    continue _fun18101
                }
            case 12:
                var2 = var1.premiumType;
                var0 = var3 != var2;
            case 22:
                if (!var0) {
                    _fun18101_ip = 49;
                    continue _fun18101
                }
            case 25:
                var4 = _closure1_slot1;
                var3 = var1.premiumType;
                var2 = undefined;
                var1 = arg1;
                var0 = var4.bind(var2)(var3, var1);
            case 49:
                return var0;
        }
    };
    var1 = function arg0, arg1() {
        _fun18102: for (var _fun18102_ip = 0;;) switch (_fun18102_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun18102_ip = 25;
                    continue _fun18102
                }
            case 12:
                var2 = var1.premiumType;
                var1 = arg1;
                var0 = var2 === var1;
            case 25:
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var9[var0];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var6 = var6.PremiumTypeOrder;
    var _closure1_slot0 = var6;
    var6 = {};
    var6.isPremiumAtLeast = var5;
    var6.isPremium = var3;
    var6.isPremiumExactly = var1;
    var7 = 1;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/PremiumTypeUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.isPremiumAtLeast = var5;
    var4 = function arg0, arg1() {
        _fun18103: for (var _fun18103_ip = 0;;) switch (_fun18103_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun18103_ip = 38;
                    continue _fun18103
                }
            case 12:
                var2 = _closure1_slot0;
                var2 = var2[var3];
                var3 = _closure1_slot0;
                var1 = arg1;
                var1 = var3[var1];
                var0 = var2 <= var1;
            case 38:
                return var0;
        }
    };
    var2.isPremiumAtMost = var4;
    var2.isPremium = var3;
    var2.isPremiumExactly = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 2]);