// modules/activities/useActivityUsers.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/useActivityUsers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useActivityUsers, environment: var1
        var5 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var7 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var7;
        var1 = _closure1_slot2;
        var2[1] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun111990: for (var _fun111990_ip = 0;;) switch (_fun111990_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun111990_ip = 124;
                        continue _fun111990
                    }
                case 15:
                    var4 = _closure1_slot3;
                    var3 = var4.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var3 = var4.find;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.applicationId;
                        var0 = _closure2_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    if (!(var2 != var1)) {
                        _fun111990_ip = 118;
                        continue _fun111990
                    }
                case 58:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var1 = var1.userIds;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun111990_ip = 122;
                    continue _fun111990;
                case 118:
                    var0 = new Array(0);
                case 122:
                    return var0;
                case 124:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 1371, 632, 2]);