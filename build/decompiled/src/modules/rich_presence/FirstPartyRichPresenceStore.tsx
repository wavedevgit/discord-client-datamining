// modules/rich_presence/FirstPartyRichPresenceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun50388: for (var _fun50388_ip = 0;;) switch (_fun50388_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun50388_ip = 74;
                continue _fun50388;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun50391: for (var _fun50391_ip = 0;;) switch (_fun50391_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50391_ip = 46;
                    continue _fun50391
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50391_ip = 55;
                    continue _fun50391
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50391_ip = 343;
                    continue _fun50391
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50391_ip = 323;
                    continue _fun50391
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50391_ip = 283;
                    continue _fun50391
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50391_ip = 270;
                    continue _fun50391
                }
            case 110:
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
                    _fun50391_ip = 163;
                    continue _fun50391
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50391_ip = 179;
                    continue _fun50391
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50391_ip = 249;
                    continue _fun50391
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50391_ip = 249;
                    continue _fun50391
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50391_ip = 234;
                    continue _fun50391
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50391_ip = 247;
                    continue _fun50391
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50391_ip = 265;
                continue _fun50391;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50391_ip = 283;
                continue _fun50391;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50391_ip = 323;
                    continue _fun50391
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun50391_ip = 330;
                    continue _fun50391
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50392: for (var _fun50392_ip = 0;;) switch (_fun50392_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50392_ip = 56;
                                continue _fun50392
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
                            _fun50392_ip = 67;
                            continue _fun50392;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun50393: for (var _fun50393_ip = 0;;) switch (_fun50393_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50393_ip = 23;
                    continue _fun50393
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50393_ip = 33;
                    continue _fun50393
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
                    _fun50393_ip = 70;
                    continue _fun50393
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50393_ip = 55;
                    continue _fun50393
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun50394: for (var _fun50394_ip = 0;;) switch (_fun50394_ip) {
            case 0:
                var2 = new Array(0);
                var3 = _closure1_slot10;
                var0 = _closure1_slot7;
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var3 = var6.bind(var4)();
                var0 = var3.done;
                var5 = null;
                if (var0) {
                    _fun50394_ip = 80;
                    continue _fun50394
                }
            case 36:
                var7 = var3.value;
                var0 = var7.getActivity;
                var7 = var0.bind(var7)();
                if (!(var5 != var7)) {
                    _fun50394_ip = 65;
                    continue _fun50394
                }
            case 55:
                var0 = var2.push;
                var0 = var0.bind(var2)(var7);
            case 65:
                var7 = var6.bind(var4)();
                var0 = var7.done;
                var3 = var7;
                if (!var0) {
                    _fun50394_ip = 36;
                    continue _fun50394
                }
            case 80:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 6;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot8;
                var0 = var3.bind(var4)(var2, var0);
                var0 = !var0;
                if (!var0) {
                    _fun50394_ip = 122;
                    continue _fun50394
                }
            case 116:
                _closure1_slot8 = var2;
                var0 = true;
            case 122:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var3.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var4[var5];
    var6 = var3.bind(var0)(var5);
    var5 = new Array(1);
    var5[0] = var6;
    var _closure1_slot7 = var5;
    var5 = new Array(0);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var5 = var5.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun50396: for (var _fun50396_ip = 0;;) switch (_fun50396_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50396_ip = 69;
                        continue _fun50396
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50396_ip = 105;
                    continue _fun50396;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.syncWith;
            var1 = _closure1_slot7;
            var0 = _closure1_slot12;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActivities';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var1.bind(var0)(var5);
    var1 = 'FirstPartyRichPresenceStore';
    var5.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var10 = var3.bind(var0)(var1);
    var3 = var5.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var11 = var3;
    var1 = new var11[var5](var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rich_presence/FirstPartyRichPresenceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5655, 644, 566, 806, 2]);