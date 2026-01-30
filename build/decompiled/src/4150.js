// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun38012: for (var _fun38012_ip = 0;;) switch (_fun38012_ip) {
        case 0:
            var13 = metroImportDefault;
            var2 = exports;
            var14 = dependencyMap;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var0 = 0;
            var1 = var14[var0];
            var0 = undefined;
            var12 = var13.bind(var0)(var1);
            var1 = 1;
            var3 = var14[var1];
            var1 = require;
            var7 = var1.bind(var0)(var3);
            var6 = var7.objectAssign;
            var1 = 2;
            var3 = var14[var1];
            var5 = var13.bind(var0)(var3);
            var3 = 3;
            var3 = var14[var3];
            var4 = var13.bind(var0)(var3);
            var3 = {};
            var3 = var6.bind(var7)(var3, var5, var4);
            var4 = {};
            var9 = '0th';
            var4 = var12.bind(var0)(var4, var9, var3);
            var1 = var14[var1];
            var1 = var13.bind(var0)(var1);
            var8 = '1st';
            var1 = var12.bind(var0)(var4, var8, var1);
            var7 = 'exif';
            var3 = var12.bind(var0)(var1, var7, var3);
            var1 = 4;
            var1 = var14[var1];
            var1 = var13.bind(var0)(var1);
            var6 = 'gps';
            var3 = var12.bind(var0)(var3, var6, var1);
            var1 = 5;
            var1 = var14[var1];
            var1 = var13.bind(var0)(var1);
            var5 = 'interoperability';
            var10 = var12.bind(var0)(var3, var5, var1);
            var1 = 6;
            var3 = var14[var1];
            var3 = var13.bind(var0)(var3);
            var3 = var3.USE_MPF;
            if (var3) {
                _fun38012_ip = 229;
                continue _fun38012
            }
        case 225:
            var3 = {};
            _fun38012_ip = 241;
            continue _fun38012;
        case 229:
            var4 = 7;
            var4 = var14[var4];
            var3 = var13.bind(var0)(var4);
        case 241:
            var4 = 'mpf';
            var11 = var12.bind(var0)(var10, var4, var3);
            var3 = var14[var1];
            var3 = var13.bind(var0)(var3);
            var3 = var3.USE_MAKER_NOTES;
            if (var3) {
                _fun38012_ip = 276;
                continue _fun38012
            }
        case 272:
            var10 = {};
            _fun38012_ip = 288;
            continue _fun38012;
        case 276:
            var3 = 8;
            var3 = var14[var3];
            var10 = var13.bind(var0)(var3);
        case 288:
            var3 = 'canon';
            var11 = var12.bind(var0)(var11, var3, var10);
            var1 = var14[var1];
            var1 = var13.bind(var0)(var1);
            var1 = var1.USE_MAKER_NOTES;
            if (var1) {
                _fun38012_ip = 323;
                continue _fun38012
            }
        case 319:
            var10 = {};
            _fun38012_ip = 335;
            continue _fun38012;
        case 323:
            var1 = 9;
            var1 = var14[var1];
            var10 = var13.bind(var0)(var1);
        case 335:
            var1 = 'pentax';
            var10 = var12.bind(var0)(var11, var1, var10);
            var2.default = var10;
            var2.IFD_TYPE_0TH = var9;
            var2.IFD_TYPE_1ST = var8;
            var2.IFD_TYPE_EXIF = var7;
            var2.IFD_TYPE_GPS = var6;
            var2.IFD_TYPE_INTEROPERABILITY = var5;
            var2.IFD_TYPE_MPF = var4;
            var2.IFD_TYPE_CANON = var3;
            var2.IFD_TYPE_PENTAX = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 4129, 4151, 4153, 4155, 4156, 4132, 4157, 4158, 4159]);