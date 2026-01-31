// modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyWarningTypes;
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.HOUR;
    var7 = var3 * var7;
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.HOUR;
    var3 = 12;
    var3 = var3 * var6;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSafetyToolsButtonTooltipForChannel, environment: var1
        _fun72241: for (var _fun72241_ip = 0;;) switch (_fun72241_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var1 = var7[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var1 = var4.useInappropriateConversationSafetyToolsWarningForChannel;
                var4 = var1.bind(var4)(var6);
                var1 = 3;
                var1 = var7[var1];
                var5 = var3.bind(var0)(var1);
                var1 = var5.useInappropriateConversationWarningsForChannel;
                var5 = var1.bind(var5)(var6);
                var1 = 4;
                var1 = var7[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.useShouldShowInitialSafetyToolsButtonTooltip;
                var1 = var1.bind(var3)(var6);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun72241_ip = 397;
                    continue _fun72241
                }
            case 96:
                if (var1) {
                    _fun72241_ip = 397;
                    continue _fun72241
                }
            case 102:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.shouldShowTakeoverForWarnings;
                var1 = var1.bind(var4)(var5);
                if (var1) {
                    _fun72241_ip = 397;
                    continue _fun72241
                }
            case 139:
                var4 = var5.some;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot2;
                    var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var6 = var5.filter;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var7 = var6.bind(var5)(var4);
                var6 = var7.sort;
                var4 = function(arg0, arg1) { // Environment: var2
                    _fun72244: for (var _fun72244_ip = 0;;) switch (_fun72244_ip) {
                        case 0:
                            var0 = arg1;
                            var1 = var0.dismiss_timestamp;
                            var0 = arg0;
                            var0 = var0.dismiss_timestamp;
                            var1 = var1 < var0;
                            var0 = 1;
                            if (!var1) {
                                _fun72244_ip = 34;
                                continue _fun72244
                            }
                        case 28:
                            var0 = -1;
                        case 34:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var4);
                var7 = var6.length;
                var4 = 1;
                if (!(!(var7 < var4))) {
                    _fun72241_ip = 397;
                    continue _fun72241
                }
            case 207:
                var4 = 0;
                var4 = var6[var4];
                var10 = var4.dismiss_timestamp;
                var6 = var1;
                if (!(var6 === var0)) {
                    _fun72241_ip = 228;
                    continue _fun72241
                }
            case 226:
                var6 = false;
            case 228:
                var4 = var3 == var10;
                var1 = true;
                if (var4) {
                    _fun72241_ip = 335;
                    continue _fun72241
                }
            case 237:
                var4 = global;
                var7 = var4.Date;
                var9 = var7.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = var9;
                var11 = var10;
                var7 = new var12[var7](var11, var10);
                var9 = var7 instanceof Object ? var7 : var9;
                var7 = var9.getTime;
                var7 = var7.bind(var9)();
                if (var6) {
                    _fun72241_ip = 287;
                    continue _fun72241
                }
            case 281:
                var6 = _closure1_slot4;
                _fun72241_ip = 291;
                continue _fun72241;
            case 287:
                var6 = _closure1_slot3;
            case 291:
                var6 = var7 + var6;
                var4 = var4.Date;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var7;
                var4 = new var12[var4](var11);
                var7 = var4 instanceof Object ? var4 : var7;
                var4 = var7.getTime;
                var4 = var4.bind(var7)();
                var1 = var4 >= var6;
            case 335:
                if (!var1) {
                    _fun72241_ip = 397;
                    continue _fun72241
                }
            case 338:
                var4 = var5.filter;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var4 = var4.bind(var5)(var1);
                var5 = var4.findLast;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot2;
                    var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var5.bind(var4)(var1);
                if (!(var3 == var1)) {
                    _fun72241_ip = 395;
                    continue _fun72241
                }
            case 377:
                var3 = var4.findLast;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot2;
                    var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_2;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var2);
            case 395:
                return var1;
            case 397:
                return var0;
        }
    };
    var2.useSafetyToolsButtonTooltipForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8958, 667, 8953, 8957, 9000, 9001, 2]);