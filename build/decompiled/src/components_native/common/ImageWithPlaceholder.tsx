// components_native/common/ImageWithPlaceholder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun105535: for (var _fun105535_ip = 0;;) switch (_fun105535_ip) {
        case 0:
            var5 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var6;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var4 = var3.View;
            var _closure1_slot2 = var4;
            var7 = var3.requireNativeComponent;
            var9 = 1;
            var3 = var6[var9];
            var3 = var5.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot3 = var3;
            var3 = {};
            var3.flex = var9;
            var _closure1_slot4 = var3;
            var3 = {};
            var3.THUMBHASH = var9;
            var4 = 'THUMBHASH';
            var3[var9] = var4;
            var _closure1_slot5 = var3;
            var4 = 2;
            var4 = var6[var4];
            var9 = var5.bind(var0)(var4);
            var4 = var9.isAndroid;
            var4 = var4.bind(var9)();
            if (var4) {
                _fun105535_ip = 171;
                continue _fun105535
            }
        case 158:
            var4 = 'DCDImageWithThumbhashPlaceholderView';
            var4 = var7.bind(var0)(var4);
            _fun105535_ip = 183;
            continue _fun105535;
        case 171:
            var7 = 3;
            var7 = var6[var7];
            var4 = var8.bind(var0)(var7);
        case 183:
            var _closure1_slot6 = var4;
            var4 = 5;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'components_native/common/ImageWithPlaceholder.tsx';
            var4 = var5.bind(var6)(var4);
            var2.ImagePlaceholderVersions = var3;
            var1 = function(arg0) { // Original name: ImageWithPlaceholder, environment: var1
                _fun105536: for (var _fun105536_ip = 0;;) switch (_fun105536_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = var3.uri;
                        var7 = var3.placeholder;
                        var6 = var3.placeholderVersion;
                        var5 = var3.alt;
                        var9 = var3.style;
                        var2 = {
                            'uri': 0,
                            'placeholder': 0,
                            'placeholderVersion': 0,
                            'alt': 0,
                            'style': 0
                        };
                        var0 = null;
                        var17 = var2;
                        var16 = null;
                        var1 = silentSetPrototypeOf(var17, var16);
                        var17 = {};
                        var16 = var3;
                        var15 = var2;
                        var1 = copyDataProperties(var17, var16, var15);
                        if (!(var0 != var7)) {
                            _fun105536_ip = 89;
                            continue _fun105536
                        }
                    case 72:
                        var0 = _closure1_slot5;
                        var0 = var0.THUMBHASH;
                        if (!(var6 !== var0)) {
                            _fun105536_ip = 194;
                            continue _fun105536
                        }
                    case 89:
                        var10 = _closure1_slot3;
                        var4 = _closure1_slot2;
                        var3 = {};
                        var3.style = var9;
                        var17 = var3;
                        var16 = var1;
                        var0 = copyDataProperties(var17, var16);
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var0 = 4;
                        var11 = var11[var0];
                        var0 = undefined;
                        var12 = var12.bind(var0)(var11);
                        var11 = {};
                        var13 = _closure1_slot4;
                        var11.style = var13;
                        var13 = 'cover';
                        var11.resizeMode = var13;
                        var13 = {};
                        var13.uri = var8;
                        var11.source = var13;
                        var11.alt = var5;
                        var12 = var10.bind(var0)(var12, var11);
                        var11 = 'children';
                        var3[var11] = var12;
                        var0 = var10.bind(var0)(var4, var3);
                        _fun105536_ip = 267;
                        continue _fun105536;
                    case 194:
                        var4 = _closure1_slot3;
                        var3 = _closure1_slot6;
                        var2 = {};
                        var17 = var2;
                        var16 = var1;
                        var1 = copyDataProperties(var17, var16);
                        var1 = 'style';
                        var2[var1] = var9;
                        var1 = 'uri';
                        var2[var1] = var8;
                        var1 = 'placeholder';
                        var2[var1] = var7;
                        var1 = 'placeholderVersion';
                        var2[var1] = var6;
                        var1 = 'alt';
                        var2[var1] = var5;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 267:
                        return var0;
                }
            };
            var2.ImageWithPlaceholder = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 478, 13713, 4667, 2]);