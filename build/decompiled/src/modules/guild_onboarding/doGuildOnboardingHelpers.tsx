// modules/guild_onboarding/doGuildOnboardingHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/doGuildOnboardingHelpers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot3;
            var1 = var2.addConditionalChangeListener;
            var0 = function() { // Environment: var0
                _fun43411: for (var _fun43411_ip = 0;;) switch (_fun43411_ip) {
                    case 0:
                        var4 = _closure1_slot3;
                        var2 = var4.getSelfMember;
                        var0 = _closure2_slot0;
                        var7 = var2.bind(var4)(var0);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 2;
                        var0 = var2[var0];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var0);
                        var5 = var6.hasFlag;
                        var4 = null;
                        var8 = var4 == var7;
                        var0 = undefined;
                        if (var8) {
                            _fun43411_ip = 69;
                            continue _fun43411
                        }
                    case 64:
                        var0 = var7.flags;
                    case 69:
                        var7 = var4 != var0;
                        var4 = 0;
                        if (!var7) {
                            _fun43411_ip = 81;
                            continue _fun43411
                        }
                    case 78:
                        var4 = var0;
                    case 81:
                        var0 = _closure1_slot4;
                        var0 = var0.COMPLETED_ONBOARDING;
                        var0 = var5.bind(var6)(var4, var0);
                        var0 = !var0;
                        if (var0) {
                            _fun43411_ip = 151;
                            continue _fun43411
                        }
                    case 103:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.finishOnboarding;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var2)();
                        var0 = false;
                    case 151:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.waitForOnboardingCompletion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1683, 3081, 1384, 4691, 2]);