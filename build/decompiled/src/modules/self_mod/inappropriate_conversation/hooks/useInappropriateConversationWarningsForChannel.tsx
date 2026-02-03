// modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx
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
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyWarningTypes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot2;
            var1 = var2.getChannelSafetyWarnings;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var4.bind(var5)(var3, var1, var2);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun72097: for (var _fun72097_ip = 0;;) switch (_fun72097_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.type;
                    var0 = _closure1_slot3;
                    var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun72097_ip = 47;
                        continue _fun72097
                    }
                case 28:
                    var2 = var2.type;
                    var1 = _closure1_slot3;
                    var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                    var0 = var2 === var1;
                case 47:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useInappropriateConversationWarningsForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8992, 566, 2]);