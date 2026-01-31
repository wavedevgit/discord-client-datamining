// modules/messages/native/MessageSendFailureNotificationManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun117436: for (var _fun117436_ip = 0;;) switch (_fun117436_ip) {
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
            case 72: // try_end0
                _fun117436_ip = 76;
                continue _fun117436;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: handleMessageSendFailure, environment: var1
        _fun117439: for (var _fun117439_ip = 0;;) switch (_fun117439_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var5 = var0.messageId;
                var0 = var0.shouldNotify;
                if (!var0) {
                    _fun117439_ip = 370;
                    continue _fun117439
                }
            case 25:
                var1 = _closure1_slot11;
                var0 = var1.getState;
                var1 = var0.bind(var1)();
                var0 = 'active';
                if (!(var0 === var1)) {
                    _fun117439_ip = 192;
                    continue _fun117439
                }
            case 53:
                var1 = _closure1_slot9;
                var0 = var1.getGuildId;
                var2 = var0.bind(var1)();
                var1 = _closure1_slot8;
                var0 = var1.getChannelId;
                var0 = var0.bind(var1)(var2);
                if (!(var6 !== var0)) {
                    _fun117439_ip = 188;
                    continue _fun117439
                }
            case 86:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.enqueueNotification;
                var0 = {};
                var3 = _closure1_slot12;
                var3 = var3.MESSAGE_FAILED_TO_SEND;
                var0.type = var3;
                var0.channelId = var6;
                var0.messageId = var5;
                var3 = '-';
                var3 = var6 + var3;
                var3 = var3 + var5;
                var0.key = var3;
                var3 = 5000;
                var0.duration = var3;
                var3 = function() { // Original name: onDismiss, environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearNotification;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.onDismiss = var3;
                var0 = var1.bind(var2)(var0);
                _fun117439_ip = 370;
                continue _fun117439;
            case 188:
                var0 = undefined;
                return var0;
            case 192:
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 12;
                var0 = var11[var0];
                var10 = undefined;
                var2 = var1.bind(var10)(var0);
                var1 = var2.presentLocalNotification;
                var0 = {};
                var3 = 'local';
                var0.category = var3;
                var9 = _closure1_slot0;
                var3 = 13;
                var7 = var11[var3];
                var7 = var9.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var3];
                var7 = var9.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.LdlH2M;
                var7 = var8.bind(var12)(var7);
                var0.alertTitle = var7;
                var7 = var11[var3];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var3 = var11[var3];
                var3 = var9.bind(var10)(var3);
                var3 = var3.t;
                var3 = var3.xxRPOT;
                var3 = var7.bind(var8)(var3);
                var0.alertBody = var3;
                var3 = {};
                var3.channelId = var6;
                var3.messageId = var5;
                var4 = _closure1_slot14;
                var4 = var4.MESSAGE_SEND_FAILED;
                var3.type = var4;
                var0.userInfo = var3;
                var0 = var1.bind(var2)(var0);
            case 370:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: handleMessageCreate, environment: var1
        _fun117441: for (var _fun117441_ip = 0;;) switch (_fun117441_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.message;
                var _closure2_slot0 = var4;
                var2 = var1.sendMessageOptions;
                var5 = null;
                var1 = var5 != var2;
                if (!var1) {
                    _fun117441_ip = 35;
                    continue _fun117441
                }
            case 29:
                var1 = var2.isHydratingExpiredPendingMessage;
            case 35:
                if (!var1) {
                    _fun117441_ip = 60;
                    continue _fun117441
                }
            case 38:
                var3 = var4.state;
                var2 = _closure1_slot13;
                var2 = var2.SEND_FAILED;
                var1 = var3 === var2;
            case 60:
                if (!var1) {
                    _fun117441_ip = 117;
                    continue _fun117441
                }
            case 63:
                var3 = _closure1_slot10;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                var7 = var5 == var6;
                var2 = undefined;
                if (var7) {
                    _fun117441_ip = 93;
                    continue _fun117441
                }
            case 88:
                var2 = var6.id;
            case 93:
                var4 = var4.author;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun117441_ip = 113;
                    continue _fun117441
                }
            case 108:
                var3 = var4.id;
            case 113:
                var1 = var2 === var3;
            case 117:
                if (!var1) {
                    _fun117441_ip = 149;
                    continue _fun117441
                }
            case 120:
                var1 = global;
                var3 = var1.setTimeout;
                var2 = undefined;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot16;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var3 = var0.channel_id;
                    var1.channelId = var3;
                    var0 = var0.id;
                    var1.messageId = var0;
                    var0 = true;
                    var1.shouldNotify = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = 3000;
                var0 = var3.bind(var2)(var1, var0);
            case 149:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.InAppNotificationTypes;
    var _closure1_slot12 = var7;
    var3 = var3.MessageStates;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.LocalNotificationTypes;
    var _closure1_slot14 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: MessageSendFailureNotificationManager, environment: var0
            _fun117444: for (var _fun117444_ip = 0;;) switch (_fun117444_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117444_ip = 84;
                        continue _fun117444
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117444_ip = 118;
                    continue _fun117444;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot17;
                    var1.MESSAGE_CREATE = var3;
                    var2 = _closure1_slot16;
                    var1.MESSAGE_SEND_FAILED = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/MessageSendFailureNotificationManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1661, 3172, 1613, 5246, 660, 12434, 8688, 8572, 1234, 4263, 2]);