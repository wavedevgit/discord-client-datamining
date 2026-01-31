// modules/message_request/hooks/useIsStricterMessageRequests.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var8 = var5[var0];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var7 = var3.Set;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = ['GB'];
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/hooks/useIsStricterMessageRequests.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useIsStricterMessageRequests, environment: var1
        _fun90586: for (var _fun90586_ip = 0;;) switch (_fun90586_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var0 = var6[var2];
                var4 = undefined;
                var9 = var5.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot4;
                    var0 = var1.getUserCountryCode;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var8.bind(var9)(var7, var0);
                var _closure2_slot0 = var0;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    _fun90588: for (var _fun90588_ip = 0;;) switch (_fun90588_ip) {
                        case 0:
                            var1 = _closure1_slot3;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun90588_ip = 33;
                                continue _fun90588
                            }
                        case 27:
                            var0 = var1.nsfwAllowed;
                        case 33:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var4, var2);
                var6 = _closure1_slot2;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var0;
                var1 = function() { // Environment: var1
                    _fun90589: for (var _fun90589_ip = 0;;) switch (_fun90589_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun90589_ip = 48;
                                continue _fun90589
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchUserCountryCode;
                            var0 = var0.bind(var1)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var4);
                var1 = null;
                var1 = var1 == var0;
                if (var1) {
                    _fun90586_ip = 162;
                    continue _fun90586
                }
            case 139:
                var4 = _closure1_slot5;
                var3 = var4.has;
                var0 = var0.alpha2;
                var0 = var3.bind(var4)(var0);
                var1 = !var0;
            case 162:
                var0 = !var1;
                if (var1) {
                    _fun90586_ip = 180;
                    continue _fun90586
                }
            case 168:
                var1 = false;
                var1 = var1 === var2;
                var1 = !var1;
                var0 = !var1;
            case 180:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 3923, 566, 9009, 2]);