// modules/voice_panel/native/hooks/useCanConnect.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useCanConnect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var6 = _closure1_slot3;
        var2[2] = var6;
        var1 = _closure1_slot5;
        var2[3] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun111128: for (var _fun111128_ip = 0;;) switch (_fun111128_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var1 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var6 = var1.bind(var3)(var0);
                    var0 = {};
                    var1 = null;
                    var3 = var1 != var6;
                    if (!var3) {
                        _fun111128_ip = 77;
                        continue _fun111128
                    }
                case 35:
                    var4 = var6.isPrivate;
                    var4 = var4.bind(var6)();
                    if (var4) {
                        _fun111128_ip = 74;
                        continue _fun111128
                    }
                case 48:
                    var8 = _closure1_slot4;
                    var7 = var8.can;
                    var5 = _closure1_slot6;
                    var5 = var5.CONNECT;
                    var4 = var7.bind(var8)(var5, var6);
                case 74:
                    var3 = var4;
                case 77:
                    var0.canConnect = var3;
                    var1 = var1 == var6;
                    if (var1) {
                        _fun111128_ip = 132;
                        continue _fun111128
                    }
                case 89:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isChannelFull;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot3;
                    var1 = var4.bind(var5)(var6, var3, var2);
                case 132:
                    var0.isAtMaxCapacity = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3052, 3482, 483, 566, 4202, 2]);