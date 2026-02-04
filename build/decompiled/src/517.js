// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6595: for (var _fun6595_ip = 0;;) switch (_fun6595_ip) {
        case 0:
            var6 = require;
            var5 = dependencyMap;
            var4 = var6;
            var _closure1_slot0 = var6;
            var3 = var5;
            var _closure1_slot1 = var5;
            var0 = undefined;
            var8 = undefined;
            var2 = global;
            var13 = var2.Function;
            var _closure1_slot2 = var13;
            var7 = function arg0() {
                _fun6596: for (var _fun6596_ip = 0;;) switch (_fun6596_ip) {
                    case 0:
                        var0 = arg0;
                    case 3: // try_start_0
                        var2 = _closure1_slot2;
                        var1 = var0;
                        var0 = '"use strict"; return (';
                        var3 = var0 + var1;
                        var1 = undefined;
                        var0 = ').constructor;';
                        var0 = var3 + var0;
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                    case 44: // try_end0
                        return var0;
                    case 46: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot3 = var7;
            var12 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var4 = var1;
                var0 = new var4[var0](var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
            var _closure1_slot4 = var12;
            var14 = 1;
            var5 = var5[var14];
            var5 = var6.bind(var0)(var5);
            if (!var5) {
                _fun6595_ip = 80;
                continue _fun6595
            }
        case 71:
            var5 = function() { // Environment: var1
                _fun6598: for (var _fun6598_ip = 0;;) switch (_fun6598_ip) {
                    case 0:
                        var3 = undefined;
                        var0 = undefined;
                    case 4: // try_start_0
                        var1 = _closure1_slot4;
                    case 11: // try_end0
                        return var1;
                    case 13: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 15: // try_start_1
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var0 = arguments;
                        var1 = var0;
                        var0 = 'callee';
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = var0.get;
                    case 58: // try_end1
                        return var0;
                    case 60: // catch_target1
                        CatchBlockStart(arg_register = 0);
                        var0 = _closure1_slot4;
                        return var0;
                }
            };
            var12 = var5.bind(var0)();
        case 80:
            var6 = var4;
            var7 = var3;
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var10 = var5.bind(var0)();
            var7 = {};
            var _closure1_slot5 = var7;
            var5 = var2.Uint8Array;
            var9 = 'undefined';
            var6 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var6)) {
                _fun6595_ip = 176;
                continue _fun6595
            }
        case 127:
            var11 = var4;
            var6 = var3;
            var15 = 3;
            var6 = var6[var15];
            var6 = var11.bind(var0)(var6);
            var5 = undefined;
            if (!var6) {
                _fun6595_ip = 176;
                continue _fun6595
            }
        case 150:
            var11 = var4;
            var6 = var3;
            var6 = var6[var15];
            var11 = var11.bind(var0)(var6);
            var6 = var2.Uint8Array;
            var5 = var11.bind(var0)(var6);
        case 176:
            var6 = null;
            var11 = Object.create(var6);
            var15 = var2.AggregateError;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 202;
                continue _fun6595
            }
        case 196:
            var15 = var2.AggregateError;
        case 202:
            var11['%AggregateError%'] = var15;
            var15 = var2.Array;
            var11['%Array%'] = var15;
            var15 = var2.ArrayBuffer;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 239;
                continue _fun6595
            }
        case 233:
            var15 = var2.ArrayBuffer;
        case 239:
            var11['%ArrayBuffer%'] = var15;
            var15 = undefined;
            if (!var10) {
                _fun6595_ip = 316;
                continue _fun6595
            }
        case 249:
            var17 = var4;
            var16 = var3;
            var18 = 3;
            var16 = var16[var18];
            var16 = var17.bind(var0)(var16);
            var15 = undefined;
            if (!var16) {
                _fun6595_ip = 316;
                continue _fun6595
            }
        case 272:
            var17 = var4;
            var16 = var3;
            var16 = var16[var18];
            var17 = var17.bind(var0)(var16);
            var18 = new Array(0);
            var16 = var2.Symbol;
            var16 = var16.iterator;
            var16 = var18[var16];
            var16 = var16.bind(var18)();
            var15 = var17.bind(var0)(var16);
        case 316:
            var11['%ArrayIteratorPrototype%'] = var15;
            var11['%AsyncFromSyncIteratorPrototype%'] = var0;
            var11['%AsyncFunction%'] = var7;
            var11['%AsyncGenerator%'] = var7;
            var11['%AsyncGeneratorFunction%'] = var7;
            var11['%AsyncIteratorPrototype%'] = var7;
            var15 = var2.Atomics;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 367;
                continue _fun6595
            }
        case 361:
            var15 = var2.Atomics;
        case 367:
            var11['%Atomics%'] = var15;
            var15 = var2.BigInt;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 393;
                continue _fun6595
            }
        case 387:
            var15 = var2.BigInt;
        case 393:
            var11['%BigInt%'] = var15;
            var15 = var2.BigInt64Array;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 419;
                continue _fun6595
            }
        case 413:
            var15 = var2.BigInt64Array;
        case 419:
            var11['%BigInt64Array%'] = var15;
            var15 = var2.BigUint64Array;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 445;
                continue _fun6595
            }
        case 439:
            var15 = var2.BigUint64Array;
        case 445:
            var11['%BigUint64Array%'] = var15;
            var15 = var2.Boolean;
            var11['%Boolean%'] = var15;
            var15 = var2.DataView;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 482;
                continue _fun6595
            }
        case 476:
            var15 = var2.DataView;
        case 482:
            var11['%DataView%'] = var15;
            var15 = var2.Date;
            var11['%Date%'] = var15;
            var15 = var2.decodeURI;
            var11['%decodeURI%'] = var15;
            var15 = var2.decodeURIComponent;
            var11['%decodeURIComponent%'] = var15;
            var15 = var2.encodeURI;
            var11['%encodeURI%'] = var15;
            var15 = var2.encodeURIComponent;
            var11['%encodeURIComponent%'] = var15;
            var16 = var4;
            var17 = var3;
            var15 = 4;
            var15 = var17[var15];
            var15 = var16.bind(var0)(var15);
            var11['%Error%'] = var15;
            var15 = var2.eval;
            var11['%eval%'] = var15;
            var15 = 5;
            var15 = var17[var15];
            var15 = var16.bind(var0)(var15);
            var11['%EvalError%'] = var15;
            var15 = var2.Float16Array;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 614;
                continue _fun6595
            }
        case 608:
            var15 = var2.Float16Array;
        case 614:
            var11['%Float16Array%'] = var15;
            var15 = var2.Float32Array;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 640;
                continue _fun6595
            }
        case 634:
            var15 = var2.Float32Array;
        case 640:
            var11['%Float32Array%'] = var15;
            var15 = var2.Float64Array;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 666;
                continue _fun6595
            }
        case 660:
            var15 = var2.Float64Array;
        case 666:
            var11['%Float64Array%'] = var15;
            var15 = var2.FinalizationRegistry;
            var16 = typeof var15;
            var15 = undefined;
            if (!(var9 !== var16)) {
                _fun6595_ip = 692;
                continue _fun6595
            }
        case 686:
            var15 = var2.FinalizationRegistry;
        case 692:
            var11['%FinalizationRegistry%'] = var15;
            var11['%Function%'] = var13;
            var11['%GeneratorFunction%'] = var7;
            var7 = var2.Int8Array;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 728;
                continue _fun6595
            }
        case 722:
            var7 = var2.Int8Array;
        case 728:
            var11['%Int8Array%'] = var7;
            var7 = var2.Int16Array;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 754;
                continue _fun6595
            }
        case 748:
            var7 = var2.Int16Array;
        case 754:
            var11['%Int16Array%'] = var7;
            var7 = var2.Int32Array;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 780;
                continue _fun6595
            }
        case 774:
            var7 = var2.Int32Array;
        case 780:
            var11['%Int32Array%'] = var7;
            var7 = var2.isFinite;
            var11['%isFinite%'] = var7;
            var7 = var2.isNaN;
            var11['%isNaN%'] = var7;
            var7 = undefined;
            if (!var10) {
                _fun6595_ip = 893;
                continue _fun6595
            }
        case 812:
            var15 = var4;
            var13 = var3;
            var17 = 3;
            var13 = var13[var17];
            var13 = var15.bind(var0)(var13);
            var7 = undefined;
            if (!var13) {
                _fun6595_ip = 893;
                continue _fun6595
            }
        case 835:
            var16 = var4;
            var13 = var3;
            var15 = var13[var17];
            var15 = var16.bind(var0)(var15);
            var13 = var13[var17];
            var16 = var16.bind(var0)(var13);
            var17 = new Array(0);
            var13 = var2.Symbol;
            var13 = var13.iterator;
            var13 = var17[var13];
            var13 = var13.bind(var17)();
            var13 = var16.bind(var0)(var13);
            var7 = var15.bind(var0)(var13);
        case 893:
            var11['%IteratorPrototype%'] = var7;
            var7 = var2.JSON;
            var15 = 'object';
            var13 = typeof var7;
            var7 = undefined;
            if (!(var15 === var13)) {
                _fun6595_ip = 923;
                continue _fun6595
            }
        case 917:
            var7 = var2.JSON;
        case 923:
            var11['%JSON%'] = var7;
            var7 = var2.Map;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 948;
                continue _fun6595
            }
        case 942:
            var7 = var2.Map;
        case 948:
            var11['%Map%'] = var7;
            var7 = var2.Map;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1061;
                continue _fun6595
            }
        case 967:
            var7 = undefined;
            if (!var10) {
                _fun6595_ip = 1061;
                continue _fun6595
            }
        case 972:
            var15 = var4;
            var13 = var3;
            var16 = 3;
            var13 = var13[var16];
            var13 = var15.bind(var0)(var13);
            var7 = undefined;
            if (!var13) {
                _fun6595_ip = 1061;
                continue _fun6595
            }
        case 995:
            var15 = var4;
            var13 = var3;
            var13 = var13[var16];
            var15 = var15.bind(var0)(var13);
            var13 = var2.Map;
            var16 = var13.prototype;
            var16 = Object.create(var16, {
                constructor: {
                    value: var13
                }
            });
            var21 = var16;
            var13 = new var21[var13](var20);
            var16 = var13 instanceof Object ? var13 : var16;
            var13 = var2.Symbol;
            var13 = var13.iterator;
            var13 = var16[var13];
            var13 = var13.bind(var16)();
            var7 = var15.bind(var0)(var13);
        case 1061:
            var11['%MapIteratorPrototype%'] = var7;
            var7 = var2.Math;
            var11['%Math%'] = var7;
            var7 = var2.Number;
            var11['%Number%'] = var7;
            var13 = var4;
            var7 = var3;
            var15 = 6;
            var15 = var7[var15];
            var15 = var13.bind(var0)(var15);
            var11['%Object%'] = var15;
            var7 = var7[var14];
            var7 = var13.bind(var0)(var7);
            var11['%Object.getOwnPropertyDescriptor%'] = var7;
            var7 = var2.parseFloat;
            var11['%parseFloat%'] = var7;
            var7 = var2.parseInt;
            var11['%parseInt%'] = var7;
            var7 = var2.Promise;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1167;
                continue _fun6595
            }
        case 1161:
            var7 = var2.Promise;
        case 1167:
            var11['%Promise%'] = var7;
            var7 = var2.Proxy;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1193;
                continue _fun6595
            }
        case 1187:
            var7 = var2.Proxy;
        case 1193:
            var11['%Proxy%'] = var7;
            var13 = var4;
            var14 = var3;
            var7 = 7;
            var7 = var14[var7];
            var7 = var13.bind(var0)(var7);
            var11['%RangeError%'] = var7;
            var7 = 8;
            var7 = var14[var7];
            var7 = var13.bind(var0)(var7);
            var11['%ReferenceError%'] = var7;
            var7 = var2.Reflect;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1258;
                continue _fun6595
            }
        case 1252:
            var7 = var2.Reflect;
        case 1258:
            var11['%Reflect%'] = var7;
            var7 = var2.RegExp;
            var11['%RegExp%'] = var7;
            var7 = var2.Set;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1294;
                continue _fun6595
            }
        case 1288:
            var7 = var2.Set;
        case 1294:
            var11['%Set%'] = var7;
            var7 = var2.Set;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1407;
                continue _fun6595
            }
        case 1313:
            var7 = undefined;
            if (!var10) {
                _fun6595_ip = 1407;
                continue _fun6595
            }
        case 1318:
            var14 = var4;
            var13 = var3;
            var15 = 3;
            var13 = var13[var15];
            var13 = var14.bind(var0)(var13);
            var7 = undefined;
            if (!var13) {
                _fun6595_ip = 1407;
                continue _fun6595
            }
        case 1341:
            var14 = var4;
            var13 = var3;
            var13 = var13[var15];
            var14 = var14.bind(var0)(var13);
            var13 = var2.Set;
            var15 = var13.prototype;
            var15 = Object.create(var15, {
                constructor: {
                    value: var13
                }
            });
            var21 = var15;
            var13 = new var21[var13](var20);
            var15 = var13 instanceof Object ? var13 : var15;
            var13 = var2.Symbol;
            var13 = var13.iterator;
            var13 = var15[var13];
            var13 = var13.bind(var15)();
            var7 = var14.bind(var0)(var13);
        case 1407:
            var11['%SetIteratorPrototype%'] = var7;
            var7 = var2.SharedArrayBuffer;
            var13 = typeof var7;
            var7 = undefined;
            if (!(var9 !== var13)) {
                _fun6595_ip = 1433;
                continue _fun6595
            }
        case 1427:
            var7 = var2.SharedArrayBuffer;
        case 1433:
            var11['%SharedArrayBuffer%'] = var7;
            var7 = var2.String;
            var11['%String%'] = var7;
            var7 = undefined;
            if (!var10) {
                _fun6595_ip = 1521;
                continue _fun6595
            }
        case 1454:
            var14 = var4;
            var13 = var3;
            var15 = 3;
            var13 = var13[var15];
            var13 = var14.bind(var0)(var13);
            var7 = undefined;
            if (!var13) {
                _fun6595_ip = 1521;
                continue _fun6595
            }
        case 1477:
            var14 = var4;
            var13 = var3;
            var13 = var13[var15];
            var14 = var14.bind(var0)(var13);
            var13 = var2.Symbol;
            var13 = var13.iterator;
            var15 = '';
            var13 = var15[var13];
            var13 = var13.bind(var15)();
            var7 = var14.bind(var0)(var13);
        case 1521:
            var11['%StringIteratorPrototype%'] = var7;
            var7 = undefined;
            if (!var10) {
                _fun6595_ip = 1537;
                continue _fun6595
            }
        case 1531:
            var7 = var2.Symbol;
        case 1537:
            var11['%Symbol%'] = var7;
            var7 = var4;
            var10 = var3;
            var13 = 9;
            var13 = var10[var13];
            var13 = var7.bind(var0)(var13);
            var11['%SyntaxError%'] = var13;
            var11['%ThrowTypeError%'] = var12;
            var11['%TypedArray%'] = var5;
            var5 = 0;
            var5 = var10[var5];
            var5 = var7.bind(var0)(var5);
            var11['%TypeError%'] = var5;
            var5 = var2.Uint8Array;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1612;
                continue _fun6595
            }
        case 1606:
            var5 = var2.Uint8Array;
        case 1612:
            var11['%Uint8Array%'] = var5;
            var5 = var2.Uint8ClampedArray;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1638;
                continue _fun6595
            }
        case 1632:
            var5 = var2.Uint8ClampedArray;
        case 1638:
            var11['%Uint8ClampedArray%'] = var5;
            var5 = var2.Uint16Array;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1664;
                continue _fun6595
            }
        case 1658:
            var5 = var2.Uint16Array;
        case 1664:
            var11['%Uint16Array%'] = var5;
            var5 = var2.Uint32Array;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1690;
                continue _fun6595
            }
        case 1684:
            var5 = var2.Uint32Array;
        case 1690:
            var11['%Uint32Array%'] = var5;
            var7 = var4;
            var10 = var3;
            var5 = 10;
            var5 = var10[var5];
            var5 = var7.bind(var0)(var5);
            var11['%URIError%'] = var5;
            var5 = var2.WeakMap;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1739;
                continue _fun6595
            }
        case 1733:
            var5 = var2.WeakMap;
        case 1739:
            var11['%WeakMap%'] = var5;
            var5 = var2.WeakRef;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1765;
                continue _fun6595
            }
        case 1759:
            var5 = var2.WeakRef;
        case 1765:
            var11['%WeakRef%'] = var5;
            var5 = var2.WeakSet;
            var7 = typeof var5;
            var5 = undefined;
            if (!(var9 !== var7)) {
                _fun6595_ip = 1791;
                continue _fun6595
            }
        case 1785:
            var5 = var2.WeakSet;
        case 1791:
            var11['%WeakSet%'] = var5;
            var10 = var4;
            var9 = var3;
            var7 = 11;
            var5 = var9[var7];
            var5 = var10.bind(var0)(var5);
            var11['%Function.prototype.call%'] = var5;
            var5 = 12;
            var12 = var9[var5];
            var12 = var10.bind(var0)(var12);
            var11['%Function.prototype.apply%'] = var12;
            var12 = 13;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Object.defineProperty%'] = var12;
            var12 = 14;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Object.getPrototypeOf%'] = var12;
            var12 = 15;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.abs%'] = var12;
            var12 = 16;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.floor%'] = var12;
            var12 = 17;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.max%'] = var12;
            var12 = 18;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.min%'] = var12;
            var12 = 19;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.pow%'] = var12;
            var12 = 20;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.round%'] = var12;
            var12 = 21;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Math.sign%'] = var12;
            var12 = 22;
            var12 = var9[var12];
            var12 = var10.bind(var0)(var12);
            var11['%Reflect.getPrototypeOf%'] = var12;
            var8 = var11;
            var _closure1_slot6 = var11;
            var13 = 3;
            var9 = var9[var13];
            var9 = var10.bind(var0)(var9);
            if (!var9) {
                _fun6595_ip = 2077;
                continue _fun6595
            }
        case 2028: // try_start_0
            var9 = var6.error;
        case 2033: // try_end0
            _fun6595_ip = 2077;
            continue _fun6595;
        case 2035: // catch_target0
            CatchBlockStart(arg_register = 11);
            var12 = var4;
            var9 = var3;
            var10 = var9[var13];
            var10 = var12.bind(var0)(var10);
            var9 = var9[var13];
            var9 = var12.bind(var0)(var9);
            var9 = var9.bind(var0)(var11);
            var9 = var10.bind(var0)(var9);
            var8['%Error.prototype%'] = var9;
        case 2077:
            var8 = function arg0() {
                _fun6599: for (var _fun6599_ip = 0;;) switch (_fun6599_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = '%AsyncFunction%';
                        if (!(var0 !== var2)) {
                            _fun6599_ip = 207;
                            continue _fun6599
                        }
                    case 14:
                        var0 = '%GeneratorFunction%';
                        if (!(var0 !== var2)) {
                            _fun6599_ip = 185;
                            continue _fun6599
                        }
                    case 25:
                        var4 = '%AsyncGeneratorFunction%';
                        if (!(var4 !== var2)) {
                            _fun6599_ip = 163;
                            continue _fun6599
                        }
                    case 36:
                        var6 = '%AsyncGenerator%';
                        if (!(var6 !== var2)) {
                            _fun6599_ip = 137;
                            continue _fun6599
                        }
                    case 44:
                        var5 = undefined;
                        var1 = '%AsyncIteratorPrototype%';
                        var0 = undefined;
                        if (!(var1 === var2)) {
                            _fun6599_ip = 227;
                            continue _fun6599
                        }
                    case 59:
                        var1 = _closure1_slot17;
                        var1 = var1.bind(var5)(var6);
                        var6 = var1;
                        if (!var6) {
                            _fun6599_ip = 97;
                            continue _fun6599
                        }
                    case 77:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var7 = 3;
                        var7 = var9[var7];
                        var6 = var8.bind(var5)(var7);
                    case 97:
                        var0 = undefined;
                        if (!var6) {
                            _fun6599_ip = 227;
                            continue _fun6599
                        }
                    case 105:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var6.bind(var5)(var3);
                        var1 = var1.prototype;
                        var0 = var3.bind(var5)(var1);
                        _fun6599_ip = 227;
                        continue _fun6599;
                    case 137:
                        var1 = _closure1_slot17;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var4);
                        var0 = undefined;
                        if (!var1) {
                            _fun6599_ip = 227;
                            continue _fun6599
                        }
                    case 156:
                        var0 = var1.prototype;
                        _fun6599_ip = 227;
                        continue _fun6599;
                    case 163:
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var1 = 'async function* () {}';
                        var0 = var4.bind(var3)(var1);
                        _fun6599_ip = 227;
                        continue _fun6599;
                    case 185:
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var1 = 'function* () {}';
                        var0 = var4.bind(var3)(var1);
                        _fun6599_ip = 227;
                        continue _fun6599;
                    case 207:
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var1 = 'async function () {}';
                        var0 = var4.bind(var3)(var1);
                    case 227:
                        var1 = _closure1_slot6;
                        var1[var2] = var0;
                        return var0;
                }
            };
            var _closure1_slot17 = var8;
            var _closure1_slot7 = var8;
            var6 = Object.create(var6);
            var8 = ['ArrayBuffer', 'prototype'];
            var6['%ArrayBufferPrototype%'] = var8;
            var8 = ['Array', 'prototype'];
            var6['%ArrayPrototype%'] = var8;
            var8 = ['Array', 'prototype', 'entries'];
            var6['%ArrayProto_entries%'] = var8;
            var8 = ['Array', 'prototype', 'forEach'];
            var6['%ArrayProto_forEach%'] = var8;
            var8 = ['Array', 'prototype', 'keys'];
            var6['%ArrayProto_keys%'] = var8;
            var8 = ['Array', 'prototype', 'values'];
            var6['%ArrayProto_values%'] = var8;
            var8 = ['AsyncFunction', 'prototype'];
            var6['%AsyncFunctionPrototype%'] = var8;
            var8 = ['AsyncGeneratorFunction', 'prototype'];
            var6['%AsyncGenerator%'] = var8;
            var8 = ['AsyncGeneratorFunction', 'prototype', 'prototype'];
            var6['%AsyncGeneratorPrototype%'] = var8;
            var8 = ['Boolean', 'prototype'];
            var6['%BooleanPrototype%'] = var8;
            var8 = ['DataView', 'prototype'];
            var6['%DataViewPrototype%'] = var8;
            var8 = ['Date', 'prototype'];
            var6['%DatePrototype%'] = var8;
            var8 = ['Error', 'prototype'];
            var6['%ErrorPrototype%'] = var8;
            var8 = ['EvalError', 'prototype'];
            var6['%EvalErrorPrototype%'] = var8;
            var8 = ['Float32Array', 'prototype'];
            var6['%Float32ArrayPrototype%'] = var8;
            var8 = ['Float64Array', 'prototype'];
            var6['%Float64ArrayPrototype%'] = var8;
            var8 = ['Function', 'prototype'];
            var6['%FunctionPrototype%'] = var8;
            var8 = ['GeneratorFunction', 'prototype'];
            var6['%Generator%'] = var8;
            var8 = ['GeneratorFunction', 'prototype', 'prototype'];
            var6['%GeneratorPrototype%'] = var8;
            var8 = ['Int8Array', 'prototype'];
            var6['%Int8ArrayPrototype%'] = var8;
            var8 = ['Int16Array', 'prototype'];
            var6['%Int16ArrayPrototype%'] = var8;
            var8 = ['Int32Array', 'prototype'];
            var6['%Int32ArrayPrototype%'] = var8;
            var8 = ['JSON', 'parse'];
            var6['%JSONParse%'] = var8;
            var8 = ['JSON', 'stringify'];
            var6['%JSONStringify%'] = var8;
            var8 = ['Map', 'prototype'];
            var6['%MapPrototype%'] = var8;
            var8 = ['Number', 'prototype'];
            var6['%NumberPrototype%'] = var8;
            var8 = ['Object', 'prototype'];
            var6['%ObjectPrototype%'] = var8;
            var8 = ['Object', 'prototype', 'toString'];
            var6['%ObjProto_toString%'] = var8;
            var8 = ['Object', 'prototype', 'valueOf'];
            var6['%ObjProto_valueOf%'] = var8;
            var8 = ['Promise', 'prototype'];
            var6['%PromisePrototype%'] = var8;
            var8 = ['Promise', 'prototype', 'then'];
            var6['%PromiseProto_then%'] = var8;
            var8 = ['Promise', 'all'];
            var6['%Promise_all%'] = var8;
            var8 = ['Promise', 'reject'];
            var6['%Promise_reject%'] = var8;
            var8 = ['Promise', 'resolve'];
            var6['%Promise_resolve%'] = var8;
            var8 = ['RangeError', 'prototype'];
            var6['%RangeErrorPrototype%'] = var8;
            var8 = ['ReferenceError', 'prototype'];
            var6['%ReferenceErrorPrototype%'] = var8;
            var8 = ['RegExp', 'prototype'];
            var6['%RegExpPrototype%'] = var8;
            var8 = ['Set', 'prototype'];
            var6['%SetPrototype%'] = var8;
            var8 = ['SharedArrayBuffer', 'prototype'];
            var6['%SharedArrayBufferPrototype%'] = var8;
            var8 = ['String', 'prototype'];
            var6['%StringPrototype%'] = var8;
            var8 = ['Symbol', 'prototype'];
            var6['%SymbolPrototype%'] = var8;
            var8 = ['SyntaxError', 'prototype'];
            var6['%SyntaxErrorPrototype%'] = var8;
            var8 = ['TypedArray', 'prototype'];
            var6['%TypedArrayPrototype%'] = var8;
            var8 = ['TypeError', 'prototype'];
            var6['%TypeErrorPrototype%'] = var8;
            var8 = ['Uint8Array', 'prototype'];
            var6['%Uint8ArrayPrototype%'] = var8;
            var8 = ['Uint8ClampedArray', 'prototype'];
            var6['%Uint8ClampedArrayPrototype%'] = var8;
            var8 = ['Uint16Array', 'prototype'];
            var6['%Uint16ArrayPrototype%'] = var8;
            var8 = ['Uint32Array', 'prototype'];
            var6['%Uint32ArrayPrototype%'] = var8;
            var8 = ['URIError', 'prototype'];
            var6['%URIErrorPrototype%'] = var8;
            var8 = ['WeakMap', 'prototype'];
            var6['%WeakMapPrototype%'] = var8;
            var8 = ['WeakSet', 'prototype'];
            var6['%WeakSetPrototype%'] = var8;
            var _closure1_slot8 = var6;
            var6 = var4;
            var4 = 23;
            var8 = var3[var4];
            var11 = var6.bind(var0)(var8);
            var10 = var11.call;
            var8 = var3[var7];
            var9 = var6.bind(var0)(var8);
            var8 = var2.Array;
            var8 = var8.prototype;
            var8 = var8.concat;
            var8 = var10.bind(var11)(var9, var8);
            var _closure1_slot9 = var8;
            var8 = var3[var4];
            var10 = var6.bind(var0)(var8);
            var9 = var10.call;
            var5 = var3[var5];
            var8 = var6.bind(var0)(var5);
            var5 = var2.Array;
            var5 = var5.prototype;
            var5 = var5.splice;
            var5 = var9.bind(var10)(var8, var5);
            var _closure1_slot10 = var5;
            var5 = var3[var4];
            var10 = var6.bind(var0)(var5);
            var9 = var10.call;
            var5 = var3[var7];
            var8 = var6.bind(var0)(var5);
            var5 = var2.String;
            var5 = var5.prototype;
            var5 = var5.replace;
            var5 = var9.bind(var10)(var8, var5);
            var _closure1_slot11 = var5;
            var5 = var3[var4];
            var10 = var6.bind(var0)(var5);
            var9 = var10.call;
            var5 = var3[var7];
            var8 = var6.bind(var0)(var5);
            var5 = var2.String;
            var5 = var5.prototype;
            var5 = var5.slice;
            var5 = var9.bind(var10)(var8, var5);
            var _closure1_slot12 = var5;
            var4 = var3[var4];
            var5 = var6.bind(var0)(var4);
            var4 = var5.call;
            var3 = var3[var7];
            var3 = var6.bind(var0)(var3);
            var2 = var2.RegExp;
            var2 = var2.prototype;
            var2 = var2.exec;
            var2 = var4.bind(var5)(var3, var2);
            var _closure1_slot13 = var2;
            var2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var _closure1_slot14 = var2;
            var2 = /\\(\\)?/g;
            var _closure1_slot15 = var2;
            var2 = function arg0, arg1() {
                _fun6600: for (var _fun6600_ip = 0;;) switch (_fun6600_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var7 = 24;
                        var1 = var1[var7];
                        var6 = undefined;
                        var2 = var2.bind(var6)(var1);
                        var1 = _closure1_slot8;
                        var1 = var2.bind(var6)(var1, var4);
                        var3 = undefined;
                        var2 = var4;
                        if (!var1) {
                            _fun6600_ip = 75;
                            continue _fun6600
                        }
                    case 46:
                        var1 = _closure1_slot8;
                        var5 = var1[var4];
                        var1 = 0;
                        var1 = var5[var1];
                        var8 = '%';
                        var1 = var8 + var1;
                        var2 = var1 + var8;
                        var3 = var5;
                    case 75:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var7];
                        var5 = var5.bind(var6)(var1);
                        var1 = _closure1_slot6;
                        var1 = var5.bind(var6)(var1, var2);
                        if (var1) {
                            _fun6600_ip = 167;
                            continue _fun6600
                        }
                    case 105:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 9;
                        var1 = var7[var1];
                        var7 = var5.bind(var6)(var1);
                        var1 = 'intrinsic ';
                        var8 = var1 + var4;
                        var1 = var7.prototype;
                        var5 = Object.create(var1, {
                            constructor: {
                                value: var7
                            }
                        });
                        var1 = ' does not exist!';
                        var10 = var8 + var1;
                        var11 = var5;
                        var1 = new var11[var7](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var5;
                        throw var1;
                    case 167:
                        var1 = _closure1_slot6;
                        var1 = var1[var2];
                        var5 = _closure1_slot5;
                        if (!(var1 === var5)) {
                            _fun6600_ip = 192;
                            continue _fun6600
                        }
                    case 183:
                        var5 = _closure1_slot7;
                        var1 = var5.bind(var6)(var2);
                    case 192:
                        if (!(var6 === var1)) {
                            _fun6600_ip = 263;
                            continue _fun6600
                        }
                    case 196:
                        var5 = arg1;
                        if (var5) {
                            _fun6600_ip = 263;
                            continue _fun6600
                        }
                    case 202:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var0 = 0;
                        var0 = var7[var0];
                        var5 = var5.bind(var6)(var0);
                        var0 = 'intrinsic ';
                        var6 = var0 + var4;
                        var0 = var5.prototype;
                        var4 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var0 = ' exists, but is not available. Please file an issue!';
                        var10 = var6 + var0;
                        var11 = var4;
                        var0 = new var11[var5](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var4;
                        throw var0;
                    case 263:
                        var0 = {};
                        var0.alias = var3;
                        var0.name = var2;
                        var0.value = var1;
                        return var0;
                }
            };
            var _closure1_slot16 = var2;
            var2 = function arg0, arg1() {
                _fun6601: for (var _fun6601_ip = 0;;) switch (_fun6601_ip) {
                    case 0:
                        var26 = arg0;
                        var25 = arg1;
                        var2 = undefined;
                        var0 = undefined;
                        var3 = 'string';
                        var1 = typeof var26;
                        if (!(var3 === var1)) {
                            _fun6601_ip = 845;
                            continue _fun6601
                        }
                    case 24:
                        var1 = var26.length;
                        var3 = 0;
                        if (!(var3 !== var1)) {
                            _fun6601_ip = 845;
                            continue _fun6601
                        }
                    case 38:
                        var0 = arguments.length;
                        var24 = 1;
                        if (!(var0 > var24)) {
                            _fun6601_ip = 62;
                            continue _fun6601
                        }
                    case 48:
                        var1 = 'boolean';
                        var0 = typeof var25;
                        if (!(var1 === var0)) {
                            _fun6601_ip = 797;
                            continue _fun6601
                        }
                    case 62:
                        var4 = _closure1_slot13;
                        var1 = /^%?[^%]*%?$/;
                        var1 = var4.bind(var2)(var1, var26);
                        var23 = null;
                        if (!(var23 !== var1)) {
                            _fun6601_ip = 749;
                            continue _fun6601
                        }
                    case 98:
                        var1 = function arg0() {
                            _fun6602: for (var _fun6602_ip = 0;;) switch (_fun6602_ip) {
                                case 0:
                                    var6 = arg0;
                                    var5 = _closure1_slot12;
                                    var2 = undefined;
                                    var4 = 0;
                                    var1 = 1;
                                    var4 = var5.bind(var2)(var6, var4, var1);
                                    var5 = _closure1_slot12;
                                    var1 = -1;
                                    var5 = var5.bind(var2)(var6, var1);
                                    var1 = '%';
                                    if (!(var1 === var4)) {
                                        _fun6602_ip = 54;
                                        continue _fun6602
                                    }
                                case 50:
                                    if (!(var1 === var5)) {
                                        _fun6602_ip = 140;
                                        continue _fun6602
                                    }
                                case 54:
                                    if (!(var1 === var5)) {
                                        _fun6602_ip = 62;
                                        continue _fun6602
                                    }
                                case 58:
                                    if (!(var1 === var4)) {
                                        _fun6602_ip = 92;
                                        continue _fun6602
                                    }
                                case 62:
                                    var1 = new Array(0);
                                    var _closure3_slot0 = var1;
                                    var5 = _closure1_slot11;
                                    var4 = _closure1_slot14;
                                    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                                        _fun6603: for (var _fun6603_ip = 0;;) switch (_fun6603_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var2 = arg1;
                                                var1 = _closure3_slot0;
                                                var0 = var1.length;
                                                var4 = arg2;
                                                if (var4) {
                                                    _fun6603_ip = 32;
                                                    continue _fun6603
                                                }
                                            case 24:
                                                if (var2) {
                                                    _fun6603_ip = 30;
                                                    continue _fun6603
                                                }
                                            case 27:
                                                var2 = var3;
                                            case 30:
                                                _fun6603_ip = 61;
                                                continue _fun6603;
                                            case 32:
                                                var7 = _closure1_slot11;
                                                var6 = _closure1_slot15;
                                                var5 = undefined;
                                                var4 = arg3;
                                                var3 = '$1';
                                                var2 = var7.bind(var5)(var4, var6, var3);
                                            case 61:
                                                var1[var0] = var2;
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = var5.bind(var2)(var6, var4, var3);
                                    return var1;
                                case 92:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot1;
                                    var1 = 9;
                                    var1 = var4[var1];
                                    var4 = var3.bind(var2)(var1);
                                    var1 = var4.prototype;
                                    var3 = Object.create(var1, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var10 = 'invalid intrinsic syntax, expected opening `%`';
                                    var11 = var3;
                                    var1 = new var11[var4](var10, var9);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    throw var1;
                                case 140:
                                    var1 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var0 = 9;
                                    var0 = var3[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var10 = 'invalid intrinsic syntax, expected closing `%`';
                                    var11 = var1;
                                    var0 = new var11[var2](var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var22 = var1.bind(var2)(var26);
                        var1 = var22.length;
                        var1 = var1 > var3;
                        var21 = '';
                        if (!var1) {
                            _fun6601_ip = 130;
                            continue _fun6601
                        }
                    case 126:
                        var21 = var22[var3];
                    case 130:
                        var4 = _closure1_slot16;
                        var20 = '%';
                        var1 = var20 + var21;
                        var1 = var1 + var20;
                        var4 = var4.bind(var2)(var1, var25);
                        var1 = var4.name;
                        var1 = var4.value;
                        var8 = var4.alias;
                        if (!var8) {
                            _fun6601_ip = 205;
                            continue _fun6601
                        }
                    case 171:
                        var21 = var8[var3];
                        var6 = _closure1_slot10;
                        var7 = _closure1_slot9;
                        var5 = [0, 1];
                        var5 = var7.bind(var2)(var5, var8);
                        var5 = var6.bind(var2)(var22, var5);
                    case 205:
                        var4 = var22.length;
                        var4 = var24 < var4;
                        var17 = 'originalValue';
                        var16 = 'get';
                        var15 = 24;
                        var14 = '.';
                        var13 = 'constructor';
                        var12 = '`';
                        var11 = "'";
                        var10 = '"';
                        var9 = -1;
                        var8 = var1;
                        var19 = false;
                        var7 = var24;
                        var6 = true;
                        var5 = undefined;
                        var1 = var8;
                        if (!var4) {
                            _fun6601_ip = 699;
                            continue _fun6601
                        }
                    case 274:
                        var36 = var22[var7];
                        var4 = _closure1_slot12;
                        var27 = var4.bind(var2)(var36, var3, var24);
                        var4 = _closure1_slot12;
                        var4 = var4.bind(var2)(var36, var9);
                        if (!(var10 !== var27)) {
                            _fun6601_ip = 323;
                            continue _fun6601
                        }
                    case 303:
                        if (!(var11 !== var27)) {
                            _fun6601_ip = 323;
                            continue _fun6601
                        }
                    case 307:
                        if (!(var12 !== var27)) {
                            _fun6601_ip = 323;
                            continue _fun6601
                        }
                    case 311:
                        if (!(var10 !== var4)) {
                            _fun6601_ip = 323;
                            continue _fun6601
                        }
                    case 315:
                        if (!(var11 !== var4)) {
                            _fun6601_ip = 323;
                            continue _fun6601
                        }
                    case 319:
                        if (!(var12 === var4)) {
                            _fun6601_ip = 330;
                            continue _fun6601
                        }
                    case 323:
                        if (!(var27 === var4)) {
                            _fun6601_ip = 701;
                            continue _fun6601
                        }
                    case 330:
                        var4 = var13 !== var36;
                        if (!var4) {
                            _fun6601_ip = 340;
                            continue _fun6601
                        }
                    case 337:
                        var4 = var6;
                    case 340:
                        if (var4) {
                            _fun6601_ip = 345;
                            continue _fun6601
                        }
                    case 343:
                        var19 = true;
                    case 345:
                        var4 = var14 + var36;
                        var21 = var21 + var4;
                        var4 = var20 + var21;
                        var30 = var4 + var20;
                        var27 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var15];
                        var27 = var27.bind(var2)(var4);
                        var4 = _closure1_slot6;
                        var4 = var27.bind(var2)(var4, var30);
                        if (var4) {
                            _fun6601_ip = 657;
                            continue _fun6601
                        }
                    case 394:
                        var29 = var6;
                        var28 = var5;
                        var27 = var8;
                        if (!(var23 != var27)) {
                            _fun6601_ip = 671;
                            continue _fun6601
                        }
                    case 410:
                        var4 = var36 in var8;
                        if (var4) {
                            _fun6601_ip = 481;
                            continue _fun6601
                        }
                    case 417:
                        if (var25) {
                            _fun6601_ip = 479;
                            continue _fun6601
                        }
                    case 420:
                        var31 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var3];
                        var32 = var31.bind(var2)(var4);
                        var4 = 'base intrinsic for ';
                        var33 = var4 + var26;
                        var4 = var32.prototype;
                        var31 = Object.create(var4, {
                            constructor: {
                                value: var32
                            }
                        });
                        var4 = ' exists, but the property is not available.';
                        var40 = var33 + var4;
                        var41 = var31;
                        var4 = new var41[var32](var40, var39);
                        var4 = var4 instanceof Object ? var4 : var31;
                        throw var4;
                    case 479:
                        return var2;
                    case 481:
                        var31 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var24];
                        var4 = var31.bind(var2)(var4);
                        if (!var4) {
                            _fun6601_ip = 514;
                            continue _fun6601
                        }
                    case 501:
                        var31 = var22.length;
                        var4 = var7 + var24;
                        if (!(!(var4 >= var31))) {
                            _fun6601_ip = 546;
                            continue _fun6601
                        }
                    case 514:
                        var31 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var15];
                        var4 = var31.bind(var2)(var4);
                        var31 = var4.bind(var2)(var8, var36);
                        var32 = var8[var36];
                        var4 = var5;
                        _fun6601_ip = 617;
                        continue _fun6601;
                    case 546:
                        var34 = _closure1_slot0;
                        var33 = _closure1_slot1;
                        var33 = var33[var24];
                        var33 = var34.bind(var2)(var33);
                        var33 = var33.bind(var2)(var8, var36);
                        var35 = !var33;
                        var34 = !var35;
                        if (var35) {
                            _fun6601_ip = 604;
                            continue _fun6601
                        }
                    case 578:
                        var35 = var16 in var33;
                        if (!var35) {
                            _fun6601_ip = 604;
                            continue _fun6601
                        }
                    case 585:
                        var35 = var33.get;
                        var35 = var17 in var35;
                        if (var35) {
                            _fun6601_ip = 604;
                            continue _fun6601
                        }
                    case 597:
                        var35 = var33.get;
                        _fun6601_ip = 608;
                        continue _fun6601;
                    case 604:
                        var35 = var8[var36];
                    case 608:
                        var32 = var35;
                        var31 = var34;
                        var4 = var33;
                    case 617:
                        var33 = var31;
                        if (!var31) {
                            _fun6601_ip = 626;
                            continue _fun6601
                        }
                    case 623:
                        var33 = !var19;
                    case 626:
                        var27 = var32;
                        var29 = var31;
                        var28 = var4;
                        if (!var33) {
                            _fun6601_ip = 671;
                            continue _fun6601
                        }
                    case 638:
                        var33 = _closure1_slot6;
                        var33[var30] = var32;
                        var27 = var32;
                        var29 = var31;
                        var28 = var4;
                        _fun6601_ip = 671;
                        continue _fun6601;
                    case 657:
                        var4 = _closure1_slot6;
                        var27 = var4[var30];
                        var29 = var6;
                        var28 = var5;
                    case 671:
                        var7 = var7 + var24;
                        var4 = var22.length;
                        var8 = var27;
                        var6 = var29;
                        var5 = var28;
                        var1 = var8;
                        if (var7 < var4) {
                            _fun6601_ip = 274;
                            continue _fun6601
                        }
                    case 699:
                        return var1;
                    case 701:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 9;
                        var1 = var5[var1];
                        var5 = var4.bind(var2)(var1);
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var40 = 'property names with quotes must have matching quotes';
                        var41 = var4;
                        var1 = new var41[var5](var40, var39);
                        var1 = var1 instanceof Object ? var1 : var4;
                        throw var1;
                    case 749:
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 9;
                        var0 = var4[var0];
                        var4 = var1.bind(var2)(var0);
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var40 = '`%` may not be present anywhere but at the beginning and end of the intrinsic name';
                        var41 = var1;
                        var0 = new var41[var4](var40, var39);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 797:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var0 = var0[var3];
                        var3 = var1.bind(var2)(var0);
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var40 = '"allowMissing" argument must be a boolean';
                        var41 = var1;
                        var0 = new var41[var3](var40, var39);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 845:
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 0;
                        var0 = var3[var0];
                        var2 = var1.bind(var2)(var0);
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var40 = 'intrinsic name must be a non-empty string';
                        var41 = var1;
                        var0 = new var41[var2](var40, var39);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [518, 519, 521, 523, 535, 536, 526, 537, 538, 539, 540, 533, 534, 541, 525, 542, 543, 544, 545, 546, 547, 548, 524, 531, 550]);