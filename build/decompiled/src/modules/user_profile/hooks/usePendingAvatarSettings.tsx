// modules/user_profile/hooks/usePendingAvatarSettings.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/usePendingAvatarSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun49665: for (var _fun49665_ip = 0;;) switch (_fun49665_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.isTryItOut;
                var _closure2_slot0 = var3;
                var9 = var1.analyticsLocations;
                var10 = var1.guildId;
                var _closure2_slot1 = var10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var5 = var7[var1];
                var4 = undefined;
                var12 = var6.bind(var4)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var11.bind(var12)(var8, var5);
                var _closure2_slot2 = var5;
                var11 = _closure1_slot1;
                var8 = 4;
                var8 = var7[var8];
                var8 = var11.bind(var4)(var8);
                var11 = var8.bind(var4)(var9);
                var _closure2_slot3 = var11;
                var1 = var7[var1];
                var8 = var6.bind(var4)(var1);
                var7 = var8.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    _fun49667: for (var _fun49667_ip = 0;;) switch (_fun49667_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = _closure1_slot5;
                            if (var0) {
                                _fun49667_ip = 80;
                                continue _fun49667
                            }
                        case 17:
                            var0 = var3.getPendingChanges;
                            var4 = _closure2_slot1;
                            var2 = var0.bind(var3)(var4);
                            var0 = {};
                            var5 = var2.pendingAvatar;
                            var0.pendingAvatar = var5;
                            var2 = var2.pendingAvatarDecoration;
                            var0.pendingAvatarDecoration = var2;
                            var2 = var3.getErrors;
                            var2 = var2.bind(var3)(var4);
                            var2 = var2.avatarDecoration;
                            var0.pendingErrors = var2;
                            return var0;
                        case 80:
                            var0 = var3.getTryItOutChanges;
                            var2 = var0.bind(var3)();
                            var0 = {};
                            var4 = var2.tryItOutAvatar;
                            var0.pendingAvatar = var4;
                            var2 = var2.tryItOutAvatarDecoration;
                            var0.pendingAvatarDecoration = var2;
                            var2 = var3.getErrors;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.avatarDecoration;
                            var0.pendingErrors = var1;
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var6, var1);
                var8 = var1.pendingAvatar;
                var7 = var1.pendingAvatarDecoration;
                var6 = var1.pendingErrors;
                var9 = _closure1_slot3;
                var1 = null;
                var12 = var1 == var5;
                var1 = undefined;
                if (var12) {
                    _fun49665_ip = 189;
                    continue _fun49665
                }
            case 183:
                var1 = var5.avatar;
            case 189:
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun49668: for (var _fun49668_ip = 0;;) switch (_fun49668_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.setNewPendingAvatar;
                            var5 = _closure2_slot2;
                            var4 = null;
                            var4 = var4 == var5;
                            if (var4) {
                                _fun49668_ip = 57;
                                continue _fun49668
                            }
                        case 47:
                            var0 = _closure2_slot2;
                            var1 = var0.avatar;
                        case 57:
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var5 = var9.bind(var4)(var1, var5);
                var9 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var10;
                var0 = function(arg0) { // Environment: var0
                    _fun49669: for (var _fun49669_ip = 0;;) switch (_fun49669_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.setNewPendingAvatarDecoration;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var2, var3);
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun49669_ip = 62;
                                continue _fun49669
                            }
                        case 53:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                        case 62:
                            return var0;
                    }
                };
                var1 = var9.bind(var4)(var0, var1);
                var0 = {};
                var0.pendingAvatar = var8;
                var0.pendingAvatarDecoration = var7;
                var0.pendingErrors = var6;
                if (!var3) {
                    _fun49665_ip = 281;
                    continue _fun49665
                }
            case 255:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 6;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var5 = var6.setTryItOutAvatar;
            case 281:
                var0.setPendingAvatar = var5;
                if (!var3) {
                    _fun49665_ip = 315;
                    continue _fun49665
                }
            case 289:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1 = var2.setTryItOutAvatarDecoration;
            case 315:
                var0.setPendingAvatarDecoration = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 5634, 632, 5635, 5636, 5637, 2]);