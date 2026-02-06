// actions/DefaultRouteActionCreators.tsx
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
        _fun91597: for (var _fun91597_ip = 0;;) switch (_fun91597_ip) {
            case 0:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 2;
                var0 = var9[var0];
                var5 = undefined;
                var4 = var8.bind(var5)(var0);
                var3 = var4.matchPath;
                var2 = {};
                var7 = _closure1_slot4;
                var6 = var7.CHANNEL;
                var0 = 3;
                var0 = var9[var0];
                var0 = var8.bind(var5)(var0);
                var8 = var0.RouteParam;
                var0 = var8.guildId;
                var0 = var0.bind(var8)();
                var0 = var6.bind(var7)(var0);
                var2.path = var0;
                var0 = arg0;
                var2 = var3.bind(var4)(var0, var2);
                var0 = null;
                var4 = var0 == var2;
                var3 = undefined;
                if (var4) {
                    _fun91597_ip = 120;
                    continue _fun91597
                }
            case 100:
                var2 = var2.params;
                var4 = var0 == var2;
                var3 = undefined;
                if (var4) {
                    _fun91597_ip = 120;
                    continue _fun91597
                }
            case 115:
                var3 = var2.guildId;
            case 120:
                var0 = var0 == var3;
                if (var0) {
                    _fun91597_ip = 145;
                    continue _fun91597
                }
            case 127:
                var2 = _closure1_slot3;
                var1 = var2.isLurking;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 145:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/DefaultRouteActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun91598: for (var _fun91598_ip = 0;;) switch (_fun91598_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot5;
                var0 = undefined;
                var2 = var2.bind(var0)(var4);
                if (var2) {
                    _fun91598_ip = 67;
                    continue _fun91598
                }
            case 20:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'SAVE_LAST_ROUTE';
                var1.type = var5;
                var1.path = var4;
                var1 = var2.bind(var3)(var1);
            case 67:
                return var0;
        }
    };
    var2.saveLastRoute = var3;
    var1 = function(arg0) { // Environment: var1
        _fun91599: for (var _fun91599_ip = 0;;) switch (_fun91599_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot5;
                var0 = undefined;
                var2 = var2.bind(var0)(var4);
                if (var2) {
                    _fun91599_ip = 67;
                    continue _fun91599
                }
            case 20:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'SAVE_LAST_NON_VOICE_ROUTE';
                var1.type = var5;
                var1.path = var4;
                var1 = var2.bind(var3)(var1);
            case 67:
                return var0;
        }
    };
    var2.saveLastNonVoiceRoute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3094, 660, 3220, 3230, 806, 2]);