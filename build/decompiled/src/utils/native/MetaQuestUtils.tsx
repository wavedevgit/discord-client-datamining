// utils/native/MetaQuestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var3;
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
    var3 = 'utils/native/MetaQuestUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: isMetaQuest, environment: var1
        _fun37502: for (var _fun37502_ip = 0;;) switch (_fun37502_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 0;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun37502_ip = 117;
                    continue _fun37502
                }
            case 43:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var5 = 1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var3 = var2 == var3;
                var2 = undefined;
                if (var3) {
                    _fun37502_ip = 107;
                    continue _fun37502
                }
            case 74:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.getConstants;
                var1 = var1.bind(var3)();
                var2 = var1.deviceModel;
            case 107:
                var1 = 'Quest';
                var0 = var1 === var2;
            case 117:
                return var0;
        }
    };
    var2.isMetaQuest = var3;
    var1 = function() { // Original name: isQuestRelease, environment: var1
        _fun37503: for (var _fun37503_ip = 0;;) switch (_fun37503_ip) {
            case 0:
                var1 = _closure1_slot2;
                var2 = _closure1_slot3;
                var0 = 2;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.getConstants;
                var2 = var0.bind(var1)();
                var0 = null;
                var4 = var0 == var2;
                var1 = undefined;
                if (var4) {
                    _fun37503_ip = 76;
                    continue _fun37503
                }
            case 46:
                var4 = var2.ReleaseChannel;
                var2 = var0 == var4;
                var1 = undefined;
                if (var2) {
                    _fun37503_ip = 76;
                    continue _fun37503
                }
            case 61:
                var3 = var4.startsWith;
                var2 = 'quest';
                var1 = var3.bind(var4)(var2);
            case 76:
                var0 = var0 != var1;
                if (!var0) {
                    _fun37503_ip = 86;
                    continue _fun37503
                }
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.isQuestRelease = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 655, 1594, 2]);