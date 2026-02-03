// modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61705: for (var _fun61705_ip = 0;;) switch (_fun61705_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var _closure2_slot0 = var9;
                var8 = var0.messageId;
                var _closure2_slot1 = var8;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var3 = undefined;
                var10 = var5.bind(var3)(var2);
                var7 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getFpMessageInfo;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var10)(var4, var2);
                var10 = var2.attachments;
                var7 = var10.map;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4 = var7.bind(var10)(var4);
                var _closure2_slot2 = var4;
                var10 = var2.attachments;
                var7 = var10.map;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.filename;
                    return var0;
                };
                var4 = var7.bind(var10)(var4);
                var _closure2_slot3 = var4;
                var4 = 5;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.useExplicitMediaActions;
                var4 = {};
                var7 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 6;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.handleSuccess;
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.disableFalsePositiveButton;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4.onSuccess = var7;
                var7 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.handleError;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4.onError = var7;
                var7 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.reportFailedSendFalsePositive;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var7 = _closure2_slot2;
                    var6 = _closure2_slot3;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var4.report = var7;
                var4 = var5.bind(var6)(var4);
                var6 = var4.reportFalsePositive;
                var _closure2_slot4 = var6;
                var7 = var4.isReportFalsePositiveLoading;
                var2 = var2.attachments;
                var4 = var2.length;
                var2 = 0;
                if (!(!(var4 > var2))) {
                    _fun61705_ip = 244;
                    continue _fun61705
                }
            case 214:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.hideActionSheet;
                var2 = var2.bind(var4)();
            case 244:
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot6;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ExplicitMediaFalsePositiveActionSheet;
                var0 = {};
                var0.channelId = var9;
                var0.messageId = var8;
                var0.isReportFalsePositiveLoading = var7;
                var0.onConfirmPress = var4;
                var4 = 10;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.TrackMediaRedactionContext;
                var4 = var4.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW;
                var0.analyticsContext = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4253, 4255, 33, 632, 7691, 7692, 7689, 4279, 3269, 4252, 2]);