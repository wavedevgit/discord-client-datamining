// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var _closure1_slot0 = var0;
    var0 = /\\(\\)?/g;
    var _closure1_slot1 = var0;
    var2 = dependencyMap;
    var0 = 0;
    var3 = var2[var0];
    var2 = require;
    var0 = undefined;
    var2 = var2.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun8254: for (var _fun8254_ip = 0;;) switch (_fun8254_ip) {
            case 0:
                var4 = arg0;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var3 = var4.charCodeAt;
                var2 = 0;
                var3 = var3.bind(var4)(var2);
                var2 = 46;
                if (!(var2 === var3)) {
                    _fun8254_ip = 47;
                    continue _fun8254
                }
            case 33:
                var3 = var0.push;
                var2 = '';
                var2 = var3.bind(var0)(var2);
            case 47:
                var3 = var4.replace;
                var2 = _closure1_slot0;
                var1 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                    _fun8255: for (var _fun8255_ip = 0;;) switch (_fun8255_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var6 = arg3;
                            var1 = _closure2_slot0;
                            var0 = var1.push;
                            var4 = arg2;
                            if (var4) {
                                _fun8255_ip = 35;
                                continue _fun8255
                            }
                        case 27:
                            if (var2) {
                                _fun8255_ip = 33;
                                continue _fun8255
                            }
                        case 30:
                            var2 = var3;
                        case 33:
                            _fun8255_ip = 59;
                            continue _fun8255;
                        case 35:
                            var5 = var6.replace;
                            var4 = _closure1_slot1;
                            var3 = '$1';
                            var2 = var5.bind(var6)(var4, var3);
                        case 59:
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2 = var2.bind(var0)(var1);
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [690]);