// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // Original name: aggregateExceptionsFromError, environment: var1
        _fun58513: for (var _fun58513_ip = 0;;) switch (_fun58513_ip) {
            case 0:
                var13 = arg0;
                var12 = arg1;
                var11 = arg2;
                var2 = arg3;
                var10 = arg4;
                var0 = arg5;
                var7 = arg6;
                var6 = arg7;
                var _closure2_slot0 = var13;
                var _closure2_slot1 = var12;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var7;
                var _closure2_slot5 = var6;
                var4 = var0.length;
                var8 = 1;
                var3 = var11 + var8;
                if (!(!(var4 >= var3))) {
                    _fun58513_ip = 301;
                    continue _fun58513
                }
            case 69:
                var3 = _closure1_slot2;
                var9 = undefined;
                var3 = var3.bind(var9)(var0);
                var _closure2_slot6 = var3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var15 = var5.bind(var9)(var3);
                var14 = var15.isInstanceOf;
                var8 = var2[var10];
                var3 = global;
                var5 = var3.Error;
                var5 = var14.bind(var15)(var8, var5);
                if (!var5) {
                    _fun58513_ip = 249;
                    continue _fun58513
                }
            case 131:
                var5 = _closure1_slot4;
                var5 = var5.bind(var9)(var7, var6);
                var5 = var2[var10];
                var8 = var13.bind(var9)(var12, var5);
                var5 = _closure2_slot6;
                var7 = var5.length;
                var5 = _closure1_slot5;
                var25 = undefined;
                var24 = var8;
                var23 = var10;
                var22 = var7;
                var21 = var6;
                var5 = var25[var5](var24, var23, var22, var21, var20);
                var6 = _closure1_slot3;
                var21 = var2[var10];
                var15 = new Array(1);
                var15[0] = var8;
                var14 = var15.concat;
                var16 = _closure1_slot2;
                var4 = _closure2_slot6;
                var4 = var16.bind(var9)(var4);
                var19 = var14.bind(var15)(var4);
                var25 = undefined;
                var24 = var13;
                var23 = var12;
                var22 = var11;
                var20 = var10;
                var18 = var8;
                var17 = var7;
                var4 = var25[var6](var24, var23, var22, var21, var20, var19, var18, var17, var16);
                _closure2_slot6 = var4;
            case 249:
                var5 = var3.Array;
                var4 = var5.isArray;
                var3 = var2.errors;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun58513_ip = 295;
                    continue _fun58513
                }
            case 274:
                var4 = var2.errors;
                var3 = var4.forEach;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun58514: for (var _fun58514_ip = 0;;) switch (_fun58514_ip) {
                        case 0:
                            var10 = arg0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.isInstanceOf;
                            var3 = global;
                            var2 = var3.Error;
                            var2 = var4.bind(var5)(var10, var2);
                            if (!var2) {
                                _fun58514_ip = 215;
                                continue _fun58514
                            }
                        case 54:
                            var6 = _closure1_slot4;
                            var4 = _closure2_slot4;
                            var5 = _closure2_slot5;
                            var4 = var6.bind(var0)(var4, var5);
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var7 = var9.bind(var0)(var8, var10);
                            var4 = _closure2_slot6;
                            var6 = var4.length;
                            var4 = _closure1_slot5;
                            var3 = var3.HermesInternal;
                            var13 = var3.concat;
                            var12 = 'errors[';
                            var11 = arg1;
                            var3 = ']';
                            var20 = var13.bind(var12)(var11, var3);
                            var22 = undefined;
                            var21 = var7;
                            var19 = var6;
                            var18 = var5;
                            var3 = var22[var4](var21, var20, var19, var18, var17);
                            var5 = _closure1_slot3;
                            var19 = _closure2_slot2;
                            var17 = _closure2_slot3;
                            var12 = new Array(1);
                            var12[0] = var7;
                            var11 = var12.concat;
                            var13 = _closure1_slot2;
                            var1 = _closure2_slot6;
                            var1 = var13.bind(var0)(var1);
                            var16 = var11.bind(var12)(var1);
                            var22 = undefined;
                            var21 = var9;
                            var20 = var8;
                            var18 = var10;
                            var15 = var7;
                            var14 = var6;
                            var1 = var22[var5](var21, var20, var19, var18, var17, var16, var15, var14, var13);
                            _closure2_slot6 = var1;
                        case 215:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 295:
                var1 = _closure2_slot6;
                return var1;
            case 301:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: applyExceptionGroupFieldsForParentException, environment: var1
        _fun58515: for (var _fun58515_ip = 0;;) switch (_fun58515_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.mechanism;
                if (var0) {
                    _fun58515_ip = 22;
                    continue _fun58515
                }
            case 12:
                var0 = {
                    'type': 'generic',
                    'handled': true
                };
            case 22:
                var1.mechanism = var0;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = var1.mechanism;
                var2 = var1.type;
                var0 = 'AggregateError';
                var3 = var0 === var2;
                if (!var3) {
                    _fun58515_ip = 75;
                    continue _fun58515
                }
            case 63:
                var0 = {};
                var2 = true;
                var0.is_exception_group = var2;
                var3 = var0;
            case 75:
                var2 = {};
                var0 = arg1;
                var2.exception_id = var0;
                var10 = {};
                var11 = var6;
                var9 = var4;
                var8 = var3;
                var7 = var2;
                var0 = var11[var5](var10, var9, var8, var7, var6);
                var1.mechanism = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: applyExceptionGroupFieldsForChildException, environment: var1
        _fun58516: for (var _fun58516_ip = 0;;) switch (_fun58516_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.mechanism;
                if (var0) {
                    _fun58516_ip = 22;
                    continue _fun58516
                }
            case 12:
                var0 = {
                    'type': 'generic',
                    'handled': true
                };
            case 22:
                var1.mechanism = var0;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var3 = var1.mechanism;
                var2 = {};
                var0 = 'chained';
                var2.type = var0;
                var0 = arg1;
                var2.source = var0;
                var0 = arg2;
                var2.exception_id = var0;
                var0 = arg3;
                var2.parent_id = var0;
                var0 = {};
                var0 = var4.bind(var5)(var0, var3, var2);
                var1.mechanism = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function(arg0, arg1) { // Original name: applyAggregateErrorsToEvent, environment: var1
        _fun58517: for (var _fun58517_ip = 0;;) switch (_fun58517_ip) {
            case 0:
                var0 = undefined;
                var5 = undefined;
                var2 = arguments.length;
                var1 = 2;
                var2 = var2 > var1;
                var3 = 250;
                var4 = var3;
                if (!var2) {
                    _fun58517_ip = 38;
                    continue _fun58517
                }
            case 23:
                var2 = arguments[var1];
                var4 = var3;
                if (!(var0 !== var2)) {
                    _fun58517_ip = 38;
                    continue _fun58517
                }
            case 34:
                var4 = arguments[var1];
            case 38:
                var2 = arguments.length;
                var1 = 3;
                var2 = var2 > var1;
                var11 = undefined;
                if (!var2) {
                    _fun58517_ip = 57;
                    continue _fun58517
                }
            case 53:
                var11 = arguments[var1];
            case 57:
                var2 = arguments.length;
                var1 = 4;
                var2 = var2 > var1;
                var10 = undefined;
                if (!var2) {
                    _fun58517_ip = 76;
                    continue _fun58517
                }
            case 72:
                var10 = arguments[var1];
            case 76:
                var1 = arguments.length;
                var2 = 5;
                var3 = var1 > var2;
                var1 = undefined;
                if (!var3) {
                    _fun58517_ip = 95;
                    continue _fun58517
                }
            case 91:
                var1 = arguments[var2];
            case 95:
                var3 = arguments.length;
                var2 = 6;
                var6 = var3 > var2;
                var3 = undefined;
                if (!var6) {
                    _fun58517_ip = 114;
                    continue _fun58517
                }
            case 110:
                var3 = arguments[var2];
            case 114:
                var2 = var1.exception;
                if (!var2) {
                    _fun58517_ip = 338;
                    continue _fun58517
                }
            case 126:
                var2 = var1.exception;
                var2 = var2.values;
                if (!var2) {
                    _fun58517_ip = 338;
                    continue _fun58517
                }
            case 143:
                if (!var3) {
                    _fun58517_ip = 338;
                    continue _fun58517
                }
            case 149:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 1;
                var2 = var2[var7];
                var9 = var6.bind(var0)(var2);
                var8 = var9.isInstanceOf;
                var6 = var3.originalException;
                var2 = global;
                var2 = var2.Error;
                var2 = var8.bind(var9)(var6, var2);
                if (!var2) {
                    _fun58517_ip = 338;
                    continue _fun58517
                }
            case 204:
                var2 = var1.exception;
                var2 = var2.values;
                var2 = var2.length;
                var9 = 0;
                var2 = var2 > var9;
                var8 = undefined;
                if (!var2) {
                    _fun58517_ip = 266;
                    continue _fun58517
                }
            case 231:
                var2 = var1.exception;
                var6 = var2.values;
                var2 = var1.exception;
                var2 = var2.values;
                var2 = var2.length;
                var2 = var2 - var7;
                var8 = var6[var2];
            case 266:
                if (!var8) {
                    _fun58517_ip = 338;
                    continue _fun58517
                }
            case 269:
                var2 = var1.exception;
                var7 = _closure1_slot3;
                var16 = var3.originalException;
                var1 = var1.exception;
                var14 = var1.values;
                var19 = arg0;
                var18 = arg1;
                var20 = undefined;
                var17 = var10;
                var15 = var11;
                var13 = var8;
                var12 = 0;
                var3 = var20[var7](var19, var18, var17, var16, var15, var14, var13, var12, var11);
                var1 = function(arg0, arg1) { // Original name: truncateAggregateExceptions, environment: var1
                    var2 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun58519: for (var _fun58519_ip = 0;;) switch (_fun58519_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.value;
                                if (!var1) {
                                    _fun58519_ip = 66;
                                    continue _fun58519
                                }
                            case 11:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.truncate;
                                var2 = var0.value;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var2, var1);
                                var0.value = var1;
                            case 66:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var1.bind(var0)(var3, var4);
                var2.values = var1;
            case 338:
                return var0;
        }
    };
    var2.applyAggregateErrorsToEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 7128, 7129]);