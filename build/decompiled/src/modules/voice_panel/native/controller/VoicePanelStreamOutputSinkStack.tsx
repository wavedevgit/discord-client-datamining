// modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun110708: for (var _fun110708_ip = 0;;) switch (_fun110708_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110708_ip = 46;
                    continue _fun110708
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110708_ip = 55;
                    continue _fun110708
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110708_ip = 345;
                    continue _fun110708
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110708_ip = 323;
                    continue _fun110708
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110708_ip = 283;
                    continue _fun110708
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110708_ip = 270;
                    continue _fun110708
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
                    _fun110708_ip = 163;
                    continue _fun110708
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110708_ip = 179;
                    continue _fun110708
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110708_ip = 249;
                    continue _fun110708
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110708_ip = 249;
                    continue _fun110708
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110708_ip = 234;
                    continue _fun110708
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110708_ip = 247;
                    continue _fun110708
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110708_ip = 265;
                continue _fun110708;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110708_ip = 283;
                continue _fun110708;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110708_ip = 323;
                    continue _fun110708
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
                    _fun110708_ip = 330;
                    continue _fun110708
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110709: for (var _fun110709_ip = 0;;) switch (_fun110709_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110709_ip = 56;
                                continue _fun110709
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
                            _fun110709_ip = 67;
                            continue _fun110709;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun110710: for (var _fun110710_ip = 0;;) switch (_fun110710_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110710_ip = 23;
                    continue _fun110710
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110710_ip = 33;
                    continue _fun110710
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
                    _fun110710_ip = 70;
                    continue _fun110710
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110710_ip = 55;
                    continue _fun110710
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = 3;
    var4 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function arg0() {
            _fun110712: for (var _fun110712_ip = 0;;) switch (_fun110712_ip) {
                case 0:
                    var4 = arguments[1];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun110712_ip = 20;
                        continue _fun110712
                    }
                case 18:
                    var4 = false;
                case 20:
                    var5 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var0)(var2, var3);
                    var3 = arg0;
                    var2.mediaEngine = var3;
                    var3 = global;
                    var5 = var3.Map;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var5](var8);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.activeSinks = var5;
                    var5 = -1;
                    var2.timer = var5;
                    if (!var4) {
                        _fun110712_ip = 129;
                        continue _fun110712
                    }
                case 98:
                    var4 = var3.setInterval;
                    var3 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.logSinks;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = 2000;
                    var1 = var4.bind(var0)(var3, var1);
                    var2.timer = var1;
                case 129:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'cleanUp';
        var0.key = var1;
        var1 = function() {
            var0 = global;
            var2 = var0.clearInterval;
            var0 = this;
            var1 = var0.timer;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'logSinks';
        var0.key = var5;
        var5 = function() {
            _fun110715: for (var _fun110715_ip = 0;;) switch (_fun110715_ip) {
                case 0:
                    var13 = new Array(0);
                    var2 = _closure1_slot4;
                    var0 = this;
                    var1 = var0.activeSinks;
                    var0 = undefined;
                    var11 = var2.bind(var0)(var1);
                    var2 = var11.bind(var0)();
                    var1 = var2.done;
                    var10 = 2;
                    var9 = 0;
                    var8 = 1;
                    var7 = global;
                    var6 = ',';
                    var5 = '[Stream:';
                    var4 = ', Locks:[';
                    var3 = ']]';
                    if (var1) {
                        _fun110715_ip = 172;
                        continue _fun110715
                    }
                case 71:
                    var14 = var2.value;
                    var1 = _closure1_slot0;
                    var1 = var1.bind(var0)(var14, var10);
                    var16 = var1[var9];
                    var17 = var1[var8];
                    var14 = var13.push;
                    var15 = var7.Array;
                    var1 = var15.from;
                    var15 = var1.bind(var15)(var17);
                    var1 = var15.join;
                    var19 = var1.bind(var15)(var6);
                    var1 = var7.HermesInternal;
                    var1 = var1.concat;
                    var22 = var5;
                    var21 = var16;
                    var20 = var4;
                    var18 = var3;
                    var1 = var22[var1](var21, var20, var19, var18, var17);
                    var1 = var14.bind(var13)(var1);
                    var14 = var11.bind(var0)();
                    var1 = var14.done;
                    var2 = var14;
                    if (!var1) {
                        _fun110715_ip = 71;
                        continue _fun110715
                    }
                case 172:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setHasActiveVideoOutputSink';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun110716: for (var _fun110716_ip = 0;;) switch (_fun110716_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var2 = var0.activeSinks;
                    var1 = var2.get;
                    var2 = var1.bind(var2)(var3);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun110716_ip = 59;
                        continue _fun110716
                    }
                case 31:
                    var1 = global;
                    var1 = var1.Set;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var11 = var5;
                    var1 = new var11[var1](var10);
                    var2 = var1 instanceof Object ? var1 : var5;
                case 59:
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var4);
                    var5 = arg2;
                    if (var5) {
                        _fun110716_ip = 147;
                        continue _fun110716
                    }
                case 75:
                    if (var1) {
                        _fun110716_ip = 82;
                        continue _fun110716
                    }
                case 78:
                    var5 = undefined;
                    return var5;
                case 82:
                    var5 = var2.delete;
                    var5 = var5.bind(var2)(var4);
                    var6 = var2.size;
                    var5 = 0;
                    if (!(var5 === var6)) {
                        _fun110716_ip = 215;
                        continue _fun110716
                    }
                case 103:
                    var7 = var0.setActive;
                    var5 = var0.sourceId;
                    var6 = var5.bind(var0)(var4);
                    var5 = false;
                    var5 = var7.bind(var0)(var3, var5, var6);
                    var6 = var0.activeSinks;
                    var5 = var6.delete;
                    var5 = var5.bind(var6)(var3);
                    _fun110716_ip = 215;
                    continue _fun110716;
                case 147:
                    if (var1) {
                        _fun110716_ip = 219;
                        continue _fun110716
                    }
                case 150:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var4);
                    var5 = var2.size;
                    var1 = 1;
                    if (!(var1 === var5)) {
                        _fun110716_ip = 215;
                        continue _fun110716
                    }
                case 172:
                    var5 = var0.setActive;
                    var1 = var0.sourceId;
                    var4 = var1.bind(var0)(var4);
                    var1 = true;
                    var1 = var5.bind(var0)(var3, var1, var4);
                    var1 = var0.activeSinks;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var3, var2);
                case 215:
                    var0 = undefined;
                    return var0;
                case 219:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'clearLock';
        var0.key = var5;
        var5 = function arg0() {
            _fun110717: for (var _fun110717_ip = 0;;) switch (_fun110717_ip) {
                case 0:
                    var10 = arg0;
                    var9 = this;
                    var2 = _closure1_slot4;
                    var1 = var9.activeSinks;
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var2 = var7.bind(var0)();
                    var1 = var2.done;
                    var6 = false;
                    var5 = 0;
                    var4 = 2;
                    var3 = 1;
                    if (var1) {
                        _fun110717_ip = 158;
                        continue _fun110717
                    }
                case 48:
                    var11 = var2.value;
                    var1 = _closure1_slot0;
                    var1 = var1.bind(var0)(var11, var4);
                    var12 = var1[var5];
                    var1 = var1[var3];
                    var11 = var1.has;
                    var11 = var11.bind(var1)(var10);
                    if (!var11) {
                        _fun110717_ip = 143;
                        continue _fun110717
                    }
                case 84:
                    var11 = var1.delete;
                    var11 = var11.bind(var1)(var10);
                    var1 = var1.size;
                    if (!(var5 === var1)) {
                        _fun110717_ip = 143;
                        continue _fun110717
                    }
                case 103:
                    var11 = var9.setActive;
                    var1 = var9.sourceId;
                    var1 = var1.bind(var9)(var10);
                    var1 = var11.bind(var9)(var12, var6, var1);
                    var11 = var9.activeSinks;
                    var1 = var11.delete;
                    var1 = var1.bind(var11)(var12);
                case 143:
                    var11 = var7.bind(var0)();
                    var1 = var11.done;
                    var2 = var11;
                    if (!var1) {
                        _fun110717_ip = 48;
                        continue _fun110717
                    }
                case 158:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setActive';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var1 = this;
            var2 = var1.mediaEngine;
            var1 = var2.eachConnection;
            var0 = function(arg0) { // Environment: var0
                var4 = arg0;
                var3 = var4.setHasActiveVideoOutputSink;
                var2 = _closure3_slot0;
                var1 = _closure3_slot1;
                var0 = _closure3_slot2;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'sourceId';
        var0.key = var5;
        var4 = function arg0() {
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = 'VoicePanelStreamOutputSinkStack-';
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 4;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var0 = var4.useId;
        var6 = var0.bind(var4)();
        var _closure2_slot1 = var6;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var0 = function(arg0, arg1) { // Environment: var1
            var4 = _closure2_slot0;
            var3 = var4.setHasActiveVideoOutputSink;
            var2 = _closure2_slot1;
            var1 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var0;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var1 = var2.clearLock;
                var0 = _closure2_slot1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useSetHasActiveVideoOutputSink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 31, 2]);