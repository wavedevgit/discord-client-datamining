// modules/guild/usePostableChannelCount.tsx
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/usePostableChannelCount.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107078: for (var _fun107078_ip = 0;;) switch (_fun107078_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun107079: for (var _fun107079_ip = 0;;) switch (_fun107079_ip) {
                        case 0:
                            var3 = _closure1_slot3;
                            var2 = var3.getChannels;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure1_slot4;
                            var0 = var1[var0];
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun107079_ip = 43;
                                continue _fun107079
                            }
                        case 39:
                            var0 = new Array(0);
                        case 43:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var0, var2);
                var2 = var3.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun107078_ip = 106;
                    continue _fun107078
                }
            case 84:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = var0.channel;
                    var2 = _closure1_slot5;
                    var1 = var2.can;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 4;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.combine;
                    var0 = _closure1_slot6;
                    var4 = var0.SEND_MESSAGES;
                    var0 = var0.VIEW_CHANNEL;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = var1.length;
            case 106:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1662, 3050, 660, 566, 484, 2]);