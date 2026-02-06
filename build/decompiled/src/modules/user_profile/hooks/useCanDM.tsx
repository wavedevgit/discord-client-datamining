// modules/user_profile/hooks/useCanDM.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useCanDM.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 6;
        var6 = var5[var1];
        var2 = undefined;
        var9 = var3.bind(var2)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.getId;
            var1 = var0.bind(var1)();
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var _closure2_slot2 = var6;
        var6 = var5[var1];
        var9 = var3.bind(var2)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            _fun92190: for (var _fun92190_ip = 0;;) switch (_fun92190_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun92190_ip = 38;
                        continue _fun92190
                    }
                case 16:
                    var3 = _closure1_slot3;
                    var2 = var3.isLurking;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var6 = var8.bind(var9)(var7, var6);
        var _closure2_slot3 = var6;
        var6 = 5;
        var6 = var5[var6];
        var6 = var3.bind(var2)(var6);
        var7 = var6.RestrictedGuildIds;
        var6 = var7.useSetting;
        var6 = var6.bind(var7)();
        var _closure2_slot4 = var6;
        var1 = var5[var1];
        var3 = var3.bind(var2)(var1);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot6;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot5;
        var1[1] = var5;
        var4 = _closure1_slot2;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun92191: for (var _fun92191_ip = 0;;) switch (_fun92191_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var0 = !var0;
                    if (!var0) {
                        _fun92191_ip = 20;
                        continue _fun92191
                    }
                case 13:
                    var2 = _closure2_slot3;
                    var0 = !var2;
                case 20:
                    if (!var0) {
                        _fun92191_ip = 95;
                        continue _fun92191
                    }
                case 23:
                    var5 = _closure1_slot6;
                    var4 = var5.isFriend;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    if (var2) {
                        _fun92191_ip = 92;
                        continue _fun92191
                    }
                case 48:
                    var5 = _closure1_slot5;
                    var4 = var5.memberOf;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.find;
                    var3 = function(arg0) { // Environment: var3
                        var2 = _closure2_slot4;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    var2 = var3 != var4;
                case 92:
                    var0 = var2;
                case 95:
                    if (var0) {
                        _fun92191_ip = 175;
                        continue _fun92191
                    }
                case 98:
                    var4 = _closure1_slot2;
                    var3 = var4.getGameFriendsForUser;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.length;
                    var1 = 0;
                    var1 = var3 > var1;
                    if (!var1) {
                        _fun92191_ip = 172;
                        continue _fun92191
                    }
                case 134:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.AllowGameFriendDmsInDiscord;
                    var2 = var3.getSetting;
                    var1 = var2.bind(var3)();
                case 172:
                    var0 = var1;
                case 175:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun92193: for (var _fun92193_ip = 0;;) switch (_fun92193_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var1 = _closure1_slot4;
                var0 = var1.getId;
                var0 = var0.bind(var1)();
                var9 = var0 === var6;
                var7 = null;
                var8 = var7 != var4;
                if (!var8) {
                    _fun92193_ip = 53;
                    continue _fun92193
                }
            case 38:
                var1 = _closure1_slot3;
                var0 = var1.isLurking;
                var8 = var0.bind(var1)(var4);
            case 53:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 5;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var1 = var0.RestrictedGuildIds;
                var0 = var1.getSetting;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var1 = _closure1_slot6;
                var0 = var1.isFriend;
                var1 = var0.bind(var1)(var6);
                var0 = !var9;
                if (var9) {
                    _fun92193_ip = 119;
                    continue _fun92193
                }
            case 116:
                var0 = !var8;
            case 119:
                if (!var0) {
                    _fun92193_ip = 164;
                    continue _fun92193
                }
            case 122:
                if (var1) {
                    _fun92193_ip = 161;
                    continue _fun92193
                }
            case 125:
                var9 = _closure1_slot5;
                var8 = var9.memberOf;
                var9 = var8.bind(var9)(var6);
                var8 = var9.find;
                var3 = function(arg0) { // Environment: var3
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var3 = var8.bind(var9)(var3);
                var1 = var7 != var3;
            case 161:
                var0 = var1;
            case 164:
                if (var0) {
                    _fun92193_ip = 232;
                    continue _fun92193
                }
            case 167:
                var3 = _closure1_slot2;
                var1 = var3.getGameFriendsForUser;
                var1 = var1.bind(var3)(var6);
                var3 = var1.length;
                var1 = 0;
                var1 = var3 > var1;
                if (!var1) {
                    _fun92193_ip = 229;
                    continue _fun92193
                }
            case 196:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var3 = var2.AllowGameFriendDmsInDiscord;
                var2 = var3.getSetting;
                var1 = var2.bind(var3)();
            case 229:
                var0 = var1;
            case 232:
                return var0;
        }
    };
    var2.canDm = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11366, 3094, 1216, 1681, 3102, 1348, 566, 2]);