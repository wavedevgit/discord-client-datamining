// modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113925: for (var _fun113925_ip = 0;;) switch (_fun113925_ip) {
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
                _fun113925_ip = 76;
                continue _fun113925;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
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
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113929: for (var _fun113929_ip = 0;;) switch (_fun113929_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113929_ip = 86;
                        continue _fun113929
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113929_ip = 120;
                    continue _fun113929;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = false;
                    var0.isShowingAlert = var2;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.showApplicationApprovedAlert;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.showApplicationApprovedAlert;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.GUILD_JOIN_REQUEST_UPDATE = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.showApplicationApprovedAlert;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.CHANNEL_SELECT = var3;
                    var0.actions = var2;
                    var1 = function() { // Environment: var1
                        _fun113933: for (var _fun113933_ip = 0;;) switch (_fun113933_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var0 = var2.getGuildId;
                                var6 = var0.bind(var2)();
                                var _closure4_slot0 = var6;
                                var7 = null;
                                if (!(var7 != var6)) {
                                    _fun113933_ip = 281;
                                    continue _fun113933
                                }
                            case 32:
                                var2 = _closure1_slot9;
                                var0 = var2.getRequest;
                                var8 = var0.bind(var2)(var6);
                                var _closure4_slot1 = var8;
                                var2 = var7 == var8;
                                var0 = undefined;
                                var4 = undefined;
                                if (var2) {
                                    _fun113933_ip = 68;
                                    continue _fun113933
                                }
                            case 62:
                                var4 = var8.applicationStatus;
                            case 68:
                                var5 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var2 = 8;
                                var2 = var9[var2];
                                var2 = var5.bind(var0)(var2);
                                var2 = var2.GuildJoinRequestApplicationStatuses;
                                var2 = var2.APPROVED;
                                if (!(var4 === var2)) {
                                    _fun113933_ip = 279;
                                    continue _fun113933
                                }
                            case 107:
                                var4 = _closure3_slot0;
                                var4 = var4.isShowingAlert;
                                if (!var4) {
                                    _fun113933_ip = 142;
                                    continue _fun113933
                                }
                            case 123:
                                var5 = var7 == var8;
                                var4 = undefined;
                                if (var5) {
                                    _fun113933_ip = 138;
                                    continue _fun113933
                                }
                            case 132:
                                var4 = var8.lastSeen;
                            case 138:
                                if (!(var7 === var4)) {
                                    _fun113933_ip = 237;
                                    continue _fun113933
                                }
                            case 142:
                                var4 = _closure3_slot0;
                                var4 = var4.isShowingAlert;
                                if (var4) {
                                    _fun113933_ip = 159;
                                    continue _fun113933
                                }
                            case 155:
                                var4 = var7 == var8;
                            case 159:
                                if (var4) {
                                    _fun113933_ip = 181;
                                    continue _fun113933
                                }
                            case 162:
                                var9 = var7 == var8;
                                var5 = undefined;
                                if (var9) {
                                    _fun113933_ip = 177;
                                    continue _fun113933
                                }
                            case 171:
                                var5 = var8.lastSeen;
                            case 177:
                                var4 = var7 !== var5;
                            case 181:
                                if (var4) {
                                    _fun113933_ip = 279;
                                    continue _fun113933
                                }
                            case 184:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 9;
                                var4 = var7[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.openMemberVerificationSuccessAlert;
                                var3 = function() { // Environment: var3
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.ackUserGuildJoinRequest;
                                    var2 = _closure4_slot0;
                                    var1 = _closure4_slot1;
                                    var1 = var1.joinRequestId;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var6, var3);
                                var4 = _closure3_slot0;
                                var3 = true;
                                var4.isShowingAlert = var3;
                                _fun113933_ip = 279;
                                continue _fun113933;
                            case 237:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 7;
                                var3 = var5[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.close;
                                var3 = var3.bind(var4)();
                                var3 = _closure3_slot0;
                                var2 = false;
                                var3.isShowingAlert = var2;
                            case 279:
                                return var0;
                            case 281:
                                var2 = _closure3_slot0;
                                var2 = var2.isShowingAlert;
                                if (!var2) {
                                    _fun113933_ip = 341;
                                    continue _fun113933
                                }
                            case 297:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.close;
                                var1 = var1.bind(var2)();
                                var1 = _closure3_slot0;
                                var0 = false;
                                var1.isShowingAlert = var0;
                            case 341:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.showApplicationApprovedAlert = var1;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3214, 3215, 3937, 3217, 7491, 7490, 4299, 2]);