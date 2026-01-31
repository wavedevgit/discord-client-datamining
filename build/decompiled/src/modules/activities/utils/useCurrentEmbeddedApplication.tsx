// modules/activities/utils/useCurrentEmbeddedApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/useCurrentEmbeddedApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useCurrentEmbeddedApplication, environment: var1
        _fun64601: for (var _fun64601_ip = 0;;) switch (_fun64601_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun64601_ip = 11;
                    continue _fun64601
                }
            case 9:
                var1 = {};
            case 11:
                var6 = var1.fetchesApplication;
                if (!(var6 === var0)) {
                    _fun64601_ip = 23;
                    continue _fun64601
                }
            case 21:
                var6 = true;
            case 23:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var2 = var7[var4];
                var2 = var5.bind(var0)(var2);
                var3 = var2.bind(var0)();
                var2 = 2;
                var2 = var7[var2];
                var5 = var5.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun64601_ip = 83;
                    continue _fun64601
                }
            case 68:
                var7 = var3.applicationId;
                var3 = new Array(1);
                var3[0] = var7;
                _fun64601_ip = 87;
                continue _fun64601;
            case 83:
                var3 = new Array(0);
            case 87:
                var3 = var5.bind(var0)(var3, var6);
                var1 = _closure1_slot2;
                var3 = var1.bind(var0)(var3, var4);
                var1 = 0;
                var1 = var3[var1];
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun64601_ip = 121;
                    continue _fun64601
                }
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 8015, 6841, 2]);