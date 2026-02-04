// ../discord_common/js/shared/utils/StringUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17836: for (var _fun17836_ip = 0;;) switch (_fun17836_ip) {
        case 0:
            var6 = require;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var0 = function arg0, arg1() {
                _fun17837: for (var _fun17837_ip = 0;;) switch (_fun17837_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun17837_ip = 46;
                            continue _fun17837
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun17837_ip = 55;
                            continue _fun17837
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun17837_ip = 343;
                            continue _fun17837
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun17837_ip = 323;
                            continue _fun17837
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun17837_ip = 283;
                            continue _fun17837
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun17837_ip = 270;
                            continue _fun17837
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
                            _fun17837_ip = 163;
                            continue _fun17837
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun17837_ip = 179;
                            continue _fun17837
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun17837_ip = 249;
                            continue _fun17837
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun17837_ip = 249;
                            continue _fun17837
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun17837_ip = 234;
                            continue _fun17837
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun17837_ip = 247;
                            continue _fun17837
                        }
                    case 234:
                        var8 = _closure1_slot5;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun17837_ip = 265;
                        continue _fun17837;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun17837_ip = 283;
                        continue _fun17837;
                    case 270:
                        var6 = _closure1_slot5;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun17837_ip = 323;
                            continue _fun17837
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
                            _fun17837_ip = 330;
                            continue _fun17837
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun17838: for (var _fun17838_ip = 0;;) switch (_fun17838_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun17838_ip = 56;
                                        continue _fun17838
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
                                    _fun17838_ip = 67;
                                    continue _fun17838;
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
            var _closure1_slot4 = var0;
            var0 = function arg0, arg1() {
                _fun17839: for (var _fun17839_ip = 0;;) switch (_fun17839_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun17839_ip = 23;
                            continue _fun17839
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun17839_ip = 33;
                            continue _fun17839
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
                            _fun17839_ip = 70;
                            continue _fun17839
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun17839_ip = 55;
                            continue _fun17839
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot5 = var0;
            var0 = global;
            var8 = var0.Object;
            var5 = var8.defineProperty;
            var4 = {};
            var1 = true;
            var4.value = var1;
            var1 = '__esModule';
            var1 = var5.bind(var8)(var2, var1, var4);
            var1 = /[\u0300-\u036f]/g;
            var _closure1_slot2 = var1;
            var1 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
            var _closure1_slot3 = var1;
            var1 = var0.String;
            var1 = var1.prototype;
            var4 = var1.normalize;
            var1 = null;
            if (!(var1 != var4)) {
                _fun17836_ip = 135;
                continue _fun17836
            }
        case 128:
            var4 = function(arg0) { // Environment: var3
                var2 = arg0;
                var1 = var2.normalize;
                var0 = 'NFD';
                var3 = var1.bind(var2)(var0);
                var2 = var3.replace;
                var1 = _closure1_slot2;
                var0 = '';
                var2 = var2.bind(var3)(var1, var0);
                var1 = var2.normalize;
                var0 = 'NFC';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            _fun17836_ip = 140;
            continue _fun17836;
        case 135:
            var4 = function(arg0) { // Environment: var3
                var0 = arg0;
                return var0;
            };
        case 140:
            var0 = var0.String;
            var0 = var0.prototype;
            var0 = var0.normalize;
            if (!(var1 != var0)) {
                _fun17836_ip = 168;
                continue _fun17836
            }
        case 161:
            var1 = function arg0() {
                var4 = arg0;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var2 = var1[var3];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var _closure2_slot0 = var1;
                var1 = '';
                var _closure2_slot1 = var1;
                var1 = var4.normalize;
                var2 = 'NFD';
                var7 = var1.bind(var4)(var2);
                var4 = new Array(0);
                var8 = var4;
                var6 = 0;
                var1 = arraySpread(var8, var7, var6);
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun17844: for (var _fun17844_ip = 0;;) switch (_fun17844_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot1;
                            var3 = _closure2_slot0;
                            var3 = var3[var2];
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun17844_ip = 27;
                                continue _fun17844
                            }
                        case 24:
                            var2 = var3;
                        case 27:
                            var0 = var0 + var2;
                            _closure2_slot1 = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = _closure2_slot1;
                var0 = var1.normalize;
                var1 = var0.bind(var1)(var2);
                var0 = var1.toLocaleLowerCase;
                var0 = var0.bind(var1)();
                return var0;
            };
            _fun17836_ip = 173;
            continue _fun17836;
        case 168:
            var1 = function(arg0) { // Environment: var3
                var0 = arg0;
                return var0;
            };
        case 173:
            var0 = 1;
            var5 = var7[var0];
            var0 = undefined;
            var9 = var6.bind(var0)(var5);
            var8 = var9.fileFinishedImporting;
            var5 = '../discord_common/js/shared/utils/StringUtils.tsx';
            var5 = var8.bind(var9)(var5);
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.cssValueToNumber;
            var2.cssValueToNumber = var5;
            var5 = function arg0() {
                _fun17845: for (var _fun17845_ip = 0;;) switch (_fun17845_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = null;
                        var1 = var0 == var5;
                        var4 = '';
                        var0 = var4;
                        if (var1) {
                            _fun17845_ip = 74;
                            continue _fun17845
                        }
                    case 19:
                        var2 = var5.charAt;
                        var1 = 0;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.toUpperCase;
                        var3 = var1.bind(var2)();
                        var2 = var5.slice;
                        var1 = 1;
                        var2 = var2.bind(var5)(var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var0 = var1.bind(var4)(var3, var2);
                    case 74:
                        return var0;
                }
            };
            var2.upperCaseFirstChar = var5;
            var5 = function(arg0, arg1) { // Environment: var3
                _fun17846: for (var _fun17846_ip = 0;;) switch (_fun17846_ip) {
                    case 0:
                        var2 = arg0;
                        var9 = arg1;
                        var5 = arguments[2];
                        var0 = undefined;
                        if (!(var5 === var0)) {
                            _fun17846_ip = 19;
                            continue _fun17846
                        }
                    case 15:
                        var5 = '…';
                    case 19:
                        var1 = null;
                        var3 = var1 == var2;
                        var4 = '';
                        var0 = var4;
                        if (var3) {
                            _fun17846_ip = 206;
                            continue _fun17846
                        }
                    case 38:
                        var1 = var1 == var9;
                        var0 = var4;
                        if (var1) {
                            _fun17846_ip = 206;
                            continue _fun17846
                        }
                    case 51:
                        var3 = var2.length;
                        var1 = var2;
                        if (!(var3 > var9)) {
                            _fun17846_ip = 203;
                            continue _fun17846
                        }
                    case 66:
                        var6 = _closure1_slot3;
                        var3 = var6.test;
                        var3 = var3.bind(var6)(var2);
                        if (var3) {
                            _fun17846_ip = 111;
                            continue _fun17846
                        }
                    case 86:
                        var7 = var2.substring;
                        var3 = var5.length;
                        var6 = var9 - var3;
                        var3 = 0;
                        var6 = var7.bind(var2)(var3, var6);
                        _fun17846_ip = 159;
                        continue _fun17846;
                    case 111:
                        var8 = new Array(0);
                        var7 = 0;
                        var12 = var8;
                        var11 = var2;
                        var10 = 0;
                        var2 = arraySpread(var12, var11, var10);
                        var3 = var8.slice;
                        var2 = var5.length;
                        var2 = var9 - var2;
                        var3 = var3.bind(var8)(var7, var2);
                        var2 = var3.join;
                        var6 = var2.bind(var3)(var4);
                    case 159:
                        var3 = var6.replace;
                        var2 = /[\s.]+$/;
                        var3 = var3.bind(var6)(var2, var4);
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var1 = var2.bind(var4)(var3, var5);
                    case 203:
                        var0 = var1;
                    case 206:
                        return var0;
                }
            };
            var2.truncateText = var5;
            var5 = function arg0() {
                _fun17847: for (var _fun17847_ip = 0;;) switch (_fun17847_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = null;
                        var1 = var0 != var5;
                        var4 = '';
                        var0 = var4;
                        if (!var1) {
                            _fun17847_ip = 107;
                            continue _fun17847
                        }
                    case 19:
                        var3 = var5.replace;
                        var2 = /'s /g;
                        var1 = ' ';
                        var5 = var3.bind(var5)(var2, var1);
                        var3 = var5.replace;
                        var2 = /\w+/g;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = 0;
                            var0 = var1[var0];
                            return var0;
                        };
                        var3 = var3.bind(var5)(var2, var1);
                        var2 = var3.replace;
                        var1 = /\s/g;
                        var0 = var2.bind(var3)(var1, var4);
                    case 107:
                        return var0;
                }
            };
            var2.getAcronym = var5;
            var2.stripDiacritics = var4;
            var3 = function arg0() {
                _fun17849: for (var _fun17849_ip = 0;;) switch (_fun17849_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = global;
                        var3 = var1.Intl;
                        var2 = null;
                        var4 = var2 == var3;
                        var7 = undefined;
                        var2 = undefined;
                        if (var4) {
                            _fun17849_ip = 30;
                            continue _fun17849
                        }
                    case 24:
                        var2 = var3.Segmenter;
                    case 30:
                        if (!(var7 !== var2)) {
                            _fun17849_ip = 140;
                            continue _fun17849
                        }
                    case 34:
                        var2 = _closure1_slot4;
                        var1 = var1.Intl;
                        var1 = var1.Segmenter;
                        var3 = var1.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var3;
                        var1 = new var11[var1](var10);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var1 = var3.segment;
                        var1 = var1.bind(var3)(var0);
                        var6 = var2.bind(var7)(var1);
                        var3 = var6.bind(var7)();
                        var2 = var3.done;
                        var5 = 1;
                        var4 = var3;
                        var3 = 0;
                        var1 = 0;
                        if (var2) {
                            _fun17849_ip = 138;
                            continue _fun17849
                        }
                    case 111:
                        var2 = var4.value;
                        var3 = var3 + var5;
                        var9 = var6.bind(var7)();
                        var2 = var9.done;
                        var4 = var9;
                        var1 = var3;
                        if (!var2) {
                            _fun17849_ip = 111;
                            continue _fun17849
                        }
                    case 138:
                        return var1;
                    case 140:
                        var0 = var0.length;
                        return var0;
                }
            };
            var2.countGraphemeClusters = var3;
            var2.normalize = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1609, 2, 1610]);