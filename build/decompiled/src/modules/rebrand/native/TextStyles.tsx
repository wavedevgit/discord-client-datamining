// modules/rebrand/native/TextStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Fonts;
    var _closure1_slot0 = var3;
    var3 = {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        16: 16,
        18: 17,
        20: 20,
        24: 25,
        32: 34
    };
    var _closure1_slot1 = var3;
    var3 = {
        10: 14,
        11: 14,
        12: 16,
        13: 16,
        14: 18,
        16: 20,
        18: 24,
        20: 24,
        24: 30,
        32: 40
    };
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rebrand/native/TextStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun43290: for (var _fun43290_ip = 0;;) switch (_fun43290_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var4 = arg2;
                var1 = arg3;
                var0 = _closure1_slot1;
                var5 = var0[var4];
                var0 = {};
                var0.fontFamily = var7;
                var0.fontSize = var5;
                var3 = _closure1_slot2;
                var3 = var3[var4];
                var0.lineHeight = var3;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun43290_ip = 60;
                    continue _fun43290
                }
            case 54:
                var0.color = var2;
            case 60:
                var4 = var3 == var1;
                var8 = undefined;
                if (var4) {
                    _fun43290_ip = 75;
                    continue _fun43290
                }
            case 69:
                var8 = var1.uppercase;
            case 75:
                var4 = true;
                if (!(var4 === var8)) {
                    _fun43290_ip = 154;
                    continue _fun43290
                }
            case 81:
                var4 = 'uppercase';
                var0.textTransform = var4;
                var4 = 14;
                var4 = var5 <= var4;
                if (!var4) {
                    _fun43290_ip = 135;
                    continue _fun43290
                }
            case 101:
                var5 = _closure1_slot0;
                var5 = var5.DISPLAY_EXTRABOLD;
                var5 = var7 === var5;
                if (var5) {
                    _fun43290_ip = 132;
                    continue _fun43290
                }
            case 118:
                var6 = _closure1_slot0;
                var6 = var6.DISPLAY_SEMIBOLD;
                var5 = var7 === var6;
            case 132:
                var4 = var5;
            case 135:
                if (!var4) {
                    _fun43290_ip = 154;
                    continue _fun43290
                }
            case 138:
                var4 = 0.2;
                var0.letterSpacing = var4;
            case 154:
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun43290_ip = 168;
                    continue _fun43290
                }
            case 163:
                var2 = var1.marginBottom;
            case 168:
                if (!(var3 != var2)) {
                    _fun43290_ip = 183;
                    continue _fun43290
                }
            case 172:
                var1 = var1.marginBottom;
                var0.marginBottom = var1;
            case 183:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);