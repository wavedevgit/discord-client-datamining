// modules/applications/ApplicationInteractionInfoUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/ApplicationInteractionInfoUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: canViewInteractionInfo, environment: var1
        var0 = arg0;
        var1 = var0.interactionMetadata;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.canViewInteractionInfo = var3;
    var1 = function(arg0) { // Original name: isPrimaryEntryPointCommandMessage, environment: var1
        _fun56082: for (var _fun56082_ip = 0;;) switch (_fun56082_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.interactionMetadata;
                var2 = null;
                var1 = var2 == var0;
                var4 = undefined;
                var6 = undefined;
                if (var1) {
                    _fun56082_ip = 27;
                    continue _fun56082
                }
            case 22:
                var6 = var0.type;
            case 27:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.InteractionTypes;
                var0 = var0.APPLICATION_COMMAND;
                var0 = var6 === var0;
                if (!var0) {
                    _fun56082_ip = 122;
                    continue _fun56082
                }
            case 68:
                var3 = var3.interactionMetadata;
                var6 = var2 == var3;
                var2 = undefined;
                if (var6) {
                    _fun56082_ip = 89;
                    continue _fun56082
                }
            case 83:
                var2 = var3.command_type;
            case 89:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandType;
                var1 = var1.PRIMARY_ENTRY_POINT;
                var0 = var2 === var1;
            case 122:
                return var0;
        }
    };
    var2.isPrimaryEntryPointCommandMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1636, 2]);