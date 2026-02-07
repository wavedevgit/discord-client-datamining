// modules/user_settings/UserSettingsExperimentsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun79780: for (var _fun79780_ip = 0;;) switch (_fun79780_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun79780_ip = 46;
                    continue _fun79780
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun79780_ip = 55;
                    continue _fun79780
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun79780_ip = 345;
                    continue _fun79780
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun79780_ip = 323;
                    continue _fun79780
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun79780_ip = 283;
                    continue _fun79780
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun79780_ip = 270;
                    continue _fun79780
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
                    _fun79780_ip = 163;
                    continue _fun79780
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun79780_ip = 179;
                    continue _fun79780
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun79780_ip = 249;
                    continue _fun79780
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun79780_ip = 249;
                    continue _fun79780
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun79780_ip = 234;
                    continue _fun79780
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun79780_ip = 247;
                    continue _fun79780
                }
            case 234:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun79780_ip = 265;
                continue _fun79780;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun79780_ip = 283;
                continue _fun79780;
            case 270:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun79780_ip = 323;
                    continue _fun79780
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
                    _fun79780_ip = 330;
                    continue _fun79780
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun79781: for (var _fun79781_ip = 0;;) switch (_fun79781_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun79781_ip = 56;
                                continue _fun79781
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
                            _fun79781_ip = 67;
                            continue _fun79781;
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
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        _fun79782: for (var _fun79782_ip = 0;;) switch (_fun79782_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun79782_ip = 23;
                    continue _fun79782
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun79782_ip = 33;
                    continue _fun79782
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
                    _fun79782_ip = 70;
                    continue _fun79782
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun79782_ip = 55;
                    continue _fun79782
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var4 = function arg0() {
        _fun79783: for (var _fun79783_ip = 0;;) switch (_fun79783_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.exec;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun79783_ip = 37;
                    continue _fun79783
                }
            case 30:
                var1 = 1;
                var0 = var2[var1];
            case 37:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0, arg1() {
        _fun79784: for (var _fun79784_ip = 0;;) switch (_fun79784_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var0 = global;
                var3 = var0.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun79784_ip = 168;
                    continue _fun79784
                }
            case 30:
                var3 = typeof var1;
                var2 = 'object';
                if (!(var2 === var3)) {
                    _fun79784_ip = 47;
                    continue _fun79784
                }
            case 41:
                var2 = null;
                if (!(var2 === var1)) {
                    _fun79784_ip = 98;
                    continue _fun79784
                }
            case 47:
                var2 = 'string';
                if (!(var2 === var3)) {
                    _fun79784_ip = 233;
                    continue _fun79784
                }
            case 58:
                var2 = var1.toLowerCase;
                var4 = var2.bind(var1)();
                var3 = var4.includes;
                var2 = var5.toLowerCase;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun79784_ip = 233;
                    continue _fun79784
                }
            case 94:
                var2 = true;
                return var2;
            case 98:
                var2 = var0.Object;
                var0 = var2.values;
                var6 = var0.bind(var2)(var1);
                var0 = var6.length;
                var4 = 0;
                var0 = var4 < var0;
                var2 = undefined;
                if (!var0) {
                    _fun79784_ip = 233;
                    continue _fun79784
                }
            case 133:
                var7 = _closure1_slot6;
                var0 = var6[var4];
                var0 = var7.bind(var2)(var0, var5);
                if (var0) {
                    _fun79784_ip = 164;
                    continue _fun79784
                }
            case 150:
                var4 = var4 + 1;
                var0 = var6.length;
                if (var4 < var0) {
                    _fun79784_ip = 133;
                    continue _fun79784
                }
            case 162:
                _fun79784_ip = 233;
                continue _fun79784;
            case 164:
                var0 = true;
                return var0;
            case 168:
                var0 = _closure1_slot3;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun79784_ip = 233;
                    continue _fun79784
                }
            case 194:
                var6 = _closure1_slot6;
                var0 = var1.value;
                var0 = var6.bind(var3)(var0, var5);
                if (var0) {
                    _fun79784_ip = 229;
                    continue _fun79784
                }
            case 212:
                var6 = var2.bind(var3)();
                var0 = var6.done;
                var1 = var6;
                if (var0) {
                    _fun79784_ip = 233;
                    continue _fun79784
                }
            case 227:
                _fun79784_ip = 194;
                continue _fun79784;
            case 229:
                var0 = true;
                return var0;
            case 233:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = /^(\d{4}-\d{1,2})/;
    var _closure1_slot2 = var0;
    var0 = 1;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/UserSettingsExperimentsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getExperimentDateFromId = var4;
    var4 = function arg0() {
        var0 = global;
        var2 = var0.Array;
        var1 = var2.from;
        var4 = var0.Object;
        var3 = var4.entries;
        var0 = arg0;
        var0 = var3.bind(var4)(var0);
        var2 = var1.bind(var2)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun79786: for (var _fun79786_ip = 0;;) switch (_fun79786_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4[Symbol.iterator];
                    var4 = var0().next;
                    var1 = var4().value;
                    var2 = var0;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if (var3) {
                        _fun79786_ip = 27;
                        continue _fun79786
                    }
                case 24:
                    var2 = var1;
                case 27:
                    var1 = undefined;
                    if (var3) {
                        _fun79786_ip = 57;
                        continue _fun79786
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var0;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun79786_ip = 57;
                        continue _fun79786
                    }
                case 51:
                    var1 = var5;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun79786_ip = 63;
                        continue _fun79786
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = {};
                    var0.id = var2;
                    var0.experiment = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getEntries = var4;
    var2.matchesDeep = var3;
    var3 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.slice;
        var2 = var1.bind(var2)();
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun79788: for (var _fun79788_ip = 0;;) switch (_fun79788_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var5 = _closure2_slot0;
                    var0 = null;
                    var7 = var0 == var2;
                    var6 = undefined;
                    var4 = undefined;
                    if (var7) {
                        _fun79788_ip = 31;
                        continue _fun79788
                    }
                case 26:
                    var4 = var2.id;
                case 31:
                    var4 = var5[var4];
                    if (!(var0 != var4)) {
                        _fun79788_ip = 68;
                        continue _fun79788
                    }
                case 39:
                    var5 = _closure2_slot0;
                    var7 = var0 == var1;
                    var4 = undefined;
                    if (var7) {
                        _fun79788_ip = 57;
                        continue _fun79788
                    }
                case 52:
                    var4 = var1.id;
                case 57:
                    var4 = var5[var4];
                    if (!(var0 != var4)) {
                        _fun79788_ip = 214;
                        continue _fun79788
                    }
                case 68:
                    var5 = _closure2_slot0;
                    var7 = var0 == var2;
                    var4 = undefined;
                    if (var7) {
                        _fun79788_ip = 86;
                        continue _fun79788
                    }
                case 81:
                    var4 = var2.id;
                case 86:
                    var4 = var5[var4];
                    if (!(var0 == var4)) {
                        _fun79788_ip = 120;
                        continue _fun79788
                    }
                case 94:
                    var4 = _closure2_slot0;
                    var5 = var0 == var1;
                    var3 = undefined;
                    if (var5) {
                        _fun79788_ip = 112;
                        continue _fun79788
                    }
                case 107:
                    var3 = var1.id;
                case 112:
                    var3 = var4[var3];
                    if (!(var0 == var3)) {
                        _fun79788_ip = 209;
                        continue _fun79788
                    }
                case 120:
                    var5 = _closure1_slot5;
                    var3 = var2.id;
                    var4 = var5.bind(var6)(var3);
                    var3 = var1.id;
                    var3 = var5.bind(var6)(var3);
                    if (!(var0 != var4)) {
                        _fun79788_ip = 172;
                        continue _fun79788
                    }
                case 151:
                    if (!(var0 != var3)) {
                        _fun79788_ip = 172;
                        continue _fun79788
                    }
                case 155:
                    var0 = var3.localeCompare;
                    var0 = var0.bind(var3)(var4);
                    var3 = 0;
                    if (!(var3 === var0)) {
                        _fun79788_ip = 207;
                        continue _fun79788
                    }
                case 172:
                    var2 = var2.experiment;
                    var3 = var2.title;
                    var2 = var3.localeCompare;
                    var1 = var1.experiment;
                    var1 = var1.title;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                case 207:
                    return var0;
                case 209:
                    var0 = 1;
                    return var0;
                case 214:
                    var0 = -1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sortEntries = var3;
    var1 = function arg0, arg1() {
        _fun79789: for (var _fun79789_ip = 0;;) switch (_fun79789_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = var4.split;
                var2 = /\s+/g;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var1 = '';
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var11 = var3.bind(var4)(var2);
                var2 = var11.length;
                var6 = 0;
                if (!(var6 !== var2)) {
                    _fun79789_ip = 280;
                    continue _fun79789
                }
            case 63:
                var5 = new Array(0);
                var4 = _closure1_slot3;
                var3 = undefined;
                var10 = var4.bind(var3)(var0);
                var7 = var10.bind(var3)();
                var4 = var7.done;
                var9 = null;
                var8 = 1;
                if (var4) {
                    _fun79789_ip = 229;
                    continue _fun79789
                }
            case 101:
                var13 = var7.value;
                var4 = _closure1_slot3;
                var16 = var4.bind(var3)(var11);
                var4 = var16.bind(var3)();
                var12 = var4.done;
                var15 = var4;
                var14 = 0;
                var4 = 0;
                if (var12) {
                    _fun79789_ip = 180;
                    continue _fun79789
                }
            case 134:
                var17 = _closure1_slot6;
                var12 = var15.value;
                var12 = var17.bind(var3)(var13, var12);
                var17 = var14;
                if (!var12) {
                    _fun79789_ip = 159;
                    continue _fun79789
                }
            case 155:
                var17 = var14 + var8;
            case 159:
                var18 = var16.bind(var3)();
                var12 = var18.done;
                var14 = var17;
                var15 = var18;
                var4 = var14;
                if (!var12) {
                    _fun79789_ip = 134;
                    continue _fun79789
                }
            case 180:
                if (!(var6 !== var4)) {
                    _fun79789_ip = 214;
                    continue _fun79789
                }
            case 184:
                var12 = var5[var4];
                if (!(var9 == var12)) {
                    _fun79789_ip = 200;
                    continue _fun79789
                }
            case 192:
                var12 = new Array(0);
                var5[var4] = var12;
            case 200:
                var12 = var5[var4];
                var4 = var12.push;
                var4 = var4.bind(var12)(var13);
            case 214:
                var12 = var10.bind(var3)();
                var4 = var12.done;
                var7 = var12;
                if (!var4) {
                    _fun79789_ip = 101;
                    continue _fun79789
                }
            case 229:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var3)(var2);
                var4 = var5.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var4 = var4.bind(var5)(var1);
                var1 = var4.reverse;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            case 280:
                return var0;
        }
    };
    var2.getBestMatches = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4295, 2]);