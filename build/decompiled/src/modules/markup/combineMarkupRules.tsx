// modules/markup/combineMarkupRules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun43911: for (var _fun43911_ip = 0;;) switch (_fun43911_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43911_ip = 45;
                    continue _fun43911
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun43911_ip = 54;
                    continue _fun43911
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun43911_ip = 342;
                    continue _fun43911
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43911_ip = 322;
                    continue _fun43911
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43911_ip = 282;
                    continue _fun43911
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43911_ip = 269;
                    continue _fun43911
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun43911_ip = 162;
                    continue _fun43911
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun43911_ip = 178;
                    continue _fun43911
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43911_ip = 248;
                    continue _fun43911
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43911_ip = 248;
                    continue _fun43911
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43911_ip = 233;
                    continue _fun43911
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43911_ip = 246;
                    continue _fun43911
                }
            case 233:
                var8 = _closure1_slot1;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun43911_ip = 264;
                continue _fun43911;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun43911_ip = 282;
                continue _fun43911;
            case 269:
                var6 = _closure1_slot1;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun43911_ip = 322;
                    continue _fun43911
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun43911_ip = 329;
                    continue _fun43911
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43912: for (var _fun43912_ip = 0;;) switch (_fun43912_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43912_ip = 56;
                                continue _fun43912
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun43912_ip = 67;
                            continue _fun43912;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun43913: for (var _fun43913_ip = 0;;) switch (_fun43913_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43913_ip = 23;
                    continue _fun43913
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43913_ip = 33;
                    continue _fun43913
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun43913_ip = 70;
                    continue _fun43913
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43913_ip = 55;
                    continue _fun43913
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/combineMarkupRules.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: combineMarkupRules, environment: var1
        _fun43914: for (var _fun43914_ip = 0;;) switch (_fun43914_ip) {
            case 0:
                var0 = {};
                var2 = _closure1_slot0;
                var5 = undefined;
                var1 = arg0;
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun43914_ip = 144;
                    continue _fun43914
                }
            case 36:
                var11 = var3.value;
                var9 = var11;
                var1 = var2;
                var2 = var1;
                for (var6 in var9)
                    case 58: {
                        var2 = var1;
                        case 70: var1 = var6;
                        var12 = var1 in var0;
                        var13 = {};
                        if (var12) {
                            _fun43914_ip = 98;
                            continue _fun43914
                        }
                        case 82: var15 = var11[var1];
                        var16 = var13;
                        var12 = copyDataProperties(var16, var15);
                        var12 = var13;
                        _fun43914_ip = 123;
                        continue _fun43914;
                        case 98: var15 = var0[var1];
                        var16 = var13;
                        var14 = copyDataProperties(var16, var15);
                        var15 = var11[var1];
                        var16 = var13;
                        var14 = copyDataProperties(var16, var15);
                        var12 = var13;
                        case 123: var0[var1] = var12;
                        _fun43914_ip = 58;
                        continue _fun43914;
                    }
            case 129:
                var6 = var4.bind(var5)();
                var1 = var6.done;
                var3 = var6;
                if (!var1) {
                    _fun43914_ip = 36;
                    continue _fun43914
                }
            case 144:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);