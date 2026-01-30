// ../discord_common/js/shared/utils/SetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun16476: for (var _fun16476_ip = 0;;) switch (_fun16476_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun16476_ip = 45;
                    continue _fun16476
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun16476_ip = 54;
                    continue _fun16476
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun16476_ip = 342;
                    continue _fun16476
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun16476_ip = 322;
                    continue _fun16476
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun16476_ip = 282;
                    continue _fun16476
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun16476_ip = 269;
                    continue _fun16476
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
                    _fun16476_ip = 162;
                    continue _fun16476
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun16476_ip = 178;
                    continue _fun16476
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun16476_ip = 248;
                    continue _fun16476
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun16476_ip = 248;
                    continue _fun16476
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun16476_ip = 233;
                    continue _fun16476
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun16476_ip = 246;
                    continue _fun16476
                }
            case 233:
                var8 = _closure1_slot1;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun16476_ip = 264;
                continue _fun16476;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun16476_ip = 282;
                continue _fun16476;
            case 269:
                var6 = _closure1_slot1;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun16476_ip = 322;
                    continue _fun16476
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
                    _fun16476_ip = 329;
                    continue _fun16476
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun16477: for (var _fun16477_ip = 0;;) switch (_fun16477_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun16477_ip = 56;
                                continue _fun16477
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
                            _fun16477_ip = 67;
                            continue _fun16477;
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
        _fun16478: for (var _fun16478_ip = 0;;) switch (_fun16478_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun16478_ip = 23;
                    continue _fun16478
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun16478_ip = 33;
                    continue _fun16478
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
                    _fun16478_ip = 70;
                    continue _fun16478
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun16478_ip = 55;
                    continue _fun16478
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
    var3 = '../discord_common/js/shared/utils/SetUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: areSetsEqual, environment: var1
        _fun16479: for (var _fun16479_ip = 0;;) switch (_fun16479_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                if (!(var1 !== var4)) {
                    _fun16479_ip = 95;
                    continue _fun16479
                }
            case 10:
                var2 = var1.size;
                var0 = var4.size;
                if (!(var2 === var0)) {
                    _fun16479_ip = 91;
                    continue _fun16479
                }
            case 24:
                var0 = _closure1_slot0;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun16479_ip = 87;
                    continue _fun16479
                }
            case 50:
                var5 = var1.value;
                var0 = var4.has;
                var0 = var0.bind(var4)(var5);
                if (var0) {
                    _fun16479_ip = 72;
                    continue _fun16479
                }
            case 68:
                var0 = false;
                return var0;
            case 72:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (!var0) {
                    _fun16479_ip = 50;
                    continue _fun16479
                }
            case 87:
                var0 = true;
                return var0;
            case 91:
                var0 = false;
                return var0;
            case 95:
                var0 = true;
                return var0;
        }
    };
    var2.areSetsEqual = var3;
    var1 = function(arg0) { // Original name: toSetInplace, environment: var1
        _fun16480: for (var _fun16480_ip = 0;;) switch (_fun16480_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun16480_ip = 58;
                    continue _fun16480
                }
            case 9:
                var1 = global;
                var0 = var1.Set;
                var2 = var3 instanceof var0;
                var0 = var3;
                if (var2) {
                    _fun16480_ip = 56;
                    continue _fun16480
                }
            case 27:
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var4 = var3;
                var1 = new var5[var1](var4, var3);
                var0 = var1 instanceof Object ? var1 : var2;
            case 56:
                _fun16480_ip = 86;
                continue _fun16480;
            case 58:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var1 = new var5[var1](var4);
                var0 = var1 instanceof Object ? var1 : var2;
            case 86:
                return var0;
        }
    };
    var2.toSetInplace = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);