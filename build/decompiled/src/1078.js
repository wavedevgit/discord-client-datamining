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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function() { // Original name: checkAndWarnIfIsEmbeddedBrowserExtension, environment: var0
        _fun11016: for (var _fun11016_ip = 0;;) switch (_fun11016_ip) {
            case 0:
                var0 = function() { // Original name: _isEmbeddedBrowserExtension, environment: var2
                    _fun11017: for (var _fun11017_ip = 0;;) switch (_fun11017_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var6 = 2;
                            var2 = var2[var6];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.WINDOW;
                            var2 = var2.window;
                            if (!(var5 !== var2)) {
                                _fun11017_ip = 237;
                                continue _fun11017
                            }
                        case 45:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.WINDOW;
                            var2 = var3.nw;
                            if (var2) {
                                _fun11017_ip = 233;
                                continue _fun11017
                            }
                        case 80:
                            var2 = var3.chrome;
                            if (var2) {
                                _fun11017_ip = 95;
                                continue _fun11017
                            }
                        case 89:
                            var2 = var3.browser;
                        case 95:
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun11017_ip = 229;
                                continue _fun11017
                            }
                        case 104:
                            var2 = var2.runtime;
                            if (!(var3 != var2)) {
                                _fun11017_ip = 229;
                                continue _fun11017
                            }
                        case 114:
                            var2 = var2.id;
                            if (!var2) {
                                _fun11017_ip = 229;
                                continue _fun11017
                            }
                        case 122:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var2 = 1;
                            var2 = var0[var2];
                            var3 = var4.bind(var5)(var2);
                            var2 = var3.getLocationHref;
                            var2 = var2.bind(var3)();
                            var _closure3_slot0 = var2;
                            var3 = ['chrome-extension', 'moz-extension', 'ms-browser-extension', 'safari-web-extension'];
                            var2 = var0[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.WINDOW;
                            var0 = var0[var6];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.WINDOW;
                            var0 = var0.top;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun11017_ip = 224;
                                continue _fun11017
                            }
                        case 208:
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure3_slot0;
                                var1 = var2.startsWith;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var4 = '';
                                var3 = arg0;
                                var0 = '://';
                                var0 = var5.bind(var4)(var3, var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 224:
                            var0 = !var0;
                            return var0;
                        case 229:
                            var0 = false;
                            return var0;
                        case 233:
                            var0 = false;
                            return var0;
                        case 237:
                            var0 = false;
                            return var0;
                    }
                };
                var5 = undefined;
                var1 = var0.bind(var5)();
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun11016_ip = 93;
                    continue _fun11016
                }
            case 22:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var4 = var1.DEBUG_BUILD;
                var0 = true;
                if (!var4) {
                    _fun11016_ip = 93;
                    continue _fun11016
                }
            case 55:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.consoleSandbox;
                var2 = function() { // Environment: var2
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.error;
                    var0 = '[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0 = true;
            case 93:
                return var0;
        }
    };
    var1.checkAndWarnIfIsEmbeddedBrowserExtension = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1073, 817, 1025]);