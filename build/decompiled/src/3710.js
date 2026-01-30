// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33179: for (var _fun33179_ip = 0;;) switch (_fun33179_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var4 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var4;
            var0 = function(arg0) { // Original name: isPlainJSObject, environment: var5
                var0 = global;
                var3 = var0.Object;
                var2 = var3.getPrototypeOf;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var0 = var0.Object;
                var0 = var0.prototype;
                var0 = var1 === var0;
                return var0;
            };
            var _closure1_slot19 = var0;
            var0 = function(arg0) { // Original name: freezeObjectInDev, environment: var5
                var0 = undefined;
                return var0;
            };
            var _closure1_slot20 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var6 = var4[var0];
            var1 = arg2;
            var0 = undefined;
            var1 = var1.bind(var0)(var6);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var4[var1];
            var3 = var3.bind(var0)(var1);
            var1 = var3.shouldBeUseWeb;
            var1 = var1.bind(var3)();
            var _closure1_slot4 = var1;
            var3 = {};
            var4 = 'function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}';
            var3.code = var4;
            var _closure1_slot5 = var3;
            var3 = function() { // Environment: var5
                var0 = function(arg0) { // Original name: isHostObject, environment: var0
                    var1 = 'REANIMATED_MAGIC_KEY';
                    var0 = arg0;
                    var0 = var1 in var0;
                    return var0;
                };
                var1 = {};
                var2 = 'REANIMATED_MAGIC_KEY';
                var1.MAGIC_KEY = var2;
                var0.__closure = var1;
                var1 = 10372729533958.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot5;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot6 = var3;
            var6 = {};
            var3 = 'function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop===\'_isReanimatedSharedValue\'||prop===\'__remoteFunction\'){return false;}throw new ReanimatedError("Trying to access property `"+String(prop)+"` of an object which cannot be sent to the UI runtime.");},set:function(){throw new ReanimatedError(\'Trying to write to an object which cannot be sent to the UI runtime.\');}});}';
            var6.code = var3;
            var3 = {};
            var4 = function() { // Original name: pnpm_shareablesTs2, environment: var5
                var1 = global;
                var3 = var1.Proxy;
                var2 = {};
                var1 = function(arg0, arg1) { // Original name: get, environment: var0
                    _fun33185: for (var _fun33185_ip = 0;;) switch (_fun33185_ip) {
                        case 0:
                            var4 = arg1;
                            var0 = '_isReanimatedSharedValue';
                            if (!(var0 !== var4)) {
                                _fun33185_ip = 114;
                                continue _fun33185
                            }
                        case 11:
                            var0 = '__remoteFunction';
                            if (!(var0 !== var4)) {
                                _fun33185_ip = 114;
                                continue _fun33185
                            }
                        case 19:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 3;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.ReanimatedError;
                            var0 = global;
                            var1 = var0.String;
                            var4 = var1.bind(var3)(var4);
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var1 = 'Trying to access property `';
                            var0 = '` of an object which cannot be sent to the UI runtime.';
                            var6 = var3.bind(var1)(var4, var0);
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var7 = var1;
                            var0 = new var7[var2](var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 114:
                            var0 = false;
                            return var0;
                    }
                };
                var2.get = var1;
                var0 = function() { // Original name: set, environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'Trying to write to an object which cannot be sent to the UI runtime.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var2.set = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = {};
                var6 = var1;
                var4 = var2;
                var0 = new var6[var3](var5, var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var7 = {};
            var4.__closure = var7;
            var7 = 15880119471501.0;
            var4.__workletHash = var7;
            var4.__initData = var6;
            var3.__init = var4;
            var _closure1_slot8 = var3;
            var3 = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array', 'DataView'];
            var _closure1_slot9 = var3;
            if (var1) {
                _fun33179_ip = 233;
                continue _fun33179
            }
        case 226:
            var4 = function(arg0) { // Original name: makeShareableCloneRecursiveNative, environment: var5
                _fun33188: for (var _fun33188_ip = 0;;) switch (_fun33188_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = undefined;
                        var0 = undefined;
                        var1 = arguments.length;
                        var20 = 1;
                        var2 = var1 > var20;
                        if (!var2) {
                            _fun33188_ip = 30;
                            continue _fun33188
                        }
                    case 22:
                        var1 = arguments[var20];
                        var2 = var4 !== var1;
                    case 30:
                        if (!var2) {
                            _fun33188_ip = 37;
                            continue _fun33188
                        }
                    case 33:
                        var2 = arguments[var20];
                    case 37:
                        var1 = arguments.length;
                        var11 = 2;
                        var1 = var1 > var11;
                        var19 = 0;
                        var6 = 0;
                        if (!var1) {
                            _fun33188_ip = 68;
                            continue _fun33188
                        }
                    case 54:
                        var1 = arguments[var11];
                        var6 = 0;
                        if (!(var4 !== var1)) {
                            _fun33188_ip = 68;
                            continue _fun33188
                        }
                    case 64:
                        var6 = arguments[var11];
                    case 68:
                        var0 = 30;
                        if (!(!(var6 >= var0))) {
                            _fun33188_ip = 84;
                            continue _fun33188
                        }
                    case 75:
                        var _closure1_slot7 = var4;
                        _fun33188_ip = 160;
                        continue _fun33188;
                    case 84:
                        if (!(var0 !== var6)) {
                            _fun33188_ip = 153;
                            continue _fun33188
                        }
                    case 88:
                        var1 = _closure1_slot7;
                        if (!(var3 === var1)) {
                            _fun33188_ip = 160;
                            continue _fun33188
                        }
                    case 99:
                        var1 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var0 = 3;
                        var0 = var7[var0];
                        var0 = var1.bind(var4)(var0);
                        var7 = var0.ReanimatedError;
                        var0 = var7.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var7
                            }
                        });
                        var29 = 'Trying to convert a cyclic object to a shareable. This is not supported.';
                        var30 = var1;
                        var0 = new var30[var7](var29, var28);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 153:
                        _closure1_slot7 = var3;
                    case 160:
                        var1 = typeof var3;
                        var0 = 'function';
                        var7 = var0 === var1;
                        var0 = 'object';
                        if (!(var0 !== var1)) {
                            _fun33188_ip = 185;
                            continue _fun33188
                        }
                    case 179:
                        if (!var7) {
                            _fun33188_ip = 1453;
                            continue _fun33188
                        }
                    case 185:
                        var0 = null;
                        if (!(var0 !== var3)) {
                            _fun33188_ip = 1453;
                            continue _fun33188
                        }
                    case 194:
                        var9 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = var1[var11];
                        var0 = var9.bind(var4)(var0);
                        var10 = var0.shareableMappingCache;
                        var0 = var10.get;
                        var0 = var0.bind(var10)(var3);
                        var1 = var1[var11];
                        var1 = var9.bind(var4)(var1);
                        var1 = var1.shareableMappingFlag;
                        if (!(var0 === var1)) {
                            _fun33188_ip = 252;
                            continue _fun33188
                        }
                    case 249:
                        var0 = var3;
                    case 252:
                        if (!(var4 === var0)) {
                            _fun33188_ip = 1451;
                            continue _fun33188
                        }
                    case 259:
                        var10 = global;
                        var9 = var10.Array;
                        var1 = var9.isArray;
                        var1 = var1.bind(var9)(var3);
                        if (var1) {
                            _fun33188_ip = 1436;
                            continue _fun33188
                        }
                    case 283:
                        if (!var7) {
                            _fun33188_ip = 427;
                            continue _fun33188
                        }
                    case 289:
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var1 = 4;
                        var1 = var12[var1];
                        var9 = var9.bind(var4)(var1);
                        var1 = var9.isWorkletFunction;
                        var1 = var1.bind(var9)(var3);
                        if (var1) {
                            _fun33188_ip = 427;
                            continue _fun33188
                        }
                    case 323:
                        var12 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 5;
                        var1 = var9[var1];
                        var1 = var12.bind(var4)(var1);
                        var13 = var1.WorkletsModule;
                        var1 = var13.makeShareableClone;
                        var1 = var1.bind(var13)(var3, var2, var3);
                        var13 = var9[var11];
                        var13 = var12.bind(var4)(var13);
                        var14 = var13.shareableMappingCache;
                        var13 = var14.set;
                        var13 = var13.bind(var14)(var3, var1);
                        var9 = var9[var11];
                        var9 = var12.bind(var4)(var9);
                        var12 = var9.shareableMappingCache;
                        var9 = var12.set;
                        var9 = var9.bind(var12)(var1);
                        var9 = _closure1_slot20;
                        var9 = var9.bind(var4)(var4);
                        _fun33188_ip = 1434;
                        continue _fun33188;
                    case 427:
                        var9 = _closure1_slot6;
                        var9 = var9.bind(var4)(var3);
                        if (var9) {
                            _fun33188_ip = 1338;
                            continue _fun33188
                        }
                    case 442:
                        var9 = _closure1_slot19;
                        var9 = var9.bind(var4)(var3);
                        if (!var9) {
                            _fun33188_ip = 466;
                            continue _fun33188
                        }
                    case 454:
                        var9 = var3.__workletContextObjectFactory;
                        if (var9) {
                            _fun33188_ip = 1326;
                            continue _fun33188
                        }
                    case 466:
                        var9 = _closure1_slot19;
                        var9 = var9.bind(var4)(var3);
                        if (var9) {
                            _fun33188_ip = 481;
                            continue _fun33188
                        }
                    case 478:
                        if (!var7) {
                            _fun33188_ip = 518;
                            continue _fun33188
                        }
                    case 481:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var9 = 4;
                        var9 = var13[var9];
                        var12 = var12.bind(var4)(var9);
                        var9 = var12.isWorkletFunction;
                        var9 = var9.bind(var12)(var3);
                        if (var9) {
                            _fun33188_ip = 1033;
                            continue _fun33188
                        }
                    case 518:
                        var9 = _closure1_slot19;
                        var9 = var9.bind(var4)(var3);
                        if (var9) {
                            _fun33188_ip = 787;
                            continue _fun33188
                        }
                    case 533:
                        if (var7) {
                            _fun33188_ip = 787;
                            continue _fun33188
                        }
                    case 539:
                        var7 = var10.RegExp;
                        var7 = var3 instanceof var7;
                        if (var7) {
                            _fun33188_ip = 772;
                            continue _fun33188
                        }
                    case 555:
                        var7 = var10.Error;
                        var7 = var3 instanceof var7;
                        if (var7) {
                            _fun33188_ip = 760;
                            continue _fun33188
                        }
                    case 571:
                        var7 = var10.ArrayBuffer;
                        var7 = var3 instanceof var7;
                        if (var7) {
                            _fun33188_ip = 665;
                            continue _fun33188
                        }
                    case 584:
                        var9 = var10.ArrayBuffer;
                        var7 = var9.isView;
                        var7 = var7.bind(var9)(var3);
                        if (var7) {
                            _fun33188_ip = 653;
                            continue _fun33188
                        }
                    case 604:
                        var9 = _closure1_slot10;
                        var7 = _closure1_slot8;
                        var7 = var9.bind(var4)(var7);
                        var12 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var11];
                        var9 = var12.bind(var4)(var9);
                        var12 = var9.shareableMappingCache;
                        var9 = var12.set;
                        var9 = var9.bind(var12)(var3, var7);
                        _fun33188_ip = 663;
                        continue _fun33188;
                    case 653:
                        var9 = function(arg0) { // Original name: cloneArrayBufferView, environment: var5
                            var3 = arg0;
                            var6 = var3.buffer;
                            var _closure3_slot0 = var6;
                            var0 = var3.constructor;
                            var7 = var0.name;
                            var _closure3_slot1 = var7;
                            var2 = _closure1_slot10;
                            var0 = {};
                            var4 = function() { // Original name: pnpm_shareablesTs6, environment: var4
                                _fun33198: for (var _fun33198_ip = 0;;) switch (_fun33198_ip) {
                                    case 0:
                                        var4 = _closure1_slot9;
                                        var3 = var4.includes;
                                        var2 = _closure3_slot1;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun33198_ip = 112;
                                            continue _fun33198
                                        }
                                    case 27:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 3;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var4 = var2.ReanimatedError;
                                        var6 = _closure3_slot1;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var5 = var2.concat;
                                        var3 = '[Reanimated] Invalid array view name `';
                                        var2 = '`.';
                                        var8 = var5.bind(var3)(var6, var2);
                                        var3 = var4.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var9 = var3;
                                        var2 = new var9[var4](var8, var7);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        throw var2;
                                    case 112:
                                        var3 = _closure1_slot0;
                                        var2 = _closure3_slot1;
                                        var5 = var3[var2];
                                        var3 = undefined;
                                        if (!(var3 !== var5)) {
                                            _fun33198_ip = 156;
                                            continue _fun33198
                                        }
                                    case 130:
                                        var8 = _closure3_slot0;
                                        var4 = var5.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var9 = var4;
                                        var2 = new var9[var5](var8, var7);
                                        var2 = var2 instanceof Object ? var2 : var4;
                                        return var2;
                                    case 156:
                                        var2 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 3;
                                        var1 = var4[var1];
                                        var1 = var2.bind(var3)(var1);
                                        var2 = var1.ReanimatedError;
                                        var4 = _closure3_slot1;
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var3 = var0.concat;
                                        var1 = '[Reanimated] Constructor for `';
                                        var0 = '` not found.';
                                        var8 = var3.bind(var1)(var4, var0);
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var9 = var1;
                                        var0 = new var9[var2](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var5 = {};
                            var8 = _closure1_slot9;
                            var5.VALID_ARRAY_VIEWS_NAMES = var8;
                            var5.typeName = var7;
                            var5.buffer = var6;
                            var4.__closure = var5;
                            var5 = 2440560686150.0;
                            var4.__workletHash = var5;
                            var5 = _closure1_slot14;
                            var4.__initData = var5;
                            var0.__init = var4;
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 2;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.shareableMappingCache;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var7 = var9.bind(var4)(var3);
                    case 663:
                        _fun33188_ip = 758;
                        continue _fun33188;
                    case 665:
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 5;
                        var9 = var12[var9];
                        var9 = var13.bind(var4)(var9);
                        var14 = var9.WorkletsModule;
                        var9 = var14.makeShareableClone;
                        var9 = var9.bind(var14)(var3, var2, var3);
                        var14 = var12[var11];
                        var14 = var13.bind(var4)(var14);
                        var15 = var14.shareableMappingCache;
                        var14 = var15.set;
                        var14 = var14.bind(var15)(var3, var9);
                        var12 = var12[var11];
                        var12 = var13.bind(var4)(var12);
                        var13 = var12.shareableMappingCache;
                        var12 = var13.set;
                        var12 = var12.bind(var13)(var9);
                        var7 = var9;
                    case 758:
                        _fun33188_ip = 770;
                        continue _fun33188;
                    case 760:
                        var9 = function(arg0) { // Original name: cloneError, environment: var5
                            var3 = arg0;
                            var8 = var3.name;
                            var _closure3_slot0 = var8;
                            var7 = var3.message;
                            var _closure3_slot1 = var7;
                            var6 = var3.stack;
                            var _closure3_slot2 = var6;
                            var2 = _closure1_slot10;
                            var0 = {};
                            var4 = function() { // Original name: pnpm_shareablesTs5, environment: var4
                                var0 = global;
                                var0 = var0.Error;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var3 = var1;
                                var0 = new var3[var0](var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var2 = _closure3_slot0;
                                var0.name = var2;
                                var2 = _closure3_slot1;
                                var0.message = var2;
                                var1 = _closure3_slot2;
                                var0.stack = var1;
                                return var0;
                            };
                            var5 = {};
                            var5.name = var8;
                            var5.message = var7;
                            var5.stack = var6;
                            var4.__closure = var5;
                            var5 = 1273124072033.0;
                            var4.__workletHash = var5;
                            var5 = _closure1_slot13;
                            var4.__initData = var5;
                            var0.__init = var4;
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 2;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.shareableMappingCache;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var7 = var9.bind(var4)(var3);
                    case 770:
                        _fun33188_ip = 782;
                        continue _fun33188;
                    case 772:
                        var9 = function(arg0) { // Original name: cloneRegExp, environment: var5
                            var3 = arg0;
                            var7 = var3.source;
                            var _closure3_slot0 = var7;
                            var6 = var3.flags;
                            var _closure3_slot1 = var6;
                            var2 = _closure1_slot10;
                            var0 = {};
                            var4 = function() { // Original name: pnpm_shareablesTs4, environment: var4
                                var0 = global;
                                var3 = var0.RegExp;
                                var5 = _closure3_slot0;
                                var4 = _closure3_slot1;
                                var1 = var3.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var6 = var1;
                                var0 = new var6[var3](var5, var4, var3);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var5 = {};
                            var5.pattern = var7;
                            var5.flags = var6;
                            var4.__closure = var5;
                            var5 = 17343605339188.0;
                            var4.__workletHash = var5;
                            var5 = _closure1_slot12;
                            var4.__initData = var5;
                            var0.__init = var4;
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 2;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.shareableMappingCache;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var7 = var9.bind(var4)(var3);
                    case 782:
                        _fun33188_ip = 1028;
                        continue _fun33188;
                    case 787:
                        var9 = var2;
                        var16 = var6;
                        var17 = undefined;
                        var18 = undefined;
                        var14 = {};
                        var13 = var10.Object;
                        var12 = var13.entries;
                        var12 = var12.bind(var13)(var3);
                        var15 = var12;
                        var13 = var15[Symbol.iterator];
                        var15 = var13().next;
                        var12 = '__initData';
                    case 826:
                        var22 = var15().value;
                        var21 = var13;
                        if (!(var21 !== var4)) {
                            _fun33188_ip = 926;
                            continue _fun33188
                        }
                    case 837: // try_start_0
                        var21 = _closure1_slot3;
                        var21 = var21.bind(var4)(var22, var11);
                        var22 = var21[var19];
                        var17 = var22;
                        var18 = var21[var20];
                        var22 = var12 === var22;
                        var21 = var22;
                        if (!var22) {
                            _fun33188_ip = 880;
                            continue _fun33188
                        }
                    case 868:
                        var22 = var14;
                        var22 = var22.__initData;
                        var21 = var4 !== var22;
                    case 880:
                        if (var21) {
                            _fun33188_ip = 917;
                            continue _fun33188
                        }
                    case 883:
                        var23 = var14;
                        var22 = var17;
                        var26 = _closure1_slot10;
                        var25 = var18;
                        var24 = var9;
                        var21 = var16;
                        var21 = var21 + var20;
                        var21 = var26.bind(var4)(var25, var24, var21);
                        var23[var22] = var21;
                    case 917: // try_end0
                        _fun33188_ip = 826;
                        continue _fun33188;
                    case 919: // catch_target0
                        CatchBlockStart(arg_register = 12);
                        var13.return();
                        throw var12;
                    case 926:
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var15 = 5;
                        var15 = var12[var15];
                        var15 = var13.bind(var4)(var15);
                        var16 = var15.WorkletsModule;
                        var15 = var16.makeShareableClone;
                        var9 = var15.bind(var16)(var14, var9, var3);
                        var14 = var12[var11];
                        var14 = var13.bind(var4)(var14);
                        var15 = var14.shareableMappingCache;
                        var14 = var15.set;
                        var14 = var14.bind(var15)(var3, var9);
                        var12 = var12[var11];
                        var12 = var13.bind(var4)(var12);
                        var13 = var12.shareableMappingCache;
                        var12 = var13.set;
                        var12 = var12.bind(var13)(var9);
                        var12 = _closure1_slot20;
                        var12 = var12.bind(var4)(var4);
                        var7 = var9;
                    case 1028:
                        _fun33188_ip = 1324;
                        continue _fun33188;
                    case 1033:
                        var14 = var2;
                        var16 = var6;
                        var9 = undefined;
                        var17 = undefined;
                        var18 = undefined;
                        var12 = var3.__stackDetails;
                        if (!var12) {
                            _fun33188_ip = 1059;
                            continue _fun33188
                        }
                    case 1054:
                        var12 = delete var3.__stackDetails;
                    case 1059:
                        var13 = {};
                        var9 = var13;
                        var22 = _closure1_slot10;
                        var21 = var3.__initData;
                        var12 = var16;
                        var12 = var12 + var20;
                        var15 = true;
                        var12 = var22.bind(var4)(var21, var15, var12);
                        var13.__initData = var12;
                        var12 = var10.Object;
                        var10 = var12.entries;
                        var10 = var10.bind(var12)(var3);
                        var13 = var10;
                        var12 = var13[Symbol.iterator];
                        var13 = var12().next;
                        var10 = '__initData';
                    case 1122:
                        var22 = var13().value;
                        var21 = var12;
                        if (!(var21 !== var4)) {
                            _fun33188_ip = 1222;
                            continue _fun33188
                        }
                    case 1133: // try_start_1
                        var21 = _closure1_slot3;
                        var21 = var21.bind(var4)(var22, var11);
                        var22 = var21[var19];
                        var17 = var22;
                        var18 = var21[var20];
                        var22 = var10 === var22;
                        var21 = var22;
                        if (!var22) {
                            _fun33188_ip = 1176;
                            continue _fun33188
                        }
                    case 1164:
                        var22 = var9;
                        var22 = var22.__initData;
                        var21 = var4 !== var22;
                    case 1176:
                        if (var21) {
                            _fun33188_ip = 1213;
                            continue _fun33188
                        }
                    case 1179:
                        var23 = var9;
                        var22 = var17;
                        var26 = _closure1_slot10;
                        var25 = var18;
                        var24 = var14;
                        var21 = var16;
                        var21 = var21 + var20;
                        var21 = var26.bind(var4)(var25, var24, var21);
                        var23[var22] = var21;
                    case 1213: // try_end1
                        _fun33188_ip = 1122;
                        continue _fun33188;
                    case 1215: // catch_target1
                        CatchBlockStart(arg_register = 10);
                        var12.return();
                        throw var10;
                    case 1222:
                        var12 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var13 = 5;
                        var13 = var10[var13];
                        var13 = var12.bind(var4)(var13);
                        var14 = var13.WorkletsModule;
                        var13 = var14.makeShareableClone;
                        var9 = var13.bind(var14)(var9, var15, var3);
                        var13 = var10[var11];
                        var13 = var12.bind(var4)(var13);
                        var14 = var13.shareableMappingCache;
                        var13 = var14.set;
                        var13 = var13.bind(var14)(var3, var9);
                        var10 = var10[var11];
                        var10 = var12.bind(var4)(var10);
                        var12 = var10.shareableMappingCache;
                        var10 = var12.set;
                        var10 = var10.bind(var12)(var9);
                        var10 = _closure1_slot20;
                        var10 = var10.bind(var4)(var4);
                        var7 = var9;
                    case 1324:
                        _fun33188_ip = 1336;
                        continue _fun33188;
                    case 1326:
                        var9 = function(arg0) { // Original name: cloneContextObject, environment: var5
                            var3 = arg0;
                            var6 = var3.__workletContextObjectFactory;
                            var _closure3_slot0 = var6;
                            var2 = _closure1_slot10;
                            var0 = {};
                            var4 = function() { // Original name: pnpm_shareablesTs3, environment: var4
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var5 = {};
                            var5.workletContextObjectFactory = var6;
                            var4.__closure = var5;
                            var5 = 16264240301234.0;
                            var4.__workletHash = var5;
                            var5 = _closure1_slot11;
                            var4.__initData = var5;
                            var0.__init = var4;
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 2;
                            var1 = var5[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.shareableMappingCache;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var7 = var9.bind(var4)(var3);
                    case 1336:
                        _fun33188_ip = 1431;
                        continue _fun33188;
                    case 1338:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var8 = 5;
                        var8 = var9[var8];
                        var8 = var10.bind(var4)(var8);
                        var12 = var8.WorkletsModule;
                        var8 = var12.makeShareableClone;
                        var8 = var8.bind(var12)(var3, var2, var3);
                        var12 = var9[var11];
                        var12 = var10.bind(var4)(var12);
                        var13 = var12.shareableMappingCache;
                        var12 = var13.set;
                        var12 = var12.bind(var13)(var3, var8);
                        var9 = var9[var11];
                        var9 = var10.bind(var4)(var9);
                        var10 = var9.shareableMappingCache;
                        var9 = var10.set;
                        var9 = var9.bind(var10)(var8);
                        var7 = var8;
                    case 1431:
                        var1 = var7;
                    case 1434:
                        _fun33188_ip = 1448;
                        continue _fun33188;
                    case 1436:
                        var5 = function(arg0, arg1, arg2) { // Original name: cloneArray, environment: var5
                            var8 = arg0;
                            var7 = arg1;
                            var _closure3_slot0 = var7;
                            var1 = arg2;
                            var _closure3_slot1 = var1;
                            var1 = var8.map;
                            var0 = function(arg0) { // Environment: var0
                                var4 = _closure1_slot10;
                                var3 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = 1;
                                var2 = var1 + var0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var4.bind(var1)(var0, var3, var2);
                                return var0;
                            };
                            var6 = var1.bind(var8)(var0);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 5;
                            var0 = var5[var0];
                            var2 = undefined;
                            var0 = var4.bind(var2)(var0);
                            var3 = var0.WorkletsModule;
                            var0 = var3.makeShareableClone;
                            var0 = var0.bind(var3)(var6, var7, var8);
                            var3 = 2;
                            var6 = var5[var3];
                            var6 = var4.bind(var2)(var6);
                            var7 = var6.shareableMappingCache;
                            var6 = var7.set;
                            var6 = var6.bind(var7)(var8, var0);
                            var3 = var5[var3];
                            var3 = var4.bind(var2)(var3);
                            var4 = var3.shareableMappingCache;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var0);
                            var1 = _closure1_slot20;
                            var1 = var1.bind(var2)(var2);
                            return var0;
                        };
                        var1 = var5.bind(var4)(var3, var2, var6);
                    case 1448:
                        var0 = var1;
                    case 1451:
                        return var0;
                    case 1453:
                        var1 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 5;
                        var0 = var5[var0];
                        var0 = var1.bind(var4)(var0);
                        var1 = var0.WorkletsModule;
                        var0 = var1.makeShareableClone;
                        var0 = var0.bind(var1)(var3, var2);
                        return var0;
                }
            };
            _fun33179_ip = 238;
            continue _fun33179;
        case 233:
            var4 = function(arg0) { // Original name: makeShareableCloneRecursiveWeb, environment: var5
                var0 = arg0;
                return var0;
            };
        case 238:
            var _closure1_slot10 = var4;
            var3 = {};
            var6 = 'function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}';
            var3.code = var6;
            var _closure1_slot11 = var3;
            var3 = {};
            var6 = 'function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}';
            var3.code = var6;
            var _closure1_slot12 = var3;
            var3 = {};
            var6 = 'function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}';
            var3.code = var6;
            var _closure1_slot13 = var3;
            var3 = {};
            var6 = 'function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError("[Reanimated] Invalid array view name `"+typeName+"`.");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError("[Reanimated] Constructor for `"+typeName+"` not found.");}return new constructor(buffer);}';
            var3.code = var6;
            var _closure1_slot14 = var3;
            var3 = {};
            var6 = 'function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}';
            var3.code = var6;
            var _closure1_slot15 = var3;
            var3 = function() { // Environment: var5
                var0 = function(arg0) { // Original name: isRemoteFunction, environment: var0
                    var0 = arg0;
                    var0 = var0.__remoteFunction;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 12817663616448.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot15;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot16 = var3;
            var3 = {};
            var6 = "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}";
            var3.code = var6;
            var _closure1_slot17 = var3;
            var3 = function() { // Environment: var5
                var0 = function(arg0) { // Original name: makeShareableCloneOnUIRecursive, environment: var0
                    _fun33202: for (var _fun33202_ip = 0;;) switch (_fun33202_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure1_slot4;
                            if (var2) {
                                _fun33202_ip = 33;
                                continue _fun33202
                            }
                        case 15:
                            var2 = function(arg0) { // Original name: cloneRecursive, environment: var1
                                _fun33203: for (var _fun33203_ip = 0;;) switch (_fun33203_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = undefined;
                                        var1 = undefined;
                                        var4 = typeof var3;
                                        var0 = 'object';
                                        if (!(var0 === var4)) {
                                            _fun33203_ip = 24;
                                            continue _fun33203
                                        }
                                    case 18:
                                        var0 = null;
                                        if (!(var0 === var3)) {
                                            _fun33203_ip = 53;
                                            continue _fun33203
                                        }
                                    case 24:
                                        var0 = 'function';
                                        if (!(var0 !== var4)) {
                                            _fun33203_ip = 53;
                                            continue _fun33203
                                        }
                                    case 32:
                                        var4 = _closure1_slot0;
                                        var0 = var4._makeShareableClone;
                                        var0 = var0.bind(var4)(var3, var2);
                                        return var0;
                                    case 53:
                                        var4 = _closure1_slot6;
                                        var4 = var4.bind(var2)(var3);
                                        if (var4) {
                                            _fun33203_ip = 258;
                                            continue _fun33203
                                        }
                                    case 71:
                                        var4 = _closure1_slot16;
                                        var4 = var4.bind(var2)(var3);
                                        if (var4) {
                                            _fun33203_ip = 250;
                                            continue _fun33203
                                        }
                                    case 86:
                                        var4 = global;
                                        var6 = var4.Array;
                                        var5 = var6.isArray;
                                        var5 = var5.bind(var6)(var3);
                                        if (var5) {
                                            _fun33203_ip = 215;
                                            continue _fun33203
                                        }
                                    case 107:
                                        var1 = {};
                                        var5 = var4.Object;
                                        var4 = var5.entries;
                                        var4 = var4.bind(var5)(var3);
                                        var9 = var4;
                                        var5 = var9[Symbol.iterator];
                                        var9 = var5().next;
                                        var8 = 2;
                                        var7 = 0;
                                        var6 = 1;
                                    case 143:
                                        var11 = var9().value;
                                        var10 = var5;
                                        if (!(var10 !== var2)) {
                                            _fun33203_ip = 197;
                                            continue _fun33203
                                        }
                                    case 154: // try_start_0
                                        var10 = _closure1_slot3;
                                        var10 = var10.bind(var2)(var11, var8);
                                        var12 = var10[var7];
                                        var13 = var10[var6];
                                        var11 = var1;
                                        var10 = _closure3_slot0;
                                        var10 = var10.bind(var2)(var13);
                                        var11[var12] = var10;
                                    case 188: // try_end0
                                        _fun33203_ip = 143;
                                        continue _fun33203;
                                    case 190: // catch_target0
                                        CatchBlockStart(arg_register = 4);
                                        var5.return();
                                        throw var4;
                                    case 197:
                                        var5 = _closure1_slot0;
                                        var4 = var5._makeShareableClone;
                                        var1 = var4.bind(var5)(var1, var3);
                                        return var1;
                                    case 215:
                                        var5 = _closure1_slot0;
                                        var4 = var5._makeShareableClone;
                                        var6 = var3.map;
                                        var1 = _closure3_slot0;
                                        var1 = var6.bind(var3)(var1);
                                        var1 = var4.bind(var5)(var1, var2);
                                        return var1;
                                    case 250:
                                        var1 = var3.__remoteFunction;
                                        return var1;
                                    case 258:
                                        var1 = _closure1_slot0;
                                        var0 = var1._makeShareableClone;
                                        var0 = var0.bind(var1)(var3, var2);
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var2;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var0);
                            return var1;
                        case 33:
                            return var0;
                    }
                };
                var2 = {};
                var3 = _closure1_slot4;
                var2.SHOULD_BE_USE_WEB = var3;
                var3 = _closure1_slot6;
                var2.isHostObject = var3;
                var3 = _closure1_slot16;
                var2.isRemoteFunction = var3;
                var0.__closure = var2;
                var2 = 10912061747670.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot17;
                var0.__initData = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var6 = {};
            var7 = 'function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}';
            var6.code = var7;
            var _closure1_slot18 = var6;
            if (var1) {
                _fun33179_ip = 386;
                continue _fun33179
            }
        case 379:
            var1 = function(arg0) { // Original name: makeShareableNative, environment: var5
                _fun33205: for (var _fun33205_ip = 0;;) switch (_fun33205_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 2;
                        var2 = var2[var5];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.shareableMappingCache;
                        var2 = var3.get;
                        var2 = var2.bind(var3)(var0);
                        if (var2) {
                            _fun33205_ip = 148;
                            continue _fun33205
                        }
                    case 53:
                        var3 = _closure1_slot10;
                        var2 = {};
                        var6 = function() { // Original name: pnpm_shareablesTs9, environment: var6
                            var0 = _closure2_slot0;
                            return var0;
                        };
                        var7 = {};
                        var7.value = var0;
                        var6.__closure = var7;
                        var7 = 5731865988281.0;
                        var6.__workletHash = var7;
                        var7 = _closure1_slot18;
                        var6.__initData = var7;
                        var2.__init = var6;
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.shareableMappingCache;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var0, var3);
                        return var0;
                    case 148:
                        return var0;
                }
            };
            _fun33179_ip = 391;
            continue _fun33179;
        case 386:
            var1 = function(arg0) { // Original name: makeShareableJS, environment: var5
                var0 = arg0;
                return var0;
            };
        case 391:
            var2.makeShareableCloneRecursive = var4;
            var2.makeShareableCloneOnUIRecursive = var3;
            var2.makeShareable = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3683, 3711, 3691, 3705, 3696, 3684]);