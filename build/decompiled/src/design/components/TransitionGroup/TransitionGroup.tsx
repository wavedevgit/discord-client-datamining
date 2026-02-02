// design/components/TransitionGroup/TransitionGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun37164: for (var _fun37164_ip = 0;;) switch (_fun37164_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun37164_ip = 46;
                    continue _fun37164
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun37164_ip = 55;
                    continue _fun37164
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun37164_ip = 343;
                    continue _fun37164
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun37164_ip = 323;
                    continue _fun37164
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun37164_ip = 283;
                    continue _fun37164
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun37164_ip = 270;
                    continue _fun37164
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
                    _fun37164_ip = 163;
                    continue _fun37164
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun37164_ip = 179;
                    continue _fun37164
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun37164_ip = 249;
                    continue _fun37164
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun37164_ip = 249;
                    continue _fun37164
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun37164_ip = 234;
                    continue _fun37164
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun37164_ip = 247;
                    continue _fun37164
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun37164_ip = 265;
                continue _fun37164;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun37164_ip = 283;
                continue _fun37164;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun37164_ip = 323;
                    continue _fun37164
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
                    _fun37164_ip = 330;
                    continue _fun37164
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun37165: for (var _fun37165_ip = 0;;) switch (_fun37165_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun37165_ip = 56;
                                continue _fun37165
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
                            _fun37165_ip = 67;
                            continue _fun37165;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun37166: for (var _fun37166_ip = 0;;) switch (_fun37166_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun37166_ip = 23;
                    continue _fun37166
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun37166_ip = 33;
                    continue _fun37166
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
                    _fun37166_ip = 70;
                    continue _fun37166
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun37166_ip = 55;
                    continue _fun37166
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot7 = var0;
    var3 = function arg0() {
        _fun37168: for (var _fun37168_ip = 0;;) switch (_fun37168_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.items;
                var _closure2_slot0 = var4;
                var12 = var0.renderItem;
                var _closure2_slot1 = var12;
                var13 = var0.getItemKey;
                var _closure2_slot2 = var13;
                var3 = var0.wrapChildren;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun37168_ip = 53;
                    continue _fun37168
                }
            case 46:
                var3 = _closure1_slot7;
            case 53:
                var5 = var0.lazyCleanUpDelay;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var2;
                var _closure2_slot5 = var2;
                var _closure2_slot6 = var2;
                var _closure2_slot7 = var2;
                var7 = _closure1_slot1;
                var6 = var7.useRef;
                var0 = -1;
                var0 = var6.bind(var7)(var0);
                _closure2_slot4 = var0;
                var8 = _closure1_slot1;
                var7 = var8.useLayoutEffect;
                var6 = function() { // Environment: var1
                    _fun37169: for (var _fun37169_ip = 0;;) switch (_fun37169_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.current;
                            var1 = -1;
                            if (!(var1 !== var2)) {
                                _fun37169_ip = 46;
                                continue _fun37169
                            }
                        case 22:
                            var1 = global;
                            var2 = var1.clearTimeout;
                            var0 = _closure2_slot4;
                            var1 = var0.current;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var7.bind(var8)(var6, var0);
                var7 = _closure1_slot1;
                var6 = var7.useState;
                var0 = _closure1_slot4;
                var6 = var6.bind(var7)(var0);
                var0 = _closure1_slot0;
                var9 = 2;
                var0 = var0.bind(var2)(var6, var9);
                var8 = 1;
                var0 = var0[var8];
                _closure2_slot5 = var0;
                var7 = _closure1_slot1;
                var6 = var7.useRef;
                var0 = null;
                var6 = var6.bind(var7)(var0);
                _closure2_slot6 = var6;
                var11 = _closure1_slot1;
                var7 = var11.useMemo;
                var6 = new Array(4);
                var6[0] = var4;
                var6[1] = var13;
                var6[2] = var12;
                var6[3] = var5;
                var5 = function() { // Environment: var1
                    _fun37170: for (var _fun37170_ip = 0;;) switch (_fun37170_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Set;
                            var1 = _closure2_slot6;
                            var4 = var1.current;
                            var6 = null;
                            var2 = var6 == var4;
                            var5 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun37170_ip = 44;
                                continue _fun37170
                            }
                        case 35:
                            var2 = var4.keys;
                            var1 = var2.bind(var4)();
                        case 44:
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var18 = var2;
                            var17 = var1;
                            var1 = new var18[var3](var17, var16);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var _closure3_slot0 = var2;
                            var3 = var0.Map;
                            var0 = _closure2_slot6;
                            var17 = var0.current;
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var18 = var1;
                            var0 = new var18[var3](var17, var16);
                            var0 = var0 instanceof Object ? var0 : var1;
                            var _closure3_slot1 = var0;
                            var9 = function() {
                                _fun37171: for (var _fun37171_ip = 0;;) switch (_fun37171_ip) {
                                    case 0:
                                        var5 = _closure2_slot2;
                                        var3 = _closure3_slot2;
                                        var0 = undefined;
                                        var3 = var5.bind(var0)(var3);
                                        var _closure4_slot0 = var3;
                                        var6 = _closure3_slot1;
                                        var5 = var6.get;
                                        var6 = var5.bind(var6)(var3);
                                        var7 = null;
                                        if (!(var7 != var6)) {
                                            _fun37171_ip = 209;
                                            continue _fun37171
                                        }
                                    case 50:
                                        var8 = var6.item;
                                        var5 = _closure3_slot2;
                                        if (!(var8 === var5)) {
                                            _fun37171_ip = 105;
                                            continue _fun37171
                                        }
                                    case 63:
                                        var8 = var6.renderItem;
                                        var5 = _closure2_slot1;
                                        if (!(var8 === var5)) {
                                            _fun37171_ip = 105;
                                            continue _fun37171
                                        }
                                    case 77:
                                        var9 = var6.state;
                                        var5 = _closure1_slot3;
                                        var8 = var5.YEETED;
                                        var5 = var6;
                                        if (!(var9 === var8)) {
                                            _fun37171_ip = 309;
                                            continue _fun37171
                                        }
                                    case 105:
                                        var9 = var6.cleanUp;
                                        var11 = var6.state;
                                        var10 = _closure1_slot3;
                                        var10 = var10.YEETED;
                                        if (!(var11 !== var10)) {
                                            _fun37171_ip = 140;
                                            continue _fun37171
                                        }
                                    case 133:
                                        var10 = var6.state;
                                        _fun37171_ip = 150;
                                        continue _fun37171;
                                    case 140:
                                        var8 = _closure1_slot3;
                                        var10 = var8.ENTERED;
                                    case 150:
                                        var8 = _closure2_slot1;
                                        var15 = _closure3_slot2;
                                        var13 = var6.cleanUp;
                                        var17 = undefined;
                                        var16 = var3;
                                        var14 = var10;
                                        var11 = var17[var8](var16, var15, var14, var13, var12);
                                        var6 = {};
                                        var12 = _closure3_slot2;
                                        var6.item = var12;
                                        var6.children = var11;
                                        var6.state = var10;
                                        var6.cleanUp = var9;
                                        var6.renderItem = var8;
                                        var5 = var6;
                                        _fun37171_ip = 309;
                                        continue _fun37171;
                                    case 209:
                                        var6 = _closure2_slot6;
                                        var6 = var6.current;
                                        if (!(var7 == var6)) {
                                            _fun37171_ip = 237;
                                            continue _fun37171
                                        }
                                    case 222:
                                        var6 = _closure1_slot3;
                                        var7 = var6.MOUNTED;
                                        _fun37171_ip = 250;
                                        continue _fun37171;
                                    case 237:
                                        var6 = _closure1_slot3;
                                        var7 = var6.ENTERED;
                                    case 250:
                                        var6 = function() {
                                            _fun37172: for (var _fun37172_ip = 0;;) switch (_fun37172_ip) {
                                                case 0:
                                                    var0 = _closure2_slot6;
                                                    var6 = var0.current;
                                                    var3 = null;
                                                    var4 = var3 == var6;
                                                    var0 = undefined;
                                                    var2 = undefined;
                                                    if (var4) {
                                                        _fun37172_ip = 42;
                                                        continue _fun37172
                                                    }
                                                case 25:
                                                    var5 = var6.get;
                                                    var4 = _closure4_slot0;
                                                    var2 = var5.bind(var6)(var4);
                                                case 42:
                                                    if (!(var3 != var2)) {
                                                        _fun37172_ip = 177;
                                                        continue _fun37172
                                                    }
                                                case 49:
                                                    var4 = var2.state;
                                                    var2 = _closure1_slot3;
                                                    var2 = var2.YEETED;
                                                    if (!(var4 === var2)) {
                                                        _fun37172_ip = 177;
                                                        continue _fun37172
                                                    }
                                                case 71:
                                                    var2 = _closure2_slot6;
                                                    var5 = var2.current;
                                                    if (!(var3 != var5)) {
                                                        _fun37172_ip = 101;
                                                        continue _fun37172
                                                    }
                                                case 84:
                                                    var4 = var5.delete;
                                                    var2 = _closure4_slot0;
                                                    var2 = var4.bind(var5)(var2);
                                                case 101:
                                                    var2 = _closure2_slot3;
                                                    if (!(var3 == var2)) {
                                                        _fun37172_ip = 122;
                                                        continue _fun37172
                                                    }
                                                case 109:
                                                    var3 = _closure2_slot5;
                                                    var2 = {};
                                                    var2 = var3.bind(var0)(var2);
                                                    _fun37172_ip = 177;
                                                    continue _fun37172;
                                                case 122:
                                                    var3 = global;
                                                    var4 = var3.clearTimeout;
                                                    var2 = _closure2_slot4;
                                                    var2 = var2.current;
                                                    var2 = var4.bind(var0)(var2);
                                                    var2 = _closure2_slot4;
                                                    var4 = var3.setTimeout;
                                                    var3 = _closure2_slot3;
                                                    var1 = function() { // Environment: var1
                                                        var2 = _closure2_slot5;
                                                        var1 = undefined;
                                                        var0 = {};
                                                        var0 = var2.bind(var1)(var0);
                                                        return var0;
                                                    };
                                                    var1 = var4.bind(var0)(var1, var3);
                                                    var2.current = var1;
                                                case 177:
                                                    return var0;
                                            }
                                        };
                                        var4 = _closure2_slot1;
                                        var15 = _closure3_slot2;
                                        var17 = undefined;
                                        var16 = var3;
                                        var14 = var7;
                                        var13 = var6;
                                        var8 = var17[var4](var16, var15, var14, var13, var12);
                                        var2 = {};
                                        var9 = _closure3_slot2;
                                        var2.item = var9;
                                        var2.children = var8;
                                        var2.state = var7;
                                        var2.cleanUp = var6;
                                        var2.renderItem = var4;
                                        var5 = var2;
                                    case 309:
                                        var4 = _closure3_slot1;
                                        var2 = var4.set;
                                        var2 = var2.bind(var4)(var3, var5);
                                        var2 = _closure3_slot0;
                                        var1 = var2.delete;
                                        var1 = var1.bind(var2)(var3);
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot5;
                            var1 = _closure2_slot0;
                            var8 = var3.bind(var5)(var1);
                            var3 = var8.bind(var5)();
                            var1 = var3.done;
                            if (var1) {
                                _fun37170_ip = 171;
                                continue _fun37170
                            }
                        case 143:
                            var1 = var3.value;
                            var _closure3_slot2 = var1;
                            var1 = var9.bind(var5)();
                            var11 = var8.bind(var5)();
                            var1 = var11.done;
                            var3 = var11;
                            if (!var1) {
                                _fun37170_ip = 143;
                                continue _fun37170
                            }
                        case 171:
                            var1 = _closure1_slot5;
                            var3 = var1.bind(var5)(var2);
                            var2 = var3.bind(var5)();
                            var1 = var2.done;
                            if (var1) {
                                _fun37170_ip = 392;
                                continue _fun37170
                            }
                        case 195:
                            var9 = var2.value;
                            var1 = var0.get;
                            var11 = var1.bind(var0)(var9);
                            if (!(var6 != var11)) {
                                _fun37170_ip = 374;
                                continue _fun37170
                            }
                        case 217:
                            var8 = var11.state;
                            var1 = _closure1_slot3;
                            var1 = var1.YEETED;
                            if (!(var8 === var1)) {
                                _fun37170_ip = 263;
                                continue _fun37170
                            }
                        case 236:
                            var8 = var11.renderItem;
                            var1 = _closure2_slot1;
                            if (!(var8 === var1)) {
                                _fun37170_ip = 263;
                                continue _fun37170
                            }
                        case 250:
                            var1 = var0.set;
                            var1 = var1.bind(var0)(var9, var11);
                            _fun37170_ip = 374;
                            continue _fun37170;
                        case 263:
                            var1 = var11.item;
                            var10 = var11.cleanUp;
                            var8 = {};
                            var8.item = var1;
                            var1 = _closure2_slot1;
                            var16 = var11.item;
                            var12 = _closure1_slot3;
                            var15 = var12.YEETED;
                            var14 = var11.cleanUp;
                            var18 = undefined;
                            var17 = var9;
                            var11 = var18[var1](var17, var16, var15, var14, var13);
                            var8.children = var11;
                            var11 = _closure1_slot3;
                            var11 = var11.YEETED;
                            var8.state = var11;
                            var8.cleanUp = var10;
                            var8.renderItem = var1;
                            var1 = var8.children;
                            if (!(var6 == var1)) {
                                _fun37170_ip = 363;
                                continue _fun37170
                            }
                        case 351:
                            var1 = var0.delete;
                            var1 = var1.bind(var0)(var9);
                            _fun37170_ip = 374;
                            continue _fun37170;
                        case 363:
                            var1 = var0.set;
                            var1 = var1.bind(var0)(var9, var8);
                        case 374:
                            var8 = var3.bind(var5)();
                            var1 = var8.done;
                            var2 = var8;
                            if (!var1) {
                                _fun37170_ip = 195;
                                continue _fun37170
                            }
                        case 392:
                            return var0;
                    }
                };
                var6 = var7.bind(var11)(var5, var6);
                _closure2_slot7 = var6;
                var11 = _closure1_slot1;
                var7 = var11.useInsertionEffect;
                var5 = new Array(1);
                var5[0] = var6;
                var1 = function() { // Environment: var1
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot7;
                    var1.current = var0;
                    var0 = function() { // Environment: var0
                        _fun37175: for (var _fun37175_ip = 0;;) switch (_fun37175_ip) {
                            case 0:
                                var0 = _closure2_slot6;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun37175_ip = 33;
                                    continue _fun37175
                                }
                            case 23:
                                var1 = var2.clear;
                                var0 = var1.bind(var2)();
                            case 33:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var7.bind(var11)(var1, var5);
                var1 = new Array(0);
                var5 = _closure1_slot5;
                var7 = var5.bind(var2)(var6);
                var6 = var7.bind(var2)();
                var5 = var6.done;
                if (var5) {
                    _fun37168_ip = 340;
                    continue _fun37168
                }
            case 291:
                var11 = var6.value;
                var5 = _closure1_slot0;
                var5 = var5.bind(var2)(var11, var9);
                var5 = var5[var8];
                var11 = var1.push;
                var5 = var5.children;
                var5 = var11.bind(var1)(var5);
                var11 = var7.bind(var2)();
                var5 = var11.done;
                var6 = var11;
                if (!var5) {
                    _fun37168_ip = 291;
                    continue _fun37168
                }
            case 340:
                var6 = var1.length;
                var5 = 0;
                var5 = var6 > var5;
                var0 = null;
                if (!var5) {
                    _fun37168_ip = 362;
                    continue _fun37168
                }
            case 356:
                var0 = var3.bind(var2)(var1, var4);
            case 362:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function() {
        var0 = 'key';
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var10 = 0;
    var5 = var7[var10];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot0 = var4;
    var9 = 1;
    var5 = var7[var9];
    var4 = arg3;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot1 = var4;
    var8 = 2;
    var4 = var7[var8];
    var4 = var6.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = {};
    var4.MOUNTED = var10;
    var5 = 'MOUNTED';
    var4[var10] = var5;
    var4.ENTERED = var9;
    var5 = 'ENTERED';
    var4[var9] = var5;
    var4.YEETED = var8;
    var5 = 'YEETED';
    var4[var8] = var5;
    var _closure1_slot3 = var4;
    var5 = {};
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/TransitionGroup/TransitionGroup.tsx';
    var5 = var6.bind(var7)(var5);
    var2.TransitionStates = var4;
    var2.TransitionGroup = var3;
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.item;
        var _closure2_slot0 = var6;
        var4 = var0.renderItem;
        var5 = _closure1_slot1;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() { // Environment: var1
            _fun37178: for (var _fun37178_ip = 0;;) switch (_fun37178_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun37178_ip = 19;
                        continue _fun37178
                    }
                case 13:
                    var0 = new Array(0);
                    _fun37178_ip = 34;
                    continue _fun37178;
                case 19:
                    var2 = _closure2_slot0;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot2;
        var2 = _closure1_slot8;
        var1 = {};
        var1.items = var5;
        var1.renderItem = var4;
        var0 = _closure1_slot9;
        var1.getItemKey = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.TransitionItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 2]);