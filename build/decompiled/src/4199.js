// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var1;
    var0 = function arg0, arg1() {
        _fun38330: for (var _fun38330_ip = 0;;) switch (_fun38330_ip) {
            case 0:
                var4 = arg1;
                var0 = _closure1_slot4;
                var3 = undefined;
                var1 = var0.bind(var3)(var4);
                var0 = var4;
                if (!var1) {
                    _fun38330_ip = 45;
                    continue _fun38330
                }
            case 23:
                var2 = var4.split;
                var1 = '/';
                var2 = var2.bind(var4)(var1);
                var1 = arg0;
                var0 = var1.bind(var3)(var2);
            case 45:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        var2 = /^-?\d+\\/ - ? \d + $ / ;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var0;
    var4 = function arg0() {
        _fun38332: for (var _fun38332_ip = 0;;) switch (_fun38332_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.split;
                var1 = ',';
                var3 = var2.bind(var0)(var1);
                var2 = _closure1_slot2;
                var4 = undefined;
                var1 = 2;
                var1 = var2.bind(var4)(var3, var1);
                var2 = 0;
                var3 = var1[var2];
                var7 = 1;
                var6 = var1[var7];
                if (!(var4 !== var3)) {
                    _fun38332_ip = 160;
                    continue _fun38332
                }
            case 52:
                if (!(var4 !== var6)) {
                    _fun38332_ip = 160;
                    continue _fun38332
                }
            case 56:
                var1 = global;
                var2 = var1.parseFloat;
                var3 = var2.bind(var4)(var3);
                var2 = var1.parseFloat;
                var4 = var2.bind(var4)(var6);
                var5 = var6.charAt;
                var2 = var6.length;
                var2 = var2 - var7;
                var2 = var5.bind(var6)(var2);
                var6 = var1.Number;
                var5 = var6.isNaN;
                var5 = var5.bind(var6)(var3);
                if (var5) {
                    _fun38332_ip = 160;
                    continue _fun38332
                }
            case 120:
                var5 = var1.Number;
                var1 = var5.isNaN;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun38332_ip = 160;
                    continue _fun38332
                }
            case 140:
                var1 = 60;
                var1 = var4 / var1;
                var1 = var3 + var1;
                var1 = '' + var1;
                var1 = var1 + var2;
                return var1;
            case 160:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = {};
    var5 = function arg0() {
        _fun38333: for (var _fun38333_ip = 0;;) switch (_fun38333_ip) {
            case 0:
                var8 = arg0;
                var0 = 'Horizontal (normal)';
                var1 = '1';
                if (!(var1 !== var8)) {
                    _fun38333_ip = 158;
                    continue _fun38333
                }
            case 22:
                var1 = 'Mirror horizontal';
                var2 = '2';
                if (!(var2 !== var8)) {
                    _fun38333_ip = 155;
                    continue _fun38333
                }
            case 38:
                var2 = 'Rotate 180';
                var3 = '3';
                if (!(var3 !== var8)) {
                    _fun38333_ip = 152;
                    continue _fun38333
                }
            case 54:
                var3 = 'Mirror vertical';
                var4 = '4';
                if (!(var4 !== var8)) {
                    _fun38333_ip = 149;
                    continue _fun38333
                }
            case 70:
                var4 = 'Mirror horizontal and rotate 270 CW';
                var5 = '5';
                if (!(var5 !== var8)) {
                    _fun38333_ip = 146;
                    continue _fun38333
                }
            case 86:
                var5 = 'Rotate 90 CW';
                var6 = '6';
                if (!(var6 !== var8)) {
                    _fun38333_ip = 143;
                    continue _fun38333
                }
            case 102:
                var6 = 'Mirror horizontal and rotate 90 CW';
                var7 = '7';
                if (!(var7 !== var8)) {
                    _fun38333_ip = 140;
                    continue _fun38333
                }
            case 118:
                var7 = 'Rotate 270 CW';
                var9 = '8';
                if (!(var9 !== var8)) {
                    _fun38333_ip = 137;
                    continue _fun38333
                }
            case 134:
                var7 = var8;
            case 137:
                var6 = var7;
            case 140:
                var5 = var6;
            case 143:
                var4 = var5;
            case 146:
                var3 = var4;
            case 149:
                var2 = var3;
            case 152:
                var1 = var2;
            case 155:
                var0 = var1;
            case 158:
                return var0;
        }
    };
    var1['tiff:Orientation'] = var5;
    var5 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.ResolutionUnit;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['tiff:ResolutionUnit'] = var5;
    var5 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.XResolution;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['tiff:XResolution'] = var5;
    var5 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.YResolution;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['tiff:YResolution'] = var5;
    var5 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ApertureValue;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['exif:ApertureValue'] = var5;
    var1['exif:GPSLatitude'] = var4;
    var1['exif:GPSLongitude'] = var4;
    var4 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.FNumber;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['exif:FNumber'] = var4;
    var4 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.FocalLength;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['exif:FocalLength'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.FocalPlaneResolutionUnit;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:FocalPlaneResolutionUnit'] = var4;
    var4 = function arg0() {
        _fun38341: for (var _fun38341_ip = 0;;) switch (_fun38341_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.ColorSpace;
                var3 = var7.substring;
                var0 = 0;
                var4 = 2;
                var3 = var3.bind(var7)(var0, var4);
                var0 = '0x';
                if (!(var0 !== var3)) {
                    _fun38341_ip = 80;
                    continue _fun38341
                }
            case 61:
                var0 = global;
                var3 = var0.parseInt;
                var0 = 10;
                var0 = var3.bind(var6)(var7, var0);
                _fun38341_ip = 108;
                continue _fun38341;
            case 80:
                var3 = global;
                var5 = var3.parseInt;
                var3 = var7.substring;
                var4 = var3.bind(var7)(var4);
                var3 = 16;
                var0 = var5.bind(var6)(var4, var3);
            case 108:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1['exif:ColorSpace'] = var4;
    var4 = function arg0, arg1() {
        _fun38342: for (var _fun38342_ip = 0;;) switch (_fun38342_ip) {
            case 0:
                var2 = arg1;
                var1 = /^\d, \d, \d, \d$/;
                var0 = var1.test;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun38342_ip = 32;
                    continue _fun38342
                }
            case 30:
                return var2;
            case 32:
                var1 = var2.split;
                var0 = ', ';
                var2 = var1.bind(var2)(var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.charCodeAt;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.ComponentsConfiguration;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1['exif:ComponentsConfiguration'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.Contrast;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:Contrast'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.CustomRendered;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:CustomRendered'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.ExposureMode;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:ExposureMode'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.ExposureProgram;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:ExposureProgram'] = var4;
    var4 = function arg0() {
        _fun38348: for (var _fun38348_ip = 0;;) switch (_fun38348_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot4;
                var3 = undefined;
                var2 = var0.bind(var3)(var5);
                var0 = var5;
                if (!var2) {
                    _fun38348_ip = 85;
                    continue _fun38348
                }
            case 23:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.ExposureTime;
                var4 = var5.split;
                var1 = '/';
                var5 = var4.bind(var5)(var1);
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var3 = var0.parseInt;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 10;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var0 = var2.bind(var3)(var1);
            case 85:
                return var0;
        }
    };
    var1['exif:ExposureTime'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.MeteringMode;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:MeteringMode'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.Saturation;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:Saturation'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.SceneCaptureType;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:SceneCaptureType'] = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.Sharpness;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:Sharpness'] = var4;
    var4 = function arg0() {
        var3 = _closure1_slot3;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ShutterSpeedValue;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1['exif:ShutterSpeedValue'] = var4;
    var3 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.WhiteBalance;
        var0 = global;
        var4 = var0.parseInt;
        var3 = arg0;
        var0 = 10;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1['exif:WhiteBalance'] = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4184]);