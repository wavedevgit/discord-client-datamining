// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function(arg0) { // Original name: addAutoIpAddressToSession, environment: var0
        _fun9479: for (var _fun9479_ip = 0;;) switch (_fun9479_ip) {
            case 0:
                var1 = arg0;
                var0 = 'aggregates';
                var0 = var0 in var1;
                if (var0) {
                    _fun9479_ip = 40;
                    continue _fun9479
                }
            case 14:
                var2 = var1.ipAddress;
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun9479_ip = 116;
                    continue _fun9479
                }
            case 26:
                var0 = '{{auto}}';
                var1.ipAddress = var0;
                _fun9479_ip = 116;
                continue _fun9479;
            case 40:
                var3 = var1.attrs;
                var0 = null;
                var4 = var0 == var3;
                var2 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun9479_ip = 65;
                    continue _fun9479
                }
            case 59:
                var0 = var3.ip_address;
            case 65:
                if (!(var2 === var0)) {
                    _fun9479_ip = 116;
                    continue _fun9479
                }
            case 69:
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var3 = var1.attrs;
                var2 = {};
                var0 = '{{auto}}';
                var2.ip_address = var0;
                var0 = {};
                var0 = var4.bind(var5)(var0, var3, var2);
                var1.attrs = var0;
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var1.addAutoIpAddressToSession = var2;
    var0 = function(arg0) { // Original name: addAutoIpAddressToUser, environment: var0
        _fun9480: for (var _fun9480_ip = 0;;) switch (_fun9480_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.user;
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun9480_ip = 27;
                    continue _fun9480
                }
            case 21:
                var1 = var3.ip_address;
            case 27:
                if (!(var0 === var1)) {
                    _fun9480_ip = 77;
                    continue _fun9480
                }
            case 31:
                var1 = global;
                var6 = var1.Object;
                var5 = var6.assign;
                var4 = var2.user;
                var3 = {};
                var1 = '{{auto}}';
                var3.ip_address = var1;
                var1 = {};
                var1 = var5.bind(var6)(var1, var4, var3);
                var2.user = var1;
            case 77:
                return var0;
        }
    };
    var1.addAutoIpAddressToUser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);