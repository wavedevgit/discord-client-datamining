// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0() {
        _fun12524: for (var _fun12524_ip = 0;;) switch (_fun12524_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.params;
                var0 = var0["*"];
                if (var0) {
                    _fun12524_ip = 22;
                    continue _fun12524
                }
            case 18:
                var0 = '';
            case 22:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun12525: for (var _fun12525_ip = 0;;) switch (_fun12525_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 1;
                var0 = var1 - var0;
                var2 = var4[var0];
                var1 = '/';
                var0 = var4;
                if (!(var1 === var2)) {
                    _fun12525_ip = 49;
                    continue _fun12525
                }
            case 30:
                var3 = var4.slice;
                var2 = 0;
                var1 = -1;
                var0 = var3.bind(var4)(var2, var1);
            case 49:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var7 = function arg0() {
        var2 = arg0;
        var1 = var2.endsWith;
        var0 = '*';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var7;
    var6 = function arg0, arg1() {
        _fun12527: for (var _fun12527_ip = 0;;) switch (_fun12527_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                if (!var0) {
                    _fun12527_ip = 54;
                    continue _fun12527
                }
            case 20:
                var1 = arg1;
                var1 = var1.route;
                var2 = var1.children;
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun12527_ip = 51;
                    continue _fun12527
                }
            case 43:
                var2 = var2.length;
                var1 = !var2;
            case 51:
                var0 = !var1;
            case 54:
                if (var0) {
                    _fun12527_ip = 59;
                    continue _fun12527
                }
            case 57:
                var0 = false;
            case 59:
                return var0;
        }
    };
    var _closure1_slot6 = var6;
    var1 = function arg0() {
        _fun12528: for (var _fun12528_ip = 0;;) switch (_fun12528_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.children;
                if (var0) {
                    _fun12528_ip = 20;
                    continue _fun12528
                }
            case 11:
                var2 = var1.element;
                var0 = !var2;
            case 20:
                var3 = undefined;
                if (var0) {
                    _fun12528_ip = 40;
                    continue _fun12528
                }
            case 25:
                var1 = var1.path;
                var2 = null;
                var0 = var2 == var1;
                var3 = var1;
            case 40:
                if (var0) {
                    _fun12528_ip = 63;
                    continue _fun12528
                }
            case 43:
                var2 = var3.endsWith;
                var1 = '/*';
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 63:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = function arg0, arg1, arg2() {
        _fun12529: for (var _fun12529_ip = 0;;) switch (_fun12529_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                if (!var2) {
                    _fun12529_ip = 20;
                    continue _fun12529
                }
            case 9:
                var1 = var2.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun12529_ip = 51;
                    continue _fun12529
                }
            case 20:
                var3 = _closure1_slot2;
                var0 = var5;
                if (!var3) {
                    _fun12529_ip = 48;
                    continue _fun12529
                }
            case 33:
                var4 = _closure1_slot10;
                var3 = undefined;
                var1 = arg2;
                var0 = var4.bind(var3)(var5, var1);
            case 48:
                var2 = var0;
            case 51:
                var0 = var2.slice;
                var3 = -2;
                var1 = var0.bind(var2)(var3);
                var0 = '/*';
                var4 = var2;
                if (!(var0 === var1)) {
                    _fun12529_ip = 93;
                    continue _fun12529
                }
            case 80:
                var1 = var2.slice;
                var0 = 0;
                var4 = var1.bind(var2)(var0, var3);
            case 93:
                var0 = var4.length;
                var2 = 1;
                var0 = var0 > var2;
                if (!var0) {
                    _fun12529_ip = 129;
                    continue _fun12529
                }
            case 108:
                var1 = var4.length;
                var1 = var1 - var2;
                var2 = var4[var1];
                var1 = '/';
                var0 = var1 === var2;
            case 129:
                var1 = var4;
                if (!var0) {
                    _fun12529_ip = 154;
                    continue _fun12529
                }
            case 135:
                var3 = var4.slice;
                var2 = 0;
                var0 = -1;
                var1 = var3.bind(var4)(var2, var0);
            case 154:
                var0 = new Array(2);
                var0[0] = var1;
                var1 = 'route';
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var9 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = /\\?\\/ / ;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun12531: for (var _fun12531_ip = 0;;) switch (_fun12531_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    if (!var0) {
                        _fun12531_ip = 25;
                        continue _fun12531
                    }
                case 17:
                    var1 = ',';
                    var0 = var1 !== var2;
                case 25:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var _closure1_slot9 = var9;
    var0 = function arg0, arg1() {
        _fun12532: for (var _fun12532_ip = 0;;) switch (_fun12532_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                if (!var2) {
                    _fun12532_ip = 129;
                    continue _fun12532
                }
            case 9:
                var3 = '/';
                if (!(var3 !== var2)) {
                    _fun12532_ip = 129;
                    continue _fun12532
                }
            case 17:
                var1 = var0.toLowerCase;
                var5 = var1.bind(var0)();
                var4 = var5.startsWith;
                var1 = var2.toLowerCase;
                var1 = var1.bind(var2)();
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun12532_ip = 53;
                    continue _fun12532
                }
            case 51:
                return var0;
            case 53:
                var1 = var2.endsWith;
                var1 = var1.bind(var2)(var3);
                var4 = var2.length;
                if (var1) {
                    _fun12532_ip = 77;
                    continue _fun12532
                }
            case 72:
                var1 = var4;
                _fun12532_ip = 84;
                continue _fun12532;
            case 77:
                var2 = 1;
                var1 = var4 - var2;
            case 84:
                var2 = var0.charAt;
                var2 = var2.bind(var0)(var1);
                var4 = var1;
                if (!var2) {
                    _fun12532_ip = 108;
                    continue _fun12532
                }
            case 101:
                var1 = var0;
                if (!(var3 === var2)) {
                    _fun12532_ip = 127;
                    continue _fun12532
                }
            case 108:
                var2 = var0.slice;
                var2 = var2.bind(var0)(var4);
                if (var2) {
                    _fun12532_ip = 124;
                    continue _fun12532
                }
            case 121:
                var2 = var3;
            case 124:
                var1 = var2;
            case 127:
                return var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var5 = function arg0() {
        _fun12533: for (var _fun12533_ip = 0;;) switch (_fun12533_ip) {
            case 0:
                var3 = arg0;
                var0 = 0;
                var1 = var3[var0];
                var2 = '/';
                var0 = var3;
                if (!(var2 !== var1)) {
                    _fun12533_ip = 38;
                    continue _fun12533
                }
            case 20:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var0 = var1.bind(var2)(var3);
            case 38:
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0, arg1() {
        _fun12534: for (var _fun12534_ip = 0;;) switch (_fun12534_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var5;
                var3 = undefined;
                var0 = undefined;
                var4 = undefined;
                var2 = _closure1_slot0;
                var5 = var2.bind(var3)(var6, var5);
                if (!var5) {
                    _fun12534_ip = 110;
                    continue _fun12534
                }
            case 38:
                var6 = var5.length;
                var2 = 0;
                if (!(var2 !== var6)) {
                    _fun12534_ip = 110;
                    continue _fun12534
                }
            case 49:
                var4 = function arg0() {
                    _fun12535: for (var _fun12535_ip = 0;;) switch (_fun12535_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var0 = var3.route;
                            var0 = var0.path;
                            if (!var0) {
                                _fun12535_ip = 44;
                                continue _fun12535
                            }
                        case 24:
                            var0 = var3.route;
                            var2 = var0.path;
                            var0 = '*';
                            if (!(var0 === var2)) {
                                _fun12535_ip = 48;
                                continue _fun12535
                            }
                        case 44:
                            var0 = undefined;
                            return var0;
                        case 48:
                            var0 = function arg0() {
                                _fun12536: for (var _fun12536_ip = 0;;) switch (_fun12536_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.route;
                                        var4 = var0.path;
                                        if (var4) {
                                            _fun12536_ip = 22;
                                            continue _fun12536
                                        }
                                    case 18:
                                        var4 = '';
                                    case 22:
                                        var1 = var4.length;
                                        var0 = 1;
                                        var0 = var1 - var0;
                                        var2 = var4[var0];
                                        var1 = '*';
                                        var0 = var4;
                                        if (!(var1 === var2)) {
                                            _fun12536_ip = 68;
                                            continue _fun12536
                                        }
                                    case 49:
                                        var3 = var4.slice;
                                        var2 = 0;
                                        var1 = -1;
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 68:
                                        return var0;
                                }
                            };
                            var4 = undefined;
                            var6 = var0.bind(var4)(var3);
                            var7 = _closure1_slot10;
                            var0 = _closure2_slot1;
                            var5 = var0.pathname;
                            var9 = _closure1_slot11;
                            var3 = var3.pathnameBase;
                            var3 = var9.bind(var4)(var3);
                            var3 = var7.bind(var4)(var5, var3);
                            var0 = var0.pathname;
                            if (!(var0 !== var3)) {
                                _fun12535_ip = 189;
                                continue _fun12535
                            }
                        case 111:
                            var0 = {};
                            var5 = _closure1_slot4;
                            if (var6) {
                                _fun12535_ip = 124;
                                continue _fun12535
                            }
                        case 120:
                            var6 = '';
                        case 124:
                            var6 = var5.bind(var4)(var6);
                            var7 = _closure1_slot11;
                            var9 = _closure1_slot12;
                            var10 = _closure2_slot0;
                            var8 = var10.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var1 = var0.route;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var8 = var8.bind(var10)(var1);
                            var1 = {};
                            var1.pathname = var3;
                            var1 = var9.bind(var4)(var8, var1);
                            var1 = var7.bind(var4)(var1);
                            var1 = var6 + var1;
                            var1 = var5.bind(var4)(var1);
                            var0.v = var1;
                            _fun12535_ip = 207;
                            continue _fun12535;
                        case 189:
                            var1 = {};
                            var2 = _closure1_slot4;
                            var2 = var2.bind(var4)(var3);
                            var1.v = var2;
                            var0 = var1;
                        case 207:
                            return var0;
                    }
                };
                var2 = var5;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
            case 60:
                var6 = var2().value;
                var5 = var1;
                if (!(var5 !== var3)) {
                    _fun12534_ip = 104;
                    continue _fun12534
                }
            case 71: // try_start_0
                var5 = var4;
                var5 = var5.bind(var3)(var6);
                var0 = var5;
                if (var5) {
                    _fun12534_ip = 87;
                    continue _fun12534
                }
            case 85: // try_end0
                _fun12534_ip = 60;
                continue _fun12534;
            case 87: // try_start_1
                var0 = var0.v;
            case 92: // try_end1
                var1.return();
                return var0;
            case 97: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 104:
                var0 = '';
                return var0;
            case 110:
                var0 = '';
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var8 = function arg0, arg1() {
        _fun12538: for (var _fun12538_ip = 0;;) switch (_fun12538_ip) {
            case 0:
                var3 = undefined;
                var4 = undefined;
                var5 = _closure1_slot0;
                var1 = arg1;
                var0 = arg0;
                var5 = var5.bind(var3)(var1, var0);
                if (!var5) {
                    _fun12538_ip = 95;
                    continue _fun12538
                }
            case 26:
                var0 = var5;
                var1 = var0[Symbol.iterator];
                var0 = var1().next;
            case 32:
                var5 = var0().value;
                var6 = var1;
                if (!(var6 !== var3)) {
                    _fun12538_ip = 95;
                    continue _fun12538
                }
            case 43: // try_start_0
                var4 = var5;
                var6 = _closure1_slot7;
                var5 = var5.route;
                var5 = var6.bind(var3)(var5);
                if (!var5) {
                    _fun12538_ip = 79;
                    continue _fun12538
                }
            case 64:
                var6 = _closure1_slot3;
                var5 = var4;
                var5 = var6.bind(var3)(var5);
                if (var5) {
                    _fun12538_ip = 81;
                    continue _fun12538
                }
            case 79: // try_end0
                _fun12538_ip = 32;
                continue _fun12538;
            case 81:
                var1.return();
                var0 = true;
                return var0;
            case 88: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 95:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var8;
    var0 = function arg0, arg1() {
        _fun12539: for (var _fun12539_ip = 0;;) switch (_fun12539_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot2;
                if (var0) {
                    _fun12539_ip = 28;
                    continue _fun12539
                }
            case 13:
                var0 = var1.pathname;
                if (var0) {
                    _fun12539_ip = 26;
                    continue _fun12539
                }
            case 22:
                var0 = '';
            case 26:
                _fun12539_ip = 49;
                continue _fun12539;
            case 28:
                var4 = _closure1_slot10;
                var3 = var1.pathname;
                var2 = undefined;
                var1 = arg1;
                var0 = var4.bind(var2)(var3, var1);
            case 49:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var10 = function arg0, arg1, arg2() {
        _fun12540: for (var _fun12540_ip = 0;;) switch (_fun12540_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var4 = undefined;
                var9 = undefined;
                var2 = arg1;
                var0 = undefined;
                var6 = undefined;
                var3 = undefined;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var7 = arguments.length;
                var8 = 3;
                var10 = var7 > var8;
                var12 = '';
                var7 = var12;
                if (!var10) {
                    _fun12540_ip = 60;
                    continue _fun12540
                }
            case 45:
                var10 = arguments[var8];
                var7 = var12;
                if (!(var4 !== var10)) {
                    _fun12540_ip = 60;
                    continue _fun12540
                }
            case 56:
                var7 = arguments[var8];
            case 60:
                var0 = var7;
                if (!var5) {
                    _fun12540_ip = 592;
                    continue _fun12540
                }
            case 69:
                var5 = var5.length;
                var11 = 0;
                if (!(var11 !== var5)) {
                    _fun12540_ip = 592;
                    continue _fun12540
                }
            case 83:
                if (var1) {
                    _fun12540_ip = 123;
                    continue _fun12540
                }
            case 86:
                var8 = _closure1_slot14;
                var7 = var2;
                var5 = var0;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = 'url';
                var5[1] = var7;
                return var5;
            case 123:
                var6 = var12;
                var10 = var1;
                var5 = var10[Symbol.iterator];
                var10 = var5().next;
                var9 = global;
                var8 = '/';
                var7 = 1;
            case 144:
                var16 = var10().value;
                var17 = var5;
                if (!(var17 !== var4)) {
                    _fun12540_ip = 558;
                    continue _fun12540
                }
            case 158: // try_start_0
                var3 = var16;
                var16 = var16.route;
                var13 = var16;
                if (!var16) {
                    _fun12540_ip = 518;
                    continue _fun12540
                }
            case 176:
                var16 = var13;
                var16 = var16.index;
                if (var16) {
                    _fun12540_ip = 523;
                    continue _fun12540
                }
            case 190:
                var16 = var13;
                var16 = var16.path;
                var14 = var16;
                if (!var16) {
                    _fun12540_ip = 518;
                    continue _fun12540
                }
            case 208:
                var18 = _closure1_slot6;
                var17 = var14;
                var16 = var3;
                var16 = var18.bind(var4)(var17, var16);
                if (var16) {
                    _fun12540_ip = 518;
                    continue _fun12540
                }
            case 230:
                var16 = var14;
                var16 = var16[var11];
                if (!(var8 !== var16)) {
                    _fun12540_ip = 282;
                    continue _fun12540
                }
            case 241:
                var17 = var6;
                var16 = var17.length;
                var16 = var16 - var7;
                var16 = var17[var16];
                if (!(var8 !== var16)) {
                    _fun12540_ip = 282;
                    continue _fun12540
                }
            case 261:
                var17 = var14;
                var16 = var9.HermesInternal;
                var16 = var16.concat;
                var19 = var16.bind(var8)(var17);
                _fun12540_ip = 285;
                continue _fun12540;
            case 282:
                var19 = var14;
            case 285:
                var15 = var19;
                var18 = _closure1_slot4;
                var16 = var6;
                var17 = var18.bind(var4)(var16);
                var16 = _closure1_slot11;
                var16 = var16.bind(var4)(var19);
                var6 = var17 + var16;
                var16 = var2;
                var16 = var16.pathname;
                var17 = var18.bind(var4)(var16);
                var19 = var0;
                var16 = var3;
                var16 = var16.pathname;
                var16 = var19 + var16;
                var16 = var18.bind(var4)(var16);
                if (!(var17 === var16)) {
                    _fun12540_ip = 518;
                    continue _fun12540
                }
            case 355:
                var18 = _closure1_slot9;
                var16 = var6;
                var17 = var18.bind(var4)(var16);
                var16 = var3;
                var16 = var16.pathname;
                var16 = var18.bind(var4)(var16);
                if (!(var17 !== var16)) {
                    _fun12540_ip = 438;
                    continue _fun12540
                }
            case 385:
                var17 = _closure1_slot5;
                var16 = var6;
                var16 = var17.bind(var4)(var16);
                if (var16) {
                    _fun12540_ip = 438;
                    continue _fun12540
                }
            case 400:
                var16 = _closure1_slot2;
                var17 = var12;
                if (var16) {
                    _fun12540_ip = 413;
                    continue _fun12540
                }
            case 410:
                var17 = var0;
            case 413:
                var16 = var15;
                var17 = var17 + var16;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 'route';
                var16[1] = var17;
                _fun12540_ip = 513;
                continue _fun12540;
            case 438:
                var19 = _closure1_slot6;
                var18 = var6;
                var17 = var3;
                var17 = var19.bind(var4)(var18, var17);
                if (!var17) {
                    _fun12540_ip = 477;
                    continue _fun12540
                }
            case 457:
                var19 = var6;
                var18 = var19.slice;
                var17 = -1;
                var6 = var18.bind(var19)(var11, var17);
            case 477:
                var17 = _closure1_slot2;
                if (var17) {
                    _fun12540_ip = 487;
                    continue _fun12540
                }
            case 484:
                var12 = var0;
            case 487:
                var17 = var6;
                var18 = var12 + var17;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = 'route';
                var17[1] = var18;
                var16 = var17;
            case 513: // try_end0
                var5.return();
                return var16;
            case 518:
                _fun12540_ip = 144;
                continue _fun12540;
            case 523: // try_start_1
                var8 = _closure1_slot8;
                var7 = var6;
                var6 = var3.pathname;
                var3 = var0;
                var3 = var8.bind(var4)(var7, var6, var3);
            case 546: // try_end1
                var5.return();
                return var3;
            case 551: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 3);
                var5.return();
                throw var3;
            case 558:
                var5 = _closure1_slot14;
                var3 = var2;
                var1 = var0;
                var3 = var5.bind(var4)(var3, var1);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = 'url';
                var1[1] = var3;
                return var1;
            case 592:
                var1 = _closure1_slot2;
                if (var1) {
                    _fun12540_ip = 613;
                    continue _fun12540
                }
            case 602:
                var1 = var2;
                var1 = var1.pathname;
                _fun12540_ip = 629;
                continue _fun12540;
            case 613:
                var3 = _closure1_slot10;
                var2 = var2.pathname;
                var1 = var3.bind(var4)(var2, var0);
            case 629:
                var0 = new Array(2);
                var0[0] = var1;
                var1 = 'url';
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var10;
    var11 = arg6;
    var0 = 0;
    var12 = var11[var0];
    var11 = arg1;
    var0 = undefined;
    var11 = var11.bind(var0)(var12);
    var _closure1_slot1 = var11;
    var11 = global;
    var14 = var11.Object;
    var13 = var14.defineProperty;
    var11 = var11.Symbol;
    var12 = var11.toStringTag;
    var11 = {};
    var15 = 'Module';
    var11.value = var15;
    var11 = var13.bind(var14)(var2, var12, var11);
    var11 = false;
    var _closure1_slot2 = var11;
    var2.getNormalizedName = var10;
    var2.getNumberOfUrlSegments = var9;
    var9 = function arg0() {
        _fun12541: for (var _fun12541_ip = 0;;) switch (_fun12541_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var1 = arg0;
                var _closure1_slot0 = var1;
                var1 = arguments.length;
                var3 = 1;
                var1 = var1 > var3;
                if (!var1) {
                    _fun12541_ip = 35;
                    continue _fun12541
                }
            case 27:
                var5 = arguments[var3];
                var1 = var0 !== var5;
            case 35:
                if (!var1) {
                    _fun12541_ip = 42;
                    continue _fun12541
                }
            case 38:
                var1 = arguments[var3];
            case 42:
                _closure1_slot2 = var1;
                return var0;
        }
    };
    var2.initializeRouterUtils = var9;
    var2.locationIsInsideDescendantRoute = var8;
    var2.pathEndsWithWildcard = var7;
    var2.pathIsWildcardAndHasChildren = var6;
    var2.prefixWithSlash = var5;
    var2.rebuildRoutePathFromAllRoutes = var4;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun12542: for (var _fun12542_ip = 0;;) switch (_fun12542_ip) {
            case 0:
                var0 = arg0;
                var9 = arg2;
                var6 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 4;
                var3 = var3 > var1;
                var4 = '';
                var8 = var4;
                if (!var3) {
                    _fun12542_ip = 45;
                    continue _fun12542
                }
            case 30:
                var3 = arguments[var1];
                var8 = var4;
                if (!(var6 !== var3)) {
                    _fun12542_ip = 45;
                    continue _fun12542
                }
            case 41:
                var8 = arguments[var1];
            case 45:
                var1 = _closure1_slot13;
                var4 = var1.bind(var6)(var0, var9);
                var1 = 'url';
                var2 = undefined;
                if (!var4) {
                    _fun12542_ip = 90;
                    continue _fun12542
                }
            case 67:
                var7 = _closure1_slot11;
                var5 = _closure1_slot12;
                var5 = var5.bind(var6)(var9, var0);
                var2 = var7.bind(var6)(var5);
                var1 = 'route';
            case 90:
                if (!var4) {
                    _fun12542_ip = 96;
                    continue _fun12542
                }
            case 93:
                if (var2) {
                    _fun12542_ip = 144;
                    continue _fun12542
                }
            case 96:
                var7 = _closure1_slot15;
                var13 = arg1;
                var11 = arg3;
                var14 = undefined;
                var12 = var0;
                var10 = var8;
                var5 = var14[var7](var13, var12, var11, var10, var9);
                var4 = _closure1_slot1;
                var3 = 2;
                var5 = var4.bind(var6)(var5, var3);
                var3 = 0;
                var2 = var5[var3];
                var3 = 1;
                var1 = var5[var3];
            case 144:
                if (var2) {
                    _fun12542_ip = 153;
                    continue _fun12542
                }
            case 147:
                var2 = var0.pathname;
            case 153:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var2.resolveRouteNameAndSource = var3;
    var2.routeIsDescendant = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);