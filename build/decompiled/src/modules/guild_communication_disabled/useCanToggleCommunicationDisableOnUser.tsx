// modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0, arg1() {
        _fun61902: for (var _fun61902_ip = 0;;) switch (_fun61902_ip) {
            case 0:
                var1 = arguments[2];
                var9 = undefined;
                if (!(var1 === var9)) {
                    _fun61902_ip = 43;
                    continue _fun61902
                }
            case 9:
                var3 = _closure1_slot6;
                var0 = new Array(3);
                var0[0] = var3;
                var3 = _closure1_slot4;
                var0[1] = var3;
                var2 = _closure1_slot5;
                var0[2] = var2;
                var1 = var0;
            case 43:
                var4 = var1;
                var0 = var4[Symbol.iterator];
                var4 = var0().next;
                var3 = var4().value;
                var1 = var0;
                var1 = var1 === var9;
                var2 = undefined;
                if (var1) {
                    _fun61902_ip = 68;
                    continue _fun61902
                }
            case 65:
                var2 = var3;
            case 68:
                var3 = undefined;
                if (var1) {
                    _fun61902_ip = 98;
                    continue _fun61902
                }
            case 73:
                var6 = var4().value;
                var5 = var0;
                var5 = var5 === var9;
                var3 = undefined;
                var1 = var5;
                if (var5) {
                    _fun61902_ip = 98;
                    continue _fun61902
                }
            case 92:
                var3 = var6;
                var1 = var5;
            case 98:
                var7 = undefined;
                if (var1) {
                    _fun61902_ip = 128;
                    continue _fun61902
                }
            case 103:
                var5 = var4().value;
                var4 = var0;
                var4 = var4 === var9;
                var7 = undefined;
                var1 = var4;
                if (var4) {
                    _fun61902_ip = 128;
                    continue _fun61902
                }
            case 122:
                var7 = var5;
                var1 = var4;
            case 128:
                if (var1) {
                    _fun61902_ip = 134;
                    continue _fun61902
                }
            case 131:
                var0.return();
            case 134:
                var1 = var3.getGuild;
                var0 = arg0;
                var6 = var1.bind(var3)(var0);
                var1 = var2.getUser;
                var0 = arg1;
                var5 = var1.bind(var2)(var0);
                var1 = null;
                var0 = var1 != var6;
                if (!var0) {
                    _fun61902_ip = 174;
                    continue _fun61902
                }
            case 170:
                var0 = var1 != var5;
            case 174:
                if (!var0) {
                    _fun61902_ip = 303;
                    continue _fun61902
                }
            case 180:
                var1 = var5.isNonUserBot;
                var1 = var1.bind(var5)();
                var1 = !var1;
                if (!var1) {
                    _fun61902_ip = 300;
                    continue _fun61902
                }
            case 196:
                var2 = _closure1_slot3;
                var2 = var2.bind(var9)(var6, var5);
                if (var2) {
                    _fun61902_ip = 268;
                    continue _fun61902
                }
            case 212:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 5;
                var4 = var10[var4];
                var9 = var8.bind(var9)(var4);
                var8 = var9.can;
                var4 = {};
                var10 = _closure1_slot7;
                var10 = var10.ADMINISTRATOR;
                var4.permission = var10;
                var4.user = var5;
                var4.context = var6;
                var2 = var8.bind(var9)(var4);
            case 268:
                var2 = !var2;
                if (!var2) {
                    _fun61902_ip = 297;
                    continue _fun61902
                }
            case 274:
                var4 = var7.canManageUser;
                var3 = _closure1_slot7;
                var3 = var3.MODERATE_MEMBERS;
                var2 = var4.bind(var7)(var3, var5, var6);
            case 297:
                var1 = var2;
            case 300:
                var0 = var1;
            case 303:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var0)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/useCanToggleCommunicationDisableOnUser.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot6;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = _closure1_slot4;
        var2[1] = var7;
        var1 = _closure1_slot5;
        var2[2] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var5 = _closure1_slot6;
            var1 = new Array(3);
            var1[0] = var5;
            var5 = _closure1_slot4;
            var1[1] = var5;
            var0 = _closure1_slot5;
            var1[2] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.canToggleCommunicationDisableOnUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1410, 3091, 1621, 660, 3096, 566, 2]);