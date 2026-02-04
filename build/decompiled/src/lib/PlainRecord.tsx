// lib/PlainRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var5 = function arg0, arg1() {
        var0 = arg1;
        var2 = _closure1_slot3;
        var1 = arg0;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot4 = var5;
    var3 = function arg0, arg1() {
        _fun16472: for (var _fun16472_ip = 0;;) switch (_fun16472_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun16472_ip = 294;
                    continue _fun16472
                }
            case 15:
                if (!(var0 != var1)) {
                    _fun16472_ip = 294;
                    continue _fun16472
                }
            case 22:
                var0 = var2 === var1;
                if (var0) {
                    _fun16472_ip = 292;
                    continue _fun16472
                }
            case 32:
                var3 = global;
                var4 = var3.Date;
                var4 = var2 instanceof var4;
                if (!var4) {
                    _fun16472_ip = 63;
                    continue _fun16472
                }
            case 47:
                var4 = var3.Date;
                var4 = var1 instanceof var4;
                if (var4) {
                    _fun16472_ip = 265;
                    continue _fun16472
                }
            case 63:
                var4 = var3.Set;
                var4 = var2 instanceof var4;
                if (!var4) {
                    _fun16472_ip = 92;
                    continue _fun16472
                }
            case 76:
                var4 = var3.Set;
                var4 = var1 instanceof var4;
                if (var4) {
                    _fun16472_ip = 226;
                    continue _fun16472
                }
            case 92:
                var5 = var3.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var2);
                if (!var4) {
                    _fun16472_ip = 130;
                    continue _fun16472
                }
            case 111:
                var4 = var3.Array;
                var3 = var4.isArray;
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun16472_ip = 187;
                    continue _fun16472
                }
            case 130:
                var5 = 'object';
                var3 = typeof var2;
                var3 = var5 === var3;
                if (!var3) {
                    _fun16472_ip = 151;
                    continue _fun16472
                }
            case 144:
                var4 = typeof var1;
                var3 = var5 === var4;
            case 151:
                if (!var3) {
                    _fun16472_ip = 185;
                    continue _fun16472
                }
            case 154:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 3;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var3 = var4.bind(var5)(var2, var1);
            case 185:
                _fun16472_ip = 224;
                continue _fun16472;
            case 187:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.areArraysShallowEqual;
                var3 = var4.bind(var5)(var2, var1);
            case 224:
                _fun16472_ip = 263;
                continue _fun16472;
            case 226:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.areSetsEqual;
                var3 = var4.bind(var5)(var2, var1);
            case 263:
                _fun16472_ip = 289;
                continue _fun16472;
            case 265:
                var4 = var2.getTime;
                var5 = var4.bind(var2)();
                var4 = var1.getTime;
                var4 = var4.bind(var1)();
                var3 = var5 === var4;
            case 289:
                var0 = var3;
            case 292:
                _fun16472_ip = 298;
                continue _fun16472;
            case 294:
                var0 = var2 === var1;
            case 298:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var1 = function arg0, arg1() {
        _fun16473: for (var _fun16473_ip = 0;;) switch (_fun16473_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                if (!(var6 !== var5)) {
                    _fun16473_ip = 92;
                    continue _fun16473
                }
            case 10:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.keys;
                var4 = var0.bind(var1)(var6);
                var0 = var4.length;
                var3 = 0;
                var0 = var3 < var0;
                var1 = undefined;
                if (!var0) {
                    _fun16473_ip = 88;
                    continue _fun16473
                }
            case 47:
                var0 = var4[var3];
                var8 = _closure1_slot5;
                var7 = var6[var0];
                var0 = var5[var0];
                var0 = var8.bind(var1)(var7, var0);
                if (var0) {
                    _fun16473_ip = 76;
                    continue _fun16473
                }
            case 72:
                var0 = false;
                return var0;
            case 76:
                var3 = var3 + 1;
                var0 = var4.length;
                if (var3 < var0) {
                    _fun16473_ip = 47;
                    continue _fun16473
                }
            case 88:
                var0 = true;
                return var0;
            case 92:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var6);
    var6 = 0;
    var7 = var10[var6];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var6 = var6.TypeTag;
    var _closure1_slot3 = var6;
    var8 = 4;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/PlainRecord.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var2.TypeTag = var6;
    var6 = function arg0, arg1, arg2() {
        _fun16474: for (var _fun16474_ip = 0;;) switch (_fun16474_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var5 = _closure1_slot5;
                var1 = var4[var3];
                var0 = undefined;
                var1 = var5.bind(var0)(var1, var2);
                var0 = var4;
                if (var1) {
                    _fun16474_ip = 54;
                    continue _fun16474
                }
            case 34:
                var1 = {};
                var7 = var1;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var1[var3] = var2;
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var2.set = var6;
    var6 = function arg0, arg1() {
        _fun16475: for (var _fun16475_ip = 0;;) switch (_fun16475_ip) {
            case 0:
                var0 = arg0;
                var11 = arg1;
                var9 = var11;
                var2 = null;
                var4 = undefined;
                var3 = null;
                var1 = null;
                for (var6 in var9)
                    case 28: {
                        var12 = var3;
                        var1 = var12;
                        case 43: var15 = var6;
                        var17 = var0[var15];
                        var14 = var11[var15];
                        var13 = var4 === var14;
                        if (var13) {
                            _fun16475_ip = 71;
                            continue _fun16475
                        }
                        case 61: var16 = _closure1_slot5;
                        var13 = var16.bind(var4)(var17, var14);
                        case 71: var3 = var12;
                        if (var13) {
                            _fun16475_ip = 28;
                            continue _fun16475
                        }
                        case 77: if (!(var2 != var12)) {
                            _fun16475_ip = 87;
                            continue _fun16475
                        }
                        case 81: var12[var15] = var14;
                        _fun16475_ip = 107;
                        continue _fun16475;
                        case 87: var13 = {};
                        var19 = var13;
                        var18 = var0;
                        var16 = copyDataProperties(var19, var18);
                        var13[var15] = var14;
                        var12 = var13;
                        case 107: var3 = var12;
                        _fun16475_ip = 28;
                        continue _fun16475;
                    }
            case 112:
                if (!(var2 != var1)) {
                    _fun16475_ip = 119;
                    continue _fun16475
                }
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.merge = var6;
    var6 = function arg0, arg1, arg2() {
        _fun16476: for (var _fun16476_ip = 0;;) switch (_fun16476_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var1 = arg2;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 1;
                var5 = var5[var3];
                var3 = undefined;
                var8 = var6.bind(var3)(var5);
                var5 = null;
                var7 = var5 == var0;
                if (var7) {
                    _fun16476_ip = 55;
                    continue _fun16476
                }
            case 43:
                var6 = _closure1_slot3;
                var6 = var0[var6];
                var7 = var6 === var4;
            case 55:
                var6 = 'Existing record type does not match the expected type';
                var6 = var8.bind(var3)(var7, var6);
                if (!(var5 != var0)) {
                    _fun16476_ip = 84;
                    continue _fun16476
                }
            case 71:
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var0, var1);
                if (var5) {
                    _fun16476_ip = 97;
                    continue _fun16476
                }
            case 84:
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var2.tryReuseExistingInPlacePlainRecord = var6;
    var6 = function arg0, arg1() {
        _fun16477: for (var _fun16477_ip = 0;;) switch (_fun16477_ip) {
            case 0:
                var3 = arg1;
                var1 = 'object';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun16477_ip = 23;
                    continue _fun16477
                }
            case 17:
                var1 = null;
                var0 = var1 != var3;
            case 23:
                if (!var0) {
                    _fun16477_ip = 55;
                    continue _fun16477
                }
            case 26:
                var2 = _closure1_slot3;
                var2 = var2 in var3;
                if (!var2) {
                    _fun16477_ip = 48;
                    continue _fun16477
                }
            case 40:
                var1 = _closure1_slot3;
                var2 = var3[var1];
            case 48:
                var1 = arg0;
                var0 = var2 === var1;
            case 55:
                return var0;
        }
    };
    var2.objectIsPlainRecordOfType = var6;
    var2.constructInPlace = var5;
    var4 = function arg0, arg1() {
        var0 = {};
        var3 = arg1;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = _closure1_slot3;
        var1 = arg0;
        var0[var2] = var1;
        return var0;
    };
    var2.copyConstruct = var4;
    var2.isValueEqual = var3;
    var2.isPlainRecordDataEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1412, 44, 1413, 628, 2]);