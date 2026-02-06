// modules/instant_invite/InviteTypeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var7 = function arg0() {
        _fun28765: for (var _fun28765_ip = 0;;) switch (_fun28765_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = _closure1_slot5;
                var0 = var0.GROUP_DM;
                var0 = var1 === var0;
                if (var0) {
                    _fun28765_ip = 66;
                    continue _fun28765
                }
            case 28:
                var4 = var2.channel;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun28765_ip = 63;
                    continue _fun28765
                }
            case 42:
                var4 = _closure1_slot3;
                var2 = var2.channel;
                var3 = var2.type;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 63:
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function arg0() {
        _fun28766: for (var _fun28766_ip = 0;;) switch (_fun28766_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild_scheduled_event;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun28766_ip = 32;
                    continue _fun28766
                }
            case 18:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 32:
                return var0;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function arg0() {
        _fun28767: for (var _fun28767_ip = 0;;) switch (_fun28767_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = _closure1_slot5;
                var0 = var0.FRIEND;
                var0 = var1 === var0;
                if (var0) {
                    _fun28767_ip = 55;
                    continue _fun28767
                }
            case 28:
                var1 = var2.guild;
                var3 = null;
                var1 = var3 == var1;
                if (!var1) {
                    _fun28767_ip = 52;
                    continue _fun28767
                }
            case 42:
                var2 = var2.inviter;
                var1 = var3 != var2;
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.target_type;
        var0 = _closure1_slot4;
        var0 = var0.EMBEDDED_APPLICATION;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot10 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var11[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var3 = var3.isEventUpcoming;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var11[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var3.isMultiUserDM;
    var _closure1_slot3 = var3;
    var3 = 2;
    var8 = var11[var3];
    var8 = var10.bind(var0)(var8);
    var9 = var8.InviteTargetTypes;
    var _closure1_slot4 = var9;
    var8 = var8.InviteTypes;
    var _closure1_slot5 = var8;
    var3 = var11[var3];
    var3 = var10.bind(var0)(var3);
    var8 = var3.InviteTypes;
    var3 = {};
    var9 = 'event';
    var3.EVENT = var9;
    var9 = 'application';
    var3.APPLICATION = var9;
    var9 = 'profile';
    var3.PROFILE = var9;
    var9 = 'default';
    var3.DEFAULT = var9;
    var _closure1_slot6 = var3;
    var9 = 4;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/instant_invite/InviteTypeUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.InviteTypes = var8;
    var2.isGroupDMInvite = var7;
    var2.isGuildScheduledEventInviteEmbed = var6;
    var6 = function arg0() {
        var0 = arg0;
        var1 = var0.target_type;
        var0 = _closure1_slot4;
        var0 = var0.ROLE_SUBSCRIPTIONS_PURCHASE;
        var0 = var1 === var0;
        return var0;
    };
    var2.isRoleSubscriptionInvite = var6;
    var6 = function arg0() {
        _fun28770: for (var _fun28770_ip = 0;;) switch (_fun28770_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.target_type;
                var0 = _closure1_slot4;
                var0 = var0.STREAM;
                var0 = var2 === var0;
                if (!var0) {
                    _fun28770_ip = 41;
                    continue _fun28770
                }
            case 29:
                var2 = var1.target_user;
                var1 = null;
                var0 = var1 != var2;
            case 41:
                return var0;
        }
    };
    var2.isStreamInvite = var6;
    var2.isFriendInvite = var5;
    var2.isEmbeddedApplicationInvite = var4;
    var4 = function arg0() {
        _fun28771: for (var _fun28771_ip = 0;;) switch (_fun28771_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.type;
                var2 = 'number';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun28771_ip = 80;
                    continue _fun28771
                }
            case 19:
                var0 = _closure1_slot7;
                var3 = undefined;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun28771_ip = 68;
                    continue _fun28771
                }
            case 36:
                var0 = _closure1_slot9;
                var0 = var0.bind(var3)(var1);
                var3 = _closure1_slot5;
                if (var0) {
                    _fun28771_ip = 60;
                    continue _fun28771
                }
            case 52:
                var0 = var3.GUILD;
                _fun28771_ip = 66;
                continue _fun28771;
            case 60:
                var0 = var3.FRIEND;
            case 66:
                _fun28771_ip = 78;
                continue _fun28771;
            case 68:
                var2 = _closure1_slot5;
                var0 = var2.GROUP_DM;
            case 78:
                _fun28771_ip = 85;
                continue _fun28771;
            case 80:
                var0 = var1.type;
            case 85:
                return var0;
        }
    };
    var2.getInviteType = var4;
    var2.GuildInviteExtendedType = var3;
    var1 = function arg0() {
        _fun28772: for (var _fun28772_ip = 0;;) switch (_fun28772_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot8;
                var4 = undefined;
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun28772_ip = 98;
                    continue _fun28772
                }
            case 20:
                var0 = _closure1_slot10;
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun28772_ip = 86;
                    continue _fun28772
                }
            case 32:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.guildInviteCanEmbedProfile;
                var0 = var0.bind(var2)(var3);
                var2 = _closure1_slot6;
                if (var0) {
                    _fun28772_ip = 78;
                    continue _fun28772
                }
            case 70:
                var0 = var2.DEFAULT;
                _fun28772_ip = 84;
                continue _fun28772;
            case 78:
                var0 = var2.PROFILE;
            case 84:
                _fun28772_ip = 96;
                continue _fun28772;
            case 86:
                var2 = _closure1_slot6;
                var0 = var2.APPLICATION;
            case 96:
                _fun28772_ip = 108;
                continue _fun28772;
            case 98:
                var1 = _closure1_slot6;
                var0 = var1.EVENT;
            case 108:
                return var0;
        }
    };
    var2.getGuildInviteExtendedType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3336, 1376, 3337, 3338, 2]);