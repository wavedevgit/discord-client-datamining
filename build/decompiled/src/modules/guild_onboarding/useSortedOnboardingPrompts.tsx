// modules/guild_onboarding/useSortedOnboardingPrompts.tsx
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/useSortedOnboardingPrompts.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSortedOnboardingPrompts, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.getEnabledOnboardingPrompts;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun77415: for (var _fun77415_ip = 0;;) switch (_fun77415_ip) {
                case 0:
                    var5 = new Array(0);
                    var4 = new Array(0);
                    var3 = new Array(0);
                    var2 = new Array(0);
                    var0 = _closure2_slot1;
                    var0 = var0.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    var8 = 0;
                    var7 = 0;
                    if (!var0) {
                        _fun77415_ip = 194;
                        continue _fun77415
                    }
                case 46:
                    var0 = _closure2_slot1;
                    var11 = var0[var7];
                    var0 = var11.isNew;
                    if (var0) {
                        _fun77415_ip = 156;
                        continue _fun77415
                    }
                case 63:
                    var0 = var11.hasNewAnswers;
                    if (var0) {
                        _fun77415_ip = 113;
                        continue _fun77415
                    }
                case 74:
                    var0 = var11.inOnboarding;
                    if (var0) {
                        _fun77415_ip = 98;
                        continue _fun77415
                    }
                case 83:
                    var0 = var3.push;
                    var0 = var0.bind(var3)(var11);
                    var10 = var8;
                    _fun77415_ip = 169;
                    continue _fun77415;
                case 98:
                    var0 = var2.push;
                    var0 = var0.bind(var2)(var11);
                    var10 = var8;
                    _fun77415_ip = 169;
                    continue _fun77415;
                case 113:
                    var0 = var4.push;
                    var0 = var0.bind(var4)(var11);
                    var13 = var11.options;
                    var12 = var13.filter;
                    var0 = function(arg0) { // Environment: var9
                        var0 = arg0;
                        var0 = var0.isUnseen;
                        return var0;
                    };
                    var0 = var12.bind(var13)(var0);
                    var0 = var0.length;
                    var10 = var8 + var0;
                    _fun77415_ip = 169;
                    continue _fun77415;
                case 156:
                    var0 = var5.push;
                    var0 = var0.bind(var5)(var11);
                    var10 = var8;
                case 169:
                    var7 = var7 + 1;
                    var0 = _closure2_slot1;
                    var0 = var0.length;
                    var8 = var10;
                    var1 = var8;
                    if (var7 < var0) {
                        _fun77415_ip = 46;
                        continue _fun77415
                    }
                case 194:
                    var0 = {};
                    var6 = _closure2_slot1;
                    var0.onboardingPromptsRaw = var6;
                    var0.newOnboardingPrompts = var5;
                    var0.onboardingPromptsWithNewAnswers = var4;
                    var0.newAnswersCount = var1;
                    var1 = var3.concat;
                    var1 = var1.bind(var3)(var2);
                    var0.onboardingPrompts = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4644, 632, 2]);