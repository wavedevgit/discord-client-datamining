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
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/usePendingAvatarSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun49166: for (var _fun49166_ip = 0;;) switch (_fun49166_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.isTryItOut;
                var _closure2_slot0 = var3;
                var9 = var1.analyticsLocations;
                var10 = var1.guildId;
                var _closure2_slot1 = var10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var5 = var7[var1];
                var4 = undefined;
                var12 = var6.bind(var4)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var11.bind(var12)(var8, var5);
                var _closure2_slot2 = var5;
                var11 = _closure1_slot1;
                var8 = 5;
                var8 = var7[var8];
                var8 = var11.bind(var4)(var8);
                var11 = var8.bind(var4)(var9);
                var _closure2_slot3 = var11;
                var1 = var7[var1];
                var8 = var6.bind(var4)(var1);
                var7 = var8.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var6 = new Array(2);
                var6[0] = var1;
                var1 = _closure1_slot6;
                var6[1] = var1;
                var1 = function() { // Environment: var0
                    _fun49168: for (var _fun49168_ip = 0;;) switch (_fun49168_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = {};
                            if (var2) {
                                _fun49168_ip = 190;
                                continue _fun49168
                            }
                        case 15:
                            var2 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun49168_ip = 50;
                                continue _fun49168
                            }
                        case 25:
                            var4 = _closure1_slot6;
                            var2 = var4.getPendingChanges;
                            var2 = var2.bind(var4)();
                            var2 = var2.pendingAvatar;
                            _fun49168_ip = 67;
                            continue _fun49168;
                        case 50:
                            var5 = _closure1_slot4;
                            var4 = var5.getPendingAvatar;
                            var2 = var4.bind(var5)();
                        case 67:
                            var0.pendingAvatar = var2;
                            var2 = _closure2_slot1;
                            if (!(var3 == var2)) {
                                _fun49168_ip = 105;
                                continue _fun49168
                            }
                        case 80:
                            var4 = _closure1_slot6;
                            var2 = var4.getPendingChanges;
                            var2 = var2.bind(var4)();
                            var2 = var2.pendingAvatarDecoration;
                            _fun49168_ip = 122;
                            continue _fun49168;
                        case 105:
                            var5 = _closure1_slot4;
                            var4 = var5.getPendingAvatarDecoration;
                            var2 = var4.bind(var5)();
                        case 122:
                            var0.pendingAvatarDecoration = var2;
                            var2 = _closure2_slot1;
                            if (!(var3 == var2)) {
                                _fun49168_ip = 160;
                                continue _fun49168
                            }
                        case 135:
                            var3 = _closure1_slot6;
                            var2 = var3.getErrors;
                            var2 = var2.bind(var3)();
                            var2 = var2.avatarDecoration;
                            _fun49168_ip = 183;
                            continue _fun49168;
                        case 160:
                            var4 = _closure1_slot4;
                            var3 = var4.getErrors;
                            var3 = var3.bind(var4)();
                            var2 = var3.avatarDecoration;
                        case 183:
                            var0.pendingErrors = var2;
                            return var0;
                        case 190:
                            var4 = _closure1_slot6;
                            var3 = var4.getTryItOutChanges;
                            var3 = var3.bind(var4)();
                            var4 = var3.tryItOutAvatar;
                            var0.pendingAvatar = var4;
                            var3 = var3.tryItOutAvatarDecoration;
                            var0.pendingAvatarDecoration = var3;
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun49168_ip = 263;
                                continue _fun49168
                            }
                        case 241:
                            var3 = _closure1_slot6;
                            var1 = var3.getErrors;
                            var1 = var1.bind(var3)();
                            var1 = var1.avatarDecoration;
                            _fun49168_ip = 283;
                            continue _fun49168;
                        case 263:
                            var3 = _closure1_slot4;
                            var2 = var3.getErrors;
                            var2 = var2.bind(var3)();
                            var1 = var2.avatarDecoration;
                        case 283:
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
                    _fun49166_ip = 197;
                    continue _fun49166
                }
            case 191:
                var1 = var5.avatar;
            case 197:
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun49169: for (var _fun49169_ip = 0;;) switch (_fun49169_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.setNewPendingAvatar;
                            var5 = _closure2_slot2;
                            var4 = null;
                            var4 = var4 == var5;
                            if (var4) {
                                _fun49169_ip = 57;
                                continue _fun49169
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
                    _fun49170: for (var _fun49170_ip = 0;;) switch (_fun49170_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.setNewPendingAvatarDecoration;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var2, var3);
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun49170_ip = 62;
                                continue _fun49170
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
                    _fun49166_ip = 289;
                    continue _fun49166
                }
            case 263:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var5 = var6.setTryItOutAvatar;
            case 289:
                var0.setPendingAvatar = var5;
                if (!var3) {
                    _fun49166_ip = 323;
                    continue _fun49166
                }
            case 297:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1 = var2.setTryItOutAvatarDecoration;
            case 323:
                var0.setPendingAvatarDecoration = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5586, 1621, 5587, 632, 5588, 5589, 5590, 2]);