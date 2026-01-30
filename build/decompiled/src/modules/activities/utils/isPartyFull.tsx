// modules/activities/utils/isPartyFull.tsx
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
    var1 = 'modules/activities/utils/isPartyFull.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: isPartyFull, environment: var1
        _fun93113: for (var _fun93113_ip = 0;;) switch (_fun93113_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.partySize;
                var1 = var0.maxPartySize;
                var0 = -1;
                var0 = var2 > var0;
                if (!var0) {
                    _fun93113_ip = 34;
                    continue _fun93113
                }
            case 28:
                var3 = 0;
                var0 = var1 > var3;
            case 34:
                if (!var0) {
                    _fun93113_ip = 41;
                    continue _fun93113
                }
            case 37:
                var0 = var2 >= var1;
            case 41:
                return var0;
        }
    };
    var2.isPartyFull = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);