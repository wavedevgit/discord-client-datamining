// lib/uploader/Upload.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function() {
        _fun36994: for (var _fun36994_ip = 0;;) switch (_fun36994_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun36994_ip = 74;
                continue _fun36994;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var10 = 0;
    var1 = var8[var10];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var9 = 1;
    var1 = var8[var9];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var6 = 2;
    var1 = var8[var6];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var4 = {};
    var4.REACT_NATIVE = var10;
    var1 = 'REACT_NATIVE';
    var4[var10] = var1;
    var4.WEB = var9;
    var1 = 'WEB';
    var4[var9] = var1;
    var _closure1_slot9 = var4;
    var1 = {};
    var1.FILE_ATTACHMENT = var10;
    var5 = 'FILE_ATTACHMENT';
    var1[var10] = var5;
    var1.IMAGE_PICKER = var9;
    var5 = 'IMAGE_PICKER';
    var1[var9] = var5;
    var1.IMAGE_EDITOR = var6;
    var5 = 'IMAGE_EDITOR';
    var1[var6] = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.EventEmitter;
    var5 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun36998: for (var _fun36998_ip = 0;;) switch (_fun36998_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var0 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var0 = _closure1_slot7;
                    var10 = var0.bind(var3)(var4);
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun36998_ip = 65;
                        continue _fun36998
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var3);
                    _fun36998_ip = 103;
                    continue _fun36998;
                case 65:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 103:
                    var0 = var4.bind(var3)(var5, var0);
                    var0.item = var2;
                    var5 = var2.platform;
                    var4 = _closure1_slot9;
                    var4 = var4.REACT_NATIVE;
                    if (!(var5 !== var4)) {
                        _fun36998_ip = 324;
                        continue _fun36998
                    }
                case 138:
                    var4 = var2.id;
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun36998_ip = 184;
                        continue _fun36998
                    }
                case 149:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 6;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.uniqueId;
                    var5 = 'upload';
                    var4 = var6.bind(var7)(var5);
                case 184:
                    var0.id = var4;
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.classifyFile;
                    var4 = var2.file;
                    var4 = var5.bind(var6)(var4);
                    var0.classification = var4;
                    var5 = var0.classification;
                    var4 = 'image';
                    var4 = var4 === var5;
                    var0.isImage = var4;
                    var5 = var0.classification;
                    var4 = 'video';
                    var4 = var4 === var5;
                    var0.isVideo = var4;
                    var4 = var2.file;
                    var4 = var4.name;
                    var0.filename = var4;
                    var4 = var2.file;
                    var4 = var4.type;
                    var0.mimeType = var4;
                    var4 = var2.origin;
                    var0.origin = var4;
                    _fun36998_ip = 493;
                    continue _fun36998;
                case 324:
                    var4 = var2.id;
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun36998_ip = 340;
                        continue _fun36998
                    }
                case 335:
                    var4 = var2.uri;
                case 340:
                    var0.id = var4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.getFile;
                    var4 = {};
                    var7 = var2.uri;
                    var4.uri = var7;
                    var7 = var2.filename;
                    var4.overrideFilename = var7;
                    var7 = var2.mimeType;
                    var4.overrideType = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.filename;
                    var0.filename = var5;
                    var5 = var4.isImage;
                    var0.isImage = var5;
                    var5 = var4.isVideo;
                    var0.isVideo = var5;
                    var4 = var4.type;
                    var0.mimeType = var4;
                    var4 = var2.origin;
                    var0.origin = var4;
                    var4 = var2.durationSecs;
                    var0.durationSecs = var4;
                    var4 = var2.waveform;
                    var0.waveform = var4;
                case 493:
                    var4 = var2.isThumbnail;
                    var0.isThumbnail = var4;
                    var2 = var2.clip;
                    var0.clip = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 8;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.v4;
                    var1 = var1.bind(var2)();
                    var0.uniqueId = var1;
                    var1 = false;
                    var0.spoiler = var1;
                    var1 = null;
                    var0.description = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'cancel';
        var4.key = var0;
        var0 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'resetState';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var6);
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/Upload.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.UploadPlatform = var4;
    var3 = function arg0() {
        _fun37001: for (var _fun37001_ip = 0;;) switch (_fun37001_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isVideo;
                var2 = undefined;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun37001_ip = 28;
                    continue _fun37001
                }
            case 18:
                var1 = var1.isImage;
                var0 = var2 !== var1;
            case 28:
                return var0;
        }
    };
    var2.isResolvedUpload = var3;
    var2.UploadOrigin = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4006, 22, 4008, 491, 639, 2]);