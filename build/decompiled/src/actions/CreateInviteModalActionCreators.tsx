// actions/CreateInviteModalActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2() {
        _fun67533: for (var _fun67533_ip = 0;;) switch (_fun67533_ip) {
            case 0:
                var1 = arg2;
                var4 = this;
                var3 = var1.location;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun67533_ip = 21;
                    continue _fun67533
                }
            case 17:
                var3 = '';
            case 21:
                var8 = var1.targetType;
                var7 = var1.targetUserId;
                var6 = var1.targetApplicationId;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var5 = var2.bind(var0)(var1);
                var2 = var5.dispatch;
                var1 = {};
                var9 = 'CREATE_INVITE_MODAL_INIT';
                var1.type = var9;
                var9 = arg0;
                var1.guildId = var9;
                var9 = arg1;
                var1.channelId = var9;
                var1.targetType = var8;
                var1.targetUserId = var7;
                var1.targetApplicationId = var6;
                var1 = var2.bind(var5)(var1);
                var2 = var4.createInvite;
                var1 = true;
                var1 = var2.bind(var4)(var3, var1);
                return var0;
        }
    };
    var1.init = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot3;
        var0 = var2.getInviteSettings;
        var9 = var0.bind(var2)();
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 2;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.dispatch;
        var2 = {};
        var8 = 'CREATE_INVITE_MODAL_OPEN';
        var2.type = var8;
        var10 = var2;
        var7 = copyDataProperties(var10, var9);
        var8 = arg0;
        var7 = 'guildId';
        var2[var7] = var8;
        var8 = arg1;
        var7 = 'channelId';
        var2[var7] = var8;
        var8 = arg3;
        var7 = 'onClose';
        var2[var7] = var8;
        var2 = var5.bind(var6)(var2);
        var2 = 3;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.OPEN_MODAL;
        var1 = {};
        var5 = 'Instant Invite';
        var1.type = var5;
        var5 = arg2;
        var1.source = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.openSettings = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CREATE_INVITE_MODAL_UPDATE_SETTINGS';
        var1.type = var4;
        var4 = arg0;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateSettings = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CREATE_INVITE_MODAL_RESET_SETTINGS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.resetSettings = var6;
    var6 = function arg0, arg1() {
        _fun67537: for (var _fun67537_ip = 0;;) switch (_fun67537_ip) {
            case 0:
                var3 = _closure1_slot3;
                var1 = var3.getPendingSettings;
                var1 = var1.bind(var3)();
                var14 = null;
                if (!(var14 != var1)) {
                    _fun67537_ip = 300;
                    continue _fun67537
                }
            case 28:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var13 = undefined;
                var5 = var4.bind(var13)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'CREATE_INVITE_MODAL_GENERATE_INVITE';
                var3.type = var6;
                var3 = var4.bind(var5)(var3);
                var5 = var1.channelId;
                var _closure2_slot0 = var5;
                var15 = var1.maxAge;
                var12 = var1.maxUses;
                var11 = var1.temporary;
                var9 = var1.targetType;
                var8 = var1.targetUserId;
                var7 = var1.targetApplicationId;
                var6 = var1.flags;
                var1 = var1.roleIds;
                var4 = _closure1_slot3;
                var3 = var4.getInvite;
                var3 = var3.bind(var4)();
                var4 = arg1;
                var10 = null;
                if (!var4) {
                    _fun67537_ip = 164;
                    continue _fun67537
                }
            case 150:
                var4 = var14 != var3;
                var10 = null;
                if (!var4) {
                    _fun67537_ip = 164;
                    continue _fun67537
                }
            case 159:
                var10 = var3.code;
            case 164:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var4 = var3.bind(var13)(var2);
                var3 = var4.createInvite;
                var2 = {};
                var2.temporary = var11;
                var2.validate = var10;
                var10 = global;
                var14 = var10.parseInt;
                var11 = 10;
                var14 = var14.bind(var13)(var15, var11);
                var2.max_age = var14;
                var10 = var10.parseInt;
                var10 = var10.bind(var13)(var12, var11);
                var2.max_uses = var10;
                var2.target_type = var9;
                var2.target_user_id = var8;
                var2.target_application_id = var7;
                var2.flags = var6;
                var2.role_ids = var1;
                var1 = arg0;
                var3 = var3.bind(var4)(var5, var2, var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    _fun67539: for (var _fun67539_ip = 0;;) switch (_fun67539_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 5;
                            var4 = var7[var3];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.t;
                            var3 = var3.WB1ip6;
                            var4 = var4.bind(var5)(var3);
                            var5 = null;
                            var6 = var5 == var2;
                            var3 = undefined;
                            if (var6) {
                                _fun67539_ip = 81;
                                continue _fun67539
                            }
                        case 76:
                            var3 = var2.message;
                        case 81:
                            if (!(var5 != var3)) {
                                _fun67539_ip = 90;
                                continue _fun67539
                            }
                        case 85:
                            var4 = var2.message;
                        case 90:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 2;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE';
                            var1.type = var5;
                            var1.message = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 300:
                var0 = undefined;
                return var0;
        }
    };
    var1.createInvite = var6;
    var3 = function() {
        _fun67540: for (var _fun67540_ip = 0;;) switch (_fun67540_ip) {
            case 0:
                var1 = _closure1_slot3;
                var1 = var1.onClose;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CREATE_INVITE_MODAL_CLOSE';
                var2.type = var5;
                var2 = var3.bind(var4)(var2);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun67540_ip = 65;
                    continue _fun67540
                }
            case 61:
                var1 = var1.bind(var0)();
            case 65:
                return var0;
        }
    };
    var1.close = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/CreateInviteModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8357, 660, 806, 795, 5906, 1234, 2]);