// modules/auth_sessions/AuthSessionsUtils.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth_sessions/AuthSessionsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getSessions;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun60833: for (var _fun60833_ip = 0;;) switch (_fun60833_ip) {
                case 0:
                    var8 = _closure2_slot0;
                    var1 = new Array(0);
                    var4 = 0;
                    var9 = var1;
                    var7 = 0;
                    var2 = arraySpread(var9, var8, var7);
                    var3 = _closure1_slot4;
                    var2 = var3.getAuthSessionIdHash;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var5 = null;
                    var3 = var5 != var2;
                    var2 = null;
                    if (!var3) {
                        _fun60833_ip = 100;
                        continue _fun60833
                    }
                case 56:
                    var6 = var1.findIndex;
                    var3 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.id_hash;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var6.bind(var1)(var3);
                    var3 = var6 >= var4;
                    var2 = null;
                    if (!var3) {
                        _fun60833_ip = 100;
                        continue _fun60833
                    }
                case 81:
                    var5 = var1.splice;
                    var3 = 1;
                    var3 = var5.bind(var1)(var6, var3);
                    var2 = var3[var4];
                case 100:
                    var3 = var1.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = arg1;
                        var1 = var0.approx_last_used_time;
                        var0 = var1.valueOf;
                        var1 = var0.bind(var1)();
                        var0 = arg0;
                        var2 = var0.approx_last_used_time;
                        var0 = var2.valueOf;
                        var0 = var0.bind(var2)();
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var3.bind(var1)(var0);
                    var0 = {};
                    var0.currentSession = var2;
                    var0.otherSessions = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAuthSessions = var3;
    var1 = function arg0() {
        _fun60836: for (var _fun60836_ip = 0;;) switch (_fun60836_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var1 = var0.bind(var1)();
                var0 = var2.valueOf;
                var0 = var0.bind(var2)();
                var1 = var1 - var0;
                var0 = 1000;
                var0 = var1 / var0;
                var1 = 60;
                var0 = var0 / var1;
                var1 = var0 / var1;
                var0 = 1;
                if (!(!(var1 < var0))) {
                    _fun60836_ip = 103;
                    continue _fun60836
                }
            case 61:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var1 = var0.bind(var1)(var2);
                var0 = var1.fromNow;
                var0 = var0.bind(var1)();
                _fun60836_ip = 165;
                continue _fun60836;
            case 103:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.TXCmfL;
                var0 = var2.bind(var3)(var1);
            case 165:
                return var0;
        }
    };
    var2.formatDate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 7515, 566, 1234, 3045, 2]);