// modules/rpc/server/commands/images.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
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
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.RPC_LOCAL_SCOPE;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = var3.GET_IMAGE;
    var3 = {};
    var3.scope = var8;
    var8 = function arg0() {
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var5 = var3.bind(var4)();
        var3 = var5.required;
        var6 = var3.bind(var5)();
        var5 = var6.valid;
        var3 = ['user'];
        var3 = var5.bind(var6)(var3);
        var0.type = var3;
        var3 = var4.string;
        var5 = var3.bind(var4)();
        var3 = var5.required;
        var3 = var3.bind(var5)();
        var0.id = var3;
        var3 = var4.string;
        var5 = var3.bind(var4)();
        var3 = var5.required;
        var6 = var3.bind(var5)();
        var5 = var6.valid;
        var3 = ['png', 'webp', 'jpg'];
        var3 = var5.bind(var6)(var3);
        var0.format = var3;
        var3 = var4.number;
        var4 = var3.bind(var4)();
        var3 = var4.required;
        var5 = var3.bind(var4)();
        var4 = var5.valid;
        var3 = [16, 32, 64, 128, 256, 512, 1024];
        var3 = var4.bind(var5)(var3);
        var0.size = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function arg0() {
        _fun98566: for (var _fun98566_ip = 0;;) switch (_fun98566_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.args;
                var2 = var0.type;
                var4 = var0.id;
                var11 = var0.format;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun98566_ip = 36;
                    continue _fun98566
                }
            case 32:
                var11 = 'png';
            case 36:
                var10 = var0.size;
                if (!(var10 === var3)) {
                    _fun98566_ip = 48;
                    continue _fun98566
                }
            case 45:
                var10 = 128;
            case 48:
                var0 = 'user';
                var5 = undefined;
                if (!(var0 === var2)) {
                    _fun98566_ip = 196;
                    continue _fun98566
                }
            case 61:
                var6 = _closure1_slot3;
                var2 = var6.getUser;
                var9 = var2.bind(var6)(var4);
                var2 = null;
                if (!(var2 != var9)) {
                    _fun98566_ip = 339;
                    continue _fun98566
                }
            case 88:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 4;
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.getUserAvatarURL;
                var14 = false;
                var16 = var8;
                var15 = var9;
                var13 = var10;
                var12 = var11;
                var6 = var16[var7](var15, var14, var13, var12, var11);
                var7 = global;
                var7 = var7.window;
                var7 = var7.GLOBAL_ENV;
                var8 = var7.CDN_HOST;
                var2 = var2 != var8;
                if (!var2) {
                    _fun98566_ip = 180;
                    continue _fun98566
                }
            case 159:
                var7 = var6.indexOf;
                var8 = var7.bind(var6)(var8);
                var7 = -1;
                var2 = var7 !== var8;
            case 180:
                var5 = var6;
                if (!var2) {
                    _fun98566_ip = 196;
                    continue _fun98566
                }
            case 186:
                var2 = '&_=';
                var5 = var6 + var2;
            case 196:
                var2 = null;
                if (!(var2 != var5)) {
                    _fun98566_ip = 268;
                    continue _fun98566
                }
            case 202:
                var2 = global;
                var2 = var2.fetch;
                var6 = var2.bind(var3)(var5);
                var5 = var6.then;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.blob;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var5.bind(var6)(var2);
                var5 = var6.then;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.readFileAsBase64;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var2);
                var2 = var5.then;
                var1 = function(arg0) { // Environment: var1
                    var0 = {};
                    var1 = arg0;
                    var0.data_url = var1;
                    return var0;
                };
                var1 = var2.bind(var5)(var1);
                return var1;
            case 268:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = {};
                var1 = _closure1_slot4;
                var1 = var1.INVALID_COMMAND;
                var5.errorCode = var1;
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = 'No valid type.';
                var16 = var2;
                var15 = var5;
                var1 = new var16[var6](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 339:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = {};
                var0 = _closure1_slot4;
                var0 = var0.INVALID_USER;
                var2.errorCode = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Invalid user id: ';
                var14 = var1.bind(var0)(var4);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = var1;
                var15 = var2;
                var0 = new var16[var3](var15, var14, var13);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/images.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 3357, 660, 8001, 1417, 7998, 1461, 2]);