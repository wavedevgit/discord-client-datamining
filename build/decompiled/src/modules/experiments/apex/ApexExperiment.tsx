// modules/experiments/apex/ApexExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var1 = function arg0, arg1() {
        _fun14163: for (var _fun14163_ip = 0;;) switch (_fun14163_ip) {
            case 0:
                var3 = arg0;
                var0 = 'guild';
                if (!(var0 !== var3)) {
                    _fun14163_ip = 119;
                    continue _fun14163
                }
            case 11:
                var0 = 'user';
                if (!(var0 !== var3)) {
                    _fun14163_ip = 100;
                    continue _fun14163
                }
            case 19:
                var0 = 'installation';
                if (!(var0 !== var3)) {
                    _fun14163_ip = 65;
                    continue _fun14163
                }
            case 27:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 65:
                var1 = _closure1_slot4;
                var0 = var1.getInstallationForTracking;
                var1 = var0.bind(var1)();
                var0 = null;
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun14163_ip = 98;
                    continue _fun14163
                }
            case 95:
                var0 = var1;
            case 98:
                return var0;
            case 100:
                var1 = _closure1_slot4;
                var0 = var1.getId;
                var0 = var0.bind(var1)();
                return var0;
            case 119:
                var0 = arg1;
                var0 = var0.guildId;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = function arg0, arg1() {
        _fun14164: for (var _fun14164_ip = 0;;) switch (_fun14164_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var0 = var1[var0];
                var1 = undefined;
                var6 = var2.bind(var1)(var0);
                var4 = var6.useStateFromStoresArray;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var0 = var2.getId;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure1_slot4;
                    var1 = var2.getInstallationForTracking;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var4 = var4.bind(var6)(var2, var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var4 = var2.bind(var1)(var4, var0);
                var0 = 0;
                var0 = var4[var0];
                var2 = 1;
                var2 = var4[var2];
                var4 = 'guild';
                if (!(var4 !== var5)) {
                    _fun14164_ip = 162;
                    continue _fun14164
                }
            case 93:
                var4 = 'user';
                if (!(var4 !== var5)) {
                    _fun14164_ip = 160;
                    continue _fun14164
                }
            case 101:
                var4 = 'installation';
                if (!(var4 !== var5)) {
                    _fun14164_ip = 142;
                    continue _fun14164
                }
            case 109:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.assertNever;
                var3 = var3.bind(var4)(var5);
                return var1;
            case 142:
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun14164_ip = 158;
                    continue _fun14164
                }
            case 155:
                var1 = var2;
            case 158:
                return var1;
            case 160:
                return var0;
            case 162:
                var0 = arg1;
                var0 = var0.guildId;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/experiments/apex/ApexExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var5 = undefined;
        var4 = var2.bind(var5)(var1);
        var8 = _closure1_slot5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot7;
        var9 = arg0;
        var10 = undefined;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.default = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApexExperiment;
    var2.ApexExperiment = var3;
    var2.getUnitId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1216, 1211, 1303, 1304, 566, 2]);