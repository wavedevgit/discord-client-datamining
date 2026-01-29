// modules/headless_tasks/android/DirectReply.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var5 = metroImportDefault;
    var3 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var3[var4];
    var6 = var5.bind(var0)(var4);
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var7 = 'DirectReply';
    var8 = var5;
    var4 = new var8[var6](var7, var6);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot5 = var4;
    var4 = function(arg0) { // Environment: var1
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
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot5;
            var3 = var4.log;
            var2 = 'Executing DirectReply';
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var4 = var2.PushNotificationAndroid;
            var3 = var4.markNotificationAsDirectReply;
            var2 = _closure2_slot0;
            var2 = var2.channelId;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.awaitStorage;
            var1 = function() { // Environment: var1
                var1 = function() { // Original name: _sendMessage, environment: var0
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot2;
                    var1 = function*(arg0) { // Environment: var1
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun118616: for (var _fun118616_ip = 0;;) switch (_fun118616_ip) {
                                case 0:
                                    StartGenerator();
                                    var8 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun118616_ip = 269;
                                        continue _fun118616
                                    }
                                case 13:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 5;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var9 = var4.bind(var2)(var1);
                                    var7 = var9.sendMessage;
                                    var14 = var8.channelId;
                                    var5 = {};
                                    var1 = var8.channelReplyText;
                                    var5.content = var1;
                                    var4 = false;
                                    var5.tts = var4;
                                    var1 = new Array(0);
                                    var5.invalidEmojis = var1;
                                    var1 = new Array(0);
                                    var5.validNonShortcutEmojis = var1;
                                    var1 = {};
                                    var1.eagerDispatch = var4;
                                    var10 = _closure1_slot4;
                                    var10 = var10.PUSH_NOTIFICATION;
                                    var1.location = var10;
                                    var10 = var8.referenceMessageId;
                                    var1.messageIdFromNotificationExperiment = var10;
                                    var15 = var9;
                                    var13 = var5;
                                    var12 = false;
                                    var11 = var1;
                                    var1 = var15[var7](var14, var13, var12, var11, var10);
                                    SaveGenerator(address = 141);
                                case 139:
                                    return var1;
                                case 141:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun118616_ip = 266;
                                        continue _fun118616
                                    }
                                case 147:
                                    var7 = _closure1_slot5;
                                    var6 = var7.log;
                                    var5 = var1.ok;
                                    var4 = 'Sent message, ok:';
                                    var4 = var6.bind(var7)(var4, var5);
                                    var4 = var1.ok;
                                    if (!var4) {
                                        _fun118616_ip = 249;
                                        continue _fun118616
                                    }
                                case 183:
                                    var3 = _closure1_slot3;
                                    var5 = var3.PushNotificationAndroid;
                                    var4 = var5.handleDirectReplySuccess;
                                    var3 = global;
                                    var7 = var3.JSON;
                                    var6 = var7.stringify;
                                    var3 = {};
                                    var13 = var1.body;
                                    var14 = var3;
                                    var9 = copyDataProperties(var14, var13);
                                    var14 = var3;
                                    var13 = var8;
                                    var8 = copyDataProperties(var14, var13);
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var4.bind(var5)(var3);
                                case 249:
                                    var4 = _closure3_slot0;
                                    var3 = true;
                                    var3 = var4.bind(var2)(var3);
                                    return var2;
                                case 266:
                                    return var1;
                                case 269:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure4_slot0 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure4_slot0 = var1;
                var3 = _closure1_slot5;
                var2 = var3.log;
                var1 = 'Storage loaded';
                var1 = var2.bind(var3)(var1);
                var2 = _closure2_slot0;
                var1 = function(arg0) { // Original name: sendMessage, environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 6;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/DirectReply.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 1346, 3, 15071, 6484, 2]);