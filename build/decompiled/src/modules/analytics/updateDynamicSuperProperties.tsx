// modules/analytics/updateDynamicSuperProperties.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/analytics/updateDynamicSuperProperties.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun112408: for (var _fun112408_ip = 0;;) switch (_fun112408_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 0;
                var4 = var2[var5];
                var0 = undefined;
                var6 = var3.bind(var0)(var4);
                var4 = var6.getActiveSessionUnsafe;
                var8 = var4.bind(var6)();
                var4 = 1;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getSuperProperties;
                var7 = var2.bind(var3)();
                var3 = {};
                var6 = null;
                var9 = var6 == var8;
                var2 = undefined;
                if (var9) {
                    _fun112408_ip = 75;
                    continue _fun112408
                }
            case 69:
                var2 = var8.uuid;
            case 75:
                var9 = var6 == var7;
                var8 = undefined;
                if (var9) {
                    _fun112408_ip = 90;
                    continue _fun112408
                }
            case 84:
                var8 = var7.client_heartbeat_session_id;
            case 90:
                if (!(var2 !== var8)) {
                    _fun112408_ip = 100;
                    continue _fun112408
                }
            case 94:
                var3.client_heartbeat_session_id = var2;
            case 100:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 2;
                var2 = var9[var2];
                var8 = var8.bind(var0)(var2);
                var2 = var8.getState;
                var2 = var2.bind(var8)();
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun112408_ip = 145;
                    continue _fun112408
                }
            case 139:
                var6 = var7.client_app_state;
            case 145:
                if (!(var2 !== var6)) {
                    _fun112408_ip = 155;
                    continue _fun112408
                }
            case 149:
                var3.client_app_state = var2;
            case 155:
                var2 = global;
                var6 = var2.Object;
                var2 = var6.keys;
                var2 = var2.bind(var6)(var3);
                var2 = var2.length;
                if (!(var2 > var5)) {
                    _fun112408_ip = 210;
                    continue _fun112408
                }
            case 182:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var2 = var2.bind(var0)(var1);
                var1 = var2.extendSuperProperties;
                var1 = var1.bind(var2)(var3);
            case 210:
                return var0;
        }
    };
    var2.updateDynamicSuperProperties = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4314, 481, 5287, 2]);