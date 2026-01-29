// ../discord_common/js/packages/analytics-utils/encodeProperties.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = '../discord_common/js/packages/analytics-utils/encodeProperties.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: encodeProperties, environment: var1
        _fun7322: for (var _fun7322_ip = 0;;) switch (_fun7322_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var3 = global;
                var2 = var3.Buffer;
                var1 = var2.from;
                var4 = var3.JSON;
                var3 = var4.stringify;
                var0 = var3.bind(var4)(var0);
                var2 = var1.bind(var2)(var0);
                var1 = var2.toString;
                var0 = 'base64';
                var0 = var1.bind(var2)(var0);
            case 52: // try_end0
                return var0;
            case 54: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var2.encodeProperties = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);