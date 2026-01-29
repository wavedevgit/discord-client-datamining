// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0) { // Original name: getEventHandlerAttributeMap, environment: var1
        var1 = _closure1_slot0;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1) { // Original name: setEventHandlerAttributeMap, environment: var1
        var2 = _closure1_slot0;
        var1 = arg1;
        var0 = arg0;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var4 = var0.Symbol;
    var0 = undefined;
    var3 = 'eventHandlerAttributeMap';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = function(arg0, arg1) { // Original name: getEventHandlerAttribute, environment: var1
        _fun2835: for (var _fun2835_ip = 0;;) switch (_fun2835_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = undefined;
                var0 = arg0;
                var4 = var2.bind(var1)(var0);
                var0 = null;
                var2 = var0 == var4;
                if (var2) {
                    _fun2835_ip = 39;
                    continue _fun2835
                }
            case 26:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
            case 39:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun2835_ip = 54;
                    continue _fun2835
                }
            case 48:
                var0 = var1.handleEvent;
            case 54:
                return var0;
        }
    };
    var2.getEventHandlerAttribute = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: setEventHandlerAttribute, environment: var1
        _fun2836: for (var _fun2836_ip = 0;;) switch (_fun2836_ip) {
            case 0:
                var7 = arg0;
                var1 = var7;
                var6 = arg1;
                var8 = arg2;
                var0 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = _closure1_slot1;
                var7 = var3.bind(var0)(var7);
                var5 = var7;
                var3 = null;
                if (!(var3 != var7)) {
                    _fun2836_ip = 89;
                    continue _fun2836
                }
            case 39:
                var10 = var5;
                var9 = var10.get;
                var7 = var6;
                var11 = var9.bind(var10)(var7);
                if (!var11) {
                    _fun2836_ip = 89;
                    continue _fun2836
                }
            case 58:
                var9 = var1;
                var7 = var9.removeEventListener;
                var10 = var6;
                var7 = var7.bind(var9)(var10, var11);
                var9 = var5;
                var7 = var9.delete;
                var7 = var7.bind(var9)(var10);
            case 89:
                var7 = var8;
                if (!(var3 != var7)) {
                    _fun2836_ip = 227;
                    continue _fun2836
                }
            case 99:
                var7 = var8;
                var9 = 'function';
                var7 = typeof var7;
                if (!(var9 !== var7)) {
                    _fun2836_ip = 127;
                    continue _fun2836
                }
            case 113:
                var7 = var8;
                var9 = 'object';
                var7 = typeof var7;
                if (!(var9 === var7)) {
                    _fun2836_ip = 227;
                    continue _fun2836
                }
            case 127:
                var7 = {};
                var7.handleEvent = var8;
                var4 = var7;
            case 137: // try_start_0
                var10 = var1;
                var9 = var10.addEventListener;
                var8 = var6;
                var7 = var4;
                var7 = var9.bind(var10)(var8, var7);
                var7 = var5;
                if (!(var3 == var7)) {
                    _fun2836_ip = 209;
                    continue _fun2836
                }
            case 165:
                var9 = _closure1_slot2;
                var8 = var1;
                var7 = global;
                var7 = var7.Map;
                var10 = var7.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = var10;
                var7 = new var14[var7](var13);
                var7 = var7 instanceof Object ? var7 : var10;
                var5 = var7;
                var7 = var9.bind(var0)(var8, var7);
            case 209:
                var8 = var5;
                var7 = var8.set;
                var4 = var7.bind(var8)(var6, var4);
            case 223: // try_end0
                _fun2836_ip = 227;
                continue _fun2836;
            case 225: // catch_target0
                CatchBlockStart(arg_register = 4);
            case 227:
                var4 = var5;
                var4 = var3 != var4;
                if (!var4) {
                    _fun2836_ip = 248;
                    continue _fun2836
                }
            case 237:
                var6 = var5.size;
                var5 = 0;
                var4 = var5 === var6;
            case 248:
                if (!var4) {
                    _fun2836_ip = 261;
                    continue _fun2836
                }
            case 251:
                var2 = _closure1_slot2;
                var1 = var2.bind(var0)(var1, var3);
            case 261:
                return var0;
        }
    };
    var2.setEventHandlerAttribute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);