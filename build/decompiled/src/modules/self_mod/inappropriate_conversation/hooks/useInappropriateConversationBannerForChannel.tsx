// modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyWarningTypes;
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun72863: for (var _fun72863_ip = 0;;) switch (_fun72863_ip) {
            case 0:
                var7 = arg0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var2 = var8[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var2);
                var3 = var4.useIsEligibleForInappropriateConversationWarning;
                var2 = {};
                var5 = arg1;
                var2.location = var5;
                var3 = var3.bind(var4)(var2);
                var2 = 2;
                var2 = var8[var2];
                var4 = var6.bind(var0)(var2);
                var2 = var4.useSafetyAlertsSettingOrDefault;
                var2 = var2.bind(var4)();
                var4 = 3;
                var4 = var8[var4];
                var5 = var6.bind(var0)(var4);
                var4 = var5.useInappropriateConversationWarningsForChannel;
                var4 = var4.bind(var5)(var7);
                var5 = 4;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.useChannelSafetyWarning;
                var1 = _closure1_slot2;
                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                var1 = var5.bind(var6)(var7, var1);
                if (!var3) {
                    _fun72863_ip = 169;
                    continue _fun72863
                }
            case 130:
                if (!var2) {
                    _fun72863_ip = 169;
                    continue _fun72863
                }
            case 133:
                var3 = var4.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun72863_ip = 169;
                    continue _fun72863
                }
            case 144:
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun72864: for (var _fun72864_ip = 0;;) switch (_fun72864_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var0 = _closure1_slot2;
                            var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun72864_ip = 65;
                                continue _fun72864
                            }
                        case 28:
                            var3 = var2.type;
                            var1 = _closure1_slot2;
                            var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun72864_ip = 62;
                                continue _fun72864
                            }
                        case 50:
                            var3 = var2.dismiss_timestamp;
                            var2 = null;
                            var1 = var2 != var3;
                        case 62:
                            var0 = var1;
                        case 65:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun72863_ip = 169;
                    continue _fun72863
                }
            case 167:
                return var1;
            case 169:
                return var0;
        }
    };
    var2.useInappropriateConversationBannerForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8958, 8954, 8955, 8957, 9116, 2]);