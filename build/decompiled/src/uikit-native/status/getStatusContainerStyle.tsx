// uikit-native/status/getStatusContainerStyle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var10 = function arg0, arg1() {
        _fun48948: for (var _fun48948_ip = 0;;) switch (_fun48948_ip) {
            case 0:
                var3 = arg1;
                var0 = {};
                var2 = _closure1_slot0;
                var4 = 2;
                var5 = var4 * var2;
                var2 = arg0;
                var6 = var2 + var5;
                var0.width = var6;
                var5 = 0;
                if (!var3) {
                    _fun48948_ip = 49;
                    continue _fun48948
                }
            case 35:
                var7 = 2.5;
                var5 = var6 / var7;
            case 49:
                var5 = var6 + var5;
                var0.height = var5;
                if (var3) {
                    _fun48948_ip = 66;
                    continue _fun48948
                }
            case 60:
                var4 = var6 / var4;
                _fun48948_ip = 73;
                continue _fun48948;
            case 66:
                var5 = 4;
                var4 = var6 / var5;
            case 73:
                var0.borderRadius = var4;
                var4 = _closure1_slot0;
                var0.paddingLeft = var4;
                var4 = _closure1_slot0;
                var0.paddingRight = var4;
                var5 = _closure1_slot0;
                var4 = 0;
                if (!var3) {
                    _fun48948_ip = 107;
                    continue _fun48948
                }
            case 104:
                var4 = 1;
            case 107:
                var4 = var5 + var4;
                var0.paddingTop = var4;
                var1 = _closure1_slot0;
                var2 = 0;
                if (!var3) {
                    _fun48948_ip = 128;
                    continue _fun48948
                }
            case 125:
                var2 = 1;
            case 128:
                var1 = var1 + var2;
                var0.paddingBottom = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var10;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.STATUS_PADDING;
    var _closure1_slot0 = var6;
    var8 = var3.StatusSizes;
    var _closure1_slot1 = var8;
    var6 = var7.create;
    var3 = {};
    var11 = var8.SMALL;
    var12 = false;
    var11 = var10.bind(var0)(var11, var12);
    var3.containerSmall = var11;
    var11 = var8.REFRESH_MEDIUM_10;
    var11 = var10.bind(var0)(var11, var12);
    var3.containerRefreshMedium = var11;
    var11 = var8.MEDIUM;
    var11 = var10.bind(var0)(var11, var12);
    var3.containerMedium = var11;
    var11 = var8.LARGE;
    var11 = var10.bind(var0)(var11, var12);
    var3.containerLarge = var11;
    var11 = var8.LARGE;
    var11 = var10.bind(var0)(var11, var12);
    var3.containerXLarge = var11;
    var11 = var8.SMALL;
    var11 = var10.bind(var0)(var11, var9);
    var3.containerMobileOnlineSmall = var11;
    var11 = var8.REFRESH_MEDIUM_10;
    var11 = var10.bind(var0)(var11, var9);
    var3.containerMobileOnlineRefreshMedium = var11;
    var11 = var8.MEDIUM;
    var11 = var10.bind(var0)(var11, var9);
    var3.containerMobileOnlineMedium = var11;
    var11 = var8.LARGE;
    var11 = var10.bind(var0)(var11, var9);
    var3.containerMobileOnlineLarge = var11;
    var8 = var8.LARGE;
    var8 = var10.bind(var0)(var8, var9);
    var3.containerMobileOnlineXLarge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/status/getStatusContainerStyle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun48949: for (var _fun48949_ip = 0;;) switch (_fun48949_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var2 = _closure1_slot1;
                var2 = var2.SMALL;
                if (!(var2 !== var4)) {
                    _fun48949_ip = 191;
                    continue _fun48949
                }
            case 26:
                var2 = _closure1_slot1;
                var2 = var2.REFRESH_MEDIUM_10;
                if (!(var2 !== var4)) {
                    _fun48949_ip = 168;
                    continue _fun48949
                }
            case 43:
                var2 = _closure1_slot1;
                var2 = var2.MEDIUM;
                if (!(var2 !== var4)) {
                    _fun48949_ip = 145;
                    continue _fun48949
                }
            case 57:
                var2 = _closure1_slot1;
                var2 = var2.LARGE;
                if (!(var2 !== var4)) {
                    _fun48949_ip = 122;
                    continue _fun48949
                }
            case 71:
                var2 = _closure1_slot1;
                var2 = var2.XLARGE;
                if (!(var2 !== var4)) {
                    _fun48949_ip = 99;
                    continue _fun48949
                }
            case 85:
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var4, var0);
                return var2;
            case 99:
                var3 = _closure1_slot2;
                if (var0) {
                    _fun48949_ip = 114;
                    continue _fun48949
                }
            case 106:
                var2 = var3.containerXLarge;
                _fun48949_ip = 120;
                continue _fun48949;
            case 114:
                var2 = var3.containerMobileOnlineXLarge;
            case 120:
                return var2;
            case 122:
                var3 = _closure1_slot2;
                if (var0) {
                    _fun48949_ip = 137;
                    continue _fun48949
                }
            case 129:
                var2 = var3.containerLarge;
                _fun48949_ip = 143;
                continue _fun48949;
            case 137:
                var2 = var3.containerMobileOnlineLarge;
            case 143:
                return var2;
            case 145:
                var3 = _closure1_slot2;
                if (var0) {
                    _fun48949_ip = 160;
                    continue _fun48949
                }
            case 152:
                var2 = var3.containerMedium;
                _fun48949_ip = 166;
                continue _fun48949;
            case 160:
                var2 = var3.containerMobileOnlineMedium;
            case 166:
                return var2;
            case 168:
                var3 = _closure1_slot2;
                if (var0) {
                    _fun48949_ip = 183;
                    continue _fun48949
                }
            case 175:
                var2 = var3.containerRefreshMedium;
                _fun48949_ip = 189;
                continue _fun48949;
            case 183:
                var2 = var3.containerMobileOnlineRefreshMedium;
            case 189:
                return var2;
            case 191:
                var1 = _closure1_slot2;
                if (var0) {
                    _fun48949_ip = 206;
                    continue _fun48949
                }
            case 198:
                var0 = var1.containerSmall;
                _fun48949_ip = 212;
                continue _fun48949;
            case 206:
                var0 = var1.containerMobileOnlineSmall;
            case 212:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5415, 2]);