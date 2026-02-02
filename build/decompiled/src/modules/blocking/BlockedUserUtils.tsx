// modules/blocking/BlockedUserUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.isBlockedOrIgnored;
        var0 = arg0;
        var0 = var0.userId;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/blocking/BlockedUserUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.isNotNullish;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun101028: for (var _fun101028_ip = 0;;) switch (_fun101028_ip) {
                case 0:
                    var1 = arg0;
                    var3 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun101028_ip = 41;
                        continue _fun101028
                    }
                case 16:
                    var4 = _closure1_slot3;
                    var3 = var4.isBlockedOrIgnored;
                    var0 = var1.id;
                    var0 = var3.bind(var4)(var0);
                    _fun101028_ip = 60;
                    continue _fun101028;
                case 41:
                    var3 = _closure2_slot0;
                    var2 = var3.includes;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 60:
                    var0 = !var0;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.filterOutBlockedOrIgnoredUsers = var4;
    var4 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun101030: for (var _fun101030_ip = 0;;) switch (_fun101030_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun101030_ip = 36;
                        continue _fun101030
                    }
                case 16:
                    var2 = _closure1_slot3;
                    var0 = var2.isBlockedOrIgnored;
                    var0 = var0.bind(var2)(var3);
                    _fun101030_ip = 50;
                    continue _fun101030;
                case 36:
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = var1.bind(var2)(var3);
                case 50:
                    var0 = !var0;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.filterOutBlockedOrIgnoredUserIds = var4;
    var4 = function arg0() {
        var2 = arg0;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.isBlockedOrIgnored;
            var0 = arg0;
            var0 = var0.ownerId;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.filterOutStreamsByBlockedOwner = var4;
    var4 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            _fun101034: for (var _fun101034_ip = 0;;) switch (_fun101034_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun101034_ip = 36;
                        continue _fun101034
                    }
                case 16:
                    var2 = _closure1_slot3;
                    var0 = var2.isBlockedOrIgnored;
                    var0 = var0.bind(var2)(var3);
                    _fun101034_ip = 50;
                    continue _fun101034;
                case 36:
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = var1.bind(var2)(var3);
                case 50:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasBlockedOrIgnoredUserIds = var4;
    var2.voiceStateHasBlockedUsers = var3;
    var1 = function arg0() {
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot4;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = !var0;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.keyBy;
        var0 = 'userId';
        var1 = var1.bind(var2)(var0);
        var0 = var1.value;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.filterBlockedUsersFromVoiceStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3061, 1304, 22, 2]);