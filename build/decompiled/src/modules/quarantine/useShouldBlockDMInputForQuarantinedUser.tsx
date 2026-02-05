// modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserFlags;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun90609: for (var _fun90609_ip = 0;;) switch (_fun90609_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var8;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 2;
                var2 = var7[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useShowConvoStarterInDM;
                var3 = var2.bind(var3)(var8);
                var2 = 3;
                var2 = var7[var2];
                var7 = var6.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getMessages;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var2 = var6.bind(var7)(var4, var0, var2);
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun90609_ip = 144;
                    continue _fun90609
                }
            case 108:
                var4 = var5.hasFlag;
                var1 = _closure1_slot3;
                var1 = var1.QUARANTINED;
                var1 = var4.bind(var5)(var1);
                if (!var1) {
                    _fun90609_ip = 135;
                    continue _fun90609
                }
            case 132:
                var1 = var3;
            case 135:
                if (!var1) {
                    _fun90609_ip = 141;
                    continue _fun90609
                }
            case 138:
                var1 = !var2;
            case 141:
                var0 = var1;
            case 144:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4249, 660, 11672, 566, 2]);