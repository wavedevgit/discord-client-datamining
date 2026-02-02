// modules/guild_automod/AutomodPermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function arg0() {
        _fun24732: for (var _fun24732_ip = 0;;) switch (_fun24732_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun24732_ip = 73;
                    continue _fun24732
                }
            case 15:
                var1 = global;
                var2 = var1.Set;
                var4 = _closure1_slot4;
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun24733: for (var _fun24733_ip = 0;;) switch (_fun24733_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hasFlag;
                            var6 = _closure2_slot0;
                            var1 = null;
                            var6 = var1 != var6;
                            var1 = 0;
                            if (!var6) {
                                _fun24733_ip = 59;
                                continue _fun24733
                            }
                        case 55:
                            var1 = _closure2_slot0;
                        case 59:
                            var1 = var3.bind(var4)(var1, var2);
                            if (!var1) {
                                _fun24733_ip = 78;
                                continue _fun24733
                            }
                        case 68:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 78:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var6 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                _fun24732_ip = 101;
                continue _fun24732;
            case 73:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var2;
                var1 = new var7[var1](var6);
                var0 = var1 instanceof Object ? var1 : var2;
            case 101:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0() {
        _fun24734: for (var _fun24734_ip = 0;;) switch (_fun24734_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = null;
                var0 = var3 != var1;
                if (!var0) {
                    _fun24734_ip = 56;
                    continue _fun24734
                }
            case 18:
                var1 = var1.flags;
                var1 = var3 != var1;
                if (!var1) {
                    _fun24734_ip = 53;
                    continue _fun24734
                }
            case 30:
                var4 = _closure1_slot4;
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun24735: for (var _fun24735_ip = 0;;) switch (_fun24735_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.hasFlag;
                            var0 = _closure2_slot0;
                            var0 = var0.flags;
                            var1 = null;
                            var4 = var1 != var0;
                            var1 = 0;
                            if (!var4) {
                                _fun24735_ip = 57;
                                continue _fun24735
                            }
                        case 54:
                            var1 = var0;
                        case 57:
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var5);
    var0 = 0;
    var6 = var8[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.GuildMemberFlags;
    var _closure1_slot3 = var6;
    var9 = var6.AUTOMOD_QUARANTINED_BIO;
    var5 = new Array(3);
    var5[0] = var9;
    var9 = var6.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
    var5[1] = var9;
    var6 = var6.AUTOMOD_QUARANTINED_SERVER_TAG;
    var5[2] = var6;
    var _closure1_slot4 = var5;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_automod/AutomodPermissionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.AUTOMOD_QUARANTINED_PROFILE_FLAGS = var5;
    var2.getAutomodQuarantinedProfileFlags = var4;
    var4 = function arg0() {
        _fun24736: for (var _fun24736_ip = 0;;) switch (_fun24736_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun24736_ip = 30;
                    continue _fun24736
                }
            case 9:
                var2 = _closure1_slot5;
                var1 = var0.flags;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                _fun24736_ip = 58;
                continue _fun24736;
            case 30:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var4 = var2;
                var1 = new var4[var1](var3);
                var0 = var1 instanceof Object ? var1 : var2;
            case 58:
                return var0;
        }
    };
    var2.getAutomodQuarantinedGuildMemberFlags = var4;
    var4 = function arg0() {
        _fun24737: for (var _fun24737_ip = 0;;) switch (_fun24737_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.has;
                var0 = _closure1_slot3;
                var0 = var0.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun24737_ip = 101;
                    continue _fun24737
                }
            case 29:
                var2 = var3.has;
                var0 = _closure1_slot3;
                var0 = var0.AUTOMOD_QUARANTINED_BIO;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun24737_ip = 89;
                    continue _fun24737
                }
            case 52:
                var2 = var3.has;
                var0 = _closure1_slot3;
                var0 = var0.AUTOMOD_QUARANTINED_SERVER_TAG;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun24737_ip = 87;
                    continue _fun24737
                }
            case 77:
                var2 = _closure1_slot3;
                var0 = var2.AUTOMOD_QUARANTINED_SERVER_TAG;
            case 87:
                _fun24737_ip = 99;
                continue _fun24737;
            case 89:
                var2 = _closure1_slot3;
                var0 = var2.AUTOMOD_QUARANTINED_BIO;
            case 99:
                _fun24737_ip = 111;
                continue _fun24737;
            case 101:
                var1 = _closure1_slot3;
                var0 = var1.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
            case 111:
                return var0;
        }
    };
    var2.getAutomodReason = var4;
    var2.hasAutomodQuarantinedProfile = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun24739: for (var _fun24739_ip = 0;;) switch (_fun24739_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun24739_ip = 49;
                        continue _fun24739
                    }
                case 16:
                    var3 = _closure1_slot6;
                    var4 = _closure1_slot2;
                    var2 = var4.getSelfMember;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 49:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCurrentUserAutomodQuaratinedProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 3040, 1384, 566, 2]);