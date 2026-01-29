// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() { // Original name: FormData, environment: var4
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2._parts = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'append';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: append, environment: var4
            var0 = this;
            var2 = var0._parts;
            var1 = var2.push;
            var0 = new Array(2);
            var3 = arg0;
            var0[0] = var3;
            var3 = arg1;
            var0[1] = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'getAll';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getAll, environment: var4
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var3 = var1._parts;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var3 = _closure1_slot0;
                var2 = undefined;
                var1 = arg0;
                var0 = 1;
                var1 = var3.bind(var2)(var1, var0);
                var0 = 0;
                var1 = var1[var0];
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot0;
                var2 = undefined;
                var1 = arg0;
                var0 = 2;
                var1 = var3.bind(var2)(var1, var0);
                var0 = 1;
                var0 = var1[var0];
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getParts';
        var0.key = var5;
        var4 = function() { // Original name: getParts, environment: var4
            var0 = this;
            var2 = var0._parts;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun2951: for (var _fun2951_ip = 0;;) switch (_fun2951_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var6 = undefined;
                        var1 = arg0;
                        var0 = 2;
                        var1 = var2.bind(var6)(var1, var0);
                        var0 = 0;
                        var2 = var1[var0];
                        var0 = 1;
                        var5 = var1[var0];
                        var3 = {};
                        var0 = 'form-data; name="';
                        var0 = var0 + var2;
                        var10 = '"';
                        var0 = var0 + var10;
                        var3['content-disposition'] = var0;
                        var1 = 'object';
                        var0 = typeof var5;
                        if (!(var1 === var0)) {
                            _fun2951_ip = 260;
                            continue _fun2951
                        }
                    case 73:
                        var0 = global;
                        var4 = var0.Array;
                        var1 = var4.isArray;
                        var1 = var1.bind(var4)(var5);
                        if (var1) {
                            _fun2951_ip = 260;
                            continue _fun2951
                        }
                    case 97:
                        if (!var5) {
                            _fun2951_ip = 260;
                            continue _fun2951
                        }
                    case 103:
                        var1 = var5.name;
                        var4 = 'string';
                        var1 = typeof var1;
                        if (!(var4 === var1)) {
                            _fun2951_ip = 203;
                            continue _fun2951
                        }
                    case 119:
                        var7 = var3["content-disposition"];
                        var12 = var5.name;
                        var8 = var0.encodeURIComponent;
                        var11 = var12.replace;
                        var9 = /\\/ / g;
                        var1 = '_';
                        var1 = var11.bind(var12)(var9, var1);
                        var9 = var8.bind(var6)(var1);
                        var1 = var0.HermesInternal;
                        var8 = var1.concat;
                        var1 = '; filename="';
                        var1 = var8.bind(var1)(var9, var10);
                        var1 = var7 + var1;
                        var3['content-disposition'] = var1;
                    case 203:
                        var1 = var5.type;
                        var1 = typeof var1;
                        if (!(var4 === var1)) {
                            _fun2951_ip = 226;
                            continue _fun2951
                        }
                    case 215:
                        var1 = var5.type;
                        var3['content-type'] = var1;
                    case 226:
                        var7 = var0.Object;
                        var4 = var7.assign;
                        var1 = {};
                        var1.headers = var3;
                        var1.fieldName = var2;
                        var0 = {};
                        var0 = var4.bind(var7)(var0, var5, var1);
                        _fun2951_ip = 292;
                        continue _fun2951;
                    case 260:
                        var1 = {};
                        var4 = global;
                        var4 = var4.String;
                        var4 = var4.bind(var6)(var5);
                        var1.string = var4;
                        var1.headers = var3;
                        var1.fieldName = var2;
                        var0 = var1;
                    case 292:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7]);