// modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
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
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72209: for (var _fun72209_ip = 0;;) switch (_fun72209_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var3 = var7[var1];
                var2 = undefined;
                var5 = var6.bind(var2)(var3);
                var4 = var5.useIsEligibleForInappropriateConversationWarning;
                var3 = {};
                var8 = 'safety-tools-button';
                var3.location = var8;
                var4 = var4.bind(var5)(var3);
                var3 = 1;
                var3 = var7[var3];
                var5 = var6.bind(var2)(var3);
                var3 = var5.useSafetyAlertsSettingOrDefault;
                var3 = var3.bind(var5)();
                var5 = 2;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.useInappropriateConversationWarningsForChannel;
                var5 = arg0;
                var5 = var6.bind(var7)(var5);
                if (!var4) {
                    _fun72209_ip = 129;
                    continue _fun72209
                }
            case 100:
                if (!var3) {
                    _fun72209_ip = 129;
                    continue _fun72209
                }
            case 103:
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var3.length;
                if (!(var1 === var4)) {
                    _fun72209_ip = 131;
                    continue _fun72209
                }
            case 129:
                return var2;
            case 131:
                var2 = var3.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun72211: for (var _fun72211_ip = 0;;) switch (_fun72211_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            var3 = var1.type;
                            var2 = var0.type;
                            if (!(!(var3 > var2))) {
                                _fun72211_ip = 45;
                                continue _fun72211
                            }
                        case 20:
                            var1 = var1.dismiss_timestamp;
                            var0 = var0.dismiss_timestamp;
                            var1 = var1 < var0;
                            var0 = -1;
                            if (!var1) {
                                _fun72211_ip = 48;
                                continue _fun72211
                            }
                        case 45:
                            var0 = 1;
                        case 48:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var0 = var0[var1];
                return var0;
        }
    };
    var2.useInappropriateConversationSafetyToolsWarningForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9010, 9011, 9013, 2]);