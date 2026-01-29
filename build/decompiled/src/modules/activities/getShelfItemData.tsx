// modules/activities/getShelfItemData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/getShelfItemData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getShelfItemData, environment: var1
        _fun63847: for (var _fun63847_ip = 0;;) switch (_fun63847_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.applicationId;
                var _closure2_slot0 = var6;
                var3 = var1.activityConfigs;
                var7 = var1.applications;
                var4 = null;
                var1 = var4 == var7;
                var2 = undefined;
                if (var1) {
                    _fun63847_ip = 52;
                    continue _fun63847
                }
            case 37:
                var5 = var7.find;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var5.bind(var7)(var1);
            case 52:
                if (!(var4 == var2)) {
                    _fun63847_ip = 74;
                    continue _fun63847
                }
            case 56:
                var5 = _closure1_slot0;
                var1 = var5.getApplication;
                var2 = var1.bind(var5)(var6);
            case 74:
                var1 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.application_id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var1.bind(var3)(var0);
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun63847_ip = 121;
                    continue _fun63847
                }
            case 98:
                var1 = var4 == var2;
                var0 = null;
                if (var1) {
                    _fun63847_ip = 121;
                    continue _fun63847
                }
            case 107:
                var1 = {};
                var1.activity = var3;
                var1.application = var2;
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3413, 2]);