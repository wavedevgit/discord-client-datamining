// modules/activities/utils/isMostRecentDeadEndInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityActionTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isMostRecentDeadEndInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: isMostRecentDeadEndInvite, environment: var1
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var _closure2_slot1 = var1;
        var3 = var4.hasAnyAfter;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var0
            _fun92884: for (var _fun92884_ip = 0;;) switch (_fun92884_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5.activity;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun92884_ip = 48;
                        continue _fun92884
                    }
                case 18:
                    var1 = var5.application;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun92884_ip = 37;
                        continue _fun92884
                    }
                case 32:
                    var2 = var1.id;
                case 37:
                    var1 = _closure2_slot0;
                    var0 = var2 === var1;
                case 48:
                    if (!var0) {
                        _fun92884_ip = 79;
                        continue _fun92884
                    }
                case 51:
                    var1 = var5.activity;
                    var2 = var1.type;
                    var1 = _closure1_slot2;
                    var1 = var1.JOIN;
                    var0 = var2 === var1;
                case 79:
                    if (!var0) {
                        _fun92884_ip = 128;
                        continue _fun92884
                    }
                case 82:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var5, var1);
                    var0 = !var1;
                case 128:
                    return var0;
            }
        };
        var0 = 25;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = !var0;
        return var0;
    };
    var2.isMostRecentDeadEndInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 12067, 2]);