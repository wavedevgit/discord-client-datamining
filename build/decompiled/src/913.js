// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var0 = var0.Symbol;
    var3 = var0.toStringTag;
    var0 = {};
    var6 = 'Module';
    var0.value = var6;
    var0 = var4.bind(var5)(var1, var3, var0);
    var0 = ['X-Client-IP', 'X-Forwarded-For', 'Fly-Client-IP', 'CF-Connecting-IP', 'Fastly-Client-Ip', 'True-Client-Ip', 'X-Real-IP', 'X-Cluster-Client-IP', 'X-Forwarded', 'Forwarded-For', 'Forwarded', 'X-Vercel-Forwarded-For'];
    var _closure1_slot0 = var0;
    var2 = function arg0() {
        _fun9561: for (var _fun9561_ip = 0;;) switch (_fun9561_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    _fun9562: for (var _fun9562_ip = 0;;) switch (_fun9562_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure2_slot0;
                            var3 = var0[var1];
                            var0 = global;
                            var2 = var0.Array;
                            var0 = var2.isArray;
                            var0 = var0.bind(var2)(var3);
                            var5 = var3;
                            if (!var0) {
                                _fun9562_ip = 52;
                                continue _fun9562
                            }
                        case 38:
                            var2 = var3.join;
                            var0 = ';';
                            var5 = var2.bind(var3)(var0);
                        case 52:
                            var0 = 'Forwarded';
                            if (!(var0 !== var1)) {
                                _fun9562_ip = 106;
                                continue _fun9562
                            }
                        case 62:
                            var0 = null;
                            var1 = var0 == var5;
                            var0 = undefined;
                            if (var1) {
                                _fun9562_ip = 104;
                                continue _fun9562
                            }
                        case 73:
                            var2 = var5.split;
                            var1 = ',';
                            var3 = var2.bind(var5)(var1);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = var1.trim;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 104:
                            _fun9562_ip = 207;
                            continue _fun9562;
                        case 106:
                            var7 = undefined;
                            var2 = undefined;
                            var1 = null;
                            if (!var5) {
                                _fun9562_ip = 204;
                                continue _fun9562
                            }
                        case 115:
                            var4 = var5.split;
                            var3 = ';';
                            var4 = var4.bind(var5)(var3);
                            var5 = var4;
                            var3 = var5[Symbol.iterator];
                            var5 = var3().next;
                            var4 = 'for=';
                        case 141:
                            var9 = var5().value;
                            var8 = var3;
                            var1 = null;
                            if (!(var8 !== var7)) {
                                _fun9562_ip = 204;
                                continue _fun9562
                            }
                        case 154: // try_start_0
                            var2 = var9;
                            var8 = var9.startsWith;
                            var8 = var8.bind(var9)(var4);
                            if (var8) {
                                _fun9562_ip = 173;
                                continue _fun9562
                            }
                        case 171: // try_end0
                            _fun9562_ip = 141;
                            continue _fun9562;
                        case 173: // try_start_1
                            var5 = var2;
                            var4 = var5.slice;
                            var2 = 4;
                            var2 = var4.bind(var5)(var2);
                        case 189: // try_end1
                            var3.return();
                            var1 = var2;
                            _fun9562_ip = 204;
                            continue _fun9562;
                        case 197: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var3.return();
                            throw var2;
                        case 204:
                            var0 = var1;
                        case 207:
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var1);
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun9564: for (var _fun9564_ip = 0;;) switch (_fun9564_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var0 = var3;
                            if (!var2) {
                                _fun9564_ip = 22;
                                continue _fun9564
                            }
                        case 12:
                            var1 = var3.concat;
                            var0 = var1.bind(var3)(var2);
                        case 22:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    _fun9565: for (var _fun9565_ip = 0;;) switch (_fun9565_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = null;
                            var0 = var0 !== var3;
                            if (!var0) {
                                _fun9565_ip = 36;
                                continue _fun9565
                            }
                        case 12:
                            var2 = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/;
                            var1 = var2.test;
                            var0 = var1.bind(var2)(var3);
                        case 36:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun9561_ip = 72;
                    continue _fun9561
                }
            case 70:
                var0 = null;
            case 72:
                return var0;
        }
    };
    var1.getClientIPAddress = var2;
    var1.ipHeaderNames = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);