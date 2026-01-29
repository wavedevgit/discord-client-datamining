// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun3171: for (var _fun3171_ip = 0;;) switch (_fun3171_ip) {
        case 0:
            var1 = module;
            var3 = exports;
            var0 = function(arg0) { // Original name: pd, environment: var8
                var5 = arg0;
                var1 = _closure1_slot0;
                var0 = var1.get;
                var0 = var0.bind(var1)(var5);
                var1 = global;
                var4 = var1.console;
                var3 = var4.assert;
                var1 = null;
                var2 = var1 != var0;
                var1 = "'this' is expected an Event object, but got";
                var1 = var3.bind(var4)(var2, var1, var5);
                return var0;
            };
            var _closure1_slot3 = var0;
            var0 = function(arg0) { // Original name: setCancelFlag, environment: var8
                _fun3173: for (var _fun3173_ip = 0;;) switch (_fun3173_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.passiveListener;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun3173_ip = 93;
                            continue _fun3173
                        }
                    case 15:
                        var1 = global;
                        var2 = var1.console;
                        var3 = 'undefined';
                        var2 = typeof var2;
                        var2 = var3 !== var2;
                        if (!var2) {
                            _fun3173_ip = 59;
                            continue _fun3173
                        }
                    case 37:
                        var3 = var1.console;
                        var3 = var3.error;
                        var4 = 'function';
                        var3 = typeof var3;
                        var2 = var4 === var3;
                    case 59:
                        if (!var2) {
                            _fun3173_ip = 155;
                            continue _fun3173
                        }
                    case 62:
                        var4 = var1.console;
                        var3 = var4.error;
                        var2 = var0.passiveListener;
                        var1 = 'Unable to preventDefault inside passive event listener invocation.';
                        var1 = var3.bind(var4)(var1, var2);
                        _fun3173_ip = 155;
                        continue _fun3173;
                    case 93:
                        var1 = var0.event;
                        var1 = var1.cancelable;
                        if (!var1) {
                            _fun3173_ip = 155;
                            continue _fun3173
                        }
                    case 108:
                        var1 = true;
                        var0.canceled = var1;
                        var1 = var0.event;
                        var1 = var1.preventDefault;
                        var2 = 'function';
                        var1 = typeof var1;
                        if (!(var2 === var1)) {
                            _fun3173_ip = 155;
                            continue _fun3173
                        }
                    case 139:
                        var1 = var0.event;
                        var0 = var1.preventDefault;
                        var0 = var0.bind(var1)();
                    case 155:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot4 = var0;
            var12 = function(arg0, arg1) { // Original name: Event, environment: var8
                _fun3174: for (var _fun3174_ip = 0;;) switch (_fun3174_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = arg1;
                        var6 = this;
                        var3 = _closure1_slot0;
                        var1 = var3.set;
                        var0 = {
                            'eventTarget': null,
                            'event': null,
                            'eventPhase': 2,
                            'currentTarget': null,
                            'canceled': false,
                            'stopped': false,
                            'immediateStopped': false,
                            'passiveListener': null
                        };
                        var0.eventTarget = var4;
                        var0.event = var2;
                        var0.currentTarget = var4;
                        var4 = var2.timeStamp;
                        if (var4) {
                            _fun3174_ip = 75;
                            continue _fun3174
                        }
                    case 58:
                        var7 = global;
                        var8 = var7.Date;
                        var7 = var8.now;
                        var4 = var7.bind(var8)();
                    case 75:
                        var0.timeStamp = var4;
                        var0 = var1.bind(var3)(var6, var0);
                        var4 = global;
                        var7 = var4.Object;
                        var3 = var7.defineProperty;
                        var1 = 'isTrusted';
                        var0 = {
                            'value': false,
                            'enumerable': true
                        };
                        var0 = var3.bind(var7)(var6, var1, var0);
                        var1 = var4.Object;
                        var0 = var1.keys;
                        var3 = var0.bind(var1)(var2);
                        var0 = var3.length;
                        var2 = 0;
                        var1 = var2 < var0;
                        var0 = undefined;
                        if (!var1) {
                            _fun3174_ip = 202;
                            continue _fun3174
                        }
                    case 152:
                        var9 = var3[var2];
                        var1 = var9 in var6;
                        if (var1) {
                            _fun3174_ip = 190;
                            continue _fun3174
                        }
                    case 163:
                        var8 = var4.Object;
                        var7 = var8.defineProperty;
                        var1 = _closure1_slot6;
                        var1 = var1.bind(var0)(var9);
                        var1 = var7.bind(var8)(var6, var9, var1);
                    case 190:
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if (var2 < var1) {
                            _fun3174_ip = 152;
                            continue _fun3174
                        }
                    case 202:
                        return var0;
                }
            };
            var _closure1_slot5 = var12;
            var0 = function(arg0) { // Original name: defineRedirectDescriptor, environment: var8
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = function() { // Original name: get, environment: var1
                    var2 = _closure1_slot3;
                    var1 = undefined;
                    var0 = this;
                    var0 = var2.bind(var1)(var0);
                    var1 = var0.event;
                    var0 = _closure2_slot0;
                    var0 = var1[var0];
                    return var0;
                };
                var0.get = var2;
                var1 = function(arg0) { // Original name: set, environment: var1
                    var2 = _closure1_slot3;
                    var0 = undefined;
                    var1 = this;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.event;
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var3[var2] = var1;
                    return var0;
                };
                var0.set = var1;
                var1 = true;
                var0.configurable = var1;
                var0.enumerable = var1;
                return var0;
            };
            var _closure1_slot6 = var0;
            var0 = function(arg0) { // Original name: defineCallDescriptor, environment: var8
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = {
                    'value': null,
                    'configurable': true,
                    'enumerable': true
                };
                var1 = function() { // Original name: value, environment: var1
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = this;
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.event;
                    var1 = _closure2_slot0;
                    var2 = var3[var1];
                    var1 = var2.apply;
                    var0 = arguments;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var0.value = var1;
                return var0;
            };
            var _closure1_slot7 = var0;
            var0 = function(arg0) { // Original name: getWrapper, environment: var8
                _fun3180: for (var _fun3180_ip = 0;;) switch (_fun3180_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun3180_ip = 108;
                            continue _fun3180
                        }
                    case 9:
                        var1 = global;
                        var0 = var1.Object;
                        var0 = var0.prototype;
                        if (!(var4 !== var0)) {
                            _fun3180_ip = 108;
                            continue _fun3180
                        }
                    case 26:
                        var5 = _closure1_slot1;
                        var0 = var5.get;
                        var0 = var0.bind(var5)(var4);
                        if (!(var3 == var0)) {
                            _fun3180_ip = 106;
                            continue _fun3180
                        }
                    case 47:
                        var3 = _closure1_slot8;
                        var5 = var1.Object;
                        var1 = var5.getPrototypeOf;
                        var1 = var1.bind(var5)(var4);
                        var5 = undefined;
                        var3 = var3.bind(var5)(var1);
                        var1 = function(arg0, arg1) { // Original name: defineWrapper, environment: var1
                            _fun3181: for (var _fun3181_ip = 0;;) switch (_fun3181_ip) {
                                case 0:
                                    var0 = arg0;
                                    var9 = arg1;
                                    var _closure3_slot0 = var0;
                                    var1 = function(arg0, arg1) { // Original name: CustomEvent, environment: var1
                                        var4 = _closure3_slot0;
                                        var3 = var4.call;
                                        var2 = this;
                                        var1 = arg0;
                                        var0 = arg1;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var8 = global;
                                    var3 = var8.Object;
                                    var2 = var3.keys;
                                    var7 = var2.bind(var3)(var9);
                                    var2 = var7.length;
                                    var6 = 0;
                                    if (!(var6 !== var2)) {
                                        _fun3181_ip = 225;
                                        continue _fun3181
                                    }
                                case 49:
                                    var5 = var8.Object;
                                    var4 = var5.create;
                                    var3 = var0.prototype;
                                    var2 = {};
                                    var10 = {
                                        'value': null,
                                        'configurable': true,
                                        'writable': true
                                    };
                                    var10.value = var1;
                                    var2.constructor = var10;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1.prototype = var2;
                                    var2 = var7.length;
                                    var2 = var6 < var2;
                                    var4 = undefined;
                                    var3 = 'function';
                                    var6 = 0;
                                    if (!var2) {
                                        _fun3181_ip = 223;
                                        continue _fun3181
                                    }
                                case 122:
                                    var13 = var7[var6];
                                    var2 = var0.prototype;
                                    var2 = var13 in var2;
                                    if (var2) {
                                        _fun3181_ip = 211;
                                        continue _fun3181
                                    }
                                case 138:
                                    var10 = var8.Object;
                                    var2 = var10.getOwnPropertyDescriptor;
                                    var2 = var2.bind(var10)(var9, var13);
                                    var2 = var2.value;
                                    var12 = var8.Object;
                                    var11 = var12.defineProperty;
                                    var10 = var1.prototype;
                                    var2 = typeof var2;
                                    if (!(var3 !== var2)) {
                                        _fun3181_ip = 195;
                                        continue _fun3181
                                    }
                                case 184:
                                    var2 = _closure1_slot6;
                                    var2 = var2.bind(var4)(var13);
                                    _fun3181_ip = 204;
                                    continue _fun3181;
                                case 195:
                                    var14 = _closure1_slot7;
                                    var2 = var14.bind(var4)(var13);
                                case 204:
                                    var2 = var11.bind(var12)(var10, var13, var2);
                                case 211:
                                    var6 = var6 + 1;
                                    var2 = var7.length;
                                    if (var6 < var2) {
                                        _fun3181_ip = 122;
                                        continue _fun3181
                                    }
                                case 223:
                                    return var1;
                                case 225:
                                    return var0;
                            }
                        };
                        var1 = var1.bind(var5)(var3, var4);
                        var3 = _closure1_slot1;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4, var1);
                        var0 = var1;
                    case 106:
                        return var0;
                    case 108:
                        var0 = _closure1_slot5;
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var0 = function(arg0) { // Original name: isStopped, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                var0 = var0.immediateStopped;
                return var0;
            };
            var _closure1_slot9 = var0;
            var0 = function(arg0, arg1) { // Original name: setPassiveListener, environment: var8
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var2 = var2.bind(var0)(var1);
                var1 = arg1;
                var2.passiveListener = var1;
                return var0;
            };
            var _closure1_slot10 = var0;
            var0 = function(arg0) { // Original name: isObject, environment: var8
                _fun3185: for (var _fun3185_ip = 0;;) switch (_fun3185_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        var0 = var0 !== var1;
                        if (!var0) {
                            _fun3185_ip = 23;
                            continue _fun3185
                        }
                    case 12:
                        var2 = 'object';
                        var1 = typeof var1;
                        var0 = var2 === var1;
                    case 23:
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var0 = function(arg0) { // Original name: getListeners, environment: var8
                _fun3186: for (var _fun3186_ip = 0;;) switch (_fun3186_ip) {
                    case 0:
                        var2 = _closure1_slot2;
                        var1 = var2.get;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun3186_ip = 28;
                            continue _fun3186
                        }
                    case 26:
                        return var0;
                    case 28:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = "'this' is expected an EventTarget object, but got another value.";
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot12 = var0;
            var2 = function(arg0, arg1) { // Original name: defineEventAttribute, environment: var8
                var2 = arg1;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.defineProperty;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'on';
                var3 = var1.bind(var0)(var2);
                var1 = function(arg0) { // Original name: defineEventAttributeDescriptor, environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var2 = function() { // Original name: get, environment: var1
                        _fun3189: for (var _fun3189_ip = 0;;) switch (_fun3189_ip) {
                            case 0:
                                var2 = _closure1_slot12;
                                var1 = undefined;
                                var0 = this;
                                var2 = var2.bind(var1)(var0);
                                var1 = var2.get;
                                var0 = _closure3_slot0;
                                var2 = var1.bind(var2)(var0);
                                var1 = null;
                                var3 = 3;
                                if (!(var1 != var2)) {
                                    _fun3189_ip = 65;
                                    continue _fun3189
                                }
                            case 43:
                                var4 = var2.listenerType;
                                var0 = var2;
                                if (!(var3 !== var4)) {
                                    _fun3189_ip = 67;
                                    continue _fun3189
                                }
                            case 56:
                                var2 = var0.next;
                                if (var1 != var2) {
                                    _fun3189_ip = 43;
                                    continue _fun3189
                                }
                            case 65:
                                return var1;
                            case 67:
                                var0 = var0.listener;
                                return var0;
                        }
                    };
                    var0.get = var2;
                    var1 = function(arg0) { // Original name: set, environment: var1
                        _fun3190: for (var _fun3190_ip = 0;;) switch (_fun3190_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = 'function';
                                var0 = typeof var1;
                                var0 = var2 === var0;
                                if (var0) {
                                    _fun3190_ip = 31;
                                    continue _fun3190
                                }
                            case 17:
                                var3 = _closure1_slot11;
                                var2 = undefined;
                                var0 = var3.bind(var2)(var1);
                            case 31:
                                var6 = var1;
                                if (var0) {
                                    _fun3190_ip = 39;
                                    continue _fun3190
                                }
                            case 37:
                                var6 = null;
                            case 39:
                                var2 = _closure1_slot12;
                                var0 = undefined;
                                var1 = this;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.get;
                                var2 = _closure3_slot0;
                                var2 = var3.bind(var4)(var2);
                                var5 = null;
                                var9 = var5 != var2;
                                var8 = 3;
                                var7 = null;
                                var3 = var2;
                                var2 = null;
                                if (!var9) {
                                    _fun3190_ip = 191;
                                    continue _fun3190
                                }
                            case 92:
                                var10 = var3.listenerType;
                                var9 = var3;
                                if (!(var8 === var10)) {
                                    _fun3190_ip = 176;
                                    continue _fun3190
                                }
                            case 105:
                                if (!(var5 === var7)) {
                                    _fun3190_ip = 162;
                                    continue _fun3190
                                }
                            case 109:
                                var10 = var3.next;
                                if (!(var5 === var10)) {
                                    _fun3190_ip = 137;
                                    continue _fun3190
                                }
                            case 118:
                                var11 = var4.delete;
                                var10 = _closure3_slot0;
                                var10 = var11.bind(var4)(var10);
                                var9 = var7;
                                _fun3190_ip = 176;
                                continue _fun3190;
                            case 137:
                                var12 = var4.set;
                                var11 = _closure3_slot0;
                                var10 = var3.next;
                                var10 = var12.bind(var4)(var11, var10);
                                var9 = var7;
                                _fun3190_ip = 176;
                                continue _fun3190;
                            case 162:
                                var10 = var3.next;
                                var7.next = var10;
                                var9 = var7;
                            case 176:
                                var3 = var3.next;
                                var7 = var9;
                                var2 = var7;
                                if (var5 != var3) {
                                    _fun3190_ip = 92;
                                    continue _fun3190
                                }
                            case 191:
                                if (!(var5 !== var6)) {
                                    _fun3190_ip = 238;
                                    continue _fun3190
                                }
                            case 195:
                                var3 = {
                                    'listener': null,
                                    'listenerType': 3,
                                    'passive': false,
                                    'once': false,
                                    'next': null
                                };
                                var3.listener = var6;
                                if (!(var5 !== var2)) {
                                    _fun3190_ip = 223;
                                    continue _fun3190
                                }
                            case 215:
                                var2.next = var3;
                                _fun3190_ip = 238;
                                continue _fun3190;
                            case 223:
                                var2 = var4.set;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var4)(var1, var3);
                            case 238:
                                return var0;
                        }
                    };
                    var0.set = var1;
                    var1 = true;
                    var0.configurable = var1;
                    var0.enumerable = var1;
                    return var0;
                };
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var1 = arg0;
                var1 = var4.bind(var5)(var1, var3, var2);
                return var0;
            };
            var _closure1_slot13 = var2;
            var0 = function(arg0) { // Original name: defineCustomEventTarget, environment: var8
                _fun3191: for (var _fun3191_ip = 0;;) switch (_fun3191_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = function() { // Original name: CustomEventTarget, environment: var0
                            var2 = _closure1_slot15;
                            var1 = var2.call;
                            var0 = this;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = global;
                        var6 = var1.Object;
                        var3 = var6.create;
                        var1 = _closure1_slot15;
                        var2 = var1.prototype;
                        var1 = {};
                        var7 = {
                            'value': null,
                            'configurable': true,
                            'writable': true
                        };
                        var7.value = var0;
                        var1.constructor = var7;
                        var1 = var3.bind(var6)(var2, var1);
                        var0.prototype = var1;
                        var1 = var5.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = undefined;
                        if (!var1) {
                            _fun3191_ip = 116;
                            continue _fun3191
                        }
                    case 85:
                        var7 = _closure1_slot13;
                        var6 = var0.prototype;
                        var1 = var5[var3];
                        var1 = var7.bind(var2)(var6, var1);
                        var3 = var3 + 1;
                        var1 = var5.length;
                        if (var3 < var1) {
                            _fun3191_ip = 85;
                            continue _fun3191
                        }
                    case 116:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var4 = function() { // Original name: EventTarget, environment: var8
                _fun3193: for (var _fun3193_ip = 0;;) switch (_fun3193_ip) {
                    case 0:
                        var4 = this;
                        var0 = undefined;
                        var5 = undefined;
                        var2 = _closure1_slot15;
                        var2 = var4 instanceof var2;
                        if (var2) {
                            _fun3193_ip = 193;
                            continue _fun3193
                        }
                    case 24:
                        var3 = arguments.length;
                        var2 = 1;
                        if (!(var2 === var3)) {
                            _fun3193_ip = 61;
                            continue _fun3193
                        }
                    case 34:
                        var2 = global;
                        var7 = var2.Array;
                        var6 = var7.isArray;
                        var2 = 0;
                        var3 = arguments[var2];
                        var3 = var6.bind(var7)(var3);
                        if (var3) {
                            _fun3193_ip = 178;
                            continue _fun3193
                        }
                    case 61:
                        var3 = arguments.length;
                        var7 = 0;
                        if (!(!(var3 > var7))) {
                            _fun3193_ip = 106;
                            continue _fun3193
                        }
                    case 70:
                        var3 = global;
                        var8 = var3.TypeError;
                        var3 = var8.prototype;
                        var6 = Object.create(var3, {
                            constructor: {
                                value: var8
                            }
                        });
                        var10 = 'Cannot call a class as a function';
                        var11 = var6;
                        var3 = new var11[var8](var10, var9);
                        var3 = var3 instanceof Object ? var3 : var6;
                        throw var3;
                    case 106:
                        var3 = global;
                        var8 = var3.Array;
                        var10 = arguments.length;
                        var6 = var8.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var11 = var6;
                        var3 = new var11[var8](var10, var9);
                        var6 = var3 instanceof Object ? var3 : var6;
                        var3 = arguments.length;
                        var3 = var7 < var3;
                        var7 = 0;
                        if (!var3) {
                            _fun3193_ip = 167;
                            continue _fun3193
                        }
                    case 149:
                        var3 = arguments[var7];
                        var6[var7] = var3;
                        var7 = var7 + 1;
                        var3 = arguments.length;
                        if (var7 < var3) {
                            _fun3193_ip = 149;
                            continue _fun3193
                        }
                    case 167:
                        var3 = _closure1_slot14;
                        var3 = var3.bind(var0)(var6);
                        return var3;
                    case 178:
                        var3 = _closure1_slot14;
                        var2 = arguments[var2];
                        var2 = var3.bind(var0)(var2);
                        return var2;
                    case 193:
                        var3 = _closure1_slot2;
                        var2 = var3.set;
                        var1 = global;
                        var1 = var1.Map;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var5;
                        var1 = new var11[var1](var10);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var1 = var2.bind(var3)(var4, var1);
                        return var0;
                }
            };
            var _closure1_slot15 = var4;
            var5 = global;
            var9 = var5.Object;
            var7 = var9.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var9)(var3, var0, var6);
            var0 = var5.WeakMap;
            var6 = var0.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var0
                }
            });
            var18 = var6;
            var0 = new var18[var0](var17);
            var0 = var0 instanceof Object ? var0 : var6;
            var _closure1_slot0 = var0;
            var0 = var5.WeakMap;
            var6 = var0.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var0
                }
            });
            var18 = var6;
            var0 = new var18[var0](var17);
            var10 = var0 instanceof Object ? var0 : var6;
            var _closure1_slot1 = var10;
            var6 = {};
            var9 = function() { // Original name: get type, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.event;
                var0 = var0.type;
                return var0;
            };
            var0 = undefined;
            var7 = 'type';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get target, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.eventTarget;
                return var0;
            };
            var7 = 'target';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get currentTarget, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.currentTarget;
                return var0;
            };
            var7 = 'currentTarget';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var7 = function() { // Original name: composedPath, environment: var8
                _fun3197: for (var _fun3197_ip = 0;;) switch (_fun3197_ip) {
                    case 0:
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var0 = this;
                        var0 = var2.bind(var1)(var0);
                        var1 = var0.currentTarget;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun3197_ip = 39;
                            continue _fun3197
                        }
                    case 29:
                        var0 = new Array(1);
                        var0[0] = var1;
                        _fun3197_ip = 43;
                        continue _fun3197;
                    case 39:
                        var0 = new Array(0);
                    case 43:
                        return var0;
                }
            };
            var6.composedPath = var7;
            var9 = function() { // Original name: get NONE, environment: var8
                var0 = 0;
                return var0;
            };
            var7 = 'NONE';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get CAPTURING_PHASE, environment: var8
                var0 = 1;
                return var0;
            };
            var7 = 'CAPTURING_PHASE';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get AT_TARGET, environment: var8
                var0 = 2;
                return var0;
            };
            var7 = 'AT_TARGET';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get BUBBLING_PHASE, environment: var8
                var0 = 3;
                return var0;
            };
            var7 = 'BUBBLING_PHASE';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get eventPhase, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.eventPhase;
                return var0;
            };
            var7 = 'eventPhase';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var7 = function() { // Original name: stopPropagation, environment: var8
                _fun3203: for (var _fun3203_ip = 0;;) switch (_fun3203_ip) {
                    case 0:
                        var2 = _closure1_slot3;
                        var0 = undefined;
                        var1 = this;
                        var1 = var2.bind(var0)(var1);
                        var2 = true;
                        var1.stopped = var2;
                        var2 = var1.event;
                        var2 = var2.stopPropagation;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun3203_ip = 64;
                            continue _fun3203
                        }
                    case 48:
                        var2 = var1.event;
                        var1 = var2.stopPropagation;
                        var1 = var1.bind(var2)();
                    case 64:
                        return var0;
                }
            };
            var6.stopPropagation = var7;
            var7 = function() { // Original name: stopImmediatePropagation, environment: var8
                _fun3204: for (var _fun3204_ip = 0;;) switch (_fun3204_ip) {
                    case 0:
                        var2 = _closure1_slot3;
                        var0 = undefined;
                        var1 = this;
                        var1 = var2.bind(var0)(var1);
                        var2 = true;
                        var1.stopped = var2;
                        var1.immediateStopped = var2;
                        var2 = var1.event;
                        var2 = var2.stopImmediatePropagation;
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun3204_ip = 70;
                            continue _fun3204
                        }
                    case 54:
                        var2 = var1.event;
                        var1 = var2.stopImmediatePropagation;
                        var1 = var1.bind(var2)();
                    case 70:
                        return var0;
                }
            };
            var6.stopImmediatePropagation = var7;
            var9 = function() { // Original name: get bubbles, environment: var8
                var0 = global;
                var2 = var0.Boolean;
                var3 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var3.bind(var1)(var0);
                var0 = var0.event;
                var0 = var0.bubbles;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var7 = 'bubbles';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get cancelable, environment: var8
                var0 = global;
                var2 = var0.Boolean;
                var3 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var3.bind(var1)(var0);
                var0 = var0.event;
                var0 = var0.cancelable;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var7 = 'cancelable';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var7 = function() { // Original name: preventDefault, environment: var8
                var2 = _closure1_slot4;
                var3 = _closure1_slot3;
                var0 = undefined;
                var1 = this;
                var1 = var3.bind(var0)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var6.preventDefault = var7;
            var9 = function() { // Original name: get defaultPrevented, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.canceled;
                return var0;
            };
            var7 = 'defaultPrevented';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get composed, environment: var8
                var0 = global;
                var2 = var0.Boolean;
                var3 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var3.bind(var1)(var0);
                var0 = var0.event;
                var0 = var0.composed;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var7 = 'composed';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get timeStamp, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.timeStamp;
                return var0;
            };
            var7 = 'timeStamp';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var9 = function() { // Original name: get srcElement, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.eventTarget;
                return var0;
            };
            var7 = 'srcElement';
            Object.defineProperty(var6, var7, {
                get: var9,
                set: var0,
                enumerable: true
            });
            var11 = function() { // Original name: get cancelBubble, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.stopped;
                return var0;
            };
            var9 = function(arg0) { // Original name: set cancelBubble, environment: var8
                _fun3213: for (var _fun3213_ip = 0;;) switch (_fun3213_ip) {
                    case 0:
                        var0 = arg0;
                        if (!var0) {
                            _fun3213_ip = 66;
                            continue _fun3213
                        }
                    case 6:
                        var2 = _closure1_slot3;
                        var1 = undefined;
                        var0 = this;
                        var0 = var2.bind(var1)(var0);
                        var1 = true;
                        var0.stopped = var1;
                        var2 = var0.event;
                        var2 = var2.cancelBubble;
                        var3 = 'boolean';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun3213_ip = 66;
                            continue _fun3213
                        }
                    case 54:
                        var0 = var0.event;
                        var0.cancelBubble = var1;
                    case 66:
                        var0 = undefined;
                        return var0;
                }
            };
            var7 = 'cancelBubble';
            Object.defineProperty(var6, var7, {
                get: var11,
                set: var9,
                enumerable: true
            });
            var11 = function() { // Original name: get returnValue, environment: var8
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                var0 = var0.canceled;
                var0 = !var0;
                return var0;
            };
            var9 = function(arg0) { // Original name: set returnValue, environment: var8
                _fun3215: for (var _fun3215_ip = 0;;) switch (_fun3215_ip) {
                    case 0:
                        var0 = arg0;
                        if (var0) {
                            _fun3215_ip = 32;
                            continue _fun3215
                        }
                    case 6:
                        var2 = _closure1_slot4;
                        var3 = _closure1_slot3;
                        var1 = undefined;
                        var0 = this;
                        var0 = var3.bind(var1)(var0);
                        var0 = var2.bind(var1)(var0);
                    case 32:
                        var0 = undefined;
                        return var0;
                }
            };
            var7 = 'returnValue';
            Object.defineProperty(var6, var7, {
                get: var11,
                set: var9,
                enumerable: true
            });
            var7 = function() { // Original name: initEvent, environment: var8
                var0 = undefined;
                return var0;
            };
            var6.initEvent = var7;
            var12.prototype = var6;
            var13 = var5.Object;
            var9 = var13.defineProperty;
            var7 = var12.prototype;
            var6 = {
                'value': null,
                'configurable': true,
                'writable': true
            };
            var6.value = var12;
            var11 = 'constructor';
            var6 = var9.bind(var13)(var7, var11, var6);
            var6 = var5.window;
            var7 = 'undefined';
            var6 = typeof var6;
            var6 = var7 !== var6;
            if (!var6) {
                _fun3171_ip = 605;
                continue _fun3171
            }
        case 589:
            var9 = var5.window;
            var9 = var9.Event;
            var6 = var0 !== var9;
        case 605:
            if (!var6) {
                _fun3171_ip = 676;
                continue _fun3171
            }
        case 608:
            var14 = var5.Object;
            var13 = var14.setPrototypeOf;
            var9 = var12.prototype;
            var6 = var5.window;
            var6 = var6.Event;
            var6 = var6.prototype;
            var6 = var13.bind(var14)(var9, var6);
            var9 = var10.set;
            var6 = var5.window;
            var6 = var6.Event;
            var6 = var6.prototype;
            var6 = var9.bind(var10)(var6, var12);
        case 676:
            var6 = var5.WeakMap;
            var9 = var6.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var6
                }
            });
            var18 = var9;
            var6 = new var18[var6](var17);
            var6 = var6 instanceof Object ? var6 : var9;
            var _closure1_slot2 = var6;
            var6 = {};
            var9 = function(arg0, arg1, arg2) { // Original name: addEventListener, environment: var8
                _fun3217: for (var _fun3217_ip = 0;;) switch (_fun3217_ip) {
                    case 0:
                        var8 = arg0;
                        var6 = arg1;
                        var3 = arg2;
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun3217_ip = 295;
                            continue _fun3217
                        }
                    case 18:
                        var1 = 'function';
                        var0 = typeof var6;
                        if (!(var1 !== var0)) {
                            _fun3217_ip = 82;
                            continue _fun3217
                        }
                    case 29:
                        var1 = _closure1_slot11;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var6);
                        if (var0) {
                            _fun3217_ip = 82;
                            continue _fun3217
                        }
                    case 46:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var14 = "'listener' should be a function or an object.";
                        var15 = var1;
                        var0 = new var15[var2](var14, var13);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 82:
                        var4 = _closure1_slot12;
                        var0 = undefined;
                        var2 = this;
                        var7 = var4.bind(var0)(var2);
                        var1 = _closure1_slot11;
                        var1 = var1.bind(var0)(var3);
                        var9 = global;
                        var10 = var9.Boolean;
                        if (var1) {
                            _fun3217_ip = 126;
                            continue _fun3217
                        }
                    case 119:
                        var2 = var10.bind(var0)(var3);
                        _fun3217_ip = 137;
                        continue _fun3217;
                    case 126:
                        var4 = var3.capture;
                        var2 = var10.bind(var0)(var4);
                    case 137:
                        var4 = 2;
                        if (!var2) {
                            _fun3217_ip = 146;
                            continue _fun3217
                        }
                    case 143:
                        var4 = 1;
                    case 146:
                        var2 = {};
                        var2.listener = var6;
                        var2.listenerType = var4;
                        var10 = var1;
                        if (!var1) {
                            _fun3217_ip = 181;
                            continue _fun3217
                        }
                    case 164:
                        var12 = var9.Boolean;
                        var11 = var3.passive;
                        var10 = var12.bind(var0)(var11);
                    case 181:
                        var2.passive = var10;
                        if (!var1) {
                            _fun3217_ip = 206;
                            continue _fun3217
                        }
                    case 189:
                        var9 = var9.Boolean;
                        var3 = var3.once;
                        var1 = var9.bind(var0)(var3);
                    case 206:
                        var2.once = var1;
                        var2.next = var5;
                        var1 = var7.get;
                        var1 = var1.bind(var7)(var8);
                        if (!(var0 === var1)) {
                            _fun3217_ip = 242;
                            continue _fun3217
                        }
                    case 229:
                        var3 = var7.set;
                        var3 = var3.bind(var7)(var8, var2);
                        _fun3217_ip = 295;
                        continue _fun3217;
                    case 242:
                        var7 = var5 != var1;
                        var3 = var1;
                        var1 = null;
                        if (!var7) {
                            _fun3217_ip = 289;
                            continue _fun3217
                        }
                    case 254:
                        var7 = var3.listener;
                        if (!(var7 === var6)) {
                            _fun3217_ip = 274;
                            continue _fun3217
                        }
                    case 264:
                        var7 = var3.listenerType;
                        if (!(var7 !== var4)) {
                            _fun3217_ip = 299;
                            continue _fun3217
                        }
                    case 274:
                        var7 = var3.next;
                        var1 = var3;
                        var3 = var7;
                        if (var5 != var3) {
                            _fun3217_ip = 254;
                            continue _fun3217
                        }
                    case 289:
                        var1.next = var2;
                    case 295:
                        var1 = undefined;
                        return var1;
                    case 299:
                        return var0;
                }
            };
            var6.addEventListener = var9;
            var9 = function(arg0, arg1, arg2) { // Original name: removeEventListener, environment: var8
                _fun3218: for (var _fun3218_ip = 0;;) switch (_fun3218_ip) {
                    case 0:
                        var6 = arg0;
                        var8 = arg1;
                        var1 = arg2;
                        var3 = null;
                        if (!(var3 != var8)) {
                            _fun3218_ip = 139;
                            continue _fun3218
                        }
                    case 18:
                        var5 = _closure1_slot12;
                        var4 = undefined;
                        var2 = this;
                        var5 = var5.bind(var4)(var2);
                        var0 = _closure1_slot11;
                        var0 = var0.bind(var4)(var1);
                        var2 = global;
                        var2 = var2.Boolean;
                        if (var0) {
                            _fun3218_ip = 62;
                            continue _fun3218
                        }
                    case 55:
                        var0 = var2.bind(var4)(var1);
                        _fun3218_ip = 73;
                        continue _fun3218;
                    case 62:
                        var1 = var1.capture;
                        var0 = var2.bind(var4)(var1);
                    case 73:
                        var7 = 2;
                        if (!var0) {
                            _fun3218_ip = 82;
                            continue _fun3218
                        }
                    case 79:
                        var7 = 1;
                    case 82:
                        var0 = var5.get;
                        var0 = var0.bind(var5)(var6);
                        var1 = var3 != var0;
                        var4 = null;
                        if (!var1) {
                            _fun3218_ip = 139;
                            continue _fun3218
                        }
                    case 101:
                        var9 = var0.listener;
                        var2 = var4;
                        var1 = var0;
                        if (!(var9 === var8)) {
                            _fun3218_ip = 127;
                            continue _fun3218
                        }
                    case 117:
                        var9 = var1.listenerType;
                        if (!(var9 !== var7)) {
                            _fun3218_ip = 143;
                            continue _fun3218
                        }
                    case 127:
                        var0 = var1.next;
                        var4 = var1;
                        if (var3 != var0) {
                            _fun3218_ip = 101;
                            continue _fun3218
                        }
                    case 139:
                        var0 = undefined;
                        return var0;
                    case 143:
                        if (!(var3 === var2)) {
                            _fun3218_ip = 186;
                            continue _fun3218
                        }
                    case 147:
                        var0 = var1.next;
                        if (!(var3 === var0)) {
                            _fun3218_ip = 168;
                            continue _fun3218
                        }
                    case 156:
                        var0 = var5.delete;
                        var0 = var0.bind(var5)(var6);
                        _fun3218_ip = 184;
                        continue _fun3218;
                    case 168:
                        var4 = var5.set;
                        var3 = var1.next;
                        var0 = var4.bind(var5)(var6, var3);
                    case 184:
                        _fun3218_ip = 200;
                        continue _fun3218;
                    case 186:
                        var1 = var1.next;
                        var2.next = var1;
                        var0 = var1;
                    case 200:
                        var0 = undefined;
                        return var0;
                }
            };
            var6.removeEventListener = var9;
            var8 = function(arg0) { // Original name: dispatchEvent, environment: var8
                _fun3219: for (var _fun3219_ip = 0;;) switch (_fun3219_ip) {
                    case 0:
                        var6 = arg0;
                        var14 = this;
                        var3 = undefined;
                        var12 = undefined;
                        var0 = undefined;
                        var2 = null;
                        if (!(var2 != var6)) {
                            _fun3219_ip = 539;
                            continue _fun3219
                        }
                    case 21:
                        var1 = var6.type;
                        var4 = 'string';
                        var1 = typeof var1;
                        if (!(var4 === var1)) {
                            _fun3219_ip = 539;
                            continue _fun3219
                        }
                    case 40:
                        var4 = _closure1_slot12;
                        var11 = var4.bind(var3)(var14);
                        var10 = var6.type;
                        var4 = var11.get;
                        var4 = var4.bind(var11)(var10);
                        var12 = var4;
                        if (!(var2 != var4)) {
                            _fun3219_ip = 535;
                            continue _fun3219
                        }
                    case 77:
                        var5 = _closure1_slot8;
                        var9 = global;
                        var7 = var9.Object;
                        var4 = var7.getPrototypeOf;
                        var4 = var4.bind(var7)(var6);
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var21 = var5;
                        var20 = var14;
                        var19 = var6;
                        var4 = new var21[var4](var20, var19, var18);
                        var0 = var4 instanceof Object ? var4 : var5;
                        var4 = var12;
                        var4 = var2 != var4;
                        var8 = 'function';
                        var7 = 'undefined';
                        var6 = 3;
                        var5 = null;
                        if (!var4) {
                            _fun3219_ip = 486;
                            continue _fun3219
                        }
                    case 157:
                        var4 = var12;
                        var4 = var4.once;
                        if (var4) {
                            _fun3219_ip = 174;
                            continue _fun3219
                        }
                    case 169:
                        var15 = var12;
                        _fun3219_ip = 246;
                        continue _fun3219;
                    case 174:
                        if (!(var2 === var5)) {
                            _fun3219_ip = 229;
                            continue _fun3219
                        }
                    case 178:
                        var4 = var12;
                        var4 = var4.next;
                        if (!(var2 === var4)) {
                            _fun3219_ip = 205;
                            continue _fun3219
                        }
                    case 190:
                        var4 = var11.delete;
                        var4 = var4.bind(var11)(var10);
                        var15 = var5;
                        _fun3219_ip = 246;
                        continue _fun3219;
                    case 205:
                        var16 = var11.set;
                        var4 = var12;
                        var4 = var4.next;
                        var4 = var16.bind(var11)(var10, var4);
                        var15 = var5;
                        _fun3219_ip = 246;
                        continue _fun3219;
                    case 229:
                        var4 = var12;
                        var4 = var4.next;
                        var5.next = var4;
                        var15 = var5;
                    case 246:
                        var17 = _closure1_slot10;
                        var16 = var0;
                        var4 = var12;
                        var18 = var4.passive;
                        var4 = null;
                        if (!var18) {
                            _fun3219_ip = 276;
                            continue _fun3219
                        }
                    case 267:
                        var18 = var12;
                        var4 = var18.listener;
                    case 276:
                        var4 = var17.bind(var3)(var16, var4);
                        var4 = var12;
                        var4 = var4.listener;
                        var4 = typeof var4;
                        if (!(var8 !== var4)) {
                            _fun3219_ip = 364;
                            continue _fun3219
                        }
                    case 298:
                        var4 = var12;
                        var4 = var4.listenerType;
                        var4 = var6 !== var4;
                        if (!var4) {
                            _fun3219_ip = 336;
                            continue _fun3219
                        }
                    case 314:
                        var16 = var12;
                        var16 = var16.listener;
                        var16 = var16.handleEvent;
                        var16 = typeof var16;
                        var4 = var8 === var16;
                    case 336:
                        if (!var4) {
                            _fun3219_ip = 450;
                            continue _fun3219
                        }
                    case 339:
                        var4 = var12;
                        var17 = var4.listener;
                        var16 = var17.handleEvent;
                        var4 = var0;
                        var4 = var16.bind(var17)(var4);
                        _fun3219_ip = 450;
                        continue _fun3219;
                    case 364: // try_start_0
                        var4 = var12;
                        var17 = var4.listener;
                        var16 = var17.call;
                        var4 = var0;
                        var4 = var16.bind(var17)(var14, var4);
                    case 387: // try_end0
                        _fun3219_ip = 450;
                        continue _fun3219;
                    case 389: // catch_target0
                        CatchBlockStart(arg_register = 13);
                        var16 = var9.console;
                        var16 = typeof var16;
                        var16 = var7 !== var16;
                        var4 = var16;
                        if (!var16) {
                            _fun3219_ip = 428;
                            continue _fun3219
                        }
                    case 410:
                        var16 = var9.console;
                        var16 = var16.error;
                        var16 = typeof var16;
                        var4 = var8 === var16;
                    case 428:
                        if (!var4) {
                            _fun3219_ip = 450;
                            continue _fun3219
                        }
                    case 431:
                        var17 = var9.console;
                        var16 = var17.error;
                        var4 = var13;
                        var4 = var16.bind(var17)(var4);
                    case 450:
                        var16 = _closure1_slot9;
                        var4 = var0;
                        var4 = var16.bind(var3)(var4);
                        if (var4) {
                            _fun3219_ip = 486;
                            continue _fun3219
                        }
                    case 465:
                        var4 = var12;
                        var4 = var4.next;
                        var12 = var4;
                        var5 = var15;
                        if (var2 != var4) {
                            _fun3219_ip = 157;
                            continue _fun3219
                        }
                    case 486:
                        var4 = _closure1_slot10;
                        var4 = var4.bind(var3)(var0, var2);
                        var1 = _closure1_slot3;
                        var5 = var1.bind(var3)(var0);
                        var4 = 0;
                        var5.eventPhase = var4;
                        var1 = var1.bind(var3)(var0);
                        var1.currentTarget = var2;
                        var0 = var0.defaultPrevented;
                        var0 = !var0;
                        return var0;
                    case 535:
                        var0 = true;
                        return var0;
                    case 539:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var20 = '"event.type" should be a string.';
                        var21 = var1;
                        var0 = new var21[var2](var20, var19);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var6.dispatchEvent = var8;
            var4.prototype = var6;
            var10 = var5.Object;
            var9 = var10.defineProperty;
            var8 = var4.prototype;
            var6 = {
                'value': null,
                'configurable': true,
                'writable': true
            };
            var6.value = var4;
            var6 = var9.bind(var10)(var8, var11, var6);
            var6 = var5.window;
            var6 = typeof var6;
            var6 = var7 !== var6;
            if (!var6) {
                _fun3171_ip = 814;
                continue _fun3171
            }
        case 798:
            var7 = var5.window;
            var7 = var7.EventTarget;
            var6 = var0 !== var7;
        case 814:
            if (!var6) {
                _fun3171_ip = 857;
                continue _fun3171
            }
        case 817:
            var8 = var5.Object;
            var7 = var8.setPrototypeOf;
            var6 = var4.prototype;
            var5 = var5.window;
            var5 = var5.EventTarget;
            var5 = var5.prototype;
            var5 = var7.bind(var8)(var6, var5);
        case 857:
            var3.defineEventAttribute = var2;
            var3.EventTarget = var4;
            var3.default = var4;
            var1.exports = var4;
            var3 = var1.exports;
            var5 = var1.exports;
            var5.default = var4;
            var3.EventTarget = var4;
            var1 = var1.exports;
            var1.defineEventAttribute = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);