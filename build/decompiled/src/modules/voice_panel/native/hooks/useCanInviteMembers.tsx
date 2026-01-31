// modules/voice_panel/native/hooks/useCanInviteMembers.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useCanInviteMembers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCanInviteMembers, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot3;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun110926: for (var _fun110926_ip = 0;;) switch (_fun110926_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun110926_ip = 59;
                        continue _fun110926
                    }
                case 33:
                    var5 = _closure1_slot3;
                    var3 = var5.can;
                    var2 = _closure1_slot4;
                    var2 = var2.CONNECT;
                    var0 = var3.bind(var5)(var2, var4);
                case 59:
                    if (!var0) {
                        _fun110926_ip = 88;
                        continue _fun110926
                    }
                case 62:
                    var3 = _closure1_slot3;
                    var2 = var3.can;
                    var1 = _closure1_slot4;
                    var1 = var1.CREATE_INSTANT_INVITE;
                    var0 = var2.bind(var3)(var1, var4);
                case 88:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanInviteMembers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 483, 632, 2]);