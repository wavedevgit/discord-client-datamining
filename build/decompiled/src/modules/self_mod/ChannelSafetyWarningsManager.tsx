// modules/self_mod/ChannelSafetyWarningsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun112841: for (var _fun112841_ip = 0;;) switch (_fun112841_ip) {
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
                _fun112841_ip = 76;
                continue _fun112841;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun112844: for (var _fun112844_ip = 0;;) switch (_fun112844_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun112844_ip = 258;
                    continue _fun112844
                }
            case 17:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var6 = var5.bind(var3)(var2);
                var5 = var6.isEligibleForInappropriateConversationWarning;
                var2 = {};
                var7 = 'channel_select';
                var2.location = var7;
                var2 = var5.bind(var6)(var2);
                if (var2) {
                    _fun112844_ip = 72;
                    continue _fun112844
                }
            case 68:
                var2 = false;
                return var2;
            case 72:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 8;
                var2 = var2[var7];
                var5 = var5.bind(var3)(var2);
                var2 = var5.getSafetyAlertsSettingOrDefault;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun112844_ip = 109;
                    continue _fun112844
                }
            case 105:
                var2 = false;
                return var2;
            case 109:
                var5 = _closure1_slot7;
                var2 = var5.getChannel;
                var6 = var2.bind(var5)(var4);
                if (!(var0 != var6)) {
                    _fun112844_ip = 254;
                    continue _fun112844
                }
            case 130:
                var2 = var6.isDM;
                var2 = var2.bind(var6)();
                if (!var2) {
                    _fun112844_ip = 254;
                    continue _fun112844
                }
            case 143:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var5 = var5.bind(var3)(var2);
                var2 = var5.getInappropriateConversationTakeoverForChannel;
                var5 = var2.bind(var5)(var4);
                var0 = var0 != var5;
                if (!var0) {
                    _fun112844_ip = 252;
                    continue _fun112844
                }
            case 178:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 9;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.showTakeoverModal;
                var1 = {};
                var7 = var5.id;
                var1.warningId = var7;
                var5 = var5.type;
                var1.warningType = var5;
                var5 = var6.getRecipientId;
                var5 = var5.bind(var6)();
                var1.senderId = var5;
                var1.channelId = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 252:
                return var0;
            case 254:
                var0 = false;
                return var0;
            case 258:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun112845: for (var _fun112845_ip = 0;;) switch (_fun112845_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channels;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var6 = var4.bind(var3)(var0);
                var4 = var6.isEligibleForInappropriateConversationWarning;
                var0 = {};
                var7 = 'channel_updates';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                if (var0) {
                    _fun112845_ip = 68;
                    continue _fun112845
                }
            case 64:
                var0 = false;
                return var0;
            case 68:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 8;
                var0 = var0[var6];
                var4 = var4.bind(var3)(var0);
                var0 = var4.getSafetyAlertsSettingOrDefault;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun112845_ip = 105;
                    continue _fun112845
                }
            case 101:
                var0 = false;
                return var0;
            case 105:
                var4 = _closure1_slot8;
                var0 = var4.getCurrentlySelectedChannelId;
                var4 = var0.bind(var4)();
                _closure2_slot0 = var4;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun112845_ip = 300;
                    continue _fun112845
                }
            case 132:
                var4 = var5.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var4.bind(var5)(var2);
                if (!(var0 != var4)) {
                    _fun112845_ip = 296;
                    continue _fun112845
                }
            case 156:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var6 = var5.bind(var3)(var2);
                var5 = var6.getInappropriateConversationTakeoverForChannel;
                var2 = var4.id;
                var5 = var5.bind(var6)(var2);
                var2 = var0 == var5;
                if (var2) {
                    _fun112845_ip = 209;
                    continue _fun112845
                }
            case 196:
                var0 = var4.isDM;
                var0 = var0.bind(var4)();
                var2 = !var0;
            case 209:
                var0 = !var2;
                if (var2) {
                    _fun112845_ip = 294;
                    continue _fun112845
                }
            case 215:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 9;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.showTakeoverModal;
                var1 = {};
                var6 = var5.id;
                var1.warningId = var6;
                var5 = var5.type;
                var1.warningType = var5;
                var5 = var4.getRecipientId;
                var5 = var5.bind(var4)();
                var1.senderId = var5;
                var4 = var4.id;
                var1.channelId = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 294:
                return var0;
            case 296:
                var0 = false;
                return var0;
            case 300:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun112848: for (var _fun112848_ip = 0;;) switch (_fun112848_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun112848_ip = 84;
                        continue _fun112848
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun112848_ip = 118;
                    continue _fun112848;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot10;
                    var1.CHANNEL_SELECT = var3;
                    var2 = _closure1_slot11;
                    var1.CHANNEL_UPDATES = var2;
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
    var3 = 'modules/self_mod/ChannelSafetyWarningsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1372, 1661, 8956, 9003, 14444, 4265, 2]);