// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun113698: for (var _fun113698_ip = 0;;) switch (_fun113698_ip) {
        case 0:
            var2 = module;
            var5 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure1_slot2 = var5;
            var0 = function arg0, arg1, arg2() {
                _fun113700: for (var _fun113700_ip = 0;;) switch (_fun113700_ip) {
                    case 0:
                        var1 = arg2;
                        var0 = this;
                        var2 = arg0;
                        var0.fn = var2;
                        var2 = arg1;
                        var0.context = var2;
                        if (var1) {
                            _fun113700_ip = 29;
                            continue _fun113700
                        }
                    case 27:
                        var1 = false;
                    case 29:
                        var0.once = var1;
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot3 = var0;
            var0 = function arg0, arg1, arg2, arg3, arg4() {
                _fun113701: for (var _fun113701_ip = 0;;) switch (_fun113701_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var7 = arg2;
                        var6 = arg3;
                        var3 = 'function';
                        var1 = typeof var7;
                        if (!(var3 === var1)) {
                            _fun113701_ip = 189;
                            continue _fun113701
                        }
                    case 26:
                        var5 = _closure1_slot3;
                        if (var6) {
                            _fun113701_ip = 39;
                            continue _fun113701
                        }
                    case 36:
                        var6 = var0;
                    case 39:
                        var3 = var5.prototype;
                        var4 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = arg4;
                        var11 = var4;
                        var10 = var7;
                        var9 = var6;
                        var3 = new var11[var5](var10, var9, var8, var7);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var5 = _closure1_slot1;
                        var3 = var2;
                        if (!var5) {
                            _fun113701_ip = 86;
                            continue _fun113701
                        }
                    case 78:
                        var1 = _closure1_slot1;
                        var3 = var1 + var2;
                    case 86:
                        var1 = var0._events;
                        var2 = var1[var3];
                        var1 = var0._events;
                        if (var2) {
                            _fun113701_ip = 126;
                            continue _fun113701
                        }
                    case 105:
                        var1[var3] = var4;
                        var2 = var0._eventsCount;
                        var2 = var2 + 1;
                        var0._eventsCount = var2;
                        _fun113701_ip = 187;
                        continue _fun113701;
                    case 126:
                        var1 = var1[var3];
                        var1 = var1.fn;
                        var2 = var0._events;
                        if (var1) {
                            _fun113701_ip = 161;
                            continue _fun113701
                        }
                    case 145:
                        var5 = var2[var3];
                        var1 = var5.push;
                        var1 = var1.bind(var5)(var4);
                        _fun113701_ip = 187;
                        continue _fun113701;
                    case 161:
                        var1 = var0._events;
                        var5 = var1[var3];
                        var1 = new Array(2);
                        var1[0] = var5;
                        var1[1] = var4;
                        var2[var3] = var1;
                    case 187:
                        return var0;
                    case 189:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var10 = 'The listener must be a function';
                        var11 = var1;
                        var0 = new var11[var2](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot4 = var0;
            var0 = function arg0, arg1() {
                _fun113702: for (var _fun113702_ip = 0;;) switch (_fun113702_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1._eventsCount;
                        var2 = var0 - 1;
                        var1._eventsCount = var2;
                        var0 = 0;
                        if (!(var0 != var2)) {
                            _fun113702_ip = 39;
                            continue _fun113702
                        }
                    case 24:
                        var2 = var1._events;
                        var0 = arg1;
                        var0 = delete var2[var0];
                        _fun113702_ip = 72;
                        continue _fun113702;
                    case 39:
                        var0 = _closure1_slot2;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var3 = var2;
                        var0 = new var3[var0](var2);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var1._events = var0;
                    case 72:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var1 = function() {
                var1 = this;
                var0 = _closure1_slot2;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var3 = var2;
                var0 = new var3[var0](var2);
                var0 = var0 instanceof Object ? var0 : var2;
                var1._events = var0;
                var0 = 0;
                var1._eventsCount = var0;
                var0 = undefined;
                return var0;
            };
            var6 = global;
            var0 = var6.Object;
            var0 = var0.prototype;
            var0 = var0.hasOwnProperty;
            var _closure1_slot0 = var0;
            var4 = '~';
            var _closure1_slot1 = var4;
            var0 = var6.Object;
            var7 = var0.create;
            var0 = var4;
            if (!var7) {
                _fun113698_ip = 168;
                continue _fun113698
            }
        case 104:
            var8 = var6.Object;
            var7 = var8.create;
            var6 = null;
            var6 = var7.bind(var8)(var6);
            var5.prototype = var6;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var5 = var5.__proto__;
            if (var5) {
                _fun113698_ip = 165;
                continue _fun113698
            }
        case 157:
            var5 = false;
            _closure1_slot1 = var5;
            var4 = false;
        case 165:
            var0 = var4;
        case 168:
            var5 = var1.prototype;
            var4 = function() {
                _fun113704: for (var _fun113704_ip = 0;;) switch (_fun113704_ip) {
                    case 0:
                        var1 = this;
                        var0 = new Array(0);
                        var3 = var1._eventsCount;
                        var2 = 0;
                        if (!(var2 !== var3)) {
                            _fun113704_ip = 156;
                            continue _fun113704
                        }
                    case 22:
                        var5 = var1._events;
                        var7 = var5;
                        var2 = 1;
                        for (var3 in var7)
                            case 45: {
                                case 54: var12 = var3;
                                var10 = _closure1_slot0;
                                var9 = var10.call;
                                var9 = var9.bind(var10)(var5, var12);
                                if (!var9) {
                                    _fun113704_ip = 45;
                                    continue _fun113704
                                }
                                case 75: var10 = var0.push;
                                var11 = _closure1_slot1;
                                var9 = var12;
                                if (!var11) {
                                    _fun113704_ip = 100;
                                    continue _fun113704
                                }
                                case 90: var11 = var12.slice;
                                var9 = var11.bind(var12)(var2);
                                case 100: var9 = var10.bind(var0)(var9);
                                _fun113704_ip = 45;
                                continue _fun113704;
                            }
                    case 107:
                        var2 = global;
                        var1 = var2.Object;
                        var3 = var1.getOwnPropertySymbols;
                        var1 = var0;
                        if (!var3) {
                            _fun113704_ip = 154;
                            continue _fun113704
                        }
                    case 127:
                        var3 = var0.concat;
                        var4 = var2.Object;
                        var2 = var4.getOwnPropertySymbols;
                        var2 = var2.bind(var4)(var5);
                        var1 = var3.bind(var0)(var2);
                    case 154:
                        return var1;
                    case 156:
                        return var0;
                }
            };
            var5.eventNames = var4;
            var5 = var1.prototype;
            var4 = function arg0() {
                _fun113705: for (var _fun113705_ip = 0;;) switch (_fun113705_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot1;
                        var1 = var2;
                        if (!var3) {
                            _fun113705_ip = 24;
                            continue _fun113705
                        }
                    case 16:
                        var0 = _closure1_slot1;
                        var1 = var0 + var2;
                    case 24:
                        var0 = this;
                        var0 = var0._events;
                        var0 = var0[var1];
                        if (var0) {
                            _fun113705_ip = 46;
                            continue _fun113705
                        }
                    case 40:
                        var1 = new Array(0);
                        return var1;
                    case 46:
                        var1 = var0.fn;
                        if (var1) {
                            _fun113705_ip = 123;
                            continue _fun113705
                        }
                    case 55:
                        var3 = var0.length;
                        var1 = global;
                        var1 = var1.Array;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var6 = var2;
                        var5 = var3;
                        var1 = new var6[var1](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var2 = 0;
                        var4 = var2 < var3;
                        if (!var4) {
                            _fun113705_ip = 121;
                            continue _fun113705
                        }
                    case 100:
                        var4 = var0[var2];
                        var4 = var4.fn;
                        var1[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var3) {
                            _fun113705_ip = 100;
                            continue _fun113705
                        }
                    case 121:
                        return var1;
                    case 123:
                        var1 = var0.fn;
                        var0 = new Array(1);
                        var0[0] = var1;
                        return var0;
                }
            };
            var5.listeners = var4;
            var5 = var1.prototype;
            var4 = function arg0() {
                _fun113706: for (var _fun113706_ip = 0;;) switch (_fun113706_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot1;
                        var1 = var2;
                        if (!var3) {
                            _fun113706_ip = 24;
                            continue _fun113706
                        }
                    case 16:
                        var0 = _closure1_slot1;
                        var1 = var0 + var2;
                    case 24:
                        var0 = this;
                        var0 = var0._events;
                        var2 = var0[var1];
                        var0 = 0;
                        if (!var2) {
                            _fun113706_ip = 62;
                            continue _fun113706
                        }
                    case 42:
                        var3 = var2.fn;
                        var1 = 1;
                        if (var3) {
                            _fun113706_ip = 59;
                            continue _fun113706
                        }
                    case 54:
                        var1 = var2.length;
                    case 59:
                        var0 = var1;
                    case 62:
                        return var0;
                }
            };
            var5.listenerCount = var4;
            var5 = var1.prototype;
            var4 = function arg0, arg1, arg2, arg3, arg4, arg5() {
                _fun113707: for (var _fun113707_ip = 0;;) switch (_fun113707_ip) {
                    case 0:
                        var12 = arg0;
                        var4 = arg1;
                        var5 = arg2;
                        var6 = arg3;
                        var7 = arg4;
                        var11 = this;
                        var9 = undefined;
                        var2 = _closure1_slot1;
                        var1 = var12;
                        if (!var2) {
                            _fun113707_ip = 41;
                            continue _fun113707
                        }
                    case 33:
                        var0 = _closure1_slot1;
                        var1 = var0 + var12;
                    case 41:
                        var0 = var11._events;
                        var0 = var0[var1];
                        if (var0) {
                            _fun113707_ip = 58;
                            continue _fun113707
                        }
                    case 54:
                        var0 = false;
                        return var0;
                    case 58:
                        var0 = var11._events;
                        var0 = var0[var1];
                        var3 = arguments.length;
                        var1 = var0.fn;
                        if (var1) {
                            _fun113707_ip = 482;
                            continue _fun113707
                        }
                    case 83:
                        var19 = var0.length;
                        var18 = 0;
                        var20 = var18 < var19;
                        var17 = global;
                        var16 = 1;
                        var15 = 4;
                        var14 = 3;
                        var13 = 2;
                        var2 = undefined;
                        var1 = undefined;
                        if (!var20) {
                            _fun113707_ip = 657;
                            continue _fun113707
                        }
                    case 118:
                        var20 = var0[var18];
                        var20 = var20.once;
                        if (!var20) {
                            _fun113707_ip = 161;
                            continue _fun113707
                        }
                    case 131:
                        var21 = var11.removeListener;
                        var20 = var0[var18];
                        var30 = var20.fn;
                        var32 = var11;
                        var31 = var12;
                        var29 = undefined;
                        var28 = true;
                        var20 = var32[var21](var31, var30, var29, var28, var27);
                    case 161:
                        if (!(var16 !== var3)) {
                            _fun113707_ip = 426;
                            continue _fun113707
                        }
                    case 168:
                        if (!(var13 !== var3)) {
                            _fun113707_ip = 388;
                            continue _fun113707
                        }
                    case 175:
                        if (!(var14 !== var3)) {
                            _fun113707_ip = 349;
                            continue _fun113707
                        }
                    case 182:
                        if (!(var15 !== var3)) {
                            _fun113707_ip = 301;
                            continue _fun113707
                        }
                    case 186:
                        var21 = var2;
                        var20 = var1;
                        if (var2) {
                            _fun113707_ip = 266;
                            continue _fun113707
                        }
                    case 195:
                        var24 = var17.Array;
                        var31 = var3 - var16;
                        var23 = var24.prototype;
                        var23 = Object.create(var23, {
                            constructor: {
                                value: var24
                            }
                        });
                        var32 = var23;
                        var22 = new var32[var24](var31, var30);
                        var23 = var22 instanceof Object ? var22 : var23;
                        var24 = var16 < var3;
                        var22 = var16;
                        var21 = var23;
                        var20 = var22;
                        if (!var24) {
                            _fun113707_ip = 266;
                            continue _fun113707
                        }
                    case 241:
                        var25 = var22 - var16;
                        var24 = arguments[var22];
                        var23[var25] = var24;
                        var22 = var22 + 1;
                        var21 = var23;
                        var20 = var22;
                        if (var20 < var3) {
                            _fun113707_ip = 241;
                            continue _fun113707
                        }
                    case 266:
                        var22 = var0[var18];
                        var24 = var22.fn;
                        var23 = var24.apply;
                        var22 = var0[var18];
                        var22 = var22.context;
                        var22 = var23.bind(var24)(var22, var21);
                        _fun113707_ip = 461;
                        continue _fun113707;
                    case 301:
                        var22 = var0[var18];
                        var24 = var22.fn;
                        var23 = var24.call;
                        var22 = var0[var18];
                        var31 = var22.context;
                        var32 = var24;
                        var30 = var4;
                        var29 = var5;
                        var28 = var6;
                        var22 = var32[var23](var31, var30, var29, var28, var27);
                        var21 = var2;
                        var20 = var1;
                        _fun113707_ip = 461;
                        continue _fun113707;
                    case 349:
                        var22 = var0[var18];
                        var24 = var22.fn;
                        var23 = var24.call;
                        var22 = var0[var18];
                        var22 = var22.context;
                        var22 = var23.bind(var24)(var22, var4, var5);
                        var21 = var2;
                        var20 = var1;
                        _fun113707_ip = 461;
                        continue _fun113707;
                    case 388:
                        var22 = var0[var18];
                        var24 = var22.fn;
                        var23 = var24.call;
                        var22 = var0[var18];
                        var22 = var22.context;
                        var22 = var23.bind(var24)(var22, var4);
                        var21 = var2;
                        var20 = var1;
                        _fun113707_ip = 461;
                        continue _fun113707;
                    case 426:
                        var22 = var0[var18];
                        var24 = var22.fn;
                        var23 = var24.call;
                        var22 = var0[var18];
                        var22 = var22.context;
                        var22 = var23.bind(var24)(var22);
                        var21 = var2;
                        var20 = var1;
                    case 461:
                        var18 = var18 + 1;
                        var2 = var21;
                        var1 = var20;
                        if (var18 < var19) {
                            _fun113707_ip = 118;
                            continue _fun113707
                        }
                    case 477:
                        _fun113707_ip = 657;
                        continue _fun113707;
                    case 482:
                        var1 = var0.once;
                        if (!var1) {
                            _fun113707_ip = 517;
                            continue _fun113707
                        }
                    case 491:
                        var8 = var11.removeListener;
                        var30 = var0.fn;
                        var28 = true;
                        var32 = var11;
                        var31 = var12;
                        var29 = undefined;
                        var1 = var32[var8](var31, var30, var29, var28, var27);
                    case 517:
                        var2 = 1;
                        if (!(var2 !== var3)) {
                            _fun113707_ip = 831;
                            continue _fun113707
                        }
                    case 527:
                        var1 = 2;
                        if (!(var1 !== var3)) {
                            _fun113707_ip = 805;
                            continue _fun113707
                        }
                    case 537:
                        var1 = 3;
                        if (!(var1 !== var3)) {
                            _fun113707_ip = 778;
                            continue _fun113707
                        }
                    case 547:
                        var1 = 4;
                        if (!(var1 !== var3)) {
                            _fun113707_ip = 742;
                            continue _fun113707
                        }
                    case 557:
                        var1 = 5;
                        if (!(var1 !== var3)) {
                            _fun113707_ip = 703;
                            continue _fun113707
                        }
                    case 567:
                        var1 = 6;
                        if (!(var1 !== var3)) {
                            _fun113707_ip = 661;
                            continue _fun113707
                        }
                    case 574:
                        var1 = global;
                        var10 = var1.Array;
                        var31 = var3 - var2;
                        var8 = var10.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var10
                            }
                        });
                        var32 = var8;
                        var1 = new var32[var10](var31, var30);
                        var8 = var1 instanceof Object ? var1 : var8;
                        var10 = var2 < var3;
                        var1 = var2;
                        if (!var10) {
                            _fun113707_ip = 635;
                            continue _fun113707
                        }
                    case 616:
                        var11 = var1 - var2;
                        var10 = arguments[var1];
                        var8[var11] = var10;
                        var1 = var1 + 1;
                        if (var1 < var3) {
                            _fun113707_ip = 616;
                            continue _fun113707
                        }
                    case 635:
                        var3 = var0.fn;
                        var2 = var3.apply;
                        var1 = var0.context;
                        var1 = var2.bind(var3)(var1, var8);
                    case 657:
                        var1 = true;
                        return var1;
                    case 661:
                        var8 = var0.fn;
                        var3 = var8.call;
                        var31 = var0.context;
                        var26 = arg5;
                        var32 = var8;
                        var30 = var4;
                        var29 = var5;
                        var28 = var6;
                        var27 = var7;
                        var1 = var32[var3](var31, var30, var29, var28, var27, var26, var25);
                        var1 = true;
                        return var1;
                    case 703:
                        var3 = var0.fn;
                        var2 = var3.call;
                        var31 = var0.context;
                        var32 = var3;
                        var30 = var4;
                        var29 = var5;
                        var28 = var6;
                        var27 = var7;
                        var1 = var32[var2](var31, var30, var29, var28, var27, var26);
                        var1 = true;
                        return var1;
                    case 742:
                        var3 = var0.fn;
                        var2 = var3.call;
                        var31 = var0.context;
                        var32 = var3;
                        var30 = var4;
                        var29 = var5;
                        var28 = var6;
                        var1 = var32[var2](var31, var30, var29, var28, var27);
                        var1 = true;
                        return var1;
                    case 778:
                        var3 = var0.fn;
                        var2 = var3.call;
                        var1 = var0.context;
                        var1 = var2.bind(var3)(var1, var4, var5);
                        var1 = true;
                        return var1;
                    case 805:
                        var3 = var0.fn;
                        var2 = var3.call;
                        var1 = var0.context;
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = true;
                        return var1;
                    case 831:
                        var2 = var0.fn;
                        var1 = var2.call;
                        var0 = var0.context;
                        var0 = var1.bind(var2)(var0);
                        var0 = true;
                        return var0;
                }
            };
            var5.emit = var4;
            var5 = var1.prototype;
            var4 = function arg0, arg1, arg2() {
                var0 = this;
                var6 = _closure1_slot4;
                var12 = undefined;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = false;
                var11 = var0;
                var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.on = var4;
            var5 = var1.prototype;
            var4 = function arg0, arg1, arg2() {
                var0 = this;
                var6 = _closure1_slot4;
                var12 = undefined;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = true;
                var11 = var0;
                var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var5.once = var4;
            var5 = var1.prototype;
            var4 = function arg0, arg1, arg2, arg3() {
                _fun113710: for (var _fun113710_ip = 0;;) switch (_fun113710_ip) {
                    case 0:
                        var5 = arg0;
                        var7 = arg1;
                        var6 = arg2;
                        var4 = arg3;
                        var0 = this;
                        var2 = _closure1_slot1;
                        var3 = var5;
                        if (!var2) {
                            _fun113710_ip = 36;
                            continue _fun113710
                        }
                    case 28:
                        var2 = _closure1_slot1;
                        var3 = var2 + var5;
                    case 36:
                        var2 = var0._events;
                        var2 = var2[var3];
                        if (var2) {
                            _fun113710_ip = 51;
                            continue _fun113710
                        }
                    case 49:
                        return var0;
                    case 51:
                        if (var7) {
                            _fun113710_ip = 68;
                            continue _fun113710
                        }
                    case 54:
                        var5 = _closure1_slot5;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var0, var3);
                        return var0;
                    case 68:
                        var2 = var0._events;
                        var5 = var2[var3];
                        var2 = var5.fn;
                        if (var2) {
                            _fun113710_ip = 251;
                            continue _fun113710
                        }
                    case 90:
                        var10 = new Array(0);
                        var8 = var5.length;
                        var9 = 0;
                        var11 = var9 < var8;
                        var2 = 0;
                        if (!var11) {
                            _fun113710_ip = 198;
                            continue _fun113710
                        }
                    case 110:
                        var11 = var5[var2];
                        var11 = var11.fn;
                        var11 = var11 !== var7;
                        if (var11) {
                            _fun113710_ip = 149;
                            continue _fun113710
                        }
                    case 127:
                        var12 = var4;
                        if (!var4) {
                            _fun113710_ip = 146;
                            continue _fun113710
                        }
                    case 133:
                        var13 = var5[var2];
                        var13 = var13.once;
                        var12 = !var13;
                    case 146:
                        var11 = var12;
                    case 149:
                        if (var11) {
                            _fun113710_ip = 174;
                            continue _fun113710
                        }
                    case 152:
                        var12 = var6;
                        if (!var6) {
                            _fun113710_ip = 171;
                            continue _fun113710
                        }
                    case 158:
                        var13 = var5[var2];
                        var13 = var13.context;
                        var12 = var13 !== var6;
                    case 171:
                        var11 = var12;
                    case 174:
                        if (!var11) {
                            _fun113710_ip = 191;
                            continue _fun113710
                        }
                    case 177:
                        var12 = var10.push;
                        var11 = var5[var2];
                        var11 = var12.bind(var10)(var11);
                    case 191:
                        var2 = var2 + 1;
                        if (var2 < var8) {
                            _fun113710_ip = 110;
                            continue _fun113710
                        }
                    case 198:
                        var2 = var10.length;
                        if (var2) {
                            _fun113710_ip = 220;
                            continue _fun113710
                        }
                    case 206:
                        var8 = _closure1_slot5;
                        var2 = undefined;
                        var2 = var8.bind(var2)(var0, var3);
                        _fun113710_ip = 315;
                        continue _fun113710;
                    case 220:
                        var8 = var0._events;
                        var12 = var10.length;
                        var11 = 1;
                        var2 = var10;
                        if (!(var11 === var12)) {
                            _fun113710_ip = 245;
                            continue _fun113710
                        }
                    case 241:
                        var2 = var10[var9];
                    case 245:
                        var8[var3] = var2;
                        _fun113710_ip = 315;
                        continue _fun113710;
                    case 251:
                        var2 = var5.fn;
                        var2 = var2 !== var7;
                        if (var2) {
                            _fun113710_ip = 279;
                            continue _fun113710
                        }
                    case 264:
                        if (!var4) {
                            _fun113710_ip = 276;
                            continue _fun113710
                        }
                    case 267:
                        var7 = var5.once;
                        var4 = !var7;
                    case 276:
                        var2 = var4;
                    case 279:
                        if (var2) {
                            _fun113710_ip = 300;
                            continue _fun113710
                        }
                    case 282:
                        var4 = var6;
                        if (!var4) {
                            _fun113710_ip = 297;
                            continue _fun113710
                        }
                    case 288:
                        var5 = var5.context;
                        var4 = var5 !== var6;
                    case 297:
                        var2 = var4;
                    case 300:
                        if (var2) {
                            _fun113710_ip = 315;
                            continue _fun113710
                        }
                    case 303:
                        var2 = _closure1_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var0, var3);
                    case 315:
                        return var0;
                }
            };
            var5.removeListener = var4;
            var4 = var1.prototype;
            var3 = function arg0() {
                _fun113711: for (var _fun113711_ip = 0;;) switch (_fun113711_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = this;
                        if (var4) {
                            _fun113711_ip = 52;
                            continue _fun113711
                        }
                    case 12:
                        var2 = _closure1_slot2;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var7 = var3;
                        var2 = new var7[var2](var6);
                        var2 = var2 instanceof Object ? var2 : var3;
                        var0._events = var2;
                        var2 = 0;
                        var0._eventsCount = var2;
                        _fun113711_ip = 95;
                        continue _fun113711;
                    case 52:
                        var2 = _closure1_slot1;
                        var3 = var4;
                        if (!var2) {
                            _fun113711_ip = 70;
                            continue _fun113711
                        }
                    case 62:
                        var2 = _closure1_slot1;
                        var3 = var2 + var4;
                    case 70:
                        var2 = var0._events;
                        var2 = var2[var3];
                        if (!var2) {
                            _fun113711_ip = 95;
                            continue _fun113711
                        }
                    case 83:
                        var2 = _closure1_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var0, var3);
                    case 95:
                        return var0;
                }
            };
            var4.removeAllListeners = var3;
            var4 = var1.prototype;
            var3 = var1.prototype;
            var3 = var3.removeListener;
            var4.off = var3;
            var4 = var1.prototype;
            var3 = var1.prototype;
            var3 = var3.on;
            var4.addListener = var3;
            var1.prefixed = var0;
            var1.EventEmitter = var1;
            var0 = undefined;
            if (!(var0 !== var2)) {
                _fun113698_ip = 382;
                continue _fun113698
            }
        case 376:
            var2.exports = var1;
        case 382:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);