// modules/rpc/server/commands/guilds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.getGuildIconURL;
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot4 = var1;
    var1 = {};
    var9 = var3.GET_GUILD;
    var6 = {};
    var8 = 3;
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.OAuth2Scopes;
    var10 = var10.RPC;
    var6.scope = var10;
    var10 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var3 = var3.bind(var4)();
        var0.guild_id = var3;
        var3 = var4.number;
        var5 = var3.bind(var4)();
        var4 = var5.min;
        var3 = 0;
        var5 = var4.bind(var5)(var3);
        var4 = var5.max;
        var3 = 60;
        var3 = var4.bind(var5)(var3);
        var0.timeout = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.validation = var10;
    var10 = function arg0() {
        _fun97994: for (var _fun97994_ip = 0;;) switch (_fun97994_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.socket;
                var4 = var1.server;
                var1 = var1.args;
                var2 = var1.guild_id;
                var _closure2_slot0 = var2;
                var3 = var1.timeout;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun97994_ip = 46;
                    continue _fun97994
                }
            case 44:
                var3 = 0;
            case 46:
                var2 = var4.storeWait;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var4)(var5, var1, var3);
                var2 = var3.catch;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot4;
                    var0 = var0.GET_GUILD_TIMED_OUT;
                    var2.errorCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'Request to get guild timed out.';
                    var6 = var1;
                    var5 = var2;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun97997: for (var _fun97997_ip = 0;;) switch (_fun97997_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun97997_ip = 86;
                                continue _fun97997
                            }
                        case 9:
                            var0 = {};
                            var3 = var1.id;
                            var0.id = var3;
                            var3 = var1.name;
                            var0.name = var3;
                            var5 = _closure1_slot2;
                            var4 = undefined;
                            var3 = 128;
                            var3 = var5.bind(var4)(var1, var3);
                            var4 = var2 != var3;
                            var2 = null;
                            if (!var4) {
                                _fun97997_ip = 59;
                                continue _fun97997
                            }
                        case 56:
                            var2 = var3;
                        case 59:
                            var0.icon_url = var2;
                            var2 = new Array(0);
                            var0.members = var2;
                            var1 = var1.vanityURLCode;
                            var0.vanity_url_code = var1;
                            return var0;
                        case 86:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot4;
                            var0 = var0.INVALID_GUILD;
                            var2.errorCode = var0;
                            var4 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'Invalid guild id: ';
                            var6 = var1.bind(var0)(var4);
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var3](var7, var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var6.handler = var10;
    var1[var9] = var6;
    var6 = var3.GET_GUILDS;
    var3 = {};
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.OAuth2Scopes;
    var8 = var8.RPC;
    var3.scope = var8;
    var7 = function() {
        var0 = {};
        var2 = _closure1_slot3;
        var1 = var2.getGuildsArray;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            _fun97999: for (var _fun97999_ip = 0;;) switch (_fun97999_ip) {
                case 0:
                    var4 = arg0;
                    var0 = {};
                    var1 = var4.id;
                    var0.id = var1;
                    var1 = var4.name;
                    var0.name = var1;
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = 128;
                    var2 = var3.bind(var2)(var4, var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if (!var3) {
                        _fun97999_ip = 53;
                        continue _fun97999
                    }
                case 50:
                    var1 = var2;
                case 53:
                    var0.icon_url = var1;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0.guilds = var1;
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/guilds.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1410, 660, 3300, 7894, 7891, 2]);