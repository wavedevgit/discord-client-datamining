// uikit-native/WarningCircle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/WarningCircle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun58231: for (var _fun58231_ip = 0;;) switch (_fun58231_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.width;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun58231_ip = 17;
                    continue _fun58231
                }
            case 14:
                var10 = 20;
            case 17:
                var9 = var2.height;
                if (!(var9 === var3)) {
                    _fun58231_ip = 29;
                    continue _fun58231
                }
            case 26:
                var9 = 20;
            case 29:
                var6 = var2.color;
                if (!(var6 === var3)) {
                    _fun58231_ip = 44;
                    continue _fun58231
                }
            case 38:
                var6 = 'currentColor';
            case 44:
                var1 = {
                    'width': 0,
                    'height': 0,
                    'color': 0
                };
                var12 = null;
                var13 = var1;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var2;
                var11 = var1;
                var12 = copyDataProperties(var13, var12, var11);
                var2 = _closure1_slot2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var0 = var7[var4];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Svg;
                var0 = {};
                var13 = var0;
                var8 = copyDataProperties(var13, var12);
                var8 = 'width';
                var0[var8] = var10;
                var8 = 'height';
                var0[var8] = var9;
                var9 = '0 0 20 20';
                var8 = 'viewBox';
                var0[var8] = var9;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Path;
                var4 = {
                    'd': 'M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z',
                    'fillRule': 'evenodd',
                    'clipRule': 'evenodd'
                };
                var4.fill = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5422, 2]);