// modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun56238: for (var _fun56238_ip = 0;;) switch (_fun56238_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var5 = null;
                var1 = var5 != var3;
                var0 = null;
                if (!var1) {
                    _fun56238_ip = 41;
                    continue _fun56238
                }
            case 20:
                var1 = var5 != var4;
                var0 = null;
                if (!var1) {
                    _fun56238_ip = 41;
                    continue _fun56238
                }
            case 29:
                var1 = var2.getMember;
                var0 = var1.bind(var2)(var3, var4);
            case 41:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun56239: for (var _fun56239_ip = 0;;) switch (_fun56239_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var2 = var1 == var3;
                var4 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun56239_ip = 22;
                    continue _fun56239
                }
            case 16:
                var0 = var3.communicationDisabledUntil;
            case 22:
                var2 = var1 != var0;
                var1 = null;
                if (!var2) {
                    _fun56239_ip = 34;
                    continue _fun56239
                }
            case 31:
                var1 = var0;
            case 34:
                var0 = new Array(2);
                var0[0] = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isMemberCommunicationDisabled;
                var1 = var1.bind(var2)(var3);
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var3 = function arg0, arg1() {
        var7 = arg0;
        var8 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure1_slot2;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var5.bind(var6)(var4, var0, var3);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot6 = var3;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/useUserCommunicationDisabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun56242: for (var _fun56242_ip = 0;;) switch (_fun56242_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var4.bind(var5)(var2, var0);
                var2 = _closure1_slot6;
                var1 = null;
                var4 = var1 == var0;
                var1 = undefined;
                if (var4) {
                    _fun56242_ip = 75;
                    continue _fun56242
                }
            case 70:
                var1 = var0.id;
            case 75:
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useCurrentUserCommunicationDisabled = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot5;
        var5 = _closure1_slot4;
        var4 = _closure1_slot2;
        var1 = undefined;
        var3 = arg0;
        var0 = arg1;
        var0 = var5.bind(var1)(var3, var0, var4);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.userCommunicationDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1613, 566, 3041, 2]);