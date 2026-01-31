// modules/messages/useIsRelationshipTypeSpamReportable.tsx
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
    var3 = var3.RelationshipTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useIsRelationshipTypeSpamReportable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useIsRelationshipTypeSpamReportable, environment: var1
        _fun90777: for (var _fun90777_ip = 0;;) switch (_fun90777_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getRelationshipType;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var3, var0, var2);
                var0 = _closure1_slot3;
                var0 = var0.NONE;
                var0 = var2 === var0;
                if (var0) {
                    _fun90777_ip = 104;
                    continue _fun90777
                }
            case 90:
                var3 = _closure1_slot3;
                var3 = var3.BLOCKED;
                var0 = var2 === var3;
            case 104:
                if (var0) {
                    _fun90777_ip = 121;
                    continue _fun90777
                }
            case 107:
                var1 = _closure1_slot3;
                var1 = var1.PENDING_INCOMING;
                var0 = var2 === var1;
            case 121:
                return var0;
        }
    };
    var2.useIsRelationshipTypeSpamReportable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3059, 660, 566, 2]);