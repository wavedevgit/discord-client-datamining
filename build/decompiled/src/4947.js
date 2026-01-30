// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44717: for (var _fun44717_ip = 0;;) switch (_fun44717_ip) {
        case 0:
            var1 = exports;
            var2 = global;
            var5 = var2.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var1, var0, var3);
            var0 = var2.setImmediate;
            var3 = 'function';
            var0 = typeof var0;
            if (!(var3 !== var0)) {
                _fun44717_ip = 105;
                continue _fun44717
            }
        case 52:
            var0 = var2.requestAnimationFrame;
            var0 = typeof var0;
            if (!(var3 !== var0)) {
                _fun44717_ip = 85;
                continue _fun44717
            }
        case 65:
            var4 = var2.queueMicrotask;
            var3 = var4.bind;
            var0 = null;
            var0 = var3.bind(var4)(var0);
            _fun44717_ip = 103;
            continue _fun44717;
        case 85:
            var5 = var2.requestAnimationFrame;
            var4 = var5.bind;
            var3 = null;
            var0 = var4.bind(var5)(var3);
        case 103:
            _fun44717_ip = 123;
            continue _fun44717;
        case 105:
            var4 = var2.setImmediate;
            var3 = var4.bind;
            var2 = null;
            var0 = var3.bind(var4)(var2);
        case 123:
            var1.ghQueueMicrotask = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);