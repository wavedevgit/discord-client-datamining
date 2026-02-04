// modules/activities/utils/leaveCurrentFrame.tsx
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
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/leaveCurrentFrame.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun63158: for (var _fun63158_ip = 0;;) switch (_fun63158_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getConnectedFrame;
                var3 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var3)) {
                    _fun63158_ip = 71;
                    continue _fun63158
                }
            case 23:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var2 = var0.bind(var1)();
                var1 = var2.leaveFrame;
                var0 = {};
                var3 = var3.applicationId;
                var0.applicationId = var3;
                var0 = var1.bind(var2)(var0);
            case 71:
                var0 = undefined;
                return var0;
        }
    };
    var2.leaveCurrentFrame = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7919, 7922, 2]);