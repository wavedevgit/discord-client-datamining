// modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun73936: for (var _fun73936_ip = 0;;) switch (_fun73936_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun73936_ip = 45;
                    continue _fun73936
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun73936_ip = 54;
                    continue _fun73936
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun73936_ip = 344;
                    continue _fun73936
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun73936_ip = 322;
                    continue _fun73936
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun73936_ip = 282;
                    continue _fun73936
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun73936_ip = 269;
                    continue _fun73936
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
                    _fun73936_ip = 162;
                    continue _fun73936
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun73936_ip = 178;
                    continue _fun73936
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun73936_ip = 248;
                    continue _fun73936
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun73936_ip = 248;
                    continue _fun73936
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun73936_ip = 233;
                    continue _fun73936
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun73936_ip = 246;
                    continue _fun73936
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun73936_ip = 264;
                continue _fun73936;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun73936_ip = 282;
                continue _fun73936;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun73936_ip = 322;
                    continue _fun73936
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
                    _fun73936_ip = 329;
                    continue _fun73936
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun73937: for (var _fun73937_ip = 0;;) switch (_fun73937_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun73937_ip = 56;
                                continue _fun73937
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
                            _fun73937_ip = 67;
                            continue _fun73937;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun73938: for (var _fun73938_ip = 0;;) switch (_fun73938_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun73938_ip = 23;
                    continue _fun73938
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun73938_ip = 33;
                    continue _fun73938
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
                    _fun73938_ip = 70;
                    continue _fun73938
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun73938_ip = 55;
                    continue _fun73938
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useEmojiPickerViewableItemsChanged, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot3;
        var4 = var3.useRef;
        var2 = 0;
        var2 = var4.bind(var3)(var2);
        var _closure2_slot1 = var2;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 2;
        var4 = var4[var2];
        var2 = undefined;
        var6 = var6.bind(var2)(var4);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun73940: for (var _fun73940_ip = 0;;) switch (_fun73940_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var0 = var2.getCurrentUser;
                    var3 = var0.bind(var2)();
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var5 = 3;
                    var0 = var0[var5];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.canUseEmojisEverywhere;
                    var0 = var0.bind(var2)(var3);
                    var0 = !var0;
                    if (var0) {
                        _fun73940_ip = 86;
                        continue _fun73940
                    }
                case 55:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.canUseAnimatedEmojis;
                    var1 = var1.bind(var2)(var3);
                    var0 = !var1;
                case 86:
                    return var0;
            }
        };
        var4 = var4.bind(var6)(var2, var1);
        var _closure2_slot2 = var4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun73941: for (var _fun73941_ip = 0;;) switch (_fun73941_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var0 = var1[var0];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var0);
                    var4 = var5.debounce;
                    var3 = function() { // Environment: var2
                        var2 = _closure2_slot0;
                        var0 = _closure2_slot1;
                        var1 = var0.current;
                        var0 = 7;
                        var1 = var1 > var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = 200;
                    var0 = var4.bind(var5)(var3, var0);
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var3 = _closure2_slot2;
                    if (!var3) {
                        _fun73941_ip = 72;
                        continue _fun73941
                    }
                case 65:
                    var1 = function(arg0) { // Environment: var2
                        _fun73943: for (var _fun73943_ip = 0;;) switch (_fun73943_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.changed;
                                var1 = _closure1_slot5;
                                var0 = undefined;
                                var10 = var1.bind(var0)(var2);
                                var2 = var10.bind(var0)();
                                var1 = var2.done;
                                var9 = 0;
                                var8 = 1;
                                var7 = -1;
                                var6 = true;
                                var4 = global;
                                var3 = null;
                                if (var1) {
                                    _fun73943_ip = 155;
                                    continue _fun73943
                                }
                            case 55:
                                var15 = var2.value;
                                var11 = _closure2_slot1;
                                var13 = var4.Math;
                                var12 = var13.max;
                                var14 = var11.current;
                                var1 = var15.item;
                                var17 = var3 == var1;
                                var16 = undefined;
                                if (var17) {
                                    _fun73943_ip = 100;
                                    continue _fun73943
                                }
                            case 94:
                                var16 = var1.isSectionNitroLocked;
                            case 100:
                                var1 = 0;
                                if (!(var6 === var16)) {
                                    _fun73943_ip = 124;
                                    continue _fun73943
                                }
                            case 106:
                                var16 = var15.isViewable;
                                var15 = var7;
                                if (!var16) {
                                    _fun73943_ip = 121;
                                    continue _fun73943
                                }
                            case 118:
                                var15 = var8;
                            case 121:
                                var1 = var15;
                            case 124:
                                var1 = var14 + var1;
                                var1 = var12.bind(var13)(var9, var1);
                                var11.current = var1;
                                var11 = var10.bind(var0)();
                                var1 = var11.done;
                                var2 = var11;
                                if (!var1) {
                                    _fun73943_ip = 55;
                                    continue _fun73943
                                }
                            case 155:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                case 72:
                    var0.onViewableItemsChanged = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 566, 3068, 22, 2]);