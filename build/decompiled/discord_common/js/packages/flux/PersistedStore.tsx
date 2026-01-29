// ../discord_common/js/packages/flux/PersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var1
        _fun6810: for (var _fun6810_ip = 0;;) switch (_fun6810_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot4;
                var3 = _closure1_slot9;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun6810_ip = 44;
                    continue _fun6810
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun6810_ip = 97;
                    continue _fun6810
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun6810_ip = 97;
                    continue _fun6810
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 97:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun6812: for (var _fun6812_ip = 0;;) switch (_fun6812_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot9;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot8;
                var0 = _closure1_slot17;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun6812_ip = 51;
                    continue _fun6812
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun6812_ip = 92;
                continue _fun6812;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun6812_ip = 71;
                    continue _fun6812
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot9;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun6813: for (var _fun6813_ip = 0;;) switch (_fun6813_ip) {
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
                _fun6813_ip = 74;
                continue _fun6813;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = ['_state', '_version'];
    var _closure1_slot3 = var0;
    var5 = global;
    var9 = var5.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var3 = 0;
    var4 = var7[var3];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var8 = var4.Store;
    var _closure1_slot11 = var8;
    var4 = {};
    var4._state = var0;
    var4._version = var0;
    var _closure1_slot12 = var4;
    var4 = null;
    var _closure1_slot13 = var4;
    var4 = function(arg0) { // Environment: var1
        var4 = function(arg0, arg1, arg2) { // Original name: PersistedStore, environment: var6
            _fun6817: for (var _fun6817_ip = 0;;) switch (_fun6817_ip) {
                case 0:
                    var5 = this;
                    var2 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var6 = undefined;
                    var2 = var2.bind(var6)(var5, var4);
                    var3 = _closure1_slot16;
                    var2 = new Array(3);
                    var7 = arg0;
                    var2[0] = var7;
                    var7 = arg1;
                    var2[1] = var7;
                    var7 = arg2;
                    var2[2] = var7;
                    var3 = var3.bind(var6)(var5, var4, var2);
                    var _closure3_slot0 = var3;
                    var2 = var3.getClass;
                    var2 = var2.bind(var3)();
                    var4 = var2.migrations;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = 0;
                    if (var4) {
                        _fun6817_ip = 115;
                        continue _fun6817
                    }
                case 94:
                    var4 = var3.getClass;
                    var4 = var4.bind(var3)();
                    var4 = var4.migrations;
                    var2 = var4.length;
                case 115:
                    var3._version = var2;
                    var2 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.getClass;
                        var0 = var0.bind(var1)();
                        var2 = var0.persistKey;
                        var0 = var1.persist;
                        var0 = var0.bind(var1)();
                        var0 = _closure2_slot0;
                        var3 = var0._writePromises;
                        var1 = var3.delete;
                        var1 = var1.bind(var3)(var2);
                        var1 = var0._writeResolvers;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                        var1 = arg0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var3.callback = var2;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var5 = var2.bind(var6)(var1);
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var4 = var1.throttleDelay;
                    var2 = {};
                    var1 = false;
                    var2.leading = var1;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.callback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var5.bind(var6)(var1, var4, var2);
                    var3.throttledCallback = var1;
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var1 = var1.persistKey;
                    var2 = 'string';
                    var1 = typeof var1;
                    if (!(var2 === var1)) {
                        _fun6817_ip = 417;
                        continue _fun6817
                    }
                case 225:
                    var1 = var3.initialize;
                    var2 = 'function';
                    var1 = typeof var1;
                    if (!(var2 === var1)) {
                        _fun6817_ip = 345;
                        continue _fun6817
                    }
                case 242:
                    var1 = var3.getState;
                    var1 = typeof var1;
                    if (!(var2 === var1)) {
                        _fun6817_ip = 273;
                        continue _fun6817
                    }
                case 255:
                    var1 = var3.addChangeListener;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.asyncPersist;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var1.bind(var3)(var0);
                    return var3;
                case 273:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var5 = var1.name;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var1 = '';
                    var0 = ' initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.';
                    var10 = var4.bind(var1)(var5, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 345:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var5 = var1.name;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var1 = '';
                    var0 = ' initialized without an `initialize` method. Add one that accepts the initial cached state.';
                    var10 = var4.bind(var1)(var5, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 417:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = var3.getClass;
                    var1 = var1.bind(var3)();
                    var4 = var1.name;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = '';
                    var0 = ' initialized without a `persistKey`. Add one so we know where to save your stuff!';
                    var10 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot10;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot7;
        var0 = {};
        var1 = 'getClass';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.constructor;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'initializeFromState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun6822: for (var _fun6822_ip = 0;;) switch (_fun6822_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.initialize;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    if (!var0) {
                        _fun6822_ip = 30;
                        continue _fun6822
                    }
                case 20:
                    var0 = var1.asyncPersist;
                    var0 = var0.bind(var1)();
                case 30:
                    var0 = var1._isInitialized;
                    if (var0) {
                        _fun6822_ip = 88;
                        continue _fun6822
                    }
                case 39:
                    var0 = _closure2_slot0;
                    var3 = var0.allPersistKeys;
                    var2 = var3.add;
                    var0 = var1.getClass;
                    var0 = var0.bind(var1)();
                    var0 = var0.persistKey;
                    var0 = var2.bind(var3)(var0);
                    var0 = true;
                    var1._isInitialized = var0;
                    _fun6822_ip = 98;
                    continue _fun6822;
                case 88:
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                case 98:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'initializeIfNeeded';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun6823: for (var _fun6823_ip = 0;;) switch (_fun6823_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isInitialized;
                    if (var0) {
                        _fun6823_ip = 259;
                        continue _fun6823
                    }
                case 15:
                    var0 = global;
                    var3 = var0.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var6 = _closure2_slot0;
                    var5 = var6.allPersistKeys;
                    var4 = var5.add;
                    var3 = var1.getClass;
                    var3 = var3.bind(var1)();
                    var3 = var3.persistKey;
                    var3 = var4.bind(var5)(var3);
                    var5 = var6.migrateAndReadStoreState;
                    var3 = var1.getClass;
                    var3 = var3.bind(var1)();
                    var4 = var3.persistKey;
                    var3 = var1.getClass;
                    var3 = var3.bind(var1)();
                    var3 = var3.migrations;
                    var3 = var5.bind(var6)(var4, var3);
                    var5 = var3.state;
                    var3 = var3.requiresPersist;
                    var4 = var1.initialize;
                    var4 = var4.bind(var1)(var5);
                    if (!var4) {
                        _fun6823_ip = 150;
                        continue _fun6823
                    }
                case 140:
                    var4 = var1.asyncPersist;
                    var4 = var4.bind(var1)();
                case 150:
                    if (!var3) {
                        _fun6823_ip = 163;
                        continue _fun6823
                    }
                case 153:
                    var3 = var1.asyncPersist;
                    var3 = var3.bind(var1)();
                case 163:
                    var3 = true;
                    var1._isInitialized = var3;
                    var3 = var0.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var4 = var0 - var2;
                    var0 = 5;
                    if (!(var4 > var0)) {
                        _fun6823_ip = 259;
                        continue _fun6823
                    }
                case 197:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
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
                case 259:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'asyncPersist';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun6824: for (var _fun6824_ip = 0;;) switch (_fun6824_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = var2.getClass;
                    var2 = var0.bind(var2)();
                    var4 = var2.persistKey;
                    var _closure3_slot1 = var4;
                    var0 = var2.disableWrite;
                    var2 = var2.throttleDelay;
                    var _closure3_slot2 = var2;
                    var3 = _closure2_slot0;
                    var3 = var3.disableWrites;
                    if (var3) {
                        _fun6824_ip = 149;
                        continue _fun6824
                    }
                case 61:
                    if (var0) {
                        _fun6824_ip = 149;
                        continue _fun6824
                    }
                case 64:
                    var0 = _closure2_slot0;
                    var3 = var0._writePromises;
                    var0 = var3.get;
                    var0 = var0.bind(var3)(var4);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun6824_ip = 147;
                        continue _fun6824
                    }
                case 90:
                    var3 = global;
                    var5 = var3.Promise;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = function(arg0) { // Environment: var1
                        _fun6825: for (var _fun6825_ip = 0;;) switch (_fun6825_ip) {
                            case 0:
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var4 = _closure3_slot2;
                                var3 = 0;
                                if (!(!(var4 > var3))) {
                                    _fun6825_ip = 29;
                                    continue _fun6825
                                }
                            case 22:
                                var7 = function() { // Environment: var2
                                    var2 = _closure3_slot0;
                                    var1 = var2.callback;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                _fun6825_ip = 34;
                                continue _fun6825;
                            case 29:
                                var7 = function() { // Environment: var2
                                    var2 = _closure3_slot0;
                                    var1 = var2.throttledCallback;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                            case 34:
                                var2 = _closure2_slot0;
                                var4 = var2._writeResolvers;
                                var3 = var4.set;
                                var2 = _closure3_slot1;
                                var1 = new Array(2);
                                var1[0] = var0;
                                var0 = global;
                                var6 = var0.requestIdleCallback;
                                var5 = {};
                                var0 = 500;
                                var5.timeout = var0;
                                var0 = undefined;
                                var5 = var6.bind(var0)(var7, var5);
                                var1[1] = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var8 = var3;
                    var1 = new var8[var5](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2 = _closure2_slot0;
                    var3 = var2._writePromises;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    var0 = var1;
                case 147:
                    return var0;
                case 149:
                    var0 = global;
                    var2 = var0.Promise;
                    var1 = var2.resolve;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'persist';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.getClass;
            var1 = var1.bind(var0)();
            var4 = var1.persistKey;
            var1 = var0.getState;
            var6 = var1.bind(var0)();
            var5 = var0._version;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.Storage;
            var2 = var3.set;
            var1 = {};
            var1._state = var6;
            var1._version = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var1 = this;
            var0 = var1.getClass;
            var0 = var0.bind(var1)();
            var3 = var0.persistKey;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.Storage;
            var1 = var2.remove;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var5 = {};
        var0 = 'clearAll';
        var5.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var6
            _fun6830: for (var _fun6830_ip = 0;;) switch (_fun6830_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    _closure1_slot13 = var2;
                    var2 = _closure2_slot0;
                    var3 = var2._clearAllPromise;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun6830_ip = 78;
                        continue _fun6830
                    }
                case 35:
                    var2 = _closure2_slot0;
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = global;
                        var3 = var0.requestIdleCallback;
                        var2 = {};
                        var0 = 500;
                        var2.timeout = var0;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            var1 = _closure2_slot0;
                            var3 = var1.clearPersistQueue;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var1)(var2);
                            var4 = var1.allPersistKeys;
                            var3 = var4.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun6833: for (var _fun6833_ip = 0;;) switch (_fun6833_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = _closure2_slot0;
                                        var1 = var3.shouldClear;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var3)(var0, var2);
                                        if (!var0) {
                                            _fun6833_ip = 74;
                                            continue _fun6833
                                        }
                                    case 32:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 10;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var1);
                                        var1 = var0.Storage;
                                        var0 = var1.remove;
                                        var0 = var0.bind(var1)(var2);
                                    case 74:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot11;
                            var2 = var3.getAll;
                            var3 = var2.bind(var3)();
                            var2 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun6834: for (var _fun6834_ip = 0;;) switch (_fun6834_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = _closure2_slot0;
                                        var0 = var1 instanceof var0;
                                        if (!var0) {
                                            _fun6834_ip = 56;
                                            continue _fun6834
                                        }
                                    case 17:
                                        var5 = _closure2_slot0;
                                        var4 = var5.shouldClear;
                                        var3 = _closure3_slot0;
                                        var2 = var1.getClass;
                                        var2 = var2.bind(var1)();
                                        var2 = var2.persistKey;
                                        var0 = var4.bind(var5)(var3, var2);
                                    case 56:
                                        if (!var0) {
                                            _fun6834_ip = 77;
                                            continue _fun6834
                                        }
                                    case 59:
                                        var0 = false;
                                        var1._isInitialized = var0;
                                        var0 = var1.initializeIfNeeded;
                                        var0 = var0.bind(var1)();
                                    case 77:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = null;
                            var1._clearAllPromise = var0;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var3.bind(var0)(var1, var2);
                        return var0;
                    };
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._clearAllPromise = var1;
                case 78:
                    var0 = _closure2_slot0;
                    var0 = var0._clearAllPromise;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(7);
        var0[0] = var5;
        var5 = {};
        var7 = 'shouldClear';
        var5.key = var7;
        var7 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun6835: for (var _fun6835_ip = 0;;) switch (_fun6835_ip) {
                case 0:
                    var2 = arg0;
                    var5 = arg1;
                    var3 = var2.omit;
                    var0 = null;
                    var0 = var0 == var3;
                    if (var0) {
                        _fun6835_ip = 34;
                        continue _fun6835
                    }
                case 21:
                    var1 = var3.includes;
                    var1 = var1.bind(var3)(var5);
                    var0 = !var1;
                case 34:
                    if (!var0) {
                        _fun6835_ip = 103;
                        continue _fun6835
                    }
                case 37:
                    var3 = var2.type;
                    var1 = 'all';
                    var1 = var1 === var3;
                    if (var1) {
                        _fun6835_ip = 100;
                        continue _fun6835
                    }
                case 53:
                    var3 = var2.type;
                    var2 = 'user-data-only';
                    var2 = var2 === var3;
                    if (!var2) {
                        _fun6835_ip = 97;
                        continue _fun6835
                    }
                case 71:
                    var3 = _closure2_slot0;
                    var4 = var3.userAgnosticPersistKeys;
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var5);
                    var2 = !var3;
                case 97:
                    var1 = var2;
                case 100:
                    var0 = var1;
                case 103:
                    return var0;
            }
        };
        var5.value = var7;
        var0[1] = var5;
        var5 = {};
        var7 = 'clearPersistQueue';
        var5.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var6
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = _closure2_slot0;
            var3 = var0._writeResolvers;
            var2 = var3.forEach;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun6837: for (var _fun6837_ip = 0;;) switch (_fun6837_ip) {
                    case 0:
                        var5 = arg1;
                        var6 = arg0;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var0 = undefined;
                        var4 = var2 === var0;
                        var2 = undefined;
                        if (var4) {
                            _fun6837_ip = 30;
                            continue _fun6837
                        }
                    case 27:
                        var2 = var3;
                    case 30:
                        var3 = undefined;
                        if (var4) {
                            _fun6837_ip = 60;
                            continue _fun6837
                        }
                    case 35:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var0;
                        var3 = undefined;
                        var4 = var6;
                        if (var6) {
                            _fun6837_ip = 60;
                            continue _fun6837
                        }
                    case 54:
                        var3 = var7;
                        var4 = var6;
                    case 60:
                        if (var4) {
                            _fun6837_ip = 66;
                            continue _fun6837
                        }
                    case 63:
                        var1.return();
                    case 66:
                        var7 = _closure2_slot0;
                        var6 = var7.shouldClear;
                        var4 = _closure3_slot0;
                        var4 = var6.bind(var7)(var4, var5);
                        if (!var4) {
                            _fun6837_ip = 151;
                            continue _fun6837
                        }
                    case 95:
                        var1 = _closure2_slot0;
                        var6 = var1._writePromises;
                        var4 = var6.delete;
                        var4 = var4.bind(var6)(var5);
                        var4 = var1._writeResolvers;
                        var1 = var4.delete;
                        var1 = var1.bind(var4)(var5);
                        var1 = global;
                        var1 = var1.cancelIdleCallback;
                        var1 = var1.bind(var0)(var3);
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                    case 151:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var2 = var0._writePromises;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0._writeResolvers;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var5.value = var7;
        var0[2] = var5;
        var5 = {};
        var7 = 'getAllStates';
        var5.key = var7;
        var7 = function() { // Original name: value, environment: var6
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.all;
            var4 = var0.Array;
            var3 = var4.from;
            var0 = _closure2_slot0;
            var5 = var0._writePromises;
            var0 = var5.values;
            var0 = var0.bind(var5)();
            var0 = var3.bind(var4)(var0);
            var2 = var1.bind(var2)(var0);
            var1 = var2.then;
            var0 = function() { // Environment: var0
                var0 = {};
                var _closure4_slot0 = var0;
                var2 = _closure2_slot0;
                var3 = var2.allPersistKeys;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun6840: for (var _fun6840_ip = 0;;) switch (_fun6840_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure4_slot0;
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var5.bind(var0)(var1);
                            var5 = var1.Storage;
                            var1 = var5.get;
                            var1 = var1.bind(var5)(var3);
                            var5 = null;
                            if (!(var5 == var1)) {
                                _fun6840_ip = 61;
                                continue _fun6840
                            }
                        case 57:
                            var1 = _closure1_slot12;
                        case 61:
                            var1 = var1._state;
                            var2[var3] = var1;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var7;
        var0[3] = var5;
        var5 = {};
        var7 = 'initializeAll';
        var5.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var6
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot11;
            var1 = var2.getAll;
            var2 = var1.bind(var2)();
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun6842: for (var _fun6842_ip = 0;;) switch (_fun6842_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure2_slot0;
                        var0 = var2 instanceof var0;
                        if (!var0) {
                            _fun6842_ip = 77;
                            continue _fun6842
                        }
                    case 17:
                        var0 = var2.getClass;
                        var0 = var0.bind(var2)();
                        var3 = var0.persistKey;
                        var4 = _closure3_slot0;
                        var1 = var4.hasOwnProperty;
                        var1 = var1.bind(var4)(var3);
                        if (var1) {
                            _fun6842_ip = 58;
                            continue _fun6842
                        }
                    case 54:
                        var1 = undefined;
                        return var1;
                    case 58:
                        var1 = var2.initializeFromState;
                        var0 = _closure3_slot0;
                        var0 = var0[var3];
                        var0 = var1.bind(var2)(var0);
                    case 77:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var7;
        var0[4] = var5;
        var5 = {};
        var7 = 'destroy';
        var5.key = var7;
        var7 = function() { // Original name: value, environment: var6
            var1 = null;
            _closure1_slot13 = var1;
            var1 = _closure1_slot11;
            var0 = var1.destroy;
            var0 = var0.bind(var1)();
            var0 = _closure2_slot0;
            var2 = var0.clearPersistQueue;
            var1 = {};
            var3 = 'all';
            var1.type = var3;
            var1 = var2.bind(var0)(var1);
            var2 = var0.allPersistKeys;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.userAgnosticPersistKeys;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var5.value = var7;
        var0[5] = var5;
        var5 = {};
        var7 = 'migrateAndReadStoreState';
        var5.key = var7;
        var6 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun6844: for (var _fun6844_ip = 0;;) switch (_fun6844_ip) {
                case 0:
                    var3 = arg0;
                    var7 = arg1;
                    var1 = _closure1_slot13;
                    var9 = null;
                    if (!(var9 != var1)) {
                        _fun6844_ip = 48;
                        continue _fun6844
                    }
                case 19:
                    var4 = _closure2_slot0;
                    var2 = var4.shouldClear;
                    var1 = _closure1_slot13;
                    var1 = var2.bind(var4)(var1, var3);
                    if (var1) {
                        _fun6844_ip = 295;
                        continue _fun6844
                    }
                case 48:
                    var1 = _closure2_slot0;
                    var1 = var1._clearAllPromise;
                    var1 = var9 != var1;
                    var5 = null;
                    if (var1) {
                        _fun6844_ip = 108;
                        continue _fun6844
                    }
                case 70:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var2 = var1.Storage;
                    var1 = var2.get;
                    var5 = var1.bind(var2)(var3);
                case 108:
                    if (!(var9 == var5)) {
                        _fun6844_ip = 116;
                        continue _fun6844
                    }
                case 112:
                    var5 = _closure1_slot12;
                case 116:
                    var2 = var5._state;
                    var8 = var5._version;
                    var4 = _closure1_slot5;
                    var1 = _closure1_slot3;
                    var6 = undefined;
                    var1 = var4.bind(var6)(var5, var1);
                    var10 = var9 == var7;
                    var5 = 0;
                    var4 = 0;
                    if (var10) {
                        _fun6844_ip = 160;
                        continue _fun6844
                    }
                case 155:
                    var4 = var7.length;
                case 160:
                    if (!(var5 !== var4)) {
                        _fun6844_ip = 172;
                        continue _fun6844
                    }
                case 164:
                    if (!(var8 !== var4)) {
                        _fun6844_ip = 172;
                        continue _fun6844
                    }
                case 168:
                    if (!(var9 == var7)) {
                        _fun6844_ip = 232;
                        continue _fun6844
                    }
                case 172:
                    var10 = global;
                    var11 = var10.Object;
                    var10 = var11.values;
                    var10 = var10.bind(var11)(var1);
                    var10 = var10.length;
                    if (!(!(var10 > var5))) {
                        _fun6844_ip = 214;
                        continue _fun6844
                    }
                case 199:
                    var10 = {};
                    var10.state = var2;
                    var11 = false;
                    var10.requiresPersist = var11;
                    _fun6844_ip = 230;
                    continue _fun6844;
                case 214:
                    var11 = {};
                    var11.state = var1;
                    var12 = true;
                    var11.requiresPersist = var12;
                    var10 = var11;
                case 230:
                    return var10;
                case 232:
                    var10 = var9 != var8;
                    var5 = 0;
                    if (!var10) {
                        _fun6844_ip = 244;
                        continue _fun6844
                    }
                case 241:
                    var5 = var8;
                case 244:
                    if (!(var9 == var8)) {
                        _fun6844_ip = 251;
                        continue _fun6844
                    }
                case 248:
                    var2 = var1;
                case 251:
                    var1 = var2;
                    var2 = var1;
                    if (!(var5 < var4)) {
                        _fun6844_ip = 280;
                        continue _fun6844
                    }
                case 261:
                    var8 = var7[var5];
                    var1 = var8.bind(var6)(var1);
                    var5 = var5 + 1;
                    var2 = var1;
                    if (var5 < var4) {
                        _fun6844_ip = 261;
                        continue _fun6844
                    }
                case 280:
                    var1 = {};
                    var1.state = var2;
                    var2 = true;
                    var1.requiresPersist = var2;
                    return var1;
                case 295:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var2.bind(var1)(var0);
                    var2 = var0.Storage;
                    var0 = var2.remove;
                    var0 = var0.bind(var2)(var3);
                    var0 = {};
                    var0.state = var1;
                    var1 = false;
                    var0.requiresPersist = var1;
                    return var0;
            }
        };
        var5.value = var6;
        var0[6] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var8);
    var _closure1_slot14 = var4;
    var8 = var5.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var4.allPersistKeys = var8;
    var8 = var5.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var4.userAgnosticPersistKeys = var8;
    var8 = var5.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var4._writePromises = var8;
    var5 = var5.Map;
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var13 = var8;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var4._writeResolvers = var5;
    var5 = false;
    var4.disableWrites = var5;
    var4.disableWrite = var5;
    var4.throttleDelay = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: UserAgnosticStore, environment: var5
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot16;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot10;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'initializeFromState';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var5 = this;
            var1 = _closure1_slot14;
            var3 = var1.userAgnosticPersistKeys;
            var2 = var3.add;
            var1 = var5.getClass;
            var1 = var1.bind(var5)();
            var1 = var1.persistKey;
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot15;
            var9 = _closure2_slot0;
            var2 = undefined;
            var8 = 'initializeFromState';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var1 = var10[var4](var9, var8, var7, var6, var5);
            var0 = new Array(1);
            var3 = arg0;
            var0[0] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'initializeIfNeeded';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var5 = this;
            var1 = _closure1_slot14;
            var3 = var1.userAgnosticPersistKeys;
            var2 = var3.add;
            var1 = var5.getClass;
            var1 = var1.bind(var5)();
            var1 = var1.persistKey;
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot15;
            var9 = _closure2_slot0;
            var2 = undefined;
            var8 = 'initializeIfNeeded';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var1 = var10[var4](var9, var8, var7, var6, var5);
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.getUserAgnosticState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var3.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var1
        var2 = function() { // Original name: DeviceSettingsStore, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot16;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot10;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var1 = function(arg0) { // Environment: var1
        var2 = function() { // Original name: OfflineCacheStore, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot6;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot16;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot10;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot7;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/flux/PersistedStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.PersistedStore = var4;
    var2.DeviceSettingsStore = var3;
    var2.OfflineCacheStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [102, 29, 6, 7, 15, 17, 18, 568, 572, 20, 587, 2]);