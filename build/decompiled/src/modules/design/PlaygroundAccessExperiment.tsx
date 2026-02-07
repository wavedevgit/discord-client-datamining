// modules/design/PlaygroundAccessExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var12 = true;
    var5.value = var12;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var5);
    var0 = 0;
    var6 = var8[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var8[var5];
    var9 = var7.bind(var0)(var5);
    var6 = var9.createApexExperiment;
    var5 = {
        'name': '2026-02-mana-playground-access',
        'kind': 'user'
    };
    var10 = {};
    var11 = false;
    var10.enabled = var11;
    var5.defaultConfig = var10;
    var10 = {};
    var11 = {};
    var11.enabled = var12;
    var10[1] = var11;
    var5.variations = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/design/PlaygroundAccessExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.usePlaygroundAccessExperiment = var4;
    var2.getPlaygroundAccessExperiment = var3;
    var3 = function arg0() {
        _fun73180: for (var _fun73180_ip = 0;;) switch (_fun73180_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var4.bind(var5)(var2, var0);
                var2 = null;
                var4 = var2 == var6;
                var0 = undefined;
                if (var4) {
                    _fun73180_ip = 78;
                    continue _fun73180
                }
            case 68:
                var4 = var6.isStaff;
                var0 = var4.bind(var6)();
            case 78:
                var4 = true;
                var0 = var4 === var0;
                if (var0) {
                    _fun73180_ip = 110;
                    continue _fun73180
                }
            case 87:
                var5 = var2 == var6;
                var2 = undefined;
                if (var5) {
                    _fun73180_ip = 106;
                    continue _fun73180
                }
            case 96:
                var5 = var6.isStaffPersonal;
                var2 = var5.bind(var6)();
            case 106:
                var0 = var4 === var2;
            case 110:
                var2 = _closure1_slot4;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                if (var0) {
                    _fun73180_ip = 128;
                    continue _fun73180
                }
            case 125:
                var0 = var1;
            case 128:
                return var0;
        }
    };
    var2.useHasPlaygroundAccess = var3;
    var1 = function arg0() {
        _fun73182: for (var _fun73182_ip = 0;;) switch (_fun73182_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var2 = null;
                var4 = var2 == var6;
                var3 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun73182_ip = 39;
                    continue _fun73182
                }
            case 29:
                var4 = var6.isStaff;
                var0 = var4.bind(var6)();
            case 39:
                var4 = true;
                var0 = var4 === var0;
                if (var0) {
                    _fun73182_ip = 71;
                    continue _fun73182
                }
            case 48:
                var5 = var2 == var6;
                var2 = undefined;
                if (var5) {
                    _fun73182_ip = 67;
                    continue _fun73182
                }
            case 57:
                var5 = var6.isStaffPersonal;
                var2 = var5.bind(var6)();
            case 67:
                var0 = var4 === var2;
            case 71:
                if (var0) {
                    _fun73182_ip = 86;
                    continue _fun73182
                }
            case 74:
                var2 = _closure1_slot5;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var2.getHasPlaygroundAccess = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 1301, 566, 2]);