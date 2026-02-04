// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16344: for (var _fun16344_ip = 0;;) switch (_fun16344_ip) {
        case 0:
            var22 = require;
            var3 = exports;
            var23 = dependencyMap;
            var _closure1_slot0 = var22;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var23;
            var17 = function arg0() {
                var2 = arg0;
                var1 = var2.call;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var0 = function arg0, arg1() {
                _fun16346: for (var _fun16346_ip = 0;;) switch (_fun16346_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = var2;
                        var1 = arg1;
                        var3 = 'object';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun16346_ip = 43;
                            continue _fun16346
                        }
                    case 20: // try_start_0
                        var2 = var1;
                        var1 = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 33: // try_end0
                        var0 = true;
                        return var0;
                    case 37: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                    case 43:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var21 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Map]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot13 = var21;
            var20 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Set]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot14 = var20;
            var19 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object WeakMap]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot15 = var19;
            var16 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object WeakSet]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot16 = var16;
            var15 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object ArrayBuffer]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot17 = var15;
            var11 = function arg0() {
                _fun16352: for (var _fun16352_ip = 0;;) switch (_fun16352_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = global;
                        var0 = var1.ArrayBuffer;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun16352_ip = 67;
                            continue _fun16352
                        }
                    case 25:
                        var3 = _closure1_slot17;
                        var3 = var3.working;
                        if (var3) {
                            _fun16352_ip = 53;
                            continue _fun16352
                        }
                    case 41:
                        var1 = var1.ArrayBuffer;
                        var1 = var4 instanceof var1;
                        _fun16352_ip = 64;
                        continue _fun16352;
                    case 53:
                        var3 = _closure1_slot17;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 64:
                        var0 = var1;
                    case 67:
                        return var0;
                }
            };
            var _closure1_slot18 = var11;
            var13 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object DataView]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot19 = var13;
            var9 = function arg0() {
                _fun16354: for (var _fun16354_ip = 0;;) switch (_fun16354_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = global;
                        var0 = var1.DataView;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun16354_ip = 67;
                            continue _fun16354
                        }
                    case 25:
                        var3 = _closure1_slot19;
                        var3 = var3.working;
                        if (var3) {
                            _fun16354_ip = 53;
                            continue _fun16354
                        }
                    case 41:
                        var1 = var1.DataView;
                        var1 = var4 instanceof var1;
                        _fun16354_ip = 64;
                        continue _fun16354;
                    case 53:
                        var3 = _closure1_slot19;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 64:
                        var0 = var1;
                    case 67:
                        return var0;
                }
            };
            var _closure1_slot20 = var9;
            var0 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object SharedArrayBuffer]';
                var0 = var0 === var1;
                return var0;
            };
            var _closure1_slot21 = var0;
            var8 = function arg0() {
                _fun16356: for (var _fun16356_ip = 0;;) switch (_fun16356_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot11;
                        var3 = undefined;
                        var0 = var3 !== var0;
                        if (!var0) {
                            _fun16356_ip = 107;
                            continue _fun16356
                        }
                    case 19:
                        var1 = _closure1_slot21;
                        var1 = var1.working;
                        if (!(var3 === var1)) {
                            _fun16356_ip = 72;
                            continue _fun16356
                        }
                    case 33:
                        var5 = _closure1_slot21;
                        var1 = _closure1_slot11;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var6;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var1 = var5.bind(var3)(var1);
                        var5.working = var1;
                    case 72:
                        var1 = _closure1_slot21;
                        var1 = var1.working;
                        if (var1) {
                            _fun16356_ip = 95;
                            continue _fun16356
                        }
                    case 85:
                        var1 = _closure1_slot11;
                        var1 = var4 instanceof var1;
                        _fun16356_ip = 104;
                        continue _fun16356;
                    case 95:
                        var2 = _closure1_slot21;
                        var1 = var2.bind(var3)(var4);
                    case 104:
                        var0 = var1;
                    case 107:
                        return var0;
                }
            };
            var _closure1_slot22 = var8;
            var7 = function arg0() {
                var3 = _closure1_slot12;
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var _closure1_slot23 = var7;
            var6 = function arg0() {
                var3 = _closure1_slot12;
                var2 = _closure1_slot7;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var _closure1_slot24 = var6;
            var5 = function arg0() {
                var3 = _closure1_slot12;
                var2 = _closure1_slot8;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var _closure1_slot25 = var5;
            var4 = function arg0() {
                _fun16360: for (var _fun16360_ip = 0;;) switch (_fun16360_ip) {
                    case 0:
                        var0 = _closure1_slot3;
                        if (!var0) {
                            _fun16360_ip = 29;
                            continue _fun16360
                        }
                    case 10:
                        var4 = _closure1_slot12;
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = var4.bind(var2)(var1, var3);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot26 = var4;
            var2 = function arg0() {
                _fun16361: for (var _fun16361_ip = 0;;) switch (_fun16361_ip) {
                    case 0:
                        var0 = _closure1_slot4;
                        if (!var0) {
                            _fun16361_ip = 29;
                            continue _fun16361
                        }
                    case 10:
                        var4 = _closure1_slot12;
                        var3 = _closure1_slot10;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = var4.bind(var2)(var1, var3);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot27 = var2;
            var10 = global;
            var0 = var10.BigInt;
            var12 = 'undefined';
            var0 = typeof var0;
            var18 = var12 !== var0;
            var _closure1_slot3 = var18;
            var0 = var10.Symbol;
            var0 = typeof var0;
            var14 = var12 !== var0;
            var _closure1_slot4 = var14;
            var0 = var10.Object;
            var0 = var0.prototype;
            var24 = var0.toString;
            var0 = undefined;
            var24 = var17.bind(var0)(var24);
            var _closure1_slot5 = var24;
            var24 = var10.Number;
            var24 = var24.prototype;
            var24 = var24.valueOf;
            var24 = var17.bind(var0)(var24);
            var _closure1_slot6 = var24;
            var24 = var10.String;
            var24 = var24.prototype;
            var24 = var24.valueOf;
            var24 = var17.bind(var0)(var24);
            var _closure1_slot7 = var24;
            var24 = var10.Boolean;
            var24 = var24.prototype;
            var24 = var24.valueOf;
            var24 = var17.bind(var0)(var24);
            var _closure1_slot8 = var24;
            if (!var18) {
                _fun16344_ip = 341;
                continue _fun16344
            }
        case 316:
            var18 = var10.BigInt;
            var18 = var18.prototype;
            var18 = var18.valueOf;
            var18 = var17.bind(var0)(var18);
            var _closure1_slot9 = var18;
        case 341:
            if (!var14) {
                _fun16344_ip = 369;
                continue _fun16344
            }
        case 344:
            var14 = var10.Symbol;
            var14 = var14.prototype;
            var14 = var14.valueOf;
            var14 = var17.bind(var0)(var14);
            var _closure1_slot10 = var14;
        case 369:
            var18 = 0;
            var14 = var23[var18];
            var14 = var22.bind(var0)(var14);
            var3.isArgumentsObject = var14;
            var17 = 1;
            var14 = var23[var17];
            var14 = var22.bind(var0)(var14);
            var3.isGeneratorFunction = var14;
            var14 = 2;
            var14 = var23[var14];
            var14 = var22.bind(var0)(var14);
            var3.isTypedArray = var14;
            var14 = function arg0() {
                _fun16362: for (var _fun16362_ip = 0;;) switch (_fun16362_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = global;
                        var0 = var1.Promise;
                        var3 = 'undefined';
                        var0 = typeof var0;
                        var0 = var3 !== var0;
                        if (!var0) {
                            _fun16362_ip = 34;
                            continue _fun16362
                        }
                    case 24:
                        var1 = var1.Promise;
                        var0 = var2 instanceof var1;
                    case 34:
                        if (var0) {
                            _fun16362_ip = 99;
                            continue _fun16362
                        }
                    case 37:
                        var1 = null;
                        var1 = var1 !== var2;
                        if (!var1) {
                            _fun16362_ip = 57;
                            continue _fun16362
                        }
                    case 46:
                        var4 = 'object';
                        var3 = typeof var2;
                        var1 = var4 === var3;
                    case 57:
                        if (!var1) {
                            _fun16362_ip = 76;
                            continue _fun16362
                        }
                    case 60:
                        var3 = var2.then;
                        var4 = 'function';
                        var3 = typeof var3;
                        var1 = var4 === var3;
                    case 76:
                        if (!var1) {
                            _fun16362_ip = 96;
                            continue _fun16362
                        }
                    case 79:
                        var2 = var2.catch;
                        var3 = 'function';
                        var2 = typeof var2;
                        var1 = var3 === var2;
                    case 96:
                        var0 = var1;
                    case 99:
                        return var0;
                }
            };
            var3.isPromise = var14;
            var14 = function arg0() {
                _fun16363: for (var _fun16363_ip = 0;;) switch (_fun16363_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = global;
                        var0 = var1.ArrayBuffer;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        if (!(var2 !== var0)) {
                            _fun16363_ip = 37;
                            continue _fun16363
                        }
                    case 22:
                        var0 = var1.ArrayBuffer;
                        var0 = var0.isView;
                        if (var0) {
                            _fun16363_ip = 81;
                            continue _fun16363
                        }
                    case 37:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 2;
                        var0 = var4[var0];
                        var4 = undefined;
                        var0 = var5.bind(var4)(var0);
                        var0 = var0.bind(var4)(var3);
                        if (var0) {
                            _fun16363_ip = 79;
                            continue _fun16363
                        }
                    case 70:
                        var2 = _closure1_slot20;
                        var0 = var2.bind(var4)(var3);
                    case 79:
                        _fun16363_ip = 98;
                        continue _fun16363;
                    case 81:
                        var2 = var1.ArrayBuffer;
                        var1 = var2.isView;
                        var0 = var1.bind(var2)(var3);
                    case 98:
                        return var0;
                }
            };
            var3.isArrayBufferView = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Uint8Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isUint8Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Uint8ClampedArray';
                var0 = var0 === var1;
                return var0;
            };
            var3.isUint8ClampedArray = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Uint16Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isUint16Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Uint32Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isUint32Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Int8Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isInt8Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Int16Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isInt16Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Int32Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isInt32Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Float32Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isFloat32Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'Float64Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isFloat64Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'BigInt64Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isBigInt64Array = var14;
            var14 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = 'BigUint64Array';
                var0 = var0 === var1;
                return var0;
            };
            var3.isBigUint64Array = var14;
            var14 = var10.Map;
            var14 = typeof var14;
            var14 = var12 !== var14;
            if (!var14) {
                _fun16344_ip = 611;
                continue _fun16344
            }
        case 580:
            var22 = var10.Map;
            var23 = var22.prototype;
            var23 = Object.create(var23, {
                constructor: {
                    value: var22
                }
            });
            var28 = var23;
            var22 = new var28[var22](var27);
            var22 = var22 instanceof Object ? var22 : var23;
            var14 = var21.bind(var0)(var22);
        case 611:
            var21.working = var14;
            var14 = function arg0() {
                _fun16375: for (var _fun16375_ip = 0;;) switch (_fun16375_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = global;
                        var0 = var1.Map;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun16375_ip = 66;
                            continue _fun16375
                        }
                    case 24:
                        var3 = _closure1_slot13;
                        var3 = var3.working;
                        if (var3) {
                            _fun16375_ip = 52;
                            continue _fun16375
                        }
                    case 40:
                        var1 = var1.Map;
                        var1 = var4 instanceof var1;
                        _fun16375_ip = 63;
                        continue _fun16375;
                    case 52:
                        var3 = _closure1_slot13;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 63:
                        var0 = var1;
                    case 66:
                        return var0;
                }
            };
            var3.isMap = var14;
            var14 = var10.Set;
            var14 = typeof var14;
            var14 = var12 !== var14;
            if (!var14) {
                _fun16344_ip = 674;
                continue _fun16344
            }
        case 643:
            var21 = var10.Set;
            var22 = var21.prototype;
            var22 = Object.create(var22, {
                constructor: {
                    value: var21
                }
            });
            var28 = var22;
            var21 = new var28[var21](var27);
            var21 = var21 instanceof Object ? var21 : var22;
            var14 = var20.bind(var0)(var21);
        case 674:
            var20.working = var14;
            var14 = function arg0() {
                _fun16376: for (var _fun16376_ip = 0;;) switch (_fun16376_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = global;
                        var0 = var1.Set;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun16376_ip = 66;
                            continue _fun16376
                        }
                    case 24:
                        var3 = _closure1_slot14;
                        var3 = var3.working;
                        if (var3) {
                            _fun16376_ip = 52;
                            continue _fun16376
                        }
                    case 40:
                        var1 = var1.Set;
                        var1 = var4 instanceof var1;
                        _fun16376_ip = 63;
                        continue _fun16376;
                    case 52:
                        var3 = _closure1_slot14;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 63:
                        var0 = var1;
                    case 66:
                        return var0;
                }
            };
            var3.isSet = var14;
            var14 = var10.WeakMap;
            var14 = typeof var14;
            var14 = var12 !== var14;
            if (!var14) {
                _fun16344_ip = 738;
                continue _fun16344
            }
        case 707:
            var20 = var10.WeakMap;
            var21 = var20.prototype;
            var21 = Object.create(var21, {
                constructor: {
                    value: var20
                }
            });
            var28 = var21;
            var20 = new var28[var20](var27);
            var20 = var20 instanceof Object ? var20 : var21;
            var14 = var19.bind(var0)(var20);
        case 738:
            var19.working = var14;
            var14 = function arg0() {
                _fun16377: for (var _fun16377_ip = 0;;) switch (_fun16377_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = global;
                        var0 = var1.WeakMap;
                        var2 = 'undefined';
                        var0 = typeof var0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun16377_ip = 67;
                            continue _fun16377
                        }
                    case 25:
                        var3 = _closure1_slot15;
                        var3 = var3.working;
                        if (var3) {
                            _fun16377_ip = 53;
                            continue _fun16377
                        }
                    case 41:
                        var1 = var1.WeakMap;
                        var1 = var4 instanceof var1;
                        _fun16377_ip = 64;
                        continue _fun16377;
                    case 53:
                        var3 = _closure1_slot15;
                        var2 = undefined;
                        var1 = var3.bind(var2)(var4);
                    case 64:
                        var0 = var1;
                    case 67:
                        return var0;
                }
            };
            var3.isWeakMap = var14;
            var14 = var10.WeakSet;
            var14 = typeof var14;
            var14 = var12 !== var14;
            if (!var14) {
                _fun16344_ip = 802;
                continue _fun16344
            }
        case 771:
            var19 = var10.WeakSet;
            var20 = var19.prototype;
            var20 = Object.create(var20, {
                constructor: {
                    value: var19
                }
            });
            var28 = var20;
            var19 = new var28[var19](var27);
            var19 = var19 instanceof Object ? var19 : var20;
            var14 = var16.bind(var0)(var19);
        case 802:
            var16.working = var14;
            var14 = function arg0() {
                var2 = _closure1_slot16;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var3.isWeakSet = var14;
            var14 = var10.ArrayBuffer;
            var14 = typeof var14;
            var14 = var12 !== var14;
            if (!var14) {
                _fun16344_ip = 866;
                continue _fun16344
            }
        case 835:
            var16 = var10.ArrayBuffer;
            var19 = var16.prototype;
            var19 = Object.create(var19, {
                constructor: {
                    value: var16
                }
            });
            var28 = var19;
            var16 = new var28[var16](var27);
            var16 = var16 instanceof Object ? var16 : var19;
            var14 = var15.bind(var0)(var16);
        case 866:
            var15.working = var14;
            var3.isArrayBuffer = var11;
            var11 = var10.ArrayBuffer;
            var11 = typeof var11;
            var11 = var12 !== var11;
            if (!var11) {
                _fun16344_ip = 907;
                continue _fun16344
            }
        case 894:
            var14 = var10.DataView;
            var14 = typeof var14;
            var11 = var12 !== var14;
        case 907:
            if (!var11) {
                _fun16344_ip = 975;
                continue _fun16344
            }
        case 910:
            var16 = var10.DataView;
            var14 = var10.ArrayBuffer;
            var15 = var14.prototype;
            var15 = Object.create(var15, {
                constructor: {
                    value: var14
                }
            });
            var28 = var15;
            var27 = var17;
            var14 = new var28[var14](var27, var26);
            var27 = var14 instanceof Object ? var14 : var15;
            var15 = var16.prototype;
            var15 = Object.create(var15, {
                constructor: {
                    value: var16
                }
            });
            var28 = var15;
            var26 = 0;
            var25 = var17;
            var14 = new var28[var16](var27, var26, var25, var24);
            var14 = var14 instanceof Object ? var14 : var15;
            var11 = var13.bind(var0)(var14);
        case 975:
            var13.working = var11;
            var3.isDataView = var9;
            var9 = var10.SharedArrayBuffer;
            var11 = typeof var9;
            var9 = undefined;
            if (!(var12 !== var11)) {
                _fun16344_ip = 1008;
                continue _fun16344
            }
        case 1002:
            var9 = var10.SharedArrayBuffer;
        case 1008:
            var _closure1_slot11 = var9;
            var3.isSharedArrayBuffer = var8;
            var8 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object AsyncFunction]';
                var0 = var0 === var1;
                return var0;
            };
            var3.isAsyncFunction = var8;
            var8 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Map Iterator]';
                var0 = var0 === var1;
                return var0;
            };
            var3.isMapIterator = var8;
            var8 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Set Iterator]';
                var0 = var0 === var1;
                return var0;
            };
            var3.isSetIterator = var8;
            var8 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Generator]';
                var0 = var0 === var1;
                return var0;
            };
            var3.isGeneratorObject = var8;
            var8 = function arg0() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object WebAssembly.Module]';
                var0 = var0 === var1;
                return var0;
            };
            var3.isWebAssemblyCompiledModule = var8;
            var3.isNumberObject = var7;
            var3.isStringObject = var6;
            var3.isBooleanObject = var5;
            var3.isBigIntObject = var4;
            var3.isSymbolObject = var2;
            var2 = function arg0() {
                _fun16384: for (var _fun16384_ip = 0;;) switch (_fun16384_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot23;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        if (var0) {
                            _fun16384_ip = 29;
                            continue _fun16384
                        }
                    case 20:
                        var4 = _closure1_slot24;
                        var0 = var4.bind(var2)(var3);
                    case 29:
                        if (var0) {
                            _fun16384_ip = 41;
                            continue _fun16384
                        }
                    case 32:
                        var4 = _closure1_slot25;
                        var0 = var4.bind(var2)(var3);
                    case 41:
                        if (var0) {
                            _fun16384_ip = 53;
                            continue _fun16384
                        }
                    case 44:
                        var4 = _closure1_slot26;
                        var0 = var4.bind(var2)(var3);
                    case 53:
                        if (var0) {
                            _fun16384_ip = 65;
                            continue _fun16384
                        }
                    case 56:
                        var1 = _closure1_slot27;
                        var0 = var1.bind(var2)(var3);
                    case 65:
                        return var0;
                }
            };
            var3.isBoxedPrimitive = var2;
            var2 = function arg0() {
                _fun16385: for (var _fun16385_ip = 0;;) switch (_fun16385_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = global;
                        var0 = var0.Uint8Array;
                        var1 = 'undefined';
                        var0 = typeof var0;
                        var0 = var1 !== var0;
                        if (!var0) {
                            _fun16385_ip = 54;
                            continue _fun16385
                        }
                    case 25:
                        var1 = _closure1_slot18;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var4);
                        if (var1) {
                            _fun16385_ip = 51;
                            continue _fun16385
                        }
                    case 42:
                        var2 = _closure1_slot22;
                        var1 = var2.bind(var3)(var4);
                    case 51:
                        var0 = var1;
                    case 54:
                        return var0;
                }
            };
            var3.isAnyArrayBuffer = var2;
            var3 = ['isProxy', 'isExternal', 'isModuleNamespaceObject'];
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.defineProperty;
                var1 = _closure1_slot1;
                var0 = {};
                var6 = false;
                var0.enumerable = var6;
                var5 = function() {
                    var0 = global;
                    var2 = var0.Error;
                    var1 = _closure2_slot0;
                    var0 = ' is not supported in userland';
                    var3 = var1 + var0;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var0 = var2.bind(var3)(var1, var4, var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1392, 1394, 1397, 1398]);