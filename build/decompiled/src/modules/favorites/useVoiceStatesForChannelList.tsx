// modules/favorites/useVoiceStatesForChannelList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/favorites/useVoiceStatesForChannelList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useVoiceStatesForChannelList, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot2;
        var2[1] = var6;
        var1 = _closure1_slot4;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun102288: for (var _fun102288_ip = 0;;) switch (_fun102288_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot5;
                    if (!(var3 === var2)) {
                        _fun102288_ip = 100;
                        continue _fun102288
                    }
                case 18:
                    var3 = _closure1_slot4;
                    var2 = var3.getFavoriteChannels;
                    var3 = var2.bind(var3)();
                    var2 = {};
                    var7 = var3;
                    var3 = null;
                    for (var4 in var7)
                        case 47: {
                            case 56: var10 = var4;
                            var11 = _closure1_slot2;
                            var9 = var11.getChannel;
                            var12 = var9.bind(var11)(var10);
                            if (var3 == var12) {
                                _fun102288_ip = 47;
                                continue _fun102288
                            }
                            case 77: var11 = _closure1_slot3;
                            var9 = var11.getVoiceStatesForChannel;
                            var9 = var9.bind(var11)(var12);
                            var2[var10] = var9;
                            _fun102288_ip = 47;
                            continue _fun102288;
                        }
                case 98:
                    return var2;
                case 100:
                    var2 = _closure1_slot3;
                    var1 = var2.getVoiceStates;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3483, 1375, 660, 566, 2]);