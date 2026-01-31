// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.WeakMap;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var1.snapshots = var2;
    var2 = function(arg0, arg1) { // Original name: makeElementVisible, environment: var0
        _fun33846: for (var _fun33846_ip = 0;;) switch (_fun33846_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var3;
                var1 = 0;
                if (!(var1 !== var4)) {
                    _fun33846_ip = 51;
                    continue _fun33846
                }
            case 18:
                var2 = global;
                var5 = var2.setTimeout;
                var2 = 1000;
                var4 = var2 * var4;
                var2 = undefined;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4._updatePropsJS;
                    var2 = {};
                    var1 = 'initial';
                    var2.visibility = var1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var5.bind(var2)(var0, var4);
                _fun33846_ip = 96;
                continue _fun33846;
            case 51:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var1];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2._updatePropsJS;
                var0 = {};
                var4 = 'initial';
                var0.visibility = var4;
                var0 = var1.bind(var2)(var0, var3);
            case 96:
                var0 = undefined;
                return var0;
        }
    };
    var1.makeElementVisible = var2;
    var0 = function(arg0, arg1) { // Original name: setElementPosition, environment: var0
        _fun33848: for (var _fun33848_ip = 0;;) switch (_fun33848_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var0 = var1.style;
                var7 = '';
                var0.transform = var7;
                var2 = var1.style;
                var0 = 'absolute';
                var2.position = var0;
                var5 = var1.style;
                var6 = var4.top;
                var3 = global;
                var0 = var3.HermesInternal;
                var0 = var0.concat;
                var2 = 'px';
                var0 = var0.bind(var7)(var6, var2);
                var5.top = var0;
                var5 = var1.style;
                var6 = var4.left;
                var0 = var3.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var7)(var6, var2);
                var5.left = var0;
                var5 = var1.style;
                var6 = var4.width;
                var0 = var3.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var7)(var6, var2);
                var5.width = var0;
                var5 = var1.style;
                var6 = var4.height;
                var0 = var3.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var7)(var6, var2);
                var5.height = var0;
                var5 = var1.style;
                var0 = '0px';
                var5.margin = var0;
                var0 = var1.parentElement;
                if (!var0) {
                    _fun33848_ip = 381;
                    continue _fun33848
                }
            case 203:
                var7 = var1.parentElement;
                var0 = var7.getBoundingClientRect;
                var0 = var0.bind(var7)();
                var8 = var3.parseInt;
                var5 = var3.getComputedStyle;
                var6 = undefined;
                var5 = var5.bind(var6)(var7);
                var5 = var5.borderTopWidth;
                var8 = var8.bind(var6)(var5);
                var5 = var3.parseInt;
                var3 = var3.getComputedStyle;
                var3 = var3.bind(var6)(var7);
                var3 = var3.borderLeftWidth;
                var3 = var5.bind(var6)(var3);
                var5 = var1.getBoundingClientRect;
                var5 = var5.bind(var1)();
                var7 = var5.top;
                var6 = var4.top;
                if (!(var7 !== var6)) {
                    _fun33848_ip = 334;
                    continue _fun33848
                }
            case 301:
                var7 = var1.style;
                var9 = var4.top;
                var6 = var0.top;
                var6 = var9 - var6;
                var6 = var6 - var8;
                var6 = var6 + var2;
                var7.top = var6;
            case 334:
                var6 = var5.left;
                var5 = var4.left;
                if (!(var6 !== var5)) {
                    _fun33848_ip = 381;
                    continue _fun33848
                }
            case 348:
                var1 = var1.style;
                var4 = var4.left;
                var0 = var0.left;
                var0 = var4 - var0;
                var0 = var0 - var3;
                var0 = var0 + var2;
                var1.left = var0;
            case 381:
                var0 = undefined;
                return var0;
        }
    };
    var1.setElementPosition = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3690]);