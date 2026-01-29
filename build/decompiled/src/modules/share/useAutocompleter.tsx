// modules/share/useAutocompleter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/useAutocompleter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useAutocompleter, environment: var1
        var0 = arg0;
        var0 = var0.searchOptions;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var1 = {};
        var6 = new Array(0);
        var1.results = var6;
        var6 = '';
        var1.query = var6;
        var4 = var4.bind(var5)(var1);
        var1 = _closure1_slot2;
        var6 = undefined;
        var7 = 2;
        var8 = var1.bind(var6)(var4, var7);
        var1 = 0;
        var1 = var8[var1];
        var4 = 1;
        var4 = var8[var4];
        var _closure2_slot1 = var4;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var3 = var3[var7];
        var4 = var4.bind(var6)(var3);
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var2 = _closure2_slot1;
                var1 = {};
                var0 = arg0;
                var1.results = var0;
                var0 = arg1;
                var1.query = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            var2 = var0.setLimit;
            var1 = 20;
            var1 = var2.bind(var0)(var1);
            var2 = var0.search;
            var1 = '';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var4.bind(var6)(var3);
        var _closure2_slot2 = var6;
        var7 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() { // Environment: var2
            var0 = function() { // Environment: var0
                var1 = _closure2_slot2;
                var0 = var1.destroy;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var0;
        var0 = function() { // Environment: var2
            _fun72386: for (var _fun72386_ip = 0;;) switch (_fun72386_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun72386_ip = 33;
                        continue _fun72386
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var2.options;
                    var1 = var3 !== var2;
                case 33:
                    if (!var1) {
                        _fun72386_ip = 55;
                        continue _fun72386
                    }
                case 36:
                    var2 = _closure2_slot2;
                    var1 = var2.setOptions;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg0) { // Environment: var2
            _fun72387: for (var _fun72387_ip = 0;;) switch (_fun72387_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.query;
                    var1 = var0.resultTypes;
                    var2 = _closure2_slot2;
                    var4 = var2.resultTypes;
                    var2 = null;
                    var2 = var2 != var4;
                    if (!var2) {
                        _fun72387_ip = 64;
                        continue _fun72387
                    }
                case 37:
                    var4 = _closure2_slot2;
                    var6 = var4.resultTypes;
                    var5 = function(arg0, arg1) { // Original name: isArrayEqualSet, environment: var4
                        _fun72388: for (var _fun72388_ip = 0;;) switch (_fun72388_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = arg1;
                                var _closure4_slot0 = var0;
                                var2 = var3.length;
                                var0 = var0.size;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun72388_ip = 47;
                                    continue _fun72388
                                }
                            case 29:
                                var2 = var3.every;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var1 = var2.has;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 47:
                                return var0;
                        }
                    };
                    var4 = undefined;
                    var2 = var5.bind(var4)(var1, var6);
                case 64:
                    if (var2) {
                        _fun72387_ip = 111;
                        continue _fun72387
                    }
                case 67:
                    var4 = _closure2_slot2;
                    var2 = var4.setResultTypes;
                    var2 = var2.bind(var4)(var1);
                    var2 = var4.setLimit;
                    var6 = var1.length;
                    var1 = 20;
                    var5 = 1;
                    if (!(var5 === var6)) {
                        _fun72387_ip = 106;
                        continue _fun72387
                    }
                case 103:
                    var1 = 50;
                case 106:
                    var1 = var2.bind(var4)(var1);
                case 111:
                    var2 = _closure2_slot2;
                    var1 = var2.search;
                    var0 = var3.trim;
                    var4 = var0.bind(var3)();
                    var0 = '';
                    if (!(var0 !== var4)) {
                        _fun72387_ip = 142;
                        continue _fun72387
                    }
                case 139:
                    var0 = var3;
                case 142:
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.search = var2;
        var10 = var0;
        var9 = var1;
        var1 = copyDataProperties(var10, var9);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4884, 6583, 2]);