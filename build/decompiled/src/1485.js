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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function() {
        var4 = _closure1_slot0;
        var2 = var4.useRef;
        var1 = {};
        var3 = new Array(0);
        var1.action = var3;
        var3 = new Array(0);
        var1.focus = var3;
        var1 = var2.bind(var4)(var1);
        var2 = var1.current;
        var _closure2_slot0 = var2;
        var3 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var2;
        var0 = function(arg0, arg1) { // Environment: var0
            var2 = arg0;
            var3 = arg1;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var3;
            var1 = _closure2_slot0;
            var2 = var1[var2];
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            var1 = false;
            var _closure3_slot2 = var1;
            var0 = function() { // Environment: var0
                _fun17103: for (var _fun17103_ip = 0;;) switch (_fun17103_ip) {
                    case 0:
                        var3 = _closure2_slot0;
                        var2 = _closure3_slot0;
                        var4 = var3[var2];
                        var3 = var4.indexOf;
                        var2 = _closure3_slot1;
                        var3 = var3.bind(var4)(var2);
                        var4 = _closure3_slot2;
                        var2 = !var4;
                        if (var4) {
                            _fun17103_ip = 53;
                            continue _fun17103
                        }
                    case 43:
                        var4 = -1;
                        var2 = var3 > var4;
                    case 53:
                        if (!var2) {
                            _fun17103_ip = 89;
                            continue _fun17103
                        }
                    case 56:
                        var2 = true;
                        _closure3_slot2 = var2;
                        var1 = _closure2_slot0;
                        var0 = _closure3_slot0;
                        var2 = var1[var0];
                        var1 = var2.splice;
                        var0 = 1;
                        var0 = var1.bind(var2)(var3, var0);
                    case 89:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.listeners = var2;
        var0.addListener = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);