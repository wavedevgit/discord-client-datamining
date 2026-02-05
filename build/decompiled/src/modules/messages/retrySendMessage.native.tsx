// modules/messages/retrySendMessage.native.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/retrySendMessage.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun76010: for (var _fun76010_ip = 0;;) switch (_fun76010_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var9 = arg2;
                var3 = arguments[3];
                var _closure2_slot0 = var5;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun76010_ip = 26;
                    continue _fun76010
                }
            case 24:
                var3 = {};
            case 26:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 1;
                var2 = var2[var8];
                var12 = var6.bind(var0)(var2);
                var11 = var12.deleteMessage;
                var7 = var5.id;
                var6 = var4.id;
                var2 = true;
                var2 = var11.bind(var12)(var7, var6, var2);
                var2 = var4.isCommandType;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun76010_ip = 318;
                    continue _fun76010
                }
            case 90:
                var14 = var4.content;
                var2 = var4.tts;
                var11 = var4.messageReference;
                var15 = var4.flags;
                var16 = var4.nonce;
                var13 = null;
                var6 = var13 == var9;
                var12 = undefined;
                if (var6) {
                    _fun76010_ip = 146;
                    continue _fun76010
                }
            case 129:
                var7 = var9.map;
                var6 = function(arg0) { // Environment: var10
                    _fun76011: for (var _fun76011_ip = 0;;) switch (_fun76011_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.on;
                            var1 = null;
                            var0 = var3;
                            if (!(var1 == var2)) {
                                _fun76011_ip = 60;
                                continue _fun76011
                            }
                        case 18:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            var2 = var1.CloudUpload;
                            var1 = var2.fromJson;
                            var0 = var1.bind(var2)(var3);
                        case 60:
                            return var0;
                    }
                };
                var12 = var7.bind(var9)(var6);
            case 146:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var9 = var7.bind(var0)(var6);
                var8 = var9.sendMessage;
                var7 = var5.id;
                var6 = {};
                var6.content = var14;
                var6.tts = var2;
                var2 = new Array(0);
                var6.invalidEmojis = var2;
                var2 = new Array(0);
                var6.validNonShortcutEmojis = var2;
                var2 = {};
                var20 = var2;
                var19 = var3;
                var14 = copyDataProperties(var20, var19);
                var14 = 'nonce';
                var2[var14] = var16;
                var14 = 'flags';
                var2[var14] = var15;
                var14 = var13 != var11;
                var13 = undefined;
                if (!var14) {
                    _fun76010_ip = 245;
                    continue _fun76010
                }
            case 242:
                var13 = var11;
            case 245:
                var11 = 'messageReference';
                var2[var11] = var13;
                var11 = _closure1_slot3;
                var13 = var11.RETRY;
                var11 = 'location';
                var2[var11] = var13;
                var11 = 'attachmentsToUpload';
                var2[var11] = var12;
                var11 = function arg0, arg1, arg2() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleUploadMessageAttachmentsErrors;
                    var1 = {};
                    var4 = arg0;
                    var1.file = var4;
                    var5 = _closure2_slot0;
                    var4 = var5.getGuildId;
                    var4 = var4.bind(var5)();
                    var1.guildId = var4;
                    var4 = new Array(0);
                    var1.analyticsLocations = var4;
                    var4 = arg1;
                    var1.code = var4;
                    var4 = arg2;
                    var1.reason = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = 'onAttachmentUploadError';
                var2[var10] = var11;
                var21 = var9;
                var20 = var7;
                var19 = var6;
                var18 = undefined;
                var17 = var2;
                var2 = var21[var8](var20, var19, var18, var17, var16);
                _fun76010_ip = 378;
                continue _fun76010;
            case 318:
                var2 = var4.interactionData;
                var7 = null;
                var2 = var7 != var2;
                if (!var2) {
                    _fun76010_ip = 342;
                    continue _fun76010
                }
            case 333:
                var6 = var3.applicationId;
                var2 = var7 != var6;
            case 342:
                if (!var2) {
                    _fun76010_ip = 378;
                    continue _fun76010
                }
            case 345:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.retryCommandMessage;
                var1 = var1.bind(var2)(var4, var5, var3);
            case 378:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1346, 6546, 8006, 4003, 7630, 2]);