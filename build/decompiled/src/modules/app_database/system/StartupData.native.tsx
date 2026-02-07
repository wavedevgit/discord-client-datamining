// modules/app_database/system/StartupData.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/system/StartupData.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun18858: for (var _fun18858_ip = 0;;) switch (_fun18858_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun18858_ip = 67;
                    continue _fun18858
                }
            case 38:
                var1 = _closure1_slot3;
                var1 = var1.DCDAppDatabase;
                var3 = var1.userId;
                var1 = null;
                var4 = var1 != var3;
                if (!var4) {
                    _fun18858_ip = 65;
                    continue _fun18858
                }
            case 62:
                var1 = var3;
            case 65:
                return var1;
            case 67:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getConstants;
                var0 = var0.bind(var1)();
                var1 = var0.userId;
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun18858_ip = 114;
                    continue _fun18858
                }
            case 111:
                var0 = var1;
            case 114:
                return var0;
        }
    };
    var2.getUserId = var3;
    var1 = function arg0() {
        _fun18859: for (var _fun18859_ip = 0;;) switch (_fun18859_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun18859_ip = 64;
                    continue _fun18859
                }
            case 41:
                var2 = _closure1_slot3;
                var4 = var2.DCDAppDatabase;
                var2 = var4.setUserId;
                var2 = var2.bind(var4)(var3);
                _fun18859_ip = 95;
                continue _fun18859;
            case 64:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setUserId;
                var1 = var1.bind(var2)(var3);
            case 95:
                return var0;
        }
    };
    var2.setUserId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 1666, 2]);