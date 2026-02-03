// modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun114221: for (var _fun114221_ip = 0;;) switch (_fun114221_ip) {
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
                _fun114221_ip = 76;
                continue _fun114221;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun114224: for (var _fun114224_ip = 0;;) switch (_fun114224_ip) {
            case 0:
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun114224_ip = 94;
                    continue _fun114224
                }
            case 22:
                var2 = _closure1_slot8;
                var0 = var2.getChannelId;
                var0 = var0.bind(var2)();
                var5 = _closure1_slot7;
                var3 = var5.getDMFromUserId;
                var2 = _closure1_slot10;
                var2 = var3.bind(var5)(var2);
                var3 = var4.hasUrgentMessages;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun114224_ip = 98;
                    continue _fun114224
                }
            case 68:
                if (!(var2 !== var0)) {
                    _fun114224_ip = 98;
                    continue _fun114224
                }
            case 72:
                var2 = _closure1_slot12;
                if (var2) {
                    _fun114224_ip = 94;
                    continue _fun114224
                }
            case 79:
                var2 = true;
                _closure1_slot12 = var2;
                var3 = arg0;
                var2 = undefined;
                var2 = var3.bind(var2)();
            case 94:
                var2 = undefined;
                return var2;
            case 98:
                var2 = _closure1_slot15;
                var1 = {};
                var1.channelId = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun114225: for (var _fun114225_ip = 0;;) switch (_fun114225_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = _closure1_slot9;
                var1 = var3.getCurrentUser;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot7;
                var3 = var5.getDMFromUserId;
                var1 = _closure1_slot10;
                var1 = var3.bind(var5)(var1);
                var2 = var2 === var1;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun114225_ip = 66;
                    continue _fun114225
                }
            case 56:
                var3 = var4.hasUrgentMessages;
                var1 = var3.bind(var4)();
            case 66:
                if (!var1) {
                    _fun114225_ip = 72;
                    continue _fun114225
                }
            case 69:
                var1 = var2;
            case 72:
                if (!var1) {
                    _fun114225_ip = 125;
                    continue _fun114225
                }
            case 75:
                var3 = false;
                _closure1_slot12 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.setFlag;
                var0 = _closure1_slot11;
                var0 = var0.HAS_UNREAD_URGENT_MESSAGES;
                var0 = var1.bind(var2)(var0, var3);
            case 125:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SYSTEM_USER;
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserFlags;
    var _closure1_slot11 = var3;
    var3 = false;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114227: for (var _fun114227_ip = 0;;) switch (_fun114227_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var1);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var4)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun114227_ip = 64;
                        continue _fun114227
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun114227_ip = 102;
                    continue _fun114227;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var1.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var1 = arg0;
                    var0.handleShowUrgentMessageAlert = var1;
                    var1 = {};
                    var4 = function() {
                        var2 = _closure1_slot14;
                        var0 = _closure3_slot0;
                        var1 = var0.handleShowUrgentMessageAlert;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var4;
                    var3 = function() {
                        var2 = _closure1_slot14;
                        var0 = _closure3_slot0;
                        var1 = var0.handleShowUrgentMessageAlert;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.MESSAGE_CREATE = var3;
                    var2 = _closure1_slot15;
                    var1.CHANNEL_SELECT = var2;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1372, 1661, 1613, 14631, 660, 6948, 4295, 2]);