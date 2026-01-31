// modules/channel_following/useChannelFollowerStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var6 = 1;
    var8 = var5[var6];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var8);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.HOUR;
    var3 = var6 * var3;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_following/useChannelFollowerStats.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useChannelFollowerStats, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var3 = var5.useState;
        var1 = false;
        var4 = var3.bind(var5)(var1);
        var3 = _closure1_slot3;
        var7 = undefined;
        var1 = 2;
        var4 = var3.bind(var7)(var4, var1);
        var1 = 0;
        var1 = var4[var1];
        var _closure2_slot1 = var1;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot2 = var3;
        var4 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 4;
        var3 = var8[var3];
        var8 = var4.bind(var7)(var3);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getFollowerStatsForChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var7.bind(var8)(var4, var2, var3);
        var _closure2_slot3 = var2;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var6;
        var3[1] = var2;
        var3[2] = var1;
        var0 = function() { // Environment: var0
            _fun75686: for (var _fun75686_ip = 0;;) switch (_fun75686_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun75686_ip = 55;
                        continue _fun75686
                    }
                case 13:
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot3;
                    var1 = var1.lastFetched;
                    var3 = var3 - var1;
                    var1 = _closure1_slot6;
                    if (!(var3 > var1)) {
                        _fun75686_ip = 115;
                        continue _fun75686
                    }
                case 55:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun75686_ip = 115;
                        continue _fun75686
                    }
                case 62:
                    var3 = _closure2_slot2;
                    var4 = undefined;
                    var1 = true;
                    var1 = var3.bind(var4)(var1);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 5;
                    var1 = var5[var1];
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.fetchChannelFollowerStats;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    _fun75686_ip = 146;
                    continue _fun75686;
                case 115:
                    var1 = _closure2_slot3;
                    var1 = var2 != var1;
                    if (!var1) {
                        _fun75686_ip = 130;
                        continue _fun75686
                    }
                case 126:
                    var1 = _closure2_slot1;
                case 130:
                    if (!var1) {
                        _fun75686_ip = 146;
                        continue _fun75686
                    }
                case 133:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                case 146:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 9572, 667, 566, 9573, 2]);