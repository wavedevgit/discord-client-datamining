// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.NativeModules;
    var _closure1_slot0 = var4;
    var3 = var3.NativeEventEmitter;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var9 = var4;
    var8 = undefined;
    var3 = new var9[var3](var8, var7);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.webViewKey = var1;
            var0 = undefined;
            return var0;
        };
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            var0 = _closure1_slot0;
            var3 = var0.RNCWebView;
            var2 = var3.injectJavaScriptWithWebViewKey;
            var0 = this;
            var1 = var0.webViewKey;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3.injectJavaScript = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot1;
            var2 = var3.addListener;
            var1 = 'ReactNativeWebViewOnMessageWithWebViewKey';
            var0 = function(arg0) { // Environment: var0
                _fun52189: for (var _fun52189_ip = 0;;) switch (_fun52189_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.webViewKey;
                        var1 = _closure3_slot1;
                        var1 = var1.webViewKey;
                        if (!(var3 === var1)) {
                            _fun52189_ip = 37;
                            continue _fun52189
                        }
                    case 26:
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3.addOnMessageListener = var2;
        var2 = var0.prototype;
        var1 = function() { // Environment: var1
            var0 = _closure1_slot0;
            var2 = var0.RNCWebView;
            var1 = var2.releaseWebView;
            var0 = this;
            var0 = var0.webViewKey;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.releaseWebView = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);