// modules/auth/native/components/atoms/BackgroundImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/atoms/BackgroundImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: BackgroundImage, environment: var1
        _fun60774: for (var _fun60774_ip = 0;;) switch (_fun60774_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.backgroundImageSource;
                var _closure2_slot0 = var8;
                var7 = var1.backgroundImageCover;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun60774_ip = 29;
                    continue _fun60774
                }
            case 27:
                var7 = false;
            case 29:
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.bind(var3)();
                _closure2_slot2 = var6;
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun60775: for (var _fun60775_ip = 0;;) switch (_fun60775_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure1_slot6;
                            var2 = var1.absoluteFill;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var4 = _closure2_slot1;
                            if (var4) {
                                _fun60775_ip = 47;
                                continue _fun60775
                            }
                        case 33:
                            var4 = {};
                            var5 = '100%';
                            var4.width = var5;
                            _fun60775_ip = 61;
                            continue _fun60775;
                        case 47:
                            var4 = {
                                'width': '100%',
                                'height': '100%'
                            };
                        case 61:
                            var1[1] = var4;
                            var0.style = var1;
                            var4 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var4)) {
                                _fun60775_ip = 155;
                                continue _fun60775
                            }
                        case 79:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var1 = var5[var1];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var1);
                            var4 = var6.isThemeDark;
                            var1 = _closure2_slot2;
                            var1 = var4.bind(var6)(var1);
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            if (var1) {
                                _fun60775_ip = 141;
                                continue _fun60775
                            }
                        case 127:
                            var1 = 6;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            _fun60775_ip = 153;
                            continue _fun60775;
                        case 141:
                            var3 = 5;
                            var3 = var6[var3];
                            var1 = var4.bind(var5)(var3);
                        case 153:
                            _fun60775_ip = 159;
                            continue _fun60775;
                        case 155:
                            var1 = _closure2_slot0;
                        case 159:
                            var0.source = var1;
                            return var0;
                    }
                };
                var9 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = _closure1_slot6;
                var5 = var5.absoluteFill;
                var0.style = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var10 = var4;
                var6 = copyDataProperties(var10, var9);
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3205, 3165, 7493, 7494, 2]);