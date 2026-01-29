// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: getBaseApiEndpoint, environment: var0
        _fun99755: for (var _fun99755_ip = 0;;) switch (_fun99755_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.protocol;
                var7 = '';
                var6 = var7;
                if (!var1) {
                    _fun99755_ip = 48;
                    continue _fun99755
                }
            case 19:
                var3 = var0.protocol;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var6 = var2.bind(var7)(var3, var1);
            case 48:
                var1 = var0.port;
                var5 = var7;
                if (!var1) {
                    _fun99755_ip = 88;
                    continue _fun99755
                }
            case 60:
                var3 = var0.port;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var5 = var2.bind(var1)(var3);
            case 88:
                var4 = var0.host;
                var1 = var0.path;
                var3 = var7;
                if (!var1) {
                    _fun99755_ip = 134;
                    continue _fun99755
                }
            case 106:
                var2 = var0.path;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '/';
                var3 = var1.bind(var0)(var2);
            case 134:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var12 = '//';
                var8 = '/api/';
                var14 = var7;
                var13 = var6;
                var11 = var4;
                var10 = var5;
                var9 = var3;
                var0 = var14[var2](var13, var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0, arg1, arg2) { // Original name: getEnvelopeEndpointWithUrlEncodedAuth, environment: var0
        _fun99756: for (var _fun99756_ip = 0;;) switch (_fun99756_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var11 = arg2;
                if (var0) {
                    _fun99756_ip = 207;
                    continue _fun99756
                }
            case 15:
                var1 = _closure1_slot2;
                var7 = undefined;
                var9 = var1.bind(var7)(var2);
                var8 = var2.projectId;
                var1 = global;
                var4 = var1.HermesInternal;
                var6 = var4.concat;
                var5 = '';
                var4 = '/envelope/';
                var4 = var6.bind(var5)(var9, var8, var4);
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 0;
                var3 = var8[var3];
                var6 = var6.bind(var7)(var3);
                var3 = var6.urlEncode;
                var9 = var1.Object;
                var8 = var9.assign;
                var7 = {};
                var2 = var2.publicKey;
                var7.sentry_key = var2;
                var2 = '7';
                var7.sentry_version = var2;
                var2 = var11;
                if (!var2) {
                    _fun99756_ip = 174;
                    continue _fun99756
                }
            case 131:
                var10 = {};
                var14 = var11.name;
                var13 = var11.version;
                var11 = var1.HermesInternal;
                var12 = var11.concat;
                var11 = '/';
                var11 = var12.bind(var5)(var14, var11, var13);
                var10.sentry_client = var11;
                var2 = var10;
            case 174:
                var2 = var8.bind(var9)(var7, var2);
                var3 = var3.bind(var6)(var2);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '?';
                var0 = var2.bind(var5)(var4, var1, var3);
            case 207:
                return var0;
        }
    };
    var1.getEnvelopeEndpointWithUrlEncodedAuth = var2;
    var0 = function(arg0, arg1) { // Original name: getReportDialogEndpoint, environment: var0
        _fun99757: for (var _fun99757_ip = 0;;) switch (_fun99757_ip) {
            case 0:
                var19 = arg1;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var18 = undefined;
                var3 = var2.bind(var18)(var0);
                var2 = var3.makeDsn;
                var0 = arg0;
                var5 = var2.bind(var3)(var0);
                if (var5) {
                    _fun99757_ip = 50;
                    continue _fun99757
                }
            case 44:
                var0 = '';
                return var0;
            case 50:
                var0 = _closure1_slot2;
                var7 = var0.bind(var18)(var5);
                var0 = global;
                var2 = var0.HermesInternal;
                var3 = var2.concat;
                var4 = '';
                var2 = 'embed/error-page/';
                var3 = var3.bind(var4)(var7, var2);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var2 = var2.bind(var18)(var1);
                var1 = var2.dsnToString;
                var5 = var1.bind(var2)(var5);
                var1 = var0.HermesInternal;
                var2 = var1.concat;
                var1 = 'dsn=';
                var5 = var2.bind(var1)(var5);
                var16 = var19;
                var12 = '&email=';
                var11 = '&name=';
                var10 = '&';
                var9 = '=';
                var8 = 'user';
                var7 = 'onClose';
                var6 = 'dsn';
                var1 = undefined;
                var2 = var5;
                for (var13 in var16)
                    case 189: {
                        var23 = var5;
                        var2 = var23;
                        case 207: var20 = var13;
                        var5 = var23;
                        if (var6 === var20) {
                            _fun99757_ip = 189;
                            continue _fun99757
                        }
                        case 217: var5 = var23;
                        if (var7 === var20) {
                            _fun99757_ip = 189;
                            continue _fun99757
                        }
                        case 224: if (!(var8 !== var20)) {
                            _fun99757_ip = 278;
                            continue _fun99757
                        }
                        case 228: var21 = var0.encodeURIComponent;
                        var22 = var21.bind(var18)(var20);
                        var21 = var0.encodeURIComponent;
                        var20 = var19[var20];
                        var21 = var21.bind(var18)(var20);
                        var20 = var0.HermesInternal;
                        var20 = var20.concat;
                        var20 = var20.bind(var10)(var22, var9, var21);
                        var5 = var23 + var20;
                        _fun99757_ip = 189;
                        continue _fun99757;
                        case 278: var20 = var19.user;
                        var5 = var23;
                        var1 = var20;
                        if (!var1) {
                            _fun99757_ip = 189;
                            continue _fun99757
                        }
                        case 292: var21 = var20.name;
                        var22 = var23;
                        if (!var21) {
                            _fun99757_ip = 339;
                            continue _fun99757
                        }
                        case 303: var24 = var0.encodeURIComponent;
                        var21 = var20.name;
                        var24 = var24.bind(var18)(var21);
                        var21 = var0.HermesInternal;
                        var21 = var21.concat;
                        var21 = var21.bind(var11)(var24);
                        var22 = var23 + var21;
                        case 339: var21 = var20.email;
                        var5 = var22;
                        var1 = var20;
                        if (!var21) {
                            _fun99757_ip = 189;
                            continue _fun99757
                        }
                        case 357: var23 = var0.encodeURIComponent;
                        var21 = var20.email;
                        var23 = var23.bind(var18)(var21);
                        var21 = var0.HermesInternal;
                        var21 = var21.concat;
                        var21 = var21.bind(var12)(var23);
                        var5 = var22 + var21;
                        var1 = var20;
                        _fun99757_ip = 189;
                        continue _fun99757;
                    }
            case 402:
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '?';
                var0 = var1.bind(var4)(var3, var0, var2);
                return var0;
        }
    };
    var1.getReportDialogEndpoint = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12862]);