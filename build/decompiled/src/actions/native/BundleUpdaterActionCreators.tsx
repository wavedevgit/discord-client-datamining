// actions/native/BundleUpdaterActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot3 = var1;
    var1 = false;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: prepareUpdate, environment: var3
        _fun118592: for (var _fun118592_ip = 0;;) switch (_fun118592_ip) {
            case 0:
                var0 = arg0;
                if (!var0) {
                    _fun118592_ip = 276;
                    continue _fun118592
                }
            case 9:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 1;
                var0 = var9[var0];
                var8 = undefined;
                var3 = var2.bind(var8)(var0);
                var2 = var3.show;
                var0 = {};
                var7 = _closure1_slot0;
                var4 = 2;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.GQZdmI;
                var5 = var6.bind(var10)(var5);
                var0.title = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.Fizu9y;
                var5 = var6.bind(var10)(var5);
                var0.body = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.UefCDS;
                var5 = var6.bind(var10)(var5);
                var0.confirmText = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4["1SzcG6"];
                var4 = var5.bind(var6)(var4);
                var0.cancelText = var4;
                var4 = function() { // Original name: onConfirm, environment: var4
                    var0 = _closure1_slot3;
                    var1 = var0.BundleUpdaterManager;
                    var0 = var1.reload;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0.onConfirm = var4;
                var0 = var2.bind(var3)(var0);
                var0 = true;
                _closure1_slot4 = var0;
            case 276:
                var0 = undefined;
                return var0;
        }
    };
    var1.prepareUpdate = var6;
    var3 = function() { // Original name: deferUpdate, environment: var3
        _fun118594: for (var _fun118594_ip = 0;;) switch (_fun118594_ip) {
            case 0:
                var1 = _closure1_slot4;
                if (!var1) {
                    _fun118594_ip = 36;
                    continue _fun118594
                }
            case 10:
                var1 = false;
                _closure1_slot4 = var1;
                var0 = _closure1_slot3;
                var1 = var0.BundleUpdaterManager;
                var0 = var1.reload;
                var0 = var0.bind(var1)();
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var1.deferUpdate = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/native/BundleUpdaterActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3962, 1234, 2]);