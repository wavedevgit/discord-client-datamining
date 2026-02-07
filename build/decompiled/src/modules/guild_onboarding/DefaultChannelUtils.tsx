// modules/guild_onboarding/DefaultChannelUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun41761: for (var _fun41761_ip = 0;;) switch (_fun41761_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun41761_ip = 40;
                    continue _fun41761
                }
            case 9:
                var2 = _closure1_slot5;
                var3 = var2.GUILD_VOCAL;
                var2 = var3.has;
                var0 = var0.type;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun41761_ip = 55;
                    continue _fun41761
                }
            case 40:
                var0 = _closure1_slot6;
                var0 = var0.VIEW_CHANNEL;
                _fun41761_ip = 109;
                continue _fun41761;
            case 55:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.combine;
                var2 = _closure1_slot6;
                var2 = var2.VIEW_CHANNEL;
                var1 = _closure1_slot6;
                var1 = var1.CONNECT;
                var0 = var3.bind(var4)(var2, var1);
            case 109:
                return var0;
        }
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypesSets;
    var _closure1_slot5 = var6;
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/DefaultChannelUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot4;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun41763: for (var _fun41763_ip = 0;;) switch (_fun41763_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var7 = _closure2_slot1;
                    var4 = var2.bind(var3)(var7);
                    var2 = _closure1_slot7;
                    var5 = undefined;
                    var3 = var2.bind(var5)(var4);
                    var6 = _closure1_slot3;
                    var2 = var6.isChannelGated;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var6)(var0, var7);
                    if (var0) {
                        _fun41763_ip = 90;
                        continue _fun41763
                    }
                case 58:
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.canEveryoneRole;
                    var0 = var1.bind(var2)(var3, var4);
                case 90:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanChannelBeDefault = var3;
    var1 = function arg0, arg1() {
        _fun41764: for (var _fun41764_ip = 0;;) switch (_fun41764_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot7;
                var3 = _closure1_slot4;
                var0 = var3.getChannel;
                var0 = var0.bind(var3)(var6);
                var5 = undefined;
                var4 = var2.bind(var5)(var0);
                var3 = _closure1_slot3;
                var2 = var3.isChannelGated;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var6);
                if (var0) {
                    _fun41764_ip = 99;
                    continue _fun41764
                }
            case 53:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.canEveryoneRole;
                var5 = _closure1_slot4;
                var1 = var5.getChannel;
                var1 = var1.bind(var5)(var6);
                var0 = var2.bind(var3)(var4, var1);
            case 99:
                return var0;
        }
    };
    var2.canChannelBeDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1674, 1372, 660, 484, 566, 3098, 2]);