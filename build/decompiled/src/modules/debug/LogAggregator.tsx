// modules/debug/LogAggregator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun155: for (var _fun155_ip = 0;;) switch (_fun155_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun155_ip = 45;
                    continue _fun155
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun155_ip = 54;
                    continue _fun155
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun155_ip = 342;
                    continue _fun155
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun155_ip = 322;
                    continue _fun155
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun155_ip = 282;
                    continue _fun155
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun155_ip = 269;
                    continue _fun155
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
                    _fun155_ip = 162;
                    continue _fun155
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun155_ip = 178;
                    continue _fun155
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun155_ip = 248;
                    continue _fun155
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun155_ip = 248;
                    continue _fun155
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun155_ip = 233;
                    continue _fun155
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun155_ip = 246;
                    continue _fun155
                }
            case 233:
                var8 = _closure1_slot2;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun155_ip = 264;
                continue _fun155;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun155_ip = 282;
                continue _fun155;
            case 269:
                var6 = _closure1_slot2;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun155_ip = 322;
                    continue _fun155
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
                    _fun155_ip = 329;
                    continue _fun155
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun156: for (var _fun156_ip = 0;;) switch (_fun156_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun156_ip = 56;
                                continue _fun156
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
                            _fun156_ip = 67;
                            continue _fun156;
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
    var _closure1_slot1 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun157: for (var _fun157_ip = 0;;) switch (_fun157_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun157_ip = 23;
                    continue _fun157
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun157_ip = 33;
                    continue _fun157
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
                    _fun157_ip = 70;
                    continue _fun157
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun157_ip = 55;
                    continue _fun157
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = arg2;
    var0 = undefined;
    var6 = var3.bind(var0)(var5);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var9 = 5000;
    var10 = var5;
    var3 = new var10[var6](var9, var8);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/debug/LogAggregator.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: report, environment: var1
        _fun158: for (var _fun158_ip = 0;;) switch (_fun158_ip) {
            case 0:
                var6 = arg0;
                var17 = 1;
                var2 = copyRestArgs(var17);
                var1 = _closure1_slot1;
                var0 = undefined;
                var13 = var1.bind(var0)(var2);
                var4 = var13.bind(var0)();
                var1 = var4.done;
                var5 = '';
                var12 = ' ';
                var11 = '\n';
                var7 = global;
                var10 = 'boolean';
                var9 = 'number';
                var2 = 'string';
                var8 = var4;
                var4 = var5;
                var5 = var4;
                if (var1) {
                    _fun158_ip = 191;
                    continue _fun158
                }
            case 73:
                var1 = var8.value;
                var14 = typeof var1;
                if (!(var2 !== var14)) {
                    _fun158_ip = 162;
                    continue _fun158
                }
            case 85:
                if (!(var9 !== var14)) {
                    _fun158_ip = 162;
                    continue _fun158
                }
            case 89:
                if (!(var10 !== var14)) {
                    _fun158_ip = 162;
                    continue _fun158
                }
            case 93:
                var14 = var7.Error;
                var14 = var1 instanceof var14;
                if (var14) {
                    _fun158_ip = 133;
                    continue _fun158
                }
            case 106:
                var15 = var7.JSON;
                var14 = var15.stringify;
                var14 = var14.bind(var15)(var1);
                var14 = var14 + var12;
                var14 = var4 + var14;
                _fun158_ip = 170;
                continue _fun158;
            case 133:
                var15 = var1.message;
                var16 = var15 + var11;
                var15 = var1.stack;
                var15 = var16 + var15;
                var15 = var15 + var12;
                var14 = var4 + var15;
                _fun158_ip = 170;
                continue _fun158;
            case 162:
                var1 = var1 + var12;
                var14 = var4 + var1;
            case 170:
                var15 = var13.bind(var0)();
                var1 = var15.done;
                var4 = var14;
                var8 = var15;
                var5 = var4;
                if (!var1) {
                    _fun158_ip = 73;
                    continue _fun158
                }
            case 191:
                var1 = typeof var6;
                if (!(var2 !== var1)) {
                    _fun158_ip = 261;
                    continue _fun158
                }
            case 198:
                var4 = _closure1_slot0;
                var2 = var4.push;
                var1 = {};
                var9 = var7.Date;
                var8 = var9.now;
                var8 = var8.bind(var9)();
                var1.time = var8;
                var8 = var6.name;
                var1.category = var8;
                var8 = var6.timing;
                var1.timing = var8;
                var1.message = var5;
                var1 = var2.bind(var4)(var1);
                _fun158_ip = 306;
                continue _fun158;
            case 261:
                var4 = _closure1_slot0;
                var2 = var4.push;
                var1 = {};
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var1.time = var7;
                var1.category = var6;
                var1.message = var5;
                var1 = var2.bind(var4)(var1);
            case 306:
                var1 = _closure1_slot0;
                var1 = var1.length;
                var2 = 5000;
                if (!(var1 > var2)) {
                    _fun158_ip = 348;
                    continue _fun158
                }
            case 325:
                var1 = _closure1_slot0;
                var4 = var1.shift;
                var4 = var4.bind(var1)();
                var1 = var1.length;
                if (var1 > var2) {
                    _fun158_ip = 325;
                    continue _fun158
                }
            case 348:
                return var0;
        }
    };
    var2.report = var3;
    var3 = function() { // Original name: clear, environment: var1
        var1 = _closure1_slot0;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.clear = var3;
    var3 = function(arg0) { // Original name: stringify, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var1 = var2.toArray;
        var3 = var1.bind(var2)();
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun161: for (var _fun161_ip = 0;;) switch (_fun161_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun161_ip = 39;
                        continue _fun161
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = var3.includes;
                    var1 = arg0;
                    var1 = var1.category;
                    var0 = var2.bind(var3)(var1);
                case 39:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun162: for (var _fun162_ip = 0;;) switch (_fun162_ip) {
                case 0:
                    var0 = arg0;
                    var2 = new Array(0);
                    var3 = var2.push;
                    var1 = global;
                    var5 = var1.Date;
                    var7 = var0.time;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var1 = new var8[var5](var7, var6);
                    var4 = var1 instanceof Object ? var1 : var4;
                    var1 = var4.toISOString;
                    var1 = var1.bind(var4)();
                    var1 = var3.bind(var2)(var1);
                    var3 = var0.timing;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun162_ip = 89;
                        continue _fun162
                    }
                case 73:
                    var3 = var2.push;
                    var1 = var0.timing;
                    var1 = var3.bind(var2)(var1);
                case 89:
                    var3 = var2.push;
                    var1 = var0.category;
                    var0 = var0.message;
                    var0 = var3.bind(var2)(var1, var0);
                    var1 = var2.join;
                    var0 = ' -> ';
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '\n';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.stringify = var3;
    var1 = function() { // Original name: getAllForDebugPanel, environment: var1
        _fun163: for (var _fun163_ip = 0;;) switch (_fun163_ip) {
            case 0:
                var0 = arguments[0];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun163_ip = 11;
                    continue _fun163
                }
            case 9:
                var0 = false;
            case 11:
                var2 = _closure1_slot0;
                var1 = var2.toArray;
                var2 = var1.bind(var2)();
                if (var0) {
                    _fun163_ip = 36;
                    continue _fun163
                }
            case 31:
                var0 = var2;
                _fun163_ip = 46;
                continue _fun163;
            case 36:
                var1 = var2.reverse;
                var0 = var1.bind(var2)();
            case 46:
                return var0;
        }
    };
    var2.getAllForDebugPanel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13, 2]);