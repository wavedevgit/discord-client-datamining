// modules/pomelo/PomeloModalActionCreators.native.tsx
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
    var3 = var3.POMELO_MODAL_KEY;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/PomeloModalActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: openPomeloModal, environment: var1
        _fun80756: for (var _fun80756_ip = 0;;) switch (_fun80756_ip) {
            case 0:
                var5 = arguments[1];
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun80756_ip = 11;
                    continue _fun80756
                }
            case 9:
                var5 = false;
            case 11:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 1;
                var2 = var1[var2];
                var4 = var3.bind(var7)(var2);
                var3 = var4.pushLazy;
                var6 = _closure1_slot0;
                var2 = 3;
                var2 = var1[var2];
                var6 = var6.bind(var7)(var2);
                var2 = 2;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var6.bind(var7)(var2, var1);
                var1 = {};
                var6 = function() { // Original name: onCloseModal, environment: var6
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.popWithKey;
                    var0 = _closure1_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onCloseModal = var6;
                var6 = arg0;
                var1.source = var6;
                var1.oneClickFlow = var5;
                var0 = _closure1_slot3;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = true;
                return var0;
        }
    };
    var2.openPomeloModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10246, 4525, 10247, 1307, 2]);