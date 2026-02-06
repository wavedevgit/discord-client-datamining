// utils/UploadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot2 = var3;
    var6 = {};
    var3 = /\.jpe?g$/i;
    var6.reName = var3;
    var3 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.jpg';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var3;
    var7 = 'image/jpeg';
    var6.type = var7;
    var3 = new Array(14);
    var3[0] = var6;
    var6 = {};
    var8 = /\.jfif$/i;
    var6.reName = var8;
    var8 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.jpg';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var8;
    var6.type = var7;
    var3[1] = var6;
    var6 = {};
    var7 = /\.png$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.png';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/png';
    var6.type = var7;
    var3[2] = var6;
    var6 = {};
    var7 = /\.gif$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.gif';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/gif';
    var6.type = var7;
    var3[3] = var6;
    var6 = {};
    var7 = /\.webp$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.webp';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/webp';
    var6.type = var7;
    var3[4] = var6;
    var6 = {};
    var7 = /\.avif$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.avif';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/avif';
    var6.type = var7;
    var3[5] = var6;
    var6 = {};
    var7 = /\.heic$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.heic';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/heic';
    var6.type = var7;
    var3[6] = var6;
    var6 = {};
    var7 = /\.heif$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.heif';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/heif';
    var6.type = var7;
    var3[7] = var6;
    var6 = {};
    var7 = /\.dng$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'image';
        var1 = arg0;
        var0 = '.dng';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/x-adobe-dng';
    var6.type = var7;
    var3[8] = var6;
    var6 = {};
    var7 = /\.mov$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'video';
        var1 = arg0;
        var0 = '.mov';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'video/quicktime';
    var6.type = var7;
    var3[9] = var6;
    var6 = {};
    var8 = /\.qt$/i;
    var6.reName = var8;
    var8 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'video';
        var1 = arg0;
        var0 = '.qt';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var8;
    var6.type = var7;
    var3[10] = var6;
    var6 = {};
    var7 = /\.avi$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'video';
        var1 = arg0;
        var0 = '.avi';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'video/x-msvideo';
    var6.type = var7;
    var3[11] = var6;
    var6 = {};
    var7 = /\.mp4$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'video';
        var1 = arg0;
        var0 = '.mp4';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'video/mp4';
    var6.type = var7;
    var3[12] = var6;
    var6 = {};
    var7 = /\.webm$/i;
    var6.reName = var7;
    var7 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'video';
        var1 = arg0;
        var0 = '.webm';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var6.name = var7;
    var7 = 'image/webm';
    var6.type = var7;
    var3[13] = var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/UploadUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 524288000;
    var2.MAX_TOTAL_ATTACHMENT_SIZE = var3;
    var3 = function arg0() {
        _fun37010: for (var _fun37010_ip = 0;;) switch (_fun37010_ip) {
            case 0:
                var1 = arg0;
                var5 = arguments[1];
                var6 = arguments[2];
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun37010_ip = 17;
                    continue _fun37010
                }
            case 15:
                var5 = null;
            case 17:
                var0 = {};
                var4 = null;
                var3 = var4 == var5;
                var2 = undefined;
                if (var3) {
                    _fun37010_ip = 39;
                    continue _fun37010
                }
            case 30:
                var3 = var5.toString;
                var2 = var3.bind(var5)();
            case 39:
                if (!(var4 == var2)) {
                    _fun37010_ip = 48;
                    continue _fun37010
                }
            case 43:
                var2 = var1.id;
            case 48:
                var0.id = var2;
                var2 = var1.description;
                if (!(var4 != var2)) {
                    _fun37010_ip = 72;
                    continue _fun37010
                }
            case 61:
                var2 = var1.description;
                var0.description = var2;
            case 72:
                var2 = {};
                var3 = var1.spoiler;
                var2.spoiler = var3;
                var2 = var2.spoiler;
                var5 = '';
                var3 = var5;
                if (!var2) {
                    _fun37010_ip = 108;
                    continue _fun37010
                }
            case 101:
                var3 = _closure1_slot2;
            case 108:
                if (!(var4 == var6)) {
                    _fun37010_ip = 118;
                    continue _fun37010
                }
            case 112:
                var6 = var1.filename;
            case 118:
                var2 = global;
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var3, var6);
                var0.filename = var2;
                var2 = var1.uploadedFilename;
                var0.uploaded_filename = var2;
                var2 = 'durationSecs';
                var2 = var2 in var1;
                if (!var2) {
                    _fun37010_ip = 178;
                    continue _fun37010
                }
            case 168:
                var3 = var1.durationSecs;
                var2 = var4 != var3;
            case 178:
                if (!var2) {
                    _fun37010_ip = 193;
                    continue _fun37010
                }
            case 181:
                var2 = var1.durationSecs;
                var0.duration_secs = var2;
            case 193:
                var2 = 'waveform';
                var2 = var2 in var1;
                if (!var2) {
                    _fun37010_ip = 214;
                    continue _fun37010
                }
            case 204:
                var3 = var1.waveform;
                var2 = var4 != var3;
            case 214:
                if (!var2) {
                    _fun37010_ip = 229;
                    continue _fun37010
                }
            case 217:
                var2 = var1.waveform;
                var0.waveform = var2;
            case 229:
                var2 = 'isThumbnail';
                var2 = var2 in var1;
                if (!var2) {
                    _fun37010_ip = 252;
                    continue _fun37010
                }
            case 240:
                var5 = var1.isThumbnail;
                var3 = true;
                var2 = var3 === var5;
            case 252:
                if (!var2) {
                    _fun37010_ip = 269;
                    continue _fun37010
                }
            case 255:
                var2 = var1.isThumbnail;
                var0.is_thumbnail = var2;
            case 269:
                var2 = 'clip';
                var2 = var2 in var1;
                if (!var2) {
                    _fun37010_ip = 290;
                    continue _fun37010
                }
            case 280:
                var3 = var1.clip;
                var2 = var4 != var3;
            case 290:
                if (!var2) {
                    _fun37010_ip = 433;
                    continue _fun37010
                }
            case 296:
                var2 = true;
                var0.is_clip = var2;
                var2 = var1.clip;
                var2 = var2.name;
                var0.title = var2;
                var2 = var1.clip;
                var2 = var2.applicationId;
                var0.application_id = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var6 = var5[var2];
                var9 = var3.bind(var7)(var6);
                var8 = var9.getClipCreatedAt;
                var6 = var1.clip;
                var6 = var6.id;
                var6 = var8.bind(var9)(var6);
                var0.clip_created_at = var6;
                var2 = var5[var2];
                var5 = var3.bind(var7)(var2);
                var3 = var5.getClipParticipantIds;
                var2 = var1.clip;
                var2 = var2.users;
                var2 = var3.bind(var5)(var2);
                var0.clip_participant_ids = var2;
            case 433:
                var2 = 'item';
                var2 = var2 in var1;
                if (!var2) {
                    _fun37010_ip = 453;
                    continue _fun37010
                }
            case 444:
                var3 = var1.item;
                var2 = var4 != var3;
            case 453:
                if (!var2) {
                    _fun37010_ip = 506;
                    continue _fun37010
                }
            case 456:
                var3 = var1.item;
                var5 = var3.platform;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 2;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.UploadPlatform;
                var3 = var3.WEB;
                var2 = var5 === var3;
            case 506:
                if (!var2) {
                    _fun37010_ip = 517;
                    continue _fun37010
                }
            case 509:
                var3 = 'mimeType';
                var2 = var3 in var1;
            case 517:
                if (!var2) {
                    _fun37010_ip = 530;
                    continue _fun37010
                }
            case 520:
                var3 = var1.mimeType;
                var2 = var4 != var3;
            case 530:
                if (!var2) {
                    _fun37010_ip = 545;
                    continue _fun37010
                }
            case 533:
                var1 = var1.mimeType;
                var0.original_content_type = var1;
            case 545:
                return var0;
        }
    };
    var2.getAttachmentPayload = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.XMLHttpRequest;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = _closure2_slot1;
            var5 = var1.open;
            var4 = _closure2_slot0;
            var3 = 'GET';
            var2 = true;
            var2 = var5.bind(var1)(var3, var4, var2);
            var2 = 'blob';
            var1.responseType = var2;
            var2 = function(arg0) { // Environment: var0
                var2 = _closure3_slot1;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.onabort = var2;
            var2 = function(arg0) { // Environment: var0
                var2 = _closure3_slot1;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.onerror = var2;
            var2 = function(arg0) { // Environment: var0
                var2 = _closure3_slot1;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.ontimeout = var2;
            var0 = function() { // Environment: var0
                _fun37016: for (var _fun37016_ip = 0;;) switch (_fun37016_ip) {
                    case 0:
                        var2 = _closure3_slot0;
                        var0 = _closure2_slot1;
                        var4 = null;
                        var5 = var4 == var0;
                        var1 = undefined;
                        var0 = undefined;
                        if (var5) {
                            _fun37016_ip = 51;
                            continue _fun37016
                        }
                    case 27:
                        var3 = _closure2_slot1;
                        var3 = var3.response;
                        var4 = var4 == var3;
                        var0 = undefined;
                        if (var4) {
                            _fun37016_ip = 51;
                            continue _fun37016
                        }
                    case 46:
                        var0 = var3.data;
                    case 51:
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var1.onload = var0;
            var0 = var1.send;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getFileData = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = arg1;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var0;
            var1 = global;
            var1 = var1.XMLHttpRequest;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var10 = var3;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot2 = var1;
            var6 = var1.open;
            var5 = _closure2_slot0;
            var4 = 'HEAD';
            var3 = true;
            var3 = var6.bind(var1)(var4, var5, var3);
            var2 = function() { // Environment: var2
                _fun37019: for (var _fun37019_ip = 0;;) switch (_fun37019_ip) {
                    case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.status;
                        var1 = 200;
                        if (!(var2 >= var1)) {
                            _fun37019_ip = 38;
                            continue _fun37019
                        }
                    case 19:
                        var1 = _closure3_slot2;
                        var2 = var1.status;
                        var1 = 300;
                        if (!(!(var2 < var1))) {
                            _fun37019_ip = 110;
                            continue _fun37019
                        }
                    case 38:
                        var3 = _closure3_slot1;
                        var1 = global;
                        var4 = var1.Error;
                        var2 = _closure3_slot2;
                        var5 = var2.status;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'HTTP request failed with status code ';
                        var7 = var2.bind(var1)(var5);
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var8 = var2;
                        var1 = new var8[var4](var7, var6);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun37019_ip = 218;
                        continue _fun37019;
                    case 110:
                        var3 = _closure3_slot2;
                        var2 = var3.getResponseHeader;
                        var1 = 'Content-Length';
                        var4 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun37019_ip = 143;
                            continue _fun37019
                        }
                    case 135:
                        var1 = '';
                        if (!(var1 === var4)) {
                            _fun37019_ip = 190;
                            continue _fun37019
                        }
                    case 143:
                        var3 = _closure3_slot1;
                        var1 = global;
                        var5 = var1.Error;
                        var1 = var5.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var7 = 'Content-Length header is missing';
                        var8 = var2;
                        var1 = new var8[var5](var7, var6);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun37019_ip = 218;
                        continue _fun37019;
                    case 190:
                        var2 = _closure3_slot0;
                        var0 = global;
                        var3 = var0.parseInt;
                        var1 = undefined;
                        var0 = 10;
                        var0 = var3.bind(var1)(var4, var0);
                        var0 = var2.bind(var1)(var0);
                    case 218:
                        var0 = undefined;
                        return var0;
                }
            };
            var1.onload = var2;
            var1.onerror = var0;
            var1.onabort = var0;
            var1.ontimeout = var0;
            var0 = var1.send;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getFileContentLength = var3;
    var3 = function arg0() {
        _fun37020: for (var _fun37020_ip = 0;;) switch (_fun37020_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.uri;
                var8 = var1.i;
                var14 = var1.overrideFilename;
                var _closure2_slot0 = var14;
                var1 = var1.overrideType;
                var3 = var6.split;
                var2 = '/';
                var3 = var3.bind(var6)(var2);
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var4 = var3[var2];
                var _closure2_slot1 = var4;
                var3 = var4.split;
                var2 = '?';
                var4 = var3.bind(var4)(var2);
                var3 = null;
                var2 = var3 == var4;
                var7 = undefined;
                if (var2) {
                    _fun37020_ip = 115;
                    continue _fun37020
                }
            case 90:
                var2 = 0;
                var4 = var4[var2];
                var2 = var3 == var4;
                var7 = undefined;
                if (var2) {
                    _fun37020_ip = 115;
                    continue _fun37020
                }
            case 105:
                var2 = var4.toLowerCase;
                var7 = var2.bind(var4)();
            case 115:
                var9 = var3 != var7;
                var4 = '';
                var2 = var4;
                if (!var9) {
                    _fun37020_ip = 132;
                    continue _fun37020
                }
            case 129:
                var2 = var7;
            case 132:
                _closure2_slot1 = var2;
                var10 = _closure1_slot3;
                var9 = var10.find;
                var7 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.reName;
                    var1 = var2.test;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var10)(var7);
                var9 = var3 == var7;
                if (!var9) {
                    _fun37020_ip = 169;
                    continue _fun37020
                }
            case 165:
                var9 = var3 != var14;
            case 169:
                if (!var9) {
                    _fun37020_ip = 191;
                    continue _fun37020
                }
            case 172:
                var9 = _closure1_slot3;
                var2 = var9.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.reName;
                    var1 = var2.test;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var2.bind(var9)(var0);
            case 191:
                if (!(var3 != var7)) {
                    _fun37020_ip = 199;
                    continue _fun37020
                }
            case 195:
                if (!(var3 == var14)) {
                    _fun37020_ip = 231;
                    continue _fun37020
                }
            case 199:
                if (!(var3 == var7)) {
                    _fun37020_ip = 219;
                    continue _fun37020
                }
            case 203:
                var0 = var3 != var14;
                var2 = 'unknown';
                if (!var0) {
                    _fun37020_ip = 217;
                    continue _fun37020
                }
            case 214:
                var2 = var14;
            case 217:
                _fun37020_ip = 229;
                continue _fun37020;
            case 219:
                var0 = var7.name;
                var2 = var0.bind(var7)(var8);
            case 229:
                _fun37020_ip = 345;
                continue _fun37020;
            case 231:
                var0 = var7.name;
                var9 = var0.bind(var7)(var8);
                var0 = var9.split;
                var12 = '.';
                var9 = var0.bind(var9)(var12);
                var0 = var9.pop;
                var11 = var0.bind(var9)();
                var0 = var14.lastIndexOf;
                var13 = var0.bind(var14)(var12);
                var0 = -1;
                if (!(var0 === var13)) {
                    _fun37020_ip = 308;
                    continue _fun37020
                }
            case 286:
                var0 = global;
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var4)(var14, var12, var11);
                _fun37020_ip = 342;
                continue _fun37020;
            case 308:
                var10 = var14.substr;
                var9 = 0;
                var10 = var10.bind(var14)(var9, var13);
                var9 = global;
                var9 = var9.HermesInternal;
                var9 = var9.concat;
                var0 = var9.bind(var4)(var10, var12, var11);
            case 342:
                var2 = var0;
            case 345:
                var0 = {};
                var0.uri = var6;
                var0.filename = var2;
                var6 = var1;
                if (!(var3 == var1)) {
                    _fun37020_ip = 380;
                    continue _fun37020
                }
            case 363:
                var9 = var3 == var7;
                var2 = undefined;
                if (var9) {
                    _fun37020_ip = 377;
                    continue _fun37020
                }
            case 372:
                var2 = var7.type;
            case 377:
                var6 = var2;
            case 380:
                var9 = var3 != var6;
                var2 = 'unknown';
                if (!var9) {
                    _fun37020_ip = 394;
                    continue _fun37020
                }
            case 391:
                var2 = var6;
            case 394:
                var0.type = var2;
                var2 = var1;
                if (!(var3 == var1)) {
                    _fun37020_ip = 427;
                    continue _fun37020
                }
            case 405:
                var9 = var3 == var7;
                var6 = undefined;
                if (var9) {
                    _fun37020_ip = 424;
                    continue _fun37020
                }
            case 414:
                var9 = var7.name;
                var6 = var9.bind(var7)(var8);
            case 424:
                var2 = var6;
            case 427:
                var6 = var3 != var2;
                var9 = var4;
                if (!var6) {
                    _fun37020_ip = 440;
                    continue _fun37020
                }
            case 437:
                var9 = var2;
            case 440:
                var6 = var9.indexOf;
                var2 = 'video';
                var6 = var6.bind(var9)(var2);
                var2 = -1;
                var6 = var2 !== var6;
                var0.isVideo = var6;
                if (!(var3 == var1)) {
                    _fun37020_ip = 496;
                    continue _fun37020
                }
            case 474:
                var6 = var3 == var7;
                var5 = undefined;
                if (var6) {
                    _fun37020_ip = 493;
                    continue _fun37020
                }
            case 483:
                var6 = var7.name;
                var5 = var6.bind(var7)(var8);
            case 493:
                var1 = var5;
            case 496:
                var3 = var3 != var1;
                if (!var3) {
                    _fun37020_ip = 506;
                    continue _fun37020
                }
            case 503:
                var4 = var1;
            case 506:
                var3 = var4.indexOf;
                var1 = 'image';
                var1 = var3.bind(var4)(var1);
                var1 = var2 !== var1;
                var0.isImage = var1;
                return var0;
        }
    };
    var2.getFile = var3;
    var1 = function arg0() {
        _fun37023: for (var _fun37023_ip = 0;;) switch (_fun37023_ip) {
            case 0:
                var3 = arguments[1];
                var6 = arguments[2];
                var5 = arguments[3];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun37023_ip = 21;
                    continue _fun37023
                }
            case 15:
                var3 = 4096;
            case 21:
                if (!(var6 === var0)) {
                    _fun37023_ip = 31;
                    continue _fun37023
                }
            case 25:
                var6 = 8388608;
            case 31:
                if (!(var5 === var0)) {
                    _fun37023_ip = 45;
                    continue _fun37023
                }
            case 35:
                var5 = 0.01;
            case 45:
                var0 = global;
                var4 = var0.Math;
                var2 = var4.ceil;
                var1 = arg0;
                var1 = var1 * var5;
                var5 = var2.bind(var4)(var1);
                var2 = var0.Math;
                var1 = var2.max;
                var4 = var0.Math;
                var0 = var4.min;
                var0 = var0.bind(var4)(var5, var6);
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.getOptimalChunkSize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1346, 4008, 4006, 2]);