// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: bitsToBigInt, environment: var1
        var0 = global;
        var2 = var0.BigInt;
        var3 = undefined;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var4 = var0.BigInt;
        var1 = arg1;
        var4 = var4.bind(var3)(var1);
        var1 = 16n;
        var1 = var4 << var1;
        var4 = var2 | var1;
        var1 = var0.BigInt;
        var2 = 0;
        var5 = var1.bind(var3)(var2);
        var1 = 32n;
        var1 = var5 << var1;
        var1 = var4 | var1;
        var0 = var0.BigInt;
        var2 = var0.bind(var3)(var2);
        var0 = 48n;
        var0 = var2 << var0;
        var0 = var1 | var0;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: memoryToBigInt, environment: var1
        var4 = arg0;
        var5 = arg1;
        var0 = global;
        var2 = var0.BigInt;
        var1 = var4[var5];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var6 = var0.BigInt;
        var1 = 1;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 8n;
        var1 = var6 << var1;
        var2 = var2 | var1;
        var6 = var0.BigInt;
        var1 = 2;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 16n;
        var1 = var6 << var1;
        var2 = var2 | var1;
        var6 = var0.BigInt;
        var1 = 3;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 24n;
        var1 = var6 << var1;
        var2 = var2 | var1;
        var6 = var0.BigInt;
        var1 = 4;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 32n;
        var1 = var6 << var1;
        var2 = var2 | var1;
        var6 = var0.BigInt;
        var1 = 5;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 40n;
        var1 = var6 << var1;
        var2 = var2 | var1;
        var6 = var0.BigInt;
        var1 = 6;
        var1 = var5 + var1;
        var1 = var4[var1];
        var6 = var6.bind(var3)(var1);
        var1 = 48n;
        var1 = var6 << var1;
        var1 = var2 | var1;
        var2 = var0.BigInt;
        var0 = 7;
        var0 = var5 + var0;
        var0 = var4[var0];
        var2 = var2.bind(var3)(var0);
        var0 = 56n;
        var0 = var2 << var0;
        var0 = var1 | var0;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: rotl, environment: var1
        var2 = arg0;
        var3 = arg1;
        var1 = var2 << var3;
        var0 = _closure1_slot3;
        var1 = var1 & var0;
        var0 = 64n;
        var0 = var0 - var3;
        var0 = var2 >> var0;
        var0 = var1 | var0;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: trunc, environment: var1
        var0 = global;
        var3 = var0.BigInt;
        var2 = var3.asUintN;
        var1 = 64;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var11 = 2n;
    var10 = 64n;
    var6 = exponentiationOperator(var11, var10);
    var5 = 1n;
    var5 = var6 - var5;
    var _closure1_slot3 = var5;
    var3 = var3.TextEncoder;
    var5 = var3.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var3
        }
    });
    var12 = var5;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot4 = var3;
    var3 = 'seed';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 'v1';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 'v2';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 'v3';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 'v4';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 'memory';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 'len';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 'memsize';
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() { // Original name: XXH64, environment: var4
            _fun13955: for (var _fun13955_ip = 0;;) switch (_fun13955_ip) {
                case 0:
                    var3 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var2 = arguments.length;
                    var1 = 0;
                    var5 = var2 > var1;
                    var2 = 0;
                    if (!var5) {
                        _fun13955_ip = 35;
                        continue _fun13955
                    }
                case 21:
                    var5 = arguments[var1];
                    var2 = 0;
                    if (!(var0 !== var5)) {
                        _fun13955_ip = 35;
                        continue _fun13955
                    }
                case 31:
                    var2 = arguments[var1];
                case 35:
                    var5 = _closure1_slot0;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var3, var4);
                    var4 = global;
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot5;
                    var5 = {};
                    var7 = true;
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot6;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot7;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot8;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot9;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot10;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var9 = var4.Object;
                    var8 = var9.defineProperty;
                    var6 = _closure1_slot11;
                    var5 = {};
                    var5.writable = var7;
                    var5.value = var0;
                    var5 = var8.bind(var9)(var3, var6, var5);
                    var6 = var4.Object;
                    var5 = var6.defineProperty;
                    var4 = _closure1_slot12;
                    var1 = {};
                    var1.writable = var7;
                    var1.value = var0;
                    var1 = var5.bind(var6)(var3, var4, var1);
                    var1 = var3.reset;
                    var1 = var1.bind(var3)(var2);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: reset, environment: var4
            _fun13956: for (var _fun13956_ip = 0;;) switch (_fun13956_ip) {
                case 0:
                    var0 = this;
                    var4 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var3 = 0;
                    if (!(var2 > var3)) {
                        _fun13956_ip = 24;
                        continue _fun13956
                    }
                case 16:
                    var2 = arguments[var3];
                    if (!(var4 === var2)) {
                        _fun13956_ip = 47;
                        continue _fun13956
                    }
                case 24:
                    var2 = _closure1_slot2;
                    var5 = _closure1_slot5;
                    var2 = var2.bind(var4)(var0, var5);
                    var7 = var2[var5];
                    _fun13956_ip = 51;
                    continue _fun13956;
                case 47:
                    var7 = arguments[var3];
                case 51:
                    var1 = _closure1_slot2;
                    var10 = _closure1_slot5;
                    var6 = var1.bind(var4)(var0, var10);
                    var5 = global;
                    var9 = var5.BigInt;
                    var8 = var9.asUintN;
                    var5 = var5.BigInt;
                    var7 = var5.bind(var4)(var7);
                    var5 = 32;
                    var5 = var8.bind(var9)(var5, var7);
                    var6[var10] = var5;
                    var7 = _closure1_slot6;
                    var6 = var1.bind(var4)(var0, var7);
                    var8 = _closure1_slot17;
                    var5 = var1.bind(var4)(var0, var10);
                    var5 = var5[var10];
                    var9 = 11400714785074694791n;
                    var5 = var5 + var9;
                    var11 = 14029467366897019727n;
                    var5 = var5 + var11;
                    var5 = var8.bind(var4)(var5);
                    var6[var7] = var5;
                    var7 = _closure1_slot7;
                    var6 = var1.bind(var4)(var0, var7);
                    var5 = var1.bind(var4)(var0, var10);
                    var5 = var5[var10];
                    var5 = var5 + var11;
                    var5 = var8.bind(var4)(var5);
                    var6[var7] = var5;
                    var7 = _closure1_slot8;
                    var6 = var1.bind(var4)(var0, var7);
                    var5 = var1.bind(var4)(var0, var10);
                    var5 = var5[var10];
                    var6[var7] = var5;
                    var7 = _closure1_slot9;
                    var6 = var1.bind(var4)(var0, var7);
                    var5 = var1.bind(var4)(var0, var10);
                    var5 = var5[var10];
                    var5 = var5 - var9;
                    var5 = var8.bind(var4)(var5);
                    var6[var7] = var5;
                    var7 = _closure1_slot10;
                    var6 = var1.bind(var4)(var0, var7);
                    var5 = null;
                    var6[var7] = var5;
                    var6 = _closure1_slot11;
                    var5 = var1.bind(var4)(var0, var6);
                    var5[var6] = var3;
                    var2 = _closure1_slot12;
                    var1 = var1.bind(var4)(var0, var2);
                    var1[var2] = var3;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function(arg0) { // Original name: update, environment: var4
            _fun13957: for (var _fun13957_ip = 0;;) switch (_fun13957_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var2 = 'string';
                    var1 = typeof var3;
                    var9 = var3;
                    if (!(var2 === var1)) {
                        _fun13957_ip = 38;
                        continue _fun13957
                    }
                case 20:
                    var2 = _closure1_slot4;
                    var1 = var2.encode;
                    var9 = var1.bind(var2)(var3);
                case 38:
                    var4 = var9.length;
                    var6 = 0;
                    var8 = var6 + var4;
                    if (!(var6 !== var4)) {
                        _fun13957_ip = 1062;
                        continue _fun13957
                    }
                case 56:
                    var1 = _closure1_slot2;
                    var10 = _closure1_slot11;
                    var2 = undefined;
                    var7 = var1.bind(var2)(var0, var10);
                    var5 = var7[var10];
                    var5 = var5 + var4;
                    var7[var10] = var5;
                    var5 = _closure1_slot12;
                    var1 = var1.bind(var2)(var0, var5);
                    var1 = var1[var5];
                    if (!(var6 === var1)) {
                        _fun13957_ip = 154;
                        continue _fun13957
                    }
                case 105:
                    var1 = _closure1_slot2;
                    var7 = _closure1_slot10;
                    var5 = var1.bind(var2)(var0, var7);
                    var1 = global;
                    var11 = var1.Uint8Array;
                    var1 = var11.prototype;
                    var10 = Object.create(var1, {
                        constructor: {
                            value: var11
                        }
                    });
                    var24 = 32;
                    var25 = var10;
                    var1 = new var25[var11](var24, var23);
                    var1 = var1 instanceof Object ? var1 : var10;
                    var5[var7] = var1;
                case 154:
                    var1 = _closure1_slot2;
                    var5 = _closure1_slot12;
                    var1 = var1.bind(var2)(var0, var5);
                    var1 = var1[var5];
                    var1 = var1 + var4;
                    var5 = 32;
                    if (!(!(var1 < var5))) {
                        _fun13957_ip = 987;
                        continue _fun13957
                    }
                case 186:
                    var1 = _closure1_slot2;
                    var7 = _closure1_slot12;
                    var1 = var1.bind(var2)(var0, var7);
                    var1 = var1[var7];
                    var7 = var1 > var6;
                    var1 = 0;
                    if (!var7) {
                        _fun13957_ip = 606;
                        continue _fun13957
                    }
                case 216:
                    var10 = _closure1_slot2;
                    var12 = _closure1_slot10;
                    var7 = var10.bind(var2)(var0, var12);
                    var15 = var7[var12];
                    var14 = var15.set;
                    var13 = var9.subarray;
                    var11 = _closure1_slot12;
                    var7 = var10.bind(var2)(var0, var11);
                    var7 = var7[var11];
                    var7 = var5 - var7;
                    var13 = var13.bind(var9)(var6, var7);
                    var7 = var10.bind(var2)(var0, var11);
                    var7 = var7[var11];
                    var7 = var14.bind(var15)(var13, var7);
                    var13 = _closure1_slot15;
                    var7 = var10.bind(var2)(var0, var12);
                    var7 = var7[var12];
                    var7 = var13.bind(var2)(var7, var6);
                    var18 = _closure1_slot6;
                    var12 = var10.bind(var2)(var0, var18);
                    var14 = _closure1_slot17;
                    var17 = _closure1_slot16;
                    var15 = var10.bind(var2)(var0, var18);
                    var15 = var15[var18];
                    var19 = 14029467366897019727n;
                    var7 = var7 * var19;
                    var7 = var15 + var7;
                    var7 = var14.bind(var2)(var7);
                    var16 = 31n;
                    var7 = var17.bind(var2)(var7, var16);
                    var15 = 11400714785074694791n;
                    var7 = var7 * var15;
                    var7 = var14.bind(var2)(var7);
                    var12[var18] = var7;
                    var12 = var0.memory;
                    var7 = 8;
                    var7 = var13.bind(var2)(var12, var7);
                    var18 = _closure1_slot7;
                    var12 = var10.bind(var2)(var0, var18);
                    var20 = var10.bind(var2)(var0, var18);
                    var20 = var20[var18];
                    var7 = var7 * var19;
                    var7 = var20 + var7;
                    var7 = var14.bind(var2)(var7);
                    var7 = var17.bind(var2)(var7, var16);
                    var7 = var7 * var15;
                    var7 = var14.bind(var2)(var7);
                    var12[var18] = var7;
                    var12 = var0.memory;
                    var7 = 16;
                    var7 = var13.bind(var2)(var12, var7);
                    var18 = _closure1_slot8;
                    var12 = var10.bind(var2)(var0, var18);
                    var20 = var10.bind(var2)(var0, var18);
                    var20 = var20[var18];
                    var7 = var7 * var19;
                    var7 = var20 + var7;
                    var7 = var14.bind(var2)(var7);
                    var7 = var17.bind(var2)(var7, var16);
                    var7 = var7 * var15;
                    var7 = var14.bind(var2)(var7);
                    var12[var18] = var7;
                    var12 = var0.memory;
                    var7 = 24;
                    var7 = var13.bind(var2)(var12, var7);
                    var13 = _closure1_slot9;
                    var12 = var10.bind(var2)(var0, var13);
                    var18 = var10.bind(var2)(var0, var13);
                    var18 = var18[var13];
                    var7 = var7 * var19;
                    var7 = var18 + var7;
                    var7 = var14.bind(var2)(var7);
                    var7 = var17.bind(var2)(var7, var16);
                    var7 = var7 * var15;
                    var7 = var14.bind(var2)(var7);
                    var12[var13] = var7;
                    var7 = var10.bind(var2)(var0, var11);
                    var7 = var7[var11];
                    var7 = var5 - var7;
                    var1 = var6 + var7;
                    var10 = var10.bind(var2)(var0, var11);
                    var10[var11] = var6;
                case 606:
                    var13 = var8 - var5;
                    var12 = 14029467366897019727n;
                    var11 = 31n;
                    var10 = 11400714785074694791n;
                    var7 = 8;
                    var5 = var1;
                    var1 = var5;
                    if (!(var1 <= var13)) {
                        _fun13957_ip = 912;
                        continue _fun13957
                    }
                case 638:
                    var15 = _closure1_slot15;
                    var14 = var15.bind(var2)(var9, var5);
                    var20 = _closure1_slot2;
                    var17 = _closure1_slot6;
                    var16 = var20.bind(var2)(var0, var17);
                    var18 = _closure1_slot17;
                    var19 = _closure1_slot16;
                    var21 = var20.bind(var2)(var0, var17);
                    var21 = var21[var17];
                    var14 = var14 * var12;
                    var14 = var21 + var14;
                    var14 = var18.bind(var2)(var14);
                    var14 = var19.bind(var2)(var14, var11);
                    var14 = var14 * var10;
                    var14 = var18.bind(var2)(var14);
                    var16[var17] = var14;
                    var14 = var5 + var7;
                    var16 = var15.bind(var2)(var9, var14);
                    var21 = _closure1_slot7;
                    var17 = var20.bind(var2)(var0, var21);
                    var22 = var20.bind(var2)(var0, var21);
                    var22 = var22[var21];
                    var16 = var16 * var12;
                    var16 = var22 + var16;
                    var16 = var18.bind(var2)(var16);
                    var16 = var19.bind(var2)(var16, var11);
                    var16 = var16 * var10;
                    var16 = var18.bind(var2)(var16);
                    var17[var21] = var16;
                    var14 = var14 + var7;
                    var16 = var15.bind(var2)(var9, var14);
                    var21 = _closure1_slot8;
                    var17 = var20.bind(var2)(var0, var21);
                    var22 = var20.bind(var2)(var0, var21);
                    var22 = var22[var21];
                    var16 = var16 * var12;
                    var16 = var22 + var16;
                    var16 = var18.bind(var2)(var16);
                    var16 = var19.bind(var2)(var16, var11);
                    var16 = var16 * var10;
                    var16 = var18.bind(var2)(var16);
                    var17[var21] = var16;
                    var14 = var14 + var7;
                    var15 = var15.bind(var2)(var9, var14);
                    var17 = _closure1_slot9;
                    var16 = var20.bind(var2)(var0, var17);
                    var20 = var20.bind(var2)(var0, var17);
                    var20 = var20[var17];
                    var15 = var15 * var12;
                    var15 = var20 + var15;
                    var15 = var18.bind(var2)(var15);
                    var15 = var19.bind(var2)(var15, var11);
                    var15 = var15 * var10;
                    var15 = var18.bind(var2)(var15);
                    var16[var17] = var15;
                    var5 = var14 + var7;
                    var1 = var5;
                    if (var1 <= var13) {
                        _fun13957_ip = 638;
                        continue _fun13957
                    }
                case 912:
                    if (!(var1 < var8)) {
                        _fun13957_ip = 985;
                        continue _fun13957
                    }
                case 916:
                    var5 = _closure1_slot2;
                    var10 = _closure1_slot10;
                    var7 = var5.bind(var2)(var0, var10);
                    var13 = var7[var10];
                    var12 = var13.set;
                    var7 = var9.subarray;
                    var11 = var7.bind(var9)(var1, var8);
                    var7 = _closure1_slot12;
                    var10 = var5.bind(var2)(var0, var7);
                    var10 = var10[var7];
                    var10 = var12.bind(var13)(var11, var10);
                    var5 = var5.bind(var2)(var0, var7);
                    var1 = var8 - var1;
                    var5[var7] = var1;
                case 985:
                    return var0;
                case 987:
                    var1 = _closure1_slot2;
                    var7 = _closure1_slot10;
                    var5 = var1.bind(var2)(var0, var7);
                    var8 = var5[var7];
                    var7 = var8.set;
                    var5 = var9.subarray;
                    var6 = var5.bind(var9)(var6, var4);
                    var3 = _closure1_slot12;
                    var5 = var1.bind(var2)(var0, var3);
                    var5 = var5[var3];
                    var5 = var7.bind(var8)(var6, var5);
                    var2 = var1.bind(var2)(var0, var3);
                    var1 = var2[var3];
                    var1 = var1 + var4;
                    var2[var3] = var1;
                    return var0;
                case 1062:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'digest';
        var0.key = var5;
        var4 = function() { // Original name: digest, environment: var4
            _fun13958: for (var _fun13958_ip = 0;;) switch (_fun13958_ip) {
                case 0:
                    var6 = this;
                    var1 = _closure1_slot2;
                    var4 = _closure1_slot10;
                    var2 = undefined;
                    var3 = var1.bind(var2)(var6, var4);
                    var11 = var3[var4];
                    var4 = _closure1_slot12;
                    var3 = var1.bind(var2)(var6, var4);
                    var10 = var3[var4];
                    var3 = _closure1_slot11;
                    var1 = var1.bind(var2)(var6, var3);
                    var3 = var1[var3];
                    var1 = 32;
                    if (!(!(var3 >= var1))) {
                        _fun13958_ip = 101;
                        continue _fun13958
                    }
                case 61:
                    var3 = _closure1_slot17;
                    var1 = _closure1_slot2;
                    var4 = _closure1_slot5;
                    var1 = var1.bind(var2)(var6, var4);
                    var4 = var1[var4];
                    var1 = 2870177450012600261n;
                    var1 = var4 + var1;
                    var3 = var3.bind(var2)(var1);
                    _fun13958_ip = 441;
                    continue _fun13958;
                case 101:
                    var4 = _closure1_slot17;
                    var12 = _closure1_slot16;
                    var1 = _closure1_slot2;
                    var7 = _closure1_slot6;
                    var5 = var1.bind(var2)(var6, var7);
                    var8 = var5[var7];
                    var5 = 1n;
                    var8 = var12.bind(var2)(var8, var5);
                    var17 = _closure1_slot7;
                    var5 = var1.bind(var2)(var6, var17);
                    var9 = var5[var17];
                    var5 = 7n;
                    var5 = var12.bind(var2)(var9, var5);
                    var8 = var8 + var5;
                    var16 = _closure1_slot8;
                    var5 = var1.bind(var2)(var6, var16);
                    var9 = var5[var16];
                    var5 = 12n;
                    var5 = var12.bind(var2)(var9, var5);
                    var8 = var8 + var5;
                    var14 = _closure1_slot9;
                    var5 = var1.bind(var2)(var6, var14);
                    var9 = var5[var14];
                    var5 = 18n;
                    var5 = var12.bind(var2)(var9, var5);
                    var8 = var8 + var5;
                    var5 = var1.bind(var2)(var6, var7);
                    var5 = var5[var7];
                    var13 = 14029467366897019727n;
                    var5 = var5 * var13;
                    var5 = var4.bind(var2)(var5);
                    var9 = 31n;
                    var5 = var12.bind(var2)(var5, var9);
                    var7 = 11400714785074694791n;
                    var5 = var5 * var7;
                    var5 = var8 ^ var5;
                    var5 = var4.bind(var2)(var5);
                    var8 = var5 * var7;
                    var5 = 9650029242287828579n;
                    var8 = var8 + var5;
                    var15 = var4.bind(var2)(var8);
                    var8 = var1.bind(var2)(var6, var17);
                    var8 = var8[var17];
                    var8 = var8 * var13;
                    var8 = var4.bind(var2)(var8);
                    var8 = var12.bind(var2)(var8, var9);
                    var8 = var8 * var7;
                    var8 = var15 ^ var8;
                    var8 = var4.bind(var2)(var8);
                    var8 = var8 * var7;
                    var8 = var8 + var5;
                    var15 = var4.bind(var2)(var8);
                    var8 = var1.bind(var2)(var6, var16);
                    var8 = var8[var16];
                    var8 = var8 * var13;
                    var8 = var4.bind(var2)(var8);
                    var8 = var12.bind(var2)(var8, var9);
                    var8 = var8 * var7;
                    var8 = var15 ^ var8;
                    var8 = var4.bind(var2)(var8);
                    var8 = var8 * var7;
                    var8 = var8 + var5;
                    var8 = var4.bind(var2)(var8);
                    var1 = var1.bind(var2)(var6, var14);
                    var1 = var1[var14];
                    var1 = var1 * var13;
                    var1 = var4.bind(var2)(var1);
                    var1 = var12.bind(var2)(var1, var9);
                    var1 = var1 * var7;
                    var1 = var8 ^ var1;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1 * var7;
                    var1 = var1 + var5;
                    var3 = var4.bind(var2)(var1);
                case 441:
                    var1 = global;
                    var4 = var1.BigInt;
                    var1 = _closure1_slot2;
                    var5 = _closure1_slot11;
                    var1 = var1.bind(var2)(var6, var5);
                    var1 = var1[var5];
                    var1 = var4.bind(var2)(var1);
                    var4 = var3 + var1;
                    var16 = 8;
                    var1 = var10 - var16;
                    var3 = 14029467366897019727n;
                    var13 = 31n;
                    var8 = 11400714785074694791n;
                    var7 = 27n;
                    var6 = 9650029242287828579n;
                    var5 = 0;
                    var12 = var4;
                    var17 = 0;
                    if (!(var17 <= var1)) {
                        _fun13958_ip = 597;
                        continue _fun13958
                    }
                case 514:
                    var14 = _closure1_slot17;
                    var15 = _closure1_slot16;
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var2)(var11, var5);
                    var1 = var1 * var3;
                    var1 = var14.bind(var2)(var1);
                    var1 = var15.bind(var2)(var1, var13);
                    var1 = var1 * var8;
                    var1 = var14.bind(var2)(var1);
                    var1 = var4 ^ var1;
                    var1 = var15.bind(var2)(var1, var7);
                    var1 = var1 * var8;
                    var1 = var1 + var6;
                    var4 = var14.bind(var2)(var1);
                    var5 = var5 + var16;
                    var1 = var10 - var16;
                    var12 = var4;
                    var17 = var5;
                    if (var17 <= var1) {
                        _fun13958_ip = 514;
                        continue _fun13958
                    }
                case 597:
                    var1 = 4;
                    var5 = var17 + var1;
                    var7 = var17;
                    var4 = var12;
                    if (!(var5 <= var10)) {
                        _fun13958_ip = 732;
                        continue _fun13958
                    }
                case 614:
                    var6 = _closure1_slot17;
                    var13 = _closure1_slot16;
                    var15 = _closure1_slot14;
                    var1 = 1;
                    var1 = var17 + var1;
                    var1 = var11[var1];
                    var14 = var1 << var16;
                    var1 = var11[var17];
                    var21 = var14 | var1;
                    var1 = 3;
                    var1 = var17 + var1;
                    var1 = var11[var1];
                    var16 = var1 << var16;
                    var1 = 2;
                    var1 = var17 + var1;
                    var1 = var11[var1];
                    var20 = var16 | var1;
                    var22 = undefined;
                    var19 = 0;
                    var18 = 0;
                    var1 = var22[var15](var21, var20, var19, var18, var17);
                    var1 = var1 * var8;
                    var1 = var6.bind(var2)(var1);
                    var12 = var12 ^ var1;
                    var1 = 23n;
                    var1 = var13.bind(var2)(var12, var1);
                    var12 = var1 * var3;
                    var1 = 1609587929392839161n;
                    var1 = var12 + var1;
                    var4 = var6.bind(var2)(var1);
                    var7 = var5;
                case 732:
                    var6 = 2870177450012600261n;
                    var5 = 11n;
                    var1 = var4;
                    var4 = var1;
                    if (!(var7 < var10)) {
                        _fun13958_ip = 819;
                        continue _fun13958
                    }
                case 750:
                    var13 = _closure1_slot17;
                    var14 = _closure1_slot16;
                    var15 = _closure1_slot14;
                    var12 = parseFloat(var7);
                    var7 = var12 + 1;
                    var21 = var11[var12];
                    var22 = undefined;
                    var20 = 0;
                    var19 = 0;
                    var18 = 0;
                    var12 = var22[var15](var21, var20, var19, var18, var17);
                    var12 = var12 * var6;
                    var12 = var13.bind(var2)(var12);
                    var12 = var1 ^ var12;
                    var12 = var14.bind(var2)(var12, var5);
                    var12 = var12 * var8;
                    var1 = var13.bind(var2)(var12);
                    var4 = var1;
                    if (var7 < var10) {
                        _fun13958_ip = 750;
                        continue _fun13958
                    }
                case 819:
                    var1 = _closure1_slot17;
                    var0 = 33n;
                    var0 = var4 >> var0;
                    var0 = var1.bind(var2)(var0);
                    var0 = var4 ^ var0;
                    var0 = var0 * var3;
                    var3 = var1.bind(var2)(var0);
                    var0 = 29n;
                    var0 = var3 >> var0;
                    var0 = var1.bind(var2)(var0);
                    var3 = var3 ^ var0;
                    var0 = 1609587929392839161n;
                    var0 = var3 * var0;
                    var3 = var1.bind(var2)(var0);
                    var0 = 32n;
                    var0 = var3 >> var0;
                    var0 = var1.bind(var2)(var0);
                    var0 = var3 ^ var0;
                    var0 = var1.bind(var2)(var0);
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
    var _closure1_slot13 = var3;
    var2.XXH64 = var3;
    var1 = function(arg0) { // Original name: hash, environment: var1
        _fun13959: for (var _fun13959_ip = 0;;) switch (_fun13959_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var2 = _closure1_slot13;
                var0 = arguments.length;
                var1 = 1;
                var4 = var0 > var1;
                var0 = 0;
                if (!var4) {
                    _fun13959_ip = 40;
                    continue _fun13959
                }
            case 26:
                var4 = arguments[var1];
                var0 = 0;
                if (!(var5 !== var4)) {
                    _fun13959_ip = 40;
                    continue _fun13959
                }
            case 36:
                var0 = arguments[var1];
            case 40:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var7 = var0;
                var0 = new var8[var2](var7, var6);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.update;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = var1.digest;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.hash = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 99, 100]);