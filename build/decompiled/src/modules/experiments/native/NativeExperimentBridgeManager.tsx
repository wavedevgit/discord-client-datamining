// modules/experiments/native/NativeExperimentBridgeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun117451: for (var _fun117451_ip = 0;;) switch (_fun117451_ip) {
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
                _fun117451_ip = 76;
                continue _fun117451;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        _fun117454: for (var _fun117454_ip = 0;;) switch (_fun117454_ip) {
            case 0:
                var1 = _closure1_slot7;
                var3 = var1.NSUserDefaultsBridge;
                var4 = null;
                var1 = var4 == var3;
                if (var1) {
                    _fun117454_ip = 32;
                    continue _fun117454
                }
            case 22:
                var2 = var3.setShouldClearChannelNotificationsOnPushAck;
                var1 = var4 == var2;
            case 32:
                if (var1) {
                    _fun117454_ip = 91;
                    continue _fun117454
                }
            case 35:
                var2 = var3.setShouldClearChannelNotificationsOnPushAck;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.shouldClearChannelNotificationsOnPushAck;
                var1 = {};
                var7 = 'NativeExperimentBridgeManager';
                var1.location = var7;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var1);
            case 91:
                var1 = _closure1_slot7;
                var3 = var1.NSUserDefaultsBridge;
                if (!(var4 != var3)) {
                    _fun117454_ip = 163;
                    continue _fun117454
                }
            case 105:
                var2 = var3.setShouldEnableAnimatedReactionUpdates;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.shouldEnableAnimatedReactionUpdates;
                var1 = {};
                var7 = 'NativeExperimentBridgeManager';
                var1.location = var7;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var1);
            case 163:
                var1 = _closure1_slot7;
                var2 = var1.NSUserDefaultsBridge;
                var1 = var4 == var2;
                if (var1) {
                    _fun117454_ip = 190;
                    continue _fun117454
                }
            case 180:
                var3 = var2.setShouldFixPushNotificationRawPayload;
                var1 = var4 == var3;
            case 190:
                if (var1) {
                    _fun117454_ip = 236;
                    continue _fun117454
                }
            case 193:
                var1 = var2.setShouldFixPushNotificationRawPayload;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.isIOSPushNotificationRawPayloadFixExperimentEnabled;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
            case 236:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun117457: for (var _fun117457_ip = 0;;) switch (_fun117457_ip) {
                case 0:
                    var3 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var4)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun117457_ip = 84;
                        continue _fun117457
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var9);
                    _fun117457_ip = 118;
                    continue _fun117457;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var4)(var3);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var4)(var3, var0);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var5 = 9;
                    var1 = var1[var5];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isIOS;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun117457_ip = 204;
                        continue _fun117457
                    }
                case 157:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isAndroid;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun117457_ip = 198;
                        continue _fun117457
                    }
                case 187:
                    var1 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    _fun117457_ip = 202;
                    continue _fun117457;
                case 198:
                    var1 = _closure1_slot10;
                case 202:
                    _fun117457_ip = 208;
                    continue _fun117457;
                case 204:
                    var1 = _closure1_slot9;
                case 208:
                    var0.handleUpdate = var1;
                    var1 = {};
                    var2 = var0.handleUpdate;
                    var1.POST_CONNECTION_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/native/NativeExperimentBridgeManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 27, 14967, 14968, 4253, 478, 4299, 2]);