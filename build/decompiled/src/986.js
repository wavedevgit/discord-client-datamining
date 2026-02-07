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
    var2 = function() {
        var0 = 'npm';
        return var0;
    };
    var1.getSDKSource = var2;
    var0 = function() {
        _fun10146: for (var _fun10146_ip = 0;;) switch (_fun10146_ip) {
            case 0:
                var1 = global;
                var0 = var1.__SENTRY_BROWSER_BUNDLE__;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun10146_ip = 34;
                    continue _fun10146
                }
            case 22:
                var1 = var1.__SENTRY_BROWSER_BUNDLE__;
                var1 = !var1;
                var0 = !var1;
            case 34:
                return var0;
        }
    };
    var1.isBrowserBundle = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);