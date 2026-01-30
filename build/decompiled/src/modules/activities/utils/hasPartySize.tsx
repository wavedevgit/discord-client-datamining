// modules/activities/utils/hasPartySize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/activities/utils/hasPartySize.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: hasPartySize, environment: var1
        _fun93111: for (var _fun93111_ip = 0;;) switch (_fun93111_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.partySize;
                var2 = var1.maxPartySize;
                var1 = -1;
                var0 = var0 > var1;
                if (!var0) {
                    _fun93111_ip = 32;
                    continue _fun93111
                }
            case 28:
                var0 = var2 > var1;
            case 32:
                return var0;
        }
    };
    var2.hasPartySize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);