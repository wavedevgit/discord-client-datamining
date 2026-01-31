// modules/messages/logMessageSendFailure.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun54716: for (var _fun54716_ip = 0;;) switch (_fun54716_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.mimeType;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 'unknown';
                    if (!var2) {
                        _fun54716_ip = 25;
                        continue _fun54716
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/logMessageSendFailure.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun54717: for (var _fun54717_ip = 0;;) switch (_fun54717_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.fileItems;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun54717_ip = 21;
                    continue _fun54717
                }
            case 15:
                var5 = new Array(0);
                _fun54717_ip = 41;
                continue _fun54717;
            case 21:
                var4 = _closure1_slot3;
                var3 = var1.fileItems;
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
            case 41:
                var3 = var1.errorMessage;
                var4 = var2 != var3;
                var0 = undefined;
                var6 = undefined;
                if (!var4) {
                    _fun54717_ip = 61;
                    continue _fun54717
                }
            case 58:
                var6 = var3;
            case 61:
                var1 = var1.failureCode;
                var2 = var2 != var1;
                var7 = undefined;
                if (!var2) {
                    _fun54717_ip = 79;
                    continue _fun54717
                }
            case 76:
                var7 = var1;
            case 79:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot2;
                var2 = var1.SEND_MESSAGE_FAILURE;
                var1 = {};
                var1.failure_code = var7;
                var1.error_message = var6;
                var1.attachment_mimetypes = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.logMessageSendFailure = var3;
    var2.getAttachmentMimeTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4266, 2]);