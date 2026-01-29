// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var17 = function(arg0) { // Original name: wrapperForImpl, environment: var13
        _fun97369: for (var _fun97369_ip = 0;;) switch (_fun97369_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!var2) {
                    _fun97369_ip = 19;
                    continue _fun97369
                }
            case 8:
                var1 = _closure1_slot0;
                var0 = var2[var1];
            case 19:
                return var0;
        }
    };
    var _closure1_slot4 = var17;
    var16 = function(arg0) { // Original name: implForWrapper, environment: var13
        _fun97370: for (var _fun97370_ip = 0;;) switch (_fun97370_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!var2) {
                    _fun97370_ip = 19;
                    continue _fun97370
                }
            case 8:
                var1 = _closure1_slot1;
                var0 = var2[var1];
            case 19:
                return var0;
        }
    };
    var _closure1_slot5 = var16;
    var1 = global;
    var3 = var1.Symbol;
    var0 = undefined;
    var2 = 'wrapper';
    var20 = var3.bind(var0)(var2);
    var _closure1_slot0 = var20;
    var3 = var1.Symbol;
    var2 = 'impl';
    var19 = var3.bind(var0)(var2);
    var _closure1_slot1 = var19;
    var3 = var1.Symbol;
    var2 = 'SameObject caches';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var4 = var1.Symbol;
    var3 = var4.for;
    var2 = '[webidl2js]  constructor registry';
    var18 = var3.bind(var4)(var2);
    var3 = var1.Symbol;
    var2 = 'internal';
    var15 = var3.bind(var0)(var2);
    var4 = var1.Object;
    var3 = var4.getPrototypeOf;
    var6 = var1.Object;
    var5 = var6.getPrototypeOf;
    var7 = new Array(0);
    var2 = var1.Symbol;
    var2 = var2.iterator;
    var2 = var7[var2];
    var2 = var2.bind(var7)();
    var2 = var5.bind(var6)(var2);
    var14 = var3.bind(var4)(var2);
    var5 = var1.Object;
    var4 = var5.getOwnPropertyDescriptor;
    var2 = var1.ArrayBuffer;
    var3 = var2.prototype;
    var2 = 'byteLength';
    var2 = var4.bind(var5)(var3, var2);
    var2 = var2.get;
    var _closure1_slot3 = var2;
    var3 = var1.Symbol;
    var2 = 'supports property index';
    var12 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'supported property indices';
    var11 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'supports property name';
    var10 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'supported property names';
    var9 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'indexed property get';
    var8 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'indexed property set new';
    var7 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'indexed property set existing';
    var6 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'named property get';
    var5 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'named property set new';
    var4 = var3.bind(var0)(var2);
    var3 = var1.Symbol;
    var2 = 'named property set existing';
    var3 = var3.bind(var0)(var2);
    var2 = var1.Symbol;
    var1 = 'named property delete';
    var1 = var2.bind(var0)(var1);
    var2 = {};
    var21 = function(arg0) { // Original name: isObject, environment: var13
        _fun97371: for (var _fun97371_ip = 0;;) switch (_fun97371_ip) {
            case 0:
                var3 = arg0;
                var2 = typeof var3;
                var0 = 'object';
                var0 = var0 === var2;
                if (!var0) {
                    _fun97371_ip = 23;
                    continue _fun97371
                }
            case 17:
                var1 = null;
                var0 = var1 !== var3;
            case 23:
                if (var0) {
                    _fun97371_ip = 34;
                    continue _fun97371
                }
            case 26:
                var1 = 'function';
                var0 = var1 === var2;
            case 34:
                return var0;
        }
    };
    var2.isObject = var21;
    var21 = function(arg0, arg1) { // Original name: hasOwn, environment: var13
        var0 = global;
        var0 = var0.Object;
        var0 = var0.prototype;
        var3 = var0.hasOwnProperty;
        var2 = var3.call;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.hasOwn = var21;
    var2.wrapperSymbol = var20;
    var2.implSymbol = var19;
    var19 = function(arg0, arg1, arg2) { // Original name: getSameObject, environment: var13
        _fun97373: for (var _fun97373_ip = 0;;) switch (_fun97373_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = _closure1_slot2;
                var3 = var2[var3];
                if (var3) {
                    _fun97373_ip = 48;
                    continue _fun97373
                }
            case 20:
                var4 = _closure1_slot2;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.create;
                var3 = null;
                var3 = var5.bind(var6)(var3);
                var2[var4] = var3;
            case 48:
                var3 = _closure1_slot2;
                var3 = var2[var3];
                var3 = var1 in var3;
                if (var3) {
                    _fun97373_ip = 84;
                    continue _fun97373
                }
            case 63:
                var3 = _closure1_slot2;
                var4 = var2[var3];
                var5 = arg2;
                var3 = undefined;
                var3 = var5.bind(var3)();
                var4[var1] = var3;
            case 84:
                var0 = _closure1_slot2;
                var0 = var2[var0];
                var0 = var0[var1];
                return var0;
        }
    };
    var2.getSameObject = var19;
    var2.ctorRegistrySymbol = var18;
    var2.wrapperForImpl = var17;
    var2.implForWrapper = var16;
    var16 = function(arg0) { // Original name: tryWrapperForImpl, environment: var13
        _fun97374: for (var _fun97374_ip = 0;;) switch (_fun97374_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot4;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                if (var0) {
                    _fun97374_ip = 23;
                    continue _fun97374
                }
            case 20:
                var0 = var1;
            case 23:
                return var0;
        }
    };
    var2.tryWrapperForImpl = var16;
    var16 = function(arg0) { // Original name: tryImplForWrapper, environment: var13
        _fun97375: for (var _fun97375_ip = 0;;) switch (_fun97375_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot5;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                if (var0) {
                    _fun97375_ip = 23;
                    continue _fun97375
                }
            case 20:
                var0 = var1;
            case 23:
                return var0;
        }
    };
    var2.tryImplForWrapper = var16;
    var2.iterInternalSymbol = var15;
    var2.IteratorPrototype = var14;
    var14 = function(arg0) { // Original name: isArrayBuffer, environment: var13
        _fun97376: for (var _fun97376_ip = 0;;) switch (_fun97376_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var2 = _closure1_slot3;
                var1 = var2.call;
                var0 = var1.bind(var2)(var0);
            case 20: // try_end0
                var0 = true;
                return var0;
            case 24: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var2.isArrayBuffer = var14;
    var13 = function(arg0) { // Original name: isArrayIndexPropName, environment: var13
        _fun97377: for (var _fun97377_ip = 0;;) switch (_fun97377_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun97377_ip = 86;
                    continue _fun97377
                }
            case 14:
                var0 = 0;
                var4 = var2 >>> var0;
                var1 = global;
                var6 = var1.Math;
                var5 = var6.pow;
                var3 = 2;
                var0 = 32;
                var3 = var5.bind(var6)(var3, var0);
                var0 = 1;
                var0 = var3 - var0;
                var0 = var4 !== var0;
                if (!var0) {
                    _fun97377_ip = 84;
                    continue _fun97377
                }
            case 60:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '';
                var1 = var3.bind(var1)(var4);
                var0 = var2 === var1;
            case 84:
                return var0;
            case 86:
                var0 = false;
                return var0;
        }
    };
    var2.isArrayIndexPropName = var13;
    var2.supportsPropertyIndex = var12;
    var2.supportedPropertyIndices = var11;
    var2.supportsPropertyName = var10;
    var2.supportedPropertyNames = var9;
    var2.indexedGet = var8;
    var2.indexedSetNew = var7;
    var2.indexedSetExisting = var6;
    var2.namedGet = var5;
    var2.namedSetNew = var4;
    var2.namedSetExisting = var3;
    var2.namedDelete = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);