// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun34708: for (var _fun34708_ip = 0;;) switch (_fun34708_ip) {
            case 0:
                var4 = arg0;
                var5 = undefined;
                var1 = undefined;
                var0 = arguments.length;
                var6 = 1;
                if (!(var0 > var6)) {
                    _fun34708_ip = 25;
                    continue _fun34708
                }
            case 17:
                var0 = arguments[var6];
                if (!(var5 === var0)) {
                    _fun34708_ip = 31;
                    continue _fun34708
                }
            case 25:
                var3 = new Array(0);
                _fun34708_ip = 35;
                continue _fun34708;
            case 31:
                var3 = arguments[var6];
            case 35:
                var2 = arguments.length;
                var0 = 2;
                var2 = var2 > var0;
                if (!var2) {
                    _fun34708_ip = 56;
                    continue _fun34708
                }
            case 48:
                var7 = arguments[var0];
                var2 = var5 !== var7;
            case 56:
                if (!var2) {
                    _fun34708_ip = 63;
                    continue _fun34708
                }
            case 59:
                var2 = arguments[var0];
            case 63:
                var0 = _closure1_slot2;
                var8 = null;
                var0 = var0.bind(var5)(var8);
                var7 = var0.current;
                if (!(var8 !== var7)) {
                    _fun34708_ip = 129;
                    continue _fun34708
                }
            case 86:
                if (!var2) {
                    _fun34708_ip = 191;
                    continue _fun34708
                }
            case 89:
                var2 = var0.current;
                var7 = var2.workletEventHandler;
                var2 = var7.updateEventHandler;
                var2 = var2.bind(var7)(var4, var3);
                var2 = {};
                var2.workletEventHandler = var7;
                var0.current = var2;
                _fun34708_ip = 191;
                continue _fun34708;
            case 129:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var2.bind(var5)(var1);
                var1 = var1.WorkletEventHandler;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var2;
                var10 = var4;
                var9 = var3;
                var1 = new var11[var1](var10, var9, var8);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = {};
                var1.workletEventHandler = var2;
                var0.current = var1;
            case 191:
                var0 = var0.current;
                return var0;
        }
    };
    var2.useEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3787]);