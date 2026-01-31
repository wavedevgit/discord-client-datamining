// ../discord_common/js/packages/flux/Store.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = new Array(0);
    var _closure1_slot6 = var6;
    var6 = false;
    var _closure1_slot7 = var6;
    var7 = var3.Promise;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() {
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var1 = null;
            _closure1_slot3 = var1;
            return var0;
        };
        var _closure1_slot3 = var0;
        var0 = undefined;
        return var0;
    };
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot5;
        var3 = function arg0, arg1, arg2() {
            _fun6858: for (var _fun6858_ip = 0;;) switch (_fun6858_ip) {
                case 0:
                    var5 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var6.bind(var0)(var2, var4);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 2;
                    var8 = var7[var4];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.ChangeListeners;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {
                        constructor: {
                            value: var8
                        }
                    });
                    var12 = var9;
                    var8 = new var12[var8](var11);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var2._changeCallbacks = var8;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ChangeListeners;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = var6;
                    var4 = new var12[var4](var11);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var2._reactChangeCallbacks = var4;
                    var4 = new Array(0);
                    var2._syncWiths = var4;
                    var4 = false;
                    var2._isInitialized = var4;
                    var3 = function(arg0) { // Environment: var3
                        _fun6859: for (var _fun6859_ip = 0;;) switch (_fun6859_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0._changeCallbacks;
                                var0 = var1.hasAny;
                                var0 = var0.bind(var1)();
                                if (var0) {
                                    _fun6859_ip = 46;
                                    continue _fun6859
                                }
                            case 26:
                                var1 = _closure3_slot0;
                                var2 = var1._reactChangeCallbacks;
                                var1 = var2.hasAny;
                                var0 = var1.bind(var2)();
                            case 46:
                                if (var0) {
                                    _fun6859_ip = 70;
                                    continue _fun6859
                                }
                            case 49:
                                var1 = _closure3_slot0;
                                var1 = var1._syncWiths;
                                var2 = var1.length;
                                var1 = 0;
                                var0 = var2 > var1;
                            case 70:
                                if (!var0) {
                                    _fun6859_ip = 208;
                                    continue _fun6859
                                }
                            case 76:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var3 = 3;
                                var6 = var1[var3];
                                var2 = undefined;
                                var8 = var5.bind(var2)(var6);
                                var7 = var8.markChanged;
                                var6 = _closure3_slot0;
                                var6 = var7.bind(var8)(var6);
                                var1 = var1[var3];
                                var5 = var5.bind(var2)(var1);
                                var1 = var5.getIsPaused;
                                var1 = var1.bind(var5)();
                                if (!var1) {
                                    _fun6859_ip = 154;
                                    continue _fun6859
                                }
                            case 138:
                                var5 = _closure3_slot0;
                                var6 = var5._mustEmitChanges;
                                var5 = null;
                                var1 = var5 != var6;
                            case 154:
                                if (!var1) {
                                    _fun6859_ip = 175;
                                    continue _fun6859
                                }
                            case 157:
                                var6 = _closure3_slot0;
                                var5 = var6._mustEmitChanges;
                                var4 = arg0;
                                var1 = var5.bind(var6)(var4);
                            case 175:
                                if (!var1) {
                                    _fun6859_ip = 208;
                                    continue _fun6859
                                }
                            case 178:
                                var1 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var0 = var0[var3];
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.resume;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 208:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.doEmitChanges = var3;
                    var3 = var2._changeCallbacks;
                    var3 = var3.add;
                    var2.addChangeListener = var3;
                    var3 = var2._changeCallbacks;
                    var3 = var3.addConditional;
                    var2.addConditionalChangeListener = var3;
                    var3 = var2._changeCallbacks;
                    var3 = var3.remove;
                    var2.removeChangeListener = var3;
                    var3 = var2._reactChangeCallbacks;
                    var3 = var3.add;
                    var2.addReactChangeListener = var3;
                    var3 = var2._reactChangeCallbacks;
                    var3 = var3.remove;
                    var2.removeReactChangeListener = var3;
                    var3 = arg0;
                    var2._dispatcher = var3;
                    var4 = var2._dispatcher;
                    var3 = var4.createToken;
                    var3 = var3.bind(var4)();
                    var2._dispatchToken = var3;
                    var4 = var2.registerActionHandlers;
                    var3 = null;
                    if (!(var3 == var5)) {
                        _fun6858_ip = 289;
                        continue _fun6858
                    }
                case 287:
                    var5 = {};
                case 289:
                    var3 = arg2;
                    var3 = var4.bind(var2)(var5, var3);
                    var4 = _closure1_slot6;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var2);
                    var1 = _closure1_slot7;
                    if (!var1) {
                        _fun6858_ip = 329;
                        continue _fun6858
                    }
                case 319:
                    var1 = var2.initializeIfNeeded;
                    var1 = var1.bind(var2)();
                case 329:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var1 = 'registerActionHandlers';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var0 = this;
            var6 = var0._dispatcher;
            var5 = var6.register;
            var1 = var0.getName;
            var11 = var1.bind(var0)();
            var9 = var0.doEmitChanges;
            var7 = var0._dispatchToken;
            var10 = arg0;
            var8 = arg1;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2 = new Array(9);
        var2[0] = var0;
        var0 = {};
        var1 = 'getName';
        var0.key = var1;
        var1 = function() {
            _fun6861: for (var _fun6861_ip = 0;;) switch (_fun6861_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.constructor;
                    var0 = var0.displayName;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun6861_ip = 29;
                        continue _fun6861
                    }
                case 19:
                    var1 = var1.constructor;
                    var0 = var1.name;
                case 29:
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'initializeIfNeeded';
        var0.key = var1;
        var1 = function() {
            _fun6862: for (var _fun6862_ip = 0;;) switch (_fun6862_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isInitialized;
                    if (var0) {
                        _fun6862_ip = 138;
                        continue _fun6862
                    }
                case 15:
                    var0 = global;
                    var3 = var0.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var3 = var1.initialize;
                    var3 = var3.bind(var1)();
                    var3 = true;
                    var1._isInitialized = var3;
                    var3 = var0.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var4 = var0 - var2;
                    var0 = 5;
                    if (!(var4 > var0)) {
                        _fun6862_ip = 138;
                        continue _fun6862
                    }
                case 76:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.mark;
                    var0 = var1.getName;
                    var1 = var0.bind(var1)();
                    var0 = '.initialize()';
                    var1 = var1 + var0;
                    var0 = '🦥';
                    var0 = var2.bind(var3)(var0, var1, var4);
                case 138:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var2[3] = var0;
        var0 = {};
        var6 = 'syncWith';
        var0.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun6864: for (var _fun6864_ip = 0;;) switch (_fun6864_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg2;
                    var6 = this;
                    var _closure3_slot0 = var6;
                    var3 = arg1;
                    var _closure3_slot1 = var3;
                    var5 = var6.waitFor;
                    var3 = new Array(0);
                    var4 = 0;
                    var10 = var3;
                    var9 = var2;
                    var8 = 0;
                    var7 = arraySpread(var10, var9, var8);
                    var10 = var5;
                    var9 = var3;
                    var8 = var6;
                    var3 = apply(var10, var9, var8);
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun6864_ip = 82;
                        continue _fun6864
                    }
                case 65:
                    var6 = var2.forEach;
                    var5 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0._syncWiths;
                        var1 = var2.push;
                        var0 = {};
                        var4 = _closure3_slot1;
                        var0.func = var4;
                        var3 = _closure3_slot0;
                        var0.store = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var6.bind(var2)(var5);
                    _fun6864_ip = 139;
                    continue _fun6864;
                case 82:
                    var _closure3_slot2 = var4;
                    var5 = function() {
                        _fun6865: for (var _fun6865_ip = 0;;) switch (_fun6865_ip) {
                            case 0:
                                var5 = _closure3_slot2;
                                var6 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var4 = 3;
                                var3 = var0[var4];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var3);
                                var3 = var6.getChangeSentinel;
                                var3 = var3.bind(var6)();
                                if (!(var5 !== var3)) {
                                    _fun6865_ip = 105;
                                    continue _fun6865
                                }
                            case 46:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getChangeSentinel;
                                var2 = var2.bind(var3)();
                                _closure3_slot2 = var2;
                                var2 = _closure3_slot1;
                                var3 = var2.bind(var0)();
                                var2 = false;
                                if (!(var2 !== var3)) {
                                    _fun6865_ip = 105;
                                    continue _fun6865
                                }
                            case 91:
                                var2 = _closure3_slot0;
                                var1 = var2.emitChange;
                                var1 = var1.bind(var2)();
                            case 105:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var3 = var3 != var1;
                    var4 = 0;
                    if (!var3) {
                        _fun6864_ip = 107;
                        continue _fun6864
                    }
                case 104:
                    var4 = var1;
                case 107:
                    var3 = function arg0, arg1() {
                        _fun6866: for (var _fun6866_ip = 0;;) switch (_fun6866_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var0 = null;
                                var _closure4_slot2 = var0;
                                var0 = 0;
                                if (!(var0 !== var2)) {
                                    _fun6866_ip = 35;
                                    continue _fun6866
                                }
                            case 28:
                                var0 = function() { // Environment: var1
                                    _fun6868: for (var _fun6868_ip = 0;;) switch (_fun6868_ip) {
                                        case 0:
                                            var2 = _closure4_slot2;
                                            var0 = null;
                                            if (!(var0 == var2)) {
                                                _fun6868_ip = 44;
                                                continue _fun6868
                                            }
                                        case 13:
                                            var0 = global;
                                            var4 = var0.setTimeout;
                                            var3 = _closure4_slot0;
                                            var2 = undefined;
                                            var0 = function() { // Environment: var0
                                                _fun6869: for (var _fun6869_ip = 0;;) switch (_fun6869_ip) {
                                                    case 0: // try_start_0
                                                        var1 = _closure4_slot1;
                                                        var0 = undefined;
                                                        var1 = var1.bind(var0)();
                                                    case 13: // try_end0
                                                        var1 = null;
                                                        _closure4_slot2 = var1;
                                                        return var0;
                                                    case 21: // catch_target0
                                                        CatchBlockStart(arg_register = 0);
                                                        var1 = null;
                                                        _closure4_slot2 = var1;
                                                        throw var0;
                                                }
                                            };
                                            var0 = var4.bind(var2)(var0, var3);
                                            _closure4_slot2 = var0;
                                        case 44:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                _fun6866_ip = 40;
                                continue _fun6866;
                            case 35:
                                var0 = function() { // Environment: var1
                                    var1 = global;
                                    var4 = var1.clearImmediate;
                                    var3 = _closure4_slot2;
                                    var0 = undefined;
                                    var3 = var4.bind(var0)(var3);
                                    var3 = var1.setImmediate;
                                    var1 = _closure4_slot1;
                                    var1 = var3.bind(var0)(var1);
                                    _closure4_slot2 = var1;
                                    return var0;
                                };
                            case 40:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var5);
                    _closure3_slot3 = var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.addChangeListener;
                        var0 = _closure3_slot3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 139:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var6;
        var2[4] = var0;
        var0 = {};
        var6 = 'waitFor';
        var0.key = var6;
        var6 = function arg0() {
            var4 = this;
            var _closure3_slot0 = var4;
            var7 = 0;
            var3 = copyRestArgs(var7);
            var2 = var3.map;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun6873: for (var _fun6873_ip = 0;;) switch (_fun6873_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var6 = 5;
                        var0 = var0[var6];
                        var5 = undefined;
                        var8 = var1.bind(var5)(var0);
                        var0 = null;
                        var7 = var0 != var2;
                        var9 = _closure3_slot0;
                        var4 = var9.getName;
                        var12 = var4.bind(var9)();
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var11 = var4.concat;
                        var10 = 'Store.waitFor(...) called with null Store at index ';
                        var9 = arg1;
                        var4 = ' for store ';
                        var4 = var11.bind(var10)(var9, var4, var12);
                        var4 = var8.bind(var5)(var7, var4);
                        var4 = var2._dispatcher;
                        var4 = var0 != var4;
                        if (!var4) {
                            _fun6873_ip = 164;
                            continue _fun6873
                        }
                    case 105:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var4 = var4.bind(var5)(var3);
                        var3 = var2._dispatcher;
                        var1 = _closure3_slot0;
                        var1 = var1._dispatcher;
                        var3 = var3 === var1;
                        var1 = 'Stores belong to two separate dispatchers.';
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = var2.getDispatchToken;
                        var0 = var1.bind(var2)();
                    case 164:
                        return var0;
                }
            };
            var5 = var2.bind(var3)(var1);
            var3 = var4._dispatcher;
            var2 = var3.addDependencies;
            var1 = var4.getDispatchToken;
            var1 = var1.bind(var4)();
            var4 = var5.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var4.bind(var5)(var0);
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var2[5] = var0;
        var0 = {};
        var6 = 'emitChange';
        var0.key = var6;
        var6 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.markChanged;
            var1 = this;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var6;
        var2[6] = var0;
        var0 = {};
        var6 = 'getDispatchToken';
        var0.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0._dispatchToken;
            return var0;
        };
        var0.value = var6;
        var2[7] = var0;
        var0 = {};
        var6 = 'mustEmitChanges';
        var0.key = var6;
        var6 = function() {
            _fun6877: for (var _fun6877_ip = 0;;) switch (_fun6877_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun6877_ip = 16;
                        continue _fun6877
                    }
                case 9:
                    var2 = function() {
                        var0 = true;
                        return var0;
                    };
                case 16:
                    var1 = this;
                    var1._mustEmitChanges = var2;
                    return var0;
            }
        };
        var0.value = var6;
        var2[8] = var0;
        var0 = {};
        var0.key = var1;
        var1 = function() {
            _fun6879: for (var _fun6879_ip = 0;;) switch (_fun6879_ip) {
                case 0:
                    var1 = true;
                    _closure1_slot7 = var1;
                    var3 = _closure1_slot6;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.initializeIfNeeded;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot3;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun6879_ip = 50;
                        continue _fun6879
                    }
                case 40:
                    var1 = _closure1_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var6 = 'destroy';
        var0.key = var6;
        var6 = function() {
            var2 = _closure1_slot6;
            var1 = 0;
            var2.length = var1;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'getAll';
        var0.key = var6;
        var5 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var1.initialized = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/Store.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Store = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 569, 570, 20, 44, 2]);