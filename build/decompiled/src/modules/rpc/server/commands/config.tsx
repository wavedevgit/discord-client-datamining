// modules/rpc/server/commands/config.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.TransportTypes;
    var _closure1_slot2 = var3;
    var8 = var1.RPC_AUTHENTICATED_SCOPE;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = var3.SET_CONFIG;
    var3 = {};
    var3.scope = var8;
    var8 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.boolean;
        var3 = var3.bind(var4)();
        var0.use_interactive_pip = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function arg0() {
        _fun98042: for (var _fun98042_ip = 0;;) switch (_fun98042_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.socket;
                var1 = var1.args;
                var5 = var1.use_interactive_pip;
                var3 = var0.transport;
                var2 = _closure1_slot2;
                var2 = var2.POST_MESSAGE;
                if (!(var3 === var2)) {
                    _fun98042_ip = 230;
                    continue _fun98042
                }
            case 47:
                var2 = var0.application;
                var3 = var2.id;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98042_ip = 160;
                    continue _fun98042
                }
            case 63:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'EMBEDDED_ACTIVITY_SET_CONFIG';
                var2.type = var6;
                var6 = var0.application;
                var6 = var6.id;
                var2.applicationId = var6;
                var6 = {};
                var6.useInteractivePIP = var5;
                var2.config = var6;
                var2 = var3.bind(var4)(var2);
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = {};
                var2.use_interactive_pip = var5;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 160:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = {};
                var2 = _closure1_slot3;
                var2 = var2.INVALID_COMMAND;
                var4.errorCode = var2;
                var2 = var5.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = 'invalid application';
                var10 = var3;
                var9 = var4;
                var2 = new var10[var5](var9, var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 230:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = {};
                var1 = _closure1_slot3;
                var1 = var1.INVALID_COMMAND;
                var2.errorCode = var1;
                var5 = var0.transport;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var1 = 'command not available from "';
                var0 = ' transport';
                var8 = var4.bind(var1)(var5, var0);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var2;
                var0 = new var10[var3](var9, var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/config.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3356, 660, 7933, 7930, 806, 2]);