// modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76394: for (var _fun76394_ip = 0;;) switch (_fun76394_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.handleNSFWGuildInvite;
                var2 = var2.bind(var3)(var5);
                if (var2) {
                    _fun76394_ip = 209;
                    continue _fun76394
                }
            case 47:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isGuildScheduledEventInviteEmbed;
                var2 = var2.bind(var3)(var5);
                if (!var2) {
                    _fun76394_ip = 209;
                    continue _fun76394
                }
            case 84:
                var2 = var5.code;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun76394_ip = 209;
                    continue _fun76394
                }
            case 95:
                var7 = _closure1_slot3;
                var6 = var7.getGuildScheduledEvent;
                var8 = var5.guild_scheduled_event;
                var9 = var3 == var8;
                var2 = undefined;
                if (var9) {
                    _fun76394_ip = 125;
                    continue _fun76394
                }
            case 120:
                var2 = var8.id;
            case 125:
                var2 = var6.bind(var7)(var2);
                var _closure2_slot0 = var2;
                if (!(var3 != var2)) {
                    _fun76394_ip = 209;
                    continue _fun76394
                }
            case 138:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.acceptInvite;
                var1 = {};
                var5 = var5.code;
                var1.inviteKey = var5;
                var5 = {};
                var6 = 'Guild Scheduled Event Invite Button Embed';
                var5.location = var6;
                var1.context = var5;
                var4 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.transitionToEventDetailsFromInvite;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.callback = var4;
                var1 = var2.bind(var3)(var1);
            case 209:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3334, 9048, 3333, 5898, 8098, 2]);