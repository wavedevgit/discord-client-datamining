// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = {
        34852: 'SpectralSensitivity',
        34855: 'ISOSpeedRatings',
        34858: 'TimeZoneOffset',
        34859: 'SelfTimerMode',
        34865: 'StandardOutputSensitivity',
        34866: 'RecommendedExposureIndex',
        34867: 'ISOSpeed',
        34868: 'ISOSpeedLatitudeyyy',
        34869: 'ISOSpeedLatitudezzz',
        36867: 'DateTimeOriginal',
        36868: 'DateTimeDigitized',
        36873: 'GooglePlusUploadCode',
        36880: 'OffsetTime',
        36881: 'OffsetTimeOriginal',
        36882: 'OffsetTimeDigitized',
        37122: 'CompressedBitsPerPixel',
        37379: 'BrightnessValue',
        37380: 'ExposureBiasValue',
        37393: 'ImageNumber',
        37395: 'ImageHistory',
        37520: 'SubSecTime',
        37521: 'SubSecTimeOriginal',
        37522: 'SubSecTimeDigitized',
        37724: 'ImageSourceData',
        40962: 'PixelXDimension',
        40963: 'PixelYDimension',
        40964: 'RelatedSoundFile',
        40965: 'Interoperability IFD Pointer',
        41483: 'FlashEnergy',
        41486: 'FocalPlaneXResolution',
        41487: 'FocalPlaneYResolution',
        41493: 'ExposureIndex',
        42016: 'ImageUniqueID',
        42032: 'CameraOwnerName',
        42033: 'BodySerialNumber',
        42035: 'LensMake',
        42036: 'LensModel',
        42037: 'LensSerialNumber',
        42081: 'SourceImageNumberOfCompositeImage',
        42082: 'SourceExposureTimesOfCompositeImage',
        42240: 'Gamma',
        59932: 'Padding',
        59933: 'OffsetSchema',
        65000: 'OwnerName',
        65001: 'SerialNumber',
        65002: 'Lens',
        65100: 'RawFile',
        65101: 'Converter',
        65102: 'WhiteBalance',
        65105: 'Exposure',
        65106: 'Shadows',
        65107: 'Brightness',
        65108: 'Contrast',
        65109: 'Saturation',
        65110: 'Sharpness',
        65111: 'Smoothness',
        65112: 'MoireFilter'
    };
    var3 = {};
    var5 = 'ExposureTime';
    var3.name = var5;
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ExposureTime;
    var3.description = var8;
    var1[33434] = var3;
    var3 = {};
    var8 = 'FNumber';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.FNumber;
    var3.description = var8;
    var1[33437] = var3;
    var3 = {};
    var8 = 'ExposureProgram';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ExposureProgram;
    var3.description = var8;
    var1[34850] = var3;
    var3 = {};
    var8 = 'OECF';
    var3.name = var8;
    var8 = function() { // Original name: description, environment: var4
        var0 = '[Raw OECF table data]';
        return var0;
    };
    var3.description = var8;
    var1[34856] = var3;
    var3 = {};
    var8 = 'SensitivityType';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38018: for (var _fun38018_ip = 0;;) switch (_fun38018_ip) {
            case 0:
                var1 = {
                    1: 'Standard Output Sensitivity',
                    2: 'Recommended Exposure Index',
                    3: 'ISO Speed',
                    4: 'Standard Output Sensitivity and Recommended Exposure Index',
                    5: 'Standard Output Sensitivity and ISO Speed',
                    6: 'Recommended Exposure Index and ISO Speed',
                    7: 'Standard Output Sensitivity, Recommended Exposure Index and ISO Speed'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38018_ip = 28;
                    continue _fun38018
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var8;
    var1[34864] = var3;
    var3 = {};
    var8 = 'ExifVersion';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getStringValue;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var8;
    var1[36864] = var3;
    var3 = {};
    var8 = 'ComponentsConfiguration';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ComponentsConfiguration;
    var3.description = var8;
    var1[37121] = var3;
    var3 = {};
    var8 = 'ShutterSpeedValue';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ShutterSpeedValue;
    var3.description = var8;
    var1[37377] = var3;
    var3 = {};
    var8 = 'ApertureValue';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ApertureValue;
    var3.description = var8;
    var1[37378] = var3;
    var3 = {};
    var8 = 'MaxApertureValue';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var6 = arg0;
        var0 = global;
        var4 = var0.Math;
        var3 = var4.pow;
        var1 = var0.Math;
        var0 = var1.sqrt;
        var2 = 2;
        var1 = var0.bind(var1)(var2);
        var0 = 0;
        var5 = var6[var0];
        var0 = 1;
        var0 = var6[var0];
        var0 = var5 / var0;
        var1 = var3.bind(var4)(var1, var0);
        var0 = var1.toFixed;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3.description = var8;
    var1[37381] = var3;
    var3 = {};
    var8 = 'SubjectDistance';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' m';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37382] = var3;
    var3 = {};
    var8 = 'MeteringMode';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MeteringMode;
    var3.description = var8;
    var1[37383] = var3;
    var3 = {};
    var8 = 'LightSource';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.LightSource;
    var3.description = var8;
    var1[37384] = var3;
    var3 = {};
    var8 = 'Flash';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38022: for (var _fun38022_ip = 0;;) switch (_fun38022_ip) {
            case 0:
                var23 = arg0;
                var0 = 'Flash did not fire';
                var1 = 0;
                if (!(var1 !== var23)) {
                    _fun38022_ip = 397;
                    continue _fun38022
                }
            case 18:
                var1 = 'Flash fired';
                var2 = 1;
                if (!(var2 !== var23)) {
                    _fun38022_ip = 394;
                    continue _fun38022
                }
            case 34:
                var2 = 'Strobe return light not detected';
                var3 = 5;
                if (!(var3 !== var23)) {
                    _fun38022_ip = 391;
                    continue _fun38022
                }
            case 50:
                var3 = 'Strobe return light detected';
                var4 = 7;
                if (!(var4 !== var23)) {
                    _fun38022_ip = 388;
                    continue _fun38022
                }
            case 66:
                var4 = 'Flash fired, compulsory flash mode';
                var5 = 9;
                if (!(var5 !== var23)) {
                    _fun38022_ip = 385;
                    continue _fun38022
                }
            case 82:
                var5 = 'Flash fired, compulsory flash mode, return light not detected';
                var6 = 13;
                if (!(var6 !== var23)) {
                    _fun38022_ip = 382;
                    continue _fun38022
                }
            case 98:
                var6 = 'Flash fired, compulsory flash mode, return light detected';
                var7 = 15;
                if (!(var7 !== var23)) {
                    _fun38022_ip = 379;
                    continue _fun38022
                }
            case 114:
                var7 = 'Flash did not fire, compulsory flash mode';
                var8 = 16;
                if (!(var8 !== var23)) {
                    _fun38022_ip = 376;
                    continue _fun38022
                }
            case 130:
                var8 = 'Flash did not fire, auto mode';
                var9 = 24;
                if (!(var9 !== var23)) {
                    _fun38022_ip = 373;
                    continue _fun38022
                }
            case 146:
                var9 = 'Flash fired, auto mode';
                var10 = 25;
                if (!(var10 !== var23)) {
                    _fun38022_ip = 370;
                    continue _fun38022
                }
            case 162:
                var10 = 'Flash fired, auto mode, return light not detected';
                var11 = 29;
                if (!(var11 !== var23)) {
                    _fun38022_ip = 367;
                    continue _fun38022
                }
            case 178:
                var11 = 'Flash fired, auto mode, return light detected';
                var12 = 31;
                if (!(var12 !== var23)) {
                    _fun38022_ip = 364;
                    continue _fun38022
                }
            case 194:
                var12 = 'No flash function';
                var13 = 32;
                if (!(var13 !== var23)) {
                    _fun38022_ip = 361;
                    continue _fun38022
                }
            case 210:
                var13 = 'Flash fired, red-eye reduction mode';
                var14 = 65;
                if (!(var14 !== var23)) {
                    _fun38022_ip = 358;
                    continue _fun38022
                }
            case 226:
                var14 = 'Flash fired, red-eye reduction mode, return light not detected';
                var15 = 69;
                if (!(var15 !== var23)) {
                    _fun38022_ip = 355;
                    continue _fun38022
                }
            case 239:
                var15 = 'Flash fired, red-eye reduction mode, return light detected';
                var16 = 71;
                if (!(var16 !== var23)) {
                    _fun38022_ip = 352;
                    continue _fun38022
                }
            case 252:
                var16 = 'Flash fired, compulsory flash mode, red-eye reduction mode';
                var17 = 73;
                if (!(var17 !== var23)) {
                    _fun38022_ip = 349;
                    continue _fun38022
                }
            case 265:
                var17 = 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
                var18 = 77;
                if (!(var18 !== var23)) {
                    _fun38022_ip = 346;
                    continue _fun38022
                }
            case 278:
                var18 = 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
                var19 = 79;
                if (!(var19 !== var23)) {
                    _fun38022_ip = 343;
                    continue _fun38022
                }
            case 291:
                var19 = 'Flash fired, auto mode, red-eye reduction mode';
                var20 = 89;
                if (!(var20 !== var23)) {
                    _fun38022_ip = 340;
                    continue _fun38022
                }
            case 304:
                var20 = 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
                var21 = 93;
                if (!(var21 !== var23)) {
                    _fun38022_ip = 337;
                    continue _fun38022
                }
            case 317:
                var21 = 'Unknown';
                var22 = 95;
                if (!(var22 === var23)) {
                    _fun38022_ip = 334;
                    continue _fun38022
                }
            case 328:
                var21 = 'Flash fired, auto mode, return light detected, red-eye reduction mode';
            case 334:
                var20 = var21;
            case 337:
                var19 = var20;
            case 340:
                var18 = var19;
            case 343:
                var17 = var18;
            case 346:
                var16 = var17;
            case 349:
                var15 = var16;
            case 352:
                var14 = var15;
            case 355:
                var13 = var14;
            case 358:
                var12 = var13;
            case 361:
                var11 = var12;
            case 364:
                var10 = var11;
            case 367:
                var9 = var10;
            case 370:
                var8 = var9;
            case 373:
                var7 = var8;
            case 376:
                var6 = var7;
            case 379:
                var5 = var6;
            case 382:
                var4 = var5;
            case 385:
                var3 = var4;
            case 388:
                var2 = var3;
            case 391:
                var1 = var2;
            case 394:
                var0 = var1;
            case 397:
                return var0;
        }
    };
    var3.description = var8;
    var1[37385] = var3;
    var3 = {};
    var8 = 'FocalLength';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.FocalLength;
    var3.description = var8;
    var1[37386] = var3;
    var3 = {};
    var8 = 'SecurityClassification';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38023: for (var _fun38023_ip = 0;;) switch (_fun38023_ip) {
            case 0:
                var1 = {
                    'C': 'Confidential',
                    'R': 'Restricted',
                    'S': 'Secret',
                    'T': 'Top Secret',
                    'U': 'Unclassified'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38023_ip = 28;
                    continue _fun38023
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var8;
    var1[37394] = var3;
    var3 = {};
    var8 = 'SubjectArea';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38024: for (var _fun38024_ip = 0;;) switch (_fun38024_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.length;
                var1 = 2;
                if (!(var1 !== var0)) {
                    _fun38024_ip = 164;
                    continue _fun38024
                }
            case 18:
                var0 = var2.length;
                var3 = 3;
                if (!(var3 !== var0)) {
                    _fun38024_ip = 110;
                    continue _fun38024
                }
            case 30:
                var5 = var2.length;
                var0 = 'Unknown';
                var4 = 4;
                if (!(var4 === var5)) {
                    _fun38024_ip = 108;
                    continue _fun38024
                }
            case 46:
                var4 = 0;
                var18 = var2[var4];
                var4 = 1;
                var16 = var2[var4];
                var14 = var2[var1];
                var12 = var2[var3];
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var19 = 'Rectangle; X: ';
                var17 = ', Y: ';
                var15 = ', width: ';
                var13 = ', height: ';
                var0 = var19[var7](var18, var17, var16, var15, var14, var13, var12, var11);
            case 108:
                _fun38024_ip = 162;
                continue _fun38024;
            case 110:
                var3 = 0;
                var18 = var2[var3];
                var3 = 1;
                var16 = var2[var3];
                var14 = var2[var1];
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var19 = 'Circle; X: ';
                var17 = ', Y: ';
                var15 = ', diameter: ';
                var0 = var19[var5](var18, var17, var16, var15, var14, var13);
            case 162:
                _fun38024_ip = 209;
                continue _fun38024;
            case 164:
                var1 = 0;
                var5 = var2[var1];
                var1 = 1;
                var4 = var2[var1];
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'Location; X: ';
                var1 = ', Y: ';
                var0 = var3.bind(var2)(var5, var1, var4);
            case 209:
                return var0;
        }
    };
    var3.description = var8;
    var1[37396] = var3;
    var3 = {};
    var8 = 'MakerNote';
    var3.name = var8;
    var8 = function() { // Original name: description, environment: var4
        var0 = '[Raw maker note data]';
        return var0;
    };
    var3.description = var8;
    var1[37500] = var3;
    var3 = {};
    var8 = 'UserComment';
    var3.name = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.getEncodedString;
    var3.description = var8;
    var1[37510] = var3;
    var3 = {};
    var8 = 'AmbientTemperature';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' °C';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37888] = var3;
    var3 = {};
    var8 = 'Humidity';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' %';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37889] = var3;
    var3 = {};
    var8 = 'Pressure';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' hPa';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37890] = var3;
    var3 = {};
    var8 = 'WaterDepth';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' m';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37891] = var3;
    var3 = {};
    var8 = 'Acceleration';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' mGal';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37892] = var3;
    var3 = {};
    var8 = 'CameraElevationAngle';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var0 = var2[var0];
        var1 = var1 / var0;
        var0 = ' °';
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[37893] = var3;
    var3 = {};
    var8 = 'FlashpixVersion';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.String;
            var1 = var2.fromCharCode;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var8;
    var1[40960] = var3;
    var3 = {};
    var8 = 'ColorSpace';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ColorSpace;
    var3.description = var8;
    var1[40961] = var3;
    var3 = {};
    var8 = 'SpatialFrequencyResponse';
    var3.name = var8;
    var8 = function() { // Original name: description, environment: var4
        var0 = '[Raw SFR table data]';
        return var0;
    };
    var3.description = var8;
    var1[41484] = var3;
    var3 = {};
    var8 = 'FocalPlaneResolutionUnit';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.FocalPlaneResolutionUnit;
    var3.description = var8;
    var1[41488] = var3;
    var3 = {};
    var8 = 'SubjectLocation';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg0;
        var0 = 2;
        var1 = var3.bind(var2)(var1, var0);
        var0 = 0;
        var4 = var1[var0];
        var0 = 1;
        var3 = var1[var0];
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'X: ';
        var0 = ', Y: ';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var3.description = var8;
    var1[41492] = var3;
    var3 = {};
    var8 = 'SensingMethod';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38036: for (var _fun38036_ip = 0;;) switch (_fun38036_ip) {
            case 0:
                var8 = arg0;
                var0 = 'Undefined';
                var1 = 1;
                if (!(var1 !== var8)) {
                    _fun38036_ip = 116;
                    continue _fun38036
                }
            case 16:
                var1 = 'One-chip color area sensor';
                var2 = 2;
                if (!(var2 !== var8)) {
                    _fun38036_ip = 113;
                    continue _fun38036
                }
            case 29:
                var2 = 'Two-chip color area sensor';
                var3 = 3;
                if (!(var3 !== var8)) {
                    _fun38036_ip = 110;
                    continue _fun38036
                }
            case 42:
                var3 = 'Three-chip color area sensor';
                var4 = 4;
                if (!(var4 !== var8)) {
                    _fun38036_ip = 107;
                    continue _fun38036
                }
            case 55:
                var4 = 'Color sequential area sensor';
                var5 = 5;
                if (!(var5 !== var8)) {
                    _fun38036_ip = 104;
                    continue _fun38036
                }
            case 68:
                var5 = 'Trilinear sensor';
                var6 = 7;
                if (!(var6 !== var8)) {
                    _fun38036_ip = 101;
                    continue _fun38036
                }
            case 81:
                var6 = 'Unknown';
                var7 = 8;
                if (!(var7 === var8)) {
                    _fun38036_ip = 98;
                    continue _fun38036
                }
            case 92:
                var6 = 'Color sequential linear sensor';
            case 98:
                var5 = var6;
            case 101:
                var4 = var5;
            case 104:
                var3 = var4;
            case 107:
                var2 = var3;
            case 110:
                var1 = var2;
            case 113:
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var3.description = var8;
    var1[41495] = var3;
    var3 = {};
    var8 = 'FileSource';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38037: for (var _fun38037_ip = 0;;) switch (_fun38037_ip) {
            case 0:
                var0 = 'Unknown';
                var2 = 3;
                var1 = arg0;
                if (!(var2 === var1)) {
                    _fun38037_ip = 20;
                    continue _fun38037
                }
            case 14:
                var0 = 'DSC';
            case 20:
                return var0;
        }
    };
    var3.description = var8;
    var1[41728] = var3;
    var3 = {};
    var8 = 'SceneType';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38038: for (var _fun38038_ip = 0;;) switch (_fun38038_ip) {
            case 0:
                var0 = 'Unknown';
                var2 = 1;
                var1 = arg0;
                if (!(var2 === var1)) {
                    _fun38038_ip = 20;
                    continue _fun38038
                }
            case 14:
                var0 = 'A directly photographed image';
            case 20:
                return var0;
        }
    };
    var3.description = var8;
    var1[41729] = var3;
    var3 = {};
    var8 = 'CFAPattern';
    var3.name = var8;
    var8 = function() { // Original name: description, environment: var4
        var0 = '[Raw CFA pattern table data]';
        return var0;
    };
    var3.description = var8;
    var1[41730] = var3;
    var3 = {};
    var8 = 'CustomRendered';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.CustomRendered;
    var3.description = var8;
    var1[41985] = var3;
    var3 = {};
    var8 = 'ExposureMode';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.ExposureMode;
    var3.description = var8;
    var1[41986] = var3;
    var3 = {};
    var8 = 'WhiteBalance';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.WhiteBalance;
    var3.description = var8;
    var1[41987] = var3;
    var3 = {};
    var8 = 'DigitalZoomRatio';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38040: for (var _fun38040_ip = 0;;) switch (_fun38040_ip) {
            case 0:
                var3 = arg0;
                var1 = 0;
                var2 = var3[var1];
                var0 = 'Digital zoom was not used';
                if (!(var1 !== var2)) {
                    _fun38040_ip = 37;
                    continue _fun38040
                }
            case 19:
                var2 = var3[var1];
                var1 = 1;
                var1 = var3[var1];
                var1 = var2 / var1;
                var0 = '' + var1;
            case 37:
                return var0;
        }
    };
    var3.description = var8;
    var1[41988] = var3;
    var3 = {};
    var8 = 'FocalLengthIn35mmFilm';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.FocalLengthIn35mmFilm;
    var3.description = var8;
    var1[41989] = var3;
    var3 = {};
    var8 = 'SceneCaptureType';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.SceneCaptureType;
    var3.description = var8;
    var1[41990] = var3;
    var3 = {};
    var8 = 'GainControl';
    var3.name = var8;
    var8 = function(arg0) { // Original name: description, environment: var4
        _fun38041: for (var _fun38041_ip = 0;;) switch (_fun38041_ip) {
            case 0:
                var6 = arg0;
                var0 = 'None';
                var1 = 0;
                if (!(var1 !== var6)) {
                    _fun38041_ip = 81;
                    continue _fun38041
                }
            case 13:
                var1 = 'Low gain up';
                var2 = 1;
                if (!(var2 !== var6)) {
                    _fun38041_ip = 78;
                    continue _fun38041
                }
            case 26:
                var2 = 'High gain up';
                var3 = 2;
                if (!(var3 !== var6)) {
                    _fun38041_ip = 75;
                    continue _fun38041
                }
            case 39:
                var3 = 'Low gain down';
                var4 = 3;
                if (!(var4 !== var6)) {
                    _fun38041_ip = 72;
                    continue _fun38041
                }
            case 52:
                var4 = 'Unknown';
                var5 = 4;
                if (!(var5 === var6)) {
                    _fun38041_ip = 69;
                    continue _fun38041
                }
            case 63:
                var4 = 'High gain down';
            case 69:
                var3 = var4;
            case 72:
                var2 = var3;
            case 75:
                var1 = var2;
            case 78:
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var3.description = var8;
    var1[41991] = var3;
    var3 = {};
    var8 = 'Contrast';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Contrast;
    var3.description = var8;
    var1[41992] = var3;
    var3 = {};
    var8 = 'Saturation';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Saturation;
    var3.description = var8;
    var1[41993] = var3;
    var3 = {};
    var8 = 'Sharpness';
    var3.name = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Sharpness;
    var3.description = var5;
    var1[41994] = var3;
    var3 = {};
    var5 = 'DeviceSettingDescription';
    var3.name = var5;
    var5 = function() { // Original name: description, environment: var4
        var0 = '[Raw device settings table data]';
        return var0;
    };
    var3.description = var5;
    var1[41995] = var3;
    var3 = {};
    var5 = 'SubjectDistanceRange';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38043: for (var _fun38043_ip = 0;;) switch (_fun38043_ip) {
            case 0:
                var4 = arg0;
                var0 = 'Macro';
                var1 = 1;
                if (!(var1 !== var4)) {
                    _fun38043_ip = 52;
                    continue _fun38043
                }
            case 16:
                var1 = 'Close view';
                var2 = 2;
                if (!(var2 !== var4)) {
                    _fun38043_ip = 49;
                    continue _fun38043
                }
            case 29:
                var2 = 'Unknown';
                var3 = 3;
                if (!(var3 === var4)) {
                    _fun38043_ip = 46;
                    continue _fun38043
                }
            case 40:
                var2 = 'Distant view';
            case 46:
                var1 = var2;
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var5;
    var1[41996] = var3;
    var3 = {};
    var5 = 'LensSpecification';
    var3.name = var5;
    var5 = function(arg0) { // Original name: description, environment: var4
        _fun38044: for (var _fun38044_ip = 0;;) switch (_fun38044_ip) {
            case 0:
                var9 = arg0;
                var0 = global;
                var2 = var0.parseFloat;
                var10 = 0;
                var1 = var9[var10];
                var3 = var1[var10];
                var1 = var9[var10];
                var4 = 1;
                var1 = var1[var4];
                var3 = var3 / var1;
                var1 = var3.toFixed;
                var7 = 5;
                var1 = var1.bind(var3)(var7);
                var5 = undefined;
                var11 = var2.bind(var5)(var1);
                var2 = var0.parseFloat;
                var1 = var9[var4];
                var3 = var1[var10];
                var1 = var9[var4];
                var1 = var1[var4];
                var3 = var3 / var1;
                var1 = var3.toFixed;
                var1 = var1.bind(var3)(var7);
                var13 = var2.bind(var5)(var1);
                var1 = var0.HermesInternal;
                var6 = var1.concat;
                var3 = '';
                var14 = '-';
                var12 = ' mm';
                var16 = var3;
                var15 = var11;
                var2 = var16[var6](var15, var14, var13, var12, var11);
                var1 = 3;
                var6 = var9[var1];
                var6 = var6[var4];
                if (!(var10 !== var6)) {
                    _fun38044_ip = 248;
                    continue _fun38044
                }
            case 149:
                var6 = 2;
                var8 = var9[var6];
                var8 = var8[var4];
                var6 = var9[var6];
                var6 = var6[var4];
                var6 = var8 / var6;
                var8 = var9[var1];
                var8 = var8[var10];
                var1 = var9[var1];
                var1 = var1[var4];
                var1 = var8 / var1;
                var1 = var6 / var1;
                var6 = var4 / var1;
                var4 = var0.parseFloat;
                var1 = var6.toFixed;
                var1 = var1.bind(var6)(var7);
                var5 = var4.bind(var5)(var1);
                var1 = var0.HermesInternal;
                var4 = var1.concat;
                var1 = ' f/';
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            case 248:
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = ' f/?';
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var3.description = var5;
    var1[42034] = var3;
    var3 = {};
    var5 = 'CompositeImage';
    var3.name = var5;
    var4 = function(arg0) { // Original name: description, environment: var4
        _fun38045: for (var _fun38045_ip = 0;;) switch (_fun38045_ip) {
            case 0:
                var1 = {
                    1: 'Not a Composite Image',
                    2: 'General Composite Image',
                    3: 'Composite Image Captured While Shooting'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38045_ip = 28;
                    continue _fun38045
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var4;
    var1[42080] = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4146, 4148]);