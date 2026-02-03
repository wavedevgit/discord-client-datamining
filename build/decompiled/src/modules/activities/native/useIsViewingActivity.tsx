// modules/activities/native/useIsViewingActivity.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/useIsViewingActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63000: for (var _fun63000_ip = 0;;) switch (_fun63000_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channelId;
                var _closure2_slot0 = var7;
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 1;
                var0 = var8[var0];
                var6 = undefined;
                var0 = var10.bind(var6)(var0);
                var0 = var0.bind(var6)(var7);
                var5 = _closure1_slot0;
                var2 = 2;
                var2 = var8[var2];
                var9 = var5.bind(var6)(var2);
                var4 = var9.useIsModalOpen;
                var2 = 3;
                var2 = var8[var2];
                var2 = var10.bind(var6)(var2);
                var2 = var4.bind(var9)(var2);
                var4 = 4;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getChatOpen;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1, var3);
                if (!var0) {
                    _fun63000_ip = 138;
                    continue _fun63000
                }
            case 135:
                var0 = var2;
            case 138:
                if (!var0) {
                    _fun63000_ip = 144;
                    continue _fun63000
                }
            case 141:
                var0 = !var1;
            case 144:
                return var0;
        }
    };
    var2.useIsViewingActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3948, 7889, 3919, 7881, 566, 2]);