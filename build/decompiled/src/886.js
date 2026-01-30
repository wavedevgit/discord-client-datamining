// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var0 = function(arg0) { // Original name: addUserAgentToTransportHeaders, environment: var0
        _fun9378: for (var _fun9378_ip = 0;;) switch (_fun9378_ip) {
            case 0:
                var2 = arg0;
                var3 = var2._metadata;
                var7 = null;
                var4 = var7 == var3;
                var0 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun9378_ip = 28;
                    continue _fun9378
                }
            case 22:
                var1 = var3.sdk;
            case 28:
                var3 = var7 != var1;
                var11 = undefined;
                if (!var3) {
                    _fun9378_ip = 124;
                    continue _fun9378
                }
            case 37:
                var3 = var1.name;
                var11 = undefined;
                if (!var3) {
                    _fun9378_ip = 124;
                    continue _fun9378
                }
            case 47:
                var3 = var7 != var1;
                var11 = undefined;
                if (!var3) {
                    _fun9378_ip = 124;
                    continue _fun9378
                }
            case 56:
                var3 = var1.version;
                var11 = undefined;
                if (!var3) {
                    _fun9378_ip = 124;
                    continue _fun9378
                }
            case 67:
                var3 = var7 == var1;
                var6 = undefined;
                if (var3) {
                    _fun9378_ip = 81;
                    continue _fun9378
                }
            case 76:
                var6 = var1.name;
            case 81:
                var3 = var7 == var1;
                var5 = undefined;
                if (var3) {
                    _fun9378_ip = 96;
                    continue _fun9378
                }
            case 90:
                var5 = var1.version;
            case 96:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var1 = '/';
                var11 = var4.bind(var3)(var6, var1, var5);
            case 124:
                var1 = global;
                var6 = var1.Object;
                var5 = var6.assign;
                var4 = var2.transportOptions;
                var3 = {};
                var10 = var1.Object;
                var9 = var10.assign;
                var8 = var11;
                if (!var8) {
                    _fun9378_ip = 172;
                    continue _fun9378
                }
            case 162:
                var1 = {};
                var1['user-agent'] = var11;
                var8 = var1;
            case 172:
                var1 = var2.transportOptions;
                var11 = var7 == var1;
                var7 = undefined;
                if (var11) {
                    _fun9378_ip = 193;
                    continue _fun9378
                }
            case 187:
                var7 = var1.headers;
            case 193:
                var1 = {};
                var1 = var9.bind(var10)(var1, var8, var7);
                var3.headers = var1;
                var1 = {};
                var1 = var5.bind(var6)(var1, var4, var3);
                var2.transportOptions = var1;
                return var0;
        }
    };
    var1.addUserAgentToTransportHeaders = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);