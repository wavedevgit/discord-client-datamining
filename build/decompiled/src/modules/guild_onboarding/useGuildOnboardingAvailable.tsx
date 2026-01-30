// modules/guild_onboarding/useGuildOnboardingAvailable.tsx
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
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/useGuildOnboardingAvailable.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useGuildOnboardingAvailable, environment: var1
        _fun49509: for (var _fun49509_ip = 0;;) switch (_fun49509_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot2;
                var4 = new Array(1);
                var4[0] = var7;
                var0 = function() { // Environment: var0
                    _fun49510: for (var _fun49510_ip = 0;;) switch (_fun49510_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun49510_ip = 27;
                                continue _fun49510
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var1 = var3.id;
                        case 27:
                            if (!(var2 != var1)) {
                                _fun49510_ip = 82;
                                continue _fun49510
                            }
                        case 31:
                            var3 = _closure1_slot2;
                            var2 = var3.isFullServerPreview;
                            var1 = _closure2_slot0;
                            var0 = var1.id;
                            var0 = var2.bind(var3)(var0);
                            var2 = var3.isOnboardingEnabled;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            if (!var0) {
                                _fun49510_ip = 80;
                                continue _fun49510
                            }
                        case 77:
                            var0 = var1;
                        case 80:
                            return var0;
                        case 82:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var4, var0);
                if (var0) {
                    _fun49509_ip = 105;
                    continue _fun49509
                }
            case 65:
                var4 = null;
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun49509_ip = 102;
                    continue _fun49509
                }
            case 76:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot3;
                var2 = var2.GUILD_ONBOARDING_HAS_PROMPTS;
                var1 = var3.bind(var4)(var2);
            case 102:
                var0 = var1;
            case 105:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: isGuildOnboardingAvailable, environment: var1
        _fun49511: for (var _fun49511_ip = 0;;) switch (_fun49511_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun49511_ip = 85;
                    continue _fun49511
                }
            case 9:
                var5 = _closure1_slot2;
                var3 = var5.isFullServerPreview;
                var0 = var2.id;
                var0 = var3.bind(var5)(var0);
                var4 = var5.isOnboardingEnabled;
                var3 = var2.id;
                var3 = var4.bind(var5)(var3);
                if (!var0) {
                    _fun49511_ip = 54;
                    continue _fun49511
                }
            case 51:
                var0 = var3;
            case 54:
                if (var0) {
                    _fun49511_ip = 83;
                    continue _fun49511
                }
            case 57:
                var3 = var2.features;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var1 = var1.GUILD_ONBOARDING_HAS_PROMPTS;
                var0 = var2.bind(var3)(var1);
            case 83:
                return var0;
            case 85:
                var0 = false;
                return var0;
        }
    };
    var2.isGuildOnboardingAvailable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1664, 660, 566, 2]);