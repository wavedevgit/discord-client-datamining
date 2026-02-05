// modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.guildId;
        var0 = var0.onClose;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 0;
        var4 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.pushLazy;
        var7 = _closure1_slot0;
        var3 = 2;
        var3 = var2[var3];
        var7 = var7.bind(var0)(var3);
        var3 = 1;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var7.bind(var0)(var3, var2);
        var2 = {};
        var2.guildId = var6;
        var1 = function() {
            _fun79359: for (var _fun79359_ip = 0;;) switch (_fun79359_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.popWithKey;
                    var1 = 'ROLE_CONNECTIONS_MODAL_KEY';
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun79359_ip = 62;
                        continue _fun79359
                    }
                case 54:
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                case 62:
                    return var0;
            }
        };
        var2.onClose = var1;
        var1 = 'ROLE_CONNECTIONS_MODAL_KEY';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openGuildRoleConnectionsModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4561, 9943, 1307, 2]);