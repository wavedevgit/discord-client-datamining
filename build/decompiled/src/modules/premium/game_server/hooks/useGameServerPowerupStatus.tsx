// modules/premium/game_server/hooks/useGameServerPowerupStatus.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/hooks/useGameServerPowerupStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 2;
        var2 = var7[var2];
        var3 = undefined;
        var9 = var4.bind(var3)(var2);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var4 = new Array(1);
        var4[0] = var5;
        var2 = function() { // Environment: var0
            _fun102543: for (var _fun102543_ip = 0;;) switch (_fun102543_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getStateForGuild;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun102543_ip = 42;
                        continue _fun102543
                    }
                case 36:
                    var0 = var1.entitlements;
                case 42:
                    return var0;
            }
        };
        var4 = var8.bind(var9)(var6, var2, var4);
        var _closure2_slot1 = var4;
        var6 = _closure1_slot1;
        var2 = 3;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var5 = var2.bind(var3)(var5);
        var _closure2_slot2 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun102544: for (var _fun102544_ip = 0;;) switch (_fun102544_ip) {
                case 0:
                    var0 = global;
                    var3 = var0.Object;
                    var1 = var3.values;
                    var4 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun102544_ip = 30;
                        continue _fun102544
                    }
                case 26:
                    var0 = {};
                    _fun102544_ip = 34;
                    continue _fun102544;
                case 30:
                    var0 = _closure2_slot1;
                case 34:
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.length;
                    var3 = 0;
                    if (!(var3 === var0)) {
                        _fun102544_ip = 54;
                        continue _fun102544
                    }
                case 50:
                    var0 = undefined;
                    return var0;
                case 54:
                    var0 = _closure2_slot2;
                    var0 = var0.length;
                    if (!(!(var0 > var3))) {
                        _fun102544_ip = 146;
                        continue _fun102544
                    }
                case 67:
                    var0 = {};
                    var1 = 'active';
                    var0.type = var1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var7 = undefined;
                    var4 = var5.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.FFLkmx;
                    var1 = var4.bind(var5)(var1);
                    var0.statusText = var1;
                    _fun102544_ip = 180;
                    continue _fun102544;
                case 146:
                    var1 = {};
                    var4 = 'expiring';
                    var1.type = var4;
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    var2 = var2.ends_at;
                    var1.expiringAt = var2;
                    var0 = var1;
                case 180:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6714, 566, 13352, 1234, 1890, 2]);