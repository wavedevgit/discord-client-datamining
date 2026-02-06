// modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun66301: for (var _fun66301_ip = 0;;) switch (_fun66301_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.eventId;
                var10 = var0.event;
                var1 = var0.onClose;
                var7 = var0.recurrenceId;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var3 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var0)(var3, var2);
                var3 = _closure1_slot5;
                var2 = {};
                var2.eventId = var9;
                var2.event = var10;
                var2.onCloseActionSheet = var1;
                var1 = null;
                if (!(var1 == var7)) {
                    _fun66301_ip = 150;
                    continue _fun66301
                }
            case 119:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 6;
                var8 = var11[var8];
                var9 = var9.bind(var0)(var8);
                var8 = var9.getNextRecurrenceIdInEvent;
                var7 = var8.bind(var9)(var10);
            case 150:
                var8 = var1 != var7;
                var1 = undefined;
                if (!var8) {
                    _fun66301_ip = 162;
                    continue _fun66301
                }
            case 159:
                var1 = var7;
            case 162:
                var2.recurrenceId = var1;
                var12 = 'stack';
                var16 = var6;
                var15 = var4;
                var14 = var3;
                var13 = var2;
                var1 = var16[var5](var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun66304: for (var _fun66304_ip = 0;;) switch (_fun66304_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var6 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66304_ip = 100;
                            continue _fun66304
                        }
                    case 13:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.resolve;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 35);
                    case 33:
                        return var1;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun66304_ip = 97;
                            continue _fun66304
                        }
                    case 41:
                        var4 = _closure1_slot6;
                        var3 = {};
                        var5 = var2.id;
                        var3.eventId = var5;
                        var3.event = var2;
                        var2 = null;
                        var7 = var2 == var6;
                        var2 = undefined;
                        var5 = undefined;
                        if (var7) {
                            _fun66304_ip = 84;
                            continue _fun66304
                        }
                    case 78:
                        var5 = var6.recurrenceId;
                    case 84:
                        var3.recurrenceId = var5;
                        var3 = var4.bind(var2)(var3);
                        return var2;
                    case 97:
                        return var1;
                    case 100:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EXPLICIT_END_EVENT_SHEET_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.openGuildEventDetails = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.transitionToEventDetailsFromInvite = var3;
    var1 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 5;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 7;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot4;
        var1 = {};
        var6 = arg0;
        var1.channel = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openEndEventModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1378, 8124, 3280, 8214, 1307, 8111, 8229, 2]);