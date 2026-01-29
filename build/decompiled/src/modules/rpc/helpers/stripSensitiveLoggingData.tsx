// modules/rpc/helpers/stripSensitiveLoggingData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCCommands;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/stripSensitiveLoggingData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: stripSensitiveLoggingData, environment: var1
        _fun62978: for (var _fun62978_ip = 0;;) switch (_fun62978_ip) {
            case 0:
                var4 = {};
                var7 = arg0;
                var8 = var4;
                var0 = copyDataProperties(var8, var7);
                var0 = var4.args;
                var1 = 'object';
                var0 = typeof var0;
                var0 = var1 === var0;
                if (!var0) {
                    _fun62978_ip = 49;
                    continue _fun62978
                }
            case 32:
                var2 = var4.cmd;
                var3 = 'string';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 49:
                var3 = var4;
                if (!var0) {
                    _fun62978_ip = 163;
                    continue _fun62978
                }
            case 55:
                var2 = var4.cmd;
                var5 = _closure1_slot0;
                var5 = var5.AUTHENTICATE;
                if (!(var5 !== var2)) {
                    _fun62978_ip = 106;
                    continue _fun62978
                }
            case 78:
                var0 = _closure1_slot0;
                var0 = var0.GET_PROVIDER_ACCESS_TOKEN;
                if (!(var0 !== var2)) {
                    _fun62978_ip = 106;
                    continue _fun62978
                }
            case 92:
                var0 = {};
                var8 = var0;
                var7 = var4;
                var2 = copyDataProperties(var8, var7);
                _fun62978_ip = 160;
                continue _fun62978;
            case 106:
                var2 = {};
                var8 = var2;
                var7 = var4;
                var5 = copyDataProperties(var8, var7);
                var5 = {};
                var7 = var4.args;
                var8 = var5;
                var4 = copyDataProperties(var8, var7);
                var6 = '<removed>';
                var4 = 'access_token';
                var5[var4] = var6;
                var4 = 'args';
                var2[var4] = var5;
                var0 = var2;
            case 160:
                var3 = var0;
            case 163:
                var0 = var3.data;
                var0 = typeof var0;
                var1 = var1 === var0;
                if (!var1) {
                    _fun62978_ip = 195;
                    continue _fun62978
                }
            case 178:
                var0 = var3.cmd;
                var2 = 'string';
                var0 = typeof var0;
                var1 = var2 === var0;
            case 195:
                var0 = var3;
                if (!var1) {
                    _fun62978_ip = 308;
                    continue _fun62978
                }
            case 201:
                var2 = var3.cmd;
                var4 = _closure1_slot0;
                var4 = var4.AUTHENTICATE;
                if (!(var4 !== var2)) {
                    _fun62978_ip = 252;
                    continue _fun62978
                }
            case 224:
                var1 = _closure1_slot0;
                var1 = var1.GET_PROVIDER_ACCESS_TOKEN;
                if (!(var1 !== var2)) {
                    _fun62978_ip = 252;
                    continue _fun62978
                }
            case 238:
                var1 = {};
                var8 = var1;
                var7 = var3;
                var2 = copyDataProperties(var8, var7);
                _fun62978_ip = 305;
                continue _fun62978;
            case 252:
                var2 = {};
                var8 = var2;
                var7 = var3;
                var4 = copyDataProperties(var8, var7);
                var4 = {};
                var7 = var3.data;
                var8 = var4;
                var3 = copyDataProperties(var8, var7);
                var5 = '<removed>';
                var3 = 'access_token';
                var4[var3] = var5;
                var3 = 'data';
                var2[var3] = var4;
                var1 = var2;
            case 305:
                var0 = var1;
            case 308:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);