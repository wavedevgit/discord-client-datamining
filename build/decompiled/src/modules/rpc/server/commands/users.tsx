// modules/rpc/server/commands/users.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var15 = var1.RPC_EMBEDDED_APP_SCOPE;
    var14 = var1.RPC_LOCAL_SCOPE;
    var12 = var1.RPC_SCOPE_CONFIG;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = {};
    var6 = var3.GET_USER;
    var7 = 3;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createRPCCommand;
    var7 = var3.GET_USER;
    var3 = {};
    var11 = {};
    var13 = var12.ANY;
    var12 = new Array(2);
    var12[0] = var15;
    var12[1] = var14;
    var11[var13] = var12;
    var3.scope = var11;
    var10 = function arg0() {
        _fun98258: for (var _fun98258_ip = 0;;) switch (_fun98258_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var3 = var0.id;
                var2 = _closure1_slot2;
                var0 = var2.getUser;
                var3 = var0.bind(var2)(var3);
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun98258_ip = 68;
                    continue _fun98258
                }
            case 41:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var0 = var1.bind(var2)(var3);
            case 68:
                return var0;
        }
    };
    var3.handler = var10;
    var3 = var8.bind(var9)(var7, var3);
    var1[var6] = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/users.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 3315, 660, 12751, 7895, 2]);