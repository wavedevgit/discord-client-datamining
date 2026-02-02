// modules/rpc/server/commands/networking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var8 = var1.RPC_LOCAL_SCOPE;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.Endpoints;
    var _closure1_slot3 = var3;
    var3 = var1.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = var1.RPCCommands;
    var1 = {};
    var9 = var3.GET_NETWORKING_CONFIG;
    var6 = {};
    var6.scope = var8;
    var10 = function() {
        var11 = global;
        var3 = var11.Promise;
        var2 = var3.all;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 2;
        var1 = var8[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var10 = var1.HTTP;
        var9 = var10.get;
        var1 = {
            'url': null,
            'retries': 3,
            'rejectWithError': false
        };
        var12 = var11.location;
        var12 = var12.protocol;
        var11 = var11.window;
        var11 = var11.GLOBAL_ENV;
        var11 = var11.NETWORKING_ENDPOINT;
        var11 = var12 + var11;
        var1.url = var11;
        var10 = var9.bind(var10)(var1);
        var9 = var10.then;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var0 = var0.address;
            return var0;
        };
        var9 = var9.bind(var10)(var1);
        var1 = new Array(2);
        var1[0] = var9;
        var4 = var8[var4];
        var4 = var6.bind(var5)(var4);
        var6 = var4.HTTP;
        var5 = var6.post;
        var4 = {
            'url': null,
            'retries': 3,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var7 = _closure1_slot3;
        var7 = var7.NETWORKING_TOKEN;
        var4.url = var7;
        var6 = var5.bind(var6)(var4);
        var5 = var6.then;
        var4 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var0 = var0.token;
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var1[1] = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun98092: for (var _fun98092_ip = 0;;) switch (_fun98092_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4[Symbol.iterator];
                    var4 = var0().next;
                    var1 = var4().value;
                    var2 = var0;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if (var3) {
                        _fun98092_ip = 27;
                        continue _fun98092
                    }
                case 24:
                    var2 = var1;
                case 27:
                    var1 = undefined;
                    if (var3) {
                        _fun98092_ip = 57;
                        continue _fun98092
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var0;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun98092_ip = 57;
                        continue _fun98092
                    }
                case 51:
                    var1 = var5;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun98092_ip = 63;
                        continue _fun98092
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = {};
                    var0.address = var2;
                    var0.token = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.NETWORKING_SYSTEM_METRICS;
    var6 = {};
    var6.scope = var8;
    var10 = function arg0() {
        var1 = arg0;
        var0 = var1.socket;
        var4 = var1.args;
        var0 = var0.application;
        var0 = var0.id;
        var4.application_id = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.track;
        var1 = _closure1_slot4;
        var1 = var1.NETWORKING_SYSTEM_METRICS;
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var6.handler = var10;
    var1[var9] = var6;
    var9 = var3.NETWORKING_PEER_METRICS;
    var6 = {};
    var6.scope = var8;
    var10 = function arg0() {
        var1 = arg0;
        var0 = var1.socket;
        var4 = var1.args;
        var0 = var0.application;
        var0 = var0.id;
        var4.application_id = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.track;
        var1 = _closure1_slot4;
        var1 = var1.NETWORKING_PEER_METRICS;
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var6.handler = var10;
    var1[var9] = var6;
    var6 = var3.NETWORKING_CREATE_TOKEN;
    var3 = {};
    var3.scope = var8;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {
            'url': null,
            'retries': 1,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var3 = _closure1_slot3;
        var3 = var3.NETWORKING_TOKEN;
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/networking.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3317, 660, 507, 795, 2]);