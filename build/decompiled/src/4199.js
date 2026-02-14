// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot0 = var1;
    var1 = {
        8: 'GPSSatellites',
        11: 'GPSDOP',
        13: 'GPSSpeed',
        15: 'GPSTrack',
        17: 'GPSImgDirection',
        18: 'GPSMapDatum',
        24: 'GPSDestBearing',
        26: 'GPSDestDistance',
        29: 'GPSDateStamp',
        31: 'GPSHPositioningError'
    };
    var3 = {};
    var5 = 'GPSVersionID';
    var3.name = var5;
    var5 = function arg0() {
        _fun38361: for (var _fun38361_ip = 0;;) switch (_fun38361_ip) {
            case 0:
                var4 = arg0;
                var2 = 0;
                var5 = var4[var2];
                var3 = 'Unknown';
                var1 = 2;
                var0 = var3;
                if (!(var1 === var5)) {
                    _fun38361_ip = 68;
                    continue _fun38361
                }
            case 23:
                var5 = 1;
                var5 = var4[var5];
                var0 = var3;
                if (!(var1 === var5)) {
                    _fun38361_ip = 68;
                    continue _fun38361
                }
            case 37:
                var1 = var4[var1];
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun38361_ip = 68;
                    continue _fun38361
                }
            case 48:
                var1 = 3;
                var1 = var4[var1];
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun38361_ip = 68;
                    continue _fun38361
                }
            case 62:
                var0 = 'Version 2.2';
            case 68:
                return var0;
        }
    };
    var3.description = var5;
    var1[0] = var3;
    var3 = {};
    var5 = 'GPSLatitudeRef';
    var3.name = var5;
    var5 = function arg0() {
        _fun38362: for (var _fun38362_ip = 0;;) switch (_fun38362_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'North latitude';
                var1 = 'N';
                if (!(var1 !== var3)) {
                    _fun38362_ip = 52;
                    continue _fun38362
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'S';
                if (!(var2 === var3)) {
                    _fun38362_ip = 49;
                    continue _fun38362
                }
            case 43:
                var1 = 'South latitude';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var5;
    var1[1] = var3;
    var3 = {};
    var5 = 'GPSLatitude';
    var3.name = var5;
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.getCalculatedGpsValue;
    var3.description = var8;
    var1[2] = var3;
    var3 = {};
    var8 = 'GPSLongitudeRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38363: for (var _fun38363_ip = 0;;) switch (_fun38363_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'East longitude';
                var1 = 'E';
                if (!(var1 !== var3)) {
                    _fun38363_ip = 52;
                    continue _fun38363
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'W';
                if (!(var2 === var3)) {
                    _fun38363_ip = 49;
                    continue _fun38363
                }
            case 43:
                var1 = 'West longitude';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[3] = var3;
    var3 = {};
    var8 = 'GPSLongitude';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.getCalculatedGpsValue;
    var3.description = var8;
    var1[4] = var3;
    var3 = {};
    var8 = 'GPSAltitudeRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38364: for (var _fun38364_ip = 0;;) switch (_fun38364_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Sea level';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38364_ip = 35;
                    continue _fun38364
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38364_ip = 32;
                    continue _fun38364
                }
            case 26:
                var1 = 'Sea level reference (negative value)';
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var3.description = var8;
    var1[5] = var3;
    var3 = {};
    var8 = 'GPSAltitude';
    var3.name = var8;
    var8 = function arg0() {
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
    var1[6] = var3;
    var3 = {};
    var8 = 'GPSTimeStamp';
    var3.name = var8;
    var8 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun38367: for (var _fun38367_ip = 0;;) switch (_fun38367_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 2;
                    var2 = var3.bind(var2)(var1, var0);
                    var0 = 0;
                    var1 = var2[var0];
                    var0 = 1;
                    var0 = var2[var0];
                    var3 = var1 / var0;
                    var4 = /^\d(\.|$)/;
                    var2 = var4.test;
                    var1 = global;
                    var0 = var1.HermesInternal;
                    var5 = var0.concat;
                    var0 = '';
                    var0 = var5.bind(var0)(var3);
                    var2 = var2.bind(var4)(var0);
                    var0 = var3;
                    if (!var2) {
                        _fun38367_ip = 112;
                        continue _fun38367
                    }
                case 90:
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '0';
                    var0 = var2.bind(var1)(var3);
                case 112:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ':';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var8;
    var1[7] = var3;
    var3 = {};
    var8 = 'GPSStatus';
    var3.name = var8;
    var8 = function arg0() {
        _fun38368: for (var _fun38368_ip = 0;;) switch (_fun38368_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'Measurement in progress';
                var1 = 'A';
                if (!(var1 !== var3)) {
                    _fun38368_ip = 52;
                    continue _fun38368
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'V';
                if (!(var2 === var3)) {
                    _fun38368_ip = 49;
                    continue _fun38368
                }
            case 43:
                var1 = 'Measurement Interoperability';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[9] = var3;
    var3 = {};
    var8 = 'GPSMeasureMode';
    var3.name = var8;
    var8 = function arg0() {
        _fun38369: for (var _fun38369_ip = 0;;) switch (_fun38369_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = '2-dimensional measurement';
                var1 = '2';
                if (!(var1 !== var3)) {
                    _fun38369_ip = 56;
                    continue _fun38369
                }
            case 33:
                var1 = 'Unknown';
                var2 = '3';
                if (!(var2 === var3)) {
                    _fun38369_ip = 53;
                    continue _fun38369
                }
            case 47:
                var1 = '3-dimensional measurement';
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var3.description = var8;
    var1[10] = var3;
    var3 = {};
    var8 = 'GPSSpeedRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38370: for (var _fun38370_ip = 0;;) switch (_fun38370_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var4 = var1.bind(var2)(var0);
                var0 = 'Kilometers per hour';
                var1 = 'K';
                if (!(var1 !== var4)) {
                    _fun38370_ip = 69;
                    continue _fun38370
                }
            case 31:
                var1 = 'Miles per hour';
                var2 = 'M';
                if (!(var2 !== var4)) {
                    _fun38370_ip = 66;
                    continue _fun38370
                }
            case 45:
                var2 = 'Unknown';
                var3 = 'N';
                if (!(var3 === var4)) {
                    _fun38370_ip = 63;
                    continue _fun38370
                }
            case 57:
                var2 = 'Knots';
            case 63:
                var1 = var2;
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var3.description = var8;
    var1[12] = var3;
    var3 = {};
    var8 = 'GPSTrackRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38371: for (var _fun38371_ip = 0;;) switch (_fun38371_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38371_ip = 52;
                    continue _fun38371
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38371_ip = 49;
                    continue _fun38371
                }
            case 43:
                var1 = 'Magnetic direction';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[14] = var3;
    var3 = {};
    var8 = 'GPSImgDirectionRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38372: for (var _fun38372_ip = 0;;) switch (_fun38372_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38372_ip = 52;
                    continue _fun38372
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38372_ip = 49;
                    continue _fun38372
                }
            case 43:
                var1 = 'Magnetic direction';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[16] = var3;
    var3 = {};
    var8 = 'GPSDestLatitudeRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38373: for (var _fun38373_ip = 0;;) switch (_fun38373_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'North latitude';
                var1 = 'N';
                if (!(var1 !== var3)) {
                    _fun38373_ip = 52;
                    continue _fun38373
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'S';
                if (!(var2 === var3)) {
                    _fun38373_ip = 49;
                    continue _fun38373
                }
            case 43:
                var1 = 'South latitude';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[19] = var3;
    var3 = {};
    var8 = 'GPSDestLatitude';
    var3.name = var8;
    var8 = function arg0() {
        var4 = arg0;
        var5 = 0;
        var0 = var4[var5];
        var1 = var0[var5];
        var0 = var4[var5];
        var3 = 1;
        var0 = var0[var3];
        var1 = var1 / var0;
        var0 = var4[var3];
        var2 = var0[var5];
        var0 = var4[var3];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 60;
        var0 = var2 / var0;
        var1 = var1 + var0;
        var0 = 2;
        var2 = var4[var0];
        var2 = var2[var5];
        var0 = var4[var0];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 3600;
        var0 = var2 / var0;
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[20] = var3;
    var3 = {};
    var8 = 'GPSDestLongitudeRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38375: for (var _fun38375_ip = 0;;) switch (_fun38375_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'East longitude';
                var1 = 'E';
                if (!(var1 !== var3)) {
                    _fun38375_ip = 52;
                    continue _fun38375
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'W';
                if (!(var2 === var3)) {
                    _fun38375_ip = 49;
                    continue _fun38375
                }
            case 43:
                var1 = 'West longitude';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[21] = var3;
    var3 = {};
    var8 = 'GPSDestLongitude';
    var3.name = var8;
    var8 = function arg0() {
        var4 = arg0;
        var5 = 0;
        var0 = var4[var5];
        var1 = var0[var5];
        var0 = var4[var5];
        var3 = 1;
        var0 = var0[var3];
        var1 = var1 / var0;
        var0 = var4[var3];
        var2 = var0[var5];
        var0 = var4[var3];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 60;
        var0 = var2 / var0;
        var1 = var1 + var0;
        var0 = 2;
        var2 = var4[var0];
        var2 = var2[var5];
        var0 = var4[var0];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 3600;
        var0 = var2 / var0;
        var0 = var1 + var0;
        return var0;
    };
    var3.description = var8;
    var1[22] = var3;
    var3 = {};
    var8 = 'GPSDestBearingRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38377: for (var _fun38377_ip = 0;;) switch (_fun38377_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38377_ip = 52;
                    continue _fun38377
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38377_ip = 49;
                    continue _fun38377
                }
            case 43:
                var1 = 'Magnetic direction';
            case 49:
                var0 = var1;
            case 52:
                return var0;
        }
    };
    var3.description = var8;
    var1[23] = var3;
    var3 = {};
    var8 = 'GPSDestDistanceRef';
    var3.name = var8;
    var8 = function arg0() {
        _fun38378: for (var _fun38378_ip = 0;;) switch (_fun38378_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var4 = var1.bind(var2)(var0);
                var0 = 'Kilometers';
                var1 = 'K';
                if (!(var1 !== var4)) {
                    _fun38378_ip = 69;
                    continue _fun38378
                }
            case 31:
                var1 = 'Miles';
                var2 = 'M';
                if (!(var2 !== var4)) {
                    _fun38378_ip = 66;
                    continue _fun38378
                }
            case 45:
                var2 = 'Unknown';
                var3 = 'N';
                if (!(var3 === var4)) {
                    _fun38378_ip = 63;
                    continue _fun38378
                }
            case 57:
                var2 = 'Knots';
            case 63:
                var1 = var2;
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var3.description = var8;
    var1[25] = var3;
    var3 = {};
    var8 = 'GPSProcessingMethod';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.getEncodedString;
    var3.description = var8;
    var1[27] = var3;
    var3 = {};
    var8 = 'GPSAreaInformation';
    var3.name = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.getEncodedString;
    var3.description = var5;
    var1[28] = var3;
    var3 = {};
    var5 = 'GPSDifferential';
    var3.name = var5;
    var4 = function arg0() {
        _fun38379: for (var _fun38379_ip = 0;;) switch (_fun38379_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Measurement without differential correction';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38379_ip = 35;
                    continue _fun38379
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38379_ip = 32;
                    continue _fun38379
                }
            case 26:
                var1 = 'Differential correction applied';
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var3.description = var4;
    var1[30] = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4198]);