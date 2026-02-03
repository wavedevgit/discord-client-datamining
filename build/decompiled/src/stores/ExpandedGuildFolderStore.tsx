// stores/ExpandedGuildFolderStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun40296: for (var _fun40296_ip = 0;;) switch (_fun40296_ip) {
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
                _fun40296_ip = 74;
                continue _fun40296;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun40299: for (var _fun40299_ip = 0;;) switch (_fun40299_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40299_ip = 46;
                    continue _fun40299
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40299_ip = 55;
                    continue _fun40299
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40299_ip = 343;
                    continue _fun40299
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40299_ip = 323;
                    continue _fun40299
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40299_ip = 283;
                    continue _fun40299
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40299_ip = 270;
                    continue _fun40299
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
                    _fun40299_ip = 163;
                    continue _fun40299
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40299_ip = 179;
                    continue _fun40299
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40299_ip = 249;
                    continue _fun40299
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40299_ip = 249;
                    continue _fun40299
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40299_ip = 234;
                    continue _fun40299
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40299_ip = 247;
                    continue _fun40299
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40299_ip = 265;
                continue _fun40299;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40299_ip = 283;
                continue _fun40299;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40299_ip = 323;
                    continue _fun40299
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
                    _fun40299_ip = 330;
                    continue _fun40299
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40300: for (var _fun40300_ip = 0;;) switch (_fun40300_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40300_ip = 56;
                                continue _fun40300
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
                            _fun40300_ip = 67;
                            continue _fun40300;
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
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun40301: for (var _fun40301_ip = 0;;) switch (_fun40301_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40301_ip = 23;
                    continue _fun40301
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40301_ip = 33;
                    continue _fun40301
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
                    _fun40301_ip = 70;
                    continue _fun40301
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40301_ip = 55;
                    continue _fun40301
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var1 = var1.Set;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun40303: for (var _fun40303_ip = 0;;) switch (_fun40303_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun40303_ip = 69;
                        continue _fun40303
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun40303_ip = 105;
                    continue _fun40303;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun40304: for (var _fun40304_ip = 0;;) switch (_fun40304_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun40304_ip = 53;
                        continue _fun40304
                    }
                case 12:
                    var1 = global;
                    var3 = var1.Set;
                    var4 = var0.expandedFolders;
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var3](var4, var3);
                    var1 = var0 instanceof Object ? var0 : var1;
                    _closure1_slot6 = var1;
                case 53:
                    var1 = var2.waitFor;
                    var0 = _closure1_slot5;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot6;
            var1 = var2.bind(var3)(var1);
            var0.expandedFolders = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getExpandedFolders';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFolderExpanded';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot6;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ExpandedGuildFolderStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun40308: for (var _fun40308_ip = 0;;) switch (_fun40308_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.folderId;
                var0 = global;
                var4 = var0.Set;
                var5 = _closure1_slot6;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var0 = new var6[var4](var5, var4);
                var3 = var0 instanceof Object ? var0 : var3;
                _closure1_slot6 = var3;
                var0 = var3.has;
                var0 = var0.bind(var3)(var2);
                var1 = _closure1_slot6;
                if (var0) {
                    _fun40308_ip = 77;
                    continue _fun40308
                }
            case 65:
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                _fun40308_ip = 87;
                continue _fun40308;
            case 77:
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 87:
                var0 = undefined;
                return var0;
        }
    };
    var1.TOGGLE_GUILD_FOLDER_EXPAND = var7;
    var7 = function arg0() {
        _fun40309: for (var _fun40309_ip = 0;;) switch (_fun40309_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.folderId;
                var3 = var0.expanded;
                var0 = global;
                var5 = var0.Set;
                var6 = _closure1_slot6;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = var4;
                var1 = new var7[var5](var6, var5);
                var1 = var1 instanceof Object ? var1 : var4;
                _closure1_slot6 = var1;
                var1 = _closure1_slot6;
                if (var3) {
                    _fun40309_ip = 90;
                    continue _fun40309
                }
            case 61:
                var3 = var1.has;
                var3 = var3.bind(var1)(var2);
                if (!var3) {
                    _fun40309_ip = 100;
                    continue _fun40309
                }
            case 74:
                var3 = _closure1_slot6;
                var0 = var3.delete;
                var0 = var0.bind(var3)(var2);
                _fun40309_ip = 100;
                continue _fun40309;
            case 90:
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 100:
                var0 = undefined;
                return var0;
        }
    };
    var1.SET_GUILD_FOLDER_EXPANDED = var7;
    var7 = function() {
        _fun40310: for (var _fun40310_ip = 0;;) switch (_fun40310_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.getGuildFolders;
                var3 = var2.bind(var3)();
                var _closure2_slot0 = var3;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun40310_ip = 98;
                    continue _fun40310
                }
            case 29:
                var2 = false;
                var _closure2_slot1 = var2;
                var5 = function arg0() {
                    _fun40311: for (var _fun40311_ip = 0;;) switch (_fun40311_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var4 = _closure2_slot0;
                            var2 = var4.some;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.folderId;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var4)(var0);
                            if (var0) {
                                _fun40311_ip = 90;
                                continue _fun40311
                            }
                        case 35:
                            var0 = global;
                            var5 = var0.Set;
                            var6 = _closure1_slot6;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var7 = var4;
                            var2 = new var7[var5](var6, var5);
                            var2 = var2 instanceof Object ? var2 : var4;
                            _closure1_slot6 = var2;
                            var0 = var2.delete;
                            var0 = var0.bind(var2)(var3);
                            var0 = true;
                            _closure2_slot1 = var0;
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun40310_ip = 92;
                    continue _fun40310
                }
            case 67:
                var1 = var2.value;
                var1 = var5.bind(var4)(var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun40310_ip = 67;
                    continue _fun40310
                }
            case 92:
                var0 = _closure2_slot1;
                return var0;
            case 98:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var7;
    var3 = function() {
        _fun40313: for (var _fun40313_ip = 0;;) switch (_fun40313_ip) {
            case 0:
                var0 = _closure1_slot6;
                var2 = var0.size;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun40313_ip = 54;
                    continue _fun40313
                }
            case 18:
                var0 = global;
                var0 = var0.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var3 = var2;
                var0 = new var3[var0](var2);
                var0 = var0 instanceof Object ? var0 : var2;
                _closure1_slot6 = var0;
                var0 = undefined;
                return var0;
            case 54:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_FOLDER_COLLAPSE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ExpandedGuildFolderStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 566, 806, 2]);