// modules/coded_links/codedLinkQueue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var10 = 'codedLinkQueue';
    var11 = var6;
    var3 = new var11[var7](var10, var9);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = {
        'concurrency': 5,
        'intervalCap': 10,
        'interval': 2000
    };
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var7 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot1 = var7;
    var6 = var7.on;
    var5 = 'add';
    var3 = function() { // Environment: var1
        _fun113535: for (var _fun113535_ip = 0;;) switch (_fun113535_ip) {
            case 0:
                var1 = _closure1_slot1;
                var2 = var1.size;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun113535_ip = 48;
                    continue _fun113535
                }
            case 18:
                var3 = _closure1_slot0;
                var2 = var3.warn;
                var0 = _closure1_slot1;
                var1 = var0.size;
                var0 = 'Message link fetch queue backlog:';
                var0 = var2.bind(var3)(var0, var1);
            case 48:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var5, var3);
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/coded_links/codedLinkQueue.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.queueMessageLinkFetch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 14558, 2]);