// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: Blob, environment: var4
            _fun2821: for (var _fun2821_ip = 0;;) switch (_fun2821_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var3 = undefined;
                    var4 = arguments.length;
                    var1 = 0;
                    if (!(var4 > var1)) {
                        _fun2821_ip = 24;
                        continue _fun2821
                    }
                case 16:
                    var4 = arguments[var1];
                    if (!(var0 === var4)) {
                        _fun2821_ip = 30;
                        continue _fun2821
                    }
                case 24:
                    var5 = new Array(0);
                    _fun2821_ip = 34;
                    continue _fun2821;
                case 30:
                    var5 = arguments[var1];
                case 34:
                    var4 = arguments.length;
                    var1 = 1;
                    var6 = var4 > var1;
                    var4 = undefined;
                    if (!var6) {
                        _fun2821_ip = 53;
                        continue _fun2821
                    }
                case 49:
                    var4 = arguments[var1];
                case 53:
                    var6 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var0)(var2, var3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
                    var1 = var6[var1];
                    var1 = var3.bind(var0)(var1);
                    var3 = var1.default;
                    var1 = var3.createFromParts;
                    var1 = var1.bind(var3)(var5, var4);
                    var1 = var1.data;
                    var2.data = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'data';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            _fun2822: for (var _fun2822_ip = 0;;) switch (_fun2822_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._data;
                    if (var1) {
                        _fun2822_ip = 48;
                        continue _fun2822
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = 'Blob has been closed and is no longer available';
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 48:
                    var0 = var0._data;
                    return var0;
            }
        };
        var0.get = var1;
        var1 = function(arg0) { // Original name: set, environment: var4
            var1 = arg0;
            var0 = this;
            var0._data = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'slice';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: slice, environment: var4
            _fun2824: for (var _fun2824_ip = 0;;) switch (_fun2824_ip) {
                case 0:
                    var8 = arg0;
                    var10 = arg1;
                    var3 = this;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = arguments.length;
                    var5 = 2;
                    var1 = var1 > var5;
                    var6 = '';
                    var4 = var6;
                    if (!var1) {
                        _fun2824_ip = 48;
                        continue _fun2824
                    }
                case 33:
                    var1 = arguments[var5];
                    var4 = var6;
                    if (!(var2 !== var1)) {
                        _fun2824_ip = 48;
                        continue _fun2824
                    }
                case 44:
                    var4 = arguments[var5];
                case 48:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var5];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.default;
                    var0 = var3.data;
                    var1 = var0.offset;
                    var0 = var0.size;
                    var9 = 'number';
                    var7 = typeof var8;
                    var6 = var1;
                    var5 = var0;
                    if (!(var9 === var7)) {
                        _fun2824_ip = 170;
                        continue _fun2824
                    }
                case 106:
                    if (!(var8 > var0)) {
                        _fun2824_ip = 113;
                        continue _fun2824
                    }
                case 110:
                    var8 = var0;
                case 113:
                    var1 = var1 + var8;
                    var0 = var0 - var8;
                    var7 = typeof var10;
                    if (!(var9 === var7)) {
                        _fun2824_ip = 164;
                        continue _fun2824
                    }
                case 128:
                    var9 = 0;
                    var7 = var10;
                    if (!(var7 < var9)) {
                        _fun2824_ip = 146;
                        continue _fun2824
                    }
                case 137:
                    var9 = var3.size;
                    var7 = var9 + var10;
                case 146:
                    var9 = var3.size;
                    if (!(var7 > var9)) {
                        _fun2824_ip = 160;
                        continue _fun2824
                    }
                case 155:
                    var7 = var3.size;
                case 160:
                    var0 = var7 - var8;
                case 164:
                    var5 = var0;
                    var6 = var1;
                case 170:
                    var1 = var2.createFromOptions;
                    var0 = {};
                    var7 = var3.data;
                    var7 = var7.blobId;
                    var0.blobId = var7;
                    var0.offset = var6;
                    var0.size = var5;
                    var0.type = var4;
                    var3 = var3.data;
                    var3 = var3.__collector;
                    var0.__collector = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var5 = function() { // Original name: close, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.default;
            var3 = var4.release;
            var1 = var2.data;
            var1 = var1.blobId;
            var1 = var3.bind(var4)(var1);
            var1 = null;
            var2.data = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0.data;
            var0 = var0.size;
            return var0;
        };
        var0.get = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'type';
        var0.key = var5;
        var4 = function() { // Original name: get, environment: var4
            _fun2827: for (var _fun2827_ip = 0;;) switch (_fun2827_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.data;
                    var0 = var0.type;
                    if (var0) {
                        _fun2827_ip = 20;
                        continue _fun2827
                    }
                case 16:
                    var0 = '';
                case 20:
                    return var0;
            }
        };
        var0.get = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 194]);