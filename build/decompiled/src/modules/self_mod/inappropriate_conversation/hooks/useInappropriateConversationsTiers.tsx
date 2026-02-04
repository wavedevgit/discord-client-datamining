// modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
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
    var3 = var3.SafetyWarningTypes;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun73100: for (var _fun73100_ip = 0;;) switch (_fun73100_ip) {
            case 0:
                var6 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var3 = undefined;
                var7 = var4.bind(var3)(var0);
                var1 = var7.useIsEligibleForInappropriateConversationWarning;
                var0 = {};
                var8 = 'context-menu-item';
                var0.location = var8;
                var1 = var1.bind(var7)(var0);
                var0 = 3;
                var0 = var5[var0];
                var10 = var4.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot2;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var9.bind(var10)(var7, var0);
                var0 = 4;
                var0 = var5[var0];
                var5 = var4.bind(var3)(var0);
                var4 = var5.useInappropriateConversationBannerForChannel;
                var0 = var6.id;
                var4 = var4.bind(var5)(var0, var8);
                var5 = null;
                var0 = var5 == var7;
                var8 = undefined;
                if (var0) {
                    _fun73100_ip = 145;
                    continue _fun73100
                }
            case 135:
                var0 = var7.isStaff;
                var8 = var0.bind(var7)();
            case 145:
                var7 = true;
                var0 = null;
                if (!(var7 === var8)) {
                    _fun73100_ip = 244;
                    continue _fun73100
                }
            case 153:
                var0 = null;
                if (!var1) {
                    _fun73100_ip = 244;
                    continue _fun73100
                }
            case 158:
                var1 = var6.isDM;
                var1 = var1.bind(var6)();
                var0 = null;
                if (!var1) {
                    _fun73100_ip = 244;
                    continue _fun73100
                }
            case 173:
                var1 = {};
                var6 = var5 == var4;
                var7 = undefined;
                if (var6) {
                    _fun73100_ip = 189;
                    continue _fun73100
                }
            case 184:
                var7 = var4.type;
            case 189:
                var6 = _closure1_slot3;
                var6 = var6.INAPPROPRIATE_CONVERSATION_TIER_1;
                var6 = var7 === var6;
                var1.isTier1 = var6;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun73100_ip = 222;
                    continue _fun73100
                }
            case 217:
                var3 = var4.type;
            case 222:
                var2 = _closure1_slot3;
                var2 = var2.INAPPROPRIATE_CONVERSATION_TIER_2;
                var2 = var3 === var2;
                var1.isTier2 = var2;
                var0 = var1;
            case 244:
                return var0;
        }
    };
    var2.useInappropriateConversationsTiers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 9014, 9010, 566, 9171, 2]);