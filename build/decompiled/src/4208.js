// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        _fun38462: for (var _fun38462_ip = 0;;) switch (_fun38462_ip) {
            case 0:
                var5 = arg0;
                var0 = 'None';
                var1 = 0;
                if (!(var1 !== var5)) {
                    _fun38462_ip = 65;
                    continue _fun38462
                }
            case 13:
                var1 = 'Rotate 90 CW';
                var2 = 1;
                if (!(var2 !== var5)) {
                    _fun38462_ip = 62;
                    continue _fun38462
                }
            case 26:
                var2 = 'Rotate 180';
                var3 = 2;
                if (!(var3 !== var5)) {
                    _fun38462_ip = 59;
                    continue _fun38462
                }
            case 39:
                var3 = 'Unknown';
                var4 = 3;
                if (!(var4 === var5)) {
                    _fun38462_ip = 56;
                    continue _fun38462
                }
            case 50:
                var3 = 'Rotate 270 CW';
            case 56:
                var2 = var3;
            case 59:
                var1 = var2;
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function arg0, arg1, arg2, arg3, arg4() {
        _fun38463: for (var _fun38463_ip = 0;;) switch (_fun38463_ip) {
            case 0:
                var9 = arg1;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var8 = undefined;
                var6 = var1.bind(var8)(var0);
                var5 = var6.readIfd;
                var0 = 1;
                var0 = var2[var0];
                var0 = var1.bind(var8)(var0);
                var15 = var0.IFD_TYPE_CANON;
                var0 = arg2;
                var13 = var9 + var0;
                var16 = arg0;
                var12 = arg3;
                var11 = arg4;
                var17 = var6;
                var14 = var9;
                var5 = var17[var5](var16, var15, var14, var13, var12, var11, var10);
                var1 = var5.ShotInfo;
                var0 = var5;
                if (!var1) {
                    _fun38463_ip = 191;
                    continue _fun38463
                }
            case 89:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var4 = var2.bind(var8)(var1);
                var3 = var4.objectAssign;
                var1 = var5.ShotInfo;
                var9 = var1.value;
                var2 = {};
                var6 = 27;
                var1 = var9[var6];
                if (!(var8 !== var1)) {
                    _fun38463_ip = 174;
                    continue _fun38463
                }
            case 139:
                var1 = {};
                var10 = var9[var6];
                var1.value = var10;
                var7 = _closure1_slot2;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var1.description = var6;
                var2.AutoRotate = var1;
            case 174:
                var1 = {};
                var1 = var3.bind(var4)(var1, var5, var2);
                var2 = delete var1.ShotInfo;
                var0 = var1;
            case 191:
                return var0;
        }
    };
    var0.read = var2;
    var2 = 27;
    var0.SHOT_INFO_AUTO_ROTATE = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4185, 4186, 4165]);