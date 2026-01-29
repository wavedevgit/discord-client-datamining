// modules/instant_invite/native/useInviteSuggestionRows.tsx
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
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTargetTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP_NULL;
    var _closure1_slot10 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/useInviteSuggestionRows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: _default, environment: var1
        var7 = arg0;
        var3 = arg1;
        var6 = arg2;
        var9 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var6;
        var _closure2_slot3 = var9;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 8;
        var2 = var5[var2];
        var10 = undefined;
        var8 = var4.bind(var10)(var2);
        var5 = var8.useStateFromStores;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot7;
            var0 = var1.getInviteSuggestionRows;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var5.bind(var8)(var4, var2);
        var _closure2_slot4 = var2;
        var5 = _closure1_slot4;
        var8 = var5.useState;
        var4 = true;
        var8 = var8.bind(var5)(var4);
        var4 = _closure1_slot3;
        var1 = 2;
        var8 = var4.bind(var10)(var8, var1);
        var1 = 0;
        var1 = var8[var1];
        var _closure2_slot5 = var1;
        var4 = 1;
        var4 = var8[var4];
        var _closure2_slot6 = var4;
        var8 = var5.useEffect;
        var4 = new Array(5);
        var4[0] = var2;
        var4[1] = var7;
        var4[2] = var1;
        var4[3] = var9;
        var4[4] = var3;
        var3 = function() { // Environment: var0
            _fun67256: for (var _fun67256_ip = 0;;) switch (_fun67256_ip) {
                case 0:
                    var0 = _closure2_slot5;
                    if (var0) {
                        _fun67256_ip = 158;
                        continue _fun67256
                    }
                case 13:
                    var2 = _closure1_slot7;
                    var1 = var2.getInitialCounts;
                    var5 = var1.bind(var2)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot9;
                    var1 = var0.INVITE_SUGGESTION_OPENED;
                    var0 = {};
                    var6 = _closure2_slot1;
                    var0.location = var6;
                    var6 = _closure2_slot4;
                    var6 = var6.length;
                    var0.num_suggestions = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.guild_id;
                    var0.guild_id = var6;
                    var6 = var5.numFriends;
                    var0.num_friends = var6;
                    var6 = var5.numDms;
                    var0.num_dms = var6;
                    var5 = var5.numGroupDms;
                    var0.num_group_dms = var5;
                    var4 = _closure2_slot3;
                    var0.application_id = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 158:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var8.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var0 = function() { // Environment: var0
            _fun67257: for (var _fun67257_ip = 0;;) switch (_fun67257_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot8;
                    var2 = var2.EMBEDDED_APPLICATION;
                    if (!(var3 !== var2)) {
                        _fun67257_ip = 63;
                        continue _fun67257
                    }
                case 37:
                    var4 = _closure1_slot5;
                    var3 = var4.getMemberIds;
                    var2 = _closure2_slot0;
                    var2 = var2.guild_id;
                    var8 = var3.bind(var4)(var2);
                    _fun67257_ip = 67;
                    continue _fun67257;
                case 63:
                    var8 = new Array(0);
                case 67:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.loadInviteSuggestions;
                    var2 = {};
                    var6 = global;
                    var6 = var6.Set;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var11 = var7;
                    var10 = var8;
                    var6 = new var11[var6](var10, var9);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var2.omitUserIds = var6;
                    var9 = _closure1_slot6;
                    var8 = var9.getGuild;
                    var6 = _closure2_slot0;
                    var7 = var6.guild_id;
                    var7 = var8.bind(var9)(var7);
                    var2.guild = var7;
                    var2.channel = var6;
                    var5 = _closure2_slot2;
                    var2.inviteTargetType = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = _closure1_slot10;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot6;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var0.rows = var2;
        var0.isFetchingRows = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1672, 1410, 8304, 3294, 660, 483, 566, 795, 8305, 2]);