// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var8 = function arg0() {
        var0 = global;
        var3 = var0.TextDecoder;
        var1 = var3.prototype;
        var2 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var6 = 'utf-16';
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.decode;
        var4 = var0.Uint8Array;
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var6 = arg0;
        var7 = var3;
        var0 = new var7[var4](var6, var5);
        var0 = var0 instanceof Object ? var0 : var3;
        var3 = var1.bind(var2)(var0);
        var2 = var3.replace;
        var1 = /\u0000+$/;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var1 = {
        11: 'ProcessingSoftware',
        256: 'ImageWidth',
        257: 'ImageLength',
        258: 'BitsPerSample',
        259: 'Compression',
        262: 'PhotometricInterpretation',
        264: 'CellWidth',
        265: 'CellLength',
        269: 'DocumentName',
        270: 'ImageDescription',
        271: 'Make',
        272: 'Model',
        273: 'StripOffsets',
        277: 'SamplesPerPixel',
        278: 'RowsPerStrip',
        279: 'StripByteCounts',
        280: 'MinSampleValue',
        281: 'MaxSampleValue',
        284: 'PlanarConfiguration',
        285: 'PageName',
        297: 'PageNumber',
        301: 'TransferFunction',
        305: 'Software',
        306: 'DateTime',
        315: 'Artist',
        316: 'HostComputer',
        317: 'Predictor',
        321: 'HalftoneHints',
        322: 'TileWidth',
        323: 'TileLength',
        330: 'A100DataOffset',
        337: 'TargetPrinter',
        513: 'JPEGInterchangeFormat',
        514: 'JPEGInterchangeFormatLength',
        530: 'YCbCrSubSampling',
        700: 'ApplicationNotes',
        18246: 'Rating',
        18249: 'RatingPercent',
        33550: 'PixelScale',
        33723: 'IPTC-NAA',
        33920: 'IntergraphMatrix',
        33922: 'ModelTiePoint',
        34118: 'SEMInfo',
        34264: 'ModelTransform',
        34377: 'PhotoshopSettings',
        34665: 'Exif IFD Pointer',
        34675: 'ICC_Profile',
        34735: 'GeoTiffDirectory',
        34736: 'GeoTiffDoubleParams',
        34737: 'GeoTiffAsciiParams',
        34853: 'GPS Info IFD Pointer',
        42112: 'GDALMetadata',
        42113: 'GDALNoData',
        50341: 'PrintIM',
        50707: 'DNGBackwardVersion',
        50708: 'UniqueCameraModel',
        50709: 'LocalizedCameraModel',
        50721: 'ColorMatrix1',
        50722: 'ColorMatrix2',
        50723: 'CameraCalibration1',
        50724: 'CameraCalibration2',
        50725: 'ReductionMatrix1',
        50726: 'ReductionMatrix2',
        50727: 'AnalogBalance',
        50728: 'AsShotNeutral',
        50729: 'AsShotWhiteXY',
        50730: 'BaselineExposure',
        50731: 'BaselineNoise',
        50732: 'BaselineSharpness',
        50734: 'LinearResponseLimit',
        50735: 'CameraSerialNumber',
        50736: 'DNGLensInfo',
        50739: 'ShadowScale',
        50781: 'RawDataUniqueID',
        50827: 'OriginalRawFileName',
        50828: 'OriginalRawFileData',
        50831: 'AsShotICCProfile',
        50832: 'AsShotPreProfileMatrix',
        50833: 'CurrentICCProfile',
        50834: 'CurrentPreProfileMatrix',
        50879: 'ColorimetricReference',
        50885: 'SRawType',
        50898: 'PanasonicTitle',
        50899: 'PanasonicTitle2',
        50931: 'CameraCalibrationSig',
        50932: 'ProfileCalibrationSig',
        50933: 'ProfileIFD',
        50934: 'AsShotProfileName',
        50936: 'ProfileName',
        50937: 'ProfileHueSatMapDims',
        50938: 'ProfileHueSatMapData1',
        50939: 'ProfileHueSatMapData2',
        50940: 'ProfileToneCurve',
        50942: 'ProfileCopyright',
        50964: 'ForwardMatrix1',
        50965: 'ForwardMatrix2',
        50966: 'PreviewApplicationName',
        50967: 'PreviewApplicationVersion',
        50968: 'PreviewSettingsName',
        50969: 'PreviewSettingsDigest',
        50971: 'PreviewDateTime',
        50972: 'RawImageDigest',
        50973: 'OriginalRawFileDigest',
        50981: 'ProfileLookTableDims',
        50982: 'ProfileLookTableData',
        51043: 'TimeCodes',
        51044: 'FrameRate',
        51058: 'TStop',
        51081: 'ReelName',
        51089: 'OriginalDefaultFinalSize',
        51090: 'OriginalBestQualitySize',
        51091: 'OriginalDefaultCropSize',
        51105: 'CameraLabel',
        51109: 'BaselineExposureOffset',
        51111: 'NewRawImageDigest',
        51112: 'RawToPreviewGain'
    };
    var0 = {};
    var3 = 'SubfileType';
    var0.name = var3;
    var3 = function arg0() {
        _fun38126: for (var _fun38126_ip = 0;;) switch (_fun38126_ip) {
            case 0:
                var1 = {
                    0: 'Full-resolution image',
                    1: 'Reduced-resolution image',
                    2: 'Single page of multi-page image',
                    3: 'Single page of multi-page reduced-resolution image',
                    4: 'Transparency mask',
                    5: 'Transparency mask of reduced-resolution image',
                    6: 'Transparency mask of multi-page image',
                    7: 'Transparency mask of reduced-resolution multi-page image',
                    65537: 'Alternate reduced-resolution image',
                    '4294967295': 'Invalid'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38126_ip = 28;
                    continue _fun38126
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var0.description = var3;
    var1[254] = var0;
    var0 = {};
    var3 = 'OldSubfileType';
    var0.name = var3;
    var3 = function arg0() {
        _fun38127: for (var _fun38127_ip = 0;;) switch (_fun38127_ip) {
            case 0:
                var1 = {
                    0: 'Full-resolution image',
                    1: 'Reduced-resolution image',
                    2: 'Single page of multi-page image'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38127_ip = 28;
                    continue _fun38127
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var0.description = var3;
    var1[255] = var0;
    var0 = {};
    var3 = 'Thresholding';
    var0.name = var3;
    var3 = function arg0() {
        _fun38128: for (var _fun38128_ip = 0;;) switch (_fun38128_ip) {
            case 0:
                var1 = {
                    1: 'No dithering or halftoning',
                    2: 'Ordered dither or halfton',
                    3: 'Randomized dither'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38128_ip = 28;
                    continue _fun38128
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var0.description = var3;
    var1[263] = var0;
    var0 = {};
    var3 = 'FillOrder';
    var0.name = var3;
    var3 = function arg0() {
        _fun38129: for (var _fun38129_ip = 0;;) switch (_fun38129_ip) {
            case 0:
                var1 = {
                    1: 'Normal',
                    2: 'Reversed'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38129_ip = 28;
                    continue _fun38129
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var0.description = var3;
    var1[266] = var0;
    var0 = {};
    var3 = 'Orientation';
    var0.name = var3;
    var3 = function arg0() {
        _fun38130: for (var _fun38130_ip = 0;;) switch (_fun38130_ip) {
            case 0:
                var9 = arg0;
                var0 = 'top-left';
                var1 = 1;
                if (!(var1 !== var9)) {
                    _fun38130_ip = 134;
                    continue _fun38130
                }
            case 16:
                var1 = 'top-right';
                var2 = 2;
                if (!(var2 !== var9)) {
                    _fun38130_ip = 131;
                    continue _fun38130
                }
            case 29:
                var2 = 'bottom-right';
                var3 = 3;
                if (!(var3 !== var9)) {
                    _fun38130_ip = 128;
                    continue _fun38130
                }
            case 42:
                var3 = 'bottom-left';
                var4 = 4;
                if (!(var4 !== var9)) {
                    _fun38130_ip = 125;
                    continue _fun38130
                }
            case 55:
                var4 = 'left-top';
                var5 = 5;
                if (!(var5 !== var9)) {
                    _fun38130_ip = 122;
                    continue _fun38130
                }
            case 68:
                var5 = 'right-top';
                var6 = 6;
                if (!(var6 !== var9)) {
                    _fun38130_ip = 119;
                    continue _fun38130
                }
            case 81:
                var6 = 'right-bottom';
                var7 = 7;
                if (!(var7 !== var9)) {
                    _fun38130_ip = 116;
                    continue _fun38130
                }
            case 94:
                var7 = 'Undefined';
                var8 = 8;
                if (!(var8 === var9)) {
                    _fun38130_ip = 113;
                    continue _fun38130
                }
            case 107:
                var7 = 'left-bottom';
            case 113:
                var6 = var7;
            case 116:
                var5 = var6;
            case 119:
                var4 = var5;
            case 122:
                var3 = var4;
            case 125:
                var2 = var3;
            case 128:
                var1 = var2;
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var0.description = var3;
    var1[274] = var0;
    var3 = {};
    var0 = 'XResolution';
    var3.name = var0;
    var5 = 0;
    var9 = var7[var5];
    var0 = undefined;
    var9 = var6.bind(var0)(var9);
    var9 = var9.XResolution;
    var3.description = var9;
    var1[282] = var3;
    var3 = {};
    var9 = 'YResolution';
    var3.name = var9;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.YResolution;
    var3.description = var9;
    var1[283] = var3;
    var3 = {};
    var9 = 'XPosition';
    var3.name = var9;
    var9 = function arg0() {
        var4 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var0 = 0;
        var3 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        var0 = '' + var0;
        return var0;
    };
    var3.description = var9;
    var1[286] = var3;
    var3 = {};
    var9 = 'YPosition';
    var3.name = var9;
    var9 = function arg0() {
        var4 = arg0;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var0 = 0;
        var3 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        var0 = '' + var0;
        return var0;
    };
    var3.description = var9;
    var1[287] = var3;
    var3 = {};
    var9 = 'GrayResponseUnit';
    var3.name = var9;
    var9 = function arg0() {
        _fun38133: for (var _fun38133_ip = 0;;) switch (_fun38133_ip) {
            case 0:
                var1 = {
                    1: '0.1',
                    2: '0.001',
                    3: '0.0001',
                    4: '1e-05',
                    5: '1e-06'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38133_ip = 28;
                    continue _fun38133
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var9;
    var1[290] = var3;
    var3 = {};
    var9 = 'ResolutionUnit';
    var3.name = var9;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.ResolutionUnit;
    var3.description = var9;
    var1[296] = var3;
    var3 = {};
    var9 = 'WhitePoint';
    var3.name = var9;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = 0;
            var4 = var1[var0];
            var0 = 1;
            var3 = var1[var0];
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '';
            var0 = '/';
            var0 = var2.bind(var1)(var4, var0, var3);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ', ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var9;
    var1[318] = var3;
    var3 = {};
    var9 = 'PrimaryChromaticities';
    var3.name = var9;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = 0;
            var4 = var1[var0];
            var0 = 1;
            var3 = var1[var0];
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '';
            var0 = '/';
            var0 = var2.bind(var1)(var4, var0, var3);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ', ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var9;
    var1[319] = var3;
    var3 = {};
    var9 = 'InkSet';
    var3.name = var9;
    var9 = function arg0() {
        _fun38138: for (var _fun38138_ip = 0;;) switch (_fun38138_ip) {
            case 0:
                var1 = {
                    1: 'CMYK',
                    2: 'Not CMYK'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38138_ip = 28;
                    continue _fun38138
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var9;
    var1[332] = var3;
    var3 = {};
    var9 = 'ExtraSamples';
    var3.name = var9;
    var9 = function arg0() {
        _fun38139: for (var _fun38139_ip = 0;;) switch (_fun38139_ip) {
            case 0:
                var1 = {
                    0: 'Unspecified',
                    1: 'Associated Alpha',
                    2: 'Unassociated Alpha'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38139_ip = 28;
                    continue _fun38139
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var9;
    var1[338] = var3;
    var3 = {};
    var9 = 'SampleFormat';
    var3.name = var9;
    var9 = function arg0() {
        _fun38140: for (var _fun38140_ip = 0;;) switch (_fun38140_ip) {
            case 0:
                var3 = arg0;
                var0 = {
                    1: 'Unsigned',
                    2: 'Signed',
                    3: 'Float',
                    4: 'Undefined',
                    5: 'Complex int',
                    6: 'Complex float'
                };
                var _closure2_slot0 = var0;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var2 = var0.bind(var2)(var3);
                var0 = 'Unknown';
                if (!var2) {
                    _fun38140_ip = 79;
                    continue _fun38140
                }
            case 48:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun38141: for (var _fun38141_ip = 0;;) switch (_fun38141_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var1[var0];
                            if (var0) {
                                _fun38141_ip = 21;
                                continue _fun38141
                            }
                        case 17:
                            var0 = 'Unknown';
                        case 21:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 79:
                return var0;
        }
    };
    var3.description = var9;
    var1[339] = var3;
    var3 = {};
    var9 = 'YCbCrCoefficients';
    var3.name = var9;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var0 = 0;
            var1 = var2[var0];
            var0 = 1;
            var0 = var2[var0];
            var0 = var1 / var0;
            var0 = '' + var0;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '/';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var9;
    var1[529] = var3;
    var3 = {};
    var9 = 'YCbCrPositioning';
    var3.name = var9;
    var9 = function arg0() {
        _fun38144: for (var _fun38144_ip = 0;;) switch (_fun38144_ip) {
            case 0:
                var3 = arg0;
                var0 = 'centered';
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun38144_ip = 40;
                    continue _fun38144
                }
            case 14:
                var1 = 'co-sited';
                var2 = 2;
                if (!(var2 !== var3)) {
                    _fun38144_ip = 37;
                    continue _fun38144
                }
            case 27:
                var2 = 'undefined ';
                var1 = var2 + var3;
            case 37:
                var0 = var1;
            case 40:
                return var0;
        }
    };
    var3.description = var9;
    var1[531] = var3;
    var3 = {};
    var9 = 'ReferenceBlackWhite';
    var3.name = var9;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var0 = 0;
            var1 = var2[var0];
            var0 = 1;
            var0 = var2[var0];
            var0 = var1 / var0;
            var0 = '' + var0;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ', ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var9;
    var1[532] = var3;
    var3 = {};
    var9 = 'Copyright';
    var3.name = var9;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.join;
        var0 = '; ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.description = var9;
    var1[33432] = var3;
    var3 = {};
    var9 = 'XPTitle';
    var3.name = var9;
    var3.description = var8;
    var1[40091] = var3;
    var3 = {};
    var9 = 'XPComment';
    var3.name = var9;
    var3.description = var8;
    var1[40092] = var3;
    var3 = {};
    var9 = 'XPAuthor';
    var3.name = var9;
    var3.description = var8;
    var1[40093] = var3;
    var3 = {};
    var9 = 'XPKeywords';
    var3.name = var9;
    var3.description = var8;
    var1[40094] = var3;
    var3 = {};
    var9 = 'XPSubject';
    var3.name = var9;
    var3.description = var8;
    var1[40095] = var3;
    var3 = {};
    var8 = 'MakerNoteSafety';
    var3.name = var8;
    var8 = function arg0() {
        _fun38148: for (var _fun38148_ip = 0;;) switch (_fun38148_ip) {
            case 0:
                var1 = {
                    0: 'Unsafe',
                    1: 'Safe'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38148_ip = 28;
                    continue _fun38148
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var8;
    var1[50741] = var3;
    var3 = {};
    var8 = 'CalibrationIlluminant1';
    var3.name = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.LightSource;
    var3.description = var8;
    var1[50778] = var3;
    var3 = {};
    var8 = 'CalibrationIlluminant2';
    var3.name = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.LightSource;
    var3.description = var5;
    var1[50779] = var3;
    var3 = {};
    var5 = 'ProfileEmbedPolicy';
    var3.name = var5;
    var5 = function arg0() {
        _fun38149: for (var _fun38149_ip = 0;;) switch (_fun38149_ip) {
            case 0:
                var1 = {
                    0: 'Allow Copying',
                    1: 'Embed if Used',
                    2: 'Never Embed',
                    3: 'No Restrictions'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38149_ip = 28;
                    continue _fun38149
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var5;
    var1[50941] = var3;
    var3 = {};
    var5 = 'PreviewColorSpace';
    var3.name = var5;
    var5 = function arg0() {
        _fun38150: for (var _fun38150_ip = 0;;) switch (_fun38150_ip) {
            case 0:
                var1 = {
                    1: 'Gray Gamma 2.2',
                    2: 'sRGB',
                    3: 'Adobe RGB',
                    4: 'ProPhoto RGB'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38150_ip = 28;
                    continue _fun38150
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var5;
    var1[50970] = var3;
    var3 = {};
    var5 = 'ProfileHueSatMapEncoding';
    var3.name = var5;
    var5 = function arg0() {
        _fun38151: for (var _fun38151_ip = 0;;) switch (_fun38151_ip) {
            case 0:
                var1 = {
                    0: 'Linear',
                    1: 'sRGB'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38151_ip = 28;
                    continue _fun38151
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var5;
    var1[51107] = var3;
    var3 = {};
    var5 = 'ProfileLookTableEncoding';
    var3.name = var5;
    var5 = function arg0() {
        _fun38152: for (var _fun38152_ip = 0;;) switch (_fun38152_ip) {
            case 0:
                var1 = {
                    0: 'Linear',
                    1: 'sRGB'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38152_ip = 28;
                    continue _fun38152
                }
            case 24:
                var0 = 'Unknown';
            case 28:
                return var0;
        }
    };
    var3.description = var5;
    var1[51108] = var3;
    var3 = {};
    var5 = 'DefaultBlackRender';
    var3.name = var5;
    var4 = function arg0() {
        _fun38153: for (var _fun38153_ip = 0;;) switch (_fun38153_ip) {
            case 0:
                var1 = {
                    0: 'Auto',
                    1: 'None'
                };
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun38153_ip = 24;
                    continue _fun38153
                }
            case 20:
                var0 = 'Unknown';
            case 24:
                return var0;
        }
    };
    var3.description = var4;
    var1[51110] = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4184]);