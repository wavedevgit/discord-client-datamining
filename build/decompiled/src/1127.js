// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1() {
        _fun12334: for (var _fun12334_ip = 0;;) switch (_fun12334_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var3 = var1.category;
                var2 = 'xhr';
                if (!(var2 === var3)) {
                    _fun12334_ip = 376;
                    continue _fun12334
                }
            case 23:
                if (!var0) {
                    _fun12334_ip = 376;
                    continue _fun12334
                }
            case 29:
                var2 = var0.xhr;
                if (!var2) {
                    _fun12334_ip = 376;
                    continue _fun12334
                }
            case 41:
                var4 = global;
                var3 = var4.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var9 = var0.startTimestamp;
                var5 = undefined;
                if (!(var5 === var9)) {
                    _fun12334_ip = 73;
                    continue _fun12334
                }
            case 70:
                var9 = var2;
            case 73:
                var8 = var0.endTimestamp;
                if (!(var5 === var8)) {
                    _fun12334_ip = 86;
                    continue _fun12334
                }
            case 83:
                var8 = var2;
            case 86:
                var6 = var0.input;
                var12 = var0.xhr;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var10 = 0;
                var0 = var0[var10];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getBodySize;
                var7 = var0.bind(var3)(var6);
                var0 = var12.getResponseHeader;
                var11 = 'content-length';
                var0 = var0.bind(var12)(var11);
                if (var0) {
                    _fun12334_ip = 256;
                    continue _fun12334
                }
            case 149:
                var13 = var12.response;
                var6 = var12.responseType;
                var0 = var13;
                var3 = var6;
            case 167: // try_start_0
                var6 = var3;
                var3 = 'json';
                if (!(var3 === var6)) {
                    _fun12334_ip = 198;
                    continue _fun12334
                }
            case 178:
                var3 = var0;
                if (!var3) {
                    _fun12334_ip = 198;
                    continue _fun12334
                }
            case 184:
                var3 = var0;
                var6 = 'object';
                var3 = typeof var3;
                if (!(var6 !== var3)) {
                    _fun12334_ip = 203;
                    continue _fun12334
                }
            case 198:
                var6 = var0;
                _fun12334_ip = 220;
                continue _fun12334;
            case 203:
                var13 = var4.JSON;
                var3 = var13.stringify;
                var6 = var3.bind(var13)(var0);
            case 220:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var10];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getBodySize;
                var0 = var0.bind(var3)(var6);
            case 248: // try_end0
                _fun12334_ip = 254;
                continue _fun12334;
            case 250: // catch_target0
                CatchBlockStart(arg_register = 3);
                var0 = undefined;
            case 254:
                _fun12334_ip = 295;
                continue _fun12334;
            case 256:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var10];
                var10 = var6.bind(var5)(var3);
                var6 = var10.parseContentLengthHeader;
                var3 = var12.getResponseHeader;
                var3 = var3.bind(var12)(var11);
                var0 = var6.bind(var10)(var3);
            case 295:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.dropUndefinedKeys;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.start_timestamp = var9;
                var4.end_timestamp = var8;
                var4.request_body_size = var7;
                var4.response_body_size = var0;
                var0 = var1.data;
                var0 = var5.bind(var6)(var4, var0);
                var0 = var2.bind(var3)(var0);
                var1.data = var0;
            case 376:
                var0 = undefined;
                return var0;
        }
    };
    var1.enrichXhrBreadcrumbsForMobileReplay = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1128, 817]);