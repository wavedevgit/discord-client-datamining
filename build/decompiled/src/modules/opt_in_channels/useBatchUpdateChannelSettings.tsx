// modules/opt_in_channels/useBatchUpdateChannelSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/useBatchUpdateChannelSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 5;
        var3 = var3[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var4 = var6.useStateFromStores;
        var0 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.getPendingChannelUpdates;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var4.bind(var6)(var3, var0);
        var _closure2_slot1 = var0;
        var4 = _closure1_slot3;
        var6 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot7;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var0 = function() { // Environment: var1
            _fun78146: for (var _fun78146_ip = 0;;) switch (_fun78146_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun78146_ip = 58;
                        continue _fun78146
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateOptInChannelsBatched;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                case 58:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0, var2);
        var0 = {};
        var3 = var4.useCallback;
        var2 = function(arg0, arg1, arg2) { // Environment: var1
            _fun78147: for (var _fun78147_ip = 0;;) switch (_fun78147_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var2 = arg2;
                    var3 = _closure1_slot5;
                    var0 = var3.isChannelOptedIn;
                    var5 = var0.bind(var3)(var4, var6);
                    var0 = !var5;
                    if (!var0) {
                        _fun78147_ip = 49;
                        continue _fun78147
                    }
                case 34:
                    var7 = _closure1_slot4;
                    var3 = var7.isCollapsed;
                    var0 = var3.bind(var7)(var2);
                case 49:
                    if (!var0) {
                        _fun78147_ip = 58;
                        continue _fun78147
                    }
                case 52:
                    var3 = null;
                    var0 = var3 != var2;
                case 58:
                    if (!var0) {
                        _fun78147_ip = 94;
                        continue _fun78147
                    }
                case 61:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var7.bind(var0)(var3);
                    var0 = var3.categoryExpand;
                    var0 = var0.bind(var3)(var2);
                case 94:
                    var8 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var3 = 8;
                    var7 = var0[var3];
                    var0 = undefined;
                    var8 = var8.bind(var0)(var7);
                    var7 = var8.hasNotSetUpChannelOptIn;
                    var7 = var7.bind(var8)(var4);
                    if (var7) {
                        _fun78147_ip = 196;
                        continue _fun78147
                    }
                case 130:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.updateOptInChannelsImmediate;
                    var12 = !var5;
                    var5 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.CHANNEL_BROWSER;
                    var5.section = var10;
                    var15 = var9;
                    var14 = var4;
                    var13 = var6;
                    var11 = var5;
                    var5 = var15[var8](var14, var13, var12, var11, var10);
                    _fun78147_ip = 352;
                    continue _fun78147;
                case 196:
                    if (!(var6 !== var2)) {
                        _fun78147_ip = 277;
                        continue _fun78147
                    }
                case 200:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var3];
                    var7 = var5.bind(var0)(var2);
                    var5 = var7.optIntoAllChannelsForExistingMember;
                    var2 = {};
                    var8 = global;
                    var10 = var8.Set;
                    var8 = new Array(1);
                    var8[0] = var6;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var10
                        }
                    });
                    var15 = var9;
                    var14 = var8;
                    var8 = new var15[var10](var14, var13);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var2.exclude = var8;
                    var2 = var5.bind(var7)(var4, var2);
                    _fun78147_ip = 352;
                    continue _fun78147;
                case 277:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var3];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.optIntoAllChannelsForExistingMember;
                    var1 = {};
                    var5 = global;
                    var7 = var5.Set;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var15 = var6;
                    var14 = var5;
                    var5 = new var15[var7](var14, var13);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var1.include = var5;
                    var1 = var2.bind(var3)(var4, var1);
                case 352:
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var0.onChannelClick = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4567, 4303, 660, 806, 566, 4694, 9924, 9916, 2]);