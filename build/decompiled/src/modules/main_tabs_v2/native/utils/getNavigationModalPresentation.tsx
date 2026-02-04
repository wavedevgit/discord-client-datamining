// modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun72953: for (var _fun72953_ip = 0;;) switch (_fun72953_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var3 = {};
            var6 = 0;
            var7 = var5[var6];
            var0 = undefined;
            var8 = var4.bind(var0)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            if (var7) {
                _fun72953_ip = 116;
                continue _fun72953
            }
        case 79:
            var7 = 2;
            var7 = var5[var7];
            var8 = var4.bind(var0)(var7);
            var7 = var8.isIpadOS;
            var8 = var7.bind(var8)();
            var7 = 'modal';
            if (!var8) {
                _fun72953_ip = 114;
                continue _fun72953
            }
        case 108:
            var7 = 'fullScreenModal';
        case 114:
            _fun72953_ip = 154;
            continue _fun72953;
        case 116:
            var8 = 1;
            var8 = var5[var8];
            var9 = var4.bind(var0)(var8);
            var8 = var9.getIsWindowLarge;
            var9 = var8.bind(var9)();
            var8 = 'modal';
            if (!var9) {
                _fun72953_ip = 151;
                continue _fun72953
            }
        case 145:
            var8 = 'fullScreenModal';
        case 151:
            var7 = var8;
        case 154:
            var3.presentation = var7;
            var6 = var5[var6];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            var6 = !var6;
            var3.lockOrientation = var6;
            var _closure1_slot2 = var3;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function() {
                _fun72954: for (var _fun72954_ip = 0;;) switch (_fun72954_ip) {
                    case 0:
                        var0 = arguments[0];
                        var5 = undefined;
                        if (!(var0 === var5)) {
                            _fun72954_ip = 16;
                            continue _fun72954
                        }
                    case 9:
                        var0 = _closure1_slot2;
                    case 16:
                        var1 = var0.presentation;
                        if (!(var1 === var5)) {
                            _fun72954_ip = 39;
                            continue _fun72954
                        }
                    case 26:
                        var2 = _closure1_slot2;
                        var1 = var2.presentation;
                    case 39:
                        var2 = var0.lockOrientation;
                        if (!(var2 === var5)) {
                            _fun72954_ip = 78;
                            continue _fun72954
                        }
                    case 49:
                        var0 = _closure1_slot2;
                        var0 = var0.lockOrientation;
                        if (!var0) {
                            _fun72954_ip = 75;
                            continue _fun72954
                        }
                    case 65:
                        var3 = 'transparentModal';
                        var0 = var3 !== var1;
                    case 75:
                        var2 = var0;
                    case 78:
                        var0 = {};
                        var0.presentation = var1;
                        var1 = undefined;
                        if (!var2) {
                            _fun72954_ip = 161;
                            continue _fun72954
                        }
                    case 90:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var4 = var6[var2];
                        var7 = var3.bind(var5)(var4);
                        var4 = var7.getOrientation;
                        var4 = var4.bind(var7)();
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.OrientationType;
                        var3 = var2.PORTRAIT;
                        var2 = 'landscape';
                        if (!(var4 === var3)) {
                            _fun72954_ip = 158;
                            continue _fun72954
                        }
                    case 152:
                        var2 = 'portrait';
                    case 158:
                        var1 = var2;
                    case 161:
                        var0.orientation = var1;
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 7688, 1309, 7820, 2]);