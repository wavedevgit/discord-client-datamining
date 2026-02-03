// modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx
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
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2.queue = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enqueue';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0.queue;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var4 = function() {
            _fun41227: for (var _fun41227_ip = 0;;) switch (_fun41227_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.queue;
                    var1 = var0.length;
                    var3 = 0;
                    var0 = undefined;
                    var2 = null;
                    if (!(var1 > var3)) {
                        _fun41227_ip = 63;
                        continue _fun41227
                    }
                case 24:
                    var5 = var4.queue;
                    var1 = var5.shift;
                    var1 = var1.bind(var5)();
                    if (!(var2 != var1)) {
                        _fun41227_ip = 48;
                        continue _fun41227
                    }
                case 44:
                    var1 = var1.bind(var0)();
                case 48:
                    var1 = var4.queue;
                    var1 = var1.length;
                    if (var1 > var3) {
                        _fun41227_ip = 24;
                        continue _fun41227
                    }
                case 63:
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);