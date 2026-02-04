// modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun72492: for (var _fun72492_ip = 0;;) switch (_fun72492_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot5;
                    var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var2 = var3.length;
                var0 = 0;
                var0 = var2 > var0;
                if (!var0) {
                    _fun72492_ip = 54;
                    continue _fun72492
                }
            case 36:
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 54:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SafetyWarningTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun72495: for (var _fun72495_ip = 0;;) switch (_fun72495_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var5 = var1.bind(var2)();
                var1 = null;
                var2 = var1 == var5;
                var4 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun72495_ip = 39;
                    continue _fun72495
                }
            case 29:
                var2 = var5.isStaff;
                var3 = var2.bind(var5)();
            case 39:
                var2 = true;
                var2 = var2 === var3;
                var3 = _closure1_slot2;
                var3 = var3.settings;
                var5 = var3.privacy;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun72495_ip = 90;
                    continue _fun72495
                }
            case 70:
                var5 = var5.inappropriateConversationWarnings;
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun72495_ip = 90;
                    continue _fun72495
                }
            case 85:
                var3 = var5.value;
            case 90:
                var1 = var1 == var3;
                if (var1) {
                    _fun72495_ip = 100;
                    continue _fun72495
                }
            case 97:
                var1 = var3;
            case 100:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.getUserIsTeen;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun72495_ip = 136;
                    continue _fun72495
                }
            case 133:
                var0 = var2;
            case 136:
                if (!var0) {
                    _fun72495_ip = 142;
                    continue _fun72495
                }
            case 139:
                var0 = var1;
            case 142:
                return var0;
        }
    };
    var2.getSafetyAlertsSettingOrDefault = var4;
    var4 = function arg0() {
        _fun72496: for (var _fun72496_ip = 0;;) switch (_fun72496_ip) {
            case 0:
                var3 = function arg0() {
                    var2 = _closure1_slot4;
                    var1 = var2.getChannelSafetyWarnings;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot5;
                        var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = undefined;
                var1 = arg0;
                var3 = var3.bind(var2)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                var2 = 0;
                if (!(!(var1 > var2))) {
                    _fun72496_ip = 84;
                    continue _fun72496
                }
            case 47:
                var1 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.dismiss_timestamp;
                    var0 = null;
                    var0 = var0 == var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var4 = var1.length;
                var3 = 1;
                var0 = null;
                if (!(var3 === var4)) {
                    _fun72496_ip = 82;
                    continue _fun72496
                }
            case 78:
                var0 = var1[var2];
            case 82:
                return var0;
            case 84:
                var0 = null;
                return var0;
        }
    };
    var2.getInappropriateConversationTakeoverForChannel = var4;
    var3 = function arg0() {
        _fun72501: for (var _fun72501_ip = 0;;) switch (_fun72501_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.safetyWarnings;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun72501_ip = 38;
                    continue _fun72501
                }
            case 18:
                var3 = _closure1_slot6;
                var2 = var1.safetyWarnings;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 38:
                return var0;
        }
    };
    var2.shouldShowInappropriateConversationTakeoverForChannelRecord = var3;
    var2.shouldShowTakeoverForWarnings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1621, 9014, 9058, 2]);