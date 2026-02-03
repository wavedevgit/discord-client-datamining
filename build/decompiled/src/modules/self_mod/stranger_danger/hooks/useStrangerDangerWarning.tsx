// modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76998: for (var _fun76998_ip = 0;;) switch (_fun76998_ip) {
            case 0:
                var8 = arg0;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var1 = var7[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var4.bind(var5)(var3, var1);
                var1 = 3;
                var1 = var7[var1];
                var3 = var6.bind(var0)(var1);
                var1 = var3.useIsSpamMessageRequest;
                var4 = var1.bind(var3)(var8);
                var1 = 4;
                var1 = var7[var1];
                var3 = var6.bind(var0)(var1);
                var1 = var3.useIsMessageRequest;
                var3 = var1.bind(var3)(var8);
                var1 = 5;
                var1 = var7[var1];
                var10 = var6.bind(var0)(var1);
                var5 = var10.useChannelSafetyWarning;
                var1 = _closure1_slot3;
                var1 = var1.STRANGER_DANGER;
                var1 = var5.bind(var10)(var8, var1);
                var5 = 6;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.useUserIsTeen;
                var5 = var5.bind(var6)();
                var6 = null;
                var7 = var6 == var9;
                var6 = undefined;
                if (var7) {
                    _fun76998_ip = 183;
                    continue _fun76998
                }
            case 173:
                var7 = var9.isStaff;
                var6 = var7.bind(var9)();
            case 183:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 7;
                var2 = var9[var2];
                var7 = var7.bind(var0)(var2);
                var2 = var7.useInappropriateConversationWarningsForChannel;
                var2 = var2.bind(var7)(var8);
                var7 = var2.length;
                var2 = 0;
                var2 = var7 > var2;
                if (var5) {
                    _fun76998_ip = 234;
                    continue _fun76998
                }
            case 228:
                var5 = true;
                if (!(var5 === var6)) {
                    _fun76998_ip = 245;
                    continue _fun76998
                }
            case 234:
                if (var4) {
                    _fun76998_ip = 245;
                    continue _fun76998
                }
            case 237:
                if (var3) {
                    _fun76998_ip = 245;
                    continue _fun76998
                }
            case 240:
                if (var2) {
                    _fun76998_ip = 245;
                    continue _fun76998
                }
            case 243:
                return var1;
            case 245:
                return var0;
        }
    };
    var2.useStrangerDangerWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 9011, 566, 9812, 9813, 9169, 6508, 9010, 2]);