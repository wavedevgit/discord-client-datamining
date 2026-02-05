// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = function arg0() {
        _fun38458: for (var _fun38458_ip = 0;;) switch (_fun38458_ip) {
            case 0:
                var7 = arg0;
                var0 = 'Horizontal (normal)';
                var1 = 0;
                if (!(var1 !== var7)) {
                    _fun38458_ip = 99;
                    continue _fun38458
                }
            case 15:
                var1 = 'Rotate 270 CW';
                var2 = 1;
                if (!(var2 !== var7)) {
                    _fun38458_ip = 96;
                    continue _fun38458
                }
            case 28:
                var2 = 'Rotate 180';
                var3 = 2;
                if (!(var3 !== var7)) {
                    _fun38458_ip = 93;
                    continue _fun38458
                }
            case 41:
                var3 = 'Rotate 90 CW';
                var4 = 3;
                if (!(var4 !== var7)) {
                    _fun38458_ip = 90;
                    continue _fun38458
                }
            case 54:
                var4 = 'Upwards';
                var5 = 4;
                if (!(var5 !== var7)) {
                    _fun38458_ip = 87;
                    continue _fun38458
                }
            case 67:
                var5 = 'Unknown';
                var6 = 5;
                if (!(var6 === var7)) {
                    _fun38458_ip = 84;
                    continue _fun38458
                }
            case 78:
                var5 = 'Downwards';
            case 84:
                var4 = var5;
            case 87:
                var3 = var4;
            case 90:
                var2 = var3;
            case 93:
                var1 = var2;
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var1 = -0.5;
        var0 = arg0;
        var0 = var1 * var0;
        var0 = '' + var0;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        var1 = -0.5;
        var0 = arg0;
        var0 = var1 * var0;
        var0 = '' + var0;
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var1, var0, var2);
    var3 = {};
    var0 = 78420;
    var3.K3_III = var0;
    var _closure1_slot3 = var3;
    var2 = {
        'CAMERA_ORIENTATION': 1,
        'ROLL_ANGLE': 3,
        'PITCH_ANGLE': 5
    };
    var _closure1_slot4 = var2;
    var0 = {};
    var4 = function arg0, arg1, arg2, arg3() {
        _fun38461: for (var _fun38461_ip = 0;;) switch (_fun38461_ip) {
            case 0:
                var10 = arg0;
                var1 = arg1;
                var0 = arg2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var13 = 0;
                var2 = var3[var13];
                var8 = undefined;
                var5 = var4.bind(var8)(var2);
                var4 = var5.getByteOrder;
                var7 = var1 + var0;
                var2 = 8;
                var2 = var7 + var2;
                var11 = var4.bind(var5)(var10, var2);
                var2 = var1 + var0;
                var1 = _closure1_slot0;
                var0 = 1;
                var0 = var3[var0];
                var7 = var1.bind(var8)(var0);
                var5 = var7.readIfd;
                var0 = 2;
                var0 = var3[var0];
                var0 = var1.bind(var8)(var0);
                var22 = var0.IFD_TYPE_PENTAX;
                var0 = 10;
                var20 = var2 + var0;
                var18 = arg3;
                var17 = true;
                var24 = var7;
                var23 = var10;
                var21 = var2;
                var19 = var11;
                var5 = var24[var5](var23, var22, var21, var20, var19, var18, var17, var16);
                var1 = var5.PentaxModelID;
                if (!var1) {
                    _fun38461_ip = 162;
                    continue _fun38461
                }
            case 137:
                var0 = var5.PentaxModelID;
                var3 = var0.value;
                var0 = _closure1_slot3;
                var0 = var0.K3_III;
                var1 = var3 === var0;
            case 162:
                if (!var1) {
                    _fun38461_ip = 171;
                    continue _fun38461
                }
            case 165:
                var1 = var5.LevelInfo;
            case 171:
                var0 = var5;
                if (!var1) {
                    _fun38461_ip = 459;
                    continue _fun38461
                }
            case 180:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var4 = var3.bind(var8)(var1);
                var3 = var4.objectAssign;
                var1 = var5.LevelInfo;
                var1 = var1.__offset;
                var14 = var2 + var1;
                var2 = {};
                var1 = 7;
                var7 = var14 + var1;
                var1 = var10.byteLength;
                if (!(!(var7 > var1))) {
                    _fun38461_ip = 442;
                    continue _fun38461
                }
            case 244:
                var9 = var10.getInt8;
                var7 = _closure1_slot4;
                var1 = var7.CAMERA_ORIENTATION;
                var1 = var14 + var1;
                var12 = var9.bind(var10)(var1);
                var1 = {};
                var1.value = var12;
                var9 = _closure1_slot5;
                var9 = var9.bind(var8)(var12);
                var1.description = var9;
                var2.CameraOrientation = var1;
                var16 = var10.getInt16;
                var1 = var7.ROLL_ANGLE;
                var15 = var14 + var1;
                var12 = _closure1_slot1;
                var1 = _closure1_slot2;
                var9 = var1[var13];
                var9 = var12.bind(var8)(var9);
                var9 = var9.LITTLE_ENDIAN;
                var9 = var11 === var9;
                var16 = var16.bind(var10)(var15, var9);
                var9 = {};
                var9.value = var16;
                var15 = _closure1_slot6;
                var15 = var15.bind(var8)(var16);
                var9.description = var15;
                var2.RollAngle = var9;
                var9 = var10.getInt16;
                var7 = var7.PITCH_ANGLE;
                var7 = var14 + var7;
                var1 = var1[var13];
                var1 = var12.bind(var8)(var1);
                var1 = var1.LITTLE_ENDIAN;
                var1 = var11 === var1;
                var7 = var9.bind(var10)(var7, var1);
                var1 = {};
                var1.value = var7;
                var6 = _closure1_slot7;
                var6 = var6.bind(var8)(var7);
                var1.description = var6;
                var2.PitchAngle = var1;
            case 442:
                var1 = {};
                var1 = var3.bind(var4)(var1, var5, var2);
                var2 = delete var1.LevelInfo;
                var0 = var1;
            case 459:
                return var0;
        }
    };
    var0.read = var4;
    var4 = 10;
    var0.PENTAX_IFD_OFFSET = var4;
    var0.MODEL_ID = var3;
    var0.LIK3III = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4170, 4185, 4186, 4165]);