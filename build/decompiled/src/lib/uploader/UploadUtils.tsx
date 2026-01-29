// lib/uploader/UploadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() { // Original name: DefaultHttpClient, environment: var4
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'sliceBody';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun36852: for (var _fun36852_ip = 0;;) switch (_fun36852_ip) {
                case 0:
                    var3 = arg0;
                    var0 = global;
                    var0 = var0.File;
                    var1 = var3 instanceof var0;
                    var0 = var3;
                    if (!var1) {
                        _fun36852_ip = 34;
                        continue _fun36852
                    }
                case 21:
                    var2 = var3.slice;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 34:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'doUpload';
        var0.key = var5;
        var4 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun36853: for (var _fun36853_ip = 0;;) switch (_fun36853_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var5 = this;
                    var4 = null;
                    var6 = var4 == var0;
                    var3 = undefined;
                    var1 = undefined;
                    if (var6) {
                        _fun36853_ip = 28;
                        continue _fun36853
                    }
                case 22:
                    var1 = var0.fileByteRange;
                case 28:
                    if (!(var4 != var1)) {
                        _fun36853_ip = 68;
                        continue _fun36853
                    }
                case 32:
                    var4 = var5.sliceBody;
                    var1 = var2.body;
                    var0 = var0.fileByteRange;
                    var0 = var0.start;
                    var0 = var4.bind(var5)(var1, var0);
                    var2.body = var0;
                case 68:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 3;
                    var0 = var4[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.HTTP;
                    var0 = var1.put;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() { // Original name: LibdiscoreHttpClient, environment: var1
            _fun36855: for (var _fun36855_ip = 0;;) switch (_fun36855_ip) {
                case 0:
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = this;
                    var2 = var4.bind(var0)(var2, var3);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isLibdiscoreInitialized;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun36855_ip = 94;
                        continue _fun36855
                    }
                case 58:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = 'Libdiscore is not loaded';
                    var7 = var2;
                    var1 = new var7[var3](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 94:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'doUpload';
        var0.key = var4;
        var1 = function(arg0, arg1) { // Original name: value, environment: var1
            _fun36856: for (var _fun36856_ip = 0;;) switch (_fun36856_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var _closure3_slot0 = var5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 5;
                    var1 = var4[var1];
                    var7 = undefined;
                    var3 = var3.bind(var7)(var1);
                    var1 = var3.getHttpClientAPI;
                    var4 = var1.bind(var3)();
                    var _closure3_slot1 = var4;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun36856_ip = 390;
                        continue _fun36856
                    }
                case 60:
                    var6 = var5.body;
                    var8 = var3 == var6;
                    var1 = undefined;
                    if (var8) {
                        _fun36856_ip = 79;
                        continue _fun36856
                    }
                case 74:
                    var1 = var6.uri;
                case 79:
                    var6 = var7 !== var1;
                    if (!var6) {
                        _fun36856_ip = 107;
                        continue _fun36856
                    }
                case 86:
                    var1 = var5.body;
                    var1 = var1.uri;
                    var8 = 'string';
                    var1 = typeof var1;
                    var6 = var8 === var1;
                case 107:
                    var1 = undefined;
                    if (!var6) {
                        _fun36856_ip = 173;
                        continue _fun36856
                    }
                case 112:
                    var6 = var5.body;
                    var9 = var6.uri;
                    var8 = var9.startsWith;
                    var6 = 'file://';
                    var6 = var8.bind(var9)(var6);
                    var8 = var5.body;
                    var10 = var8.uri;
                    if (var6) {
                        _fun36856_ip = 157;
                        continue _fun36856
                    }
                case 152:
                    var6 = var10;
                    _fun36856_ip = 170;
                    continue _fun36856;
                case 157:
                    var9 = var10.slice;
                    var8 = 7;
                    var6 = var9.bind(var10)(var8);
                case 170:
                    var1 = var6;
                case 173:
                    if (!(var7 !== var1)) {
                        _fun36856_ip = 354;
                        continue _fun36856
                    }
                case 180:
                    var6 = '';
                    if (!(var6 !== var1)) {
                        _fun36856_ip = 354;
                        continue _fun36856
                    }
                case 191:
                    var6 = {};
                    var6.path = var1;
                    var8 = var3 == var2;
                    var1 = undefined;
                    if (var8) {
                        _fun36856_ip = 227;
                        continue _fun36856
                    }
                case 207:
                    var8 = var2.fileByteRange;
                    var9 = var3 == var8;
                    var1 = undefined;
                    if (var9) {
                        _fun36856_ip = 227;
                        continue _fun36856
                    }
                case 222:
                    var1 = var8.start;
                case 227:
                    var6.byteRangeStart = var1;
                    var8 = var3 == var2;
                    var1 = undefined;
                    if (var8) {
                        _fun36856_ip = 263;
                        continue _fun36856
                    }
                case 243:
                    var2 = var2.fileByteRange;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun36856_ip = 263;
                        continue _fun36856
                    }
                case 258:
                    var1 = var2.end;
                case 263:
                    var6.byteRangeEnd = var1;
                    var3 = var4.httpRequest;
                    var2 = var5.url;
                    var1 = {};
                    var7 = 'PUT';
                    var1.method = var7;
                    var1.body = var6;
                    var5 = var5.headers;
                    var1.headers = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot2 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var1 = function() { // Original name: pollStatus, environment: var0
                            _fun36858: for (var _fun36858_ip = 0;;) switch (_fun36858_ip) {
                                case 0:
                                    var1 = _closure3_slot0;
                                    var1 = var1.signal;
                                    var4 = null;
                                    if (!(var4 != var1)) {
                                        _fun36858_ip = 31;
                                        continue _fun36858
                                    }
                                case 19:
                                    var1 = var1.aborted;
                                    if (var1) {
                                        _fun36858_ip = 420;
                                        continue _fun36858
                                    }
                                case 31:
                                    var3 = _closure3_slot1;
                                    var2 = var3.getHttpRequestStatus;
                                    var1 = _closure3_slot2;
                                    var5 = var2.bind(var3)(var1);
                                    var2 = var4 == var5;
                                    var1 = undefined;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun36858_ip = 66;
                                        continue _fun36858
                                    }
                                case 61:
                                    var3 = var5.status;
                                case 66:
                                    var2 = 'success';
                                    if (!(var2 !== var3)) {
                                        _fun36858_ip = 330;
                                        continue _fun36858
                                    }
                                case 77:
                                    var2 = var4 == var5;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun36858_ip = 91;
                                        continue _fun36858
                                    }
                                case 86:
                                    var3 = var5.status;
                                case 91:
                                    var2 = 'error';
                                    if (!(var2 !== var3)) {
                                        _fun36858_ip = 283;
                                        continue _fun36858
                                    }
                                case 102:
                                    var2 = var4 == var5;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun36858_ip = 116;
                                        continue _fun36858
                                    }
                                case 111:
                                    var3 = var5.status;
                                case 116:
                                    var2 = 'progressing';
                                    if (!(var2 !== var3)) {
                                        _fun36858_ip = 177;
                                        continue _fun36858
                                    }
                                case 126:
                                    var3 = _closure4_slot1;
                                    var2 = global;
                                    var7 = var2.Error;
                                    var2 = var7.prototype;
                                    var6 = Object.create(var2, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var10 = 'Unknown upload status';
                                    var11 = var6;
                                    var2 = new var11[var7](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var6;
                                    var2 = var3.bind(var1)(var2);
                                    _fun36858_ip = 418;
                                    continue _fun36858;
                                case 177:
                                    var2 = _closure3_slot0;
                                    var2 = var2.onRequestProgress;
                                    if (!(var1 !== var2)) {
                                        _fun36858_ip = 254;
                                        continue _fun36858
                                    }
                                case 191:
                                    var2 = var5.uploaded_bytes;
                                    if (!(var4 != var2)) {
                                        _fun36858_ip = 254;
                                        continue _fun36858
                                    }
                                case 201:
                                    var3 = var5.uploaded_bytes;
                                    var2 = 0;
                                    if (!(var3 > var2)) {
                                        _fun36858_ip = 254;
                                        continue _fun36858
                                    }
                                case 213:
                                    var6 = {};
                                    var2 = var5.uploaded_bytes;
                                    var6.loaded = var2;
                                    var2 = var5.total_bytes;
                                    var6.total = var2;
                                    var3 = _closure3_slot0;
                                    var2 = var3.onRequestProgress;
                                    var2 = var2.bind(var3)(var6);
                                case 254:
                                    var2 = global;
                                    var6 = var2.setTimeout;
                                    var3 = _closure4_slot2;
                                    var2 = 50;
                                    var2 = var6.bind(var1)(var3, var2);
                                    _fun36858_ip = 418;
                                    continue _fun36858;
                                case 283:
                                    var3 = _closure4_slot1;
                                    var2 = global;
                                    var7 = var2.Error;
                                    var10 = var5.error;
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var11 = var6;
                                    var2 = new var11[var7](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var6;
                                    var2 = var3.bind(var1)(var2);
                                    _fun36858_ip = 418;
                                    continue _fun36858;
                                case 330:
                                    var3 = _closure4_slot0;
                                    var2 = {};
                                    var7 = var5.response;
                                    var8 = var4 == var7;
                                    var6 = undefined;
                                    if (var8) {
                                        _fun36858_ip = 359;
                                        continue _fun36858
                                    }
                                case 354:
                                    var6 = var7.status;
                                case 359:
                                    var2.status = var6;
                                    var7 = var5.response;
                                    var8 = var4 == var7;
                                    var6 = undefined;
                                    if (var8) {
                                        _fun36858_ip = 384;
                                        continue _fun36858
                                    }
                                case 378:
                                    var6 = var7.headers;
                                case 384:
                                    var2.headers = var6;
                                    var5 = var5.response;
                                    var6 = var4 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun36858_ip = 409;
                                        continue _fun36858
                                    }
                                case 404:
                                    var4 = var5.body;
                                case 409:
                                    var2.text = var4;
                                    var2 = var3.bind(var1)(var2);
                                case 418:
                                    return var1;
                                case 420:
                                    var3 = _closure4_slot1;
                                    var1 = global;
                                    var4 = var1.Error;
                                    var1 = var4.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var10 = 'Request cancelled';
                                    var11 = var2;
                                    var1 = new var11[var4](var10, var9);
                                    var2 = var1 instanceof Object ? var1 : var2;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    var2 = _closure3_slot1;
                                    var1 = var2.cancelHttpRequest;
                                    var0 = _closure3_slot2;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure4_slot2 = var1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                case 354:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = 'No file path found in request body';
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 390:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = 'Libdiscore client is not available';
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/uploader/UploadUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1) { // Original name: doesImageMatchUpload, environment: var3
        _fun36859: for (var _fun36859_ip = 0;;) switch (_fun36859_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = var1.id;
                var0 = var3.uri;
                if (!(var2 !== var0)) {
                    _fun36859_ip = 172;
                    continue _fun36859
                }
            case 23:
                var2 = var1.id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun36859_ip = 51;
                    continue _fun36859
                }
            case 34:
                var4 = var1.id;
                var2 = var3.id;
                if (!(var4 !== var2)) {
                    _fun36859_ip = 172;
                    continue _fun36859
                }
            case 51:
                var2 = var1.item;
                var4 = var2.platform;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.UploadPlatform;
                var2 = var2.REACT_NATIVE;
                if (!(var4 !== var2)) {
                    _fun36859_ip = 107;
                    continue _fun36859
                }
            case 103:
                var2 = false;
                return var2;
            case 107:
                var1 = var1.item;
                var2 = var3.filename;
                var4 = var1.originalUri;
                var3 = var3.uri;
                if (!(var4 !== var3)) {
                    _fun36859_ip = 168;
                    continue _fun36859
                }
            case 133:
                if (!(var0 != var2)) {
                    _fun36859_ip = 160;
                    continue _fun36859
                }
            case 137:
                var1 = var1.originalUri;
                if (!(var0 != var1)) {
                    _fun36859_ip = 160;
                    continue _fun36859
                }
            case 147:
                var0 = var1.includes;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun36859_ip = 164;
                    continue _fun36859
                }
            case 160:
                var0 = false;
                return var0;
            case 164:
                var0 = true;
                return var0;
            case 168:
                var0 = true;
                return var0;
            case 172:
                var0 = true;
                return var0;
        }
    };
    var2.doesImageMatchUpload = var5;
    var5 = function(arg0, arg1) { // Original name: calculateProgress, environment: var3
        _fun36860: for (var _fun36860_ip = 0;;) switch (_fun36860_ip) {
            case 0:
                var2 = arg1;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun36860_ip = 59;
                    continue _fun36860
                }
            case 9:
                var1 = global;
                var4 = var1.Math;
                var3 = var4.min;
                var6 = var1.Math;
                var5 = var6.floor;
                var1 = arg0;
                var1 = var1 / var2;
                var2 = 100;
                var1 = var1 * var2;
                var1 = var5.bind(var6)(var1);
                var0 = var3.bind(var4)(var1, var2);
            case 59:
                return var0;
        }
    };
    var2.calculateProgress = var5;
    var2.DefaultHttpClient = var4;
    var3 = function(arg0) { // Original name: canUploadNatively, environment: var3
        _fun36861: for (var _fun36861_ip = 0;;) switch (_fun36861_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.platform;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var0 = var0.UploadPlatform;
                var0 = var0.REACT_NATIVE;
                var0 = var4 === var0;
                if (!var0) {
                    _fun36861_ip = 64;
                    continue _fun36861
                }
            case 53:
                var5 = var2.uri;
                var4 = null;
                var0 = var4 != var5;
            case 64:
                if (!var0) {
                    _fun36861_ip = 103;
                    continue _fun36861
                }
            case 67:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 4;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.fileIsInAppDir;
                var2 = var2.uri;
                var0 = var4.bind(var5)(var2);
            case 103:
                if (!var0) {
                    _fun36861_ip = 136;
                    continue _fun36861
                }
            case 106:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isLibdiscoreInitialized;
                var0 = var1.bind(var2)();
            case 136:
                return var0;
        }
    };
    var2.canUploadNatively = var3;
    var2.LibdiscoreHttpClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3959, 507, 3965, 4076, 2]);