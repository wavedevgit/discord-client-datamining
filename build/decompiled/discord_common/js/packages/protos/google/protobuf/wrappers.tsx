// ../discord_common/js/packages/protos/google/protobuf/wrappers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun15009: for (var _fun15009_ip = 0;;) switch (_fun15009_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot9;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun15009_ip = 51;
                    continue _fun15009
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun15009_ip = 92;
                continue _fun15009;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun15009_ip = 71;
                    continue _fun15009
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun15010: for (var _fun15010_ip = 0;;) switch (_fun15010_ip) {
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
                _fun15010_ip = 74;
                continue _fun15010;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var13[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var13[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var13[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var13[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var13[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var13[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var11 = 6;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: DoubleValue$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 1
            };
            var5[0] = var0;
            var0 = ['google.protobuf.DoubleValue'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var0 = arg0;
            var10 = var0.value;
            var11 = 2;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15016: for (var _fun15016_ip = 0;;) switch (_fun15016_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15016_ip = 18;
                        continue _fun15016
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 1;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15017: for (var _fun15017_ip = 0;;) switch (_fun15017_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15017_ip = 116;
                        continue _fun15017
                    }
                case 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15018: for (var _fun15018_ip = 0;;) switch (_fun15018_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15018_ip = 27;
                        continue _fun15018
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15018_ip = 338;
                        continue _fun15018
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15018_ip = 298;
                        continue _fun15018
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15018_ip = 218;
                        continue _fun15018
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15018_ip = 320;
                        continue _fun15018
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15018_ip = 186;
                        continue _fun15018
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15018_ip = 320;
                    continue _fun15018;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.double;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15018_ip = 82;
                        continue _fun15018
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15019: for (var _fun15019_ip = 0;;) switch (_fun15019_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun15019_ip = 83;
                        continue _fun15019
                    }
                case 17:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Bit64;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.double;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 83:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15019_ip = 160;
                        continue _fun15019
                    }
                case 98:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15019_ip = 142;
                        continue _fun15019
                    }
                case 105:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 142:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 160:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var10 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: FloatValue$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 2
            };
            var5[0] = var0;
            var0 = ['google.protobuf.FloatValue'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var0 = arg0;
            var10 = var0.value;
            var11 = 1;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15023: for (var _fun15023_ip = 0;;) switch (_fun15023_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15023_ip = 18;
                        continue _fun15023
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 1;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15024: for (var _fun15024_ip = 0;;) switch (_fun15024_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15024_ip = 116;
                        continue _fun15024
                    }
                case 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15025: for (var _fun15025_ip = 0;;) switch (_fun15025_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15025_ip = 27;
                        continue _fun15025
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15025_ip = 338;
                        continue _fun15025
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15025_ip = 298;
                        continue _fun15025
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15025_ip = 218;
                        continue _fun15025
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15025_ip = 320;
                        continue _fun15025
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15025_ip = 186;
                        continue _fun15025
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15025_ip = 320;
                    continue _fun15025;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.float;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15025_ip = 82;
                        continue _fun15025
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15026: for (var _fun15026_ip = 0;;) switch (_fun15026_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun15026_ip = 83;
                        continue _fun15026
                    }
                case 17:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Bit32;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.float;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 83:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15026_ip = 160;
                        continue _fun15026
                    }
                case 98:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15026_ip = 142;
                        continue _fun15026
                    }
                case 105:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 142:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 160:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var9 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: Int64Value$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 3
            };
            var5[0] = var0;
            var0 = ['google.protobuf.Int64Value'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.ScalarType;
            var11 = var0.INT64;
            var0 = arg0;
            var10 = var0.value;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15030: for (var _fun15030_ip = 0;;) switch (_fun15030_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15030_ip = 18;
                        continue _fun15030
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var4 = var7[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var4);
                    var4 = var4.ScalarType;
                    var10 = var4.INT64;
                    var1 = var7[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.LongType;
                    var9 = var1.STRING;
                    var11 = arg0;
                    var8 = 'value';
                    var12 = var6;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15031: for (var _fun15031_ip = 0;;) switch (_fun15031_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15031_ip = 120;
                        continue _fun15031
                    }
                case 90:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 120:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15032: for (var _fun15032_ip = 0;;) switch (_fun15032_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15032_ip = 27;
                        continue _fun15032
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15032_ip = 347;
                        continue _fun15032
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15032_ip = 298;
                        continue _fun15032
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15032_ip = 218;
                        continue _fun15032
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15032_ip = 329;
                        continue _fun15032
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15032_ip = 186;
                        continue _fun15032
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15032_ip = 329;
                    continue _fun15032;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.int64;
                    var19 = var1.bind(var16)();
                    var1 = var19.toString;
                    var1 = var1.bind(var19)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15032_ip = 82;
                        continue _fun15032
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15033: for (var _fun15033_ip = 0;;) switch (_fun15033_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun15033_ip = 87;
                        continue _fun15033
                    }
                case 21:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int64;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 87:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15033_ip = 164;
                        continue _fun15033
                    }
                case 102:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15033_ip = 146;
                        continue _fun15033
                    }
                case 109:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 146:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 164:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var8 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: UInt64Value$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 4
            };
            var5[0] = var0;
            var0 = ['google.protobuf.UInt64Value'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.ScalarType;
            var11 = var0.UINT64;
            var0 = arg0;
            var10 = var0.value;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15037: for (var _fun15037_ip = 0;;) switch (_fun15037_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15037_ip = 18;
                        continue _fun15037
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 6;
                    var4 = var7[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var4);
                    var4 = var4.ScalarType;
                    var10 = var4.UINT64;
                    var1 = var7[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.LongType;
                    var9 = var1.STRING;
                    var11 = arg0;
                    var8 = 'value';
                    var12 = var6;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15038: for (var _fun15038_ip = 0;;) switch (_fun15038_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '0';
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15038_ip = 120;
                        continue _fun15038
                    }
                case 90:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 120:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15039: for (var _fun15039_ip = 0;;) switch (_fun15039_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15039_ip = 27;
                        continue _fun15039
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15039_ip = 347;
                        continue _fun15039
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15039_ip = 298;
                        continue _fun15039
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15039_ip = 218;
                        continue _fun15039
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15039_ip = 329;
                        continue _fun15039
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15039_ip = 186;
                        continue _fun15039
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15039_ip = 329;
                    continue _fun15039;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.uint64;
                    var19 = var1.bind(var16)();
                    var1 = var19.toString;
                    var1 = var1.bind(var19)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 329:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15039_ip = 82;
                        continue _fun15039
                    }
                case 347:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15040: for (var _fun15040_ip = 0;;) switch (_fun15040_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = '0';
                    if (!(var1 !== var2)) {
                        _fun15040_ip = 87;
                        continue _fun15040
                    }
                case 21:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.uint64;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 87:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15040_ip = 164;
                        continue _fun15040
                    }
                case 102:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15040_ip = 146;
                        continue _fun15040
                    }
                case 109:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 146:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 164:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var7 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: Int32Value$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 5
            };
            var5[0] = var0;
            var0 = ['google.protobuf.Int32Value'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var0 = arg0;
            var10 = var0.value;
            var11 = 5;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15044: for (var _fun15044_ip = 0;;) switch (_fun15044_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15044_ip = 18;
                        continue _fun15044
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 5;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15045: for (var _fun15045_ip = 0;;) switch (_fun15045_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15045_ip = 116;
                        continue _fun15045
                    }
                case 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15046: for (var _fun15046_ip = 0;;) switch (_fun15046_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15046_ip = 27;
                        continue _fun15046
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15046_ip = 338;
                        continue _fun15046
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15046_ip = 298;
                        continue _fun15046
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15046_ip = 218;
                        continue _fun15046
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15046_ip = 320;
                        continue _fun15046
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15046_ip = 186;
                        continue _fun15046
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15046_ip = 320;
                    continue _fun15046;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.int32;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15046_ip = 82;
                        continue _fun15046
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15047: for (var _fun15047_ip = 0;;) switch (_fun15047_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun15047_ip = 83;
                        continue _fun15047
                    }
                case 17:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.int32;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 83:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15047_ip = 160;
                        continue _fun15047
                    }
                case 98:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15047_ip = 142;
                        continue _fun15047
                    }
                case 105:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 142:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 160:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var6 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: UInt32Value$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 13
            };
            var5[0] = var0;
            var0 = ['google.protobuf.UInt32Value'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var0 = arg0;
            var10 = var0.value;
            var11 = 13;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15051: for (var _fun15051_ip = 0;;) switch (_fun15051_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15051_ip = 18;
                        continue _fun15051
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 13;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15052: for (var _fun15052_ip = 0;;) switch (_fun15052_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = 0;
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15052_ip = 116;
                        continue _fun15052
                    }
                case 86:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15053: for (var _fun15053_ip = 0;;) switch (_fun15053_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15053_ip = 27;
                        continue _fun15053
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15053_ip = 338;
                        continue _fun15053
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15053_ip = 298;
                        continue _fun15053
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15053_ip = 218;
                        continue _fun15053
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15053_ip = 320;
                        continue _fun15053
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15053_ip = 186;
                        continue _fun15053
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15053_ip = 320;
                    continue _fun15053;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.uint32;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15053_ip = 82;
                        continue _fun15053
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15054: for (var _fun15054_ip = 0;;) switch (_fun15054_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun15054_ip = 83;
                        continue _fun15054
                    }
                case 17:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.Varint;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.uint32;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 83:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15054_ip = 160;
                        continue _fun15054
                    }
                case 98:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15054_ip = 142;
                        continue _fun15054
                    }
                case 105:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 142:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 160:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var5 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var4 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: BoolValue$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 8
            };
            var5[0] = var0;
            var0 = ['google.protobuf.BoolValue'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var0 = var0.value;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15058: for (var _fun15058_ip = 0;;) switch (_fun15058_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15058_ip = 18;
                        continue _fun15058
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 8;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15059: for (var _fun15059_ip = 0;;) switch (_fun15059_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var10 = false;
                    var0.value = var10;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15059_ip = 114;
                        continue _fun15059
                    }
                case 84:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 114:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15060: for (var _fun15060_ip = 0;;) switch (_fun15060_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15060_ip = 27;
                        continue _fun15060
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15060_ip = 338;
                        continue _fun15060
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15060_ip = 298;
                        continue _fun15060
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15060_ip = 218;
                        continue _fun15060
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15060_ip = 320;
                        continue _fun15060
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15060_ip = 186;
                        continue _fun15060
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15060_ip = 320;
                    continue _fun15060;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.bool;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15060_ip = 82;
                        continue _fun15060
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15061: for (var _fun15061_ip = 0;;) switch (_fun15061_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun15061_ip = 83;
                        continue _fun15061
                    }
                case 17:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.Varint;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.bool;
                    var2 = var4.value;
                    var2 = var3.bind(var5)(var2);
                case 83:
                    var2 = arg2;
                    var3 = var2.writeUnknownFields;
                    if (!(var1 !== var3)) {
                        _fun15061_ip = 158;
                        continue _fun15061
                    }
                case 96:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15061_ip = 140;
                        continue _fun15061
                    }
                case 103:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 140:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 158:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var18 = var4;
    var3 = new var18[var3](var17);
    var4 = var3 instanceof Object ? var3 : var4;
    var3 = var13[var11];
    var3 = var12.bind(var0)(var3);
    var14 = var3.MessageType;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: StringValue$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 9
            };
            var5[0] = var0;
            var0 = ['google.protobuf.StringValue'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var0 = var0.value;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15065: for (var _fun15065_ip = 0;;) switch (_fun15065_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15065_ip = 18;
                        continue _fun15065
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 9;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15066: for (var _fun15066_ip = 0;;) switch (_fun15066_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = '';
                    var0.value = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15066_ip = 118;
                        continue _fun15066
                    }
                case 88:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 118:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15067: for (var _fun15067_ip = 0;;) switch (_fun15067_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15067_ip = 27;
                        continue _fun15067
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15067_ip = 337;
                        continue _fun15067
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15067_ip = 298;
                        continue _fun15067
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15067_ip = 218;
                        continue _fun15067
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15067_ip = 319;
                        continue _fun15067
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15067_ip = 186;
                        continue _fun15067
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15067_ip = 319;
                    continue _fun15067;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.string;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 319:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15067_ip = 82;
                        continue _fun15067
                    }
                case 337:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15068: for (var _fun15068_ip = 0;;) switch (_fun15068_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var2 = var4.value;
                    var1 = '';
                    if (!(var1 !== var2)) {
                        _fun15068_ip = 84;
                        continue _fun15068
                    }
                case 19:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.string;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 84:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15068_ip = 161;
                        continue _fun15068
                    }
                case 99:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15068_ip = 143;
                        continue _fun15068
                    }
                case 106:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 143:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 161:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var14);
    var14 = var3.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var3
        }
    });
    var18 = var14;
    var3 = new var18[var3](var17);
    var3 = var3 instanceof Object ? var3 : var14;
    var11 = var13[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: BytesValue$Type, environment: var5
            var4 = this;
            var1 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = var1.bind(var2)(var4, var3);
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var0 = {
                'no': 1,
                'name': 'value',
                'kind': 'scalar',
                'T': 12
            };
            var5[0] = var0;
            var0 = ['google.protobuf.BytesValue'];
            var0[1] = var5;
            var0 = var1.bind(var2)(var4, var3, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'internalJsonWrite';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var6 = var0.refJsonWriter;
            var5 = var6.scalar;
            var0 = arg0;
            var10 = var0.value;
            var11 = 12;
            var9 = 'value';
            var8 = false;
            var7 = true;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalJsonRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15072: for (var _fun15072_ip = 0;;) switch (_fun15072_ip) {
                case 0:
                    var0 = arg2;
                    var1 = this;
                    if (var0) {
                        _fun15072_ip = 18;
                        continue _fun15072
                    }
                case 9:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 18:
                    var6 = var1.refJsonReader;
                    var5 = var6.scalar;
                    var10 = arg0;
                    var9 = 12;
                    var8 = undefined;
                    var7 = 'value';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.value = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'create';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15073: for (var _fun15073_ip = 0;;) switch (_fun15073_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = global;
                    var6 = var1.Uint8Array;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = 0;
                    var14 = var5;
                    var2 = new var14[var6](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var0.value = var2;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun15073_ip = 142;
                        continue _fun15073
                    }
                case 112:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 142:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun15074: for (var _fun15074_ip = 0;;) switch (_fun15074_ip) {
                case 0:
                    var16 = arg0;
                    var15 = arg2;
                    var0 = arg3;
                    var14 = this;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun15074_ip = 27;
                        continue _fun15074
                    }
                case 18:
                    var1 = var14.create;
                    var0 = var1.bind(var14)();
                case 27:
                    var2 = var16.pos;
                    var1 = arg1;
                    var13 = var2 + var1;
                    var1 = var16.pos;
                    var1 = var1 < var13;
                    var12 = undefined;
                    var10 = 6;
                    var9 = true;
                    var8 = false;
                    var7 = 'throw';
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun15074_ip = 338;
                        continue _fun15074
                    }
                case 82:
                    var1 = var16.tag;
                    var17 = var1.bind(var16)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var12)(var17, var6);
                    var25 = var1[var5];
                    var24 = var1[var4];
                    if (!(var4 !== var25)) {
                        _fun15074_ip = 298;
                        continue _fun15074
                    }
                case 116:
                    var19 = var15.readUnknownField;
                    if (!(var7 !== var19)) {
                        _fun15074_ip = 218;
                        continue _fun15074
                    }
                case 126:
                    var1 = var16.skip;
                    var1 = var1.bind(var16)(var24);
                    var18 = var19;
                    var17 = var1;
                    if (!(var8 !== var19)) {
                        _fun15074_ip = 320;
                        continue _fun15074
                    }
                case 150:
                    var21 = var19;
                    if (!(var9 === var19)) {
                        _fun15074_ip = 186;
                        continue _fun15074
                    }
                case 157:
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var20 = var20[var10];
                    var20 = var22.bind(var12)(var20);
                    var20 = var20.UnknownFieldHandler;
                    var21 = var20.onRead;
                case 186:
                    var30 = var14.typeName;
                    var31 = undefined;
                    var29 = var0;
                    var28 = var25;
                    var27 = var24;
                    var26 = var1;
                    var20 = var31[var21](var30, var29, var28, var27, var26, var25);
                    var18 = var19;
                    var17 = var1;
                    _fun15074_ip = 320;
                    continue _fun15074;
                case 218:
                    var1 = global;
                    var19 = var1.globalThis;
                    var20 = var19.Error;
                    var26 = var14.typeName;
                    var1 = var1.HermesInternal;
                    var22 = var1.concat;
                    var31 = 'Unknown field ';
                    var29 = ' (wire type ';
                    var27 = ') for ';
                    var30 = var25;
                    var28 = var24;
                    var30 = var31[var22](var30, var29, var28, var27, var26, var25);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var31 = var19;
                    var1 = new var31[var20](var30, var29);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 298:
                    var1 = var16.bytes;
                    var1 = var1.bind(var16)();
                    var0.value = var1;
                    var18 = var3;
                    var17 = var2;
                case 320:
                    var1 = var16.pos;
                    var3 = var18;
                    var2 = var17;
                    if (var1 < var13) {
                        _fun15074_ip = 82;
                        continue _fun15074
                    }
                case 338:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun15075: for (var _fun15075_ip = 0;;) switch (_fun15075_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = var4.value;
                    var1 = var1.length;
                    if (!var1) {
                        _fun15075_ip = 85;
                        continue _fun15075
                    }
                case 19:
                    var3 = var0.tag;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.WireType;
                    var2 = var1.LengthDelimited;
                    var1 = 1;
                    var3 = var3.bind(var0)(var1, var2);
                    var2 = var3.bytes;
                    var1 = var4.value;
                    var1 = var2.bind(var3)(var1);
                case 85:
                    var1 = arg2;
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun15075_ip = 162;
                        continue _fun15075
                    }
                case 100:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun15075_ip = 144;
                        continue _fun15075
                    }
                case 107:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 144:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 162:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var11);
    var11 = var1.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var1
        }
    });
    var18 = var11;
    var1 = new var18[var1](var17);
    var1 = var1 instanceof Object ? var1 : var11;
    var11 = 7;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = '../discord_common/js/packages/protos/google/protobuf/wrappers.tsx';
    var11 = var12.bind(var13)(var11);
    var2.DoubleValue = var10;
    var2.FloatValue = var9;
    var2.Int64Value = var8;
    var2.UInt64Value = var7;
    var2.Int32Value = var6;
    var2.UInt32Value = var5;
    var2.BoolValue = var4;
    var2.StringValue = var3;
    var2.BytesValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 1313, 2]);