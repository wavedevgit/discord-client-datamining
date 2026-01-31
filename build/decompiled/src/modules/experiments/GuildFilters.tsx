// modules/experiments/GuildFilters.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun17739: for (var _fun17739_ip = 0;;) switch (_fun17739_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun17739_ip = 46;
                    continue _fun17739
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun17739_ip = 55;
                    continue _fun17739
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun17739_ip = 343;
                    continue _fun17739
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun17739_ip = 323;
                    continue _fun17739
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun17739_ip = 283;
                    continue _fun17739
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun17739_ip = 270;
                    continue _fun17739
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
                    _fun17739_ip = 163;
                    continue _fun17739
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun17739_ip = 179;
                    continue _fun17739
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun17739_ip = 249;
                    continue _fun17739
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun17739_ip = 249;
                    continue _fun17739
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun17739_ip = 234;
                    continue _fun17739
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun17739_ip = 247;
                    continue _fun17739
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun17739_ip = 265;
                continue _fun17739;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun17739_ip = 283;
                continue _fun17739;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun17739_ip = 323;
                    continue _fun17739
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
                    _fun17739_ip = 330;
                    continue _fun17739
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun17740: for (var _fun17740_ip = 0;;) switch (_fun17740_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun17740_ip = 56;
                                continue _fun17740
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
                            _fun17740_ip = 67;
                            continue _fun17740;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun17741: for (var _fun17741_ip = 0;;) switch (_fun17741_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun17741_ip = 23;
                    continue _fun17741
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun17741_ip = 33;
                    continue _fun17741
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
                    _fun17741_ip = 70;
                    continue _fun17741
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun17741_ip = 55;
                    continue _fun17741
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun17742: for (var _fun17742_ip = 0;;) switch (_fun17742_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var1 = arg2;
                var7 = undefined;
                var3 = undefined;
                var4 = undefined;
                var2 = undefined;
            case 17: // try_start_0
                var10 = _closure1_slot0;
                var5 = _closure1_slot1;
                var9 = 4;
                var5 = var5[var9];
                var5 = var10.bind(var7)(var5);
                var3 = var5.bind(var7)(var0);
                var0 = var8;
                var5 = null;
                var10 = var5 != var0;
                var0 = null;
                if (!var10) {
                    _fun17742_ip = 81;
                    continue _fun17742
                }
            case 59:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var9];
                var10 = var11.bind(var7)(var10);
                var0 = var10.bind(var7)(var8);
            case 81:
                var4 = var0;
                var0 = var1;
                var8 = var5 != var0;
                var0 = null;
                if (!var8) {
                    _fun17742_ip = 118;
                    continue _fun17742
                }
            case 96:
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var9];
                var6 = var8.bind(var7)(var6);
                var0 = var6.bind(var7)(var1);
            case 118:
                var2 = var0;
            case 121: // try_end0
                var6 = var4;
                var6 = var5 == var6;
                var1 = var6;
                if (var6) {
                    _fun17742_ip = 151;
                    continue _fun17742
                }
            case 134:
                var7 = var3;
                var6 = var7.lesser;
                var4 = var6.bind(var7)(var4);
                var1 = !var4;
            case 151:
                var0 = var1;
                if (!var1) {
                    _fun17742_ip = 190;
                    continue _fun17742
                }
            case 157:
                var4 = var2;
                var4 = var5 == var4;
                var1 = var4;
                if (var4) {
                    _fun17742_ip = 187;
                    continue _fun17742
                }
            case 170:
                var4 = var3;
                var3 = var4.greater;
                var2 = var3.bind(var4)(var2);
                var1 = !var2;
            case 187:
                var0 = var1;
            case 190:
                return var0;
            case 192: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun17743: for (var _fun17743_ip = 0;;) switch (_fun17743_ip) {
            case 0:
                var1 = _closure1_slot6;
                var13 = undefined;
                var0 = arg0;
                var12 = var1.bind(var13)(var0);
                var1 = var12.bind(var13)();
                var0 = var1.done;
                var11 = 5;
                var10 = 'max_id';
                var9 = 2;
                var8 = 0;
                var7 = 1;
                var6 = 'min_id';
                var5 = undefined;
                var4 = undefined;
                var3 = var1;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun17743_ip = 197;
                    continue _fun17743
                }
            case 62:
                var15 = var3.value;
                var0 = _closure1_slot2;
                var0 = var0.bind(var13)(var15, var9);
                var18 = var0[var8];
                var0 = var0[var7];
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var11];
                var16 = var16.bind(var13)(var15);
                var15 = var16.v3;
                var17 = var15.bind(var16)(var6);
                var16 = var0;
                var15 = var4;
                if (!(var17 !== var18)) {
                    _fun17743_ip = 167;
                    continue _fun17743
                }
            case 123:
                var19 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var11];
                var19 = var19.bind(var13)(var17);
                var17 = var19.v3;
                var17 = var17.bind(var19)(var10);
                var16 = var5;
                var15 = var4;
                if (!(var17 === var18)) {
                    _fun17743_ip = 167;
                    continue _fun17743
                }
            case 161:
                var16 = var5;
                var15 = var0;
            case 167:
                var17 = var12.bind(var13)();
                var0 = var17.done;
                var5 = var16;
                var4 = var15;
                var3 = var17;
                var2 = var5;
                var1 = var4;
                if (!var0) {
                    _fun17743_ip = 62;
                    continue _fun17743
                }
            case 197:
                var0 = {};
                var0.min = var2;
                var0.max = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var5 = 5;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_ids';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        _fun17744: for (var _fun17744_ip = 0;;) switch (_fun17744_ip) {
            case 0:
                var1 = new Array(0);
                var _closure2_slot0 = var1;
                var2 = _closure1_slot6;
                var9 = undefined;
                var1 = arg0;
                var8 = var2.bind(var9)(var1);
                var2 = var8.bind(var9)();
                var1 = var2.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = 5;
                var3 = 'guild_ids';
                if (var1) {
                    _fun17744_ip = 128;
                    continue _fun17744
                }
            case 54:
                var11 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var9)(var11, var7);
                var12 = var1[var6];
                var1 = var1[var5];
                var13 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var4];
                var13 = var13.bind(var9)(var11);
                var11 = var13.v3;
                var11 = var11.bind(var13)(var3);
                if (!(var12 === var11)) {
                    _fun17744_ip = 113;
                    continue _fun17744
                }
            case 109:
                _closure2_slot0 = var1;
            case 113:
                var11 = var8.bind(var9)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun17744_ip = 54;
                    continue _fun17744
                }
            case 128:
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_id_range';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var2 = var1.min;
        var _closure2_slot0 = var2;
        var1 = var1.max;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var0 = arg0;
            var0 = var4.bind(var1)(var0, var3, var2);
            return var0;
        };
        return var0;
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_age_range_days';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var2 = var1.min;
        var _closure2_slot0 = var2;
        var1 = var1.max;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var4 = _closure1_slot8;
            var1 = global;
            var2 = var1.Math;
            var1 = var2.floor;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var0 = 6;
            var0 = var7[var0];
            var3 = undefined;
            var8 = var6.bind(var3)(var0);
            var5 = var8.age;
            var0 = arg0;
            var5 = var5.bind(var8)(var0);
            var0 = 7;
            var0 = var7[var0];
            var0 = var6.bind(var3)(var0);
            var0 = var0.Millis;
            var0 = var0.DAY;
            var0 = var5 / var0;
            var2 = var1.bind(var2)(var0);
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        return var0;
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_member_count_range';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var2 = var1.min;
        var _closure2_slot0 = var2;
        var1 = var1.max;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun17751: for (var _fun17751_ip = 0;;) switch (_fun17751_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getMemberCount;
                    var0 = arg0;
                    var5 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var5;
                    if (!var0) {
                        _fun17751_ip = 54;
                        continue _fun17751
                    }
                case 30:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var5, var3, var2);
                case 54:
                    return var0;
            }
        };
        return var0;
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_has_feature';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var4 = _closure1_slot2;
        var5 = undefined;
        var3 = arg0;
        var2 = 1;
        var3 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot2;
        var1 = 0;
        var3 = var3[var1];
        var1 = 2;
        var1 = var4.bind(var5)(var3, var1);
        var1 = var1[var2];
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun17753: for (var _fun17753_ip = 0;;) switch (_fun17753_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot5;
                    var0 = var2.getGuild;
                    var0 = var0.bind(var2)(var5);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun17753_ip = 42;
                        continue _fun17753
                    }
                case 28:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var0 = var3.bind(var4)(var5);
                case 42:
                    var _closure3_slot0 = var0;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun17753_ip = 76;
                        continue _fun17753
                    }
                case 53:
                    var3 = _closure2_slot0;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.features;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 76:
                    return var0;
            }
        };
        return var0;
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_hub_types';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var4 = _closure1_slot2;
        var5 = undefined;
        var3 = arg0;
        var2 = 1;
        var3 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot2;
        var1 = 0;
        var3 = var3[var1];
        var1 = 2;
        var1 = var4.bind(var5)(var3, var1);
        var1 = var1[var2];
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun17756: for (var _fun17756_ip = 0;;) switch (_fun17756_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot5;
                    var0 = var2.getGuild;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun17756_ip = 42;
                        continue _fun17756
                    }
                case 28:
                    var4 = _closure1_slot3;
                    var3 = var4.getGuild;
                    var2 = var3.bind(var4)(var5);
                case 42:
                    var _closure3_slot0 = var2;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun17756_ip = 70;
                        continue _fun17756
                    }
                case 53:
                    var2 = var2.hubType;
                    var3 = 'number';
                    var2 = typeof var2;
                    var0 = var3 === var2;
                case 70:
                    if (!var0) {
                        _fun17756_ip = 96;
                        continue _fun17756
                    }
                case 73:
                    var3 = _closure2_slot0;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.hubType;
                        var0 = arg0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 96:
                    return var0;
            }
        };
        return var0;
    };
    var1[var8] = var7;
    var7 = var4[var5];
    var9 = var6.bind(var0)(var7);
    var8 = var9.v3;
    var7 = 'guild_has_vanity_url';
    var8 = var8.bind(var9)(var7);
    var7 = function(arg0) { // Environment: var3
        var4 = _closure1_slot2;
        var5 = undefined;
        var3 = arg0;
        var2 = 1;
        var3 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot2;
        var1 = 0;
        var3 = var3[var1];
        var1 = 2;
        var1 = var4.bind(var5)(var3, var1);
        var1 = var1[var2];
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun17759: for (var _fun17759_ip = 0;;) switch (_fun17759_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot5;
                    var0 = var1.getGuild;
                    var0 = var0.bind(var1)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun17759_ip = 40;
                        continue _fun17759
                    }
                case 26:
                    var3 = _closure1_slot3;
                    var2 = var3.getGuild;
                    var0 = var2.bind(var3)(var4);
                case 40:
                    if (!(var1 != var0)) {
                        _fun17759_ip = 67;
                        continue _fun17759
                    }
                case 44:
                    var0 = var0.vanityURLCode;
                    var1 = var1 != var0;
                    var0 = _closure2_slot0;
                    var0 = var0 === var1;
                    return var0;
                case 67:
                    var0 = false;
                    return var0;
            }
        };
        return var0;
    };
    var1[var8] = var7;
    var5 = var4[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.v3;
    var5 = 'guild_in_range_by_hash';
    var5 = var6.bind(var7)(var5);
    var3 = function(arg0) { // Environment: var3
        _fun17760: for (var _fun17760_ip = 0;;) switch (_fun17760_ip) {
            case 0:
                var2 = _closure1_slot6;
                var13 = undefined;
                var1 = arg0;
                var12 = var2.bind(var13)(var1);
                var2 = var12.bind(var13)();
                var1 = var2.done;
                var11 = global;
                var10 = null;
                var9 = 0;
                var8 = 5;
                var7 = 'target';
                var6 = 2;
                var5 = 1;
                var4 = 'hash_key';
                var3 = undefined;
                if (var1) {
                    _fun17760_ip = 211;
                    continue _fun17760
                }
            case 61:
                var15 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var13)(var15, var6);
                var17 = var1[var9];
                var1 = var1[var5];
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var8];
                var16 = var16.bind(var13)(var15);
                var15 = var16.v3;
                var15 = var15.bind(var16)(var4);
                if (!(var15 !== var17)) {
                    _fun17760_ip = 183;
                    continue _fun17760
                }
            case 116:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var8];
                var16 = var16.bind(var13)(var15);
                var15 = var16.v3;
                var15 = var15.bind(var16)(var7);
                var16 = var3;
                if (!(var15 === var17)) {
                    _fun17760_ip = 190;
                    continue _fun17760
                }
            case 151:
                var15 = var11.parseInt;
                var15 = var15.bind(var13)(var1);
                var18 = var10 != var15;
                var17 = 0;
                if (!var18) {
                    _fun17760_ip = 174;
                    continue _fun17760
                }
            case 171:
                var17 = var15;
            case 174:
                var _closure2_slot1 = var17;
                var16 = var15;
                _fun17760_ip = 190;
                continue _fun17760;
            case 183:
                var _closure2_slot0 = var1;
                var16 = var3;
            case 190:
                var15 = var12.bind(var13)();
                var1 = var15.done;
                var3 = var16;
                var2 = var15;
                if (!var1) {
                    _fun17760_ip = 61;
                    continue _fun17760
                }
            case 211:
                var0 = function(arg0) { // Environment: var0
                    _fun17761: for (var _fun17761_ip = 0;;) switch (_fun17761_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.v3;
                            var7 = _closure2_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = '';
                            var4 = ':';
                            var1 = arg0;
                            var1 = var6.bind(var5)(var7, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            var2 = 0;
                            if (!(!(var1 > var2))) {
                                _fun17761_ip = 86;
                                continue _fun17761
                            }
                        case 80:
                            var2 = var1 >>> var2;
                            _fun17761_ip = 90;
                            continue _fun17761;
                        case 86:
                            var2 = var1 + var1;
                        case 90:
                            var1 = 10000;
                            var1 = var2 % var1;
                            var0 = _closure2_slot1;
                            var0 = var1 < var0;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var1[var5] = var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/GuildFilters.tsx';
    var3 = var4.bind(var5)(var3);
    var2.GUILD_FILTERS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1597, 1599, 1410, 24, 1215, 21, 667, 2]);