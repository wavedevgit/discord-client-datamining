// modules/polls/native/useFocusHelper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var3);
    var _closure1_slot2 = var5;
    var3 = 1;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = function() {
        var2 = this;
        var3 = _closure1_slot3;
        var1 = _closure1_slot7;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        var1 = {};
        var2.refsByKey = var1;
        var1 = new Array(0);
        var2.keyOrder = var1;
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var3 = _closure1_slot5;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var8 = var4;
            var3 = new var8[var3](var7);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.validState = var3;
            var3 = function() { // Environment: var1
                _fun108409: for (var _fun108409_ip = 0;;) switch (_fun108409_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.validState;
                        var4 = var0.refsByKey;
                        var3 = var0.keyOrder;
                        var12 = var4;
                        var0 = undefined;
                        var8 = true;
                        var2 = null;
                        var7 = undefined;
                        var6 = undefined;
                        for (var9 in var12)
                            case 46: {
                                var6 = undefined;
                                case 57: var14 = var9;
                                var15 = var4[var14];
                                var16 = var2 == var15;
                                var5 = undefined;
                                if (var16) {
                                    _fun108409_ip = 103;
                                    continue _fun108409
                                }
                                case 73: var16 = var15.current;
                                var15 = var2 == var16;
                                var7 = var16;
                                var5 = undefined;
                                if (var15) {
                                    _fun108409_ip = 103;
                                    continue _fun108409
                                }
                                case 90: var15 = var16.isFocused;
                                var5 = var15.bind(var16)();
                                var7 = var16;
                                case 103: var6 = var14;
                                if (var8 !== var5) {
                                    _fun108409_ip = 46;
                                    continue _fun108409
                                }
                            }
                    case 110:
                        if (!(var2 != var6)) {
                            _fun108409_ip = 247;
                            continue _fun108409
                        }
                    case 117:
                        var5 = var3.indexOf;
                        var6 = var5.bind(var3)(var6);
                        var5 = -1;
                        if (!(var5 !== var6)) {
                            _fun108409_ip = 219;
                            continue _fun108409
                        }
                    case 138:
                        var5 = var3.length;
                        var3 = 1;
                        var5 = var5 - var3;
                        if (!(!(var6 >= var5))) {
                            _fun108409_ip = 219;
                            continue _fun108409
                        }
                    case 154:
                        var5 = _closure3_slot0;
                        var5 = var5.validState;
                        var5 = var5.keyOrder;
                        var3 = var6 + var3;
                        var3 = var5[var3];
                        var5 = var4[var3];
                        var3 = var2 == var5;
                        var4 = var5;
                        if (var3) {
                            _fun108409_ip = 204;
                            continue _fun108409
                        }
                    case 192:
                        var5 = var5.current;
                        var3 = var2 == var5;
                        var4 = var5;
                    case 204:
                        if (var3) {
                            _fun108409_ip = 247;
                            continue _fun108409
                        }
                    case 207:
                        var3 = var4.focus;
                        var3 = var3.bind(var4)();
                        _fun108409_ip = 247;
                        continue _fun108409;
                    case 219:
                        var3 = _closure3_slot0;
                        var3 = var3.onAddAnswer;
                        if (!(var2 != var3)) {
                            _fun108409_ip = 247;
                            continue _fun108409
                        }
                    case 233:
                        var2 = var3.call;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                    case 247:
                        return var0;
                }
            };
            var2.focusNext = var3;
            var1 = function(arg0) { // Environment: var1
                _fun108410: for (var _fun108410_ip = 0;;) switch (_fun108410_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var0 = var0.validState;
                        var1 = var0.refsByKey;
                        var0 = arg0;
                        var2 = var1[var0];
                        var3 = null;
                        var0 = var3 == var2;
                        var1 = var2;
                        if (var0) {
                            _fun108410_ip = 50;
                            continue _fun108410
                        }
                    case 38:
                        var2 = var2.current;
                        var0 = var3 == var2;
                        var1 = var2;
                    case 50:
                        if (var0) {
                            _fun108410_ip = 63;
                            continue _fun108410
                        }
                    case 53:
                        var0 = var1.focus;
                        var0 = var0.bind(var1)();
                    case 63:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.focus = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'restartState';
        var0.key = var1;
        var1 = function() {
            var0 = _closure1_slot5;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = this;
            var0.pendingState = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'commitState';
        var0.key = var5;
        var5 = function() {
            _fun108412: for (var _fun108412_ip = 0;;) switch (_fun108412_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.pendingState;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun108412_ip = 21;
                        continue _fun108412
                    }
                case 15:
                    var1.validState = var0;
                case 21:
                    var0 = undefined;
                    var1.pendingState = var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'refWithKey';
        var0.key = var5;
        var4 = function arg0() {
            _fun108413: for (var _fun108413_ip = 0;;) switch (_fun108413_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = var0.pendingState;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var0);
                    var4 = null;
                    var5 = var4 != var2;
                    var0 = 'Called refWithKey without a valid state';
                    var0 = var6.bind(var7)(var5, var0);
                    var5 = var2.keyOrder;
                    var0 = var5.push;
                    var0 = var0.bind(var5)(var3);
                    var0 = var2.refsByKey;
                    var0 = var0[var3];
                    if (!(var4 == var0)) {
                        _fun108413_ip = 111;
                        continue _fun108413
                    }
                case 85:
                    var4 = _closure1_slot4;
                    var1 = var4.createRef;
                    var1 = var1.bind(var4)();
                    var2 = var2.refsByKey;
                    var2[var3] = var1;
                    return var1;
                case 111:
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/useFocusHelper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun108414: for (var _fun108414_ip = 0;;) switch (_fun108414_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun108414_ip = 13;
                    continue _fun108414
                }
            case 11:
                var0 = {};
            case 13:
                var0 = var0.onAddAnswer;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var4;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var2 = var1;
                    var0 = new var2[var0](var1);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                _closure2_slot1 = var0;
                var3 = var0.restartState;
                var3 = var3.bind(var0)();
                var3 = _closure1_slot4;
                var2 = var3.useEffect;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2.onAddAnswer = var1;
                    var1 = _closure2_slot1;
                    var0 = var1.commitState;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 31, 44, 4891, 2]);