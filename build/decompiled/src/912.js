// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = {
        'cookies': true,
        'data': true,
        'headers': true,
        'query_string': true,
        'url': true
    };
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun9557: for (var _fun9557_ip = 0;;) switch (_fun9557_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9557_ip = 23;
                    continue _fun9557
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun9557_ip = 27;
                    continue _fun9557
                }
            case 23:
                var0 = {};
                _fun9557_ip = 31;
                continue _fun9557;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var3 = _closure1_slot2;
                var2 = var0.include;
                var0 = {};
                var0 = var4.bind(var5)(var0, var3, var2);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'RequestData';
                var0.name = var2;
                var1 = function arg0, arg1, arg2() {
                    _fun9558: for (var _fun9558_ip = 0;;) switch (_fun9558_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = arg2;
                            var1 = var0.sdkProcessingMetadata;
                            var5 = undefined;
                            if (!(var5 === var1)) {
                                _fun9558_ip = 20;
                                continue _fun9558
                            }
                        case 18:
                            var1 = {};
                        case 20:
                            var4 = var1.normalizedRequest;
                            var1 = var1.ipAddress;
                            var2 = global;
                            var8 = var2.Object;
                            var7 = var8.assign;
                            var6 = _closure2_slot0;
                            var3 = {};
                            var2 = var6.ip;
                            var9 = null;
                            if (!(var9 == var2)) {
                                _fun9558_ip = 81;
                                continue _fun9558
                            }
                        case 65:
                            var9 = var10.getOptions;
                            var9 = var9.bind(var10)();
                            var2 = var9.sendDefaultPii;
                        case 81:
                            var3.ip = var2;
                            var2 = {};
                            var3 = var7.bind(var8)(var2, var6, var3);
                            if (!var4) {
                                _fun9558_ip = 129;
                                continue _fun9558
                            }
                        case 97:
                            var2 = {};
                            var2.ipAddress = var1;
                            var1 = function arg0, arg1, arg2, arg3() {
                                _fun9559: for (var _fun9559_ip = 0;;) switch (_fun9559_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = arg1;
                                        var1 = arg3;
                                        var3 = global;
                                        var9 = var3.Object;
                                        var8 = var9.assign;
                                        var7 = var2.request;
                                        var5 = function arg0, arg1() {
                                            _fun9560: for (var _fun9560_ip = 0;;) switch (_fun9560_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = arg1;
                                                    var0 = {};
                                                    var4 = global;
                                                    var7 = var4.Object;
                                                    var6 = var7.assign;
                                                    var5 = var1.headers;
                                                    var4 = {};
                                                    var5 = var6.bind(var7)(var4, var5);
                                                    var _closure5_slot0 = var5;
                                                    var4 = var2.headers;
                                                    if (!var4) {
                                                        _fun9560_ip = 124;
                                                        continue _fun9560
                                                    }
                                                case 50:
                                                    var0.headers = var5;
                                                    var4 = var2.cookies;
                                                    if (var4) {
                                                        _fun9560_ip = 70;
                                                        continue _fun9560
                                                    }
                                                case 65:
                                                    var4 = delete var5.cookie;
                                                case 70:
                                                    var4 = var2.ip;
                                                    if (var4) {
                                                        _fun9560_ip = 124;
                                                        continue _fun9560
                                                    }
                                                case 78:
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var4 = 1;
                                                    var6 = var6[var4];
                                                    var4 = undefined;
                                                    var4 = var7.bind(var4)(var6);
                                                    var6 = var4.ipHeaderNames;
                                                    var4 = var6.forEach;
                                                    var3 = function(arg0) { // Environment: var3
                                                        var1 = _closure5_slot0;
                                                        var0 = arg0;
                                                        var0 = delete var1[var0];
                                                        var0 = undefined;
                                                        return var0;
                                                    };
                                                    var3 = var4.bind(var6)(var3);
                                                case 124:
                                                    var3 = var1.method;
                                                    var0.method = var3;
                                                    var3 = var2.url;
                                                    if (!var3) {
                                                        _fun9560_ip = 155;
                                                        continue _fun9560
                                                    }
                                                case 144:
                                                    var3 = var1.url;
                                                    var0.url = var3;
                                                case 155:
                                                    var3 = var2.cookies;
                                                    if (!var3) {
                                                        _fun9560_ip = 251;
                                                        continue _fun9560
                                                    }
                                                case 164:
                                                    var3 = var1.cookies;
                                                    if (var3) {
                                                        _fun9560_ip = 240;
                                                        continue _fun9560
                                                    }
                                                case 173:
                                                    var4 = null;
                                                    var6 = var4 != var5;
                                                    var8 = undefined;
                                                    var4 = undefined;
                                                    if (!var6) {
                                                        _fun9560_ip = 237;
                                                        continue _fun9560
                                                    }
                                                case 186:
                                                    var6 = var5.cookie;
                                                    var4 = undefined;
                                                    if (!var6) {
                                                        _fun9560_ip = 237;
                                                        continue _fun9560
                                                    }
                                                case 197:
                                                    var7 = _closure1_slot0;
                                                    var9 = _closure1_slot1;
                                                    var6 = 2;
                                                    var6 = var9[var6];
                                                    var7 = var7.bind(var8)(var6);
                                                    var6 = var7.parseCookie;
                                                    var5 = var5.cookie;
                                                    var4 = var6.bind(var7)(var5);
                                                case 237:
                                                    var3 = var4;
                                                case 240:
                                                    if (var3) {
                                                        _fun9560_ip = 245;
                                                        continue _fun9560
                                                    }
                                                case 243:
                                                    var3 = {};
                                                case 245:
                                                    var0.cookies = var3;
                                                case 251:
                                                    var3 = var2.query_string;
                                                    if (!var3) {
                                                        _fun9560_ip = 272;
                                                        continue _fun9560
                                                    }
                                                case 260:
                                                    var3 = var1.query_string;
                                                    var0.query_string = var3;
                                                case 272:
                                                    var2 = var2.data;
                                                    if (!var2) {
                                                        _fun9560_ip = 291;
                                                        continue _fun9560
                                                    }
                                                case 280:
                                                    var1 = var1.data;
                                                    var0.data = var1;
                                                case 291:
                                                    return var0;
                                            }
                                        };
                                        var0 = undefined;
                                        var6 = var5.bind(var0)(var4, var1);
                                        var5 = {};
                                        var5 = var8.bind(var9)(var5, var7, var6);
                                        var2.request = var5;
                                        var1 = var1.ip;
                                        if (!var1) {
                                            _fun9559_ip = 168;
                                            continue _fun9559
                                        }
                                    case 66:
                                        var1 = var4.headers;
                                        if (!var1) {
                                            _fun9559_ip = 115;
                                            continue _fun9559
                                        }
                                    case 75:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var5 = 1;
                                        var5 = var7[var5];
                                        var6 = var6.bind(var0)(var5);
                                        var5 = var6.getClientIPAddress;
                                        var4 = var4.headers;
                                        var1 = var5.bind(var6)(var4);
                                    case 115:
                                        if (var1) {
                                            _fun9559_ip = 127;
                                            continue _fun9559
                                        }
                                    case 118:
                                        var4 = arg2;
                                        var1 = var4.ipAddress;
                                    case 127:
                                        if (!var1) {
                                            _fun9559_ip = 168;
                                            continue _fun9559
                                        }
                                    case 130:
                                        var6 = var3.Object;
                                        var5 = var6.assign;
                                        var4 = var2.user;
                                        var3 = {};
                                        var3.ip_address = var1;
                                        var1 = {};
                                        var1 = var5.bind(var6)(var1, var4, var3);
                                        var2.user = var1;
                                    case 168:
                                        return var0;
                                }
                            };
                            var15 = undefined;
                            var14 = var0;
                            var13 = var4;
                            var12 = var2;
                            var11 = var3;
                            var1 = var15[var1](var14, var13, var12, var11, var10);
                        case 129:
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.requestDataIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [881, 913, 914]);