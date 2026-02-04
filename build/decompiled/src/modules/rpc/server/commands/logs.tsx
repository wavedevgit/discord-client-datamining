// modules/rpc/server/commands/logs.tsx
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
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var8 = var1.RPC_APPLICATION_LOGGING_CATEGORY;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var11 = var8;
    var1 = new var12[var1](var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = var3.CAPTURE_LOG;
    var3 = {};
    var8 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var6 = var3.bind(var4)();
        var5 = var6.max;
        var3 = 10;
        var5 = var5.bind(var6)(var3);
        var3 = var5.required;
        var3 = var3.bind(var5)();
        var0.level = var3;
        var3 = var4.string;
        var5 = var3.bind(var4)();
        var4 = var5.max;
        var3 = 1000;
        var4 = var4.bind(var5)(var3);
        var3 = var4.required;
        var3 = var3.bind(var4)();
        var0.message = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function arg0() {
        _fun98138: for (var _fun98138_ip = 0;;) switch (_fun98138_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.socket;
                var0 = var0.args;
                var4 = var0.level;
                var7 = var0.message;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.validatePostMessageTransport;
                var3 = var2.transport;
                var3 = var5.bind(var6)(var3);
                var2 = var2.application;
                var6 = var2.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var3 = '';
                var2 = ' - ';
                var3 = var5.bind(var3)(var6, var2, var7);
                var2 = 'log';
                if (!(var2 !== var4)) {
                    _fun98138_ip = 214;
                    continue _fun98138
                }
            case 116:
                var2 = 'warn';
                if (!(var2 !== var4)) {
                    _fun98138_ip = 198;
                    continue _fun98138
                }
            case 124:
                var2 = 'debug';
                if (!(var2 !== var4)) {
                    _fun98138_ip = 181;
                    continue _fun98138
                }
            case 132:
                var2 = 'info';
                if (!(var2 !== var4)) {
                    _fun98138_ip = 164;
                    continue _fun98138
                }
            case 140:
                var2 = 'error';
                if (!(var2 === var4)) {
                    _fun98138_ip = 228;
                    continue _fun98138
                }
            case 148:
                var4 = _closure1_slot3;
                var2 = var4.error;
                var2 = var2.bind(var4)(var3);
                _fun98138_ip = 228;
                continue _fun98138;
            case 164:
                var4 = _closure1_slot3;
                var2 = var4.info;
                var2 = var2.bind(var4)(var3);
                _fun98138_ip = 228;
                continue _fun98138;
            case 181:
                var4 = _closure1_slot3;
                var2 = var4.verbose;
                var2 = var2.bind(var4)(var3);
                _fun98138_ip = 228;
                continue _fun98138;
            case 198:
                var4 = _closure1_slot3;
                var2 = var4.warn;
                var2 = var2.bind(var4)(var3);
                _fun98138_ip = 228;
                continue _fun98138;
            case 214:
                var2 = _closure1_slot3;
                var1 = var2.log;
                var1 = var1.bind(var2)(var3);
            case 228:
                return var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/logs.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3, 7933, 7935, 2]);