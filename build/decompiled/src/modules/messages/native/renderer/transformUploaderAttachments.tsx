// modules/messages/native/renderer/transformUploaderAttachments.tsx
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
    var3 = var3.AttachmentType;
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformUploaderAttachments.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56014: for (var _fun56014_ip = 0;;) switch (_fun56014_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.uploaderFile;
                var _closure2_slot0 = var0;
                var3 = var1.isFailedMessage;
                var _closure2_slot1 = var3;
                var1 = var1.shouldInlineAttachmentMedia;
                var _closure2_slot2 = var1;
                var4 = var0.items;
                var1 = null;
                var3 = var1 == var4;
                var0 = undefined;
                if (var3) {
                    _fun56014_ip = 66;
                    continue _fun56014
                }
            case 51:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun56015: for (var _fun56015_ip = 0;;) switch (_fun56015_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.filename;
                            var3 = null;
                            var1 = var3 != var0;
                            var7 = '';
                            var13 = var7;
                            if (!var1) {
                                _fun56015_ip = 28;
                                continue _fun56015
                            }
                        case 25:
                            var13 = var0;
                        case 28:
                            var5 = var4.item;
                            var0 = var5.originalUri;
                            var1 = var3 != var0;
                            var15 = var7;
                            if (!var1) {
                                _fun56015_ip = 52;
                                continue _fun56015
                            }
                        case 49:
                            var15 = var0;
                        case 52:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var0 = 1;
                            var9 = var8[var0];
                            var1 = undefined;
                            var10 = var6.bind(var1)(var9);
                            var9 = var10.isImageFile;
                            var12 = var9.bind(var10)(var13);
                            var9 = var8[var0];
                            var10 = var6.bind(var1)(var9);
                            var9 = var10.isVideoFile;
                            var11 = var9.bind(var10)(var13);
                            var0 = var8[var0];
                            var6 = var6.bind(var1)(var0);
                            var0 = var6.isAudioFile;
                            var10 = var0.bind(var6)(var13);
                            var0 = var5.progress;
                            var6 = var3 != var0;
                            var14 = 0;
                            var16 = 0;
                            if (!var6) {
                                _fun56015_ip = 148;
                                continue _fun56015
                            }
                        case 145:
                            var16 = var0;
                        case 148:
                            var6 = var5.compressionProgress;
                            var8 = var3 != var6;
                            var0 = 0;
                            if (!var8) {
                                _fun56015_ip = 166;
                                continue _fun56015
                            }
                        case 163:
                            var0 = var6;
                        case 166:
                            var8 = 0.7;
                            var17 = var8;
                            if (!(var14 === var0)) {
                                _fun56015_ip = 195;
                                continue _fun56015
                            }
                        case 183:
                            var6 = var16 > var14;
                            var17 = var8;
                            if (!var6) {
                                _fun56015_ip = 195;
                                continue _fun56015
                            }
                        case 193:
                            var17 = 0;
                        case 195:
                            var6 = global;
                            var8 = var6.Math;
                            var6 = var8.floor;
                            var9 = var0 * var17;
                            var0 = 0.9;
                            var0 = var0 - var17;
                            var0 = var16 * var0;
                            var9 = var9 + var0;
                            var0 = 10;
                            var0 = var9 + var0;
                            var0 = var6.bind(var8)(var0);
                            var8 = _closure2_slot1;
                            if (!var8) {
                                _fun56015_ip = 266;
                                continue _fun56015
                            }
                        case 257:
                            var8 = 100;
                            var9 = undefined;
                            if (!(var8 === var0)) {
                                _fun56015_ip = 269;
                                continue _fun56015
                            }
                        case 266:
                            var9 = var0;
                        case 269:
                            var0 = {};
                            var0.url = var15;
                            var8 = undefined;
                            if (!var11) {
                                _fun56015_ip = 283;
                                continue _fun56015
                            }
                        case 280:
                            var8 = var15;
                        case 283:
                            var0.videoUrl = var8;
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot1;
                            var8 = 2;
                            var8 = var16[var8];
                            var15 = var15.bind(var1)(var8);
                            var8 = var15.getAttachmentObscurityDefaults;
                            var18 = var8.bind(var15)();
                            var19 = var0;
                            var8 = copyDataProperties(var19, var18);
                            var8 = 'filename';
                            var0[var8] = var13;
                            var8 = var5.size;
                            var8 = var3 != var8;
                            var13 = var7;
                            if (!var8) {
                                _fun56015_ip = 363;
                                continue _fun56015
                            }
                        case 349:
                            var15 = var5.size;
                            var8 = var15.toString;
                            var13 = var8.bind(var15)();
                        case 363:
                            var8 = 'size';
                            var0[var8] = var13;
                            var13 = false;
                            var8 = 'showDescription';
                            var0[var8] = var13;
                            var8 = _closure2_slot2;
                            var13 = 0;
                            if (!var8) {
                                _fun56015_ip = 411;
                                continue _fun56015
                            }
                        case 392:
                            var8 = var5.width;
                            var8 = var3 != var8;
                            var13 = 0;
                            if (!var8) {
                                _fun56015_ip = 411;
                                continue _fun56015
                            }
                        case 406:
                            var13 = var5.width;
                        case 411:
                            var8 = 'width';
                            var0[var8] = var13;
                            var8 = _closure2_slot2;
                            var13 = 0;
                            if (!var8) {
                                _fun56015_ip = 448;
                                continue _fun56015
                            }
                        case 429:
                            var8 = var5.height;
                            var8 = var3 != var8;
                            var13 = 0;
                            if (!var8) {
                                _fun56015_ip = 448;
                                continue _fun56015
                            }
                        case 443:
                            var13 = var5.height;
                        case 448:
                            var8 = 'height';
                            var0[var8] = var13;
                            var13 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var16 = 3;
                            var14 = var8[var16];
                            var14 = var13.bind(var1)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var8 = var8[var16];
                            var8 = var13.bind(var1)(var8);
                            var8 = var8.t;
                            if (var11) {
                                _fun56015_ip = 517;
                                continue _fun56015
                            }
                        case 504:
                            var13 = var8.IPzNKE;
                            var13 = var14.bind(var15)(var13);
                            _fun56015_ip = 528;
                            continue _fun56015;
                        case 517:
                            var8 = var8["BEWw/7"];
                            var13 = var14.bind(var15)(var8);
                        case 528:
                            var8 = 'hint';
                            var0[var8] = var13;
                            var13 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var14 = var8[var16];
                            var14 = var13.bind(var1)(var14);
                            var15 = var14.intl;
                            var14 = var15.string;
                            var8 = var8[var16];
                            var8 = var13.bind(var1)(var8);
                            var8 = var8.t;
                            if (var11) {
                                _fun56015_ip = 594;
                                continue _fun56015
                            }
                        case 581:
                            var13 = var8.fKyfca;
                            var13 = var14.bind(var15)(var13);
                            _fun56015_ip = 605;
                            continue _fun56015;
                        case 594:
                            var8 = var8["/SCpvi"];
                            var13 = var14.bind(var15)(var8);
                        case 605:
                            var8 = 'role';
                            var0[var8] = var13;
                            var8 = _closure1_slot2;
                            if (var12) {
                                _fun56015_ip = 651;
                                continue _fun56015
                            }
                        case 621:
                            if (var11) {
                                _fun56015_ip = 643;
                                continue _fun56015
                            }
                        case 624:
                            if (var10) {
                                _fun56015_ip = 635;
                                continue _fun56015
                            }
                        case 627:
                            var10 = var8.OTHER;
                            _fun56015_ip = 641;
                            continue _fun56015;
                        case 635:
                            var10 = var8.AUDIO;
                        case 641:
                            _fun56015_ip = 649;
                            continue _fun56015;
                        case 643:
                            var10 = var8.VIDEO;
                        case 649:
                            _fun56015_ip = 657;
                            continue _fun56015;
                        case 651:
                            var10 = var8.IMAGE;
                        case 657:
                            var8 = 'attachmentType';
                            var0[var8] = var10;
                            var8 = 'progress';
                            var0[var8] = var9;
                            var6 = _closure2_slot0;
                            var8 = var6.id;
                            var6 = 'uploaderId';
                            var0[var6] = var8;
                            var6 = var4.id;
                            var8 = var3 != var6;
                            if (!var8) {
                                _fun56015_ip = 708;
                                continue _fun56015
                            }
                        case 705:
                            var7 = var6;
                        case 708:
                            var6 = 'uploaderItemId';
                            var0[var6] = var7;
                            var7 = var5.durationSecs;
                            var6 = 'durationSecs';
                            var0[var6] = var7;
                            var6 = var5.waveform;
                            var5 = 'waveform';
                            var0[var5] = var6;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 4;
                            var2 = var6[var2];
                            var2 = var5.bind(var1)(var2);
                            var2 = var2.CloudUpload;
                            var5 = var4 instanceof var2;
                            var2 = undefined;
                            if (!var5) {
                                _fun56015_ip = 809;
                                continue _fun56015
                            }
                        case 782:
                            var4 = var4.reactNativeFileIndex;
                            var3 = var3 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun56015_ip = 806;
                                continue _fun56015
                            }
                        case 797:
                            var3 = var4.toString;
                            var1 = var3.bind(var4)();
                        case 806:
                            var2 = var1;
                        case 809:
                            var1 = 'id';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2);
            case 66:
                if (!(var1 == var0)) {
                    _fun56014_ip = 74;
                    continue _fun56014
                }
            case 70:
                var0 = new Array(0);
            case 74:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6479, 3939, 6759, 1234, 3963, 2]);