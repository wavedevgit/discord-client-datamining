// modules/guild_scheduled_events/useInterestedEventUsers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventUserResponses;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useInterestedEventUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var9 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var2;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var6 = 3;
        var4 = var8[var6];
        var3 = undefined;
        var13 = var7.bind(var3)(var4);
        var12 = var13.useStateFromStoresArray;
        var4 = _closure1_slot3;
        var11 = new Array(1);
        var11[0] = var4;
        var10 = new Array(1);
        var10[0] = var9;
        var5 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var5 = _closure1_slot3;
            var4 = var5.getUsersForGuildEvent;
            var3 = _closure2_slot0;
            var0 = null;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var12.bind(var13)(var11, var5, var10);
        var _closure2_slot2 = var5;
        var6 = var8[var6];
        var8 = var7.bind(var3)(var6);
        var7 = var8.useStateFromStoresArray;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var2;
        var2 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var5 = _closure1_slot3;
            var4 = var5.getUsersForGuildEvent;
            var3 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var7.bind(var8)(var6, var2, var4);
        var _closure2_slot3 = var4;
        var2 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot3;
            var5 = var3.reduce;
            var4 = function(arg0, arg1) { // Environment: var1
                var0 = arg0;
                var2 = arg1;
                var1 = var2.user_id;
                var0[var1] = var2;
                return var0;
            };
            var2 = {};
            var2 = var5.bind(var3)(var4, var2);
            var _closure3_slot0 = var2;
            var4 = _closure2_slot2;
            var2 = var4.filter;
            var0 = function(arg0) { // Environment: var1
                _fun66271: for (var _fun66271_ip = 0;;) switch (_fun66271_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0.user_id;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun66271_ip = 52;
                            continue _fun66271
                        }
                    case 29:
                        var2 = var1.response;
                        var1 = _closure1_slot4;
                        var1 = var1.INTERESTED;
                        var0 = var2 === var1;
                    case 52:
                        return var0;
                }
            };
            var4 = var2.bind(var4)(var0);
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.response;
                var0 = _closure1_slot4;
                var0 = var0.INTERESTED;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var2.bind(var3)(var0);
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var8 = var2;
            var0 = new var8[var0](var7);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot1 = var0;
            var0 = new Array(0);
            var _closure3_slot2 = var0;
            var2 = function arg0() {
                _fun66273: for (var _fun66273_ip = 0;;) switch (_fun66273_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = _closure3_slot1;
                        var3 = var4.has;
                        var2 = var0.user_id;
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun66273_ip = 63;
                            continue _fun66273
                        }
                    case 29:
                        var3 = _closure3_slot2;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var0);
                        var2 = _closure3_slot1;
                        var1 = var2.add;
                        var0 = var0.user_id;
                        var0 = var1.bind(var2)(var0);
                    case 63:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.forEach;
            var1 = var1.bind(var4)(var2);
            var1 = var3.forEach;
            var1 = var1.bind(var3)(var2);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3334, 1378, 566, 2]);