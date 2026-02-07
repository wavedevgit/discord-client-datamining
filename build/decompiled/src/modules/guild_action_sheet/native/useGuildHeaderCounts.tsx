// modules/guild_action_sheet/native/useGuildHeaderCounts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        var7 = arg0;
        var2 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var4;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.throttle;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = _closure2_slot0;
                var1.type = var5;
                var5 = arg0;
                var1.count = var5;
                var4 = _closure2_slot1;
                var1.guildId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = 3000;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var5.bind(var6)(var2, var3);
        var _closure2_slot3 = var5;
        var7 = _closure1_slot3;
        var6 = var7.useEffect;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var1 = _closure2_slot3;
                var0 = var1.cancel;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var2 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun97122: for (var _fun97122_ip = 0;;) switch (_fun97122_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = 0;
                    if (!(var2 > var1)) {
                        _fun97122_ip = 28;
                        continue _fun97122
                    }
                case 13:
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/useGuildHeaderCounts.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var0 = function arg0() {
            var9 = arg0;
            var _closure3_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var6 = var5[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() { // Environment: var0
                _fun97125: for (var _fun97125_ip = 0;;) switch (_fun97125_ip) {
                    case 0:
                        var2 = _closure1_slot4;
                        var1 = var2.getMemberCount;
                        var0 = _closure3_slot0;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var2 = var0 != var1;
                        var0 = 0;
                        if (!var2) {
                            _fun97125_ip = 39;
                            continue _fun97125
                        }
                    case 36:
                        var0 = var1;
                    case 39:
                        return var0;
                }
            };
            var8 = var8.bind(var10)(var7, var6);
            var7 = _closure1_slot6;
            var6 = 'GUILD_HEADER_MEMBER_COUNT';
            var6 = var7.bind(var3)(var6, var9, var8);
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useStateFromStores;
            var4 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot5;
                var1 = var2.getMemberCount;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = undefined;
        var3 = var0.bind(var5)(var2);
        var0 = function arg0() {
            var9 = arg0;
            var _closure3_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var6 = var5[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() { // Environment: var0
                _fun97128: for (var _fun97128_ip = 0;;) switch (_fun97128_ip) {
                    case 0:
                        var2 = _closure1_slot4;
                        var1 = var2.getOnlineCount;
                        var0 = _closure3_slot0;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var2 = var0 != var1;
                        var0 = 0;
                        if (!var2) {
                            _fun97128_ip = 39;
                            continue _fun97128
                        }
                    case 36:
                        var0 = var1;
                    case 39:
                        return var0;
                }
            };
            var8 = var8.bind(var10)(var7, var6);
            var7 = _closure1_slot6;
            var6 = 'GUILD_HEADER_ONLINE_COUNT';
            var6 = var7.bind(var3)(var6, var9, var8);
            var2 = var5[var2];
            var3 = var4.bind(var3)(var2);
            var2 = var3.useStateFromStores;
            var4 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot5;
                var1 = var2.getOnlineCount;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = var0.bind(var5)(var2);
        var0 = {};
        var0.memberCount = var3;
        var0.onlineCount = var2;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 5;
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.getActiveChannelsCount;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        var0.activeChannelsCount = var1;
        return var0;
    };
    var2.useGuildHeaderCounts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1599, 12654, 22, 806, 566, 2]);