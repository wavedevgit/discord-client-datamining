// modules/stage_channels/useIsOnStartStageScreenStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: setIsOnStartStageScreen, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot6;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isOnStartStageScreen = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var7[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.create;
    var4 = function() { // Environment: var1
        var0 = {};
        var1 = true;
        var0.isOnStartStageScreen = var1;
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useIsOnStartStageScreenStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.setIsOnStartStageScreen = var3;
    var1 = function(arg0) { // Original name: useUpdateIsOnStartStageScreenEffect, environment: var1
        _fun51701: for (var _fun51701_ip = 0;;) switch (_fun51701_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var6 = var8[var4];
                var0 = undefined;
                var10 = var5.bind(var0)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getVoiceChannelId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var9.bind(var10)(var7, var6);
                var _closure2_slot1 = var6;
                var4 = var8[var4];
                var10 = var5.bind(var0)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var4;
                var5 = new Array(1);
                var5[0] = var3;
                var4 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var1);
                    var1 = var0.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var9.bind(var10)(var7, var4, var5);
                var7 = _closure1_slot1;
                var5 = 7;
                var5 = var8[var5];
                var5 = var7.bind(var0)(var5);
                var3 = var3.id;
                var3 = var5.bind(var0)(var3);
                var5 = var4;
                if (!var5) {
                    _fun51701_ip = 147;
                    continue _fun51701
                }
            case 144:
                var5 = !var3;
            case 147:
                var _closure2_slot2 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun51704: for (var _fun51704_ip = 0;;) switch (_fun51704_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun51704_ip = 30;
                                continue _fun51704
                            }
                        case 10:
                            var3 = _closure1_slot7;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun51704_ip = 53;
                            continue _fun51704;
                        case 30:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun51704_ip = 53;
                                continue _fun51704
                            }
                        case 37:
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useUpdateIsOnStartStageScreenEffect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3050, 1661, 629, 802, 566, 1380, 5872, 2]);