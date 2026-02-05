// modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73202: for (var _fun73202_ip = 0;;) switch (_fun73202_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channelId;
                var _closure2_slot0 = var11;
                var10 = var1.messageId;
                var _closure2_slot1 = var10;
                var9 = var1.attachmentId;
                var7 = var1.embedId;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var6 = var5[var1];
                var3 = undefined;
                var8 = var2.bind(var3)(var6);
                var6 = var8.useRedactableMediaAttachmentsForMessage;
                var9 = var6.bind(var8)(var11, var10, var9);
                var _closure2_slot2 = var9;
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var6.useRedactableMediaEmbedsForMessage;
                var8 = var1.bind(var6)(var11, var10, var7);
                var _closure2_slot3 = var8;
                var1 = 4;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useExplicitMediaActions;
                var1 = {};
                var6 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.handleSuccess;
                    var0 = _closure1_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onSuccess = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.handleError;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1.onError = var6;
                var6 = function() {
                    _fun73205: for (var _fun73205_ip = 0;;) switch (_fun73205_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.reportFalsePositive;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var8 = _closure2_slot2;
                            var6 = null;
                            var8 = var6 == var8;
                            if (var8) {
                                _fun73205_ip = 78;
                                continue _fun73205
                            }
                        case 57:
                            var10 = _closure2_slot2;
                            var9 = var10.map;
                            var8 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var1 = var9.bind(var10)(var8);
                        case 78:
                            if (!(var6 == var1)) {
                                _fun73205_ip = 86;
                                continue _fun73205
                            }
                        case 82:
                            var1 = new Array(0);
                        case 86:
                            var8 = _closure2_slot3;
                            var7 = var8.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var0 = var7.bind(var8)(var0);
                            if (!(var6 == var0)) {
                                _fun73205_ip = 115;
                                continue _fun73205
                            }
                        case 111:
                            var0 = new Array(0);
                        case 115:
                            var15 = var5;
                            var14 = var3;
                            var13 = var2;
                            var12 = var1;
                            var11 = var0;
                            var0 = var15[var4](var14, var13, var12, var11, var10);
                            return var0;
                    }
                };
                var1.report = var6;
                var1 = var2.bind(var5)(var1);
                var12 = var1.reportFalsePositive;
                var _closure2_slot4 = var12;
                var6 = var1.isReportFalsePositiveLoading;
                var2 = null;
                var1 = var2 == var9;
                var5 = undefined;
                if (var1) {
                    _fun73202_ip = 196;
                    continue _fun73202
                }
            case 191:
                var5 = var9.length;
            case 196:
                var13 = var2 != var5;
                var7 = 0;
                var1 = 0;
                if (!var13) {
                    _fun73202_ip = 210;
                    continue _fun73202
                }
            case 207:
                var1 = var5;
            case 210:
                var1 = var1 > var7;
                if (var1) {
                    _fun73202_ip = 247;
                    continue _fun73202
                }
            case 217:
                var13 = var2 == var8;
                var5 = undefined;
                if (var13) {
                    _fun73202_ip = 231;
                    continue _fun73202
                }
            case 226:
                var5 = var8.length;
            case 231:
                var13 = var2 != var5;
                var2 = 0;
                if (!var13) {
                    _fun73202_ip = 243;
                    continue _fun73202
                }
            case 240:
                var2 = var5;
            case 243:
                var1 = var2 > var7;
            case 247:
                if (var1) {
                    _fun73202_ip = 280;
                    continue _fun73202
                }
            case 250:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
            case 280:
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var12;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 5;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ExplicitMediaFalsePositiveActionSheet;
                var0 = {};
                var0.channelId = var11;
                var0.messageId = var10;
                var0.isReportFalsePositiveLoading = var6;
                var11 = var9.length;
                var10 = 1;
                var6 = undefined;
                if (!(var10 === var11)) {
                    _fun73202_ip = 373;
                    continue _fun73202
                }
            case 369:
                var6 = var9[var7];
            case 373:
                var0.attachmentPreview = var6;
                var9 = var8.length;
                var6 = undefined;
                if (!(var10 === var9)) {
                    _fun73202_ip = 393;
                    continue _fun73202
                }
            case 389:
                var6 = var8[var7];
            case 393:
                var0.embedPreview = var6;
                var0.onConfirmPress = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 8;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.TrackMediaRedactionContext;
                var4 = var4.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
                var0.analyticsContext = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4259, 33, 9210, 7718, 7719, 4283, 3278, 4256, 2]);