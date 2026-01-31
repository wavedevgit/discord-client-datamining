// modules/devtools/native/useSortedDevToolsScreens.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun87537: for (var _fun87537_ip = 0;;) switch (_fun87537_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87537_ip = 46;
                    continue _fun87537
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87537_ip = 55;
                    continue _fun87537
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87537_ip = 345;
                    continue _fun87537
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87537_ip = 323;
                    continue _fun87537
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87537_ip = 283;
                    continue _fun87537
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87537_ip = 270;
                    continue _fun87537
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
                    _fun87537_ip = 163;
                    continue _fun87537
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87537_ip = 179;
                    continue _fun87537
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87537_ip = 249;
                    continue _fun87537
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87537_ip = 249;
                    continue _fun87537
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87537_ip = 234;
                    continue _fun87537
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87537_ip = 247;
                    continue _fun87537
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87537_ip = 265;
                continue _fun87537;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87537_ip = 283;
                continue _fun87537;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87537_ip = 323;
                    continue _fun87537
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
                    _fun87537_ip = 330;
                    continue _fun87537
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87538: for (var _fun87538_ip = 0;;) switch (_fun87538_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87538_ip = 56;
                                continue _fun87538
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
                            _fun87538_ip = 67;
                            continue _fun87538;
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
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun87539: for (var _fun87539_ip = 0;;) switch (_fun87539_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87539_ip = 23;
                    continue _fun87539
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87539_ip = 33;
                    continue _fun87539
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
                    _fun87539_ip = 70;
                    continue _fun87539
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87539_ip = 55;
                    continue _fun87539
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function() { // Original name: getSortedDevToolsScreens, environment: var1
        _fun87540: for (var _fun87540_ip = 0;;) switch (_fun87540_ip) {
            case 0:
                var1 = arguments[0];
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun87540_ip = 24;
                    continue _fun87540
                }
            case 11:
                var2 = _closure1_slot3;
                var1 = var2.sortedScreenKeys;
            case 24:
                var _closure2_slot0 = var1;
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.DevToolsScreens;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun87541: for (var _fun87541_ip = 0;;) switch (_fun87541_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var7 = undefined;
                            var2 = undefined;
                            var3 = undefined;
                            var6 = var5().value;
                            var8 = var1;
                            var8 = var8 === var7;
                            var2 = var8;
                            if (var8) {
                                _fun87541_ip = 32;
                                continue _fun87541
                            }
                        case 29:
                            var3 = var6;
                        case 32:
                            var3 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun87541_ip = 60;
                                continue _fun87541
                            }
                        case 40:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun87541_ip = 60;
                                continue _fun87541
                            }
                        case 57:
                            var3 = var5;
                        case 60:
                            var4 = var3;
                            var3 = var2;
                            if (var3) {
                                _fun87541_ip = 72;
                                continue _fun87541
                            }
                        case 69:
                            var1.return();
                        case 72:
                            var5 = var4;
                            var6 = var5.predicate;
                            var5 = null;
                            var5 = var5 == var6;
                            var3 = var5;
                            if (var5) {
                                _fun87541_ip = 106;
                                continue _fun87541
                            }
                        case 93:
                            var5 = var4;
                            var4 = var5.predicate;
                            var3 = var4.bind(var5)();
                        case 106:
                            return var3;
                        case 108:
                            CatchBlockStart(arg_register = 0);
                            if (var2) {
                                _fun87541_ip = 116;
                                continue _fun87541
                            }
                        case 113:
                            var1.return();
                        case 116:
                            throw var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun87542: for (var _fun87542_ip = 0;;) switch (_fun87542_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1[Symbol.iterator];
                            var1 = var0().next;
                            var4 = var1().value;
                            var1 = var0;
                            var2 = undefined;
                            var1 = var1 === var2;
                            var3 = undefined;
                            if (var1) {
                                _fun87542_ip = 27;
                                continue _fun87542
                            }
                        case 24:
                            var3 = var4;
                        case 27:
                            if (var1) {
                                _fun87542_ip = 33;
                                continue _fun87542
                            }
                        case 30:
                            var0.return();
                        case 33:
                            var1 = arg1;
                            var0 = var1[Symbol.iterator];
                            var1 = var0().next;
                            var4 = var1().value;
                            var1 = var0;
                            var1 = var1 === var2;
                            var2 = undefined;
                            if (var1) {
                                _fun87542_ip = 58;
                                continue _fun87542
                            }
                        case 55:
                            var2 = var4;
                        case 58:
                            if (var1) {
                                _fun87542_ip = 64;
                                continue _fun87542
                            }
                        case 61:
                            var0.return();
                        case 64:
                            var1 = _closure2_slot0;
                            var0 = var1.indexOf;
                            var4 = var0.bind(var1)(var3);
                            var0 = var1.indexOf;
                            var3 = var0.bind(var1)(var2);
                            var5 = -1;
                            var2 = var5 === var4;
                            if (!var2) {
                                _fun87542_ip = 112;
                                continue _fun87542
                            }
                        case 106:
                            var0 = 0;
                            if (!(var5 !== var3)) {
                                _fun87542_ip = 135;
                                continue _fun87542
                            }
                        case 112:
                            var1 = var5;
                            if (var2) {
                                _fun87542_ip = 132;
                                continue _fun87542
                            }
                        case 118:
                            var2 = 1;
                            if (!(var5 !== var3)) {
                                _fun87542_ip = 129;
                                continue _fun87542
                            }
                        case 125:
                            var2 = var4 - var3;
                        case 129:
                            var1 = var2;
                        case 132:
                            var0 = var1;
                        case 135:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/useSortedDevToolsScreens.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useSortedDevToolsScreens, environment: var1
        var2 = _closure1_slot6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot3;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot3;
            var0 = var0.sortedScreenKeys;
            return var0;
        };
        var0 = var4.bind(var5)(var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0, arg1) { // Original name: updateSortOrder, environment: var1
        _fun87545: for (var _fun87545_ip = 0;;) switch (_fun87545_ip) {
            case 0:
                var6 = arg1;
                var0 = _closure1_slot3;
                var11 = var0.sortedScreenKeys;
                var4 = new Array(0);
                var8 = 0;
                var12 = var4;
                var10 = 0;
                var0 = arraySpread(var12, var11, var10);
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var7 = var3.bind(var0)(var2);
                var3 = var7.bind(var0)();
                var2 = var3.done;
                var5 = 1;
                if (var2) {
                    _fun87545_ip = 122;
                    continue _fun87545
                }
            case 65:
                var9 = var3.value;
                var2 = _closure1_slot2;
                var2 = var2.bind(var0)(var9, var5);
                var9 = var2[var8];
                var2 = var4.includes;
                var2 = var2.bind(var4)(var9);
                if (var2) {
                    _fun87545_ip = 107;
                    continue _fun87545
                }
            case 97:
                var2 = var4.push;
                var2 = var2.bind(var4)(var9);
            case 107:
                var9 = var7.bind(var0)();
                var2 = var9.done;
                var3 = var9;
                if (!var2) {
                    _fun87545_ip = 65;
                    continue _fun87545
                }
            case 122:
                var3 = var4.indexOf;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var3 = 'up';
                if (!(var3 !== var6)) {
                    _fun87545_ip = 178;
                    continue _fun87545
                }
            case 144:
                var3 = 'down';
                if (!(var3 === var6)) {
                    _fun87545_ip = 202;
                    continue _fun87545
                }
            case 152:
                var6 = var4[var2];
                var3 = var2 + var5;
                var3 = var4[var3];
                var4[var2] = var3;
                var3 = var2 + var5;
                var4[var3] = var6;
                _fun87545_ip = 202;
                continue _fun87545;
            case 178:
                var3 = var4[var2];
                var6 = var2 - var5;
                var6 = var4[var6];
                var4[var2] = var6;
                var2 = var2 - var5;
                var4[var2] = var3;
            case 202:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.updateDevToolsSettings;
                var1 = {};
                var1.sortedScreenKeys = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.updateSortOrder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 11012, 11017, 11013, 566, 2]);