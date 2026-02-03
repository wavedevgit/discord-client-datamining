// modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun79554: for (var _fun79554_ip = 0;;) switch (_fun79554_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var3 = var0.userId;
                var4 = var0.cancelButtonCallback;
                var2 = _closure1_slot3;
                var0 = var2.getUser;
                var5 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun79554_ip = 126;
                    continue _fun79554
                }
            case 43:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 3;
                var2 = var0[var2];
                var8 = undefined;
                var3 = var3.bind(var8)(var2);
                var2 = var3.pushLazy;
                var7 = _closure1_slot0;
                var1 = 5;
                var1 = var0[var1];
                var7 = var7.bind(var8)(var1);
                var1 = 4;
                var1 = var0[var1];
                var0 = var0.paths;
                var1 = var7.bind(var8)(var1, var0);
                var0 = {};
                var0.guildId = var6;
                var0.user = var5;
                var0.cancelButtonCallback = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var2.openDisableCommunication = var3;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var1 = var0.userId;
        var _closure2_slot1 = var1;
        var0 = var0.cancelButtonCallback;
        var _closure2_slot2 = var0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openLazy;
        var1 = {};
        var4 = function() {
            var2 = _closure1_slot0;
            var0 = _closure1_slot2;
            var1 = 5;
            var1 = var0[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = 7;
            var1 = var0[var1];
            var0 = var0.paths;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var1 = var1.default;
                var _closure4_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = _closure4_slot0;
                    var1 = {};
                    var6 = arg0;
                    var7 = var1;
                    var0 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot0;
                    var4 = 'guildId';
                    var1[var4] = var5;
                    var5 = _closure2_slot1;
                    var4 = 'userId';
                    var1[var4] = var5;
                    var4 = _closure2_slot2;
                    var0 = 'onCancel';
                    var1[var0] = var4;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1.importer = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.openEnableCommunication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 4561, 10109, 1307, 3936, 10112, 2]);