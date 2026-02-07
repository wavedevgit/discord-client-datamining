// modules/friend_invites/native/FriendInviteUtils.tsx
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
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var0 = var1[var0];
            var1 = undefined;
            var0 = var2.bind(var1)(var0);
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/friend_invites/native/FriendInviteUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 7;
    var2.DEFAULT_EXPIRATION_DAYS = var3;
    var3 = 5;
    var2.DEFAULT_EXPIRATION_USES = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.revokeFriendInvites;
        var3 = var1.bind(var2)();
        var2 = var3.then;
        var1 = function() { // Environment: var1
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 3;
            var1 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var1);
            var2 = var3.open;
            var1 = {};
            var7 = 'TOAST_FRIEND_INVITES_REVOKED';
            var1.key = var7;
            var9 = _closure1_slot0;
            var4 = 4;
            var7 = var6[var4];
            var7 = var9.bind(var0)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var6[var4];
            var4 = var9.bind(var0)(var4);
            var4 = var4.t;
            var4 = var4.jSHEOQ;
            var4 = var7.bind(var8)(var4);
            var1.content = var4;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var1.icon = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.revokeAllFriendInvites = var3;
    var1 = function arg0, arg1() {
        _fun113132: for (var _fun113132_ip = 0;;) switch (_fun113132_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var0 = var6.channel;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun113132_ip = 219;
                    continue _fun113132
                }
            case 23:
                var0 = var6.guild;
                if (!(var1 == var0)) {
                    _fun113132_ip = 219;
                    continue _fun113132
                }
            case 35:
                var0 = var6.inviter;
                if (!(var1 != var0)) {
                    _fun113132_ip = 219;
                    continue _fun113132
                }
            case 48:
                var4 = _closure1_slot4;
                var3 = var4.isFriend;
                var2 = var6.inviter;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var4 = null;
                if (!var2) {
                    _fun113132_ip = 108;
                    continue _fun113132
                }
            case 82:
                var7 = _closure1_slot3;
                var3 = var7.getDMFromUserId;
                var2 = var6.inviter;
                var2 = var2.id;
                var4 = var3.bind(var7)(var2);
            case 108:
                if (!(var1 == var4)) {
                    _fun113132_ip = 178;
                    continue _fun113132
                }
            case 112:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.acceptInviteAndTransitionToInviteChannel;
                var1 = {};
                var6 = var6.code;
                var1.inviteKey = var6;
                var6 = arg1;
                var1.context = var6;
                var5 = function() {
                    _fun113133: for (var _fun113133_ip = 0;;) switch (_fun113133_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 3;
                            var2 = var9[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var5 = 'FRIEND_INVITE_ACCEPT_CONFIRMATION';
                            var2.key = var5;
                            var6 = _closure1_slot0;
                            var5 = 4;
                            var7 = var9[var5];
                            var7 = var6.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var5 = var9[var5];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.t;
                            var6 = var5.st2dcs;
                            var5 = {};
                            var9 = _closure2_slot0;
                            var10 = var9.inviter;
                            var9 = null;
                            var11 = var9 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun113133_ip = 122;
                                continue _fun113133
                            }
                        case 117:
                            var9 = var10.username;
                        case 122:
                            var5.username = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var2.content = var5;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 5;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var2.icon = var5;
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure1_slot5;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var1.callback = var5;
                var1 = var2.bind(var3)(var1);
                _fun113132_ip = 219;
                continue _fun113132;
            case 178:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.transitionToInviteChannelSync;
                var2 = var2.bind(var3)(var4);
                var0 = _closure1_slot5;
                var0 = var0.bind(var1)();
            case 219:
                var0 = undefined;
                return var0;
        }
    };
    var2.acceptFriendInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3102, 5949, 3150, 1234, 8018, 806, 7807, 2]);