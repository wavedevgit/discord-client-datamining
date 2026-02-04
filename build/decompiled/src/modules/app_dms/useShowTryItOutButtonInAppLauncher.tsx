// modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx
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
    var3 = 'modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107976: for (var _fun107976_ip = 0;;) switch (_fun107976_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.context;
                var9 = var0.application;
                var4 = var0.botUserId;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 0;
                var0 = var7[var0];
                var5 = undefined;
                var1 = var3.bind(var5)(var0);
                var0 = var1.useCanLaunchFrame;
                var0 = var0.bind(var1)(var9);
                var1 = 1;
                var1 = var7[var1];
                var8 = var3.bind(var5)(var1);
                var3 = var8.useIsPrimaryAppCommandUsableInAppDM;
                var1 = {};
                var1.context = var6;
                var9 = var9.id;
                var1.applicationId = var9;
                var1.botUserId = var4;
                var1 = var3.bind(var8)(var1);
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var3 = var3.bind(var5)(var2);
                var8 = var6.type;
                var7 = 'channel';
                var2 = undefined;
                if (!(var7 === var8)) {
                    _fun107976_ip = 133;
                    continue _fun107976
                }
            case 128:
                var2 = var6.channel;
            case 133:
                var2 = var3.bind(var5)(var2);
                var0 = !var0;
                if (!var0) {
                    _fun107976_ip = 162;
                    continue _fun107976
                }
            case 144:
                if (!var1) {
                    _fun107976_ip = 153;
                    continue _fun107976
                }
            case 147:
                var3 = null;
                var1 = var3 != var4;
            case 153:
                if (!var1) {
                    _fun107976_ip = 159;
                    continue _fun107976
                }
            case 156:
                var1 = !var2;
            case 159:
                var0 = var1;
            case 162:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4672, 7985, 7815, 2]);