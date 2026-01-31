// modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: canEveryoneRoleViewEvent, environment: var4
        _fun65960: for (var _fun65960_ip = 0;;) switch (_fun65960_ip) {
            case 0:
                var2 = arg0;
                var3 = arguments[1];
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun65960_ip = 30;
                    continue _fun65960
                }
            case 12:
                var1 = _closure1_slot4;
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 30:
                var1 = var3;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var4 = var1().value;
                var1 = var0;
                var1 = var1 === var5;
                var3 = undefined;
                if (var1) {
                    _fun65960_ip = 55;
                    continue _fun65960
                }
            case 52:
                var3 = var4;
            case 55:
                if (var1) {
                    _fun65960_ip = 61;
                    continue _fun65960
                }
            case 58:
                var0.return();
            case 61:
                var0 = 'entity_type';
                var1 = var0 in var2;
                var0 = var2;
                if (!var1) {
                    _fun65960_ip = 100;
                    continue _fun65960
                }
            case 75:
                var1 = {};
                var4 = var2.entity_type;
                var1.entityType = var4;
                var2 = var2.channel_id;
                var1.channelId = var2;
                var0 = var1;
            case 100:
                var4 = var0.entityType;
                var2 = var0.channelId;
                var0 = _closure1_slot9;
                var0 = var0.EXTERNAL;
                if (!(var4 !== var0)) {
                    _fun65960_ip = 191;
                    continue _fun65960
                }
            case 128:
                var0 = var3.getChannel;
                var4 = var0.bind(var3)(var2);
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun65960_ip = 189;
                    continue _fun65960
                }
            case 147:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.canEveryoneRole;
                var1 = _closure1_slot10;
                var1 = var1.VIEW_CHANNEL;
                var0 = var2.bind(var3)(var1, var4);
            case 189:
                return var0;
            case 191:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var1 = function(arg0) { // Original name: isGuildEventInvitable, environment: var4
        _fun65961: for (var _fun65961_ip = 0;;) switch (_fun65961_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun65961_ip = 54;
                    continue _fun65961
                }
            case 12:
                var3 = _closure1_slot5;
                var0 = new Array(4);
                var0[0] = var3;
                var3 = _closure1_slot4;
                var0[1] = var3;
                var3 = _closure1_slot6;
                var0[2] = var3;
                var2 = _closure1_slot3;
                var0[3] = var2;
                var1 = var0;
            case 54:
                var2 = var1;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var3 = var2().value;
                var1 = var0;
                var1 = var1 === var4;
                var11 = undefined;
                if (var1) {
                    _fun65961_ip = 79;
                    continue _fun65961
                }
            case 76:
                var11 = var3;
            case 79:
                var6 = undefined;
                if (var1) {
                    _fun65961_ip = 109;
                    continue _fun65961
                }
            case 84:
                var7 = var2().value;
                var3 = var0;
                var3 = var3 === var4;
                var6 = undefined;
                var1 = var3;
                if (var3) {
                    _fun65961_ip = 109;
                    continue _fun65961
                }
            case 103:
                var6 = var7;
                var1 = var3;
            case 109:
                var9 = undefined;
                if (var1) {
                    _fun65961_ip = 139;
                    continue _fun65961
                }
            case 114:
                var7 = var2().value;
                var3 = var0;
                var3 = var3 === var4;
                var9 = undefined;
                var1 = var3;
                if (var3) {
                    _fun65961_ip = 139;
                    continue _fun65961
                }
            case 133:
                var9 = var7;
                var1 = var3;
            case 139:
                var7 = undefined;
                if (var1) {
                    _fun65961_ip = 169;
                    continue _fun65961
                }
            case 144:
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var4;
                var7 = undefined;
                var1 = var2;
                if (var2) {
                    _fun65961_ip = 169;
                    continue _fun65961
                }
            case 163:
                var7 = var3;
                var1 = var2;
            case 169:
                if (var1) {
                    _fun65961_ip = 175;
                    continue _fun65961
                }
            case 172:
                var0.return();
            case 175:
                var0 = _closure1_slot8;
                var0 = var0.bind(var4)(var5);
                if (var0) {
                    _fun65961_ip = 353;
                    continue _fun65961
                }
            case 193:
                var8 = var5.guild_id;
                var1 = var5.channel_id;
                var3 = var5.entity_type;
                var0 = _closure1_slot9;
                var0 = var0.EXTERNAL;
                if (!(var3 !== var0)) {
                    _fun65961_ip = 235;
                    continue _fun65961
                }
            case 223:
                var0 = var6.getChannel;
                var3 = var0.bind(var6)(var1);
                _fun65961_ip = 251;
                continue _fun65961;
            case 235:
                var10 = var11.getDefaultChannel;
                var0 = var5.guild_id;
                var3 = var10.bind(var11)(var0);
            case 251:
                var0 = var9.getGuild;
                var14 = var0.bind(var9)(var8);
                var0 = var7.getStageInstanceByChannel;
                var12 = var0.bind(var7)(var1);
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var7 = var1.bind(var4)(var0);
                var1 = var7.canViewInviteModal;
                var15 = _closure1_slot7;
                var16 = var7;
                var13 = var3;
                var0 = var16[var1](var15, var14, var13, var12, var11);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun65961_ip = 351;
                    continue _fun65961
                }
            case 321:
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun65961_ip = 348;
                    continue _fun65961
                }
            case 330:
                var3 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = var3.bind(var4)(var5, var2);
            case 348:
                var0 = var1;
            case 351:
                return var0;
            case 353:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.isGuildEventEnded;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildScheduledEventEntityTypes;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Permissions;
    var _closure1_slot10 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: useCanInviteForGuildEvent, environment: var4
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot5;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var6 = _closure1_slot6;
        var2[2] = var6;
        var1 = _closure1_slot3;
        var2[3] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot12;
            var2 = _closure2_slot0;
            var4 = _closure1_slot5;
            var1 = new Array(4);
            var1[0] = var4;
            var4 = _closure1_slot4;
            var1[1] = var4;
            var4 = _closure1_slot6;
            var1[2] = var4;
            var0 = _closure1_slot3;
            var1[3] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var4;
    var2.canEveryoneRoleViewEvent = var3;
    var2.isGuildEventInvitable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1377, 1372, 1662, 1410, 3050, 3293, 1378, 660, 3055, 8127, 566, 2]);