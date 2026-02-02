// modules/client_themes/native/chat/formatSharedClientThemeData.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/native/chat/formatSharedClientThemeData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun56120: for (var _fun56120_ip = 0;;) switch (_fun56120_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var1 = var0.sharedClientTheme;
                var6 = undefined;
                if (!(var6 === var1)) {
                    _fun56120_ip = 20;
                    continue _fun56120
                }
            case 18:
                return var6;
            case 20:
                var0 = {};
                var3 = var1.colors;
                var0.colors = var3;
                var1 = var1.gradient_angle;
                var0.gradientAngle = var1;
                var1 = arg2;
                var0.createdBy = var1;
                var4 = var2.uri;
                var3 = '';
                var1 = var3;
                if (!(var6 !== var4)) {
                    _fun56120_ip = 73;
                    continue _fun56120
                }
            case 68:
                var1 = var2.uri;
            case 73:
                var0.createdByAvatarUrl = var1;
                var8 = _closure1_slot3;
                var5 = var8.resolveAssetSource;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 1;
                var4 = var7[var4];
                var4 = var2.bind(var6)(var4);
                var4 = var5.bind(var8)(var4);
                var4 = var4.uri;
                var0.nitroWheelIconUrl = var4;
                var5 = _closure1_slot0;
                var4 = 2;
                var1 = var7[var4];
                var1 = var5.bind(var6)(var1);
                var9 = var1.intl;
                var8 = var9.string;
                var1 = var7[var4];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.SKNnqq;
                var1 = var8.bind(var9)(var1);
                var0.previewLabel = var1;
                var1 = var7[var4];
                var1 = var5.bind(var6)(var1);
                var10 = var1.intl;
                var9 = var10.string;
                var1 = 3;
                var8 = var7[var1];
                var8 = var2.bind(var6)(var8);
                var8 = var8.yl1iMm;
                var8 = var9.bind(var10)(var8);
                var0.previewHeading = var8;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var2 = var1.fQPSEf;
                var1 = {};
                var6 = '__USERNAME__';
                var1.username = var6;
                var2 = var4.bind(var5)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var3)(var2);
                var0.createdByLabel = var1;
                return var0;
        }
    };
    var2.formatSharedClientThemeData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5714, 1234, 2013, 2]);