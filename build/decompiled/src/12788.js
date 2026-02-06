// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = function() {
        _fun97781: for (var _fun97781_ip = 0;;) switch (_fun97781_ip) {
            case 0:
                var4 = {
                    'osRelease': '',
                    'model': '',
                    'serverHost': '',
                    'uiMode': '',
                    'serial': '',
                    'forceTouch': false,
                    'interfaceIdiom': '',
                    'systemName': ''
                };
                var1 = _closure1_slot0;
                var1 = var1.Platform;
                var2 = var1.OS;
                var1 = 'android';
                if (!(var1 !== var2)) {
                    _fun97781_ip = 147;
                    continue _fun97781
                }
            case 41:
                var1 = _closure1_slot0;
                var1 = var1.Platform;
                var2 = var1.OS;
                var1 = 'ios';
                if (!(var1 !== var2)) {
                    _fun97781_ip = 67;
                    continue _fun97781
                }
            case 65:
                return var4;
            case 67:
                var1 = _closure1_slot0;
                var1 = var1.Platform;
                var1 = var1.constants;
                var2 = global;
                var5 = var2.Object;
                var3 = var5.assign;
                var2 = {};
                var6 = var1.forceTouchAvailable;
                if (var6) {
                    _fun97781_ip = 109;
                    continue _fun97781
                }
            case 107:
                var6 = false;
            case 109:
                var2.forceTouch = var6;
                var6 = var1.interfaceIdiom;
                var2.interfaceIdiom = var6;
                var1 = var1.systemName;
                var2.systemName = var1;
                var1 = {};
                var1 = var3.bind(var5)(var1, var4, var2);
                return var1;
            case 147:
                var0 = _closure1_slot0;
                var0 = var0.Platform;
                var0 = var0.constants;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var5 = var0.Release;
                var1.osRelease = var5;
                var5 = var0.Model;
                var1.model = var5;
                var5 = var0.ServerHost;
                var1.serverHost = var5;
                var5 = var0.uiMode;
                var1.uiMode = var5;
                var0 = var0.Serial;
                var1.serial = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var1.default = var0;
    var1 = arg6;
    var0 = 0;
    var3 = var1[var0];
    var1 = arg1;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot0 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);