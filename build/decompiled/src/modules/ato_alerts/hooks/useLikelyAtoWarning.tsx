// modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/ato_alerts/hooks/useLikelyAtoWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77045: for (var _fun77045_ip = 0;;) switch (_fun77045_ip) {
            case 0:
                var7 = arg0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 1;
                var2 = var8[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var2);
                var2 = var3.useIsSpamMessageRequest;
                var5 = var2.bind(var3)(var7);
                var2 = 2;
                var2 = var8[var2];
                var3 = var6.bind(var0)(var2);
                var2 = var3.useIsMessageRequest;
                var4 = var2.bind(var3)(var7);
                var2 = 3;
                var2 = var8[var2];
                var3 = var6.bind(var0)(var2);
                var2 = var3.useChannelSafetyWarning;
                var1 = _closure1_slot2;
                var1 = var1.LIKELY_ATO;
                var1 = var2.bind(var3)(var7, var1);
                var2 = 4;
                var2 = var8[var2];
                var3 = var6.bind(var0)(var2);
                var2 = var3.useInappropriateConversationWarningsForChannel;
                var2 = var2.bind(var3)(var7);
                var3 = var2.length;
                var2 = 0;
                var3 = var3 > var2;
                var2 = 5;
                var2 = var8[var2];
                var6 = var6.bind(var0)(var2);
                var2 = var6.useStrangerDangerWarning;
                var6 = var2.bind(var6)(var7);
                var2 = null;
                var2 = var2 != var6;
                if (var5) {
                    _fun77045_ip = 173;
                    continue _fun77045
                }
            case 162:
                if (var4) {
                    _fun77045_ip = 173;
                    continue _fun77045
                }
            case 165:
                if (var3) {
                    _fun77045_ip = 173;
                    continue _fun77045
                }
            case 168:
                if (var2) {
                    _fun77045_ip = 173;
                    continue _fun77045
                }
            case 171:
                return var1;
            case 173:
                return var0;
        }
    };
    var2.useLikelyAtoWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9032, 9833, 9834, 9190, 9031, 9832, 2]);