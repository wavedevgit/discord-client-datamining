// modules/guild_communication_disabled/CommunicationDisabledManager.tsx
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
        _fun90614: for (var _fun90614_ip = 0;;) switch (_fun90614_ip) {
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
                _fun90614_ip = 76;
                continue _fun90614;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.getGuildIdFromCommunicationDisabledUserKey;
    var _closure1_slot8 = var8;
    var7 = var7.getUserIdFromCommunicationDisabledUserKey;
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = null;
    var _closure1_slot12 = var3;
    var3 = function arg0, arg1() {
        _fun90617: for (var _fun90617_ip = 0;;) switch (_fun90617_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var2 = _closure1_slot10;
                var1 = var2.getMember;
                var5 = var1.bind(var2)(var7, var3);
                var2 = _closure1_slot11;
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var3);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun90617_ip = 395;
                    continue _fun90617
                }
            case 49:
                if (!(var4 != var1)) {
                    _fun90617_ip = 395;
                    continue _fun90617
                }
            case 56:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.isMemberCommunicationDisabled;
                var3 = var3.bind(var6)(var5);
                if (var3) {
                    _fun90617_ip = 395;
                    continue _fun90617
                }
            case 95:
                var3 = {};
                var10 = var3;
                var9 = var5;
                var6 = copyDataProperties(var10, var9);
                var6 = 'guildId';
                var3[var6] = var7;
                var7 = var5.nick;
                if (!(var4 == var7)) {
                    _fun90617_ip = 131;
                    continue _fun90617
                }
            case 126:
                var7 = var1.username;
            case 131:
                var6 = 'nick';
                var3[var6] = var7;
                var6 = var5.avatar;
                var8 = var4 != var6;
                var7 = undefined;
                if (!var8) {
                    _fun90617_ip = 158;
                    continue _fun90617
                }
            case 155:
                var7 = var6;
            case 158:
                var6 = 'avatar';
                var3[var6] = var7;
                var6 = var5.avatarDecoration;
                var6 = var4 != var6;
                var7 = undefined;
                if (!var6) {
                    _fun90617_ip = 200;
                    continue _fun90617
                }
            case 182:
                var6 = {};
                var9 = var5.avatarDecoration;
                var10 = var6;
                var8 = copyDataProperties(var10, var9);
                var7 = var6;
            case 200:
                var6 = 'avatarDecoration';
                var3[var6] = var7;
                var6 = var5.premiumSince;
                var8 = var4 != var6;
                var7 = undefined;
                if (!var8) {
                    _fun90617_ip = 227;
                    continue _fun90617
                }
            case 224:
                var7 = var6;
            case 227:
                var6 = 'premiumSince';
                var3[var6] = var7;
                var5 = var5.isPending;
                var6 = var4 != var5;
                if (!var6) {
                    _fun90617_ip = 252;
                    continue _fun90617
                }
            case 249:
                var6 = var5;
            case 252:
                var5 = 'isPending';
                var3[var5] = var6;
                var5 = {};
                var10 = var5;
                var9 = var1;
                var6 = copyDataProperties(var10, var9);
                var6 = var1.email;
                var8 = var4 != var6;
                var7 = undefined;
                if (!var8) {
                    _fun90617_ip = 291;
                    continue _fun90617
                }
            case 288:
                var7 = var6;
            case 291:
                var6 = 'email';
                var5[var6] = var7;
                var1 = var1.phone;
                var7 = var4 != var1;
                var6 = undefined;
                if (!var7) {
                    _fun90617_ip = 318;
                    continue _fun90617
                }
            case 315:
                var6 = var1;
            case 318:
                var1 = 'phone';
                var5[var1] = var6;
                var1 = 'user';
                var3[var1] = var5;
                var1 = 'communicationDisabledUntil';
                var3[var1] = var4;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'GUILD_MEMBER_UPDATE';
                var0.type = var4;
                var10 = var0;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var0 = var1.bind(var2)(var0);
            case 395:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun90619: for (var _fun90619_ip = 0;;) switch (_fun90619_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun90619_ip = 84;
                        continue _fun90619
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun90619_ip = 118;
                    continue _fun90619;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var1 = _closure1_slot13;
                    var0.clearGuildMemberTimeout = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var0 = global;
            var3 = var0.setInterval;
            var0 = undefined;
            var2 = function() { // Environment: var1
                var2 = _closure1_slot10;
                var1 = var2.getCommunicationDisabledUserMap;
                var3 = var1.bind(var2)();
                var _closure4_slot0 = var3;
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var2 = var1.bind(var2)(var3);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun90622: for (var _fun90622_ip = 0;;) switch (_fun90622_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot8;
                            var0 = undefined;
                            var3 = var2.bind(var0)(var5);
                            var2 = _closure1_slot9;
                            var2 = var2.bind(var0)(var5);
                            var4 = _closure4_slot0;
                            var6 = var4[var5];
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 7;
                            var4 = var7[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.isCommunicationDisabled;
                            var4 = var4.bind(var5)(var6);
                            if (var4) {
                                _fun90622_ip = 81;
                                continue _fun90622
                            }
                        case 71:
                            var1 = _closure1_slot13;
                            var1 = var1.bind(var0)(var3, var2);
                        case 81:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = 10000;
            var2 = var3.bind(var0)(var2, var1);
            _closure1_slot12 = var2;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var0 = global;
            var2 = var0.clearInterval;
            var1 = _closure1_slot12;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_communication_disabled/CommunicationDisabledManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1672, 1613, 3071, 806, 4295, 2]);