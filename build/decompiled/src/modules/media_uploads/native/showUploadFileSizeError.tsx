// modules/media_uploads/native/showUploadFileSizeError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FileUploadErrorTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot8 = var6;
    var6 = var3.PremiumUserLimits;
    var _closure1_slot9 = var6;
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'Nitro Upsell';
    var3.NITRO_UPSELL = var6;
    var6 = 'Over Max Size';
    var3.OVER_MAX_SIZE = var6;
    var _closure1_slot11 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/native/showUploadFileSizeError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: showUploadFileSizeError, environment: var1
        _fun61336: for (var _fun61336_ip = 0;;) switch (_fun61336_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.file;
                var9 = var0.maxSize;
                var11 = var0.analyticsLocations;
                var3 = var0.errorReason;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot4;
                var4 = var5.getCurrentUser;
                var7 = var4.bind(var5)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.isPremiumExactly;
                var4 = _closure1_slot8;
                var4 = var4.TIER_2;
                var13 = var5.bind(var6)(var7, var4);
                var4 = var14.items;
                var6 = null;
                if (!(var6 == var4)) {
                    _fun61336_ip = 115;
                    continue _fun61336
                }
            case 109:
                var15 = new Array(0);
                _fun61336_ip = 152;
                continue _fun61336;
            case 115:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var7 = var5.bind(var0)(var4);
                var5 = var7.getAttachmentMimeTypes;
                var4 = var14.items;
                var15 = var5.bind(var7)(var4);
            case 152:
                var4 = new Array(0);
                _closure2_slot0 = var4;
                var12 = new Array(0);
                _closure2_slot1 = var12;
                var5 = var14.items;
                if (!(var6 != var5)) {
                    _fun61336_ip = 199;
                    continue _fun61336
                }
            case 178:
                var7 = var14.items;
                var5 = var7.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun61337: for (var _fun61337_ip = 0;;) switch (_fun61337_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure2_slot0;
                            var3 = var4.push;
                            var5 = var0.postCompressionSize;
                            var2 = null;
                            var6 = var2 != var5;
                            var2 = 0;
                            if (!var6) {
                                _fun61337_ip = 35;
                                continue _fun61337
                            }
                        case 32:
                            var2 = var5;
                        case 35:
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var0 = var0.preCompressionSize;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var7)(var2);
            case 199:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 7;
                var2 = var2[var8];
                var10 = var5.bind(var0)(var2);
                var7 = var10.trackWithMetadata;
                var2 = _closure1_slot5;
                var5 = var2.FILE_SIZE_LIMIT_EXCEEDED;
                var2 = {};
                var2.user_individual_file_size_limit = var9;
                var16 = var14.attachmentsCount;
                var2.num_attachments = var16;
                var2.pre_compression_file_sizes = var12;
                var16 = var14.totalPreCompressionSize;
                var2.pre_compression_aggregate_file_size = var16;
                var2.post_compression_file_sizes = var4;
                var16 = var14.totalPostCompressionSize;
                var2.post_compression_aggregate_file_size = var16;
                var2.attachment_mimetypes = var15;
                var15 = var3;
                if (!(var6 == var15)) {
                    _fun61336_ip = 319;
                    continue _fun61336
                }
            case 309:
                var16 = _closure1_slot7;
                var15 = var16.ERROR_SOURCE_UNKNOWN;
            case 319:
                var2.error_type = var15;
                var2 = var7.bind(var10)(var5, var2);
                var7 = 0;
                if (var13) {
                    _fun61336_ip = 427;
                    continue _fun61336
                }
            case 335:
                var5 = var14.items;
                var2 = var9;
                if (!(var6 != var5)) {
                    _fun61336_ip = 424;
                    continue _fun61336
                }
            case 348:
                var5 = _closure1_slot7;
                var5 = var5.ERROR_SOURCE_UNKNOWN;
                var2 = var9;
                if (!(var3 !== var5)) {
                    _fun61336_ip = 424;
                    continue _fun61336
                }
            case 365:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.max;
                var15 = _closure1_slot7;
                var15 = var15.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                if (!(var3 === var15)) {
                    _fun61336_ip = 395;
                    continue _fun61336
                }
            case 392:
                var12 = var4;
            case 395:
                var4 = new Array(0);
                var20 = var4;
                var19 = var12;
                var18 = 0;
                var12 = arraySpread(var20, var19, var18);
                var20 = var5;
                var19 = var4;
                var18 = var6;
                var2 = apply(var20, var19, var18);
            case 424:
                var7 = var2;
            case 427:
                var2 = _closure1_slot7;
                var2 = var2.POSTCOMPRESSION_SUM_TOO_LARGE;
                var4 = var3 === var2;
                if (var4) {
                    _fun61336_ip = 458;
                    continue _fun61336
                }
            case 444:
                var2 = _closure1_slot7;
                var2 = var2.PRECOMPRESSION_SUM_TOO_LARGE;
                var4 = var3 === var2;
            case 458:
                var2 = var13;
                if (var2) {
                    _fun61336_ip = 492;
                    continue _fun61336
                }
            case 464:
                var6 = _closure1_slot9;
                var5 = _closure1_slot8;
                var5 = var5.TIER_2;
                var5 = var6[var5];
                var5 = var5.fileSize;
                var2 = var7 > var5;
            case 492:
                if (var2) {
                    _fun61336_ip = 525;
                    continue _fun61336
                }
            case 495:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 8;
                var5 = var12[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.MAX_TOTAL_ATTACHMENT_SIZE;
                var2 = var7 > var5;
            case 525:
                if (var2) {
                    _fun61336_ip = 531;
                    continue _fun61336
                }
            case 528:
                var2 = var4;
            case 531:
                if (var2) {
                    _fun61336_ip = 548;
                    continue _fun61336
                }
            case 534:
                var5 = _closure1_slot7;
                var5 = var5.ERROR_SOURCE_UNKNOWN;
                var2 = var3 === var5;
            case 548:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var12 = var6.bind(var0)(var5);
                var8 = var12.trackWithMetadata;
                var5 = _closure1_slot5;
                var6 = var5.FILE_UPLOAD_ALERT_VIEWED;
                var5 = {};
                var16 = _closure1_slot11;
                if (var2) {
                    _fun61336_ip = 598;
                    continue _fun61336
                }
            case 590:
                var15 = var16.NITRO_UPSELL;
                _fun61336_ip = 604;
                continue _fun61336;
            case 598:
                var15 = var16.OVER_MAX_SIZE;
            case 604:
                var5.alert_type = var15;
                var15 = var14.attachmentsCount;
                var5.num_attachments = var15;
                var15 = var14.currentSize;
                var5.total_attachment_size = var15;
                var15 = var14.hasImage;
                var5.has_image = var15;
                var14 = var14.hasVideo;
                var5.has_video = var14;
                var5.is_premium = var13;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 9;
                var13 = var15[var13];
                var14 = var14.bind(var0)(var13);
                var13 = var14.getImageCompressionQuality;
                var13 = var13.bind(var14)();
                var5.image_compression_quality = var13;
                var13 = _closure1_slot3;
                var13 = var13.dataSavingMode;
                var5.image_compression_setting_enabled = var13;
                var5 = var8.bind(var12)(var6, var5);
                if (var2) {
                    _fun61336_ip = 901;
                    continue _fun61336
                }
            case 732:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 10;
                var2 = var13[var2];
                var6 = var12.bind(var0)(var2);
                var5 = var6.handleShowUpsellAlert;
                var2 = {};
                var14 = _closure1_slot0;
                var8 = 11;
                var8 = var13[var8];
                var8 = var14.bind(var0)(var8);
                var8 = var8.UpsellTypes;
                var8 = var8.UPLOAD;
                var2.initialUpsellKey = var8;
                var8 = {};
                var14 = _closure1_slot6;
                var14 = var14.FILE_UPLOAD_POPOUT;
                var8.section = var14;
                var2.analyticsLocation = var8;
                var8 = new Array(1);
                var20 = var8;
                var19 = var11;
                var18 = 0;
                var11 = arraySpread(var20, var19, var18);
                var10 = 12;
                var10 = var13[var10];
                var10 = var12.bind(var0)(var10);
                var10 = var10.FILE_UPLOAD_POPOUT;
                var8[var11] = var10;
                var10 = 1;
                var10 = var11 + var10;
                var2.analyticsLocations = var8;
                var8 = {};
                var10 = _closure1_slot10;
                var10 = var10.UPLOAD_ERROR_UPSELL;
                var8.type = var10;
                var2.analyticsProperties = var8;
                var2.largestFileSize = var7;
                var2 = var5.bind(var6)(var2);
                _fun61336_ip = 1326;
                continue _fun61336;
            case 901:
                var2 = _closure1_slot7;
                var2 = var2.ERROR_SOURCE_UNKNOWN;
                if (!(var3 !== var2)) {
                    _fun61336_ip = 1186;
                    continue _fun61336
                }
            case 918:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 13;
                var5 = var2[var3];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var2[var3];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["/tGlcj"];
                var2 = var5.bind(var6)(var2);
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = var13[var3];
                var5 = var12.bind(var0)(var5);
                var7 = var5.intl;
                var6 = var7.formatToPlainString;
                var3 = var13[var3];
                var3 = var12.bind(var0)(var3);
                var3 = var3.t;
                if (var4) {
                    _fun61336_ip = 1090;
                    continue _fun61336
                }
            case 1017:
                var5 = var3.fxEKdS;
                var4 = {};
                var8 = 14;
                var10 = var13[var8];
                var11 = var12.bind(var0)(var10);
                var10 = var11.formatSize;
                var8 = var13[var8];
                var8 = var12.bind(var0)(var8);
                var8 = var8.BYTE_IN_KB;
                var9 = var9 / var8;
                var8 = {};
                var14 = true;
                var8.useKibibytes = var14;
                var8 = var10.bind(var11)(var9, var8);
                var4.maxSize = var8;
                var4 = var6.bind(var7)(var5, var4);
                _fun61336_ip = 1181;
                continue _fun61336;
            case 1090:
                var5 = var3.tUOJdH;
                var3 = {};
                var8 = 14;
                var9 = var13[var8];
                var11 = var12.bind(var0)(var9);
                var10 = var11.formatSize;
                var9 = 8;
                var9 = var13[var9];
                var9 = var12.bind(var0)(var9);
                var9 = var9.MAX_TOTAL_ATTACHMENT_SIZE;
                var8 = var13[var8];
                var8 = var12.bind(var0)(var8);
                var8 = var8.BYTE_IN_KB;
                var9 = var9 / var8;
                var8 = {};
                var12 = true;
                var8.useKibibytes = var12;
                var8 = var10.bind(var11)(var9, var8);
                var3.maxSize = var8;
                var4 = var6.bind(var7)(var5, var3);
            case 1181:
                var5 = var2;
                _fun61336_ip = 1285;
                continue _fun61336;
            case 1186:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 13;
                var2 = var9[var3];
                var2 = var8.bind(var0)(var2);
                var7 = var2.intl;
                var6 = var7.string;
                var2 = var9[var3];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.B3vFdU;
                var5 = var6.bind(var7)(var2);
                var6 = var9[var3];
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var0)(var3);
                var3 = var3.t;
                var3 = var3.zMEjJg;
                var4 = var6.bind(var7)(var3);
            case 1285:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var1.title = var5;
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
            case 1326:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3156, 1613, 660, 1346, 1615, 1628, 6580, 4265, 3966, 3972, 7573, 670, 5540, 1234, 3316, 3962, 2]);