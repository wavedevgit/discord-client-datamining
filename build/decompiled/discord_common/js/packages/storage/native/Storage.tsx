// ../discord_common/js/packages/storage/native/Storage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun6960: for (var _fun6960_ip = 0;;) switch (_fun6960_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun6960_ip = 38;
                    continue _fun6960
                }
            case 12: // try_start_0
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.parse;
                var1 = var0;
                var0 = var2.bind(var3)(var1);
            case 34: // try_end0
                _fun6960_ip = 38;
                continue _fun6960;
            case 36: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 38:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.NativeModules;
    var6 = var6.Platform;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = var3.DCDStrongboxManager;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = global;
            var5 = var1.Promise;
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var7 = function(arg0) { // Environment: var3
                var1 = _closure3_slot0;
                var0 = arg0;
                var1.parseResolve = var0;
                var0 = undefined;
                return var0;
            };
            var8 = var4;
            var3 = new var8[var5](var7, var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.parsePromise = var3;
            var3 = {};
            var2.storage = var3;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.secureKeys = var1;
            var1 = false;
            var2.hasLoaded = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'refresh';
        var4.key = var1;
        var1 = function() {
            _fun6964: for (var _fun6964_ip = 0;;) switch (_fun6964_ip) {
                case 0:
                    var8 = arguments[0];
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var4 = undefined;
                    if (!(var8 === var4)) {
                        _fun6964_ip = 22;
                        continue _fun6964
                    }
                case 18:
                    var8 = new Array(0);
                case 22:
                    var1 = arguments[1];
                    if (!(var1 === var4)) {
                        _fun6964_ip = 50;
                        continue _fun6964
                    }
                case 29:
                    var1 = global;
                    var2 = var1.Set;
                    var1 = var2.prototype;
                    var13 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var1 = new var13[var2](var12);
                case 50:
                    var1 = global;
                    var2 = var1.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var5.secureKeys = var2;
                    var3 = var1.Promise;
                    var2 = var3.all;
                    var7 = _closure1_slot5;
                    var1 = var7.refresh;
                    var7 = var1.bind(var7)(var8);
                    var1 = new Array(2);
                    var1[0] = var7;
                    var8 = _closure1_slot6;
                    var7 = null;
                    var7 = var7 == var8;
                    var4 = undefined;
                    if (var7) {
                        _fun6964_ip = 171;
                        continue _fun6964
                    }
                case 137:
                    var7 = _closure1_slot6;
                    var6 = var7.refresh;
                    var11 = var5.secureKeys;
                    var5 = new Array(0);
                    var10 = 0;
                    var12 = var5;
                    var8 = arraySpread(var12, var11, var10);
                    var4 = var6.bind(var7)(var5);
                case 171:
                    var1[1] = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun6965: for (var _fun6965_ip = 0;;) switch (_fun6965_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5[Symbol.iterator];
                                var5 = var0().next;
                                var1 = var5().value;
                                var2 = var0;
                                var4 = undefined;
                                var3 = var2 === var4;
                                var2 = undefined;
                                if (var3) {
                                    _fun6965_ip = 27;
                                    continue _fun6965
                                }
                            case 24:
                                var2 = var1;
                            case 27:
                                var1 = undefined;
                                if (var3) {
                                    _fun6965_ip = 57;
                                    continue _fun6965
                                }
                            case 32:
                                var6 = var5().value;
                                var5 = var0;
                                var5 = var5 === var4;
                                var1 = undefined;
                                var3 = var5;
                                if (var5) {
                                    _fun6965_ip = 57;
                                    continue _fun6965
                                }
                            case 51:
                                var1 = var6;
                                var3 = var5;
                            case 57:
                                if (var3) {
                                    _fun6965_ip = 63;
                                    continue _fun6965
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var6 = 5;
                                var3 = var3[var6];
                                var8 = var5.bind(var4)(var3);
                                var7 = var8.mark;
                                var5 = '💾';
                                var3 = 'Storage.refresh() Promise Resolved';
                                var3 = var7.bind(var8)(var5, var3);
                                var11 = var2;
                                var3 = 0;
                                var7 = 10000;
                                var5 = 0;
                                for (var8 in var11)
                                    case 129: {
                                        var5 = var3;
                                        case 141: var17 = var8;
                                        var13 = var2[var17];
                                        var16 = var13.length;
                                        var13 = var3 + var16;
                                        var3 = var13;
                                        if (!(var16 > var7)) {
                                            _fun6965_ip = 129;
                                            continue _fun6965
                                        }
                                        case 164: var15 = _closure1_slot0;
                                        var14 = _closure1_slot1;
                                        var14 = var14[var6];
                                        var15 = var15.bind(var4)(var14);
                                        var14 = var15.addDetail;
                                        var14 = var14.bind(var15)(var17, var16);
                                        var3 = var13;
                                        _fun6965_ip = 129;
                                        continue _fun6965;
                                    }
                            case 198:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var0 = var0[var6];
                                var4 = var3.bind(var4)(var0);
                                var3 = var4.addDetail;
                                var0 = 'TotalStorageSize';
                                var0 = var3.bind(var4)(var0, var5);
                                var3 = _closure3_slot0;
                                var0 = true;
                                var3.hasLoaded = var0;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(11);
        var1[0] = var4;
        var4 = {};
        var6 = 'parse';
        var4.key = var6;
        var6 = function arg0() {
            _fun6966: for (var _fun6966_ip = 0;;) switch (_fun6966_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var6 = arg0;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var7 = var6().value;
                    var3 = var2;
                    var4 = undefined;
                    var5 = var3 === var4;
                    var3 = undefined;
                    if (var5) {
                        _fun6966_ip = 36;
                        continue _fun6966
                    }
                case 33:
                    var3 = var7;
                case 36:
                    var9 = undefined;
                    if (var5) {
                        _fun6966_ip = 66;
                        continue _fun6966
                    }
                case 41:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var4;
                    var9 = undefined;
                    var5 = var6;
                    if (var6) {
                        _fun6966_ip = 66;
                        continue _fun6966
                    }
                case 60:
                    var9 = var7;
                    var5 = var6;
                case 66:
                    if (var5) {
                        _fun6966_ip = 72;
                        continue _fun6966
                    }
                case 69:
                    var2.return();
                case 72:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var7 = var6[var2];
                    var8 = var5.bind(var4)(var7);
                    var7 = function(arg0, arg1) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.storage;
                        var1 = {};
                        var0 = false;
                        var1.parsed = var0;
                        var0 = arg0;
                        var1.rawData = var0;
                        var0 = arg1;
                        var2[var0] = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var7 = var8.bind(var4)(var9, var7);
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun6968: for (var _fun6968_ip = 0;;) switch (_fun6968_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var0 = _closure3_slot0;
                                var4 = var0.storage;
                                var1 = {};
                                var5 = false;
                                var1.parsed = var5;
                                var1.rawData = var3;
                                var4[var2] = var1;
                                var1 = var0.secureKeys;
                                var0 = var1.has;
                                var0 = var0.bind(var1)(var2);
                                if (!var0) {
                                    _fun6968_ip = 71;
                                    continue _fun6968
                                }
                            case 56:
                                var1 = function arg0, arg1() {
                                    var4 = arg0;
                                    var _closure5_slot0 = var4;
                                    var3 = _closure1_slot6;
                                    var2 = var3.setItem;
                                    var1 = arg1;
                                    var2 = var2.bind(var3)(var4, var1);
                                    var1 = var2.then;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun6970: for (var _fun6970_ip = 0;;) switch (_fun6970_ip) {
                                            case 0:
                                                var0 = arg0;
                                                if (!var0) {
                                                    _fun6970_ip = 31;
                                                    continue _fun6970
                                                }
                                            case 6:
                                                var2 = _closure1_slot5;
                                                var1 = var2.removeItem;
                                                var0 = _closure5_slot0;
                                                var0 = var1.bind(var2)(var0);
                                            case 31:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2, var3);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var4)(var3, var0);
                    var0 = var1.parseResolve;
                    var0 = var0.bind(var1)();
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.resolve;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun6971: for (var _fun6971_ip = 0;;) switch (_fun6971_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.storage;
                    var0 = var2.hasOwnProperty;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun6971_ip = 31;
                        continue _fun6971
                    }
                case 26:
                    var0 = arg1;
                    return var0;
                case 31:
                    var0 = var1.storage;
                    var4 = var0[var3];
                    var2 = var4.parsed;
                    var0 = var4;
                    if (var2) {
                        _fun6971_ip = 99;
                        continue _fun6971
                    }
                case 53:
                    var2 = var1.storage;
                    var1 = {};
                    var5 = true;
                    var1.parsed = var5;
                    var6 = _closure1_slot7;
                    var5 = var4.rawData;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var1.value = var4;
                    var2[var3] = var1;
                    var0 = var1;
                case 99:
                    var0 = var0.value;
                    return var0;
            }
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'getAfterRefresh';
        var4.key = var6;
        var7 = _closure1_slot2;
        var0 = undefined;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun6973: for (var _fun6973_ip = 0;;) switch (_fun6973_ip) {
                    case 0:
                        StartGenerator();
                        var2 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun6973_ip = 60;
                            continue _fun6973
                        }
                    case 12:
                        var _closure4_slot0 = var2;
                        var3 = arg0;
                        var _closure4_slot1 = var3;
                        var3 = var2.parsePromise;
                        var2 = var3.then;
                        var1 = function() { // Environment: var1
                            var2 = _closure4_slot0;
                            var1 = var2.get;
                            var0 = _closure4_slot1;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 48);
                    case 46:
                        return var1;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun6973_ip = 57;
                            continue _fun6973
                        }
                    case 54:
                        return var1;
                    case 57:
                        return var1;
                    case 60:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = 'asyncGet';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun6976: for (var _fun6976_ip = 0;;) switch (_fun6976_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var2 = arg1;
                    var _closure3_slot2 = var2;
                    var2 = arg2;
                    var _closure3_slot3 = var2;
                    var2 = function arg0, arg1() {
                        _fun6977: for (var _fun6977_ip = 0;;) switch (_fun6977_ip) {
                            case 0:
                                var1 = arg1;
                                var5 = null;
                                if (!(var5 == var1)) {
                                    _fun6977_ip = 28;
                                    continue _fun6977
                                }
                            case 9:
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var5);
                                _fun6977_ip = 169;
                                continue _fun6977;
                            case 28:
                                var4 = global;
                                var2 = var4.Date;
                                var0 = var2.now;
                                var6 = var0.bind(var2)();
                                var0 = _closure1_slot7;
                                var2 = undefined;
                                var1 = var0.bind(var2)(var1);
                                var7 = _closure3_slot0;
                                var9 = var7.storage;
                                var8 = {};
                                var7 = true;
                                var8.parsed = var7;
                                var8.value = var1;
                                var7 = arg0;
                                var9[var7] = var8;
                                var7 = var4.Date;
                                var4 = var7.now;
                                var4 = var4.bind(var7)();
                                var7 = var4 - var6;
                                var4 = _closure3_slot3;
                                if (!(var5 != var4)) {
                                    _fun6977_ip = 160;
                                    continue _fun6977
                                }
                            case 119:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 5;
                                var3 = var5[var3];
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.mark;
                                var4 = _closure3_slot3;
                                var3 = '💾';
                                var3 = var5.bind(var6)(var3, var4, var7);
                            case 160:
                                var0 = _closure3_slot2;
                                var0 = var0.bind(var2)(var1);
                            case 169:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot4 = var2;
                    var2 = var1.secureKeys;
                    var1 = var2.has;
                    var2 = var1.bind(var2)(var3);
                    if (var2) {
                        _fun6976_ip = 93;
                        continue _fun6976
                    }
                case 61:
                    var4 = _closure1_slot5;
                    var2 = var4.getItem;
                    var5 = var2.bind(var4)(var3);
                    var4 = var5.then;
                    var2 = function(arg0) { // Environment: var0
                        var3 = _closure3_slot4;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    _fun6976_ip = 123;
                    continue _fun6976;
                case 93:
                    var2 = _closure1_slot6;
                    var1 = var2.getItem;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure3_slot4;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[4] = var4;
        var4 = {};
        var6 = 'asyncGetRaw';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun6981: for (var _fun6981_ip = 0;;) switch (_fun6981_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun6981_ip = 213;
                            continue _fun6981
                        }
                    case 16:
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun6981_ip = 73;
                            continue _fun6981
                        }
                    case 22:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var3 = var6.mark;
                        var1 = 'Get: ';
                        var2 = var1 + var4;
                        var1 = '💾';
                        var1 = var3.bind(var6)(var1, var2);
                    case 73:
                        var1 = this;
                        var2 = var1.secureKeys;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var7);
                        if (var1) {
                            _fun6981_ip = 115;
                            continue _fun6981
                        }
                    case 98:
                        var2 = _closure1_slot5;
                        var1 = var2.getItem;
                        var1 = var1.bind(var2)(var7);
                        _fun6981_ip = 130;
                        continue _fun6981;
                    case 115:
                        var6 = _closure1_slot6;
                        var2 = var6.getItem;
                        var1 = var2.bind(var6)(var7);
                    case 130:
                        SaveGenerator(address = 134);
                    case 132:
                        return var1;
                    case 134:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun6981_ip = 210;
                            continue _fun6981
                        }
                    case 140:
                        var6 = var5 == var1;
                        var2 = null;
                        if (var6) {
                            _fun6981_ip = 207;
                            continue _fun6981
                        }
                    case 149:
                        var2 = var1;
                        if (!(var5 != var4)) {
                            _fun6981_ip = 207;
                            continue _fun6981
                        }
                    case 156:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 5;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.mark;
                        var3 = 'Got: ';
                        var4 = var3 + var4;
                        var3 = '💾';
                        var3 = var5.bind(var6)(var3, var4);
                        var2 = var1;
                    case 207:
                        return var2;
                    case 210:
                        return var1;
                    case 213:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[5] = var4;
        var4 = {};
        var6 = 'getRaw';
        var4.key = var6;
        var6 = function arg0() {
            _fun6983: for (var _fun6983_ip = 0;;) switch (_fun6983_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.storage;
                    var1 = var3.hasOwnProperty;
                    var3 = var1.bind(var3)(var2);
                    var1 = null;
                    if (var3) {
                        _fun6983_ip = 30;
                        continue _fun6983
                    }
                case 28:
                    return var1;
                case 30:
                    var0 = var0.storage;
                    var2 = var0[var2];
                    var3 = var2.parsed;
                    var0 = null;
                    if (var3) {
                        _fun6983_ip = 72;
                        continue _fun6983
                    }
                case 51:
                    var2 = var2.rawData;
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun6983_ip = 69;
                        continue _fun6983
                    }
                case 66:
                    var1 = var2;
                case 69:
                    var0 = var1;
                case 72:
                    return var0;
            }
        };
        var4.value = var6;
        var1[6] = var4;
        var4 = {};
        var6 = 'set';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = arg0;
            var3 = arg1;
            var0 = this;
            var1 = global;
            var4 = var1.JSON;
            var1 = var4.stringify;
            var4 = var1.bind(var4)(var3);
            var1 = var0.setRaw;
            var1 = var1.bind(var0)(var2, var4);
            var1 = var0.storage;
            var0 = {};
            var4 = true;
            var0.parsed = var4;
            var0.value = var3;
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var1[7] = var4;
        var4 = {};
        var6 = 'setRaw';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun6985: for (var _fun6985_ip = 0;;) switch (_fun6985_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var4 = 'string';
                    var1 = typeof var3;
                    if (!(var4 === var1)) {
                        _fun6985_ip = 150;
                        continue _fun6985
                    }
                case 23:
                    var1 = typeof var2;
                    if (!(var4 === var1)) {
                        _fun6985_ip = 114;
                        continue _fun6985
                    }
                case 30:
                    var4 = var0.storage;
                    var1 = {};
                    var5 = false;
                    var1.parsed = var5;
                    var1.rawData = var2;
                    var4[var3] = var1;
                    var1 = var0.secureKeys;
                    var0 = var1.has;
                    var1 = var0.bind(var1)(var3);
                    if (var1) {
                        _fun6985_ip = 94;
                        continue _fun6985
                    }
                case 76:
                    var4 = _closure1_slot5;
                    var1 = var4.setItem;
                    var1 = var1.bind(var4)(var3, var2);
                    _fun6985_ip = 110;
                    continue _fun6985;
                case 94:
                    var1 = _closure1_slot6;
                    var0 = var1.setItem;
                    var0 = var0.bind(var1)(var3, var2);
                case 110:
                    var0 = undefined;
                    return var0;
                case 114:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = 'value must be a string';
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 150:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = 'Key must be a string';
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var1[8] = var4;
        var4 = {};
        var6 = 'remove';
        var4.key = var6;
        var6 = function arg0() {
            _fun6986: for (var _fun6986_ip = 0;;) switch (_fun6986_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.storage;
                    var1 = delete var1[var2];
                    var1 = var0.secureKeys;
                    var0 = var1.has;
                    var1 = var0.bind(var1)(var2);
                    if (var1) {
                        _fun6986_ip = 55;
                        continue _fun6986
                    }
                case 38:
                    var3 = _closure1_slot5;
                    var1 = var3.removeItem;
                    var1 = var1.bind(var3)(var2);
                    _fun6986_ip = 70;
                    continue _fun6986;
                case 55:
                    var1 = _closure1_slot6;
                    var0 = var1.removeItem;
                    var0 = var0.bind(var1)(var2);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[9] = var4;
        var4 = {};
        var6 = 'clear';
        var4.key = var6;
        var5 = function() {
            _fun6987: for (var _fun6987_ip = 0;;) switch (_fun6987_ip) {
                case 0:
                    var0 = this;
                    var1 = {};
                    var0.storage = var1;
                    var3 = _closure1_slot5;
                    var2 = var3.clear;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot6;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun6987_ip = 72;
                        continue _fun6987
                    }
                case 38:
                    var2 = _closure1_slot6;
                    var1 = var2.clear;
                    var6 = var0.secureKeys;
                    var0 = new Array(0);
                    var5 = 0;
                    var7 = var0;
                    var3 = arraySpread(var7, var6, var5);
                    var0 = var1.bind(var2)(var0);
                case 72:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var1[10] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/storage/native/Storage.tsx';
    var3 = var4.bind(var5)(var3);
    var2.impl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 27, 589, 20, 590, 2]);