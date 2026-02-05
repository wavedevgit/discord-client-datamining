// modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1() {
        _fun87189: for (var _fun87189_ip = 0;;) switch (_fun87189_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getDismissedGuildContent;
                var0 = arg1;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun87189_ip = 67;
                    continue _fun87189
                }
            case 30:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hasBit;
                var1 = arg0;
                var0 = var2.bind(var3)(var4, var1);
            case 67:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun87190: for (var _fun87190_ip = 0;;) switch (_fun87190_ip) {
            case 0:
                var2 = arg0;
                var9 = arg1;
                var7 = arg2;
                var5 = arg4;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var7;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.updateUserGuildSettings;
                var8 = _closure1_slot6;
                if (var2) {
                    _fun87190_ip = 72;
                    continue _fun87190
                }
            case 64:
                var2 = var8.FREQUENT_USER_ACTION;
                _fun87190_ip = 78;
                continue _fun87190;
            case 72:
                var2 = var8.INFREQUENT_USER_ACTION;
            case 78:
                var1 = function(arg0) { // Environment: var1
                    _fun87191: for (var _fun87191_ip = 0;;) switch (_fun87191_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = _closure1_slot7;
                            var5 = _closure2_slot1;
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var4 = var6.bind(var0)(var5, var4);
                            var5 = _closure2_slot0;
                            if (!var5) {
                                _fun87191_ip = 39;
                                continue _fun87191
                            }
                        case 36:
                            if (var4) {
                                _fun87191_ip = 114;
                                continue _fun87191
                            }
                        case 39:
                            var5 = _closure2_slot0;
                            if (var5) {
                                _fun87191_ip = 49;
                                continue _fun87191
                            }
                        case 46:
                            if (!var4) {
                                _fun87191_ip = 114;
                                continue _fun87191
                            }
                        case 49:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 4;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            if (var4) {
                                _fun87191_ip = 84;
                                continue _fun87191
                            }
                        case 76:
                            var4 = var3.removeBit;
                            _fun87191_ip = 90;
                            continue _fun87191;
                        case 84:
                            var4 = var3.addBit;
                        case 90:
                            var3 = var2.dismissedGuildContent;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var0)(var3, var1);
                            var2.dismissedGuildContent = var1;
                            return var0;
                        case 114:
                            var0 = false;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var7, var1, var2);
                var1 = arg3;
                if (!var1) {
                    _fun87190_ip = 195;
                    continue _fun87190
                }
            case 98:
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 7;
                var1 = var11[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.DISMISSIBLE_CONTENT_DISMISSED;
                var1 = {};
                var10 = _closure1_slot0;
                var8 = 8;
                var8 = var11[var8];
                var8 = var10.bind(var0)(var8);
                var8 = var8.DismissibleGuildContent;
                var8 = var8[var9];
                var1.type = var8;
                var1.guild_id = var7;
                var7 = null;
                if (!(var7 == var5)) {
                    _fun87190_ip = 185;
                    continue _fun87190
                }
            case 175:
                var6 = _closure1_slot5;
                var5 = var6.UNKNOWN;
            case 185:
                var1.action = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 195:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserSettingsDelay;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isContentDismissed = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsContentDismissed = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var6 = _closure1_slot8;
        var0 = undefined;
        var11 = true;
        var10 = arg0;
        var9 = arg1;
        var8 = arg2;
        var7 = arg3;
        var12 = undefined;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var2.markContentAsDismissed = var3;
    var1 = function arg0, arg1() {
        var4 = _closure1_slot8;
        var0 = undefined;
        var3 = false;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var2.unmarkContentAsDismissed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 660, 1369, 665, 1357, 566, 1355, 795, 1358, 2]);