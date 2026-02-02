// modules/settings/native/renderer/SettingTreeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun88532: for (var _fun88532_ip = 0;;) switch (_fun88532_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun88532_ip = 46;
                    continue _fun88532
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun88532_ip = 55;
                    continue _fun88532
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun88532_ip = 345;
                    continue _fun88532
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun88532_ip = 323;
                    continue _fun88532
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun88532_ip = 283;
                    continue _fun88532
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun88532_ip = 270;
                    continue _fun88532
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
                    _fun88532_ip = 163;
                    continue _fun88532
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun88532_ip = 179;
                    continue _fun88532
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun88532_ip = 249;
                    continue _fun88532
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun88532_ip = 249;
                    continue _fun88532
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun88532_ip = 234;
                    continue _fun88532
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun88532_ip = 247;
                    continue _fun88532
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun88532_ip = 265;
                continue _fun88532;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun88532_ip = 283;
                continue _fun88532;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun88532_ip = 323;
                    continue _fun88532
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
                    _fun88532_ip = 330;
                    continue _fun88532
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun88533: for (var _fun88533_ip = 0;;) switch (_fun88533_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun88533_ip = 56;
                                continue _fun88533
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
                            _fun88533_ip = 67;
                            continue _fun88533;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun88534: for (var _fun88534_ip = 0;;) switch (_fun88534_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun88534_ip = 23;
                    continue _fun88534
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun88534_ip = 33;
                    continue _fun88534
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
                    _fun88534_ip = 70;
                    continue _fun88534
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun88534_ip = 55;
                    continue _fun88534
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NodeType;
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2.cache = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'get';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var1 = var0.cache;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = this;
            var2 = var0.cache;
            var1 = arg1;
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var4 = function() {
            var1 = {};
            var0 = this;
            var0.cache = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var1 = _closure1_slot5;
            var3 = var1.prototype;
            var4 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var4;
            var3 = new var7[var1](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.highestAncestorCache = var3;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.breadcrumbCache = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'transformParent';
        var0.key = var1;
        var1 = function arg0() {
            _fun88542: for (var _fun88542_ip = 0;;) switch (_fun88542_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var1 = var0 == var3;
                    if (var1) {
                        _fun88542_ip = 35;
                        continue _fun88542
                    }
                case 12:
                    var4 = 'string';
                    var2 = typeof var3;
                    var1 = var3;
                    if (!(var4 !== var2)) {
                        _fun88542_ip = 32;
                        continue _fun88542
                    }
                case 26:
                    var2 = undefined;
                    var1 = var3.bind(var2)();
                case 32:
                    var0 = var1;
                case 35:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'validate';
        var0.key = var5;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getAncestors';
        var0.key = var5;
        var5 = function arg0() {
            _fun88544: for (var _fun88544_ip = 0;;) switch (_fun88544_ip) {
                case 0:
                    var6 = this;
                    var0 = new Array(0);
                    var2 = var6.transformParent;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var4 = 3;
                    var1 = var1[var4];
                    var3 = undefined;
                    var1 = var7.bind(var3)(var1);
                    var7 = var1.SETTING_RENDERER_CONFIG;
                    var1 = arg0;
                    var1 = var7[var1];
                    var1 = var1.parent;
                    var1 = var2.bind(var6)(var1);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun88544_ip = 124;
                        continue _fun88544
                    }
                case 67:
                    var7 = var0.push;
                    var7 = var7.bind(var0)(var1);
                    var8 = var6.transformParent;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var4];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.SETTING_RENDERER_CONFIG;
                    var7 = var7[var1];
                    var7 = var7.parent;
                    var1 = var8.bind(var6)(var7);
                    if (var2 != var1) {
                        _fun88544_ip = 67;
                        continue _fun88544
                    }
                case 124:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'isBlocked';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var3 = arg0;
            var2 = this;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = var2.getAncestors;
            var2 = var1.bind(var2)(var3);
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getHighestLevelAncestor';
        var0.key = var5;
        var5 = function arg0() {
            _fun88547: for (var _fun88547_ip = 0;;) switch (_fun88547_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.highestAncestorCache;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var5 = null;
                    if (!(var5 == var0)) {
                        _fun88547_ip = 84;
                        continue _fun88547
                    }
                case 28:
                    var1 = var2.getAncestors;
                    var3 = var1.bind(var2)(var4);
                    var6 = var3.length;
                    var1 = 1;
                    var1 = var6 - var1;
                    var3 = var3[var1];
                    var1 = var4;
                    if (!(var5 != var3)) {
                        _fun88547_ip = 65;
                        continue _fun88547
                    }
                case 62:
                    var1 = var3;
                case 65:
                    var3 = var2.highestAncestorCache;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 84:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getNearestRouteAncestorDataOrSelf';
        var0.key = var5;
        var5 = function arg0() {
            _fun88548: for (var _fun88548_ip = 0;;) switch (_fun88548_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var7 = 3;
                    var0 = var0[var7];
                    var6 = undefined;
                    var0 = var1.bind(var6)(var0);
                    var0 = var0.SETTING_RENDERER_CONFIG;
                    var0 = var0[var4];
                    var2 = var0.type;
                    var1 = _closure1_slot4;
                    var1 = var1.ROUTE;
                    if (!(var2 !== var1)) {
                        _fun88548_ip = 220;
                        continue _fun88548
                    }
                case 63:
                    var2 = _closure1_slot6;
                    var1 = var3.getAncestors;
                    var1 = var1.bind(var3)(var4);
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var3 = var2;
                    if (var1) {
                        _fun88548_ip = 168;
                        continue _fun88548
                    }
                case 98:
                    var2 = var3.value;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var7];
                    var1 = var9.bind(var6)(var1);
                    var1 = var1.SETTING_RENDERER_CONFIG;
                    var1 = var1[var2];
                    var9 = var1.type;
                    var2 = _closure1_slot4;
                    var2 = var2.ROUTE;
                    if (!(var9 !== var2)) {
                        _fun88548_ip = 166;
                        continue _fun88548
                    }
                case 149:
                    var9 = var5.bind(var6)();
                    var2 = var9.done;
                    var3 = var9;
                    if (var2) {
                        _fun88548_ip = 168;
                        continue _fun88548
                    }
                case 164:
                    _fun88548_ip = 98;
                    continue _fun88548;
                case 166:
                    return var1;
                case 168:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '[SettingTree] No route ancestor found for setting: ';
                    var10 = var2.bind(var1)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var2;
                    var1 = new var11[var3](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 220:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getBreadcrumbs';
        var0.key = var5;
        var5 = function arg0() {
            _fun88549: for (var _fun88549_ip = 0;;) switch (_fun88549_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var1 = var2.breadcrumbCache;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var5);
                    var11 = null;
                    if (!(var11 == var0)) {
                        _fun88549_ip = 188;
                        continue _fun88549
                    }
                case 31:
                    var1 = new Array(0);
                    var4 = _closure1_slot6;
                    var3 = var2.getAncestors;
                    var3 = var3.bind(var2)(var5);
                    var9 = undefined;
                    var8 = var4.bind(var9)(var3);
                    var4 = var8.bind(var9)();
                    var3 = var4.done;
                    var7 = 'string';
                    var6 = 3;
                    if (var3) {
                        _fun88549_ip = 159;
                        continue _fun88549
                    }
                case 79:
                    var12 = var4.value;
                    var13 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var3 = var13.bind(var9)(var3);
                    var3 = var3.SETTING_RENDERER_CONFIG;
                    var3 = var3[var12];
                    var3 = var3.title;
                    if (!(var11 != var3)) {
                        _fun88549_ip = 144;
                        continue _fun88549
                    }
                case 120:
                    var13 = typeof var3;
                    var12 = var3;
                    if (!(var7 !== var13)) {
                        _fun88549_ip = 134;
                        continue _fun88549
                    }
                case 130:
                    var12 = var3.bind(var9)();
                case 134:
                    var3 = var1.push;
                    var3 = var3.bind(var1)(var12);
                case 144:
                    var12 = var8.bind(var9)();
                    var3 = var12.done;
                    var4 = var12;
                    if (!var3) {
                        _fun88549_ip = 79;
                        continue _fun88549
                    }
                case 159:
                    var4 = var2.breadcrumbCache;
                    var3 = var4.set;
                    var2 = var1.reverse;
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var4)(var5, var2);
                    return var1;
                case 188:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'clearCaches';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var2 = var0.breadcrumbCache;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0.highestAncestorCache;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/renderer/SettingTreeManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 8946, 10098, 2]);