// modules/media_keyboard/native/MediaKeyboardUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var13;
    var0 = function arg0, arg1() {
        _fun75322: for (var _fun75322_ip = 0;;) switch (_fun75322_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun75322_ip = 46;
                    continue _fun75322
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun75322_ip = 55;
                    continue _fun75322
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun75322_ip = 345;
                    continue _fun75322
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun75322_ip = 323;
                    continue _fun75322
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun75322_ip = 283;
                    continue _fun75322
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun75322_ip = 270;
                    continue _fun75322
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun75322_ip = 163;
                    continue _fun75322
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun75322_ip = 179;
                    continue _fun75322
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun75322_ip = 249;
                    continue _fun75322
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun75322_ip = 249;
                    continue _fun75322
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun75322_ip = 234;
                    continue _fun75322
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun75322_ip = 247;
                    continue _fun75322
                }
            case 234:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun75322_ip = 265;
                continue _fun75322;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun75322_ip = 283;
                continue _fun75322;
            case 270:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun75322_ip = 323;
                    continue _fun75322
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun75322_ip = 330;
                    continue _fun75322
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun75323: for (var _fun75323_ip = 0;;) switch (_fun75323_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun75323_ip = 56;
                                continue _fun75323
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun75323_ip = 67;
                            continue _fun75323;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun75324: for (var _fun75324_ip = 0;;) switch (_fun75324_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun75324_ip = 23;
                    continue _fun75324
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun75324_ip = 33;
                    continue _fun75324
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun75324_ip = 70;
                    continue _fun75324
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun75324_ip = 55;
                    continue _fun75324
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var10 = function arg0, arg1, arg2() {
        _fun75325: for (var _fun75325_ip = 0;;) switch (_fun75325_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var3;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var2 = var2.UploadOrigin;
                var2 = var2.FILE_ATTACHMENT;
                if (!(var3 === var2)) {
                    _fun75325_ip = 119;
                    continue _fun75325
                }
            case 60:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var7 = var3.bind(var0)(var2);
                var3 = var7.addFiles;
                var2 = {};
                var2.files = var6;
                var2.channelId = var5;
                var8 = _closure1_slot7;
                var8 = var8.ChannelMessage;
                var2.draftType = var8;
                var2 = var3.bind(var7)(var2);
                _fun75325_ip = 210;
                continue _fun75325;
            case 119:
                var3 = var6.filter;
                var2 = function(arg0) { // Environment: var1
                    _fun75326: for (var _fun75326_ip = 0;;) switch (_fun75326_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun75326_ip = 34;
                                continue _fun75326
                            }
                        case 25:
                            var5 = var3.uri;
                            var0 = var2 != var5;
                        case 34:
                            if (!var0) {
                                _fun75326_ip = 50;
                                continue _fun75326
                            }
                        case 37:
                            var5 = var3.uri;
                            var3 = '';
                            var0 = var3 !== var5;
                        case 50:
                            if (!var0) {
                                _fun75326_ip = 98;
                                continue _fun75326
                            }
                        case 53:
                            var6 = _closure1_slot9;
                            var5 = var6.findUpload;
                            var4 = _closure2_slot0;
                            var3 = _closure1_slot7;
                            var3 = var3.ChannelMessage;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.doesImageMatchUpload;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var0 = var2 == var1;
                        case 98:
                            return var0;
                    }
                };
                var3 = var3.bind(var6)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = {};
                    var3 = arg0;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot1;
                    var1 = 'origin';
                    var0[var1] = var2;
                    return var0;
                };
                var6 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.addFiles;
                var1 = {};
                var1.files = var6;
                var1.channelId = var5;
                var4 = _closure1_slot7;
                var4 = var4.ChannelMessage;
                var1.draftType = var4;
                var1 = var2.bind(var3)(var1);
            case 210:
                return var0;
        }
    };
    var _closure1_slot24 = var10;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var2 = var0.previewType;
        var _closure2_slot1 = var2;
        var2 = var0.onDismissKeyboard;
        var _closure2_slot2 = var2;
        var2 = var0.onRestoreKeyboard;
        var _closure2_slot3 = var2;
        var0 = var0.onSelectFiles;
        var _closure2_slot4 = var0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 14;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.requestPermission;
        var2 = _closure1_slot20;
        var2 = var2.CAMERA;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            _fun75330: for (var _fun75330_ip = 0;;) switch (_fun75330_ip) {
                case 0:
                    var0 = arg0;
                    if (!var0) {
                        _fun75330_ip = 199;
                        continue _fun75330
                    }
                case 9:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var1 = var7[var1];
                    var6 = undefined;
                    var8 = var2.bind(var6)(var1);
                    var5 = var8.track;
                    var1 = _closure1_slot12;
                    var4 = var1.CHAT_INPUT_COMPONENT_VIEWED;
                    var3 = {};
                    var1 = _closure1_slot17;
                    var1 = var1.CAMERA;
                    var3.type = var1;
                    var9 = _closure2_slot0;
                    var10 = var9.id;
                    var3.channel_id = var10;
                    var9 = var9.guild_id;
                    var3.guild_id = var9;
                    var3 = var5.bind(var8)(var4, var3);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var6)();
                    var1 = 16;
                    var1 = var7[var1];
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.launchCamera;
                    var1 = {
                        'mediaType': 'mixed',
                        'includeBase64': false,
                        'quality': null,
                        'videoQuality': 'high',
                        'saveToPhotos': null,
                        'skipProcessing': true
                    };
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getImageCompressionQuality;
                    var4 = var4.bind(var5)();
                    var1.quality = var4;
                    var0 = _closure1_slot5;
                    var0 = var0.saveCameraUploadsToDevice;
                    var1.saveToPhotos = var0;
                    var0 = function(arg0) { // Environment: var0
                        _fun75331: for (var _fun75331_ip = 0;;) switch (_fun75331_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.didCancel;
                                if (var1) {
                                    _fun75331_ip = 559;
                                    continue _fun75331
                                }
                            case 15:
                                var1 = var0.errorCode;
                                var4 = null;
                                var2 = var4 == var1;
                                var1 = undefined;
                                if (!var2) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 35:
                                var2 = var0.assets;
                                var2 = var4 != var2;
                                if (!var2) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 51:
                                var2 = var0.assets;
                                var3 = var2.length;
                                var2 = 0;
                                var3 = var3 > var2;
                                if (!var3) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 74:
                                var0 = var0.assets;
                                var2 = var0[var2];
                                if (!(var4 != var2)) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 91:
                                var0 = var2.uri;
                                if (!(var4 != var0)) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 103:
                                var0 = var2.height;
                                if (!(var4 != var0)) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 115:
                                var0 = var2.width;
                                if (!(var4 != var0)) {
                                    _fun75331_ip = 572;
                                    continue _fun75331
                                }
                            case 127:
                                var0 = var2.type;
                                if (!(var4 == var0)) {
                                    _fun75331_ip = 254;
                                    continue _fun75331
                                }
                            case 136:
                                var6 = var2.fileName;
                                var3 = var4 == var6;
                                var9 = undefined;
                                if (var3) {
                                    _fun75331_ip = 175;
                                    continue _fun75331
                                }
                            case 151:
                                var5 = var6.split;
                                var3 = '.';
                                var5 = var5.bind(var6)(var3);
                                var3 = var5.pop;
                                var9 = var3.bind(var5)();
                            case 175:
                                var5 = var4 != var9;
                                var6 = 'image/jpeg';
                                var3 = var6;
                                if (!var5) {
                                    _fun75331_ip = 251;
                                    continue _fun75331
                                }
                            case 191:
                                var5 = var2.fileType;
                                var5 = var4 != var5;
                                var3 = var6;
                                if (!var5) {
                                    _fun75331_ip = 251;
                                    continue _fun75331
                                }
                            case 207:
                                var8 = var2.fileType;
                                var5 = global;
                                var5 = var5.HermesInternal;
                                var7 = var5.concat;
                                var6 = '';
                                var5 = '/';
                                var6 = var7.bind(var6)(var8, var5, var9);
                                var5 = var6.toLowerCase;
                                var3 = var5.bind(var6)();
                            case 251:
                                var0 = var3;
                            case 254:
                                var5 = {};
                                var3 = var2.id;
                                var5.id = var3;
                                var3 = var2.uri;
                                var5.uri = var3;
                                var3 = var2.uri;
                                var5.originalUri = var3;
                                var3 = var2.width;
                                var5.width = var3;
                                var3 = var2.height;
                                var5.height = var3;
                                var3 = var2.fileName;
                                if (!(var4 != var3)) {
                                    _fun75331_ip = 326;
                                    continue _fun75331
                                }
                            case 312:
                                var6 = var2.fileName;
                                var3 = '';
                                if (!(var3 === var6)) {
                                    _fun75331_ip = 389;
                                    continue _fun75331
                                }
                            case 326:
                                var6 = var0.split;
                                var3 = '/';
                                var6 = var6.bind(var0)(var3);
                                var3 = 1;
                                var3 = var6[var3];
                                var4 = var4 != var3;
                                var6 = 'jpeg';
                                if (!var4) {
                                    _fun75331_ip = 363;
                                    continue _fun75331
                                }
                            case 360:
                                var6 = var3;
                            case 363:
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var4 = var3.concat;
                                var3 = 'camera_upload.';
                                var3 = var4.bind(var3)(var6);
                                _fun75331_ip = 395;
                                continue _fun75331;
                            case 389:
                                var3 = var2.fileName;
                            case 395:
                                var5.filename = var3;
                                var2 = var2.duration;
                                var5.playableDuration = var2;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 10;
                                var2 = var4[var2];
                                var2 = var3.bind(var1)(var2);
                                var2 = var2.UploadPlatform;
                                var2 = var2.REACT_NATIVE;
                                var5.platform = var2;
                                var2 = true;
                                var5.createdUsingInAppCamera = var2;
                                var5.mimeType = var0;
                                var3 = _closure2_slot4;
                                var2 = new Array(1);
                                var2[0] = var5;
                                var2 = var3.bind(var1)(var2);
                                var3 = _closure1_slot1;
                                var2 = 15;
                                var2 = var4[var2];
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot12;
                                var3 = var2.IN_APP_CAMERA_USED;
                                var2 = {};
                                var6 = _closure1_slot11;
                                var6 = var6.FULLY_EXPANDED;
                                var2.camera_view = var6;
                                var6 = _closure2_slot1;
                                var2.camera_preview_type = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                var0 = _closure2_slot3;
                                var0 = var0.bind(var1)();
                                _fun75331_ip = 572;
                                continue _fun75331;
                            case 559:
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 572:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 199:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot25 = var9;
    var8 = function arg0() {
        _fun75332: for (var _fun75332_ip = 0;;) switch (_fun75332_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var2 = var0.draftType;
                var _closure2_slot1 = var2;
                var2 = var0.uploadLimit;
                var _closure2_slot2 = var2;
                var2 = var0.includedUploadIds;
                var _closure2_slot3 = var2;
                var2 = var0.onDismissKeyboard;
                var _closure2_slot4 = var2;
                var2 = var0.onRestoreKeyboard;
                var _closure2_slot5 = var2;
                var0 = var0.onSelectFiles;
                var _closure2_slot6 = var0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun75332_ip = 146;
                    continue _fun75332
                }
            case 112:
                var2 = global;
                var6 = var2.parseInt;
                var4 = _closure1_slot4;
                var5 = var4.Version;
                var4 = 10;
                var5 = var6.bind(var0)(var5, var4);
                var4 = 14;
                if (!(!(var5 >= var4))) {
                    _fun75332_ip = 189;
                    continue _fun75332
                }
            case 146:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 14;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.requestPermission;
                var3 = _closure1_slot20;
                var3 = var3.PHOTOS;
                var3 = var4.bind(var5)(var3);
                _fun75332_ip = 208;
                continue _fun75332;
            case 189:
                var5 = var2.Promise;
                var4 = var5.resolve;
                var2 = true;
                var3 = var4.bind(var5)(var2);
            case 208:
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun75333: for (var _fun75333_ip = 0;;) switch (_fun75333_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun75333_ip = 377;
                                continue _fun75333
                            }
                        case 11:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var4 = undefined;
                            var8 = var3.bind(var4)(var2);
                            var7 = var8.track;
                            var2 = _closure1_slot12;
                            var6 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                            var3 = {};
                            var2 = _closure1_slot17;
                            var2 = var2.NATIVE_MEDIA_PICKER;
                            var3.type = var2;
                            var2 = _closure2_slot0;
                            var9 = var2.id;
                            var3.channel_id = var9;
                            var9 = var2.guild_id;
                            var3.guild_id = var9;
                            var3 = var7.bind(var8)(var6, var3);
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)();
                            var7 = _closure1_slot9;
                            var6 = var7.getUploads;
                            var3 = var2.id;
                            var2 = _closure2_slot1;
                            var7 = var6.bind(var7)(var3, var2);
                            var _closure3_slot0 = var7;
                            var3 = _closure2_slot3;
                            var2 = null;
                            var6 = var7;
                            if (!(var2 != var3)) {
                                _fun75333_ip = 172;
                                continue _fun75333
                            }
                        case 148:
                            var3 = var7.filter;
                            var2 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot3;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var7)(var2);
                            _closure3_slot0 = var2;
                            var6 = var2;
                        case 172:
                            var3 = {
                                'mediaType': 'any',
                                'includeBase64': false
                            };
                            var7 = _closure2_slot2;
                            var2 = 1;
                            var7 = var7 > var2;
                            if (!var7) {
                                _fun75333_ip = 270;
                                continue _fun75333
                            }
                        case 200:
                            var7 = _closure2_slot2;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 18;
                            var5 = var9[var5];
                            var8 = var8.bind(var4)(var5);
                            var5 = var8.isIOS;
                            var5 = var5.bind(var8)();
                            if (var5) {
                                _fun75333_ip = 244;
                                continue _fun75333
                            }
                        case 237:
                            var5 = var6.length;
                            _fun75333_ip = 266;
                            continue _fun75333;
                        case 244:
                            var9 = var6.filter;
                            var8 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.origin;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.UploadOrigin;
                                var0 = var0.IMAGE_PICKER;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var8 = var9.bind(var6)(var8);
                            var5 = var8.length;
                        case 266:
                            var2 = var7 - var5;
                        case 270:
                            var3.selectionLimit = var2;
                            var5 = var6.map;
                            var2 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var2 = var5.bind(var6)(var2);
                            var3.selections = var2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 18;
                            var2 = var5[var2];
                            var6 = var6.bind(var4)(var2);
                            var2 = var6.isIOS;
                            var2 = var2.bind(var6)();
                            var2 = !var2;
                            var3.includeExtra = var2;
                            var2 = true;
                            var3.skipProcessing = var2;
                            var2 = _closure1_slot1;
                            var1 = 16;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.launchImageLibrary;
                            var0 = function(arg0) { // Environment: var0
                                _fun75337: for (var _fun75337_ip = 0;;) switch (_fun75337_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var4 = _closure2_slot5;
                                        var0 = undefined;
                                        var4 = var4.bind(var0)();
                                        var4 = var3.didCancel;
                                        if (var4) {
                                            _fun75337_ip = 347;
                                            continue _fun75337
                                        }
                                    case 34:
                                        var4 = var3.errorCode;
                                        var9 = null;
                                        if (!(var9 == var4)) {
                                            _fun75337_ip = 347;
                                            continue _fun75337
                                        }
                                    case 49:
                                        var4 = _closure3_slot0;
                                        var6 = var4.length;
                                        var4 = 0;
                                        if (!(var4 === var6)) {
                                            _fun75337_ip = 98;
                                            continue _fun75337
                                        }
                                    case 67:
                                        var6 = var3.assets;
                                        if (!(var9 != var6)) {
                                            _fun75337_ip = 347;
                                            continue _fun75337
                                        }
                                    case 80:
                                        var6 = var3.assets;
                                        var6 = var6.length;
                                        if (!(var4 !== var6)) {
                                            _fun75337_ip = 347;
                                            continue _fun75337
                                        }
                                    case 98:
                                        var6 = var3.replaceSelection;
                                        if (!var6) {
                                            _fun75337_ip = 130;
                                            continue _fun75337
                                        }
                                    case 109:
                                        var6 = _closure3_slot0;
                                        var5 = var6.forEach;
                                        var2 = function(arg0) { // Environment: var2
                                            _fun75338: for (var _fun75338_ip = 0;;) switch (_fun75338_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var _closure5_slot0 = var2;
                                                    var4 = var2.origin;
                                                    var6 = _closure1_slot0;
                                                    var3 = _closure1_slot2;
                                                    var0 = 10;
                                                    var3 = var3[var0];
                                                    var0 = undefined;
                                                    var3 = var6.bind(var0)(var3);
                                                    var3 = var3.UploadOrigin;
                                                    var3 = var3.IMAGE_PICKER;
                                                    var3 = var4 !== var3;
                                                    if (var3) {
                                                        _fun75338_ip = 102;
                                                        continue _fun75338
                                                    }
                                                case 59:
                                                    var4 = _closure4_slot0;
                                                    var7 = var4.assets;
                                                    var4 = null;
                                                    var4 = var4 != var7;
                                                    if (!var4) {
                                                        _fun75338_ip = 99;
                                                        continue _fun75338
                                                    }
                                                case 81:
                                                    var6 = var7.some;
                                                    var5 = function(arg0) { // Environment: var5
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot2;
                                                        var0 = 12;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var3 = var2.bind(var0)(var1);
                                                        var2 = var3.doesImageMatchUpload;
                                                        var1 = _closure5_slot0;
                                                        var0 = arg0;
                                                        var0 = var2.bind(var3)(var0, var1);
                                                        return var0;
                                                    };
                                                    var4 = var6.bind(var7)(var5);
                                                case 99:
                                                    var3 = var4;
                                                case 102:
                                                    if (var3) {
                                                        _fun75338_ip = 165;
                                                        continue _fun75338
                                                    }
                                                case 105:
                                                    var4 = _closure1_slot1;
                                                    var5 = _closure1_slot2;
                                                    var3 = 11;
                                                    var3 = var5[var3];
                                                    var5 = var4.bind(var0)(var3);
                                                    var4 = var5.remove;
                                                    var3 = _closure2_slot0;
                                                    var3 = var3.id;
                                                    var2 = var2.id;
                                                    var1 = _closure1_slot7;
                                                    var1 = var1.ChannelMessage;
                                                    var1 = var4.bind(var5)(var3, var2, var1);
                                                case 165:
                                                    return var0;
                                            }
                                        };
                                        var2 = var5.bind(var6)(var2);
                                    case 130:
                                        var2 = new Array(0);
                                        var5 = _closure1_slot22;
                                        var3 = var3.assets;
                                        var7 = var5.bind(var0)(var3);
                                        var5 = var7.bind(var0)();
                                        var3 = var5.done;
                                        var6 = 10;
                                        if (var3) {
                                            _fun75337_ip = 329;
                                            continue _fun75337
                                        }
                                    case 170:
                                        var11 = var5.value;
                                        var3 = var11.uri;
                                        if (!(var9 != var3)) {
                                            _fun75337_ip = 311;
                                            continue _fun75337
                                        }
                                    case 187:
                                        var10 = var2.push;
                                        var3 = {};
                                        var12 = var11.id;
                                        var3.id = var12;
                                        var12 = var11.uri;
                                        var3.uri = var12;
                                        var12 = var11.uri;
                                        var3.originalUri = var12;
                                        var12 = var11.mimeType;
                                        var3.mimeType = var12;
                                        var12 = var11.width;
                                        var3.width = var12;
                                        var12 = var11.height;
                                        var3.height = var12;
                                        var12 = var11.fileName;
                                        var3.filename = var12;
                                        var11 = var11.duration;
                                        var3.playableDuration = var11;
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var11 = var11[var6];
                                        var11 = var12.bind(var0)(var11);
                                        var11 = var11.UploadPlatform;
                                        var11 = var11.REACT_NATIVE;
                                        var3.platform = var11;
                                        var3 = var10.bind(var2)(var3);
                                    case 311:
                                        var10 = var7.bind(var0)();
                                        var3 = var10.done;
                                        var5 = var10;
                                        if (!var3) {
                                            _fun75337_ip = 170;
                                            continue _fun75337
                                        }
                                    case 329:
                                        var3 = var2.length;
                                        if (!(var3 > var4)) {
                                            _fun75337_ip = 347;
                                            continue _fun75337
                                        }
                                    case 338:
                                        var1 = _closure2_slot6;
                                        var1 = var1.bind(var0)(var2);
                                    case 347:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var3, var0);
                        case 377:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot26 = var8;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var7;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75343: for (var _fun75343_ip = 0;;) switch (_fun75343_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75343_ip = 300;
                            continue _fun75343
                        }
                    case 15:
                        var13 = var1.channel;
                        var _closure4_slot0 = var13;
                        var10 = var1.uploadLimit;
                        var2 = var1.onDismissKeyboard;
                        var6 = var1.onRestoreKeyboard;
                        var5 = var1.onSelectFiles;
                        var3 = undefined;
                        SaveGenerator(address = 54);
                    case 52:
                        return var3;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun75343_ip = 297;
                            continue _fun75343
                        }
                    case 63:
                        var2 = var2.bind(var3)();
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var7 = 15;
                        var7 = var8[var7];
                        var12 = var9.bind(var3)(var7);
                        var11 = var12.track;
                        var7 = _closure1_slot12;
                        var9 = var7.CHAT_INPUT_COMPONENT_VIEWED;
                        var7 = {};
                        var14 = _closure1_slot17;
                        var14 = var14.ATTACH_FILE;
                        var7.type = var14;
                        var14 = var13.id;
                        var7.channel_id = var14;
                        var13 = var13.guild_id;
                        var7.guild_id = var13;
                        var7 = var11.bind(var12)(var9, var7);
                        var7 = _closure1_slot0;
                        var2 = 22;
                        var2 = var8[var2];
                        var9 = var7.bind(var3)(var2);
                        var8 = var9.handleDocumentSelection;
                        var2 = {};
                        var7 = 1;
                        var10 = var10 > var7;
                        var2.pickMultiple = var10;
                        var2 = var8.bind(var9)(var2);
                        SaveGenerator(address = 190);
                    case 188:
                        return var2;
                    case 190:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun75343_ip = 294;
                            continue _fun75343
                        }
                    case 196:
                        var6 = var6.bind(var3)();
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun75343_ip = 291;
                            continue _fun75343
                        }
                    case 206:
                        var6 = var2.length;
                        if (!(!(var6 < var7))) {
                            _fun75343_ip = 291;
                            continue _fun75343
                        }
                    case 215:
                        var8 = global;
                        var7 = var8.Promise;
                        var6 = var7.all;
                        var9 = var8.Array;
                        var8 = var9.from;
                        var9 = var8.bind(var9)(var2);
                        var8 = var9.map;
                        var4 = function() { // Environment: var4
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun75346: for (var _fun75346_ip = 0;;) switch (_fun75346_ip) {
                                        case 0:
                                            StartGenerator();
                                            var8 = arg0;
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun75346_ip = 314;
                                                continue _fun75346
                                            }
                                        case 13:
                                            var12 = var8.uri;
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 17;
                                            var1 = var3[var1];
                                            var7 = undefined;
                                            var3 = var2.bind(var7)(var1);
                                            var2 = var3.getImageDimensionsIfMissing;
                                            var4 = var8.name;
                                            var6 = null;
                                            var9 = var6 != var4;
                                            var1 = undefined;
                                            if (!var9) {
                                                _fun75346_ip = 68;
                                                continue _fun75346
                                            }
                                        case 65:
                                            var1 = var4;
                                        case 68:
                                            var17 = var3;
                                            var16 = var12;
                                            var15 = undefined;
                                            var14 = undefined;
                                            var13 = var1;
                                            var1 = var17[var2](var16, var15, var14, var13, var12);
                                            SaveGenerator(address = 89);
                                        case 87:
                                            return var1;
                                        case 89:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun75346_ip = 311;
                                                continue _fun75346
                                            }
                                        case 98:
                                            var4 = var1.width;
                                            var3 = var1.height;
                                            var2 = {};
                                            var10 = _closure1_slot1;
                                            var11 = _closure1_slot2;
                                            var9 = 23;
                                            var9 = var11[var9];
                                            var10 = var10.bind(var7)(var9);
                                            var9 = var10.uniqueId;
                                            var9 = var9.bind(var10)(var12);
                                            var2.id = var9;
                                            var2.uri = var12;
                                            var2.originalUri = var12;
                                            var9 = var8.name;
                                            if (!(var6 == var9)) {
                                                _fun75346_ip = 194;
                                                continue _fun75346
                                            }
                                        case 163:
                                            var11 = var12.split;
                                            var10 = '/';
                                            var12 = var11.bind(var12)(var10);
                                            var11 = var12.at;
                                            var10 = -1;
                                            var9 = var11.bind(var12)(var10);
                                        case 194:
                                            var2.filename = var9;
                                            var8 = var8.type;
                                            var9 = var6 != var8;
                                            var6 = undefined;
                                            if (!var9) {
                                                _fun75346_ip = 216;
                                                continue _fun75346
                                            }
                                        case 213:
                                            var6 = var8;
                                        case 216:
                                            var2.mimeType = var6;
                                            var6 = _closure4_slot0;
                                            var6 = var6.id;
                                            var2.channelId = var6;
                                            var6 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var5 = 10;
                                            var9 = var8[var5];
                                            var9 = var6.bind(var7)(var9);
                                            var9 = var9.UploadPlatform;
                                            var9 = var9.REACT_NATIVE;
                                            var2.platform = var9;
                                            var5 = var8[var5];
                                            var5 = var6.bind(var7)(var5);
                                            var5 = var5.UploadOrigin;
                                            var5 = var5.FILE_ATTACHMENT;
                                            var2.origin = var5;
                                            var2.width = var4;
                                            var2.height = var3;
                                            return var2;
                                        case 311:
                                            return var1;
                                        case 314:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var4 = var4.bind(var3)();
                        var4 = var8.bind(var9)(var4);
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 275);
                    case 273:
                        return var4;
                    case 275:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun75343_ip = 288;
                            continue _fun75343
                        }
                    case 281:
                        var5 = var5.bind(var3)(var4);
                        _fun75343_ip = 291;
                        continue _fun75343;
                    case 288:
                        return var4;
                    case 291:
                        return var3;
                    case 294:
                        return var2;
                    case 297:
                        return var1;
                    case 300:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var6 = function arg0, arg1() {
        _fun75348: for (var _fun75348_ip = 0;;) switch (_fun75348_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = var1.node;
                var7 = var0.image;
                var0 = {};
                var1 = var1.node;
                var2 = var1.id;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun75348_ip = 42;
                    continue _fun75348
                }
            case 37:
                var2 = var7.uri;
            case 42:
                var0.id = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var8 = var6[var2];
                var4 = undefined;
                var8 = var5.bind(var4)(var8);
                var8 = var8.UploadOrigin;
                var8 = var8.IMAGE_PICKER;
                var0.origin = var8;
                var8 = var7.uri;
                var0.uri = var8;
                var8 = var7.uri;
                var0.originalUri = var8;
                var8 = var7.mimeType;
                var0.mimeType = var8;
                var8 = var7.width;
                var0.width = var8;
                var8 = var7.height;
                var0.height = var8;
                var8 = var7.filename;
                var0.filename = var8;
                var7 = var7.playableDuration;
                var0.playableDuration = var7;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.UploadPlatform;
                var2 = var2.REACT_NATIVE;
                var0.platform = var2;
                var1 = var1 != var3;
                if (!var1) {
                    _fun75348_ip = 201;
                    continue _fun75348
                }
            case 191:
                var2 = {};
                var2.createdUsingInAppCamera = var3;
                var1 = var2;
            case 201:
                var10 = var0;
                var9 = var1;
                var1 = copyDataProperties(var10, var9);
                return var0;
        }
    };
    var _closure1_slot29 = var6;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun75349: for (var _fun75349_ip = 0;;) switch (_fun75349_ip) {
            case 0:
                var4 = arg0;
                var9 = arg1;
                var0 = var9.node;
                var0 = var0.image;
                var _closure2_slot0 = var0;
                var2 = arg2;
                if (var2) {
                    _fun75349_ip = 107;
                    continue _fun75349
                }
            case 33:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var8 = undefined;
                var5 = var3.bind(var8)(var2);
                var3 = var5.addFile;
                var2 = {};
                var2.channelId = var4;
                var7 = _closure1_slot29;
                var6 = arg3;
                var6 = var7.bind(var8)(var9, var6);
                var2.file = var6;
                var6 = _closure1_slot7;
                var6 = var6.ChannelMessage;
                var2.draftType = var6;
                var2 = var3.bind(var5)(var2);
                _fun75349_ip = 197;
                continue _fun75349;
            case 107:
                var5 = _closure1_slot9;
                var3 = var5.findUpload;
                var2 = _closure1_slot7;
                var2 = var2.ChannelMessage;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.doesImageMatchUpload;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var5)(var4, var2, var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun75349_ip = 197;
                    continue _fun75349
                }
            case 147:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.remove;
                var1 = var1.id;
                var0 = _closure1_slot7;
                var0 = var0.ChannelMessage;
                var0 = var2.bind(var3)(var4, var1, var0);
            case 197:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var4;
    var1 = function arg0() {
        _fun75351: for (var _fun75351_ip = 0;;) switch (_fun75351_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.CHAT;
                if (!(var1 !== var2)) {
                    _fun75351_ip = 102;
                    continue _fun75351
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.COMMAND;
                if (!(var1 !== var2)) {
                    _fun75351_ip = 90;
                    continue _fun75351
                }
            case 34:
                var1 = _closure1_slot10;
                var1 = var1.APP_LAUNCHER;
                if (!(var1 !== var2)) {
                    _fun75351_ip = 78;
                    continue _fun75351
                }
            case 48:
                var1 = _closure1_slot10;
                var1 = var1.INTERACTION_MODAL;
                if (!(var1 !== var2)) {
                    _fun75351_ip = 66;
                    continue _fun75351
                }
            case 62:
                var1 = undefined;
                return var1;
            case 66:
                var1 = _closure1_slot7;
                var1 = var1.InteractionModal;
                return var1;
            case 78:
                var1 = _closure1_slot7;
                var1 = var1.ApplicationLauncherCommand;
                return var1;
            case 90:
                var1 = _closure1_slot7;
                var1 = var1.SlashCommand;
                return var1;
            case 102:
                var0 = _closure1_slot7;
                var0 = var0.ChannelMessage;
                return var0;
        }
    };
    var _closure1_slot31 = var1;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var3);
    var0 = 0;
    var3 = var13[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var3 = var3.Platform;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var13[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var11 = var3.MediaKeyboardTarget;
    var _closure1_slot10 = var11;
    var3 = var3.InAppCameraUsedViews;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var11 = var3.AnalyticEvents;
    var _closure1_slot12 = var11;
    var11 = var3.AnalyticsObjects;
    var _closure1_slot13 = var11;
    var11 = var3.AnalyticsObjectTypes;
    var _closure1_slot14 = var11;
    var11 = var3.AnalyticsPages;
    var _closure1_slot15 = var11;
    var11 = var3.AnalyticsSections;
    var _closure1_slot16 = var11;
    var11 = var3.ChatInputComponentViewedTypes;
    var _closure1_slot17 = var11;
    var11 = var3.ComponentActions;
    var _closure1_slot18 = var11;
    var3 = var3.MAX_UPLOAD_COUNT;
    var _closure1_slot19 = var3;
    var3 = 9;
    var3 = var13[var3];
    var3 = var12.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot20 = var3;
    var3 = {};
    var11 = 'function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}';
    var3.code = var11;
    var _closure1_slot21 = var3;
    var3 = function() { // Environment: var5
        var0 = function arg0, arg1() {
            _fun75353: for (var _fun75353_ip = 0;;) switch (_fun75353_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var0 = var0.length;
                    var1 = 1;
                    if (!(var1 !== var0)) {
                        _fun75353_ip = 51;
                        continue _fun75353
                    }
                case 27:
                    var0 = var3.get;
                    var0 = var0.bind(var3)();
                    var0 = var0.length;
                    var0 = var0 - var1;
                    var0 = var2 * var0;
                    _fun75353_ip = 55;
                    continue _fun75353;
                case 51:
                    var0 = var2 - var1;
                case 55:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 97398083076.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot21;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var11 = 25;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/media_keyboard/native/MediaKeyboardUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.addImagesFromPicker = var10;
    var10 = function arg0, arg1, arg2, arg3, arg4() {
        _fun75354: for (var _fun75354_ip = 0;;) switch (_fun75354_ip) {
            case 0:
                var5 = arg0;
                var8 = arg2;
                var9 = arg3;
                var6 = var9.option;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getFile;
                var2 = {};
                var7 = var8.uri;
                var2.uri = var7;
                var7 = var8.filename;
                var2.overrideFilename = var7;
                var7 = var8.mimeType;
                var2.overrideType = var7;
                var2 = var3.bind(var4)(var2);
                var7 = var2.filename;
                var3 = var9.target;
                var2 = _closure1_slot10;
                var2 = var2.COMMAND;
                if (!(var3 === var2)) {
                    _fun75354_ip = 171;
                    continue _fun75354
                }
            case 110:
                var2 = arg1;
                var3 = var2.current;
                var2 = var3.getApplicationCommandManager;
                var10 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var10)) {
                    _fun75354_ip = 171;
                    continue _fun75354
                }
            case 134:
                var4 = var10.insertOrJumpCommandOption;
                var3 = {};
                var3.displayText = var7;
                var2 = true;
                var3.preferred = var2;
                var13 = false;
                var16 = var10;
                var15 = var6;
                var14 = undefined;
                var12 = var3;
                var2 = var16[var4](var15, var14, var13, var12, var11);
            case 171:
                var3 = _closure1_slot31;
                var2 = var9.target;
                var4 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var10 = var3[var1];
                var11 = var2.bind(var0)(var10);
                var10 = var11.remove;
                var9 = var9.option;
                var9 = var9.name;
                var9 = var10.bind(var11)(var5, var9, var4);
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.addFile;
                var1 = {};
                var1.channelId = var5;
                var5 = {};
                var15 = var5;
                var14 = var8;
                var8 = copyDataProperties(var15, var14);
                var9 = arg4;
                var8 = 'origin';
                var5[var8] = var9;
                var8 = var6.name;
                var6 = 'id';
                var5[var6] = var8;
                var6 = 'filename';
                var5[var6] = var7;
                var1.file = var5;
                var1.draftType = var4;
                var4 = false;
                var1.allowOptimization = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.addAttachmentForCommand = var10;
    var2.handleCameraDialog = var9;
    var2.handleViewAllDialog = var8;
    var8 = function(arg0, arg1) { // Environment: var5
        _fun75355: for (var _fun75355_ip = 0;;) switch (_fun75355_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = var2.getChannelId;
                var3 = var0.bind(var2)();
                var0 = arg1;
                var2 = var0.current;
                var0 = var2.closeCustomKeyboard;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot6;
                var0 = var2.getChannel;
                var7 = var0.bind(var2)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot18;
                var2 = var2.MEDIA_KEYBOARD_GIFT_SELECTED;
                var2 = var3.bind(var4)(var2);
                var4 = {};
                var2 = _closure1_slot16;
                var2 = var2.CHANNEL_TEXT_AREA;
                var4.section = var2;
                var2 = _closure1_slot13;
                var2 = var2.BUTTON_ICON;
                var4.object = var2;
                var2 = _closure1_slot14;
                var2 = var2.GIFT;
                var4.objectType = var2;
                var5 = null;
                var3 = var5 == var7;
                var2 = undefined;
                if (var3) {
                    _fun75355_ip = 159;
                    continue _fun75355
                }
            case 154:
                var2 = var7.guild_id;
            case 159:
                if (!(var5 == var2)) {
                    _fun75355_ip = 175;
                    continue _fun75355
                }
            case 163:
                var2 = _closure1_slot15;
                var2 = var2.DM_CHANNEL;
                _fun75355_ip = 185;
                continue _fun75355;
            case 175:
                var3 = _closure1_slot15;
                var2 = var3.GUILD_CHANNEL;
            case 185:
                var4.page = var2;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var8 = var3.bind(var0)(var2);
                var6 = var8.track;
                var2 = _closure1_slot12;
                var3 = var2.CHAT_INPUT_COMPONENT_VIEWED;
                var2 = {};
                var9 = _closure1_slot17;
                var9 = var9.NITRO_GIFTING;
                var2.type = var9;
                var10 = var5 == var7;
                var9 = undefined;
                if (var10) {
                    _fun75355_ip = 255;
                    continue _fun75355
                }
            case 250:
                var9 = var7.id;
            case 255:
                var2.channel_id = var9;
                var10 = var5 == var7;
                var9 = undefined;
                if (var10) {
                    _fun75355_ip = 273;
                    continue _fun75355
                }
            case 268:
                var9 = var7.guild_id;
            case 273:
                var2.guild_id = var9;
                var2 = var6.bind(var8)(var3, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openGiftModal;
                var1 = {};
                var6 = var5 != var7;
                var5 = undefined;
                if (!var6) {
                    _fun75355_ip = 345;
                    continue _fun75355
                }
            case 320:
                var6 = var7.isDM;
                var6 = var6.bind(var7)();
                var5 = undefined;
                if (!var6) {
                    _fun75355_ip = 345;
                    continue _fun75355
                }
            case 335:
                var6 = var7.getRecipientId;
                var5 = var6.bind(var7)();
            case 345:
                var1.recipientUserId = var5;
                var1.analyticsLocation = var4;
                var4 = arg0;
                var1.analyticsLocations = var4;
                var4 = {};
                var5 = 'card';
                var4.presentation = var5;
                var1.navigationParams = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.handleSelectGift = var8;
    var8 = function arg0, arg1() {
        _fun75356: for (var _fun75356_ip = 0;;) switch (_fun75356_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 15;
                var3 = var3[var0];
                var0 = undefined;
                var8 = var5.bind(var0)(var3);
                var7 = var8.track;
                var3 = _closure1_slot12;
                var6 = var3.CHAT_INPUT_COMPONENT_VIEWED;
                var5 = {};
                var3 = _closure1_slot17;
                var3 = var3.START_THREAD;
                var5.type = var3;
                var3 = var4.id;
                var5.channel_id = var3;
                var3 = null;
                var10 = var3 == var4;
                var9 = undefined;
                if (var10) {
                    _fun75356_ip = 87;
                    continue _fun75356
                }
            case 82:
                var9 = var4.guild_id;
            case 87:
                var5.guild_id = var9;
                var5 = var7.bind(var8)(var6, var5);
                if (!(var3 != var4)) {
                    _fun75356_ip = 202;
                    continue _fun75356
                }
            case 101:
                var5 = var2.current;
                var3 = var5.openSystemKeyboard;
                var3 = var3.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 18;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.isIOS;
                var3 = var3.bind(var5)();
                if (!var3) {
                    _fun75356_ip = 164;
                    continue _fun75356
                }
            case 149:
                var3 = var2.current;
                var2 = var3.blur;
                var2 = var2.bind(var3)();
            case 164:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.navigateToThreadCreation;
                var1 = 'Plus Button';
                var1 = var2.bind(var3)(var4, var1);
            case 202:
                return var0;
        }
    };
    var2.handleSelectThread = var8;
    var2.handleAttachFile = var7;
    var2.mediaNodeToUploadItem = var6;
    var6 = function arg0() {
        _fun75357: for (var _fun75357_ip = 0;;) switch (_fun75357_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.path;
                var0 = var1.startsWith;
                var2 = 'file://';
                var1 = var0.bind(var1)(var2);
                var0 = var5.path;
                if (var1) {
                    _fun75357_ip = 55;
                    continue _fun75357
                }
            case 35:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var6 = var1.bind(var2)(var0);
                _fun75357_ip = 58;
                continue _fun75357;
            case 55:
                var6 = var0;
            case 58:
                var2 = var5.path;
                var1 = var2.split;
                var0 = '/';
                var1 = var1.bind(var2)(var0);
                var0 = var1.pop;
                var2 = var0.bind(var1)();
                var0 = {};
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 23;
                var7 = var4[var3];
                var3 = undefined;
                var9 = var8.bind(var3)(var7);
                var8 = var9.uniqueId;
                var7 = var5.path;
                var7 = var8.bind(var9)(var7);
                var0.id = var7;
                var0.uri = var6;
                var0.originalUri = var6;
                var6 = var5.mime;
                var0.mimeType = var6;
                var6 = var5.width;
                var0.width = var6;
                var5 = var5.height;
                var0.height = var5;
                var0.filename = var2;
                var2 = _closure1_slot0;
                var1 = 10;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.UploadPlatform;
                var1 = var1.REACT_NATIVE;
                var0.platform = var1;
                return var0;
        }
    };
    var2.cropResultToUploadItem = var6;
    var2.handleSelectKeyboardItem = var4;
    var4 = function arg0() {
        var10 = arg0;
        var _closure2_slot0 = var10;
        var2 = _closure1_slot31;
        var0 = {};
        var1 = _closure1_slot10;
        var1 = var1.CHAT;
        var0.target = var1;
        var1 = var0.target;
        var0 = undefined;
        var9 = var2.bind(var0)(var1);
        var _closure2_slot1 = var9;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var2 = _closure2_slot0;
            var0.channel = var2;
            var2 = _closure1_slot19;
            var0.uploadLimit = var2;
            var2 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 24;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.hideMediaKeyboardActionSheet;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0.onDismissKeyboard = var2;
            var2 = function() {
                var2 = _closure1_slot32;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onRestoreKeyboard = var2;
            var1 = function arg0() {
                var4 = _closure1_slot24;
                var0 = _closure2_slot0;
                var3 = var0.id;
                var2 = _closure3_slot0;
                var0 = undefined;
                var1 = arg0;
                var1 = var4.bind(var0)(var3, var1, var2);
                return var0;
            };
            var0.onSelectFiles = var1;
            return var0;
        };
        var _closure2_slot2 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 24;
        var1 = var6[var4];
        var3 = var5.bind(var0)(var1);
        var2 = var3.showMediaKeyboardActionSheet;
        var1 = {};
        var1.channel = var10;
        var1.draftType = var9;
        var8 = _closure1_slot19;
        var1.uploadLimit = var8;
        var8 = true;
        var1.disableWhenReachedLimit = var8;
        var8 = function() {
            var2 = _closure1_slot27;
            var1 = {};
            var4 = _closure2_slot2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 10;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var3 = var3.UploadOrigin;
            var3 = var3.FILE_ATTACHMENT;
            var6 = var4.bind(var0)(var3);
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1.onAttachPress = var8;
        var8 = function arg0() {
            var2 = _closure1_slot25;
            var1 = {};
            var4 = _closure2_slot2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 10;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var3 = var3.UploadOrigin;
            var3 = var3.IMAGE_PICKER;
            var6 = var4.bind(var0)(var3);
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var4 = arg0;
            var3 = 'previewType';
            var1[var3] = var4;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1.onPressCamera = var8;
        var8 = function arg0() {
            var0 = arg0;
            var4 = var0.channelId;
            var3 = var0.item;
            var2 = var0.isIncluded;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var0 = 24;
            var5 = var5[var0];
            var0 = undefined;
            var6 = var6.bind(var0)(var5);
            var5 = var6.hideMediaKeyboardActionSheet;
            var5 = var5.bind(var6)();
            var1 = _closure1_slot30;
            var1 = var1.bind(var0)(var4, var3, var2);
            return var0;
        };
        var1.onPressItem = var8;
        var7 = function() {
            var2 = _closure1_slot26;
            var1 = {};
            var5 = _closure2_slot2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 10;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var6.bind(var0)(var4);
            var4 = var4.UploadOrigin;
            var4 = var4.IMAGE_PICKER;
            var7 = var5.bind(var0)(var4);
            var8 = var1;
            var4 = copyDataProperties(var8, var7);
            var4 = _closure2_slot1;
            var3 = 'draftType';
            var1[var3] = var4;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1.onViewAll = var7;
        var7 = var6[var4];
        var7 = var5.bind(var0)(var7);
        var7 = var7.hideMediaKeyboardActionSheet;
        var1.onClose = var7;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.hideMediaKeyboardActionSheet;
        var1.onBack = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot32 = var4;
    var2.showSimpleMediaKeyboard = var4;
    var2.animatedIndexThreshold = var3;
    var2.getMediaKeyboardDraftType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3199, 1372, 4000, 1672, 3999, 1566, 660, 4013, 4005, 7678, 4010, 4006, 4014, 795, 4105, 4012, 478, 1229, 9491, 9643, 9644, 22, 9656, 2]);