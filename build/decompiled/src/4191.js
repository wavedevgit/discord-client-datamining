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
        _fun38267: for (var _fun38267_ip = 0;;) switch (_fun38267_ip) {
            case 0:
                var4 = arg0;
                var2 = 0;
                var5 = var4[var2];
                var3 = 'Unknown';
                var1 = 2;
                var0 = var3;
                if (!(var1 === var5)) {
                    _fun38267_ip = 68;
                    continue _fun38267
                }
            case 23:
                var5 = 1;
                var5 = var4[var5];
                var0 = var3;
                if (!(var1 === var5)) {
                    _fun38267_ip = 68;
                    continue _fun38267
                }
            case 37:
                var1 = var4[var1];
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun38267_ip = 68;
                    continue _fun38267
                }
            case 48:
                var1 = 3;
                var1 = var4[var1];
                var0 = var3;
                if (!(var2 === var1)) {
                    _fun38267_ip = 68;
                    continue _fun38267
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
        _fun38268: for (var _fun38268_ip = 0;;) switch (_fun38268_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'North latitude';
                var1 = 'N';
                if (!(var1 !== var3)) {
                    _fun38268_ip = 52;
                    continue _fun38268
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'S';
                if (!(var2 === var3)) {
                    _fun38268_ip = 49;
                    continue _fun38268
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
        _fun38269: for (var _fun38269_ip = 0;;) switch (_fun38269_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'East longitude';
                var1 = 'E';
                if (!(var1 !== var3)) {
                    _fun38269_ip = 52;
                    continue _fun38269
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'W';
                if (!(var2 === var3)) {
                    _fun38269_ip = 49;
                    continue _fun38269
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
        _fun38270: for (var _fun38270_ip = 0;;) switch (_fun38270_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Sea level';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38270_ip = 35;
                    continue _fun38270
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38270_ip = 32;
                    continue _fun38270
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
            _fun38273: for (var _fun38273_ip = 0;;) switch (_fun38273_ip) {
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
                        _fun38273_ip = 112;
                        continue _fun38273
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
        _fun38274: for (var _fun38274_ip = 0;;) switch (_fun38274_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'Measurement in progress';
                var1 = 'A';
                if (!(var1 !== var3)) {
                    _fun38274_ip = 52;
                    continue _fun38274
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'V';
                if (!(var2 === var3)) {
                    _fun38274_ip = 49;
                    continue _fun38274
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
        _fun38275: for (var _fun38275_ip = 0;;) switch (_fun38275_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = '2-dimensional measurement';
                var1 = '2';
                if (!(var1 !== var3)) {
                    _fun38275_ip = 56;
                    continue _fun38275
                }
            case 33:
                var1 = 'Unknown';
                var2 = '3';
                if (!(var2 === var3)) {
                    _fun38275_ip = 53;
                    continue _fun38275
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
        _fun38276: for (var _fun38276_ip = 0;;) switch (_fun38276_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var4 = var1.bind(var2)(var0);
                var0 = 'Kilometers per hour';
                var1 = 'K';
                if (!(var1 !== var4)) {
                    _fun38276_ip = 69;
                    continue _fun38276
                }
            case 31:
                var1 = 'Miles per hour';
                var2 = 'M';
                if (!(var2 !== var4)) {
                    _fun38276_ip = 66;
                    continue _fun38276
                }
            case 45:
                var2 = 'Unknown';
                var3 = 'N';
                if (!(var3 === var4)) {
                    _fun38276_ip = 63;
                    continue _fun38276
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
        _fun38277: for (var _fun38277_ip = 0;;) switch (_fun38277_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38277_ip = 52;
                    continue _fun38277
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38277_ip = 49;
                    continue _fun38277
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
        _fun38278: for (var _fun38278_ip = 0;;) switch (_fun38278_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38278_ip = 52;
                    continue _fun38278
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38278_ip = 49;
                    continue _fun38278
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
        _fun38279: for (var _fun38279_ip = 0;;) switch (_fun38279_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'North latitude';
                var1 = 'N';
                if (!(var1 !== var3)) {
                    _fun38279_ip = 52;
                    continue _fun38279
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'S';
                if (!(var2 === var3)) {
                    _fun38279_ip = 49;
                    continue _fun38279
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
        _fun38281: for (var _fun38281_ip = 0;;) switch (_fun38281_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'East longitude';
                var1 = 'E';
                if (!(var1 !== var3)) {
                    _fun38281_ip = 52;
                    continue _fun38281
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'W';
                if (!(var2 === var3)) {
                    _fun38281_ip = 49;
                    continue _fun38281
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
        _fun38283: for (var _fun38283_ip = 0;;) switch (_fun38283_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var3 = var1.bind(var2)(var0);
                var0 = 'True direction';
                var1 = 'T';
                if (!(var1 !== var3)) {
                    _fun38283_ip = 52;
                    continue _fun38283
                }
            case 31:
                var1 = 'Unknown';
                var2 = 'M';
                if (!(var2 === var3)) {
                    _fun38283_ip = 49;
                    continue _fun38283
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
        _fun38284: for (var _fun38284_ip = 0;;) switch (_fun38284_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.join;
                var0 = '';
                var4 = var1.bind(var2)(var0);
                var0 = 'Kilometers';
                var1 = 'K';
                if (!(var1 !== var4)) {
                    _fun38284_ip = 69;
                    continue _fun38284
                }
            case 31:
                var1 = 'Miles';
                var2 = 'M';
                if (!(var2 !== var4)) {
                    _fun38284_ip = 66;
                    continue _fun38284
                }
            case 45:
                var2 = 'Unknown';
                var3 = 'N';
                if (!(var3 === var4)) {
                    _fun38284_ip = 63;
                    continue _fun38284
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
        _fun38285: for (var _fun38285_ip = 0;;) switch (_fun38285_ip) {
            case 0:
                var3 = arg0;
                var0 = 'Measurement without differential correction';
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun38285_ip = 35;
                    continue _fun38285
                }
            case 15:
                var1 = 'Unknown';
                var2 = 1;
                if (!(var2 === var3)) {
                    _fun38285_ip = 32;
                    continue _fun38285
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4190]);