// stores/LibraryApplicationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun30782: for (var _fun30782_ip = 0;;) switch (_fun30782_ip) {
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
                _fun30782_ip = 74;
                continue _fun30782;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun30785: for (var _fun30785_ip = 0;;) switch (_fun30785_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun30785_ip = 46;
                    continue _fun30785
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun30785_ip = 55;
                    continue _fun30785
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun30785_ip = 343;
                    continue _fun30785
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun30785_ip = 323;
                    continue _fun30785
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun30785_ip = 283;
                    continue _fun30785
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun30785_ip = 270;
                    continue _fun30785
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
                    _fun30785_ip = 163;
                    continue _fun30785
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun30785_ip = 179;
                    continue _fun30785
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun30785_ip = 249;
                    continue _fun30785
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun30785_ip = 249;
                    continue _fun30785
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun30785_ip = 234;
                    continue _fun30785
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun30785_ip = 247;
                    continue _fun30785
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun30785_ip = 265;
                continue _fun30785;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun30785_ip = 283;
                continue _fun30785;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun30785_ip = 323;
                    continue _fun30785
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
                    _fun30785_ip = 330;
                    continue _fun30785
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun30786: for (var _fun30786_ip = 0;;) switch (_fun30786_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun30786_ip = 56;
                                continue _fun30786
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
                            _fun30786_ip = 67;
                            continue _fun30786;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun30787: for (var _fun30787_ip = 0;;) switch (_fun30787_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun30787_ip = 23;
                    continue _fun30787
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun30787_ip = 33;
                    continue _fun30787
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
                    _fun30787_ip = 70;
                    continue _fun30787
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun30787_ip = 55;
                    continue _fun30787
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun30788: for (var _fun30788_ip = 0;;) switch (_fun30788_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Storage;
                var1 = var2.get;
                var0 = _closure1_slot12;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun30788_ip = 53;
                    continue _fun30788
                }
            case 51:
                var0 = {};
            case 53:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var4 = var1.Storage;
        var3 = var4.set;
        var2 = _closure1_slot12;
        var1 = {};
        var6 = _closure1_slot23;
        var7 = var6.bind(var0)();
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var6 = _closure1_slot18;
        var5 = 'activeLaunchOptionIds';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var4 = var1.Storage;
        var3 = var4.set;
        var2 = _closure1_slot12;
        var1 = {};
        var6 = _closure1_slot23;
        var7 = var6.bind(var0)();
        var8 = var1;
        var6 = copyDataProperties(var8, var7);
        var6 = _closure1_slot17;
        var5 = 'activeLibraryApplicationBranchIds';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun30791: for (var _fun30791_ip = 0;;) switch (_fun30791_ip) {
            case 0:
                var2 = _closure1_slot21;
                var0 = undefined;
                var1 = arg0;
                var4 = var2.bind(var0)(var1);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 9;
                if (var1) {
                    _fun30791_ip = 115;
                    continue _fun30791
                }
            case 32:
                var7 = var2.value;
                var6 = _closure1_slot9;
                var1 = var6.createFromServer;
                var7 = var1.bind(var6)(var7);
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var9 = var6.bind(var0)(var1);
                var8 = var9.getComboId;
                var6 = var7.id;
                var1 = var7.branchId;
                var6 = var8.bind(var9)(var6, var1);
                var1 = _closure1_slot14;
                var1[var6] = var7;
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun30791_ip = 32;
                    continue _fun30791
                }
            case 115:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.libraryApplication;
        var2 = _closure1_slot9;
        var0 = var2.createFromServer;
        var4 = var0.bind(var2)(var3);
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.getComboId;
        var3 = var4.id;
        var2 = var4.branchId;
        var3 = var5.bind(var6)(var3, var2);
        var2 = _closure1_slot14;
        var2[var3] = var4;
        var2 = _closure1_slot16;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var0 = function arg0, arg1() {
        _fun30793: for (var _fun30793_ip = 0;;) switch (_fun30793_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getComboId;
                var2 = arg0;
                var0 = arg1;
                var2 = var3.bind(var4)(var2, var0);
                var0 = _closure1_slot14;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 == var0)) {
                    _fun30793_ip = 65;
                    continue _fun30793
                }
            case 57:
                var1 = _closure1_slot15;
                var0 = var1[var2];
            case 65:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var0 = {};
        var3 = _closure1_slot15;
        var4 = var0;
        var2 = copyDataProperties(var4, var3);
        var3 = _closure1_slot14;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        return var0;
    };
    var _closure1_slot28 = var0;
    var9 = global;
    var10 = var9.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.LibraryApplicationFlags;
    var _closure1_slot11 = var1;
    var1 = 'LibraryApplicationStore';
    var _closure1_slot12 = var1;
    var7 = false;
    var _closure1_slot13 = var7;
    var10 = {};
    var _closure1_slot14 = var10;
    var10 = {};
    var _closure1_slot15 = var10;
    var9 = var9.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot16 = var9;
    var9 = {};
    var _closure1_slot17 = var9;
    var9 = {};
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.Store;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun30796: for (var _fun30796_ip = 0;;) switch (_fun30796_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30796_ip = 69;
                        continue _fun30796
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30796_ip = 105;
                    continue _fun30796;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun30797: for (var _fun30797_ip = 0;;) switch (_fun30797_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.waitFor;
                    var0 = _closure1_slot10;
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var2 = _closure1_slot12;
                    var2 = var3.bind(var4)(var2);
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun30797_ip = 129;
                        continue _fun30797
                    }
                case 69:
                    var3 = var2.activeLaunchOptionIds;
                    if (!(var4 != var3)) {
                        _fun30797_ip = 91;
                        continue _fun30797
                    }
                case 79:
                    var3 = var2.activeLaunchOptionIds;
                    _closure1_slot18 = var3;
                    _fun30797_ip = 99;
                    continue _fun30797;
                case 91:
                    var3 = _closure1_slot24;
                    var3 = var3.bind(var0)();
                case 99:
                    var3 = var2.activeLibraryApplicationBranchIds;
                    if (!(var4 != var3)) {
                        _fun30797_ip = 121;
                        continue _fun30797
                    }
                case 109:
                    var2 = var2.activeLibraryApplicationBranchIds;
                    _closure1_slot17 = var2;
                    _fun30797_ip = 129;
                    continue _fun30797;
                case 121:
                    var1 = _closure1_slot25;
                    var1 = var1.bind(var0)();
                case 129:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'libraryApplications';
        var4.key = var6;
        var6 = function() {
            var2 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure1_slot28;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var _closure4_slot1 = var0;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var0);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun30800: for (var _fun30800_ip = 0;;) switch (_fun30800_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure4_slot0;
                            var0 = _closure4_slot1;
                            var3 = var0[var2];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            if (var3) {
                                _fun30800_ip = 36;
                                continue _fun30800
                            }
                        case 28:
                            var1 = _closure4_slot1;
                            var1 = delete var1[var2];
                        case 36:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.isHidden;
                var0 = var0.bind(var1)();
                var0 = !var0;
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAllLibraryApplications';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot28;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasLibraryApplication';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var3 = _closure1_slot28;
            var0 = undefined;
            var0 = var3.bind(var0)();
            var0 = var1.bind(var2)(var0);
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasApplication';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun30804: for (var _fun30804_ip = 0;;) switch (_fun30804_ip) {
                case 0:
                    var1 = arguments[2];
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun30804_ip = 11;
                        continue _fun30804
                    }
                case 9:
                    var1 = false;
                case 11:
                    var4 = _closure1_slot27;
                    var3 = arg0;
                    var0 = arg1;
                    var4 = var4.bind(var5)(var3, var0);
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun30804_ip = 95;
                        continue _fun30804
                    }
                case 39:
                    var1 = !var1;
                    if (!var1) {
                        _fun30804_ip = 55;
                        continue _fun30804
                    }
                case 45:
                    var3 = var4.isHidden;
                    var1 = var3.bind(var4)();
                case 55:
                    var1 = !var1;
                    if (!var1) {
                        _fun30804_ip = 92;
                        continue _fun30804
                    }
                case 61:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 9;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isUserEntitledToLibraryApplication;
                    var1 = var2.bind(var3)(var4);
                case 92:
                    var0 = var1;
                case 95:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLibraryApplication';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun30805: for (var _fun30805_ip = 0;;) switch (_fun30805_ip) {
                case 0:
                    var1 = arguments[2];
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun30805_ip = 11;
                        continue _fun30805
                    }
                case 9:
                    var1 = false;
                case 11:
                    var4 = _closure1_slot27;
                    var2 = arg0;
                    var0 = arg1;
                    var2 = var4.bind(var5)(var2, var0);
                    var0 = var2;
                    if (!var1) {
                        _fun30805_ip = 87;
                        continue _fun30805
                    }
                case 36:
                    var1 = null;
                    var0 = var2;
                    if (!(var1 != var0)) {
                        _fun30805_ip = 87;
                        continue _fun30805
                    }
                case 45:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 9;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isUserEntitledToLibraryApplication;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if (!var3) {
                        _fun30805_ip = 84;
                        continue _fun30805
                    }
                case 81:
                    var1 = var2;
                case 84:
                    var0 = var1;
                case 87:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getActiveLibraryApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun30806: for (var _fun30806_ip = 0;;) switch (_fun30806_ip) {
                case 0:
                    var14 = arg0;
                    var13 = arguments[1];
                    var1 = undefined;
                    if (!(var13 === var1)) {
                        _fun30806_ip = 14;
                        continue _fun30806
                    }
                case 12:
                    var13 = false;
                case 14:
                    var0 = _closure1_slot17;
                    var5 = var0[var14];
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun30806_ip = 137;
                        continue _fun30806
                    }
                case 31:
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var4 = 9;
                    var0 = var0[var4];
                    var3 = var3.bind(var1)(var0);
                    var0 = var3.getComboId;
                    var5 = var0.bind(var3)(var14, var5);
                    var0 = _closure1_slot14;
                    var0 = var0[var5];
                    if (!(var2 == var0)) {
                        _fun30806_ip = 83;
                        continue _fun30806
                    }
                case 75:
                    var3 = _closure1_slot15;
                    var0 = var3[var5];
                case 83:
                    if (!(var2 != var0)) {
                        _fun30806_ip = 137;
                        continue _fun30806
                    }
                case 87:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isUserEntitledToLibraryApplication;
                    var2 = var2.bind(var3)(var0);
                    if (!var2) {
                        _fun30806_ip = 137;
                        continue _fun30806
                    }
                case 118:
                    if (var13) {
                        _fun30806_ip = 247;
                        continue _fun30806
                    }
                case 124:
                    var2 = var0.isHidden;
                    var2 = var2.bind(var0)();
                    if (!var2) {
                        _fun30806_ip = 247;
                        continue _fun30806
                    }
                case 137:
                    var2 = _closure1_slot28;
                    var11 = var2.bind(var1)();
                    var9 = var11;
                    var5 = 9;
                    var4 = undefined;
                    for (var6 in var9)
                        case 161: {
                            case 170: var2 = var6;
                            var3 = var11[var2];
                            var3 = var3.id;
                            if (var3 !== var14) {
                                _fun30806_ip = 161;
                                continue _fun30806
                            }
                            case 186: var2 = var11[var2];
                            var15 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var5];
                            var15 = var15.bind(var1)(var3);
                            var3 = var15.isUserEntitledToLibraryApplication;
                            var3 = var3.bind(var15)(var2);
                            var4 = var2;
                            if (!var3) {
                                _fun30806_ip = 161;
                                continue _fun30806
                            }
                            case 224: if (var13) {
                                _fun30806_ip = 243;
                                continue _fun30806
                            }
                            case 227: var3 = var2.isHidden;
                            var3 = var3.bind(var2)();
                            var4 = var2;
                            if (var3) {
                                _fun30806_ip = 161;
                                continue _fun30806
                            }
                            case 243: return var2;
                        }
                case 245:
                    return var1;
                case 247:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isUpdatingFlags';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot16;
            var1 = var2.has;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 9;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.getComboId;
            var3 = arg0;
            var0 = arg1;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getActiveLaunchOptionId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = _closure1_slot18;
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.getComboId;
            var2 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var0);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'fetched';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'entitledBranchIds';
        var4.key = var6;
        var6 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 11;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var1 = _closure1_slot28;
            var1 = var1.bind(var3)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isUserEntitledToLibraryApplication;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.branchId;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'hasRemovedLibraryApplicationThisSession';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'whenInitialized';
        var4.key = var6;
        var5 = function arg0() {
            var2 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = var2.addConditionalChangeListener;
            var0 = function() { // Environment: var0
                _fun30815: for (var _fun30815_ip = 0;;) switch (_fun30815_ip) {
                    case 0:
                        var0 = _closure1_slot13;
                        var2 = undefined;
                        if (var0) {
                            _fun30815_ip = 14;
                            continue _fun30815
                        }
                    case 12:
                        return var2;
                    case 14:
                        var0 = global;
                        var1 = var0.setImmediate;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        var0 = false;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var9);
    var7.displayName = var1;
    var1 = 13;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        var0 = false;
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.libraryApplications;
        var0 = {};
        _closure1_slot14 = var0;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1 = true;
        _closure1_slot13 = var1;
        return var0;
    };
    var1.LIBRARY_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.libraryApplications;
        var1 = _closure1_slot26;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.SKU_PURCHASE_SUCCESS = var9;
    var9 = function arg0() {
        _fun30819: for (var _fun30819_ip = 0;;) switch (_fun30819_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.applicationId;
                var4 = var0.branchId;
                var7 = var0.flags;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getComboId;
                var3 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot27;
                var5 = var2.bind(var0)(var5, var4);
                var2 = null;
                var2 = var2 != var5;
                if (!var2) {
                    _fun30819_ip = 88;
                    continue _fun30819
                }
            case 75:
                var4 = var5.isHidden;
                var4 = var4.bind(var5)();
                var2 = !var4;
            case 88:
                if (!var2) {
                    _fun30819_ip = 133;
                    continue _fun30819
                }
            case 91:
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 10;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.hasFlag;
                var4 = _closure1_slot11;
                var4 = var4.HIDDEN;
                var2 = var5.bind(var6)(var7, var4);
            case 133:
                if (!var2) {
                    _fun30819_ip = 142;
                    continue _fun30819
                }
            case 136:
                var2 = true;
                _closure1_slot19 = var2;
            case 142:
                var2 = _closure1_slot16;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1.LIBRARY_APPLICATION_FLAGS_UPDATE_START = var9;
    var1.LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS = var8;
    var1.LIBRARY_APPLICATION_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var7 = var0.applicationId;
        var6 = var0.branchId;
        var4 = var0.launchOptionId;
        var3 = _closure1_slot18;
        var5 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var2);
        var2 = var5.getComboId;
        var2 = var2.bind(var5)(var7, var6);
        var3[var2] = var4;
        var1 = _closure1_slot24;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE = var8;
    var8 = function arg0() {
        _fun30821: for (var _fun30821_ip = 0;;) switch (_fun30821_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var2 = var0.branchId;
                var1 = _closure1_slot17;
                var1 = var1[var3];
                if (!(var1 !== var2)) {
                    _fun30821_ip = 49;
                    continue _fun30821
                }
            case 29:
                var1 = _closure1_slot17;
                var1[var3] = var2;
                var1 = _closure1_slot25;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 49:
                var0 = false;
                return var0;
        }
    };
    var1.LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE = var8;
    var8 = function arg0() {
        _fun30822: for (var _fun30822_ip = 0;;) switch (_fun30822_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.libraryApplications;
                var1 = _closure1_slot21;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 9;
                if (var1) {
                    _fun30822_ip = 106;
                    continue _fun30822
                }
            case 38:
                var7 = var2.value;
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var9 = var6.bind(var0)(var1);
                var8 = var9.getComboId;
                var6 = var7.id;
                var1 = var7.branchId;
                var6 = var8.bind(var9)(var6, var1);
                var1 = _closure1_slot15;
                var1[var6] = var7;
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun30822_ip = 38;
                    continue _fun30822
                }
            case 106:
                return var0;
        }
    };
    var1.LIBRARY_APPLICATIONS_TEST_MODE_ENABLED = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot15 = var0;
        var0 = undefined;
        return var0;
    };
    var1.DEVELOPER_TEST_MODE_RESET = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/LibraryApplicationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3490, 1216, 660, 587, 3498, 1384, 22, 566, 806, 2]);