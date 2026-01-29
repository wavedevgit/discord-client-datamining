// modules/reanimated/native/useStateFromSharedValue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun66056: for (var _fun66056_ip = 0;;) switch (_fun66056_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun66056_ip = 45;
                    continue _fun66056
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun66056_ip = 54;
                    continue _fun66056
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun66056_ip = 344;
                    continue _fun66056
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun66056_ip = 322;
                    continue _fun66056
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun66056_ip = 282;
                    continue _fun66056
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun66056_ip = 269;
                    continue _fun66056
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
                    _fun66056_ip = 162;
                    continue _fun66056
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun66056_ip = 178;
                    continue _fun66056
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun66056_ip = 248;
                    continue _fun66056
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun66056_ip = 248;
                    continue _fun66056
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun66056_ip = 233;
                    continue _fun66056
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun66056_ip = 246;
                    continue _fun66056
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun66056_ip = 264;
                continue _fun66056;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun66056_ip = 282;
                continue _fun66056;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun66056_ip = 322;
                    continue _fun66056
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
                    _fun66056_ip = 329;
                    continue _fun66056
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun66057: for (var _fun66057_ip = 0;;) switch (_fun66057_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun66057_ip = 56;
                                continue _fun66057
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
                            _fun66057_ip = 67;
                            continue _fun66057;
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
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun66058: for (var _fun66058_ip = 0;;) switch (_fun66058_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun66058_ip = 23;
                    continue _fun66058
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun66058_ip = 33;
                    continue _fun66058
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
                    _fun66058_ip = 70;
                    continue _fun66058
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun66058_ip = 55;
                    continue _fun66058
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: useListenerSubscription, environment: var1
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useLayoutEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun66060: for (var _fun66060_ip = 0;;) switch (_fun66060_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.get;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun66060_ip = 50;
                        continue _fun66060
                    }
                case 32:
                    var5 = _closure2_slot0;
                    var3 = function(arg0) { // Original name: createListenerState, environment: var0
                        var0 = global;
                        var0 = var0.Set;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var4 = var2;
                        var0 = new var4[var0](var3);
                        var2 = var0 instanceof Object ? var0 : var2;
                        var _closure4_slot0 = var2;
                        var0 = {};
                        var3 = arg0;
                        var0.sharedValue = var3;
                        var0.listeners = var2;
                        var1 = function(arg0) { // Original name: valueListener, environment: var1
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                _fun66063: for (var _fun66063_ip = 0;;) switch (_fun66063_ip) {
                                    case 0:
                                        var2 = _closure1_slot8;
                                        var1 = _closure4_slot0;
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var2 = var4.bind(var0)();
                                        var1 = var2.done;
                                        if (var1) {
                                            _fun66063_ip = 65;
                                            continue _fun66063
                                        }
                                    case 36:
                                        var5 = var2.value;
                                        var1 = _closure5_slot0;
                                        var1 = var5.bind(var0)(var1);
                                        var5 = var4.bind(var0)();
                                        var1 = var5.done;
                                        var2 = var5;
                                        if (!var1) {
                                            _fun66063_ip = 36;
                                            continue _fun66063
                                        }
                                    case 65:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0.valueListener = var1;
                        var1 = _closure1_slot4;
                        var1 = var1 + 1;
                        _closure1_slot4 = var1;
                        var0.listenerId = var1;
                        return var0;
                    };
                    var2 = undefined;
                    var1 = var3.bind(var2)(var5);
                case 50:
                    var _closure3_slot0 = var1;
                    var5 = var1.listeners;
                    var3 = var5.add;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var5)(var2);
                    var2 = var1.listeners;
                    var3 = var2.size;
                    var2 = 1;
                    if (!(var2 === var3)) {
                        _fun66060_ip = 225;
                        continue _fun66060
                    }
                case 95:
                    var3 = _closure1_slot5;
                    var2 = var3.set;
                    var5 = _closure2_slot0;
                    var2 = var2.bind(var3)(var5, var1);
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var9 = 3;
                    var2 = var11[var9];
                    var4 = undefined;
                    var6 = var10.bind(var4)(var2);
                    var3 = var6.runOnUI;
                    var2 = function(arg0, arg1, arg2) { // Original name: s, environment: var0
                        var3 = arg2;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var2 = var3.addListener;
                        var1 = arg0;
                        var0 = function(arg0) { // Environment: var0
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var0 = var2[var0];
                            var2 = undefined;
                            var3 = var1.bind(var2)(var0);
                            var1 = var3.runOnJS;
                            var0 = _closure4_slot0;
                            var1 = var1.bind(var3)(var0);
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var8 = {};
                    var9 = var11[var9];
                    var9 = var10.bind(var4)(var9);
                    var9 = var9.runOnJS;
                    var8.runOnJS = var9;
                    var2.__closure = var8;
                    var8 = 568027628003.0;
                    var2.__workletHash = var8;
                    var7 = _closure1_slot6;
                    var2.__initData = var7;
                    var3 = var3.bind(var6)(var2);
                    var2 = var1.listenerId;
                    var1 = var1.valueListener;
                    var1 = var3.bind(var4)(var2, var1, var5);
                case 225:
                    var0 = function() { // Environment: var0
                        _fun66066: for (var _fun66066_ip = 0;;) switch (_fun66066_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var4 = var0.listeners;
                                var3 = var4.delete;
                                var0 = _closure2_slot1;
                                var0 = var3.bind(var4)(var0);
                                var0 = _closure3_slot0;
                                var0 = var0.listeners;
                                var3 = var0.size;
                                var0 = 0;
                                if (!(var0 === var3)) {
                                    _fun66066_ip = 164;
                                    continue _fun66066
                                }
                            case 51:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var3 = 3;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.runOnUI;
                                var3 = function(arg0, arg1) { // Original name: r, environment: var3
                                    var2 = arg1;
                                    var1 = var2.removeListener;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var7 = {};
                                var3.__closure = var7;
                                var7 = 15997703035823.0;
                                var3.__workletHash = var7;
                                var7 = _closure1_slot7;
                                var3.__initData = var7;
                                var3 = var5.bind(var6)(var3);
                                var1 = _closure3_slot0;
                                var1 = var1.listenerId;
                                var2 = _closure2_slot0;
                                var1 = var3.bind(var4)(var1, var2);
                                var1 = _closure1_slot5;
                                var0 = var1.delete;
                                var0 = var0.bind(var1)(var2);
                            case 164:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot10 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var7 = var5[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var6 = 9999999;
    var _closure1_slot4 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reanimated/native/useStateFromSharedValue.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useStateFromSharedValue, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useState;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var2.bind(var3)(var0);
        var2 = _closure1_slot2;
        var3 = undefined;
        var0 = 2;
        var5 = var2.bind(var3)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var2 = 1;
        var2 = var5[var2];
        var1 = _closure1_slot10;
        var1 = var1.bind(var3)(var4, var2);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: useDerivedStateFromSharedValue, environment: var1
        var4 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot3;
        var3 = var5.useState;
        var0 = function() { // Environment: var2
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = var1.get;
            var1 = var0.bind(var1)();
            var0 = undefined;
            var0 = var2.bind(var0)(var1, var0);
            return var0;
        };
        var6 = var3.bind(var5)(var0);
        var5 = _closure1_slot2;
        var3 = undefined;
        var0 = 2;
        var6 = var5.bind(var3)(var6, var0);
        var0 = 0;
        var0 = var6[var0];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot2 = var5;
        var6 = _closure1_slot3;
        var5 = var6.useRef;
        var5 = var5.bind(var6)(var7);
        var _closure2_slot3 = var5;
        var7 = _closure1_slot3;
        var6 = var7.useLayoutEffect;
        var5 = function() { // Environment: var2
            var1 = _closure2_slot3;
            var0 = _closure2_slot1;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var5 = var6.bind(var7)(var5);
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var5 = function(arg0) { // Environment: var2
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot2;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure2_slot3;
                var2 = var3.current;
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var2 = new Array(0);
        var2 = var6.bind(var7)(var5, var2);
        var1 = _closure1_slot10;
        var1 = var1.bind(var3)(var4, var2);
        return var0;
    };
    var2.useDerivedStateFromSharedValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 802, 3677, 2]);