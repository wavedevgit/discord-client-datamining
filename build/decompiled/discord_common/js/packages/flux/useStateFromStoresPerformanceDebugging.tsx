// ../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86721: for (var _fun86721_ip = 0;;) switch (_fun86721_ip) {
        case 0:
            var9 = require;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var9;
            var _closure1_slot1 = var10;
            var0 = function arg0, arg1() {
                _fun86722: for (var _fun86722_ip = 0;;) switch (_fun86722_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun86722_ip = 46;
                            continue _fun86722
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun86722_ip = 55;
                            continue _fun86722
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun86722_ip = 345;
                            continue _fun86722
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun86722_ip = 323;
                            continue _fun86722
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun86722_ip = 283;
                            continue _fun86722
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun86722_ip = 270;
                            continue _fun86722
                        }
                    case 110:
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
                            _fun86722_ip = 163;
                            continue _fun86722
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun86722_ip = 179;
                            continue _fun86722
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun86722_ip = 249;
                            continue _fun86722
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun86722_ip = 249;
                            continue _fun86722
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun86722_ip = 234;
                            continue _fun86722
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun86722_ip = 247;
                            continue _fun86722
                        }
                    case 234:
                        var8 = _closure1_slot13;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun86722_ip = 265;
                        continue _fun86722;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun86722_ip = 283;
                        continue _fun86722;
                    case 270:
                        var6 = _closure1_slot13;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun86722_ip = 323;
                            continue _fun86722
                        }
                    case 289:
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
                    case 323:
                        if (!var3) {
                            _fun86722_ip = 330;
                            continue _fun86722
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun86723: for (var _fun86723_ip = 0;;) switch (_fun86723_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun86723_ip = 56;
                                        continue _fun86723
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
                                    _fun86723_ip = 67;
                                    continue _fun86723;
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
                    case 345:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function arg0, arg1() {
                _fun86724: for (var _fun86724_ip = 0;;) switch (_fun86724_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun86724_ip = 23;
                            continue _fun86724
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun86724_ip = 33;
                            continue _fun86724
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
                            _fun86724_ip = 70;
                            continue _fun86724
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun86724_ip = 55;
                            continue _fun86724
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var7 = function() {
                _fun86725: for (var _fun86725_ip = 0;;) switch (_fun86725_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86725_ip = 15;
                            continue _fun86725
                        }
                    case 9:
                        var0 = 60000;
                    case 15:
                        return var0;
                }
            };
            var6 = function() {
                _fun86726: for (var _fun86726_ip = 0;;) switch (_fun86726_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86726_ip = 12;
                            continue _fun86726
                        }
                    case 9:
                        var0 = 10;
                    case 12:
                        return var0;
                }
            };
            var5 = function() {
                _fun86727: for (var _fun86727_ip = 0;;) switch (_fun86727_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86727_ip = 15;
                            continue _fun86727
                        }
                    case 9:
                        var0 = 1000;
                    case 15:
                        return var0;
                }
            };
            var4 = function() {
                _fun86728: for (var _fun86728_ip = 0;;) switch (_fun86728_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86728_ip = 13;
                            continue _fun86728
                        }
                    case 9:
                        var0 = '';
                    case 13:
                        return var0;
                }
            };
            var3 = function() {
                _fun86729: for (var _fun86729_ip = 0;;) switch (_fun86729_ip) {
                    case 0:
                        var0 = arguments[0];
                        var1 = undefined;
                        if (!(var0 === var1)) {
                            _fun86729_ip = 11;
                            continue _fun86729
                        }
                    case 9:
                        var0 = false;
                    case 11:
                        return var0;
                }
            };
            var0 = function arg0() {
                _fun86730: for (var _fun86730_ip = 0;;) switch (_fun86730_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.name;
                        var0 = 'anonymous';
                        var0 = var0 !== var1;
                        if (!var0) {
                            _fun86730_ip = 92;
                            continue _fun86730
                        }
                    case 21:
                        var2 = _closure1_slot7;
                        var1 = '';
                        var1 = var1 === var2;
                        if (var1) {
                            _fun86730_ip = 52;
                            continue _fun86730
                        }
                    case 39:
                        var5 = var4.name;
                        var2 = _closure1_slot7;
                        var1 = var5 === var2;
                    case 52:
                        if (!var1) {
                            _fun86730_ip = 89;
                            continue _fun86730
                        }
                    case 55:
                        var5 = var4.execCount;
                        var2 = _closure1_slot6;
                        var2 = var5 > var2;
                        if (var2) {
                            _fun86730_ip = 86;
                            continue _fun86730
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
            var13 = function() {
                _fun86731: for (var _fun86731_ip = 0;;) switch (_fun86731_ip) {
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
                            _fun86731_ip = 99;
                            continue _fun86731
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
                            _fun86731_ip = 99;
                            continue _fun86731
                        }
                    case 82:
                        var11 = var10.bind(var0)();
                        var2 = var11.done;
                        var3 = var11;
                        var1 = false;
                        if (!var2) {
                            _fun86731_ip = 45;
                            continue _fun86731
                        }
                    case 99:
                        if (var1) {
                            _fun86731_ip = 136;
                            continue _fun86731
                        }
                    case 102:
                        var2 = _closure1_slot7;
                        var1 = '';
                        if (!(var1 === var2)) {
                            _fun86731_ip = 136;
                            continue _fun86731
                        }
                    case 114:
                        var3 = _closure1_slot3;
                        var2 = var3.log;
                        var1 = 'No violators found';
                        var1 = var2.bind(var3)(var1);
                        _fun86731_ip = 144;
                        continue _fun86731;
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
                            _fun86731_ip = 225;
                            continue _fun86731
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
                            _fun86731_ip = 169;
                            continue _fun86731
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
                _fun86721_ip = 263;
                continue _fun86721
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
            var8 = function() {
                _fun86732: for (var _fun86732_ip = 0;;) switch (_fun86732_ip) {
                    case 0:
                        var18 = arguments[0];
                        var17 = arguments[1];
                        var16 = arguments[2];
                        var5 = arguments[3];
                        var0 = undefined;
                        if (!(var18 === var0)) {
                            _fun86732_ip = 21;
                            continue _fun86732
                        }
                    case 18:
                        var18 = 34;
                    case 21:
                        if (!(var17 === var0)) {
                            _fun86732_ip = 28;
                            continue _fun86732
                        }
                    case 25:
                        var17 = 20;
                    case 28:
                        if (!(var16 === var0)) {
                            _fun86732_ip = 35;
                            continue _fun86732
                        }
                    case 32:
                        var16 = 20;
                    case 35:
                        if (!(var5 === var0)) {
                            _fun86732_ip = 54;
                            continue _fun86732
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
                            _fun86732_ip = 538;
                            continue _fun86732
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
                            _fun86732_ip = 389;
                            continue _fun86732
                        }
                    case 381:
                        var20 = _closure1_slot7;
                        var19 = var22 === var20;
                    case 389:
                        if (var19) {
                            _fun86732_ip = 401;
                            continue _fun86732
                        }
                    case 392:
                        var20 = _closure1_slot14;
                        var19 = var20.bind(var0)(var2);
                    case 401:
                        if (!var19) {
                            _fun86732_ip = 520;
                            continue _fun86732
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
                            _fun86732_ip = 347;
                            continue _fun86732
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
            var7 = function arg0() {
                _fun86733: for (var _fun86733_ip = 0;;) switch (_fun86733_ip) {
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
                            _fun86733_ip = 103;
                            continue _fun86733
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
            var6 = function arg0() {
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
            var5 = function arg0() {
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
            var5 = function arg0() {
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
            var3 = function arg0() {
                _fun86737: for (var _fun86737_ip = 0;;) switch (_fun86737_ip) {
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
                            _fun86737_ip = 85;
                            continue _fun86737
                        }
                    case 64:
                        var4 = var1.clearInterval;
                        var3 = _closure1_slot9;
                        var3 = var4.bind(var0)(var3);
                        _closure1_slot9 = var0;
                        _fun86737_ip = 109;
                        continue _fun86737;
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
            var3 = function() {
                _fun86738: for (var _fun86738_ip = 0;;) switch (_fun86738_ip) {
                    case 0:
                        var0 = _closure1_slot8;
                        if (var0) {
                            _fun86738_ip = 14;
                            continue _fun86738
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
                            _fun86738_ip = 73;
                            continue _fun86738
                        }
                    case 59:
                        var3 = var4.split;
                        var0 = '\n';
                        var11 = var3.bind(var4)(var0);
                    case 73:
                        if (!(var2 == var11)) {
                            _fun86738_ip = 81;
                            continue _fun86738
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
                            _fun86738_ip = 185;
                            continue _fun86738
                        }
                    case 124:
                        var12 = var11[var10];
                        var0 = var12.trim;
                        var12 = var0.bind(var12)();
                        var0 = var12.split;
                        var0 = var0.bind(var12)(var6);
                        var0 = var0[var5];
                        if (!(var4 !== var0)) {
                            _fun86738_ip = 167;
                            continue _fun86738
                        }
                    case 156:
                        if (!(var7 !== var0)) {
                            _fun86738_ip = 167;
                            continue _fun86738
                        }
                    case 160:
                        var3 = var0;
                        if (!(var8 === var3)) {
                            _fun86738_ip = 185;
                            continue _fun86738
                        }
                    case 167:
                        var10 = var10 + 1;
                        var0 = var11.length;
                        var0 = var10 < var0;
                        var3 = var9;
                        if (var0) {
                            _fun86738_ip = 124;
                            continue _fun86738
                        }
                    case 185:
                        var4 = _closure1_slot10;
                        var0 = var4.get;
                        var0 = var0.bind(var4)(var3);
                        if (!(var2 == var0)) {
                            _fun86738_ip = 226;
                            continue _fun86738
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
            var1 = function arg0, arg1() {
                _fun86739: for (var _fun86739_ip = 0;;) switch (_fun86739_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var0 = _closure1_slot8;
                        if (!var0) {
                            _fun86739_ip = 203;
                            continue _fun86739
                        }
                    case 19:
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun86739_ip = 203;
                            continue _fun86739
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
                            _fun86739_ip = 201;
                            continue _fun86739
                        }
                    case 113:
                        var5 = _closure1_slot14;
                        var5 = var5.bind(var6)(var4);
                        if (!var5) {
                            _fun86739_ip = 201;
                            continue _fun86739
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