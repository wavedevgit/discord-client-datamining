// ../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86158: for (var _fun86158_ip = 0;;) switch (_fun86158_ip) {
        case 0:
            var9 = require;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var10;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
                _fun86159: for (var _fun86159_ip = 0;;) switch (_fun86159_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun86159_ip = 45;
                            continue _fun86159
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun86159_ip = 54;
                            continue _fun86159
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun86159_ip = 344;
                            continue _fun86159
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun86159_ip = 322;
                            continue _fun86159
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun86159_ip = 282;
                            continue _fun86159
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun86159_ip = 269;
                            continue _fun86159
                        }
                    case 109:
                        var6 = {};
                        var8 = var6.toString;
                        var6 = var8.call;
                        var10 = var6.bind(var8)(var2);
                        var9 = var10.slice;
                        var8 = 8;
                        var6 = -1;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = 'Object';
                        var6 = var6 === var8;
                        if (!var6) {
                            _fun86159_ip = 162;
                            continue _fun86159
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun86159_ip = 178;
                            continue _fun86159
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun86159_ip = 248;
                            continue _fun86159
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun86159_ip = 248;
                            continue _fun86159
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun86159_ip = 233;
                            continue _fun86159
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun86159_ip = 246;
                            continue _fun86159
                        }
                    case 233:
                        var8 = _closure1_slot13;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun86159_ip = 264;
                        continue _fun86159;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun86159_ip = 282;
                        continue _fun86159;
                    case 269:
                        var6 = _closure1_slot13;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun86159_ip = 322;
                            continue _fun86159
                        }
                    case 288:
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 322:
                        if (!var3) {
                            _fun86159_ip = 329;
                            continue _fun86159
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun86160: for (var _fun86160_ip = 0;;) switch (_fun86160_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun86160_ip = 56;
                                        continue _fun86160
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot1 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun86160_ip = 67;
                                    continue _fun86160;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        return var0;
                    case 344:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                _fun86161: for (var _fun86161_ip = 0;;) switch (_fun86161_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun86161_ip = 23;
                            continue _fun86161
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun86161_ip = 33;
                            continue _fun86161
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var0 = var0.bind(var2)(var1);
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun86161_ip = 70;
                            continue _fun86161
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun86161_ip = 55;
                            continue _fun86161
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var7 = function() { // Original name: getUseStateFromStoresExecutionWindowThresholdMs, environment: var1
                _fun86162: for (var _fun86162_ip = 0;;) switch (_fun86162_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86162_ip = 15;
                            continue _fun86162
                        }
                    case 9:
                        var0 = 60000;
                    case 15:
                        return var0;
                }
            };
            var6 = function() { // Original name: getUseStateFromStoresExecutionTimeWarningThresholdMs, environment: var1
                _fun86163: for (var _fun86163_ip = 0;;) switch (_fun86163_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86163_ip = 12;
                            continue _fun86163
                        }
                    case 9:
                        var0 = 10;
                    case 12:
                        return var0;
                }
            };
            var5 = function() { // Original name: getUseStateFromStoresExecutionCountWarningThreshold, environment: var1
                _fun86164: for (var _fun86164_ip = 0;;) switch (_fun86164_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86164_ip = 15;
                            continue _fun86164
                        }
                    case 9:
                        var0 = 1000;
                    case 15:
                        return var0;
                }
            };
            var4 = function() { // Original name: getUseStateFromStoresSpecificHookFilter, environment: var1
                _fun86165: for (var _fun86165_ip = 0;;) switch (_fun86165_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86165_ip = 13;
                            continue _fun86165
                        }
                    case 9:
                        var0 = '';
                    case 13:
                        return var0;
                }
            };
            var3 = function() { // Original name: getUseStateFromStoresDebuggingEnabled, environment: var1
                _fun86166: for (var _fun86166_ip = 0;;) switch (_fun86166_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86166_ip = 11;
                            continue _fun86166
                        }
                    case 9:
                        var0 = false;
                    case 11:
                        return var0;
                }
            };
            var0 = function(arg0) { // Original name: hasExceededThreshold, environment: var1
                _fun86167: for (var _fun86167_ip = 0;;) switch (_fun86167_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.name;
                        var0 = 'anonymous';
                        var0 = var0 !== var1;
                        if (!var0) {
                            _fun86167_ip = 92;
                            continue _fun86167
                        }
                    case 21:
                        var2 = _closure1_slot7;
                        var1 = '';
                        var1 = var1 === var2;
                        if (var1) {
                            _fun86167_ip = 52;
                            continue _fun86167
                        }
                    case 39:
                        var5 = var4.name;
                        var2 = _closure1_slot7;
                        var1 = var5 === var2;
                    case 52:
                        if (!var1) {
                            _fun86167_ip = 89;
                            continue _fun86167
                        }
                    case 55:
                        var5 = var4.execCount;
                        var2 = _closure1_slot6;
                        var2 = var5 > var2;
                        if (var2) {
                            _fun86167_ip = 86;
                            continue _fun86167
                        }
                    case 72:
                        var4 = var4.execTime;
                        var3 = _closure1_slot5;
                        var2 = var4 > var3;
                    case 86:
                        var1 = var2;
                    case 89:
                        var0 = var1;
                    case 92:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var13 = function() { // Original name: flushViolators, environment: var1
                _fun86168: for (var _fun86168_ip = 0;;) switch (_fun86168_ip) {
                    case 0:
                        var2 = _closure1_slot12;
                        var1 = _closure1_slot10;
                        var0 = undefined;
                        var10 = var2.bind(var0)(var1);
                        var1 = var10.bind(var0)();
                        var2 = var1.done;
                        var7 = false;
                        var6 = 2;
                        var5 = 0;
                        var4 = 1;
                        var3 = var1;
                        var1 = false;
                        if (var2) {
                            _fun86168_ip = 99;
                            continue _fun86168
                        }
                    case 45:
                        var11 = var3.value;
                        var2 = _closure1_slot2;
                        var2 = var2.bind(var0)(var11, var6);
                        var11 = var2[var5];
                        var11 = _closure1_slot14;
                        var2 = var2[var4];
                        var2 = var11.bind(var0)(var2);
                        var1 = true;
                        if (var2) {
                            _fun86168_ip = 99;
                            continue _fun86168
                        }
                    case 82:
                        var11 = var10.bind(var0)();
                        var2 = var11.done;
                        var3 = var11;
                        var1 = false;
                        if (!var2) {
                            _fun86168_ip = 45;
                            continue _fun86168
                        }
                    case 99:
                        if (var1) {
                            _fun86168_ip = 136;
                            continue _fun86168
                        }
                    case 102:
                        var2 = _closure1_slot7;
                        var1 = '';
                        if (!(var1 === var2)) {
                            _fun86168_ip = 136;
                            continue _fun86168
                        }
                    case 114:
                        var3 = _closure1_slot3;
                        var2 = var3.log;
                        var1 = 'No violators found';
                        var1 = var2.bind(var3)(var1);
                        _fun86168_ip = 144;
                        continue _fun86168;
                    case 136:
                        var1 = _closure1_slot11;
                        var1 = var1.bind(var0)();
                    case 144:
                        var2 = _closure1_slot12;
                        var1 = _closure1_slot10;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun86168_ip = 225;
                            continue _fun86168
                        }
                    case 169:
                        var9 = var2.value;
                        var1 = _closure1_slot2;
                        var1 = var1.bind(var0)(var9, var6);
                        var9 = var1[var5];
                        var1 = var1[var4];
                        var1.warned = var7;
                        var1.execTime = var5;
                        var1.execCount = var5;
                        var9 = var3.bind(var0)();
                        var1 = var9.done;
                        var2 = var9;
                        if (!var1) {
                            _fun86168_ip = 169;
                            continue _fun86168
                        }
                    case 225:
                        return var0;
                }
            };
            var _closure1_slot15 = var13;
            var8 = global;
            var14 = var8.Object;
            var12 = var14.defineProperty;
            var11 = {};
            var0 = true;
            var11.value = var0;
            var0 = '__esModule';
            var0 = var12.bind(var14)(var2, var0, var11);
            var0 = 0;
            var12 = var10[var0];
            var11 = arg2;
            var0 = undefined;
            var11 = var11.bind(var0)(var12);
            var _closure1_slot2 = var11;
            var11 = 1;
            var11 = var10[var11];
            var11 = var9.bind(var0)(var11);
            var14 = var11.Logger;
            var11 = var14.prototype;
            var12 = Object.create(var11, {
                constructor: {
                    value: var14
                }
            });
            var17 = 'useStateFromStores';
            var18 = var12;
            var11 = new var18[var14](var17, var16);
            var11 = var11 instanceof Object ? var11 : var12;
            var _closure1_slot3 = var11;
            var11 = var7.bind(var0)();
            var _closure1_slot4 = var11;
            var11 = var6.bind(var0)();
            var _closure1_slot5 = var11;
            var11 = var5.bind(var0)();
            var _closure1_slot6 = var11;
            var11 = var4.bind(var0)();
            var _closure1_slot7 = var11;
            var11 = var3.bind(var0)();
            var _closure1_slot8 = var11;
            var _closure1_slot9 = var0;
            if (!var11) {
                _fun86158_ip = 263;
                continue _fun86158
            }
        case 243:
            var12 = var8.setInterval;
            var11 = _closure1_slot4;
            var11 = var12.bind(var0)(var13, var11);
            _closure1_slot9 = var11;
        case 263:
            var8 = var8.Map;
            var11 = var8.prototype;
            var11 = Object.create(var11, {
                constructor: {
                    value: var8
                }
            });
            var18 = var11;
            var8 = new var18[var8](var17);
            var8 = var8 instanceof Object ? var8 : var11;
            var _closure1_slot10 = var8;
            var8 = function() { // Original name: printViolators, environment: var1
                _fun86169: for (var _fun86169_ip = 0;;) switch (_fun86169_ip) {
                    case 0:
                        var18 = arguments[0];
                        var17 = arguments[1];
                        var16 = arguments[2];
                        var5 = arguments[3];
                        var0 = undefined;
                        if (!(var18 === var0)) {
                            _fun86169_ip = 21;
                            continue _fun86169
                        }
                    case 18:
                        var18 = 34;
                    case 21:
                        if (!(var17 === var0)) {
                            _fun86169_ip = 28;
                            continue _fun86169
                        }
                    case 25:
                        var17 = 20;
                    case 28:
                        if (!(var16 === var0)) {
                            _fun86169_ip = 35;
                            continue _fun86169
                        }
                    case 32:
                        var16 = 20;
                    case 35:
                        if (!(var5 === var0)) {
                            _fun86169_ip = 54;
                            continue _fun86169
                        }
                    case 39:
                        var1 = var18 + var17;
                        var2 = var1 + var16;
                        var1 = 6;
                        var5 = var2 + var1;
                    case 54:
                        var7 = _closure1_slot3;
                        var3 = var7.log;
                        var4 = '|';
                        var2 = var4.padEnd;
                        var6 = '-';
                        var2 = var2.bind(var4)(var5, var6);
                        var2 = var2 + var4;
                        var2 = var3.bind(var7)(var2);
                        var7 = _closure1_slot3;
                        var3 = var7.log;
                        var8 = '| Consumers of `useStateFromStores` exceeding warning thresholds:';
                        var2 = var8.padEnd;
                        var15 = ' ';
                        var2 = var2.bind(var8)(var5, var15);
                        var2 = var2 + var4;
                        var2 = var3.bind(var7)(var2);
                        var7 = _closure1_slot3;
                        var3 = var7.log;
                        var2 = var4.padEnd;
                        var2 = var2.bind(var4)(var5, var6);
                        var2 = var2 + var4;
                        var2 = var3.bind(var7)(var2);
                        var7 = _closure1_slot3;
                        var3 = var7.log;
                        var8 = 'Function/Component Name';
                        var2 = var8.padEnd;
                        var10 = var2.bind(var8)(var18, var15);
                        var8 = 'Total Exec Time';
                        var2 = var8.padEnd;
                        var27 = var2.bind(var8)(var17, var15);
                        var8 = 'Total Exec Count';
                        var2 = var8.padEnd;
                        var25 = var2.bind(var8)(var16, var15);
                        var14 = global;
                        var2 = var14.HermesInternal;
                        var2 = var2.concat;
                        var13 = '| ';
                        var30 = var13;
                        var29 = var10;
                        var28 = var13;
                        var26 = var13;
                        var24 = var4;
                        var2 = var30[var2](var29, var28, var27, var26, var25, var24, var23);
                        var2 = var3.bind(var7)(var2);
                        var7 = _closure1_slot3;
                        var3 = var7.log;
                        var2 = var4.padEnd;
                        var2 = var2.bind(var4)(var5, var6);
                        var2 = var2 + var4;
                        var2 = var3.bind(var7)(var2);
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot10;
                        var12 = var3.bind(var0)(var2);
                        var3 = var12.bind(var0)();
                        var2 = var3.done;
                        var11 = 2;
                        var10 = 'ms';
                        var9 = 0;
                        var8 = 1;
                        var7 = '';
                        if (var2) {
                            _fun86169_ip = 538;
                            continue _fun86169
                        }
                    case 347:
                        var19 = var3.value;
                        var2 = _closure1_slot2;
                        var2 = var2.bind(var0)(var19, var11);
                        var22 = var2[var9];
                        var2 = var2[var8];
                        var19 = _closure1_slot7;
                        var19 = var7 !== var19;
                        if (!var19) {
                            _fun86169_ip = 389;
                            continue _fun86169
                        }
                    case 381:
                        var20 = _closure1_slot7;
                        var19 = var22 === var20;
                    case 389:
                        if (var19) {
                            _fun86169_ip = 401;
                            continue _fun86169
                        }
                    case 392:
                        var20 = _closure1_slot14;
                        var19 = var20.bind(var0)(var2);
                    case 401:
                        if (!var19) {
                            _fun86169_ip = 520;
                            continue _fun86169
                        }
                    case 404:
                        var20 = _closure1_slot3;
                        var19 = var20.log;
                        var21 = var22.padEnd;
                        var23 = var21.bind(var22)(var18, var15);
                        var22 = var2.execTime;
                        var21 = var22.toFixed;
                        var21 = var21.bind(var22)(var11);
                        var22 = var21 + var10;
                        var21 = var22.padEnd;
                        var27 = var21.bind(var22)(var17, var15);
                        var21 = var2.execCount;
                        var2 = var21.toString;
                        var21 = var2.bind(var21)();
                        var2 = var21.padEnd;
                        var25 = var2.bind(var21)(var16, var15);
                        var2 = var14.HermesInternal;
                        var2 = var2.concat;
                        var30 = var13;
                        var29 = var23;
                        var28 = var13;
                        var26 = var13;
                        var24 = var4;
                        var2 = var30[var2](var29, var28, var27, var26, var25, var24, var23);
                        var2 = var19.bind(var20)(var2);
                    case 520:
                        var19 = var12.bind(var0)();
                        var2 = var19.done;
                        var3 = var19;
                        if (!var2) {
                            _fun86169_ip = 347;
                            continue _fun86169
                        }
                    case 538:
                        var3 = _closure1_slot3;
                        var2 = var3.log;
                        var1 = var4.padEnd;
                        var1 = var1.bind(var4)(var5, var6);
                        var1 = var1 + var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var _closure1_slot11 = var8;
            var8 = 3;
            var8 = var10[var8];
            var10 = var9.bind(var0)(var8);
            var9 = var10.fileFinishedImporting;
            var8 = '../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx';
            var8 = var9.bind(var10)(var8);
            var2.getUseStateFromStoresExecutionWindowThresholdMs = var7;
            var7 = function(arg0) { // Original name: setUseStateFromStoresExecutionWindowThresholdMs, environment: var1
                _fun86170: for (var _fun86170_ip = 0;;) switch (_fun86170_ip) {
                    case 0:
                        var5 = arg0;
                        _closure1_slot4 = var5;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.Storage;
                        var3 = var4.set;
                        var1 = 'useStateFromStoresExecutionWindowThresholdMs';
                        var1 = var3.bind(var4)(var1, var5);
                        var1 = global;
                        var4 = var1.clearInterval;
                        var3 = _closure1_slot9;
                        var3 = var4.bind(var0)(var3);
                        var3 = _closure1_slot8;
                        if (!var3) {
                            _fun86170_ip = 103;
                            continue _fun86170
                        }
                    case 79:
                        var4 = var1.setInterval;
                        var3 = _closure1_slot15;
                        var1 = _closure1_slot4;
                        var1 = var4.bind(var0)(var3, var1);
                        _closure1_slot9 = var1;
                    case 103:
                        return var0;
                }
            };
            var2.setUseStateFromStoresExecutionWindowThresholdMs = var7;
            var2.getUseStateFromStoresExecutionTimeWarningThresholdMs = var6;
            var6 = function(arg0) { // Original name: setUseStateFromStoresExecutionTimeWarningThresholdMs, environment: var1
                var4 = arg0;
                _closure1_slot5 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'useStateFromStoresExecutionTimeWarningThresholdMs';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
            var2.setUseStateFromStoresExecutionTimeWarningThresholdMs = var6;
            var2.getUseStateFromStoresExecutionCountWarningThreshold = var5;
            var5 = function(arg0) { // Original name: setUseStateFromStoresExecutionCountWarningThreshold, environment: var1
                var4 = arg0;
                _closure1_slot6 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'useStateFromStoresExecutionCountWarningThreshold';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
            var2.setUseStateFromStoresExecutionCountWarningThreshold = var5;
            var5 = function(arg0) { // Original name: setUseStateFromStoresSpecificHookFilter, environment: var1
                var4 = arg0;
                _closure1_slot7 = var4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = 'useStateFromStoresSpecificHookFilter';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
            };
            var2.setUseStateFromStoresSpecificHookFilter = var5;
            var2.getUseStateFromStoresSpecificHookFilter = var4;
            var2.getUseStateFromStoresDebuggingEnabled = var3;
            var3 = function(arg0) { // Original name: setUseStateFromStoresDebuggingEnabled, environment: var1
                _fun86174: for (var _fun86174_ip = 0;;) switch (_fun86174_ip) {
                    case 0:
                        var5 = arg0;
                        _closure1_slot8 = var5;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.Storage;
                        var3 = var4.set;
                        var1 = 'useStateFromStoresDebuggingEnabled';
                        var1 = var3.bind(var4)(var1, var5);
                        var3 = _closure1_slot8;
                        var1 = global;
                        if (var3) {
                            _fun86174_ip = 85;
                            continue _fun86174
                        }
                    case 64:
                        var4 = var1.clearInterval;
                        var3 = _closure1_slot9;
                        var3 = var4.bind(var0)(var3);
                        _closure1_slot9 = var0;
                        _fun86174_ip = 109;
                        continue _fun86174;
                    case 85:
                        var4 = var1.setInterval;
                        var3 = _closure1_slot15;
                        var1 = _closure1_slot4;
                        var1 = var4.bind(var0)(var3, var1);
                        _closure1_slot9 = var1;
                    case 109:
                        return var0;
                }
            };
            var2.setUseStateFromStoresDebuggingEnabled = var3;
            var3 = function() { // Original name: getUseStateFromStoresHookInfo, environment: var1
                _fun86175: for (var _fun86175_ip = 0;;) switch (_fun86175_ip) {
                    case 0:
                        var0 = _closure1_slot8;
                        if (var0) {
                            _fun86175_ip = 14;
                            continue _fun86175
                        }
                    case 10:
                        var0 = undefined;
                        return var0;
                    case 14:
                        var0 = global;
                        var0 = var0.Error;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var15 = var2;
                        var0 = new var15[var0](var14);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var4 = var0.stack;
                        var2 = null;
                        var0 = var2 == var4;
                        var11 = undefined;
                        if (var0) {
                            _fun86175_ip = 73;
                            continue _fun86175
                        }
                    case 59:
                        var3 = var4.split;
                        var0 = '\n';
                        var11 = var3.bind(var4)(var0);
                    case 73:
                        if (!(var2 == var11)) {
                            _fun86175_ip = 81;
                            continue _fun86175
                        }
                    case 77:
                        var11 = new Array(0);
                    case 81:
                        var0 = var11.length;
                        var10 = 3;
                        var0 = var10 < var0;
                        var9 = 'unknown';
                        var8 = 'useStateFromStoresObject';
                        var7 = 'useStateFromStoresArray';
                        var6 = ' ';
                        var5 = 1;
                        var4 = 'useStateFromStores';
                        var3 = var9;
                        if (!var0) {
                            _fun86175_ip = 185;
                            continue _fun86175
                        }
                    case 124:
                        var12 = var11[var10];
                        var0 = var12.trim;
                        var12 = var0.bind(var12)();
                        var0 = var12.split;
                        var0 = var0.bind(var12)(var6);
                        var0 = var0[var5];
                        if (!(var4 !== var0)) {
                            _fun86175_ip = 167;
                            continue _fun86175
                        }
                    case 156:
                        if (!(var7 !== var0)) {
                            _fun86175_ip = 167;
                            continue _fun86175
                        }
                    case 160:
                        var3 = var0;
                        if (!(var8 === var3)) {
                            _fun86175_ip = 185;
                            continue _fun86175
                        }
                    case 167:
                        var10 = var10 + 1;
                        var0 = var11.length;
                        var0 = var10 < var0;
                        var3 = var9;
                        if (var0) {
                            _fun86175_ip = 124;
                            continue _fun86175
                        }
                    case 185:
                        var4 = _closure1_slot10;
                        var0 = var4.get;
                        var0 = var0.bind(var4)(var3);
                        if (!(var2 == var0)) {
                            _fun86175_ip = 226;
                            continue _fun86175
                        }
                    case 203:
                        var2 = {
                            'name': null,
                            'execCount': 0,
                            'execTime': 0,
                            'warned': false
                        };
                        var2.name = var3;
                        var0 = var2;
                    case 226:
                        var2 = _closure1_slot10;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var2.getUseStateFromStoresHookInfo = var3;
            var1 = function(arg0, arg1) { // Original name: trackGetStateFromStoresPerformance, environment: var1
                _fun86176: for (var _fun86176_ip = 0;;) switch (_fun86176_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var0 = _closure1_slot8;
                        if (!var0) {
                            _fun86176_ip = 203;
                            continue _fun86176
                        }
                    case 19:
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun86176_ip = 203;
                            continue _fun86176
                        }
                    case 28:
                        var2 = global;
                        var5 = var2.performance;
                        var0 = var5.now;
                        var8 = var0.bind(var5)();
                        var6 = undefined;
                        var0 = var1.bind(var6)();
                        var7 = var2.performance;
                        var5 = var7.now;
                        var5 = var5.bind(var7)();
                        var7 = var4.execTime;
                        var5 = var5 - var8;
                        var5 = var7 + var5;
                        var4.execTime = var5;
                        var5 = var4.execCount;
                        var5 = var5 + 1;
                        var4.execCount = var5;
                        var7 = var4.warned;
                        var5 = false;
                        if (!(var5 === var7)) {
                            _fun86176_ip = 201;
                            continue _fun86176
                        }
                    case 113:
                        var5 = _closure1_slot14;
                        var5 = var5.bind(var6)(var4);
                        if (!var5) {
                            _fun86176_ip = 201;
                            continue _fun86176
                        }
                    case 125:
                        var5 = true;
                        var4.warned = var5;
                        var17 = var4.name;
                        var15 = var4.execTime;
                        var13 = var4.execCount;
                        var4 = _closure1_slot3;
                        var3 = var4.log;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var18 = '';
                        var16 = ' cumulatively used ';
                        var14 = 'ms of execution time and ran ';
                        var12 = ' times.';
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                        var2 = var3.bind(var4)(var2);
                    case 201:
                        return var0;
                    case 203:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var2.trackGetStateFromStoresPerformance = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4, 587, 2]);